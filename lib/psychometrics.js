const Attempt = require('../models/Attempt');
const ReviewBatch = require('../models/ReviewBatch');

const DOMAIN_LABELS = {
  intake: 'Intake & Assessment',
  core: 'Core Counseling',
  treatment: 'Treatment Planning',
  counseling: 'Counseling Process',
  ethics: 'Professional Ethics',
};

function cohensKappa(a, b) {
  if (a.length !== b.length || !a.length) return null;
  const n = a.length;
  let agree = 0, a1 = 0, b1 = 0;
  for (let i = 0; i < n; i++) {
    if (a[i] === b[i]) agree++;
    if (a[i]) a1++;
    if (b[i]) b1++;
  }
  const po = agree / n;
  const pe = ((a1 / n) * (b1 / n)) + (((n - a1) / n) * ((n - b1) / n));
  if (pe === 1) return 1;
  return (po - pe) / (1 - pe);
}

function pctAgreement(a, b) {
  if (a.length !== b.length || !a.length) return null;
  let agree = 0;
  for (let i = 0; i < a.length; i++) if (a[i] === b[i]) agree++;
  return agree / a.length;
}

function round(v, d) { const f = Math.pow(10, d); return Math.round(v * f) / f; }

async function computePassRates(examId) {
  const attempts = await Attempt.find({ examId, completedAt: { $ne: null } })
    .select('externalId score domainBreakdown responses mode completedAt')
    .lean();

  if (!attempts.length) return null;

  const scores = attempts.map((a) => a.score).filter((s) => s != null);
  const mean = scores.length ? scores.reduce((a, b) => a + b, 0) / scores.length : 0;
  const sorted = scores.slice().sort((a, b) => a - b);
  const median = sorted.length ? sorted[Math.floor(sorted.length / 2)] : 0;
  const passThreshold = 70;
  const passing = scores.filter((s) => s >= passThreshold).length;

  const byCase = {};
  attempts.forEach((a) => {
    const id = a.externalId || 'unknown';
    if (!byCase[id]) byCase[id] = { attempts: 0, scores: [], domainScores: {} };
    byCase[id].attempts++;
    if (a.score != null) byCase[id].scores.push(a.score);
    if (a.domainBreakdown) {
      for (const [dom, pct] of Object.entries(a.domainBreakdown)) {
        if (!byCase[id].domainScores[dom]) byCase[id].domainScores[dom] = [];
        byCase[id].domainScores[dom].push(Number(pct));
      }
    }
  });

  const domainAll = {};
  attempts.forEach((a) => {
    if (!a.domainBreakdown) return;
    for (const [dom, pct] of Object.entries(a.domainBreakdown)) {
      if (!domainAll[dom]) domainAll[dom] = [];
      domainAll[dom].push(Number(pct));
    }
  });

  const questionStats = {};
  attempts.forEach((a) => {
    (a.responses || []).forEach((r) => {
      const qid = (a.externalId || '') + '|' + (r.questionId || '');
      if (!questionStats[qid]) questionStats[qid] = { correct: 0, total: 0, weights: [] };
      questionStats[qid].total++;
      if (r.correct) questionStats[qid].correct++;
      if (r.weight != null) questionStats[qid].weights.push(r.weight);
    });
  });

  const attemptQMap = {};
  attempts.forEach((a) => {
    if (a.score == null) return;
    (a.responses || []).forEach((r) => {
      const qid = (a.externalId || '') + '|' + (r.questionId || '');
      if (!attemptQMap[qid]) attemptQMap[qid] = [];
      attemptQMap[qid].push({ correct: r.correct ? 1 : 0, score: a.score });
    });
  });

  const discrimination = [];
  for (const [qid, pairs] of Object.entries(attemptQMap)) {
    if (pairs.length < 5) continue;
    const n = pairs.length;
    const sx = pairs.reduce((s, p) => s + p.correct, 0);
    const sy = pairs.reduce((s, p) => s + p.score, 0);
    const sxx = pairs.reduce((s, p) => s + p.correct * p.correct, 0);
    const syy = pairs.reduce((s, p) => s + p.score * p.score, 0);
    const sxy = pairs.reduce((s, p) => s + p.correct * p.score, 0);
    const denom = Math.sqrt((n * sxx - sx * sx) * (n * syy - sy * sy));
    const rpb = denom > 0 ? (n * sxy - sx * sy) / denom : 0;
    const pValue = sx / n;
    discrimination.push({ qid, rpb: round(rpb, 3), pValue: round(pValue, 2), n });
  }
  discrimination.sort((a, b) => a.rpb - b.rpb);

  const questionOptionMap = {};
  attempts.forEach((a) => {
    (a.responses || []).forEach((r) => {
      const qid = (a.externalId || '') + '|' + (r.questionId || '');
      if (!questionOptionMap[qid]) questionOptionMap[qid] = {};
      const opt = r.selectedOptionId || 'none';
      questionOptionMap[qid][opt] = (questionOptionMap[qid][opt] || 0) + 1;
    });
  });

  const distractorAnalysis = [];
  for (const [qid, opts] of Object.entries(questionOptionMap)) {
    const total = Object.values(opts).reduce((a, b) => a + b, 0);
    if (total < 5) continue;
    const expectedOpts = ['a', 'b', 'c', 'd'];
    const deadOptions = expectedOpts.filter((o) => !opts[o] || opts[o] === 0);
    distractorAnalysis.push({ qid, n: total, optionFreq: opts, deadDistractors: deadOptions.length, deadOptions });
  }

  let cronbachAlpha = null, alphaItemCount = 0, alphaAttemptCount = 0;
  if (attempts.length >= 10) {
    const attemptItems = {};
    const allItems = new Set();
    attempts.forEach((a, ai) => {
      if (a.score == null) return;
      attemptItems[ai] = {};
      (a.responses || []).forEach((r) => {
        const qid = (a.externalId || '') + '|' + (r.questionId || '');
        attemptItems[ai][qid] = r.correct ? 1 : 0;
        allItems.add(qid);
      });
    });
    const itemList = [...allItems];
    const validAttempts = Object.keys(attemptItems).filter((ai) => {
      const answered = itemList.filter((q) => attemptItems[ai][q] != null).length;
      return answered >= 5;
    });
    if (validAttempts.length >= 10 && itemList.length >= 5) {
      const k = itemList.length;
      const n = validAttempts.length;
      let sumItemVar = 0;
      itemList.forEach((q) => {
        const vals = validAttempts.map((ai) => attemptItems[ai][q] || 0);
        const m = vals.reduce((a, b) => a + b, 0) / n;
        const v = vals.reduce((s, x) => s + (x - m) * (x - m), 0) / n;
        sumItemVar += v;
      });
      const totals = validAttempts.map((ai) => itemList.reduce((s, q) => s + (attemptItems[ai][q] || 0), 0));
      const totalMean = totals.reduce((a, b) => a + b, 0) / n;
      const totalVar = totals.reduce((s, x) => s + (x - totalMean) * (x - totalMean), 0) / n;
      if (totalVar > 0) {
        cronbachAlpha = round((k / (k - 1)) * (1 - sumItemVar / totalVar), 3);
      }
      alphaItemCount = k;
      alphaAttemptCount = n;
    }
  }

  let distribution = null;
  if (scores.length >= 5) {
    const n = scores.length;
    const sd = Math.sqrt(scores.reduce((s, x) => s + (x - mean) * (x - mean), 0) / n);
    const skew = sd > 0 ? scores.reduce((s, x) => s + Math.pow((x - mean) / sd, 3), 0) / n : 0;
    const bins = [];
    for (let lo = 0; lo < 100; lo += 10) {
      const hi = lo + 10;
      const count = scores.filter((s) => s >= lo && (hi === 100 ? s <= hi : s < hi)).length;
      bins.push({ label: lo + '-' + hi + '%', count });
    }
    distribution = { n, mean: round(mean, 1), sd: round(sd, 1), skew: round(skew, 2), bins };
  }

  return {
    totalAttempts: attempts.length,
    uniqueCases: Object.keys(byCase).length,
    scores: { mean: round(mean, 1), median: round(median, 1), min: sorted[0], max: sorted[sorted.length - 1] },
    passRate: scores.length ? round((passing / scores.length) * 100, 1) : null,
    passingCount: passing,
    passThreshold,
    byCase,
    domainAll,
    questionStats,
    discrimination,
    distractorAnalysis,
    cronbachAlpha,
    alphaItemCount,
    alphaAttemptCount,
    distribution,
  };
}

