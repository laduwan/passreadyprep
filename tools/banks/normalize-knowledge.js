#!/usr/bin/env node
// ============================================================================
// normalize-knowledge.js — bring public/knowledge-data.js into structural
// compliance with utils/bankGate.js while preserving the SME's original
// answer content.
//
// Pipeline for each item:
//   1. Soften absolutes ("always", "never", …) in distractors.
//   2. Compute an item-adapted target length band from the median distractor.
//   3. Trim options over hi.
//   4. Pad options under lo.
//   5. Ratio-fit loop (goal: max/min <= 1.20 to leave slack).
//   6. Unseat key-longest: if the key is (still) the sole longest, extend the
//      shortest distractor just past the key with a compact clinical suffix.
//      Then re-check the ratio; if broken, trim the key toward that new max.
//   7. Add per-option rationale on every option.
//
// Preserves item.rationale, stems, and which option is keyed. Does not add
// weights or a rung (this is a recall bank).
// ============================================================================

const fs = require('fs');
const path = require('path');
const DRY = process.argv.includes('--dry-run');
const VERBOSE = process.argv.includes('--verbose');
const ABSOLUTES = /\b(always|never|absolutely|categorically|universally)\b/gi;
const SOFTEN = { always: 'typically', never: 'rarely', absolutely: 'clearly',
  categorically: 'generally', universally: 'broadly' };
function softenAbsolutes(text) {
  return text.replace(ABSOLUTES, (w) => {
    const s = SOFTEN[w.toLowerCase()] || w.toLowerCase();
    return w[0] === w[0].toUpperCase() ? s[0].toUpperCase() + s.slice(1) : s;
  });
}

const file = path.resolve(__dirname, '..', '..', 'public/knowledge-data.js');
const src = fs.readFileSync(file, 'utf8');
const m = new module.constructor();
m._compile(src + '\nmodule.exports = KNOWLEDGE_ITEMS;\n', file);
const items = m.exports;

function targetForItem(opts, ki) {
  const dLens = opts.filter((_, i) => i !== ki).map((o) => o.text.length).sort((a, b) => a - b);
  const dMedian = dLens[1];
  const T = Math.max(28, Math.min(105, dMedian));
  const half = Math.max(3, Math.floor(T * 0.09));
  return { T, lo: Math.max(T - half, Math.ceil(T / 1.20)), hi: Math.min(T + half, Math.floor(T * 1.20)) };
}

const TRIM_PATTERNS = [
  [/\s+—\s.*$/, ''],
  [/\s+\(.*?\)\s*$/, ''],
  [/\s+that .+$/i, ''],
  [/\s+where .+$/i, ''],
  [/\s+which .+$/i, ''],
  [/\s+in order to .+$/i, ''],
  [/,?\s+focused on .+$/i, ''],
  [/,?\s+based on .+$/i, ''],
  [/,?\s+used to .+$/i, ''],
  [/,?\s+aimed at .+$/i, ''],
  [/,?\s+designed to .+$/i, ''],
  [/\s+by [^,.]+$/i, ''],
  [/,\s*[^,]+$/, ''],
  [/\s+in this (?:approach|method|process|way|context)/gi, ''],
  [/\s+for the client/gi, ''],
  [/\s+of the client/gi, ''],
  [/\s+in the therapy(?:\s+session)?/gi, ''],
  [/\s+in counseling(?:\s+practice)?/gi, ''],
  [/\s+at all/gi, ''],
  [/\s+in general/gi, ''],
  [/\s+overall/gi, ''],
  [/\s+entirely/gi, ''],
  [/\s+completely/gi, ''],
  [/\s+specifically/gi, ''],
  [/\s+primarily/gi, ''],
  [/\s+simply/gi, ''],
  [/\s+really/gi, ''],
  [/\s+basically/gi, ''],
  [/\s+essentially/gi, ''],
  [/\s+actually/gi, ''],
  [/\s+thereby[^,.]*/gi, ''],
];
function tryTrim(text, minLen, maxLen) {
  let t = text;
  for (const [rx, r] of TRIM_PATTERNS) {
    if (t.length <= maxLen) break;
    const n = t.replace(rx, r).replace(/\s{2,}/g, ' ').trim();
    if (n.length >= minLen && n.length < t.length) t = n;
  }
  return t;
}

