// ============================================================================
// Apple In-App Purchase (StoreKit 2) — product catalog + signed-data verifier.
//
// The iOS app sells the same plans the website sells through Stripe, but via
// App Store In-App Purchase (App Store guideline 3.1.1). The app never talks to
// Apple's servers itself: StoreKit hands it a signed transaction (JWS) and the
// app posts that to routes/applePayment.js, which verifies the signature here
// against Apple's root certificates and then grants exactly what the Stripe
// webhook would have granted for the same tier.
//
// Product IDs are APPLE_IAP_PRODUCT_PREFIX + '.' + sku below. They must match
// the In-App Purchases created in App Store Connect — see
// docs/AppReview_Reply_v1.0_build2.md for the list and the product types.
//
// Environment:
//   APPLE_APP_ID            — the app's numeric Apple ID (App Store Connect →
//                             App Information → General → Apple ID). Required
//                             to verify production purchases; without it only
//                             sandbox (TestFlight / App Review) purchases verify.
//   APPLE_IAP_BUNDLE_ID     — defaults to com.gaitp.passreadyprep
//   APPLE_IAP_PRODUCT_PREFIX— defaults to the bundle ID
//   APPLE_ROOT_CA_DIR       — folder of Apple root certificates (.cer DER or
//                             .pem). Defaults to certs/apple. When the folder
//                             is empty they are downloaded from apple.com once
//                             per process and cached there if writable.
//   APPLE_IAP_ONLINE_CHECKS — '0' turns off OCSP revocation checks (default on)
//   APPLE_IAP_ALLOW_SANDBOX — '0' rejects sandbox transactions (default: accept,
//                             because App Review buys in the sandbox)
// ============================================================================

const fs = require('fs');
const path = require('path');
const https = require('https');
const { X509Certificate } = require('crypto');
const { SignedDataVerifier, Environment } = require('@apple/app-store-server-library');

const BUNDLE_ID = process.env.APPLE_IAP_BUNDLE_ID || 'com.gaitp.passreadyprep';
const PRODUCT_PREFIX = process.env.APPLE_IAP_PRODUCT_PREFIX || BUNDLE_ID;
const APP_APPLE_ID = /^\d+$/.test(process.env.APPLE_APP_ID || '') ? Number(process.env.APPLE_APP_ID) : null;
const ONLINE_CHECKS = process.env.APPLE_IAP_ONLINE_CHECKS !== '0';
const ALLOW_SANDBOX = process.env.APPLE_IAP_ALLOW_SANDBOX !== '0';
const CERT_DIR = process.env.APPLE_ROOT_CA_DIR || path.join(__dirname, '..', 'certs', 'apple');

// Apple's public root certificates (https://www.apple.com/certificateauthority/).
// StoreKit signatures chain to Apple Root CA - G3; the other two are included
// so a future chain change does not break verification.
const ROOT_CERT_URLS = [
  'https://www.apple.com/certificateauthority/AppleRootCA-G3.cer',
  'https://www.apple.com/certificateauthority/AppleRootCA-G2.cer',
  'https://www.apple.com/appleca/AppleIncRootCertificate.cer',
];

