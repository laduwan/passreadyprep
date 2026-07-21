// ============================================================================
// deep-cases-batch-16.js — NCMHCE deep cases, batch 16 (2022+ format)
// NCMHCE Prep Platform | GA Integrated Therapeutic Perspectives LLC
//
// Five exam-deep clinical simulations (13 items each, sections [5,4,4]). The
// diagnosis/clinical focus is GIVEN; items test clinical decision-making across
// the three derived sections (Assessment -> Planning -> Process). On the
// reserved id block ncmhce-D180+, adding distinct diagnoses not yet covered by
// any deep case (checked vs all deep-format cases + the exemplar):
//   ncmhce-D180  Dependent Personality Disorder (Personality)
//   ncmhce-D181  Hypersomnolence Disorder (Sleep)
//   ncmhce-D182  Erectile Disorder (Sexual-Gender)
//   ncmhce-D183  Adjustment Disorder, with Depressed Mood (Trauma)
//   ncmhce-D184  Mild Neurocognitive Disorder (Neurocognitive)
//
// Authored to NCMHCE_DeepCase_Generation_Spec.md. Passes caseSchema
// (strictItemQuality) AND examDepth with zero errors / zero warnings.
// Auto-discovered by import-deep-cases.js (deep-cases-batch-*.js).
//
// Validate:
//   node tools/cases/validateCases.js tools/cases/deep-cases-batch-16.js
//   node -e "const{validateExamDepthSet}=require('./tools/cases/examDepth');const{CASES}=require('./tools/cases/deep-cases-batch-16');console.log(validateExamDepthSet(CASES))"
//
// Standalone deliverable for SME review. Do NOT auto-import — importing into the
// live DB is a separate, human-run step.
// ============================================================================

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
// D180 — Dependent Personality Disorder (F60.7) — Personality — hard
// ============================================================================
const D180 = {
  id: 'ncmhce-D180',
  title: 'Pervasive need to be cared for and fear of separation',
  category: 'Personality',
  difficulty: 'hard',
  primaryDiagnosis: { name: 'Dependent Personality Disorder', code: 'F60.7' },
  diagnosis: { name: 'Dependent Personality Disorder', code: 'F60.7' },
  differentialOptions: [
    { id: 'do1', name: 'Dependent Personality Disorder', isCorrect: true },
    { id: 'do2', name: 'Borderline Personality Disorder', isCorrect: false },
    { id: 'do3', name: 'Avoidant Personality Disorder', isCorrect: false },
    { id: 'do4', name: 'Separation Anxiety Disorder', isCorrect: false },
  ],
  narrative: {
    intake:
      'Grace Bello, a 33-year-old administrative assistant, presents after a breakup left her feeling unable to cope alone. She describes a ' +
      'lifelong pattern of needing others to take responsibility for major decisions, difficulty initiating projects, and urgently seeking a new relationship.',
    session1:
      'Her difficulties reflect a pervasive, excessive need to be cared for that leads to submissive and clinging behavior and fears of separation, ' +
      'present since early adulthood across relationships. Her sense of self is not marked by the identity disturbance or impulsivity seen in borderline patterns.',
    session2:
      'She goes to excessive lengths to obtain support, agrees with others even when she disagrees, and feels helpless when alone. She wants ' +
      'connection and is not primarily avoidant out of fear of criticism, and at a low point she felt life was not worth living, without plan or intent.',
  },
  diagnosticRationale:
    'A pervasive and excessive need to be taken care of that leads to submissive and clinging behavior and fears of separation, beginning by ' +
    'early adulthood—difficulty making decisions without reassurance, needing others to assume responsibility, and urgently seeking relationships—' +
    'meets DSM-5-TR criteria for dependent personality disorder, distinct from borderline PD, avoidant PD, and separation anxiety disorder.',
  references: [
    { id: 'R1', source: 'DSM-5-TR', detail: 'Dependent PD: pervasive excessive need to be cared for with submissive, clinging behavior and separation fears, by early adulthood' },
    { id: 'R2', source: 'Corey (Theory & Practice)', detail: 'Approach selection, the working alliance, and fostering autonomy in personality-focused work' },
    { id: 'R3', source: 'C-SSRS', detail: 'Structured suicide-risk screening when loss and hopelessness co-occur' },
    { id: 'R4', source: 'ACA Code of Ethics', detail: 'A.1. and C.2.: client welfare, autonomy, avoiding fostering dependence, and competence' },
    { id: 'R5', source: 'NBCC Content Outline', detail: 'Clinical decision-making and measurement-based care across the counseling process' },
  ],
  questions: [
    Q('q1', 'intake', 'What is most important to establish to support a dependent personality disorder diagnosis?', ['R1'], [
      O('a', 'A pervasive, early-adulthood pattern of an excessive need to be cared for with submissive, clinging behavior', 3,
        { r: 'Pervasive early-onset dependence pattern', approach: 'Confirm the trait pattern', why: 'Dependent PD requires a pervasive, enduring pattern of excessive need to be cared for beginning by early adulthood', keys: ['needs others to make decisions', 'clinging and submissive'], mistake: 'Diagnosing from a single dependent reaction rather than a pervasive pattern' }),
      O('b', 'That she can pinpoint the single past event she is convinced first made her so dependent on the people around her', -1,
        { r: 'A precipitant is not the criterion', approach: 'Trigger framing', why: 'Etiology is not part of the criteria', keys: ['pattern-based diagnosis'], mistake: 'Using a trigger as the diagnostic test' }),
      O('c', 'That her need for reassurance has grown a little stronger over the past few days than it was the week before that', -1,
        { r: 'Recent change is not the criterion', approach: 'Recent-change framing', why: 'A pervasive, enduring pattern is required', keys: ['enduring pattern'], mistake: 'Confusing a brief change with the criteria' }),
      O('d', 'That she currently meets the full symptom count required for a discrete major depressive episode at this time', 0,
        { r: 'Depressive count does not define it', approach: 'Mood-criteria framing', why: 'Dependent PD is a personality pattern, not a mood episode', keys: ['personality pattern'], mistake: 'Applying depressive criteria here' }),
    ]),
    Q('q2', 'core', 'Which feature best differentiates her presentation from borderline personality disorder?', ['R1'], [
      O('a', 'Her pattern is submissive dependence without the identity disturbance and impulsivity that characterize borderline PD', 3,
        { r: 'Submissive dependence, not identity disturbance', approach: 'Contrast the core features', why: 'Borderline PD involves identity disturbance and impulsivity; hers is submissive dependence without those features', keys: ['stable but dependent self', 'no marked impulsivity'], mistake: 'Reading dependence as borderline instability' }),
      O('b', 'The fact that she becomes very distressed and fearful at the prospect of being left alone by the people close to her', -1,
        { r: 'Fear of abandonment can occur in both', approach: 'Abandonment framing', why: 'Fear of abandonment can occur in both; the core features differ', keys: ['shared feature'], mistake: 'Using abandonment fear to differentiate' }),
      O('c', 'The distress and the difficulty coping that she experiences after the recent breakup with her partner', -1,
        { r: 'Post-breakup distress is nonspecific', approach: 'Distress framing', why: 'Post-breakup distress occurs in both; the personality pattern differs', keys: ['shared distress'], mistake: 'Reading distress as decisive' }),
      O('d', 'The way her need for support tends to feel a little stronger during the busiest and most stressful weeks at her job', 0,
        { r: 'Stress reactivity is nonspecific', approach: 'Stress framing', why: 'Worsening under stress does not differentiate them', keys: ['nonspecific reactivity'], mistake: 'Using stress sensitivity to differentiate' }),
    ]),
    Q('q3', 'core', 'How does her presentation differ from avoidant personality disorder?', ['R1'], [
      O('a', 'She seeks out relationships and support rather than avoiding them out of fear of criticism and rejection', 3,
        { r: 'Seeks connection versus avoids it', approach: 'Contrast the relational stance', why: 'Avoidant PD involves avoiding relationships from fear of criticism; she actively seeks relationships and support', keys: ['urgently seeks a new relationship', 'not primarily avoidant'], mistake: 'Confusing dependent connection-seeking with avoidant withdrawal' }),
      O('b', 'The fact that she can feel quite insecure and anxious in her relationships with the people who are close to her', -1,
        { r: 'Insecurity can occur in both', approach: 'Insecurity framing', why: 'Relational insecurity can occur in both; the relational stance differs', keys: ['shared feature'], mistake: 'Using insecurity to differentiate' }),
      O('c', 'The low confidence and the self-doubt that she shows when she has to manage things on her own', -1,
        { r: 'Low self-confidence occurs in both', approach: 'Confidence framing', why: 'Low confidence occurs in both; the relational stance differs', keys: ['shared self-doubt'], mistake: 'Reading self-doubt as decisive' }),
      O('d', 'The way her worry tends to feel a little worse in the evenings than it does earlier during the daytime hours', 0,
        { r: 'Diurnal pattern is not diagnostic', approach: 'Time-of-day framing', why: 'Timing does not separate the two', keys: ['nonspecific timing'], mistake: 'Over-reading a circadian pattern' }),
    ]),
    Q('q4', 'core', 'How does her presentation differ from separation anxiety disorder?', ['R1'], [
      O('a', 'Her dependence is a pervasive adult personality pattern, not fear focused specifically on separation from attachment figures', 3,
        { r: 'Pervasive personality pattern versus separation-specific fear', approach: 'Contrast the breadth and nature', why: 'Separation anxiety centers on separation fear; her pattern is a pervasive dependent personality style across domains', keys: ['pervasive dependence', 'across relationships and decisions'], mistake: 'Reducing a pervasive personality pattern to separation anxiety' }),
      O('b', 'The fact that she becomes distressed and anxious at the thought of being separated from the people she depends on', -1,
        { r: 'Separation distress can occur in both', approach: 'Separation framing', why: 'Separation distress can occur in both; the breadth of the pattern differs', keys: ['shared feature'], mistake: 'Using separation distress to differentiate' }),
      O('c', 'The reassurance she looks for and the difficulty she has being on her own for very long', -1,
        { r: 'Reassurance-seeking is nonspecific', approach: 'Reassurance framing', why: 'Reassurance-seeking can occur in both; the pervasive pattern differs', keys: ['shared behavior'], mistake: 'Reading reassurance-seeking as decisive' }),
      O('d', 'The way her distress tends to ease a little on the weekends when her overall schedule is a good deal lighter', 0,
        { r: 'Schedule effects are nonspecific', approach: 'Schedule framing', why: 'A lighter schedule does not differentiate the two', keys: ['nonspecific factor'], mistake: 'Over-reading a schedule effect' }),
    ]),
    Q('q5', 'intake', 'Given her remark that life was not worth living, what is the most important step?', ['R3'], [
      O('a', 'Conduct a structured suicide-risk assessment of current ideation, intent, plan, and protective factors now', 3,
        { r: 'Structured suicide-risk assessment now', approach: 'Screen risk directly', why: 'A statement of hopelessness after a loss warrants structured assessment of current risk', keys: ['life not worth living', 'unable to cope after the breakup'], mistake: 'Failing to assess current suicide risk' }),
      O('b', 'Assume the risk has passed because she denies a current plan and frames the thought as tied only to the breakup', -2,
        { r: 'Assuming risk passed is unsafe', approach: 'Dismissal framing', why: 'Passive ideation still requires structured current assessment', keys: ['ongoing risk factors'], mistake: 'Dismissing risk on reassurance' }),
      O('c', 'Defer any risk assessment until she is in a new relationship and has been stable for several months at least', -2,
        { r: 'Deferring assessment is unsafe', approach: 'Delay framing', why: 'Risk is assessed now, not after a new relationship forms', keys: ['present risk'], mistake: 'Postponing an urgent assessment' }),
      O('d', 'Focus only on helping her find a new partner for now and return to any safety questions at a later date', -1,
        { r: 'Sequencing safety behind partner-finding is unsafe', approach: 'Single-issue framing', why: 'Finding a partner does not displace assessing current safety, and reinforces dependence', keys: ['safety first'], mistake: 'Sequencing safety behind other needs' }),
    ]),
    Q('q6', 'treatment', 'What is the most appropriate treatment framework for Grace?', ['R2'], [
      O('a', 'Psychotherapy that builds autonomy and decision-making skills within a supportive but non-fostering alliance', 3,
        { r: 'Autonomy-building psychotherapy', approach: 'Foster autonomy, not dependence', why: 'Dependent PD is addressed by building autonomy and decision-making within an alliance that does not foster dependence', keys: ['needs others to decide', 'difficulty initiating'], mistake: 'Building a plan that makes her dependent on the counselor' }),
      O('b', 'Making all of her important decisions for her in session so that she feels supported and relieved of the burden', -2,
        { r: 'Deciding for her fosters dependence', approach: 'Rescue framing', why: 'Making her decisions reinforces the very pattern being treated', keys: ['foster autonomy'], mistake: 'Fostering dependence rather than autonomy' }),
      O('c', 'Telling her personality cannot change and that she should simply find someone reliable to take care of her from now on', -2,
        { r: 'Therapeutic nihilism abandons the client', approach: 'Nihilism framing', why: 'Autonomy-building work can help; dismissing change abandons the client', keys: ['change is possible'], mistake: 'Foreclosing change' }),
      O('d', 'Starting her on a medication that you will select and adjust to reduce her dependence over the coming weeks yourself', -2,
        { r: 'Prescribing is outside counselor scope', approach: 'Prescribe medication', why: 'Counselors do not select or adjust medication', keys: ['no prescriptive authority'], mistake: 'Acting outside scope of practice' }),
    ]),
    Q('q7', 'treatment', 'How should the counselor handle her reliance on the counselor for decisions?', ['R2'], [
      O('a', 'Gradually encourage her to make and own decisions, using the alliance to build confidence in her own judgment', 3,
        { r: 'Graded ownership of decisions', approach: 'Transfer decision-making to her', why: 'Gradually shifting decision-making to her, with support, builds the autonomy that treats dependent PD', keys: ['seeks reassurance for decisions', 'agrees even when she disagrees'], mistake: 'Giving her the answers, which reinforces dependence' }),
      O('b', 'Answer all of her questions with the exact decisions she should make so that she never feels uncertain again', -2,
        { r: 'Giving all the answers fosters dependence', approach: 'Answer-everything framing', why: 'Providing all decisions reinforces the dependence being treated', keys: ['foster autonomy'], mistake: 'Reinforcing reliance on the counselor' }),
      O('c', 'Refuse to discuss any of her decisions at all so that she is forced to figure everything out entirely on her own', -1,
        { r: 'Abrupt withdrawal is not supportive', approach: 'Withhold framing', why: 'Graded, supported autonomy-building is better than abruptly withdrawing all support', keys: ['graded support'], mistake: 'Withdrawing support too abruptly' }),
      O('d', 'Encourage her to simply defer to her family for every decision so that she does not have to carry the burden alone', -2,
        { r: 'Redirecting dependence maintains it', approach: 'Redirect-dependence framing', why: 'Shifting dependence to family maintains the pattern rather than building autonomy', keys: ['build autonomy'], mistake: 'Relocating the dependence rather than reducing it' }),
    ]),
    Q('q8', 'treatment', 'How should progress be tracked in this personality-focused work?', ['R5'], [
      O('a', 'Track autonomy, decision-making, and functioning over time to guide a longer-term, autonomy-building course', 3,
        { r: 'Measurement-based tracking of autonomy and functioning', approach: 'Measure functioning over time', why: 'Tracking autonomy, decision-making, and functioning steers a longer-term, autonomy-building course', keys: ['difficulty initiating', 'seeks reassurance'], mistake: 'Proceeding without a way to gauge growth in autonomy' }),
      O('b', 'Rely only on whether she happens to remark in session that she feels a little more confident than before', -1,
        { r: 'Anecdote alone is insufficient', approach: 'Anecdotal framing', why: 'Systematic tracking is more reliable than passing impressions', keys: ['structured measurement'], mistake: 'Substituting anecdote for measurement' }),
      O('c', 'Track only how satisfied she is with the counseling relationship rather than her growth in autonomy and function', -1,
        { r: 'Satisfaction is not the outcome', approach: 'Satisfaction-only framing', why: 'Satisfaction matters but autonomy and function are the outcomes', keys: ['outcome focus'], mistake: 'Measuring the wrong variable' }),
      O('d', 'Wait until the very last session to decide whether anything has changed at all since the first appointment', -1,
        { r: 'End-only review misses steering data', approach: 'Delayed-review framing', why: 'Ongoing tracking is needed to steer a longer course', keys: ['continuous monitoring'], mistake: 'Deferring all measurement to the end' }),
    ]),
    Q('q9', 'treatment', 'How should the counselor handle her urgent wish to enter a new relationship immediately?', ['R2'], [
      O('a', 'Explore the urgency and support building self-reliance before rushing into a new dependent relationship', 3,
        { r: 'Explore urgency; build self-reliance first', approach: 'Address the driver, not just the wish', why: 'Exploring the urgency and building self-reliance addresses the pattern rather than feeding a new dependent bond', keys: ['urgently seeking a new relationship', 'feels helpless alone'], mistake: 'Encouraging her to quickly replace the relationship, which repeats the pattern' }),
      O('b', 'Encourage her to find a new partner as quickly as possible so that she does not have to be alone for long', -2,
        { r: 'Encouraging a quick replacement repeats the pattern', approach: 'Replace-the-partner framing', why: 'Rushing into a new dependent relationship reinforces the pattern', keys: ['build self-reliance'], mistake: 'Feeding the dependent pattern' }),
      O('c', 'Tell her she must never be in a relationship again until she is completely independent in every possible way', -1,
        { r: 'An absolute prohibition is not the goal', approach: 'Absolute-prohibition framing', why: 'The goal is healthier relating, not a blanket ban on relationships', keys: ['balanced goal'], mistake: 'Setting an extreme, unrealistic condition' }),
      O('d', 'Avoid the topic of relationships entirely so that the sessions never touch on anything that feels painful to her', -1,
        { r: 'Avoidance misses key material', approach: 'Avoidant framing', why: 'Her relational patterns are central to address, not avoid', keys: ['engage the pattern'], mistake: 'Sidestepping the central clinical issue' }),
    ]),
    Q('q10', 'counseling', 'Grace repeatedly asks the counselor to tell her what to do about a personal decision. The most therapeutic response is to:', ['R2'], [
      O('a', 'Empathize with her anxiety and support her in weighing options and reaching her own decision', 3,
        { r: 'Support her in deciding, do not decide for her', approach: 'Coach the decision process', why: 'Supporting her to weigh options and decide builds autonomy while validating her anxiety', keys: ['asks you to decide for her', 'seeks reassurance'], mistake: 'Giving her the decision, which reinforces dependence' }),
      O('b', 'Give her the specific decision she should make so that she feels relieved and reassured right away', -2,
        { r: 'Deciding for her fosters dependence', approach: 'Decide-for-her framing', why: 'Making the decision reinforces the dependent pattern', keys: ['build autonomy'], mistake: 'Reinforcing reliance on the counselor' }),
      O('c', 'Tell her she is being needy and that she simply has to learn to make decisions like an adult from now on', -1,
        { r: 'Shaming her ruptures the alliance', approach: 'Shame framing', why: 'Shaming her undermines the alliance and the autonomy work', keys: ['supportive coaching'], mistake: 'Shaming rather than coaching' }),
      O('d', 'Refuse to respond to the request at all and simply sit in silence until she decides entirely on her own', -1,
        { r: 'Withholding support is not the method', approach: 'Withhold framing', why: 'Supportive coaching, not withheld response, builds autonomy', keys: ['graded support'], mistake: 'Withdrawing support abruptly' }),
    ]),
    Q('q11', 'counseling', 'How can the counselor best support Grace’s growth over time?', ['R2'], [
      O('a', 'Anchor the work in goals she values, reinforce her successes at independence, and avoid fostering dependence', 3,
        { r: 'Values-linked goals and reinforced independence', approach: 'Build autonomy on her terms', why: 'Linking the work to her goals and reinforcing independent successes builds durable autonomy', keys: ['wants connection', 'difficulty being alone'], mistake: 'Becoming the person she depends on instead of building her independence' }),
      O('b', 'Encourage her to rely on you fully between sessions so that she always has someone to turn to for decisions', -2,
        { r: 'Encouraging reliance fosters dependence', approach: 'Foster-reliance framing', why: 'Encouraging full reliance on the counselor reinforces the pattern being treated', keys: ['foster autonomy'], mistake: 'Fostering dependence on the counselor' }),
      O('c', 'Focus the sessions mainly on cataloguing every time she felt unable to cope in exhaustive detail every week', -1,
        { r: 'Cataloguing struggles is not the work', approach: 'Catalogue framing', why: 'Listing struggles does not advance the autonomy-building goals', keys: ['goal focus'], mistake: 'Centering the work on cataloguing struggles' }),
      O('d', 'Tell her counseling cannot help her at all unless she first ends every relationship she currently has immediately', -1,
        { r: 'An extreme ultimatum is inappropriate', approach: 'Ultimatum framing', why: 'Demanding she end all relationships is neither indicated nor collaborative', keys: ['balanced goal'], mistake: 'Imposing an extreme condition' }),
    ]),
    Q('q12', 'ethics', 'Grace asks the counselor to also become her friend and help manage her life outside sessions. The most appropriate action is to:', ['R4'], [
      O('a', 'Maintain professional boundaries, explain the counseling role, and keep the work focused on building her autonomy', 3,
        { r: 'Maintain boundaries and the professional role', approach: 'Hold boundaries that support autonomy', why: 'Maintaining boundaries and the professional role protects the work and avoids fostering dependence', keys: ['asks you to be her friend', 'manage her life'], mistake: 'Blurring the professional boundary and deepening her dependence' }),
      O('b', 'Agree to become her friend and help run her life, since it would clearly make her feel more supported right now', -2,
        { r: 'A dual relationship fosters dependence and harms', approach: 'Dual-relationship framing', why: 'Becoming her friend and life-manager creates a harmful dual relationship and reinforces dependence', keys: ['professional boundaries'], mistake: 'Crossing a boundary that harms the work' }),
      O('c', 'Take over managing her finances and appointments yourself so that her life feels more organized and secure', -2,
        { r: 'Managing her life crosses boundaries', approach: 'Overreach framing', why: 'Running her life is outside the role and fosters dependence', keys: ['scope and autonomy'], mistake: 'Stepping outside the counseling role' }),
      O('d', 'Refuse to discuss the request at all and simply end the session whenever she raises it in the future', -1,
        { r: 'Refusing to discuss it is unhelpful', approach: 'Stonewall framing', why: 'The boundary is explained and held, not handled by shutting down the conversation', keys: ['explain the role'], mistake: 'Declining to address the request appropriately' }),
    ]),
    Q('q13', 'ethics', 'The counselor has limited training in personality disorders. The most ethical course of action is to:', ['R4'], [
      O('a', 'Seek consultation and training, and refer or coordinate for the components beyond your competence', 3,
        { r: 'Consult, train, or refer within competence', approach: 'Practice within competence', why: 'ACA C.2. requires competence; personality-focused work may need consultation, training, or referral', keys: ['limited personality-disorder training', 'complex case'], mistake: 'Managing a complex personality case alone without competence' }),
      O('b', 'Continue managing the case alone to preserve the continuity of the relationship built with her', -2,
        { r: 'Going it alone exceeds competence', approach: 'Continuity-over-competence', why: 'Continuity does not justify exceeding competence', keys: ['competence exceeded'], mistake: 'Prioritizing continuity over competence' }),
      O('c', 'Tell her her difficulties are not serious enough to need specialized help and continue with general talks only', -2,
        { r: 'Minimizing the problem fails the client', approach: 'Downplay framing', why: 'A complex presentation with risk warrants competent care', keys: ['complex case'], mistake: 'Underestimating the need for specialized care' }),
      O('d', 'Transfer her at once to another provider with no explanation, consultation, or coordinated plan for the transition', -1,
        { r: 'Abrupt transfer mishandles continuity', approach: 'Uncoordinated handoff', why: 'Transitions must be coordinated to avoid abandonment', keys: ['no transition plan'], mistake: 'Dropping the client without coordination' }),
    ]),
  ],
};

