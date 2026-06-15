#!/usr/bin/env node
// ============================================================================
// validateCases.js — Validate any case file against the canonical schema.
// Usage:  node validateCases.js <file.js> [<file2.js> ...]
// Loads SEED_CASES / GENERATED_CASES / ADDITIONAL_CLINICAL_CASES / default array.
// Exits non-zero if any errors are found.
// ============================================================================
const path = require('path');
const { validateCaseSet } = require('./caseSchema');
const bp = require('./blueprint');
const { ALLOWED_SOURCES } = require('./references');
const dedup = require('./dedup');

const files = process.argv.slice(2);
if (files.length === 0) {
  console.error('Usage: node validateCases.js <file.js> [...]');
  process.exit(1);
}

function loadCases(file) {
  const m = require(path.resolve(file));
  return m.GENERATED_CASES || m.SEED_CASES || m.ADDITIONAL_CLINICAL_CASES || m.CASES ||
    (Array.isArray(m) ? m : []);
}

let totalErr = 0;
const all = [];
for (const f of files) {
  let cases = [];
  try { cases = loadCases(f); } catch (e) { console.error(`\n${f}: could not load — ${e.message}`); totalErr++; continue; }
  const r = validateCaseSet(cases, { categories: bp.CATEGORY_NAMES, allowedSources: ALLOWED_SOURCES });
  all.push(...cases);
  console.log(`\n${path.basename(f)} — ${r.count} cases — ${r.ok ? 'PASS' : 'FAIL (' + r.errors.length + ' errors)'}`);
  r.errors.slice(0, 25).forEach((e) => console.log('  ERR  ' + e));
  if (r.errors.length > 25) console.log('  ... ' + (r.errors.length - 25) + ' more');
  r.warnings.slice(0, 10).forEach((w) => console.log('  warn ' + w));
  totalErr += r.errors.length;
}

// Coverage summary across everything loaded
const t = bp.tally(all);
console.log('\n--- Coverage vs. blueprint (target 200) ---');
console.log('  counted: ' + t.total + (t.unmatched ? ('  uncategorized: ' + t.unmatched) : ''));
bp.gaps(all).forEach((g) => {
  const bar = g.have >= g.target ? 'OK ' : '   ';
  console.log('  ' + bar + g.category.padEnd(19) + g.have + '/' + g.target + (g.need ? ('  (need ' + g.need + ')') : ''));
});
const need = bp.gaps(all).reduce((s, g) => s + g.need, 0);
console.log('  still needed to reach 200: ' + need);

// Near-duplicate scenario audit
const dupes = dedup.findNearDuplicates(all);
console.log('\n--- Near-duplicate scenarios ---');
if (dupes.length === 0) {
  console.log('  none found above threshold.');
} else {
  console.log('  ' + dupes.length + ' similar pair(s) (review for overlap):');
  dupes.slice(0, 20).forEach((p) => console.log('  ' + p.a + '  ~  ' + p.b + '   (text ' + p.text + ', composite ' + p.composite + (p.sameDx ? ', same dx' : '') + ')'));
  if (dupes.length > 20) console.log('  ... ' + (dupes.length - 20) + ' more');
}

process.exit(totalErr ? 1 : 0);
