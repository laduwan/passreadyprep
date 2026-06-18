// client/src/pages/Flashcards.jsx
import React, { useState, useCallback } from 'react';
import { Layers, RotateCcw, CheckCircle2, X as XIcon, Zap } from 'lucide-react';
import { FC_CARDS, FC_CATS } from '../lib/flashcardData';

const SR_KEY = 'prp_sr';
function ldSR() { try { return JSON.parse(localStorage.getItem(SR_KEY)) || {}; } catch { return {}; } }
function svSR(sr) { localStorage.setItem(SR_KEY, JSON.stringify(sr)); }

function updCard(id, quality) {
  const sr = ldSR();
  const s = sr[id] || { ef: 2.5, iv: 0, rp: 0, du: 0 };
  if (quality < 3) { s.rp = 0; s.iv = 0; }
  else { s.iv = s.rp === 0 ? 1 : s.rp === 1 ? 3 : Math.round(s.iv * s.ef); s.rp++; }
  s.ef = Math.max(1.3, s.ef + 0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02));
  s.du = Date.now() + s.iv * 86400000;
  sr[id] = s;
  svSR(sr);
}

const TYPE_BADGE = { code: 'text-blue-400 bg-blue-500/15', tx: 'text-emerald-400 bg-emerald-500/15', diff: 'text-amber-400 bg-amber-500/15', ethics: 'text-red-400 bg-red-500/15', crisis: 'text-red-400 bg-red-500/15', concept: 'text-purple-400 bg-purple-500/15' };
const TYPE_LABEL = { code: 'Code', tx: 'Treatment', diff: 'Differential', ethics: 'Ethics', crisis: 'Crisis', concept: 'Concept' };

function shuffle(arr) { const a = [...arr]; for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; }

