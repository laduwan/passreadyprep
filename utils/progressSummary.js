// utils/progressSummary.js — one account's progress for one exam: work
// completed, readiness, days to the exam, and each domain's score and share
// of the exam.
//
// GET /api/progress/summary (routes/progress.js) returns exactly this, and the
// dashboard, the trial-ended screen and the study-break job all read it, so
// none of them can quote a number the others disagree with. The numbers come
// from the same attempt records and the same readiness functions the study
// pages use.
const Attempt = require('../models/Attempt');
const User = require('../models/User');
const { getNceExam } = require('./nceExam');
const bp = require('./nceBlueprint');
const { computeNceReadiness } = require('./nceReadiness');
const { computeNcmhceReadiness, DOMAIN_WEIGHTS } = require('./ncmhceReadiness');

// The dashboard lists NCMHCE domains by name and by their share of the exam.
// The weights live in utils/ncmhceReadiness.js (the readiness model and the
// guarantee's 60% threshold both use them); only the labels are added here.
const NCMHCE_DOMAIN_LABELS = {
  counseling: 'Counseling Skills & Interventions',
  intake: 'Intake, Assessment & Diagnosis',
  treatment: 'Treatment Planning',
  ethics: 'Professional Practice & Ethics',
  core: 'Core Counseling Attributes',
};
// Heaviest first, which is the order the dashboard shows them in.
const NCMHCE_DOMAIN_ORDER = Object.keys(DOMAIN_WEIGHTS)
  .sort((a, b) => DOMAIN_WEIGHTS[b] - DOMAIN_WEIGHTS[a]);

async function summarize(userId, exam) {
  exam = exam === 'nce' ? 'nce' : 'ncmhce';
  const user = await User.findById(userId).select('examDate nceExamDate').lean();
  const examDate = user ? (exam === 'nce' ? user.nceExamDate : user.examDate) : null;
  const daysToExam = examDate
    ? Math.max(0, Math.ceil((new Date(examDate) - Date.now()) / 86400000))
    : null;

  const nceExam = await getNceExam().catch(() => null);

  if (exam === 'nce') {
    if (!nceExam) return { exam, completed: 0, readiness: null, daysToExam, unit: 'questions', domains: [] };
    const blueprint = bp.blueprintFor('current');
    const attempts = await Attempt.find({ userId, examId: nceExam._id })
      .sort({ createdAt: -1 }).limit(200)
      .select('mode score domainBreakdown completedAt responses').lean();
    const byDomain = {};
    blueprint.DOMAIN_KEYS.forEach((k) => { byDomain[k] = { correct: 0, total: 0 }; });
    let answered = 0;
    attempts.forEach((a) => {
      answered += (a.responses || []).length;
      Object.entries(a.domainBreakdown || {}).forEach(([k, v]) => {
        if (!byDomain[k]) return;
        byDomain[k].correct += v.correct || 0;
        byDomain[k].total += v.total || 0;
      });
    });
    const rd = computeNceReadiness(byDomain, attempts, blueprint);
    const domains = blueprint.DOMAINS.map((d) => {
      const t = byDomain[d.key] || { correct: 0, total: 0 };
      return {
        key: d.key,
        label: d.label,
        short: d.short,
        share: Math.round(d.weight * 100),      // % of scored items
        answered: t.total,
        score: t.total ? Math.round((t.correct / t.total) * 100) : null,
      };
    }).sort((a, b) => b.share - a.share);
    return {
      exam,
      completed: answered,
      readiness: rd ? rd.score : null,
      label: rd ? rd.label : null,
      trend: rd ? rd.trend : null,
      forFullConfidence: rd ? rd.answeredForFullConfidence : null,
      examReady: 85,                            // the NCE exam-ready mark
      daysToExam,
      unit: 'questions',
      domains,
    };
  }

  // `mode` comes along so a study break (mode 'break') counts toward domain
  // accuracy but never as a completed case (utils/ncmhceReadiness.js).
  const attempts = await Attempt.find({ userId }).sort({ createdAt: 1 }).limit(1000)
    .select('examId domainBreakdown mode').lean();
  const ncmhce = attempts.filter((a) => !(nceExam && String(a.examId) === String(nceExam._id)));
  const rd = computeNcmhceReadiness(ncmhce);
  const agg = (rd && rd.agg) || {};
  const domains = NCMHCE_DOMAIN_ORDER.map((k) => {
    const t = agg[k] || { ok: 0, total: 0 };
    return {
      key: k,
      label: NCMHCE_DOMAIN_LABELS[k] || k,
      short: NCMHCE_DOMAIN_LABELS[k] || k,
      share: Math.round(DOMAIN_WEIGHTS[k] * 100),
      answered: t.total,
      score: t.total ? Math.round((t.ok / t.total) * 100) : null,
    };
  });
  return {
    exam,
    completed: rd ? rd.cases : 0,
    readiness: rd ? rd.score : null,
    label: null,
    trend: null,
    forFullConfidence: 20,                      // cases for full confidence
    examReady: 60,                              // the guarantee's threshold
    daysToExam,
    unit: 'cases',
    domains,
  };
}

module.exports = { summarize, NCMHCE_DOMAIN_LABELS, NCMHCE_DOMAIN_ORDER };
