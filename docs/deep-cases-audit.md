# Deep-case bank — quality audit

**Generated:** 2026-09-15
**Cases scanned:** 228
**Sources:** 27 files under `tools/cases/`

Gate: `tools/cases/qualityGate.js` — weights `{3, 0, -1, -2}` exactly once each, length ratio ≤ 1.25, key not the sole longest, no absolutes in distractors, `commonMistake` on each distractor.

---

## Summary

- Cases passing all questions: **0** / 228
- Questions passing: **42** / 2012  (2.1%)

| Error kind | Count |
|---|---|
| weights | 1857 |
| key-longest | 735 |
| ratio | 675 |
| absolutes | 190 |
| mistake | 51 |

### Key position (A/B/C/D)

- Counts: **1601 / 404 / 7 / 0** across 2012 questions
- Percentages: 80% / 20% / 0% / 0%
- Expected uniform: 503 each; χ² = 3408.4

### By source

| File | Cases | Questions | Bad cases | Bad questions |
|---|---|---|---|---|
| `tools/cases/cases-21-30.js` | 10 | 50 | 10 | 50 |
| `tools/cases/cases-31-70.js` | 40 | 200 | 40 | 200 |
| `tools/cases/generated-cases.js` | 55 | 275 | 55 | 263 |
| `tools/cases/migrated-cases.js` | 10 | 50 | 10 | 43 |
| `tools/cases/seed-cases.js` | 4 | 20 | 4 | 20 |
| `tools/cases/deep-cases-batch-01.js` | 3 | 39 | 3 | 39 |
| `tools/cases/deep-cases-batch-02.js` | 5 | 65 | 5 | 64 |
| `tools/cases/deep-cases-batch-03.js` | 5 | 65 | 5 | 63 |
| `tools/cases/deep-cases-batch-04.js` | 1 | 13 | 1 | 13 |
| `tools/cases/deep-cases-batch-05.js` | 5 | 65 | 5 | 65 |
| `tools/cases/deep-cases-batch-06.js` | 5 | 65 | 5 | 63 |
| `tools/cases/deep-cases-batch-07.js` | 5 | 65 | 5 | 62 |
| `tools/cases/deep-cases-batch-08.js` | 5 | 65 | 5 | 64 |
| `tools/cases/deep-cases-batch-09.js` | 5 | 65 | 5 | 62 |
| `tools/cases/deep-cases-batch-10.js` | 5 | 65 | 5 | 65 |
| `tools/cases/deep-cases-batch-11.js` | 5 | 65 | 5 | 64 |
| `tools/cases/deep-cases-batch-12.js` | 5 | 65 | 5 | 65 |
| `tools/cases/deep-cases-batch-13.js` | 5 | 65 | 5 | 65 |
| `tools/cases/deep-cases-batch-14.js` | 5 | 65 | 5 | 65 |
| `tools/cases/deep-cases-batch-15.js` | 5 | 65 | 5 | 64 |
| `tools/cases/deep-cases-batch-16.js` | 5 | 65 | 5 | 62 |
| `tools/cases/deep-cases-batch-17.js` | 5 | 65 | 5 | 63 |
| `tools/cases/deep-cases-batch-18.js` | 5 | 65 | 5 | 64 |
| `tools/cases/deep-cases-batch-19.js` | 4 | 52 | 4 | 52 |
| `tools/cases/deep-cases-batch-20.js` | 16 | 208 | 16 | 205 |
| `tools/cases/deep-cases-batch-22.js` | 4 | 52 | 4 | 52 |
| `tools/cases/exemplar-deep-mdd.js` | 1 | 13 | 1 | 13 |

## Failed cases

### `case21`  (tools/cases/cases-21-30.js)
- [case21] q1: length ratio 5.26 exceeds 1.25 (19,100,31,48)
- [case21] q1: correct answer is the longest option
- [case21] q2: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [case21] q2: length ratio 3.42 exceeds 1.25 (42,82,33,24)
- [case21] q2: correct answer is the longest option
- [case21] q3: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [case21] q3: length ratio 3.80 exceeds 1.25 (30,76,20,28)
- [case21] q3: correct answer is the longest option
- [case21] q4: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [case21] q4: length ratio 2.71 exceeds 1.25 (21,57,22,24)
- [case21] q4: correct answer is the longest option
- [case21] q5: weights [3,0,0,-1] must be exactly [3,0,-1,-2]
- [case21] q5: length ratio 8.67 exceeds 1.25 (9,78,36,31)
- [case21] q5: correct answer is the longest option
- [case21] q5: opt a: commonMistake missing or too short

### `case22`  (tools/cases/cases-21-30.js)
- [case22] q1: weights [3,0,0,-2] must be exactly [3,0,-1,-2]
- [case22] q1: length ratio 4.00 exceeds 1.25 (24,88,28,22)
- [case22] q1: correct answer is the longest option
- [case22] q2: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [case22] q2: length ratio 4.14 exceeds 1.25 (21,87,25,32)
- [case22] q2: correct answer is the longest option
- [case22] q3: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [case22] q3: length ratio 2.96 exceeds 1.25 (27,77,26,27)
- [case22] q3: correct answer is the longest option
- [case22] q4: weights [3,0,0,-2] must be exactly [3,0,-1,-2]
- [case22] q4: length ratio 3.19 exceeds 1.25 (26,83,34,34)
- [case22] q4: correct answer is the longest option
- [case22] q5: length ratio 4.88 exceeds 1.25 (17,83,27,28)
- [case22] q5: correct answer is the longest option

### `case23`  (tools/cases/cases-21-30.js)
- [case23] q1: weights [3,-1,-1,-1] must be exactly [3,0,-1,-2]
- [case23] q1: length ratio 3.68 exceeds 1.25 (42,70,38,19)
- [case23] q1: correct answer is the longest option
- [case23] q2: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [case23] q2: length ratio 2.56 exceeds 1.25 (34,82,32,37)
- [case23] q2: correct answer is the longest option
- [case23] q3: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [case23] q3: length ratio 3.03 exceeds 1.25 (38,91,32,30)
- [case23] q3: correct answer is the longest option
- [case23] q4: length ratio 1.58 exceeds 1.25 (24,38,26,25)
- [case23] q4: correct answer is the longest option
- [case23] q5: weights [3,0,0,-2] must be exactly [3,0,-1,-2]
- [case23] q5: length ratio 5.30 exceeds 1.25 (10,53,18,21)
- [case23] q5: correct answer is the longest option
- [case23] q5: opt a: commonMistake missing or too short

### `case24`  (tools/cases/cases-21-30.js)
- [case24] q1: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [case24] q1: length ratio 3.17 exceeds 1.25 (24,76,25,27)
- [case24] q1: correct answer is the longest option
- [case24] q2: length ratio 2.67 exceeds 1.25 (26,56,36,21)
- [case24] q2: correct answer is the longest option
- [case24] q3: length ratio 2.70 exceeds 1.25 (25,62,23,26)
- [case24] q3: correct answer is the longest option
- [case24] q4: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [case24] q4: length ratio 4.39 exceeds 1.25 (18,79,40,32)
- [case24] q4: correct answer is the longest option
- [case24] q5: weights [3,0,0,0] must be exactly [3,0,-1,-2]
- [case24] q5: length ratio 2.78 exceeds 1.25 (28,75,27,38)
- [case24] q5: correct answer is the longest option

### `case25`  (tools/cases/cases-21-30.js)
- [case25] q1: weights [3,0,0,-1] must be exactly [3,0,-1,-2]
- [case25] q1: length ratio 3.06 exceeds 1.25 (16,49,28,19)
- [case25] q1: correct answer is the longest option
- [case25] q2: weights [3,-1,-1,-1] must be exactly [3,0,-1,-2]
- [case25] q2: length ratio 4.37 exceeds 1.25 (34,83,28,19)
- [case25] q2: correct answer is the longest option
- [case25] q3: weights [3,0,0,-2] must be exactly [3,0,-1,-2]
- [case25] q3: length ratio 2.92 exceeds 1.25 (30,73,40,25)
- [case25] q3: correct answer is the longest option
- [case25] q4: length ratio 3.05 exceeds 1.25 (23,67,29,22)
- [case25] q4: correct answer is the longest option
- [case25] q5: length ratio 3.67 exceeds 1.25 (36,88,38,24)
- [case25] q5: correct answer is the longest option
- [case25] q5: opt a: contains absolute language

### `case26`  (tools/cases/cases-21-30.js)
- [case26] q1: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [case26] q1: length ratio 2.91 exceeds 1.25 (22,64,42,37)
- [case26] q1: correct answer is the longest option
- [case26] q2: length ratio 2.70 exceeds 1.25 (34,81,30,31)
- [case26] q2: correct answer is the longest option
- [case26] q3: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [case26] q3: length ratio 2.82 exceeds 1.25 (47,93,33,38)
- [case26] q3: correct answer is the longest option
- [case26] q4: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [case26] q4: length ratio 3.30 exceeds 1.25 (36,89,28,27)
- [case26] q4: correct answer is the longest option
- [case26] q5: length ratio 3.73 exceeds 1.25 (33,82,32,22)
- [case26] q5: correct answer is the longest option

### `case27`  (tools/cases/cases-21-30.js)
- [case27] q1: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [case27] q1: length ratio 3.43 exceeds 1.25 (40,79,38,23)
- [case27] q1: correct answer is the longest option
- [case27] q2: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [case27] q2: length ratio 2.70 exceeds 1.25 (24,54,23,20)
- [case27] q2: correct answer is the longest option
- [case27] q3: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [case27] q3: length ratio 4.94 exceeds 1.25 (18,89,26,30)
- [case27] q3: correct answer is the longest option
- [case27] q4: weights [3,0,0,0] must be exactly [3,0,-1,-2]
- [case27] q4: length ratio 3.73 exceeds 1.25 (33,82,22,33)
- [case27] q4: correct answer is the longest option
- [case27] q5: weights [3,0,0,0] must be exactly [3,0,-1,-2]
- [case27] q5: length ratio 10.13 exceeds 1.25 (8,81,18,19)
- [case27] q5: correct answer is the longest option
- [case27] q5: opt a: commonMistake missing or too short

### `case28`  (tools/cases/cases-21-30.js)
- [case28] q1: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [case28] q1: length ratio 1.61 exceeds 1.25 (23,37,23,29)
- [case28] q1: correct answer is the longest option
- [case28] q2: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [case28] q2: length ratio 3.91 exceeds 1.25 (25,90,40,23)
- [case28] q2: correct answer is the longest option
- [case28] q3: weights [3,0,0,-1] must be exactly [3,0,-1,-2]
- [case28] q3: length ratio 2.71 exceeds 1.25 (24,65,31,29)
- [case28] q3: correct answer is the longest option
- [case28] q4: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [case28] q4: length ratio 3.84 exceeds 1.25 (32,73,19,33)
- [case28] q4: correct answer is the longest option
- [case28] q5: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [case28] q5: length ratio 4.31 exceeds 1.25 (16,69,24,26)
- [case28] q5: correct answer is the longest option

### `case29`  (tools/cases/cases-21-30.js)
- [case29] q1: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [case29] q1: length ratio 3.44 exceeds 1.25 (43,86,28,25)
- [case29] q1: correct answer is the longest option
- [case29] q2: length ratio 4.31 exceeds 1.25 (33,69,16,31)
- [case29] q2: correct answer is the longest option
- [case29] q3: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [case29] q3: length ratio 3.68 exceeds 1.25 (19,70,29,42)
- [case29] q3: correct answer is the longest option
- [case29] q4: length ratio 3.68 exceeds 1.25 (26,81,25,22)
- [case29] q4: correct answer is the longest option
- [case29] q5: weights [3,0,0,-1] must be exactly [3,0,-1,-2]
- [case29] q5: length ratio 2.36 exceeds 1.25 (33,78,45,33)
- [case29] q5: correct answer is the longest option

### `case30`  (tools/cases/cases-21-30.js)
- [case30] q1: weights [3,0,0,0] must be exactly [3,0,-1,-2]
- [case30] q1: length ratio 3.30 exceeds 1.25 (20,66,22,22)
- [case30] q1: correct answer is the longest option
- [case30] q2: weights [3,0,0,-1] must be exactly [3,0,-1,-2]
- [case30] q2: length ratio 7.00 exceeds 1.25 (15,105,29,25)
- [case30] q2: correct answer is the longest option
- [case30] q3: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [case30] q3: length ratio 3.79 exceeds 1.25 (27,72,23,19)
- [case30] q3: correct answer is the longest option
- [case30] q4: length ratio 4.47 exceeds 1.25 (43,85,40,19)
- [case30] q4: correct answer is the longest option
- [case30] q5: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [case30] q5: length ratio 4.88 exceeds 1.25 (17,83,26,42)
- [case30] q5: correct answer is the longest option

### `ncmhce-G100`  (tools/cases/cases-31-70.js)
- [ncmhce-G100] q1: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-G100] q1: length ratio 4.93 exceeds 1.25 (24,69,14,17)
- [ncmhce-G100] q1: correct answer is the longest option
- [ncmhce-G100] q1: opt c: commonMistake missing or too short
- [ncmhce-G100] q2: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-G100] q2: length ratio 3.82 exceeds 1.25 (22,84,23,23)
- [ncmhce-G100] q2: correct answer is the longest option
- [ncmhce-G100] q3: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-G100] q3: length ratio 3.70 exceeds 1.25 (31,100,27,41)
- [ncmhce-G100] q3: correct answer is the longest option
- [ncmhce-G100] q4: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-G100] q4: length ratio 4.72 exceeds 1.25 (32,85,18,24)
- [ncmhce-G100] q4: correct answer is the longest option
- [ncmhce-G100] q5: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-G100] q5: length ratio 4.27 exceeds 1.25 (22,94,30,30)
- [ncmhce-G100] q5: correct answer is the longest option

### `ncmhce-G101`  (tools/cases/cases-31-70.js)
- [ncmhce-G101] q1: length ratio 4.47 exceeds 1.25 (17,76,37,30)
- [ncmhce-G101] q1: correct answer is the longest option
- [ncmhce-G101] q2: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-G101] q2: length ratio 2.35 exceeds 1.25 (30,40,17,21)
- [ncmhce-G101] q2: correct answer is the longest option
- [ncmhce-G101] q3: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-G101] q3: length ratio 3.64 exceeds 1.25 (31,102,28,29)
- [ncmhce-G101] q3: correct answer is the longest option
- [ncmhce-G101] q4: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-G101] q4: length ratio 5.88 exceeds 1.25 (21,94,18,16)
- [ncmhce-G101] q4: correct answer is the longest option
- [ncmhce-G101] q5: weights [3,0,0,-2] must be exactly [3,0,-1,-2]
- [ncmhce-G101] q5: length ratio 6.00 exceeds 1.25 (12,72,14,23)
- [ncmhce-G101] q5: correct answer is the longest option
- [ncmhce-G101] q5: opt a: commonMistake missing or too short
- [ncmhce-G101] q5: opt c: commonMistake missing or too short

### `ncmhce-G102`  (tools/cases/cases-31-70.js)
- [ncmhce-G102] q1: weights [3,0,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-G102] q1: length ratio 3.12 exceeds 1.25 (42,78,26,25)
- [ncmhce-G102] q1: correct answer is the longest option
- [ncmhce-G102] q2: weights [3,0,0,-2] must be exactly [3,0,-1,-2]
- [ncmhce-G102] q2: length ratio 1.78 exceeds 1.25 (36,64,37,40)
- [ncmhce-G102] q2: correct answer is the longest option
- [ncmhce-G102] q3: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-G102] q3: length ratio 4.21 exceeds 1.25 (14,59,38,36)
- [ncmhce-G102] q3: correct answer is the longest option
- [ncmhce-G102] q3: opt a: commonMistake missing or too short
- [ncmhce-G102] q4: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-G102] q4: length ratio 4.00 exceeds 1.25 (26,60,15,32)
- [ncmhce-G102] q4: correct answer is the longest option
- [ncmhce-G102] q5: length ratio 2.50 exceeds 1.25 (26,55,22,25)
- [ncmhce-G102] q5: correct answer is the longest option

### `ncmhce-G103`  (tools/cases/cases-31-70.js)
- [ncmhce-G103] q1: length ratio 3.50 exceeds 1.25 (24,84,26,31)
- [ncmhce-G103] q1: correct answer is the longest option
- [ncmhce-G103] q2: weights [3,0,0,-1] must be exactly [3,0,-1,-2]
- [ncmhce-G103] q2: length ratio 4.93 exceeds 1.25 (15,74,32,25)
- [ncmhce-G103] q2: correct answer is the longest option
- [ncmhce-G103] q3: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-G103] q3: length ratio 17.50 exceeds 1.25 (28,70,4,23)
- [ncmhce-G103] q3: correct answer is the longest option
- [ncmhce-G103] q3: opt c: commonMistake missing or too short
- [ncmhce-G103] q4: weights [3,0,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-G103] q4: length ratio 3.58 exceeds 1.25 (28,68,39,19)
- [ncmhce-G103] q4: correct answer is the longest option
- [ncmhce-G103] q5: weights [3,1,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-G103] q5: length ratio 4.64 exceeds 1.25 (41,102,22,37)
- [ncmhce-G103] q5: correct answer is the longest option
- [ncmhce-G103] q5: opt c: contains absolute language

### `ncmhce-G104`  (tools/cases/cases-31-70.js)
- [ncmhce-G104] q1: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-G104] q1: length ratio 4.83 exceeds 1.25 (18,87,26,24)
- [ncmhce-G104] q1: correct answer is the longest option
- [ncmhce-G104] q2: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-G104] q2: length ratio 2.72 exceeds 1.25 (48,87,42,32)
- [ncmhce-G104] q2: correct answer is the longest option
- [ncmhce-G104] q3: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-G104] q3: length ratio 4.55 exceeds 1.25 (20,91,24,25)
- [ncmhce-G104] q3: correct answer is the longest option
- [ncmhce-G104] q4: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-G104] q4: length ratio 3.78 exceeds 1.25 (32,87,24,23)
- [ncmhce-G104] q4: correct answer is the longest option
- [ncmhce-G104] q5: weights [3,0,0,-1] must be exactly [3,0,-1,-2]
- [ncmhce-G104] q5: length ratio 2.67 exceeds 1.25 (34,88,39,33)
- [ncmhce-G104] q5: correct answer is the longest option

### `ncmhce-G105`  (tools/cases/cases-31-70.js)
- [ncmhce-G105] q1: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-G105] q1: length ratio 4.00 exceeds 1.25 (40,108,40,27)
- [ncmhce-G105] q1: correct answer is the longest option
- [ncmhce-G105] q2: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-G105] q2: length ratio 4.23 exceeds 1.25 (33,93,29,22)
- [ncmhce-G105] q2: correct answer is the longest option
- [ncmhce-G105] q3: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-G105] q3: length ratio 4.27 exceeds 1.25 (22,94,32,32)
- [ncmhce-G105] q3: correct answer is the longest option
- [ncmhce-G105] q4: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-G105] q4: length ratio 3.04 exceeds 1.25 (33,76,32,25)
- [ncmhce-G105] q4: correct answer is the longest option
- [ncmhce-G105] q5: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-G105] q5: length ratio 7.93 exceeds 1.25 (33,111,56,14)
- [ncmhce-G105] q5: correct answer is the longest option
- [ncmhce-G105] q5: opt d: commonMistake missing or too short

### `ncmhce-G106`  (tools/cases/cases-31-70.js)
- [ncmhce-G106] q1: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-G106] q1: length ratio 2.32 exceeds 1.25 (35,79,40,34)
- [ncmhce-G106] q1: correct answer is the longest option
- [ncmhce-G106] q2: weights [3,0,0,-1] must be exactly [3,0,-1,-2]
- [ncmhce-G106] q2: length ratio 1.31 exceeds 1.25 (21,16,18,16)
- [ncmhce-G106] q3: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-G106] q3: length ratio 2.22 exceeds 1.25 (40,82,37,44)
- [ncmhce-G106] q3: correct answer is the longest option
- [ncmhce-G106] q4: weights [3,0,0,-1] must be exactly [3,0,-1,-2]
- [ncmhce-G106] q4: length ratio 2.00 exceeds 1.25 (30,60,38,36)
- [ncmhce-G106] q4: correct answer is the longest option
- [ncmhce-G106] q5: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-G106] q5: length ratio 3.59 exceeds 1.25 (22,79,25,36)
- [ncmhce-G106] q5: correct answer is the longest option

### `ncmhce-G107`  (tools/cases/cases-31-70.js)
- [ncmhce-G107] q1: weights [3,0,0,-2] must be exactly [3,0,-1,-2]
- [ncmhce-G107] q1: length ratio 3.46 exceeds 1.25 (37,97,31,28)
- [ncmhce-G107] q1: correct answer is the longest option
- [ncmhce-G107] q2: weights [3,-1,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-G107] q2: length ratio 4.21 exceeds 1.25 (27,80,19,30)
- [ncmhce-G107] q2: correct answer is the longest option
- [ncmhce-G107] q3: weights [3,0,0,-1] must be exactly [3,0,-1,-2]
- [ncmhce-G107] q3: length ratio 3.53 exceeds 1.25 (28,53,31,15)
- [ncmhce-G107] q3: correct answer is the longest option
- [ncmhce-G107] q4: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-G107] q4: length ratio 2.46 exceeds 1.25 (28,69,33,29)
- [ncmhce-G107] q4: correct answer is the longest option
- [ncmhce-G107] q5: weights [3,-1,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-G107] q5: length ratio 2.33 exceeds 1.25 (34,77,33,33)
- [ncmhce-G107] q5: correct answer is the longest option

### `ncmhce-G108`  (tools/cases/cases-31-70.js)
- [ncmhce-G108] q1: weights [3,0,0,-1] must be exactly [3,0,-1,-2]
- [ncmhce-G108] q1: length ratio 5.33 exceeds 1.25 (23,64,12,25)
- [ncmhce-G108] q1: correct answer is the longest option
- [ncmhce-G108] q1: opt c: commonMistake missing or too short
- [ncmhce-G108] q2: weights [3,0,0,-1] must be exactly [3,0,-1,-2]
- [ncmhce-G108] q2: length ratio 6.08 exceeds 1.25 (13,79,15,42)
- [ncmhce-G108] q2: correct answer is the longest option
- [ncmhce-G108] q2: opt a: commonMistake missing or too short
- [ncmhce-G108] q3: weights [3,0,0,-1] must be exactly [3,0,-1,-2]
- [ncmhce-G108] q3: length ratio 5.32 exceeds 1.25 (40,117,27,22)
- [ncmhce-G108] q3: correct answer is the longest option
- [ncmhce-G108] q4: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-G108] q4: length ratio 3.00 exceeds 1.25 (27,69,28,23)
- [ncmhce-G108] q4: correct answer is the longest option
- [ncmhce-G108] q5: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-G108] q5: length ratio 4.06 exceeds 1.25 (18,73,35,27)
- [ncmhce-G108] q5: correct answer is the longest option

