#!/usr/bin/env node
// ============================================================================
// audit-deep-cases.js — read-only audit of every deep-case source file in
// tools/cases/. Uses the deep-case bank's OWN gate (tools/cases/qualityGate.js)
// which enforces the same rules I applied to the four static banks (weight
// gradient {3,0,-1,-2}, length ratio <= 1.25, key-not-longest, no absolutes,
// commonMistake on distractors) plus the case-level structure.
//
// Also runs the position-variance check: how the keyed option is distributed
// across positions A/B/C/D within each case and across the whole bank.
//
// Read-only. Does not touch source files. Produces:
//   docs/deep-cases-audit.md   Per-case findings, aggregate summary.
// ============================================================================

const fs = require('fs');
const path = require('path');
const { checkQuestionQuality } = require('../cases/qualityGate');

const root = path.resolve(__dirname, '..', '..');
const casesDir = path.join(root, 'tools/cases');

// Every file that exports an array of case objects
const SOURCES = [
  { file: 'tools/cases/cases-21-30.js',      key: 'CASES_21_30'    },
  { file: 'tools/cases/cases-31-70.js',      key: 'CASES_31_70'    },
  { file: 'tools/cases/generated-cases.js',  key: 'GENERATED_CASES'},
  { file: 'tools/cases/migrated-cases.js',   key: 'MIGRATED_CASES' },
  { file: 'tools/cases/seed-cases.js',       key: 'SEED_CASES'     },
];
// deep-cases-batch-01..22 each export an array from a variable declaration —
// require() returns the module.exports, which may be an array directly or an
// object containing the array.
for (let i = 1; i <= 22; i++) {
  const num = String(i).padStart(2, '0');
  const f = path.join(casesDir, `deep-cases-batch-${num}.js`);
  if (fs.existsSync(f)) SOURCES.push({ file: `tools/cases/deep-cases-batch-${num}.js`, key: null });
}
SOURCES.push({ file: 'tools/cases/exemplar-deep-mdd.js', key: null });

function loadCases(spec) {
  const full = path.join(root, spec.file);
  const mod = require(full);
  if (Array.isArray(mod)) return mod;
  if (spec.key && mod && Array.isArray(mod[spec.key])) return mod[spec.key];
  // Try to find any array among exported values
  for (const v of Object.values(mod || {})) if (Array.isArray(v)) return v;
  return null;
}

const allCases = [];
SOURCES.forEach((spec) => {
  const cases = loadCases(spec);
  if (Array.isArray(cases)) cases.forEach((c) => allCases.push({ ...c, __source: spec.file }));
});

// ── Findings ────────────────────────────────────────────────────────────────
const out = [];
out.push('# Deep-case bank — quality audit');
out.push('');
out.push(`**Generated:** ${new Date().toISOString().slice(0, 10)}`);
out.push(`**Cases scanned:** ${allCases.length}`);
out.push(`**Sources:** ${SOURCES.length} files under \`tools/cases/\``);
out.push('');
out.push('Gate: `tools/cases/qualityGate.js` — weights `{3, 0, -1, -2}` exactly once each, length ratio ≤ 1.25, key not the sole longest, no absolutes in distractors, `commonMistake` on each distractor.');
out.push('');
out.push('---');
out.push('');

// Aggregate stats
const stats = {
  totalCases: allCases.length,
  totalQuestions: 0,
  perCase: { pass: 0, fail: 0 },
  perQuestion: { pass: 0, fail: 0 },
  errorCounts: { weights: 0, 'key-longest': 0, ratio: 0, absolutes: 0, mistake: 0, empty: 0, other: 0 },
  keyPositions: [0, 0, 0, 0],
  bySource: {},
};

const perSourceIssues = {};
const failedCases = [];

