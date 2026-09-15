import React, { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';

function getInitial() {
  try {
    const stored = localStorage.getItem('prp_theme');
    if (stored === 'light' || stored === 'dark') return stored;
  } catch {}
  return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
}

function apply(theme) {
  const root = document.documentElement;
  root.classList.remove('theme-light', 'theme-dark');
  root.classList.add(theme === 'light' ? 'theme-light' : 'theme-dark');
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState(getInitial);

  useEffect(() => {
    apply(theme);
    try { localStorage.setItem('prp_theme', theme); } catch {}
  }, [theme]);

  const dark = theme === 'dark';

  return (
    <button
      onClick={() => setTheme(dark ? 'light' : 'dark')}
      className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-slate-400 hover:text-white hover:bg-slate-800/60 transition-colors"
      title={dark ? 'Switch to light theme' : 'Switch to dark theme'}
    >
      {dark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
      <span>{dark ? 'Light mode' : 'Dark mode'}</span>
    </button>
  );
}