// ── Catalog ──────────────────────────────────────────────────────────────────
// `tier` is the same key routes/payment.js uses (TIERS), so access rules —
// accessDays, exam, guarantee, entitlementOnly — come from there and the two
// stores can never drift apart. `kind` is the App Store product type to create.
const CATALOG = [
  { tier: 'monthly',       sku: 'ncmhce.monthly',   kind: 'autoRenewable', name: 'NCMHCE Monthly' },
  // SKU note: the original ncmhce.pass3 / ncmhce.pass6 product IDs were used
  // in an earlier attempt as Non-Renewing Subscriptions. Apple locks those IDs
  // permanently once registered, even after the product is removed from the UI,
  // so the auto-renewable versions use fresh SKUs (ncmhce.sub3mo / ncmhce.sub6mo).
  { tier: 'pass3',         sku: 'ncmhce.sub3mo',    kind: 'autoRenewable', name: 'NCMHCE 3-Month' },
  { tier: 'pass6',         sku: 'ncmhce.sub6mo',    kind: 'autoRenewable', name: 'NCMHCE 6-Month' },
  { tier: 'guarantee',     sku: 'ncmhce.guarantee', kind: 'nonConsumable', name: 'NCMHCE Pass Guarantee' },
  { tier: 'guide',         sku: 'guide',            kind: 'nonConsumable', name: 'The Complete NCMHCE Study Guide' },
  { tier: 'nce_monthly',   sku: 'nce.monthly',      kind: 'autoRenewable', name: 'NCE Monthly' },
  { tier: 'nce_pass3',     sku: 'nce.sub3mo',       kind: 'autoRenewable', name: 'NCE 3-Month' },
  { tier: 'nce_pass6',     sku: 'nce.sub6mo',       kind: 'autoRenewable', name: 'NCE 6-Month' },
  // Mirrors the website: the NCE guarantee is only on sale once it is priced.
  { tier: 'nce_guarantee', sku: 'nce.guarantee',    kind: 'nonConsumable', name: 'NCE Pass Guarantee',
    offered: () => !!process.env.STRIPE_PRICE_NCE_GUARANTEE || process.env.APPLE_IAP_OFFER_NCE_GUARANTEE === '1' },
];

function productId(entry) { return `${PRODUCT_PREFIX}.${entry.sku}`; }

// Everything currently on sale in the app: [{ tier, productId, kind, name }].
function offeredProducts() {
  return CATALOG
    .filter((e) => !e.offered || e.offered())
    .map((e) => ({ tier: e.tier, productId: productId(e), kind: e.kind, name: e.name }));
}

// Catalog entry for an App Store product ID, or null for an unknown product.
function entryForProductId(id) {
  const e = CATALOG.find((c) => productId(c) === id);
  return e ? { ...e, productId: id } : null;
}

// Verification is configured when the app's Apple ID is known (production)
// — sandbox-only is enough for TestFlight and App Review but not for sale.
function isConfigured() { return APP_APPLE_ID !== null || ALLOW_SANDBOX; }
function isProductionConfigured() { return APP_APPLE_ID !== null; }

// ── Root certificates ───────────────────────────────────────────────────────
function toDer(buf) {
  const text = buf.toString('utf8');
  if (text.includes('-----BEGIN')) return new X509Certificate(text).raw;
  return new X509Certificate(buf).raw; // throws if it is not a certificate
}

function loadLocalRoots() {
  let files = [];
  try { files = fs.readdirSync(CERT_DIR).filter((f) => /\.(cer|der|crt|pem)$/i.test(f)); } catch (_) { return []; }
  const out = [];
  for (const f of files) {
    try { out.push(toDer(fs.readFileSync(path.join(CERT_DIR, f)))); }
    catch (err) { console.warn(`apple-iap: ignoring ${f} in ${CERT_DIR}: ${err.message}`); }
  }
  return out;
}

function download(url) {
  return new Promise((resolve, reject) => {
    const req = https.get(url, { timeout: 15000 }, (res) => {
      if (res.statusCode !== 200) { res.resume(); return reject(new Error(`${url} → HTTP ${res.statusCode}`)); }
      const chunks = [];
      res.on('data', (c) => chunks.push(c));
      res.on('end', () => resolve(Buffer.concat(chunks)));
      res.on('error', reject);
    });
    req.on('timeout', () => req.destroy(new Error(`${url} timed out`)));
    req.on('error', reject);
  });
}

let rootsPromise = null;
async function appleRootCertificates() {
  if (rootsPromise) return rootsPromise;
  rootsPromise = (async () => {
    const local = loadLocalRoots();
    if (local.length) return local;
    const out = [];
    for (const url of ROOT_CERT_URLS) {
      try {
        const der = toDer(await download(url));
        out.push(der);
        try {
          fs.mkdirSync(CERT_DIR, { recursive: true });
          fs.writeFileSync(path.join(CERT_DIR, path.basename(url)), der);
        } catch (_) { /* read-only filesystem: keep in memory only */ }
      } catch (err) {
        console.warn(`apple-iap: could not fetch ${url}: ${err.message}`);
      }
    }
    if (!out.length) {
      rootsPromise = null; // try again on the next request
      throw new Error('Apple root certificates are unavailable (no files in ' + CERT_DIR + ' and download failed)');
    }
    return out;
  })();
  return rootsPromise;
}

