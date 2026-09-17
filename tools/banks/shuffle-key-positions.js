#!/usr/bin/env node
// ============================================================================
// shuffle-key-positions.js — redistribute the keyed option across positions
// A/B/C/D in the source of each static bank, so the key isn't systematically
// at any one slot.
//
// The drills (public/knowledge-drill.html, timed-knowledge-exam.html,
// core-attributes-quiz.html, next-best-step.html, assess-next.html) all
// shuffle options at render time, so this doesn't change what a candidate
// sees. It does change the printed hard copy (docs/question-bank.md/html) —
// which reads items in source order — and eliminates a positional pattern in
// the raw data that a reviewer scrolling the source would spot.
//
// Strategy: for each bank, walk items in source order and assign the key a
// target position cycling [0,1,2,3]. For each item, permute the 4 options so
// the key lands at that position and the distractors fill the remaining
// three slots in a deterministic order derived from the item id.
//
// Preserves the option shape:
//   Recall banks (ca-quiz, knowledge): options have `id: 'a'/'b'/'c'/'d'`.
//     After shuffling, ids are renumbered a/b/c/d in the new position order
//     so the drill (which reads options by array index, but may reference ids
//     in `evidenceRef`-style fields — none of these banks do) stays consistent.
//   Decision banks (nbs, assess): options have no id field. Just reorder.
// ============================================================================

const fs = require('fs');
const path = require('path');
const DRY = process.argv.includes('--dry-run');

function loadBank(file, globalName) {
  const src = fs.readFileSync(file, 'utf8');
  const m = new module.constructor();
  m._compile(src + `\nmodule.exports = ${globalName};\n`, file);
  return { items: m.exports, src };
}

