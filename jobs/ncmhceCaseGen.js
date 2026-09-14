/**
 * Copyright (c) 2026 CounselorReady, a subsidiary of Ga Integrated Therapeutic Perspectives, LLC.
 * All rights reserved. Proprietary and confidential.
 *
 * NCMHCE Deep-Case Generator
 *
 * Picks the next spec from NCMHCE_CASE_SPECS that has not yet been generated,
 * calls the Claude API to produce an original clinical simulation as strict
 * JSON, validates and length-balances the answer options, and saves the result
 * as a DRAFT NcmhceCase for admin review. NEVER auto-publishes.
 *
 * Why this exists: an earlier generator failed because LLMs systematically make
 * the correct option longer and more detailed than the distractors, so a
 * length-balance validator rejected most cases and nothing was saved. This
 * version fixes that three ways and ALWAYS saves a draft (flagged if needed):
 *   1. Prompt-level instruction to keep all options similar in length/specificity.
 *   2. Deterministic distractor-lengthening — pads shorter distractors with
 *      neutral, non-answer-signaling clauses to equalize the length signal.
 *   3. A per-question LLM repair pass for questions that are still imbalanced
 *      or structurally broken after the deterministic step (bounded retries).
 *
 * Scheduled via node-cron — see server.js or a scheduler wrapper.
 * Schedule: daily at 4 AM ET (0 4 * * *, America/New_York). One case per run.
 * Can also be triggered on demand via POST /api/ncmhce-cases/generate (admin).
 *
 * NOTE: Output is ORIGINAL practice material, not real exam content. NCMHCE(R)
 * is a registered trademark of NBCC; CounselorReady is not affiliated with,
 * endorsed by, or sponsored by NBCC.
 *
 * Environment variables:
 *   ANTHROPIC_API_KEY    — required
 *   NCMHCE_GEN_MODEL     — optional, defaults to claude-haiku-4-5-20251001
 */

const NcmhceCase = require('../models/NcmhceCase');
const { NCMHCE_CASE_SPECS } = require('../data/ncmhceCaseQueue');

const LOG = '[NcmhceCaseGen]';
const ANTHROPIC_API_URL = 'https://api.anthropic.com/v1/messages';
const DEFAULT_MODEL = 'claude-haiku-4-5-20251001';

const LENGTH_RATIO_MAX = 1.20;
const MAX_LLM_REPAIRS   = 4;
const FILLER_CAP        = 3;

const NEUTRAL_FILLERS = [
  'based on the information currently available',
  'as part of the broader clinical picture',
  'given the client’s presentation in this session',
  'while remaining attentive to the therapeutic relationship',
  'consistent with the agency’s standard intake procedures'
];

// ── Claude call ──────────────────────────────────────────────────────────────

async function callClaude(systemPrompt, userPrompt, maxTokens = 8000) {
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) throw new Error('ANTHROPIC_API_KEY not configured');

  const model = process.env.NCMHCE_GEN_MODEL || DEFAULT_MODEL;

  const response = await fetch(ANTHROPIC_API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': apiKey,
      'anthropic-version': '2023-06-01'
    },
    body: JSON.stringify({
      model,
      max_tokens: maxTokens,
      system: systemPrompt,
      messages: [{ role: 'user', content: userPrompt }]
    })
  });

  if (!response.ok) {
    const errText = await response.text().catch(() => 'unknown');
    throw new Error(`Claude API error (${response.status}): ${errText}`);
  }

  const data = await response.json();
  return data.content?.filter(b => b.type === 'text').map(b => b.text).join('\n') || '';
}

// ── Prompts ──────────────────────────────────────────────────────────────────

