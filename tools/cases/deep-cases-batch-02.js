// ============================================================================
// deep-cases-batch-02.js — NCMHCE deep cases, batch 02 (2022+ format)
// NCMHCE Prep Platform | GA Integrated Therapeutic Perspectives LLC
//
// Five exam-deep clinical simulations (13 items each, sections [5,4,4]). The
// diagnosis is GIVEN; items test clinical decision-making across the three
// derived sections (Assessment -> Planning -> Process). Diagnoses are chosen to
// fill the largest blueprint gaps WITHOUT overlapping batch-01 (D102 GAD,
// D103 PTSD, D104 AUD-Moderate):
//   ncmhce-D105  Major Depressive Disorder, Moderate (Depressive)
//   ncmhce-D106  Panic Disorder (Anxiety)
//   ncmhce-D107  Opioid Use Disorder, Severe (Substance)
//   ncmhce-D108  Prolonged Grief Disorder (Trauma)
//   ncmhce-D109  Borderline Personality Disorder (Personality)
//
// Authored to NCMHCE_DeepCase_Generation_Spec.md. Passes caseSchema
// (strictItemQuality) AND examDepth with zero errors / zero warnings.
//
// Validate:
//   node tools/cases/validateCases.js tools/cases/deep-cases-batch-02.js
//   node -e "const{validateExamDepthSet}=require('./tools/cases/examDepth');const{CASES}=require('./tools/cases/deep-cases-batch-02');console.log(validateExamDepthSet(CASES))"
//
// Standalone deliverable for SME review. Do NOT auto-import — importing into the
// live DB is a separate, human-run step.
// ============================================================================

// --- tiny builders so every option/question carries the full schema ---------
// O(id, text, weight, { r, approach, why, keys, mistake })
const O = (id, text, weight, ex) => ({
  id,
  text,
  isCorrect: weight === 3,
  weight,
  rationale: ex.r,
  explanation: { approach: ex.approach, rationale: ex.why, keyIndicators: ex.keys, commonMistake: ex.mistake },
});
const Q = (id, domain, question, evidenceRef, options) => ({ id, domain, question, evidenceRef, options });

// ============================================================================
// D105 — Major Depressive Disorder, Moderate (F33.1) — Depressive — easy
// ============================================================================
const D105 = {
  id: 'ncmhce-D105',
  title: 'Low mood and lost interest after a demotion',
  category: 'Depressive',
  difficulty: 'easy',
  primaryDiagnosis: { name: 'Major Depressive Disorder, Moderate', code: 'F33.1' },
  diagnosis: { name: 'Major Depressive Disorder, Moderate', code: 'F33.1' },
  differentialOptions: [
    { id: 'do1', name: 'Major Depressive Disorder, Moderate', isCorrect: true },
    { id: 'do2', name: 'Adjustment Disorder, with Depressed Mood', isCorrect: false },
    { id: 'do3', name: 'Persistent Depressive Disorder', isCorrect: false },
    { id: 'do4', name: 'Bipolar II Disorder', isCorrect: false },
  ],
  narrative: {
    intake:
      'Daniel Okafor, a 34-year-old warehouse supervisor, presents reporting six weeks of low mood, ' +
      'loss of interest in coaching his daughter’s soccer team, poor sleep, and difficulty concentrating after a demotion.',
    session1:
      'He describes waking at 4 a.m. most days, eating little, and feeling worthless and slowed down. ' +
      'He denies any past period of elevated, expansive mood or decreased need for sleep with increased energy.',
    session2:
      'He reports passive thoughts that his family would be better off without him but no plan, intent, or prior attempts, ' +
      'and he is frightened by these thoughts and willing to work on them collaboratively.',
  },
  diagnosticRationale:
    'Five or more depressive symptoms—depressed mood, anhedonia, insomnia, appetite loss, psychomotor slowing, ' +
    'worthlessness, and poor concentration—are present nearly daily for more than two weeks with functional impairment, ' +
    'meeting DSM-5-TR criteria for a moderate major depressive episode without any history of mania or hypomania.',
  references: [
    { id: 'R1', source: 'DSM-5-TR', detail: 'MDD Criterion A: 5+ symptoms, 2-week duration, anhedonia or depressed mood, with impairment' },
    { id: 'R2', source: 'APA CPG', detail: 'Depression guideline: CBT, behavioral activation, and IPT as first-line psychotherapies' },
    { id: 'R3', source: 'C-SSRS', detail: 'Structured screening of ideation severity, intent, plan, and behavior' },
    { id: 'R4', source: 'VA/DoD CPG', detail: 'MDD measurement-based stepped care using repeated PHQ-9 administration' },
    { id: 'R5', source: 'ACA Code of Ethics', detail: 'A.1., A.2., and B.1.: informed consent, referral, and confidentiality limits' },
    { id: 'R6', source: 'Corey (Theory & Practice)', detail: 'Working alliance, therapeutic stance, and client engagement across theoretical approaches' },
  ],
  questions: [
    Q('q1', 'intake', 'What should the counselor confirm first to anchor the major depressive episode diagnosis at intake?', ['R1'], [
      O('a', 'That symptoms have persisted nearly every day for at least two weeks and impair his daily functioning', 3,
        { r: 'Duration and impairment anchor the episode', approach: 'Confirm the diagnostic threshold', why: 'DSM-5-TR requires a 2-week span with impairment', keys: ['six weeks of symptoms', 'lost interest in coaching'], mistake: 'Diagnosing from a single low mood report' }),
      O('b', 'That he can identify the single external stressor he believes is responsible for everything he is feeling', 0,
        { r: 'Cause does not establish the diagnosis', approach: 'Stressor hunting', why: 'Etiology is not a Criterion A requirement', keys: ['recent demotion'], mistake: 'Treating a trigger as the diagnostic test' }),
      O('c', 'That his family history includes at least one first-degree relative who was treated for a depressive disorder', -1,
        { r: 'Family history supports but does not confirm', approach: 'Over-weighting heredity', why: 'History informs risk, not the current criteria', keys: ['no family data yet'], mistake: 'Requiring family history to diagnose' }),
      O('d', 'That his current depressive symptoms are clearly more severe today than they were at the very first onset', -1,
        { r: 'Worsening is not required for the diagnosis', approach: 'Trajectory framing', why: 'Severity trend is not a Criterion A element', keys: ['stable symptom set'], mistake: 'Demanding progression to diagnose' }),
    ]),
    Q('q2', 'core', 'Which finding best distinguishes his presentation as major depression rather than an adjustment disorder?', ['R1'], [
      O('a', 'The presence of pervasive anhedonia with neurovegetative signs that meet the full symptom count and threshold', 3,
        { r: 'Full criteria exceed an adjustment reaction', approach: 'Apply the symptom count', why: 'Adjustment disorder does not meet full MDD criteria', keys: ['anhedonia', 'early waking and appetite loss'], mistake: 'Calling any stress reaction adjustment' }),
      O('b', 'The fact that his mood problems began only after an identifiable and clearly upsetting workplace stressor occurred', -1,
        { r: 'A trigger does not rule MDD out', approach: 'Trigger equals adjustment', why: 'MDD can also follow a stressor', keys: ['demotion preceded symptoms'], mistake: 'Equating any precipitant with adjustment' }),
      O('c', 'The observation that his distress seems somewhat out of proportion to the actual severity of the demotion event', -1,
        { r: 'Proportionality is an adjustment feature', approach: 'Proportionality test', why: 'This points toward, not away from, adjustment', keys: ['subjective distress'], mistake: 'Using proportionality to confirm MDD' }),
      O('d', 'The likelihood that his symptoms will fully resolve on their own within roughly six months of the stressor ending', 0,
        { r: 'Expected course does not define the episode', approach: 'Prognosis framing', why: 'Self-limited course suggests adjustment instead', keys: ['uncertain prognosis'], mistake: 'Diagnosing from anticipated course' }),
    ]),
    Q('q3', 'core', 'Before settling on a unipolar depression diagnosis, what must the counselor specifically rule out?', ['R1'], [
      O('a', 'Any past episode of elevated or irritable mood with decreased need for sleep, marking a hypomanic or manic history', 3,
        { r: 'Past hypomania reframes the disorder', approach: 'Screen for bipolarity', why: 'A manic/hypomanic history changes the diagnosis', keys: ['denies elevated mood', 'no decreased sleep need'], mistake: 'Skipping the bipolar screen' }),
      O('b', 'Whether he has ever experienced a panic attack with racing heart and a fear of losing control in public places', -1,
        { r: 'Panic is a different rule-out', approach: 'Anxiety screening', why: 'Panic does not change unipolar vs bipolar', keys: ['no panic reported'], mistake: 'Confusing comorbidity with differential' }),
      O('c', 'Whether his concentration problems are better explained by a long-standing attention-deficit pattern since childhood', -1,
        { r: 'ADHD is a low-priority rule-out here', approach: 'Neurodevelopmental framing', why: 'Onset and episode pattern point to mood', keys: ['adult-onset symptoms'], mistake: 'Chasing ADHD before mood history' }),
      O('d', 'Whether his beliefs about being worthless have reached a fixed, unshakeable, clearly delusional level of conviction', 0,
        { r: 'Psychosis screen matters but is secondary', approach: 'Psychosis framing', why: 'No psychotic features are described', keys: ['guilt without delusion'], mistake: 'Over-reading ordinary guilt as psychosis' }),
    ]),
    Q('q4', 'core', 'Given his passive thoughts of being better off dead, what is the most appropriate assessment step?', ['R3'], [
      O('a', 'Use a structured suicide-risk screen to clarify ideation severity, any intent, plan, and prior behavior', 3,
        { r: 'Structured screening clarifies risk', approach: 'Assess risk directly', why: 'C-SSRS structures severity, intent, and plan', keys: ['passive ideation present', 'no plan reported'], mistake: 'Asking vaguely or avoiding the topic' }),
      O('b', 'Reassure him that thoughts like these are extremely common in depression and will almost certainly fade with time', -2,
        { r: 'Premature reassurance closes assessment', approach: 'Minimize and reassure', why: 'It forecloses needed risk data', keys: ['unassessed intent'], mistake: 'Reassuring before assessing' }),
      O('c', 'Ask him to promise in writing that he will not act on any of these thoughts before the next scheduled appointment', -2,
        { r: 'No-suicide contracts are not evidence-based', approach: 'No-harm contract', why: 'Contracts do not reduce risk and skip assessment', keys: ['needs collaborative planning'], mistake: 'Substituting a contract for assessment' }),
      O('d', 'Defer any discussion of the thoughts until rapport is stronger so that he does not feel judged or pathologized today', -1,
        { r: 'Deferring risk assessment is unsafe', approach: 'Delay for rapport', why: 'Risk is assessed at disclosure, not later', keys: ['active disclosure now'], mistake: 'Postponing a safety assessment' }),
    ]),
    Q('q5', 'intake', 'What additional history is most important to gather to avoid misattributing the depressive picture?', ['R1'], [
      O('a', 'A review of his medications, substance use, and any thyroid or other medical conditions that mimic depression', 3,
        { r: 'Rule out medical and substance causes', approach: 'Screen organic contributors', why: 'DSM-5-TR requires excluding medical and substance causes', keys: ['no medical review yet'], mistake: 'Skipping the organic rule-out' }),
      O('b', 'A detailed genogram tracing relationship patterns and emotional cutoffs across at least three prior family generations', 0,
        { r: 'Useful later, not the priority now', approach: 'Family-systems mapping', why: 'It does not address organic mimics', keys: ['no urgent systemic data'], mistake: 'Prioritizing depth history over safety rule-outs' }),
      O('c', 'A full account of every job he has held so the counselor can understand his complete occupational and earnings history', -1,
        { r: 'Exhaustive work history is low yield', approach: 'Vocational cataloging', why: 'It does not change the differential', keys: ['one relevant demotion'], mistake: 'Collecting low-yield detail' }),
      O('d', 'A list of the specific coping strategies that have failed him so the counselor can rule each of those approaches out', -1,
        { r: 'Coping review is secondary here', approach: 'Coping inventory', why: 'It does not exclude medical causes', keys: ['treatment planning data'], mistake: 'Confusing planning data with rule-outs' }),
    ]),
    Q('q6', 'treatment', 'What is the most appropriate first-line, within-scope treatment recommendation?', ['R2'], [
      O('a', 'Offer evidence-based psychotherapy such as cognitive behavioral therapy or behavioral activation for depression', 3,
        { r: 'First-line psychotherapy fits scope', approach: 'Match guideline to scope', why: 'APA CPG lists CBT and BA as first-line', keys: ['moderate severity', 'counselor scope'], mistake: 'Defaulting to medication advice' }),
      O('b', 'Recommend that he begin a daily antidepressant immediately and titrate the dose upward over the next several weeks', -2,
        { r: 'Prescribing is outside counselor scope', approach: 'Prescribe medication', why: 'Counselors do not prescribe or titrate', keys: ['no prescriptive authority'], mistake: 'Acting outside scope of practice' }),
      O('c', 'Suggest he wait and monitor his mood on his own for a couple of months before committing to any formal treatment', -1,
        { r: 'Watchful waiting under-treats moderate MDD', approach: 'Watchful waiting', why: 'Moderate MDD warrants active treatment', keys: ['functional impairment'], mistake: 'Delaying indicated care' }),
      O('d', 'Encourage him to focus mainly on vigorous daily exercise and a structured sleep routine in place of formal therapy', -1,
        { r: 'Lifestyle alone is insufficient first-line', approach: 'Lifestyle substitution', why: 'Adjuncts do not replace first-line therapy', keys: ['moderate symptoms'], mistake: 'Offering adjuncts as the primary plan' }),
    ]),
    Q('q7', 'treatment', 'How should the counselor track whether the treatment is actually working over time?', ['R4'], [
      O('a', 'Re-administer a validated symptom measure such as the PHQ-9 at regular intervals to guide measurement-based care', 3,
        { r: 'Measurement-based care guides decisions', approach: 'Use repeated measures', why: 'VA/DoD CPG endorses measurement-based care', keys: ['need objective tracking'], mistake: 'Relying on impressions alone' }),
      O('b', 'Ask him at each session whether he subjectively feels that things are generally going better than they were before', -1,
        { r: 'Global impressions are unreliable', approach: 'Informal check-in', why: 'It lacks a standardized benchmark', keys: ['no objective anchor'], mistake: 'Trusting unstandardized self-report' }),
      O('c', 'Wait until the agreed course of therapy has fully ended and then evaluate his overall response in a single review', -1,
        { r: 'End-only review misses early non-response', approach: 'Terminal evaluation', why: 'It prevents timely plan adjustment', keys: ['need interim data'], mistake: 'Skipping interim monitoring' }),
      O('d', 'Track only whether he is consistently attending his scheduled sessions and completing the assigned homework each week', 0,
        { r: 'Engagement is necessary but not sufficient', approach: 'Adherence proxy', why: 'Attendance does not measure symptoms', keys: ['process versus outcome'], mistake: 'Mistaking adherence for outcome' }),
    ]),
    Q('q8', 'treatment', 'Daniel asks about medication. What is the most appropriate counselor action?', ['R5'], [
      O('a', 'Provide general information and coordinate a referral to a prescriber for a medication evaluation with his consent', 3,
        { r: 'Refer and coordinate within scope', approach: 'Coordinate care', why: 'Counselors refer rather than prescribe', keys: ['client interest in meds', 'consent to refer'], mistake: 'Giving specific medication advice' }),
      O('b', 'Tell him which specific antidepressant tends to work best for people who present with his particular symptom pattern', -2,
        { r: 'Naming a drug exceeds scope', approach: 'Prescriptive advice', why: 'Counselors do not select medications', keys: ['no prescriptive authority'], mistake: 'Overstepping professional scope' }),
      O('c', 'Advise him that medication is generally unnecessary as long as he stays fully committed to attending his therapy', -1,
        { r: 'Discouraging meds overreaches', approach: 'Discourage medication', why: 'The decision belongs with a prescriber', keys: ['client autonomy'], mistake: 'Steering a medical decision' }),
      O('d', 'Suggest that he research antidepressant options online and bring his own preferred choice to a future appointment', -1,
        { r: 'Outsourcing to self-research is poor care', approach: 'Defer to self-research', why: 'It abandons proper coordination', keys: ['needs professional evaluation'], mistake: 'Replacing referral with self-directed search' }),
    ]),
    Q('q9', 'treatment', 'Which initial behavioral activation step best fits Daniel’s presentation?', ['R2'], [
      O('a', 'Collaboratively schedule small, valued activities such as briefly attending his daughter’s practice to rebuild reward', 3,
        { r: 'Graded valued activity rebuilds reward', approach: 'Schedule reinforcing activity', why: 'BA pairs activity with valued reinforcement', keys: ['withdrew from coaching', 'anhedonia'], mistake: 'Waiting for motivation before activity' }),
      O('b', 'Direct him to resume the full coaching role and every other prior responsibility right away to prove he can still cope', -1,
        { r: 'Too much too soon invites failure', approach: 'All-at-once activation', why: 'BA grades activity rather than flooding', keys: ['low energy'], mistake: 'Ignoring graded pacing' }),
      O('c', 'Have him keep a detailed daily log of every negative automatic thought before introducing any change to his routine', 0,
        { r: 'Thought logs fit CBT, not BA first step', approach: 'Cognitive logging', why: 'BA leads with activity scheduling', keys: ['behavioral focus'], mistake: 'Confusing BA with cognitive work' }),
      O('d', 'Encourage him to wait to re-engage in any activities until he genuinely feels his interest and energy have returned', -1,
        { r: 'Waiting on mood reverses BA logic', approach: 'Mood-dependent action', why: 'BA acts before motivation returns', keys: ['anhedonia maintains avoidance'], mistake: 'Letting mood gate behavior' }),
    ]),
    Q('q10', 'counseling', 'How can the counselor best address Daniel’s belief that his depression makes him a failure?', ['R2'], [
      O('a', 'Offer psychoeducation framing depression as a common, treatable condition while validating how heavy it currently feels', 3,
        { r: 'Psychoeducation reframes self-blame', approach: 'Normalize and validate', why: 'Framing depression as treatable counters self-blame', keys: ['worthlessness', 'self-as-failure belief'], mistake: 'Either lecturing or only sympathizing' }),
      O('b', 'Firmly challenge the belief as irrational and present him with logical evidence that he is objectively not a failure', -1,
        { r: 'Premature disputation feels invalidating', approach: 'Confront the cognition', why: 'It can rupture alliance early', keys: ['fragile self-view'], mistake: 'Disputing before validating' }),
      O('c', 'Agree that the demotion was a genuine setback and focus the work on helping him accept that he underperformed at work', -2,
        { r: 'Endorsing the self-blame deepens it', approach: 'Validate the distortion', why: 'It reinforces the depressive belief', keys: ['cognitive distortion'], mistake: 'Colluding with hopeless thinking' }),
      O('d', 'Redirect him away from the topic entirely and refocus the conversation on practical goal-setting for the coming week', -1,
        { r: 'Avoidance leaves the belief intact', approach: 'Topic redirection', why: 'It bypasses a core treatment target', keys: ['unaddressed cognition'], mistake: 'Avoiding emotionally central material' }),
    ]),
    Q('q11', 'counseling', 'Daniel says he doubts anything will help. What is the most therapeutic response?', ['R6'], [
      O('a', 'Acknowledge the hopelessness as a symptom and collaboratively set one small, achievable goal to test it against', 3,
        { r: 'Name hopelessness and test it behaviorally', approach: 'Instill hope collaboratively', why: 'Small successes counter hopelessness as a symptom', keys: ['expressed hopelessness', 'anhedonia'], mistake: 'Arguing him out of hopelessness' }),
      O('b', 'Promise him with confidence that therapy is guaranteed to work as long as he fully commits to attending every session', -1,
        { r: 'Overpromising risks credibility', approach: 'Guarantee outcomes', why: 'Unrealistic guarantees can backfire', keys: ['skeptical client'], mistake: 'Making promises you cannot keep' }),
      O('c', 'Accept his prediction that treatment is unlikely to help and shift the focus toward simply managing his daily symptoms', -2,
        { r: 'Agreeing confirms the hopelessness', approach: 'Concede hopelessness', why: 'It abandons a treatable target', keys: ['therapeutic pessimism'], mistake: 'Adopting the client’s hopeless stance' }),
      O('d', 'Explain in detail the neurobiology of depression to convince him on scientific grounds that recovery is fully possible', -1,
        { r: 'Lecturing rarely shifts hopelessness', approach: 'Didactic persuasion', why: 'Experiential evidence works better here', keys: ['emotional reasoning'], mistake: 'Substituting facts for experience' }),
    ]),
    Q('q12', 'ethics', 'When reviewing informed consent, what must the counselor be sure Daniel understands?', ['R5'], [
      O('a', 'The limits of confidentiality, including when imminent risk of serious harm to self or others must be acted upon', 3,
        { r: 'Disclose confidentiality limits up front', approach: 'Clarify consent and limits', why: 'ACA B.1. requires explaining confidentiality limits', keys: ['ideation present', 'duty to protect'], mistake: 'Omitting the limits of confidentiality' }),
      O('b', 'That everything he chooses to share in their sessions will be held in complete confidence under all circumstances', -2,
        { r: 'Absolute confidentiality is inaccurate', approach: 'Overpromise privacy', why: 'It misstates legal and ethical limits', keys: ['safety exceptions exist'], mistake: 'Guaranteeing unconditional secrecy' }),
      O('c', 'That the counselor will personally decide which specific treatment goals are appropriate for him to pursue in therapy', -1,
        { r: 'Goals are collaborative, not imposed', approach: 'Clinician-set goals', why: 'Consent includes collaborative goal-setting', keys: ['client autonomy'], mistake: 'Removing the client from planning' }),
      O('d', 'That he is required to complete the entire recommended course of therapy once he has agreed to begin the work today', -1,
        { r: 'Clients may withdraw consent', approach: 'Mandate completion', why: 'Consent is ongoing and revocable', keys: ['right to refuse'], mistake: 'Treating consent as binding' }),
    ]),
    Q('q13', 'ethics', 'Daniel declines a medication referral but wants to continue therapy. What is the appropriate response?', ['R5'], [
      O('a', 'Respect his autonomous decision, document it, and continue evidence-based therapy while keeping the option open', 3,
        { r: 'Honor autonomy and document', approach: 'Support informed choice', why: 'ACA A.1. supports client autonomy and welfare', keys: ['declined referral', 'wants therapy'], mistake: 'Coercing a medical decision' }),
      O('b', 'Tell him you cannot ethically continue to work with him at all unless he first agrees to be evaluated for medication', -2,
        { r: 'Conditioning care is coercive', approach: 'Condition treatment', why: 'It violates autonomy and continuity of care', keys: ['client refusal'], mistake: 'Making therapy contingent on compliance' }),
      O('c', 'Repeatedly revisit the medication question in each upcoming session until he eventually changes his mind and agrees', -1,
        { r: 'Persistent pressure undermines autonomy', approach: 'Wear down refusal', why: 'It crosses into undue influence', keys: ['informed refusal'], mistake: 'Pressuring after a clear decision' }),
      O('d', 'Document that he refused recommended care and quietly note that he is now solely responsible for any poor outcome', -1,
        { r: 'Blame-shifting documentation is improper', approach: 'Defensive charting', why: 'Records should be neutral and clinical', keys: ['professional documentation'], mistake: 'Using the chart to assign blame' }),
    ]),
  ],
};

