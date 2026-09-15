#!/usr/bin/env node
// ============================================================================
// platform-hardcopy.js — Generate a complete platform snapshot:
//   1. Printable HTML document of all cases + questions
//   2. Audit report (domain weights, quality gate, coverage stats)
//   3. Raw JSON database export of every ContentItem
//   4. Pass rate report (from user Attempt data)
//   5. Interrater reliability report (from ReviewBatch sheets + user responses)
//
//   node tools/cases/platform-hardcopy.js                   (all five, published only)
//   node tools/cases/platform-hardcopy.js --all             (include sme_review / draft)
//   node tools/cases/platform-hardcopy.js --out-dir /tmp    (write to a specific directory)
//   node tools/cases/platform-hardcopy.js --html-only       (just the printable document)
//   node tools/cases/platform-hardcopy.js --audit-only      (just the audit report)
//   node tools/cases/platform-hardcopy.js --export-only     (just the JSON export)
//   node tools/cases/platform-hardcopy.js --pass-rates      (just pass rate report)
//   node tools/cases/platform-hardcopy.js --irr             (just interrater reliability)
// MONGO_URI from env / .env.
// ============================================================================

require('dotenv').config();
const fs = require('fs');
const path = require('path');
const mongoose = require('mongoose');
const Exam = require('../../models/Exam');
const ContentItem = require('../../models/ContentItem');
const { validateCase, SECTIONS } = require('./caseSchema');
const { validateExamDepth } = require('./examDepth');
const { checkCaseQuality, classifyReason } = require('./qualityGate');
const { computePassRates, computeIrr } = require('../../lib/psychometrics');
const { ALLOWED_SOURCES } = require('./references');
const bp = require('./blueprint');

function flag(n, d) { const i = process.argv.indexOf('--' + n); return i >= 0 && process.argv[i + 1] && !process.argv[i + 1].startsWith('--') ? process.argv[i + 1] : d; }
const ALL = process.argv.includes('--all');
const OUT_DIR = flag('out-dir', '.');
const HTML_ONLY = process.argv.includes('--html-only');
const AUDIT_ONLY = process.argv.includes('--audit-only');
const EXPORT_ONLY = process.argv.includes('--export-only');
const PASS_RATES = process.argv.includes('--pass-rates');
const IRR = process.argv.includes('--irr');
const DO_ALL = !HTML_ONLY && !AUDIT_ONLY && !EXPORT_ONLY && !PASS_RATES && !IRR;

const WEIGHT_LABELS = { 3: 'Correct', 0: 'Near-miss', '-1': 'Novice error', '-2': 'Harmful error' };
const DOMAIN_LABELS = { intake: 'Intake & Assessment', core: 'Core Counseling', treatment: 'Treatment Planning', counseling: 'Counseling Process', ethics: 'Professional Ethics' };

