// ============================================================================
// blueprint2027.js — 2027 NCMHCE specification blueprint
// NCMHCE Prep Platform | GA Integrated Therapeutic Perspectives LLC
//
// Source of truth: NBCC "NCMHCE Examination Specifications, Effective July 1, 2027"
//   6 domains, 10 case studies, 9–15 questions per case, 225 minutes.
//
// Domain keys are intentionally different from the current-outline keys so the
// two pipelines can coexist without ambiguity.
// ============================================================================

// Domain keys for the 2027 specification
const DOMAINS_2027 = ['profdev', 'assess', 'planning', 'interventions', 'indirect', 'legal'];

// Weights from the NBCC 2027 content outline
const DOMAIN_WEIGHTS_2027 = {
  profdev:       0.15,
  assess:        0.18,
  planning:      0.15,
  interventions: 0.20,
  indirect:      0.12,
  legal:         0.20,
};

const DOMAIN_LABELS_2027 = {
  profdev:       'Professional Development & Practice',
  assess:        'Assessment & Diagnosis',
  planning:      'Treatment Planning',
  interventions: 'Counseling Interventions',
  indirect:      'Indirect Client Services',
  legal:         'Legal, Ethical & Professional Standards',
};

// Section → domains mapping for 2027 spec.
// Cases unfold across three ordered sections (intake → session1 → session2).
//   intake   (Assessment & Conceptualization): assess, profdev
//   session1 (Treatment Planning):             planning, indirect
//   session2 (Counseling & Ethics):            interventions, legal
const DOMAIN_SECTION_2027 = {
  assess:        'intake',
  profdev:       'intake',
  planning:      'session1',
  indirect:      'session1',
  interventions: 'session2',
  legal:         'session2',
};

// Per-domain work-task topics drawn from the NBCC 2027 specification.
// Used in the generation prompt to anchor questions to real exam content.
const WORK_TASKS_2027 = {
  profdev: [
    'Maintaining professional identity and ongoing clinical competence',
    'Self-care and recognizing countertransference',
    'Supervision and consultation: when and how to seek it',
    'Scope of practice and referral decisions',
    'Cultural humility and multicultural counseling competencies',
  ],
  assess: [
    'Conducting a clinical intake and gathering biopsychosocial history',
    'Differential diagnosis using DSM-5-TR criteria and rule-outs',
    'Selecting and interpreting standardized assessment tools',
    'Suicide and self-harm risk assessment (C-SSRS, safety planning)',
    'Substance use screening and level-of-care determination (ASAM)',
    'Trauma-informed assessment and trauma history gathering',
  ],
  planning: [
    'Formulating measurable treatment goals and objectives',
    'Selecting evidence-based modalities matched to diagnosis and client factors',
    'Level-of-care and step-down planning',
    'Integrating collateral information into the treatment plan',
    'Collaborative treatment planning with client and treatment team',
  ],
  interventions: [
    'Applying CBT techniques: thought records, behavioral activation, exposure',
    'Motivational interviewing: OARS, ambivalence, change talk',
    'Trauma-focused interventions: CPT, EMDR framework, trauma processing',
    'Crisis intervention and de-escalation',
    'Group counseling facilitation and process',
    'Termination planning and relapse prevention',
  ],
  indirect: [
    'Case management and community resource coordination',
    'Consultation and interdisciplinary collaboration',
    'Psychoeducation delivery to clients and families',
    'Documentation: progress notes, treatment plans, reports',
    'Telehealth and technology-assisted service delivery',
  ],
  legal: [
    'Confidentiality and its limits: mandated reporting, duty to warn/protect',
    'Informed consent: elements, process, and special populations',
    'HIPAA, privacy regulations, and records management',
    'Boundaries, dual relationships, and professional ethics',
    'Counseling Compact and jurisdictional licensure requirements',
    'Responding to subpoenas and legal/court-related requests',
  ],
};

