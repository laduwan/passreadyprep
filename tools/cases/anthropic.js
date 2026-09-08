// ============================================================================
// anthropic.js — the one Messages-API call the case tools share.
// generate-deep.js (whole cases), fix-distractors.js (distractor repairs) and
// rewrite-questions.js (whole-question rewrites) all go through here so the
// model, headers, retry policy, streaming and JSON extraction change in one
// place.
//
// MODEL: ANTHROPIC_MODEL if set, else claude-opus-5. Every run prints which
// one it used — item quality differs noticeably between Opus and Sonnet, so
// the model must never be a guess.
//
// STREAMING: responses are streamed (SSE) and the text deltas concatenated.
// A 13-question rewrite on Opus can take minutes; a non-streamed request
// sends no bytes until generation finishes and can trip Node's fetch
// headers timeout (5 min). With streaming, headers arrive at once.
// ============================================================================

const MODEL = process.env.ANTHROPIC_MODEL || 'claude-opus-5';
const RETRY_DELAYS_MS = [2000, 4000, 8000];

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

// Parse an SSE body into the concatenated text of all text deltas. Throws on
// an `error` event or an incomplete stream (no message_stop), so callers'
// retry logic treats it like a failed request.
async function readSseText(res) {
  const reader = res.body.getReader();
  const decoder = new TextDecoder();
  let buf = '';
  let text = '';
  let stopReason = null;
  let done = false;
  const handle = (block) => {
    const lines = block.split('\n');
    let event = null;
    const data = [];
    lines.forEach((l) => {
      if (l.startsWith('event:')) event = l.slice(6).trim();
      else if (l.startsWith('data:')) data.push(l.slice(5).trim());
    });
    if (!data.length) return;
    let j;
    try { j = JSON.parse(data.join('\n')); } catch (_) { return; }
    const type = event || j.type;
    if (type === 'content_block_delta' && j.delta && j.delta.type === 'text_delta') text += j.delta.text;
    else if (type === 'message_delta' && j.delta && j.delta.stop_reason) stopReason = j.delta.stop_reason;
    else if (type === 'message_stop') done = true;
    else if (type === 'error') throw new Error('stream error: ' + JSON.stringify(j.error || j).slice(0, 200));
  };
  for (;;) {
    const { value, done: eof } = await reader.read();
    if (eof) break;
    buf += decoder.decode(value, { stream: true });
    let idx;
    while ((idx = buf.indexOf('\n\n')) >= 0) {
      const block = buf.slice(0, idx);
      buf = buf.slice(idx + 2);
      if (block.trim()) handle(block);
    }
  }
  if (buf.trim()) handle(buf);
  if (!done) throw new Error('stream ended before message_stop');
  if (stopReason === 'refusal') throw new Error('model refused the request (stop_reason refusal)');
  if (stopReason === 'max_tokens') throw new Error('response truncated at max_tokens — raise maxTokens');
  return text;
}

// max_tokens is a ceiling, not a charge: only tokens actually generated are
// billed. On Opus the model's extended thinking counts against it, so the
// ceiling must leave room for thinking AND the JSON. A response that still
// hits the ceiling is retried once with double the budget (up to MAX_TOKENS_CAP).
const MAX_TOKENS_CAP = 64000;

async function callAnthropic(prompt, opts = {}) {
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) throw new Error('ANTHROPIC_API_KEY not set');
  let maxTokens = opts.maxTokens || 4000;
  let grew = false;
  let lastErr;
  for (let attempt = 0; attempt <= RETRY_DELAYS_MS.length; attempt++) {
    try {
      const res = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: { 'content-type': 'application/json', 'x-api-key': apiKey, 'anthropic-version': '2023-06-01' },
        body: JSON.stringify({ model: MODEL, max_tokens: maxTokens, stream: true, messages: [{ role: 'user', content: prompt }] }),
      });
      if (res.ok) return await readSseText(res);
      const body = (await res.text()).slice(0, 200);
      lastErr = new Error('API ' + res.status + ': ' + body);
      // Rate limits and server-side overload are worth waiting out; anything
      // else (bad request, auth) will not improve on retry.
      if (res.status !== 429 && res.status < 500) throw lastErr;
    } catch (e) {
      if (/^API [45]\d\d/.test(e.message) && !/^API (429|5\d\d)/.test(e.message)) throw e;
      if (/refused the request/.test(e.message)) throw e;
      if (/truncated at max_tokens/.test(e.message)) {
        if (grew || maxTokens >= MAX_TOKENS_CAP) throw e;
        maxTokens = Math.min(MAX_TOKENS_CAP, maxTokens * 2);
        grew = true;
        console.log('    (response hit max_tokens; retrying once with max_tokens ' + maxTokens + ')');
        continue;
      }
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

module.exports = { callAnthropic, extractJson, readSseText, MODEL };
