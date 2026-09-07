import { authFetch, getToken } from './api';

// NCMHCE domain weights (from NBCC Content Outline, revised Oct 2025)
// Source: https://nbcc.org/assets/exam/ncmhce_content_outline.pdf
export const DOMAIN_WEIGHTS = { counseling: 0.30, intake: 0.25, treatment: 0.15, ethics: 0.15, core: 0.15 };
export const DOMAIN_LABELS = {
  counseling: 'Counseling Skills & Interventions',
  intake: 'Intake, Assessment & Diagnosis',
  treatment: 'Treatment Planning',
  ethics: 'Professional Practice & Ethics',
  core: 'Core Counseling Attributes',
};
export const DOMAIN_ORDER = ['counseling', 'intake', 'treatment', 'ethics', 'core'];

const HISTORY_KEY = 'prp_history';
const HISTORY_TS_KEY = 'prp_history_t';

export function loadHistory() {
  try { return JSON.parse(localStorage.getItem(HISTORY_KEY)) || []; } catch { return []; }
}

function setHistoryTS() { const t = Date.now(); localStorage.setItem(HISTORY_TS_KEY, String(t)); return t; }

// Fire-and-forget push to server. Never throws.
function pushHistory(entries, t) {
  if (!getToken()) return;
  authFetch('/api/study-history', {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ entries, t }),
  }).catch(() => {});
}

// Pull from server + merge into localStorage. Call once on app load.
export async function syncHistory() {
  if (!getToken()) return;
  try {
    const res = await authFetch('/api/study-history');
    if (!res.ok) return;
    const data = await res.json();
    if (!data.entries || data.entries.length === 0) return;
    const local = loadHistory();
    // Deduplicate by caseId+date
    const map = new Map();
    local.forEach((e) => map.set(`${e.caseId}|${e.date}`, e));
    data.entries.forEach((e) => map.set(`${e.caseId}|${e.date}`, e));
    const merged = [...map.values()].sort((a, b) => (a.date || 0) - (b.date || 0)).slice(-500);
    localStorage.setItem(HISTORY_KEY, JSON.stringify(merged));
    const t = setHistoryTS();
    pushHistory(merged, t);
  } catch {}
}

export function saveToHistory(caseObj, answers, dxCorrect, category) {
  const h = loadHistory();
  const domains = {};
  (caseObj.questions || []).forEach((q, i) => {
    const a = answers[i];
    const chosen = a && q.options.find((o) => o.id === a.chosenId);
    const isOk = chosen && chosen.isCorrect;
    const d = q.domain || 'general';
    if (!domains[d]) domains[d] = { ok: 0, total: 0 };
    domains[d].total++;
    if (isOk) domains[d].ok++;
  });
  const correct = Object.values(domains).reduce((s, d) => s + d.ok, 0);
  const total = Object.values(domains).reduce((s, d) => s + d.total, 0);
  h.push({
    caseId: caseObj.id || caseObj.title,
    category: category || caseObj.category || null,
    date: Date.now(), correct, total, domains,
    dxCorrect: typeof dxCorrect === 'boolean' ? dxCorrect : null,
    difficulty: caseObj.difficulty || 'medium',
  });
  if (h.length > 500) h.splice(0, h.length - 500);
  localStorage.setItem(HISTORY_KEY, JSON.stringify(h));
  const t = setHistoryTS();
  pushHistory(h, t);
}

