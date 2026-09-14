#!/usr/bin/env node
// ============================================================================
// irr-check.js — Inter-Rater Reliability assessment for NCMHCE practice items.
//
// Sends each question to N independent AI calls WITHOUT showing the stored
// weights. Each call is asked to assign weights (+3/0/-1/-2) based solely on
// the Priority Ladder and scoring framework. Computes:
//
//   - % agreement with stored weights (all raters agree with stored = 100%)
//   - % perfect inter-rater agreement (all N raters agree with each other)
//   - Pairwise Cohen's Kappa across rater pairs
//   - KEY identification rate (% of calls that correctly identify the +3 option)
//   - Questions below Kappa threshold (default κ < 0.61 = "moderate" agreement)
//
// Interpretation:
//   κ ≥ 0.81  Almost perfect agreement — item is unambiguous
//   κ 0.61-0.80  Substantial agreement — acceptable
//   κ 0.41-0.60  Moderate agreement — flag for review
//   κ < 0.41  Fair/poor agreement — item is ambiguous, needs rewrite
//
// Usage:
//   node tools/cases/irr-check.js                         (20 random published cases)
//   node tools/cases/irr-check.js --count 50              (50 cases)
//   node tools/cases/irr-check.js --ids D101,D102         (specific cases)
//   node tools/cases/irr-check.js --raters 5              (5 independent calls per Q)
//   node tools/cases/irr-check.js --threshold 0.61        (flag below this Kappa)
//   node tools/cases/irr-check.js --out /tmp/irr.txt
//   node tools/cases/irr-check.js --delay 1500            (ms between calls)
//
// MONGO_URI / ANTHROPIC_API_KEY from env / .env
// ============================================================================

require('dotenv').config();
const mongoose = require('mongoose');
const fs = require('fs');
const Exam = require('../../models/Exam');
const ContentItem = require('../../models/ContentItem');
const { callAnthropic, extractJson, MODEL, resolveApiKey } = require('./anthropic');

// ── CLI flags ─────────────────────────────────────────────────────────────────
function flag(n, d) {
  const i = process.argv.indexOf('--' + n);
  return i >= 0 && process.argv[i + 1] && !process.argv[i + 1].startsWith('--')
    ? process.argv[i + 1] : d;
}
const COUNT     = parseInt(flag('count', '20'), 10);
const RATERS    = parseInt(flag('raters', '3'), 10);
const THRESHOLD = parseFloat(flag('threshold', '0.61'));
const DELAY     = parseInt(flag('delay', '1000'), 10);
const OUT       = flag('out', null);
const idi       = process.argv.indexOf('--ids');
const EXPLICIT  = idi >= 0 ? (process.argv[idi + 1] || '').split(',').map(s => s.trim()).filter(Boolean) : null;

const sleep = ms => new Promise(r => setTimeout(r, ms));

const VALID_WEIGHTS = new Set([3, 0, -1, -2]);

// ── Framework text (no weight labels — raters score blind) ───────────────────
const SCORING_FRAMEWORK = `
PRIORITY LADDER — evaluate every clinical decision against this hierarchy:
Rung 1: Imminent safety              — suicidality, homicidality, abuse, danger. Nothing else first.
Rung 2: Medical/substance rule-outs  — organic causes? substances? Rule out before diagnosing.
Rung 3: Stabilization                — acute symptom relief, grounding, crisis reduction.
Rung 4: Alliance and validation      — client must feel heard before any intervention.
Rung 5: Clarify the picture          — assessment, history, collateral info.
Rung 6: Evidence-based treatment     — right modality for the right diagnosis.
Rung 7: Ethics throughout            — confidentiality, mandated reporting, competence.

WEIGHT GRADIENT — assign exactly one of these to each option:
+3   The clinically correct action at this point. Advances safety, alliance, or accurate formulation.
0    Right domain but mistimed, incomplete, or secondary. Does not harm but does not advance optimally.
-1   Predictable novice mistake — sequencing error, criterion confusion, premature intervention.
-2   Genuinely harmful — risks client welfare, violates ethics, scope violation, criterion reversal.

ASSIGNMENT RULES:
- You must assign exactly one +3, one 0, one -1, and one -2 across the four options.
- Do not assign the same weight to two options.
- Base your assignment solely on clinical reasoning against the Priority Ladder above.
`.trim();

