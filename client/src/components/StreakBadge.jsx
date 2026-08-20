import React, { useEffect, useState } from 'react';
import { Flame } from 'lucide-react';
import { authFetch, getToken } from '../lib/api';

// Small streak indicator. Renders nothing for signed-out users or a
// zero streak (no reason to show "0 day streak" and make someone feel bad
// about not having started yet).
export default function StreakBadge() {
  const [streak, setStreak] = useState(null);

  useEffect(() => {
    if (!getToken()) return;
    authFetch('/api/activity/summary?days=7')
      .then((r) => (r.ok ? r.json() : null))
      .then((data) => { if (data) setStreak(data.currentStreak); })
      .catch(() => {});
  }, []);

  if (!streak || streak < 1) return null;

  return (
    <div className="inline-flex items-center gap-1.5 bg-amber-500/10 border border-amber-500/30 text-amber-400 text-sm font-bold px-3 py-1.5 rounded-full">
      <Flame size={16} />
      <span>{streak} day{streak === 1 ? '' : 's'}</span>
    </div>
  );
}
