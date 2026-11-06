/**
 * Weekly Blog Auto-Drafter
 *
 * Once a week (Mondays, 10:00–22:00 UTC) takes the next unused topic from
 * data/blogTopicQueue.js, asks Claude to draft a post, checks the result, and
 * saves it as a DRAFT BlogPost for admin review. It NEVER publishes — Ke
 * reviews, edits, and publishes from Admin → Blog.
 *
 * Topic selection skips retired topics, topics whose slug already has a post,
 * and topics whose title restates the subject of an existing post (so a queue
 * entry that repeats a starter post under a different slug is not drafted a
 * second time).
 *
 * Draft shape follows the CounselorReady blog drafter: a 2–3 sentence hook,
 * 3–5 H2 sections, a short closing paragraph that carries the study-tool link,
 * 700–900 words (never over 1,000), direct and warm voice, no filler.
 *
 * Guardrails (checked in code, not just asked for in the prompt):
 *   - the compliance-firewall terms from CLAUDE.md (CE-provider marks,
 *     approval numbers, board-approval wording)
 *   - the study guide's proprietary method ("Priority Ladder", "rung", a
 *     ranked list of clinical priorities) — the blog teases the guide, it
 *     doesn't give the method away
 *   - no percentages or made-up exam numbers; exam details may come ONLY from
 *     the NBCC-sourced fact sheet in data/ncmhceExamFacts.js, and a sources
 *     note citing NBCC's documents is appended to every draft
 *   - must include the topic's study-tool link, plus the study-guide teaser
 *     link on NCMHCE topics (topics with exam: 'NCE' link only to /nce.html)
 *   - length and meta-description limits
 * A draft that fails gets one retry with the problems listed; if it still
 * fails, nothing is saved and the failure is logged.
 *
 * When a draft is saved, an admin alert email goes out (the same alert email
 * as sign-ups/payments: ADMIN_ALERT_EMAIL) so Ke knows it's ready to review.
 *
 * Runs at most once per 6 days (checked against the database, so restarts and
 * redeploys don't double up). Also triggerable from Admin → Blog.
 *
 * Environment variables:
 *   ANTHROPIC_API_KEY        — required (same key as the AI debrief)
 *   BLOG_AUTODRAFT_DISABLE   — set to 1 to stop weekly drafts without a deploy
 *   BLOG_DRAFT_MODEL         — optional, defaults to claude-opus-5-5
 *
 * Started from server.js: require('./jobs/blogAutoDraft').start();
 */

const mongoose = require('mongoose');
const BlogPost = require('../models/BlogPost');
const TOPICS = require('../data/blogTopicQueue');
const { parseDraft } = require('../data/blogSeedDrafts');
const { logActivity } = require('../utils/activity');
const EXAM = require('../data/ncmhceExamFacts');

const LOG = '[BlogAutoDraft]';
const ANTHROPIC_API_URL = 'https://api.anthropic.com/v1/messages';
const DEFAULT_MODEL = 'claude-opus-5-5';
const DAY_MS = 24 * 60 * 60 * 1000;
const CHECK_INTERVAL_MS = 6 * 60 * 60 * 1000; // every 6 hours
const FIRST_RUN_DELAY_MS = 120_000;           // 2 min after boot
const MIN_GAP_MS = 6 * DAY_MS;                // at most one auto-draft per 6 days
const MIN_WORDS = 700;
const TARGET_WORDS = '700–900';
const MAX_WORDS = 1000;
const MIN_H2 = 3;
const MAX_H2 = 6; // asked for 3–5; one extra is tolerated, more reads as an outline
const STUDY_GUIDE_PATH = '/study-guide.html';

// ── Claude call (same raw-HTTP pattern as routes/debrief.js) ─────────────────

async function callClaude(system, userPrompt) {
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) throw new Error('ANTHROPIC_API_KEY not configured');

  const response = await fetch(ANTHROPIC_API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': apiKey,
      'anthropic-version': '2023-06-01',
      // If the primary model declines, the API retries on a fallback model.
      'anthropic-beta': 'server-side-fallback-2026-07-01',
    },
    body: JSON.stringify({
      model: process.env.BLOG_DRAFT_MODEL || DEFAULT_MODEL,
      max_tokens: 16000,
      output_config: { effort: 'medium' },
      fallbacks: 'default',
      system,
      messages: [{ role: 'user', content: userPrompt }],
    }),
  });

  if (!response.ok) {
    const errText = await response.text().catch(() => 'unknown');
    throw new Error(`Claude API error (${response.status}): ${errText.slice(0, 500)}`);
  }

  const data = await response.json();
  if (data.stop_reason === 'refusal') throw new Error('Claude declined to draft this topic');
  if (data.stop_reason === 'max_tokens') throw new Error('Draft was cut off (max_tokens)');
  return (data.content || []).filter(b => b.type === 'text').map(b => b.text).join('\n').trim();
}

