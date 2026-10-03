const express = require('express');
const NceItem = require('../models/NceItem');
const Attempt = require('../models/Attempt');
const User = require('../models/User');
const requireAuth = require('../middleware/auth');
const { resolveNceAccess, NCE_TRIAL_DAYS } = require('../utils/nceAccess');
const bp = require('../utils/nceBlueprint');
const { getNceExam } = require('../utils/nceExam');

// Student-facing NCE study API. Admin generation/review lives in routes/adminNce.js.
const router = express.Router();

// Anonymous visitors and expired accounts get this many fixed sample questions.
const FREE_NCE_LIMIT = 15;
const MAX_PRACTICE = 50;

// What the browser gets for one question. The key and rationales are included:
// practice mode gives feedback per question and the timed exam grades locally
// before posting the attempt (the server re-grades from its own copy).
function publicItem(d) {
  return {
    id: d.externalId,
    domain: d.domain,
    cacrep: d.cacrep || null,
    topic: d.topic || null,
    difficulty: d.difficulty,
    stem: d.stem,
    options: (d.options || []).map((o) => ({ id: o.id, text: o.text, isCorrect: !!o.isCorrect, rationale: o.rationale || '' })),
    rationale: d.rationale || '',
    references: (d.references || []).map((r) => ({ source: r.source, detail: r.detail })),
  };
}

function shuffle(a) {
  a = a.slice();
  for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; }
  return a;
}

// Random draw of up to n published items matching `match`. Picks from the ids
// in app code rather than $sample so it runs on any Mongo-compatible store;
// the bank is a few thousand small docs at most, so the id scan is cheap.
async function sampleItems(match, n) {
  const ids = await NceItem.find(match).select('_id').lean();
  const chosen = shuffle(ids).slice(0, n).map((d) => d._id);
  const docs = await NceItem.find({ _id: { $in: chosen } }).lean();
  return shuffle(docs);
}

async function teaserItems() {
  const docs = await NceItem.find({ status: 'published' })
    .sort({ domain: 1, externalId: 1 })
    .lean();
  // Round-robin across domains so the sample shows the breadth of the exam.
  const byDomain = {};
  docs.forEach((d) => { (byDomain[d.domain] = byDomain[d.domain] || []).push(d); });
  const out = [];
  for (let round = 0; out.length < FREE_NCE_LIMIT && round < FREE_NCE_LIMIT; round++) {
    bp.DOMAIN_KEYS.forEach((k) => { const l = byDomain[k] || []; if (l[round] && out.length < FREE_NCE_LIMIT) out.push(l[round]); });
  }
  return out;
}

function locked(level) { return level === 'free' || level === 'expired'; }

// GET /api/nce/blueprint — the exam format and domain weights (public).
router.get('/blueprint', (_req, res) => {
  res.json({
    exam: bp.EXAM,
    domains: bp.DOMAINS.map((d) => ({ key: d.key, label: d.label, short: d.short, weight: d.weight, scoredItems: d.scoredItems })),
    cacrepAreas: bp.CACREP_AREAS,
    exam2027: bp.EXAM_2027,
    source: bp.SOURCE,
  });
});

// GET /api/nce/status — access level, trial end, bank size per area.
router.get('/status', resolveNceAccess, async (req, res) => {
  try {
    const counts = await NceItem.aggregate([
      { $match: { status: 'published' } },
      { $group: { _id: '$domain', n: { $sum: 1 } } },
    ]);
    const byDomain = {};
    counts.forEach((c) => { byDomain[c._id] = c.n; });
    const total = counts.reduce((s, c) => s + c.n, 0);
    const a = (req.nceUser && req.nceUser.nceAccess) || {};
    const exam = await getNceExam();
    res.json({
      examStatus: exam.status,
      accessLevel: req.nceAccessLevel,
      tier: a.tier || 'free',
      currentPeriodEnd: a.currentPeriodEnd || null,
      cancelAtPeriodEnd: !!a.cancelAtPeriodEnd,
      trialEndsAt: req.nceTrialEndsAt || null,
      trialDays: NCE_TRIAL_DAYS,
      freeLimit: FREE_NCE_LIMIT,
      examDate: (req.nceUser && req.nceUser.nceExamDate) || null,
      bank: { total, byDomain },
    });
  } catch (err) {
    console.error('nce status error', err);
    res.status(500).json({ error: 'Could not load NCE status' });
  }
});

// GET /api/nce/practice?domain=<key|all>&count=20 — an untimed practice set.
router.get('/practice', resolveNceAccess, async (req, res) => {
  try {
    if (locked(req.nceAccessLevel)) {
      const items = await teaserItems();
      return res.json({ accessLevel: req.nceAccessLevel, teaser: true, items: items.map(publicItem) });
    }
    const domain = req.query.domain && req.query.domain !== 'all' ? String(req.query.domain) : null;
    if (domain && !bp.DOMAIN_KEYS.includes(domain)) return res.status(400).json({ error: 'Unknown NCE domain' });
    const count = Math.min(MAX_PRACTICE, Math.max(1, parseInt(req.query.count, 10) || 20));
    const match = { status: 'published' };
    if (domain) match.domain = domain;
    const docs = await sampleItems(match, count);
    res.json({ accessLevel: req.nceAccessLevel, teaser: false, items: docs.map(publicItem) });
  } catch (err) {
    console.error('nce practice error', err);
    res.status(500).json({ error: 'Could not load practice questions' });
  }
});

