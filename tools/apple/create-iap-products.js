#!/usr/bin/env node
/**
 * tools/apple/create-iap-products.js — creates PassReady Prep's In-App
 * Purchase products in App Store Connect through the App Store Connect API,
 * so step 1 of docs/AppReview_Reply_v1.0_build2.md is not done by hand.
 *
 * What it does (idempotent — re-run any time, it only adds what is missing):
 *   - two subscription groups, "NCMHCE" and "NCE", with their display names
 *   - the two auto-renewable monthly subscriptions, one per group
 *   - the three non-renewing passes and the three non-consumables
 *   - en-US name + description on every product and group
 *   - US price (nearest Apple price point to the table below)
 *   - availability: United States
 *   - with --screenshots DIR: the review screenshot for each product
 *     (DIR/<tier>.png, or DIR/default.png for all; PNG or JPEG, 640×920 or larger)
 *
 * What stays manual in App Store Connect: the Paid Apps agreement, and
 * attaching the products to the app version before you submit (version page
 * → In-App Purchases and Subscriptions → "+"). Apple's API has no call for
 * that first-version attachment.
 *
 * Setup (same key fastlane uses — see client/ios/App/fastlane/SETUP.md):
 *   ASC_KEY_ID, ASC_ISSUER_ID, ASC_KEY_PATH (default ~/.appstoreconnect/AuthKey.p8)
 *   APPLE_APP_ID — the app's numeric Apple ID
 *   The key needs the App Manager role.
 *
 * Usage:
 *   node tools/apple/create-iap-products.js --dry-run
 *   node tools/apple/create-iap-products.js
 *   node tools/apple/create-iap-products.js --screenshots ~/iap-screens
 *   IAP_PRICES='{"monthly":27.99}' node tools/apple/create-iap-products.js   # override USD prices
 *   NCE_GUARANTEE=0 node tools/apple/create-iap-products.js                  # skip the NCE Pass Guarantee
 */
'use strict';

const fs = require('fs');
const os = require('os');
const path = require('path');
const https = require('https');
const crypto = require('crypto');

const API = 'https://api.appstoreconnect.apple.com';
const LOCALE = 'en-US';
const TERRITORY = 'USA';
const PREFIX = process.env.APPLE_IAP_PRODUCT_PREFIX || process.env.APPLE_IAP_BUNDLE_ID || 'com.gaitp.passreadyprep';

const args = process.argv.slice(2);
const DRY = args.includes('--dry-run');
const shotIdx = args.indexOf('--screenshots');
const SHOT_DIR = shotIdx !== -1 ? path.resolve(args[shotIdx + 1] || '') : null;

const REVIEW_NOTE = 'PassReady Prep is an NCMHCE/NCE exam-prep study app. This product unlocks the plan named in its description inside the app; purchases are verified by our server and unlock immediately. Demo account with full access is in App Review Information.';

// ── The catalog (must match utils/appleIap.js) ───────────────────────────────
// App Store Connect limits: localized display name ≤ 30 characters,
// localized description ≤ 55 characters (checked before anything is created).
const PRODUCTS = [
  { tier: 'monthly',       sku: 'ncmhce.monthly',   type: 'subscription', group: 'NCMHCE', usd: 29.99,
    name: 'NCMHCE Monthly', desc: 'Full NCMHCE access, renews monthly. Cancel any time.' },
  { tier: 'pass3',         sku: 'ncmhce.pass3',     type: 'NON_RENEWING_SUBSCRIPTION', usd: 79.99,
    name: 'NCMHCE 3-Month Pass', desc: '90 days of full NCMHCE access. One payment, no renewal.' },
  { tier: 'pass6',         sku: 'ncmhce.pass6',     type: 'NON_RENEWING_SUBSCRIPTION', usd: 149.99,
    name: 'NCMHCE 6-Month Pass', desc: '180 days of full NCMHCE access. One payment.' },
  { tier: 'guarantee',     sku: 'ncmhce.guarantee', type: 'NON_CONSUMABLE', usd: 149.99,
    name: 'NCMHCE Pass Guarantee', desc: 'Unlimited NCMHCE access until you pass. One payment.' },
  { tier: 'guide',         sku: 'guide',            type: 'NON_CONSUMABLE', usd: 24.99,
    name: 'Complete NCMHCE Study Guide', desc: 'Digital study guide: 18 families, 3 practice exams.' },
  { tier: 'nce_monthly',   sku: 'nce.monthly',      type: 'subscription', group: 'NCE', usd: 24.99,
    name: 'NCE Monthly', desc: 'Full NCE access, renews monthly. Cancel any time.' },
  { tier: 'nce_pass3',     sku: 'nce.pass3',        type: 'NON_RENEWING_SUBSCRIPTION', usd: 59.99,
    name: 'NCE 3-Month Pass', desc: '90 days of full NCE access. One payment, no renewal.' },
  { tier: 'nce_pass6',     sku: 'nce.pass6',        type: 'NON_RENEWING_SUBSCRIPTION', usd: 89.99,
    name: 'NCE 6-Month Pass', desc: '180 days of full NCE access. One payment, no renewal.' },
  { tier: 'nce_guarantee', sku: 'nce.guarantee',    type: 'NON_CONSUMABLE', usd: 149.99, optional: process.env.NCE_GUARANTEE === '0',
    name: 'NCE Pass Guarantee', desc: 'Unlimited NCE access until you pass. One payment.' },
];
const GROUPS = {
  NCMHCE: { referenceName: 'NCMHCE', displayName: 'NCMHCE Prep' },
  NCE:    { referenceName: 'NCE',    displayName: 'NCE Prep' },
};
let priceOverrides = {};
try { priceOverrides = JSON.parse(process.env.IAP_PRICES || '{}'); } catch (e) { fail('IAP_PRICES is not valid JSON'); }

