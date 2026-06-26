#!/usr/bin/env node
// ============================================================================
// bank-shape.js — read-only snapshot of the LIVE published case bank.
//
// Prints depth split (deep vs shallow), per-category counts (flagging blueprint
// categories with ZERO coverage), and which diagnoses are still heavy (4+),
// so you can see where the bank is thin or lopsided after deduping. Never writes.
//
//   node tools/cases/bank-shape.js
// MONGO_URI from env / .env.
// ============================================================================

require('dotenv').config();
const mongoose = require('mongoose');
const Exam = require('../../models/Exam');
const ContentItem = require('../../models/ContentItem');
let CATS = [];
try { CATS = require('./blueprint').CATEGORY_NAMES || []; } catch (e) {}

async function main() {
  if (!process.env.MONGO_URI) { console.error('MONGO_URI is not set. Add it to your .env first.'); process.exit(1); }
  await mongoose.connect(process.env.MONGO_URI, { dbName: 'passreadyprep' });
  console.log('Connected to MongoDB (db: passreadyprep)\n');

  const exam = await Exam.findOne({ key: 'ncmhce' });
  const f = { format: 'case_sim', status: 'published' };
  if (exam) f.examId = exam._id;
  const docs = await ContentItem.find(f).select('externalId category caseSim').lean();
  console.log('Published cases: ' + docs.length);

  const cat = {}, dx = {};
  let deep = 0, shallow = 0;
  docs.forEach((d) => {
    const c = d.caseSim || {};
    const ct = c.category || d.category || '?';
    const dn = (c.primaryDiagnosis && c.primaryDiagnosis.name) || '?';
    const q = (c.questions || []).length;
    cat[ct] = (cat[ct] || 0) + 1;
    dx[dn] = (dx[dn] || 0) + 1;
    if (q >= 11) deep += 1; else shallow += 1;
  });
  console.log('Depth: ' + deep + ' deep (>=11q), ' + shallow + ' shallow');
  console.log('Unique diagnoses: ' + Object.keys(dx).length + '\n');

  console.log('=== by category ===');
  const allCats = Array.from(new Set([].concat(CATS, Object.keys(cat))));
  allCats.sort((a, b) => (cat[b] || 0) - (cat[a] || 0) || a.localeCompare(b));
  allCats.forEach((c) => {
    const n = cat[c] || 0;
    console.log('  ' + String(n).padStart(3) + '  ' + c + (n === 0 ? '   <- ZERO coverage' : ''));
  });

  console.log('\n=== diagnoses still heavy (4+ cases) ===');
  const heavy = Object.entries(dx).filter(([, n]) => n >= 4).sort((a, b) => b[1] - a[1]);
  if (!heavy.length) console.log('  none — nicely balanced');
  heavy.forEach(([d, n]) => console.log('  ' + String(n).padStart(2) + '  ' + d));

  await mongoose.disconnect();
}
main().catch((e) => { console.error(e); process.exit(1); });
