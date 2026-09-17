// ============================================================================
// bankSchema.js — the canonical shape of a STATIC question-bank item, and the
// two quality profiles the banks are held to.
//
// The deep-case bank (tools/cases/, models/ContentItem) is governed by
// tools/cases/qualityGate.js + the Priority Ladder in tools/cases/validity-check.js.
// The static banks served straight to the browser as globals
// (public/*-data.js) had no equivalent: they arrived in three different shapes,
// scored 1/0, and never met a gate. This module is their single source of truth.
//
// TWO PROFILES — the harm gradient is not universal
// ------------------------------------------------
// 'decision'  Items that ask what a clinician does NEXT (next-best-step,
//             what-to-assess-next). The full standard applies: the {3,0,-1,-2}
//             weight gradient, a Priority Ladder rung, and a named commonMistake
//             on every distractor. Scored with partial credit.
//
// 'recall'    Items that ask what something IS (theory identification, pioneers,
//             criteria, microskill naming). A clinical-harm gradient is
//             meaningless here — there is no harm in misnaming Beck's triad, and
//             tiering such options produces arbitrary weights that corrupt the
//             score. The STRUCTURAL half of the standard still applies in full:
//             length parity, key-not-longest, no absolutes, category homogeneity,
//             and a per-option rationale saying why each wrong option is wrong.
//             Scored 1/0.
//
// Both profiles carry a blueprint `domain` so every bank rolls up into the same
// five NCMHCE domains the readiness model uses (client/src/lib/readiness.js).
// ============================================================================

// NBCC NCMHCE content outline domains — must match client/src/lib/readiness.js.
const BLUEPRINT_DOMAINS = ['counseling', 'intake', 'treatment', 'ethics', 'core'];

// Priority Ladder (tools/cases/validity-check.js FRAMEWORK). A decision item
// tests exactly one rung: the highest-priority need the vignette actually raises.
const RUNGS = {
  1: 'Imminent safety — suicidality, homicidality, abuse, danger. Nothing else happens first.',
  2: 'Medical/substance rule-outs — organic causes? substances? Rule out before diagnosing.',
  3: 'Stabilization — acute symptom relief, grounding, crisis reduction.',
  4: 'Alliance and validation — client must feel heard before any intervention.',
  5: 'Clarify the picture — assessment, history, collateral info.',
  6: 'Evidence-based treatment — right modality for the right diagnosis.',
  7: 'Ethics throughout — confidentiality, mandated reporting, competence.',
};

const WEIGHTS = {
  3: 'Key — correct action for the highest-priority rung the vignette raises.',
  0: 'Near-miss — right domain, wrong timing, sequencing, or priority.',
  '-1': 'Common novice error — a coherent but wrong framework applied competently.',
  '-2': 'Harmful error — scope violation, abandonment, safety miss, criterion reversal.',
};

// ── Scoring ──────────────────────────────────────────────────────────────────
// A decision item is scored on the gradient: the raw weight, and a normalized
// 0..1 credit so a drill can report a percentage alongside a raw total.
// -1 and -2 both floor at 0 credit; a near-miss earns partial credit.
const CREDIT = { 3: 1, 0: 0.5, '-1': 0, '-2': 0 };

function scoreItem(item, chosen) {
  if (!item || !chosen) return { weight: 0, credit: 0, correct: false };
  if (item.profile === 'decision') {
    const w = typeof chosen.weight === 'number' ? chosen.weight : (chosen.ok ? 3 : -1);
    return { weight: w, credit: CREDIT[String(w)] || 0, correct: w === 3 };
  }
  const correct = !!(chosen.isCorrect || chosen.ok);
  return { weight: correct ? 1 : 0, credit: correct ? 1 : 0, correct };
}

// Best and worst obtainable weight on an item — the denominator a drill needs to
// turn a run of gradient items into a percentage.
function itemRange(item) {
  if (!item || item.profile !== 'decision') return { max: 1, min: 0 };
  const ws = (item.options || []).map((o) => (typeof o.weight === 'number' ? o.weight : 0));
  return { max: Math.max(...ws), min: Math.min(...ws) };
}

// Sum a run of answers into a report both drill types can render.
function scoreRun(entries) {
  let credit = 0; let possible = 0; let raw = 0; let correct = 0;
  entries.forEach(({ item, chosen }) => {
    const s = scoreItem(item, chosen);
    credit += s.credit; possible += 1; raw += s.weight;
    if (s.correct) correct++;
  });
  return {
    correct,
    total: possible,
    raw,
    credit,
    pct: possible ? Math.round((credit / possible) * 100) : 0,
    exact: possible ? Math.round((correct / possible) * 100) : 0,
  };
}

// ── Option text accessor ─────────────────────────────────────────────────────
// Decision banks carry option text on `t`, recall banks on `text`. Every check
// and every renderer goes through this so neither shape has to be special-cased.
const optText = (o) => String((o && (o.t != null ? o.t : o.text)) || '');
const optIsKey = (o) => !!(o && (o.ok === true || o.isCorrect === true || o.weight === 3));
const itemStem = (i) => String((i && (i.scenario != null ? i.scenario : i.question)) || '');

module.exports = {
  BLUEPRINT_DOMAINS, RUNGS, WEIGHTS, CREDIT,
  scoreItem, scoreRun, itemRange,
  optText, optIsKey, itemStem,
};
