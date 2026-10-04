// Server-side copy of the NCMHCE readiness predictor in public/index.html
// (computeReadiness). Used to gate the résumé builder (routes/resume.js) so the
// unlock can't be bypassed from the browser. Keep the weights and formula in
// sync with index.html — the pass guarantee's 60% threshold uses the same score.
const DOMAIN_WEIGHTS = { counseling: 0.28, intake: 0.25, treatment: 0.22, ethics: 0.15, core: 0.10 };

// attempts: NCMHCE Attempt docs, oldest first, each with
// domainBreakdown { domain: { ok, total } } (same shape index.html syncs).
function computeNcmhceReadiness(attempts) {
  const h = attempts.map((a) => {
    const db = a.domainBreakdown || {};
    let correct = 0, total = 0; const domains = {};
    Object.keys(db).forEach((d) => {
      const ok = +(db[d] || {}).ok || 0, tot = +(db[d] || {}).total || 0;
      domains[d] = { ok, total: tot }; correct += ok; total += tot;
    });
    return { correct, total, domains };
  }).filter((e) => e.total > 0);
  if (!h.length) return null;

  const agg = {};
  let totalCorrect = 0, totalQs = 0;
  h.forEach((e) => {
    totalCorrect += e.correct; totalQs += e.total;
    Object.entries(e.domains).forEach(([d, v]) => {
      if (!agg[d]) agg[d] = { ok: 0, total: 0 };
      agg[d].ok += v.ok; agg[d].total += v.total;
    });
  });

  let weightedSum = 0, weightTotal = 0;
  Object.entries(DOMAIN_WEIGHTS).forEach(([d, w]) => {
    if (agg[d] && agg[d].total >= 1) { weightedSum += (agg[d].ok / agg[d].total) * w; weightTotal += w; }
  });
  const volumeFactor = Math.min(1, h.length / 20);
  const recent = h.slice(-5);
  const rc = recent.reduce((s, e) => s + e.correct, 0), rt = recent.reduce((s, e) => s + e.total, 0);
  const recentPct = rt ? (rc / rt) * 100 : 0;
  const overallPct = totalQs ? (totalCorrect / totalQs) * 100 : 0;
  const recencyBoost = recentPct > overallPct ? Math.min(5, (recentPct - overallPct) * 0.3) : 0;
  const raw = weightTotal ? (weightedSum / weightTotal) * 100 : overallPct;
  const score = Math.min(99, Math.round(raw * volumeFactor + recencyBoost));

  return { score, cases: h.length, agg };
}

module.exports = { computeNcmhceReadiness, DOMAIN_WEIGHTS };
