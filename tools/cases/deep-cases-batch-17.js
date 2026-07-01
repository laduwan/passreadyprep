// ============================================================================
// deep-cases-batch-17.js — NCMHCE deep cases, batch 17 (2022+ format)
// NCMHCE Prep Platform | GA Integrated Therapeutic Perspectives LLC
//
// Five exam-deep clinical simulations (13 items each, sections [5,4,4]). The
// diagnosis/clinical focus is GIVEN; items test clinical decision-making across
// the three derived sections (Assessment -> Planning -> Process). On the
// reserved id block ncmhce-D185+, adding distinct diagnoses not yet covered by
// any deep case (checked vs all deep-format cases + the exemplar):
//   ncmhce-D185  Histrionic Personality Disorder (Personality)
//   ncmhce-D186  Delirium (Neurocognitive)
//   ncmhce-D187  Intellectual Developmental Disorder, Mild (Neurodevelopmental)
//   ncmhce-D188  Female Sexual Interest/Arousal Disorder (Sexual-Gender)
//   ncmhce-D189  Factitious Disorder (Somatic)
//
// Authored to NCMHCE_DeepCase_Generation_Spec.md. Passes caseSchema
// (strictItemQuality) AND examDepth with zero errors / zero warnings.
// Auto-discovered by import-deep-cases.js (deep-cases-batch-*.js).
//
// Validate:
//   node tools/cases/validateCases.js tools/cases/deep-cases-batch-17.js
//   node -e "const{validateExamDepthSet}=require('./tools/cases/examDepth');const{CASES}=require('./tools/cases/deep-cases-batch-17');console.log(validateExamDepthSet(CASES))"
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
// D185 — Histrionic Personality Disorder (F60.4) — Personality — hard
// ============================================================================
const D185 = {
  id: 'ncmhce-D185',
  title: 'Pervasive attention-seeking and shallow, shifting emotion',
  category: 'Personality',
  difficulty: 'hard',
  primaryDiagnosis: { name: 'Histrionic Personality Disorder', code: 'F60.4' },
  diagnosis: { name: 'Histrionic Personality Disorder', code: 'F60.4' },
  differentialOptions: [
    { id: 'do1', name: 'Histrionic Personality Disorder', isCorrect: true },
    { id: 'do2', name: 'Borderline Personality Disorder', isCorrect: false },
    { id: 'do3', name: 'Narcissistic Personality Disorder', isCorrect: false },
    { id: 'do4', name: 'Bipolar I Disorder, Manic Episode', isCorrect: false },
  ],
  narrative: {
    intake:
      'Vanessa Cole, a 35-year-old event planner, presents after conflict at work. She describes a lifelong pattern of discomfort when she is not ' +
      'the center of attention, dramatic and theatrical self-presentation, and rapidly shifting, shallow emotional expression that others find overwhelming.',
    session1:
      'Her pattern is pervasive and enduring since early adulthood, with attention-seeking, suggestibility, and a tendency to consider ' +
      'relationships more intimate than they are. Her sense of self is not marked by the identity disturbance, chronic emptiness, and self-harm of borderline patterns.',
    session2:
      'She uses her appearance to draw attention and speaks in an impressionistic, dramatic style, and her relationships and job are strained by ' +
      'the pattern. She is distressed by the recent conflict and at a low point felt life was not worth living, without plan or intent, and wants steadier relationships.',
  },
  diagnosticRationale:
    'A pervasive pattern of excessive emotionality and attention-seeking beginning by early adulthood—discomfort when not the center of attention, ' +
    'theatrical and shallow emotional expression, suggestibility, and considering relationships more intimate than they are—meets DSM-5-TR ' +
    'criteria for histrionic personality disorder, distinct from borderline PD, narcissistic PD, and a bipolar manic episode.',
  references: [
    { id: 'R1', source: 'DSM-5-TR', detail: 'Histrionic PD: pervasive excessive emotionality and attention-seeking by early adulthood; theatrical, shallow, suggestible' },
    { id: 'R2', source: 'Corey (Theory & Practice)', detail: 'Approach selection, the working alliance, and managing dramatic interpersonal patterns' },
    { id: 'R3', source: 'C-SSRS', detail: 'Structured suicide-risk screening when interpersonal crisis and hopelessness co-occur' },
    { id: 'R4', source: 'ACA Code of Ethics', detail: 'A.1., A.6., and C.2.: client welfare, boundaries, avoiding harmful dual relationships, and competence' },
    { id: 'R5', source: 'NBCC Content Outline', detail: 'Clinical decision-making and measurement-based care across the counseling process' },
  ],
  questions: [
    Q('q1', 'intake', 'What is most important to establish to support a histrionic personality disorder diagnosis?', ['R1'], [
      O('a', 'A pervasive, early-adulthood pattern of excessive emotionality and attention-seeking across situations', 3,
        { r: 'Pervasive early-onset attention-seeking pattern', approach: 'Confirm the trait pattern', why: 'Histrionic PD requires a pervasive, enduring pattern of excessive emotionality and attention-seeking beginning by early adulthood', keys: ['discomfort when not the center of attention', 'theatrical presentation'], mistake: 'Diagnosing from a single dramatic episode rather than a pervasive pattern' }),
      O('b', 'That she can pinpoint the single past event she is convinced first made her so dramatic and attention-seeking', -1,
        { r: 'A precipitant is not the criterion', approach: 'Trigger framing', why: 'Etiology is not part of the criteria', keys: ['pattern-based diagnosis'], mistake: 'Using a trigger as the diagnostic test' }),
      O('c', 'That her attention-seeking has grown a little more noticeable over the past few days than it was the week before', -1,
        { r: 'Recent change is not the criterion', approach: 'Recent-change framing', why: 'A pervasive, enduring pattern is required', keys: ['enduring pattern'], mistake: 'Confusing a brief change with the criteria' }),
      O('d', 'That she currently meets the full symptom count required for a discrete major depressive episode at this time', 0,
        { r: 'Depressive count does not define it', approach: 'Mood-criteria framing', why: 'Histrionic PD is a personality pattern, not a mood episode', keys: ['personality pattern'], mistake: 'Applying depressive criteria here' }),
    ]),
    Q('q2', 'core', 'Which feature best differentiates her presentation from borderline personality disorder?', ['R1'], [
      O('a', 'Her pattern is attention-seeking emotionality without the identity disturbance, emptiness, and self-harm of borderline PD', 3,
        { r: 'Attention-seeking without borderline core features', approach: 'Contrast the core features', why: 'Borderline PD involves identity disturbance, emptiness, and self-harm; hers is attention-seeking emotionality without those', keys: ['no chronic emptiness or self-harm', 'stable but dramatic self'], mistake: 'Reading dramatic emotionality as borderline instability' }),
      O('b', 'The fact that she can be emotionally intense and that her relationships are strained by the way she relates to others', -1,
        { r: 'Emotional intensity occurs in both', approach: 'Intensity framing', why: 'Emotional intensity and relational strain occur in both; the core features differ', keys: ['shared feature'], mistake: 'Using emotional intensity to differentiate' }),
      O('c', 'The distress and the difficulty coping that she has felt since the recent conflict at her workplace', -1,
        { r: 'Post-conflict distress is nonspecific', approach: 'Distress framing', why: 'Post-conflict distress occurs in both; the personality pattern differs', keys: ['shared distress'], mistake: 'Reading distress as decisive' }),
      O('d', 'The way her emotionality tends to feel a little stronger during the busiest and most stressful weeks at her job', 0,
        { r: 'Stress reactivity is nonspecific', approach: 'Stress framing', why: 'Worsening under stress does not differentiate them', keys: ['nonspecific reactivity'], mistake: 'Using stress sensitivity to differentiate' }),
    ]),
    Q('q3', 'core', 'How does her presentation differ from narcissistic personality disorder?', ['R1'], [
      O('a', 'She seeks attention and approval broadly, rather than centering on grandiosity, superiority, and entitlement', 3,
        { r: 'Attention-seeking versus grandiosity', approach: 'Contrast the core motive', why: 'Narcissistic PD centers on grandiosity and entitlement; hers centers on attention-seeking and approval', keys: ['wants to be the center of attention', 'not grandiose'], mistake: 'Confusing attention-seeking emotionality with narcissistic grandiosity' }),
      O('b', 'The fact that she can be difficult to be around at times and that her behavior strains her relationships', -1,
        { r: 'Interpersonal friction occurs in both', approach: 'Friction framing', why: 'Relational friction occurs in both; the core motive differs', keys: ['shared feature'], mistake: 'Using friction to differentiate' }),
      O('c', 'The strong wish she has to be noticed and thought well of by the people around her', -1,
        { r: 'Wish for regard is nonspecific', approach: 'Regard framing', why: 'A wish for others’ regard occurs in both; the core motive differs', keys: ['shared wish'], mistake: 'Reading a wish for regard as decisive' }),
      O('d', 'The way her behavior tends to be a little more dramatic in the evenings than it is earlier during the daytime hours', 0,
        { r: 'Diurnal pattern is not diagnostic', approach: 'Time-of-day framing', why: 'Timing does not separate the two', keys: ['nonspecific timing'], mistake: 'Over-reading a circadian pattern' }),
    ]),
    Q('q4', 'core', 'How does her presentation differ from a bipolar manic episode?', ['R1'], [
      O('a', 'Her emotionality is a stable lifelong trait pattern, not a distinct episode of elevated mood with reduced need for sleep', 3,
        { r: 'Trait pattern, not a distinct manic episode', approach: 'Contrast trait versus episode', why: 'Mania is a distinct episode with elevated mood and reduced sleep; hers is a stable lifelong trait pattern', keys: ['lifelong pattern', 'no distinct manic episode'], mistake: 'Misreading a trait pattern as a manic episode' }),
      O('b', 'The fact that she can be very expressive and energetic in the way she presents herself to other people', -1,
        { r: 'Expressiveness can occur in both', approach: 'Expressiveness framing', why: 'Expressiveness can occur in both; the episodic course differs', keys: ['shared feature'], mistake: 'Using expressiveness to differentiate' }),
      O('c', 'The dramatic and theatrical style that she brings to her interactions with the people around her', -1,
        { r: 'Dramatic style is nonspecific', approach: 'Style framing', why: 'Dramatic style can appear in both; the distinct episode differs', keys: ['shared style'], mistake: 'Reading style as decisive' }),
      O('d', 'The way her sleep tends to be more broken on the nights right before a big event that she is planning', 0,
        { r: 'Situational sleep change is nonspecific', approach: 'Sleep framing', why: 'Situational poor sleep does not point to mania', keys: ['nonspecific factor'], mistake: 'Over-reading situational sleep loss as mania' }),
    ]),
    Q('q5', 'intake', 'Given her remark that life was not worth living, what is the most important step?', ['R3'], [
      O('a', 'Conduct a structured suicide-risk assessment of current ideation, intent, plan, and protective factors now', 3,
        { r: 'Structured suicide-risk assessment now', approach: 'Screen risk directly', why: 'A statement of hopelessness during an interpersonal crisis warrants structured assessment of current risk', keys: ['life not worth living', 'recent conflict'], mistake: 'Failing to assess current suicide risk, or dismissing it as dramatic' }),
      O('b', 'Assume the remark is only dramatic and attention-seeking and therefore does not need any assessment at all', -2,
        { r: 'Dismissing the remark is unsafe', approach: 'Dismissal framing', why: 'Statements of hopelessness are assessed, not dismissed as merely dramatic', keys: ['assess regardless'], mistake: 'Dismissing risk based on the personality style' }),
      O('c', 'Defer any risk assessment until the workplace conflict is resolved and she has been stable for several months', -2,
        { r: 'Deferring assessment is unsafe', approach: 'Delay framing', why: 'Risk is assessed now, not after the conflict resolves', keys: ['present risk'], mistake: 'Postponing an urgent assessment' }),
      O('d', 'Focus only on the workplace conflict for now and plan to return to any safety questions at a later date', -1,
        { r: 'Sequencing safety behind the conflict is unsafe', approach: 'Single-issue framing', why: 'The conflict does not displace assessing current safety', keys: ['safety first'], mistake: 'Sequencing safety behind other needs' }),
    ]),
    Q('q6', 'treatment', 'What is the most appropriate treatment framework for Vanessa?', ['R2'], [
      O('a', 'Supportive, structured psychotherapy building the alliance and working on interpersonal patterns and emotion', 3,
        { r: 'Supportive, structured psychotherapy', approach: 'Apply a personality-focused approach', why: 'Histrionic PD is addressed with supportive, structured therapy focused on interpersonal patterns and emotional depth', keys: ['strained relationships', 'wants steadier relationships'], mistake: 'Getting drawn into the drama or reacting to the presentation rather than the pattern' }),
      O('b', 'Matching her drama with equally dramatic responses so that she feels that you truly understand her intensity', -2,
        { r: 'Matching the drama reinforces the pattern', approach: 'Match-drama framing', why: 'Amplifying the drama reinforces the very pattern being treated', keys: ['steady, structured stance'], mistake: 'Reinforcing the dramatic pattern' }),
      O('c', 'Telling her personality cannot change and that she should simply accept the conflict in her relationships from now on', -2,
        { r: 'Therapeutic nihilism abandons the client', approach: 'Nihilism framing', why: 'Personality-focused work can help; dismissing change abandons the client', keys: ['change is possible'], mistake: 'Foreclosing change' }),
      O('d', 'Starting her on a medication that you will select and adjust to reduce her emotionality over the coming weeks yourself', -2,
        { r: 'Prescribing is outside counselor scope', approach: 'Prescribe medication', why: 'Counselors do not select or adjust medication', keys: ['no prescriptive authority'], mistake: 'Acting outside scope of practice' }),
    ]),
    Q('q7', 'treatment', 'How should the counselor manage the interpersonal pattern in the work itself?', ['R2'], [
      O('a', 'Maintain a steady, consistent stance and help her notice and reflect on her patterns and their impact', 3,
        { r: 'Steady stance; reflect on patterns', approach: 'Model consistency and build reflection', why: 'A steady, consistent stance that helps her reflect on her patterns addresses the histrionic pattern in the alliance', keys: ['dramatic, shifting emotion', 'considers relationships more intimate than they are'], mistake: 'Being pulled into the drama or reacting to seductive or dramatic bids' }),
      O('b', 'Reward her most dramatic presentations with extra attention so that she stays engaged in the sessions', -2,
        { r: 'Rewarding drama reinforces the pattern', approach: 'Reinforce-drama framing', why: 'Giving extra attention for drama reinforces the pattern being treated', keys: ['steady attention'], mistake: 'Reinforcing the dramatic bids' }),
      O('c', 'Confront and criticize her dramatic style harshly so that she is shamed into changing it quickly', -1,
        { r: 'Harsh confrontation ruptures the alliance', approach: 'Confront framing', why: 'Shaming confrontation damages the alliance rather than building reflection', keys: ['supportive reflection'], mistake: 'Shaming rather than reflecting' }),
      O('d', 'Avoid the topic of her interpersonal style entirely so that the sessions never touch on anything uncomfortable', -1,
        { r: 'Avoidance misses the target', approach: 'Avoidant framing', why: 'Her interpersonal pattern is the focus and is engaged, not avoided', keys: ['engage the pattern'], mistake: 'Avoiding the central clinical issue' }),
    ]),
    Q('q8', 'treatment', 'How should progress be tracked in this personality-focused work?', ['R5'], [
      O('a', 'Track interpersonal functioning, emotional regulation, and engagement over time to guide a longer-term course', 3,
        { r: 'Measurement-based tracking of functioning and regulation', approach: 'Measure functioning over time', why: 'Tracking interpersonal functioning, emotional regulation, and engagement steers a longer-term course', keys: ['strained relationships', 'shallow shifting emotion'], mistake: 'Proceeding without a way to gauge change' }),
      O('b', 'Rely only on whether she happens to remark in session that she feels a little steadier than before', -1,
        { r: 'Anecdote alone is insufficient', approach: 'Anecdotal framing', why: 'Systematic tracking is more reliable than passing impressions', keys: ['structured measurement'], mistake: 'Substituting anecdote for measurement' }),
      O('c', 'Track only how dramatic her presentation seems at each session and base every decision solely on that impression', -1,
        { r: 'Dramatic tone is the wrong metric', approach: 'Wrong-metric framing', why: 'Functioning and regulation are the outcomes, not how dramatic she seems', keys: ['functioning focus'], mistake: 'Measuring the wrong variable' }),
      O('d', 'Wait until the very last session to decide whether anything has changed at all since the first appointment', -1,
        { r: 'End-only review misses steering data', approach: 'Delayed-review framing', why: 'Ongoing tracking is needed to steer a longer course', keys: ['continuous monitoring'], mistake: 'Deferring all measurement to the end' }),
    ]),
    Q('q9', 'treatment', 'How should the counselor respond if she becomes flirtatious or seeks a special relationship?', ['R4'], [
      O('a', 'Maintain clear professional boundaries, address it therapeutically, and keep the work focused on her goals', 3,
        { r: 'Maintain boundaries; address it therapeutically', approach: 'Hold boundaries and use the moment', why: 'Maintaining boundaries and addressing the behavior therapeutically protects the work and treats the pattern', keys: ['seductive or intimacy-seeking bids', 'considers relationships too intimate'], mistake: 'Either responding to the bid or shaming her for it' }),
      O('b', 'Reciprocate warmly and blur the boundary so that she feels the special connection she is looking for from you', -2,
        { r: 'Blurring boundaries is harmful and unethical', approach: 'Boundary-crossing framing', why: 'Reciprocating a seductive bid is a serious boundary violation that harms the client', keys: ['professional boundaries'], mistake: 'Crossing a professional boundary' }),
      O('c', 'Reprimand her sharply for the behavior so that she is embarrassed enough to never do it again in session', -1,
        { r: 'Shaming ruptures the alliance', approach: 'Shame framing', why: 'A harsh reprimand shames her and damages the alliance', keys: ['therapeutic handling'], mistake: 'Shaming rather than addressing therapeutically' }),
      O('d', 'Ignore the behavior entirely and simply continue as if nothing had happened during the session at all', -1,
        { r: 'Ignoring it misses clinical material', approach: 'Ignore framing', why: 'The behavior is relevant material to address within boundaries, not ignore', keys: ['engage within boundaries'], mistake: 'Failing to address a meaningful interaction' }),
    ]),
    Q('q10', 'counseling', 'Vanessa dramatically declares the counselor is the "only one who understands" her. The most therapeutic response is to:', ['R2'], [
      O('a', 'Acknowledge her feeling warmly while gently maintaining realistic boundaries and exploring the pattern', 3,
        { r: 'Acknowledge warmly; keep realistic boundaries', approach: 'Validate feeling, hold boundaries', why: 'Warm acknowledgment with realistic boundaries validates her without reinforcing the idealizing pattern', keys: ['idealizes the counselor', 'considers relationships too intimate'], mistake: 'Either accepting the idealization uncritically or rejecting her coldly' }),
      O('b', 'Agree that you are indeed the only one who truly understands her so that she feels the special bond she wants', -2,
        { r: 'Accepting the idealization reinforces it', approach: 'Collude framing', why: 'Endorsing the idealization reinforces the pattern being treated', keys: ['realistic boundaries'], mistake: 'Reinforcing the idealizing bid' }),
      O('c', 'Tell her flatly that she is being overly dramatic and that she should not say things like that to you', -1,
        { r: 'Dismissing her coldly ruptures the alliance', approach: 'Dismiss framing', why: 'A cold dismissal damages the alliance rather than exploring the pattern', keys: ['warm but bounded'], mistake: 'Rejecting her rather than engaging' }),
      O('d', 'Change the subject quickly so that the session does not dwell on the comment she has just made', -1,
        { r: 'Avoiding the moment misses material', approach: 'Avoidant framing', why: 'The idealizing comment is useful material to engage within boundaries', keys: ['engage the moment'], mistake: 'Sidestepping a meaningful interaction' }),
    ]),
    Q('q11', 'counseling', 'How can the counselor best support Vanessa’s engagement toward her goals?', ['R2'], [
      O('a', 'Anchor the work in her goal of steadier relationships and reinforce genuine, reflective emotional expression', 3,
        { r: 'Anchor in her goals; reinforce genuine reflection', approach: 'Build engagement on her goals', why: 'Linking the work to her goal of steadier relationships and reinforcing genuine reflection engages her constructively', keys: ['wants steadier relationships', 'shallow shifting emotion'], mistake: 'Focusing on the drama rather than on her genuine goals and reflection' }),
      O('b', 'Encourage her to be as dramatic as possible in session so that she feels free to fully express herself each week', -1,
        { r: 'Amplifying drama is not the goal', approach: 'Amplify-drama framing', why: 'Encouraging more drama reinforces the pattern rather than building depth', keys: ['genuine reflection'], mistake: 'Reinforcing the dramatic pattern' }),
      O('c', 'Focus the sessions mainly on cataloguing every dramatic incident from her week in exhaustive detail every time', -1,
        { r: 'Cataloguing incidents is not the work', approach: 'Catalogue framing', why: 'Rehashing dramatic incidents does not advance the goals or reflection', keys: ['goal focus'], mistake: 'Centering the work on the incidents' }),
      O('d', 'Tell her counseling cannot help her at all unless she first stops being emotional in every session entirely', -1,
        { r: 'Demanding she suppress emotion stalls engagement', approach: 'Suppression framing', why: 'Requiring her to suppress all emotion blocks engagement; genuine reflection is the goal', keys: ['genuine expression'], mistake: 'Setting an unworkable precondition' }),
    ]),
    Q('q12', 'ethics', 'Vanessa asks the counselor to socialize with her outside sessions to "really get to know each other." The most appropriate action is to:', ['R4'], [
      O('a', 'Maintain professional boundaries, decline the social relationship, and explore the request therapeutically', 3,
        { r: 'Decline the social relationship; explore it', approach: 'Hold boundaries and use the request', why: 'Declining a social relationship and exploring the request protects the work and treats the pattern', keys: ['asks to socialize outside sessions', 'seeks closeness'], mistake: 'Agreeing to a social relationship that becomes a harmful dual relationship' }),
      O('b', 'Agree to socialize outside sessions, since a closer connection would clearly help her feel more understood', -2,
        { r: 'A social dual relationship is harmful', approach: 'Dual-relationship framing', why: 'Socializing outside sessions creates a harmful dual relationship', keys: ['professional boundaries'], mistake: 'Crossing a boundary that harms the work' }),
      O('c', 'Meet her socially just once so that she does not feel rejected and is willing to keep coming to sessions', -1,
        { r: 'Even a one-time crossing is inappropriate', approach: 'One-time framing', why: 'A single social meeting still crosses the boundary and starts a dual relationship', keys: ['hold the boundary'], mistake: 'Making an exception that crosses the boundary' }),
      O('d', 'Refuse the request curtly and end the session rather than exploring it with her at all in the room', -1,
        { r: 'A curt refusal misses the material', approach: 'Curt-refusal framing', why: 'The boundary is held while the request is explored, not handled by shutting down', keys: ['explore therapeutically'], mistake: 'Declining without exploring the meaning' }),
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
// D186 — Delirium (F05) — Neurocognitive — hard
// ============================================================================
const D186 = {
  id: 'ncmhce-D186',
  title: 'Acute, fluctuating confusion and inattention in an older adult',
  category: 'Neurocognitive',
  difficulty: 'hard',
  primaryDiagnosis: { name: 'Delirium', code: 'F05' },
  diagnosis: { name: 'Delirium', code: 'F05' },
  differentialOptions: [
    { id: 'do1', name: 'Delirium', isCorrect: true },
    { id: 'do2', name: 'Major Neurocognitive Disorder', isCorrect: false },
    { id: 'do3', name: 'Major Depressive Disorder', isCorrect: false },
    { id: 'do4', name: 'Brief Psychotic Disorder', isCorrect: false },
  ],
  narrative: {
    intake:
      'Frank Delgado, a 74-year-old, is seen at a skilled-nursing facility after an abrupt change over two days. Staff report he has become acutely ' +
      'confused, with a disturbance in attention and awareness that fluctuates markedly through the day, developing over hours rather than months.',
    session1:
      'His attention and orientation wax and wane, and the change is acute and represents a departure from his usual baseline. There is evidence ' +
      'the disturbance is a physiological consequence of a medical condition or its treatment, and it is not better explained by an established dementia alone.',
    session2:
      'He was started on a new medication and has signs of a possible infection, and his confusion is worse in the evenings. His family is alarmed, ' +
      'and the counselor recognizes that delirium is a medical emergency requiring urgent evaluation of the underlying cause.',
  },
  diagnosticRationale:
    'A disturbance in attention and awareness that develops acutely, fluctuates in severity, represents a change from baseline, and is a direct ' +
    'physiological consequence of a medical condition, substance, or medication, meets DSM-5-TR criteria for delirium—distinct from the chronic ' +
    'course of a major neurocognitive disorder, depression, and a primary brief psychotic disorder, and requiring urgent medical evaluation.',
  references: [
    { id: 'R1', source: 'DSM-5-TR', detail: 'Delirium: acute, fluctuating disturbance in attention/awareness due to a physiological medical/substance cause' },
    { id: 'R2', source: 'NICE guidelines', detail: 'Delirium: urgent identification and treatment of the underlying cause within coordinated medical care' },
    { id: 'R3', source: 'C-SSRS', detail: 'Structured suicide-risk screening once the acute delirium is stabilized and evaluated' },
    { id: 'R4', source: 'ACA Code of Ethics', detail: 'A.1., B.2., and C.2.: client welfare, safety, emergency coordination, and practicing within competence' },
    { id: 'R5', source: 'Hays (Assessment)', detail: 'Recognizing acute cognitive change and coordinating urgent medical evaluation' },
  ],
  questions: [
    Q('q1', 'intake', 'What is most important to confirm to support a delirium diagnosis?', ['R1'], [
      O('a', 'An acute, fluctuating disturbance in attention and awareness that is a change from his baseline', 3,
        { r: 'Acute, fluctuating attention disturbance from baseline', approach: 'Confirm the core criteria', why: 'Delirium requires an acute, fluctuating disturbance in attention and awareness representing a change from baseline', keys: ['abrupt change over two days', 'attention waxes and wanes'], mistake: 'Diagnosing without confirming the acute onset, fluctuation, and change from baseline' }),
      O('b', 'That his family can pinpoint the single event they are convinced first caused all of his confusion', -1,
        { r: 'A precipitant is not the criterion', approach: 'Trigger framing', why: 'The acute physiological cause, not a subjective trigger, defines it', keys: ['criteria-based diagnosis'], mistake: 'Using a subjective trigger as the diagnostic test' }),
      O('c', 'That his confusion has grown a little worse over the past few weeks than it was the month before that', -1,
        { r: 'A slow course argues against delirium', approach: 'Slow-course framing', why: 'Delirium is acute over hours to days, not a slow monthly change', keys: ['acute onset'], mistake: 'Applying a chronic-course timeframe to an acute condition' }),
      O('d', 'That he currently meets the full symptom count required for a discrete major depressive episode at this time', 0,
        { r: 'Depressive count does not define it', approach: 'Mood-criteria framing', why: 'Delirium is defined by the acute attention disturbance, not mood criteria', keys: ['attention-focused diagnosis'], mistake: 'Applying depressive criteria here' }),
    ]),
    Q('q2', 'core', 'Which feature best differentiates his presentation from a major neurocognitive disorder?', ['R1'], [
      O('a', 'His disturbance is acute and fluctuating with prominent inattention, not the chronic, stable course of a dementia', 3,
        { r: 'Acute, fluctuating versus chronic course', approach: 'Contrast the course and attention', why: 'A major NCD is chronic and stable; delirium is acute and fluctuating with prominent inattention', keys: ['acute over two days', 'fluctuates through the day'], mistake: 'Attributing an acute fluctuating change to a chronic dementia' }),
      O('b', 'The fact that he has difficulty with his memory and thinking that others around him have clearly noticed', -1,
        { r: 'Cognitive impairment occurs in both', approach: 'Impairment framing', why: 'Cognitive impairment occurs in both; the acute fluctuating course differs', keys: ['shared feature'], mistake: 'Using cognitive impairment to differentiate' }),
      O('c', 'The confusion and the disorientation that he shows when staff interact with him at the facility', -1,
        { r: 'Confusion is nonspecific', approach: 'Confusion framing', why: 'Confusion can occur in both; the acute course and inattention differ', keys: ['shared experience'], mistake: 'Reading confusion as decisive' }),
      O('d', 'The way his confusion tends to be a little worse in the evenings than it is earlier during the daytime hours', 0,
        { r: 'Sundowning alone is not diagnostic', approach: 'Time-of-day framing', why: 'Evening worsening can occur in both and does not by itself separate them', keys: ['nonspecific timing'], mistake: 'Over-reading a time-of-day pattern' }),
    ]),
    Q('q3', 'core', 'How does his presentation differ from major depressive disorder?', ['R1'], [
      O('a', 'His core disturbance is acute inattention and altered awareness from a medical cause, not a primary mood episode', 3,
        { r: 'Acute medical inattention, not mood-driven', approach: 'Contrast the core disturbance', why: 'Depression is a mood episode; delirium is an acute attention disturbance from a physiological cause', keys: ['acute inattention', 'evidence of a medical cause'], mistake: 'Attributing an acute medical confusion to depression' }),
      O('b', 'The fact that he seems withdrawn and less engaged than he usually is with the people around him', -1,
        { r: 'Reduced engagement is nonspecific', approach: 'Engagement framing', why: 'Reduced engagement can occur in both; the acute attention disturbance differs', keys: ['shared feature'], mistake: 'Using reduced engagement to differentiate' }),
      O('c', 'The difficulty he has focusing and following what is going on around him at the facility', -1,
        { r: 'Poor focus can occur in both', approach: 'Focus framing', why: 'Poor focus can occur in both; the acute fluctuating course differs', keys: ['shared difficulty'], mistake: 'Reading poor focus as decisive' }),
      O('d', 'The way his mood seems a little lower in the mornings than it does later during the day', 0,
        { r: 'Diurnal mood pattern is not diagnostic', approach: 'Time-of-day framing', why: 'Diurnal mood variation does not establish depression here', keys: ['nonspecific timing'], mistake: 'Over-reading a circadian pattern' }),
    ]),
    Q('q4', 'core', 'How does his presentation differ from a brief psychotic disorder?', ['R1'], [
      O('a', 'His condition is an acute confusional state from a medical cause, not a primary psychosis with a clear sensorium', 3,
        { r: 'Medical confusional state, not primary psychosis', approach: 'Contrast the cause and sensorium', why: 'Brief psychotic disorder is a primary psychosis with intact attention; his is a medical confusional state with disturbed attention', keys: ['medical cause', 'disturbed attention and awareness'], mistake: 'Reading a delirium as a primary psychotic disorder' }),
      O('b', 'The fact that he can seem confused and may misperceive some of what is happening around him at times', -1,
        { r: 'Perceptual disturbance can occur in both', approach: 'Perception framing', why: 'Perceptual disturbance can occur in both; the medical cause and inattention differ', keys: ['shared feature'], mistake: 'Using perceptual disturbance to differentiate' }),
      O('c', 'The distress and the agitation that he shows during the times when he is most confused', -1,
        { r: 'Agitation is nonspecific', approach: 'Agitation framing', why: 'Agitation can occur in both; the medical cause differs', keys: ['shared agitation'], mistake: 'Reading agitation as decisive' }),
      O('d', 'The way his confusion seems a little worse on the days when he has slept poorly the night before', 0,
        { r: 'Sleep effects are nonspecific', approach: 'Sleep framing', why: 'Worse confusion after poor sleep does not differentiate them', keys: ['nonspecific factor'], mistake: 'Over-reading a sleep effect' }),
    ]),
    Q('q5', 'intake', 'What is the single most important action given this acute presentation?', ['R2'], [
      O('a', 'Treat it as a medical emergency and ensure urgent medical evaluation of the underlying cause right away', 3,
        { r: 'Urgent medical evaluation now', approach: 'Recognize the emergency', why: 'Delirium is a medical emergency requiring urgent evaluation and treatment of the underlying cause', keys: ['acute confusion', 'new medication and possible infection'], mistake: 'Treating an acute delirium as a psychological issue instead of a medical emergency' }),
      O('b', 'Begin weekly psychotherapy for his confusion and plan to reassess his progress over the next several months', -2,
        { r: 'Psychotherapy delays urgent care', approach: 'Therapy-first framing', why: 'Delaying urgent medical evaluation for psychotherapy is unsafe in acute delirium', keys: ['medical emergency'], mistake: 'Delaying the required urgent medical evaluation' }),
      O('c', 'A previously undetected primary personality disorder that might better account for his acute confusion', -1,
        { r: 'A personality disorder does not explain acute confusion', approach: 'Personality framing', why: 'An acute confusional state is not a personality disorder', keys: ['acute medical picture'], mistake: 'Pursuing an unsupported rule-out' }),
      O('d', 'A long-standing eating disorder that could be the single underlying cause of his acute confusion and inattention', 0,
        { r: 'Eating pathology is not indicated', approach: 'Eating-disorder framing', why: 'No eating concerns are reported and this is an acute medical picture', keys: ['no eating data'], mistake: 'Inventing an unsupported rule-out' }),
    ]),
    Q('q6', 'treatment', 'What is the most appropriate counselor role in his care?', ['R2'], [
      O('a', 'Coordinate urgent medical evaluation, support the team and family, and provide a calm, oriented environment', 3,
        { r: 'Coordinate urgent care and support', approach: 'Define the counselor role', why: 'The counselor coordinates urgent medical evaluation and supports the team and family while providing orienting support', keys: ['medical emergency', 'alarmed family'], mistake: 'Attempting to treat the delirium with counseling instead of coordinating urgent medical care' }),
      O('b', 'Managing the delirium yourself with counseling and holding off on any medical evaluation for the time being', -2,
        { r: 'Delaying medical care is unsafe', approach: 'Counseling-only framing', why: 'Delirium requires urgent medical evaluation, not counseling alone', keys: ['urgent evaluation'], mistake: 'Withholding urgent medical care' }),
      O('c', 'Confronting his confused statements to force him to become oriented and think clearly right away', -1,
        { r: 'Confrontation is not appropriate in delirium', approach: 'Confront framing', why: 'Gentle orientation and support, not confrontation, is appropriate in delirium', keys: ['calm orientation'], mistake: 'Confronting a delirious client' }),
      O('d', 'Starting him on a medication that you will select and adjust to clear the confusion over the coming weeks yourself', -2,
        { r: 'Prescribing is outside counselor scope', approach: 'Prescribe medication', why: 'Counselors do not select or adjust medication', keys: ['no prescriptive authority'], mistake: 'Acting outside scope of practice' }),
    ]),
    Q('q7', 'treatment', 'How should the counselor support the environment during the acute phase?', ['R2'], [
      O('a', 'Support a calm, well-lit, orienting environment with familiar cues and consistent staff to reduce distress', 3,
        { r: 'Calm, orienting environment', approach: 'Provide supportive orientation', why: 'A calm, orienting environment with familiar cues supports a delirious client during the acute phase', keys: ['fluctuating confusion', 'worse in the evenings'], mistake: 'Providing an overstimulating or disorienting environment' }),
      O('b', 'Keep the room dark and quiet with no clocks, calendars, or familiar cues so that he is not overstimulated at all', -1,
        { r: 'Removing orienting cues can worsen delirium', approach: 'Remove-cues framing', why: 'Orienting cues help; removing them all can worsen disorientation', keys: ['orienting cues help'], mistake: 'Removing helpful orienting supports' }),
      O('c', 'Move him frequently between unfamiliar rooms and rotate staff often so that he gets used to change quickly', -2,
        { r: 'Frequent change worsens delirium', approach: 'Disruption framing', why: 'Frequent moves and staff changes tend to worsen delirium', keys: ['consistency helps'], mistake: 'Introducing destabilizing change' }),
      O('d', 'Leave the environment entirely to chance and treat it as having no bearing on his confusion at all', -1,
        { r: 'Ignoring the environment misses a lever', approach: 'Hands-off framing', why: 'The environment meaningfully affects delirium and is part of supportive care', keys: ['environment matters'], mistake: 'Ignoring a modifiable supportive factor' }),
    ]),
    Q('q8', 'treatment', 'How should the counselor coordinate with the medical team and family?', ['R4'], [
      O('a', 'Communicate the acute change urgently and, with appropriate consent, coordinate with the medical team and family', 3,
        { r: 'Urgent communication and consented coordination', approach: 'Coordinate the emergency appropriately', why: 'An acute change is communicated urgently and coordinated with the team and family with appropriate consent', keys: ['medical emergency', 'family involved'], mistake: 'Failing to communicate the acute change or disclosing without appropriate authority' }),
      O('b', 'Wait until the next scheduled team meeting to mention the change rather than communicating it urgently now', -2,
        { r: 'Delaying urgent communication is unsafe', approach: 'Delay framing', why: 'An acute delirium is communicated urgently, not deferred to a routine meeting', keys: ['urgent communication'], mistake: 'Delaying urgent communication of an emergency' }),
      O('c', 'Share none of the information with the medical team at all so that his counseling stays entirely separate', -2,
        { r: 'Withholding from the team is unsafe', approach: 'Siloed framing', why: 'The medical team needs the information to treat the emergency', keys: ['integrated emergency care'], mistake: 'Withholding safety-critical information' }),
      O('d', 'Tell the family nothing about the seriousness so that they do not become even more alarmed about his condition', -1,
        { r: 'Withholding the seriousness is inappropriate', approach: 'Withhold-information framing', why: 'The family needs accurate information about the seriousness to support care', keys: ['informed family'], mistake: 'Withholding important information from the family' }),
    ]),
    Q('q9', 'treatment', 'Once the acute delirium resolves, what should the plan include?', ['R5'], [
      O('a', 'Reassess cognition and mood at baseline and monitor for any residual or underlying condition over time', 3,
        { r: 'Reassess baseline and monitor', approach: 'Follow up after resolution', why: 'After delirium resolves, reassessing baseline cognition and mood and monitoring for underlying conditions guides follow-up', keys: ['acute change from baseline', 'possible underlying condition'], mistake: 'Assuming full recovery without reassessing baseline and monitoring' }),
      O('b', 'Assume he is completely back to normal and that no further assessment or monitoring is needed at all', -1,
        { r: 'Assuming full recovery skips follow-up', approach: 'Assume-recovery framing', why: 'Reassessment and monitoring are needed, not an assumption of full recovery', keys: ['follow-up needed'], mistake: 'Skipping needed follow-up' }),
      O('c', 'Continue treating him as though he is still acutely delirious indefinitely regardless of how he actually presents', -1,
        { r: 'Ignoring resolution is inaccurate', approach: 'Fixed-state framing', why: 'The plan follows his actual presentation, including resolution', keys: ['reassess accurately'], mistake: 'Ignoring the change in status' }),
      O('d', 'Discharge him from all care immediately upon resolution with no follow-up, monitoring, or coordinated plan at all', -1,
        { r: 'Abrupt discharge skips follow-up', approach: 'Abrupt-discharge framing', why: 'Coordinated follow-up, not abrupt discharge, is appropriate after delirium', keys: ['coordinated follow-up'], mistake: 'Discharging without follow-up' }),
    ]),
    Q('q10', 'counseling', 'During a lucid interval Frank becomes frightened and asks what is happening to him. The most therapeutic response is to:', ['R5'], [
      O('a', 'Respond calmly, reassure and orient him in simple terms, and explain that the team is finding the cause', 3,
        { r: 'Calm, simple reassurance and orientation', approach: 'Reassure and orient supportively', why: 'Calm, simple reassurance and orientation reduce fear for a frightened, delirious client in a lucid interval', keys: ['frightened', 'lucid interval'], mistake: 'Overwhelming him with complex information or dismissing his fear' }),
      O('b', 'Give him a detailed, technical explanation of every possible medical cause so that he understands it fully', -1,
        { r: 'Complex information overwhelms him', approach: 'Overload framing', why: 'A frightened, delirious client needs simple reassurance, not a technical lecture', keys: ['simple orientation'], mistake: 'Overwhelming him with detail' }),
      O('c', 'Tell him there is nothing at all to worry about and that everything is completely fine with him right now', -1,
        { r: 'False reassurance dismisses his fear', approach: 'Minimize framing', why: 'Honest, simple reassurance is better than false blanket reassurance', keys: ['honest reassurance'], mistake: 'Dismissing his fear with false reassurance' }),
      O('d', 'Leave the room rather than engaging with his fear so that he can calm down entirely on his own', -1,
        { r: 'Leaving him alone misses the moment', approach: 'Escape framing', why: 'Calm presence and orientation support him better than leaving him alone', keys: ['supportive presence'], mistake: 'Withdrawing when support is needed' }),
    ]),
    Q('q11', 'counseling', 'How can the counselor best support Frank’s family during the acute phase?', ['R5'], [
      O('a', 'Provide accurate psychoeducation about delirium, support their distress, and involve them in orienting him', 3,
        { r: 'Psychoeducation and family support', approach: 'Support and engage the family', why: 'Accurate psychoeducation about delirium and support for the family helps them cope and assist with orientation', keys: ['alarmed family', 'delirium is often reversible'], mistake: 'Leaving the family without information or support during a frightening episode' }),
      O('b', 'Tell the family the confusion is permanent and that he will certainly never recover from it at all', -2,
        { r: 'A false, bleak prognosis is harmful', approach: 'Catastrophize framing', why: 'Delirium is often reversible; a false permanent prognosis is inaccurate and harmful', keys: ['often reversible'], mistake: 'Communicating an inaccurate, bleak prognosis' }),
      O('c', 'Tell the family there is nothing to be concerned about at all so that they do not worry about his condition', -1,
        { r: 'Minimizing an emergency is inappropriate', approach: 'Minimize framing', why: 'Delirium is a serious medical emergency that should not be minimized to the family', keys: ['accurate seriousness'], mistake: 'Minimizing a genuine emergency' }),
      O('d', 'Avoid speaking with the family at all so that you can focus only on the client and the medical team', -1,
        { r: 'Excluding the family misses key support', approach: 'Exclusion framing', why: 'The family is an important support and needs information and involvement', keys: ['family support'], mistake: 'Leaving the family out entirely' }),
    ]),
    Q('q12', 'ethics', 'Staff ask the counselor to obtain the client’s consent for a procedure while he is acutely delirious. The most appropriate action is to:', ['R4'], [
      O('a', 'Recognize his capacity is impaired and defer to the appropriate surrogate and consent process, not his impaired consent', 3,
        { r: 'Use the surrogate/consent process, not impaired consent', approach: 'Apply capacity and consent standards', why: 'A delirious client lacks capacity for informed consent, so the appropriate surrogate and consent process applies', keys: ['acutely delirious', 'impaired attention and awareness'], mistake: 'Treating a delirious client’s consent as valid informed consent' }),
      O('b', 'Obtain his signature on the consent form right away, since he is technically able to hold the pen and sign it', -2,
        { r: 'A signature during delirium is not valid consent', approach: 'Signature framing', why: 'A signature obtained during delirium does not constitute valid informed consent', keys: ['capacity impaired'], mistake: 'Treating a signature as valid consent' }),
      O('c', 'Decide the procedure question yourself on his behalf without involving any surrogate or proper consent process', -2,
        { r: 'Deciding unilaterally is inappropriate', approach: 'Unilateral framing', why: 'The counselor does not substitute their own decision for the proper surrogate and consent process', keys: ['proper process'], mistake: 'Bypassing the appropriate consent process' }),
      O('d', 'Refuse to engage with the consent question at all and decline to help the team navigate the proper process', -1,
        { r: 'Refusing to help is unhelpful', approach: 'Stonewall framing', why: 'The counselor helps direct the team to the appropriate process rather than refusing to engage', keys: ['coordinate the process'], mistake: 'Declining to help with the appropriate process' }),
    ]),
    Q('q13', 'ethics', 'The counselor has limited training in acute neurocognitive emergencies. The most ethical course of action is to:', ['R4'], [
      O('a', 'Ensure urgent medical involvement, seek consultation, and coordinate rather than manage the emergency alone', 3,
        { r: 'Ensure medical involvement and coordinate', approach: 'Practice within competence', why: 'ACA C.2. and safety require ensuring urgent medical care and coordination for a delirium emergency', keys: ['limited training', 'medical emergency'], mistake: 'Attempting to manage an acute medical emergency alone without competence' }),
      O('b', 'Continue managing the case alone to preserve the continuity of the relationship built with him and his family', -2,
        { r: 'Going it alone in an emergency is unsafe', approach: 'Continuity-over-competence', why: 'Continuity does not justify managing a medical emergency beyond competence', keys: ['competence and safety'], mistake: 'Prioritizing continuity over safety' }),
      O('c', 'Tell the family the confusion is not serious enough to need urgent medical care and continue with supportive talks', -2,
        { r: 'Minimizing an emergency is dangerous', approach: 'Downplay framing', why: 'Delirium is a medical emergency that warrants urgent evaluation, not minimization', keys: ['urgent care'], mistake: 'Underestimating a medical emergency' }),
      O('d', 'Transfer the case at once with no explanation, communication with the medical team, or coordinated plan at all', -1,
        { r: 'Abrupt transfer mishandles an emergency', approach: 'Uncoordinated handoff', why: 'An emergency requires coordinated communication, not an abrupt, uncommunicated transfer', keys: ['coordinated response'], mistake: 'Dropping the case without coordination during an emergency' }),
    ]),
  ],
};

// ============================================================================
// D187 — Intellectual Developmental Disorder, Mild (F70) — Neurodevelopmental — hard
// ============================================================================
const D187 = {
  id: 'ncmhce-D187',
  title: 'Adaptive and intellectual limits identified since childhood',
  category: 'Neurodevelopmental',
  difficulty: 'hard',
  primaryDiagnosis: { name: 'Intellectual Developmental Disorder, Mild', code: 'F70' },
  diagnosis: { name: 'Intellectual Developmental Disorder, Mild', code: 'F70' },
  differentialOptions: [
    { id: 'do1', name: 'Intellectual Developmental Disorder, Mild', isCorrect: true },
    { id: 'do2', name: 'Specific Learning Disorder', isCorrect: false },
    { id: 'do3', name: 'Major Neurocognitive Disorder', isCorrect: false },
    { id: 'do4', name: 'Autism Spectrum Disorder', isCorrect: false },
  ],
  narrative: {
    intake:
      'Devon Pierce, a 19-year-old, is referred as he transitions from school services to adult support. He has documented deficits in intellectual ' +
      'functioning and in adaptive functioning across conceptual, social, and practical domains, with onset during the developmental period.',
    session1:
      'His limitations are global rather than confined to a single academic skill, and they have been present since childhood rather than reflecting ' +
      'a later decline from a prior level. He has reciprocal social interest and relationships, without the core social-communication deficits of autism.',
    session2:
      'He wants more independence and a job, and his parents are anxious about the transition and his safety. He is capable with support and has ' +
      'clear strengths, and at a low point he said he sometimes feels stupid and hopeless, without current plan or intent, and wants respect and a fuller life.',
  },
  diagnosticRationale:
    'Deficits in intellectual functions and in adaptive functioning across conceptual, social, and practical domains, with onset during the ' +
    'developmental period, at a level consistent with the mild specifier, meets DSM-5-TR criteria for intellectual developmental disorder—distinct ' +
    'from a specific learning disorder, a later-onset major neurocognitive disorder, and autism spectrum disorder.',
  references: [
    { id: 'R1', source: 'DSM-5-TR', detail: 'Intellectual developmental disorder: deficits in intellectual and adaptive functioning with developmental-period onset' },
    { id: 'R2', source: 'Hays (Assessment)', detail: 'Coordinating standardized intellectual and adaptive assessment and interpreting the profile' },
    { id: 'R3', source: 'NICE guidelines', detail: 'Learning (intellectual) disability: person-centered support, skills, and coordinated services' },
    { id: 'R4', source: 'ACA Code of Ethics', detail: 'A.1., B.5., and C.2.: client welfare, consent and capacity, autonomy, and competence' },
    { id: 'R5', source: 'Corey (Theory & Practice)', detail: 'Working alliance, strengths-based and person-centered practice, and collaborative goals' },
  ],
  questions: [
    Q('q1', 'intake', 'What is most important to confirm to support an intellectual developmental disorder diagnosis?', ['R1'], [
      O('a', 'Deficits in intellectual and adaptive functioning with onset during the developmental period', 3,
        { r: 'Intellectual and adaptive deficits, developmental onset', approach: 'Confirm the core criteria', why: 'Intellectual developmental disorder requires deficits in intellectual and adaptive functioning with developmental-period onset', keys: ['documented intellectual and adaptive deficits', 'present since childhood'], mistake: 'Diagnosing without confirming both domains and the developmental onset' }),
      O('b', 'That his parents can pinpoint the single event they are convinced first caused his difficulties', -1,
        { r: 'A precipitant is not the criterion', approach: 'Trigger framing', why: 'Etiology is not part of the criteria', keys: ['criteria-based diagnosis'], mistake: 'Using a trigger as the diagnostic test' }),
      O('c', 'That his functioning has slipped a little further over the past few days than it had the week before that', -1,
        { r: 'Recent change is not the criterion', approach: 'Recent-change framing', why: 'A developmental, stable pattern, not a recent change, defines it', keys: ['developmental pattern'], mistake: 'Confusing a brief change with the criteria' }),
      O('d', 'That he currently meets the full symptom count required for a discrete major depressive episode at this time', 0,
        { r: 'Depressive count does not define it', approach: 'Mood-criteria framing', why: 'Intellectual developmental disorder is a neurodevelopmental condition, not a mood episode', keys: ['neurodevelopmental diagnosis'], mistake: 'Applying depressive criteria here' }),
    ]),
    Q('q2', 'core', 'Which feature best differentiates his presentation from a specific learning disorder?', ['R1'], [
      O('a', 'His deficits are global across intellectual and adaptive domains, not limited to a single academic skill', 3,
        { r: 'Global deficits versus a specific skill', approach: 'Contrast global versus specific', why: 'A specific learning disorder affects a specific academic skill; his deficits are global across intellectual and adaptive domains', keys: ['global deficits', 'across conceptual, social, practical domains'], mistake: 'Reading global deficits as an isolated learning disorder' }),
      O('b', 'The fact that he has clear difficulty keeping up with academic and everyday tasks that others manage more easily', -1,
        { r: 'Difficulty with tasks occurs in both', approach: 'Difficulty framing', why: 'Difficulty with tasks occurs in both; the breadth of the deficits differs', keys: ['shared feature'], mistake: 'Using task difficulty to differentiate' }),
      O('c', 'The support and the extra help that he clearly needs to manage the demands of his daily life', -1,
        { r: 'Need for support occurs in both', approach: 'Support framing', why: 'Need for support occurs in both; the breadth of the deficits differs', keys: ['shared need'], mistake: 'Reading need for support as decisive' }),
      O('d', 'The way his performance tends to be a little better on the days when he has slept well the night before', 0,
        { r: 'Sleep effects are nonspecific', approach: 'Sleep framing', why: 'Better performance after good sleep does not differentiate them', keys: ['nonspecific factor'], mistake: 'Over-reading a sleep effect' }),
    ]),
    Q('q3', 'core', 'How does his presentation differ from a major neurocognitive disorder?', ['R1'], [
      O('a', 'His limitations have been present since childhood, not a later decline from a previously higher level', 3,
        { r: 'Developmental onset versus later decline', approach: 'Contrast onset and course', why: 'A major NCD is a decline from a prior level; his limitations are developmental and present since childhood', keys: ['present since childhood', 'no later decline'], mistake: 'Reading lifelong deficits as an acquired decline' }),
      O('b', 'The fact that he has difficulty with certain cognitive tasks that other people his age manage more readily', -1,
        { r: 'Cognitive difficulty occurs in both', approach: 'Cognition framing', why: 'Cognitive difficulty occurs in both; the onset and course differ', keys: ['shared feature'], mistake: 'Using cognitive difficulty to differentiate' }),
      O('c', 'The help he needs with some practical and conceptual tasks in his day-to-day life', -1,
        { r: 'Need for help is nonspecific', approach: 'Help framing', why: 'Need for help occurs in both; the onset and course differ', keys: ['shared need'], mistake: 'Reading need for help as decisive' }),
      O('d', 'The way his focus tends to be a little better on the calmer and less demanding days for him', 0,
        { r: 'Situational effects are nonspecific', approach: 'Situation framing', why: 'Better focus on calmer days does not differentiate them', keys: ['nonspecific factor'], mistake: 'Over-reading a situational effect' }),
    ]),
    Q('q4', 'core', 'How does his presentation differ from autism spectrum disorder?', ['R1'], [
      O('a', 'He has reciprocal social interest and relationships, without the core social-communication deficits of autism', 3,
        { r: 'Intact social reciprocity', approach: 'Contrast the social-communication profile', why: 'Autism involves core social-communication deficits; he has reciprocal social interest and relationships', keys: ['reciprocal social interest', 'has relationships'], mistake: 'Reading intellectual disability as autism without the social-communication deficits' }),
      O('b', 'The fact that he has difficulty with some conceptual and practical tasks that others manage more easily', -1,
        { r: 'Task difficulty occurs in both', approach: 'Difficulty framing', why: 'Task difficulty can occur in both; the social-communication profile differs', keys: ['shared feature'], mistake: 'Using task difficulty to differentiate' }),
      O('c', 'The support he needs to navigate some of the social and practical demands of adult life', -1,
        { r: 'Need for support occurs in both', approach: 'Support framing', why: 'Need for support occurs in both; the social-communication profile differs', keys: ['shared need'], mistake: 'Reading need for support as decisive' }),
      O('d', 'The way he seems a little more reserved on the days when his routine has been changed or disrupted', 0,
        { r: 'Routine effects are nonspecific', approach: 'Routine framing', why: 'A disrupted routine does not differentiate the two', keys: ['nonspecific factor'], mistake: 'Over-reading a routine effect' }),
    ]),
    Q('q5', 'intake', 'What is most useful to coordinate to support the assessment and planning?', ['R2'], [
      O('a', 'Standardized intellectual and adaptive assessment and records documenting the developmental profile', 3,
        { r: 'Standardized intellectual and adaptive assessment', approach: 'Coordinate formal evaluation', why: 'The diagnosis and planning rely on standardized intellectual and adaptive assessment and developmental records', keys: ['documented deficits', 'transition planning'], mistake: 'Concluding the diagnosis or plan without coordinating standardized assessment' }),
      O('b', 'A detailed family pedigree going back several generations to find relatives who also struggled in school', -1,
        { r: 'Extended pedigree is not the priority', approach: 'Pedigree framing', why: 'It does not document the intellectual and adaptive profile', keys: ['criteria-relevant data'], mistake: 'Gathering data that does not inform the diagnosis' }),
      O('c', 'Whether his difficulties can be traced to one specific school year that fully explains his entire profile', -1,
        { r: 'A single year is not the target', approach: 'Origin-hunting framing', why: 'The developmental profile, not a single year, is the basis', keys: ['developmental profile'], mistake: 'Hunting for an origin instead of the profile' }),
      O('d', 'His favorite hobbies and interests so that the sessions can be arranged around the activities he most enjoys', 0,
        { r: 'Interests are secondary', approach: 'Preference framing', why: 'Useful for rapport but not what supports the assessment', keys: ['secondary factor'], mistake: 'Prioritizing rapport detail over assessment' }),
    ]),
    Q('q6', 'treatment', 'What is the most appropriate counselor role in supporting Devon?', ['R3'], [
      O('a', 'Provide person-centered, strengths-based support and coordinate skills training and adult services for his goals', 3,
        { r: 'Person-centered support and service coordination', approach: 'Define the counselor role', why: 'The counselor provides strengths-based support and coordinates skills training and adult services toward his goals', keys: ['wants independence and a job', 'capable with support'], mistake: 'Focusing only on deficits instead of supporting strengths, skills, and services' }),
      O('b', 'Telling him and his parents that little can be done and that he should simply be cared for indefinitely', -2,
        { r: 'A hopeless, dependency framing is harmful', approach: 'Hopelessness framing', why: 'Person-centered support and skills can build independence; a hopeless framing abandons his goals', keys: ['capable with support'], mistake: 'Communicating unwarranted hopelessness' }),
      O('c', 'Focusing only on repeated academic drills and leaving adaptive skills, services, and his goals out of the plan', -1,
        { r: 'Drills-only misses the core needs', approach: 'Narrow-focus framing', why: 'Adaptive skills, services, and his goals are central, not academic drills alone', keys: ['comprehensive support'], mistake: 'Narrowing to drills' }),
      O('d', 'Starting him on a medication that you will select and adjust to improve his intellectual functioning yourself', -2,
        { r: 'Prescribing is outside counselor scope', approach: 'Prescribe medication', why: 'Counselors do not select or adjust medication, and medication does not treat intellectual functioning', keys: ['no prescriptive authority'], mistake: 'Acting outside scope of practice' }),
    ]),
    Q('q7', 'treatment', 'How should the counselor address his goals for independence and work?', ['R3'], [
      O('a', 'Support graded skill-building, coordinate vocational and community services, and honor his self-determination', 3,
        { r: 'Skill-building, services, and self-determination', approach: 'Support autonomy and skills', why: 'Graded skill-building, vocational and community services, and honoring his self-determination support his independence goals', keys: ['wants a job', 'wants respect and a fuller life'], mistake: 'Deciding his future for him rather than supporting his self-determined goals with services' }),
      O('b', 'Telling him that independence and work are not realistic for him and that he should not pursue them at all', -2,
        { r: 'Dismissing his goals is harmful', approach: 'Dismiss-goals framing', why: 'With support many such goals are achievable; dismissing them undermines his self-determination', keys: ['self-determination'], mistake: 'Foreclosing his goals' }),
      O('c', 'Having his parents make all of his decisions about work and living without involving him in the planning at all', -1,
        { r: 'Excluding him removes his autonomy', approach: 'Exclusion framing', why: 'He is included in planning to the extent of his capacity, not sidelined', keys: ['include the client'], mistake: 'Removing his autonomy' }),
      O('d', 'Focusing only on what he cannot do so that he develops a realistic and appropriately limited view of himself', -1,
        { r: 'Deficit-only focus is not the approach', approach: 'Deficit-focus framing', why: 'A strengths-based approach, not a deficit-only focus, supports his goals', keys: ['strengths-based'], mistake: 'Centering on deficits' }),
    ]),
    Q('q8', 'treatment', 'How should progress be tracked over the course of support?', ['R5'], [
      O('a', 'Track adaptive skills, goal attainment, well-being, and service engagement over time to guide the plan', 3,
        { r: 'Measurement-based tracking of skills and goals', approach: 'Monitor the relevant outcomes', why: 'Tracking adaptive skills, goal attainment, well-being, and service engagement steers the person-centered plan', keys: ['skills and independence goals', 'transition to adult services'], mistake: 'Proceeding without tracking skills and goal attainment' }),
      O('b', 'Rely only on whether his parents happen to mention that he seems to be doing a little better than before', -1,
        { r: 'Anecdote alone is insufficient', approach: 'Anecdotal framing', why: 'Systematic tracking is more reliable than passing impressions', keys: ['structured measurement'], mistake: 'Substituting anecdote for measurement' }),
      O('c', 'Track only his IQ score and base every decision about his support solely on that single number', -1,
        { r: 'IQ alone is too narrow', approach: 'Single-metric framing', why: 'Adaptive skills and goals, not IQ alone, guide person-centered support', keys: ['adaptive focus'], mistake: 'Reducing planning to one number' }),
      O('d', 'Wait until the end of the year to review whether anything has changed at all since the first session', -1,
        { r: 'End-only review misses steering data', approach: 'Delayed-review framing', why: 'Ongoing tracking is needed to steer the support', keys: ['continuous monitoring'], mistake: 'Deferring all measurement to the end' }),
    ]),
    Q('q9', 'treatment', 'How should the counselor coordinate with the adult service system and family?', ['R4'], [
      O('a', 'With appropriate consent, coordinate adult services and family support while keeping Devon central to planning', 3,
        { r: 'Coordinate services with consent, client central', approach: 'Coordinate within consent and autonomy', why: 'Coordinating adult services and family support with consent, while keeping him central, supports the transition', keys: ['transition to adult services', 'anxious parents'], mistake: 'Coordinating over his head or without appropriate consent' }),
      O('b', 'Share his full clinical details with any agency that asks, since they are clearly entitled to everything anyway', -2,
        { r: 'Disclosing without consideration over-discloses', approach: 'Over-disclosure framing', why: 'Disclosure follows consent and minimum-necessary limits even within a service system', keys: ['minimum necessary'], mistake: 'Releasing more than is appropriate' }),
      O('c', 'Avoid contacting the adult service system at all so that his counseling stays entirely separate from services', -1,
        { r: 'No coordination undercuts the transition', approach: 'Siloed framing', why: 'Consented coordination is central to a successful transition', keys: ['integrated services'], mistake: 'Refusing helpful, consented coordination' }),
      O('d', 'Defer entirely to the agencies on all decisions and simply carry out whatever they instruct without question', -1,
        { r: 'Abdicating judgment is inappropriate', approach: 'Defer-entirely framing', why: 'The counselor collaborates while retaining independent clinical judgment and the client’s voice', keys: ['clinical responsibility'], mistake: 'Surrendering judgment to the system' }),
    ]),
    Q('q10', 'counseling', 'Devon says he sometimes feels "stupid" and hopeless. The most therapeutic response is to:', ['R5'], [
      O('a', 'Validate his feelings, affirm his strengths and worth, and monitor his mood and safety supportively', 3,
        { r: 'Validate, affirm strengths, monitor safety', approach: 'Support dignity and screen safety', why: 'Validating his feelings, affirming his strengths, and monitoring safety supports his dignity and well-being', keys: ['feels stupid and hopeless', 'wants respect'], mistake: 'Either minimizing his feelings or failing to monitor his mood and safety' }),
      O('b', 'Agree that he probably is not very capable so that he develops a realistic view of his limitations', -2,
        { r: 'Endorsing the self-label is harmful', approach: 'Endorse-label framing', why: 'Agreeing he is not capable reinforces shame and ignores his strengths', keys: ['affirm strengths'], mistake: 'Reinforcing a harmful self-view' }),
      O('c', 'Tell him he simply should not feel that way and that there is no reason at all for him to be upset about it', -1,
        { r: 'Dismissing the feeling invalidates him', approach: 'Minimize framing', why: 'Telling him not to feel that way dismisses a valid emotion', keys: ['validate then support'], mistake: 'Minimizing a central feeling' }),
      O('d', 'Change the subject to something more positive so that he does not have to sit with the difficult feelings at all', -1,
        { r: 'Avoiding the feeling misses the work', approach: 'Avoidant framing', why: 'His feelings can be engaged and his safety monitored, not avoided', keys: ['engage and monitor'], mistake: 'Sidestepping a meaningful moment' }),
    ]),
    Q('q11', 'counseling', 'How can the counselor best engage Devon in the work?', ['R5'], [
      O('a', 'Use clear, respectful, developmentally appropriate communication that builds on his strengths and choices', 3,
        { r: 'Clear, respectful, strengths-based communication', approach: 'Engage him respectfully and accessibly', why: 'Clear, respectful, accessible communication that builds on his strengths and choices engages him and honors his dignity', keys: ['wants respect', 'capable with support'], mistake: 'Talking down to him or over his head rather than communicating clearly and respectfully' }),
      O('b', 'Speak only to his parents and about him as though he cannot understand or participate in his own care', -2,
        { r: 'Talking past him undermines dignity', approach: 'Exclusion framing', why: 'Ignoring him in the room undermines his dignity and autonomy', keys: ['include the client'], mistake: 'Excluding the client from his own care' }),
      O('c', 'Use complex, abstract language and technical terms so that he becomes accustomed to adult-level discussion', -1,
        { r: 'Inaccessible language does not fit', approach: 'Complexity framing', why: 'Clear, accessible communication, not complex jargon, engages him effectively', keys: ['accessible communication'], mistake: 'Using inaccessible language' }),
      O('d', 'Tell him he must reach a certain level of functioning before any of the counseling work with him can begin', -1,
        { r: 'Setting a precondition stalls engagement', approach: 'Precondition framing', why: 'Person-centered work begins now, not after he reaches some threshold', keys: ['engage now'], mistake: 'Setting a functioning precondition' }),
    ]),
    Q('q12', 'ethics', 'Devon wants to make his own decision about a job, but his parents want to decide for him. The most appropriate action is to:', ['R4'], [
      O('a', 'Support his decision-making to the extent of his capacity and use supported decision-making with the family', 3,
        { r: 'Supported decision-making within capacity', approach: 'Respect autonomy with support', why: 'Honoring his decision-making to the extent of his capacity, with supported decision-making, respects autonomy', keys: ['wants to decide about a job', 'parents want to decide'], mistake: 'Automatically overriding his autonomy in favor of the parents’ preference' }),
      O('b', 'Let his parents make every decision for him regardless of what he is actually capable of deciding himself', -2,
        { r: 'Removing autonomy wholesale is inappropriate', approach: 'Global-surrogate framing', why: 'Capacity is decision-specific; wholesale removal of his autonomy is not justified', keys: ['decision-specific capacity'], mistake: 'Removing autonomy without assessing capacity' }),
      O('c', 'Insist he make every decision entirely alone with no support at all, regardless of any genuine safety concern', -1,
        { r: 'Ignoring support needs is not the answer', approach: 'Absolute-autonomy framing', why: 'Supported decision-making, not unsupported independence, balances autonomy and safety', keys: ['supported decision-making'], mistake: 'Disregarding genuine support needs' }),
      O('d', 'Refuse to engage with the disagreement at all and decline to help the family navigate the decision', -1,
        { r: 'Avoiding the issue is unhelpful', approach: 'Avoidant framing', why: 'The counselor helps facilitate supported decision-making rather than refusing to engage', keys: ['facilitate the process'], mistake: 'Declining to help with a central issue' }),
    ]),
    Q('q13', 'ethics', 'The counselor has limited training in intellectual disability. The most ethical course of action is to:', ['R4'], [
      O('a', 'Seek consultation and training, and coordinate or refer for the components beyond your competence', 3,
        { r: 'Consult, train, or refer within competence', approach: 'Practice within competence', why: 'ACA C.2. requires competence; supporting intellectual disability may need consultation, training, or referral', keys: ['limited training', 'complex transition case'], mistake: 'Managing a complex intellectual-disability case alone without competence' }),
      O('b', 'Continue managing the case alone to preserve the continuity of the relationship built with him and his family', -2,
        { r: 'Going it alone exceeds competence', approach: 'Continuity-over-competence', why: 'Continuity does not justify exceeding competence', keys: ['competence exceeded'], mistake: 'Prioritizing continuity over competence' }),
      O('c', 'Tell the family his needs are not significant enough to need specialized services and continue with general talks only', -2,
        { r: 'Minimizing the needs fails the client', approach: 'Downplay framing', why: 'His transition and support needs warrant competent, coordinated services', keys: ['service needs'], mistake: 'Underestimating the need for services' }),
      O('d', 'Transfer the case at once to another provider with no explanation, consultation, or coordinated plan for the transition', -1,
        { r: 'Abrupt transfer mishandles continuity', approach: 'Uncoordinated handoff', why: 'A coordinated referral, not an abrupt transfer, is appropriate', keys: ['coordinated transition'], mistake: 'Dropping the case without coordination' }),
    ]),
  ],
};

// ============================================================================
// D188 — Female Sexual Interest/Arousal Disorder (F52.22) — Sexual-Gender — medium
// ============================================================================
const D188 = {
  id: 'ncmhce-D188',
  title: 'Persistently low sexual interest and arousal causing distress',
  category: 'Sexual-Gender',
  difficulty: 'medium',
  primaryDiagnosis: { name: 'Female Sexual Interest/Arousal Disorder', code: 'F52.22' },
  diagnosis: { name: 'Female Sexual Interest/Arousal Disorder', code: 'F52.22' },
  differentialOptions: [
    { id: 'do1', name: 'Female Sexual Interest/Arousal Disorder', isCorrect: true },
    { id: 'do2', name: 'Major Depressive Disorder', isCorrect: false },
    { id: 'do3', name: 'Substance/Medication-Induced Sexual Dysfunction', isCorrect: false },
    { id: 'do4', name: 'Relationship Distress (V-code)', isCorrect: false },
  ],
  narrative: {
    intake:
      'Renata Alvarez, a 41-year-old teacher, seeks help for about eight months of markedly reduced sexual interest and arousal that causes her ' +
      'significant distress. She reports reduced desire, few sexual thoughts, and reduced arousal during activity, and she feels distant from her partner.',
    session1:
      'The reduced interest and arousal are persistent, occur across situations, and have lasted well beyond the six-month threshold with clinically ' +
      'significant distress. She denies that a primary depressive episode is the driver, and the difficulty is not simply due to relationship conflict alone.',
    session2:
      'She is not taking a medication that would explain the change and a medical evaluation is underway, and she is embarrassed but motivated. She ' +
      'wants to understand what is happening and restore intimacy, and she denies that the problem is only a reaction to a specific relationship stressor.',
  },
  diagnosticRationale:
    'A lack of or significantly reduced sexual interest and arousal, persistent for at least six months and causing clinically significant ' +
    'distress, not better explained by a nonsexual mental disorder, a substance or medication, or relationship distress alone, meets DSM-5-TR ' +
    'criteria for female sexual interest/arousal disorder, distinct from depression, a substance/medication-induced dysfunction, and relationship distress.',
  references: [
    { id: 'R1', source: 'DSM-5-TR', detail: 'Female sexual interest/arousal disorder: reduced interest/arousal, 6+ months, distress; not solely another cause' },
    { id: 'R2', source: 'NICE guidelines', detail: 'Sexual dysfunction: medical evaluation plus psychological/psychosexual therapy within coordinated care' },
    { id: 'R3', source: 'C-SSRS', detail: 'Structured suicide-risk screening when distress and relationship strain co-occur' },
    { id: 'R4', source: 'ACA Code of Ethics', detail: 'A.1. and C.2.: client welfare, coordination of care, and practicing within competence' },
    { id: 'R5', source: 'Corey (Theory & Practice)', detail: 'Working alliance, collaborative goal setting, and culturally sensitive practice' },
  ],
  questions: [
    Q('q1', 'intake', 'What is most important to confirm to support this diagnosis?', ['R1'], [
      O('a', 'Persistently reduced sexual interest and arousal for at least six months that causes clinically significant distress', 3,
        { r: 'Reduced interest/arousal over six months with distress', approach: 'Confirm the core criteria', why: 'The disorder requires reduced interest/arousal for 6+ months causing clinically significant distress', keys: ['eight months of reduced interest and arousal', 'significant distress'], mistake: 'Diagnosing without confirming the duration, persistence, and distress' }),
      O('b', 'That she can pinpoint the single event she is convinced first caused her reduced sexual interest', -1,
        { r: 'A precipitant is not the criterion', approach: 'Trigger framing', why: 'Etiology is not part of the criteria', keys: ['criteria-based diagnosis'], mistake: 'Using a trigger as the diagnostic test' }),
      O('c', 'That her interest has dropped a little further over the past few days than it had the week just before that', -1,
        { r: 'Recent change is not the criterion', approach: 'Recent-change framing', why: 'The persistent pattern, not a recent dip, defines it', keys: ['persistent pattern'], mistake: 'Confusing a brief change with the criteria' }),
      O('d', 'That she currently meets the full symptom count required for a discrete major depressive episode at this time', 0,
        { r: 'Depressive count does not define it', approach: 'Mood-criteria framing', why: 'The disorder is a sexual dysfunction, not a mood episode', keys: ['sexual-function diagnosis'], mistake: 'Applying depressive criteria here' }),
    ]),
    Q('q2', 'core', 'Which feature best differentiates her presentation from a primary depressive disorder?', ['R1'], [
      O('a', 'The reduced interest and arousal is the primary problem and she denies a depressive episode as its driver', 3,
        { r: 'Primary sexual dysfunction, not mood-driven', approach: 'Contrast the primary driver', why: 'Depression can reduce libido as part of a mood episode; her reduced interest is the primary problem without a mood driver', keys: ['denies a depressive episode', 'sexual difficulty is the main issue'], mistake: 'Assuming reduced libido always reflects depression' }),
      O('b', 'The fact that she feels distressed and discouraged about the changes she has noticed in her intimate life', -1,
        { r: 'Distress is nonspecific', approach: 'Distress framing', why: 'Distress can occur in both; the primary driver differs', keys: ['shared feature'], mistake: 'Using distress to differentiate' }),
      O('c', 'The sense of distance from her partner that has accompanied the changes in her sexual interest', -1,
        { r: 'Relational distance is nonspecific', approach: 'Distance framing', why: 'Relational distance can occur in both; the primary driver differs', keys: ['shared experience'], mistake: 'Reading distance as decisive' }),
      O('d', 'The way her interest tends to feel a little lower during the busiest and most stressful weeks at her job', 0,
        { r: 'Stress reactivity is nonspecific', approach: 'Stress framing', why: 'Worsening under stress does not differentiate them', keys: ['nonspecific reactivity'], mistake: 'Using stress sensitivity to differentiate' }),
    ]),
    Q('q3', 'core', 'How does her presentation differ from a substance/medication-induced sexual dysfunction?', ['R1'], [
      O('a', 'Her difficulty is not explained by a substance or medication she is taking, unlike a medication-induced dysfunction', 3,
        { r: 'Not attributable to a substance or medication', approach: 'Contrast on the cause', why: 'A medication-induced dysfunction is caused by a substance or medication; hers is not attributable to one', keys: ['not taking a relevant medication', 'no substance cause'], mistake: 'Overlooking or wrongly assuming a substance/medication cause' }),
      O('b', 'The fact that she has noticed a real change in her sexual interest and arousal over recent months', -1,
        { r: 'Reduced interest occurs in both', approach: 'Interest framing', why: 'Reduced interest can occur in both; the cause differs', keys: ['shared feature'], mistake: 'Using reduced interest to differentiate' }),
      O('c', 'The distress and the concern that she feels about the changes she has been experiencing', -1,
        { r: 'Distress is nonspecific', approach: 'Distress framing', why: 'Distress can occur in both; the cause differs', keys: ['shared affect'], mistake: 'Reading distress as decisive' }),
      O('d', 'The way her interest tends to be a little lower on the days when she has slept poorly the night before', 0,
        { r: 'Sleep effects are nonspecific', approach: 'Sleep framing', why: 'Lower interest after poor sleep does not differentiate them', keys: ['nonspecific factor'], mistake: 'Over-reading a sleep effect' }),
    ]),
    Q('q4', 'core', 'How does her presentation differ from relationship distress alone?', ['R1'], [
      O('a', 'The reduced interest and arousal persist across situations, not solely as a reaction to a specific relationship conflict', 3,
        { r: 'Pervasive, not solely relationship-driven', approach: 'Contrast the breadth and cause', why: 'Relationship distress alone would be tied to the conflict; hers persists across situations beyond a specific conflict', keys: ['occurs across situations', 'not simply due to conflict'], mistake: 'Attributing a pervasive sexual dysfunction solely to relationship conflict' }),
      O('b', 'The fact that she has felt some distance and tension in her relationship with her partner recently', -1,
        { r: 'Relationship strain can occur in both', approach: 'Strain framing', why: 'Relationship strain can occur in both; the breadth and cause differ', keys: ['shared feature'], mistake: 'Using relationship strain to differentiate' }),
      O('c', 'The distress she feels about the effect of the changes on her intimate relationship', -1,
        { r: 'Relational distress is nonspecific', approach: 'Distress framing', why: 'Relational distress can occur in both; the breadth differs', keys: ['shared distress'], mistake: 'Reading relational distress as decisive' }),
      O('d', 'The way her interest tends to be a little lower during the busiest and most demanding weeks of her school term', 0,
        { r: 'Stress reactivity is nonspecific', approach: 'Stress framing', why: 'Lower interest under stress does not differentiate them', keys: ['nonspecific reactivity'], mistake: 'Using stress sensitivity to differentiate' }),
    ]),
    Q('q5', 'intake', 'What is most important to coordinate given her presentation?', ['R2'], [
      O('a', 'Coordinate with her medical provider so the physical evaluation and psychological care proceed together', 3,
        { r: 'Coordinate medical and psychological care', approach: 'Partner with medical care', why: 'The disorder is managed with coordinated medical evaluation and psychological/psychosexual therapy', keys: ['medical evaluation underway', 'wants to restore intimacy'], mistake: 'Providing psychological care in isolation from the medical evaluation' }),
      O('b', 'Recommend a specific hormone or medication and dose for her to start yourself before her next appointment', -2,
        { r: 'Recommending a drug and dose exceeds scope', approach: 'Prescribe-by-proxy framing', why: 'Counselors do not recommend specific drugs or doses', keys: ['no prescriptive authority'], mistake: 'Making a prescribing recommendation' }),
      O('c', 'A previously undetected primary psychotic disorder that might better account for her reduced sexual interest', -1,
        { r: 'Psychosis is not indicated', approach: 'Psychosis framing', why: 'Nothing suggests a psychotic process', keys: ['intact reality testing'], mistake: 'Pursuing an unsupported rule-out' }),
      O('d', 'An emerging neurocognitive decline that could account for why her sexual interest has changed lately', 0,
        { r: 'Cognitive decline is improbable here', approach: 'Neurocognitive framing', why: 'The sexual-function pattern fits the disorder, not decline', keys: ['sexual-function focus'], mistake: 'Pursuing an improbable rule-out' }),
    ]),
    Q('q6', 'treatment', 'What is the most appropriate first-line approach for Renata within counseling?', ['R2'], [
      O('a', 'Psychosexual therapy addressing interest, arousal, and intimacy, coordinated with the medical evaluation', 3,
        { r: 'Psychosexual therapy plus medical coordination', approach: 'Apply the guideline within scope', why: 'The disorder is treated with psychosexual therapy addressing interest, arousal, and intimacy, coordinated with medical care', keys: ['reduced interest and arousal', 'wants to restore intimacy'], mistake: 'Offering only general talk without addressing the sexual concern or coordinating medical care' }),
      O('b', 'Telling her she simply needs to try harder to be interested, since the difficulty is entirely about willpower', -2,
        { r: 'Willpower framing is inaccurate and shaming', approach: 'Willpower framing', why: 'Framing reduced interest as willpower ignores the disorder and the medical component', keys: ['evidence-based care'], mistake: 'Dismissing the disorder as willpower' }),
      O('c', 'Focusing only on her individual symptoms and excluding her partner and the intimacy from the plan entirely', -1,
        { r: 'Excluding the couple narrows the plan', approach: 'Individual-only framing', why: 'The couple’s intimacy is central to the plan, not just individual symptoms', keys: ['relationship focus'], mistake: 'Leaving the relational component out' }),
      O('d', 'Starting her on a medication that you will select and adjust over the coming weeks yourself', -2,
        { r: 'Prescribing is outside counselor scope', approach: 'Prescribe medication', why: 'Counselors do not select or adjust medication', keys: ['no prescriptive authority'], mistake: 'Acting outside scope of practice' }),
    ]),
    Q('q7', 'treatment', 'How should the counselor approach the sexual concern in the work?', ['R5'], [
      O('a', 'Use a validating, psychoeducational approach that reduces shame and rebuilds intimacy at a comfortable pace', 3,
        { r: 'Validating, psychoeducational, paced approach', approach: 'Reduce shame and rebuild intimacy', why: 'A validating, psychoeducational approach that reduces shame and rebuilds intimacy addresses the concern effectively', keys: ['embarrassed but motivated', 'feels distant from her partner'], mistake: 'Increasing pressure to perform or shaming her about the difficulty' }),
      O('b', 'Pressure her to resume frequent sexual activity right away regardless of her interest or comfort level', -2,
        { r: 'Pressure worsens the difficulty', approach: 'Pressure framing', why: 'Pressuring performance heightens distress and worsens the difficulty', keys: ['reduce pressure'], mistake: 'Increasing performance pressure' }),
      O('c', 'Tell her to simply avoid all sexual activity indefinitely so that she never has to face the difficulty at all', -1,
        { r: 'Endorsing avoidance maintains the problem', approach: 'Avoidance framing', why: 'Avoiding intimacy maintains the difficulty rather than treating it', keys: ['rebuild intimacy'], mistake: 'Reinforcing avoidance' }),
      O('d', 'Avoid discussing the sexual concern entirely so that the sessions never touch on anything uncomfortable', -1,
        { r: 'Avoiding the concern misses the work', approach: 'Avoidant framing', why: 'The sexual concern is central to address, not avoid', keys: ['engage the concern'], mistake: 'Sidestepping the central issue' }),
    ]),
    Q('q8', 'treatment', 'How should progress be tracked over the course of treatment?', ['R5'], [
      O('a', 'Track sexual interest/arousal, distress, intimacy, and relationship satisfaction over time to guide the plan', 3,
        { r: 'Measurement-based tracking of function and intimacy', approach: 'Monitor the relevant outcomes', why: 'Tracking interest/arousal, distress, intimacy, and relationship satisfaction steers the plan', keys: ['reduced interest', 'relationship distance'], mistake: 'Proceeding without tracking the relevant outcomes' }),
      O('b', 'Rely only on whether she happens to mention in session that things feel a little better than before', -1,
        { r: 'Anecdote alone is insufficient', approach: 'Anecdotal framing', why: 'Systematic tracking is more reliable than passing impressions', keys: ['structured measurement'], mistake: 'Substituting anecdote for measurement' }),
      O('c', 'Track only the frequency of sexual activity and base every decision solely on that single number', -1,
        { r: 'Frequency alone is too narrow', approach: 'Single-metric framing', why: 'Interest, distress, and intimacy all inform the plan, not frequency alone', keys: ['multidimensional monitoring'], mistake: 'Reducing monitoring to one number' }),
      O('d', 'Wait until the end of treatment to review whether her interest has changed at all since the first session', -1,
        { r: 'End-only review misses steering data', approach: 'Delayed-review framing', why: 'Ongoing tracking is needed to steer the work', keys: ['continuous monitoring'], mistake: 'Deferring all measurement to the end' }),
    ]),
    Q('q9', 'treatment', 'How should the counselor involve her partner in the work?', ['R4'], [
      O('a', 'With her consent, consider couple-based work on communication and intimacy with appropriate agreements', 3,
        { r: 'Couple work with consent and clear agreements', approach: 'Involve the partner appropriately', why: 'Partner-involved work on intimacy, with consent and clear agreements, supports treatment of the disorder', keys: ['feels distant from her partner', 'wants to restore intimacy'], mistake: 'Involving the partner without consent or role clarity' }),
      O('b', 'Bring her partner into every individual session right away without discussing it or obtaining her consent at all', -2,
        { r: 'Involving the partner without consent breaches confidentiality', approach: 'Assume-consent framing', why: 'The partner cannot be included without her informed consent', keys: ['no consent'], mistake: 'Disregarding consent and confidentiality' }),
      O('c', 'Tell her the relationship is not relevant and keep the work focused only on her individual symptoms', -1,
        { r: 'Excluding the relationship narrows the plan', approach: 'Individual-only framing', why: 'The couple’s intimacy is central to the plan, not just individual symptoms', keys: ['relational component'], mistake: 'Leaving the relationship out' }),
      O('d', 'Refuse any contact with the partner under all circumstances, even where she requests and consents to couple sessions', -1,
        { r: 'Blanket refusal ignores her wishes', approach: 'Absolute-refusal framing', why: 'Consented couple work can be appropriate when she chooses it', keys: ['client choice'], mistake: 'Ruling out a consented, indicated option' }),
    ]),
    Q('q10', 'counseling', 'Renata is embarrassed and worries the difficulty means something is "wrong with her." The most therapeutic response is to:', ['R5'], [
      O('a', 'Respond with a calm, normalizing, nonjudgmental stance and reassure her the difficulty is common and treatable', 3,
        { r: 'Calm, normalizing, nonjudgmental stance', approach: 'Reduce shame and instill hope', why: 'A calm, normalizing stance that frames the difficulty as common and treatable reduces shame and supports engagement', keys: ['embarrassed', 'worries something is wrong with her'], mistake: 'Reacting awkwardly or reinforcing the sense that something is wrong with her' }),
      O('b', 'Agree that something probably is wrong with her so that she takes the difficulty seriously enough to change', -2,
        { r: 'Endorsing the self-judgment is harmful', approach: 'Endorse-defect framing', why: 'Confirming that something is wrong with her deepens shame', keys: ['reframe supportively'], mistake: 'Validating a harmful self-belief' }),
      O('c', 'Tell her there is no reason to be embarrassed and quickly move on so she does not feel uncomfortable at all', -1,
        { r: 'Rushing past it misses the work', approach: 'Minimize framing', why: 'Quickly moving past it can leave her feeling unheard; a safe, paced approach is better', keys: ['create safety'], mistake: 'Rushing past a sensitive topic' }),
      O('d', 'Change the subject to a lighter topic so that she does not have to sit with the difficult feelings at all', -1,
        { r: 'Avoiding the feeling misses the work', approach: 'Avoidant framing', why: 'Her feelings can be engaged and normalized, not avoided', keys: ['engage the feeling'], mistake: 'Sidestepping a meaningful moment' }),
    ]),
    Q('q11', 'counseling', 'How can the counselor best support Renata’s engagement and hope?', ['R5'], [
      O('a', 'Frame the difficulty as common and treatable, anchor the work in her goals, and reinforce her motivation', 3,
        { r: 'Normalize, anchor in goals, reinforce motivation', approach: 'Instill hope and engage her goals', why: 'Framing the difficulty as treatable and tying the work to her goals sustains engagement and hope', keys: ['motivated', 'wants to restore intimacy'], mistake: 'Framing the difficulty as hopeless or as a personal failing' }),
      O('b', 'Tell her this kind of difficulty usually cannot be improved and that she should simply accept it as it is', -2,
        { r: 'Endorsing hopelessness is harmful', approach: 'Hopelessness framing', why: 'Implying it cannot improve undermines motivation and is inaccurate', keys: ['instill hope'], mistake: 'Communicating hopelessness' }),
      O('c', 'Focus the sessions mainly on detailing every unsatisfying encounter in exhaustive detail every single week', -1,
        { r: 'Cataloguing encounters is not the work', approach: 'Catalogue framing', why: 'Dwelling on unsatisfying encounters heightens distress rather than advancing the goals', keys: ['goal focus'], mistake: 'Centering sessions on the encounters' }),
      O('d', 'Tell her counseling cannot help her at all unless she first starts a specific medication right away', -1,
        { r: 'Conditioning care is inappropriate', approach: 'Conditioning framing', why: 'Psychological work proceeds alongside any coordinated medication decision', keys: ['engagement matters'], mistake: 'Making counseling contingent on medication' }),
    ]),
    Q('q12', 'ethics', 'Renata asks the counselor to keep the diagnosis out of records her insurer could access. The most appropriate action is to:', ['R4'], [
      O('a', 'Clarify confidentiality and the limits of any release, sharing only what she consents to and what is needed', 3,
        { r: 'Honor consent and minimum-necessary disclosure', approach: 'Apply consent and minimum necessary', why: 'Disclosures to third parties are governed by her informed consent and minimum-necessary limits', keys: ['adult client', 'wants diagnosis withheld from insurer'], mistake: 'Disclosing more than she consents to or than is necessary' }),
      O('b', 'Send her full clinical record, including the diagnosis, to the insurer right away since they may need it anyway', -2,
        { r: 'Sending everything ignores consent', approach: 'Over-disclosure framing', why: 'Third-party disclosure requires consent and minimum-necessary limits', keys: ['minimum necessary'], mistake: 'Over-disclosing without consent' }),
      O('c', 'Falsify the record to remove the diagnosis entirely so that there is no chance the insurer could ever see it', -2,
        { r: 'Falsifying records is unethical', approach: 'Falsify framing', why: 'Altering the clinical record to hide a diagnosis violates professional honesty', keys: ['accurate records'], mistake: 'Falsifying documentation' }),
      O('d', 'Refuse to discuss the confidentiality question at all and simply change the subject whenever she raises it', -1,
        { r: 'Avoiding the issue is unhelpful', approach: 'Avoidant framing', why: 'Confidentiality should be explained, not avoided', keys: ['transparent limits'], mistake: 'Sidestepping a needed conversation' }),
    ]),
    Q('q13', 'ethics', 'The counselor has limited training in sexual dysfunctions. The most ethical course of action is to:', ['R4'], [
      O('a', 'Seek consultation and training, and coordinate or refer for the components beyond your competence', 3,
        { r: 'Consult, train, or refer within competence', approach: 'Practice within competence', why: 'ACA C.2. requires competence; psychosexual care may need consultation, training, or referral', keys: ['limited psychosexual training', 'coordinated medical case'], mistake: 'Providing specialized psychosexual care without the required competence' }),
      O('b', 'Continue managing the case alone to preserve the continuity of the relationship built with her', -2,
        { r: 'Going it alone exceeds competence', approach: 'Continuity-over-competence', why: 'Continuity does not justify exceeding competence', keys: ['competence exceeded'], mistake: 'Prioritizing continuity over competence' }),
      O('c', 'Tell her the difficulty is not serious enough to need specialized help and continue with general talks only', -2,
        { r: 'Minimizing the problem fails the client', approach: 'Downplay framing', why: 'A distressing sexual dysfunction warrants competent, coordinated care', keys: ['real distress'], mistake: 'Underestimating the need for specialized care' }),
      O('d', 'Transfer her at once to another provider with no explanation, consultation, or coordinated plan for the transition', -1,
        { r: 'Abrupt transfer mishandles continuity', approach: 'Uncoordinated handoff', why: 'A coordinated referral, not an abrupt transfer, is appropriate', keys: ['coordinated transition'], mistake: 'Dropping the client without coordination' }),
    ]),
  ],
};

// ============================================================================
// D189 — Factitious Disorder (F68.10) — Somatic — hard
// ============================================================================
const D189 = {
  id: 'ncmhce-D189',
  title: 'Falsified symptoms and self-induced illness without external reward',
  category: 'Somatic',
  difficulty: 'hard',
  primaryDiagnosis: { name: 'Factitious Disorder', code: 'F68.10' },
  diagnosis: { name: 'Factitious Disorder', code: 'F68.10' },
  differentialOptions: [
    { id: 'do1', name: 'Factitious Disorder', isCorrect: true },
    { id: 'do2', name: 'Somatic Symptom Disorder', isCorrect: false },
    { id: 'do3', name: 'Malingering (V-code)', isCorrect: false },
    { id: 'do4', name: 'Functional Neurological Symptom Disorder', isCorrect: false },
  ],
  narrative: {
    intake:
      'Colin Ward, a 34-year-old, is referred by a hospital team concerned about a pattern of falsified symptoms. Records show he has intentionally ' +
      'produced and exaggerated symptoms and undergone many procedures, presenting himself as ill in the apparent absence of any obvious external reward.',
    session1:
      'The deception is intentional, distinguishing it from a functional or somatic symptom disorder, yet there is no clear external incentive such ' +
      'as money, drugs, or avoiding legal responsibility, which distinguishes it from malingering. The behavior is longstanding and has led to real medical harm.',
    session2:
      'The team is frustrated and unsure how to proceed, and confronting him previously led to his abrupt departure against advice. He is guarded ' +
      'and at a low point said he sometimes feels life is pointless, without current plan or intent, and the counselor recognizes the risk of self-harm.',
  },
  diagnosticRationale:
    'Falsification of physical or psychological signs or symptoms, or induction of injury or disease, associated with identified deception, in ' +
    'which the individual presents as ill in the absence of obvious external rewards, meets DSM-5-TR criteria for factitious disorder—distinct ' +
    'from somatic symptom disorder, malingering with its external incentives, and functional neurological symptom disorder.',
  references: [
    { id: 'R1', source: 'DSM-5-TR', detail: 'Factitious disorder: intentional falsification/induction of illness, presenting as ill, without obvious external reward' },
    { id: 'R2', source: 'NICE guidelines', detail: 'Complex presentations: coordinated multidisciplinary care and patient safety within a team' },
    { id: 'R3', source: 'C-SSRS', detail: 'Structured suicide-risk screening given elevated risk and self-harm potential' },
    { id: 'R4', source: 'ACA Code of Ethics', detail: 'A.1., B.2., and C.2.: client welfare, safety, coordination, and practicing within competence' },
    { id: 'R5', source: 'Corey (Theory & Practice)', detail: 'Working alliance, non-confrontational engagement, and collaborative goal setting' },
  ],
  questions: [
    Q('q1', 'intake', 'What is most important to confirm to support a factitious disorder diagnosis?', ['R1'], [
      O('a', 'Intentional falsification or induction of illness with the person presenting as ill and no obvious external reward', 3,
        { r: 'Intentional deception without external reward', approach: 'Confirm the core criteria', why: 'Factitious disorder requires intentional falsification/induction of illness, presenting as ill, without obvious external reward', keys: ['intentionally produced symptoms', 'no obvious external incentive'], mistake: 'Diagnosing without confirming the intentional deception and absence of external reward' }),
      O('b', 'That he can pinpoint the single event he is convinced first caused him to start producing symptoms', -1,
        { r: 'A precipitant is not the criterion', approach: 'Trigger framing', why: 'Etiology is not part of the criteria', keys: ['criteria-based diagnosis'], mistake: 'Using a trigger as the diagnostic test' }),
      O('c', 'That his symptoms have grown a little more elaborate over the past few days than they were the week before', -1,
        { r: 'Recent change is not the criterion', approach: 'Recent-change framing', why: 'The established pattern of deception, not a recent uptick, defines it', keys: ['established pattern'], mistake: 'Confusing a brief change with the criteria' }),
      O('d', 'That he currently meets the full symptom count required for a discrete major depressive episode at this time', 0,
        { r: 'Depressive count does not define it', approach: 'Mood-criteria framing', why: 'Factitious disorder is defined by the intentional deception, not mood criteria', keys: ['deception-focused diagnosis'], mistake: 'Applying depressive criteria here' }),
    ]),
    Q('q2', 'core', 'Which feature best differentiates his presentation from somatic symptom disorder?', ['R1'], [
      O('a', 'His symptoms are intentionally falsified or induced, unlike the genuinely experienced symptoms of somatic symptom disorder', 3,
        { r: 'Intentional falsification, not genuine symptoms', approach: 'Contrast intentionality', why: 'Somatic symptom disorder involves genuinely experienced symptoms; factitious disorder involves intentional falsification', keys: ['intentionally produced symptoms', 'identified deception'], mistake: 'Reading intentionally falsified symptoms as a somatic symptom disorder' }),
      O('b', 'The fact that he presents repeatedly to medical settings with symptoms and undergoes evaluations and procedures', -1,
        { r: 'Frequent presentation occurs in both', approach: 'Presentation framing', why: 'Frequent medical presentation occurs in both; the intentionality differs', keys: ['shared feature'], mistake: 'Using frequent presentation to differentiate' }),
      O('c', 'The impact his symptoms have had on his health and his life over the course of recent years', -1,
        { r: 'Health impact occurs in both', approach: 'Impact framing', why: 'Health impact occurs in both; the intentionality differs', keys: ['shared impact'], mistake: 'Reading impact as decisive' }),
      O('d', 'The way his presentations tend to be a little more frequent during the most stressful periods of his life', 0,
        { r: 'Stress reactivity is nonspecific', approach: 'Stress framing', why: 'More presentations under stress does not differentiate them', keys: ['nonspecific reactivity'], mistake: 'Using stress sensitivity to differentiate' }),
    ]),
    Q('q3', 'core', 'How does his presentation differ from malingering?', ['R1'], [
      O('a', 'He falsifies illness without an obvious external reward, unlike malingering, which is motivated by external incentives', 3,
        { r: 'No external reward versus external incentives', approach: 'Contrast the motivation', why: 'Malingering is motivated by external incentives; his falsification lacks an obvious external reward', keys: ['no money, drugs, or legal gain', 'presents as ill'], mistake: 'Assuming intentional symptom production is always malingering' }),
      O('b', 'The fact that he quite intentionally produces or deliberately exaggerates a range of symptoms that are simply not what they outwardly appear to be to the treating team', -1,
        { r: 'Intentional production occurs in both', approach: 'Intentionality framing', why: 'Intentional symptom production occurs in both; the motivation differs', keys: ['shared feature'], mistake: 'Using intentional production to differentiate' }),
      O('c', 'The repeated medical encounters and procedures that he has sought out over recent years', -1,
        { r: 'Medical-seeking is nonspecific', approach: 'Seeking framing', why: 'Medical-seeking can occur in both; the motivation differs', keys: ['shared behavior'], mistake: 'Reading medical-seeking as decisive' }),
      O('d', 'The way his presentations tend to increase a little around the more stressful times in his life', 0,
        { r: 'Stress reactivity is nonspecific', approach: 'Stress framing', why: 'More presentations under stress does not identify the motivation', keys: ['nonspecific reactivity'], mistake: 'Using stress sensitivity to differentiate' }),
    ]),
    Q('q4', 'core', 'How does his presentation differ from functional neurological symptom disorder?', ['R1'], [
      O('a', 'His symptoms are intentionally produced, whereas functional neurological symptoms are genuine and not intentionally produced', 3,
        { r: 'Intentional versus genuine, unintentional symptoms', approach: 'Contrast intentionality', why: 'Functional neurological symptoms are genuine and unintentional; his are intentionally falsified or induced', keys: ['intentional falsification', 'identified deception'], mistake: 'Confusing intentional falsification with a genuine functional disorder' }),
      O('b', 'The fact that he repeatedly presents to medical settings with symptoms that have, over time, led to extensive medical evaluation and a whole series of various invasive procedures', -1,
        { r: 'Medical presentation occurs in both', approach: 'Presentation framing', why: 'A medical presentation occurs in both; the intentionality differs', keys: ['shared feature'], mistake: 'Using presentation to differentiate' }),
      O('c', 'The disruption his symptoms have caused to his health and his functioning over time', -1,
        { r: 'Functional disruption occurs in both', approach: 'Disruption framing', why: 'Functional disruption occurs in both; the intentionality differs', keys: ['shared disruption'], mistake: 'Reading disruption as decisive' }),
      O('d', 'The way his symptoms seem a little worse on the days when he has slept poorly the night before', 0,
        { r: 'Sleep effects are nonspecific', approach: 'Sleep framing', why: 'Worse symptoms after poor sleep does not differentiate them', keys: ['nonspecific factor'], mistake: 'Over-reading a sleep effect' }),
    ]),
    Q('q5', 'intake', 'Given his remark that life feels pointless, what is the most important step?', ['R3'], [
      O('a', 'Conduct a structured suicide-risk assessment, recognizing the elevated self-harm risk in this population', 3,
        { r: 'Structured suicide-risk assessment now', approach: 'Screen risk directly', why: 'Factitious disorder carries elevated self-harm risk, so a statement of hopelessness warrants structured assessment', keys: ['life feels pointless', 'self-induced illness'], mistake: 'Dismissing the remark because of skepticism about his honesty' }),
      O('b', 'Assume the remark is just another falsification and therefore does not require any assessment at all', -2,
        { r: 'Dismissing the remark is unsafe', approach: 'Dismissal framing', why: 'Even with a history of deception, a statement of hopelessness is assessed, not dismissed', keys: ['assess regardless'], mistake: 'Dismissing risk based on the diagnosis' }),
      O('c', 'Defer any risk assessment until the team has resolved how to handle the falsified symptoms first', -2,
        { r: 'Deferring assessment is unsafe', approach: 'Delay framing', why: 'Risk is assessed now, not after the team resolves other issues', keys: ['present risk'], mistake: 'Postponing an urgent assessment' }),
      O('d', 'Focus only on documenting the falsifications for now and return to any safety questions at a later date', -1,
        { r: 'Sequencing safety behind documentation is unsafe', approach: 'Single-issue framing', why: 'Documentation does not displace assessing current safety', keys: ['safety first'], mistake: 'Sequencing safety behind other needs' }),
    ]),
    Q('q6', 'treatment', 'What is the most appropriate approach given the diagnosis?', ['R2'], [
      O('a', 'A non-confrontational, coordinated approach within a team that prioritizes safety and engagement over exposure', 3,
        { r: 'Non-confrontational, coordinated, safety-first', approach: 'Engage without harsh confrontation', why: 'A non-confrontational, coordinated team approach that prioritizes safety and engagement is more effective than harsh exposure', keys: ['confrontation led to abrupt departure', 'medical harm'], mistake: 'Aggressively confronting the deception, which tends to lead to disengagement' }),
      O('b', 'Confronting him aggressively with all the evidence of his deception to force him to admit it immediately', -2,
        { r: 'Aggressive confrontation drives disengagement', approach: 'Confront framing', why: 'Aggressive confrontation tends to provoke departure and disengagement, as it did before', keys: ['engagement over exposure'], mistake: 'Confronting harshly rather than engaging' }),
      O('c', 'Ignoring the falsified symptoms entirely and continuing invasive procedures as if the symptoms were genuine', -2,
        { r: 'Continuing invasive procedures causes harm', approach: 'Collude framing', why: 'Proceeding with unnecessary invasive procedures perpetuates harm', keys: ['patient safety'], mistake: 'Enabling further medical harm' }),
      O('d', 'Starting him on a medication that you will select and adjust to stop the behavior over the coming weeks yourself', -2,
        { r: 'Prescribing is outside counselor scope', approach: 'Prescribe medication', why: 'Counselors do not select or adjust medication', keys: ['no prescriptive authority'], mistake: 'Acting outside scope of practice' }),
    ]),
    Q('q7', 'treatment', 'How should the team minimize harm while engaging him?', ['R2'], [
      O('a', 'Coordinate to limit unnecessary procedures and reduce iatrogenic harm while maintaining a supportive stance', 3,
        { r: 'Limit unnecessary procedures; stay supportive', approach: 'Protect from harm while engaging', why: 'Coordinating to limit unnecessary procedures reduces iatrogenic harm while a supportive stance maintains engagement', keys: ['many procedures', 'real medical harm'], mistake: 'Either continuing harmful procedures or abandoning him punitively' }),
      O('b', 'Order every test he requests without question so that he feels believed and stays engaged in his care', -2,
        { r: 'Unquestioned testing perpetuates harm', approach: 'Appease framing', why: 'Ordering all requested tests perpetuates iatrogenic harm', keys: ['limit unnecessary procedures'], mistake: 'Enabling further harm to keep him engaged' }),
      O('c', 'Refuse him all medical care of any kind going forward as a consequence of his deception', -1,
        { r: 'Punitive refusal of care is inappropriate', approach: 'Punitive framing', why: 'Blanket refusal of care is punitive and can be harmful; care is coordinated, not withdrawn punitively', keys: ['coordinated care'], mistake: 'Withdrawing care punitively' }),
      O('d', 'Leave decisions about procedures entirely to him without any team coordination or limits at all', -1,
        { r: 'No limits perpetuates harm', approach: 'Hands-off framing', why: 'Team coordination and limits reduce harm rather than leaving procedures unchecked', keys: ['coordinated limits'], mistake: 'Providing no coordination or limits' }),
    ]),
    Q('q8', 'treatment', 'How should progress and safety be tracked over time?', ['R5'], [
      O('a', 'Track engagement, safety, self-harm risk, and procedure use over time within the coordinated team', 3,
        { r: 'Measurement-based tracking of engagement and safety', approach: 'Monitor engagement and safety', why: 'Tracking engagement, safety, self-harm risk, and procedure use within the team steers the plan and reduces harm', keys: ['elevated self-harm risk', 'many procedures'], mistake: 'Proceeding without tracking engagement, safety, and procedure use' }),
      O('b', 'Rely only on whether he happens to say in session that he feels a little better than he did before', -1,
        { r: 'Anecdote alone is insufficient', approach: 'Anecdotal framing', why: 'Systematic tracking is more reliable than passing impressions, especially given the deception', keys: ['structured measurement'], mistake: 'Substituting anecdote for measurement' }),
      O('c', 'Track only the number of times he is caught falsifying symptoms and base every decision solely on that count', -1,
        { r: 'A single count is too narrow', approach: 'Single-metric framing', why: 'Engagement, safety, and procedure use all inform the plan, not a catch count', keys: ['multidimensional monitoring'], mistake: 'Reducing monitoring to one number' }),
      O('d', 'Wait until the end of treatment to review whether anything has changed at all since the first session', -1,
        { r: 'End-only review misses risk shifts', approach: 'Delayed-review framing', why: 'Ongoing tracking is needed to catch changes in safety and risk', keys: ['continuous monitoring'], mistake: 'Deferring all measurement to the end' }),
    ]),
    Q('q9', 'treatment', 'How should the counselor coordinate with the hospital team?', ['R4'], [
      O('a', 'With appropriate consent and within confidentiality rules, coordinate a consistent, harm-reducing team plan', 3,
        { r: 'Coordinate a consistent team plan with consent', approach: 'Coordinate within consent and safety', why: 'A consistent, harm-reducing plan is coordinated with the team within consent and confidentiality rules', keys: ['hospital team involved', 'inconsistent past responses'], mistake: 'Working at cross-purposes with the team or disclosing without appropriate authority' }),
      O('b', 'Share his full history with everyone in the hospital freely, since patient safety overrides all confidentiality', -2,
        { r: 'Unlimited disclosure over-discloses', approach: 'Over-disclosure framing', why: 'Even for safety, disclosure follows consent and minimum-necessary and lawful limits', keys: ['minimum necessary'], mistake: 'Over-disclosing beyond what is appropriate' }),
      O('c', 'Avoid coordinating with the team at all so that his counseling stays entirely separate from his medical care', -1,
        { r: 'No coordination undercuts safe care', approach: 'Siloed framing', why: 'Consented coordination is central to a consistent, harm-reducing plan', keys: ['integrated care'], mistake: 'Refusing helpful, consented coordination' }),
      O('d', 'Tell the team to simply discharge him and refuse all future care as the simplest way to handle the problem', -1,
        { r: 'Punitive discharge is inappropriate', approach: 'Discharge framing', why: 'A coordinated, harm-reducing plan is preferable to a punitive discharge', keys: ['coordinated plan'], mistake: 'Recommending a punitive response' }),
    ]),
    Q('q10', 'counseling', 'Colin becomes guarded and expects the counselor to accuse him, as others have. The most therapeutic response is to:', ['R5'], [
      O('a', 'Take a non-judgmental, curious stance focused on his distress and safety rather than on catching him out', 3,
        { r: 'Non-judgmental, distress-focused stance', approach: 'Engage without accusation', why: 'A non-judgmental stance focused on his distress and safety builds the engagement that harsh accusation destroys', keys: ['expects to be accused', 'guarded'], mistake: 'Accusing or interrogating him, which repeats the pattern that led to disengagement' }),
      O('b', 'Immediately accuse him of lying and demand that he admit to everything he has falsified so far right now', -2,
        { r: 'Accusation drives disengagement', approach: 'Accusation framing', why: 'Accusatory confrontation tends to provoke departure and disengagement', keys: ['engagement over exposure'], mistake: 'Accusing rather than engaging' }),
      O('c', 'Pretend you are unaware of the falsifications and collude with his account as though it were entirely genuine', -1,
        { r: 'Colluding is not honest engagement', approach: 'Collude framing', why: 'Pretending ignorance is not honest and can perpetuate harm; a non-judgmental, honest stance is better', keys: ['honest, non-judgmental stance'], mistake: 'Colluding with the account' }),
      O('d', 'End the session rather than engaging with his guardedness and his expectation of being accused at all', -1,
        { r: 'Ending abruptly misses the opening', approach: 'Escape framing', why: 'His guardedness can be engaged supportively rather than avoided', keys: ['engage the guardedness'], mistake: 'Avoiding a meaningful moment' }),
    ]),
    Q('q11', 'counseling', 'How can the counselor best build any working alliance with Colin?', ['R5'], [
      O('a', 'Focus on his underlying distress and needs, be consistent and non-punitive, and prioritize safety and engagement', 3,
        { r: 'Address underlying distress; be consistent and non-punitive', approach: 'Build the alliance around his needs', why: 'Focusing on his underlying distress with a consistent, non-punitive stance builds the fragile alliance', keys: ['guarded', 'underlying distress'], mistake: 'Making the alliance contingent on a confession or treating him punitively' }),
      O('b', 'Insist he confess to every falsification before any counseling work with him can begin at all', -1,
        { r: 'Demanding a confession first stalls engagement', approach: 'Confession-precondition framing', why: 'Requiring a confession before engaging blocks the alliance', keys: ['engage first'], mistake: 'Setting a confession precondition' }),
      O('c', 'Focus the sessions mainly on cataloguing each falsified symptom in exhaustive detail every single week', -1,
        { r: 'Cataloguing falsifications is not alliance-building', approach: 'Catalogue framing', why: 'Rehashing falsifications does not build the alliance or address the distress', keys: ['distress focus'], mistake: 'Centering sessions on the falsifications' }),
      O('d', 'Tell him there is no hope for him and that he will never change no matter what he does going forward', -2,
        { r: 'Hopeless framing undermines engagement', approach: 'Hopelessness framing', why: 'A hopeless message erodes any chance of an alliance and worsens risk', keys: ['instill hope'], mistake: 'Communicating hopelessness' }),
    ]),
    Q('q12', 'ethics', 'The hospital team asks the counselor to help set up covert surveillance to catch Colin falsifying symptoms. The most appropriate action is to:', ['R4'], [
      O('a', 'Raise the ethical and consent concerns and coordinate a lawful, safety-focused plan within the team’s policies', 3,
        { r: 'Address ethics and consent; coordinate lawfully', approach: 'Apply ethical and legal standards', why: 'Covert surveillance raises serious ethical and consent concerns, so the counselor raises them and coordinates a lawful plan', keys: ['request for covert surveillance', 'consent and ethics at stake'], mistake: 'Helping arrange covert surveillance without regard to ethics, consent, and law' }),
      O('b', 'Set up the covert surveillance right away, since catching him would clearly resolve the problem the fastest', -2,
        { r: 'Covert surveillance raises serious ethics issues', approach: 'Surveillance framing', why: 'Arranging covert surveillance without addressing ethics, consent, and law is inappropriate', keys: ['ethics and consent'], mistake: 'Bypassing ethical and legal considerations' }),
      O('c', 'Personally spy on him yourself outside of sessions to gather the evidence the team is looking for', -2,
        { r: 'Personally spying breaches the role', approach: 'Overreach framing', why: 'Personally surveilling the client breaches the counseling role and trust', keys: ['role boundaries'], mistake: 'Acting outside the appropriate role' }),
      O('d', 'Refuse to engage with the team’s concern at all and decline to help address the safety issue in any way', -1,
        { r: 'Refusing to engage the safety issue is unhelpful', approach: 'Stonewall framing', why: 'The counselor raises the concerns and helps coordinate a lawful, safety-focused plan rather than refusing to engage', keys: ['coordinate lawfully'], mistake: 'Declining to help address a legitimate safety issue appropriately' }),
    ]),
    Q('q13', 'ethics', 'The counselor has limited training in factitious disorder. The most ethical course of action is to:', ['R4'], [
      O('a', 'Seek consultation and coordinate multidisciplinary care, referring for the components beyond your competence', 3,
        { r: 'Consult, coordinate, or refer within competence', approach: 'Practice within competence', why: 'ACA C.2. requires competence; factitious disorder needs consultation and coordinated multidisciplinary care', keys: ['limited training', 'complex, high-risk case'], mistake: 'Managing a complex factitious-disorder case alone without competence' }),
      O('b', 'Continue managing the case alone to preserve the continuity of the relationship built with him', -2,
        { r: 'Going it alone exceeds competence', approach: 'Continuity-over-competence', why: 'Continuity does not justify exceeding competence', keys: ['competence exceeded'], mistake: 'Prioritizing continuity over competence' }),
      O('c', 'Tell the team the presentation is not serious enough to need coordination and continue with general talks only', -2,
        { r: 'Minimizing the problem fails the client', approach: 'Downplay framing', why: 'A complex, high-risk factitious presentation warrants competent, coordinated care', keys: ['high-risk case'], mistake: 'Underestimating the need for coordinated care' }),
      O('d', 'Transfer the case at once to another provider with no explanation, consultation, or coordinated plan for the transition', -1,
        { r: 'Abrupt transfer mishandles continuity', approach: 'Uncoordinated handoff', why: 'A coordinated referral, not an abrupt transfer, is appropriate', keys: ['coordinated transition'], mistake: 'Dropping the case without coordination' }),
    ]),
  ],
};

module.exports = { CASES: [D185, D186, D187, D188, D189] };
