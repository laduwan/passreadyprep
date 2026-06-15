const mongoose = require('mongoose');
const { Schema } = mongoose;

// One exam (e.g. NCMHCE). Progress and enrollment attach to this.
// Kept minimal for step 1 — it grows in later steps.
const ExamSchema = new Schema(
  {
    key: { type: String, required: true, unique: true }, // 'ncmhce'
    name: { type: String, required: true },
    profession: String,
    board: String, // 'NBCC'
    formatsSupported: [String], // ['case_sim']
    status: { type: String, enum: ['live', 'coming_soon'], default: 'coming_soon' },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Exam', ExamSchema);
