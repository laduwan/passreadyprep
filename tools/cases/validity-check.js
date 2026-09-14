#!/usr/bin/env node
// ============================================================================
// validity-check.js — AI-powered content validity assessment for live cases.
//
// Asks Claude to evaluate each question against the Priority Ladder and weight
// gradient. Reports:
//   - which rung each question tests
//   - whether the +3 option is genuinely the correct action for that rung
//   - whether each distractor tier is appropriate
//   - whether two options could be defended as +3 (two-defensible flag)
//   - whether a higher-priority rung should have been addressed first
//
// READ-ONLY by default. --flag writes validity findings to MongoDB.
//
// Usage:
//   node tools/cases/validity-check.js                    (published, all)
//   node tools/cases/validity-check.js --ids D101,D102    (specific cases)
//   node tools/cases/validity-check.js --count 10         (sample of N cases)
//   node tools/cases/validity-check.js --out /tmp/v.txt   (write report to file)
//   node tools/cases/validity-check.js --flag             (write findings to MongoDB)
//   node tools/cases/validity-check.js --all              (include sme_review/draft)
//   node tools/cases/validity-check.js --delay 1500       (ms between calls, default 1200)
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
const ALL    = process.argv.includes('--all');
const FLAG   = process.argv.includes('--flag');
const OUT    = flag('out', null);
const DELAY  = parseInt(flag('delay', '1200'), 10);
const COUNT  = flag('count', null);
const idi    = process.argv.indexOf('--ids');
const EXPLICIT = idi >= 0 ? (process.argv[idi + 1] || '').split(',').map(s => s.trim()).filter(Boolean) : null;

const sleep = ms => new Promise(r => setTimeout(r, ms));

// ── Priority Ladder + framework (single source of truth) ─────────────────────
const FRAMEWORK = `
PRIORITY LADDER — every clinical decision must be evaluated against this hierarchy:
Rung 1: Imminent safety              — suicidality, homicidality, abuse, danger. Nothing else happens first.
Rung 2: Medical/substance rule-outs  — organic causes? substances? Rule out before diagnosing.
Rung 3: Stabilization                — acute symptom relief, grounding, crisis reduction.
Rung 4: Alliance and validation      — client must feel heard before any intervention.
Rung 5: Clarify the picture          — assessment, history, collateral info.
Rung 6: Evidence-based treatment     — right modality for the right diagnosis.
Rung 7: Ethics throughout            — confidentiality, mandated reporting, competence.

WEIGHT GRADIENT — exactly one option per weight per question:
+3  KEY           Clinically correct action: advances safety, alliance, or accurate formulation at the right rung.
0   Near-miss     Right domain, wrong timing — appropriate at a different point in the case sequence.
-1  Common error  Predictable novice mistake — sequencing error, criterion confusion, premature intervention.
-2  Harmful error Genuine harm — risks client welfare, violates ethics, scope violation, criterion reversal.
`.trim();

// ── Build prompt for a single question ───────────────────────────────────────
function buildPrompt(caseItem, q, qIndex) {
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
  const opts = (q.options || []).map((o, i) => {
    const w = o.weight != null ? o.weight : (o.isCorrect ? 3 : '?');
    return `${optLetters[i]}. [weight ${w}] ${o.text}`;
  }).join('\n');

  return `You are a psychometric reviewer evaluating an NCMHCE practice question for content validity.

${FRAMEWORK}

CASE CONTEXT:
${context}
${dxLine}

QUESTION ${qIndex + 1}:
${q.question || q.stem || ''}

OPTIONS (stored weight assignments shown in brackets):
${opts}

Evaluate whether the weight assignments are clinically defensible against the Priority Ladder and return ONLY valid JSON — no prose, no markdown fences:
{
  "rungTested": <1-7, or null if the question doesn't clearly map to a single rung>,
  "rungLabel": "<brief rung description>",
  "keyValid": <true if the +3 option is genuinely the correct action for the highest-priority rung available>,
  "nearMissValid": <true if the 0 option is a genuine near-miss — right domain, wrong timing>,
  "noviceErrorValid": <true if the -1 option is a predictable novice mistake>,
  "harmfulErrorValid": <true if the -2 option represents genuine harm or an ethical/scope violation>,
  "twoDefensible": <true if any distractor could also be defended as +3>,
  "higherRungSkipped": <true if a higher-priority rung should be addressed before the rung this question tests>,
  "concerns": ["<specific concern if any — empty array if clean>"]
}`;
}

// ── Evaluate one question ─────────────────────────────────────────────────────
async function evalQuestion(caseItem, q, qIndex) {
  const prompt = buildPrompt(caseItem, q, qIndex);
  const raw = await callAnthropic(prompt, { maxTokens: 600 });
  return extractJson(raw);
}

// ── Output helpers ────────────────────────────────────────────────────────────
let outLines = [];
function emit(line = '') {
  outLines.push(line);
  process.stdout.write(line + '\n');
}