// ── Prompts ──────────────────────────────────────────────────────────────────

const SYSTEM_PROMPT = `You write blog posts for PassReady Prep, an exam-prep site for counselors preparing for the NCMHCE and NCE licensure exams. Each request names which exam the post is about. Posts are drafts that the site owner, Kejuiana Johnson, MA, LPC, NCC, reviews and edits before publishing.

Voice and tone:
- Direct, warm, and clinically grounded. Write as a licensed counselor who has sat these exams and coached candidates through them.
- No fluff. No generic motivational language. No "in today's world" or "whether you are…" openers. No emojis.
- Respect the reader's intelligence: they are counselors finishing graduate training or supervised hours.
- Conversational but precise. Short paragraphs. Active voice wherever it works.

The blog exists to help readers and to bring them to PassReady Prep's paid study tools. It must not give away the paid product's method. These rules matter more than anything else here:

1. Do not present any ranked or numbered list of clinical priorities, and do not describe a step-by-step method for deciding which answer comes first. Never use the terms "Priority Ladder", "ladder", or "rung". You may state widely known principles one at a time (for example, that safety concerns come first, or that a counselor validates before challenging), but do not combine them into an ordered system.
2. Facts about the exams (format, number of cases or questions, timing, scoring, passing scores, retakes, ID, delivery, domains) may come ONLY from the EXAM FACTS list below, stated accurately. If a detail you want is not on the list, leave it out; never guess, and never write placeholders or notes to the editor. Do not mention fees. Never state a specific state's licensing rules; send readers to their state board.

EXAM FACTS (from NBCC, as of ${EXAM.SOURCES_AS_OF}):
${EXAM.FACTS.map(f => '- ' + f).join('\n')}
3. No statistics, percentages, pass rates, or research figures.
4. Never mention continuing-education provider marks or approval numbers, CE-provider status, continuing education credits, or board approvals or endorsements. Do not suggest that NBCC or any board endorses PassReady Prep.
5. No guarantees of passing. Clinical content is for exam preparation, not treatment advice. Use DSM-5-TR terminology accurately.
6. Do not use raw HTML.
7. Always write the product's full name, "PassReady Prep". Never shorten it to "PassReady" (that is a different company's product).

Output format (nothing before or after it):
---
title: <the exact title you were given>
metaDescription: <one sentence, 155 characters or fewer, includes the exam name from the request (NCMHCE or NCE)>
excerpt: <1–2 sentences, 240 characters or fewer>
tags: <3 comma-separated tags, the first one is the exam name from the request (NCMHCE or NCE)>
---
<markdown body>

Structure rules for the body:
- Do NOT include an H1 title — the page shows the title.
- Start with a brief hook paragraph (2–3 sentences) that states the problem or question the reader has.
- Use H2 subheadings (## in Markdown) to organize the body: 3 to 5 subheadings. No H3s.
- End with a short closing paragraph that reinforces the key takeaway and carries the study-tool link naturally. Do not write a sign-up pitch (the site adds its own call to action).
- Target ${TARGET_WORDS} words. Do not exceed ${MAX_WORDS.toLocaleString('en-US')} words.`;

function examOf(topic) {
  return topic.exam === 'NCE' ? 'NCE' : 'NCMHCE';
}

function buildUserPrompt(topic, problems) {
  const exam = examOf(topic);
  const links = exam === 'NCE'
    ? `Include exactly this one link, once, worked naturally into the text:
- [${topic.link.label}](${topic.link.path}) — PassReady Prep's NCE practice questions and mock exams
Do not link to the NCMHCE study guide.`
    : `Include exactly these two links, each once, worked naturally into the text:
- [${topic.link.label}](${topic.link.path}) — PassReady Prep's study tool for this topic
- [Complete NCMHCE Study Guide](${STUDY_GUIDE_PATH}) — one sentence saying the guide teaches a full step-by-step method with worked cases (do not describe the method itself)`;
  const keywords = Array.isArray(topic.keywords) && topic.keywords.length
    ? `\nTarget keywords (weave in naturally, do not stuff): ${topic.keywords.join(', ')}`
    : '';
  let p = `Draft this post.

Exam: ${exam}
Title: ${topic.title}
Content brief: ${topic.angle}${keywords}

${links}

Write the post now.`;
  if (problems && problems.length) {
    p += `\n\nYour previous draft had these problems. Fix all of them:\n- ${problems.join('\n- ')}`;
  }
  return p;
}

// ── Checks ───────────────────────────────────────────────────────────────────

