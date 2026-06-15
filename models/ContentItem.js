const mongoose = require('mongoose');
const { Schema } = mongoose;

// One unit of practice content. Polymorphic by `format`:
//   - case_sim  → an NCMHCE case simulation (payload in `caseSim`)
//   - mcq       → a knowledge multiple-choice item (payload in `mcq`)
// Evidence (`references`), audio, and the review gate travel with EVERY format,
// so new exams reuse the same record shape with no rebuild.
const ContentItemSchema = new Schema(
  {
    examId: { type: Schema.Types.ObjectId, ref: 'Exam', required: true, index: true },
    format: { type: String, enum: ['case_sim', 'mcq', 'cluster'], required: true, index: true },
    externalId: { type: String, index: true }, // e.g. 'ncmhce-G031'

    title: String,
    category: String,
    difficulty: { type: String, enum: ['easy', 'medium', 'hard'] },

    // documentary evidence — all formats
    references: [{ id: String, source: String, detail: String }],

    // text-to-speech cache — all formats (filled in a later step)
    audio: {
      narrationVoiceId: String,
      narrationUrl: String,
      provider: String,
      generatedAt: Date,
    },

    // review gate
    status: {
      type: String,
      enum: ['draft', 'sme_review', 'published'],
      default: 'draft',
      index: true,
    },
    reviewedBy: { name: String, credential: String, date: Date },

    // format-specific payload (exactly one present)
    caseSim: Schema.Types.Mixed,
    mcq: Schema.Types.Mixed,
  },
  { timestamps: true }
);

// One item per (exam, externalId) — lets the importer re-run safely.
ContentItemSchema.index({ examId: 1, externalId: 1 }, { unique: true, sparse: true });

module.exports = mongoose.model('ContentItem', ContentItemSchema);
