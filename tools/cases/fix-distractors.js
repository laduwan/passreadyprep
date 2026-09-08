#!/usr/bin/env node
// ============================================================================
// fix-distractors.js — AI-assisted repair of LIVE questions that fail
// qualityGate.js. Rewrites (and re-tiers) the 3 non-correct options of each
// flagged question; the keyed answer (weight 3) is never touched.
//
// What the bank actually looks like (audit-quality.js on the live DB):
//   - nearly every question carries a weight set like [3,0,-1,-1] or
//     [3,-1,-2,-2] — the old spec allowed any weights from {0,-1,-2}; the
//     current spec requires exactly one 0 / -1 / -2. That is a RE-TIERING
//     job, not corrupted data: the model decides which distractor is the
//     near-miss, which the novice error, which the harmful one, rewriting
//     where the existing text does not fit its tier.
//   - the key is often the longest option (older cases), OR one distractor
//     is 3-6x longer than the rest (later cases, from the old "make an
//     incorrect option the longest" rule). Both are length cues; both are
//     fixed by bringing all three distractors to the key's length.
//
// One API call per CASE (all of its flagged questions in one prompt). Each
// returned question is validated on its own: it must re-pass qualityGate.js
// and introduce no new caseSchema.js error, or it is left unchanged and
// reported. A question the reply omits or mangles is simply still flagged
// on the next run.
//
// Only a question whose KEY is unambiguous is sent: exactly one weight-3
// option, which is the sole isCorrect, and no empty option text. Anything
// else is a data problem a rewrite cannot safely guess at — skipped.
//
// TWO WAYS TO RUN IT
//
// Direct (small batches you will eyeball yourself):
//   node tools/cases/fix-distractors.js                      (published only, plan)
//   node tools/cases/fix-distractors.js --generate --ids ncmhce-D160
//   node tools/cases/fix-distractors.js --apply --count 20 [--keep-status]
//
// Reviewed (SME evaluates and weights the rewrites BEFORE anything goes live):
//   node tools/cases/fix-distractors.js --generate --count 30 --save review/batch1
//       -> batch1.json  exact proposals (what --from will apply — not a fresh roll)
//          batch1.html  the review document: before/after per question
//          batch1.csv   one row per distractor; reviewers fill approve /
//                       weight_override / text_override / comment in Excel or Sheets
//       The database is NOT touched.
//   node tools/cases/fix-distractors.js --from review/batch1.json --review review/batch1.csv
//       -> plan: what the reviewed sheet would apply (no API, no writes)
//   node tools/cases/fix-distractors.js --apply --from review/batch1.json --review review/batch1.csv --keep-status
//       -> writes only questions the sheet approves, with overrides, after
//          re-checking the live question is unchanged and the gate still passes.
//
// Writes always $set only the repaired questions' paths (never the whole
// caseSim). By default a repaired case goes back to sme_review; pass
// --keep-status to leave published cases live (the sensible choice after a
// reviewed apply). needsWork is cleared only when the whole case then passes.
//
//   --all      include sme_review/draft cases (default: published only)
//   --count N  cases per run in --generate/--apply (default 5; ignored with --from)
//   --skip N   skip the first N flagged cases — cases stay flagged until a batch
//              is applied, so cut sequential review batches with
//              --count 30 --save batch1, --skip 30 --count 30 --save batch2, ...
// MONGO_URI / ANTHROPIC_API_KEY from env / .env, same as generate-deep.js.
// ============================================================================

require('dotenv').config();
const fs = require('fs');
const path = require('path');
const mongoose = require('mongoose');
const Exam = require('../../models/Exam');
const ContentItem = require('../../models/ContentItem');
const { validateCase } = require('./caseSchema');
const { checkQuestionQuality, checkCaseQuality, classifyReason, ITEM_CONSTRUCTION_RULES, STRUCTURAL_PARITY_CHECK } = require('./qualityGate');
const { callAnthropic, extractJson, MODEL } = require('./anthropic');
const { AUTO_NOTE_PREFIX, TIER_LABEL, CSV_HEADER, toCsv, parseCsv, readReviewSheet, composeNote, esc, writeRepairs, loadLiveCases } = require('./reviewRoundTrip');