// GET /api/nce/mock?size=full|100|50 — a timed exam drawn to the NCE weights.
// size=full mirrors the real exam: 200 items, of which 40 are marked unscored
// (the real NCE's field-test items) and left out of the score.
router.get('/mock', resolveNceAccess, async (req, res) => {
  try {
    if (locked(req.nceAccessLevel)) {
      return res.status(402).json({
        error: 'NCE plan required',
        gateReason: req.nceAccessLevel === 'free' ? 'signin_required' : 'trial_expired',
        message: req.nceAccessLevel === 'free'
          ? `Create a free account to take a timed NCE mock exam (${NCE_TRIAL_DAYS}-day trial).`
          : 'Your NCE trial has ended. Pick an NCE plan to keep taking timed exams.',
      });
    }
    const plan = bp.mockPlan(req.query.size);
    const picked = [];
    const shortfall = {};
    for (const [domain, n] of Object.entries(plan.perDomain)) {
      if (!n) continue;
      const docs = await sampleItems({ status: 'published', domain }, n);
      if (docs.length < n) shortfall[domain] = n - docs.length;
      // The domain's scored quota is filled first; only its extras are unscored
      // (field-test style), so the score is always a true blueprint sample.
      const scoredN = plan.scoredPerDomain[domain];
      docs.forEach((d, i) => picked.push(Object.assign(publicItem(d), { scored: i < scoredN })));
    }
    const items = shuffle(picked);
    res.json({
      size: plan.size,
      minutes: plan.minutes,
      scoredItems: items.filter((i) => i.scored).length,
      items,
      shortfall: Object.keys(shortfall).length ? shortfall : null,
    });
  } catch (err) {
    console.error('nce mock error', err);
    res.status(500).json({ error: 'Could not build the mock exam' });
  }
});

// POST /api/nce/attempts — save a finished practice set or mock exam.
// body: { mode: 'study'|'timed', responses: [{ id, selected, scored }], startedAt }
// Correctness is re-derived from the stored keys, so a tampered client can't
// inflate its own progress.
router.post('/attempts', requireAuth, async (req, res) => {
  try {
    const { mode, responses, startedAt } = req.body || {};
    if (!Array.isArray(responses) || !responses.length) return res.status(400).json({ error: 'responses are required' });
    if (responses.length > 250) return res.status(400).json({ error: 'Too many responses' });

    const ids = [...new Set(responses.map((r) => String(r && r.id || '')).filter(Boolean))];
    const docs = await NceItem.find({ externalId: { $in: ids } }).select('externalId domain options').lean();
    const byId = {};
    docs.forEach((d) => { byId[d.externalId] = d; });

    const breakdown = {};
    let correct = 0; let scoredN = 0;
    const saved = [];
    responses.forEach((r) => {
      const d = byId[r && r.id];
      if (!d) return;
      const key = (d.options || []).find((o) => o.isCorrect);
      const ok = !!(key && r.selected && key.id === r.selected);
      saved.push({ questionId: d.externalId, selectedOptionId: r.selected || null, correct: ok, weight: r.scored === false ? 0 : 1 });
      if (r.scored === false) return;
      scoredN++; if (ok) correct++;
      const b = (breakdown[d.domain] = breakdown[d.domain] || { correct: 0, total: 0 });
      b.total++; if (ok) b.correct++;
    });
    if (!saved.length) return res.status(400).json({ error: 'No recognised questions in this attempt' });

    const exam = await getNceExam();
    const attempt = await Attempt.create({
      userId: req.userId,
      examId: exam._id,
      externalId: mode === 'timed' ? 'nce-mock' : 'nce-practice',
      mode: mode === 'timed' ? 'timed' : 'study',
      responses: saved,
      score: scoredN ? correct / scoredN : 0,
      domainBreakdown: breakdown,
      startedAt: startedAt ? new Date(startedAt) : undefined,
      completedAt: new Date(),
    });
    res.status(201).json({ id: attempt._id, correct, scored: scoredN, score: attempt.score, breakdown });
  } catch (err) {
    console.error('nce attempt save error', err);
    res.status(500).json({ error: 'Could not save this attempt' });
  }
});

// GET /api/nce/progress — rollup across this account's NCE attempts.
router.get('/progress', requireAuth, async (req, res) => {
  try {
    const exam = await getNceExam();
    const attempts = await Attempt.find({ userId: req.userId, examId: exam._id })
      .sort({ createdAt: -1 }).limit(200)
      .select('mode score domainBreakdown completedAt responses').lean();
    const byDomain = {};
    bp.DOMAIN_KEYS.forEach((k) => { byDomain[k] = { correct: 0, total: 0 }; });
    let answered = 0;
    attempts.forEach((a) => {
      answered += (a.responses || []).length;
      Object.entries(a.domainBreakdown || {}).forEach(([k, v]) => {
        if (!byDomain[k]) return;
        byDomain[k].correct += v.correct || 0; byDomain[k].total += v.total || 0;
      });
    });
    res.json({
      answered,
      byDomain,
      mocks: attempts.filter((a) => a.mode === 'timed').slice(0, 10)
        .map((a) => ({ score: a.score, completedAt: a.completedAt, n: (a.responses || []).length })),
    });
  } catch (err) {
    console.error('nce progress error', err);
    res.status(500).json({ error: 'Could not load NCE progress' });
  }
});

// PUT /api/nce/exam-date — { examDate: 'YYYY-MM-DD' | null }
router.put('/exam-date', requireAuth, async (req, res) => {
  try {
    const raw = req.body && req.body.examDate;
    const d = raw ? new Date(raw) : null;
    if (raw && isNaN(d.getTime())) return res.status(400).json({ error: 'Invalid date' });
    await User.updateOne({ _id: req.userId }, d ? { $set: { nceExamDate: d } } : { $unset: { nceExamDate: 1 } });
    res.json({ ok: true, examDate: d });
  } catch (err) {
    console.error('nce exam-date error', err);
    res.status(500).json({ error: 'Could not save the exam date' });
  }
});

module.exports = router;
