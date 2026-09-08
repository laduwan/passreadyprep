#!/usr/bin/env node
// ============================================================================
// fix-distractors.js — AI-assisted repair of LIVE questions that fail
// qualityGate.js (structural parity, absolute language, thin novice-trap
// mistakes). Only rewrites the 3 non-correct options (weight 0/-1/-2) of a
// question; the keyed answer (weight 3) is never touched.
//
// This is a targeted "distractor rewrite" pass, not a case regenerator — it
// leaves the narrative, diagnosis, references, and the correct answer alone,
// and only asks the model to fix what the gate actually flagged.
//
// Only questions with a fixable *quality* issue are repaired. A question with
// a *structural* problem (wrong weight set, isCorrect not on the weight-3
// option, an empty option) is skipped and left for a human — the correct
// answer can't be inferred from broken data.
//
// Three-stage safety: DEFAULT is a free, read-only plan (no API calls). Add
// --generate to call the API and show proposed rewrites (still no DB write).
// Add --apply to write. Each accepted rewrite must re-pass qualityGate.js AND
// introduce no new caseSchema.js error. Writes touch only the repaired
// questions' paths (never the whole caseSim), and a repaired case is set back
// to sme_review for a human re-check before it goes live again. needsWork is
// cleared only when the whole case passes the gate afterward.
//
//   node tools/cases/fix-distractors.js                      (published only, plan)
//   node tools/cases/fix-distractors.js --all                 (include sme_review/draft)
//   node tools/cases/fix-distractors.js --generate            (show rewrites)
//   node tools/cases/fix-distractors.js --generate --count 10 (more per run)
//   node tools/cases/fix-distractors.js --ids D012,D045 --generate
//   node tools/cases/fix-distractors.js --apply                (write + re-review)
// MONGO_URI / ANTHROPIC_API_KEY from env / .env, same as generate-deep.js.
// ============================================================================

require('dotenv').config();
const mongoose = require('mongoose');
const Exam = require('../../models/Exam');
const ContentItem = require('../../models/ContentItem');
const { validateCase } = require('./caseSchema');
const { checkQuestionQuality, checkCaseQuality, ITEM_CONSTRUCTION_RULES, STRUCTURAL_PARITY_CHECK } = require('./qualityGate');
const { callAnthropic, extractJson } = require('./anthropic');

function flag(n, d) { const i = process.argv.indexOf('--' + n); return i >= 0 && process.argv[i + 1] && !process.argv[i + 1].startsWith('--') ? process.argv[i + 1] : d; }
const COUNT = parseInt(flag('count', '5'), 10);
const ALL = process.argv.includes('--all');
const GENERATE = process.argv.includes('--generate') || process.argv.includes('--apply');
const APPLY = process.argv.includes('--apply');
const idi = process.argv.indexOf('--ids');
const EXPLICIT = idi >= 0 ? (process.argv[idi + 1] || '').split(',').map((s) => s.trim()).filter(Boolean) : null;

const AUTO_NOTE_PREFIX = 'Auto-repair:';

// A question is safe to rewrite only when its scoring is unambiguous: exactly
// {3,0,-1,-2}, exactly one isCorrect, and that one IS the weight-3 option.
// Anything else is a data-integrity problem, not a wording problem.
function isRewriteSafe(q) {
  const opts = (q && q.options) || [];
  if (opts.length !== 4) return false;
  const weights = opts.map((o) => o && o.weight).sort((a, b) => b - a);
  if (weights.join(',') !== '3,0,-1,-2') return false;
  const correct = opts.filter((o) => o && o.isCorrect === true);
  if (correct.length !== 1 || correct[0].weight !== 3) return false;
  return opts.every((o) => o && typeof o.text === 'string' && o.text.trim().length > 0);
}

