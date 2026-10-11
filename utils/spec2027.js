// ============================================================================
// spec2027.js — NBCC's 2027 examination specification text, shared by the NCE
// and NCMHCE (both exams use the same content outline from 2027-07-01).
//
// Single source of the official wording: utils/nceBlueprint.js (NCE 2027
// topics) and tools/cases/blueprint2027.js (NCMHCE 2027 labels + work tasks)
// both read from here, so generators prompt from the real spec, not a
// paraphrase.
//
// Work tasks are transcribed verbatim from the spec. `knowledge` lists the
// spec's key "knowledge of" items per domain; SUPPLEMENTAL_2027 is the spec's
// Section 7 (presenting concerns, frameworks, tools). Verify against the PDFs
// below before relying on anything here for a published claim.
// ============================================================================

const SPEC_2027_SOURCE = {
  effective: '2027-07-01',
  nce: 'https://www.cce-global.org/Assets/exams/NCE_exam_spec_2027.pdf',
  ncmhce: 'https://nbcc.org/assets/exam/NCMHCE_exam_spec_2027.pdf',
  title: 'NBCC Examination Specifications, Effective July 1, 2027',
};

const DOMAINS_2027 = [
  {
    nceKey: 'professional_development',
    ncmhceKey: 'profdev',
    label: 'Professional Development & Counselor Self-Awareness',
    weight: 0.15,
    subdomains: [
      {
        code: '1A',
        label: 'Professional Development',
        tasks: [
          'Seek consultation from a colleague for assistance with a specific skill or modality',
          'Seek supervision from a Counseling supervisor',
          'Complete continuing education',
          'Develop knowledge of empirically supported Counseling interventions or approaches',
          'Engage in advocacy for the client and the Counseling profession',
          'Engage in training related to Counseling ethics',
          'Engage in training related to ethical and legal use of artificial intelligence (AI)',
          'Engage in training related to working with different cultures or populations',
        ],
      },
      {
        code: '1B',
        label: 'Counselor Self-Awareness',
        tasks: [
          'Address your compassion fatigue (e.g., burnout) potential',
          'Assess your exposure to vicarious trauma',
          'Assess your need for specialized training and/or certification',
          'Assess your strengths and limitations as a Counselor',
          'Assess your suitability to work with a specific client based on their needs and sociocultural considerations',
          'Utilize self-regulation techniques',
          'Determine the client-Counselor suitability (e.g., Counselor has the skills and experience needed, availability, no conflict of interest)',
          'Determine your competency for administering assessments',
          'Maintain appropriate boundaries',
          'Practice self-care',
          'Practice self-reflection',
        ],
      },
    ],
    knowledge: [
      'Counseling codes of ethics (ACA, NBCC)',
      'Supervision and consultation models',
      'Compassion fatigue, burnout and vicarious trauma',
      'Self-care and self-regulation strategies',
      'Scope of practice and competence',
      'Cultural humility and multicultural competence',
      'Ethical and legal use of artificial intelligence (AI)',
      'Advocacy for clients and the Counseling profession',
    ],
  },
  {
    nceKey: 'intake_assessment',
    ncmhceKey: 'assess',
    label: 'Intake & Assessment',
    weight: 0.18,
    subdomains: [
      {
        code: '2A',
        label: 'Intake',
        tasks: [
          'Discuss and obtain informed consent/assent from client or guardian',
          'Initially evaluate barriers to service',
          'Obtain client self-reports',
          'Obtain collateral information from other relevant parties (e.g., child and family services, clergy, legal services)',
          'Review policies and procedures with client',
          'Obtain informed consent appropriate to clientele (e.g., group, family)',
          'Obtain informed consent for telemental health services',
        ],
      },
      {
        code: '2B',
        label: 'Assessment',
        tasks: [
          'Assess for trauma',
          'Assess risk to self and others',
          'Assess substance use',
          'Conduct biopsychosocial assessments',
          'Conduct mental status examination',
          'Determine co-occurring diagnoses, differential diagnoses, and other comorbidities',
          'Determine the appropriate level of care',
          'Use formal (e.g., assessment results) and informal (e.g., body language) observations',
          'Use screening instruments',
          'Discuss the results of assessments/instruments with the client',
          'Select, administer, and/or interpret appropriate instruments/assessments that align with contextual, cultural, and developmental considerations',
          'Use all available data to select the appropriate diagnosis from the most recent DSM/ICD code',
        ],
      },
    ],
    knowledge: [
      'DSM-5-TR',
      'ICD-11',
      'Cultural idioms of distress',
      'Mental status examination',
      'Risk assessment (suicide, homicide, self-harm)',
      'Lethal means restriction',
      'Screening and assessment instruments (psychometrics, reliability, validity)',
      'Levels of care',
      'Informed consent and assent, including telemental health',
    ],
  },
  {
    nceKey: 'treatment_continuity',
    ncmhceKey: 'planning',
    label: 'Treatment Planning & Continuity of Care',
    weight: 0.15,
    subdomains: [
      {
        code: '3A',
        label: 'Treatment Planning',
        tasks: [
          'Help client prioritize presenting problems',
          'Develop SMART (Specific, Measurable, Attainable, Realistic, and Timely) counseling goals and objectives',
          'Develop an initial treatment plan',
          'Identify strengths and barriers affecting client goal attainment',
          'Integrate assessment results into treatment plans',
          "Integrate client's contextual and cultural considerations into treatment plans",
          'Review diagnosis with client',
          'Assess for contraindications of treatment approaches',
          'Collaborate with client to establish treatment goals and objectives',
          'Collaborate with client to revise treatment plan as needed',
          'Develop behavioral management plans',
        ],
      },
      {
        code: '3B',
        label: 'Continuity of Care',
        tasks: [
          'Refer clients and/or family members to community resources or to specialists',
          'Develop an aftercare plan',
          'Discuss with clients how they will maintain progress',
          'Develop a discharge plan',
          'Develop a relapse prevention plan',
          'Develop a plan for disruption of service',
          'Engage with client in review of progress toward treatment goals at planned intervals',
          'Evaluate treatment effectiveness and client response',
          'Collaborate with client to determine counseling termination criteria',
        ],
      },
    ],
    knowledge: [
      'SMART goals and objectives',
      'Evidence-based treatment selection and contraindications',
      'Measurement-based care and outcome monitoring',
      'Relapse prevention, aftercare and discharge planning',
      'Professional wills and planning for disruption of service',
      'Referral and community resources',
      'Termination criteria',
    ],
  },
  {
    nceKey: 'interventions',
    ncmhceKey: 'interventions',
    label: 'Provision of Counseling Interventions',
    weight: 0.20,
    subdomains: [
      {
        code: '4',
        label: 'Provision of Counseling Interventions',
        tasks: [
          'Engage in dynamic Couples/Family Counseling',
          "Explore the impact of the client's culture, context, values, and worldview",
          "Facilitate client's skill development",
          "Facilitate clients' ability to navigate interpersonal relationships",
          'Foster the group therapeutic process',
          'Implement empirically supported interventions',
          'Implement interventions aligned with service modality',
          'Integrate contextual and cultural influences into Counselor–client relationship',
          'Orient client to the Counseling process',
          'Provide crisis intervention and de-escalation',
          'Provide psychoeducation',
          'Solicit client feedback regarding the Counseling process',
          'Support client in advocating for their needs',
          'Use core Counseling skills to facilitate treatment',
          'Monitor and resolve therapeutic ruptures',
        ],
      },
    ],
    knowledge: [
      'Counseling theories and empirically supported interventions',
      'Core Counseling skills and the therapeutic alliance',
      'Group stages, dynamics and therapeutic factors',
      'Couples and family systems approaches',
      'Crisis intervention and de-escalation',
      'Lethal means restriction and safety planning',
      'Therapeutic ruptures and repair',
      'Cultural and contextual influences on the Counselor–client relationship',
    ],
  },
  {
    nceKey: 'indirect_care',
    ncmhceKey: 'indirect',
    label: 'Indirect Client Care',
    weight: 0.12,
    subdomains: [
      {
        code: '5',
        label: 'Indirect Client Care',
        tasks: [
          "Collaborate with client's relevant support systems (e.g., advocate, family, wraparound services, legal services) with goals and objectives",
          'Collaborate with non-clinical stakeholders (e.g., legal counselor, community resources)',
          'Collaborate with other treatment providers (e.g., care coordination, interdisciplinary treatment team)',
          "Document the self-reported effects of client's medication",
          'Maintain an updated list of referral resources',
          'Review clinical documentation before client sessions',
          "Secure appropriate translation services for clients' preferred language",
          'Write clinical documentation during or after client sessions',
        ],
      },
    ],
    knowledge: [
      'Care coordination and interdisciplinary treatment teams',
      'Clinical documentation standards',
      'Psychopharmacology basics and medication side effects',
      'Language access and translation services',
      'Referral resources and wraparound services',
    ],
  },
  {
    nceKey: 'legal_ethical',
    ncmhceKey: 'legal',
    label: 'Legal & Ethical Compliance',
    weight: 0.20,
    subdomains: [
      {
        code: '6',
        label: 'Legal & Ethical Compliance',
        tasks: [
          'Activate (i.e., follow) an emergency preparedness plan for your Counseling practice in response to a relevant incident',
          'Adhere to internal policies or standard operating procedures (SOPs) relevant to your clinical practice (e.g., informed consent, record retention, release of information, mandated reporting protocols)',
          'Adhere to relevant state and federal laws and regulations that apply to your clinical practice',
          'Adhere to telemental health best practice guidelines',
          'Adhere to the Counseling codes of ethics',
          'Engage in activities to maintain licensure status',
          'Engage in billing, third-party reimbursement and other insurance panel processes',
          'Engage in compliance-related training (e.g., insurance, credentialing, billing, payment)',
          'Ensure telemental health platforms are utilized in compliance with state and federal laws',
          'Ensure that reimbursement requests are supported by proper clinical documentation',
          'Implement technology-assisted clinical tools (e.g., online therapy platform, AI note takers, virtual reality tools, calming apps, wearable devices to monitor heart rate and breathing)',
          'Maintain professional liability insurance',
          'Practice in accordance with license portability (e.g., Counseling Compact)',
          'Provide adequate accommodations for clients with disabilities',
          'Review and update an emergency preparedness plan for your Counseling practice',
          'Securely maintain case notes, records, and files',
          'Solicit best practices for understanding and adhering to obligations of court proceedings',
          'Use an electronic health record (EHR) or electronic medical record (EMR) system',
          'Use artificial intelligence (AI) within your Counseling practice',
          'Market your Counseling business appropriately (e.g., proper utilization of social media, proper protection of client information)',
        ],
      },
    ],
    knowledge: [
      'HIPAA, FERPA, HI-TECH, ADA and NPI',
      'CPT codes and third-party reimbursement',
      'CAQH and credentialing',
      'Counseling Compact and license portability',
      'Professional wills',
      'Emerging technologies, including AI and telemental health platforms',
      'Voluntary and involuntary commitment',
      'Mandated reporting, duty to warn and protect',
      'Subpoenas, court orders and court proceedings',
      'Emergency preparedness planning',
    ],
  },
];

