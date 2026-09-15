#!/usr/bin/env node
// ============================================================================
// audit-banks.js — run the bank quality gate (utils/bankGate.js) against the
// four static banks the front-end loads directly (public/*-data.js). Read-only.
//
// The static banks were imported before the deep-case gate
// (tools/cases/qualityGate.js) existed and never had an equivalent of their
// own. This is the tool that says which items pass now and which do not, and
// what has to change to close the gap.
//
// Usage:
//   node tools/banks/audit-banks.js             # summary + per-bank counts
//   node tools/banks/audit-banks.js --verbose   # every error line
//   node tools/banks/audit-banks.js --json      # machine-readable output
// ============================================================================

const fs = require('fs');
const path = require('path');
const { checkBank } = require('../../utils/bankGate');

const VERBOSE = process.argv.includes('--verbose');
const JSON_OUT = process.argv.includes('--json');

// Each bank ships as an IIFE-free JS file that declares a top-level const.
// We eval it in a scoped module so we don't need to modify the source.
function loadBank(file, globalName) {
  const src = fs.readFileSync(file, 'utf8');
  const m = new module.constructor();
  m._compile(src + `\nmodule.exports = ${globalName};\n`, file);
  return m.exports;
}

const BANKS = [
  { file: 'public/knowledge-data.js', global: 'KNOWLEDGE_ITEMS', profile: 'recall',   name: 'knowledge' },
  { file: 'public/ca-quiz-data.js',   global: 'CA_QUIZ_ITEMS',   profile: 'recall',   name: 'ca-quiz'   },
  { file: 'public/nbs-data.js',       global: 'NBS_ITEMS',       profile: 'decision', name: 'nbs'       },
  { file: 'public/assess-data.js',    global: 'ASSESS_ITEMS',    profile: 'decision', name: 'assess'    },
];

const root = path.resolve(__dirname, '..', '..');
const reports = BANKS.map((b) => {
  const items = loadBank(path.join(root, b.file), b.global);
  const rep = checkBank(items, b.profile, b.name);
  rep.file = b.file; rep.profile = b.profile;
  return rep;
});

if (JSON_OUT) { console.log(JSON.stringify(reports, null, 2)); process.exit(reports.some((r) => !r.ok) ? 1 : 0); }

let bad = 0;
for (const r of reports) {
  const status = r.ok ? 'PASS' : 'FAIL';
  console.log(`\n[${status}] ${r.file}  (profile: ${r.profile})`);
  console.log(`       ${r.summary}`);
  if (!r.ok) bad++;
  if (VERBOSE && r.errors.length) {
    r.errors.slice(0, 200).forEach((e) => console.log('       - ' + e));
    if (r.errors.length > 200) console.log(`       ... and ${r.errors.length - 200} more`);
  }
}
console.log('');
console.log(bad ? `\n${bad} of ${reports.length} banks fail the gate.` : '\nAll banks pass the gate.');
process.exit(bad ? 1 : 0);
