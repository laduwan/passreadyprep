#!/usr/bin/env node
// ============================================================================
// audit-quality.js — find LIVE cases that fail the schema, depth, or
// gold-standard item-quality gates (caseSchema.js + examDepth.js +
// qualityGate.js — the same three gates generate-deep.js runs before import).
//
// The repo's committed case files are only a fraction of what's in MongoDB
// (older batches predate the weight-gradient / structural-parity rules), so
// this reads every case_sim ContentItem and re-runs today's gates against it.
//
// READ-ONLY by default. Pass --flag to write findings onto each failing case
// (reviewNote + needsWork:true) so they surface in the /review.html queue for
// an SME, or a downstream repair pass (see fix-distractors.js) to pick up.
//
//   node tools/cases/audit-quality.js                (published only, report)
//   node tools/cases/audit-quality.js --all          (include sme_review/draft)
//   node tools/cases/audit-quality.js --ids D012,D045 (audit specific ids)
//   node tools/cases/audit-quality.js --flag         (write reviewNote+needsWork)
// MONGO_URI from env / .env, same as the server.
// ============================================================================

require('dotenv').config();
const mongoose = require('mongoose');
const Exam = require('../../models/Exam');
const ContentItem = require('../../models/ContentItem');
const { validateCase } = require('./caseSchema');
const { validateExamDepth } = require('./examDepth');
const { checkCaseQuality } = require('./qualityGate');
const { ALLOWED_SOURCES } = require('./references');
const bp = require('./blueprint');

const ALL = process.argv.includes('--all');
const FLAG = process.argv.includes('--flag');
const idi = process.argv.indexOf('--ids');
const EXPLICIT = idi >= 0 ? (process.argv[idi + 1] || '').split(',').map((s) => s.trim()).filter(Boolean) : null;

const NOTE_PREFIX = 'Quality gate:';

async function main() {
  if (!process.env.MONGO_URI) { console.error('MONGO_URI is not set. Add it to your .env first.'); process.exit(1); }
  await mongoose.connect(process.env.MONGO_URI, { dbName: 'passreadyprep' });
  console.log('Connected to MongoDB (db: passreadyprep)\n');

  const exam = await Exam.findOne({ key: 'ncmhce' });
  const filter = { format: 'case_sim' };
  if (exam) filter.examId = exam._id;
  if (EXPLICIT) filter.externalId = { $in: EXPLICIT };
  else if (!ALL) filter.status = 'published';

  const docs = await ContentItem.find(filter).select('externalId status reviewNote caseSim').lean();
  console.log('Loaded ' + docs.length + ' case(s) (' + (EXPLICIT ? 'explicit ids' : ALL ? 'all statuses' : 'published only') + ')\n');

  // caseSchema's length-cue check stays a warning here: qualityGate reports the
  // same condition as an error, and reporting it twice would crowd out other
  // findings in the (capped) reviewNote.
  const opts = { categories: bp.CATEGORY_NAMES, allowedSources: ALLOWED_SOURCES };
  const failing = [];

  for (const d of docs) {
    const c = Object.assign({}, d.caseSim || {});
    c.id = c.id || d.externalId;
    const schemaResult = validateCase(c, opts);
    const depthResult = (c.questions || []).length >= 11 ? validateExamDepth(c) : { ok: true, errors: [] };
    const qualityResult = checkCaseQuality(c);
    const errors = [...schemaResult.errors, ...depthResult.errors, ...qualityResult.errors];
    if (errors.length) failing.push({ _id: d._id, id: d.externalId, status: d.status, title: c.title, reviewNote: d.reviewNote, errors });
  }

  console.log('=== ' + failing.length + ' of ' + docs.length + ' case(s) fail one or more gates ===\n');
  failing.forEach((f) => {
    console.log(f.id + '  [' + f.status + ']  "' + (f.title || '').slice(0, 50) + '"');
    f.errors.forEach((e) => console.log('    ' + e));
    console.log('');
  });

  if (!failing.length) { await mongoose.disconnect(); return; }

  if (!FLAG) {
    console.log('Report only. Re-run with --flag to set reviewNote + needsWork on these cases.');
    await mongoose.disconnect();
    return;
  }

  let flagged = 0;
  for (const f of failing) {
    const gateLine = NOTE_PREFIX + ' ' + f.errors.slice(0, 8).join(' | ') + (f.errors.length > 8 ? ` (+${f.errors.length - 8} more)` : '');
    // Keep any human-written note; replace only our own earlier gate line.
    const kept = String(f.reviewNote || '').split('\n').filter((l) => l.trim() && !l.startsWith(NOTE_PREFIX));
    const note = kept.concat(gateLine).join('\n');
    const r = await ContentItem.updateOne({ _id: f._id }, { $set: { reviewNote: note, needsWork: true } });
    if (r.modifiedCount) flagged += 1;
  }
  console.log('Flagged ' + flagged + ' case(s) with needsWork + reviewNote.');
  await mongoose.disconnect();
}
main().catch((e) => { console.error(e); process.exit(1); });
