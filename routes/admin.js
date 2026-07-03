const express = require('express');
const requireAdmin = require('../middleware/adminAuth');
const ContentItem = require('../models/ContentItem');
const Exam = require('../models/Exam');
const User = require('../models/User');
const Attempt = require('../models/Attempt');

const router = express.Router();
router.use(requireAdmin);

// ── Helpers ──────────────────────────────────────────────────────────

// The exam every manually-authored case belongs to. Created lazily so a fresh
// database (or a wiped dev copy) doesn't 500 on the first manual add.
async function getNcmhceExam() {
  let exam = await Exam.findOne({ key: 'ncmhce' });
  if (!exam) {
    exam = await Exam.create({
      key: 'ncmhce', name: 'NCMHCE', profession: 'counseling', board: 'NBCC',
      formatsSupported: ['case_sim'], status: 'live',
    });
  }
  return exam;
}

// Manual cases get their OWN id namespace: ncmhce-M###.
// The cron job mints ncmhce-D#, the AI generator mints ncmhce-G###. Keeping the
// hand-added cases on an M-series means the manual path can never collide with
// either automated minter — the coordination fix for the known D/G-id overlap.
async function nextManualExternalId() {
  const docs = await ContentItem.find({ externalId: /^ncmhce-M/ }).select('externalId').lean();
  let max = 0;
  docs.forEach((d) => {
    const m = /ncmhce-M(\d+)/.exec(d.externalId || '');
    if (m) max = Math.max(max, parseInt(m[1], 10));
  });
  return 'ncmhce-M' + String(max + 1).padStart(3, '0');
}

// Minimal skeleton so the "Add" form starts from a valid shape, not a blank box.
function blankCaseSim(id) {
  return {
    id,
    title: '',
    category: '',
    difficulty: 'medium',
    primaryDiagnosis: { name: '', code: '' },
    differentialOptions: [{ id: 'opt1', name: '', isCorrect: true }],
    narrative: { intake: '', session1: '', session2: '' },
    diagnosticRationale: '',
    references: [{ id: 'R1', source: '', detail: '' }],
    questions: [
      {
        id: 'q1', domain: 'treatment', question: '',
        options: [
          { id: 'a', text: '', isCorrect: true, weight: 3 },
          { id: 'b', text: '', isCorrect: false, weight: 0 },
          { id: 'c', text: '', isCorrect: false, weight: -1 },
          { id: 'd', text: '', isCorrect: false, weight: -2 },
        ],
        rationale: '',
      },
    ],
  };
}

// ── Review queue (existing behaviour, unchanged) ─────────────────────

// GET /api/admin/content?status=sme_review — list cases by status (default review)
router.get('/content', async (req, res) => {
  try {
    const status = req.query.status || 'sme_review';
    const items = await ContentItem.find({ status })
      .select('externalId title category difficulty status needsWork')
      .sort({ category: 1, externalId: 1 });
    return res.json({ count: items.length, items });
  } catch (err) {
    console.error('admin list error', err);
    return res.status(500).json({ error: 'Could not load cases' });
  }
});

// GET /api/admin/content/all — every case, any status, with optional filters.
// Powers the manage/edit table. Query: ?status=&category=&format=&q=
router.get('/content/all', async (req, res) => {
  try {
    const { status, category, format, q } = req.query;
    const filter = {};
    if (status) filter.status = status;
    if (category) filter.category = category;
    if (format) filter.format = format;
    if (q) {
      const rx = new RegExp(String(q).replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'i');
      filter.$or = [{ title: rx }, { externalId: rx }, { category: rx }];
    }
    const items = await ContentItem.find(filter)
      .select('externalId title category difficulty status format needsWork updatedAt')
      .sort({ updatedAt: -1 })
      .limit(1000)
      .lean();
    return res.json({ count: items.length, items });
  } catch (err) {
    console.error('admin list-all error', err);
    return res.status(500).json({ error: 'Could not load cases' });
  }
});

// GET /api/admin/content/:externalId — one full case, any status (for review/edit)
router.get('/content/:externalId', async (req, res) => {
  try {
    const item = await ContentItem.findOne({ externalId: req.params.externalId });
    if (!item) return res.status(404).json({ error: 'Case not found' });
    return res.json({ item });
  } catch (err) {
    console.error('admin get error', err);
    return res.status(500).json({ error: 'Could not load that case' });
  }
});

// ── Create / edit / delete ───────────────────────────────────────────

