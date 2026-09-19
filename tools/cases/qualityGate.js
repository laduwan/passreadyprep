// ============================================================================
// qualityGate.js — gold-standard ITEM QUALITY checks (weight gradient,
// structural parity, absolutes, novice-trap depth).
//
// Single source of truth for the checks generate-deep.js runs on a freshly
// generated case before import, and that audit-quality.js / fix-distractors.js
// run against cases already LIVE in MongoDB. Pure functions — no DB, no API.
// ============================================================================

const ABSOLUTES = /\b(always|never|absolutely|categorically|universally)\b/i;

// ============================================================================
// Truncation detection
// ============================================================================
// A truncation is a string that cannot terminate a clause.
//
// The previous check used a 52-word stopword list. A 19 Sep 2026 audit over all
// 13,740 options found it flagged 53, of which 45 (85%) were complete English:
//   on:14      "…from now on", "…the people she depends on"
//   about:6    "…nothing to worry about", "…the goals she cares about"
//   then:6     "…happen to her right then", "…resolving before then"
//   with:4     "…the trauma he presents with"
//   for:4      "…what she is asking for"
//   through/upon/in/of/include/when:11  "…must be acted upon", "…afraid of"
// Worse, fix-distractors then rewrote those valid options to satisfy the false
// positive, and the rewrite — a length-constrained model call — is what
// introduced real cuts. The check was manufacturing its own signal.
//
// A real cut has one of three signatures, all high-precision:
//   1. Ends on a determiner with no following noun ("…decline in a").
//   2. Ends on dangling punctuation (",", ";", "—", "/", etc.).
//   3. Has an unclosed bracket or quote.
// Nothing else. Prepositions, particles and adverbs are acceptable final words.
//
// NOTE ON `of`: it has genuine stranding use and both instances in the audit
// were stranded ("…they will likely grow out of", "…the thing she is afraid
// of"), so it is deliberately absent. If a later audit shows `of` as common cut
// residue, add it here and re-check the sample first.
//
// NOTE ON conjunctions: `and`, `or`, `than`, `such`, `based`, `whether`,
// `which` cannot end a clause either, but the audit found ZERO of them in the
// bank — adding them would be speculation. `include` looked like a safe
// addition and was not: "…which unipolar depression does not include" is a
// complete relative clause. Re-measure before extending this rule.
const DETERMINER_TAIL = /\b(a|an|the)\s*$/i;

// Kept exported so existing importers do not crash. NO LONGER USED in
// validation — it is the false-positive engine described above.
const TAIL_STOPWORDS = [
  'a', 'an', 'the', 'and', 'or', 'but', 'nor', 'for', 'of', 'in', 'on', 'at',
  'by', 'with', 'without', 'from', 'as', 'into', 'onto', 'about', 'after',
  'during', 'through', 'toward', 'towards', 'upon', 'which', 'who', 'whom',
  'whose', 'when', 'while', 'where', 'if', 'whether', 'because', 'since',
  'unless', 'until', 'based', 'due', 'such', 'including', 'include', 'includes',
  'regarding', 'concerning', 'per', 'via', 'than', 'then', 'so',
];

// Left as an export for backward compatibility; no longer used in checks.
const TRUNCATED_TAIL = new RegExp(
  `(?:^|\\s)(?:${TAIL_STOPWORDS.join('|')})\\s*$`,
  'i',
);

// Cut immediately after punctuation that cannot end a clause.
const DANGLING_PUNCT = /[,;:\-–—/&+]\s*$/;