function buildSystemPrompt() {
  return `You are a clinical content author creating ORIGINAL practice simulations for PassReady Prep, in the style of the NCMHCE (clinical mental health counseling case simulations). The author of record is Kejuiana Johnson, LPC, NCC, CPCS, BC-TMH.

These are practice materials only — NOT real exam items. Do not reproduce or paraphrase any actual exam content. NCMHCE is a registered trademark of the National Board for Certified Counselors (NBCC); never imply affiliation with or endorsement by NBCC.

PSYCHOMETRIC SCORING FRAMEWORK — every case and every question must be built against this framework. This is the standard the platform scores candidates against.

WEIGHT GRADIENT — each question must have exactly one option at each tier:
+3  KEY           The clinically correct action at this point. Advances safety, alliance, or accurate formulation.
0   Near-miss     Reasonable but mistimed, incomplete, or secondary. Does not harm but does not advance optimally.
-1  Common error  A novice error — sequencing error, criterion confusion, premature intervention.
-2  Harmful error Risks client welfare, violates ethics, reverses a diagnostic criterion, or constitutes scope/abandonment violation.

PRIORITY LADDER — the case narrative must embed cues at multiple rungs. Questions must test the candidate's ability to identify and respond to the highest-priority rung available.
Rung 1  Imminent safety              Suicidality, homicidality, abuse, danger — nothing else happens first.
Rung 2  Medical/substance rule-outs  Could this be organic? Substances? Rule out before diagnosing.
Rung 3  Stabilization                Acute symptom relief, grounding, crisis reduction.
Rung 4  Alliance and validation      Before any intervention, the client must feel heard.
Rung 5  Clarify the picture          Assessment, history, collateral info.
Rung 6  Evidence-based treatment     The right modality for the right diagnosis.
Rung 7  Ethics throughout            Confidentiality, mandated reporting, competence — woven into every rung.

QUESTION CONSTRUCTION RULES (derived from the framework above):
- Each question must test exactly one rung of the Priority Ladder.
- The KEY option (+3) is the action that correctly addresses the highest-priority rung available at that moment in the case.
- The near-miss (0) is a correct-domain action that is mistimed — it would be appropriate at a different rung or later in the sequence.
- The common error (-1) is a predictable novice mistake: most often a sequencing error (treating before assessing), a criterion confusion, or a premature intervention.
- The harmful error (-2) must represent a genuine risk: a safety rung violation, an ethical breach, a scope-of-practice violation, or an action that actively harms the client.
- A test-taker must NOT be able to identify the correct answer by its length, detail, or hedging. All four options must be similar in length and specificity.
- For self-harm, suicide, or eating-disorder content: model safe, responsible practice. Never include specific methods, weights, or calorie figures in any option.

WHAT QUESTIONS MUST TEST (score against these behaviors — not diagnostic accuracy alone):
- Response to the highest-priority rung available
- Correct clinical sequence (validate before challenge, assess before diagnose, stabilize before process, rule out medical/substance before confirming psychiatric diagnosis)
- Detection of buried verbal cues (safety-relevant, alliance-relevant, or diagnostic)
- Scope-of-practice boundaries

WHAT QUESTIONS MUST NOT TEST:
- Diagnostic accuracy alone — the diagnosis is provided in the working diagnosis field
- Tone, affect, or nonverbal style
- Rapport-building style unless warmth is absent when required

Clinical standards:
- Use DSM-5-TR terminology and accurate, current clinical reasoning.
- Build a realistic, internally consistent case.

Output format:
- Return ONLY valid JSON. No prose, no explanation, no Markdown, no code fences.
- The JSON must exactly match this shape:
{
  "title": string,
  "difficulty": "foundational" | "intermediate" | "advanced",
  "vignette": {
    "clientDescription": string,
    "presentingConcern": string,
    "background": string,
    "mentalStatusExam": string
  },
  "diagnosis": { "primary": string, "differentials": string[] },
  "sections": [
    {
      "type": "information_gathering" | "decision_making",
      "prompt": string,
      "options": [ { "text": string, "isCorrect": boolean, "rationale": string } ]
    }
  ],
  "references": string[]
}
- Provide 4 to 6 sections, alternating between "information_gathering" and "decision_making".
- Each section must have 5 or 6 options, of which 2 or 3 are correct (isCorrect:true) and the rest are plausible distractors.
- Every option must include a brief rationale explaining why it is or is not appropriate.
- CRITICAL — vary correct option position: do NOT consistently place isCorrect:true on the first or second option. Distribute the correct option(s) across all positions within each section.`;
}

function buildUserPrompt(spec) {
  return `Create one original NCMHCE-style clinical simulation.

Content area: ${spec.contentArea}
Difficulty: ${spec.difficulty}
Client: ${spec.population}
Intended primary diagnosis direction: ${spec.diagnosisHint}
Case brief: ${spec.brief}

Build a realistic vignette, a clear primary diagnosis with 2-4 differentials, and 4-6 alternating sections (information_gathering and decision_making) as specified. Remember the length-balance rule: correct and incorrect options must be similar in length and specificity. Return ONLY the JSON object.`;
}

