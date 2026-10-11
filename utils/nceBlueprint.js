// ============================================================================
// nceBlueprint.js — the NCE content outline the NCE bank, generator and mock
// exams are weighted to. Single source of truth: the gate (utils/nceGate.js),
// the student API (routes/nce.js), the generator (routes/adminNce.js) and the
// study page (public/nce.html via /api/nce/blueprint) all read from here.
//
// WEIGHTING — NBCC's 2023 NCE Content Outline weights the exam by six
// work-behavior DOMAINS (scored item counts below sum to 160). NBCC also says
// items align to the eight CACREP core areas but does not publish counts per
// area, so CACREP is a coverage TAG on each item, never a weight.
//
// FORMAT (current exam, through 2027-06-30): 200 four-option items, 160 scored
// + 40 unscored field-test items, 225 minutes of testing time.
//
// 2027 CHANGE — from 2027-07-01 NBCC moves to 170 items (140 scored + 30
// field-test), THREE options per item, and six new domains (EXAM_2027 below).
// Current items are four-option; 2027 items are three-option and carry
// spec:'2027' (specFor/specMatch below pick the bank per candidate). Verify all figures
// against the current NBCC handbook / content outline before relying on them.
// ============================================================================

const { CUTOVER } = require('./examVersion');
const spec2027 = require('./spec2027');

const SOURCE = 'NBCC NCE Content Outline (2023) and NCE candidate handbook; 2027 spec: NBCC NCE_exam_spec_2027';

const EXAM = {
  key: 'nce',
  name: 'National Counselor Examination (NCE)',
  totalItems: 200,
  scoredItems: 160,
  unscoredItems: 40,
  optionsPerItem: 4,
  minutes: 225,
  breakAfterItem: 100,
};

// Weighted domains. `scoredItems` are NBCC's published counts (sum 160).
const DOMAINS = [
  {
    key: 'ethics', label: 'Professional Practice and Ethics', short: 'Ethics', scoredItems: 19,
    topics: [
      'informed consent and its required elements', 'confidentiality and its limits', 'duty to warn and protect',
      'mandated reporting of abuse and neglect', 'HIPAA and FERPA basics for counselors', 'record keeping and documentation',
      'multiple relationships and boundary crossings', 'scope of practice and competence', 'ACA Code of Ethics structure',
      'NBCC Code of Ethics', 'ethical decision-making models', 'supervision and consultation responsibilities',
      'licensure, credentialing and professional identity', 'counselor advocacy and social justice', 'telehealth and technology ethics',
      'termination and referral', 'counselor impairment and self-care', 'professional organizations and their roles',
    ],
  },
  {
    key: 'intake', label: 'Intake, Assessment, and Diagnosis', short: 'Assessment', scoredItems: 19,
    topics: [
      'intake interview structure', 'mental status examination', 'suicide and violence risk assessment',
      'DSM-5-TR diagnostic structure and specifiers', 'differential diagnosis', 'reliability types', 'validity types',
      'norm- vs criterion-referenced tests', 'standard scores, percentiles and the normal curve', 'standard error of measurement',
      'intelligence and achievement tests', 'personality inventories (MMPI-3, NEO-PI)', 'projective tests',
      'screening instruments (PHQ-9, GAD-7, AUDIT, CAGE)', 'substance use assessment', 'culturally fair assessment',
      'biopsychosocial history', 'collateral information and records',
    ],
  },
  {
    key: 'clinical_focus', label: 'Areas of Clinical Focus', short: 'Clinical Focus', scoredItems: 47,
    topics: [
      'depressive disorders', 'bipolar disorders', 'anxiety disorders', 'trauma- and stressor-related disorders',
      'obsessive-compulsive and related disorders', 'substance use and addictive disorders', 'neurodevelopmental disorders',
      'schizophrenia spectrum disorders', 'personality disorders', 'eating disorders', 'neurocognitive disorders',
      'grief and loss', 'crisis and disaster response', 'intimate partner violence', 'child abuse and neglect',
      'career and vocational concerns', 'couples and family concerns', 'developmental life transitions',
      'aging and older adults', 'chronic illness and disability', 'LGBTQ+ clients and minority stress',
      'acculturation and immigration stress', 'spiritual and religious concerns', 'self-injury', 'sleep-wake concerns',
      'psychopharmacology basics for counselors', 'school and academic concerns', 'military and veteran populations',
    ],
  },
  {
    key: 'treatment', label: 'Treatment Planning', short: 'Treatment Planning', scoredItems: 14,
    topics: [
      'SMART goals and measurable objectives', 'matching level of care to need', 'evidence-based treatment selection',
      'collaborative treatment planning', 'progress monitoring and outcome measures', 'coordination of care and referral',
      'discharge and aftercare planning', 'safety planning', 'stages of change and treatment readiness',
      'program evaluation and needs assessment', 'research design basics', 'statistics used in outcome research',
    ],
  },
  {
    key: 'counseling', label: 'Counseling Skills and Interventions', short: 'Counseling Skills', scoredItems: 48,
    topics: [
      'psychodynamic and psychoanalytic theory', 'Adlerian therapy', 'person-centered therapy', 'existential therapy',
      'gestalt therapy', 'behavior therapy', 'cognitive behavioral therapy', 'rational emotive behavior therapy',
      'reality therapy and choice theory', 'solution-focused brief therapy', 'narrative therapy', 'feminist therapy',
      'motivational interviewing', 'dialectical behavior therapy', 'family systems theories (Bowen, structural, strategic)',
      'group stages and dynamics', 'group leadership skills and therapeutic factors', 'basic attending and listening skills',
      'reflection, paraphrasing and summarizing', 'confrontation and immediacy', 'play therapy', 'crisis intervention models',
      'career development theories (Holland, Super, Krumboltz)', 'human development theories (Erikson, Piaget, Kohlberg)',
      'attachment theory', 'multicultural counseling competencies', 'racial and cultural identity models',
      'trauma-informed interventions', 'termination skills',
    ],
  },
  {
    key: 'core', label: 'Core Counseling Attributes', short: 'Core Attributes', scoredItems: 13,
    topics: [
      'empathy and its levels', 'unconditional positive regard', 'congruence and genuineness', 'therapeutic alliance',
      'cultural humility', 'counselor self-awareness and bias', 'countertransference', 'nonjudgmental stance',
      'warmth and respect', 'awareness of power and privilege in the counseling relationship',
    ],
  },
];

