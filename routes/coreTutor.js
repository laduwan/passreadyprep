const express = require('express');
const router = express.Router();

// ── Tutor scenarios ──────────────────────────────────────────────────
const SCENARIOS = [
  { id: 'ts1', domain: 'alliance', prompt: 'Your client has been making progress for 8 sessions. Today she sits down and says: "I don\'t think this is working anymore. Maybe I should try someone else." What is your best response, and why?', targetConcepts: ['rupture', 'withdrawal', 'alliance repair', 'validate before technique'] },
  { id: 'ts2', domain: 'alliance', prompt: 'A client from a collectivist culture tells you his family thinks therapy is shameful. He seems torn between continuing and stopping. How do you respond?', targetConcepts: ['cultural humility', 'ambivalence', 'goals rupture'] },
  { id: 'ts3', domain: 'theories', prompt: 'A counselor asks a client: "When did the depression first try to convince you that you were worthless?" Which theoretical orientation is this, and what is the technique called?', targetConcepts: ['narrative therapy', 'externalization'] },
  { id: 'ts4', domain: 'theories', prompt: 'A client says she feels like a fraud at work despite a recent promotion. The counselor asks: "What evidence do you have that your coworkers think you\'re incompetent?" Name the theory and technique.', targetConcepts: ['CBT', 'Socratic questioning', 'cognitive distortions'] },
  { id: 'ts5', domain: 'skills', prompt: 'Client: "I keep telling everyone I\'m fine but I haven\'t slept in weeks." Write a reflection of feeling response, then write a confrontation response. How are they different?', targetConcepts: ['reflection of feeling', 'confrontation', 'skill discrimination'] },
  { id: 'ts6', domain: 'skills', prompt: 'It\'s the second session. The client describes conflict with her boss. You want to point out that she\'s describing a pattern she also has with her mother. Should you use this interpretation now? Why or why not?', targetConcepts: ['interpretation timing', 'alliance prerequisite', 'microskills hierarchy'] },
  { id: 'ts7', domain: 'group', prompt: 'In the sixth session of a process group, two members begin arguing about whose problem is worse. Other members look uncomfortable. What do you do as the leader?', targetConcepts: ['storming stage', 'blocking', 'normalize conflict', 'group safety'] },
  { id: 'ts8', domain: 'group', prompt: 'A new group member asks you: "Will everything I say in here stay confidential?" What is your response?', targetConcepts: ['confidentiality limits', 'group ethics', 'informed consent'] },
  { id: 'ts9', domain: 'priority', prompt: 'A client discussing marital conflict casually mentions: "Sometimes I think everyone would be better off without me." What is your immediate next step?', targetConcepts: ['safety assessment', 'priority ladder rung 1', 'suicidal ideation'] },
  { id: 'ts10', domain: 'priority', prompt: 'A client presents with severe anxiety, insomnia, and racing thoughts. She also mentions she recently started a new thyroid medication. Before diagnosing GAD, what should you consider?', targetConcepts: ['medical rule-out', 'priority ladder rung 2', 'substance/medical causes'] },
  { id: 'ts11', domain: 'alliance', prompt: 'A client who met all treatment goals starts arriving late and canceling sessions 3 weeks before the planned final session. What is happening and how should you respond?', targetConcepts: ['termination regression', 'stages of counseling', 'name the pattern'] },
  { id: 'ts12', domain: 'skills', prompt: 'A client says: "My therapist before you used to give me advice. You just sit there and reflect everything back. When are you going to actually help me?" How do you respond?', targetConcepts: ['immediacy', 'task rupture', 'alliance repair'] },
  { id: 'ts13', domain: 'theories', prompt: 'The counselor asks: "On a scale of 1 to 10, how important is it to you to stop drinking? You said 6 — why a 6 and not a 3?" What approach is this?', targetConcepts: ['motivational interviewing', 'readiness ruler', 'change talk'] },
  { id: 'ts14', domain: 'theories', prompt: 'A family therapist asks the parents to re-enact an argument they had last week while the therapist observes. Name the technique and the theoretical school.', targetConcepts: ['enactment', 'structural family therapy', 'Minuchin'] },
  { id: 'ts15', domain: 'priority', prompt: 'A client with depression has been stable for months. She arrives and tells you she just discovered her husband is having an affair. She is sobbing and says: "I want to die." What do you do FIRST, SECOND, and THIRD?', targetConcepts: ['safety first', 'stabilization', 'validation before processing', 'priority ladder sequence'] },
  { id: 'ts16', domain: 'defenses', prompt: 'A client describes her childhood abuse in vivid, graphic detail — every event, every date — but shows zero emotion. Her voice is flat, her face is blank. Name the defense mechanism and explain how it differs from intellectualization.', targetConcepts: ['isolation of affect', 'intellectualization', 'defense discrimination'] },
  { id: 'ts17', domain: 'defenses', prompt: 'A BPD client tells you: "You\'re the only therapist who has ever truly understood me. The last three were terrible — they didn\'t care at all." What defense mechanism is operating, and how should you respond therapeutically?', targetConcepts: ['splitting', 'idealization', 'BPD', 'alliance management'] },
  { id: 'ts18', domain: 'defenses', prompt: 'After a session discussing his father\'s emotional absence, a client goes to a bar that night and gets into a physical fight. Name the defense mechanism and explain why this behavior connects to the session content.', targetConcepts: ['acting out', 'defense mechanisms', 'session material expressed through behavior'] },
  { id: 'ts19', domain: 'distortions', prompt: 'A client says: "I got one negative comment on my performance review. The rest was positive, but that one comment proves I\'m not cut out for this job." Identify the cognitive distortion(s) and write a Socratic question to address them.', targetConcepts: ['mental filter', 'all-or-nothing thinking', 'Socratic questioning'] },
  { id: 'ts20', domain: 'distortions', prompt: 'A client says: "I feel like a failure, so I must be a failure." Name the distortion and explain why "think more positively" is NOT the correct CBT intervention.', targetConcepts: ['emotional reasoning', 'cognitive restructuring', 'accuracy vs positivity'] },
  { id: 'ts21', domain: 'distortions', prompt: 'A client says: "My coworker didn\'t say hello this morning. She definitely hates me. I\'m going to get fired." Identify each distortion in this sequence and explain the Socratic questioning sequence you would use.', targetConcepts: ['mind reading', 'catastrophizing', 'fortune telling', 'Socratic questioning sequence'] },
];

