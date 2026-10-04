#!/usr/bin/env node
// ============================================================================
// item-record.js — evidence records for NCE questions, one or all at once.
//
// One question:
//   node tools/nce/item-record.js nce-s-eth-007          # from the seed files (no DB)
//   node tools/nce/item-record.js nce-s-eth-007 --db     # live record incl. audit trail
//
// Every question at once:
//   node tools/nce/item-record.js --all                  # all seed questions, one document
//   node tools/nce/item-record.js --all --db             # everything in the database
//   node tools/nce/item-record.js --all --db --status=published
//   ... --separate      # also write one file per question (docs/records/<id>.html)
//   ... --json          # JSON instead of HTML
//
// Output goes to docs/records/ (git-ignored). Open the .html and print or save
// as PDF; the all-in-one document has an index and starts each record on a new
// page. The same records are in Admin → NCE Questions.
// ============================================================================

require('dotenv').config();
const fs = require('fs');
const path = require('path');
const { buildRecord, renderRecordHtml, renderRecordsBookHtml } = require('../../utils/nceRecord');

const args = process.argv.slice(2);
const flag = (n) => args.includes(`--${n}`);
const opt = (n) => (args.find((a) => a.startsWith(`--${n}=`)) || '').split('=')[1] || '';
const id = args.find((a) => !a.startsWith('--'));
const ALL = flag('all'); const DB = flag('db'); const JSON_OUT = flag('json'); const SEPARATE = flag('separate');
const STATUS = ['sme_review', 'published', 'retired', 'all'].includes(opt('status')) ? opt('status') : 'all';

if (!ALL && !id) {
  console.error('usage: node tools/nce/item-record.js <question id> [--db] [--json]\n       node tools/nce/item-record.js --all [--db] [--status=published|sme_review|retired|all] [--separate] [--json]');
  process.exit(1);
}

const OUT_DIR = path.resolve(__dirname, '..', '..', 'docs', 'records');
const safe = (s) => String(s).replace(/[^a-zA-Z0-9_-]/g, '');
function out(name, content) {
  fs.mkdirSync(OUT_DIR, { recursive: true });
  const file = path.join(OUT_DIR, name);
  fs.writeFileSync(file, content);
  return path.relative(process.cwd(), file);
}

// [{ item, corpusStems, fallbackOrigin }] from the seed files or the DB.
async function load() {
  if (!DB) {
    const { loadSeed } = require('./seedLib');
    const all = loadSeed();
    const stems = all.map((e) => ({ externalId: e.doc.externalId, stem: e.doc.stem }));
    return {
      label: 'hand-authored seed files',
      rows: all.map((e) => ({ item: e.doc, corpusStems: stems.filter((s) => s.externalId !== e.doc.externalId), fallbackOrigin: { method: 'seed', file: e.file } })),
      done: async () => {},
    };
  }
  if (!process.env.MONGO_URI) { console.error('MONGO_URI is not set'); process.exit(1); }
  const mongoose = require('mongoose');
  const NceItem = require('../../models/NceItem');
  await mongoose.connect(process.env.MONGO_URI, { dbName: 'passreadyprep' });
  const filter = STATUS === 'all' ? {} : { status: STATUS };
  const items = await NceItem.find(filter).sort({ domain: 1, externalId: 1 }).lean();
  const live = await NceItem.find({ status: { $ne: 'retired' } }).select('externalId stem').lean();
  return {
    label: STATUS === 'all' ? 'database, all statuses' : `database, ${STATUS}`,
    rows: items.map((item) => ({ item, corpusStems: live.filter((s) => s.externalId !== item.externalId) })),
    done: () => mongoose.disconnect(),
  };
}

(async () => {
  const src = await load();
  let rows = src.rows;
  if (!ALL) {
    rows = rows.filter((r) => r.item.externalId === id);
    if (!rows.length) { console.error(`${id} not found (${src.label})${DB ? '' : ' — try --db for generator items'}`); await src.done(); process.exit(1); }
  }
  const records = rows.map((r) => buildRecord(r.item, { corpusStems: r.corpusStems, fallbackOrigin: r.fallbackOrigin }));

  if (!ALL) {
    console.log('wrote ' + out(`${safe(id)}.${JSON_OUT ? 'json' : 'html'}`, JSON_OUT ? JSON.stringify(records[0], null, 2) : renderRecordHtml(records[0])));
  } else {
    const base = `nce-evidence-records${DB && STATUS !== 'all' ? '-' + STATUS : ''}`;
    if (JSON_OUT) console.log('wrote ' + out(`${base}.json`, JSON.stringify(records, null, 2)));
    else console.log('wrote ' + out(`${base}.html`, renderRecordsBookHtml(records, { title: 'NCE evidence records', subtitle: src.label })));
    if (SEPARATE) {
      records.forEach((r) => out(`${safe(r.id)}.${JSON_OUT ? 'json' : 'html'}`, JSON_OUT ? JSON.stringify(r, null, 2) : renderRecordHtml(r)));
      console.log(`wrote ${records.length} individual records to ${path.relative(process.cwd(), OUT_DIR)}/`);
    }
    const flagged = records.filter((r) => r.verificationFlag).length;
    const failing = records.filter((r) => !r.qualityGate.ok).length;
    console.log(`${records.length} records · ${flagged} with an open ⚑ flag · ${failing} failing the quality gate`);
  }
  await src.done();
})().catch((e) => { console.error(e); process.exit(1); });
