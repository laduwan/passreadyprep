// ============================================================================
// deep-cases-batch-06.js — NCMHCE deep cases, batch 06 (2022+ format)
// NCMHCE Prep Platform | GA Integrated Therapeutic Perspectives LLC
//
// Five exam-deep clinical simulations (13 items each, sections [5,4,4]). The
// diagnosis/clinical focus is GIVEN; items test clinical decision-making across
// the three derived sections (Assessment -> Planning -> Process). This batch
// uses the reserved id block ncmhce-D130+ to avoid collision with parallel
// authoring, and fills the largest remaining and previously untouched gaps:
//   ncmhce-D130  Major Depressive Disorder, Severe (Depressive)
//   ncmhce-D131  Somatic Symptom Disorder (Somatic)
//   ncmhce-D132  Depersonalization/Derealization Disorder (Dissociative)
//   ncmhce-D133  Oppositional Defiant Disorder (Disruptive)
//   ncmhce-D134  Acute Stress Disorder (Trauma)
//
// Authored to NCMHCE_DeepCase_Generation_Spec.md. Passes caseSchema
// (strictItemQuality) AND examDepth with zero errors / zero warnings.
// Auto-discovered by import-deep-cases.js (deep-cases-batch-*.js).
//
// Validate:
//   node tools/cases/validateCases.js tools/cases/deep-cases-batch-06.js
//   node -e "const{validateExamDepthSet}=require('./tools/cases/examDepth');const{CASES}=require('./tools/cases/deep-cases-batch-06');console.log(validateExamDepthSet(CASES))"
//
// Standalone deliverable for SME review. Do NOT auto-import — importing into the
// live DB is a separate, human-run step.
// ============================================================================

// --- tiny builders so every option/question carries the full schema ---------
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
// D130 — Major Depressive Disorder, Severe (F33.2) — Depressive — hard
// ============================================================================
const D130 = {
  id: 'ncmhce-D130',
  title: 'Profound withdrawal and near-incapacitation after retirement',
  category: 'Depressive',
  difficulty: 'hard',
  primaryDiagnosis: { name: 'Major Depressive Disorder, Severe', code: 'F33.2' },
  diagnosis: { name: 'Major Depressive Disorder, Severe', code: 'F33.2' },
  differentialOptions: [
    { id: 'do1', name: 'Major Depressive Disorder, Severe', isCorrect: true },
    { id: 'do2', name: 'Persistent Depressive Disorder', isCorrect: false },
    { id: 'do3', name: 'Prolonged Grief Disorder', isCorrect: false },
    { id: 'do4', name: 'Bipolar I Disorder, Current Episode Depressed', isCorrect: false },
  ],
  narrative: {
    intake:
      'Walter Hayes, a 61-year-old recently retired machinist, is brought by his wife, who reports that for the past month he has barely ' +
      'left his chair, stopped eating regularly with marked weight loss, and speaks in a slow, flat voice, saying he is a burden to everyone.',
    session1:
      'He describes near-total loss of interest, severe early-morning insomnia, profound fatigue, and pervasive guilt and worthlessness, ' +
      'and he can no longer manage basic tasks. He denies any past period of elevated mood, decreased need for sleep, or unusual energy.',
    session2:
      'He admits to thoughts that his family would be better off without him, and on questioning he acknowledges he has begun to think about ' +
      'how he might end his life, without a fixed plan yet. He denies hallucinations or fixed delusions and feels hopeless about recovery.',
  },
  diagnosticRationale:
    'Most of the nine depressive symptoms—depressed mood, anhedonia, severe insomnia, significant weight loss, psychomotor retardation, ' +
    'fatigue, worthlessness, poor concentration, and suicidal ideation—are present nearly every day for more than two weeks with marked ' +
    'functional incapacity and no history of mania, meeting DSM-5-TR criteria for a severe major depressive episode without psychotic features.',
  references: [
    { id: 'R1', source: 'DSM-5-TR', detail: 'MDD criteria and the severe specifier: most symptoms, marked intensity, and serious functional impairment' },
    { id: 'R2', source: 'APA CPG', detail: 'Depression guideline: psychotherapy and pharmacotherapy, with combination for severe presentations' },
    { id: 'R3', source: 'C-SSRS', detail: 'Structured screening of ideation severity, intent, plan, and behavior' },
    { id: 'R4', source: 'VA/DoD CPG', detail: 'MDD stepped care, level-of-care decisions, and measurement-based monitoring' },
    { id: 'R5', source: 'ACA Code of Ethics', detail: 'A.1., B.2., and C.2.: welfare, danger exceptions to confidentiality, and scope of practice' },
  ],
  questions: [
    Q('q1', 'intake', 'What is most important to confirm to support a severe major depressive episode?', ['R1'], [
      O('a', 'That most depressive symptoms are present nearly every day for two weeks with marked intensity and serious impairment', 3,
        { r: 'Most symptoms, marked intensity, serious impairment', approach: 'Confirm the severe-specifier threshold', why: 'DSM-5-TR severe specifier reflects symptom count, intensity, and impairment', keys: ['barely leaves his chair', 'marked weight loss'], mistake: 'Rating severity by distress alone' }),
      O('b', 'That he can identify the single life event he believes is responsible for how severely he has been feeling this past month', -1,
        { r: 'A precipitant is not the criterion', approach: 'Trigger framing', why: 'Etiology is not part of the criteria', keys: ['retirement noted'], mistake: 'Using a trigger as the diagnostic test' }),
      O('c', 'That his symptoms have been present continuously for at least the past two years without a long symptom-free interval', -1,
        { r: 'Two-year course describes PDD, not severity', approach: 'Chronicity framing', why: 'A two-year course points toward persistent depressive disorder', keys: ['acute one-month decline'], mistake: 'Confusing chronicity with episode severity' }),
      O('d', 'That his depressive symptoms are clearly worse today than they were at the very beginning of this current episode', 0,
        { r: 'Worsening is not the severity criterion', approach: 'Trajectory framing', why: 'Severity rests on current intensity and impairment, not trend', keys: ['current incapacity'], mistake: 'Requiring a worsening trend to rate severity' }),
    ]),
    Q('q2', 'core', 'Which feature best distinguishes his presentation from persistent depressive disorder?', ['R1'], [
      O('a', 'An acute, severe episode with marked functional incapacity rather than a chronic, low-grade course lasting years', 3,
        { r: 'Acute severe episode versus chronic low-grade', approach: 'Contrast severity and course', why: 'PDD is chronic and low-grade; this is an acute severe episode', keys: ['one-month decline', 'near-incapacitation'], mistake: 'Calling an acute severe episode a chronic disorder' }),
      O('b', 'The presence of guilt and worthlessness that he describes about himself during the assessment interview', -1,
        { r: 'Worthlessness occurs in both', approach: 'Symptom-presence framing', why: 'Worthlessness is shared and nonspecific', keys: ['shared cognition'], mistake: 'Using worthlessness to differentiate' }),
      O('c', 'The trouble he has sleeping and the fatigue that he experiences across most of his days right now', -1,
        { r: 'Sleep and fatigue occur in both', approach: 'Somatic framing', why: 'These features are nonspecific between them', keys: ['shared symptoms'], mistake: 'Reading somatic signs as decisive' }),
      O('d', 'The way his mood seems somewhat lower in the early morning than later in the afternoon and the evening', 0,
        { r: 'Diurnal variation is not diagnostic', approach: 'Time-of-day framing', why: 'Diurnal pattern does not separate the two', keys: ['nonspecific timing'], mistake: 'Over-reading a circadian pattern' }),
    ]),
    Q('q3', 'core', 'Before confirming a unipolar severe depression, what must the counselor specifically rule out?', ['R1'], [
      O('a', 'Any prior manic or hypomanic episode, which would reclassify the presentation as a bipolar depressive episode', 3,
        { r: 'Screen for past mania/hypomania', approach: 'Rule out bipolarity', why: 'A manic/hypomanic history would change the diagnosis', keys: ['denies elevated mood', 'no decreased sleep need'], mistake: 'Skipping the bipolar screen' }),
      O('b', 'Whether he has ever had a single panic attack with a racing heart and a fear of losing control of himself', -1,
        { r: 'Panic is a different rule-out', approach: 'Anxiety framing', why: 'Panic does not change the mood differential', keys: ['no panic reported'], mistake: 'Confusing comorbidity with the differential' }),
      O('c', 'Whether his concentration problems reflect a long-standing attention-deficit pattern dating back to his childhood years', -1,
        { r: 'ADHD is a low-priority rule-out here', approach: 'Neurodevelopmental framing', why: 'The acute severe mood picture is primary', keys: ['acute onset'], mistake: 'Chasing ADHD before the mood history' }),
      O('d', 'Whether his guilt has reached a fixed, unshakeable, clearly delusional level of conviction at this point in the episode', 0,
        { r: 'Psychosis screen matters but is secondary', approach: 'Psychosis framing', why: 'He denies fixed delusions or hallucinations', keys: ['guilt without delusion'], mistake: 'Over-reading severe guilt as psychosis' }),
    ]),
    Q('q4', 'core', 'Given his disclosure of thinking about how he might end his life, the most appropriate step is to:', ['R3'], [
      O('a', 'Conduct a structured suicide-risk assessment clarifying ideation, intent, plan, means, and prior behavior, given high acute risk', 3,
        { r: 'Structured assessment of high acute risk', approach: 'Assess risk directly and structurally', why: 'Severe depression with method ideation is high risk and needs structured assessment', keys: ['thinking how to end his life', 'pervasive hopelessness'], mistake: 'Treating severe-depression ideation casually' }),
      O('b', 'Reassure him that such thoughts are common in depression and will almost certainly pass once his mood begins to lift again', -2,
        { r: 'Premature reassurance forecloses assessment', approach: 'Minimize and reassure', why: 'It dismisses high acute risk and skips assessment', keys: ['method ideation'], mistake: 'Reassuring before assessing acute risk' }),
      O('c', 'Ask him to sign a brief written promise that he will stay safe and call the office if the thoughts get any worse this week', -2,
        { r: 'No-suicide contracts are not evidence-based', approach: 'No-harm contract', why: 'Contracts do not reduce risk or assess it', keys: ['needs safety planning'], mistake: 'Substituting a contract for assessment' }),
      O('d', 'Defer the discussion of these thoughts to a later session so as not to deepen his hopelessness during this first meeting', -1,
        { r: 'Deferring risk assessment is unsafe', approach: 'Delay for comfort', why: 'Risk is assessed at disclosure, not later', keys: ['active disclosure'], mistake: 'Postponing a safety assessment' }),
    ]),
    Q('q5', 'intake', 'What additional information is most important to avoid misattributing his severe symptoms?', ['R1'], [
      O('a', 'A review of medications, substance use, and medical conditions such as hypothyroidism that can present as severe depression', 3,
        { r: 'Rule out medical and substance causes', approach: 'Screen organic contributors', why: 'DSM-5-TR requires excluding medical and substance causes', keys: ['weight loss', 'older adult'], mistake: 'Skipping the organic rule-out' }),
      O('b', 'A detailed reconstruction of his entire career so the counselor can fully understand his complete occupational background', -1,
        { r: 'Exhaustive work history is low yield', approach: 'Vocational-cataloging framing', why: 'It does not change the differential', keys: ['retirement noted'], mistake: 'Collecting low-yield detail' }),
      O('c', 'A complete list of all the hobbies he has lost interest in so the counselor can document the full extent of his anhedonia', -1,
        { r: 'Cataloging hobbies is low yield', approach: 'Interest-inventory framing', why: 'Anhedonia is already established', keys: ['known anhedonia'], mistake: 'Collecting redundant detail' }),
      O('d', 'A precise account of the household finances so the counselor can gauge exactly how much economic stress he is facing now', -1,
        { r: 'Financial detail is not the priority', approach: 'Financial-stress framing', why: 'It does not exclude medical causes', keys: ['planning data'], mistake: 'Confusing context with rule-outs' }),
    ]),
    Q('q6', 'treatment', 'Given the severity and acute risk, what is the most appropriate treatment-planning priority?', ['R4'], [
      O('a', 'Determine the appropriate level of care and coordinate urgent psychiatric evaluation alongside evidence-based psychotherapy', 3,
        { r: 'Level-of-care decision plus urgent psychiatric eval', approach: 'Prioritize safety and intensity of care', why: 'Severe MDD with suicide risk warrants a level-of-care decision and prompt psychiatric coordination', keys: ['severe symptoms', 'method ideation'], mistake: 'Defaulting to routine weekly outpatient therapy alone' }),
      O('b', 'Begin a daily antidepressant yourself and arrange to monitor his response and dose adjustments over the coming weeks', -2,
        { r: 'Prescribing is outside counselor scope', approach: 'Prescribe medication', why: 'Counselors do not prescribe or titrate', keys: ['no prescriptive authority'], mistake: 'Acting outside scope of practice' }),
      O('c', 'Recommend that he wait and monitor his mood on his own for a couple of months before committing to any formal treatment', -2,
        { r: 'Watchful waiting is unsafe in severe MDD', approach: 'Watchful waiting', why: 'Severe MDD with risk warrants active, prompt care', keys: ['near-incapacitation'], mistake: 'Delaying indicated urgent care' }),
      O('d', 'Focus the plan mainly on a daily exercise and sleep-hygiene routine in place of any formal psychotherapy or medical care', -1,
        { r: 'Lifestyle alone is insufficient here', approach: 'Lifestyle substitution', why: 'Adjuncts do not address severe MDD with risk', keys: ['severe impairment'], mistake: 'Offering adjuncts as the primary plan' }),
    ]),
    Q('q7', 'treatment', 'He declines hospitalization but a prescriber referral is arranged. What helps him track response over time?', ['R4'], [
      O('a', 'Re-administering a validated measure such as the PHQ-9 at intervals to guide measurement-based care and stepped decisions', 3,
        { r: 'Measurement-based care guides decisions', approach: 'Use repeated validated measures', why: 'VA/DoD CPG endorses measurement-based care', keys: ['need objective tracking'], mistake: 'Relying on impressions alone' }),
      O('b', 'Asking him each week whether he subjectively feels that things are generally going better than they were before', -1,
        { r: 'Global impressions are unreliable', approach: 'Informal check-in', why: 'It lacks a standardized benchmark', keys: ['no objective anchor'], mistake: 'Trusting unstandardized self-report' }),
      O('c', 'Waiting until the end of the agreed course of therapy and then evaluating his overall response in a single review', -2,
        { r: 'End-only review misses non-response and risk', approach: 'Terminal evaluation', why: 'It prevents timely adjustment in a high-risk case', keys: ['ongoing risk'], mistake: 'Skipping interim monitoring' }),
      O('d', 'Tracking mainly whether he attends his sessions and completes the between-session assignments he is given each week', 0,
        { r: 'Engagement is necessary but not sufficient', approach: 'Adherence proxy', why: 'Attendance does not measure symptoms or risk', keys: ['process vs outcome'], mistake: 'Mistaking adherence for outcome' }),
    ]),
    Q('q8', 'treatment', 'Which initial behavioral step best fits his current level of severity?', ['R2'], [
      O('a', 'Very small, concrete activation steps such as sitting on the porch briefly, paced to his limited current capacity', 3,
        { r: 'Tiny graded activation matched to capacity', approach: 'Grade activation to severity', why: 'Severe psychomotor slowing requires very small, achievable steps', keys: ['barely leaves his chair', 'profound fatigue'], mistake: 'Assigning activation beyond his current capacity' }),
      O('b', 'A full daily schedule of demanding activities designed to push him to resume all of his prior routines as quickly as possible', -1,
        { r: 'Too much too soon invites failure', approach: 'All-at-once activation', why: 'Overload exceeds his current capacity and risks reinforcing failure', keys: ['severe impairment'], mistake: 'Ignoring graded pacing' }),
      O('c', 'A detailed daily thought record of every negative automatic thought before introducing any behavioral change at all', 0,
        { r: 'Heavy cognitive logging is hard at this severity', approach: 'Cognitive-logging framing', why: 'Demanding cognitive work is difficult during severe slowing', keys: ['concentration impaired'], mistake: 'Front-loading effortful cognitive tasks' }),
      O('d', 'Encouraging him to wait until he genuinely feels more motivated before he attempts to re-engage in any activities at all', -1,
        { r: 'Waiting on mood reverses activation logic', approach: 'Mood-dependent action', why: 'Activation precedes, and helps restore, motivation', keys: ['anhedonia maintains withdrawal'], mistake: 'Letting mood gate behavior' }),
    ]),
    Q('q9', 'treatment', 'What safety-focused element should be built into his outpatient plan?', ['R3'], [
      O('a', 'A collaborative safety plan with warning signs, coping steps, supports, and means-safety counseling for the high-risk period', 3,
        { r: 'Safety plan with means safety', approach: 'Integrate safety planning', why: 'High acute risk warrants a collaborative safety plan and means safety', keys: ['method ideation', 'declined hospitalization'], mistake: 'Proceeding without a safety plan' }),
      O('b', 'A reminder that he can search for a crisis hotline number online by himself if he happens to feel worse over the weekend', -1,
        { r: 'Self-directed lookup is too passive', approach: 'Passive-resource framing', why: 'Active safety planning beats leaving him to search alone', keys: ['needs active plan'], mistake: 'Relying on the client to self-refer in crisis' }),
      O('c', 'A signed promise that he will not act on any suicidal thoughts before the next scheduled session with the counselor', -2,
        { r: 'No-suicide contracts are not evidence-based', approach: 'No-harm contract', why: 'Contracts do not reduce risk', keys: ['ineffective intervention'], mistake: 'Using a contract instead of a plan' }),
      O('d', 'A decision to avoid discussing safety further so that focusing on his suicidal thoughts does not deepen his hopelessness', -1,
        { r: 'Avoiding safety planning is unsafe', approach: 'Avoidance framing', why: 'Safety planning is essential at this risk level', keys: ['active risk'], mistake: 'Omitting safety planning to ease discomfort' }),
    ]),
    Q('q10', 'counseling', 'Walter says he is a burden and that his family would be better off without him. The most therapeutic response is to:', ['R2'], [
      O('a', 'Validate his pain and gently identify the burden belief as a depressive cognition and a treatment target, while assessing risk', 3,
        { r: 'Validate, name the cognition, assess risk', approach: 'Address the burden belief and safety', why: 'Burdensomeness is a depressive cognition linked to risk and is a treatment target', keys: ['feels like a burden', 'better-off-dead thoughts'], mistake: 'Either dismissing the belief or ignoring its risk meaning' }),
      O('b', 'Agree that his family does carry a heavy load right now and focus on helping him accept that he has become dependent on them', -2,
        { r: 'Endorsing the belief deepens it and risk', approach: 'Validate the distortion', why: 'It reinforces a risk-linked depressive cognition', keys: ['burden belief'], mistake: 'Colluding with the burdensomeness belief' }),
      O('c', 'Tell him quickly that this simply is not true and that he should not allow himself to think this way about his own family', -1,
        { r: 'Premature reassurance can invalidate', approach: 'Dismissive reassurance', why: 'It skips validation and the needed risk exploration', keys: ['belief dismissed'], mistake: 'Reassuring without processing or assessing' }),
      O('d', 'Move the conversation toward practical planning for the week and away from the painful burden theme for now', -1,
        { r: 'Avoiding the belief misses risk and a target', approach: 'Topic redirection', why: 'The belief is both a treatment target and a risk indicator', keys: ['unaddressed cognition'], mistake: 'Sidestepping a risk-linked cognition' }),
    ]),
    Q('q11', 'counseling', 'Walter says he feels hopeless that anything will help. The most therapeutic response is to:', ['R2'], [
      O('a', 'Acknowledge the hopelessness as a symptom of severe depression and frame treatment as a way to test it, one small step at a time', 3,
        { r: 'Name hopelessness as a symptom; test it', approach: 'Instill hope collaboratively', why: 'Framing hopelessness as a symptom counters therapeutic pessimism', keys: ['hopeless about recovery'], mistake: 'Arguing him out of hopelessness' }),
      O('b', 'Promise him confidently that he is guaranteed to fully recover as long as he commits to attending every single session', -1,
        { r: 'Overpromising risks credibility', approach: 'Guarantee outcomes', why: 'Unrealistic guarantees can backfire', keys: ['severe hopelessness'], mistake: 'Making promises you cannot keep' }),
      O('c', 'Accept his prediction that nothing will help and refocus the work on simply helping him endure his daily symptoms for now', -2,
        { r: 'Conceding hopelessness is countertherapeutic', approach: 'Concede hopelessness', why: 'It abandons a treatable, high-risk presentation', keys: ['therapeutic pessimism'], mistake: 'Adopting the client’s hopeless stance' }),
      O('d', 'Explain the neurobiology of depression in detail to convince him on scientific grounds that recovery is genuinely possible', -1,
        { r: 'Lecturing rarely shifts hopelessness', approach: 'Didactic persuasion', why: 'Experiential evidence works better here', keys: ['emotional reasoning'], mistake: 'Substituting facts for experience' }),
    ]),
    Q('q12', 'ethics', 'Walter asks the counselor to promise not to tell his wife how bad his suicidal thoughts have become. Best response?', ['R5'], [
      O('a', 'Explain the limits of confidentiality, including that serious, foreseeable risk of harm may require disclosure to keep him safe', 3,
        { r: 'Confidentiality yields to serious risk', approach: 'Clarify confidentiality and its limits', why: 'ACA B.2. permits disclosure to protect from serious, foreseeable harm', keys: ['high acute risk', 'requests secrecy'], mistake: 'Promising unconditional confidentiality' }),
      O('b', 'Promise him that nothing he says about suicide will ever be shared with his wife or anyone else under any circumstances at all', -2,
        { r: 'Absolute confidentiality is unethical here', approach: 'Overpromise privacy', why: 'It misstates the safety-based limits', keys: ['danger exception'], mistake: 'Guaranteeing unconditional secrecy' }),
      O('c', 'Tell him you must call his wife and the authorities right now simply because he mentioned suicidal thoughts during the session', -1,
        { r: 'Act on assessed risk, not reflexively', approach: 'Reflexive disclosure', why: 'Disclosure follows a careful risk assessment', keys: ['proportionate response'], mistake: 'Escalating before assessing the risk' }),
      O('d', 'Avoid answering his question about confidentiality so that he keeps talking openly about his suicidal thoughts with you', -1,
        { r: 'Dodging the question undermines consent', approach: 'Evade the limits', why: 'Limits are part of informed consent', keys: ['informed consent'], mistake: 'Concealing the limits of confidentiality' }),
    ]),
    Q('q13', 'ethics', 'Given how severe and slowed he is, how should the counselor handle informed consent and decision-making?', ['R5'], [
      O('a', 'Assess his capacity to participate in decisions, involve him as fully as possible, and document consent and any concerns', 3,
        { r: 'Assess capacity; maximize involvement', approach: 'Address capacity and consent', why: 'Severe depression can affect capacity, which is assessed, not assumed', keys: ['severe slowing', 'impaired function'], mistake: 'Either ignoring capacity or dismissing his voice' }),
      O('b', 'Assume he completely lacks capacity and have his wife make all of the treatment decisions for him without involving him', -2,
        { r: 'Presuming total incapacity overreaches', approach: 'Presume incapacity', why: 'Capacity is assessed and decisions involve him', keys: ['client rights'], mistake: 'Stripping the client of all input' }),
      O('c', 'Assume he has full capacity and proceed exactly as usual without giving his severe symptoms any particular consideration', -1,
        { r: 'Ignoring severity is an error', approach: 'Ignore the severity', why: 'Severe depression can affect decision-making capacity', keys: ['severe episode'], mistake: 'Overlooking capacity concerns' }),
      O('d', 'Postpone the consent discussion entirely until his depression fully resolves, even though treatment needs to begin now', -1,
        { r: 'Delaying consent stalls urgent care', approach: 'Defer consent entirely', why: 'Consent can be addressed now with a capacity assessment', keys: ['urgent need'], mistake: 'Postponing consent when care is urgent' }),
    ]),
  ],
};

