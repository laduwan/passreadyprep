// client/src/pages/CoreTutor.jsx
import React, { useState, useRef, useEffect } from 'react';
import { Mic, MicOff, Send, RefreshCw, BookOpen, ChevronDown } from 'lucide-react';

const DOMAINS = [
  { id: '', label: 'All Domains' },
  { id: 'alliance', label: 'Alliance' },
  { id: 'theories', label: 'Theories' },
  { id: 'skills', label: 'Microskills' },
  { id: 'group', label: 'Group' },
  { id: 'priority', label: 'Priority Ladder' },
];

const DOMAIN_COLORS = {
  alliance: 'text-rose-400 bg-rose-500/15 border-rose-500/25',
  theories: 'text-blue-400 bg-blue-500/15 border-blue-500/25',
  skills: 'text-emerald-400 bg-emerald-500/15 border-emerald-500/25',
  group: 'text-amber-400 bg-amber-500/15 border-amber-500/25',
  priority: 'text-purple-400 bg-purple-500/15 border-purple-500/25',
};

const SR = typeof window !== 'undefined' && (window.SpeechRecognition || window.webkitSpeechRecognition);

export default function CoreTutor() {
  const [domain, setDomain] = useState('');
  const [scenario, setScenario] = useState(null);
  const [response, setResponse] = useState('');
  const [feedback, setFeedback] = useState(null);
  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(false);
  const [listening, setListening] = useState(false);
  const [roundCount, setRoundCount] = useState(0);
  const recRef = useRef(null);
  const textRef = useRef(null);

  const fetchRound = async () => {
    setFetching(true);
    setFeedback(null);
    setResponse('');
    try {
      const url = domain ? `/api/core-tutor/round?domain=${domain}` : '/api/core-tutor/round';
      const r = await fetch(url);
      const data = await r.json();
      setScenario(data);
    } catch (e) {
      setScenario(null);
    }
    setFetching(false);
  };

  const submitResponse = async () => {
    if (!response.trim() || !scenario || loading) return;
    setLoading(true);
    try {
      const r = await fetch('/api/core-tutor/evaluate', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ scenarioId: scenario.id, prompt: scenario.prompt, response: response.trim() }),
      });
      const data = await r.json();
      setFeedback(data.feedback || data.error || '[No feedback returned]');
      setRoundCount(c => c + 1);
    } catch (e) {
      setFeedback('[Connection error — try again]');
    }
    setLoading(false);
  };

  const toggleMic = () => {
    if (!SR) return;
    if (listening && recRef.current) {
      recRef.current.stop();
      recRef.current = null;
      setListening(false);
      return;
    }
    const rec = new SR();
    recRef.current = rec;
    rec.lang = 'en-US';
    rec.interimResults = true;
    rec.continuous = true;
    rec.maxAlternatives = 1;
    const base = response ? response.trim() + ' ' : '';
    rec.onresult = (e) => {
      let t = '';
      for (let i = 0; i < e.results.length; i++) t += e.results[i][0].transcript;
      setResponse(base + t);
    };
    rec.onerror = (ev) => {
      if (ev.error === 'not-allowed' || ev.error === 'service-not-allowed') {
        alert('Microphone access is blocked. Allow the mic in your browser settings and try again.');
      }
    };
    rec.onend = () => { recRef.current = null; setListening(false); };
    setListening(true);
    rec.start();
  };

  // Auto-focus textarea when scenario loads
  useEffect(() => {
    if (scenario && textRef.current && !feedback) {
      textRef.current.focus();
    }
  }, [scenario, feedback]);

  const dc = scenario ? (DOMAIN_COLORS[scenario.domain] || DOMAIN_COLORS.priority) : '';

  return (
    <div className="space-y-4">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2">
          <BookOpen className="w-6 h-6 text-emerald-400" />
          <h1 className="text-2xl font-bold text-white">Core Attributes Tutor</h1>
        </div>
        <p className="text-slate-400 mt-1 text-sm">
          Practice clinical reasoning with AI-scored scenarios. Type or speak your response — Dr. Moreau gives you honest feedback.
        </p>
      </div>

      {/* Info box */}
      <div className="bg-emerald-500/8 border border-emerald-500/20 rounded-xl p-3.5 text-sm text-slate-300">
        <span className="font-bold text-emerald-400">How it works</span> — Pick a domain or leave it on All. Read the clinical scenario. Type or dictate your best response as if you were on the exam. Hit Score and Dr. Moreau evaluates your clinical reasoning against the NCMHCE standard.
        {roundCount > 0 && <span className="text-slate-500 ml-2">({roundCount} completed this session)</span>}
      </div>

      {/* Limitation disclaimer */}
      <div className="bg-amber-500/8 border border-amber-500/20 rounded-xl p-3.5 text-sm text-slate-400">
        <span className="font-bold text-amber-400">Important limitation</span> — This AI evaluator scores the content of your written response only. It cannot assess tone of voice, pacing, facial expression, body language, or therapeutic presence — all of which weigh heavily in real clinical encounters and on supervised practice. Use this tool to sharpen your clinical reasoning and word choice, but remember that strong counseling is more than words on a screen.
      </div>

      {/* Domain picker + start */}
      {!scenario && (
        <div className="bg-slate-800/50 border border-slate-700/60 rounded-xl p-5 space-y-4">
          <div className="text-white font-semibold text-[15px]">Choose a focus area</div>
          <div className="flex gap-2 flex-wrap">
            {DOMAINS.map(d => (
              <button
                key={d.id}
                onClick={() => setDomain(d.id)}
                className={`text-xs font-semibold px-3 py-1.5 rounded-full border transition-colors ${
                  domain === d.id
                    ? 'bg-emerald-500 text-slate-900 border-emerald-500'
                    : 'border-slate-700 text-slate-300 hover:bg-slate-800'
                }`}
              >
                {d.label}
              </button>
            ))}
          </div>
          <button
            onClick={fetchRound}
            disabled={fetching}
            className="flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-bold px-5 py-3 rounded-xl transition-colors disabled:opacity-50"
          >
            {fetching ? 'Loading…' : 'Start a scenario'}
          </button>
        </div>
      )}

      {/* Active scenario */}
      {scenario && (
        <div className="space-y-3">
          {/* Scenario card */}
          <div className="bg-slate-800/50 border border-slate-700/60 rounded-xl p-4">
            <div className="flex items-center gap-2 mb-3">
              <span className={`text-xs font-bold px-2.5 py-1 rounded-full border ${dc}`}>
                {scenario.domainLabel}
              </span>
              <span className="text-xs text-slate-500">
                Tests: {scenario.targetConcepts.join(', ')}
              </span>
            </div>
            <div className="bg-slate-900/60 border border-slate-700/50 rounded-lg p-3.5">
              <p className="text-[15px] text-slate-200 leading-relaxed">{scenario.prompt}</p>
            </div>
          </div>

          {/* Response area */}
          {!feedback && (
            <div className="space-y-2">
              <textarea
                ref={textRef}
                value={response}
                onChange={(e) => setResponse(e.target.value)}
                placeholder={SR ? 'Type your response, or tap the mic to speak…' : 'Type your response…'}
                rows={4}
                className="w-full bg-slate-800/60 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 resize-y text-[15px] leading-relaxed"
              />
              <div className="flex gap-2 flex-wrap">
                {SR && (
                  <button
                    onClick={toggleMic}
                    className={`flex items-center gap-1.5 px-4 py-2.5 rounded-xl font-semibold text-sm transition-colors ${
                      listening
                        ? 'bg-red-500/20 text-red-400 border border-red-500/30'
                        : 'bg-slate-700/50 text-slate-300 border border-slate-700 hover:bg-slate-700'
                    }`}
                  >
                    {listening ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4" />}
                    {listening ? 'Stop' : 'Mic'}
                  </button>
                )}
                <button
                  onClick={submitResponse}
                  disabled={!response.trim() || loading}
                  className="flex items-center gap-1.5 bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-bold px-5 py-2.5 rounded-xl transition-colors disabled:opacity-50"
                >
                  <Send className="w-4 h-4" />
                  {loading ? 'Scoring…' : 'Score my response'}
                </button>
              </div>
              {!SR && (
                <p className="text-xs text-slate-500">Voice input requires Chrome (desktop or Android). You can type here instead.</p>
              )}
            </div>
          )}

          {/* Feedback */}
          {feedback && (
            <div className="space-y-3">
              <div className="bg-slate-800/50 border border-slate-700/60 rounded-xl p-4">
                <div className="flex items-center gap-1.5 mb-2">
                  <div className="w-6 h-6 rounded-full bg-emerald-500/15 flex items-center justify-center">
                    <span className="text-xs font-bold text-emerald-400">CM</span>
                  </div>
                  <span className="text-xs font-bold text-emerald-400 uppercase tracking-wide">Dr. Claire Moreau</span>
                </div>
                <div className="text-sm text-slate-300 leading-relaxed whitespace-pre-wrap">{feedback}</div>
              </div>

              {/* Your response (collapsed) */}
              <details className="bg-slate-900/40 border border-slate-700/40 rounded-lg">
                <summary className="px-3.5 py-2.5 text-xs font-semibold text-slate-500 cursor-pointer flex items-center gap-1.5">
                  <ChevronDown className="w-3.5 h-3.5" /> Your response
                </summary>
                <div className="px-3.5 pb-3 text-sm text-slate-400">{response}</div>
              </details>

              {/* Next actions */}
              <div className="flex gap-2 flex-wrap">
                <button
                  onClick={fetchRound}
                  className="flex items-center gap-1.5 bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-bold px-5 py-2.5 rounded-xl transition-colors"
                >
                  <RefreshCw className="w-4 h-4" /> Next scenario
                </button>
                <button
                  onClick={() => { setScenario(null); setFeedback(null); setResponse(''); }}
                  className="flex items-center gap-1.5 bg-slate-700/50 text-slate-300 border border-slate-700 px-4 py-2.5 rounded-xl font-semibold text-sm hover:bg-slate-700 transition-colors"
                >
                  Change domain
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
