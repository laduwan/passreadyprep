const mongoose = require('mongoose');

// One document per user. Stores the full SM-2 spaced-repetition state for
// every flashcard the user has ever reviewed. The `cards` Map mirrors the
// localStorage shape: { [cardId]: { ef, iv, rp, du, lu? } }. Keys are prefixed
// per tool: fc_ (flashcards.html) and kq_ (knowledge-drill.html).
//
// `t` is an epoch-ms timestamp of the last write. Saves merge card by card
// (routes/flashcardProgress.js), so one tool never erases the other's cards.

const flashcardProgressSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true, unique: true },
    // Map of cardId → { ef: Number, iv: Number, rp: Number, du: Number }
    cards: { type: Map, of: mongoose.Schema.Types.Mixed, default: () => new Map() },
    t: { type: Number, default: 0 },
  },
  { timestamps: true }
);

module.exports = mongoose.model('FlashcardProgress', flashcardProgressSchema);
