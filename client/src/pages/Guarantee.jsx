// client/src/pages/Guarantee.jsx
import React from 'react';
import { Shield, CheckCircle2, FileText, Award } from 'lucide-react';

const STEPS_FAIL = [
  { n: '1', text: 'Subscribe to any paid plan. Monthly or one-time — both are covered.' },
  { n: '2', text: 'Complete at least 20 cases and achieve 60% or higher on the readiness predictor before your exam date.' },
  { n: '3', text: "Take the NCMHCE. If you don't pass, email us your unofficial score report within 14 days." },
  { n: '4', text: 'We extend your access for the same duration as your original subscription — at no charge.' },
];

const ELIGIBILITY = [
  'Active paid subscription at time of exam',
  'Minimum 20 completed case simulations',
  'Readiness predictor score of 60% or higher before exam day',
  'Score report submitted within 14 days (pass or fail). Free CE course must be completed within 90 days of passing.',
];

const FAQ = [
  { q: 'How do I claim my free CE course after passing?', a: 'Email your unofficial score report within 14 days. We\'ll send a coupon code for TMH 601 or Mandated Reporter. Sign up at CounselorReady.com, apply your code, and enable reminders. We\'ll email at 60, 30, and 7 days before the 90-day window closes.' },
  { q: 'Can I get a refund instead of extended access?', a: 'The guarantee covers extended access, not a refund. We want to keep helping you pass.' },
  { q: 'How long is the extension if I don\'t pass?', a: 'Equal to your original subscription. 3-month plan = 3 more months.' },
  { q: 'What counts as a completed case?', a: 'A case where you answered all questions and saw the results screen.' },
  { q: 'What is CounselorReady?', a: 'Our board-approved CE platform. Once licensed, you\'ll need CE credits — your free course gets you started.' },
];

export default function Guarantee() {
  return (
    <div className="space-y-5">
      <div className="text-center py-4">
        <Shield className="w-16 h-16 text-emerald-400 mx-auto mb-3" />
        <h1 className="text-2xl font-bold text-white">Pass guarantee</h1>
        <p className="text-emerald-400 font-semibold mt-1">You pass, you win. You don't, we've got you.</p>
      </div>

      {/* Pass reward */}
      <div className="bg-gradient-to-br from-emerald-500/10 to-blue-500/5 border border-emerald-500/25 rounded-2xl p-5">
        <h2 className="text-lg font-bold text-emerald-400 mb-2">When you pass</h2>
        <p className="text-slate-300 text-sm mb-4">Every subscriber who passes gets a free CE course on CounselorReady, our board-approved CE platform. Your choice:</p>
        <div className="grid sm:grid-cols-2 gap-3 mb-4">
          {[
            { icon: FileText, title: 'TMH 601', desc: 'Telemental Health Foundations' },
            { icon: Shield, title: 'Mandated Reporter', desc: 'Mandated reporting requirements' },
          ].map((course) => (
            <div key={course.title} className="bg-slate-800/60 border border-slate-700/60 rounded-xl p-4 text-center">
              <course.icon className="w-7 h-7 text-emerald-400 mx-auto mb-2" />
              <div className="font-bold text-white">{course.title}</div>
              <div className="text-xs text-slate-400 mt-1">{course.desc}</div>
            </div>
          ))}
        </div>
        <p className="text-xs text-slate-400">Redeem within 90 days of your passing score date.</p>
        <div className="mt-3 bg-blue-500/8 border border-blue-500/20 rounded-xl p-3.5">
          <p className="text-sm text-slate-300"><span className="font-bold text-blue-400">Don't let it expire</span> — Sign up at <a href="https://www.counselorready.com" target="_blank" className="text-emerald-400 font-semibold hover:underline">CounselorReady.com</a> and enable CE deadline reminders. We'll ping you at 60, 30, and 7 days.</p>
        </div>
      </div>

      {/* Fail safety net */}
      <div className="bg-slate-800/50 border border-slate-700/60 rounded-2xl p-5">
        <h2 className="text-lg font-bold text-white mb-3">If you don't pass</h2>
        <p className="text-sm text-slate-300 mb-4">We extend your access for free so you can keep going.</p>
        <div className="space-y-3">
          {STEPS_FAIL.map((s) => (
            <div key={s.n} className="flex gap-3">
              <div className="w-7 h-7 rounded-lg bg-emerald-500/15 text-emerald-400 flex items-center justify-center text-xs font-bold shrink-0">{s.n}</div>
              <p className="text-sm text-slate-300">{s.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Eligibility */}
      <div className="bg-slate-800/50 border border-slate-700/60 rounded-2xl p-5">
        <h2 className="text-lg font-bold text-white mb-3">Eligibility</h2>
        <div className="space-y-2.5">
          {ELIGIBILITY.map((item, i) => (
            <div key={i} className="flex gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
              <p className="text-sm text-slate-300">{item}</p>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ */}
      <div className="bg-slate-800/50 border border-slate-700/60 rounded-2xl p-5">
        <h2 className="text-lg font-bold text-white mb-3">Common questions</h2>
        <div className="space-y-4">
          {FAQ.map((f, i) => (
            <div key={i}>
              <p className="font-semibold text-white text-sm">{f.q}</p>
              <p className="text-sm text-slate-400 mt-1">{f.a}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