// ============================================================================
// D106 — Panic Disorder (F41.0) — Anxiety — medium
// ============================================================================
const D106 = {
  id: 'ncmhce-D106',
  title: 'Sudden surges of fear with a racing heart',
  category: 'Anxiety',
  difficulty: 'medium',
  primaryDiagnosis: { name: 'Panic Disorder', code: 'F41.0' },
  diagnosis: { name: 'Panic Disorder', code: 'F41.0' },
  differentialOptions: [
    { id: 'do1', name: 'Panic Disorder', isCorrect: true },
    { id: 'do2', name: 'Generalized Anxiety Disorder', isCorrect: false },
    { id: 'do3', name: 'Specific Phobia, Situational', isCorrect: false },
    { id: 'do4', name: 'Social Anxiety Disorder', isCorrect: false },
  ],
  narrative: {
    intake:
      'Renée Dubois, a 33-year-old nurse, presents after several sudden, unexpected surges of intense fear with a pounding heart, ' +
      'chest tightness, dizziness, and a sense she might die or lose control; two emergency-department visits found nothing wrong.',
    session1:
      'She describes attacks that peak within minutes and arise without warning, even at rest, followed by a persistent dread of ' +
      'the next one. She has started leaving work early and avoiding the gym for fear of triggering the frightening sensations.',
    session2:
      'She fears the racing heart signals a heart attack despite a normal cardiac workup, and she now carries water and sits near exits. ' +
      'She denies stimulant use beyond one morning coffee and wants to understand what is happening to her body.',
  },
  diagnosticRationale:
    'Recurrent unexpected panic attacks that peak within minutes, followed by at least one month of persistent worry about further ' +
    'attacks and maladaptive avoidance, with a normal medical workup, meet DSM-5-TR criteria for panic disorder. The attacks are ' +
    'uncued rather than tied to a single feared object or social scrutiny, and they are discrete rather than chronic diffuse worry.',
  references: [
    { id: 'R1', source: 'DSM-5-TR', detail: 'Panic disorder: recurrent unexpected attacks plus 1+ month of worry or maladaptive change' },
    { id: 'R2', source: 'Barlow PCT', detail: 'Panic control treatment: interoceptive exposure to feared bodily sensations' },
    { id: 'R3', source: 'APA CPG', detail: 'Anxiety guideline supporting CBT with exposure as first-line for panic disorder' },
    { id: 'R4', source: 'C-SSRS', detail: 'Structured screening of ideation severity, intent, and plan' },
    { id: 'R5', source: 'ACA Code of Ethics', detail: 'A.1. and C.2.: client welfare, scope of practice, and informed consent' },
    { id: 'R6', source: 'Corey (Theory & Practice)', detail: 'Working alliance, therapeutic stance, and client engagement across theoretical approaches' },
  ],
  questions: [
    Q('q1', 'intake', 'What is most important to confirm to establish panic disorder rather than isolated panic attacks?', ['R1'], [
      O('a', 'That the unexpected attacks are recurrent and followed by a month or more of worry or avoidance about further attacks', 3,
        { r: 'Recurrent attacks plus persistent worry define it', approach: 'Confirm the full criterion', why: 'DSM-5-TR requires recurrent uncued attacks plus a month of worry or change', keys: ['unexpected surges', 'dread of the next one'], mistake: 'Diagnosing from one attack alone' }),
      O('b', 'That she can name the specific external situation that reliably brings on each one of her frightening panic episodes', -1,
        { r: 'A reliable cue points away from panic disorder', approach: 'Cue-based framing', why: 'Panic disorder attacks are at least sometimes unexpected', keys: ['attacks at rest'], mistake: 'Requiring a consistent trigger' }),
      O('c', 'That she has experienced a continuous, hard-to-control background of worry across many domains for the past six months', -1,
        { r: 'Chronic diffuse worry suggests GAD', approach: 'Generalized-worry framing', why: 'That pattern fits GAD, not panic disorder', keys: ['discrete attacks'], mistake: 'Confusing panic with generalized worry' }),
      O('d', 'That her physical sensations during the attacks are severe enough that they have twice prompted an emergency visit', 0,
        { r: 'Severity does not establish the diagnosis', approach: 'Severity framing', why: 'ED visits show distress, not the diagnostic pattern', keys: ['normal workup'], mistake: 'Reading severity as the criterion' }),
    ]),
    Q('q2', 'core', 'Which feature best distinguishes her presentation from generalized anxiety disorder?', ['R1'], [
      O('a', 'Discrete attacks that peak within minutes rather than a persistent, free-floating background of multi-domain worry', 3,
        { r: 'Discrete peaks versus chronic worry', approach: 'Contrast the symptom course', why: 'Panic is episodic and abrupt; GAD is sustained worry', keys: ['peaks within minutes', 'uncued'], mistake: 'Treating chronic worry as panic' }),
      O('b', 'The presence of physical symptoms such as a racing heart, dizziness, and tension that she notices during the episodes', -1,
        { r: 'Somatic symptoms occur in both', approach: 'Somatic framing', why: 'Physical arousal does not separate the two', keys: ['shared somatic features'], mistake: 'Using shared symptoms to differentiate' }),
      O('c', 'Her worry about her job performance and whether her colleagues have noticed that she keeps leaving work early lately', -1,
        { r: 'Performance worry is nonspecific', approach: 'Worry-content framing', why: 'Worry topic does not distinguish the disorders', keys: ['secondary worry'], mistake: 'Reading worry content as diagnostic' }),
      O('d', 'The way her symptoms tend to feel noticeably worse on days that are especially busy and demanding at the hospital', 0,
        { r: 'Stress reactivity is nonspecific', approach: 'Stress framing', why: 'Worsening under stress does not separate them', keys: ['stress sensitivity'], mistake: 'Using stress sensitivity to differentiate' }),
    ]),
    Q('q3', 'intake', 'Given her cardiac fears and normal workup, what is the most appropriate counselor action?', ['R5'], [
      O('a', 'Confirm that a medical evaluation has ruled out cardiac causes and coordinate further workup if any new symptoms arise', 3,
        { r: 'Verify medical rule-out, coordinate as needed', approach: 'Screen and coordinate medical causes', why: 'Cardiac and endocrine mimics must be excluded, not assumed', keys: ['chest tightness', 'two ED visits'], mistake: 'Assuming anxiety without a medical rule-out' }),
      O('b', 'Order an electrocardiogram and thyroid panel yourself so that you can personally rule out any underlying medical condition', -1,
        { r: 'Ordering tests exceeds counselor scope', approach: 'Order medical tests', why: 'Counselors coordinate but do not order labs', keys: ['scope limit'], mistake: 'Acting outside scope of practice' }),
      O('c', 'Tell her with confidence that her heart is completely fine and that she should stop worrying about it from now on', -1,
        { r: 'Flat reassurance feeds the cycle', approach: 'Blanket reassurance', why: 'Reassurance-seeking maintains panic about sensations', keys: ['reassurance dependence'], mistake: 'Reinforcing reassurance-seeking' }),
      O('d', 'Disregard the physical symptoms entirely because the emergency department already determined that nothing was wrong', -2,
        { r: 'Dismissing symptoms is unsafe and invalidating', approach: 'Dismiss the body', why: 'New or changing symptoms still warrant attention', keys: ['somatic focus'], mistake: 'Ignoring the medical differential outright' }),
    ]),
    Q('q4', 'core', 'How does her presentation differ from a situational specific phobia?', ['R1'], [
      O('a', 'Her attacks arise unexpectedly and at rest rather than only when she confronts one specific feared situation or object', 3,
        { r: 'Uncued attacks separate panic from phobia', approach: 'Contrast cued and uncued attacks', why: 'Specific phobia attacks are cued by the feared stimulus', keys: ['attacks at rest', 'no single trigger'], mistake: 'Forcing uncued panic into a phobia frame' }),
      O('b', 'The fact that she has now begun to avoid certain places and situations that she associates with having had an attack', -1,
        { r: 'Avoidance appears in both', approach: 'Avoidance framing', why: 'Both can involve avoidance; the cue pattern differs', keys: ['shared avoidance'], mistake: 'Using avoidance alone to differentiate' }),
      O('c', 'The intense physical fear response that she experiences, complete with a pounding heart and a strong urge to escape', -1,
        { r: 'The fear response is shared', approach: 'Fear-response framing', why: 'Both produce an acute fear response', keys: ['shared arousal'], mistake: 'Reading the fear response as decisive' }),
      O('d', 'Her belief during the episodes that something catastrophic, such as losing control, is about to happen to her right then', 0,
        { r: 'Catastrophic appraisal occurs in both', approach: 'Appraisal framing', why: 'Catastrophic thoughts are not unique to panic disorder', keys: ['fear of losing control'], mistake: 'Using appraisal content to differentiate' }),
    ]),
    Q('q5', 'intake', 'What developing pattern is most important to assess to complete the clinical picture?', ['R1'], [
      O('a', 'Whether agoraphobic avoidance is emerging as she increasingly avoids places where escape or help might be difficult', 3,
        { r: 'Screen for emerging agoraphobia', approach: 'Assess avoidance breadth', why: 'Agoraphobia commonly co-occurs and shapes the plan', keys: ['leaving work early', 'sits near exits'], mistake: 'Missing spreading avoidance' }),
      O('b', 'Whether she has a fixed and persistent preoccupation with the idea that she has a serious undiagnosed medical disease', -1,
        { r: 'Illness preoccupation is a different focus', approach: 'Illness-anxiety framing', why: 'Her fear centers on attacks, not a disease conviction', keys: ['attack-focused fear'], mistake: 'Reframing panic as illness anxiety' }),
      O('c', 'Whether she experiences clear stretches of elevated mood and reduced need for sleep lasting several consecutive days', -1,
        { r: 'Hypomania screen is low yield here', approach: 'Mood-episode framing', why: 'Nothing suggests a bipolar pattern', keys: ['anxiety-focused picture'], mistake: 'Chasing an unsupported rule-out' }),
      O('d', 'Whether her symptoms are generally more intense in the evenings than they tend to be earlier during the daytime hours', 0,
        { r: 'Diurnal pattern is not central', approach: 'Time-of-day framing', why: 'Timing does not change the formulation', keys: ['nonspecific timing'], mistake: 'Over-reading a circadian pattern' }),
    ]),
    Q('q6', 'treatment', 'What is the most appropriate first-line psychotherapy recommendation?', ['R3'], [
      O('a', 'Cognitive behavioral therapy with interoceptive exposure to the feared bodily sensations that drive her panic', 3,
        { r: 'CBT with interoceptive exposure is first-line', approach: 'Apply the guideline', why: 'APA CPG and panic control treatment support exposure-based CBT', keys: ['fear of sensations'], mistake: 'Choosing an unsupported approach' }),
      O('b', 'Long-term supportive counseling that gives her a calm space to talk through how frightening the attacks have been for her', -1,
        { r: 'Unstructured support underperforms CBT', approach: 'Supportive-only therapy', why: 'It lacks the exposure component that treats panic', keys: ['needs exposure'], mistake: 'Defaulting to nondirective support' }),
      O('c', 'Teaching her breathing and relaxation techniques to use the instant she notices any of the early signs of a panic attack', -1,
        { r: 'Breathing as escape becomes a safety behavior', approach: 'Relaxation-as-escape', why: 'Used to avert attacks it can reinforce fear of sensations', keys: ['safety behavior risk'], mistake: 'Turning coping skills into avoidance' }),
      O('d', 'A primarily insight-oriented exploration of her childhood to uncover the deeper origins of her current anxiety symptoms', 0,
        { r: 'Insight work is not first-line for panic', approach: 'Depth exploration', why: 'Evidence favors exposure-based CBT', keys: ['symptom-focused need'], mistake: 'Prioritizing origins over exposure' }),
    ]),
    Q('q7', 'treatment', 'What is the central rationale for interoceptive exposure in her treatment?', ['R2'], [
      O('a', 'Repeatedly and deliberately bringing on the feared sensations so she learns they are not dangerous and her fear extinguishes', 3,
        { r: 'Provoke sensations to extinguish the fear', approach: 'Target the feared sensations', why: 'Interoceptive exposure breaks the sensation-catastrophe link', keys: ['fears racing heart', 'avoids the gym'], mistake: 'Avoiding the sensations she fears' }),
      O('b', 'Helping her become skilled at distracting herself away from the sensations as quickly as possible whenever they appear', -1,
        { r: 'Distraction prevents new learning', approach: 'Distraction coping', why: 'Avoiding the sensation blocks extinction', keys: ['avoidance maintains fear'], mistake: 'Teaching distraction instead of exposure' }),
      O('c', 'Teaching her to monitor her pulse and other bodily signs closely so she can catch the very earliest warning of an attack', -1,
        { r: 'Hypervigilant monitoring fuels panic', approach: 'Body-checking', why: 'Vigilance to sensations heightens fear', keys: ['interoceptive vigilance'], mistake: 'Encouraging body-checking' }),
      O('d', 'Encouraging her to steer clear of any exertion that raises her heart rate until she feels much calmer about the symptoms', -2,
        { r: 'Avoiding exertion entrenches avoidance', approach: 'Activity avoidance', why: 'It strengthens the fear of normal arousal', keys: ['avoids the gym'], mistake: 'Sanctioning avoidance of arousal' }),
    ]),
    Q('q8', 'treatment', 'Renée carries water and sits near exits during outings. How should the plan address these behaviors?', ['R3'], [
      O('a', 'Identify them as safety behaviors and gradually drop them so she can learn the feared catastrophes do not occur', 3,
        { r: 'Fade safety behaviors during exposure', approach: 'Eliminate safety behaviors', why: 'Safety behaviors prevent disconfirming the feared outcome', keys: ['carries water', 'sits near exits'], mistake: 'Leaving safety behaviors in place' }),
      O('b', 'Encourage her to keep using whatever small rituals help her feel calmer so that she is able to keep going out in public', -1,
        { r: 'Preserving rituals maintains the fear', approach: 'Accommodate rituals', why: 'They block the corrective learning of exposure', keys: ['safety behavior'], mistake: 'Reinforcing safety behaviors' }),
      O('c', 'Treat these behaviors as harmless personal habits that have nothing to do with the maintenance of her panic symptoms', -1,
        { r: 'They are not harmless in panic', approach: 'Minimize the behaviors', why: 'They actively maintain the panic cycle', keys: ['maintaining factor'], mistake: 'Overlooking safety behaviors' }),
      O('d', 'Replace them with a different and more elaborate set of preventive routines she can carry out before she leaves the house', -2,
        { r: 'New rituals are still avoidance', approach: 'Swap one ritual for another', why: 'It substitutes one safety behavior for another', keys: ['avoidance persists'], mistake: 'Trading rituals rather than dropping them' }),
    ]),
    Q('q9', 'treatment', 'Renée asks whether medication might help. The most appropriate counselor action is to:', ['R5'], [
      O('a', 'Coordinate a referral to a prescriber for evaluation while continuing exposure-based therapy within her own scope', 3,
        { r: 'Refer and coordinate within scope', approach: 'Coordinate care', why: 'Counselors refer for medication rather than prescribe', keys: ['asks about medication'], mistake: 'Giving prescriptive advice' }),
      O('b', 'Recommend the specific anti-anxiety medication that tends to calm panic the fastest for patients with her symptom profile', -2,
        { r: 'Naming a drug exceeds scope', approach: 'Prescriptive advice', why: 'Medication selection is outside counselor scope', keys: ['no prescriptive authority'], mistake: 'Overstepping professional limits' }),
      O('c', 'Advise her that as-needed sedatives are the best option to keep on hand for whenever she feels an attack beginning to build', -2,
        { r: 'PRN sedatives can become safety behaviors', approach: 'Endorse PRN sedation', why: 'As-needed use can undermine exposure and carries dependence risk', keys: ['safety behavior risk'], mistake: 'Recommending a specific PRN strategy' }),
      O('d', 'Discourage medication entirely and tell her she should be able to manage the panic with the therapy techniques alone', -1,
        { r: 'Discouraging meds overreaches', approach: 'Discourage medication', why: 'The decision belongs with a prescriber', keys: ['client autonomy'], mistake: 'Steering a medical decision' }),
    ]),
    Q('q10', 'counseling', 'What is the most useful psychoeducation to offer Renée early in treatment?', ['R3'], [
      O('a', 'Explain the panic cycle: how catastrophic misreading of normal sensations escalates arousal into a full-blown attack', 3,
        { r: 'Teach the panic cycle', approach: 'Explain the maintaining model', why: 'Understanding the cycle reduces catastrophic appraisal', keys: ['fears the racing heart'], mistake: 'Teaching skills without a rationale' }),
      O('b', 'Reassure her in detail and repeatedly that panic attacks have never actually caused real physical harm to anyone at all', -1,
        { r: 'Repeated reassurance feeds the cycle', approach: 'Reassurance', why: 'It reinforces reassurance-seeking', keys: ['reassurance dependence'], mistake: 'Reinforcing the maintaining behavior' }),
      O('c', 'Give her a thorough overview of the autonomic nervous system so she can fully understand every physiological detail involved', 0,
        { r: 'Excess detail is not the priority', approach: 'Information overload', why: 'A focused model beats exhaustive physiology', keys: ['tailored education'], mistake: 'Overloading instead of clarifying' }),
      O('d', 'Tell her that the most important thing is simply to stay calm and to try her best not to let the attacks frighten her so much', -1,
        { r: '“Just relax” is unhelpful', approach: 'Vague reassurance', why: 'It offers no mechanism or skill', keys: ['needs a model'], mistake: 'Giving platitudes instead of education' }),
    ]),
    Q('q11', 'counseling', 'Renée begins having a panic attack during a session. What is the most therapeutic response?', ['R6'], [
      O('a', 'Calmly coach her to stay with the sensations and notice them passing rather than fleeing or fighting the attack', 3,
        { r: 'Coach staying with the sensations', approach: 'Model nonavoidant coping', why: 'Riding out the attack disconfirms the catastrophe', keys: ['attack in session', 'urge to escape'], mistake: 'Helping her escape the attack' }),
      O('b', 'End the session early and let her step outside immediately so that she can get away from whatever set the attack off', -1,
        { r: 'Escape reinforces avoidance', approach: 'Facilitate escape', why: 'Leaving teaches that escape was necessary', keys: ['avoidance trap'], mistake: 'Reinforcing escape behavior' }),
      O('c', 'Direct her to breathe deeply and immediately use every relaxation technique she knows to make the attack stop right away', -1,
        { r: 'Frantic control becomes a safety behavior', approach: 'Stop-the-attack framing', why: 'Trying to abort it reinforces fear of sensations', keys: ['control-seeking'], mistake: 'Using skills to suppress rather than tolerate' }),
      O('d', 'Reassure her over and over that she is completely safe and that the attack is guaranteed to be over in just a moment', -1,
        { r: 'Repeated reassurance maintains panic', approach: 'Reassurance', why: 'It feeds reassurance-seeking', keys: ['reassurance dependence'], mistake: 'Reinforcing the maintaining behavior' }),
    ]),
    Q('q12', 'ethics', 'Renée asks the counselor to tell her physician to stop her beta blocker because she dislikes it. Best response?', ['R5'], [
      O('a', 'Clarify that medication decisions rest with her prescriber and offer, with consent, to coordinate her concerns with them', 3,
        { r: 'Stay in scope; coordinate with consent', approach: 'Respect scope and coordinate', why: 'ACA C.2. limits practice to one’s scope', keys: ['medical decision', 'wants a change'], mistake: 'Directing another provider’s medical care' }),
      O('b', 'Advise her to go ahead and stop the beta blocker on her own, since it may well be contributing to how she has been feeling', -2,
        { r: 'Directing medication changes exceeds scope', approach: 'Direct a medication change', why: 'It is outside scope and potentially unsafe', keys: ['scope violation'], mistake: 'Advising the client to stop a prescribed medication' }),
      O('c', 'Call her physician yourself and recommend that the beta blocker be discontinued based on what she has told you in session', -2,
        { r: 'Recommending discontinuation oversteps', approach: 'Override the prescriber', why: 'Medication management is the prescriber’s role', keys: ['role boundary'], mistake: 'Inserting yourself into medical management' }),
      O('d', 'Tell her this is entirely a medical matter that has nothing to do with counseling and decline to discuss it any further', -1,
        { r: 'Refusing to coordinate abandons the concern', approach: 'Flat refusal', why: 'Coordinating with consent is appropriate', keys: ['care coordination'], mistake: 'Declining to help her communicate concerns' }),
    ]),
    Q('q13', 'ethics', 'As exposure-based work is planned, what does informed consent most importantly require here?', ['R5'], [
      O('a', 'Explaining the rationale, the temporary discomfort exposure can provoke, and that participation remains voluntary', 3,
        { r: 'Disclose rationale, discomfort, and choice', approach: 'Obtain informed consent', why: 'Consent requires explaining the approach and its risks', keys: ['exposure planned', 'fears sensations'], mistake: 'Starting exposure without informed consent' }),
      O('b', 'Assuring her in advance that the exposure exercises will be completely comfortable and will never provoke any real anxiety', -2,
        { r: 'Misrepresenting exposure is dishonest', approach: 'Downplay the method', why: 'Exposure deliberately provokes manageable anxiety', keys: ['accurate disclosure'], mistake: 'Misstating what the treatment involves' }),
      O('c', 'Having her agree in advance that she will complete every exposure exercise assigned no matter how distressing it becomes', -1,
        { r: 'Consent is voluntary and revocable', approach: 'Mandate completion', why: 'She retains the right to pause or decline', keys: ['voluntary participation'], mistake: 'Treating consent as a binding commitment' }),
      O('d', 'Postponing any explanation of the method until after the first exercise so that her anticipatory anxiety does not build up', -1,
        { r: 'Withholding the method violates consent', approach: 'Delay disclosure', why: 'Consent must precede the intervention', keys: ['informed choice'], mistake: 'Intervening before explaining' }),
    ]),
  ],
};

