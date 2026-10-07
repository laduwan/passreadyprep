/* PassReady Prep — NCMHCE study-tool gate.
 * Include first thing in <head> of a members-only NCMHCE tool page:
 *   <script src="/tool-gate.js" data-tool="Clinical podcast"></script>
 * Registered accounts can use every tool during the free trial (utils/trial.js);
 * after that an active NCMHCE plan is needed. The level comes from
 * GET /api/content/access, the same rules as the case paywall. NCE has its own
 * gate (utils/nceAccess.js). Flashcards and the study guide stay free and do not
 * include this script.
 *
 * Preview mode: on a page whose .wrap holds a static <section class="tool-about">,
 * a shut gate hides only the interactive tool. The page header, <h1>, .lead,
 * About section and Study tools footer stay visible, with the gate box placed
 * where the tool was, so signed-out visitors (and search engines) see what the
 * page covers. Pages without that section keep the full-page lock. */
(function () {
  var me = document.currentScript;
  var TOOL = (me && me.getAttribute('data-tool')) || 'This study tool';
  var KEY = 'prp_gate';
  var FRESH_MS = 10 * 60 * 1000;   // a cached "allowed" answer shows the page at once for 10 min
  var TIMEOUT_MS = 6000;
  var root = document.documentElement;

  function get(k) { try { return localStorage.getItem(k); } catch (e) { return null; } }
  function set(k, v) { try { localStorage.setItem(k, v); } catch (e) {} }
  function esc(s) { return String(s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); }
  function hash(s) { var h = 0; for (var i = 0; i < s.length; i++) { h = (h * 31 + s.charCodeAt(i)) | 0; } return String(h); }
  function allowed(level) { return level === 'trial' || level === 'paid'; }

  var style = document.createElement('style');
  style.textContent = 'html.prp-gate-wait body{visibility:hidden}' +
    'html.prp-gate-shut:not(.prp-gate-preview) body>*:not(#prp-gate){display:none!important}' +
    'html.prp-gate-preview .wrap>*:not(header):not(h1):not(.lead):not(.tool-about):not(footer.site):not(#prp-gate){display:none!important}';
  (document.head || root).appendChild(style);

  var token = get('prp_token');
  var tag = token ? hash(token) : '';
  var cached = null;
  try { cached = JSON.parse(get(KEY) || 'null'); } catch (e) {}
  if (cached && cached.t !== tag) cached = null; // a different sign-in

  function open() {
    root.classList.remove('prp-gate-wait', 'prp-gate-shut', 'prp-gate-preview');
    var g = document.getElementById('prp-gate');
    if (g) g.parentNode.removeChild(g);
  }

  function shut(level) {
    function render() {
      [].forEach.call(document.querySelectorAll('audio,video'), function (m) { try { m.pause(); } catch (e) {} });
      if (document.getElementById('prp-gate')) return;
      var next = encodeURIComponent(location.pathname + location.search);
      var about = document.querySelector('.wrap > .tool-about');
      var hTag = about ? 'h2' : 'h1'; // preview keeps the page's own <h1>
      var g = level === 'gated'
        ? { title: 'Your access is paused', body: 'Submit your score report to restore access to ' + TOOL + '.', href: '/score-report.html', cta: 'Submit score report ›' }
        : level === 'expired'
        ? { title: 'Your free trial has ended', body: 'Subscribe to keep using ' + TOOL + ' and every other NCMHCE study tool.', href: '/checkout.html?tier=monthly', cta: 'Subscribe ›' }
        : level === 'signin'
        ? { title: 'Sign in to continue', body: 'You were signed out. Sign in to keep using ' + TOOL + '.', href: '/register.html?tab=login&next=' + next, cta: 'Sign in ›' }
        : { title: 'Start your free trial', body: 'Create a free account to start your free trial of ' + TOOL + ' and every other NCMHCE study tool.', href: '/register.html?next=' + next, cta: 'Create an account ›', alt: true };
      var box = document.createElement('div');
      box.id = 'prp-gate';
      box.setAttribute('role', 'region');
      box.setAttribute('aria-label', 'Access required');
      box.style.cssText = (about ? 'max-width:520px;margin:18px auto 0;' : 'max-width:520px;margin:12vh auto 0;padding:0 16px;') +
        'font:16px/1.55 system-ui,-apple-system,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;color:#E2E8F0';
      box.innerHTML =
        (about ? '' : '<a href="/" style="font-size:13px;font-weight:600;color:#94A3B8;text-decoration:none">‹ Dashboard</a>') +
        '<div style="margin-top:14px;text-align:center;background:#1E293B;border:1px solid rgba(51,65,85,.6);border-radius:14px;padding:28px 22px">' +
          '<div style="margin-bottom:12px"><span style="display:inline-block;font-size:12px;font-weight:700;color:#FBBF24;background:rgba(251,191,36,.12);border:1px solid rgba(251,191,36,.3);border-radius:999px;padding:3px 10px">🔒 ' + esc(TOOL) + '</span></div>' +
          '<' + hTag + ' tabindex="-1" style="font-size:22px;margin:0 0 8px;color:#F8FAFC">' + esc(g.title) + '</' + hTag + '>' +
          '<p style="margin:0 auto 18px;max-width:440px;color:#94A3B8">' + esc(g.body) + '</p>' +
          '<a href="' + g.href + '" style="display:inline-block;background:#10B981;color:#04261C;font-weight:700;text-decoration:none;border-radius:10px;padding:12px 22px">' + esc(g.cta) + '</a>' +
          (g.alt ? '<p style="margin:14px 0 0;font-size:14px;color:#94A3B8">Already have an account? <a href="/register.html?tab=login&next=' + next + '" style="color:#34D399">Sign in</a></p>' : '') +
        '</div>';
      if (about) {
        about.parentNode.insertBefore(box, about);
        root.classList.add('prp-gate-preview');
      } else {
        document.body.appendChild(box);
      }
      root.classList.remove('prp-gate-wait');
      root.classList.add('prp-gate-shut');
      try { box.querySelector(hTag).focus({ preventScroll: !!about }); } catch (e) {}
    }
    if (document.body) render(); else document.addEventListener('DOMContentLoaded', render);
  }

  function decide(level) { if (allowed(level)) open(); else shut(level); }

  // Signed out: nothing to check.
  if (!token) { shut('free'); return; }

  var now = Date.now();
  var fresh = cached && allowed(cached.level) && now - cached.at < FRESH_MS && (!cached.until || cached.until > now);
  if (!fresh) root.classList.add('prp-gate-wait');

  var done = false;
  function fallback() {
    // Server unreachable (offline, timeout): a signed-in member keeps access
    // unless the last answer for this sign-in was a denial.
    if (done) return;
    done = true;
    if (cached && !allowed(cached.level)) shut(cached.level); else open();
  }
  setTimeout(fallback, TIMEOUT_MS);

  fetch('/api/content/access', { headers: { Authorization: 'Bearer ' + token }, cache: 'no-store' })
    .then(function (r) {
      if (r.status === 401) return { accessLevel: 'signin' };
      if (!r.ok) throw new Error('HTTP ' + r.status);
      return r.json();
    })
    .then(function (d) {
      var level = d && d.accessLevel;
      if (level === 'signin') { done = true; shut('signin'); return; }
      var until = level === 'trial' && d.trialEndsAt ? Date.parse(d.trialEndsAt) : null;
      set(KEY, JSON.stringify({ t: tag, level: level, at: Date.now(), until: until }));
      done = true;
      decide(level); // the server's answer wins, even after the offline fallback
    })
    .catch(fallback);
})();
