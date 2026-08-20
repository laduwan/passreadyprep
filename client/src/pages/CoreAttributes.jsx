// client/src/pages/CoreAttributes.jsx
import React, { useState } from 'react';
import {
  Heart, Lightbulb, MessageCircle, Users, Shield,
  Search, ChevronDown, ChevronRight, Sparkles, AlertTriangle, MessageSquare,
} from 'lucide-react';

import { CA_SECTIONS } from '../lib/coreAttributesData';

const ICONS = { Heart, Lightbulb, MessageCircle, Users, Shield };
const COLORS = {
  rose:    { badge: 'text-rose-400 bg-rose-500/15 border-rose-500/25',   accent: 'text-rose-400',   bg: 'bg-rose-500/8',  border: 'border-rose-500/20',  glow: 'hover:border-rose-500/30' },
  blue:    { badge: 'text-blue-400 bg-blue-500/15 border-blue-500/25',   accent: 'text-blue-400',   bg: 'bg-blue-500/8',  border: 'border-blue-500/20',  glow: 'hover:border-blue-500/30' },
  emerald: { badge: 'text-emerald-400 bg-emerald-500/15 border-emerald-500/25', accent: 'text-emerald-400', bg: 'bg-emerald-500/8', border: 'border-emerald-500/20', glow: 'hover:border-emerald-500/30' },
  amber:   { badge: 'text-amber-400 bg-amber-500/15 border-amber-500/25', accent: 'text-amber-400', bg: 'bg-amber-500/8', border: 'border-amber-500/20', glow: 'hover:border-amber-500/30' },
  purple:  { badge: 'text-purple-400 bg-purple-500/15 border-purple-500/25', accent: 'text-purple-400', bg: 'bg-purple-500/8', border: 'border-purple-500/20', glow: 'hover:border-purple-500/30' },
};

