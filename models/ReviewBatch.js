const mongoose = require('mongoose');
const { Schema } = mongoose;

// One SME review batch from tools/cases/rewrite-questions.js --save NAME
// (or --push-db NAME.json). Holds the exact proposals plus the rendered
// review document and decision sheet, so a batch generated in a Render shell
// can be downloaded from /review.html (or pulled straight from the database)
// instead of living only on that box's disk. The reviewer's filled sheet is
// uploaded back into `reviewCsv`; `--from NAME` then applies it.
const ReviewBatchSchema = new Schema(
  {
    name: { type: String, required: true, unique: true }, // e.g. 'rw1'
    tool: { type: String, default: 'rewrite-questions' },
    mode: String,          // proposals.mode ('rewrite')
    model: String,         // model that generated the proposals
    generatedAt: Date,
    caseCount: { type: Number, default: 0 },
    questionCount: { type: Number, default: 0 },
    // While a --save/--series run is generating: cases finished / planned.
    progress: { done: Number, total: Number },

    proposals: Schema.Types.Mixed, // the NAME.json object, verbatim
    html: String,                  // NAME.html — the review document
    csv: String,                   // NAME.csv — the blank decision sheet

    reviewCsv: String,             // the filled decision sheet, once uploaded
    reviewedAt: Date,
    reviewedBy: String,
    appliedAt: Date,               // set when --from NAME --apply wrote it
  },
  { timestamps: true }
);

module.exports = mongoose.model('ReviewBatch', ReviewBatchSchema);
