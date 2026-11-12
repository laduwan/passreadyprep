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

### The guarantee check-in gate

**Files:** `utils/guaranteeRules.js` (`checkInGate`), `routes/content.js`, `routes/debrief.js`

Past the paid period, a guarantee member is held until they check in with an
exam appointment or a score letter. `pending` counts as checked in; `passed`
never gates. That rule lives in `checkInGate` and nowhere else.

**Rule:** any feature the guarantee tier unlocks calls `checkInGate`. Do not
re-derive it from `subscription.currentPeriodEnd` and `scoreReport.status` in a
route — two copies will drift, and the drift reads as a member keeping a
feature the rest of the app has already gated.

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
| Older copy of the same page | `client/index.html` → `client/dist/index.html` | `/index.html` and the SPA fallback |
| Home page | `public/landing.html` | `/` |

A change to the case player usually belongs in **both** `public/index.html` and
`client/index.html`. In the iOS bundle the question doesn't arise:
`client/scripts/build-ios.mjs` copies `public/index.html` over
`client/dist/index.html`.

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

