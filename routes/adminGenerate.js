const express = require('express');
const requireAdmin = require('../middleware/adminAuth');
const ContentItem = require('../models/ContentItem');
const Exam = require('../models/Exam');

// Reuse the same modules the CLI generator uses
const bp = require('../tools/cases/blueprint');
const { validateCase } = require('../tools/cases/caseSchema');
const { ALLOWED_SOURCES } = require('../tools/cases/references');
const { SEED_CASES } = require('../tools/cases/seed-cases');
const dedup = require('../tools/cases/dedup');

const router = express.Router();
router.use(requireAdmin);

// ── Schema spec (identical to generateCases.js) ─────────────────────
const SCHEMA_SPEC = `Return ONE JSON object (no markdown, no prose) with EXACTLY this shape:
{
  "id": string,
  "title": string,
  "category": string,
  "difficulty": "easy"|"medium"|"hard",
  "primaryDiagnosis": { "name": string, "code": string },
  "diagnosis": { "name": string, "code": string },
  "differentialOptions": [ { "id": string, "name": string, "isCorrect": boolean } ],
  "narrative": { "intake": string, "session1": string, "session2": string },
  "diagnosticRationale": string,
  "references": [
    { "id": "R1", "source": string, "detail": string }
  ],
  "questions": [
    {
      "id": "q1",
      "domain": "treatment"|"counseling"|"intake"|"ethics"|"core",
      "question": string,
      "evidenceRef": ["R1"],
      "options": [
        {
          "id": "a", "text": string, "isCorrect": boolean,
          "weight": 3,
          "rationale": string,
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
- OPTION BALANCE (critical — items are rejected if the key is detectable by surface cues): write all four options to the SAME visual weight. Aim for each option in the 12-22 word range and within ~20% of each other in length, with parallel grammar and equal specificity. Every distractor must be a fully formed, genuinely tempting action a partially-prepared clinician might pick. The keyed answer must NOT be the longest, most detailed, or most hedged option. Each distractor must be wrong for a specific, nameable reason stated in its rationale. Vary which option (a/b/c/d) is correct from question to question.
- DOCUMENTARY EVIDENCE: ground every case in 2-4 authoritative sources, drawn ONLY from the APPROVED SOURCES list. Put the specific criterion or guideline recommendation in each reference "detail". Give every question an evidenceRef naming the reference id(s) that justify the KEYED (correct) answer.
- Safety first: if risk is present, the safe action is the correct one.
- For eating-disorder or self-harm content, stay at the level of diagnosis, medical risk, level of care, and evidence-based treatment. NEVER include weights, calorie figures, restriction methods, or any how-to detail.
- SELF-CHECK before output: for every question verify (1) exactly one option has isCorrect=true and weight 3; (2) the correct option is NOT the longest of the four; (3) all four options read as parallel, plausible clinical actions of similar length. Rewrite any question that fails.
- Output ONLY the JSON object. No markdown fences, no commentary.`;

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

// ── Helpers ──────────────────────────────────────────────────────────

function domainPlanFor(seed) {
  const fifth = (seed % 2 === 0) ? 'ethics' : 'core';
  return ['counseling', 'counseling', 'intake', 'treatment', fifth];
}

function pickExemplar(category) {
  const diff = SEED_CASES.find((c) => c.category !== category);
  return diff || SEED_CASES[0];
}

async function nextExternalId() {
  // Find the highest G-numbered case already in the DB
  const latest = await ContentItem.find({ externalId: /^ncmhce-G/ })
    .sort({ externalId: -1 })
    .limit(1)
    .select('externalId')
    .lean();
  let max = 30; // start after the manually-authored case corpus
  if (latest.length) {
    const m = /ncmhce-G(\d+)/.exec(latest[0].externalId);
    if (m) max = Math.max(max, parseInt(m[1], 10));
  }
  return 'ncmhce-G' + String(max + 1).padStart(3, '0');
}

function parseCase(text) {
  let t = text.trim().replace(/^```(json)?/i, '').replace(/```$/, '').trim();
  const first = t.indexOf('{');
  const last = t.lastIndexOf('}');
  if (first >= 0 && last > first) t = t.slice(first, last + 1);
  return JSON.parse(t);
}

// ── GET /api/admin/generate/blueprint — returns categories + diagnoses for the UI
router.get('/blueprint', (_req, res) => {
  const cats = bp.CATEGORIES.map((c) => ({
    category: c.category,
    target: c.target,
    diagnoses: c.diagnoses,
    difficulty: c.difficulty,
  }));
  res.json({ categories: cats });
});

// ── GET /api/admin/generate/coverage — returns current case counts vs targets
router.get('/coverage', async (_req, res) => {
  try {
    const dbCases = await ContentItem.find({})
      .select('externalId category caseSim')
      .lean();
    const casesList = dbCases.map((d) => ({
      id: d.externalId,
      category: d.category || (d.caseSim && d.caseSim.category),
    }));
    const allCases = [...SEED_CASES.map((c) => ({ id: c.id, category: c.category })), ...casesList];
    const gapData = bp.gaps(allCases);
    const t = bp.tally(allCases);
    res.json({ total: t.total, target: bp.TOTAL_TARGET, gaps: gapData });
  } catch (err) {
    console.error('coverage error', err);
    res.status(500).json({ error: 'Could not compute coverage' });
  }
});