// ============================================================================
// D131 — Somatic Symptom Disorder (F45.1) — Somatic — medium
// ============================================================================
const D131 = {
  id: 'ncmhce-D131',
  title: 'Distressing physical symptoms and constant health worry',
  category: 'Somatic',
  difficulty: 'medium',
  primaryDiagnosis: { name: 'Somatic Symptom Disorder', code: 'F45.1' },
  diagnosis: { name: 'Somatic Symptom Disorder', code: 'F45.1' },
  differentialOptions: [
    { id: 'do1', name: 'Somatic Symptom Disorder', isCorrect: true },
    { id: 'do2', name: 'Illness Anxiety Disorder', isCorrect: false },
    { id: 'do3', name: 'Generalized Anxiety Disorder', isCorrect: false },
    { id: 'do4', name: 'Major Depressive Disorder, Moderate', isCorrect: false },
  ],
  narrative: {
    intake:
      'Beatriz Alvarez, a 45-year-old office manager, presents with more than a year of distressing abdominal pain, fatigue, and ' +
      'headaches that dominate her daily life. She has seen many physicians and had repeated negative workups but remains highly distressed.',
    session1:
      'She spends hours each day worrying about what the symptoms mean, researching diseases, and seeking reassurance, and she has ' +
      'cut back work and social activities. The symptoms are real to her and disabling, whether or not a medical cause has been found.',
    session2:
      'She feels dismissed when providers say tests are normal and fears something is being missed. She is open to counseling but worried ' +
      'it implies her symptoms are “not real.” She denies that her worry is focused on one specific feared disease above the symptoms themselves.',
  },
  diagnosticRationale:
    'One or more distressing somatic symptoms persisting more than six months, accompanied by excessive thoughts, feelings, and behaviors ' +
    'about the symptoms—disproportionate worry, high health anxiety, and excessive time and energy devoted to them—with associated ' +
    'impairment, meets DSM-5-TR criteria for somatic symptom disorder rather than illness anxiety, generalized anxiety, or a depressive disorder.',
  references: [
    { id: 'R1', source: 'DSM-5-TR', detail: 'Somatic symptom disorder: distressing somatic symptoms plus excessive thoughts, feelings, and behaviors, 6+ months' },
    { id: 'R2', source: 'Corey (Theory & Practice)', detail: 'Selecting a cognitive-behavioral approach and managing the therapeutic alliance' },
    { id: 'R3', source: 'Hays (Assessment)', detail: 'Clinical assessment procedures and coordinating with medical providers' },
    { id: 'R4', source: 'C-SSRS', detail: 'Structured suicide-risk screening when depressive symptoms co-occur' },
    { id: 'R5', source: 'ACA Code of Ethics', detail: 'A.1. and C.2.: client welfare, scope of practice, and coordination of care' },
  ],
  questions: [
    Q('q1', 'intake', 'What is most important to confirm to support a somatic symptom disorder diagnosis?', ['R1'], [
      O('a', 'Distressing somatic symptoms for over six months with excessive thoughts, feelings, and behaviors devoted to them', 3,
        { r: 'Symptoms plus disproportionate response', approach: 'Confirm the core criteria', why: 'DSM-5-TR requires somatic symptoms plus excessive symptom-focused thoughts and behaviors', keys: ['year of pain and fatigue', 'hours of worry and research'], mistake: 'Diagnosing from the symptoms alone without the excessive response' }),
      O('b', 'That every one of her physical symptoms has been medically proven to have no underlying organic basis whatsoever', -1,
        { r: 'Medically unexplained is not required', approach: 'Unexplained-symptom framing', why: 'SSD does not require symptoms to be medically unexplained', keys: ['symptoms may have a basis'], mistake: 'Requiring symptoms to be proven psychogenic' }),
      O('c', 'That she can identify the single stressful event she believes first triggered all of her physical symptoms', -1,
        { r: 'A precipitant is not the criterion', approach: 'Trigger framing', why: 'Etiology is not part of the criteria', keys: ['criteria-based diagnosis'], mistake: 'Using a trigger as the diagnostic test' }),
      O('d', 'That her physical symptoms have grown more intense over the past week than they were the week before that', 0,
        { r: 'Recent change is not the criterion', approach: 'Recent-change framing', why: 'The persistent pattern and response are what matter', keys: ['established pattern'], mistake: 'Confusing a recent uptick with the criteria' }),
    ]),
    Q('q2', 'core', 'Which feature best differentiates her presentation from illness anxiety disorder?', ['R1'], [
      O('a', 'Her distress centers on the burdensome somatic symptoms themselves rather than on a fear of having a specific undiagnosed disease', 3,
        { r: 'Symptom-focused versus disease-fear-focused', approach: 'Contrast the focus of distress', why: 'SSD centers on distressing symptoms; illness anxiety centers on disease fear with few symptoms', keys: ['symptoms dominate daily life', 'denies a single feared disease focus'], mistake: 'Equating symptom-focused distress with illness anxiety' }),
      O('b', 'The fact that she worries about her health and seeks reassurance from her doctors fairly often over time', -1,
        { r: 'Health worry occurs in both', approach: 'Worry-presence framing', why: 'Health worry is shared and nonspecific', keys: ['shared worry'], mistake: 'Using health worry to differentiate' }),
      O('c', 'The way she has cut back on her work and her social activities since the symptoms began to dominate her life', -1,
        { r: 'Functional impairment occurs in both', approach: 'Impairment framing', why: 'Impairment does not separate the two', keys: ['shared impairment'], mistake: 'Reading impairment as decisive' }),
      O('d', 'The fact that her symptoms tend to feel somewhat worse during the busiest and most stressful weeks at her job', 0,
        { r: 'Stress reactivity is nonspecific', approach: 'Stress framing', why: 'Worsening under stress does not differentiate them', keys: ['nonspecific reactivity'], mistake: 'Using stress sensitivity to differentiate' }),
    ]),
    Q('q3', 'core', 'How does her presentation differ from generalized anxiety disorder?', ['R1'], [
      O('a', 'Her excessive thoughts and behaviors are organized around her bodily symptoms rather than diffuse worry across many life domains', 3,
        { r: 'Symptom-organized versus diffuse worry', approach: 'Contrast the focus of the worry', why: 'SSD worry is symptom-focused; GAD worry spans many domains', keys: ['research and reassurance about symptoms'], mistake: 'Calling symptom-focused distress generalized worry' }),
      O('b', 'The fact that she feels anxious and tense much of the time across most of the ordinary days of her week, whether or not her bodily symptoms happen to be flaring up at that particular moment', -1,
        { r: 'General anxiety occurs in both', approach: 'Anxiety-presence framing', why: 'Anxiety alone does not separate them', keys: ['shared anxiety'], mistake: 'Using general anxiety to differentiate' }),
      O('c', 'The trouble she has sleeping and the fatigue that she reports across most of her ordinary workdays', -1,
        { r: 'Sleep and fatigue occur in both', approach: 'Somatic framing', why: 'These features are nonspecific between them', keys: ['shared symptoms'], mistake: 'Reading somatic signs as decisive' }),
      O('d', 'The way her symptoms seem to ease somewhat when she is busy and distracted at work or with friends', 0,
        { r: 'Distraction relief is nonspecific', approach: 'Distraction framing', why: 'Temporary relief with distraction occurs broadly', keys: ['distraction effect'], mistake: 'Reading meaning into distraction relief' }),
    ]),
    Q('q4', 'intake', 'How should the counselor approach the medical side of her presentation?', ['R3'], [
      O('a', 'Validate that her symptoms are real and distressing and coordinate with one consistent medical provider rather than dismissing them', 3,
        { r: 'Validate symptoms; coordinate care', approach: 'Partner with medical care', why: 'Validating real distress and coordinating care is the appropriate counselor role', keys: ['feels dismissed by providers', 'repeated workups'], mistake: 'Telling her the symptoms are not real' }),
      O('b', 'Order a fresh round of laboratory and imaging tests yourself so that you can personally rule out any missed medical condition', -2,
        { r: 'Ordering tests exceeds counselor scope', approach: 'Order medical tests', why: 'Counselors coordinate but do not order tests', keys: ['scope limit'], mistake: 'Acting outside scope of practice' }),
      O('c', 'Encourage her to keep seeking additional specialists and second opinions until a definitive physical diagnosis is finally found', -1,
        { r: 'Endless workups reinforce the disorder', approach: 'Doctor-shopping framing', why: 'Repeated testing maintains the symptom focus and anxiety', keys: ['excessive reassurance-seeking'], mistake: 'Reinforcing the reassurance and testing cycle' }),
      O('d', 'Tell her plainly that since the tests are normal her symptoms are psychological and there is no real medical issue to address', -2,
        { r: 'Dismissive framing damages alliance', approach: 'Dismiss the body', why: 'Calling the symptoms purely psychological alienates the client', keys: ['feels dismissed'], mistake: 'Invalidating the client’s experience' }),
    ]),
    Q('q5', 'intake', 'What co-occurring condition is most important to screen for to inform her plan?', ['R4'], [
      O('a', 'Co-occurring depression and suicide risk, which commonly accompany chronic somatic distress and shape the plan', 3,
        { r: 'Screen depression and suicide risk', approach: 'Assess common comorbidity', why: 'Depression frequently co-occurs with somatic symptom disorder', keys: ['cut back work and activities', 'chronic distress'], mistake: 'Treating the somatic picture without screening mood and risk' }),
      O('b', 'A previously undetected primary psychotic disorder that could account for her conviction that something is being missed', -1,
        { r: 'Psychosis is not indicated', approach: 'Psychosis framing', why: 'Her concern is non-delusional health worry', keys: ['reality testing intact'], mistake: 'Over-reading health worry as psychosis' }),
      O('c', 'A long-standing eating disorder that could be contributing to both her abdominal symptoms and her fatigue over the past year', -1,
        { r: 'Eating pathology is not indicated', approach: 'Eating-disorder framing', why: 'No eating-disorder concerns are reported', keys: ['no eating data'], mistake: 'Inventing an unsupported comorbidity' }),
      O('d', 'An emerging neurocognitive decline that could explain why she spends so much time researching her symptoms each day', 0,
        { r: 'Cognitive decline is improbable here', approach: 'Neurocognitive framing', why: 'Her behavior reflects health anxiety, not decline', keys: ['anxiety-driven behavior'], mistake: 'Pursuing an improbable rule-out' }),
    ]),
    Q('q6', 'treatment', 'What is the most appropriate first-line psychotherapy approach for her?', ['R2'], [
      O('a', 'Cognitive behavioral therapy targeting symptom-focused thoughts, reassurance-seeking, and avoidance, coordinated with her care', 3,
        { r: 'CBT for the symptom-focused cycle', approach: 'Apply an evidence-based approach', why: 'CBT addresses the excessive thoughts and behaviors that maintain SSD', keys: ['research and reassurance-seeking', 'activity reduction'], mistake: 'Choosing an approach that ignores the maintaining behaviors' }),
      O('b', 'Open-ended supportive counseling that mainly gives her space to describe her physical symptoms in detail each week', -1,
        { r: 'Symptom-focused venting can reinforce the cycle', approach: 'Supportive-only framing', why: 'Dwelling on symptoms can maintain the symptom focus', keys: ['needs active CBT'], mistake: 'Reinforcing the symptom preoccupation' }),
      O('c', 'A primarily insight-oriented exploration of her early childhood as the central route to relieving her physical symptoms', 0,
        { r: 'Insight-only is not first-line here', approach: 'Depth-only framing', why: 'CBT for the maintaining factors is more effective', keys: ['symptom-focused need'], mistake: 'Prioritizing origins over maintaining factors' }),
      O('d', 'Encouraging her to rest and to avoid activity whenever her symptoms flare so that she does not make the symptoms any worse', -2,
        { r: 'Activity avoidance worsens function', approach: 'Avoidance framing', why: 'Avoidance reinforces disability and the symptom focus', keys: ['activity reduction'], mistake: 'Sanctioning avoidance as coping' }),
    ]),
    Q('q7', 'treatment', 'How should care with her medical providers best be structured?', ['R3'], [
      O('a', 'Coordinate regular, scheduled visits with one primary provider rather than visits driven by each new symptom or crisis', 3,
        { r: 'Scheduled visits with one coordinator', approach: 'Structure collaborative care', why: 'Scheduled rather than symptom-driven visits reduce reinforcement of the cycle', keys: ['many physicians', 'repeated workups'], mistake: 'Leaving care fragmented and symptom-driven' }),
      O('b', 'Encourage her to go to urgent care or the emergency department each time a symptom feels especially severe or frightening to her', -2,
        { r: 'Crisis-driven care reinforces the cycle', approach: 'Crisis-utilization framing', why: 'Symptom-driven visits reinforce health anxiety', keys: ['reassurance-seeking'], mistake: 'Reinforcing crisis-driven utilization' }),
      O('c', 'Advise her to stop seeing physicians altogether and to rely solely on counseling to manage all of her physical symptoms', -1,
        { r: 'Cutting off medical care is inappropriate', approach: 'Medical-avoidance framing', why: 'Appropriate medical follow-up should continue', keys: ['needs coordinated care'], mistake: 'Severing necessary medical involvement' }),
      O('d', 'Recommend that she rotate among several different specialists so that she always has a fresh set of opinions to consider', -1,
        { r: 'Rotating specialists fragments care', approach: 'Doctor-shopping framing', why: 'It reinforces reassurance-seeking and fragmentation', keys: ['fragmented care'], mistake: 'Encouraging doctor-shopping' }),
    ]),
    Q('q8', 'treatment', 'A central cognitive-behavioral target in her treatment would most appropriately be:', ['R2'], [
      O('a', 'Reducing reassurance-seeking and catastrophic symptom interpretations while gradually restoring valued activity', 3,
        { r: 'Target reassurance-seeking and avoidance', approach: 'Address the maintaining behaviors', why: 'Reassurance-seeking and catastrophizing maintain SSD', keys: ['hours of worry and research', 'activity reduction'], mistake: 'Treating only the symptoms, not the maintaining behaviors' }),
      O('b', 'Helping her develop a more thorough daily symptom-monitoring log so she can track every bodily sensation in fine detail', -2,
        { r: 'Detailed monitoring fuels the focus', approach: 'Symptom-monitoring framing', why: 'Close body-monitoring heightens the symptom preoccupation', keys: ['body-checking'], mistake: 'Encouraging hypervigilant monitoring' }),
      O('c', 'Encouraging her to research each new symptom carefully so that she can feel more informed and certain about what is happening', -2,
        { r: 'Researching feeds reassurance-seeking', approach: 'Information-seeking framing', why: 'It reinforces the certainty-seeking that maintains SSD', keys: ['disease research'], mistake: 'Reinforcing the maintaining behavior' }),
      O('d', 'Teaching her to rest more and to limit her activity until her physical symptoms have fully and completely resolved', -1,
        { r: 'Activity restriction worsens function', approach: 'Rest-until-resolved framing', why: 'It reinforces avoidance and disability', keys: ['avoidance'], mistake: 'Letting symptoms gate activity' }),
    ]),
    Q('q9', 'counseling', 'Beatriz says counseling must mean the counselor thinks her symptoms are “all in her head.” Best response?', ['R2'], [
      O('a', 'Validate that her symptoms and suffering are real and explain that counseling addresses the distress and impact, not their reality', 3,
        { r: 'Affirm the symptoms are real; reframe the aim', approach: 'Validate and reframe', why: 'Affirming real suffering while reframing the aim builds the alliance', keys: ['fears being seen as faking', 'feels dismissed'], mistake: 'Implying the symptoms are imaginary' }),
      O('b', 'Explain that the tests are all normal, so the symptoms really are psychological and that is exactly what counseling will fix', -2,
        { r: 'This invalidates and alienates her', approach: 'Psychologize the symptoms', why: 'Calling the symptoms imaginary ruptures the alliance', keys: ['feels dismissed'], mistake: 'Invalidating the client’s experience' }),
      O('c', 'Reassure her over and over that there is definitely nothing physically wrong with her so that she can stop worrying about it', -1,
        { r: 'Repeated reassurance feeds the cycle', approach: 'Reassurance framing', why: 'It reinforces reassurance-seeking', keys: ['reassurance dependence'], mistake: 'Providing reassurance that maintains the cycle' }),
      O('d', 'Avoid the question entirely and steer the session toward reviewing the activity goals she set for the coming week', -1,
        { r: 'Bypassing the concern harms engagement', approach: 'Topic avoidance', why: 'Her concern about counseling is central to engagement', keys: ['unaddressed concern'], mistake: 'Avoiding a key alliance issue' }),
    ]),
    Q('q10', 'counseling', 'During a session Beatriz repeatedly asks the counselor to confirm her headaches are not a brain tumor. Best response?', ['R2'], [
      O('a', 'Gently name the reassurance-seeking as part of the cycle and help her practice tolerating uncertainty rather than answering it', 3,
        { r: 'Name the pattern; build uncertainty tolerance', approach: 'Address rather than feed reassurance', why: 'Reassurance maintains the cycle; tolerating uncertainty treats it', keys: ['repeated reassurance-seeking'], mistake: 'Answering to relieve her distress in the moment' }),
      O('b', 'Provide her with a clear, confident answer every time she asks so that she can leave the session feeling calm and reassured', -2,
        { r: 'Answering reinforces the cycle', approach: 'Reassure framing', why: 'Repeated reassurance maintains the disorder', keys: ['reassurance dependence'], mistake: 'Reinforcing the maintaining behavior' }),
      O('c', 'Tell her that her worries are irrational and that as an intelligent adult she really should know better than to think this way', -1,
        { r: 'Shaming language harms the alliance', approach: 'Dismissive framing', why: 'It invalidates her and damages rapport', keys: ['risk of rupture'], mistake: 'Invalidating instead of guiding' }),
      O('d', 'Suggest she schedule another brain scan just to be sure so that she can finally put this particular worry to rest for good', -2,
        { r: 'Another scan feeds the cycle', approach: 'Testing-for-reassurance framing', why: 'Unneeded testing reinforces reassurance-seeking', keys: ['reassurance via testing'], mistake: 'Recommending testing to relieve anxiety' }),
    ]),
    Q('q11', 'ethics', 'Beatriz asks the counselor to tell her physician to order a specific scan she read about online. Best response?', ['R5'], [
      O('a', 'Clarify that ordering tests is the physician’s decision and offer, with consent, to coordinate her concerns with the provider', 3,
        { r: 'Stay in scope; coordinate with consent', approach: 'Respect scope and coordinate', why: 'Ordering tests is outside counselor scope', keys: ['wants a specific test', 'scope limit'], mistake: 'Directing the physician’s medical workup' }),
      O('b', 'Call her physician yourself and recommend that the specific scan she found online be ordered for her as soon as possible', -2,
        { r: 'Directing the workup exceeds scope', approach: 'Order-by-proxy framing', why: 'Test decisions are the physician’s, not the counselor’s', keys: ['role boundary'], mistake: 'Inserting yourself into medical decision-making' }),
      O('c', 'Encourage her to insist that her physician order the scan and to keep pushing until the provider finally agrees to do it', -1,
        { r: 'Reinforces reassurance-driven testing', approach: 'Push-for-testing framing', why: 'It strengthens the reassurance-seeking cycle', keys: ['reassurance-seeking'], mistake: 'Coaching reassurance-driven testing' }),
      O('d', 'Tell her this is purely a medical matter that has nothing to do with counseling and decline to discuss it any further with her', -1,
        { r: 'Refusing to coordinate abandons the concern', approach: 'Flat refusal', why: 'Coordinating with consent is appropriate', keys: ['care coordination'], mistake: 'Declining to help her communicate with the provider' }),
    ]),
    Q('q12', 'ethics', 'How should the counselor coordinate with Beatriz’s medical providers?', ['R5'], [
      O('a', 'Obtain her informed consent and release before communicating with her providers, then collaborate on a shared plan', 3,
        { r: 'Consent and release before coordinating', approach: 'Secure consent first', why: 'Coordination requires a valid release of information', keys: ['multiple providers', 'protected information'], mistake: 'Contacting providers before obtaining consent' }),
      O('b', 'Contact her physicians right away to align the plan, since coordinating her care is clearly in her own best interest anyway', -2,
        { r: 'Coordinating without consent breaches confidentiality', approach: 'Assume consent', why: 'A valid release is required before disclosure', keys: ['no release'], mistake: 'Disclosing before consent is documented' }),
      O('c', 'Avoid any contact with her medical providers at all so that her counseling remains entirely separate from her medical care', -1,
        { r: 'No coordination undercuts collaborative care', approach: 'Siloed-care framing', why: 'Coordinated care is preferable for SSD', keys: ['fragmented care'], mistake: 'Refusing helpful, consented coordination' }),
      O('d', 'Share her full counseling records with every provider she sees so that they all have complete information about her treatment', -2,
        { r: 'Blanket sharing over-discloses', approach: 'Over-disclosure framing', why: 'Disclosure should be consented and limited to what is needed', keys: ['minimum necessary'], mistake: 'Releasing more than is appropriate or consented' }),
    ]),
    Q('q13', 'ethics', 'Beatriz becomes tearful and hints she sometimes feels life is not worth living with this suffering. Best step?', ['R4'], [
      O('a', 'Conduct a structured suicide-risk assessment and respond to the risk, recognizing chronic somatic distress can carry suicide risk', 3,
        { r: 'Assess risk directly', approach: 'Screen risk with structure', why: 'Chronic somatic distress and depression can elevate suicide risk', keys: ['life not worth living', 'chronic suffering'], mistake: 'Overlooking risk amid somatic focus' }),
      O('b', 'Reassure her that her symptoms will eventually improve with treatment and that there is no real need to discuss those thoughts', -2,
        { r: 'Minimizing the ideation is unsafe', approach: 'Minimize as distress', why: 'It forecloses needed risk assessment', keys: ['unassessed ideation'], mistake: 'Dismissing the ideation' }),
      O('c', 'Continue with the planned cognitive-behavioral agenda, assuming the comment was only a passing expression of her frustration', -1,
        { r: 'Risk must be assessed before continuing', approach: 'Agenda-first framing', why: 'Safety assessment takes priority over the planned agenda', keys: ['active disclosure'], mistake: 'Proceeding past a risk disclosure' }),
      O('d', 'Ask her to sign a brief promise that she will stay safe and reach out to you if those thoughts get any worse this week', -2,
        { r: 'No-suicide contracts are not evidence-based', approach: 'No-harm contract', why: 'Contracts do not reduce risk or assess it', keys: ['needs assessment'], mistake: 'Substituting a contract for assessment' }),
    ]),
  ],
};

