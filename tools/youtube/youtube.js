/*
 * youtube.js — keep the PassReady Prep YouTube channel tidy without
 * copy-pasting in YouTube Studio.
 *
 * You still upload videos in Studio (drag in a batch). Then this script:
 *   - finds every video by the case code in its file name (e.g. "06 D140 P2 · ...")
 *   - sets a clean title (config.js controls the wording)
 *   - adds "▶ Part 1 / ▶ Part 2" links to the top of each two-part description
 *     (the rest of your description is left exactly as it is)
 *   - puts each video in the right playlist, in series order
 *   - reports duplicates, hidden parts, and missing parts
 *
 * Nothing changes on YouTube unless you add --yes. Without it you get a preview.
 *
 * Usage (from the repo folder, on your Mac):
 *   node tools/youtube/youtube.js auth                 one-time Google sign-in
 *   node tools/youtube/youtube.js scan                 list what's on the channel
 *   node tools/youtube/youtube.js fix                  preview the changes
 *   node tools/youtube/youtube.js fix --yes            make the changes
 *   node tools/youtube/youtube.js fix --yes --visibility
 *        also make the main copy of each part Public and set extra copies to Unlisted
 *   node tools/youtube/youtube.js report "Table data.csv"
 *        offline: same report from a YouTube Studio analytics export, no sign-in needed
 *
 * Setup steps are in tools/youtube/README.md.
 */

const fs = require('fs');
const os = require('os');
const path = require('path');
const http = require('http');
const crypto = require('crypto');
const { execFile } = require('child_process');
const { PLAYLISTS, FULL_CASE_SUBJECTS, TITLE_OVERRIDES } = require('./config');

const HOME_DIR = path.join(os.homedir(), '.passready-youtube');
const CLIENT_FILE = path.join(HOME_DIR, 'client_secret.json');
const TOKEN_FILE = path.join(HOME_DIR, 'token.json');
const OUT_DIR = path.join(__dirname, 'out');
const API = 'https://www.googleapis.com/youtube/v3';
const SCOPE = 'https://www.googleapis.com/auth/youtube';
const TITLE_MAX = 100;
// Shown on every run, so it's clear which version of the script ran.
const VERSION = '2026-10-19d';
const LINK_LINE = /^▶ Part \d: https:\/\/youtu\.be\/\S+\s*$/;

// ── Parsing: file name / title → series info ─────────────────────────────────

// "06 D140 P2 · NCMHCE Full Case Walkthrough꞉ Shrinking world ... Part 2 of 2.mp4"
// → { code: 'D140', kind: 'full', part: 2, seq: 6, subject: 'Shrinking world ...' }
function parseName(name) {
  if (!name) return null;
  const s = name.replace(/\.(mp4|mov|m4v|mkv|webm)$/i, '').replace(/꞉/g, ':').replace(/\s+/g, ' ').trim();
  const m = s.match(/(?:(\d{1,3})\s*[.·]?\s*)?\b([DG]\d{3})\b/);
  if (!m) return null;
  const code = m[2];
  const seq = m[1] ? parseInt(m[1], 10) : null;
  const after = s.slice(m.index + m[0].length);

  let kind = null, part = null, q = null;
  const tok = after.match(/^\s*(P([12])|q(\d+)|mini)\b/i);
  if (tok) {
    if (tok[2]) { kind = 'full'; part = +tok[2]; }
    else if (tok[3]) { kind = 'practice'; q = +tok[3]; }
    else kind = 'mini';
  }
  if (/Case Walkthrough Mini/i.test(s)) kind = 'mini';
  else if (/Full Case/i.test(s)) kind = 'full';
  else if (!kind && /Practice/i.test(s)) kind = 'practice';
  if (!kind) return null;
  if (!part) {
    const pm = s.match(/\bPart ([12])\b/i) || s.match(/\bP([12])\b/);
    if (pm) part = +pm[1];
  }

  // Everything after the "·" (or after the code tokens) is the readable title.
  let rest = after.includes('·') ? after.slice(after.indexOf('·') + 1) : after.replace(/^\s*(P[12]|q\d+|mini)\b/i, '');
  rest = rest.replace(/^[\s·.:]+/, '').trim();
  const truncated = /(…|\.\.\.)$/.test(rest);
  let subject = rest
    .replace(/^NCMHCE (Full Case( Walkthrough)?|Case Walkthrough\s*\(?Mini\)?|Practice)\s*:\s*/i, '')
    .replace(/\s*\|?\s*Part\s*\d?(\s*of\s*\d)?\s*$/i, '')
    .replace(/(…|\.\.\.)$/, '')
    .trim();
  return { code, kind, part, q, seq, subject, truncated };
}