function fail(msg) { console.error('✗ ' + msg); process.exit(1); }
for (const p of PRODUCTS) {
  if (p.name.length > 30) fail(`${p.tier}: display name is ${p.name.length} characters; Apple allows 30`);
  if (p.desc.length > 55) fail(`${p.tier}: description is ${p.desc.length} characters; Apple allows 55`);
}
function productId(p) { return `${PREFIX}.${p.sku}`; }

// ── App Store Connect API client ─────────────────────────────────────────────
const KEY_ID = process.env.ASC_KEY_ID;
const ISSUER = process.env.ASC_ISSUER_ID;
const KEY_PATH = (process.env.ASC_KEY_PATH || '~/.appstoreconnect/AuthKey.p8').replace(/^~/, os.homedir());
const APP_ID = process.env.APPLE_APP_ID;

let privateKey = null;
function token() {
  if (!privateKey) privateKey = crypto.createPrivateKey(fs.readFileSync(KEY_PATH, 'utf8'));
  const now = Math.floor(Date.now() / 1000);
  const b64 = (o) => Buffer.from(JSON.stringify(o)).toString('base64url');
  const head = b64({ alg: 'ES256', kid: KEY_ID, typ: 'JWT' });
  const body = b64({ iss: ISSUER, iat: now, exp: now + 15 * 60, aud: 'appstoreconnect-v1' });
  const sig = crypto.sign('sha256', Buffer.from(`${head}.${body}`), { key: privateKey, dsaEncoding: 'ieee-p1363' });
  return `${head}.${body}.${sig.toString('base64url')}`;
}

function request(method, url, body, extraHeaders) {
  return new Promise((resolve, reject) => {
    const u = new URL(url.startsWith('http') ? url : API + url);
    const data = body === undefined ? null : (Buffer.isBuffer(body) ? body : Buffer.from(JSON.stringify(body)));
    const headers = Object.assign({ Authorization: `Bearer ${token()}` }, extraHeaders || {});
    if (data && !Buffer.isBuffer(body)) headers['Content-Type'] = 'application/json';
    if (data) headers['Content-Length'] = data.length;
    const req = https.request(u, { method, headers }, (res) => {
      const chunks = [];
      res.on('data', (c) => chunks.push(c));
      res.on('end', () => {
        const text = Buffer.concat(chunks).toString('utf8');
        let json = null;
        try { json = text ? JSON.parse(text) : null; } catch (e) { json = null; }
        if (res.statusCode >= 200 && res.statusCode < 300) return resolve(json || {});
        const errs = json && json.errors ? json.errors.map((e) => `${e.code || e.status}: ${e.title}${e.detail ? ' — ' + e.detail : ''}`).join('; ') : text.slice(0, 300);
        const err = new Error(`${method} ${u.pathname} → ${res.statusCode} ${errs}`);
        err.status = res.statusCode; err.errors = (json && json.errors) || [];
        reject(err);
      });
    });
    req.on('error', reject);
    if (data) req.write(data);
    req.end();
  });
}
const get = (url) => request('GET', url);
const post = (url, body) => request('POST', url, body);
const patch = (url, body) => request('PATCH', url, body);

// Walks every page of a list endpoint.
async function list(url) {
  const out = [];
  let next = url;
  while (next) {
    const r = await get(next);
    out.push(...(r.data || []));
    next = r.links && r.links.next;
  }
  return out;
}

