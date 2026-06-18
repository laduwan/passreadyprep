const express = require('express');
const crypto = require('crypto');
const requireAdmin = require('../middleware/adminAuth');

const router = express.Router();
router.use(requireAdmin);

// In-memory session store for multi-turn course generation.
// Each session holds the accumulated messages array so the model can continue.
const sessions = new Map();
const SESSION_TTL = 30 * 60 * 1000; // 30 min

function pruneOld() {
  const now = Date.now();
  for (const [id, s] of sessions) {
    if (now - s.ts > SESSION_TTL) sessions.delete(id);
  }
}

// ── The ACEP system prompt (extracted from ACEP_Course_Generator_Prompt.md) ──

const ACEP_SYSTEM = `You are a continuing education course developer for GA Integrated Therapeutic Perspectives LLC, an NBCC Approved Continuing Education Provider (ACEP No. 7760). You will create a complete, publish-ready CE course that meets all ACEP compliance standards with zero shortcuts.

STRICT WORD COUNT REQUIREMENTS (NON-NEGOTIABLE):
- 1 Hour = minimum 6,000 words of instructional content
- 2 Hours = minimum 12,000 words of instructional content
- 3 Hours = minimum 18,000 words of instructional content
"Instructional content" = module narrative text, clinical examples, case vignettes, therapeutic dialogues, clinical application sections. EXCLUDES headers, objectives, questions, answer keys, evaluation, bibliography, formatting.

REQUIRED COURSE STRUCTURE (in this order):
1. COURSE INFORMATION HEADER — title, provider (GA Integrated Therapeutic Perspectives LLC), NBCC statement ("GA Integrated Therapeutic Perspectives LLC has been approved by NBCC as an Approved Continuing Education Provider, ACEP No. 7760. Programs that do not qualify for NBCC credit are clearly identified. GA Integrated Therapeutic Perspectives LLC is solely responsible for all aspects of the programs."), credit hours, category, level, target audience, description (150-250 words), instructional methods, completion requirements (read all, complete checks, pass post-test ≥70%, complete evaluation), conflict of interest disclosure.
2. LEARNING OBJECTIVES — measurable Bloom's verbs only (Identify, Describe, Explain, Apply, Demonstrate, Analyze, Evaluate, Differentiate, Implement, etc.). NEVER use Understand, Know, Learn, Appreciate. 1hr=4-6, 2hr=6-8, 3hr=8-10.
3. VIDEO RESOURCES TABLE (if applicable).
4. INSTRUCTIONAL MODULES — 1hr=3-4, 2hr=4-5, 3hr=6 modules. Each module MUST have: (a) title+intro, (b) substantive narrative in flowing prose (NOT bullets/outlines), (c) 1-2 clinical vignettes with diverse demographics, (d) 1+ clinical dialogue (Therapist/Client format), (e) 3-5 knowledge check MCQs with answer key.
5. POST-TEST — 1hr=10, 2hr=15, 3hr=20 questions minimum. ≥40% application/scenario-based, ≥20% analysis. Answer key with rationale referencing modules.
6. COURSE EVALUATION — exact 14-item template (Sections 1-3).
7. BIBLIOGRAPHY — 1hr=8, 2hr=10, 3hr=15 minimum. APA 7th, real sources.
8. FOOTER — "Course Developer: GA Integrated Therapeutic Perspectives LLC / NBCC Approved Continuing Education Provider #7760 / © 2025 GA Integrated Therapeutic Perspectives LLC. All rights reserved."

CONTENT QUALITY: Professional, authoritative, accessible. Graduate-level clinical audience. Every paragraph teaches something substantive. Evidence-based claims with citations. Cultural considerations throughout. Practical how-to guidance. Common mistakes and troubleshooting. Use "Clinical Application", "Therapist Tip", "Common Mistake" callouts. Diverse vignettes (race, ethnicity, age, gender, orientation, SES, disability, religion). Person-first language.

DO NOT: write outlines or skeletons, use excessive bullets in instruction, pad word count, leave placeholders, front-load content, invent fake citations.

OUTPUT: Markdown format. Proper heading hierarchy. Horizontal rules between sections. Bold speaker labels in dialogues. End with word count comment: <!-- Instructional content word count: X,XXX words -->

When continuing after a "continue" message: pick up EXACTLY where you left off. Do not restart, summarize, or repeat.`;

// ── Build the user prompt from parameters ────────────────────────────

