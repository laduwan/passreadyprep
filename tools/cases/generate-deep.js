#!/usr/bin/env node
// ============================================================================
// generate-deep.js — PERSISTENT deep-case generator (built to run on a schedule).
//
// Designed for a Render Cron Job so the deep bank grows on the server with no
// device kept awake. Each run: finds categories short on DEEP cases, generates
// 13-question / 3-section cases for them, validates against the depth gate +
// dedup, and imports straight into MongoDB as sme_review (for your review).
// Self-limiting: once every category has DEEP_PER_CAT deep cases it generates
// nothing and exits cheaply.
//
//   ANTHROPIC_API_KEY=... MONGO_URI=... node tools/cases/generate-deep.js --count 2
//     (or set ANTHROPIC_API_KEY_CASE_TOOLS instead, to bill this to a separate
//     Console key/workspace from the live server's ANTHROPIC_API_KEY — see
//     tools/cases/anthropic.js)
//     --count N    cases to attempt this run (default 2)
//     --per-cat N  target deep cases per category (default 2)
//     --parallel N cases in flight at once (default 3; one long Opus call each)
//     --total N    keep going, round after round (--count per round), until the
//                  bank has N cases (published + imported this run); raises
//                  --per-cat on its own when every category is already at target
//     --dry-run    no API, no DB — just show what it would target
//     --publish    import as published instead of sme_review
//
//     --run [--target N] [--resume <runId>]
//                  standard unattended contract: same round loop as --total
//                  (target defaults to 10 when --total is not also given —
//                  pass --total instead of/with --target for a bigger run),
//                  plus one generationaudit doc per target attempted this
//                  run (status: applied/skipped/error) and a stopping rule
//                  distinct from --total's plain "round imported nothing":
//                  if every target in a round errors on API credits, the run
//                  stops instead of continuing to spend attempts. --resume
//                  <runId> reuses that id for the audit trail across a
//                  restarted run — the natural "recompute targets from the
//                  DB" behavior below already makes re-running idempotent.
//
// Each accepted case is imported the moment it passes the gates, so a
// dropped shell loses only the cases in flight; re-running the same command
// continues (targets are recomputed from what is already in the database).
// A billing/auth error stops the run instead of failing every target. A
// credit-balance/rate-limit/5xx error on one target's attempt is retried
// with backoff before that attempt is counted as failed.
//   nohup node tools/cases/generate-deep.js --total 250 --count 20 --per-cat 7 --parallel 3 --publish > gen.log 2>&1 &
//   nohup node tools/cases/generate-deep.js --run --target 250 --count 20 --per-cat 7 --parallel 3 --publish > gen.log 2>&1 &
// ============================================================================

try { require('dotenv').config(); } catch (_) {}
const mongoose = require('mongoose');
const Exam = require('../../models/Exam');
const ContentItem = require('../../models/ContentItem');
const { validateExamDepth, QUESTION_TARGET } = require('./examDepth');
const { ALLOWED_SOURCES } = require('./references');
const bp = require('./blueprint');
const bp2027 = require('./blueprint2027');
const dedup = require('./dedup');
const idAllocator = require('./idAllocator');
const { checkCaseQuality, ITEM_CONSTRUCTION_RULES, STRUCTURAL_PARITY_CHECK } = require('./qualityGate');
const { callAnthropic, extractJson, MODEL, resolveApiKey } = require('./anthropic');

function flag(n, d) { const i = process.argv.indexOf('--' + n); return i >= 0 && process.argv[i + 1] && !process.argv[i + 1].startsWith('--') ? process.argv[i + 1] : d; }
const COUNT = parseInt(flag('count', '2'), 10);
const PER_CAT = parseInt(flag('per-cat', '2'), 10);
const DRY = process.argv.includes('--dry-run');
const STATUS = process.argv.includes('--publish') ? 'published' : 'sme_review';
const PARALLEL = Math.max(1, parseInt(flag('parallel', '3'), 10) || 1);
const RUN_MODE = process.argv.includes('--run');
const RESUME_RUN_ID = flag('resume', null);
const TARGET = parseInt(flag('target', '10'), 10) || 10;
// --total is the pre-existing flag for "keep going until the bank has N
// cases"; --run's standardized name for the same idea is --target, default
// 10. Either sets it; --total wins if both are given (back-compat for
// existing invocations); --run alone (no --total) falls back to --target.
const TOTAL = (parseInt(flag('total', '0'), 10) || 0) || (RUN_MODE ? TARGET : 0);
const SPEC = flag('spec', 'current'); // 'current' or '2027'
const API_KEY = resolveApiKey(); // ANTHROPIC_API_KEY_CASE_TOOLS if set, else ANTHROPIC_API_KEY

