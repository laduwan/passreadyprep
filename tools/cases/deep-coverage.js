#!/usr/bin/env node
// ============================================================================
// deep-coverage.js — read-only per-category DEEP coverage of the LIVE bank.
//
// This is the check behind "2 deep cases per category." It prints, for every
// blueprint category, how many PUBLISHED deep (>= DEEP_MIN questions) case sims
// exist, flags any at zero or below the per-category target, and — crucially —
// lists deep cases sitting under a category label that ISN'T in the blueprint,
// which is how coverage silently goes missing (e.g. Ethics cases labelled
// "Ethical & Legal"). Run this instead of trusting a summary. Never writes.
//
//   node tools/cases/deep-coverage.js              (target 2, deep = 11+ q)
//   node tools/cases/deep-coverage.js --target 3
//
// MONGO_URI is read from the environment (already set on Render).
// ============================================================================

require('dotenv').config();
const mongoose = require('mongoose');
const Exam = require('../../models/Exam');
const ContentItem = require('../../models/ContentItem');
const { validateDifficultyMix } = require('./examDepth');

const DEEP_MIN = 11; // matches bank-shape.js's deep threshold
const ti = process.argv.indexOf('--target');
const TARGET = ti !== -1 ? (parseInt(process.argv[ti + 1], 10) || 2) : 2;

let CATS = [];
let CATEGORIES = [];
try { const bp = require('./blueprint'); CATS = bp.CATEGORY_NAMES || []; CATEGORIES = bp.CATEGORIES || []; } catch (e) { /* no blueprint — fall back to observed */ }

function tally(docs) {
  const byCat = {};
  const deepCases = [];
  let deepTotal = 0;
  for (const d of docs) {
    const q = d.caseSim && Array.isArray(d.caseSim.questions) ? d.caseSim.questions.length : 0;
    if (q >= DEEP_MIN) {
      const cat = d.category || '(uncategorized)';
      byCat[cat] = (byCat[cat] || 0) + 1;
      deepTotal++;
      deepCases.push({ category: cat, difficulty: d.difficulty || (d.caseSim && d.caseSim.difficulty) });
    }
  }
  return { byCat, deepTotal, deepCases };
}

async function main() {
  if (!process.env.MONGO_URI) { console.error('MONGO_URI is not set. Add it to your .env first.'); process.exit(1); }
  await mongoose.connect(process.env.MONGO_URI, { dbName: 'passreadyprep' });
  console.log('Connected to MongoDB (db: passreadyprep)\n');

  const exam = await Exam.findOne({ key: 'ncmhce' });
  const filter = { format: 'case_sim', status: 'published' };
  if (exam) filter.examId = exam._id;
  const docs = await ContentItem.find(filter).select('category difficulty caseSim.questions caseSim.difficulty').lean();

  const { byCat, deepTotal, deepCases } = tally(docs);
  console.log('LIVE published deep cases (>=' + DEEP_MIN + 'q): ' + deepTotal + '   target: ' + TARGET + '/category');
  console.log('(published case sims scanned: ' + docs.length + ')\n');

  // Report against the blueprint categories when available, else observed labels.
  const cats = CATS.length ? CATS.slice() : Object.keys(byCat).sort();
  const zero = [], short = [];
  cats.forEach((c) => {
    const n = byCat[c] || 0;
    const mark = n === 0 ? 'X' : (n < TARGET ? '!' : ' ');
    if (n === 0) zero.push(c); else if (n < TARGET) short.push(c);
    console.log(' ' + mark + ' ' + String(n).padStart(2) + '  ' + c);
  });

  // Label drift: deep cases under a label the blueprint doesn't list.
  const drift = CATS.length ? Object.keys(byCat).filter((c) => !CATS.includes(c)) : [];
  if (drift.length) {
    console.log('\n!! deep cases under NON-blueprint labels (likely mislabelled): ' +
      drift.map((c) => c + ' (' + byCat[c] + ')').join(', '));
  }

  console.log('\nsummary: ' + zero.length + ' at ZERO, ' + short.length + ' below target ' + TARGET +
    (drift.length ? ', ' + drift.length + ' mislabelled bucket(s)' : ''));
  if (zero.length)  console.log('  zero : ' + zero.join(', '));
  if (short.length) console.log('  short: ' + short.join(', '));

  // difficulty mix should now be visible
  if (CATEGORIES.length) {
    const dm = validateDifficultyMix(deepCases, CATEGORIES);
    console.log('\n--- Difficulty mix vs. blueprint intent ---');
    if (dm.ok) {
      console.log('  in line with blueprint mix (within tolerance) for every category with cases.');
    } else {
      dm.warnings.forEach((w) => console.log('  warn ' + w));
    }
  }

  await mongoose.disconnect();
}

main().catch((e) => { console.error(e); process.exit(1); });