// ── Steps ────────────────────────────────────────────────────────────────────
function plan(msg) { console.log((DRY ? '  [dry-run] would ' : '  → ') + msg); }
function done(msg) { console.log('  ✓ ' + msg); }

async function ensureGroup(key, existing) {
  const spec = GROUPS[key];
  let group = existing.find((g) => g.attributes.referenceName === spec.referenceName);
  if (!group) {
    plan(`create subscription group "${spec.referenceName}"`);
    if (DRY) return { id: `dry-group-${key}`, attributes: spec, subscriptions: [], localizations: [] };
    group = (await post('/v1/subscriptionGroups', { data: {
      type: 'subscriptionGroups', attributes: { referenceName: spec.referenceName },
      relationships: { app: { data: { type: 'apps', id: APP_ID } } },
    } })).data;
    group.subscriptions = []; group.localizations = [];
    done(`subscription group "${spec.referenceName}" (${group.id})`);
  } else {
    done(`subscription group "${spec.referenceName}" exists (${group.id})`);
  }
  if (!group.localizations.some((l) => l.attributes.locale === LOCALE)) {
    plan(`add ${LOCALE} name "${spec.displayName}" to group "${spec.referenceName}"`);
    if (!DRY) {
      await post('/v1/subscriptionGroupLocalizations', { data: {
        type: 'subscriptionGroupLocalizations', attributes: { name: spec.displayName, locale: LOCALE },
        relationships: { subscriptionGroup: { data: { type: 'subscriptionGroups', id: group.id } } },
      } });
      done(`group name set`);
    }
  }
  return group;
}

async function loadGroups() {
  const groups = await list(`/v1/apps/${APP_ID}/subscriptionGroups?limit=50`);
  for (const g of groups) {
    g.subscriptions = await list(`/v1/subscriptionGroups/${g.id}/subscriptions?limit=50`);
    g.localizations = await list(`/v1/subscriptionGroups/${g.id}/subscriptionGroupLocalizations`);
  }
  return groups;
}

async function nearestPricePoint(url, usd) {
  const points = await list(url);
  const priced = points.map((p) => ({ id: p.id, price: Number(p.attributes.customerPrice) })).filter((p) => !isNaN(p.price));
  if (!priced.length) throw new Error('no price points returned for ' + url);
  priced.sort((a, b) => Math.abs(a.price - usd) - Math.abs(b.price - usd) || a.price - b.price);
  return priced[0];
}

async function ensureSubscription(p, group) {
  const pid = productId(p);
  const usd = priceOverrides[p.tier] != null ? Number(priceOverrides[p.tier]) : p.usd;
  let sub = group.subscriptions.find((s) => s.attributes.productId === pid);
  if (!sub) {
    plan(`create subscription ${pid} "${p.name}" in group ${group.attributes.referenceName}, 1 month`);
    if (DRY) { plan(`price ${pid} at ~$${usd} (${TERRITORY}), ${LOCALE} name/description, availability ${TERRITORY}`); return; }
    sub = (await post('/v1/subscriptions', { data: {
      type: 'subscriptions',
      attributes: { name: p.name, productId: pid, subscriptionPeriod: 'ONE_MONTH', familySharable: false, reviewNote: REVIEW_NOTE, groupLevel: 1 },
      relationships: { group: { data: { type: 'subscriptionGroups', id: group.id } } },
    } })).data;
    done(`subscription ${pid} (${sub.id})`);
  } else {
    done(`subscription ${pid} exists (${sub.id})`);
  }
  if (DRY) return;

  const locs = await list(`/v1/subscriptions/${sub.id}/subscriptionLocalizations`);
  if (!locs.some((l) => l.attributes.locale === LOCALE)) {
    await post('/v1/subscriptionLocalizations', { data: {
      type: 'subscriptionLocalizations', attributes: { name: p.name, description: p.desc, locale: LOCALE },
      relationships: { subscription: { data: { type: 'subscriptions', id: sub.id } } },
    } });
    done(`${LOCALE} name/description set`);
  }

  // Apple rejects a subscription price for a territory the subscription is not
  // yet available in (UNSUPPORTED_TERRITORY), so availability goes first.
  await ensureAvailability('subscriptionAvailabilities', 'subscription', 'subscriptions', sub.id, `/v1/subscriptions/${sub.id}/subscriptionAvailability`);

  const prices = await list(`/v1/subscriptions/${sub.id}/prices?filter[territory]=${TERRITORY}&limit=50`);
  if (!prices.length) {
    const point = await nearestPricePoint(`/v1/subscriptions/${sub.id}/pricePoints?filter[territory]=${TERRITORY}&limit=200`, usd);
    await post('/v1/subscriptionPrices', { data: {
      type: 'subscriptionPrices', attributes: { preserveCurrentPrice: false },
      relationships: {
        subscription: { data: { type: 'subscriptions', id: sub.id } },
        subscriptionPricePoint: { data: { type: 'subscriptionPricePoints', id: point.id } },
        territory: { data: { type: 'territories', id: TERRITORY } },
      },
    } });
    done(`price set: $${point.price.toFixed(2)}${point.price !== usd ? ` (nearest price point to $${usd})` : ''}`);
  } else {
    done('price already set');
  }

  await ensureScreenshot(p, 'subscriptionAppStoreReviewScreenshots', 'subscription', 'subscriptions', sub.id, `/v1/subscriptions/${sub.id}/appStoreReviewScreenshot`);
}