### `ncmhce-G109`  (tools/cases/cases-31-70.js)
- [ncmhce-G109] q1: weights [3,1,0,-2] must be exactly [3,0,-1,-2]
- [ncmhce-G109] q1: length ratio 2.84 exceeds 1.25 (32,88,31,42)
- [ncmhce-G109] q1: correct answer is the longest option
- [ncmhce-G109] q1: opt a: contains absolute language
- [ncmhce-G109] q2: weights [3,-1,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-G109] q2: length ratio 2.68 exceeds 1.25 (35,91,35,34)
- [ncmhce-G109] q2: correct answer is the longest option
- [ncmhce-G109] q3: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-G109] q3: length ratio 3.95 exceeds 1.25 (20,79,31,28)
- [ncmhce-G109] q3: correct answer is the longest option
- [ncmhce-G109] q4: weights [3,0,0,-2] must be exactly [3,0,-1,-2]
- [ncmhce-G109] q4: length ratio 2.91 exceeds 1.25 (23,67,27,29)
- [ncmhce-G109] q4: correct answer is the longest option
- [ncmhce-G109] q5: weights [3,-1,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-G109] q5: length ratio 2.95 exceeds 1.25 (32,65,22,32)
- [ncmhce-G109] q5: correct answer is the longest option

### `ncmhce-G110`  (tools/cases/cases-31-70.js)
- [ncmhce-G110] q1: weights [3,0,0,-1] must be exactly [3,0,-1,-2]
- [ncmhce-G110] q1: length ratio 4.85 exceeds 1.25 (27,97,20,32)
- [ncmhce-G110] q1: correct answer is the longest option
- [ncmhce-G110] q2: weights [3,0,0,-1] must be exactly [3,0,-1,-2]
- [ncmhce-G110] q2: length ratio 3.91 exceeds 1.25 (25,86,22,42)
- [ncmhce-G110] q2: correct answer is the longest option
- [ncmhce-G110] q3: weights [3,0,0,-1] must be exactly [3,0,-1,-2]
- [ncmhce-G110] q3: length ratio 3.35 exceeds 1.25 (23,77,31,39)
- [ncmhce-G110] q3: correct answer is the longest option
- [ncmhce-G110] q4: length ratio 5.08 exceeds 1.25 (15,66,23,13)
- [ncmhce-G110] q4: correct answer is the longest option
- [ncmhce-G110] q4: opt d: commonMistake missing or too short
- [ncmhce-G110] q5: weights [3,-1,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-G110] q5: length ratio 2.92 exceeds 1.25 (37,73,25,25)
- [ncmhce-G110] q5: correct answer is the longest option

### `ncmhce-G111`  (tools/cases/cases-31-70.js)
- [ncmhce-G111] q1: weights [3,0,0,-1] must be exactly [3,0,-1,-2]
- [ncmhce-G111] q1: length ratio 3.81 exceeds 1.25 (21,80,33,33)
- [ncmhce-G111] q1: correct answer is the longest option
- [ncmhce-G111] q2: weights [3,0,0,-1] must be exactly [3,0,-1,-2]
- [ncmhce-G111] q2: length ratio 3.89 exceeds 1.25 (18,70,25,27)
- [ncmhce-G111] q2: correct answer is the longest option
- [ncmhce-G111] q3: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-G111] q3: length ratio 2.45 exceeds 1.25 (36,71,35,29)
- [ncmhce-G111] q3: correct answer is the longest option
- [ncmhce-G111] q4: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-G111] q4: length ratio 4.05 exceeds 1.25 (21,81,39,20)
- [ncmhce-G111] q4: correct answer is the longest option
- [ncmhce-G111] q5: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-G111] q5: length ratio 4.06 exceeds 1.25 (31,73,33,18)
- [ncmhce-G111] q5: correct answer is the longest option

### `ncmhce-G112`  (tools/cases/cases-31-70.js)
- [ncmhce-G112] q1: weights [3,0,0,-1] must be exactly [3,0,-1,-2]
- [ncmhce-G112] q1: length ratio 2.47 exceeds 1.25 (21,42,18,17)
- [ncmhce-G112] q1: correct answer is the longest option
- [ncmhce-G112] q2: weights [3,0,0,-1] must be exactly [3,0,-1,-2]
- [ncmhce-G112] q2: length ratio 6.63 exceeds 1.25 (21,106,16,30)
- [ncmhce-G112] q2: correct answer is the longest option
- [ncmhce-G112] q3: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-G112] q3: length ratio 6.08 exceeds 1.25 (30,73,20,12)
- [ncmhce-G112] q3: correct answer is the longest option
- [ncmhce-G112] q3: opt d: commonMistake missing or too short
- [ncmhce-G112] q4: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-G112] q4: length ratio 3.62 exceeds 1.25 (21,76,35,44)
- [ncmhce-G112] q4: correct answer is the longest option
- [ncmhce-G112] q5: length ratio 3.22 exceeds 1.25 (30,74,34,23)
- [ncmhce-G112] q5: correct answer is the longest option

### `ncmhce-G113`  (tools/cases/cases-31-70.js)
- [ncmhce-G113] q1: length ratio 4.10 exceeds 1.25 (40,82,20,37)
- [ncmhce-G113] q1: correct answer is the longest option
- [ncmhce-G113] q2: weights [3,0,0,-1] must be exactly [3,0,-1,-2]
- [ncmhce-G113] q2: length ratio 8.30 exceeds 1.25 (12,83,10,14)
- [ncmhce-G113] q2: correct answer is the longest option
- [ncmhce-G113] q2: opt a: commonMistake missing or too short
- [ncmhce-G113] q2: opt c: commonMistake missing or too short
- [ncmhce-G113] q2: opt d: commonMistake missing or too short
- [ncmhce-G113] q3: length ratio 3.11 exceeds 1.25 (18,56,24,28)
- [ncmhce-G113] q3: correct answer is the longest option
- [ncmhce-G113] q4: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-G113] q4: length ratio 3.32 exceeds 1.25 (23,73,41,22)
- [ncmhce-G113] q4: correct answer is the longest option
- [ncmhce-G113] q5: weights [3,-1,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-G113] q5: length ratio 2.96 exceeds 1.25 (32,77,26,29)
- [ncmhce-G113] q5: correct answer is the longest option

### `ncmhce-G114`  (tools/cases/cases-31-70.js)
- [ncmhce-G114] q1: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-G114] q1: length ratio 2.90 exceeds 1.25 (29,84,33,35)
- [ncmhce-G114] q1: correct answer is the longest option
- [ncmhce-G114] q2: weights [3,2,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-G114] q2: length ratio 3.96 exceeds 1.25 (43,91,37,23)
- [ncmhce-G114] q2: correct answer is the longest option
- [ncmhce-G114] q3: weights [3,-1,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-G114] q3: length ratio 4.36 exceeds 1.25 (33,96,32,22)
- [ncmhce-G114] q3: correct answer is the longest option
- [ncmhce-G114] q4: weights [3,0,0,-1] must be exactly [3,0,-1,-2]
- [ncmhce-G114] q4: length ratio 4.26 exceeds 1.25 (19,81,33,24)
- [ncmhce-G114] q4: correct answer is the longest option
- [ncmhce-G114] q5: weights [3,0,0,-1] must be exactly [3,0,-1,-2]
- [ncmhce-G114] q5: length ratio 3.28 exceeds 1.25 (29,95,29,30)
- [ncmhce-G114] q5: correct answer is the longest option

### `ncmhce-G115`  (tools/cases/cases-31-70.js)
- [ncmhce-G115] q1: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-G115] q1: length ratio 12.17 exceeds 1.25 (9,73,6,13)
- [ncmhce-G115] q1: correct answer is the longest option
- [ncmhce-G115] q1: opt a: commonMistake missing or too short
- [ncmhce-G115] q1: opt c: commonMistake missing or too short
- [ncmhce-G115] q1: opt d: commonMistake missing or too short
- [ncmhce-G115] q2: weights [3,-1,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-G115] q2: length ratio 2.31 exceeds 1.25 (34,60,36,26)
- [ncmhce-G115] q2: correct answer is the longest option
- [ncmhce-G115] q3: weights [3,0,0,-2] must be exactly [3,0,-1,-2]
- [ncmhce-G115] q3: length ratio 5.65 exceeds 1.25 (17,96,24,30)
- [ncmhce-G115] q3: correct answer is the longest option
- [ncmhce-G115] q4: weights [3,0,0,-1] must be exactly [3,0,-1,-2]
- [ncmhce-G115] q4: length ratio 6.53 exceeds 1.25 (15,98,21,15)
- [ncmhce-G115] q4: correct answer is the longest option
- [ncmhce-G115] q5: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-G115] q5: length ratio 3.82 exceeds 1.25 (34,84,22,31)
- [ncmhce-G115] q5: correct answer is the longest option

### `ncmhce-G116`  (tools/cases/cases-31-70.js)
- [ncmhce-G116] q1: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-G116] q1: length ratio 2.83 exceeds 1.25 (26,68,24,26)
- [ncmhce-G116] q1: correct answer is the longest option
- [ncmhce-G116] q2: weights [3,0,0,-1] must be exactly [3,0,-1,-2]
- [ncmhce-G116] q2: length ratio 5.20 exceeds 1.25 (20,78,15,16)
- [ncmhce-G116] q2: correct answer is the longest option
- [ncmhce-G116] q3: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-G116] q3: length ratio 5.14 exceeds 1.25 (25,72,14,27)
- [ncmhce-G116] q3: correct answer is the longest option
- [ncmhce-G116] q3: opt c: commonMistake missing or too short
- [ncmhce-G116] q4: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-G116] q4: length ratio 4.50 exceeds 1.25 (20,90,33,26)
- [ncmhce-G116] q4: correct answer is the longest option
- [ncmhce-G116] q5: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-G116] q5: length ratio 2.57 exceeds 1.25 (30,77,30,36)
- [ncmhce-G116] q5: correct answer is the longest option

### `ncmhce-G117`  (tools/cases/cases-31-70.js)
- [ncmhce-G117] q1: weights [3,0,0,-2] must be exactly [3,0,-1,-2]
- [ncmhce-G117] q1: length ratio 7.09 exceeds 1.25 (19,78,11,29)
- [ncmhce-G117] q1: correct answer is the longest option
- [ncmhce-G117] q1: opt c: commonMistake missing or too short
- [ncmhce-G117] q2: weights [3,-1,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-G117] q2: length ratio 5.80 exceeds 1.25 (15,87,33,25)
- [ncmhce-G117] q2: correct answer is the longest option
- [ncmhce-G117] q3: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-G117] q3: length ratio 7.45 exceeds 1.25 (11,82,31,44)
- [ncmhce-G117] q3: correct answer is the longest option
- [ncmhce-G117] q3: opt a: commonMistake missing or too short
- [ncmhce-G117] q4: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-G117] q4: length ratio 2.95 exceeds 1.25 (20,59,26,23)
- [ncmhce-G117] q4: correct answer is the longest option
- [ncmhce-G117] q5: weights [3,-1,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-G117] q5: length ratio 4.35 exceeds 1.25 (19,74,31,17)
- [ncmhce-G117] q5: correct answer is the longest option

### `ncmhce-G118`  (tools/cases/cases-31-70.js)
- [ncmhce-G118] q1: weights [3,0,0,-1] must be exactly [3,0,-1,-2]
- [ncmhce-G118] q1: length ratio 5.30 exceeds 1.25 (20,106,37,40)
- [ncmhce-G118] q1: correct answer is the longest option
- [ncmhce-G118] q2: length ratio 5.93 exceeds 1.25 (27,83,14,29)
- [ncmhce-G118] q2: correct answer is the longest option
- [ncmhce-G118] q2: opt c: commonMistake missing or too short
- [ncmhce-G118] q3: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-G118] q3: length ratio 5.14 exceeds 1.25 (21,72,14,23)
- [ncmhce-G118] q3: correct answer is the longest option
- [ncmhce-G118] q3: opt c: commonMistake missing or too short
- [ncmhce-G118] q4: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-G118] q4: length ratio 3.74 exceeds 1.25 (19,71,26,42)
- [ncmhce-G118] q4: correct answer is the longest option
- [ncmhce-G118] q5: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-G118] q5: length ratio 4.57 exceeds 1.25 (21,96,27,32)
- [ncmhce-G118] q5: correct answer is the longest option

### `ncmhce-G119`  (tools/cases/cases-31-70.js)
- [ncmhce-G119] q1: weights [3,-2,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-G119] q1: length ratio 4.10 exceeds 1.25 (26,82,20,24)
- [ncmhce-G119] q1: correct answer is the longest option
- [ncmhce-G119] q2: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-G119] q2: length ratio 2.83 exceeds 1.25 (29,82,34,29)
- [ncmhce-G119] q2: correct answer is the longest option
- [ncmhce-G119] q3: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-G119] q3: length ratio 3.19 exceeds 1.25 (35,83,29,26)
- [ncmhce-G119] q3: correct answer is the longest option
- [ncmhce-G119] q4: weights [3,0,0,-1] must be exactly [3,0,-1,-2]
- [ncmhce-G119] q4: length ratio 5.31 exceeds 1.25 (22,85,16,21)
- [ncmhce-G119] q4: correct answer is the longest option
- [ncmhce-G119] q5: weights [3,0,0,-2] must be exactly [3,0,-1,-2]
- [ncmhce-G119] q5: length ratio 3.32 exceeds 1.25 (22,73,39,26)
- [ncmhce-G119] q5: correct answer is the longest option

### `ncmhce-G120`  (tools/cases/cases-31-70.js)
- [ncmhce-G120] q1: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-G120] q1: length ratio 7.64 exceeds 1.25 (11,84,21,24)
- [ncmhce-G120] q1: correct answer is the longest option
- [ncmhce-G120] q1: opt a: commonMistake missing or too short
- [ncmhce-G120] q2: weights [3,1,0,-1] must be exactly [3,0,-1,-2]
- [ncmhce-G120] q2: length ratio 3.77 exceeds 1.25 (22,83,32,23)
- [ncmhce-G120] q2: correct answer is the longest option
- [ncmhce-G120] q3: weights [3,0,0,-1] must be exactly [3,0,-1,-2]
- [ncmhce-G120] q3: length ratio 3.25 exceeds 1.25 (24,78,29,28)
- [ncmhce-G120] q3: correct answer is the longest option
- [ncmhce-G120] q4: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-G120] q4: length ratio 4.09 exceeds 1.25 (22,90,28,30)
- [ncmhce-G120] q4: correct answer is the longest option
- [ncmhce-G120] q5: weights [3,0,0,-1] must be exactly [3,0,-1,-2]
- [ncmhce-G120] q5: length ratio 2.58 exceeds 1.25 (45,80,31,34)
- [ncmhce-G120] q5: correct answer is the longest option

### `ncmhce-G121`  (tools/cases/cases-31-70.js)
- [ncmhce-G121] q1: weights [3,0,0,-1] must be exactly [3,0,-1,-2]
- [ncmhce-G121] q1: length ratio 3.42 exceeds 1.25 (31,82,27,24)
- [ncmhce-G121] q1: correct answer is the longest option
- [ncmhce-G121] q2: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-G121] q2: length ratio 2.87 exceeds 1.25 (41,86,42,30)
- [ncmhce-G121] q2: correct answer is the longest option
- [ncmhce-G121] q3: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-G121] q3: length ratio 4.56 exceeds 1.25 (27,73,31,16)
- [ncmhce-G121] q3: correct answer is the longest option
- [ncmhce-G121] q4: weights [3,0,0,0] must be exactly [3,0,-1,-2]
- [ncmhce-G121] q4: length ratio 5.61 exceeds 1.25 (18,101,31,34)
- [ncmhce-G121] q4: correct answer is the longest option
- [ncmhce-G121] q5: weights [3,0,0,-1] must be exactly [3,0,-1,-2]
- [ncmhce-G121] q5: length ratio 3.04 exceeds 1.25 (25,76,30,36)
- [ncmhce-G121] q5: correct answer is the longest option

### `ncmhce-G122`  (tools/cases/cases-31-70.js)
- [ncmhce-G122] q1: length ratio 4.20 exceeds 1.25 (20,84,20,32)
- [ncmhce-G122] q1: correct answer is the longest option
- [ncmhce-G122] q2: length ratio 4.78 exceeds 1.25 (18,86,21,18)
- [ncmhce-G122] q2: correct answer is the longest option
- [ncmhce-G122] q3: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-G122] q3: length ratio 3.33 exceeds 1.25 (53,90,30,27)
- [ncmhce-G122] q3: correct answer is the longest option
- [ncmhce-G122] q4: weights [3,0,0,-1] must be exactly [3,0,-1,-2]
- [ncmhce-G122] q4: length ratio 3.21 exceeds 1.25 (24,77,29,31)
- [ncmhce-G122] q4: correct answer is the longest option
- [ncmhce-G122] q5: weights [3,0,0,-1] must be exactly [3,0,-1,-2]
- [ncmhce-G122] q5: length ratio 2.63 exceeds 1.25 (43,84,32,55)
- [ncmhce-G122] q5: correct answer is the longest option

### `ncmhce-G123`  (tools/cases/cases-31-70.js)
- [ncmhce-G123] q1: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-G123] q1: length ratio 2.29 exceeds 1.25 (32,71,48,31)
- [ncmhce-G123] q1: correct answer is the longest option
- [ncmhce-G123] q2: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-G123] q2: length ratio 3.68 exceeds 1.25 (43,92,25,25)
- [ncmhce-G123] q2: correct answer is the longest option
- [ncmhce-G123] q3: weights [3,0,0,0] must be exactly [3,0,-1,-2]
- [ncmhce-G123] q3: length ratio 1.81 exceeds 1.25 (37,67,40,42)
- [ncmhce-G123] q3: correct answer is the longest option
- [ncmhce-G123] q4: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-G123] q4: length ratio 3.09 exceeds 1.25 (22,68,29,37)
- [ncmhce-G123] q4: correct answer is the longest option
- [ncmhce-G123] q5: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-G123] q5: length ratio 4.67 exceeds 1.25 (45,112,24,34)
- [ncmhce-G123] q5: correct answer is the longest option

### `ncmhce-G124`  (tools/cases/cases-31-70.js)
- [ncmhce-G124] q1: weights [3,0,0,-1] must be exactly [3,0,-1,-2]
- [ncmhce-G124] q1: length ratio 3.20 exceeds 1.25 (22,64,23,20)
- [ncmhce-G124] q1: correct answer is the longest option
- [ncmhce-G124] q2: weights [3,1,0,0] must be exactly [3,0,-1,-2]
- [ncmhce-G124] q2: length ratio 5.88 exceeds 1.25 (45,100,17,36)
- [ncmhce-G124] q2: correct answer is the longest option
- [ncmhce-G124] q3: length ratio 3.48 exceeds 1.25 (27,73,21,24)
- [ncmhce-G124] q3: correct answer is the longest option
- [ncmhce-G124] q4: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-G124] q4: length ratio 3.00 exceeds 1.25 (26,78,32,28)
- [ncmhce-G124] q4: correct answer is the longest option
- [ncmhce-G124] q5: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-G124] q5: length ratio 2.32 exceeds 1.25 (33,65,28,37)
- [ncmhce-G124] q5: correct answer is the longest option

### `ncmhce-G125`  (tools/cases/cases-31-70.js)
- [ncmhce-G125] q1: length ratio 5.38 exceeds 1.25 (13,70,20,29)
- [ncmhce-G125] q1: correct answer is the longest option
- [ncmhce-G125] q1: opt a: commonMistake missing or too short
- [ncmhce-G125] q2: weights [3,0,0,-1] must be exactly [3,0,-1,-2]
- [ncmhce-G125] q2: length ratio 5.50 exceeds 1.25 (24,99,37,18)
- [ncmhce-G125] q2: correct answer is the longest option
- [ncmhce-G125] q3: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-G125] q3: length ratio 6.50 exceeds 1.25 (10,65,21,15)
- [ncmhce-G125] q3: correct answer is the longest option
- [ncmhce-G125] q3: opt a: commonMistake missing or too short
- [ncmhce-G125] q4: weights [3,0,0,0] must be exactly [3,0,-1,-2]
- [ncmhce-G125] q4: length ratio 3.46 exceeds 1.25 (24,83,34,28)
- [ncmhce-G125] q4: correct answer is the longest option
- [ncmhce-G125] q5: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-G125] q5: length ratio 3.81 exceeds 1.25 (32,99,26,32)
- [ncmhce-G125] q5: correct answer is the longest option

### `ncmhce-G126`  (tools/cases/cases-31-70.js)
- [ncmhce-G126] q1: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-G126] q1: length ratio 5.67 exceeds 1.25 (29,102,18,39)
- [ncmhce-G126] q1: correct answer is the longest option
- [ncmhce-G126] q2: length ratio 2.96 exceeds 1.25 (34,74,38,25)
- [ncmhce-G126] q2: correct answer is the longest option
- [ncmhce-G126] q3: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-G126] q3: length ratio 5.56 exceeds 1.25 (37,100,18,28)
- [ncmhce-G126] q3: correct answer is the longest option
- [ncmhce-G126] q3: opt d: contains absolute language
- [ncmhce-G126] q4: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-G126] q4: length ratio 7.07 exceeds 1.25 (37,99,37,14)
- [ncmhce-G126] q4: correct answer is the longest option
- [ncmhce-G126] q4: opt d: commonMistake missing or too short
- [ncmhce-G126] q5: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-G126] q5: length ratio 5.44 exceeds 1.25 (16,87,32,28)
- [ncmhce-G126] q5: correct answer is the longest option

### `ncmhce-G127`  (tools/cases/cases-31-70.js)
- [ncmhce-G127] q1: weights [3,-1,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-G127] q1: length ratio 6.06 exceeds 1.25 (19,97,16,24)
- [ncmhce-G127] q1: correct answer is the longest option
- [ncmhce-G127] q2: length ratio 3.91 exceeds 1.25 (28,90,25,23)
- [ncmhce-G127] q2: correct answer is the longest option
- [ncmhce-G127] q3: weights [3,0,0,-1] must be exactly [3,0,-1,-2]
- [ncmhce-G127] q3: length ratio 2.77 exceeds 1.25 (22,61,31,29)
- [ncmhce-G127] q3: correct answer is the longest option
- [ncmhce-G127] q4: weights [3,-1,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-G127] q4: length ratio 5.50 exceeds 1.25 (18,99,27,33)
- [ncmhce-G127] q4: correct answer is the longest option
- [ncmhce-G127] q5: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-G127] q5: length ratio 5.82 exceeds 1.25 (17,99,27,26)
- [ncmhce-G127] q5: correct answer is the longest option

