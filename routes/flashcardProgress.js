const express = require('express');
const requireAuth = require('../middleware/auth');
const FlashcardProgress = require('../models/FlashcardProgress');

const router = express.Router();

// ── GET /api/flashcard-progress ──────────────────────────────────────
// Returns the user's SR map + timestamp. If no document exists yet the
// client treats it as empty (first sync will create one).
router.get('/', requireAuth, async (req, res) => {
  try {
    const doc = await FlashcardProgress.findOne({ userId: req.userId }).lean();
    if (!doc) return res.json({ cards: {}, t: 0 });
    // Mongoose Maps serialize oddly with .lean(); convert to plain object.
    const cards = doc.cards instanceof Map ? Object.fromEntries(doc.cards) : (doc.cards || {});
    return res.json({ cards, t: doc.t || 0 });
  } catch (err) {
    console.error('flashcard-progress GET error', err);
    return res.status(500).json({ error: 'Could not load flashcard progress' });
  }
});

// ── PUT /api/flashcard-progress ──────────────────────────────────────
// Per-card merge. Flashcards (fc_ keys) and Knowledge Drill (kq_ keys) share
// this document and each sends only its own cards, so a save updates the cards
// it carries and keeps every other card. When both copies of a card carry
// `lu` (epoch-ms of its last review), the newer one wins; otherwise the
// incoming card wins. The merged map is returned so the client can adopt it.
const toPlain = (cards) => (cards instanceof Map ? Object.fromEntries(cards) : (cards || {}));

router.put('/', requireAuth, async (req, res) => {
  try {
    const { cards, t } = req.body;
    if (!cards || typeof cards !== 'object' || Array.isArray(cards)) {
      return res.status(400).json({ error: 'cards object required' });
    }
    const clientT = typeof t === 'number' ? t : Date.now();

    const existing = await FlashcardProgress.findOne({ userId: req.userId });

    // No server doc yet — create one.
    if (!existing) {
      const doc = await FlashcardProgress.create({ userId: req.userId, cards, t: clientT });
      return res.json({ status: 'created', cards, t: doc.t });
    }

    const merged = toPlain(existing.cards);
    Object.keys(cards).forEach((k) => {
      const cur = merged[k];
      const inc = cards[k];
      if (cur && inc && typeof cur.lu === 'number' && typeof inc.lu === 'number' && cur.lu > inc.lu) return;
      merged[k] = inc;
    });

    existing.cards = merged;
    existing.t = Math.max(clientT, existing.t || 0);
    await existing.save();
    return res.json({ status: 'saved', cards: merged, t: existing.t });
  } catch (err) {
    console.error('flashcard-progress PUT error', err);
    return res.status(500).json({ error: 'Could not save flashcard progress' });
  }
});

// ── DELETE /api/flashcard-progress ───────────────────────────────────
// Wipe server-side SR data. Client clears localStorage separately.
// ?prefix=fc_ removes only the cards with that prefix (one tool's reset).
router.delete('/', requireAuth, async (req, res) => {
  try {
    const prefix = typeof req.query.prefix === 'string' ? req.query.prefix : '';
    if (!prefix) {
      await FlashcardProgress.deleteOne({ userId: req.userId });
      return res.json({ ok: true });
    }
    const existing = await FlashcardProgress.findOne({ userId: req.userId });
    if (existing) {
      const kept = toPlain(existing.cards);
      Object.keys(kept).forEach((k) => { if (k.startsWith(prefix)) delete kept[k]; });
      existing.cards = kept;
      existing.t = Date.now();
      await existing.save();
    }
    return res.json({ ok: true });
  } catch (err) {
    console.error('flashcard-progress DELETE error', err);
    return res.status(500).json({ error: 'Could not reset flashcard progress' });
  }
});

module.exports = router;