function flag(n, d) { const i = process.argv.indexOf('--' + n); return i >= 0 && process.argv[i + 1] && !process.argv[i + 1].startsWith('--') ? process.argv[i + 1] : d; }
const COUNT = parseInt(flag('count', '5'), 10);
const SKIP = parseInt(flag('skip', '0'), 10);
const ALL = process.argv.includes('--all');
const APPLY = process.argv.includes('--apply');
const KEEP_STATUS = process.argv.includes('--keep-status');
const SAVE = flag('save', null);
const FROM = flag('from', null);
const REVIEW = flag('review', null);
const GENERATE = !FROM && (process.argv.includes('--generate') || APPLY || !!SAVE);
const idi = process.argv.indexOf('--ids');
const EXPLICIT = idi >= 0 ? (process.argv[idi + 1] || '').split(',').map((s) => s.trim()).filter(Boolean) : null;

const DISTRACTOR_WEIGHTS = '0,-1,-2';

// ---------------------------------------------------------------------------
// Pure helpers (exported for tests)
// ---------------------------------------------------------------------------

// The key must be unambiguous: exactly one weight-3 option, and it is the
// sole isCorrect. Distractor weights are NOT checked — re-tiering them is
// the repair. Empty option text is a data problem, not a wording one.
function isRewriteSafe(q) {
  const opts = (q && q.options) || [];
  if (opts.length !== 4) return false;
  const keyed = opts.filter((o) => o && o.weight === 3);
  const correct = opts.filter((o) => o && o.isCorrect === true);
  if (keyed.length !== 1 || correct.length !== 1 || keyed[0] !== correct[0]) return false;
  return opts.every((o) => o && typeof o.text === 'string' && o.text.trim().length > 0);
}

// --- length targets ----------------------------------------------------------
// Models are poor at counting characters, so "match the key's length" comes
// back a little short and the key stays the longest option. Instead each
// distractor gets an explicit numeric window, in characters AND words, and
// one distractor is told it must end up strictly longer than the key.
//
// Window: K/1.11 .. K*1.11 around the key length K. Any four lengths inside
// it have a max/min ratio <= 1.23, under the gate's 1.25, so a reply that
// lands anywhere in its window passes.

const LENGTH_PASSES = 2;       // targeted follow-up calls per case for length-only failures
const LENGTH_BAND = 1.11;

const words = (s) => String(s || '').trim().split(/\s+/).filter(Boolean).length;

function lengthTargets(question) {
  const key = question.options.find((o) => o.isCorrect);
  const K = key.text.length;
  const cpw = K / Math.max(1, words(key.text));       // chars per word, measured on the key itself
  const toWords = (n) => Math.max(1, Math.round(n / cpw));
  const lo = Math.ceil(K / LENGTH_BAND);
  const hi = Math.floor(K * LENGTH_BAND);
  const distractors = question.options.filter((o) => !o.isCorrect);
  // The distractor that is already longest is the natural one to push past the key.
  const longestId = String(distractors.reduce((a, b) => (b.text.length > a.text.length ? b : a)).id);
  return distractors.map((o) => {
    const mustExceed = String(o.id) === longestId;
    const minChars = mustExceed ? Math.min(hi - 2, Math.max(lo, K + Math.max(3, Math.round(K * 0.04)))) : lo;
    return { id: o.id, mustExceed, minChars, maxChars: hi, minWords: toWords(minChars), maxWords: toWords(hi), keyChars: K, keyWords: words(key.text) };
  });
}

function targetLine(t) {
  return `${t.minChars}–${t.maxChars} characters (about ${t.minWords}–${t.maxWords} words)` +
    (t.mustExceed ? ` — this one MUST be strictly longer than the key (key is ${t.keyChars} chars)` : '');
}

// Is every remaining gate failure a length one (ratio / key-longest)?
function isLengthOnly(reasons) {
  return reasons.length > 0 && reasons.every((r) => ['ratio', 'key-longest'].includes(classifyReason(r)));
}