export function computeReadiness() {
  const h = loadHistory();
  if (!h.length) return null;

  const agg = {};
  let totalCases = h.length, totalCorrect = 0, totalQs = 0;
  let dxCorrectCount = 0, dxTotal = 0;

  h.forEach((entry) => {
    totalCorrect += entry.correct || 0;
    totalQs += entry.total || 0;
    if (entry.dxCorrect != null) { dxTotal++; if (entry.dxCorrect) dxCorrectCount++; }
    Object.entries(entry.domains || {}).forEach(([d, v]) => {
      if (!agg[d]) agg[d] = { ok: 0, total: 0 };
      agg[d].ok += v.ok;
      agg[d].total += v.total;
    });
  });

  const domainScores = {};
  Object.entries(agg).forEach(([d, v]) => {
    domainScores[d] = v.total ? Math.round((v.ok / v.total) * 100) : 0;
  });

  let weightedSum = 0, weightTotal = 0;
  Object.entries(DOMAIN_WEIGHTS).forEach(([d, w]) => {
    if (agg[d] && agg[d].total >= 1) {
      weightedSum += (agg[d].ok / agg[d].total) * w;
      weightTotal += w;
    }
  });

  const volumeFactor = Math.min(1, totalCases / 20);
  const recent = h.slice(-5);
  const recentPct = recent.length
    ? (recent.reduce((s, e) => s + e.correct, 0) / recent.reduce((s, e) => s + e.total, 0)) * 100
    : 0;
  const overallPct = totalQs ? (totalCorrect / totalQs) * 100 : 0;
  const recencyBoost = recentPct > overallPct ? Math.min(5, (recentPct - overallPct) * 0.3) : 0;

  const rawReadiness = weightTotal ? (weightedSum / weightTotal) * 100 : overallPct;
  const readiness = Math.min(99, Math.round(rawReadiness * volumeFactor + recencyBoost));

  const weakDomains = Object.entries(domainScores)
    .filter(([d, s]) => agg[d].total >= 2 && s < 60)
    .sort((a, b) => a[1] - b[1])
    .map(([d, s]) => ({ domain: d, score: s }));

  let label = 'Keep practicing';
  if (readiness >= 85) label = 'Exam ready';
  else if (readiness >= 70) label = 'Almost there';
  else if (readiness >= 50) label = 'Building momentum';

  return {
    readiness, label, totalCases, totalCorrect, totalQs, overallPct: Math.round(overallPct),
    domainScores, agg, weakDomains,
    recentTrend: recentPct > overallPct ? 'up' : recentPct < overallPct - 5 ? 'down' : 'steady',
  };
}

