import React, { useState, useEffect } from 'react';
import { BookOpen, ChevronRight, Target, CheckCircle2, RotateCcw, Play } from 'lucide-react';
import { authFetch } from '../lib/api';
import { computeReadiness, loadCaseStats, DOMAIN_LABELS, DOMAIN_CATEGORY_MAP } from '../lib/readiness';

const DIFF_COLORS = { easy: 'text-emerald-400 bg-emerald-500/15', medium: 'text-amber-400 bg-amber-500/15', hard: 'text-red-400 bg-red-500/15' };

// A case you've scored below this is worth another pass.
const NEEDS_WORK_BELOW = 70;

const STATUS_FILTERS = [
  { id: 'all', label: 'All' },
  { id: 'todo', label: 'Not started' },
  { id: 'review', label: 'Needs work' },
  { id: 'done', label: 'Completed' },
];

function statusOf(stat) {
  if (!stat) return 'todo';
  return stat.bestPct < NEEDS_WORK_BELOW ? 'review' : 'done';
}

function scoreColor(pct) {
  return pct >= 70 ? 'text-emerald-400 bg-emerald-500/15' : pct >= 50 ? 'text-amber-400 bg-amber-500/15' : 'text-red-400 bg-red-500/15';
}

function getRecommended(cases, weakDomains, stats) {
  if (!weakDomains || weakDomains.length === 0 || cases.length === 0) return [];
  const targetCats = new Set();
  weakDomains.slice(0, 2).forEach((w) => {
    (DOMAIN_CATEGORY_MAP[w.domain] || []).forEach((c) => targetCats.add(c));
  });
  const matches = cases.filter((c) => targetCats.has(c.category));
  // Prefer cases they haven't done yet — recommending a case you already aced
  // is the fastest way to make the panel feel like noise.
  const fresh = matches.filter((c) => !stats[c.externalId]);
  const pool = fresh.length >= 4 ? fresh : matches;
  // Shuffle and pick up to 4
  const shuffled = pool.sort(() => Math.random() - 0.5);
  return shuffled.slice(0, 4);
}