// ── Build blind-rating prompt (no stored weights shown) ───────────────────────
function buildIrrPrompt(caseItem, q, qIndex) {
  const cs = caseItem.caseSim || caseItem;
  const narrative = cs.narrative || {};
  const context = [
    narrative.intake ? `INTAKE: ${narrative.intake}` : '',
    narrative.session1 ? `SESSION 1: ${narrative.session1}` : '',
    narrative.session2 ? `SESSION 2: ${narrative.session2}` : '',
  ].filter(Boolean).join('\n');

  const dx = cs.diagnosis || cs.primaryDiagnosis || {};
  const dxLine = dx.name ? `Working diagnosis: ${dx.name}${dx.code ? ` (${dx.code})` : ''}` : '';

  const optLetters = 'ABCD';
  // Do NOT show stored weights
  const opts = (q.options || []).map((o, i) =>
    `${optLetters[i]}. ${o.text}`
  ).join('\n');

  return `You are an independent clinical examiner scoring an NCMHCE practice question.
Assign a weight to each option based on the scoring framework below.
Work independently — do not use any prior knowledge of how this item may be keyed.

${SCORING_FRAMEWORK}

CASE CONTEXT:
${context}
${dxLine}

QUESTION ${qIndex + 1}:
${q.question || q.stem || ''}

OPTIONS (assign weights independently):
${opts}

Return ONLY valid JSON — no prose, no markdown:
{"A": <weight>, "B": <weight>, "C": <weight>, "D": <weight>}

Each weight must be one of: 3, 0, -1, -2. Exactly one option gets each weight.`;
}

// ── Cohen's Kappa (pairwise, for 4 options × 4 weight categories) ─────────────
// Each question produces 4 (option, weight) pairs per rater.
// We compare rater1 vs rater2 across all 4 option slots.
function cohenKappa(assignments1, assignments2) {
  // assignments = {A: w, B: w, C: w, D: w}
  const keys = ['A', 'B', 'C', 'D'];
  const categories = [3, 0, -1, -2];
  const n = keys.length;

  // Observed agreement
  let agree = 0;
  keys.forEach(k => { if (assignments1[k] === assignments2[k]) agree++; });
  const Po = agree / n;

  // Expected agreement by chance
  // p(r1=c) * p(r2=c) for each category c
  let Pe = 0;
  categories.forEach(c => {
    const p1 = keys.filter(k => assignments1[k] === c).length / n;
    const p2 = keys.filter(k => assignments2[k] === c).length / n;
    Pe += p1 * p2;
  });

  if (Pe >= 1) return 1; // perfect expected agreement (degenerate)
  return (Po - Pe) / (1 - Pe);
}

// ── Parse and validate a rater response ──────────────────────────────────────
function parseRaterResponse(raw) {
  const j = extractJson(raw);
  const keys = ['A', 'B', 'C', 'D'];

  // Validate: must have all 4 keys, all valid weights, all distinct
  if (!keys.every(k => k in j)) return null;
  const weights = keys.map(k => j[k]);
  if (!weights.every(w => VALID_WEIGHTS.has(w))) return null;
  if (new Set(weights).size !== 4) return null; // not exactly one of each

  return j;
}