export default function Flashcards() {
  const [filter, setFilter] = useState('all');
  const [view, setView] = useState('home'); // home | study | results
  const [deck, setDeck] = useState([]);
  const [di, setDi] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [, forceUpdate] = useState(0);

  const refresh = () => forceUpdate((n) => n + 1);

  const getDue = useCallback(() => {
    const now = Date.now(), sr = ldSR();
    return FC_CARDS.filter((c) => {
      if (filter !== 'all' && c.cat !== filter) return false;
      const s = sr[c.id]; return !s || s.du <= now;
    });
  }, [filter]);

  const getMast = () => { const sr = ldSR(); return FC_CARDS.filter((c) => { const s = sr[c.id]; return s && s.rp >= 3 && s.du > Date.now(); }).length; };
  const getLrn = () => { const sr = ldSR(); return FC_CARDS.filter((c) => { const s = sr[c.id]; return s && s.rp > 0 && s.rp < 3; }).length; };

  function startDeck() {
    const d = shuffle(getDue());
    setDeck(d); setDi(0); setFlipped(false); setView('study');
  }

  function rate(quality) {
    updCard(deck[di].id, quality);
    if (di < deck.length - 1) { setDi(di + 1); setFlipped(false); }
    else { setView('results'); refresh(); }
  }

  function resetSR() {
    if (!confirm('Reset all flashcard progress?')) return;
    localStorage.removeItem(SR_KEY);
    refresh();
  }

  // ── Results ──
  if (view === 'results') {
    return (
      <div className="text-center py-10 space-y-4">
        <div className="text-5xl">🎉</div>
        <h1 className="text-2xl font-bold text-white">Session complete</h1>
        <p className="text-slate-400">Reviewed {deck.length} card{deck.length === 1 ? '' : 's'}. Cards marked Again reappear sooner.</p>
        <div className="flex gap-3 justify-center">
          <button onClick={() => setView('home')} className="bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-bold px-5 py-2.5 rounded-xl">Overview</button>
          {getDue().length > 0 && (
            <button onClick={startDeck} className="bg-slate-700 hover:bg-slate-600 text-white font-bold px-5 py-2.5 rounded-xl">{getDue().length} more ›</button>
          )}
        </div>
      </div>
    );
  }

  // ── Study view ──
  if (view === 'study' && deck.length > 0) {
    const c = deck[di];
    const pct = Math.round((di / deck.length) * 100);
    const tb = TYPE_BADGE[c.type] || 'text-slate-300 bg-slate-700/50';
    const tl = TYPE_LABEL[c.type] || c.type;

    return (
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <span className="text-sm text-slate-400">{di + 1} / {deck.length}</span>
          <button onClick={() => setView('home')} className="text-sm text-slate-400 hover:text-white font-semibold">Exit</button>
        </div>
        <div className="h-1.5 bg-slate-700 rounded-full"><div className="h-full bg-emerald-500 rounded-full transition-all" style={{ width: `${pct}%` }} /></div>

        <div
          onClick={() => !flipped && setFlipped(true)}
          className="cursor-pointer"
          style={{ perspective: '800px' }}
        >
          <div className="relative h-72 transition-transform duration-500" style={{ transformStyle: 'preserve-3d', transform: flipped ? 'rotateY(180deg)' : '' }}>
            {/* Front */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/10 to-purple-500/5 border-2 border-blue-500/25 flex flex-col items-center justify-center p-7 text-center" style={{ backfaceVisibility: 'hidden' }}>
              <div className="absolute top-3 left-4"><span className={`text-xs font-bold px-2.5 py-1 rounded-full bg-slate-700/50 text-slate-300`}>{c.cat}</span></div>
              <div className="absolute top-3 right-4"><span className={`text-xs font-bold px-2.5 py-1 rounded-full ${tb}`}>{tl}</span></div>
              <p className="text-lg font-semibold text-white leading-snug">{c.q}</p>
              <p className="text-xs text-slate-500 mt-4">Tap to reveal</p>
            </div>
            {/* Back */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-emerald-500/10 to-teal-500/5 border-2 border-emerald-500/25 flex flex-col items-center justify-center p-7 text-center" style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}>
              <div className="absolute top-3 left-4"><span className={`text-xs font-bold px-2.5 py-1 rounded-full bg-slate-700/50 text-slate-300`}>{c.cat}</span></div>
              <div className="absolute top-3 right-4"><span className={`text-xs font-bold px-2.5 py-1 rounded-full ${tb}`}>{tl}</span></div>
              <p className="text-lg font-semibold text-emerald-400 leading-snug">{c.a}</p>
            </div>
          </div>
        </div>

        {flipped && (
          <>
            <p className="text-center text-sm text-slate-400">How well did you know this?</p>
            <div className="flex gap-3 justify-center">
              <button onClick={() => rate(1)} className="flex-1 max-w-[120px] text-center py-2.5 rounded-xl border-2 border-red-500/30 text-red-400 font-bold hover:bg-red-500/10">Again</button>
              <button onClick={() => rate(3)} className="flex-1 max-w-[120px] text-center py-2.5 rounded-xl border-2 border-amber-500/30 text-amber-400 font-bold hover:bg-amber-500/10">Hard</button>
              <button onClick={() => rate(5)} className="flex-1 max-w-[120px] text-center py-2.5 rounded-xl border-2 border-emerald-500/30 text-emerald-400 font-bold hover:bg-emerald-500/10">Easy</button>
            </div>
          </>
        )}
      </div>
    );
  }

  // ── Home view ──
  const due = getDue();
  const mast = getMast();
  const lrn = getLrn();
  const tot = FC_CARDS.length;
  const mastPct = tot ? Math.round((mast / tot) * 100) : 0;
  const firstTime = mast === 0 && lrn === 0;

  return (
    <div className="space-y-5">
      <div>
        <div className="flex items-center gap-2">
          <Layers className="w-6 h-6 text-purple-400" />
          <h1 className="text-2xl font-bold text-white">Flashcards</h1>
        </div>
        <p className="text-slate-400 mt-1 text-sm">{tot} cards across {FC_CATS.length} categories — spaced repetition keeps hard cards coming back.</p>
      </div>

      {firstTime && (
        <div className="bg-blue-500/8 border border-blue-500/20 rounded-xl p-4 text-sm text-slate-300">
          <span className="font-bold text-blue-400">How it works</span> — Tap a card to flip it, then rate yourself:
          <span className="text-red-400 font-bold"> Again</span> (comes back today),
          <span className="text-amber-400 font-bold"> Hard</span> (1–3 days),
          <span className="text-emerald-400 font-bold"> Easy</span> (pushed out further). Cards you master leave your queue. Progress saved in this browser.
        </div>
      )}

      <div className="bg-slate-800/50 border border-slate-700/60 rounded-2xl p-5">
        <div className="grid grid-cols-4 gap-3 text-center mb-3">
          <div><div className="text-xl font-extrabold text-blue-400">{due.length}</div><div className="text-xs text-slate-500">Due</div></div>
          <div><div className="text-xl font-extrabold text-amber-400">{lrn}</div><div className="text-xs text-slate-500">Learning</div></div>
          <div><div className="text-xl font-extrabold text-emerald-400">{mast}</div><div className="text-xs text-slate-500">Mastered</div></div>
          <div><div className="text-xl font-extrabold text-white">{tot}</div><div className="text-xs text-slate-500">Total</div></div>
        </div>
        <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
          <div className="h-full bg-emerald-500 rounded-full transition-all duration-500" style={{ width: `${mastPct}%` }} />
        </div>
        <div className="text-center text-xs text-slate-500 mt-1">{mastPct}% mastered</div>
      </div>

      <div className="flex gap-2 flex-wrap">
        <button onClick={() => setFilter('all')} className={`text-xs font-semibold px-3 py-1.5 rounded-full border transition-colors ${filter === 'all' ? 'bg-emerald-500 text-slate-900 border-emerald-500' : 'border-slate-700 text-slate-300 hover:border-slate-500'}`}>All</button>
        {FC_CATS.map((cat) => (
          <button key={cat} onClick={() => setFilter(cat)} className={`text-xs font-semibold px-3 py-1.5 rounded-full border transition-colors ${filter === cat ? 'bg-emerald-500 text-slate-900 border-emerald-500' : 'border-slate-700 text-slate-300 hover:border-slate-500'}`}>{cat}</button>
        ))}
      </div>

      {due.length > 0 ? (
        <button onClick={startDeck} className="w-full bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-bold py-3.5 rounded-xl text-lg transition-colors">
          Study {due.length} due card{due.length === 1 ? '' : 's'} ›
        </button>
      ) : (
        <div className="text-center py-8 text-slate-400">
          <CheckCircle2 className="w-8 h-8 mx-auto mb-2 text-emerald-400" />
          <span className="font-bold text-emerald-400">All caught up!</span><br />Come back later or switch categories.
        </div>
      )}

      <div className="text-center">
        <button onClick={resetSR} className="text-xs text-slate-600 hover:text-slate-400">Reset progress</button>
      </div>
    </div>
  );
}