// ============================================================================
// D107 — Opioid Use Disorder, Severe (F11.20) — Substance — medium
// ============================================================================
const D107 = {
  id: 'ncmhce-D107',
  title: 'From prescribed pain pills to daily opioid use',
  category: 'Substance',
  difficulty: 'medium',
  primaryDiagnosis: { name: 'Opioid Use Disorder, Severe', code: 'F11.20' },
  diagnosis: { name: 'Opioid Use Disorder, Severe', code: 'F11.20' },
  differentialOptions: [
    { id: 'do1', name: 'Opioid Use Disorder, Severe', isCorrect: true },
    { id: 'do2', name: 'Opioid Withdrawal', isCorrect: false },
    { id: 'do3', name: 'Alcohol Use Disorder, Moderate', isCorrect: false },
    { id: 'do4', name: 'Stimulant Use Disorder', isCorrect: false },
  ],
  narrative: {
    intake:
      'Tyrone Jackson, a 38-year-old construction worker, presents after a back injury led to prescribed opioids and then to buying ' +
      'pills and, recently, using heroin. He reports strong cravings, tolerance, failed attempts to stop, and use despite job loss.',
    session1:
      'He identifies at least seven of the eleven criteria over the past year, including cravings, tolerance, withdrawal, and giving up ' +
      'activities he valued. He describes flu-like sickness, aching, and sweating within a day of his last use when he tries to quit.',
    session2:
      'He is exhausted by the cycle and afraid of overdose after a friend died last month; he is unsure whether medication could help. ' +
      'He denies current suicidal intent but feels hopeless at times, and he has used alone, which raises his overdose risk.',
  },
  diagnosticRationale:
    'A problematic pattern of opioid use meeting six or more of the eleven DSM-5-TR criteria over twelve months—craving, tolerance, ' +
    'withdrawal, unsuccessful efforts to cut down, and continued use despite major role failure—indicates severe opioid use disorder. ' +
    'The criteria count places severity in the severe (6+) range and the cessation sickness reflects physiologic withdrawal within the disorder.',
  references: [
    { id: 'R1', source: 'DSM-5-TR', detail: 'OUD criteria and severity: 2-3 mild, 4-5 moderate, 6+ severe over 12 months' },
    { id: 'R2', source: 'SAMHSA TIP 63', detail: 'Medications for opioid use disorder (buprenorphine, methadone, naltrexone) as first-line' },
    { id: 'R3', source: 'ASAM Criteria', detail: 'Multidimensional level-of-care and withdrawal-risk determination' },
    { id: 'R4', source: 'Miller & Rollnick (MI)', detail: 'Roll with resistance, develop discrepancy, and evoke change talk' },
    { id: 'R5', source: 'C-SSRS', detail: 'Structured suicide-risk screening of ideation, intent, and plan' },
    { id: 'R6', source: 'ACA Code of Ethics', detail: 'B.1. heightened confidentiality of substance-use information and scope of practice' },
  ],
  questions: [
    Q('q1', 'intake', 'What is most important to establish to confirm a severe opioid use disorder?', ['R1'], [
      O('a', 'The number of DSM-5-TR criteria he meets over twelve months, since six or more place severity in the severe range', 3,
        { r: 'Criterion count sets severity', approach: 'Apply the severity threshold', why: 'DSM-5-TR grades OUD by criterion count', keys: ['craving', 'tolerance and withdrawal'], mistake: 'Estimating severity by drug type alone' }),
      O('b', 'The exact quantity of opioids he uses each day so that you can calculate precisely how physically dependent he has become', -1,
        { r: 'Quantity alone does not set the diagnosis', approach: 'Dose framing', why: 'Severity rests on criteria, not amount used', keys: ['criteria-based'], mistake: 'Equating dose with severity' }),
      O('c', 'Whether he first became addicted to opioids through a legitimate prescription rather than through buying them illegally', 0,
        { r: 'Route of onset does not set the diagnosis', approach: 'Origin framing', why: 'How use began is not a diagnostic criterion', keys: ['prescription origin'], mistake: 'Using the origin story to diagnose' }),
      O('d', 'Whether members of his immediate family have also struggled with opioids or with another substance-related condition', -1,
        { r: 'Family history is risk, not diagnosis', approach: 'Heredity framing', why: 'History informs risk, not current criteria', keys: ['no family data'], mistake: 'Using family history to diagnose' }),
    ]),
    Q('q2', 'core', 'How should the counselor understand the sickness he feels within a day of stopping?', ['R1'], [
      O('a', 'As opioid withdrawal—a physiologic cessation syndrome that is one criterion within his use disorder, not a separate problem', 3,
        { r: 'Withdrawal is a criterion within OUD', approach: 'Place withdrawal in the disorder', why: 'Withdrawal is a cessation syndrome counting toward OUD', keys: ['flu-like sickness', 'aching and sweating'], mistake: 'Treating withdrawal as a separate diagnosis' }),
      O('b', 'As evidence that he has simply been using opioids for too many years in a row without ever taking a meaningful break', -1,
        { r: 'Duration is not what defines withdrawal', approach: 'Duration framing', why: 'Withdrawal is defined by the cessation syndrome', keys: ['cessation symptoms'], mistake: 'Equating withdrawal with chronicity' }),
      O('c', 'As proof that he has developed a separate primary anxiety disorder that happens to flare whenever he stops using opioids', -1,
        { r: 'It is withdrawal, not a primary anxiety disorder', approach: 'Anxiety framing', why: 'The timing ties it to cessation, not anxiety', keys: ['onset on stopping'], mistake: 'Mislabeling withdrawal as anxiety' }),
      O('d', 'As an indication that he must immediately be admitted for inpatient detoxification before anything else can be considered', 0,
        { r: 'Level of care follows assessment', approach: 'Reflexive admission', why: 'Placement should follow a multidimensional assessment', keys: ['needs assessment first'], mistake: 'Jumping to a level of care prematurely' }),
    ]),
    Q('q3', 'intake', 'Given that he has used alone and a friend recently died of overdose, what is the priority assessment and response?', ['R2'], [
      O('a', 'Assess overdose risk and withdrawal safety, and provide overdose-prevention education including naloxone access', 3,
        { r: 'Address overdose risk and harm reduction', approach: 'Prioritize safety and harm reduction', why: 'Using alone and recent loss mark elevated overdose risk', keys: ['uses alone', 'friend died of overdose'], mistake: 'Overlooking overdose risk in the plan' }),
      O('b', 'Focus the session on identifying the underlying emotional pain that you believe is the true root cause of all of his using', -1,
        { r: 'Root-cause work is not the safety priority', approach: 'Insight-first framing', why: 'Overdose risk must be addressed before depth work', keys: ['acute risk'], mistake: 'Prioritizing insight over immediate safety' }),
      O('c', 'Advise him to taper his opioid use down on his own at home over the next week so that he can avoid the worst of the sickness', -2,
        { r: 'Unsupervised tapering can be dangerous', approach: 'Self-managed taper', why: 'Withdrawal and relapse-overdose risk require medical support', keys: ['withdrawal risk'], mistake: 'Recommending an unsupervised taper' }),
      O('d', 'Reassure him that as long as he is motivated to quit, the risk of an accidental overdose is really quite low for him now', -2,
        { r: 'Minimizing overdose risk is unsafe', approach: 'False reassurance', why: 'Motivation does not lower physiologic overdose risk', keys: ['high-risk pattern'], mistake: 'Downplaying a lethal risk' }),
    ]),
    Q('q4', 'core', 'What distinguishes his severe opioid use disorder from a moderate one?', ['R1'], [
      O('a', 'That he meets six or more of the eleven criteria, whereas four to five would indicate moderate severity instead', 3,
        { r: 'Six or more criteria define severe', approach: 'Apply the severity bands', why: 'DSM-5-TR sets 2-3 mild, 4-5 moderate, 6+ severe', keys: ['at least seven criteria'], mistake: 'Under-rating a severe presentation' }),
      O('b', 'That he has now progressed from using prescribed pills to using heroin that he buys from someone on the street', -1,
        { r: 'Switching substances is not the severity test', approach: 'Substance-switch framing', why: 'Severity rests on the criterion count', keys: ['progression of use'], mistake: 'Grading severity by what he uses' }),
      O('c', 'That his opioid use has already cost him his construction job and created serious financial strain for his household', -1,
        { r: 'One consequence is not the severity test', approach: 'Consequence-count framing', why: 'Severity is the full criterion count, not one harm', keys: ['job loss'], mistake: 'Grading severity by a single consequence' }),
      O('d', 'That he experiences strong cravings to use opioids during much of the day when he is trying his hardest to abstain', 0,
        { r: 'Craving occurs across severities', approach: 'Single-symptom framing', why: 'Craving alone does not set severity', keys: ['nonspecific symptom'], mistake: 'Reading one symptom as the severity marker' }),
    ]),
    Q('q5', 'intake', 'What co-occurring concern is most important to screen for to inform the plan?', ['R4'], [
      O('a', 'Suicide risk and co-occurring depression, screened with a structured tool given his hopelessness and recent loss', 3,
        { r: 'Screen suicide risk and depression', approach: 'Assess co-occurring risk', why: 'Opioid use disorder elevates suicide risk', keys: ['feels hopeless', 'friend died'], mistake: 'Treating the OUD without screening risk' }),
      O('b', 'A previously undetected primary psychotic disorder that could better explain the difficulties he has had holding a job', -1,
        { r: 'Psychosis is not indicated', approach: 'Psychosis framing', why: 'Nothing suggests a psychotic process', keys: ['intact reality testing'], mistake: 'Pursuing an unsupported rule-out' }),
      O('c', 'A long-standing eating disorder that might be contributing to both his low energy and his disrupted daily routine', -1,
        { r: 'Eating pathology is not indicated', approach: 'Eating-disorder framing', why: 'No eating concerns are reported', keys: ['no eating data'], mistake: 'Inventing an unsupported comorbidity' }),
      O('d', 'An emerging neurocognitive decline that could account for why he keeps forgetting commitments and appointments lately', 0,
        { r: 'Cognitive decline is premature here', approach: 'Neurocognitive framing', why: 'Substance effects are a simpler explanation', keys: ['substance-linked'], mistake: 'Over-attributing to cognitive decline' }),
    ]),
    Q('q6', 'treatment', 'What is the most appropriate first-line treatment recommendation for severe opioid use disorder?', ['R2'], [
      O('a', 'Coordinate a referral for medication for opioid use disorder, such as buprenorphine or methadone, alongside counseling', 3,
        { r: 'MOUD is first-line; refer and coordinate', approach: 'Apply the guideline within scope', why: 'TIP 63 establishes MOUD as first-line for OUD', keys: ['severe OUD', 'withdrawal present'], mistake: 'Offering counseling alone for severe OUD' }),
      O('b', 'Recommend an abstinence-only, medication-free program because relying on any medication merely substitutes one drug for another', -2,
        { r: 'Withholding MOUD contradicts the evidence', approach: 'Abstinence-only framing', why: 'MOUD reduces overdose death and is first-line', keys: ['MAT stigma'], mistake: 'Repeating the substitution myth' }),
      O('c', 'Suggest he first prove his commitment by staying completely abstinent on his own for thirty days before any referral is made', -2,
        { r: 'Gatekeeping delays life-saving care', approach: 'Readiness-gating', why: 'Requiring abstinence before MOUD increases overdose risk', keys: ['high overdose risk'], mistake: 'Conditioning treatment on prior abstinence' }),
      O('d', 'Recommend a course of weekly supportive counseling and self-help meetings as the complete treatment for his opioid use', -1,
        { r: 'Psychosocial support alone is insufficient', approach: 'Counseling-only plan', why: 'Severe OUD warrants MOUD plus support', keys: ['under-treatment'], mistake: 'Omitting medication from the plan' }),
    ]),
    Q('q7', 'treatment', 'How should the counselor determine the appropriate level of care?', ['R3'], [
      O('a', 'Use a multidimensional assessment of withdrawal risk, environment, and supports to match him to a safe level of care', 3,
        { r: 'Use multidimensional placement', approach: 'Apply level-of-care criteria', why: 'ASAM matches care level across multiple dimensions', keys: ['withdrawal present', 'uses alone'], mistake: 'Defaulting to one fixed program' }),
      O('b', 'Automatically place him in the longest available residential program so that he is kept away from drugs for as long as possible', -1,
        { r: 'Maximal care ignores placement criteria', approach: 'Top-intensity default', why: 'Level of care should match assessed need', keys: ['individualized placement'], mistake: 'Over-placing without assessment' }),
      O('c', 'Recommend only a weekly outpatient counseling slot on the assumption that talking through it regularly will be sufficient', -1,
        { r: 'Under-placement ignores his risk', approach: 'Minimal-care default', why: 'Severe OUD with withdrawal often needs more', keys: ['severe OUD'], mistake: 'Under-treating a high-risk presentation' }),
      O('d', 'Let him choose whichever program has the most convenient schedule for him regardless of his clinical needs or safety risks', 0,
        { r: 'Preference cannot override clinical need', approach: 'Convenience framing', why: 'Placement must reflect assessed need', keys: ['shared decision input'], mistake: 'Letting convenience drive placement' }),
    ]),
    Q('q8', 'treatment', 'What harm-reduction element is most important to build into the plan now?', ['R2'], [
      O('a', 'Naloxone access and education plus never-use-alone guidance to reduce his risk of a fatal overdose during treatment', 3,
        { r: 'Naloxone and overdose prevention', approach: 'Reduce overdose mortality', why: 'Naloxone access lowers overdose death risk', keys: ['uses alone', 'recent overdose death'], mistake: 'Omitting overdose prevention' }),
      O('b', 'A firm rule that he will be discharged from treatment immediately if he uses opioids again at any point during the program', -2,
        { r: 'Punitive discharge raises overdose risk', approach: 'Zero-tolerance discharge', why: 'Discharging on use removes protection and increases risk', keys: ['relapse expected'], mistake: 'Punishing relapse with discharge' }),
      O('c', 'A detailed plan for which over-the-counter remedies he can take at home to manage the worst of his withdrawal symptoms', -1,
        { r: 'OTC self-management is not the priority', approach: 'OTC framing', why: 'Overdose prevention outranks symptom self-care', keys: ['safety first'], mistake: 'Substituting comfort care for overdose prevention' }),
      O('d', 'A requirement that he hand over any remaining pills to a family member who can then dole them out to him a little at a time', -1,
        { r: 'Family-controlled dosing is unsafe and improper', approach: 'Family rationing', why: 'It is not an evidence-based harm-reduction step', keys: ['unsafe arrangement'], mistake: 'Improvising an unsound control plan' }),
    ]),
    Q('q9', 'counseling', 'Tyrone says part of him wants to quit and part of him is terrified of life without opioids. The MI-consistent response is to:', ['R4'], [
      O('a', 'Reflect both sides of his ambivalence and gently explore the change talk he has already begun to voice', 3,
        { r: 'Reflect ambivalence, evoke change talk', approach: 'Roll with ambivalence', why: 'MI develops discrepancy through reflection', keys: ['wants to quit yet afraid'], mistake: 'Arguing for one side' }),
      O('b', 'Point out firmly that his fear is just an excuse and that he clearly needs to commit to stopping opioids completely today', -2,
        { r: 'Arguing triggers resistance', approach: 'Righting reflex', why: 'It pushes against his autonomy', keys: ['discord risk'], mistake: 'Falling into the righting reflex' }),
      O('c', 'Agree with the fearful side and suggest that perhaps this is simply not the right moment for him to try to make a change', -1,
        { r: 'Siding with fear undercuts change talk', approach: 'Concede the fear', why: 'It abandons the emerging motivation', keys: ['ambivalence'], mistake: 'Reinforcing the status-quo side' }),
      O('d', 'Lay out a detailed day-by-day quit schedule with firm rules and deadlines for him to begin following starting tomorrow morning', -1,
        { r: 'Planning precedes resolved ambivalence', approach: 'Premature planning', why: 'Evoking should precede planning in MI', keys: ['not yet committed'], mistake: 'Jumping to planning too soon' }),
    ]),
    Q('q10', 'counseling', 'Tyrone returns to use after ten days abstinent and is ashamed. The most therapeutic response is to:', ['R4'], [
      O('a', 'Frame the return to use as common in recovery, review overdose risk after abstinence, and revisit the plan without shaming him', 3,
        { r: 'Treat the lapse as learning and address risk', approach: 'Normalize and protect', why: 'Tolerance drops in abstinence, raising overdose risk', keys: ['shame after use', 'reduced tolerance'], mistake: 'Treating a lapse as total failure' }),
      O('b', 'Warn him sternly that another slip like this one will prove that he is simply not serious about getting clean this time', -2,
        { r: 'Shaming deepens the spiral', approach: 'Threat framing', why: 'It feeds the abstinence-violation effect', keys: ['shame spiral'], mistake: 'Amplifying shame after a lapse' }),
      O('c', 'Reassure him that the slip really does not matter at all and encourage him to simply put it behind him and move forward', -1,
        { r: 'Dismissing the lapse skips safety', approach: 'Minimize the lapse', why: 'Reduced tolerance makes this a high-risk moment', keys: ['overdose risk'], mistake: 'Glossing over a dangerous lapse' }),
      O('d', 'Tell him that he clearly needs to be discharged to a higher level of care since the current plan has obviously failed him', -1,
        { r: 'One lapse does not mandate escalation', approach: 'Reflexive escalation', why: 'A single return to use is not treatment failure', keys: ['expected setback'], mistake: 'Over-escalating after one slip' }),
    ]),
    Q('q11', 'ethics', 'Tyrone’s former employer calls asking whether he is being treated for a drug problem. The best response is to:', ['R6'], [
      O('a', 'Decline to confirm or deny without a valid release, explaining the heightened confidentiality of substance-use information', 3,
        { r: 'Protect SUD records without a release', approach: 'Uphold heightened confidentiality', why: 'Substance-use information carries enhanced protection', keys: ['employer inquiry', 'no release'], mistake: 'Disclosing SUD treatment without consent' }),
      O('b', 'Confirm that he is in treatment, since the employer already let him go and is now only trying to look out for his wellbeing', -2,
        { r: 'Confirming breaches confidentiality', approach: 'Assume good intent permits it', why: 'Prior knowledge does not authorize disclosure', keys: ['no valid release'], mistake: 'Disclosing without authorization' }),
      O('c', 'Share only that he is attending sessions, since merely confirming attendance seems like a fairly harmless detail to give out', -2,
        { r: 'Confirming attendance is still disclosure', approach: 'Soft disclosure', why: 'Even attendance is protected information', keys: ['unauthorized disclosure'], mistake: 'Treating attendance as not protected' }),
      O('d', 'Refuse to speak with the caller at all and hang up without explaining anything about confidentiality or the proper process', -1,
        { r: 'Abrupt refusal misses a teachable moment', approach: 'Flat refusal', why: 'The confidentiality rationale can be explained appropriately', keys: ['professional courtesy'], mistake: 'Being needlessly obstructive' }),
    ]),
    Q('q12', 'ethics', 'Tyrone asks the counselor what dose of buprenorphine he should request from the prescriber. Best response?', ['R6'], [
      O('a', 'Explain that dosing is the prescriber’s decision and offer, with consent, to coordinate his questions and progress with them', 3,
        { r: 'Defer dosing; coordinate with consent', approach: 'Respect scope and coordinate', why: 'Medication dosing is outside counselor scope', keys: ['asks about dose', 'scope limit'], mistake: 'Advising on a specific medication dose' }),
      O('b', 'Suggest a starting dose that usually works well for someone using the amount of opioids that he has described to you today', -2,
        { r: 'Naming a dose exceeds scope', approach: 'Prescriptive advice', why: 'Counselors do not recommend doses', keys: ['no prescriptive authority'], mistake: 'Overstepping into medication management' }),
      O('c', 'Tell him to ask for the highest dose available so that the medication will be sure to fully block his cravings right away', -2,
        { r: 'Directing a dose is unsafe and out of scope', approach: 'Maximize-dose advice', why: 'Dose selection requires medical evaluation', keys: ['safety risk'], mistake: 'Giving specific pharmacologic direction' }),
      O('d', 'Say that medication dosing is purely a medical matter and decline to help him prepare for the conversation in any way at all', -1,
        { r: 'Refusing to coordinate abandons the need', approach: 'Flat refusal', why: 'Helping him frame questions is appropriate', keys: ['care coordination'], mistake: 'Declining to support communication with the prescriber' }),
    ]),
    Q('q13', 'ethics', 'Tyrone wants the counselor to coordinate with his prescriber and his probation officer. What must come first?', ['R6'], [
      O('a', 'Obtain his specific, informed written consent for each party before sharing any of his protected information', 3,
        { r: 'Get a valid release for each party', approach: 'Secure informed consent first', why: 'Disclosure of SUD information requires a valid release', keys: ['multiple parties', 'protected information'], mistake: 'Coordinating before obtaining consent' }),
      O('b', 'Begin coordinating with both parties right away, since he has clearly already told you that he wants you to work with them', -2,
        { r: 'Verbal interest is not a valid release', approach: 'Assume consent', why: 'Each disclosure needs a specific written release', keys: ['no signed release'], mistake: 'Disclosing before consent is documented' }),
      O('c', 'Share information freely with the probation officer because the criminal-justice context overrides his usual confidentiality', -2,
        { r: 'Justice involvement does not erase protections', approach: 'Assume justice exception', why: 'SUD information retains protection absent a valid release', keys: ['heightened protection'], mistake: 'Assuming probation negates confidentiality' }),
      O('d', 'Coordinate only with the prescriber for now and decide about the probation officer later without discussing it further with him', -1,
        { r: 'Each disclosure should be his informed choice', approach: 'Selective unilateral disclosure', why: 'The client decides each release, not the counselor alone', keys: ['client autonomy'], mistake: 'Making release decisions for the client' }),
    ]),
  ],
};

