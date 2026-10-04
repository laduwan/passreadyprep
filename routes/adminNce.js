const express = require('express');
const requireAdmin = require('../middleware/adminOrAdminUser');
const NceItem = require('../models/NceItem');
const Exam = require('../models/Exam');
const bp = require('../utils/nceBlueprint');
const { checkNceItem } = require('../utils/nceGate');
const { getNceExam, NCE_SOURCES } = require('../utils/nceExam');
const User = require('../models/User');
const { renderRecordHtml, renderRecordsBookHtml, buildRecord } = require('../utils/nceRecord');
const { renderHtml, exportFilter } = require('../utils/nceExport');
const { readSseText, extractJson, MODEL } = require('../tools/cases/anthropic');

// Admin: generate, review and publish NCE questions. Nothing generated here is
// published automatically — every item lands in `sme_review`.
const router = express.Router();
router.use(requireAdmin);

const MAX_BATCH = 10;
const MODEL_ID = process.env.NCE_GEN_MODEL || MODEL;

// ── Helpers ──────────────────────────────────────────────────────────

// Who is acting, for the audit trail: the signed-in admin's email, or the
// shared token when a script uses x-admin-token.
async function actorFor(req) {
  if (!req.userId) return 'admin token';
  const u = await User.findById(req.userId).select('email').lean().catch(() => null);
  return (u && u.email) || `admin ${req.userId}`;
}

async function nextIds(n) {
  const last = await NceItem.find({ externalId: /^nce-\d+$/ }).sort({ externalId: -1 }).limit(1).select('externalId').lean();
  let max = last.length ? parseInt(last[0].externalId.slice(4), 10) || 0 : 0;
  return Array.from({ length: n }, () => 'nce-' + String(++max).padStart(6, '0'));
}

// Live (published + in review) count per domain, so generation fills the
// domain furthest below its weighted target first.
async function domainCounts() {
  const rows = await NceItem.aggregate([
    { $match: { status: { $in: ['published', 'sme_review'] } } },
    { $group: { _id: { domain: '$domain', status: '$status' }, n: { $sum: 1 } } },
  ]);
  const out = {};
  bp.DOMAIN_KEYS.forEach((k) => { out[k] = { published: 0, sme_review: 0 }; });
  rows.forEach((r) => { if (out[r._id.domain]) out[r._id.domain][r._id.status] = r.n; });
  return out;
}

async function pickDomain() {
  const counts = await domainCounts();
  const targets = bp.bankTargets();
  let best = null;
  bp.DOMAIN_KEYS.forEach((k) => {
    const have = counts[k].published + counts[k].sme_review;
    const fill = have / targets[k];
    if (!best || fill < best.fill) best = { key: k, fill };
  });
  return best.key;
}

// Least-covered topics in a domain, so a batch spreads across the outline.
async function pickTopics(domain, n) {
  const dom = bp.DOMAINS.find((d) => d.key === domain);
  const rows = await NceItem.aggregate([
    { $match: { domain, status: { $ne: 'retired' } } },
    { $group: { _id: '$topic', n: { $sum: 1 } } },
  ]);
  const used = {};
  rows.forEach((r) => { used[r._id] = r.n; });
  const ranked = dom.topics.slice().sort((a, b) => (used[a] || 0) - (used[b] || 0) || Math.random() - 0.5);
  return ranked.slice(0, n);
}

function buildPrompt(domain, topics, difficulty, avoidStems) {
  const dom = bp.DOMAINS.find((d) => d.key === domain);
  return `You are a senior NCC/LPC item writer creating ORIGINAL practice questions for the National Counselor Examination (NCE). Do not reproduce real exam items.

Write ${topics.length} standalone multiple-choice questions for the NCE domain "${dom.label}".
Write exactly one question per topic, in this order:
${topics.map((t, i) => `  ${i + 1}. ${t}`).join('\n')}
Difficulty: ${difficulty === 'mixed' ? 'a mix of easy, medium and hard' : difficulty}.

ITEM RULES (items breaking these are rejected automatically):
- Exactly 4 options with ids "a","b","c","d" and exactly ONE correct answer. Vary which letter is correct.
- NCE style: knowledge and applied-knowledge items. Short clinical scenarios are welcome but keep stems under 90 words.
- OPTION BALANCE: all four options parallel in grammar and similar length — the longest option no more than 20% longer than the shortest. The correct option must NOT be the longest.
- Distractors must be plausible to a partially prepared candidate. Never use "always", "never", "absolutely", "categorically" or "universally" in a distractor. No "all of the above" / "none of the above".
- Every option gets a one- or two-sentence "rationale" saying why it is right or specifically why it is wrong. Add an item-level "rationale" that teaches the concept behind the key.
- Tag each item with the single best-fitting CACREP core area key from: ${bp.CACREP_KEYS.join(', ')}.
- Ground each item in 1-2 references using ONLY these exact source names: ${NCE_SOURCES.join('; ')}. Put the specific concept, criterion or code section in "detail".
- Be factually exact (dates, theorists, test properties, code sections). If unsure of a fact, choose a different angle on the topic.${avoidStems.length ? `
- Do NOT duplicate these existing questions:
${avoidStems.map((s) => '    • ' + s.slice(0, 160)).join('\n')}` : ''}

Return ONE JSON object only, no markdown:
{"items":[{"topic":string,"difficulty":"easy"|"medium"|"hard","cacrep":string,"stem":string,"options":[{"id":"a","text":string,"isCorrect":boolean,"rationale":string}],"rationale":string,"references":[{"source":string,"detail":string}]}]}`;
}

