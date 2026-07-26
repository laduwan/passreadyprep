/**
 * PassReady Prep — study activity tracker (streak chip, bottom-left).
 * Include on any study page: <script src="/activity-tracker.js" defer></script>
 * Self-contained: counts engaged time while the tab is visible, pings the
 * server about once a minute, and shows a small streak chip that expands into
 * a 14-day mini chart. Does nothing when the visitor isn't signed in.
 */
(function () {
  var token;
  try { token = localStorage.getItem('prp_token'); } catch (e) { token = null; }
  if (!token) return; // anonymous visitors aren't tracked

  // ── which tool is this page? ─────────────────────────────────────────────
  var TOOL_BY_PAGE = {
    'index.html': 'cases', 'study': 'cases',
    'exam.html': 'exam',
    'flashcards.html': 'flashcards',
    'dsm.html': 'dsm',
    'decision-trees.html': 'decision-trees',
    'next-best-step.html': 'next-best-step',
    'study-guide.html': 'study-guide',
    'podcast.html': 'podcast',
    'skills.html': 'skills', 'skills': 'skills',
  };
  var page = (location.pathname.split('/').pop() || '').toLowerCase();
  var TOOL = TOOL_BY_PAGE.hasOwnProperty(page) ? TOOL_BY_PAGE[page] : 'other';

  function localDay() {
    var d = new Date();
    var p = function (n) { return (n < 10 ? '0' : '') + n; };
    return d.getFullYear() + '-' + p(d.getMonth() + 1) + '-' + p(d.getDate());
  }

  // ── engaged-time counter ─────────────────────────────────────────────────
  // A second counts when the tab is visible AND the person did something
  // (pointer/key/scroll/touch) within the last 2 minutes — so an open tab
  // left on a desk doesn't rack up study time.
  var IDLE_MS = 2 * 60 * 1000;
  var TICK_MS = 5 * 1000;
  var FLUSH_MS = 60 * 1000;

  var lastInput = Date.now();
  var unsent = 0; // engaged seconds not yet sent

  ['pointerdown', 'pointermove', 'keydown', 'scroll', 'touchstart'].forEach(function (ev) {
    window.addEventListener(ev, function () { lastInput = Date.now(); }, { passive: true });
  });

  setInterval(function () {
    if (document.visibilityState === 'visible' && Date.now() - lastInput < IDLE_MS) {
      unsent += TICK_MS / 1000;
    }
  }, TICK_MS);

  function flush(useKeepalive) {
    var seconds = Math.round(unsent);
    if (seconds <= 0) return;
    unsent = 0;
    try {
      fetch('/api/activity/ping', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Authorization: 'Bearer ' + token },
        body: JSON.stringify({ tool: TOOL, seconds: seconds, day: localDay() }),
        keepalive: !!useKeepalive,
      }).then(function (r) {
        if (r.status === 401) unsent = 0; // signed out — stop accumulating debt
        else if (!r.ok) unsent += seconds; // retry on the next flush
        else refreshChipSoon();
      }).catch(function () { unsent += seconds; });
    } catch (e) { /* tracking must never break the page */ }
  }

  setInterval(function () { flush(false); }, FLUSH_MS);
  document.addEventListener('visibilitychange', function () {
    if (document.visibilityState === 'hidden') flush(true);
  });
  window.addEventListener('pagehide', function () { flush(true); });

  // ── streak chip UI ───────────────────────────────────────────────────────
  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c];
    });
  }
  function fmtMin(seconds) {
    var m = Math.round(seconds / 60);
    if (m < 60) return m + 'm';
    return Math.floor(m / 60) + 'h ' + (m % 60) + 'm';
  }
  function toolLabel(key) {
    return { 'cases': 'Case practice', 'exam': 'Exam sim', 'flashcards': 'Flashcards',
      'dsm': 'DSM browser', 'decision-trees': 'Decision trees', 'next-best-step': 'Next best step',
      'study-guide': 'Study guide', 'podcast': 'Podcast', 'skills': 'Skills', 'other': 'Other' }[key] || key;
  }

  var wrap = document.createElement('div');
  wrap.id = 'prp-activity-wrap';
  wrap.innerHTML =
    '<button id="prp-streak-chip" aria-label="Your study activity" aria-expanded="false" hidden></button>' +
    '<div id="prp-activity-panel" class="hidden" role="dialog" aria-label="Your study activity">' +
      '<div class="prp-act-head"><span>Your study activity</span>' +
        '<button id="prp-activity-close" aria-label="Close">✕</button></div>' +
      '<div id="prp-activity-body"></div>' +
    '</div>';

  var style = document.createElement('style');
  style.textContent =
    '#prp-streak-chip{position:fixed;bottom:28px;left:0;z-index:8900;display:flex;align-items:center;gap:6px;' +
    'background:#1E293B;color:#E2E8F0;border:1px solid #334155;border-left:none;padding:9px 13px 9px 11px;' +
    'border-radius:0 8px 8px 0;font:inherit;font-size:12.5px;font-weight:700;cursor:pointer;' +
    'box-shadow:2px 2px 10px rgba(0,0,0,.3)}' +
    '#prp-streak-chip:hover{background:#334155}' +
    '#prp-activity-panel{position:fixed;bottom:76px;left:20px;z-index:8900;width:min(300px,calc(100vw - 40px));' +
    'background:#1E293B;border:1px solid #334155;border-radius:12px;box-shadow:0 10px 36px rgba(0,0,0,.4);' +
    'padding:16px;font-family:inherit;color:#E2E8F0}' +
    '#prp-activity-panel.hidden{display:none}' +
    '.prp-act-head{display:flex;align-items:flex-start;justify-content:space-between;font-size:13.5px;' +
    'font-weight:700;color:#F8FAFC;margin-bottom:10px}' +
    '#prp-activity-close{background:none;border:none;color:#94A3B8;font-size:13px;cursor:pointer;line-height:1}' +
    '.prp-act-stats{display:grid;grid-template-columns:1fr 1fr 1fr;gap:8px;text-align:center;margin-bottom:12px}' +
    '.prp-act-num{font-size:18px;font-weight:800;color:#F8FAFC;line-height:1.1}' +
    '.prp-act-lbl{font-size:10.5px;color:#94A3B8;margin-top:2px}' +
    '.prp-act-bars{display:flex;align-items:flex-end;gap:3px;height:44px;margin-bottom:4px}' +
    '.prp-act-bar{flex:1;background:#10B981;border-radius:2px 2px 0 0;min-height:2px;opacity:.9}' +
    '.prp-act-bar.zero{background:#334155}' +
    '.prp-act-axis{font-size:10px;color:#64748B;display:flex;justify-content:space-between;margin-bottom:10px}' +
    '.prp-act-tools{font-size:12px;color:#CBD5E1}' +
    '.prp-act-tools div{display:flex;justify-content:space-between;padding:2.5px 0}' +
    '.prp-act-tools span:last-child{color:#94A3B8}';

  function mount() {
    document.body.appendChild(wrap);
    document.head.appendChild(style);
    var chip = document.getElementById('prp-streak-chip');
    var panel = document.getElementById('prp-activity-panel');
    chip.onclick = function () {
      var open = panel.classList.toggle('hidden');
      chip.setAttribute('aria-expanded', String(!open));
    };
    document.getElementById('prp-activity-close').onclick = function () {
      panel.classList.add('hidden');
      chip.setAttribute('aria-expanded', 'false');
    };
    refreshChip();
  }

  var refreshTimer = null;
  function refreshChipSoon() {
    // Coalesce: at most one summary reload per flush burst.
    if (refreshTimer) return;
    refreshTimer = setTimeout(function () { refreshTimer = null; refreshChip(); }, 1500);
  }

  function refreshChip() {
    fetch('/api/activity/summary?days=14&today=' + localDay(), {
      headers: { Authorization: 'Bearer ' + token },
    }).then(function (r) { return r.ok ? r.json() : null; })
      .then(function (s) {
        if (!s) return;
        var chip = document.getElementById('prp-streak-chip');
        chip.innerHTML = '<span>🔥</span><span>' + s.currentStreak + '-day streak · ' +
          fmtMin(s.todaySeconds) + ' today</span>';
        chip.hidden = false;
        renderPanel(s);
      }).catch(function () { /* chip just stays as-is */ });
  }

  function renderPanel(s) {
    var max = 1;
    s.daily.forEach(function (d) { if (d.seconds > max) max = d.seconds; });
    var bars = s.daily.map(function (d) {
      var h = Math.max(2, Math.round((d.seconds / max) * 44));
      return '<div class="prp-act-bar' + (d.seconds ? '' : ' zero') + '" style="height:' + h + 'px" ' +
        'title="' + esc(d.day) + ' — ' + fmtMin(d.seconds) + '"></div>';
    }).join('');
    var tools = Object.keys(s.byTool || {})
      .sort(function (a, b) { return s.byTool[b] - s.byTool[a]; })
      .slice(0, 5)
      .map(function (k) {
        return '<div><span>' + esc(toolLabel(k)) + '</span><span>' + fmtMin(s.byTool[k]) + '</span></div>';
      }).join('');
    document.getElementById('prp-activity-body').innerHTML =
      '<div class="prp-act-stats">' +
        '<div><div class="prp-act-num">🔥 ' + s.currentStreak + '</div><div class="prp-act-lbl">day streak</div></div>' +
        '<div><div class="prp-act-num">' + fmtMin(s.todaySeconds) + '</div><div class="prp-act-lbl">today</div></div>' +
        '<div><div class="prp-act-num">' + fmtMin(s.totalSeconds) + '</div><div class="prp-act-lbl">all time</div></div>' +
      '</div>' +
      '<div class="prp-act-bars">' + bars + '</div>' +
      '<div class="prp-act-axis"><span>14 days ago</span><span>today</span></div>' +
      (tools ? '<div class="prp-act-tools">' + tools + '</div>' : '') +
      (s.longestStreak > s.currentStreak
        ? '<div class="prp-act-lbl" style="margin-top:8px">Longest streak: ' + s.longestStreak + ' days</div>' : '');
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', mount);
  } else {
    mount();
  }
})();
