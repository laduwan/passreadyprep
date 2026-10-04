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
module.exports = [
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