// POST /api/admin/content — create a manual case.
// Body: { title, category, difficulty, status?, references?, caseSim? }
// If caseSim is omitted a valid skeleton is used so the record is always well-formed.
router.post('/content', async (req, res) => {
  try {
    const b = req.body || {};
    const exam = await getNcmhceExam();

    // Insert-only with a collision guard, mirroring the generator, so a
    // concurrent add can't clobber an id.
    let externalId = await nextManualExternalId();
    const caseSim = (b.caseSim && typeof b.caseSim === 'object') ? b.caseSim : blankCaseSim(externalId);

    let saved = null;
    for (let attempt = 0; attempt < 5 && !saved; attempt++) {
      if (await ContentItem.exists({ externalId })) { externalId = await nextManualExternalId(); caseSim.id = externalId; continue; }
      caseSim.id = externalId;
      try {
        saved = await ContentItem.create({
          examId: exam._id,
          externalId,
          format: b.format || 'case_sim',
          title: b.title || caseSim.title || '',
          category: b.category || caseSim.category || '',
          difficulty: b.difficulty || caseSim.difficulty || 'medium',
          references: b.references || caseSim.references || [],
          status: ['draft', 'sme_review', 'published'].includes(b.status) ? b.status : 'draft',
          caseSim,
        });
      } catch (e) {
        if (e && e.code === 11000) { externalId = await nextManualExternalId(); caseSim.id = externalId; continue; }
        throw e;
      }
    }
    if (!saved) return res.status(409).json({ error: 'Could not allocate a unique id — try again.' });

    return res.status(201).json({
      externalId: saved.externalId, title: saved.title, category: saved.category,
      difficulty: saved.difficulty, status: saved.status,
    });
  } catch (err) {
    console.error('admin create error', err);
    return res.status(500).json({ error: 'Could not create that case' });
  }
});

// PUT /api/admin/content/:externalId — edit an existing case.
// externalId is immutable (it is the stable key learners/attempts reference).
router.put('/content/:externalId', async (req, res) => {
  try {
    const b = req.body || {};
    const set = {};
    if (typeof b.title === 'string') set.title = b.title;
    if (typeof b.category === 'string') set.category = b.category;
    if (['easy', 'medium', 'hard'].includes(b.difficulty)) set.difficulty = b.difficulty;
    if (['draft', 'sme_review', 'published'].includes(b.status)) set.status = b.status;
    if (Array.isArray(b.references)) set.references = b.references;
    if (b.caseSim && typeof b.caseSim === 'object') {
      b.caseSim.id = req.params.externalId; // keep payload id aligned with the key
      set.caseSim = b.caseSim;
    }

    const item = await ContentItem.findOneAndUpdate(
      { externalId: req.params.externalId },
      { $set: set },
      { new: true }
    );
    if (!item) return res.status(404).json({ error: 'Case not found' });
    return res.json({ externalId: item.externalId, status: item.status, title: item.title });
  } catch (err) {
    console.error('admin update error', err);
    return res.status(500).json({ error: 'Could not save that case' });
  }
});

// DELETE /api/admin/content/:externalId — remove a case.
router.delete('/content/:externalId', async (req, res) => {
  try {
    const item = await ContentItem.findOneAndDelete({ externalId: req.params.externalId });
    if (!item) return res.status(404).json({ error: 'Case not found' });
    return res.json({ externalId: item.externalId, deleted: true });
  } catch (err) {
    console.error('admin delete error', err);
    return res.status(500).json({ error: 'Could not delete that case' });
  }
});

// ── Publish workflow (existing behaviour, unchanged) ─────────────────

router.post('/content/:externalId/publish', async (req, res) => {
  try {
    const reviewer = (req.body && req.body.reviewer) || 'admin';
    const item = await ContentItem.findOneAndUpdate(
      { externalId: req.params.externalId },
      { $set: { status: 'published', reviewedBy: { name: reviewer, date: new Date() } } },
      { new: true }
    );
    if (!item) return res.status(404).json({ error: 'Case not found' });
    return res.json({ externalId: item.externalId, status: item.status });
  } catch (err) {
    console.error('admin publish error', err);
    return res.status(500).json({ error: 'Could not publish that case' });
  }
});

