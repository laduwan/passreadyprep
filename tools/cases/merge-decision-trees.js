#!/usr/bin/env node
// ============================================================================
// merge-decision-trees.js
// Swaps the DecisionTrees() stub in the NCMHCE platform for the full module.
//
// Usage:   node merge-decision-trees.js NCMHCEPrepPlatform.jsx
// Output:  NCMHCEPrepPlatform_merged.jsx
//
// What it does:
//   1. Reads DecisionTrees.jsx (the full component) from the same folder.
//   2. Strips its import / export lines (the platform already imports React +
//      every lucide icon used here).
//   3. Wraps it in sentinel markers and either:
//        - replaces an existing marked region (safe re-run), or
//        - replaces the `function DecisionTrees` stub (first run).
//
// Robustness:
//   - First-run stub matching uses brace-counting (the exact stub text and any
//     params like `({ updateStats } = {})` do not matter).
//   - Re-runs are fully idempotent: the whole marked region is swapped, so
//     constants and comments never accumulate.
//   - The legacy `const DECISION_TREES = {...}` constant is left untouched and
//     harmless; this module is self-contained and does not reference it.
// ============================================================================

const fs = require('fs');
const path = require('path');

const START = '// <<< DECISION_TREES_MODULE START - managed by merge-decision-trees.js >>>';
const END = '// <<< DECISION_TREES_MODULE END >>>';

const platformPath = process.argv[2];
if (!platformPath) {
  console.error('Usage: node merge-decision-trees.js <PlatformFile.jsx>');
  process.exit(1);
}
if (!fs.existsSync(platformPath)) {
  console.error('Platform file not found:', platformPath);
  process.exit(1);
}

const componentPath = path.join(__dirname, 'DecisionTrees.jsx');
if (!fs.existsSync(componentPath)) {
  console.error('DecisionTrees.jsx not found next to this script.');
  process.exit(1);
}

// ---- Locate `function NAME(...) { ... }` via paren- then brace-matching ------
function findFunction(src, name) {
  const sig = new RegExp('function\\s+' + name + '\\s*\\(');
  const m = sig.exec(src);
  if (!m) return null;
  const start = m.index;

  // Skip the parameter list (it may contain destructuring braces such as
  // `({ updateStats } = {})`) by balancing parens, so we land on the BODY brace.
  const parenOpen = src.indexOf('(', m.index);
  if (parenOpen === -1) return null;
  let pdepth = 0, paramEnd = -1;
  for (let j = parenOpen; j < src.length; j++) {
    if (src[j] === '(') pdepth++;
    else if (src[j] === ')') { pdepth--; if (pdepth === 0) { paramEnd = j; break; } }
  }
  if (paramEnd === -1) return null;

  const braceOpen = src.indexOf('{', paramEnd);
  if (braceOpen === -1) return null;
  let depth = 0;
  for (let j = braceOpen; j < src.length; j++) {
    if (src[j] === '{') depth++;
    else if (src[j] === '}') { depth--; if (depth === 0) return { start: start, end: j + 1 }; }
  }
  return null;
}

// ---- Prepare the component body (strip imports/exports) ----------------------
let component = fs.readFileSync(componentPath, 'utf8');
component = component
  .replace(/^import[\s\S]*?from\s+['"][^'"]+['"];\s*$/gm, '') // import lines
  .replace(/^export\s+default\s+DecisionTrees;\s*$/gm, '')
  .replace(/^export\s+\{[^}]*\};\s*$/gm, '')
  .replace(/\n{3,}/g, '\n\n')
  .trim();

const region = START + '\n' + component + '\n' + END;

// ---- Merge -------------------------------------------------------------------
let platform = fs.readFileSync(platformPath, 'utf8');

const si = platform.indexOf(START);
if (si !== -1) {
  // Re-run: replace the existing marked region wholesale.
  const ei = platform.indexOf(END, si);
  if (ei === -1) {
    console.error('Found START marker but no END marker - aborting to avoid corruption.');
    process.exit(1);
  }
  platform = platform.slice(0, si) + region + platform.slice(ei + END.length);
  console.log('* Re-run detected - swapped the existing Decision Trees module region.');
} else {
  // First run: replace the stub function.
  const fn = findFunction(platform, 'DecisionTrees');
  if (!fn) {
    console.error('Could not locate `function DecisionTrees(` in the platform file.');
    console.error('If your stub is an arrow function (const DecisionTrees = () => {...}),');
    console.error('convert it to `function DecisionTrees() {}` or tell me and I will adapt the script.');
    process.exit(1);
  }
  platform = platform.slice(0, fn.start) + region + '\n' + platform.slice(fn.end);
  console.log('* Replaced DecisionTrees stub with full module (+ DT_TREES data).');
}

// ---- Write output ------------------------------------------------------------
const outPath = platformPath.replace(/\.jsx?$/, '') + '_merged.jsx';
fs.writeFileSync(outPath, platform);
console.log('\n[ok] Written:', outPath);
console.log('  Lines:', platform.split('\n').length);
console.log('\nNo import changes needed - every icon used (GitBranch, Shield, AlertTriangle,');
console.log('Brain, Activity, Wind, FileText, ChevronRight, ArrowRight, ArrowLeft, RotateCcw,');
console.log('CheckCircle2, X, Lightbulb, Info, Target, Eye, Layers, AlertCircle) is already');
console.log('in the platform lucide-react import.');
