// ============================================================================
// deep-cases-batch-05.js — NCMHCE deep cases, batch 05 (2022+ format)
// NCMHCE Prep Platform | GA Integrated Therapeutic Perspectives LLC
//
// Five exam-deep clinical simulations (13 items each, sections [5,4,4]). The
// diagnosis/clinical focus is GIVEN; items test clinical decision-making across
// the three derived sections (Assessment -> Planning -> Process). Targets fill
// the largest remaining blueprint gaps WITHOUT overlapping batch-01..04 (note
// that batch-04 on main covers OCD-Related as ncmhce-D115):
//   ncmhce-D116  Suicidal Behavior / Acute Risk (Crisis)
//   ncmhce-D117  Attention-Deficit/Hyperactivity Disorder, Combined (Neurodevelopmental)
//   ncmhce-D118  Narcissistic Personality Disorder (Personality)
//   ncmhce-D119  Stimulant Use Disorder (Cocaine) (Substance)
//   ncmhce-D120  Major Depressive Disorder, with Peripartum Onset (Depressive)
//
// Authored to NCMHCE_DeepCase_Generation_Spec.md. Passes caseSchema
// (strictItemQuality) AND examDepth with zero errors / zero warnings.
// Auto-discovered by import-deep-cases.js (deep-cases-batch-*.js).
//
// Validate:
//   node tools/cases/validateCases.js tools/cases/deep-cases-batch-05.js
//   node -e "const{validateExamDepthSet}=require('./tools/cases/examDepth');const{CASES}=require('./tools/cases/deep-cases-batch-05');console.log(validateExamDepthSet(CASES))"
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
// D116 — Suicidal Behavior / Acute Risk (R45.851) — Crisis — hard
// ============================================================================
const D116 = {
  id: 'ncmhce-D116',
  title: 'Acute suicidal crisis after a breakup and job loss',
  category: 'Crisis',
  difficulty: 'hard',
  primaryDiagnosis: { name: 'Suicidal Behavior / Acute Risk', code: 'R45.851' },
  diagnosis: { name: 'Suicidal Behavior / Acute Risk', code: 'R45.851' },
  differentialOptions: [
    { id: 'do1', name: 'Suicidal Behavior / Acute Risk', isCorrect: true },
    { id: 'do2', name: 'Nonsuicidal Self-Injury', isCorrect: false },
    { id: 'do3', name: 'Major Depressive Disorder, Moderate', isCorrect: false },
    { id: 'do4', name: 'Adjustment Disorder, with Depressed Mood', isCorrect: false },
  ],
  narrative: {
    intake:
      'Jordan Ellis, a 28-year-old veteran, presents in acute distress one week after a breakup and a job loss, saying he sees no ' +
      'reason to keep going. He reports current thoughts of suicide, a plan involving a firearm at home, and a prior attempt two years ago.',
    session1:
      'He describes intense hopelessness, poor sleep, and withdrawal from friends; he has been drinking more heavily this week. He says ' +
      'the firearm is accessible and that he has thought about using it, though part of him is frightened by how strong the thoughts are.',
    session2:
      'He is ambivalent—he mentions his younger sister and his dog as reasons he has not acted—and he is willing to talk through options. ' +
      'He has not set a specific time, and he agrees to work collaboratively on staying safe over the coming days.',
  },
  diagnosticRationale:
    'Active suicidal ideation with a specific method, accessible lethal means, a recent prior attempt, acute stressors, hopelessness, ' +
    'and increased alcohol use constitute an acute, high-risk suicidal crisis requiring structured risk assessment, collaborative safety ' +
    'planning, and means restriction—distinct from nonsuicidal self-injury, an uncomplicated depressive episode, or an adjustment reaction.',
  references: [
    { id: 'R1', source: 'C-SSRS', detail: 'Structured assessment of ideation severity, intent, plan, and prior suicidal behavior' },
    { id: 'R2', source: 'Stanley-Brown SPI', detail: 'Collaborative safety plan with warning signs, coping, contacts, and means restriction' },
    { id: 'R3', source: 'VA/DoD CPG', detail: 'Suicide-risk management: risk stratification, means safety, and level-of-care decisions' },
    { id: 'R4', source: 'ACA Code of Ethics', detail: 'B.2.: disclosure to protect from serious and foreseeable harm; informed consent' },
    { id: 'R5', source: 'DSM-5-TR', detail: 'Assessment of co-occurring depressive and substance-use conditions' },
  ],
  questions: [
    Q('q1', 'intake', 'What is the most appropriate first step in assessing Jordan’s presentation?', ['R1'], [
      O('a', 'Conduct a structured suicide-risk assessment clarifying ideation severity, intent, plan, access to means, and prior attempts', 3,
        { r: 'Structured risk assessment comes first', approach: 'Assess risk directly and structurally', why: 'C-SSRS structures the data needed to stratify acute risk', keys: ['plan with a firearm', 'prior attempt'], mistake: 'Assessing mood while skipping a structured risk screen' }),
      O('b', 'Begin teaching him calming and relaxation techniques right away before gathering the details of his suicidal thoughts', -1,
        { r: 'Intervening before assessing is premature', approach: 'Skill-first framing', why: 'Risk must be characterized before intervention', keys: ['unassessed risk'], mistake: 'Jumping to coping skills before risk assessment' }),
      O('c', 'Reassure him that the breakup and job loss are temporary setbacks and that he is certain to feel better before long', -2,
        { r: 'Premature reassurance forecloses assessment', approach: 'Minimize and reassure', why: 'It dismisses acute risk and skips assessment', keys: ['active ideation'], mistake: 'Reassuring instead of assessing acute risk' }),
      O('d', 'Refer him to a prescriber for medication first and postpone any direct discussion of the suicidal thoughts until later', -2,
        { r: 'Deferring risk assessment is unsafe', approach: 'Defer to medication', why: 'Acute risk is assessed now, not deferred', keys: ['active disclosure'], mistake: 'Outsourcing an acute safety assessment' }),
    ]),
    Q('q2', 'core', 'How should the counselor distinguish Jordan’s presentation from nonsuicidal self-injury?', ['R1'], [
      O('a', 'By assessing his intent, since acting with intent to die differs fundamentally from self-injury aimed at relieving tension', 3,
        { r: 'Intent to die separates the two', approach: 'Assess intent and function', why: 'Suicidal behavior involves intent to die; NSSI does not', keys: ['plan to die by firearm', 'intent present'], mistake: 'Treating all self-harm as equivalent' }),
      O('b', 'By focusing on whether he has visible physical injuries on his body from harming himself in the recent past', -1,
        { r: 'Visible injury does not establish intent', approach: 'Injury framing', why: 'Intent, not visible injury, defines the risk type', keys: ['intent focus'], mistake: 'Inferring intent from wounds' }),
      O('c', 'By determining how frequently he has had thoughts about harming himself across a typical week or month recently', -1,
        { r: 'Frequency does not clarify intent', approach: 'Frequency framing', why: 'Rate is not the same as intent to die', keys: ['intent vs frequency'], mistake: 'Equating frequency with risk type' }),
      O('d', 'By asking whether the people in his life are already aware that he has been having these kinds of thoughts lately', 0,
        { r: 'Others’ awareness is not the test', approach: 'Disclosure framing', why: 'Visibility does not define suicidal intent', keys: ['intent-based distinction'], mistake: 'Using disclosure as the criterion' }),
    ]),
    Q('q3', 'intake', 'Given the firearm at home, what assessment is most critical to complete?', ['R3'], [
      O('a', 'A careful assessment of his access to lethal means, since available, lethal methods sharply elevate acute suicide risk', 3,
        { r: 'Means access is a key risk driver', approach: 'Assess access to lethal means', why: 'Access to a firearm markedly raises lethality risk', keys: ['accessible firearm', 'has considered using it'], mistake: 'Overlooking means access in the assessment' }),
      O('b', 'A detailed history of every firearm he has ever owned so the counselor can document his complete background with weapons', -1,
        { r: 'Exhaustive gun history is low yield', approach: 'Inventory framing', why: 'Current access, not ownership history, drives risk', keys: ['current access'], mistake: 'Collecting low-yield detail' }),
      O('c', 'A thorough exploration of the childhood experiences that he believes first shaped how he copes with painful emotions', 0,
        { r: 'Depth history is not the priority now', approach: 'Origins framing', why: 'Acute means assessment takes priority', keys: ['acute risk'], mistake: 'Prioritizing depth over acute safety' }),
      O('d', 'A precise calculation of how much alcohol he has consumed each day so the counselor can quantify his drinking pattern', -1,
        { r: 'Quantifying intake is not the priority', approach: 'Quantification framing', why: 'It does not address the lethal-means risk', keys: ['means risk'], mistake: 'Confusing intake detail with means assessment' }),
    ]),
    Q('q4', 'core', 'What is most important to assess to form a balanced risk formulation?', ['R3'], [
      O('a', 'Both his risk factors and his protective factors, such as his ambivalence and the relationships he names as reasons to live', 3,
        { r: 'Weigh risk and protective factors', approach: 'Form a balanced formulation', why: 'Risk stratification weighs drivers against protective factors', keys: ['names sister and dog', 'ambivalence'], mistake: 'Cataloguing only risk factors' }),
      O('b', 'Only the single most severe risk factor he reports, since the most serious item alone determines his overall level of risk', -1,
        { r: 'One factor does not define overall risk', approach: 'Single-factor framing', why: 'Risk is a weighted formulation, not one item', keys: ['multiple factors'], mistake: 'Reducing risk to one variable' }),
      O('c', 'Whether his current distress is objectively proportionate to the severity of the breakup and the job loss he experienced', -1,
        { r: 'Proportionality is not a risk metric', approach: 'Proportionality framing', why: 'Proportionality does not gauge suicide risk', keys: ['acute distress'], mistake: 'Judging risk by proportionality' }),
      O('d', 'How well he is able to describe, in detail, the specific sequence of events that led up to this current crisis', 0,
        { r: 'Narrative detail is not the risk metric', approach: 'Narrative framing', why: 'Event detail does not stratify risk', keys: ['formulation focus'], mistake: 'Equating a good history with low risk' }),
    ]),
    Q('q5', 'intake', 'What co-occurring factor is most important to screen for that also raises his acute risk?', ['R5'], [
      O('a', 'His increased alcohol use, which can heighten impulsivity and acute suicide risk and warrants direct assessment', 3,
        { r: 'Acute substance use raises risk', approach: 'Screen acute substance use', why: 'Increased drinking heightens impulsivity and lethality', keys: ['drinking more heavily this week'], mistake: 'Ignoring substance use in a suicide crisis' }),
      O('b', 'A previously undetected primary psychotic disorder that could be the underlying explanation for his current hopelessness', -1,
        { r: 'Psychosis is not indicated here', approach: 'Psychosis framing', why: 'Nothing suggests a psychotic process', keys: ['reality testing intact'], mistake: 'Pursuing an unsupported rule-out' }),
      O('c', 'A long-standing eating disorder that might be contributing to both his poor sleep and his social withdrawal this week', -1,
        { r: 'Eating pathology is not indicated', approach: 'Eating-disorder framing', why: 'No eating concerns are reported', keys: ['no eating data'], mistake: 'Inventing an unsupported rule-out' }),
      O('d', 'An emerging neurocognitive decline that could explain why he is having so much trouble concentrating during this crisis', 0,
        { r: 'Cognitive decline is improbable here', approach: 'Neurocognitive framing', why: 'Acute distress is a simpler explanation', keys: ['acute stressors'], mistake: 'Over-attributing to cognitive decline' }),
    ]),
    Q('q6', 'treatment', 'What is the most appropriate cornerstone of the safety plan?', ['R2'], [
      O('a', 'A collaborative safety plan identifying warning signs, coping strategies, supports, and crisis contacts he can use', 3,
        { r: 'Collaborative safety planning', approach: 'Build a Stanley-Brown plan', why: 'Collaborative safety planning is evidence-based for acute risk', keys: ['willing to work collaboratively'], mistake: 'Relying on a no-suicide contract' }),
      O('b', 'A signed no-suicide contract in which he formally promises in writing not to harm himself before the next appointment', -2,
        { r: 'No-suicide contracts are not evidence-based', approach: 'No-harm contract', why: 'Contracts do not reduce risk or ensure safety', keys: ['ineffective intervention'], mistake: 'Using a contract instead of a plan' }),
      O('c', 'A detailed schedule of pleasant activities for the week ahead intended to lift his mood enough that the thoughts simply fade', -1,
        { r: 'Activity scheduling alone is insufficient', approach: 'Behavioral-activation-only', why: 'It does not address acute means or crisis steps', keys: ['acute risk'], mistake: 'Substituting mood work for safety planning' }),
      O('d', 'A firm instruction that he must call the counselor’s personal phone the very moment any suicidal thought enters his mind', -1,
        { r: 'A single contact rule is not a plan', approach: 'Single-contact framing', why: 'A safety plan layers warning signs, coping, and supports', keys: ['needs a full plan'], mistake: 'Reducing safety planning to one instruction' }),
    ]),
    Q('q7', 'treatment', 'How should the plan address the firearm at home?', ['R3'], [
      O('a', 'Counsel collaboratively on means restriction, such as temporarily storing the firearm away from the home with a trusted person', 3,
        { r: 'Means restriction is central', approach: 'Reduce access to lethal means', why: 'Means restriction reduces suicide deaths in crisis', keys: ['accessible firearm'], mistake: 'Leaving the lethal means unaddressed' }),
      O('b', 'Leave the firearm question alone entirely, since raising it might offend him and damage the therapeutic relationship you are building', -2,
        { r: 'Avoiding means restriction is unsafe', approach: 'Avoid the topic', why: 'Failing to address means leaves lethal risk in place', keys: ['lethal means present'], mistake: 'Omitting means-restriction counseling' }),
      O('c', 'Advise him to simply unload the firearm and keep the ammunition stored in a separate drawer in the same bedroom at home', -1,
        { r: 'In-home storage still leaves access', approach: 'Half-measure framing', why: 'Keeping it in the home retains ready access', keys: ['retained access'], mistake: 'Settling for an inadequate means measure' }),
      O('d', 'Tell him that as a responsible adult it is entirely his own decision whether to keep the firearm accessible during this crisis', -1,
        { r: 'Deferring abandons means counseling', approach: 'Autonomy-only framing', why: 'Means-restriction counseling is indicated in crisis', keys: ['acute risk'], mistake: 'Using autonomy to avoid the conversation' }),
    ]),
    Q('q8', 'treatment', 'On what basis should the counselor decide whether a higher level of care, such as hospitalization, is needed?', ['R3'], [
      O('a', 'On a clinical judgment weighing intent, plan, means, and his ability to maintain safety with the current plan and supports', 3,
        { r: 'Stratified judgment drives level of care', approach: 'Match level of care to assessed risk', why: 'Hospitalization decisions weigh intent, plan, means, and safety capacity', keys: ['plan and means present', 'some protective factors'], mistake: 'Using a single factor to decide disposition' }),
      O('b', 'On whether he explicitly asks to be hospitalized, since the decision should ultimately be left entirely up to the client himself', -1,
        { r: 'Disposition is a clinical judgment', approach: 'Client-request framing', why: 'Level of care is clinically determined, not request-only', keys: ['clinical judgment'], mistake: 'Deferring disposition to the client alone' }),
      O('c', 'On hospitalizing him automatically, since anyone who mentions suicide at all should always be admitted to an inpatient unit', -1,
        { r: 'Reflexive admission is not the standard', approach: 'Over-hospitalization', why: 'Not all ideation requires inpatient care', keys: ['stratified decision'], mistake: 'Admitting reflexively without assessment' }),
      O('d', 'On avoiding hospitalization in all cases, since inpatient admission would only disrupt the therapeutic relationship you have built', -2,
        { r: 'Refusing admission ignores acute danger', approach: 'Avoid admission framing', why: 'Inpatient care is warranted when safety cannot be maintained', keys: ['imminent-risk possibility'], mistake: 'Ruling out admission regardless of risk' }),
    ]),
    Q('q9', 'treatment', 'What follow-up element most strengthens his safety after this session?', ['R3'], [
      O('a', 'A warm handoff and a scheduled follow-up with caring contact rather than simply sending him out with a phone number', 3,
        { r: 'Warm handoff and follow-up', approach: 'Ensure continuity of care', why: 'Active follow-up and caring contact reduce post-crisis risk', keys: ['high-risk period'], mistake: 'Ending contact without a follow-up plan' }),
      O('b', 'A reminder that he can look up crisis resources online on his own if he happens to feel worse over the coming weekend', -1,
        { r: 'Self-directed lookup is too passive', approach: 'Passive-resource framing', why: 'Active follow-up beats leaving him to search alone', keys: ['needs active linkage'], mistake: 'Relying on the client to self-refer in crisis' }),
      O('c', 'A plan to wait and see how he is doing at his next routine appointment in several weeks without any contact before then', -2,
        { r: 'A long gap in an acute crisis is unsafe', approach: 'Delayed-follow-up framing', why: 'The post-crisis window needs prompt follow-up', keys: ['acute risk window'], mistake: 'Leaving a long gap after a crisis' }),
      O('d', 'A suggestion that his ex-partner check in on him regularly, since reconnecting with her would clearly help him feel better', -1,
        { r: 'Outsourcing to the ex is inappropriate', approach: 'Informal-monitor framing', why: 'Clinical follow-up should not hinge on the ex-partner', keys: ['professional follow-up'], mistake: 'Delegating safety to an unsuitable contact' }),
    ]),
    Q('q10', 'counseling', 'Jordan says he is not sure he wants to live but is not sure he wants to die either. Best response?', ['R2'], [
      O('a', 'Explore his ambivalence with empathy and build on his stated reasons for living to strengthen his motivation to stay safe', 3,
        { r: 'Work with ambivalence and reasons to live', approach: 'Engage ambivalence collaboratively', why: 'Reinforcing reasons for living strengthens safety', keys: ['mentions sister and dog', 'ambivalence'], mistake: 'Treating ambivalence as either fully safe or hopeless' }),
      O('b', 'Tell him firmly that he has so much to live for and that he should not be thinking this way after only one difficult week', -1,
        { r: 'Dismissing the pain invalidates him', approach: 'Cheerlead past the pain', why: 'It overrides his experience and can disengage him', keys: ['acute distress'], mistake: 'Telling him how he should feel' }),
      O('c', 'Accept his uncertainty about living and shift the focus to practical matters like his job search and his finances for now', -2,
        { r: 'Pivoting away abandons the crisis', approach: 'Avoid the ambivalence', why: 'It sidesteps the central safety issue', keys: ['active risk'], mistake: 'Redirecting away from suicidal ambivalence' }),
      O('d', 'Explain the statistics on how most people who feel suicidal go on to recover so that he sees that his odds are quite good', -1,
        { r: 'Statistics rarely shift acute despair', approach: 'Didactic persuasion', why: 'Engagement, not data, addresses ambivalence', keys: ['emotional reasoning'], mistake: 'Answering despair with numbers' }),
    ]),
    Q('q11', 'counseling', 'How can the counselor best instill hope without dismissing Jordan’s pain?', ['R2'], [
      O('a', 'Validate how unbearable things feel right now while helping him see the crisis and his options as changeable over time', 3,
        { r: 'Validate pain, frame the crisis as time-limited', approach: 'Balance validation with hope', why: 'Framing the crisis as changeable supports safety without dismissing pain', keys: ['acute hopelessness'], mistake: 'Either only sympathizing or only reassuring' }),
      O('b', 'Promise him confidently that everything is definitely going to work out fine for him as long as he sticks with the treatment', -1,
        { r: 'Overpromising can ring hollow', approach: 'Guarantee outcomes', why: 'Unrealistic guarantees can undercut credibility', keys: ['acute despair'], mistake: 'Making promises you cannot keep' }),
      O('c', 'Agree with him that his situation does look genuinely hopeless right now and focus only on getting through the next few hours', -2,
        { r: 'Endorsing hopelessness is dangerous', approach: 'Concede hopelessness', why: 'It reinforces the despair driving the crisis', keys: ['therapeutic pessimism'], mistake: 'Adopting the client’s hopeless stance' }),
      O('d', 'Quickly change the subject to lighter topics whenever his hopelessness comes up so that the session does not feel so heavy', -1,
        { r: 'Avoiding the despair leaves it intact', approach: 'Topic avoidance', why: 'It bypasses the central clinical issue', keys: ['unaddressed despair'], mistake: 'Sidestepping the crisis to ease discomfort' }),
    ]),
    Q('q12', 'ethics', 'Jordan asks the counselor to promise that nothing he says about suicide will ever leave the room. Best response?', ['R4'], [
      O('a', 'Explain the limits of confidentiality, including that serious, foreseeable risk of harm may require disclosure to protect him', 3,
        { r: 'Confidentiality has safety-based limits', approach: 'Clarify confidentiality and its limits', why: 'ACA B.2. permits disclosure to protect from serious, foreseeable harm', keys: ['acute risk', 'requests absolute secrecy'], mistake: 'Promising unconditional confidentiality' }),
      O('b', 'Promise him that absolutely nothing he discloses about suicide will ever be shared with anyone under any circumstances at all', -2,
        { r: 'Absolute confidentiality is unethical here', approach: 'Overpromise privacy', why: 'It misstates the safety-based limits', keys: ['danger exception'], mistake: 'Guaranteeing unconditional secrecy' }),
      O('c', 'Tell him that because he mentioned suicide you must immediately call the police right now regardless of how the risk assessment turns out', -1,
        { r: 'Act on assessed risk, not reflexively', approach: 'Reflexive disclosure', why: 'Disclosure follows a careful risk assessment', keys: ['proportionate response'], mistake: 'Escalating before assessing the risk' }),
      O('d', 'Avoid answering the question about confidentiality at all so that he keeps talking openly about his suicidal thoughts with you', -1,
        { r: 'Dodging the question undermines consent', approach: 'Evade the limits', why: 'Limits are part of informed consent', keys: ['informed consent'], mistake: 'Concealing the limits of confidentiality' }),
    ]),
    Q('q13', 'ethics', 'After assessment, Jordan can maintain safety with a plan and supports. How should the counselor document this?', ['R4'], [
      O('a', 'Document the risk assessment, the formulation, the safety plan, means-restriction steps, and the clinical rationale for the disposition', 3,
        { r: 'Document assessment, plan, and rationale', approach: 'Keep thorough crisis documentation', why: 'Sound records capture the assessment, plan, and reasoning', keys: ['safety plan in place', 'disposition decision'], mistake: 'Documenting only that he denied a plan' }),
      O('b', 'Record only that he agreed to a no-suicide contract and promised that he would not harm himself before the next appointment', -2,
        { r: 'A contract note is inadequate and misleading', approach: 'Contract-as-record', why: 'Contracts are not evidence-based and do not document risk care', keys: ['ineffective intervention'], mistake: 'Substituting a contract note for real documentation' }),
      O('c', 'Write a brief note simply stating that the client is fine now and that there is no further need for any ongoing concern', -2,
        { r: 'Minimizing the record is unsafe and inaccurate', approach: 'Minimize the record', why: 'It omits the assessment and ongoing risk plan', keys: ['ongoing risk'], mistake: 'Understating risk in the record' }),
      O('d', 'Keep the details of the suicide assessment out of the chart entirely to protect his privacy and avoid stigmatizing him', -1,
        { r: 'Omitting the assessment is improper', approach: 'Privacy-by-omission', why: 'The assessment and plan must be documented accurately', keys: ['record integrity'], mistake: 'Omitting essential clinical information' }),
    ]),
  ],
};

