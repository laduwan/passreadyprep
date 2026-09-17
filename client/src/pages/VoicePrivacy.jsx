// client/src/pages/VoicePrivacy.jsx
import React from 'react';
import { Mic, ArrowLeft, Shield, Info } from 'lucide-react';

export default function VoicePrivacy({ navigate }) {
  return (
    <div className="space-y-5">
      {navigate && (
        <button
          onClick={() => navigate('home')}
          className="flex items-center gap-1.5 text-sm text-slate-400 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back
        </button>
      )}

      <div>
        <div className="flex items-center gap-2">
          <Shield className="w-6 h-6 text-emerald-400" />
          <h1 className="text-2xl font-bold text-white">Voice Input &amp; Data</h1>
        </div>
        <p className="text-slate-400 mt-1 text-sm">
          How your voice is handled when you use speech-to-text features in PassReady Prep.
        </p>
      </div>

      <div className="bg-emerald-500/8 border border-emerald-500/20 rounded-xl p-4 text-sm text-slate-300">
        <span className="font-bold text-emerald-400">Bottom line</span> — PassReady Prep never records, stores, or transmits your voice audio. Your browser handles all speech processing; we receive only the resulting text.
      </div>

      <div className="bg-slate-800/50 border border-slate-700/60 rounded-xl p-4 space-y-4">
        <h2 className="text-white font-semibold text-[15px] flex items-center gap-2">
          <Mic className="w-4 h-4 text-emerald-400" /> How Browser Voice Recognition Works
        </h2>
        <div className="space-y-3 text-sm text-slate-300 leading-relaxed">
          <p>
            PassReady Prep uses the <strong className="text-white">Web Speech API</strong> — a feature built directly into modern browsers — to convert spoken words to text.
          </p>
          <p>
            When you tap the microphone button, <strong className="text-white">your browser</strong> (not PassReady Prep) processes the audio:
          </p>
          <ul className="space-y-2 ml-2">
            <li className="flex gap-2">
              <span className="text-emerald-400 flex-shrink-0">•</span>
              <span><strong className="text-white">Chrome</strong> sends audio to Google's speech recognition servers for processing.</span>
            </li>
            <li className="flex gap-2">
              <span className="text-emerald-400 flex-shrink-0">•</span>
              <span><strong className="text-white">Safari</strong> uses Apple's on-device or cloud speech engine.</span>
            </li>
            <li className="flex gap-2">
              <span className="text-emerald-400 flex-shrink-0">•</span>
              <span><strong className="text-white">Other browsers</strong> vary by their own speech implementation.</span>
            </li>
          </ul>
          <p>
            Only the resulting <strong className="text-white">text transcription</strong> is sent to PassReady Prep's servers for AI evaluation. No audio files travel to our infrastructure.
          </p>
        </div>
      </div>

      <div className="bg-slate-800/50 border border-slate-700/60 rounded-xl p-4 space-y-3">
        <h2 className="text-white font-semibold text-[15px]">What PassReady Prep Does Not Do</h2>
        <ul className="space-y-2 text-sm text-slate-300">
          <li className="flex gap-2"><span className="text-emerald-400 flex-shrink-0">✓</span>Capture or store audio files or voice recordings</li>
          <li className="flex gap-2"><span className="text-emerald-400 flex-shrink-0">✓</span>Create or store voiceprints or biometric voice data</li>
          <li className="flex gap-2"><span className="text-emerald-400 flex-shrink-0">✓</span>Sell, license, or share any voice data</li>
          <li className="flex gap-2"><span className="text-emerald-400 flex-shrink-0">✓</span>Collect any biometric identifiers under BIPA, CUBI, or similar state laws</li>
        </ul>
      </div>

      <div className="bg-slate-800/50 border border-slate-700/60 rounded-xl p-4 space-y-3">
        <h2 className="text-white font-semibold text-[15px]">Your Control</h2>
        <ul className="space-y-2 text-sm text-slate-300">
          <li className="flex gap-2">
            <span className="text-slate-400 flex-shrink-0">•</span>
            The microphone permission can be revoked at any time in your browser settings (click the lock icon in the address bar).
          </li>
          <li className="flex gap-2">
            <span className="text-slate-400 flex-shrink-0">•</span>
            All features work fully without the microphone — you can always type your response instead of using voice input.
          </li>
          <li className="flex gap-2">
            <span className="text-slate-400 flex-shrink-0">•</span>
            For Chrome and Safari's own privacy policies regarding speech data, see Google's and Apple's privacy documentation.
          </li>
        </ul>
      </div>

      <div className="bg-slate-800/50 border border-slate-700/60 rounded-xl p-4 space-y-3">
        <h2 className="text-white font-semibold text-[15px] flex items-center gap-2">
          <Info className="w-4 h-4 text-slate-400" /> About the Simulated Client Voice
        </h2>
        <p className="text-sm text-slate-300 leading-relaxed">
          In some modules (Microskills Responder), you may hear a voice reading the simulated client's statements aloud. This is <strong className="text-white">outbound text-to-speech</strong> generated by PassReady Prep using a third-party voice synthesis service — it is the AI generating a voice for you to listen to, not a capture of your voice. You can turn this off at any time using the Voice toggle in those modules.
        </p>
      </div>
    </div>
  );
}