function keyOf(p) {
  if (p.kind === 'practice') return p.q ? `${p.code}-q${p.q}` : p.code;
  return p.part ? `${p.code}-P${p.part}` : p.code;
}

function wantedTitle(p) {
  const k = keyOf(p);
  if (TITLE_OVERRIDES[k]) return TITLE_OVERRIDES[k];
  if (p.truncated) return null; // file name was cut off; don't guess the rest
  const partSuffix = p.part ? ` (Part ${p.part} of 2)` : '';
  if (p.kind === 'full') {
    const subj = FULL_CASE_SUBJECTS[p.code] || p.subject;
    return `NCMHCE Full Case Walkthrough: ${subj}${partSuffix}`;
  }
  if (p.kind === 'mini') return `NCMHCE Case Walkthrough Mini: ${p.subject}${partSuffix}`;
  if (p.kind === 'practice') return `NCMHCE Practice: ${p.subject}`;
  return null;
}

// ── Grouping: pick the main copy of each part, flag the rest ────────────────

// videos: [{ id, title, fileName, privacy, views, publishedAt, description, playlists }]
function analyse(videos) {
  const byKey = new Map();
  const unmatched = [];
  for (const v of videos) {
    const fromFile = parseName(v.fileName), fromTitle = parseName(v.title);
    const p = fromFile || fromTitle;
    if (fromFile && fromTitle) {
      // The title says one case but the uploaded file is another: flag it, don't rename.
      if (fromFile.code !== fromTitle.code) v.mismatch = fromTitle.code;
      // Full-case file names sometimes leave out "Part N"; the title may still have it.
      // (Minis have no parts, even if an old title said "Part 1 of 2".)
      else if (fromFile.kind === 'full' && !fromFile.part && fromTitle.part) p.part = fromTitle.part;
    }
    if (!p) { unmatched.push(v); continue; }
    v.series = p;
    v.key = keyOf(p);
    if (!byKey.has(v.key)) byKey.set(v.key, []);
    byKey.get(v.key).push(v);
  }
  // Main copy: public first, then most views, then the oldest upload.
  const rank = v => [v.privacy === 'public' ? 0 : 1, -(v.views || 0), v.publishedAt || ''];
  const cmp = (a, b) => { const x = rank(a), y = rank(b); for (let i = 0; i < x.length; i++) { if (x[i] < y[i]) return -1; if (x[i] > y[i]) return 1; } return 0; };
  const mains = [], dupes = [];
  for (const list of byKey.values()) {
    list.sort(cmp);
    mains.push(list[0]);
    list.slice(1).forEach(d => { d.duplicateOf = list[0]; dupes.push(d); });
  }
  // Two-part series: find the missing half.
  const missing = [];
  const codes = new Map();
  for (const v of mains) if (v.series.part) {
    const c = `${v.series.kind}:${v.series.code}`;
    if (!codes.has(c)) codes.set(c, {});
    codes.get(c)[v.series.part] = v;
  }
  for (const [c, parts] of codes) {
    const any = parts[1] || parts[2];
    for (const n of [1, 2]) if (!parts[n]) missing.push(`${any.series.code} Part ${n} (${any.series.kind === 'full' ? 'full case' : 'mini'})`);
    for (const n of [1, 2]) if (parts[n]) parts[n].partners = parts;
  }
  return { mains, dupes, missing, unmatched };
}

function printReport({ mains, dupes, missing, unmatched }) {
  const label = { full: 'Full case walkthroughs', mini: 'Mini walkthroughs', practice: 'Practice questions' };
  for (const kind of ['full', 'mini', 'practice']) {
    const rows = mains.filter(v => v.series.kind === kind).sort(seriesOrder);
    if (!rows.length) continue;
    console.log(`\n${label[kind]} (${rows.length})`);
    for (const v of rows) {
      const flag = v.privacy && v.privacy !== 'public' ? `  ⚠ ${v.privacy.toUpperCase()}` : '';
      console.log(`  ${String(v.series.seq ?? '').padStart(3)}  ${v.key.padEnd(9)} ${v.id}  ${String(v.views ?? '').padStart(5)} views${flag}`);
    }
  }
  if (dupes.length) {
    console.log(`\nExtra copies (${dupes.length}) — the main copy is listed above:`);
    for (const d of dupes) console.log(`  ${d.key.padEnd(9)} ${d.id}  ${d.privacy || '?'}  (main: ${d.duplicateOf.id})`);
  }
  if (missing.length) {
    console.log(`\nMissing parts (${missing.length}):`);
    missing.forEach(m => console.log(`  ${m}`));
  }
  const hidden = mains.filter(v => v.privacy && v.privacy !== 'public');
  if (hidden.length) {
    console.log(`\nMain copies that viewers can't see (${hidden.length}):`);
    hidden.forEach(v => console.log(`  ${v.key.padEnd(9)} ${v.id}  ${v.privacy}`));
  }
  if (unmatched.length) console.log(`\nNot part of a numbered series (left alone): ${unmatched.length} videos`);
}