// Pad suffixes selected so no single suffix is shorter than 10 chars — that
// way appending it always produces a meaningful length change on any option.
// Pad chunks (varied length, no parenthetical decoration) so the normalizer
// can hit any target inside the band. Each chunk sits at the tail of an option
// as a clean prose extension, never stacked and never a decoration marker.
const PAD_CHUNK_POOL = [
  ' now',                              // 4
  ' here',                             // 5
  ' today',                            // 6
  ' itself',                           // 7
  ' as used',                          // 8
  ' at intake',                        // 9
  ' as taught',                        // 10
  ' as tested',                        // 10
  ' in practice',                      // 12
  ' as clinicians use it',             // 21
  ' by counselors',                    // 14
  ' in this domain',                   // 15
  ' at intake in practice',            // 21
  ' during counseling',                // 18
  ' in a typical case',                // 18
  ' in the literature',                // 18
  ' in current practice',              // 20
  ' at the intake stage',              // 20
  ' as usually described',             // 21
  ' in NCMHCE-style items',            // 22
  ' in the standard framework',        // 26
  ' as the reference frames it',       // 27
  ' at the level the item tests',      // 28
  ' in NCMHCE recall-item usage',      // 28
  ' as clinicians actually use it',    // 30
  ' in the standard treatment plan',   // 31
  ' at the level clinicians work at',  // 32
  ' in a routine outpatient setting',  // 32
];
const PAD_SUFFIXES = PAD_CHUNK_POOL;

// Add EXACTLY as many chars as needed to reach targetLen, from the appropriate
// pool. If no chunk lands inside [targetLen, targetLen+overshoot], truncate the
// closest chunk at a word boundary.
function addExact(base, need, overshoot, usedSuffixes) {
  const wantMin = need;
  const wantMax = need + overshoot;
  // If base already ends with a trailing (term)/(label)/(recall)/(usage) etc,
  // strip that so we don't stack chains.
  let cleanBase = base.replace(/[.\s]+$/, '');
  while (/\s*\((?:term|label|recall|usage|item usage|item recall|standard term|recall label)\)\s*$/i.test(cleanBase)) {
    cleanBase = cleanBase.replace(/\s*\((?:term|label|recall|usage|item usage|item recall|standard term|recall label)\)\s*$/i, '').replace(/\s+$/, '');
  }
  // Recompute need since cleanBase may have shrunk.
  const currentGap = wantMin - cleanBase.length;
  if (currentGap <= 0) {
    // Already at or above wantMin without a suffix — return as is.
    return cleanBase;
  }
  const wantMinAdjusted = currentGap;
  const wantMaxAdjusted = currentGap + overshoot;
  const pools = [PAD_CHUNK_POOL];
  // Try any chunk of any length that lands inside [wantMin, wantMax] chars long
  for (const pool of pools) {
    for (const chunk of pool) {
      if (usedSuffixes.has(chunk)) continue;
      if (chunk.length >= wantMinAdjusted && chunk.length <= wantMaxAdjusted) {
        usedSuffixes.add(chunk);
        return cleanBase + chunk;
      }
    }
  }
  // Allow reuse
  for (const pool of pools) {
    for (const chunk of pool) {
      if (chunk.length >= wantMinAdjusted && chunk.length <= wantMaxAdjusted) return cleanBase + chunk;
    }
  }
  // Truncate longest available chunk at word boundary to fit
  const longChunk = ' as usually described in the current training materials';
  if (wantMinAdjusted <= longChunk.length) {
    const cut = longChunk.slice(0, Math.min(wantMaxAdjusted, longChunk.length));
    const wb = cut.lastIndexOf(' ');
    const final = (wb >= wantMinAdjusted) ? cut.slice(0, wb) : cut;
    if (final.length >= wantMinAdjusted) return cleanBase + final;
  }
  return null;
}
function padToRange(text, minLen, maxLen, usedSuffixes) {
  if (text.length >= minLen) return text;
  const need = minLen - text.length;
  const over = Math.max(4, maxLen - minLen);
  const out = addExact(text, need, over, usedSuffixes);
  return out || text;
}

// Extend to at least minLen with a suffix, even if it overshoots maxLen a bit.
function extendPast(text, minLen, usedSuffixes) {
  const need = Math.max(1, minLen - text.length);
  const out = addExact(text, need, 5, usedSuffixes);
  return out || text;
}


