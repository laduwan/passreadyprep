#!/usr/bin/env node
// ============================================================================
// dedup-retire.js — cluster near-duplicate scenarios and retire the extras.
//
// Reuses dedup.js (the platform's own scenario fingerprinting) against the LIVE
// bank, groups duplicates into clusters (union-find over near-dup pairs), keeps
// ONE representative per cluster (deepest case wins; ties broken by lowest id),
// and retires the rest by setting status -> 'draft' (un-served, not in the
// Pending queue, fully reversible by re-publishing).
//
// Always DRY by default. Nothing is written unless you pass --apply.
//
//   node tools/cases/dedup-retire.js --exact                 (plan: identical only)
//   node tools/cases/dedup-retire.js --exact --apply         (retire identical copies)
//   node tools/cases/dedup-retire.js --threshold 0.8         (plan: tight near-dupes)
//   node tools/cases/dedup-retire.js --threshold 0.8 --apply (retire them)
//   node tools/cases/dedup-retire.js --ids G187,G188 --apply (retire explicit ids)
// MONGO_URI from env / .env.
// ============================================================================

require('dotenv').config();
const mongoose = require('mongoose');
const Exam = require('../../models/Exam');
const ContentItem = require('../../models/ContentItem');
const dedup = require('./dedup');

const APPLY = process.argv.includes('--apply');
const EXACT = process.argv.includes('--exact');
const ai = process.argv.indexOf('--threshold');
const THRESHOLD = ai >= 0 ? parseFloat(process.argv[ai + 1]) : 0.8;
const idi = process.argv.indexOf('--ids');
const EXPLICIT = idi >= 0 ? (process.argv[idi + 1] || '').split(',').map((s) => s.trim()).filter(Boolean) : null;

function shortId(id) { return id; }

async function main() {
  if (!process.env.MONGO_URI) { console.error('MONGO_URI is not set. Add it to your .env first.'); process.exit(1); }
  await mongoose.connect(process.env.MONGO_URI, { dbName: 'passreadyprep' });
  console.log('Connected to MongoDB (db: passreadyprep)\n');

  const exam = await Exam.findOne({ key: 'ncmhce' });
  const baseFilter = { format: 'case_sim', status: 'published' };
  if (exam) baseFilter.examId = exam._id;
  const docs = await ContentItem.find(baseFilter).select('externalId status caseSim').lean();
  const meta = {};
  docs.forEach((d) => { const c = d.caseSim || {}; meta[d.externalId] = { q: (c.questions || []).length, dx: (c.primaryDiagnosis && c.primaryDiagnosis.name) || '', t: c.title || '' }; });

  let retire = [];

  if (EXPLICIT) {
    retire = EXPLICIT.filter((id) => meta[id]);
    console.log('Explicit retire list: ' + retire.length + ' published case(s).');
  } else {
    const cases = docs.map((d) => { const c = Object.assign({}, d.caseSim || {}); c.id = c.id || d.externalId; return c; });
    let pairs = dedup.findNearDuplicates(cases, { threshold: EXACT ? 0.99 : THRESHOLD });
    if (EXACT) pairs = pairs.filter((p) => p.composite >= 1 && p.text >= 1);
    console.log((EXACT ? 'EXACT duplicate' : 'Near-duplicate (>= ' + THRESHOLD + ')') + ' pairs: ' + pairs.length + '\n');

    // union-find clustering over the pair set
    const parent = {};
    const find = (x) => { while (parent[x] !== undefined && parent[x] !== x) { parent[x] = parent[parent[x]] || parent[x]; x = parent[x]; } return x; };
    const ids = new Set();
    pairs.forEach((p) => { ids.add(p.a); ids.add(p.b); });
    ids.forEach((id) => (parent[id] = id));
    pairs.forEach((p) => { const ra = find(p.a), rb = find(p.b); if (ra !== rb) parent[ra] = rb; });
    const clusters = {};
    ids.forEach((id) => { const r = find(id); (clusters[r] = clusters[r] || []).push(id); });

    Object.values(clusters).forEach((members) => {
      // keep deepest (most questions); tie -> lowest id
      members.sort((a, b) => (meta[b].q - meta[a].q) || (a < b ? -1 : 1));
      const keep = members[0];
      const drop = members.slice(1);
      console.log('  ' + (meta[keep].dx || '?') + '  (cluster of ' + members.length + ')');
      console.log('     KEEP   ' + keep + ' [' + meta[keep].q + 'q] "' + (meta[keep].t || '').slice(0, 38) + '"');
      drop.forEach((id) => console.log('     retire ' + id + ' [' + meta[id].q + 'q] "' + (meta[id].t || '').slice(0, 38) + '"'));
      retire = retire.concat(drop);
    });
  }

  console.log('\n=== ' + retire.length + ' case(s) to retire (-> draft) ===');
  if (!retire.length) { await mongoose.disconnect(); return; }

  if (!APPLY) {
    console.log('DRY RUN. Re-run with --apply to set these to status "draft".');
    console.log(retire.join(','));
    await mongoose.disconnect();
    return;
  }

  let changed = 0;
  for (const id of retire) {
    const r = await ContentItem.updateOne(
      { externalId: id, status: 'published' },
      { $set: { status: 'draft' } }
    );
    if (r.modifiedCount) changed += 1;
  }
  const liveNow = await ContentItem.countDocuments(Object.assign({}, baseFilter));
  console.log('Retired ' + changed + ' case(s). Published now: ' + liveNow + '.');
  console.log('Reversible: re-publish any from /review.html (set its status back to published) if needed.');
  await mongoose.disconnect();
}
main().catch((e) => { console.error(e); process.exit(1); });