// ============================================================================
// D117 — Attention-Deficit/Hyperactivity Disorder, Combined (F90.2)
//        — Neurodevelopmental — medium
// ============================================================================
const D117 = {
  id: 'ncmhce-D117',
  title: 'Lifelong distractibility and restlessness derailing work',
  category: 'Neurodevelopmental',
  difficulty: 'medium',
  primaryDiagnosis: { name: 'Attention-Deficit/Hyperactivity Disorder, Combined', code: 'F90.2' },
  diagnosis: { name: 'Attention-Deficit/Hyperactivity Disorder, Combined', code: 'F90.2' },
  differentialOptions: [
    { id: 'do1', name: 'Attention-Deficit/Hyperactivity Disorder, Combined', isCorrect: true },
    { id: 'do2', name: 'Generalized Anxiety Disorder', isCorrect: false },
    { id: 'do3', name: 'Bipolar II Disorder', isCorrect: false },
    { id: 'do4', name: 'Major Depressive Disorder, Moderate', isCorrect: false },
  ],
  narrative: {
    intake:
      'Diego Morales, a 27-year-old graphic designer, presents with lifelong distractibility, disorganization, and restlessness that ' +
      'are now jeopardizing his job. He misses deadlines, loses track of tasks, interrupts others, and struggles to sit through meetings.',
    session1:
      'He recalls similar problems since grade school—careless errors, fidgeting, and trouble finishing work—and report cards noting he ' +
      'was “bright but unfocused.” The difficulties show up both at work and at home and are not limited to one setting or one period.',
    session2:
      'He denies discrete episodes of elevated mood or decreased need for sleep, and his concentration problems are chronic rather than ' +
      'episodic. He feels demoralized and calls himself “lazy,” though he works long hours trying to compensate for the disorganization.',
  },
  diagnosticRationale:
    'A persistent pattern of inattention together with hyperactivity-impulsivity, with several symptoms present before age 12, occurring ' +
    'in more than one setting and causing clear functional impairment, in a chronic rather than episodic course, meets DSM-5-TR criteria ' +
    'for ADHD, combined presentation, rather than an anxiety, bipolar, or depressive disorder accounting for the difficulties.',
  references: [
    { id: 'R1', source: 'DSM-5-TR', detail: 'ADHD: inattention and hyperactivity-impulsivity, onset before age 12, 2+ settings, impairment' },
    { id: 'R2', source: 'NICE guidelines', detail: 'ADHD: psychoeducation, behavioral and skills interventions, and medication referral' },
    { id: 'R3', source: 'Hays (Assessment)', detail: 'Use of validated rating scales and collateral/developmental history in assessment' },
    { id: 'R4', source: 'ACA Code of Ethics', detail: 'A.1. and C.2.: client welfare, scope of practice, and coordination of care' },
    { id: 'R5', source: 'NBCC Content Outline', detail: 'Measurement-based care and clinical decision-making across the counseling process' },
  ],
  questions: [
    Q('q1', 'intake', 'What is most important to establish to support an adult ADHD diagnosis?', ['R1'], [
      O('a', 'That several symptoms were present before age 12 and that impairment occurs across more than one setting', 3,
        { r: 'Childhood onset and cross-setting impairment', approach: 'Confirm onset and pervasiveness', why: 'DSM-5-TR requires onset before 12 and 2+ settings', keys: ['problems since grade school', 'work and home'], mistake: 'Diagnosing adult ADHD without childhood onset' }),
      O('b', 'That his attention problems first clearly began only after the recent pressures at his current job started building up', -1,
        { r: 'Adult-onset-only argues against ADHD', approach: 'Recent-onset framing', why: 'ADHD requires childhood onset, not a recent start', keys: ['lifelong pattern'], mistake: 'Accepting a purely adult onset' }),
      O('c', 'That he can identify the single stressful life event that he believes is responsible for his current difficulties focusing', -1,
        { r: 'A precipitant is not the criterion', approach: 'Trigger framing', why: 'Etiology is not part of the ADHD criteria', keys: ['chronic pattern'], mistake: 'Using a trigger as the diagnostic test' }),
      O('d', 'That his symptoms are noticeably more severe right now than they were at any earlier point in his life so far', 0,
        { r: 'Current severity is not the criterion', approach: 'Severity-trend framing', why: 'A chronic pattern, not worsening, is required', keys: ['stable chronic course'], mistake: 'Requiring progression to diagnose' }),
    ]),
    Q('q2', 'core', 'Which feature best differentiates his presentation from generalized anxiety disorder?', ['R1'], [
      O('a', 'His attention problems are a lifelong, pervasive pattern rather than concentration difficulty arising from chronic worry', 3,
        { r: 'Lifelong trait pattern versus worry-driven', approach: 'Contrast the source of inattention', why: 'ADHD inattention is developmental; GAD inattention stems from worry', keys: ['since grade school', 'denies pervasive worry'], mistake: 'Mistaking anxiety-driven distraction for ADHD' }),
      O('b', 'The fact that he feels restless and has trouble sitting still during long meetings and lengthy work tasks at his job', -1,
        { r: 'Restlessness occurs in both', approach: 'Symptom-presence framing', why: 'Restlessness is nonspecific between the two', keys: ['shared feature'], mistake: 'Using restlessness to differentiate' }),
      O('c', 'The trouble he has falling asleep at night and the fatigue that he reports across most of his ordinary workdays', -1,
        { r: 'Sleep and fatigue occur in both', approach: 'Somatic framing', why: 'These features do not separate the disorders', keys: ['shared symptoms'], mistake: 'Reading sleep issues as decisive' }),
      O('d', 'The way his difficulties tend to feel worse during the busiest and most demanding weeks of his design projects at work', 0,
        { r: 'Stress reactivity is nonspecific', approach: 'Stress framing', why: 'Worsening under load does not differentiate them', keys: ['nonspecific reactivity'], mistake: 'Using stress sensitivity to differentiate' }),
    ]),
    Q('q3', 'core', 'How does his presentation differ from bipolar II disorder?', ['R1'], [
      O('a', 'His symptoms are a chronic, continuous pattern rather than occurring in discrete episodes of elevated mood and energy', 3,
        { r: 'Chronic pattern versus discrete episodes', approach: 'Contrast course and episodicity', why: 'Bipolar II involves discrete hypomanic episodes; ADHD is continuous', keys: ['denies elevated-mood episodes', 'chronic course'], mistake: 'Confusing chronic ADHD with episodic hypomania' }),
      O('b', 'The fact that he is often impulsive and tends to interrupt others during conversations and meetings throughout the day', -1,
        { r: 'Impulsivity occurs in both', approach: 'Symptom-presence framing', why: 'Impulsivity is shared between them', keys: ['shared feature'], mistake: 'Using impulsivity to differentiate' }),
      O('c', 'The trouble he has organizing his tasks and following through on his work projects from start to finish at his job', -1,
        { r: 'Disorganization can occur in both', approach: 'Executive framing', why: 'Disorganization is nonspecific here', keys: ['shared difficulty'], mistake: 'Reading disorganization as decisive' }),
      O('d', 'The high energy he puts into working long hours as he tries to keep up with and compensate for his disorganization', 0,
        { r: 'Effortful overwork is not hypomania', approach: 'Effort framing', why: 'Compensatory effort is not an elevated-mood episode', keys: ['compensatory effort'], mistake: 'Misreading hard work as hypomania' }),
    ]),
    Q('q4', 'intake', 'What assessment method most strengthens the diagnostic evaluation?', ['R3'], [
      O('a', 'Validated ADHD rating scales together with developmental history and collateral information from those who know him', 3,
        { r: 'Rating scales plus collateral history', approach: 'Use structured, multi-source assessment', why: 'Scales and collateral confirm pervasiveness and onset', keys: ['need cross-setting data'], mistake: 'Relying on a single unstructured interview' }),
      O('b', 'Asking him to keep an open-ended journal describing his feelings each day without any structured measure or collateral input', -1,
        { r: 'An open journal is not structured assessment', approach: 'Narrative-only framing', why: 'It does not establish onset or pervasiveness', keys: ['no structured data'], mistake: 'Using narrative in place of measurement' }),
      O('c', 'Observing only how he behaves during the session itself and basing the diagnosis entirely on that single observation', -1,
        { r: 'One observation is insufficient', approach: 'Single-snapshot framing', why: 'Cross-setting evidence is needed for ADHD', keys: ['pervasiveness'], mistake: 'Diagnosing from one in-session sample' }),
      O('d', 'Ordering neuropsychological and neuroimaging tests yourself to confirm the diagnosis before beginning any treatment planning', -1,
        { r: 'Ordering such tests exceeds scope', approach: 'Order tests framing', why: 'Counselors coordinate but do not order these tests', keys: ['scope limit'], mistake: 'Acting outside scope of practice' }),
    ]),
    Q('q5', 'intake', 'What is most important to rule out before confirming the diagnosis?', ['R1'], [
      O('a', 'Medical and substance contributors and other conditions, such as a sleep disorder or depression, that can impair attention', 3,
        { r: 'Rule out mimics of inattention', approach: 'Screen alternative explanations', why: 'Sleep, mood, and substances can mimic ADHD inattention', keys: ['demoralized', 'long hours'], mistake: 'Diagnosing ADHD without screening mimics' }),
      O('b', 'A previously undetected primary psychotic disorder that could account for his disorganization and trouble finishing tasks', -1,
        { r: 'Psychosis is not indicated', approach: 'Psychosis framing', why: 'Nothing suggests a psychotic process', keys: ['reality testing intact'], mistake: 'Pursuing an unsupported rule-out' }),
      O('c', 'A long-standing eating disorder that might be contributing to his low energy and his trouble concentrating at his job', -1,
        { r: 'Eating pathology is not indicated', approach: 'Eating-disorder framing', why: 'No eating concerns are reported', keys: ['no eating data'], mistake: 'Inventing an unsupported rule-out' }),
      O('d', 'An emerging neurocognitive decline that could explain the careless errors and forgetfulness he has shown since childhood', 0,
        { r: 'Lifelong symptoms argue against decline', approach: 'Neurocognitive framing', why: 'A childhood-onset pattern fits ADHD, not decline', keys: ['lifelong pattern'], mistake: 'Pursuing an improbable rule-out' }),
    ]),
    Q('q6', 'treatment', 'What is the most appropriate within-scope treatment recommendation?', ['R2'], [
      O('a', 'Provide skills-based behavioral and organizational intervention and coordinate a referral for a medication evaluation', 3,
        { r: 'Skills plus coordinated med referral', approach: 'Combine skills with coordinated care', why: 'NICE supports skills-based work plus medication referral for ADHD', keys: ['disorganization', 'functional impairment'], mistake: 'Treating ADHD with insight-only therapy' }),
      O('b', 'Recommend that he start a stimulant medication right away and adjust the dose himself depending on how focused he feels', -2,
        { r: 'Prescribing is outside counselor scope', approach: 'Prescribe medication', why: 'Counselors do not prescribe or titrate', keys: ['no prescriptive authority'], mistake: 'Acting outside scope of practice' }),
      O('c', 'Focus mainly on long-term exploration of his early childhood as the central route to resolving his attention problems', -1,
        { r: 'Insight-only is not first-line', approach: 'Depth-only framing', why: 'Skills-based work is more effective for ADHD', keys: ['skills deficit'], mistake: 'Prioritizing insight over skills' }),
      O('d', 'Suggest he simply try harder to focus and reassure him that more willpower and discipline will resolve the difficulties', -2,
        { r: 'Willpower framing is inaccurate and harmful', approach: 'Willpower framing', why: 'ADHD is not resolved by effort alone', keys: ['self-labels as lazy'], mistake: 'Moralizing about a neurodevelopmental condition' }),
    ]),
    Q('q7', 'treatment', 'Which skills-based target is most appropriate for his presentation?', ['R2'], [
      O('a', 'Externalizing organization through planners, reminders, task breakdown, and environmental structure to support follow-through', 3,
        { r: 'Externalize organization and structure', approach: 'Build compensatory systems', why: 'External structure supports executive functioning in ADHD', keys: ['misses deadlines', 'loses track of tasks'], mistake: 'Relying on internal willpower alone' }),
      O('b', 'Encouraging him to keep all of his deadlines and task lists in his head so that he learns to strengthen his memory over time', -2,
        { r: 'Relying on memory worsens follow-through', approach: 'Internal-memory framing', why: 'It works against the executive-function deficit', keys: ['working-memory difficulty'], mistake: 'Removing external supports' }),
      O('c', 'Teaching him deep relaxation techniques to use whenever he feels restless, without addressing his organization or planning', -1,
        { r: 'Relaxation alone misses the core', approach: 'Arousal-only framing', why: 'It does not target executive functioning', keys: ['organization untreated'], mistake: 'Treating restlessness while ignoring planning' }),
      O('d', 'Advising him to take on even more projects at once so that he stays busy enough to avoid getting bored and distracted', -1,
        { r: 'Overloading worsens follow-through', approach: 'Overload framing', why: 'More simultaneous tasks worsen ADHD difficulties', keys: ['task overload'], mistake: 'Increasing demands instead of structuring them' }),
    ]),
    Q('q8', 'treatment', 'Diego asks which ADHD medication and dose he should request. The most appropriate action is to:', ['R4'], [
      O('a', 'Explain that medication selection and dosing are the prescriber’s role and offer, with consent, to coordinate his questions', 3,
        { r: 'Defer prescribing; coordinate with consent', approach: 'Respect scope and coordinate', why: 'Medication selection is outside counselor scope', keys: ['asks about medication', 'scope limit'], mistake: 'Recommending a specific medication or dose' }),
      O('b', 'Recommend the specific stimulant and dose that tends to work best for adults who present with his particular symptom pattern', -2,
        { r: 'Naming a drug and dose exceeds scope', approach: 'Prescriptive advice', why: 'Counselors do not select medications or doses', keys: ['no prescriptive authority'], mistake: 'Overstepping into medication management' }),
      O('c', 'Tell him to ask for the highest available dose so the medication is sure to keep him focused throughout his entire workday', -2,
        { r: 'Directing dosing is unsafe and out of scope', approach: 'Maximize-dose advice', why: 'Dose decisions require medical evaluation', keys: ['safety risk'], mistake: 'Giving specific pharmacologic direction' }),
      O('d', 'Say medication is purely a medical matter and decline to help him prepare any questions at all for his upcoming appointment', -1,
        { r: 'Refusing to coordinate abandons the need', approach: 'Flat refusal', why: 'Helping him frame questions is appropriate', keys: ['care coordination'], mistake: 'Declining to support communication with the prescriber' }),
    ]),
    Q('q9', 'counseling', 'Diego calls himself “lazy” and feels demoralized about his difficulties. The most therapeutic response is to:', ['R2'], [
      O('a', 'Reframe the difficulties as a treatable neurodevelopmental condition and highlight his real efforts to compensate', 3,
        { r: 'Reframe shame; affirm effort', approach: 'Normalize and reframe', why: 'Reframing reduces shame and supports engagement', keys: ['self-labels as lazy', 'works long hours'], mistake: 'Either reinforcing or ignoring the self-blame' }),
      O('b', 'Agree that he does seem to lack discipline and encourage him to simply hold himself to a much higher standard going forward', -2,
        { r: 'Endorsing the self-blame deepens shame', approach: 'Validate the distortion', why: 'It reinforces the demoralizing belief', keys: ['shame'], mistake: 'Colluding with the “lazy” self-narrative' }),
      O('c', 'Move past the comment quickly and refocus the session on reviewing the organizational tools he has started to put in place', -1,
        { r: 'Bypassing the shame misses a target', approach: 'Redirect to task', why: 'The demoralization is clinically relevant', keys: ['unaddressed cognition'], mistake: 'Avoiding emotionally salient material' }),
      O('d', 'Provide detailed statistics on how common adult ADHD is in the population to logically prove that he is not actually lazy', -1,
        { r: 'Facts alone rarely shift shame', approach: 'Statistical persuasion', why: 'Validation works better than data here', keys: ['emotional reasoning'], mistake: 'Answering emotion with numbers' }),
    ]),
    Q('q10', 'counseling', 'How can the counselor best support Diego’s follow-through between sessions?', ['R5'], [
      O('a', 'Collaboratively set small, specific, achievable between-session steps and review them with a measurement-based check-in', 3,
        { r: 'Small specific steps plus measured review', approach: 'Structure and track tasks', why: 'Concrete steps and tracking support ADHD follow-through', keys: ['difficulty finishing tasks'], mistake: 'Assigning vague, oversized goals' }),
      O('b', 'Assign him a large, ambitious overhaul of his entire work system to complete on his own before the next appointment', -1,
        { r: 'A huge task invites failure', approach: 'All-at-once framing', why: 'Oversized goals reduce completion in ADHD', keys: ['executive difficulty'], mistake: 'Ignoring the need to grade tasks' }),
      O('c', 'Leave the between-session work entirely open-ended and trust that he will figure out the details on his own as he goes', -1,
        { r: 'Open-ended tasks reduce follow-through', approach: 'Unstructured framing', why: 'Structure supports follow-through in ADHD', keys: ['needs specificity'], mistake: 'Omitting structure the client needs' }),
      O('d', 'Track only whether he attends his sessions and treat consistent attendance as the main sign that he is making progress', 0,
        { r: 'Attendance is not an outcome measure', approach: 'Adherence proxy', why: 'Attendance does not measure functional change', keys: ['process vs outcome'], mistake: 'Mistaking attendance for progress' }),
    ]),
    Q('q11', 'counseling', 'Diego worries that an ADHD diagnosis just gives him an “excuse” to fail. Best response?', ['R2'], [
      O('a', 'Validate the worry and reframe the diagnosis as an explanation that guides effective strategies, not an excuse to give up', 3,
        { r: 'Reframe diagnosis as a guide, not an excuse', approach: 'Normalize and reframe', why: 'Framing the diagnosis as actionable supports responsibility and hope', keys: ['fears it is an excuse'], mistake: 'Either dismissing or reinforcing the belief' }),
      O('b', 'Agree that a diagnosis can indeed become a convenient excuse and warn him not to rely on it to justify any future mistakes', -2,
        { r: 'Endorsing the “excuse” framing harms engagement', approach: 'Confirm the worry', why: 'It undermines the value of understanding the condition', keys: ['self-stigma'], mistake: 'Reinforcing the self-judgment' }),
      O('c', 'Tell him not to worry about labels at all and move directly on to reviewing his organizational strategies for the week', -1,
        { r: 'Bypassing the concern misses a target', approach: 'Redirect to task', why: 'His meaning-making about the diagnosis matters', keys: ['unaddressed concern'], mistake: 'Avoiding emotionally salient material' }),
      O('d', 'Explain the detailed neuroscience of ADHD at length to convince him on technical grounds that it is a legitimate condition', -1,
        { r: 'Lecturing rarely shifts the worry', approach: 'Didactic persuasion', why: 'Validation and reframing work better here', keys: ['emotional reasoning'], mistake: 'Substituting facts for engagement' }),
    ]),
    Q('q12', 'ethics', 'Diego requests a letter for workplace accommodations. What is the most appropriate counselor action?', ['R4'], [
      O('a', 'Provide accurate documentation within competence, with his consent, describing functional impacts relevant to accommodations', 3,
        { r: 'Document accurately within competence', approach: 'Support accommodations honestly', why: 'Honest, in-scope documentation with consent is appropriate', keys: ['requests accommodations', 'consent'], mistake: 'Misrepresenting or overstating the findings' }),
      O('b', 'Write whatever will most help him secure the accommodations he wants, even if it overstates how impaired he actually is', -2,
        { r: 'Overstating impairment is dishonest', approach: 'Exaggerate to help', why: 'Beneficence cannot justify inaccurate documentation', keys: ['accuracy required'], mistake: 'Falsifying clinical documentation' }),
      O('c', 'Refuse to provide any documentation at all and tell him that workplace accommodations are entirely outside the counseling role', -1,
        { r: 'A blanket refusal overstates the limit', approach: 'Flat refusal', why: 'In-scope documentation with consent is appropriate', keys: ['care coordination'], mistake: 'Declining appropriate documentation' }),
      O('d', 'Send the letter directly to his employer yourself before discussing with him exactly what it will say or obtaining his consent', -2,
        { r: 'Disclosing without consent breaches confidentiality', approach: 'Disclose without consent', why: 'Release of information requires his informed consent', keys: ['no release'], mistake: 'Sharing records without authorization' }),
    ]),
    Q('q13', 'ethics', 'Diego’s employer calls asking whether he has “a mental condition affecting his work.” Best response?', ['R4'], [
      O('a', 'Decline to confirm or deny without a valid release and explain that disclosure requires his written consent', 3,
        { r: 'Protect confidentiality without a release', approach: 'Uphold confidentiality', why: 'ACA protects information absent valid consent', keys: ['employer inquiry', 'no release'], mistake: 'Disclosing to an employer without consent' }),
      O('b', 'Confirm that he has ADHD, since the employer clearly already suspects it and is only trying to support him at work', -2,
        { r: 'Confirming breaches confidentiality', approach: 'Assume good intent permits it', why: 'Suspicion does not authorize disclosure', keys: ['no valid release'], mistake: 'Disclosing without authorization' }),
      O('c', 'Share a general summary of his condition so that the employer can decide what accommodations might be reasonable for him', -2,
        { r: 'Disclosing for accommodations still needs consent', approach: 'Soft disclosure', why: 'Only a valid release permits disclosure', keys: ['confidentiality'], mistake: 'Leaking details under the guise of helping' }),
      O('d', 'Refuse to speak with the employer at all and hang up without explaining anything about confidentiality or the proper process', -1,
        { r: 'Abrupt refusal misses a teachable moment', approach: 'Flat refusal', why: 'The rationale can be explained appropriately', keys: ['professional courtesy'], mistake: 'Being needlessly obstructive' }),
    ]),
  ],
};