function buildRepairPrompt(section) {
  return `Rewrite the answer options for the following ${section.type.replace('_', ' ')} question so that correct and incorrect options are similar in length and specificity, and the correct answer is NOT the longest or most detailed. Keep the same clinical meaning and the same set of correct answers. Each option needs a brief rationale.

Question prompt: ${section.prompt}

Current options:
${section.options.map((o, i) => `${i + 1}. [${o.isCorrect ? 'CORRECT' : 'distractor'}] ${o.text}`).join('\n')}

Return ONLY valid JSON (no prose, no code fences) of the form:
{ "options": [ { "text": string, "isCorrect": boolean, "rationale": string } ] }`;
}

// ── Position variance ─────────────────────────────────────────────────────────
// LLMs tend to place isCorrect:true options near the top without explicit
// instruction. This rotates the correct option to a deterministic position
// based on question index so correct answers are evenly distributed across
// positions A/B/C/D across the full question set.
function shuffleOptionPositions(sections) {
  if (!Array.isArray(sections)) return sections;
  let qGlobal = 0;
  return sections.map(section => {
    const opts = [...(section.options || [])];
    const correctIdx = opts.findIndex(o => o.isCorrect);
    if (correctIdx === -1 || opts.length < 2) { qGlobal++; return section; }
    const targetPos = qGlobal % opts.length;
    qGlobal++;
    if (targetPos === correctIdx) return section;
    const newOpts = [...opts];
    [newOpts[correctIdx], newOpts[targetPos]] = [newOpts[targetPos], newOpts[correctIdx]];
    return { ...section, options: newOpts };
  });
}

// ── Parsing ──────────────────────────────────────────────────────────────────

function parseJsonLoose(raw) {
  let s = String(raw || '').trim();
  s = s.replace(/^```(?:json)?/i, '').replace(/```$/i, '').trim();
  if (s[0] !== '{') {
    const first = s.indexOf('{');
    const last = s.lastIndexOf('}');
    if (first !== -1 && last !== -1 && last > first) s = s.slice(first, last + 1);
  }
  return JSON.parse(s);
}

// ── Length-balance validator ─────────────────────────────────────────────────

function wordLen(str) {
  return String(str || '').trim().split(/\s+/).filter(Boolean).length;
}

function analyzeSection(section) {
  const opts = section.options || [];
  const correct = opts.filter(o => o.isCorrect);
  const incorrect = opts.filter(o => !o.isCorrect);
  const mean = arr => (arr.length ? arr.reduce((a, o) => a + wordLen(o.text), 0) / arr.length : 0);
  const cMean = mean(correct);
  const iMean = mean(incorrect);
  const ratio = iMean ? +(cMean / iMean).toFixed(2) : 1;

  let longest = opts[0] || { text: '', isCorrect: false };
  for (const o of opts) if (wordLen(o.text) > wordLen(longest.text)) longest = o;
  const longestIsCorrect = !!longest.isCorrect;

  const structurallyOk =
    opts.length >= 4 && correct.length >= 1 && incorrect.length >= 1 &&
    opts.every(o => o.text && typeof o.isCorrect === 'boolean');

  const balanced = ratio <= LENGTH_RATIO_MAX && !(longestIsCorrect && correct.length === 1 && opts.length >= 4);

  return { cMean: +cMean.toFixed(1), iMean: +iMean.toFixed(1), ratio, longestIsCorrect, structurallyOk, balanced };
}

// ── Deterministic distractor-lengthening ─────────────────────────────────────