async function computeIrr(examId) {
  const result = { reviewerAgreement: null, userResponseConsistency: null, interUserAgreement: null };

  let readReviewSheet;
  try { readReviewSheet = require('../tools/cases/reviewRoundTrip').readReviewSheet; } catch (_) {}

  if (readReviewSheet) {
    const batches = await ReviewBatch.find({ reviewCsv: { $ne: null } }).select('name reviewCsv').lean();
    if (batches.length >= 2) {
      const reviewerDecisions = [];
      batches.forEach((b) => {
        try {
          const decisions = readReviewSheet(b.reviewCsv);
          const entries = {};
          for (const [key, d] of Object.entries(decisions)) {
            entries[key] = d.rejected ? 0 : 1;
          }
          if (Object.keys(entries).length) reviewerDecisions.push({ name: b.name, entries });
        } catch (_) {}
      });

      if (reviewerDecisions.length >= 2) {
        const pairResults = [];
        for (let i = 0; i < reviewerDecisions.length; i++) {
          for (let j = i + 1; j < reviewerDecisions.length; j++) {
            const a = reviewerDecisions[i], b = reviewerDecisions[j];
            const commonKeys = Object.keys(a.entries).filter((k) => k in b.entries);
            if (commonKeys.length >= 5) {
              const va = commonKeys.map((k) => a.entries[k]);
              const vb = commonKeys.map((k) => b.entries[k]);
              pairResults.push({
                raterA: a.name, raterB: b.name, n: commonKeys.length,
                kappa: round(cohensKappa(va, vb), 3),
                pctAgree: round(pctAgreement(va, vb) * 100, 1),
              });
            }
          }
        }
        if (pairResults.length) result.reviewerAgreement = pairResults;
      }
    }
  }

  const attempts = await Attempt.find({ examId, completedAt: { $ne: null } })
    .select('userId externalId responses')
    .lean();

  const userQMap = {};
  attempts.forEach((a) => {
    (a.responses || []).forEach((r) => {
      const key = String(a.userId) + '|' + (a.externalId || '') + '|' + (r.questionId || '');
      if (!userQMap[key]) userQMap[key] = [];
      userQMap[key].push(r.selectedOptionId);
    });
  });

  const retestPairs = Object.values(userQMap).filter((arr) => arr.length >= 2);
  if (retestPairs.length >= 10) {
    let consistent = 0;
    retestPairs.forEach((arr) => { if (arr[0] === arr[arr.length - 1]) consistent++; });
    result.userResponseConsistency = {
      pairs: retestPairs.length,
      consistent,
      rate: round(consistent / retestPairs.length * 100, 1),
    };
  }

  const questionResponses = {};
  attempts.forEach((a) => {
    (a.responses || []).forEach((r) => {
      const qKey = (a.externalId || '') + '|' + (r.questionId || '');
      if (!questionResponses[qKey]) questionResponses[qKey] = [];
      questionResponses[qKey].push(r.selectedOptionId);
    });
  });

  const interUser = [];
  for (const [qKey, resps] of Object.entries(questionResponses)) {
    if (resps.length < 5) continue;
    const freq = {};
    resps.forEach((r) => { freq[r] = (freq[r] || 0) + 1; });
    const modal = Math.max(...Object.values(freq));
    interUser.push({ qKey, n: resps.length, modalPct: modal / resps.length });
  }
  if (interUser.length >= 10) {
    const avgModal = interUser.reduce((s, i) => s + i.modalPct, 0) / interUser.length;
    result.interUserAgreement = {
      items: interUser.length,
      avgModalPct: round(avgModal * 100, 1),
      highAgreement: interUser.filter((i) => i.modalPct >= 0.8).length,
      lowAgreement: interUser.filter((i) => i.modalPct < 0.5).length,
    };
  }

  return result;
}

module.exports = {
  DOMAIN_LABELS,
  cohensKappa,
  pctAgreement,
  computePassRates,
  computeIrr,
};
