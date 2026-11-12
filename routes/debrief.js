const express = require('express');
const requireAuth = require('../middleware/auth');
const User = require('../models/User');
const { checkInGate } = require('../utils/guaranteeRules');
const { trialLevel } = require('../utils/trial');

const router = express.Router();

// Who gets the AI debrief:
//
//   • the free trial — it is one of the things the trial is there to show off;
//   • Access Extensions Until You Pass.
//
// Not Monthly, the 3-month pass or the 6-month pass: those plans say "No AI
// debrief" and picking one is choosing the plan without it, so the trial
// clock stops mattering once a plan is on the account.
//
// The route calls Anthropic on the server's own key, so this check is also
// what stops a signed-out visitor spending it.
//
// A guarantee member who owes a check-in is held here exactly as they are for
// case access, through the shared gate in utils/guaranteeRules.js — otherwise
// the debrief would stay open to an account the rest of the app has gated.
async function requireDebriefPlan(req, res, next) {
  try {
    const user = await User.findById(req.userId).select('subscription isGuest trialStartedAt trialEndsAt');
    if (!user) return res.status(401).json({ error: 'Account not found' });
    const sub = user.subscription || {};
    const tier = sub.tier || 'free';

    if (tier === 'guarantee') {
      const gate = checkInGate(sub);
      if (!gate) return next();
      return res.status(402).json({
        error: 'Access gated',
        gateReason: gate,
        message: gate === 'guarantee_forfeited'
          ? 'Your Access Extensions Until You Pass plan was forfeited: no new request was made within 90 days of your last exam. Pick a plan to keep studying.'
          : 'Your access period has ended. Upload your exam appointment or score letter to continue.',
      });
    }

    // On the free trial, before any plan is chosen. trialLevel is the same
    // clock the case paywall runs on (utils/trial.js), so the debrief stops
    // the day the trial does — not a day either side of it.
    if (tier === 'free' && trialLevel(user) === 'trial') return next();

    // 402 with a gateReason, the same shape routes/content.js uses for a
    // paywall, so the case player can show its upgrade prompt.
    return res.status(402).json({
      error: 'Upgrade required',
      gateReason: 'debrief_requires_guarantee',
      message: 'The AI debrief with Dr. Claire Moreau is free during your trial and comes with Access Extensions Until You Pass.',
    });
  } catch (e) {
    return res.status(500).json({ error: 'Could not verify your plan' });
  }
}

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
// Free trial and Access Extensions Until You Pass only (requireDebriefPlan above).
router.post('/', requireAuth, requireDebriefPlan, async (req, res) => {
  try {
    const { caseData, answers, mode } = req.body || {};
    if (!caseData || !Array.isArray(caseData.questions) || !Array.isArray(answers)) {
      return res.status(400).json({ error: 'caseData (with questions) and answers are required.' });
    }

    const dx = caseData.diagnosis || caseData.primaryDiagnosis || {};
    const perf = buildPerformance(caseData, answers);

    const system =
`You are Dr. Claire Moreau, a seasoned clinical supervisor coaching a counselor preparing for the NCMHCE. You review one practiced case and give focused, honest feedback that builds clinical reasoning.

SCORING FRAMEWORK (apply this to every missed question)
+3 KEY — the clinically correct action: advances safety, alliance, or accurate formulation.
0 Near-miss — reasonable but mistimed, incomplete, or secondary.
-1 Common error — sequencing error, criterion confusion, premature intervention.
-2 Harmful error — risks client welfare, violates ethics, reverses a diagnostic criterion.

PRIORITY LADDER (evaluate misses against this sequence)
Rung 1: Imminent safety — nothing else first.
Rung 2: Medical/substance rule-outs — before diagnosing.
Rung 3: Stabilization — before processing.
Rung 4: Alliance and validation — before any intervention.
Rung 5: Clarify the picture — assessment, history.
Rung 6: Evidence-based treatment — right modality, right diagnosis.
Rung 7: Ethics throughout — woven into every rung.

Write in plain text only. No markdown, no asterisks. Use these five labeled sections, each on its own line, blank line between them:

Overall: (2-3 sentences — your read on their clinical reasoning, name the score in passing)
Strengths: (1-2 specific choices that scored +3 — name what rung they handled correctly)
Growth areas: (the pattern beneath their misses — name the error type: sequencing error, criterion reversal, premature intervention. Tie it to the rung they violated. Be concrete.)
Cognitive errors: (name each error, explain why it was wrong, state the correct action — omit if no errors)
NCMHCE tip: (one exam-day pointer this case teaches — how the exam wants you to prioritize, sequence, or differentiate here)

Speak directly as "you". Keep it under 270 words.`;

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