function seriesOrder(a, b) {
  return (a.series.seq ?? 999) - (b.series.seq ?? 999) || a.key.localeCompare(b.key);
}

// ── Offline report from a Studio analytics export ───────────────────────────

function parseCsv(text) {
  const rows = []; let row = [], cell = '', q = false;
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (q) {
      if (c === '"' && text[i + 1] === '"') { cell += '"'; i++; }
      else if (c === '"') q = false;
      else cell += c;
    } else if (c === '"') q = true;
    else if (c === ',') { row.push(cell); cell = ''; }
    else if (c === '\n' || c === '\r') {
      if (c === '\r' && text[i + 1] === '\n') i++;
      row.push(cell); rows.push(row); row = []; cell = '';
    } else cell += c;
  }
  if (cell || row.length) { row.push(cell); rows.push(row); }
  const [head, ...body] = rows.filter(r => r.length > 1);
  return body.map(r => Object.fromEntries(head.map((h, i) => [h.replace(/^﻿/, ''), r[i]])));
}

function report(file) {
  if (!file || !fs.existsSync(file)) die('Give the path to "Table data.csv" from a YouTube Studio Analytics export.');
  const rows = parseCsv(fs.readFileSync(file, 'utf8')).filter(r => r.Content && r.Content !== 'Total');
  const videos = rows.map(r => ({
    id: r.Content.trim(), title: r['Video title'], fileName: null,
    // The export leaves the publish date blank for videos that aren't public.
    privacy: r['Video publish time'] ? 'public' : 'not public',
    views: +r.Views || 0, publishedAt: '',
  }));
  printReport(analyse(videos));
  console.log('\nNote: an analytics export only lists videos that got views in its date range.');
  console.log('Videos with zero views are missing from it. `scan` (after `auth`) sees everything.');
}

// ── Google sign-in (OAuth for an installed app, loopback redirect) ──────────

function readClient() {
  if (!fs.existsSync(CLIENT_FILE)) die(`Missing ${CLIENT_FILE}\nFollow step 1 in tools/youtube/README.md to download it.`);
  const j = JSON.parse(fs.readFileSync(CLIENT_FILE, 'utf8'));
  const c = j.installed || j.web;
  if (!c) die('client_secret.json is not an OAuth client file. Download it again as a "Desktop app" client.');
  return c;
}

async function auth() {
  const client = readClient();
  const verifier = crypto.randomBytes(32).toString('base64url');
  const challenge = crypto.createHash('sha256').update(verifier).digest('base64url');
  const state = crypto.randomBytes(8).toString('hex');

  const code = await new Promise((resolve, reject) => {
    const server = http.createServer((req, res) => {
      const u = new URL(req.url, 'http://127.0.0.1');
      if (u.pathname !== '/') { res.writeHead(404).end(); return; }
      const ok = u.searchParams.get('state') === state && u.searchParams.get('code');
      res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' })
        .end(ok ? '<h2>Signed in. You can close this tab and go back to the terminal.</h2>' : '<h2>Sign-in failed. Go back to the terminal.</h2>');
      server.close();
      ok ? resolve(u.searchParams.get('code')) : reject(new Error(u.searchParams.get('error') || 'sign-in failed'));
    });
    server.listen(0, '127.0.0.1', () => {
      const redirect = `http://127.0.0.1:${server.address().port}`;
      server.redirect = redirect;
      const url = 'https://accounts.google.com/o/oauth2/v2/auth?' + new URLSearchParams({
        client_id: client.client_id, redirect_uri: redirect, response_type: 'code', scope: SCOPE,
        access_type: 'offline', prompt: 'select_account consent', state, code_challenge: challenge, code_challenge_method: 'S256',
      });
      console.log('Opening Google sign-in in your browser. If it does not open, paste this link:\n\n' + url + '\n');
      execFile(process.platform === 'darwin' ? 'open' : 'xdg-open', [url], () => {});
    });
    auth.server = server;
  });

  const tok = await tokenRequest(client, {
    grant_type: 'authorization_code', code, code_verifier: verifier, redirect_uri: auth.server.redirect,
  });
  saveToken(tok);
  const ch = await yt('GET', 'channels', { part: 'snippet', mine: 'true' });
  const name = ch.items?.[0]?.snippet?.title;
  console.log(`Signed in to channel: ${name || '(this account has no channel)'}`);
  console.log('Wrong channel? Run auth again and pick the other account or brand account.');
}

