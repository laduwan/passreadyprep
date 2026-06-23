/*
 * db-status.js — read-only health check for the NCMHCE case library.
 *
 * Prints a count of ContentItems grouped by status so you can see exactly
 * what learners are being served. The public app (routes/content.js) only
 * returns status: 'published', so the "Published" number is the real,
 * live case count.
 *
 * This script NEVER writes — it only reads and reports.
 *
 * Usage:
 *   node tools/cases/db-status.js
 *   (requires MONGO_URI in your environment / .env, same as the server)
 */

require('dotenv').config();
const mongoose = require('mongoose');

const Exam = require('../../models/Exam');
const ContentItem = require('../../models/ContentItem');

async function main() {
  if (!process.env.MONGO_URI) {
    console.error('MONGO_URI is not set. Add it to your .env first.');
    process.exit(1);
  }

  await mongoose.connect(process.env.MONGO_URI, { dbName: 'passreadyprep' });
  console.log('Connected to MongoDB (db: passreadyprep)\n');

  // Resolve the NCMHCE exam (the app looks it up by key 'ncmhce')
  const exam = await Exam.findOne({ key: 'ncmhce' });
  if (!exam) {
    console.log('No Exam with key "ncmhce" found. The exam record may be missing,');
    console.log('which would make /api/content return 0 items.\n');
  }
  const examFilter = exam ? { examId: exam._id } : {};

  const total = await ContentItem.countDocuments(examFilter);
  console.log(`Total ContentItems (NCMHCE): ${total}\n`);

  // Counts by status
  const byStatus = await ContentItem.aggregate([
    { $match: examFilter },
    { $group: { _id: '$status', n: { $sum: 1 } } },
    { $sort: { _id: 1 } },
  ]);
  console.log('By status:');
  const statusMap = { draft: 0, sme_review: 0, published: 0 };
  byStatus.forEach((s) => {
    statusMap[s._id] = s.n;
    console.log(`  ${String(s._id).padEnd(12)} ${s.n}`);
  });
  console.log('');

  // The number that actually matters — what learners can see right now
  console.log(`>>> LIVE (published) cases learners can see: ${statusMap.published} <<<\n`);

  await mongoose.disconnect();
}

main().catch((err) => {
  console.error('db-status failed:', err.message);
  process.exit(1);
});
