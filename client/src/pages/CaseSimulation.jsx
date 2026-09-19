import React, { useState, useEffect } from 'react';
import { ArrowLeft, MessageSquare, Loader2, ClipboardList, Target, ArrowRight, TrendingUp, TrendingDown } from 'lucide-react';
import {
  saveToHistory, loadHistory, loadCaseStats, computeReadiness,
  domainMisses, DOMAIN_CATEGORY_MAP,
} from '../lib/readiness';
import { authFetch } from '../lib/api';
import { useStudyPing } from '../lib/useStudyPing';
import SimDisclaimer from '../components/SimDisclaimer';

// Pick the case to hand them next: prefer one they haven't done, in a category
// that exercises whichever domain they just dropped points in. Falls back
// gracefully when they've either mastered everything or missed nothing.
function pickNextCase(catalog, misses, stats, currentId) {
  const pool = catalog.filter((c) => c.externalId && c.externalId !== currentId);
  if (pool.length === 0) return null;
  const fresh = pool.filter((c) => !stats[c.externalId]);
  const base = fresh.length ? fresh : pool;

  const targetCats = new Set();
  misses.slice(0, 2).forEach((m) => (DOMAIN_CATEGORY_MAP[m.domain] || []).forEach((c) => targetCats.add(c)));
  const targeted = base.filter((c) => targetCats.has(c.category));

  const list = targeted.length ? targeted : base;
  return list[Math.floor(Math.random() * list.length)] || null;
}

