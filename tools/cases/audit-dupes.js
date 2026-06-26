#!/usr/bin/env node
// ============================================================================
// audit-dupes.js — find true near-duplicate SCENARIOS in the LIVE case bank.
//
// The repo's committed case files are only a fraction of what's in MongoDB, so
// duplicates can only be found against the live data. This reads every case_sim
// ContentItem under the ncmhce exam and runs them through dedup.js — the same
// scenario fingerprinting generateCases.js uses — to surface reworded
// near-duplicates even when their titles and diagnoses differ.
//
// READ-ONLY. Never writes. Decide retirements yourself from the report.
//
//   node tools/cases/audit-dupes.js                 (published only, thr 0.50)
//   node tools/cases/audit-dupes.js --threshold 0.45 (widen to borderline)
//   node tools/cases/audit-dupes.js --all            (include sme_review/draft too)
// MONGO_URI from env / .env, same as the server.
// ============================================================================

require('dotenv').config();
const mongoose = require('mongoose');
const Exam = require('../../models/Exam');
const ContentItem = require('../../models/ContentItem');
const dedup = require('./dedup');

const argThresh = process.argv.indexOf('--threshold');
const THRESHOLD = argThresh >= 0 ? parseFloat(process.argv[argThresh + 1]) : 0.5;
const ALL = process.argv.includes('--all');

async function main() {
  if (!process.env.MONGO_URI) { console.error('MONGO_URI is not set. Add it to your .env first.'); process.exit(1); }
  await mongoose.connect(process.env.MONGO_URI, { dbName: 'passreadyprep' });
  console.log('Connected to MongoDB (db: passreadyprep)\n');

  const exam = await Exam.findOne({ key: 'ncmhce' });
  const filter = { format: 'case_sim' };
  if (exam) filter.examId = exam._id;
  if (!ALL) filter.status = 'published';

  const docs = await ContentItem.find(filter).select('externalId status caseSim').lean();
  console.log('Loaded ' + docs.length + ' case(s) (' + (ALL ? 'all statuses' : 'published only') + ')');

  const cases = docs.map((d) => {
    const c = Object.assign({}, d.caseSim || {});
    c.id = c.id || d.externalId;
    c.__status = d.status;
    return c;
  });
  const meta = {};
  cases.forEach((c) => { meta[c.id] = { s: c.__status, q: (c.questions || []).length, dx: (c.primaryDiagnosis && c.primaryDiagnosis.name) || '', t: c.title || '' }; });

  const pairs = dedup.findNearDuplicates(cases, { threshold: THRESHOLD });
  console.log('\n=== near-duplicate scenario pairs (composite >= ' + THRESHOLD + '): ' + pairs.length + ' ===\n');

  const tag = (id) => { const m = meta[id] || {}; return id + '  [' + m.s + ', ' + m.q + 'q]  ' + (m.dx ? m.dx + ' — ' : '') + '"' + (m.t || '').slice(0, 40) + '"'; };
  pairs.forEach((p) => {
    console.log(p.composite + '  (text ' + p.text + (p.sameDx ? ', same dx' : '') + ')');
    console.log('   A ' + tag(p.a));
    console.log('   B ' + tag(p.b) + '\n');
  });
  if (!pairs.length) console.log('No near-duplicate scenarios at this threshold. Lower it (e.g. --threshold 0.42) to surface borderline pairs.');

  await mongoose.disconnect();
}
main().catch((e) => { console.error(e); process.exit(1); });