// ============================================================================
// D118 — Narcissistic Personality Disorder (F60.81) — Personality — hard
// ============================================================================
const D118 = {
  id: 'ncmhce-D118',
  title: 'Grandiosity and fragile self-esteem after a demotion',
  category: 'Personality',
  difficulty: 'hard',
  primaryDiagnosis: { name: 'Narcissistic Personality Disorder', code: 'F60.81' },
  diagnosis: { name: 'Narcissistic Personality Disorder', code: 'F60.81' },
  differentialOptions: [
    { id: 'do1', name: 'Narcissistic Personality Disorder', isCorrect: true },
    { id: 'do2', name: 'Antisocial Personality Disorder', isCorrect: false },
    { id: 'do3', name: 'Bipolar I Disorder, Current Episode Manic', isCorrect: false },
    { id: 'do4', name: 'Major Depressive Disorder, Moderate', isCorrect: false },
  ],
  narrative: {
    intake:
      'Preston Vance, a 42-year-old executive, is referred after workplace conflict. He presents with a long-standing pattern of ' +
      'grandiosity, a strong need for admiration, entitlement, and limited empathy, and he is contemptuous of colleagues he sees as inferior.',
    session1:
      'He recently lost a promotion he felt entitled to and reacted with intense shame, anger, and a depressed mood he hides behind ' +
      'disdain. He frequently references his special talents and expects special treatment, and he bristles when his account is questioned.',
    session2:
      'He has had similar interpersonal patterns across many jobs and relationships for years rather than only recently. He admits, ' +
      'reluctantly, to passing thoughts that life is pointless after the demotion, without plan or intent, framed as others’ failure to recognize him.',
  },
  diagnosticRationale:
    'A pervasive, long-standing pattern of grandiosity, need for admiration, entitlement, interpersonal exploitativeness, lack of empathy, ' +
    'and fragile self-esteem vulnerable to narcissistic injury meets DSM-5-TR criteria for narcissistic personality disorder, distinct from ' +
    'the deceit and disregard for others’ rights in antisocial personality disorder, episodic mania, or a primary depressive disorder.',
  references: [
    { id: 'R1', source: 'DSM-5-TR', detail: 'NPD: pervasive grandiosity, need for admiration, and lack of empathy (5 of 9 criteria)' },
    { id: 'R2', source: 'C-SSRS', detail: 'Structured suicide-risk screening, important after narcissistic injury' },
    { id: 'R3', source: 'Corey (Theory & Practice)', detail: 'Approach selection and managing the working alliance with personality pathology' },
    { id: 'R4', source: 'ACA Code of Ethics', detail: 'A.1., A.6., and C.2.: welfare, boundaries, and consultation/competence' },
    { id: 'R5', source: 'NBCC Content Outline', detail: 'Clinical decision-making and measurement-based care across the counseling process' },
  ],
  questions: [
    Q('q1', 'intake', 'What is most important to establish to support a narcissistic personality disorder diagnosis?', ['R1'], [
      O('a', 'A pervasive, long-standing pattern of grandiosity, need for admiration, and lack of empathy across many situations', 3,
        { r: 'Pervasive enduring pattern across contexts', approach: 'Confirm the trait pattern', why: 'DSM-5-TR requires a pervasive, enduring pattern of 5 of 9 criteria', keys: ['grandiosity and entitlement', 'pattern across years'], mistake: 'Diagnosing from a single recent reaction' }),
      O('b', 'That he can identify the specific recent event that he believes first caused him to start behaving in this particular way', -1,
        { r: 'A precipitant is not the criterion', approach: 'Trigger framing', why: 'Etiology is not part of the criteria', keys: ['pattern-based diagnosis'], mistake: 'Using a trigger as the diagnostic test' }),
      O('c', 'That his current grandiosity is clearly more intense now than it was at any earlier point in his adult life so far', -1,
        { r: 'Current intensity is not the criterion', approach: 'Severity-trend framing', why: 'A pervasive, stable pattern is required', keys: ['enduring pattern'], mistake: 'Requiring escalation to diagnose' }),
      O('d', 'That he currently meets the full symptom count required for a discrete major depressive episode at this point in time', 0,
        { r: 'Depressive count does not define NPD', approach: 'Mood-criteria framing', why: 'NPD is a personality pattern, not a mood episode', keys: ['personality pattern'], mistake: 'Applying depressive criteria here' }),
    ]),
    Q('q2', 'core', 'Which feature best differentiates his presentation from antisocial personality disorder?', ['R1'], [
      O('a', 'His grandiosity and need for admiration with fragile self-esteem, rather than deceit and disregard for others’ rights for gain', 3,
        { r: 'Admiration/fragility versus exploitation/deceit', approach: 'Contrast the core motivation', why: 'NPD centers on admiration and fragile esteem; ASPD on disregard and deceit', keys: ['need for admiration', 'narcissistic injury'], mistake: 'Conflating entitlement with antisocial disregard' }),
      O('b', 'The fact that he can be interpersonally exploitative and tends to take advantage of colleagues when it serves his own interests', -1,
        { r: 'Exploitativeness occurs in both', approach: 'Exploitation framing', why: 'Exploitativeness is shared; the motivation differs', keys: ['shared feature'], mistake: 'Using exploitativeness to differentiate' }),
      O('c', 'The intense anger and irritability that he displays whenever his colleagues or his family question his account of events', -1,
        { r: 'Anger occurs in both', approach: 'Symptom-presence framing', why: 'Anger is nonspecific between them', keys: ['shared affect'], mistake: 'Reading anger as decisive' }),
      O('d', 'The high level of confidence and ambition that he has consistently brought to his career and his professional projects', 0,
        { r: 'Confidence is nonspecific', approach: 'Confidence framing', why: 'Ambition does not separate the disorders', keys: ['nonspecific trait'], mistake: 'Using confidence to differentiate' }),
    ]),
    Q('q3', 'core', 'How does his presentation differ from a current manic episode?', ['R1'], [
      O('a', 'His grandiosity is an enduring personality trait rather than part of a discrete episode with decreased need for sleep and elevated energy', 3,
        { r: 'Trait grandiosity versus an episode', approach: 'Contrast trait with episode', why: 'Manic grandiosity is episodic with sleep and energy change; NPD is a stable trait', keys: ['pattern across years', 'no sleep or energy change'], mistake: 'Confusing trait grandiosity with mania' }),
      O('b', 'The fact that he speaks at length and with great confidence about his special talents and abilities during the session', -1,
        { r: 'Grandiose talk occurs in both', approach: 'Symptom-presence framing', why: 'Grandiose content is shared; course differs', keys: ['shared content'], mistake: 'Using grandiose talk to differentiate' }),
      O('c', 'The irritability and short temper that he shows whenever others fail to give him the recognition he believes he deserves', -1,
        { r: 'Irritability occurs in both', approach: 'Irritability framing', why: 'Irritability is nonspecific between them', keys: ['shared affect'], mistake: 'Reading irritability as decisive' }),
      O('d', 'The way his mood seems somewhat lower since the demotion than it was during the months before he lost the promotion', 0,
        { r: 'Mood change does not establish mania', approach: 'Mood-change framing', why: 'A reactive mood dip is not a manic episode', keys: ['reactive dip'], mistake: 'Misreading reactivity as a mood episode' }),
    ]),
    Q('q4', 'core', 'Given his admission of passing thoughts that life is pointless, the most appropriate step is to:', ['R2'], [
      O('a', 'Conduct a structured suicide-risk assessment, recognizing that narcissistic injury can elevate acute suicide risk', 3,
        { r: 'Assess risk after narcissistic injury', approach: 'Screen risk with structure', why: 'Narcissistic injury can sharply elevate suicide risk', keys: ['demotion injury', 'passing thoughts life is pointless'], mistake: 'Dismissing risk because he frames it as others’ fault' }),
      O('b', 'Treat the comment as merely a dramatic expression of his wounded pride that does not call for any structured assessment', -2,
        { r: 'Minimizing the ideation is unsafe', approach: 'Minimize as drama', why: 'It forecloses needed risk assessment', keys: ['unassessed ideation'], mistake: 'Dismissing ideation as theatrics' }),
      O('c', 'Move ahead with exploring his personality patterns first, assuming the thoughts will fade once his self-esteem recovers', -1,
        { r: 'Risk must be assessed before this', approach: 'Treatment-first framing', why: 'Safety assessment precedes pattern work', keys: ['active disclosure'], mistake: 'Sequencing exploration ahead of safety' }),
      O('d', 'Ask him to sign a brief written promise that he will stay safe and call the office if the thoughts get worse this week', -2,
        { r: 'No-suicide contracts are not evidence-based', approach: 'No-harm contract', why: 'Contracts do not reduce risk or assess it', keys: ['needs safety planning'], mistake: 'Substituting a contract for assessment' }),
    ]),
    Q('q5', 'intake', 'What is most important to understand about the demotion in his clinical picture?', ['R1'], [
      O('a', 'That it functioned as a narcissistic injury, triggering shame and depressed mood beneath his outward disdain', 3,
        { r: 'Frame the demotion as a narcissistic injury', approach: 'Identify the precipitating injury', why: 'Threats to grandiosity commonly trigger shame and depression in NPD', keys: ['intense shame and anger', 'hides depressed mood'], mistake: 'Taking his disdain at face value and missing the injury' }),
      O('b', 'That it is the underlying root cause of his personality pattern, which only truly began after he lost the promotion', -1,
        { r: 'The pattern predates the demotion', approach: 'Recent-onset framing', why: 'NPD is long-standing, not caused by one event', keys: ['lifelong pattern'], mistake: 'Treating the injury as the origin of the disorder' }),
      O('c', 'That it proves his complaints about his colleagues are entirely accurate and that he was genuinely treated unfairly at work', -1,
        { r: 'Taking the account at face value is an error', approach: 'Endorse his narrative', why: 'Clinical neutrality is needed, not endorsement', keys: ['distorted appraisal'], mistake: 'Colluding with his version of events' }),
      O('d', 'That it is best set aside for now so the work can focus on more neutral and less emotionally charged topics with him', -1,
        { r: 'Avoiding the injury misses a key target', approach: 'Topic avoidance', why: 'The injury is central to his current distress', keys: ['avoided material'], mistake: 'Sidestepping the precipitating event' }),
    ]),
    Q('q6', 'treatment', 'What is the most appropriate treatment-planning expectation for him?', ['R3'], [
      O('a', 'Realistic, collaboratively set goals such as easing his depression and improving functioning, within a longer-term psychotherapy', 3,
        { r: 'Realistic goals in longer-term therapy', approach: 'Set achievable, collaborative goals', why: 'NPD treatment targets comorbidity and functioning over time', keys: ['comorbid depressed mood', 'enduring pattern'], mistake: 'Promising a rapid personality transformation' }),
      O('b', 'A brief, time-limited intervention aimed at quickly and permanently changing his core personality structure within a few sessions', -1,
        { r: 'Brief work cannot remake the structure', approach: 'Quick-fix framing', why: 'Personality change is gradual, not brief', keys: ['enduring pattern'], mistake: 'Setting an unrealistic, rapid goal' }),
      O('c', 'A primarily confrontational approach that repeatedly challenges his grandiosity until he is forced to abandon it entirely', -2,
        { r: 'Harsh confrontation ruptures the alliance', approach: 'Confront the grandiosity', why: 'It tends to trigger injury and dropout', keys: ['fragile self-esteem'], mistake: 'Confronting defenses head-on early' }),
      O('d', 'Mostly admiring and agreeing with him so that he stays comfortable and keeps returning for his appointments with you', -1,
        { r: 'Constant admiration is not treatment', approach: 'Flatter-to-retain framing', why: 'Colluding with grandiosity does not help him', keys: ['need for admiration'], mistake: 'Feeding the grandiosity to keep him engaged' }),
    ]),
    Q('q7', 'treatment', 'How should the counselor structure the treatment frame given his entitlement?', ['R4'], [
      O('a', 'Establish a clear, consistent frame and boundaries early, applied respectfully and predictably across the work', 3,
        { r: 'Clear, consistent, respectful frame', approach: 'Set a steady treatment frame', why: 'A consistent frame contains entitlement-driven testing', keys: ['expects special treatment'], mistake: 'Leaving the frame vague and negotiable' }),
      O('b', 'Grant him the special exceptions and accommodations he requests so that he feels respected and remains willing to engage', -2,
        { r: 'Special exceptions reinforce entitlement', approach: 'Accommodate entitlement', why: 'It reinforces the entitled pattern and erodes the frame', keys: ['entitlement'], mistake: 'Bending the frame to placate him' }),
      O('c', 'Set unusually rigid and punitive rules from the outset to make sure that he clearly understands exactly who is in charge here', -1,
        { r: 'Punitive rigidity invites power struggles', approach: 'Authoritarian framing', why: 'A harsh stance can trigger injury and conflict', keys: ['fragile self-esteem'], mistake: 'Using rigidity to dominate' }),
      O('d', 'Avoid setting any boundaries at all early on so that the relationship does not feel confrontational before trust is built', -1,
        { r: 'No boundaries invites frame erosion', approach: 'Boundary-free framing', why: 'A clear frame is part of building a workable alliance', keys: ['frame stability'], mistake: 'Deferring all limits indefinitely' }),
    ]),
    Q('q8', 'treatment', 'Preston’s depressed mood may warrant a medication evaluation. The most appropriate action is to:', ['R4'], [
      O('a', 'Coordinate a referral to a prescriber for evaluation of his depressive symptoms, with his consent, while continuing therapy', 3,
        { r: 'Refer and coordinate within scope', approach: 'Coordinate care', why: 'Counselors refer for medication rather than prescribe', keys: ['comorbid depressed mood'], mistake: 'Giving specific medication advice' }),
      O('b', 'Recommend the specific antidepressant and dose that tends to work best for people with his particular personality profile', -2,
        { r: 'Naming a drug and dose exceeds scope', approach: 'Prescriptive advice', why: 'Medication selection is outside counselor scope', keys: ['no prescriptive authority'], mistake: 'Overstepping professional limits' }),
      O('c', 'Tell him that his low mood is simply wounded pride and that medication would have nothing useful to offer him at all', -1,
        { r: 'Dismissing the depression is an error', approach: 'Minimize the mood', why: 'His depressive symptoms warrant proper evaluation', keys: ['comorbid depression'], mistake: 'Writing off a treatable comorbidity' }),
      O('d', 'Discourage any medication and assure him that his superior willpower alone will be more than enough to overcome the low mood', -1,
        { r: 'Willpower framing dismisses care', approach: 'Willpower framing', why: 'It ignores an evidence-based option', keys: ['evidence ignored'], mistake: 'Reducing treatment to willpower' }),
    ]),
    Q('q9', 'counseling', 'Preston abruptly devalues the counselor as “not on his level.” The most therapeutic response is to:', ['R3'], [
      O('a', 'Stay nonreactive, hold the frame, and explore the devaluation as a response to feeling threatened or injured', 3,
        { r: 'Nonreactive stance; explore the injury', approach: 'Contain and explore the rupture', why: 'Devaluation often follows narcissistic injury and is workable material', keys: ['devalues the counselor', 'recent injury'], mistake: 'Retaliating or capitulating to the devaluation' }),
      O('b', 'Defend your qualifications in detail and make sure he understands that you are in fact highly competent and well trained', -1,
        { r: 'Defending invites a power struggle', approach: 'Defend yourself', why: 'It escalates rather than explores the rupture', keys: ['alliance rupture'], mistake: 'Getting drawn into proving yourself' }),
      O('c', 'Agree that he probably would do better with someone more impressive and offer to refer him elsewhere right away today', -2,
        { r: 'Capitulating abandons the work', approach: 'Capitulate to the devaluation', why: 'It enacts the rupture rather than addressing it', keys: ['premature referral'], mistake: 'Dropping the client under devaluation' }),
      O('d', 'Respond with some pointed criticism of your own so that he learns how it feels to be spoken to in that particular way', -2,
        { r: 'Retaliating is unprofessional and harmful', approach: 'Retaliate', why: 'It ruptures the alliance and is unethical', keys: ['countertransference'], mistake: 'Acting out a reaction toward the client' }),
    ]),
    Q('q10', 'counseling', 'How can the counselor best build a working alliance with Preston?', ['R3'], [
      O('a', 'Engage empathically with his underlying vulnerability while maintaining honest, consistent boundaries in the relationship', 3,
        { r: 'Empathy for vulnerability plus steady boundaries', approach: 'Balance empathy and boundaries', why: 'Empathy for the fragile self with a steady frame builds alliance in NPD', keys: ['fragile self-esteem', 'need for admiration'], mistake: 'Either only admiring or only confronting' }),
      O('b', 'Mirror his grandiosity and admire his accomplishments at length so that he feels fully validated and special in the work', -2,
        { r: 'Feeding grandiosity is not alliance', approach: 'Flatter framing', why: 'It reinforces the pattern rather than building real alliance', keys: ['need for admiration'], mistake: 'Colluding with grandiosity' }),
      O('c', 'Keep an emotionally distant, purely neutral stance and share nothing warm so that he cannot manipulate the relationship at all', -1,
        { r: 'Cold distance impedes alliance', approach: 'Detached framing', why: 'Some warmth is needed to engage the vulnerable self', keys: ['needs engagement'], mistake: 'Withholding all warmth defensively' }),
      O('d', 'Focus only on his concrete work problems and avoid any discussion of emotions so that the sessions never become confrontational', -1,
        { r: 'Avoiding affect limits the work', approach: 'Affect-avoidant framing', why: 'The underlying vulnerability is central to engagement', keys: ['avoided affect'], mistake: 'Sidestepping the emotional core' }),
    ]),
    Q('q11', 'ethics', 'The counselor notices strong irritation and a wish to “take him down a peg.” The most appropriate step is to:', ['R4'], [
      O('a', 'Seek consultation or supervision to manage the countertransference and protect the quality of his care', 3,
        { r: 'Use consultation for countertransference', approach: 'Seek consultation', why: 'ACA C.2. supports consultation to maintain competence', keys: ['strong irritation', 'urge to retaliate'], mistake: 'Letting the reaction silently shape care' }),
      O('b', 'Let the irritation come through subtly in session so that he begins to grasp how his behavior affects the people around him', -2,
        { r: 'Acting out the reaction harms care', approach: 'Enact the reaction', why: 'Countertransference enactment is harmful and unethical', keys: ['client welfare'], mistake: 'Letting your reaction drive interventions' }),
      O('c', 'Address the irritation by quietly setting harsher and more punitive limits with him to keep his behavior firmly in check', -1,
        { r: 'Reactive limits serve the clinician', approach: 'Self-protective limits', why: 'Limits should be clinical, not retaliatory', keys: ['countertransference'], mistake: 'Letting reactions drive boundary changes' }),
      O('d', 'Begin the process of transferring him to another provider immediately, since your irritation means you can no longer be helpful', -1,
        { r: 'Premature transfer abandons the client', approach: 'Reflexive transfer', why: 'Consultation should precede any transfer', keys: ['continuity of care'], mistake: 'Transferring instead of addressing the reaction' }),
    ]),
    Q('q12', 'ethics', 'Preston asks the counselor to write to his employer stating he was treated unfairly and deserves reinstatement. Best response?', ['R4'], [
      O('a', 'Explain that you can accurately document treatment with his consent but cannot assert workplace conclusions outside your role', 3,
        { r: 'Document honestly; stay in role', approach: 'Maintain accurate, in-scope records', why: 'Counselors document clinically but do not adjudicate workplace disputes', keys: ['wants an advocacy letter'], mistake: 'Writing partisan conclusions outside your role' }),
      O('b', 'Write the letter exactly as he wants it, asserting he was treated unfairly, since supporting him is clearly good for his recovery', -2,
        { r: 'Partisan assertions exceed the role', approach: 'Advocate as requested', why: 'It oversteps the clinical role and objectivity', keys: ['role boundary'], mistake: 'Taking sides in a workplace dispute' }),
      O('c', 'Refuse to provide any documentation of any kind and tell him that nothing about his treatment can ever be shared with anyone', -1,
        { r: 'A blanket refusal overstates the limit', approach: 'Flat refusal', why: 'Accurate clinical documentation with consent is permissible', keys: ['consent process'], mistake: 'Withholding even appropriate documentation' }),
      O('d', 'Offer to state in writing that his colleagues acted wrongly, based on the account that he has given you during the sessions', -2,
        { r: 'Asserting others’ wrongdoing exceeds the role', approach: 'Adjudicate the dispute', why: 'You cannot verify or assert workplace fault', keys: ['not a fact-finder'], mistake: 'Issuing conclusions you cannot support' }),
    ]),
    Q('q13', 'ethics', 'Preston insists he should be seen on demand outside normal hours because of his status. Best response?', ['R4'], [
      O('a', 'Warmly hold the standard scheduling boundary, applying it consistently while acknowledging his frustration with it', 3,
        { r: 'Hold the boundary consistently and warmly', approach: 'Maintain a fair, consistent frame', why: 'Consistent boundaries protect the work and resist entitlement', keys: ['expects special treatment'], mistake: 'Either granting special access or refusing coldly' }),
      O('b', 'Agree to see him on demand outside of regular hours, since accommodating an important client like him is simply good practice', -2,
        { r: 'Special access reinforces entitlement', approach: 'Grant special access', why: 'It erodes the frame and reinforces the pattern', keys: ['entitlement'], mistake: 'Bending boundaries for status' }),
      O('c', 'Tell him bluntly that he is no more important than anyone else and that he will simply have to wait his turn like everybody does', -1,
        { r: 'A harsh retort invites injury', approach: 'Confrontational framing', why: 'A contemptuous tone can trigger narcissistic injury', keys: ['fragile self-esteem'], mistake: 'Enforcing limits with contempt' }),
      O('d', 'Avoid giving him any clear answer about scheduling so that you do not have to risk upsetting him or provoking his anger', -1,
        { r: 'Vagueness invites repeated testing', approach: 'Evade the limit', why: 'A clear, consistent boundary is needed', keys: ['frame stability'], mistake: 'Leaving the boundary ambiguous' }),
    ]),
  ],
};

