#!/usr/bin/env node
// ============================================================================
// generateCases.js — Blueprint-driven NCMHCE case generator (BYOK)
// NCMHCE Prep Platform | GA Integrated Therapeutic Perspectives LLC
//
// Generates validated, dual-mode cases via the Anthropic API to grow the bank
// toward 200, filling the gaps the blueprint identifies. Resumable, dedup-aware,
// and every case is schema-validated before it is kept.
//
// Usage:
//   ANTHROPIC_API_KEY=sk-... node generateCases.js --batch 10
//   node generateCases.js --batch 4 --dry-run      # no API, tests the pipeline
//   node generateCases.js --batch 10 --existing ./my-cases-1-70.js
//
// Flags:
//   --batch N        how many cases to generate this run (default 10)
//   --dry-run        synthesize schema-valid placeholder cases (no API calls)
//   --existing FILE  also count cases from FILE toward coverage (repeatable)
//   --out FILE       output module (default ./generated-cases.js)
//   --model NAME     Anthropic model (default claude-sonnet-4-6)
//
// Output: a CommonJS module exporting GENERATED_CASES (array), appended across
// runs so you can build to 200 in batches.
// ============================================================================

const fs = require('fs');
const path = require('path');
const { validateCase } = require('./caseSchema');
const bp = require('./blueprint');
const { SEED_CASES } = require('./seed-cases');
const { REFERENCE_LIBRARY, ALLOWED_SOURCES } = require('./references');
const dedup = require('./dedup');

// ---- args -------------------------------------------------------------------
const args = process.argv.slice(2);
function flag(name, def) {
  const i = args.indexOf('--' + name);
  if (i === -1) return def;
  const v = args[i + 1];
  return (v && !v.startsWith('--')) ? v : true;
}
const BATCH = parseInt(flag('batch', '10'), 10);
const DRY_RUN = !!flag('dry-run', false);
const OUT = path.resolve(String(flag('out', './generated-cases.js')));
const MODEL = String(flag('model', 'claude-sonnet-4-6'));
const DUP_THRESHOLD = parseFloat(flag('dup-threshold', '0.55'));
const MAX_RETRIES = 2;
const API_KEY = process.env.ANTHROPIC_API_KEY;
const existingFiles = args.reduce((acc, a, i) => (a === '--existing' && args[i + 1] ? acc.concat(args[i + 1]) : acc), []);

// ---- load existing coverage --------------------------------------------------
function safeRequireCases(file) {
  try {
    const m = require(path.resolve(file));
    const arr = m.GENERATED_CASES || m.SEED_CASES || m.ADDITIONAL_CLINICAL_CASES || m.CASES ||
      (Array.isArray(m) ? m : null);
    return Array.isArray(arr) ? arr : [];
  } catch (e) {
    console.warn('  (could not load ' + file + ': ' + e.message + ')');
    return [];
  }
}

let generated = fs.existsSync(OUT) ? safeRequireCases(OUT) : [];
const externalExisting = existingFiles.flatMap(safeRequireCases);
const allExisting = [...SEED_CASES, ...generated, ...externalExisting];

console.log('Existing coverage:');
const tally = bp.tally(allExisting);
console.log('  total cases counted: ' + tally.total + ' / ' + bp.TOTAL_TARGET +
  (tally.unmatched ? ('  (' + tally.unmatched + ' uncategorized)') : ''));
const needTotal = bp.gaps(allExisting).reduce((s, g) => s + g.need, 0);
console.log('  still needed to hit 200: ' + needTotal);

const targets = bp.nextTargets(allExisting, Math.min(BATCH, needTotal));
if (targets.length === 0) {
  console.log('\nNothing to generate — blueprint targets are already met. Done.');
  process.exit(0);
}
console.log('\nThis run will generate ' + targets.length + ' case(s):');
targets.forEach((t, i) => console.log('  ' + (i + 1) + '. ' + t.category + ' / ' + t.diagnosis.name + ' / ' + t.difficulty));

// ---- id allocation -----------------------------------------------------------
function nextIdNum(cases) {
  let max = 30; // start G-ids after the existing case1-case70 corpus
  for (const c of cases) {
    const m = /ncmhce-G(\d+)/.exec(c && c.id || '');
    if (m) max = Math.max(max, parseInt(m[1], 10));
  }
  return max + 1;
}
let idNum = nextIdNum(allExisting);

