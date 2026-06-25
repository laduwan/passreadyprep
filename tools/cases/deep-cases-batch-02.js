// ============================================================================
// deep-cases-batch-02.js — NCMHCE deep cases D105–D109 (2022+ format)
// NCMHCE Prep Platform | GA Integrated Therapeutic Perspectives LLC
//
// Five exam-deep clinical simulations. The diagnosis is GIVEN; the 13 items per
// case test clinical decision-making across Assessment -> Planning -> Process
// (derived from each item's `domain`; see caseSchema.SECTIONS / examDepth.js).
//
// Standalone deliverable for SME review. Validate before import:
//   node tools/cases/validateCases.js tools/cases/deep-cases-batch-02.js
//   node -e "const{validateExamDepthSet}=require('./tools/cases/examDepth');\
//     const{CASES}=require('./tools/cases/deep-cases-batch-02');\
//     const r=validateExamDepthSet(CASES);console.log(r.ok?'DEPTH PASS':'DEPTH FAIL');\
//     r.errors.forEach(e=>console.log(e));r.warnings.forEach(w=>console.log(w))"
//
// Do NOT auto-import — importing into the live DB is a separate, human-run step.
// ============================================================================

// --- tiny builders so every option/question carries the full schema ---------
// O(id, text, weight, { r, approach, why, keys, mistake })
//   weight 3 => keyed answer; distractor weights from {0,-1,-2}.
const O = (id, text, weight, ex) => ({
  id,
  text,
  isCorrect: weight === 3,
  weight,
  rationale: ex.r,
  explanation: {
    approach: ex.approach,
    rationale: ex.why,
    keyIndicators: ex.keys,
    commonMistake: ex.mistake,
  },
});
const Q = (id, domain, question, evidenceRef, options) => ({ id, domain, question, evidenceRef, options });

