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
// Last-write-wins merge. The client sends its full SR map + a timestamp.
// If the incoming timestamp is newer (or equal), overwrite the server doc.
// If the server is newer, return the server data so the client can adopt it.
router.put('/', requireAuth, async (req, res) => {
  try {
    const { cards, t } = req.body;
    if (!cards || typeof cards !== 'object') {
      return res.status(400).json({ error: 'cards object required' });
    }
    const clientT = typeof t === 'number' ? t : Date.now();

    const existing = await FlashcardProgress.findOne({ userId: req.userId });

    // No server doc yet — create one.
    if (!existing) {
      const doc = await FlashcardProgress.create({ userId: req.userId, cards, t: clientT });
      return res.json({ status: 'created', t: doc.t });
    }

    // Server is strictly newer — don't overwrite, send server data back.
    if (existing.t > clientT) {
      const serverCards = existing.cards instanceof Map
        ? Object.fromEntries(existing.cards)
        : (existing.cards || {});
      return res.json({ status: 'server_newer', cards: serverCards, t: existing.t });
    }

    // Client is newer or equal — overwrite.
    existing.cards = cards;
    existing.t = clientT;
    await existing.save();
    return res.json({ status: 'saved', t: clientT });
  } catch (err) {
    console.error('flashcard-progress PUT error', err);
    return res.status(500).json({ error: 'Could not save flashcard progress' });
  }
});

// ── DELETE /api/flashcard-progress ───────────────────────────────────
// Wipe server-side SR data. Client clears localStorage separately.
router.delete('/', requireAuth, async (req, res) => {
  try {
    await FlashcardProgress.deleteOne({ userId: req.userId });
    return res.json({ ok: true });
  } catch (err) {
    console.error('flashcard-progress DELETE error', err);
    return res.status(500).json({ error: 'Could not reset flashcard progress' });
  }
});

module.exports = router;
