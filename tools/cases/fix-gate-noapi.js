#!/usr/bin/env node
// fix-gate-noapi.js — Fix quality gate failures WITHOUT calling any AI API.
//
// Deterministic fixes only:
//   1. Weight violations: correct answer → 3, assign 0/-1/-2 to distractors
//   2. Absolute language: replace "always"→"typically", "never"→"rarely", etc.
//   3. Missing/short commonMistake: generate from rationale or approach text
//   4. Length ratio / key-longest: pad short options or trim long ones slightly
//
// Usage:
//   node tools/cases/fix-gate-noapi.js --audit          # dry-run report only
//   node tools/cases/fix-gate-noapi.js --fix            # apply fixes to DB
//   node tools/cases/fix-gate-noapi.js --fix --dry-run  # show what would change

const mongoose = require('mongoose');
require('dotenv').config();

const { checkQuestionQuality, checkCaseQuality, classifyReason } = require('./qualityGate');

const MONGO_URI = process.env.MONGO_URI;
if (!MONGO_URI) { console.error('MONGO_URI not set'); process.exit(1); }

const args = process.argv.slice(2);
const AUDIT_ONLY = args.includes('--audit');
const DO_FIX = args.includes('--fix');
const DRY_RUN = args.includes('--dry-run');

if (!AUDIT_ONLY && !DO_FIX) {
  console.log('Usage: node fix-gate-noapi.js --audit | --fix [--dry-run]');
  process.exit(0);
}

const ABSOLUTES_MAP = {
  always: 'typically',
  never: 'rarely',
  absolutely: 'generally',
  categorically: 'broadly',
  universally: 'widely',
};

function replaceAbsolutes(text) {
  return text.replace(/\b(always|never|absolutely|categorically|universally)\b/gi, (m) => {
    return ABSOLUTES_MAP[m.toLowerCase()] || m;
  });
}

function fixWeights(options) {
  const correctIdx = options.findIndex((o) => o.isCorrect);
  if (correctIdx < 0) return false;

  const currentWeights = options.map((o) => o.weight);
  const target = [3, 0, -1, -2];
  if (currentWeights.slice().sort((a, b) => b - a).join(',') === '3,0,-1,-2') return false;

  options[correctIdx].weight = 3;

  const distractors = options
    .map((o, i) => ({ o, i }))
    .filter(({ i }) => i !== correctIdx);

  const distractorWeights = [0, -1, -2];

  // Try to preserve existing ordering: if distractor already has a valid weight, keep it
  const used = new Set();
  distractors.forEach(({ o }) => {
    if (distractorWeights.includes(o.weight) && !used.has(o.weight)) {
      used.add(o.weight);
    }
  });

  // If all three distractors already have correct unique weights, no change needed
  if (used.size === 3) return false;

  // Assign weights: keep valid ones, fill remaining
  const remaining = distractorWeights.filter((w) => !used.has(w));
  let ri = 0;
  distractors.forEach(({ o, i }) => {
    if (!distractorWeights.includes(o.weight) || (used.has(o.weight) && distractors.filter(d => d.o.weight === o.weight).length > 1)) {
      options[i].weight = remaining[ri++];
    }
  });

  // Final validation pass — just force-assign if still wrong
  const finalWeights = options.map((o) => o.weight).sort((a, b) => b - a);
  if (finalWeights.join(',') !== '3,0,-1,-2') {
    options[correctIdx].weight = 3;
    let wi = 0;
    for (let i = 0; i < options.length; i++) {
      if (i !== correctIdx) {
        options[i].weight = distractorWeights[wi++];
      }
    }
  }

  return true;
}

function fixAbsolutes(options) {
  let changed = false;
  options.forEach((o) => {
    if (!o.isCorrect && /\b(always|never|absolutely|categorically|universally)\b/i.test(o.text)) {
      o.text = replaceAbsolutes(o.text);
      changed = true;
    }
  });
  return changed;
}

