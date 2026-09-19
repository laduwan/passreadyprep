import React, { useState, useEffect, useMemo } from 'react';
import { BookOpen, ChevronRight, Target, CheckCircle, RotateCcw, Play } from 'lucide-react';
import { authFetch } from '../lib/api';
import { computeReadiness, loadCaseStats, DOMAIN_LABELS, DOMAIN_CATEGORY_MAP } from '../lib/readiness';

const DIFF_COLORS = { easy: 'text-emerald-400 bg-emerald-500/15', medium: 'text-amber-400 bg-amber-500/15', hard: 'text-red-400 bg-red-500/15' };

// A case scored below this is worth another pass.
const NEEDS_WORK_BELOW = 70;

const STATUS_FILTERS = [
  { key: 'all', label: 'All' },
  { key: 'not_started', label: 'Not Started' },
  { key: 'needs_work', label: 'Needs Work' },
  { key: 'completed', label: 'Completed' },
];

function statusOf(stat) {
  if (!stat) return 'not_started';
  return stat.bestPct < NEEDS_WORK_BELOW ? 'needs_work' : 'completed';
}

function getRecommended(cases, weakDomains, stats) {
  if (!weakDomains || weakDomains.length === 0 || cases.length === 0) return [];
  const targetCats = new Set();
  weakDomains.slice(0, 2).forEach((w) => {
    (DOMAIN_CATEGORY_MAP[w.domain] || []).forEach((c) => targetCats.add(c));
  });
  const matches = cases.filter((c) => targetCats.has(c.category));
  // Prefer cases they haven't done — recommending one they already aced is the
  // fastest way to make this panel read as noise.
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
  const [popFilter, setPopFilter] = useState('all');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    authFetch('/api/content?exam=ncmhce')
      .then((r) => r.json())
      .then((d) => {
        try { localStorage.setItem('prp_outline', d.outlineFallback ? 'current' : (d.outline || 'current')); } catch {}
        setCases(d.items || []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  // Best-attempt rollup per case: score, attempt count, last played. Recomputed
  // when the catalog loads and whenever the learner returns from a case (App
  // clears caseId, which remounts this list).
  const caseStats = useMemo(() => loadCaseStats(), [cases]);
  // Entries saved before cases carried ids fall back to the title, so look up
  // both — matching how completion was keyed previously.
  const statFor = (c) => caseStats[c.externalId] || caseStats[c.title];

  const POPULATION_LABELS = { adult: 'Adult', child: 'Child/Adolescent', older_adult: 'Older Adult', couple_family: 'Couple/Family' };

  const rd = computeReadiness();
  const recommended = rd ? getRecommended(cases, rd.weakDomains, caseStats) : [];
  const categories = [...new Set(cases.map((c) => c.category).filter(Boolean))].sort();
  const populations = [...new Set(cases.map((c) => c.population).filter(Boolean))].sort();
  const filtered = cases.filter((c) => {
    if (filter !== 'all' && c.difficulty !== filter) return false;
    if (catFilter !== 'all' && c.category !== catFilter) return false;
    if (popFilter !== 'all' && (c.population || 'adult') !== popFilter) return false;
    if (statusFilter !== 'all' && statusOf(statFor(c)) !== statusFilter) return false;
    return true;
  });

  // Progress across the whole bank, plus the next case they haven't touched.
  const attemptedCount = cases.filter((c) => statFor(c)).length;
  const needsWorkCount = cases.filter((c) => statusOf(statFor(c)) === 'needs_work').length;
  const progressPct = cases.length ? Math.round((attemptedCount / cases.length) * 100) : 0;
  const nextUp = cases.find((c) => !statFor(c)) || null;

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
          const count = s.key === 'all' ? cases.length : cases.filter((c) => statusOf(statFor(c)) === s.key).length;
          return (
            <button key={s.key} onClick={() => setStatusFilter(s.key)} className={`text-xs font-semibold px-3 py-1.5 rounded-full border transition-colors ${
              statusFilter === s.key ? 'bg-purple-500 text-white border-purple-500' : 'border-slate-700 text-slate-300 hover:border-slate-500'}`}>
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
            All categories ({cases.length})
          </button>
          {categories.map((cat) => {
            const count = cases.filter((c) => c.category === cat).length;
            return (
            <button key={cat} onClick={() => setCatFilter(cat)} className={`text-xs font-semibold px-3 py-1.5 rounded-full border transition-colors ${
              catFilter === cat ? 'bg-blue-500 text-white border-blue-500' : 'border-slate-700 text-slate-300 hover:border-slate-500'}`}>
              {cat} ({count})
            </button>
            );
          })}
        </div>
      )}
      {populations.length > 1 && (
        <div className="flex gap-2 flex-wrap">
          <button onClick={() => setPopFilter('all')} className={`text-xs font-semibold px-3 py-1.5 rounded-full border transition-colors ${
            popFilter === 'all' ? 'bg-amber-500 text-slate-900 border-amber-500' : 'border-slate-700 text-slate-300 hover:border-slate-500'}`}>
            All populations
          </button>
          {populations.map((pop) => {
            const count = cases.filter((c) => (c.population || 'adult') === pop).length;
            return (
            <button key={pop} onClick={() => setPopFilter(pop)} className={`text-xs font-semibold px-3 py-1.5 rounded-full border transition-colors ${
              popFilter === pop ? 'bg-amber-500 text-slate-900 border-amber-500' : 'border-slate-700 text-slate-300 hover:border-slate-500'}`}>
              {POPULATION_LABELS[pop] || pop} ({count})
            </button>
            );
          })}
        </div>
      )}
      {!loading && filtered.length !== cases.length && (
        <p className="text-xs text-slate-500">{filtered.length} of {cases.length} cases match your filters</p>
      )}
      {loading ? <p className="text-slate-400">Loading cases…</p> :
        filtered.length === 0 ? <p className="text-slate-400">No cases at this level yet.</p> :
        filtered.map((c) => {
          const comp = statFor(c);
          const status = statusOf(comp);
          const needsWork = status === 'needs_work';
          return (
          <button key={c.externalId} onClick={() => onSelect(c.externalId)}
            className={`w-full text-left rounded-xl p-4 transition-colors group border ${
              needsWork
                ? 'bg-slate-800/50 border-amber-500/25 hover:border-amber-500/50'
                : status === 'completed'
                  ? 'bg-slate-800/30 border-emerald-500/20 hover:border-emerald-500/40'
                  : 'bg-slate-800/50 border-slate-700/60 hover:border-emerald-500/40'
            }`}>
            <div className="flex items-center justify-between">
              <div className="flex gap-2 items-center flex-wrap">
                <span className={`text-xs font-bold px-2 py-0.5 rounded-full uppercase ${DIFF_COLORS[c.difficulty] || 'text-slate-300 bg-slate-700'}`}>
                  {c.difficulty}
                </span>
                {c.category && <span className="text-xs font-semibold text-slate-400 bg-slate-700/50 px-2 py-0.5 rounded-full">{c.category}</span>}
                {comp && (
                  <span className={`flex items-center gap-1 text-xs font-semibold px-2 py-0.5 rounded-full ${
                    needsWork ? 'text-amber-400 bg-amber-500/15' : 'text-emerald-400 bg-emerald-500/15'}`}>
                    {needsWork ? <RotateCcw className="w-3 h-3" /> : <CheckCircle className="w-3 h-3" />}
                    {comp.bestCorrect}/{comp.bestTotal}
                  </span>
                )}
                {comp && comp.attempts > 1 && (
                  <span className="text-xs text-slate-500">{comp.attempts} attempts</span>
                )}
              </div>
              <ChevronRight className="w-4 h-4 text-slate-500 group-hover:text-emerald-400" />
            </div>
            <p className={`font-semibold mt-2 ${status === 'completed' ? 'text-slate-300' : 'text-white'}`}>{c.title}</p>
            {needsWork && (
              <p className="text-xs text-amber-400/80 mt-1">Scored under {NEEDS_WORK_BELOW}% — worth another pass.</p>
            )}
          </button>
          );
        })
      }
    </div>
  );
}
