/*
 * Loads NCMHCE cases into the database as ContentItems.
 *
 * It runs every case through your existing validator (caseSchema.js) FIRST and
 * refuses to load anything if a case fails — same quality gate as the pipeline.
 *
 * Usage:
 *   node tools/cases/importCases.js --dry-run   # validate + preview, touches nothing
 *   node tools/cases/importCases.js             # validate + load into MongoDB
 *
 * Re-running is safe: cases are matched by (exam, externalId) and updated in place,
 * so you never get duplicates.
 */

require('dotenv').config();
const mongoose = require('mongoose');

const { SEED_CASES } = require('./seed-cases');
const { validateCaseSet } = require('./caseSchema');
const { ALLOWED_SOURCES } = require('./references');

const Exam = require('../../models/Exam');
const ContentItem = require('../../models/ContentItem');

const DRY_RUN = process.argv.includes('--dry-run');

// The 4 seed cases are your hand-authored, vetted anchors → load as published.
// (AI-generated cases would import as 'sme_review' pending your sign-off.)
const SEED_STATUS = 'published';

// Turn one case object into a ContentItem document.
function toContentItem(examId, c) {
  return {
    examId,
    format: 'case_sim',
    externalId: c.id,
    title: c.title,
    category: c.category,
    difficulty: c.difficulty,
    references: c.references || [],
    status: SEED_STATUS,
    caseSim: c, // full case kept intact so the viewer can render either format
  };
}

async function main() {
  const cases = SEED_CASES;

  // 1) Quality gate — validate through the existing schema before anything loads.
  const result = validateCaseSet(cases, { allowedSources: ALLOWED_SOURCES });
  if (!result.ok) {
    console.error('Validation FAILED — nothing was loaded. Issues:');
    (result.errors || []).forEach((e) => console.error('  - ' + e));
    process.exit(1);
  }
  const warnCount = (result.warnings || []).length;
  console.log(`Validated ${cases.length} cases — clean${warnCount ? ` (${warnCount} warnings)` : ''}.`);

  if (DRY_RUN) {
    console.log('\nDry run — preview of what would load:');
    cases.forEach((c) =>
      console.log(`  ${c.id}  [${c.category}/${c.difficulty}]  ${c.questions.length} questions  "${c.title}"`)
    );
    console.log('\nNo database changes made. Drop --dry-run to load for real.');
    return;
  }

  // 2) Connect.
  if (!process.env.MONGO_URI) {
    console.error('MONGO_URI is not set — add it to your .env first.');
    process.exit(1);
  }
  await mongoose.connect(process.env.MONGO_URI, { dbName: 'passreadyprep' });
  console.log('Connected to MongoDB.');

  // 3) Make sure the NCMHCE exam exists, and load the cases under it.
  const exam = await Exam.findOneAndUpdate(
    { key: 'ncmhce' },
    {
      $setOnInsert: {
        key: 'ncmhce',
        name: 'National Clinical Mental Health Counseling Examination',
        profession: 'counseling',
        board: 'NBCC',
        formatsSupported: ['case_sim'],
        status: 'live',
      },
    },
    { upsert: true, new: true }
  );

  let added = 0;
  let updated = 0;
  for (const c of cases) {
    const doc = toContentItem(exam._id, c);
    const res = await ContentItem.updateOne(
      { examId: exam._id, externalId: c.id },
      { $set: doc },
      { upsert: true }
    );
    if (res.upsertedCount) added += 1;
    else updated += 1;
  }

  const total = await ContentItem.countDocuments({ examId: exam._id, status: 'published' });
  console.log(`Done. Added ${added}, updated ${updated}. NCMHCE now has ${total} published cases.`);

  await mongoose.disconnect();
}

main().catch((err) => {
  console.error('Import error:', err);
  process.exit(1);
});
