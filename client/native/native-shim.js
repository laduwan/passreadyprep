/* PassReady Prep native shim (Capacitor iOS, local bundle).
 * No-op in a normal browser. Loaded FIRST in <head> of every bundled page by
 * scripts/build-ios.mjs so it runs before any page code calls fetch('/api/...'). */
(function () {
  var native = false;
  try {
    native = location.protocol === 'capacitor:' ||
      !!(window.Capacitor && window.Capacitor.isNativePlatform && window.Capacitor.isNativePlatform());
  } catch (e) {}
  if (!native) return;

  // www directly: the bare domain 307-redirects, which breaks CORS preflights.
  var ORIGIN = 'https://www.passreadyprep.com';
  window.PRP_NATIVE = true;

  // iOS paints the area behind the status bar from the page's own background.
  // Pages with gradient backgrounds leave it white, so give every page a solid
  // navy base (the page's own background still draws on top of it).
  try { document.documentElement.style.backgroundColor = '#0F172A'; } catch (e) {}

  // Every extension-less path loads index.html (the study page) in the app.
  // Mirror the web: / is the landing page, /study stays on the study page.
  if (location.pathname === '/' || location.pathname === '') {
    location.replace('/landing.html' + location.search + location.hash);
    return;
  }

  // Plans are sold in the app through Apple In-App Purchase (StoreKit 2); see
  // client/native/native-iap.js, which answers these payment APIs locally so
  // nothing reaches Stripe from the app. The shim keeps NOTICE for the
  // handful of pages still blocked (study-guide landing, book).
  var NOTICE = 'This page isn\u2019t available in the app.';

  function notice() {
    var el = document.getElementById('prp-notice');
    if (!el) {
      el = document.createElement('div');
      el.id = 'prp-notice';
      el.setAttribute('role', 'status');
      el.style.cssText = 'position:fixed;left:50%;bottom:max(24px,env(safe-area-inset-bottom));transform:translateX(-50%);' +
        'z-index:2147483647;max-width:calc(100% - 32px);background:#1E293B;color:#F8FAFC;border:1px solid rgba(148,163,184,.35);' +
        'border-radius:12px;padding:12px 16px;font:500 14px/1.4 system-ui,-apple-system,"Segoe UI",Roboto,sans-serif;' +
        'box-shadow:0 12px 32px rgba(0,0,0,.45);opacity:0;transition:opacity .2s';
      (document.body || document.documentElement).appendChild(el);
    }
    el.textContent = NOTICE;
    clearTimeout(el._t);
    requestAnimationFrame(function () { el.style.opacity = '1'; });
    el._t = setTimeout(function () { el.style.opacity = '0'; }, 3200);
  }
  window.PRP_NOTICE = notice;

  // Relative API calls go to the live server (the bundle has no backend).
  var origFetch = window.fetch;
  if (typeof origFetch === 'function') {
    window.fetch = function (input, init) {
      if (typeof input === 'string' && input.indexOf('/api') === 0) {
        input = ORIGIN + input;
      }
      return origFetch.call(this, input, init);
    };
  }

  // visit-beacon.js uses sendBeacon, which bypasses fetch.
  if (navigator.sendBeacon) {
    var origBeacon = navigator.sendBeacon;
    navigator.sendBeacon = function (url, data) {
      if (typeof url === 'string' && url.indexOf('/api') === 0) url = ORIGIN + url;
      return origBeacon.call(navigator, url, data);
    };
  }

  // Pages that live only on the web are opened absolutely. iOS Capacitor cancels
  // top-level navigation to a non-app host and hands it to the system browser.
  // Nothing billing-related is on this list.
  var EXTERNAL = ['/policies.html', '/privacy.html', '/score-report.html', '/accessibility.html'];
  // Study-guide marketing landing and the book page are not bundled; a tap
  // shows the neutral notice and stays on the page. checkout.html and
  // purchase.html are bundled and run the IAP flow — not blocked.
  var BLOCKED = ['/nce-study-guide.html', '/book.html', '/book'];
  function blocked(u) {
    return BLOCKED.indexOf(u.pathname) !== -1;
  }
  window.PRP_BLOCKED = function (href) {
    try { return blocked(new URL(href, location.href)); } catch (err) { return false; }
  };

  document.addEventListener('click', function (e) {
    var el = e.target;
    while (el && el.nodeType === 1 && el.tagName !== 'A') el = el.parentNode;
    if (!el || el.tagName !== 'A' || !el.getAttribute('href')) return;
    var u;
    try { u = new URL(el.getAttribute('href'), location.href); } catch (err) { return; }
    if (u.origin !== location.origin) return;
    if (blocked(u)) { e.preventDefault(); e.stopPropagation(); notice(); return; }
    if (EXTERNAL.indexOf(u.pathname) === -1) return;
    e.preventDefault();
    window.location.href = ORIGIN + u.pathname + u.search + u.hash;
  }, true);
})();
