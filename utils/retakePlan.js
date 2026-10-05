// Retake plan for a Pass Guarantee member who did not pass.
//
// The member enters the per-domain results from their score letter
// (earned / possible). We set those beside their PassReady practice accuracy in
// the same domain and sort the domains into:
//   'priority'   — weak on the exam and weak in practice: known gap
//   'blind_spot' — weak on the exam but strong in practice: practice isn't
//                  matching the exam, so change HOW they study it
//   'maintain'   — at or above the bar on the exam
// and spread the 3-month extension (13 weeks) across them, most weeks to the
// biggest exam gaps.
const nceBp = require('./nceBlueprint');

const WEEKS = 13;          // one 3-month extension
const BAR = 70;            // % treated as "on target" for a domain
const STRONG_PRACTICE = 70;

const NCMHCE_DOMAINS = [
  { key: 'counseling', label: 'Counseling Skills and Interventions' },
  { key: 'intake', label: 'Intake, Assessment, and Diagnosis' },
  { key: 'treatment', label: 'Treatment Planning' },
  { key: 'ethics', label: 'Professional Practice and Ethics' },
  { key: 'core', label: 'Core Counseling Attributes' },
];

// Where to work on each domain. NCMHCE pages are the existing study tools;
// the NCE bank lives on /nce.html with per-domain practice.
const NCMHCE_TOOLS = {
  counseling: [['Case simulations', '/'], ['Next Best Step', '/next-best-step.html'], ['Clinical skills', '/skills.html']],
  intake: [['DSM drill', '/dsm.html'], ['Intake practice', '/intake.html'], ['Assess → Next', '/assess-next.html']],
  treatment: [['Decision trees', '/decision-trees.html'], ['Theory review', '/theory.html']],
  ethics: [['Knowledge drill', '/knowledge-drill.html'], ['Timed knowledge exam', '/timed-knowledge-exam.html']],
  core: [['Core attributes quiz', '/core-attributes-quiz.html'], ['Case simulations', '/']],
};

function domainsFor(exam) {
  return exam === 'nce'
    ? nceBp.DOMAINS.map((d) => ({ key: d.key, label: d.label }))
    : NCMHCE_DOMAINS;
}

function toolsFor(exam, key) {
  if (exam === 'nce') return [['NCE practice by domain', '/nce.html'], ['Timed NCE mock exam', '/nce.html']];
  return NCMHCE_TOOLS[key] || [['Case simulations', '/']];
}

// Validates the member's entries against the exam's domain list.
// Returns { scores: { key: { earned, possible } } } or { error }.
function cleanDomainScores(exam, raw) {
  const scores = {};
  if (!raw || typeof raw !== 'object') return { scores };
  for (const d of domainsFor(exam)) {
    const v = raw[d.key];
    if (!v) continue;
    const earned = Number(v.earned), possible = Number(v.possible);
    if (v.earned === '' || v.earned == null || v.possible === '' || v.possible == null) continue;
    if (!Number.isFinite(earned) || !Number.isFinite(possible) || possible <= 0 || earned < 0 || earned > possible) {
      return { error: `Check the ${d.label} score: points earned must be between 0 and points possible.` };
    }
    scores[d.key] = { earned, possible };
  }
  return { scores };
}

// practice: { key: { correct, total } } from the member's PassReady attempts.
function buildRetakePlan(exam, scores, practice) {
  const rows = domainsFor(exam)
    .filter((d) => scores[d.key])
    .map((d) => {
      const s = scores[d.key];
      const examPct = Math.round((s.earned / s.possible) * 100);
      const p = practice[d.key];
      const practicePct = p && p.total >= 5 ? Math.round((p.correct / p.total) * 100) : null;
      let status = 'maintain';
      if (examPct < BAR) status = practicePct != null && practicePct >= STRONG_PRACTICE ? 'blind_spot' : 'priority';
      return { key: d.key, label: d.label, examPct, practicePct, status, gap: Math.max(0, BAR - examPct) };
    })
    .sort((a, b) => a.examPct - b.examPct);
  if (!rows.length) return null;

  // Weeks go to the domains below the bar, in proportion to how far below.
  // One review week is held back for a full timed mock before the retake.
  // If every entered domain is at the bar (a near miss), work the two lowest.
  let focus = rows.filter((r) => r.status !== 'maintain');
  if (!focus.length) focus = rows.slice(0, 2).map((r) => Object.assign(r, { gap: 1 }));
  const studyWeeks = WEEKS - 1;
  const totalGap = focus.reduce((s, r) => s + r.gap, 0);
  focus.forEach((r) => { r.weeks = Math.max(1, Math.round((r.gap / totalGap) * studyWeeks)); });
  // Rounding leaves the total off by a little: add spare weeks to the biggest
  // gap (focus is sorted lowest exam score first), trim extras from the
  // smallest gaps, never below one week each.
  let diff = studyWeeks - focus.reduce((s, r) => s + r.weeks, 0);
  if (diff > 0) focus[0].weeks += diff;
  for (let i = focus.length - 1; diff < 0 && i >= 0; i--) {
    const cut = Math.min(focus[i].weeks - 1, -diff);
    focus[i].weeks -= cut; diff += cut;
  }

  const schedule = [];
  let week = 1;
  focus.forEach((r) => {
    if (r.weeks <= 0) return;
    schedule.push({
      weeks: r.weeks === 1 ? `Week ${week}` : `Weeks ${week}–${week + r.weeks - 1}`,
      key: r.key,
      label: r.label,
      how: r.status === 'blind_spot'
        ? 'Your practice scores here were strong but the exam result was not, so change how you study it: timed sets, full cases, and reviewing why each wrong answer looked right.'
        : 'Rebuild this domain: review the content first, then untimed practice until you are above 70%, then timed sets.',
      tools: toolsFor(exam, r.key).map(([name, href]) => ({ name, href })),
    });
    week += r.weeks;
  });
  schedule.push({
    weeks: `Week ${WEEKS}`,
    key: 'review',
    label: 'Full timed mock exam and review',
    how: 'Take a full timed mock exam, then spend the rest of the week on the questions you missed.',
    tools: exam === 'nce'
      ? [{ name: 'Timed NCE mock exam', href: '/nce.html' }]
      : [{ name: 'Mock exam', href: '/exam.html' }],
  });

  return {
    exam,
    createdAt: new Date(),
    domains: rows,
    schedule,
    blindSpots: rows.filter((r) => r.status === 'blind_spot').map((r) => r.key),
  };
}

module.exports = { domainsFor, cleanDomainScores, buildRetakePlan, WEEKS, BAR };
