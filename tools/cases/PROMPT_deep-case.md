# Deep-case generation prompt — psychometric specification

One call produces ONE case of 13 items. A 250-case run is 3,250 items.

Substitute at call time: `{{CATEGORY}}`, `{{DIAGNOSIS}}`, `{{ICD}}`, `{{DIFFICULTY}}`,
`{{ALLOWED_SOURCES}}` (the 22 names from `references.js`), `{{EXEMPLAR_JSON}}`.

Every numeric threshold below is enforced in code by `qualityGate.js` and
`examDepth.js`. A case that violates one is rejected and the attempt is billed
for nothing, so the thresholds are stated as arithmetic the model can execute,
not as prose it can approximate.

---

You are an expert psychometrician and NCMHCE item writer. Write one gold-standard
deep NCMHCE case simulation.

## CASE PARAMETERS

- Category: "{{CATEGORY}}"
- Primary diagnosis: "{{DIAGNOSIS}}" ({{ICD}})
- Difficulty: {{DIFFICULTY}}
- The diagnosis is GIVEN to the candidate. Items test what a competent clinician
  does next — they do not test naming the disorder.
- The client must be demographically specific (name, age, race/ethnicity,
  occupation) and the presentation distinct from textbook exemplars.

## 1. SCORING MODEL — polytomous, partial credit

Every item has exactly 4 options carrying weights **{3, 0, -1, -2}, one of each**.
The weights are a clinical-harm gradient, not a ranking of elegance:

| Weight | Meaning | The candidate who picks it |
|---|---|---|
| 3 | Correct: evidence-based, ethically sound, clinically optimal | Competent |
| 0 | Near-miss: defensible but suboptimal timing, sequencing, or priority | Knows the diagnosis, not the standard of care |
| -1 | Common novice error: a wrong framework applied competently | Unprepared but not dangerous |
| -2 | Harmful: scope violation, abandonment, safety miss, criterion reversal | Missed something that endangers a client |

Calibration target: a competent candidate selects 3; one who knows the diagnosis
but not the standard lands on 0; an unprepared one lands on -1; an unsafe one
lands on -2. If any distractor is one no real clinician would consider, the item
is not discriminating — rewrite it.

## 2. OPTION LENGTH — the hard gate, stated as arithmetic

Three separate checks run on every item. All are fatal.

- `max_length / min_length <= 1.25` across the 4 options
- the keyed option must NOT be the single longest whenever its length exceeds
  1.10 x the shortest option
- key length must stay under 1.25 x the mean distractor length, and never
  exceed 1.60 x that mean

**Do not estimate this. Execute this procedure for every item:**

1. Choose a target length **T** between 95 and 125 characters for this item's options.
2. Write all four option texts inside the band **[T-8, T+8]**.
   At T=110 the band is 102-118 and the ratio is 1.16 — inside 1.25 with margin.
3. Rank the four by character count. **Exactly one distractor must be the single
   longest, and it must exceed the keyed option by at least 4 characters.**
   The key sits second or third longest — never first, never alone at the bottom.
4. Count the characters literally, including spaces and punctuation, before
   emitting the item. Recount after any edit.

This single rule is the most common cause of rejected cases. A correct,
well-reasoned key that is the longest option fails the case.

## 3. STRUCTURAL PARITY

All four options in an item must match on:

- **Grammar** — all complete sentences, or all phrases. Same opening structure.
- **Register** — same level of clinical jargon and specificity.
- **Category** — if the key is an action, all four are actions. If the key is a
  diagnosis, all four are diagnoses. If a rationale, all four are rationales.
- **No absolutes** — the words "always", "never", "absolutely", "categorically",
  "universally" may not appear in any option text.

## 4. DISTRACTOR DESIGN

Each distractor targets one named cognitive error, and its `commonMistake` field
states that error explicitly — the specific flawed inference, not a restatement
of why the key is right.

