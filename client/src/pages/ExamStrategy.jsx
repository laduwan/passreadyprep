// client/src/pages/ExamStrategy.jsx
import React, { useState } from 'react';
import { Target, Clock, AlertTriangle, CheckCircle2, BookOpen, Brain, Layers, GitBranch, Shield, Zap, ChevronDown, ChevronRight, FileText } from 'lucide-react';

const TIMELINES = [
  {
    id: '12plus', label: '12+ weeks out', color: 'text-blue-400 bg-blue-500/15 border-blue-500/25',
    focus: 'Build your foundation',
    plan: [
      { tool: 'Flashcards', icon: Layers, daily: '20 min', why: 'Lock in ICD-10 codes, first-line treatments, and key differentials. Spaced repetition means early cards get pushed out — start now so they\'re mastered by exam day.' },
      { tool: 'DSM-5-TR Reference', icon: Brain, daily: '10 min', why: 'Browse one diagnostic category per day. Read diagnostic criteria, not just names. Familiarize yourself with how disorders cluster.' },
      { tool: 'Decision Trees', icon: GitBranch, daily: '10 min', why: 'Walk 1–2 trees daily. Focus on Safety trees first (suicide risk, level of care) — safety is ALWAYS the first question on the exam.' },
      { tool: 'Cases', icon: BookOpen, daily: '1–2 cases', why: 'Start with Easy cases. Don\'t worry about speed. Read every rationale. Use the AI debrief to understand your reasoning patterns.' },
    ],
    tip: 'This phase is about comprehension, not speed. If you\'re getting 40–50% on cases, that\'s normal. You\'re learning the clinical reasoning hierarchy.',
  },
  {
    id: '6to12', label: '6–12 weeks out', color: 'text-emerald-400 bg-emerald-500/15 border-emerald-500/25',
    focus: 'Build clinical reasoning depth',
    plan: [
      { tool: 'Cases', icon: BookOpen, daily: '3–4 cases', why: 'Move to Medium and Hard cases. After each case, review the rationale for EVERY option — even the ones you didn\'t pick. This builds differential thinking.' },
      { tool: 'Decision Trees', icon: GitBranch, daily: '15 min', why: 'Focus on Differential Diagnosis trees. Run them multiple times — take different paths. The exam tests your ability to distinguish overlapping disorders.' },
      { tool: 'Flashcards', icon: Layers, daily: '15 min', why: 'Your spaced repetition queue should be thinning out. Focus on cards you keep getting wrong — those are your weak spots.' },
      { tool: 'AI Debrief', icon: Zap, daily: 'After every case', why: 'Use Dr. Claire Moreau after every case. Look for patterns in your mistakes. Are you missing safety questions? Rushing to treatment? That pattern IS the study plan.' },
    ],
    tip: 'Your readiness predictor should be climbing. If a domain is below 50%, spend extra time there. The predictor uses the same domain weights as the exam (NBCC Content Outline, 2025).',
  },
  {
    id: '2to6', label: '2–6 weeks out', color: 'text-amber-400 bg-amber-500/15 border-amber-500/25',
    focus: 'Simulate exam conditions',
    plan: [
      { tool: 'Cases', icon: BookOpen, daily: '5–6 cases (timed)', why: 'Start timing yourself — the real exam gives 255 minutes for 11 cases (~23 minutes per case). Build your pacing instinct now.' },
      { tool: 'Weak domains', icon: Target, daily: '20 min targeted', why: 'Check your readiness predictor. Whatever\'s lowest gets focused drill. If Ethics is at 45%, do ethics-heavy cases and the Ethics decision trees.' },
      { tool: 'Decision Trees', icon: GitBranch, daily: '10 min', why: 'Ethics and Treatment trees now. These cover the judgment calls the exam loves to test — duty to warn, informed consent, modality selection.' },
      { tool: 'Flashcards', icon: Layers, daily: '10 min', why: 'Quick review only. Most cards should be mastered. Any card still in rotation is a gap — study the underlying concept, not just the card.' },
    ],
    tip: 'You should be at 60%+ readiness. If you\'re below 50%, consider pushing your exam date. The first-attempt pass rate is approximately 60% — preparation matters.',
  },
  {
    id: 'final2', label: 'Final 2 weeks', color: 'text-red-400 bg-red-500/15 border-red-500/25',
    focus: 'Sharpen and rest',
    plan: [
      { tool: 'Cases', icon: BookOpen, daily: '2–3 cases', why: 'Reduce volume. Quality over quantity. Focus on cases you previously got wrong — redo them. Your brain consolidates patterns during rest, not cramming.' },
      { tool: 'DSM-5-TR Reference', icon: Brain, daily: '10 min', why: 'Quick scan of any diagnoses that still trip you up. Don\'t try to learn new categories now — reinforce what you know.' },
      { tool: 'Decision Trees', icon: GitBranch, daily: '1–2 trees', why: 'Run the Safety trees one more time. On exam day, safety assessment is always your first move. Make it automatic.' },
      { tool: 'Rest', icon: Shield, daily: 'Day before exam', why: 'No studying the day before. Go for a walk, eat well, sleep 8 hours. Fatigue impairs clinical reasoning more than any knowledge gap (Maslach & Leiter, 2016).' },
    ],
    tip: 'Trust your preparation. If your readiness predictor is 70%+, you\'re well-positioned. Walk in confident.',
  },
];

