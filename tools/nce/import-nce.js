#!/usr/bin/env node
// ============================================================================
// import-nce.js — load the hand-authored NCE seed bank (tools/nce/seed/*.js)
// into MongoDB. No API calls. Items land as `sme_review`; publish them from
// Admin → NCE Questions after review. (The same import is the "Import seed
// questions" button on that page.)
//
//   node tools/nce/import-nce.js                     # dry run
//   node tools/nce/import-nce.js --write             # insert new items
//   node tools/nce/import-nce.js --write --update    # + refresh items still in review
//
// Needs MONGO_URI (reads .env).
// ============================================================================

require('dotenv').config();
const mongoose = require('mongoose');
const { importSeed } = require('./seedImport');

(async () => {
  if (!process.env.MONGO_URI) { console.error('MONGO_URI is not set'); process.exit(1); }
  await mongoose.connect(process.env.MONGO_URI, { dbName: 'passreadyprep' });
  const r = await importSeed({ write: process.argv.includes('--write'), update: process.argv.includes('--update') });
  if (!r.ok) {
    r.problems.forEach((p) => console.log(`✗ ${p.file} ${p.id}: ${p.errors.join('; ')}`));
    console.log(`\n${r.problems.length} seed item(s) fail the gate — run node tools/nce/check-nce.js and fix them first.`);
    process.exitCode = 1;
  } else {
    console.log(`seed: ${r.seedCount} · new: ${r.inserted} · refreshed: ${r.refreshed} · unchanged: ${r.unchanged} · near-duplicates skipped: ${r.duplicates.length}`);
    r.duplicates.forEach((d) => console.log(`  ≈ ${d.id} ~ ${d.against}`));
    console.log(r.written ? '✓ written. Items are "In review" — publish from Admin → NCE Questions.' : 'Dry run — re-run with --write to import.');
  }
  await mongoose.disconnect();
})().catch((e) => { console.error(e); process.exit(1); });
