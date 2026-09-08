# Deep-case import runbook

How to get the NCMHCE **deep cases** (`tools/cases/deep-cases-batch-*.js`, ids
`ncmhce-D###`) from the repo into the live app so users can see them.

> **Key fact:** the cases living in the repo are **not** automatically in the
> database. The app only serves `ContentItem` documents with
> `status: 'published'`. Import is a **separate, human-run step** and must run
> somewhere that can reach the database (e.g. **Render**, where `MONGO_URI` is
> already set and the IP is allow-listed on Atlas). It cannot be run from a
> sandbox/CI box whose IP is not on the Atlas Network Access list.

## What the scripts do

| Script | Purpose |
|---|---|
| `tools/cases/import-deep-cases.js` | Auto-discovers every `deep-cases-batch-*.js` (+ the D101 exemplar), re-validates each case against the depth gate, and **upserts** `ContentItem`s by `{examId, externalId}` under the `ncmhce` exam. Idempotent. |
| `tools/cases/publish-deep-cases.js` | Flips existing deep-case `ContentItem`s from `sme_review` → `published`. |

Both connect with `dbName: 'passreadyprep'` — the **same** database the app
reads (`server.js`). The database name in the `MONGO_URI` path is overridden, so
a URI ending in `/counselorready` still reads/writes `passreadyprep`.

**Status is set only on INSERT** (`$setOnInsert`). Re-running the importer never
re-statuses or clobbers a case you have already published — it only refreshes
content and inserts genuinely new ids.

## Steps (run on Render → your service → Shell)

1. **Make sure the service is on the latest `main`** (redeploy if needed) so all
   `deep-cases-batch-*.js` files are present in that checkout. The importer only
   imports the files it can see.

2. **Preview — no DB writes, always safe:**
   ```bash
   node tools/cases/import-deep-cases.js --dry-run
   ```
   Lists every case, validates sections `[5,4,4]`, and prints how many it would
   upsert.

3. **Import and publish in one step** (new cases inserted straight as
   `published`):
   ```bash
   node tools/cases/import-deep-cases.js --publish
   ```
   Or import as `sme_review` first (default, for human review), then publish:
   ```bash
   node tools/cases/import-deep-cases.js          # inserts as sme_review
   node tools/cases/publish-deep-cases.js --apply # flips sme_review -> published
   ```

4. **Verify:**
   ```bash
   node tools/cases/import-deep-cases.js --dry-run
   ```

## Correcting cases already live

Cases imported before the gold-standard item-quality gate (`qualityGate.js` —
weight gradient, structural parity, no absolutes, novice-trap depth) existed
can still be live with weaker distractors. Two scripts, same Render-shell
constraint as above (need `MONGO_URI` + Atlas access):

| Script | Purpose |
|---|---|
| `tools/cases/audit-quality.js` | Read-only report of every live case that fails `caseSchema.js` + `examDepth.js` + `qualityGate.js`. `--flag` writes `needsWork`/`reviewNote` so failures surface in `/review.html`. |
| `tools/cases/fix-distractors.js` | AI-assisted repair for the *quality* subset of failures (structural parity, absolutes, thin `commonMistake`) — rewrites only the 3 non-correct options per flagged question via the Anthropic API, re-validates, and (with `--apply`) writes just those questions' paths and sets the case back to `sme_review` for a human re-check. `needsWork` is cleared only if the whole case then passes the gate. Questions with a broken weight/`isCorrect` set or an empty option are skipped for manual review — a wording rewrite can't safely guess a corrupted correct answer. Published only by default; `--all` includes `sme_review`/`draft`. |

Both preserve any human-written `reviewNote` and replace only their own earlier
line in it, so re-running is safe.

```bash
node tools/cases/audit-quality.js --all              # see what's broken, all statuses
node tools/cases/fix-distractors.js                   # free plan of what's repairable (published)
node tools/cases/fix-distractors.js --generate         # show proposed rewrites (API calls, no writes)
node tools/cases/fix-distractors.js --apply --count 10 # write repairs, send back to sme_review
```

## Who sees the cases afterward

Access tiers live in `routes/content.js` (`resolveAccess`):

- **Paid** (active monthly / pass3 / guarantee): all published cases under the
  `ncmhce` exam.
- **Trial** (registered account within `TRIAL_DAYS` of signup): full access.
- **Anonymous / expired** (no token, or trial over with no active plan): capped
  at `FREE_CASE_LIMIT` — the list is sliced and per-case access is gated to the
  first N by `category, externalId`.

If the app "only shows a few," that teaser cap or an expired trial — not a data
problem — is usually why. `FREE_CASE_LIMIT` and `TRIAL_DAYS` are the knobs.

## Troubleshooting

- **"Could not connect… IP that isn't whitelisted"** — you're running from a host
  whose IP is not on the Atlas Network Access list. Run from Render, or add the
  host's IP in Atlas → Network Access.
- **"Nothing to publish" from `publish-deep-cases.js`** — everything discovered
  is already `published` (0 in `sme_review`). If cases are still missing from the
  app, they were never **imported** — run `import-deep-cases.js` first.
- **App shows fewer than expected** — check `FREE_CASE_LIMIT` and whether you're
  viewing as a free vs. paid user; confirm the cases carry the `ncmhce` `examId`
  (the importer always sets it).
- **Never commit `MONGO_URI` or a `.env` with real credentials.** Provide the
  connection string only via the host's environment. If a credential is ever
  exposed, rotate it in Atlas and update `MONGO_URI`.