// ============================================================================
// D132 — Depersonalization/Derealization Disorder (F48.1) — Dissociative — hard
// ============================================================================
const D132 = {
  id: 'ncmhce-D132',
  title: 'Feeling detached and unreal, as if watching life from outside',
  category: 'Dissociative',
  difficulty: 'hard',
  primaryDiagnosis: { name: 'Depersonalization/Derealization Disorder', code: 'F48.1' },
  diagnosis: { name: 'Depersonalization/Derealization Disorder', code: 'F48.1' },
  differentialOptions: [
    { id: 'do1', name: 'Depersonalization/Derealization Disorder', isCorrect: true },
    { id: 'do2', name: 'Panic Disorder', isCorrect: false },
    { id: 'do3', name: 'Schizophrenia', isCorrect: false },
    { id: 'do4', name: 'Substance-Induced Disorder', isCorrect: false },
  ],
  narrative: {
    intake:
      'Owen Park, a 24-year-old graduate student, presents with months of persistent, distressing feelings of detachment—he feels like an ' +
      'observer of his own thoughts and actions, and the world around him often seems foggy, dreamlike, and unreal.',
    session1:
      'He describes feeling robotic and emotionally numb and says his surroundings sometimes look flat or two-dimensional. Throughout, he ' +
      'knows these are subjective experiences and that things are not actually unreal; his reality testing remains intact between and during episodes.',
    session2:
      'He is frightened he is “going crazy” and has been monitoring the sensations closely and avoiding stressful situations that seem to ' +
      'worsen them. He denies cannabis or other substance use as a cause and denies hallucinations or fixed delusional beliefs.',
  },
  diagnosticRationale:
    'Persistent and recurrent experiences of depersonalization (feeling detached from one’s own thoughts and body) and derealization ' +
    '(experiencing surroundings as unreal or dreamlike), with intact reality testing, causing significant distress and impairment and not ' +
    'attributable to substances or another disorder, meet DSM-5-TR criteria for depersonalization/derealization disorder rather than panic, psychosis, or substance use.',
  references: [
    { id: 'R1', source: 'DSM-5-TR', detail: 'Depersonalization/derealization disorder: persistent detachment/unreality with intact reality testing' },
    { id: 'R2', source: 'Corey (Theory & Practice)', detail: 'Selecting a cognitive-behavioral, grounding-oriented approach and the working alliance' },
    { id: 'R3', source: 'Hays (Assessment)', detail: 'Clinical assessment, including screening for substances and comorbid anxiety and trauma' },
    { id: 'R4', source: 'C-SSRS', detail: 'Structured suicide-risk screening given distress and comorbidity' },
    { id: 'R5', source: 'ACA Code of Ethics', detail: 'A.1. and C.2.: client welfare, scope of practice, and informed consent' },
  ],
  questions: [
    Q('q1', 'intake', 'What is most important to confirm to support a depersonalization/derealization disorder diagnosis?', ['R1'], [
      O('a', 'Persistent or recurrent detachment or unreality with intact reality testing, causing significant distress or impairment', 3,
        { r: 'Persistent detachment with intact reality testing', approach: 'Confirm the core criteria', why: 'DSM-5-TR requires persistent depersonalization/derealization with intact reality testing', keys: ['observer of his own actions', 'knows it is subjective'], mistake: 'Diagnosing from a single brief episode' }),
      O('b', 'That he firmly and genuinely believes that he and the world around him have actually become physically unreal', -2,
        { r: 'A genuine belief in unreality suggests psychosis', approach: 'Loss-of-reality-testing framing', why: 'Intact reality testing is required; a fixed belief points elsewhere', keys: ['knows it is not real'], mistake: 'Confusing the disorder with psychosis' }),
      O('c', 'That he can identify the single stressful event he believes first triggered these feelings of detachment and unreality', -1,
        { r: 'A precipitant is not the criterion', approach: 'Trigger framing', why: 'Etiology is not part of the criteria', keys: ['criteria-based diagnosis'], mistake: 'Using a trigger as the diagnostic test' }),
      O('d', 'That his detachment has become more intense over the past day or two than it was earlier during the same week', 0,
        { r: 'Recent change is not the criterion', approach: 'Recent-change framing', why: 'The persistent or recurrent pattern is what matters', keys: ['persistent pattern'], mistake: 'Confusing a brief change with the criteria' }),
    ]),
    Q('q2', 'core', 'Which feature best distinguishes his presentation from a primary psychotic disorder?', ['R1'], [
      O('a', 'His reality testing is intact—he knows the detachment and unreality are subjective experiences, not actual changes in the world', 3,
        { r: 'Intact reality testing separates it from psychosis', approach: 'Anchor on reality testing', why: 'Intact reality testing distinguishes the disorder from psychosis', keys: ['knows it is not real', 'no delusions'], mistake: 'Mislabeling intact-insight detachment as psychosis' }),
      O('b', 'The fact that he feels emotionally numb and robotic during many of his interactions with other people each day', -1,
        { r: 'Numbing is nonspecific', approach: 'Numbing framing', why: 'Emotional numbing occurs across conditions', keys: ['shared feature'], mistake: 'Using numbing to differentiate' }),
      O('c', 'The way his surroundings sometimes look flat or two-dimensional when his symptoms are most intense', -1,
        { r: 'Perceptual change alone is not decisive', approach: 'Perception framing', why: 'It is the intact insight, not the perception, that distinguishes it', keys: ['intact insight'], mistake: 'Reading altered perception as psychosis' }),
      O('d', 'The distress and fear he experiences about the symptoms whenever they happen to become especially strong', 0,
        { r: 'Distress is nonspecific', approach: 'Distress framing', why: 'Distress does not separate the two', keys: ['shared distress'], mistake: 'Using distress to differentiate' }),
    ]),
    Q('q3', 'core', 'How does his presentation differ from panic disorder?', ['R1'], [
      O('a', 'His detachment is persistent rather than occurring only as brief, discrete attacks of intense fear that peak within minutes', 3,
        { r: 'Persistent detachment versus discrete attacks', approach: 'Contrast the symptom course', why: 'Panic features discrete attacks; his detachment is persistent', keys: ['months of persistent detachment'], mistake: 'Treating persistent detachment as panic' }),
      O('b', 'The fact that he feels frightened and worried about the unsettling sensations he keeps experiencing in his body and mind', -1,
        { r: 'Fear of the sensations occurs in both', approach: 'Fear framing', why: 'Both can involve fear of the sensations', keys: ['shared fear'], mistake: 'Using fear of sensations to differentiate' }),
      O('c', 'The way his symptoms tend to worsen during the most stressful and demanding weeks of his graduate program', -1,
        { r: 'Stress reactivity is nonspecific', approach: 'Stress framing', why: 'Worsening under stress does not separate them', keys: ['nonspecific reactivity'], mistake: 'Using stress sensitivity to differentiate' }),
      O('d', 'The fact that he tends to avoid the situations that seem to bring on or worsen his feelings of detachment', 0,
        { r: 'Avoidance occurs in both', approach: 'Avoidance framing', why: 'Avoidance is shared and not decisive', keys: ['shared avoidance'], mistake: 'Using avoidance to differentiate' }),
    ]),
    Q('q4', 'intake', 'What is the most important condition to rule out before confirming the diagnosis?', ['R3'], [
      O('a', 'A substance-induced cause, such as cannabis or another drug, which can produce depersonalization and derealization', 3,
        { r: 'Exclude a substance-induced cause', approach: 'Rule out substances and medical causes', why: 'Substances can cause depersonalization/derealization and must be excluded', keys: ['denies cannabis use'], mistake: 'Skipping the substance and medical rule-out' }),
      O('b', 'A long-standing personality disorder that could account for why he feels so detached from himself and from other people', -1,
        { r: 'A personality pattern is not the rule-out', approach: 'Personality framing', why: 'The persistent dissociative symptoms are primary', keys: ['dissociative symptoms'], mistake: 'Attributing the symptoms to personality' }),
      O('c', 'A previously undetected eating disorder that might explain both his emotional numbness and his social withdrawal recently', -1,
        { r: 'Eating pathology is not indicated', approach: 'Eating-disorder framing', why: 'No eating concerns are reported', keys: ['no eating data'], mistake: 'Inventing an unsupported rule-out' }),
      O('d', 'An emerging neurocognitive decline that could explain why his surroundings sometimes look foggy and unreal to him', 0,
        { r: 'Cognitive decline is improbable here', approach: 'Neurocognitive framing', why: 'The dissociative picture fits better in a young adult', keys: ['young adult'], mistake: 'Pursuing an improbable rule-out' }),
    ]),
    Q('q5', 'core', 'What co-occurring concern is most important to assess to complete the picture?', ['R4'], [
      O('a', 'Co-occurring anxiety, depression, and trauma history, along with suicide risk, which commonly accompany the disorder', 3,
        { r: 'Screen anxiety, depression, trauma, and risk', approach: 'Assess common comorbidity', why: 'Anxiety, depression, and trauma frequently co-occur and shape care', keys: ['frightened he is going crazy', 'avoids stressors'], mistake: 'Assessing the dissociation in isolation' }),
      O('b', 'A previously undetected primary psychotic disorder that has been stable since well before his symptoms first began', -1,
        { r: 'Psychosis is not indicated', approach: 'Psychosis framing', why: 'His reality testing is intact', keys: ['intact insight'], mistake: 'Pursuing an unsupported rule-out' }),
      O('c', 'A long-standing eating disorder that might be the underlying driver of both his numbness and his perceptual changes', -1,
        { r: 'Eating pathology is not indicated', approach: 'Eating-disorder framing', why: 'No eating concerns are reported', keys: ['no eating data'], mistake: 'Inventing an unsupported comorbidity' }),
      O('d', 'An emerging neurocognitive decline that could explain his sense that he is observing himself from outside his own body', 0,
        { r: 'Cognitive decline is improbable here', approach: 'Neurocognitive framing', why: 'The dissociative picture fits better', keys: ['dissociative symptoms'], mistake: 'Over-attributing to cognitive decline' }),
    ]),
    Q('q6', 'treatment', 'What is the most appropriate treatment approach for his presentation?', ['R2'], [
      O('a', 'Cognitive behavioral therapy with psychoeducation and grounding, addressing catastrophic appraisals of the symptoms', 3,
        { r: 'CBT, grounding, and reappraisal', approach: 'Apply an evidence-based approach', why: 'CBT with grounding and reappraisal targets the maintaining fear of the symptoms', keys: ['fears going crazy', 'monitors sensations'], mistake: 'Choosing an approach that ignores the catastrophic appraisal' }),
      O('b', 'An antipsychotic-focused referral on the assumption that his detachment reflects an underlying psychotic process', -2,
        { r: 'It is not psychosis; antipsychotics are not indicated', approach: 'Psychosis-treatment framing', why: 'His intact reality testing makes a psychotic-disorder plan inappropriate', keys: ['intact insight'], mistake: 'Treating dissociation as psychosis' }),
      O('c', 'Encouraging him to keep avoiding the situations that worsen the detachment until the symptoms resolve on their own', -2,
        { r: 'Avoidance maintains the disorder', approach: 'Avoidance framing', why: 'Avoidance reinforces the fear and the symptoms', keys: ['avoids stressors'], mistake: 'Sanctioning avoidance as coping' }),
      O('d', 'A primarily insight-oriented exploration of his early childhood as the central route to resolving his current symptoms', 0,
        { r: 'Insight-only is not first-line here', approach: 'Depth-only framing', why: 'CBT with grounding is the more indicated approach', keys: ['symptom-focused need'], mistake: 'Prioritizing origins over symptom management' }),
    ]),
    Q('q7', 'treatment', 'How should the plan address his close monitoring of the detachment sensations?', ['R2'], [
      O('a', 'Help him reduce hypervigilant self-monitoring, since constantly checking the sensations tends to intensify and maintain them', 3,
        { r: 'Reduce hypervigilant self-monitoring', approach: 'Target the maintaining behavior', why: 'Hypervigilant monitoring intensifies dissociative symptoms', keys: ['monitors the sensations closely'], mistake: 'Leaving the self-monitoring in place' }),
      O('b', 'Encourage him to monitor the sensations even more closely so that he can detect the earliest sign of each episode coming on', -2,
        { r: 'More monitoring worsens symptoms', approach: 'Vigilance framing', why: 'Closer monitoring heightens the symptom focus', keys: ['hypervigilance'], mistake: 'Encouraging symptom-checking' }),
      O('c', 'Tell him to keep a detailed minute-by-minute log of exactly when the detachment is present throughout each and every day', -1,
        { r: 'Detailed logging feeds the focus', approach: 'Logging framing', why: 'Constant logging reinforces the preoccupation', keys: ['symptom focus'], mistake: 'Assigning a counterproductive monitoring task' }),
      O('d', 'Advise him to avoid any activity that might bring on the sensations so that he never has to notice the detachment at all', -1,
        { r: 'Avoidance maintains the disorder', approach: 'Avoidance framing', why: 'It prevents the new learning that reduces fear', keys: ['avoidance'], mistake: 'Sanctioning avoidance' }),
    ]),
    Q('q8', 'treatment', 'Owen asks whether medication could help. The most appropriate counselor action is to:', ['R5'], [
      O('a', 'Coordinate a referral to a prescriber for evaluation, especially of comorbid anxiety or depression, while continuing therapy', 3,
        { r: 'Refer and coordinate within scope', approach: 'Coordinate care', why: 'Counselors refer for medication rather than prescribe', keys: ['asks about medication'], mistake: 'Giving specific medication advice' }),
      O('b', 'Recommend the specific medication and dose that tends to work best for people with depersonalization symptoms like his', -2,
        { r: 'Naming a drug and dose exceeds scope', approach: 'Prescriptive advice', why: 'Medication selection is outside counselor scope', keys: ['no prescriptive authority'], mistake: 'Overstepping professional limits' }),
      O('c', 'Tell him that medication is unnecessary and that the detachment will resolve entirely through the grounding techniques alone', -1,
        { r: 'Discouraging meds overreaches', approach: 'Discourage medication', why: 'The decision belongs with a prescriber', keys: ['client autonomy'], mistake: 'Steering a medical decision' }),
      O('d', 'Suggest he research medications for dissociation himself and bring whichever one he prefers to a future appointment with you', -1,
        { r: 'Outsourcing to self-research is poor care', approach: 'Defer to self-research', why: 'It abandons proper coordination', keys: ['needs professional evaluation'], mistake: 'Replacing referral with self-directed search' }),
    ]),
    Q('q9', 'counseling', 'Owen says he is terrified the detachment means he is “going crazy.” The most therapeutic response is to:', ['R2'], [
      O('a', 'Validate the fear and provide psychoeducation that these symptoms, while frightening, are a recognized and treatable condition', 3,
        { r: 'Validate and psychoeducate to reduce the fear', approach: 'Normalize and explain', why: 'Understanding the symptoms as a known, treatable condition reduces catastrophic fear', keys: ['fears going crazy', 'intact insight'], mistake: 'Either dismissing the fear or reinforcing it' }),
      O('b', 'Agree that these symptoms are indeed a worrying sign and suggest that he may well be developing a serious mental illness', -2,
        { r: 'Confirming the catastrophe deepens the fear', approach: 'Confirm the fear', why: 'It reinforces the catastrophic appraisal that maintains symptoms', keys: ['catastrophic appraisal'], mistake: 'Validating the feared interpretation' }),
      O('c', 'Tell him quickly that there is absolutely nothing to worry about and that he should simply try to stop thinking about it', -1,
        { r: 'Dismissive reassurance can invalidate', approach: 'Dismissive reassurance', why: 'It skips the validation and explanation he needs', keys: ['fear dismissed'], mistake: 'Reassuring without educating' }),
      O('d', 'Explain in technical detail the neuroscience of dissociation to convince him on scientific grounds that he is not going crazy', -1,
        { r: 'Lecturing rarely shifts the fear', approach: 'Didactic persuasion', why: 'Validation plus tailored explanation works better', keys: ['emotional reasoning'], mistake: 'Substituting dense facts for engagement' }),
    ]),
    Q('q10', 'counseling', 'Which technique is most useful to help Owen during an episode of detachment in session?', ['R2'], [
      O('a', 'Guide him through grounding that reconnects him with his senses and surroundings to reduce the intensity of the episode', 3,
        { r: 'Use grounding to reconnect with the present', approach: 'Apply grounding techniques', why: 'Sensory grounding reduces the intensity of dissociative episodes', keys: ['feels detached and unreal'], mistake: 'Leaving him to endure the episode without grounding' }),
      O('b', 'Encourage him to focus intently on exactly how detached and unreal he feels so he can fully understand the experience', -2,
        { r: 'Focusing inward intensifies the episode', approach: 'Introspection framing', why: 'Deepening attention to the sensations worsens dissociation', keys: ['hypervigilance'], mistake: 'Amplifying the symptom focus' }),
      O('c', 'End the session immediately and send him home so that he can rest until the detachment passes on its own at home', -1,
        { r: 'Abruptly ending models avoidance', approach: 'Escape framing', why: 'Grounding in session is preferable to escape', keys: ['needs containment'], mistake: 'Reinforcing escape from the experience' }),
      O('d', 'Wait quietly without intervening until the episode resolves entirely by itself before continuing the conversation', -1,
        { r: 'Passive waiting prolongs the episode', approach: 'Passive framing', why: 'Active grounding is preferable to passive waiting', keys: ['prolonged episode'], mistake: 'Failing to intervene with grounding' }),
    ]),
    Q('q11', 'ethics', 'Owen worries the diagnosis will appear in records and affect his academic standing. Best response?', ['R5'], [
      O('a', 'Explain how his records are protected and disclosed only with his consent or as required, supporting his informed decisions', 3,
        { r: 'Clarify confidentiality and his control over disclosure', approach: 'Inform and protect confidentiality', why: 'Records are protected and shared only with consent or as required by law', keys: ['fears academic impact', 'privacy concern'], mistake: 'Either dismissing the concern or breaching confidentiality' }),
      O('b', 'Reassure him by promising that you will simply leave the diagnosis out of his clinical record entirely to protect his standing', -2,
        { r: 'Omitting the diagnosis falsifies the record', approach: 'Omit to reassure', why: 'A deliberately incomplete record is improper', keys: ['record integrity'], mistake: 'Falsifying records to reassure' }),
      O('c', 'Tell him his concern is unfounded and that no one would ever have any interest in his counseling records in the first place', -1,
        { r: 'Dismissing the concern harms rapport', approach: 'Dismissive framing', why: 'His concern deserves an accurate, respectful answer', keys: ['client dignity'], mistake: 'Brushing off a legitimate worry' }),
      O('d', 'Offer to keep a private, separate set of unofficial notes about his diagnosis outside of his formal clinical record', -2,
        { r: 'Shadow records are improper', approach: 'Off-the-record notes', why: 'Parallel secret records violate documentation standards', keys: ['single accurate record'], mistake: 'Keeping hidden duplicate notes' }),
    ]),
    Q('q12', 'ethics', 'As CBT with interoceptive and grounding exercises is planned, informed consent most importantly requires:', ['R5'], [
      O('a', 'Explaining the rationale, that some exercises may briefly heighten the sensations, and that participation remains voluntary', 3,
        { r: 'Disclose rationale, discomfort, and choice', approach: 'Obtain informed consent', why: 'Consent requires explaining the approach and its temporary effects', keys: ['exercises planned', 'fears the sensations'], mistake: 'Starting exposure-based work without informed consent' }),
      O('b', 'Assuring him in advance that the exercises will be completely comfortable and will never bring on any detachment at all', -2,
        { r: 'Misrepresenting the method is dishonest', approach: 'Downplay the method', why: 'Some exercises may briefly heighten sensations', keys: ['accurate disclosure'], mistake: 'Misstating what the treatment involves' }),
      O('c', 'Having him agree up front that he will complete every exercise assigned no matter how distressing it turns out to be for him', -1,
        { r: 'Consent is voluntary and revocable', approach: 'Mandate completion', why: 'He retains the right to pause or decline', keys: ['voluntary participation'], mistake: 'Treating consent as a binding commitment' }),
      O('d', 'Postponing any explanation of the exercises until after the first one so that his anticipatory anxiety does not build up first', -1,
        { r: 'Withholding the method violates consent', approach: 'Delay disclosure', why: 'Consent must precede the intervention', keys: ['informed choice'], mistake: 'Intervening before explaining' }),
    ]),
    Q('q13', 'ethics', 'Owen reveals heavy cannabis use that began around when the symptoms started, and asks the counselor to ignore it. Best response?', ['R5'], [
      O('a', 'Explain that the cannabis use is clinically relevant to his symptoms and address it collaboratively rather than ignoring it', 3,
        { r: 'Address the clinically relevant substance use', approach: 'Integrate the substance into the formulation', why: 'Cannabis can cause or worsen depersonalization and is relevant to the plan', keys: ['use began with symptoms', 'asks to ignore it'], mistake: 'Agreeing to leave out clinically relevant information' }),
      O('b', 'Agree to leave the cannabis use out of the assessment and the plan entirely so that he feels more comfortable with you', -2,
        { r: 'Ignoring relevant use is poor care', approach: 'Collude with omission', why: 'It omits a factor central to his symptoms', keys: ['clinically relevant'], mistake: 'Excluding material information at the client’s request' }),
      O('c', 'Tell him he must stop all cannabis use immediately or you will not be able to continue working with him in counseling at all', -1,
        { r: 'A coercive ultimatum harms engagement', approach: 'Condition treatment', why: 'A collaborative, motivational approach is preferable', keys: ['ambivalence likely'], mistake: 'Issuing an ultimatum that ruptures the alliance' }),
      O('d', 'Document the cannabis use but avoid ever discussing it with him so that the topic does not create tension between you', -1,
        { r: 'Avoiding the topic abandons the issue', approach: 'Avoidance framing', why: 'The use should be addressed, not silently sidelined', keys: ['avoided material'], mistake: 'Sidestepping a central clinical issue' }),
    ]),
  ],
};

