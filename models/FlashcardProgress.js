const mongoose = require('mongoose');

// One document per user. Stores the full SM-2 spaced-repetition state for
// every flashcard the user has ever reviewed. The `cards` Map mirrors the
// localStorage shape: { [cardId]: { ef, iv, rp, du } }.
//
// `t` is an epoch-ms timestamp of the last write. The client uses it for
// last-write-wins merge so switching devices always picks up the freshest data.

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
