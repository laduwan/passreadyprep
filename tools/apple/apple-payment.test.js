// Developer check for routes/applePayment.js grant rules — runs without a
// database by stubbing the two models. Usage: node tools/apple/apple-payment.test.js
'use strict';
const assert = require('assert');
const path = require('path');
const Module = require('module');

process.env.STRIPE_PRICE_NCE_GUARANTEE = 'price_test';

// ── In-memory stand-ins for mongoose models ─────────────────────────────────
function query(result) { const q = Promise.resolve(result); q.select = () => q; return q; }
function getPath(o, p) { return p.split('.').reduce((a, k) => (a == null ? a : a[k]), o); }
function setPath(o, p, v) { const ks = p.split('.'); let c = o; for (const k of ks.slice(0, -1)) { c[k] = c[k] || {}; c = c[k]; } c[ks[ks.length - 1]] = v; }
function delPath(o, p) { const ks = p.split('.'); let c = o; for (const k of ks.slice(0, -1)) { if (!c[k]) return; c = c[k]; } delete c[ks[ks.length - 1]]; }
function matches(doc, q) { return Object.keys(q).every((k) => k === '$or' ? q.$or.some((s) => matches(doc, s)) : (k === '_id' ? String(doc._id) === String(q._id) : getPath(doc, k) === q[k])); }
const clone = (d) => JSON.parse(JSON.stringify(d));

const users = new Map();
const FakeUser = {
  findById: (id) => query(users.has(String(id)) ? clone(users.get(String(id))) : null),
  findOne: (q) => query(clone([...users.values()].find((u) => matches(u, q)) || null)),
  exists: (q) => query([...users.values()].some((u) => matches(u, q)) ? { _id: q._id } : null),
  findByIdAndUpdate: (id, update) => {
    const u = users.get(String(id)); assert(u, 'update of missing user');
    for (const [k, v] of Object.entries(update)) {
      if (k === '$unset') Object.keys(v).forEach((p) => delPath(u, p));
      else if (k === '$set') Object.entries(v).forEach(([p, x]) => setPath(u, p, x));
      else setPath(u, k, v);
    }
    return query(clone(u));
  },
};
const txs = [];
const FakeAppleTransaction = {
  findOne: (q) => query(clone(txs.find((t) => matches(t, q)) || null)),
  create: async (doc) => { if (txs.some((t) => t.transactionId === doc.transactionId)) { const e = new Error('dup'); e.code = 11000; throw e; } const d = { _id: 'at' + (txs.length + 1), ...doc }; txs.push(d); return clone(d); },
  deleteMany: async (q) => { for (let i = txs.length - 1; i >= 0; i--) if (matches(txs[i], q)) txs.splice(i, 1); },
  updateOne: async (q, u) => { const t = txs.find((x) => matches(x, q)); if (t) Object.assign(t, u); },
};
const logged = [];
const stubs = {
  [path.resolve('models/User.js')]: FakeUser,
  [path.resolve('models/AppleTransaction.js')]: FakeAppleTransaction,
  [path.resolve('utils/activity.js')]: { logActivity: (e) => { logged.push(e); }, monitor: (q, s, n) => n(), errorHandler: (e, q, s, n) => n(e), installProcessHandlers() {} },
  [path.resolve('middleware/auth.js')]: (req, res, next) => next(),
  [path.resolve('routes/auth.js')]: { publicUser: (u) => u },
};
const origLoad = Module._load;
Module._load = function (request, parent, isMain) {
  if (parent && parent.filename) {
    const abs = path.resolve(path.dirname(parent.filename), request) + (request.endsWith('.js') ? '' : '.js');
    if (stubs[abs]) return stubs[abs];
  }
  return origLoad.apply(this, arguments);
};

const apple = require('../../utils/appleIap');
const { applyTransaction, revokeTransaction, findUserForTransaction } = require('../../routes/applePayment');

const DAY = 86400000;
const now = Date.now();
const pid = (sku) => apple.PRODUCT_PREFIX + '.' + sku;
let n = 0;
const tx = (sku, extra = {}) => ({ transactionId: String(1000 + ++n), originalTransactionId: String(1000 + n), productId: pid(sku), purchaseDate: now, environment: 'Sandbox', type: 'x', ...extra });
function user(id) { users.set(id, { _id: id, email: id + '@x.test', subscription: { tier: 'free', status: 'active' }, nceAccess: { tier: 'free', status: 'active' } }); return users.get(id); }
const near = (a, b, tol = 5000) => Math.abs(new Date(a).getTime() - b) < tol;