function buildCoursePrompt(params) {
  const { title, ceHours, category, level, theme, specialInstructions } = params;
  let p = `Create a complete ACEP-compliant CE course with these parameters:

- Course Title: ${title}
- CE Hours: ${ceHours}
- Category: ${category}
- Course Level: ${level}`;

  if (theme) p += `\n- Theme/Hook: ${theme}`;
  if (specialInstructions) p += `\n- Special Instructions: ${specialInstructions}`;

  const wordMin = { 1: '6,000', 2: '12,000', 3: '18,000' }[ceHours] || '12,000';
  p += `\n\nMinimum instructional word count: ${wordMin} words.`;
  p += `\n\nGenerate the COMPLETE course now. Write the full instructional content — do not summarize, abbreviate, or outline. If you cannot finish in one response, write as much as possible and stop mid-sentence — I will say "continue" for you to pick up exactly where you left off.`;

  return p;
}

// ── POST /api/admin/generate/course — start a new course generation ──

router.post('/course', async (req, res) => {
  const { title, ceHours, category, level, theme, specialInstructions, apiKey } = req.body || {};

  if (!apiKey) return res.status(400).json({ error: 'Anthropic API key is required' });
  if (!title) return res.status(400).json({ error: 'Course title is required' });
  if (![1, 2, 3].includes(Number(ceHours))) return res.status(400).json({ error: 'CE Hours must be 1, 2, or 3' });

  pruneOld();

  const sessionId = crypto.randomBytes(16).toString('hex');
  const userPrompt = buildCoursePrompt({ title, ceHours: Number(ceHours), category, level, theme, specialInstructions });

  const messages = [{ role: 'user', content: userPrompt }];

  try {
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
        system: ACEP_SYSTEM,
        messages,
      }),
    });

    if (!apiRes.ok) {
      const errText = await apiRes.text().catch(() => '');
      return res.status(502).json({ error: 'Anthropic API error (' + apiRes.status + ')', detail: errText.slice(0, 500) });
    }

    const data = await apiRes.json();
    const text = (data.content || []).filter(b => b.type === 'text').map(b => b.text).join('');
    const stopReason = data.stop_reason || 'end_turn';

    // Store session for potential continuation
    messages.push({ role: 'assistant', content: text });
    sessions.set(sessionId, { messages, apiKey, ts: Date.now(), title });

    const done = stopReason === 'end_turn' || text.includes('All rights reserved.');
    const wordCount = text.split(/\s+/).length;

    return res.json({ sessionId, chunk: text, done, stopReason, wordCount });
  } catch (err) {
    console.error('course generate error', err);
    return res.status(500).json({ error: 'Generation failed: ' + err.message });
  }
});

// ── POST /api/admin/generate/course/continue — continue an existing session ──

router.post('/course/continue', async (req, res) => {
  const { sessionId } = req.body || {};

  if (!sessionId || !sessions.has(sessionId))
    return res.status(400).json({ error: 'Invalid or expired session' });

  const session = sessions.get(sessionId);
  session.ts = Date.now();

  // Add "continue" to the conversation
  session.messages.push({ role: 'user', content: 'continue' });

  try {
    const apiRes = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'x-api-key': session.apiKey,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-6',
        max_tokens: 16000,
        system: ACEP_SYSTEM,
        messages: session.messages,
      }),
    });

    if (!apiRes.ok) {
      const errText = await apiRes.text().catch(() => '');
      // Remove the "continue" message so session stays consistent
      session.messages.pop();
      return res.status(502).json({ error: 'Anthropic API error (' + apiRes.status + ')', detail: errText.slice(0, 500) });
    }

    const data = await apiRes.json();
    const text = (data.content || []).filter(b => b.type === 'text').map(b => b.text).join('');
    const stopReason = data.stop_reason || 'end_turn';

    session.messages.push({ role: 'assistant', content: text });

    const done = stopReason === 'end_turn' || text.includes('All rights reserved.');

    // Compute total word count across all assistant messages
    const totalText = session.messages.filter(m => m.role === 'assistant').map(m => m.content).join(' ');
    const wordCount = totalText.split(/\s+/).length;

    return res.json({ sessionId, chunk: text, done, stopReason, wordCount, turns: session.messages.filter(m => m.role === 'assistant').length });
  } catch (err) {
    console.error('course continue error', err);
    session.messages.pop(); // remove failed "continue"
    return res.status(500).json({ error: 'Continue failed: ' + err.message });
  }
});

// ── DELETE /api/admin/generate/course/:sessionId — cleanup ──

router.delete('/course/:sessionId', (req, res) => {
  sessions.delete(req.params.sessionId);
  res.json({ ok: true });
});

module.exports = router;
