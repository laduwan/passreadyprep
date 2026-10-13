// Topic queue for the weekly blog auto-drafter (jobs/blogAutoDraft.js).
//
// Each week the job takes the FIRST topic whose slug is not already used by a
// blog post (draft or published) and asks Claude to draft it. Deleting a draft
// frees its slug, so that topic can be drafted again; to skip a topic for good,
// remove it from this list. Add new topics anywhere — order = priority.
//
// Fields:
//   slug   unique, lowercase-hyphen (becomes /blog/<slug>)
//   title  post title (≤ 70 chars reads best in search results)
//   angle  what the post should cover — the drafter writes only from this
//   link   the ONE internal study-tool link the post must include
//   exam   'NCE' for NCE posts (omitted = NCMHCE). NCE posts link to /nce.html,
//          get the NCE call to action, and skip the NCMHCE study-guide teaser.
//
// The exported queue alternates NCMHCE and NCE topics so both exams get posts.
const NCMHCE_TOPICS = [
  // ── High-intent search topics (what candidates type into Google) ─────────
  // These lead the queue on purpose: they answer the questions that bring new
  // visitors, where the tool-feature pages cannot rank.
  {
    slug: 'how-to-pass-the-ncmhce',
    title: 'How to Pass the NCMHCE: A Study Plan That Matches the Exam',
    angle: 'A practical 8-to-12-week plan: learn the case-simulation format first, one case a day with full rationale review, drill the weakest domain, add timed mocks in the final two weeks, and use a readiness marker instead of a calendar. Explain why memorizing a question bank fails on a decision-sequencing exam. Do not state pass rates or cut scores; point readers to the NBCC candidate handbook for current figures.',
    link: { path: '/study', label: 'NCMHCE case simulations' },
  },
  {
    slug: 'ncmhce-exam-format-explained',
    title: 'NCMHCE Exam Format Explained: Cases, Questions, Timing',
    angle: 'What the current (2022+) NCMHCE looks like: 11 case studies with 10 scored and 1 unscored pretest case, 9 to 15 multiple-choice questions per case, intake narrative followed by clinical sessions, 225 minutes with a scheduled 15-minute break, and the six content areas NBCC scores. Mention that NBCC has published a 2027 outline and that candidates should check which outline applies to their test date. Pacing advice: about 20 minutes per case.',
    link: { path: '/exam.html', label: 'timed NCMHCE mock exam' },
  },
  {
    slug: 'nce-vs-ncmhce-which-exam',
    title: 'NCE vs. NCMHCE: Which Counseling Exam Do You Need?',
    angle: 'Plain comparison: the NCE is a 200-question general-knowledge exam across six domains; the NCMHCE is a clinical case-simulation exam. Which one a candidate takes depends on their state board (some require one, some accept either, some require both) and on whether they want the NCC credential. How to find the answer on a state board website. How preparation differs for each.',
    link: { path: '/nce.html', label: 'NCE practice questions and mock exams' },
  },
  {
    slug: 'failed-the-ncmhce-what-next',
    title: 'Failed the NCMHCE? What to Do Differently Before You Retake',
    angle: 'A warm, practical retake plan: read the score report by domain, identify whether points were lost on sequencing (next step, assessment order) or on knowledge (criteria, treatments), rebuild with timed case practice rather than rereading a book, and set a readiness marker before rebooking. Address the emotional side briefly without clichés. Tell readers to confirm NBCC retake waiting periods and fees in the candidate handbook rather than stating them.',
    link: { path: '/study', label: 'NCMHCE case simulations' },
  },
  {
    slug: 'ncmhce-scoring-how-it-works',
    title: 'How the NCMHCE Is Scored (and Why Near Misses Matter)',
    angle: 'What NBCC publishes about scaled scoring and the passing standard, without inventing numbers: direct readers to the candidate handbook for the current standard. Then explain what case-simulation scoring rewards: the best next decision, in order, with harmful choices costing more than merely weak ones. How to use a weighted readiness score during prep.',
    link: { path: '/study', label: 'NCMHCE case simulations' },
  },
  {
    slug: 'free-ncmhce-practice-test-guide',
    title: 'Free NCMHCE Practice Test: How to Use One Well',
    angle: 'How to get real value from a free practice case or mock exam: sit it untimed first and read every rationale, then timed for a baseline by domain, then decide what to drill. What a good practice case includes (intake narrative, sequenced decisions, weighted feedback) and red flags in low-quality free tests (recall-only items, no rationales, outdated pre-2022 format).',
    link: { path: '/study', label: 'free NCMHCE practice case' },
  },
  {
    slug: 'ncmhce-study-schedule-8-weeks',
    title: 'An 8-Week NCMHCE Study Schedule You Can Actually Keep',
    angle: 'A week-by-week plan: weeks 1-2 format and diagnostic reference, weeks 3-5 one case a day plus domain drills, weeks 6-7 timed mocks and ethics/risk review, week 8 light recall and rest. Include a shortened 4-week version for retakers and how to adapt when working full time.',
    link: { path: '/study', label: 'NCMHCE case simulations and study plan' },
  },
  {
    slug: 'ncmhce-common-mistakes',
    title: '7 Mistakes Candidates Make on NCMHCE Case Simulations',
    angle: 'Concrete, fixable mistakes: skipping the safety screen to reach treatment, diagnosing before ruling out medical and substance causes, promising confidentiality the counselor cannot keep, choosing the most intensive level of care by default, acting alone on an ethics question instead of consulting, running out of time on early intake sections, and reading rationales only for wrong answers.',
    link: { path: '/next-best-step.html', label: 'next best step drill' },
  },
  {
    slug: 'ncmhce-suicide-risk-assessment',
    title: 'Suicide Risk Assessment on the NCMHCE: What Cases Look For',
    angle: 'How suicide risk shows up in clinical simulation cases: indirect statements of hopelessness, asking directly and warmly, assessing ideation, plan, intent, means, and protective factors, safety planning instead of no-harm contracts, means restriction, and matching level of care to risk. Common mistakes: under-responding to vague statements, or over-responding in a way that damages trust.',
    link: { path: '/decision-trees.html', label: 'suicide risk decision tree' },
  },
  {
    slug: 'ncmhce-depression-vs-bipolar',
    title: 'Depression vs. Bipolar Disorder: The NCMHCE Differential',
    angle: 'Why screening for past mania or hypomania matters before settling on a depressive diagnosis. Episode history, family history, response to antidepressants, and what to ask in intake. Bipolar I vs. II vs. cyclothymia at a recognition level.',
    link: { path: '/dsm.html', label: 'DSM-5-TR quick reference' },
  },
  {
    slug: 'ncmhce-duty-to-warn-confidentiality',
    title: 'Confidentiality and Duty to Warn in NCMHCE Cases',
    angle: 'The limits of confidentiality, how duty-to-warn and duty-to-protect situations appear in vignettes, documenting and consulting, and why state law varies (tell readers to confirm their own state rules rather than stating any state rule). Informed consent about limits at intake.',
    link: { path: '/decision-trees.html', label: 'confidentiality and duty-to-warn decision tree' },
  },
  {
    slug: 'ncmhce-mandated-reporting',
    title: 'Mandated Reporting Decisions on the NCMHCE',
    angle: 'Reasonable suspicion vs. certainty, child and elder/dependent-adult abuse, not investigating yourself, telling the client where appropriate, documentation, and consultation. Common traps: waiting for proof, promising secrecy.',
    link: { path: '/decision-trees.html', label: 'mandated reporting decision tree' },
  },
  {
    slug: 'ncmhce-ptsd-acute-stress-adjustment',
    title: 'PTSD vs. Acute Stress vs. Adjustment Disorder for the NCMHCE',
    angle: 'Telling trauma- and stressor-related diagnoses apart in a vignette: the nature of the stressor, timing and duration, and symptom clusters. Trauma-informed intake and pacing, and why stabilization comes before trauma processing.',
    link: { path: '/dsm.html', label: 'DSM-5-TR quick reference' },
  },
  {
    slug: 'ncmhce-level-of-care',
    title: 'Choosing the Right Level of Care in NCMHCE Cases',
    angle: 'Outpatient, intensive outpatient, partial hospitalization, residential, and inpatient: what drives the choice (risk, functioning, support, medical needs, substance withdrawal). The least restrictive setting that keeps the client safe.',
    link: { path: '/decision-trees.html', label: 'level-of-care decision tree' },
  },
  {
    slug: 'ncmhce-counseling-microskills',
    title: 'Counseling Microskills the NCMHCE Expects You to Know',
    angle: 'Attending, paraphrasing, reflection of feeling, summarizing, open questions, immediacy, confrontation, and reframing, with short example client statements and responses. Why validating comes before challenging.',
    link: { path: '/skills.html', label: 'microskills practice' },
  },
  {
    slug: 'ncmhce-intake-interview',
    title: 'The Clinical Intake Interview: What NCMHCE Cases Test',
    angle: 'What a thorough intake covers (presenting problem, history, substance use, medical, risk screening, mental status, strengths, culture), building rapport while gathering information, and informed consent at the start.',
    link: { path: '/intake.html', label: 'intake interview simulator' },
  },
  {
    slug: 'ncmhce-anxiety-differential',
    title: 'Sorting Out Anxiety Disorders on the NCMHCE',
    angle: 'Generalized anxiety, panic disorder, social anxiety, specific phobia, and agoraphobia: the deciding features, ruling out medical and substance causes, and first-line evidence-based approaches at a general level.',
    link: { path: '/dsm.html', label: 'DSM-5-TR quick reference' },
  },
  {
    slug: 'ncmhce-substance-use-cases',
    title: 'Substance Use in NCMHCE Cases: Screening, Severity, and Care',
    angle: 'Screening with standardized tools, quantifying use, severity specifiers, withdrawal risk as a medical concern, co-occurring disorders, motivational interviewing, and stages of change.',
    link: { path: '/decision-trees.html', label: 'substance use decision trees' },
  },
  {
    slug: 'ncmhce-counseling-theories',
    title: 'Counseling Theories for the NCMHCE: Recognizing Each Approach',
    angle: 'How to recognize major approaches from their signature techniques: cognitive therapy, REBT, behavioral, person-centered, Gestalt, Adlerian, psychodynamic, solution-focused, narrative, structural and strategic family therapy, Bowen. Choosing an approach that fits the client.',
    link: { path: '/theory.html', label: 'theories and pioneers reference' },
  },
  {
    slug: 'ncmhce-dual-relationships-boundaries',
    title: 'Dual Relationships and Boundaries in NCMHCE Cases',
    angle: 'Boundary crossings vs. violations, gifts, social media, small communities, bartering, and what to do when a dual relationship cannot be avoided: informed consent, consultation, documentation.',
    link: { path: '/decision-trees.html', label: 'boundary decision tree' },
  },
  {
    slug: 'ncmhce-adhd-anxiety-depression-overlap',
    title: 'ADHD, Anxiety, or Depression? Untangling Overlap on the NCMHCE',
    angle: 'Concentration problems can come from several places. Onset and course, settings, collateral information, screening, and why a careful history beats a symptom checklist.',
    link: { path: '/decision-trees.html', label: 'ADHD vs. anxiety vs. depression decision tree' },
  },
  {
    slug: 'ncmhce-therapy-modality-selection',
    title: 'Matching Treatment to Diagnosis on the NCMHCE',
    angle: 'Selecting evidence-based approaches for common presentations at a general level, deciding between individual, group, and family formats, and recognizing when a medication referral is appropriate.',
    link: { path: '/decision-trees.html', label: 'therapy modality decision tree' },
  },
  {
    slug: 'ncmhce-cultural-considerations',
    title: 'Cultural Considerations in NCMHCE Diagnosis and Treatment',
    angle: 'Cultural formulation, cultural concepts of distress, avoiding pathologizing cultural norms, culturally congruent goals, and counselor self-awareness. Reading disengagement as possible misfit, not resistance.',
    link: { path: '/decision-trees.html', label: 'cultural considerations decision tree' },
  },
  {
    slug: 'ncmhce-termination-and-referral',
    title: 'Termination and Referral: Ending Counseling Well on the NCMHCE',
    angle: 'Planned termination, preparing the client, referral when outside competence, avoiding abandonment, and handling premature termination.',
    link: { path: '/decision-trees.html', label: 'termination and referral decision tree' },
  },
  {
    slug: 'ncmhce-next-best-step-questions',
    title: 'Next-Best-Step Questions on the NCMHCE: How to Approach Them',
    angle: 'What "first", "next", and "most appropriate" questions are asking, why several options can be clinically sound, and general habits for reading the stem. Keep it general: do not lay out a ranked method.',
    link: { path: '/next-best-step.html', label: 'next best step practice' },
  },
  {
    slug: 'ncmhce-assessment-instruments',
    title: 'Choosing Assessments and Screeners in NCMHCE Cases',
    angle: 'When to screen, when to administer a structured measure, when to gather collateral, and when to refer for medical evaluation. Commonly used screening tools by purpose, at a general level.',
    link: { path: '/assess-next.html', label: 'what-to-assess-next practice' },
  },
];