const DOMAIN_KEYS = DOMAINS.map((d) => d.key);
const SCORED_TOTAL = DOMAINS.reduce((s, d) => s + d.scoredItems, 0); // 160
DOMAINS.forEach((d) => { d.weight = d.scoredItems / SCORED_TOTAL; });

// CACREP core areas — coverage tag only (unweighted; see header).
const CACREP_AREAS = [
  { key: 'professional_orientation', label: 'Professional Counseling Orientation and Ethical Practice' },
  { key: 'social_cultural', label: 'Social and Cultural Diversity' },
  { key: 'human_growth', label: 'Human Growth and Development' },
  { key: 'career', label: 'Career Development' },
  { key: 'helping_relationships', label: 'Counseling and Helping Relationships' },
  { key: 'group', label: 'Group Counseling and Group Work' },
  { key: 'assessment', label: 'Assessment and Testing' },
  { key: 'research', label: 'Research and Program Evaluation' },
];
const CACREP_KEYS = CACREP_AREAS.map((a) => a.key);

// 2027 exam (NBCC 2027 specification, served to candidates whose NCE date is on
// or after CUTOVER — see specFor). Domain topics are the spec's verbatim work
// tasks (utils/spec2027.js); scoredItems are NBCC's counts (sum 140).
const SCORED_2027 = {
  professional_development: 21, intake_assessment: 25, treatment_continuity: 21,
  interventions: 28, indirect_care: 17, legal_ethical: 28,
};
const SHORT_2027 = {
  professional_development: 'Prof. Dev. & Self-Awareness', intake_assessment: 'Intake & Assessment',
  treatment_continuity: 'Treatment & Continuity', interventions: 'Interventions',
  indirect_care: 'Indirect Care', legal_ethical: 'Legal & Ethical',
};
const EXAM_2027 = {
  key: 'nce',
  name: 'National Counselor Examination (NCE)',
  effective: '2027-07-01',
  totalItems: 170, scoredItems: 140, unscoredItems: 30, optionsPerItem: 3, minutes: 225,
  breakAfterItem: 85,
  halves: true,
  scale: { min: 100, max: 500, pass: 360 },
  spanishForms: true,
  domains: spec2027.DOMAINS_2027.map((d) => ({
    key: d.nceKey,
    label: d.label,
    short: SHORT_2027[d.nceKey],
    weight: d.weight,
    scoredItems: SCORED_2027[d.nceKey],
    topics: d.subdomains.reduce((all, sd) => all.concat(sd.tasks), []),
  })),
};
const DOMAIN_KEYS_2027 = EXAM_2027.domains.map((d) => d.key);

// Bank target: enough depth that a learner can take several full mocks without
// heavy repetition. Per-domain targets follow the exam weights.
const BANK_TARGET = 1600;

// Split `total` across `domains` by weight, largest-remainder so it sums exactly.
function apportionFor(domains, total) {
  const raw = domains.map((d) => ({ key: d.key, exact: total * d.weight }));
  const out = {};
  let used = 0;
  raw.forEach((r) => { out[r.key] = Math.floor(r.exact); used += out[r.key]; });
  raw.slice().sort((a, b) => (b.exact % 1) - (a.exact % 1))
    .slice(0, total - used).forEach((r) => { out[r.key]++; });
  return out;
}

function apportion(total) { return apportionFor(DOMAINS, total); }

function bankTargets() { return apportion(BANK_TARGET); }

