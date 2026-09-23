// client/src/pages/MockExam.jsx
// Full-length timed NCMHCE mock exam — React port of public/exam.html.
// Items addressed: #2 (React unification), #4 (named exam pre-screen), #5 (exam history saving).
// Exam flow follows the NBCC Candidate Handbook (rev. Nov 2025) for the current
// format and the NBCC NCMHCE Exam Specifications (effective July 1, 2027) for
// the 2027 format. public/exam.html mirrors this logic — keep them in sync.
import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import {
  Clock, Flag, ChevronRight, ChevronLeft, AlertTriangle,
  BarChart3, Loader2, ArrowLeft, Shuffle, Lock, Coffee, ChevronDown, ChevronUp,
} from 'lucide-react';
import { authFetch } from '../lib/api';
import { saveBatchToHistory, saveExamToHistory, loadExamHistory, DOMAIN_LABELS_2027 } from '../lib/readiness';
import { useStudyPing } from '../lib/useStudyPing';

// lockMode 'section': each case section is reviewed then locked (current format).
// lockMode 'half':    free navigation within cases 1–5, then 6–10 (2027 format).
// breakMode 'scheduled': 15-minute break after case 5 (current format).
// breakMode 'optional':  break offered at the halfway point (2027 format).
const examConfig = {
  current: { size: 11, minutes: 225, lockMode: 'section', breakMode: 'scheduled' },
  '2027':  { size: 10, minutes: 225, lockMode: 'half',    breakMode: 'optional' },
};
const SPEC_CUTOVER = new Date('2027-07-01T00:00:00Z');
const EXAM_SIZE = 11;    // kept for weightedSelect default; overridden by examConfig at runtime
const EXAM_SECS = examConfig.current.minutes * 60;
const BREAK_SECS = 15 * 60;
const HALF_CASES = 5;    // the break / half boundary falls after case 5
// Mock exams need a free trial or a subscription. Free / expired / gated
// visitors get a sign-up or upgrade prompt and nothing is built or saved.
const EXAM_ACCESS = ['trial', 'paid'];

const BLUEPRINT = {
  Depressive: 20, Anxiety: 20, Trauma: 18, Substance: 16, Personality: 16,
  Bipolar: 12, Neurodevelopmental: 12, 'OCD-Related': 10, Psychotic: 10,
  Eating: 10, Crisis: 10, Disruptive: 8, Somatic: 8, Neurocognitive: 6,
  Dissociative: 6, Sleep: 6, 'Sexual-Gender': 6, Ethics: 6,
};

// Case sections. Mirrors sectionIndexForDomain() in tools/cases/caseSchema.js
// (0 = intake, 1 = session1, 2 = session2); copied because the client can't
// import the CommonJS tools module.
const SECTION_KEYS = ['intake', 'session1', 'session2'];
const SECTION_LABELS = ['Intake', 'Session 1', 'Session 2'];
const SECTION_COLORS = ['text-emerald-400', 'text-blue-400', 'text-amber-400'];
const DOMAIN_SECTION = { intake: 0, core: 0, treatment: 1, counseling: 2, ethics: 2 };
function sectionIndexForDomain(d) {
  return (d in DOMAIN_SECTION) ? DOMAIN_SECTION[d] : SECTION_KEYS.length - 1;
}
function sectionOf(q) {
  const i = SECTION_KEYS.indexOf(q && q.section);
  return i >= 0 ? i : sectionIndexForDomain(q && q.domain);
}

// ── helpers ───────────────────────────────────────────────────────────────────

function fmtTime(s) {
  const m = Math.floor(s / 60), ss = s % 60;
  return `${String(m).padStart(2, '0')}:${String(ss).padStart(2, '0')}`;
}

// Exam date before 2027-07-01 → current; on/after → '2027'; no date → current.
function specForExamDate(d) {
  if (!d) return 'current';
  const t = new Date(/^\d{4}-\d{2}-\d{2}$/.test(d) ? `${d}T12:00:00Z` : d);
  if (Number.isNaN(t.getTime())) return 'current';
  return t >= SPEC_CUTOVER ? '2027' : 'current';
}

// Cached User record from sign-in; used until /api/auth/me answers.
function cachedExamDate() {
  try { return JSON.parse(localStorage.getItem('prp_user') || '{}').examDate || null; } catch { return null; }
}

function matchBpKey(cat) {
  if (!cat) return null;
  const t = cat.trim();
  for (const k of Object.keys(BLUEPRINT)) {
    if (k.toLowerCase() === t.toLowerCase()) return k;
  }
  const first = t.split(/[\s\-_]/)[0].toLowerCase();
  for (const k of Object.keys(BLUEPRINT)) {
    if (k.toLowerCase().startsWith(first)) return k;
  }
  return null;
}

function weightedSelect(items, size) {
  const targetSize = size || EXAM_SIZE;
  const groups = {};
  items.forEach((it) => {
    const k = matchBpKey(it.category);
    if (k) { if (!groups[k]) groups[k] = []; groups[k].push(it); }
  });
  const bpArr = Object.entries(BLUEPRINT);
  const totalW = bpArr.reduce((s, [, w]) => s + w, 0);
  const selected = [], usedIds = new Set();
  const pools = {};
  for (const [k] of bpArr) pools[k] = [...(groups[k] || [])];
  let attempts = 0;
  while (selected.length < targetSize && attempts < 400) {
    attempts++;
    let r = Math.random() * totalW, cat = bpArr[bpArr.length - 1][0];
    for (const [k, w] of bpArr) { r -= w; if (r <= 0) { cat = k; break; } }
    const pool = (pools[cat] || []).filter((it) => !usedIds.has(it.externalId));
    if (!pool.length) continue;
    const pick = pool[Math.floor(Math.random() * pool.length)];
    usedIds.add(pick.externalId);
    selected.push(pick);
  }
  return selected;
}

// The mock exam never shows a separate Diagnosis (differentialOptions) step;
// diagnosis items already in q[] are answered as regular A–D questions.
function hasDxStep() {
  return false;
}

function initAnswers(cases) {
  return cases.map((c) => ({
    questions: new Array((c.questions || []).length).fill(null),
    struck: new Array((c.questions || []).length).fill(null).map(() => []),
    flags: new Array((c.questions || []).length).fill(false),
  }));
}

// Split every case into its non-empty sections ("stops"), in exam order.
// Questions keep their original order within a section. A section with no
// questions has its narrative shown with the next section (cumulative reveal);
// a trailing empty section is shown with the case's last stop.
function buildStops(cases) {
  const stops = [];
  cases.forEach((c, ci) => {
    const buckets = [[], [], []];
    (c.questions || []).forEach((q, qi) => buckets[sectionOf(q)].push(qi));
    const present = [0, 1, 2].filter((s) => buckets[s].length);
    present.forEach((s, k) => {
      const last = k === present.length - 1;
      stops.push({ ci, sec: s, qis: buckets[s], revealThrough: last ? 2 : s, firstOfCase: k === 0, lastOfCase: last });
    });
  });
  return stops;
}

