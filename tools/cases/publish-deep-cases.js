#!/usr/bin/env node
// ============================================================================
// publish-deep-cases.js — publish the Phase 2 deep cases in one shot.
//
// Discovers the deep-case IDs from the same batch files import-deep-cases.js
// uses, then flips exactly those from status 'sme_review' -> 'published'.
// Touches ONLY those IDs and ONLY when they're in sme_review, so it can't
// disturb the rest of the bank and is safe to re-run (idempotent).
//
//   node tools/cases/publish-deep-cases.js            (dry run — shows what would publish)
//   node tools/cases/publish-deep-cases.js --apply    (publish them)
// MONGO_URI from env / .env.
// ============================================================================

require('dotenv').config();
const fs = require('fs');
const path = require('path');
const mongoose = require('mongoose');
const Exam = require('../../models/Exam');
const ContentItem = require('../../models/ContentItem');

const APPLY = process.argv.includes('--apply');

const dir = __dirname;
const files = [];
if (fs.existsSync(path.join(dir, 'exemplar-deep-mdd.js'))) files.push('exemplar-deep-mdd.js');
fs.readdirSync(dir).filter((f) => /^deep-cases-batch-.*\.js$/.test(f)).sort().forEach((f) => files.push(f));

const ids = [];
for (const f of files) {
  let m; try { m = require(path.join(dir, f)); } catch (e) { console.error('Could not load ' + f + ': ' + e.message); process.exit(1); }
  const cs = m.CASES || m.GENERATED_CASES || [];
  cs.forEach((c) => { if (c && c.id) ids.push(c.id); });
}
console.log('Discovered ' + ids.length + ' deep-case id(s) from ' + files.length + ' file(s).');

async function main() {
  if (!process.env.MONGO_URI) { console.error('MONGO_URI is not set. Add it to your .env first.'); process.exit(1); }
  await mongoose.connect(process.env.MONGO_URI, { dbName: 'passreadyprep' });
  const exam = await Exam.findOne({ key: 'ncmhce' });
  const match = { format: 'case_sim', externalId: { $in: ids } };
  if (exam) match.examId = exam._id;

  const pending = await ContentItem.find(Object.assign({ status: 'sme_review' }, match)).select('externalId title').lean();
  const already = await ContentItem.countDocuments(Object.assign({ status: 'published' }, match));
  console.log('\nIn sme_review (will publish): ' + pending.length + '   |   already published: ' + already + '\n');
  pending.forEach((d) => console.log('  ' + (APPLY ? 'PUBLISH ' : 'would publish ') + d.externalId + ' — ' + (d.title || '')));

  if (!pending.length) { console.log('\nNothing to publish.'); await mongoose.disconnect(); return; }
  if (!APPLY) { console.log('\nDRY RUN. Re-run with --apply to publish.'); await mongoose.disconnect(); return; }

  const r = await ContentItem.updateMany(
    Object.assign({ status: 'sme_review' }, match),
    { $set: { status: 'published' } }
  );
  const liveNow = await ContentItem.countDocuments(Object.assign({ status: 'published' }, exam ? { examId: exam._id, format: 'case_sim' } : { format: 'case_sim' }));
  console.log('\nPublished ' + (r.modifiedCount || 0) + ' deep case(s). Total published now: ' + liveNow + '.');
  await mongoose.disconnect();
}
main().catch((e) => { console.error(e); process.exit(1); });
