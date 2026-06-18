import React, { useState, useEffect } from 'react';
import { BookOpen, Layers, GitBranch, Brain, FileText, Award, TrendingUp, TrendingDown, Minus, Target } from 'lucide-react';
import { computeReadiness, DOMAIN_ORDER, DOMAIN_LABELS } from '../lib/readiness';

function ReadinessRing({ value, label }) {
  const circ = 2 * Math.PI * 50;
  const offset = circ - (value / 100) * circ;
  const color = value >= 70 ? '#34D399' : value >= 50 ? '#FBBF24' : '#F87171';
  return (
    <div className="relative w-28 h-28 mx-auto">
      <svg viewBox="0 0 120 120" className="w-full h-full -rotate-90">
        <circle cx="60" cy="60" r="50" fill="none" stroke="#334155" strokeWidth="8" />
        <circle cx="60" cy="60" r="50" fill="none" stroke={color} strokeWidth="8" strokeLinecap="round"
          strokeDasharray={circ.toFixed(1)} strokeDashoffset={offset.toFixed(1)} />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-2xl font-extrabold text-white">{value}%</span>
        <span className="text-xs text-slate-400">{label}</span>
      </div>
    </div>
  );
}

function DomainBar({ name, score }) {
  const color = score >= 70 ? 'bg-emerald-500' : score >= 50 ? 'bg-amber-500' : 'bg-red-500';
  return (
    <div className="mb-2">
      <div className="flex justify-between text-sm mb-1">
        <span className="text-slate-300">{name}</span>
        <span className="font-bold text-white">{score}%</span>
      </div>
      <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
        <div className={`h-full rounded-full transition-all duration-500 ${color}`} style={{ width: `${score}%` }} />
      </div>
    </div>
  );
}

