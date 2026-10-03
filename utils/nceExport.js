// ============================================================================
// nceExport.js — a printable hard copy of the NCE question bank for SME
// review. Same look as the static-bank hard copy (tools/banks/export-banks.js →
// docs/question-bank.html) so reviewers get one familiar format.
//
// Used by the admin "Print for review" button (GET /api/admin/nce/export) and
// the CLI (tools/banks/export-nce.js). Pure functions: items in, text out.
//
// Items are grouped by NCE domain in blueprint order. Every item carries its
// key, a rationale on every option, the teaching rationale, references, the
// CACREP tag and topic, plus a reviewer sign-off line (Approve / Revise /
// Retire + notes) so a printed copy can be marked up by hand.
// ============================================================================

const bp = require('./nceBlueprint');

const LETTERS = 'ABCD';
const STATUS_LABELS = { sme_review: 'In review', published: 'Published', retired: 'Retired', draft: 'Draft' };

function esc(s) {
  return String(s == null ? '' : s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}

function cacrepLabel(key) {
  const a = bp.CACREP_AREAS.find((x) => x.key === key);
  return a ? a.label : (key || '—');
}

// Blueprint order, then externalId, so the printout matches the admin coverage table.
function groupByDomain(items) {
  const groups = bp.DOMAINS.map((d) => ({ domain: d, items: [] }));
  const other = { domain: { key: 'other', label: 'Unassigned domain', scoredItems: 0, weight: 0 }, items: [] };
  (items || []).forEach((it) => {
    const g = groups.find((x) => x.domain.key === it.domain) || other;
    g.items.push(it);
  });
  groups.forEach((g) => g.items.sort((a, b) => String(a.externalId).localeCompare(String(b.externalId))));
  if (other.items.length) groups.push(other);
  return groups.filter((g) => g.items.length);
}

function describeFilter(status) {
  return status === 'all' ? 'All statuses (except retired)' : (STATUS_LABELS[status] || status);
}

// ── HTML ─────────────────────────────────────────────────────────────────────
function htmlItem(it, n) {
  const bits = [it.externalId, cacrepLabel(it.cacrep), it.topic, it.difficulty, STATUS_LABELS[it.status] || it.status].filter(Boolean);
  const opts = (it.options || []).map((o, k) => (
    `<div class="opt ${o.isCorrect ? 'key' : ''}">` +
    `<div class="ohdr"><span class="l">${LETTERS[k] || o.id}.</span> ${o.isCorrect ? '<span class="k">✔ KEY</span>' : ''}</div>` +
    `<div class="ot">${esc(o.text)}</div>` +
    (o.rationale ? `<div class="rat">${esc(o.rationale)}</div>` : '') +
    `</div>`
  )).join('');
  const refs = (it.references || []).map((r) => esc(r.source) + (r.detail ? ' — ' + esc(r.detail) : '')).join(' · ');
  return (
    `<article class="q">` +
    `<h4>${n}. <span class="idb">${bits.map(esc).join(' · ')}</span></h4>` +
    `<div class="stem">${esc(it.stem)}</div>` +
    `<div class="opts">${opts}</div>` +
    (it.rationale ? `<div class="foot"><b>Rationale:</b> ${esc(it.rationale)}</div>` : '') +
    (refs ? `<div class="foot"><b>References:</b> ${refs}</div>` : '') +
    `<div class="signoff"><span>☐ Approve</span><span>☐ Revise</span><span>☐ Retire</span><span class="notes">Notes:</span></div>` +
    `</article>`
  );
}

function renderHtml(items, { status = 'sme_review', generatedAt = new Date() } = {}) {
  const groups = groupByDomain(items);
  const total = (items || []).length;
  const date = new Date(generatedAt).toISOString().slice(0, 10);
  let n = 0;
  const body = groups.map((g) => (
    `<section class="bank"><h2>${esc(g.domain.label)}</h2>` +
    `<div class="meta">${g.items.length} item${g.items.length === 1 ? '' : 's'}` +
    (g.domain.scoredItems ? ` · NCE weight ${Math.round(g.domain.weight * 100)}% (${g.domain.scoredItems} of ${bp.EXAM.scoredItems} scored items)` : '') +
    `</div>` +
    g.items.map((it) => htmlItem(it, ++n)).join('') +
    `</section>`
  )).join('');
  const summary = groups.map((g) => `${esc(g.domain.label)} <b>${g.items.length}</b>`).join(' · ');
  return `<!doctype html><html lang="en"><head><meta charset="utf-8">
<meta name="robots" content="noindex, nofollow">
<title>PassReady Prep — NCE Question Bank (${esc(describeFilter(status))})</title>
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
.foot { font-size: 11.5px; color: #444; margin-top: 4px; }
.signoff { display: flex; gap: 18px; font-size: 11.5px; color: #333; margin-top: 8px; padding-top: 6px; border-top: 1px solid #eee; }
.signoff .notes { flex: 1; border-bottom: 1px solid #999; min-height: 16px; }
.toolbar { margin: 0 0 16px; }
.toolbar button { font: inherit; padding: 6px 12px; cursor: pointer; }
.empty { border: 1px dashed #999; padding: 16px; color: #555; }
@media print { body { margin: 12mm; max-width: none; font-size: 10.5pt; } .toolbar { display: none; } h2 { page-break-before: always; } .bank:first-of-type h2 { page-break-before: auto; } }
</style></head><body>
<div class="toolbar"><button onclick="window.print()">Print / Save as PDF</button></div>
<h1>PassReady Prep — NCE Question Bank</h1>
<p><b>Generated:</b> ${date} · <b>Showing:</b> ${esc(describeFilter(status))} · <b>Total items:</b> ${total}</p>
<div class="legend">
  <h3>How to review</h3>
  <p><b>✔ KEY</b> marks the correct option. Every option shows why it is right or wrong; check both the key and each distractor.</p>
  <p>Mark each item <b>Approve</b>, <b>Revise</b> (note what to change) or <b>Retire</b>. Approved items are published from Admin → NCE Questions.</p>
  <p>Check: one clearly best answer · factual accuracy (theorists, dates, test properties, code sections) · distractors plausible but defensibly wrong · no answer given away by length or wording · references support the key.</p>
  <h3 style="margin-top:8px">NCE domains (NBCC 2023 content outline)</h3>
  <p>${bp.DOMAINS.map((d) => `${esc(d.label)} ${d.scoredItems}`).join(' · ')} — of ${bp.EXAM.scoredItems} scored items</p>
  ${total ? `<h3 style="margin-top:8px">In this copy</h3><p>${summary}</p>` : ''}
</div>
${total ? body : '<div class="empty">No NCE questions match this filter yet. Generate questions from Admin → NCE Questions, then export again.</div>'}
</body></html>`;
}

// ── Markdown ─────────────────────────────────────────────────────────────────
function renderMarkdown(items, { status = 'sme_review', generatedAt = new Date() } = {}) {
  const groups = groupByDomain(items);
  const out = [
    '# PassReady Prep — NCE Question Bank (Hard Copy)',
    '',
    `**Generated:** ${new Date(generatedAt).toISOString().slice(0, 10)} · **Showing:** ${describeFilter(status)} · **Total items:** ${(items || []).length}`,
    '',
    '`✔` marks the keyed option. Mark each item Approve / Revise / Retire.',
    '',
  ];
  let n = 0;
  groups.forEach((g) => {
    out.push(`## ${g.domain.label} (${g.items.length})`, '');
    g.items.forEach((it) => {
      const bits = [it.externalId, cacrepLabel(it.cacrep), it.topic, it.difficulty, STATUS_LABELS[it.status] || it.status].filter(Boolean);
      out.push(`### ${++n}. ${bits.join(' · ')}`, '', it.stem || '', '');
      (it.options || []).forEach((o, k) => {
        out.push(`**${LETTERS[k] || o.id}. [${o.isCorrect ? '✔' : ' '}]** ${o.text}`);
        if (o.rationale) out.push(`> ${o.rationale}`);
        out.push('');
      });
      if (it.rationale) out.push(`**Rationale:** ${it.rationale}`, '');
      const refs = (it.references || []).map((r) => r.source + (r.detail ? ' — ' + r.detail : '')).join(' · ');
      if (refs) out.push(`**References:** ${refs}`, '');
      out.push('☐ Approve  ☐ Revise  ☐ Retire   Notes: ____________________', '', '---', '');
    });
  });
  if (!groups.length) out.push('_No NCE questions match this filter yet._', '');
  return out.join('\n');
}

// Mongo filter for an export status choice. 'all' = everything still in play.
function exportFilter(status) {
  if (status === 'all') return { status: { $ne: 'retired' } };
  return { status: STATUS_LABELS[status] ? status : 'sme_review' };
}

module.exports = { renderHtml, renderMarkdown, exportFilter, groupByDomain };