### `ncmhce-G128`  (tools/cases/cases-31-70.js)
- [ncmhce-G128] q1: weights [3,0,0,-1] must be exactly [3,0,-1,-2]
- [ncmhce-G128] q1: length ratio 3.68 exceeds 1.25 (31,81,39,22)
- [ncmhce-G128] q1: correct answer is the longest option
- [ncmhce-G128] q2: weights [3,0,0,-2] must be exactly [3,0,-1,-2]
- [ncmhce-G128] q2: length ratio 3.52 exceeds 1.25 (29,88,25,46)
- [ncmhce-G128] q2: correct answer is the longest option
- [ncmhce-G128] q3: weights [3,0,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-G128] q3: length ratio 2.44 exceeds 1.25 (42,88,46,36)
- [ncmhce-G128] q3: correct answer is the longest option
- [ncmhce-G128] q4: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-G128] q4: length ratio 3.90 exceeds 1.25 (24,82,32,21)
- [ncmhce-G128] q4: correct answer is the longest option
- [ncmhce-G128] q5: weights [3,0,0,-1] must be exactly [3,0,-1,-2]
- [ncmhce-G128] q5: length ratio 2.89 exceeds 1.25 (37,107,42,39)
- [ncmhce-G128] q5: correct answer is the longest option

### `ncmhce-G129`  (tools/cases/cases-31-70.js)
- [ncmhce-G129] q1: weights [3,0,0,-2] must be exactly [3,0,-1,-2]
- [ncmhce-G129] q1: length ratio 4.81 exceeds 1.25 (31,101,32,21)
- [ncmhce-G129] q1: correct answer is the longest option
- [ncmhce-G129] q2: weights [3,1,0,-1] must be exactly [3,0,-1,-2]
- [ncmhce-G129] q2: length ratio 2.35 exceeds 1.25 (32,73,31,31)
- [ncmhce-G129] q2: correct answer is the longest option
- [ncmhce-G129] q3: weights [3,0,0,-1] must be exactly [3,0,-1,-2]
- [ncmhce-G129] q3: length ratio 2.90 exceeds 1.25 (31,84,29,34)
- [ncmhce-G129] q3: correct answer is the longest option
- [ncmhce-G129] q4: weights [3,0,0,-1] must be exactly [3,0,-1,-2]
- [ncmhce-G129] q4: length ratio 3.58 exceeds 1.25 (25,86,35,24)
- [ncmhce-G129] q4: correct answer is the longest option
- [ncmhce-G129] q5: weights [3,1,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-G129] q5: length ratio 3.93 exceeds 1.25 (38,114,34,29)
- [ncmhce-G129] q5: correct answer is the longest option

### `ncmhce-G130`  (tools/cases/cases-31-70.js)
- [ncmhce-G130] q1: weights [3,0,0,-2] must be exactly [3,0,-1,-2]
- [ncmhce-G130] q1: length ratio 5.33 exceeds 1.25 (18,96,19,21)
- [ncmhce-G130] q1: correct answer is the longest option
- [ncmhce-G130] q2: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-G130] q2: length ratio 6.69 exceeds 1.25 (16,107,25,19)
- [ncmhce-G130] q2: correct answer is the longest option
- [ncmhce-G130] q3: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-G130] q3: length ratio 3.44 exceeds 1.25 (27,93,30,46)
- [ncmhce-G130] q3: correct answer is the longest option
- [ncmhce-G130] q4: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-G130] q4: length ratio 3.94 exceeds 1.25 (17,63,23,16)
- [ncmhce-G130] q4: correct answer is the longest option
- [ncmhce-G130] q5: weights [3,0,0,-1] must be exactly [3,0,-1,-2]
- [ncmhce-G130] q5: length ratio 5.00 exceeds 1.25 (18,90,29,28)
- [ncmhce-G130] q5: correct answer is the longest option

### `ncmhce-G131`  (tools/cases/cases-31-70.js)
- [ncmhce-G131] q1: weights [3,0,0,-1] must be exactly [3,0,-1,-2]
- [ncmhce-G131] q1: length ratio 4.26 exceeds 1.25 (23,98,38,38)
- [ncmhce-G131] q1: correct answer is the longest option
- [ncmhce-G131] q2: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-G131] q2: length ratio 3.60 exceeds 1.25 (25,90,30,32)
- [ncmhce-G131] q2: correct answer is the longest option
- [ncmhce-G131] q3: weights [3,0,0,-1] must be exactly [3,0,-1,-2]
- [ncmhce-G131] q3: length ratio 3.11 exceeds 1.25 (28,84,27,33)
- [ncmhce-G131] q3: correct answer is the longest option
- [ncmhce-G131] q4: weights [3,-1,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-G131] q4: length ratio 4.90 exceeds 1.25 (40,103,26,21)
- [ncmhce-G131] q4: correct answer is the longest option
- [ncmhce-G131] q5: weights [3,0,0,-1] must be exactly [3,0,-1,-2]
- [ncmhce-G131] q5: length ratio 5.39 exceeds 1.25 (18,97,27,31)
- [ncmhce-G131] q5: correct answer is the longest option

### `ncmhce-G132`  (tools/cases/cases-31-70.js)
- [ncmhce-G132] q1: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-G132] q1: length ratio 3.41 exceeds 1.25 (28,92,27,32)
- [ncmhce-G132] q1: correct answer is the longest option
- [ncmhce-G132] q2: weights [3,0,0,-2] must be exactly [3,0,-1,-2]
- [ncmhce-G132] q2: length ratio 3.56 exceeds 1.25 (33,89,25,30)
- [ncmhce-G132] q2: correct answer is the longest option
- [ncmhce-G132] q3: weights [3,1,0,-1] must be exactly [3,0,-1,-2]
- [ncmhce-G132] q3: length ratio 4.04 exceeds 1.25 (30,93,35,23)
- [ncmhce-G132] q3: correct answer is the longest option
- [ncmhce-G132] q4: weights [3,0,0,0] must be exactly [3,0,-1,-2]
- [ncmhce-G132] q4: length ratio 4.00 exceeds 1.25 (22,76,25,19)
- [ncmhce-G132] q4: correct answer is the longest option
- [ncmhce-G132] q5: length ratio 3.78 exceeds 1.25 (24,87,23,30)
- [ncmhce-G132] q5: correct answer is the longest option

### `ncmhce-G133`  (tools/cases/cases-31-70.js)
- [ncmhce-G133] q1: weights [3,0,0,-1] must be exactly [3,0,-1,-2]
- [ncmhce-G133] q1: length ratio 4.45 exceeds 1.25 (26,89,32,20)
- [ncmhce-G133] q1: correct answer is the longest option
- [ncmhce-G133] q2: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-G133] q2: length ratio 3.06 exceeds 1.25 (30,52,17,36)
- [ncmhce-G133] q2: correct answer is the longest option
- [ncmhce-G133] q3: weights [3,1,0,-1] must be exactly [3,0,-1,-2]
- [ncmhce-G133] q3: length ratio 5.30 exceeds 1.25 (23,122,27,34)
- [ncmhce-G133] q3: correct answer is the longest option
- [ncmhce-G133] q4: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-G133] q4: length ratio 5.10 exceeds 1.25 (41,107,21,26)
- [ncmhce-G133] q4: correct answer is the longest option
- [ncmhce-G133] q5: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-G133] q5: length ratio 2.93 exceeds 1.25 (29,79,29,27)
- [ncmhce-G133] q5: correct answer is the longest option

### `ncmhce-G134`  (tools/cases/cases-31-70.js)
- [ncmhce-G134] q1: weights [3,0,0,0] must be exactly [3,0,-1,-2]
- [ncmhce-G134] q1: length ratio 5.72 exceeds 1.25 (18,103,21,30)
- [ncmhce-G134] q1: correct answer is the longest option
- [ncmhce-G134] q2: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-G134] q2: length ratio 1.97 exceeds 1.25 (45,69,35,36)
- [ncmhce-G134] q2: correct answer is the longest option
- [ncmhce-G134] q3: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-G134] q3: length ratio 4.83 exceeds 1.25 (18,87,28,32)
- [ncmhce-G134] q3: correct answer is the longest option
- [ncmhce-G134] q4: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-G134] q4: length ratio 5.50 exceeds 1.25 (18,99,28,20)
- [ncmhce-G134] q4: correct answer is the longest option
- [ncmhce-G134] q5: weights [3,1,0,-1] must be exactly [3,0,-1,-2]
- [ncmhce-G134] q5: length ratio 4.04 exceeds 1.25 (51,93,26,23)
- [ncmhce-G134] q5: correct answer is the longest option

### `ncmhce-G135`  (tools/cases/cases-31-70.js)
- [ncmhce-G135] q1: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-G135] q1: length ratio 3.74 exceeds 1.25 (53,86,37,23)
- [ncmhce-G135] q1: correct answer is the longest option
- [ncmhce-G135] q2: weights [3,1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-G135] q2: length ratio 3.86 exceeds 1.25 (46,81,28,21)
- [ncmhce-G135] q2: correct answer is the longest option
- [ncmhce-G135] q3: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-G135] q3: length ratio 3.58 exceeds 1.25 (35,111,35,31)
- [ncmhce-G135] q3: correct answer is the longest option
- [ncmhce-G135] q4: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-G135] q4: length ratio 2.96 exceeds 1.25 (31,80,27,36)
- [ncmhce-G135] q4: correct answer is the longest option
- [ncmhce-G135] q5: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-G135] q5: length ratio 4.39 exceeds 1.25 (18,79,25,24)
- [ncmhce-G135] q5: correct answer is the longest option

### `ncmhce-G136`  (tools/cases/cases-31-70.js)
- [ncmhce-G136] q1: weights [3,0,0,-1] must be exactly [3,0,-1,-2]
- [ncmhce-G136] q1: length ratio 3.52 exceeds 1.25 (28,88,25,28)
- [ncmhce-G136] q1: correct answer is the longest option
- [ncmhce-G136] q2: weights [3,0,0,-2] must be exactly [3,0,-1,-2]
- [ncmhce-G136] q2: length ratio 5.81 exceeds 1.25 (16,93,16,20)
- [ncmhce-G136] q2: correct answer is the longest option
- [ncmhce-G136] q3: weights [3,-1,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-G136] q3: length ratio 2.31 exceeds 1.25 (31,67,29,30)
- [ncmhce-G136] q3: correct answer is the longest option
- [ncmhce-G136] q4: weights [3,-2,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-G136] q4: length ratio 2.96 exceeds 1.25 (35,71,24,34)
- [ncmhce-G136] q4: correct answer is the longest option
- [ncmhce-G136] q5: weights [3,0,0,-1] must be exactly [3,0,-1,-2]
- [ncmhce-G136] q5: length ratio 3.36 exceeds 1.25 (29,84,25,35)
- [ncmhce-G136] q5: correct answer is the longest option

### `ncmhce-G137`  (tools/cases/cases-31-70.js)
- [ncmhce-G137] q1: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-G137] q1: length ratio 4.89 exceeds 1.25 (26,88,19,18)
- [ncmhce-G137] q1: correct answer is the longest option
- [ncmhce-G137] q2: weights [3,1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-G137] q2: length ratio 3.48 exceeds 1.25 (28,80,23,25)
- [ncmhce-G137] q2: correct answer is the longest option
- [ncmhce-G137] q3: length ratio 3.19 exceeds 1.25 (28,83,26,29)
- [ncmhce-G137] q3: correct answer is the longest option
- [ncmhce-G137] q4: weights [3,0,0,-1] must be exactly [3,0,-1,-2]
- [ncmhce-G137] q4: length ratio 2.59 exceeds 1.25 (44,75,36,29)
- [ncmhce-G137] q4: correct answer is the longest option
- [ncmhce-G137] q5: length ratio 3.45 exceeds 1.25 (31,76,22,40)
- [ncmhce-G137] q5: correct answer is the longest option

### `ncmhce-G138`  (tools/cases/cases-31-70.js)
- [ncmhce-G138] q1: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-G138] q1: length ratio 3.14 exceeds 1.25 (22,69,28,32)
- [ncmhce-G138] q1: correct answer is the longest option
- [ncmhce-G138] q2: length ratio 2.65 exceeds 1.25 (23,61,24,36)
- [ncmhce-G138] q2: correct answer is the longest option
- [ncmhce-G138] q3: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-G138] q3: length ratio 2.67 exceeds 1.25 (35,88,33,46)
- [ncmhce-G138] q3: correct answer is the longest option
- [ncmhce-G138] q4: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-G138] q4: length ratio 3.62 exceeds 1.25 (22,76,21,29)
- [ncmhce-G138] q4: correct answer is the longest option
- [ncmhce-G138] q5: weights [3,-1,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-G138] q5: length ratio 2.68 exceeds 1.25 (28,75,48,29)
- [ncmhce-G138] q5: correct answer is the longest option

### `ncmhce-G139`  (tools/cases/cases-31-70.js)
- [ncmhce-G139] q1: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-G139] q1: length ratio 4.95 exceeds 1.25 (27,94,19,19)
- [ncmhce-G139] q1: correct answer is the longest option
- [ncmhce-G139] q2: weights [3,0,0,0] must be exactly [3,0,-1,-2]
- [ncmhce-G139] q2: length ratio 5.38 exceeds 1.25 (21,113,26,34)
- [ncmhce-G139] q2: correct answer is the longest option
- [ncmhce-G139] q3: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-G139] q3: length ratio 3.64 exceeds 1.25 (25,91,28,29)
- [ncmhce-G139] q3: correct answer is the longest option
- [ncmhce-G139] q4: weights [3,0,0,-1] must be exactly [3,0,-1,-2]
- [ncmhce-G139] q4: length ratio 2.59 exceeds 1.25 (33,83,32,33)
- [ncmhce-G139] q4: correct answer is the longest option
- [ncmhce-G139] q5: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-G139] q5: length ratio 2.48 exceeds 1.25 (30,57,23,27)
- [ncmhce-G139] q5: correct answer is the longest option

### `ncmhce-G045`  (tools/cases/generated-cases.js)
- [ncmhce-G045] q1: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-G045] q1: length ratio 1.26 exceeds 1.25 (108,86,95,86)
- [ncmhce-G045] q1: correct answer is the longest option
- [ncmhce-G045] q2: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-G045] q3: correct answer is the longest option
- [ncmhce-G045] q4: length ratio 1.29 exceeds 1.25 (119,119,94,92)
- [ncmhce-G045] q4: correct answer is the longest option

### `ncmhce-G046`  (tools/cases/generated-cases.js)
- [ncmhce-G046] q1: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-G046] q2: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-G046] q3: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-G046] q3: opt a: contains absolute language
- [ncmhce-G046] q5: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-G046] q5: correct answer is the longest option

### `ncmhce-G047`  (tools/cases/generated-cases.js)
- [ncmhce-G047] q1: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-G047] q1: length ratio 1.29 exceeds 1.25 (101,85,78,87)
- [ncmhce-G047] q1: correct answer is the longest option
- [ncmhce-G047] q2: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-G047] q2: correct answer is the longest option
- [ncmhce-G047] q3: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-G047] q3: opt b: contains absolute language
- [ncmhce-G047] q3: opt d: contains absolute language
- [ncmhce-G047] q4: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-G047] q5: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-G047] q5: opt c: commonMistake missing or too short

### `ncmhce-G048`  (tools/cases/generated-cases.js)
- [ncmhce-G048] q1: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-G048] q2: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-G048] q2: length ratio 1.27 exceeds 1.25 (71,88,73,90)
- [ncmhce-G048] q4: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-G048] q4: length ratio 1.27 exceeds 1.25 (98,98,77,87)
- [ncmhce-G048] q4: correct answer is the longest option
- [ncmhce-G048] q5: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-G048] q5: length ratio 1.32 exceeds 1.25 (93,100,76,86)
- [ncmhce-G048] q5: correct answer is the longest option

### `ncmhce-G049`  (tools/cases/generated-cases.js)
- [ncmhce-G049] q1: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-G049] q1: length ratio 1.44 exceeds 1.25 (111,115,80,80)
- [ncmhce-G049] q1: opt b: contains absolute language
- [ncmhce-G049] q2: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-G049] q2: length ratio 1.27 exceeds 1.25 (95,86,75,77)
- [ncmhce-G049] q2: correct answer is the longest option
- [ncmhce-G049] q3: length ratio 1.51 exceeds 1.25 (86,108,116,77)
- [ncmhce-G049] q4: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-G049] q4: correct answer is the longest option
- [ncmhce-G049] q5: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]

### `ncmhce-G050`  (tools/cases/generated-cases.js)
- [ncmhce-G050] q1: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-G050] q1: correct answer is the longest option
- [ncmhce-G050] q2: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-G050] q3: correct answer is the longest option
- [ncmhce-G050] q4: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-G050] q5: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-G050] q5: correct answer is the longest option

### `ncmhce-G051`  (tools/cases/generated-cases.js)
- [ncmhce-G051] q1: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-G051] q1: length ratio 1.31 exceeds 1.25 (90,109,83,90)
- [ncmhce-G051] q1: correct answer is the longest option
- [ncmhce-G051] q2: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-G051] q2: length ratio 1.28 exceeds 1.25 (91,109,85,87)
- [ncmhce-G051] q2: correct answer is the longest option
- [ncmhce-G051] q3: opt c: contains absolute language
- [ncmhce-G051] q4: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-G051] q4: length ratio 1.34 exceeds 1.25 (114,93,100,85)
- [ncmhce-G051] q4: correct answer is the longest option
- [ncmhce-G051] q5: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]

### `ncmhce-G052`  (tools/cases/generated-cases.js)
- [ncmhce-G052] q1: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-G052] q1: correct answer is the longest option
- [ncmhce-G052] q2: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-G052] q2: length ratio 1.31 exceeds 1.25 (71,93,81,76)
- [ncmhce-G052] q2: correct answer is the longest option
- [ncmhce-G052] q3: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-G052] q4: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-G052] q4: correct answer is the longest option
- [ncmhce-G052] q5: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]

### `ncmhce-G053`  (tools/cases/generated-cases.js)
- [ncmhce-G053] q1: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-G053] q2: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-G053] q2: length ratio 1.34 exceeds 1.25 (87,86,65,81)
- [ncmhce-G053] q2: correct answer is the longest option
- [ncmhce-G053] q3: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-G053] q3: correct answer is the longest option
- [ncmhce-G053] q4: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-G053] q5: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-G053] q5: length ratio 1.26 exceeds 1.25 (98,91,78,85)
- [ncmhce-G053] q5: correct answer is the longest option

### `ncmhce-G054`  (tools/cases/generated-cases.js)
- [ncmhce-G054] q1: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-G054] q1: length ratio 1.28 exceeds 1.25 (78,100,87,88)
- [ncmhce-G054] q1: correct answer is the longest option
- [ncmhce-G054] q2: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-G054] q2: length ratio 1.26 exceeds 1.25 (86,88,70,85)
- [ncmhce-G054] q2: correct answer is the longest option
- [ncmhce-G054] q4: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-G054] q4: correct answer is the longest option
- [ncmhce-G054] q5: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]

### `ncmhce-G055`  (tools/cases/generated-cases.js)
- [ncmhce-G055] q1: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-G055] q1: length ratio 1.25 exceeds 1.25 (85,99,79,79)
- [ncmhce-G055] q1: correct answer is the longest option
- [ncmhce-G055] q2: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-G055] q2: correct answer is the longest option
- [ncmhce-G055] q3: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-G055] q4: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-G055] q4: correct answer is the longest option
- [ncmhce-G055] q5: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]

### `ncmhce-G056`  (tools/cases/generated-cases.js)
- [ncmhce-G056] q1: length ratio 1.29 exceeds 1.25 (114,117,115,91)
- [ncmhce-G056] q2: length ratio 1.29 exceeds 1.25 (91,117,93,102)
- [ncmhce-G056] q2: correct answer is the longest option
- [ncmhce-G056] q5: length ratio 1.25 exceeds 1.25 (87,106,109,87)
- [ncmhce-G056] q5: opt d: commonMistake missing or too short

### `ncmhce-G057`  (tools/cases/generated-cases.js)
- [ncmhce-G057] q2: correct answer is the longest option
- [ncmhce-G057] q2: opt c: contains absolute language
- [ncmhce-G057] q2: opt d: commonMistake missing or too short
- [ncmhce-G057] q3: correct answer is the longest option
- [ncmhce-G057] q4: opt b: contains absolute language
- [ncmhce-G057] q4: opt d: commonMistake missing or too short
- [ncmhce-G057] q5: correct answer is the longest option
- [ncmhce-G057] q5: opt c: commonMistake missing or too short
- [ncmhce-G057] q5: opt d: commonMistake missing or too short

### `ncmhce-G058`  (tools/cases/generated-cases.js)
- [ncmhce-G058] q1: length ratio 1.40 exceeds 1.25 (94,108,99,77)
- [ncmhce-G058] q1: correct answer is the longest option
- [ncmhce-G058] q2: correct answer is the longest option
- [ncmhce-G058] q4: length ratio 1.48 exceeds 1.25 (94,117,124,84)
- [ncmhce-G058] q5: correct answer is the longest option
- [ncmhce-G058] q5: opt a: commonMistake missing or too short
- [ncmhce-G058] q5: opt d: commonMistake missing or too short

### `ncmhce-G059`  (tools/cases/generated-cases.js)
- [ncmhce-G059] q1: length ratio 1.29 exceeds 1.25 (101,87,82,78)
- [ncmhce-G059] q1: correct answer is the longest option
- [ncmhce-G059] q2: length ratio 1.25 exceeds 1.25 (89,99,83,79)
- [ncmhce-G059] q2: correct answer is the longest option
- [ncmhce-G059] q3: opt a: commonMistake missing or too short
- [ncmhce-G059] q4: correct answer is the longest option
- [ncmhce-G059] q5: length ratio 1.37 exceeds 1.25 (114,83,92,99)
- [ncmhce-G059] q5: correct answer is the longest option

### `ncmhce-G060`  (tools/cases/generated-cases.js)
- [ncmhce-G060] q1: length ratio 1.31 exceeds 1.25 (99,101,80,77)
- [ncmhce-G060] q1: correct answer is the longest option
- [ncmhce-G060] q1: opt c: commonMistake missing or too short
- [ncmhce-G060] q2: correct answer is the longest option
- [ncmhce-G060] q2: opt d: commonMistake missing or too short
- [ncmhce-G060] q3: length ratio 1.53 exceeds 1.25 (118,103,79,77)
- [ncmhce-G060] q4: correct answer is the longest option
- [ncmhce-G060] q5: correct answer is the longest option

### `ncmhce-G061`  (tools/cases/generated-cases.js)
- [ncmhce-G061] q1: correct answer is the longest option
- [ncmhce-G061] q3: correct answer is the longest option
- [ncmhce-G061] q3: opt c: contains absolute language
- [ncmhce-G061] q4: correct answer is the longest option
- [ncmhce-G061] q5: length ratio 1.51 exceeds 1.25 (83,113,121,80)

### `ncmhce-G062`  (tools/cases/generated-cases.js)
- [ncmhce-G062] q1: length ratio 1.29 exceeds 1.25 (106,117,92,91)
- [ncmhce-G062] q1: correct answer is the longest option
- [ncmhce-G062] q2: length ratio 1.29 exceeds 1.25 (92,78,94,101)
- [ncmhce-G062] q2: opt d: commonMistake missing or too short
- [ncmhce-G062] q4: correct answer is the longest option
- [ncmhce-G062] q5: length ratio 1.29 exceeds 1.25 (84,108,88,91)
- [ncmhce-G062] q5: correct answer is the longest option
- [ncmhce-G062] q5: opt d: commonMistake missing or too short