const NCE_TOPICS = [
  // ── High-intent search topics ─────────────────────────────────────────────
  {
    exam: 'NCE',
    slug: 'how-to-pass-the-nce',
    title: 'How to Pass the NCE: Study Plan, Domains, and Pacing',
    angle: 'A practical plan for the 200-question NCE: baseline timed set, study the two weakest of the six domains first, weekly timed mocks in the last month, and how to pace 200 questions in 3 hours 45 minutes. Explain that 40 items are unscored pretest questions candidates cannot identify. Do not state pass rates or cut scores; point to the NBCC candidate handbook.',
    link: { path: '/nce.html', label: 'NCE practice questions and mock exams' },
  },
  {
    exam: 'NCE',
    slug: 'nce-exam-format-and-domains',
    title: 'NCE Exam Format: 200 Questions, Six Domains, What to Expect',
    angle: 'The structure of the NCE: 200 multiple-choice questions, 160 scored, 3 hours 45 minutes, and NBCC\'s six content domains with a sentence on what each covers. How the exam is delivered and what the question styles look like. Where to confirm registration details and fees (NBCC handbook) rather than stating them.',
    link: { path: '/nce.html', label: 'NCE practice questions and mock exams' },
  },
  {
    exam: 'NCE',
    slug: 'nce-study-schedule-6-weeks',
    title: 'A 6-Week NCE Study Schedule by Domain',
    angle: 'Week-by-week plan weighted to the six NCE domains, with a baseline mock in week 1, domain blocks in weeks 2-4, mixed timed sets in week 5, and two full mocks in week 6. Include how to adjust if a baseline shows one domain far below the others.',
    link: { path: '/nce.html', label: 'NCE practice questions and mock exams' },
  },
  {
    exam: 'NCE',
    slug: 'free-nce-practice-questions-how-to-use',
    title: 'Free NCE Practice Questions: How to Turn Them Into a Score Gain',
    angle: 'Why most free NCE questions are used badly (answered once, rationales skipped). How to tag each miss by domain, keep an error log, and retest the same concept a week later. What makes a practice question realistic for the NCE and how to spot outdated or recall-only items.',
    link: { path: '/nce.html', label: 'free NCE sample questions' },
  },
  {
    exam: 'NCE',
    slug: 'nce-counseling-theories',
    title: 'Counseling Theories on the NCE: Key Approaches to Know',
    angle: 'Major counseling theories and their founders, core concepts, and signature techniques as the NCE tends to test them: psychodynamic, Adlerian, person-centered, existential, Gestalt, behavioral, cognitive, REBT, reality therapy, solution-focused, narrative, and family systems approaches. How to tell approaches apart from a short stem.',
    link: { path: '/nce.html', label: 'NCE practice questions and mock exams' },
  },
  {
    exam: 'NCE',
    slug: 'nce-human-growth-development',
    title: 'Human Growth and Development on the NCE',
    angle: 'Developmental theories the NCE draws on: Piaget, Erikson, Kohlberg, Gilligan, attachment theory, and lifespan transitions, with how each shows up in a counseling scenario.',
    link: { path: '/nce.html', label: 'NCE practice questions and mock exams' },
  },
  {
    exam: 'NCE',
    slug: 'nce-ethics-confidentiality',
    title: 'Ethics on the NCE: Confidentiality, Consent, and Boundaries',
    angle: 'Professional practice and ethics for the NCE: informed consent elements, confidentiality and its limits, duty to warn and protect at a general level, multiple relationships, documentation, scope of competence, and ethical decision-making models. Send readers to their state board for state-specific rules.',
    link: { path: '/nce.html', label: 'NCE practice questions and mock exams' },
  },
  {
    exam: 'NCE',
    slug: 'nce-assessment-testing',
    title: 'Assessment and Testing on the NCE: Reliability, Validity, and Scores',
    angle: 'Assessment concepts for the NCE: reliability types, validity types, norm- versus criterion-referenced tests, standard scores and percentiles, the normal curve, standard error of measurement, and choosing appropriate instruments. Explain concepts in words; do not state statistics about the exam.',
    link: { path: '/nce.html', label: 'NCE practice questions and mock exams' },
  },
  {
    exam: 'NCE',
    slug: 'nce-career-development',
    title: 'Career Development Theories for the NCE',
    angle: 'Career theories and assessments the NCE covers: Holland, Super, Krumboltz, Gottfredson, Roe, trait-and-factor, and how career issues show up in counseling scenarios.',
    link: { path: '/nce.html', label: 'NCE practice questions and mock exams' },
  },
  {
    exam: 'NCE',
    slug: 'nce-group-counseling',
    title: 'Group Counseling on the NCE: Stages, Roles, and Therapeutic Factors',
    angle: 'Group work for the NCE: group stages, leader skills, member roles, Yalom\'s therapeutic factors, screening, and confidentiality limits in groups.',
    link: { path: '/nce.html', label: 'NCE practice questions and mock exams' },
  },
  {
    exam: 'NCE',
    slug: 'nce-research-program-evaluation',
    title: 'Research and Program Evaluation for the NCE',
    angle: 'Research concepts counselors need for the NCE: research designs, variables, validity threats, basic statistics concepts explained in words, needs assessment, and program evaluation.',
    link: { path: '/nce.html', label: 'NCE practice questions and mock exams' },
  },
  {
    exam: 'NCE',
    slug: 'nce-social-cultural-diversity',
    title: 'Social and Cultural Diversity on the NCE',
    angle: 'Multicultural counseling for the NCE: cultural humility, identity development models, acculturation, privilege and oppression, and culturally responsive practice.',
    link: { path: '/nce.html', label: 'NCE practice questions and mock exams' },
  },
];

// Alternate: NCMHCE, NCE, NCMHCE, NCE, … then whatever is left of the longer list.
const queue = [];
for (let i = 0; i < Math.max(NCMHCE_TOPICS.length, NCE_TOPICS.length); i++) {
  if (NCMHCE_TOPICS[i]) queue.push(NCMHCE_TOPICS[i]);
  if (NCE_TOPICS[i]) queue.push(NCE_TOPICS[i]);
}

module.exports = queue;
