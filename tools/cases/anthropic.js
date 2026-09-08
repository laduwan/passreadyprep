// ============================================================================
// anthropic.js — the one Messages-API call the case tools share.
// generate-deep.js (whole cases) and fix-distractors.js (per-case repairs)
// both go through here so headers, model selection, retry policy, and JSON
// extraction change in one place.
// ============================================================================

const MODEL = process.env.ANTHROPIC_MODEL || 'claude-sonnet-4-6';
const RETRY_DELAYS_MS = [2000, 4000, 8000];

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function callAnthropic(prompt, opts = {}) {
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) throw new Error('ANTHROPIC_API_KEY not set');
  let lastErr;
  for (let attempt = 0; attempt <= RETRY_DELAYS_MS.length; attempt++) {
    try {
      const res = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: { 'content-type': 'application/json', 'x-api-key': apiKey, 'anthropic-version': '2023-06-01' },
        body: JSON.stringify({ model: MODEL, max_tokens: opts.maxTokens || 4000, messages: [{ role: 'user', content: prompt }] }),
      });
      if (res.ok) {
        const j = await res.json();
        return (j.content || []).filter((b) => b.type === 'text').map((b) => b.text).join('');
      }
      const body = (await res.text()).slice(0, 200);
      lastErr = new Error('API ' + res.status + ': ' + body);
      // Rate limits and server-side overload are worth waiting out; anything
      // else (bad request, auth) will not improve on retry.
      if (res.status !== 429 && res.status < 500) throw lastErr;
    } catch (e) {
      if (/^API [45]\d\d/.test(e.message) && !/^API (429|5\d\d)/.test(e.message)) throw e;
      lastErr = e;
    }
    if (attempt < RETRY_DELAYS_MS.length) await sleep(RETRY_DELAYS_MS[attempt]);
  }
  throw lastErr;
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
