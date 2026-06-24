import React, { useState, useEffect } from 'react';
import {
  BookOpen, Brain, GitBranch, Layers, GraduationCap,
  BarChart3, FileText, Award, Home, ChevronRight, Menu, X, MessageSquare,
} from 'lucide-react';
import Dashboard from './pages/Dashboard';
import CaseList from './pages/CaseList';
import CaseSimulation from './pages/CaseSimulation';
import Flashcards from './pages/Flashcards';
import DecisionTrees from './pages/DecisionTrees';
import DsmReference from './pages/DsmReference';
import Guarantee from './pages/Guarantee';
import ExamStrategy from './pages/ExamStrategy';

const NAV_ITEMS = [
  { id: 'home', label: 'Dashboard', icon: Home },
  { id: 'cases', label: 'Case Practice', icon: BookOpen },
  { id: 'microskills', label: 'Microskills', icon: MessageSquare, external: '/skills.html' },
  { id: 'flashcards', label: 'Flashcards', icon: Layers },
  { id: 'trees', label: 'Decision Trees', icon: GitBranch },
  { id: 'dsm', label: 'DSM-5-TR Reference', icon: Brain },
  { id: 'strategy', label: 'Exam Strategy', icon: BarChart3 },
  { id: 'guarantee', label: 'Pass Guarantee', icon: Award },
];

export default function App() {
  const [view, setView] = useState('home');
  const [caseId, setCaseId] = useState(null);
  const [mode, setMode] = useState('new'); // 'new' | 'classic'
  const [examMode, setExamMode] = useState(false); // false = study (feedback each Q), true = exam (held to end)
  const [mobileNav, setMobileNav] = useState(false);

  const navigate = (v, opts) => {
    setView(v);
    if (opts?.caseId) setCaseId(opts.caseId);
    if (opts?.mode) setMode(opts.mode);
    setMobileNav(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderView = () => {
    switch (view) {
      case 'home':
        return <Dashboard navigate={navigate} mode={mode} setMode={setMode} examMode={examMode} setExamMode={setExamMode} />;
      case 'cases':
        return caseId
          ? <CaseSimulation caseId={caseId} mode={mode} examMode={examMode} onBack={() => { setCaseId(null); }} navigate={navigate} />
          : <CaseList mode={mode} examMode={examMode} onSelect={(id) => { setCaseId(id); }} navigate={navigate} />;
      case 'flashcards':
        return <Flashcards />;
      case 'trees':
        return <DecisionTrees />;
      case 'dsm':
        return <DsmReference />;
      case 'strategy':
        return <ExamStrategy />;
      case 'guarantee':
        return <Guarantee />;
      default:
        return <Dashboard navigate={navigate} mode={mode} setMode={setMode} examMode={examMode} setExamMode={setExamMode} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Mobile header */}
      <div className="lg:hidden flex items-center justify-between px-4 py-3 border-b border-slate-700/60">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-emerald-500/15 flex items-center justify-center">
            <GraduationCap className="w-4.5 h-4.5 text-emerald-400" />
          </div>
          <span className="text-white font-bold text-lg">PassReady <span className="text-emerald-400">Prep</span></span>
        </div>
        <button onClick={() => setMobileNav(!mobileNav)} className="text-slate-400 hover:text-white p-1">
          {mobileNav ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile nav overlay */}
      {mobileNav && (
        <div className="lg:hidden fixed inset-0 z-50 bg-slate-900/95 pt-16 px-4">
          <nav className="space-y-1">
            {NAV_ITEMS.map((item) => {
              const Icon = item.icon;
              const active = view === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => item.external ? (window.location.href = item.external) : navigate(item.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-xl text-left transition-colors ${
                    active
                      ? 'bg-emerald-500/15 text-emerald-400'
                      : 'text-slate-400 hover:text-white hover:bg-slate-800'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="font-semibold">{item.label}</span>
                </button>
              );
            })}
          </nav>
        </div>
      )}

      <div className="flex">
        {/* Desktop sidebar */}
        <aside className="hidden lg:flex flex-col w-64 min-h-screen border-r border-slate-700/60 px-4 py-6 sticky top-0">
          <div className="flex items-center gap-2.5 mb-8 px-2">
            <div className="w-9 h-9 rounded-xl bg-emerald-500/15 flex items-center justify-center">
              <GraduationCap className="w-5 h-5 text-emerald-400" />
            </div>
            <div>
              <div className="text-white font-bold text-lg leading-tight">PassReady <span className="text-emerald-400">Prep</span></div>
              <div className="text-emerald-400 text-xs font-semibold tracking-wide">NCMHCE</div>
            </div>
          </div>

          <nav className="flex-1 space-y-1">
            {NAV_ITEMS.map((item) => {
              const Icon = item.icon;
              const active = view === item.id || (item.id === 'cases' && view === 'cases');
              return (
                <button
                  key={item.id}
                  onClick={() => item.external ? (window.location.href = item.external) : navigate(item.id)}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-left text-sm transition-colors ${
                    active
                      ? 'bg-emerald-500/15 text-emerald-400 font-semibold'
                      : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                  }`}
                >
                  <Icon className="w-[18px] h-[18px]" />
                  <span>{item.label}</span>
                  {active && <ChevronRight className="w-4 h-4 ml-auto opacity-50" />}
                </button>
              );
            })}
          </nav>

          <div className="mt-auto pt-4 border-t border-slate-700/60 px-2">
            <p className="text-xs text-slate-600 leading-relaxed">
              © 2025 GA Integrated Therapeutic Perspectives LLC
            </p>
          </div>
        </aside>

        {/* Main content */}
        <main className="flex-1 px-4 py-6 lg:px-8 lg:py-8">
          <div className="max-w-4xl mx-auto">
            {renderView()}
          </div>
        </main>
      </div>
    </div>
  );
}
