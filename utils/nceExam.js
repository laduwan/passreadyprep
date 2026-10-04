const Exam = require('../models/Exam');
const { ALLOWED_SOURCES } = require('../tools/cases/references');

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

// Sources an NCE item may cite: the shared reference library plus the standard
// texts for the CACREP areas the NCMHCE library doesn't cover.
const NCE_SOURCES = [
  ...ALLOWED_SOURCES,
  'CACREP 2024 Standards',
  'Gladding (Counseling: A Comprehensive Profession)',
  'Sue & Sue (Counseling the Culturally Diverse)',
  'Yalom & Leszcz (Group Psychotherapy)',
  'Sharf (Career Development Theory)',
  'Berk (Development Through the Lifespan)',
  'Erford (Research and Evaluation in Counseling)',
  'Forester-Miller & Davis (Practitioner\'s Guide to Ethical Decision Making)',
  'Psychological First Aid Field Operations Guide (NCTSN/NCPTSD)',
  'AASM Clinical Practice Guideline (Insomnia)',
];

module.exports = { getNceExam, NCE_SOURCES };