const IG_RULES = [
  {
    title: 'The exam tests clinical efficiency, not thoroughness',
    body: 'The NCMHCE presents intake narratives followed by questions about what information to gather and what clinical decisions to make. The correct answers reflect what a minimally qualified entry-level counselor would prioritize — not an exhaustive assessment. Questions are standard multiple choice (A–D, one correct answer) and test your ability to identify the MOST appropriate clinical action at each stage (NBCC, 2025).',
    example: 'A client presents with depressed mood after job loss. A question asks what to assess next. The best answer focuses on safety screening and symptom severity — not a comprehensive 10-year employment history. The exam rewards focused clinical reasoning.',
  },
  {
    title: 'Follow the clinical hierarchy',
    body: 'Intake and assessment questions follow a strict priority order derived from clinical practice standards: (1) Safety and risk assessment — always first (ACA Code of Ethics, 2014, A.1.a). (2) Presenting problem and symptom assessment. (3) Diagnostic formulation including differential diagnosis (APA DSM-5-TR, 2022). (4) Functional impairment and level of care determination. (5) Cultural and contextual factors (Sue et al., 2019).',
    example: 'A client mentions suicidal ideation. Before gathering any other information, the correct answer will ALWAYS involve assessing current intent, plan, means, and protective factors (Joiner, 2005). The exam marks safety assessment as the highest priority.',
  },
  {
    title: 'Gather what changes your clinical decision',
    body: 'Think like a clinician in a real session, not a researcher. You need enough information to form a working hypothesis and an initial treatment direction — not a comprehensive biopsychosocial evaluation. The NCMHCE mirrors real clinical practice: act on sufficient information (Schwitzer & Rubin, 2015). Ask: "Would this information change my diagnosis or treatment plan right now?"',
    example: 'You have enough symptoms to suspect Major Depressive Disorder. You don\'t need to also administer the MMPI-2 and gather a full developmental history before answering. Select the option that moves the clinical picture forward.',
  },
  {
    title: 'Watch for "attractive distractors"',
    body: 'The exam includes answer options that sound clinically reasonable but aren\'t the BEST choice for that stage of treatment. These distractors test whether you can distinguish between a good clinical action and the most appropriate one right now. All four options may be defensible — the question is which one a competent entry-level counselor would prioritize (NBCC Candidate Handbook, 2025).',
    example: '"Administer a comprehensive personality assessment" sounds thorough, but if the presenting problem is acute and the clinical picture points clearly to an anxiety disorder, the correct answer is the more focused, immediate intervention — not additional testing.',
  },
  {
    title: 'Each case section builds on the last',
    body: 'Each case has three sections: initial intake summary, session 1, and session 2 (NBCC Content Outline, 2025). New narrative information appears in each section, and questions target that section\'s clinical moment. Don\'t re-assess what\'s already established — focus on what the new information changes about your clinical approach.',
    example: 'Section 1 establishes the presenting problem and initial diagnosis. Section 2 reveals the client used substances over the weekend. The question targets what this new information changes — co-occurring disorder considerations, not re-doing the intake.',
  },
];