const DOMAIN_LABELS = {
  alliance: 'Therapeutic Alliance',
  theories: 'Theories & Orientations',
  skills: 'Microskills & Techniques',
  group: 'Group Counseling',
  priority: 'Clinical Priority Ladder',
  defenses: 'Defense Mechanisms',
  distortions: 'Cognitive Distortions',
};

async function callAnthropic(system, messages, maxTokens) {
  if (!process.env.ANTHROPIC_API_KEY) {
    throw new Error('Tutor is not configured (missing ANTHROPIC_API_KEY).');
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

// GET /api/core-tutor/round?domain=alliance  (domain optional — random if omitted)
router.get('/round', (req, res) => {
  let pool = SCENARIOS;
  const d = req.query.domain;
  if (d && DOMAIN_LABELS[d]) {
    pool = SCENARIOS.filter(s => s.domain === d);
    if (!pool.length) pool = SCENARIOS;
  }
  const scenario = pool[Math.floor(Math.random() * pool.length)];
  res.json({
    id: scenario.id,
    domain: scenario.domain,
    domainLabel: DOMAIN_LABELS[scenario.domain],
    prompt: scenario.prompt,
    targetConcepts: scenario.targetConcepts,
  });
});

// POST /api/core-tutor/evaluate { scenarioId, prompt, response }
router.post('/evaluate', async (req, res) => {
  try {
    const { scenarioId, prompt, response } = req.body || {};
    if (!prompt || !response || !response.trim()) {
      return res.status(400).json({ error: 'prompt and response are required.' });
    }
    const scenario = SCENARIOS.find(s => s.id === scenarioId) || {};
    const concepts = (scenario.targetConcepts || []).join(', ');

    const system =
`You are Dr. Claire Moreau, a warm but rigorous clinical supervisor coaching a counselor preparing for the NCMHCE. You are evaluating their response to a core counseling attributes scenario.

The scenario tests these target concepts: ${concepts}

Write in plain text only. No markdown, no asterisks, no headers with symbols. Use these four labeled sections, each on its own line, with a blank line between them:

Assessment: (one of — Strong, Solid, Developing, or Needs Work — then a 5 to 10 word reason)
What you got right: (1-2 specific things their response demonstrates understanding of. Be concrete.)
What to strengthen: (the gap between their response and what the NCMHCE rewards. Tie it to the target concepts they missed or partially addressed. If their response is strong, name the next-level skill.)
Model response: (write a concise model answer the exam would reward, in 2-4 sentences. This is the teaching moment — make it count.)

Be encouraging but accurate. Speak directly as "you". Keep it under 250 words.`;

    const user = `Scenario: ${prompt}\n\nTrainee's response: "${response}"`;
    const feedback = await callAnthropic(system, [{ role: 'user', content: user }], 700);
    res.json({ feedback });
  } catch (e) {
    console.error('core-tutor error:', e.message);
    res.status(502).json({ error: String(e.message || e) });
  }
});

module.exports = router;
