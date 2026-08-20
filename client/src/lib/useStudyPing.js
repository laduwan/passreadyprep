import { useEffect, useRef } from 'react';
import { authFetch } from './api';

// Pings /api/activity/ping roughly once a minute while the tab is visible,
// crediting the current tool with elapsed engaged seconds. Silently does
// nothing for signed-out users (authFetch just omits the auth header, and
// the backend route requires auth, so a 401 is expected and harmless).
export function useStudyPing(tool) {
  const lastPing = useRef(Date.now());
  const visibleRef = useRef(!document.hidden);

  useEffect(() => {
    const onVisibility = () => {
      visibleRef.current = !document.hidden;
      if (visibleRef.current) lastPing.current = Date.now();
    };
    document.addEventListener('visibilitychange', onVisibility);

    const interval = setInterval(() => {
      if (!visibleRef.current) return;
      const now = Date.now();
      const seconds = Math.round((now - lastPing.current) / 1000);
      lastPing.current = now;
      if (seconds <= 0) return;

      const day = new Date().toLocaleDateString('en-CA'); // YYYY-MM-DD, local

      authFetch('/api/activity/ping', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ tool, seconds, day }),
      }).catch(() => {}); // best-effort; never interrupts the study session
    }, 60000);

    return () => {
      clearInterval(interval);
      document.removeEventListener('visibilitychange', onVisibility);
    };
  }, [tool]);
}
