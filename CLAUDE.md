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

## Git conventions (owner's rules — always follow)

- **Branch names start with `Keke/`** and describe the change (e.g. `Keke/youtube-thumbnails`).
  Use this even if the session was handed a `claude/...` branch name.
- **No attribution of any kind:** no `Co-Authored-By`, no `Claude-Session` lines, no
  "Generated with Claude Code" in commits, PR descriptions or comments. Commit as the
  repo owner (`git config user.name laduwan`, `git config user.email kelajoh@gmail.com`).
- **Don't open pull requests automatically.** Push the branch, then ask whether to open a PR.

## YouTube tools

`tools/youtube/` updates the PassReadyPrep YouTube channel from the upload sheets
(titles, descriptions, tags, playlists, thumbnails, scheduling). It runs on the owner's
Mac, not on Render. Current status and the per-batch steps are at the top of
`tools/youtube/README.md`.