const DM_RULES = [
  { title: 'Safety first, always', body: 'If there\'s any safety concern in the vignette — suicidal ideation, homicidal ideation, child/elder abuse, domestic violence — the correct first decision is ALWAYS to address safety. This overrides everything else. Choosing a treatment intervention before addressing safety is almost always the wrong answer. This reflects the ACA Code of Ethics duty to protect (A.1.a) and the clinical principle of risk management (Joiner, 2005; Sommers-Flanagan & Sommers-Flanagan, 2018).' },
  { title: 'Validate before you intervene', body: 'The clinical reasoning pattern the exam rewards: Validate → Explore → Act. Answers that acknowledge the client\'s experience before jumping to action consistently outperform directive responses. "Explore the client\'s feelings about..." outranks "Immediately refer for..." This reflects core therapeutic alliance research — the working alliance is the strongest predictor of therapeutic outcome across modalities (Bordin, 1979; Norcross & Lambert, 2018).' },
  { title: 'Least restrictive intervention', body: 'When choosing a level of care or intervention, the exam favors the least restrictive option that\'s clinically appropriate. Outpatient before intensive outpatient. IOP before residential. Residential before inpatient. Only escalate when the clinical picture demands it. This aligns with ASAM criteria (Mee-Lee et al., 2013) and general clinical practice standards.' },
  { title: 'Collaboration over direction', body: 'Answers that involve the client in decision-making score higher than directive answers. "Develop a safety plan collaboratively with the client" outperforms "Instruct the client to call 911." Client autonomy and informed consent are core exam values, reflecting the ACA Code of Ethics (A.2.a, A.2.c) and person-centered care principles (Rogers, 1951).' },
  { title: 'Evidence-based over theoretical preference', body: 'When choosing interventions, the exam favors named evidence-based treatments: CBT for depression and anxiety (Beck, 2011), DBT for BPD (Linehan, 2015), PE/CPT for PTSD (Foa et al., 2019; Resick et al., 2017), MAT for OUD (SAMHSA, 2024). Know the first-line treatments for the major diagnostic categories — the flashcard deck is built around this.' },
];

const REFERENCES = [
  'American Counseling Association. (2014). ACA Code of Ethics. American Counseling Association.',
  'American Psychiatric Association. (2022). Diagnostic and statistical manual of mental disorders (5th ed., text rev.). American Psychiatric Association Publishing.',
  'Beck, J. S. (2011). Cognitive behavior therapy: Basics and beyond (2nd ed.). Guilford Press.',
  'Bordin, E. S. (1979). The generalizability of the psychoanalytic concept of the working alliance. Psychotherapy: Theory, Research & Practice, 16(3), 252–260.',
  'Foa, E. B., Hembree, E. A., Rothbaum, B. O., & Rauch, S. A. M. (2019). Prolonged exposure therapy for PTSD: Emotional processing of traumatic experiences (2nd ed.). Oxford University Press.',
  'Joiner, T. E. (2005). Why people die by suicide. Harvard University Press.',
  'Linehan, M. M. (2015). DBT skills training manual (2nd ed.). Guilford Press.',
  'Maslach, C., & Leiter, M. P. (2016). Understanding the burnout experience: Recent research and its implications for psychiatry. World Psychiatry, 15(2), 103–111.',
  'Mee-Lee, D., Shulman, G. D., Fishman, M. J., & Gastfriend, D. R. (Eds.). (2013). The ASAM criteria: Treatment criteria for addictive, substance-related, and co-occurring conditions (3rd ed.). American Society of Addiction Medicine.',
  'National Board for Certified Counselors. (2025). NCMHCE content outline. https://nbcc.org/assets/exam/ncmhce_content_outline.pdf',
  'National Board for Certified Counselors. (2025). Candidate handbook for state licensure. https://nbcc.org/assets/exam/handbooks/ncmhce.pdf',
  'National Board for Certified Counselors. (2025). NCMHCE format comparison chart. https://nbcc.org/assets/exam/ncmhce_format_comparison_chart.pdf',
  'Norcross, J. C., & Lambert, M. J. (2018). Psychotherapy relationships that work III. Psychotherapy, 55(4), 303–315.',
  'Resick, P. A., Monson, C. M., & Chard, K. M. (2017). Cognitive processing therapy for PTSD: A comprehensive manual. Guilford Press.',
  'Rogers, C. R. (1951). Client-centered therapy: Its current practice, implications, and theory. Houghton Mifflin.',
  'Schwitzer, A. M., & Rubin, L. C. (2015). Diagnosis and treatment planning skills: A popular culture casebook approach (2nd ed.). SAGE Publications.',
  'Sommers-Flanagan, J., & Sommers-Flanagan, R. (2018). Clinical interviewing (6th ed.). Wiley.',
  'Substance Abuse and Mental Health Services Administration. (2024). Medications for opioid use disorder (Treatment Improvement Protocol No. 63). SAMHSA.',
  'Sue, D. W., Sue, D., Neville, H. A., & Smith, L. (2019). Counseling the culturally diverse: Theory and practice (8th ed.). Wiley.',
];

