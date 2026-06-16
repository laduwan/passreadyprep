/*
 * Loads NCMHCE cases into the database as ContentItems.
 *
 *   - seed cases (seed-cases.js)        -> status 'published'  (your vetted anchors)
 *   - generated cases (generated-cases.js, if present) -> status 'sme_review'
 *        i.e. loaded but HIDDEN from learners until you review and publish them.
 *        Pass --publish-generated to load them as 'published' for your own testing
 *        (use with care — that puts unreviewed AI content in front of learners).
 *
 * Every case is run through your validator first; nothing loads if a case is invalid.
 * Re-running is safe (matched by exam + externalId, updated in place).
 *
 * Usage:
 *   node tools/cases/importCases.js --dry-run            # validate + preview, no DB
 *   node tools/cases/importCases.js                      # seed published, generated pending review
 *   node tools/cases/importCases.js --publish-generated  # also publish generated (testing only)
 */

require('dotenv').config();
const fs = require('fs');
const path = require('path');
const mongoose = require('mongoose');

const { SEED_CASES } = require('./seed-cases');
const { validateCaseSet } = require('./caseSchema');
const { ALLOWED_SOURCES } = require('./references');

const Exam = require('../../models/Exam');
const ContentItem = require('../../models/ContentItem');

const DRY_RUN = process.argv.includes('--dry-run');
const PUBLISH_GENERATED = process.argv.includes('--publish-generated');

// Load generated cases if the file exists yet.
let GENERATED_CASES = [];
if (fs.existsSync(path.join(__dirname, 'generated-cases.js'))) {
  try {
    GENERATED_CASES = require('./generated-cases').GENERATED_CASES || [];
  } catch (err) {
    console.warn('Could not read generated-cases.js: ' + err.message);
  }
}

function toContentItem(examId, c, status) {
  return {
    examId,
    format: 'case_sim',
    externalId: c.id,
    title: c.title,
    category: c.category,
    difficulty: c.difficulty,
    references: c.references || [],
    status,
    caseSim: c,
  };
}

async function main() {
  const genStatus = PUBLISH_GENERATED ? 'published' : 'sme_review';

  // 1) Quality gate — validate both sets before anything loads.
  const seedRes = validateCaseSet(SEED_CASES, { allowedSources: ALLOWED_SOURCES });
  if (!seedRes.ok) {
    console.error('Seed validation FAILED — nothing loaded:');
    seedRes.errors.slice(0, 8).forEach((e) => console.error('  - ' + e));
    process.exit(1);
  }
  if (GENERATED_CASES.length) {
    const genRes = validateCaseSet(GENERATED_CASES, { allowedSources: ALLOWED_SOURCES });
    if (!genRes.ok) {
      console.error('Generated validation FAILED — nothing loaded:');
      genRes.errors.slice(0, 8).forEach((e) => console.error('  - ' + e));
      process.exit(1);
    }
  }
  console.log('Validated ' + SEED_CASES.length + ' seed + ' + GENERATED_CASES.length + ' generated cases — clean.');

  const plan = SEED_CASES.map((c) => [c, 'published']).concat(
    GENERATED_CASES.map((c) => [c, genStatus])
  );

  if (DRY_RUN) {
    console.log('\nDry run — what would load:');
    plan.forEach(function (pair) {
      console.log('  ' + pair[0].id + '  [' + pair[0].category + '/' + pair[0].difficulty + ']  -> ' + pair[1]);
    });
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

  // 3) Ensure the exam exists, then load every case under it.
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
  for (const pair of plan) {
    const c = pair[0];
    const status = pair[1];
    const res = await ContentItem.updateOne(
      { examId: exam._id, externalId: c.id },
      { $set: toContentItem(exam._id, c, status) },
      { upsert: true }
    );
    if (res.upsertedCount) added += 1;
    else updated += 1;
  }

  const published = await ContentItem.countDocuments({ examId: exam._id, status: 'published' });
  const review = await ContentItem.countDocuments({ examId: exam._id, status: 'sme_review' });
  console.log('Done. Added ' + added + ', updated ' + updated + '.');
  console.log('NCMHCE bank: ' + published + ' published (live to learners), ' + review + ' pending your review.');

  await mongoose.disconnect();
}

main().catch(function (err) {
  console.error('Import error:', err);
  process.exit(1);
});