export default function CaseList({ mode, examMode = false, onSelect, navigate }) {
  const [cases, setCases] = useState([]);
  const [filter, setFilter] = useState('all');
  const [catFilter, setCatFilter] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all');
  const [loading, setLoading] = useState(true);

  // Recomputed each render from localStorage. CaseList remounts whenever the
  // learner comes back from a case (App clears caseId), so this always
  // reflects the attempt they just finished.
  const caseStats = loadCaseStats();

  useEffect(() => {
    authFetch('/api/content?exam=ncmhce')
      .then((r) => r.json())
      .then((d) => { setCases(d.items || []); setLoading(false); })
      .catch(() => setLoading(false));
  }, []);

  const rd = computeReadiness();
  const recommended = rd ? getRecommended(cases, rd.weakDomains, caseStats) : [];
  const categories = [...new Set(cases.map((c) => c.category).filter(Boolean))].sort();
  const filtered = cases.filter((c) => {
    if (filter !== 'all' && c.difficulty !== filter) return false;
    if (catFilter !== 'all' && c.category !== catFilter) return false;
    if (statusFilter !== 'all' && statusOf(caseStats[c.externalId]) !== statusFilter) return false;
    return true;
  });

  // Progress across the whole bank, plus the next case they haven't touched.
  const attemptedCount = cases.filter((c) => caseStats[c.externalId]).length;
  const needsWorkCount = cases.filter((c) => statusOf(caseStats[c.externalId]) === 'review').length;
  const progressPct = cases.length ? Math.round((attemptedCount / cases.length) * 100) : 0;
  const nextUp = cases.find((c) => !caseStats[c.externalId]) || null;

  return (
    <div className="space-y-4">
      <div>
        <h1 className="text-2xl font-bold text-white">Choose a case</h1>
        <p className="text-slate-400 text-sm mt-1">
          Mode: <span className="text-white font-semibold">{mode === 'classic' ? 'Classic — you diagnose first' : 'New format — diagnosis given'}</span>
          <span className="text-slate-600"> · </span>
          <span className={`font-semibold ${examMode ? 'text-amber-400' : 'text-emerald-400'}`}>{examMode ? 'Exam — feedback at the end' : 'Study — feedback each question'}</span>
        </p>
      </div>

      {/* Bank progress + pick-up-where-you-left-off */}
      {!loading && cases.length > 0 && (
        <div className="bg-slate-800/50 border border-slate-700/60 rounded-2xl p-4">
          <div className="flex items-baseline justify-between gap-3 mb-2">
            <div className="text-sm">
              <span className="font-bold text-white">{attemptedCount}</span>
              <span className="text-slate-400"> of {cases.length} cases completed</span>
              {needsWorkCount > 0 && (
                <span className="text-slate-500"> · <span className="text-amber-400 font-semibold">{needsWorkCount}</span> to revisit</span>
              )}
            </div>
            <span className="text-xs font-bold text-emerald-400 shrink-0">{progressPct}%</span>
          </div>
          <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
            <div className="h-full bg-emerald-500 rounded-full transition-all duration-500" style={{ width: `${progressPct}%` }} />
          </div>
          {nextUp && (
            <button
              onClick={() => onSelect(nextUp.externalId)}
              className="mt-3 w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-bold px-4 py-2 rounded-xl text-sm transition-colors"
            >
              <Play className="w-4 h-4" />
              {attemptedCount === 0 ? 'Start your first case' : 'Continue'} — {nextUp.title}
            </button>
          )}
        </div>
      )}

      {/* Recommended for weak areas */}
      {recommended.length > 0 && (
        <div className="bg-amber-500/5 border border-amber-500/20 rounded-2xl p-4">
          <div className="flex items-center gap-2 mb-2">
            <Target className="w-4 h-4 text-amber-400" />
            <span className="text-sm font-bold text-amber-400">Recommended for you</span>
            <span className="text-xs text-slate-500">— targets your weakest domains: {rd.weakDomains.slice(0, 2).map((w) => DOMAIN_LABELS[w.domain]?.split(' ')[0]).join(', ')}</span>
          </div>
          <div className="grid sm:grid-cols-2 gap-2">
            {recommended.map((c) => (
              <button key={c.externalId} onClick={() => onSelect(c.externalId)}
                className="text-left bg-slate-800/60 border border-amber-500/15 hover:border-amber-500/40 rounded-xl p-3 transition-colors">
                <div className="flex gap-2 mb-1">
                  <span className={`text-xs font-bold px-2 py-0.5 rounded-full uppercase ${DIFF_COLORS[c.difficulty] || 'text-slate-300 bg-slate-700'}`}>{c.difficulty}</span>
                  {c.category && <span className="text-xs text-slate-500">{c.category}</span>}
                </div>
                <p className="text-white font-semibold text-sm">{c.title}</p>
              </button>
            ))}
          </div>
        </div>
      )}

      <div className="flex gap-2 flex-wrap">
        {STATUS_FILTERS.map((s) => {
          const count = s.id === 'all'
            ? cases.length
            : cases.filter((c) => statusOf(caseStats[c.externalId]) === s.id).length;
          return (
            <button key={s.id} onClick={() => setStatusFilter(s.id)} className={`text-xs font-semibold px-3 py-1.5 rounded-full border transition-colors ${
              statusFilter === s.id ? 'bg-purple-500 text-white border-purple-500' : 'border-slate-700 text-slate-300 hover:border-slate-500'}`}>
              {s.label} {!loading && <span className="opacity-70">({count})</span>}
            </button>
          );
        })}
      </div>

      <div className="flex gap-2 flex-wrap">
        {['all', 'easy', 'medium', 'hard'].map((d) => (
          <button key={d} onClick={() => setFilter(d)} className={`text-xs font-semibold px-3 py-1.5 rounded-full border transition-colors ${
            filter === d ? 'bg-emerald-500 text-slate-900 border-emerald-500' : 'border-slate-700 text-slate-300 hover:border-slate-500'}`}>
            {d === 'all' ? 'All levels' : d.charAt(0).toUpperCase() + d.slice(1)}
          </button>
        ))}
      </div>
      {categories.length > 1 && (
        <div className="flex gap-2 flex-wrap">
          <button onClick={() => setCatFilter('all')} className={`text-xs font-semibold px-3 py-1.5 rounded-full border transition-colors ${
            catFilter === 'all' ? 'bg-blue-500 text-white border-blue-500' : 'border-slate-700 text-slate-300 hover:border-slate-500'}`}>
            All categories
          </button>
          {categories.map((cat) => (
            <button key={cat} onClick={() => setCatFilter(cat)} className={`text-xs font-semibold px-3 py-1.5 rounded-full border transition-colors ${
              catFilter === cat ? 'bg-blue-500 text-white border-blue-500' : 'border-slate-700 text-slate-300 hover:border-slate-500'}`}>
              {cat}
            </button>
          ))}
        </div>
      )}
      {loading ? <p className="text-slate-400">Loading cases…</p> :
        filtered.length === 0 ? <p className="text-slate-400">No cases match these filters yet.</p> :
        filtered.map((c) => {
          const stat = caseStats[c.externalId];
          const status = statusOf(stat);
          return (
            <button key={c.externalId} onClick={() => onSelect(c.externalId)}
              className={`w-full text-left rounded-xl p-4 transition-colors group border ${
                status === 'done'
                  ? 'bg-slate-800/30 border-emerald-500/20 hover:border-emerald-500/40'
                  : status === 'review'
                    ? 'bg-slate-800/50 border-amber-500/25 hover:border-amber-500/50'
                    : 'bg-slate-800/50 border-slate-700/60 hover:border-emerald-500/40'
              }`}>
              <div className="flex items-center justify-between gap-2">
                <div className="flex gap-2 flex-wrap items-center">
                  <span className={`text-xs font-bold px-2 py-0.5 rounded-full uppercase ${DIFF_COLORS[c.difficulty] || 'text-slate-300 bg-slate-700'}`}>
                    {c.difficulty}
                  </span>
                  {c.category && <span className="text-xs font-semibold text-slate-400 bg-slate-700/50 px-2 py-0.5 rounded-full">{c.category}</span>}
                  {stat && (
                    <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${scoreColor(stat.bestPct)}`}>
                      Best {stat.bestPct}%
                    </span>
                  )}
                  {stat && stat.attempts > 1 && (
                    <span className="text-xs text-slate-500">{stat.attempts} attempts</span>
                  )}
                </div>
                <ChevronRight className="w-4 h-4 text-slate-500 group-hover:text-emerald-400 shrink-0" />
              </div>
              <p className={`font-semibold mt-2 flex items-center gap-1.5 ${status === 'done' ? 'text-slate-300' : 'text-white'}`}>
                {status === 'done' && <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />}
                {status === 'review' && <RotateCcw className="w-4 h-4 text-amber-400 shrink-0" />}
                {c.title}
              </p>
              {status === 'review' && (
                <p className="text-xs text-amber-400/80 mt-1">Scored under {NEEDS_WORK_BELOW}% — worth another pass.</p>
              )}
            </button>
          );
        })
      }
    </div>
  );
}