async function callModel(prompt) {
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) { const e = new Error('ANTHROPIC_API_KEY is not set on the server'); e.status = 400; throw e; }
  const res = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: { 'content-type': 'application/json', 'x-api-key': apiKey, 'anthropic-version': '2023-06-01' },
    body: JSON.stringify({ model: MODEL_ID, max_tokens: 16000, stream: true, messages: [{ role: 'user', content: prompt }] }),
  });
  if (!res.ok) {
    const t = await res.text().catch(() => '');
    const e = new Error('Anthropic API error (' + res.status + '): ' + t.slice(0, 300)); e.status = 502; throw e;
  }
  return readSseText(res);
}

// ── GET /api/admin/nce/coverage ──────────────────────────────────────
router.get('/coverage', async (_req, res) => {
  try {
    const exam = await getNceExam();
    const counts = await domainCounts();
    const targets = bp.bankTargets();
    const cacrep = await NceItem.aggregate([
      { $match: { status: 'published' } },
      { $group: { _id: '$cacrep', n: { $sum: 1 } } },
    ]);
    res.json({
      examStatus: exam.status,
      bankTarget: bp.BANK_TARGET,
      domains: bp.DOMAINS.map((d) => ({
        key: d.key, label: d.label, weight: d.weight, target: targets[d.key],
        published: counts[d.key].published, review: counts[d.key].sme_review,
      })),
      cacrep: bp.CACREP_AREAS.map((a) => ({ key: a.key, label: a.label, published: (cacrep.find((c) => c._id === a.key) || {}).n || 0 })),
      model: MODEL_ID,
    });
  } catch (err) {
    console.error('nce coverage error', err);
    res.status(500).json({ error: 'Could not compute NCE coverage' });
  }
});

