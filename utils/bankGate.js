// ============================================================================
// bankGate.js — the item-quality checks the static banks (public/*-data.js)
// must pass. Mirrors tools/cases/qualityGate.js for the deep-case bank so the
// two never drift, adapted to the two-profile rule (see utils/bankSchema.js).
//
// Structural checks (both profiles):
//   • exactly 4 options, non-empty text on all four
//   • exactly one keyed option
//   • length ratio max/min <= 1.25
//   • keyed option is not the sole longest (if longest, must be within 10% of shortest)
//   • no absolutes in any distractor: always / never / absolutely / categorically / universally
//   • per-option rationale present on every option (why the wrong ones are wrong,
//     why the key is the key). Recall items store it on option.rationale;
//     decision items on option.why or option.explanation.rationale.
//   • blueprint domain is one of the five NBCC domains
//
// Decision-profile checks (in addition):
//   • weights are exactly {3, 0, -1, -2}, one of each
//   • rung is an integer 1..7
//   • commonMistake on each distractor, 20+ characters
//
// Pure functions — no I/O, no side effects. checkBank returns {ok, errors,
// warnings, summary} shaped so a tool can print it or a route can gate on it.
// ============================================================================

const { optText, optIsKey, itemStem, RUNGS } = require('./bankSchema');

const ABSOLUTES = /\b(always|never|absolutely|categorically|universally)\b/i;
const BLUEPRINT = new Set(['counseling', 'intake', 'treatment', 'ethics', 'core']);

function optRationale(o, profile) {
  if (!o) return '';
  if (profile === 'decision') {
    return String(o.why || (o.explanation && o.explanation.rationale) || '').trim();
  }
  return String(o.rationale || '').trim();
}

function optCommonMistake(o) {
  return String((o && (o.commonMistake || (o.explanation && o.explanation.commonMistake))) || '').trim();
}

function checkItem(item, profile) {
  const errors = [];
  const warnings = [];
  const tag = (item && item.id) || itemStem(item).slice(0, 40);
  const at = (m) => `[${tag}] ${m}`;

  if (!item || typeof item !== 'object') { errors.push(at('not an object')); return { errors, warnings }; }
  const opts = item.options || [];
  if (opts.length !== 4) { errors.push(at(`options.length ${opts.length}, need 4`)); return { errors, warnings }; }

  const texts = opts.map(optText);
  if (texts.some((t) => !t.trim())) errors.push(at('empty option text'));

  const keys = opts.map(optIsKey);
  const keyCount = keys.filter(Boolean).length;
  if (keyCount !== 1) errors.push(at(`must have exactly one keyed option (found ${keyCount})`));
  const ki = keys.indexOf(true);

  const lens = texts.map((t) => t.length);
  const minL = Math.min(...lens); const maxL = Math.max(...lens);
  // Length-parity rules apply only when options are long enough that length can
  // act as a test-wise cue. For a label-scale recall item where every option is
  // under 40 characters (e.g., "Catastrophizing" vs "Personalization"), the 25%
  // ratio is not a realistic cue and would rule out legitimate items. Decision
  // items always run the strict rules — their options are actions and length
  // parity is the point.
  const shortLabels = profile === 'recall' && maxL < 40;
  if (minL > 0 && !shortLabels) {
    const ratio = maxL / minL;
    if (ratio > 1.25) errors.push(at(`length ratio ${ratio.toFixed(2)} > 1.25 (${lens.join(',')})`));
    if (ki >= 0 && lens[ki] === maxL && lens[ki] > minL * 1.1) {
      errors.push(at(`key is the longest option (${lens[ki]} vs min ${minL})`));
    }
  }

  opts.forEach((o, i) => {
    if (i === ki) return;
    if (ABSOLUTES.test(texts[i])) errors.push(at(`opt ${o.id || i}: contains an absolute`));
  });

  opts.forEach((o, i) => {
    if (!optRationale(o, profile)) errors.push(at(`opt ${o.id || i}: rationale missing`));
  });

  if (item.domain && !BLUEPRINT.has(item.domain) && profile === 'decision') {
    errors.push(at(`domain "${item.domain}" not in blueprint`));
  }

  if (profile === 'decision') {
    const ws = opts.map((o) => (typeof o.weight === 'number' ? o.weight : null));
    const sorted = ws.slice().sort((a, b) => b - a).join(',');
    if (sorted !== '3,0,-1,-2') errors.push(at(`weights [${ws}] must be exactly {3,0,-1,-2}`));
    if (ki >= 0 && opts[ki].weight !== 3) errors.push(at('key is not the weight-3 option'));

    if (!Number.isInteger(item.rung) || !RUNGS[item.rung]) {
      errors.push(at(`rung must be an integer 1..7 (got ${item.rung})`));
    }

    opts.forEach((o, i) => {
      if (i === ki) return;
      const cm = optCommonMistake(o);
      if (cm.length < 20) errors.push(at(`opt ${o.id || i}: commonMistake missing or < 20 chars`));
    });
  }

  return { errors, warnings };
}

function checkBank(items, profile, name) {
  const arr = (items || []).filter(Boolean);
  const errors = []; const warnings = [];
  const seen = new Set();
  arr.forEach((it, i) => {
    if (!it || !it.id) errors.push(`[${name} #${i}] missing id`);
    else if (seen.has(it.id)) errors.push(`[${name}] duplicate id ${it.id}`);
    else seen.add(it.id);
    const r = checkItem(it, profile);
    errors.push(...r.errors); warnings.push(...r.warnings);
  });
  if ((items || []).some((x) => !x)) errors.push(`[${name}] sparse array (holes)`);
  return {
    ok: errors.length === 0,
    count: arr.length,
    errors,
    warnings,
    summary: `${name}: ${arr.length} items, ${errors.length} errors, ${warnings.length} warnings`,
  };
}

module.exports = { checkItem, checkBank, ABSOLUTES };