// ============================================================================
// D105 — Major Depressive Disorder, Moderate (F33.1) — Depressive — easy
// ============================================================================
const D105 = {
  id: 'D105',
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
    Q('q11', 'counseling', 'Daniel says he doubts anything will help. What is the most therapeutic response?', ['R2'], [
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
// D106 — Generalized Anxiety Disorder (F41.1) — Anxiety — medium
// ============================================================================
const D106 = {
  id: 'D106',
  title: 'Uncontrollable worry across every domain of life',
  category: 'Anxiety',
  difficulty: 'medium',
  primaryDiagnosis: { name: 'Generalized Anxiety Disorder', code: 'F41.1' },
  diagnosis: { name: 'Generalized Anxiety Disorder', code: 'F41.1' },
  differentialOptions: [
    { id: 'do1', name: 'Generalized Anxiety Disorder', isCorrect: true },
    { id: 'do2', name: 'Panic Disorder', isCorrect: false },
    { id: 'do3', name: 'Illness Anxiety Disorder', isCorrect: false },
    { id: 'do4', name: 'Adjustment Disorder, with Anxiety', isCorrect: false },
  ],
  narrative: {
    intake:
      'Priya Raman, a 41-year-old accountant, presents with roughly a year of constant, hard-to-control worry about work, ' +
      'her children’s safety, finances, and her health, accompanied by muscle tension, irritability, and trouble sleeping.',
    session1:
      'She describes lying awake rehearsing everything that could go wrong, feeling restless and on edge most days, ' +
      'and finding it difficult to concentrate at work because her mind keeps jumping to the next potential problem.',
    session2:
      'She denies discrete panic attacks and has had a recent normal physical exam, yet she still cannot stop the worry; ' +
      'she says she has “always been a worrier” but that it became unmanageable over the past year.',
  },
  diagnosticRationale:
    'Excessive, difficult-to-control worry about multiple domains occurring more days than not for at least six months, ' +
    'with restlessness, muscle tension, irritability, concentration difficulty, and sleep disturbance and clear impairment, ' +
    'meets DSM-5-TR criteria for generalized anxiety disorder rather than a panic, illness-focused, or adjustment presentation.',
  references: [
    { id: 'R1', source: 'DSM-5-TR', detail: 'GAD criteria: excessive worry 6+ months plus 3 of 6 associated symptoms with impairment' },
    { id: 'R2', source: 'NICE guidelines', detail: 'GAD stepped-care model from psychoeducation through high-intensity CBT' },
    { id: 'R3', source: 'APA CPG', detail: 'Anxiety guideline supporting CBT with cognitive restructuring and exposure to worry' },
    { id: 'R4', source: 'Hays (Assessment)', detail: 'Selecting and interpreting standardized anxiety measures such as the GAD-7' },
    { id: 'R5', source: 'ACA Code of Ethics', detail: 'C.2.: practicing within competence and referring for specialized care' },
  ],
  questions: [
    Q('q1', 'intake', 'What is most important to establish to confirm generalized anxiety disorder at intake?', ['R1'], [
      O('a', 'That the excessive, hard-to-control worry has spanned multiple domains more days than not for at least six months', 3,
        { r: 'Duration and uncontrollability define GAD', approach: 'Confirm the core criterion', why: 'DSM-5-TR requires 6 months of uncontrollable worry', keys: ['about a year of worry', 'multiple domains'], mistake: 'Diagnosing GAD from short-term stress' }),
      O('b', 'That she can point to the one specific situation or feared object that reliably sets off the bulk of her anxiety', -1,
        { r: 'A single focus suggests phobia, not GAD', approach: 'Single-cue framing', why: 'GAD worry is diffuse, not cue-bound', keys: ['worry spans domains'], mistake: 'Looking for one phobic trigger' }),
      O('c', 'That she has experienced at least several sudden surges of intense fear that peaked within a few minutes of onset', -1,
        { r: 'Surges point toward panic disorder', approach: 'Panic framing', why: 'GAD lacks discrete panic attacks', keys: ['denies panic attacks'], mistake: 'Requiring panic for an anxiety diagnosis' }),
      O('d', 'That her worries are focused mainly on having or acquiring a serious undiagnosed medical illness despite reassurance', 0,
        { r: 'Illness focus suggests a different disorder', approach: 'Health-anxiety framing', why: 'This pattern fits illness anxiety disorder', keys: ['worry is broad'], mistake: 'Narrowing GAD to health worry' }),
    ]),
    Q('q2', 'core', 'Which feature best differentiates her presentation from panic disorder?', ['R1'], [
      O('a', 'Persistent anticipatory worry and tension without the discrete, abruptly peaking attacks that characterize panic', 3,
        { r: 'Sustained worry versus discrete attacks', approach: 'Contrast the symptom course', why: 'GAD is chronic worry; panic is episodic surges', keys: ['on edge most days', 'no attacks'], mistake: 'Conflating chronic anxiety with panic' }),
      O('b', 'The presence of physical sensations such as muscle tension and restlessness that she experiences on most ordinary days', -1,
        { r: 'Somatic tension occurs in both', approach: 'Somatic framing', why: 'Physical symptoms do not separate the two', keys: ['tension is nonspecific'], mistake: 'Using shared symptoms to differentiate' }),
      O('c', 'Her strong tendency to avoid specific crowded places where escape might be difficult if she became overwhelmed by fear', -1,
        { r: 'Situational avoidance suggests agoraphobia', approach: 'Avoidance framing', why: 'That pattern points elsewhere', keys: ['no situational avoidance'], mistake: 'Reading agoraphobic avoidance into GAD' }),
      O('d', 'The fact that her worry tends to feel a great deal worse during the evening and overnight hours than during the daytime', 0,
        { r: 'Time-of-day pattern is not diagnostic', approach: 'Diurnal framing', why: 'Timing does not separate GAD from panic', keys: ['nighttime worry'], mistake: 'Over-reading a circadian pattern' }),
    ]),
    Q('q3', 'core', 'What medical or substance-related contributor is most important to rule out given her symptoms?', ['R1'], [
      O('a', 'Hyperthyroidism and excessive caffeine or stimulant use, which can closely mimic a generalized anxiety presentation', 3,
        { r: 'Exclude physiological mimics', approach: 'Screen organic causes', why: 'DSM-5-TR requires excluding medical and substance causes', keys: ['restlessness', 'sleep disturbance'], mistake: 'Skipping the medical rule-out' }),
      O('b', 'A previously undetected, slowly progressive neurocognitive decline that could account for her concentration difficulties', -1,
        { r: 'Cognitive decline is unlikely here', approach: 'Neurocognitive framing', why: 'Her profile and age fit anxiety better', keys: ['anxiety-driven inattention'], mistake: 'Pursuing an improbable rule-out' }),
      O('c', 'A long-standing pattern of restricting food intake that could be driving both her irritability and her trouble sleeping', -1,
        { r: 'Eating pathology is not indicated', approach: 'Eating-disorder framing', why: 'No restriction or body concerns are reported', keys: ['no eating concerns'], mistake: 'Inventing an unsupported rule-out' }),
      O('d', 'A pattern of heavy alcohol use late at night that she may be relying on specifically to help herself fall asleep faster', 0,
        { r: 'Worth screening but secondary here', approach: 'Substance framing', why: 'Plausible but not the leading mimic', keys: ['no use reported yet'], mistake: 'Assuming substance use without data' }),
    ]),
    Q('q4', 'core', 'How can the counselor best obtain a baseline measure of her anxiety severity?', ['R4'], [
      O('a', 'Administer a validated self-report measure such as the GAD-7 to quantify severity and track change over time', 3,
        { r: 'Validated measure sets a baseline', approach: 'Use a standardized tool', why: 'The GAD-7 quantifies severity reliably', keys: ['need objective baseline'], mistake: 'Relying only on clinical impression' }),
      O('b', 'Ask her to estimate, on a scale she invents herself in the moment, how anxious she generally feels on a typical day', -1,
        { r: 'An ad hoc scale lacks validity', approach: 'Improvised rating', why: 'It is not standardized or comparable', keys: ['no benchmark'], mistake: 'Using an unvalidated rating' }),
      O('c', 'Have her keep an open-ended daily journal describing in detail everything that made her feel anxious during the week', 0,
        { r: 'Useful qualitatively, not a baseline metric', approach: 'Narrative logging', why: 'It does not yield a comparable score', keys: ['qualitative data'], mistake: 'Substituting narrative for measurement' }),
      O('d', 'Rely on her partner’s outside description of how anxious she has appeared to him at home over the last several weeks', -1,
        { r: 'Collateral alone is not a baseline', approach: 'Collateral report', why: 'It is secondhand and unstandardized', keys: ['indirect data'], mistake: 'Replacing self-report with collateral' }),
    ]),
    Q('q5', 'intake', 'What does her statement that she has “always been a worrier” most importantly signal for assessment?', ['R1'], [
      O('a', 'A possible long-standing trait that requires clarifying when the worry crossed into impairing, uncontrollable territory', 3,
        { r: 'Distinguish trait from disorder onset', approach: 'Clarify the impairment threshold', why: 'GAD requires impairment beyond trait worry', keys: ['became unmanageable this year'], mistake: 'Treating trait worry as automatically disordered' }),
      O('b', 'Clear confirmation that she has met full criteria for the disorder continuously since she was a young child or adolescent', -1,
        { r: 'Lifelong worry is not full criteria', approach: 'Over-reading chronicity', why: 'Trait worry differs from a diagnosable course', keys: ['recent worsening'], mistake: 'Equating temperament with diagnosis' }),
      O('c', 'Strong evidence that her current symptoms are simply her normal personality and therefore do not warrant any treatment', -2,
        { r: 'Dismissing impairment is an error', approach: 'Normalize away the disorder', why: 'Current impairment warrants treatment', keys: ['functional impairment'], mistake: 'Minimizing a treatable condition' }),
      O('d', 'A reliable indication that a co-occurring personality disorder is the most likely primary driver of all her presenting worry', -1,
        { r: 'Personality pathology is not indicated', approach: 'Personality framing', why: 'Nothing supports a personality-disorder primary', keys: ['anxiety-focused picture'], mistake: 'Over-pathologizing temperament' }),
    ]),
    Q('q6', 'treatment', 'What is the most appropriate first-line psychotherapy recommendation?', ['R3'], [
      O('a', 'Cognitive behavioral therapy combining cognitive restructuring with gradual exposure to feared worry-related outcomes', 3,
        { r: 'CBT is first-line for GAD', approach: 'Apply the guideline', why: 'APA CPG supports CBT with exposure for GAD', keys: ['uncontrollable worry'], mistake: 'Choosing an unsupported approach' }),
      O('b', 'Long-term, open-ended supportive counseling that focuses mainly on giving her a safe space to talk through her worries', -1,
        { r: 'Unstructured support underperforms CBT', approach: 'Supportive-only therapy', why: 'It lacks the active CBT components', keys: ['needs skills, not venting'], mistake: 'Defaulting to nondirective support' }),
      O('c', 'A primarily insight-oriented exploration aimed at uncovering the early childhood roots of her tendency toward worry', 0,
        { r: 'Insight work is not first-line for GAD', approach: 'Depth exploration', why: 'Evidence favors CBT over insight-only work', keys: ['symptom-focused need'], mistake: 'Prioritizing origins over skills' }),
      O('d', 'Brief reassurance paired with general advice to relax more, exercise regularly, and try her best to worry a little less', -1,
        { r: 'Reassurance and advice are insufficient', approach: 'Advice-giving', why: 'It is not an evidence-based protocol', keys: ['needs structured care'], mistake: 'Offering platitudes as treatment' }),
    ]),
    Q('q7', 'treatment', 'Following a stepped-care model, what helps determine the intensity of intervention to offer first?', ['R2'], [
      O('a', 'Matching the intensity to her symptom severity and impairment, stepping up if lower-intensity options prove insufficient', 3,
        { r: 'Match intensity to severity, then step up', approach: 'Apply stepped care', why: 'NICE structures care by severity and response', keys: ['measure-guided'], mistake: 'Ignoring stepped-care logic' }),
      O('b', 'Always beginning with the most intensive available option so that no time is lost before she gets the strongest treatment', -1,
        { r: 'Maximal-first ignores stepped care', approach: 'Top-down intensity', why: 'Stepped care reserves intensity for non-response', keys: ['severity-matched care'], mistake: 'Over-treating mild presentations' }),
      O('c', 'Selecting whichever specific intervention she personally finds the most appealing after reading about the various options', 0,
        { r: 'Preference matters but is not the driver', approach: 'Preference-only', why: 'Severity, not appeal, sets the step', keys: ['shared decision input'], mistake: 'Letting preference override severity' }),
      O('d', 'Choosing the least costly option available regardless of how severe her symptoms or functional impairment turn out to be', -1,
        { r: 'Cost cannot override clinical need', approach: 'Cost-driven choice', why: 'Care must match severity, not just price', keys: ['clinical indication'], mistake: 'Letting cost dictate intensity' }),
    ]),
    Q('q8', 'treatment', 'A central CBT target for her chronic worry would most appropriately be:', ['R3'], [
      O('a', 'Building tolerance for uncertainty so she can reduce the reassurance-seeking and mental checking that feed the worry', 3,
        { r: 'Target intolerance of uncertainty', approach: 'Address the maintaining process', why: 'Uncertainty intolerance maintains GAD worry', keys: ['rehearsing what could go wrong'], mistake: 'Treating only surface content' }),
      O('b', 'Helping her construct detailed, fully worked-out backup plans for each and every specific catastrophe she worries about', -1,
        { r: 'Planning every fear feeds the worry', approach: 'Exhaustive contingency planning', why: 'It reinforces the need for certainty', keys: ['reassurance-seeking'], mistake: 'Accommodating the worry process' }),
      O('c', 'Encouraging her to firmly suppress and push away anxious thoughts the moment that any of them happen to enter her mind', -2,
        { r: 'Thought suppression backfires', approach: 'Thought suppression', why: 'Suppression increases intrusions', keys: ['rebound effect'], mistake: 'Teaching counterproductive control' }),
      O('d', 'Teaching her to distract herself with absorbing activities whenever she notices that her worry is beginning to build up', -1,
        { r: 'Distraction is avoidance, not exposure', approach: 'Distraction coping', why: 'It prevents new learning about worry', keys: ['avoidance maintains anxiety'], mistake: 'Relying on distraction as treatment' }),
    ]),
    Q('q9', 'counseling', 'How should the counselor introduce psychoeducation about worry early in treatment?', ['R2'], [
      O('a', 'Explain how the worry cycle is maintained and frame the planned skills as ways to interrupt that self-reinforcing loop', 3,
        { r: 'Connect the model to the plan', approach: 'Educate and orient', why: 'Understanding the cycle motivates skill use', keys: ['needs a rationale'], mistake: 'Teaching skills without rationale' }),
      O('b', 'Tell her plainly that worry is completely useless and that the goal of treatment is to stop her from ever worrying again', -1,
        { r: 'Eliminating all worry is unrealistic', approach: 'Total eradication framing', why: 'The goal is manageable, not zero, worry', keys: ['adaptive vs excessive worry'], mistake: 'Setting an impossible standard' }),
      O('c', 'Provide her with a stack of detailed reading on anxiety neurobiology and ask her to master it before the next session', 0,
        { r: 'Heavy reading is not psychoeducation', approach: 'Information dump', why: 'Tailored explanation beats a reading load', keys: ['collaborative pacing'], mistake: 'Overloading instead of explaining' }),
      O('d', 'Reassure her repeatedly that the specific things she is worried about are statistically very unlikely to actually occur', -1,
        { r: 'Reassurance feeds the worry cycle', approach: 'Probability reassurance', why: 'It strengthens reassurance-seeking', keys: ['reassurance dependence'], mistake: 'Reinforcing the maintaining behavior' }),
    ]),
    Q('q10', 'counseling', 'Priya completes little homework, saying she is “too busy worrying.” What is the best response?', ['R3'], [
      O('a', 'Explore the barriers collaboratively and right-size the assignments so they fit realistically into her current week', 3,
        { r: 'Problem-solve barriers collaboratively', approach: 'Adjust and engage', why: 'Tailoring homework improves adherence', keys: ['low completion', 'high worry load'], mistake: 'Blaming the client for non-adherence' }),
      O('b', 'Warn her that treatment simply cannot succeed and is unlikely to help her at all unless she completes every assignment', -1,
        { r: 'Threatening adherence harms alliance', approach: 'Pressure compliance', why: 'It damages collaboration', keys: ['engagement problem'], mistake: 'Using pressure instead of problem-solving' }),
      O('c', 'Quietly drop homework from the treatment entirely and rely only on the in-session conversation to produce all the change', -1,
        { r: 'Dropping practice weakens CBT', approach: 'Abandon between-session work', why: 'Practice is central to CBT gains', keys: ['skills need rehearsal'], mistake: 'Removing a core ingredient' }),
      O('d', 'Assign her a noticeably larger and more demanding set of exercises so that she will feel obligated to finally complete them', -2,
        { r: 'Increasing load worsens adherence', approach: 'Escalate demands', why: 'Bigger tasks reduce completion further', keys: ['overwhelmed client'], mistake: 'Responding to overload with more load' }),
    ]),
    Q('q11', 'counseling', 'Priya worries aloud that needing therapy means she is fundamentally weak. Best response?', ['R3'], [
      O('a', 'Validate the feeling and reframe seeking help as an active, courageous step toward managing a treatable condition', 3,
        { r: 'Validate then reframe help-seeking', approach: 'Normalize and reframe', why: 'Reframing reduces shame and supports engagement', keys: ['shame about needing help'], mistake: 'Either dismissing or reinforcing the belief' }),
      O('b', 'Agree that most people really do manage this kind of thing on their own and gently commend her for finally reaching out', -2,
        { r: 'Endorsing weakness deepens shame', approach: 'Confirm the belief', why: 'It reinforces the stigma she fears', keys: ['self-stigma'], mistake: 'Colluding with the self-judgment' }),
      O('c', 'Move past the comment quickly and steer the session back toward reviewing the cognitive worksheet she completed this week', -1,
        { r: 'Bypassing the belief misses a target', approach: 'Redirect to task', why: 'Self-stigma is clinically relevant', keys: ['unaddressed cognition'], mistake: 'Avoiding emotionally salient material' }),
      O('d', 'Present her with detailed statistics on how many millions of adults seek anxiety treatment every year across the country', -1,
        { r: 'Facts alone rarely shift shame', approach: 'Statistical persuasion', why: 'Validation works better than data here', keys: ['emotional reasoning'], mistake: 'Answering emotion with numbers' }),
    ]),
    Q('q12', 'ethics', 'Priya asks the counselor to also begin treating her teenage son’s school anxiety. Best response?', ['R5'], [
      O('a', 'Assess whether treating her son is within competence and avoid a dual relationship, referring out if either is a concern', 3,
        { r: 'Weigh competence and dual roles', approach: 'Protect scope and boundaries', why: 'ACA C.2. and boundary standards govern this', keys: ['competence', 'role conflict'], mistake: 'Accepting work outside competence or role' }),
      O('b', 'Agree right away since she already knows the family well and it would clearly be far more convenient for everyone involved', -2,
        { r: 'Convenience ignores boundary risk', approach: 'Accept for convenience', why: 'It creates a dual relationship', keys: ['role conflict'], mistake: 'Letting convenience override ethics' }),
      O('c', 'Decline flatly and explain that counselors are never permitted to provide any services to more than one family member', -1,
        { r: 'A blanket ban overstates the rule', approach: 'Absolute refusal', why: 'The decision depends on competence and roles', keys: ['nuanced judgment'], mistake: 'Applying a rigid, inaccurate rule' }),
      O('d', 'Offer to quietly give the son some informal advice between Priya’s sessions without opening a separate clinical record', -2,
        { r: 'Informal treatment is unethical', approach: 'Off-the-record care', why: 'It bypasses consent and documentation', keys: ['no informed consent'], mistake: 'Providing undocumented services' }),
    ]),
    Q('q13', 'ethics', 'Midway through treatment Priya’s worry now centers on intrusive, distressing contamination fears with rituals. Best step?', ['R5'], [
      O('a', 'Reassess the diagnosis and, if obsessive-compulsive symptoms predominate, refer to or consult for specialized OCD care', 3,
        { r: 'Reassess and match competence to need', approach: 'Re-evaluate and refer', why: 'ACA C.2. requires practicing within competence', keys: ['new rituals', 'shifting picture'], mistake: 'Continuing a now-mismatched plan' }),
      O('b', 'Continue with the original generalized-anxiety plan unchanged because she is already established and engaged in the work', -1,
        { r: 'Ignoring new symptoms is an error', approach: 'Stay the course', why: 'The clinical picture has changed materially', keys: ['emerging OCD features'], mistake: 'Failing to revisit the formulation' }),
      O('c', 'Tell her the new symptoms are simply another expression of her worry and require no change at all to the treatment plan', -1,
        { r: 'Collapsing OCD into worry is inaccurate', approach: 'Over-generalize the diagnosis', why: 'OCD warrants a distinct approach', keys: ['rituals present'], mistake: 'Forcing new data into the old frame' }),
      O('d', 'Immediately terminate the counseling relationship and instruct her to find an entirely new provider on her own without help', -2,
        { r: 'Abrupt abandonment is unethical', approach: 'Abandon the client', why: 'Referral must be coordinated, not abrupt', keys: ['continuity of care'], mistake: 'Abandoning rather than coordinating' }),
    ]),
  ],
};

// ============================================================================
// D107 — Posttraumatic Stress Disorder (F43.10) — Trauma — medium
// ============================================================================
const D107 = {
  id: 'D107',
  title: 'Nightmares and hypervigilance after a highway collision',
  category: 'Trauma',
  difficulty: 'medium',
  primaryDiagnosis: { name: 'Posttraumatic Stress Disorder', code: 'F43.10' },
  diagnosis: { name: 'Posttraumatic Stress Disorder', code: 'F43.10' },
  differentialOptions: [
    { id: 'do1', name: 'Posttraumatic Stress Disorder', isCorrect: true },
    { id: 'do2', name: 'Acute Stress Disorder', isCorrect: false },
    { id: 'do3', name: 'Adjustment Disorder, with Anxiety', isCorrect: false },
    { id: 'do4', name: 'Major Depressive Disorder, Moderate', isCorrect: false },
  ],
  narrative: {
    intake:
      'Marcus Bell, a 29-year-old delivery driver, presents four months after surviving a highway collision in which a ' +
      'passenger died, reporting nightmares, intrusive images of the crash, and intense fear whenever he must drive on a freeway.',
    session1:
      'He avoids the highway entirely, feels emotionally numb with friends, startles at sudden sounds, and sleeps poorly; ' +
      'he describes himself as constantly on guard and says he no longer believes the world is a safe place.',
    session2:
      'He blames himself for the passenger’s death even though he was not at fault, and admits to occasional thoughts that ' +
      'he would be better off dead, though he denies any plan or intent and wants help getting his life back.',
  },
  diagnosticRationale:
    'Following exposure to actual death and threatened serious injury, intrusion symptoms, persistent avoidance, negative ' +
    'alterations in cognition and mood, and marked arousal have lasted more than one month with significant impairment, ' +
    'meeting DSM-5-TR criteria for posttraumatic stress disorder rather than acute stress disorder or an adjustment disorder.',
  references: [
    { id: 'R1', source: 'DSM-5-TR', detail: 'PTSD criteria: Criterion A exposure plus intrusion, avoidance, cognition/mood, and arousal for 1+ month' },
    { id: 'R2', source: 'VA/DoD CPG', detail: 'PTSD guideline: trauma-focused psychotherapies (CPT, PE) as first-line treatment' },
    { id: 'R3', source: 'APA CPG', detail: 'PTSD guideline strongly recommending trauma-focused CBT approaches' },
    { id: 'R4', source: 'C-SSRS', detail: 'Structured suicide-risk screening given elevated risk in PTSD' },
    { id: 'R5', source: 'ACA Code of Ethics', detail: 'A.1. and C.2.: client welfare and practicing within competence' },
  ],
  questions: [
    Q('q1', 'intake', 'What must the counselor confirm to establish Criterion A for posttraumatic stress disorder?', ['R1'], [
      O('a', 'That he was directly exposed to actual or threatened death or serious injury during the collision he survived', 3,
        { r: 'Confirm the qualifying exposure', approach: 'Establish Criterion A', why: 'PTSD requires a qualifying trauma exposure', keys: ['passenger died', 'survived the crash'], mistake: 'Assuming any stressor qualifies' }),
      O('b', 'That the collision was objectively the single most frightening and overwhelming experience of his entire life so far', -1,
        { r: 'Worst-ever is not the standard', approach: 'Severity-ranking framing', why: 'Criterion A is about exposure type, not ranking', keys: ['qualifying exposure'], mistake: 'Adding a threshold the criteria do not require' }),
      O('c', 'That he has been unable to recall any of the specific details of the crash itself since the day it originally happened', -1,
        { r: 'Amnesia is a possible symptom, not Criterion A', approach: 'Amnesia framing', why: 'Dissociative amnesia is a symptom, not the exposure test', keys: ['exposure confirmed'], mistake: 'Confusing a symptom with the stressor criterion' }),
      O('d', 'That his most distressing symptoms specifically began on the very same calendar day that the collision took place', 0,
        { r: 'Immediate onset is not required', approach: 'Onset-timing framing', why: 'Symptoms can emerge later; onset day is not Criterion A', keys: ['delayed expression possible'], mistake: 'Requiring same-day onset' }),
    ]),
    Q('q2', 'core', 'Which feature most clearly supports PTSD rather than acute stress disorder at this point?', ['R1'], [
      O('a', 'That the full symptom picture has now persisted for more than one month beyond the traumatic collision itself', 3,
        { r: 'Duration over one month distinguishes PTSD', approach: 'Apply the duration rule', why: 'ASD is 3 days to 1 month; PTSD exceeds a month', keys: ['four months of symptoms'], mistake: 'Confusing PTSD with acute stress' }),
      O('b', 'That he continues to experience vivid, distressing dreams replaying parts of the crash several nights every single week', -1,
        { r: 'Nightmares occur in both disorders', approach: 'Symptom-presence framing', why: 'Intrusion symptoms do not separate ASD from PTSD', keys: ['shared symptom'], mistake: 'Using a shared symptom to differentiate' }),
      O('c', 'That he reports feeling detached and emotionally numb when he is spending time around his close friends and family', -1,
        { r: 'Numbing appears in both', approach: 'Dissociation framing', why: 'Numbing does not distinguish the two', keys: ['shared feature'], mistake: 'Relying on a nonspecific symptom' }),
      O('d', 'That his level of avoidance of highways appears to be steadily worsening rather than gradually improving across the months', 0,
        { r: 'Worsening course is not the criterion', approach: 'Trajectory framing', why: 'Duration, not trend, separates the disorders', keys: ['persistent avoidance'], mistake: 'Using trajectory instead of duration' }),
    ]),
    Q('q3', 'core', 'Given his self-blame and statement that the world is unsafe, which symptom cluster is most evident?', ['R1'], [
      O('a', 'Negative alterations in cognition and mood, including distorted self-blame and persistent negative beliefs about the world', 3,
        { r: 'Identify the cognition/mood cluster', approach: 'Map symptoms to clusters', why: 'Self-blame and negative worldview define this cluster', keys: ['blames himself', 'world is unsafe'], mistake: 'Misfiling cognitions under arousal' }),
      O('b', 'Marked alterations in arousal and reactivity, shown most clearly by his exaggerated startle and his disrupted sleep', -1,
        { r: 'Arousal is present but not what is asked', approach: 'Arousal framing', why: 'Self-blame belongs to cognition/mood, not arousal', keys: ['startle is arousal'], mistake: 'Assigning cognitions to the wrong cluster' }),
      O('c', 'Persistent and effortful avoidance of the external reminders that are most strongly associated with the original trauma', -1,
        { r: 'Avoidance is a different cluster', approach: 'Avoidance framing', why: 'Beliefs are cognition/mood, not avoidance', keys: ['avoids highways'], mistake: 'Confusing belief content with avoidance' }),
      O('d', 'Recurrent intrusion symptoms, most evident in the unwanted images of the crash that keep pushing into his awareness', -1,
        { r: 'Intrusions are a separate cluster', approach: 'Intrusion framing', why: 'Self-blame is not an intrusion symptom', keys: ['intrusive images'], mistake: 'Mislabeling cognitions as intrusions' }),
    ]),
    Q('q4', 'core', 'Given his passive thoughts of being better off dead, the most appropriate step is to:', ['R4'], [
      O('a', 'Conduct a structured suicide-risk assessment, recognizing that PTSD elevates risk, and clarify intent and plan', 3,
        { r: 'Assess elevated risk directly', approach: 'Screen risk with structure', why: 'PTSD raises suicide risk; structured screening is indicated', keys: ['passive ideation', 'self-blame'], mistake: 'Overlooking risk amid trauma symptoms' }),
      O('b', 'Treat the comment as an understandable and ultimately harmless part of ordinary grief after losing someone in the crash', -2,
        { r: 'Normalizing away ideation is unsafe', approach: 'Minimize as grief', why: 'It forecloses needed risk assessment', keys: ['unassessed ideation'], mistake: 'Dismissing ideation as grief' }),
      O('c', 'Move ahead with planning exposure-based trauma work first, on the assumption that resolving the trauma will lift the thoughts', -1,
        { r: 'Risk must be assessed before this', approach: 'Treatment-first framing', why: 'Safety assessment precedes exposure planning', keys: ['active disclosure'], mistake: 'Sequencing treatment ahead of safety' }),
      O('d', 'Ask him to sign a brief agreement promising to stay safe and to call the office if the thoughts get any worse this week', -2,
        { r: 'No-suicide contracts are not evidence-based', approach: 'No-harm contract', why: 'Contracts do not reduce risk or assess it', keys: ['needs safety planning'], mistake: 'Substituting a contract for assessment' }),
    ]),
    Q('q5', 'intake', 'What co-occurring condition is most important to screen for to inform the treatment plan?', ['R1'], [
      O('a', 'Co-occurring depression and substance use, which are common with PTSD and shape sequencing and safety planning', 3,
        { r: 'Screen common PTSD comorbidities', approach: 'Assess co-occurring conditions', why: 'Depression and SUD frequently accompany PTSD', keys: ['numbing', 'self-blame'], mistake: 'Treating PTSD in isolation' }),
      O('b', 'An underlying long-standing attention-deficit disorder that could account for the concentration problems he now reports', -1,
        { r: 'ADHD is an unlikely priority here', approach: 'Neurodevelopmental framing', why: 'Concentration issues fit PTSD itself', keys: ['trauma-linked inattention'], mistake: 'Chasing an improbable comorbidity' }),
      O('c', 'A previously undetected primary psychotic disorder that might better explain his sense that the world is now unsafe', -1,
        { r: 'Psychosis is not indicated', approach: 'Psychosis framing', why: 'His beliefs are trauma-congruent, not delusional', keys: ['reality testing intact'], mistake: 'Over-reading trauma cognitions as psychosis' }),
      O('d', 'An emerging personality disorder that could explain why he continues to blame himself for an accident that was not his fault', 0,
        { r: 'Personality pathology is not indicated', approach: 'Personality framing', why: 'Self-blame here is a PTSD cognition', keys: ['trauma-related guilt'], mistake: 'Pathologizing a trauma symptom' }),
    ]),
    Q('q6', 'treatment', 'What is the most appropriate first-line treatment recommendation for his PTSD?', ['R2'], [
      O('a', 'A trauma-focused psychotherapy such as cognitive processing therapy or prolonged exposure delivered by a trained clinician', 3,
        { r: 'Trauma-focused therapy is first-line', approach: 'Apply the guideline', why: 'VA/DoD CPG prioritizes CPT and PE', keys: ['PTSD diagnosis'], mistake: 'Choosing non-trauma-focused care' }),
      O('b', 'Ongoing general supportive counseling that deliberately steers around the trauma so that he is never made to feel distress', -1,
        { r: 'Avoiding the trauma underperforms', approach: 'Avoidant supportive care', why: 'Trauma-focused work outperforms avoidance', keys: ['needs processing'], mistake: 'Accommodating avoidance as treatment' }),
      O('c', 'Immediate, intensive exposure to highway driving in the very first sessions before any stabilization or skill-building work', -2,
        { r: 'Unprepared flooding can retraumatize', approach: 'Premature flooding', why: 'Exposure follows preparation and pacing', keys: ['no stabilization yet'], mistake: 'Skipping preparation before exposure' }),
      O('d', 'A primarily psychodynamic exploration of his early childhood relationships as the main route to resolving the crash trauma', 0,
        { r: 'Not first-line for PTSD', approach: 'Depth-only exploration', why: 'Evidence favors trauma-focused CBT', keys: ['index trauma is recent'], mistake: 'Prioritizing origins over trauma processing' }),
    ]),
    Q('q7', 'treatment', 'Before beginning exposure-based work, what should the treatment plan prioritize?', ['R2'], [
      O('a', 'Establishing safety, psychoeducation, and emotion-regulation skills so he can tolerate processing the trauma memories', 3,
        { r: 'Stabilize before processing', approach: 'Sequence with stabilization', why: 'Preparation supports tolerating exposure', keys: ['hyperarousal', 'sleep disruption'], mistake: 'Beginning exposure without preparation' }),
      O('b', 'Securing his firm written commitment that he will not drop out of treatment no matter how distressing it becomes for him', -1,
        { r: 'Coerced commitment is not preparation', approach: 'Compliance contract', why: 'Stabilization, not a pledge, enables exposure', keys: ['needs skills'], mistake: 'Confusing a pledge with readiness' }),
      O('c', 'Having him write out an extremely detailed minute-by-minute account of the crash to read aloud in the very next session', -1,
        { r: 'Detailed account is the exposure, not the prep', approach: 'Premature narrative exposure', why: 'That step follows stabilization', keys: ['no regulation skills yet'], mistake: 'Starting exposure before readiness' }),
      O('d', 'Scheduling him to drive on the highway between sessions right away so he can begin facing the fear as soon as possible', -2,
        { r: 'Unstructured self-exposure can backfire', approach: 'Unsupported in-vivo exposure', why: 'Exposure must be planned and paced', keys: ['no preparation'], mistake: 'Assigning unsupported confrontation' }),
    ]),
    Q('q8', 'treatment', 'Marcus asks whether medication could help. The most appropriate counselor action is to:', ['R5'], [
      O('a', 'Coordinate a referral to a prescriber for evaluation while continuing the trauma-focused therapy within his own scope', 3,
        { r: 'Refer and coordinate within scope', approach: 'Coordinate care', why: 'Counselors refer for medication rather than prescribe', keys: ['client asks about meds'], mistake: 'Giving prescriptive advice' }),
      O('b', 'Recommend the specific class of medication that tends to work best for trauma survivors with his particular symptom mix', -2,
        { r: 'Selecting a drug exceeds scope', approach: 'Prescriptive advice', why: 'Medication selection is outside counselor scope', keys: ['no prescriptive authority'], mistake: 'Overstepping professional limits' }),
      O('c', 'Discourage medication firmly and explain that it will likely interfere with his ability to fully process the trauma in therapy', -1,
        { r: 'Discouraging meds overreaches', approach: 'Discourage medication', why: 'That medical judgment belongs to a prescriber', keys: ['client autonomy'], mistake: 'Steering a medical decision' }),
      O('d', 'Tell him medication is rarely needed and that he should be able to manage everything through the trauma-focused work alone', -1,
        { r: 'Minimizing options is inappropriate', approach: 'Dismiss medication', why: 'The option deserves proper evaluation', keys: ['needs prescriber input'], mistake: 'Foreclosing a reasonable option' }),
    ]),
    Q('q9', 'counseling', 'During a session Marcus becomes flooded and hyperaroused while describing the crash. Best response?', ['R3'], [
      O('a', 'Pause the recounting and guide him through grounding to bring arousal down before deciding whether to continue', 3,
        { r: 'Ground and titrate within the window', approach: 'Regulate arousal first', why: 'Staying within tolerance supports processing', keys: ['flooded', 'hyperaroused'], mistake: 'Pushing through overwhelming arousal' }),
      O('b', 'Encourage him to keep pushing all the way through the full memory right now so that he does not reinforce his avoidance', -1,
        { r: 'Pushing past tolerance can retraumatize', approach: 'Power through framing', why: 'Exceeding the window impairs learning', keys: ['outside tolerance'], mistake: 'Mistaking flooding for exposure' }),
      O('c', 'End the session immediately and send him home early so that he has time to fully calm down on his own before next week', -1,
        { r: 'Abruptly ending models avoidance', approach: 'Escape the distress', why: 'Co-regulating in session is preferable', keys: ['needs containment'], mistake: 'Reinforcing escape from affect' }),
      O('d', 'Quickly change the subject to something pleasant and keep things light for the rest of the session to protect him from distress', -1,
        { r: 'Total avoidance prevents new learning', approach: 'Distract and avoid', why: 'Grounding, not avoidance, is indicated', keys: ['avoidance trap'], mistake: 'Avoiding all affect rather than titrating' }),
    ]),
    Q('q10', 'counseling', 'Marcus says talking about the crash is pointless because “what happened can’t be undone.” Best response?', ['R3'], [
      O('a', 'Validate the loss and clarify that the goal is to change how the memory affects him now, not to undo the event itself', 3,
        { r: 'Validate and reframe the goal', approach: 'Reframe the aim of therapy', why: 'Processing changes the present impact of the memory', keys: ['hopeless about therapy', 'self-blame'], mistake: 'Arguing rather than reframing' }),
      O('b', 'Agree that since the past cannot be changed the most realistic plan is simply to help him accept and live with the symptoms', -2,
        { r: 'Conceding undercuts treatable change', approach: 'Concede the hopelessness', why: 'It abandons an effective intervention', keys: ['therapeutic pessimism'], mistake: 'Adopting the client’s hopeless framing' }),
      O('c', 'Explain at length the neuroscience of memory reconsolidation to convince him on technical grounds that change is possible', -1,
        { r: 'Lecturing rarely shifts hopelessness', approach: 'Didactic persuasion', why: 'Experiential evidence works better', keys: ['emotional reasoning'], mistake: 'Substituting explanation for engagement' }),
      O('d', 'Redirect him toward concrete behavioral goals for the week and avoid revisiting the crash narrative for the time being', -1,
        { r: 'Avoiding the memory stalls processing', approach: 'Behavioral redirection', why: 'The trauma narrative is a core target', keys: ['avoidance'], mistake: 'Sidestepping the central work' }),
    ]),
    Q('q11', 'counseling', 'How should the counselor frame his avoidance of highways during early treatment?', ['R3'], [
      O('a', 'Explain that avoidance reduces fear briefly but maintains the PTSD, and plan gradual, supported approach over time', 3,
        { r: 'Name avoidance as a maintaining factor', approach: 'Educate on avoidance', why: 'Avoidance maintains trauma symptoms', keys: ['avoids the highway'], mistake: 'Endorsing avoidance as coping' }),
      O('b', 'Reassure him that it is completely fine to keep avoiding all highways indefinitely as long as he can still get to his job', -1,
        { r: 'Endorsing avoidance maintains PTSD', approach: 'Accommodate avoidance', why: 'It prevents corrective learning', keys: ['avoidance trap'], mistake: 'Reinforcing the maintaining behavior' }),
      O('c', 'Insist that he immediately drive the exact stretch of highway where the original collision took place to confront the fear', -2,
        { r: 'Premature flooding is harmful', approach: 'Force confrontation', why: 'Exposure must be graded and prepared', keys: ['no stabilization'], mistake: 'Skipping graded, prepared exposure' }),
      O('d', 'Tell him the avoidance is not really a clinical problem and that it will most likely fade away on its own given enough time', -1,
        { r: 'Avoidance rarely self-resolves', approach: 'Wait-it-out framing', why: 'Untreated avoidance tends to persist', keys: ['chronic avoidance'], mistake: 'Assuming spontaneous remission' }),
    ]),
    Q('q12', 'ethics', 'Marcus reveals the other driver has sued him and asks the counselor to testify that he is not to blame. Best response?', ['R5'], [
      O('a', 'Clarify the boundary between a treating and a forensic role and explain why combining them could harm both his care and the case', 3,
        { r: 'Avoid mixing treating and forensic roles', approach: 'Protect role boundaries', why: 'ACA standards caution against dual roles', keys: ['litigation', 'role conflict'], mistake: 'Blurring clinical and forensic roles' }),
      O('b', 'Agree to testify that he was not at fault, since supporting his account is clearly in the best interest of his recovery', -2,
        { r: 'Taking a forensic stance harms care', approach: 'Become an advocate witness', why: 'It compromises objectivity and the alliance', keys: ['dual-role harm'], mistake: 'Conflating support with forensic opinion' }),
      O('c', 'Refuse any involvement at all and decline to even provide his existing records if his attorney later requests them with consent', -1,
        { r: 'Blanket refusal overstates the limit', approach: 'Total refusal', why: 'Records may be released with proper consent', keys: ['consent process'], mistake: 'Withholding beyond what ethics require' }),
      O('d', 'Offer to write a detailed letter to the court describing exactly what happened in the collision based on what he has told you', -2,
        { r: 'A causation letter exceeds the role', approach: 'Forensic opinion-giving', why: 'It assumes a forensic role he should avoid', keys: ['not a forensic evaluator'], mistake: 'Issuing opinions outside the treating role' }),
    ]),
    Q('q13', 'ethics', 'Marcus says he feels comfortable only with the counselor and asks to text at any hour when distressed. Best response?', ['R5'], [
      O('a', 'Collaboratively set clear availability and crisis procedures, including emergency resources, while maintaining workable boundaries', 3,
        { r: 'Set boundaries plus a crisis plan', approach: 'Structure availability and safety', why: 'Clear boundaries with crisis resources protect both parties', keys: ['risk history', 'dependence on counselor'], mistake: 'Either unlimited access or no safety net' }),
      O('b', 'Agree to be personally available by text around the clock so that he always feels supported and never has to feel alone', -2,
        { r: 'Unlimited access is unsustainable and unsafe', approach: 'Boundless availability', why: 'It fosters dependence and clinician burnout', keys: ['no boundaries'], mistake: 'Overextending personal availability' }),
      O('c', 'Tell him that you cannot be reached between sessions for any reason and that he must simply wait until the next appointment', -1,
        { r: 'No crisis plan ignores his risk', approach: 'Rigid unavailability', why: 'His risk profile requires crisis resources', keys: ['suicidal ideation history'], mistake: 'Leaving a high-risk client without resources' }),
      O('d', 'Give him your personal cell number and encourage him to reach out directly whenever he feels he really needs to talk it through', -1,
        { r: 'Personal access blurs boundaries', approach: 'Personal-number access', why: 'It erodes professional boundaries', keys: ['boundary diffusion'], mistake: 'Replacing structure with personal access' }),
    ]),
  ],
};

// ============================================================================
// D108 — Alcohol Use Disorder, Moderate (F10.20) — Substance — medium
// ============================================================================
const D108 = {
  id: 'D108',
  title: 'Ambivalence about drinking after a workplace warning',
  category: 'Substance',
  difficulty: 'medium',
  primaryDiagnosis: { name: 'Alcohol Use Disorder, Moderate', code: 'F10.20' },
  diagnosis: { name: 'Alcohol Use Disorder, Moderate', code: 'F10.20' },
  differentialOptions: [
    { id: 'do1', name: 'Alcohol Use Disorder, Moderate', isCorrect: true },
    { id: 'do2', name: 'Alcohol Use Disorder, Severe', isCorrect: false },
    { id: 'do3', name: 'Major Depressive Disorder, Moderate', isCorrect: false },
    { id: 'do4', name: 'Adjustment Disorder, with Depressed Mood', isCorrect: false },
  ],
  narrative: {
    intake:
      'Linda Garcia, a 52-year-old high school teacher, presents after a formal warning at work for the smell of alcohol, ' +
      'reporting that she drinks most evenings to unwind, has tried to cut back several times, and feels she may have a problem.',
    session1:
      'She describes needing more drinks than before to feel relaxed, drinking more than she intends, and giving up evening ' +
      'activities she used to enjoy; she has had morning shakiness on a few occasions but no seizures or confusion.',
    session2:
      'She is ambivalent, alternating between wanting to quit for her job and her grandchildren and doubting she can manage ' +
      'evenings without alcohol; she denies daily morning drinking and has never required medical detoxification before.',
  },
  diagnosticRationale:
    'Four to five DSM-5-TR alcohol use disorder criteria are present—tolerance, drinking more than intended, repeated ' +
    'unsuccessful attempts to cut down, giving up activities, and continued use despite occupational consequences—placing ' +
    'severity in the moderate range, with mild withdrawal signs but no history of complicated withdrawal or detoxification.',
  references: [
    { id: 'R1', source: 'DSM-5-TR', detail: 'AUD criteria and severity thresholds: 2-3 mild, 4-5 moderate, 6+ severe' },
    { id: 'R2', source: 'ASAM Criteria', detail: 'Multidimensional level-of-care and withdrawal-risk determination' },
    { id: 'R3', source: 'SAMHSA TIP 35', detail: 'Enhancing motivation and stage-matched intervention for substance use' },
    { id: 'R4', source: 'Miller & Rollnick (MI)', detail: 'Motivational interviewing spirit: rolling with resistance, developing discrepancy' },
    { id: 'R5', source: 'Transtheoretical Model', detail: 'Stages of change guiding stage-matched intervention' },
    { id: 'R6', source: 'ACA Code of Ethics', detail: 'B.1. confidentiality and its limits in employment-related contexts' },
  ],
  questions: [
    Q('q1', 'intake', 'What is most important for the counselor to establish to confirm a moderate alcohol use disorder?', ['R1'], [
      O('a', 'The specific number of DSM-5-TR criteria she meets, since four to five place severity in the moderate range', 3,
        { r: 'Criterion count sets severity', approach: 'Apply the severity threshold', why: 'DSM-5-TR grades AUD by criterion count', keys: ['tolerance', 'drinks more than intended'], mistake: 'Estimating severity by volume alone' }),
      O('b', 'The exact total number of standard alcoholic drinks that she typically consumes over the course of an average week', -1,
        { r: 'Quantity alone does not set the diagnosis', approach: 'Volume framing', why: 'Severity rests on criteria, not amount', keys: ['criteria-based'], mistake: 'Equating quantity with severity' }),
      O('c', 'Whether she personally believes and is willing to openly admit that her current drinking has truly become a real problem', 0,
        { r: 'Insight aids treatment, not the diagnosis', approach: 'Insight framing', why: 'Self-labeling is not a diagnostic criterion', keys: ['ambivalence'], mistake: 'Requiring the client to self-diagnose' }),
      O('d', 'Whether anyone else in her immediate family has previously struggled with alcohol or another substance-related condition', -1,
        { r: 'Family history is risk, not diagnosis', approach: 'Heredity framing', why: 'History informs risk, not current criteria', keys: ['no family data'], mistake: 'Using family history to diagnose' }),
    ]),
    Q('q2', 'core', 'Which finding most clearly supports a moderate rather than severe alcohol use disorder?', ['R1'], [
      O('a', 'That she meets roughly four to five criteria with mild withdrawal signs but no history of complicated withdrawal', 3,
        { r: 'Four to five criteria define moderate', approach: 'Count and grade severity', why: 'Six or more criteria would indicate severe', keys: ['mild morning shakiness'], mistake: 'Over- or under-rating severity' }),
      O('b', 'That she clearly experiences a strong craving for alcohol on most evenings when she first arrives home from work', -1,
        { r: 'Craving occurs across severity levels', approach: 'Single-symptom framing', why: 'Craving alone does not set severity', keys: ['nonspecific symptom'], mistake: 'Reading one symptom as the severity marker' }),
      O('c', 'That her drinking has now led to a single formal disciplinary warning from her employer over the course of this year', -1,
        { r: 'One consequence is not the severity test', approach: 'Consequence-count framing', why: 'Severity rests on the full criterion count', keys: ['occupational consequence'], mistake: 'Grading severity by one event' }),
      O('d', 'That she still manages to maintain her full-time teaching job and most of her important everyday family responsibilities', 0,
        { r: 'Preserved function does not define moderate', approach: 'Functioning framing', why: 'Function is not the DSM severity criterion', keys: ['still working'], mistake: 'Substituting functioning for criterion count' }),
    ]),
    Q('q3', 'core', 'Given her morning shakiness, what assessment is most important before planning treatment?', ['R2'], [
      O('a', 'Assess withdrawal risk and medical safety to determine whether supervised detoxification or medical evaluation is needed', 3,
        { r: 'Screen withdrawal and medical safety', approach: 'Assess level of care', why: 'ASAM guides withdrawal-risk and care-level decisions', keys: ['morning shakiness'], mistake: 'Planning psychosocial care without a safety screen' }),
      O('b', 'Determine the precise brand and proof of the alcoholic beverages that she most commonly chooses to drink in the evenings', -1,
        { r: 'Beverage type is low yield', approach: 'Product-detail framing', why: 'It does not assess withdrawal risk', keys: ['safety unassessed'], mistake: 'Collecting irrelevant detail' }),
      O('c', 'Explore in depth the early family-of-origin experiences that she believes first shaped her current relationship with alcohol', 0,
        { r: 'History is secondary to safety now', approach: 'Origins framing', why: 'Medical safety takes priority first', keys: ['withdrawal signs'], mistake: 'Prioritizing depth over safety' }),
      O('d', 'Identify the particular emotional triggers and stressful situations that tend to prompt her heaviest drinking episodes', -1,
        { r: 'Trigger work is for later planning', approach: 'Trigger framing', why: 'It does not address withdrawal risk', keys: ['safety first'], mistake: 'Skipping the medical rule-out' }),
    ]),
    Q('q4', 'core', 'How should the counselor best understand Linda’s back-and-forth about quitting?', ['R5'], [
      O('a', 'As normal ambivalence consistent with the contemplation stage of change rather than a lack of genuine motivation', 3,
        { r: 'Frame ambivalence as a stage', approach: 'Stage the readiness', why: 'The Transtheoretical Model frames this as contemplation', keys: ['wants to quit yet doubts'], mistake: 'Reading ambivalence as resistance' }),
      O('b', 'As a clear sign that she is firmly in denial and is not yet truly ready to engage in any meaningful treatment at all', -2,
        { r: 'Labeling denial misreads the stage', approach: 'Denial framing', why: 'Ambivalence is expected, not denial', keys: ['contemplation'], mistake: 'Pathologizing normal ambivalence' }),
      O('c', 'As evidence that she is already firmly in the action stage and is therefore ready to commit to complete abstinence today', -1,
        { r: 'Overestimating readiness misfires', approach: 'Over-staging framing', why: 'She has not resolved ambivalence yet', keys: ['still deciding'], mistake: 'Pushing action prematurely' }),
      O('d', 'As proof that an untreated underlying depressive disorder, rather than the drinking itself, is the real core of the problem', -1,
        { r: 'Premature reattribution is an error', approach: 'Reattribution framing', why: 'Ambivalence does not establish depression as primary', keys: ['no mood workup'], mistake: 'Explaining away the substance problem' }),
    ]),
    Q('q5', 'intake', 'What co-occurring issue is most important to screen for to inform her plan?', ['R1'], [
      O('a', 'A co-occurring depressive disorder, since mood symptoms commonly accompany alcohol use and shape treatment sequencing', 3,
        { r: 'Screen for co-occurring depression', approach: 'Assess comorbidity', why: 'Mood disorders frequently co-occur with AUD', keys: ['drinks to unwind', 'gave up activities'], mistake: 'Treating AUD without screening mood' }),
      O('b', 'A previously undetected primary psychotic disorder that might better account for her difficulties at work and at home', -1,
        { r: 'Psychosis is not indicated', approach: 'Psychosis framing', why: 'Nothing in the picture suggests psychosis', keys: ['intact reality testing'], mistake: 'Pursuing an unsupported rule-out' }),
      O('c', 'A long-standing eating disorder that could be contributing to both her evening drinking and her disrupted daily routine', -1,
        { r: 'Eating pathology is not indicated', approach: 'Eating-disorder framing', why: 'No eating concerns are reported', keys: ['no eating data'], mistake: 'Inventing an unsupported comorbidity' }),
      O('d', 'An emerging neurocognitive decline that could explain why she has been forgetting her responsibilities at the school lately', 0,
        { r: 'Cognitive decline is premature here', approach: 'Neurocognitive framing', why: 'Alcohol effects are a simpler explanation', keys: ['substance-linked'], mistake: 'Over-attributing to cognitive decline' }),
    ]),
    Q('q6', 'treatment', 'What is the most appropriate framework for determining her level of care?', ['R2'], [
      O('a', 'A multidimensional assessment of withdrawal risk, environment, and readiness to match her to the least intensive safe setting', 3,
        { r: 'Use multidimensional placement', approach: 'Apply level-of-care criteria', why: 'ASAM matches care level to multiple dimensions', keys: ['mild withdrawal', 'ambivalence'], mistake: 'Defaulting to one fixed program' }),
      O('b', 'Automatically referring her to the most intensive residential inpatient program available so she gets the strongest help possible', -1,
        { r: 'Maximal care ignores placement criteria', approach: 'Top-intensity default', why: 'Level of care should match assessed need', keys: ['no complicated withdrawal'], mistake: 'Over-placing without assessment' }),
      O('c', 'Recommending only a weekly mutual-help meeting, on the assumption that peer support by itself will be sufficient for her needs', -1,
        { r: 'Under-placement ignores her criteria', approach: 'Minimal-care default', why: 'Support groups alone may under-treat', keys: ['moderate AUD'], mistake: 'Under-treating moderate severity' }),
      O('d', 'Letting her choose whichever specific program sounds the most convenient to her schedule regardless of her clinical needs', 0,
        { r: 'Preference cannot override clinical need', approach: 'Convenience framing', why: 'Placement must reflect assessed need', keys: ['shared decision input'], mistake: 'Letting convenience drive placement' }),
    ]),
    Q('q7', 'treatment', 'Given her ambivalence, what is the most appropriate primary counseling approach?', ['R3'], [
      O('a', 'Motivational interviewing to explore ambivalence and strengthen her own reasons for change at her current stage', 3,
        { r: 'MI fits ambivalence and stage', approach: 'Match method to stage', why: 'TIP 35 endorses MI for ambivalent clients', keys: ['contemplation', 'mixed feelings'], mistake: 'Pushing action before readiness' }),
      O('b', 'A firm, direct confrontation about the serious damage her drinking is doing so that she finally sees the full reality of it', -2,
        { r: 'Confrontation raises resistance', approach: 'Confrontational framing', why: 'Confrontation tends to harden ambivalence', keys: ['ambivalent client'], mistake: 'Using confrontation to force insight' }),
      O('c', 'A structured relapse-prevention program built entirely around her committing right now to a firm date for complete abstinence', -1,
        { r: 'Action-stage tools precede her readiness', approach: 'Action-first framing', why: 'She has not yet resolved ambivalence', keys: ['not in action stage'], mistake: 'Applying action tools too early' }),
      O('d', 'Primarily educational lectures detailing the medical consequences of alcohol so that the facts alone will convince her to stop', -1,
        { r: 'Education alone rarely resolves ambivalence', approach: 'Didactic framing', why: 'Evoking her own motivation works better', keys: ['needs to voice change talk'], mistake: 'Relying on information to motivate' }),
    ]),
    Q('q8', 'treatment', 'Linda asks whether medication could help her cut back. The most appropriate action is to:', ['R6'], [
      O('a', 'Coordinate a referral to a prescriber to evaluate medication options while continuing motivational counseling within scope', 3,
        { r: 'Refer and coordinate within scope', approach: 'Coordinate care', why: 'Counselors refer for medication rather than prescribe', keys: ['asks about medication'], mistake: 'Giving prescriptive advice' }),
      O('b', 'Recommend the particular anti-craving medication that she should specifically request from her primary care physician next week', -2,
        { r: 'Naming a drug exceeds scope', approach: 'Prescriptive advice', why: 'Medication selection is outside counselor scope', keys: ['no prescriptive authority'], mistake: 'Overstepping professional limits' }),
      O('c', 'Discourage any medication and explain that relying on a pill would only undermine the personal willpower she needs to recover', -1,
        { r: 'Discouraging meds reflects stigma', approach: 'Willpower framing', why: 'Medication is an evidence-based option', keys: ['client autonomy'], mistake: 'Moralizing about medication' }),
      O('d', 'Tell her that medication is only ever appropriate for people whose alcohol problems have already reached the most severe level', -1,
        { r: 'Inaccurate gatekeeping forecloses care', approach: 'Severity-gating framing', why: 'Medication can help across severity levels', keys: ['needs evaluation'], mistake: 'Stating an inaccurate restriction' }),
    ]),
    Q('q9', 'counseling', 'During a session Linda voices both wanting to quit and doubting she can. The MI-consistent response is to:', ['R4'], [
      O('a', 'Reflect both sides of her ambivalence and selectively explore the change talk she has already begun to express', 3,
        { r: 'Reflect ambivalence, evoke change talk', approach: 'Roll with ambivalence', why: 'MI develops discrepancy through reflection', keys: ['wants to quit yet doubts'], mistake: 'Arguing for one side' }),
      O('b', 'Point out firmly that her doubts are really just excuses and that she clearly needs to commit to quitting completely today', -2,
        { r: 'Arguing triggers resistance', approach: 'Righting reflex', why: 'It pushes against her autonomy', keys: ['discord risk'], mistake: 'Falling into the righting reflex' }),
      O('c', 'Quickly agree with her doubts and suggest that perhaps now is simply not the right time for her to try to change anything', -1,
        { r: 'Siding with doubt undercuts change talk', approach: 'Concede the doubt', why: 'It abandons the emerging motivation', keys: ['ambivalence'], mistake: 'Reinforcing the status-quo side' }),
      O('d', 'Lay out a detailed step-by-step quit plan with specific dates and rules for her to begin following starting this very evening', -1,
        { r: 'Planning precedes resolved ambivalence', approach: 'Premature planning', why: 'Evoking should precede planning in MI', keys: ['not yet committed'], mistake: 'Jumping to planning too soon' }),
    ]),
    Q('q10', 'counseling', 'Linda relapses after two sober weeks and is ashamed. The most therapeutic response is to:', ['R3'], [
      O('a', 'Frame the lapse as a common part of change, explore what it taught her, and revisit the plan without shaming her', 3,
        { r: 'Treat the lapse as learning', approach: 'Normalize and problem-solve', why: 'Lapses are common and informative in recovery', keys: ['shame after relapse'], mistake: 'Treating a lapse as total failure' }),
      O('b', 'Warn her seriously that another slip like this one will likely undo all of her progress and prove that she cannot really do this', -2,
        { r: 'Catastrophizing deepens shame', approach: 'Threat framing', why: 'It feeds the abstinence-violation effect', keys: ['shame spiral'], mistake: 'Amplifying shame after a lapse' }),
      O('c', 'Recommend that she immediately step up to a far more restrictive level of care since the outpatient plan has clearly failed her', -1,
        { r: 'One lapse does not mandate escalation', approach: 'Reflexive escalation', why: 'A single lapse is not treatment failure', keys: ['expected setback'], mistake: 'Over-escalating after one slip' }),
      O('d', 'Reassure her that the lapse really does not matter at all and encourage her to simply forget about it and move on quickly', -1,
        { r: 'Dismissing the lapse skips learning', approach: 'Minimize the lapse', why: 'Exploring the lapse yields useful data', keys: ['learning opportunity'], mistake: 'Glossing over a teachable moment' }),
    ]),
    Q('q11', 'counseling', 'How should the counselor best support Linda’s self-efficacy at this stage?', ['R3'], [
      O('a', 'Highlight her past successes at cutting back and her existing strengths to build her confidence that change is achievable', 3,
        { r: 'Affirm strengths and prior successes', approach: 'Build self-efficacy', why: 'Affirming past success raises confidence', keys: ['tried to cut back before'], mistake: 'Focusing only on deficits' }),
      O('b', 'Emphasize repeatedly just how serious and entrenched her problem has become so that she takes the situation seriously enough', -1,
        { r: 'Emphasizing severity lowers efficacy', approach: 'Severity emphasis', why: 'It can undermine her confidence', keys: ['needs hope'], mistake: 'Undercutting self-efficacy' }),
      O('c', 'Compare her progress directly with that of other clients who have already succeeded so she has a clear standard to aim for', -1,
        { r: 'Comparisons can be discouraging', approach: 'Social comparison', why: 'It can erode rather than build confidence', keys: ['individualized care'], mistake: 'Measuring her against others' }),
      O('d', 'Set a single ambitious long-term abstinence goal right away so that she always has the larger target firmly in front of her', -1,
        { r: 'A distant-only goal can overwhelm', approach: 'Big-goal framing', why: 'Graded goals build efficacy better', keys: ['confidence-building'], mistake: 'Setting an overwhelming target' }),
    ]),
    Q('q12', 'ethics', 'Linda’s principal calls the counselor asking whether she is “in treatment for drinking.” Best response?', ['R6'], [
      O('a', 'Decline to confirm or deny without a valid release, explaining confidentiality protections even to a concerned employer', 3,
        { r: 'Protect confidentiality without a release', approach: 'Uphold confidentiality', why: 'ACA B.1. protects information absent valid consent', keys: ['employer inquiry', 'no release'], mistake: 'Disclosing to an employer without consent' }),
      O('b', 'Confirm that she is in treatment, since the employer already clearly knows about the warning and is only trying to help her', -2,
        { r: 'Confirming breaches confidentiality', approach: 'Assume implied consent', why: 'Prior awareness does not authorize disclosure', keys: ['no valid release'], mistake: 'Disclosing without authorization' }),
      O('c', 'Refuse to speak with the principal at all and hang up immediately without offering any general information about the process', -1,
        { r: 'Abrupt refusal misses a teachable moment', approach: 'Flat refusal', why: 'General process information can be shared appropriately', keys: ['professional courtesy'], mistake: 'Being needlessly obstructive' }),
      O('d', 'Tell the principal you will need to ask Linda for permission first and then quietly share the gist of her progress afterward', -2,
        { r: 'Sharing the gist still breaches privacy', approach: 'Soft disclosure', why: 'Only a valid release permits disclosure', keys: ['confidentiality'], mistake: 'Leaking details under the guise of an update' }),
    ]),
    Q('q13', 'ethics', 'Linda asks the counselor to write a letter to her employer minimizing her drinking to protect her job. Best response?', ['R6'], [
      O('a', 'Explain you can document treatment engagement accurately with her consent but cannot misrepresent her clinical picture', 3,
        { r: 'Document honestly with consent', approach: 'Maintain honest records', why: 'ACA standards require accurate representation', keys: ['wants the truth softened'], mistake: 'Falsifying clinical information' }),
      O('b', 'Agree to write the letter as she has requested it, since protecting her livelihood is clearly in her overall best interest', -2,
        { r: 'Misrepresentation is unethical', approach: 'Misrepresent to help', why: 'Beneficence cannot justify falsification', keys: ['accuracy required'], mistake: 'Falsifying to protect the client' }),
      O('c', 'Refuse outright and tell her you will not provide any documentation of any kind to her employer under any circumstances', -1,
        { r: 'A blanket refusal overstates the limit', approach: 'Total refusal', why: 'Accurate documentation with consent is permissible', keys: ['consent process'], mistake: 'Withholding even appropriate documentation' }),
      O('d', 'Offer to leave out the alcohol use entirely and instead write only about the unrelated work stress she has been experiencing', -2,
        { r: 'Selective omission still misleads', approach: 'Misleading by omission', why: 'A deliberately incomplete record deceives', keys: ['integrity of records'], mistake: 'Omitting key facts to mislead' }),
    ]),
  ],
};

// ============================================================================
// D109 — Borderline Personality Disorder (F60.3) — Personality — medium
// ============================================================================
const D109 = {
  id: 'D109',
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
    Q('q9', 'counseling', 'When Aisha alternates between idealizing and devaluing the counselor, the most therapeutic response is to:', ['R2'], [
      O('a', 'Maintain a steady, nonreactive stance and a consistent frame while validating the feelings underneath the shifts', 3,
        { r: 'Consistency plus validation', approach: 'Hold a steady frame', why: 'A consistent stance contains splitting', keys: ['idealize-devalue swings'], mistake: 'Reacting personally to the shifts' }),
      O('b', 'Point out to her directly that she is splitting and explain in detail how this same pattern is damaging all of her relationships', -1,
        { r: 'Labeling can feel invalidating', approach: 'Confront the defense', why: 'Premature interpretation can rupture alliance', keys: ['fragile alliance'], mistake: 'Interpreting before validating' }),
      O('c', 'Respond warmly when she idealizes you and noticeably more distantly when she devalues you so she learns about consequences', -2,
        { r: 'Reinforcing swings worsens instability', approach: 'Contingent warmth', why: 'Inconsistency intensifies the pattern', keys: ['needs consistency'], mistake: 'Letting the client’s shifts drive your stance' }),
      O('d', 'Take the devaluation as accurate feedback about your work and substantially change your whole approach each time it happens', -1,
        { r: 'Overcorrecting destabilizes the frame', approach: 'Reactive overcorrection', why: 'A steady frame, not constant change, is therapeutic', keys: ['boundary stability'], mistake: 'Abandoning the frame under pressure' }),
    ]),
    Q('q10', 'counseling', 'Aisha becomes intensely angry when the counselor mentions an upcoming vacation. The best response is to:', ['R2'], [
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
        { r: 'Hold the boundary, explore the need', why: 'Boundaries protect the work while the need is processed', approach: 'Maintain a caring boundary', keys: ['boundary request', 'fear of being alone'], mistake: 'Either crossing the line or rejecting coldly' }),
      O('b', 'Agree to occasional friendly contact outside of sessions because the therapeutic relationship is clearly so important to her', -2,
        { r: 'A dual relationship harms the work', approach: 'Cross the boundary', why: 'It creates a harmful dual relationship', keys: ['role confusion'], mistake: 'Trading the clinical role for friendship' }),
      O('c', 'Decline curtly and move on quickly without acknowledging the feelings or the meaning behind her request for closeness', -1,
        { r: 'A cold refusal can feel like rejection', approach: 'Dismissive refusal', why: 'The longing deserves exploration, not dismissal', keys: ['abandonment sensitivity'], mistake: 'Enforcing limits without warmth' }),
      O('d', 'Promise her that once the formal therapy has fully ended the two of you can certainly become close personal friends afterward', -2,
        { r: 'Future-friendship promises are improper', approach: 'Post-termination promise', why: 'It compromises current treatment and boundaries', keys: ['boundary integrity'], mistake: 'Dangling a personal relationship' }),
    ]),
    Q('q12', 'ethics', 'The counselor notices unusually strong frustration with Aisha’s frequent crises. The most appropriate step is to:', ['R5'], [
      O('a', 'Seek clinical supervision or consultation to manage the countertransference and protect the quality of her care', 3,
        { r: 'Use consultation for countertransference', approach: 'Seek consultation', why: 'ACA C.2. supports consultation to maintain competence', keys: ['strong frustration', 'complex case'], mistake: 'Letting reactions silently shape care' }),
      O('b', 'Address the frustration by setting noticeably firmer and more rigid limits with her in order to reduce the demands on yourself', -1,
        { r: 'Reactive limits serve the clinician, not the client', approach: 'Self-protective limits', why: 'Limits should be clinical, not reactive', keys: ['countertransference'], mistake: 'Letting reactions drive boundary changes' }),
      O('c', 'Disclose your frustration openly to her in session so that she can fully understand the real impact her behavior has on you', -1,
        { r: 'Burdening the client is inappropriate', approach: 'Over-disclosure', why: 'Self-disclosure here serves the clinician', keys: ['client welfare'], mistake: 'Shifting your reaction onto the client' }),
      O('d', 'Begin the process of transferring her to another provider right away, since your frustration clearly means you can no longer help her', -1,
        { r: 'Premature transfer abandons the client', approach: 'Reflexive transfer', why: 'Consultation should precede any transfer', keys: ['continuity of care'], mistake: 'Transferring instead of addressing the reaction' }),
    ]),
    Q('q13', 'ethics', 'Aisha discloses an urge to overdose tonight after a breakup but pleads with the counselor to keep it secret. Best response?', ['R3'], [
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
