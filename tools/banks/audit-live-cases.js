#!/usr/bin/env node
// ============================================================================
// audit-live-cases.js — read-only audit of the LIVE deep-case corpus in
// MongoDB (ContentItem documents), which is what paid users actually see.
//
// This is the tool the sibling audit-deep-cases.js was NOT: that one audits
// the git-tracked seed .js files in tools/cases/, which are the pre-repair
// input to import-deep-cases.js. It does NOT reflect fix-distractors.js /
// rewrite-questions.js updates, because those write directly to Mongo and
// never edit the seed .js files.
//
// This script queries ContentItem for case_sim documents under the ncmhce
// exam and runs the same gate against them.
//
// Must be run on a host that can reach the Atlas cluster (Render's shell is
// the intended home) with MONGO_URI set. Fails cleanly in a sandbox.
//
// Usage:
//   node tools/banks/audit-live-cases.js
//   node tools/banks/audit-live-cases.js --all           (include drafts/sme_review)
//   node tools/banks/audit-live-cases.js --out /tmp/report.md
// ============================================================================

require('dotenv').config();
const fs = require('fs');
const path = require('path');
const mongoose = require('mongoose');
const ContentItem = require('../../models/ContentItem');
const { checkQuestionQuality } = require('../cases/qualityGate');

const ALL  = process.argv.includes('--all');
const outI = process.argv.indexOf('--out');
const OUT  = outI >= 0 ? process.argv[outI + 1] : null;

async function main() {
  if (!process.env.MONGO_URI) {
    console.error('MONGO_URI is not set — run this on a host with Atlas access (e.g. Render shell).');
    console.error('This is by design: the live corpus is separate from the seed .js files in tools/cases/.');
    process.exit(1);
  }
  await mongoose.connect(process.env.MONGO_URI, { dbName: 'passreadyprep' });
  const filter = { format: 'case_sim' };
  if (!ALL) filter.status = 'published';
  const cases = await ContentItem.find(filter).select('externalId category status caseSim').lean();

  const stats = {
    total: cases.length,
    totalQuestions: 0,
    passCases: 0, failCases: 0,
    passQ: 0, failQ: 0,
    keyPositions: [0, 0, 0, 0],
    err: { weights: 0, 'key-longest': 0, ratio: 0, absolutes: 0, mistake: 0, empty: 0, other: 0 },
  };
  const failedCases = [];
  cases.forEach((c) => {
    const questions = (c.caseSim && c.caseSim.questions) || [];
    stats.totalQuestions += questions.length;
    let bad = false;
    const caseErrs = [];
    questions.forEach((q, qi) => {
      const errs = checkQuestionQuality(q, `[${c.externalId || c._id}] q${qi + 1}`);
      if (errs.length) {
        stats.failQ++; bad = true; caseErrs.push(...errs);
        errs.forEach((m) => {
          if (/weights \[/.test(m)) stats.err.weights++;
          else if (/longest option/.test(m)) stats.err['key-longest']++;
          else if (/length ratio/.test(m)) stats.err.ratio++;
          else if (/absolute/.test(m)) stats.err.absolutes++;
          else if (/commonMistake/.test(m)) stats.err.mistake++;
          else if (/empty option/.test(m)) stats.err.empty++;
          else stats.err.other++;
        });
      } else stats.passQ++;
      const ki = (q.options || []).findIndex((o) => o && o.isCorrect && o.weight === 3);
      if (ki >= 0 && ki < 4) stats.keyPositions[ki]++;
    });
    if (bad) { stats.failCases++; failedCases.push({ id: c.externalId, cat: c.category, status: c.status, errs: caseErrs }); }
    else stats.passCases++;
  });

  const kp = stats.keyPositions;
  const total = kp.reduce((a, b) => a + b, 0) || 1;
  const expected = total / 4;
  const chi2 = kp.reduce((s, n) => s + ((n - expected) ** 2) / expected, 0).toFixed(1);

  const lines = [];
  lines.push('# Deep-case bank — live corpus audit');
  lines.push('');
  lines.push(`**Generated:** ${new Date().toISOString().slice(0, 10)}`);
  lines.push(`**Source:** MongoDB \`ContentItem\` (format \`case_sim\`, status \`${ALL ? 'published/sme_review/draft' : 'published'}\`)`);
  lines.push(`**Cases scanned:** ${stats.total}`);
  lines.push(`**Questions scanned:** ${stats.totalQuestions}`);
  lines.push('');
  lines.push('## Summary');
  lines.push('');
  lines.push(`- Cases passing all questions: **${stats.passCases}** / ${stats.total}`);
  lines.push(`- Questions passing: **${stats.passQ}** / ${stats.totalQuestions}  (${((stats.passQ / stats.totalQuestions) * 100).toFixed(1)}%)`);
  lines.push('');
  lines.push('| Error kind | Count |');
  lines.push('|---|---|');
  Object.entries(stats.err).forEach(([k, v]) => { if (v) lines.push(`| ${k} | ${v} |`); });
  lines.push('');
  lines.push('### Key position');
  lines.push(`- A/B/C/D: **${kp.join(' / ')}** across ${total} questions`);
  lines.push(`- Percentages: ${kp.map((n) => ((n / total) * 100).toFixed(0) + '%').join(' / ')}`);
  lines.push(`- Expected uniform: ${expected.toFixed(0)} each; χ² = ${chi2}`);
  lines.push('');
  lines.push('## Failed cases');
  if (failedCases.length === 0) lines.push('_None._');
  else failedCases.forEach((fc) => {
    lines.push(`### \`${fc.id}\`  (${fc.status}, ${fc.cat})`);
    fc.errs.slice(0, 15).forEach((e) => lines.push('- ' + e));
    if (fc.errs.length > 15) lines.push(`- ... and ${fc.errs.length - 15} more errors`);
    lines.push('');
  });

  const report = lines.join('\n');
  if (OUT) { fs.writeFileSync(OUT, report); console.log('wrote', OUT); }
  else { console.log(report); }
  console.log(`\nLive corpus: ${stats.passCases}/${stats.total} cases clean, ${stats.passQ}/${stats.totalQuestions} questions clean.`);
  console.log(`Key position A/B/C/D: ${kp.join('/')}  χ² = ${chi2}`);
  await mongoose.disconnect();
}

main().catch((e) => { console.error(e); process.exit(1); });