async function tokenRequest(client, params) {
  const res = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({ client_id: client.client_id, client_secret: client.client_secret, ...params }),
  });
  const j = await res.json();
  if (!res.ok) {
    if (j.error === 'invalid_grant') die('Your Google sign-in has expired. Run: node tools/youtube/youtube.js auth');
    die(`Google sign-in error: ${j.error_description || j.error}`);
  }
  return j;
}

function saveToken(tok) {
  fs.mkdirSync(HOME_DIR, { recursive: true, mode: 0o700 });
  const prev = fs.existsSync(TOKEN_FILE) ? JSON.parse(fs.readFileSync(TOKEN_FILE, 'utf8')) : {};
  const next = { ...prev, ...tok, expires_at: Date.now() + (tok.expires_in - 60) * 1000 };
  fs.writeFileSync(TOKEN_FILE, JSON.stringify(next, null, 2), { mode: 0o600 });
  return next;
}

let accessToken = null;
async function getAccessToken() {
  if (accessToken) return accessToken;
  if (!fs.existsSync(TOKEN_FILE)) die('Not signed in yet. Run: node tools/youtube/youtube.js auth');
  let tok = JSON.parse(fs.readFileSync(TOKEN_FILE, 'utf8'));
  if (!tok.access_token || Date.now() > tok.expires_at) {
    if (!tok.refresh_token) die('Sign-in is incomplete. Run: node tools/youtube/youtube.js auth');
    tok = saveToken(await tokenRequest(readClient(), { grant_type: 'refresh_token', refresh_token: tok.refresh_token }));
  }
  return (accessToken = tok.access_token);
}

let quotaUsed = 0;
async function yt(method, resource, params = {}, body, cost = 1) {
  const url = `${API}/${resource}?` + new URLSearchParams(params);
  const res = await fetch(url, {
    method,
    headers: { Authorization: `Bearer ${await getAccessToken()}`, ...(body ? { 'Content-Type': 'application/json' } : {}) },
    body: body ? JSON.stringify(body) : undefined,
  });
  quotaUsed += cost;
  if (res.status === 204) return {};
  const j = await res.json();
  if (!res.ok) {
    const reason = j.error?.errors?.[0]?.reason;
    if (reason === 'quotaExceeded') die('YouTube daily limit reached. Run the same command again tomorrow; it picks up where it left off.');
    if (reason === 'youtubeSignupRequired' || res.status === 401) die('Google sign-in problem. Run: node tools/youtube/youtube.js auth');
    const err = new Error(`${method} ${resource}: ${j.error?.message || res.status}${reason ? ` (${reason})` : ''}`);
    err.status = res.status;
    throw err;
  }
  return j;
}

async function listAll(resource, params) {
  const items = [];
  let pageToken;
  do {
    const j = await yt('GET', resource, { ...params, maxResults: 50, ...(pageToken ? { pageToken } : {}) });
    items.push(...(j.items || []));
    pageToken = j.nextPageToken;
  } while (pageToken);
  return items;
}

// ── Reading the channel ─────────────────────────────────────────────────────

async function loadChannel() {
  const ch = await yt('GET', 'channels', { part: 'contentDetails,snippet', mine: 'true' });
  if (!ch.items?.length) die('This Google account has no YouTube channel. Sign in with the channel account: run auth again.');
  console.log(`Channel: ${ch.items[0].snippet.title}   (script version ${VERSION})`);
  const uploads = ch.items[0].contentDetails.relatedPlaylists.uploads;
  // The uploads list can return the same video more than once; count each video once.
  const ids = [...new Set((await listAll('playlistItems', { part: 'contentDetails', playlistId: uploads })).map(i => i.contentDetails.videoId))];

  const videos = [];
  for (let i = 0; i < ids.length; i += 50) {
    const j = await yt('GET', 'videos', { part: 'snippet,status,statistics,fileDetails', id: ids.slice(i, i + 50).join(',') });
    for (const v of j.items) videos.push({
      id: v.id, raw: v, title: v.snippet.title, description: v.snippet.description || '',
      fileName: v.fileDetails?.fileName || null, privacy: v.status.privacyStatus,
      views: +(v.statistics?.viewCount || 0), publishedAt: v.snippet.publishedAt,
      madeForKids: v.status.madeForKids,
    });
  }

  const playlists = await listAll('playlists', { part: 'snippet', mine: 'true' });
  const plByTitle = new Map(playlists.map(p => [p.snippet.title, { id: p.id, items: null }]));
  for (const title of Object.values(PLAYLISTS)) {
    const pl = plByTitle.get(title);
    if (pl) pl.items = await listAll('playlistItems', { part: 'snippet', playlistId: pl.id });
  }
  console.log(`${videos.length} videos, ${playlists.length} playlists\n`);
  return { videos, plByTitle };
}

