// client/src/pages/MockExam.jsx
// Full-length timed NCMHCE mock exam — React port of public/exam.html.
// Items addressed: #2 (React unification), #4 (named exam pre-screen), #5 (exam history saving).
import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
  Clock, Flag, ChevronRight, ChevronLeft, AlertTriangle,
  CheckCircle2, BarChart3, Loader2, Trophy, ArrowLeft, Shuffle,
} from 'lucide-react';
import { authFetch } from '../lib/api';
import { saveBatchToHistory, saveExamToHistory, loadExamHistory, getOutline } from '../lib/readiness';
import { useStudyPing } from '../lib/useStudyPing';

const EXAM_CONFIGS = {
  current: { size: 11, minutes: 225 },
  '2027':  { size: 10, minutes: 225 },
};
function examConfig() { return EXAM_CONFIGS[getOutline()] || EXAM_CONFIGS.current; }
const EXAM_SIZE = 11;    // kept for weightedSelect default; overridden by examConfig() at runtime
const EXAM_MINUTES = 225;
const EXAM_SECS = EXAM_MINUTES * 60;

const BLUEPRINT = {
  Depressive: 20, Anxiety: 20, Trauma: 18, Substance: 16, Personality: 16,
  Bipolar: 12, Neurodevelopmental: 12, 'OCD-Related': 10, Psychotic: 10,
  Eating: 10, Crisis: 10, Disruptive: 8, Somatic: 8, Neurocognitive: 6,
  Dissociative: 6, Sleep: 6, 'Sexual-Gender': 6, Ethics: 6,
};

// ── helpers ───────────────────────────────────────────────────────────────────

