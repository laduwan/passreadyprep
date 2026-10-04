#!/usr/bin/env node
// ============================================================================
// item-record.js — print the evidence record for one NCE question by ID.
//
//   node tools/nce/item-record.js nce-s-eth-007            # from the seed files (no DB)
//   node tools/nce/item-record.js nce-s-eth-007 --db       # from MongoDB (MONGO_URI),
//                                                          # incl. audit trail + sign-off
//   ... --json                                             # JSON instead of HTML
//
// Writes docs/records/<id>.html (open it and print to PDF). The same record is
// in Admin → NCE Questions → Look up question.
// ============================================================================

require('dotenv').config();
const fs = require('fs');
const path = require('path');
const { buildRecord, renderRecordHtml } = require('../../utils/nceRecord');

const id = process.argv[2];
const useDb = process.argv.includes('--db');
const asJson = process.argv.includes('--json');
if (!id || id.startsWith('--')) { console.error('usage: node tools/nce/item-record.js <question id> [--db] [--json]'); process.exit(1); }

function write(record) {
  const out = asJson ? JSON.stringify(record, null, 2) : renderRecordHtml(record);
  const dir = path.resolve(__dirname, '..', '..', 'docs', 'records');
  fs.mkdirSync(dir, { recursive: true });
  const file = path.join(dir, `${id.replace(/[^a-zA-Z0-9_-]/g, '')}.${asJson ? 'json' : 'html'}`);
  fs.writeFileSync(file, out);
  console.log(`wrote ${path.relative(process.cwd(), file)}`);
}

(async () => {
  if (!useDb) {
    const { loadSeed } = require('./seedLib');
    const all = loadSeed();
    const hit = all.find((e) => e.doc.externalId === id);
    if (!hit) { console.error(`${id} is not in the seed files (try --db for generator items)`); process.exit(1); }
    const others = all.filter((e) => e !== hit).map((e) => ({ externalId: e.doc.externalId, stem: e.doc.stem }));
    write(buildRecord(hit.doc, { corpusStems: others, fallbackOrigin: { method: 'seed', file: hit.file } }));
    return;
  }
  if (!process.env.MONGO_URI) { console.error('MONGO_URI is not set'); process.exit(1); }
  const mongoose = require('mongoose');
  const NceItem = require('../../models/NceItem');
  await mongoose.connect(process.env.MONGO_URI, { dbName: 'passreadyprep' });
  const item = await NceItem.findOne({ externalId: id }).lean();
  if (!item) { console.error(`${id} not found in the database`); process.exitCode = 1; }
  else {
    const others = await NceItem.find({ externalId: { $ne: id }, status: { $ne: 'retired' } }).select('externalId stem').lean();
    write(buildRecord(item, { corpusStems: others }));
  }
  await mongoose.disconnect();
})().catch((e) => { console.error(e); process.exit(1); });