// ── sub-components ────────────────────────────────────────────────────────────

function TimerBar({ secs, examSecs, caseIdx, totalCases, sectionLabel, qNum, qTotal }) {
  const warn = secs <= 600 && secs > 300;
  const danger = secs <= 300;
  const pct = Math.round((secs / (examSecs || EXAM_SECS)) * 100);
  return (
    <div className="sticky top-0 z-10 shrink-0 bg-slate-900/95 backdrop-blur border-b border-slate-700/60 px-4 py-2.5 grid grid-cols-[1fr_auto_1fr] items-center gap-3">
      <div className="flex items-center gap-3">
        <Clock className={`w-4 h-4 ${danger ? 'text-red-400' : warn ? 'text-amber-400' : 'text-slate-400'}`} />
        <span className={`text-xl font-extrabold tabular-nums ${danger ? 'text-red-400' : warn ? 'text-amber-400' : 'text-white'}`}>
          {fmtTime(secs)}
        </span>
        <div className="w-20 h-1.5 bg-slate-700 rounded-full overflow-hidden hidden sm:block">
          <div
            className={`h-full rounded-full transition-all ${danger ? 'bg-red-400' : warn ? 'bg-amber-400' : 'bg-emerald-500'}`}
            style={{ width: `${pct}%` }}
          />
        </div>
      </div>
      <div className="text-center text-sm font-bold text-white">
        Case {caseIdx + 1} of {totalCases}
        <span className="hidden sm:inline"> · </span>
        <span className="block sm:inline text-xs sm:text-sm text-slate-400 sm:text-white">{sectionLabel}</span>
      </div>
      <div className="text-right text-sm text-slate-400">
        {qNum != null && <>Question <span className="font-bold text-white">{qNum}</span> of {qTotal}</>}
      </div>
    </div>
  );
}

function Narrative({ c, revealThrough, segRefs }) {
  return (
    <div className="space-y-3">
      {SECTION_KEYS.map((seg, si) => si <= revealThrough && c.narrative?.[seg] && (
        <div key={seg} ref={segRefs ? (el) => { segRefs.current[si] = el; } : undefined}>
          <div className={`text-xs font-bold uppercase tracking-wide mb-1 ${SECTION_COLORS[si]}`}>
            {SECTION_LABELS[si]}
          </div>
          <p className="text-slate-200 leading-relaxed">{c.narrative[seg]}</p>
        </div>
      ))}
    </div>
  );
}

function CaseHeader({ c, caseIdx, totalCases }) {
  return (
    <div>
      <div className="flex items-center gap-2 flex-wrap mb-1">
        <span className="text-xs font-bold text-slate-500">Case {caseIdx + 1} of {totalCases}</span>
        {c.category && <span className="text-xs font-semibold text-slate-400 bg-slate-700/50 px-2 py-0.5 rounded-full">{c.category}</span>}
        {c.difficulty && (
          <span className={`text-xs font-bold px-2 py-0.5 rounded-full uppercase ${
            c.difficulty === 'easy' ? 'text-emerald-400 bg-emerald-500/15' :
            c.difficulty === 'hard' ? 'text-red-400 bg-red-500/15' :
            'text-amber-400 bg-amber-500/15'
          }`}>{c.difficulty}</span>
        )}
      </div>
      <h2 className="text-lg font-bold text-white">{c.title}</h2>
    </div>
  );
}