function fmtTime(s) {
  const m = Math.floor(s / 60), ss = s % 60;
  return `${String(m).padStart(2, '0')}:${String(ss).padStart(2, '0')}`;
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

function hasDxStep(c) {
  return Array.isArray(c?.differentialOptions) && c.differentialOptions.length > 0;
}

function initAnswers(cases) {
  return cases.map((c) => ({
    dxChosenId: null,
    questions: new Array((c.questions || []).length).fill(null),
    flags: new Array((c.questions || []).length).fill(false),
  }));
}

// ── sub-components ────────────────────────────────────────────────────────────

function TimerBar({ secs, examSecs, caseIdx, totalCases, answeredCount, totalQs }) {
  const warn = secs <= 600 && secs > 300;
  const danger = secs <= 300;
  const pct = Math.round((secs / (examSecs || EXAM_SECS)) * 100);
  return (
    <div className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur border-b border-slate-700/60 px-4 py-2.5 flex items-center justify-between gap-4">
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
      <div className="text-right text-sm">
        <div className="font-bold text-white">Case {caseIdx + 1} of {totalCases}</div>
        <div className="text-xs text-slate-500">{answeredCount}/{totalQs} answered</div>
      </div>
    </div>
  );
}

function CaseNav({ cases, caseIdx, answers, onJump }) {
  return (
    <div className="flex gap-1.5 flex-wrap">
      {cases.map((c, i) => {
        const ans = answers[i];
        const total = c.questions?.length || 0;
        const done = ans ? ans.questions.filter(Boolean).length : 0;
        const complete = done === total && total > 0;
        const current = i === caseIdx;
        return (
          <button
            key={i}
            onClick={() => onJump(i)}
            title={`Case ${i + 1}: ${c.title || ''}`}
            className={`w-8 h-8 rounded-lg text-xs font-bold border transition-colors ${
              current
                ? 'border-emerald-500 bg-emerald-500/20 text-emerald-400'
                : complete
                ? 'border-emerald-500/40 bg-emerald-500/10 text-emerald-400'
                : done > 0
                ? 'border-amber-500/40 bg-amber-500/10 text-amber-400'
                : 'border-slate-700/60 bg-slate-800/40 text-slate-500'
            }`}
          >
            {i + 1}
          </button>
        );
      })}
    </div>
  );
}

// ── Lobby ─────────────────────────────────────────────────────────────────────

function Lobby({ onStart, totalInBank, onBack }) {
  const pastExams = loadExamHistory();
  const examNumber = pastExams.length + 1;
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
          11 cases selected from your {totalInBank ? `${totalInBank}-case` : ''} bank, weighted to the real NCMHCE blueprint.
          Every exam is unique — no two are the same.
        </p>
      </div>

      <div className="grid sm:grid-cols-3 gap-3">
        {[
          { label: '11 cases', sub: `from ${totalInBank || '270+'}+ in bank`, icon: Shuffle, color: 'text-blue-400' },
          { label: '225 min', sub: 'official exam window', icon: Clock, color: 'text-amber-400' },
          { label: 'Blueprint-weighted', sub: '6 NCMHCE domains', icon: BarChart3, color: 'text-emerald-400' },
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
        <div>• Answers lock on click — you cannot change a selected option.</div>
        <div>• Feedback is held until you submit, like the real NCMHCE.</div>
        <div>• You can flag questions and navigate between cases freely.</div>
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

function Results({ cases, answers, timeUsedSecs, examSecs, examMinutes, onRetake, onBack }) {
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

  return (
    <div className="space-y-5">
      {/* Overall score */}
      <div className={`text-center rounded-2xl p-8 border ${passed ? 'bg-emerald-500/10 border-emerald-500/30' : 'bg-amber-500/10 border-amber-500/30'}`}>
        <div className="text-4xl mb-2">{passed ? '🏆' : '📈'}</div>
        <div className="text-5xl font-extrabold text-white">{overallPct}%</div>
        <div className="text-slate-300 mt-1">{totalCorrect} of {totalQs} correct</div>
        <div className="text-sm text-slate-500 mt-1">Time used: {mUsed}m {sUsed}s of {examMinutes || EXAM_MINUTES}m</div>
        <div className={`mt-3 text-sm font-bold ${passed ? 'text-emerald-400' : 'text-amber-400'}`}>
          {passed ? 'Strong performance — above the 70% benchmark.' : 'Keep practicing. 70% is the benchmark.'}
        </div>
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
                  <span className="text-sm text-slate-300 w-32 shrink-0 truncate capitalize">{d.replace(/_/g, ' ')}</span>
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
  const [totalInBank, setTotalInBank] = useState(null);
  const [loadError, setLoadError] = useState(null);
  const [cases, setCases] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [caseIdx, setCaseIdx] = useState(0);
  const [stepIdx, setStepIdx] = useState(0);          // -1 = dx, 0+ = question index
  const [timerSecs, setTimerSecs] = useState(EXAM_SECS);
  const [examStartSecs, setExamStartSecs] = useState(EXAM_SECS);
  const [activeExamSecs, setActiveExamSecs] = useState(EXAM_SECS);
  const [activeExamMinutes, setActiveExamMinutes] = useState(EXAM_MINUTES);
  const [timerExpired, setTimerExpired] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const timerRef = useRef(null);

  // Fetch bank total for lobby display and persist the active outline.
  useEffect(() => {
    authFetch('/api/content?exam=ncmhce')
      .then((r) => r.json())
      .then((d) => {
        try { localStorage.setItem('prp_outline', d.outlineFallback ? 'current' : (d.outline || 'current')); } catch {}
        setTotalInBank(d.total || null);
      })
      .catch(() => {});
  }, []);

  // Timer tick
  useEffect(() => {
    if (phase !== 'exam' || submitted) return;
    timerRef.current = setInterval(() => {
      setTimerSecs((s) => {
        if (s <= 1) {
          clearInterval(timerRef.current);
          setTimerExpired(true);
          return 0;
        }
        return s - 1;
      });
    }, 1000);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [phase, submitted]);

  // Auto-submit on expiry
  useEffect(() => {
    if (timerExpired && phase === 'exam' && !submitted) handleSubmit();
  }, [timerExpired]); // eslint-disable-line

  const handleSubmit = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    setSubmitted(true);
    setPhase('results');
  }, []);

  async function startExam() {
    setPhase('loading');
    setLoadError(null);
    try {
      const r = await authFetch('/api/content?exam=ncmhce');
      const d = await r.json();
      try { localStorage.setItem('prp_outline', d.outlineFallback ? 'current' : (d.outline || 'current')); } catch {}
      const cfg = examConfig();
      const allItems = d.items || [];
      if (allItems.length < 3) throw new Error('Not enough cases in the bank to build an exam.');
      const stubs = weightedSelect(allItems, cfg.size);
      if (stubs.length < 3) throw new Error('Blueprint selection returned too few cases.');

      // Fetch full case data in parallel
      const full = await Promise.all(
        stubs.map((s) =>
          authFetch(`/api/content/${encodeURIComponent(s.externalId)}`)
            .then((rr) => rr.json())
            .then((dd) => {
              const item = dd.item || {};
              return { ...(item.caseSim || item), externalId: s.externalId, category: s.category, difficulty: s.difficulty };
            })
        )
      );

      const startSecs = cfg.minutes * 60;
      setCases(full);
      setAnswers(initAnswers(full));
      setCaseIdx(0);
      setStepIdx(hasDxStep(full[0]) ? -1 : 0);
      setTimerSecs(startSecs);
      setExamStartSecs(startSecs);
      setActiveExamSecs(startSecs);
      setActiveExamMinutes(cfg.minutes);
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
    setCaseIdx(0);
    setStepIdx(0);
    setSubmitted(false);
    setTimerExpired(false);
    setPhase('lobby');
  }

  // ── answer handlers ────────────────────────────────────────────────────────

  function chooseDx(optId) {
    if (answers[caseIdx]?.dxChosenId) return;
    setAnswers((prev) => {
      const next = prev.map((a, i) => i === caseIdx ? { ...a, dxChosenId: optId } : a);
      return next;
    });
  }

  function chooseQ(optId) {
    if (answers[caseIdx]?.questions[stepIdx]) return;
    setAnswers((prev) => {
      const next = prev.map((a, i) => {
        if (i !== caseIdx) return a;
        const qs = [...a.questions];
        qs[stepIdx] = optId;
        return { ...a, questions: qs };
      });
      return next;
    });
  }

  function toggleFlag() {
    if (stepIdx < 0) return;
    setAnswers((prev) => {
      const next = prev.map((a, i) => {
        if (i !== caseIdx) return a;
        const flags = [...a.flags];
        flags[stepIdx] = !flags[stepIdx];
        return { ...a, flags };
      });
      return next;
    });
  }

  // ── navigation ─────────────────────────────────────────────────────────────

  function nextStep() {
    const c = cases[caseIdx];
    const qs = c.questions || [];

    if (stepIdx === -1) {
      // after dx step → first question
      setStepIdx(0);
      return;
    }

    if (stepIdx < qs.length - 1) {
      setStepIdx(stepIdx + 1);
      return;
    }

    // End of case
    if (caseIdx < cases.length - 1) {
      const next = caseIdx + 1;
      setCaseIdx(next);
      setStepIdx(hasDxStep(cases[next]) ? -1 : 0);
    }
    // if last case, do nothing (submit button appears)
  }

  function prevStep() {
    if (stepIdx === -1) return;
    if (stepIdx === 0 && hasDxStep(cases[caseIdx])) { setStepIdx(-1); return; }
    if (stepIdx === 0 && caseIdx > 0) {
      const prev = caseIdx - 1;
      const prevQs = (cases[prev].questions || []).length;
      setCaseIdx(prev);
      setStepIdx(prevQs - 1);
      return;
    }
    if (stepIdx > 0) { setStepIdx(stepIdx - 1); return; }
  }

  function jumpToCase(idx) {
    if (idx < 0 || idx >= cases.length) return;
    setCaseIdx(idx);
    setStepIdx(hasDxStep(cases[idx]) ? -1 : 0);
  }

  // ── computed values ────────────────────────────────────────────────────────

  const totalAnswered = answers.reduce((s, a) => s + a.questions.filter(Boolean).length, 0);
  const totalQs = cases.reduce((s, c) => s + (c.questions?.length || 0), 0);

  const allComplete = cases.length > 0 && cases.every((c, i) => {
    const qs = c.questions || [];
    return answers[i]?.questions.filter(Boolean).length === qs.length;
  });

  const atLastCase = caseIdx === cases.length - 1;
  const c = cases[caseIdx];
  const ea = answers[caseIdx];

  // ── render phases ──────────────────────────────────────────────────────────

  if (phase === 'lobby') {
    return (
      <div className="space-y-4">
        <Lobby onStart={startExam} totalInBank={totalInBank} onBack={() => navigate('home')} />
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
        <div className="text-slate-400 text-sm">Selecting 11 cases weighted to the NCMHCE blueprint</div>
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
        onRetake={retake}
        onBack={() => navigate('home')}
      />
    );
  }

  // ── EXAM phase ─────────────────────────────────────────────────────────────

  if (!c || !ea) return null;

  const qs = c.questions || [];
  const dx = c.diagnosis || c.primaryDiagnosis || {};
  const isDxStep = stepIdx === -1;
  const isFlagged = !isDxStep && ea.flags[stepIdx];
  const currentAnswer = isDxStep ? ea.dxChosenId : ea.questions[stepIdx];
  const isLastQ = stepIdx === qs.length - 1;
  const isLastCase = caseIdx === cases.length - 1;

  return (
    <div className="space-y-4">
      <TimerBar
        secs={timerSecs}
        examSecs={activeExamSecs}
        caseIdx={caseIdx}
        totalCases={cases.length}
        answeredCount={totalAnswered}
        totalQs={totalQs}
      />

      {/* Case header */}
      <div className="flex items-start justify-between gap-3">
        <div>
          <div className="flex items-center gap-2 flex-wrap mb-1">
            <span className="text-xs font-bold text-slate-500">Case {caseIdx + 1} of {cases.length}</span>
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
      </div>

      {/* Vignette */}
      <div className="bg-slate-800/50 border border-slate-700/60 rounded-2xl p-5 space-y-3">
        {['intake', 'session1', 'session2'].map((seg) => c.narrative?.[seg] && (
          <div key={seg}>
            <div className={`text-xs font-bold uppercase tracking-wide mb-1 ${
              seg === 'intake' ? 'text-emerald-400' : seg === 'session1' ? 'text-blue-400' : 'text-amber-400'
            }`}>
              {seg === 'intake' ? 'Intake' : seg === 'session1' ? 'Session 1' : 'Session 2'}
            </div>
            <p className="text-slate-200 leading-relaxed">{c.narrative[seg]}</p>
          </div>
        ))}
        {!isDxStep && dx.name && (
          <div className="bg-purple-500/10 border border-purple-500/25 rounded-xl p-3">
            <div className="text-xs font-bold uppercase tracking-wide text-purple-400 mb-1">Working diagnosis</div>
            <div className="text-white font-bold">{dx.name} {dx.code && <span className="text-slate-400 font-normal">({dx.code})</span>}</div>
          </div>
        )}
      </div>

      {/* Dx step */}
      {isDxStep && (
        <div className="bg-slate-800/50 border border-slate-700/60 rounded-2xl p-5">
          <p className="text-lg font-semibold text-white mb-4">What is the most likely primary diagnosis?</p>
          <div className="space-y-2.5">
            {(c.differentialOptions || []).map((opt, idx) => {
              const letter = 'ABCDE'[idx];
              const isChosen = currentAnswer === opt.id;
              const cls = currentAnswer
                ? isChosen ? 'border-emerald-500/50 bg-emerald-500/10' : 'border-slate-700/40 bg-slate-800/20 opacity-60'
                : 'border-slate-700/60 bg-slate-800/40 hover:border-slate-600';
              const badge = currentAnswer && isChosen ? 'bg-emerald-500 text-slate-900' : 'bg-slate-700 text-slate-300';
              return (
                <button
                  key={opt.id}
                  onClick={() => chooseDx(opt.id)}
                  disabled={!!currentAnswer}
                  className={`w-full text-left flex gap-3 items-start border rounded-xl p-3.5 transition-colors ${cls}`}
                >
                  <span className={`w-7 h-7 rounded-lg flex items-center justify-center text-sm font-bold shrink-0 ${badge}`}>{letter}</span>
                  <span className="text-slate-200">{opt.text}</span>
                </button>
              );
            })}
          </div>
          {currentAnswer && (
            <button onClick={() => setStepIdx(0)} className="mt-4 bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-bold px-5 py-2.5 rounded-xl">
              Begin case questions ›
            </button>
          )}
        </div>
      )}

      {/* Question */}
      {!isDxStep && qs[stepIdx] && (
        <div className="bg-slate-800/50 border border-slate-700/60 rounded-2xl p-5">
          <div className="flex items-center justify-between mb-1">
            <span className="text-sm text-slate-500">Question {stepIdx + 1} of {qs.length}</span>
            <button
              onClick={toggleFlag}
              className={`flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-lg border transition-colors ${
                isFlagged ? 'border-amber-500/50 bg-amber-500/10 text-amber-400' : 'border-slate-700/60 text-slate-500 hover:border-slate-500'
              }`}
            >
              <Flag className="w-3 h-3" /> {isFlagged ? 'Flagged' : 'Flag'}
            </button>
          </div>
          <div className="h-1.5 bg-slate-700 rounded-full mb-4 overflow-hidden">
            <div className="h-full bg-emerald-500 rounded-full" style={{ width: `${((stepIdx + 1) / qs.length) * 100}%` }} />
          </div>
          <p className="text-lg font-semibold text-white mb-4">{qs[stepIdx].question}</p>
          <div className="space-y-2.5">
            {(qs[stepIdx].options || []).map((opt, idx) => {
              const letter = 'ABCD'[idx];
              const isChosen = currentAnswer === opt.id;
              const cls = currentAnswer
                ? isChosen ? 'border-emerald-500/50 bg-emerald-500/10' : 'border-slate-700/40 bg-slate-800/20 opacity-60'
                : 'border-slate-700/60 bg-slate-800/40 hover:border-slate-600';
              const badge = currentAnswer && isChosen ? 'bg-emerald-500 text-slate-900' : 'bg-slate-700 text-slate-300';
              return (
                <button
                  key={opt.id}
                  onClick={() => chooseQ(opt.id)}
                  disabled={!!currentAnswer}
                  className={`w-full text-left flex gap-3 items-start border rounded-xl p-3.5 transition-colors ${cls}`}
                >
                  <span className={`w-7 h-7 rounded-lg flex items-center justify-center text-sm font-bold shrink-0 ${badge}`}>{letter}</span>
                  <span className="text-slate-200">{opt.text}</span>
                </button>
              );
            })}
          </div>
          {currentAnswer && (
            <div className="mt-4 text-sm text-slate-500 italic">
              Answer locked. Feedback held until you submit.
            </div>
          )}
        </div>
      )}

      {/* Navigation */}
      <div className="flex items-center justify-between gap-3">
        <button
          onClick={prevStep}
          disabled={caseIdx === 0 && stepIdx <= (hasDxStep(c) ? -1 : 0)}
          className="flex items-center gap-1 text-sm font-semibold text-slate-400 hover:text-white disabled:opacity-30 disabled:cursor-default"
        >
          <ChevronLeft className="w-4 h-4" /> Back
        </button>

        <div className="flex items-center gap-2">
          {isLastQ && isLastCase && allComplete ? (
            <button
              onClick={handleSubmit}
              className="bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-bold px-5 py-2.5 rounded-xl transition-colors"
            >
              Submit exam ›
            </button>
          ) : currentAnswer || isDxStep ? (
            <button
              onClick={nextStep}
              className="bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-bold px-5 py-2.5 rounded-xl transition-colors flex items-center gap-1"
            >
              {isLastQ && !isLastCase ? 'Next case' : 'Next'} <ChevronRight className="w-4 h-4" />
            </button>
          ) : null}

          {allComplete && !(isLastQ && isLastCase) && (
            <button
              onClick={handleSubmit}
              className="text-sm font-semibold text-slate-400 hover:text-white border border-slate-700/60 hover:border-slate-500 px-3 py-2 rounded-xl transition-colors"
            >
              Submit now
            </button>
          )}
        </div>
      </div>

      {/* Case navigator */}
      <div className="bg-slate-800/40 border border-slate-700/40 rounded-xl p-3">
        <div className="text-xs text-slate-500 mb-2">Case navigator — tap to jump</div>
        <CaseNav cases={cases} caseIdx={caseIdx} answers={answers} onJump={jumpToCase} />
      </div>
    </div>
  );
}
