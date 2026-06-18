// client/src/pages/DecisionTrees.jsx
import React, { useState } from 'react';
import { GitBranch, Shield, Brain, Activity, Wind, FileText, Layers, ChevronRight, ArrowLeft, RotateCcw, CheckCircle2, X as XIcon, Lightbulb, AlertCircle, Target, Eye } from 'lucide-react';
import { DT_TREES, DT_CATEGORIES } from '../lib/treeData';

const ICONS = { suicide: Shield, levelOfCare: Layers, mood: Brain, trauma: Activity, anxiety: Wind, ethics: FileText };

export default function DecisionTrees() {
  const [treeId, setTreeId] = useState(null);
  const [nodeId, setNodeId] = useState(null);
  const [trail, setTrail] = useState([]);

  const tree = treeId ? DT_TREES[treeId] : null;
  const node = tree ? tree.nodes.find((n) => n.id === nodeId) : null;
  const isOutcome = !!(node && node.outcome);

  function openTree(id) { setTreeId(id); setNodeId(DT_TREES[id].startId || 1); setTrail([]); }
  function answer(choice) {
    const next = choice === 'yes' ? node.yes : node.no;
    setTrail([...trail, { q: node.question, a: choice }]);
    setNodeId(next);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  function backToLibrary() { setTreeId(null); setNodeId(null); setTrail([]); }

  // ── Library ──
  if (!tree) {
    return (
      <div className="space-y-6">
        <div>
          <div className="flex items-center gap-2">
            <GitBranch className="w-6 h-6 text-purple-400" />
            <h1 className="text-2xl font-bold text-white">Decision Trees</h1>
          </div>
          <p className="text-slate-400 mt-1 text-sm">Interactive clinical reasoning — each pathway teaches what to notice, why it matters, and where the Golden Formula lands you.</p>
        </div>
        <div className="bg-purple-500/8 border border-purple-500/20 rounded-xl p-4 text-sm text-slate-300">
          <span className="font-bold text-purple-400">How to use</span> — Pick a tree, read each clinical question, choose Yes or No. Teaching notes at every branch. Run multiple times to see all pathways.
        </div>
        {DT_CATEGORIES.map((cat) => {
          const trees = Object.values(DT_TREES).filter((t) => t.category === cat.id);
          if (!trees.length) return null;
          return (
            <div key={cat.id}>
              <h3 className="text-xs font-bold uppercase tracking-wide text-slate-400 mb-2">{cat.label} <span className="font-normal text-slate-600">— {cat.blurb}</span></h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {trees.map((t) => {
                  const Icon = ICONS[t.id] || GitBranch;
                  return (
                    <button key={t.id} onClick={() => openTree(t.id)}
                      className="text-left bg-slate-800/50 border border-slate-700/60 hover:border-purple-500/40 rounded-xl p-4 transition-colors group">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-lg bg-slate-700/60 group-hover:bg-purple-500/15 flex items-center justify-center">
                          <Icon className="w-5 h-5 text-purple-300" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-white font-semibold text-sm">{t.title}</p>
                          <p className="text-xs text-slate-500">{t.domain}</p>
                        </div>
                        <ChevronRight className="w-4 h-4 text-slate-600 group-hover:text-purple-400 shrink-0" />
                      </div>
                      <p className="text-sm text-slate-400 mt-2">{t.description}</p>
                    </button>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    );
  }

  // ── Walkthrough ──
  const TreeIcon = ICONS[tree.id] || GitBranch;
  return (
    <div className="space-y-5">
      <div>
        <button onClick={backToLibrary} className="text-sm text-slate-400 hover:text-white flex items-center gap-1 mb-2">
          <ArrowLeft className="w-4 h-4" /> All trees
        </button>
        <div className="flex items-center gap-2">
          <TreeIcon className="w-6 h-6 text-purple-400" />
          <h1 className="text-xl font-bold text-white">{tree.title}</h1>
        </div>
        <p className="text-slate-400 text-sm mt-1">{tree.description}</p>
      </div>

      <div className="grid sm:grid-cols-3 gap-3">
        {[
          { icon: Eye, label: 'What to notice', color: 'text-teal-400', text: tree.whatToNotice },
          { icon: AlertCircle, label: 'Why it matters', color: 'text-amber-400', text: tree.whyItMatters },
          { icon: Target, label: 'Golden Formula', color: 'text-purple-400', text: tree.goldenFormula },
        ].map((panel) => (
          <div key={panel.label} className="bg-slate-800/60 border border-slate-700/60 rounded-xl p-3.5">
            <div className="flex items-center gap-1.5 mb-1">
              <panel.icon className={`w-4 h-4 ${panel.color}`} />
              <span className={`text-xs font-bold uppercase tracking-wide ${panel.color}`}>{panel.label}</span>
            </div>
            <p className="text-sm text-slate-300 leading-relaxed">{panel.text}</p>
          </div>
        ))}
      </div>

      {trail.length > 0 && (
        <div className="flex flex-wrap gap-1.5">
          {trail.map((s, i) => (
            <span key={i} className={`inline-flex items-center gap-1 text-xs font-bold px-2.5 py-1 rounded-full border ${
              s.a === 'yes' ? 'border-emerald-700/50 bg-emerald-900/20 text-emerald-300' : 'border-slate-600 bg-slate-800 text-slate-300'}`}>
              {s.a === 'yes' ? <CheckCircle2 className="w-3 h-3" /> : <XIcon className="w-3 h-3" />} {s.a.toUpperCase()}
            </span>
          ))}
        </div>
      )}

      {!isOutcome && node && (
        <div className="bg-slate-800/50 border-2 border-purple-500/25 rounded-2xl p-6">
          <p className="text-xs font-bold uppercase tracking-wide text-slate-500 mb-2">Decision point</p>
          <p className="text-lg text-white font-semibold leading-snug">{node.question}</p>
          {node.teach && (
            <div className="mt-4 flex items-start gap-2 bg-slate-900/60 border border-slate-700/50 rounded-lg p-3">
              <Lightbulb className="w-4 h-4 text-amber-400 mt-0.5 shrink-0" />
              <p className="text-sm text-slate-300 leading-relaxed">{node.teach}</p>
            </div>
          )}
          <div className="flex gap-3 mt-5">
            <button onClick={() => answer('yes')} className="flex-1 flex items-center justify-center gap-2 bg-slate-700 hover:bg-emerald-600 text-white font-bold py-3 rounded-xl transition-colors">
              <CheckCircle2 className="w-5 h-5" /> Yes
            </button>
            <button onClick={() => answer('no')} className="flex-1 flex items-center justify-center gap-2 bg-slate-700 hover:bg-slate-600 text-white font-bold py-3 rounded-xl transition-colors">
              <XIcon className="w-5 h-5" /> No
            </button>
          </div>
        </div>
      )}

      {isOutcome && node && (
        <div className="rounded-2xl p-6 border-2" style={{ borderColor: node.color, backgroundColor: node.color + '1A' }}>
          <div className="flex items-center gap-2">
            <span className="text-xs font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-md" style={{ backgroundColor: node.color, color: '#0b1120' }}>Outcome</span>
            <h3 className="text-xl font-bold text-white">{node.outcome}</h3>
          </div>
          <div className="mt-4">
            <p className="text-xs font-bold uppercase tracking-wide text-slate-400 mb-1">Recommended action</p>
            <p className="text-slate-100 leading-relaxed">{node.action}</p>
          </div>
          {node.clinicalNote && (
            <div className="mt-4 bg-slate-900/50 rounded-lg p-3">
              <p className="text-sm text-slate-300"><span className="font-bold text-slate-200">Exam note:</span> {node.clinicalNote}</p>
            </div>
          )}
          <div className="flex gap-3 mt-5">
            <button onClick={() => openTree(tree.id)} className="bg-slate-700 hover:bg-slate-600 text-white font-bold px-4 py-2.5 rounded-xl flex items-center gap-2">
              <RotateCcw className="w-4 h-4" /> Run again
            </button>
            <button onClick={backToLibrary} className="bg-purple-600 hover:bg-purple-500 text-white font-bold px-4 py-2.5 rounded-xl">
              Choose another ›
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