// ============================================================================
// D181 — Hypersomnolence Disorder (F51.11) — Sleep — medium
// ============================================================================
const D181 = {
  id: 'ncmhce-D181',
  title: 'Excessive sleepiness despite adequate nighttime sleep',
  category: 'Sleep',
  difficulty: 'medium',
  primaryDiagnosis: { name: 'Hypersomnolence Disorder', code: 'F51.11' },
  diagnosis: { name: 'Hypersomnolence Disorder', code: 'F51.11' },
  differentialOptions: [
    { id: 'do1', name: 'Hypersomnolence Disorder', isCorrect: true },
    { id: 'do2', name: 'Narcolepsy', isCorrect: false },
    { id: 'do3', name: 'Major Depressive Disorder', isCorrect: false },
    { id: 'do4', name: 'Insomnia Disorder', isCorrect: false },
  ],
  narrative: {
    intake:
      'Tobias Klein, a 25-year-old warehouse clerk, seeks help for excessive daytime sleepiness. Despite sleeping nine or more hours at night he ' +
      'feels unrefreshed, takes long unintended naps that do not relieve the sleepiness, and struggles to stay alert at work and while driving.',
    session1:
      'His sleepiness occurs despite a main sleep period of at least seven hours, several times a week for months, and is not explained by another ' +
      'sleep disorder. He does not have cataplexy or the sudden sleep attacks and REM intrusions that would point toward narcolepsy.',
    session2:
      'He finds it very hard to wake fully and feels groggy for a long time on waking, and the sleepiness is causing problems at work and safety ' +
      'concerns when driving. He denies that low mood is the primary driver and wants to feel alert and functional during the day again.',
  },
  diagnosticRationale:
    'Self-reported excessive sleepiness despite a main sleep period of at least seven hours, with recurrent lapses into sleep, prolonged ' +
    'nonrestorative sleep, and difficulty being fully awake, occurring at least three times weekly for months and not better explained by another ' +
    'condition, meets DSM-5-TR criteria for hypersomnolence disorder, distinct from narcolepsy, depression, and insomnia disorder.',
  references: [
    { id: 'R1', source: 'DSM-5-TR', detail: 'Hypersomnolence disorder: excessive sleepiness despite 7+ hours main sleep; nonrestorative sleep; 3+/week for months' },
    { id: 'R2', source: 'NICE guidelines', detail: 'Sleep disorders: coordinated medical evaluation, sleep-wake scheduling, and behavioral strategies' },
    { id: 'R3', source: 'C-SSRS', detail: 'Structured suicide-risk screening when impairment and low mood co-occur' },
    { id: 'R4', source: 'ACA Code of Ethics', detail: 'A.1., B.2., and C.2.: client welfare, safety, coordination of care, and competence' },
    { id: 'R5', source: 'Corey (Theory & Practice)', detail: 'Working alliance, collaborative goal setting, and the counseling process' },
  ],
  questions: [
    Q('q1', 'intake', 'What is most important to confirm to support a hypersomnolence disorder diagnosis?', ['R1'], [
      O('a', 'Excessive sleepiness despite at least seven hours of main sleep, occurring several times weekly for months', 3,
        { r: 'Sleepiness despite adequate sleep, recurrent', approach: 'Confirm the core criteria', why: 'Hypersomnolence disorder requires excessive sleepiness despite adequate main sleep, recurring for months', keys: ['sleeps nine hours yet unrefreshed', 'long unrefreshing naps'], mistake: 'Diagnosing without confirming the sleepiness despite adequate sleep and its frequency' }),
      O('b', 'That he can pinpoint the single event he is convinced first caused all of his current problems with sleepiness', -1,
        { r: 'A precipitant is not the criterion', approach: 'Trigger framing', why: 'Etiology is not part of the criteria', keys: ['criteria-based diagnosis'], mistake: 'Using a trigger as the diagnostic test' }),
      O('c', 'That his sleepiness has grown a little worse over the past few days than it was the week just before that', -1,
        { r: 'Recent change is not the criterion', approach: 'Recent-change framing', why: 'The established pattern, not a recent uptick, defines it', keys: ['established pattern'], mistake: 'Confusing a brief change with the criteria' }),
      O('d', 'That he currently meets the full symptom count required for a discrete major depressive episode at this time', 0,
        { r: 'Depressive count does not define it', approach: 'Mood-criteria framing', why: 'Hypersomnolence disorder is a sleep-wake disorder, not a mood episode', keys: ['sleep-focused diagnosis'], mistake: 'Applying depressive criteria here' }),
    ]),
    Q('q2', 'core', 'Which feature best differentiates his presentation from narcolepsy?', ['R1'], [
      O('a', 'He lacks cataplexy and the sudden sleep attacks and REM intrusions that characterize narcolepsy', 3,
        { r: 'No cataplexy or sleep-attack/REM features', approach: 'Contrast the narcolepsy features', why: 'Narcolepsy involves cataplexy and sudden REM-related sleep attacks that he does not have', keys: ['no cataplexy', 'no sudden sleep attacks'], mistake: 'Reading chronic sleepiness as narcolepsy without its defining features' }),
      O('b', 'The fact that he experiences excessive daytime sleepiness that interferes with his daily activities and his work', -1,
        { r: 'Daytime sleepiness occurs in both', approach: 'Sleepiness framing', why: 'Daytime sleepiness occurs in both; the narcolepsy features differ', keys: ['shared feature'], mistake: 'Using sleepiness to differentiate' }),
      O('c', 'The naps he takes during the day and the difficulty he has staying alert through his shift', -1,
        { r: 'Napping is nonspecific', approach: 'Nap framing', why: 'Daytime napping occurs in both; the refreshing quality and REM features differ', keys: ['shared behavior'], mistake: 'Reading napping as decisive' }),
      O('d', 'The way his sleepiness tends to feel a little worse during the busiest and most monotonous parts of his shift', 0,
        { r: 'Situational effects are nonspecific', approach: 'Situation framing', why: 'Worse sleepiness in monotony does not differentiate them', keys: ['nonspecific factor'], mistake: 'Over-reading a situational effect' }),
    ]),
    Q('q3', 'core', 'How does his presentation differ from major depressive disorder?', ['R1'], [
      O('a', 'His sleepiness is the primary problem and he denies low mood as the driver, unlike depression-related hypersomnia', 3,
        { r: 'Primary sleepiness, not mood-driven', approach: 'Contrast the primary driver', why: 'Depression-related hypersomnia is driven by a mood episode; his sleepiness is the primary problem without a mood driver', keys: ['denies low mood as the driver', 'sleepiness is the main issue'], mistake: 'Assuming excessive sleep always reflects depression' }),
      O('b', 'The fact that he feels tired and low on energy and that this is affecting his day-to-day functioning', -1,
        { r: 'Fatigue is nonspecific', approach: 'Fatigue framing', why: 'Fatigue can occur in both; the primary driver differs', keys: ['shared feature'], mistake: 'Using fatigue to differentiate' }),
      O('c', 'The difficulty he has getting going in the morning and staying productive during his day', -1,
        { r: 'Reduced productivity is nonspecific', approach: 'Productivity framing', why: 'Reduced productivity occurs in both; the driver differs', keys: ['shared difficulty'], mistake: 'Reading reduced productivity as decisive' }),
      O('d', 'The way his sleepiness tends to feel a little worse on the days after a poor night of sleep', 0,
        { r: 'Sleep-loss effects are nonspecific', approach: 'Sleep framing', why: 'Worse sleepiness after poor sleep does not differentiate them', keys: ['nonspecific factor'], mistake: 'Over-reading a sleep-loss effect' }),
    ]),
    Q('q4', 'core', 'How does his presentation differ from insomnia disorder?', ['R1'], [
      O('a', 'He sleeps a long time and is excessively sleepy, rather than having difficulty falling or staying asleep', 3,
        { r: 'Excessive sleep versus difficulty sleeping', approach: 'Contrast the sleep complaint', why: 'Insomnia involves trouble falling or staying asleep; he sleeps a long time yet remains excessively sleepy', keys: ['sleeps nine hours', 'excessive daytime sleepiness'], mistake: 'Conflating excessive sleepiness with insomnia' }),
      O('b', 'The fact that his sleep does not leave him feeling rested and that his daytime functioning is clearly affected', -1,
        { r: 'Nonrestorative sleep occurs in both', approach: 'Rest framing', why: 'Unrefreshing sleep and daytime impact can occur in both; the sleep complaint differs', keys: ['shared feature'], mistake: 'Using nonrestorative sleep to differentiate' }),
      O('c', 'The trouble he has functioning during the day because of problems related to his sleep', -1,
        { r: 'Daytime impairment is nonspecific', approach: 'Impairment framing', why: 'Daytime impairment occurs in both; the sleep complaint differs', keys: ['shared impairment'], mistake: 'Reading daytime impairment as decisive' }),
      O('d', 'The way his sleep tends to be a little worse on the nights before an early shift than on his other nights', 0,
        { r: 'Schedule effects are nonspecific', approach: 'Schedule framing', why: 'Worse sleep before an early shift does not differentiate them', keys: ['nonspecific factor'], mistake: 'Over-reading a schedule effect' }),
    ]),
    Q('q5', 'intake', 'What is most important to coordinate given his presentation?', ['R2'], [
      O('a', 'Coordinate a medical and sleep evaluation to rule out other causes and confirm the diagnosis within a team', 3,
        { r: 'Coordinate medical and sleep evaluation', approach: 'Partner with medical and sleep care', why: 'Hypersomnolence requires coordinated medical and sleep evaluation to exclude other causes and confirm the diagnosis', keys: ['unrefreshing sleep', 'safety concerns driving'], mistake: 'Treating the sleepiness without coordinating the needed medical and sleep evaluation' }),
      O('b', 'Order a sleep study and lab work yourself so that you can personally evaluate his medical sleep status', -2,
        { r: 'Ordering tests exceeds counselor scope', approach: 'Order-test framing', why: 'Counselors coordinate but do not order sleep studies or labs', keys: ['scope limit'], mistake: 'Acting outside scope of practice' }),
      O('c', 'A previously undetected primary psychotic disorder that might better account for his daytime sleepiness', -1,
        { r: 'Psychosis is not indicated', approach: 'Psychosis framing', why: 'Nothing suggests a psychotic process', keys: ['intact reality testing'], mistake: 'Pursuing an unsupported rule-out' }),
      O('d', 'An emerging neurocognitive decline that could account for why he feels so groggy when he wakes up lately', 0,
        { r: 'Cognitive decline is improbable here', approach: 'Neurocognitive framing', why: 'His grogginess reflects a sleep-wake disorder, not decline', keys: ['sleep-focused'], mistake: 'Pursuing an improbable rule-out' }),
    ]),
    Q('q6', 'treatment', 'What is the most appropriate counselor role in his care?', ['R2'], [
      O('a', 'Support sleep-wake scheduling and behavioral strategies while coordinating the medical and sleep evaluation', 3,
        { r: 'Behavioral support plus medical coordination', approach: 'Define the counselor role', why: 'The counselor supports sleep-wake behavioral strategies and coordinates the medical and sleep evaluation', keys: ['excessive sleepiness', 'safety concerns'], mistake: 'Providing counseling in isolation from the needed medical and sleep evaluation' }),
      O('b', 'Advising him to simply push through the sleepiness with more caffeine and willpower and skip any medical workup', -2,
        { r: 'Skipping the workup is unsafe', approach: 'Push-through framing', why: 'Bypassing the medical evaluation and relying on willpower misses treatable causes and safety issues', keys: ['coordinate evaluation'], mistake: 'Dismissing the need for medical evaluation' }),
      O('c', 'Recommending he sleep even longer each night as the sole intervention without any evaluation or behavioral plan', -1,
        { r: 'More sleep alone is not the treatment', approach: 'More-sleep framing', why: 'He already sleeps long and remains sleepy; more sleep alone is not the answer', keys: ['evaluation and strategies'], mistake: 'Prescribing more sleep as the fix' }),
      O('d', 'Starting him on a stimulant medication that you will select and adjust to keep him awake over the coming weeks', -2,
        { r: 'Prescribing is outside counselor scope', approach: 'Prescribe medication', why: 'Counselors do not select or adjust medication', keys: ['no prescriptive authority'], mistake: 'Acting outside scope of practice' }),
    ]),
    Q('q7', 'treatment', 'What safety issue is most important to address in the plan?', ['R4'], [
      O('a', 'Address the driving-safety risk from his sleepiness, coordinating appropriate evaluation and precautions', 3,
        { r: 'Address driving safety', approach: 'Prioritize the safety risk', why: 'Excessive sleepiness while driving is a safety risk that must be addressed with appropriate evaluation and precautions', keys: ['struggles to stay alert while driving', 'safety concerns'], mistake: 'Overlooking the driving-safety risk his sleepiness creates' }),
      O('b', 'Tell him the driving risk is not a real concern and that he can simply keep driving as he always has', -2,
        { r: 'Dismissing the risk is unsafe', approach: 'Minimize framing', why: 'Driving while excessively sleepy is a genuine safety risk that should not be dismissed', keys: ['safety first'], mistake: 'Dismissing a real safety risk' }),
      O('c', 'Personally revoke his ability to drive on the spot without any evaluation or appropriate process at all', -1,
        { r: 'Unilateral revocation skips due process', approach: 'Unilateral framing', why: 'Driving decisions follow evaluation and applicable process, not a unilateral counselor decree', keys: ['proper channels'], mistake: 'Acting unilaterally without evaluation' }),
      O('d', 'Leave the driving question entirely to him and treat it as having nothing to do with the counseling at all', -1,
        { r: 'Ignoring the risk neglects safety', approach: 'Hands-off framing', why: 'The safety risk is addressed through coordination, not simply deferred', keys: ['coordinated safety'], mistake: 'Neglecting a safety issue in the plan' }),
    ]),
    Q('q8', 'treatment', 'How should progress be tracked over the course of treatment?', ['R5'], [
      O('a', 'Track sleepiness, sleep-wake patterns, daytime function, and safety over time to guide the plan', 3,
        { r: 'Measurement-based tracking of sleepiness and function', approach: 'Monitor the relevant outcomes', why: 'Tracking sleepiness, sleep-wake patterns, function, and safety steers the coordinated plan', keys: ['daytime sleepiness', 'work and driving impact'], mistake: 'Proceeding without tracking the relevant outcomes and safety' }),
      O('b', 'Rely only on whether he happens to mention in session that he feels a little more awake than he did before', -1,
        { r: 'Anecdote alone is insufficient', approach: 'Anecdotal framing', why: 'Systematic tracking is more reliable than passing impressions', keys: ['structured measurement'], mistake: 'Substituting anecdote for measurement' }),
      O('c', 'Track only the number of hours he sleeps at night and base every decision solely on that one figure', -1,
        { r: 'Sleep hours alone are too narrow', approach: 'Single-metric framing', why: 'Sleepiness, function, and safety all inform the plan, not nighttime hours alone', keys: ['multidimensional monitoring'], mistake: 'Reducing monitoring to one number' }),
      O('d', 'Wait until the end of treatment to review whether his sleepiness has changed at all since the first session', -1,
        { r: 'End-only review misses steering data', approach: 'Delayed-review framing', why: 'Ongoing tracking is needed to steer the work and catch safety issues', keys: ['continuous monitoring'], mistake: 'Deferring all measurement to the end' }),
    ]),
    Q('q9', 'treatment', 'How should the counselor coordinate with the sleep or medical provider?', ['R4'], [
      O('a', 'With his consent and a release, coordinate a shared plan with the sleep or medical provider', 3,
        { r: 'Coordinate with consent', approach: 'Coordinate within consent and scope', why: 'Coordinating with the sleep or medical provider requires his consent and a release', keys: ['medical and sleep evaluation', 'coordinated care'], mistake: 'Coordinating without consent, or working in isolation' }),
      O('b', 'Share his full clinical details with the providers right away, since coordinating his care is plainly in his interest', -2,
        { r: 'Coordinating without consent breaches confidentiality', approach: 'Assume-consent framing', why: 'A valid release is required before disclosure', keys: ['no release'], mistake: 'Disclosing before consent is documented' }),
      O('c', 'Avoid contacting the sleep or medical provider at all so that the counseling stays entirely separate from his care', -1,
        { r: 'No coordination undercuts care', approach: 'Siloed framing', why: 'Consented coordination is central here', keys: ['integrated care'], mistake: 'Refusing helpful, consented coordination' }),
      O('d', 'Release his complete record to every provider so they each hold the full picture of all of his treatment', -2,
        { r: 'Blanket sharing over-discloses', approach: 'Over-disclosure framing', why: 'Disclosure is consented and limited to what is needed', keys: ['minimum necessary'], mistake: 'Releasing more than is appropriate or consented' }),
    ]),
    Q('q10', 'counseling', 'Tobias says he feels lazy and worthless because he cannot stay awake. The most therapeutic response is to:', ['R5'], [
      O('a', 'Validate his frustration, correct the "lazy" self-blame with psychoeducation, and support his coping', 3,
        { r: 'Validate and correct the self-blame', approach: 'Reduce shame with accurate information', why: 'Validating his frustration and reframing the sleepiness as a treatable condition counters the "lazy" self-blame', keys: ['feels lazy and worthless', 'excessive sleepiness'], mistake: 'Either agreeing he is lazy or dismissing his distress' }),
      O('b', 'Agree that he is probably just being lazy and that he simply needs to try harder to stay awake and productive', -2,
        { r: 'Endorsing the self-blame is harmful', approach: 'Laziness framing', why: 'Calling him lazy reinforces shame and ignores the disorder', keys: ['accurate framing'], mistake: 'Reinforcing an inaccurate, shaming self-view' }),
      O('c', 'Tell him he has no reason to feel bad and that he should simply put the whole thing out of his mind for now', -1,
        { r: 'Dismissing the feeling invalidates him', approach: 'Minimize framing', why: 'Telling him not to feel bad dismisses a valid feeling', keys: ['validate then support'], mistake: 'Minimizing a central feeling' }),
      O('d', 'Change the subject to something more positive so that he does not have to sit with the difficult feelings at all', -1,
        { r: 'Avoiding the feeling misses the work', approach: 'Avoidant framing', why: 'His feelings can be engaged and corrected, not avoided', keys: ['engage the feeling'], mistake: 'Sidestepping a meaningful moment' }),
    ]),
    Q('q11', 'counseling', 'How can the counselor best support Tobias’s engagement in the behavioral work?', ['R5'], [
      O('a', 'Collaborate on realistic sleep-wake and coping strategies tied to his goal of being alert and functional', 3,
        { r: 'Collaborative, goal-linked strategies', approach: 'Anchor the work in his goal', why: 'Collaborative sleep-wake and coping strategies tied to his own goal sustain engagement', keys: ['wants to be alert and functional', 'work and driving impact'], mistake: 'Prescribing strategies without connecting them to his goals' }),
      O('b', 'Insist he simply force himself to stay awake all day no matter what and treat any nap as a personal failure', -1,
        { r: 'Force-and-blame framing backfires', approach: 'Willpower framing', why: 'Framing naps as failure and relying on force ignores the disorder and undermines engagement', keys: ['realistic strategies'], mistake: 'Setting up a blame-based approach' }),
      O('c', 'Focus the sessions mainly on cataloguing every nap he takes in exhaustive detail every single week', -1,
        { r: 'Cataloguing naps is not the work', approach: 'Catalogue framing', why: 'Exhaustive nap logging without strategy does not advance the work', keys: ['strategy focus'], mistake: 'Centering sessions on cataloguing naps' }),
      O('d', 'Tell him counseling cannot help him at all unless he first agrees to start a stimulant medication right away', -1,
        { r: 'Conditioning care is inappropriate', approach: 'Conditioning framing', why: 'Behavioral work proceeds alongside any coordinated medication decision', keys: ['engagement matters'], mistake: 'Making counseling contingent on medication' }),
    ]),
    Q('q12', 'ethics', 'Tobias asks the counselor to document that he is "fine to operate heavy machinery" for his job. The most appropriate action is to:', ['R4'], [
      O('a', 'Document only what the assessment supports and clarify that fitness for safety-sensitive work needs proper evaluation', 3,
        { r: 'Document only what is supported; defer safety clearance', approach: 'Limit statements to your competence and role', why: 'Safety-sensitive fitness requires proper medical evaluation, not a counselor’s unsupported clearance', keys: ['requests a safety clearance', 'sleepiness with safety risk'], mistake: 'Issuing a safety clearance the assessment does not support' }),
      O('b', 'Write the clearance exactly as he requests, since keeping the client satisfied is what matters most right now', -2,
        { r: 'An unsupported safety clearance is dangerous', approach: 'Please-the-client framing', why: 'Clearing him for machinery despite documented sleepiness risks harm and exceeds the role', keys: ['safety and competence'], mistake: 'Overstating a safety conclusion' }),
      O('c', 'Refuse to provide any documentation at all and decline to explain what could appropriately be documented for him', -1,
        { r: 'Flat refusal forecloses helpful options', approach: 'Stonewall framing', why: 'Accurate, role-appropriate documentation can be provided rather than refused outright', keys: ['appropriate documentation'], mistake: 'Declining without clarifying the appropriate options' }),
      O('d', 'Tell his employer directly that he is unsafe for the job without discussing it with him or obtaining consent first', -2,
        { r: 'Disclosing without consent breaches confidentiality', approach: 'Unilateral-disclosure framing', why: 'Contacting the employer without consent breaches confidentiality', keys: ['consent required'], mistake: 'Disclosing to the employer without consent' }),
    ]),
    Q('q13', 'ethics', 'The counselor has limited training in sleep disorders. The most ethical course of action is to:', ['R4'], [
      O('a', 'Seek consultation and coordinate medical and sleep evaluation, referring for components beyond your competence', 3,
        { r: 'Consult, coordinate, or refer within competence', approach: 'Practice within competence', why: 'ACA C.2. requires competence; sleep disorders need coordinated medical evaluation and appropriate referral', keys: ['limited sleep-disorder training', 'safety-relevant case'], mistake: 'Managing a sleep disorder with safety risk alone without competence' }),
      O('b', 'Continue managing the case alone to preserve the continuity of the relationship built with him', -2,
        { r: 'Going it alone exceeds competence', approach: 'Continuity-over-competence', why: 'Continuity does not justify exceeding competence', keys: ['competence exceeded'], mistake: 'Prioritizing continuity over competence' }),
      O('c', 'Tell him the sleepiness is not serious enough to need a medical evaluation and continue with general talks only', -2,
        { r: 'Minimizing the risk fails the client', approach: 'Downplay framing', why: 'Sleepiness with safety risk warrants competent, coordinated medical evaluation', keys: ['safety risk'], mistake: 'Underestimating the need for evaluation' }),
      O('d', 'Transfer him at once to another provider with no explanation, consultation, or coordinated plan for the transition', -1,
        { r: 'Abrupt transfer mishandles continuity', approach: 'Uncoordinated handoff', why: 'A coordinated referral, not an abrupt transfer, is appropriate', keys: ['coordinated transition'], mistake: 'Dropping the client without coordination' }),
    ]),
  ],
};