// ── Per-question IRR stats ────────────────────────────────────────────────────
function computeQuestionIrr(storedWeights, raterResults) {
  const valid = raterResults.filter(r => r !== null);
  if (valid.length < 2) return { kappa: null, error: 'too few valid rater responses' };

  const keys = ['A', 'B', 'C', 'D'];

  // KEY identification rate: % of raters who assigned +3 to the same option as stored
  const storedKeyOpt = keys.find(k => storedWeights[k] === 3);
  const keyAgreeCount = valid.filter(r => r && r[storedKeyOpt] === 3).length;
  const keyIdRate = valid.length ? keyAgreeCount / valid.length : 0;

  // Agreement with stored weights: % of (rater, option) pairs that match stored
  let storedMatchCount = 0;
  valid.forEach(r => {
    keys.forEach(k => { if (r[k] === storedWeights[k]) storedMatchCount++; });
  });
  const storedMatchRate = valid.length ? storedMatchCount / (valid.length * 4) : 0;

  // Perfect inter-rater agreement across all raters
  let perfectCount = 0;
  keys.forEach(k => {
    const ws = valid.map(r => r[k]);
    if (new Set(ws).size === 1) perfectCount++;
  });
  const perfectRate = perfectCount / 4;

  // Pairwise Cohen's Kappa
  const kappas = [];
  for (let i = 0; i < valid.length; i++) {
    for (let j = i + 1; j < valid.length; j++) {
      kappas.push(cohenKappa(valid[i], valid[j]));
    }
  }
  const kappa = kappas.length ? kappas.reduce((s, k) => s + k, 0) / kappas.length : null;

  return { kappa, keyIdRate, storedMatchRate, perfectRate, validRaters: valid.length };
}

// ── Output helpers ────────────────────────────────────────────────────────────
let outLines = [];
function emit(line = '') { outLines.push(line); process.stdout.write(line + '\n'); }