// ---- prompt construction -----------------------------------------------------
const SCHEMA_SPEC = `Return ONE JSON object (no markdown, no prose) with EXACTLY this shape:
{
  "id": string,                       // leave as "TBD"; the script assigns it
  "title": string,                    // short, plain clinical title (no diagnosis name)
  "category": string,                 // use the provided category verbatim
  "difficulty": "easy"|"medium"|"hard",
  "primaryDiagnosis": { "name": string, "code": string },   // use provided dx + ICD-10
  "diagnosis": { "name": string, "code": string },          // identical to primaryDiagnosis
  "differentialOptions": [ { "id": string, "name": string, "isCorrect": boolean } ], // 3-4; exactly ONE isCorrect (the given dx)
  "narrative": { "intake": string, "session1": string, "session2": string }, // realistic, unfolding; 3-5 sentences each
  "diagnosticRationale": string,      // why this dx; what it is NOT (name the key rule-outs)
  "references": [                      // 2-4 governing sources for this case
    { "id": "R1", "source": string,    // source MUST be chosen from the APPROVED SOURCES list below (verbatim)
      "detail": string }               // the SPECIFIC criterion / guideline recommendation applied
  ],
  "questions": [                      // EXACTLY 5 questions; use the assigned domain order
    {
      "id": "q1",
      "domain": "treatment"|"counseling"|"intake"|"ethics"|"core",
      "question": string,
      "evidenceRef": ["R1"],          // 1+ reference id(s) from references[] that justify the KEYED answer
      "options": [                    // EXACTLY 4 options; exactly ONE isCorrect
        {
          "id": "a", "text": string, "isCorrect": boolean,
          "weight": 3,                // correct option = 3; distractors = 0, -1, or -2 by how wrong
          "rationale": string,        // one concise line
          "explanation": {
            "approach": string, "rationale": string,
            "keyIndicators": [string], "commonMistake": string
          }
        }
      ]
    }
  ]
}

APPROVED SOURCES (use these exact strings for "source"; never invent a source):
${ALLOWED_SOURCES.map((s) => '  - ' + s).join('\n')}`;

const SYSTEM = `You are a senior LPC and NCMHCE item writer. You write clinically accurate, DSM-5-TR-aligned exam cases that test clinical REASONING (assessment, treatment planning, counseling skill, ethics) given the diagnosis. The diagnosis is GIVEN to the test-taker; questions focus on what a competent clinician does next.
Rules:
- Exactly 5 questions, each with exactly 4 options and exactly ONE correct answer (weight 3). Distractors get weight 0, -1, or -2 reflecting how clinically wrong they are.
- Weight the 5 questions to the NCMHCE domains: Counseling Skills/Interventions is the heaviest area, followed by Intake/Assessment, then Treatment Planning, with Ethics or Core Attributes. Assign the question domains EXACTLY in the order given in the user prompt.
- Reflect client diversity and culturally responsive practice in every case (per the diversity note in the user prompt). Make at least one option in the case hinge on culturally responsive judgment, and never stereotype or pathologize cultural difference.
- Make distractors plausible and instructive; each option needs a teaching explanation.
- OPTION BALANCE (critical — no test-wiseness cues): all four options must be parallel in length, grammar, and specificity. The correct answer must NOT be the longest, most detailed, or most hedged option — write fuller, genuinely tempting distractors and keep the key the same length and style as them. Vary which option is correct across questions; never default the answer to the first option.
- DOCUMENTARY EVIDENCE: ground every case in 2-4 authoritative sources, drawn ONLY from the APPROVED SOURCES list in the user prompt (use the exact source string). Put the specific criterion or guideline recommendation in each reference "detail". Give every question an evidenceRef naming the reference id(s) that justify the KEYED (correct) answer. Never cite a source that is not on the approved list, and never invent page numbers or study names.
- Safety first: if risk is present, the safe action is the correct one.
- For eating-disorder or self-harm content, stay at the level of diagnosis, medical risk, level of care, and evidence-based treatment. NEVER include weights, calorie figures, restriction methods, or any how-to detail that could enable harm.
- Output ONLY the JSON object. No markdown fences, no commentary.`;

// Question-domain plan weighted to the NCMHCE: Counseling/Interventions heaviest,
// then Intake/Assessment, then Treatment, with Ethics/Core alternating per case.
function domainPlanFor(i) {
  const fifth = (i % 2 === 0) ? 'ethics' : 'core';
  return ['counseling', 'counseling', 'intake', 'treatment', fifth];
}

// Rotating client-diversity contexts so cultural responsiveness is exercised
// across the bank. These shape realistic, varied presentations (not tokenized).
const DIVERSITY_HINTS = [
  'an older African American client; consider cultural mistrust of providers and faith/community supports',
  'a Spanish-dominant Latina client; consider language access, acculturation, and family roles',
  'an LGBTQ+ client; consider minority stress and affirming, non-pathologizing care',
  'a first-generation immigrant client; consider acculturative stress and stigma about mental health',
  'a rural, low-income client; consider access barriers, transportation, and telehealth',
  'a military veteran; consider service culture, stigma, and care coordination',
  'an Asian American client; consider somatic expression of distress and family expectations',
  'an Indigenous/Native American client; consider historical trauma and community-based healing',
  'a client with a physical disability; consider accessibility and avoiding ableist assumptions',
  'an observant religious client; consider integrating faith without the clinician imposing values',
];

