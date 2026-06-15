// ============================================================================
// blueprint.js — NCMHCE diversity matrix for a 200-case bank
//
// Targets sum to 200 and are weighted toward high-prevalence, high-yield
// clinical content. Each category lists representative DSM-5 diagnoses (with
// ICD-10 codes) the generator can draw from, and a difficulty mix so the bank
// isn't all-easy or all-hard. Helpers tally existing coverage and compute the
// next diagnoses to generate to fill gaps.
// ============================================================================

const CATEGORIES = [
  { category: 'Depressive', target: 20, difficulty: { easy: 5, medium: 10, hard: 5 }, diagnoses: [
    { name: 'Major Depressive Disorder, Moderate', code: 'F33.1' },
    { name: 'Major Depressive Disorder, Severe', code: 'F33.2' },
    { name: 'Persistent Depressive Disorder', code: 'F34.1' },
    { name: 'Premenstrual Dysphoric Disorder', code: 'F32.81' },
    { name: 'Disruptive Mood Dysregulation Disorder', code: 'F34.81' },
    { name: 'Major Depressive Disorder, with Peripartum Onset', code: 'F53.0' },
  ]},
  { category: 'Anxiety', target: 20, difficulty: { easy: 6, medium: 9, hard: 5 }, diagnoses: [
    { name: 'Generalized Anxiety Disorder', code: 'F41.1' },
    { name: 'Panic Disorder', code: 'F41.0' },
    { name: 'Social Anxiety Disorder', code: 'F40.10' },
    { name: 'Specific Phobia', code: 'F40.218' },
    { name: 'Agoraphobia', code: 'F40.00' },
    { name: 'Separation Anxiety Disorder', code: 'F93.0' },
    { name: 'Selective Mutism', code: 'F94.0' },
  ]},
  { category: 'Trauma', target: 18, difficulty: { easy: 4, medium: 9, hard: 5 }, diagnoses: [
    { name: 'Posttraumatic Stress Disorder', code: 'F43.10' },
    { name: 'Acute Stress Disorder', code: 'F43.0' },
    { name: 'Adjustment Disorder, with Mixed Anxiety and Depressed Mood', code: 'F43.23' },
    { name: 'Adjustment Disorder, with Depressed Mood', code: 'F43.21' },
    { name: 'Reactive Attachment Disorder', code: 'F94.1' },
    { name: 'Prolonged Grief Disorder', code: 'F43.81' },
  ]},
  { category: 'Substance', target: 16, difficulty: { easy: 4, medium: 8, hard: 4 }, diagnoses: [
    { name: 'Alcohol Use Disorder, Moderate', code: 'F10.20' },
    { name: 'Alcohol Use Disorder, Severe', code: 'F10.20' },
    { name: 'Alcohol Withdrawal', code: 'F10.230' },
    { name: 'Opioid Use Disorder, Severe', code: 'F11.20' },
    { name: 'Opioid Withdrawal', code: 'F11.23' },
    { name: 'Stimulant Use Disorder (Cocaine)', code: 'F14.20' },
    { name: 'Stimulant Intoxication', code: 'F14.129' },
    { name: 'Cannabis Use Disorder, Moderate', code: 'F12.20' },
    { name: 'Sedative Use Disorder', code: 'F13.20' },
    { name: 'Tobacco Use Disorder, Moderate', code: 'F17.200' },
    { name: 'Gambling Disorder', code: 'F63.0' },
  ]},
  { category: 'Personality', target: 16, difficulty: { easy: 2, medium: 8, hard: 6 }, diagnoses: [
    { name: 'Borderline Personality Disorder', code: 'F60.3' },
    { name: 'Narcissistic Personality Disorder', code: 'F60.81' },
    { name: 'Antisocial Personality Disorder', code: 'F60.2' },
    { name: 'Avoidant Personality Disorder', code: 'F60.6' },
    { name: 'Dependent Personality Disorder', code: 'F60.7' },
    { name: 'Obsessive-Compulsive Personality Disorder', code: 'F60.5' },
    { name: 'Schizotypal Personality Disorder', code: 'F21' },
    { name: 'Paranoid Personality Disorder', code: 'F60.0' },
    { name: 'Schizoid Personality Disorder', code: 'F60.1' },
    { name: 'Histrionic Personality Disorder', code: 'F60.4' },
  ]},
  { category: 'Bipolar', target: 12, difficulty: { easy: 2, medium: 6, hard: 4 }, diagnoses: [
    { name: 'Bipolar I Disorder, Current Episode Manic', code: 'F31.13' },
    { name: 'Bipolar I Disorder, Current Episode Depressed', code: 'F31.31' },
    { name: 'Bipolar II Disorder', code: 'F31.81' },
    { name: 'Cyclothymic Disorder', code: 'F34.0' },
  ]},
  { category: 'Neurodevelopmental', target: 12, difficulty: { easy: 4, medium: 6, hard: 2 }, diagnoses: [
    { name: 'Attention-Deficit/Hyperactivity Disorder, Combined', code: 'F90.2' },
    { name: 'Attention-Deficit/Hyperactivity Disorder, Inattentive', code: 'F90.0' },
    { name: 'Autism Spectrum Disorder', code: 'F84.0' },
    { name: 'Specific Learning Disorder', code: 'F81.0' },
    { name: 'Intellectual Developmental Disorder, Mild', code: 'F70' },
    { name: 'Tourette\u2019s Disorder', code: 'F95.2' },
  ]},
  { category: 'Neurocognitive', target: 6, difficulty: { easy: 1, medium: 3, hard: 2 }, diagnoses: [
    { name: 'Delirium', code: 'F05' },
    { name: 'Major Neurocognitive Disorder due to Alzheimer\u2019s Disease', code: 'F02.80' },
    { name: 'Major Neurocognitive Disorder due to Vascular Disease', code: 'F01.50' },
    { name: 'Mild Neurocognitive Disorder', code: 'G31.84' },
  ]},
  { category: 'OCD-Related', target: 10, difficulty: { easy: 3, medium: 5, hard: 2 }, diagnoses: [
    { name: 'Obsessive-Compulsive Disorder', code: 'F42.2' },
    { name: 'Body Dysmorphic Disorder', code: 'F45.22' },
    { name: 'Hoarding Disorder', code: 'F42.3' },
    { name: 'Trichotillomania', code: 'F63.3' },
    { name: 'Excoriation Disorder', code: 'L98.1' },
  ]},
  { category: 'Psychotic', target: 10, difficulty: { easy: 1, medium: 4, hard: 5 }, diagnoses: [
    { name: 'Schizophrenia', code: 'F20.9' },
    { name: 'Schizoaffective Disorder, Bipolar Type', code: 'F25.0' },
    { name: 'Schizophreniform Disorder', code: 'F20.81' },
    { name: 'Brief Psychotic Disorder', code: 'F23' },
    { name: 'Delusional Disorder', code: 'F22' },
  ]},
  { category: 'Eating', target: 10, difficulty: { easy: 2, medium: 5, hard: 3 }, diagnoses: [
    { name: 'Anorexia Nervosa, Restricting Type', code: 'F50.01' },
    { name: 'Bulimia Nervosa', code: 'F50.2' },
    { name: 'Binge-Eating Disorder', code: 'F50.81' },
    { name: 'Avoidant/Restrictive Food Intake Disorder', code: 'F50.82' },
  ]},
  { category: 'Crisis', target: 10, difficulty: { easy: 1, medium: 4, hard: 5 }, diagnoses: [
    { name: 'Suicidal Behavior / Acute Risk', code: 'R45.851' },
    { name: 'Nonsuicidal Self-Injury', code: 'R45.88' },
    { name: 'Acute Crisis / Decompensation', code: 'F43.0' },
    { name: 'Homicidal Ideation / Threat Assessment', code: 'R45.850' },
  ]},
  { category: 'Disruptive', target: 8, difficulty: { easy: 2, medium: 4, hard: 2 }, diagnoses: [
    { name: 'Oppositional Defiant Disorder', code: 'F91.3' },
    { name: 'Conduct Disorder, Adolescent-Onset Type', code: 'F91.2' },
    { name: 'Intermittent Explosive Disorder', code: 'F63.81' },
  ]},
  { category: 'Somatic', target: 8, difficulty: { easy: 2, medium: 4, hard: 2 }, diagnoses: [
    { name: 'Somatic Symptom Disorder', code: 'F45.1' },
    { name: 'Illness Anxiety Disorder', code: 'F45.21' },
    { name: 'Functional Neurological Symptom Disorder', code: 'F44.4' },
    { name: 'Factitious Disorder', code: 'F68.10' },
  ]},
  { category: 'Dissociative', target: 6, difficulty: { easy: 1, medium: 2, hard: 3 }, diagnoses: [
    { name: 'Dissociative Identity Disorder', code: 'F44.81' },
    { name: 'Dissociative Amnesia', code: 'F44.0' },
    { name: 'Depersonalization/Derealization Disorder', code: 'F48.1' },
  ]},
  { category: 'Sleep', target: 6, difficulty: { easy: 3, medium: 2, hard: 1 }, diagnoses: [
    { name: 'Insomnia Disorder, Chronic', code: 'F51.01' },
    { name: 'Nightmare Disorder', code: 'F51.5' },
    { name: 'Hypersomnolence Disorder', code: 'F51.11' },
  ]},
  { category: 'Sexual-Gender', target: 6, difficulty: { easy: 1, medium: 3, hard: 2 }, diagnoses: [
    { name: 'Gender Dysphoria in Adolescents/Adults', code: 'F64.0' },
    { name: 'Female Sexual Interest/Arousal Disorder', code: 'F52.22' },
    { name: 'Erectile Disorder', code: 'F52.21' },
  ]},
  { category: 'Ethics', target: 6, difficulty: { easy: 1, medium: 3, hard: 2 }, diagnoses: [
    { name: 'Confidentiality / Duty-to-Warn Dilemma', code: 'Z65.3' },
    { name: 'Boundary / Dual-Relationship Dilemma', code: 'Z65.8' },
    { name: 'Mandated Reporting Decision', code: 'Z65.8' },
    { name: 'Informed Consent / Competence Dilemma', code: 'Z65.8' },
  ]},
];

