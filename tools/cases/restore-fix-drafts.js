#!/usr/bin/env node
// ============================================================================
// restore-fix-drafts.js — restore ncmhce-D190 from the repo source and apply
// weight-gradient + key-position fixes to both ncmhce-D190 and ncmhce-D191.
//
// ncmhce-D190: caseSim.questions was corrupted by a bad aggregation-expression
// $set and is no longer an array in the DB. This script rebuilds it from
// tools/cases/deep-cases-batch-18.js (verified against a pre-corruption DB
// snapshot) and applies the corrected weight map below.
//
// ncmhce-D191: DB weights already correct; rebuilt from the same source for a
// single code path, with the same weight map applied (result is identical to
// what is in the DB).
//
// Both cases have the key in slot A for all 13 questions; KEY_SLOTS redistributes
// the key across all four positions before writing.
//
// Usage:
//   node tools/cases/restore-fix-drafts.js            (dry run — validate and print, write nothing)
//   node tools/cases/restore-fix-drafts.js --apply    (perform the writes)
// ============================================================================

require('dotenv').config();
const mongoose = require('mongoose');
const ContentItem = require('../../models/ContentItem');
const { CASES } = require('./deep-cases-batch-18');
const { checkCaseQuality } = require('./qualityGate');

const APPLY = process.argv.includes('--apply');

const DISTRACTOR_WEIGHTS = {
  'ncmhce-D190': [
    [-1, 0, -2], [-1, 0, -2], [-1, 0, -2], [-1, -2, 0], [-2, -1, 0],
    [-1, 0, -2], [0, -1, -2], [-2, -1, 0], [-2, -1, 0], [-2, -1, 0],
    [-1, 0, -2], [-2, -1, 0], [-1, -2, 0],
  ],
  'ncmhce-D191': [
    [-1, 0, -2], [-1, 0, -2], [-1, 0, -2], [0, -1, -2], [-2, -1, 0],
    [0, -1, -2], [-1, -2, 0], [0, -1, -2], [-2, -1, 0], [0, -2, -1],
    [-1, 0, -2], [-2, -1, 0], [-1, -2, 0],
  ],
};

const KEY_SLOTS = {
  'ncmhce-D190': [2, 0, 3, 1, 2, 3, 0, 1, 3, 2, 0, 1, 2],
  'ncmhce-D191': [1, 3, 0, 2, 1, 0, 3, 2, 1, 3, 0, 2, 3],
};

// source order is [key, b, c, d]; move the key to slot s, distractors keep order
const permFor = (s) =>
  s === 0 ? [0, 1, 2, 3] : s === 1 ? [1, 0, 2, 3] : s === 2 ? [1, 2, 0, 3] : [1, 2, 3, 0];

function buildQuestions(id) {
  const src = CASES.find((c) => c.id === id);
  if (!src) throw new Error(`${id} not found in deep-cases-batch-18.js`);

  const dw = DISTRACTOR_WEIGHTS[id];
  const ks = KEY_SLOTS[id];

  if (src.questions.length !== 13) throw new Error(`${id}: expected 13 questions, got ${src.questions.length}`);

  return src.questions.map((q, qi) => {
    // deep-clone options so we never mutate the source
    const opts = q.options.map((o) => Object.assign({}, o));

    // Validate source assumption: option at index 0 is the key
    if (!opts[0].isCorrect) throw new Error(`${id} q${qi + 1}: source options[0] is not the key`);
    if (opts.length !== 4) throw new Error(`${id} q${qi + 1}: expected 4 options, got ${opts.length}`);

    // Apply corrected weights
    opts[0].weight = 3;
    opts[0].isCorrect = true;
    const [wb, wc, wd] = dw[qi];
    opts[1].weight = wb; opts[1].isCorrect = false;
    opts[2].weight = wc; opts[2].isCorrect = false;
    opts[3].weight = wd; opts[3].isCorrect = false;

    // Reorder: move the key to KEY_SLOTS position, distractors keep their order
    const perm = permFor(ks[qi]);
    const reordered = perm.map((i) => opts[i]);

    return Object.assign({}, q, { options: reordered });
  });
}

function validate(id, questions, srcQuestions) {
  const errors = [];
  const ks = KEY_SLOTS[id];

  if (questions.length !== 13) {
    errors.push(`length ${questions.length} !== 13`);
    return errors;
  }

  const slotCounts = [0, 0, 0, 0];
  questions.forEach((q, qi) => {
    const opts = q.options;
    const weightSet = opts.map((o) => o.weight).sort((a, b) => a - b).join(',');
    if (weightSet !== '-2,-1,0,3') errors.push(`q${qi + 1}: weights [${weightSet}] != {3,0,-1,-2}`);

    const correctOpts = opts.filter((o) => o.isCorrect);
    if (correctOpts.length !== 1) errors.push(`q${qi + 1}: ${correctOpts.length} correct options (expected 1)`);
    else if (correctOpts[0].weight !== 3) errors.push(`q${qi + 1}: correct option has weight ${correctOpts[0].weight}`);

    const keyIdx = opts.findIndex((o) => o.isCorrect);
    if (keyIdx !== ks[qi]) errors.push(`q${qi + 1}: key at index ${keyIdx}, expected ${ks[qi]}`);

    const ids = opts.map((o) => o.id).sort().join(',');
    if (ids !== 'a,b,c,d') errors.push(`q${qi + 1}: option ids [${ids}] != {a,b,c,d}`);

    // Text must be byte-identical to the source (any option, by id)
    const srcById = {};
    srcQuestions[qi].options.forEach((o) => { srcById[o.id] = o.text; });
    opts.forEach((o) => {
      if (o.text !== srcById[o.id]) errors.push(`q${qi + 1} opt ${o.id}: text changed`);
    });

    if (keyIdx >= 0 && keyIdx < 4) slotCounts[keyIdx]++;
  });

  // Per-case position checks
  const distinct = slotCounts.filter((n) => n > 0).length;
  if (distinct < 3) errors.push(`key uses only ${distinct} of 4 slots (expected ≥ 3)`);
  slotCounts.forEach((n, s) => {
    if (n > 7) errors.push(`key in slot ${'ABCD'[s]} for ${n}/13 questions (max 7)`);
  });

  return errors;
}

