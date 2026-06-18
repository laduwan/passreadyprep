#!/usr/bin/env node
// ============================================================================
// autofill.js — CLI batch case generator targeting blueprint gaps
// Usage: MONGO_URI=... ANTHROPIC_API_KEY=sk-ant-... node tools/cases/autofill.js [count]
// Default: generates 20 cases, targeting categories with biggest gaps first
// ============================================================================

const mongoose = require('mongoose');
const { CATEGORIES } = require('./blueprint');
const { validateCase } = require('./caseSchema');

const MONGO_URI = process.env.MONGO_URI;
const API_KEY = process.env.ANTHROPIC_API_KEY;
const COUNT = parseInt(process.argv[2]) || 20;

if (!MONGO_URI) { console.error('Set MONGO_URI'); process.exit(1); }
if (!API_KEY) { console.error('Set ANTHROPIC_API_KEY'); process.exit(1); }

const contentSchema = new mongoose.Schema({
  exam: String, type: String, externalId: String, title: String,
  category: String, difficulty: String, status: String,
  caseSim: mongoose.Schema.Types.Mixed,
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
}, { collection: 'contents' });

const Content = mongoose.model('Content', contentSchema);

const SYSTEM = `You are a clinical case writer for an NCMHCE exam prep platform. Generate a single clinical mental health counseling case in valid JSON. The case must follow this exact structure:

{
  "id": "ncmhce-AUTO-XXX",
  "title": "Short descriptive clinical title",
  "category": "CATEGORY",
  "difficulty": "DIFFICULTY",
  "primaryDiagnosis": { "name": "Full DSM-5-TR diagnosis name", "code": "ICD-10 code" },
  "diagnosis": { "name": "Same as primaryDiagnosis.name", "code": "Same code" },
  "differentialOptions": [
    { "id": "a", "name": "Correct diagnosis", "isCorrect": true },
    { "id": "b", "name": "Plausible differential 1", "isCorrect": false },
    { "id": "c", "name": "Plausible differential 2", "isCorrect": false },
    { "id": "d", "name": "Plausible differential 3", "isCorrect": false }
  ],
  "narrative": {
    "intake": "2-3 paragraph intake summary with demographics, presenting problem, history...",
    "session1": "1-2 paragraph session 1 narrative showing symptom evolution...",
    "session2": "1-2 paragraph session 2 narrative with new clinical information..."
  },
  "diagnosticRationale": "2-3 sentences explaining why this diagnosis fits and what rules out the differentials",
  "questions": [
    {
      "id": "q1",
      "domain": "intake",
      "question": "Clinical question text...",
      "options": [
        { "id": "a", "text": "Option text", "isCorrect": true, "weight": 3, "rationale": "Why this is correct",
          "explanation": { "approach": "Evidence-based approach name", "rationale": "Full explanation", "keyIndicators": ["indicator1"], "commonMistake": "" } },
        { "id": "b", "text": "Distractor", "isCorrect": false, "weight": 0, "rationale": "Why this is wrong",
          "explanation": { "approach": "What this approach represents", "rationale": "Why it falls short", "keyIndicators": [], "commonMistake": "What students confuse" } },
        { "id": "c", "text": "Distractor", "isCorrect": false, "weight": -1, "rationale": "Why wrong",
          "explanation": { "approach": "...", "rationale": "...", "keyIndicators": [], "commonMistake": "..." } },
        { "id": "d", "text": "Distractor", "isCorrect": false, "weight": -2, "rationale": "Why harmful",
          "explanation": { "approach": "...", "rationale": "...", "keyIndicators": [], "commonMistake": "..." } }
      ]
    }
  ]
}

RULES:
- Generate exactly 5 questions per case
- Domains must be distributed: at least 1 intake, 1 counseling, 1 treatment, 1 ethics or core
- Valid domains: "intake", "counseling", "treatment", "ethics", "core"
- Each question has exactly 4 options, exactly 1 correct
- Weights: correct = 3, neutral distractor = 0, poor choice = -1, harmful = -2
- Narratives must be clinically realistic with diverse demographics
- Include specific DSM-5-TR diagnostic criteria in the presentation
- Evidence-based treatments must be current (CBT, DBT, PE, CPT, MAT, etc.)
- Output ONLY valid JSON — no markdown, no backticks, no commentary`;