// 13 questions on the NCMHCE domain weights (intake 25 / core 15 / treatment 15 /
// counseling 30 / ethics 15 percent of scored items): 3 / 2 / 2 / 4 / 2.
// Sections: Assessment(intake+core)=5, Planning(treatment)=2, Process(counseling+ethics)=6.
const DOMAIN_PLAN = ['intake', 'intake', 'intake', 'core', 'core', 'treatment', 'treatment', 'counseling', 'counseling', 'counseling', 'counseling', 'ethics', 'ethics'];

// Running case index used for 2027 plan rotation (module-level so multiple
// generateOne calls within a run each get a different plan).
let _plan2027Index = 0;

function deepTargets(deepCases, n, perCat = PER_CAT) {
  const have = {};
  bp.CATEGORY_NAMES.forEach((c) => (have[c] = 0));
  deepCases.forEach((c) => { if (c.category in have) have[c.category] += 1; });
  const cfgOf = (cat) => bp.CATEGORIES ? bp.CATEGORIES.find((x) => x.category === cat) : null;
  const diffPools = {};
  bp.CATEGORY_NAMES.forEach((c) => {
    const cfg = cfgOf(c);
    const pool = [];
    for (const [d, k] of Object.entries((cfg && cfg.difficulty) || { medium: 1 })) for (let i = 0; i < k; i++) pool.push(d);
    diffPools[c] = pool.length ? pool : ['medium'];
  });
  const order = bp.CATEGORY_NAMES
    .map((c) => ({ category: c, have: have[c], need: Math.max(0, perCat - have[c]), difficulty: diffPools[c][have[c] % diffPools[c].length] }))
    .filter((x) => x.need > 0)
    .sort((a, b) => a.have - b.have);
  const out = [];
  const plannedDx = {};
  let i = 0;
  while (out.length < n && order.length) {
    const slot = order[i % order.length];
    i += 1;
    if (i > n + order.length * 2) break;
    if (out.filter((t) => t.category === slot.category).length >= slot.need) continue;
    const cfg = cfgOf(slot.category) || { diagnoses: [{ name: slot.category, code: '' }], difficulty: { medium: 1 } };
    const usedDx = deepCases.filter((c) => c.category === slot.category).map((c) => (c.primaryDiagnosis || {}).name).concat(plannedDx[slot.category] || []);
    const dxs = cfg.diagnoses || [];
    // Prefer a diagnosis this category has no deep case on; then the one used least.
    const dx = dxs.find((d) => !usedDx.includes(d.name)) || dxs.slice().sort((a, b) => usedDx.filter((x) => x === a.name).length - usedDx.filter((x) => x === b.name).length)[0];
    (plannedDx[slot.category] = plannedDx[slot.category] || []).push(dx && dx.name);
    const k = out.filter((t) => t.category === slot.category).length;
    out.push({ category: slot.category, diagnosis: dx, difficulty: diffPools[slot.category][(have[slot.category] + k) % diffPools[slot.category].length] });
  }
  return out;
}

// ============================================================================
// GOLD-STANDARD GENERATION PROMPT
// ============================================================================

const SCHEMA = `Return ONE JSON object only (no markdown, no prose) shaped exactly like the EXAMPLE.
Keys: id, title, category, difficulty, primaryDiagnosis{name,code}, diagnosis{name,code},
differentialOptions[{id,name,isCorrect}], narrative{intake,session1,session2},
diagnosticRationale, questions[], references[].

HARD REQUIREMENTS:
- EXACTLY 13 questions. Their "domain" values, in order q1..q13, MUST be: ${DOMAIN_PLAN.join(', ')}.
- Each question: 4 options with weights exactly {3, 0, -1, -2} (one of each).
- Every option has: id, text, isCorrect (true only for weight 3), weight, rationale (short label).
- Every option has: explanation:{approach (8+ chars), rationale (full sentence), keyIndicators:[..], commonMistake (20+ chars)}.
- Each question carries "evidenceRef":["R1",..] pointing at references[].id.
- "references" entries use ONLY these source names: ${ALLOWED_SOURCES.join('; ')}.
- narrative.intake + session1 + session2 are three escalating clinical sections.
- Output ONLY the JSON object.`;