// ── POST /api/admin/nce/generate ─────────────────────────────────────
// body: { domain?: key (default: furthest below target), count?: 1-10, difficulty?: easy|medium|hard|mixed }
router.post('/generate', async (req, res) => {
  try {
    const body = req.body || {};
    const domain = body.domain || await pickDomain();
    if (!bp.DOMAIN_KEYS.includes(domain)) return res.status(400).json({ error: 'Unknown NCE domain' });
    const count = Math.min(MAX_BATCH, Math.max(1, parseInt(body.count, 10) || 5));
    const difficulty = ['easy', 'medium', 'hard'].includes(body.difficulty) ? body.difficulty : 'mixed';

    const actor = await actorFor(req);
    const topics = await pickTopics(domain, count);
    const corpus = await NceItem.find({ status: { $ne: 'retired' } }).select('externalId stem domain topic').lean();
    const avoid = corpus.filter((c) => c.domain === domain && topics.includes(c.topic)).slice(-15).map((c) => c.stem);

    const raw = await callModel(buildPrompt(domain, topics, difficulty, avoid));
    let parsed;
    try { parsed = extractJson(raw); } catch (_) {
      return res.status(422).json({ error: 'Could not parse JSON from the model response', raw: raw.slice(0, 800) });
    }
    const items = Array.isArray(parsed.items) ? parsed.items.slice(0, count) : [];
    if (!items.length) return res.status(422).json({ error: 'Model returned no items' });

    const ids = await nextIds(items.length);
    const corpusStems = corpus.map((c) => ({ externalId: c.externalId, stem: c.stem }));
    const saved = []; const rejected = [];

    for (let i = 0; i < items.length; i++) {
      const it = items[i] || {};
      const doc = {
        externalId: ids[i],
        domain,
        cacrep: it.cacrep,
        topic: it.topic || topics[i],
        difficulty: ['easy', 'medium', 'hard'].includes(it.difficulty) ? it.difficulty : 'medium',
        stem: String(it.stem || '').trim(),
        options: (it.options || []).map((o) => ({ id: o.id, text: String(o.text || '').trim(), isCorrect: o.isCorrect === true, rationale: String(o.rationale || '').trim() })),
        rationale: String(it.rationale || '').trim(),
        references: (it.references || []).map((r, j) => ({ id: 'R' + (j + 1), source: r.source, detail: r.detail })),
        status: 'sme_review',
        generatedBy: MODEL_ID,
        origin: { method: 'generator', importedAt: new Date() },
        history: [{ at: new Date(), action: 'generated', by: actor, note: `Generated by ${MODEL_ID}; passed the quality gate` }],
      };
      const v = checkNceItem(doc, { corpusStems, allowedSources: NCE_SOURCES });
      if (!v.ok) { rejected.push({ topic: doc.topic, stem: doc.stem.slice(0, 140), errors: v.errors }); continue; }
      try {
        await NceItem.create(doc);
        corpusStems.push({ externalId: doc.externalId, stem: doc.stem });
        saved.push({ externalId: doc.externalId, topic: doc.topic, cacrep: doc.cacrep, stem: doc.stem });
      } catch (e) {
        rejected.push({ topic: doc.topic, stem: doc.stem.slice(0, 140), errors: [e.code === 11000 ? 'id collision — run again' : e.message] });
      }
    }
    res.json({ domain, requested: count, saved, rejected, model: MODEL_ID });
  } catch (err) {
    console.error('nce generate error', err);
    res.status(err.status || 500).json({ error: err.message || 'Generation failed' });
  }
});

// ── POST /api/admin/nce/import-seed — { update?: bool } ─────────────
// Loads the hand-authored seed bank (tools/nce/seed, no API calls) into the
// review queue. Safe to click repeatedly: only new seed items are inserted.
router.post('/import-seed', async (req, res) => {
  try {
    const { importSeed } = require('../tools/nce/seedImport');
    const r = await importSeed({ write: true, update: !!(req.body && req.body.update), by: await actorFor(req) });
    if (!r.ok) return res.status(422).json({ error: 'Some seed items fail the quality gate', problems: r.problems.slice(0, 20) });
    res.json(r);
  } catch (err) {
    console.error('nce import-seed error', err);
    res.status(500).json({ error: 'Could not import the seed questions' });
  }
});

// ── GET /api/admin/nce/export?status=sme_review|published|all ───────
// Printable hard copy for SME review (print / save as PDF from the browser).
router.get('/export', async (req, res) => {
  try {
    const status = ['sme_review', 'published', 'all'].includes(req.query.status) ? req.query.status : 'sme_review';
    const items = await NceItem.find(exportFilter(status)).lean();
    res.type('html').send(renderHtml(items, { status }));
  } catch (err) {
    console.error('nce export error', err);
    res.status(500).json({ error: 'Could not export the NCE bank' });
  }
});

// ── Review queue ─────────────────────────────────────────────────────

// GET /api/admin/nce/items?status=sme_review&domain=&q=
router.get('/items', async (req, res) => {
  try {
    const filter = { status: req.query.status || 'sme_review' };
    if (req.query.domain) filter.domain = req.query.domain;
    if (req.query.q) filter.stem = new RegExp(String(req.query.q).replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'i');
    const items = await NceItem.find(filter).sort({ externalId: 1 }).limit(500).lean();
    res.json({ count: items.length, items });
  } catch (err) {
    console.error('nce list error', err);
    res.status(500).json({ error: 'Could not load NCE items' });
  }
});

// PUT /api/admin/nce/items/:id — edit an item; the gate re-runs on save.
router.put('/items/:id', async (req, res) => {
  try {
    const item = await NceItem.findOne({ externalId: req.params.id });
    if (!item) return res.status(404).json({ error: 'Item not found' });
    const b = req.body || {};
    const changed = [];
    ['domain', 'cacrep', 'topic', 'difficulty', 'stem', 'rationale'].forEach((k) => {
      if (b[k] !== undefined && b[k] !== item[k]) { item[k] = b[k]; changed.push(k); }
    });
    if (Array.isArray(b.options)) { item.options = b.options; changed.push('options'); }
    if (Array.isArray(b.references)) { item.references = b.references; changed.push('references'); }

    const others = await NceItem.find({ externalId: { $ne: item.externalId }, status: { $ne: 'retired' } }).select('externalId stem').lean();
    const v = checkNceItem(item.toObject(), { corpusStems: others, allowedSources: NCE_SOURCES });
    if (!v.ok) return res.status(422).json({ error: 'Item failed the quality gate', validationErrors: v.errors });
    if (changed.length) {
      item.history.push({ at: new Date(), action: 'edited', by: await actorFor(req), note: `Changed: ${changed.join(', ')}${b.note ? ` — ${String(b.note).slice(0, 300)}` : ''}` });
    }
    await item.save();
    res.json({ item });
  } catch (err) {
    console.error('nce edit error', err);
    res.status(500).json({ error: 'Could not save the item' });
  }
});

