// Résumé builder — a perk for paid NCMHCE / NCE members who have finished
// studying. Unlocks when the member has a paid plan for an exam AND their
// readiness on that exam is "Exam ready" (85+), or when their score report is
// recorded as passed. Strengths come from their strongest practice areas and
// are phrased as professional competencies (utils/resumeStrengths.js); no
// scores or PassReady Prep data appear on the résumé.
//
//   GET  /api/resume/eligibility  → { eligible, reasons, exams, strengths }
//   POST /api/resume/pdf          → application/pdf (same gate)
const express = require('express');
const requireAuth = require('../middleware/auth');
const User = require('../models/User');
const Attempt = require('../models/Attempt');
const { getNceExam } = require('../utils/nceExam');
const { nceLevel } = require('../utils/nceAccess');
const bp = require('../utils/nceBlueprint');
const { computeNceReadiness } = require('../utils/nceReadiness');
const { computeNcmhceReadiness } = require('../utils/ncmhceReadiness');
const { topStrengths } = require('../utils/resumeStrengths');
const { buildResumePdf } = require('../utils/resumePdf');

const router = express.Router();
const READY_AT = 85; // the "Exam ready" label on both readiness scores

// Same paid rules as the NCMHCE content gate (routes/content.js).
function ncmhcePaid(user, now = new Date()) {
  const sub = user.subscription || {};
  const tier = sub.tier || 'free';
  if (tier === 'free') return false;
  const expired = sub.currentPeriodEnd && new Date(sub.currentPeriodEnd) < now;
  if (!expired) return true;
  const sr = (sub.scoreReport || {}).status || 'none';
  return tier === 'guarantee' && ['approved_extension', 'passed'].includes(sr);
}

async function eligibility(userId) {
  const user = await User.findById(userId).select('subscription nceAccess trialEndsAt');
  if (!user) return null;
  const nceExam = await getNceExam().catch(() => null);
  const attempts = await Attempt.find({ userId }).sort({ createdAt: 1 }).limit(1000)
    .select('examId domainBreakdown').lean();
  const isNce = (a) => nceExam && String(a.examId) === String(nceExam._id);

  // NCMHCE: readiness from the account's synced case attempts.
  const ncmhce = computeNcmhceReadiness(attempts.filter((a) => !isNce(a)));
  // NCE: same rollup /api/nce/progress uses (newest first for recency).
  const nceAttempts = attempts.filter(isNce).reverse();
  const byDomain = {};
  bp.DOMAIN_KEYS.forEach((k) => { byDomain[k] = { correct: 0, total: 0 }; });
  nceAttempts.forEach((a) => Object.entries(a.domainBreakdown || {}).forEach(([k, v]) => {
    if (byDomain[k]) { byDomain[k].correct += v.correct || 0; byDomain[k].total += v.total || 0; }
  }));
  const nce = computeNceReadiness(byDomain, nceAttempts);

  const passed = ((user.subscription || {}).scoreReport || {}).status === 'passed';
  const exams = {
    ncmhce: { paid: ncmhcePaid(user), readiness: ncmhce ? ncmhce.score : null },
    nce: { paid: nceLevel(user) === 'paid', readiness: nce ? nce.score : null },
  };
  const ready = (e) => e.paid && e.readiness != null && e.readiness >= READY_AT;
  const eligible = passed || ready(exams.ncmhce) || ready(exams.nce);

  const areas = [];
  if (ncmhce) Object.entries(ncmhce.agg).forEach(([key, v]) => areas.push({ key, ok: v.ok, total: v.total }));
  Object.entries(byDomain).forEach(([key, v]) => areas.push({ key, ok: v.correct, total: v.total }));

  return { eligible, passed, readyAt: READY_AT, exams, strengths: topStrengths(areas) };
}

router.get('/eligibility', requireAuth, async (req, res) => {
  try {
    const e = await eligibility(req.userId);
    if (!e) return res.status(404).json({ error: 'Account not found' });
    return res.json(e);
  } catch (err) {
    console.error('resume eligibility error', err);
    return res.status(500).json({ error: 'Could not check résumé access' });
  }
});

// ── PDF ──────────────────────────────────────────────────────────────────────
const str = (v, max) => String(v == null ? '' : v).replace(/\s+/g, ' ').trim().slice(0, max);
const para = (v, max) => String(v == null ? '' : v).replace(/[ \t]+/g, ' ').trim().slice(0, max);
const list = (v, maxItems, maxLen) => (Array.isArray(v) ? v : String(v || '').split('\n'))
  .map((s) => str(s, maxLen)).filter(Boolean).slice(0, maxItems);

function readResume(b) {
  b = b || {};
  return {
    name: str(b.name, 80),
    credentials: str(b.credentials, 80),
    email: str(b.email, 120),
    phone: str(b.phone, 40),
    location: str(b.location, 80),
    link: str(b.link, 160),
    summary: para(b.summary, 900),
    strengths: list(b.strengths, 8, 200),
    licensure: list(b.licensure, 6, 200),
    experience: (Array.isArray(b.experience) ? b.experience : []).slice(0, 8).map((e) => ({
      title: str(e && e.title, 100), org: str(e && e.org, 120), location: str(e && e.location, 80),
      dates: str(e && e.dates, 60), bullets: list(e && e.bullets, 6, 260),
    })).filter((e) => e.title || e.org),
    education: (Array.isArray(b.education) ? b.education : []).slice(0, 5).map((e) => ({
      degree: str(e && e.degree, 120), school: str(e && e.school, 120), year: str(e && e.year, 40),
    })).filter((e) => e.degree || e.school),
  };
}

router.post('/pdf', requireAuth, async (req, res) => {
  try {
    const e = await eligibility(req.userId);
    if (!e) return res.status(404).json({ error: 'Account not found' });
    if (!e.eligible) return res.status(403).json({ error: 'The résumé builder unlocks when your readiness reaches Exam ready on a paid plan.' });
    const r = readResume(req.body);
    if (!r.name) return res.status(400).json({ error: 'Add your name first.' });
    const pdf = await buildResumePdf(r);
    const file = (r.name.replace(/[^A-Za-z0-9]+/g, '-').replace(/^-|-$/g, '') || 'Resume') + '-Resume.pdf';
    res.set('Content-Type', 'application/pdf');
    res.set('Content-Disposition', `attachment; filename="${file}"`);
    res.set('Cache-Control', 'no-store');
    return res.send(pdf);
  } catch (err) {
    console.error('resume pdf error', err);
    return res.status(500).json({ error: 'Could not build the PDF' });
  }
});

module.exports = router;
module.exports.readResume = readResume;
module.exports.ncmhcePaid = ncmhcePaid;