// Small deterministic PRNG seeded from a string (mulberry32 on a hash).
function seed(s) {
  let h = 2166136261 >>> 0;
  for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 16777619) >>> 0; }
  return () => {
    let t = (h += 0x6D2B79F5) >>> 0;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
function shuffleArray(arr, rng) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function isKey(o) { return !!(o && (o.isCorrect === true || o.ok === true || o.weight === 3)); }

function repositionItem(item, targetKi, hasIds) {
  const opts = item.options;
  const ki = opts.findIndex(isKey);
  if (ki < 0) return { changed: false };
  const key = opts[ki];
  const distractors = opts.filter((_, i) => i !== ki);
  const rng = seed(item.id || item.title || 'x');
  const shuffled = shuffleArray(distractors, rng);
  const out = new Array(4);
  out[targetKi] = key;
  let di = 0;
  for (let i = 0; i < 4; i++) if (i !== targetKi) out[i] = shuffled[di++];
  if (hasIds) {
    const letters = 'abcd';
    out.forEach((o, i) => { o.id = letters[i]; });
  }
  item.options = out;
  return { changed: ki !== targetKi };
}

const BANKS = [
  { file: 'public/knowledge-data.js', g: 'KNOWLEDGE_ITEMS', hasIds: true  },
  { file: 'public/ca-quiz-data.js',   g: 'CA_QUIZ_ITEMS',   hasIds: true  },
  { file: 'public/nbs-data.js',       g: 'NBS_ITEMS',       hasIds: false },
  { file: 'public/assess-data.js',    g: 'ASSESS_ITEMS',    hasIds: false },
];

const root = path.resolve(__dirname, '..', '..');
BANKS.forEach((b) => {
  const abs = path.join(root, b.file);
  const { items, src } = loadBank(abs, b.g);
  const real = items.filter(Boolean);
  // Interleave the target positions: [0,1,2,3,0,1,2,3,...]. That gives an
  // exactly-balanced distribution when count%4==0 and a maximum imbalance of 1
  // when it doesn't. A per-item stable id-seeded RNG then still governs where
  // the distractors land within the item.
  let dist = [0, 0, 0, 0];
  real.forEach((it, i) => {
    const target = i % 4;
    const r = repositionItem(it, target, b.hasIds);
    dist[target]++;
    if (r.changed) { /* count if you want */ }
  });
  console.log(`${b.file}  N=${real.length}  A/B/C/D: ${dist.join('/')}`);

  // Re-emit. Rewrite the file by re-serializing each item and splicing back
  // into the original source at the const's `[...]` boundaries. Simpler: we
  // regenerate the whole array literal and replace it in the source.
  // For consistent output across banks, we emit a compact per-item block that
  // matches each bank's original style.
  const startMarker = new RegExp(`const\\s+${b.g}\\s*=\\s*\\[`);
  const startMatch = src.match(startMarker);
  if (!startMatch) throw new Error(`can't find ${b.g} in ${b.file}`);
  const startIdx = startMatch.index;
  // Find the matching closing ']' by scanning
  let depth = 0; let i = startIdx + startMatch[0].length - 1;
  while (i < src.length) {
    const c = src[i];
    if (c === '[') depth++;
    else if (c === ']') { depth--; if (depth === 0) { break; } }
    i++;
  }
  if (i >= src.length) throw new Error('unterminated array literal');
  const closingIdx = i;
  // Trailing ';\n' consumed by the replacement so we can write our own
  let tail = closingIdx + 1;
  if (src[tail] === ';') tail++;

  // Emit items in original ordering (source-order items) but with new option
  // arrays. Choose a serializer that stays close to each bank's flavor.
  function ser(bankKey, item) {
    if (bankKey === 'KNOWLEDGE_ITEMS' || bankKey === 'CA_QUIZ_ITEMS') {
      const opts = item.options.map((o) => (
        `      {\n` +
        `        "id": ${JSON.stringify(o.id)},\n` +
        `        "text": ${JSON.stringify(o.text)},\n` +
        `        "isCorrect": ${o.isCorrect === true},\n` +
        `        "rationale": ${JSON.stringify(o.rationale || '')}\n` +
        `      }`
      )).join(',\n');
      // Preserve any extra top-level fields (stem, topic, domain, subdomain,
      // difficulty, question, rationale) in the same order they appeared.
      const top = { ...item };
      delete top.options;
      const topLines = Object.keys(top).map((k) => `    ${JSON.stringify(k)}: ${JSON.stringify(top[k])}`).join(',\n');
      return `  {\n${topLines},\n    "options": [\n${opts}\n    ]\n  }`;
    }
    // Decision banks
    const opts = item.options.map((o) => {
      const bits = [
        `      { t: ${JSON.stringify(o.t)}`,
        `weight: ${o.weight}`,
      ];
      if (o.ok === true) bits.push('ok: true');
      bits.push(`why: ${JSON.stringify(o.why || '')}`);
      if (o.commonMistake) bits.push(`commonMistake: ${JSON.stringify(o.commonMistake)}`);
      return bits.join(',\n        ') + ' }';
    }).join(',\n');
    const meta = [
      `id: ${JSON.stringify(item.id)}`,
      `cat: ${JSON.stringify(item.cat)}`,
      `domain: ${JSON.stringify(item.domain)}`,
      `rung: ${item.rung}`,
    ].join(', ');
    return (
      `  { ${meta},\n` +
      `    scenario: ${JSON.stringify(item.scenario)},\n` +
      `    options:[\n${opts}\n    ],\n` +
      `    rule: ${JSON.stringify(item.rule)},\n` +
      `    ref: ${JSON.stringify(item.ref)} }`
    );
  }
  const body = real.map((it) => ser(b.g, it)).join(',\n\n');
  const newArrayLiteral = `const ${b.g} = [\n${body},\n];`;
  const newSrc = src.slice(0, startIdx) + newArrayLiteral + src.slice(tail);
  if (!DRY) fs.writeFileSync(abs, newSrc);
});
console.log(DRY ? '--dry-run: not writing.' : 'wrote all banks');