router.post('/content/:externalId/unpublish', async (req, res) => {
  try {
    const item = await ContentItem.findOneAndUpdate(
      { externalId: req.params.externalId },
      { $set: { status: 'sme_review' } },
      { new: true }
    );
    if (!item) return res.status(404).json({ error: 'Case not found' });
    return res.json({ externalId: item.externalId, status: item.status });
  } catch (err) {
    console.error('admin unpublish error', err);
    return res.status(500).json({ error: 'Could not update that case' });
  }
});

router.post('/content/:externalId/note', async (req, res) => {
  try {
    const note = req.body && typeof req.body.note === 'string' ? req.body.note : '';
    const item = await ContentItem.findOneAndUpdate(
      { externalId: req.params.externalId },
      { $set: { reviewNote: note, needsWork: note.trim().length > 0 } },
      { new: true }
    );
    if (!item) return res.status(404).json({ error: 'Case not found' });
    return res.json({ externalId: item.externalId, reviewNote: item.reviewNote, needsWork: item.needsWork });
  } catch (err) {
    console.error('admin note error', err);
    return res.status(500).json({ error: 'Could not save the note' });
  }
});

// ── Analytics ────────────────────────────────────────────────────────

// GET /api/admin/stats — overview dashboard numbers.
// Everything is wrapped defensively: a missing/empty collection returns zeros,
// never a 500, so the panel loads on a fresh database too.
router.get('/stats', async (_req, res) => {
  const out = {
    content: { total: 0, byStatus: {}, byCategory: {}, byDifficulty: {}, byFormat: {}, deep: 0, shallow: 0, manual: 0 },
    users: { total: 0, byTier: {}, guaranteeAccepted: 0, signups30d: 0, signups7d: 0 },
    attempts: { total: 0, avgScore: null, byMode: {}, last30d: 0 },
    generatedAt: new Date().toISOString(),
  };

  // Content
  try {
    const rows = await ContentItem.find({}).select('status category difficulty format externalId caseSim').lean();
    out.content.total = rows.length;
    for (const r of rows) {
      const st = r.status || 'unknown';
      const cat = r.category || (r.caseSim && r.caseSim.category) || 'uncategorized';
      const diff = r.difficulty || 'unspecified';
      const fmt = r.format || 'unknown';
      out.content.byStatus[st] = (out.content.byStatus[st] || 0) + 1;
      out.content.byCategory[cat] = (out.content.byCategory[cat] || 0) + 1;
      out.content.byDifficulty[diff] = (out.content.byDifficulty[diff] || 0) + 1;
      out.content.byFormat[fmt] = (out.content.byFormat[fmt] || 0) + 1;
      const id = r.externalId || '';
      if (/^ncmhce-D/.test(id)) out.content.deep += 1;
      else if (/^ncmhce-M/.test(id)) out.content.manual += 1;
      else out.content.shallow += 1;
    }
  } catch (e) { console.error('stats/content', e.message); }

  // Users
  try {
    const now = Date.now();
    const d30 = new Date(now - 30 * 864e5);
    const d7 = new Date(now - 7 * 864e5);
    const users = await User.find({}).select('subscription guaranteeTermsAcceptedAt createdAt').lean();
    out.users.total = users.length;
    for (const u of users) {
      const tier = (u.subscription && u.subscription.tier) || 'free';
      out.users.byTier[tier] = (out.users.byTier[tier] || 0) + 1;
      if (u.guaranteeTermsAcceptedAt) out.users.guaranteeAccepted += 1;
      if (u.createdAt && u.createdAt >= d30) out.users.signups30d += 1;
      if (u.createdAt && u.createdAt >= d7) out.users.signups7d += 1;
    }
  } catch (e) { console.error('stats/users', e.message); }

  // Attempts
  try {
    const now = Date.now();
    const d30 = new Date(now - 30 * 864e5);
    const attempts = await Attempt.find({}).select('score mode createdAt').lean();
    out.attempts.total = attempts.length;
    let scoreSum = 0, scoreN = 0;
    for (const a of attempts) {
      const mode = a.mode || 'unknown';
      out.attempts.byMode[mode] = (out.attempts.byMode[mode] || 0) + 1;
      if (typeof a.score === 'number') { scoreSum += a.score; scoreN += 1; }
      if (a.createdAt && a.createdAt >= d30) out.attempts.last30d += 1;
    }
    out.attempts.avgScore = scoreN ? Math.round((scoreSum / scoreN) * 10) / 10 : null;
  } catch (e) { console.error('stats/attempts', e.message); }

  return res.json(out);
});

module.exports = router;
