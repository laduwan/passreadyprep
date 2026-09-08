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
| `tools/cases/fix-distractors.js` | AI-assisted repair of flagged questions — one Anthropic API call per **case** covering all its flagged questions. Rewrites **and re-tiers** the 3 non-correct options (the bank was written when any weights from {0,-1,-2} were allowed; the current gate needs exactly one 0 / -1 / -2, so the model decides which distractor is the near-miss, the novice error, the harmful one). The keyed answer is never changed. Each returned question must re-pass the gate and add no new schema error, or it is left as-is. With `--apply`, writes just the repaired questions' paths and sets the case back to `sme_review` (`--keep-status` leaves published cases live). `needsWork` is cleared only if the whole case then passes. Only a question with an *ambiguous key* (not exactly one weight-3 that is the sole `isCorrect`, or an empty option) is skipped for manual review. Published only by default; `--all` includes `sme_review`/`draft`; `--count` is cases per run (default 5). |

Both preserve any human-written `reviewNote` and replace only their own earlier
line in it, so re-running is safe. A question the model's reply omits or
mangles is simply still flagged on the next run, so re-running is also how you
mop up stragglers.

Retire exact duplicate cases first (`dedup-retire.js --exact`, then `--apply`)
so you don't pay to repair both copies.

**Which model.** All three generation tools (`generate-deep.js`,
`fix-distractors.js`, `rewrite-questions.js`) call the API through
`tools/cases/anthropic.js`, which uses `ANTHROPIC_MODEL` if that env var is set
on the host and otherwise `claude-opus-5`. Every run prints `with model …` in
its header — check it before trusting a batch; item quality differs noticeably
between Opus and Sonnet. Responses are streamed so a long Opus rewrite cannot
trip Node's 5-minute fetch headers timeout.

**Whole-question rewrite (the exam-standard mandate).** `rewrite-questions.js`
rewrites EVERY question of a case from scratch — stem, all four options
designed together, tiers, explanations, evidence citations — while keeping the
narrative, diagnosis, references, the question count, and each question's
domain and clinical decision point (the old stem and key are passed to the
model as the content-area anchor). A 5-question case stays 5 questions on the
same five topics; a 13-question case stays 13. It is the better tool when the
keys themselves were written to the old standard (padded, always longest):
designing all four options together gives parity for free instead of padding
distractors up to a padded key. Same flags and the same review round-trip as
`fix-distractors.js` below, with 4 sheet rows per question (the key is new
too; `weight_override` may move it) and a `stem_override` column.

```bash
node tools/cases/rewrite-questions.js                                              # plan
node tools/cases/rewrite-questions.js --generate --ids ncmhce-D160                 # 1 call, print rewrites
node tools/cases/rewrite-questions.js --generate --count 30 --save tools/cases/review/rw1
node tools/cases/rewrite-questions.js --generate --skip 30 --count 30 --save tools/cases/review/rw2
node tools/cases/rewrite-questions.js --from tools/cases/review/rw1.json --review tools/cases/review/rw1.csv
node tools/cases/rewrite-questions.js --from tools/cases/review/rw1.json --review tools/cases/review/rw1.csv --apply --keep-status
```

**Reviewed flow (recommended at bank scale).** `--generate --save NAME` writes
the proposals out for an SME instead of touching the database:

| File | What it is |
|---|---|
| `NAME.html` | The review document: every proposed question with the key, each distractor before → after, its tier (near-miss 0 / novice error -1 / harmful error -2), and the "why a candidate picks it" line. Opens in a browser or Word; print to PDF. |
| `NAME.csv` | The decision sheet, one row per distractor. Reviewers fill `approve` (N rejects the whole question), `weight_override` (0 / -1 / -2; the three must stay one of each), `text_override`, `comment` in Excel or Sheets. Blank = accept as proposed. |
| `NAME.json` | The exact proposals. `--from NAME.json` applies *these*, not a fresh API roll, so what goes live is what was reviewed. |

`--from` re-checks each live question is unchanged since the proposals were
made (question id, option ids, key text), applies the sheet's decisions, and
re-runs the gate before writing. A question the reviewer rejected, or whose
overrides no longer form {0,-1,-2}, is skipped and reported.

```bash
node tools/cases/audit-quality.js --all --summary        # one line per case + bank-wide failure mix
node tools/cases/dedup-retire.js --threshold 0.7         # retire narrative-variant copies (then --apply)
node tools/cases/fix-distractors.js                      # free plan: per-case flag counts + failure mix

# reviewed: generate -> SME evaluates/weights -> apply what was approved
# (cases stay flagged until applied, so cut later batches with --skip)
node tools/cases/fix-distractors.js --generate --count 30 --save tools/cases/review/batch1
node tools/cases/fix-distractors.js --generate --skip 30 --count 30 --save tools/cases/review/batch2
#   ...send batch1.html + batch1.csv to the reviewer; get batch1.csv back...
node tools/cases/fix-distractors.js --from tools/cases/review/batch1.json --review tools/cases/review/batch1.csv
node tools/cases/fix-distractors.js --from tools/cases/review/batch1.json --review tools/cases/review/batch1.csv --apply --keep-status

# direct (small batches you eyeball yourself)
node tools/cases/fix-distractors.js --generate --ids ncmhce-D160   # 1 API call, print the rewrites
node tools/cases/fix-distractors.js --apply --count 20             # repair 20 cases -> sme_review
node tools/cases/fix-distractors.js --apply --count 20 --keep-status   # ...or keep them published
```

**Status after `--apply`:** the default sends every repaired case to
`sme_review`, which un-publishes it until a human re-publishes. After a
reviewed apply that is redundant and, at bank scale, empties the app — pass
`--keep-status`. The `Auto-repair:` review note and the `/review.html`
"Needs work" badge still record what changed.

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
