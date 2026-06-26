#!/usr/bin/env node
// ============================================================================
// bank-shape.js — read-only snapshot of the LIVE published case bank, measured
// against the real NCMHCE (each real case has 9-15 questions).
//
// Shows: how many cases are exam-faithful (9-15 q) vs below the 9-question
// floor (the 5q legacy cases that need upgrading or retiring), and per category
// how many deep cases exist vs the target needed for full deep-only mock draws.
// Never writes.
//
//   node tools/cases/bank-shape.js
//   node tools/cases/bank-shape.js --per-cat 3   (raise the deep target)
// MONGO_URI from env / .env.
// ============================================================================

try { require('dotenv').config(); } catch (_) {}
const mongoose = require('mongoose');
const Exam = require('../../models/Exam');
const ContentItem = require('../../models/ContentItem');
let CATS = [];
try { CATS = require('./blueprint').CATEGORY_NAMES || []; } catch (e) {}

function flag(n, d) { const i = process.argv.indexOf('--' + n); return i >= 0 && process.argv[i + 1] ? process.argv[i + 1] : d; }
const PER_CAT = parseInt(flag('per-cat', '2'), 10);   // deep cases/category for deep-only mocks

async function main() {
  if (!process.env.MONGO_URI) { console.error('MONGO_URI is not set. Add it to your .env first.'); process.exit(1); }
  await mongoose.connect(process.env.MONGO_URI, { dbName: 'passreadyprep' });
  console.log('Connected to MongoDB (db: passreadyprep)\n');

  const exam = await Exam.findOne({ key: 'ncmhce' });
  const f = { format: 'case_sim', status: 'published' };
  if (exam) f.examId = exam._id;
  const docs = await ContentItem.find(f).select('externalId category caseSim').lean();

  const cat = {}, catDeep = {}, dx = {};
  let inBand = 0, belowFloor = 0, aboveBand = 0;
  docs.forEach((d) => {
    const c = d.caseSim || {};
    const ct = c.category || d.category || '?';
    const dn = (c.primaryDiagnosis && c.primaryDiagnosis.name) || '?';
    const q = (c.questions || []).length;
    cat[ct] = (cat[ct] || 0) + 1;
    dx[dn] = (dx[dn] || 0) + 1;
    if (q < 9) belowFloor += 1;
    else if (q <= 15) { inBand += 1; catDeep[ct] = (catDeep[ct] || 0) + 1; }
    else aboveBand += 1;
  });

  console.log('Published cases: ' + docs.length);
  console.log('\nDepth vs the real exam (cases have 9-15 questions):');
  console.log('  ' + String(inBand).padStart(3) + '  exam-faithful (9-15 q)');
  console.log('  ' + String(belowFloor).padStart(3) + '  below the 9-question floor   <- upgrade or retire (the 5q legacy cases)');
  if (aboveBand) console.log('  ' + String(aboveBand).padStart(3) + '  over 15 q (trim toward 13)');

  console.log('\n=== deep coverage per category (target ' + PER_CAT + ' for deep-only mocks) ===');
  const allCats = Array.from(new Set([].concat(CATS, Object.keys(cat))));
  allCats.sort((a, b) => (catDeep[a] || 0) - (catDeep[b] || 0) || a.localeCompare(b));
  let stillNeeded = 0;
  allCats.forEach((c) => {
    const have = catDeep[c] || 0;
    const need = Math.max(0, PER_CAT - have);
    stillNeeded += need;
    console.log('  ' + have + '/' + PER_CAT + '  ' + c + (need ? '   needs ' + need + ' more' : '   done'));
  });
  console.log('\nDeep cases still needed to hit ' + PER_CAT + '/category: ' + stillNeeded +
    (stillNeeded ? '   (the cron will fill these on its own)' : '   — full coverage'));

  console.log('\n=== diagnoses still heavy (4+ cases) ===');
  const heavy = Object.entries(dx).filter(([, n]) => n >= 4).sort((a, b) => b[1] - a[1]);
  if (!heavy.length) console.log('  none — nicely balanced');
  heavy.forEach(([d, n]) => console.log('  ' + String(n).padStart(2) + '  ' + d));

  await mongoose.disconnect();
}
main().catch((e) => { console.error(e); process.exit(1); });
