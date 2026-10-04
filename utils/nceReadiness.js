// NCE readiness — one 0–99 score summarizing a learner's NCE practice, shown on
// the NCE dashboard (public/nce.html via GET /api/nce/progress).
//
// Same approach as the NCMHCE readiness predictor on the study page, but
// weighted by NBCC's published NCE scored-item counts (utils/nceBlueprint.js):
//   1. Weighted accuracy: each domain's accuracy × its NBCC weight, normalized
//      over the domains the learner has actually practiced.
//   2. Volume: scaled down until FULL_CONFIDENCE_ANSWERS questions are answered,
//      so a handful of lucky answers can't read as "ready".
//   3. Recency: up to +5 when the last few attempts beat the overall average.
// It is a practice indicator, not a prediction of an NCE result.
const bp = require('./nceBlueprint');

const FULL_CONFIDENCE_ANSWERS = 300;
const RECENT_ATTEMPTS = 5;
const WEAK_BELOW = 60;      // domain accuracy (%) flagged as weak…
const WEAK_MIN_ANSWERS = 5; // …once at least this many answered in it

function label(score) {
  if (score >= 85) return 'Exam ready';
  if (score >= 70) return 'Almost there';
  if (score >= 50) return 'Building momentum';
  return 'Keep practicing';
}

// byDomain: { key: { correct, total } } summed over all attempts
// attempts: newest first, each with domainBreakdown { key: { correct, total } }
function computeNceReadiness(byDomain, attempts) {
  let totC = 0, totT = 0;
  Object.values(byDomain).forEach((v) => { totC += v.correct; totT += v.total; });
  if (!totT) return null;

  let weighted = 0, weightTotal = 0;
  bp.DOMAINS.forEach((d) => {
    const v = byDomain[d.key];
    if (v && v.total > 0) { weighted += (v.correct / v.total) * d.weight; weightTotal += d.weight; }
  });
  const raw = weightTotal ? (weighted / weightTotal) * 100 : (totC / totT) * 100;

  const volumeFactor = Math.min(1, totT / FULL_CONFIDENCE_ANSWERS);

  let rc = 0, rt = 0;
  attempts.slice(0, RECENT_ATTEMPTS).forEach((a) => {
    Object.values(a.domainBreakdown || {}).forEach((v) => { rc += v.correct || 0; rt += v.total || 0; });
  });
  const overallPct = (totC / totT) * 100;
  const recentPct = rt ? (rc / rt) * 100 : overallPct;
  const recencyBoost = recentPct > overallPct ? Math.min(5, (recentPct - overallPct) * 0.3) : 0;

  const score = Math.min(99, Math.round(raw * volumeFactor + recencyBoost));

  const weakDomains = bp.DOMAINS
    .map((d) => ({ key: d.key, label: d.label, total: (byDomain[d.key] || {}).total || 0, correct: (byDomain[d.key] || {}).correct || 0 }))
    .filter((d) => d.total >= WEAK_MIN_ANSWERS && (d.correct / d.total) * 100 < WEAK_BELOW)
    .map((d) => ({ key: d.key, label: d.label, pct: Math.round((d.correct / d.total) * 100) }))
    .sort((a, b) => a.pct - b.pct);

  return {
    score,
    label: label(score),
    answered: totT,
    answeredForFullConfidence: FULL_CONFIDENCE_ANSWERS,
    trend: recentPct > overallPct ? 'up' : recentPct < overallPct - 5 ? 'down' : 'steady',
    weakDomains,
    // NBCC weight of each domain, heaviest first, for the dashboard's explanation.
    weights: bp.DOMAINS.slice().sort((a, b) => b.weight - a.weight)
      .map((d) => ({ key: d.key, short: d.short, pct: Math.round(d.weight * 100) })),
  };
}

module.exports = { computeNceReadiness, FULL_CONFIDENCE_ANSWERS };