// ============================================================================
// D108 — Prolonged Grief Disorder (F43.81) — Trauma — medium
// ============================================================================
const D108 = {
  id: 'ncmhce-D108',
  title: 'Unrelenting yearning more than a year after a loss',
  category: 'Trauma',
  difficulty: 'medium',
  primaryDiagnosis: { name: 'Prolonged Grief Disorder', code: 'F43.81' },
  diagnosis: { name: 'Prolonged Grief Disorder', code: 'F43.81' },
  differentialOptions: [
    { id: 'do1', name: 'Prolonged Grief Disorder', isCorrect: true },
    { id: 'do2', name: 'Major Depressive Disorder, Moderate', isCorrect: false },
    { id: 'do3', name: 'Posttraumatic Stress Disorder', isCorrect: false },
    { id: 'do4', name: 'Adjustment Disorder, with Depressed Mood', isCorrect: false },
  ],
  narrative: {
    intake:
      'Mei Lin, a 58-year-old librarian, presents fourteen months after her husband’s death with intense daily yearning for him, ' +
      'preoccupation with memories, and a sense that part of herself has died; she avoids their shared bedroom and his belongings.',
    session1:
      'She describes disbelief that he is gone, emotional pain that has not eased, difficulty re-engaging with friends, and a feeling ' +
      'that life is meaningless without him. She has kept his voicemail to listen to and cannot bring herself to give away his clothes.',
    session2:
      'She reports guilt over a missed early symptom and occasional thoughts that she would rather be with him, without plan or intent. ' +
      'Her grief remains as raw as the first month and now keeps her from returning fully to work and her community.',
  },
  diagnosticRationale:
    'More than twelve months after the death of a loved one, persistent intense yearning and preoccupation accompanied by identity ' +
    'disruption, disbelief, avoidance of reminders, intense emotional pain, and a sense that life is meaningless—beyond cultural norms ' +
    'and causing impairment—meet DSM-5-TR criteria for prolonged grief disorder rather than uncomplicated grief, depression, or PTSD.',
  references: [
    { id: 'R1', source: 'DSM-5-TR', detail: 'Prolonged grief disorder: death 12+ months ago, persistent yearning/preoccupation plus 3+ symptoms with impairment' },
    { id: 'R2', source: 'C-SSRS', detail: 'Structured suicide-risk screening given elevated risk in prolonged grief' },
    { id: 'R3', source: 'Corey (Theory & Practice)', detail: 'Selecting a grief-focused therapeutic approach and processing avoided reminders' },
    { id: 'R4', source: 'Hays (Assessment)', detail: 'Culturally responsive assessment of mourning practices and norms' },
    { id: 'R5', source: 'ACA Code of Ethics', detail: 'A.1. and C.2.: client welfare, cultural competence, and scope of practice' },
  ],
  questions: [
    Q('q1', 'intake', 'What is most important to confirm to support a prolonged grief disorder diagnosis?', ['R1'], [
      O('a', 'That the death occurred at least twelve months ago and that intense yearning and preoccupation persist nearly every day', 3,
        { r: 'Duration plus persistent yearning anchor it', approach: 'Confirm the core criterion', why: 'DSM-5-TR requires 12+ months with persistent yearning or preoccupation', keys: ['fourteen months', 'daily yearning'], mistake: 'Diagnosing PGD before the time threshold' }),
      O('b', 'That she can describe in detail the specific circumstances and the exact sequence of events surrounding her husband’s death', -1,
        { r: 'Event detail is not the criterion', approach: 'Event-recounting framing', why: 'The diagnosis rests on persistent grief, not event detail', keys: ['preoccupation present'], mistake: 'Confusing the death narrative with the criteria' }),
      O('c', 'That her low mood and loss of interest have been present nearly every day for at least the past two consecutive weeks', -1,
        { r: 'That threshold describes MDD, not PGD', approach: 'Depression framing', why: 'PGD centers on yearning, not a two-week mood episode', keys: ['yearning-focused'], mistake: 'Applying MDD criteria to grief' }),
      O('d', 'That she experiences intrusive memories and a heightened startle response whenever she is reminded of his final days', 0,
        { r: 'That pattern points toward PTSD', approach: 'Trauma framing', why: 'Re-experiencing and arousal are PTSD features', keys: ['grief, not threat'], mistake: 'Reading grief as a trauma disorder' }),
    ]),
    Q('q2', 'core', 'Which feature best distinguishes her presentation from major depressive disorder?', ['R1'], [
      O('a', 'Her distress centers on yearning and preoccupation with her husband rather than pervasive low mood across all areas of life', 3,
        { r: 'Yearning focus separates PGD from MDD', approach: 'Contrast the focus of distress', why: 'PGD centers on the deceased; MDD is pervasive low mood', keys: ['yearning for him', 'preoccupation'], mistake: 'Collapsing grief into depression' }),
      O('b', 'The fact that she has felt persistently sad and has cried frequently during the many months since her husband passed away', -1,
        { r: 'Sadness occurs in both', approach: 'Sadness framing', why: 'Sadness alone does not separate the two', keys: ['shared affect'], mistake: 'Using sadness to differentiate' }),
      O('c', 'The presence of disrupted sleep and reduced appetite that she has been experiencing across most days for a long while now', -1,
        { r: 'Neurovegetative signs occur in both', approach: 'Somatic framing', why: 'These features are nonspecific between PGD and MDD', keys: ['shared symptoms'], mistake: 'Reading somatic signs as decisive' }),
      O('d', 'The way her distress tends to intensify noticeably around anniversaries, holidays, and other reminders of her late husband', 0,
        { r: 'Reminder-linked surges are nonspecific', approach: 'Cue framing', why: 'Both conditions can worsen around reminders', keys: ['anniversary reactions'], mistake: 'Using reminder reactivity to differentiate' }),
    ]),
    Q('q3', 'core', 'How does prolonged grief disorder differ from an expected, uncomplicated grief reaction?', ['R1'], [
      O('a', 'Its symptoms are persistent, pervasive, and impairing well beyond the timeframe and intensity expected within her cultural context', 3,
        { r: 'Persistence and impairment beyond norms', approach: 'Compare against cultural norms', why: 'PGD exceeds expected grief in duration and impairment', keys: ['raw as the first month', 'cannot return to work'], mistake: 'Pathologizing normal grief' }),
      O('b', 'The fact that she still feels sad and misses her husband deeply more than a year after he died and left her on her own', -1,
        { r: 'Ongoing missing is normal grief', approach: 'Normal-grief framing', why: 'Missing a spouse is expected, not by itself disordered', keys: ['expected longing'], mistake: 'Treating normal longing as the disorder' }),
      O('c', 'That she has chosen to keep some of her late husband’s belongings and personal mementos rather than giving them all away', -1,
        { r: 'Keeping mementos is normal', approach: 'Memento framing', why: 'Holding keepsakes is a common, healthy practice', keys: ['normal mourning'], mistake: 'Reading ordinary keepsakes as pathology' }),
      O('d', 'That her grief tends to come in waves, with some days feeling notably more difficult for her to manage than other days do', 0,
        { r: 'Wave-like grief is normal', approach: 'Course framing', why: 'Fluctuating grief is expected, not diagnostic', keys: ['normal variability'], mistake: 'Misreading normal waves as disorder' }),
    ]),
    Q('q4', 'core', 'Given her thought that she would rather be with her husband, the most appropriate step is to:', ['R2'], [
      O('a', 'Conduct a structured suicide-risk assessment to clarify ideation, intent, and plan, recognizing grief elevates risk', 3,
        { r: 'Assess elevated risk with structure', approach: 'Screen risk directly', why: 'Prolonged grief raises suicide risk; structured screening is indicated', keys: ['wishes to be with him', 'no plan reported'], mistake: 'Overlooking risk within grief' }),
      O('b', 'Treat the thought as an entirely understandable and ultimately harmless expression of how much she misses her late husband', -2,
        { r: 'Normalizing away ideation is unsafe', approach: 'Minimize as longing', why: 'It forecloses needed risk assessment', keys: ['unassessed ideation'], mistake: 'Dismissing ideation as longing' }),
      O('c', 'Move ahead with grief-processing work first, assuming that easing the grief itself will naturally take care of the thoughts', -1,
        { r: 'Risk must be assessed before this', approach: 'Treatment-first framing', why: 'Safety assessment precedes processing work', keys: ['active disclosure'], mistake: 'Sequencing treatment ahead of safety' }),
      O('d', 'Ask her to sign a brief written promise that she will stay safe and call the office if the thoughts get worse this week', -2,
        { r: 'No-suicide contracts are not evidence-based', approach: 'No-harm contract', why: 'Contracts do not reduce risk or assess it', keys: ['needs safety planning'], mistake: 'Substituting a contract for assessment' }),
    ]),
    Q('q5', 'intake', 'How does her presentation differ from posttraumatic stress disorder?', ['R1'], [
      O('a', 'Her core experience is yearning and preoccupation with the deceased rather than re-experiencing a threatening traumatic event', 3,
        { r: 'Yearning versus threat re-experiencing', approach: 'Contrast grief with trauma', why: 'PTSD centers on a threat memory; PGD centers on the loss', keys: ['yearning for him', 'no threat re-experiencing'], mistake: 'Forcing grief into a trauma frame' }),
      O('b', 'The fact that she goes out of her way to avoid certain reminders, such as their shared bedroom and his clothing and effects', -1,
        { r: 'Avoidance appears in both', approach: 'Avoidance framing', why: 'Both involve avoidance; the content differs', keys: ['shared avoidance'], mistake: 'Using avoidance alone to differentiate' }),
      O('c', 'The intense emotional pain and distress that she feels welling up whenever something unexpectedly brings her husband to mind', -1,
        { r: 'Distress on reminders occurs in both', approach: 'Distress framing', why: 'Emotional pain on cues is nonspecific', keys: ['shared reactivity'], mistake: 'Reading distress as decisive' }),
      O('d', 'The trouble she has had concentrating and staying engaged at her job during the long months since her husband’s death', 0,
        { r: 'Concentration problems occur in both', approach: 'Cognitive framing', why: 'Impaired focus does not separate the two', keys: ['nonspecific symptom'], mistake: 'Using concentration to differentiate' }),
    ]),
    Q('q6', 'treatment', 'What is the most appropriate first-line treatment approach?', ['R3'], [
      O('a', 'A grief-focused psychotherapy that helps her process the loss and gradually approach the reminders she has been avoiding', 3,
        { r: 'Grief-focused processing is indicated', approach: 'Match approach to the disorder', why: 'Targeted grief work addresses avoidance and integration', keys: ['avoids his belongings', 'unintegrated loss'], mistake: 'Offering generic support without grief focus' }),
      O('b', 'Open-ended supportive counseling that mainly offers her a warm space to reminisce about her husband whenever she wishes to', -1,
        { r: 'Unstructured support underperforms grief work', approach: 'Supportive-only therapy', why: 'It lacks the processing and approach components', keys: ['needs structured work'], mistake: 'Defaulting to nondirective support' }),
      O('c', 'Encouraging her to keep avoiding the most painful reminders for now so that she does not have to feel the distress they bring', -2,
        { r: 'Sanctioning avoidance maintains PGD', approach: 'Accommodate avoidance', why: 'Avoidance blocks integration of the loss', keys: ['avoidance maintains grief'], mistake: 'Reinforcing avoidance as coping' }),
      O('d', 'A primarily insight-oriented exploration of her early attachments as the main route to relieving her current grief symptoms', 0,
        { r: 'Insight-only is not first-line here', approach: 'Depth-only framing', why: 'Grief-focused processing is the indicated approach', keys: ['loss-focused need'], mistake: 'Prioritizing origins over grief work' }),
    ]),
    Q('q7', 'treatment', 'Her avoidance of his belongings and their bedroom should be addressed by:', ['R3'], [
      O('a', 'Gradually and collaboratively approaching the avoided reminders so the associated pain can be tolerated and processed', 3,
        { r: 'Graded approach to avoided reminders', approach: 'Reduce avoidance gradually', why: 'Approaching reminders supports integration of the loss', keys: ['avoids the bedroom', 'cannot sort his clothes'], mistake: 'Leaving the avoidance untouched' }),
      O('b', 'Insisting that she clear out and give away all of her late husband’s belongings right away in order to help her finally move on', -2,
        { r: 'Forcing disposal can deepen distress', approach: 'Force the purge', why: 'Abrupt, coerced disposal is not graded processing', keys: ['no collaboration'], mistake: 'Pushing premature, forced action' }),
      O('c', 'Reassuring her that it is perfectly fine to keep avoiding the bedroom and his things for as long as that feels easier for her', -1,
        { r: 'Endorsing avoidance maintains the grief', approach: 'Accommodate avoidance', why: 'It blocks the corrective experience of approaching', keys: ['avoidance trap'], mistake: 'Reinforcing the maintaining behavior' }),
      O('d', 'Waiting until she no longer feels any pain about the reminders before she begins to approach the bedroom or sort his clothes', -1,
        { r: 'Waiting for no pain reverses the logic', approach: 'Pain-free-first framing', why: 'Approach precedes, and produces, reduced distress', keys: ['avoidance persists'], mistake: 'Letting distress gate the work' }),
    ]),
    Q('q8', 'treatment', 'Mei Lin shows possible co-occurring depression. The most appropriate within-scope action is to:', ['R5'], [
      O('a', 'Screen for a co-occurring depressive disorder and coordinate a prescriber referral if criteria are met, with her consent', 3,
        { r: 'Assess comorbidity and refer if indicated', approach: 'Coordinate care within scope', why: 'Comorbid MDD may warrant a medication evaluation', keys: ['life feels meaningless', 'sleep and appetite changes'], mistake: 'Ignoring a treatable comorbidity' }),
      O('b', 'Start her on an antidepressant regimen yourself and adjust the dose over the coming weeks based on how she responds to it', -2,
        { r: 'Prescribing is outside counselor scope', approach: 'Prescribe medication', why: 'Counselors do not prescribe or titrate', keys: ['no prescriptive authority'], mistake: 'Acting outside scope of practice' }),
      O('c', 'Assume the low mood is simply part of normal grieving and therefore does not require any further assessment at this point', -1,
        { r: 'Dismissing possible MDD misses it', approach: 'Normalize away comorbidity', why: 'Comorbid depression still warrants screening', keys: ['possible MDD'], mistake: 'Attributing everything to grief' }),
      O('d', 'Tell her that grief and depression are essentially the same thing and that there is no real need to distinguish between them', -1,
        { r: 'Conflating the two is inaccurate', approach: 'Over-generalize', why: 'PGD and MDD are distinct and may co-occur', keys: ['distinct conditions'], mistake: 'Erasing a clinically meaningful distinction' }),
    ]),
    Q('q9', 'counseling', 'Mei Lin says she should have caught her husband’s illness sooner. The most therapeutic response is to:', ['R3'], [
      O('a', 'Validate her pain and gently explore the guilt, examining what she could realistically have known at the time', 3,
        { r: 'Validate, then examine the guilt', approach: 'Process grief-related guilt', why: 'Exploring realistic appraisal eases unwarranted self-blame', keys: ['guilt over a missed symptom'], mistake: 'Leaving the guilt cognition unexamined' }),
      O('b', 'Agree that she probably could have done more at the time so that she is able to learn something useful from the experience', -2,
        { r: 'Endorsing the self-blame deepens guilt', approach: 'Validate the distortion', why: 'It intensifies grief-related guilt', keys: ['reinforced guilt'], mistake: 'Colluding with the self-blame' }),
      O('c', 'Tell her quickly that none of it was her fault at all and that she really needs to stop blaming herself and move forward', -1,
        { r: 'Premature reassurance can invalidate', approach: 'Dismissive reassurance', why: 'It skips the validation and exploration she needs', keys: ['guilt dismissed'], mistake: 'Reassuring without processing' }),
      O('d', 'Steer the conversation away from the guilt so that the session does not become too painful or overwhelming for her today', -1,
        { r: 'Avoiding the guilt leaves it intact', approach: 'Topic avoidance', why: 'Guilt is a central grief target to address', keys: ['avoided cognition'], mistake: 'Sidestepping emotionally central material' }),
    ]),
    Q('q10', 'counseling', 'Mei Lin worries that processing the loss means she is being asked to “forget” her husband. Best response?', ['R3'], [
      O('a', 'Clarify that the goal is to carry a continuing bond with him while re-engaging with life, not to forget or let go of him', 3,
        { r: 'Reframe the goal as a continuing bond', approach: 'Reframe the aim of grief work', why: 'Integration preserves the bond while restoring living', keys: ['fears forgetting him', 'kept his voicemail'], mistake: 'Implying she must sever the bond' }),
      O('b', 'Explain that the central purpose of the work really is to help her gradually let go of her husband and detach from his memory', -2,
        { r: 'Severing the bond is not the goal', approach: 'Detachment framing', why: 'Modern grief work supports a continuing bond', keys: ['continuing bond'], mistake: 'Framing grief work as forgetting' }),
      O('c', 'Reassure her that she will be able to keep every single memory exactly as vivid and intense as it is for her right now forever', -1,
        { r: 'Overpromising about memory is unrealistic', approach: 'False guarantee', why: 'Memories naturally change; the bond can endure', keys: ['unrealistic promise'], mistake: 'Making promises you cannot keep' }),
      O('d', 'Avoid the concern and redirect her toward setting concrete behavioral goals for re-engaging with her work and her community', -1,
        { r: 'Bypassing the fear misses a key target', approach: 'Redirect to tasks', why: 'Her fear about forgetting is central to engagement', keys: ['unaddressed concern'], mistake: 'Avoiding emotionally salient material' }),
    ]),
    Q('q11', 'ethics', 'Mei Lin’s mourning includes specific cultural and religious practices the counselor is unfamiliar with. Best response?', ['R4'], [
      O('a', 'Approach her practices with cultural humility, learn their meaning to her, and incorporate them respectfully into the work', 3,
        { r: 'Practice cultural humility', approach: 'Center her cultural context', why: 'ACA and Hays call for culturally responsive assessment', keys: ['specific mourning practices'], mistake: 'Imposing a single timeline or norm' }),
      O('b', 'Gently encourage her to set aside those particular practices so that they do not end up slowing down her grief recovery', -2,
        { r: 'Dismissing practices is culturally insensitive', approach: 'Pathologize the practices', why: 'Cultural mourning practices can be protective', keys: ['cultural rituals'], mistake: 'Treating cultural norms as obstacles' }),
      O('c', 'Apply the standard expected grief timeline to her case and judge her progress strictly against those usual benchmarks', -1,
        { r: 'Norms vary across cultures', approach: 'One-size-fits-all timeline', why: 'Grief norms are culturally bound', keys: ['cultural variation'], mistake: 'Ignoring cultural context in assessment' }),
      O('d', 'Refer her elsewhere immediately on the assumption that you cannot possibly work with someone from her cultural background', -1,
        { r: 'Reflexive referral is not required', approach: 'Premature referral', why: 'Cultural humility and learning are expected first', keys: ['competence with humility'], mistake: 'Equating unfamiliarity with incompetence' }),
    ]),
    Q('q12', 'ethics', 'Mei Lin asks the counselor to attend her husband’s memorial anniversary gathering as her guest. Best response?', ['R5'], [
      O('a', 'Warmly explore the meaning of the request and maintain the professional boundary, explaining its protective purpose', 3,
        { r: 'Hold the boundary, explore the meaning', approach: 'Maintain a caring boundary', why: 'Boundaries protect the therapeutic relationship', keys: ['boundary request', 'longing for connection'], mistake: 'Either attending or coldly refusing' }),
      O('b', 'Agree to attend the gathering as her guest, since being there would clearly mean a great deal to her during a painful time', -2,
        { r: 'Attending creates a boundary crossing', approach: 'Cross the boundary', why: 'It risks a harmful dual relationship', keys: ['role confusion'], mistake: 'Trading the clinical role for a social one' }),
      O('c', 'Decline quickly and move on without acknowledging the feelings or the significance behind her invitation to the gathering', -1,
        { r: 'A cold refusal can feel like rejection', approach: 'Dismissive refusal', why: 'The longing deserves exploration, not dismissal', keys: ['grief sensitivity'], mistake: 'Enforcing limits without warmth' }),
      O('d', 'Offer to attend just briefly and only to quietly pay your respects, as long as you do not stay for the rest of the gathering', -2,
        { r: 'A brief visit is still a boundary crossing', approach: 'Partial attendance', why: 'Any attendance blurs the professional role', keys: ['boundary integrity'], mistake: 'Rationalizing a limited crossing' }),
    ]),
    Q('q13', 'ethics', 'After several months Mei Lin’s grief has not shifted and may need a specialized grief protocol. Best step?', ['R5'], [
      O('a', 'Reassess progress and seek consultation or refer to a clinician trained in a specialized grief protocol if indicated', 3,
        { r: 'Reassess and match competence to need', approach: 'Consult or refer within competence', why: 'ACA C.2. requires practicing within competence', keys: ['little change', 'possible specialized need'], mistake: 'Continuing a stalled plan without review' }),
      O('b', 'Continue the same approach indefinitely because she is already comfortable and well established in the work with you', -1,
        { r: 'Ignoring non-response is an error', approach: 'Stay the course', why: 'A stalled course warrants reassessment', keys: ['no progress'], mistake: 'Failing to revisit a non-responding plan' }),
      O('c', 'Tell her that grief simply takes as long as it takes and that there is no real need to change anything about the treatment', -1,
        { r: 'Using normal-grief framing to avoid action', approach: 'Over-normalize', why: 'Persistent impairing grief warrants reassessment', keys: ['ongoing impairment'], mistake: 'Excusing non-response as normal' }),
      O('d', 'Terminate the counseling relationship at once and instruct her to find a grief specialist entirely on her own without help', -2,
        { r: 'Abrupt abandonment is unethical', approach: 'Abandon the client', why: 'Referral must be coordinated, not abrupt', keys: ['continuity of care'], mistake: 'Abandoning rather than coordinating' }),
    ]),
  ],
};