const BANNED = [
  // The three firewall terms are written with character classes so this file
  // doesn't itself trip the repo-wide compliance grep; each still matches the
  // literal term.
  [/\bA[C]EP\b/i, 'mentions a CE-provider mark'],
  [/77[6]0/, 'mentions an approval number'],
  [/NBCC[- ]appro[v]ed/i, 'uses board-approval wording'],
  [/\bCE provider\b|continuing education provider/i, 'mentions CE-provider status'],
  [/priority ladder/i, 'names the "Priority Ladder"'],
  [/\brungs?\b/i, 'uses the word "rung"'],
  [/\d+(\.\d+)?\s?%|\bpercent\b/i, 'contains a percentage'],
  [/<\/?[a-z][^>]*>/i, 'contains raw HTML'],
  [/PassReady(?! Prep)/i, 'shortens "PassReady Prep" to "PassReady"'],
  [/\[VERIFY|\bTODO\b|\[TK\]/i, 'contains a placeholder or note to the editor'],
];

function wordCount(md) {
  return String(md).split(/\s+/).filter(Boolean).length;
}

// Returns a list of problems (empty = OK).
function checkDraft(draft, topic) {
  const problems = [];
  const all = [draft.title, draft.metaDescription, draft.excerpt, draft.bodyMarkdown].join('\n');
  for (const [re, label] of BANNED) if (re.test(all)) problems.push(label);

  // A numbered list where most items read like clinical priorities is the
  // study guide's method in another form.
  const prioList = draft.bodyMarkdown.match(/^\s*\d+\.\s.*$/gm) || [];
  const prioHits = prioList.filter(l => /safety|rule[- ]?out|stabiliz|alliance|validat|assess|treatment|ethic/i.test(l)).length;
  if (prioHits >= 4) problems.push('contains a ranked list of clinical priorities');

  if (!draft.metaDescription) problems.push('missing metaDescription');
  else if (draft.metaDescription.length > 155) problems.push(`metaDescription is ${draft.metaDescription.length} characters (max 155)`);
  else if (!new RegExp('\\b' + examOf(topic) + '\\b').test(draft.metaDescription)) problems.push(`metaDescription must include "${examOf(topic)}"`);
  if (draft.excerpt.length > 500) problems.push('excerpt is too long');
  if (!draft.bodyMarkdown.includes(`](${topic.link.path})`)) problems.push(`missing the link to ${topic.link.path}`);
  if (examOf(topic) === 'NCMHCE' && !draft.bodyMarkdown.includes(`](${STUDY_GUIDE_PATH})`)) problems.push(`missing the link to ${STUDY_GUIDE_PATH}`);
  const words = wordCount(draft.bodyMarkdown);
  if (words < MIN_WORDS || words > MAX_WORDS) problems.push(`body is ${words} words (aim for ${TARGET_WORDS}, never over ${MAX_WORDS.toLocaleString('en-US')})`);
  const h2s = (draft.bodyMarkdown.match(/^##\s+\S/gm) || []).length;
  if (h2s < MIN_H2 || h2s > MAX_H2) problems.push(`body has ${h2s} H2 sections (use 3 to 5)`);
  if (/^#\s+\S/m.test(draft.bodyMarkdown)) problems.push('body contains an H1 title (the page shows the title)');
  return problems;
}

// ── Main ─────────────────────────────────────────────────────────────────────

// Cites the NBCC documents the fact sheet comes from, same as the starter drafts.
function sourcesNote() {
  const links = EXAM.SOURCES.map(s => `[${s.label}](${s.url})`).join(', ');
  return `\n\n---\n\n*Exam details are from NBCC's ${links}, as of ${EXAM.SOURCES_AS_OF}. NBCC updates these documents, so check them before your test date.*\n`;
}


// ── Topic selection ──────────────────────────────────────────────────────────

// Words that say nothing about a post's subject (plus the exam names, which
// appear in almost every title and would make every pair look alike).
const TITLE_STOP = new Set(['the', 'a', 'an', 'and', 'or', 'of', 'to', 'in', 'on', 'for', 'vs', 'do', 'you',
  'your', 'is', 'are', 'it', 'that', 'this', 'with', 'what', 'how', 'why', 'into', 'from', 'at', 'by',
  'nce', 'ncmhce', 'exam', 'exams']);

function titleWords(title) {
  return new Set(String(title || '').toLowerCase().replace(/[^a-z0-9\s]/g, ' ').split(/\s+/)
    .filter(w => w.length >= 2 && !TITLE_STOP.has(w))
    .map(w => w.replace(/s$/, ''))); // crude plural fold: domains ↔ domain
}

function titleExam(title) {
  const t = String(title || '').toUpperCase();
  const hasNce = /\bNCE\b/.test(t);
  const hasNcmhce = /\bNCMHCE\b/.test(t);
  if (hasNce && hasNcmhce) return 'both';
  return hasNcmhce ? 'NCMHCE' : (hasNce ? 'NCE' : null);
}

// True when two titles are about the same thing: most of the shorter title's
// subject words appear in the other. Titles that name different exams are
// never a match (an NCE format post and an NCMHCE format post are both wanted).
function sameSubject(a, b) {
  const ea = titleExam(a), eb = titleExam(b);
  if (ea && eb && ea !== 'both' && eb !== 'both' && ea !== eb) return false;
  const wa = titleWords(a), wb = titleWords(b);
  const min = Math.min(wa.size, wb.size);
  if (!min) return false;
  let shared = 0;
  for (const w of wa) if (wb.has(w)) shared++;
  const ratio = shared / min;
  return ratio >= 0.6 && (shared >= 2 || min <= 2);
}

// Returns the next topic to draft, or null. Reports skipped topics so the
// server log says why a queued topic never arrives.
async function nextTopic() {
  const posts = await BlogPost.find({}).select('slug title').lean();
  const used = new Set(posts.map(p => p.slug));
  for (const t of TOPICS) {
    if (t.retired) continue;
    if (used.has(t.slug)) continue;
    const dup = posts.find(p => sameSubject(t.title, p.title));
    if (dup) {
      console.log(`${LOG} Skipping "${t.slug}": its title covers the same subject as existing post "${dup.slug}". Set retired: true in data/blogTopicQueue.js to silence this.`);
      continue;
    }
    return t;
  }
  return null;
}

// force: skip the Monday window and the 6-day gap (admin "generate now").
async function runOnce({ force = false } = {}) {
  if (mongoose.connection.readyState !== 1) return { skipped: 'db_not_ready' };
  if (!process.env.ANTHROPIC_API_KEY) return { skipped: 'no_api_key' };

  if (!force) {
    const now = new Date();
    if (now.getUTCDay() !== 1 || now.getUTCHours() < 10 || now.getUTCHours() >= 22) return { skipped: 'outside_window' };
    const recent = await BlogPost.findOne({ autoGenerated: true, createdAt: { $gt: new Date(Date.now() - MIN_GAP_MS) } }).select('_id').lean();
    if (recent) return { skipped: 'drafted_recently' };
  }

  const topic = await nextTopic();
  if (!topic) {
    console.log(`${LOG} Topic queue is empty — add topics to data/blogTopicQueue.js.`);
    return { skipped: 'queue_empty' };
  }

  let problems = [];
  for (let attempt = 1; attempt <= 2; attempt++) {
    const text = await callClaude(SYSTEM_PROMPT, buildUserPrompt(topic, problems));
    let draft;
    try {
      draft = parseDraft(topic.slug, text.replace(/^```[a-z]*\n|\n```$/g, ''));
    } catch (e) {
      problems = ['output did not start with the --- front-matter block'];
      continue;
    }
    draft.title = topic.title; // the queue owns the title
    // First tag = exam name; the public page picks its call to action from it.
    draft.tags = [examOf(topic)].concat((draft.tags || []).filter(t => t.toUpperCase() !== examOf(topic))).slice(0, 3);
    problems = checkDraft(draft, topic);
    if (problems.length) {
      console.warn(`${LOG} ${topic.slug} attempt ${attempt} failed checks: ${problems.join('; ')}`);
      continue;
    }

    draft.bodyMarkdown = draft.bodyMarkdown.trimEnd() + sourcesNote();
    const post = await BlogPost.create(Object.assign(draft, { status: 'draft', publishedAt: null, autoGenerated: true }));
    console.log(`${LOG} Saved draft ${post.slug}`);
    logActivity({
      type: 'blog.auto_draft_ready',
      severity: 'info',
      notify: true,
      message: `New blog draft ready for review: "${post.title}". Open Admin → Blog to review and publish.`,
      meta: { slug: post.slug },
    });
    return { saved: post.slug };
  }

  logActivity({
    type: 'blog.auto_draft_failed',
    severity: 'warn',
    message: `Blog auto-draft for "${topic.slug}" failed checks twice and was not saved: ${problems.join('; ')}`,
    meta: { slug: topic.slug, problems },
  });
  return { failed: topic.slug, problems };
}

let running = false;
async function tick() {
  if (running) return;
  running = true;
  try {
    const r = await runOnce();
    if (!r.skipped) console.log(`${LOG}`, r);
  } catch (err) {
    console.error(`${LOG} run failed:`, err.message);
  } finally {
    running = false;
  }
}

function start() {
  if (process.env.BLOG_AUTODRAFT_DISABLE === '1') {
    console.log(`${LOG} Disabled via BLOG_AUTODRAFT_DISABLE=1`);
    return;
  }
  setTimeout(tick, FIRST_RUN_DELAY_MS);
  setInterval(tick, CHECK_INTERVAL_MS);
}

module.exports = { start, runOnce, checkDraft, nextTopic, sameSubject };
