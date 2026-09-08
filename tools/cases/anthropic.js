// ============================================================================
// anthropic.js — the one Messages-API call the case tools share.
// generate-deep.js (whole cases) and fix-distractors.js (single questions)
// both go through here so headers, model selection, and JSON extraction
// change in one place.
// ============================================================================

const MODEL = process.env.ANTHROPIC_MODEL || 'claude-sonnet-4-6';

async function callAnthropic(prompt, opts = {}) {
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) throw new Error('ANTHROPIC_API_KEY not set');
  const res = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: { 'content-type': 'application/json', 'x-api-key': apiKey, 'anthropic-version': '2023-06-01' },
    body: JSON.stringify({ model: MODEL, max_tokens: opts.maxTokens || 4000, messages: [{ role: 'user', content: prompt }] }),
  });
  if (!res.ok) throw new Error('API ' + res.status + ': ' + (await res.text()).slice(0, 200));
  const j = await res.json();
  return (j.content || []).filter((b) => b.type === 'text').map((b) => b.text).join('');
}

// Pull the first {...} object out of a reply that may carry stray prose or fences.
function extractJson(text) {
  let t = text.trim();
  const a = t.indexOf('{');
  const b = t.lastIndexOf('}');
  if (a > 0 || b < t.length - 1) t = t.slice(a, b + 1);
  return JSON.parse(t);
}

module.exports = { callAnthropic, extractJson, MODEL };