async function ensureInAppPurchase(p, existing) {
  const pid = productId(p);
  const usd = priceOverrides[p.tier] != null ? Number(priceOverrides[p.tier]) : p.usd;
  let iap = existing.find((i) => i.attributes.productId === pid);
  if (!iap) {
    plan(`create ${p.type.toLowerCase().replace(/_/g, ' ')} ${pid} "${p.name}"`);
    if (DRY) { plan(`price ${pid} at ~$${usd} (${TERRITORY}), ${LOCALE} name/description, availability ${TERRITORY}`); return; }
    iap = (await post('/v2/inAppPurchases', { data: {
      type: 'inAppPurchases',
      attributes: { name: p.name, productId: pid, inAppPurchaseType: p.type, reviewNote: REVIEW_NOTE },
      relationships: { app: { data: { type: 'apps', id: APP_ID } } },
    } })).data;
    done(`${pid} (${iap.id})`);
  } else {
    done(`${pid} exists (${iap.id})`);
  }
  if (DRY) return;

  const locs = await list(`/v2/inAppPurchases/${iap.id}/inAppPurchaseLocalizations`);
  if (!locs.some((l) => l.attributes.locale === LOCALE)) {
    await post('/v1/inAppPurchaseLocalizations', { data: {
      type: 'inAppPurchaseLocalizations', attributes: { name: p.name, description: p.desc, locale: LOCALE },
      relationships: { inAppPurchaseV2: { data: { type: 'inAppPurchases', id: iap.id } } },
    } });
    done(`${LOCALE} name/description set`);
  }

  let hasPrice = false;
  try { const r = await get(`/v2/inAppPurchases/${iap.id}/iapPriceSchedule`); hasPrice = !!(r.data && r.data.id); } catch (e) { if (e.status !== 404) throw e; }
  if (!hasPrice) {
    const point = await nearestPricePoint(`/v2/inAppPurchases/${iap.id}/pricePoints?filter[territory]=${TERRITORY}&limit=200`, usd);
    await post('/v1/inAppPurchasePriceSchedules', {
      data: {
        type: 'inAppPurchasePriceSchedules',
        relationships: {
          inAppPurchase: { data: { type: 'inAppPurchases', id: iap.id } },
          baseTerritory: { data: { type: 'territories', id: TERRITORY } },
          manualPrices: { data: [{ type: 'inAppPurchasePrices', id: '${price-usa}' }] },
        },
      },
      included: [{
        type: 'inAppPurchasePrices', id: '${price-usa}',
        attributes: { startDate: null },
        relationships: { inAppPurchasePricePoint: { data: { type: 'inAppPurchasePricePoints', id: point.id } } },
      }],
    });
    done(`price set: $${point.price.toFixed(2)}${point.price !== usd ? ` (nearest price point to $${usd})` : ''}`);
  } else {
    done('price already set');
  }

  await ensureAvailability('inAppPurchaseAvailabilities', 'inAppPurchase', 'inAppPurchases', iap.id, `/v2/inAppPurchases/${iap.id}/inAppPurchaseAvailability`);
  await ensureScreenshot(p, 'inAppPurchaseAppStoreReviewScreenshots', 'inAppPurchaseV2', 'inAppPurchases', iap.id, `/v2/inAppPurchases/${iap.id}/appStoreReviewScreenshot`);
}

async function ensureAvailability(type, relName, relType, id, readUrl) {
  let has = false;
  try { const r = await get(readUrl); has = !!(r.data && r.data.id); } catch (e) { if (e.status !== 404) throw e; }
  if (has) return;
  await post(`/v1/${type}`, { data: {
    type, attributes: { availableInNewTerritories: false },
    relationships: {
      [relName]: { data: { type: relType, id } },
      availableTerritories: { data: [{ type: 'territories', id: TERRITORY }] },
    },
  } });
  done(`available in ${TERRITORY}`);
}

