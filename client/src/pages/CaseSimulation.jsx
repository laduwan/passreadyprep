import React, { useState, useEffect } from 'react';
import { ArrowLeft, CheckCircle2, X as XIcon, MessageSquare, Loader2 } from 'lucide-react';
import { saveToHistory } from '../lib/readiness';

export default function CaseSimulation({ caseId, mode, onBack, navigate }) {
  const [caseData, setCaseData] = useState(null);
  const [qi, setQi] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [phase, setPhase] = useState(mode === 'classic' ? 'diagnose' : 'answer');
  const [dxChoice, setDxChoice] = useState(null);
  const [done, setDone] = useState(false);
  const [debrief, setDebrief] = useState(null);
  const [debriefLoading, setDebriefLoading] = useState(false);
  const [debriefError, setDebriefError] = useState(null);
  const [apiKey, setApiKey] = useState(() => {
    try { return sessionStorage.getItem('prp_api_key') || ''; } catch { return ''; }
  });

  useEffect(() => {
    fetch('/api/content/' + encodeURIComponent(caseId))
      .then((r) => r.json())
      .then((d) => { const c = d.item?.caseSim || d.item; setCaseData(c); setAnswers(new Array((c.questions || []).length).fill(null)); })
      .catch(() => {});
  }, [caseId]);

  if (!caseData) return <p className="text-slate-400">Loading case…</p>;

  const dx = caseData.diagnosis || caseData.primaryDiagnosis || {};
  const qs = caseData.questions || [];
  const currentQ = qs[qi];
  const currentA = answers[qi];

  function choose(optId) {
    if (currentA) return;
    const newAnswers = [...answers];
    newAnswers[qi] = { chosenId: optId };
    setAnswers(newAnswers);
  }

  function next() {
    if (qi < qs.length - 1) { setQi(qi + 1); window.scrollTo({ top: 0, behavior: 'smooth' }); }
    else {
      setDone(true);
      saveToHistory(caseData, answers, dxChoice != null ? !!(caseData.differentialOptions || []).find(o => o.isCorrect && o.id === dxChoice) : null);
    }
  }

  async function runDebrief() {
    if (!apiKey.trim()) return;
    try { sessionStorage.setItem('prp_api_key', apiKey); } catch {}
    setDebriefLoading(true);
    setDebriefError(null);
    try {
      const res = await fetch('/api/debrief', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ caseData, answers, mode, apiKey }),
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
    return (
      <div className="space-y-4">
        <div className={`text-center rounded-2xl p-8 border ${pct >= 70 ? 'bg-emerald-500/10 border-emerald-500/30' : 'bg-amber-500/10 border-amber-500/30'}`}>
          <div className="text-4xl mb-2">{pct >= 70 ? '🏆' : '📈'}</div>
          <div className="text-4xl font-extrabold text-white">{pct}%</div>
          <div className="text-slate-300 mt-1">{correct} of {qs.length} correct</div>
        </div>
        <div className="flex gap-3">
          <button onClick={() => { setQi(0); setAnswers(new Array(qs.length).fill(null)); setDone(false); setDxChoice(null); setPhase(mode === 'classic' ? 'diagnose' : 'answer'); setDebrief(null); setDebriefError(null); }}
            className="bg-slate-700 hover:bg-slate-600 text-white font-bold px-4 py-2.5 rounded-xl transition-colors">Retry</button>
          <button onClick={onBack}
            className="bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-bold px-4 py-2.5 rounded-xl transition-colors">More cases</button>
        </div>

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
            <>
              <div className="flex gap-2 items-center flex-wrap">
                <input
                  type="password"
                  value={apiKey}
                  onChange={(e) => setApiKey(e.target.value)}
                  placeholder="Anthropic API key"
                  className="flex-1 min-w-[200px] bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-white text-sm"
                />
                <button
                  onClick={runDebrief}
                  disabled={debriefLoading || !apiKey.trim()}
                  className="bg-purple-600 hover:bg-purple-500 disabled:opacity-50 text-white font-bold px-4 py-2 rounded-xl transition-colors flex items-center gap-2"
                >
                  {debriefLoading && <Loader2 className="w-4 h-4 animate-spin" />}
                  {debriefLoading ? 'Analyzing…' : 'Get debrief'}
                </button>
              </div>
              <p className="text-xs text-slate-600 mt-1.5">Used for this request only. Not stored on our server.</p>
            </>
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
      <h1 className="text-xl font-bold text-white">{caseData.title}</h1>

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
              let cls = 'border-slate-700/60 bg-slate-800/40 hover:border-slate-600';
              if (currentA) {
                if (opt.isCorrect) cls = 'border-emerald-500/50 bg-emerald-500/10';
                else if (opt.id === currentA.chosenId) cls = 'border-red-500/50 bg-red-500/10';
                else cls = 'border-slate-700/40 bg-slate-800/20 opacity-50';
              }
              return (
                <button key={opt.id} onClick={() => choose(opt.id)} disabled={!!currentA}
                  className={`w-full text-left flex gap-3 items-start border rounded-xl p-3.5 transition-colors ${cls}`}>
                  <span className={`w-7 h-7 rounded-lg flex items-center justify-center text-sm font-bold shrink-0 ${
                    currentA && opt.isCorrect ? 'bg-emerald-500 text-slate-900' :
                    currentA && opt.id === currentA.chosenId ? 'bg-red-500 text-white' : 'bg-slate-700 text-slate-300'}`}>{letter}</span>
                  <span className="text-slate-200">{opt.text}</span>
                </button>
              );
            })}
          </div>
          {currentA && (
            <div className="mt-4 space-y-2">
              {currentA && (() => {
                const chosen = currentQ.options.find(o => o.id === currentA.chosenId);
                const correct = currentQ.options.find(o => o.isCorrect);
                const ok = chosen?.isCorrect;
                return (
                  <>
                    <div className={`font-bold ${ok ? 'text-emerald-400' : 'text-red-400'}`}>{ok ? '✓ Correct' : '✗ Not quite'}</div>
                    {!ok && chosen?.rationale && <p className="text-sm text-slate-400">{chosen.rationale}</p>}
                    {correct?.explanation?.rationale && <p className="text-sm text-slate-300">{correct.explanation.rationale}</p>}
                  </>
                );
              })()}
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