### `ncmhce-G063`  (tools/cases/generated-cases.js)
- [ncmhce-G063] q1: length ratio 1.28 exceeds 1.25 (76,97,91,83)
- [ncmhce-G063] q1: correct answer is the longest option
- [ncmhce-G063] q2: length ratio 1.46 exceeds 1.25 (115,109,79,85)
- [ncmhce-G063] q2: opt d: commonMistake missing or too short
- [ncmhce-G063] q3: correct answer is the longest option
- [ncmhce-G063] q5: length ratio 1.63 exceeds 1.25 (72,102,67,109)
- [ncmhce-G063] q5: opt d: commonMistake missing or too short

### `ncmhce-G064`  (tools/cases/generated-cases.js)
- [ncmhce-G064] q1: correct answer is the longest option
- [ncmhce-G064] q2: correct answer is the longest option
- [ncmhce-G064] q3: correct answer is the longest option
- [ncmhce-G064] q3: opt b: commonMistake missing or too short
- [ncmhce-G064] q4: opt d: commonMistake missing or too short
- [ncmhce-G064] q5: correct answer is the longest option

### `ncmhce-G065`  (tools/cases/generated-cases.js)
- [ncmhce-G065] q1: length ratio 1.30 exceeds 1.25 (79,103,86,85)
- [ncmhce-G065] q1: correct answer is the longest option
- [ncmhce-G065] q1: opt c: commonMistake missing or too short
- [ncmhce-G065] q2: length ratio 1.47 exceeds 1.25 (109,95,74,74)
- [ncmhce-G065] q3: opt c: commonMistake missing or too short
- [ncmhce-G065] q4: correct answer is the longest option
- [ncmhce-G065] q4: opt d: commonMistake missing or too short
- [ncmhce-G065] q5: length ratio 1.28 exceeds 1.25 (92,110,86,93)
- [ncmhce-G065] q5: correct answer is the longest option

### `ncmhce-G066`  (tools/cases/generated-cases.js)
- [ncmhce-G066] q1: length ratio 1.30 exceeds 1.25 (81,105,95,83)
- [ncmhce-G066] q1: correct answer is the longest option
- [ncmhce-G066] q1: opt d: commonMistake missing or too short
- [ncmhce-G066] q2: length ratio 1.26 exceeds 1.25 (97,81,77,89)
- [ncmhce-G066] q2: correct answer is the longest option
- [ncmhce-G066] q2: opt c: contains absolute language
- [ncmhce-G066] q3: correct answer is the longest option
- [ncmhce-G066] q4: length ratio 1.41 exceeds 1.25 (104,81,114,81)
- [ncmhce-G066] q4: opt b: contains absolute language
- [ncmhce-G066] q5: correct answer is the longest option

### `ncmhce-G067`  (tools/cases/generated-cases.js)
- [ncmhce-G067] q1: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-G067] q1: length ratio 1.34 exceeds 1.25 (120,93,125,96)
- [ncmhce-G067] q2: length ratio 1.52 exceeds 1.25 (123,117,81,82)
- [ncmhce-G067] q3: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-G067] q3: length ratio 1.33 exceeds 1.25 (95,96,72,83)
- [ncmhce-G067] q3: correct answer is the longest option
- [ncmhce-G067] q4: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-G067] q4: length ratio 1.33 exceeds 1.25 (95,109,91,82)
- [ncmhce-G067] q4: correct answer is the longest option
- [ncmhce-G067] q5: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-G067] q5: length ratio 1.75 exceeds 1.25 (124,88,128,73)

### `ncmhce-G068`  (tools/cases/generated-cases.js)
- [ncmhce-G068] q1: length ratio 1.48 exceeds 1.25 (110,80,81,118)
- [ncmhce-G068] q1: opt c: contains absolute language
- [ncmhce-G068] q3: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-G068] q3: length ratio 1.31 exceeds 1.25 (88,85,67,71)
- [ncmhce-G068] q3: correct answer is the longest option
- [ncmhce-G068] q4: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-G068] q4: length ratio 1.53 exceeds 1.25 (115,100,75,75)
- [ncmhce-G068] q5: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-G068] q5: length ratio 1.31 exceeds 1.25 (102,84,78,84)
- [ncmhce-G068] q5: correct answer is the longest option

### `ncmhce-G069`  (tools/cases/generated-cases.js)
- [ncmhce-G069] q1: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-G069] q1: length ratio 1.28 exceeds 1.25 (67,86,82,80)
- [ncmhce-G069] q1: correct answer is the longest option
- [ncmhce-G069] q2: length ratio 1.50 exceeds 1.25 (107,74,75,111)
- [ncmhce-G069] q3: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-G069] q3: length ratio 1.28 exceeds 1.25 (82,95,84,74)
- [ncmhce-G069] q3: correct answer is the longest option
- [ncmhce-G069] q4: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-G069] q4: length ratio 1.70 exceeds 1.25 (100,117,69,79)
- [ncmhce-G069] q5: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-G069] q5: length ratio 1.29 exceeds 1.25 (78,101,79,86)
- [ncmhce-G069] q5: correct answer is the longest option

### `ncmhce-G070`  (tools/cases/generated-cases.js)
- [ncmhce-G070] q1: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-G070] q2: correct answer is the longest option
- [ncmhce-G070] q3: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-G070] q3: length ratio 1.37 exceeds 1.25 (87,93,84,68)
- [ncmhce-G070] q3: correct answer is the longest option
- [ncmhce-G070] q4: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-G070] q4: correct answer is the longest option
- [ncmhce-G070] q4: opt d: commonMistake missing or too short
- [ncmhce-G070] q5: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-G070] q5: correct answer is the longest option

### `ncmhce-G071`  (tools/cases/generated-cases.js)
- [ncmhce-G071] q1: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-G071] q1: length ratio 1.54 exceeds 1.25 (101,109,79,71)
- [ncmhce-G071] q2: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-G071] q2: length ratio 1.32 exceeds 1.25 (91,102,79,77)
- [ncmhce-G071] q2: correct answer is the longest option
- [ncmhce-G071] q3: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-G071] q3: length ratio 1.28 exceeds 1.25 (65,65,82,64)
- [ncmhce-G071] q4: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-G071] q4: length ratio 1.43 exceeds 1.25 (88,93,65,83)
- [ncmhce-G071] q4: correct answer is the longest option
- [ncmhce-G071] q5: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-G071] q5: length ratio 1.31 exceeds 1.25 (87,94,72,87)
- [ncmhce-G071] q5: correct answer is the longest option

### `ncmhce-G072`  (tools/cases/generated-cases.js)
- [ncmhce-G072] q1: length ratio 1.57 exceeds 1.25 (119,119,79,76)
- [ncmhce-G072] q1: correct answer is the longest option
- [ncmhce-G072] q2: length ratio 1.68 exceeds 1.25 (116,119,71,82)
- [ncmhce-G072] q3: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-G072] q3: length ratio 1.69 exceeds 1.25 (94,115,68,71)
- [ncmhce-G072] q4: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-G072] q4: length ratio 1.30 exceeds 1.25 (80,99,87,76)
- [ncmhce-G072] q4: correct answer is the longest option
- [ncmhce-G072] q5: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-G072] q5: length ratio 1.42 exceeds 1.25 (111,102,78,80)

### `ncmhce-G073`  (tools/cases/generated-cases.js)
- [ncmhce-G073] q1: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-G073] q1: length ratio 1.53 exceeds 1.25 (77,99,72,110)
- [ncmhce-G073] q2: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-G073] q2: correct answer is the longest option
- [ncmhce-G073] q3: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-G073] q3: length ratio 1.29 exceeds 1.25 (87,88,68,76)
- [ncmhce-G073] q3: correct answer is the longest option
- [ncmhce-G073] q4: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-G073] q4: correct answer is the longest option
- [ncmhce-G073] q5: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-G073] q5: length ratio 1.75 exceeds 1.25 (128,110,73,78)

### `ncmhce-G074`  (tools/cases/generated-cases.js)
- [ncmhce-G074] q1: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-G074] q1: length ratio 1.64 exceeds 1.25 (117,80,120,73)
- [ncmhce-G074] q2: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-G074] q2: length ratio 1.66 exceeds 1.25 (123,119,74,86)
- [ncmhce-G074] q3: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-G074] q3: length ratio 1.26 exceeds 1.25 (86,97,77,77)
- [ncmhce-G074] q3: correct answer is the longest option
- [ncmhce-G074] q4: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-G074] q4: length ratio 1.37 exceeds 1.25 (111,103,81,82)
- [ncmhce-G074] q5: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-G074] q5: correct answer is the longest option

### `ncmhce-G075`  (tools/cases/generated-cases.js)
- [ncmhce-G075] q1: length ratio 1.52 exceeds 1.25 (100,105,69,72)
- [ncmhce-G075] q2: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-G075] q2: length ratio 1.57 exceeds 1.25 (105,93,67,72)
- [ncmhce-G075] q3: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-G075] q3: length ratio 1.44 exceeds 1.25 (95,105,73,76)
- [ncmhce-G075] q4: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-G075] q4: length ratio 1.43 exceeds 1.25 (84,93,65,77)
- [ncmhce-G075] q4: correct answer is the longest option
- [ncmhce-G075] q5: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-G075] q5: length ratio 1.40 exceeds 1.25 (81,113,105,82)

### `ncmhce-G076`  (tools/cases/generated-cases.js)
- [ncmhce-G076] q1: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-G076] q1: correct answer is the longest option
- [ncmhce-G076] q2: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-G076] q2: length ratio 1.62 exceeds 1.25 (78,105,68,110)
- [ncmhce-G076] q3: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-G076] q3: length ratio 1.42 exceeds 1.25 (88,91,105,74)
- [ncmhce-G076] q3: correct answer is the longest option
- [ncmhce-G076] q4: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-G076] q4: length ratio 1.52 exceeds 1.25 (114,102,75,81)
- [ncmhce-G076] q5: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-G076] q5: length ratio 1.49 exceeds 1.25 (79,104,113,76)

### `ncmhce-G077`  (tools/cases/generated-cases.js)
- [ncmhce-G077] q1: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-G077] q1: length ratio 1.30 exceeds 1.25 (80,87,78,67)
- [ncmhce-G077] q1: correct answer is the longest option
- [ncmhce-G077] q2: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-G077] q2: correct answer is the longest option
- [ncmhce-G077] q3: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-G077] q3: length ratio 1.35 exceeds 1.25 (84,80,66,62)
- [ncmhce-G077] q3: correct answer is the longest option
- [ncmhce-G077] q4: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-G077] q4: length ratio 1.35 exceeds 1.25 (91,97,72,75)
- [ncmhce-G077] q4: correct answer is the longest option
- [ncmhce-G077] q5: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-G077] q5: length ratio 1.49 exceeds 1.25 (109,99,73,77)
- [ncmhce-G077] q5: opt c: contains absolute language

### `ncmhce-G078`  (tools/cases/generated-cases.js)
- [ncmhce-G078] q1: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-G078] q1: length ratio 1.32 exceeds 1.25 (85,101,112,105)
- [ncmhce-G078] q2: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-G078] q3: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-G078] q4: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-G078] q5: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]

### `ncmhce-G079`  (tools/cases/generated-cases.js)
- [ncmhce-G079] q1: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-G079] q1: length ratio 1.33 exceeds 1.25 (78,104,103,101)
- [ncmhce-G079] q2: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-G079] q3: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-G079] q4: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-G079] q5: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]

### `ncmhce-G080`  (tools/cases/generated-cases.js)
- [ncmhce-G080] q1: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-G080] q2: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-G080] q3: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-G080] q3: opt c: contains absolute language
- [ncmhce-G080] q4: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-G080] q5: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-G080] q5: length ratio 1.27 exceeds 1.25 (83,102,105,104)

### `ncmhce-G081`  (tools/cases/generated-cases.js)
- [ncmhce-G081] q1: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-G081] q2: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-G081] q2: length ratio 1.38 exceeds 1.25 (80,108,104,110)
- [ncmhce-G081] q3: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-G081] q4: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-G081] q4: length ratio 1.35 exceeds 1.25 (80,100,106,108)
- [ncmhce-G081] q5: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]

### `ncmhce-G082`  (tools/cases/generated-cases.js)
- [ncmhce-G082] q1: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-G082] q1: length ratio 1.49 exceeds 1.25 (77,113,115,111)
- [ncmhce-G082] q2: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-G082] q2: length ratio 1.26 exceeds 1.25 (84,106,106,106)
- [ncmhce-G082] q3: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-G082] q3: length ratio 1.54 exceeds 1.25 (69,105,104,106)
- [ncmhce-G082] q4: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-G082] q5: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-G082] q5: length ratio 1.40 exceeds 1.25 (83,116,111,114)

### `ncmhce-G083`  (tools/cases/generated-cases.js)
- [ncmhce-G083] q1: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-G083] q1: length ratio 1.39 exceeds 1.25 (79,109,110,109)
- [ncmhce-G083] q2: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-G083] q2: length ratio 1.65 exceeds 1.25 (68,112,108,105)
- [ncmhce-G083] q3: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-G083] q3: length ratio 1.29 exceeds 1.25 (84,108,106,107)
- [ncmhce-G083] q4: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-G083] q4: length ratio 1.47 exceeds 1.25 (77,106,113,108)
- [ncmhce-G083] q5: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]

### `ncmhce-G084`  (tools/cases/generated-cases.js)
- [ncmhce-G084] q1: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-G084] q1: length ratio 1.37 exceeds 1.25 (82,110,112,111)
- [ncmhce-G084] q2: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-G084] q2: length ratio 1.30 exceeds 1.25 (88,114,110,111)
- [ncmhce-G084] q2: opt b: contains absolute language
- [ncmhce-G084] q3: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-G084] q3: length ratio 1.29 exceeds 1.25 (86,111,109,109)
- [ncmhce-G084] q4: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-G084] q4: length ratio 1.51 exceeds 1.25 (74,109,111,112)
- [ncmhce-G084] q5: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-G084] q5: length ratio 1.43 exceeds 1.25 (81,111,116,114)

### `ncmhce-G085`  (tools/cases/generated-cases.js)
- [ncmhce-G085] q1: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-G085] q1: length ratio 2.09 exceeds 1.25 (55,114,114,115)
- [ncmhce-G085] q2: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-G085] q2: length ratio 1.60 exceeds 1.25 (72,115,111,115)
- [ncmhce-G085] q3: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-G085] q3: length ratio 1.87 exceeds 1.25 (61,114,108,112)
- [ncmhce-G085] q4: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-G085] q4: length ratio 1.44 exceeds 1.25 (82,118,113,111)
- [ncmhce-G085] q5: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-G085] q5: length ratio 1.35 exceeds 1.25 (85,115,114,112)
- [ncmhce-G085] q5: opt d: contains absolute language

### `ncmhce-G086`  (tools/cases/generated-cases.js)
- [ncmhce-G086] q1: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-G086] q1: length ratio 1.69 exceeds 1.25 (67,110,113,112)
- [ncmhce-G086] q2: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-G086] q2: length ratio 1.47 exceeds 1.25 (79,113,113,116)
- [ncmhce-G086] q2: opt d: contains absolute language
- [ncmhce-G086] q3: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-G086] q3: length ratio 1.40 exceeds 1.25 (82,111,113,115)
- [ncmhce-G086] q3: opt b: contains absolute language
- [ncmhce-G086] q4: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-G086] q4: length ratio 1.31 exceeds 1.25 (87,112,114,114)
- [ncmhce-G086] q4: opt c: contains absolute language
- [ncmhce-G086] q4: opt d: contains absolute language
- [ncmhce-G086] q5: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-G086] q5: length ratio 1.46 exceeds 1.25 (79,112,115,112)
- [ncmhce-G086] q5: opt d: contains absolute language

### `ncmhce-G087`  (tools/cases/generated-cases.js)
- [ncmhce-G087] q1: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-G087] q1: length ratio 1.74 exceeds 1.25 (68,111,118,116)
- [ncmhce-G087] q2: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-G087] q2: length ratio 1.55 exceeds 1.25 (74,111,115,111)
- [ncmhce-G087] q3: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-G087] q3: length ratio 1.32 exceeds 1.25 (87,115,114,113)
- [ncmhce-G087] q4: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-G087] q4: length ratio 1.56 exceeds 1.25 (75,117,114,112)
- [ncmhce-G087] q5: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-G087] q5: length ratio 1.47 exceeds 1.25 (78,112,115,115)

### `ncmhce-G088`  (tools/cases/generated-cases.js)
- [ncmhce-G088] q1: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-G088] q1: length ratio 1.63 exceeds 1.25 (72,113,115,117)
- [ncmhce-G088] q2: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-G088] q2: length ratio 1.83 exceeds 1.25 (63,114,115,115)
- [ncmhce-G088] q3: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-G088] q3: length ratio 1.57 exceeds 1.25 (74,114,116,115)
- [ncmhce-G088] q4: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-G088] q4: length ratio 1.41 exceeds 1.25 (82,114,114,116)
- [ncmhce-G088] q4: opt c: contains absolute language
- [ncmhce-G088] q5: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-G088] q5: length ratio 1.67 exceeds 1.25 (72,118,120,118)
- [ncmhce-G088] q5: opt b: contains absolute language

### `ncmhce-G089`  (tools/cases/generated-cases.js)
- [ncmhce-G089] q1: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-G089] q1: length ratio 1.56 exceeds 1.25 (75,115,116,117)
- [ncmhce-G089] q1: opt b: contains absolute language
- [ncmhce-G089] q2: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-G089] q2: length ratio 1.66 exceeds 1.25 (73,118,118,121)
- [ncmhce-G089] q2: opt d: contains absolute language
- [ncmhce-G089] q3: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-G089] q3: length ratio 1.34 exceeds 1.25 (88,118,112,114)
- [ncmhce-G089] q4: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-G089] q4: length ratio 1.79 exceeds 1.25 (67,120,117,118)
- [ncmhce-G089] q4: opt b: contains absolute language
- [ncmhce-G089] q4: opt c: contains absolute language
- [ncmhce-G089] q5: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-G089] q5: length ratio 1.41 exceeds 1.25 (86,116,116,121)

### `ncmhce-G090`  (tools/cases/generated-cases.js)
- [ncmhce-G090] q1: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-G090] q1: length ratio 1.61 exceeds 1.25 (74,119,113,118)
- [ncmhce-G090] q2: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-G090] q2: length ratio 1.48 exceeds 1.25 (82,121,121,121)
- [ncmhce-G090] q2: opt d: contains absolute language
- [ncmhce-G090] q3: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-G090] q3: length ratio 1.56 exceeds 1.25 (79,123,120,123)
- [ncmhce-G090] q4: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-G090] q4: length ratio 1.62 exceeds 1.25 (74,118,119,120)
- [ncmhce-G090] q4: opt c: contains absolute language
- [ncmhce-G090] q5: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-G090] q5: length ratio 1.94 exceeds 1.25 (63,121,122,121)

### `ncmhce-G091`  (tools/cases/generated-cases.js)
- [ncmhce-G091] q1: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-G091] q1: length ratio 1.60 exceeds 1.25 (77,123,121,123)
- [ncmhce-G091] q2: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-G091] q2: length ratio 1.83 exceeds 1.25 (69,119,122,126)
- [ncmhce-G091] q2: opt b: contains absolute language
- [ncmhce-G091] q3: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-G091] q3: length ratio 1.62 exceeds 1.25 (77,125,120,120)
- [ncmhce-G091] q4: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-G091] q4: length ratio 1.63 exceeds 1.25 (76,123,124,123)
- [ncmhce-G091] q5: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-G091] q5: length ratio 1.76 exceeds 1.25 (71,125,122,124)
- [ncmhce-G091] q5: opt c: contains absolute language

### `ncmhce-G092`  (tools/cases/generated-cases.js)
- [ncmhce-G092] q1: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-G092] q1: length ratio 1.92 exceeds 1.25 (66,123,121,127)
- [ncmhce-G092] q2: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-G092] q2: length ratio 1.79 exceeds 1.25 (71,127,125,124)
- [ncmhce-G092] q3: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-G092] q3: length ratio 1.87 exceeds 1.25 (67,124,125,123)
- [ncmhce-G092] q4: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-G092] q4: length ratio 1.43 exceeds 1.25 (88,123,125,126)
- [ncmhce-G092] q5: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-G092] q5: length ratio 1.65 exceeds 1.25 (75,122,124,124)
- [ncmhce-G092] q5: opt d: contains absolute language

### `ncmhce-G093`  (tools/cases/generated-cases.js)
- [ncmhce-G093] q1: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-G093] q1: length ratio 1.72 exceeds 1.25 (74,123,115,127)
- [ncmhce-G093] q2: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-G093] q2: length ratio 1.40 exceeds 1.25 (88,119,123,122)
- [ncmhce-G093] q3: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-G093] q3: length ratio 1.48 exceeds 1.25 (85,125,126,120)
- [ncmhce-G093] q4: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-G093] q4: length ratio 1.87 exceeds 1.25 (68,124,127,121)
- [ncmhce-G093] q5: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-G093] q5: length ratio 1.40 exceeds 1.25 (90,126,120,120)

### `ncmhce-G094`  (tools/cases/generated-cases.js)
- [ncmhce-G094] q1: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-G094] q1: length ratio 1.47 exceeds 1.25 (87,123,127,128)
- [ncmhce-G094] q2: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-G094] q2: length ratio 2.14 exceeds 1.25 (58,118,117,124)
- [ncmhce-G094] q3: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-G094] q3: length ratio 1.54 exceeds 1.25 (82,125,121,126)
- [ncmhce-G094] q4: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-G094] q4: length ratio 2.23 exceeds 1.25 (57,127,125,121)
- [ncmhce-G094] q5: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-G094] q5: length ratio 1.72 exceeds 1.25 (72,124,124,123)

### `ncmhce-G095`  (tools/cases/generated-cases.js)
- [ncmhce-G095] q1: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-G095] q1: length ratio 1.90 exceeds 1.25 (67,124,127,123)
- [ncmhce-G095] q2: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-G095] q2: length ratio 1.63 exceeds 1.25 (79,129,128,129)
- [ncmhce-G095] q3: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-G095] q3: length ratio 1.52 exceeds 1.25 (85,127,129,126)
- [ncmhce-G095] q4: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-G095] q4: length ratio 1.68 exceeds 1.25 (78,131,125,124)
- [ncmhce-G095] q5: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-G095] q5: length ratio 1.82 exceeds 1.25 (73,133,132,123)

### `ncmhce-G096`  (tools/cases/generated-cases.js)
- [ncmhce-G096] q1: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-G096] q1: length ratio 1.88 exceeds 1.25 (68,117,128,124)
- [ncmhce-G096] q2: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-G096] q2: length ratio 1.60 exceeds 1.25 (80,125,128,125)
- [ncmhce-G096] q2: opt b: contains absolute language
- [ncmhce-G096] q3: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-G096] q3: length ratio 1.32 exceeds 1.25 (97,127,128,128)
- [ncmhce-G096] q4: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-G096] q4: length ratio 1.80 exceeds 1.25 (74,127,133,129)
- [ncmhce-G096] q5: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-G096] q5: length ratio 1.83 exceeds 1.25 (72,129,132,126)

