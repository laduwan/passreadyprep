#!/usr/bin/env node
// shuffle-options.js — Distribute correct-answer positions evenly across A/B/C/D.
//
// Problem: AI-generated questions almost always place the correct answer at
// position 0 (A). Students quickly learn to default to A. This tool
// deterministically shuffles each question's options so the correct answer
// lands at a position determined by a hash of (caseId + questionIndex),
// producing ~25% in each slot across the full question bank.
//
// The shuffle preserves all option fields (text, weight, isCorrect,
// explanation, rationale, id, etc.) — only the array index changes.
//
// Usage:
//   node tools/cases/shuffle-options.js --audit       # report current distribution
//   node tools/cases/shuffle-options.js --fix         # shuffle and write to DB
//   node tools/cases/shuffle-options.js --fix --dry-run

const mongoose = require('mongoose');
require('dotenv').config();

const MONGO_URI = process.env.MONGO_URI;
if (!MONGO_URI) { console.error('MONGO_URI not set'); process.exit(1); }

const args = process.argv.slice(2);
const AUDIT_ONLY = args.includes('--audit');
const DO_FIX = args.includes('--fix');
const DRY_RUN = args.includes('--dry-run');

if (!AUDIT_ONLY && !DO_FIX) {
  console.log('Usage: node shuffle-options.js --audit | --fix [--dry-run]');
  process.exit(0);
}

function simpleHash(str) {
  let h = 0;
  for (let i = 0; i < str.length; i++) {
    h = ((h << 5) - h + str.charCodeAt(i)) | 0;
  }
  return Math.abs(h);
}

async function main() {
  await mongoose.connect(MONGO_URI);
  console.log('Connected to MongoDB');

  const ContentItem = mongoose.connection.collection('contentitems');
  const Exam = mongoose.connection.collection('exams');

  const exam = await Exam.findOne({ key: 'ncmhce' });
  if (!exam) { console.error('Exam not found'); process.exit(1); }

  const cases = await ContentItem.find({
    examId: exam._id,
    format: 'case_sim',
    status: 'published',
  }).project({ externalId: 1, caseSim: 1 }).toArray();

  console.log(`Loaded ${cases.length} published cases\n`);

  const before = { 0: 0, 1: 0, 2: 0, 3: 0 };
  const after = { 0: 0, 1: 0, 2: 0, 3: 0 };
  let totalQ = 0;
  let shuffled = 0;
  let casesModified = 0;

  for (const doc of cases) {
    const cs = doc.caseSim;
    if (!cs || !cs.questions) continue;

    let caseChanged = false;

    for (let qi = 0; qi < cs.questions.length; qi++) {
      const q = cs.questions[qi];
      if (!q.options || q.options.length !== 4) continue;

      const ci = q.options.findIndex((o) => o.isCorrect);
      if (ci < 0) continue;
      totalQ++;
      before[ci]++;

      const hashKey = (doc.externalId || '') + '-q' + qi;
      const targetPos = simpleHash(hashKey) % 4;
      after[targetPos]++;

      if (ci !== targetPos) {
        shuffled++;
        if (DO_FIX) {
          const temp = q.options[ci];
          q.options[ci] = q.options[targetPos];
          q.options[targetPos] = temp;
          caseChanged = true;
        }
      }
    }

    if (caseChanged && DO_FIX && !DRY_RUN) {
      await ContentItem.updateOne(
        { _id: doc._id },
        { $set: { 'caseSim.questions': cs.questions } }
      );
      casesModified++;
    } else if (caseChanged) {
      casesModified++;
    }
  }

  console.log('=== POSITION DISTRIBUTION ===');
  console.log(`Total questions: ${totalQ}`);
  console.log('\nBefore:');
  for (let p = 0; p < 4; p++) {
    console.log(`  Position ${p} (${['A', 'B', 'C', 'D'][p]}): ${before[p]} (${((before[p] / totalQ) * 100).toFixed(1)}%)`);
  }
  console.log('\nAfter shuffle:');
  for (let p = 0; p < 4; p++) {
    console.log(`  Position ${p} (${['A', 'B', 'C', 'D'][p]}): ${after[p]} (${((after[p] / totalQ) * 100).toFixed(1)}%)`);
  }
  console.log(`\nQuestions shuffled: ${shuffled}`);
  console.log(`Cases modified: ${casesModified}`);
  if (DRY_RUN) console.log('(DRY RUN — no changes written)');

  await mongoose.disconnect();
}

main().catch((err) => { console.error(err); process.exit(1); });