function buildCaseRepairPrompt(caseObj, items) {
  const blocks = items.map(({ qi, question, reasons }) => {
    const correct = question.options.find((o) => o.isCorrect);
    const distractors = question.options.filter((o) => !o.isCorrect);
    const targets = {};
    lengthTargets(question).forEach((t) => { targets[String(t.id)] = t; });
    const dLines = distractors.map((o) =>
      `    id "${o.id}" (currently weight ${o.weight}, ${o.text.length} chars / ${words(o.text)} words): "${o.text}"\n      current commonMistake: "${(o.explanation && o.explanation.commonMistake) || ''}"\n      TARGET LENGTH for id "${o.id}": ${targetLine(targets[String(o.id)])}`
    ).join('\n');
    return `--- Q${qi + 1} (domain: ${question.domain}) ---
  QUESTION: "${question.question}"
  KEY (weight 3, id "${correct.id}", ${correct.text.length} chars / ${words(correct.text)} words — do not change): "${correct.text}"
  DISTRACTORS:
${dLines}
  FLAGGED FOR:
${reasons.map((r) => '    - ' + r).join('\n')}`;
  }).join('\n\n');

  return `You are an expert psychometrician and NCMHCE item writer, doing a targeted repair pass on ${items.length} question(s) from ONE existing case. Do not change the clinical scenario, the diagnosis, or any KEY (correct answer) — only rewrite and re-tier the 3 distractors of each question so the item passes the construction rules below.

CASE: "${caseObj.title}"
DIAGNOSIS (given): "${(caseObj.diagnosis && caseObj.diagnosis.name) || (caseObj.primaryDiagnosis && caseObj.primaryDiagnosis.name) || ''}"
INTAKE (for context only): "${String((caseObj.narrative && caseObj.narrative.intake) || '').slice(0, 900)}"

${blocks}

${ITEM_CONSTRUCTION_RULES}

${STRUCTURAL_PARITY_CHECK}

RE-TIERING: the current distractor weights are provisional and usually wrong (for example two -1s and no 0). For every question, assign the three distractors EXACTLY one weight 0, one weight -1, and one weight -2. Re-tier an existing distractor where its clinical content already fits the tier; otherwise rewrite it so it does. Every distractor keeps its ORIGINAL id.

LENGTH: each key is fixed at the length shown. Every distractor has a TARGET LENGTH window above, in characters and words — write to the WORD count, then check the character count. Landing inside the window is a hard requirement: too short and the key stays the longest option; too long and the ratio breaks. The distractor marked "MUST be strictly longer than the key" has to exceed the key by at least a few words of plausible clinical detail. Never make one distractor much longer than the others.

Return ONE JSON object only (no markdown, no prose), shaped exactly like this — one entry per question above, "q" echoing the question number:
{
  "questions": [
    { "q": ${items[0].qi + 1}, "options": [
      { "id": "<original id>", "weight": 0,  "text": "...", "rationale": "one-line label (8+ chars)", "explanation": { "approach": "8+ chars", "rationale": "full sentence", "keyIndicators": ["...", "..."], "commonMistake": "20+ chars naming the exact reasoning flaw" } },
      { "id": "<original id>", "weight": -1, "text": "...", "rationale": "...", "explanation": { "approach": "...", "rationale": "...", "keyIndicators": ["..."], "commonMistake": "..." } },
      { "id": "<original id>", "weight": -2, "text": "...", "rationale": "...", "explanation": { "approach": "...", "rationale": "...", "keyIndicators": ["..."], "commonMistake": "..." } }
    ] }
  ]
}
Output ONLY the JSON object.`;
}

// Follow-up prompt for questions whose rewrite failed ONLY on length. Each
// distractor gets an exact delta ("add about 4–6 words") rather than a
// target, which models follow far more reliably than absolute counts.
function buildLengthFixPrompt(caseObj, retries) {
  const blocks = retries.map(({ it, candidate }) => {
    const key = candidate.options.find((o) => o.isCorrect);
    const targets = {};
    lengthTargets(candidate).forEach((t) => { targets[String(t.id)] = t; });
    const lines = candidate.options.filter((o) => !o.isCorrect).map((o) => {
      const t = targets[String(o.id)];
      const n = o.text.length;
      let action;
      if (n < t.minChars) action = `TOO SHORT by ${t.minChars - n}+ characters — ADD about ${Math.max(1, t.minWords - words(o.text))}–${Math.max(2, t.maxWords - words(o.text))} words of plausible clinical detail`;
      else if (n > t.maxChars) action = `TOO LONG by ${n - t.maxChars}+ characters — CUT about ${Math.max(1, words(o.text) - t.maxWords)}–${Math.max(2, words(o.text) - t.minWords)} words`;
      else action = 'length is fine — return it UNCHANGED';
      return `    id "${o.id}" (weight ${o.weight}, ${n} chars / ${words(o.text)} words): "${o.text}"\n      ${action}. Target: ${targetLine(t)}`;
    }).join('\n');
    return `--- Q${it.qi + 1} ---
  KEY (${key.text.length} chars / ${words(key.text)} words — do not change): "${key.text}"
  DISTRACTORS:
${lines}`;
  }).join('\n\n');

  return `You are an NCMHCE item writer fixing ONLY the LENGTH of distractors on ${retries.length} question(s) from one case ("${caseObj.title}"). The wording, clinical meaning, tier (weight), id, rationale and explanation of each distractor stay as they are; you only add or remove plausible clinical detail to hit the stated length. Count words first, then characters.

${blocks}

Return ONE JSON object only (no markdown, no prose), one entry per question, "q" echoing the question number, every distractor present with its ORIGINAL id and its new text. Return ONLY id and text per option — the weight, rationale and explanation are kept from before and must not be re-sent:
{ "questions": [ { "q": ${retries[0].it.qi + 1}, "options": [ { "id": "...", "text": "..." }, { "id": "...", "text": "..." }, { "id": "...", "text": "..." } ] } ] }
Output ONLY the JSON object.`;
}

