const express = require('express');

const router = express.Router();

// Calls Anthropic with the SERVER's key — learners never supply one.
async function callAnthropic(system, messages, maxTokens) {
  if (!process.env.ANTHROPIC_API_KEY) {
    throw new Error('Debrief is not configured (missing ANTHROPIC_API_KEY).');
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

// Turn the case + the learner's picks into a compact, gradable transcript.
function buildPerformance(caseData, answers) {
  const qs = caseData.questions || [];
  const lines = [];
  let correct = 0;
  const domainTally = {};

  qs.forEach((q, i) => {
    const opts = q.options || [];
    const chosen = (answers[i] && opts.find(o => o.id === answers[i].chosenId)) || null;
    const keyed = opts.find(o => o.isCorrect) || null;
    const ok = !!(chosen && chosen.isCorrect);
    if (ok) correct++;
    const d = q.domain || 'general';
    domainTally[d] = domainTally[d] || { ok: 0, total: 0 };
    domainTally[d].total++;
    if (ok) domainTally[d].ok++;

    lines.push(
      `Q${i + 1} [${d}] ${q.question}\n` +
      `  Learner chose: ${chosen ? chosen.text : '(no answer)'} — ${ok ? 'CORRECT' : 'INCORRECT'}\n` +
      (ok ? '' : `  Keyed answer: ${keyed ? keyed.text : '(n/a)'}\n`) +
      (keyed && keyed.explanation && keyed.explanation.commonMistake
        ? `  Common trap: ${keyed.explanation.commonMistake}\n`
        : '')
    );
  });

  const domainSummary = Object.entries(domainTally)
    .map(([d, v]) => `${d}: ${v.ok}/${v.total}`)
    .join(', ');

  return {
    transcript: lines.join('\n'),
    score: `${correct}/${qs.length}`,
    domainSummary,
  };
}

// POST /api/debrief  { caseData, answers, mode }
// Returns { debrief } — Dr. Claire Moreau's spoken-style written feedback.
router.post('/', async (req, res) => {
  try {
    const { caseData, answers, mode } = req.body || {};
    if (!caseData || !Array.isArray(caseData.questions) || !Array.isArray(answers)) {
      return res.status(400).json({ error: 'caseData (with questions) and answers are required.' });
    }

    const dx = caseData.diagnosis || caseData.primaryDiagnosis || {};
    const perf = buildPerformance(caseData, answers);

    const system =
`You are Dr. Claire Moreau, a warm, seasoned clinical supervisor coaching a counselor preparing for the NCMHCE. You review one practiced case and give focused, honest feedback that builds clinical reasoning — not just praise.

Write in plain text only. No markdown, no asterisks, no headers with symbols. Use these four labeled sections, each on its own line, with a blank line between them:

Overall: (2-3 sentences — your read on how they reasoned through this case, named score in passing)
Strengths: (1-2 specific things their choices show they understand)
Growth areas: (the pattern beneath their misses — e.g., reaching for treatment before assessing safety, over-pathologizing, missing the keyed best answer when two options seem close. Be concrete and tie it to the questions they missed. If they got everything right, name the higher-order skill to keep sharpening.)
NCMHCE tip: (one exam-day pointer this specific case teaches — how the exam wants you to prioritize, sequence, or differentiate here)

Be encouraging but accurate. Speak to them directly as "you". Keep it under 220 words.`;

    const user =
`Case: ${caseData.title || '(untitled)'}
Working diagnosis: ${dx.name || '(n/a)'}${dx.code ? ' (' + dx.code + ')' : ''}
Mode: ${mode || 'new'}
Score: ${perf.score}    Domain breakdown: ${perf.domainSummary}

Per-question record:
${perf.transcript}`;

    const debrief = await callAnthropic(system, [{ role: 'user', content: user }], 700);
    return res.json({ debrief });
  } catch (e) {
    console.error('debrief error:', e.message);
    return res.status(502).json({ error: String(e.message || e) });
  }
});

module.exports = router;