// ============================================================================
// D182 — Erectile Disorder (F52.21) — Sexual-Gender — medium
// ============================================================================
const D182 = {
  id: 'ncmhce-D182',
  title: 'Persistent erectile difficulty straining a relationship',
  category: 'Sexual-Gender',
  difficulty: 'medium',
  primaryDiagnosis: { name: 'Erectile Disorder', code: 'F52.21' },
  diagnosis: { name: 'Erectile Disorder', code: 'F52.21' },
  differentialOptions: [
    { id: 'do1', name: 'Erectile Disorder', isCorrect: true },
    { id: 'do2', name: 'Major Depressive Disorder', isCorrect: false },
    { id: 'do3', name: 'Generalized Anxiety Disorder', isCorrect: false },
    { id: 'do4', name: 'Substance/Medication-Induced Sexual Dysfunction', isCorrect: false },
  ],
  narrative: {
    intake:
      'Marcus Lee, a 44-year-old accountant, seeks help for about eight months of consistent difficulty obtaining and maintaining an erection ' +
      'during partnered sexual activity. The difficulty causes him significant distress and has strained his relationship with his partner.',
    session1:
      'The problem occurs on most occasions and has persisted well beyond the six-month threshold, causing clinically significant distress. It is ' +
      'not fully explained by another mental disorder, and he denies that the difficulty is attributable to a substance or medication he is taking.',
    session2:
      'He describes performance anxiety and anticipatory worry that worsen the difficulty, and he denies that a primary depressive episode is the ' +
      'driver. A medical evaluation is underway, he is embarrassed but motivated, and he wants to restore intimacy and reduce the anxiety around sex.',
  },
  diagnosticRationale:
    'Persistent difficulty obtaining or maintaining an erection during partnered sexual activity on most occasions for at least six months, ' +
    'causing clinically significant distress and not better explained by another mental disorder, a substance, or a medication, meets DSM-5-TR ' +
    'criteria for erectile disorder, distinct from a primary depressive or anxiety disorder and a substance/medication-induced sexual dysfunction.',
  references: [
    { id: 'R1', source: 'DSM-5-TR', detail: 'Erectile disorder: difficulty obtaining/maintaining erection on most occasions for 6+ months with distress' },
    { id: 'R2', source: 'NICE guidelines', detail: 'Sexual dysfunction: medical evaluation plus psychological/psychosexual therapy within coordinated care' },
    { id: 'R3', source: 'C-SSRS', detail: 'Structured suicide-risk screening when distress and relationship strain co-occur' },
    { id: 'R4', source: 'ACA Code of Ethics', detail: 'A.1. and C.2.: client welfare, coordination of care, and practicing within competence' },
    { id: 'R5', source: 'Corey (Theory & Practice)', detail: 'Working alliance, collaborative goal setting, and culturally sensitive practice' },
    { id: 'R6', source: 'NBCC Content Outline', detail: 'Measurement-based care and clinical decision-making across the counseling process' },
  ],
  questions: [
    Q('q1', 'intake', 'What is most important to confirm to support an erectile disorder diagnosis?', ['R1'], [
      O('a', 'Difficulty obtaining or maintaining an erection on most occasions for at least six months, causing distress', 3,
        { r: 'Persistent difficulty over six months with distress', approach: 'Confirm the core criteria', why: 'Erectile disorder requires difficulty on most occasions for 6+ months with clinically significant distress', keys: ['eight months of difficulty', 'significant distress'], mistake: 'Diagnosing without confirming the persistence, frequency, and distress' }),
      O('b', 'That he can pinpoint the single event he is convinced first caused his difficulties with erections', -1,
        { r: 'A precipitant is not the criterion', approach: 'Trigger framing', why: 'Etiology is not part of the criteria', keys: ['criteria-based diagnosis'], mistake: 'Using a trigger as the diagnostic test' }),
      O('c', 'That his difficulty has grown a little worse over the past few days than it was the week just before that', -1,
        { r: 'Recent change is not the criterion', approach: 'Recent-change framing', why: 'The persistent pattern, not a recent uptick, defines it', keys: ['persistent pattern'], mistake: 'Confusing a brief change with the criteria' }),
      O('d', 'That he currently meets the full symptom count required for a discrete major depressive episode at this time', 0,
        { r: 'Depressive count does not define it', approach: 'Mood-criteria framing', why: 'Erectile disorder is a sexual dysfunction, not a mood episode', keys: ['sexual-function diagnosis'], mistake: 'Applying depressive criteria here' }),
    ]),
    Q('q2', 'core', 'Which feature best differentiates his presentation from a primary depressive disorder?', ['R1'], [
      O('a', 'The sexual difficulty is the primary problem and he denies a depressive episode as its driver', 3,
        { r: 'Primary sexual dysfunction, not mood-driven', approach: 'Contrast the primary driver', why: 'Depression-related sexual dysfunction is driven by a mood episode; his difficulty is the primary problem without a mood driver', keys: ['denies a depressive episode as the driver', 'sexual difficulty is the main issue'], mistake: 'Assuming sexual difficulty always reflects depression' }),
      O('b', 'The fact that he feels distressed and discouraged about the difficulties he has been having in his relationship', -1,
        { r: 'Distress is nonspecific', approach: 'Distress framing', why: 'Distress can occur in both; the primary driver differs', keys: ['shared feature'], mistake: 'Using distress to differentiate' }),
      O('c', 'The low confidence and the frustration that he feels about his performance during sexual activity', -1,
        { r: 'Low confidence is nonspecific', approach: 'Confidence framing', why: 'Low confidence occurs in both; the primary driver differs', keys: ['shared self-doubt'], mistake: 'Reading confidence as decisive' }),
      O('d', 'The way his difficulty tends to feel a little worse during the busiest and most stressful weeks at his job', 0,
        { r: 'Stress reactivity is nonspecific', approach: 'Stress framing', why: 'Worsening under stress does not differentiate them', keys: ['nonspecific reactivity'], mistake: 'Using stress sensitivity to differentiate' }),
    ]),
    Q('q3', 'core', 'How does his presentation differ from generalized anxiety disorder?', ['R1'], [
      O('a', 'His anxiety centers on sexual performance and the erectile difficulty, not free-floating worry across many life areas', 3,
        { r: 'Performance-focused, not multi-domain worry', approach: 'Contrast the focus of the anxiety', why: 'GAD involves worry across many domains; his anxiety is focused on sexual performance and the difficulty', keys: ['performance anxiety', 'anticipatory worry about sex'], mistake: 'Calling focused performance anxiety a generalized anxiety disorder' }),
      O('b', 'The fact that he feels anxious and worried and that this affects how he functions in some situations', -1,
        { r: 'Anxiety occurs in both', approach: 'Anxiety framing', why: 'Anxiety occurs in both; the focus differs', keys: ['shared feature'], mistake: 'Using anxiety to differentiate' }),
      O('c', 'The anticipatory worry that he experiences before situations that he finds stressful or difficult', -1,
        { r: 'Anticipatory worry is nonspecific', approach: 'Anticipation framing', why: 'Anticipatory worry occurs in both; the focus differs', keys: ['shared worry'], mistake: 'Reading anticipatory worry as decisive' }),
      O('d', 'The way his worry tends to ease a little on the weekends when his overall schedule is a good deal lighter', 0,
        { r: 'Schedule effects are nonspecific', approach: 'Schedule framing', why: 'A lighter schedule does not differentiate the two', keys: ['nonspecific factor'], mistake: 'Over-reading a schedule effect' }),
    ]),
    Q('q4', 'core', 'What is the most important thing to exclude before confirming the diagnosis?', ['R1'], [
      O('a', 'A substance-, medication-, or medical-cause for the difficulty, which the ongoing evaluation should help clarify', 3,
        { r: 'Exclude substance, medication, and medical causes', approach: 'Rule out organic and substance causes', why: 'Substances, medications, and medical conditions can cause erectile difficulty and must be excluded', keys: ['medical evaluation underway', 'denies a substance cause'], mistake: 'Skipping the substance, medication, and medical rule-out' }),
      O('b', 'A previously undetected specific phobia that might better account for his difficulty during sexual activity', -1,
        { r: 'Phobia does not explain the dysfunction', approach: 'Phobia framing', why: 'A phobia does not account for the erectile difficulty', keys: ['sexual-function picture'], mistake: 'Reducing the dysfunction to a phobia' }),
      O('c', 'A long-standing eating disorder that could be the single underlying cause of all of his sexual difficulties', -1,
        { r: 'Eating pathology is not indicated', approach: 'Eating-disorder framing', why: 'No eating concerns are reported', keys: ['no eating data'], mistake: 'Inventing an unsupported rule-out' }),
      O('d', 'An emerging neurodevelopmental disorder that could explain why the difficulty began in his forties', 0,
        { r: 'Neurodevelopmental framing is implausible', approach: 'Developmental framing', why: 'The adult-onset sexual difficulty fits erectile disorder', keys: ['adult onset'], mistake: 'Pursuing an improbable rule-out' }),
    ]),
    Q('q5', 'intake', 'What is most important to coordinate given his presentation?', ['R2'], [
      O('a', 'Coordinate with his medical provider so the physical evaluation and psychological care proceed together', 3,
        { r: 'Coordinate medical and psychological care', approach: 'Partner with medical care', why: 'Erectile disorder is managed with coordinated medical evaluation and psychological/psychosexual therapy', keys: ['medical evaluation underway', 'performance anxiety'], mistake: 'Providing psychological care in isolation from the medical evaluation' }),
      O('b', 'Recommend a specific erectile-dysfunction medication and dose for him to start yourself before his next appointment', -2,
        { r: 'Recommending a drug and dose exceeds scope', approach: 'Prescribe-by-proxy framing', why: 'Counselors do not recommend specific drugs or doses', keys: ['no prescriptive authority'], mistake: 'Making a prescribing recommendation' }),
      O('c', 'A previously undetected primary psychotic disorder that might better account for his sexual difficulty', -1,
        { r: 'Psychosis is not indicated', approach: 'Psychosis framing', why: 'Nothing suggests a psychotic process', keys: ['intact reality testing'], mistake: 'Pursuing an unsupported rule-out' }),
      O('d', 'An emerging neurocognitive decline that could account for why he has difficulty during sexual activity', 0,
        { r: 'Cognitive decline is improbable here', approach: 'Neurocognitive framing', why: 'The sexual-function pattern fits erectile disorder, not decline', keys: ['sexual-function focus'], mistake: 'Pursuing an improbable rule-out' }),
    ]),
    Q('q6', 'treatment', 'What is the most appropriate first-line approach for Marcus within counseling?', ['R2'], [
      O('a', 'Psychosexual therapy addressing performance anxiety and the couple’s intimacy, coordinated with medical care', 3,
        { r: 'Psychosexual therapy plus medical coordination', approach: 'Apply the guideline within scope', why: 'Erectile disorder is treated with psychosexual therapy addressing anxiety and intimacy, coordinated with medical care', keys: ['performance anxiety', 'relationship strain'], mistake: 'Offering only general talk without addressing the sexual anxiety and coordinating medical care' }),
      O('b', 'Telling him to simply try harder and not think about it, since the difficulty is entirely a matter of willpower', -2,
        { r: 'Willpower framing is inaccurate and shaming', approach: 'Willpower framing', why: 'Framing the difficulty as willpower ignores the anxiety cycle and the medical component', keys: ['performance-anxiety cycle'], mistake: 'Dismissing the disorder as willpower' }),
      O('c', 'Focusing only on his individual anxiety and excluding his partner and the intimacy from the plan entirely', -1,
        { r: 'Excluding the couple narrows the plan', approach: 'Individual-only framing', why: 'The couple’s intimacy is central to the plan, not just individual anxiety', keys: ['relationship focus'], mistake: 'Leaving the relational component out' }),
      O('d', 'Starting him on a medication that you will select and adjust over the coming weeks yourself', -2,
        { r: 'Prescribing is outside counselor scope', approach: 'Prescribe medication', why: 'Counselors do not select or adjust medication', keys: ['no prescriptive authority'], mistake: 'Acting outside scope of practice' }),
    ]),
    Q('q7', 'treatment', 'How should the counselor address his performance anxiety?', ['R5'], [
      O('a', 'Use anxiety-reduction and sensate-focus-style approaches that reduce performance pressure and rebuild intimacy', 3,
        { r: 'Reduce performance pressure and rebuild intimacy', approach: 'Target the anxiety cycle', why: 'Reducing performance pressure and rebuilding intimacy addresses the anxiety that maintains erectile difficulty', keys: ['performance anxiety', 'anticipatory worry'], mistake: 'Increasing the focus on performance, which worsens the anxiety' }),
      O('b', 'Encourage him to focus intensely on achieving an erection every time so that he proves to himself he still can', -2,
        { r: 'Increasing performance focus worsens it', approach: 'Performance-focus framing', why: 'Intensifying the focus on performance heightens the anxiety cycle', keys: ['reduce pressure'], mistake: 'Amplifying the performance pressure' }),
      O('c', 'Tell him to avoid all sexual activity indefinitely so that he never has to face the difficulty or the anxiety again', -1,
        { r: 'Endorsing avoidance maintains the problem', approach: 'Avoidance framing', why: 'Avoiding intimacy maintains the difficulty rather than treating it', keys: ['rebuild intimacy'], mistake: 'Reinforcing avoidance' }),
      O('d', 'Avoid discussing his anxiety about sex entirely so that the sessions never touch on anything uncomfortable', -1,
        { r: 'Avoiding the anxiety misses the work', approach: 'Avoidant framing', why: 'His performance anxiety is central to address, not avoid', keys: ['engage the anxiety'], mistake: 'Sidestepping the central issue' }),
    ]),
    Q('q8', 'treatment', 'How should progress be tracked over the course of treatment?', ['R6'], [
      O('a', 'Track sexual function, performance anxiety, relationship satisfaction, and distress over time to guide the plan', 3,
        { r: 'Measurement-based tracking of function and relationship', approach: 'Monitor the relevant outcomes', why: 'Tracking sexual function, anxiety, relationship satisfaction, and distress steers the plan', keys: ['relationship strain', 'performance anxiety'], mistake: 'Proceeding without tracking the relevant outcomes' }),
      O('b', 'Rely only on whether he happens to mention in session that things feel a little better than they did before', -1,
        { r: 'Anecdote alone is insufficient', approach: 'Anecdotal framing', why: 'Systematic tracking is more reliable than passing impressions', keys: ['structured measurement'], mistake: 'Substituting anecdote for measurement' }),
      O('c', 'Track only whether he achieves an erection each time and base every decision solely on that single outcome', -1,
        { r: 'A single performance metric is too narrow', approach: 'Single-metric framing', why: 'Anxiety, intimacy, and distress all inform the plan, not one performance outcome', keys: ['multidimensional monitoring'], mistake: 'Reducing monitoring to one outcome' }),
      O('d', 'Wait until the end of treatment to review whether his difficulty has changed at all since the first session', -1,
        { r: 'End-only review misses steering data', approach: 'Delayed-review framing', why: 'Ongoing tracking is needed to steer the work', keys: ['continuous monitoring'], mistake: 'Deferring all measurement to the end' }),
    ]),
    Q('q9', 'treatment', 'How should the counselor involve his partner in the work?', ['R4'], [
      O('a', 'With his consent, consider couple-based work on communication and intimacy with appropriate agreements', 3,
        { r: 'Couple work with consent and clear agreements', approach: 'Involve the partner appropriately', why: 'Partner-involved work on intimacy, with his consent and clear agreements, supports treatment of erectile disorder', keys: ['relationship strain', 'wants to restore intimacy'], mistake: 'Involving the partner without consent or role clarity' }),
      O('b', 'Bring his partner into every individual session right away without discussing it or obtaining his consent at all', -2,
        { r: 'Involving the partner without consent breaches confidentiality', approach: 'Assume-consent framing', why: 'The partner cannot be included without his informed consent', keys: ['no consent'], mistake: 'Disregarding consent and confidentiality' }),
      O('c', 'Tell him the relationship is not relevant and keep the work focused only on his individual performance anxiety', -1,
        { r: 'Excluding the relationship narrows the plan', approach: 'Individual-only framing', why: 'The couple’s intimacy is central to the plan, not just individual anxiety', keys: ['relational component'], mistake: 'Leaving the relationship out' }),
      O('d', 'Refuse any contact with the partner under all circumstances, even where he requests and consents to couple sessions', -1,
        { r: 'Blanket refusal ignores his wishes', approach: 'Absolute-refusal framing', why: 'Consented couple work can be appropriate when he chooses it', keys: ['client choice'], mistake: 'Ruling out a consented, indicated option' }),
    ]),
    Q('q10', 'counseling', 'Marcus is deeply embarrassed and reluctant to discuss the sexual difficulty. The most therapeutic response is to:', ['R5'], [
      O('a', 'Respond with a calm, nonjudgmental, and normalizing stance that makes it safe for him to talk about it', 3,
        { r: 'Calm, nonjudgmental, normalizing stance', approach: 'Create safety around a sensitive topic', why: 'A calm, normalizing, nonjudgmental stance makes it safe to discuss a sensitive, embarrassing difficulty', keys: ['embarrassed', 'reluctant to discuss'], mistake: 'Reacting awkwardly or pushing him to disclose before he feels safe' }),
      O('b', 'Tell him there is no reason to be embarrassed and quickly move past the topic so he does not feel uncomfortable', -1,
        { r: 'Rushing past it misses the work', approach: 'Minimize framing', why: 'Quickly moving past it can leave him feeling unheard; a safe, paced approach is better', keys: ['create safety'], mistake: 'Rushing past a sensitive topic' }),
      O('c', 'Joke about the difficulty to lighten the mood so that he does not take the whole thing quite so seriously', -2,
        { r: 'Joking is invalidating and unprofessional', approach: 'Humor-deflection framing', why: 'Making light of his difficulty is invalidating and can deepen shame', keys: ['respectful stance'], mistake: 'Undermining a sensitive disclosure with humor' }),
      O('d', 'Insist he describe every detail of his sexual difficulties immediately before the work can move forward at all', -1,
        { r: 'Demanding detail before safety is counterproductive', approach: 'Push-disclosure framing', why: 'Forcing detailed disclosure before he feels safe can heighten shame', keys: ['paced disclosure'], mistake: 'Demanding disclosure too fast' }),
    ]),
    Q('q11', 'counseling', 'How can the counselor best support Marcus’s engagement and hope?', ['R5'], [
      O('a', 'Frame the difficulty as common and treatable, anchor the work in his goals, and reinforce his motivation', 3,
        { r: 'Normalize, anchor in goals, reinforce motivation', approach: 'Instill hope and engage his goals', why: 'Framing the difficulty as common and treatable and tying the work to his goals sustains engagement and hope', keys: ['motivated', 'wants to restore intimacy'], mistake: 'Framing the difficulty as hopeless or shameful' }),
      O('b', 'Tell him that this kind of difficulty usually cannot be improved and that he should simply learn to live with it', -2,
        { r: 'Endorsing hopelessness is harmful', approach: 'Hopelessness framing', why: 'Implying it cannot improve undermines motivation and is inaccurate', keys: ['instill hope'], mistake: 'Communicating hopelessness' }),
      O('c', 'Focus the sessions mainly on detailing every past failed sexual encounter in exhaustive detail every week', -1,
        { r: 'Cataloguing failures is not the work', approach: 'Catalogue framing', why: 'Dwelling on failures heightens performance anxiety rather than advancing the goals', keys: ['goal focus'], mistake: 'Centering sessions on failures' }),
      O('d', 'Tell him counseling cannot help him at all unless he first starts an erectile-dysfunction medication right away', -1,
        { r: 'Conditioning care is inappropriate', approach: 'Conditioning framing', why: 'Psychological work proceeds alongside any coordinated medication decision', keys: ['engagement matters'], mistake: 'Making counseling contingent on medication' }),
    ]),
    Q('q12', 'ethics', 'Marcus asks the counselor to keep the diagnosis out of records his insurer could access. The most appropriate action is to:', ['R4'], [
      O('a', 'Clarify confidentiality and the limits of any release, sharing only what he consents to and what is needed', 3,
        { r: 'Honor consent and minimum-necessary disclosure', approach: 'Apply consent and minimum necessary', why: 'Disclosures to third parties are governed by his informed consent and minimum-necessary limits', keys: ['adult client', 'wants diagnosis withheld from insurer'], mistake: 'Disclosing more than he consents to or than is necessary' }),
      O('b', 'Send his full clinical record, including the diagnosis, to the insurer right away since they may need it anyway', -2,
        { r: 'Sending everything ignores consent', approach: 'Over-disclosure framing', why: 'Third-party disclosure requires consent and minimum-necessary limits', keys: ['minimum necessary'], mistake: 'Over-disclosing without consent' }),
      O('c', 'Falsify the record to remove the diagnosis entirely so that there is no chance the insurer could ever see it', -2,
        { r: 'Falsifying records is unethical', approach: 'Falsify framing', why: 'Altering the clinical record to hide a diagnosis violates professional honesty', keys: ['accurate records'], mistake: 'Falsifying documentation' }),
      O('d', 'Refuse to discuss the confidentiality question at all and simply change the subject whenever he raises it', -1,
        { r: 'Avoiding the issue is unhelpful', approach: 'Avoidant framing', why: 'Confidentiality should be explained, not avoided', keys: ['transparent limits'], mistake: 'Sidestepping a needed conversation' }),
    ]),
    Q('q13', 'ethics', 'The counselor has limited training in sexual dysfunctions. The most ethical course of action is to:', ['R4'], [
      O('a', 'Seek consultation and training, and coordinate or refer for the components beyond your competence', 3,
        { r: 'Consult, train, or refer within competence', approach: 'Practice within competence', why: 'ACA C.2. requires competence; psychosexual care may need consultation, training, or referral', keys: ['limited psychosexual training', 'coordinated medical case'], mistake: 'Providing specialized psychosexual care without the required competence' }),
      O('b', 'Continue managing the case alone to preserve the continuity of the relationship built with him', -2,
        { r: 'Going it alone exceeds competence', approach: 'Continuity-over-competence', why: 'Continuity does not justify exceeding competence', keys: ['competence exceeded'], mistake: 'Prioritizing continuity over competence' }),
      O('c', 'Tell him the difficulty is not serious enough to need specialized help and continue with general talks only', -2,
        { r: 'Minimizing the problem fails the client', approach: 'Downplay framing', why: 'A distressing sexual dysfunction warrants competent, coordinated care', keys: ['real distress'], mistake: 'Underestimating the need for specialized care' }),
      O('d', 'Transfer him at once to another provider with no explanation, consultation, or coordinated plan for the transition', -1,
        { r: 'Abrupt transfer mishandles continuity', approach: 'Uncoordinated handoff', why: 'A coordinated referral, not an abrupt transfer, is appropriate', keys: ['coordinated transition'], mistake: 'Dropping the client without coordination' }),
    ]),
  ],
};

