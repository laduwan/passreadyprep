/* ============================================================================
   PassReady Prep — Accessibility widget (a11y.js)
   Loaded site-wide (injected by server.js). Builds a floating button + panel,
   applies user preferences instantly, saves them to localStorage, and — when
   the visitor is signed in — syncs the three persisted prefs to the account
   via PATCH /api/auth/prefs. Vanilla JS, no dependencies, fully defensive.
   ============================================================================ */
(function () {
  'use strict';
  if (window.__prpA11yLoaded) return;
  window.__prpA11yLoaded = true;

  var LS_KEY = 'prp_a11y';
  var TOKEN_KEY = 'prp_token';
  var USER_KEY = 'prp_user';

  // Local working state. fontScale is local-only ('', 'lg', 'xl'); the three
  // booleans mirror User.prefs.accessibility on the server.
  var state = { contrast: false, readable: false, reduceMotion: false, fontScale: '' };

  function readLocal() {
    try {
      var raw = localStorage.getItem(LS_KEY);
      if (raw) return JSON.parse(raw);
    } catch (e) {}
    return null;
  }
  function saveLocal() {
    try { localStorage.setItem(LS_KEY, JSON.stringify(state)); } catch (e) {}
  }
  function token() {
    try { return localStorage.getItem(TOKEN_KEY); } catch (e) { return null; }
  }

  // ---- apply state to <html> ------------------------------------------------
  function apply() {
    var el = document.documentElement;
    el.classList.toggle('a11y-contrast', !!state.contrast);
    el.classList.toggle('a11y-readable', !!state.readable);
    el.classList.toggle('a11y-reduce-motion', !!state.reduceMotion);
    el.classList.remove('a11y-font-lg', 'a11y-font-xl');
    if (state.fontScale === 'lg') el.classList.add('a11y-font-lg');
    else if (state.fontScale === 'xl') el.classList.add('a11y-font-xl');
  }

  // ---- server sync (only the three persisted booleans) ---------------------
  function syncServer() {
    var t = token();
    if (!t) return;
    fetch('/api/auth/prefs', {
      method: 'PATCH',
      headers: { 'content-type': 'application/json', authorization: 'Bearer ' + t },
      body: JSON.stringify({
        accessibility: {
          highContrast: !!state.contrast,
          dyslexiaFont: !!state.readable,
          reducedMotion: !!state.reduceMotion
        }
      })
    }).then(function (r) {
      if (!r.ok) return;
      return r.json().then(function (j) {
        // keep the cached user object in step so other pages see the change
        if (j && j.user) { try { localStorage.setItem(USER_KEY, JSON.stringify(j.user)); } catch (e) {} }
      });
    }).catch(function () { /* offline / not fatal — localStorage still holds it */ });
  }

  // ---- hydrate from server on load (server wins for the 3 booleans) --------
  function hydrateFromServer() {
    var t = token();
    if (!t) return Promise.resolve();
    return fetch('/api/auth/me', { headers: { authorization: 'Bearer ' + t } })
      .then(function (r) { return r.ok ? r.json() : null; })
      .then(function (j) {
        var a = j && j.user && j.user.prefs && j.user.prefs.accessibility;
        if (a) {
          state.contrast = !!a.highContrast;
          state.readable = !!a.dyslexiaFont;
          state.reduceMotion = !!a.reducedMotion;
          saveLocal();
          apply();
        }
      })
      .catch(function () {});
  }

  // ---- skip link ------------------------------------------------------------
  function mainTarget() {
    return document.querySelector('main, [role="main"], #main, #app, #root, .app-main, .wrap, .content');
  }
  function wireSkipLink() {
    var link = document.querySelector('[data-a11y-skip]');
    if (!link) {
      link = document.createElement('a');
      link.href = '#';
      link.className = 'a11y-skip-link';
      link.setAttribute('data-a11y-skip', '');
      link.textContent = 'Skip to main content';
      document.body.insertBefore(link, document.body.firstChild);
    }
    link.addEventListener('click', function (e) {
      e.preventDefault();
      var t = mainTarget();
      if (!t) return;
      if (!t.hasAttribute('tabindex')) t.setAttribute('tabindex', '-1');
      t.focus({ preventScroll: false });
      t.scrollIntoView({ block: 'start', behavior: state.reduceMotion ? 'auto' : 'smooth' });
    });
  }

  // ---- widget ---------------------------------------------------------------
  var panel, fab;

  function svgIcon() {
    return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" ' +
      'stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
      '<circle cx="12" cy="4" r="1.6" fill="currentColor" stroke="none"/>' +
      '<path d="M5 8h14"/><path d="M12 8v13"/><path d="M12 13l-4 8"/><path d="M12 13l4 8"/></svg>';
  }

  function switchRow(key, label, hint) {
    var checked = !!state[key];
    return '<div class="a11y-row"><span class="a11y-label">' + label +
      '<span class="a11y-hint">' + hint + '</span></span>' +
      '<button type="button" class="a11y-switch" role="switch" aria-checked="' + checked +
      '" data-key="' + key + '" aria-label="' + label + '"></button></div>';
  }

  function buildPanel() {
    panel = document.createElement('div');
    panel.className = 'a11y-panel';
    panel.setAttribute('role', 'region');
    panel.setAttribute('aria-label', 'Accessibility options');
    panel.hidden = true;
    panel.innerHTML =
      '<h2>Accessibility</h2>' +
      '<p class="a11y-sub">Adjust the display to suit you. Changes save on this device' +
      ' and to your account when signed in.</p>' +
      '<div class="a11y-row"><span class="a11y-label">Text size' +
        '<span class="a11y-hint">Enlarge everything on the page</span></span>' +
        '<div class="a11y-seg" role="group" aria-label="Text size">' +
          '<button type="button" data-size="" aria-pressed="' + (state.fontScale === '') + '">A</button>' +
          '<button type="button" data-size="lg" aria-pressed="' + (state.fontScale === 'lg') + '">A+</button>' +
          '<button type="button" data-size="xl" aria-pressed="' + (state.fontScale === 'xl') + '">A++</button>' +
        '</div></div>' +
      switchRow('contrast', 'High contrast', 'Maximum text/background contrast') +
      switchRow('readable', 'Readable font', 'Dyslexia-friendly spacing & typeface') +
      switchRow('reduceMotion', 'Reduce motion', 'Minimise animations and transitions') +
      '<p class="a11y-sync-note" data-a11y-sync></p>' +
      '<div class="a11y-foot">' +
        '<a href="/accessibility.html">Accessibility statement</a>' +
        '<button type="button" class="a11y-reset">Reset all</button>' +
      '</div>';

    // switches
    panel.querySelectorAll('.a11y-switch').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var k = btn.getAttribute('data-key');
        state[k] = !state[k];
        btn.setAttribute('aria-checked', String(!!state[k]));
        commit();
      });
    });
    // text size
    panel.querySelectorAll('.a11y-seg button').forEach(function (btn) {
      btn.addEventListener('click', function () {
        state.fontScale = btn.getAttribute('data-size');
        panel.querySelectorAll('.a11y-seg button').forEach(function (b) {
          b.setAttribute('aria-pressed', String(b.getAttribute('data-size') === state.fontScale));
        });
        commit();
      });
    });
    // reset
    panel.querySelector('.a11y-reset').addEventListener('click', function () {
      state = { contrast: false, readable: false, reduceMotion: false, fontScale: '' };
      syncPanelControls();
      commit();
    });

    document.body.appendChild(panel);
    updateSyncNote();
  }

  function syncPanelControls() {
    if (!panel) return;
    panel.querySelectorAll('.a11y-switch').forEach(function (b) {
      b.setAttribute('aria-checked', String(!!state[b.getAttribute('data-key')]));
    });
    panel.querySelectorAll('.a11y-seg button').forEach(function (b) {
      b.setAttribute('aria-pressed', String(b.getAttribute('data-size') === state.fontScale));
    });
  }

  function updateSyncNote() {
    var note = panel && panel.querySelector('[data-a11y-sync]');
    if (!note) return;
    note.textContent = token()
      ? 'Signed in — high contrast, readable font and reduced motion also save to your account.'
      : 'Sign in to save these settings to your account across devices.';
  }

  function commit() {
    apply();
    saveLocal();
    syncServer();
  }

  function buildFab() {
    fab = document.createElement('button');
    fab.type = 'button';
    fab.className = 'a11y-fab';
    fab.setAttribute('aria-label', 'Accessibility options');
    fab.setAttribute('aria-expanded', 'false');
    fab.setAttribute('aria-haspopup', 'true');
    fab.innerHTML = svgIcon();
    fab.addEventListener('click', function () { togglePanel(); });
    document.body.appendChild(fab);
  }

  function togglePanel(force) {
    var open = typeof force === 'boolean' ? force : panel.hidden;
    panel.hidden = !open;
    fab.setAttribute('aria-expanded', String(open));
    if (open) {
      updateSyncNote();
      var first = panel.querySelector('.a11y-seg button, .a11y-switch');
      if (first) first.focus();
    }
  }

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && panel && !panel.hidden) { togglePanel(false); fab.focus(); }
  });
  document.addEventListener('click', function (e) {
    if (!panel || panel.hidden) return;
    if (!panel.contains(e.target) && e.target !== fab && !fab.contains(e.target)) togglePanel(false);
  });

  // ---- boot -----------------------------------------------------------------
  function init() {
    var stored = readLocal();
    if (stored) {
      state.contrast = !!stored.contrast;
      state.readable = !!stored.readable;
      state.reduceMotion = !!stored.reduceMotion;
      state.fontScale = (stored.fontScale === 'lg' || stored.fontScale === 'xl') ? stored.fontScale : '';
    } else {
      // First visit with no stored choice: honour the OS reduced-motion setting.
      try { state.reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches; } catch (e) {}
    }
    apply();
    wireSkipLink();
    buildFab();
    buildPanel();
    // Signed-in visitors: let the account's saved prefs take over, then re-apply.
    hydrateFromServer().then(function () { syncPanelControls(); apply(); updateSyncNote(); });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