export default function Dashboard({ navigate, mode, setMode }) {
  const rd = computeReadiness();
  const [examDate, setExamDate] = useState(() => localStorage.getItem('prp_exam_date') || '');

  useEffect(() => {
    if (examDate) localStorage.setItem('prp_exam_date', examDate);
  }, [examDate]);

  const TrendIcon = rd?.recentTrend === 'up' ? TrendingUp : rd?.recentTrend === 'down' ? TrendingDown : Minus;
  const trendColor = rd?.recentTrend === 'up' ? 'text-emerald-400' : rd?.recentTrend === 'down' ? 'text-red-400' : 'text-slate-400';

  return (
    <div className="space-y-6">
      {/* Hero */}
      <div className="rounded-2xl bg-gradient-to-br from-emerald-500/10 to-blue-500/5 border border-emerald-500/20 p-6 text-center">
        <h2 className="text-xl font-bold text-emerald-400 mb-1">Try a free clinical simulation</h2>
        <p className="text-slate-400 text-sm mb-4 max-w-md mx-auto">
          Work through a full NCMHCE-format case — read the vignette, answer 5 clinical questions, and get evidence-based feedback with weighted scoring. No signup required.
        </p>
        <button
          onClick={() => navigate('cases')}
          className="bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-bold px-6 py-3 rounded-xl transition-colors"
        >
          Start free case ›
        </button>
        <div className="mt-3">
          <button onClick={() => navigate('guarantee')} className="text-emerald-400 text-sm hover:underline">
            ✓ Pass guarantee — pass and get a free CE course, or we extend your access
          </button>
        </div>
      </div>

      {/* Readiness predictor */}
      {rd && (
        <div className="bg-slate-800/50 border border-slate-700/60 rounded-2xl p-5">
          <h2 className="text-lg font-bold text-white mb-1">Exam readiness</h2>
          <p className="text-xs text-slate-500 mb-4">
            Weighted by NCMHCE domain proportions — Counseling (28%), Intake (25%), Treatment (22%), Ethics (15%), Core (10%).
            Factors in volume and recent trend. Green (70%+) = exam ready. Amber (50–69%) = almost there.
          </p>
          <div className="flex flex-col sm:flex-row gap-5">
            <div className="sm:w-36 shrink-0">
              <ReadinessRing value={rd.readiness} label={rd.label} />
              <div className="flex items-center justify-center gap-2 mt-2">
                <div className="grid grid-cols-2 gap-3 text-center text-sm w-full">
                  <div><div className="text-lg font-extrabold text-white">{rd.totalCases}</div><div className="text-xs text-slate-500">Cases</div></div>
                  <div><div className="text-lg font-extrabold text-white">{rd.overallPct}%</div><div className="text-xs text-slate-500">Accuracy</div></div>
                </div>
              </div>
            </div>
            <div className="flex-1 min-w-0">
              {DOMAIN_ORDER.map((d) => rd.agg[d]?.total >= 1 && (
                <DomainBar key={d} name={DOMAIN_LABELS[d]} score={rd.domainScores[d] || 0} />
              ))}
              {rd.weakDomains.length > 0 && (
                <div className="flex flex-wrap gap-1.5 mt-3">
                  <span className="text-xs text-slate-500">Focus:</span>
                  {rd.weakDomains.map((w) => (
                    <span key={w.domain} className="text-xs font-bold text-amber-400 bg-amber-500/15 px-2 py-0.5 rounded-full">
                      {DOMAIN_LABELS[w.domain]} {w.score}%
                    </span>
                  ))}
                </div>
              )}
              {rd.totalCases >= 3 && (
                <div className="flex items-center gap-1.5 mt-2 text-xs">
                  <TrendIcon className={`w-3.5 h-3.5 ${trendColor}`} />
                  <span className="text-slate-500">
                    Recent: {rd.recentTrend === 'up' ? 'improving' : rd.recentTrend === 'down' ? 'slipping' : 'steady'}
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Practice mode */}
      <div>
        <h2 className="text-lg font-bold text-white mb-3">Practice mode</h2>
        <div className="grid sm:grid-cols-2 gap-3">
          {[
            { id: 'new', label: 'New format', desc: 'Diagnosis given — focus on treatment, counseling & ethics.', tag: 'Current exam' },
            { id: 'classic', label: 'Classic format', desc: 'Work out the diagnosis first, then answer.', tag: '' },
          ].map((m) => (
            <button
              key={m.id}
              onClick={() => setMode(m.id)}
              className={`text-left rounded-xl border p-4 transition-colors ${
                mode === m.id
                  ? 'border-emerald-500/50 bg-emerald-500/8'
                  : 'border-slate-700/60 bg-slate-800/40 hover:border-slate-600'
              }`}
            >
              <div className="font-bold text-white text-sm flex items-center gap-2">
                {m.label}
                {m.tag && <span className="text-xs font-bold text-amber-400 bg-amber-500/15 px-2 py-0.5 rounded-full">{m.tag}</span>}
              </div>
              <div className="text-sm text-slate-400 mt-1">{m.desc}</div>
              <div className="text-xs font-semibold mt-1.5 text-slate-500">
                {mode === m.id ? <span className="text-emerald-400">● Selected</span> : 'Tap to select'}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Study tools */}
      <div>
        <h2 className="text-lg font-bold text-white mb-3">Study tools</h2>
        <div className="grid sm:grid-cols-2 gap-3">
          {[
            { id: 'flashcards', icon: Layers, label: 'Flashcards', desc: '258 cards with spaced repetition — codes, treatments, differentials, ethics, crisis.' },
            { id: 'trees', icon: GitBranch, label: 'Decision Trees', desc: '25 clinical reasoning walkthroughs — safety triage, differential diagnosis, treatment selection, ethics.' },
            { id: 'dsm', icon: Brain, label: 'DSM-5-TR Reference', desc: '92 diagnoses with ICD-10 codes and first-line treatments. Searchable.' },
            { id: 'strategy', icon: Target, label: 'Exam Strategy', desc: 'Timeline-based study plan, the IG scoring rules, the Golden Formula, and common mistakes by domain.' },
            { id: 'guarantee', icon: Award, label: 'Pass Guarantee', desc: 'Pass and get a free CE course. Don\'t pass and we extend your access.' },
          ].map((tool) => (
            <button
              key={tool.id}
              onClick={() => navigate(tool.id)}
              className="text-left rounded-xl border border-slate-700/60 bg-slate-800/40 hover:border-emerald-500/30 p-4 transition-colors group"
            >
              <div className="flex items-center gap-2.5 mb-1.5">
                <tool.icon className="w-5 h-5 text-slate-500 group-hover:text-emerald-400 transition-colors" />
                <span className="font-bold text-white text-sm">{tool.label}</span>
              </div>
              <div className="text-sm text-slate-400">{tool.desc}</div>
            </button>
          ))}
        </div>
      </div>

      {/* Study plan */}
      {rd && rd.totalCases >= 3 && (
        <div className="bg-slate-800/50 border border-slate-700/60 rounded-2xl p-5">
          <h2 className="text-lg font-bold text-white mb-1">Study plan</h2>
          <p className="text-xs text-slate-500 mb-3">
            3-phase plan based on your domain performance. Updates as your scores change.
          </p>
          <div className="flex items-center gap-3 mb-4">
            <label className="text-sm text-slate-400">Exam date:</label>
            <input
              type="date"
              value={examDate}
              onChange={(e) => setExamDate(e.target.value)}
              className="bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-white text-sm"
            />
          </div>
          {examDate && <StudyPlan rd={rd} examDate={examDate} />}
        </div>
      )}
    </div>
  );
}

function StudyPlan({ rd, examDate }) {
  const now = new Date();
  const exam = new Date(examDate + 'T12:00:00');
  const daysLeft = Math.max(1, Math.ceil((exam - now) / 86400000));
  const p1 = Math.max(1, Math.floor(daysLeft * 0.5));
  const p2 = Math.max(1, Math.floor(daysLeft * 0.3));
  const p3 = Math.max(1, daysLeft - p1 - p2);

  const ranked = DOMAIN_ORDER
    .filter((d) => rd.agg[d]?.total >= 1)
    .map((d) => ({ d, sc: rd.domainScores[d] || 0 }))
    .sort((a, b) => a.sc - b.sc);

  const weak = ranked.slice(0, 2);
  const casesPerDay = Math.max(2, Math.min(5, Math.ceil((20 - rd.totalCases) / Math.max(1, p1))));

  const phases = [
    { n: 1, range: `Days 1–${p1}`, title: 'Build foundations', color: 'text-blue-400 bg-blue-500/15',
      body: <>Focus on: {weak.map((w, i) => <><span key={w.d} className="font-bold text-amber-400">{DOMAIN_LABELS[w.d]}</span>{i < weak.length - 1 ? ', ' : ''}</>)}. 2–3 cases/day + 15 min flashcards.</> },
    { n: 2, range: `Days ${p1+1}–${p1+p2}`, title: 'Full-length practice', color: 'text-purple-400 bg-purple-500/15',
      body: 'Shift to timed full exams (10–11 cases). Simulate real conditions. Review every miss.' },
    { n: 3, range: `Days ${p1+p2+1}–${daysLeft}`, title: 'Sharpen and rest', color: 'text-emerald-400 bg-emerald-500/15',
      body: 'Light review of flagged weak spots. DSM reference for gaps. Day before: rest, no cramming.' },
  ];

  return (
    <div className="space-y-3">
      <div className="font-bold text-white">{daysLeft} day{daysLeft === 1 ? '' : 's'} until exam</div>
      {phases.map((ph) => (
        <div key={ph.n} className="flex gap-3">
          <div className={`w-7 h-7 rounded-lg ${ph.color} flex items-center justify-center text-xs font-bold shrink-0 mt-0.5`}>{ph.n}</div>
          <div className="text-sm">
            <div className="font-bold text-white">{ph.range}: {ph.title}</div>
            <div className="text-slate-400 mt-0.5">{ph.body}</div>
          </div>
        </div>
      ))}
      <div className="bg-emerald-500/8 border border-emerald-500/20 rounded-xl p-3 text-sm">
        <span className="font-bold text-emerald-400">Daily targets:</span>
        <span className="text-slate-300"> {casesPerDay} cases + 15 min flashcards + 10 min DSM</span>
        {rd.totalCases < 20 && (
          <div className="text-xs text-amber-400 mt-1">
            {20 - rd.totalCases} more cases needed for pass guarantee eligibility
          </div>
        )}
      </div>
    </div>
  );
}
