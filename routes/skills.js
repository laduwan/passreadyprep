const express = require('express');
const router = express.Router();

const SKILLS = {
  open:        { label: 'an OPEN question',             def: 'A question that invites elaboration and cannot be answered yes/no or in one word.' },
  reflectFeel: { label: 'a REFLECTION OF FEELING',      def: 'A statement (not a question) that names the emotion you hear beneath the words.' },
  paraphrase:  { label: 'a PARAPHRASE',                 def: 'Briefly restate the content of what the client said in your own words.' },
  summarize:   { label: 'a SUMMARY',                    def: 'Tie the main threads of what the client said into a short recap.' },
  affirm:      { label: 'an AFFIRMATION (MI)',          def: 'Genuinely recognize a specific strength, effort, or value the client showed.' },
  reframe:     { label: 'a REFRAME',                    def: 'Offer a different, plausible, more workable meaning for what the client described.' },
  immediacy:   { label: 'IMMEDIACY',                    def: 'Name what is happening right now in the room or the counselor-client relationship.' },
  rollResist:  { label: 'ROLLING WITH RESISTANCE (MI)', def: 'Reflect or sidestep rather than argue when the client pushes back.' },
};

const STATEMENTS = [
  { id:'s1',  voice:'james',  text:"I don't even know why I'm here. My wife thinks I have a problem, but I'm handling it." },
  { id:'s2',  voice:'maya',   text:"Every time I start to feel okay, something falls apart again. I'm just so tired of trying." },
  { id:'s3',  voice:'priya',  text:"I got the scholarship, but I keep waiting for everyone to figure out I don't actually belong here." },
  { id:'s4',  voice:'daniel', text:"People keep telling me to talk about it. They have no idea what it was like over there." },
  { id:'s5',  voice:'maya',   text:"My mom called again. I love her, but after every call I feel about two inches tall." },
  { id:'s6',  voice:'chad',   text:"Counseling is for people who can't handle their own business. No offense." },
  { id:'s7',  voice:'priya',  text:"If I'm not the best at everything, then what's even the point of me?" },
  { id:'s8',  voice:'james',  text:"I yelled at my kid again last night. I swore I'd never be like my father." },
  { id:'s9',  voice:'maya',   text:"I quit the job, ended the relationship, moved across the country. Everyone thinks I'm running." },
  { id:'s10', voice:'daniel', text:"I sleep maybe three hours. Then I'm useless with my family, and that just makes it worse." },
  { id:'s11', voice:'chad',   text:"You're just going to write down whatever I say and send it to the judge anyway." },
  { id:'s12', voice:'priya',  text:"I haven't told anyone this, but lately food is the one thing I feel like I can control." },
  { id:'s13', voice:'james',  text:"A few drinks at night is the only way I come down. It's not a big deal." },
  { id:'s14', voice:'daniel', text:"My buddy didn't make it back. I keep asking why it was him and not me." },
];

async function callAnthropic(system, messages, maxTokens) {
  const r = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: { 'content-type': 'application/json', 'x-api-key': process.env.ANTHROPIC_API_KEY, 'anthropic-version': '2023-06-01' },
    body: JSON.stringify({ model: 'claude-sonnet-4-6', max_tokens: maxTokens, system, messages }),
  });
  if (!r.ok) { const t = await r.text().catch(() => ''); throw new Error('Anthropic ' + r.status + ' ' + t); }
  const data = await r.json();
  return (data.content || []).filter(b => b.type === 'text').map(b => b.text).join('\n').trim();
}

// GET /api/skills/round -> a random client statement + a random target skill
router.get('/round', (req, res) => {
  const s = STATEMENTS[Math.floor(Math.random() * STATEMENTS.length)];
  const keys = Object.keys(SKILLS);
  const k = keys[Math.floor(Math.random() * keys.length)];
  res.json({ statement: s.text, voice: s.voice, skillKey: k, skillLabel: SKILLS[k].label, skillDef: SKILLS[k].def });
});

// POST /api/skills/evaluate { skillKey, statement, response } -> { feedback }
router.post('/evaluate', async (req, res) => {
  try {
    const { skillKey, statement, response } = req.body || {};
    const skill = SKILLS[skillKey];
    if (!skill) return res.status(400).json({ error: 'unknown skill' });
    if (!response || !response.trim()) return res.status(400).json({ error: 'response required' });
    const system = `You are a warm but honest counseling-skills coach for NCMHCE-level trainees. The trainee was asked to respond to a client using ${skill.label}, defined as: ${skill.def}

Evaluate ONLY their use of that target skill. Use these labels exactly, each on its own line, with a blank line between them, plain text only (no markdown, no asterisks):

Verdict: (one of — Strong example, Partial, or Off-target — then a 4 to 8 word reason)
Why: (1-2 sentences, specific to what they actually wrote)
Tighten it: (one concrete suggestion to make it a better ${skill.label})
Model: (one strong example of ${skill.label} for this client, in quotation marks)

Be encouraging but accurate. If they wrote a question when a reflection was asked for (or the reverse), say so plainly.`;
    const user = `Client said: "${statement}"\n\nTrainee's attempted ${skill.label}: "${response}"`;
    const feedback = await callAnthropic(system, [{ role: 'user', content: user }], 500);
    res.json({ feedback });
  } catch (e) { res.status(502).json({ error: String(e.message || e) }); }
});

module.exports = router;