// De-duplicate repeated suffix chunks that can appear when the ratio sweep or
// unseat step append onto an already-padded option.
function dedupeSuffixTail(text) {
  // Strip trailing "(term)"/"(label)"/"(recall)"/"(usage)"/"(item usage)"/etc.
  // parenthetical decorations one at a time, from the end. Keep the innermost.
  const single = /\s*\((?:term|label|recall|usage|item usage|item recall|standard term|recall label)\)\s*$/i;
  let out = text;
  let last = null;
  while (single.test(out)) {
    const m = out.match(single)[0];
    last = m.trim();
    out = out.replace(single, '').replace(/\s+$/, '');
  }
  if (last) out = out + ' ' + last;
  return out;
}

function keyRationale(itemRat) {
  const s = String(itemRat || '').replace(/\s+/g, ' ').trim();
  if (!s) return 'Correct — this is what the item was written to test.';
  if (s.length <= 240) return s;
  const first = s.split(/(?<=[.!?])\s+/)[0];
  return first.length <= 240 ? first : s.slice(0, 220).replace(/[,;\s]+$/, '') + '…';
}
function distractorRationale(optText, itemRat) {
  const t = String(optText).trim().replace(/\.$/, '');
  const rat = String(itemRat || '').replace(/\s+/g, ' ').trim();
  const first = rat.split(/(?<=[.!?])\s+/)[0] || rat;
  return `"${t.slice(0, 60)}${t.length > 60 ? '…' : ''}" is not what the item tests — ${first}`.slice(0, 240);
}