// ── Main ──────────────────────────────────────────────────────────────────────
async function main() {
  if (!process.env.MONGO_URI) { console.error('MONGO_URI not set.'); process.exit(1); }
  if (!resolveApiKey()) { console.error('ANTHROPIC_API_KEY / ANTHROPIC_API_KEY_CASE_TOOLS not set.'); process.exit(1); }

  await mongoose.connect(process.env.MONGO_URI, { dbName: 'passreadyprep' });
  emit(`Connected to MongoDB — model: ${MODEL}`);
  emit(`Mode: ${FLAG ? 'WRITE (--flag)' : 'read-only'}  |  delay: ${DELAY}ms between questions\n`);

  const exam = await Exam.findOne({ key: 'ncmhce' });
  const filter = { format: 'case_sim' };
  if (exam) filter.examId = exam._id;
  if (EXPLICIT) filter.externalId = { $in: EXPLICIT };
  else if (!ALL) filter.status = 'published';

  let docs = await ContentItem.find(filter).select('externalId status caseSim').lean();
  if (COUNT && !EXPLICIT) {
    const n = parseInt(COUNT, 10);
    // Shuffle and take n
    docs = docs.sort(() => Math.random() - 0.5).slice(0, n);
  }
  emit(`Loaded ${docs.length} case(s)\n`);

  // Bank-wide stats
  let totalQ = 0, totalValid = 0;
  let twoDefensibleCount = 0, higherRungSkippedCount = 0;
  const rungDist = {};
  const caseResults = [];

  for (const doc of docs) {
    const cs = doc.caseSim || doc;
    const questions = cs.questions || [];
    const caseTag = doc.externalId || doc._id;
    emit(`── ${caseTag} (${questions.length} questions)`);

    const qResults = [];
    for (let qi = 0; qi < questions.length; qi++) {
      const q = questions[qi];
      try {
        const result = await evalQuestion(doc, q, qi);
        totalQ++;

        const clean = result.keyValid && result.nearMissValid &&
                      result.noviceErrorValid && result.harmfulErrorValid &&
                      !result.twoDefensible && !result.higherRungSkipped &&
                      (result.concerns || []).length === 0;
        if (clean) totalValid++;
        if (result.twoDefensible) twoDefensibleCount++;
        if (result.higherRungSkipped) higherRungSkippedCount++;
        if (result.rungTested) rungDist[result.rungTested] = (rungDist[result.rungTested] || 0) + 1;

        const status = clean ? '✓' : '✗';
        const issues = [];
        if (!result.keyValid) issues.push('KEY not valid');
        if (!result.nearMissValid) issues.push('near-miss invalid');
        if (!result.noviceErrorValid) issues.push('novice error invalid');
        if (!result.harmfulErrorValid) issues.push('harmful error invalid');
        if (result.twoDefensible) issues.push('TWO DEFENSIBLE');
        if (result.higherRungSkipped) issues.push('higher rung skipped');
        (result.concerns || []).forEach(c => issues.push(c));

        const rungStr = result.rungTested ? `Rung ${result.rungTested}` : 'rung?';
        emit(`   ${status} Q${qi + 1} [${rungStr}]${issues.length ? ' — ' + issues.join(' · ') : ''}`);

        qResults.push({ qi, result, clean });
        await sleep(DELAY);
      } catch (e) {
        emit(`   ? Q${qi + 1} — eval error: ${e.message}`);
        totalQ++;
        qResults.push({ qi, result: null, clean: false, error: e.message });
        await sleep(DELAY);
      }
    }

    caseResults.push({ id: caseTag, qResults });

    // Write to MongoDB if --flag
    if (FLAG) {
      const failingQs = qResults.filter(r => !r.clean);
      if (failingQs.length > 0) {
        const note = `Validity check (${new Date().toISOString().slice(0, 10)}): ${failingQs.length}/${questions.length} questions flagged.`;
        const concerns = failingQs.flatMap(r => {
          const issues = [];
          if (r.result && !r.result.keyValid) issues.push(`Q${r.qi + 1}: KEY not valid`);
          if (r.result && r.result.twoDefensible) issues.push(`Q${r.qi + 1}: two defensible options`);
          if (r.result && r.result.higherRungSkipped) issues.push(`Q${r.qi + 1}: higher rung skipped`);
          return issues;
        }).slice(0, 5).join('; ');
        await ContentItem.findByIdAndUpdate(doc._id, {
          $set: { needsWork: true, reviewNote: note + (concerns ? ' ' + concerns : '') }
        });
      }
    }

    emit('');
  }

  // ── Summary ──────────────────────────────────────────────────────────────────
  emit('═'.repeat(62));
  emit(`VALIDITY CHECK SUMMARY — ${docs.length} case(s), ${totalQ} question(s)`);
  emit('─'.repeat(62));
  emit(`Valid questions:          ${totalValid}/${totalQ} (${totalQ ? Math.round(totalValid/totalQ*100) : 0}%)`);
  emit(`Two defensible options:   ${twoDefensibleCount} question(s)`);
  emit(`Higher rung skipped:      ${higherRungSkippedCount} question(s)`);

  emit('\nRung distribution:');
  const RUNG_LABELS = {
    1: 'Imminent safety', 2: 'Medical/substance', 3: 'Stabilization',
    4: 'Alliance/validation', 5: 'Clarify picture', 6: 'Treatment', 7: 'Ethics',
  };
  Object.entries(rungDist).sort((a, b) => Number(a[0]) - Number(b[0])).forEach(([r, n]) => {
    emit(`  Rung ${r} (${RUNG_LABELS[r] || '?'}): ${n} questions`);
  });

  if (OUT) {
    fs.writeFileSync(OUT, outLines.join('\n') + '\n');
    console.log(`\nReport written to ${OUT}`);
  }

  await mongoose.disconnect();
}

main().catch(e => { console.error(e); process.exit(1); });