function buildUserPrompt(target, exemplar, domainPlan, diversityHint, angle, avoidSummaries) {
  const avoidBlock = (avoidSummaries && avoidSummaries.length)
    ? `\n- AVOID duplicating these existing "${target.diagnosis.name}" scenarios already in the bank. Make the client profile (age, gender, setting) AND the decision focus clearly different from each:\n${avoidSummaries.map((s) => '    • ' + s).join('\n')}`
    : '';
  return `Write one NCMHCE case for:
- category: ${target.category}
- diagnosis (GIVEN): ${target.diagnosis.name} (${target.diagnosis.code})
- difficulty: ${target.difficulty}
- assign the 5 question domains EXACTLY in this order (q1..q5): ${domainPlan.join(', ')}
- client diversity: write the client as ${diversityHint}. Include at least one option (correct or distractor) that turns on culturally responsive judgment. Do not stereotype.
- clinical angle for THIS case: ${angle}. Build the scenario and questions around this decision focus.${avoidBlock}

${SCHEMA_SPEC}

Here is a correctly-formatted EXAMPLE case (different diagnosis) to match in structure and depth:
${JSON.stringify(exemplar, null, 1)}

Now produce the JSON for the requested case. Make it a distinct scenario. Output ONLY the JSON object.`;
}

// pick an exemplar of a different category when possible
function pickExemplar(target) {
  const diff = SEED_CASES.find((c) => c.category !== target.category);
  return diff || SEED_CASES[0];
}

// ---- Anthropic call ----------------------------------------------------------
async function callAnthropic(userPrompt) {
  const res = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'x-api-key': API_KEY,
      'anthropic-version': '2023-06-01',
    },
    body: JSON.stringify({
      model: MODEL,
      max_tokens: 4500,
      system: SYSTEM,
      messages: [{ role: 'user', content: userPrompt }],
    }),
  });
  if (!res.ok) throw new Error('API ' + res.status + ': ' + (await res.text()).slice(0, 300));
  const data = await res.json();
  return (data.content || []).filter((b) => b.type === 'text').map((b) => b.text).join('\n');
}

function parseCase(text) {
  let t = text.trim().replace(/^```(json)?/i, '').replace(/```$/, '').trim();
  const first = t.indexOf('{');
  const last = t.lastIndexOf('}');
  if (first > 0 || last < t.length - 1) t = t.slice(first, last + 1);
  return JSON.parse(t);
}

// ---- dry-run synthesizer (no API) -------------------------------------------
function synthCase(target, domainPlan, angle) {
  const dx = target.diagnosis;
  const plan = domainPlan || ['counseling', 'counseling', 'intake', 'treatment', 'ethics'];
  const opt = (id, text, correct, weight) => ({
    id, text, isCorrect: correct, weight,
    rationale: correct ? 'Best-supported clinical choice for this presentation.' : 'Less appropriate than the keyed answer.',
    explanation: {
      approach: correct ? 'Match the intervention to the presentation.' : 'Reconsider the clinical fit.',
      rationale: correct ? 'Aligns with evidence-based practice for ' + dx.name + '.' : 'Does not best fit ' + dx.name + ' here.',
      keyIndicators: ['placeholder indicator A', 'placeholder indicator B'],
      commonMistake: correct ? 'Choosing a less indicated alternative.' : 'Selecting this plausible-but-wrong option.',
    },
  });
  const q = (n, domain) => ({
    id: 'q' + n, domain,
    question: 'Placeholder ' + domain + ' question ' + n + ' for ' + dx.name + ' (dry-run).',
    evidenceRef: ['R1'],
    options: [opt('a', 'Keyed correct action', true, 3), opt('b', 'Plausible distractor', false, 0),
      opt('c', 'Less appropriate action', false, -1), opt('d', 'Clearly wrong action', false, -2)],
  });
  return {
    id: 'TBD', title: 'Dry-run placeholder: ' + dx.name + (angle ? ' [' + angle.split(' ')[0] + ']' : ''), category: target.category, difficulty: target.difficulty,
    primaryDiagnosis: { name: dx.name, code: dx.code }, diagnosis: { name: dx.name, code: dx.code },
    differentialOptions: [
      { id: 'correct', name: dx.name, isCorrect: true },
      { id: 'alt1', name: 'Plausible alternative diagnosis', isCorrect: false },
      { id: 'alt2', name: 'Second alternative diagnosis', isCorrect: false },
    ],
    narrative: {
      intake: 'Dry-run intake narrative for ' + dx.name + '. This placeholder is long enough to pass the minimum-length validator check and stands in for real generated content.',
      session1: 'Dry-run session-one narrative elaborating the presentation of ' + dx.name + ' with enough detail to satisfy the validator length requirement for this segment.',
      session2: 'Dry-run session-two narrative describing progress and a clinical decision point for ' + dx.name + ', again long enough to satisfy the validator.',
    },
    diagnosticRationale: 'Dry-run rationale: criteria for ' + dx.name + ' are met; key rule-outs would be named here in a real case.',
    references: [{ id: 'R1', source: 'DSM-5-TR', detail: 'Dry-run placeholder: diagnostic criteria for ' + dx.name + '.' }],
    questions: plan.map((d, k) => q(k + 1, d)),
  };
}

