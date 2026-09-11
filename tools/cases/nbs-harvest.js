#!/usr/bin/env node
// ============================================================================
// nbs-harvest.js — put a retired case's questions back to work in the
// "Next Best Step" drill.
//
// Retiring a duplicate case (dedup-retire.js) takes the story out of the bank,
// but its questions were rewritten to the same exam standard as every other
// question and are still good items. Flagging the case `nbsHarvest` makes
// routes/nbs.js serve those questions as drill items on
// public/next-best-step.html — a scenario, four shuffled options, per-option
// feedback, and the rule behind the key. The case stays retired either way.
//
// Always DRY by default. Nothing is written unless you pass --apply.
//
//   node tools/cases/nbs-harvest.js                              (what is flagged today)
//   node tools/cases/nbs-harvest.js --ids ncmhce-G139,ncmhce-G140    (plan)
//   node tools/cases/nbs-harvest.js --ids ncmhce-G139 --apply    (flag it)
//   node tools/cases/nbs-harvest.js --ids ncmhce-G139 --off --apply  (un-flag)
// MONGO_URI from env / .env.
// ============================================================================

require('dotenv').config();
const mongoose = require('mongoose');
const ContentItem = require('../../models/ContentItem');
const { caseToNbsItems } = require('../../utils/nbsItems');

const APPLY = process.argv.includes('--apply');
const OFF = process.argv.includes('--off');
const idi = process.argv.indexOf('--ids');
const EXPLICIT = idi >= 0
  ? (process.argv[idi + 1] || '').split(',').map((s) => s.trim()).filter(Boolean)
  : null;

async function main() {
  if (!process.env.MONGO_URI) { console.error('MONGO_URI is not set. Add it to your .env first.'); process.exit(1); }
  await mongoose.connect(process.env.MONGO_URI, { dbName: 'passreadyprep' });
  console.log('Connected to MongoDB (db: passreadyprep)\n');

  const filter = EXPLICIT
    ? { format: 'case_sim', externalId: { $in: EXPLICIT } }
    : { format: 'case_sim', nbsHarvest: true };
  const docs = await ContentItem.find(filter).select('externalId category status nbsHarvest caseSim').lean();

  if (!docs.length) {
    console.log(EXPLICIT ? 'None of those ids exist.' : 'No case is flagged for harvest yet. Pass --ids to flag some.');
    await mongoose.disconnect();
    return;
  }

  let usable = 0, skipped = 0;
  docs.forEach((d) => {
    const items = caseToNbsItems(d);
    const total = ((d.caseSim || {}).questions || []).length;
    usable += items.length;
    skipped += total - items.length;
    console.log('  ' + d.externalId + '  [' + d.status + (d.nbsHarvest ? ', harvested' : '') + ']  '
      + items.length + '/' + total + ' question(s) convert  · ' + (d.category || '?'));
    if (items.length < total) {
      console.log('     ' + (total - items.length) + ' skipped (needs exactly one keyed option and feedback on all four)');
    }
  });

  console.log('\n=== ' + docs.length + ' case(s), ' + usable + ' drill item(s)'
    + (skipped ? ', ' + skipped + ' question(s) skipped' : '') + ' ===');

  const live = docs.filter((d) => d.status === 'published');
  if (live.length && !OFF) {
    console.log('\nNote: ' + live.length + ' of these are still published, so their questions would appear'
      + '\nboth in the case and in the drill. Retire them first (dedup-retire.js) if that is not what you want:');
    console.log('  ' + live.map((d) => d.externalId).join(','));
  }

  if (!EXPLICIT) { await mongoose.disconnect(); return; }

  if (!APPLY) {
    console.log('\nDRY RUN. Re-run with --apply to set nbsHarvest ' + (OFF ? 'false' : 'true') + ' on these cases.');
    await mongoose.disconnect();
    return;
  }

  const r = await ContentItem.updateMany(
    { externalId: { $in: docs.map((d) => d.externalId) } },
    { $set: { nbsHarvest: !OFF } }
  );
  console.log('\nFlagged ' + r.modifiedCount + ' case(s) nbsHarvest=' + (!OFF) + '.');
  console.log('The drill caches for 5 minutes, so /next-best-step.html picks this up shortly.');
  await mongoose.disconnect();
}

main().catch((e) => { console.error(e); process.exit(1); });