const TOTAL_TARGET = CATEGORIES.reduce((s, c) => s + c.target, 0); // 200
const CATEGORY_NAMES = CATEGORIES.map((c) => c.category);

// Map legacy/loose category labels (from cases 1-70) onto blueprint categories.
const CATEGORY_ALIASES = {
  Mood: 'Depressive', Depression: 'Depressive',
  'Bipolar & Related': 'Bipolar',
  'Anxiety Disorders': 'Anxiety',
  PTSD: 'Trauma', 'Trauma & Stressor': 'Trauma', Stressor: 'Trauma', Adjustment: 'Trauma',
  'Substance Use': 'Substance', Addiction: 'Substance',
  'Personality Disorders': 'Personality',
  OCD: 'OCD-Related', 'Obsessive-Compulsive': 'OCD-Related',
  Schizophrenia: 'Psychotic', 'Psychotic Disorders': 'Psychotic',
  'Feeding & Eating': 'Eating', 'Eating Disorders': 'Eating',
  ADHD: 'Neurodevelopmental', Autism: 'Neurodevelopmental',
  'Conduct': 'Disruptive', 'Impulse-Control': 'Disruptive',
  'Sleep-Wake': 'Sleep',
  Dementia: 'Neurocognitive', Delirium: 'Neurocognitive', 'Cognitive': 'Neurocognitive', NCD: 'Neurocognitive',
};