// Grid of question cells grouped by case section. `groups` is
// [{ key, label, cells:[{ idx, num, answered, flagged, current, locked }] }].
function AnswerGrid({ groups, onJump, large }) {
  return (
    <div>
      <div className="flex gap-3 flex-wrap text-xs text-slate-500 mb-2">
        <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded-sm border border-emerald-500/40 bg-emerald-500/10" /> Answered</span>
        <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded-sm border border-slate-700/60 bg-slate-800/40" /> Unanswered</span>
        <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded-sm border border-amber-500/50 bg-amber-500/10" /> Flagged</span>
      </div>
      <div className="flex flex-wrap gap-3">
        {groups.map((g) => (
          <div key={g.key} className="flex flex-col gap-1">
            <div className="text-[10px] font-bold uppercase tracking-wide text-slate-500 flex items-center gap-1">
              {g.locked && <Lock className="w-2.5 h-2.5" />}{g.label}
            </div>
            <div className="flex gap-1 flex-wrap">
              {g.cells.map((cell) => (
                <button
                  key={cell.idx}
                  type="button"
                  disabled={cell.locked}
                  onClick={() => onJump(cell.idx)}
                  title={cell.locked ? 'Locked' : cell.flagged ? 'Flagged' : cell.answered ? 'Answered' : 'Unanswered'}
                  className={`${large ? 'w-10 h-10 text-sm' : 'w-8 h-8 text-xs'} rounded-lg font-bold border transition-colors ${
                    cell.locked
                      ? 'border-slate-700/40 bg-slate-800/20 text-slate-600 cursor-not-allowed'
                      : cell.current
                      ? 'border-emerald-500 bg-emerald-500/20 text-emerald-400'
                      : cell.flagged
                      ? 'border-amber-500/50 bg-amber-500/10 text-amber-400'
                      : cell.answered
                      ? 'border-emerald-500/40 bg-emerald-500/10 text-emerald-400'
                      : 'border-slate-700/60 bg-slate-800/40 text-slate-500 hover:border-slate-500'
                  }`}
                >
                  {cell.num}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ConfirmModal({ title, body, confirmLabel, onConfirm, onCancel }) {
  return (
    <div className="fixed inset-0 z-[9100] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4" role="dialog" aria-modal="true">
      <div className="w-full max-w-md bg-slate-800 border border-slate-700 rounded-2xl p-5 space-y-3">
        <div className="flex items-center gap-2 text-amber-400 font-bold">
          <AlertTriangle className="w-5 h-5" /> {title}
        </div>
        <div className="text-sm text-slate-300 space-y-1.5">{body}</div>
        <div className="flex justify-end gap-2 pt-2">
          <button onClick={onCancel} className="bg-slate-700 hover:bg-slate-600 text-white font-bold px-4 py-2 rounded-xl text-sm transition-colors">
            Go back
          </button>
          <button onClick={onConfirm} className="bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-bold px-4 py-2 rounded-xl text-sm transition-colors">
            {confirmLabel}
          </button>
        </div>
      </div>
    </div>
  );
}

// ── Access gate ───────────────────────────────────────────────────────────────

function AccessGate({ accessLevel, onBack }) {
  const gate = accessLevel === 'gated'
    ? { title: 'Your access is paused', body: 'Submit your score report to restore access to timed mock exams.', href: '/score-report.html', cta: 'Submit score report →' }
    : accessLevel === 'expired'
    ? { title: 'Mock exams are for subscribers', body: 'Your free trial has ended. Subscribe to take full-length timed mock exams with a domain breakdown and answer review.', href: '/checkout.html?tier=monthly', cta: 'Subscribe →' }
    : { title: 'Mock exams are for subscribers', body: 'Create an account to start your free trial and take full-length timed mock exams with a domain breakdown and answer review.', href: '/register.html', cta: 'Create an account →' };
  return (
    <div className="space-y-5">
      <button onClick={onBack} className="text-sm text-slate-400 hover:text-white flex items-center gap-1">
        <ArrowLeft className="w-4 h-4" /> Dashboard
      </button>
      <div className="bg-slate-800/50 border border-slate-700/60 rounded-2xl p-6 text-center space-y-3">
        <div className="inline-flex items-center gap-2 bg-amber-500/15 border border-amber-500/30 text-amber-400 text-xs font-bold px-3 py-1 rounded-full">
          <Lock className="w-3.5 h-3.5" /> MOCK EXAM
        </div>
        <h1 className="text-2xl font-extrabold text-white">{gate.title}</h1>
        <p className="text-slate-400 text-sm max-w-md mx-auto">{gate.body}</p>
        <a href={gate.href} className="inline-block bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-extrabold px-6 py-3 rounded-xl transition-colors">
          {gate.cta}
        </a>
      </div>
    </div>
  );
}

// ── Lobby ─────────────────────────────────────────────────────────────────────

function Lobby({ onStart, totalInBank, onBack, spec }) {
  const pastExams = loadExamHistory();
  const examNumber = pastExams.length + 1;
  const cfg = examConfig[spec] || examConfig.current;
  return (
    <div className="space-y-5">
      <button onClick={onBack} className="text-sm text-slate-400 hover:text-white flex items-center gap-1">
        <ArrowLeft className="w-4 h-4" /> Dashboard
      </button>

      <div className="text-center space-y-2 py-4">
        <div className="inline-flex items-center gap-2 bg-amber-500/15 border border-amber-500/30 text-amber-400 text-xs font-bold px-3 py-1 rounded-full">
          <Clock className="w-3.5 h-3.5" /> MOCK EXAM
        </div>
        <h1 className="text-2xl font-extrabold text-white">
          {pastExams.length > 0 ? `Practice Exam #${examNumber}` : 'Full-Length NCMHCE Mock Exam'}
        </h1>
        <p className="text-slate-400 text-sm max-w-md mx-auto">
          {cfg.size} cases selected from your {totalInBank ? `${totalInBank}-case` : ''} bank, weighted to the real NCMHCE blueprint.
          Every exam is unique — no two are the same.
        </p>
        <p className="text-xs text-slate-500">
          {spec === '2027'
            ? '2027 NCMHCE format — your exam date is on or after July 1, 2027.'
            : 'Current NCMHCE format — set your exam date on the Dashboard to switch to the 2027 format for exams on or after July 1, 2027.'}
        </p>
      </div>

      <div className="grid sm:grid-cols-3 gap-3">
        {[
          { label: `${cfg.size} cases`, sub: `from ${totalInBank || '270+'}+ in bank`, icon: Shuffle, color: 'text-blue-400' },
          { label: `${cfg.minutes} min`, sub: 'official exam window', icon: Clock, color: 'text-amber-400' },
          { label: 'Blueprint-weighted', sub: spec === '2027' ? '6 NCMHCE domains' : '5 NCMHCE domains', icon: BarChart3, color: 'text-emerald-400' },
        ].map((s) => (
          <div key={s.label} className="bg-slate-800/50 border border-slate-700/60 rounded-xl p-4 text-center">
            <s.icon className={`w-5 h-5 mx-auto mb-1.5 ${s.color}`} />
            <div className="font-bold text-white text-sm">{s.label}</div>
            <div className="text-xs text-slate-500">{s.sub}</div>
          </div>
        ))}
      </div>

      <div className="bg-slate-800/50 border border-slate-700/60 rounded-xl p-4 text-sm text-slate-400 space-y-1.5">
        <div className="font-bold text-white text-sm mb-2">Exam rules</div>
        <div>• Each case unfolds in three sections: Intake → Session 1 → Session 2. New case information appears as each section starts.</div>
        {cfg.lockMode === 'section' ? (
          <div>• At the end of each section you review its questions. Once you continue, that section is locked — you can't return to it.</div>
        ) : (
          <div>• You can move freely among the questions you've reached in cases 1–5, then in cases 6–{cfg.size}. Submitting a half locks it.</div>
        )}
        {cfg.breakMode === 'scheduled' ? (
          <div>• A scheduled 15-minute break follows case 5. The exam clock pauses during the break.</div>
        ) : (
          <div>• At the halfway point you can take a 15-minute break or continue. The exam clock pauses during the break.</div>
        )}
        <div>• Clicking an option selects it. You can change it until the {cfg.lockMode === 'section' ? 'section' : 'half'} is submitted.</div>
        <div>• Cross out an option you've ruled out with the ✕ button next to it, and flag questions to revisit in review.</div>
        <div>• No feedback until the final results, like the real NCMHCE.</div>
        <div>• Timer auto-submits when it reaches 0:00.</div>
        <div>• Results save to your Performance page automatically.</div>
      </div>

      {pastExams.length > 0 && (
        <div className="bg-slate-800/40 border border-slate-700/40 rounded-xl p-4">
          <div className="text-xs text-slate-500 mb-2">Your last exam</div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-slate-300">Practice Exam #{pastExams[pastExams.length - 1].examNumber}</span>
            <span className={`text-sm font-bold ${pastExams[pastExams.length - 1].pct >= 70 ? 'text-emerald-400' : 'text-amber-400'}`}>
              {pastExams[pastExams.length - 1].pct}%
            </span>
          </div>
        </div>
      )}

      <button
        onClick={onStart}
        className="w-full bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-extrabold py-3.5 rounded-xl transition-colors text-lg"
      >
        Start {pastExams.length > 0 ? `Practice Exam #${examNumber}` : 'Exam'} →
      </button>
    </div>
  );
}

// ── Results ───────────────────────────────────────────────────────────────────

function Results({ cases, answers, timeUsedSecs, examSecs, examMinutes, spec, onRetake, onBack }) {
  // Compute results
  const caseResults = cases.map((c, ci) => {
    const ea = answers[ci];
    const qs = c.questions || [];
    let correct = 0;
    const domains = {};
    qs.forEach((q, qi) => {
      const a = ea.questions[qi];
      const chosen = a && q.options.find((o) => o.id === a);
      const ok = !!(chosen && chosen.isCorrect);
      if (ok) correct++;
      const d = q.domain || 'general';
      if (!domains[d]) domains[d] = { ok: 0, total: 0 };
      domains[d].total++;
      if (ok) domains[d].ok++;
    });
    const pct = qs.length ? Math.round((correct / qs.length) * 100) : 0;
    return { caseId: c.id || c.externalId || c.title, title: c.title, correct, total: qs.length, pct, difficulty: c.difficulty, category: c.category, domains };
  });

  const totalCorrect = caseResults.reduce((s, r) => s + r.correct, 0);
  const totalQs = caseResults.reduce((s, r) => s + r.total, 0);
  const overallPct = totalQs ? Math.round((totalCorrect / totalQs) * 100) : 0;

  // Aggregate domains across all cases
  const allDomains = {};
  caseResults.forEach((r) => {
    Object.entries(r.domains).forEach(([d, v]) => {
      if (!allDomains[d]) allDomains[d] = { ok: 0, total: 0 };
      allDomains[d].ok += v.ok;
      allDomains[d].total += v.total;
    });
  });

  // Save on first render
  const saved = useRef(false);
  useEffect(() => {
    if (saved.current) return;
    saved.current = true;

    // 1. Batch-save individual cases to prp_history (feeds Analytics)
    const historyEntries = caseResults.map((r) => ({
      caseId: r.caseId,
      category: r.category || null,
      date: Date.now(),
      correct: r.correct,
      total: r.total,
      domains: r.domains,
      dxCorrect: null,
      difficulty: r.difficulty || 'medium',
    }));
    saveBatchToHistory(historyEntries);

    // 2. Save full exam record to prp_exam_history (feeds Mock Exams tab)
    saveExamToHistory({
      date: Date.now(),
      pct: overallPct,
      totalCorrect,
      totalQuestions: totalQs,
      caseCount: cases.length,
      timeUsedSecs,
      timeAllottedSecs: examSecs || EXAM_SECS,
      domains: allDomains,
      cases: caseResults.map((r) => ({ caseId: r.caseId, title: r.title, correct: r.correct, total: r.total, pct: r.pct, difficulty: r.difficulty, category: r.category })),
    });
  }, []); // eslint-disable-line

  const mUsed = Math.floor(timeUsedSecs / 60);
  const sUsed = timeUsedSecs % 60;
  const passed = overallPct >= 70;
  const domainLabel = (d) => (spec === '2027' && DOMAIN_LABELS_2027[d]) || d.replace(/_/g, ' ');

  return (
    <div className="space-y-5">
      {/* Overall score */}
      <div className={`text-center rounded-2xl p-8 border ${passed ? 'bg-emerald-500/10 border-emerald-500/30' : 'bg-amber-500/10 border-amber-500/30'}`}>
        <div className="text-4xl mb-2">{passed ? '🏆' : '📈'}</div>
        <div className="text-5xl font-extrabold text-white">{overallPct}%</div>
        <div className="text-slate-300 mt-1">{totalCorrect} of {totalQs} correct ({overallPct}%)</div>
        <div className="text-sm text-slate-500 mt-1">Time used: {mUsed}m {sUsed}s of {examMinutes || examConfig.current.minutes}m</div>
        <div className={`mt-3 text-sm font-bold ${passed ? 'text-emerald-400' : 'text-amber-400'}`}>
          {passed ? 'Strong performance — above the 70% benchmark.' : 'Keep practicing. 70% is the benchmark.'}
        </div>
        {spec === '2027' && (
          <div className="mt-3 text-xs text-slate-400 max-w-md mx-auto">
            The 2027 NCMHCE reports a scaled score (100–500, passing = 360) that can't be calculated from a practice raw score.
          </div>
        )}
      </div>

      {/* Domain breakdown */}
      {Object.keys(allDomains).length > 0 && (
        <div className="bg-slate-800/50 border border-slate-700/60 rounded-2xl p-5">
          <h2 className="text-sm font-bold text-white mb-3">Domain breakdown</h2>
          <div className="space-y-2">
            {Object.entries(allDomains).map(([d, v]) => {
              const dp = v.total ? Math.round((v.ok / v.total) * 100) : 0;
              const color = dp >= 70 ? 'bg-emerald-500' : dp >= 50 ? 'bg-amber-500' : 'bg-red-500';
              return (
                <div key={d} className="flex items-center gap-3">
                  <span className={`text-sm text-slate-300 ${spec === '2027' ? 'w-48' : 'w-32'} shrink-0 truncate capitalize`} title={domainLabel(d)}>{domainLabel(d)}</span>
                  <div className="flex-1 h-2 bg-slate-700 rounded-full overflow-hidden">
                    <div className={`h-full rounded-full ${color}`} style={{ width: `${dp}%` }} />
                  </div>
                  <span className="text-sm font-bold text-white w-10 text-right">{dp}%</span>
                  <span className="text-xs text-slate-500 w-10 text-right">{v.total}q</span>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Per-case results */}
      <div className="bg-slate-800/50 border border-slate-700/60 rounded-2xl p-5">
        <h2 className="text-sm font-bold text-white mb-3">Case-by-case results</h2>
        <div className="space-y-2">
          {caseResults.map((r, i) => {
            const color = r.pct >= 70 ? 'text-emerald-400' : r.pct >= 50 ? 'text-amber-400' : 'text-red-400';
            const diffColors = { easy: 'text-emerald-400 bg-emerald-500/15', medium: 'text-amber-400 bg-amber-500/15', hard: 'text-red-400 bg-red-500/15' };
            return (
              <div key={i} className="flex items-center justify-between py-2 border-b border-slate-700/40 last:border-0">
                <div className="flex-1 min-w-0">
                  <div className="text-sm text-white font-medium truncate">{r.title || `Case ${i + 1}`}</div>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <span className="text-xs text-slate-500">Case {i + 1}</span>
                    {r.difficulty && (
                      <span className={`text-xs font-bold px-1.5 py-0.5 rounded-full uppercase ${diffColors[r.difficulty] || 'text-slate-400 bg-slate-700'}`}>
                        {r.difficulty}
                      </span>
                    )}
                  </div>
                </div>
                <div className="text-right shrink-0 ml-4">
                  <div className={`text-sm font-bold ${color}`}>{r.pct}%</div>
                  <div className="text-xs text-slate-500">{r.correct}/{r.total}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="text-xs text-slate-500 text-center">Results saved to your Performance page.</div>

      <div className="flex gap-3">
        <button onClick={onRetake} className="flex-1 bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-bold px-4 py-2.5 rounded-xl transition-colors">
          Take another exam ›
        </button>
        <button onClick={onBack} className="bg-slate-700 hover:bg-slate-600 text-white font-bold px-4 py-2.5 rounded-xl transition-colors">
          Dashboard
        </button>
      </div>
    </div>
  );
}

// ── Main component ────────────────────────────────────────────────────────────

export default function MockExam({ navigate }) {
  useStudyPing('mock');

  const [phase, setPhase] = useState('lobby');        // lobby | loading | exam | results
  const [spec, setSpec] = useState(() => specForExamDate(cachedExamDate()));
  const [examSpec, setExamSpec] = useState('current'); // spec frozen at exam start
  const [totalInBank, setTotalInBank] = useState(null);
  const [accessLevel, setAccessLevel] = useState(null); // null until /api/content answers
  const [loadError, setLoadError] = useState(null);
  const [cases, setCases] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [cur, setCur] = useState(0);                   // index into positions
  const [maxReached, setMaxReached] = useState(0);     // furthest position reached
  const [lockedCount, setLockedCount] = useState(0);   // stops [0, lockedCount) are locked
  const [view, setView] = useState('question');        // question | review | halfway | break
  const [modal, setModal] = useState(null);            // null | 'lock'
  const [breakSecs, setBreakSecs] = useState(BREAK_SECS);
  const [infoOpen, setInfoOpen] = useState({});        // <1024px case-info panel, per case
  const [timerSecs, setTimerSecs] = useState(EXAM_SECS);
  const [examStartSecs, setExamStartSecs] = useState(EXAM_SECS);
  const [activeExamSecs, setActiveExamSecs] = useState(EXAM_SECS);
  const [activeExamMinutes, setActiveExamMinutes] = useState(examConfig.current.minutes);
  const [timerExpired, setTimerExpired] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const overlayRef = useRef(null);
  const narrPaneRef = useRef(null);
  const qPaneRef = useRef(null);
  const segRefs = useRef([]);
  const collapseArmed = useRef(null);

  // Fetch bank total for lobby display and persist the active outline.
  useEffect(() => {
    authFetch('/api/content?exam=ncmhce')
      .then((r) => r.json())
      .then((d) => {
        try { localStorage.setItem('prp_outline', d.outlineFallback ? 'current' : (d.outline || 'current')); } catch {}
        setTotalInBank(d.total || null);
        setAccessLevel(d.accessLevel || 'free');
      })
      .catch(() => setAccessLevel('free'));
    // Spec follows the signed-in user's exam date (User.examDate). If the
    // request is unavailable, the cached user record read above stands.
    authFetch('/api/auth/me')
      .then((r) => (r.ok ? r.json() : null))
      .then((d) => { if (d && d.user) setSpec(specForExamDate(d.user.examDate)); })
      .catch(() => {});
  }, []);

  const cfg = examConfig[examSpec] || examConfig.current;
  const stops = useMemo(() => buildStops(cases), [cases]);
  const positions = useMemo(
    () => stops.flatMap((st, si) => st.qis.map((qi, pos) => ({ si, pos, ci: st.ci, qi }))),
    [stops],
  );
  const hasHalves = cases.length > HALF_CASES;
  const halfOfStop = (si) => (hasHalves && stops[si] && stops[si].ci >= HALF_CASES ? 1 : 0);

  // The block of stops the candidate is currently working in: one section
  // (lockMode 'section') or one half of the exam (lockMode 'half').
  const unitStart = lockedCount;
  let unitEnd = unitStart;
  if (cfg.lockMode === 'half') {
    while (unitEnd + 1 < stops.length && halfOfStop(unitEnd + 1) === halfOfStop(unitStart)) unitEnd++;
  }
  const unitFirstPos = positions.findIndex((p) => p.si >= unitStart);
  let unitLastPos = unitFirstPos;
  while (unitLastPos + 1 < positions.length && positions[unitLastPos + 1].si <= unitEnd) unitLastPos++;
  const isFinalUnit = unitEnd >= stops.length - 1;

  function isNavigable(idx) {
    const p = positions[idx];
    if (!p || p.si < unitStart || p.si > unitEnd) return false;
    return cfg.lockMode === 'section' || idx <= maxReached;
  }

  // Exam clock — runs only while questions or the review screen are on
  // screen; it pauses for the halfway prompt and the break.
  const clockRunning = phase === 'exam' && !submitted && (view === 'question' || view === 'review');
  useEffect(() => {
    if (!clockRunning) return undefined;
    const id = setInterval(() => {
      setTimerSecs((s) => {
        if (s <= 1) {
          clearInterval(id);
          setTimerExpired(true);
          return 0;
        }
        return s - 1;
      });
    }, 1000);
    return () => clearInterval(id);
  }, [clockRunning]);

  // Auto-submit on expiry
  useEffect(() => {
    if (timerExpired && phase === 'exam' && !submitted) handleSubmit();
  }, [timerExpired]); // eslint-disable-line

  const handleSubmit = useCallback(() => {
    setModal(null);
    setSubmitted(true);
    setPhase('results');
  }, []);

  // Break countdown; auto-resume at 0:00.
  useEffect(() => {
    if (phase !== 'exam' || view !== 'break') return undefined;
    const id = setInterval(() => setBreakSecs((s) => Math.max(0, s - 1)), 1000);
    return () => clearInterval(id);
  }, [phase, view]);

  useEffect(() => {
    if (phase === 'exam' && view === 'break' && breakSecs === 0) resumeExam();
  }, [breakSecs]); // eslint-disable-line

  async function startExam() {
    setPhase('loading');
    setLoadError(null);
    try {
      const r = await authFetch('/api/content?exam=ncmhce');
      const d = await r.json();
      try { localStorage.setItem('prp_outline', d.outlineFallback ? 'current' : (d.outline || 'current')); } catch {}
      if (!EXAM_ACCESS.includes(d.accessLevel)) {
        setAccessLevel(d.accessLevel || 'free');
        setPhase('lobby');
        return;
      }
      const startCfg = examConfig[spec] || examConfig.current;
      const allItems = d.items || [];
      if (allItems.length < 3) throw new Error('Not enough cases in the bank to build an exam.');
      const stubs = weightedSelect(allItems, startCfg.size);
      if (stubs.length < 3) throw new Error('Blueprint selection returned too few cases.');

      // Fetch full case data in parallel
      const full = (await Promise.all(
        stubs.map((s) =>
          authFetch(`/api/content/${encodeURIComponent(s.externalId)}`)
            .then((rr) => rr.json())
            .then((dd) => {
              const item = dd.item || {};
              return { ...(item.caseSim || item), externalId: s.externalId, category: s.category, difficulty: s.difficulty };
            })
        )
      )).filter((c) => Array.isArray(c.questions) && c.questions.length > 0);
      if (full.length < 3) throw new Error('Blueprint selection returned too few cases.');

      const startSecs = startCfg.minutes * 60;
      setExamSpec(spec);
      setCases(full);
      setAnswers(initAnswers(full));
      setCur(0);
      setMaxReached(0);
      setLockedCount(0);
      setView('question');
      setModal(null);
      setInfoOpen({});
      setBreakSecs(BREAK_SECS);
      setTimerSecs(startSecs);
      setExamStartSecs(startSecs);
      setActiveExamSecs(startSecs);
      setActiveExamMinutes(startCfg.minutes);
      setSubmitted(false);
      setTimerExpired(false);
      setPhase('exam');
    } catch (e) {
      setLoadError(e.message || 'Failed to load exam. Please try again.');
      setPhase('lobby');
    }
  }

  function retake() {
    setCases([]);
    setAnswers([]);
    setCur(0);
    setMaxReached(0);
    setLockedCount(0);
    setView('question');
    setModal(null);
    setSubmitted(false);
    setTimerExpired(false);
    setPhase('lobby');
  }

  // ── answer handlers ────────────────────────────────────────────────────────

  const pos = positions[cur];

  function updateCurrent(fn) {
    if (!pos || !isNavigable(cur)) return;
    setAnswers((prev) => prev.map((a, i) => (i === pos.ci ? fn(a, pos.qi) : a)));
  }

  // Clicking an option selects it immediately; it can be changed until the
  // section (current) or half (2027) is submitted.
  function chooseQ(optId) {
    updateCurrent((a, qi) => {
      const qs = [...a.questions];
      qs[qi] = optId;
      return { ...a, questions: qs };
    });
  }

  function toggleStrikeQ(optId) {
    updateCurrent((a, qi) => {
      const curStruck = a.struck[qi] || [];
      const struck = [...a.struck];
      struck[qi] = curStruck.includes(optId) ? curStruck.filter((x) => x !== optId) : [...curStruck, optId];
      return { ...a, struck };
    });
  }

  function toggleFlag() {
    updateCurrent((a, qi) => {
      const flags = [...a.flags];
      flags[qi] = !flags[qi];
      return { ...a, flags };
    });
  }

  // ── navigation ─────────────────────────────────────────────────────────────

  function goTo(idx) {
    if (!isNavigable(idx)) return;
    setCur(idx);
    setMaxReached((m) => Math.max(m, idx));
    setView('question');
  }

  function nextStep() {
    const lastInBlock = cfg.lockMode === 'section' ? positions[cur + 1]?.si !== pos.si : cur >= unitLastPos;
    if (lastInBlock) { setView('review'); return; }
    setCur(cur + 1);
    setMaxReached((m) => Math.max(m, cur + 1));
  }

  function prevStep() {
    if (cur > unitFirstPos) setCur(cur - 1);
  }

  const unitPositions = [];
  for (let i = unitFirstPos; i >= 0 && i <= unitLastPos; i++) unitPositions.push(i);
  const isAnswered = (i) => !!answers[positions[i].ci]?.questions[positions[i].qi];
  const isFlaggedAt = (i) => !!answers[positions[i].ci]?.flags[positions[i].qi];
  const unitUnanswered = unitPositions.filter((i) => !isAnswered(i)).length;
  const unitFlagged = unitPositions.filter((i) => isFlaggedAt(i)).length;

  function requestLock() {
    if (cfg.lockMode === 'section' && unitUnanswered === 0 && unitFlagged === 0) { lockUnit(); return; }
    setModal('lock');
  }

  function lockUnit() {
    setModal(null);
    const newLocked = unitEnd + 1;
    if (newLocked >= stops.length) { handleSubmit(); return; }
    setLockedCount(newLocked);
    const justLocked = stops[unitEnd];
    const atHalfway = hasHalves && justLocked.ci === HALF_CASES - 1 && justLocked.lastOfCase;
    if (atHalfway) {
      setBreakSecs(BREAK_SECS);
      setView(cfg.breakMode === 'scheduled' ? 'break' : 'halfway');
      return;
    }
    enterStop(newLocked);
  }

  function enterStop(si) {
    const idx = positions.findIndex((p) => p.si >= si);
    setCur(idx);
    setMaxReached((m) => Math.max(m, idx));
    setView('question');
  }

  function resumeExam() {
    enterStop(lockedCount);
  }

  function startBreak() {
    setBreakSecs(BREAK_SECS);
    setView('break');
  }

  // ── narrative reveal + scroll behavior ────────────────────────────────────

  const ci = pos ? pos.ci : 0;
  // Furthest stop reached in the current case: the narrative is revealed
  // cumulatively through that stop's section.
  let narrStop = -1;
  if (pos) {
    const reached = positions[Math.max(maxReached, cur)].si;
    let lastOfCase = pos.si;
    while (lastOfCase + 1 < stops.length && stops[lastOfCase + 1].ci === ci) lastOfCase++;
    narrStop = Math.min(reached, lastOfCase);
  }
  const revealThrough = narrStop >= 0 ? stops[narrStop].revealThrough : 0;

  // Right pane (and the stacked page on narrow screens) starts each question at the top.
  useEffect(() => {
    if (phase !== 'exam') return;
    if (qPaneRef.current) qPaneRef.current.scrollTop = 0;
    if (overlayRef.current) overlayRef.current.scrollTop = 0;
    // Narrow screens: collapse the case-info panel after the first question of a section.
    const armed = collapseArmed.current;
    if (armed && armed.cur !== cur) {
      collapseArmed.current = null;
      setInfoOpen((o) => ({ ...o, [armed.ci]: false }));
    }
  }, [cur, view, phase]); // eslint-disable-line

  // A new section starts: scroll the narrative pane to the newly revealed
  // segment (top of the pane for a new case) and expand the narrow-screen panel.
  // Revisiting an earlier case (2027 half mode) just shows it from the top.
  useEffect(() => {
    if (phase !== 'exam' || narrStop < 0) return;
    const st = stops[narrStop];
    const isNew = narrStop === positions[maxReached]?.si;
    const firstNew = !isNew || st.firstOfCase ? 0 : stops[narrStop - 1].revealThrough + 1;
    const pane = narrPaneRef.current;
    if (pane) {
      const el = segRefs.current[firstNew];
      pane.scrollTop = firstNew === 0 || !el ? 0 : Math.max(0, el.offsetTop - 12);
    }
    if (!isNew) return;
    setInfoOpen((o) => ({ ...o, [st.ci]: true }));
    collapseArmed.current = { ci: st.ci, cur };
  }, [narrStop, phase]); // eslint-disable-line

  // ── render phases ──────────────────────────────────────────────────────────

  if (phase === 'lobby') {
    if (accessLevel === null) {
      return (
        <div className="flex justify-center py-20">
          <Loader2 className="w-8 h-8 text-emerald-400 animate-spin" />
        </div>
      );
    }
    if (!EXAM_ACCESS.includes(accessLevel)) {
      return <AccessGate accessLevel={accessLevel} onBack={() => navigate('home')} />;
    }
    return (
      <div className="space-y-4">
        <Lobby onStart={startExam} totalInBank={totalInBank} onBack={() => navigate('home')} spec={spec} />
        {loadError && (
          <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-4 text-sm text-red-400 flex items-center gap-2">
            <AlertTriangle className="w-4 h-4 shrink-0" /> {loadError}
          </div>
        )}
      </div>
    );
  }

  if (phase === 'loading') {
    return (
      <div className="flex flex-col items-center justify-center py-20 gap-4">
        <Loader2 className="w-10 h-10 text-emerald-400 animate-spin" />
        <div className="text-white font-bold">Building your exam…</div>
        <div className="text-slate-400 text-sm">Selecting {(examConfig[spec] || examConfig.current).size} cases weighted to the NCMHCE blueprint</div>
      </div>
    );
  }

  if (phase === 'results') {
    return (
      <Results
        cases={cases}
        answers={answers}
        timeUsedSecs={examStartSecs - timerSecs}
        examSecs={activeExamSecs}
        examMinutes={activeExamMinutes}
        spec={examSpec}
        onRetake={retake}
        onBack={() => navigate('home')}
      />
    );
  }

  // ── EXAM phase ─────────────────────────────────────────────────────────────

  if (!pos || !answers[ci]) return null;

  const shell = (children) => (
    <div ref={overlayRef} className="fixed inset-0 z-[9000] bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-y-auto lg:overflow-hidden flex flex-col">
      {children}
    </div>
  );

  // Halfway prompt (2027) and the break screen (both specs).
  if (view === 'halfway' || view === 'break') {
    return shell(
      <div className="flex-1 flex items-center justify-center p-4">
        <div className="w-full max-w-md bg-slate-800/50 border border-slate-700/60 rounded-2xl p-6 text-center space-y-4">
          <Coffee className="w-8 h-8 mx-auto text-amber-400" />
          {view === 'halfway' ? (
            <>
              <h2 className="text-xl font-extrabold text-white">Halfway point</h2>
              <p className="text-slate-300 text-sm">Take a 15-minute break or continue now.</p>
              <p className="text-xs text-slate-500">Exam time remaining: {fmtTime(timerSecs)} (paused)</p>
              <div className="flex flex-col sm:flex-row gap-2 justify-center">
                <button onClick={startBreak} className="bg-slate-700 hover:bg-slate-600 text-white font-bold px-5 py-2.5 rounded-xl transition-colors">
                  Take a 15-minute break
                </button>
                <button onClick={resumeExam} className="bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-bold px-5 py-2.5 rounded-xl transition-colors">
                  Continue now ›
                </button>
              </div>
            </>
          ) : (
            <>
              <h2 className="text-xl font-extrabold text-white">{cfg.breakMode === 'scheduled' ? 'Scheduled Break' : 'Break'}</h2>
              <div className="text-5xl font-extrabold tabular-nums text-white">{fmtTime(breakSecs)}</div>
              <p className="text-slate-400 text-sm">
                The exam clock is paused ({fmtTime(timerSecs)} remaining). Cases 1–{HALF_CASES} are now locked.
                The exam resumes automatically at 0:00.
              </p>
              <button onClick={resumeExam} className="bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-bold px-5 py-2.5 rounded-xl transition-colors">
                Resume exam now ›
              </button>
            </>
          )}
        </div>
      </div>
    );
  }

  const c = cases[ci];
  const ea = answers[ci];
  const q = c.questions[pos.qi];
  const currentAnswer = ea.questions[pos.qi];
  const isFlagged = !!ea.flags[pos.qi];
  const struckIds = ea.struck[pos.qi] || [];
  const secLabel = SECTION_LABELS[stops[pos.si].sec];
  const isReview = view === 'review';

  // Answer grid: current block clickable, earlier blocks greyed/locked,
  // future (unrevealed) questions hidden.
  const gridGroups = [];
  stops.forEach((st, si) => {
    if (si > unitEnd) return;
    const locked = si < unitStart;
    const cells = [];
    positions.forEach((p, idx) => {
      if (p.si !== si) return;
      if (!locked && !isNavigable(idx)) return;
      cells.push({
        idx, num: idx + 1, locked,
        answered: isAnswered(idx), flagged: isFlaggedAt(idx), current: !isReview && idx === cur,
      });
    });
    if (cells.length) gridGroups.push({ key: si, label: `C${st.ci + 1} ${['Intake', 'S1', 'S2'][st.sec]}`, locked, cells });
  });
  const reviewGroups = gridGroups.filter((g) => !g.locked);

  const lockLabel = isFinalUnit ? 'Submit exam' : cfg.lockMode === 'section' ? 'Continue to next section' : 'Submit first half';
  const unitName = cfg.lockMode === 'section'
    ? `Case ${ci + 1} · ${secLabel}`
    : (hasHalves ? (halfOfStop(unitStart) === 0 ? `Cases 1–${HALF_CASES}` : `Cases ${HALF_CASES + 1}–${cases.length}`) : `Cases 1–${cases.length}`);

  const narrative = (
    <div className="space-y-4">
      <CaseHeader c={c} caseIdx={ci} totalCases={cases.length} />
      <Narrative c={c} revealThrough={revealThrough} segRefs={segRefs} />
    </div>
  );

  return shell(
    <>
      <TimerBar
        secs={timerSecs}
        examSecs={activeExamSecs}
        caseIdx={ci}
        totalCases={cases.length}
        sectionLabel={isReview ? (cfg.lockMode === 'section' ? `${secLabel} review` : 'Review') : secLabel}
        qNum={isReview ? null : cur + 1}
        qTotal={positions.length}
      />

      <div className="flex-1 lg:min-h-0 w-full max-w-[1280px] mx-auto px-4 py-4 lg:grid lg:grid-cols-2 lg:grid-rows-[minmax(0,1fr)] lg:gap-4">
        {/* LEFT (≥1024px): narrative pane */}
        <div ref={narrPaneRef} className="hidden lg:block relative min-h-0 overflow-y-auto bg-slate-800/50 border border-slate-700/60 rounded-2xl p-5">
          {narrative}
        </div>

        {/* <1024px: collapsible case information */}
        <div className="lg:hidden mb-4 bg-slate-800/50 border border-slate-700/60 rounded-2xl">
          <button
            type="button"
            onClick={() => setInfoOpen((o) => ({ ...o, [ci]: !o[ci] }))}
            className="w-full flex items-center justify-between px-4 py-3 text-sm font-bold text-white"
            aria-expanded={!!infoOpen[ci]}
          >
            Case information
            {infoOpen[ci] ? <ChevronUp className="w-4 h-4 text-slate-400" /> : <ChevronDown className="w-4 h-4 text-slate-400" />}
          </button>
          {infoOpen[ci] && (
            <div className="px-4 pb-4">
              <div className="space-y-4">
                <CaseHeader c={c} caseIdx={ci} totalCases={cases.length} />
                <Narrative c={c} revealThrough={revealThrough} />
              </div>
            </div>
          )}
        </div>

        {/* RIGHT: question / review pane */}
        <div className="flex flex-col lg:min-h-0 bg-slate-800/50 border border-slate-700/60 rounded-2xl">
          <div ref={qPaneRef} className="flex-1 lg:min-h-0 overflow-y-auto p-5">
            {isReview ? (
              <div className="space-y-4">
                <div>
                  <div className="text-xs font-bold uppercase tracking-wide text-slate-500 mb-1">
                    {cfg.lockMode === 'section' ? 'Section Review' : 'Half Review'}
                  </div>
                  <h2 className="text-lg font-bold text-white">{unitName}</h2>
                  <p className="text-sm text-slate-400 mt-1">
                    {unitPositions.length - unitUnanswered} answered · {unitUnanswered} unanswered · {unitFlagged} flagged.
                    Select a question to return to it.
                  </p>
                </div>
                <AnswerGrid groups={reviewGroups} onJump={goTo} large />
                <div className="flex flex-wrap gap-2 pt-2">
                  <button onClick={requestLock} className="bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-bold px-5 py-2.5 rounded-xl transition-colors">
                    {lockLabel} ›
                  </button>
                  <button onClick={() => setView('question')} className="text-sm font-semibold text-slate-400 hover:text-white border border-slate-700/60 hover:border-slate-500 px-4 py-2.5 rounded-xl transition-colors">
                    ‹ Back to question
                  </button>
                </div>
              </div>
            ) : (
              <div>
                <p className="text-lg font-semibold text-white mb-4">{q.question}</p>
                <div className="space-y-2.5">
                  {(q.options || []).map((opt, idx) => {
                    const letter = 'ABCD'[idx];
                    const isChosen = currentAnswer === opt.id;
                    const isStruck = struckIds.includes(opt.id);
                    const cls = isChosen ? 'border-emerald-500/50 bg-emerald-500/10' : 'border-slate-700/60 bg-slate-800/40 hover:border-slate-600';
                    const badge = isChosen ? 'bg-emerald-500 text-slate-900' : 'bg-slate-700 text-slate-300';
                    return (
                      <div key={opt.id} className="flex gap-2 items-stretch">
                        <button
                          type="button"
                          onClick={() => toggleStrikeQ(opt.id)}
                          title="Cross out this option"
                          className={`shrink-0 w-9 rounded-xl border text-sm font-bold transition-colors ${
                            isStruck ? 'border-red-400/60 bg-red-500/10 text-red-400' : 'border-slate-700/60 text-slate-500 hover:border-red-400/50 hover:text-red-400'
                          }`}
                        >
                          ✕
                        </button>
                        <button
                          onClick={() => chooseQ(opt.id)}
                          aria-pressed={isChosen}
                          className={`flex-1 text-left flex gap-3 items-start border rounded-xl p-3.5 transition-colors ${cls} ${isStruck ? 'opacity-40' : ''}`}
                        >
                          <span className={`w-7 h-7 rounded-lg flex items-center justify-center text-sm font-bold shrink-0 ${badge}`}>{letter}</span>
                          <span className={`text-slate-200 ${isStruck ? 'line-through' : ''}`}>{opt.text}</span>
                        </button>
                      </div>
                    );
                  })}
                </div>
                <div className="mt-6 pt-4 border-t border-slate-700/40">
                  <div className="text-xs text-slate-500 mb-2">Answer grid — tap to jump</div>
                  <AnswerGrid groups={gridGroups} onJump={goTo} />
                </div>
              </div>
            )}
          </div>

          {/* Bottom bar */}
          {!isReview && (
            <div className="sticky bottom-0 shrink-0 border-t border-slate-700/60 bg-slate-900/95 lg:bg-transparent rounded-b-2xl px-4 py-3 flex items-center justify-between gap-3">
              <button
                onClick={prevStep}
                disabled={cur <= unitFirstPos}
                className="flex items-center gap-1 text-sm font-semibold text-slate-400 hover:text-white disabled:opacity-30 disabled:cursor-default"
              >
                <ChevronLeft className="w-4 h-4" /> Previous
              </button>
              <button
                onClick={toggleFlag}
                className={`flex items-center gap-1 text-xs font-semibold px-2.5 py-1.5 rounded-lg border transition-colors ${
                  isFlagged ? 'border-amber-500/50 bg-amber-500/10 text-amber-400' : 'border-slate-700/60 text-slate-500 hover:border-slate-500'
                }`}
              >
                <Flag className="w-3 h-3" /> {isFlagged ? 'Flagged' : 'Flag'}
              </button>
              <button
                onClick={nextStep}
                className="bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-bold px-5 py-2.5 rounded-xl transition-colors flex items-center gap-1"
              >
                Next <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      </div>

      {modal === 'lock' && (
        <ConfirmModal
          title={isFinalUnit ? 'Submit exam?' : cfg.lockMode === 'section' ? 'Leave this section?' : 'Submit first half?'}
          confirmLabel={lockLabel}
          onCancel={() => setModal(null)}
          onConfirm={lockUnit}
          body={(
            <>
              {(unitUnanswered > 0 || unitFlagged > 0) && (
                <div>
                  {unitUnanswered > 0 && <>{unitUnanswered} unanswered</>}
                  {unitUnanswered > 0 && unitFlagged > 0 && ' · '}
                  {unitFlagged > 0 && <>{unitFlagged} flagged</>}
                </div>
              )}
              <div className="font-semibold text-white">
                {isFinalUnit
                  ? 'You will not be able to change your answers after submitting.'
                  : cfg.lockMode === 'section'
                  ? 'You will not be able to return to this section.'
                  : `You will not be able to return to cases 1–${HALF_CASES}.`}
              </div>
            </>
          )}
        />
      )}
    </>
  );
}
