/* PassReady Prep — App Store In-App Purchase layer (Capacitor iOS, local bundle).
 *
 * Loaded right after native-shim.js on every bundled page (build-ios.mjs).
 * No-op in a normal browser. Buying needs no account: see ensureAccount().
 *
 * Apple requires paid content in the app to be sold through In-App Purchase
 * (guideline 3.1.1), so in the app:
 *   - every "buy" path lands on /purchase.html, which buys through StoreKit
 *     (ios/App/App/StoreKitPlugin.swift) and has the server verify the signed
 *     transaction (routes/applePayment.js) before anything unlocks;
 *   - the pages' existing Stripe calls are answered locally:
 *       POST /api/payment/create-checkout-session → { url: '/purchase.html?tier=…' }
 *       GET  /api/payment/plans?exam=…            → App Store prices
 *   - [data-iap-tier] elements show the App Store price;
 *   - purchases made on another device, renewals and interrupted purchases
 *     are picked up on launch and sent to the server (idempotent).
 * Everything is exposed as window.PRP_IAP for purchase.html / account.html. */
(function () {
  if (!window.PRP_NATIVE) return;
  var cap = window.Capacitor;
  // Capacitor 8 exposes bridged plugins at Capacitor.Plugins.<jsName>.
  // StoreKitPlugin.swift sets jsName = "StoreKit" and is registered in
  // AppViewController.capacitorDidLoad() via bridge.registerPluginInstance.
  var plugin = cap && cap.Plugins && cap.Plugins.StoreKit;
  if (!plugin) return;

  var PLUGIN = 'StoreKit';
  var SYNC_KEY = 'prp_iap_sync';
  var SYNC_EVERY = 6 * 60 * 60 * 1000;

  function native(method, opts) { return plugin[method](opts || {}); }
  function get(k) { try { return localStorage.getItem(k); } catch (e) { return null; } }
  function set(k, v) { try { localStorage.setItem(k, v); } catch (e) {} }
  function del(k) { try { localStorage.removeItem(k); } catch (e) {} }
  function token() { return get('prp_token'); }
  function hash(s) { var h = 0; for (var i = 0; i < s.length; i++) { h = (h * 31 + s.charCodeAt(i)) | 0; } return String(h); }
  function fail(message, code, status) { var e = new Error(message); e.code = code; e.status = status; return e; }

  function api(path, opts) {
    opts = opts || {};
    var headers = opts.headers || {};
    var t = token();
    if (t) headers.Authorization = 'Bearer ' + t;
    if (opts.body && typeof opts.body !== 'string') { headers['Content-Type'] = 'application/json'; opts.body = JSON.stringify(opts.body); }
    opts.headers = headers;
    return fetch(path, opts).then(function (r) {
      return r.json().catch(function () { return {}; }).then(function (j) {
        if (!r.ok) throw fail(j.error || ('Request failed (' + r.status + ')'), j.code, r.status);
        return j;
      });
    });
  }

  function remember(user) {
    if (user) set('prp_user', JSON.stringify(user));
    del('prp_gate'); // tool-gate.js caches the last access answer for 10 minutes
  }

  // ── Catalog + App Store products ───────────────────────────────────────
  var catalogPromise = null;
  function catalog() {
    if (!catalogPromise) {
      catalogPromise = api('/api/payment/apple/products').catch(function () {
        catalogPromise = null;
        return { enabled: false, products: [] };
      });
    }
    return catalogPromise;
  }

  var productsPromise = null;
  // → { enabled, byTier: { tier: { tier, productId, kind, name, displayPrice, price, currency, type, subscriptionPeriod } } }
  function products() {
    if (!productsPromise) {
      productsPromise = catalog().then(function (c) {
        var list = c.products || [];
        if (!c.enabled || !list.length) return { enabled: false, byTier: {} };
        return native('getProducts', { ids: list.map(function (p) { return p.productId; }) }).then(function (r) {
          var byId = {};
          (r.products || []).forEach(function (p) { byId[p.id] = p; });
          var byTier = {};
          list.forEach(function (p) { if (byId[p.productId]) byTier[p.tier] = Object.assign({}, p, byId[p.productId]); });
          return { enabled: true, byTier: byTier };
        });
      }).catch(function () {
        productsPromise = null; // try again next time
        return { enabled: false, byTier: {}, error: true };
      });
    }
    return productsPromise;
  }

  // ── Verify with the server, then let StoreKit finish the transaction ───
  function finish(transactionId) {
    if (transactionId) native('finishTransaction', { transactionId: String(transactionId) }).catch(function () {});
  }

  function verify(jws, transactionId) {
    return api('/api/payment/apple/verify', { method: 'POST', body: { jws: jws } })
      .then(function (v) { remember(v.user); finish(transactionId); return v; })
      .catch(function (e) {
        // A definite answer (bad product, owned by another account, …) will
        // not change on retry — finish it so StoreKit stops re-delivering.
        if (e.status && e.status < 500 && e.code !== 'not_configured') finish(transactionId);
        throw e;
      });
  }

  // auto: the launch sync, not a tap on Restore purchases (see routes/applePayment.js).
  function sendRestore(list, auto) {
    var jwsList = (list || []).map(function (t) { return t.jws; }).filter(Boolean);
    if (!jwsList.length) return Promise.resolve({ ok: true, results: [] });
    return api('/api/payment/apple/restore', { method: 'POST', body: { transactions: jwsList, auto: !!auto } })
      .then(function (v) {
        remember(v.user);
        list.forEach(function (t) { finish(t.transactionId); });
        return v;
      });
  }

  // ── No sign-up needed (App Store guideline 5.1.1(v)) ──────────────────
  // Buying or restoring while signed out first makes a guest account
  // (POST /api/auth/guest — no personal information) and keeps its token on
  // this device, so the purchase has somewhere to live. Creating an account
  // later from register.html upgrades that same guest account.
  var guestPromise = null;
  function ensureAccount() {
    if (token()) return Promise.resolve();
    if (!guestPromise) {
      guestPromise = api('/api/auth/guest', { method: 'POST', body: {} }).then(function (r) {
        set('prp_token', r.token);
        remember(r.user);
      }).catch(function (e) { guestPromise = null; throw e; });
    }
    return guestPromise;
  }
  function isGuest() {
    try { return !!(JSON.parse(get('prp_user') || 'null') || {}).isGuest; } catch (e) { return false; }
  }

  // ── Public API ─────────────────────────────────────────────────────────
  // buy(tier, { guaranteeTermsAccepted }) → { state: 'purchased'|'pending'|'cancelled', result, user }
  function buy(tier, opts) {
    opts = opts || {};
    return ensureAccount().then(function () {
      return api('/api/payment/apple/prepare', { method: 'POST', body: { tier: tier, guaranteeTermsAccepted: !!opts.guaranteeTermsAccepted } });
    })
      .then(function (p) { return native('purchase', { id: p.productId, appAccountToken: p.appAccountToken }); })
      .then(function (r) {
        if (r.state !== 'purchased') return { state: r.state || 'unknown' };
        return verify(r.jws, r.transactionId).then(function (v) { return { state: 'purchased', result: v.result, user: v.user }; });
      });
  }

  // Restore Purchases: everything this Apple ID owns → the signed-in account.
  function restore() {
    return native('restore').then(function (r) {
      var list = r.transactions || [];
      if (!list.length) return { ok: true, results: [] }; // nothing to restore: no guest account needed
      return ensureAccount().then(function () { return sendRestore(list); });
    });
  }

  function manageSubscriptions() { return native('manageSubscriptions'); }

  // [data-iap-tier="monthly"] shows the App Store price. A pricing block with
  // a .amt child keeps its markup (the "$" prefix is folded into the price).
  function syncPrices(root) {
    var els = (root || document).querySelectorAll('[data-iap-tier]');
    if (!els.length) return Promise.resolve();
    return products().then(function (p) {
      if (!p.enabled) return;
      Array.prototype.forEach.call(els, function (el) {
        var prod = p.byTier[el.getAttribute('data-iap-tier')];
        if (!prod) return;
        var amt = el.querySelector('.amt');
        if (amt) {
          var cent = el.querySelector('.cent');
          if (cent) cent.textContent = '';
          amt.textContent = prod.displayPrice;
        } else {
          el.textContent = prod.displayPrice;
        }
      });
    });
  }

  // Launch sync: once per sign-in every few hours, send the device's current
  // entitlements so renewals and purchases from another device are applied.
  function syncOnLaunch() {
    var t = token();
    if (!t) return;
    var tag = hash(t), last = null;
    try { last = JSON.parse(get(SYNC_KEY) || 'null'); } catch (e) {}
    if (last && last.t === tag && Date.now() - last.at < SYNC_EVERY) return;
    native('currentEntitlements')
      .then(function (r) { return sendRestore((r && r.transactions) || [], true); })
      .then(function () { set(SYNC_KEY, JSON.stringify({ t: tag, at: Date.now() })); })
      .catch(function () {});
  }

  // Renewals and purchases completed while the app runs (Ask to Buy, another
  // device) arrive from StoreKit as events.
  // Capacitor 8: addListener lives on the plugin instance, not the bridge.
  try {
    plugin.addListener('transactionUpdated', function (tx) {
      if (!tx || !tx.jws || !token()) return;
      verify(tx.jws, tx.transactionId).catch(function () {});
    });
  } catch (e) {}

  // ── Answer the pages' Stripe calls locally ─────────────────────────────
  function jsonResponse(status, body) {
    return Promise.resolve(new Response(JSON.stringify(body), { status: status, headers: { 'Content-Type': 'application/json' } }));
  }
  var origFetch = window.fetch;
  window.fetch = function (input, init) {
    var url = typeof input === 'string' ? input : (input && input.url) || '';
    var path = url.replace(/^https?:\/\/[^/]+/, '');
    if (path.indexOf('/api/payment/create-checkout-session') === 0) {
      // No sign-in check: purchase.html buys without an account.
      var tier = 'pass3';
      try { tier = JSON.parse((init && init.body) || '{}').tier || tier; } catch (e) {}
      return jsonResponse(200, { url: '/purchase.html?tier=' + encodeURIComponent(tier) });
    }
    if (/^\/api\/payment\/plans(\?|$)/.test(path)) {
      var exam = (path.match(/[?&]exam=([a-z]+)/) || [])[1] || 'ncmhce';
      var args = arguments, self = this;
      return products().then(function (p) {
        if (!p.enabled) return origFetch.apply(self, args);
        var plans = Object.keys(p.byTier).filter(function (t) {
          return (t.indexOf('nce_') === 0 ? 'nce' : 'ncmhce') === exam && t !== 'guide';
        }).map(function (t) {
          var prod = p.byTier[t];
          return {
            tier: t,
            amount: Math.round((prod.price || 0) * 100),
            currency: String(prod.currency || 'usd').toLowerCase(),
            interval: prod.type === 'autoRenewable' ? 'month' : null,
            displayPrice: prod.displayPrice,
          };
        });
        return jsonResponse(200, { exam: exam, plans: plans, source: 'apple' });
      });
    }
    return origFetch.apply(this, arguments);
  };

  window.PRP_IAP = {
    products: products,
    buy: buy,
    isGuest: isGuest,
    verify: verify,
    restore: restore,
    manageSubscriptions: manageSubscriptions,
    syncPrices: syncPrices,
  };

  function onReady() {
    syncPrices();
    setTimeout(syncOnLaunch, 1500);
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', onReady);
  else onReady();
})();
