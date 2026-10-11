#!/usr/bin/env node
// Validate the hand-authored NCE seed bank without touching the database.
//   node tools/nce/check-nce.js                       # every seed file
//   node tools/nce/check-nce.js tools/nce/seed/x.js   # one file (dupes still checked against all)
const path = require('path');
const { loadSeed, checkSeed, seedFiles } = require('./seedLib');

const only = process.argv.slice(2).map((p) => path.resolve(p));
const all = loadSeed(seedFiles());
const target = only.length ? all.filter((e) => only.some((p) => path.basename(p) === e.file)) : all;
const r = checkSeed(target, { allEntries: all });

r.problems.forEach((p) => console.log(`✗ ${p.file} ${p.id}\n    - ${p.errors.join('\n    - ')}`));
// Key-letter balance is checked per outline: current items have 4 options
// (expect ~25% each), 2027 items have 3 (expect ~33% each).
const n4 = Object.values(r.keyDist).reduce((a, b) => a + b, 0);
const n3 = Object.values(r.keyDist2027).reduce((a, b) => a + b, 0);
const pct = (dist, n) => Object.entries(dist).map(([k, v]) => `${k.toUpperCase()} ${Math.round(100 * v / (n || 1))}%`).join('  ');
console.log(`\n${r.count} items · ${r.problems.length} failing · key letters: ${pct(r.keyDist, n4)}${n3 ? `  |  2027 (${n3}): ${pct(r.keyDist2027, n3)}` : ''}`);
console.log('per domain:', JSON.stringify(r.perDomain));
const skew = (n4 >= 12 && Object.values(r.keyDist).some((v) => v / n4 > 0.35))
  || (n3 >= 12 && Object.values(r.keyDist2027).some((v) => v / n3 > 0.42));
if (skew) console.log('⚠ key letters are skewed — no letter should be the key on more than ~35% of items (~42% on three-option 2027 items)');
process.exit(r.ok && !skew ? 0 : 1);
