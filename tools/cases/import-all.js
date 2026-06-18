#!/usr/bin/env node
// Import ALL cases (21-70) into MongoDB passreadyprep.contents
// Usage: MONGO_URI=mongodb+srv://... node tools/cases/import-all.js

const mongoose = require('mongoose');
const { CASES_21_30 } = require('./cases-21-30');
const { CASES_31_70 } = require('./cases-31-70');

const MONGO_URI = process.env.MONGO_URI;
if (!MONGO_URI) { console.error('Set MONGO_URI env var'); process.exit(1); }

const contentSchema = new mongoose.Schema({
  exam: { type: String, default: 'ncmhce' },
  type: { type: String, default: 'case' },
  externalId: String,
  title: String,
  category: String,
  difficulty: String,
  status: { type: String, default: 'sme_review' },
  caseSim: mongoose.Schema.Types.Mixed,
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
}, { collection: 'contents' });

const Content = mongoose.model('Content', contentSchema);

async function run() {
  await mongoose.connect(MONGO_URI, { dbName: 'passreadyprep' });
  console.log('Connected to MongoDB\n');

  const allCases = [...CASES_21_30, ...CASES_31_70];
  let added = 0, skipped = 0;

  for (const c of allCases) {
    const exists = await Content.findOne({ externalId: c.id });
    if (exists) { console.log('  SKIP ' + c.id + ' (exists)'); skipped++; continue; }

    await Content.create({
      exam: 'ncmhce', type: 'case',
      externalId: c.id,
      title: c.title,
      category: c.category,
      difficulty: c.difficulty,
      status: 'sme_review',
      caseSim: c,
    });
    console.log('  ADD  ' + c.id + ': ' + c.title + ' [' + c.category + ']');
    added++;
  }

  console.log('\nDone. Added: ' + added + ', Skipped: ' + skipped + ', Total in batch: ' + allCases.length);
  await mongoose.disconnect();
}

run().catch(e => { console.error(e); process.exit(1); });