function Accordion({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border border-slate-700/60 rounded-xl overflow-hidden">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between px-4 py-3 text-left bg-slate-800/40 hover:bg-slate-800/60 transition-colors">
        <span className="font-semibold text-white text-sm">{title}</span>
        {open ? <ChevronDown className="w-4 h-4 text-slate-400" /> : <ChevronRight className="w-4 h-4 text-slate-400" />}
      </button>
      {open && <div className="px-4 py-3 bg-slate-800/20">{children}</div>}
    </div>
  );
}

export default function ExamStrategy() {
  const [section, setSection] = useState('timeline');

  return (
    <div className="space-y-5">
      <div>
        <div className="flex items-center gap-2">
          <Target className="w-6 h-6 text-amber-400" />
          <h1 className="text-2xl font-bold text-white">Exam strategy</h1>
        </div>
        <p className="text-slate-400 mt-1 text-sm">How to use PassReady based on your timeline, plus the NCMHCE clinical reasoning principles that determine your score.</p>
      </div>

      {/* Format overview */}
      <div className="bg-slate-800/50 border border-slate-700/60 rounded-2xl p-5">
        <h2 className="text-lg font-bold text-white mb-2">Current exam format (2022+)</h2>
        <div className="grid sm:grid-cols-2 gap-3 text-sm">
          <div className="space-y-1.5">
            <div className="text-slate-300"><span className="font-bold text-white">Cases:</span> 11 case studies (1 unscored)</div>
            <div className="text-slate-300"><span className="font-bold text-white">Questions:</span> 100 scored items (standard MC, A–D)</div>
            <div className="text-slate-300"><span className="font-bold text-white">Time:</span> 255 minutes (~23 min/case)</div>
          </div>
          <div className="space-y-1.5">
            <div className="text-slate-300"><span className="font-bold text-white">Scoring:</span> Total correct — no penalty for wrong answers</div>
            <div className="text-slate-300"><span className="font-bold text-white">Structure:</span> Intake summary → Session 1 → Session 2</div>
            <div className="text-slate-300"><span className="font-bold text-white">Level:</span> Application (Bloom's Taxonomy)</div>
          </div>
        </div>
        <div className="mt-3 text-xs text-slate-500">Source: NBCC Content Outline (2025); NBCC Candidate Handbook for State Licensure (2025)</div>
      </div>

      {/* Domain weights */}
      <div className="bg-slate-800/50 border border-slate-700/60 rounded-2xl p-5">
        <h2 className="text-lg font-bold text-white mb-2">Domain weights</h2>
        <p className="text-xs text-slate-500 mb-3">Per NBCC Content Outline. PassReady's readiness predictor uses these exact weights.</p>
        <div className="space-y-2">
          {[
            { name: 'Counseling Skills & Interventions', pct: 30, color: 'bg-emerald-500' },
            { name: 'Intake, Assessment & Diagnosis', pct: 25, color: 'bg-blue-500' },
            { name: 'Treatment Planning', pct: 15, color: 'bg-purple-500' },
            { name: 'Professional Practice & Ethics', pct: 15, color: 'bg-amber-500' },
            { name: 'Core Counseling Attributes', pct: 15, color: 'bg-teal-500' },
          ].map((d) => (
            <div key={d.name}>
              <div className="flex justify-between text-sm mb-0.5">
                <span className="text-slate-300">{d.name}</span>
                <span className="font-bold text-white">{d.pct}%</span>
              </div>
              <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                <div className={`h-full rounded-full ${d.color}`} style={{ width: `${d.pct}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex gap-2 flex-wrap">
        {[
          { id: 'timeline', label: 'Study timeline' },
          { id: 'ig', label: 'Intake & assessment' },
          { id: 'dm', label: 'Clinical decisions' },
          { id: 'refs', label: 'References' },
        ].map((t) => (
          <button key={t.id} onClick={() => setSection(t.id)} className={`text-sm font-semibold px-4 py-2 rounded-full border transition-colors ${
            section === t.id ? 'bg-emerald-500 text-slate-900 border-emerald-500' : 'border-slate-700 text-slate-300 hover:border-slate-500'}`}>
            {t.label}
          </button>
        ))}
      </div>

      {/* ── TIMELINE ── */}
      {section === 'timeline' && (
        <div className="space-y-4">
          <div className="bg-amber-500/8 border border-amber-500/20 rounded-xl p-4 text-sm text-slate-300">
            <span className="font-bold text-amber-400">How to use this guide</span> — Find your timeline below. Each phase tells you exactly which tools to use, how long to spend, and why. The study plan generator on your Dashboard adapts this to your specific domain scores.
          </div>
          {TIMELINES.map((t) => (
            <Accordion key={t.id} title={`${t.label} — ${t.focus}`} defaultOpen={t.id === '12plus'}>
              <div className="space-y-3">
                {t.plan.map((p) => (
                  <div key={p.tool} className="flex gap-3">
                    <div className="w-8 h-8 rounded-lg bg-slate-700/60 flex items-center justify-center shrink-0 mt-0.5">
                      <p.icon className="w-4 h-4 text-slate-300" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-white text-sm">{p.tool}</span>
                        <span className="text-xs text-slate-500">{p.daily}/day</span>
                      </div>
                      <p className="text-sm text-slate-400 mt-0.5">{p.why}</p>
                    </div>
                  </div>
                ))}
                <div className="bg-slate-900/50 rounded-lg p-3 text-sm text-slate-300 mt-2">
                  <span className="font-bold text-slate-200">Phase tip:</span> {t.tip}
                </div>
              </div>
            </Accordion>
          ))}
        </div>
      )}

      {/* ── INTAKE & ASSESSMENT ── */}
      {section === 'ig' && (
        <div className="space-y-4">
          <div className="bg-blue-500/8 border border-blue-500/20 rounded-xl p-4">
            <h2 className="font-bold text-blue-400 mb-1">Intake, assessment & diagnosis (25% of exam)</h2>
            <p className="text-sm text-slate-300">This is the largest single domain. The exam tests whether you can gather the right clinical information at the right time and form an accurate diagnostic picture. Questions are standard multiple choice — pick the single best answer from four options. There's no penalty for wrong answers, but the questions are designed to test clinical efficiency and prioritization.</p>
          </div>

          <h2 className="text-lg font-bold text-white">Clinical reasoning principles for intake questions</h2>
          <div className="space-y-2">
            {IG_RULES.map((rule, i) => (
              <Accordion key={i} title={`${i + 1}. ${rule.title}`} defaultOpen={i === 0}>
                <div className="space-y-3">
                  <p className="text-sm text-slate-300">{rule.body}</p>
                  <div className="bg-slate-900/50 rounded-lg p-3">
                    <p className="text-xs font-bold uppercase tracking-wide text-amber-400 mb-1">Example</p>
                    <p className="text-sm text-slate-300">{rule.example}</p>
                  </div>
                </div>
              </Accordion>
            ))}
          </div>

          <div className="bg-emerald-500/8 border border-emerald-500/20 rounded-xl p-4 text-sm text-slate-300">
            <span className="font-bold text-emerald-400">Practice this in PassReady</span> — Every case question in the "intake" domain tests assessment reasoning. Run the <span className="font-bold text-white">Safety decision trees</span> until the clinical hierarchy is automatic. Use the AI debrief to identify when you're selecting information that doesn't change your clinical decision.
          </div>
        </div>
      )}

      {/* ── CLINICAL DECISIONS ── */}
      {section === 'dm' && (
        <div className="space-y-4">
          <div className="bg-purple-500/8 border border-purple-500/20 rounded-xl p-4">
            <h2 className="font-bold text-purple-400 mb-1">The Golden Formula: Validate → Explore → Act</h2>
            <p className="text-sm text-slate-300">
              Across counseling skills (30%), treatment planning (15%), and ethics (15%), the exam consistently rewards a three-step clinical reasoning pattern:
              <span className="font-bold text-emerald-400"> Validate</span> the client's experience →
              <span className="font-bold text-amber-400"> Explore</span> before intervening →
              <span className="font-bold text-blue-400"> Act</span> with the least restrictive, most evidence-based intervention.
              This reflects the research on therapeutic alliance as the strongest predictor of outcome (Norcross & Lambert, 2018).
            </p>
          </div>

          <h2 className="text-lg font-bold text-white">Decision-making principles</h2>
          <div className="space-y-2">
            {DM_RULES.map((rule, i) => (
              <Accordion key={i} title={`${i + 1}. ${rule.title}`} defaultOpen={i === 0}>
                <p className="text-sm text-slate-300">{rule.body}</p>
              </Accordion>
            ))}
          </div>

          <div className="bg-slate-800/50 border border-slate-700/60 rounded-2xl p-5">
            <h2 className="text-lg font-bold text-white mb-3">Common mistakes by domain</h2>
            <div className="space-y-3">
              {[
                { domain: 'Counseling Skills & Interventions (30%)', mistakes: 'Giving advice instead of exploring. Choosing a technique without considering the client\'s readiness for change (Prochaska & DiClemente, 1983). Skipping validation. Using confrontation too early in the therapeutic relationship.' },
                { domain: 'Intake, Assessment & Diagnosis (25%)', mistakes: 'Selecting every available assessment option. Not prioritizing safety screening. Ordering extensive testing when the clinical picture is clear. Missing co-occurring conditions.' },
                { domain: 'Treatment Planning (15%)', mistakes: 'Jumping to medication referral before evidence-based therapy. Choosing residential when outpatient is appropriate. Not involving the client in planning (ACA Code A.2.a). Ignoring cultural factors.' },
                { domain: 'Professional Practice & Ethics (15%)', mistakes: 'Breaking confidentiality without meeting duty-to-warn threshold. Not recognizing dual relationships. Ignoring scope of practice boundaries. Failing to obtain informed consent.' },
                { domain: 'Core Counseling Attributes (15%)', mistakes: 'Ignoring countertransference. Not monitoring the therapeutic alliance. Missing cultural humility moments. Treating symptoms without understanding their function in the client\'s system.' },
              ].map((item) => (
                <div key={item.domain}>
                  <p className="font-semibold text-white text-sm">{item.domain}</p>
                  <p className="text-sm text-slate-400 mt-0.5">{item.mistakes}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-emerald-500/8 border border-emerald-500/20 rounded-xl p-4 text-sm text-slate-300">
            <span className="font-bold text-emerald-400">Practice this in PassReady</span> — Every case simulation scores your clinical reasoning. Check the AI debrief for patterns. Run the <span className="font-bold text-white">Treatment and Ethics decision trees</span> to build your judgment instincts.
          </div>
        </div>
      )}

      {/* ── REFERENCES ── */}
      {section === 'refs' && (
        <div className="space-y-4">
          <div>
            <h2 className="text-lg font-bold text-white mb-1">References</h2>
            <p className="text-xs text-slate-500 mb-3">Sources cited in the exam strategy guide. All clinical reasoning principles are grounded in published research, professional ethics codes, and the official NBCC examination documentation.</p>
          </div>
          <div className="bg-slate-800/50 border border-slate-700/60 rounded-2xl p-5">
            <ol className="space-y-2.5">
              {REFERENCES.map((ref, i) => (
                <li key={i} className="text-sm text-slate-300 leading-relaxed pl-2" style={{ listStyleType: 'none' }}>
                  <span className="text-slate-500 text-xs mr-2">[{i + 1}]</span>
                  {ref.includes('https://') ? (
                    <>
                      {ref.split('https://')[0]}
                      <a href={'https://' + ref.split('https://')[1]} target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:underline break-all">
                        https://{ref.split('https://')[1]}
                      </a>
                    </>
                  ) : ref}
                </li>
              ))}
            </ol>
          </div>
          <div className="text-xs text-slate-600">
            NCMHCE® is a registered trademark of the National Board for Certified Counselors, Inc. PassReady Prep is not affiliated with or endorsed by NBCC.
          </div>
        </div>
      )}
    </div>
  );
}
