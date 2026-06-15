// ============================================================================
// dedup.js — Near-duplicate scenario detection
// NCMHCE Prep Platform | GA Integrated Therapeutic Perspectives LLC
//
// The bank reuses each diagnosis several times by design, so duplication is a
// *scenario* problem, not a diagnosis problem. This module fingerprints each
// case (diagnosis + client profile + decision focus) and scores text overlap,
// so reworded near-duplicates are caught even when titles differ.
//
// Two uses:
//   - generateCases.js rejects a freshly generated case that is too similar to
//     an existing one (and steers generation away from used angles up front).
//   - validateCases.js reports near-duplicate pairs already in a file.
// Pure Node, no external dependencies or API calls.
// ============================================================================

// Clinical "angle" axis — repeated cases of one diagnosis should emphasize
// different decisions. Used to rotate focus and to summarize a case.
const ANGLES = [
  'differential reasoning (confirming the dx vs. look-alikes)',
  'first-line treatment selection',
  'risk and safety management',
  'managing a comorbidity or complicating factor',
  'non-response, relapse, or course over time',
  'an ethical/legal decision in context',
  'level-of-care / referral decision',
  'culturally responsive engagement',
];

function norm(s) { return String(s || '').toLowerCase().replace(/[^a-z0-9 ]+/g, ' ').replace(/\s+/g, ' ').trim(); }
function tokens(s) { return norm(s).split(' ').filter(Boolean); }
function shingles(s, k = 3) {
  const t = tokens(s);
  const out = new Set();
  for (let i = 0; i + k <= t.length; i++) out.add(t.slice(i, i + k).join(' '));
  if (out.size === 0 && t.length) out.add(t.join(' '));
  return out;
}
function jaccard(a, b) {
  if (!a.size || !b.size) return 0;
  let inter = 0;
  for (const x of a) if (b.has(x)) inter++;
  return inter / (a.size + b.size - inter);
}

function caseText(c) {
  const n = c.narrative || {};
  const qs = (c.questions || []).map((q) => q.question).join(' ');
  return [n.intake, n.session1, n.session2, qs].filter(Boolean).join(' ');
}

function ageBand(c) {
  const intake = (c.narrative && c.narrative.intake) || '';
  let age = null;
  let m = intake.match(/,\s*(\d{1,3})\s*[,\.]/); // "Name, 41,"
  if (!m) m = intake.match(/\b(\d{1,2})[\s-]?(?:years?|yo|y\/o|year[- ]old)/i);
  if (!m) m = intake.match(/\bage[d]?\s*(\d{1,3})\b/i);
  if (m) age = parseInt(m[1], 10);
  if (!age || age < 1 || age > 110) return '';
  if (age < 13) return 'child';
  if (age < 18) return 'adolescent';
  if (age < 31) return 'young-adult';
  if (age < 51) return 'adult';
  if (age < 65) return 'older-adult';
  return 'elderly';
}

const SETTINGS = [
  ['school', /\b(school|classroom|teacher|principal|iep)\b/i],
  ['emergency', /\b(emergency room|\ber\b|emergency department)\b/i],
  ['inpatient', /\b(inpatient|hospitaliz|residential|psychiatric unit)\b/i],
  ['telehealth', /\b(telehealth|teletherapy|video session|virtual)\b/i],
  ['military', /\b(veteran|military|deploy|\bva\b|service member)\b/i],
  ['justice', /\b(prison|jail|incarcerat|probation|parole|court-mandated)\b/i],
  ['rural', /\b(rural|small town|farming)\b/i],
  ['workplace', /\b(workplace|coworker|laid off|fired|job loss)\b/i],
  ['outpatient', /\b(outpatient|clinic|private practice)\b/i],
];
function settingOf(c) {
  const t = caseText(c);
  for (const [name, rx] of SETTINGS) if (rx.test(t)) return name;
  return '';
}

function genderOf(c) {
  const intake = (c.narrative && c.narrative.intake) || '';
  const m = intake.match(/\b(female|woman|girl|mother|male|man|boy|father|nonbinary|non-binary|transgender|trans)\b/i);
  if (!m) return '';
  const g = m[1].toLowerCase();
  if (/female|woman|girl|mother/.test(g)) return 'female';
  if (/male|man|boy|father/.test(g)) return 'male';
  return 'gender-diverse';
}

function features(c) {
  return {
    dx: ((c.diagnosis && c.diagnosis.name) || (c.primaryDiagnosis && c.primaryDiagnosis.name) || '').toLowerCase(),
    age: ageBand(c),
    setting: settingOf(c),
    gender: genderOf(c),
  };
}

// Short human-readable scenario summary (fed to the generator as "avoid these").
function scenarioSummary(c) {
  const f = features(c);
  const profile = [f.gender || '?', f.age || '?', f.setting || 'setting n/a'].join(', ');
  return `${c.title || f.dx} — client: ${profile}`;
}

// Similarity between two cases: composite of feature match + text shingle overlap.
function similarity(a, b, aShingles, bShingles) {
  const fa = features(a);
  const fb = features(b);
  let match = 0;
  let total = 0;
  for (const k of ['dx', 'age', 'setting', 'gender']) {
    if (!fa[k] && !fb[k]) continue;
    total++;
    if (fa[k] && fa[k] === fb[k]) match++;
  }
  const featureScore = total ? match / total : 0;
  const textScore = jaccard(aShingles || shingles(caseText(a)), bShingles || shingles(caseText(b)));
  const composite = 0.45 * featureScore + 0.55 * textScore;
  return { composite, featureScore, textScore, sameDx: fa.dx === fb.dx && !!fa.dx };
}

// Is candidate too similar to anything in `existing`?
// Flags on a high composite OR same-diagnosis cases with high text overlap.
function isNearDuplicate(candidate, existing, opts = {}) {
  const threshold = opts.threshold != null ? opts.threshold : 0.55;
  const sameDxText = opts.sameDxText != null ? opts.sameDxText : 0.5;
  const candSh = shingles(caseText(candidate));
  for (const e of existing) {
    if (!e || e.id === candidate.id) continue;
    const s = similarity(candidate, e, candSh);
    if (s.composite >= threshold || (s.sameDx && s.textScore >= sameDxText)) {
      return { dup: true, against: e.id, ...s };
    }
  }
  return { dup: false };
}

// All near-duplicate pairs in a set (for auditing an existing file).
function findNearDuplicates(cases, opts = {}) {
  const threshold = opts.threshold != null ? opts.threshold : 0.55;
  const sameDxText = opts.sameDxText != null ? opts.sameDxText : 0.5;
  const sh = cases.map((c) => shingles(caseText(c)));
  const pairs = [];
  for (let i = 0; i < cases.length; i++) {
    for (let j = i + 1; j < cases.length; j++) {
      const s = similarity(cases[i], cases[j], sh[i], sh[j]);
      if (s.composite >= threshold || (s.sameDx && s.textScore >= sameDxText)) {
        pairs.push({ a: cases[i].id, b: cases[j].id, composite: +s.composite.toFixed(2), text: +s.textScore.toFixed(2), sameDx: s.sameDx });
      }
    }
  }
  return pairs.sort((x, y) => y.composite - x.composite);
}

// Pick a clinical angle for the Nth case of a diagnosis (rotates the focus).
function angleForCount(n) { return ANGLES[n % ANGLES.length]; }

module.exports = {
  ANGLES, angleForCount, scenarioSummary, features,
  similarity, isNearDuplicate, findNearDuplicates, caseText, shingles, jaccard,
};