// ── POST /api/admin/generate — generate a new case via Anthropic API
router.post('/', async (req, res) => {
  const { category, difficulty, diagnosisName, diagnosisCode, apiKey } = req.body || {};

  if (!apiKey) return res.status(400).json({ error: 'Anthropic API key is required' });
  if (!category || !bp.CATEGORY_NAMES.includes(category))
    return res.status(400).json({ error: 'Invalid category' });
  if (!['easy', 'medium', 'hard'].includes(difficulty))
    return res.status(400).json({ error: 'Difficulty must be easy, medium, or hard' });
  if (!diagnosisName || !diagnosisCode)
    return res.status(400).json({ error: 'Diagnosis name and code are required' });

  try {
    // Assemble context
    const seed = Date.now();
    const domainPlan = domainPlanFor(seed);
    const diversityHint = DIVERSITY_HINTS[seed % DIVERSITY_HINTS.length];
    const exemplar = pickExemplar(category);

    // Gather existing same-dx cases to avoid duplication
    const dbSameDx = await ContentItem.find({ 'caseSim.diagnosis.name': diagnosisName })
      .select('caseSim')
      .lean();
    const sameDxCases = dbSameDx.map((d) => d.caseSim).filter(Boolean);
    const angle = dedup.angleForCount(sameDxCases.length);
    const avoidSummaries = sameDxCases.slice(-6).map(dedup.scenarioSummary);

    const avoidBlock = avoidSummaries.length
      ? `\n- AVOID duplicating these existing "${diagnosisName}" scenarios already in the bank. Make the client profile (age, gender, setting) AND the decision focus clearly different from each:\n${avoidSummaries.map((s) => '    • ' + s).join('\n')}`
      : '';

    const userPrompt = `Write one NCMHCE case for:
- category: ${category}
- diagnosis (GIVEN): ${diagnosisName} (${diagnosisCode})
- difficulty: ${difficulty}
- assign the 5 question domains EXACTLY in this order (q1..q5): ${domainPlan.join(', ')}
- client diversity: write the client as ${diversityHint}. Include at least one option (correct or distractor) that turns on culturally responsive judgment. Do not stereotype.
- clinical angle for THIS case: ${angle}. Build the scenario and questions around this decision focus.${avoidBlock}

${SCHEMA_SPEC}

Here is a correctly-formatted EXAMPLE case (different diagnosis) to match in structure and depth:
${JSON.stringify(exemplar, null, 1)}

Now produce the JSON for the requested case. Make it a distinct scenario. Output ONLY the JSON object.`;

    // Call Anthropic
    const apiRes = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-6',
        max_tokens: 16000,
        system: SYSTEM,
        messages: [{ role: 'user', content: userPrompt }],
      }),
    });

    if (!apiRes.ok) {
      const errText = await apiRes.text().catch(() => '');
      return res.status(502).json({
        error: 'Anthropic API error (' + apiRes.status + ')',
        detail: errText.slice(0, 500),
      });
    }

    const apiData = await apiRes.json();
    const rawText = (apiData.content || [])
      .filter((b) => b.type === 'text')
      .map((b) => b.text)
      .join('\n');

    // Parse + validate
    let caseObj;
    try {
      caseObj = parseCase(rawText);
    } catch (parseErr) {
      return res.status(422).json({ error: 'Could not parse JSON from model response', raw: rawText.slice(0, 1000) });
    }

    const externalId = await nextExternalId();
    caseObj.id = externalId;
    caseObj.category = category; // enforce blueprint category

    const v = validateCase(caseObj, { categories: bp.CATEGORY_NAMES, allowedSources: ALLOWED_SOURCES, strictItemQuality: false });
    if (!v.ok) {
      return res.status(422).json({
        error: 'Generated case failed validation',
        validationErrors: v.errors.slice(0, 10),
        warnings: v.warnings.slice(0, 5),
        casePreview: { title: caseObj.title, category: caseObj.category },
      });
    }

    // Get or create NCMHCE exam
    let exam = await Exam.findOne({ key: 'ncmhce' });
    if (!exam) {
      exam = await Exam.create({ key: 'ncmhce', name: 'NCMHCE', profession: 'counseling', board: 'NBCC', formatsSupported: ['case_sim'], status: 'live' });
    }

    // Save to DB
    const doc = await ContentItem.findOneAndUpdate(
      { examId: exam._id, externalId },
      {
        $set: {
          examId: exam._id,
          externalId,
          format: 'case_sim',
          title: caseObj.title,
          category: caseObj.category,
          difficulty: caseObj.difficulty,
          references: caseObj.references || [],
          status: 'sme_review',
          caseSim: caseObj,
        },
      },
      { upsert: true, new: true }
    );

    return res.json({
      externalId: doc.externalId,
      title: doc.title,
      category: doc.category,
      difficulty: doc.difficulty,
      status: doc.status,
      questionCount: (caseObj.questions || []).length,
      warnings: v.warnings,
    });
  } catch (err) {
    console.error('generate error', err);
    return res.status(500).json({ error: 'Generation failed: ' + err.message });
  }
});

module.exports = router;
