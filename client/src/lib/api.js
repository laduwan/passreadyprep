// Centralized fetch for the study app.
//
// The SPA itself has no login screen — accounts are created/signed in on the
// vanilla register page, which stores the JWT at localStorage 'prp_token'
// (same key checkout.html and score-report.html read). Until now the React app
// never attached that token, so every call landed as the free tier even for
// paying, signed-in users. authFetch fixes that: it adds the Bearer header when
// a token is present, and clears a stale token on a 401 (a newer login elsewhere
// bumped sessionVersion and invalidated this one).

export function getToken() {
  try { return localStorage.getItem('prp_token') || ''; } catch { return ''; }
}

export function clearSession() {
  try {
    localStorage.removeItem('prp_token');
    localStorage.removeItem('prp_user');
  } catch {}
}

export async function authFetch(url, opts = {}) {
  const token = getToken();
  const headers = { ...(opts.headers || {}) };
  if (token) headers.Authorization = `Bearer ${token}`;

  const res = await fetch(url, { ...opts, headers });

  // Stale session: token was invalidated by a newer login. Drop to free tier
  // gracefully rather than leaving a dead token attached to every request.
  if (res.status === 401) clearSession();

  return res;
}
