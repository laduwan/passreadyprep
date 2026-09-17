#!/usr/bin/env node
// ============================================================================
// export-banks.js — a printable hard copy of every static question bank.
//
// Emits:
//   docs/question-bank.md   Markdown, ~30k lines, all 419 items with keys,
//                           per-option rationale, weight+rung on decision items,
//                           item-level rationale, and blueprint domain.
//   docs/question-bank.html An HTML version styled for printing to PDF from
//                           any browser. Same content, styled with print CSS.
//
// Read-only. Does not touch the source banks.
// ============================================================================

const fs = require('fs');
const path = require('path');

function loadBank(file, globalName) {
  const src = fs.readFileSync(file, 'utf8');
  const m = new module.constructor();
  m._compile(src + `\nmodule.exports = ${globalName};\n`, file);
  return m.exports;
}
const root = path.resolve(__dirname, '..', '..');

const BANKS = [
  { name: 'Next Best Step',                    file: 'public/nbs-data.js',       g: 'NBS_ITEMS',       profile: 'decision', page: '/next-best-step.html'      },
  { name: 'What to Assess Next',               file: 'public/assess-data.js',    g: 'ASSESS_ITEMS',    profile: 'decision', page: '/assess-next.html'         },
  { name: 'Core Counseling Attributes',        file: 'public/ca-quiz-data.js',   g: 'CA_QUIZ_ITEMS',   profile: 'recall',   page: '/core-attributes-quiz.html'},
  { name: 'Knowledge Bank (Timed Exam / Drill)', file: 'public/knowledge-data.js', g: 'KNOWLEDGE_ITEMS', profile: 'recall',   page: '/knowledge-drill.html'     },
];

const RUNG_LABELS = {
  1: 'Imminent safety', 2: 'Medical/substance rule-outs', 3: 'Stabilization',
  4: 'Alliance and validation', 5: 'Clarify the picture', 6: 'Evidence-based treatment',
  7: 'Ethics throughout',
};
const WEIGHT_LABELS = { '3': '+3 KEY', '0': '0 near-miss', '-1': '-1 novice error', '-2': '-2 harmful' };

const optText = (o) => String((o && (o.t != null ? o.t : o.text)) || '');
const optKey  = (o) => !!(o && (o.ok === true || o.isCorrect === true || o.weight === 3));
const optRat  = (o, profile) => profile === 'decision'
  ? String(o.why || (o.explanation && o.explanation.rationale) || '').trim()
  : String(o.rationale || '').trim();
const optCM   = (o) => String((o && (o.commonMistake || (o.explanation && o.explanation.commonMistake))) || '').trim();

