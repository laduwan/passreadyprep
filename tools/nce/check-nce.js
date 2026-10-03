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
const n = r.count || 1;
const dist = Object.entries(r.keyDist).map(([k, v]) => `${k.toUpperCase()} ${Math.round(100 * v / n)}%`).join('  ');
console.log(`\n${r.count} items · ${r.problems.length} failing · key letters: ${dist}`);
console.log('per domain:', JSON.stringify(r.perDomain));
const skew = Object.values(r.keyDist).some((v) => r.count >= 12 && v / n > 0.35);
if (skew) console.log('⚠ key letters are skewed — no letter should be the key on more than ~35% of items');
process.exit(r.ok && !skew ? 0 : 1);