// ============================================================================
// D183 — Adjustment Disorder, with Depressed Mood (F43.21) — Trauma — medium
// ============================================================================
const D183 = {
  id: 'ncmhce-D183',
  title: 'Low mood and tearfulness after a job loss, within months',
  category: 'Trauma',
  difficulty: 'medium',
  primaryDiagnosis: { name: 'Adjustment Disorder, with Depressed Mood', code: 'F43.21' },
  diagnosis: { name: 'Adjustment Disorder, with Depressed Mood', code: 'F43.21' },
  differentialOptions: [
    { id: 'do1', name: 'Adjustment Disorder, with Depressed Mood', isCorrect: true },
    { id: 'do2', name: 'Major Depressive Disorder', isCorrect: false },
    { id: 'do3', name: 'Persistent Depressive Disorder', isCorrect: false },
    { id: 'do4', name: 'Normal Grief/Stress Reaction', isCorrect: false },
  ],
  narrative: {
    intake:
      'Amara Okoro, a 39-year-old marketing manager, seeks help after an unexpected layoff two months ago. Since then she has felt persistently ' +
      'low, tearful, and hopeless about the future, and the symptoms clearly began within three months of the job loss and are tied to it.',
    session1:
      'Her low mood and distress are out of proportion to what might be expected and impair her functioning, yet she does not meet the full ' +
      'criteria for a major depressive episode. The disturbance is not simply an exacerbation of a preexisting disorder and is linked to the identifiable stressor.',
    session2:
      'She is sleeping and eating adequately and denies the full symptom picture of major depression, but the distress is real and disruptive. She ' +
      'has had passing thoughts that things feel pointless, without current plan or intent, and she wants help coping with the loss and moving forward.',
  },
  diagnosticRationale:
    'The development of clinically significant depressed mood in response to an identifiable stressor within three months of onset, out of ' +
    'proportion to the stressor and impairing, that does not meet criteria for another disorder and is not merely normal bereavement, meets ' +
    'DSM-5-TR criteria for adjustment disorder with depressed mood, distinct from major depressive disorder, persistent depressive disorder, and a normal reaction.',
  references: [
    { id: 'R1', source: 'DSM-5-TR', detail: 'Adjustment disorder: symptoms within 3 months of a stressor, out of proportion/impairing, not meeting another disorder' },
    { id: 'R2', source: 'NICE guidelines', detail: 'Stress-related conditions: problem-solving, supportive, and cognitive behavioral approaches within coordinated care' },
    { id: 'R3', source: 'C-SSRS', detail: 'Structured suicide-risk screening when depressed mood and hopelessness co-occur' },
    { id: 'R4', source: 'ACA Code of Ethics', detail: 'A.1. and C.2.: client welfare, coordination of care, and practicing within competence' },
    { id: 'R5', source: 'Corey (Theory & Practice)', detail: 'Working alliance, collaborative goal setting, and the counseling process' },
  ],
  questions: [
    Q('q1', 'intake', 'What is most important to confirm to support an adjustment disorder with depressed mood diagnosis?', ['R1'], [
      O('a', 'Depressed mood beginning within three months of an identifiable stressor, out of proportion and impairing', 3,
        { r: 'Depressed mood tied to a recent stressor, impairing', approach: 'Confirm the core criteria', why: 'Adjustment disorder requires symptoms within three months of a stressor that are out of proportion and impairing', keys: ['low mood since the layoff', 'symptoms tied to the stressor'], mistake: 'Diagnosing without confirming the stressor link, timing, and impairment' }),
      O('b', 'That she can pinpoint the single childhood event she is convinced first made her vulnerable to low mood', -1,
        { r: 'A remote precipitant is not the criterion', approach: 'Trigger framing', why: 'A remote factor is not the diagnostic test; the recent identifiable stressor is', keys: ['recent stressor link'], mistake: 'Using a remote trigger as the diagnostic test' }),
      O('c', 'That her mood has dipped a little further over the past few days than it had the week just before that', -1,
        { r: 'Recent change is not the criterion', approach: 'Recent-change framing', why: 'The stressor link and timing, not a recent dip, define it', keys: ['stressor timing'], mistake: 'Confusing a brief change with the criteria' }),
      O('d', 'That she currently meets the full symptom count required for a discrete manic episode at this point in time', 0,
        { r: 'Manic count does not define it', approach: 'Mania-criteria framing', why: 'Adjustment disorder with depressed mood is defined by the stressor-linked depressed mood, not mania', keys: ['depressed-mood presentation'], mistake: 'Applying manic criteria here' }),
    ]),
    Q('q2', 'core', 'Which feature best differentiates her presentation from major depressive disorder?', ['R1'], [
      O('a', 'She does not meet the full criteria for a major depressive episode, and the symptoms are tied to the recent stressor', 3,
        { r: 'Subthreshold and stressor-linked', approach: 'Contrast against the full episode', why: 'Major depression requires the full episode criteria; her stressor-linked symptoms are subthreshold', keys: ['does not meet full MDE criteria', 'sleeping and eating adequately'], mistake: 'Diagnosing major depression when the full criteria are not met' }),
      O('b', 'The fact that she has been feeling low and tearful and that this is clearly affecting her day-to-day functioning', -1,
        { r: 'Low mood occurs in both', approach: 'Mood framing', why: 'Low mood and impairment occur in both; the full-criteria threshold differs', keys: ['shared feature'], mistake: 'Using low mood to differentiate' }),
      O('c', 'The hopelessness she feels about the future and the distress that comes with it during this period', -1,
        { r: 'Hopelessness is nonspecific', approach: 'Hopelessness framing', why: 'Hopelessness occurs in both; the threshold and stressor link differ', keys: ['shared affect'], mistake: 'Reading hopelessness as decisive' }),
      O('d', 'The way her mood tends to dip a little more in the mornings than it does later during the day', 0,
        { r: 'Diurnal pattern is not diagnostic', approach: 'Time-of-day framing', why: 'Diurnal variation does not separate the two', keys: ['nonspecific timing'], mistake: 'Over-reading a circadian pattern' }),
    ]),
    Q('q3', 'core', 'How does her presentation differ from persistent depressive disorder?', ['R1'], [
      O('a', 'Her symptoms began recently in response to the layoff, not a chronic low mood lasting two or more years', 3,
        { r: 'Recent, stressor-linked versus chronic', approach: 'Contrast the duration and course', why: 'Persistent depressive disorder is chronic over years; hers began recently in response to the stressor', keys: ['began two months ago', 'tied to the layoff'], mistake: 'Reading a recent stressor-linked reaction as a chronic depressive disorder' }),
      O('b', 'The fact that she has been feeling down and discouraged and that it has affected how she has been functioning', -1,
        { r: 'Depressed mood occurs in both', approach: 'Mood framing', why: 'Depressed mood occurs in both; the duration and course differ', keys: ['shared feature'], mistake: 'Using depressed mood to differentiate' }),
      O('c', 'The low energy and the reduced motivation that she has noticed since the difficult event occurred', -1,
        { r: 'Low energy is nonspecific', approach: 'Energy framing', why: 'Low energy occurs in both; the duration differs', keys: ['shared symptom'], mistake: 'Reading low energy as decisive' }),
      O('d', 'The way her mood tends to feel a little worse on the days when she has had less sleep the night before', 0,
        { r: 'Sleep effects are nonspecific', approach: 'Sleep framing', why: 'Worse mood after poor sleep does not differentiate them', keys: ['nonspecific factor'], mistake: 'Over-reading a sleep effect' }),
    ]),
    Q('q4', 'core', 'How does her presentation differ from a normal reaction to the stressor?', ['R1'], [
      O('a', 'Her distress is out of proportion and impairs her functioning, beyond an expected reaction to the job loss', 3,
        { r: 'Out of proportion and impairing', approach: 'Contrast against an expected reaction', why: 'A normal reaction is proportionate and non-impairing; hers is out of proportion and impairs functioning', keys: ['out of proportion', 'impairs functioning'], mistake: 'Dismissing an impairing adjustment disorder as a normal reaction' }),
      O('b', 'The fact that she feels upset and low after experiencing a significant and unexpected loss in her life', -1,
        { r: 'Upset after a loss occurs in both', approach: 'Upset framing', why: 'Feeling upset after a loss occurs in both; the proportionality and impairment differ', keys: ['shared feature'], mistake: 'Using upset after a loss to differentiate' }),
      O('c', 'The sadness and the worry about the future that she has felt since the layoff happened to her', -1,
        { r: 'Sadness is nonspecific', approach: 'Sadness framing', why: 'Sadness occurs in both; the proportionality and impairment differ', keys: ['shared affect'], mistake: 'Reading sadness as decisive' }),
      O('d', 'The way her mood tends to ease a little on the weekends when her overall schedule is a good deal lighter', 0,
        { r: 'Schedule effects are nonspecific', approach: 'Schedule framing', why: 'A lighter schedule does not differentiate the two', keys: ['nonspecific factor'], mistake: 'Over-reading a schedule effect' }),
    ]),
    Q('q5', 'intake', 'Given her passing thoughts that things feel pointless, what is the most important step?', ['R3'], [
      O('a', 'Conduct a structured suicide-risk assessment of current ideation, intent, plan, and protective factors now', 3,
        { r: 'Structured suicide-risk assessment now', approach: 'Screen risk directly', why: 'Depressed mood with hopelessness warrants structured assessment of current risk regardless of the diagnostic label', keys: ['things feel pointless', 'hopeless about the future'], mistake: 'Failing to assess current suicide risk' }),
      O('b', 'Assume the risk is negligible because the diagnosis is an adjustment disorder rather than major depression', -2,
        { r: 'The label does not remove the need to assess', approach: 'Label-based dismissal', why: 'Risk is assessed on presentation, not assumed low because of a milder label', keys: ['assess regardless of label'], mistake: 'Dismissing risk based on the diagnosis' }),
      O('c', 'Defer any risk assessment until she has found a new job and has been stable for several months at least', -2,
        { r: 'Deferring assessment is unsafe', approach: 'Delay framing', why: 'Risk is assessed now, not after her situation improves', keys: ['present risk'], mistake: 'Postponing an urgent assessment' }),
      O('d', 'Focus only on her job search for now and plan to return to any safety questions at a much later date', -1,
        { r: 'Sequencing safety behind the job search is unsafe', approach: 'Single-issue framing', why: 'The job search does not displace assessing current safety', keys: ['safety first'], mistake: 'Sequencing safety behind other needs' }),
    ]),
    Q('q6', 'treatment', 'What is the most appropriate first-line treatment framework for Amara?', ['R2'], [
      O('a', 'Problem-solving and supportive cognitive behavioral counseling focused on coping with the stressor and its impact', 3,
        { r: 'Problem-solving and supportive CBT', approach: 'Apply the guideline', why: 'Adjustment disorder responds to problem-solving, supportive, and cognitive behavioral approaches focused on the stressor', keys: ['tied to the layoff', 'wants help coping and moving forward'], mistake: 'Treating it as major depression requiring a full depression protocol or defaulting to medication' }),
      O('b', 'Telling her the layoff is no big deal and that she should simply get over it and move on quickly on her own', -2,
        { r: 'Dismissing the stressor is invalidating', approach: 'Minimize framing', why: 'Dismissing the stressor invalidates her distress and undermines the alliance', keys: ['validate the distress'], mistake: 'Minimizing a genuine, impairing reaction' }),
      O('c', 'Long-term intensive therapy for a chronic depressive disorder she does not actually have at this time', -1,
        { r: 'Overtreating a subthreshold reaction is not indicated', approach: 'Overtreatment framing', why: 'Intensive chronic-disorder treatment does not fit a recent, stressor-linked adjustment disorder', keys: ['proportionate care'], mistake: 'Overtreating relative to the presentation' }),
      O('d', 'Starting her on an antidepressant medication that you will select and adjust over the coming weeks yourself', -2,
        { r: 'Prescribing is outside counselor scope', approach: 'Prescribe medication', why: 'Counselors do not select or adjust medication', keys: ['no prescriptive authority'], mistake: 'Acting outside scope of practice' }),
    ]),
    Q('q7', 'treatment', 'What should the counselor prioritize in the coping-focused work?', ['R2'], [
      O('a', 'Building coping and problem-solving skills for the job loss while monitoring for any progression of symptoms', 3,
        { r: 'Coping and problem-solving, monitor progression', approach: 'Target the stressor and watch the course', why: 'Building coping and problem-solving for the stressor, while monitoring for progression, fits adjustment disorder', keys: ['job loss', 'impairing distress'], mistake: 'Ignoring the possibility that symptoms could progress to a fuller disorder' }),
      O('b', 'Telling her to avoid thinking about the job loss entirely so that the distress simply fades on its own over time', -1,
        { r: 'Avoidance is not the coping strategy', approach: 'Avoidance framing', why: 'Active coping and problem-solving, not avoidance, address the stressor', keys: ['active coping'], mistake: 'Recommending avoidance' }),
      O('c', 'Focusing only on her past rather than the current stressor and the practical steps she can take now', -1,
        { r: 'Past-only focus misses the target', approach: 'Past-focus framing', why: 'The current stressor and present coping are the focus, not only the past', keys: ['present focus'], mistake: 'Missing the current stressor' }),
      O('d', 'Assuring her the symptoms will never worsen so that she does not have to think about them again at all', -1,
        { r: 'False reassurance forgoes monitoring', approach: 'Overpromise framing', why: 'Symptoms can progress; monitoring, not a guarantee, is appropriate', keys: ['monitor progression'], mistake: 'Guaranteeing an outcome and forgoing monitoring' }),
    ]),
    Q('q8', 'treatment', 'How should progress be tracked over the course of treatment?', ['R5'], [
      O('a', 'Track mood, coping, functioning, and any progression toward a fuller disorder over time to guide the plan', 3,
        { r: 'Measurement-based tracking of mood and course', approach: 'Monitor outcomes and progression', why: 'Tracking mood, coping, functioning, and progression steers the plan and catches worsening', keys: ['stressor-linked distress', 'watch for progression'], mistake: 'Proceeding without tracking mood and the course' }),
      O('b', 'Rely only on whether she happens to mention in session that she feels a little better than she did before', -1,
        { r: 'Anecdote alone is insufficient', approach: 'Anecdotal framing', why: 'Systematic tracking is more reliable than passing impressions', keys: ['structured measurement'], mistake: 'Substituting anecdote for measurement' }),
      O('c', 'Track only whether she has found a new job and base every treatment decision solely on her employment status', -1,
        { r: 'Employment status alone is too narrow', approach: 'Single-metric framing', why: 'Mood, coping, and functioning all inform the plan, not employment alone', keys: ['multidimensional monitoring'], mistake: 'Reducing monitoring to one factor' }),
      O('d', 'Wait until the end of treatment to review whether her mood has changed at all since the first session', -1,
        { r: 'End-only review misses steering data', approach: 'Delayed-review framing', why: 'Ongoing tracking is needed to steer the work and catch progression', keys: ['continuous monitoring'], mistake: 'Deferring all measurement to the end' }),
    ]),
    Q('q9', 'treatment', 'How should the counselor handle her questions about medication?', ['R4'], [
      O('a', 'Coordinate a referral to a prescriber if indicated while continuing the coping-focused counseling within scope', 3,
        { r: 'Refer for prescribing if indicated, keep doing therapy', approach: 'Coordinate within scope', why: 'Medication questions are referred to a prescriber while the counselor continues the coping-focused work', keys: ['asks about medication', 'scope limits'], mistake: 'Advising on specific medication outside scope' }),
      O('b', 'Recommend a specific antidepressant and dose for her to begin taking before her next job interview', -2,
        { r: 'Recommending a drug and dose exceeds scope', approach: 'Prescribe-by-proxy framing', why: 'Counselors do not recommend specific drugs or doses', keys: ['no prescriptive authority'], mistake: 'Making a prescribing recommendation' }),
      O('c', 'Tell her that medication is definitely necessary and that she must start it immediately regardless of her preference', -1,
        { r: 'Directing a medical decision overreaches', approach: 'Directive framing', why: 'The prescriber and client weigh medication; the counselor does not mandate it', keys: ['shared decision'], mistake: 'Directing a medical decision' }),
      O('d', 'Ignore the medication question and simply redirect her back to the coping work every time she raises it', -1,
        { r: 'Dismissing the question is unhelpful', approach: 'Avoidant framing', why: 'A referral, not avoidance, is the appropriate response', keys: ['coordinated care'], mistake: 'Failing to address a legitimate question' }),
    ]),
    Q('q10', 'counseling', 'Amara breaks down in session, saying she feels like a failure. The most therapeutic response is to:', ['R5'], [
      O('a', 'Respond with empathy, normalize the reaction to the loss, and gently challenge the "failure" self-judgment', 3,
        { r: 'Empathize, normalize, and reframe', approach: 'Validate and reframe the self-judgment', why: 'Empathy and normalizing the reaction, with gentle reframing of the failure judgment, supports her coping', keys: ['feels like a failure', 'after a layoff'], mistake: 'Either agreeing she is a failure or dismissing the feeling' }),
      O('b', 'Agree that the layoff does suggest she is a failure so that she faces the reality of her situation honestly', -2,
        { r: 'Endorsing the self-judgment is harmful', approach: 'Endorse-failure framing', why: 'Confirming a "failure" self-judgment deepens hopelessness', keys: ['reframe the judgment'], mistake: 'Validating a harmful self-belief' }),
      O('c', 'Tell her she should not feel that way and that there is really no reason at all for her to be so upset', -1,
        { r: 'Dismissing the feeling invalidates her', approach: 'Minimize framing', why: 'Telling her not to feel that way dismisses a valid emotion', keys: ['validate then reframe'], mistake: 'Minimizing a central feeling' }),
      O('d', 'Change the subject to a more practical topic so that she does not have to sit with the difficult feelings at all', -1,
        { r: 'Avoiding the feeling misses the work', approach: 'Avoidant framing', why: 'Her feelings can be engaged and reframed, not avoided', keys: ['engage the feeling'], mistake: 'Sidestepping a meaningful moment' }),
    ]),
    Q('q11', 'counseling', 'How can the counselor best support Amara’s coping and forward movement?', ['R5'], [
      O('a', 'Collaborate on practical coping and goal-directed steps tied to her wish to move forward, reinforcing her strengths', 3,
        { r: 'Collaborative, strengths-based, goal-directed coping', approach: 'Anchor the work in her goals and strengths', why: 'Collaborative coping and goal-directed steps tied to her strengths support recovery from the stressor', keys: ['wants to move forward', 'impairing distress'], mistake: 'Focusing only on the distress without building coping and forward steps' }),
      O('b', 'Tell her she just needs to stay positive and that everything will simply work itself out on its own in time', -1,
        { r: 'Empty reassurance is not coping work', approach: 'Reassurance framing', why: 'Generic positivity does not build the coping skills she needs', keys: ['active coping'], mistake: 'Substituting reassurance for coping work' }),
      O('c', 'Focus the sessions mainly on rehashing the details of the layoff in exhaustive detail every single week', -1,
        { r: 'Rehashing the stressor is not forward movement', approach: 'Rehash framing', why: 'Dwelling on the details without coping steps does not advance the goals', keys: ['forward focus'], mistake: 'Centering sessions on the stressor details' }),
      O('d', 'Tell her counseling cannot help her at all unless she first finds a new job on her own right away', -1,
        { r: 'Conditioning care is inappropriate', approach: 'Conditioning framing', why: 'Coping work proceeds regardless of her employment status', keys: ['engagement matters'], mistake: 'Making counseling contingent on finding a job' }),
    ]),
    Q('q12', 'ethics', 'Amara asks the counselor to write that her layoff "caused a serious mental illness" for a legal claim. The most appropriate action is to:', ['R4'], [
      O('a', 'Document only what the assessment supports and clarify what your role can and cannot appropriately attest to', 3,
        { r: 'Document only what is supported; clarify role', approach: 'Limit statements to your competence and role', why: 'The counselor documents only what is supported and avoids causal or forensic conclusions beyond the role', keys: ['requests a causal statement', 'legal claim'], mistake: 'Issuing an unsupported causal or forensic conclusion' }),
      O('b', 'Write the causal statement exactly as she requests, since keeping the client satisfied is what matters most', -2,
        { r: 'An unsupported causal claim is inappropriate', approach: 'Please-the-client framing', why: 'Attesting to a definitive cause and severity beyond the assessment exceeds the role', keys: ['accurate documentation'], mistake: 'Overstating a causal conclusion' }),
      O('c', 'Take her side in the legal claim and advocate for her position in any report that is requested of you', -2,
        { r: 'Advocacy compromises objectivity', approach: 'Advocacy framing', why: 'Aligning with a legal position compromises objectivity and the treating role', keys: ['role boundaries'], mistake: 'Becoming an advocate in a claim' }),
      O('d', 'Refuse to provide any documentation at all and decline to explain what could appropriately be documented for her', -1,
        { r: 'Flat refusal forecloses helpful options', approach: 'Stonewall framing', why: 'Accurate, role-appropriate documentation can be provided rather than refused outright', keys: ['appropriate documentation'], mistake: 'Declining without clarifying the appropriate options' }),
    ]),
    Q('q13', 'ethics', 'The counselor is unsure whether the presentation has progressed to major depression. The most ethical course of action is to:', ['R4'], [
      O('a', 'Reassess against the criteria, seek consultation as needed, and adjust the diagnosis and plan accordingly', 3,
        { r: 'Reassess and consult within competence', approach: 'Practice within competence', why: 'Diagnostic uncertainty and possible progression call for reassessment and consultation as needed', keys: ['subthreshold now', 'watch for progression'], mistake: 'Leaving the diagnosis fixed despite signs of progression' }),
      O('b', 'Keep the original diagnosis fixed forever and never revisit it regardless of any new information that emerges', -2,
        { r: 'Refusing to reassess is poor practice', approach: 'Fixed-diagnosis framing', why: 'Diagnoses are revisited as the picture evolves', keys: ['ongoing assessment'], mistake: 'Treating the diagnosis as immutable' }),
      O('c', 'Tell her the distinction does not matter at all and that there is no need to clarify which disorder she has', -2,
        { r: 'Dismissing the distinction misleads care', approach: 'Downplay framing', why: 'The distinction can change the plan and risk monitoring and does matter', keys: ['accurate diagnosis'], mistake: 'Minimizing a clinically meaningful distinction' }),
      O('d', 'Transfer her at once to another provider with no explanation, consultation, or coordinated plan for the transition', -1,
        { r: 'Abrupt transfer mishandles continuity', approach: 'Uncoordinated handoff', why: 'Transitions must be coordinated to avoid abandonment', keys: ['no transition plan'], mistake: 'Dropping the client without coordination' }),
    ]),
  ],
};