function balanceSectionDeterministic(section) {
  let changed = false;
  const fillerCount = {};
  for (let pass = 0; pass < 12; pass++) {
    const a = analyzeSection(section);
    if (a.balanced) break;
    const distractors = section.options
      .map((o, idx) => ({ o, idx }))
      .filter(x => !x.o.isCorrect)
      .sort((x, y) => wordLen(x.o.text) - wordLen(y.o.text));
    if (!distractors.length) break;
    const target = distractors[0];
    const used = fillerCount[target.idx] || 0;
    if (used >= FILLER_CAP) {
      const next = distractors.find(d => (fillerCount[d.idx] || 0) < FILLER_CAP);
      if (!next) break;
      next.o.text = appendFiller(next.o.text, NEUTRAL_FILLERS[(fillerCount[next.idx] || 0) % NEUTRAL_FILLERS.length]);
      fillerCount[next.idx] = (fillerCount[next.idx] || 0) + 1;
    } else {
      target.o.text = appendFiller(target.o.text, NEUTRAL_FILLERS[used % NEUTRAL_FILLERS.length]);
      fillerCount[target.idx] = used + 1;
    }
    changed = true;
  }
  return changed;
}

function appendFiller(text, clause) {
  const t = String(text || '').trim().replace(/[.\s]+$/, '');
  return `${t}, ${clause}.`;
}

// ── Per-question LLM repair ──────────────────────────────────────────────────

async function repairSectionWithLLM(section) {
  const raw = await callClaude(
    'You rewrite multiple-choice clinical options to be length-balanced. Return only JSON.',
    buildRepairPrompt(section),
    1500
  );
  const parsed = parseJsonLoose(raw);
  if (Array.isArray(parsed.options) && parsed.options.length >= 4) {
    section.options = parsed.options.map(o => ({
      text: String(o.text || '').trim(),
      isCorrect: !!o.isCorrect,
      rationale: String(o.rationale || '').trim()
    }));
    return true;
  }
  return false;
}

// ── Normalize a parsed case into the model shape ─────────────────────────────

function normalizeCase(parsed, spec) {
  const sections = (parsed.sections || []).map((s, i) => {
    const options = (s.options || []).map(o => ({
      text: String(o.text || '').trim(),
      isCorrect: !!o.isCorrect,
      rationale: String(o.rationale || '').trim()
    }));
    return {
      order: i + 1,
      type: s.type === 'decision_making' ? 'decision_making' : 'information_gathering',
      prompt: String(s.prompt || '').trim(),
      selectCount: Math.max(1, options.filter(o => o.isCorrect).length),
      options
    };
  });

  return {
    title: String(parsed.title || spec.diagnosisHint).trim(),
    difficulty: ['foundational', 'intermediate', 'advanced'].includes(parsed.difficulty) ? parsed.difficulty : spec.difficulty,
    contentArea: spec.contentArea,
    vignette: {
      clientDescription: String(parsed.vignette?.clientDescription || '').trim(),
      presentingConcern: String(parsed.vignette?.presentingConcern || '').trim(),
      background:        String(parsed.vignette?.background || '').trim(),
      mentalStatusExam:  String(parsed.vignette?.mentalStatusExam || '').trim()
    },
    diagnosis: {
      primary: String(parsed.diagnosis?.primary || spec.diagnosisHint).trim(),
      differentials: Array.isArray(parsed.diagnosis?.differentials) ? parsed.diagnosis.differentials.map(String) : []
    },
    sections: shuffleOptionPositions(sections),
    references: Array.isArray(parsed.references) ? parsed.references.map(String) : []
  };
}

// ── Validate + repair the whole case ─────────────────────────────────────────

async function validateAndRepair(caseObj) {
  const flags = [];
  let repaired = 0;
  let llmRepairsLeft = MAX_LLM_REPAIRS;
  const report = [];

  for (const section of caseObj.sections) {
    let a = analyzeSection(section);

    if (!a.balanced && a.structurallyOk) {
      if (balanceSectionDeterministic(section)) repaired++;
      a = analyzeSection(section);
    }

    if ((!a.balanced || !a.structurallyOk) && llmRepairsLeft > 0) {
      try {
        const ok = await repairSectionWithLLM(section);
        if (ok) {
          llmRepairsLeft--;
          repaired++;
          balanceSectionDeterministic(section);
          a = analyzeSection(section);
        }
      } catch (err) {
        flags.push(`section ${section.order}: repair call failed (${err.message})`);
      }
    }

    if (!a.structurallyOk) flags.push(`section ${section.order}: structural issue (options/correct counts)`);
    if (!a.balanced) flags.push(`section ${section.order}: length still imbalanced (ratio ${a.ratio})`);

    section.selectCount = Math.max(1, section.options.filter(o => o.isCorrect).length);
    report.push({ order: section.order, ...a });
  }

  if (caseObj.sections.length < 3) flags.push('fewer than 3 sections');
  if (!caseObj.vignette.presentingConcern) flags.push('missing presenting concern');
  if (!caseObj.diagnosis.primary) flags.push('missing primary diagnosis');

  const lengthBalanced = report.every(r => r.balanced);
  const passed = lengthBalanced && flags.length === 0;

  return { passed, lengthBalanced, repairedQuestions: repaired, flags, report };
}

