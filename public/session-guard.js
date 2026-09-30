/* PassReady Prep — signed-out banner.
 * One account can be signed in on one device at a time (middleware/auth.js).
 * When another device signs in, this device's requests come back 401 with
 * code SESSION_INVALIDATED. Instead of each page showing a raw error, this
 * clears the stale sign-in and shows one banner with a Sign in button.
 * Injected on every page (server.js injectA11y, client/scripts/build-ios.mjs).
 * Pages that already handle it themselves are skipped. */
(function () {
  var p = location.pathname;
  if (/^\/(register|checkout|delete-account)\.html$/.test(p) || /^\/(admin|review)/.test(p)) return;
  if (typeof window.fetch !== 'function') return;

  var shown = false;

  function signOut() {
    try { localStorage.removeItem('prp_token'); localStorage.removeItem('prp_user'); } catch (e) {}
  }

  function showBanner() {
    if (shown) return;
    shown = true;
    var next = encodeURIComponent(location.pathname + location.search);
    var bar = document.createElement('div');
    bar.setAttribute('role', 'alert');
    bar.style.cssText = 'position:fixed;left:12px;right:12px;top:calc(env(safe-area-inset-top, 0px) + 12px);z-index:2147483000;' +
      'max-width:560px;margin:0 auto;display:flex;align-items:center;gap:12px;flex-wrap:wrap;' +
      'background:#1E293B;border:1px solid rgba(52,211,153,.45);border-radius:14px;padding:12px 14px;' +
      'box-shadow:0 18px 40px -12px rgba(0,0,0,.6);font:14px/1.45 system-ui,-apple-system,"Segoe UI",Roboto,sans-serif;color:#E2E8F0';
    bar.innerHTML =
      '<span style="flex:1 1 220px">You were signed out because your account was signed in on another device.</span>' +
      '<a href="/register.html?tab=login&next=' + next + '" style="background:#10B981;color:#04261C;font-weight:700;' +
      'text-decoration:none;border-radius:10px;padding:8px 14px;white-space:nowrap">Sign in</a>' +
      '<button type="button" aria-label="Dismiss" style="background:none;border:none;color:#94A3B8;font-size:20px;line-height:1;cursor:pointer;padding:2px 4px">&times;</button>';
    bar.querySelector('button').onclick = function () { bar.remove(); };
    (document.body || document.documentElement).appendChild(bar);
  }

  function handle() {
    signOut();
    if (document.body) showBanner();
    else document.addEventListener('DOMContentLoaded', showBanner);
  }

  var origFetch = window.fetch;
  window.fetch = function () {
    return origFetch.apply(this, arguments).then(function (res) {
      if (res && res.status === 401) {
        try {
          res.clone().json().then(function (j) {
            if (j && j.code === 'SESSION_INVALIDATED') handle();
          }, function () {});
        } catch (e) {}
      }
      return res;
    });
  };
})();
