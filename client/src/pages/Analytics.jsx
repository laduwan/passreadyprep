// client/src/pages/Analytics.jsx
import React, { useState } from 'react';
import { BarChart3, TrendingUp, TrendingDown, Minus, Target, Calendar, AlertTriangle, Flame, CheckCircle2 } from 'lucide-react';
import { computeAnalytics, DOMAIN_LABELS } from '../lib/readiness';
import { useStudyPing } from '../lib/useStudyPing';

const DIFF_COLOR = { easy: 'text-emerald-400', medium: 'text-amber-400', hard: 'text-red-400' };

function StatCard({ icon: Icon, label, value, sub, color }) {
  return (
    <div className="bg-slate-800/50 border border-slate-700/60 rounded-xl p-4 text-center">
      <Icon className={`w-5 h-5 mx-auto mb-1 ${color || 'text-slate-400'}`} />
      <div className="text-2xl font-extrabold text-white">{value}</div>
      <div className="text-xs text-slate-500">{label}</div>
      {sub && <div className="text-xs text-slate-400 mt-0.5">{sub}</div>}
    </div>
  );
}

function DomainRow({ d }) {
  const bar = (v, color) => v != null ? (
    <div className="flex items-center gap-2">
      <div className="flex-1 h-2 bg-slate-700 rounded-full overflow-hidden">
        <div className={`h-full rounded-full ${color}`} style={{ width: `${v}%` }} />
      </div>
      <span className="text-sm font-bold text-white w-10 text-right">{v}%</span>
    </div>
  ) : <span className="text-xs text-slate-600">—</span>;

  const allColor = d.allTime >= 70 ? 'bg-emerald-500' : d.allTime >= 50 ? 'bg-amber-500' : 'bg-red-500';
  const trend = d.recent7 != null && d.allTime != null
    ? d.recent7 > d.allTime ? 'up' : d.recent7 < d.allTime - 5 ? 'down' : 'steady'
    : null;
  const TrendIcon = trend === 'up' ? TrendingUp : trend === 'down' ? TrendingDown : Minus;
  const trendColor = trend === 'up' ? 'text-emerald-400' : trend === 'down' ? 'text-red-400' : 'text-slate-500';

  return (
    <div className="py-3 border-b border-slate-700/40 last:border-b-0">
      <div className="flex items-center justify-between mb-1.5">
        <span className="text-sm font-semibold text-slate-200">{d.label}</span>
        <div className="flex items-center gap-2">
          <span className="text-xs text-slate-500">{d.questionsAnswered} Qs</span>
          {trend && <TrendIcon className={`w-3.5 h-3.5 ${trendColor}`} />}
        </div>
      </div>
      <div className="space-y-1">
        <div className="flex items-center gap-2">
          <span className="text-xs text-slate-500 w-14">All time</span>
          <div className="flex-1">{bar(d.allTime, allColor)}</div>
        </div>
        {d.recent7 != null && (
          <div className="flex items-center gap-2">
            <span className="text-xs text-slate-500 w-14">Last 7d</span>
            <div className="flex-1">{bar(d.recent7, d.recent7 >= 70 ? 'bg-emerald-500' : d.recent7 >= 50 ? 'bg-amber-500' : 'bg-red-500')}</div>
          </div>
        )}
      </div>
    </div>
  );
}

function ActivityChart({ dailySeries }) {
  const max = Math.max(1, ...dailySeries.map((d) => d.count));
  return (
    <div className="flex items-end gap-0.5 h-20">
      {dailySeries.map((d) => (
        <div key={d.date} className="flex-1 flex flex-col items-center justify-end h-full group relative">
          <div
            className={`w-full rounded-t-sm transition-all ${d.count > 0 ? 'bg-emerald-500' : 'bg-slate-700/50'}`}
            style={{ height: `${Math.max(2, (d.count / max) * 100)}%` }}
          />
          <div className="absolute -top-7 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-slate-700 text-white text-xs px-1.5 py-0.5 rounded whitespace-nowrap pointer-events-none">
            {d.date.slice(5)}: {d.count}
          </div>
        </div>
      ))}
    </div>
  );
}

