# NCMHCE Deep-Case Generation Spec (2022+ format)

Authoring contract for `deep-cases-batch-NN.js`. A "deep case" is a 2022+
NCMHCE clinical simulation: **the diagnosis is given**; the items test clinical
decision-making across three ordered sections. Every batch must pass BOTH the
schema validator (`caseSchema.js` via `validateCases.js`) and the depth gate
(`examDepth.js`) with **zero errors and zero warnings**.

## Case object (superset of `caseSchema.js`)
```
{
  id, title, category, difficulty,            // category ∈ blueprint; difficulty easy|medium|hard
  primaryDiagnosis: { name, code },           // identical to `diagnosis`
  diagnosis:        { name, code },           // the GIVEN dx (ICD-10-shaped code)
  differentialOptions: [ {id,name,isCorrect} ], // 3–4; exactly one correct, name matches diagnosis
  narrative: { intake, session1, session2 },  // each ≥ 40 chars
  diagnosticRationale,                         // ≥ 40 chars
  references: [ {id, source, detail} ],        // source ∈ references.js ALLOWED_SOURCES; detail ≥ 6 chars
  questions: [ Question x13 ]                  // 11 floor, 13 target
}
```

## Sections (derived, never stored)
Section comes from each item's `domain` (`caseSchema.SECTIONS`):

| Section | domains | min | target |
|---|---|---|---|
| Assessment & Conceptualization | `intake`, `core` | 3 | 5 |
| Treatment Planning | `treatment` | 2 | 4 |
| Counseling & Ethics | `counseling`, `ethics` | 3 | 4 |

Order items **Assessment → Planning → Process** (non-decreasing section index).
Do NOT add a `section` field.

## Question / option rules
- Exactly **4 options**, exactly **one** `isCorrect:true` with `weight:3`.
- Distractor weights from `{0, -1, -2}` — the bigger the clinical error, the more
  negative. No distractor may carry weight 3.
- Each option carries `rationale` (one-liner) **and**
  `explanation:{approach, rationale, keyIndicators:[…], commonMistake}`.
- Each question carries `evidenceRef:[…]` citing the case's own `references[].id`.

## The trap — option-length cues
The depth gate **fails** any item where the keyed answer is the longest or much
longer (≥1.25× the mean, or >1.6× the mean) than the distractors. Keep all four
options in a similar character band and make at least one distractor as long as
the key. Distractors are plausible clinical errors a real candidate weighs — not
throwaways.

## Clinical bar
- Ground every keyed answer in a cited reference (a DSM-5-TR criterion, a
  practice guideline, an ethics standard, a validated tool).
- Stay in counselor scope: refer/coordinate, don't prescribe; assess and
  safety-plan, don't use no-suicide contracts.
- Person-first, demographically diverse, realistic presentations.

## Difficulty

`difficulty` is not about how rare the diagnosis is — it's about how much the
case HIDES. Assign (and write to) the difficulty a slot actually calls for:

- **easy** — one clear presentation, textbook differential, no comorbidity, no
  medical rule-out, no treatment-sequencing trap, unambiguous safety picture.
  Roughly 1 in 4 cases in the bank should be this.
- **medium** — one or two complications: a comorbidity that changes the plan,
  a differential needing a specific discriminator, or a sequencing decision.
- **hard** — the case buries its decisive facts (a medical cause presented as
  psychiatric, a safety disclosure inside a reassurance, a treatment that's
  right for the diagnosis but wrong for this client right now), often two or
  more of these interacting.

Do not escalate an easy case by adding a twist to make it "interesting" — an
easy case made interesting is no longer easy, and the bank needs easy cases.
`generate-deep.js` bakes this definition into its prompt and pulls each
slot's difficulty from `blueprint.js`'s per-category mix rather than a fixed
default; `examDepth.js`'s `validateDifficultyMix(cases, CATEGORIES)` warns
(does not fail) when a category's actual mix drifts from the blueprint's
intent by more than 1 case in any band — check it after a batch that's meant
to fill a difficulty gap.

## Workflow
1. Load corpus, call `blueprint.nextTargets` / `blueprint.gaps`; fill largest gaps first.
2. Assign a contiguous, collision-free `D###` id range (D101–D104 reserved).
3. Write `deep-cases-batch-NN.js` exporting `module.exports = { CASES: [ … ] }`.
4. Validate — both must be clean:
   ```
   node tools/cases/validateCases.js tools/cases/deep-cases-batch-NN.js
   node -e "const{validateExamDepthSet}=require('./tools/cases/examDepth');const{CASES}=require('./tools/cases/deep-cases-batch-NN');const r=validateExamDepthSet(CASES);console.log(r.ok?'DEPTH PASS':'DEPTH FAIL');r.errors.forEach(e=>console.log(e));r.warnings.forEach(w=>console.log(w))"
   ```
5. Fix every error and warning; re-validate. Never drop below 11 items or the
   per-section minimums to make validation pass.

Importing into the live DB is a separate, human-run step — the runner never
touches the database.
