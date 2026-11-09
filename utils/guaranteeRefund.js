// Access Extensions Until You Pass refund option (NCMHCE and NCE). A member who does not pass can
// take either the 3-month extension or a refund — never both — if they did the
// work the guarantee asks for. Terms: guarantee.html and policies.html#guarantee.
//
// The checks run twice: when the member submits a non-passing result and picks
// the refund (routes/payment.js POST /score-report), and again when an admin
// approves it, since practice can't change in between but the rules might.
const Attempt = require('../models/Attempt');
const { getNceExam } = require('./nceExam');
const { computeNcmhceReadiness } = require('./ncmhceReadiness');
const { computeNceReadiness } = require('./nceReadiness');
const nceBp = require('./nceBlueprint');

const DAY = 24 * 60 * 60 * 1000;

const REFUND_RULES = {
  MIN_CASES: 40,               // distinct NCMHCE cases completed before the exam
  MIN_MOCKS: 2,                // full timed mock exams completed before the exam
  MIN_READINESS: 60,           // readiness predictor (utils/ncmhceReadiness.js)
  RECENT_PRACTICE_DAYS: 14,    // practiced within this many days before the exam
  MIN_DAYS_BEFORE_EXAM: 30,    // bought at least this long before the exam
  MAX_DAYS_AFTER_PURCHASE: 183, // exam taken within ~6 months of purchase
  GUIDE_CENTS: 2500,           // the digital study guide the member keeps
  MOCK_MIN_CASES: 10,          // a full mock: 10 cases (2027 format) or 11
  MOCK_GAP_MS: 10 * 60 * 1000, // exam.html saves a mock's cases together at the end
  // NCE: practice is question sets, not cases.
  NCE_MIN_QUESTIONS: 600,      // NCE questions answered before the exam, mocks included
  NCE_FULL_MOCK_ITEMS: 170,    // a full NCE mock: 200 items (current) or 170 (2027)
};

const at = (a) => new Date(a.completedAt || a.createdAt).getTime();

// exam.html saves every case of a finished mock as its own 'timed' attempt in
// one burst. Group timed attempts saved within MOCK_GAP_MS of each other and
// count the groups big enough to be a full exam.
function countMockExams(timedAttempts) {
  const times = timedAttempts.map(at).sort((a, b) => a - b);
  let mocks = 0, size = 0, last = -Infinity;
  times.forEach((t) => {
    if (t - last > REFUND_RULES.MOCK_GAP_MS) {
      if (size >= REFUND_RULES.MOCK_MIN_CASES) mocks += 1;
      size = 0;
    }
    size += 1; last = t;
  });
  if (size >= REFUND_RULES.MOCK_MIN_CASES) mocks += 1;
  return mocks;
}

// Where each exam's guarantee lives on the User, and its one-refund marker.
const PLAN = {
  ncmhce: { path: 'subscription', refundedField: 'guaranteeRefundedAt', otherTier: ['nceAccess', 'nce_guarantee'] },
  nce: { path: 'nceAccess', refundedField: 'nceGuaranteeRefundedAt', otherTier: ['subscription', 'guarantee'] },
};

// The day the Access Extensions Until You Pass plan was bought. Purchases from before this field
// existed fall back to when the member accepted the guarantee terms at
// checkout, but only when that can't be the other exam's guarantee.
function guaranteePurchasedAt(user, exam = 'ncmhce') {
  const p = PLAN[exam];
  const plan = user[p.path] || {};
  if (plan.guaranteePurchasedAt) return plan.guaranteePurchasedAt;
  const other = user[p.otherTier[0]] || {};
  return other.tier === p.otherTier[1] ? null : (user.guaranteeTermsAcceptedAt || null);
}

// NCE practice measures from NCE attempts (oldest first). Readiness uses the
// outline the member practiced most (current or 2027), as the NCE dashboard does.
function ncePractice(attempts) {
  const questions = attempts.reduce((n, a) => n + (a.responses || []).length, 0);
  const mocks = attempts.filter((a) => a.mode === 'timed' && (a.responses || []).length >= REFUND_RULES.NCE_FULL_MOCK_ITEMS).length;
  let best = null;
  ['current', '2027'].forEach((spec) => {
    const mine = attempts.filter((a) => /-2027$/.test(a.externalId || '') === (spec === '2027'));
    const bp = nceBp.blueprintFor(spec);
    const byDomain = {};
    bp.DOMAIN_KEYS.forEach((k) => { byDomain[k] = { correct: 0, total: 0 }; });
    let answered = 0;
    mine.forEach((a) => Object.entries(a.domainBreakdown || {}).forEach(([k, v]) => {
      if (!byDomain[k]) return;
      byDomain[k].correct += v.correct || 0; byDomain[k].total += v.total || 0; answered += v.total || 0;
    }));
    const r = answered ? computeNceReadiness(byDomain, mine.slice().reverse(), bp) : null;
    if (r && (!best || answered > best.answered)) best = { answered, score: r.score };
  });
  return { questions, mocks, readiness: best ? best.score : 0 };
}

