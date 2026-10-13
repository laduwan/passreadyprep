// ============================================================================
// caseExport.js — printable hard copy of NCMHCE cases for SME review.
// Used by Case Review → "Print for review" (GET /api/admin/content-print).
// Pure function: case docs in, HTML out.
//
// Each case: title, category, difficulty, given diagnosis, the intake and two
// session narratives, differential options, diagnostic rationale, references,
// then every question with each option's weight [+3 key, 0, -1, -2], its
// rationale and common mistake, plus Approve / Revise / Retire lines.
// ============================================================================

const esc = (s) => String(s == null ? '' : s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const SECTION = { intake: 'Assessment', core: 'Assessment', treatment: 'Treatment Planning', counseling: 'Counseling & Ethics', ethics: 'Counseling & Ethics' };
const SECTION_2027 = { intake: 'Intake', session1: 'Session 1', session2: 'Session 2' };
const STATUS_LABELS = { sme_review: 'Pending review', published: 'Published', draft: 'Draft' };
const L = 'ABCDEF';

function narrativeHtml(n) {
  if (!n) return '';
  if (typeof n === 'string') return `<div class="nar"><p>${esc(n)}</p></div>`;
  return [['intake', 'Intake'], ['session1', 'Session 1'], ['session2', 'Session 2']]
    .filter(([k]) => n[k]).map(([k, label]) => `<div class="nar"><h5>${label}</h5><p>${esc(n[k])}</p></div>`).join('');
}

function optionHtml(o, k) {
  const e = o.explanation || {};
  const w = typeof o.weight === 'number' ? ` <span class="w">[${o.weight > 0 ? '+' : ''}${o.weight}]</span>` : '';
  const why = e.rationale || o.rationale || '';
  return `<div class="opt ${o.isCorrect ? 'key' : ''}"><div class="ot"><b>${L[k] || o.id}.</b> ${esc(o.text)}${w}${o.isCorrect ? ' <span class="k">✔ KEY</span>' : ''}</div>` +
    (why ? `<div class="rat">${esc(why)}</div>` : '') +
    (e.commonMistake && !o.isCorrect ? `<div class="rat cm">Common mistake: ${esc(e.commonMistake)}</div>` : '') + '</div>';
}

function caseHtml(doc, ci, total) {
  const c = doc.caseSim || {};
  const dx = c.diagnosis || c.primaryDiagnosis || {};
  const refs = (c.references || doc.references || []).map((r) => `<li><b>${esc(r.id)}</b> ${esc(r.source)}${r.detail ? ' — ' + esc(r.detail) : ''}</li>`).join('');
  const diffs = (c.differentialOptions || []).map((d) => `<li>${esc(d.name)}${d.isCorrect ? ' <b>✔</b>' : ''}</li>`).join('');
  const qs = (c.questions || []).map((q, qi) => (
    `<div class="q"><h4>Q${qi + 1} · ${esc(q.domain || '')} <span class="sec">${SECTION[q.domain] ? '(' + SECTION[q.domain] + ')' : (SECTION_2027[q.section] ? '(' + SECTION_2027[q.section] + ')' : '')}</span>${(q.evidenceRef || []).length ? ' · evidence ' + esc(q.evidenceRef.join(', ')) : ''}</h4>` +
    `<div class="stem">${esc(q.question || q.stem)}</div>${(q.options || []).map(optionHtml).join('')}` +
    `<div class="signoff"><span>☐ Approve</span><span>☐ Revise</span><span>☐ Retire</span><span class="notes">Notes:</span></div></div>`
  )).join('');
  return `<section class="case"><h2>Case ${ci + 1} of ${total} · ${esc(doc.externalId)} <span class="st">${esc(STATUS_LABELS[doc.status] || doc.status)}</span></h2>` +
    `<h3>${esc(doc.title || c.title)}</h3>` +
    `<div class="meta">${esc(doc.category || c.category)} · ${esc(doc.difficulty || c.difficulty)}${dx.name ? ` · Given diagnosis: <b>${esc(dx.name)}${dx.code ? ' (' + esc(dx.code) + ')' : ''}</b>` : ''}</div>` +
    (doc.reviewNote ? `<div class="flag"><b>⚑ Reviewer note:</b> ${esc(doc.reviewNote)}</div>` : '') +
    narrativeHtml(c.narrative) +
    (diffs || c.diagnosticRationale ? `<div class="foot">${diffs ? `<b>Differential options:</b><ul>${diffs}</ul>` : ''}${c.diagnosticRationale ? `<b>Diagnostic rationale:</b> ${esc(c.diagnosticRationale)}` : ''}</div>` : '') +
    (refs ? `<div class="foot"><b>References:</b><ul>${refs}</ul></div>` : '') +
    qs +
    `<div class="signoff big"><span>Case decision: ☐ Publish ☐ Revise ☐ Retire</span><span class="notes">Reviewer / date:</span></div></section>`;
}

function renderCasesHtml(docs, { status = 'sme_review', generatedAt = new Date() } = {}) {
  const list = docs || [];
  const nQ = list.reduce((n, d) => n + ((d.caseSim && d.caseSim.questions) || []).length, 0);
  const label = STATUS_LABELS[status] || status;
  return `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="robots" content="noindex, nofollow">
<title>PassReady Prep — NCMHCE Cases · ${esc(label)}</title>
<style>
:root{color-scheme:light}
body{font:10.5pt/1.45 -apple-system,"Segoe UI",Roboto,Arial,sans-serif;font-variant-numeric:lining-nums slashed-zero;color:#111;background:#fff;margin:24px;max-width:900px}
h1{font-size:18pt;margin:0 0 4px}h2{font-size:13pt;margin:0;border-bottom:2px solid #222}h3{font-size:12pt;margin:4px 0}h4{font-size:10.5pt;margin:10px 0 4px}h5{margin:6px 0 2px;font-size:10pt;text-transform:uppercase;letter-spacing:.04em}
.st{font-weight:400;font-size:10pt;color:#666}.meta{color:#444;margin-bottom:6px}.nar p{margin:0 0 4px}
.q{border-top:1px solid #bbb;padding-top:4px;break-inside:avoid;page-break-inside:avoid}.stem{font-weight:600;margin-bottom:4px}
.opt{margin:3px 0 3px 10px}.opt.key .ot{background:#e8f5e9}.w{color:#555;font-size:9pt}.k{color:#1b5e20;font-weight:700;font-size:9pt}
.rat{font-size:9.5pt;color:#333;margin-left:14px}.cm{color:#7a3e00}
.foot{font-size:9.5pt;margin:6px 0}.foot ul{margin:2px 0 4px 18px;padding:0}
.flag{font-size:9.5pt;color:#7a4a00;background:#fff6e0;border-left:3px solid #e0a000;padding:4px 8px;margin:6px 0}
.signoff{display:flex;gap:18px;font-size:9.5pt;margin:6px 0 8px}.signoff .notes{flex:1;border-bottom:1px solid #999}.sec{color:#666;font-weight:400}
.toolbar{margin:0 0 16px}.toolbar button{font:inherit;padding:6px 12px;cursor:pointer}
.empty{border:1px dashed #999;padding:16px;color:#555}
@page{size:letter;margin:0.6in}
@media print{body{margin:0;max-width:none}.toolbar{display:none}.case{page-break-before:always}.case:first-of-type{page-break-before:auto}}
</style></head><body>
<div class="toolbar"><button onclick="window.print()">Print / Save as PDF</button></div>
<h1>PassReady Prep — NCMHCE Cases · ${esc(label)}</h1>
<p>${list.length} case${list.length === 1 ? '' : 's'} · ${nQ} questions · weights in brackets [+3 key, 0 near-miss, −1, −2 harmful] · Generated ${new Date(generatedAt).toISOString().slice(0, 10)}</p>
${list.length ? list.map((d, i) => caseHtml(d, i, list.length)).join('') : '<div class="empty">No cases with this status.</div>'}
</body></html>`;
}

module.exports = { renderCasesHtml };
