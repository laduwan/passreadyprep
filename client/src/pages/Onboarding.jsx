// client/src/pages/Onboarding.jsx
import React, { useState } from 'react';
import { Calendar, ArrowRight, BookOpen, Layers, GitBranch, Target, Clock, Zap } from 'lucide-react';
import { authFetch } from '../lib/api';

function daysBetween(a, b) { return Math.max(0, Math.ceil((b - a) / 86400000)); }

export default function Onboarding({ onComplete, navigate }) {
  const [step, setStep] = useState('date'); // date | plan
  const [examDate, setExamDate] = useState('');
  const [saving, setSaving] = useState(false);

  async function saveAndPlan() {
    if (!examDate) return;
    setSaving(true);
    try {
      const res = await authFetch('/api/auth/exam-date', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ examDate }),
      });
      if (res.ok) {
        localStorage.setItem('prp_exam_date', examDate);
        // Update stored user object
        const data = await res.json();
        if (data.user) {
          try { localStorage.setItem('prp_user', JSON.stringify(data.user)); } catch {}
        }
      }
    } catch {}
    setSaving(false);
    setStep('plan');
  }

  function skipForNow() {
    onComplete();
  }

  // ── Step 1: Ask exam date ──
  if (step === 'date') {
    const today = new Date().toISOString().slice(0, 10);
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="max-w-md w-full space-y-6 text-center px-4">
          <div className="w-16 h-16 rounded-2xl bg-emerald-500/15 flex items-center justify-center mx-auto">
            <Calendar className="w-8 h-8 text-emerald-400" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-white">When is your NCMHCE?</h1>
            <p className="text-slate-400 mt-2 text-sm leading-relaxed">
              We'll build a personalized study plan based on how much time you have.
              You can always change this later.
            </p>
          </div>
          <div>
            <input
              type="date"
              min={today}
              value={examDate}
              onChange={(e) => setExamDate(e.target.value)}
              className="w-full bg-slate-800 border-2 border-slate-700 focus:border-emerald-500 rounded-xl px-4 py-3.5 text-white text-lg text-center outline-none transition-colors"
            />
          </div>
          <div className="space-y-3">
            <button
              onClick={saveAndPlan}
              disabled={!examDate || saving}
              className="w-full bg-emerald-500 hover:bg-emerald-400 disabled:opacity-40 disabled:hover:bg-emerald-500 text-slate-900 font-bold py-3.5 rounded-xl text-lg transition-colors flex items-center justify-center gap-2"
            >
              {saving ? 'Saving…' : 'Build my plan'} <ArrowRight className="w-5 h-5" />
            </button>
            <button onClick={skipForNow} className="text-sm text-slate-500 hover:text-slate-300">
              I don't have a date yet — skip for now
            </button>
          </div>
        </div>
      </div>
    );
  }

  // ── Step 2: Show the plan ──
  const exam = new Date(examDate + 'T12:00:00');
  const daysLeft = daysBetween(new Date(), exam);
  const p1 = Math.max(1, Math.floor(daysLeft * 0.5));
  const p2 = Math.max(1, Math.floor(daysLeft * 0.3));
  const p3 = Math.max(1, daysLeft - p1 - p2);
  const casesPerDay = Math.max(2, Math.min(5, Math.ceil(20 / Math.max(1, p1))));

  const phases = [
    { n: 1, range: `Days 1–${p1}`, title: 'Build your foundation', color: 'text-blue-400 bg-blue-500/15',
      body: `${casesPerDay} cases/day across all domains. Study mode with feedback after each question. Add 15 min of flashcards.`,
      tools: [
        { icon: BookOpen, label: 'Case simulations', action: () => { onComplete(); navigate('cases'); } },
        { icon: Layers, label: 'Flashcards', action: () => { onComplete(); navigate('flashcards'); } },
      ],
    },
    { n: 2, range: `Days ${p1 + 1}–${p1 + p2}`, title: 'Full-length practice', color: 'text-purple-400 bg-purple-500/15',
      body: 'Switch to exam mode (feedback held until the end). Run timed mock exams. Review every miss with the AI debrief.',
      tools: [
        { icon: Clock, label: 'Timed mock exam', action: () => { onComplete(); window.location.href = '/exam.html'; } },
        { icon: Zap, label: 'Core Tutor', action: () => { onComplete(); navigate('coretutor'); } },
      ],
    },
    { n: 3, range: `Days ${p1 + p2 + 1}–${daysLeft}`, title: 'Sharpen and rest', color: 'text-emerald-400 bg-emerald-500/15',
      body: 'Light review of weak spots using the decision trees and DSM reference. Day before: rest.',
      tools: [
        { icon: GitBranch, label: 'Decision trees', action: () => { onComplete(); navigate('trees'); } },
        { icon: Target, label: 'Performance', action: () => { onComplete(); navigate('analytics'); } },
      ],
    },
  ];

  return (
    <div className="max-w-lg mx-auto space-y-6 px-4 py-6">
      <div className="text-center">
        <div className="text-4xl font-extrabold text-white">{daysLeft}</div>
        <div className="text-slate-400">days until your exam</div>
      </div>

      <div className="bg-emerald-500/8 border border-emerald-500/20 rounded-xl p-4 text-center text-sm text-emerald-300">
        <span className="font-bold">Your target:</span> {casesPerDay} cases/day + 15 min flashcards.
        Complete 20 cases before exam day to qualify for the pass guarantee.
      </div>

      <div className="space-y-4">
        {phases.map((ph) => (
          <div key={ph.n} className="bg-slate-800/50 border border-slate-700/60 rounded-2xl p-5">
            <div className="flex gap-3 mb-3">
              <div className={`w-8 h-8 rounded-lg ${ph.color} flex items-center justify-center text-sm font-bold shrink-0`}>{ph.n}</div>
              <div>
                <div className="font-bold text-white text-sm">{ph.range}: {ph.title}</div>
                <div className="text-slate-400 text-sm mt-1">{ph.body}</div>
              </div>
            </div>
            <div className="flex gap-2 ml-11">
              {ph.tools.map((t) => (
                <button key={t.label} onClick={t.action}
                  className="text-xs font-semibold text-emerald-400 bg-emerald-500/10 hover:bg-emerald-500/20 px-3 py-1.5 rounded-full flex items-center gap-1.5 transition-colors">
                  <t.icon className="w-3.5 h-3.5" /> {t.label}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={() => { onComplete(); navigate('cases'); }}
        className="w-full bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-bold py-3.5 rounded-xl text-lg transition-colors"
      >
        Start practicing →
      </button>
    </div>
  );
}
