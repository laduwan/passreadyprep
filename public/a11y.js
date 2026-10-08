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
  var THEME_KEY = 'prp_theme';
  var state = { contrast: false, readable: false, reduceMotion: false, fontScale: '', lightTheme: false };
  // Read-aloud (text-to-speech) prefs: speaking rate and whether the per-block
  // 🔊 Listen buttons show. ttsRate also syncs to User.prefs.voice.speed.
  var TTS_RATES = [0.75, 1, 1.25, 1.5];
  var TTS_OK = typeof window.speechSynthesis !== 'undefined' && typeof window.SpeechSynthesisUtterance !== 'undefined';
  state.ttsRate = 1;
  state.ttsButtons = true;
  function nearestRate(v) {
    var best = 1, d = Infinity;
    TTS_RATES.forEach(function (r) { if (Math.abs(r - v) < d) { d = Math.abs(r - v); best = r; } });
    return best;
  }

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
    el.classList.toggle('theme-light', !!state.lightTheme);
    el.classList.toggle('theme-dark', !state.lightTheme);
    el.classList.toggle('a11y-listen-off', !state.ttsButtons);
    try { localStorage.setItem(THEME_KEY, state.lightTheme ? 'light' : 'dark'); } catch (e) {}
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
        },
        voice: { speed: state.ttsRate }
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
        var v = j && j.user && j.user.prefs && j.user.prefs.voice;
        if (v && typeof v.speed === 'number' && isFinite(v.speed)) {
          state.ttsRate = nearestRate(v.speed);
          saveLocal();
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
      switchRow('lightTheme', 'Light theme', 'Switch to a light colour scheme') +
      (TTS_OK ? ttsPanelHtml() : '') +
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
    panel.querySelectorAll('.a11y-seg button[data-size]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        state.fontScale = btn.getAttribute('data-size');
        panel.querySelectorAll('.a11y-seg button[data-size]').forEach(function (b) {
          b.setAttribute('aria-pressed', String(b.getAttribute('data-size') === state.fontScale));
        });
        commit();
      });
    });
    // reset
    panel.querySelector('.a11y-reset').addEventListener('click', function () {
      state = { contrast: false, readable: false, reduceMotion: false, fontScale: '', lightTheme: false };
      state.ttsRate = 1;
      state.ttsButtons = true;
      syncPanelControls();
      commit();
    });

    if (TTS_OK) wireTtsPanel();

    document.body.appendChild(panel);
    updateSyncNote();
  }

  function syncPanelControls() {
    if (!panel) return;
    panel.querySelectorAll('.a11y-switch').forEach(function (b) {
      b.setAttribute('aria-checked', String(!!state[b.getAttribute('data-key')]));
    });
    panel.querySelectorAll('.a11y-seg button[data-size]').forEach(function (b) {
      b.setAttribute('aria-pressed', String(b.getAttribute('data-size') === state.fontScale));
    });
    panel.querySelectorAll('.a11y-seg button[data-rate]').forEach(function (b) {
      b.setAttribute('aria-pressed', String(Number(b.getAttribute('data-rate')) === state.ttsRate));
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


  // ---- read-aloud (text-to-speech) -------------------------------------------
  // Uses the browser's built-in speechSynthesis voice. Everything below is
  // skipped when the API is missing, so unsupported browsers see no controls.
  var player, playerStatus, playerPause;
  var tts = { gen: 0, chunks: [], idx: 0, active: false, paused: false };
  var selSnapshot = '';
  // Never read the widget itself or site chrome.
  var TTS_EXCLUDE = '.a11y-panel, .a11y-fab, .a11y-player, .a11y-listen, .a11y-skip-link, nav, header, footer, ' +
    'script, style, noscript, template, [aria-hidden="true"]';

  function ttsPanelHtml() {
    var seg = '';
    TTS_RATES.forEach(function (r) {
      seg += '<button type="button" data-rate="' + r + '" aria-pressed="' + (state.ttsRate === r) + '">' + r + '×</button>';
    });
    return '<div class="a11y-row a11y-tts-row"><span class="a11y-label">Read aloud' +
        '<span class="a11y-hint">Uses your device\'s built-in voice</span></span>' +
        '<button type="button" class="a11y-tts-read">Read selection / page</button></div>' +
      '<div class="a11y-row a11y-tts-speed-row"><span class="a11y-label">Reading speed' +
        '<span class="a11y-hint">How fast the voice reads</span></span>' +
        '<div class="a11y-seg" role="group" aria-label="Reading speed">' + seg + '</div></div>' +
      switchRow('ttsButtons', 'Listen buttons', 'Show 🔊 next to cases, questions & answers');
  }

  function wireTtsPanel() {
    var read = panel.querySelector('.a11y-tts-read');
    // Clicking a button can clear the page selection in some browsers, so
    // capture it as the pointer goes down.
    read.addEventListener('mousedown', function () { selSnapshot = currentSelection(); });
    read.addEventListener('touchstart', function () { selSnapshot = currentSelection(); }, { passive: true });
    read.addEventListener('click', function () {
      var text = selSnapshot || currentSelection();
      selSnapshot = '';
      if (!text) text = visibleText(mainTarget() || document.body);
      speak(text);
    });
    panel.querySelectorAll('.a11y-seg button[data-rate]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        state.ttsRate = nearestRate(Number(btn.getAttribute('data-rate')));
        syncPanelControls();
        commit();
      });
    });
  }

  function currentSelection() {
    try {
      var sel = window.getSelection();
      if (!sel || sel.isCollapsed) return '';
      var node = sel.anchorNode && (sel.anchorNode.nodeType === 1 ? sel.anchorNode : sel.anchorNode.parentElement);
      if (node && node.closest && node.closest('.a11y-panel, .a11y-player')) return '';
      return String(sel.toString() || '').trim();
    } catch (e) { return ''; }
  }

  // Rendered text of a subtree, skipping hidden elements and TTS_EXCLUDE.
  function visibleText(root) {
    var out = [];
    (function walk(node) {
      if (node.nodeType === 3) { out.push(node.nodeValue); return; }
      if (node.nodeType !== 1) return;
      if (node.matches && node.matches(TTS_EXCLUDE)) return;
      var cs;
      try { cs = window.getComputedStyle(node); } catch (e) { cs = null; }
      if (cs && (cs.display === 'none' || cs.visibility === 'hidden')) return;
      var block = !cs || !/^inline/.test(cs.display);
      if (block) out.push('\n');
      for (var c = node.firstChild; c; c = c.nextSibling) walk(c);
      if (block) out.push('\n');
    })(root);
    return out.join('');
  }

  // Tidy text for speech: drop UI glyphs, and end each line with punctuation
  // so labels and headings get a natural pause.
  function cleanText(text) {
    return String(text || '')
      .replace(/[✕✓✗🔊🚩⚑›‹•·]/g, ' ')
      .split(/\n+/)
      .map(function (l) { return l.replace(/\s+/g, ' ').trim(); })
      .filter(Boolean)
      .map(function (l) { return /[.!?:;,]$/.test(l) ? l : l + '.'; })
      .join(' ');
  }

  // ~200-char chunks on sentence boundaries — long single utterances get cut
  // off after ~15s in Chrome, so we queue short ones instead.
  function chunkText(text) {
    var MAX = 200;
    var sentences = text.match(/[^.!?]+[.!?]+["')\]]*\s*|[^.!?]+$/g) || [text];
    var pieces = [];
    sentences.forEach(function (s) {
      s = s.trim();
      if (!s) return;
      while (s.length > MAX) {
        var cut = s.lastIndexOf(', ', MAX);
        if (cut < MAX / 2) cut = s.lastIndexOf(' ', MAX);
        if (cut < MAX / 2) cut = MAX;
        pieces.push(s.slice(0, cut + 1).trim());
        s = s.slice(cut + 1).trim();
      }
      if (s) pieces.push(s);
    });
    var chunks = [], cur = '';
    pieces.forEach(function (p) {
      if (cur && (cur.length + 1 + p.length) > MAX) { chunks.push(cur); cur = p; }
      else cur = cur ? cur + ' ' + p : p;
    });
    if (cur) chunks.push(cur);
    return chunks;
  }

  function speak(raw) {
    stopSpeech();
    var text = cleanText(raw);
    if (!text) return;
    tts.chunks = chunkText(text);
    tts.idx = 0;
    tts.active = true;
    tts.paused = false;
    var gen = tts.gen;
    showPlayer();
    // A short gap after cancel() — Chrome can drop an utterance queued in the
    // same tick as a cancel.
    setTimeout(function () { if (gen === tts.gen) speakNext(gen); }, 60);
  }

  function speakNext(gen) {
    if (gen !== tts.gen) return;
    if (tts.idx >= tts.chunks.length) { stopSpeech(); return; }
    var u = new window.SpeechSynthesisUtterance(tts.chunks[tts.idx++]);
    u.rate = state.ttsRate;
    u.lang = document.documentElement.getAttribute('lang') || 'en-US';
    u.onend = function () { speakNext(gen); };
    u.onerror = function (e) {
      if (gen !== tts.gen) return;
      if (e && (e.error === 'interrupted' || e.error === 'canceled')) return;
      speakNext(gen);
    };
    try { window.speechSynthesis.speak(u); } catch (e) { stopSpeech(); }
  }

  function stopSpeech() {
    tts.gen++;
    var wasActive = tts.active;
    tts.active = false;
    tts.paused = false;
    tts.chunks = [];
    try { window.speechSynthesis.cancel(); } catch (e) {}
    if (wasActive) hidePlayer();
  }

  function togglePause() {
    if (!tts.active) return;
    if (tts.paused) {
      tts.paused = false;
      try { window.speechSynthesis.resume(); } catch (e) {}
    } else {
      tts.paused = true;
      try { window.speechSynthesis.pause(); } catch (e) {}
    }
    paintPlayer();
  }

  function buildPlayer() {
    player = document.createElement('div');
    player.className = 'a11y-player';
    player.setAttribute('role', 'region');
    player.setAttribute('aria-label', 'Read aloud controls');
    player.hidden = true;
    player.innerHTML =
      '<span class="a11y-player-status" aria-live="polite"></span>' +
      '<button type="button" class="a11y-player-btn" data-tts="pause"></button>' +
      '<button type="button" class="a11y-player-btn" data-tts="stop" aria-label="Stop reading">■</button>';
    playerStatus = player.querySelector('.a11y-player-status');
    playerPause = player.querySelector('[data-tts="pause"]');
    playerPause.addEventListener('click', togglePause);
    player.querySelector('[data-tts="stop"]').addEventListener('click', function () { stopSpeech(); });
    document.body.appendChild(player);
    paintPlayer();
  }

  function paintPlayer() {
    if (!player) return;
    playerPause.textContent = tts.paused ? '▶' : '❚❚';
    playerPause.setAttribute('aria-label', tts.paused ? 'Resume reading' : 'Pause reading');
    playerStatus.textContent = tts.active ? (tts.paused ? 'Paused' : 'Reading…') : '';
  }

  function showPlayer() {
    if (!player) return;
    player.hidden = false;
    paintPlayer();
  }

  function hidePlayer() {
    if (!player) return;
    player.hidden = true;
    paintPlayer();
  }

  // 🔊 Listen buttons next to every [data-read-aloud] block (React-rendered
  // content included, via the MutationObserver below).
  function scanListen() {
    document.querySelectorAll('.a11y-listen').forEach(function (b) {
      if (!b.__a11yTarget || !b.__a11yTarget.isConnected) b.remove();
    });
    document.querySelectorAll('[data-read-aloud]:not([data-a11y-listen-ready])').forEach(function (el) {
      el.setAttribute('data-a11y-listen-ready', '');
      if (!el.parentNode) return;
      var label = el.getAttribute('data-read-aloud-label') || 'read this';
      var b = document.createElement('button');
      b.type = 'button';
      b.className = 'a11y-listen';
      b.setAttribute('aria-label', 'Listen: ' + label);
      b.title = 'Listen: ' + label;
      b.textContent = '🔊';
      b.__a11yTarget = el;
      b.addEventListener('click', function () {
        stopSpeech();
        speak(el.innerText);
      });
      el.parentNode.insertBefore(b, el.nextSibling);
    });
  }

  function initTts() {
    try { window.speechSynthesis.cancel(); } catch (e) {} // clear anything left from a previous page
    buildPlayer();
    scanListen();
    var pending = false;
    new MutationObserver(function () {
      if (pending) return;
      pending = true;
      (window.requestAnimationFrame || setTimeout)(function () { pending = false; scanListen(); });
    }).observe(document.body, { childList: true, subtree: true });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && tts.active) stopSpeech();
    });
    window.addEventListener('pagehide', function () { stopSpeech(); });
    window.addEventListener('beforeunload', function () { stopSpeech(); });
    // React route changes: back/forward fire popstate; in-app links go
    // through history.pushState, which has no event — so wrap it.
    window.addEventListener('popstate', function () { stopSpeech(); });
    try {
      var push = window.history.pushState;
      window.history.pushState = function () {
        var r = push.apply(this, arguments);
        stopSpeech();
        return r;
      };
    } catch (e) {}
  }

  // ---- boot -----------------------------------------------------------------
  function init() {
    var stored = readLocal();
    if (stored) {
      state.contrast = !!stored.contrast;
      state.readable = !!stored.readable;
      state.reduceMotion = !!stored.reduceMotion;
      state.fontScale = (stored.fontScale === 'lg' || stored.fontScale === 'xl') ? stored.fontScale : '';
      state.lightTheme = !!stored.lightTheme;
      if (typeof stored.ttsRate === 'number' && TTS_RATES.indexOf(stored.ttsRate) !== -1) state.ttsRate = stored.ttsRate;
      if (typeof stored.ttsButtons === 'boolean') state.ttsButtons = stored.ttsButtons;
    } else {
      // First visit with no stored choice: honour the OS reduced-motion setting.
      try { state.reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches; } catch (e) {}
    }
    // Sync theme from the shared prp_theme key (React ThemeToggle writes here too).
    // Default to dark — light only activates when the user explicitly toggles it.
    try {
      var themeVal = localStorage.getItem(THEME_KEY);
      if (themeVal === 'light') state.lightTheme = true;
      else state.lightTheme = false;
    } catch (e) {}
    apply();
    wireSkipLink();
    buildFab();
    buildPanel();
    if (TTS_OK) initTts();
    // Signed-in visitors: let the account's saved prefs take over, then re-apply.
    hydrateFromServer().then(function () { syncPanelControls(); apply(); updateSyncNote(); });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