function buildRepairPrompt(caseTitle, question, correct, distractors, reasons) {
  const distractorBlock = distractors.map((o) =>
    `  weight ${o.weight} (id "${o.id}"): "${o.text}"\n    current commonMistake: "${(o.explanation && o.explanation.commonMistake) || ''}"`
  ).join('\n');

  return `You are an expert psychometrician and NCMHCE item writer, doing a targeted repair pass on ONE existing question. Do not change the clinical scenario, the diagnosis, or the correct answer — only rewrite the 3 incorrect options so the item passes the construction rules below.

CASE: "${caseTitle}"
QUESTION: "${question.question}"

CORRECT ANSWER (weight 3, id "${correct.id}", ${correct.text.length} chars — do not change): "${correct.text}"

CURRENT DISTRACTORS (weight 0 = near-miss, -1 = common novice error, -2 = harmful error):
${distractorBlock}

WHY THIS ITEM WAS FLAGGED:
${reasons.map((r) => '  - ' + r).join('\n')}

${ITEM_CONSTRUCTION_RULES}

${STRUCTURAL_PARITY_CHECK}

Rewrite the 3 distractors (weight 0, -1, -2) to fix the flagged problems while keeping each one's assigned weight and clinical intent. Because the correct answer is fixed at ${correct.text.length} chars, every distractor must land close to that length (all four within a 1.25 max/min ratio) and at least one distractor must be as long as or longer than the correct answer. Return ONE JSON object only (no markdown, no prose), shaped exactly like this:
{
  "options": [
    { "id": "<same id as the weight-0 distractor above>", "weight": 0, "text": "...", "rationale": "one-line label (8+ chars)",
      "explanation": { "approach": "8+ chars", "rationale": "full sentence", "keyIndicators": ["...", "..."], "commonMistake": "20+ chars naming the exact reasoning flaw" } },
    { "id": "<same id as the weight--1 distractor above>", "weight": -1, "text": "...", "rationale": "...", "explanation": { "approach": "...", "rationale": "...", "keyIndicators": ["..."], "commonMistake": "..." } },
    { "id": "<same id as the weight--2 distractor above>", "weight": -2, "text": "...", "rationale": "...", "explanation": { "approach": "...", "rationale": "...", "keyIndicators": ["..."], "commonMistake": "..." } }
  ]
}
Output ONLY the JSON object.`;
}

// Merge a model reply into a copy of the question, replacing only text /
// rationale / explanation on the non-correct options, matched by weight.
function mergeRewrite(question, rewritten) {
  const byWeight = {};
  (rewritten.options || []).forEach((o) => { byWeight[o.weight] = o; });
  const options = question.options.map((o) => {
    if (o.isCorrect) return o;
    const r = byWeight[o.weight];
    if (!r) return o;
    return Object.assign({}, o, { text: r.text, rationale: r.rationale, explanation: r.explanation });
  });
  return Object.assign({}, question, { options });
}

// Errors validateCase reports on the case WITH the candidate question that it
// did not report before — i.e. regressions the rewrite itself introduced.
// Pre-existing, unrelated schema errors do not block a good distractor fix.
function newSchemaErrors(caseObj, qi, candidate) {
  const before = new Set(validateCase(caseObj).errors);
  const questions = caseObj.questions.slice();
  questions[qi] = candidate;
  return validateCase(Object.assign({}, caseObj, { questions })).errors.filter((e) => !before.has(e));
}

// Keep any human-written review note; replace only our own earlier auto line.
function composeNote(existing, autoLine) {
  const kept = String(existing || '').split('\n').filter((l) => l.trim() && !l.startsWith(AUTO_NOTE_PREFIX));
  return kept.concat(autoLine).join('\n');
}

