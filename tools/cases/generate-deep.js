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
//     --count N    cases to attempt this run (default 2)
//     --per-cat N  target deep cases per category (default 2)
//     --parallel N cases in flight at once (default 3; one long Opus call each)
//     --dry-run    no API, no DB — just show what it would target
//     --publish    import as published instead of sme_review
//
// Each accepted case is imported the moment it passes the gates, so a
// dropped shell loses only the cases in flight; re-running the same command
// continues (targets are recomputed from what is already in the database).
// A billing/auth error stops the run instead of failing every target.
//   nohup node tools/cases/generate-deep.js --count 63 --per-cat 7 --parallel 3 > gen.log 2>&1 &
// ============================================================================

try { require('dotenv').config(); } catch (_) {}
const mongoose = require('mongoose');
const Exam = require('../../models/Exam');
const ContentItem = require('../../models/ContentItem');
const { validateExamDepth, QUESTION_TARGET } = require('./examDepth');
const { ALLOWED_SOURCES } = require('./references');
const bp = require('./blueprint');
const dedup = require('./dedup');
const idAllocator = require('./idAllocator');
const { checkCaseQuality, ITEM_CONSTRUCTION_RULES, STRUCTURAL_PARITY_CHECK } = require('./qualityGate');
const { callAnthropic, extractJson, MODEL } = require('./anthropic');

function flag(n, d) { const i = process.argv.indexOf('--' + n); return i >= 0 && process.argv[i + 1] && !process.argv[i + 1].startsWith('--') ? process.argv[i + 1] : d; }
const COUNT = parseInt(flag('count', '2'), 10);
const PER_CAT = parseInt(flag('per-cat', '2'), 10);
const DRY = process.argv.includes('--dry-run');
const STATUS = process.argv.includes('--publish') ? 'published' : 'sme_review';
const PARALLEL = Math.max(1, parseInt(flag('parallel', '3'), 10) || 1);
const API_KEY = process.env.ANTHROPIC_API_KEY;

// 13 questions on the NCMHCE domain weights (intake 25 / core 15 / treatment 15 /
// counseling 30 / ethics 15 percent of scored items): 3 / 2 / 2 / 4 / 2.
// Sections: Assessment(intake+core)=5, Planning(treatment)=2, Process(counseling+ethics)=6.
const DOMAIN_PLAN = ['intake', 'intake', 'intake', 'core', 'core', 'treatment', 'treatment', 'counseling', 'counseling', 'counseling', 'counseling', 'ethics', 'ethics'];

