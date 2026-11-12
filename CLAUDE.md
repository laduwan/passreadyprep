# PassReadyPrep — codebase notes for Claude

## Cross-file invariants

### LENGTH_BAND ↔ quality gate (1.25 ratio threshold)

**Files:** `tools/cases/fix-distractors.js` and `tools/cases/qualityGate.js`

`LENGTH_BAND` (currently `1.11`) lives in `fix-distractors.js`.
The `1.25` max/min ratio threshold lives in `qualityGate.js`.
They are mathematically bound:

```
band² ≤ threshold   →   1.11² = 1.2321 ≤ 1.25   ✓
```

Four options all within the `LENGTH_BAND` window have a worst-case ratio of `band²`.
If you raise `LENGTH_BAND` without also raising the gate, valid items will be rejected.
If you raise the gate without updating `LENGTH_BAND`, the documented ceiling comment in
`fix-distractors.js` becomes wrong and the length-fix logic will allow outputs the gate
then rejects in a later pass.

**Rule:** never edit one constant without checking the other.
The current safe ceiling is `sqrt(1.25) ≈ 1.118`; `1.11` leaves a small safety margin.
A full explanation sits in the comment block above `LENGTH_BAND` in `fix-distractors.js`.

### Plan-gated features go through `resolveAccess`

**Files:** `routes/content.js` (`resolveAccess`, exported as `router.resolveAccess`), `routes/debrief.js`

`resolveAccess` turns the request's token into the account's NCMHCE access
level (`free`, `trial`, `expired`, `paid`, `gated`) and, when paid, the tier
(`req.subscriptionTier`). The guarantee check-in gate (past the paid period
with no exam appointment or score letter on file → `gated`) lives inside it.

**Rule:** a feature sold on one plan is gated by mounting `resolveAccess` and
reading `req.accessLevel` / `req.subscriptionTier`, as `routes/debrief.js`
does. Never re-derive the rule from `subscription.currentPeriodEnd` and
`scoreReport.status` in another route: two copies drift, and the drift reads
as a member keeping a feature the rest of the app has already gated.

## Plan naming

The one-time plan is the **Pass Guarantee** (a product name, capitalised; `$249`
NCMHCE, `$189` NCE). What it gives is **access extensions until you pass**, a
benefit phrase in lower case. Write "the Pass Guarantee includes free access
extensions until you pass", never "the Access Extensions Until You Pass plan".
This matches the App Store listing and the FAQ.

## Where sign-in lands

A signed-in member lands on `dashboard.html`: the home page's signed-in redirect,
and `register.html`'s default `next`, both go there. Flows that pass their own
`?next=` (the NCE page, checkout) keep it. The case list stays at `/study`.

## NCE and NCMHCE are separate products, offered equally

Two products, one account. Each exam has its own study pages (`/study` and
`exam.html` for the NCMHCE; `nce.html` for the NCE), its own plans and its own
trial. Where a page serves both, it carries an exam toggle that switches the
whole page, never a blend: the dashboard (`dashboard.html?exam=…`), the plan
picker (`pricing.html?exam=…`) and the home page's sample question and plan
grid. Links into those pages carry the exam, so a visitor never lands on the
wrong product. The home page is the hub that names both and links out to each.

## The React app under `client/src` does not ship — do not edit it

`client/src` (`main.jsx`, `App.jsx`, `pages/*.jsx`) is **unused code**. Nothing
imports it:

- `client/index.html` has no `type="module"` script and no reference to `src/`.
- `vite.config.js` sets no entry, so Vite builds `client/index.html` as a plain
  HTML page. A build transforms 3 modules and emits no JS bundle.
- Nothing anywhere references `main.jsx` or `App.jsx`.

So editing a `.jsx` file changes nothing that runs. The pages that actually
ship are vanilla HTML with inline script:

| What | File | Served at |
|---|---|---|
| Study dashboard and case player | `public/index.html` | `/study` (explicit route in `server.js`) |
| Dashboard, both exams behind a toggle (screens 3 and 7) | `public/dashboard.html` | `/dashboard.html?exam=…` |
| Plan picker (screens 6a/6b) | `public/pricing.html` | `/pricing.html?exam=…` |
| Older copy of the study page | `client/index.html` → `client/dist/index.html` | `/index.html` and the SPA fallback |
| Home page | `public/landing.html` | `/` |

A change to the case player usually belongs in **both** `public/index.html` and
`client/index.html`. In the iOS bundle the question doesn't arise:
`client/scripts/build-ios.mjs` copies `public/index.html` over
`client/dist/index.html`. New pages a bundled page links to must be added to
`PAGES` in that script, or the iOS build fails.

The redesign's shared tokens live in `public/prp-ui.css`; a page opts in by
linking it. Pages that have not been rebuilt keep their own styles.

## Git conventions (owner's rules — always follow)

- **Branch names start with `Keke/`** and describe the change (e.g. `Keke/youtube-thumbnails`).
  Use this even if the session was handed a `claude/...` branch name.
- **No attribution of any kind:** no `Co-Authored-By`, no `Claude-Session` lines, no
  "Generated with Claude Code" in commits, PR descriptions or comments. Commit as the
  repo owner (`git config user.name laduwan`, `git config user.email kelajoh@gmail.com`).
- **Don't open pull requests automatically.** Push the branch, then ask whether to open a PR.

## YouTube tools (separate branch)

The YouTube channel tools (titles, descriptions, playlists, thumbnails, scheduling from
the upload sheets) live on branch `Keke/youtube-fix-preview-bugs` under `tools/youtube/`,
kept off `main` on purpose. They run on the owner's Mac from a separate folder,
`~/passreadyprep-youtube`. Status and per-batch steps are at the top of
`tools/youtube/README.md` on that branch.