function canonicalCategory(label) {
  if (!label) return null;
  if (CATEGORY_NAMES.includes(label)) return label;
  return CATEGORY_ALIASES[label] || null;
}

// Tally existing cases by blueprint category. Returns { category: count }.
function tally(existingCases) {
  const counts = Object.fromEntries(CATEGORY_NAMES.map((c) => [c, 0]));
  let unmatched = 0;
  for (const c of existingCases || []) {
    const cat = canonicalCategory(c && c.category);
    if (cat) counts[cat]++; else unmatched++;
  }
  return { counts, unmatched, total: (existingCases || []).length };
}

// Gaps per category to hit target. Returns array sorted by largest gap first.
function gaps(existingCases) {
  const { counts } = tally(existingCases);
  return CATEGORIES
    .map((c) => ({ category: c.category, target: c.target, have: counts[c.category], need: Math.max(0, c.target - counts[c.category]) }))
    .sort((a, b) => b.need - a.need);
}

// Produce the next N (category, diagnosis, difficulty) generation targets that
// fill the largest gaps, round-robin across categories and rotating diagnoses.
function nextTargets(existingCases, n) {
  const g = gaps(existingCases).filter((x) => x.need > 0);
  const remaining = Object.fromEntries(g.map((x) => [x.category, x.need]));
  const diagIdx = Object.fromEntries(CATEGORY_NAMES.map((c) => [c, 0]));
  const diffPool = {};
  for (const c of CATEGORIES) {
    diffPool[c.category] = [];
    for (const [d, k] of Object.entries(c.difficulty)) for (let i = 0; i < k; i++) diffPool[c.category].push(d);
  }
  const out = [];
  let guard = 0;
  while (out.length < n && Object.values(remaining).some((v) => v > 0) && guard++ < n * 50) {
    for (const c of CATEGORIES) {
      if (out.length >= n) break;
      if (!remaining[c.category] || remaining[c.category] <= 0) continue;
      const dx = c.diagnoses[diagIdx[c.category] % c.diagnoses.length];
      diagIdx[c.category]++;
      const pool = diffPool[c.category];
      const difficulty = pool[(c.target - remaining[c.category]) % pool.length] || 'medium';
      out.push({ category: c.category, diagnosis: dx, difficulty });
      remaining[c.category]--;
    }
  }
  return out;
}

module.exports = {
  CATEGORIES, CATEGORY_NAMES, TOTAL_TARGET, CATEGORY_ALIASES,
  canonicalCategory, tally, gaps, nextTargets,
};
