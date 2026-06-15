// ============================================================================
// references.js — Canonical authoritative-source library
// NCMHCE Prep Platform | GA Integrated Therapeutic Perspectives LLC
//
// The fixed set of sources case content may cite. The generator draws `source`
// values from THIS list only (no invented sources); the specific locator (which
// criterion / recommendation) goes in each case's reference `detail` and is
// confirmed at SME review. The tech manual documents the full list.
//
// `tier`:  primary  = governing standard a counselor is held to
//          guideline = clinical practice guideline / treatment standard
//          protocol  = validated tool / structured protocol
//          seminal   = foundational model or text
//          exam      = NBCC exam-defining document
// ============================================================================

const REFERENCE_LIBRARY = [
  // --- Diagnostic + ethical/legal backbone (primary) ----------------------
  { key: 'DSM-5-TR', tier: 'primary', body: 'American Psychiatric Association',
    citation: 'American Psychiatric Association. (2022). Diagnostic and Statistical Manual of Mental Disorders (5th ed., text rev.).',
    use: 'Diagnostic criteria, specifiers, and differential rule-outs.' },
  { key: 'ICD-10-CM', tier: 'primary', body: 'CDC / NCHS',
    citation: 'International Classification of Diseases, 10th Revision, Clinical Modification (ICD-10-CM).',
    use: 'Diagnostic codes.' },
  { key: 'ACA Code of Ethics', tier: 'primary', body: 'American Counseling Association',
    citation: 'American Counseling Association. (2014). ACA Code of Ethics.',
    use: 'Confidentiality, duty to warn/protect, boundaries, informed consent, scope, competence. Listed in the NBCC NCMHCE Candidate Handbook.' },
  { key: 'State law', tier: 'primary', body: 'Jurisdiction-specific',
    citation: 'Applicable state statutes and board rules (e.g., mandated reporting, duty to warn/protect).',
    use: 'Legal duties that vary by state; confirmed against the candidate/clinician jurisdiction.' },

  // --- Clinical practice guidelines (guideline) ---------------------------
  { key: 'APA CPG', tier: 'guideline', body: 'American Psychological Association',
    citation: 'American Psychological Association Clinical Practice Guidelines (e.g., depression across the lifespan; PTSD).',
    use: 'Evidence-based treatment selection for mood, anxiety, and trauma presentations.' },
  { key: 'VA/DoD CPG', tier: 'guideline', body: 'U.S. Department of Veterans Affairs / Department of Defense',
    citation: 'VA/DoD Clinical Practice Guidelines (MDD, PTSD, SUD, Bipolar, Suicide Risk).',
    use: 'Treatment pathways, stepped care, and risk management; freely available.' },
  { key: 'NICE guidelines', tier: 'guideline', body: 'National Institute for Health and Care Excellence (UK)',
    citation: 'NICE guidelines (e.g., generalised anxiety disorder and panic disorder; depression; bipolar disorder; eating disorders).',
    use: 'First-line treatment and stepped-care recommendations.' },
  { key: 'SAMHSA TIP 35', tier: 'guideline', body: 'SAMHSA',
    citation: 'SAMHSA. Treatment Improvement Protocol (TIP) 35: Enhancing Motivation for Change in Substance Use Disorder Treatment.',
    use: 'Motivational interviewing, ambivalence, and stage-matched intervention in SUD.' },
  { key: 'SAMHSA TIP 45', tier: 'guideline', body: 'SAMHSA',
    citation: 'SAMHSA. Treatment Improvement Protocol (TIP) 45: Detoxification and Substance Abuse Treatment.',
    use: 'Withdrawal assessment and management; medical-safety screening.' },
  { key: 'SAMHSA TIP 63', tier: 'guideline', body: 'SAMHSA',
    citation: 'SAMHSA. Treatment Improvement Protocol (TIP) 63: Medications for Opioid Use Disorder.',
    use: 'MAT/medication for opioid use disorder.' },
  { key: 'ASAM Criteria', tier: 'guideline', body: 'American Society of Addiction Medicine',
    citation: 'The ASAM Criteria: Treatment Criteria for Addictive, Substance-Related, and Co-Occurring Conditions.',
    use: 'Level-of-care determination for substance use disorders.' },

  // --- Validated protocols / tools (protocol) -----------------------------
  { key: 'C-SSRS', tier: 'protocol', body: 'Columbia University',
    citation: 'Columbia-Suicide Severity Rating Scale (C-SSRS) (Posner et al., 2011).',
    use: 'Structured suicide-risk assessment.' },
  { key: 'Stanley-Brown SPI', tier: 'protocol', body: 'Stanley & Brown',
    citation: 'Stanley, B., & Brown, G. K. (2012). Safety Planning Intervention. Cognitive and Behavioral Practice, 19(2), 256-264.',
    use: 'Collaborative safety planning for suicide risk.' },

  // --- Foundational models / texts (seminal) ------------------------------
  { key: 'Miller & Rollnick (MI)', tier: 'seminal', body: 'Miller & Rollnick',
    citation: 'Miller, W. R., & Rollnick, S. (2013). Motivational Interviewing: Helping People Change (3rd ed.). Guilford Press.',
    use: 'Motivational interviewing method.' },
  { key: 'Transtheoretical Model', tier: 'seminal', body: 'Prochaska & DiClemente',
    citation: 'Prochaska, J. O., & DiClemente, C. C. Transtheoretical Model / Stages of Change.',
    use: 'Stage-of-change conceptualization and stage-matched intervention.' },
  { key: 'Barlow PCT', tier: 'seminal', body: 'Barlow & Craske',
    citation: 'Barlow, D. H., & Craske, M. G. Mastery of Your Anxiety and Panic / Panic Control Treatment (interoceptive exposure).',
    use: 'CBT with interoceptive exposure for panic disorder.' },
  { key: 'IPSRT', tier: 'seminal', body: 'Frank',
    citation: 'Frank, E. Interpersonal and Social Rhythm Therapy (IPSRT) for bipolar disorder.',
    use: 'Social-rhythm and sleep regulation for bipolar relapse prevention.' },

  // --- NBCC exam-defining documents (exam) + handbook reference texts ------
  { key: 'NBCC Content Outline', tier: 'exam', body: 'NBCC',
    citation: 'National Board for Certified Counselors. NCMHCE Content Outline and Candidate Handbook.',
    use: 'Domain structure, weighting, and exam format that the case bank mirrors.' },
  { key: 'NBCC Study Supplement', tier: 'exam', body: 'NBCC',
    citation: 'National Board for Certified Counselors. NCMHCE Study Supplement (DSM-5 disorder overviews; sourced practice scenarios).',
    use: 'NBCC model for how exam scenarios are sourced and discussed.' },
  { key: 'Corey (Theory & Practice)', tier: 'seminal', body: 'Corey',
    citation: 'Corey, G. (2016). Theory and Practice of Counseling and Psychotherapy (10th ed.). Brooks/Cole.',
    use: 'Counseling theory and approach selection. Listed in the NBCC Candidate Handbook.' },
  { key: 'Hays (Assessment)', tier: 'seminal', body: 'Hays',
    citation: 'Hays, D. (2017). Assessment in Counseling: Procedures and Practices (6th ed.). ACA.',
    use: 'Clinical assessment procedures. Listed in the NBCC Candidate Handbook.' },
  { key: 'Wiger (Documentation)', tier: 'seminal', body: 'Wiger',
    citation: 'Wiger, D. E. (2012). The Psychotherapy Documentation Primer (3rd ed.). Wiley.',
    use: 'Clinical documentation standards. Listed in the NBCC Candidate Handbook.' },
];

const ALLOWED_SOURCES = REFERENCE_LIBRARY.map((r) => r.key);

function isAllowedSource(key) { return ALLOWED_SOURCES.includes(key); }

module.exports = { REFERENCE_LIBRARY, ALLOWED_SOURCES, isAllowedSource };