// Review screenshot: reserve → upload the bytes to Apple's storage → commit.
async function ensureScreenshot(p, type, relName, relType, id, readUrl) {
  if (!SHOT_DIR) return;
  const file = [path.join(SHOT_DIR, `${p.tier}.png`), path.join(SHOT_DIR, `${p.tier}.jpg`), path.join(SHOT_DIR, 'default.png'), path.join(SHOT_DIR, 'default.jpg')]
    .find((f) => fs.existsSync(f));
  if (!file) { console.log(`  · no screenshot for ${p.tier} in ${SHOT_DIR} (expected ${p.tier}.png or default.png)`); return; }
  let has = false;
  try { const r = await get(readUrl); has = !!(r.data && r.data.id); } catch (e) { if (e.status !== 404) throw e; }
  if (has) { done('review screenshot already uploaded'); return; }

  const bytes = fs.readFileSync(file);
  const reservation = (await post(`/v1/${type}`, { data: {
    type, attributes: { fileName: path.basename(file), fileSize: bytes.length },
    relationships: { [relName]: { data: { type: relType, id } } },
  } })).data;
  for (const op of reservation.attributes.uploadOperations || []) {
    const headers = {};
    for (const h of op.requestHeaders || []) headers[h.name] = h.value;
    await request(op.method || 'PUT', op.url, bytes.subarray(op.offset, op.offset + op.length), headers);
  }
  await patch(`/v1/${type}/${reservation.id}`, { data: {
    type, id: reservation.id,
    attributes: { uploaded: true, sourceFileChecksum: crypto.createHash('md5').update(bytes).digest('hex') },
  } });
  done(`review screenshot uploaded (${path.basename(file)})`);
}

// ── Main ─────────────────────────────────────────────────────────────────────
(async () => {
  if (!APP_ID || !/^\d+$/.test(APP_ID)) fail('APPLE_APP_ID must be the app\'s numeric Apple ID');
  if (!DRY) {
    if (!KEY_ID || !ISSUER) fail('ASC_KEY_ID and ASC_ISSUER_ID are required (same values as client/ios/App/fastlane/.env)');
    if (!fs.existsSync(KEY_PATH)) fail(`API key not found at ${KEY_PATH} (set ASC_KEY_PATH)`);
  }
  if (SHOT_DIR && !fs.existsSync(SHOT_DIR)) fail(`--screenshots folder not found: ${SHOT_DIR}`);

  const wanted = PRODUCTS.filter((p) => !p.optional);
  console.log(`${DRY ? 'Dry run — ' : ''}App ${APP_ID}, prefix ${PREFIX}, ${wanted.length} products` + (PRODUCTS.some((p) => p.optional) ? ' (NCE Pass Guarantee skipped: NCE_GUARANTEE=0)' : ''));

  let groups = [], iaps = [];
  if (!DRY) {
    const app = await get(`/v1/apps/${APP_ID}?fields[apps]=name,bundleId`);
    console.log(`App Store Connect: ${app.data.attributes.name} (${app.data.attributes.bundleId})`);
    if (app.data.attributes.bundleId !== PREFIX && !process.env.APPLE_IAP_PRODUCT_PREFIX) {
      fail(`bundle ID ${app.data.attributes.bundleId} does not match the product prefix ${PREFIX}; set APPLE_IAP_PRODUCT_PREFIX explicitly if that is intended`);
    }
    groups = await loadGroups();
    iaps = await list(`/v1/apps/${APP_ID}/inAppPurchasesV2?limit=200`);
  }

  console.log('\nSubscription groups');
  const groupById = {};
  for (const key of Object.keys(GROUPS)) groupById[key] = await ensureGroup(key, groups);

  for (const p of wanted) {
    console.log(`\n${p.name} — ${productId(p)}`);
    try {
      if (p.type === 'subscription') await ensureSubscription(p, groupById[p.group]);
      else await ensureInAppPurchase(p, iaps);
    } catch (err) {
      console.error(`  ✗ ${err.message}`);
      process.exitCode = 1;
    }
  }

  console.log(`\n${DRY ? 'Nothing was changed (dry run).' : process.exitCode ? 'Finished with errors — fix the ones above and re-run; completed steps are skipped.' : 'Done.'}
Still by hand in App Store Connect:
  1. Agreements, Tax, and Banking → Paid Apps agreement active.
  2. The app version page → In-App Purchases and Subscriptions → add all products to the submission.${SHOT_DIR ? '' : '\n  3. A review screenshot on each product (or re-run with --screenshots DIR).'}`);
})().catch((err) => fail(err.message));
