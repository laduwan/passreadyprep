// ============================================================================
// DECISION TREES — Interactive clinical-reasoning walkthroughs
// NCMHCE Prep Platform | GA Integrated Therapeutic Perspectives LLC
//
// Replaces the DecisionTrees() stub. Self-contained: bundles its own tree data
// (DT_TREES) so it does not depend on the legacy DECISION_TREES constant.
// The three legacy trees (suicide, mood, ethics) are preserved node-for-node
// and enriched with teaching layers; three new trees are added.
//
// This is a reference / learning module (not a scored simulator), so the
// updateStats / updateDomainPerformance props are accepted but optional.
// © 2025 GA Integrated Therapeutic Perspectives LLC. All rights reserved.
// ============================================================================

import React, { useState } from 'react';
import {
  GitBranch, Shield, AlertTriangle, Brain, Activity, Wind, FileText,
  ChevronRight, ArrowRight, ArrowLeft, RotateCcw, CheckCircle2, X,
  Lightbulb, Info, Target, Eye, Layers, AlertCircle,
} from 'lucide-react';

// ---------------------------------------------------------------------------
// TREE DATA
// Branch node:  { id, question, yes: <id>, no: <id>, teach?: "..." }
// Outcome node: { id, outcome, action, color, clinicalNote?: "..." }
// Tree teaching: whatToNotice / whyItMatters / goldenFormula
// ---------------------------------------------------------------------------
const DT_TREES = {
  // ===== SAFETY & TRIAGE =====================================================
  suicide: {
    id: 'suicide',
    title: 'Suicide Risk Assessment',
    category: 'safety',
    domain: 'Risk & Safety',
    description: 'Systematic approach to evaluating suicide risk and matching the response to the level of risk.',
    whatToNotice: 'Ideation, plan, access to means, intent, and protective factors. These five stack — each "yes" raises acuity. A specific plan with access to means is the highest-weight combination.',
    whyItMatters: 'Safety assessment always precedes every other diagnostic or treatment decision on the NCMHCE. Under-responding is a safety risk; over-responding damages the alliance and can drive a client to under-report. Calibration is the skill being tested.',
    goldenFormula: 'Validate the disclosure ("Thank you for telling me"), explore the specifics (plan, means, intent, history, protective factors), then act at the level the risk warrants.',
    startId: 1,
    nodes: [
      { id: 1, question: 'Is the client expressing suicidal ideation?', yes: 2, no: 8,
        teach: 'Ask directly. Asking about suicide does not plant the idea — avoiding it leaves risk unassessed.' },
      { id: 2, question: 'Is there a specific plan?', yes: 3, no: 5,
        teach: 'A specific, detailed plan signals greater acuity than vague or passive ideation.' },
      { id: 3, question: 'Does the client have access to means?', yes: 4, no: 5,
        teach: 'Access converts a plan into immediate lethality. Means restriction is one of the most evidence-based interventions.' },
      { id: 4, outcome: 'HIGH RISK', color: '#EF4444',
        action: 'Consider hospitalization, restrict access to means, arrange constant monitoring, and build a safety plan. Do not leave the client alone.',
        clinicalNote: 'Plan + access (or clear intent) = highest acuity. The exam rewards decisive, least-restrictive-but-adequate action over "continue to monitor."' },
      { id: 5, question: 'Is there intent to act on the thoughts?', yes: 4, no: 6,
        teach: 'Intent is the bridge between thought and action. Ideation without intent is lower acuity than ideation with intent.' },
      { id: 6, question: 'Are protective factors present (reasons for living, support, future orientation)?', yes: 7, no: 4,
        teach: 'Protective factors lower acuity but never cancel a plan with means. Weigh them, do not over-rely on them.' },
      { id: 7, outcome: 'MODERATE RISK', color: '#F59E0B',
        action: 'Collaboratively build a safety plan, increase session frequency, provide crisis resources, and consider a medication/psychiatric consultation.',
        clinicalNote: 'Ideation with intent but no plan/means, buffered by protective factors. Manage actively in the least restrictive setting that keeps the client safe.' },
      { id: 8, question: 'Is there a history of previous attempts?', yes: 6, no: 9,
        teach: 'A prior attempt is among the strongest predictors of future risk even when current ideation is denied.' },
      { id: 9, outcome: 'LOWER RISK', color: '#10B981',
        action: 'Continue monitoring, document the assessment clearly, and re-screen at each session.',
        clinicalNote: 'No current ideation and no attempt history — but document the negative screen. Risk is dynamic and is reassessed every session.' },
    ],
  },

  levelOfCare: {
    id: 'levelOfCare',
    title: 'Level of Care Selection',
    category: 'safety',
    domain: 'Treatment Planning',
    description: 'Triage to the least restrictive setting that can keep the client safe and meet clinical need.',
    whatToNotice: 'Two axes: (1) safety — can the client stay safe in the community? and (2) intensity — how much structure do symptoms require? Safety is gated first; intensity tunes the rest.',
    whyItMatters: 'The NCMHCE frequently tests "least restrictive environment." Recommending a higher level than indicated is disruptive and scored as an error; recommending too low when safety is at stake is worse.',
    goldenFormula: 'Validate the difficulty the client is in, explore safety and functional impairment, then act by matching the setting — stepping up or down as the picture changes.',
    startId: 1,
    nodes: [
      { id: 1, question: 'Can the client maintain safety in the community (no active SI/HI with intent or plan, no acute psychosis, medically stable)?', yes: 3, no: 2,
        teach: 'Safety is the gate. If the answer is no, level of care is decided before intensity is even considered.' },
      { id: 2, outcome: 'INPATIENT / CRISIS STABILIZATION', color: '#EF4444',
        action: '24/7 supervision to secure immediate safety; medically supervised withdrawal if substance-related; stabilize, then step down.',
        clinicalNote: 'Reserved for acute danger or medical instability. Most restrictive — used only when nothing less can keep the client safe.' },
      { id: 3, question: 'Can the client stay safe overnight but need daily structured treatment (about 6+ hours/day)?', yes: 4, no: 5,
        teach: 'PHP is the step-down from inpatient or step-up from IOP for severe symptoms that do not require overnight supervision.' },
      { id: 4, outcome: 'PARTIAL HOSPITALIZATION (PHP)', color: '#F59E0B',
        action: 'Day treatment ~5 days/week, 6+ hours/day. Strong fit for recent inpatient discharge or severe symptoms with overnight safety.',
        clinicalNote: 'Bridges inpatient and outpatient. Client sleeps at home but spends most of the day in structured care.' },
      { id: 5, question: 'Do symptoms need more than weekly contact, while the client still functions at home and work?', yes: 6, no: 7,
        teach: 'IOP adds group + individual structure several days a week without removing the client from daily life.' },
      { id: 6, outcome: 'INTENSIVE OUTPATIENT (IOP)', color: '#3B82F6',
        action: '3–5 days/week, 3–4 hours/day. Group plus individual; well-suited to early SUD recovery and co-occurring disorders.',
        clinicalNote: 'More structure than weekly therapy, less than PHP. Common step-down or response to insufficient outpatient progress.' },
      { id: 7, outcome: 'OUTPATIENT (OP)', color: '#10B981',
        action: 'Weekly or less. Mild-to-moderate symptoms, adequate functioning, and a supportive environment.',
        clinicalNote: 'The default least-restrictive setting. Start here unless symptoms or safety call for more.' },
    ],
  },

  // ===== DIFFERENTIAL DIAGNOSIS ==============================================
  mood: {
    id: 'mood',
    title: 'Depression vs. Bipolar Differential',
    category: 'differential',
    domain: 'Assessment & Diagnosis',
    description: 'Distinguishing unipolar depression from the bipolar spectrum before settling on a treatment plan.',
    whatToNotice: 'The presenting episode is almost always depressive — the differential lives in the lifetime history. Always screen for past mania or hypomania before treating depression.',
    whyItMatters: 'Antidepressant monotherapy in an undetected bipolar client can trigger a manic switch or rapid cycling. Missing a prior manic episode is one of the most consequential diagnostic errors the exam probes.',
    goldenFormula: 'Validate the current low mood, explore the full lifetime mood history (mania, hypomania, family history, duration), then act on the diagnosis the history supports — not just the snapshot in the room.',
    startId: 1,
    nodes: [
      { id: 1, question: 'Is a current depressive episode present?', yes: 2, no: 10,
        teach: 'Confirm the current episode first, then mine the history. The snapshot rarely settles the diagnosis on its own.' },
      { id: 2, question: 'Any history of a manic episode (1+ week of elevated mood, decreased need for sleep, grandiosity)?', yes: 3, no: 4,
        teach: 'A single lifetime manic episode establishes Bipolar I — even if the client presents depressed today.' },
      { id: 3, outcome: 'BIPOLAR I', color: '#8B5CF6',
        action: 'Mood stabilizer is primary; avoid antidepressant monotherapy; monitor closely for cycling.',
        clinicalNote: 'One manic episode is sufficient — depression is not even required for the diagnosis.' },
      { id: 4, question: 'Any history of a hypomanic episode (4+ days, less severe, no hospitalization)?', yes: 5, no: 6,
        teach: 'Hypomania is shorter and milder than mania and does not cause marked impairment or hospitalization.' },
      { id: 5, outcome: 'BIPOLAR II', color: '#6366F1',
        action: 'Mood stabilizer or atypical antipsychotic; use antidepressants cautiously and rarely alone.',
        clinicalNote: 'Requires at least one hypomanic and one major depressive episode, with no full manic episode.' },
      { id: 6, question: 'Family history of bipolar disorder?', yes: 7, no: 8,
        teach: 'A bipolar family history raises the index of suspicion and the caution around antidepressants.' },
      { id: 7, outcome: 'MDD (monitor for bipolar)', color: '#F59E0B',
        action: 'Treat MDD, but monitor closely for emerging manic/hypomanic symptoms — especially after starting an antidepressant.',
        clinicalNote: 'No mood elevation yet, but family history warrants vigilance for a later switch.' },
      { id: 8, question: 'Has the depression lasted 2+ years (more days than not)?', yes: 9, no: 11,
        teach: 'Chronic, lower-grade depression over years points toward persistent depressive disorder.' },
      { id: 9, outcome: 'PERSISTENT DEPRESSIVE DISORDER', color: '#3B82F6',
        action: 'Plan for long-term treatment; combined therapy plus medication is often needed.',
        clinicalNote: 'Chronicity (2+ years) is the defining feature, even when symptoms are milder than a major episode.' },
      { id: 10, outcome: 'EVALUATE OTHER CONDITIONS', color: '#6B7280',
        action: 'Assess for anxiety, adjustment disorder, grief, or a medical/substance cause before assigning a mood diagnosis.',
        clinicalNote: 'No clear current depressive episode — widen the differential rather than forcing a mood label.' },
      { id: 11, outcome: 'MAJOR DEPRESSIVE DISORDER', color: '#3B82F6',
        action: 'CBT and/or an antidepressant; severity and safety guide the level of care.',
        clinicalNote: 'Unipolar episode with no bipolar history and under 2 years — the most common endpoint, reached only after ruling out mania/hypomania.' },
    ],
  },

  trauma: {
    id: 'trauma',
    title: 'Trauma & Stressor Differential',
    category: 'differential',
    domain: 'Assessment & Diagnosis',
    description: 'Sorting acute stress disorder, PTSD, and adjustment disorder by trauma type and timeline.',
    whatToNotice: 'Two hinges decide everything: did the event meet Criterion A (actual/threatened death, serious injury, or sexual violence)? and how much time has passed (the 3-day / 1-month / 3-month windows)?',
    whyItMatters: 'These three diagnoses share symptoms but differ in timeline and treatment urgency. Calling ASD "PTSD" too early, or treating a Criterion-A trauma as a mere adjustment issue, both misdirect care — and the exam tests the boundaries precisely.',
    goldenFormula: 'Validate the impact of what happened, explore the event type and timeline carefully, then act on the diagnosis the timeline supports — early trauma-focused intervention can prevent ASD from progressing to PTSD.',
    startId: 1,
    nodes: [
      { id: 1, question: 'Was there exposure to actual or threatened death, serious injury, or sexual violence (DSM-5 Criterion A)?', yes: 2, no: 7,
        teach: 'Criterion A is the gate for ASD and PTSD. Distressing-but-non-Criterion-A events route toward adjustment disorder.' },
      { id: 2, question: 'Has MORE than one month passed since the event?', yes: 3, no: 5,
        teach: 'The 1-month line separates the ASD window (under 1 month) from PTSD (1 month or more).' },
      { id: 3, question: 'Do intrusion, avoidance, negative mood/cognition, AND arousal symptoms persist with impairment?', yes: 4, no: 6,
        teach: 'PTSD requires the full symptom-cluster picture persisting beyond a month.' },
      { id: 4, outcome: 'PTSD', color: '#8B5CF6',
        action: 'Trauma-focused therapy (CPT, PE, or EMDR). Establish safety and coping before processing the trauma directly.',
        clinicalNote: 'Criterion-A event, 1+ month, full clusters. Stabilization precedes trauma processing — never flood early.' },
      { id: 5, question: 'Are characteristic symptoms (intrusion, dissociation, avoidance, arousal) present from 3 days up to 1 month?', yes: 8, no: 6,
        teach: 'ASD lives in the 3-day-to-1-month window and prominently features dissociation.' },
      { id: 6, outcome: 'ADJUSTMENT DISORDER / SUBCLINICAL', color: '#3B82F6',
        action: 'Supportive counseling, problem-solving, and monitoring; reassess if symptoms intensify or cross a diagnostic threshold.',
        clinicalNote: 'Symptoms present but below the ASD/PTSD threshold or timeline — manage supportively and watch the trajectory.' },
      { id: 7, question: 'Are emotional/behavioral symptoms occurring within 3 months of an identifiable stressor (no Criterion-A event)?', yes: 6, no: 9,
        teach: 'Adjustment disorder follows an identifiable stressor that does not meet the trauma threshold.' },
      { id: 8, outcome: 'ACUTE STRESS DISORDER', color: '#F59E0B',
        action: 'Brief trauma-focused CBT, psychoeducation, and stabilization. Monitor for progression — early intervention reduces the move to PTSD.',
        clinicalNote: 'Criterion-A event within the past month. Avoid single-session psychological debriefing, which is unsupported and may harm.' },
      { id: 9, outcome: 'EVALUATE OTHER CONDITIONS', color: '#6B7280',
        action: 'Clarify the timeline and stressor; assess for mood, anxiety, or other disorders before concluding.',
        clinicalNote: 'No qualifying event and no clear stressor link — broaden the assessment.' },
    ],
  },

  anxiety: {
    id: 'anxiety',
    title: 'Anxiety Disorder Differential',
    category: 'differential',
    domain: 'Assessment & Diagnosis',
    description: 'Distinguishing the major anxiety disorders by what the fear is about and how it is triggered.',
    whatToNotice: 'The content and cue of the fear are diagnostic: a specific object, social scrutiny, unexpected panic surges, or pervasive multi-domain worry each point to a different disorder.',
    whyItMatters: 'Treatment diverges sharply — graduated exposure for phobias, interoceptive exposure for panic, worry-focused CBT for GAD. Naming the anxiety correctly determines which evidence-based protocol applies.',
    goldenFormula: 'Validate the anxiety as real and impairing, explore exactly what the fear is about and how it is cued, then act with the exposure-based protocol matched to that disorder.',
    startId: 1,
    nodes: [
      { id: 1, question: 'Is the fear cued by a specific object or situation?', yes: 2, no: 5,
        teach: 'A discrete, predictable trigger points toward a phobic or social presentation rather than free-floating worry.' },
      { id: 2, question: 'Is the feared situation social, involving possible scrutiny or judgment?', yes: 3, no: 4,
        teach: 'Social anxiety centers on evaluation; specific phobia centers on the object/situation itself.' },
      { id: 3, outcome: 'SOCIAL ANXIETY DISORDER', color: '#6366F1',
        action: 'CBT with exposure plus cognitive restructuring around evaluation and judgment fears.',
        clinicalNote: 'Fear of negative evaluation across social/performance situations is the hallmark.' },
      { id: 4, outcome: 'SPECIFIC PHOBIA', color: '#3B82F6',
        action: 'Graduated in-vivo exposure is first-line and often produces rapid improvement; medication has a limited role.',
        clinicalNote: 'Marked, out-of-proportion fear of a specific object/situation, with avoidance lasting 6+ months.' },
      { id: 5, question: 'Are there recurrent UNEXPECTED panic attacks with persistent worry about future attacks?', yes: 6, no: 7,
        teach: 'Panic disorder features uncued, out-of-the-blue surges plus anticipatory worry about the next one.' },
      { id: 6, outcome: 'PANIC DISORDER', color: '#8B5CF6',
        action: 'CBT with interoceptive exposure and psychoeducation about the panic cycle and bodily sensations.',
        clinicalNote: 'Unexpected attacks distinguish this from cued anxiety; the worry about attacks sustains the disorder.' },
      { id: 7, question: 'Is there excessive, hard-to-control worry across multiple life domains for 6+ months?', yes: 8, no: 9,
        teach: 'GAD is defined by pervasive, diffuse worry rather than a single feared cue.' },
      { id: 8, outcome: 'GENERALIZED ANXIETY DISORDER', color: '#10B981',
        action: 'CBT (worry exposure, cognitive work, relaxation); consider an SSRI consultation for moderate-to-severe cases.',
        clinicalNote: 'Multi-domain, chronic worry with physical symptoms (tension, fatigue, sleep) for 6+ months.' },
      { id: 9, outcome: 'EVALUATE FURTHER', color: '#6B7280',
        action: 'Assess for separation anxiety, OCD, trauma-related disorders, or a medical/substance cause.',
        clinicalNote: 'The pattern fits none of the above cleanly — widen the differential before labeling.' },
    ],
  },

  // ===== ETHICS & LEGAL ======================================================
  ethics: {
    id: 'ethics',
    title: 'Confidentiality & Duty to Warn',
    category: 'ethics',
    domain: 'Professional Practice & Ethics',
    description: 'Working through the limits of confidentiality when safety, mandated reporting, or the courts are involved.',
    whatToNotice: 'Three distinct triggers can pierce confidentiality: a specific threat to an identifiable person, suspected abuse of a protected class, and a valid court order. Each has its own pathway — do not blur them.',
    whyItMatters: 'Both over-disclosing and failing to act create ethical and legal exposure. The exam tests whether you release the minimum necessary, follow the correct pathway, and document — not whether you "report everything" or "protect confidentiality at all costs."',
    goldenFormula: 'Validate the client and the limits of confidentiality (ideally disclosed up front), explore the specifics of the threat or request, then act with the narrowest legally and ethically required response — and document it.',
    startId: 1,
    nodes: [
      { id: 1, question: 'Has the client disclosed intent to harm an identifiable person?', yes: 2, no: 6,
        teach: 'Duty-to-warn analysis begins only when a threat targets an identifiable victim, not for vague anger.' },
      { id: 2, question: 'Is the threat specific and imminent?', yes: 3, no: 4,
        teach: 'Specificity and imminence elevate a statement into a duty-to-protect situation.' },
      { id: 3, question: 'Can you identify the potential victim?', yes: 5, no: 4,
        teach: 'An identifiable victim is what makes warning possible and, in many states, required.' },
      { id: 4, outcome: 'DOCUMENT & MONITOR', color: '#F59E0B',
        action: 'Document thoroughly, increase monitoring, explore the thoughts further, and consult as needed.',
        clinicalNote: 'Threat is non-specific or no victim is identifiable — manage clinically and document, but the warning duty is not yet triggered.' },
      { id: 5, outcome: 'DUTY TO WARN / PROTECT', color: '#EF4444',
        action: 'Warn the identifiable victim and/or notify law enforcement per your state statute; document every action taken.',
        clinicalNote: 'Specific, imminent threat to an identifiable person. Follow your jurisdiction\u2019s Tarasoff-derived statute precisely.' },
      { id: 6, question: 'Is there suspected child, elder, or dependent-adult abuse?', yes: 7, no: 8,
        teach: 'Mandated reporting is a separate pathway from duty to warn and is triggered by reasonable suspicion.' },
      { id: 7, outcome: 'MANDATED REPORT', color: '#EF4444',
        action: 'File the mandatory report per state law, document it, and inform the client of the limits of confidentiality.',
        clinicalNote: 'Reasonable suspicion — not proof — triggers the duty. The threshold is intentionally low.' },
      { id: 8, question: 'Is there a valid court order for the records?', yes: 9, no: 10,
        teach: 'A subpoena is not the same as a court order; verify validity and consult before releasing anything.' },
      { id: 9, outcome: 'RELEASE REQUIRED INFO', color: '#F59E0B',
        action: 'Release only what is legally required, consult an attorney if needed, and document the disclosure.',
        clinicalNote: 'Minimum-necessary standard applies even under a court order — never release the whole file by default.' },
      { id: 10, outcome: 'MAINTAIN CONFIDENTIALITY', color: '#10B981',
        action: 'Standard confidentiality applies; do not release without written client consent.',
        clinicalNote: 'No threat, no mandated-report trigger, no valid order — confidentiality holds.' },
    ],
  },
};

