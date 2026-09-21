#!/usr/bin/env node
// ============================================================================
// rebalance-key-length.js — remove answer-length cues by rebalancing which
// option is longest/shortest, per exam series.
//
// Background: across published cases the KEY is the longest option in ~12% of
// questions and the shortest in ~33% (random ≈ 25/25). Test-wise examinees
// exploit this signal. The gate permits key-longest only when key <= min*1.1,
// so every conversion must respect that band (LENGTH_BAND = 1.11, same constant
// as fix-distractors.js), plus max <= min*1.25 always.
//
// MODES
//   --audit
//       Per exam and per series (externalId ^ncmhce-D vs rest): % key-longest,
//       % key-shortest, convertible counts. No writes.
//
//   --plan --target-longest 0.23 --target-shortest 0.25
//       Choose cheapest conversions (smallest char delta) to move each series
//       toward targets. Deterministic, seeded by externalId+qi. Print summary.
//       No writes.
//
//   --generate [--save review/NAME] [--count N] [--skip N]
//       For planned questions, one API call per case (MINIMAL rewrites). Writes
//       a durable audit doc per case to the rebalanceaudit collection. With
//       --save: also write review/<save>.json + .html + .csv, no DB writes.
//
//   --apply --from review/NAME.json [--review review/NAME.csv] [--keep-status]
//       Identical semantics to fix-distractors (stale check, $set only changed
//       paths, sme_review unless --keep-status).
//
//   --run [--rounds N] [--count N] [--resume <runId>]
//       Unattended loop: plan → generate one batch (default 40 cases) → apply
//       immediately from memory (stale check + gate + $set, --keep-status
//       implied). Repeats until the plan selects nothing or N rounds done. API
//       errors per case: retry twice with backoff; if every case in a round
//       errors, stop. Writes one rebalanceaudit doc per case each round.
//       --resume <runId>: skips cases already applied under that runId so a
//       killed run can be restarted. Prints before/after per-series stats.
//
// CLI flags identical to fix-distractors: flag(), --ids, --all, --count,
// --skip, --save/--from/--review/--apply, --keep-status.
// MONGO_URI (db passreadyprep), ANTHROPIC_API_KEY via tools/cases/anthropic.js.
// With no MONGO_URI: runs a self-test with 6 synthetic questions + loop test.
// ============================================================================

require('dotenv').config();
const fs = require('fs');
const path = require('path');
const mongoose = require('mongoose');
const Exam = require('../../models/Exam');
const ContentItem = require('../../models/ContentItem');
const { checkQuestionQuality, checkTruncation } = require('./qualityGate');
const { callAnthropic, extractJson, MODEL, resolveApiKey } = require('./anthropic');
const { toCsv, parseCsv, composeNote, esc, writeRepairs, loadLiveCases } = require('./reviewRoundTrip');

function flag(n, d) { const i = process.argv.indexOf('--' + n); return i >= 0 && process.argv[i + 1] && !process.argv[i + 1].startsWith('--') ? process.argv[i + 1] : d; }
const RUN_MODE = process.argv.includes('--run');
const COUNT = parseInt(flag('count', RUN_MODE ? '40' : '5'), 10);
const SKIP = parseInt(flag('skip', '0'), 10);
const ROUNDS = parseInt(flag('rounds', '0'), 10);  // 0 = unlimited
const RESUME_RUN_ID = flag('resume', null);
const ALL = process.argv.includes('--all');
const AUDIT = process.argv.includes('--audit');
const PLAN_FLAG = process.argv.includes('--plan');
const APPLY = process.argv.includes('--apply');
const KEEP_STATUS = process.argv.includes('--keep-status');
const SAVE = flag('save', null);
const FROM = flag('from', null);
const REVIEW = flag('review', null);
const TARGET_LONGEST = parseFloat(flag('target-longest', '0.23'));
const TARGET_SHORTEST = parseFloat(flag('target-shortest', '0.25'));
const GENERATE = !FROM && (process.argv.includes('--generate') || APPLY || !!SAVE);
const idi = process.argv.indexOf('--ids');
const EXPLICIT = idi >= 0 ? (process.argv[idi + 1] || '').split(',').map((s) => s.trim()).filter(Boolean) : null;

// Must stay in sync with fix-distractors.js and qualityGate.js respectively.
const LENGTH_BAND = 1.11;
const GATE_RATIO = 1.25;