// ============================================================================
// D133 — Oppositional Defiant Disorder (F91.3) — Disruptive — medium
// ============================================================================
const D133 = {
  id: 'ncmhce-D133',
  title: 'A defiant, irritable nine-year-old at home and school',
  category: 'Disruptive',
  difficulty: 'medium',
  primaryDiagnosis: { name: 'Oppositional Defiant Disorder', code: 'F91.3' },
  diagnosis: { name: 'Oppositional Defiant Disorder', code: 'F91.3' },
  differentialOptions: [
    { id: 'do1', name: 'Oppositional Defiant Disorder', isCorrect: true },
    { id: 'do2', name: 'Conduct Disorder, Adolescent-Onset Type', isCorrect: false },
    { id: 'do3', name: 'Attention-Deficit/Hyperactivity Disorder, Combined', isCorrect: false },
    { id: 'do4', name: 'Disruptive Mood Dysregulation Disorder', isCorrect: false },
  ],
  narrative: {
    intake:
      'Jamal Carter, a 9-year-old boy, is brought by his mother after months of escalating conflict. He argues with adults, refuses to ' +
      'follow rules, deliberately annoys his sister, blames others for his mistakes, and is often touchy, angry, and resentful at home and school.',
    session1:
      'His mother reports the pattern has lasted more than six months and occurs with several different adults. He has not been physically ' +
      'aggressive toward people or animals, has not destroyed property or stolen, and has no history of serious rule violations beyond defiance.',
    session2:
      'His teacher confirms similar defiance and irritability in class. Jamal can be cooperative and warm when not in conflict, and there is ' +
      'no indication of abuse. His mother feels exhausted and is caught in escalating power struggles and inconsistent discipline at home.',
  },
  diagnosticRationale:
    'A persistent pattern of angry or irritable mood, argumentative and defiant behavior toward authority figures, and vindictiveness ' +
    'lasting more than six months and occurring across home and school, beyond developmental norms and without serious violations of others’ ' +
    'rights, meets DSM-5-TR criteria for oppositional defiant disorder rather than conduct disorder, ADHD alone, or disruptive mood dysregulation disorder.',
  references: [
    { id: 'R1', source: 'DSM-5-TR', detail: 'ODD: angry/irritable mood, argumentative/defiant behavior, and vindictiveness for 6+ months' },
    { id: 'R2', source: 'NICE guidelines', detail: 'Conduct and oppositional problems: parent training/management programs as first-line' },
    { id: 'R3', source: 'Hays (Assessment)', detail: 'Multi-informant assessment using parent and teacher reports and rating scales' },
    { id: 'R4', source: 'ACA Code of Ethics', detail: 'A.1., B.5., and C.2.: welfare, confidentiality with minors, and scope of practice' },
    { id: 'R5', source: 'NBCC Content Outline', detail: 'Clinical decision-making and measurement-based care across the counseling process' },
  ],
  questions: [
    Q('q1', 'intake', 'What is most important to confirm to support an oppositional defiant disorder diagnosis?', ['R1'], [
      O('a', 'A 6-month pattern of angry/irritable mood and defiant, vindictive behavior occurring with more than one person or setting', 3,
        { r: 'Six-month pattern across settings', approach: 'Confirm duration and pervasiveness', why: 'DSM-5-TR requires a 6-month pattern across people or settings', keys: ['more than six months', 'home and school'], mistake: 'Diagnosing from a brief or single-setting conflict' }),
      O('b', 'That he can clearly explain the single specific event that he believes caused him to start behaving this way at home', -1,
        { r: 'A precipitant is not the criterion', approach: 'Trigger framing', why: 'Etiology is not part of the criteria', keys: ['pattern-based diagnosis'], mistake: 'Using a trigger as the diagnostic test' }),
      O('c', 'That his defiant behavior has clearly become more severe over the past week than it was the week before that', -1,
        { r: 'Recent change is not the criterion', approach: 'Recent-change framing', why: 'The sustained 6-month pattern is what matters', keys: ['established pattern'], mistake: 'Confusing a recent uptick with the criteria' }),
      O('d', 'That his behavior occurs only at home with his mother and not in any other setting or with any other adults', 0,
        { r: 'Single-setting-only argues against the diagnosis', approach: 'Single-setting framing', why: 'Cross-setting evidence supports, rather than rules out, ODD', keys: ['teacher confirms defiance'], mistake: 'Requiring the behavior to be limited to one setting' }),
    ]),
    Q('q2', 'core', 'Which feature best differentiates his presentation from conduct disorder?', ['R1'], [
      O('a', 'His behavior is defiant and argumentative without the serious violations of others’ rights, aggression, or theft seen in conduct disorder', 3,
        { r: 'Defiance without rights violations', approach: 'Contrast defiance with rights violations', why: 'Conduct disorder involves aggression and rights violations that he lacks', keys: ['no aggression to people or animals', 'no theft or property destruction'], mistake: 'Calling defiance without rights violations conduct disorder' }),
      O('b', 'The fact that he frequently argues with the adults in his life and refuses to follow the rules they set for him, which on its own does not establish the more serious conduct-disorder diagnosis', -1,
        { r: 'Arguing and rule refusal define ODD itself', approach: 'Symptom-presence framing', why: 'These features are ODD criteria, not what separates it from conduct disorder', keys: ['core ODD features'], mistake: 'Using ODD features to distinguish from conduct disorder' }),
      O('c', 'The irritability and the angry, resentful mood that he displays during many of his conflicts with adults', -1,
        { r: 'Irritability occurs in both', approach: 'Irritability framing', why: 'Irritability is nonspecific between them', keys: ['shared affect'], mistake: 'Reading irritability as decisive' }),
      O('d', 'The way his behavior tends to be worse on the busiest and most stressful days for the family at home', 0,
        { r: 'Stress reactivity is nonspecific', approach: 'Stress framing', why: 'Worsening under stress does not differentiate them', keys: ['nonspecific reactivity'], mistake: 'Using stress sensitivity to differentiate' }),
    ]),
    Q('q3', 'core', 'How should the counselor weigh a possible co-occurring ADHD?', ['R1'], [
      O('a', 'ADHD can co-occur and should be assessed separately, since defiance differs from inattentive and hyperactive-impulsive symptoms', 3,
        { r: 'Assess ADHD as a separable comorbidity', approach: 'Distinguish defiance from ADHD symptoms', why: 'ODD and ADHD are distinct and frequently co-occur', keys: ['defiance vs inattention/impulsivity'], mistake: 'Assuming the defiance is simply ADHD' }),
      O('b', 'The defiance is almost certainly just a direct expression of ADHD, so no separate assessment of ADHD is really needed', -1,
        { r: 'Collapsing ODD into ADHD is an error', approach: 'Collapse framing', why: 'Defiance is not simply an ADHD symptom', keys: ['distinct constructs'], mistake: 'Treating defiance as identical to ADHD' }),
      O('c', 'ADHD can be ruled out entirely on the basis that he is able to be cooperative and warm when he is not in conflict', -1,
        { r: 'Calm moments do not rule out ADHD', approach: 'Calm-period framing', why: 'Cooperation between conflicts does not exclude ADHD', keys: ['comorbidity possible'], mistake: 'Ruling out ADHD on insufficient grounds' }),
      O('d', 'Whether the ADHD symptoms are clearly more severe today than they were earlier in this same school year so far', 0,
        { r: 'Severity trend is not the question', approach: 'Severity-trend framing', why: 'The issue is presence and separability, not a recent trend', keys: ['assessment focus'], mistake: 'Reframing the question as a severity trend' }),
    ]),
    Q('q4', 'core', 'How does his presentation differ from disruptive mood dysregulation disorder (DMDD)?', ['R1'], [
      O('a', 'His core problem is defiant, argumentative behavior rather than the persistent severe irritability with frequent temper outbursts of DMDD', 3,
        { r: 'Defiance-centered versus severe persistent irritability', approach: 'Contrast the core feature', why: 'DMDD centers on severe, persistent irritability and frequent outbursts', keys: ['defiance and argumentativeness', 'warm between conflicts'], mistake: 'Calling defiance-centered behavior DMDD' }),
      O('b', 'The fact that he is often touchy and easily annoyed during many of his daily interactions with the adults around him, a feature that on its own does not point to one of these diagnoses over the other', -1,
        { r: 'Touchiness occurs in both', approach: 'Symptom-presence framing', why: 'Irritable affect is shared between them', keys: ['shared feature'], mistake: 'Using touchiness to differentiate' }),
      O('c', 'The conflict and tension that he has with his mother and his sister at home over the course of most days', -1,
        { r: 'Family conflict is nonspecific', approach: 'Conflict framing', why: 'Family conflict occurs in both', keys: ['shared conflict'], mistake: 'Reading conflict as decisive' }),
      O('d', 'The way his behavior tends to be worse during the busiest and most stressful weeks at home and at school', 0,
        { r: 'Stress reactivity is nonspecific', approach: 'Stress framing', why: 'Worsening under stress does not differentiate them', keys: ['nonspecific reactivity'], mistake: 'Using stress sensitivity to differentiate' }),
    ]),
    Q('q5', 'intake', 'What assessment method most strengthens the diagnostic evaluation for Jamal?', ['R3'], [
      O('a', 'Multi-informant assessment using parent and teacher reports and rating scales across settings', 3,
        { r: 'Parent and teacher multi-informant data', approach: 'Use multi-informant assessment', why: 'ODD is assessed across settings using parent and teacher reports', keys: ['mother and teacher reports'], mistake: 'Relying on a single informant or one setting' }),
      O('b', 'Basing the diagnosis only on how Jamal behaves during the counseling session itself without other informants', -1,
        { r: 'One session is insufficient', approach: 'Single-snapshot framing', why: 'Cross-setting, multi-informant evidence is needed', keys: ['pervasiveness'], mistake: 'Diagnosing from one in-session sample' }),
      O('c', 'Relying solely on the mother’s account and not seeking any information from his teacher or the school', -1,
        { r: 'A single informant is insufficient', approach: 'Single-informant framing', why: 'Multi-informant data strengthens the assessment', keys: ['needs cross-setting data'], mistake: 'Using only one informant' }),
      O('d', 'Ordering neuropsychological and neuroimaging tests yourself to confirm the diagnosis before any treatment planning begins', -1,
        { r: 'Ordering such tests exceeds scope', approach: 'Order tests framing', why: 'Counselors do not order these tests', keys: ['scope limit'], mistake: 'Acting outside scope of practice' }),
    ]),
    Q('q6', 'treatment', 'What is the most appropriate first-line treatment recommendation?', ['R2'], [
      O('a', 'Parent management training to build consistent, positive discipline and interrupt the coercive parent-child cycle', 3,
        { r: 'Parent management training is first-line', approach: 'Apply the guideline', why: 'NICE supports parent training programs as first-line for ODD', keys: ['power struggles', 'inconsistent discipline'], mistake: 'Offering individual insight therapy to the child alone as primary' }),
      O('b', 'Individual insight-oriented play therapy for Jamal alone as the complete treatment, without any parent involvement at all', -1,
        { r: 'Child-only insight work is not first-line', approach: 'Child-only framing', why: 'Parent training is the evidence-based first-line for ODD', keys: ['family pattern'], mistake: 'Excluding the parent component' }),
      O('c', 'Recommending that his mother apply much stricter and more punitive consequences until his defiant behavior finally stops', -2,
        { r: 'Harsh punishment escalates the cycle', approach: 'Punitive framing', why: 'Escalating punishment tends to worsen the coercive cycle', keys: ['escalating power struggles'], mistake: 'Recommending harsher punishment' }),
      O('d', 'Referring the family directly to medication management as the primary treatment for his oppositional behavior', -1,
        { r: 'Medication is not first-line for ODD itself', approach: 'Medication-first framing', why: 'Psychosocial parent training is first-line for ODD', keys: ['behavioral first-line'], mistake: 'Defaulting to medication for core ODD' }),
    ]),
    Q('q7', 'treatment', 'A central target of the parent-focused work would most appropriately be:', ['R2'], [
      O('a', 'Replacing escalating commands and inconsistent follow-through with clear expectations, consistency, and positive reinforcement', 3,
        { r: 'Consistency and positive reinforcement', approach: 'Restructure the discipline pattern', why: 'Consistent expectations and reinforcement interrupt the coercive cycle', keys: ['inconsistent discipline', 'power struggles'], mistake: 'Leaving the coercive cycle in place' }),
      O('b', 'Coaching his mother to win each confrontation decisively so that Jamal learns once and for all exactly who is in charge', -2,
        { r: 'Power battles escalate the cycle', approach: 'Win-the-battle framing', why: 'Engaging in escalating battles reinforces the pattern', keys: ['escalating conflict'], mistake: 'Framing discipline as a contest to win' }),
      O('c', 'Encouraging his mother to give in whenever the conflict becomes intense so that the household stays calmer overall', -2,
        { r: 'Giving in reinforces defiance', approach: 'Capitulation framing', why: 'Inconsistent giving-in negatively reinforces the behavior', keys: ['inconsistency'], mistake: 'Rewarding escalation with capitulation' }),
      O('d', 'Advising his mother to ignore all of Jamal’s behavior entirely until he simply grows out of this difficult phase on his own', -1,
        { r: 'Blanket ignoring is not the plan', approach: 'Wait-it-out framing', why: 'Active, consistent parenting strategies are indicated', keys: ['needs structure'], mistake: 'Assuming the pattern will self-resolve' }),
    ]),
    Q('q8', 'treatment', 'How should the school be involved in the plan?', ['R3'], [
      O('a', 'With consent, coordinate consistent expectations and supports across home and school given the cross-setting pattern', 3,
        { r: 'Coordinate home-school consistency with consent', approach: 'Align supports across settings', why: 'Cross-setting consistency strengthens behavioral intervention', keys: ['defiance at school too'], mistake: 'Addressing home while ignoring school' }),
      O('b', 'Keep the school entirely out of the plan so that Jamal’s counseling remains a completely private matter for the family', -1,
        { r: 'Excluding school forgoes useful consistency', approach: 'Siloed framing', why: 'Cross-setting coordination is valuable for ODD', keys: ['cross-setting pattern'], mistake: 'Refusing helpful, consented coordination' }),
      O('c', 'Contact the school directly to share the details of his sessions without first obtaining the family’s informed consent', -2,
        { r: 'Disclosing without consent breaches confidentiality', approach: 'Disclose without consent', why: 'Coordination requires a valid release', keys: ['no release'], mistake: 'Sharing information without authorization' }),
      O('d', 'Recommend that the school apply stricter punishments so that the consequences at school are tougher than those at home', -1,
        { r: 'Harsher punishment escalates the cycle', approach: 'Punitive framing', why: 'Escalating punishment tends to worsen the pattern', keys: ['coercive cycle'], mistake: 'Recommending punitive escalation at school' }),
    ]),
    Q('q9', 'counseling', 'Jamal’s mother says she feels like a failure as a parent. The most therapeutic response is to:', ['R2'], [
      O('a', 'Validate how exhausting the conflict is and reframe parent training as a skill set, not a verdict on her worth as a parent', 3,
        { r: 'Validate and reframe parent training', approach: 'Normalize and reframe', why: 'Framing the work as skill-building reduces blame and supports engagement', keys: ['feels exhausted', 'feels like a failure'], mistake: 'Either blaming or only sympathizing with the parent' }),
      O('b', 'Agree that her parenting has indeed been the main cause of the problem and that she will need to fix her mistakes', -2,
        { r: 'Blaming the parent deepens shame', approach: 'Blame framing', why: 'Parent-blaming undermines engagement and the alliance', keys: ['parent shame'], mistake: 'Assigning blame rather than building skills' }),
      O('c', 'Tell her quickly that she is a wonderful parent and that there is really nothing she needs to change about her approach at all', -1,
        { r: 'Premature reassurance forgoes the work', approach: 'Dismissive reassurance', why: 'It skips the skill-building the situation calls for', keys: ['needs strategies'], mistake: 'Reassuring instead of engaging the work' }),
      O('d', 'Provide her with detailed statistics on how common oppositional behavior is so she can see that she should not feel responsible', -1,
        { r: 'Facts alone rarely shift the feeling', approach: 'Statistical persuasion', why: 'Validation and reframing work better here', keys: ['emotional reasoning'], mistake: 'Answering emotion with numbers' }),
    ]),
    Q('q10', 'counseling', 'How can the counselor best engage Jamal himself in the work?', ['R2'], [
      O('a', 'Build rapport, find his strengths and goals, and involve him in age-appropriate problem-solving rather than only correcting him', 3,
        { r: 'Strengths-based, collaborative engagement', approach: 'Engage the child collaboratively', why: 'Rapport and collaborative problem-solving engage a defiant child', keys: ['warm when not in conflict'], mistake: 'Approaching the child only as a problem to correct' }),
      O('b', 'Confront him firmly about every instance of his misbehavior so that he clearly understands just how serious the situation is', -1,
        { r: 'Confrontation invites more defiance', approach: 'Confrontational framing', why: 'A purely corrective stance tends to increase defiance', keys: ['defiance toward authority'], mistake: 'Leading with confrontation' }),
      O('c', 'Focus the sessions only on listing his misbehaviors so that he is fully aware of everything he has been doing wrong lately', -1,
        { r: 'A deficit-only focus disengages him', approach: 'Deficit framing', why: 'A strengths-based approach engages better', keys: ['needs rapport'], mistake: 'Centering only on deficits' }),
      O('d', 'Tell him that if he does not change his behavior he will face increasingly serious consequences from everyone around him', -2,
        { r: 'Threats erode engagement', approach: 'Threat framing', why: 'Threats damage rapport and increase resistance', keys: ['alliance with the child'], mistake: 'Using threats to motivate a child' }),
    ]),
    Q('q11', 'ethics', 'Because Jamal is a minor, how should the counselor handle confidentiality with him and his mother?', ['R4'], [
      O('a', 'Clarify at the outset, in age-appropriate terms, what will be shared with his mother and what stays private, within legal limits', 3,
        { r: 'Set clear minor-confidentiality expectations up front', approach: 'Clarify confidentiality with minors', why: 'ACA guidance calls for clarifying disclosure expectations with minors and guardians', keys: ['9-year-old client', 'parent involved'], mistake: 'Leaving confidentiality expectations undefined' }),
      O('b', 'Promise Jamal that nothing he ever says will be shared with his mother under any circumstances at all throughout treatment', -2,
        { r: 'Absolute secrecy from the guardian is inappropriate', approach: 'Overpromise privacy', why: 'Guardians of a young child are appropriately involved within limits', keys: ['guardian role'], mistake: 'Guaranteeing total secrecy from the parent' }),
      O('c', 'Share everything Jamal says with his mother automatically, since as a minor he has no confidentiality interests at all to consider', -1,
        { r: 'Minors still have some privacy interests', approach: 'No-privacy framing', why: 'Even minors have privacy interests to be respected within limits', keys: ['child dignity'], mistake: 'Disregarding the minor’s privacy entirely' }),
      O('d', 'Avoid discussing confidentiality with either of them so that the issue does not complicate the start of the treatment', -1,
        { r: 'Skipping the discussion undermines consent', approach: 'Evade the issue', why: 'Confidentiality expectations are part of informed consent', keys: ['informed consent'], mistake: 'Failing to set expectations' }),
    ]),
    Q('q12', 'ethics', 'During a session Jamal hints that an adult sometimes hits him hard enough to leave marks. Best step?', ['R4'], [
      O('a', 'Follow mandated-reporting duties, assess safety, and make the required child-abuse report through proper channels', 3,
        { r: 'Mandated reporting and safety first', approach: 'Apply mandated-reporting duty', why: 'Suspected child abuse triggers a mandatory report', keys: ['hit hard enough to leave marks'], mistake: 'Treating disclosed possible abuse as ordinary confidential material' }),
      O('b', 'Keep the disclosure confidential because the information came up during a private counseling session with the child', -2,
        { r: 'Confidentiality yields to mandated reporting', approach: 'Confidentiality-absolute framing', why: 'Mandated reporting overrides confidentiality for suspected abuse', keys: ['reporting duty'], mistake: 'Treating abuse disclosure as protected' }),
      O('c', 'Wait several weeks to see whether Jamal mentions the same thing again before deciding whether any action is needed at all', -2,
        { r: 'Delaying a report is unsafe and improper', approach: 'Wait-and-see framing', why: 'Suspected abuse requires timely reporting, not delay', keys: ['safety risk'], mistake: 'Postponing a required report' }),
      O('d', 'Confront the mother directly about the marks yourself before making any report through the official channels', -1,
        { r: 'Investigating yourself is not the counselor’s role', approach: 'Self-investigation framing', why: 'Reporting goes through proper channels, not personal confrontation', keys: ['proper channels'], mistake: 'Conducting your own investigation' }),
    ]),
    Q('q13', 'ethics', 'The counselor has limited training in child and family behavioral treatment. The most ethical course of action is to:', ['R4'], [
      O('a', 'Seek consultation and training, or refer to a clinician competent in parent training and child behavioral treatment', 3,
        { r: 'Consult, train, or refer within competence', approach: 'Practice within competence', why: 'ACA C.2. requires competence; refer or build it through consultation', keys: ['limited child-family training'], mistake: 'Delivering specialized treatment without competence' }),
      O('b', 'Continue to manage the case entirely alone to preserve the continuity of the relationship he has built with the family', -2,
        { r: 'Going it alone exceeds competence', approach: 'Continuity-over-competence', why: 'Continuity does not justify exceeding competence', keys: ['competence exceeded'], mistake: 'Prioritizing continuity over competence' }),
      O('c', 'Tell the mother the behavior is just a normal phase that needs no specialized treatment and continue with supportive talks only', -2,
        { r: 'Minimizing the problem fails the family', approach: 'Downplay the severity', why: 'A 6-month impairing pattern warrants appropriate treatment', keys: ['impairing pattern'], mistake: 'Underestimating the need for evidence-based care' }),
      O('d', 'Transfer the family at once to another provider with no explanation, consultation, or coordinated plan for the transition', -1,
        { r: 'Abrupt transfer mishandles continuity', approach: 'Uncoordinated handoff', why: 'Transitions must be coordinated to avoid abandonment', keys: ['no transition plan'], mistake: 'Dropping the family without coordination' }),
    ]),
  ],
};