export default function CaseSimulation({ caseId, mode, examMode = false, onBack, navigate }) {
  useStudyPing('cases');
  const [caseData, setCaseData] = useState(null);
  const [qi, setQi] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [phase, setPhase] = useState(mode === 'classic' ? 'diagnose' : 'answer');
  const [dxChoice, setDxChoice] = useState(null);
  const [done, setDone] = useState(false);
  const [debrief, setDebrief] = useState(null);
  const [debriefLoading, setDebriefLoading] = useState(false);
  const [debriefError, setDebriefError] = useState(null);
  const [caseCategory, setCaseCategory] = useState(null);
  const [disclaimerAccepted, setDisclaimerAccepted] = useState(false);
  const [showReview, setShowReview] = useState(false);
  // Accuracy across every earlier case, snapshotted before this attempt is
  // saved — so the results screen can say whether this one beat their average.
  const [priorPct, setPriorPct] = useState(null);
  const [catalog, setCatalog] = useState([]);
  const [nextCase, setNextCase] = useState(null);

  useEffect(() => {
    // A new case can arrive without unmounting (the "next case" button on the
    // results screen swaps the prop), so clear everything the old case left.
    setCaseData(null);
    setQi(0);
    setAnswers([]);
    setPhase(mode === 'classic' ? 'diagnose' : 'answer');
    setDxChoice(null);
    setDone(false);
    setDebrief(null);
    setDebriefError(null);
    setShowReview(false);
    setNextCase(null);
    setPriorPct(null);
    // Each simulation gets its own disclaimer (SimDisclaimer rotates versions
    // by simulation number), so jumping straight into the next case must show
    // it again rather than inheriting the last case's acceptance.
    setDisclaimerAccepted(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });

    authFetch('/api/content/' + encodeURIComponent(caseId))
      .then((r) => r.json())
      .then((d) => { const item = d.item || {}; const c = item.caseSim || item; setCaseData(c); setCaseCategory(item.category || c.category || null); setAnswers(new Array((c.questions || []).length).fill(null)); })
      .catch(() => {});
  }, [caseId, mode]);

  // The catalog powers the "next case" suggestion. Fetched once alongside the
  // case so the results screen has it ready the moment they finish.
  useEffect(() => {
    authFetch('/api/content?exam=ncmhce')
      .then((r) => r.json())
      .then((d) => {
        try { localStorage.setItem('prp_outline', d.outlineFallback ? 'current' : (d.outline || 'current')); } catch {}
        setCatalog(d.items || []);
      })
      .catch(() => {});
  }, []);

  if (!caseData) return <p className="text-slate-400">Loading case…</p>;

  // Simulation disclaimer — shown before the case starts
  // Simulation number = total completed cases + 1
  if (!disclaimerAccepted) {
    const history = loadHistory();
    const simNumber = (history.length % 20) + 1;
    return <SimDisclaimer simNumber={simNumber} onAccept={() => setDisclaimerAccepted(true)} />;
  }

  const dx = caseData.diagnosis || caseData.primaryDiagnosis || {};
  const qs = caseData.questions || [];
  const currentQ = qs[qi];
  const currentA = answers[qi];

  function choose(optId) {
    if (currentA) return; // submissions lock, mirroring the real exam
    const newAnswers = [...answers];
    newAnswers[qi] = { chosenId: optId };
    setAnswers(newAnswers);
  }

  function next() {
    if (qi < qs.length - 1) { setQi(qi + 1); window.scrollTo({ top: 0, behavior: 'smooth' }); }
    else {
      // Snapshot the running average BEFORE this attempt lands in history,
      // otherwise we'd be comparing this case against itself.
      const before = computeReadiness();
      setPriorPct(before && before.totalCases > 0 ? before.overallPct : null);

      setDone(true);
      saveToHistory(caseData, answers, dxChoice != null ? !!(caseData.differentialOptions || []).find(o => o.isCorrect && o.id === dxChoice) : null, caseCategory);

      // Resolve the follow-up case once, here — doing it during render would
      // reshuffle the suggestion on every state change.
      setNextCase(pickNextCase(catalog, domainMisses(qs, answers), loadCaseStats(), caseId));
    }
  }

  async function runDebrief() {
    setDebriefLoading(true);
    setDebriefError(null);
    try {
      const res = await authFetch('/api/debrief', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ caseData, answers, mode }),
      });
      if (!res.ok) throw new Error((await res.json().catch(() => ({}))).error || 'Request failed');
      const data = await res.json();
      setDebrief(data.debrief);
    } catch (e) {
      setDebriefError(e.message);
    } finally {
      setDebriefLoading(false);
    }
  }

  if (done) {
    const correct = answers.filter((a, i) => a && qs[i].options.find(o => o.id === a.chosenId)?.isCorrect).length;
    const pct = Math.round(correct / qs.length * 100);

    if (showReview) {
      return (
        <div className="space-y-4">
          <button onClick={() => setShowReview(false)} className="text-sm text-slate-400 hover:text-white flex items-center gap-1">
            <ArrowLeft className="w-4 h-4" /> Back to results
          </button>
          <div className="bg-slate-800/50 border border-slate-700/60 rounded-2xl p-5">
            <h2 className="text-lg font-bold text-white mb-1">{caseData.title}</h2>
            {caseData.narrative?.intake && (
              <p className="text-sm text-slate-400 mt-0.5">Client: {caseData.narrative.intake.split('.')[0]}</p>
            )}
            <div className={`inline-block mt-2 text-sm font-bold px-3 py-1 rounded-full ${pct >= 70 ? 'bg-emerald-500/15 text-emerald-400' : 'bg-amber-500/15 text-amber-400'}`}>
              {correct}/{qs.length} correct ({pct}%)
            </div>
          </div>
          <div className="space-y-3">
            {qs.map((q, i) => {
              const a = answers[i];
              const chosen = a && q.options.find(o => o.id === a.chosenId);
              const keyed = q.options.find(o => o.isCorrect);
              const ok = !!(chosen && chosen.isCorrect);
              const rationale = (keyed && keyed.explanation && keyed.explanation.rationale) || (keyed && keyed.rationale);
              return (
                <div key={q.id || i} className="bg-slate-800/50 border border-slate-700/60 rounded-2xl p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${ok ? 'bg-emerald-500/15 text-emerald-400' : 'bg-red-500/15 text-red-400'}`}>
                      {ok ? '✓ Correct' : '✗ Incorrect'}
                    </span>
                    <span className="text-xs text-slate-500">Question {i + 1} of {qs.length}</span>
                  </div>
                  <p className="text-white font-semibold mb-3">{q.question}</p>
                  <div className="space-y-2">
                    {(q.options || []).map((opt, idx) => {
                      const letter = 'ABCD'[idx];
                      const isChosen = a && opt.id === a.chosenId;
                      const isCorrect = opt.isCorrect;
                      let cls = 'border-slate-700/40 bg-slate-800/20 opacity-50';
                      let badge = 'bg-slate-700 text-slate-300';
                      if (isCorrect) { cls = 'border-emerald-500/50 bg-emerald-500/10'; badge = 'bg-emerald-500 text-slate-900'; }
                      else if (isChosen) { cls = 'border-red-500/50 bg-red-500/10'; badge = 'bg-red-500 text-white'; }
                      return (
                        <div key={opt.id} className={`flex gap-3 items-start border rounded-xl p-3 ${cls}`}>
                          <span className={`w-7 h-7 rounded-lg flex items-center justify-center text-sm font-bold shrink-0 ${badge}`}>{letter}</span>
                          <div className="flex-1">
                            <span className="text-slate-200">{opt.text}</span>
                            {isChosen && !isCorrect && <span className="text-xs text-red-400 ml-2">(your answer)</span>}
                            {isCorrect && isChosen && <span className="text-xs text-emerald-400 ml-2">(your answer)</span>}
                            {isCorrect && !isChosen && <span className="text-xs text-emerald-400 ml-2">(correct answer)</span>}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  {rationale && (
                    <div className="mt-3 bg-blue-500/8 border border-blue-500/20 rounded-xl p-3">
                      <div className="text-xs font-bold uppercase tracking-wide text-blue-400 mb-1">Rationale</div>
                      <p className="text-sm text-slate-300 leading-relaxed">{rationale}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
          <button onClick={() => setShowReview(false)}
            className="bg-slate-700 hover:bg-slate-600 text-white font-bold px-4 py-2.5 rounded-xl transition-colors">
            Back to results
          </button>
        </div>
      );
    }

    const misses = domainMisses(qs, answers);
    const delta = priorPct != null ? pct - priorPct : null;

    return (
      <div className="space-y-4">
        <div className={`text-center rounded-2xl p-8 border ${pct >= 70 ? 'bg-emerald-500/10 border-emerald-500/30' : 'bg-amber-500/10 border-amber-500/30'}`}>
          <div className="text-4xl mb-2">{pct >= 70 ? '🏆' : '📈'}</div>
          <div className="text-4xl font-extrabold text-white">{pct}%</div>
          <div className="text-slate-300 mt-1">{correct} of {qs.length} correct</div>
          {delta !== null && (
            <div className={`mt-3 inline-flex items-center gap-1.5 text-sm font-semibold px-3 py-1 rounded-full ${
              delta > 0 ? 'text-emerald-400 bg-emerald-500/10' : delta < 0 ? 'text-amber-400 bg-amber-500/10' : 'text-slate-400 bg-slate-700/40'
            }`}>
              {delta > 0 && <TrendingUp className="w-4 h-4" />}
              {delta < 0 && <TrendingDown className="w-4 h-4" />}
              {delta === 0
                ? `Right on your ${priorPct}% average`
                : `${delta > 0 ? '+' : ''}${delta} points vs your ${priorPct}% average`}
            </div>
          )}
        </div>
        <div className="flex gap-3 flex-wrap">
          <button onClick={() => { setQi(0); setAnswers(new Array(qs.length).fill(null)); setDone(false); setDxChoice(null); setPhase(mode === 'classic' ? 'diagnose' : 'answer'); setDebrief(null); setDebriefError(null); setShowReview(false); }}
            className="bg-slate-700 hover:bg-slate-600 text-white font-bold px-4 py-2.5 rounded-xl transition-colors">Retry</button>
          <button onClick={() => { setShowReview(true); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="bg-blue-600 hover:bg-blue-500 text-white font-bold px-4 py-2.5 rounded-xl transition-colors flex items-center gap-2">
            <ClipboardList className="w-4 h-4" /> Review Questions
          </button>
          <button onClick={onBack}
            className="bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-bold px-4 py-2.5 rounded-xl transition-colors">More cases</button>
        </div>

        {/* Where to go next — a score on its own is a dead end */}
        <div className="bg-slate-800/50 border border-slate-700/60 rounded-2xl p-5">
          <div className="flex items-center gap-2 mb-3">
            <Target className="w-5 h-5 text-emerald-400" />
            <h2 className="text-lg font-bold text-white">What to work on next</h2>
          </div>

          {misses.length === 0 ? (
            <p className="text-sm text-slate-300 mb-3">
              Clean sweep — no missed questions on this case. Keep the momentum going with a fresh one.
            </p>
          ) : (
            <>
              <p className="text-xs text-slate-500 mb-2">Your misses on this case, by NCMHCE domain:</p>
              <div className="flex flex-wrap gap-1.5 mb-3">
                {misses.map((m) => (
                  <span key={m.domain} className="text-xs font-bold text-amber-400 bg-amber-500/15 px-2.5 py-1 rounded-full">
                    {m.label} — {m.missed} of {m.total} missed
                  </span>
                ))}
              </div>
            </>
          )}

          {nextCase && (
            <>
              <button
                onClick={() => navigate('cases', { caseId: nextCase.externalId })}
                className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-bold px-4 py-2.5 rounded-xl transition-colors"
              >
                Next case: {nextCase.title} <ArrowRight className="w-4 h-4" />
              </button>
              <p className="text-xs text-slate-500 mt-2">
                {misses.length > 0
                  ? `Picked to give you more practice in ${misses[0].label}.`
                  : 'A case you haven’t worked through yet.'}
              </p>
            </>
          )}
        </div>

        {/* Exam-mode case review — feedback was held until the end, like the real NCMHCE */}
        {examMode && (
          <div className="bg-slate-800/50 border border-slate-700/60 rounded-2xl p-5">
            <h2 className="text-lg font-bold text-white mb-1">Case review</h2>
            <p className="text-xs text-slate-500 mb-3">
              On the real exam, feedback is held until you finish the case. Here's how each answer scored.
            </p>
            <div className="space-y-3">
              {qs.map((q, i) => {
                const a = answers[i];
                const chosen = a && q.options.find(o => o.id === a.chosenId);
                const keyed = q.options.find(o => o.isCorrect);
                const ok = !!(chosen && chosen.isCorrect);
                const rationale = (keyed && keyed.explanation && keyed.explanation.rationale) || (keyed && keyed.rationale);
                return (
                  <div key={q.id || i} className="border-t border-slate-700/40 pt-3 first:border-t-0 first:pt-0">
                    <div className="text-sm font-semibold text-white">Q{i + 1}. {q.question}</div>
                    <div className={`text-sm mt-1 font-semibold ${ok ? 'text-emerald-400' : 'text-red-400'}`}>
                      {ok ? '✓ Correct' : '✗ Incorrect'}
                      <span className="font-normal text-slate-400"> — you chose: {chosen ? chosen.text : '(no answer)'}</span>
                    </div>
                    {!ok && keyed && (
                      <div className="text-sm text-slate-300 mt-0.5">Best answer: {keyed.text}</div>
                    )}
                    {rationale && <p className="text-sm text-slate-400 mt-1">{rationale}</p>}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* AI Debrief */}
        <div className="bg-slate-800/50 border border-slate-700/60 rounded-2xl p-5">
          <div className="flex items-center gap-2 mb-1">
            <MessageSquare className="w-5 h-5 text-purple-400" />
            <h2 className="text-lg font-bold text-white">AI clinical debrief</h2>
          </div>
          <p className="text-xs text-slate-500 mb-3">
            Dr. Claire Moreau reviews your answers — strengths, growth areas, and an NCMHCE exam tip for this case.
          </p>
          {!debrief && (
            <button
              onClick={runDebrief}
              disabled={debriefLoading}
              className="bg-purple-600 hover:bg-purple-500 disabled:opacity-50 text-white font-bold px-4 py-2 rounded-xl transition-colors flex items-center gap-2"
            >
              {debriefLoading && <Loader2 className="w-4 h-4 animate-spin" />}
              {debriefLoading ? 'Analyzing…' : 'Get debrief'}
            </button>
          )}
          {debriefError && (
            <div className="mt-3 text-sm text-red-400">Debrief failed: {debriefError}</div>
          )}
          {debrief && (
            <div className="mt-3 bg-purple-500/8 border border-purple-500/20 rounded-xl p-4">
              <div className="text-xs font-bold uppercase tracking-wide text-purple-400 mb-2">Dr. Claire Moreau — Clinical Debrief</div>
              <div className="text-slate-200 leading-relaxed whitespace-pre-wrap text-sm">{debrief}</div>
              <div className="text-xs text-slate-600 italic mt-3">AI-generated feedback for learning purposes. Not a substitute for licensed clinical supervision.</div>
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <button onClick={onBack} className="text-sm text-slate-400 hover:text-white flex items-center gap-1">
        <ArrowLeft className="w-4 h-4" /> All cases
      </button>
      <div className="flex items-center gap-2 flex-wrap">
        <h1 className="text-xl font-bold text-white">{caseData.title}</h1>
        {examMode && (
          <span className="text-xs font-bold text-amber-400 bg-amber-500/15 px-2 py-0.5 rounded-full">Exam mode</span>
        )}
      </div>

      {/* Vignette */}
      <div className="bg-slate-800/50 border border-slate-700/60 rounded-2xl p-5 space-y-3">
        {['intake', 'session1', 'session2'].map((seg) => caseData.narrative?.[seg] && (
          <div key={seg}>
            <div className="text-xs font-bold uppercase tracking-wide text-emerald-400 mb-1">
              {seg === 'intake' ? 'Intake' : seg === 'session1' ? 'Session 1' : 'Session 2'}
            </div>
            <p className="text-slate-200 leading-relaxed">{caseData.narrative[seg]}</p>
          </div>
        ))}
        {dx.name && phase === 'answer' && (
          <div className="bg-purple-500/10 border border-purple-500/25 rounded-xl p-3">
            <div className="text-xs font-bold uppercase tracking-wide text-purple-400 mb-1">Working diagnosis</div>
            <div className="text-white font-bold">{dx.name} {dx.code && <span className="text-slate-400 font-normal">({dx.code})</span>}</div>
          </div>
        )}
      </div>

      {/* Question */}
      {currentQ && (
        <div className="bg-slate-800/50 border border-slate-700/60 rounded-2xl p-5">
          <div className="text-sm text-slate-500 mb-1">Question {qi + 1} of {qs.length}</div>
          <div className="h-1.5 bg-slate-700 rounded-full mb-4"><div className="h-full bg-emerald-500 rounded-full transition-all" style={{ width: `${(qi / qs.length) * 100}%` }} /></div>
          <p className="text-lg font-semibold text-white mb-4">{currentQ.question}</p>
          <div className="space-y-2.5">
            {(currentQ.options || []).map((opt, idx) => {
              const letter = 'ABCD'[idx];
              const isChosen = currentA && opt.id === currentA.chosenId;
              let cls = 'border-slate-700/60 bg-slate-800/40 hover:border-slate-600';
              let badge = 'bg-slate-700 text-slate-300';
              if (currentA) {
                if (examMode) {
                  // No reveal in exam mode — only show what you picked.
                  cls = isChosen ? 'border-emerald-500/50 bg-emerald-500/10' : 'border-slate-700/40 bg-slate-800/20 opacity-60';
                  badge = isChosen ? 'bg-emerald-500 text-slate-900' : 'bg-slate-700 text-slate-300';
                } else {
                  if (opt.isCorrect) { cls = 'border-emerald-500/50 bg-emerald-500/10'; badge = 'bg-emerald-500 text-slate-900'; }
                  else if (isChosen) { cls = 'border-red-500/50 bg-red-500/10'; badge = 'bg-red-500 text-white'; }
                  else { cls = 'border-slate-700/40 bg-slate-800/20 opacity-50'; }
                }
              }
              return (
                <button key={opt.id} onClick={() => choose(opt.id)} disabled={!!currentA}
                  className={`w-full text-left flex gap-3 items-start border rounded-xl p-3.5 transition-colors ${cls}`}>
                  <span className={`w-7 h-7 rounded-lg flex items-center justify-center text-sm font-bold shrink-0 ${badge}`}>{letter}</span>
                  <span className="text-slate-200">{opt.text}</span>
                </button>
              );
            })}
          </div>
          {currentA && (
            <div className="mt-4 space-y-2">
              {!examMode && (() => {
                const chosen = currentQ.options.find(o => o.id === currentA.chosenId);
                const correct = currentQ.options.find(o => o.isCorrect);
                const ok = chosen?.isCorrect;
                const refs = (caseData.references || []).filter(r => (currentQ.evidenceRef || []).includes(r.id));
                return (
                  <>
                    <div className={`font-bold ${ok ? 'text-emerald-400' : 'text-red-400'}`}>{ok ? '✓ Correct' : '✗ Not quite'}</div>
                    {!ok && chosen?.rationale && <p className="text-sm text-slate-400">{chosen.rationale}</p>}
                    {!ok && chosen?.explanation?.commonMistake && (
                      <p className="text-sm text-amber-400/80">Common mistake: {chosen.explanation.commonMistake}</p>
                    )}
                    {correct?.explanation?.rationale && <p className="text-sm text-slate-300">{correct.explanation.rationale}</p>}
                    {correct?.explanation?.keyIndicators?.length > 0 && (
                      <div className="text-sm text-slate-400">
                        <span className="font-semibold text-slate-300">Key indicators: </span>
                        {correct.explanation.keyIndicators.join(' · ')}
                      </div>
                    )}
                    {refs.length > 0 && (
                      <div className="mt-2 bg-blue-500/8 border border-blue-500/20 rounded-xl p-3">
                        <div className="text-xs font-bold uppercase tracking-wide text-blue-400 mb-1">Evidence</div>
                        {refs.map((ref) => (
                          <div key={ref.id} className="text-sm text-slate-300 mt-1">
                            <span className="font-semibold">{ref.source}</span>
                            {ref.detail && <span className="text-slate-400"> — {ref.detail}</span>}
                          </div>
                        ))}
                      </div>
                    )}
                  </>
                );
              })()}
              {examMode && (
                <div className="text-sm text-slate-500 italic">Answer locked. Feedback comes at the end of the case.</div>
              )}
              <button onClick={next} className="bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-bold px-5 py-2.5 rounded-xl transition-colors mt-2">
                {qi < qs.length - 1 ? 'Next question ›' : 'See results'}
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