function printTable(id, questions, srcQuestions) {
  console.log(`\n${id}:`);
  console.log('  qi  src_weights          src_keySlot  →  new_weights          new_keySlot');
  questions.forEach((q, qi) => {
    const srcQ = srcQuestions[qi];
    const srcW = srcQ.options.map((o) => `${o.id}:${o.weight}`).join(' ');
    const srcKey = srcQ.options.findIndex((o) => o.isCorrect);
    const newW = q.options.map((o) => `${o.id}:${o.weight}`).join(' ');
    const newKey = q.options.findIndex((o) => o.isCorrect);
    console.log(`  q${String(qi + 1).padEnd(2)}  ${srcW.padEnd(20)} slot${srcKey}  →  ${newW.padEnd(20)} slot${newKey}`);
  });
  const slots = questions.map((q) => q.options.findIndex((o) => o.isCorrect));
  const counts = [0, 0, 0, 0];
  slots.forEach((s) => { if (s >= 0 && s < 4) counts[s]++; });
  console.log(`  Key distribution: A=${counts[0]} B=${counts[1]} C=${counts[2]} D=${counts[3]}`);
}

async function main() {
  if (!process.env.MONGO_URI) { console.error('MONGO_URI is not set.'); process.exit(1); }
  await mongoose.connect(process.env.MONGO_URI, { dbName: 'passreadyprep' });
  console.log('Connected to MongoDB\n');

  let anyError = false;
  const rebuilt = {};

  for (const id of ['ncmhce-D190', 'ncmhce-D191']) {
    const src = CASES.find((c) => c.id === id);
    let questions;
    try {
      questions = buildQuestions(id);
    } catch (e) {
      console.error(`${id}: build failed — ${e.message}`);
      anyError = true;
      continue;
    }

    const errors = validate(id, questions, src.questions);
    if (errors.length) {
      console.error(`${id}: validation FAILED:\n${errors.map((e) => '  ' + e).join('\n')}`);
      anyError = true;
      continue;
    }

    // Run through checkCaseQuality. Block only on weights and key-position errors;
    // the cases have pre-existing prose defects (length ratio, key-longest, absolutes)
    // that need prose rewrites and are explicitly out of scope here.
    const caseObj = Object.assign({}, src, { questions });
    const qr = checkCaseQuality(caseObj);
    const { classifyReason } = require('./qualityGate');
    const blocking = qr.errors.filter((e) => ['weights', 'key-position'].includes(classifyReason(e)));
    const warnings = qr.errors.filter((e) => !['weights', 'key-position'].includes(classifyReason(e)));
    if (blocking.length) {
      console.error(`${id}: checkCaseQuality FAILED (blocking):\n${blocking.map((e) => '  ' + e).join('\n')}`);
      anyError = true;
      continue;
    }

    printTable(id, questions, src.questions);
    if (warnings.length) {
      console.log(`  checkCaseQuality: OK (${warnings.length} pre-existing non-blocking issue(s) need prose rewrite):`);
      warnings.forEach((e) => console.log('    ' + e));
    } else {
      console.log(`  checkCaseQuality: OK`);
    }
    rebuilt[id] = questions;
  }

  if (anyError) {
    console.error('\nAborting — fix errors above before writing.');
    await mongoose.disconnect();
    process.exit(1);
  }

  if (!APPLY) {
    console.log('\nDry run — nothing written. Add --apply to perform the writes.');
    await mongoose.disconnect();
    return;
  }

  for (const id of Object.keys(rebuilt)) {
    const questions = rebuilt[id];
    const result = await ContentItem.updateOne(
      { externalId: id },
      { $set: { 'caseSim.questions': questions } }
    );
    if (result.matchedCount === 0) {
      console.error(`${id}: document not found in ContentItem`);
      await mongoose.disconnect();
      process.exit(1);
    }

    // Verify the write
    const doc = await ContentItem.findOne({ externalId: id }).select('caseSim.questions').lean();
    if (!Array.isArray(doc && doc.caseSim && doc.caseSim.questions)) {
      console.error(`${id}: post-write check FAILED — caseSim.questions is not an array`);
      await mongoose.disconnect();
      process.exit(1);
    }
    if (doc.caseSim.questions.length !== 13) {
      console.error(`${id}: post-write check FAILED — length ${doc.caseSim.questions.length} != 13`);
      await mongoose.disconnect();
      process.exit(1);
    }
    console.log(`${id}: written and verified (Array.isArray=true, length=13)`);
  }

  await mongoose.disconnect();
}

if (require.main === module) main().catch((e) => { console.error(e); process.exit(1); });