// ============================================================================
// D119 — Stimulant Use Disorder (Cocaine) (F14.20) — Substance — medium
// ============================================================================
const D119 = {
  id: 'ncmhce-D119',
  title: 'Cocaine use, crashes, and mounting consequences',
  category: 'Substance',
  difficulty: 'medium',
  primaryDiagnosis: { name: 'Stimulant Use Disorder (Cocaine)', code: 'F14.20' },
  diagnosis: { name: 'Stimulant Use Disorder (Cocaine)', code: 'F14.20' },
  differentialOptions: [
    { id: 'do1', name: 'Stimulant Use Disorder (Cocaine)', isCorrect: true },
    { id: 'do2', name: 'Alcohol Use Disorder, Moderate', isCorrect: false },
    { id: 'do3', name: 'Opioid Use Disorder, Severe', isCorrect: false },
    { id: 'do4', name: 'Bipolar I Disorder, Current Episode Manic', isCorrect: false },
  ],
  narrative: {
    intake:
      'Tara Brooks, a 34-year-old bartender, presents after a friend urged her to get help for her cocaine use. She reports strong ' +
      'cravings, using more than she intends, failed attempts to cut down, and continued use despite conflicts at work and with her partner.',
    session1:
      'She describes needing more cocaine to get the same effect and severe “crashes” of fatigue and low mood for a day or two after ' +
      'binges. She identifies about four to five criteria over the past year and has missed shifts and money because of her use.',
    session2:
      'She is ambivalent—relieved someone noticed yet defensive about being judged—and her crashes bring brief but intense low mood. ' +
      'She denies sustained elevated mood apart from intoxication and is frightened by occasional chest pain during heavy use.',
  },
  diagnosticRationale:
    'A problematic pattern of cocaine use meeting roughly four to five DSM-5-TR criteria over twelve months—craving, tolerance, using more ' +
    'than intended, unsuccessful efforts to cut down, and use despite interpersonal problems—indicates a moderate stimulant use disorder. ' +
    'Post-binge crashes reflect stimulant withdrawal within the disorder, distinct from a primary manic episode, alcohol, or opioid use disorder.',
  references: [
    { id: 'R1', source: 'DSM-5-TR', detail: 'Stimulant use disorder criteria and severity: 2-3 mild, 4-5 moderate, 6+ severe over 12 months' },
    { id: 'R2', source: 'ASAM Criteria', detail: 'Multidimensional assessment matching to the least intensive safe level of care' },
    { id: 'R3', source: 'SAMHSA TIP 35', detail: 'Motivational, stage-matched approaches to enhance readiness for change' },
    { id: 'R4', source: 'Miller & Rollnick (MI)', detail: 'Roll with resistance, develop discrepancy, and evoke change talk' },
    { id: 'R5', source: 'C-SSRS', detail: 'Structured suicide-risk screening, important during post-stimulant crashes' },
    { id: 'R6', source: 'ACA Code of Ethics', detail: 'B.1.: heightened confidentiality of substance-use information and scope of practice' },
  ],
  questions: [
    Q('q1', 'intake', 'What is most important to establish to confirm a moderate stimulant use disorder?', ['R1'], [
      O('a', 'The number of DSM-5-TR criteria she meets over twelve months, since four to five place severity in the moderate range', 3,
        { r: 'Criterion count sets severity', approach: 'Apply the severity threshold', why: 'DSM-5-TR grades stimulant use disorder by criterion count', keys: ['craving', 'tolerance and failed cut-down'], mistake: 'Estimating severity by amount used alone' }),
      O('b', 'The exact quantity of cocaine she uses each week so that you can calculate precisely how dependent she has become on it', -1,
        { r: 'Quantity alone does not set the diagnosis', approach: 'Quantity framing', why: 'Severity rests on criteria, not amount used', keys: ['criteria-based'], mistake: 'Equating quantity with severity' }),
      O('c', 'Whether she first started using cocaine recreationally at parties rather than to cope with stress or with difficult emotions', 0,
        { r: 'Reason for onset is not the criterion', approach: 'Origin framing', why: 'How use began is not a diagnostic criterion', keys: ['onset story'], mistake: 'Using the onset story to diagnose' }),
      O('d', 'Whether anyone else in her immediate family has previously struggled with cocaine or with another substance-related condition', -1,
        { r: 'Family history is risk, not diagnosis', approach: 'Heredity framing', why: 'History informs risk, not current criteria', keys: ['no family data'], mistake: 'Using family history to diagnose' }),
    ]),
    Q('q2', 'core', 'How should the counselor understand the severe fatigue and low mood after her binges?', ['R1'], [
      O('a', 'As stimulant withdrawal—a post-use “crash” that is part of her use disorder rather than a separate primary mood disorder', 3,
        { r: 'The crash is stimulant withdrawal', approach: 'Place the crash in the disorder', why: 'Post-stimulant crashes reflect withdrawal within the use disorder', keys: ['crash of fatigue and low mood', 'after binges'], mistake: 'Diagnosing a primary mood disorder from the crash' }),
      O('b', 'As clear evidence that she has a separate, independent major depressive disorder that happens to flare up after she uses', -1,
        { r: 'The crash is substance-linked, not independent', approach: 'Independent-depression framing', why: 'The timing ties the low mood to use, not a primary disorder', keys: ['mood tied to use'], mistake: 'Calling withdrawal a primary depression' }),
      O('c', 'As a sign that she has simply been using cocaine for too many years in a row without ever taking any meaningful break from it', -1,
        { r: 'Duration is not what defines withdrawal', approach: 'Duration framing', why: 'Withdrawal is defined by the cessation/crash syndrome', keys: ['crash syndrome'], mistake: 'Equating withdrawal with chronicity' }),
      O('d', 'As an indication that she should immediately be admitted for inpatient detoxification before anything else can be considered', 0,
        { r: 'Level of care follows assessment', approach: 'Reflexive admission', why: 'Placement should follow a multidimensional assessment', keys: ['needs assessment first'], mistake: 'Jumping to a level of care prematurely' }),
    ]),
    Q('q3', 'intake', 'Given her chest pain during heavy use and her post-binge crashes, what assessment is most important?', ['R5'], [
      O('a', 'Assess medical risk and suicide risk, since stimulant use carries cardiac danger and crashes can bring acute low mood', 3,
        { r: 'Screen cardiac and suicide risk', approach: 'Prioritize medical and risk assessment', why: 'Stimulants pose cardiac risk and crashes can elevate suicide risk', keys: ['chest pain', 'intense low mood on crashes'], mistake: 'Overlooking medical and suicide risk' }),
      O('b', 'Determine the specific brand or source of the cocaine she uses so that you can document exactly what she has been taking', -1,
        { r: 'Source detail is low yield', approach: 'Product-detail framing', why: 'It does not address medical or suicide risk', keys: ['safety unassessed'], mistake: 'Collecting irrelevant detail' }),
      O('c', 'Explore in depth the early family experiences that she believes first shaped her current relationship with substances', 0,
        { r: 'Depth history is secondary to safety', approach: 'Origins framing', why: 'Medical and risk assessment take priority', keys: ['safety first'], mistake: 'Prioritizing depth over safety' }),
      O('d', 'Identify the particular social situations and people that tend to prompt her heaviest cocaine use during the week', -1,
        { r: 'Trigger mapping is for later planning', approach: 'Trigger framing', why: 'It does not address acute medical or suicide risk', keys: ['risk first'], mistake: 'Skipping the safety assessment' }),
    ]),
    Q('q4', 'core', 'How should the counselor differentiate her presentation from a primary manic episode?', ['R1'], [
      O('a', 'Her elevated, energized states occur only during intoxication rather than as sustained episodes independent of cocaine use', 3,
        { r: 'Intoxication-bound versus sustained episode', approach: 'Tie elevation to intoxication', why: 'Stimulant effects are substance-bound; mania persists independently', keys: ['denies sustained elevation off cocaine'], mistake: 'Misreading intoxication as a manic episode' }),
      O('b', 'The fact that she becomes very energetic and talkative and needs little sleep while she is actively using cocaine', -1,
        { r: 'Intoxication features overlap with mania', approach: 'Symptom-presence framing', why: 'These effects occur in intoxication too', keys: ['shared features'], mistake: 'Using intoxication effects to differentiate' }),
      O('c', 'The irritability and conflict with her partner that have been happening more often over the past several months at home', -1,
        { r: 'Irritability is nonspecific', approach: 'Irritability framing', why: 'Conflict does not separate the two', keys: ['shared feature'], mistake: 'Reading conflict as decisive' }),
      O('d', 'The low mood and fatigue that she experiences in the day or two right after one of her heavier cocaine binges', 0,
        { r: 'The crash is withdrawal, not mania’s opposite pole', approach: 'Crash framing', why: 'The crash reflects withdrawal, not a bipolar course', keys: ['post-use crash'], mistake: 'Reading the crash as a bipolar depressive episode' }),
    ]),
    Q('q5', 'intake', 'What co-occurring issue is most important to screen for to inform her plan?', ['R1'], [
      O('a', 'A co-occurring depressive disorder distinct from her crashes, since mood symptoms shape sequencing and safety planning', 3,
        { r: 'Screen for independent depression', approach: 'Assess comorbidity', why: 'Distinguishing crash low mood from a depressive disorder guides care', keys: ['low mood on crashes', 'interpersonal conflict'], mistake: 'Treating the use disorder without screening mood' }),
      O('b', 'A previously undetected primary psychotic disorder that might better account for her conflicts at work and with her partner', -1,
        { r: 'Psychosis is not indicated', approach: 'Psychosis framing', why: 'Nothing suggests a primary psychotic disorder', keys: ['intact reality testing'], mistake: 'Pursuing an unsupported rule-out' }),
      O('c', 'A long-standing eating disorder that could be contributing to both her low energy and her disrupted daily routine lately', -1,
        { r: 'Eating pathology is not indicated', approach: 'Eating-disorder framing', why: 'No eating concerns are reported', keys: ['no eating data'], mistake: 'Inventing an unsupported comorbidity' }),
      O('d', 'An emerging neurocognitive decline that could explain why she has been forgetting shifts and commitments at work recently', 0,
        { r: 'Cognitive decline is premature here', approach: 'Neurocognitive framing', why: 'Substance effects are a simpler explanation', keys: ['substance-linked'], mistake: 'Over-attributing to cognitive decline' }),
    ]),
    Q('q6', 'treatment', 'What is the most appropriate first-line treatment recommendation for her stimulant use disorder?', ['R2'], [
      O('a', 'Evidence-based behavioral treatment such as contingency management and CBT, since no medication is approved for stimulant use disorder', 3,
        { r: 'Behavioral treatment is first-line here', approach: 'Apply the evidence base', why: 'No FDA-approved medication exists; behavioral treatments are first-line', keys: ['moderate stimulant use disorder'], mistake: 'Waiting for or expecting a medication cure' }),
      O('b', 'A referral to start anti-craving medication for cocaine right away, framed as the single most important step in her treatment', -1,
        { r: 'No approved medication exists for it', approach: 'Medication-first framing', why: 'There is no FDA-approved medication for stimulant use disorder', keys: ['behavioral first-line'], mistake: 'Overstating a pharmacologic option that does not exist' }),
      O('c', 'A firm, confrontational intervention about the damage her cocaine use is doing so that she finally admits how serious it is', -2,
        { r: 'Confrontation raises resistance', approach: 'Confrontational framing', why: 'Confrontation tends to harden ambivalence', keys: ['ambivalent and defensive'], mistake: 'Using confrontation to force insight' }),
      O('d', 'A recommendation that she simply use willpower to stay away from cocaine, since behavioral treatment is rarely truly necessary', -2,
        { r: 'Willpower framing is inaccurate', approach: 'Willpower framing', why: 'It dismisses effective behavioral treatment', keys: ['clinical disorder'], mistake: 'Moralizing instead of treating' }),
    ]),
    Q('q7', 'treatment', 'How should the counselor determine her appropriate level of care?', ['R2'], [
      O('a', 'Use a multidimensional assessment of her medical risk, environment, and readiness to match her to the least intensive safe setting', 3,
        { r: 'Use multidimensional placement', approach: 'Apply level-of-care criteria', why: 'ASAM matches care level across multiple dimensions', keys: ['chest pain', 'ambivalence'], mistake: 'Defaulting to one fixed program' }),
      O('b', 'Automatically refer her to the most intensive residential program available so that she is kept away from cocaine entirely', -1,
        { r: 'Maximal care ignores placement criteria', approach: 'Top-intensity default', why: 'Level of care should match assessed need', keys: ['individualized placement'], mistake: 'Over-placing without assessment' }),
      O('c', 'Recommend only a single weekly mutual-help meeting, assuming that peer support alone will be enough to address her cocaine use', -1,
        { r: 'Under-placement ignores her needs', approach: 'Minimal-care default', why: 'Support groups alone may under-treat', keys: ['moderate severity'], mistake: 'Under-treating a moderate presentation' }),
      O('d', 'Let her choose whichever program has the most convenient schedule regardless of her medical risks or her clinical needs', 0,
        { r: 'Preference cannot override clinical need', approach: 'Convenience framing', why: 'Placement must reflect assessed need', keys: ['shared decision input'], mistake: 'Letting convenience drive placement' }),
    ]),
    Q('q8', 'treatment', 'Given her ambivalence, what is the most appropriate primary counseling approach?', ['R3'], [
      O('a', 'Motivational interviewing to explore her ambivalence and strengthen her own reasons for change at her current stage', 3,
        { r: 'MI fits her ambivalence and stage', approach: 'Match method to readiness', why: 'TIP 35 endorses MI for ambivalent clients', keys: ['relieved yet defensive', 'mixed feelings'], mistake: 'Pushing action before readiness' }),
      O('b', 'A firm, direct confrontation about the serious damage her cocaine use is causing so that she finally faces the full reality of it', -2,
        { r: 'Confrontation raises resistance', approach: 'Confrontational framing', why: 'Confrontation tends to harden ambivalence', keys: ['ambivalent client'], mistake: 'Using confrontation to force insight' }),
      O('c', 'A structured relapse-prevention program built entirely around her committing right now to a firm quit date for complete abstinence', -1,
        { r: 'Action-stage tools precede her readiness', approach: 'Action-first framing', why: 'She has not yet resolved her ambivalence', keys: ['not in action stage'], mistake: 'Applying action tools too early' }),
      O('d', 'Primarily educational lectures detailing the medical harms of cocaine so that the facts alone convince her to stop using it', -1,
        { r: 'Education alone rarely resolves ambivalence', approach: 'Didactic framing', why: 'Evoking her own motivation works better', keys: ['needs change talk'], mistake: 'Relying on information to motivate' }),
    ]),
    Q('q9', 'counseling', 'Tara says, “Maybe my using isn’t even that big a deal.” The MI-consistent response is to:', ['R4'], [
      O('a', 'Reflect her statement and explore both sides of her ambivalence without arguing against her about how serious it is', 3,
        { r: 'Roll with resistance; explore ambivalence', approach: 'Reflect rather than argue', why: 'Rolling with resistance avoids taking the change side for her', keys: ['minimizes the problem'], mistake: 'Arguing her into agreement' }),
      O('b', 'Point out all of the evidence that proves her cocaine use is in fact a very serious problem that she needs to address now', -2,
        { r: 'Arguing the change side raises resistance', approach: 'Righting reflex', why: 'Marshaling evidence tends to evoke counter-arguments', keys: ['discord risk'], mistake: 'Taking up the change side of the argument' }),
      O('c', 'Agree fully that her cocaine use is not really a problem so that she feels supported and stays comfortable working with you', -1,
        { r: 'Colluding with minimization is unhelpful', approach: 'Concede the minimization', why: 'Agreeing abandons the clinical concern', keys: ['minimization endorsed'], mistake: 'Siding with the status quo to please her' }),
      O('d', 'Quickly change the subject to avoid any disagreement with her about exactly how serious her cocaine use really is right now', -1,
        { r: 'Avoiding the moment wastes an opening', approach: 'Topic avoidance', why: 'It loses a key motivational opening', keys: ['missed opening'], mistake: 'Avoiding the topic to dodge conflict' }),
    ]),
    Q('q10', 'counseling', 'Tara returns to use after a week of abstinence and is discouraged. The most therapeutic response is to:', ['R3'], [
      O('a', 'Frame the return to use as common in recovery, explore what it taught her, and revisit the plan without shaming her', 3,
        { r: 'Treat the lapse as learning', approach: 'Normalize and problem-solve', why: 'Lapses are common and informative in recovery', keys: ['discouraged after a slip'], mistake: 'Treating a lapse as total failure' }),
      O('b', 'Warn her seriously that another slip like this one will likely undo all of her progress and prove she cannot really do this', -2,
        { r: 'Catastrophizing deepens shame', approach: 'Threat framing', why: 'It feeds the abstinence-violation effect', keys: ['shame spiral'], mistake: 'Amplifying shame after a lapse' }),
      O('c', 'Recommend that she immediately step up to a far more restrictive level of care since the current plan has obviously failed her', -1,
        { r: 'One lapse does not mandate escalation', approach: 'Reflexive escalation', why: 'A single lapse is not treatment failure', keys: ['expected setback'], mistake: 'Over-escalating after one slip' }),
      O('d', 'Reassure her that the slip really does not matter at all and encourage her to simply forget about it and move on quickly', -1,
        { r: 'Dismissing the lapse skips learning', approach: 'Minimize the lapse', why: 'Exploring the lapse yields useful data', keys: ['learning opportunity'], mistake: 'Glossing over a teachable moment' }),
    ]),
    Q('q11', 'counseling', 'How should the counselor frame Tara’s post-binge crashes in their work together?', ['R5'], [
      O('a', 'As high-risk periods for low mood and safety that warrant monitoring and a plan for support during the crash', 3,
        { r: 'Treat crashes as high-risk windows', approach: 'Plan for the crash period', why: 'Post-stimulant crashes can bring acute low mood and risk', keys: ['intense low mood on crashes'], mistake: 'Ignoring the crash as a risk window' }),
      O('b', 'As proof that she simply needs to use a smaller amount of cocaine so that her crashes will not feel quite so severe afterward', -2,
        { r: 'Optimizing use is not the goal', approach: 'Dose-management framing', why: 'It accommodates use rather than addressing risk', keys: ['use accommodated'], mistake: 'Coaching “safer” use instead of addressing risk' }),
      O('c', 'As an unimportant and temporary discomfort that will pass on its own and therefore does not require any particular attention', -1,
        { r: 'Dismissing the crash misses risk', approach: 'Minimize the crash', why: 'Crashes can carry acute low mood and risk', keys: ['risk window'], mistake: 'Overlooking a high-risk period' }),
      O('d', 'As clear evidence that she has a separate bipolar disorder that will need to be treated entirely apart from her cocaine use', -1,
        { r: 'The crash is withdrawal, not bipolar', approach: 'Bipolar framing', why: 'The crash reflects withdrawal, not a bipolar course', keys: ['substance-linked'], mistake: 'Misattributing the crash to bipolar disorder' }),
    ]),
    Q('q12', 'ethics', 'Tara’s employer requests her substance-use treatment records after she missed shifts. Best response?', ['R6'], [
      O('a', 'Decline to release records without a valid release and explain that substance-use information has heightened confidentiality protections', 3,
        { r: 'SUD records get heightened protection', approach: 'Apply heightened confidentiality', why: 'Substance-use treatment information carries enhanced protection', keys: ['employer request', 'no release'], mistake: 'Releasing SUD records without proper consent' }),
      O('b', 'Send the records to the employer promptly so that the employer can decide how best to handle her recent missed work shifts', -2,
        { r: 'Releasing without consent breaches confidentiality', approach: 'Disclose to the employer', why: 'Disclosing protected records without authorization is a breach', keys: ['no authorization'], mistake: 'Releasing records on request alone' }),
      O('c', 'Share only her diagnosis with the employer, since a single diagnostic label seems like a relatively harmless detail to provide', -2,
        { r: 'A diagnosis is protected information', approach: 'Partial disclosure', why: 'Even a diagnosis requires authorization to disclose', keys: ['confidentiality'], mistake: 'Sharing a diagnosis as if harmless' }),
      O('d', 'Forward the employer’s request to Tara and avoid documenting in the record that the request was ever received at all', -1,
        { r: 'The request should be documented', approach: 'Redirect without documenting', why: 'The request and response should be documented', keys: ['record integrity'], mistake: 'Failing to document a records request' }),
    ]),
    Q('q13', 'ethics', 'Tara asks whether there is a medication that will cure her cocaine cravings. The most appropriate response is to:', ['R6'], [
      O('a', 'Explain honestly that no medication is approved for stimulant use disorder and coordinate medical evaluation for related concerns', 3,
        { r: 'State the evidence honestly; coordinate care', approach: 'Give accurate information within scope', why: 'No FDA-approved medication exists; behavioral treatment is the mainstay', keys: ['asks about a cure', 'chest pain'], mistake: 'Implying a medication cure that does not exist' }),
      O('b', 'Recommend a specific medication and dose that she should ask her physician to prescribe to take away her cocaine cravings', -2,
        { r: 'Naming a drug and dose exceeds scope', approach: 'Prescriptive advice', why: 'Counselors do not recommend medications or doses', keys: ['no prescriptive authority'], mistake: 'Overstepping into medication management' }),
      O('c', 'Assure her that a reliable anti-cocaine medication exists and that starting it will be the single most important part of her treatment', -2,
        { r: 'Overstating a nonexistent option is dishonest', approach: 'Overstate the option', why: 'There is no approved medication for stimulant use disorder', keys: ['accurate information'], mistake: 'Promising a treatment that does not exist' }),
      O('d', 'Tell her that medication questions have nothing to do with counseling and decline to discuss anything related to her health concerns', -1,
        { r: 'Refusing to coordinate abandons the need', approach: 'Flat refusal', why: 'Coordinating medical evaluation is appropriate', keys: ['care coordination'], mistake: 'Declining to help with a legitimate concern' }),
    ]),
  ],
};