// POST /api/admin/nce/items/:id/status — { status: published|sme_review|retired, note?, reviewer?: {name, credential} }
// The decision (and any note) is appended to the item's audit trail. The ⚑
// reviewNote is left alone — it's the author's verification flag, not a decision.
router.post('/items/:id/status', async (req, res) => {
  try {
    const { status, note, reviewer } = req.body || {};
    if (!['published', 'sme_review', 'retired'].includes(status)) return res.status(400).json({ error: 'Invalid status' });
    const actor = await actorFor(req);
    const update = { $set: { status } };
    if (status === 'published') {
      update.$set.reviewedBy = {
        name: (reviewer && reviewer.name) || actor,
        credential: (reviewer && reviewer.credential) || '',
        date: new Date(),
      };
    }
    const who = reviewer && reviewer.name ? `${reviewer.name}${reviewer.credential ? ', ' + reviewer.credential : ''} (via ${actor})` : actor;
    update.$push = { history: { at: new Date(), action: status, by: who, note: note ? String(note).slice(0, 500) : '' } };
    const item = await NceItem.findOneAndUpdate({ externalId: req.params.id }, update, { new: true });
    if (!item) return res.status(404).json({ error: 'Item not found' });
    res.json({ externalId: item.externalId, status: item.status });
  } catch (err) {
    console.error('nce status error', err);
    res.status(500).json({ error: 'Could not update the item' });
  }
});

// GET /api/admin/nce/items/:id/record[?format=html] — the evidence record for
// one question: content, key and rationales, references resolved to full
// citations, provenance, review sign-off, and the full audit trail.
router.get('/items/:id/record', async (req, res) => {
  try {
    const item = await NceItem.findOne({ externalId: req.params.id }).lean();
    if (!item) return res.status(404).json({ error: `No NCE question with id ${req.params.id}` });
    const others = await NceItem.find({ externalId: { $ne: item.externalId }, status: { $ne: 'retired' } }).select('externalId stem').lean();
    const record = buildRecord(item, { corpusStems: others });
    if (req.query.format === 'html') return res.type('html').send(renderRecordHtml(record));
    res.json(record);
  } catch (err) {
    console.error('nce record error', err);
    res.status(500).json({ error: 'Could not build the evidence record' });
  }
});

// GET /api/admin/nce/records?status=published|sme_review|retired|all — every
// evidence record in one printable document (index + one record per page).
router.get('/records', async (req, res) => {
  try {
    const status = ['sme_review', 'published', 'retired', 'all'].includes(req.query.status) ? req.query.status : 'all';
    const items = await NceItem.find(status === 'all' ? {} : { status }).sort({ domain: 1, externalId: 1 }).lean();
    const live = await NceItem.find({ status: { $ne: 'retired' } }).select('externalId stem').lean();
    const records = items.map((item) => buildRecord(item, { corpusStems: live.filter((x) => x.externalId !== item.externalId) }));
    res.type('html').send(renderRecordsBookHtml(records, { subtitle: status === 'all' ? 'all statuses' : status.replace('sme_review', 'in review') }));
  } catch (err) {
    console.error('nce records error', err);
    res.status(500).json({ error: 'Could not build the evidence records' });
  }
});

// POST /api/admin/nce/exam-status — { status: 'live' | 'coming_soon' }
router.post('/exam-status', async (req, res) => {
  try {
    const status = req.body && req.body.status;
    if (!['live', 'coming_soon'].includes(status)) return res.status(400).json({ error: 'Invalid status' });
    await getNceExam();
    const exam = await Exam.findOneAndUpdate({ key: 'nce' }, { $set: { status } }, { new: true });
    res.json({ status: exam.status });
  } catch (err) {
    console.error('nce exam-status error', err);
    res.status(500).json({ error: 'Could not update the exam status' });
  }
});

module.exports = router;
