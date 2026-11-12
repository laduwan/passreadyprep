import React, { useState, useEffect } from 'react';
import { Sun, Moon, Contrast } from 'lucide-react';

// Three themes, matching the classes public/a11y.js puts on <html> so the
// accessibility panel and this button stay in step:
//   dark      (default)
//   light     html.theme-light
//   contrast  html.a11y-contrast  — high contrast, kept on top of the dark base
//
// Light/dark lives in `prp_theme`, which a11y.js also reads. High contrast is
// one of the accessibility preferences, so it is written back into the
// `prp_a11y` blob a11y.js owns rather than kept separately; a11y.js syncs that
// to the account for signed-in members.
const THEME_KEY = 'prp_theme';
const A11Y_KEY = 'prp_a11y';
const ORDER = ['dark', 'light', 'contrast'];

function readA11y() {
  try { return JSON.parse(localStorage.getItem(A11Y_KEY) || '{}') || {}; } catch { return {}; }
}

function getInitial() {
  try {
    if (readA11y().contrast) return 'contrast';
    const stored = localStorage.getItem(THEME_KEY);
    if (stored === 'light' || stored === 'dark') return stored;
  } catch {}
  return 'dark';
}

function apply(theme) {
  const root = document.documentElement;
  const contrast = theme === 'contrast';
  const light = theme === 'light';

  root.classList.toggle('theme-light', light);
  root.classList.toggle('theme-dark', !light);
  root.classList.toggle('a11y-contrast', contrast);

  try {
    localStorage.setItem(THEME_KEY, light ? 'light' : 'dark');
    const prefs = readA11y();
    prefs.contrast = contrast;
    localStorage.setItem(A11Y_KEY, JSON.stringify(prefs));
  } catch {}
}

const LABELS = {
  dark: { icon: Sun, text: 'Light mode', title: 'Switch to the light theme' },
  light: { icon: Contrast, text: 'High contrast', title: 'Switch to high contrast' },
  contrast: { icon: Moon, text: 'Dark mode', title: 'Switch back to the dark theme' },
};

export default function ThemeToggle() {
  const [theme, setTheme] = useState(getInitial);

  useEffect(() => { apply(theme); }, [theme]);

  // The label names what the button does next, not the theme in use.
  const next = ORDER[(ORDER.indexOf(theme) + 1) % ORDER.length];
  const { icon: Icon, text, title } = LABELS[theme];

  return (
    <button
      onClick={() => setTheme(next)}
      className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-slate-400 hover:text-white hover:bg-slate-800/60 transition-colors"
      title={title}
      aria-label={title}
    >
      <Icon className="w-4 h-4" />
      <span>{text}</span>
    </button>
  );
}