### `ncmhce-G097`  (tools/cases/generated-cases.js)
- [ncmhce-G097] q1: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-G097] q1: length ratio 1.68 exceeds 1.25 (79,126,124,133)
- [ncmhce-G097] q2: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-G097] q2: length ratio 2.29 exceeds 1.25 (58,130,129,133)
- [ncmhce-G097] q3: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-G097] q3: length ratio 1.81 exceeds 1.25 (72,130,127,128)
- [ncmhce-G097] q4: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-G097] q4: length ratio 1.82 exceeds 1.25 (72,131,128,127)
- [ncmhce-G097] q4: opt c: contains absolute language
- [ncmhce-G097] q5: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-G097] q5: length ratio 1.94 exceeds 1.25 (69,130,134,128)

### `ncmhce-G098`  (tools/cases/generated-cases.js)
- [ncmhce-G098] q1: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-G098] q1: length ratio 1.93 exceeds 1.25 (68,131,128,130)
- [ncmhce-G098] q2: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-G098] q2: length ratio 1.97 exceeds 1.25 (65,126,125,128)
- [ncmhce-G098] q3: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-G098] q3: length ratio 1.61 exceeds 1.25 (79,126,127,127)
- [ncmhce-G098] q3: opt b: contains absolute language
- [ncmhce-G098] q4: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-G098] q4: length ratio 1.94 exceeds 1.25 (70,132,136,133)
- [ncmhce-G098] q5: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-G098] q5: length ratio 1.74 exceeds 1.25 (76,132,128,128)

### `ncmhce-G099`  (tools/cases/generated-cases.js)
- [ncmhce-G099] q1: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-G099] q1: length ratio 1.46 exceeds 1.25 (92,134,132,127)
- [ncmhce-G099] q2: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-G099] q2: length ratio 1.55 exceeds 1.25 (88,128,136,129)
- [ncmhce-G099] q3: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-G099] q3: length ratio 1.93 exceeds 1.25 (69,133,127,130)
- [ncmhce-G099] q4: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-G099] q4: length ratio 1.76 exceeds 1.25 (78,134,137,129)
- [ncmhce-G099] q4: opt d: contains absolute language
- [ncmhce-G099] q5: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-G099] q5: length ratio 1.87 exceeds 1.25 (71,129,133,131)

### `ncmhce-G035`  (tools/cases/migrated-cases.js)
- [ncmhce-G035] q4: weights [3,0,0,-1] must be exactly [3,0,-1,-2]
- [ncmhce-G035] q5: weights [3,0,0,-1] must be exactly [3,0,-1,-2]

### `ncmhce-G036`  (tools/cases/migrated-cases.js)
- [ncmhce-G036] q1: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-G036] q2: weights [3,0,0,-2] must be exactly [3,0,-1,-2]
- [ncmhce-G036] q2: correct answer is the longest option
- [ncmhce-G036] q3: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-G036] q3: correct answer is the longest option
- [ncmhce-G036] q4: correct answer is the longest option

### `ncmhce-G037`  (tools/cases/migrated-cases.js)
- [ncmhce-G037] q1: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-G037] q1: correct answer is the longest option
- [ncmhce-G037] q2: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-G037] q3: correct answer is the longest option

### `ncmhce-G038`  (tools/cases/migrated-cases.js)
- [ncmhce-G038] q1: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-G038] q2: weights [3,-1,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-G038] q2: length ratio 1.47 exceeds 1.25 (51,52,66,75)
- [ncmhce-G038] q3: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-G038] q4: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-G038] q4: correct answer is the longest option
- [ncmhce-G038] q4: opt b: contains absolute language
- [ncmhce-G038] q5: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]

### `ncmhce-G039`  (tools/cases/migrated-cases.js)
- [ncmhce-G039] q2: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-G039] q3: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-G039] q3: correct answer is the longest option
- [ncmhce-G039] q4: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-G039] q4: length ratio 1.59 exceeds 1.25 (81,71,56,51)
- [ncmhce-G039] q5: weights [3,0,0,-1] must be exactly [3,0,-1,-2]

### `ncmhce-G040`  (tools/cases/migrated-cases.js)
- [ncmhce-G040] q1: length ratio 1.66 exceeds 1.25 (47,67,78,50)
- [ncmhce-G040] q2: weights [3,0,0,-2] must be exactly [3,0,-1,-2]
- [ncmhce-G040] q3: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-G040] q4: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-G040] q4: length ratio 1.26 exceeds 1.25 (47,59,55,52)
- [ncmhce-G040] q4: correct answer is the longest option
- [ncmhce-G040] q5: weights [3,0,-2,-2] must be exactly [3,0,-1,-2]

### `ncmhce-G041`  (tools/cases/migrated-cases.js)
- [ncmhce-G041] q1: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-G041] q1: correct answer is the longest option
- [ncmhce-G041] q2: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-G041] q2: length ratio 1.90 exceeds 1.25 (49,78,93,53)
- [ncmhce-G041] q3: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-G041] q3: length ratio 1.49 exceeds 1.25 (47,63,70,50)
- [ncmhce-G041] q4: length ratio 1.72 exceeds 1.25 (81,70,47,49)
- [ncmhce-G041] q5: weights [3,0,0,-2] must be exactly [3,0,-1,-2]
- [ncmhce-G041] q5: length ratio 1.32 exceeds 1.25 (50,66,55,56)
- [ncmhce-G041] q5: correct answer is the longest option

### `ncmhce-G042`  (tools/cases/migrated-cases.js)
- [ncmhce-G042] q1: weights [3,-1,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-G042] q1: length ratio 1.58 exceeds 1.25 (52,74,82,56)
- [ncmhce-G042] q1: opt a: contains absolute language
- [ncmhce-G042] q2: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-G042] q2: correct answer is the longest option
- [ncmhce-G042] q3: weights [3,-1,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-G042] q3: length ratio 1.77 exceeds 1.25 (40,62,45,71)
- [ncmhce-G042] q4: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-G042] q5: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-G042] q5: opt c: contains absolute language

### `ncmhce-G043`  (tools/cases/migrated-cases.js)
- [ncmhce-G043] q1: correct answer is the longest option
- [ncmhce-G043] q2: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-G043] q2: length ratio 1.33 exceeds 1.25 (57,53,56,43)
- [ncmhce-G043] q3: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-G043] q3: correct answer is the longest option
- [ncmhce-G043] q4: weights [3,0,0,0] must be exactly [3,0,-1,-2]
- [ncmhce-G043] q4: length ratio 1.50 exceeds 1.25 (54,71,54,81)
- [ncmhce-G043] q5: weights [3,0,0,-1] must be exactly [3,0,-1,-2]

### `ncmhce-G044`  (tools/cases/migrated-cases.js)
- [ncmhce-G044] q1: length ratio 1.70 exceeds 1.25 (78,69,46,54)
- [ncmhce-G044] q1: opt c: commonMistake missing or too short
- [ncmhce-G044] q2: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-G044] q2: length ratio 1.76 exceeds 1.25 (79,68,49,45)
- [ncmhce-G044] q3: weights [3,0,0,-1] must be exactly [3,0,-1,-2]
- [ncmhce-G044] q3: length ratio 1.30 exceeds 1.25 (43,56,56,45)
- [ncmhce-G044] q3: correct answer is the longest option
- [ncmhce-G044] q4: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-G044] q4: length ratio 1.27 exceeds 1.25 (51,65,55,64)
- [ncmhce-G044] q4: correct answer is the longest option
- [ncmhce-G044] q5: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]

### `ncmhce-G031`  (tools/cases/seed-cases.js)
- [ncmhce-G031] q1: length ratio 2.28 exceeds 1.25 (73,55,32,53)
- [ncmhce-G031] q1: correct answer is the longest option
- [ncmhce-G031] q2: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-G031] q2: length ratio 1.78 exceeds 1.25 (82,46,60,55)
- [ncmhce-G031] q2: correct answer is the longest option
- [ncmhce-G031] q3: length ratio 1.46 exceeds 1.25 (62,67,60,46)
- [ncmhce-G031] q4: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-G031] q4: length ratio 2.27 exceeds 1.25 (91,44,40,53)
- [ncmhce-G031] q4: correct answer is the longest option
- [ncmhce-G031] q5: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-G031] q5: length ratio 1.84 exceeds 1.25 (90,72,66,49)
- [ncmhce-G031] q5: correct answer is the longest option

### `ncmhce-G032`  (tools/cases/seed-cases.js)
- [ncmhce-G032] q1: length ratio 1.38 exceeds 1.25 (95,69,72,69)
- [ncmhce-G032] q1: correct answer is the longest option
- [ncmhce-G032] q2: length ratio 2.94 exceeds 1.25 (100,34,36,46)
- [ncmhce-G032] q2: correct answer is the longest option
- [ncmhce-G032] q3: length ratio 2.00 exceeds 1.25 (80,41,54,40)
- [ncmhce-G032] q3: correct answer is the longest option
- [ncmhce-G032] q4: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-G032] q4: length ratio 2.03 exceeds 1.25 (130,65,64,65)
- [ncmhce-G032] q4: correct answer is the longest option
- [ncmhce-G032] q5: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-G032] q5: length ratio 1.96 exceeds 1.25 (94,48,65,50)
- [ncmhce-G032] q5: correct answer is the longest option

### `ncmhce-G033`  (tools/cases/seed-cases.js)
- [ncmhce-G033] q1: length ratio 2.41 exceeds 1.25 (70,38,37,29)
- [ncmhce-G033] q1: correct answer is the longest option
- [ncmhce-G033] q2: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-G033] q2: length ratio 2.49 exceeds 1.25 (92,56,56,37)
- [ncmhce-G033] q2: correct answer is the longest option
- [ncmhce-G033] q3: length ratio 1.81 exceeds 1.25 (87,66,62,48)
- [ncmhce-G033] q3: correct answer is the longest option
- [ncmhce-G033] q4: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-G033] q4: length ratio 3.53 exceeds 1.25 (113,35,32,37)
- [ncmhce-G033] q4: correct answer is the longest option
- [ncmhce-G033] q5: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-G033] q5: length ratio 2.23 exceeds 1.25 (96,43,67,59)
- [ncmhce-G033] q5: correct answer is the longest option

### `ncmhce-G034`  (tools/cases/seed-cases.js)
- [ncmhce-G034] q1: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-G034] q1: length ratio 2.62 exceeds 1.25 (76,29,32,29)
- [ncmhce-G034] q1: correct answer is the longest option
- [ncmhce-G034] q2: length ratio 1.67 exceeds 1.25 (80,49,52,48)
- [ncmhce-G034] q2: correct answer is the longest option
- [ncmhce-G034] q3: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-G034] q3: length ratio 2.71 exceeds 1.25 (103,55,57,38)
- [ncmhce-G034] q3: correct answer is the longest option
- [ncmhce-G034] q4: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-G034] q4: length ratio 1.60 exceeds 1.25 (93,65,58,59)
- [ncmhce-G034] q4: correct answer is the longest option
- [ncmhce-G034] q5: length ratio 2.19 exceeds 1.25 (105,48,53,48)
- [ncmhce-G034] q5: correct answer is the longest option

### `ncmhce-D102`  (tools/cases/deep-cases-batch-01.js)
- [ncmhce-D102] q1: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D102] q1: correct answer is the longest option
- [ncmhce-D102] q2: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D102] q2: correct answer is the longest option
- [ncmhce-D102] q3: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D102] q3: correct answer is the longest option
- [ncmhce-D102] q4: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D102] q4: length ratio 1.46 exceeds 1.25 (98,105,72,75)
- [ncmhce-D102] q5: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D102] q5: length ratio 1.31 exceeds 1.25 (93,79,74,71)
- [ncmhce-D102] q5: correct answer is the longest option
- [ncmhce-D102] q6: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D102] q6: correct answer is the longest option
- [ncmhce-D102] q7: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D102] q7: length ratio 1.63 exceeds 1.25 (99,114,70,71)
- [ncmhce-D102] q8: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D102] q8: length ratio 1.45 exceeds 1.25 (99,107,74,77)
- [ncmhce-D102] q9: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D102] q9: length ratio 1.53 exceeds 1.25 (94,70,73,107)
- [ncmhce-D102] q10: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- ... and 9 more errors

### `ncmhce-D103`  (tools/cases/deep-cases-batch-01.js)
- [ncmhce-D103] q1: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D103] q1: length ratio 1.29 exceeds 1.25 (94,83,73,78)
- [ncmhce-D103] q1: correct answer is the longest option
- [ncmhce-D103] q2: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D103] q2: correct answer is the longest option
- [ncmhce-D103] q3: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D103] q3: length ratio 1.26 exceeds 1.25 (88,81,70,73)
- [ncmhce-D103] q3: correct answer is the longest option
- [ncmhce-D103] q4: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D103] q4: correct answer is the longest option
- [ncmhce-D103] q5: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D103] q6: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D103] q6: length ratio 1.49 exceeds 1.25 (96,109,75,73)
- [ncmhce-D103] q7: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D103] q7: length ratio 1.26 exceeds 1.25 (93,79,74,79)
- [ncmhce-D103] q7: correct answer is the longest option
- [ncmhce-D103] q7: opt d: contains absolute language
- [ncmhce-D103] q8: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D103] q8: length ratio 1.32 exceeds 1.25 (87,75,74,66)
- [ncmhce-D103] q8: correct answer is the longest option
- ... and 10 more errors

### `ncmhce-D104`  (tools/cases/deep-cases-batch-01.js)
- [ncmhce-D104] q1: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D104] q2: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D104] q2: correct answer is the longest option
- [ncmhce-D104] q3: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D104] q3: length ratio 1.63 exceeds 1.25 (108,71,75,116)
- [ncmhce-D104] q4: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D104] q4: length ratio 1.40 exceeds 1.25 (94,72,70,98)
- [ncmhce-D104] q5: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D104] q5: length ratio 1.65 exceeds 1.25 (105,112,70,68)
- [ncmhce-D104] q6: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D104] q6: length ratio 1.29 exceeds 1.25 (89,83,75,69)
- [ncmhce-D104] q6: correct answer is the longest option
- [ncmhce-D104] q7: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D104] q7: correct answer is the longest option
- [ncmhce-D104] q8: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D104] q8: length ratio 1.52 exceeds 1.25 (100,114,75,76)
- [ncmhce-D104] q8: opt b: contains absolute language
- [ncmhce-D104] q8: opt d: contains absolute language
- [ncmhce-D104] q9: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D104] q9: length ratio 1.30 exceeds 1.25 (95,78,79,73)
- ... and 10 more errors

### `ncmhce-D105`  (tools/cases/deep-cases-batch-02.js)
- [ncmhce-D105] q1: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D105] q2: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D105] q3: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D105] q4: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D105] q5: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D105] q6: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D105] q7: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D105] q8: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D105] q9: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D105] q10: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D105] q11: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D105] q12: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D105] q13: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]

### `ncmhce-D106`  (tools/cases/deep-cases-batch-02.js)
- [ncmhce-D106] q1: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D106] q2: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D106] q3: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D106] q4: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D106] q5: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D106] q6: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D106] q7: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D106] q8: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D106] q9: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D106] q10: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D106] q10: opt b: contains absolute language
- [ncmhce-D106] q11: weights [3,-1,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D106] q12: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D106] q13: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D106] q13: opt b: contains absolute language

### `ncmhce-D107`  (tools/cases/deep-cases-batch-02.js)
- [ncmhce-D107] q1: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D107] q2: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D107] q3: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D107] q4: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D107] q5: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D107] q6: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D107] q7: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D107] q8: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D107] q9: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D107] q10: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D107] q11: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D107] q12: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D107] q13: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]

### `ncmhce-D108`  (tools/cases/deep-cases-batch-02.js)
- [ncmhce-D108] q1: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D108] q2: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D108] q3: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D108] q3: correct answer is the longest option
- [ncmhce-D108] q4: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D108] q5: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D108] q7: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D108] q8: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D108] q9: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D108] q10: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D108] q11: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D108] q12: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D108] q13: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]

### `ncmhce-D109`  (tools/cases/deep-cases-batch-02.js)
- [ncmhce-D109] q1: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D109] q2: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D109] q3: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D109] q4: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D109] q5: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D109] q6: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D109] q7: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D109] q7: opt b: contains absolute language
- [ncmhce-D109] q8: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D109] q8: opt b: contains absolute language
- [ncmhce-D109] q9: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D109] q10: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D109] q11: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D109] q12: weights [3,-1,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D109] q13: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]

### `ncmhce-D110`  (tools/cases/deep-cases-batch-03.js)
- [ncmhce-D110] q1: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D110] q2: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D110] q3: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D110] q3: correct answer is the longest option
- [ncmhce-D110] q4: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D110] q4: opt b: contains absolute language
- [ncmhce-D110] q5: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D110] q6: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D110] q7: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D110] q8: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D110] q10: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D110] q11: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D110] q12: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D110] q13: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]

### `ncmhce-D111`  (tools/cases/deep-cases-batch-03.js)
- [ncmhce-D111] q1: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D111] q1: correct answer is the longest option
- [ncmhce-D111] q2: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D111] q3: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D111] q3: correct answer is the longest option
- [ncmhce-D111] q4: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D111] q5: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D111] q7: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D111] q8: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D111] q8: opt b: contains absolute language
- [ncmhce-D111] q9: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D111] q10: weights [3,-1,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D111] q11: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D111] q12: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D111] q13: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D111] q13: opt b: contains absolute language

### `ncmhce-D112`  (tools/cases/deep-cases-batch-03.js)
- [ncmhce-D112] q1: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D112] q2: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D112] q3: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D112] q4: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D112] q5: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D112] q6: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D112] q7: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D112] q8: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D112] q9: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D112] q10: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D112] q11: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D112] q11: opt c: contains absolute language
- [ncmhce-D112] q12: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D112] q13: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]

### `ncmhce-D113`  (tools/cases/deep-cases-batch-03.js)
- [ncmhce-D113] q1: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D113] q1: correct answer is the longest option
- [ncmhce-D113] q2: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D113] q3: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D113] q3: correct answer is the longest option
- [ncmhce-D113] q4: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D113] q5: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D113] q6: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D113] q7: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D113] q8: weights [3,-1,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D113] q9: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D113] q9: opt c: contains absolute language
- [ncmhce-D113] q10: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D113] q11: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D113] q11: opt b: contains absolute language
- [ncmhce-D113] q12: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D113] q13: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]

### `ncmhce-D114`  (tools/cases/deep-cases-batch-03.js)
- [ncmhce-D114] q1: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D114] q2: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D114] q2: correct answer is the longest option
- [ncmhce-D114] q3: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D114] q4: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D114] q5: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D114] q6: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D114] q7: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D114] q8: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D114] q9: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D114] q10: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D114] q11: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D114] q11: opt b: contains absolute language
- [ncmhce-D114] q12: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D114] q13: weights [3,-2,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D114] q13: correct answer is the longest option

### `ncmhce-D115`  (tools/cases/deep-cases-batch-04.js)
- [ncmhce-D115] q1: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D115] q2: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D115] q2: correct answer is the longest option
- [ncmhce-D115] q3: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D115] q3: length ratio 1.32 exceeds 1.25 (81,87,69,66)
- [ncmhce-D115] q3: opt c: contains absolute language
- [ncmhce-D115] q4: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D115] q4: length ratio 1.57 exceeds 1.25 (83,57,56,88)
- [ncmhce-D115] q5: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D115] q5: length ratio 1.51 exceeds 1.25 (84,59,61,89)
- [ncmhce-D115] q6: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D115] q6: correct answer is the longest option
- [ncmhce-D115] q7: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D115] q7: length ratio 1.30 exceeds 1.25 (87,71,67,75)
- [ncmhce-D115] q7: correct answer is the longest option
- [ncmhce-D115] q8: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D115] q8: correct answer is the longest option
- [ncmhce-D115] q9: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D115] q9: length ratio 1.31 exceeds 1.25 (81,62,68,66)
- [ncmhce-D115] q9: correct answer is the longest option
- ... and 10 more errors

### `ncmhce-D116`  (tools/cases/deep-cases-batch-05.js)
- [ncmhce-D116] q1: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D116] q2: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D116] q2: correct answer is the longest option
- [ncmhce-D116] q3: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D116] q4: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D116] q4: correct answer is the longest option
- [ncmhce-D116] q5: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D116] q6: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D116] q7: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D116] q8: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D116] q8: opt c: contains absolute language
- [ncmhce-D116] q9: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D116] q10: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D116] q11: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D116] q12: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D116] q12: opt b: contains absolute language
- [ncmhce-D116] q13: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D116] q13: correct answer is the longest option

### `ncmhce-D117`  (tools/cases/deep-cases-batch-05.js)
- [ncmhce-D117] q1: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D117] q2: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D117] q3: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D117] q4: weights [3,-1,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D117] q5: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D117] q6: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D117] q7: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D117] q8: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D117] q9: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D117] q10: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D117] q11: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D117] q12: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D117] q13: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]

### `ncmhce-D118`  (tools/cases/deep-cases-batch-05.js)
- [ncmhce-D118] q1: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D118] q2: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D118] q3: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D118] q3: correct answer is the longest option
- [ncmhce-D118] q4: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D118] q5: weights [3,-1,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D118] q6: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D118] q7: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D118] q8: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D118] q9: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D118] q10: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D118] q10: opt d: contains absolute language
- [ncmhce-D118] q11: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D118] q12: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D118] q13: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]

### `ncmhce-D119`  (tools/cases/deep-cases-batch-05.js)
- [ncmhce-D119] q1: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D119] q2: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D119] q3: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D119] q4: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D119] q4: correct answer is the longest option
- [ncmhce-D119] q5: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D119] q6: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D119] q7: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D119] q8: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D119] q9: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D119] q10: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D119] q11: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D119] q12: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D119] q12: correct answer is the longest option
- [ncmhce-D119] q13: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]

### `ncmhce-D120`  (tools/cases/deep-cases-batch-05.js)
- [ncmhce-D120] q1: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D120] q1: correct answer is the longest option
- [ncmhce-D120] q2: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D120] q3: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D120] q4: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D120] q5: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D120] q6: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D120] q7: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D120] q8: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D120] q9: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D120] q10: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D120] q11: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D120] q11: opt c: contains absolute language
- [ncmhce-D120] q12: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D120] q13: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]

### `ncmhce-D130`  (tools/cases/deep-cases-batch-06.js)
- [ncmhce-D130] q1: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D130] q2: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D130] q2: correct answer is the longest option
- [ncmhce-D130] q3: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D130] q4: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D130] q5: weights [3,-1,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D130] q6: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D130] q8: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D130] q9: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D130] q10: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D130] q10: correct answer is the longest option
- [ncmhce-D130] q11: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D130] q12: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D130] q13: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]