- Weight 0 → right framework, wrong timing, sequencing, or priority
- Weight -1 → a coherent but wrong framework (e.g. an anxiety protocol applied
  to a primary cognitive disorder)
- Weight -2 → dangerous: exceeds scope, abandons the client, ignores a
  documented safety event, or reverses a diagnostic criterion

Write `commonMistake` so a candidate reading it recognises their own reasoning.
"Overlooking that course pattern matters" is too generic. "Substituting a general
risk factor for the course and imaging evidence that decides the differential"
names the error.

## 5. EVIDENCE DISCIPLINE — do not telegraph

The datum that resolves a differential item must not be handed to the candidate
in the narrative before the item that tests it.

If item 4 asks the candidate to distinguish Alzheimer's from vascular dementia on
course and imaging, the intake narrative must NOT already state "MRI showed
diffuse atrophy without infarcts". Either withhold that finding until the item
supplies it, or write the item so the candidate must apply the finding rather
than recall a sentence they read three paragraphs earlier.

A differential item whose answer was printed in the narrative tests reading, not
clinical reasoning.

## 6. DIFFICULTY — how much the case hides

Difficulty is not diagnosis rarity. It is how much work the candidate does to see
through the presentation.

- **easy** — one clear confound, ruled out by a single clean fact
- **medium** — two competing explanations; one specific datum resolves it
- **hard** — comorbidity plus a medication, medical, or substance confound; at
  least one distractor a competent clinician would genuinely defend; the
  resolving datum requires combining two parts of the narrative

## 7. OUTPUT SHAPE

Return ONE JSON object, no markdown, no prose, shaped exactly like the EXAMPLE.

Keys: `id`, `title`, `category`, `difficulty`, `primaryDiagnosis{name,code}`,
`diagnosis{name,code}`, `differentialOptions[{id,name,isCorrect}]`,
`narrative{intake,session1,session2}`, `diagnosticRationale`, `questions[]`,
`references[]`.

Hard requirements:

- **Exactly 13 questions.** Their `domain` values, in order q1..q13, MUST be:
  `intake, intake, intake, core, core, treatment, treatment, counseling,
  counseling, counseling, counseling, ethics, ethics`
- Each question: 4 options with weights exactly {3, 0, -1, -2}, one of each.
- Every option carries: `id`, `text`, `isCorrect` (true only for weight 3),
  `weight`, `rationale` (short label), and
  `explanation{approach (8+ chars), rationale (one full sentence),
  keyIndicators[], commonMistake (20+ chars)}`.
- Each question carries `evidenceRef:["R1",...]` — non-empty, citing only ids
  defined in this case's own `references[]`.
- `references[].source` uses ONLY these names: {{ALLOWED_SOURCES}}
- `differentialOptions` has exactly one `isCorrect: true`, and its `name` matches
  the given primary diagnosis exactly.
- `narrative.intake`, `session1`, `session2` are three escalating clinical
  sections. Session 2 must introduce material the earlier sections did not.

## 8. SELF-CHECK BEFORE OUTPUT

For each of the 13 items, verify and fix before emitting:

1. Character-count all four option texts. Compute max/min. If > 1.25, rewrite.
2. Confirm exactly one distractor is the longest, exceeding the key by 4+ chars.
3. Confirm weights are {3, 0, -1, -2}, one of each, and `isCorrect` is true only
   on the weight-3 option.
4. Confirm no option contains always / never / absolutely / categorically /
   universally.
5. Confirm all four options are the same grammatical and logical category.
6. Confirm `commonMistake` is present, 20+ chars, and names a specific inference.
7. Confirm `evidenceRef` is non-empty and every id exists in `references[]`.
8. Confirm no item's deciding evidence was already stated in the narrative.

Then confirm across the case: 13 items, domains in the required order, and the
differential entry matching the given diagnosis.

## EXAMPLE

Match this structure, depth, and item quality exactly — different diagnosis:

{{EXEMPLAR_JSON}}

Now output ONLY the JSON for the requested case.
