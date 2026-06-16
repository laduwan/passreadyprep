// ============================================================================
// caseSchema.js — Canonical NCMHCE case schema + validator
// NCMHCE Prep Platform | GA Integrated Therapeutic Perspectives LLC
//
// DUAL-MODE SUPERSET: every case carries both the classic shape (hidden dx,
// differentialOptions) AND the 2022+ new-format shape (diagnosis given, rich
// per-option explanation). This lets one case render in either mode and fold
// in with the existing corpus (cases 1-70) with no converter.
//
// Shape:
// {
//   id:        'ncmhce-G031'              // stable, collision-free id
//   title:     'short clinical title'
//   category:  'Mood'                     // must be a blueprint category
//   difficulty:'easy' | 'medium' | 'hard'
//   primaryDiagnosis: { name, code }      // DSM-5 name + ICD-10 code
//   diagnosis:        { name, code }      // alias — the "given" dx (new format)
//   differentialOptions: [ {id,name,isCorrect} ]   // classic mode (3-4, exactly 1 correct)
//   narrative:  { intake, session1, session2 }      // unfolding case
//   diagnosticRationale: '...'            // why this dx, what it is not
//   questions: [
//     { id:'q1', domain:'treatment'|'counseling'|'intake'|'ethics'|'core',
//       question:'...',
//       options: [
//         { id:'a', text:'...', isCorrect:bool, weight: 3|0|-1|-2,
//           rationale:'one-line (classic renderer)',
//           explanation:{ approach, rationale, keyIndicators:[...], commonMistake } }
//       ] }   // 4 options, exactly 1 correct (weight 3)
//   ]
// }
// ============================================================================

const DOMAINS = ['treatment', 'counseling', 'intake', 'ethics', 'core'];
const DIFFICULTIES = ['easy', 'medium', 'hard'];
const ICD10 = /^[A-Z]\d{1,2}(\.[A-Z0-9]{1,4})?$/; // loose DSM-5/ICD-10 code check

function isNonEmptyStr(s, min = 1) {
  return typeof s === 'string' && s.trim().length >= min;
}