// ============================================================================
// DOMAIN_PLANS_2027
//
// 10 rotation plans × 13 questions each.  Over 10 plans the per-domain totals
// are exactly:
//   profdev:20  assess:23  planning:19  interventions:26  indirect:16  legal:26
//   total: 130 = 10 × 13
//
// Each plan lists items in section order: intake first, then session1, then
// session2.  The section field maps directly via DOMAIN_SECTION_2027.
// Per-section counts in every plan satisfy the examDepth gate minimum of ≥ 3.
//
// Plan composition summary (intake|session1|session2):
//   Plans 0-2  (type b): 5|3|5  — intake=5(pf:2,as:3), session1=3, session2=5
//   Plans 3-7  (type c): 4|4|5  — intake=4(pf:2,as:2), session1=4(pl:2,id:2), session2=5
//   Plans 8-9  (type d): 4|3|6  — intake=4(pf:2,as:2), session1=3(pl:2,id:1), session2=6
// ============================================================================

const DOMAIN_PLANS_2027 = [
  // Plan 0 (type b) — intake:5, session1:3, session2:5
  // pf:2 as:3 | pl:2 id:1 | int:3 lg:2
  [
    { section: 'intake',   domain: 'profdev' },
    { section: 'intake',   domain: 'profdev' },
    { section: 'intake',   domain: 'assess' },
    { section: 'intake',   domain: 'assess' },
    { section: 'intake',   domain: 'assess' },
    { section: 'session1', domain: 'planning' },
    { section: 'session1', domain: 'planning' },
    { section: 'session1', domain: 'indirect' },
    { section: 'session2', domain: 'interventions' },
    { section: 'session2', domain: 'interventions' },
    { section: 'session2', domain: 'interventions' },
    { section: 'session2', domain: 'legal' },
    { section: 'session2', domain: 'legal' },
  ],
  // Plan 1 (type b) — intake:5, session1:3, session2:5
  // pf:2 as:3 | pl:2 id:1 | int:3 lg:2
  [
    { section: 'intake',   domain: 'assess' },
    { section: 'intake',   domain: 'assess' },
    { section: 'intake',   domain: 'assess' },
    { section: 'intake',   domain: 'profdev' },
    { section: 'intake',   domain: 'profdev' },
    { section: 'session1', domain: 'indirect' },
    { section: 'session1', domain: 'planning' },
    { section: 'session1', domain: 'planning' },
    { section: 'session2', domain: 'legal' },
    { section: 'session2', domain: 'interventions' },
    { section: 'session2', domain: 'interventions' },
    { section: 'session2', domain: 'legal' },
    { section: 'session2', domain: 'interventions' },
  ],
  // Plan 2 (type b) — intake:5, session1:3, session2:5
  // pf:2 as:3 | pl:1 id:2 | int:2 lg:3
  [
    { section: 'intake',   domain: 'assess' },
    { section: 'intake',   domain: 'profdev' },
    { section: 'intake',   domain: 'assess' },
    { section: 'intake',   domain: 'profdev' },
    { section: 'intake',   domain: 'assess' },
    { section: 'session1', domain: 'indirect' },
    { section: 'session1', domain: 'indirect' },
    { section: 'session1', domain: 'planning' },
    { section: 'session2', domain: 'legal' },
    { section: 'session2', domain: 'interventions' },
    { section: 'session2', domain: 'interventions' },
    { section: 'session2', domain: 'legal' },
    { section: 'session2', domain: 'legal' },
  ],
  // Plan 3 (type c) — intake:4, session1:4, session2:5
  // pf:2 as:2 | pl:2 id:2 | int:3 lg:2
  [
    { section: 'intake',   domain: 'profdev' },
    { section: 'intake',   domain: 'assess' },
    { section: 'intake',   domain: 'profdev' },
    { section: 'intake',   domain: 'assess' },
    { section: 'session1', domain: 'planning' },
    { section: 'session1', domain: 'indirect' },
    { section: 'session1', domain: 'planning' },
    { section: 'session1', domain: 'indirect' },
    { section: 'session2', domain: 'interventions' },
    { section: 'session2', domain: 'interventions' },
    { section: 'session2', domain: 'interventions' },
    { section: 'session2', domain: 'legal' },
    { section: 'session2', domain: 'legal' },
  ],
  // Plan 4 (type c) — intake:4, session1:4, session2:5
  // pf:2 as:2 | pl:2 id:2 | int:3 lg:2
  [
    { section: 'intake',   domain: 'assess' },
    { section: 'intake',   domain: 'assess' },
    { section: 'intake',   domain: 'profdev' },
    { section: 'intake',   domain: 'profdev' },
    { section: 'session1', domain: 'planning' },
    { section: 'session1', domain: 'planning' },
    { section: 'session1', domain: 'indirect' },
    { section: 'session1', domain: 'indirect' },
    { section: 'session2', domain: 'interventions' },
    { section: 'session2', domain: 'interventions' },
    { section: 'session2', domain: 'interventions' },
    { section: 'session2', domain: 'legal' },
    { section: 'session2', domain: 'legal' },
  ],
  // Plan 5 (type c) — intake:4, session1:4, session2:5
  // pf:2 as:2 | pl:2 id:2 | int:2 lg:3
  [
    { section: 'intake',   domain: 'profdev' },
    { section: 'intake',   domain: 'assess' },
    { section: 'intake',   domain: 'assess' },
    { section: 'intake',   domain: 'profdev' },
    { section: 'session1', domain: 'indirect' },
    { section: 'session1', domain: 'planning' },
    { section: 'session1', domain: 'indirect' },
    { section: 'session1', domain: 'planning' },
    { section: 'session2', domain: 'interventions' },
    { section: 'session2', domain: 'interventions' },
    { section: 'session2', domain: 'legal' },
    { section: 'session2', domain: 'legal' },
    { section: 'session2', domain: 'legal' },
  ],
  // Plan 6 (type c) — intake:4, session1:4, session2:5
  // pf:2 as:2 | pl:2 id:2 | int:2 lg:3
  [
    { section: 'intake',   domain: 'assess' },
    { section: 'intake',   domain: 'profdev' },
    { section: 'intake',   domain: 'assess' },
    { section: 'intake',   domain: 'profdev' },
    { section: 'session1', domain: 'planning' },
    { section: 'session1', domain: 'indirect' },
    { section: 'session1', domain: 'indirect' },
    { section: 'session1', domain: 'planning' },
    { section: 'session2', domain: 'legal' },
    { section: 'session2', domain: 'interventions' },
    { section: 'session2', domain: 'interventions' },
    { section: 'session2', domain: 'legal' },
    { section: 'session2', domain: 'legal' },
  ],
  // Plan 7 (type c) — intake:4, session1:4, session2:5
  // pf:2 as:2 | pl:2 id:2 | int:2 lg:3
  [
    { section: 'intake',   domain: 'profdev' },
    { section: 'intake',   domain: 'profdev' },
    { section: 'intake',   domain: 'assess' },
    { section: 'intake',   domain: 'assess' },
    { section: 'session1', domain: 'indirect' },
    { section: 'session1', domain: 'indirect' },
    { section: 'session1', domain: 'planning' },
    { section: 'session1', domain: 'planning' },
    { section: 'session2', domain: 'legal' },
    { section: 'session2', domain: 'legal' },
    { section: 'session2', domain: 'interventions' },
    { section: 'session2', domain: 'legal' },
    { section: 'session2', domain: 'interventions' },
  ],
  // Plan 8 (type d) — intake:4, session1:3, session2:6
  // pf:2 as:2 | pl:2 id:1 | int:3 lg:3
  [
    { section: 'intake',   domain: 'profdev' },
    { section: 'intake',   domain: 'assess' },
    { section: 'intake',   domain: 'profdev' },
    { section: 'intake',   domain: 'assess' },
    { section: 'session1', domain: 'planning' },
    { section: 'session1', domain: 'planning' },
    { section: 'session1', domain: 'indirect' },
    { section: 'session2', domain: 'interventions' },
    { section: 'session2', domain: 'interventions' },
    { section: 'session2', domain: 'interventions' },
    { section: 'session2', domain: 'legal' },
    { section: 'session2', domain: 'legal' },
    { section: 'session2', domain: 'legal' },
  ],
  // Plan 9 (type d) — intake:4, session1:3, session2:6
  // pf:2 as:2 | pl:2 id:1 | int:3 lg:3
  [
    { section: 'intake',   domain: 'assess' },
    { section: 'intake',   domain: 'profdev' },
    { section: 'intake',   domain: 'assess' },
    { section: 'intake',   domain: 'profdev' },
    { section: 'session1', domain: 'indirect' },
    { section: 'session1', domain: 'planning' },
    { section: 'session1', domain: 'planning' },
    { section: 'session2', domain: 'legal' },
    { section: 'session2', domain: 'legal' },
    { section: 'session2', domain: 'legal' },
    { section: 'session2', domain: 'interventions' },
    { section: 'session2', domain: 'interventions' },
    { section: 'session2', domain: 'interventions' },
  ],
];