const DT_CATEGORIES = [
  { id: 'safety', label: 'Safety & Triage', blurb: 'Always assessed first — safety gates every other decision.' },
  { id: 'differential', label: 'Differential Diagnosis', blurb: 'Sorting look-alike presentations to the right diagnosis.' },
  { id: 'ethics', label: 'Ethics & Legal', blurb: 'When and how the limits of confidentiality apply.' },
];

const DT_ICONS = {
  suicide: Shield,
  levelOfCare: Layers,
  mood: Brain,
  trauma: Activity,
  anxiety: Wind,
  ethics: FileText,
};

// ---------------------------------------------------------------------------
// COMPONENT
// ---------------------------------------------------------------------------
function DecisionTrees({ updateStats, updateDomainPerformance } = {}) {
  const [treeId, setTreeId] = useState(null);
  const [nodeId, setNodeId] = useState(null);
  const [trail, setTrail] = useState([]); // [{ question, answer }]

  const tree = treeId ? DT_TREES[treeId] : null;
  const node = tree ? tree.nodes.find((n) => n.id === nodeId) : null;
  const isOutcome = !!(node && node.outcome);

  const openTree = (id) => {
    const t = DT_TREES[id];
    setTreeId(id);
    setNodeId(t.startId || 1);
    setTrail([]);
  };

  const answer = (choice) => {
    const next = choice === 'yes' ? node.yes : node.no;
    setTrail((prev) => [...prev, { question: node.question, answer: choice }]);
    setNodeId(next);
  };

  const restart = () => {
    setNodeId(tree.startId || 1);
    setTrail([]);
  };

  const backToLibrary = () => {
    setTreeId(null);
    setNodeId(null);
    setTrail([]);
  };

  // ----- LIBRARY VIEW -------------------------------------------------------
  if (!tree) {
    return (
      <div className="space-y-6">
        <div>
          <div className="flex items-center gap-2">
            <GitBranch className="w-6 h-6 text-indigo-400" />
            <h2 className="text-2xl font-bold text-white">Decision Trees</h2>
          </div>
          <p className="text-slate-400 mt-1">
            Work through the clinical reasoning step by step. Each pathway teaches what to notice, why it
            matters, and where the Golden Formula (validate &rarr; explore &rarr; act) lands you.
          </p>
        </div>

        {DT_CATEGORIES.map((cat) => {
          const trees = Object.values(DT_TREES).filter((t) => t.category === cat.id);
          if (trees.length === 0) return null;
          return (
            <div key={cat.id} className="space-y-3">
              <div className="flex items-baseline gap-3">
                <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-300">{cat.label}</h3>
                <span className="text-xs text-slate-500">{cat.blurb}</span>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {trees.map((t) => {
                  const Icon = DT_ICONS[t.id] || GitBranch;
                  return (
                    <button
                      key={t.id}
                      onClick={() => openTree(t.id)}
                      className="text-left bg-slate-800 border border-slate-700 hover:border-indigo-500 hover:bg-slate-800/70 rounded-xl p-4 transition-colors group"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex items-center gap-3">
                          <div className="w-9 h-9 rounded-lg bg-slate-700/60 flex items-center justify-center group-hover:bg-indigo-500/20">
                            <Icon className="w-5 h-5 text-indigo-300" />
                          </div>
                          <div>
                            <p className="text-white font-semibold leading-tight">{t.title}</p>
                            <p className="text-xs text-slate-500 mt-0.5">{t.domain}</p>
                          </div>
                        </div>
                        <ChevronRight className="w-4 h-4 text-slate-500 group-hover:text-indigo-300 mt-1 shrink-0" />
                      </div>
                      <p className="text-sm text-slate-400 mt-3">{t.description}</p>
                    </button>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    );
  }

  // ----- WALKTHROUGH VIEW ---------------------------------------------------
  const Icon = DT_ICONS[tree.id] || GitBranch;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <button
          onClick={backToLibrary}
          className="inline-flex items-center gap-1.5 text-sm text-slate-400 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> All decision trees
        </button>
        <div className="flex items-center gap-2 mt-2">
          <Icon className="w-6 h-6 text-indigo-400" />
          <h2 className="text-2xl font-bold text-white">{tree.title}</h2>
        </div>
        <p className="text-slate-400 mt-1">{tree.description}</p>
      </div>

      {/* Teaching panel */}
      <div className="grid gap-3 md:grid-cols-3">
        <div className="bg-slate-800/60 border border-slate-700 rounded-xl p-4">
          <div className="flex items-center gap-2 mb-1.5">
            <Eye className="w-4 h-4 text-teal-300" />
            <span className="text-xs font-semibold uppercase tracking-wide text-teal-300">What to notice</span>
          </div>
          <p className="text-sm text-slate-300 leading-relaxed">{tree.whatToNotice}</p>
        </div>
        <div className="bg-slate-800/60 border border-slate-700 rounded-xl p-4">
          <div className="flex items-center gap-2 mb-1.5">
            <AlertCircle className="w-4 h-4 text-amber-300" />
            <span className="text-xs font-semibold uppercase tracking-wide text-amber-300">Why it matters</span>
          </div>
          <p className="text-sm text-slate-300 leading-relaxed">{tree.whyItMatters}</p>
        </div>
        <div className="bg-slate-800/60 border border-slate-700 rounded-xl p-4">
          <div className="flex items-center gap-2 mb-1.5">
            <Target className="w-4 h-4 text-indigo-300" />
            <span className="text-xs font-semibold uppercase tracking-wide text-indigo-300">Golden Formula</span>
          </div>
          <p className="text-sm text-slate-300 leading-relaxed">{tree.goldenFormula}</p>
        </div>
      </div>

      {/* Decision trail */}
      {trail.length > 0 && (
        <div className="flex flex-wrap items-center gap-2">
          {trail.map((step, i) => (
            <span
              key={i}
              className={`inline-flex items-center gap-1 text-xs px-2.5 py-1 rounded-full border ${
                step.answer === 'yes'
                  ? 'border-emerald-700/60 bg-emerald-900/20 text-emerald-200'
                  : 'border-slate-600 bg-slate-800 text-slate-300'
              }`}
            >
              {step.answer === 'yes' ? <CheckCircle2 className="w-3 h-3" /> : <X className="w-3 h-3" />}
              {step.answer.toUpperCase()}
            </span>
          ))}
        </div>
      )}

      {/* Current node */}
      {!isOutcome && node && (
        <div className="bg-slate-800 border border-slate-700 rounded-2xl p-6">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 mb-2">Decision point</p>
          <p className="text-lg text-white font-medium leading-snug">{node.question}</p>

          {node.teach && (
            <div className="mt-4 flex items-start gap-2 bg-slate-900/60 border border-slate-700/60 rounded-lg p-3">
              <Lightbulb className="w-4 h-4 text-amber-300 mt-0.5 shrink-0" />
              <p className="text-sm text-slate-300 leading-relaxed">{node.teach}</p>
            </div>
          )}

          <div className="flex gap-3 mt-6">
            <button
              onClick={() => answer('yes')}
              className="flex-1 inline-flex items-center justify-center gap-2 bg-slate-700 hover:bg-indigo-600 text-white font-semibold py-3 rounded-xl transition-colors"
            >
              <CheckCircle2 className="w-5 h-5" /> Yes
            </button>
            <button
              onClick={() => answer('no')}
              className="flex-1 inline-flex items-center justify-center gap-2 bg-slate-700 hover:bg-slate-600 text-white font-semibold py-3 rounded-xl transition-colors"
            >
              <X className="w-5 h-5" /> No
            </button>
          </div>
        </div>
      )}

      {/* Outcome node */}
      {isOutcome && node && (
        <div
          className="rounded-2xl p-6 border"
          style={{ borderColor: node.color, backgroundColor: `${node.color}1A` }}
        >
          <div className="flex items-center gap-2">
            <span
              className="text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-md"
              style={{ backgroundColor: node.color, color: '#0b1120' }}
            >
              Outcome
            </span>
            <h3 className="text-xl font-bold text-white">{node.outcome}</h3>
          </div>

          <div className="mt-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-400 mb-1">Recommended action</p>
            <p className="text-slate-100 leading-relaxed">{node.action}</p>
          </div>

          {node.clinicalNote && (
            <div className="mt-4 flex items-start gap-2 bg-slate-900/50 rounded-lg p-3">
              <Info className="w-4 h-4 text-slate-300 mt-0.5 shrink-0" />
              <p className="text-sm text-slate-300 leading-relaxed">{node.clinicalNote}</p>
            </div>
          )}

          <div className="flex flex-wrap gap-3 mt-6">
            <button
              onClick={restart}
              className="inline-flex items-center gap-2 bg-slate-700 hover:bg-slate-600 text-white font-semibold px-4 py-2.5 rounded-xl transition-colors"
            >
              <RotateCcw className="w-4 h-4" /> Run this tree again
            </button>
            <button
              onClick={backToLibrary}
              className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold px-4 py-2.5 rounded-xl transition-colors"
            >
              Choose another pathway <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default DecisionTrees;
export { DT_TREES };
