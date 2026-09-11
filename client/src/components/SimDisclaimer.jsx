import { useState } from 'react';
import { ShieldAlert, CheckSquare } from 'lucide-react';

// Rotation: which disclaimer version shows for which simulation number (1-indexed, cycling every 20)
// Version A (Full):     sims 1, 6, 11, 16  → positions where (n-1)%5 === 0
// Version B (Moderate): sims 3, 8, 13, 18  → positions where (n-1)%5 === 2
// Version C (Brief):    sims 4, 9, 14, 19  → positions where (n-1)%5 === 3
// Version D (Minimal):  sims 5, 10, 15, 20 → positions where (n-1)%5 === 4
// Sims 2, 7, 12, 17 get Version B as well (positions where (n-1)%5 === 1)
function getVersion(simNumber) {
  const pos = (simNumber - 1) % 5;
  if (pos === 0) return 'A';
  if (pos === 1 || pos === 2) return 'B';
  if (pos === 3) return 'C';
  return 'D';
}

const DISCLAIMERS = {
  A: {
    label: 'Before You Begin',
    content: (
      <>
        <p className="text-slate-300 mb-4 font-medium">
          This simulation is a training tool. It is not a real clinical encounter.
        </p>
        <div className="mb-4">
          <p className="text-emerald-400 font-semibold mb-2">What this simulation can do:</p>
          <ul className="text-slate-300 text-sm space-y-1.5 ml-1">
            <li className="flex gap-2"><span className="text-emerald-500">•</span>Score whether you followed the clinical Priority Ladder (safety → medical/substance rule-outs → stabilization → alliance → assessment → treatment → ethics)</li>
            <li className="flex gap-2"><span className="text-emerald-500">•</span>Flag missed verbal cues, including buried safety signals in the transcript</li>
            <li className="flex gap-2"><span className="text-emerald-500">•</span>Provide feedback on your sequencing, prioritization, and distractor reasoning</li>
          </ul>
        </div>
        <div className="mb-4">
          <p className="text-amber-400 font-semibold mb-2">What this simulation cannot do:</p>
          <ul className="text-slate-300 text-sm space-y-1.5 ml-1">
            <li className="flex gap-2"><span className="text-amber-500">•</span>Detect tone changes, voice cracking, tearfulness, or emotional shifts in delivery</li>
            <li className="flex gap-2"><span className="text-amber-500">•</span>Observe facial expressions, posture, or other nonverbal cues</li>
            <li className="flex gap-2"><span className="text-amber-500">•</span>Replace supervised clinical training or real client contact</li>
          </ul>
        </div>
        <p className="text-slate-400 text-sm italic">
          Your responsibility: If a real client's voice cracked when they said "I'm fine," that is your cue to notice — not the AI's. 
          Treat every simulation as though nonverbal data matters, even though this tool cannot score it.
        </p>
      </>
    ),
  },
  B: {
    label: 'Reminder Before You Begin',
    content: (
      <>
        <p className="text-slate-300 mb-4">This is a simulation, not a live session.</p>
        <ul className="text-slate-300 text-sm space-y-2 mb-4">
          <li><span className="text-emerald-400 font-semibold">Scored:</span> your verbal reasoning, sequencing, safety assessment, and adherence to the Priority Ladder</li>
          <li><span className="text-amber-400 font-semibold">Not scored:</span> tone shifts, facial expressions, or nonverbal affect changes</li>
          <li><span className="text-slate-200 font-semibold">Your job:</span> watch for cues the AI cannot detect — pauses, hesitations, emotional shifts in the client's words</li>
        </ul>
      </>
    ),
  },
  C: {
    label: 'Acknowledgment',
    content: (
      <p className="text-slate-300">
        This simulation scores verbal content only. Nonverbal cues — tone, expression, affect — remain your responsibility to notice.
      </p>
    ),
  },
  D: {
    label: '',
    content: (
      <p className="text-slate-300 text-sm">
        I understand this AI cannot detect tone or facial expressions. I will treat nonverbal cues as clinically relevant even though they are not scored.
      </p>
    ),
  },
};

export default function SimDisclaimer({ simNumber, onAccept }) {
  const [checked, setChecked] = useState(false);
  const version = getVersion(simNumber);
  const disc = DISCLAIMERS[version];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
      <div className="bg-slate-900 border border-slate-700 rounded-2xl max-w-lg w-full p-6 shadow-2xl">
        
        {/* Header */}
        <div className="flex items-center gap-3 mb-5">
          <ShieldAlert className="w-6 h-6 text-amber-400 flex-shrink-0" />
          <h2 className="text-lg font-bold text-white">
            {disc.label || 'Simulation Disclaimer'}
          </h2>
        </div>

        {/* Content */}
        <div className="mb-6">
          {disc.content}
        </div>

        {/* Checkbox + Button */}
        <div className="space-y-4">
          <label className="flex items-start gap-3 cursor-pointer group" onClick={() => setChecked(!checked)}>
            <div className={`w-5 h-5 mt-0.5 rounded border-2 flex items-center justify-center flex-shrink-0 transition-colors ${
              checked ? 'bg-emerald-600 border-emerald-600' : 'border-slate-600 group-hover:border-slate-400'
            }`}>
              {checked && <CheckSquare className="w-4 h-4 text-white" />}
            </div>
            <span className="text-sm text-slate-300">
              {version === 'A' && 'I understand these limitations and am ready to begin.'}
              {version === 'B' && 'I acknowledge these limits and am ready to proceed.'}
              {version === 'C' && 'Acknowledged. Begin simulation.'}
              {version === 'D' && 'I understand. Begin.'}
            </span>
          </label>

          <button
            onClick={onAccept}
            disabled={!checked}
            className="w-full py-3 rounded-xl font-semibold text-white transition-all disabled:opacity-30 disabled:cursor-not-allowed bg-emerald-600 hover:bg-emerald-500 disabled:hover:bg-emerald-600"
          >
            Begin Simulation
          </button>
        </div>
      </div>
    </div>
  );
}