// Opened and never closed — the other signature of a mid-string cut.
function isUnbalanced(s) {
  const t = String(s || '');
  const pairs = [['(', ')'], ['[', ']'], ['{', '}']];
  for (const [o, c] of pairs) {
    if (t.split(o).length !== t.split(c).length) return true;
  }
  if ((t.match(/"/g) || []).length % 2 !== 0) return true;
  if ((t.match(/“/g) || []).length !== (t.match(/”/g) || []).length) return true;
  return false;
}

// Returns null when the text is fine, else { kind: 'hard', reason }.
// Every hit is a real defect — there is no soft category any more.
//
// IF YOU ADD A REASON STRING HERE, update classifyReason below so it still
// buckets as 'truncated'. Otherwise `--reasons truncated` silently misses it.
//
// The 'empty' branch is unreachable from checkQuestionQuality (which returns on
// falsy text first); it exists for mergeRewrite, which can pass ''.
function checkTruncation(text) {
  const t = String(text || '').trim();
  if (!t) return { kind: 'hard', reason: 'empty' };
  if (DETERMINER_TAIL.test(t)) return { kind: 'hard', reason: 'ends on determiner with no noun' };
  if (DANGLING_PUNCT.test(t)) return { kind: 'hard', reason: 'dangling punctuation' };
  if (isUnbalanced(t)) return { kind: 'hard', reason: 'unbalanced bracket or quote' };
  return null;
}

// Prose form of the checks below, for prompting a model to write (or rewrite)
// options that will actually pass them. Shared by generate-deep.js (whole
// cases) and fix-distractors.js (single questions) so the rules quoted to the
// model never drift from the rules enforced in code.
const ITEM_CONSTRUCTION_RULES = `
ITEM CONSTRUCTION RULES (non-negotiable — the validator will reject violations):

WEIGHT GRADIENT — every question has exactly 4 options scored on a clinical-harm gradient:
  weight 3  → The one correct answer. Evidence-based, ethically sound, clinically optimal.
  weight 0  → Near-miss. Clinically justifiable but less effective. A student who picks this
               knows the diagnosis but not the optimal approach. NOT penalized.
  weight -1 → Common novice error. Plausible mistake an unprepared intern would make.
               Wrong, but understandable. Mild penalty.
  weight -2 → Harmful error. Dangerous, unethical, or based on fundamentally wrong reasoning.
               A student who picks this missed a critical safety, ethics, or diagnostic concept.
               Heavy penalty.
  Every question MUST have exactly one of each weight: 3, 0, -1, -2.

STRUCTURAL PARITY — all 4 options in every question MUST be:
  • Close in character length: the longest option may be at most 25% longer than the
    shortest (max/min length ratio <= 1.25). If the shortest option is 100 chars, the
    longest must be 125 or fewer. Count characters before finalizing each question.
  • Same grammatical structure (all start the same way, all complete sentences or all phrases).
  • Same level of clinical jargon and specificity.
  • The correct answer must NOT be the longest option. If it is, REWRITE it more concisely
    or lengthen a distractor. Never truncate: every option must be a grammatically complete
    phrase or sentence.
  • An option must NOT end on a determiner ("a", "an", "the") with no following noun, on
    dangling punctuation ("," ";" "—" "/" etc.), or with an unclosed bracket or quote.
    Those are the signatures of a cut string and will be rejected.
    Stranded prepositions and adverbial endings are FINE: "from now on", "acted upon",
    "carry her through", "right then", and "the goals she cares about" are all complete
    English and pass. Do not rephrase a complete clause just to avoid ending on a
    preposition — that produces worse items, not better ones.
  • No option may use absolutes: "always", "never", "absolutely", "categorically", "universally".
  • Vary which option holds the correct answer. Across the questions in a case, the key
    must appear in all four positions, and must not sit in any single position for more
    than half the questions. Do not default to the second option.

NOVICE TRAP DESIGN — every distractor (weight 0, -1, -2) MUST target a specific cognitive error:
  • The "commonMistake" field must name the exact reasoning flaw a student would use to pick it.
  • Weight 0: the student knows the diagnosis but confuses optimal timing, sequencing, or priority.
  • Weight -1: the student applies a wrong framework (e.g., uses an anxiety protocol for depression).
  • Weight -2: the student makes a dangerous error (scope violation, client abandonment, criterion reversal).
  All 3 distractors must be clinically plausible — a real clinician might consider each one.
  No joke answers, no absurd options, no obviously wrong choices.

CATEGORY HOMOGENEITY — if the correct answer is an action, all distractors are actions.
  If it is a diagnosis, all are diagnoses. If it is a clinical rationale, all are rationales.
  All 4 options must belong to the same logical category.`;

const STRUCTURAL_PARITY_CHECK = `
BEFORE OUTPUTTING: For each question, verify:
1. Count the character length of each option's "text" field.
2. Compute max/min ratio. If ratio > 1.25, rewrite until it is 1.25 or lower.
3. Confirm the correct answer (weight 3) is NOT the longest option.
4. Confirm weights are exactly {3, 0, -1, -2} with one of each.
5. Confirm no option text contains "always", "never", "absolutely", "categorically", "universally".
6. Confirm no option ends on a determiner ("a", "an", "the") with no following noun.
   A stranded preposition ("from now on") or an adverbial ending ("right then") is
   complete English and passes — do NOT rewrite those.
7. Confirm no option ends on a comma, dash, or an unclosed quote or bracket.
8. List which option position holds the key for each question. If any position holds more
   than half, or if any of the four is never used, reassign before outputting.
If any check fails, fix it before outputting.`;

// Check one question's 4 options. Returns string[] of error messages (empty = clean).
function checkQuestionQuality(q, tag) {
  const errors = [];
  const opts = (q && q.options) || [];
  const qp = tag ? `${tag}: ` : '';

  const weights = opts.map((o) => o && o.weight).sort((a, b) => b - a);
  if (weights.join(',') !== '3,0,-1,-2') {
    errors.push(qp + `weights [${weights}] must be exactly [3,0,-1,-2]`);
  }

  const lens = opts.map((o) => ((o && o.text) || '').length);
  if (lens.some((l) => l === 0)) {
    errors.push(qp + 'empty option text');
  } else {
    const ratio = Math.max(...lens) / Math.min(...lens);
    if (ratio > 1.25) {
      errors.push(qp + `length ratio ${ratio.toFixed(2)} exceeds 1.25 (${lens.join(',')})`);
    }
  }

  const ci = opts.findIndex((o) => o && o.isCorrect);
  if (ci >= 0 && lens[ci] === Math.max(...lens) && lens[ci] > Math.min(...lens) * 1.1) {
    errors.push(qp + 'correct answer is the longest option');
  }

  opts.forEach((o) => {
    if (o && !o.isCorrect && ABSOLUTES.test(o.text || '')) {
      errors.push(qp + `opt ${o.id}: contains absolute language`);
    }
  });

  opts.forEach((o) => {
    if (o && !o.isCorrect && (!o.explanation || !o.explanation.commonMistake || o.explanation.commonMistake.length < 15)) {
      errors.push(qp + `opt ${o.id}: commonMistake missing or too short`);
    }
  });

  opts.forEach((o) => {
    const text = (o && o.text) || '';
    if (!text) return; // already reported as empty above
    const trunc = checkTruncation(text);
    if (trunc) {
      errors.push(qp + `opt ${o.id}: truncated — ${trunc.reason} ("…${text.slice(-40)}")`);
    }
  });

  return errors;
}

// Bucket a gate message for summaries (audit-quality --summary, fix-distractors plan).
function classifyReason(msg) {
  if (/weights \[/.test(msg)) return 'weights';
  if (/longest option/.test(msg)) return 'key-longest';
  if (/length ratio/.test(msg)) return 'ratio';
  if (/absolute language/.test(msg)) return 'absolutes';
  if (/commonMistake/.test(msg)) return 'mistake';
  if (/empty option/.test(msg)) return 'empty';
  // Keep in sync with the reason strings in checkTruncation.
  if (/truncated|unbalanced quote|ends on determiner/.test(msg)) return 'truncated';
  if (/key in slot|key uses only/.test(msg)) return 'key-position';
  return 'other';
}

// Check every question in a case. Returns { ok, errors }.
function checkCaseQuality(c) {
  const errors = [];
  const tag = c.id || c.title || '<unknown>';
  const qs = c.questions || [];

  for (let qi = 0; qi < qs.length; qi++) {
    errors.push(...checkQuestionQuality(qs[qi], `[${tag}] q${qi + 1}`));
  }

  // Key position must not cluster. Nothing else in the pipeline enforces this.
  if (qs.length >= 4) {
    const slots = qs.map((q) => ((q && q.options) || []).findIndex((o) => o && o.isCorrect));
    const counts = [0, 0, 0, 0];
    slots.forEach((s) => { if (s >= 0 && s < 4) counts[s]++; });

    const maxAllowed = Math.max(2, Math.ceil(qs.length * 0.5));
    counts.forEach((n, slot) => {
      if (n > maxAllowed) {
        errors.push(`[${tag}] key in slot ${'ABCD'[slot]} for ${n}/${qs.length} questions (max ${maxAllowed})`);
      }
    });

    const distinct = counts.filter((n) => n > 0).length;
    if (qs.length >= 5 && distinct < 3) {
      errors.push(`[${tag}] key uses only ${distinct} of 4 slots across ${qs.length} questions`);
    }
  }

  return { ok: errors.length === 0, errors };
}

module.exports = {
  checkQuestionQuality, checkCaseQuality, classifyReason,
  ABSOLUTES, TAIL_STOPWORDS, TRUNCATED_TAIL, DANGLING_PUNCT, isUnbalanced,
  DETERMINER_TAIL, checkTruncation,
  ITEM_CONSTRUCTION_RULES, STRUCTURAL_PARITY_CHECK,
};
