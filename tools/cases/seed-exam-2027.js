#!/usr/bin/env node
// Idempotent upsert of the ncmhce-2027 Exam document.
// Run: node tools/cases/seed-exam-2027.js

const mongoose = require('mongoose');
require('dotenv').config();

const MONGO_URI = process.env.MONGO_URI;
if (!MONGO_URI) { console.error('MONGO_URI not set'); process.exit(1); }

async function main() {
  await mongoose.connect(MONGO_URI, { dbName: 'passreadyprep' });
  console.log('Connected to MongoDB');

  const Exam = mongoose.connection.collection('exams');

  const source = await Exam.findOne({ key: 'ncmhce' });
  if (!source) { console.error('Source exam "ncmhce" not found — cannot copy profession'); process.exit(1); }

  const doc = {
    key: 'ncmhce-2027',
    name: 'NCMHCE (2027 specification)',
    board: 'NBCC',
    profession: source.profession,
    formatsSupported: ['case_sim'],
    status: 'coming_soon',
    updatedAt: new Date(),
  };

  const result = await Exam.updateOne(
    { key: 'ncmhce-2027' },
    { $set: doc, $setOnInsert: { createdAt: new Date() } },
    { upsert: true }
  );

  if (result.upsertedCount > 0) {
    console.log('Created ncmhce-2027 exam:', result.upsertedId);
  } else {
    console.log('Updated ncmhce-2027 exam (already existed)');
  }

  const saved = await Exam.findOne({ key: 'ncmhce-2027' });
  console.log(saved);

  await mongoose.disconnect();
}

main().catch((err) => { console.error(err); process.exit(1); });
