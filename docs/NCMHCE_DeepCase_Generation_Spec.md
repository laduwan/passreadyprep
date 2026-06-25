# NCMHCE Deep-Case Generation Spec (Phase 2)
## Produce 2022+ exam-grade cases: 13 items across 3 sections

This is the authoring contract for growing the case bank from the legacy ~5-item
shape to the real exam's ~13-item, three-section shape. Every case produced must
pass **both** validators with zero errors:

```
node tools/cases/validateCases.js <yourfile>.js          # base schema + blueprint + dedup
node -e "const{validateExamDepthSet}=require('./tools/cases/examDepth');const m=require('./<yourfile>');console.log(validateExamDepthSet(m.CASES||m.GENERATED_CASES))"
```

The canonical worked example is **`tools/cases/exemplar-deep-mdd.js`** (id
`ncmhce-D101`). Match its structure exactly; only the clinical content changes.

---

## Sections (derived from each item's `domain`)

A case unfolds across three sections. You do not add a `section` field — the
section is determined by the question's `domain`:

| Section | Title | Domains | Min items |
|--------:|-------|---------|----------:|
| 1 | Assessment & Conceptualization | `intake`, `core` | 3 |
| 2 | Treatment Planning | `treatment` | 2 |
| 3 | Counseling & Ethics | `counseling`, `ethics` | 3 |

**Target: 13 items total**, distributed roughly **5 / 4 / 4** (assessment /
planning / process). Floor is 11. Author items in a clinically logical order;
the player re-orders them into section sequence automatically.

---

## Hard requirements (the depth gate + schema enforce these)

- **13 questions** (11 minimum), meeting the per-section minimums above.
- Each question: exactly **4 options**, **exactly one correct** (`isCorrect:true`,
  `weight:3`). Distractors use `weight` of `0`, `-1`, or `-2` (more wrong = more
  negative). No incorrect option may have `weight:3`.
- Each option carries `rationale` (one line) **and** `explanation`
  `{ approach, rationale, keyIndicators:[…], commonMistake }`.
- Each question has `evidenceRef:[…]` citing one or more of the case's
  `references[].id`.
- `narrative.{intake,session1,session2}` each ≥ 40 chars; `diagnosticRationale`
  ≥ 40 chars; `differentialOptions` 3–4 with exactly one correct that matches the
  given diagnosis.
- `references[]` use only **approved source keys** (see
  `tools/cases/references.js` → `ALLOWED_SOURCES`): DSM-5-TR, ICD-10-CM,
  ACA Code of Ethics, APA CPG, VA/DoD CPG, NICE guidelines, SAMHSA TIP 35/45/63,
  ASAM Criteria, C-SSRS, Stanley-Brown SPI, Miller & Rollnick (MI),
  Transtheoretical Model, Barlow PCT, IPSRT, NBCC Content Outline, and others.

---

## The one trap that fails batches: option-length cues

The strict validator **fails** any item where the keyed answer is detectably the
longest / most elaborated option while distractors are thin. This is the single
most common quality failure (it sank seed cases G031–G034).

- Keep all four options within a similar character range.
- Do **not** pack the correct option with extra qualifiers ("…and collaboratively
  develop a plan while also considering…") that distractors lack.
- A test-wise candidate must not be able to pick the answer by length alone.

Write distractors that are **plausible and specific** — common clinical errors a
real candidate would consider — not obviously wrong throwaways.

---

## Clinical bar

- Diagnosis is **given** (2022+ format); items test clinical decision-making, not
  "what's the diagnosis."
- Ground every keyed answer in the cited reference (DSM-5-TR criteria, a practice
  guideline, an ethics standard, a validated tool).
- Diverse, realistic demographics; person-first language.
- Stay inside counselor scope (refer/coordinate, don't prescribe; assess and
  safety-plan, don't contract-for-safety).
- Use a category from the blueprint (`tools/cases/blueprint.js`) and a fresh,
  collision-free `id` (legacy uses `ncmhce-G###`; deep exemplar uses `ncmhce-D###`).

---

## Output

Export a JS module: `module.exports = { CASES: [ … ] };` (or `GENERATED_CASES`),
one or more cases per file, then run both validators above and fix until zero
errors and zero warnings before import.