// ── Main ──────────────────────────────────────────────────────────────────────
async function main() {
  if (!process.env.MONGO_URI) { console.error('MONGO_URI not set.'); process.exit(1); }
  if (!resolveApiKey()) { console.error('ANTHROPIC_API_KEY / ANTHROPIC_API_KEY_CASE_TOOLS not set.'); process.exit(1); }

  await mongoose.connect(process.env.MONGO_URI, { dbName: 'passreadyprep' });
  emit(`Connected to MongoDB — model: ${MODEL}`);
  emit(`Raters: ${RATERS} independent calls per question`);
  emit(`Kappa threshold: ${THRESHOLD} (below = flagged)`);
  emit(`Delay: ${DELAY}ms between API calls\n`);

  const exam = await Exam.findOne({ key: 'ncmhce' });
  const filter = { format: 'case_sim', status: 'published' };
  if (exam) filter.examId = exam._id;
  if (EXPLICIT) filter.externalId = { $in: EXPLICIT };

  let docs = await ContentItem.find(filter).select('externalId caseSim').lean();
  if (!EXPLICIT) docs = docs.sort(() => Math.random() - 0.5).slice(0, COUNT);
  emit(`Loaded ${docs.length} case(s) for IRR assessment\n`);

  // Collect all questions across all cases for sampling
  const allQuestions = [];
  docs.forEach(doc => {
    const cs = doc.caseSim || doc;
    (cs.questions || []).forEach((q, qi) => {
      allQuestions.push({ doc, q, qi });
    });
  });

  emit(`Total questions: ${allQuestions.length}`);
  emit(`Total API calls: ${allQuestions.length * RATERS}\n`);

  // Bank-wide accumulators
  let totalQ = 0;
  let kappaSum = 0, kappaCount = 0;
  let keyIdSum = 0;
  let storedMatchSum = 0;
  const flaggedQuestions = [];
  const kappaByRung = {};

  for (const { doc, q, qi } of allQuestions) {
    const caseTag = doc.externalId || String(doc._id);
    const qTag = `${caseTag} Q${qi + 1}`;

    // Get stored weights
    const optLetters = 'ABCD';
    const storedWeights = {};
    (q.options || []).forEach((o, i) => {
      const letter = optLetters[i];
      storedWeights[letter] = o.weight != null ? o.weight : (o.isCorrect ? 3 : null);
    });

    // Check we have valid stored weights
    const storedVals = Object.values(storedWeights);
    if (!storedVals.every(w => VALID_WEIGHTS.has(w)) || new Set(storedVals).size !== 4) {
      emit(`  SKIP ${qTag} — stored weights not valid: ${JSON.stringify(storedWeights)}`);
      continue;
    }

    // Fire N independent rater calls
    const raterResults = [];
    for (let r = 0; r < RATERS; r++) {
      try {
        const prompt = buildIrrPrompt(doc, q, qi);
        const raw = await callAnthropic(prompt, { maxTokens: 200 });
        const parsed = parseRaterResponse(raw);
        raterResults.push(parsed);
        if (!parsed) emit(`    Rater ${r + 1}: invalid response — ${raw.slice(0, 80)}`);
        await sleep(DELAY);
      } catch (e) {
        emit(`    Rater ${r + 1} error: ${e.message}`);
        raterResults.push(null);
        await sleep(DELAY);
      }
    }

    const stats = computeQuestionIrr(storedWeights, raterResults);
    totalQ++;

    if (stats.kappa !== null) {
      kappaSum += stats.kappa;
      kappaCount++;
      keyIdSum += stats.keyIdRate;
      storedMatchSum += stats.storedMatchRate;

      const kappaStr = stats.kappa.toFixed(3);
      const flag = stats.kappa < THRESHOLD ? ' ← FLAG' : '';
      const keyStr = `key=${Math.round(stats.keyIdRate * 100)}%`;
      const storeStr = `store=${Math.round(stats.storedMatchRate * 100)}%`;
      emit(`  ${qTag}: κ=${kappaStr} ${keyStr} ${storeStr}${flag}`);

      if (stats.kappa < THRESHOLD) {
        // Show rater assignments for flagged questions
        const valid = raterResults.filter(r => r !== null);
        valid.forEach((r, i) => {
          const assign = optLetters.split('').map((k, idx) =>
            `${k}:${r[k] >= 0 ? '+' : ''}${r[k]}`
          ).join(' ');
          emit(`    rater ${i + 1}: ${assign}`);
        });
        const stored = optLetters.split('').map((k, idx) =>
          `${k}:${storedWeights[k] >= 0 ? '+' : ''}${storedWeights[k]}`
        ).join(' ');
        emit(`    stored: ${stored}`);

        flaggedQuestions.push({ qTag, kappa: stats.kappa, storedWeights, raterResults: valid });
      }
    } else {
      emit(`  ${qTag}: κ=N/A (${stats.error})`);
    }
  }

  // ── Summary ──────────────────────────────────────────────────────────────────
  emit('\n' + '═'.repeat(62));
  emit(`IRR SUMMARY — ${totalQ} question(s), ${RATERS} raters each`);
  emit('─'.repeat(62));

  const avgKappa = kappaCount ? kappaSum / kappaCount : null;
  const avgKeyId = totalQ ? keyIdSum / totalQ : null;
  const avgStoredMatch = totalQ ? storedMatchSum / totalQ : null;

  if (avgKappa !== null) {
    const interpretation =
      avgKappa >= 0.81 ? 'Almost perfect' :
      avgKappa >= 0.61 ? 'Substantial' :
      avgKappa >= 0.41 ? 'Moderate' :
      avgKappa >= 0.21 ? 'Fair' : 'Poor';
    emit(`Average pairwise κ:    ${avgKappa.toFixed(3)} (${interpretation})`);
  }
  if (avgKeyId !== null) emit(`KEY identification:    ${Math.round(avgKeyId * 100)}% of rater calls correctly identified +3`);
  if (avgStoredMatch !== null) emit(`Agreement with stored: ${Math.round(avgStoredMatch * 100)}% of (rater × option) pairs match stored weights`);
  emit(`\nQuestions below κ ${THRESHOLD}: ${flaggedQuestions.length}/${totalQ}`);

  if (flaggedQuestions.length > 0) {
    emit('\nFlagged items (ambiguous — consider rewrite):');
    flaggedQuestions.forEach(f => emit(`  ${f.qTag}: κ=${f.kappa.toFixed(3)}`));
  }

  if (OUT) {
    fs.writeFileSync(OUT, outLines.join('\n') + '\n');
    console.log(`\nReport written to ${OUT}`);
  }

  await mongoose.disconnect();
}

main().catch(e => { console.error(e); process.exit(1); });