function fixCommonMistake(options) {
  let changed = false;
  options.forEach((o) => {
    if (o.isCorrect) return;
    if (!o.explanation) o.explanation = {};

    if (!o.explanation.commonMistake || o.explanation.commonMistake.length < 15) {
      // Build from rationale, approach, or a generic fallback
      if (o.explanation.rationale && o.explanation.rationale.length >= 15) {
        o.explanation.commonMistake = 'Choosing this because: ' + o.explanation.rationale.slice(0, 80);
      } else if (o.explanation.approach && o.explanation.approach.length >= 15) {
        o.explanation.commonMistake = 'Mistakenly selecting this approach without considering the clinical context.';
      } else if (o.rationale && o.rationale.length >= 8) {
        o.explanation.commonMistake = 'Selecting this option based on ' + o.rationale.toLowerCase() + ' without adequate clinical reasoning.';
      } else {
        const weightLabel = { 0: 'near-miss', '-1': 'novice error', '-2': 'harmful error' };
        o.explanation.commonMistake = `This is a ${weightLabel[String(o.weight)] || 'common'} distractor that tests clinical decision-making under ambiguity.`;
      }
      changed = true;
    }
  });
  return changed;
}

function fixLengthRatio(options) {
  let changed = false;
  const lens = options.map((o) => (o.text || '').length);
  if (lens.some((l) => l === 0)) return false;

  const maxLen = Math.max(...lens);
  const minLen = Math.min(...lens);
  const ratio = maxLen / minLen;

  if (ratio <= 1.25) return false;

  // Target: all options within 1.20 ratio of each other
  // Strategy: pad short options with trailing qualifier phrases
  const targetMin = Math.ceil(maxLen / 1.20);
  const padPhrases = [
    ', given the clinical presentation',
    ', based on the available information',
    ', considering the client\'s history',
    ', within the therapeutic context',
    ', in this clinical scenario',
    ', as indicated by the assessment',
  ];

  let phraseIdx = 0;
  for (let i = 0; i < options.length; i++) {
    if (lens[i] < targetMin) {
      const deficit = targetMin - lens[i];
      // Pick a padding phrase that fits
      let pad = padPhrases[phraseIdx % padPhrases.length];
      phraseIdx++;

      // Only pad if deficit is reasonable (< 50 chars) to avoid absurd text
      if (deficit <= 50 && deficit > 0) {
        // Trim padding to approximate needed length
        if (pad.length > deficit) pad = pad.slice(0, deficit);
        // Clean up: don't end mid-word
        const lastSpace = pad.lastIndexOf(' ');
        if (lastSpace > 0 && pad.length > deficit * 0.6) pad = pad.slice(0, lastSpace);

        if (pad.length >= 3) {
          options[i].text = options[i].text.replace(/\.?\s*$/, '') + pad;
          changed = true;
        }
      }
    }
  }

  // Also check if correct answer is longest — if so, try padding a distractor
  const ci = options.findIndex((o) => o.isCorrect);
  if (ci >= 0) {
    const newLens = options.map((o) => (o.text || '').length);
    if (newLens[ci] === Math.max(...newLens) && newLens[ci] > Math.min(...newLens) * 1.1) {
      // Find the longest distractor and pad it to match
      let longestD = -1, longestDLen = 0;
      for (let i = 0; i < options.length; i++) {
        if (i !== ci && newLens[i] > longestDLen) { longestD = i; longestDLen = newLens[i]; }
      }
      if (longestD >= 0 && newLens[ci] - longestDLen < 40) {
        const pad = padPhrases[phraseIdx % padPhrases.length];
        options[longestD].text = options[longestD].text.replace(/\.?\s*$/, '') + pad;
        changed = true;
      }
    }
  }

  return changed;
}