function buildSchema2027(plan) {
  const domainSeq = plan.map((item) => `${item.domain}(section:${item.section})`).join(', ');
  const domainNames = Object.entries(bp2027.DOMAIN_LABELS_2027).map(([k, v]) => `  ${k}: ${v}`).join('\n');
  const workTaskLines = Object.entries(bp2027.WORK_TASKS_2027)
    .map(([d, tasks]) => `  ${d}: ${tasks.slice(0, 3).join('; ')}`)
    .join('\n');
  return `Return ONE JSON object only (no markdown, no prose) shaped exactly like the EXAMPLE.
Keys: id, title, category, difficulty, primaryDiagnosis{name,code}, diagnosis{name,code},
differentialOptions[{id,name,isCorrect}], narrative{intake,session1,session2},
diagnosticRationale, questions[], references[].

HARD REQUIREMENTS (2027 NCMHCE specification):
- EXACTLY 13 questions. In order q1..q13 each question must have BOTH a "domain" AND a "section" field.
  The domain+section for each question in order MUST be: ${domainSeq}.
- Sections unfold in order: intake (clinical intake / assessment) → session1 (treatment planning) → session2 (counseling interventions and ethics).
  narrative.intake, narrative.session1, narrative.session2 are three escalating clinical sections of the case.
- 2027 domain names and typical work tasks:
${domainNames}
Work task examples per domain:
${workTaskLines}
- Each question: 4 options with weights exactly {3, 0, -1, -2} (one of each).
- Every option has: id, text, isCorrect (true only for weight 3), weight, rationale (short label).
- Every option has: explanation:{approach (8+ chars), rationale (full sentence), keyIndicators:[..], commonMistake (20+ chars)}.
- Each question carries "evidenceRef":["R1",..] pointing at references[].id.
- "references" entries use ONLY these source names: ${ALLOWED_SOURCES.join('; ')}.
- Make the client and scenario demographically diverse and distinct from previous cases in your training.
- Output ONLY the JSON object.`;
}

const DIFFICULTY_GUIDE = `DIFFICULTY — this is not about how rare the diagnosis is. It is about how much
the case HIDES.

EASY
  One clear presentation. The diagnosis is the obvious read and the differential
  is textbook. No comorbidity. No medical rule-out. No treatment-sequencing trap.
  The safety picture is unambiguous. A competent counselor gets every item right
  on a first read. Distractors are plausible but clearly inferior.

MEDIUM
  One or two complications. A comorbidity that changes the treatment plan, OR a
  differential requiring a specific discriminator, OR a sequencing decision.
  A competent counselor gets most items right but has to slow down on two or three.

HARD
  The case buries its decisive facts. A medical cause presented as a psychiatric
  one. A safety disclosure inside a reassurance. A treatment that is correct for
  the diagnosis and wrong for this client at this point. Two or more of these,
  interacting. The candidate must sequence correctly, not just identify correctly.

Write the case AT THE ASSIGNED DIFFICULTY. Do not escalate. An easy case that you
have made "interesting" by adding a comorbidity is no longer an easy case.`;

function buildPrompt(target, exemplar, spec, plan) {
  const schema = spec === '2027' ? buildSchema2027(plan) : SCHEMA;
  const specNote = spec === '2027'
    ? '- This case is for the 2027 NCMHCE specification. Use the 2027 domain labels and section structure above.'
    : '- The diagnosis is GIVEN to the test-taker; questions test what a competent clinician does next across assessment, treatment planning, counseling skill, and ethics.';
  return `You are an expert psychometrician and NCMHCE item writer. Write a gold-standard deep NCMHCE case simulation.

CASE PARAMETERS:
- Category: "${target.category}"
- Primary diagnosis: "${target.diagnosis.name}"${target.diagnosis.code ? ' (' + target.diagnosis.code + ')' : ''}
- Difficulty: ${target.difficulty}
${specNote}
- Make the client demographically specific (name, age, race/ethnicity, occupation) and the clinical scenario distinct from common textbook presentations.

${DIFFICULTY_GUIDE}

${ITEM_CONSTRUCTION_RULES}

${schema}

${STRUCTURAL_PARITY_CHECK}

EXAMPLE (different diagnosis — match this structure, depth, and item quality exactly):
${JSON.stringify(exemplar, null, 1)}

Now output ONLY the JSON for the requested case.`;
}