// ============================================================================
// D120 — Major Depressive Disorder, with Peripartum Onset (F53.0)
//        — Depressive — medium
// ============================================================================
const D120 = {
  id: 'ncmhce-D120',
  title: 'Persistent low mood and guilt five weeks postpartum',
  category: 'Depressive',
  difficulty: 'medium',
  primaryDiagnosis: { name: 'Major Depressive Disorder, with Peripartum Onset', code: 'F53.0' },
  diagnosis: { name: 'Major Depressive Disorder, with Peripartum Onset', code: 'F53.0' },
  differentialOptions: [
    { id: 'do1', name: 'Major Depressive Disorder, with Peripartum Onset', isCorrect: true },
    { id: 'do2', name: 'Adjustment Disorder, with Depressed Mood', isCorrect: false },
    { id: 'do3', name: 'Postpartum (Baby) Blues', isCorrect: false },
    { id: 'do4', name: 'Brief Psychotic Disorder', isCorrect: false },
  ],
  narrative: {
    intake:
      'Nadia Okonkwo, a 31-year-old new mother, presents five weeks postpartum with persistent depressed mood, loss of interest, ' +
      'tearfulness, guilt about not feeling bonded to her baby, and sleep and appetite disturbance beyond what newborn care explains.',
    session1:
      'She describes feeling worthless and overwhelmed nearly every day for the past three weeks, with poor concentration and a sense ' +
      'that she is failing as a mother. The symptoms began within the first month after delivery and have not lifted like an early few-day low.',
    session2:
      'She reports intrusive, unwanted thoughts that the baby would be better off with someone else, which distress her; she denies any ' +
      'urge or intent to harm the baby and denies hallucinations or beliefs that the baby is in danger. She has supportive but worried family.',
  },
  diagnosticRationale:
    'A major depressive episode—depressed mood, anhedonia, worthlessness, poor concentration, and sleep and appetite disturbance nearly ' +
    'every day for more than two weeks with impairment—beginning within the peripartum period meets DSM-5-TR criteria for major depressive ' +
    'disorder with peripartum onset, distinct from the transient, milder baby blues, an adjustment reaction, or postpartum psychosis.',
  references: [
    { id: 'R1', source: 'DSM-5-TR', detail: 'MDD criteria with the peripartum-onset specifier (onset in pregnancy or within 4 weeks postpartum)' },
    { id: 'R2', source: 'APA CPG', detail: 'Perinatal depression: CBT and interpersonal therapy as first-line psychotherapies' },
    { id: 'R3', source: 'C-SSRS', detail: 'Structured suicide-risk screening given elevated perinatal risk' },
    { id: 'R4', source: 'Hays (Assessment)', detail: 'Use of validated perinatal screening such as the Edinburgh Postnatal Depression Scale' },
    { id: 'R5', source: 'ACA Code of Ethics', detail: 'A.1., B.2., and C.2.: welfare, danger exceptions and reporting, and scope of practice' },
  ],
  questions: [
    Q('q1', 'intake', 'What is most important to confirm to support major depressive disorder with peripartum onset?', ['R1'], [
      O('a', 'A full major depressive episode nearly every day for at least two weeks, with onset in the peripartum period and impairment', 3,
        { r: 'Full episode plus peripartum onset', approach: 'Confirm the episode and the specifier', why: 'DSM-5-TR requires a full MDD episode with peripartum onset', keys: ['three weeks of daily symptoms', 'began within a month of delivery'], mistake: 'Diagnosing from postpartum fatigue alone' }),
      O('b', 'That she can name the single specific event during the delivery that she believes caused her current low mood and guilt', -1,
        { r: 'A precipitant is not the criterion', approach: 'Trigger framing', why: 'Etiology is not part of the criteria', keys: ['criteria-based diagnosis'], mistake: 'Using a trigger as the diagnostic test' }),
      O('c', 'That her low mood has clearly worsened over the past day or two compared with how she felt earlier in the week', -1,
        { r: 'Recent change is not the criterion', approach: 'Recent-change framing', why: 'The sustained two-week episode is what matters', keys: ['sustained episode'], mistake: 'Confusing a brief change with the criteria' }),
      O('d', 'That her symptoms are clearly the result of ordinary sleep deprivation that every new parent of a newborn experiences', 0,
        { r: 'Normalizing away the episode is an error', approach: 'Normalize framing', why: 'Her symptoms exceed expected newborn-care fatigue', keys: ['impairment beyond fatigue'], mistake: 'Attributing a depressive episode to normal tiredness' }),
    ]),
    Q('q2', 'core', 'Which feature best distinguishes her presentation from the postpartum “baby blues”?', ['R1'], [
      O('a', 'Her symptoms are severe and have persisted well beyond the brief, self-limited window typical of the baby blues', 3,
        { r: 'Severity and persistence beyond the blues', approach: 'Contrast duration and severity', why: 'Baby blues are mild and resolve within about two weeks; her episode persists', keys: ['three weeks of daily symptoms', 'marked impairment'], mistake: 'Dismissing a depressive episode as the baby blues' }),
      O('b', 'The fact that she feels tearful and emotionally overwhelmed at times during the early weeks of caring for her newborn', -1,
        { r: 'Tearfulness occurs in both', approach: 'Symptom-presence framing', why: 'Tearfulness is shared and nonspecific', keys: ['shared feature'], mistake: 'Using tearfulness to differentiate' }),
      O('c', 'The trouble she has sleeping at night, which is expected given the demands of frequently waking to care for a newborn', -1,
        { r: 'Newborn-related sleep loss is nonspecific', approach: 'Sleep framing', why: 'Disrupted sleep alone does not separate them', keys: ['shared symptom'], mistake: 'Reading sleep loss as decisive' }),
      O('d', 'The way her mood tends to feel somewhat lower in the evenings than it does earlier during the daytime hours', 0,
        { r: 'Diurnal pattern is not diagnostic', approach: 'Time-of-day framing', why: 'Timing does not separate the two', keys: ['nonspecific timing'], mistake: 'Over-reading a circadian pattern' }),
    ]),
    Q('q3', 'core', 'Her intrusive thought that the baby would be better off with someone else is most appropriately understood as:', ['R1'], [
      O('a', 'A distressing, ego-dystonic depressive thought, which still requires careful assessment of any risk to her or the baby', 3,
        { r: 'Ego-dystonic depressive thought; assess risk', approach: 'Frame the thought and assess risk', why: 'Such thoughts are distressing depressive cognitions that still warrant risk assessment', keys: ['distressed by the thought', 'denies intent to harm'], mistake: 'Either ignoring the thought or assuming it means intent to harm' }),
      O('b', 'Clear evidence of postpartum psychosis that requires emergency psychiatric hospitalization on the basis of this thought alone', -1,
        { r: 'One ego-dystonic thought is not psychosis', approach: 'Over-read as psychosis', why: 'She denies hallucinations and delusions; this is not psychosis on its own', keys: ['no psychotic features'], mistake: 'Mislabeling a depressive intrusion as psychosis' }),
      O('c', 'A normal new-parent worry that requires no particular attention or assessment beyond ordinary supportive reassurance', -2,
        { r: 'Dismissing it skips needed assessment', approach: 'Minimize framing', why: 'It is a clinically significant cognition that warrants assessment', keys: ['distressing intrusion'], mistake: 'Failing to assess a significant thought' }),
      O('d', 'A repressed wish to be rid of the baby that the counselor should help her uncover and fully express in the sessions', -2,
        { r: 'Treating it as a hidden wish is misguided', approach: 'Depth-conflict framing', why: 'Ego-dystonic depressive thoughts are not disguised wishes to enact', keys: ['ego-dystonic'], mistake: 'Pursuing a repressed-wish interpretation' }),
    ]),
    Q('q4', 'intake', 'Given perinatal risk, which assessment is most important to complete?', ['R3'], [
      O('a', 'A structured suicide-risk assessment together with assessment of any thoughts of harm to the infant', 3,
        { r: 'Assess suicide and infant-safety risk', approach: 'Screen risk with structure', why: 'Perinatal depression elevates risk and requires assessing both maternal and infant safety', keys: ['intrusive thoughts about the baby', 'worthlessness'], mistake: 'Overlooking risk in a depressed new mother' }),
      O('b', 'A detailed reconstruction of every prior pregnancy and delivery she has had across her entire reproductive history so far', 0,
        { r: 'Exhaustive obstetric history is not the priority', approach: 'History-detail framing', why: 'It does not address the immediate risk assessment', keys: ['risk first'], mistake: 'Prioritizing depth history over risk' }),
      O('c', 'A precise log of exactly how many hours the newborn sleeps each night so the counselor can quantify her sleep disruption', -1,
        { r: 'Sleep logging is low yield now', approach: 'Quantification framing', why: 'It does not address suicide or infant-safety risk', keys: ['risk unassessed'], mistake: 'Collecting low-yield detail instead of assessing risk' }),
      O('d', 'A full inventory of all the baby-care tasks she completes each day so the counselor can gauge how busy she is at home', -1,
        { r: 'Task inventory is not the priority', approach: 'Activity framing', why: 'It does not address the risk that must be assessed', keys: ['safety first'], mistake: 'Confusing routine detail with risk assessment' }),
    ]),
    Q('q5', 'intake', 'What is most important to rule out before confirming the diagnosis?', ['R1'], [
      O('a', 'Medical contributors such as postpartum thyroid dysfunction or anemia that can mimic a depressive presentation', 3,
        { r: 'Rule out postpartum medical mimics', approach: 'Screen organic contributors', why: 'Thyroid and other postpartum conditions can mimic depression', keys: ['fatigue', 'low mood postpartum'], mistake: 'Skipping the postpartum medical rule-out' }),
      O('b', 'A previously undetected primary psychotic disorder that has been present and stable since well before her recent pregnancy', -1,
        { r: 'Psychosis is not indicated', approach: 'Psychosis framing', why: 'She denies hallucinations and delusions', keys: ['reality testing intact'], mistake: 'Pursuing an unsupported rule-out' }),
      O('c', 'A long-standing eating disorder that could be contributing to both her appetite changes and her low energy after delivery', -1,
        { r: 'Eating pathology is not indicated', approach: 'Eating-disorder framing', why: 'No eating-disorder concerns are reported', keys: ['no eating data'], mistake: 'Inventing an unsupported rule-out' }),
      O('d', 'An emerging neurocognitive decline that could explain the concentration problems she has had since giving birth recently', 0,
        { r: 'Cognitive decline is improbable here', approach: 'Neurocognitive framing', why: 'Depression and the postpartum period explain her concentration problems', keys: ['depression-linked'], mistake: 'Over-attributing to cognitive decline' }),
    ]),
    Q('q6', 'treatment', 'What is the most appropriate first-line, within-scope treatment recommendation?', ['R2'], [
      O('a', 'Offer evidence-based psychotherapy such as cognitive behavioral therapy or interpersonal therapy for perinatal depression', 3,
        { r: 'First-line perinatal psychotherapy fits scope', approach: 'Match guideline to scope', why: 'APA CPG supports CBT and IPT for perinatal depression', keys: ['moderate severity', 'counselor scope'], mistake: 'Defaulting to medication advice' }),
      O('b', 'Recommend that she begin a daily antidepressant right away and adjust the dose herself over the next several weeks', -2,
        { r: 'Prescribing is outside counselor scope', approach: 'Prescribe medication', why: 'Counselors do not prescribe or titrate', keys: ['no prescriptive authority'], mistake: 'Acting outside scope of practice' }),
      O('c', 'Suggest she simply wait and monitor her mood on her own, since postpartum low mood usually resolves without any treatment', -1,
        { r: 'Watchful waiting under-treats the episode', approach: 'Watchful waiting', why: 'A full peripartum depressive episode warrants active treatment', keys: ['functional impairment'], mistake: 'Delaying indicated care' }),
      O('d', 'Encourage her to rely mainly on getting more rest and exercise instead of engaging in any formal course of therapy at all', -1,
        { r: 'Lifestyle alone is insufficient first-line', approach: 'Lifestyle substitution', why: 'Adjuncts do not replace first-line therapy', keys: ['moderate symptoms'], mistake: 'Offering adjuncts as the primary plan' }),
    ]),
    Q('q7', 'treatment', 'She asks whether medication is safe while breastfeeding. The most appropriate counselor action is to:', ['R5'], [
      O('a', 'Coordinate a referral to a prescriber who can weigh breastfeeding-compatible options, while continuing therapy within scope', 3,
        { r: 'Refer and coordinate within scope', approach: 'Coordinate care', why: 'Counselors refer for medication and lactation decisions rather than prescribe', keys: ['asks about breastfeeding safety'], mistake: 'Giving specific medication advice' }),
      O('b', 'Tell her which specific antidepressant is safest to take while breastfeeding and what dose she should ask her physician for', -2,
        { r: 'Naming a drug and dose exceeds scope', approach: 'Prescriptive advice', why: 'Medication and lactation decisions are outside counselor scope', keys: ['no prescriptive authority'], mistake: 'Overstepping professional limits' }),
      O('c', 'Advise her that she should stop breastfeeding entirely if she wants to be able to take any medication for her depression', -2,
        { r: 'Directing her to stop breastfeeding exceeds scope', approach: 'Direct a lactation decision', why: 'That medical decision belongs with her prescriber and her', keys: ['scope limit'], mistake: 'Making a medical decision outside your role' }),
      O('d', 'Discourage medication entirely and tell her she should manage the depression with therapy alone to keep breastfeeding safely', -1,
        { r: 'Discouraging meds overreaches', approach: 'Discourage medication', why: 'The decision belongs with a prescriber and her', keys: ['client autonomy'], mistake: 'Steering a medical decision' }),
    ]),
    Q('q8', 'treatment', 'What additional element is most important to build into her plan?', ['R2'], [
      O('a', 'Mobilizing her support system and monitoring symptoms with a validated perinatal measure such as the EPDS over time', 3,
        { r: 'Supports plus measurement-based monitoring', approach: 'Engage supports and track outcomes', why: 'Support mobilization and repeated screening guide perinatal care', keys: ['worried supportive family'], mistake: 'Treating her in isolation without tracking change' }),
      O('b', 'A recommendation that she handle the newborn’s care entirely on her own so that she can prove to herself she is a capable mother', -2,
        { r: 'Isolating her worsens risk', approach: 'Self-reliance framing', why: 'Reducing support can worsen perinatal depression and risk', keys: ['needs support'], mistake: 'Discouraging the support she needs' }),
      O('c', 'Tracking only how much the baby weighs at each pediatric visit and using that as the main indicator of how she is doing', -1,
        { r: 'The baby’s weight is not her symptom measure', approach: 'Proxy framing', why: 'Infant weight does not measure her depression', keys: ['wrong measure'], mistake: 'Tracking a proxy instead of her symptoms' }),
      O('d', 'Waiting until her next routine visit in a couple of months to reassess her mood rather than monitoring it in the meantime', -1,
        { r: 'A long monitoring gap is unsafe here', approach: 'Delayed-monitoring framing', why: 'Perinatal risk warrants closer monitoring', keys: ['interim risk'], mistake: 'Leaving a long gap without monitoring' }),
    ]),
    Q('q9', 'counseling', 'Nadia says she feels like a failure because she does not feel bonded to her baby. Best response?', ['R2'], [
      O('a', 'Validate her distress and offer psychoeducation that impaired bonding is a symptom of perinatal depression, not a verdict on her', 3,
        { r: 'Validate and reframe the bonding guilt', approach: 'Normalize and reframe', why: 'Framing impaired bonding as a treatable symptom counters self-blame', keys: ['guilt about not bonding', 'feels like a failure'], mistake: 'Either dismissing the guilt or confirming the self-judgment' }),
      O('b', 'Agree that struggling to bond does suggest a real problem with her parenting that she will need to work hard to overcome', -2,
        { r: 'Endorsing the self-blame deepens guilt', approach: 'Validate the distortion', why: 'It reinforces the depressive self-judgment', keys: ['cognitive distortion'], mistake: 'Colluding with the failure belief' }),
      O('c', 'Tell her quickly that she is a wonderful mother and that she really has nothing at all to feel guilty or worried about here', -1,
        { r: 'Premature reassurance can invalidate', approach: 'Dismissive reassurance', why: 'It skips the validation and reframing she needs', keys: ['guilt dismissed'], mistake: 'Reassuring without processing' }),
      O('d', 'Steer the conversation away from the bonding concern so that the session does not become too distressing for her today', -1,
        { r: 'Avoiding the guilt leaves it intact', approach: 'Topic avoidance', why: 'The bonding guilt is a central treatment target', keys: ['avoided cognition'], mistake: 'Sidestepping emotionally central material' }),
    ]),
    Q('q10', 'counseling', 'How can the counselor best support Nadia’s engagement given her shame about her symptoms?', ['R2'], [
      O('a', 'Normalize perinatal depression as a common, treatable condition and frame seeking help as a strength, not a failing', 3,
        { r: 'Normalize and reframe help-seeking', approach: 'Reduce shame to support engagement', why: 'Normalizing reduces shame and supports engagement', keys: ['shame about symptoms'], mistake: 'Either minimizing or reinforcing the shame' }),
      O('b', 'Emphasize repeatedly how serious her condition is so that she understands she truly cannot manage this situation on her own', -1,
        { r: 'Emphasizing severity can deepen shame', approach: 'Severity emphasis', why: 'It can undermine her confidence and engagement', keys: ['needs hope'], mistake: 'Undercutting engagement with alarm' }),
      O('c', 'Compare her directly with other new mothers who are coping well so that she has a clear standard to measure herself against', -2,
        { r: 'Comparisons deepen shame', approach: 'Social comparison', why: 'It worsens the self-judgment she already carries', keys: ['self-stigma'], mistake: 'Measuring her against others' }),
      O('d', 'Provide detailed prevalence statistics on perinatal depression to logically prove to her that she should not feel ashamed', -1,
        { r: 'Facts alone rarely shift shame', approach: 'Statistical persuasion', why: 'Validation works better than data here', keys: ['emotional reasoning'], mistake: 'Answering emotion with numbers' }),
    ]),
    Q('q11', 'ethics', 'Nadia’s intrusive thoughts about the baby raise the question of reporting. What is the most appropriate stance?', ['R5'], [
      O('a', 'Assess risk carefully; ego-dystonic thoughts without intent or risk are not by themselves a reportable child-safety concern', 3,
        { r: 'Assess risk before any reporting decision', approach: 'Tie reporting to assessed risk', why: 'Reporting duties rest on actual risk, not distressing ego-dystonic thoughts', keys: ['denies intent to harm', 'distressed by the thoughts'], mistake: 'Reporting reflexively on an ego-dystonic thought' }),
      O('b', 'File a child-protection report immediately based on the intrusive thought alone, regardless of her intent or the assessed risk', -2,
        { r: 'Reporting without risk is an error', approach: 'Over-report framing', why: 'Reporting hinges on actual risk to the child, not the thought itself', keys: ['no intent or risk'], mistake: 'Reporting an ego-dystonic thought reflexively' }),
      O('c', 'Promise her you will never share anything about the thoughts so that she keeps disclosing openly with you in the future', -2,
        { r: 'Absolute secrecy ignores safety limits', approach: 'Overpromise privacy', why: 'Confidentiality has safety-based limits if risk emerges', keys: ['danger exception'], mistake: 'Guaranteeing unconditional secrecy' }),
      O('d', 'Avoid the topic of reporting entirely so that she does not become any more anxious than she already is about the thoughts', -1,
        { r: 'Dodging the question undermines consent', approach: 'Evade the issue', why: 'Her concern about disclosure deserves a clear answer', keys: ['informed consent'], mistake: 'Withholding clarity about confidentiality' }),
    ]),
    Q('q12', 'ethics', 'During a session Nadia discloses a new belief that the baby is in danger and she hears a voice telling her to act. Best step?', ['R5'], [
      O('a', 'Treat possible postpartum psychosis as an emergency, assess safety urgently, and coordinate immediate psychiatric evaluation', 3,
        { r: 'Postpartum psychosis is an emergency', approach: 'Escalate urgently for safety', why: 'Delusions and command hallucinations postpartum are a psychiatric emergency', keys: ['baby is in danger belief', 'command voice'], mistake: 'Treating this like the earlier ego-dystonic thoughts' }),
      O('b', 'Continue the planned depression-focused session, since these new experiences are simply a more intense version of her earlier thoughts', -2,
        { r: 'Misreading psychosis as before is dangerous', approach: 'Continuity framing', why: 'Delusions and command hallucinations are categorically different and urgent', keys: ['psychotic features'], mistake: 'Failing to recognize an emerging emergency' }),
      O('c', 'Schedule a follow-up appointment for the following week to monitor whether these new experiences continue or get any worse', -2,
        { r: 'Delaying an emergency response is unsafe', approach: 'Wait-and-see framing', why: 'Postpartum psychosis requires urgent, not deferred, action', keys: ['acute emergency'], mistake: 'Postponing an urgent safety response' }),
      O('d', 'Reassure her that the voice and the belief will most likely pass on their own once she is able to get more sleep and rest', -1,
        { r: 'Reassurance is unsafe for psychosis', approach: 'False reassurance', why: 'Reassurance does not address an emergent psychotic risk', keys: ['needs urgent care'], mistake: 'Minimizing a psychiatric emergency' }),
    ]),
    Q('q13', 'ethics', 'Nadia asks the counselor not to tell her partner anything about her symptoms. She is competent and not in crisis. Best response?', ['R5'], [
      O('a', 'Honor her confidentiality while exploring, with her consent, whether involving her partner could strengthen her support', 3,
        { r: 'Protect confidentiality; invite consented support', approach: 'Uphold consent and explore supports', why: 'As a competent adult she controls disclosure; support is pursued with consent', keys: ['requests privacy', 'worried family'], mistake: 'Disclosing to the partner without her consent' }),
      O('b', 'Tell her partner about her symptoms anyway, since involving family is clearly going to be important for her recovery process', -2,
        { r: 'Disclosing without consent breaches confidentiality', approach: 'Over-disclose to family', why: 'Her consent is required to involve her partner', keys: ['no release'], mistake: 'Sharing clinical details without consent' }),
      O('c', 'Refuse any discussion of her support system at all and tell her that her family can play no part whatsoever in her treatment', -1,
        { r: 'Blanket exclusion forgoes useful support', approach: 'Blanket exclusion', why: 'With consent, partner involvement can strengthen care', keys: ['potential support'], mistake: 'Refusing collaboration that could help' }),
      O('d', 'Give her partner a general update on how she is doing while leaving out only the most sensitive specific details of her care', -2,
        { r: 'A general update is still a disclosure', approach: 'Soft disclosure', why: 'Only a valid release permits disclosure', keys: ['confidentiality'], mistake: 'Leaking information under the guise of an update' }),
    ]),
  ],
};

module.exports = { CASES: [D116, D117, D118, D119, D120] };
