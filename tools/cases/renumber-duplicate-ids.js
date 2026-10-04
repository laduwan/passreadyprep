#!/usr/bin/env node
// ============================================================================
// renumber-duplicate-ids.js — give every case a collection-wide unique
// externalId.
//
// externalId is unique only per exam (models/ContentItem.js index), but the
// admin and learner routes look cases up by externalId alone. generate-deep.js
// --spec 2027 used to mint D-ids from the ncmhce-2027 cases only, so it reused
// ncmhce-D211..D229, which live ncmhce cases already had. Opening one of those
// pending 2027 cases loaded the published case instead, and Publish never
// reached the 2027 case.
//
// For each externalId held by more than one doc, the copy to keep is the
// published one (else the oldest). Every other copy gets a fresh id from
// idAllocator, above every id in the collection and in the batch files.
// externalId and caseSim.id both change; nothing else is touched.
//
//   node tools/cases/renumber-duplicate-ids.js            (plan only)
//   node tools/cases/renumber-duplicate-ids.js --apply
// MONGO_URI from env / .env
// ============================================================================

require('dotenv').config();
const mongoose = require('mongoose');
const ContentItem = require('../../models/ContentItem');
const idAllocator = require('./idAllocator');

const APPLY = process.argv.includes('--apply');

async function main() {
  if (!process.env.MONGO_URI) { console.error('MONGO_URI not set.'); process.exit(1); }
  await mongoose.connect(process.env.MONGO_URI, { dbName: 'passreadyprep' });

  const dups = await ContentItem.aggregate([
    { $match: { externalId: { $type: 'string' } } },
    { $group: { _id: '$externalId', docs: { $push: { _id: '$_id', status: '$status', title: '$title', createdAt: '$createdAt' } } } },
    { $match: { 'docs.1': { $exists: true } } },
    { $sort: { _id: 1 } },
  ]);
  if (!dups.length) { console.log('No duplicate externalIds.'); await mongoose.disconnect(); return; }

  const taken = new Set((await ContentItem.distinct('externalId')).filter(Boolean));
  const plan = [];
  for (const g of dups) {
    const docs = g.docs.slice().sort((a, b) =>
      (a.status === 'published' ? 0 : 1) - (b.status === 'published' ? 0 : 1) || new Date(a.createdAt) - new Date(b.createdAt));
    const m = /^ncmhce-([A-Z]+)(0*)(\d+)$/.exec(g._id);
    const prefix = m ? m[1] : 'D';
    const pad = m && m[2] ? m[2].length + m[3].length : 0;
    console.log(g._id + ' — keep ' + docs[0]._id + ' [' + docs[0].status + '] "' + (docs[0].title || '').slice(0, 50) + '"');
    for (const d of docs.slice(1)) {
      const newId = idAllocator.next(taken, { prefix, pad });
      taken.add(newId);
      plan.push({ _id: d._id, from: g._id, to: newId });
      console.log('    ' + d._id + ' [' + d.status + '] "' + (d.title || '').slice(0, 50) + '" -> ' + newId);
    }
  }

  if (!APPLY) { console.log('\nPlan only — ' + plan.length + ' case(s) would be renumbered. Add --apply to write.'); await mongoose.disconnect(); return; }
  for (const p of plan) {
    await ContentItem.updateOne({ _id: p._id, externalId: p.from }, { $set: { externalId: p.to, 'caseSim.id': p.to } });
  }
  console.log('\nRenumbered ' + plan.length + ' case(s).');
  await mongoose.disconnect();
}

main().catch((e) => { console.error(e); process.exit(1); });
