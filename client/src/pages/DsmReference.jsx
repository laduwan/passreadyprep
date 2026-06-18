// client/src/pages/DsmReference.jsx
import React, { useState } from 'react';
import { Brain, Search } from 'lucide-react';
import { DSM_DATA } from '../lib/dsmData';

export default function DsmReference() {
  const [query, setQuery] = useState('');
  const [filter, setFilter] = useState('all');

  const q = query.toLowerCase().trim();
  let shown = 0;

  return (
    <div className="space-y-4">
      <div>
        <div className="flex items-center gap-2">
          <Brain className="w-6 h-6 text-purple-400" />
          <h1 className="text-2xl font-bold text-white">DSM-5-TR Quick Reference</h1>
        </div>
        <p className="text-slate-400 mt-1 text-sm">92 diagnoses — search by name, code, or treatment.</p>
      </div>

      <div className="bg-purple-500/8 border border-purple-500/20 rounded-xl p-3.5 text-sm text-slate-300">
        <span className="font-bold text-purple-400">How to use</span> — Look up diagnoses from case simulations. Search for treatments to find which disorders they apply to. Filter by category to study one family at a time.
      </div>

      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search diagnoses, codes, or treatments…"
          className="w-full bg-slate-800/60 border border-slate-700 rounded-xl pl-10 pr-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500"
        />
      </div>

      <div className="flex gap-2 flex-wrap">
        <button onClick={() => setFilter('all')} className={`text-xs font-semibold px-3 py-1.5 rounded-full border transition-colors ${filter === 'all' ? 'bg-emerald-500 text-slate-900 border-emerald-500' : 'border-slate-700 text-slate-300'}`}>All</button>
        {DSM_DATA.map((c) => (
          <button key={c.cat} onClick={() => setFilter(c.cat)} className={`text-xs font-semibold px-3 py-1.5 rounded-full border transition-colors ${filter === c.cat ? 'bg-emerald-500 text-slate-900 border-emerald-500' : 'border-slate-700 text-slate-300'}`}>{c.cat}</button>
        ))}
      </div>

      {DSM_DATA.map((cat) => {
        if (filter !== 'all' && cat.cat !== filter) return null;
        const matches = cat.dx.filter((d) => !q || d.n.toLowerCase().includes(q) || d.c.toLowerCase().includes(q) || d.tx.toLowerCase().includes(q));
        if (!matches.length) return null;
        shown += matches.length;
        return (
          <div key={cat.cat}>
            <h3 className="text-xs font-bold uppercase tracking-wide text-emerald-400 mt-4 mb-2">{cat.cat} ({matches.length})</h3>
            {matches.map((d) => (
              <div key={d.c + d.n} className="bg-slate-800/50 border border-slate-700/60 rounded-xl p-3.5 mb-2 hover:border-emerald-500/30 transition-colors">
                <span className="font-bold text-white">{d.n}</span>
                <span className="text-purple-400 font-semibold text-sm ml-2">{d.c}</span>
                <div className="text-sm text-slate-300 mt-1.5">
                  <span className="text-xs font-bold uppercase tracking-wide text-emerald-400">First-line: </span>{d.tx}
                </div>
              </div>
            ))}
          </div>
        );
      })}

      {shown === 0 && <div className="text-center py-8 text-slate-400">No matches found.</div>}
    </div>
  );
}
