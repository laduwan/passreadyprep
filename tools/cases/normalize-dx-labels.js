#!/usr/bin/env node
// ============================================================================
// normalize-dx-labels.js — merge label VARIANTS of the same diagnosis into one
// canonical (DSM-5-TR) string across the LIVE bank, so coverage, bank-shape,
// and the generator's dedup stop treating one diagnosis as two.
//
// Updates caseSim.primaryDiagnosis.name (what bank-shape/coverage read) AND any
// matching caseSim.differentialOptions[].name (so a deep case's "correct
// differential matches the given diagnosis" invariant still holds).
//
// DRY by default. Nothing is written unless you pass --apply. Reversible by
// re-running with the map entries swapped.
//
//   node tools/cases/normalize-dx-labels.js          (plan — shows what matches)
//   node tools/cases/normalize-dx-labels.js --apply  (rename)
// MONGO_URI from env / .env, same as the server.
// ============================================================================
require('dotenv').config();
const mongoose = require('mongoose');
const Exam = require('../../models/Exam');
const ContentItem = require('../../models/ContentItem');

const APPLY = process.argv.includes('--apply');

// old (non-canonical) label  ->  canonical DSM-5-TR label
// Add more pairs here as you find other split labels via bank-shape.
const MAP = {
  'Attention-Deficit/Hyperactivity Disorder, Combined':
    'Attention-Deficit/Hyperactivity Disorder, Combined Presentation',
};

async function main() {
  if (!process.env.MONGO_URI) { console.error('MONGO_URI is not set. Add it to your .env first.'); process.exit(1); }
  await mongoose.connect(process.env.MONGO_URI, { dbName: 'passreadyprep' });
  console.log('Connected to MongoDB (db: passreadyprep)\n');

  const exam = await Exam.findOne({ key: 'ncmhce' });
  const base = { format: 'case_sim' };
  if (exam) base.examId = exam._id;

  let totPrimary = 0, totDiff = 0;
  for (const [oldName, newName] of Object.entries(MAP)) {
    const primFilter = Object.assign({ 'caseSim.primaryDiagnosis.name': oldName }, base);
    const hits = await ContentItem.find(primFilter).select('externalId').lean();
    const diffFilter = Object.assign({ 'caseSim.differentialOptions.name': oldName }, base);
    const diffCount = await ContentItem.countDocuments(diffFilter);

    console.log('"' + oldName + '"');
    console.log('   -> "' + newName + '"');
    console.log('  primaryDiagnosis matches: ' + hits.length + (hits.length ? '  (' + hits.map((h) => h.externalId).join(', ') + ')' : ''));
    console.log('  differentialOptions matches: ' + diffCount);

    if (APPLY) {
      const r1 = await ContentItem.updateMany(primFilter, { $set: { 'caseSim.primaryDiagnosis.name': newName } });
      totPrimary += (r1.modifiedCount || 0);
      let d = 0;
      try {
        const r2 = await ContentItem.updateMany(
          diffFilter,
          { $set: { 'caseSim.differentialOptions.$[e].name': newName } },
          { arrayFilters: [{ 'e.name': oldName }] }
        );
        d = r2.modifiedCount || 0;
      } catch (e) {
        console.log('  (differential rename skipped: ' + e.message + ')');
      }
      totDiff += d;
      console.log('  updated: ' + (r1.modifiedCount || 0) + ' primary, ' + d + ' differential\n');
    } else {
      console.log('');
    }
  }

  if (!APPLY) console.log('DRY RUN. Re-run with --apply to rename.');
  else console.log('Done. Renamed ' + totPrimary + ' primaryDiagnosis + ' + totDiff + ' differentialOptions field(s).');
  await mongoose.disconnect();
}
main().catch((e) => { console.error(e); process.exit(1); });
