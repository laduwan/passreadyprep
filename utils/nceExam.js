const Exam = require('../models/Exam');

// The NCE Exam record, created on first use so a fresh database works. It
// starts 'coming_soon'; flip it to 'live' from the admin NCE page when the bank
// is ready (routes/adminNce.js).
async function getNceExam() {
  let exam = await Exam.findOne({ key: 'nce' });
  if (!exam) {
    try {
      exam = await Exam.create({
        key: 'nce', name: 'NCE', profession: 'counseling', board: 'NBCC',
        formatsSupported: ['mcq'], status: 'coming_soon',
      });
    } catch (e) {
      if (e && e.code === 11000) exam = await Exam.findOne({ key: 'nce' });
      else throw e;
    }
  }
  return exam;
}

// Sources an NCE item may cite — the full library, with citations, lives in
// utils/nceSources.js.
const { NCE_SOURCES } = require('./nceSources');

module.exports = { getNceExam, NCE_SOURCES };