async function scan() {
  const { videos } = await loadChannel();
  const result = analyse(videos);
  printReport(result);
  const kids = videos.filter(v => v.madeForKids);
  if (kids.length) console.log(`\n⚠ ${kids.length} videos are set as "Made for kids": ${kids.map(v => v.id).join(', ')}`);

  fs.mkdirSync(OUT_DIR, { recursive: true });
  const file = path.join(OUT_DIR, 'channel.csv');
  const esc = s => `"${String(s ?? '').replace(/"/g, '""')}"`;
  const lines = ['id,key,kind,part,seq,privacy,views,main_copy,title,file_name'];
  for (const v of videos) lines.push([v.id, v.key || '', v.series?.kind || '', v.series?.part || '', v.series?.seq ?? '',
    v.privacy, v.views, v.duplicateOf ? `duplicate of ${v.duplicateOf.id}` : (v.key ? 'yes' : ''), v.title, v.fileName].map(esc).join(','));
  fs.writeFileSync(file, lines.join('\n') + '\n');
  console.log(`\nFull list saved to ${path.relative(process.cwd(), file)} (opens in Numbers or Excel).`);
}

// ── Fixing the channel ──────────────────────────────────────────────────────

function withPartLinks(description, partners) {
  const links = [1, 2].filter(n => partners[n]).map(n => `▶ Part ${n}: https://youtu.be/${partners[n].id}`);
  if (links.length < 2) return description;
  const lines = description.split('\n');
  while (lines.length && (LINK_LINE.test(lines[0]) || (lines[0].trim() === '' && LINK_LINE.test(lines[1] || '')))) lines.shift();
  while (lines.length && lines[0].trim() === '') lines.shift();
  return [...links, '', ...lines].join('\n').trimEnd();
}

// ── Upload sheets (the .txt files with TITLE / DESCRIPTION / Tags / Playlist) ──