export default function Analytics({ navigate }) {
  useStudyPing('analytics');
  const [tab, setTab] = useState('domains');
  const data = computeAnalytics();

  if (!data || data.totalCases === 0) {
    return (
      <div className="text-center py-16 space-y-3">
        <BarChart3 className="w-10 h-10 mx-auto text-slate-600" />
        <h1 className="text-xl font-bold text-white">No data yet</h1>
        <p className="text-slate-400 text-sm">Complete a few cases and your performance breakdown will appear here.</p>
        <button onClick={() => navigate('cases')} className="bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-bold px-5 py-2.5 rounded-xl">
          Start practicing ›
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-5">
      <div>
        <div className="flex items-center gap-2">
          <BarChart3 className="w-6 h-6 text-blue-400" />
          <h1 className="text-2xl font-bold text-white">Performance</h1>
        </div>
        <p className="text-slate-400 mt-1 text-sm">Your accuracy, trends, and weak spots — updated after every case.</p>
      </div>

      {/* Summary cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <StatCard icon={Target} label="Cases" value={data.totalCases} color="text-blue-400" />
        <StatCard icon={CheckCircle2} label="Accuracy" value={`${data.overallAccuracy}%`} color={data.overallAccuracy >= 70 ? 'text-emerald-400' : 'text-amber-400'} />
        <StatCard icon={Flame} label="Streak" value={`${data.streak}d`} color="text-orange-400" />
        <StatCard icon={Calendar} label={data.pacing ? 'Days left' : 'Set exam date'} value={data.pacing ? data.pacing.daysLeft : '—'} color="text-purple-400"
          sub={data.pacing ? `${data.pacing.avgPerDay}/day avg` : null} />
      </div>

      {/* Pacing alert */}
      {data.pacing && (
        <div className={`rounded-xl border p-4 text-sm ${data.pacing.onTrack
          ? 'bg-emerald-500/8 border-emerald-500/20 text-emerald-300'
          : 'bg-amber-500/8 border-amber-500/20 text-amber-300'}`}>
          <span className="font-bold">{data.pacing.onTrack ? 'On track' : 'Behind pace'}</span>
          {' — '}
          {data.pacing.daysLeft} days until exam. {data.pacing.totalDone} cases done, averaging {data.pacing.avgPerDay}/day.
          {!data.pacing.onTrack && <> Aim for at least {data.pacing.recommendedPerDay} cases/day to hit 20 before exam day.</>}
        </div>
      )}

      {/* Tab bar */}
      <div className="flex gap-2">
        {[
          { id: 'domains', label: 'By Domain' },
          { id: 'categories', label: 'By Category' },
          { id: 'difficulty', label: 'By Difficulty' },
        ].map((t) => (
          <button key={t.id} onClick={() => setTab(t.id)}
            className={`text-xs font-semibold px-3 py-1.5 rounded-full border transition-colors ${
              tab === t.id ? 'bg-emerald-500 text-slate-900 border-emerald-500' : 'border-slate-700 text-slate-300 hover:border-slate-500'}`}>
            {t.label}
          </button>
        ))}
      </div>

      {/* Domain breakdown */}
      {tab === 'domains' && (
        <div className="bg-slate-800/50 border border-slate-700/60 rounded-2xl p-5">
          <h2 className="text-sm font-bold text-white mb-1">Domain accuracy</h2>
          <p className="text-xs text-slate-500 mb-3">All-time vs last 7 days. Arrow shows trend direction.</p>
          {data.domainStats.filter((d) => d.questionsAnswered > 0).map((d) => (
            <DomainRow key={d.domain} d={d} />
          ))}
          {data.domainStats.every((d) => d.questionsAnswered === 0) && (
            <p className="text-sm text-slate-500">No domain data yet.</p>
          )}
        </div>
      )}

      {/* Category breakdown */}
      {tab === 'categories' && (
        <div className="bg-slate-800/50 border border-slate-700/60 rounded-2xl p-5">
          <h2 className="text-sm font-bold text-white mb-1">Diagnostic category accuracy</h2>
          <p className="text-xs text-slate-500 mb-3">Sorted weakest first. Categories with 3+ questions shown.</p>
          <div className="space-y-2">
            {data.categoryStats.filter((c) => c.questions >= 1).map((c) => {
              const color = c.accuracy >= 70 ? 'bg-emerald-500' : c.accuracy >= 50 ? 'bg-amber-500' : 'bg-red-500';
              return (
                <div key={c.category} className="flex items-center gap-3">
                  <span className="text-sm text-slate-300 w-32 shrink-0 truncate" title={c.category}>{c.category}</span>
                  <div className="flex-1 h-2 bg-slate-700 rounded-full overflow-hidden">
                    <div className={`h-full rounded-full ${color}`} style={{ width: `${c.accuracy}%` }} />
                  </div>
                  <span className="text-sm font-bold text-white w-10 text-right">{c.accuracy}%</span>
                  <span className="text-xs text-slate-500 w-14 text-right">{c.cases} case{c.cases === 1 ? '' : 's'}</span>
                </div>
              );
            })}
            {data.categoryStats.length === 0 && <p className="text-sm text-slate-500">Category data starts appearing after your next case.</p>}
          </div>
        </div>
      )}

      {/* Difficulty breakdown */}
      {tab === 'difficulty' && (
        <div className="bg-slate-800/50 border border-slate-700/60 rounded-2xl p-5">
          <h2 className="text-sm font-bold text-white mb-1">Accuracy by difficulty</h2>
          <div className="space-y-3 mt-3">
            {data.diffStats.map((d) => (
              <div key={d.difficulty} className="flex items-center gap-3">
                <span className={`text-sm font-bold capitalize w-16 ${DIFF_COLOR[d.difficulty]}`}>{d.difficulty}</span>
                <div className="flex-1 h-2.5 bg-slate-700 rounded-full overflow-hidden">
                  <div className={`h-full rounded-full ${d.accuracy >= 70 ? 'bg-emerald-500' : d.accuracy >= 50 ? 'bg-amber-500' : 'bg-red-500'}`}
                    style={{ width: `${d.accuracy || 0}%` }} />
                </div>
                <span className="text-sm font-bold text-white w-10 text-right">{d.accuracy ?? '—'}%</span>
                <span className="text-xs text-slate-500 w-14 text-right">{d.cases} case{d.cases === 1 ? '' : 's'}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Activity chart */}
      <div className="bg-slate-800/50 border border-slate-700/60 rounded-2xl p-5">
        <h2 className="text-sm font-bold text-white mb-1">Daily activity</h2>
        <p className="text-xs text-slate-500 mb-3">Cases completed per day (last 30 days). Hover for details.</p>
        <ActivityChart dailySeries={data.dailySeries} />
        <div className="flex justify-between text-xs text-slate-600 mt-1">
          <span>{data.dailySeries[0]?.date.slice(5)}</span>
          <span>Today</span>
        </div>
      </div>

      {/* Weak areas */}
      {data.weakAreas.length > 0 && (
        <div className="bg-amber-500/8 border border-amber-500/20 rounded-2xl p-5">
          <div className="flex items-center gap-2 mb-2">
            <AlertTriangle className="w-5 h-5 text-amber-400" />
            <h2 className="text-sm font-bold text-amber-400">Areas to focus</h2>
          </div>
          <p className="text-xs text-slate-400 mb-3">Below 65% accuracy with 3+ questions answered.</p>
          <div className="space-y-2">
            {data.weakAreas.slice(0, 5).map((w) => (
              <div key={w.key} className="flex items-center justify-between">
                <div>
                  <span className="text-sm font-semibold text-white">{w.label}</span>
                  <span className="text-xs text-slate-500 ml-2">{w.type === 'domain' ? 'Domain' : 'Category'} · {w.questions} Qs</span>
                </div>
                <span className="text-sm font-bold text-red-400">{w.score}%</span>
              </div>
            ))}
          </div>
          <button onClick={() => navigate('cases')} className="mt-3 bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold px-4 py-2 rounded-xl text-sm">
            Practice weak areas ›
          </button>
        </div>
      )}
    </div>
  );
}