// Merge one returned question into a copy of the original: distractors are
// matched by id (weights are being reassigned, so id is the only stable key),
// and text / weight / rationale / explanation are replaced. Returns null when
// the reply does not cover exactly the original distractor ids with exactly
// the weights {0,-1,-2} — the caller leaves the question unchanged.
function mergeRewrite(question, replyOptions) {
  const distractorIds = question.options.filter((o) => !o.isCorrect).map((o) => String(o.id)).sort();
  const got = (replyOptions || []).filter((o) => o && o.id != null);
  const gotIds = got.map((o) => String(o.id)).sort();
  if (gotIds.join('|') !== distractorIds.join('|')) return null;
  if (got.map((o) => Number(o.weight)).sort((a, b) => b - a).join(',') !== DISTRACTOR_WEIGHTS) return null;
  const byId = {};
  got.forEach((o) => { byId[String(o.id)] = o; });
  const options = question.options.map((o) => {
    if (o.isCorrect) return o;
    const r = byId[String(o.id)];
    return Object.assign({}, o, { weight: Number(r.weight), text: r.text, rationale: r.rationale, explanation: r.explanation });
  });
  return Object.assign({}, question, { options });
}

// Merge a length-pass reply: ONLY text changes. Weight, rationale and
// explanation stay exactly as they were on the candidate, whatever the reply
// carries (a follow-up that re-sent empty explanations used to wipe the good
// ones). Returns null unless the reply covers exactly the distractor ids with
// non-empty text.
function mergeLengthFix(candidate, replyOptions) {
  const distractorIds = candidate.options.filter((o) => !o.isCorrect).map((o) => String(o.id)).sort();
  const got = (replyOptions || []).filter((o) => o && o.id != null && typeof o.text === 'string' && o.text.trim().length > 0);
  const gotIds = got.map((o) => String(o.id)).sort();
  if (gotIds.join('|') !== distractorIds.join('|')) return null;
  const textById = {};
  got.forEach((o) => { textById[String(o.id)] = o.text.trim(); });
  const options = candidate.options.map((o) => (o.isCorrect ? o : Object.assign({}, o, { text: textById[String(o.id)] })));
  return Object.assign({}, candidate, { options });
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

// A candidate is accepted only if it passes the item-quality gate and adds
// no schema error. Returns null when accepted, else the reason string.
function rejectReason(caseObj, qi, candidate) {
  const stillFailing = checkQuestionQuality(candidate, 'q' + (qi + 1));
  if (stillFailing.length) return 'STILL FAILS after rewrite: ' + stillFailing.join(' | ');
  const regressions = newSchemaErrors(caseObj, qi, candidate);
  if (regressions.length) return 'REWRITE BREAKS SCHEMA: ' + regressions.slice(0, 3).join(' | ');
  return null;
}

// --- review round-trip (CSV / sheet / notes / write path live in reviewRoundTrip.js) ---

// Rows for the review sheet: one per distractor of one proposed question.
function proposalCsvRows(p, q) {
  return q.after.filter((o) => !o.isCorrect).map((o) => [
    p.externalId, p.title, q.qi + 1, q.questionId, o.id, o.weight, TIER_LABEL[o.weight] || o.weight,
    o.text, (o.explanation && o.explanation.commonMistake) || '', '', '', '', '', '', '',
  ]);
}

// Apply reviewer overrides to a proposed question. Returns { options } or an
// error string when the overridden weights no longer form {0,-1,-2}.
function applyOverrides(afterOptions, overrides) {
  const options = afterOptions.map((o) => {
    if (o.isCorrect) return o;
    const ov = overrides && overrides[String(o.id)];
    if (!ov) return o;
    const next = Object.assign({}, o);
    if (ov.weight != null) next.weight = ov.weight;
    if (ov.text != null) next.text = ov.text;
    return next;
  });
  const ws = options.filter((o) => !o.isCorrect).map((o) => Number(o.weight)).sort((a, b) => b - a).join(',');
  if (ws !== DISTRACTOR_WEIGHTS) return 'weight overrides give [' + ws + '], must be exactly one each of 0, -1, -2';
  return { options };
}

// Does the live question still look like the one the proposal was made from?
function liveMatchesProposal(liveQ, q) {
  if (!liveQ || !Array.isArray(liveQ.options)) return false;
  if (String(liveQ.id) !== String(q.questionId)) return false;
  const liveIds = liveQ.options.map((o) => String(o.id)).sort().join('|');
  const propIds = q.before.map((o) => String(o.id)).sort().join('|');
  if (liveIds !== propIds) return false;
  const liveKey = liveQ.options.find((o) => o.isCorrect);
  const propKey = q.before.find((o) => o.isCorrect);
  return !!liveKey && !!propKey && liveKey.text === propKey.text;
}

function renderReviewHtml(proposals) {
  const nQ = proposals.cases.reduce((n, c) => n + c.questions.length, 0);
  const caseHtml = proposals.cases.map((c) => {
    const qs = c.questions.map((q) => {
      const key = q.after.find((o) => o.isCorrect);
      const beforeById = {};
      q.before.forEach((o) => { beforeById[String(o.id)] = o; });
      const rows = q.after.filter((o) => !o.isCorrect)
        .sort((a, b) => b.weight - a.weight)
        .map((o) => {
          const b = beforeById[String(o.id)] || {};
          return `<tr>
  <td class="id">${esc(o.id)}</td>
  <td class="before"><span class="w">was ${esc(b.weight)}</span><br>${esc(b.text)}</td>
  <td class="after"><span class="w tier${o.weight}">${esc(TIER_LABEL[o.weight] || o.weight)}</span><br>${esc(o.text)}
    <div class="meta"><b>Why a candidate picks it:</b> ${esc(o.explanation && o.explanation.commonMistake)}<br><b>Rationale:</b> ${esc(o.explanation && o.explanation.rationale)}</div></td>
  <td class="review">approve ☐ &nbsp; weight ____<br><br>comment:</td>
</tr>`;
        }).join('\n');
      return `<div class="q">
<h3>Q${q.qi + 1} <span class="domain">${esc(q.domain)}</span></h3>
<p class="stem">${esc(q.question)}</p>
<p class="key"><span class="w">KEY (3)</span> ${esc(key && key.text)}</p>
<p class="flag">Flagged: ${esc(q.reasons.join(' · '))}</p>
<table><thead><tr><th>id</th><th>Before</th><th>Proposed</th><th>Reviewer</th></tr></thead><tbody>
${rows}
</tbody></table>
</div>`;
    }).join('\n');
    return `<section class="case">
<h2>${esc(c.externalId)} — ${esc(c.title)}</h2>
<p class="dx">${esc(c.dx)} · ${esc(c.difficulty || '')} · ${c.questions.length} of ${c.questionCount} question(s) proposed</p>
${qs}
</section>`;
  }).join('\n');

  return `<!doctype html>
<html><head><meta charset="utf-8"><title>Distractor review — ${esc(proposals.cases.length)} case(s)</title>
<style>
body{font:14px/1.45 -apple-system,Segoe UI,Helvetica,Arial,sans-serif;color:#222;max-width:1100px;margin:24px auto;padding:0 16px}
h1{font-size:22px} h2{font-size:18px;margin:36px 0 4px;border-top:2px solid #333;padding-top:16px} h3{font-size:15px;margin:22px 0 4px}
.dx,.domain,.flag,.meta{color:#666;font-size:12.5px} .domain{font-weight:normal;margin-left:8px}
.stem{font-weight:600} .key{background:#eef7ee;border-left:4px solid #2e7d32;padding:6px 10px}
table{border-collapse:collapse;width:100%;margin-top:6px} th,td{border:1px solid #ccc;padding:6px 8px;vertical-align:top;text-align:left}
th{background:#f3f3f3;font-size:12.5px} td.id{width:28px;font-family:monospace} td.before{width:28%;color:#555} td.review{width:16%;color:#888}
.w{font-family:monospace;font-size:12px;font-weight:700;color:#444} .tier0{color:#1565c0} .tier-1{color:#ef6c00} .tier-2{color:#c62828}
.intro{background:#fffbe6;border:1px solid #e6d98a;padding:10px 14px;font-size:13px}
@media print{.case{page-break-before:always} h1+.intro{page-break-after:always}}
</style></head><body>
<h1>Distractor review — ${proposals.cases.length} case(s), ${nQ} question(s)</h1>
<div class="intro">
<p><b>What this is.</b> Proposed rewrites of the three <i>incorrect</i> options on questions that failed the item-quality gate. The keyed answer (weight 3) is unchanged in every question. Each distractor is assigned a tier: <b class="tier0">near-miss (0)</b> — defensible but not optimal, not penalized; <b class="tier-1">novice error (-1)</b> — a plausible wrong framework, mild penalty; <b class="tier-2">harmful error (-2)</b> — unsafe, unethical, or fundamentally wrong, heavy penalty.</p>
<p><b>What to evaluate.</b> (1) Is each distractor clinically plausible — something a real clinician might consider? (2) Is it in the right tier? (3) Are the four options structurally parallel (similar length, grammar, specificity) with no clue to the key? (4) Does "why a candidate picks it" name a real reasoning error?</p>
<p><b>How to record decisions.</b> Use the companion spreadsheet (same name, <code>.csv</code>): one row per distractor. Put <b>N</b> in <code>approve</code> to reject a question (any N on the question rejects all three of its rows). Put <b>0</b>, <b>-1</b> or <b>-2</b> in <code>weight_override</code> to change a tier (the three must still be one of each). Put replacement wording in <code>text_override</code>. Leave a row blank to accept it as proposed.</p>
<p class="meta">Generated ${esc(proposals.generatedAt)} · model ${esc(proposals.model)}</p>
</div>
${caseHtml}
</body></html>
`;
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

async function runFromProposals(entries) {
  const proposals = JSON.parse(fs.readFileSync(FROM, 'utf8'));
  const review = REVIEW ? readReviewSheet(fs.readFileSync(REVIEW, 'utf8')) : null;
  const byId = {};
  entries.forEach((e) => { byId[e.externalId] = e; });
  console.log('Loaded ' + proposals.cases.length + ' proposed case(s) from ' + FROM + (REVIEW ? ' with review sheet ' + REVIEW : ' (no review sheet — every proposal counts as approved)') + '\n');

  let accepted = 0, rejected = 0, stale = 0;
  for (const p of proposals.cases) {
    const entry = byId[p.externalId];
    if (!entry) { console.log('  ' + p.externalId + ': not in the database (or filtered out) — skipped'); continue; }
    for (const q of p.questions) {
      const tag = p.externalId + ' q' + (q.qi + 1);
      const liveQ = entry.caseObj.questions[q.qi];
      if (!liveMatchesProposal(liveQ, q)) { console.log('  ' + tag + ': live question changed since proposals were generated — skipped'); stale += 1; continue; }
      const r = review && review[p.externalId + '|' + q.qi];
      if (r && r.rejected) { console.log('  ' + tag + ': rejected by reviewer'); rejected += 1; continue; }
      const applied = applyOverrides(q.after, r && r.overrides);
      if (typeof applied === 'string') { console.log('  ' + tag + ': ' + applied + ' — skipped'); rejected += 1; continue; }
      const candidate = Object.assign({}, liveQ, { options: applied.options });
      const why = rejectReason(entry.caseObj, q.qi, candidate);
      if (why) { console.log('  ' + tag + ': ' + why + ' — skipped'); rejected += 1; continue; }
      const overridden = r && Object.keys(r.overrides).length ? ' (with reviewer overrides)' : '';
      console.log('  ' + tag + ': OK' + overridden);
      entry.caseObj.questions[q.qi] = candidate;
      entry.repairedQis.push(q.qi);
      accepted += 1;
    }
  }
  const touched = entries.filter((e) => e.repairedQis.length);
  console.log('\n' + accepted + ' question(s) ready across ' + touched.length + ' case(s); ' + rejected + ' rejected/invalid, ' + stale + ' stale.');
  if (!APPLY) { console.log('Plan only — nothing written. Add --apply to save these' + (KEEP_STATUS ? '.' : ' (add --keep-status to leave published cases live).')); return; }
  await writeRepairs(ContentItem, touched, { keepStatus: KEEP_STATUS });
}

async function main() {
  if (!process.env.MONGO_URI) { console.error('MONGO_URI is not set. Add it to your .env first.'); process.exit(1); }
  if (SAVE && APPLY) { console.error('--save writes proposals for review instead of the database; drop --apply (apply later with --from).'); process.exit(1); }
  await mongoose.connect(process.env.MONGO_URI, { dbName: 'passreadyprep' });
  console.log('Connected to MongoDB (db: passreadyprep)\n');

  const entries = await loadLiveCases(Exam, ContentItem, { explicit: EXPLICIT, all: ALL, from: FROM });
  if (FROM) { await runFromProposals(entries); await mongoose.disconnect(); return; }
  console.log('Loaded ' + entries.length + ' case(s) (' + (EXPLICIT ? 'explicit ids' : ALL ? 'all statuses' : 'published only') + ')\n');

  // Flag questions; keep only cases with at least one rewrite-safe flagged question.
  const skipped = [];
  const histogram = {};
  entries.forEach((e) => {
    e.caseObj.questions.forEach((q, qi) => {
      const reasons = checkQuestionQuality(q, 'q' + (qi + 1));
      if (!reasons.length) return;
      reasons.forEach((r) => { const k = classifyReason(r); histogram[k] = (histogram[k] || 0) + 1; });
      if (!isRewriteSafe(q)) { skipped.push({ id: e.externalId, qi, reasons }); return; }
      e.items.push({ qi, question: q, reasons });
    });
  });
  const cases = entries.filter((e) => e.items.length);
  const flaggedQ = cases.reduce((n, e) => n + e.items.length, 0);
  console.log(cases.length + ' case(s) with ' + flaggedQ + ' rewrite-safe flagged question(s); ' + skipped.length + ' question(s) skipped (ambiguous key or empty option — manual review).');
  console.log('Failure mix across the bank: ' + Object.entries(histogram).sort((a, b) => b[1] - a[1]).map(([k, v]) => k + ' ' + v).join(' · ') + '\n');
  skipped.forEach((s) => console.log('  SKIP ' + s.id + ' q' + (s.qi + 1) + ': ' + s.reasons.join(' | ')));
  if (skipped.length) console.log('');

  if (!GENERATE) {
    cases.forEach((e) => {
      const mix = {};
      e.items.forEach((it) => it.reasons.forEach((r) => { const k = classifyReason(r); mix[k] = (mix[k] || 0) + 1; }));
      console.log('  ' + e.externalId + ' [' + e.status + '] ' + e.items.length + '/' + e.caseObj.questions.length + ' q flagged: ' +
        Object.entries(mix).map(([k, v]) => k + ' ' + v).join(' · '));
    });
    console.log('\nPlan only — no API calls made. --generate shows proposed rewrites (1 API call per case, --count ' + COUNT + '); --save NAME writes them out for review; --apply writes them to the database.');
    await mongoose.disconnect();
    return;
  }
  if (!process.env.ANTHROPIC_API_KEY) { console.error('\nANTHROPIC_API_KEY not set.'); process.exit(1); }

  const batch = cases.slice(SKIP, SKIP + COUNT);
  if (!batch.length) { console.log('--skip ' + SKIP + ' is past the end of the ' + cases.length + ' flagged case(s); nothing to do.'); await mongoose.disconnect(); return; }
  console.log('Generating rewrites for ' + batch.length + ' of ' + cases.length + ' case(s) with model ' + MODEL + ' (' + (SKIP ? 'skipping the first ' + SKIP + ', ' : '') + '--count ' + COUNT + ', one API call each: ' + batch[0].externalId + ' … ' + batch[batch.length - 1].externalId + ')...\n');

  const proposals = { generatedAt: new Date().toISOString(), model: MODEL, cases: [] };
  let fixed = 0;
  for (const entry of batch) {
    console.log('  ' + entry.externalId + ' (' + entry.items.length + ' question(s))...');
    let reply;
    try {
      reply = extractJson(await callAnthropic(buildCaseRepairPrompt(entry.caseObj, entry.items), { maxTokens: 32000 }));
    } catch (e) {
      console.log('    ERROR: ' + e.message.slice(0, 150));
      continue;
    }
    const byQ = {};
    (reply.questions || []).forEach((r) => { if (r && r.q != null) byQ[Number(r.q)] = r.options; });

    const proposed = [];
    const accept = (it, candidate, note) => {
      const tag = 'q' + (it.qi + 1);
      console.log('    ' + tag + ': OK' + (note || ''));
      candidate.options.forEach((o) => { if (!o.isCorrect) console.log('      [' + (o.weight >= 0 ? ' ' : '') + o.weight + '] ' + o.text + '  (' + o.text.length + ')'); });
      proposed.push({ qi: it.qi, questionId: it.question.id, domain: it.question.domain, question: it.question.question, reasons: it.reasons, before: it.question.options, after: candidate.options });
      if (!SAVE) { entry.caseObj.questions[it.qi] = candidate; entry.repairedQis.push(it.qi); }
      fixed += 1;
    };
    // Decide a candidate: accept, park for a length-only retry, or drop.
    const judge = (it, candidate, retryList, note) => {
      const tag = 'q' + (it.qi + 1);
      const failing = checkQuestionQuality(candidate, tag);
      if (failing.length && isLengthOnly(failing) && retryList) { retryList.push({ it, candidate, reasons: failing }); return; }
      const why = rejectReason(entry.caseObj, it.qi, candidate);
      if (why) { console.log('    ' + tag + ': ' + why + ' — left unchanged'); return; }
      accept(it, candidate, note);
    };

    let retry = [];
    for (const it of entry.items) {
      const tag = 'q' + (it.qi + 1);
      const returned = byQ[it.qi + 1];
      if (!returned) { console.log('    ' + tag + ': not in reply — left unchanged'); continue; }
      const candidate = mergeRewrite(it.question, returned);
      if (!candidate) { console.log('    ' + tag + ': reply ids/weights do not match the distractor set — left unchanged'); continue; }
      judge(it, candidate, retry);
    }

    // Length-only failures get up to LENGTH_PASSES targeted follow-ups, one
    // call per case per pass, with exact add/cut deltas per distractor.
    for (let pass = 1; pass <= LENGTH_PASSES && retry.length; pass++) {
      console.log('    length pass ' + pass + ': ' + retry.length + ' question(s) off-length — ' + retry.map((r) => 'q' + (r.it.qi + 1)).join(', '));
      let reply2;
      try {
        reply2 = extractJson(await callAnthropic(buildLengthFixPrompt(entry.caseObj, retry), { maxTokens: 16000 }));
      } catch (e) {
        console.log('    ERROR (length pass): ' + e.message.slice(0, 150));
        break;
      }
      const byQ2 = {};
      (reply2.questions || []).forEach((r) => { if (r && r.q != null) byQ2[Number(r.q)] = r.options; });
      const next = [];
      for (const r of retry) {
        const tag = 'q' + (r.it.qi + 1);
        const returned = byQ2[r.it.qi + 1];
        const cand2 = returned ? mergeLengthFix(r.candidate, returned) : null;
        if (!cand2) { console.log('    ' + tag + ': length pass reply unusable — ' + r.reasons.join(' | ') + ' — left unchanged'); continue; }
        judge(r.it, cand2, pass < LENGTH_PASSES ? next : null, ' (after length pass ' + pass + ')');
      }
      retry = next;
    }
    retry.forEach((r) => console.log('    q' + (r.it.qi + 1) + ': still off-length after ' + LENGTH_PASSES + ' passes: ' + r.reasons.join(' | ') + ' — left unchanged'));
    if (proposed.length) {
      const c = entry.caseObj;
      proposals.cases.push({ externalId: entry.externalId, status: entry.status, title: c.title, dx: (c.diagnosis && c.diagnosis.name) || (c.primaryDiagnosis && c.primaryDiagnosis.name) || '', difficulty: c.difficulty, questionCount: c.questions.length, questions: proposed });
    }
  }

  console.log('\n' + fixed + ' question(s) rewritten across ' + proposals.cases.length + ' case(s).');

  if (SAVE) {
    fs.mkdirSync(path.dirname(path.resolve(SAVE)), { recursive: true });
    fs.writeFileSync(SAVE + '.json', JSON.stringify(proposals, null, 1));
    fs.writeFileSync(SAVE + '.html', renderReviewHtml(proposals));
    const rows = [CSV_HEADER];
    proposals.cases.forEach((p) => p.questions.forEach((q) => rows.push(...proposalCsvRows(p, q))));
    fs.writeFileSync(SAVE + '.csv', toCsv(rows));
    console.log('Wrote ' + SAVE + '.json (proposals), ' + SAVE + '.html (review document), ' + SAVE + '.csv (review sheet, ' + (rows.length - 1) + ' distractor rows).');
    console.log('Nothing written to the database. After review: --from ' + SAVE + '.json --review ' + SAVE + '.csv [--apply --keep-status]');
    await mongoose.disconnect();
    return;
  }

  if (!APPLY) {
    console.log('Dry run — nothing written. Re-run with --apply to save these' + (KEEP_STATUS ? '.' : ' and send the case(s) back to sme_review.'));
    await mongoose.disconnect();
    return;
  }
  await writeRepairs(ContentItem, entries.filter((e) => e.repairedQis.length), { keepStatus: KEEP_STATUS });
  await mongoose.disconnect();
}
if (require.main === module) main().catch((e) => { console.error(e); process.exit(1); });

module.exports = {
  isRewriteSafe, mergeRewrite, newSchemaErrors, composeNote, buildCaseRepairPrompt, rejectReason,
  lengthTargets, isLengthOnly, buildLengthFixPrompt, mergeLengthFix, words, LENGTH_BAND,
  toCsv, parseCsv, proposalCsvRows, readReviewSheet, applyOverrides, liveMatchesProposal, renderReviewHtml, CSV_HEADER,
};