// ============================================================================
// D184 — Mild Neurocognitive Disorder (G31.84) — Neurocognitive — hard
// ============================================================================
const D184 = {
  id: 'ncmhce-D184',
  title: 'Modest cognitive decline that does not yet impair independence',
  category: 'Neurocognitive',
  difficulty: 'hard',
  primaryDiagnosis: { name: 'Mild Neurocognitive Disorder', code: 'G31.84' },
  diagnosis: { name: 'Mild Neurocognitive Disorder', code: 'G31.84' },
  differentialOptions: [
    { id: 'do1', name: 'Mild Neurocognitive Disorder', isCorrect: true },
    { id: 'do2', name: 'Major Neurocognitive Disorder', isCorrect: false },
    { id: 'do3', name: 'Major Depressive Disorder', isCorrect: false },
    { id: 'do4', name: 'Normal Aging', isCorrect: false },
  ],
  narrative: {
    intake:
      'Harold Weiss, a 68-year-old retired teacher, is brought by his wife for concerns about his memory. Over the past year he has had modest ' +
      'declines in memory and word-finding that he and his wife notice, and that are supported by testing, but he still manages his daily activities independently.',
    session1:
      'His decline is a modest step down from his prior level, documented by concern and testing, but it does not interfere with his independence ' +
      'in everyday activities, which distinguishes it from a major neurocognitive disorder. He compensates with extra effort and lists rather than losing independence.',
    session2:
      'He is worried about the future and what the changes might mean, and his wife is anxious too. His mood is reactive to these worries rather ' +
      'than a primary depressive episode, and he wants to understand what is happening and do what he can to stay sharp and independent.',
  },
  diagnosticRationale:
    'A modest cognitive decline from a previous level in one or more domains, based on concern and objective assessment, that does not interfere ' +
    'with independence in everyday activities meets DSM-5-TR criteria for mild neurocognitive disorder, distinct from major neurocognitive ' +
    'disorder with its loss of independence, a primary depressive disorder, and normal aging.',
  references: [
    { id: 'R1', source: 'DSM-5-TR', detail: 'Mild NCD: modest cognitive decline by concern and testing that does NOT interfere with independence' },
    { id: 'R2', source: 'NICE guidelines', detail: 'Cognitive concerns: coordinated medical evaluation, monitoring, and psychosocial and caregiver support' },
    { id: 'R3', source: 'C-SSRS', detail: 'Structured suicide-risk screening when worry and low mood co-occur' },
    { id: 'R4', source: 'ACA Code of Ethics', detail: 'A.1., B.2., and C.2.: client welfare, autonomy, decision-making, and competence' },
    { id: 'R5', source: 'Hays (Assessment)', detail: 'Coordinating cognitive and medical evaluation and interpreting the course of decline' },
  ],
  questions: [
    Q('q1', 'intake', 'What is most important to confirm to support a mild neurocognitive disorder diagnosis?', ['R1'], [
      O('a', 'A modest cognitive decline by concern and testing that does not interfere with independence in daily activities', 3,
        { r: 'Modest decline without loss of independence', approach: 'Confirm the core criteria', why: 'Mild NCD requires a modest decline by concern and testing that does not interfere with independence', keys: ['modest decline noticed and tested', 'still independent'], mistake: 'Diagnosing without confirming both the modest decline and the preserved independence' }),
      O('b', 'That his wife can pinpoint the single event she is convinced first caused all of his memory changes', -1,
        { r: 'A precipitant is not the criterion', approach: 'Trigger framing', why: 'Etiology is not part of the criteria', keys: ['criteria-based diagnosis'], mistake: 'Using a trigger as the diagnostic test' }),
      O('c', 'That his memory has slipped a little further over the past few days than it had the week just before that', -1,
        { r: 'Recent change is not the criterion', approach: 'Recent-change framing', why: 'The overall modest decline and preserved independence, not a recent dip, define it', keys: ['overall pattern'], mistake: 'Confusing a brief change with the criteria' }),
      O('d', 'That he currently meets the full symptom count required for a discrete major depressive episode at this time', 0,
        { r: 'Depressive count does not define it', approach: 'Mood-criteria framing', why: 'Mild NCD is defined by cognitive decline, not mood criteria', keys: ['cognitive-decline diagnosis'], mistake: 'Applying depressive criteria here' }),
    ]),
    Q('q2', 'core', 'Which feature best differentiates his presentation from a major neurocognitive disorder?', ['R1'], [
      O('a', 'He remains independent in his everyday activities, unlike the loss of independence that defines a major neurocognitive disorder', 3,
        { r: 'Preserved independence versus loss of it', approach: 'Contrast the level of impairment', why: 'A major NCD interferes with independence; his modest decline does not, which defines the mild level', keys: ['manages daily activities independently', 'compensates with lists'], mistake: 'Diagnosing a major NCD when independence is preserved' }),
      O('b', 'The fact that he has had a genuinely noticeable decline in both his memory and his word-finding over the course of the past year or so that he and his wife have both come to notice', -1,
        { r: 'Cognitive decline occurs in both', approach: 'Decline framing', why: 'Cognitive decline occurs in both; the level of impairment differs', keys: ['shared feature'], mistake: 'Using decline to differentiate' }),
      O('c', 'The worry and the concern that he and his wife feel about the changes in his thinking and memory', -1,
        { r: 'Worry is nonspecific', approach: 'Worry framing', why: 'Worry occurs in both; the impairment level differs', keys: ['shared affect'], mistake: 'Reading worry as decisive' }),
      O('d', 'The way his memory seems a little sharper on the days when he has slept well the night before', 0,
        { r: 'Sleep effects are nonspecific', approach: 'Sleep framing', why: 'Better memory after good sleep does not differentiate them', keys: ['nonspecific factor'], mistake: 'Over-reading a sleep effect' }),
    ]),
    Q('q3', 'core', 'How does his presentation differ from a primary depressive disorder?', ['R1'], [
      O('a', 'His cognitive decline is documented by testing and not merely mood-driven slowing that would lift as mood improves', 3,
        { r: 'Objective decline versus mood-driven slowing', approach: 'Contrast documented decline with depressive slowing', why: 'Depression can slow cognition reversibly; his decline is documented by testing and his mood is reactive, not primary', keys: ['decline supported by testing', 'mood reactive to the worries'], mistake: 'Attributing a documented cognitive decline entirely to depression' }),
      O('b', 'The fact that he has been feeling worried and a bit low about the changes he has been experiencing', -1,
        { r: 'Low mood is nonspecific', approach: 'Mood framing', why: 'Low mood can accompany both; the documented decline differs', keys: ['shared feature'], mistake: 'Using low mood to differentiate' }),
      O('c', 'The trouble he has with his memory and word-finding that he notices during his day-to-day life', -1,
        { r: 'Cognitive complaints occur in both', approach: 'Cognition framing', why: 'Cognitive complaints occur in both; the objective decline differs', keys: ['shared complaint'], mistake: 'Reading cognitive complaints as decisive' }),
      O('d', 'The way his mood tends to dip a little more in the evenings than it does earlier during the daytime hours', 0,
        { r: 'Diurnal pattern is not diagnostic', approach: 'Time-of-day framing', why: 'Timing does not separate the two', keys: ['nonspecific timing'], mistake: 'Over-reading a circadian pattern' }),
    ]),
    Q('q4', 'core', 'How does his presentation differ from normal aging?', ['R1'], [
      O('a', 'His decline is a documented step below his prior level and expected norms, beyond ordinary age-related change', 3,
        { r: 'Documented decline below norms versus normal aging', approach: 'Contrast against expected aging', why: 'Normal aging is within expected norms; his decline is a documented step below his prior level and norms', keys: ['modest decline documented by testing', 'noticed by him and his wife'], mistake: 'Dismissing a documented decline as ordinary aging' }),
      O('b', 'The fact that he occasionally forgets things and takes a little longer to find the words he wants to use', -1,
        { r: 'Occasional lapses occur in both', approach: 'Lapse framing', why: 'Occasional lapses occur in both; the documented decline differs', keys: ['shared feature'], mistake: 'Using occasional lapses to differentiate' }),
      O('c', 'The extra effort and the strategies that he uses to keep up with his usual day-to-day tasks', -1,
        { r: 'Compensation can occur in both', approach: 'Compensation framing', why: 'Some compensation can occur in both; the documented decline differs', keys: ['shared strategy'], mistake: 'Reading compensation as decisive' }),
      O('d', 'The way his recall seems a little worse on the days when he is more tired than on his more rested days', 0,
        { r: 'Fatigue effects are nonspecific', approach: 'Fatigue framing', why: 'Worse recall when tired does not differentiate them', keys: ['nonspecific factor'], mistake: 'Over-reading a fatigue effect' }),
    ]),
    Q('q5', 'intake', 'What is most important to coordinate given the cognitive concerns?', ['R2'], [
      O('a', 'Coordinate a medical and cognitive evaluation to identify causes and establish a baseline for monitoring', 3,
        { r: 'Coordinate evaluation and baseline', approach: 'Partner with medical and cognitive assessment', why: 'Mild NCD warrants coordinated medical and cognitive evaluation to identify causes and establish a monitoring baseline', keys: ['decline supported by testing', 'wants to understand what is happening'], mistake: 'Working in isolation without coordinating the needed evaluation and baseline' }),
      O('b', 'Order neuroimaging and lab work yourself so that you can personally determine the cause of his decline', -2,
        { r: 'Ordering tests exceeds counselor scope', approach: 'Order-test framing', why: 'Counselors coordinate but do not order imaging or labs', keys: ['scope limit'], mistake: 'Acting outside scope of practice' }),
      O('c', 'A previously undetected primary psychotic disorder that might better account for his memory changes', -1,
        { r: 'Psychosis is not indicated', approach: 'Psychosis framing', why: 'Nothing suggests a psychotic process', keys: ['intact reality testing'], mistake: 'Pursuing an unsupported rule-out' }),
      O('d', 'A long-standing eating disorder that could be the single underlying cause of his memory and word-finding changes', 0,
        { r: 'Eating pathology is not indicated', approach: 'Eating-disorder framing', why: 'No eating concerns are reported', keys: ['no eating data'], mistake: 'Inventing an unsupported rule-out' }),
    ]),
    Q('q6', 'treatment', 'What is the most appropriate counselor role in his care?', ['R2'], [
      O('a', 'Provide psychosocial support and coping and coordinate monitoring, keeping him engaged in his own planning', 3,
        { r: 'Psychosocial support, coping, and monitoring', approach: 'Define the counselor role', why: 'The counselor supports coping, provides psychosocial support, and coordinates monitoring while keeping him engaged', keys: ['worried about the future', 'wants to stay independent'], mistake: 'Either treating it as untreatable or attempting to manage the medical evaluation yourself' }),
      O('b', 'Telling him and his wife the decline will inevitably become severe soon and that little can be done about it', -2,
        { r: 'A bleak, deterministic message is harmful', approach: 'Catastrophize framing', why: 'A deterministic bleak message is inaccurate at the mild stage and harmful', keys: ['support and monitoring'], mistake: 'Communicating unwarranted hopelessness' }),
      O('c', 'Focusing only on repeated memory drills and leaving out coping, support, and coordinated monitoring entirely', -1,
        { r: 'Drills-only misses the core needs', approach: 'Narrow-focus framing', why: 'Coping, support, and monitoring are central, not memory drills alone', keys: ['comprehensive support'], mistake: 'Narrowing to drills' }),
      O('d', 'Starting him on a medication that you will select and adjust to slow the decline over the coming weeks yourself', -2,
        { r: 'Prescribing is outside counselor scope', approach: 'Prescribe medication', why: 'Counselors do not select or adjust medication', keys: ['no prescriptive authority'], mistake: 'Acting outside scope of practice' }),
    ]),
    Q('q7', 'treatment', 'How should the counselor support his sense of control and planning?', ['R5'], [
      O('a', 'Support compensatory strategies, advance planning, and his autonomy while he still has full capacity', 3,
        { r: 'Compensation, planning, and autonomy', approach: 'Empower him at the mild stage', why: 'Supporting compensatory strategies and advance planning while capacity is intact empowers him and respects autonomy', keys: ['compensates with lists', 'wants to stay independent'], mistake: 'Removing his autonomy or planning prematurely while capacity is preserved' }),
      O('b', 'Advising his wife to take over all of his decisions now so that nothing is left to chance going forward', -2,
        { r: 'Removing autonomy prematurely is inappropriate', approach: 'Premature-surrogate framing', why: 'Taking over his decisions while capacity is intact violates his autonomy', keys: ['preserve autonomy'], mistake: 'Stripping autonomy prematurely' }),
      O('c', 'Telling him there is no point in planning since the decline will take away his independence regardless of anything', -1,
        { r: 'Fatalism forecloses useful planning', approach: 'Fatalism framing', why: 'Advance planning at the mild stage is valuable, not pointless', keys: ['proactive planning'], mistake: 'Discouraging useful planning' }),
      O('d', 'Avoiding any discussion of the future entirely so that he and his wife do not become more worried about it', -1,
        { r: 'Avoiding planning misses an opportunity', approach: 'Avoidant framing', why: 'Advance planning while capacity is intact is an opportunity to engage, not avoid', keys: ['engage planning'], mistake: 'Sidestepping useful planning' }),
    ]),
    Q('q8', 'treatment', 'How should progress be tracked over the course of care?', ['R5'], [
      O('a', 'Track cognition, function, mood, and coping over time to monitor for stability or progression', 3,
        { r: 'Measurement-based tracking of cognition and function', approach: 'Monitor the relevant outcomes', why: 'Tracking cognition, function, mood, and coping monitors for stability or progression at the mild stage', keys: ['modest decline', 'watch for progression'], mistake: 'Proceeding without monitoring cognition and function over time' }),
      O('b', 'Rely only on whether his wife happens to mention that he seems a little sharper than he did before', -1,
        { r: 'Anecdote alone is insufficient', approach: 'Anecdotal framing', why: 'Systematic tracking is more reliable than passing impressions', keys: ['structured measurement'], mistake: 'Substituting anecdote for measurement' }),
      O('c', 'Track only his mood and base every decision about his cognitive care solely on how he happens to feel', -1,
        { r: 'Mood alone is the wrong metric', approach: 'Wrong-metric framing', why: 'Cognition and function, not mood alone, are the outcomes to monitor', keys: ['cognition focus'], mistake: 'Measuring the wrong variable' }),
      O('d', 'Wait until his decline becomes severe to review whether anything has changed since the first session', -1,
        { r: 'Waiting for severe decline misses monitoring', approach: 'Delayed-review framing', why: 'Ongoing monitoring at the mild stage is the point, not waiting for severe decline', keys: ['continuous monitoring'], mistake: 'Deferring monitoring until it is too late' }),
    ]),
    Q('q9', 'treatment', 'How should the counselor support his wife within the plan?', ['R2'], [
      O('a', 'Provide caregiver education and support and coordinate resources while keeping him central to his own care', 3,
        { r: 'Caregiver support with the client central', approach: 'Support the caregiver appropriately', why: 'Caregiver education and support, with him kept central, strengthens the plan without sidelining him', keys: ['anxious wife', 'preserved capacity'], mistake: 'Supporting the caregiver in a way that sidelines the client’s own voice' }),
      O('b', 'Tell the wife she should manage everything for him from now on and stop involving him in the decisions at all', -2,
        { r: 'Sidelining the client removes autonomy', approach: 'Exclusion framing', why: 'Having her manage everything sidelines him while his capacity is intact', keys: ['keep him central'], mistake: 'Removing the client’s autonomy' }),
      O('c', 'Share his full clinical details with the wife freely without his consent, since she is his spouse and caregiver', -2,
        { r: 'Disclosing without consent breaches confidentiality', approach: 'Over-disclosure framing', why: 'Spousal status does not remove the need for his consent to disclosures', keys: ['no release'], mistake: 'Disclosing without consent' }),
      O('d', 'Focus only on the client and decline to involve or support the wife in the plan in any way at all', -1,
        { r: 'Excluding the caregiver misses a key support', approach: 'Exclusion framing', why: 'The caregiver is an important support in the plan, with appropriate consent', keys: ['caregiver-inclusive'], mistake: 'Leaving the caregiver out entirely' }),
    ]),
    Q('q10', 'counseling', 'Harold worries aloud that he is "losing himself." The most therapeutic response is to:', ['R5'], [
      O('a', 'Respond with empathy, provide accurate information about the mild stage, and support his coping and hope', 3,
        { r: 'Empathize and provide accurate, hopeful information', approach: 'Validate and psychoeducate', why: 'Empathy with accurate information about the mild stage counters catastrophic fear and supports coping', keys: ['worried about losing himself', 'still independent'], mistake: 'Either minimizing his fear or confirming a catastrophic outcome' }),
      O('b', 'Agree that he is indeed losing himself so that he can begin to accept the inevitable decline ahead of him', -2,
        { r: 'Endorsing catastrophe is harmful', approach: 'Catastrophize framing', why: 'Confirming a catastrophic outcome deepens fear and is inaccurate at the mild stage', keys: ['accurate framing'], mistake: 'Validating a catastrophic belief' }),
      O('c', 'Tell him he has no reason to worry and that his memory is perfectly fine and nothing is really changing at all', -1,
        { r: 'False reassurance dismisses the concern', approach: 'Minimize framing', why: 'Denying the documented change dismisses his valid concern', keys: ['honest support'], mistake: 'Minimizing a real change' }),
      O('d', 'Change the subject to something lighter so that he does not have to sit with the difficult feelings at all', -1,
        { r: 'Avoiding the feeling misses the work', approach: 'Avoidant framing', why: 'His fear can be engaged and addressed, not avoided', keys: ['engage the feeling'], mistake: 'Sidestepping a meaningful moment' }),
    ]),
    Q('q11', 'counseling', 'How can the counselor best support Harold’s engagement and coping?', ['R5'], [
      O('a', 'Use a strengths-based, collaborative approach that builds on his intact abilities and his own goals', 3,
        { r: 'Strengths-based, collaborative engagement', approach: 'Engage his strengths and goals', why: 'A strengths-based, collaborative approach that builds on his intact abilities and goals sustains engagement', keys: ['compensates well', 'wants to stay sharp'], mistake: 'Focusing only on deficits and undermining his sense of agency' }),
      O('b', 'Speak only to his wife and about him as though he cannot understand or participate in his own care', -2,
        { r: 'Talking past him undermines dignity', approach: 'Exclusion framing', why: 'Ignoring him in the room undermines his dignity and autonomy', keys: ['include the client'], mistake: 'Excluding the client from his own care' }),
      O('c', 'Focus the sessions mainly on repeatedly testing his memory in detail every single week to track the decline', -1,
        { r: 'Repeated testing is not the counseling role', approach: 'Testing-focus framing', why: 'Repeated memory testing is not the supportive counseling role and can heighten worry', keys: ['support focus'], mistake: 'Turning sessions into repeated testing' }),
      O('d', 'Tell him there is little point in counseling given his decline and focus only on planning for the worst', -1,
        { r: 'Writing off the work is inappropriate', approach: 'Nihilism framing', why: 'Supportive, strengths-based work has real value at the mild stage', keys: ['meaningful support'], mistake: 'Dismissing the value of the counseling' }),
    ]),
    Q('q12', 'ethics', 'Harold asks the counselor to help him complete advance directives while he still can. The most appropriate action is to:', ['R4'], [
      O('a', 'Support and coordinate advance planning while his capacity is intact, involving appropriate professionals as needed', 3,
        { r: 'Support advance planning with capacity intact', approach: 'Respect autonomy and coordinate', why: 'Supporting advance planning while capacity is intact respects his autonomy and is coordinated with appropriate professionals', keys: ['wants to complete directives', 'preserved capacity'], mistake: 'Discouraging planning or overstepping into legal roles beyond your competence' }),
      O('b', 'Tell him there is no need to bother with advance directives since his decline is only mild right now anyway', -1,
        { r: 'Discouraging planning misses the window', approach: 'Discourage-planning framing', why: 'The mild stage with intact capacity is exactly when advance planning is most appropriate', keys: ['plan while able'], mistake: 'Discouraging timely planning' }),
      O('c', 'Draft and finalize the legal directives yourself as his attorney would, without involving any legal professional', -2,
        { r: 'Acting as his attorney exceeds scope', approach: 'Overreach framing', why: 'Preparing legal directives is outside the counselor’s competence and role', keys: ['scope limits'], mistake: 'Acting outside scope of practice' }),
      O('d', 'Take over the decisions in the directives for him so that they reflect what you think is best for him', -2,
        { r: 'Overriding his choices violates autonomy', approach: 'Override framing', why: 'The directives must reflect his own wishes, not the counselor’s preferences', keys: ['client autonomy'], mistake: 'Substituting your judgment for his' }),
    ]),
    Q('q13', 'ethics', 'The counselor has limited training in neurocognitive disorders. The most ethical course of action is to:', ['R4'], [
      O('a', 'Seek consultation and coordinate medical and cognitive evaluation, referring for components beyond your competence', 3,
        { r: 'Consult, coordinate, or refer within competence', approach: 'Practice within competence', why: 'ACA C.2. requires competence; NCD assessment and monitoring need coordinated evaluation and referral', keys: ['limited NCD training', 'evaluation and monitoring needed'], mistake: 'Managing cognitive decline assessment alone without competence' }),
      O('b', 'Continue managing the case alone to preserve the continuity of the relationship built with him and his wife', -2,
        { r: 'Going it alone exceeds competence', approach: 'Continuity-over-competence', why: 'Continuity does not justify exceeding competence', keys: ['competence exceeded'], mistake: 'Prioritizing continuity over competence' }),
      O('c', 'Tell them the changes are nothing to worry about and that no medical evaluation or monitoring is needed at all', -2,
        { r: 'Minimizing the concern misleads care', approach: 'Downplay framing', why: 'A documented decline warrants coordinated evaluation and monitoring, not dismissal', keys: ['evaluation indicated'], mistake: 'Discouraging an indicated evaluation' }),
      O('d', 'Transfer them at once to another provider with no explanation, consultation, or coordinated plan for the transition', -1,
        { r: 'Abrupt transfer mishandles continuity', approach: 'Uncoordinated handoff', why: 'A coordinated referral, not an abrupt transfer, is appropriate', keys: ['coordinated transition'], mistake: 'Dropping the client without coordination' }),
    ]),
  ],
};

module.exports = { CASES: [D180, D181, D182, D183, D184] };
