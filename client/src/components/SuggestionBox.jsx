import React, { useState } from 'react';
import { MessageSquarePlus, X } from 'lucide-react';
import { authFetch, getToken } from '../lib/api';

const API_BASE = import.meta.env.VITE_API_BASE || '';

const CATEGORIES = [
  { value: 'feature-request', label: 'Feature idea' },
  { value: 'bug', label: "Something's broken" },
  { value: 'content', label: 'Case/content feedback' },
  { value: 'billing', label: 'Billing question' },
  { value: 'other', label: 'Other' },
];

export default function SuggestionBox() {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [category, setCategory] = useState('feature-request');
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState(null); // null | 'sending' | 'ok' | 'err'

  const loggedIn = !!getToken();

  async function submit() {
    if (!message.trim()) {
      setStatus('err');
      return;
    }
    setStatus('sending');
    try {
      const res = await authFetch(`${API_BASE}/api/suggestions`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: message.trim(),
          category,
          platform: 'passreadyprep',
          email: loggedIn ? undefined : email.trim(),
          pageUrl: window.location.href,
        }),
      });
      if (!res.ok) throw new Error('failed');
      setStatus('ok');
      setMessage('');
      setTimeout(() => { setOpen(false); setStatus(null); }, 1600);
    } catch {
      setStatus('err');
    }
  }

  return (
    <>
      <button
        onClick={() => setOpen(v => !v)}
        aria-label="Send a suggestion"
        className="fixed bottom-7 right-0 z-[8900] flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-bold text-xs pl-3 pr-4 py-2.5 rounded-l-lg shadow-lg transition-colors"
      >
        <MessageSquarePlus className="w-4 h-4" />
        <span className="hidden sm:inline">Suggestion</span>
      </button>

      {open && (
        <div className="fixed bottom-20 right-4 z-[8900] w-[min(320px,calc(100vw-32px))] rounded-xl bg-slate-800 border border-slate-700 shadow-2xl p-4">
          <div className="flex items-start justify-between mb-3">
            <span className="text-sm font-bold text-white">Got an idea or found a bug?</span>
            <button onClick={() => setOpen(false)} aria-label="Close" className="text-slate-400 hover:text-white">
              <X className="w-4 h-4" />
            </button>
          </div>

          <select
            value={category}
            onChange={e => setCategory(e.target.value)}
            className="w-full mb-2 text-xs bg-slate-900 border border-slate-700 text-slate-200 rounded-lg px-2.5 py-2"
          >
            {CATEGORIES.map(c => <option key={c.value} value={c.value}>{c.label}</option>)}
          </select>

          <textarea
            value={message}
            onChange={e => setMessage(e.target.value)}
            maxLength={4000}
            placeholder="Tell us what's on your mind..."
            className="w-full mb-2 text-xs bg-slate-900 border border-slate-700 text-slate-200 rounded-lg px-2.5 py-2 min-h-[84px] resize-y"
          />

          {!loggedIn && (
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="Your email (optional)"
              className="w-full mb-2 text-xs bg-slate-900 border border-slate-700 text-slate-200 rounded-lg px-2.5 py-2"
            />
          )}

          <button
            onClick={submit}
            disabled={status === 'sending'}
            className="w-full bg-emerald-500 hover:bg-emerald-400 disabled:opacity-60 text-slate-900 font-bold text-xs rounded-lg py-2"
          >
            Send
          </button>

          {status === 'ok' && <p className="text-emerald-400 text-xs text-center mt-2">Thanks — got it!</p>}
          {status === 'err' && <p className="text-red-400 text-xs text-center mt-2">Please try again.</p>}
        </div>
      )}
    </>
  );
}