// ── Verifiers ───────────────────────────────────────────────────────────────
// One SignedDataVerifier per App Store environment: the library binds a
// verifier to a single environment and rejects payloads from the other.
const verifiers = {};
async function verifierFor(environment) {
  if (environment === Environment.PRODUCTION && APP_APPLE_ID === null) {
    throw new VerifyError('Production purchases cannot be verified until APPLE_APP_ID is set', 'not_configured', 503);
  }
  if (environment === Environment.SANDBOX && !ALLOW_SANDBOX) {
    throw new VerifyError('Sandbox purchases are not accepted', 'sandbox_rejected', 400);
  }
  if (!verifiers[environment]) {
    const roots = await appleRootCertificates();
    verifiers[environment] = new SignedDataVerifier(
      roots, ONLINE_CHECKS, environment, BUNDLE_ID,
      environment === Environment.PRODUCTION ? APP_APPLE_ID : undefined
    );
  }
  return verifiers[environment];
}

class VerifyError extends Error {
  constructor(message, code, status) { super(message); this.code = code || 'invalid'; this.status = status || 400; }
}

const JWS_RE = /^[A-Za-z0-9_-]+\.[A-Za-z0-9_-]+\.[A-Za-z0-9_-]+$/;
function isJws(s) { return typeof s === 'string' && s.length >= 20 && s.length <= 64 * 1024 && JWS_RE.test(s); }

// Reads the unverified payload only to learn which environment signed it —
// the real check is done by the environment's verifier right after.
function peekEnvironment(jws, fromNotification) {
  try {
    const body = JSON.parse(Buffer.from(jws.split('.')[1], 'base64url').toString('utf8'));
    const env = fromNotification ? (body.data || body.summary || {}).environment : body.environment;
    return env === 'Sandbox' ? Environment.SANDBOX : Environment.PRODUCTION;
  } catch (_) { return Environment.PRODUCTION; }
}

function wrap(err) {
  if (err instanceof VerifyError) return err;
  const status = err && err.status !== undefined ? err.status : undefined; // VerificationException.status
  const code = status !== undefined ? `verification_${status}` : 'verification_failed';
  const e = new VerifyError('This purchase could not be verified with Apple', code, 400);
  e.cause = err;
  return e;
}

// A signed transaction from the device (StoreKit `jwsRepresentation`) or from
// a server notification → decoded JWSTransactionDecodedPayload.
async function verifyTransaction(jws) {
  if (!isJws(jws)) throw new VerifyError('A signed transaction is required', 'bad_request', 400);
  const env = peekEnvironment(jws);
  try { return await (await verifierFor(env)).verifyAndDecodeTransaction(jws); }
  catch (err) { throw wrap(err); }
}

async function verifyRenewalInfo(jws) {
  if (!isJws(jws)) throw new VerifyError('A signed renewal info is required', 'bad_request', 400);
  const env = peekEnvironment(jws);
  try { return await (await verifierFor(env)).verifyAndDecodeRenewalInfo(jws); }
  catch (err) { throw wrap(err); }
}

// App Store Server Notification V2 `signedPayload` → ResponseBodyV2DecodedPayload.
async function verifyNotification(signedPayload) {
  if (!isJws(signedPayload)) throw new VerifyError('signedPayload is required', 'bad_request', 400);
  const env = peekEnvironment(signedPayload, true);
  try { return await (await verifierFor(env)).verifyAndDecodeNotification(signedPayload); }
  catch (err) { throw wrap(err); }
}

module.exports = {
  BUNDLE_ID,
  PRODUCT_PREFIX,
  CATALOG,
  VerifyError,
  isJws,
  productId,
  offeredProducts,
  entryForProductId,
  isConfigured,
  isProductionConfigured,
  appleRootCertificates,
  verifyTransaction,
  verifyRenewalInfo,
  verifyNotification,
};