// Reads every upload sheet in a folder. Returns Map key → sheet, plus problems found.
function loadSheets(folder) {
  if (!fs.existsSync(folder) || !fs.statSync(folder).isDirectory()) die(`Not a folder: ${folder}`);
  const sheets = new Map(), problems = [];
  for (const f of fs.readdirSync(folder).filter(n => n.toLowerCase().endsWith('.txt'))) {
    const lines = fs.readFileSync(path.join(folder, f), 'utf8').replace(/\r/g, '').split('\n');
    const at = re => lines.findIndex(l => re.test(l));
    const caseLine = lines.find(l => /^Case:/.test(l));
    const cm = caseLine && caseLine.match(/^Case:\s*(\S+)(?:.*Upload order:\s*#(\d+))?/);
    const code = cm && cm[1].match(/\b([DG]\d{3})\b/);
    if (!code) { problems.push(`${f}: no "Case:" line with a case code, skipped`); continue; }
    const id = cm[1];
    const part = id.match(/part(\d)/i), q = id.match(/\bq(\d+)/i);
    const series = { code: code[1], kind: /full/i.test(id) ? 'full' : /mini/i.test(id) ? 'mini' : 'practice',
      part: part ? +part[1] : null, q: q ? +q[1] : null };
    const ti = at(/^TITLE/), di = at(/^DESCRIPTION:/), end = lines.findIndex((l, i) => i > di && l.trim() === '---');
    const title = ti >= 0 ? (lines.slice(ti + 1).find(l => l.trim()) || '').trim() : '';
    const description = di >= 0 ? lines.slice(di + 1, end >= 0 ? end : undefined).join('\n').trim() : '';
    const playlist = (lines.find(l => /^Playlist:/.test(l)) || '').replace(/^Playlist:\s*/, '').trim();
    // A category like "Crisis, Risk, and Safety" has commas of its own; keep it one tag.
    const category = playlist.split(': ').slice(1).join(': ');
    let tagLine = (lines.find(l => /^Tags:/.test(l)) || '').replace(/^Tags:\s*/, '');
    if (category.includes(',')) tagLine = tagLine.split(category).join(category.replace(/,/g, ''));
    const tags = tagLine.split(',').map(t => t.trim()).filter(Boolean);
    const sheet = { file: f, title, description, tags, playlist, order: cm[2] ? +cm[2] : null, problems: [] };
    if (/…|\.\.\.\s*\(/.test(title)) sheet.problems.push('title is cut off ("…")');
    if (title.length > TITLE_MAX) sheet.problems.push(`title is ${title.length} characters, YouTube allows ${TITLE_MAX}`);
    if (description.split('\n').some(l => /^\s*[\[\]{}]\s*$/.test(l) || /\{\{|\bundefined\b/.test(l))) sheet.problems.push('description has a broken line (a lone "[" or similar)');
    if (tags.join(',').length > 500) sheet.problems.push('tags are over 500 characters');
    sheets.set(keyOf(series), sheet);
  }
  return { sheets, problems };
}

// YouTube stores tags its own way (case, quotes, and it may drop some like "@Name"),
// so compare loosely: same set once lowercased, ignoring tags it may have dropped.
function sameTags(a, b) {
  const norm = list => new Set(list.map(t => t.toLowerCase().replace(/["']/g, '').trim()).filter(t => t && !/[@<>]/.test(t)));
  const x = norm(a), y = norm(b);
  return x.size === y.size && [...x].every(t => y.has(t));
}

// Videos YouTube refused to update; skipped on later runs (saves the daily quota).
const BLOCKED_FILE = path.join(OUT_DIR, 'refused-videos.json');
function readBlocked() { try { return JSON.parse(fs.readFileSync(BLOCKED_FILE, 'utf8')); } catch { return {}; } }
function saveBlocked(b) { fs.mkdirSync(OUT_DIR, { recursive: true }); fs.writeFileSync(BLOCKED_FILE, JSON.stringify(b, null, 2)); }

async function fix(args) {
  const apply = args.includes('--yes');
  const doVisibility = args.includes('--visibility');
  const retryRefused = args.includes('--retry-refused');
  const blocked = readBlocked();
  const { videos, plByTitle } = await loadChannel();
  const { mains, dupes } = analyse(videos);
  let changes = 0;
  const si = args.indexOf('--sheets');
  const { sheets, problems } = si >= 0 ? loadSheets(args[si + 1] || '') : { sheets: new Map(), problems: [] };
  if (si >= 0) {
    console.log(`Upload sheets: ${sheets.size} read from ${args[si + 1]}`);
    problems.forEach(p => console.log(`  ⚠ ${p}`));
    console.log('');
  }

  console.log(apply ? 'Making changes…\n' : 'Preview — nothing is changed until you add --yes\n');

  // 1. Titles, part links, visibility
  for (const v of [...mains].sort((a, b) => a.series.kind.localeCompare(b.series.kind) || seriesOrder(a, b))) {
    const notes = [];
    const snippet = v.raw.snippet;
    // A mini's sheet has no part number, even if an old title said "Part 1 of 2".
    // The sheet matches the uploaded file, so it also settles a title that names the wrong case.
    const sheet = sheets.get(v.key) || (v.series.kind !== 'full' ? sheets.get(v.series.code) : null);
    v.sheet = sheet;
    if (sheet) sheet.used = true;
    v.playlist = sheet?.playlist || PLAYLISTS[v.series.kind];
    v.order = sheet?.order ?? v.series.seq;
    if (sheet?.problems.length) notes.push(`⚠ upload sheet ${sheet.file}: ${sheet.problems.join('; ')}`);
    const sheetTitleOk = sheet && sheet.title && !sheet.problems.some(p => p.startsWith('title'));
    const title = sheetTitleOk ? sheet.title : (TITLE_OVERRIDES[v.key] || (sheet ? null : wantedTitle(v.series)));
    let newTitle = snippet.title, newDesc = snippet.description || '';
    let newTags = snippet.tags || [];
    if (sheet && sheet.description && !sheet.problems.some(p => p.startsWith('description'))) newDesc = sheet.description;
    if (sheet && sheet.tags.length && !sameTags(sheet.tags, newTags)) { newTags = sheet.tags; notes.push('tags: from upload sheet'); }
    if (v.mismatch && sheet) notes.push(`title said ${v.mismatch} but the uploaded file is ${v.series.code}; using the ${v.series.code} upload sheet`);
    if (v.mismatch && !sheet) notes.push(`⚠ title left as is: the title says ${v.mismatch} but the uploaded file is ${v.series.code}. Check this video in Studio.`);
    else if (!title) notes.push(sheet ? 'title left as is (fix the title in the upload sheet, or add it to TITLE_OVERRIDES in config.js)'
      : 'title left as is (file name was cut off; add it to TITLE_OVERRIDES in config.js)');
    else if (title.length > TITLE_MAX) notes.push(`title left as is (new one is ${title.length} characters, YouTube allows ${TITLE_MAX})`);
    else if (title !== snippet.title) { newTitle = title; notes.push(`title: "${snippet.title}"\n             → "${title}"`); }
    if (v.partners) {
      const d = withPartLinks(newDesc, v.partners);
      newDesc = d;
    }
    if (newDesc !== (snippet.description || '')) notes.push(sheet && newDesc.includes(sheet.description.slice(0, 40))
      ? 'description: from upload sheet' + (v.partners ? ', with Part 1 / Part 2 links at the top' : '')
      : 'description: add Part 1 / Part 2 links at the top');
    if (!newDesc.trim()) notes.push('⚠ description is empty (set Upload defaults in Studio, see README)');
    let newPrivacy = v.privacy;
    if (doVisibility && v.privacy !== 'public') {
      if (v.raw.status.publishAt) notes.push(`visibility left as is (scheduled to go public ${v.raw.status.publishAt})`);
      else { newPrivacy = 'public'; notes.push(`visibility: ${v.privacy} → public`); }
    }

    if (blocked[v.id] && !retryRefused) {
      if (notes.length) console.log(`${v.key.padEnd(9)} ${v.id}\n           skipped: YouTube refused edits to this video on ${blocked[v.id]} (add --retry-refused to try again)`);
      continue;
    }
    const changed = newTitle !== snippet.title || newDesc !== (snippet.description || '') || newPrivacy !== v.privacy
      || !sameTags(newTags, snippet.tags || []);
    if (!notes.length) continue;
    console.log(`${v.key.padEnd(9)} ${v.id}\n           ${notes.join('\n           ')}`);
    if (changed) {
      changes++;
      if (apply) {
        const ok = await updateVideo(v, { title: newTitle, description: newDesc, privacy: newPrivacy, tags: newTags });
        if (ok) delete blocked[v.id]; else blocked[v.id] = new Date().toISOString().slice(0, 10);
        saveBlocked(blocked);
      }
    }
  }
  for (const [k, sh] of sheets) if (!sh.used) console.log(`⚠ upload sheet ${sh.file} (${k}): no matching video on the channel`);

  // 2. Extra copies
  for (const d of dupes) {
    const inPl = [...plByTitle.values()].some(pl => pl.items?.some(i => i.snippet.resourceId.videoId === d.id));
    if (doVisibility && d.privacy === 'public') {
      console.log(`${d.key.padEnd(9)} ${d.id}\n           extra copy of ${d.duplicateOf.id}: visibility public → unlisted`);
      changes++;
      if (apply) await updateVideo(d, { title: d.raw.snippet.title, description: d.raw.snippet.description, privacy: 'unlisted' });
    } else if (d.privacy === 'public') {
      console.log(`${d.key.padEnd(9)} ${d.id}\n           extra copy of ${d.duplicateOf.id} is public (add --visibility to set it to unlisted)`);
    }
    if (inPl) {
      for (const pl of plByTitle.values()) for (const it of [...(pl.items || [])]) if (it.snippet.resourceId.videoId === d.id) {
        console.log(`           remove extra copy from playlist`);
        changes++;
        if (apply) { await yt('DELETE', 'playlistItems', { id: it.id }, null, 50); pl.items.splice(pl.items.indexOf(it), 1); }
      }
    }
  }

  // 3. Playlists, in series order
  const byOrder = (a, b) => (a.order ?? 999) - (b.order ?? 999) || a.key.localeCompare(b.key);
  for (const plTitle of new Set(mains.filter(v => !v.mismatch || v.sheet).map(v => v.playlist))) {
    const wanted = mains.filter(v => v.playlist === plTitle && (!v.mismatch || v.sheet)).sort(byOrder);
    if (!wanted.length) continue;
    let pl = plByTitle.get(plTitle);
    // Playlists named in upload sheets weren't loaded up front; load their contents now.
    if (pl && !pl.items) pl.items = await listAll('playlistItems', { part: 'snippet', playlistId: pl.id });
    const have = new Set((pl?.items || []).map(i => i.snippet.resourceId.videoId));
    const toAdd = wanted.filter(v => !have.has(v.id));
    if (!toAdd.length) continue;
    console.log(`\nPlaylist "${plTitle}"${pl ? '' : ' (will be created)'}: add ${toAdd.length} — ${toAdd.map(v => v.key).join(', ')}`);
    changes += toAdd.length;
    if (!apply) continue;
    if (!pl) {
      const created = await yt('POST', 'playlists', { part: 'snippet,status' },
        { snippet: { title: plTitle }, status: { privacyStatus: 'public' } }, 50);
      pl = { id: created.id, items: [] };
      plByTitle.set(plTitle, pl);
    }
    for (const v of toAdd) {
      // Insert at the position it belongs in the series, so out-of-order uploads land in order.
      const order = wanted.map(w => w.id);
      const current = [...pl.items.map(i => i.snippet.resourceId.videoId)];
      const pos = current.filter(id => order.indexOf(id) !== -1 && order.indexOf(id) < order.indexOf(v.id)).length
        + current.filter(id => order.indexOf(id) === -1).length;
      const body = { snippet: { playlistId: pl.id, resourceId: { kind: 'youtube#video', videoId: v.id }, position: pos } };
      let item;
      try { item = await yt('POST', 'playlistItems', { part: 'snippet' }, body, 50); }
      catch (e) { delete body.snippet.position; item = await yt('POST', 'playlistItems', { part: 'snippet' }, body, 50); }
      pl.items.splice(pos, 0, item);
    }
  }

  if (!changes) console.log('Everything already matches. Nothing to change.');
  else if (!apply) console.log(`\n${changes} change(s) shown. Run again with --yes to make them.`);
  else console.log(`\nDone: ${changes} change(s) made. (YouTube quota used: about ${quotaUsed} of 10,000 for today.)`);
  if (apply && failedUpdates) console.log(`⚠ ${failedUpdates} video(s) could not be updated; see the ✗ lines above.`);
}

let failedUpdates = 0;
async function updateVideo(v, { title, description, privacy, tags }) {
  const s = v.raw.snippet, st = v.raw.status;
  const snippet = { title, description, categoryId: s.categoryId };
  for (const k of ['tags', 'defaultLanguage', 'defaultAudioLanguage']) if (s[k]) snippet[k] = s[k];
  if (tags) snippet.tags = tags;
  const status = { privacyStatus: privacy };
  for (const k of ['embeddable', 'license', 'publicStatsViewable', 'selfDeclaredMadeForKids', 'containsSyntheticMedia']) if (st[k] !== undefined) status[k] = st[k];
  if (st.publishAt && privacy === 'private') status.publishAt = st.publishAt;
  const statusChanged = privacy !== st.privacyStatus;
  // YouTube's "metadata is invalid" doesn't say which field. Retry with less, and say what was dropped.
  const attempts = [
    { part: 'snippet,status', body: { id: v.id, snippet, status }, dropped: null },
    // One cheaper retry: no extra status settings, no tags YouTube might object to.
    { part: statusChanged ? 'snippet,status' : 'snippet',
      body: { id: v.id, snippet: { ...snippet, tags: (snippet.tags || []).filter(t => !/[@<>]/.test(t)) }, ...(statusChanged ? { status: { privacyStatus: privacy } } : {}) },
      dropped: 'tags with @ < >, extra status settings' },
  ];
  let lastErr;
  for (const a of attempts) {
    try {
      await yt('PUT', 'videos', { part: a.part }, a.body, 50);
      if (a.dropped) console.log(`           ⚠ saved without: ${a.dropped} (YouTube rejected the full update)`);
      return true;
    } catch (e) {
      if (!(e.status >= 400 && e.status < 500)) throw e;
      lastErr = e;
    }
  }
  console.log(`           ✗ YouTube refused any edit to this video: ${lastErr.message}. Skipped on later runs.`);
  failedUpdates++;
  return false;
}

// ── CLI ─────────────────────────────────────────────────────────────────────

function die(msg) { console.error(msg); process.exit(1); }

async function main() {
  const [cmd, ...args] = process.argv.slice(2);
  if (cmd === 'auth') return auth();
  if (cmd === 'scan') return scan();
  if (cmd === 'fix') return fix(args);
  if (cmd === 'report') return report(args[0]);
  console.log('Commands: auth | scan | fix [--yes] [--visibility] | report "Table data.csv"\nSee tools/youtube/README.md');
}

if (require.main === module) main().catch(e => die(e.message));

module.exports = { parseName, keyOf, wantedTitle, analyse, withPartLinks, parseCsv, loadSheets };