function TopicCard({ topic, color }) {
  const [open, setOpen] = useState(false);
  const c = COLORS[color];

  return (
    <div className={`bg-slate-800/50 border border-slate-700/60 rounded-xl transition-colors ${c.glow}`}>
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-start gap-3 px-4 py-3.5 text-left"
        aria-expanded={open}
      >
        <div className="mt-0.5">
          {open
            ? <ChevronDown className={`w-4 h-4 ${c.accent}`} />
            : <ChevronRight className="w-4 h-4 text-slate-500" />}
        </div>
        <div className="flex-1 min-w-0">
          <div className="font-bold text-white text-[15px] leading-snug">{topic.title}</div>
          <div className="text-slate-400 text-sm mt-0.5 leading-relaxed">{topic.keyIdea}</div>
        </div>
      </button>

      {open && (
        <div className="px-4 pb-4 space-y-3">
          {/* Opening context */}
          {topic.opening && (
            <p className="ml-7 text-sm text-slate-300 leading-relaxed">{topic.opening}</p>
          )}

          {/* Content items */}
          <div className="space-y-2.5 ml-7">
            {topic.content.map((item, i) => (
              <div key={i}>
                <div className={`font-semibold text-sm ${c.accent}`}>{item.label}</div>
                <div className="text-slate-300 text-sm leading-relaxed">{item.detail}</div>
              </div>
            ))}
          </div>

          {/* Exam tip */}
          {topic.examTip && (
            <div className={`ml-7 ${c.bg} ${c.border} border rounded-lg p-3`}>
              <div className="flex items-center gap-1.5 mb-1">
                <Sparkles className={`w-3.5 h-3.5 ${c.accent}`} />
                <span className={`text-xs font-bold uppercase tracking-wide ${c.accent}`}>Exam Tip</span>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed">{topic.examTip}</p>
            </div>
          )}

          {/* Dialogue example */}
          {topic.dialogue && (
            <div className="ml-7 bg-slate-900/60 border border-slate-700/50 rounded-lg p-3 space-y-2">
              <div className="flex items-center gap-1.5 mb-1">
                <MessageSquare className="w-3.5 h-3.5 text-slate-400" />
                <span className="text-xs font-bold uppercase tracking-wide text-slate-400">Clinical Example</span>
              </div>
              <p className="text-sm text-slate-300 italic">{topic.dialogue.setup}</p>
              <div className="flex items-start gap-2">
                <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400 bg-emerald-500/15 px-1.5 py-0.5 rounded mt-0.5 shrink-0">Best</span>
                <p className="text-sm text-emerald-300/90">{topic.dialogue.good}</p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-[10px] font-bold uppercase tracking-wider text-red-400 bg-red-500/15 px-1.5 py-0.5 rounded mt-0.5 shrink-0">Trap</span>
                <p className="text-sm text-red-300/80">{topic.dialogue.bad}</p>
              </div>
            </div>
          )}

          {/* Closing takeaway */}
          {topic.closing && (
            <div className="ml-7 border-l-2 border-slate-600 pl-3">
              <p className="text-sm text-white font-medium leading-relaxed">{topic.closing}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default function CoreAttributes() {
  const [query, setQuery] = useState('');
  const [activeSection, setActiveSection] = useState(null);

  const q = query.toLowerCase().trim();

  // Filter topics by search query
  const filteredSections = CA_SECTIONS.map((section) => {
    if (activeSection && section.id !== activeSection) return { ...section, topics: [] };
    if (!q) return section;
    const matchedTopics = section.topics.filter((topic) => {
      const searchable = [
        topic.title, topic.keyIdea,
        ...topic.content.map((c) => c.label + ' ' + c.detail),
        topic.examTip || '',
      ].join(' ').toLowerCase();
      return searchable.includes(q);
    });
    return { ...section, topics: matchedTopics };
  }).filter((s) => s.topics.length > 0 || (!q && !activeSection));

  const totalTopics = CA_SECTIONS.reduce((sum, s) => sum + s.topics.length, 0);

  return (
    <div className="space-y-4">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2">
          <Shield className="w-6 h-6 text-purple-400" />
          <h1 className="text-2xl font-bold text-white">Core Counseling Attributes</h1>
        </div>
        <p className="text-slate-400 mt-1 text-sm">
          {totalTopics} topics across {CA_SECTIONS.length} domains — alliance, theories, skills, group work, clinical priorities.
        </p>
      </div>

      {/* How to use */}
      <div className="bg-purple-500/8 border border-purple-500/20 rounded-xl p-3.5 text-sm text-slate-300">
        <span className="font-bold text-purple-400">How to use</span> — Review foundational counseling concepts the NCMHCE tests through case simulations. Tap any topic to expand key concepts, exam tips, and clinical examples. Search by keyword to find specific skills or theories.
      </div>

      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search topics, skills, theories…"
          className="w-full bg-slate-800/60 border border-slate-700 rounded-xl pl-10 pr-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500"
        />
      </div>

      {/* Section filters */}
      <div className="flex gap-2 flex-wrap">
        <button
          onClick={() => setActiveSection(null)}
          className={`text-xs font-semibold px-3 py-1.5 rounded-full border transition-colors ${
            !activeSection ? 'bg-emerald-500 text-slate-900 border-emerald-500' : 'border-slate-700 text-slate-300 hover:bg-slate-800'
          }`}
        >
          All
        </button>
        {CA_SECTIONS.map((s) => {
          const c = COLORS[s.color];
          const active = activeSection === s.id;
          return (
            <button
              key={s.id}
              onClick={() => setActiveSection(active ? null : s.id)}
              className={`text-xs font-semibold px-3 py-1.5 rounded-full border transition-colors ${
                active ? 'bg-emerald-500 text-slate-900 border-emerald-500' : 'border-slate-700 text-slate-300 hover:bg-slate-800'
              }`}
            >
              {s.title}
            </button>
          );
        })}
      </div>

      {/* Sections */}
      {filteredSections.map((section) => {
        const Icon = ICONS[section.icon] || Shield;
        const c = COLORS[section.color];
        return (
          <div key={section.id} className="space-y-2">
            <div className="flex items-center gap-2 mt-3">
              <Icon className={`w-5 h-5 ${c.accent}`} />
              <h2 className="text-lg font-bold text-white">{section.title}</h2>
              <span className={`text-xs font-semibold px-2 py-0.5 rounded-full border ${c.badge}`}>
                {section.topics.length}
              </span>
            </div>
            {!q && !activeSection && (
              <p className="text-slate-400 text-sm ml-7">{section.summary}</p>
            )}
            <div className="space-y-2">
              {section.topics.map((topic) => (
                <TopicCard key={topic.id} topic={topic} color={section.color} />
              ))}
            </div>
          </div>
        );
      })}

      {filteredSections.length === 0 && (
        <div className="text-center py-8 text-slate-400">No topics match your search.</div>
      )}
    </div>
  );
}
