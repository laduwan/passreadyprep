const express = require('express');
const requireAuth = require('../middleware/auth');

const router = express.Router();

// Every round costs an Anthropic call, so this endpoint is signed-in only.
// (Note: the older AI routes — skills.js, coreTutor.js, debrief.js — are
// currently open to anonymous visitors.)
router.use(requireAuth);

// Calls Anthropic with the SERVER's key — learners never supply one.
// Same shape as routes/skills.js and routes/coreTutor.js.
async function callAnthropic(system, messages, maxTokens) {
  if (!process.env.ANTHROPIC_API_KEY) {
    throw new Error('Assessment coaching is not configured (missing ANTHROPIC_API_KEY).');
  }
  const r = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'x-api-key': process.env.ANTHROPIC_API_KEY,
      'anthropic-version': '2023-06-01',
    },
    body: JSON.stringify({ model: 'claude-sonnet-4-6', max_tokens: maxTokens, system, messages }),
  });
  if (!r.ok) {
    const t = await r.text().catch(() => '');
    throw new Error('Anthropic ' + r.status + ' ' + t);
  }
  const data = await r.json();
  return (data.content || []).filter(b => b.type === 'text').map(b => b.text).join('\n').trim();
}

// The case bank lives client-side, so the page sends the context it wants
// evaluated. Cap what we echo back into the prompt: a progressive case is at
// most 10 rounds, and no single field should be able to balloon the call.
const MAX_HISTORY_ROUNDS = 12;
const MAX_FIELD = 4000;

function clip(v, max) {
  const s = typeof v === 'string' ? v.trim() : '';
  return s.length > max ? s.slice(0, max) + '…' : s;
}

function conceptList(targetConcepts) {
  const arr = Array.isArray(targetConcepts) ? targetConcepts : [targetConcepts];
  return arr.map(c => clip(c, 200)).filter(Boolean).join(', ');
}

// Replays the case so far: the intake vignette, then each completed round's
// reveal, prompt, and what the student actually said.
function buildCaseContext(vignette, history) {
  const parts = [];
  if (vignette) parts.push('INTAKE VIGNETTE:\n' + vignette);

  const rounds = (Array.isArray(history) ? history : []).slice(-MAX_HISTORY_ROUNDS);
  rounds.forEach((h, i) => {
    if (!h || typeof h !== 'object') return;
    const lines = ['ROUND ' + (i + 1) + (h.stageLabel ? ' — ' + clip(h.stageLabel, 200) : '')];
    if (h.reveal) lines.push('New clinical information: ' + clip(h.reveal, MAX_FIELD));
    if (h.prompt) lines.push('Asked: ' + clip(h.prompt, MAX_FIELD));
    if (h.userResponse) lines.push('Student answered: ' + clip(h.userResponse, MAX_FIELD));
    parts.push(lines.join('\n'));
  });

  return parts.length ? parts.join('\n\n') : '(This is the first round of the case.)';
}

// POST /api/assess-next/evaluate
// { caseId, stage, stageLabel, prompt, targetConcepts, response, history, vignette }
//   -> { feedback }
router.post('/evaluate', async (req, res) => {
  try {
    const body = req.body || {};
    const response = clip(body.response, MAX_FIELD);
    if (!response) return res.status(400).json({ error: 'response required' });

    const prompt = clip(body.prompt, MAX_FIELD);
    if (!prompt) return res.status(400).json({ error: 'prompt required' });

    const stageLabel = clip(body.stageLabel || body.stage, 200) || 'this stage';
    const concepts = conceptList(body.targetConcepts) || '(none specified)';
    const caseContext = buildCaseContext(clip(body.vignette, MAX_FIELD), body.history);

    const system = `You are a clinical counseling exam evaluator for the NCMHCE. The student is working through a progressive clinical case — following one client through sequential assessment and treatment decisions.

CASE CONTEXT:
${caseContext}

CURRENT ROUND: ${stageLabel}
PROMPT: ${prompt}
TARGET CONCEPTS: ${concepts}

STUDENT'S RESPONSE:
${response}

Evaluate the student's clinical reasoning. Structure your feedback as:

STRENGTHS: What they identified correctly or approached well (be specific — name the clinical concept)

AREAS TO DEVELOP: What they missed or could strengthen (be specific — name what's missing and why it matters clinically). If they missed a target concept, explain why it's important at this stage.

STRONGER RESPONSE EXAMPLE: One concrete sentence or phrase showing what a stronger answer would include at this point.

CLINICAL PRIORITY CHECK: Does their reasoning align with the priority ladder (safety → medical/substance → assessment → diagnosis → treatment → ethics)? If they skipped a rung, note it.

Keep feedback concise — 150-250 words total. Be encouraging but honest. The goal is exam readiness, not comfort.`;

    const user = `Evaluate this response for the round "${stageLabel}".\n\nPROMPT: ${prompt}\n\nSTUDENT'S RESPONSE:\n${response}`;
    const feedback = await callAnthropic(system, [{ role: 'user', content: user }], 800);
    res.json({ feedback });
  } catch (e) {
    res.status(502).json({ error: String(e.message || e) });
  }
});

module.exports = router;