// user: User doc (subscription, nceAccess, guaranteeTermsAcceptedAt and the
// refund markers). examDate: the failed exam's date. priorReports: earlier
// score reports for this guarantee, not counting the one being decided.
// examKey: 'ncmhce' (default) or 'nce'.
// Returns { eligible, checks: [{ key, label, ok, detail }], stats }.
async function refundEligibility(user, examDate, priorReports = [], examKey = 'ncmhce') {
  const R = REFUND_RULES;
  const isNce = examKey === 'nce';
  const P = PLAN[isNce ? 'nce' : 'ncmhce'];
  const sub = user[P.path] || {};
  const exam = new Date(examDate);
  const cutoff = exam.getTime() + DAY; // anything saved by the end of exam day
  const bought = guaranteePurchasedAt(user, isNce ? 'nce' : 'ncmhce');
  const daysBefore = bought ? Math.floor((exam.getTime() - new Date(bought).getTime()) / DAY) : null;

  const nceExam = await getNceExam().catch(() => null);
  const attempts = (await Attempt.find({ userId: user._id })
    .select('examId externalId contentItemId mode domainBreakdown responses completedAt createdAt')
    .lean())
    .filter((a) => isNce === !!(nceExam && String(a.examId) === String(nceExam._id)))
    .filter((a) => at(a) <= cutoff)
    .sort((a, b) => at(a) - at(b));

  let cases = 0, questions = 0, mocks, score;
  if (isNce) {
    ({ questions, mocks, readiness: score } = ncePractice(attempts));
  } else {
    cases = new Set(attempts.map((a) => String(a.externalId || a.contentItemId || a._id))).size;
    mocks = countMockExams(attempts.filter((a) => a.mode === 'timed'));
    const readiness = computeNcmhceReadiness(attempts);
    score = readiness ? readiness.score : 0;
  }
  const recent = attempts.some((a) => at(a) >= exam.getTime() - R.RECENT_PRACTICE_DAYS * DAY);
  const earlierFail = priorReports.some((r) => r && r.result === 'fail');

  const checks = [
    { key: 'stripe', label: 'Bought on the website',
      ok: sub.source !== 'apple' && !!sub.lastPaymentIntentId,
      detail: sub.source === 'apple' ? 'App Store purchases are refunded by Apple' : (sub.lastPaymentIntentId ? '' : 'No payment on file') },
    { key: 'once', label: `No earlier ${isNce ? 'NCE' : 'NCMHCE'} refund on this account`,
      ok: !user[P.refundedField], detail: '' },
    { key: 'first', label: 'First exam attempt since buying the plan',
      ok: !earlierFail, detail: earlierFail ? 'An earlier non-pass was already claimed' : '' },
    { key: 'bought', label: `Bought at least ${R.MIN_DAYS_BEFORE_EXAM} days before the exam`,
      ok: daysBefore != null && daysBefore >= R.MIN_DAYS_BEFORE_EXAM,
      detail: daysBefore == null ? 'Purchase date not on file' : `${daysBefore} days before` },
    { key: 'window', label: 'Exam taken within 6 months of buying',
      ok: daysBefore != null && daysBefore <= R.MAX_DAYS_AFTER_PURCHASE,
      detail: daysBefore == null ? 'Purchase date not on file' : '' },
    isNce
      ? { key: 'questions', label: `${R.NCE_MIN_QUESTIONS}+ NCE questions answered`,
        ok: questions >= R.NCE_MIN_QUESTIONS, detail: `${questions} answered` }
      : { key: 'cases', label: `${R.MIN_CASES}+ cases completed`,
        ok: cases >= R.MIN_CASES, detail: `${cases} completed` },
    { key: 'mocks', label: `${R.MIN_MOCKS}+ full timed mock exams`,
      ok: mocks >= R.MIN_MOCKS, detail: `${mocks} completed` },
    { key: 'readiness', label: `Readiness ${R.MIN_READINESS}%+ going into the exam`,
      ok: score >= R.MIN_READINESS, detail: `${score}%` },
    { key: 'recent', label: `Practiced in the ${R.RECENT_PRACTICE_DAYS} days before the exam`,
      ok: recent, detail: recent ? '' : 'No practice saved in that window' },
  ];

  return {
    eligible: checks.every((c) => c.ok),
    checks,
    stats: { exam: isNce ? 'nce' : 'ncmhce', cases, questions, mocks, readiness: score, purchasedAt: bought, daysBefore },
  };
}

module.exports = { refundEligibility, countMockExams, guaranteePurchasedAt, REFUND_RULES, REFUND_PLAN: PLAN };