async function main() {
  if (!process.env.MONGO_URI) { console.error('MONGO_URI is not set. Add it to your .env first.'); process.exit(1); }
  await mongoose.connect(process.env.MONGO_URI, { dbName: 'passreadyprep' });
  console.log('Connected to MongoDB (db: passreadyprep)\n');

  const exam = await Exam.findOne({ key: 'ncmhce' });
  const filter = { format: 'case_sim' };
  if (exam) filter.examId = exam._id;
  if (EXPLICIT) filter.externalId = { $in: EXPLICIT };
  else if (!ALL) filter.status = 'published';

  const docs = await ContentItem.find(filter).select('externalId status reviewNote caseSim').lean();
  console.log('Loaded ' + docs.length + ' case(s) (' + (EXPLICIT ? 'explicit ids' : ALL ? 'all statuses' : 'published only') + ')');

  // Collect every failing, rewrite-safe question across all cases. One shared
  // case object per doc so multiple repairs to the same case accumulate.
  const targets = [];
  const skipped = [];
  const cases = {};
  docs.forEach((d) => {
    const c = Object.assign({}, d.caseSim || {});
    c.id = c.id || d.externalId;
    c.questions = (c.questions || []).slice();
    cases[d.externalId] = { _id: d._id, status: d.status, reviewNote: d.reviewNote, caseObj: c, repairedQis: [] };
    c.questions.forEach((q, qi) => {
      const reasons = checkQuestionQuality(q, `q${qi + 1}`);
      if (!reasons.length) return;
      if (!isRewriteSafe(q)) { skipped.push({ id: d.externalId, qi, reasons }); return; }
      targets.push({ docId: d.externalId, status: d.status, qi, reasons });
    });
  });

  console.log(targets.length + ' rewrite-safe question(s) flagged, ' + skipped.length + ' skipped (need manual review: broken weight/isCorrect set or empty option).\n');
  skipped.forEach((s) => console.log('  SKIP ' + s.id + ' q' + (s.qi + 1) + ': ' + s.reasons.join(' | ')));
  if (skipped.length) console.log('');

  if (!GENERATE) {
    console.log(targets.length + ' candidate(s) for repair:');
    targets.forEach((t) => console.log('  ' + t.docId + ' q' + (t.qi + 1) + ' [' + t.status + ']: ' + t.reasons.join(' | ')));
    console.log('\nPlan only — no API calls made. Re-run with --generate to see proposed rewrites, or --apply to write them.');
    await mongoose.disconnect();
    return;
  }
  if (!process.env.ANTHROPIC_API_KEY) { console.error('\nANTHROPIC_API_KEY not set.'); process.exit(1); }

  const batch = targets.slice(0, COUNT);
  console.log('Repairing ' + batch.length + ' of ' + targets.length + ' flagged question(s) (--count ' + COUNT + ')...\n');

  let fixed = 0;
  for (const t of batch) {
    const entry = cases[t.docId];
    const question = entry.caseObj.questions[t.qi];
    const correct = question.options.find((o) => o.isCorrect);
    const distractors = question.options.filter((o) => !o.isCorrect);
    console.log('  ' + t.docId + ' q' + (t.qi + 1) + '...');
    try {
      const rewritten = extractJson(await callAnthropic(buildRepairPrompt(entry.caseObj.title, question, correct, distractors, t.reasons)));
      const candidate = mergeRewrite(question, rewritten);

      const stillFailing = checkQuestionQuality(candidate, `q${t.qi + 1}`);
      if (stillFailing.length) { console.log('    STILL FAILS after rewrite: ' + stillFailing.join(' | ') + ' — left unchanged'); continue; }
      const regressions = newSchemaErrors(entry.caseObj, t.qi, candidate);
      if (regressions.length) { console.log('    REWRITE BREAKS SCHEMA: ' + regressions.slice(0, 3).join(' | ') + ' — left unchanged'); continue; }

      console.log('    OK — rewrote ' + distractors.length + ' distractor(s)');
      candidate.options.forEach((o) => { if (!o.isCorrect) console.log('      [' + o.weight + '] ' + o.text); });

      entry.caseObj.questions[t.qi] = candidate;
      entry.repairedQis.push(t.qi);
      fixed += 1;
    } catch (e) {
      console.log('    ERROR: ' + e.message.slice(0, 150));
    }
  }

  const touched = Object.entries(cases).filter(([, e]) => e.repairedQis.length);
  console.log('\n' + fixed + ' question(s) repaired across ' + touched.length + ' case(s).');

  if (!APPLY) {
    console.log('Dry run — nothing written. Re-run with --apply to save these and send the case(s) back to sme_review.');
    await mongoose.disconnect();
    return;
  }

  let saved = 0;
  for (const [externalId, entry] of touched) {
    const remaining = checkCaseQuality(entry.caseObj).errors;
    const qList = entry.repairedQis.map((qi) => 'q' + (qi + 1)).join(', ');
    const autoLine = remaining.length
      ? `${AUTO_NOTE_PREFIX} rewrote distractors on ${qList}; ${remaining.length} gate issue(s) remain — needs manual review.`
      : `${AUTO_NOTE_PREFIX} rewrote distractors on ${qList}; case now passes the quality gate — please re-review before publishing.`;

    // $set only the repaired question paths, so a concurrent edit to the
    // narrative, references, or any other question is never clobbered.
    const set = { status: 'sme_review', needsWork: remaining.length > 0, reviewNote: composeNote(entry.reviewNote, autoLine) };
    entry.repairedQis.forEach((qi) => { set['caseSim.questions.' + qi] = entry.caseObj.questions[qi]; });
    await ContentItem.updateOne({ _id: entry._id }, { $set: set });
    saved += 1;
    console.log('  saved ' + externalId + ' (' + qList + ')' + (remaining.length ? ' — still needsWork: ' + remaining.length + ' issue(s) left' : ''));
  }
  console.log('Saved ' + saved + ' case(s), set to sme_review for re-review.');
  await mongoose.disconnect();
}
if (require.main === module) main().catch((e) => { console.error(e); process.exit(1); });

module.exports = { isRewriteSafe, mergeRewrite, newSchemaErrors, composeNote, buildRepairPrompt };
