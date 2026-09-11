// ============================================================================
// Case questions -> "Next Best Step" drill items — shared by the API that feeds
// public/next-best-step.html (routes/nbs.js) and the harvest tool that flags
// which cases to draw from (tools/cases/nbs-harvest.js), so both agree on
// exactly which questions convert.
//
// A retired duplicate case still holds a full set of gate-passing questions,
// and each one already has the shape the drill renders: a self-contained
// scenario, four options with exactly one key, per-option feedback, and the
// evidence behind the key. Converting is a remap, not a rewrite.
// ============================================================================

// The drill shows one scenario and shuffles the options, so an item is only
// usable when exactly one option is keyed and every option can explain itself.
function questionToItem(caseDoc, q, refs) {
  if (!q || !q.question || !Array.isArray(q.options) || q.options.length !== 4) return null;

  const options = q.options.map((o) => ({
    t: String(o.text || '').trim(),
    ok: o.weight === 3 && o.isCorrect === true,
    why: String((o.explanation && o.explanation.rationale) || o.rationale || '').trim(),
  }));
  if (options.some((o) => !o.t || !o.why)) return null;
  if (options.filter((o) => o.ok).length !== 1) return null;

  // The drill prints the key's feedback and then "The rule", so the rule has to
  // say something the feedback did not: the trap the item is built around.
  const kx = (q.options.find((o) => o.weight === 3 && o.isCorrect === true) || {}).explanation || {};
  const rule = [kx.approach, kx.commonMistake].filter(Boolean).join(' — ').trim()
    || String(kx.rationale || '').trim();
  if (!rule) return null;

  // evidenceRef holds reference ids ('R2'); the drill wants readable basis text.
  const ref = (q.evidenceRef || [])
    .map((id) => refs[id])
    .filter(Boolean)
    .join('; ');

  return {
    id: 'nbs-' + String(caseDoc.externalId || '').replace(/^ncmhce-/, '') + '-' + q.id,
    cat: caseDoc.category || 'General',
    scenario: String(q.question).trim(),
    options,
    rule,
    ref,
  };
}

// Every usable item from one ContentItem (format 'case_sim'). A question that
// does not convert is skipped rather than shipped half-formed.
function caseToNbsItems(caseDoc) {
  const c = (caseDoc && caseDoc.caseSim) || {};
  const refs = {};
  (c.references || []).forEach((r) => {
    if (r && r.id) refs[r.id] = [r.source, r.detail].filter(Boolean).join(' — ');
  });
  return (c.questions || [])
    .map((q) => questionToItem(caseDoc, q, refs))
    .filter(Boolean);
}

module.exports = { caseToNbsItems, questionToItem };