### `ncmhce-D131`  (tools/cases/deep-cases-batch-06.js)
- [ncmhce-D131] q1: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D131] q2: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D131] q2: correct answer is the longest option
- [ncmhce-D131] q3: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D131] q3: length ratio 1.93 exceeds 1.25 (128,189,98,98)
- [ncmhce-D131] q4: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D131] q5: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D131] q6: correct answer is the longest option
- [ncmhce-D131] q7: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D131] q7: opt d: contains absolute language
- [ncmhce-D131] q8: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D131] q9: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D131] q9: correct answer is the longest option
- [ncmhce-D131] q10: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D131] q11: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D131] q12: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D131] q13: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]

### `ncmhce-D132`  (tools/cases/deep-cases-batch-06.js)
- [ncmhce-D132] q2: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D132] q2: length ratio 1.30 exceeds 1.25 (127,110,98,104)
- [ncmhce-D132] q2: correct answer is the longest option
- [ncmhce-D132] q3: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D132] q3: correct answer is the longest option
- [ncmhce-D132] q4: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D132] q5: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D132] q6: weights [3,0,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D132] q7: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D132] q7: opt d: contains absolute language
- [ncmhce-D132] q8: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D132] q9: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D132] q9: opt c: contains absolute language
- [ncmhce-D132] q10: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D132] q11: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D132] q12: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D132] q12: opt b: contains absolute language
- [ncmhce-D132] q13: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]

### `ncmhce-D133`  (tools/cases/deep-cases-batch-06.js)
- [ncmhce-D133] q1: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D133] q1: correct answer is the longest option
- [ncmhce-D133] q2: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D133] q2: length ratio 1.92 exceeds 1.25 (137,192,104,100)
- [ncmhce-D133] q3: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D133] q3: correct answer is the longest option
- [ncmhce-D133] q4: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D133] q4: length ratio 1.91 exceeds 1.25 (137,199,104,104)
- [ncmhce-D133] q5: weights [3,-1,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D133] q5: length ratio 1.30 exceeds 1.25 (93,108,101,121)
- [ncmhce-D133] q6: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D133] q7: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D133] q7: correct answer is the longest option
- [ncmhce-D133] q8: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D133] q9: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D133] q10: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D133] q11: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D133] q12: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D133] q13: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]

### `ncmhce-D134`  (tools/cases/deep-cases-batch-06.js)
- [ncmhce-D134] q1: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D134] q2: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D134] q3: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D134] q3: length ratio 1.50 exceeds 1.25 (82,123,115,118)
- [ncmhce-D134] q4: weights [3,-1,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D134] q5: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D134] q5: length ratio 1.88 exceeds 1.25 (134,190,101,101)
- [ncmhce-D134] q6: opt c: contains absolute language
- [ncmhce-D134] q7: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D134] q8: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D134] q9: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D134] q10: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D134] q11: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D134] q12: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D134] q13: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D134] q13: opt b: contains absolute language

### `ncmhce-D135`  (tools/cases/deep-cases-batch-07.js)
- [ncmhce-D135] q1: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D135] q1: correct answer is the longest option
- [ncmhce-D135] q2: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D135] q3: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D135] q4: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D135] q5: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D135] q6: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D135] q7: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D135] q7: opt d: contains absolute language
- [ncmhce-D135] q8: weights [3,-1,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D135] q8: opt d: contains absolute language
- [ncmhce-D135] q9: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D135] q9: opt b: contains absolute language
- [ncmhce-D135] q10: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D135] q11: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D135] q12: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D135] q12: correct answer is the longest option
- [ncmhce-D135] q13: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]

### `ncmhce-D136`  (tools/cases/deep-cases-batch-07.js)
- [ncmhce-D136] q1: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D136] q2: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D136] q2: correct answer is the longest option
- [ncmhce-D136] q3: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D136] q4: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D136] q4: correct answer is the longest option
- [ncmhce-D136] q5: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D136] q7: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D136] q8: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D136] q10: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D136] q11: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D136] q12: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D136] q13: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]

### `ncmhce-D137`  (tools/cases/deep-cases-batch-07.js)
- [ncmhce-D137] q1: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D137] q1: correct answer is the longest option
- [ncmhce-D137] q2: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D137] q2: correct answer is the longest option
- [ncmhce-D137] q3: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D137] q3: correct answer is the longest option
- [ncmhce-D137] q4: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D137] q5: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D137] q6: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D137] q6: opt d: contains absolute language
- [ncmhce-D137] q7: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D137] q9: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D137] q10: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D137] q10: correct answer is the longest option
- [ncmhce-D137] q11: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D137] q12: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D137] q13: weights [3,-1,-1,-1] must be exactly [3,0,-1,-2]

### `ncmhce-D138`  (tools/cases/deep-cases-batch-07.js)
- [ncmhce-D138] q1: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D138] q2: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D138] q2: length ratio 1.35 exceeds 1.25 (86,116,106,110)
- [ncmhce-D138] q3: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D138] q4: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D138] q4: correct answer is the longest option
- [ncmhce-D138] q5: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D138] q6: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D138] q6: correct answer is the longest option
- [ncmhce-D138] q7: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D138] q8: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D138] q9: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D138] q10: weights [3,-1,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D138] q10: correct answer is the longest option
- [ncmhce-D138] q11: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D138] q12: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D138] q12: correct answer is the longest option
- [ncmhce-D138] q13: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]

### `ncmhce-D139`  (tools/cases/deep-cases-batch-07.js)
- [ncmhce-D139] q1: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D139] q1: length ratio 1.31 exceeds 1.25 (128,106,98,109)
- [ncmhce-D139] q1: correct answer is the longest option
- [ncmhce-D139] q2: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D139] q2: length ratio 1.45 exceeds 1.25 (116,108,80,93)
- [ncmhce-D139] q2: correct answer is the longest option
- [ncmhce-D139] q3: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D139] q4: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D139] q5: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D139] q6: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D139] q7: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D139] q8: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D139] q9: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D139] q10: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D139] q11: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D139] q11: correct answer is the longest option
- [ncmhce-D139] q11: opt b: contains absolute language
- [ncmhce-D139] q12: weights [3,-2,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D139] q12: correct answer is the longest option
- [ncmhce-D139] q13: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]

### `ncmhce-D140`  (tools/cases/deep-cases-batch-08.js)
- [ncmhce-D140] q1: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D140] q1: correct answer is the longest option
- [ncmhce-D140] q2: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D140] q3: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D140] q4: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D140] q5: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D140] q6: length ratio 1.27 exceeds 1.25 (95,120,121,110)
- [ncmhce-D140] q7: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D140] q8: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D140] q9: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D140] q10: weights [3,-1,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D140] q11: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D140] q12: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D140] q13: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D140] q13: opt b: contains absolute language

### `ncmhce-D141`  (tools/cases/deep-cases-batch-08.js)
- [ncmhce-D141] q1: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D141] q2: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D141] q3: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D141] q4: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D141] q5: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D141] q6: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D141] q7: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D141] q7: correct answer is the longest option
- [ncmhce-D141] q8: correct answer is the longest option
- [ncmhce-D141] q9: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D141] q10: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D141] q11: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D141] q11: correct answer is the longest option
- [ncmhce-D141] q12: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D141] q13: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]

### `ncmhce-D142`  (tools/cases/deep-cases-batch-08.js)
- [ncmhce-D142] q1: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D142] q1: correct answer is the longest option
- [ncmhce-D142] q2: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D142] q3: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D142] q3: length ratio 1.27 exceeds 1.25 (130,120,119,102)
- [ncmhce-D142] q3: correct answer is the longest option
- [ncmhce-D142] q4: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D142] q5: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D142] q5: correct answer is the longest option
- [ncmhce-D142] q6: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D142] q7: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D142] q7: correct answer is the longest option
- [ncmhce-D142] q8: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D142] q9: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D142] q10: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D142] q11: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D142] q11: correct answer is the longest option
- [ncmhce-D142] q12: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D142] q12: opt b: contains absolute language
- [ncmhce-D142] q13: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]

### `ncmhce-D143`  (tools/cases/deep-cases-batch-08.js)
- [ncmhce-D143] q1: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D143] q1: correct answer is the longest option
- [ncmhce-D143] q2: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D143] q3: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D143] q3: correct answer is the longest option
- [ncmhce-D143] q4: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D143] q4: correct answer is the longest option
- [ncmhce-D143] q5: weights [3,-1,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D143] q6: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D143] q6: correct answer is the longest option
- [ncmhce-D143] q8: correct answer is the longest option
- [ncmhce-D143] q9: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D143] q9: correct answer is the longest option
- [ncmhce-D143] q10: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D143] q11: weights [3,-1,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D143] q12: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D143] q12: correct answer is the longest option
- [ncmhce-D143] q13: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]

### `ncmhce-D144`  (tools/cases/deep-cases-batch-08.js)
- [ncmhce-D144] q1: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D144] q1: correct answer is the longest option
- [ncmhce-D144] q2: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D144] q3: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D144] q3: correct answer is the longest option
- [ncmhce-D144] q4: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D144] q4: correct answer is the longest option
- [ncmhce-D144] q5: weights [3,-1,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D144] q6: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D144] q7: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D144] q7: correct answer is the longest option
- [ncmhce-D144] q8: correct answer is the longest option
- [ncmhce-D144] q9: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D144] q9: correct answer is the longest option
- [ncmhce-D144] q10: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D144] q11: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D144] q11: correct answer is the longest option
- [ncmhce-D144] q12: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D144] q12: correct answer is the longest option
- [ncmhce-D144] q13: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]

### `ncmhce-D145`  (tools/cases/deep-cases-batch-09.js)
- [ncmhce-D145] q1: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D145] q2: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D145] q2: correct answer is the longest option
- [ncmhce-D145] q3: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D145] q3: correct answer is the longest option
- [ncmhce-D145] q4: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D145] q4: correct answer is the longest option
- [ncmhce-D145] q5: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D145] q5: opt d: contains absolute language
- [ncmhce-D145] q6: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D145] q7: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D145] q7: opt d: contains absolute language
- [ncmhce-D145] q8: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D145] q9: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D145] q10: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D145] q11: weights [3,-1,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D145] q12: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D145] q12: opt b: contains absolute language
- [ncmhce-D145] q13: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]

### `ncmhce-D146`  (tools/cases/deep-cases-batch-09.js)
- [ncmhce-D146] q1: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D146] q1: correct answer is the longest option
- [ncmhce-D146] q2: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D146] q2: correct answer is the longest option
- [ncmhce-D146] q3: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D146] q3: correct answer is the longest option
- [ncmhce-D146] q4: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D146] q4: correct answer is the longest option
- [ncmhce-D146] q5: weights [3,-1,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D146] q5: correct answer is the longest option
- [ncmhce-D146] q6: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D146] q7: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D146] q8: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D146] q9: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D146] q9: correct answer is the longest option
- [ncmhce-D146] q10: weights [3,-1,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D146] q11: weights [3,-1,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D146] q12: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D146] q13: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]

### `ncmhce-D147`  (tools/cases/deep-cases-batch-09.js)
- [ncmhce-D147] q1: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D147] q1: correct answer is the longest option
- [ncmhce-D147] q2: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D147] q3: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D147] q3: correct answer is the longest option
- [ncmhce-D147] q4: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D147] q5: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D147] q5: correct answer is the longest option
- [ncmhce-D147] q7: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D147] q7: correct answer is the longest option
- [ncmhce-D147] q7: opt d: contains absolute language
- [ncmhce-D147] q8: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D147] q9: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D147] q10: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D147] q10: correct answer is the longest option
- [ncmhce-D147] q11: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D147] q11: correct answer is the longest option
- [ncmhce-D147] q12: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D147] q12: length ratio 1.27 exceeds 1.25 (141,124,119,111)
- [ncmhce-D147] q12: correct answer is the longest option
- ... and 2 more errors

### `ncmhce-D148`  (tools/cases/deep-cases-batch-09.js)
- [ncmhce-D148] q1: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D148] q1: length ratio 1.31 exceeds 1.25 (128,103,98,109)
- [ncmhce-D148] q1: correct answer is the longest option
- [ncmhce-D148] q2: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D148] q2: correct answer is the longest option
- [ncmhce-D148] q3: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D148] q3: length ratio 1.99 exceeds 1.25 (141,189,105,95)
- [ncmhce-D148] q4: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D148] q5: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D148] q7: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D148] q8: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D148] q9: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D148] q10: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D148] q11: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D148] q11: correct answer is the longest option
- [ncmhce-D148] q12: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D148] q13: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]

### `ncmhce-D149`  (tools/cases/deep-cases-batch-09.js)
- [ncmhce-D149] q1: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D149] q1: correct answer is the longest option
- [ncmhce-D149] q2: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D149] q2: length ratio 2.06 exceeds 1.25 (141,202,112,98)
- [ncmhce-D149] q3: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D149] q3: correct answer is the longest option
- [ncmhce-D149] q4: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D149] q5: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D149] q7: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D149] q7: correct answer is the longest option
- [ncmhce-D149] q8: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D149] q9: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D149] q10: weights [3,-1,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D149] q10: opt b: contains absolute language
- [ncmhce-D149] q10: opt d: contains absolute language
- [ncmhce-D149] q11: weights [3,-1,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D149] q11: correct answer is the longest option
- [ncmhce-D149] q11: opt d: contains absolute language
- [ncmhce-D149] q12: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D149] q12: opt b: contains absolute language
- ... and 2 more errors

### `ncmhce-D150`  (tools/cases/deep-cases-batch-10.js)
- [ncmhce-D150] q1: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D150] q1: correct answer is the longest option
- [ncmhce-D150] q2: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D150] q3: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D150] q4: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D150] q5: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D150] q6: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D150] q6: opt c: contains absolute language
- [ncmhce-D150] q7: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D150] q7: opt b: contains absolute language
- [ncmhce-D150] q8: weights [3,-1,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D150] q9: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D150] q10: weights [3,-1,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D150] q11: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D150] q12: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D150] q13: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]

### `ncmhce-D151`  (tools/cases/deep-cases-batch-10.js)
- [ncmhce-D151] q1: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D151] q2: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D151] q3: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D151] q4: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D151] q5: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D151] q6: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D151] q7: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D151] q8: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D151] q9: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D151] q10: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D151] q10: opt d: contains absolute language
- [ncmhce-D151] q11: weights [3,-1,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D151] q12: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D151] q12: opt b: contains absolute language
- [ncmhce-D151] q13: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]

### `ncmhce-D152`  (tools/cases/deep-cases-batch-10.js)
- [ncmhce-D152] q1: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D152] q2: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D152] q3: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D152] q4: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D152] q5: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D152] q6: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D152] q7: weights [3,-1,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D152] q7: opt b: contains absolute language
- [ncmhce-D152] q7: opt d: contains absolute language
- [ncmhce-D152] q8: weights [3,-1,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D152] q9: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D152] q10: weights [3,-1,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D152] q10: opt d: contains absolute language
- [ncmhce-D152] q11: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D152] q12: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D152] q13: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D152] q13: opt b: contains absolute language

### `ncmhce-D153`  (tools/cases/deep-cases-batch-10.js)
- [ncmhce-D153] q1: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D153] q2: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D153] q2: correct answer is the longest option
- [ncmhce-D153] q3: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D153] q4: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D153] q5: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D153] q6: weights [3,-2,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D153] q7: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D153] q8: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D153] q8: opt d: contains absolute language
- [ncmhce-D153] q9: weights [3,-1,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D153] q10: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D153] q11: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D153] q12: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D153] q13: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]

### `ncmhce-D154`  (tools/cases/deep-cases-batch-10.js)
- [ncmhce-D154] q1: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D154] q1: correct answer is the longest option
- [ncmhce-D154] q2: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D154] q3: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D154] q4: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D154] q5: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D154] q6: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D154] q7: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D154] q8: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D154] q9: weights [3,-1,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D154] q10: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D154] q11: weights [3,-1,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D154] q12: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D154] q12: opt b: contains absolute language
- [ncmhce-D154] q13: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]

### `ncmhce-D155`  (tools/cases/deep-cases-batch-11.js)
- [ncmhce-D155] q1: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D155] q2: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D155] q2: length ratio 1.74 exceeds 1.25 (140,183,105,108)
- [ncmhce-D155] q3: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D155] q3: correct answer is the longest option
- [ncmhce-D155] q4: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D155] q5: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D155] q6: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D155] q7: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D155] q7: correct answer is the longest option
- [ncmhce-D155] q8: weights [3,-1,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D155] q8: correct answer is the longest option
- [ncmhce-D155] q9: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D155] q10: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D155] q11: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D155] q12: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D155] q12: opt b: contains absolute language
- [ncmhce-D155] q13: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D155] q13: length ratio 1.30 exceeds 1.25 (97,114,126,120)

### `ncmhce-D156`  (tools/cases/deep-cases-batch-11.js)
- [ncmhce-D156] q1: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D156] q2: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D156] q3: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D156] q3: length ratio 1.40 exceeds 1.25 (130,143,102,106)
- [ncmhce-D156] q4: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D156] q4: correct answer is the longest option
- [ncmhce-D156] q5: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D156] q6: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D156] q7: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D156] q8: weights [3,-1,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D156] q9: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D156] q9: correct answer is the longest option
- [ncmhce-D156] q10: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D156] q11: weights [3,-1,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D156] q12: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D156] q13: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D156] q13: opt b: contains absolute language

### `ncmhce-D157`  (tools/cases/deep-cases-batch-11.js)
- [ncmhce-D157] q1: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D157] q2: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D157] q3: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D157] q3: length ratio 1.31 exceeds 1.25 (123,94,99,106)
- [ncmhce-D157] q3: correct answer is the longest option
- [ncmhce-D157] q4: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D157] q4: correct answer is the longest option
- [ncmhce-D157] q5: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D157] q6: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D157] q6: correct answer is the longest option
- [ncmhce-D157] q7: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D157] q7: opt c: contains absolute language
- [ncmhce-D157] q8: weights [3,-1,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D157] q9: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D157] q10: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D157] q11: weights [3,-1,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D157] q12: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D157] q13: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]

### `ncmhce-D158`  (tools/cases/deep-cases-batch-11.js)
- [ncmhce-D158] q1: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D158] q2: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D158] q2: correct answer is the longest option
- [ncmhce-D158] q3: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D158] q3: correct answer is the longest option
- [ncmhce-D158] q4: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D158] q5: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D158] q6: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D158] q7: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D158] q8: weights [3,-1,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D158] q8: correct answer is the longest option
- [ncmhce-D158] q9: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D158] q10: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D158] q11: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D158] q12: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D158] q12: opt b: contains absolute language
- [ncmhce-D158] q13: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]

### `ncmhce-D159`  (tools/cases/deep-cases-batch-11.js)
- [ncmhce-D159] q1: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D159] q2: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D159] q3: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D159] q3: correct answer is the longest option
- [ncmhce-D159] q4: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D159] q4: correct answer is the longest option
- [ncmhce-D159] q6: weights [3,-2,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D159] q7: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D159] q8: weights [3,-1,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D159] q9: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D159] q10: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D159] q10: opt d: contains absolute language
- [ncmhce-D159] q11: weights [3,-1,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D159] q12: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D159] q12: correct answer is the longest option
- [ncmhce-D159] q13: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]

### `ncmhce-D160`  (tools/cases/deep-cases-batch-12.js)
- [ncmhce-D160] q1: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D160] q1: correct answer is the longest option
- [ncmhce-D160] q2: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D160] q2: correct answer is the longest option
- [ncmhce-D160] q3: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D160] q3: correct answer is the longest option
- [ncmhce-D160] q4: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D160] q4: correct answer is the longest option
- [ncmhce-D160] q5: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D160] q6: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D160] q7: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D160] q7: opt b: contains absolute language
- [ncmhce-D160] q7: opt d: contains absolute language
- [ncmhce-D160] q8: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D160] q8: opt c: contains absolute language
- [ncmhce-D160] q9: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D160] q10: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D160] q11: weights [3,-1,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D160] q12: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D160] q12: opt b: contains absolute language
- ... and 1 more errors

### `ncmhce-D161`  (tools/cases/deep-cases-batch-12.js)
- [ncmhce-D161] q1: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D161] q2: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D161] q2: correct answer is the longest option
- [ncmhce-D161] q3: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D161] q3: length ratio 1.66 exceeds 1.25 (125,99,94,156)
- [ncmhce-D161] q4: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D161] q5: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D161] q5: correct answer is the longest option
- [ncmhce-D161] q6: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D161] q7: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D161] q7: correct answer is the longest option
- [ncmhce-D161] q8: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D161] q9: weights [3,-1,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D161] q10: weights [3,-1,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D161] q11: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D161] q12: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D161] q12: opt b: contains absolute language
- [ncmhce-D161] q13: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D161] q13: correct answer is the longest option

### `ncmhce-D162`  (tools/cases/deep-cases-batch-12.js)
- [ncmhce-D162] q1: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D162] q2: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D162] q2: length ratio 1.29 exceeds 1.25 (132,111,102,106)
- [ncmhce-D162] q2: correct answer is the longest option
- [ncmhce-D162] q3: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D162] q3: correct answer is the longest option
- [ncmhce-D162] q4: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D162] q5: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D162] q6: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D162] q7: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D162] q8: weights [3,-1,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D162] q9: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D162] q9: opt c: contains absolute language
- [ncmhce-D162] q10: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D162] q11: weights [3,-1,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D162] q12: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D162] q13: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]

### `ncmhce-D163`  (tools/cases/deep-cases-batch-12.js)
- [ncmhce-D163] q1: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D163] q1: correct answer is the longest option
- [ncmhce-D163] q2: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D163] q3: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D163] q3: length ratio 1.26 exceeds 1.25 (86,108,98,100)
- [ncmhce-D163] q4: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D163] q5: correct answer is the longest option
- [ncmhce-D163] q6: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D163] q7: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D163] q7: opt d: contains absolute language
- [ncmhce-D163] q8: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D163] q9: weights [3,-1,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D163] q10: weights [3,-1,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D163] q11: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D163] q12: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D163] q13: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]

### `ncmhce-D164`  (tools/cases/deep-cases-batch-12.js)
- [ncmhce-D164] q1: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D164] q2: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D164] q2: correct answer is the longest option
- [ncmhce-D164] q3: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D164] q3: correct answer is the longest option
- [ncmhce-D164] q4: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D164] q5: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D164] q6: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D164] q7: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D164] q7: correct answer is the longest option
- [ncmhce-D164] q8: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D164] q9: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D164] q10: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D164] q11: weights [3,-1,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D164] q12: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D164] q12: correct answer is the longest option
- [ncmhce-D164] q13: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]

### `ncmhce-D165`  (tools/cases/deep-cases-batch-13.js)
- [ncmhce-D165] q1: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D165] q2: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D165] q2: correct answer is the longest option
- [ncmhce-D165] q3: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D165] q4: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D165] q4: correct answer is the longest option
- [ncmhce-D165] q5: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D165] q6: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D165] q7: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D165] q7: opt c: contains absolute language
- [ncmhce-D165] q7: opt d: contains absolute language
- [ncmhce-D165] q8: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D165] q8: correct answer is the longest option
- [ncmhce-D165] q8: opt c: contains absolute language
- [ncmhce-D165] q9: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D165] q10: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D165] q11: weights [3,-1,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D165] q12: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D165] q12: opt b: contains absolute language
- [ncmhce-D165] q13: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]