// ── Spec selection + id allocation ───────────────────────────────────────────

async function selectNextSpec() {
  const existing = await NcmhceCase.find({ specId: { $exists: true, $ne: '' } })
    .select('specId createdAt').sort({ createdAt: 1 }).lean();
  const usedIds = new Set(existing.map(c => c.specId));

  const fresh = NCMHCE_CASE_SPECS.find(s => !s.retired && !usedIds.has(s.id));
  if (fresh) return fresh;

  if (existing.length === 0) return NCMHCE_CASE_SPECS[0];
  const oldest = NCMHCE_CASE_SPECS.find(s => s.id === existing[0].specId);
  return oldest || NCMHCE_CASE_SPECS[0];
}

async function nextCaseId() {
  const count = await NcmhceCase.estimatedDocumentCount();
  let n = count + 1;
  while (true) {
    const id = `ncmhce-D${String(n).padStart(3, '0')}`;
    const exists = await NcmhceCase.exists({ caseId: id });
    if (!exists) return id;
    n++;
  }
}

// ── Main runner ───────────────────────────────────────────────────────────────

async function runNcmhceCaseGen() {
  console.log(`${LOG} Starting NCMHCE case generation run...`);
  const stats = { spec: null, caseId: null, saved: false, passed: false, repaired: 0, flags: [], error: null };

  try {
    const spec = await selectNextSpec();
    stats.spec = spec.id;
    console.log(`${LOG} Selected spec: "${spec.id}" (${spec.contentArea}, ${spec.difficulty})`);

    const model = process.env.NCMHCE_GEN_MODEL || DEFAULT_MODEL;
    console.log(`${LOG} Calling Claude (${model})...`);
    const raw = await callClaude(buildSystemPrompt(), buildUserPrompt(spec));

    let parsed;
    try {
      parsed = parseJsonLoose(raw);
    } catch (err) {
      throw new Error(`Could not parse case JSON: ${err.message}`);
    }

    const caseObj = normalizeCase(parsed, spec);
    if (!caseObj.sections.length) throw new Error('Model returned no sections');

    const validation = await validateAndRepair(caseObj);
    stats.passed = validation.passed;
    stats.repaired = validation.repairedQuestions;
    stats.flags = validation.flags;

    const caseId = await nextCaseId();
    stats.caseId = caseId;

    // ALWAYS save as a draft — flagged cases are still created for human review,
    // never silently discarded. Publishing is a separate manual admin action.
    const doc = new NcmhceCase({
      caseId,
      title: caseObj.title,
      status: 'draft',
      difficulty: caseObj.difficulty,
      contentArea: caseObj.contentArea,
      vignette: caseObj.vignette,
      diagnosis: caseObj.diagnosis,
      sections: caseObj.sections,
      references: caseObj.references,
      validation: {
        passed: validation.passed,
        lengthBalanced: validation.lengthBalanced,
        repairedQuestions: validation.repairedQuestions,
        flags: validation.flags,
        report: validation.report
      },
      generatedBy: 'ncmhceCaseGen',
      model,
      specId: spec.id
    });

    await doc.save();
    stats.saved = true;

    console.log(
      `${LOG} Draft saved: ${caseId} "${caseObj.title}" — ` +
      `${caseObj.sections.length} sections, validation ${validation.passed ? 'PASSED' : 'FLAGGED'}, ` +
      `${validation.repairedQuestions} question(s) balanced` +
      (validation.flags.length ? `, flags: ${validation.flags.join('; ')}` : '')
    );
  } catch (err) {
    stats.error = err.message;
    console.error(`${LOG} Error:`, err.message);
  }

  console.log(`${LOG} Complete:`, stats);
  return stats;
}

module.exports = { runNcmhceCaseGen };