// Validate a single case. Returns { ok, errors:[], warnings:[] }.
function validateCase(c, opts = {}) {
  const e = [];
  const w = [];
  const tag = (c && c.id) || (c && c.title) || '<unknown>';
  const pre = `[${tag}] `;

  if (!c || typeof c !== 'object') return { ok: false, errors: ['case is not an object'], warnings: [] };

  // --- identity / meta ---
  if (!isNonEmptyStr(c.id)) e.push(pre + 'missing id');
  if (!isNonEmptyStr(c.title, 4)) e.push(pre + 'missing/short title');
  if (!isNonEmptyStr(c.category)) e.push(pre + 'missing category');
  else if (opts.categories && !opts.categories.includes(c.category)) {
    w.push(pre + `category "${c.category}" not in blueprint`);
  }
  if (!DIFFICULTIES.includes(c.difficulty)) e.push(pre + `difficulty must be one of ${DIFFICULTIES.join('/')}`);

  // --- diagnosis (both fields, for dual mode) ---
  for (const f of ['primaryDiagnosis', 'diagnosis']) {
    const d = c[f];
    if (!d || typeof d !== 'object') { e.push(pre + `missing ${f} {name,code}`); continue; }
    if (!isNonEmptyStr(d.name)) e.push(pre + `${f}.name missing`);
    if (!isNonEmptyStr(d.code)) e.push(pre + `${f}.code missing`);
    else if (!ICD10.test(d.code.trim())) w.push(pre + `${f}.code "${d.code}" not ICD-10 shaped`);
  }
  if (c.primaryDiagnosis && c.diagnosis && c.primaryDiagnosis.name !== c.diagnosis.name) {
    w.push(pre + 'primaryDiagnosis.name and diagnosis.name differ (dual-mode usually identical)');
  }

  // --- differentialOptions (classic mode) ---
  if (!Array.isArray(c.differentialOptions) || c.differentialOptions.length < 3) {
    e.push(pre + 'differentialOptions must have 3+ entries');
  } else {
    const correct = c.differentialOptions.filter((o) => o && o.isCorrect);
    if (correct.length !== 1) e.push(pre + `differentialOptions needs exactly 1 isCorrect (has ${correct.length})`);
    if (correct[0] && c.diagnosis && correct[0].name && c.diagnosis.name &&
        !correct[0].name.toLowerCase().includes(c.diagnosis.name.split(',')[0].toLowerCase().slice(0, 12))) {
      w.push(pre + 'correct differential may not match given diagnosis');
    }
    c.differentialOptions.forEach((o, i) => {
      if (!isNonEmptyStr(o && o.id)) e.push(pre + `differentialOptions[${i}].id missing`);
      if (!isNonEmptyStr(o && o.name)) e.push(pre + `differentialOptions[${i}].name missing`);
    });
  }

  // --- narrative ---
  const n = c.narrative;
  if (!n || typeof n !== 'object') e.push(pre + 'missing narrative {intake,session1,session2}');
  else {
    for (const seg of ['intake', 'session1', 'session2']) {
      if (!isNonEmptyStr(n[seg], 40)) e.push(pre + `narrative.${seg} missing or too short (<40 chars)`);
    }
  }
  if (!isNonEmptyStr(c.diagnosticRationale, 40)) e.push(pre + 'diagnosticRationale missing/short');

  // --- references (documentary evidence) ---
  const refIds = new Set();
  if (!Array.isArray(c.references) || c.references.length < 1) {
    e.push(pre + 'missing references[] (at least one governing source)');
  } else {
    c.references.forEach((r, i) => {
      if (!isNonEmptyStr(r && r.id)) e.push(pre + `references[${i}].id missing`);
      else if (refIds.has(r.id)) e.push(pre + `duplicate reference id ${r.id}`); else refIds.add(r.id);
      if (!isNonEmptyStr(r && r.source)) e.push(pre + `references[${i}].source missing`);
      else if (opts.allowedSources && !opts.allowedSources.includes(r.source)) {
        w.push(pre + `references[${i}].source "${r.source}" not in the approved library`);
      }
      if (!isNonEmptyStr(r && r.detail, 6)) e.push(pre + `references[${i}].detail missing (cite the specific criterion/recommendation)`);
    });
  }

  // --- questions ---
  if (!Array.isArray(c.questions) || c.questions.length < 4) {
    e.push(pre + 'questions must have 4+ entries');
  } else {
    const qids = new Set();
    c.questions.forEach((q, qi) => {
      const qp = pre + `q[${qi}] `;
      if (!isNonEmptyStr(q && q.id)) e.push(qp + 'missing id');
      else if (qids.has(q.id)) e.push(qp + `duplicate question id ${q.id}`); else qids.add(q.id);
      if (!DOMAINS.includes(q && q.domain)) e.push(qp + `domain must be one of ${DOMAINS.join('/')}`);
      if (!isNonEmptyStr(q && q.question, 12)) e.push(qp + 'missing/short question text');
      if (!Array.isArray(q && q.evidenceRef) || q.evidenceRef.length < 1) {
        e.push(qp + 'missing evidenceRef[] (reference id(s) justifying the keyed answer)');
      } else if (refIds.size > 0) {
        q.evidenceRef.forEach((rid) => { if (!refIds.has(rid)) e.push(qp + `evidenceRef "${rid}" not a case reference id`); });
      }

      if (!Array.isArray(q && q.options) || q.options.length !== 4) {
        e.push(qp + `must have exactly 4 options (has ${q && q.options ? q.options.length : 0})`);
        return;
      }
      const correct = q.options.filter((o) => o && o.isCorrect);
      if (correct.length !== 1) e.push(qp + `exactly 1 correct option required (has ${correct.length})`);
      const oids = new Set();
      q.options.forEach((o, oi) => {
        const op = qp + `opt[${oi}] `;
        if (!isNonEmptyStr(o && o.id)) e.push(op + 'missing id');
        else if (oids.has(o.id)) e.push(op + 'duplicate option id'); else oids.add(o.id);
        if (!isNonEmptyStr(o && o.text)) e.push(op + 'missing text');
        if (typeof (o && o.isCorrect) !== 'boolean') e.push(op + 'isCorrect must be boolean');
        if (![3, 0, -1, -2].includes(o && o.weight)) e.push(op + `weight must be 3/0/-1/-2 (got ${o && o.weight})`);
        if (o && o.isCorrect && o.weight !== 3) e.push(op + 'correct option must have weight 3');
        if (o && !o.isCorrect && o.weight === 3) e.push(op + 'incorrect option must not have weight 3');
        if (!isNonEmptyStr(o && o.rationale, 8)) e.push(op + 'missing rationale (classic renderer)');
        // new-format explanation
        const ex = o && o.explanation;
        if (!ex || typeof ex !== 'object') { e.push(op + 'missing explanation {approach,rationale,keyIndicators,commonMistake}'); }
        else {
          if (!isNonEmptyStr(ex.approach, 8)) e.push(op + 'explanation.approach missing');
          if (!isNonEmptyStr(ex.rationale, 8)) e.push(op + 'explanation.rationale missing');
          if (!Array.isArray(ex.keyIndicators) || ex.keyIndicators.length < 1) e.push(op + 'explanation.keyIndicators needs 1+');
          if (!isNonEmptyStr(ex.commonMistake, 8)) e.push(op + 'explanation.commonMistake missing');
        }
      });

      // --- item quality: option-length balance (test-wiseness guard) ---
      // The keyed answer must not be detectable by length. Flags items where the
      // correct option is the longest/most elaborated while distractors are thin.
      if (correct.length === 1 && correct[0] && typeof correct[0].text === 'string') {
        const correctLen = correct[0].text.length;
        const dLens = q.options.filter((o) => o && !o.isCorrect).map((o) => (o.text || '').length);
        if (dLens.length) {
          const maxD = Math.max(...dLens);
          const meanD = dLens.reduce((a, b) => a + b, 0) / dLens.length;
          const tell =
            (correctLen > maxD && correctLen >= meanD * 1.25)
              ? qp + 'correct answer is the longest option (length cue — match distractor length/specificity)'
              : (meanD > 0 && correctLen > meanD * 1.6)
                ? qp + 'correct answer much longer than distractors (length cue)'
                : null;
          if (tell) (opts.strictItemQuality ? e : w).push(tell);
        }
      }
    });
  }

  return { ok: e.length === 0, errors: e, warnings: w };
}

// Validate an array of cases: per-case + cross-case (unique ids, dedup by dx+title).
function validateCaseSet(cases, opts = {}) {
  const errors = [];
  const warnings = [];
  const ids = new Set();
  const dxTitle = new Set();
  cases.forEach((c) => {
    const r = validateCase(c, opts);
    errors.push(...r.errors);
    warnings.push(...r.warnings);
    if (c && c.id) {
      if (ids.has(c.id)) errors.push(`duplicate case id across set: ${c.id}`);
      ids.add(c.id);
    }
    const key = ((c && c.diagnosis && c.diagnosis.name) || '') + '::' + ((c && c.title) || '');
    if (key !== '::') {
      if (dxTitle.has(key)) warnings.push(`possible duplicate case (same dx+title): ${key}`);
      dxTitle.add(key);
    }
  });
  return { ok: errors.length === 0, count: cases.length, errors, warnings };
}

module.exports = { validateCase, validateCaseSet, DOMAINS, DIFFICULTIES };