// ── Extended analytics for the performance page ──────────────────────
export function computeAnalytics() {
  const h = loadHistory();
  if (!h.length) return null;

  const now = Date.now();
  const day = 86400000;

  // ── Domain accuracy: all-time vs last 7 days ──
  const domainAll = {};
  const domain7 = {};
  const domain14 = {};
  h.forEach((e) => {
    Object.entries(e.domains || {}).forEach(([d, v]) => {
      if (!domainAll[d]) domainAll[d] = { ok: 0, total: 0 };
      domainAll[d].ok += v.ok; domainAll[d].total += v.total;
      if (e.date > now - 7 * day) {
        if (!domain7[d]) domain7[d] = { ok: 0, total: 0 };
        domain7[d].ok += v.ok; domain7[d].total += v.total;
      }
      if (e.date > now - 14 * day) {
        if (!domain14[d]) domain14[d] = { ok: 0, total: 0 };
        domain14[d].ok += v.ok; domain14[d].total += v.total;
      }
    });
  });

  const pct = (a) => a && a.total ? Math.round((a.ok / a.total) * 100) : null;
  const domainStats = DOMAIN_ORDER.map((d) => ({
    domain: d, label: DOMAIN_LABELS[d],
    allTime: pct(domainAll[d]), recent7: pct(domain7[d]), recent14: pct(domain14[d]),
    questionsAnswered: domainAll[d]?.total || 0,
  }));

  // ── Category accuracy ──
  const catMap = {};
  h.forEach((e) => {
    const cat = e.category || 'Uncategorized';
    if (!catMap[cat]) catMap[cat] = { ok: 0, total: 0, cases: 0 };
    catMap[cat].ok += e.correct || 0;
    catMap[cat].total += e.total || 0;
    catMap[cat].cases++;
  });
  const categoryStats = Object.entries(catMap)
    .map(([cat, v]) => ({ category: cat, accuracy: pct(v), cases: v.cases, questions: v.total }))
    .sort((a, b) => (a.accuracy ?? 0) - (b.accuracy ?? 0));

  // ── Daily case counts (last 30 days) ──
  const dailyCounts = {};
  for (let i = 29; i >= 0; i--) {
    const d = new Date(now - i * day);
    const key = d.toISOString().slice(0, 10);
    dailyCounts[key] = 0;
  }
  h.forEach((e) => {
    const key = new Date(e.date).toISOString().slice(0, 10);
    if (key in dailyCounts) dailyCounts[key]++;
  });
  const dailySeries = Object.entries(dailyCounts).map(([date, count]) => ({ date, count }));

  // ── Streak (consecutive days ending today with ≥1 case) ──
  let streak = 0;
  for (let i = 0; i < 365; i++) {
    const key = new Date(now - i * day).toISOString().slice(0, 10);
    const hasCase = h.some((e) => new Date(e.date).toISOString().slice(0, 10) === key);
    if (hasCase) streak++;
    else if (i === 0) continue; // today might not have a case yet
    else break;
  }

  // ── Difficulty breakdown ──
  const diffMap = { easy: { ok: 0, total: 0, cases: 0 }, medium: { ok: 0, total: 0, cases: 0 }, hard: { ok: 0, total: 0, cases: 0 } };
  h.forEach((e) => {
    const d = diffMap[e.difficulty] || diffMap.medium;
    d.ok += e.correct || 0; d.total += e.total || 0; d.cases++;
  });
  const diffStats = ['easy', 'medium', 'hard'].map((d) => ({
    difficulty: d, accuracy: pct(diffMap[d]), cases: diffMap[d].cases,
  }));

  // ── Weakest areas (domains + categories combined, sorted) ──
  const weakAreas = [];
  domainStats.forEach((d) => {
    if (d.questionsAnswered >= 3 && d.allTime !== null && d.allTime < 65) {
      weakAreas.push({ type: 'domain', key: d.domain, label: d.label, score: d.allTime, questions: d.questionsAnswered });
    }
  });
  categoryStats.forEach((c) => {
    if (c.questions >= 3 && c.accuracy !== null && c.accuracy < 65) {
      weakAreas.push({ type: 'category', key: c.category, label: c.category, score: c.accuracy, questions: c.questions });
    }
  });
  weakAreas.sort((a, b) => a.score - b.score);

  // ── Pacing (if exam date set) ──
  const examDate = localStorage.getItem('prp_exam_date') || '';
  let pacing = null;
  if (examDate) {
    const examMs = new Date(examDate + 'T12:00:00').getTime();
    const daysLeft = Math.max(0, Math.ceil((examMs - now) / day));
    const last7Cases = h.filter((e) => e.date > now - 7 * day).length;
    const avgPerDay = last7Cases / 7;
    const projected = Math.round(avgPerDay * daysLeft);
    const totalDone = h.length;
    const target = Math.max(20, totalDone + daysLeft * 2); // at least 2/day recommended
    pacing = {
      daysLeft, avgPerDay: Math.round(avgPerDay * 10) / 10,
      totalDone, projected, target,
      onTrack: avgPerDay >= 1.5 && totalDone >= 10,
      recommendedPerDay: daysLeft > 0 ? Math.max(2, Math.ceil((Math.max(0, 20 - totalDone)) / daysLeft)) : 0,
    };
  }

  return {
    totalCases: h.length,
    overallAccuracy: h.reduce((s, e) => s + (e.correct || 0), 0) / Math.max(1, h.reduce((s, e) => s + (e.total || 0), 0)) * 100 | 0,
    streak, domainStats, categoryStats, dailySeries, diffStats, weakAreas, pacing,
  };
}