// ---- generate one (with retries) --------------------------------------------
async function generateOne(target, idx, corpus) {
  const domainPlan = domainPlanFor(idx);
  const diversityHint = DIVERSITY_HINTS[idx % DIVERSITY_HINTS.length];
  // Same-diagnosis cases already in the bank: rotate the clinical angle past them
  // and feed their summaries to the model as scenarios to avoid.
  const sameDx = (corpus || []).filter((e) => e && e.diagnosis && e.diagnosis.name === target.diagnosis.name);
  const angle = dedup.angleForCount(sameDx.length);
  const avoidSummaries = sameDx.slice(-6).map(dedup.scenarioSummary);
  for (let attempt = 0; attempt <= MAX_RETRIES; attempt++) {
    try {
      const c = DRY_RUN
        ? synthCase(target, domainPlan, angle)
        : parseCase(await callAnthropic(buildUserPrompt(target, pickExemplar(target), domainPlan, diversityHint, angle, avoidSummaries)));
      c.id = 'ncmhce-G' + String(idNum).padStart(3, '0');
      c.category = target.category; // enforce blueprint category
      const v = validateCase(c, { categories: bp.CATEGORY_NAMES, allowedSources: ALLOWED_SOURCES, strictItemQuality: true });
      if (!v.ok) { console.warn('    attempt ' + (attempt + 1) + ' invalid: ' + v.errors.slice(0, 3).join(' | ')); continue; }
      if (!DRY_RUN) {
        const dup = dedup.isNearDuplicate(c, corpus || [], { threshold: DUP_THRESHOLD });
        if (dup.dup) { console.warn('    attempt ' + (attempt + 1) + ' near-duplicate of ' + dup.against + ' (text ' + dup.textScore.toFixed(2) + '); regenerating'); continue; }
      }
      idNum++;
      return c;
    } catch (e) {
      console.warn('    attempt ' + (attempt + 1) + ' error: ' + e.message);
    }
  }
  return null;
}

// ---- write -------------------------------------------------------------------
function writeOut(allGenerated) {
  const header = `// AUTO-GENERATED by generateCases.js — NCMHCE case bank
// ${allGenerated.length} cases. Re-run with --batch N to add more (resumable).
// Validate any time:  node validateCases.js ${path.basename(OUT)}
const GENERATED_CASES = ${JSON.stringify(allGenerated, null, 2)};
if (typeof module !== 'undefined' && module.exports) { module.exports = { GENERATED_CASES }; }
if (typeof window !== 'undefined') { window.GENERATED_CASES = GENERATED_CASES; }
`;
  fs.writeFileSync(OUT, header);
}

// ---- main --------------------------------------------------------------------
(async () => {
  if (!DRY_RUN && !API_KEY) {
    console.error('\nNo ANTHROPIC_API_KEY set. Either export it, or use --dry-run to test the pipeline.');
    process.exit(1);
  }
  console.log('\nGenerating (' + (DRY_RUN ? 'DRY-RUN, no API' : 'model ' + MODEL) + ')...\n');
  let made = 0;
  const startCount = generated.length; // stable rotation offset across resumed runs
  for (let i = 0; i < targets.length; i++) {
    const t = targets[i];
    process.stdout.write('  -> ' + t.diagnosis.name + ' ... ');
    const corpus = [...SEED_CASES, ...externalExisting, ...generated];
    const c = await generateOne(t, startCount + i, corpus);
    if (c) { generated.push(c); made++; writeOut(generated); console.log('ok (' + c.id + ')'); }
    else console.log('FAILED after retries (skipped)');
  }
  console.log('\nDone. Added ' + made + ' case(s). Bank now at ' + generated.length + ' generated + ' +
    SEED_CASES.length + ' seed = ' + (generated.length + SEED_CASES.length) + ' toward 200.');
  console.log('Output: ' + OUT);
})();
