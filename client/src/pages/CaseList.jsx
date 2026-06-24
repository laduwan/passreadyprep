import React, { useState, useEffect } from 'react';
import { BookOpen, ChevronRight } from 'lucide-react';
import { authFetch } from '../lib/api';

const DIFF_COLORS = { easy: 'text-emerald-400 bg-emerald-500/15', medium: 'text-amber-400 bg-amber-500/15', hard: 'text-red-400 bg-red-500/15' };

export default function CaseList({ mode, onSelect, navigate }) {
  const [cases, setCases] = useState([]);
  const [filter, setFilter] = useState('all');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    authFetch('/api/content?exam=ncmhce')
      .then((r) => r.json())
      .then((d) => { setCases(d.items || []); setLoading(false); })
      .catch(() => setLoading(false));
  }, []);

  const filtered = filter === 'all' ? cases : cases.filter((c) => c.difficulty === filter);

  return (
    <div className="space-y-4">
      <div>
        <h1 className="text-2xl font-bold text-white">Choose a case</h1>
        <p className="text-slate-400 text-sm mt-1">
          Mode: <span className="text-white font-semibold">{mode === 'classic' ? 'Classic — you diagnose first' : 'New format — diagnosis given'}</span>
        </p>
      </div>
      <div className="flex gap-2 flex-wrap">
        {['all', 'easy', 'medium', 'hard'].map((d) => (
          <button key={d} onClick={() => setFilter(d)} className={`text-xs font-semibold px-3 py-1.5 rounded-full border transition-colors ${
            filter === d ? 'bg-emerald-500 text-slate-900 border-emerald-500' : 'border-slate-700 text-slate-300 hover:border-slate-500'}`}>
            {d === 'all' ? 'All' : d.charAt(0).toUpperCase() + d.slice(1)}
          </button>
        ))}
      </div>
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