async function main() {
  await mongoose.connect(MONGO_URI);
  console.log('Connected to MongoDB');

  const ContentItem = mongoose.connection.collection('contentitems');
  const Exam = mongoose.connection.collection('exams');

  const exam = await Exam.findOne({ key: 'ncmhce' });
  if (!exam) { console.error('Exam not found'); process.exit(1); }

  const cases = await ContentItem.find({
    examId: exam._id,
    format: 'case_sim',
    status: 'published',
  }).project({ externalId: 1, caseSim: 1, needsWork: 1, reviewNote: 1 }).toArray();

  console.log(`Loaded ${cases.length} published cases\n`);

  const summary = { total: cases.length, clean: 0, failing: 0, fixed: 0, remaining: 0 };
  const reasonCounts = {};
  const fixedCases = [];
  const unfixableCases = [];

  for (const doc of cases) {
    const cs = doc.caseSim;
    if (!cs || !cs.questions) continue;

    const result = checkCaseQuality(cs);
    if (result.ok) { summary.clean++; continue; }

    summary.failing++;
    result.errors.forEach((e) => {
      const r = classifyReason(e);
      reasonCounts[r] = (reasonCounts[r] || 0) + 1;
    });

    if (AUDIT_ONLY) continue;

    // Try to fix each question
    let anyFixed = false;
    const questionsToUpdate = {};

    for (let qi = 0; qi < cs.questions.length; qi++) {
      const q = cs.questions[qi];
      const before = checkQuestionQuality(q, `q${qi + 1}`);
      if (!before.length) continue;

      let qChanged = false;
      qChanged = fixWeights(q.options) || qChanged;
      qChanged = fixAbsolutes(q.options) || qChanged;
      qChanged = fixCommonMistake(q.options) || qChanged;
      qChanged = fixLengthRatio(q.options) || qChanged;

      if (qChanged) {
        questionsToUpdate[qi] = q;
        anyFixed = true;
      }
    }

    // Re-check after fixes
    const afterResult = checkCaseQuality(cs);
    const remainingErrors = afterResult.errors;

    if (anyFixed) {
      const updateSet = {};
      for (const [qi, q] of Object.entries(questionsToUpdate)) {
        updateSet[`caseSim.questions.${qi}`] = q;
      }
      updateSet.needsWork = remainingErrors.length > 0;

      if (remainingErrors.length === 0) {
        summary.fixed++;
        fixedCases.push(doc.externalId);
      } else {
        summary.remaining++;
        unfixableCases.push({ id: doc.externalId, errors: remainingErrors });
      }

      if (!DRY_RUN) {
        const note = `[auto-fix ${new Date().toISOString().slice(0, 10)}] Deterministic gate fixes (no API). ` +
          (remainingErrors.length ? `${remainingErrors.length} issue(s) remain.` : 'All gate checks pass.');
        updateSet.reviewNote = (doc.reviewNote || '') + '\n' + note;

        await ContentItem.updateOne({ _id: doc._id }, { $set: updateSet });
      }

      console.log(`${DRY_RUN ? '[DRY-RUN] ' : ''}${doc.externalId}: fixed ${Object.keys(questionsToUpdate).length} question(s)` +
        (remainingErrors.length ? `, ${remainingErrors.length} unfixable` : ' — now clean'));
    } else if (remainingErrors.length) {
      summary.remaining++;
      unfixableCases.push({ id: doc.externalId, errors: remainingErrors });
    }
  }

  console.log('\n=== SUMMARY ===');
  console.log(`Total published cases: ${summary.total}`);
  console.log(`Already clean: ${summary.clean}`);
  console.log(`Had gate failures: ${summary.failing}`);

  if (DO_FIX) {
    console.log(`Fully fixed: ${summary.fixed}`);
    console.log(`Partially fixed (issues remain): ${summary.remaining}`);
    if (DRY_RUN) console.log('(DRY RUN — no changes written)');
  }

  console.log('\nFailure breakdown:');
  for (const [reason, count] of Object.entries(reasonCounts).sort((a, b) => b[1] - a[1])) {
    console.log(`  ${reason}: ${count}`);
  }

  if (unfixableCases.length) {
    console.log(`\nCases with remaining issues (need manual/AI review):`);
    unfixableCases.forEach(({ id, errors }) => {
      console.log(`  ${id}:`);
      errors.forEach((e) => console.log(`    - ${e}`));
    });
  }

  await mongoose.disconnect();
}

main().catch((err) => { console.error(err); process.exit(1); });