// ============================================================================
// API + MAIN
// ============================================================================

function nextDeepId(deepCases) {
  const existing = deepCases.map((c) => c.id || c.externalId).filter(Boolean);
  return idAllocator.next(existing, { prefix: 'D' });
}

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

function auditColl() {
  return mongoose.connection.collection('generationaudit');
}

async function insertAuditDoc(runId, externalId, spec, status, edits, errors) {
  try {
    await auditColl().insertOne({ runId, ts: new Date(), externalId, spec, status, edits, errors: errors || [] });
  } catch (e) {
    console.log('  [audit] warn: ' + externalId + ': ' + e.message.slice(0, 80));
  }
}

async function main() {
  if (!process.env.MONGO_URI) { console.error('MONGO_URI not set.'); process.exit(1); }
  await mongoose.connect(process.env.MONGO_URI, { dbName: 'passreadyprep' });

  const examKey = SPEC === '2027' ? 'ncmhce-2027' : 'ncmhce';
  const exam = SPEC === '2027'
    ? await Exam.findOne({ key: 'ncmhce-2027' })
    : await Exam.findOneAndUpdate({ key: 'ncmhce' }, { $setOnInsert: { key: 'ncmhce', name: 'National Clinical Mental Health Counseling Examination', profession: 'counseling', board: 'NBCC', formatsSupported: ['case_sim'], status: 'live' } }, { upsert: true, new: true });
  if (!exam) { console.error('Exam record "' + examKey + '" not found. Run seed-exam-2027.js first.'); process.exit(1); }

  // Every case (any status) feeds dedup and id allocation; only published
  // cases count toward the per-category targets (drafts are retired copies).
  const docs = await ContentItem.find({ examId: exam._id, format: 'case_sim' }).select('externalId status caseSim').lean();
  const all = docs.map((d) => Object.assign({ id: d.externalId, _status: d.status }, d.caseSim || {}));
  const deep = all.filter((c) => (c.questions || []).length >= 11);
  // deepLive: published deep cases plus everything imported this run (any
  // status), so a round never re-targets a category/diagnosis it just filled.
  const deepLive = deep.filter((c) => c._status === 'published');
  const publishedAtStart = all.filter((c) => c._status === 'published').length;
  console.log('Spec: ' + (SPEC === '2027' ? 'ncmhce-2027 (2027 NCMHCE specification)' : 'ncmhce (current)'));
  console.log('Live: ' + publishedAtStart + ' published cases, ' + deepLive.length + ' deep (' + deep.length + ' deep incl. drafts). Target ' + PER_CAT + ' deep/category' + (TOTAL ? ', ' + TOTAL + ' cases in total' : '') + '.\n');

  let made = 0;
  let perCat = PER_CAT;
  // With --total, each round is at most COUNT and never overshoots the total.
  const roundSize = () => (TOTAL ? Math.max(0, Math.min(COUNT, TOTAL - (publishedAtStart + made))) : COUNT);
  function planRound() {
    let t = deepTargets(deepLive, roundSize(), perCat);
    // Every category at target but the bank is still short: raise the bar.
    while (TOTAL && !t.length && roundSize() > 0 && perCat < PER_CAT + 50) { perCat += 1; t = deepTargets(deepLive, roundSize(), perCat); }
    return t;
  }
  let targets = planRound();
  if (!targets.length) {
    console.log(TOTAL && roundSize() <= 0 ? 'The bank already has ' + (publishedAtStart + made) + ' cases (target ' + TOTAL + '). Nothing to generate.' : 'All categories have ' + perCat + '+ deep cases. Nothing to generate.');
    await mongoose.disconnect(); return;
  }
  if (perCat !== PER_CAT) console.log('(every category already has ' + PER_CAT + '+ deep cases; using ' + perCat + ' per category to reach ' + TOTAL + ')');
  console.log('Will attempt ' + targets.length + ' deep case(s) with model ' + MODEL + (TOTAL ? ' this round' : '') + ':');
  targets.forEach((t, i) => console.log('  ' + (i + 1) + '. ' + t.category + ' / ' + (t.diagnosis && t.diagnosis.name) + ' [' + t.difficulty + ']'));
  if (DRY) { console.log('\n--dry-run: no API calls, no writes.'); await mongoose.disconnect(); return; }
  if (!API_KEY) { console.error('\nANTHROPIC_API_KEY_CASE_TOOLS / ANTHROPIC_API_KEY not set.'); process.exit(1); }

  const exemplar = (deep[0] || all[0]);
  let finished = 0;
  let fatal = null; // an API error that will hit every target (billing, auth)
  let roundCreditErrors = 0; // --run only: targets this round that exhausted retries on a credit/rate-limit error
  const isFatal = (msg) => /credit balance|billing|API 401|API 403|ANTHROPIC_API_KEY/i.test(msg);
  // --run splits isFatal's two cases apart: an auth/key problem still stops
  // the whole run immediately (retrying with a bad key wastes nothing but
  // time); a credit-balance/rate-limit/server error gets retried with
  // backoff first, and only stops the run once every target in a round has
  // exhausted its retries the same way (see the round loop below).
  const isAuthFatal = (msg) => /API 401|API 403|ANTHROPIC_API_KEY/i.test(msg);
  const isCreditRetriable = (msg) => /credit balance|billing|429|rate.?limit|5\d\d|503|overloaded/i.test(msg);
  const runId = RESUME_RUN_ID || ('gen-' + Date.now());
  const livePool = all.slice();
  const startedAt = Date.now();

  // One target: up to 3 attempts. Output is buffered per target so parallel
  // targets don't interleave. Id allocation and the pool/deep pushes happen
  // synchronously after the gates, before the DB write, so two in-flight
  // targets can never take the same id or miss each other in dedup.
  async function generateOne(t, idx) {
    const out = [];
    const log = (l) => out.push(l);
    let ok = false;
    let newId = null;
    let lastCreditErr = null;
    // Claim this plan slot synchronously before any await so parallel workers
    // don't share the same plan index.
    const planIdx = _plan2027Index++;
    const plan = SPEC === '2027' ? bp2027.nextPlan2027(planIdx) : null;
    for (let attempt = 0; attempt < 3 && !ok && !fatal; attempt++) {
      try {
        log('  [' + (idx + 1) + '/' + targets.length + '] ' + t.category + ' / ' + t.diagnosis.name + ' [' + t.difficulty + '] (attempt ' + (attempt + 1) + ')...');
        const c = extractJson(await callAnthropic(buildPrompt(t, exemplar, SPEC, plan), { maxTokens: 48000 }));
        c.category = t.category;
        c.difficulty = c.difficulty || t.difficulty;

        // Gate 1: examDepth structural validation
        const v = validateExamDepth(c, { spec: SPEC });
        if (!v.ok) { log('    FAIL examDepth: ' + v.errors.slice(0, 2).join(' | ')); continue; }

        // Gate 2: gold-standard quality checks (weights, parity, absolutes, mistakes)
        const q = checkCaseQuality(c);
        if (!q.ok) { log('    FAIL quality: ' + q.errors.slice(0, 3).join(' | ')); continue; }

        // Gate 3: dedup against everything live plus cases accepted this run
        const d = dedup.isNearDuplicate(c, livePool, { threshold: 0.55 });
        if (d.dup) { log('    FAIL dedup (too close to ' + d.against + ')'); continue; }

        c.id = nextDeepId(deep);
        c._status = STATUS;
        deep.push(c); livePool.push(c); deepLive.push(c);
        await ContentItem.updateOne(
          { examId: exam._id, externalId: c.id },
          { $set: { examId: exam._id, format: 'case_sim', externalId: c.id, title: c.title, category: c.category, difficulty: c.difficulty, references: c.references || [], caseSim: c }, $setOnInsert: { status: STATUS } },
          { upsert: true }
        );
        made += 1; ok = true; newId = c.id;
        log('    ADD ' + c.id + ' [' + c.category + '] "' + (c.title || '').slice(0, 50) + '" -> ' + STATUS);
      } catch (e) {
        log('    ERROR ' + t.category + ': ' + e.message.slice(0, 150));
        if (!RUN_MODE) {
          if (isFatal(e.message)) fatal = e.message.slice(0, 150);
        } else if (isAuthFatal(e.message)) {
          fatal = e.message.slice(0, 150);
        } else if (isCreditRetriable(e.message)) {
          lastCreditErr = e.message.slice(0, 150);
          if (attempt < 2) {
            const backoffMs = [1000, 3000][attempt] || 3000;
            log('    retrying in ' + backoffMs + 'ms...');
            await sleep(backoffMs);
          }
        }
      }
    }
    if (!ok && !fatal) log('    SKIP ' + t.category + ' / ' + t.diagnosis.name + ' (3 attempts failed)');
    if (RUN_MODE) {
      const auditId = newId || (t.category + ' / ' + (t.diagnosis && t.diagnosis.name));
      const status = ok ? 'applied' : (fatal ? 'error' : (lastCreditErr ? 'error' : 'skipped'));
      if (!ok && !fatal && lastCreditErr) roundCreditErrors += 1;
      await insertAuditDoc(runId, auditId, SPEC, status, ok ? 1 : 0, fatal ? [fatal] : (lastCreditErr ? [lastCreditErr] : []));
    }
    return out;
  }

  let next = 0;
  async function worker() {
    while (next < targets.length && !fatal) {
      const idx = next++;
      const out = await generateOne(targets[idx], idx);
      finished += 1;
      console.log(out.join('\n'));
      console.log('    -- ' + finished + '/' + targets.length + ' target(s) done, ' + made + ' imported, after ' + ((Date.now() - startedAt) / 60000).toFixed(1) + ' min\n');
    }
  }
  if (RUN_MODE) console.log('--run (runId: ' + runId + ', target: ' + TOTAL + (RESUME_RUN_ID ? ', resumed' : '') + ')');
  console.log('Generating ' + PARALLEL + ' at a time.\n');
  let round = 1;
  for (; ; round++) {
    if (round > 1) {
      targets = planRound();
      if (!targets.length) { console.log(roundSize() <= 0 ? '\nReached ' + TOTAL + ' cases.' : '\nNo categories left to fill.'); break; }
      if (perCat !== PER_CAT) console.log('(using ' + perCat + ' deep per category to reach ' + TOTAL + ')');
      console.log('=== Round ' + round + ': ' + targets.length + ' target(s); bank at ' + (publishedAtStart + made) + '/' + TOTAL + ' ===');
      targets.forEach((t, i) => console.log('  ' + (i + 1) + '. ' + t.category + ' / ' + (t.diagnosis && t.diagnosis.name) + ' [' + t.difficulty + ']'));
    }
    next = 0; finished = 0; roundCreditErrors = 0;
    const madeBefore = made;
    await Promise.all(Array.from({ length: Math.min(PARALLEL, targets.length) }, worker));
    if (RUN_MODE && !fatal && targets.length > 0 && roundCreditErrors === targets.length) {
      fatal = 'every target in round ' + round + ' errored on API credits';
    }
    if (fatal || !TOTAL) break;
    if (made === madeBefore) { console.log('\nThis round imported nothing (every target failed its 3 attempts) — stopping rather than loop. Re-run the same command to try again.'); break; }
  }

  if (fatal) {
    console.log('\nSTOPPED: the API is rejecting every request — ' + fatal + '\nFix that (credits, key), then re-run the same command; it continues from what is already imported.');
    process.exitCode = 2;
  }
  console.log('\nDone. Imported ' + made + ' deep case(s) as ' + STATUS + '.' + (TOTAL ? ' Bank: ' + (publishedAtStart + made) + ' cases (target ' + TOTAL + ').' : ''));
  if (RUN_MODE) {
    const remaining = TOTAL ? Math.max(0, TOTAL - (publishedAtStart + made)) : 0;
    console.log('\n════ RUN SUMMARY ════');
    console.log('runId: ' + runId + ' | rounds: ' + round);
    console.log('applied: ' + made + ' | remaining toward target: ' + remaining);
    console.log('════════════════════');
  }
  await mongoose.disconnect();
}
main().catch((e) => { console.error(e); process.exit(1); });