### `ncmhce-D166`  (tools/cases/deep-cases-batch-13.js)
- [ncmhce-D166] q1: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D166] q1: correct answer is the longest option
- [ncmhce-D166] q2: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D166] q2: length ratio 1.33 exceeds 1.25 (116,101,87,102)
- [ncmhce-D166] q2: correct answer is the longest option
- [ncmhce-D166] q3: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D166] q3: length ratio 1.47 exceeds 1.25 (136,146,99,105)
- [ncmhce-D166] q4: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D166] q4: length ratio 1.29 exceeds 1.25 (124,107,96,98)
- [ncmhce-D166] q4: correct answer is the longest option
- [ncmhce-D166] q5: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D166] q6: weights [3,-2,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D166] q6: correct answer is the longest option
- [ncmhce-D166] q7: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D166] q7: opt d: contains absolute language
- [ncmhce-D166] q8: weights [3,-1,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D166] q9: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D166] q9: correct answer is the longest option
- [ncmhce-D166] q9: opt c: contains absolute language
- [ncmhce-D166] q10: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- ... and 3 more errors

### `ncmhce-D167`  (tools/cases/deep-cases-batch-13.js)
- [ncmhce-D167] q1: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D167] q2: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D167] q3: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D167] q3: correct answer is the longest option
- [ncmhce-D167] q4: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D167] q4: length ratio 1.28 exceeds 1.25 (119,109,93,102)
- [ncmhce-D167] q4: correct answer is the longest option
- [ncmhce-D167] q5: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D167] q5: correct answer is the longest option
- [ncmhce-D167] q6: weights [3,-2,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D167] q7: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D167] q7: correct answer is the longest option
- [ncmhce-D167] q8: weights [3,-1,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D167] q9: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D167] q10: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D167] q11: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D167] q12: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D167] q13: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]

### `ncmhce-D168`  (tools/cases/deep-cases-batch-13.js)
- [ncmhce-D168] q1: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D168] q1: length ratio 1.27 exceeds 1.25 (124,107,98,108)
- [ncmhce-D168] q1: correct answer is the longest option
- [ncmhce-D168] q2: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D168] q3: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D168] q4: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D168] q4: correct answer is the longest option
- [ncmhce-D168] q5: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D168] q6: weights [3,-2,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D168] q6: opt d: contains absolute language
- [ncmhce-D168] q7: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D168] q8: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D168] q9: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D168] q10: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D168] q10: opt d: contains absolute language
- [ncmhce-D168] q11: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D168] q12: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D168] q13: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]

### `ncmhce-D169`  (tools/cases/deep-cases-batch-13.js)
- [ncmhce-D169] q1: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D169] q1: length ratio 1.26 exceeds 1.25 (96,86,101,108)
- [ncmhce-D169] q2: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D169] q3: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D169] q3: correct answer is the longest option
- [ncmhce-D169] q4: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D169] q5: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D169] q6: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D169] q7: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D169] q8: weights [3,-1,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D169] q9: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D169] q10: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D169] q11: weights [3,-1,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D169] q12: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D169] q13: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]

### `ncmhce-D170`  (tools/cases/deep-cases-batch-14.js)
- [ncmhce-D170] q1: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D170] q2: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D170] q3: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D170] q4: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D170] q4: correct answer is the longest option
- [ncmhce-D170] q5: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D170] q6: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D170] q7: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D170] q8: weights [3,-1,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D170] q9: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D170] q10: weights [3,-1,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D170] q11: weights [3,-1,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D170] q12: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D170] q12: opt b: contains absolute language
- [ncmhce-D170] q13: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]

### `ncmhce-D171`  (tools/cases/deep-cases-batch-14.js)
- [ncmhce-D171] q1: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D171] q2: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D171] q2: length ratio 1.29 exceeds 1.25 (117,105,91,106)
- [ncmhce-D171] q2: correct answer is the longest option
- [ncmhce-D171] q3: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D171] q3: length ratio 1.29 exceeds 1.25 (120,104,97,93)
- [ncmhce-D171] q3: correct answer is the longest option
- [ncmhce-D171] q4: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D171] q4: length ratio 1.87 exceeds 1.25 (127,181,97,100)
- [ncmhce-D171] q5: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D171] q6: weights [3,-2,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D171] q7: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D171] q8: weights [3,-1,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D171] q9: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D171] q10: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D171] q11: weights [3,-1,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D171] q12: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D171] q13: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]

### `ncmhce-D172`  (tools/cases/deep-cases-batch-14.js)
- [ncmhce-D172] q1: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D172] q2: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D172] q2: correct answer is the longest option
- [ncmhce-D172] q3: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D172] q3: length ratio 1.86 exceeds 1.25 (124,175,94,98)
- [ncmhce-D172] q4: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D172] q4: length ratio 2.15 exceeds 1.25 (136,189,88,95)
- [ncmhce-D172] q5: correct answer is the longest option
- [ncmhce-D172] q6: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D172] q7: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D172] q8: weights [3,-1,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D172] q9: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D172] q10: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D172] q10: correct answer is the longest option
- [ncmhce-D172] q11: weights [3,-1,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D172] q12: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D172] q13: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]

### `ncmhce-D173`  (tools/cases/deep-cases-batch-14.js)
- [ncmhce-D173] q1: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D173] q2: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D173] q2: correct answer is the longest option
- [ncmhce-D173] q3: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D173] q3: correct answer is the longest option
- [ncmhce-D173] q4: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D173] q5: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D173] q6: weights [3,-2,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D173] q7: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D173] q8: weights [3,-1,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D173] q9: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D173] q9: opt c: contains absolute language
- [ncmhce-D173] q10: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D173] q10: opt d: contains absolute language
- [ncmhce-D173] q11: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D173] q12: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D173] q12: opt b: contains absolute language
- [ncmhce-D173] q13: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]

### `ncmhce-D174`  (tools/cases/deep-cases-batch-14.js)
- [ncmhce-D174] q1: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D174] q2: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D174] q2: correct answer is the longest option
- [ncmhce-D174] q3: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D174] q3: correct answer is the longest option
- [ncmhce-D174] q4: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D174] q4: length ratio 1.26 exceeds 1.25 (118,106,94,111)
- [ncmhce-D174] q4: correct answer is the longest option
- [ncmhce-D174] q5: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D174] q6: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D174] q7: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D174] q8: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D174] q8: opt b: contains absolute language
- [ncmhce-D174] q9: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D174] q9: correct answer is the longest option
- [ncmhce-D174] q10: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D174] q11: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D174] q12: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D174] q12: length ratio 1.26 exceeds 1.25 (131,114,115,104)
- [ncmhce-D174] q12: correct answer is the longest option
- ... and 2 more errors

### `ncmhce-D175`  (tools/cases/deep-cases-batch-15.js)
- [ncmhce-D175] q1: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D175] q1: correct answer is the longest option
- [ncmhce-D175] q2: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D175] q2: correct answer is the longest option
- [ncmhce-D175] q3: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D175] q3: correct answer is the longest option
- [ncmhce-D175] q4: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D175] q4: length ratio 1.28 exceeds 1.25 (114,107,89,102)
- [ncmhce-D175] q4: correct answer is the longest option
- [ncmhce-D175] q5: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D175] q6: weights [3,-2,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D175] q7: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D175] q8: weights [3,-1,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D175] q9: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D175] q9: opt b: contains absolute language
- [ncmhce-D175] q10: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D175] q11: weights [3,-1,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D175] q11: correct answer is the longest option
- [ncmhce-D175] q12: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D175] q13: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]

### `ncmhce-D176`  (tools/cases/deep-cases-batch-15.js)
- [ncmhce-D176] q1: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D176] q2: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D176] q2: correct answer is the longest option
- [ncmhce-D176] q3: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D176] q3: length ratio 1.28 exceeds 1.25 (127,113,99,103)
- [ncmhce-D176] q3: correct answer is the longest option
- [ncmhce-D176] q5: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D176] q6: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D176] q7: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D176] q8: weights [3,-1,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D176] q9: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D176] q10: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D176] q10: correct answer is the longest option
- [ncmhce-D176] q11: weights [3,-1,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D176] q12: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D176] q13: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]

### `ncmhce-D177`  (tools/cases/deep-cases-batch-15.js)
- [ncmhce-D177] q1: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D177] q2: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D177] q2: correct answer is the longest option
- [ncmhce-D177] q3: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D177] q3: correct answer is the longest option
- [ncmhce-D177] q4: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D177] q4: correct answer is the longest option
- [ncmhce-D177] q5: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D177] q6: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D177] q7: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D177] q7: correct answer is the longest option
- [ncmhce-D177] q7: opt b: contains absolute language
- [ncmhce-D177] q8: weights [3,-1,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D177] q9: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D177] q9: opt c: contains absolute language
- [ncmhce-D177] q10: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D177] q10: opt b: contains absolute language
- [ncmhce-D177] q11: weights [3,-1,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D177] q11: opt b: contains absolute language
- [ncmhce-D177] q12: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- ... and 1 more errors

### `ncmhce-D178`  (tools/cases/deep-cases-batch-15.js)
- [ncmhce-D178] q1: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D178] q2: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D178] q2: length ratio 1.71 exceeds 1.25 (132,164,96,102)
- [ncmhce-D178] q3: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D178] q3: correct answer is the longest option
- [ncmhce-D178] q4: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D178] q5: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D178] q6: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D178] q7: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D178] q8: weights [3,-1,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D178] q9: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D178] q10: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D178] q11: weights [3,-1,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D178] q12: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D178] q13: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]

### `ncmhce-D179`  (tools/cases/deep-cases-batch-15.js)
- [ncmhce-D179] q1: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D179] q2: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D179] q2: length ratio 1.28 exceeds 1.25 (115,114,90,97)
- [ncmhce-D179] q2: correct answer is the longest option
- [ncmhce-D179] q3: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D179] q3: length ratio 1.29 exceeds 1.25 (123,105,95,106)
- [ncmhce-D179] q3: correct answer is the longest option
- [ncmhce-D179] q4: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D179] q5: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D179] q6: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D179] q7: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D179] q7: opt c: contains absolute language
- [ncmhce-D179] q8: weights [3,-1,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D179] q9: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D179] q10: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D179] q11: weights [3,-1,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D179] q12: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D179] q12: opt b: contains absolute language
- [ncmhce-D179] q13: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]

### `ncmhce-D180`  (tools/cases/deep-cases-batch-16.js)
- [ncmhce-D180] q1: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D180] q2: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D180] q2: correct answer is the longest option
- [ncmhce-D180] q3: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D180] q4: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D180] q4: length ratio 1.43 exceeds 1.25 (124,113,87,108)
- [ncmhce-D180] q4: correct answer is the longest option
- [ncmhce-D180] q5: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D180] q6: weights [3,-2,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D180] q7: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D180] q7: opt b: contains absolute language
- [ncmhce-D180] q8: weights [3,-1,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D180] q9: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D180] q9: opt c: contains absolute language
- [ncmhce-D180] q9: opt d: contains absolute language
- [ncmhce-D180] q10: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D180] q11: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D180] q11: opt b: contains absolute language
- [ncmhce-D180] q12: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D180] q12: correct answer is the longest option
- ... and 1 more errors

### `ncmhce-D181`  (tools/cases/deep-cases-batch-16.js)
- [ncmhce-D181] q1: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D181] q2: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D181] q3: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D181] q3: length ratio 1.28 exceeds 1.25 (113,100,88,91)
- [ncmhce-D181] q3: correct answer is the longest option
- [ncmhce-D181] q4: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D181] q4: length ratio 1.28 exceeds 1.25 (104,110,86,105)
- [ncmhce-D181] q6: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D181] q7: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D181] q7: opt b: contains absolute language
- [ncmhce-D181] q8: weights [3,-1,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D181] q9: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D181] q9: length ratio 1.29 exceeds 1.25 (91,117,114,104)
- [ncmhce-D181] q10: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D181] q11: weights [3,-1,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D181] q12: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D181] q13: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]

### `ncmhce-D182`  (tools/cases/deep-cases-batch-16.js)
- [ncmhce-D182] q1: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D182] q2: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D182] q3: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D182] q3: correct answer is the longest option
- [ncmhce-D182] q4: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D182] q4: correct answer is the longest option
- [ncmhce-D182] q6: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D182] q7: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D182] q7: opt c: contains absolute language
- [ncmhce-D182] q7: opt d: contains absolute language
- [ncmhce-D182] q8: weights [3,-1,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D182] q9: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D182] q10: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D182] q11: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D182] q12: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D182] q13: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]

### `ncmhce-D183`  (tools/cases/deep-cases-batch-16.js)
- [ncmhce-D183] q1: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D183] q2: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D183] q2: correct answer is the longest option
- [ncmhce-D183] q3: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D183] q4: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D183] q4: correct answer is the longest option
- [ncmhce-D183] q5: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D183] q6: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D183] q6: correct answer is the longest option
- [ncmhce-D183] q7: weights [3,-1,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D183] q7: opt d: contains absolute language
- [ncmhce-D183] q8: weights [3,-1,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D183] q9: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D183] q10: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D183] q11: weights [3,-1,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D183] q11: correct answer is the longest option
- [ncmhce-D183] q12: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D183] q13: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D183] q13: opt b: contains absolute language

### `ncmhce-D184`  (tools/cases/deep-cases-batch-16.js)
- [ncmhce-D184] q1: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D184] q1: correct answer is the longest option
- [ncmhce-D184] q2: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D184] q2: length ratio 1.94 exceeds 1.25 (127,180,96,93)
- [ncmhce-D184] q3: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D184] q3: correct answer is the longest option
- [ncmhce-D184] q4: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D184] q4: correct answer is the longest option
- [ncmhce-D184] q6: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D184] q7: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D184] q8: weights [3,-1,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D184] q9: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D184] q10: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D184] q11: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D184] q12: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D184] q12: correct answer is the longest option
- [ncmhce-D184] q13: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]

### `ncmhce-D185`  (tools/cases/deep-cases-batch-17.js)
- [ncmhce-D185] q1: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D185] q2: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D185] q2: correct answer is the longest option
- [ncmhce-D185] q3: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D185] q3: length ratio 1.40 exceeds 1.25 (108,104,82,115)
- [ncmhce-D185] q4: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D185] q4: correct answer is the longest option
- [ncmhce-D185] q5: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D185] q6: weights [3,-2,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D185] q7: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D185] q7: opt d: contains absolute language
- [ncmhce-D185] q8: weights [3,-1,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D185] q9: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D185] q9: opt c: contains absolute language
- [ncmhce-D185] q10: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D185] q11: weights [3,-1,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D185] q12: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D185] q13: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]

### `ncmhce-D186`  (tools/cases/deep-cases-batch-17.js)
- [ncmhce-D186] q1: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D186] q2: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D186] q2: correct answer is the longest option
- [ncmhce-D186] q3: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D186] q3: length ratio 1.29 exceeds 1.25 (112,95,88,87)
- [ncmhce-D186] q3: correct answer is the longest option
- [ncmhce-D186] q4: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D186] q4: length ratio 1.30 exceeds 1.25 (112,100,86,96)
- [ncmhce-D186] q4: correct answer is the longest option
- [ncmhce-D186] q6: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D186] q7: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D186] q8: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D186] q9: weights [3,-1,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D186] q10: weights [3,-1,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D186] q11: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D186] q11: opt b: contains absolute language
- [ncmhce-D186] q12: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D186] q12: correct answer is the longest option
- [ncmhce-D186] q13: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]

### `ncmhce-D187`  (tools/cases/deep-cases-batch-17.js)
- [ncmhce-D187] q1: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D187] q2: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D187] q3: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D187] q3: length ratio 1.31 exceeds 1.25 (101,106,81,91)
- [ncmhce-D187] q4: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D187] q4: length ratio 1.25 exceeds 1.25 (109,103,87,98)
- [ncmhce-D187] q4: correct answer is the longest option
- [ncmhce-D187] q5: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D187] q6: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D187] q7: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D187] q8: weights [3,-1,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D187] q9: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D187] q10: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D187] q11: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D187] q12: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D187] q13: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]

### `ncmhce-D188`  (tools/cases/deep-cases-batch-17.js)
- [ncmhce-D188] q1: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D188] q1: correct answer is the longest option
- [ncmhce-D188] q2: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D188] q2: correct answer is the longest option
- [ncmhce-D188] q3: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D188] q3: length ratio 1.32 exceeds 1.25 (115,97,87,102)
- [ncmhce-D188] q3: correct answer is the longest option
- [ncmhce-D188] q4: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D188] q4: length ratio 1.45 exceeds 1.25 (120,98,83,110)
- [ncmhce-D188] q4: correct answer is the longest option
- [ncmhce-D188] q6: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D188] q7: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D188] q7: opt c: contains absolute language
- [ncmhce-D188] q7: opt d: contains absolute language
- [ncmhce-D188] q8: weights [3,-1,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D188] q8: correct answer is the longest option
- [ncmhce-D188] q9: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D188] q10: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D188] q11: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D188] q12: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- ... and 1 more errors

### `ncmhce-D189`  (tools/cases/deep-cases-batch-17.js)
- [ncmhce-D189] q1: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D189] q1: correct answer is the longest option
- [ncmhce-D189] q2: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D189] q2: length ratio 1.34 exceeds 1.25 (122,111,91,105)
- [ncmhce-D189] q2: correct answer is the longest option
- [ncmhce-D189] q3: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D189] q3: length ratio 1.92 exceeds 1.25 (118,167,87,95)
- [ncmhce-D189] q4: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D189] q4: length ratio 2.14 exceeds 1.25 (124,178,83,94)
- [ncmhce-D189] q5: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D189] q6: weights [3,-2,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D189] q7: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D189] q7: correct answer is the longest option
- [ncmhce-D189] q8: weights [3,-1,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D189] q9: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D189] q10: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D189] q11: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D189] q11: correct answer is the longest option
- [ncmhce-D189] q11: opt d: contains absolute language
- [ncmhce-D189] q12: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- ... and 3 more errors

### `ncmhce-D190`  (tools/cases/deep-cases-batch-18.js)
- [ncmhce-D190] q1: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D190] q1: correct answer is the longest option
- [ncmhce-D190] q2: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D190] q3: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D190] q3: correct answer is the longest option
- [ncmhce-D190] q4: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D190] q4: correct answer is the longest option
- [ncmhce-D190] q5: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D190] q6: weights [3,-2,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D190] q6: opt d: contains absolute language
- [ncmhce-D190] q7: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D190] q8: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D190] q9: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D190] q10: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D190] q10: opt d: contains absolute language
- [ncmhce-D190] q11: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D190] q12: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D190] q13: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]

### `ncmhce-D191`  (tools/cases/deep-cases-batch-18.js)
- [ncmhce-D191] q1: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D191] q1: correct answer is the longest option
- [ncmhce-D191] q2: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D191] q2: length ratio 1.26 exceeds 1.25 (112,96,89,106)
- [ncmhce-D191] q2: correct answer is the longest option
- [ncmhce-D191] q3: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D191] q4: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D191] q4: length ratio 1.89 exceeds 1.25 (126,172,91,99)
- [ncmhce-D191] q5: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D191] q6: weights [3,-2,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D191] q7: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D191] q7: correct answer is the longest option
- [ncmhce-D191] q8: weights [3,-1,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D191] q9: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D191] q9: correct answer is the longest option
- [ncmhce-D191] q9: opt c: contains absolute language
- [ncmhce-D191] q10: weights [3,-1,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D191] q11: weights [3,-1,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D191] q12: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D191] q13: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]

### `ncmhce-D192`  (tools/cases/deep-cases-batch-18.js)
- [ncmhce-D192] q1: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D192] q1: length ratio 1.28 exceeds 1.25 (122,95,108,109)
- [ncmhce-D192] q1: correct answer is the longest option
- [ncmhce-D192] q2: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D192] q3: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D192] q3: correct answer is the longest option
- [ncmhce-D192] q4: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D192] q4: length ratio 1.33 exceeds 1.25 (110,94,83,97)
- [ncmhce-D192] q4: correct answer is the longest option
- [ncmhce-D192] q5: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D192] q6: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D192] q6: correct answer is the longest option
- [ncmhce-D192] q7: weights [3,-1,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D192] q7: opt b: contains absolute language
- [ncmhce-D192] q8: weights [3,-1,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D192] q9: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D192] q9: correct answer is the longest option
- [ncmhce-D192] q9: opt c: contains absolute language
- [ncmhce-D192] q10: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D192] q11: weights [3,-1,-1,-1] must be exactly [3,0,-1,-2]
- ... and 2 more errors

### `ncmhce-D193`  (tools/cases/deep-cases-batch-18.js)
- [ncmhce-D193] q1: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D193] q2: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D193] q2: length ratio 1.38 exceeds 1.25 (109,95,79,98)
- [ncmhce-D193] q2: correct answer is the longest option
- [ncmhce-D193] q3: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D193] q3: correct answer is the longest option
- [ncmhce-D193] q4: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D193] q5: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D193] q5: correct answer is the longest option
- [ncmhce-D193] q6: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D193] q7: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D193] q7: opt b: contains absolute language
- [ncmhce-D193] q8: weights [3,-1,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D193] q8: correct answer is the longest option
- [ncmhce-D193] q9: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D193] q9: correct answer is the longest option
- [ncmhce-D193] q10: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D193] q11: weights [3,-1,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D193] q11: correct answer is the longest option
- [ncmhce-D193] q11: opt d: contains absolute language
- ... and 4 more errors

### `ncmhce-D194`  (tools/cases/deep-cases-batch-18.js)
- [ncmhce-D194] q1: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D194] q2: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D194] q2: correct answer is the longest option
- [ncmhce-D194] q3: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D194] q3: length ratio 1.26 exceeds 1.25 (110,95,90,87)
- [ncmhce-D194] q3: correct answer is the longest option
- [ncmhce-D194] q4: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D194] q4: length ratio 1.33 exceeds 1.25 (105,110,83,95)
- [ncmhce-D194] q6: weights [3,-2,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D194] q6: correct answer is the longest option
- [ncmhce-D194] q7: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D194] q8: weights [3,-1,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D194] q9: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D194] q9: length ratio 1.25 exceeds 1.25 (95,119,113,109)
- [ncmhce-D194] q10: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D194] q10: correct answer is the longest option
- [ncmhce-D194] q11: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D194] q12: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D194] q13: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]

### `ncmhce-D195`  (tools/cases/deep-cases-batch-19.js)
- [ncmhce-D195] q1: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D195] q1: correct answer is the longest option
- [ncmhce-D195] q2: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D195] q2: correct answer is the longest option
- [ncmhce-D195] q3: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D195] q3: length ratio 1.42 exceeds 1.25 (118,110,83,95)
- [ncmhce-D195] q3: correct answer is the longest option
- [ncmhce-D195] q4: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D195] q4: correct answer is the longest option
- [ncmhce-D195] q5: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D195] q6: weights [3,-2,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D195] q6: opt d: contains absolute language
- [ncmhce-D195] q7: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D195] q8: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D195] q9: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D195] q10: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D195] q10: correct answer is the longest option
- [ncmhce-D195] q11: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D195] q12: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D195] q13: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]