(async () => {
  // catalog
  const offered = apple.offeredProducts().map((p) => p.tier);
  assert.deepStrictEqual(offered, ['monthly', 'pass3', 'guarantee', 'guide', 'nce_monthly', 'nce_pass3', 'nce_pass6', 'nce_guarantee']);
  assert.strictEqual(apple.entryForProductId(pid('ncmhce.pass3')).tier, 'pass3');
  assert.strictEqual(apple.entryForProductId('com.other.thing'), null);

  // monthly: grant, idempotent re-send, renewal with new id
  user('u1');
  const m1 = tx('ncmhce.monthly', { expiresDate: now + 30 * DAY });
  let r = await applyTransaction(users.get('u1'), m1);
  assert.strictEqual(r.action, 'granted');
  let u = users.get('u1');
  assert.strictEqual(u.subscription.tier, 'monthly'); assert.strictEqual(u.subscription.source, 'apple'); assert.strictEqual(u.subscription.status, 'active');
  assert(near(u.subscription.currentPeriodEnd, now + 30 * DAY));
  r = await applyTransaction(users.get('u1'), m1); assert.strictEqual(r.action, 'already');
  const m2 = { ...tx('ncmhce.monthly', { expiresDate: now + 60 * DAY }), originalTransactionId: m1.originalTransactionId };
  r = await applyTransaction(users.get('u1'), m2, { viaNotification: true, autoRenewStatus: 0 });
  assert.strictEqual(r.action, 'granted');
  u = users.get('u1'); assert(near(u.subscription.currentPeriodEnd, now + 60 * DAY)); assert.strictEqual(u.subscription.cancelAtPeriodEnd, true);

  // the same subscription on another account → 409
  user('u2');
  await assert.rejects(() => applyTransaction(users.get('u2'), m2), (e) => e.code === 'owned_by_other' && e.status === 409);

  // pass3 twice extends, never resets
  user('u3');
  r = await applyTransaction(users.get('u3'), tx('ncmhce.pass3')); assert.strictEqual(r.action, 'granted');
  assert(near(users.get('u3').subscription.currentPeriodEnd, now + 90 * DAY));
  r = await applyTransaction(users.get('u3'), tx('ncmhce.pass3')); assert.strictEqual(r.action, 'granted');
  assert(near(users.get('u3').subscription.currentPeriodEnd, now + 180 * DAY));
  assert.strictEqual(users.get('u3').subscription.tier, 'pass3');

  // NCE pass lands on nceAccess only
  r = await applyTransaction(users.get('u3'), tx('nce.pass6')); assert.strictEqual(r.action, 'granted');
  u = users.get('u3'); assert.strictEqual(u.nceAccess.tier, 'nce_pass6'); assert(near(u.nceAccess.currentPeriodEnd, now + 180 * DAY)); assert.strictEqual(u.subscription.tier, 'pass3');

  // guarantee: 6-month window, terms stamped, a later stale monthly cannot replace it
  user('u4');
  r = await applyTransaction(users.get('u4'), tx('ncmhce.guarantee')); assert.strictEqual(r.action, 'granted');
  u = users.get('u4'); assert.strictEqual(u.subscription.tier, 'guarantee'); assert(u.guaranteeTermsAcceptedAt); assert(near(u.subscription.currentPeriodEnd, now + 180 * DAY));
  r = await applyTransaction(users.get('u4'), tx('ncmhce.monthly', { expiresDate: now + 30 * DAY })); assert.strictEqual(r.reason, 'higher_plan');
  assert.strictEqual(users.get('u4').subscription.tier, 'guarantee');

  // expired monthly on restore does not touch a different plan
  r = await applyTransaction(users.get('u3'), tx('ncmhce.monthly', { expiresDate: now - 5 * DAY })); assert.strictEqual(r.reason, 'expired');
  assert.strictEqual(users.get('u3').subscription.tier, 'pass3');

  // guide entitlement + refund
  user('u5');
  const g = tx('guide');
  r = await applyTransaction(users.get('u5'), g); assert.strictEqual(r.action, 'granted');
  assert(users.get('u5').guidePurchasedAt); assert.strictEqual(users.get('u5').guideOrderId, 'apple:' + g.transactionId);
  r = await applyTransaction(users.get('u5'), g); assert.strictEqual(r.action, 'already');
  r = await applyTransaction(users.get('u5'), { ...g, revocationDate: now }); assert.strictEqual(r.action, 'revoked');
  assert.strictEqual(users.get('u5').guidePurchasedAt, undefined);

  // refund of a guarantee drops the plan to free; refund of a pass ends it
  const entry = apple.entryForProductId(pid('ncmhce.guarantee'));
  const { TIERS } = require('../../routes/payment');
  await revokeTransaction(users.get('u4'), entry, TIERS.guarantee, txs.find((t) => t.userId === 'u4'));
  u = users.get('u4'); assert.strictEqual(u.subscription.tier, 'free'); assert.strictEqual(u.subscription.status, 'canceled');

  // notifications find the account by original transaction id and by account token
  users.get('u1').appleAccountToken = 'abc';
  assert.strictEqual((await findUserForTransaction({ originalTransactionId: m1.originalTransactionId }))._id, 'u1');
  assert.strictEqual((await findUserForTransaction({ originalTransactionId: 'nope', appAccountToken: 'ABC' }))._id, 'u1');
  assert.strictEqual(await findUserForTransaction({ originalTransactionId: 'nope' }), null);

  // JWS input validation
  await assert.rejects(() => apple.verifyTransaction('not a jws'), (e) => e.code === 'bad_request');

  assert(logged.some((e) => e.type === 'payment.succeeded'));
  console.log('apple-payment: all checks passed');
})().catch((e) => { console.error(e); process.exit(1); });
