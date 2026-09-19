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