function deepTargets(deepCases, n) {
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
    .map((c) => ({ category: c, have: have[c], need: Math.max(0, PER_CAT - have[c]), difficulty: diffPools[c][have[c] % diffPools[c].length] }))
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

function buildPrompt(target, exemplar) {
  return `You are an expert psychometrician and NCMHCE item writer. Write a gold-standard deep NCMHCE case simulation.

CASE PARAMETERS:
- Category: "${target.category}"
- Primary diagnosis: "${target.diagnosis.name}"${target.diagnosis.code ? ' (' + target.diagnosis.code + ')' : ''}
- Difficulty: ${target.difficulty}
- The diagnosis is GIVEN to the test-taker; questions test what a competent clinician does next across assessment, treatment planning, counseling skill, and ethics.
- Make the client demographically specific (name, age, race/ethnicity, occupation) and the clinical scenario distinct from common textbook presentations.

${DIFFICULTY_GUIDE}

${ITEM_CONSTRUCTION_RULES}

${SCHEMA}

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

async function main() {
  if (!process.env.MONGO_URI) { console.error('MONGO_URI not set.'); process.exit(1); }
  await mongoose.connect(process.env.MONGO_URI, { dbName: 'passreadyprep' });
  const exam = await Exam.findOneAndUpdate({ key: 'ncmhce' }, { $setOnInsert: { key: 'ncmhce', name: 'National Clinical Mental Health Counseling Examination', profession: 'counseling', board: 'NBCC', formatsSupported: ['case_sim'], status: 'live' } }, { upsert: true, new: true });

  // Every case (any status) feeds dedup and id allocation; only published
  // cases count toward the per-category targets (drafts are retired copies).
  const docs = await ContentItem.find({ examId: exam._id, format: 'case_sim' }).select('externalId status caseSim').lean();
  const all = docs.map((d) => Object.assign({ id: d.externalId, _status: d.status }, d.caseSim || {}));
  const deep = all.filter((c) => (c.questions || []).length >= 11);
  const deepLive = deep.filter((c) => c._status === 'published');
  console.log('Live: ' + all.filter((c) => c._status === 'published').length + ' published cases, ' + deepLive.length + ' deep (' + deep.length + ' deep incl. drafts). Target ' + PER_CAT + ' deep/category.\n');

  const targets = deepTargets(deepLive, COUNT);
  if (!targets.length) { console.log('All categories have ' + PER_CAT + '+ deep cases. Nothing to generate.'); await mongoose.disconnect(); return; }
  console.log('Will attempt ' + targets.length + ' deep case(s) with model ' + MODEL + ':');
  targets.forEach((t, i) => console.log('  ' + (i + 1) + '. ' + t.category + ' / ' + (t.diagnosis && t.diagnosis.name) + ' [' + t.difficulty + ']'));
  if (DRY) { console.log('\n--dry-run: no API calls, no writes.'); await mongoose.disconnect(); return; }
  if (!API_KEY) { console.error('\nANTHROPIC_API_KEY not set.'); process.exit(1); }

  const exemplar = (deep[0] || all[0]);
  let made = 0;
  let finished = 0;
  let fatal = null; // an API error that will hit every target (billing, auth)
  const isFatal = (msg) => /credit balance|billing|API 401|API 403|ANTHROPIC_API_KEY/i.test(msg);
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
    for (let attempt = 0; attempt < 3 && !ok && !fatal; attempt++) {
      try {
        log('  [' + (idx + 1) + '/' + targets.length + '] ' + t.category + ' / ' + t.diagnosis.name + ' [' + t.difficulty + '] (attempt ' + (attempt + 1) + ')...');
        const c = extractJson(await callAnthropic(buildPrompt(t, exemplar), { maxTokens: 48000 }));
        c.category = t.category;
        c.difficulty = c.difficulty || t.difficulty;

        // Gate 1: examDepth structural validation
        const v = validateExamDepth(c);
        if (!v.ok) { log('    FAIL examDepth: ' + v.errors.slice(0, 2).join(' | ')); continue; }

        // Gate 2: gold-standard quality checks (weights, parity, absolutes, mistakes)
        const q = checkCaseQuality(c);
        if (!q.ok) { log('    FAIL quality: ' + q.errors.slice(0, 3).join(' | ')); continue; }

        // Gate 3: dedup against everything live plus cases accepted this run
        const d = dedup.isNearDuplicate(c, livePool, { threshold: 0.55 });
        if (d.dup) { log('    FAIL dedup (too close to ' + d.against + ')'); continue; }

        c.id = nextDeepId(deep);
        deep.push(c); livePool.push(c);
        await ContentItem.updateOne(
          { examId: exam._id, externalId: c.id },
          { $set: { examId: exam._id, format: 'case_sim', externalId: c.id, title: c.title, category: c.category, difficulty: c.difficulty, references: c.references || [], caseSim: c }, $setOnInsert: { status: STATUS } },
          { upsert: true }
        );
        made += 1; ok = true;
        log('    ADD ' + c.id + ' [' + c.category + '] "' + (c.title || '').slice(0, 50) + '" -> ' + STATUS);
      } catch (e) {
        log('    ERROR ' + t.category + ': ' + e.message.slice(0, 150));
        if (isFatal(e.message)) fatal = e.message.slice(0, 150);
      }
    }
    if (!ok && !fatal) log('    SKIP ' + t.category + ' / ' + t.diagnosis.name + ' (3 attempts failed)');
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
  console.log('Generating ' + PARALLEL + ' at a time.\n');
  await Promise.all(Array.from({ length: Math.min(PARALLEL, targets.length) }, worker));

  if (fatal) {
    console.log('\nSTOPPED: the API is rejecting every request — ' + fatal + '\nFix that (credits, key), then re-run the same command; it continues from what is already imported.');
    process.exitCode = 2;
  }
  console.log('\nDone. Imported ' + made + ' deep case(s) as ' + STATUS + '.');
  await mongoose.disconnect();
}
main().catch((e) => { console.error(e); process.exit(1); });
