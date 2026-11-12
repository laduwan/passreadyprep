// utils/examProducts.js — the exam products PassReady Prep sells, in one list.
//
// Each product names its exam and says how a member's access to it is
// decided, which date on the account is their exam date, which Exam record
// its attempts attach to, how its progress summary is read, where its
// questions come from, and where a member goes to practise a domain.
// Features that serve every exam (the fast study break first) iterate this
// list instead of branching on 'nce' / 'ncmhce', so a new product is one
// entry here plus its own bank and summary, not an edit in every file.
//
// A revision of an exam (the 2027 NCE or NCMHCE outlines) is not a product:
// utils/nceBlueprint.js specFor() picks the outline inside the product.
//
// `sold` is false for a product that is built but not yet on sale: it is
// still resolvable by key (old sessions, admin pages) but not offered to a
// member choosing an exam.
const fs = require('fs');
const path = require('path');
const vm = require('vm');
const Exam = require('../models/Exam');
const NceItem = require('../models/NceItem');
const bp = require('./nceBlueprint');
const { getNceExam } = require('./nceExam');
const { accessFor } = require('./access');
const { nceLevel } = require('./nceAccess');
const { summarize } = require('./progressSummary');

function shuffle(a) { const x = a.slice(); for (let i = x.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [x[i], x[j]] = [x[j], x[i]]; } return x; }

// One question in the shape a study break session stores, whatever bank it
// came from: `rationale` is keyed by option id, `explanation` is the item's
// teaching note.
function sessionItem({ id, stem, options, explanation }) {
  const key = (options || []).find((o) => o.isCorrect) || {};
  const rationale = {};
  (options || []).forEach((o) => { rationale[o.id] = o.rationale || ''; });
  return { id, stem, options: (options || []).map((o) => ({ id: o.id, text: o.text })), correct: key.id || '', rationale, explanation: explanation || '' };
}

// ── NCMHCE: the knowledge bank ───────────────────────────────────────────
// public/knowledge-data.js is a browser file: `const KNOWLEDGE_ITEMS = [ … ];`
// (300 standalone items, also behind the knowledge drill and the timed
// knowledge exam). It is read once and evaluated in an empty sandbox, never
// required. Its items are tagged by topic (the `domain` field); this maps each
// of the five case domains readiness scores to the topics that exercise it.
const NCMHCE_TOPICS_BY_DOMAIN = {
  counseling: ['skills', 'skills_interventions', 'theories', 'pioneers'],
  intake: ['intake', 'assessment', 'diagnosis'],
  treatment: ['treatment_planning'],
  ethics: ['ethics', 'professional_ethics'],
  core: ['skills', 'theories'],
};
let bankCache = null;
function knowledgeBank() {
  if (bankCache) return bankCache;
  const src = fs.readFileSync(path.join(__dirname, '..', 'public', 'knowledge-data.js'), 'utf8');
  const sandbox = {};
  vm.runInNewContext(src + '\n;__out = KNOWLEDGE_ITEMS;', sandbox, { timeout: 5000 });
  bankCache = Array.isArray(sandbox.__out) ? sandbox.__out : [];
  return bankCache;
}
async function pickNcmhce(domain, count) {
  const topics = NCMHCE_TOPICS_BY_DOMAIN[domain] || [];
  const pool = knowledgeBank().filter((i) => topics.includes(i.domain) && Array.isArray(i.options) && i.options.length >= 2);
  return shuffle(pool).slice(0, count).map((i) => sessionItem({ id: i.id, stem: i.question, options: i.options, explanation: i.rationale }));
}

// ── NCE: the item bank, on the outline the member will sit ───────────────
async function pickNce(domain, count, user) {
  let spec = bp.specFor(user && user.nceExamDate);
  let match = { status: 'published', ...bp.specMatch(spec), domain };
  let ids = await NceItem.find(match).select('_id').lean();
  if (!ids.length && spec === '2027') {               // the 2027 bank is still filling
    spec = 'current';
    match = { status: 'published', ...bp.specMatch(spec), domain };
    ids = await NceItem.find(match).select('_id').lean();
  }
  const chosen = shuffle(ids).slice(0, count).map((d) => d._id);
  const docs = await NceItem.find({ _id: { $in: chosen } }).lean();
  return shuffle(docs).map((d) => sessionItem({ id: d.externalId, stem: d.stem, options: d.options, explanation: d.rationale }));
}

const PRODUCTS = [
  {
    key: 'ncmhce',
    name: 'NCMHCE',
    longName: 'National Clinical Mental Health Counseling Examination',
    sold: true,
    // The fields on User that accessLevel / examDateOf / pickItems read.
    userFields: ['isGuest', 'subscription', 'trialStartedAt', 'trialEndsAt', 'examDate'],
    accessLevel: (user, now = new Date()) => accessFor(user, now).accessLevel,
    examDateOf: (user) => (user && user.examDate) || null,
    examDoc: () => Exam.findOne({ key: 'ncmhce' }).select('_id').lean(),
    summarize: (userId) => summarize(userId, 'ncmhce'),
    pickItems: pickNcmhce,
    // How readiness reads one domain's tally in Attempt.domainBreakdown
    // (utils/ncmhceReadiness.js).
    breakdown: (correct, total) => ({ ok: correct, total }),
    practiceHref: (domain) => `/study?domain=${encodeURIComponent(domain)}`,
    dashboardHref: '/dashboard.html?exam=ncmhce',
  },
  {
    key: 'nce',
    name: 'NCE',
    longName: 'National Counselor Examination',
    sold: true,
    userFields: ['isGuest', 'trialEndsAt', 'nceAccess', 'nceExamDate'],
    accessLevel: (user, now = new Date()) => nceLevel(user, now),
    examDateOf: (user) => (user && user.nceExamDate) || null,
    examDoc: () => getNceExam(),
    summarize: (userId) => summarize(userId, 'nce'),
    pickItems: pickNce,
    breakdown: (correct, total) => ({ correct, total }),   // utils/nceReadiness.js
    practiceHref: (domain) => `/nce.html?domain=${encodeURIComponent(domain)}`,
    dashboardHref: '/dashboard.html?exam=nce',
  },
];

const BY_KEY = Object.fromEntries(PRODUCTS.map((p) => [p.key, p]));

function examProduct(key) { return BY_KEY[key] || null; }
function isExamKey(key) { return !!BY_KEY[key]; }
// The products a member may choose from, in display order.
function soldExamProducts() { return PRODUCTS.filter((p) => p.sold); }
// Every User field any product reads, for one lean select.
function productUserFields() { return [...new Set(PRODUCTS.flatMap((p) => p.userFields))]; }
// What a page needs to show the choice.
function publicExamProducts() { return soldExamProducts().map((p) => ({ key: p.key, name: p.name, longName: p.longName })); }

module.exports = {
  PRODUCTS, examProduct, isExamKey, soldExamProducts, productUserFields, publicExamProducts,
  knowledgeBank, NCMHCE_TOPICS_BY_DOMAIN, sessionItem,
};