// Return the plan for case number n (0-indexed, wraps every 10).
function nextPlan2027(n) {
  return DOMAIN_PLANS_2027[n % DOMAIN_PLANS_2027.length];
}

// ── Self-check (runs at require time) ────────────────────────────────────────
// Verifies that DOMAIN_PLANS_2027 produces the exact per-domain totals the
// NBCC 2027 spec requires over 10 plans. Throws on mismatch so a bad edit
// fails loudly at startup instead of silently generating wrong cases.
(function selfCheck() {
  const EXPECTED = { profdev: 20, assess: 23, planning: 19, interventions: 26, indirect: 16, legal: 26 };
  const totals = {};
  DOMAINS_2027.forEach((d) => (totals[d] = 0));

  if (DOMAIN_PLANS_2027.length !== 10) {
    throw new Error('blueprint2027 self-check: expected 10 plans, got ' + DOMAIN_PLANS_2027.length);
  }

  DOMAIN_PLANS_2027.forEach((plan, pi) => {
    if (plan.length !== 13) {
      throw new Error('blueprint2027 self-check: plan ' + pi + ' has ' + plan.length + ' items (expected 13)');
    }
    // Verify section order: intake → session1 → session2 (non-decreasing)
    const sectionOrder = { intake: 0, session1: 1, session2: 2 };
    let last = -1;
    plan.forEach((item, ii) => {
      const idx = sectionOrder[item.section];
      if (idx === undefined) {
        throw new Error('blueprint2027 self-check: plan ' + pi + ' item ' + ii + ' has unknown section "' + item.section + '"');
      }
      if (idx < last) {
        throw new Error('blueprint2027 self-check: plan ' + pi + ' item ' + ii + ' breaks section order');
      }
      last = idx;
    });
    // Verify per-section minimums [intake≥3, session1≥3, session2≥3] (gate requires this)
    const secCounts = { intake: 0, session1: 0, session2: 0 };
    plan.forEach((item) => { secCounts[item.section] = (secCounts[item.section] || 0) + 1; });
    if (secCounts.intake < 3) {
      throw new Error('blueprint2027 self-check: plan ' + pi + ' intake has only ' + secCounts.intake + ' item(s) (min 3)');
    }
    if (secCounts.session1 < 3) {
      throw new Error('blueprint2027 self-check: plan ' + pi + ' session1 has only ' + secCounts.session1 + ' item(s) (min 3)');
    }
    if (secCounts.session2 < 3) {
      throw new Error('blueprint2027 self-check: plan ' + pi + ' session2 has only ' + secCounts.session2 + ' item(s) (min 3)');
    }

    plan.forEach((item) => { totals[item.domain] += 1; });
  });

  Object.entries(EXPECTED).forEach(([d, exp]) => {
    if (totals[d] !== exp) {
      throw new Error('blueprint2027 self-check: domain "' + d + '" total = ' + totals[d] + ' (expected ' + exp + ')');
    }
  });
})();

module.exports = {
  DOMAINS_2027,
  DOMAIN_WEIGHTS_2027,
  DOMAIN_LABELS_2027,
  DOMAIN_SECTION_2027,
  WORK_TASKS_2027,
  DOMAIN_PLANS_2027,
  nextPlan2027,
};
