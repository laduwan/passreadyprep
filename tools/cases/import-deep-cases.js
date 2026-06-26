#!/usr/bin/env node
// ============================================================================
// import-deep-cases.js — Import ALL Phase 2 deep cases as ContentItems.
//
// Writes ContentItems (collection 'contentitems') under the ncmhce Exam, exactly
// like importCases.js — the path the live app and admin panel actually read.
// (An earlier version mirrored import-all.js and wrote to an orphan 'contents'
// collection; that was wrong and is fixed here.)
//
// Auto-discovers every tools/cases/deep-cases-batch-*.js (+ the D101 exemplar),
// re-validates each case against the depth gate, and upserts idempotently by
// {examId, externalId}. Status is set only on INSERT, so re-running never
// clobbers a case you have already published via the admin panel.
//
//   Preview (no DB):       node tools/cases/import-deep-cases.js --dry-run
//   Import (sme_review):   node tools/cases/import-deep-cases.js
//   Import new as live:    node tools/cases/import-deep-cases.js --publish
// MONGO_URI is read from the environment (already set on Render).
// ============================================================================

const fs = require('fs');
const path = require('path');
const { validateExamDepth } = require('./examDepth');
const { ALLOWED_SOURCES } = require('./references');
const bp = require('./blueprint');

const SEC_OF = { intake: 0, core: 0, treatment: 1, counseling: 2, ethics: 2 };
function secCounts(c) {
  const n = [0, 0, 0];
  (c.questions || []).forEach((q) => { const s = SEC_OF[q && q.domain]; if (s != null) n[s]++; });
  return n;
}

const dir = __dirname;
const batchFiles = fs.readdirSync(dir).filter((f) => /^deep-cases-batch-.*\.js$/.test(f)).sort();
const sourceFiles = [];
if (fs.existsSync(path.join(dir, 'exemplar-deep-mdd.js'))) sourceFiles.push('exemplar-deep-mdd.js');
sourceFiles.push(...batchFiles);

const byId = new Map();
const fileOf = new Map();
for (const f of sourceFiles) {
  let cases = [];
  try { const m = require(path.join(dir, f)); cases = m.CASES || m.GENERATED_CASES || []; }
  catch (e) { console.error('Could not load ' + f + ': ' + e.message); process.exit(1); }
  for (const c of cases) {
    if (byId.has(c.id)) { console.error('  DUP id ' + c.id + ' in ' + f + ' (already from ' + fileOf.get(c.id) + ') — skipping'); continue; }
    byId.set(c.id, c); fileOf.set(c.id, f);
  }
}
const allCases = [...byId.values()];

const DRY_RUN = process.argv.includes('--dry-run');
const STATUS = process.argv.includes('--publish') ? 'published' : 'sme_review';

console.log('Discovered ' + sourceFiles.length + ' source file(s): ' + sourceFiles.join(', '));
console.log('Validating ' + allCases.length + ' deep case(s)\n');

const vopts = { categories: bp.CATEGORY_NAMES, allowedSources: ALLOWED_SOURCES };
let bad = 0;
for (const c of allCases) {
  const r = validateExamDepth(c, vopts);
  if (!r.ok) {
    bad++;
    console.log('  FAIL ' + (c.id || c.title));
    r.errors.forEach((e) => console.log('       ' + e));
  } else {
    console.log('  OK   ' + c.id + ' — ' + c.questions.length + ' q, sections ' + JSON.stringify(secCounts(c)) + ' [' + c.category + ']');
  }
}
if (bad > 0) { console.error('\nAborting: ' + bad + ' case(s) failed validation. Nothing imported.'); process.exit(1); }

const cov = {};
allCases.forEach((c) => { cov[c.category] = (cov[c.category] || 0) + 1; });
console.log('\nAll cases passed. Coverage: ' + Object.entries(cov).map(([k, v]) => k + ' ' + v).join(', '));

if (DRY_RUN) {
  console.log('\n--dry-run: would upsert ' + allCases.length + ' ContentItem(s); new ones get status "' + STATUS + '". No DB changes.');
  process.exit(0);
}

const MONGO_URI = process.env.MONGO_URI;
if (!MONGO_URI) { console.error('\nSet MONGO_URI env var (or use --dry-run).'); process.exit(1); }

const mongoose = require('mongoose');
const ContentItem = require('../../models/ContentItem');
const Exam = require('../../models/Exam');

function setFields(examId, c) {
  return {
    examId,
    format: 'case_sim',
    externalId: c.id,
    title: c.title,
    category: c.category,
    difficulty: c.difficulty,
    references: c.references || [],
    caseSim: c,
  };
}

async function run() {
  await mongoose.connect(MONGO_URI, { dbName: 'passreadyprep' });
  const exam = await Exam.findOneAndUpdate(
    { key: 'ncmhce' },
    { $setOnInsert: {
        key: 'ncmhce',
        name: 'National Clinical Mental Health Counseling Examination',
        profession: 'counseling', board: 'NBCC',
        formatsSupported: ['case_sim'], status: 'live',
      } },
    { upsert: true, new: true }
  );
  console.log('\nConnected. Exam ncmhce=' + exam._id + ' — writing ContentItems (new status="' + STATUS + '")\n');

  let added = 0, updated = 0;
  for (const c of allCases) {
    const res = await ContentItem.updateOne(
      { examId: exam._id, externalId: c.id },
      { $set: setFields(exam._id, c), $setOnInsert: { status: STATUS } },
      { upsert: true }
    );
    if (res.upsertedCount) { console.log('  ADD  ' + c.id + ': ' + c.title + ' [' + c.category + ']'); added += 1; }
    else { console.log('  UPD  ' + c.id + ' (content refreshed; status unchanged)'); updated += 1; }
  }

  const pending = await ContentItem.countDocuments({ examId: exam._id, status: 'sme_review' });
  const live = await ContentItem.countDocuments({ examId: exam._id, status: 'published' });
  console.log('\nDone. Added ' + added + ', Updated ' + updated + ', Total ' + allCases.length);
  console.log('ContentItems now under ncmhce — sme_review: ' + pending + ', published: ' + live);
  await mongoose.disconnect();
}

run().catch((e) => { console.error(e); process.exit(1); });
