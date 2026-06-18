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

export function loadHistory() {
  try { return JSON.parse(localStorage.getItem(HISTORY_KEY)) || []; } catch { return []; }
}

export function saveToHistory(caseObj, answers, dxCorrect) {
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
    date: Date.now(), correct, total, domains,
    dxCorrect: typeof dxCorrect === 'boolean' ? dxCorrect : null,
    difficulty: caseObj.difficulty || 'medium',
  });
  if (h.length > 500) h.splice(0, h.length - 500);
  localStorage.setItem(HISTORY_KEY, JSON.stringify(h));
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