// Mock exam sizes. 'full' is the real exam (scored counts are NBCC's exact
// numbers, unscored are spread by weight); shorter forms keep the same ratio of
// scored:unscored at 4:1 and the same per-item time.
const MOCK_SIZES = { full: 200, 100: 100, 50: 50 };

function mockPlan(size, spec = 'current') {
  if (spec === '2027') return mockPlan2027(size);
  const n = MOCK_SIZES[size] || MOCK_SIZES.full;
  const unscored = Math.round(n * (EXAM.unscoredItems / EXAM.totalItems));
  // Scored items follow the weights exactly (NBCC's own counts on the full
  // form); unscored items are spread by weight on top, so the scored score is
  // always a true blueprint sample.
  let scoredPerDomain;
  if (n === EXAM.totalItems) {
    scoredPerDomain = {};
    DOMAINS.forEach((d) => { scoredPerDomain[d.key] = d.scoredItems; });
  } else {
    scoredPerDomain = apportion(n - unscored);
  }
  const unscoredPerDomain = apportion(unscored);
  const perDomain = {};
  DOMAINS.forEach((d) => { perDomain[d.key] = scoredPerDomain[d.key] + unscoredPerDomain[d.key]; });
  return {
    size: n,
    unscored,
    minutes: Math.round(EXAM.minutes * (n / EXAM.totalItems)),
    perDomain,
    scoredPerDomain,
    unscoredPerDomain,
  };
}

// 2027 mock sizes: the full 170-item form, two halves of it, and a 50-item
// quick form. Shorter forms keep the 140:30 scored:unscored ratio and the same
// per-item time; every form splits into two halves at breakAfterItem.
const MOCK_SIZES_2027 = { full: 170, 85: 85, 50: 50 };

function mockPlan2027(size) {
  const n = MOCK_SIZES_2027[size] || MOCK_SIZES_2027.full;
  const doms = EXAM_2027.domains;
  const unscored = Math.round(n * (EXAM_2027.unscoredItems / EXAM_2027.totalItems));
  let scoredPerDomain;
  if (n === EXAM_2027.totalItems) {
    scoredPerDomain = {};
    doms.forEach((d) => { scoredPerDomain[d.key] = d.scoredItems; });
  } else {
    scoredPerDomain = apportionFor(doms, n - unscored);
  }
  const unscoredPerDomain = apportionFor(doms, unscored);
  const perDomain = {};
  doms.forEach((d) => { perDomain[d.key] = scoredPerDomain[d.key] + unscoredPerDomain[d.key]; });
  return {
    size: n,
    unscored,
    minutes: Math.round(EXAM_2027.minutes * (n / EXAM_2027.totalItems)),
    perDomain,
    scoredPerDomain,
    unscoredPerDomain,
    breakAfterItem: Math.ceil(n / 2),
    halves: true,
    optionsPerItem: EXAM_2027.optionsPerItem,
  };
}

// Which outline a candidate studies: '2027' when their NCE date is on or after
// the cutover, else 'current' (no date → current). Same rule as
// utils/examVersion.examKeyFor uses for the NCMHCE.
function specFor(nceExamDate) {
  if (!nceExamDate) return 'current';
  const d = new Date(nceExamDate);
  return !isNaN(d.getTime()) && d >= CUTOVER ? '2027' : 'current';
}

// The blueprint for one spec, in one shape, so callers don't branch.
function blueprintFor(spec) {
  if (spec === '2027') return { spec: '2027', EXAM: EXAM_2027, DOMAINS: EXAM_2027.domains, DOMAIN_KEYS: DOMAIN_KEYS_2027 };
  return { spec: 'current', EXAM, DOMAINS, DOMAIN_KEYS };
}

// Mongo filter fragment for NceItem by spec. Items written before the 2027
// work have no `spec` field, so 'current' is "anything not 2027" — no migration.
function specMatch(spec) {
  return spec === '2027' ? { spec: '2027' } : { spec: { $ne: '2027' } };
}

// Bank targets for a spec: BANK_TARGET apportioned by that spec's weights.
function bankTargetsFor(spec) {
  return spec === '2027' ? apportionFor(EXAM_2027.domains, BANK_TARGET) : bankTargets();
}

// ── Self-check (runs at require time) ────────────────────────────────────────
(function selfCheck() {
  const s27 = EXAM_2027.domains.reduce((s, d) => s + d.scoredItems, 0);
  if (s27 !== EXAM_2027.scoredItems) throw new Error('nceBlueprint self-check: 2027 scoredItems sum to ' + s27 + ' (expected 140)');
})();

module.exports = {
  SOURCE, EXAM, EXAM_2027, DOMAINS, DOMAIN_KEYS, CACREP_AREAS, CACREP_KEYS,
  BANK_TARGET, apportion, bankTargets, mockPlan, MOCK_SIZES,
  DOMAIN_KEYS_2027, MOCK_SIZES_2027, apportionFor, specFor, blueprintFor, specMatch, bankTargetsFor,
};