// Forbidden patterns: self-disqualifying qualifiers, absolutes, bolt-on tails.
const SELF_DISQUALIFY = /\b(but (does|is) not|suggestive but|does not establish|not the (feature|finding|priority)|on its own|by itself|without other (diagnostic )?features|taken as|treated as evidence|entirely|completely|always|never)\b|(given the clinical presentation|in this clinical scenario|as indicated by the assessment|when evaluating the clinical|considering the client's|in the context of treatment)/i;

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

// ---------------------------------------------------------------------------
// Pure helpers
// ---------------------------------------------------------------------------

function isDeepCase(externalId) { return /^ncmhce-D/i.test(String(externalId || '')); }

function hashStr(s) {
  let h = 0;
  for (let i = 0; i < s.length; i++) h = (Math.imul(31, h) + s.charCodeAt(i)) | 0;
  return h >>> 0;
}

function optLens(q) { return (q.options || []).map((o) => ((o && o.text) || '').length); }

function keyIsLongest(q) {
  const lens = optLens(q);
  const ki = (q.options || []).findIndex((o) => o && o.isCorrect);
  if (ki < 0) return false;
  return lens[ki] === Math.max(...lens) && lens[ki] > Math.min(...lens) * 1.1;
}

function keyIsShortest(q) {
  const lens = optLens(q);
  const ki = (q.options || []).findIndex((o) => o && o.isCorrect);
  if (ki < 0) return false;
  return lens[ki] === Math.min(...lens);
}

// Can we make the key the longest by extending it within the band?
// key_new must land in (maxD, floor(minAll * LENGTH_BAND)], capped at +25%.
// Returns { feasible, targetLen, delta } or { feasible: false }.
function canMakeKeyLongest(q) {
  const opts = q.options || [];
  const ki = opts.findIndex((o) => o && o.isCorrect);
  if (ki < 0) return { feasible: false };
  const lens = opts.map((o) => ((o && o.text) || '').length);
  const kLen = lens[ki];
  const maxD = Math.max(...lens.filter((_, i) => i !== ki));
  if (kLen >= maxD) return { feasible: false };
  const minAll = Math.min(...lens);
  const bandCeil = Math.floor(minAll * LENGTH_BAND);
  if (maxD >= bandCeil) return { feasible: false };
  const cap = Math.floor(kLen * 1.25);
  const targetLen = maxD + 1;
  if (targetLen > bandCeil || targetLen > cap) return { feasible: false };
  return { feasible: true, targetLen, delta: targetLen - kLen };
}

// Can we clear key-shortest by trimming the 2nd-shortest (= shortest distractor)?
// Trim target: key-1..key-3 chars. new_min = trimmedLen; gate: max <= trimmedLen*GATE_RATIO.
// Returns { feasible, targetOptId, trimmedLen, delta } or { feasible: false }.
function canClearKeyShortest(q) {
  const opts = q.options || [];
  const ki = opts.findIndex((o) => o && o.isCorrect);
  if (ki < 0) return { feasible: false };
  const lens = opts.map((o) => ((o && o.text) || '').length);
  const kLen = lens[ki];
  if (kLen !== Math.min(...lens)) return { feasible: false };
  const maxAll = Math.max(...lens);
  const distractors = opts
    .map((o, i) => ({ i, len: lens[i], id: o && o.id }))
    .filter((_, i) => i !== ki)
    .sort((a, b) => a.len - b.len);
  const secondShortest = distractors[0];
  for (let t = kLen - 1; t >= kLen - 3; t--) {
    if (t < 1 || t >= secondShortest.len) continue;
    if (maxAll <= t * GATE_RATIO) {
      return { feasible: true, targetOptId: String(secondShortest.id), trimmedLen: t, delta: secondShortest.len - t };
    }
  }
  return { feasible: false };
}

// ---------------------------------------------------------------------------
// Audit
// ---------------------------------------------------------------------------

function pct(n, d) { return d ? (n / d * 100).toFixed(1) + '%' : '-'; }

function auditSeries(questions, label) {
  const total = questions.length;
  if (!total) { console.log(`  ${label}: 0 questions`); return; }
  const longest = questions.filter(keyIsLongest).length;
  const shortest = questions.filter(keyIsShortest).length;
  const convL = questions.filter((q) => canMakeKeyLongest(q).feasible).length;
  const convS = questions.filter((q) => canClearKeyShortest(q).feasible).length;
  console.log(`  ${label}: ${total} q | key-longest ${longest} (${pct(longest, total)}) | key-shortest ${shortest} (${pct(shortest, total)}) | convertible→longest ${convL} | convertible↓shortest ${convS}`);
}

// Per-series stats snapshot for before/after comparison.
function computeSeriesStats(entries) {
  const defs = [
    { label: 'ncmhce-D', filter: (id) => isDeepCase(id) },
    { label: 'standard', filter: (id) => !isDeepCase(id) },
  ];
  const result = {};
  for (const { label, filter } of defs) {
    const qs = entries.filter((e) => filter(e.externalId)).flatMap((e) => (e.caseObj.questions || []));
    result[label] = { total: qs.length, longest: qs.filter(keyIsLongest).length, shortest: qs.filter(keyIsShortest).length };
  }
  return result;
}

// ---------------------------------------------------------------------------
// Plan
// ---------------------------------------------------------------------------

function buildPlan(entries) {
  const seriesDefs = [
    { label: 'ncmhce-D', filter: (id) => isDeepCase(id) },
    { label: 'standard', filter: (id) => !isDeepCase(id) },
  ];
  const plan = {};
  for (const { label, filter } of seriesDefs) {
    const ser = entries.filter((e) => filter(e.externalId));
    const allQ = ser.flatMap((e) => (e.caseObj.questions || []));
    const total = allQ.length;
    if (!total) { plan[label] = { total, selected: [] }; continue; }
    const currentLongest = allQ.filter(keyIsLongest).length;
    const currentShortest = allQ.filter(keyIsShortest).length;
    const targetLongestN = Math.round(TARGET_LONGEST * total);
    const targetShortestN = Math.round(TARGET_SHORTEST * total);
    const needMoreLongest = Math.max(0, targetLongestN - currentLongest);
    const needLessShortest = Math.max(0, currentShortest - targetShortestN);

    const mklPool = [], cksPool = [];
    for (const e of ser) {
      for (let qi = 0; qi < (e.caseObj.questions || []).length; qi++) {
        const q = e.caseObj.questions[qi];
        const seed = hashStr(e.externalId + '|' + qi);
        const mkl = canMakeKeyLongest(q);
        const cks = canClearKeyShortest(q);
        if (mkl.feasible) mklPool.push({ externalId: e.externalId, qi, question: q, conv: { type: 'make-key-longest', targetLen: mkl.targetLen, delta: mkl.delta }, seed });
        if (cks.feasible) cksPool.push({ externalId: e.externalId, qi, question: q, conv: { type: 'clear-key-shortest', targetOptId: cks.targetOptId, trimmedLen: cks.trimmedLen, delta: cks.delta }, seed });
      }
    }
    mklPool.sort((a, b) => a.conv.delta - b.conv.delta || a.seed - b.seed);
    cksPool.sort((a, b) => a.conv.delta - b.conv.delta || a.seed - b.seed);

    const used = new Set();
    const selected = [];
    for (const c of mklPool) {
      if (selected.filter((s) => s.conv.type === 'make-key-longest').length >= needMoreLongest) break;
      const k = c.externalId + '|' + c.qi;
      if (!used.has(k)) { used.add(k); selected.push(c); }
    }
    for (const c of cksPool) {
      if (selected.filter((s) => s.conv.type === 'clear-key-shortest').length >= needLessShortest) break;
      const k = c.externalId + '|' + c.qi;
      if (!used.has(k)) { used.add(k); selected.push(c); }
    }
    plan[label] = { total, currentLongest, currentShortest, targetLongestN, targetShortestN, needMoreLongest, needLessShortest, selected };
  }
  return plan;
}

function printPlan(plan) {
  for (const [series, p] of Object.entries(plan)) {
    if (!p.total) { console.log(`  ${series}: no questions`); continue; }
    const mklSel = p.selected.filter((s) => s.conv.type === 'make-key-longest').length;
    const cksSel = p.selected.filter((s) => s.conv.type === 'clear-key-shortest').length;
    console.log(`  ${series} (${p.total} q): key-longest ${p.currentLongest} → target ${p.targetLongestN} (need +${p.needMoreLongest}), key-shortest ${p.currentShortest} → target ${p.targetShortestN} (need -${p.needLessShortest})`);
    console.log(`    selected ${p.selected.length}: ${mklSel} make-key-longest, ${cksSel} clear-key-shortest`);
    p.selected.slice(0, 8).forEach((s) => console.log(`      ${s.externalId} q${s.qi + 1}: ${s.conv.type} (Δ${s.conv.delta} chars)`));
    if (p.selected.length > 8) console.log(`      … and ${p.selected.length - 8} more`);
  }
}

// ---------------------------------------------------------------------------
// Generate — prompt builder
// ---------------------------------------------------------------------------

function buildRebalancePrompt(caseObj, items) {
  const blocks = items.map(({ qi, question, conv }) => {
    const opts = question.options || [];
    const key = opts.find((o) => o && o.isCorrect);
    const distractors = opts.filter((o) => o && !o.isCorrect);
    const lens = opts.map((o) => ((o && o.text) || '').length);
    const minAll = Math.min(...lens);

    if (conv.type === 'make-key-longest') {
      const maxD = Math.max(...distractors.map((o) => (o.text || '').length));
      const bandCeil = Math.floor(minAll * LENGTH_BAND);
      return `--- Q${qi + 1} (domain: ${question.domain}) ---
QUESTION: "${question.question}"
KEY (weight 3, id "${key.id}", ${key.text.length} chars — REWRITE THIS): "${key.text}"
DISTRACTORS (do NOT change):
${distractors.map((o) => `  id "${o.id}" (weight ${o.weight}, ${(o.text || '').length} chars): "${o.text}"`).join('\n')}
TASK make-key-longest: Rewrite the KEY so it is the longest option. Target length: ${maxD + 1}–${bandCeil} chars (must exceed ${maxD}, must not exceed ${bandCeil}). Integrate ONE short clinical qualifier drawn from the case (a timeframe, a setting, or a consent/scope detail). The clinical claim must be UNCHANGED. The qualifier must read as part of the sentence — never appended as a tail.`;
    } else {
      const kLen = (key.text || '').length;
      return `--- Q${qi + 1} (domain: ${question.domain}) ---
QUESTION: "${question.question}"
KEY (weight 3, id "${key.id}", ${kLen} chars — do NOT change): "${key.text}"
DISTRACTORS:
${distractors.map((o) => `  id "${o.id}" (weight ${o.weight}, ${(o.text || '').length} chars): "${o.text}"`).join('\n')}
TASK clear-key-shortest: Rewrite distractor id "${conv.targetOptId}" to be shorter than the key. Target: ${conv.trimmedLen} chars (must be ${kLen - 3}–${kLen - 1} chars). Remove ONE redundant word or phrase. Meaning and clinical tier UNCHANGED. Result must be a complete standalone clinical statement.`;
    }
  }).join('\n\n');

  return `You are an expert NCMHCE item writer making MINIMAL targeted edits to remove answer-length cues from ${items.length} question(s) from case "${caseObj.title}".

CASE DIAGNOSIS: "${(caseObj.diagnosis && caseObj.diagnosis.name) || (caseObj.primaryDiagnosis && caseObj.primaryDiagnosis.name) || ''}"
INTAKE (context only): "${String((caseObj.narrative && caseObj.narrative.intake) || '').slice(0, 600)}"

${blocks}

RULES (non-negotiable):
• Never change isCorrect, weight, id, rationale, or explanation of any option.
• Never introduce: "always", "never", "entirely", "completely", or any self-disqualifying phrase ("but does not establish", "not the finding that", "on its own", "by itself", etc.).
• Never append bolt-on tails: "given the clinical presentation", "in this clinical scenario", "as indicated by the assessment", "when evaluating the clinical", "considering the client's", "in the context of treatment".
• Every option must remain a complete standalone clinical statement.
• For make-key-longest: the added qualifier reads as part of the sentence; clinical claim unchanged.
• For clear-key-shortest: only remove a redundant word/phrase; meaning and tier unchanged.

Return ONE JSON object only (no markdown), one entry per question, "q" echoing the question number:
{
  "questions": [
    { "q": ${items[0].qi + 1}, "edits": [
      { "id": "<original id>", "text": "<new text>" }
    ] }
  ]
}
Each "edits" array has EXACTLY ONE entry: the key (make-key-longest) or the targeted distractor (clear-key-shortest).
Output ONLY the JSON object.`;
}

// ---------------------------------------------------------------------------
// Merge & validate
// ---------------------------------------------------------------------------

function mergeRebalanceEdit(question, edits, conv) {
  const editMap = {};
  for (const e of (edits || [])) {
    if (e && e.id != null && typeof e.text === 'string') editMap[String(e.id)] = e.text.trim();
  }
  const editedIds = Object.keys(editMap);
  if (editedIds.length !== 1) return { ok: false, reason: 'wrong-edit-count', detail: `expected 1 edit, got ${editedIds.length}` };
  const editedId = editedIds[0];
  const newText = editMap[editedId];

  const trunc = checkTruncation(newText);
  if (trunc) return { ok: false, reason: 'truncated', detail: trunc.reason };
  if (SELF_DISQUALIFY.test(newText)) return { ok: false, reason: 'self-disqualify', detail: 'forbidden pattern in "…' + newText.slice(-60) + '"' };

  const opts = question.options || [];
  const key = opts.find((o) => o && o.isCorrect);
  const kLen = (key.text || '').length;
  const optIdx = opts.findIndex((o) => String(o.id) === editedId);
  if (optIdx < 0) return { ok: false, reason: 'id-mismatch', detail: `id ${editedId} not found in options` };

  if (conv.type === 'make-key-longest') {
    if (!opts[optIdx].isCorrect) return { ok: false, reason: 'edited-wrong-opt', detail: 'expected key to be edited' };
    if (newText.length > Math.floor(kLen * 1.25)) return { ok: false, reason: 'exceeds-cap', detail: `key grew ${kLen}→${newText.length} (cap ${Math.floor(kLen * 1.25)})` };
  } else {
    if (opts[optIdx].isCorrect) return { ok: false, reason: 'edited-key', detail: 'edit targeted key instead of distractor' };
    if (newText.length >= kLen) return { ok: false, reason: 'not-shorter', detail: `trimmed (${newText.length}) still >= key (${kLen})` };
    if (newText.length < kLen - 3) return { ok: false, reason: 'too-short', detail: `trimmed (${newText.length}) < key-3 (${kLen - 3})` };
  }

  const options = opts.map((o, i) => i === optIdx ? Object.assign({}, o, { text: newText }) : o);
  return { ok: true, question: Object.assign({}, question, { options }), editedOptIdx: optIdx };
}

// ---------------------------------------------------------------------------
// Mongo audit trail
// ---------------------------------------------------------------------------

function auditColl() {
  return mongoose.connection.collection('rebalanceaudit');
}

async function insertAuditDoc(runId, externalId, edits, applied, errors) {
  try {
    await auditColl().insertOne({ runId, ts: new Date(), externalId, edits, applied: !!applied, errors: errors || [] });
  } catch (e) {
    console.log('  [audit] warn: ' + externalId + ': ' + e.message.slice(0, 80));
  }
}

async function getResumedCases(resumeRunId) {
  if (!resumeRunId) return new Set();
  const docs = await auditColl().find({ runId: resumeRunId, applied: true }, { projection: { externalId: 1 } }).toArray();
  const s = new Set(docs.map((d) => d.externalId));
  if (s.size) console.log('Resuming runId ' + resumeRunId + ': skipping ' + s.size + ' already-applied case(s).\n');
  return s;
}

// Build the per-case edits array for the audit doc.
function buildEditsForAudit(items, mergedByQi) {
  const edits = [];
  for (const it of items) {
    const m = mergedByQi[it.qi];
    if (!m) continue;
    const before = it.question.options[m.editedOptIdx];
    const after = m.question.options[m.editedOptIdx];
    edits.push({ qi: it.qi, oi: String(after.id), before: before.text, after: after.text, purpose: it.conv.type });
  }
  return edits;
}

// ---------------------------------------------------------------------------
// --run unattended loop
// ---------------------------------------------------------------------------

function printRunSummary(before, after, totalApplied, totalSkipped, rounds, runId) {
  console.log('\n════ RUN SUMMARY ════');
  console.log('runId: ' + runId + ' | rounds: ' + rounds + ' | applied: ' + totalApplied + ' | skipped: ' + totalSkipped);
  for (const label of ['ncmhce-D', 'standard']) {
    const b = before[label] || { total: 0, longest: 0, shortest: 0 };
    const a = after[label] || { total: 0, longest: 0, shortest: 0 };
    if (!b.total && !a.total) continue;
    console.log(`  ${label} (${a.total} q):`);
    console.log(`    key-longest:  ${pct(b.longest, b.total)} → ${pct(a.longest, a.total)}`);
    console.log(`    key-shortest: ${pct(b.shortest, b.total)} → ${pct(a.shortest, a.total)}`);
  }
  console.log('════════════════════');
}

async function runUnattended(runId) {
  const maxRounds = ROUNDS > 0 ? ROUNDS : Infinity;
  const resumed = await getResumedCases(RESUME_RUN_ID);

  // Snapshot before stats
  const initEntries = await loadLiveCases(Exam, ContentItem, { explicit: EXPLICIT, all: ALL });
  const beforeStats = computeSeriesStats(initEntries);

  let totalApplied = 0, totalSkipped = 0, roundNum = 0;

  while (roundNum < maxRounds) {
    const entries = roundNum === 0 ? initEntries : await loadLiveCases(Exam, ContentItem, { explicit: EXPLICIT, all: ALL });
    roundNum++;

    const plan = buildPlan(entries);
    const allSelected = Object.values(plan).flatMap((p) => p.selected).filter((s) => !resumed.has(s.externalId));
    if (!allSelected.length) { console.log('Round ' + roundNum + ': plan is empty — done.'); break; }

    const byCase = {};
    for (const s of allSelected) {
      if (!byCase[s.externalId]) byCase[s.externalId] = [];
      byCase[s.externalId].push(s);
    }
    const batchKeys = Object.keys(byCase).sort().slice(0, COUNT);
    console.log('\n=== Round ' + roundNum + (maxRounds < Infinity ? '/' + maxRounds : '') + ' — ' + batchKeys.length + ' case(s) of ' + allSelected.length + ' remaining ===');

    let allErrored = true, roundApplied = 0, roundSkipped = 0;

    for (const externalId of batchKeys) {
      const entry = entries.find((e) => e.externalId === externalId);
      if (!entry) { roundSkipped++; continue; }
      const items = byCase[externalId];
      console.log('  ' + externalId + ' (' + items.length + ' q)...');

      // Call API with up to 2 retries on credit/rate/5xx errors.
      let reply = null, lastErr = null;
      const RETRY_MS = [1000, 3000];
      for (let attempt = 0; attempt <= RETRY_MS.length; attempt++) {
        if (attempt > 0) {
          await sleep(RETRY_MS[attempt - 1]);
          console.log('    retry ' + attempt + '...');
        }
        try {
          reply = extractJson(await callAnthropic(buildRebalancePrompt(entry.caseObj, items), { maxTokens: 8000 }));
          lastErr = null;
          break;
        } catch (e) {
          lastErr = e;
          const retriable = /credit|rate.?limit|429|5\d\d|503|overloaded/i.test(e.message);
          if (!retriable) break;
          console.log('    error (attempt ' + (attempt + 1) + '): ' + e.message.slice(0, 100));
        }
      }

      if (!reply) {
        const msg = lastErr ? lastErr.message.slice(0, 120) : 'no reply';
        console.log('    failed after retries: ' + msg);
        await insertAuditDoc(runId, externalId, [], false, [msg]);
        roundSkipped++;
        continue;
      }
      allErrored = false;

      const byQ = {};
      (reply.questions || []).forEach((r) => { if (r && r.q != null) byQ[Number(r.q)] = r.edits; });

      const mergedByQi = {};
      entry.repairedQis = [];
      for (const it of items) {
        const tag = 'q' + (it.qi + 1);
        const edits = byQ[it.qi + 1];
        if (!edits) { console.log('    ' + tag + ': not in reply'); continue; }
        const merged = mergeRebalanceEdit(it.question, edits, it.conv);
        if (!merged.ok) { console.log('    ' + tag + ': rejected (' + merged.reason + ') ' + merged.detail); continue; }

        // Stale check: key text in current entry must still match what we generated against.
        const liveKey = (entry.caseObj.questions[it.qi] && entry.caseObj.questions[it.qi].options || []).find((o) => o && o.isCorrect);
        const genKey = it.question.options.find((o) => o && o.isCorrect);
        if (!liveKey || !genKey || liveKey.text !== genKey.text) { console.log('    ' + tag + ': stale — skipped'); continue; }

        const failing = checkQuestionQuality(merged.question, tag);
        if (failing.length) { console.log('    ' + tag + ': gate fails: ' + failing.join(' | ')); continue; }

        console.log('    ' + tag + ': OK [' + it.conv.type + ']');
        mergedByQi[it.qi] = merged;
        entry.caseObj.questions[it.qi] = merged.question;
        entry.repairedQis.push(it.qi);
      }

      const auditEdits = buildEditsForAudit(items, mergedByQi);
      if (entry.repairedQis.length) {
        await writeRepairs(ContentItem, [entry], { keepStatus: true, verb: 'rebalanced key-length on' });
        await insertAuditDoc(runId, externalId, auditEdits, true, []);
        resumed.add(externalId);
        roundApplied++;
        totalApplied++;
      } else {
        await insertAuditDoc(runId, externalId, auditEdits, false, ['no edits accepted']);
        roundSkipped++;
      }
    }

    if (allErrored && batchKeys.length > 0) {
      console.log('\nEvery case in round ' + roundNum + ' errored — stopping to avoid spin.');
      totalSkipped += roundSkipped;
      break;
    }
    totalSkipped += roundSkipped;
    console.log('  Round ' + roundNum + ' done: ' + roundApplied + ' applied, ' + roundSkipped + ' skipped.');
  }

  // After stats: reload to reflect all writes.
  const afterEntries = await loadLiveCases(Exam, ContentItem, { explicit: EXPLICIT, all: ALL });
  const afterStats = computeSeriesStats(afterEntries);
  printRunSummary(beforeStats, afterStats, totalApplied, totalSkipped, roundNum, runId);
}

// ---------------------------------------------------------------------------
// HTML review document
// ---------------------------------------------------------------------------

function renderReviewHtml(proposals) {
  const nQ = proposals.cases.reduce((n, c) => n + c.questions.length, 0);
  const caseHtml = proposals.cases.map((c) => {
    const qs = c.questions.map((q) => {
      const beforeById = {};
      q.before.forEach((o) => { beforeById[String(o.id)] = o; });
      const rows = q.after.map((o) => {
        const b = beforeById[String(o.id)] || {};
        const changed = b.text !== o.text;
        const role = o.isCorrect ? '<b>KEY (3)</b>' : 'distractor ' + o.weight;
        return `<tr${changed ? ' class="changed"' : ''}>
  <td class="id">${esc(o.id)}</td><td class="role">${role}</td>
  <td class="before">${esc(b.text)} <span class="chars">(${(b.text || '').length})</span></td>
  <td class="after">${esc(o.text)} <span class="chars">(${(o.text || '').length})</span></td>
  <td class="review">approve ☐<br>comment:</td>
</tr>`;
      }).join('\n');
      return `<div class="q"><h3>Q${q.qi + 1} <span class="domain">${esc(q.domain)}</span> <span class="conv">[${esc(q.convType)}]</span></h3>
<p class="stem">${esc(q.question)}</p>
<table><thead><tr><th>id</th><th>role</th><th>Before</th><th>After</th><th>Reviewer</th></tr></thead><tbody>${rows}</tbody></table></div>`;
    }).join('\n');
    return `<section class="case"><h2>${esc(c.externalId)} — ${esc(c.title)}</h2><p class="dx">${esc(c.dx)} · ${c.questions.length} question(s)</p>${qs}</section>`;
  }).join('\n');

  return `<!doctype html><html><head><meta charset="utf-8"><title>Key-length rebalance — ${esc(proposals.cases.length)} case(s)</title>
<style>
body{font:14px/1.45 -apple-system,Segoe UI,Helvetica,Arial,sans-serif;color:#222;max-width:1100px;margin:24px auto;padding:0 16px}
h1{font-size:22px}h2{font-size:18px;margin:36px 0 4px;border-top:2px solid #333;padding-top:16px}h3{font-size:15px;margin:22px 0 4px}
.dx,.domain,.conv,.chars{color:#666;font-size:12.5px}.domain,.conv{margin-left:8px}.stem{font-weight:600}
table{border-collapse:collapse;width:100%;margin-top:6px}th,td{border:1px solid #ccc;padding:6px 8px;vertical-align:top;text-align:left}
th{background:#f3f3f3;font-size:12.5px}td.id{width:28px;font-family:monospace}td.role{width:90px;font-size:12px}td.review{width:16%;color:#888}
tr.changed{background:#fffbe6}
</style></head><body>
<h1>Key-length rebalance — ${proposals.cases.length} case(s), ${nQ} question(s)</h1>
<p>Highlighted rows (yellow) show the edited option. Exactly one option changes per question.</p>
<p class="dx">Generated ${esc(proposals.generatedAt)} · model ${esc(proposals.model)}</p>
${caseHtml}</body></html>`;
}

// ---------------------------------------------------------------------------
// CSV
// ---------------------------------------------------------------------------

const REBALANCE_CSV_HEADER = ['case_id', 'title', 'q', 'question_id', 'option_id', 'weight', 'conv_type', 'proposed_text', 'original_text', 'approve', 'text_override', 'comment'];

function proposalCsvRows(p, q) {
  return q.after.map((o) => {
    const before = q.before.find((b) => String(b.id) === String(o.id)) || {};
    return [p.externalId, p.title, q.qi + 1, q.questionId, o.id, o.isCorrect ? 'KEY' : o.weight, q.convType, o.text, before.text || '', '', '', ''];
  });
}

// ---------------------------------------------------------------------------
// --from / --apply path
// ---------------------------------------------------------------------------

function liveMatchesProposal(liveQ, q) {
  if (!liveQ || !Array.isArray(liveQ.options)) return false;
  if (String(liveQ.id || '') !== String(q.questionId || '')) return false;
  const liveIds = liveQ.options.map((o) => String(o.id)).sort().join('|');
  const propIds = q.before.map((o) => String(o.id)).sort().join('|');
  return liveIds === propIds;
}

function readSimpleSheet(text) {
  const rows = parseCsv(text);
  if (!rows.length) return {};
  const header = rows[0].map((h) => h.trim());
  const col = (n) => header.indexOf(n);
  const out = {};
  rows.slice(1).forEach((r) => {
    const key = (r[col('case_id')] || '') + '|' + ((parseInt(r[col('q')], 10) || 0) - 1);
    const entry = out[key] = out[key] || { rejected: false, overrides: {} };
    if (/^\s*(n|no|reject|rejected|x)\s*$/i.test(r[col('approve')] || '')) entry.rejected = true;
    const t = (r[col('text_override')] || '').trim();
    const oid = (r[col('option_id')] || '').trim();
    if (t && oid) entry.overrides[oid] = t;
  });
  return out;
}

async function runFromProposals(entries) {
  const proposals = JSON.parse(fs.readFileSync(FROM, 'utf8'));
  const review = REVIEW ? readSimpleSheet(fs.readFileSync(REVIEW, 'utf8')) : null;
  const byId = {};
  entries.forEach((e) => { byId[e.externalId] = e; });
  console.log('Loaded ' + proposals.cases.length + ' proposed case(s) from ' + FROM + (REVIEW ? ' with review sheet ' + REVIEW : ' (no sheet — all proposals accepted)') + '\n');

  let accepted = 0, rejected = 0, stale = 0;
  for (const p of proposals.cases) {
    const entry = byId[p.externalId];
    if (!entry) { console.log('  ' + p.externalId + ': not found — skipped'); continue; }
    for (const q of p.questions) {
      const tag = p.externalId + ' q' + (q.qi + 1);
      const liveQ = entry.caseObj.questions[q.qi];
      if (!liveMatchesProposal(liveQ, q)) { console.log('  ' + tag + ': stale — skipped'); stale++; continue; }
      const r = review && review[p.externalId + '|' + q.qi];
      if (r && r.rejected) { console.log('  ' + tag + ': rejected'); rejected++; continue; }
      const editMap = {};
      q.after.forEach((o) => { editMap[String(o.id)] = o.text; });
      if (r) Object.entries(r.overrides).forEach(([oid, t]) => { editMap[oid] = t; });
      const candidate = Object.assign({}, liveQ, {
        options: liveQ.options.map((o) => { const t = editMap[String(o.id)]; return t !== undefined ? Object.assign({}, o, { text: t }) : o; }),
      });
      const failing = checkQuestionQuality(candidate, 'q' + (q.qi + 1));
      if (failing.length) { console.log('  ' + tag + ': gate fails: ' + failing.join(' | ') + ' — skipped'); rejected++; continue; }
      console.log('  ' + tag + ': OK' + (r && Object.keys(r.overrides).length ? ' (with reviewer overrides)' : ''));
      entry.caseObj.questions[q.qi] = candidate;
      entry.repairedQis.push(q.qi);
      accepted++;
    }
  }
  const touched = entries.filter((e) => e.repairedQis.length);
  console.log('\n' + accepted + ' question(s) ready across ' + touched.length + ' case(s); ' + rejected + ' rejected, ' + stale + ' stale.');
  if (!APPLY) { console.log('Plan only — nothing written. Add --apply to save.'); return; }
  await writeRepairs(ContentItem, touched, { keepStatus: KEEP_STATUS, verb: 'rebalanced key-length on' });
}

// ---------------------------------------------------------------------------
// Self-test (runs when MONGO_URI is absent)
// ---------------------------------------------------------------------------

function runSelfTest() {
  console.log('No MONGO_URI — running self-test with 6 synthetic questions + loop logic\n');
  let pass = 0, fail = 0;
  function assert(label, cond, detail) {
    if (cond) { console.log('  PASS ' + label); pass++; }
    else { console.log('  FAIL ' + label + (detail ? ' — ' + detail : '')); fail++; }
  }

  const K = 80;
  function mkQ(opts) {
    return { options: opts.map((o, i) => ({ id: String(i + 1), text: o.t, weight: o.w, isCorrect: !!o.key, explanation: { commonMistake: 'test mistake text here' } })) };
  }

  // 1. Convertible to key-longest
  const q1 = mkQ([{ t: 'a'.repeat(K), w: 3, key: true }, { t: 'b'.repeat(K + 5), w: 0 }, { t: 'c'.repeat(K + 3), w: -1 }, { t: 'd'.repeat(K + 1), w: -2 }]);
  const r1 = canMakeKeyLongest(q1);
  assert('q1 convertible→longest feasible', r1.feasible, JSON.stringify(r1));
  assert('q1 targetLen = maxD+1 = ' + (K + 6), r1.feasible && r1.targetLen === K + 6);

  // 2. Not convertible: max_distractor=K+9=89 >= floor(K*1.11)=88
  const q2 = mkQ([{ t: 'a'.repeat(K), w: 3, key: true }, { t: 'b'.repeat(K + 9), w: 0 }, { t: 'c'.repeat(K + 5), w: -1 }, { t: 'd'.repeat(K + 2), w: -2 }]);
  const r2 = canMakeKeyLongest(q2);
  assert('q2 not convertible (max≥band)', !r2.feasible);

  // 3. Already longest: key=K+5, distractors max=K+2
  const q3 = mkQ([{ t: 'a'.repeat(K + 5), w: 3, key: true }, { t: 'b'.repeat(K + 2), w: 0 }, { t: 'c'.repeat(K + 1), w: -1 }, { t: 'd'.repeat(K), w: -2 }]);
  const r3 = canMakeKeyLongest(q3);
  assert('q3 already longest → infeasible', !r3.feasible);
  assert('q3 keyIsLongest=false (85 < min*1.1=88, within band)', !keyIsLongest(q3));

  // 4. Shortest-fixable: key=K, 2nd-shortest=K+2, max=K+10
  const q4 = mkQ([{ t: 'a'.repeat(K), w: 3, key: true }, { t: 'b'.repeat(K + 2), w: 0 }, { t: 'c'.repeat(K + 10), w: -1 }, { t: 'd'.repeat(K + 5), w: -2 }]);
  const r4 = canClearKeyShortest(q4);
  assert('q4 clear-key-shortest feasible', r4.feasible, JSON.stringify(r4));
  assert('q4 trimmedLen = K-1 = ' + (K - 1), r4.feasible && r4.trimmedLen === K - 1);

  // 5. Band violation
  const q5 = mkQ([{ t: 'a'.repeat(K), w: 3, key: true }, { t: 'b'.repeat(K + 1), w: 0 }, { t: 'c'.repeat(K + 30), w: -1 }, { t: 'd'.repeat(K + 20), w: -2 }]);
  const r5 = canClearKeyShortest(q5);
  assert('q5 band violation → infeasible', !r5.feasible);

  // 6. Tie: key=K tied with distractor
  const q6 = mkQ([{ t: 'a'.repeat(K), w: 3, key: true }, { t: 'b'.repeat(K), w: 0 }, { t: 'c'.repeat(K + 5), w: -1 }, { t: 'd'.repeat(K + 3), w: -2 }]);
  const r6 = canClearKeyShortest(q6);
  assert('q6 tied-shortest feasible via trim', r6.feasible, JSON.stringify(r6));
  assert('q6 keyIsShortest=true', keyIsShortest(q6));

  // Plan pool checks
  assert('plan pool: q1 in make-key-longest pool', canMakeKeyLongest(q1).feasible);
  assert('plan pool: q4 in clear-key-shortest pool', canClearKeyShortest(q4).feasible);
  assert('plan pool: q2 NOT in make-key-longest pool', !canMakeKeyLongest(q2).feasible);
  assert('plan pool: q2 IS in clear-key-shortest pool', canClearKeyShortest(q2).feasible);
  assert('plan pool: q5 not in clear pool', !canClearKeyShortest(q5).feasible);

  // -------------------------------------------------------------------------
  // Loop logic self-test: 3 rounds of simulated --run with mocked generate.
  // Each synthetic case has one make-key-longest candidate. The mock generator
  // returns a valid extension (key set to targetLen chars). After 3 rounds,
  // the plan is empty because canMakeKeyLongest returns false for all 3 cases.
  // -------------------------------------------------------------------------
  console.log('\n  --- loop self-test ---');

  // Three standard cases, each with one convertible question.
  function mkEntry(id) {
    const q = { id: id + '-q1', question: 'Q?', domain: 'test',
      options: [
        { id: '1', text: 'a'.repeat(K),     weight: 3, isCorrect: true,  explanation: { commonMistake: 'x'.repeat(20) } },
        { id: '2', text: 'b'.repeat(K + 5), weight: 0, isCorrect: false, explanation: { commonMistake: 'x'.repeat(20) } },
        { id: '3', text: 'c'.repeat(K + 3), weight: -1, isCorrect: false, explanation: { commonMistake: 'x'.repeat(20) } },
        { id: '4', text: 'd'.repeat(K + 1), weight: -2, isCorrect: false, explanation: { commonMistake: 'x'.repeat(20) } },
      ],
    };
    return { externalId: id, repairedQis: [], caseObj: { questions: [q] } };
  }
  const loopEntries = [mkEntry('ncmhce-S010'), mkEntry('ncmhce-S011'), mkEntry('ncmhce-S012')];

  // Mock generator: immediately apply targetLen to the key for each selected item.
  function mockApply(entries, selected) {
    const byCase = {};
    for (const s of selected) { if (!byCase[s.externalId]) byCase[s.externalId] = []; byCase[s.externalId].push(s); }
    const batchKeys = Object.keys(byCase).sort().slice(0, 1);  // count=1 per round
    for (const id of batchKeys) {
      const entry = entries.find((e) => e.externalId === id);
      for (const s of byCase[id]) {
        const key = entry.caseObj.questions[s.qi].options.find((o) => o.isCorrect);
        key.text = 'A'.repeat(s.conv.targetLen);  // extend key past max distractor
      }
    }
    return batchKeys.length;
  }

  let loopRound = 0;
  while (loopRound < 10) {
    const plan = buildPlan(loopEntries);
    const selected = Object.values(plan).flatMap((p) => p.selected);
    if (!selected.length) break;
    loopRound++;
    mockApply(loopEntries, selected);
  }
  assert('loop terminates in exactly 3 rounds (3 cases, count=1 per round)', loopRound === 3, 'got ' + loopRound);
  assert('loop exit condition: plan empty after 3 rounds', loopRound < 10);
  // Verify all three questions now have key > maxDistractor (mock successfully applied)
  const allFixed = loopEntries.every((e) => {
    const q = e.caseObj.questions[0];
    const lens = optLens(q);
    const ki = q.options.findIndex((o) => o.isCorrect);
    return lens[ki] > Math.max(...lens.filter((_, i) => i !== ki));
  });
  assert('mock apply: all 3 questions have key longer than max distractor', allFixed);

  console.log('\n' + pass + ' passed, ' + fail + ' failed.');
  process.exit(fail > 0 ? 1 : 0);
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

async function main() {
  if (!process.env.MONGO_URI) {
    if (AUDIT || PLAN_FLAG || GENERATE || FROM || RUN_MODE) { console.error('MONGO_URI is not set.'); process.exit(1); }
    runSelfTest();
    return;
  }
  if (SAVE && APPLY) { console.error('--save writes proposals for review; drop --apply (apply later with --from).'); process.exit(1); }

  await mongoose.connect(process.env.MONGO_URI, { dbName: 'passreadyprep' });
  console.log('Connected to MongoDB (db: passreadyprep)\n');

  // --run: unattended loop
  if (RUN_MODE) {
    if (!resolveApiKey()) { console.error('ANTHROPIC_API_KEY_CASE_TOOLS / ANTHROPIC_API_KEY not set.'); process.exit(1); }
    const runId = RESUME_RUN_ID || ('rbl-' + Date.now());
    console.log('Starting --run (runId: ' + runId + ', maxRounds: ' + (ROUNDS || '∞') + ', count: ' + COUNT + ')\n');
    await runUnattended(runId);
    await mongoose.disconnect();
    return;
  }

  const entries = await loadLiveCases(Exam, ContentItem, { explicit: EXPLICIT, all: ALL, from: FROM });
  if (FROM) { await runFromProposals(entries); await mongoose.disconnect(); return; }
  console.log('Loaded ' + entries.length + ' case(s) (' + (EXPLICIT ? 'explicit ids' : ALL ? 'all statuses' : 'published only') + ')\n');

  if (AUDIT) {
    const allQ = entries.flatMap((e) => (e.caseObj.questions || []).map((q) => ({ q, id: e.externalId })));
    auditSeries(allQ.map((x) => x.q), 'ALL');
    auditSeries(allQ.filter((x) => isDeepCase(x.id)).map((x) => x.q), 'ncmhce-D (deep cases)');
    auditSeries(allQ.filter((x) => !isDeepCase(x.id)).map((x) => x.q), 'standard');
    await mongoose.disconnect();
    return;
  }

  const plan = buildPlan(entries);
  printPlan(plan);
  const allSelected = Object.values(plan).flatMap((p) => p.selected);
  console.log('\nTotal planned conversions: ' + allSelected.length);

  if (!GENERATE) {
    console.log('\n' + (PLAN_FLAG ? 'Plan only.' : 'Default: plan only.') + ' --audit for statistics, --generate to produce rewrites, --run for unattended loop.');
    await mongoose.disconnect();
    return;
  }
  if (!resolveApiKey()) { console.error('\nANTHROPIC_API_KEY_CASE_TOOLS / ANTHROPIC_API_KEY not set.'); process.exit(1); }

  const runId = 'rbl-' + Date.now();
  const byCase = {};
  for (const s of allSelected) {
    if (!byCase[s.externalId]) byCase[s.externalId] = [];
    byCase[s.externalId].push(s);
  }
  const caseKeys = Object.keys(byCase).sort();
  const batch = caseKeys.slice(SKIP, SKIP + COUNT);
  if (!batch.length) { console.log('--skip ' + SKIP + ' is past the end; nothing to do.'); await mongoose.disconnect(); return; }
  console.log('\nGenerating rewrites for ' + batch.length + ' of ' + caseKeys.length + ' planned case(s) with model ' + MODEL + ' (' + batch[0] + ' … ' + batch[batch.length - 1] + ')...\n');

  const proposals = { generatedAt: new Date().toISOString(), model: MODEL, cases: [] };
  let fixed = 0;

  for (const externalId of batch) {
    const entry = entries.find((e) => e.externalId === externalId);
    if (!entry) continue;
    const items = byCase[externalId];
    console.log('  ' + externalId + ' (' + items.length + ' question(s))...');
    let reply, apiErr;
    try {
      reply = extractJson(await callAnthropic(buildRebalancePrompt(entry.caseObj, items), { maxTokens: 8000 }));
    } catch (e) {
      console.log('    ERROR: ' + e.message.slice(0, 150));
      await insertAuditDoc(runId, externalId, [], false, [e.message.slice(0, 200)]);
      apiErr = true;
    }
    if (apiErr) continue;

    const byQ = {};
    (reply.questions || []).forEach((r) => { if (r && r.q != null) byQ[Number(r.q)] = r.edits; });

    const mergedByQi = {};
    const proposed = [];
    for (const it of items) {
      const tag = 'q' + (it.qi + 1);
      const edits = byQ[it.qi + 1];
      if (!edits) { console.log('    ' + tag + ': not in reply — skipped'); continue; }
      const merged = mergeRebalanceEdit(it.question, edits, it.conv);
      if (!merged.ok) { console.log('    ' + tag + ': rejected (' + merged.reason + ') ' + merged.detail + ' — skipped'); continue; }
      const failing = checkQuestionQuality(merged.question, tag);
      if (failing.length) { console.log('    ' + tag + ': gate fails: ' + failing.join(' | ') + ' — skipped'); continue; }
      console.log('    ' + tag + ': OK [' + it.conv.type + ']');
      mergedByQi[it.qi] = merged;
      proposed.push({ qi: it.qi, questionId: it.question.id, domain: it.question.domain, question: it.question.question, convType: it.conv.type, before: it.question.options, after: merged.question.options });
      if (!SAVE) { entry.caseObj.questions[it.qi] = merged.question; entry.repairedQis.push(it.qi); }
      fixed++;
    }

    const auditEdits = buildEditsForAudit(items, mergedByQi);
    const applied = !SAVE && proposed.length > 0;
    await insertAuditDoc(runId, externalId, auditEdits, applied, []);

    if (proposed.length) {
      const c = entry.caseObj;
      proposals.cases.push({ externalId, title: c.title, dx: (c.diagnosis && c.diagnosis.name) || (c.primaryDiagnosis && c.primaryDiagnosis.name) || '', questions: proposed });
    }
  }
  console.log('\n' + fixed + ' question(s) rewritten across ' + proposals.cases.length + ' case(s). runId: ' + runId);

  if (SAVE) {
    fs.mkdirSync(path.dirname(path.resolve(SAVE)), { recursive: true });
    fs.writeFileSync(SAVE + '.json', JSON.stringify(proposals, null, 1));
    fs.writeFileSync(SAVE + '.html', renderReviewHtml(proposals));
    const rows = [REBALANCE_CSV_HEADER];
    proposals.cases.forEach((p) => p.questions.forEach((q) => rows.push(...proposalCsvRows(p, q))));
    fs.writeFileSync(SAVE + '.csv', toCsv(rows));
    console.log('Wrote ' + SAVE + '.json/.html/.csv (' + (rows.length - 1) + ' option rows).');
    console.log('After review: --from ' + SAVE + '.json --review ' + SAVE + '.csv [--apply --keep-status]');
    await mongoose.disconnect();
    return;
  }
  if (!APPLY) {
    console.log('Dry run — nothing written. Re-run with --apply to save' + (KEEP_STATUS ? '.' : ' (--keep-status to leave published cases live).'));
    await mongoose.disconnect();
    return;
  }
  await writeRepairs(ContentItem, entries.filter((e) => e.repairedQis.length), { keepStatus: KEEP_STATUS, verb: 'rebalanced key-length on' });
  await mongoose.disconnect();
}

if (require.main === module) main().catch((e) => { console.error(e); process.exit(1); });

module.exports = {
  isDeepCase, hashStr, keyIsLongest, keyIsShortest, canMakeKeyLongest, canClearKeyShortest,
  buildPlan, buildRebalancePrompt, mergeRebalanceEdit, computeSeriesStats,
  SELF_DISQUALIFY, LENGTH_BAND, GATE_RATIO,
};