function esc(s) { return String(s).replace(/[&<>"']/g, (c) => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c])); }

// ── Markdown ─────────────────────────────────────────────────────────────────
function mdItem(it, profile, i) {
  const stem = String((it && (it.scenario != null ? it.scenario : it.question || it.stem)) || '');
  const lines = [];
  const idBits = [it.id];
  if (it.domain) idBits.push(`domain: ${it.domain}`);
  if (it.subdomain) idBits.push(`subdomain: ${it.subdomain}`);
  if (it.cat) idBits.push(`category: ${it.cat}`);
  if (it.topic) idBits.push(`topic: ${it.topic}`);
  if (it.difficulty) idBits.push(`difficulty: ${it.difficulty}`);
  if (profile === 'decision' && it.rung) idBits.push(`rung: ${it.rung} (${RUNG_LABELS[it.rung] || '?'})`);
  lines.push(`### ${i}. ${idBits.join(' · ')}`);
  lines.push('');
  lines.push(stem);
  lines.push('');
  const letters = 'ABCD';
  it.options.forEach((o, k) => {
    const key = optKey(o);
    const mark = key ? '✔' : ' ';
    const weight = (profile === 'decision' && typeof o.weight === 'number')
      ? `  _[${WEIGHT_LABELS[String(o.weight)] || o.weight}]_` : '';
    lines.push(`**${letters[k]}. [${mark}]** ${optText(o)}${weight}`);
    const r = optRat(o, profile);
    if (r) lines.push(`> ${r}`);
    if (profile === 'decision' && !key) {
      const cm = optCM(o);
      if (cm) lines.push(`> **Common mistake:** ${cm}`);
    }
    lines.push('');
  });
  const rat = String(it.rationale || '').trim();
  if (rat) { lines.push(`**Rationale:** ${rat}`); lines.push(''); }
  if (it.rule) { lines.push(`**Rule:** ${it.rule}`); lines.push(''); }
  if (it.ref)  { lines.push(`**Reference:** ${it.ref}`); lines.push(''); }
  lines.push('---');
  lines.push('');
  return lines.join('\n');
}

function mdBank(bank) {
  const items = loadBank(path.join(root, bank.file), bank.g).filter(Boolean);
  const decisionNote = bank.profile === 'decision'
    ? 'Scoring: **+3 key**, **0 near-miss** (partial credit), **-1 novice error**, **-2 harmful**. Every item carries a Priority Ladder rung.'
    : 'Scoring: dichotomous. Correct = key (✔), all others wrong.';
  const out = [];
  out.push(`## ${bank.name}`);
  out.push('');
  out.push(`- **Items:** ${items.length}`);
  out.push(`- **Profile:** ${bank.profile}`);
  out.push(`- **Served at:** \`${bank.page}\``);
  out.push(`- ${decisionNote}`);
  out.push('');
  items.forEach((it, i) => out.push(mdItem(it, bank.profile, i + 1)));
  return out.join('\n');
}

const totalItems = BANKS.reduce((s, b) => s + loadBank(path.join(root, b.file), b.g).filter(Boolean).length, 0);
const nowIso = new Date().toISOString().slice(0, 10);
const mdHeader = [
  '# PassReady Prep — Static Question Bank (Hard Copy)',
  '',
  `**Generated:** ${nowIso}`,
  `**Total items:** ${totalItems} across ${BANKS.length} banks`,
  '',
  '**Legend**',
  '',
  '- `✔` marks the keyed (correct) option.',
  '- **Decision-profile items** (Next Best Step, What to Assess Next) carry per-option **weights** and a **Priority Ladder rung**. The bank quality gate (`utils/bankGate.js`) enforces exactly one of each weight `{3, 0, -1, -2}` per item.',
  '- **Recall-profile items** (Core Counseling Attributes, Knowledge Bank) are scored dichotomously and are held to structural checks only (length parity, key-not-longest, no absolutes, per-option rationale).',
  '',
  '**Priority Ladder (decision items only)**',
  '',
  '1. Imminent safety — suicidality, homicidality, abuse, danger.',
  '2. Medical/substance rule-outs.',
  '3. Stabilization — acute symptom relief, grounding.',
  '4. Alliance and validation — client must feel heard first.',
  '5. Clarify the picture — assessment, history, collateral.',
  '6. Evidence-based treatment — right modality for the right diagnosis.',
  '7. Ethics throughout — confidentiality, mandated reporting, competence.',
  '',
  '**Blueprint domains (NBCC NCMHCE content outline)**',
  '',
  '- `counseling` — Counseling Skills & Interventions (30%)',
  '- `intake` — Intake, Assessment & Diagnosis (25%)',
  '- `treatment` — Treatment Planning (15%)',
  '- `ethics` — Professional Practice & Ethics (15%)',
  '- `core` — Core Counseling Attributes (15%)',
  '',
  '---',
  '',
];
const mdBody = BANKS.map(mdBank).join('\n\n');
const md = mdHeader.join('\n') + mdBody;
fs.mkdirSync(path.join(root, 'docs'), { recursive: true });
fs.writeFileSync(path.join(root, 'docs/question-bank.md'), md);
console.log('wrote docs/question-bank.md', (md.length / 1024).toFixed(1) + 'KB');

// ── HTML ─────────────────────────────────────────────────────────────────────
function htmlItem(it, profile, i) {
  const stem = String((it && (it.scenario != null ? it.scenario : it.question || it.stem)) || '');
  const idBits = [it.id];
  if (it.domain) idBits.push(`domain: ${it.domain}`);
  if (it.subdomain) idBits.push(`subdomain: ${it.subdomain}`);
  if (it.cat) idBits.push(`category: ${it.cat}`);
  if (it.topic) idBits.push(`topic: ${it.topic}`);
  if (it.difficulty) idBits.push(`difficulty: ${it.difficulty}`);
  if (profile === 'decision' && it.rung) idBits.push(`rung ${it.rung} (${RUNG_LABELS[it.rung] || '?'})`);
  const letters = 'ABCD';
  const optionsHtml = it.options.map((o, k) => {
    const key = optKey(o);
    const mark = key ? '✔' : '';
    const weight = (profile === 'decision' && typeof o.weight === 'number')
      ? `<span class="w w${o.weight < 0 ? 'n' + Math.abs(o.weight) : o.weight}">${WEIGHT_LABELS[String(o.weight)] || o.weight}</span>` : '';
    const rat = optRat(o, profile);
    const cm = (profile === 'decision' && !key) ? optCM(o) : '';
    return (
      `<div class="opt ${key ? 'key' : ''}">` +
      `<div class="ohdr"><span class="l">${letters[k]}.</span> <span class="k">${mark}</span> ${weight}</div>` +
      `<div class="ot">${esc(optText(o))}</div>` +
      (rat ? `<div class="rat">${esc(rat)}</div>` : '') +
      (cm  ? `<div class="cm"><b>Common mistake:</b> ${esc(cm)}</div>` : '') +
      `</div>`
    );
  }).join('');
  return (
    `<article class="q">` +
    `<h4>${i}. <span class="idb">${idBits.map(esc).join(' · ')}</span></h4>` +
    `<div class="stem">${esc(stem)}</div>` +
    `<div class="opts">${optionsHtml}</div>` +
    (it.rationale ? `<div class="foot"><b>Rationale:</b> ${esc(it.rationale)}</div>` : '') +
    (it.rule ? `<div class="foot"><b>Rule:</b> ${esc(it.rule)}</div>` : '') +
    (it.ref  ? `<div class="foot"><b>Reference:</b> ${esc(it.ref)}</div>` : '') +
    `</article>`
  );
}
function htmlBank(bank) {
  const items = loadBank(path.join(root, bank.file), bank.g).filter(Boolean);
  const decisionNote = bank.profile === 'decision'
    ? 'Scoring: +3 key, 0 near-miss (partial credit), -1 novice error, -2 harmful. Every item carries a Priority Ladder rung.'
    : 'Scoring: dichotomous. Correct = key (✔), all others wrong.';
  return (
    `<section class="bank"><h2>${esc(bank.name)}</h2>` +
    `<div class="meta">Items: <b>${items.length}</b> · Profile: <b>${bank.profile}</b> · Served at: <code>${esc(bank.page)}</code></div>` +
    `<div class="note">${esc(decisionNote)}</div>` +
    items.map((it, i) => htmlItem(it, bank.profile, i + 1)).join('') +
    `</section>`
  );
}
const html = `<!doctype html><html lang="en"><head><meta charset="utf-8">
<title>PassReady Prep — Static Question Bank</title>
<style>
:root { color-scheme: light; }
* { box-sizing: border-box; }
body { font: 13px/1.4 -apple-system, "Segoe UI", Roboto, sans-serif; color: #111; background: #fff; margin: 24px; max-width: 900px; }
h1 { font-size: 22px; margin-top: 0; }
h2 { font-size: 18px; border-bottom: 2px solid #333; padding-bottom: 4px; margin-top: 32px; }
h4 { font-size: 13px; margin: 18px 0 6px; color: #333; }
.idb { font-weight: 400; color: #666; font-size: 12px; }
.meta, .note { color: #555; font-size: 12px; }
.legend { border: 1px solid #ccc; padding: 12px; background: #f8f8f8; margin: 12px 0 20px; }
.legend h3 { font-size: 13px; margin: 0 0 6px; }
.legend p { margin: 3px 0; font-size: 12px; }
.q { break-inside: avoid; page-break-inside: avoid; margin-bottom: 14px; padding-bottom: 10px; border-bottom: 1px dashed #ddd; }
.stem { font-weight: 600; margin-bottom: 8px; }
.opts { display: flex; flex-direction: column; gap: 6px; margin-left: 4px; }
.opt { padding: 6px 8px; border-left: 3px solid #ddd; font-size: 12px; }
.opt.key { border-left-color: #0a7f2e; background: #f2fbf4; }
.ohdr { font-size: 11px; color: #666; margin-bottom: 2px; }
.ohdr .k { color: #0a7f2e; font-weight: 700; }
.ohdr .l { font-weight: 700; color: #111; }
.ot { color: #111; }
.rat { color: #555; font-size: 11.5px; margin-top: 3px; font-style: italic; }
.cm { color: #7a2a00; font-size: 11.5px; margin-top: 3px; }
.w { display: inline-block; font-size: 10px; font-weight: 700; padding: 1px 6px; border-radius: 10px; margin-left: 6px; }
.w3 { background: #cff4d6; color: #0a5f22; }
.w0 { background: #ffe8b0; color: #7a4a00; }
.wn1 { background: #ffd9d9; color: #a02020; }
.wn2 { background: #a02020; color: #fff; }
.foot { font-size: 11.5px; color: #444; margin-top: 4px; }
code { background: #f0f0f0; padding: 0 4px; font-size: 11px; }
@media print { body { margin: 12mm; max-width: none; font-size: 10.5pt; } h2 { page-break-before: always; } h1 + p + h2, .bank:first-of-type h2 { page-break-before: auto; } }
</style></head><body>
<h1>PassReady Prep — Static Question Bank</h1>
<p><b>Generated:</b> ${nowIso} · <b>Total items:</b> ${totalItems} across ${BANKS.length} banks</p>
<div class="legend">
  <h3>Legend</h3>
  <p><b>✔</b> marks the keyed (correct) option.</p>
  <p><b>Decision-profile items</b> (Next Best Step, What to Assess Next) carry per-option weights <b>+3/0/-1/-2</b> and a <b>Priority Ladder rung</b>.</p>
  <p><b>Recall-profile items</b> (Core Counseling Attributes, Knowledge Bank) are scored dichotomously.</p>
  <h3 style="margin-top:8px">Priority Ladder</h3>
  <p>1. Safety · 2. Medical/substance rule-outs · 3. Stabilization · 4. Alliance · 5. Clarify · 6. Evidence-based treatment · 7. Ethics</p>
  <h3 style="margin-top:8px">Blueprint domains (NBCC NCMHCE)</h3>
  <p><code>counseling</code> 30% · <code>intake</code> 25% · <code>treatment</code> 15% · <code>ethics</code> 15% · <code>core</code> 15%</p>
</div>
${BANKS.map(htmlBank).join('')}
</body></html>`;
fs.writeFileSync(path.join(root, 'docs/question-bank.html'), html);
console.log('wrote docs/question-bank.html', (html.length / 1024).toFixed(1) + 'KB');
