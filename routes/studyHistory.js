const express = require('express');
const requireAuth = require('../middleware/auth');
const StudyHistorySync = require('../models/StudyHistorySync');

const router = express.Router();
const MAX_ENTRIES = 500;

// ── GET /api/study-history ───────────────────────────────────────────
router.get('/', requireAuth, async (req, res) => {
  try {
    const doc = await StudyHistorySync.findOne({ userId: req.userId }).lean();
    if (!doc) return res.json({ entries: [], t: 0 });
    return res.json({ entries: doc.entries || [], t: doc.t || 0 });
  } catch (err) {
    console.error('study-history GET error', err);
    return res.status(500).json({ error: 'Could not load study history' });
  }
});

// ── PUT /api/study-history ───────────────────────────────────────────
// Merge: combine client + server entries by caseId+date, deduplicate,
// keep the most recent MAX_ENTRIES, and save.
router.put('/', requireAuth, async (req, res) => {
  try {
    const { entries, t } = req.body;
    if (!Array.isArray(entries)) return res.status(400).json({ error: 'entries array required' });
    const clientT = typeof t === 'number' ? t : Date.now();

    const existing = await StudyHistorySync.findOne({ userId: req.userId });

    if (!existing) {
      const trimmed = entries.slice(-MAX_ENTRIES);
      const doc = await StudyHistorySync.create({ userId: req.userId, entries: trimmed, t: clientT });
      return res.json({ status: 'created', t: doc.t, count: trimmed.length });
    }

    // Merge: deduplicate by caseId+date, keep newest MAX_ENTRIES
    const map = new Map();
    (existing.entries || []).forEach((e) => map.set(`${e.caseId}|${e.date}`, e));
    entries.forEach((e) => map.set(`${e.caseId}|${e.date}`, e));
    const merged = [...map.values()]
      .sort((a, b) => (a.date || 0) - (b.date || 0))
      .slice(-MAX_ENTRIES);

    existing.entries = merged;
    existing.t = Math.max(clientT, existing.t || 0);
    await existing.save();
    return res.json({ status: 'saved', t: existing.t, count: merged.length });
  } catch (err) {
    console.error('study-history PUT error', err);
    return res.status(500).json({ error: 'Could not save study history' });
  }
});

// ── DELETE /api/study-history ────────────────────────────────────────
router.delete('/', requireAuth, async (req, res) => {
  try {
    await StudyHistorySync.deleteOne({ userId: req.userId });
    return res.json({ ok: true });
  } catch (err) {
    console.error('study-history DELETE error', err);
    return res.status(500).json({ error: 'Could not reset study history' });
  }
});

module.exports = router;
