// ============================================================================
// nceGate.js — the quality checks every NCE item must pass before it is saved.
//
// Structural rules are NOT re-implemented here: they come from utils/bankGate.js
// (checkItem, 'recall' profile) so the NCE bank is held to exactly the same
// standard as the NCMHCE banks — 4 options, one key, max/min length ratio
// <= 1.25, key not the sole longest, no absolutes in distractors, a rationale
// on every option. Change those rules there, not here.
//
// NCE-specific additions:
//   • domain is one of the six weighted NCE domains, and the CACREP tag (if
//     present) is one of the eight core areas (utils/nceBlueprint.js)
//   • a non-empty stem and a teaching rationale for the key
//   • option ids a–d, unique
//   • references cite approved sources only (when allowedSources is passed)
//   • the stem is not a near-copy of an item already in the bank
// ============================================================================

const { checkItem } = require('./bankGate');
const { DOMAIN_KEYS, CACREP_KEYS } = require('./nceBlueprint');

function normalize(s) {
  return String(s || '').toLowerCase().replace(/[^a-z0-9 ]+/g, ' ').replace(/\s+/g, ' ').trim();
}

function shingles(s) {
  const w = normalize(s).split(' ').filter(Boolean);
  const out = new Set();
  for (let i = 0; i + 2 < w.length; i++) out.add(w[i] + ' ' + w[i + 1] + ' ' + w[i + 2]);
  if (!out.size && w.length) out.add(w.join(' '));
  return out;
}

// Jaccard similarity of word-trigram sets — cheap and good enough to catch a
// regenerated stem that only swaps a word or two.
function stemSimilarity(a, b) {
  const A = shingles(a); const B = shingles(b);
  if (!A.size || !B.size) return 0;
  let inter = 0;
  A.forEach((x) => { if (B.has(x)) inter++; });
  return inter / (A.size + B.size - inter);
}

const DUP_THRESHOLD = 0.6;

function findDuplicate(stem, corpusStems, threshold = DUP_THRESHOLD) {
  let best = null;
  (corpusStems || []).forEach((c) => {
    const s = stemSimilarity(stem, c.stem);
    if (s >= threshold && (!best || s > best.score)) best = { against: c.externalId || null, score: s };
  });
  return best;
}

// item: { stem, domain, cacrep, options:[{id,text,isCorrect,rationale}], rationale }
function checkNceItem(item, { corpusStems = [], allowedSources = null } = {}) {
  const errors = [];
  if (!item || typeof item !== 'object') return { ok: false, errors: ['not an object'] };

  if (!String(item.stem || '').trim()) errors.push('stem is empty');
  if (!DOMAIN_KEYS.includes(item.domain)) errors.push(`domain "${item.domain}" is not an NCE domain`);
  if (item.cacrep && !CACREP_KEYS.includes(item.cacrep)) errors.push(`cacrep "${item.cacrep}" is not a CACREP core area`);
  if (!String(item.rationale || '').trim()) errors.push('rationale for the key is missing');

  if (allowedSources) {
    const refs = item.references || [];
    if (!refs.length) errors.push('at least one reference is required');
    refs.forEach((r) => { if (!allowedSources.includes(r && r.source)) errors.push(`reference source "${r && r.source}" is not approved`); });
  }

  const ids = (item.options || []).map((o) => o && o.id);
  if (ids.join(',') !== 'a,b,c,d') errors.push(`option ids must be a,b,c,d in order (got ${ids.join(',')})`);

  // Shared structural standard (bankGate 'recall' profile).
  const r = checkItem({ id: item.externalId, question: item.stem, options: item.options }, 'recall');
  errors.push(...r.errors);

  const dup = findDuplicate(item.stem, corpusStems);
  if (dup) errors.push(`near-duplicate of ${dup.against} (similarity ${dup.score.toFixed(2)})`);

  return { ok: errors.length === 0, errors, duplicate: dup };
}

module.exports = { checkNceItem, stemSimilarity, findDuplicate, DUP_THRESHOLD };