function esc(s) { return String(s || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;'); }

function timestamp() {
  const d = new Date();
  return d.toISOString().replace(/T/, ' ').replace(/\.\d+Z$/, ' UTC');
}

function fileTs() {
  return new Date().toISOString().slice(0, 10);
}

// -----------------------------------------------------------------------
// 1. Printable HTML document
// -----------------------------------------------------------------------
function renderHtml(cases, stats) {
  const ts = timestamp();
  const lines = [];
  lines.push(`<!DOCTYPE html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>PassReadyPrep — Complete Case Bank (${ts})</title>
<style>
  @media print { @page { margin: 0.75in; size: letter; } .page-break { page-break-before: always; } }
  body { font-family: 'Segoe UI', system-ui, -apple-system, sans-serif; max-width: 960px; margin: 0 auto; padding: 24px; color: #1a1a1a; line-height: 1.5; font-size: 13px; }
  h1 { font-size: 22px; border-bottom: 3px solid #2563eb; padding-bottom: 8px; margin-top: 0; }
  h2 { font-size: 17px; color: #2563eb; margin-top: 32px; border-bottom: 1px solid #ddd; padding-bottom: 4px; }
  h3 { font-size: 14px; color: #374151; margin-top: 20px; margin-bottom: 8px; }
  .case-header { background: #f0f4ff; border-left: 4px solid #2563eb; padding: 10px 14px; margin-top: 24px; }
  .case-header h2 { margin: 0; border: none; padding: 0; }
  .meta { color: #6b7280; font-size: 12px; margin-top: 4px; }
  .narrative { background: #fafafa; border: 1px solid #e5e7eb; border-radius: 6px; padding: 12px; margin: 10px 0; }
  .narrative h4 { margin: 0 0 4px; font-size: 12px; text-transform: uppercase; color: #6b7280; letter-spacing: 0.5px; }
  .narrative p { margin: 4px 0; }
  .dx { background: #fef3c7; border: 1px solid #f59e0b; border-radius: 4px; padding: 8px 12px; margin: 8px 0; }
  .question { border: 1px solid #e5e7eb; border-radius: 6px; margin: 12px 0; overflow: hidden; }
  .q-header { background: #f9fafb; padding: 8px 12px; border-bottom: 1px solid #e5e7eb; font-weight: 600; }
  .q-domain { display: inline-block; background: #dbeafe; color: #1e40af; padding: 1px 8px; border-radius: 10px; font-size: 11px; font-weight: 500; margin-left: 8px; }
  .q-stem { padding: 10px 12px; font-weight: 500; }
  .option { padding: 8px 12px; border-top: 1px solid #f3f4f6; display: flex; gap: 10px; }
  .option.correct { background: #f0fdf4; }
  .option.near-miss { background: #fffbeb; }
  .option.novice { background: #fef2f2; }
  .option.harmful { background: #fce7f3; }
  .opt-weight { min-width: 90px; font-size: 11px; font-weight: 600; padding-top: 2px; }
  .opt-weight.w3 { color: #16a34a; }
  .opt-weight.w0 { color: #d97706; }
  .opt-weight.w-1 { color: #dc2626; }
  .opt-weight.w-2 { color: #be185d; }
  .opt-text { flex: 1; }
  .opt-explain { font-size: 12px; color: #6b7280; margin-top: 4px; }
  .opt-mistake { font-size: 12px; color: #9333ea; font-style: italic; margin-top: 2px; }
  .refs { font-size: 12px; color: #6b7280; margin: 8px 0; }
  .evidence { font-size: 12px; color: #4b5563; padding: 4px 12px; }
  .toc { column-count: 3; column-gap: 20px; font-size: 12px; }
  .toc a { text-decoration: none; color: #2563eb; }
  .stat-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 12px; margin: 16px 0; }
  .stat-card { background: #f9fafb; border: 1px solid #e5e7eb; border-radius: 6px; padding: 12px; text-align: center; }
  .stat-card .value { font-size: 28px; font-weight: 700; color: #2563eb; }
  .stat-card .label { font-size: 12px; color: #6b7280; }
  table { border-collapse: collapse; width: 100%; margin: 12px 0; font-size: 12px; }
  th, td { border: 1px solid #d1d5db; padding: 6px 10px; text-align: left; }
  th { background: #f3f4f6; font-weight: 600; }
  td.num { text-align: right; font-variant-numeric: tabular-nums; }
  .pass { color: #16a34a; } .fail { color: #dc2626; }
  .footer { margin-top: 40px; padding-top: 12px; border-top: 1px solid #ddd; font-size: 11px; color: #9ca3af; text-align: center; }
</style></head><body>`);

  // Cover page
  lines.push(`<h1>PassReadyPrep — NCMHCE Case Bank</h1>`);
  lines.push(`<p>Complete content hardcopy generated ${ts}</p>`);
  lines.push(`<div class="stat-grid">`);
  lines.push(`<div class="stat-card"><div class="value">${stats.totalCases}</div><div class="label">Cases</div></div>`);
  lines.push(`<div class="stat-card"><div class="value">${stats.totalQuestions}</div><div class="label">Questions</div></div>`);
  lines.push(`<div class="stat-card"><div class="value">${stats.categories}</div><div class="label">Diagnostic Categories</div></div>`);
  lines.push(`<div class="stat-card"><div class="value">${stats.passRate}%</div><div class="label">Quality Gate Pass Rate</div></div>`);
  lines.push(`</div>`);

  // Status breakdown
  if (stats.byStatus) {
    lines.push(`<h3>Status Breakdown</h3><table><tr><th>Status</th><th>Cases</th><th>Questions</th></tr>`);
    for (const [status, s] of Object.entries(stats.byStatus)) {
      lines.push(`<tr><td>${esc(status)}</td><td class="num">${s.cases}</td><td class="num">${s.questions}</td></tr>`);
    }
    lines.push(`</table>`);
  }

  // Domain weights
  lines.push(`<h3>Domain Distribution vs NCMHCE Exam</h3>`);
  lines.push(`<table><tr><th>Domain</th><th>Bank Questions</th><th>Bank %</th><th>Exam Target %</th><th>Delta</th></tr>`);
  const examWeights = { intake: 25, core: 15, treatment: 15, counseling: 30, ethics: 15 };
  for (const [dom, target] of Object.entries(examWeights)) {
    const count = stats.domainCounts[dom] || 0;
    const pct = stats.totalQuestions ? ((count / stats.totalQuestions) * 100).toFixed(1) : '0.0';
    const delta = (parseFloat(pct) - target).toFixed(1);
    const cls = Math.abs(parseFloat(delta)) > 5 ? 'fail' : 'pass';
    lines.push(`<tr><td>${esc(DOMAIN_LABELS[dom] || dom)}</td><td class="num">${count}</td><td class="num">${pct}%</td><td class="num">${target}%</td><td class="num ${cls}">${delta > 0 ? '+' : ''}${delta}%</td></tr>`);
  }
  lines.push(`</table>`);

  // Category coverage
  lines.push(`<h3>Category Coverage</h3>`);
  lines.push(`<table><tr><th>Category</th><th>Cases</th><th>Target</th><th>Questions</th><th>Gate Pass</th></tr>`);
  for (const cat of bp.CATEGORY_NAMES) {
    const cc = stats.byCat[cat] || { cases: 0, questions: 0, pass: 0 };
    const target = (bp.CATEGORIES.find((c) => c.category === cat) || {}).target || 0;
    lines.push(`<tr><td>${esc(cat)}</td><td class="num">${cc.cases}</td><td class="num">${target}</td><td class="num">${cc.questions}</td><td class="num">${cc.pass}/${cc.cases}</td></tr>`);
  }
  lines.push(`</table>`);

  // Table of contents
  lines.push(`<h3>Table of Contents</h3><div class="toc">`);
  cases.forEach((c, i) => {
    const sim = c.caseSim || {};
    lines.push(`<div><a href="#case-${i}">${esc(sim.id || c.externalId)}</a> ${esc((sim.title || '').slice(0, 40))}</div>`);
  });
  lines.push(`</div>`);

  // Each case
  cases.forEach((c, ci) => {
    const sim = c.caseSim || {};
    const qs = sim.questions || [];
    const refs = sim.references || [];
    const dx = sim.diagnosis || sim.primaryDiagnosis || {};
    const narr = sim.narrative || {};

    lines.push(`<div class="page-break" id="case-${ci}"></div>`);
    lines.push(`<div class="case-header"><h2>Case ${ci + 1}: ${esc(sim.title || c.externalId)}</h2>`);
    lines.push(`<div class="meta">${esc(sim.id || c.externalId)} | ${esc(c.category || sim.category)} | ${esc(c.difficulty || sim.difficulty)} | Status: ${esc(c.status)} | ${qs.length} questions</div></div>`);

    // Diagnosis
    lines.push(`<div class="dx"><strong>Diagnosis:</strong> ${esc(dx.name || 'N/A')} (${esc(dx.code || 'N/A')})</div>`);

    // Narrative
    if (narr.intake || narr.session1 || narr.session2) {
      lines.push(`<div class="narrative">`);
      if (narr.intake) lines.push(`<h4>Intake</h4><p>${esc(narr.intake)}</p>`);
      if (narr.session1) lines.push(`<h4>Session 1</h4><p>${esc(narr.session1)}</p>`);
      if (narr.session2) lines.push(`<h4>Session 2</h4><p>${esc(narr.session2)}</p>`);
      lines.push(`</div>`);
    }

    // Diagnostic rationale
    if (sim.diagnosticRationale) {
      lines.push(`<p><strong>Diagnostic Rationale:</strong> ${esc(sim.diagnosticRationale)}</p>`);
    }

    // References
    if (refs.length) {
      lines.push(`<div class="refs"><strong>References:</strong> ${refs.map((r) => `[${esc(r.id)}] ${esc(r.source)} — ${esc(r.detail)}`).join(' | ')}</div>`);
    }

    // Questions
    qs.forEach((q, qi) => {
      const opts = q.options || [];
      lines.push(`<div class="question">`);
      lines.push(`<div class="q-header">Question ${qi + 1} <span class="q-domain">${esc(q.domain || 'unknown')}</span></div>`);
      lines.push(`<div class="q-stem">${esc(q.question)}</div>`);

      opts.forEach((o) => {
        const w = Number(o.weight);
        const cls = w === 3 ? 'correct' : w === 0 ? 'near-miss' : w === -1 ? 'novice' : 'harmful';
        const wcls = 'w' + (w >= 0 ? w : '-' + Math.abs(w));
        const expl = o.explanation || {};
        lines.push(`<div class="option ${cls}">`);
        lines.push(`<div class="opt-weight ${wcls}">${esc(WEIGHT_LABELS[w] || 'w' + w)} (${w})</div>`);
        lines.push(`<div class="opt-text">${esc(o.text)}`);
        if (expl.rationale) lines.push(`<div class="opt-explain"><strong>Rationale:</strong> ${esc(expl.rationale)}</div>`);
        if (expl.commonMistake && !o.isCorrect) lines.push(`<div class="opt-mistake">Why chosen: ${esc(expl.commonMistake)}</div>`);
        lines.push(`</div></div>`);
      });

      if (q.evidenceRef && q.evidenceRef.length) {
        lines.push(`<div class="evidence">Evidence: ${q.evidenceRef.map((r) => esc(r)).join(', ')}</div>`);
      }
      lines.push(`</div>`);
    });
  });

  lines.push(`<div class="footer">PassReadyPrep NCMHCE Case Bank — GA Integrated Therapeutic Perspectives LLC — Generated ${ts} — ${stats.totalCases} cases, ${stats.totalQuestions} questions</div>`);
  lines.push(`</body></html>`);
  return lines.join('\n');
}

// -----------------------------------------------------------------------
// 2. Audit report (text)
// -----------------------------------------------------------------------
function renderAudit(cases, stats) {
  const ts = timestamp();
  const lines = [];
  lines.push('='.repeat(72));
  lines.push('  PassReadyPrep — Platform Audit Report');
  lines.push('  Generated: ' + ts);
  lines.push('='.repeat(72));
  lines.push('');

  lines.push('BANK OVERVIEW');
  lines.push('-'.repeat(40));
  lines.push(`  Total cases:     ${stats.totalCases}`);
  lines.push(`  Total questions:  ${stats.totalQuestions}`);
  lines.push(`  Categories:       ${stats.categories}`);
  lines.push(`  Quality gate:     ${stats.gatePass} pass / ${stats.gateFail} fail (${stats.passRate}%)`);
  lines.push(`  Schema valid:     ${stats.schemaPass} pass / ${stats.schemaFail} fail`);
  lines.push(`  Depth valid:      ${stats.depthPass} pass / ${stats.depthFail} fail`);
  lines.push('');

  // Status breakdown
  lines.push('STATUS BREAKDOWN');
  lines.push('-'.repeat(40));
  for (const [status, s] of Object.entries(stats.byStatus)) {
    lines.push(`  ${status.padEnd(14)} ${String(s.cases).padStart(4)} cases   ${String(s.questions).padStart(5)} questions`);
  }
  lines.push('');

  // Domain weights vs exam
  const examWeights = { intake: 25, core: 15, treatment: 15, counseling: 30, ethics: 15 };
  lines.push('DOMAIN WEIGHTS vs NCMHCE EXAM');
  lines.push('-'.repeat(60));
  lines.push('  Domain               Bank Qs    Bank %   Exam %   Delta');
  for (const [dom, target] of Object.entries(examWeights)) {
    const count = stats.domainCounts[dom] || 0;
    const pct = stats.totalQuestions ? ((count / stats.totalQuestions) * 100).toFixed(1) : '0.0';
    const delta = (parseFloat(pct) - target).toFixed(1);
    const flag = Math.abs(parseFloat(delta)) > 5 ? ' !!!' : '';
    lines.push(`  ${(DOMAIN_LABELS[dom] || dom).padEnd(22)} ${String(count).padStart(5)}    ${pct.padStart(5)}%   ${String(target).padStart(4)}%   ${(delta > 0 ? '+' : '') + delta}%${flag}`);
  }
  lines.push('');

  // Category coverage
  lines.push('CATEGORY COVERAGE');
  lines.push('-'.repeat(72));
  lines.push('  Category             Cases  Target  Questions  Gate Pass  Difficulty');
  for (const cat of bp.CATEGORY_NAMES) {
    const cc = stats.byCat[cat] || { cases: 0, questions: 0, pass: 0, diff: {} };
    const target = (bp.CATEGORIES.find((c) => c.category === cat) || {}).target || 0;
    const diffStr = ['easy', 'medium', 'hard'].map((d) => `${d[0]}:${cc.diff[d] || 0}`).join(' ');
    lines.push(`  ${cat.padEnd(22)} ${String(cc.cases).padStart(4)}   ${String(target).padStart(5)}    ${String(cc.questions).padStart(7)}      ${cc.pass}/${cc.cases}    ${diffStr}`);
  }
  lines.push('');

  // Quality gate failures detail
  if (stats.failures.length) {
    lines.push('QUALITY GATE FAILURES');
    lines.push('-'.repeat(72));
    const reasonTally = {};
    stats.failures.forEach((f) => {
      lines.push(`  ${f.id} [${f.status}] — ${f.errors.length} error(s)`);
      f.errors.forEach((e) => {
        lines.push(`    ${e}`);
        const r = classifyReason(e);
        reasonTally[r] = (reasonTally[r] || 0) + 1;
      });
    });
    lines.push('');
    lines.push('  Failure mix:');
    for (const [r, n] of Object.entries(reasonTally).sort((a, b) => b[1] - a[1])) {
      lines.push(`    ${r.padEnd(16)} ${n}`);
    }
    lines.push('');
  }

  // Diagnosis coverage
  lines.push('DIAGNOSIS COVERAGE (unique diagnoses per category)');
  lines.push('-'.repeat(60));
  for (const cat of bp.CATEGORY_NAMES) {
    const dxSet = stats.diagByCat[cat] || new Set();
    lines.push(`  ${cat.padEnd(22)} ${dxSet.size} unique diagnos${dxSet.size === 1 ? 'is' : 'es'}`);
    for (const dx of [...dxSet].sort()) {
      lines.push(`    - ${dx}`);
    }
  }
  lines.push('');

  lines.push('='.repeat(72));
  lines.push(`  End of report — ${stats.totalCases} cases, ${stats.totalQuestions} questions`);
  lines.push('='.repeat(72));
  return lines.join('\n');
}

// -----------------------------------------------------------------------
// 3. Pass rates (from Attempt data via shared module)
// -----------------------------------------------------------------------
function renderPassRates(pr) {
  const lines = [];
  lines.push('='.repeat(72));
  lines.push('  PassReadyPrep — Pass Rate Report');
  lines.push('  Generated: ' + timestamp());
  lines.push('='.repeat(72));
  lines.push('');

  if (!pr) {
    lines.push('  No completed attempts found in the database.');
    lines.push('  Pass rates will be available once users complete simulations.');
    return lines.join('\n');
  }

  lines.push('OVERALL');
  lines.push('-'.repeat(40));
  lines.push(`  Total completed attempts:  ${pr.totalAttempts}`);
  lines.push(`  Unique cases attempted:    ${pr.uniqueCases}`);
  lines.push(`  Score mean:                ${pr.scores.mean}%`);
  lines.push(`  Score median:              ${pr.scores.median}%`);
  lines.push(`  Score range:               ${pr.scores.min}% – ${pr.scores.max}%`);
  lines.push(`  Pass rate (>=${pr.passThreshold}%):      ${pr.passRate}% (${pr.passingCount}/${pr.totalAttempts})`);
  lines.push('');

  // Domain averages
  lines.push('DOMAIN PERFORMANCE');
  lines.push('-'.repeat(60));
  lines.push('  Domain                  Mean %   Attempts');
  for (const [dom, scores] of Object.entries(pr.domainAll).sort((a, b) => a[0].localeCompare(b[0]))) {
    const avg = scores.length ? (scores.reduce((a, b) => a + b, 0) / scores.length * 100).toFixed(1) : 'N/A';
    lines.push(`  ${(DOMAIN_LABELS[dom] || dom).padEnd(24)} ${avg.padStart(6)}%   ${String(scores.length).padStart(6)}`);
  }
  lines.push('');

  // Per-case (top hardest and easiest)
  const caseEntries = Object.entries(pr.byCase)
    .map(([id, d]) => {
      const avg = d.scores.length ? d.scores.reduce((a, b) => a + b, 0) / d.scores.length : null;
      return { id, attempts: d.attempts, avg, scores: d.scores };
    })
    .filter((c) => c.avg != null && c.attempts >= 2)
    .sort((a, b) => a.avg - b.avg);

  if (caseEntries.length) {
    lines.push('HARDEST CASES (lowest avg score, min 2 attempts)');
    lines.push('-'.repeat(60));
    lines.push('  Case ID            Attempts   Avg Score');
    caseEntries.slice(0, 15).forEach((c) => {
      lines.push(`  ${c.id.padEnd(20)} ${String(c.attempts).padStart(6)}     ${c.avg.toFixed(1)}%`);
    });
    lines.push('');

    lines.push('EASIEST CASES (highest avg score, min 2 attempts)');
    lines.push('-'.repeat(60));
    lines.push('  Case ID            Attempts   Avg Score');
    caseEntries.slice(-15).reverse().forEach((c) => {
      lines.push(`  ${c.id.padEnd(20)} ${String(c.attempts).padStart(6)}     ${c.avg.toFixed(1)}%`);
    });
    lines.push('');
  }

  // Item analysis (p-values)
  const items = Object.entries(pr.questionStats)
    .map(([qid, d]) => ({ qid, pValue: d.total ? d.correct / d.total : null, total: d.total, avgWeight: d.weights.length ? d.weights.reduce((a, b) => a + b, 0) / d.weights.length : null }))
    .filter((i) => i.total >= 3)
    .sort((a, b) => a.pValue - b.pValue);

  if (items.length) {
    lines.push('ITEM ANALYSIS (p-value = proportion selecting correct, min 3 responses)');
    lines.push('-'.repeat(72));
    lines.push(`  Total items with data: ${items.length}`);
    const veryHard = items.filter((i) => i.pValue < 0.3).length;
    const hard = items.filter((i) => i.pValue >= 0.3 && i.pValue < 0.5).length;
    const mid = items.filter((i) => i.pValue >= 0.5 && i.pValue < 0.7).length;
    const easy = items.filter((i) => i.pValue >= 0.7 && i.pValue < 0.9).length;
    const veryEasy = items.filter((i) => i.pValue >= 0.9).length;
    lines.push(`  p < 0.30 (very hard):  ${veryHard}`);
    lines.push(`  0.30–0.49 (hard):      ${hard}`);
    lines.push(`  0.50–0.69 (moderate):  ${mid}`);
    lines.push(`  0.70–0.89 (easy):      ${easy}`);
    lines.push(`  p >= 0.90 (very easy): ${veryEasy}`);
    lines.push('');

    lines.push('  10 HARDEST ITEMS');
    items.slice(0, 10).forEach((i) => {
      lines.push(`    ${i.qid.padEnd(35)} p=${i.pValue.toFixed(2)}  n=${i.total}  avg_wt=${i.avgWeight != null ? i.avgWeight.toFixed(1) : 'N/A'}`);
    });
    lines.push('');
  }

  // Item discrimination (point-biserial)
  if (pr.discrimination && pr.discrimination.length) {
    lines.push('ITEM DISCRIMINATION (point-biserial: do high scorers get this right?)');
    lines.push('-'.repeat(72));
    const poor = pr.discrimination.filter((d) => d.rpb < 0.15).length;
    const fair = pr.discrimination.filter((d) => d.rpb >= 0.15 && d.rpb < 0.25).length;
    const good = pr.discrimination.filter((d) => d.rpb >= 0.25 && d.rpb < 0.40).length;
    const excellent = pr.discrimination.filter((d) => d.rpb >= 0.40).length;
    const negative = pr.discrimination.filter((d) => d.rpb < 0).length;
    lines.push(`  Total items:       ${pr.discrimination.length}`);
    lines.push(`  Negative (< 0):    ${negative}  *** review these — high scorers pick wrong ***`);
    lines.push(`  Poor (0–0.14):     ${poor}`);
    lines.push(`  Fair (0.15–0.24):  ${fair}`);
    lines.push(`  Good (0.25–0.39):  ${good}`);
    lines.push(`  Excellent (>=0.40):${excellent}`);
    lines.push('');

    if (negative) {
      lines.push('  NEGATIVE DISCRIMINATION ITEMS (high scorers pick wrong more often):');
      pr.discrimination.filter((d) => d.rpb < 0).forEach((d) => {
        lines.push(`    ${d.qid.padEnd(35)} rpb=${d.rpb.toFixed(3)}  p=${d.pValue.toFixed(2)}  n=${d.n}`);
      });
      lines.push('');
    }
  }

  // Distractor effectiveness
  if (pr.distractorAnalysis && pr.distractorAnalysis.length) {
    lines.push('DISTRACTOR EFFECTIVENESS');
    lines.push('-'.repeat(72));
    const deadItems = pr.distractorAnalysis.filter((d) => d.deadDistractors > 0);
    lines.push(`  Items analyzed:              ${pr.distractorAnalysis.length}`);
    lines.push(`  Items with dead distractors: ${deadItems.length}`);
    if (deadItems.length) {
      lines.push('');
      lines.push('  Items with options nobody chose (dead distractors):');
      deadItems.slice(0, 20).forEach((d) => {
        lines.push(`    ${d.qid.padEnd(35)} dead: ${d.deadOptions.join(', ')}  (n=${d.n})`);
      });
      if (deadItems.length > 20) lines.push(`    ... and ${deadItems.length - 20} more`);
    }
    lines.push('');
  }

  // Cronbach's alpha
  if (pr.cronbachAlpha != null) {
    lines.push('INTERNAL CONSISTENCY');
    lines.push('-'.repeat(40));
    lines.push(`  Cronbach's alpha:  ${pr.cronbachAlpha.toFixed(3)}`);
    lines.push(`  Based on:          ${pr.alphaItemCount} items across ${pr.alphaAttemptCount} attempts`);
    const interp = pr.cronbachAlpha >= 0.9 ? 'excellent' : pr.cronbachAlpha >= 0.8 ? 'good' : pr.cronbachAlpha >= 0.7 ? 'acceptable' : pr.cronbachAlpha >= 0.6 ? 'questionable' : pr.cronbachAlpha >= 0.5 ? 'poor' : 'unacceptable';
    lines.push(`  Interpretation:    ${interp}`);
    lines.push('');
  }

  // Score distribution
  if (pr.distribution) {
    lines.push('SCORE DISTRIBUTION');
    lines.push('-'.repeat(40));
    const d = pr.distribution;
    lines.push(`  n=${d.n}  mean=${d.mean}  sd=${d.sd}  skew=${d.skew}`);
    lines.push('');
    lines.push('  Range       Count  Bar');
    d.bins.forEach((b) => {
      const bar = '#'.repeat(Math.round(b.count / Math.max(...d.bins.map((x) => x.count)) * 30) || 0);
      lines.push(`  ${b.label.padEnd(12)} ${String(b.count).padStart(4)}  ${bar}`);
    });
    lines.push('');
  }

  lines.push('='.repeat(72));
  return lines.join('\n');
}

// -----------------------------------------------------------------------
// 4. Interrater reliability (from shared module)
// -----------------------------------------------------------------------
function renderIrr(irr) {
  const lines = [];
  lines.push('='.repeat(72));
  lines.push('  PassReadyPrep — Interrater Reliability Report');
  lines.push('  Generated: ' + timestamp());
  lines.push('='.repeat(72));
  lines.push('');

  // Reviewer agreement
  lines.push('SME REVIEWER AGREEMENT (from review batch decision sheets)');
  lines.push('-'.repeat(60));
  if (irr.reviewerAgreement && irr.reviewerAgreement.length) {
    lines.push('  Batch Pair                    Items  % Agree   Kappa');
    irr.reviewerAgreement.forEach((p) => {
      const label = `${p.raterA} vs ${p.raterB}`;
      const kappaStr = p.kappa != null ? p.kappa.toFixed(3) : 'N/A';
      const pctStr = p.pctAgree != null ? (p.pctAgree * 100).toFixed(1) + '%' : 'N/A';
      lines.push(`  ${label.padEnd(32)} ${String(p.n).padStart(4)}   ${pctStr.padStart(6)}   ${kappaStr}`);
    });
    lines.push('');
    lines.push('  Kappa interpretation:');
    lines.push('    < 0.20  poor    0.21-0.40  fair    0.41-0.60  moderate');
    lines.push('    0.61-0.80  substantial    0.81-1.00  almost perfect');
  } else {
    lines.push('  Insufficient data. Need 2+ review batches with overlapping questions');
    lines.push('  and filled decision sheets to compute reviewer agreement.');
    lines.push('  Upload filled review sheets at /review.html for each batch.');
  }
  lines.push('');

  // User test-retest consistency
  lines.push('USER TEST-RETEST CONSISTENCY');
  lines.push('-'.repeat(60));
  if (irr.userResponseConsistency) {
    const c = irr.userResponseConsistency;
    lines.push(`  Response pairs (same user, same question, 2+ attempts): ${c.pairs}`);
    lines.push(`  Consistent (same answer both times):                     ${c.consistent} (${c.rate}%)`);
  } else {
    lines.push('  Insufficient data. Need users who attempted the same case 2+ times.');
    lines.push('  This metric appears once users retake simulations.');
  }
  lines.push('');

  // Inter-user agreement
  lines.push('INTER-USER RESPONSE AGREEMENT');
  lines.push('-'.repeat(60));
  if (irr.interUserAgreement) {
    const u = irr.interUserAgreement;
    lines.push(`  Items with 5+ responses:   ${u.items}`);
    lines.push(`  Avg modal response %:      ${u.avgModalPct}%`);
    lines.push(`  High agreement (>=80%):    ${u.highAgreement} items`);
    lines.push(`  Low agreement (<50%):      ${u.lowAgreement} items`);
    lines.push('');
    lines.push('  Interpretation: modal response % shows how often users converge');
    lines.push('  on the same answer. High values (>70%) suggest clear correct answers.');
    lines.push('  Low values (<50%) flag ambiguous items needing review.');
  } else {
    lines.push('  Insufficient data. Need 10+ items with 5+ user responses each.');
  }
  lines.push('');

  lines.push('='.repeat(72));
  lines.push('  Note: For formal interrater reliability, have 2+ independent SMEs');
  lines.push('  review the same batch (same questions), then upload both sheets.');
  lines.push('  Cohen\'s kappa on their approve/reject decisions measures agreement');
  lines.push('  beyond chance. Weight-assignment agreement can be computed from');
  lines.push('  weight_override columns across matching sheets.');
  lines.push('='.repeat(72));
  return lines.join('\n');
}

// -----------------------------------------------------------------------
// Main
// -----------------------------------------------------------------------
async function main() {
  if (!process.env.MONGO_URI) { console.error('MONGO_URI is not set.'); process.exit(1); }
  await mongoose.connect(process.env.MONGO_URI, { dbName: 'passreadyprep' });
  console.log('Connected to MongoDB (db: passreadyprep)');

  const exam = await Exam.findOne({ key: 'ncmhce' });
  if (!exam) { console.error('No ncmhce exam found.'); process.exit(1); }

  const filter = { examId: exam._id, format: 'case_sim' };
  if (!ALL) filter.status = 'published';
  const docs = await ContentItem.find(filter).sort({ externalId: 1 }).lean();
  console.log(`Loaded ${docs.length} case(s) (${ALL ? 'all statuses' : 'published only'})\n`);

  // Compute stats
  const vopts = { categories: bp.CATEGORY_NAMES, allowedSources: ALLOWED_SOURCES };
  const stats = {
    totalCases: docs.length, totalQuestions: 0, categories: 0,
    gatePass: 0, gateFail: 0, schemaPass: 0, schemaFail: 0, depthPass: 0, depthFail: 0,
    passRate: 0, domainCounts: {}, byStatus: {}, byCat: {}, diagByCat: {}, failures: [],
  };

  const catSet = new Set();
  for (const doc of docs) {
    const sim = doc.caseSim || {};
    const qs = sim.questions || [];
    stats.totalQuestions += qs.length;

    // Status
    const st = doc.status || 'unknown';
    if (!stats.byStatus[st]) stats.byStatus[st] = { cases: 0, questions: 0 };
    stats.byStatus[st].cases++;
    stats.byStatus[st].questions += qs.length;

    // Category
    const cat = doc.category || sim.category || 'Uncategorized';
    catSet.add(cat);
    if (!stats.byCat[cat]) stats.byCat[cat] = { cases: 0, questions: 0, pass: 0, diff: {} };
    stats.byCat[cat].cases++;
    stats.byCat[cat].questions += qs.length;
    const diff = doc.difficulty || sim.difficulty || 'medium';
    stats.byCat[cat].diff[diff] = (stats.byCat[cat].diff[diff] || 0) + 1;

    // Diagnosis
    const dx = (sim.diagnosis || sim.primaryDiagnosis || {}).name || 'Unknown';
    if (!stats.diagByCat[cat]) stats.diagByCat[cat] = new Set();
    stats.diagByCat[cat].add(dx);

    // Domains
    qs.forEach((q) => {
      const dom = q.domain || 'unknown';
      stats.domainCounts[dom] = (stats.domainCounts[dom] || 0) + 1;
    });

    // Validation
    const schemaR = validateCase(sim, vopts);
    if (schemaR.ok) stats.schemaPass++; else stats.schemaFail++;

    const depthR = validateExamDepth(sim, vopts);
    if (depthR.ok) stats.depthPass++; else stats.depthFail++;

    const gateR = checkCaseQuality(sim);
    if (gateR.ok) {
      stats.gatePass++;
      stats.byCat[cat].pass++;
    } else {
      stats.gateFail++;
      stats.failures.push({ id: sim.id || doc.externalId, status: st, errors: gateR.errors });
    }
  }
  stats.categories = catSet.size;
  stats.passRate = stats.totalCases ? ((stats.gatePass / stats.totalCases) * 100).toFixed(1) : '0.0';

  // Write outputs
  const ts = fileTs();

  if (DO_ALL || HTML_ONLY) {
    const htmlPath = path.join(OUT_DIR, `passreadyprep-hardcopy-${ts}.html`);
    console.log('Writing printable document...');
    fs.writeFileSync(htmlPath, renderHtml(docs, stats));
    console.log(`  -> ${htmlPath} (${(fs.statSync(htmlPath).size / 1024 / 1024).toFixed(1)} MB)`);
  }

  if (DO_ALL || AUDIT_ONLY) {
    const auditPath = path.join(OUT_DIR, `passreadyprep-audit-${ts}.txt`);
    console.log('Writing audit report...');
    fs.writeFileSync(auditPath, renderAudit(docs, stats));
    console.log(`  -> ${auditPath}`);
  }

  if (DO_ALL || EXPORT_ONLY) {
    const exportPath = path.join(OUT_DIR, `passreadyprep-export-${ts}.json`);
    console.log('Writing database export...');
    const exportData = {
      exportedAt: new Date().toISOString(),
      exam: { key: exam.key, name: exam.name, id: String(exam._id) },
      filter: ALL ? 'all statuses' : 'published only',
      totalCases: docs.length,
      totalQuestions: stats.totalQuestions,
      cases: docs.map((d) => ({
        _id: String(d._id),
        externalId: d.externalId,
        status: d.status,
        category: d.category,
        difficulty: d.difficulty,
        title: d.title,
        references: d.references,
        reviewNote: d.reviewNote,
        needsWork: d.needsWork,
        createdAt: d.createdAt,
        updatedAt: d.updatedAt,
        caseSim: d.caseSim,
      })),
    };
    fs.writeFileSync(exportPath, JSON.stringify(exportData, null, 2));
    console.log(`  -> ${exportPath} (${(fs.statSync(exportPath).size / 1024 / 1024).toFixed(1)} MB)`);
  }

  if (DO_ALL || PASS_RATES) {
    const prPath = path.join(OUT_DIR, `passreadyprep-pass-rates-${ts}.txt`);
    console.log('Computing pass rates...');
    const pr = await computePassRates(exam._id);
    fs.writeFileSync(prPath, renderPassRates(pr));
    console.log(`  -> ${prPath}`);
    if (pr) console.log(`     ${pr.totalAttempts} attempts, pass rate: ${pr.passRate}%`);
    else console.log('     No completed attempts yet.');
  }

  if (DO_ALL || IRR) {
    const irrPath = path.join(OUT_DIR, `passreadyprep-irr-${ts}.txt`);
    console.log('Computing interrater reliability...');
    const irr = await computeIrr(exam._id);
    fs.writeFileSync(irrPath, renderIrr(irr));
    console.log(`  -> ${irrPath}`);
  }

  // Print summary to console
  console.log('\n' + '='.repeat(50));
  console.log(`  ${stats.totalCases} cases, ${stats.totalQuestions} questions`);
  console.log(`  Quality gate: ${stats.gatePass} pass / ${stats.gateFail} fail (${stats.passRate}%)`);
  if (stats.gateFail) console.log(`  *** ${stats.gateFail} case(s) still fail the quality gate ***`);
  console.log('='.repeat(50));

  await mongoose.disconnect();
}

main().catch((e) => { console.error(e); process.exit(1); });