// ============================================================================
// D109 — Borderline Personality Disorder (F60.3) — Personality — medium
// ============================================================================
const D109 = {
  id: 'ncmhce-D109',
  title: 'Intense relationships and recurrent self-harm in a graduate student',
  category: 'Personality',
  difficulty: 'medium',
  primaryDiagnosis: { name: 'Borderline Personality Disorder', code: 'F60.3' },
  diagnosis: { name: 'Borderline Personality Disorder', code: 'F60.3' },
  differentialOptions: [
    { id: 'do1', name: 'Borderline Personality Disorder', isCorrect: true },
    { id: 'do2', name: 'Bipolar II Disorder', isCorrect: false },
    { id: 'do3', name: 'Posttraumatic Stress Disorder', isCorrect: false },
    { id: 'do4', name: 'Major Depressive Disorder, Moderate', isCorrect: false },
  ],
  narrative: {
    intake:
      'Aisha Thompson, a 26-year-old graduate student, presents with a long-standing pattern of intense, unstable relationships, ' +
      'fear of abandonment, rapidly shifting self-image, and recurrent self-harm by cutting during periods of emotional distress.',
    session1:
      'She describes relationships that swing between idealizing and devaluing others, chronic feelings of emptiness, and intense ' +
      'anger she struggles to control; her mood shifts within hours in response to perceived rejection rather than across weeks.',
    session2:
      'She reports cutting her arms to relieve unbearable tension and has had two past low-lethality overdoses during breakups; ' +
      'she denies current intent but says the urges return whenever she fears someone close to her is pulling away from her.',
  },
  diagnosticRationale:
    'A pervasive, long-standing pattern of frantic efforts to avoid abandonment, unstable idealizing-devaluing relationships, ' +
    'identity disturbance, impulsive self-harm, recurrent suicidal behavior, affective instability reactive to interpersonal ' +
    'events, chronic emptiness, and intense anger meets DSM-5-TR criteria for borderline personality disorder, not bipolar disorder.',
  references: [
    { id: 'R1', source: 'DSM-5-TR', detail: 'BPD: 5 of 9 criteria including abandonment fears, identity disturbance, and self-harm' },
    { id: 'R2', source: 'NICE guidelines', detail: 'Borderline personality disorder: structured, evidence-based psychotherapies such as DBT' },
    { id: 'R3', source: 'C-SSRS', detail: 'Structured assessment of recurrent suicidal ideation and prior behavior' },
    { id: 'R4', source: 'Stanley-Brown SPI', detail: 'Collaborative safety planning rather than no-suicide contracts' },
    { id: 'R5', source: 'ACA Code of Ethics', detail: 'A.6. and C.2.: managing boundaries and practicing within competence' },
    { id: 'R6', source: 'Corey (Theory & Practice)', detail: 'Working alliance, therapeutic stance, and client engagement across theoretical approaches' },
  ],
  questions: [
    Q('q1', 'intake', 'What is most important for the counselor to establish to support a borderline personality disorder diagnosis?', ['R1'], [
      O('a', 'A pervasive, long-standing pattern of at least five of the nine criteria across many situations and relationships', 3,
        { r: 'Pervasive, enduring pattern of 5/9', approach: 'Confirm the diagnostic pattern', why: 'DSM-5-TR requires 5 of 9 enduring criteria', keys: ['unstable relationships', 'recurrent self-harm'], mistake: 'Diagnosing from a single trait or episode' }),
      O('b', 'A clearly identifiable single traumatic event in her childhood that can be pinpointed as the original cause of the pattern', -1,
        { r: 'A specific trauma is not required', approach: 'Etiology framing', why: 'No single cause is part of the criteria', keys: ['pattern-based diagnosis'], mistake: 'Requiring a discrete cause to diagnose' }),
      O('c', 'A series of distinct mood episodes that have each clearly lasted for at least several consecutive days or weeks at a time', -1,
        { r: 'Sustained episodes point to bipolar', approach: 'Episodic-mood framing', why: 'BPD affect shifts within hours, not over days', keys: ['rapid mood shifts'], mistake: 'Confusing reactive shifts with mood episodes' }),
      O('d', 'A consistent and well-documented pattern of clear psychotic symptoms that reliably emerge during her most stressful periods', 0,
        { r: 'Frank psychosis is not the criterion', approach: 'Psychosis framing', why: 'Transient stress paranoia is brief, not psychotic', keys: ['reality testing largely intact'], mistake: 'Over-reading stress reactions as psychosis' }),
    ]),
    Q('q2', 'core', 'Which feature best differentiates her presentation from bipolar II disorder?', ['R1'], [
      O('a', 'That her mood shifts within hours in reaction to interpersonal events rather than lasting as sustained discrete episodes', 3,
        { r: 'Reactive, brief shifts versus episodes', approach: 'Contrast the mood pattern', why: 'BPD affect is reactive and short; bipolar is episodic', keys: ['shifts within hours', 'rejection-triggered'], mistake: 'Conflating reactivity with mood episodes' }),
      O('b', 'That she clearly experiences strong feelings of irritability and anger during many of her most emotionally intense moments', -1,
        { r: 'Irritability occurs in both', approach: 'Symptom-presence framing', why: 'Anger does not separate the two disorders', keys: ['shared feature'], mistake: 'Using a shared symptom to differentiate' }),
      O('c', 'That she goes through clear stretches of noticeably elevated energy and reduced need for sleep lasting several days at a time', -1,
        { r: 'Sustained elevation points to bipolar', approach: 'Hypomania framing', why: 'That pattern would suggest bipolar II instead', keys: ['no discrete hypomania'], mistake: 'Reading hypomania into reactive shifts' }),
      O('d', 'That her difficulties tend to become a great deal more intense and harder to manage during the late evening and nighttime hours', 0,
        { r: 'Diurnal pattern is not diagnostic', approach: 'Time-of-day framing', why: 'Timing does not separate BPD from bipolar', keys: ['nonspecific timing'], mistake: 'Over-reading a circadian pattern' }),
    ]),
    Q('q3', 'core', 'Given her recurrent self-harm and past overdoses, the most appropriate assessment step is to:', ['R3'], [
      O('a', 'Complete a structured suicide-risk assessment that distinguishes her self-harm urges from suicidal intent and plan', 3,
        { r: 'Structured assessment of chronic risk', approach: 'Assess risk with structure', why: 'C-SSRS clarifies ideation, intent, and behavior', keys: ['cutting', 'two past overdoses'], mistake: 'Treating chronic risk as unassessable' }),
      O('b', 'Assume that because her self-harm appears to be chronic and long-standing it does not require any formal ongoing assessment', -2,
        { r: 'Chronic risk still needs assessment', approach: 'Habituation framing', why: 'Chronicity does not remove the need to assess', keys: ['recurrent behavior'], mistake: 'Becoming desensitized to chronic risk' }),
      O('c', 'Ask her to promise that she will not cut or harm herself again at any point before her next scheduled counseling session', -2,
        { r: 'No-harm contracts are not evidence-based', approach: 'No-harm contract', why: 'Contracts do not reduce risk or assess it', keys: ['needs safety planning'], mistake: 'Substituting a contract for assessment' }),
      O('d', 'Focus the assessment narrowly on the specific physical wounds themselves rather than on her thoughts, intent, and triggers', -1,
        { r: 'Wound-only focus misses risk data', approach: 'Surface framing', why: 'Intent and triggers drive the risk picture', keys: ['unassessed intent'], mistake: 'Assessing injury without context' }),
    ]),
    Q('q4', 'core', 'Distinguishing her self-harm from a suicide attempt most importantly requires assessing:', ['R3'], [
      O('a', 'Her intent and the function of the behavior, since cutting to relieve tension differs from acting with intent to die', 3,
        { r: 'Intent and function separate the two', approach: 'Assess intent and function', why: 'Tension relief differs from intent to die', keys: ['cuts to relieve tension', 'denies intent'], mistake: 'Assuming all self-harm is a suicide attempt' }),
      O('b', 'The precise depth and overall medical seriousness of the physical wounds that she has produced during her cutting episodes', -1,
        { r: 'Lethality alone does not reveal intent', approach: 'Severity framing', why: 'Medical severity does not establish intent', keys: ['function matters'], mistake: 'Inferring intent from wound severity' }),
      O('c', 'Exactly how frequently the self-harming behavior tends to occur across a typical week or month of her ongoing daily life', -1,
        { r: 'Frequency does not clarify intent', approach: 'Frequency framing', why: 'Rate is not the same as intent', keys: ['intent vs frequency'], mistake: 'Equating frequency with risk type' }),
      O('d', 'Whether the people closest to her are fully aware that she has been engaging in this self-harming behavior for some time', 0,
        { r: 'Others’ awareness is not the test', approach: 'Disclosure framing', why: 'Intent and function, not visibility, define risk type', keys: ['function-based distinction'], mistake: 'Using disclosure as the criterion' }),
    ]),
    Q('q5', 'intake', 'What co-occurring condition is most important to screen for given her history?', ['R1'], [
      O('a', 'Co-occurring posttraumatic stress and depressive symptoms, which commonly accompany borderline personality disorder', 3,
        { r: 'Screen common BPD comorbidities', approach: 'Assess co-occurring conditions', why: 'PTSD and depression frequently co-occur with BPD', keys: ['chronic emptiness', 'self-harm'], mistake: 'Assessing the personality pattern in isolation' }),
      O('b', 'A previously undiagnosed primary psychotic disorder that could fully account for the brief paranoid moments she sometimes has', -1,
        { r: 'Transient paranoia is not psychosis', approach: 'Psychosis framing', why: 'Stress-related paranoia in BPD is brief', keys: ['reality testing intact'], mistake: 'Over-reading transient symptoms as psychosis' }),
      O('c', 'An underlying neurodevelopmental disorder that could explain the impulsivity she has shown since she was a young child', -1,
        { r: 'Neurodevelopmental framing is low yield', approach: 'Developmental framing', why: 'Her pattern fits BPD impulsivity', keys: ['affective instability'], mistake: 'Chasing an improbable comorbidity' }),
      O('d', 'A primary eating disorder that might be the true underlying driver of both her impulsivity and her emotional instability', 0,
        { r: 'Eating pathology is not indicated', approach: 'Eating-disorder framing', why: 'No eating concerns are reported', keys: ['no eating data'], mistake: 'Inventing an unsupported comorbidity' }),
    ]),
    Q('q6', 'treatment', 'What is the most appropriate evidence-based treatment recommendation?', ['R2'], [
      O('a', 'Referral to a structured, evidence-based psychotherapy for borderline personality disorder such as dialectical behavior therapy', 3,
        { r: 'Structured EBP such as DBT is indicated', approach: 'Apply the guideline', why: 'NICE supports structured psychotherapies like DBT', keys: ['emotion dysregulation', 'self-harm'], mistake: 'Offering unstructured supportive care only' }),
      O('b', 'Open-ended supportive counseling without any particular structure, focused mostly on listening to whatever arises each week', -1,
        { r: 'Unstructured support underperforms', approach: 'Nondirective support', why: 'Structured therapies outperform for BPD', keys: ['needs structure'], mistake: 'Defaulting to unstructured care' }),
      O('c', 'Brief solution-focused work over a small number of sessions aimed at quickly resolving the presenting interpersonal conflicts', -1,
        { r: 'Brief therapy under-treats the pattern', approach: 'Brief-therapy framing', why: 'The enduring pattern needs sustained treatment', keys: ['long-standing pattern'], mistake: 'Under-dosing a chronic condition' }),
      O('d', 'A primarily insight-oriented exploration of her early attachments as the single main route to relieving her current symptoms', 0,
        { r: 'Insight-only is not first-line', approach: 'Depth-only framing', why: 'Skills-based structured therapy is first-line', keys: ['skills deficit'], mistake: 'Prioritizing insight over skills' }),
    ]),
    Q('q7', 'treatment', 'For managing her recurrent suicidal and self-harm urges, the plan should center on:', ['R4'], [
      O('a', 'A collaborative safety plan identifying warning signs, coping strategies, and supports she can use when urges escalate', 3,
        { r: 'Collaborative safety planning', approach: 'Build a safety plan', why: 'Stanley-Brown planning is evidence-based for risk', keys: ['urges with rejection', 'past overdoses'], mistake: 'Relying on a no-suicide contract' }),
      O('b', 'A signed no-suicide contract in which she formally agrees in writing never to harm herself for the duration of treatment', -2,
        { r: 'No-suicide contracts are not evidence-based', approach: 'No-harm contract', why: 'Contracts do not reduce risk', keys: ['ineffective intervention'], mistake: 'Using a contract instead of a plan' }),
      O('c', 'An arrangement for her to be psychiatrically hospitalized each and every time that she experiences any urge to harm herself', -1,
        { r: 'Reflexive hospitalization is not the standard', approach: 'Over-hospitalization', why: 'Chronic urges are managed with outpatient planning', keys: ['chronic risk'], mistake: 'Defaulting to hospitalization for every urge' }),
      O('d', 'A strict set of rules forbidding her from contacting the counselor whenever the self-harm urges happen to become stronger', -1,
        { r: 'Cutting off crisis contact is unsafe', approach: 'Restrict access', why: 'A safety plan includes accessible supports', keys: ['needs supports'], mistake: 'Removing crisis resources' }),
    ]),
    Q('q8', 'treatment', 'Between sessions Aisha frequently calls in crisis. The most appropriate plan element is to:', ['R5'], [
      O('a', 'Establish clear, consistent between-session contact guidelines and coach her in using skills during crises within that frame', 3,
        { r: 'Consistent frame plus skills coaching', approach: 'Structure crisis contact', why: 'A consistent frame supports skills generalization', keys: ['frequent crisis calls'], mistake: 'Either unlimited access or none' }),
      O('b', 'Make yourself personally available to her by phone at any hour of the day or night so that she never has to face a crisis alone', -2,
        { r: 'Unlimited access fosters dependence', approach: 'Boundless availability', why: 'It is unsustainable and reinforces crises', keys: ['no boundaries'], mistake: 'Overextending availability' }),
      O('c', 'Tell her plainly that she may not contact you at all between sessions and that every concern must wait until the next appointment', -1,
        { r: 'No access ignores her risk', approach: 'Rigid unavailability', why: 'Her risk warrants accessible crisis supports', keys: ['recurrent risk'], mistake: 'Leaving a high-risk client without supports' }),
      O('d', 'Refer her out of your practice entirely so that an on-call crisis line can take over all of the between-session contact instead', -1,
        { r: 'Offloading all contact is premature', approach: 'Wholesale referral', why: 'A consistent therapeutic frame is preferable', keys: ['continuity matters'], mistake: 'Abandoning the therapeutic relationship' }),
    ]),
    Q('q9', 'counseling', 'When Aisha alternates between idealizing and devaluing the counselor, the most therapeutic response is to:', ['R6'], [
      O('a', 'Maintain a steady, nonreactive stance and a consistent frame while validating the feelings underneath the shifts', 3,
        { r: 'Consistency plus validation', approach: 'Hold a steady frame', why: 'A consistent stance contains splitting', keys: ['idealize-devalue swings'], mistake: 'Reacting personally to the shifts' }),
      O('b', 'Point out to her directly that she is splitting and explain in detail how this same pattern is damaging all of her relationships', -1,
        { r: 'Labeling can feel invalidating', approach: 'Confront the defense', why: 'Premature interpretation can rupture alliance', keys: ['fragile alliance'], mistake: 'Interpreting before validating' }),
      O('c', 'Respond warmly when she idealizes you and noticeably more distantly when she devalues you so she learns about consequences', -2,
        { r: 'Reinforcing swings worsens instability', approach: 'Contingent warmth', why: 'Inconsistency intensifies the pattern', keys: ['needs consistency'], mistake: 'Letting the client’s shifts drive your stance' }),
      O('d', 'Take the devaluation as accurate feedback about your work and substantially change your whole approach each time it happens', -1,
        { r: 'Overcorrecting destabilizes the frame', approach: 'Reactive overcorrection', why: 'A steady frame, not constant change, is therapeutic', keys: ['boundary stability'], mistake: 'Abandoning the frame under pressure' }),
    ]),
    Q('q10', 'counseling', 'Aisha becomes intensely angry when the counselor mentions an upcoming vacation. The best response is to:', ['R6'], [
      O('a', 'Validate the abandonment fear, prepare for the break in advance, and arrange clear coverage and supports during the absence', 3,
        { r: 'Validate and plan for the break', approach: 'Prepare for separations', why: 'Planned coverage addresses abandonment fears', keys: ['fear of abandonment', 'anger at separation'], mistake: 'Dismissing or avoiding the reaction' }),
      O('b', 'Reassure her firmly that her anger is unwarranted because the vacation is brief and she will be completely fine without you', -1,
        { r: 'Dismissing the fear invalidates her', approach: 'Minimize the reaction', why: 'It overlooks a core abandonment sensitivity', keys: ['abandonment fear'], mistake: 'Telling her how she should feel' }),
      O('c', 'Offer to cancel the planned vacation entirely so that she does not have to experience any distress about the coming separation', -2,
        { r: 'Accommodating undermines the frame', approach: 'Cave to the reaction', why: 'It reinforces fragility and crosses boundaries', keys: ['boundary maintenance'], mistake: 'Abandoning appropriate limits' }),
      O('d', 'Avoid the topic of the vacation as much as possible and reveal the details only at the very last session before you leave', -1,
        { r: 'Withholding prevents needed preparation', approach: 'Avoidant disclosure', why: 'Advance preparation reduces crisis risk', keys: ['needs preparation'], mistake: 'Springing separations without planning' }),
    ]),
    Q('q11', 'counseling', 'Aisha asks the counselor to be her friend outside of sessions because she trusts no one else. Best response?', ['R5'], [
      O('a', 'Warmly maintain the professional boundary, explain its protective purpose, and explore the longing for connection in therapy', 3,
        { r: 'Hold the boundary, explore the need', approach: 'Maintain a caring boundary', why: 'Boundaries protect the work while the need is processed', keys: ['boundary request', 'fear of being alone'], mistake: 'Either crossing the line or rejecting coldly' }),
      O('b', 'Agree to occasional friendly contact outside of sessions because the therapeutic relationship is clearly so important to her', -2,
        { r: 'A dual relationship harms the work', approach: 'Cross the boundary', why: 'It creates a harmful dual relationship', keys: ['role confusion'], mistake: 'Trading the clinical role for friendship' }),
      O('c', 'Decline curtly and move on quickly without acknowledging the feelings or the meaning behind her request for closeness', -1,
        { r: 'A cold refusal can feel like rejection', approach: 'Dismissive refusal', why: 'The longing deserves exploration, not dismissal', keys: ['abandonment sensitivity'], mistake: 'Enforcing limits without warmth' }),
      O('d', 'Promise her that once the formal therapy has fully ended the two of you can certainly become close personal friends afterward', -2,
        { r: 'Future-friendship promises are improper', approach: 'Post-termination promise', why: 'It compromises current treatment and boundaries', keys: ['boundary integrity'], mistake: 'Dangling a personal relationship' }),
    ]),
    Q('q12', 'ethics', 'The counselor notices unusually strong frustration with Aisha’s frequent crises. The most appropriate step is to:', ['R6'], [
      O('a', 'Seek clinical supervision or consultation to manage the countertransference and protect the quality of her care', 3,
        { r: 'Use consultation for countertransference', approach: 'Seek consultation', why: 'ACA C.2. supports consultation to maintain competence', keys: ['strong frustration', 'complex case'], mistake: 'Letting reactions silently shape care' }),
      O('b', 'Address the frustration by setting noticeably firmer and more rigid limits with her in order to reduce the demands on yourself', -1,
        { r: 'Reactive limits serve the clinician, not the client', approach: 'Self-protective limits', why: 'Limits should be clinical, not reactive', keys: ['countertransference'], mistake: 'Letting reactions drive boundary changes' }),
      O('c', 'Disclose your frustration openly to her in session so that she can fully understand the real impact her behavior has on you', -1,
        { r: 'Burdening the client is inappropriate', approach: 'Over-disclosure', why: 'Self-disclosure here serves the clinician', keys: ['client welfare'], mistake: 'Shifting your reaction onto the client' }),
      O('d', 'Begin the process of transferring her to another provider right away, since your frustration clearly means you can no longer help her', -1,
        { r: 'Premature transfer abandons the client', approach: 'Reflexive transfer', why: 'Consultation should precede any transfer', keys: ['continuity of care'], mistake: 'Transferring instead of addressing the reaction' }),
    ]),
    Q('q13', 'ethics', 'Aisha discloses an urge to overdose tonight after a breakup but pleads with the counselor to keep it secret. Best response?', ['R5'], [
      O('a', 'Explain the limits of confidentiality, assess imminent risk fully, and act to protect her safety as the situation requires', 3,
        { r: 'Confidentiality yields to imminent risk', approach: 'Prioritize safety and limits', why: 'Duty to protect overrides confidentiality at imminent risk', keys: ['urge to overdose tonight', 'recent breakup'], mistake: 'Promising secrecy when risk is imminent' }),
      O('b', 'Agree to keep the disclosure completely confidential so that she continues to feel safe being fully honest with you in the future', -2,
        { r: 'Secrecy at imminent risk is unsafe', approach: 'Preserve secrecy', why: 'Imminent risk requires protective action', keys: ['imminent danger'], mistake: 'Prioritizing secrecy over safety' }),
      O('c', 'Reassure her that since this is most likely just her chronic pattern of urges there is no real need to take any further action tonight', -2,
        { r: 'Dismissing imminent risk is dangerous', approach: 'Habituation framing', why: 'Chronic risk can still become acute', keys: ['stated tonight'], mistake: 'Assuming chronic means non-acute' }),
      O('d', 'Wait until the next scheduled session to revisit the disclosure once she has had some time to fully calm down on her own first', -1,
        { r: 'Delaying response to imminent risk is unsafe', approach: 'Defer the response', why: 'Imminent risk requires action now', keys: ['acute disclosure'], mistake: 'Postponing an urgent safety response' }),
    ]),
  ],
};

module.exports = { CASES: [D105, D106, D107, D108, D109] };