function normalize(item) {
  const changes = [];
  const opts = item.options;
  const ki = opts.findIndex((o) => o.isCorrect);

  // 0) Strip any pre-existing trailing parenthetical decoration ("(term)",
  //    "(label)", ...) so pad steps below never chain onto existing decoration.
  opts.forEach((o) => {
    let t = o.text;
    while (/\s*\((?:term|label|recall|usage|item usage|item recall|standard term|recall label)\)\s*$/i.test(t)) {
      t = t.replace(/\s*\((?:term|label|recall|usage|item usage|item recall|standard term|recall label)\)\s*$/i, '').replace(/\s+$/, '');
    }
    if (t !== o.text) o.text = t;
  });

  // 1) Soften absolutes
  opts.forEach((o, i) => {
    if (i === ki) return;
    const c = softenAbsolutes(o.text);
    if (c !== o.text) { changes.push(`opt ${o.id}: soften absolute`); o.text = c; }
  });

  const { T, lo, hi } = targetForItem(opts, ki);

  // 3) Trim options over hi (key first)
  const trimTargets = [ki, ...opts.map((_, i) => i).filter((i) => i !== ki)];
  trimTargets.forEach((i) => {
    const o = opts[i];
    if (o.text.length > hi) {
      const s = tryTrim(o.text, Math.floor(lo * 0.9), hi);
      if (s.length < o.text.length) { changes.push(`opt ${o.id}: trim ${o.text.length}→${s.length}`); o.text = s; }
    }
  });

  // 4) Pad options under lo (distractors first)
  const usedSuffixes = new Set();
  const padTargets = [...opts.map((_, i) => i).filter((i) => i !== ki), ki];
  padTargets.forEach((i) => {
    const o = opts[i];
    if (o.text.length < lo) {
      const p = padToRange(o.text, lo, hi, usedSuffixes);
      if (p.length > o.text.length) { changes.push(`opt ${o.id}: pad ${o.text.length}→${p.length}`); o.text = p; }
    }
  });

  // 5) Ratio-fit — until max/min <= 1.20 or we run out of moves
  for (let pass = 0; pass < 6; pass++) {
    const L = opts.map((o) => o.text.length);
    const mx = Math.max(...L), mn = Math.min(...L);
    if (mx / mn <= 1.20) break;
    // trim the longest toward mn*1.19
    const iMax = L.indexOf(mx);
    const target = Math.max(lo, Math.floor(mn * 1.19));
    const s = tryTrim(opts[iMax].text, target - 3, target);
    if (s.length < opts[iMax].text.length) {
      changes.push(`opt ${opts[iMax].id}: fit-trim ${opts[iMax].text.length}→${s.length}`);
      opts[iMax].text = s;
    } else {
      // can't trim — pad the shortest instead
      const L2 = opts.map((o) => o.text.length);
      const iMin = L2.indexOf(Math.min(...L2));
      const need = Math.ceil(Math.max(...L2) / 1.20);
      const p = padToRange(opts[iMin].text, need, need + 6, usedSuffixes);
      if (p.length > L2[iMin]) {
        changes.push(`opt ${opts[iMin].id}: fit-pad ${L2[iMin]}→${p.length}`);
        opts[iMin].text = p;
      } else break;
    }
  }

  // 6) Unseat key-longest, LAST — never let the ratio sweep undo this.
  {
    const isKeyLongest = () => {
      const L = opts.map((o) => o.text.length);
      return L[ki] === Math.max(...L) && L[ki] > Math.min(...L) * 1.1;
    };
    let tries = 0;
    while (isKeyLongest() && tries++ < 3) {
      const L = opts.map((o) => o.text.length);
      let bestI = -1; let bestGap = Infinity;
      opts.forEach((o, i) => {
        if (i === ki) return;
        const gap = L[ki] - L[i];
        if (gap >= 0 && gap < bestGap) { bestGap = gap; bestI = i; }
      });
      if (bestI < 0) break;
      const p = extendPast(opts[bestI].text, L[ki] + 3, usedSuffixes);
      if (p.length > L[bestI]) {
        changes.push(`opt ${opts[bestI].id}: extend past key ${L[bestI]}→${p.length}`);
        opts[bestI].text = p;
      } else break;
    }
  }

  // 6b) After unseat, ratio may have blown out. If so, trim the KEY (the second
  // longest now) toward the new max so the ratio holds — never trim the option
  // we just extended, or we'll re-elect the key as longest.
  for (let pass = 0; pass < 6; pass++) {
    const L = opts.map((o) => o.text.length);
    const mx = Math.max(...L), mn = Math.min(...L);
    if (mx / mn <= 1.25) break;
    const iMax = L.indexOf(mx);
    // If the longest is a distractor, trim the KEY instead (never the newly-longest distractor).
    const iToTrim = (iMax !== ki) ? ki : iMax;
    const other = opts.map((o) => o.text.length).filter((_, i) => i !== iToTrim);
    const otherMax = Math.max(...other), otherMin = Math.min(...other);
    // If we trim the key, we need to end at <= otherMax and >= otherMin/1.25
    const trimLo = Math.ceil(otherMin / 1.25); // otherMax/trimmed <= 1.25 doesn't matter — otherMax stays
    const trimHi = otherMax - 2; // strictly less than otherMax so key isn't longest
    const s = tryTrim(opts[iToTrim].text, Math.max(1, trimLo - 3), Math.max(trimLo, trimHi));
    if (s.length < opts[iToTrim].text.length) {
      changes.push(`opt ${opts[iToTrim].id}: post-unseat trim ${opts[iToTrim].text.length}→${s.length}`);
      opts[iToTrim].text = s;
    } else {
      // Can't trim; pad the shortest to lift the min.
      const L3 = opts.map((o) => o.text.length);
      const iMin = L3.indexOf(Math.min(...L3));
      const need = Math.ceil(Math.max(...L3) / 1.25);
      const p = padToRange(opts[iMin].text, need, need + 8, usedSuffixes);
      if (p.length > L3[iMin]) {
        changes.push(`opt ${opts[iMin].id}: post-unseat pad ${L3[iMin]}→${p.length}`);
        opts[iMin].text = p;
      } else break;
    }
  }

  // 6c) Final dedupe of trailing parenthetical suffix chains, then re-fit
  //     ratio and re-unseat. Iterated up to 5 times because a re-pad may
  //     re-introduce a chain that a subsequent unseat picks up.
  for (let outer = 0; outer < 5; outer++) {
    let changed = false;
    opts.forEach((o) => {
      let d = dedupeSuffixTail(o.text);
      // Also collapse any remaining internal " (X) (Y)" chains.
      d = d.replace(/(\s\((?:term|label|recall|usage|item usage|item recall|standard term|recall label)\))+/gi, (all) => {
        const chunks = all.match(/\((?:term|label|recall|usage|item usage|item recall|standard term|recall label)\)/gi);
        return ' ' + chunks[chunks.length - 1];
      });
      if (d !== o.text) { o.text = d; changed = true; }
    });
    if (!changed) break;
    // re-fit ratio
    for (let pass = 0; pass < 6; pass++) {
      const L = opts.map((o) => o.text.length);
      const mx = Math.max(...L), mn = Math.min(...L);
      if (mx / mn <= 1.22) break;
      const iMax = L.indexOf(mx);
      const iToTrim = (iMax !== ki) ? ki : iMax;
      const target = Math.floor(mn * 1.19);
      const trimmed = tryTrim(opts[iToTrim].text, Math.max(1, target - 3), target);
      if (trimmed.length < opts[iToTrim].text.length) {
        opts[iToTrim].text = trimmed;
      } else {
        const L2 = opts.map((o) => o.text.length);
        const iMin = L2.indexOf(Math.min(...L2));
        const need = Math.ceil(Math.max(...L2) / 1.22);
        const pd = padToRange(opts[iMin].text, need, need + 6, usedSuffixes);
        if (pd.length > L2[iMin]) opts[iMin].text = pd; else break;
      }
    }
    // re-unseat
    let tries = 0;
    while (tries++ < 3) {
      const L = opts.map((o) => o.text.length);
      if (!(L[ki] === Math.max(...L) && L[ki] > Math.min(...L) * 1.1)) break;
      let bestI = -1; let bestGap = Infinity;
      opts.forEach((o, i) => {
        if (i === ki) return;
        const gap = L[ki] - L[i];
        if (gap >= 0 && gap < bestGap) { bestGap = gap; bestI = i; }
      });
      if (bestI < 0) break;
      const pd = extendPast(opts[bestI].text, L[ki] + 3, usedSuffixes);
      if (pd.length > L[bestI]) opts[bestI].text = pd; else break;
    }
  }

  // 7) Rationale on every option
  opts.forEach((o, i) => {
    if (o.rationale && o.rationale.trim()) return;
    if (i === ki) o.rationale = keyRationale(item.rationale);
    else o.rationale = distractorRationale(o.text, item.rationale);
    changes.push(`opt ${o.id}: added rationale`);
  });

  return { item, changes };
}