async function generateCase(category, diagnosis, difficulty) {
  const prompt = `Generate one NCMHCE clinical case for:
Category: ${category}
Diagnosis: ${diagnosis.name} (${diagnosis.code})
Difficulty: ${difficulty}

Output ONLY the JSON object. No other text.`;

  const res = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'x-api-key': API_KEY,
      'anthropic-version': '2023-06-01',
    },
    body: JSON.stringify({
      model: 'claude-sonnet-4-6',
      max_tokens: 4000,
      system: SYSTEM,
      messages: [{ role: 'user', content: prompt }],
    }),
  });

  if (!res.ok) {
    const err = await res.text().catch(() => '');
    throw new Error(`API ${res.status}: ${err.slice(0, 200)}`);
  }

  const data = await res.json();
  const text = (data.content || []).filter(b => b.type === 'text').map(b => b.text).join('');
  
  // Strip markdown fences if present
  const clean = text.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim();
  return JSON.parse(clean);
}

async function run() {
  await mongoose.connect(MONGO_URI, { dbName: 'passreadyprep' });
  console.log('Connected to MongoDB\n');

  // Count existing cases per category
  const existing = await Content.find({ exam: 'ncmhce', type: 'case' });
  const counts = {};
  existing.forEach(c => {
    const cat = c.category || (c.caseSim && c.caseSim.category) || 'unknown';
    counts[cat] = (counts[cat] || 0) + 1;
  });

  // Build gap list sorted by biggest gap first
  const gaps = CATEGORIES.map(cat => ({
    category: cat.category,
    have: counts[cat.category] || 0,
    target: cat.target,
    gap: cat.target - (counts[cat.category] || 0),
    diagnoses: cat.diagnoses,
    difficulty: cat.difficulty,
  })).filter(g => g.gap > 0).sort((a, b) => b.gap - a.gap);

  console.log('Category gaps (sorted by need):');
  gaps.forEach(g => console.log(`  ${g.category}: ${g.have}/${g.target} (need ${g.gap})`));
  console.log(`\nGenerating ${COUNT} cases...\n`);

  // Round-robin across categories weighted by gap size
  const queue = [];
  let remaining = COUNT;
  while (remaining > 0 && gaps.some(g => g.gap > 0)) {
    for (const g of gaps) {
      if (g.gap <= 0 || remaining <= 0) continue;
      // Pick a random diagnosis from this category
      const dx = g.diagnoses[Math.floor(Math.random() * g.diagnoses.length)];
      // Pick difficulty weighted by the category's mix
      const diffs = [];
      Object.entries(g.difficulty).forEach(([d, n]) => { for (let i = 0; i < n; i++) diffs.push(d); });
      const diff = diffs[Math.floor(Math.random() * diffs.length)];
      queue.push({ category: g.category, diagnosis: dx, difficulty: diff });
      g.gap--;
      remaining--;
    }
  }

  // Generate
  let success = 0, fail = 0;
  const nextId = existing.length + 100; // safe offset

  for (let i = 0; i < queue.length; i++) {
    const q = queue[i];
    const num = nextId + i;
    process.stdout.write(`[${i + 1}/${queue.length}] ${q.category} — ${q.diagnosis.name} (${q.difficulty})... `);

    try {
      const caseData = await generateCase(q.category, q.diagnosis, q.difficulty);
      caseData.id = 'ncmhce-AUTO-' + String(num).padStart(3, '0');
      caseData.category = q.category; // enforce blueprint category

      // Check for dupe by title
      const titleExists = await Content.findOne({ title: caseData.title, exam: 'ncmhce' });
      if (titleExists) { console.log('SKIP (title dupe)'); fail++; continue; }

      await Content.create({
        exam: 'ncmhce', type: 'case',
        externalId: caseData.id,
        title: caseData.title,
        category: caseData.category,
        difficulty: caseData.difficulty,
        status: 'sme_review',
        caseSim: caseData,
      });

      console.log('✓ ' + caseData.title);
      success++;
    } catch (e) {
      console.log('✗ ' + e.message.slice(0, 80));
      fail++;
    }

    // Rate limit: 1 second between calls
    if (i < queue.length - 1) await new Promise(r => setTimeout(r, 1000));
  }

  console.log(`\nDone. Generated: ${success}, Failed: ${fail}`);
  console.log('All new cases are in sme_review status — approve via admin at /review.html');
  await mongoose.disconnect();
}

run().catch(e => { console.error(e); process.exit(1); });
