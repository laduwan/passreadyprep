import React, { useState, useEffect } from 'react';
import { BookOpen, ChevronRight, Target } from 'lucide-react';
import { authFetch } from '../lib/api';
import { computeReadiness, DOMAIN_LABELS } from '../lib/readiness';

const DIFF_COLORS = { easy: 'text-emerald-400 bg-emerald-500/15', medium: 'text-amber-400 bg-amber-500/15', hard: 'text-red-400 bg-red-500/15' };

// Map weak domains to diagnostic categories most likely to test that domain.
const DOMAIN_CATEGORY_MAP = {
  intake: ['Anxiety', 'Depressive', 'Trauma', 'Substance', 'Personality', 'Dissociative', 'Psychotic', 'OCD-Related'],
  counseling: ['Depressive', 'Anxiety', 'Personality', 'Trauma', 'Sleep'],
  treatment: ['Substance', 'Trauma', 'Depressive', 'Anxiety', 'Disruptive', 'OCD-Related'],
  ethics: ['Personality', 'Substance', 'OCD-Related'],
  core: ['Psychotic', 'Dissociative', 'Personality', 'Anxiety'],
};

function getRecommended(cases, weakDomains) {
  if (!weakDomains || weakDomains.length === 0 || cases.length === 0) return [];
  const targetCats = new Set();
  weakDomains.slice(0, 2).forEach((w) => {
    (DOMAIN_CATEGORY_MAP[w.domain] || []).forEach((c) => targetCats.add(c));
  });
  const matches = cases.filter((c) => targetCats.has(c.category));
  // Shuffle and pick up to 4
  const shuffled = matches.sort(() => Math.random() - 0.5);
  return shuffled.slice(0, 4);
}

export default function CaseList({ mode, examMode = false, onSelect, navigate }) {
  const [cases, setCases] = useState([]);
  const [filter, setFilter] = useState('all');
  const [catFilter, setCatFilter] = useState('all');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    authFetch('/api/content?exam=ncmhce')
      .then((r) => r.json())
      .then((d) => { setCases(d.items || []); setLoading(false); })
      .catch(() => setLoading(false));
  }, []);

  const rd = computeReadiness();
  const recommended = rd ? getRecommended(cases, rd.weakDomains) : [];
  const categories = [...new Set(cases.map((c) => c.category).filter(Boolean))].sort();
  const filtered = cases.filter((c) => {
    if (filter !== 'all' && c.difficulty !== filter) return false;
    if (catFilter !== 'all' && c.category !== catFilter) return false;
    return true;
  });

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
        filtered.length === 0 ? <p className="text-slate-400">No cases at this level yet.</p> :
        filtered.map((c) => (
          <button key={c.externalId} onClick={() => onSelect(c.externalId)}
            className="w-full text-left bg-slate-800/50 border border-slate-700/60 hover:border-emerald-500/40 rounded-xl p-4 transition-colors group">
            <div className="flex items-center justify-between">
              <div className="flex gap-2">
                <span className={`text-xs font-bold px-2 py-0.5 rounded-full uppercase ${DIFF_COLORS[c.difficulty] || 'text-slate-300 bg-slate-700'}`}>
                  {c.difficulty}
                </span>
                {c.category && <span className="text-xs font-semibold text-slate-400 bg-slate-700/50 px-2 py-0.5 rounded-full">{c.category}</span>}
              </div>
              <ChevronRight className="w-4 h-4 text-slate-500 group-hover:text-emerald-400" />
            </div>
            <p className="text-white font-semibold mt-2">{c.title}</p>
          </button>
        ))
      }
    </div>
  );
}
