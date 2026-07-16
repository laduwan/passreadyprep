/**
 * book2-manifest.js — The NCMHCE Practice Handbook (Book Two)
 *
 * Deterministic case selection for the three printed practice exams.
 * Case IDs reference the deduplicated exam-format bank in tools/cases/.
 *
 * Selection rules applied:
 *  - Exam-format only: 3-section narrative (intake/session1/session2), >=11 questions
 *  - Deduplicated by id (the 40 duplicate ids that existed between cases-31-70.js
 *    and generated-cases.js — same G051-G090 numbers reused for unrelated cases —
 *    were resolved 2026-07-15: cases-31-70.js's 40 cases were renumbered to
 *    G100-G139, generated-cases.js kept its original numbers since it was the
 *    schema-valid side of every pair. No content was deleted.)
 *  - 11 cases per exam (current NCMHCE format, through June 30 2027)
 *  - 8 core categories round-robined across exams so difficulty spreads evenly
 *  - 3 rotating categories per exam so all diagnostic families appear in print
 *  - No case appears in more than one exam
 *
 * 33 cases · 429 questions · 1,716 option rationales
 * 52 exam-format cases remain platform-exclusive to PassReady Prep.
 */

const EXAM_1 = [
  'ncmhce-D105', // Depressive         · easy   · Major Depressive Disorder, Moderate
  'ncmhce-D102', // Anxiety            · medium · Generalized Anxiety Disorder
  'ncmhce-D108', // Trauma             · medium · Prolonged Grief Disorder
  'ncmhce-D207', // Substance          · easy   · Alcohol Use Disorder, Moderate
  'ncmhce-D109', // Personality        · medium · Borderline Personality Disorder
  'ncmhce-D112', // Bipolar            · hard   · Bipolar I, Current Episode Manic
  'ncmhce-D113', // Psychotic          · hard   · Schizophrenia
  'ncmhce-D117', // Neurodevelopmental · medium · ADHD, Combined
  'ncmhce-D115', // OCD-Related        · medium · Obsessive-Compulsive Disorder
  'ncmhce-D116', // Crisis             · hard   · Suicidal Behavior / Acute Risk
  'ncmhce-D148', // Eating             · medium · Binge-Eating Disorder
];

const EXAM_2 = [
  'ncmhce-D200', // Depressive         · easy   · Persistent Depressive Disorder
  'ncmhce-D106', // Anxiety            · medium · Panic Disorder
  'ncmhce-D206', // Trauma             · easy   · Acute Stress Disorder
  'ncmhce-D107', // Substance          · medium · Opioid Use Disorder, Severe
  'ncmhce-D132', // Dissociative       · hard   · Depersonalization/Derealization Disorder
  'ncmhce-D138', // Bipolar            · hard   · Bipolar II Disorder
  'ncmhce-D145', // Psychotic          · hard   · Delusional Disorder
  'ncmhce-D157', // Neurodevelopmental · medium · Specific Learning Disorder
  'ncmhce-D131', // Somatic            · medium · Somatic Symptom Disorder
  'ncmhce-D213', // Crisis             · medium · Intimate Partner Violence (safety planning)
  'ncmhce-D135', // Neurocognitive     · hard   · Major NCD due to Alzheimer's Disease
];

const EXAM_3 = [
  'ncmhce-D201', // Depressive         · easy   · MDD with Peripartum Onset
  'ncmhce-D204', // Anxiety            · easy   · Social Anxiety Disorder
  'ncmhce-D205', // Trauma             · easy   · Adjustment Disorder, with Depressed Mood
  'ncmhce-D119', // Substance          · medium · Stimulant Use Disorder (Cocaine)
  'ncmhce-D209', // Crisis             · hard   · Suicidal Behavior / Acute Risk (means restriction)
  'ncmhce-D156', // Bipolar            · hard   · Cyclothymic Disorder
  'ncmhce-D151', // Psychotic          · hard   · Schizoaffective Disorder, Bipolar Type
  'ncmhce-D169', // Neurodevelopmental · medium · Tourette's Disorder
  'ncmhce-D136', // Sleep              · medium · Insomnia Disorder, Chronic
  'ncmhce-D182', // Sexual-Gender      · medium · Erectile Disorder
  'ncmhce-D133', // Disruptive         · medium · Oppositional Defiant Disorder
];

// ── Known gaps in this selection — read before building ─────────────────────
//
// 1. DIFFICULTY SKEW — PARTIALLY RESOLVED 2026-07-15. Exams 2 and 3 held zero
//    easy cases; generate-deep.js's difficulty-mix bug (every slot hardcoded
//    to 'medium') meant the exam-format bank held 1 easy / 37 medium / 47 hard
//    with almost nothing to draw from. 10 new easy cases (Depressive, Anxiety,
//    Trauma, Substance) were generated and swapped into matching category
//    slots above wherever the diagnosis matched exactly. Current per-exam mix:
//      Exam 1: 2 easy / 6 medium / 3 hard
//      Exam 2: 2 easy / 5 medium / 4 hard
//      Exam 3: 3 easy / 5 medium / 3 hard
//    Exams 2 and 3 land close to, not exactly on, the ~2/6/3 target: Bipolar,
//    Psychotic, Dissociative, and Neurocognitive currently have ZERO easy or
//    medium cases anywhere in the deep-case bank (every generated case in
//    those four categories is hard) — that is a separate, still-open gap
//    that needs new generation in those categories, not a manifest swap.
//
// 2. DISSOCIATIVE — RESOLVED 7/13/26. D118 (Narcissistic PD, hard) swapped out of
//    Exam 2 for D132 (Depersonalization/Derealization, hard). All 17 categories now
//    appear in print. Personality remains covered by D109 (Exam 1) only as of the
//    7/15/26 crisis-coverage swap below, which replaced Exam 3's second Personality
//    slot (D142) with a Crisis case — Personality still appears in print via D109.
//    NOTE: the original Dissociative swap does not help gap 1 — all three
//    Dissociative cases in the bank are hard, so it was difficulty-neutral.
//    D118 remains platform-exclusive.
//
// 3. CRISIS — RESOLVED 2026-07-15. The bank held only 2 exam-format Crisis
//    cases and Exam 3 had none. 6 new Crisis cases were generated, each keyed
//    to a distinct exam-tested decision (means restriction, duty-to-protect,
//    mandated reporting, a buried medical emergency, IPV/contraindicated
//    conjoint therapy, NSSI function-vs-intent). Exam 3's redundant second
//    Personality slot (D142, hard) was swapped for D209 (Crisis, hard) so all
//    three exams now carry a Crisis case. D142, D193 (the old Exam 2 Crisis
//    pick, NSSI, swapped for the medium IPV case D213), and 12 of the 16 new
//    cases remain platform-exclusive (not selected for print).
//
// 4. 40 DUPLICATE IDS — RESOLVED 2026-07-15. cases-31-70.js and
//    generated-cases.js both used ids G051-G090 for 40 entirely unrelated
//    cases (not revisions of each other — different titles, diagnoses, and
//    content sharing an id by allocation accident). generated-cases.js was
//    kept as-is (0 schema errors); cases-31-70.js's 40 cases were renumbered
//    to G100-G139 — no case content was deleted or altered beyond the id
//    field. Neither range was referenced by this manifest before the fix.
//    cases-31-70.js still fails caseSchema validation on ~31 checks/case
//    (missing references[]/evidenceRef, thin explanation objects) — that
//    predates this fix and is a separate, unaddressed content-quality gap in
//    that file, not an id-collision issue.

module.exports = { EXAM_1, EXAM_2, EXAM_3 };
