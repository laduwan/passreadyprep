const mongoose = require('mongoose');
const { Schema } = mongoose;

// One NCE practice question: a standalone four-option knowledge MCQ, tagged to
// one of NBCC's six weighted NCE domains plus a CACREP core-area coverage tag
// (utils/nceBlueprint.js).
//
// Kept in its own collection (`nceitems`) rather than ContentItem on purpose:
// many NCMHCE routes, jobs and admin pages query ContentItem without an exam
// filter and assume a `caseSim` payload, so mixing MCQs in there would leak NCE
// questions into the NCMHCE case lists and break the case review screens. Same
// precedent as models/NcmhceCase.js.
//
// Written by the generator (routes/adminNce.js) as `sme_review`, never
// auto-published. NCE(R) is a registered trademark of NBCC; these are original
// practice items, not real exam items.
const OptionSchema = new Schema(
  {
    id: { type: String, required: true },          // 'a' | 'b' | 'c' | 'd'
    text: { type: String, required: true, trim: true },
    isCorrect: { type: Boolean, default: false },
    rationale: { type: String, default: '', trim: true }, // why this option is right / wrong
  },
  { _id: false }
);

const NceItemSchema = new Schema(
  {
    externalId: { type: String, required: true, unique: true }, // 'nce-000123'
    domain: { type: String, required: true, index: true },       // weighted NCE domain (nceBlueprint DOMAIN_KEYS)
    cacrep: { type: String, trim: true, index: true },           // CACREP core-area coverage tag (CACREP_KEYS)
    topic: { type: String, trim: true },                         // blueprint topic it was written for
    difficulty: { type: String, enum: ['easy', 'medium', 'hard'], default: 'medium' },

    stem: { type: String, required: true, trim: true },
    options: { type: [OptionSchema], default: [] },
    rationale: { type: String, default: '', trim: true },        // teaching explanation for the key
    references: [{ id: String, source: String, detail: String }],

    status: { type: String, enum: ['draft', 'sme_review', 'published', 'retired'], default: 'sme_review', index: true },
    reviewedBy: { name: String, credential: String, date: Date },
    reviewNote: String,
    generatedBy: String, // model id, for audit
  },
  { timestamps: true }
);

module.exports = mongoose.model('NceItem', NceItemSchema);