const SUPPLEMENTAL_2027 = {
  presentingConcerns: [
    'Anxiety', 'Depression', 'Trauma', 'Grief and loss', 'Substance use', 'Suicidal ideation', 'Self-harm',
    'Relationship and family conflict', 'Intimate partner violence', 'Abuse and neglect', 'Career concerns',
    'Life transitions', 'Chronic illness and disability', 'Eating concerns', 'Sleep concerns', 'Behavioral concerns',
    'Psychosis', 'Mood instability', 'Acculturation and identity concerns', 'Crisis and disaster response',
  ],
  frameworks: [
    'CBT', 'Person-Centered', 'MBCT', 'TF-CBT', 'Erikson', 'CBT-SP', 'CPT', 'Reality Therapy', 'EFT', 'Attachment',
    'SFBT', 'MI', 'DBT', 'ACT', 'IFS', 'Narrative', 'MCO', 'Existential', 'REBT', 'Gottman', 'Structural family',
    'Somatic', 'Gestalt', 'Krumboltz', 'Adlerian', 'Psychodynamic', 'ERP', 'Biofeedback', 'Bowenian',
  ],
  tools: [
    'DSM-5-TR', 'ICD-11-CM', '988', 'MSE', 'PHQ', 'C-SSRS', 'ACEs', 'BDI', 'BAI', 'ASQ', 'PCL', 'AUDIT', 'MBTI',
    'SDS', 'CAQH', 'genogram', 'EHR', 'AI',
  ],
};

// ── Self-check (runs at require time) ────────────────────────────────────────
(function selfCheck() {
  const w = DOMAINS_2027.reduce((s, d) => s + d.weight, 0);
  if (Math.abs(w - 1) > 0.001) throw new Error('spec2027 self-check: domain weights sum to ' + w + ' (expected 1.00)');
})();

module.exports = { SPEC_2027_SOURCE, DOMAINS_2027, SUPPLEMENTAL_2027 };