allCases.forEach((c) => {
  const src = c.__source;
  if (!stats.bySource[src]) stats.bySource[src] = { cases: 0, questions: 0, badCases: 0, badQuestions: 0 };
  stats.bySource[src].cases++;
  const caseErrors = [];
  const questions = c.questions || [];
  stats.totalQuestions += questions.length;
  stats.bySource[src].questions += questions.length;
  let caseBad = false;
  questions.forEach((q, qi) => {
    const tag = `[${c.id || c.externalId || 'case'}] q${qi + 1}`;
    const errs = checkQuestionQuality(q, tag);
    if (errs.length) {
      stats.perQuestion.fail++;
      stats.bySource[src].badQuestions++;
      caseBad = true;
      caseErrors.push(...errs);
      // Bucket the errors
      errs.forEach((m) => {
        if (/weights \[/.test(m)) stats.errorCounts.weights++;
        else if (/longest option/.test(m)) stats.errorCounts['key-longest']++;
        else if (/length ratio/.test(m)) stats.errorCounts.ratio++;
        else if (/absolute/.test(m)) stats.errorCounts.absolutes++;
        else if (/commonMistake/.test(m)) stats.errorCounts.mistake++;
        else if (/empty option/.test(m)) stats.errorCounts.empty++;
        else stats.errorCounts.other++;
      });
    } else {
      stats.perQuestion.pass++;
    }
    // Position variance
    const ki = (q.options || []).findIndex((o) => o && o.isCorrect && o.weight === 3);
    if (ki >= 0 && ki < 4) stats.keyPositions[ki]++;
  });
  if (caseBad) { stats.perCase.fail++; stats.bySource[src].badCases++; failedCases.push({ id: c.id || c.externalId || '?', src, errs: caseErrors }); }
  else stats.perCase.pass++;
});

out.push('## Summary');
out.push('');
out.push(`- Cases passing all questions: **${stats.perCase.pass}** / ${stats.totalCases}`);
out.push(`- Questions passing: **${stats.perQuestion.pass}** / ${stats.totalQuestions}  (${((stats.perQuestion.pass / stats.totalQuestions) * 100).toFixed(1)}%)`);
out.push('');
out.push('| Error kind | Count |');
out.push('|---|---|');
Object.entries(stats.errorCounts).forEach(([k, v]) => { if (v) out.push(`| ${k} | ${v} |`); });
out.push('');
out.push('### Key position (A/B/C/D)');
out.push('');
const kp = stats.keyPositions;
const total = kp.reduce((a, b) => a + b, 0);
const expected = total / 4;
const chi2 = kp.reduce((s, n) => s + ((n - expected) ** 2) / expected, 0).toFixed(1);
out.push(`- Counts: **${kp.join(' / ')}** across ${total} questions`);
out.push(`- Percentages: ${kp.map((n) => ((n / total) * 100).toFixed(0) + '%').join(' / ')}`);
out.push(`- Expected uniform: ${expected.toFixed(0)} each; χ² = ${chi2}`);
out.push('');

out.push('### By source');
out.push('');
out.push('| File | Cases | Questions | Bad cases | Bad questions |');
out.push('|---|---|---|---|---|');
Object.entries(stats.bySource).forEach(([src, s]) => {
  out.push(`| \`${src}\` | ${s.cases} | ${s.questions} | ${s.badCases} | ${s.badQuestions} |`);
});
out.push('');

out.push('## Failed cases');
out.push('');
if (failedCases.length === 0) out.push('_None._');
else {
  failedCases.forEach((fc) => {
    out.push(`### \`${fc.id}\`  (${fc.src})`);
    fc.errs.slice(0, 20).forEach((e) => out.push('- ' + e));
    if (fc.errs.length > 20) out.push(`- ... and ${fc.errs.length - 20} more errors`);
    out.push('');
  });
}

fs.mkdirSync(path.join(root, 'docs'), { recursive: true });
const outFile = path.join(root, 'docs/deep-cases-audit.md');
fs.writeFileSync(outFile, out.join('\n'));

console.log(`Cases scanned: ${stats.totalCases}`);
console.log(`Questions:     ${stats.totalQuestions}`);
console.log(`Cases passing: ${stats.perCase.pass} / ${stats.totalCases}`);
console.log(`Questions:     ${stats.perQuestion.pass} / ${stats.totalQuestions} (${((stats.perQuestion.pass / stats.totalQuestions) * 100).toFixed(1)}%)`);
console.log(`Key position:  ${stats.keyPositions.join('/')}  χ² = ${chi2}`);
console.log(`Report:        ${outFile}`);
