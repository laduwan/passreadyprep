/**
 * PassReady Prep — persistent suggestion box (floating tab, bottom-right).
 * Include on any page: <script src="/suggestion-widget.js"></script>
 * Self-contained: injects its own markup + styles, posts to /api/suggestions.
 */
(function () {
  function authHeaders() {
    try {
      var t = localStorage.getItem('prp_token');
      return t ? { Authorization: 'Bearer ' + t } : {};
    } catch (e) { return {}; }
  }
  function currentUser() {
    try { return JSON.parse(localStorage.getItem('prp_user') || 'null'); } catch (e) { return null; }
  }

  var user = currentUser();
  var loggedIn = !!authHeaders().Authorization;

  var wrap = document.createElement('div');
  wrap.id = 'prp-suggest-wrap';
  wrap.innerHTML =
    '<button id="prp-suggest-tab" aria-label="Send a suggestion">' +
      '<span>💬</span><span class="prp-suggest-tab-label">Suggestion</span>' +
    '</button>' +
    '<div id="prp-suggest-panel" class="hidden" role="dialog" aria-label="Send a suggestion">' +
      '<div class="prp-suggest-head">' +
        '<span>Got an idea or found a bug?</span>' +
        '<button id="prp-suggest-close" aria-label="Close">✕</button>' +
      '</div>' +
      '<select id="prp-suggest-category">' +
        '<option value="feature-request">Feature idea</option>' +
        '<option value="bug">Something\'s broken</option>' +
        '<option value="content">Case/content feedback</option>' +
        '<option value="billing">Billing question</option>' +
        '<option value="other">Other</option>' +
      '</select>' +
      '<textarea id="prp-suggest-message" maxlength="4000" placeholder="Tell us what\'s on your mind..."></textarea>' +
      (!loggedIn ? '<input id="prp-suggest-email" type="email" placeholder="Your email (optional)" />' : '') +
      '<button id="prp-suggest-submit">Send</button>' +
      '<div id="prp-suggest-status"></div>' +
    '</div>';

  var style = document.createElement('style');
  style.textContent =
    '#prp-suggest-tab{position:fixed;bottom:28px;right:0;z-index:8900;display:flex;align-items:center;gap:6px;' +
    'background:#10B981;color:#04261C;border:none;padding:10px 14px 10px 12px;border-radius:8px 0 0 8px;' +
    'font:inherit;font-size:12.5px;font-weight:700;cursor:pointer;box-shadow:-2px 2px 10px rgba(0,0,0,.3);}' +
    '#prp-suggest-tab:hover{background:#34D399}' +
    '#prp-suggest-panel{position:fixed;bottom:76px;right:20px;z-index:8900;width:min(320px,calc(100vw - 40px));' +
    'background:#1E293B;border:1px solid #334155;border-radius:12px;box-shadow:0 10px 36px rgba(0,0,0,.4);padding:16px;' +
    'font-family:inherit;}' +
    '#prp-suggest-panel.hidden{display:none}' +
    '.prp-suggest-head{display:flex;align-items:flex-start;justify-content:space-between;font-size:13.5px;' +
    'font-weight:700;color:#F8FAFC;margin-bottom:10px}' +
    '#prp-suggest-close{background:none;border:none;color:#94A3B8;font-size:13px;cursor:pointer;line-height:1}' +
    '#prp-suggest-panel select,#prp-suggest-panel textarea,#prp-suggest-panel input{width:100%;box-sizing:border-box;' +
    'font:inherit;font-size:13px;border:1px solid #334155;border-radius:7px;padding:8px 10px;margin-bottom:8px;' +
    'background:#0F172A;color:#E2E8F0}' +
    '#prp-suggest-panel textarea{min-height:84px;resize:vertical}' +
    '#prp-suggest-submit{width:100%;background:#10B981;color:#04261C;border:none;border-radius:7px;padding:9px 0;' +
    'font-size:13px;font-weight:700;cursor:pointer}' +
    '#prp-suggest-submit:disabled{opacity:.6;cursor:default}' +
    '#prp-suggest-submit:hover:not(:disabled){background:#34D399}' +
    '#prp-suggest-status{font-size:12px;margin-top:8px;text-align:center;min-height:16px}' +
    '#prp-suggest-status.ok{color:#34D399}' +
    '#prp-suggest-status.err{color:#F87171}' +
    '@media (max-width:480px){.prp-suggest-tab-label{display:none}#prp-suggest-tab{padding:12px;border-radius:50% 0 0 50%}}';
  document.head.appendChild(style);

  function mount() {
    document.body.appendChild(wrap);
    var panel = document.getElementById('prp-suggest-panel');
    var tab = document.getElementById('prp-suggest-tab');
    var submitBtn = document.getElementById('prp-suggest-submit');
    var statusEl = document.getElementById('prp-suggest-status');

    tab.addEventListener('click', function () { panel.classList.toggle('hidden'); });
    document.getElementById('prp-suggest-close').addEventListener('click', function () { panel.classList.add('hidden'); });

    submitBtn.addEventListener('click', function () {
      var message = document.getElementById('prp-suggest-message').value.trim();
      var category = document.getElementById('prp-suggest-category').value;
      var emailField = document.getElementById('prp-suggest-email');

      if (!message) {
        statusEl.textContent = 'Please enter a message.';
        statusEl.className = 'err';
        return;
      }

      submitBtn.disabled = true;
      statusEl.textContent = '';
      statusEl.className = '';

      var headers = { 'Content-Type': 'application/json' };
      var auth = authHeaders();
      if (auth.Authorization) headers.Authorization = auth.Authorization;

      fetch('/api/suggestions', {
        method: 'POST',
        headers: headers,
        body: JSON.stringify({
          message: message,
          category: category,
          platform: 'passreadyprep',
          email: emailField ? emailField.value.trim() : undefined,
          pageUrl: window.location.href,
        }),
      })
        .then(function (r) { if (!r.ok) throw 0; return r.json(); })
        .then(function () {
          statusEl.textContent = 'Thanks — got it!';
          statusEl.className = 'ok';
          document.getElementById('prp-suggest-message').value = '';
          setTimeout(function () { panel.classList.add('hidden'); }, 1600);
        })
        .catch(function () {
          statusEl.textContent = 'Something went wrong. Please try again.';
          statusEl.className = 'err';
        })
        .finally(function () { submitBtn.disabled = false; });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', mount);
  } else {
    mount();
  }
})();