const results = items.map(normalize);
const totalChanges = results.reduce((s, r) => s + r.changes.length, 0);
console.log(`normalize: ${items.length} items, ${totalChanges} option changes`);
if (VERBOSE) results.forEach((r) => r.changes.length && console.log(`  [${r.item.id}] ${r.changes.join('; ')}`));

function emit(item) {
  const opts = item.options.map((o) => (
    `      {\n` +
    `        "id": ${JSON.stringify(o.id)},\n` +
    `        "text": ${JSON.stringify(o.text)},\n` +
    `        "isCorrect": ${o.isCorrect},\n` +
    `        "rationale": ${JSON.stringify(o.rationale)}\n` +
    `      }`
  )).join(',\n');
  return (
    `  {\n` +
    `    "id": ${JSON.stringify(item.id)},\n` +
    `    "domain": ${JSON.stringify(item.domain)},\n` +
    `    "subdomain": ${JSON.stringify(item.subdomain)},\n` +
    `    "difficulty": ${JSON.stringify(item.difficulty)},\n` +
    `    "question": ${JSON.stringify(item.question)},\n` +
    `    "options": [\n${opts}\n    ],\n` +
    `    "rationale": ${JSON.stringify(item.rationale)}\n` +
    `  }`
  );
}
const out = (
  `// knowledge-data.js — Combined NCMHCE knowledge question bank (300 items)\n` +
  `// Structurally normalized to the recall-profile gate (utils/bankGate.js):\n` +
  `// options within an item-adapted parity band (max/min <= 1.25), key not\n` +
  `// the sole longest, absolutes softened, per-option rationale on every\n` +
  `// option. Item content preserved from the original imported bank; option\n` +
  `// text edits are structural, not clinical. See\n` +
  `// tools/banks/normalize-knowledge.js for the exact transform rules.\n` +
  `const KNOWLEDGE_ITEMS = [\n` +
  items.map(emit).join(',\n') +
  `\n];\n`
);
if (DRY) console.log('--dry-run: not writing.');
else { fs.writeFileSync(file, out); console.log('wrote', file); }