// ============================================================================
// D134 — Acute Stress Disorder (F43.0) — Trauma — medium
// ============================================================================
const D134 = {
  id: 'ncmhce-D134',
  title: 'Intense distress and dissociation two weeks after a crash',
  category: 'Trauma',
  difficulty: 'medium',
  primaryDiagnosis: { name: 'Acute Stress Disorder', code: 'F43.0' },
  diagnosis: { name: 'Acute Stress Disorder', code: 'F43.0' },
  differentialOptions: [
    { id: 'do1', name: 'Acute Stress Disorder', isCorrect: true },
    { id: 'do2', name: 'Posttraumatic Stress Disorder', isCorrect: false },
    { id: 'do3', name: 'Adjustment Disorder, with Anxiety', isCorrect: false },
    { id: 'do4', name: 'Major Depressive Disorder, Moderate', isCorrect: false },
  ],
  narrative: {
    intake:
      'Rosa Delgado, a 29-year-old teacher, presents twelve days after a serious multi-car highway crash in which she feared she would die. ' +
      'She reports vivid intrusive memories, nightmares, intense anxiety, and a sense that things around her feel unreal since the accident.',
    session1:
      'She describes feeling dazed and detached, struggling to recall parts of the crash, avoiding driving and news of accidents, and ' +
      'sleeping poorly with an exaggerated startle. The symptoms began right after the crash and have been present for the past twelve days.',
    session2:
      'She is frightened by how strongly she is reacting and worries something is seriously wrong with her. She denies prior trauma treatment, ' +
      'denies current suicidal intent, and is motivated to feel steadier and to be able to drive again for her job.',
  },
  diagnosticRationale:
    'Following exposure to actual or threatened death, the presence of intrusion, negative mood, dissociative, avoidance, and arousal ' +
    'symptoms lasting from three days to one month after the trauma meets DSM-5-TR criteria for acute stress disorder. The duration under one ' +
    'month distinguishes it from posttraumatic stress disorder, and the qualifying trauma and dissociative symptoms distinguish it from an adjustment disorder.',
  references: [
    { id: 'R1', source: 'DSM-5-TR', detail: 'Acute stress disorder: trauma exposure plus 9+ symptoms across categories, 3 days to 1 month' },
    { id: 'R2', source: 'VA/DoD CPG', detail: 'Trauma- and stressor-related care: trauma-focused CBT; debriefing not recommended' },
    { id: 'R3', source: 'APA CPG', detail: 'Trauma guideline supporting trauma-focused cognitive-behavioral approaches' },
    { id: 'R4', source: 'C-SSRS', detail: 'Structured suicide-risk screening following trauma' },
    { id: 'R5', source: 'ACA Code of Ethics', detail: 'A.1. and C.2.: client welfare, scope of practice, and informed consent' },
  ],
  questions: [
    Q('q1', 'intake', 'What must the counselor confirm to establish the trauma exposure for acute stress disorder?', ['R1'], [
      O('a', 'That she was exposed to actual or threatened death or serious injury during the highway crash she survived', 3,
        { r: 'Confirm the qualifying exposure', approach: 'Establish the trauma criterion', why: 'Acute stress disorder requires a qualifying trauma exposure', keys: ['feared she would die', 'serious crash'], mistake: 'Assuming any stressful event qualifies' }),
      O('b', 'That the crash was objectively the single most frightening experience that she has ever had in her entire life so far', -1,
        { r: 'Worst-ever is not the standard', approach: 'Severity-ranking framing', why: 'The criterion is exposure type, not a personal ranking', keys: ['qualifying exposure'], mistake: 'Adding a threshold the criteria do not require' }),
      O('c', 'That she can recall every single detail of the crash clearly and completely without any gaps in her memory of it', -1,
        { r: 'Amnesia is a symptom, not a disqualifier', approach: 'Memory framing', why: 'Dissociative amnesia can be a symptom, not the exposure test', keys: ['struggles to recall parts'], mistake: 'Requiring complete recall to diagnose' }),
      O('d', 'That her most distressing symptoms began on a later day rather than immediately after the crash occurred', 0,
        { r: 'Onset timing within the window is not the test', approach: 'Onset-timing framing', why: 'Symptoms within the 3-day-to-1-month window qualify', keys: ['symptoms since the crash'], mistake: 'Over-focusing on the exact onset day' }),
    ]),
    Q('q2', 'core', 'Which feature most clearly supports acute stress disorder rather than PTSD at this point?', ['R1'], [
      O('a', 'That her symptoms have been present for under one month—twelve days—since the traumatic crash occurred', 3,
        { r: 'Duration under one month indicates ASD', approach: 'Apply the duration window', why: 'ASD applies from 3 days to 1 month; PTSD exceeds one month', keys: ['twelve days of symptoms'], mistake: 'Diagnosing PTSD within the first month' }),
      O('b', 'The vivid intrusive memories and nightmares about the crash that she keeps experiencing throughout the day and night', -1,
        { r: 'Intrusions occur in both', approach: 'Symptom-presence framing', why: 'Intrusion symptoms do not separate ASD from PTSD; duration does', keys: ['shared intrusion symptoms'], mistake: 'Using intrusions to choose between them' }),
      O('c', 'The way she avoids driving and avoids any news or reminders that are connected to car accidents since the crash', -1,
        { r: 'Avoidance occurs in both', approach: 'Avoidance framing', why: 'Avoidance is shared; duration is the differentiator here', keys: ['shared avoidance'], mistake: 'Using avoidance to differentiate' }),
      O('d', 'The exaggerated startle response and the disrupted sleep that she has been experiencing since the accident happened', 0,
        { r: 'Arousal symptoms occur in both', approach: 'Arousal framing', why: 'Arousal symptoms do not separate the two disorders', keys: ['shared arousal'], mistake: 'Reading arousal as decisive' }),
    ]),
    Q('q3', 'core', 'Her feeling that things are unreal and her trouble recalling parts of the crash are best understood as:', ['R1'], [
      O('a', 'Dissociative symptoms, which are part of the acute stress disorder symptom picture', 3,
        { r: 'Dissociative symptoms within ASD', approach: 'Map symptoms to the criteria', why: 'Derealization and dissociative amnesia are recognized ASD symptoms', keys: ['things feel unreal', 'struggles to recall parts'], mistake: 'Treating dissociative symptoms as a separate disorder' }),
      O('b', 'Clear evidence of a primary psychotic process that requires urgent antipsychotic treatment based on these experiences alone', -2,
        { r: 'Dissociation is not psychosis', approach: 'Psychosis framing', why: 'Peritraumatic dissociation is not a psychotic disorder', keys: ['reality testing intact'], mistake: 'Mislabeling dissociation as psychosis' }),
      O('c', 'A sign of a separate, long-standing dissociative disorder that has clearly been present since well before the crash', -1,
        { r: 'These are trauma-linked, not pre-existing', approach: 'Pre-existing-disorder framing', why: 'The symptoms arose with the trauma, within the ASD window', keys: ['onset with the crash'], mistake: 'Attributing acute symptoms to a chronic disorder' }),
      O('d', 'Evidence that she is intentionally exaggerating her symptoms in order to avoid having to return to driving for her job', -2,
        { r: 'Assuming malingering is unwarranted', approach: 'Malingering framing', why: 'There is no basis to assume intentional exaggeration', keys: ['genuine distress'], mistake: 'Pathologizing distress as feigning' }),
    ]),
    Q('q4', 'intake', 'Given her presentation, what risk assessment is most important to complete?', ['R4'], [
      O('a', 'A structured suicide-risk assessment, since trauma exposure can elevate risk even when intent is initially denied', 3,
        { r: 'Assess suicide risk after trauma', approach: 'Screen risk with structure', why: 'Trauma can elevate suicide risk and warrants structured screening', keys: ['intense distress', 'denies current intent'], mistake: 'Skipping risk screening because intent is denied' }),
      O('b', 'A detailed reconstruction of the crash scene so the counselor can fully document exactly how the accident unfolded', -1,
        { r: 'Detailed event reconstruction is not the priority', approach: 'Event-detail framing', why: 'It does not address risk and can destabilize early on', keys: ['risk first'], mistake: 'Prioritizing event detail over risk' }),
      O('c', 'A complete inventory of every prior car trip she has taken so the counselor can gauge how much she usually drives', -1,
        { r: 'Driving history is low yield', approach: 'Inventory framing', why: 'It does not address suicide risk', keys: ['risk unassessed'], mistake: 'Collecting low-yield detail' }),
      O('d', 'A precise log of how many hours she sleeps each night so the counselor can quantify the full extent of her insomnia', -1,
        { r: 'Sleep logging is secondary now', approach: 'Quantification framing', why: 'It does not address the risk that must be assessed', keys: ['safety first'], mistake: 'Confusing monitoring detail with risk assessment' }),
    ]),
    Q('q5', 'core', 'How does her presentation differ from an adjustment disorder?', ['R1'], [
      O('a', 'She experienced a qualifying traumatic exposure and shows trauma-specific intrusion and dissociative symptoms beyond a stress reaction', 3,
        { r: 'Qualifying trauma plus trauma-specific symptoms', approach: 'Tie the diagnosis to the trauma and symptom profile', why: 'ASD requires a qualifying trauma and a specific symptom set adjustment disorder lacks', keys: ['feared death in the crash', 'intrusions and dissociation'], mistake: 'Calling a clear acute stress picture an adjustment disorder' }),
      O('b', 'The fact that she has felt distressed and has had difficulty coping in the days since the accident happened to her, which is something that can follow almost any kind of stressful life event', -1,
        { r: 'General distress fits both', approach: 'Distress framing', why: 'Difficulty coping after a stressor occurs in both', keys: ['shared distress'], mistake: 'Using general distress to decide' }),
      O('c', 'The fact that her symptoms began within the first few days after the stressful event she went through', -1,
        { r: 'Early onset fits both', approach: 'Onset framing', why: 'Both can begin soon after the stressor', keys: ['onset timing'], mistake: 'Using onset timing as the differentiator' }),
      O('d', 'The low mood and the worry that she has been experiencing since the crash disrupted her daily routine', 0,
        { r: 'Mood and worry are nonspecific', approach: 'Mood framing', why: 'These features appear across post-stressor presentations', keys: ['nonspecific symptoms'], mistake: 'Reading mood and worry as decisive' }),
    ]),
    Q('q6', 'treatment', 'What is the most appropriate first-line treatment recommendation for her acute stress disorder?', ['R2'], [
      O('a', 'A brief trauma-focused cognitive-behavioral intervention, which can reduce symptoms and the risk of progression to PTSD', 3,
        { r: 'Trauma-focused CBT is first-line for ASD', approach: 'Apply the guideline', why: 'Trauma-focused CBT is recommended for ASD and reduces PTSD risk', keys: ['within the ASD window', 'no prior trauma treatment'], mistake: 'Choosing a non-trauma-focused approach' }),
      O('b', 'A single mandatory critical-incident debriefing session to make her recount the full crash in detail right away', -2,
        { r: 'Single-session debriefing is not recommended', approach: 'Debriefing framing', why: 'Psychological debriefing is not recommended and may be harmful', keys: ['contraindicated method'], mistake: 'Using debriefing to resolve acute trauma' }),
      O('c', 'Open-ended supportive counseling that deliberately avoids the trauma so that she never has to feel any distress about it', -1,
        { r: 'Avoiding the trauma underperforms', approach: 'Avoidant supportive framing', why: 'Trauma-focused work outperforms deliberate avoidance', keys: ['needs trauma-focused care'], mistake: 'Accommodating avoidance as treatment' }),
      O('d', 'A primarily insight-oriented exploration of her childhood as the main route to resolving her reactions to the recent crash', 0,
        { r: 'Insight-only is not first-line here', approach: 'Depth-only framing', why: 'Evidence favors trauma-focused CBT', keys: ['index trauma is recent'], mistake: 'Prioritizing origins over trauma-focused care' }),
    ]),
    Q('q7', 'treatment', 'What should the early plan prioritize alongside any trauma-focused work?', ['R2'], [
      O('a', 'Psychoeducation, stabilization, and grounding skills to help her manage arousal and dissociation at a tolerable pace', 3,
        { r: 'Stabilize and pace the work', approach: 'Lead with stabilization and education', why: 'Psychoeducation and grounding support tolerating trauma-focused work', keys: ['dazed and detached', 'exaggerated startle'], mistake: 'Pushing intensive exposure without stabilization' }),
      O('b', 'Having her write out an extremely detailed account of the crash to read aloud in full during the very next session', -1,
        { r: 'Premature detailed exposure can overwhelm', approach: 'Premature-narrative framing', why: 'Detailed exposure follows stabilization', keys: ['no stabilization yet'], mistake: 'Starting intensive exposure too early' }),
      O('c', 'Telling her to push herself to drive on the same highway immediately so that she confronts the fear as fast as possible', -2,
        { r: 'Unprepared confrontation can backfire', approach: 'Flooding framing', why: 'Exposure should be prepared and graded, not abrupt', keys: ['no preparation'], mistake: 'Assigning unsupported confrontation' }),
      O('d', 'Encouraging her to avoid all reminders of the crash indefinitely so that she does not experience any distress at all', -2,
        { r: 'Indefinite avoidance maintains symptoms', approach: 'Avoidance framing', why: 'Sustained avoidance raises the risk of PTSD', keys: ['avoidance'], mistake: 'Sanctioning avoidance as the plan' }),
    ]),
    Q('q8', 'treatment', 'What is important to monitor over the coming weeks?', ['R2'], [
      O('a', 'Whether her symptoms resolve or persist beyond one month, which would indicate progression to PTSD and a change in plan', 3,
        { r: 'Monitor for progression to PTSD', approach: 'Track the course over time', why: 'Persistence beyond one month indicates PTSD and shifts the plan', keys: ['twelve days so far', 'within the ASD window'], mistake: 'Failing to monitor for progression' }),
      O('b', 'Only whether her nightmares specifically improve, while disregarding the other symptom categories she is experiencing', -1,
        { r: 'One symptom is not the full picture', approach: 'Single-symptom framing', why: 'Monitoring should span the symptom categories', keys: ['multiple categories'], mistake: 'Reducing monitoring to one symptom' }),
      O('c', 'Only whether she returns to driving, treating that single milestone as proof that all of her symptoms have fully resolved', -1,
        { r: 'One behavior is not the whole outcome', approach: 'Behavior-proxy framing', why: 'Returning to driving does not capture symptom course', keys: ['broader monitoring'], mistake: 'Using one behavior as the sole outcome' }),
      O('d', 'Whether she keeps attending her sessions, treating consistent attendance as the main indicator of her recovery', 0,
        { r: 'Attendance is not an outcome measure', approach: 'Adherence proxy', why: 'Attendance does not measure symptom change', keys: ['process vs outcome'], mistake: 'Mistaking attendance for recovery' }),
    ]),
    Q('q9', 'counseling', 'During a session Rosa becomes dazed and detached while describing the crash. The most therapeutic response is to:', ['R3'], [
      O('a', 'Pause the recounting and guide her through grounding to reorient her before deciding whether to continue', 3,
        { r: 'Ground and reorient within tolerance', approach: 'Regulate before continuing', why: 'Grounding returns a dissociating client to the present and a workable arousal level', keys: ['dazed and detached', 'dissociation'], mistake: 'Pushing the recounting while she is dissociated' }),
      O('b', 'Continue having her describe the crash in detail so that the emotional processing is not interrupted in the middle of it', -2,
        { r: 'Pushing during dissociation can harm', approach: 'Power-through framing', why: 'Continuing while she is dissociated risks retraumatization', keys: ['outside tolerance'], mistake: 'Prioritizing processing over stabilization' }),
      O('c', 'End the session abruptly and send her home so that she can recover from the detachment on her own at home', -1,
        { r: 'Abruptly ending leaves her unstable', approach: 'Escape framing', why: 'Grounding in session is preferable to sending her out dissociated', keys: ['needs containment'], mistake: 'Reinforcing escape from affect' }),
      O('d', 'Quickly change the subject to something pleasant and keep things light for the rest of the session to protect her from distress', -1,
        { r: 'Total avoidance prevents new learning', approach: 'Distraction framing', why: 'Grounding, not avoidance, is indicated', keys: ['avoidance trap'], mistake: 'Avoiding all affect rather than grounding' }),
    ]),
    Q('q10', 'counseling', 'Rosa says her strong reactions mean something is seriously wrong with her. The most therapeutic response is to:', ['R3'], [
      O('a', 'Validate her fear and provide psychoeducation that acute stress reactions are a common, understandable response to trauma', 3,
        { r: 'Validate and normalize the acute reaction', approach: 'Normalize and educate', why: 'Framing the reactions as a common trauma response reduces secondary fear', keys: ['frightened by her reactions'], mistake: 'Either dismissing the fear or confirming that she is broken' }),
      O('b', 'Agree that reacting this strongly is indeed a worrying sign that she may be developing a severe, lasting mental illness', -2,
        { r: 'Confirming the catastrophe deepens distress', approach: 'Confirm the fear', why: 'It reinforces a catastrophic appraisal of normal acute reactions', keys: ['catastrophic appraisal'], mistake: 'Validating the feared interpretation' }),
      O('c', 'Tell her quickly that there is nothing wrong at all and that she should simply try to put the whole crash behind her now', -1,
        { r: 'Dismissive reassurance can invalidate', approach: 'Dismissive reassurance', why: 'It skips the validation and education she needs', keys: ['fear dismissed'], mistake: 'Reassuring without educating' }),
      O('d', 'Explain in technical detail the neuroscience of the trauma response to convince her on scientific grounds that she is fine', -1,
        { r: 'Lecturing rarely shifts the fear', approach: 'Didactic persuasion', why: 'Validation plus tailored explanation works better', keys: ['emotional reasoning'], mistake: 'Substituting dense facts for engagement' }),
    ]),
    Q('q11', 'counseling', 'How should the counselor frame Rosa’s avoidance of driving early in treatment?', ['R3'], [
      O('a', 'Explain that avoidance eases fear briefly but can maintain symptoms, and plan a gradual, supported return to driving over time', 3,
        { r: 'Name avoidance as a maintaining factor', approach: 'Educate on avoidance and plan graded return', why: 'Avoidance can maintain trauma symptoms; graded return is the aim', keys: ['avoids driving', 'needs to drive for work'], mistake: 'Endorsing indefinite avoidance as coping' }),
      O('b', 'Reassure her that it is completely fine to avoid driving indefinitely for as long as she can find other ways to get around', -1,
        { r: 'Endorsing avoidance maintains symptoms', approach: 'Accommodate avoidance', why: 'It prevents the corrective learning of a graded return', keys: ['avoidance trap'], mistake: 'Reinforcing the maintaining behavior' }),
      O('c', 'Insist that she immediately drive on the same stretch of highway where the crash occurred to confront the fear head-on right now', -2,
        { r: 'Premature flooding can backfire', approach: 'Flooding framing', why: 'A return to driving should be graded and prepared', keys: ['no stabilization yet'], mistake: 'Skipping graded, prepared exposure' }),
      O('d', 'Tell her the avoidance is not really a clinical concern and that it will most likely fade away on its own given enough time', -1,
        { r: 'Avoidance often persists untreated', approach: 'Wait-it-out framing', why: 'Untreated avoidance can entrench and raise PTSD risk', keys: ['persistent avoidance'], mistake: 'Assuming spontaneous remission' }),
    ]),
    Q('q12', 'ethics', 'Rosa’s employer asks the counselor to confirm whether she is fit to return to driving for work. Best response?', ['R5'], [
      O('a', 'Decline to disclose without a valid release and clarify the limits of what a treating counselor can appropriately attest to', 3,
        { r: 'Protect confidentiality; clarify role limits', approach: 'Uphold confidentiality and role boundaries', why: 'Disclosure requires consent, and fitness-for-duty may exceed the treating role', keys: ['employer inquiry', 'no release'], mistake: 'Disclosing or issuing a fitness opinion without consent or competence' }),
      O('b', 'Tell the employer she is fully fit to return to driving right now so that she does not lose her job over the time off', -2,
        { r: 'Disclosing without consent breaches confidentiality', approach: 'Disclose to help', why: 'It discloses without consent and asserts a conclusion beyond the role', keys: ['no release'], mistake: 'Issuing an unconsented, out-of-role opinion' }),
      O('c', 'Share a general summary of her treatment so the employer can decide for themselves whether she is ready to come back', -2,
        { r: 'A general summary is still a disclosure', approach: 'Soft disclosure', why: 'Only a valid release permits disclosure', keys: ['confidentiality'], mistake: 'Leaking details under the guise of helping' }),
      O('d', 'Refuse to engage with the employer at all and hang up without explaining anything about confidentiality or the proper process', -1,
        { r: 'Abrupt refusal misses a teachable moment', approach: 'Flat refusal', why: 'The confidentiality rationale can be explained appropriately', keys: ['professional courtesy'], mistake: 'Being needlessly obstructive' }),
    ]),
    Q('q13', 'ethics', 'As graded driving exposure is planned, what does informed consent most importantly require here?', ['R5'], [
      O('a', 'Explaining the rationale, the temporary distress exposure can provoke, and that her participation remains voluntary', 3,
        { r: 'Disclose rationale, distress, and choice', approach: 'Obtain informed consent', why: 'Consent requires explaining the approach and its risks', keys: ['exposure planned', 'fears driving'], mistake: 'Starting exposure without informed consent' }),
      O('b', 'Assuring her in advance that the driving exercises will be completely comfortable and will never provoke any anxiety at all', -2,
        { r: 'Misrepresenting exposure is dishonest', approach: 'Downplay the method', why: 'Exposure deliberately provokes manageable anxiety', keys: ['accurate disclosure'], mistake: 'Misstating what the treatment involves' }),
      O('c', 'Having her agree up front that she will complete every driving exposure assigned no matter how distressing it turns out to be', -1,
        { r: 'Consent is voluntary and revocable', approach: 'Mandate completion', why: 'She retains the right to pause or decline', keys: ['voluntary participation'], mistake: 'Treating consent as a binding commitment' }),
      O('d', 'Waiting to explain the exposure plan until after the first driving exercise so that her anticipatory anxiety does not build up', -1,
        { r: 'Withholding the method violates consent', approach: 'Delay disclosure', why: 'Consent must precede the intervention', keys: ['informed choice'], mistake: 'Intervening before explaining' }),
    ]),
  ],
};

module.exports = { CASES: [D130, D131, D132, D133, D134] };