### `ncmhce-D196`  (tools/cases/deep-cases-batch-19.js)
- [ncmhce-D196] q1: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D196] q2: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D196] q2: length ratio 1.29 exceeds 1.25 (103,91,80,102)
- [ncmhce-D196] q2: correct answer is the longest option
- [ncmhce-D196] q3: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D196] q3: length ratio 1.47 exceeds 1.25 (116,126,86,87)
- [ncmhce-D196] q4: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D196] q4: correct answer is the longest option
- [ncmhce-D196] q5: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D196] q6: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D196] q7: weights [3,-1,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D196] q8: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D196] q8: opt c: contains absolute language
- [ncmhce-D196] q9: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D196] q10: weights [3,-2,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D196] q11: weights [3,-1,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D196] q11: opt b: contains absolute language
- [ncmhce-D196] q12: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D196] q12: opt b: contains absolute language
- [ncmhce-D196] q13: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]

### `ncmhce-D197`  (tools/cases/deep-cases-batch-19.js)
- [ncmhce-D197] q1: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D197] q1: correct answer is the longest option
- [ncmhce-D197] q2: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D197] q2: length ratio 1.68 exceeds 1.25 (121,128,76,93)
- [ncmhce-D197] q3: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D197] q3: correct answer is the longest option
- [ncmhce-D197] q4: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D197] q4: length ratio 1.33 exceeds 1.25 (114,90,86,105)
- [ncmhce-D197] q4: correct answer is the longest option
- [ncmhce-D197] q5: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D197] q6: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D197] q7: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D197] q8: weights [3,-1,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D197] q9: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D197] q10: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D197] q11: weights [3,-1,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D197] q12: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D197] q13: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]

### `ncmhce-D198`  (tools/cases/deep-cases-batch-19.js)
- [ncmhce-D198] q1: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D198] q1: length ratio 1.26 exceeds 1.25 (117,93,97,108)
- [ncmhce-D198] q1: correct answer is the longest option
- [ncmhce-D198] q2: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D198] q2: length ratio 1.68 exceeds 1.25 (117,123,73,89)
- [ncmhce-D198] q3: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D198] q3: length ratio 1.39 exceeds 1.25 (110,93,79,94)
- [ncmhce-D198] q3: correct answer is the longest option
- [ncmhce-D198] q4: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D198] q4: length ratio 1.41 exceeds 1.25 (106,85,75,96)
- [ncmhce-D198] q4: correct answer is the longest option
- [ncmhce-D198] q5: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D198] q6: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D198] q6: opt b: contains absolute language
- [ncmhce-D198] q7: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D198] q7: opt b: contains absolute language
- [ncmhce-D198] q8: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D198] q9: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D198] q10: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D198] q10: correct answer is the longest option
- ... and 5 more errors

### `ncmhce-D199`  (tools/cases/deep-cases-batch-20.js)
- [ncmhce-D199] q1: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D199] q1: correct answer is the longest option
- [ncmhce-D199] q2: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D199] q2: correct answer is the longest option
- [ncmhce-D199] q3: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D199] q4: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D199] q5: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D199] q6: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D199] q7: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D199] q8: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D199] q8: correct answer is the longest option
- [ncmhce-D199] q9: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D199] q9: correct answer is the longest option
- [ncmhce-D199] q10: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D199] q11: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D199] q11: opt c: contains absolute language
- [ncmhce-D199] q12: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D199] q13: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D199] q13: correct answer is the longest option
- [ncmhce-D199] q13: opt d: contains absolute language

### `ncmhce-D200`  (tools/cases/deep-cases-batch-20.js)
- [ncmhce-D200] q1: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D200] q1: length ratio 1.82 exceeds 1.25 (149,84,153,113)
- [ncmhce-D200] q2: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D200] q2: length ratio 1.26 exceeds 1.25 (121,107,96,102)
- [ncmhce-D200] q2: correct answer is the longest option
- [ncmhce-D200] q3: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D200] q4: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D200] q4: length ratio 1.33 exceeds 1.25 (112,95,94,84)
- [ncmhce-D200] q4: correct answer is the longest option
- [ncmhce-D200] q5: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D200] q5: correct answer is the longest option
- [ncmhce-D200] q6: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D200] q6: length ratio 1.28 exceeds 1.25 (127,111,99,111)
- [ncmhce-D200] q6: correct answer is the longest option
- [ncmhce-D200] q7: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D200] q7: correct answer is the longest option
- [ncmhce-D200] q8: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D200] q9: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D200] q10: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D200] q10: correct answer is the longest option
- ... and 6 more errors

### `ncmhce-D201`  (tools/cases/deep-cases-batch-20.js)
- [ncmhce-D201] q1: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D201] q1: correct answer is the longest option
- [ncmhce-D201] q2: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D201] q3: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D201] q4: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D201] q4: opt b: contains absolute language
- [ncmhce-D201] q5: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D201] q5: correct answer is the longest option
- [ncmhce-D201] q6: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D201] q6: correct answer is the longest option
- [ncmhce-D201] q7: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D201] q8: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D201] q8: correct answer is the longest option
- [ncmhce-D201] q9: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D201] q10: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D201] q11: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D201] q12: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D201] q12: correct answer is the longest option
- [ncmhce-D201] q13: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D201] q13: opt b: contains absolute language

### `ncmhce-D202`  (tools/cases/deep-cases-batch-20.js)
- [ncmhce-D202] q1: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D202] q2: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D202] q2: correct answer is the longest option
- [ncmhce-D202] q3: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D202] q4: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D202] q5: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D202] q5: correct answer is the longest option
- [ncmhce-D202] q6: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D202] q7: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D202] q7: correct answer is the longest option
- [ncmhce-D202] q8: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D202] q9: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D202] q10: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D202] q10: correct answer is the longest option
- [ncmhce-D202] q11: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D202] q11: length ratio 1.64 exceeds 1.25 (143,109,179,111)
- [ncmhce-D202] q12: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D202] q13: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D202] q13: correct answer is the longest option

### `ncmhce-D203`  (tools/cases/deep-cases-batch-20.js)
- [ncmhce-D203] q1: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D203] q2: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D203] q3: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D203] q4: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D203] q5: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D203] q5: correct answer is the longest option
- [ncmhce-D203] q6: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D203] q7: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D203] q7: opt d: contains absolute language
- [ncmhce-D203] q8: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D203] q8: correct answer is the longest option
- [ncmhce-D203] q9: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D203] q10: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D203] q11: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D203] q11: correct answer is the longest option
- [ncmhce-D203] q12: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D203] q12: correct answer is the longest option
- [ncmhce-D203] q13: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]

### `ncmhce-D204`  (tools/cases/deep-cases-batch-20.js)
- [ncmhce-D204] q1: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D204] q1: correct answer is the longest option
- [ncmhce-D204] q2: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D204] q2: correct answer is the longest option
- [ncmhce-D204] q3: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D204] q4: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D204] q4: correct answer is the longest option
- [ncmhce-D204] q5: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D204] q5: correct answer is the longest option
- [ncmhce-D204] q6: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D204] q6: correct answer is the longest option
- [ncmhce-D204] q7: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D204] q7: correct answer is the longest option
- [ncmhce-D204] q8: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D204] q9: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D204] q10: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D204] q10: correct answer is the longest option
- [ncmhce-D204] q11: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D204] q12: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D204] q12: opt b: contains absolute language
- ... and 2 more errors

### `ncmhce-D205`  (tools/cases/deep-cases-batch-20.js)
- [ncmhce-D205] q1: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D205] q2: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D205] q3: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D205] q4: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D205] q5: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D205] q6: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D205] q7: weights [3,-1,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D205] q8: weights [3,-1,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D205] q10: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D205] q11: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D205] q12: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D205] q12: opt c: contains absolute language
- [ncmhce-D205] q13: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D205] q13: opt c: contains absolute language

### `ncmhce-D206`  (tools/cases/deep-cases-batch-20.js)
- [ncmhce-D206] q1: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D206] q3: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D206] q4: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D206] q5: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D206] q6: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D206] q6: correct answer is the longest option
- [ncmhce-D206] q7: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D206] q8: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D206] q9: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D206] q10: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D206] q10: correct answer is the longest option
- [ncmhce-D206] q11: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D206] q12: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D206] q13: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D206] q13: correct answer is the longest option
- [ncmhce-D206] q13: opt c: contains absolute language

### `ncmhce-D207`  (tools/cases/deep-cases-batch-20.js)
- [ncmhce-D207] q1: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D207] q1: correct answer is the longest option
- [ncmhce-D207] q2: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D207] q3: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D207] q4: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D207] q4: correct answer is the longest option
- [ncmhce-D207] q5: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D207] q5: correct answer is the longest option
- [ncmhce-D207] q6: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D207] q7: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D207] q7: opt b: contains absolute language
- [ncmhce-D207] q8: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D207] q8: correct answer is the longest option
- [ncmhce-D207] q9: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D207] q10: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D207] q11: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D207] q12: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D207] q12: correct answer is the longest option
- [ncmhce-D207] q13: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]

### `ncmhce-D208`  (tools/cases/deep-cases-batch-20.js)
- [ncmhce-D208] q1: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D208] q1: length ratio 1.27 exceeds 1.25 (121,132,108,104)
- [ncmhce-D208] q2: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D208] q3: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D208] q3: opt b: contains absolute language
- [ncmhce-D208] q4: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D208] q4: length ratio 1.33 exceeds 1.25 (121,107,114,142)
- [ncmhce-D208] q5: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D208] q5: opt b: contains absolute language
- [ncmhce-D208] q6: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D208] q6: opt c: contains absolute language
- [ncmhce-D208] q7: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D208] q8: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D208] q9: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D208] q10: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D208] q11: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D208] q12: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D208] q13: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D208] q13: length ratio 1.29 exceeds 1.25 (124,134,108,104)
- [ncmhce-D208] q13: opt b: contains absolute language

### `ncmhce-D209`  (tools/cases/deep-cases-batch-20.js)
- [ncmhce-D209] q1: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D209] q1: length ratio 1.32 exceeds 1.25 (146,158,120,132)
- [ncmhce-D209] q1: opt b: contains absolute language
- [ncmhce-D209] q2: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D209] q2: length ratio 1.28 exceeds 1.25 (165,152,129,135)
- [ncmhce-D209] q2: correct answer is the longest option
- [ncmhce-D209] q2: opt b: contains absolute language
- [ncmhce-D209] q3: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D209] q4: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D209] q4: length ratio 1.29 exceeds 1.25 (156,130,131,121)
- [ncmhce-D209] q4: correct answer is the longest option
- [ncmhce-D209] q5: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D209] q6: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D209] q6: correct answer is the longest option
- [ncmhce-D209] q7: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D209] q7: correct answer is the longest option
- [ncmhce-D209] q8: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D209] q8: length ratio 1.27 exceeds 1.25 (142,121,117,112)
- [ncmhce-D209] q8: correct answer is the longest option
- [ncmhce-D209] q9: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- ... and 9 more errors

### `ncmhce-D210`  (tools/cases/deep-cases-batch-20.js)
- [ncmhce-D210] q1: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D210] q2: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D210] q2: length ratio 1.26 exceeds 1.25 (135,119,128,107)
- [ncmhce-D210] q2: correct answer is the longest option
- [ncmhce-D210] q3: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D210] q3: length ratio 1.25 exceeds 1.25 (164,132,131,133)
- [ncmhce-D210] q3: correct answer is the longest option
- [ncmhce-D210] q3: opt c: contains absolute language
- [ncmhce-D210] q4: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D210] q5: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D210] q6: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D210] q6: correct answer is the longest option
- [ncmhce-D210] q7: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D210] q7: correct answer is the longest option
- [ncmhce-D210] q7: opt c: contains absolute language
- [ncmhce-D210] q8: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D210] q8: correct answer is the longest option
- [ncmhce-D210] q9: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D210] q9: length ratio 1.29 exceeds 1.25 (151,129,117,134)
- [ncmhce-D210] q9: correct answer is the longest option
- ... and 12 more errors

### `ncmhce-D211`  (tools/cases/deep-cases-batch-20.js)
- [ncmhce-D211] q1: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D211] q1: length ratio 2.27 exceeds 1.25 (173,108,132,245)
- [ncmhce-D211] q2: weights [3,-1,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D211] q2: correct answer is the longest option
- [ncmhce-D211] q3: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D211] q3: correct answer is the longest option
- [ncmhce-D211] q3: opt b: contains absolute language
- [ncmhce-D211] q4: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D211] q5: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D211] q5: length ratio 1.26 exceeds 1.25 (139,110,114,115)
- [ncmhce-D211] q5: correct answer is the longest option
- [ncmhce-D211] q6: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D211] q6: correct answer is the longest option
- [ncmhce-D211] q7: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D211] q7: correct answer is the longest option
- [ncmhce-D211] q8: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D211] q8: length ratio 1.29 exceeds 1.25 (133,122,103,106)
- [ncmhce-D211] q8: correct answer is the longest option
- [ncmhce-D211] q9: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D211] q10: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- ... and 10 more errors

### `ncmhce-D212`  (tools/cases/deep-cases-batch-20.js)
- [ncmhce-D212] q1: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D212] q1: length ratio 1.60 exceeds 1.25 (154,184,117,115)
- [ncmhce-D212] q2: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D212] q2: length ratio 1.57 exceeds 1.25 (139,98,107,154)
- [ncmhce-D212] q3: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D212] q3: correct answer is the longest option
- [ncmhce-D212] q4: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D212] q4: correct answer is the longest option
- [ncmhce-D212] q5: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D212] q5: length ratio 1.46 exceeds 1.25 (139,104,152,107)
- [ncmhce-D212] q6: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D212] q6: length ratio 1.52 exceeds 1.25 (147,163,118,107)
- [ncmhce-D212] q7: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D212] q7: correct answer is the longest option
- [ncmhce-D212] q8: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D212] q8: correct answer is the longest option
- [ncmhce-D212] q8: opt d: contains absolute language
- [ncmhce-D212] q9: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D212] q9: length ratio 1.51 exceeds 1.25 (142,168,113,111)
- [ncmhce-D212] q10: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- ... and 9 more errors

### `ncmhce-D213`  (tools/cases/deep-cases-batch-20.js)
- [ncmhce-D213] q2: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D213] q2: length ratio 1.33 exceeds 1.25 (132,108,99,111)
- [ncmhce-D213] q2: correct answer is the longest option
- [ncmhce-D213] q3: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D213] q3: length ratio 1.28 exceeds 1.25 (133,104,113,115)
- [ncmhce-D213] q3: correct answer is the longest option
- [ncmhce-D213] q4: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D213] q4: correct answer is the longest option
- [ncmhce-D213] q5: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D213] q5: length ratio 1.54 exceeds 1.25 (136,107,102,157)
- [ncmhce-D213] q6: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D213] q6: length ratio 1.36 exceeds 1.25 (131,104,141,104)
- [ncmhce-D213] q7: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D213] q7: length ratio 1.33 exceeds 1.25 (144,108,124,117)
- [ncmhce-D213] q7: correct answer is the longest option
- [ncmhce-D213] q8: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D213] q8: length ratio 1.28 exceeds 1.25 (133,121,104,108)
- [ncmhce-D213] q8: correct answer is the longest option
- [ncmhce-D213] q9: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D213] q9: length ratio 1.35 exceeds 1.25 (138,102,109,137)
- ... and 8 more errors

### `ncmhce-D214`  (tools/cases/deep-cases-batch-20.js)
- [ncmhce-D214] q1: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D214] q1: correct answer is the longest option
- [ncmhce-D214] q2: weights [3,-1,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D214] q2: length ratio 1.40 exceeds 1.25 (79,105,75,85)
- [ncmhce-D214] q3: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D214] q3: length ratio 1.30 exceeds 1.25 (86,95,73,91)
- [ncmhce-D214] q4: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D214] q4: correct answer is the longest option
- [ncmhce-D214] q5: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D214] q5: length ratio 1.31 exceeds 1.25 (117,109,103,89)
- [ncmhce-D214] q5: correct answer is the longest option
- [ncmhce-D214] q6: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D214] q7: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D214] q7: correct answer is the longest option
- [ncmhce-D214] q8: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D214] q8: correct answer is the longest option
- [ncmhce-D214] q9: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D214] q9: length ratio 1.90 exceeds 1.25 (119,91,80,152)
- [ncmhce-D214] q10: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D214] q10: length ratio 1.76 exceeds 1.25 (120,148,84,95)
- ... and 6 more errors

### `ncmhce-D207`  (tools/cases/deep-cases-batch-22.js)
- [ncmhce-D207] q1: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D207] q1: length ratio 2.44 exceeds 1.25 (126,215,88,97)
- [ncmhce-D207] q2: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D207] q2: length ratio 3.53 exceeds 1.25 (111,205,58,76)
- [ncmhce-D207] q3: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D207] q3: length ratio 3.82 exceeds 1.25 (110,229,60,66)
- [ncmhce-D207] q4: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D207] q4: length ratio 3.04 exceeds 1.25 (118,204,71,67)
- [ncmhce-D207] q5: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D207] q5: length ratio 2.62 exceeds 1.25 (108,207,79,89)
- [ncmhce-D207] q6: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D207] q6: length ratio 2.87 exceeds 1.25 (125,218,93,76)
- [ncmhce-D207] q7: weights [3,-1,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D207] q7: length ratio 3.08 exceeds 1.25 (100,234,98,76)
- [ncmhce-D207] q8: weights [3,-1,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D207] q8: length ratio 3.87 exceeds 1.25 (102,259,71,67)
- [ncmhce-D207] q9: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D207] q9: length ratio 3.46 exceeds 1.25 (110,270,83,78)
- [ncmhce-D207] q10: weights [3,-1,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D207] q10: length ratio 3.88 exceeds 1.25 (107,252,66,65)
- ... and 7 more errors

### `ncmhce-D208`  (tools/cases/deep-cases-batch-22.js)
- [ncmhce-D208] q1: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D208] q1: length ratio 2.30 exceeds 1.25 (109,209,91,98)
- [ncmhce-D208] q2: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D208] q2: length ratio 3.23 exceeds 1.25 (113,207,64,64)
- [ncmhce-D208] q3: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D208] q3: length ratio 2.87 exceeds 1.25 (119,181,63,66)
- [ncmhce-D208] q4: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D208] q4: length ratio 2.97 exceeds 1.25 (130,208,76,70)
- [ncmhce-D208] q5: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D208] q5: length ratio 2.58 exceeds 1.25 (87,199,77,88)
- [ncmhce-D208] q6: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D208] q6: length ratio 3.01 exceeds 1.25 (116,229,93,76)
- [ncmhce-D208] q7: weights [3,-1,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D208] q7: length ratio 3.23 exceeds 1.25 (106,258,87,80)
- [ncmhce-D208] q8: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D208] q8: length ratio 4.92 exceeds 1.25 (99,246,74,50)
- [ncmhce-D208] q9: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D208] q9: length ratio 4.11 exceeds 1.25 (111,271,66,85)
- [ncmhce-D208] q9: opt b: contains absolute language
- [ncmhce-D208] q10: weights [3,-1,-1,-1] must be exactly [3,0,-1,-2]
- ... and 8 more errors

### `ncmhce-D209`  (tools/cases/deep-cases-batch-22.js)
- [ncmhce-D209] q1: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D209] q1: length ratio 2.42 exceeds 1.25 (123,218,90,97)
- [ncmhce-D209] q2: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D209] q2: length ratio 3.54 exceeds 1.25 (120,216,61,65)
- [ncmhce-D209] q3: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D209] q3: length ratio 3.32 exceeds 1.25 (145,226,68,68)
- [ncmhce-D209] q4: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D209] q4: length ratio 3.63 exceeds 1.25 (139,218,60,66)
- [ncmhce-D209] q5: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D209] q5: length ratio 2.59 exceeds 1.25 (96,223,86,94)
- [ncmhce-D209] q6: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D209] q6: length ratio 3.12 exceeds 1.25 (100,243,79,78)
- [ncmhce-D209] q7: weights [3,-1,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D209] q7: length ratio 2.80 exceeds 1.25 (115,232,100,83)
- [ncmhce-D209] q8: weights [3,-1,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D209] q8: length ratio 3.65 exceeds 1.25 (103,263,72,80)
- [ncmhce-D209] q9: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D209] q9: length ratio 3.65 exceeds 1.25 (110,285,83,78)
- [ncmhce-D209] q10: weights [3,-1,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D209] q10: length ratio 4.63 exceeds 1.25 (101,296,64,68)
- ... and 8 more errors

### `ncmhce-D210`  (tools/cases/deep-cases-batch-22.js)
- [ncmhce-D210] q1: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D210] q1: length ratio 2.46 exceeds 1.25 (116,214,87,98)
- [ncmhce-D210] q2: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D210] q2: length ratio 4.38 exceeds 1.25 (102,232,66,53)
- [ncmhce-D210] q3: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D210] q3: length ratio 3.56 exceeds 1.25 (114,217,64,61)
- [ncmhce-D210] q4: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D210] q4: length ratio 3.32 exceeds 1.25 (98,219,66,69)
- [ncmhce-D210] q5: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D210] q5: length ratio 2.27 exceeds 1.25 (99,202,89,98)
- [ncmhce-D210] q6: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D210] q6: length ratio 3.60 exceeds 1.25 (103,252,79,70)
- [ncmhce-D210] q7: weights [3,-1,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D210] q7: length ratio 3.47 exceeds 1.25 (103,274,107,79)
- [ncmhce-D210] q8: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D210] q8: length ratio 3.88 exceeds 1.25 (125,283,73,85)
- [ncmhce-D210] q9: weights [3,-1,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D210] q9: length ratio 3.79 exceeds 1.25 (95,254,71,67)
- [ncmhce-D210] q10: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D210] q10: length ratio 4.05 exceeds 1.25 (103,263,95,65)
- ... and 8 more errors

### `ncmhce-D101`  (tools/cases/exemplar-deep-mdd.js)
- [ncmhce-D101] q1: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D101] q1: correct answer is the longest option
- [ncmhce-D101] q2: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D101] q2: correct answer is the longest option
- [ncmhce-D101] q3: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D101] q3: correct answer is the longest option
- [ncmhce-D101] q4: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D101] q4: correct answer is the longest option
- [ncmhce-D101] q5: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D101] q5: correct answer is the longest option
- [ncmhce-D101] q6: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D101] q7: weights [3,-1,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D101] q8: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D101] q8: correct answer is the longest option
- [ncmhce-D101] q9: weights [3,-1,-2,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D101] q9: correct answer is the longest option
- [ncmhce-D101] q10: weights [3,-1,-1,-2] must be exactly [3,0,-1,-2]
- [ncmhce-D101] q10: correct answer is the longest option
- [ncmhce-D101] q11: weights [3,0,-1,-1] must be exactly [3,0,-1,-2]
- [ncmhce-D101] q11: correct answer is the longest option
- ... and 6 more errors
