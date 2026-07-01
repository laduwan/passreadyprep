// ============================================================================
// deep-cases-batch-15.js — NCMHCE deep cases, batch 15 (2022+ format)
// NCMHCE Prep Platform | GA Integrated Therapeutic Perspectives LLC
//
// Five exam-deep clinical simulations (13 items each, sections [5,4,4]). The
// diagnosis/clinical focus is GIVEN; items test clinical decision-making across
// the three derived sections (Assessment -> Planning -> Process). On the
// reserved id block ncmhce-D175+, adding distinct diagnoses not yet covered by
// any deep case (checked vs all deep-format cases + the exemplar):
//   ncmhce-D175  Paranoid Personality Disorder (Personality)
//   ncmhce-D176  Avoidant/Restrictive Food Intake Disorder (Eating)
//   ncmhce-D177  Nightmare Disorder (Sleep)
//   ncmhce-D178  Excoriation (Skin-Picking) Disorder (OCD-Related)
//   ncmhce-D179  Selective Mutism (Anxiety)
//
// Authored to NCMHCE_DeepCase_Generation_Spec.md. Passes caseSchema
// (strictItemQuality) AND examDepth with zero errors / zero warnings.
// Auto-discovered by import-deep-cases.js (deep-cases-batch-*.js).
//
// Validate:
//   node tools/cases/validateCases.js tools/cases/deep-cases-batch-15.js
//   node -e "const{validateExamDepthSet}=require('./tools/cases/examDepth');const{CASES}=require('./tools/cases/deep-cases-batch-15');console.log(validateExamDepthSet(CASES))"
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
// D175 — Paranoid Personality Disorder (F60.0) — Personality — hard
// ============================================================================
const D175 = {
  id: 'ncmhce-D175',
  title: 'Pervasive distrust and suspicion without frank psychosis',
  category: 'Personality',
  difficulty: 'hard',
  primaryDiagnosis: { name: 'Paranoid Personality Disorder', code: 'F60.0' },
  diagnosis: { name: 'Paranoid Personality Disorder', code: 'F60.0' },
  differentialOptions: [
    { id: 'do1', name: 'Paranoid Personality Disorder', isCorrect: true },
    { id: 'do2', name: 'Delusional Disorder', isCorrect: false },
    { id: 'do3', name: 'Schizotypal Personality Disorder', isCorrect: false },
    { id: 'do4', name: 'Post-Traumatic Stress Disorder', isCorrect: false },
  ],
  narrative: {
    intake:
      'Victor Kane, a 46-year-old machinist, is referred by his employer after conflicts with coworkers. He describes a lifelong pattern of ' +
      'distrust and suspicion of others, reading hidden demeaning or threatening meanings into benign remarks and doubting the loyalty of those around him.',
    session1:
      'His suspiciousness is a pervasive trait pattern present since early adulthood rather than a fixed, encapsulated delusion, and his reality ' +
      'testing is generally intact. He is reluctant to confide in others for fear the information will be used against him and bears persistent grudges.',
    session2:
      'He is guarded and quick to counterattack when he feels slighted, and his relationships and job are strained by the mistrust. He does not ' +
      'have odd perceptual experiences or magical thinking, and he came only reluctantly, wary that the counselor might report him to his employer.',
  },
  diagnosticRationale:
    'A pervasive pattern of distrust and suspiciousness such that others’ motives are interpreted as malevolent, beginning by early adulthood—' +
    'suspecting exploitation, doubting loyalty, reluctance to confide, reading hidden threats into benign remarks, bearing grudges—meets DSM-5-TR ' +
    'criteria for paranoid personality disorder, distinct from delusional disorder, schizotypal personality disorder, and PTSD.',
  references: [
    { id: 'R1', source: 'DSM-5-TR', detail: 'Paranoid PD: pervasive distrust and suspiciousness interpreting others’ motives as malevolent, by early adulthood' },
    { id: 'R2', source: 'Corey (Theory & Practice)', detail: 'Approach selection, building a working alliance, and managing mistrust in personality-focused work' },
    { id: 'R3', source: 'C-SSRS', detail: 'Structured suicide-risk screening and assessment of risk to others when conflict escalates' },
    { id: 'R4', source: 'ACA Code of Ethics', detail: 'A.1., B.1., and C.2.: client welfare, confidentiality, informed consent, and competence' },
    { id: 'R5', source: 'NBCC Content Outline', detail: 'Clinical decision-making and measurement-based care across the counseling process' },
  ],
  questions: [
    Q('q1', 'intake', 'What is most important to establish to support a paranoid personality disorder diagnosis?', ['R1'], [
      O('a', 'A pervasive, early-adulthood pattern of distrust and suspicion, reading malevolent motives into others’ actions', 3,
        { r: 'Pervasive early-onset distrust pattern', approach: 'Confirm the trait pattern', why: 'Paranoid PD requires a pervasive, enduring pattern of distrust and suspicion beginning by early adulthood', keys: ['lifelong distrust', 'reads hidden threats into benign remarks'], mistake: 'Diagnosing from a single suspicious reaction rather than a pervasive pattern' }),
      O('b', 'That he can name the single past event he is convinced first made him distrust the people around him', -1,
        { r: 'A precipitant is not the criterion', approach: 'Trigger framing', why: 'Etiology is not part of the criteria', keys: ['pattern-based diagnosis'], mistake: 'Using a trigger as the diagnostic test' }),
      O('c', 'That his suspicion has grown a little stronger over the past few days than it was the week just before that', -1,
        { r: 'Recent change is not the criterion', approach: 'Recent-change framing', why: 'A pervasive, enduring pattern is required', keys: ['enduring pattern'], mistake: 'Confusing a brief change with the criteria' }),
      O('d', 'That he currently meets the full symptom count required for a discrete major depressive episode at this time', 0,
        { r: 'Depressive count does not define it', approach: 'Mood-criteria framing', why: 'Paranoid PD is a personality pattern, not a mood episode', keys: ['personality pattern'], mistake: 'Applying depressive criteria here' }),
    ]),
    Q('q2', 'core', 'Which feature best differentiates his presentation from delusional disorder?', ['R1'], [
      O('a', 'His suspiciousness is a pervasive trait with intact reality testing, not a fixed, encapsulated delusional belief', 3,
        { r: 'Pervasive trait, not a fixed delusion', approach: 'Contrast trait suspiciousness with a delusion', why: 'Delusional disorder involves a fixed false belief; his is pervasive trait suspiciousness with intact reality testing', keys: ['pervasive trait pattern', 'reality testing intact'], mistake: 'Reading trait suspiciousness as a fixed delusion' }),
      O('b', 'The fact that he is mistrustful of other people and often interprets their intentions toward him as hostile', -1,
        { r: 'Mistrust occurs in both', approach: 'Mistrust framing', why: 'Mistrust occurs in both; the fixed-delusion quality differs', keys: ['shared feature'], mistake: 'Using mistrust to differentiate' }),
      O('c', 'The suspicion and the guardedness that he brings into his interactions with the people around him', -1,
        { r: 'Guardedness is nonspecific', approach: 'Guardedness framing', why: 'Guardedness occurs in both; the trait-versus-delusion distinction differs', keys: ['shared affect'], mistake: 'Reading guardedness as decisive' }),
      O('d', 'The way his suspicion tends to feel a little stronger during the busiest and most stressful weeks at his job', 0,
        { r: 'Stress reactivity is nonspecific', approach: 'Stress framing', why: 'Worsening under stress does not differentiate them', keys: ['nonspecific reactivity'], mistake: 'Using stress sensitivity to differentiate' }),
    ]),
    Q('q3', 'core', 'How does his presentation differ from schizotypal personality disorder?', ['R1'], [
      O('a', 'He lacks the odd perceptual experiences and magical thinking that characterize schizotypal personality disorder', 3,
        { r: 'No cognitive-perceptual distortions', approach: 'Contrast on cognitive-perceptual features', why: 'Schizotypal PD includes odd perceptions and magical thinking; his pattern is distrust without those features', keys: ['no odd perceptual experiences', 'no magical thinking'], mistake: 'Overlooking the absence of the cognitive-perceptual features of schizotypal PD' }),
      O('b', 'The fact that he tends to be socially guarded and keeps his distance from many of the people around him', -1,
        { r: 'Social guardedness occurs in both', approach: 'Guardedness framing', why: 'Social guardedness occurs in both; the cognitive-perceptual features differ', keys: ['shared feature'], mistake: 'Using guardedness to differentiate' }),
      O('c', 'The suspicion he feels toward others and the difficulty he has trusting the people in his life', -1,
        { r: 'Suspicion occurs in both', approach: 'Suspicion framing', why: 'Suspicion occurs in both; the perceptual features differ', keys: ['shared suspicion'], mistake: 'Reading suspicion as decisive' }),
      O('d', 'The way his mistrust tends to feel a bit worse in the evenings than it does earlier during the daytime hours', 0,
        { r: 'Diurnal pattern is not diagnostic', approach: 'Time-of-day framing', why: 'Timing does not separate the two', keys: ['nonspecific timing'], mistake: 'Over-reading a circadian pattern' }),
    ]),
    Q('q4', 'core', 'How does his presentation differ from PTSD?', ['R1'], [
      O('a', 'His distrust is a lifelong personality trait, not a hypervigilance that arose specifically after a traumatic event', 3,
        { r: 'Lifelong trait, not trauma-onset hypervigilance', approach: 'Contrast the origin and course', why: 'PTSD hypervigilance follows a specific trauma; his suspiciousness is a lifelong trait pattern', keys: ['lifelong pattern', 'since early adulthood'], mistake: 'Reading a lifelong trait as trauma-related hypervigilance' }),
      O('b', 'The fact that he can be watchful and on guard in situations where he feels he might be threatened or harmed', -1,
        { r: 'Hypervigilance can occur in both', approach: 'Vigilance framing', why: 'Watchfulness can occur in both; the origin and course differ', keys: ['shared feature'], mistake: 'Using vigilance to differentiate' }),
      O('c', 'The tension and the wariness that he carries with him through much of his day-to-day life', -1,
        { r: 'Tension is nonspecific', approach: 'Tension framing', why: 'Tension can occur in both; the origin differs', keys: ['shared affect'], mistake: 'Reading tension as decisive' }),
      O('d', 'The way his wariness tends to feel a little worse on the busier and more crowded days at his workplace', 0,
        { r: 'Environmental effects are nonspecific', approach: 'Environment framing', why: 'A busier environment does not differentiate the two', keys: ['nonspecific factor'], mistake: 'Over-reading an environmental effect' }),
    ]),
    Q('q5', 'intake', 'What is most important to assess given his conflicts and quick counterattacks?', ['R3'], [
      O('a', 'Any risk to others and to himself, including how the mistrust escalates into conflict, to guide safety and planning', 3,
        { r: 'Assess risk to others and self', approach: 'Screen risk in both directions', why: 'Escalating conflict driven by mistrust warrants assessing risk to others and to himself', keys: ['quick to counterattack', 'conflicts at work'], mistake: 'Addressing the trait pattern without assessing how conflict and risk escalate' }),
      O('b', 'A previously undetected primary eating disorder that might better account for his conflicts with his coworkers', -1,
        { r: 'Eating pathology is not indicated', approach: 'Eating-disorder framing', why: 'No eating concerns are reported', keys: ['no eating data'], mistake: 'Inventing an unsupported rule-out' }),
      O('c', 'A previously undetected primary psychotic disorder with sustained hallucinations that would better explain his distrust', -1,
        { r: 'Sustained psychosis is not indicated', approach: 'Psychosis framing', why: 'His reality testing is intact and there is no sustained psychosis', keys: ['intact reality testing'], mistake: 'Pursuing an unsupported rule-out' }),
      O('d', 'An emerging neurocognitive decline that could account for why he has had recent conflicts with his coworkers', 0,
        { r: 'Cognitive decline is improbable here', approach: 'Neurocognitive framing', why: 'The lifelong trait pattern fits paranoid PD, not decline', keys: ['lifelong pattern'], mistake: 'Pursuing an improbable rule-out' }),
    ]),
    Q('q6', 'treatment', 'What is the most appropriate treatment framework for Victor?', ['R2'], [
      O('a', 'Supportive, consistent psychotherapy that carefully builds trust and works on interpersonal patterns at his pace', 3,
        { r: 'Supportive, trust-building psychotherapy', approach: 'Apply a personality-focused, supportive approach', why: 'Paranoid PD is addressed with consistent, supportive therapy that builds trust and works on interpersonal patterns', keys: ['pervasive mistrust', 'strained relationships'], mistake: 'Pushing rapid confrontation or interpretation before any trust is established' }),
      O('b', 'Intensive confrontation of his suspicions to force him to see quickly that his mistrust is completely unjustified', -2,
        { r: 'Confrontation ruptures the fragile alliance', approach: 'Confront framing', why: 'Aggressively confronting his suspicions tends to confirm his mistrust and rupture the alliance', keys: ['build trust first'], mistake: 'Confronting the mistrust head-on' }),
      O('c', 'Telling him his personality cannot change and that he should simply accept a life of conflict and isolation from now on', -2,
        { r: 'Therapeutic nihilism abandons the client', approach: 'Nihilism framing', why: 'Supportive work can improve functioning; dismissing change abandons the client', keys: ['change is possible'], mistake: 'Foreclosing change' }),
      O('d', 'Starting him on a medication that you will select and adjust to reduce his suspicion over the coming weeks yourself', -2,
        { r: 'Prescribing is outside counselor scope', approach: 'Prescribe medication', why: 'Counselors do not select or adjust medication', keys: ['no prescriptive authority'], mistake: 'Acting outside scope of practice' }),
    ]),
    Q('q7', 'treatment', 'How should the counselor build the alliance given his mistrust?', ['R2'], [
      O('a', 'Be reliably consistent, transparent, and clear about confidentiality and roles to slowly earn his trust', 3,
        { r: 'Consistency, transparency, and clear limits', approach: 'Earn trust through reliability', why: 'A consistent, transparent stance with clear confidentiality builds trust with a mistrustful client', keys: ['reluctant to confide', 'wary of being reported'], mistake: 'Being vague or inconsistent, which confirms his suspicions' }),
      O('b', 'Share personal details about your own life freely so that he sees you as an equal and lowers his guard quickly', -1,
        { r: 'Excess self-disclosure is not the method', approach: 'Over-disclosure framing', why: 'Heavy self-disclosure is not what builds trust here; reliability and clarity are', keys: ['professional consistency'], mistake: 'Substituting self-disclosure for reliability' }),
      O('c', 'Agree with all of his suspicions about his coworkers so that he feels understood and keeps coming to sessions', -2,
        { r: 'Colluding reinforces the mistrust', approach: 'Collude framing', why: 'Endorsing his suspicions reinforces the pattern being treated', keys: ['neither collude nor confront'], mistake: 'Validating the suspicions to keep rapport' }),
      O('d', 'Keep the counseling process and its limits vague so that he is not burdened with too much information at once', -1,
        { r: 'Vagueness increases suspicion', approach: 'Vagueness framing', why: 'Vagueness about the process tends to heighten a mistrustful client’s suspicion', keys: ['transparency'], mistake: 'Withholding clarity a suspicious client needs' }),
    ]),
    Q('q8', 'treatment', 'How should progress be tracked in this personality-focused work?', ['R5'], [
      O('a', 'Track interpersonal functioning, conflict, and engagement over time to guide a longer-term, supportive course', 3,
        { r: 'Measurement-based tracking of functioning and engagement', approach: 'Measure functioning over time', why: 'Tracking interpersonal functioning, conflict, and engagement steers a longer-term, supportive course', keys: ['strained relationships and job', 'guarded engagement'], mistake: 'Proceeding without any way to gauge change' }),
      O('b', 'Rely only on whether he happens to remark in session that he feels a little less on guard than before', -1,
        { r: 'Anecdote alone is insufficient', approach: 'Anecdotal framing', why: 'Systematic tracking is more reliable than passing impressions', keys: ['structured measurement'], mistake: 'Substituting anecdote for measurement' }),
      O('c', 'Track only how suspicious his statements sound at each session and base every decision solely on that impression', -1,
        { r: 'Suspicion tone is the wrong metric', approach: 'Wrong-metric framing', why: 'Functioning and engagement are the outcomes, not how suspicious his statements sound', keys: ['functioning focus'], mistake: 'Measuring the wrong variable' }),
      O('d', 'Wait until the very last session to decide whether anything has changed at all since the first appointment', -1,
        { r: 'End-only review misses steering data', approach: 'Delayed-review framing', why: 'Ongoing tracking is needed to steer a longer course', keys: ['continuous monitoring'], mistake: 'Deferring all measurement to the end' }),
    ]),
    Q('q9', 'treatment', 'How should the counselor handle his fear of being reported to his employer?', ['R4'], [
      O('a', 'Clarify confidentiality and its limits clearly and honestly so he understands what is and is not shared', 3,
        { r: 'Clarify confidentiality and its limits', approach: 'Be transparent about confidentiality', why: 'Clear, honest information about confidentiality and its limits addresses his fear and builds trust', keys: ['wary of being reported', 'employer referral'], mistake: 'Being vague about confidentiality with a client who fears disclosure' }),
      O('b', 'Promise him that absolutely nothing will ever be shared with anyone under any circumstances at all going forward', -2,
        { r: 'An absolute promise is false', approach: 'Absolute-secrecy framing', why: 'Confidentiality has limits; promising absolute secrecy is inaccurate and unethical', keys: ['limits exist'], mistake: 'Guaranteeing confidentiality you cannot keep' }),
      O('c', 'Share updates with his employer whenever they ask, since the employer referred him and is paying for the sessions', -2,
        { r: 'Disclosing to the employer without consent breaches confidentiality', approach: 'Employer-entitlement framing', why: 'The referral source is not entitled to disclosures without his consent', keys: ['no release'], mistake: 'Disclosing to the employer without consent' }),
      O('d', 'Avoid the topic of confidentiality entirely so that he does not become even more worried about being reported', -1,
        { r: 'Avoiding the issue heightens fear', approach: 'Avoidant framing', why: 'Clarity, not avoidance, addresses his fear', keys: ['transparent limits'], mistake: 'Sidestepping a concern that needs addressing' }),
    ]),
    Q('q10', 'counseling', 'Victor accuses the counselor of "taking his employer’s side." The most therapeutic response is to:', ['R2'], [
      O('a', 'Acknowledge his concern calmly, clarify your role and confidentiality, and avoid becoming defensive', 3,
        { r: 'Acknowledge, clarify role, stay non-defensive', approach: 'Defuse mistrust with transparency', why: 'Calm acknowledgment and clarification of role and confidentiality defuse mistrust without confrontation', keys: ['accuses you of taking sides', 'employer referral'], mistake: 'Becoming defensive or dismissing his concern, which confirms his mistrust' }),
      O('b', 'Insist firmly that he is wrong and that he simply has to trust you from now on without questioning your motives', -1,
        { r: 'Demanding trust raises suspicion', approach: 'Demand-trust framing', why: 'Insisting he trust you tends to increase guardedness', keys: ['build trust gradually'], mistake: 'Pressuring rather than clarifying' }),
      O('c', 'Agree that you are indeed working for his employer against him so that he feels his suspicion is validated', -2,
        { r: 'Confirming a false suspicion reinforces it', approach: 'Collude framing', why: 'Endorsing the false accusation reinforces the mistrust pattern', keys: ['clarify accurately'], mistake: 'Validating a false suspicion' }),
      O('d', 'End the session early to let him cool off rather than addressing the accusation with him in the room together', -1,
        { r: 'Avoiding the moment misses an opening', approach: 'Escape framing', why: 'His concern can be engaged and clarified in the room', keys: ['engage the moment'], mistake: 'Sidestepping the interaction' }),
    ]),
    Q('q11', 'counseling', 'How can the counselor best engage Victor in the work over time?', ['R2'], [
      O('a', 'Connect the work to goals he values, such as keeping his job and easing conflict, and proceed at a trust-building pace', 3,
        { r: 'Anchor in his goals at a trust-building pace', approach: 'Build engagement on his terms', why: 'Linking the work to his own goals and moving at a trust-building pace engages a mistrustful client', keys: ['job at risk', 'strained relationships'], mistake: 'Pushing insight into his mistrust faster than the alliance can bear' }),
      O('b', 'Press him to admit that his mistrust is the real problem before any other work can begin with him at all', -1,
        { r: 'Demanding insight first stalls engagement', approach: 'Insight-precondition framing', why: 'Requiring him to renounce his mistrust first blocks engagement', keys: ['engage despite mistrust'], mistake: 'Setting an insight precondition' }),
      O('c', 'Focus the sessions mainly on cataloguing every grievance he holds against his coworkers in exhaustive detail', -1,
        { r: 'Cataloguing grievances reinforces them', approach: 'Grievance-focus framing', why: 'Dwelling on grievances tends to reinforce the mistrust rather than advance goals', keys: ['goal focus'], mistake: 'Centering the work on grievances' }),
      O('d', 'Tell him counseling cannot help him at all unless he first agrees to give up all of his suspicions immediately', -1,
        { r: 'Demanding he drop suspicions stalls engagement', approach: 'Ultimatum framing', why: 'Requiring he abandon his suspicions first blocks engagement', keys: ['gradual work'], mistake: 'Setting an unattainable precondition' }),
    ]),
    Q('q12', 'ethics', 'The employer contacts the counselor demanding a report on Victor’s progress. The most appropriate action is to:', ['R4'], [
      O('a', 'Share information only with Victor’s informed consent and a valid release, limited to what is appropriate', 3,
        { r: 'Consent and release before any disclosure', approach: 'Apply consent and minimum necessary', why: 'Disclosure to the employer requires Victor’s informed consent and is limited to what is appropriate', keys: ['employer demands a report', 'no release yet'], mistake: 'Disclosing to the employer without the client’s consent' }),
      O('b', 'Send the employer a full progress report right away, since the employer referred him and wants the information', -2,
        { r: 'Disclosing without consent breaches confidentiality', approach: 'Assume-consent framing', why: 'A valid release is required before disclosure regardless of who referred him', keys: ['no release'], mistake: 'Disclosing without consent' }),
      O('c', 'Tell the employer everything the client has said about his coworkers so the workplace conflict can be resolved', -2,
        { r: 'Over-disclosure breaches confidentiality', approach: 'Over-disclosure framing', why: 'Sharing session content without consent breaches confidentiality', keys: ['minimum necessary'], mistake: 'Releasing session content without consent' }),
      O('d', 'Refuse to communicate with the employer at all, even to explain the confidentiality and consent requirements', -1,
        { r: 'Refusing to clarify the process is unhelpful', approach: 'Stonewall framing', why: 'The counselor can explain the consent and confidentiality requirements rather than refuse all contact', keys: ['clarify the requirements'], mistake: 'Declining to clarify the appropriate process' }),
    ]),
    Q('q13', 'ethics', 'The counselor has limited training in personality disorders. The most ethical course of action is to:', ['R4'], [
      O('a', 'Seek consultation and training, and refer or coordinate for the components beyond your competence', 3,
        { r: 'Consult, train, or refer within competence', approach: 'Practice within competence', why: 'ACA C.2. requires competence; personality-focused work may need consultation, training, or referral', keys: ['limited personality-disorder training', 'complex case'], mistake: 'Managing a complex personality case alone without competence' }),
      O('b', 'Continue managing the case alone to preserve the continuity of the relationship built with him', -2,
        { r: 'Going it alone exceeds competence', approach: 'Continuity-over-competence', why: 'Continuity does not justify exceeding competence', keys: ['competence exceeded'], mistake: 'Prioritizing continuity over competence' }),
      O('c', 'Tell him his difficulties are not serious enough to need specialized help and continue with general talks only', -2,
        { r: 'Minimizing the problem fails the client', approach: 'Downplay framing', why: 'A complex, conflict-laden presentation warrants competent care', keys: ['complex case'], mistake: 'Underestimating the need for specialized care' }),
      O('d', 'Transfer him at once to another provider with no explanation, consultation, or coordinated plan for the transition', -1,
        { r: 'Abrupt transfer mishandles continuity', approach: 'Uncoordinated handoff', why: 'Transitions must be coordinated to avoid abandonment', keys: ['no transition plan'], mistake: 'Dropping the client without coordination' }),
    ]),
  ],
};

// ============================================================================
// D176 — Avoidant/Restrictive Food Intake Disorder (F50.82) — Eating — hard
// ============================================================================
const D176 = {
  id: 'ncmhce-D176',
  title: 'Restricted eating without body-image concern or weight fear',
  category: 'Eating',
  difficulty: 'hard',
  primaryDiagnosis: { name: 'Avoidant/Restrictive Food Intake Disorder', code: 'F50.82' },
  diagnosis: { name: 'Avoidant/Restrictive Food Intake Disorder', code: 'F50.82' },
  differentialOptions: [
    { id: 'do1', name: 'Avoidant/Restrictive Food Intake Disorder', isCorrect: true },
    { id: 'do2', name: 'Anorexia Nervosa, Restricting Type', isCorrect: false },
    { id: 'do3', name: 'Specific Phobia', isCorrect: false },
    { id: 'do4', name: 'Major Depressive Disorder', isCorrect: false },
  ],
  narrative: {
    intake:
      'Noah Kim, a 14-year-old, is referred by his pediatrician for restricted eating and weight loss. He avoids a wide range of foods based on ' +
      'their texture and smell and a fear of choking after an earlier gagging incident, and he has lost weight and shows signs of nutritional concern.',
    session1:
      'His food avoidance is not driven by any concern about body shape or weight, and he does not fear becoming fat or misperceive his body. ' +
      'The restriction reflects sensory sensitivity and fear of aversive consequences, and it has led to a nutritional deficiency and reliance on supplements.',
    session2:
      'His parents are anxious about mealtimes, which have become a source of conflict, and he is embarrassed and frustrated that eating is so hard. ' +
      'He is otherwise engaged and denies low mood as the driver of the restriction, and he wants to be able to eat a wider range of foods again.',
  },
  diagnosticRationale:
    'An eating or feeding disturbance—here sensory-based avoidance and fear of aversive consequences—leading to significant weight loss and ' +
    'nutritional deficiency, without concern about body weight or shape and not better explained by another condition, meets DSM-5-TR criteria ' +
    'for avoidant/restrictive food intake disorder, distinct from anorexia nervosa, a specific phobia, and a primary depressive disorder.',
  references: [
    { id: 'R1', source: 'DSM-5-TR', detail: 'ARFID: eating disturbance with weight loss/nutritional deficiency; no body-image concern or fear of weight gain' },
    { id: 'R2', source: 'NICE guidelines', detail: 'Eating disorders: multidisciplinary care with medical monitoring and psychological therapy; family involvement for youth' },
    { id: 'R3', source: 'C-SSRS', detail: 'Developmentally appropriate suicide-risk screening when distress and impairment are significant' },
    { id: 'R4', source: 'ACA Code of Ethics', detail: 'A.1., B.5., and C.2.: welfare of minor clients, consent, coordination of care, and competence' },
    { id: 'R5', source: 'Corey (Theory & Practice)', detail: 'Working alliance with the child and family and collaborative goal setting' },
  ],
  questions: [
    Q('q1', 'intake', 'What is most important to confirm to support an ARFID diagnosis?', ['R1'], [
      O('a', 'An eating disturbance causing weight loss or nutritional deficiency without any concern about body weight or shape', 3,
        { r: 'Nutritional impact without body-image concern', approach: 'Confirm the core criteria', why: 'ARFID requires an eating disturbance with nutritional impact and no body-image concern or fear of weight gain', keys: ['weight loss and nutritional concern', 'no body-shape concern'], mistake: 'Diagnosing without confirming the absence of body-image concern' }),
      O('b', 'That his parents can pinpoint the single event they are convinced first caused all of his difficulties with eating', -1,
        { r: 'A precipitant is not the criterion', approach: 'Trigger framing', why: 'Etiology is not part of the criteria, though a choking incident may feature', keys: ['criteria-based diagnosis'], mistake: 'Using a trigger as the diagnostic test' }),
      O('c', 'That his eating has grown a little more restricted over the past few days than it was the week just before that', -1,
        { r: 'Recent change is not the criterion', approach: 'Recent-change framing', why: 'The established pattern and its impact, not a recent uptick, define it', keys: ['established pattern'], mistake: 'Confusing a brief change with the criteria' }),
      O('d', 'That he currently meets the full symptom count required for a discrete major depressive episode at this time', 0,
        { r: 'Depressive count does not define it', approach: 'Mood-criteria framing', why: 'ARFID is a feeding and eating disorder, not a mood episode', keys: ['eating-focused diagnosis'], mistake: 'Applying depressive criteria here' }),
    ]),
    Q('q2', 'core', 'Which feature best differentiates his presentation from anorexia nervosa?', ['R1'], [
      O('a', 'His restriction is driven by sensory and choking concerns, not by fear of weight gain or a distorted body image', 3,
        { r: 'Sensory/aversive-driven, not weight-driven', approach: 'Contrast the driver of restriction', why: 'Anorexia is driven by weight fear and body-image distortion; his restriction is sensory and fear-of-choking based', keys: ['avoids textures and smells', 'no body-shape concern'], mistake: 'Assuming any restriction with weight loss is anorexia' }),
      O('b', 'The fact that he restricts his eating and has lost a noticeable amount of weight over recent weeks and months', -1,
        { r: 'Restriction and weight loss occur in both', approach: 'Restriction framing', why: 'Restriction and weight loss occur in both; the driver differs', keys: ['shared feature'], mistake: 'Using restriction to differentiate' }),
      O('c', 'The nutritional concerns and the reliance on supplements that have resulted from his limited eating', -1,
        { r: 'Nutritional impact occurs in both', approach: 'Nutrition framing', why: 'Nutritional impact occurs in both; the driver differs', keys: ['shared impact'], mistake: 'Reading nutritional impact as decisive' }),
      O('d', 'The way his eating tends to be a little harder during the busiest and most stressful weeks of his school term', 0,
        { r: 'Stress reactivity is nonspecific', approach: 'Stress framing', why: 'Worsening under stress does not differentiate them', keys: ['nonspecific reactivity'], mistake: 'Using stress sensitivity to differentiate' }),
    ]),
    Q('q3', 'core', 'How does his presentation differ from a specific phobia?', ['R1'], [
      O('a', 'The eating disturbance produces significant nutritional and weight impact central to the diagnosis, beyond a circumscribed fear', 3,
        { r: 'Nutritional impact central, not just a fear', approach: 'Contrast the defining impact', why: 'ARFID centers on the eating disturbance and its nutritional impact, beyond a circumscribed phobic fear', keys: ['nutritional deficiency', 'weight loss'], mistake: 'Reducing a nutritionally significant eating disorder to a simple phobia' }),
      O('b', 'The fact that he feels frightened and does what he can to avoid the things that he finds distressing about eating', -1,
        { r: 'Fear and avoidance occur in both', approach: 'Avoidance framing', why: 'Fear and avoidance occur in both; the nutritional impact differs', keys: ['shared feature'], mistake: 'Using avoidance to differentiate' }),
      O('c', 'The distress that he feels at mealtimes and the discomfort that eating certain foods causes for him', -1,
        { r: 'Mealtime distress is nonspecific', approach: 'Distress framing', why: 'Distress can occur in both; the nutritional impact differs', keys: ['shared distress'], mistake: 'Reading distress as decisive' }),
      O('d', 'The way his eating tends to be a little easier on the weekends when the family schedule is more relaxed', 0,
        { r: 'Schedule effects are nonspecific', approach: 'Schedule framing', why: 'A more relaxed schedule does not differentiate the two', keys: ['nonspecific factor'], mistake: 'Over-reading a schedule effect' }),
    ]),
    Q('q4', 'core', 'What is most important to coordinate given his weight loss and nutritional concern?', ['R2'], [
      O('a', 'Coordinate medical monitoring and nutritional evaluation with a multidisciplinary team as part of care', 3,
        { r: 'Coordinate medical and nutritional care', approach: 'Partner with medical and nutrition', why: 'ARFID with weight loss requires coordinated medical monitoring and nutritional evaluation within a team', keys: ['weight loss', 'nutritional deficiency'], mistake: 'Providing counseling without coordinating the needed medical and nutritional care' }),
      O('b', 'Order laboratory tests and a nutritional panel yourself so that you can personally manage his medical status', -2,
        { r: 'Ordering tests exceeds counselor scope', approach: 'Order-test framing', why: 'Counselors coordinate but do not order labs or manage medical status', keys: ['scope limit'], mistake: 'Acting outside scope of practice' }),
      O('c', 'A previously undetected primary psychotic disorder that might better account for his restricted eating', -1,
        { r: 'Psychosis is not indicated', approach: 'Psychosis framing', why: 'Nothing suggests a psychotic process', keys: ['intact reality testing'], mistake: 'Pursuing an unsupported rule-out' }),
      O('d', 'An emerging neurocognitive decline that could explain why he avoids so many different foods lately', 0,
        { r: 'Cognitive decline is implausible in a teen', approach: 'Neurocognitive framing', why: 'The sensory-based avoidance fits ARFID, not decline', keys: ['developmental pattern'], mistake: 'Pursuing an implausible rule-out' }),
    ]),
    Q('q5', 'intake', 'What is most important to assess about the family and mealtime dynamics?', ['R4'], [
      O('a', 'How mealtime conflict and family responses affect his eating, so the plan can support the family appropriately', 3,
        { r: 'Assess mealtime dynamics and conflict', approach: 'Map the family context', why: 'Mealtime conflict and family responses shape ARFID and must be assessed to plan family-supported care', keys: ['mealtimes are a source of conflict', 'anxious parents'], mistake: 'Assessing the child without the family and mealtime context' }),
      O('b', 'A detailed family pedigree going back several generations to find relatives who were also picky eaters as children', -1,
        { r: 'Extended pedigree is not the priority', approach: 'Pedigree framing', why: 'It does not inform the family-supported plan', keys: ['plan-relevant data'], mistake: 'Gathering data that does not inform treatment' }),
      O('c', 'Whether his eating can be traced to one specific meal that fully explains the entire pattern of his restriction', -1,
        { r: 'A single meal is not the target', approach: 'Origin-hunting framing', why: 'Treatment targets current patterns and family dynamics, not a single origin', keys: ['present patterns'], mistake: 'Hunting for an origin instead of the dynamics' }),
      O('d', 'His general hobbies and interests so that the sessions can be arranged around the activities he most enjoys', 0,
        { r: 'Interests are secondary', approach: 'Preference framing', why: 'Useful for rapport but not what the plan hinges on', keys: ['secondary factor'], mistake: 'Prioritizing rapport detail over the assessment' }),
    ]),
    Q('q6', 'treatment', 'What is the most appropriate first-line treatment framework for Noah?', ['R2'], [
      O('a', 'Multidisciplinary care with medical monitoring and family-involved psychological therapy for the eating disturbance', 3,
        { r: 'Multidisciplinary, family-involved care', approach: 'Apply the guideline', why: 'ARFID in a youth is treated with multidisciplinary care, medical monitoring, and family-involved therapy', keys: ['14-year-old', 'nutritional concern'], mistake: 'Offering individual counseling without medical monitoring or family involvement' }),
      O('b', 'Telling his parents to simply make him eat the avoided foods by insisting firmly at every meal until he complies', -2,
        { r: 'Coercive feeding worsens the problem', approach: 'Force-feeding framing', why: 'Coercive pressure at meals tends to escalate conflict and worsen the avoidance', keys: ['graded, supportive approach'], mistake: 'Coaching coercive mealtime pressure' }),
      O('c', 'Recommending a strict weight-gain diet as the sole intervention without addressing the sensory and fear components', -1,
        { r: 'Diet alone misses the mechanism', approach: 'Diet-only framing', why: 'ARFID requires addressing the sensory and fear drivers, not a diet alone', keys: ['address the drivers'], mistake: 'Ignoring the mechanism of the restriction' }),
      O('d', 'Starting him on a medication that you will select and adjust to increase his appetite over the coming weeks', -2,
        { r: 'Prescribing is outside counselor scope', approach: 'Prescribe medication', why: 'Counselors do not select or adjust medication', keys: ['no prescriptive authority'], mistake: 'Acting outside scope of practice' }),
    ]),
    Q('q7', 'treatment', 'What behavioral approach is most appropriate for his food avoidance?', ['R2'], [
      O('a', 'Graded exposure to avoided foods and textures with support around the choking fear, at a tolerable pace', 3,
        { r: 'Graded food exposure with fear support', approach: 'Apply graded exposure', why: 'Graded exposure to avoided foods and support around the aversive fear addresses the ARFID mechanism', keys: ['avoids textures and smells', 'fear of choking'], mistake: 'Forcing foods all at once or avoiding exposure entirely' }),
      O('b', 'Encouraging him to keep avoiding all the foods he dislikes and to simply rely on supplements indefinitely instead', -2,
        { r: 'Endorsing avoidance maintains the disorder', approach: 'Avoidance-endorsing framing', why: 'Reinforcing avoidance and supplement reliance maintains the restriction', keys: ['avoidance maintains it'], mistake: 'Encouraging the avoidance that sustains the disorder' }),
      O('c', 'Insisting he eat a full plate of the most feared foods immediately with no graded steps so he gets used to it fast', -1,
        { r: 'Flooding is not the graded approach', approach: 'Flooding framing', why: 'A graded, supported approach is the standard, not an abrupt confrontation', keys: ['graded pacing'], mistake: 'Abandoning the graded structure' }),
      O('d', 'Focusing only on discussing his feelings about food without ever introducing any actual food exposure at all', -1,
        { r: 'Talk without exposure is insufficient', approach: 'Insight-only framing', why: 'Graded food exposure, not discussion alone, drives change in ARFID', keys: ['exposure indicated'], mistake: 'Talking about food without exposure' }),
    ]),
    Q('q8', 'treatment', 'How should progress be tracked over the course of treatment?', ['R5'], [
      O('a', 'Track food range, intake, weight and nutrition indicators, and distress over time to guide the plan', 3,
        { r: 'Measurement-based tracking of intake and nutrition', approach: 'Monitor the relevant outcomes', why: 'Tracking food range, intake, weight/nutrition, and distress steers the coordinated plan', keys: ['nutritional concern', 'wants a wider range of foods'], mistake: 'Proceeding without tracking intake and nutritional outcomes' }),
      O('b', 'Rely only on whether his parents happen to mention that mealtimes feel a little calmer than they were before', -1,
        { r: 'Anecdote alone is insufficient', approach: 'Anecdotal framing', why: 'Systematic tracking is more reliable than passing impressions', keys: ['structured measurement'], mistake: 'Substituting anecdote for measurement' }),
      O('c', 'Track only the single number on the scale and base every treatment decision solely on his body weight alone', -1,
        { r: 'Weight alone is too narrow', approach: 'Single-metric framing', why: 'Food range, intake, nutrition, and distress all inform the plan, not weight alone', keys: ['multidimensional monitoring'], mistake: 'Reducing monitoring to one number' }),
      O('d', 'Wait until the end of treatment to review whether his eating has changed at all since the first session', -1,
        { r: 'End-only review misses steering data', approach: 'Delayed-review framing', why: 'Ongoing tracking is needed to steer the work and catch medical concerns', keys: ['continuous monitoring'], mistake: 'Deferring all measurement to the end' }),
    ]),
    Q('q9', 'treatment', 'How should the counselor coordinate with the pediatrician and any dietitian?', ['R4'], [
      O('a', 'With the parents’ consent and a release, coordinate a shared plan with the pediatrician and dietitian', 3,
        { r: 'Consent and release before coordinating', approach: 'Coordinate with consent', why: 'Coordinating with medical and nutrition providers requires parental consent and a release', keys: ['pediatrician referral', 'nutritional care'], mistake: 'Coordinating without parental consent' }),
      O('b', 'Share his full clinical details with the providers right away, since coordinating his care is plainly in his interest', -2,
        { r: 'Coordinating without consent breaches confidentiality', approach: 'Assume-consent framing', why: 'A valid release is required before disclosure', keys: ['no release'], mistake: 'Disclosing before consent is documented' }),
      O('c', 'Avoid contacting the pediatrician or dietitian at all so that the counseling stays entirely separate from his medical care', -1,
        { r: 'No coordination undercuts team care', approach: 'Siloed framing', why: 'Consented coordination is central to ARFID care', keys: ['integrated care'], mistake: 'Refusing helpful, consented coordination' }),
      O('d', 'Release his complete record to every provider so they each hold the full picture of all of his treatment', -2,
        { r: 'Blanket sharing over-discloses', approach: 'Over-disclosure framing', why: 'Disclosure is consented and limited to what is needed', keys: ['minimum necessary'], mistake: 'Releasing more than is appropriate or consented' }),
    ]),
    Q('q10', 'counseling', 'Noah says he feels embarrassed and "weird" that eating is so hard for him. The most therapeutic response is to:', ['R5'], [
      O('a', 'Validate his feelings, normalize the difficulty as a treatable condition, and separate his worth from the eating', 3,
        { r: 'Validate, normalize, and de-shame', approach: 'Reduce shame and instill hope', why: 'Validating and normalizing the difficulty as treatable reduces shame and supports engagement', keys: ['embarrassed', 'feels weird about eating'], mistake: 'Either minimizing the difficulty or reinforcing his shame' }),
      O('b', 'Tell him he just needs to grow up and eat normally like everyone else his age does at mealtimes', -2,
        { r: 'Shaming is harmful and inaccurate', approach: 'Shame framing', why: 'Telling him to just eat normally shames him and ignores the disorder', keys: ['de-shame'], mistake: 'Shaming a genuine difficulty' }),
      O('c', 'Agree that it is indeed quite weird so that he feels you are being completely honest with him about it', -1,
        { r: 'Endorsing the shame is unhelpful', approach: 'Endorse-shame framing', why: 'Agreeing that he is weird reinforces shame', keys: ['de-shame'], mistake: 'Reinforcing the shameful self-label' }),
      O('d', 'Change the subject to something more positive so that he does not have to sit with the difficult feelings at all', -1,
        { r: 'Avoiding the feeling misses the work', approach: 'Avoidant framing', why: 'His feelings can be engaged and supported, not avoided', keys: ['engage the feeling'], mistake: 'Sidestepping a meaningful moment' }),
    ]),
    Q('q11', 'counseling', 'How can the counselor best engage Noah and his parents in the work?', ['R5'], [
      O('a', 'Use developmentally appropriate methods with the child and coach the parents to support graded steps calmly', 3,
        { r: 'Developmentally matched work plus parent coaching', approach: 'Engage child and parents together', why: 'Developmentally appropriate work with the child plus calm parent coaching engages the family in ARFID care', keys: ['14-year-old', 'anxious parents'], mistake: 'Working only with the child or leaving the anxious parents uncoached' }),
      O('b', 'Tell the parents to take over completely and simply decide everything about his eating without involving him at all', -1,
        { r: 'Excluding the youth undermines engagement', approach: 'Parent-only framing', why: 'A 14-year-old’s engagement matters; excluding him undermines the work', keys: ['include the youth'], mistake: 'Leaving the adolescent out of his own care' }),
      O('c', 'Focus the sessions mainly on cataloguing every food he refuses in exhaustive detail every single week', -1,
        { r: 'Cataloguing refusals is not the work', approach: 'Catalogue framing', why: 'Listing refused foods does not advance the graded exposure work', keys: ['action focus'], mistake: 'Centering sessions on enumerating refusals' }),
      O('d', 'Tell him he must eat a normal diet before any of the counseling work to help him can really begin', -1,
        { r: 'Demanding change first stalls engagement', approach: 'Precondition framing', why: 'Engagement and graded work precede, not follow, normalized eating', keys: ['graded steps'], mistake: 'Setting normalized eating as a precondition' }),
    ]),
    Q('q12', 'ethics', 'Noah’s weight drops to a medically concerning level and his parents want to stop treatment. The most appropriate action is to:', ['R4'], [
      O('a', 'Prioritize his safety, communicate the medical seriousness, and coordinate the appropriate level of care', 3,
        { r: 'Prioritize safety and coordinate care', approach: 'Act on the safety concern', why: 'A medically concerning weight requires prioritizing safety and coordinating the appropriate level of care', keys: ['medically concerning weight', 'parents want to stop'], mistake: 'Simply accepting termination when the minor’s safety is at medical risk' }),
      O('b', 'Agree to stop all treatment immediately, since the parents have decided and it is entirely their choice to make', -2,
        { r: 'Ignoring the safety risk is inappropriate', approach: 'Defer-entirely framing', why: 'A minor at medical risk requires safety-focused action, not simple acceptance of termination', keys: ['welfare of the minor'], mistake: 'Disregarding the child’s safety at parental insistence' }),
      O('c', 'Tell the parents nothing about the medical seriousness so that they do not become even more anxious about it', -2,
        { r: 'Withholding the risk endangers the child', approach: 'Withhold-information framing', why: 'The parents need accurate information about the medical seriousness to keep the child safe', keys: ['informed decision'], mistake: 'Withholding safety-critical information' }),
      O('d', 'Refuse to discuss the parents’ concerns at all and simply insist that they continue with you no matter what', -1,
        { r: 'Refusing to engage the concern is unhelpful', approach: 'Stonewall framing', why: 'Their concerns are addressed while the safety issue is coordinated, not ignored', keys: ['engage and coordinate'], mistake: 'Failing to engage the family’s concerns' }),
    ]),
    Q('q13', 'ethics', 'The counselor has limited training in eating disorders. The most ethical course of action is to:', ['R4'], [
      O('a', 'Seek consultation and coordinate multidisciplinary care, referring for the components beyond your competence', 3,
        { r: 'Consult, coordinate, or refer within competence', approach: 'Practice within competence', why: 'ACA C.2. requires competence; eating-disorder care with medical risk needs coordination and referral', keys: ['limited eating-disorder training', 'medical risk'], mistake: 'Managing a medically risky eating disorder alone without competence' }),
      O('b', 'Continue managing the case alone to preserve the continuity of the relationship built with the child and family', -2,
        { r: 'Going it alone exceeds competence', approach: 'Continuity-over-competence', why: 'Continuity does not justify exceeding competence', keys: ['competence exceeded'], mistake: 'Prioritizing continuity over competence' }),
      O('c', 'Tell the family the restriction is not serious enough to need a medical team and continue with general talks only', -2,
        { r: 'Minimizing the risk fails the child', approach: 'Downplay framing', why: 'ARFID with nutritional risk warrants competent, coordinated, multidisciplinary care', keys: ['medical risk'], mistake: 'Underestimating the need for coordinated care' }),
      O('d', 'Transfer the family at once to another provider with no explanation, consultation, or coordinated plan for the transition', -1,
        { r: 'Abrupt transfer mishandles continuity', approach: 'Uncoordinated handoff', why: 'A coordinated referral, not an abrupt transfer, is appropriate', keys: ['coordinated transition'], mistake: 'Dropping the family without coordination' }),
    ]),
  ],
};

// ============================================================================
// D177 — Nightmare Disorder (F51.5) — Sleep — medium
// ============================================================================
const D177 = {
  id: 'ncmhce-D177',
  title: 'Recurrent nightmares disrupting sleep and daytime function',
  category: 'Sleep',
  difficulty: 'medium',
  primaryDiagnosis: { name: 'Nightmare Disorder', code: 'F51.5' },
  diagnosis: { name: 'Nightmare Disorder', code: 'F51.5' },
  differentialOptions: [
    { id: 'do1', name: 'Nightmare Disorder', isCorrect: true },
    { id: 'do2', name: 'Post-Traumatic Stress Disorder', isCorrect: false },
    { id: 'do3', name: 'Sleep Terror Disorder', isCorrect: false },
    { id: 'do4', name: 'Major Depressive Disorder', isCorrect: false },
  ],
  narrative: {
    intake:
      'Elena Ruiz, a 34-year-old nurse, seeks help for months of recurrent, vivid, distressing nightmares from which she wakes fully alert and ' +
      'able to recall the dream in detail. The nightmares cause significant distress and daytime fatigue, and she has begun to dread going to sleep.',
    session1:
      'The nightmares occur during the second half of the night, she becomes rapidly oriented on waking, and she recalls the content clearly, ' +
      'which fits nightmare disorder rather than a confusional arousal. She does not describe the full re-experiencing and hyperarousal picture of PTSD.',
    session2:
      'Her sleep is fragmented and she avoids bedtime, which worsens her fatigue and mood, and her work performance is suffering. She denies that ' +
      'a depressive episode is the primary driver, and she wants to sleep through the night and be rid of the nightmares that keep waking her.',
  },
  diagnosticRationale:
    'Repeated occurrences of extended, dysphoric, well-remembered dreams that generally involve threat and, on awakening, rapid orientation and ' +
    'alertness, causing clinically significant distress or impairment, meets DSM-5-TR criteria for nightmare disorder, distinct from PTSD, sleep ' +
    'terror disorder with its confusional arousals and amnesia, and a primary depressive disorder.',
  references: [
    { id: 'R1', source: 'DSM-5-TR', detail: 'Nightmare disorder: repeated well-remembered dysphoric dreams with rapid orientation on waking; distress/impairment' },
    { id: 'R2', source: 'NICE guidelines', detail: 'Sleep disorders: cognitive behavioral and image-rehearsal approaches and sleep-hygiene within coordinated care' },
    { id: 'R3', source: 'C-SSRS', detail: 'Structured suicide-risk screening when sleep disturbance, fatigue, and low mood co-occur' },
    { id: 'R4', source: 'ACA Code of Ethics', detail: 'A.1. and C.2.: client welfare, coordination of care, and practicing within competence' },
    { id: 'R5', source: 'Corey (Theory & Practice)', detail: 'Working alliance, collaborative goal setting, and the counseling process' },
  ],
  questions: [
    Q('q1', 'intake', 'What is most important to confirm to support a nightmare disorder diagnosis?', ['R1'], [
      O('a', 'Repeated well-remembered dysphoric dreams with rapid orientation on waking, causing distress or impairment', 3,
        { r: 'Well-remembered dreams with rapid orientation', approach: 'Confirm the core criteria', why: 'Nightmare disorder requires repeated well-remembered dysphoric dreams with rapid orientation and distress or impairment', keys: ['wakes fully alert', 'recalls the dream in detail'], mistake: 'Diagnosing without confirming the recall, orientation, and distress features' }),
      O('b', 'That she can pinpoint the single stressful event she is convinced first caused all of her nightmares to begin', -1,
        { r: 'A precipitant is not the criterion', approach: 'Trigger framing', why: 'Etiology is not part of the criteria', keys: ['criteria-based diagnosis'], mistake: 'Using a trigger as the diagnostic test' }),
      O('c', 'That her nightmares have grown a little more frequent over the past few days than they were the week before', -1,
        { r: 'Recent change is not the criterion', approach: 'Recent-change framing', why: 'The established pattern, not a recent uptick, defines it', keys: ['established pattern'], mistake: 'Confusing a brief change with the criteria' }),
      O('d', 'That she currently meets the full symptom count required for a discrete major depressive episode at this time', 0,
        { r: 'Depressive count does not define it', approach: 'Mood-criteria framing', why: 'Nightmare disorder is a sleep-wake disorder, not a mood episode', keys: ['sleep-focused diagnosis'], mistake: 'Applying depressive criteria here' }),
    ]),
    Q('q2', 'core', 'Which feature best differentiates her presentation from PTSD?', ['R1'], [
      O('a', 'The core problem is the nightmares themselves, not a full picture of daytime re-experiencing, avoidance, and hyperarousal', 3,
        { r: 'Nightmares as the core, not full PTSD', approach: 'Contrast the central feature', why: 'PTSD includes daytime re-experiencing, avoidance, and hyperarousal; her core problem is the nightmares themselves', keys: ['no full re-experiencing or hyperarousal picture', 'nightmares are the main issue'], mistake: 'Assuming distressing nightmares always mean PTSD' }),
      O('b', 'The fact that she has distressing dreams at night that disturb her sleep and leave her feeling upset afterward', -1,
        { r: 'Distressing dreams occur in both', approach: 'Dream framing', why: 'Distressing dreams occur in both; the daytime picture differs', keys: ['shared feature'], mistake: 'Using nightmares alone to differentiate' }),
      O('c', 'The fatigue and the difficulty concentrating that she experiences during her day after a poor night of sleep', -1,
        { r: 'Daytime fatigue is nonspecific', approach: 'Fatigue framing', why: 'Fatigue occurs in both; the full symptom picture differs', keys: ['shared fatigue'], mistake: 'Reading fatigue as decisive' }),
      O('d', 'The way her nightmares tend to be a little worse during the busiest and most stressful weeks at the hospital', 0,
        { r: 'Stress reactivity is nonspecific', approach: 'Stress framing', why: 'Worsening under stress does not differentiate them', keys: ['nonspecific reactivity'], mistake: 'Using stress sensitivity to differentiate' }),
    ]),
    Q('q3', 'core', 'How does her presentation differ from sleep terror disorder?', ['R1'], [
      O('a', 'She wakes fully oriented and recalls the dream, unlike the confusional arousal and poor recall of sleep terrors', 3,
        { r: 'Oriented with recall versus confusional arousal', approach: 'Contrast the waking pattern', why: 'Sleep terrors involve confusional arousal with little recall; she wakes oriented and remembers the dream', keys: ['rapidly oriented on waking', 'recalls the content'], mistake: 'Confusing well-recalled nightmares with amnestic sleep terrors' }),
      O('b', 'The fact that she has frightening experiences during the night that disrupt her sleep and distress her', -1,
        { r: 'Nighttime distress occurs in both', approach: 'Distress framing', why: 'Nighttime distress occurs in both; the waking pattern differs', keys: ['shared feature'], mistake: 'Using nighttime distress to differentiate' }),
      O('c', 'The way her sleep is broken and she has trouble getting the rest that she needs during the night', -1,
        { r: 'Fragmented sleep occurs in both', approach: 'Fragmentation framing', why: 'Fragmented sleep occurs in both; the waking pattern differs', keys: ['shared fragmentation'], mistake: 'Reading fragmentation as decisive' }),
      O('d', 'The way her sleep tends to be a little worse on the nights right before a demanding shift at the hospital', 0,
        { r: 'Situational effects are nonspecific', approach: 'Situation framing', why: 'Worse sleep before a hard shift does not differentiate them', keys: ['nonspecific factor'], mistake: 'Over-reading a situational effect' }),
    ]),
    Q('q4', 'core', 'What co-occurring issue is most important to assess given the nightmares?', ['R1'], [
      O('a', 'Whether trauma, medication, substances, or a mood or anxiety condition are contributing, since these commonly co-occur', 3,
        { r: 'Screen contributing and co-occurring factors', approach: 'Assess contributors and comorbidity', why: 'Nightmares commonly relate to trauma, medications, substances, or mood/anxiety, which are assessed to shape the plan', keys: ['months of nightmares', 'fatigue and low mood'], mistake: 'Treating the nightmares without screening for common contributors and comorbidity' }),
      O('b', 'A previously undetected primary psychotic disorder that might better account for her vivid nighttime dreams', -1,
        { r: 'Psychosis is not indicated', approach: 'Psychosis framing', why: 'Nothing suggests a psychotic process', keys: ['intact reality testing'], mistake: 'Pursuing an unsupported rule-out' }),
      O('c', 'A long-standing eating disorder that could be the single underlying cause of all of her nightmares', -1,
        { r: 'Eating pathology is not indicated', approach: 'Eating-disorder framing', why: 'No eating concerns are reported', keys: ['no eating data'], mistake: 'Inventing an unsupported rule-out' }),
      O('d', 'An emerging neurocognitive decline that could account for why she feels so tired during the day lately', 0,
        { r: 'Cognitive decline is improbable here', approach: 'Neurocognitive framing', why: 'Her fatigue reflects disrupted sleep, not decline', keys: ['sleep-focused'], mistake: 'Pursuing an improbable rule-out' }),
    ]),
    Q('q5', 'intake', 'Given her fatigue and low mood, what is the most important step?', ['R3'], [
      O('a', 'Screen for depression and suicide risk, since chronic sleep disturbance and fatigue can affect mood and safety', 3,
        { r: 'Screen mood and suicide risk', approach: 'Assess mood and risk', why: 'Chronic nightmares, fatigue, and low mood warrant screening for depression and suicide risk', keys: ['daytime fatigue', 'low mood'], mistake: 'Treating the sleep problem without screening mood and safety' }),
      O('b', 'Assume her mood is fine because she attributes everything to poor sleep and denies a primary depressive episode', -2,
        { r: 'Assuming mood is fine skips screening', approach: 'Dismissal framing', why: 'Fatigue and low mood still warrant structured screening', keys: ['screen anyway'], mistake: 'Skipping a needed screen on assumption' }),
      O('c', 'Defer any mood or safety screening until her nightmares have resolved and her sleep has been stable for months', -2,
        { r: 'Deferring screening is unsafe', approach: 'Delay framing', why: 'Mood and safety are screened now, not after the sleep improves', keys: ['present risk'], mistake: 'Postponing a needed screen' }),
      O('d', 'Focus only on sleep-hygiene tips for now and return to any questions about her mood at a much later date', -1,
        { r: 'Sequencing mood behind sleep tips is inadequate', approach: 'Single-issue framing', why: 'Sleep tips do not displace screening mood and safety now', keys: ['screen now'], mistake: 'Sequencing safety and mood behind other needs' }),
    ]),
    Q('q6', 'treatment', 'What is the most appropriate first-line treatment approach for Elena?', ['R2'], [
      O('a', 'Image-rehearsal therapy and cognitive behavioral techniques for the nightmares, with sleep-hygiene support', 3,
        { r: 'Image-rehearsal and CBT for nightmares', approach: 'Apply the guideline', why: 'Image-rehearsal therapy and CBT approaches are the evidence-based first-line for nightmare disorder', keys: ['recurrent nightmares', 'wants to sleep through the night'], mistake: 'Offering only general reassurance without an evidence-based nightmare treatment' }),
      O('b', 'Advising her to simply avoid sleeping at night and to nap during the day instead so she misses the nightmares', -2,
        { r: 'Encouraging avoidance worsens sleep', approach: 'Avoidance framing', why: 'Avoiding nighttime sleep worsens the sleep disturbance and fatigue', keys: ['restore sleep'], mistake: 'Recommending avoidance that harms sleep' }),
      O('c', 'Long-term insight-oriented dream analysis alone to interpret the hidden meaning of each nightmare before anything else', -1,
        { r: 'Insight-only is not first-line', approach: 'Depth-work framing', why: 'Image-rehearsal and CBT are the evidence-based first-line approaches', keys: ['evidence-based treatment'], mistake: 'Prioritizing dream interpretation over the indicated approach' }),
      O('d', 'Starting her on a sleep medication that you will select and adjust over the coming weeks yourself', -2,
        { r: 'Prescribing is outside counselor scope', approach: 'Prescribe medication', why: 'Counselors do not select or adjust medication', keys: ['no prescriptive authority'], mistake: 'Acting outside scope of practice' }),
    ]),
    Q('q7', 'treatment', 'How should the counselor address her bedtime avoidance?', ['R2'], [
      O('a', 'Address the avoidance with graded steps and sleep-hygiene so she can return to a regular, restorative sleep pattern', 3,
        { r: 'Reduce avoidance and rebuild sleep', approach: 'Target the avoidance', why: 'Bedtime avoidance worsens the problem, so graded steps and sleep-hygiene help restore healthy sleep', keys: ['dreads going to sleep', 'avoids bedtime'], mistake: 'Leaving the bedtime avoidance in place while treating only the dreams' }),
      O('b', 'Encourage her to keep avoiding bed until she feels no fear at all so that she never has a bad night again', -2,
        { r: 'Endorsing avoidance maintains the problem', approach: 'Avoidance-endorsing framing', why: 'Encouraging avoidance maintains the sleep disturbance', keys: ['reduce avoidance'], mistake: 'Reinforcing the avoidance that sustains the problem' }),
      O('c', 'Tell her to stay up as late as possible every night so that she is too exhausted to have any nightmares at all', -1,
        { r: 'Sleep deprivation is not the treatment', approach: 'Deprivation framing', why: 'Chronic sleep restriction worsens fatigue and mood and is not the treatment', keys: ['restorative sleep'], mistake: 'Recommending harmful sleep deprivation' }),
      O('d', 'Focus only on discussing the nightmare content and leave the bedtime avoidance out of the plan entirely', -1,
        { r: 'Ignoring avoidance narrows the plan', approach: 'Single-factor framing', why: 'Bedtime avoidance is central to address, not just the dream content', keys: ['address the avoidance'], mistake: 'Omitting a key maintaining factor' }),
    ]),
    Q('q8', 'treatment', 'How should progress be tracked over the course of treatment?', ['R5'], [
      O('a', 'Track nightmare frequency, sleep quality, daytime function, and mood over time to guide the plan', 3,
        { r: 'Measurement-based tracking of sleep and function', approach: 'Monitor the relevant outcomes', why: 'Tracking nightmare frequency, sleep quality, function, and mood steers the plan', keys: ['fragmented sleep', 'daytime fatigue'], mistake: 'Proceeding without tracking the relevant sleep and function outcomes' }),
      O('b', 'Rely only on whether she happens to mention in session that she slept a little better than she did before', -1,
        { r: 'Anecdote alone is insufficient', approach: 'Anecdotal framing', why: 'Systematic tracking is more reliable than passing impressions', keys: ['structured measurement'], mistake: 'Substituting anecdote for measurement' }),
      O('c', 'Track only the number of hours she spends in bed and base every decision solely on that one figure', -1,
        { r: 'Time-in-bed alone is too narrow', approach: 'Single-metric framing', why: 'Nightmare frequency, sleep quality, function, and mood all inform the plan, not time in bed', keys: ['multidimensional monitoring'], mistake: 'Reducing monitoring to one number' }),
      O('d', 'Wait until the end of treatment to review whether her nightmares have changed at all since the first session', -1,
        { r: 'End-only review misses steering data', approach: 'Delayed-review framing', why: 'Ongoing tracking is needed to steer the work', keys: ['continuous monitoring'], mistake: 'Deferring all measurement to the end' }),
    ]),
    Q('q9', 'treatment', 'How should the counselor handle her questions about sleep medication?', ['R4'], [
      O('a', 'Coordinate a referral to a prescriber for evaluation while continuing the nightmare-focused work within scope', 3,
        { r: 'Refer for prescribing, keep doing therapy', approach: 'Coordinate within scope', why: 'Medication questions are referred to a prescriber while the counselor continues the psychological treatment', keys: ['asks about medication', 'scope limits'], mistake: 'Advising on specific medication outside scope' }),
      O('b', 'Recommend a specific sleep medication and dose for her to begin taking before her next set of night shifts', -2,
        { r: 'Recommending a drug and dose exceeds scope', approach: 'Prescribe-by-proxy framing', why: 'Counselors do not recommend specific drugs or doses', keys: ['no prescriptive authority'], mistake: 'Making a prescribing recommendation' }),
      O('c', 'Tell her that sleep medication never helps with nightmares and that she should refuse it if it is ever offered', -1,
        { r: 'Blanket refusal advice overreaches', approach: 'Anti-medication framing', why: 'The prescriber and client weigh medication; the counselor does not forbid it', keys: ['shared decision'], mistake: 'Directing a medical decision' }),
      O('d', 'Ignore the medication question and simply redirect her back to the sleep techniques every time she raises it', -1,
        { r: 'Dismissing the question is unhelpful', approach: 'Avoidant framing', why: 'A referral, not avoidance, is the appropriate response', keys: ['coordinated care'], mistake: 'Failing to address a legitimate question' }),
    ]),
    Q('q10', 'counseling', 'Elena tearfully says she is exhausted and afraid the nightmares will never stop. The most therapeutic response is to:', ['R5'], [
      O('a', 'Validate her exhaustion and fear, instill realistic hope about treatment, and monitor her mood and safety', 3,
        { r: 'Validate, instill hope, monitor safety', approach: 'Meet the distress and instill hope', why: 'Validating her distress while offering realistic hope and monitoring safety supports an exhausted client', keys: ['exhausted', 'afraid the nightmares will never stop'], mistake: 'Either minimizing her distress or failing to monitor mood and safety' }),
      O('b', 'Agree that the nightmares probably will never stop so that she can begin to accept living with them permanently', -2,
        { r: 'Endorsing hopelessness is harmful', approach: 'Catastrophize framing', why: 'Confirming the nightmares will never stop deepens hopelessness and risk', keys: ['instill hope'], mistake: 'Validating a hopeless belief' }),
      O('c', 'Tell her she simply needs to stop worrying about the nightmares and that there is no reason to be so upset', -1,
        { r: 'Dismissing the fear invalidates her', approach: 'Minimize framing', why: 'Telling her not to worry dismisses a valid feeling', keys: ['validate then support'], mistake: 'Minimizing a central feeling' }),
      O('d', 'Change the subject to something more pleasant so that she does not have to sit with the difficult feelings at all', -1,
        { r: 'Avoiding the feeling misses the work', approach: 'Avoidant framing', why: 'Her fear can be engaged and her safety monitored, not avoided', keys: ['engage and monitor'], mistake: 'Sidestepping a meaningful moment' }),
    ]),
    Q('q11', 'counseling', 'How can the counselor best support Elena’s engagement in the nightmare work?', ['R5'], [
      O('a', 'Collaborate on the image-rehearsal and coping steps, tying them to her goal of sleeping through the night', 3,
        { r: 'Collaborative, goal-linked skill practice', approach: 'Anchor the work in her goal', why: 'Collaborative image-rehearsal and coping steps tied to her own sleep goal sustain engagement', keys: ['wants to sleep through the night', 'dreads bedtime'], mistake: 'Prescribing techniques without connecting them to her own goals' }),
      O('b', 'Insist she stop thinking about the nightmares entirely and simply never bring them up in session again', -1,
        { r: 'Suppression is not the technique', approach: 'Suppression framing', why: 'Thought suppression is not the evidence-based approach and can backfire', keys: ['structured techniques'], mistake: 'Advising suppression instead of the indicated skills' }),
      O('c', 'Focus the sessions mainly on recounting each nightmare in vivid detail every single week without any technique', -1,
        { r: 'Recounting without technique is not the work', approach: 'Recount-only framing', why: 'Detailed recounting without the rehearsal technique does not advance treatment', keys: ['technique focus'], mistake: 'Rehashing content without the intervention' }),
      O('d', 'Tell her counseling cannot help her at all unless she first agrees to take a sleep medication right away', -1,
        { r: 'Conditioning care is inappropriate', approach: 'Conditioning framing', why: 'The psychological work proceeds alongside any coordinated medication decision', keys: ['engagement matters'], mistake: 'Making counseling contingent on medication' }),
    ]),
    Q('q12', 'ethics', 'Elena asks the counselor to document her as "fully fit for duty" for her nursing job right now. The most appropriate action is to:', ['R4'], [
      O('a', 'Document only what the assessment supports and clarify what your role can and cannot appropriately attest to', 3,
        { r: 'Document only what is supported; clarify role', approach: 'Limit statements to your competence and role', why: 'The counselor documents only what is supported and avoids fitness-for-duty conclusions beyond the role', keys: ['requests a fitness-for-duty statement', 'ongoing symptoms'], mistake: 'Issuing a fitness-for-duty conclusion the assessment does not support' }),
      O('b', 'Write the fit-for-duty statement exactly as she requests, since keeping the client satisfied is what matters most', -2,
        { r: 'An unsupported statement is inappropriate', approach: 'Please-the-client framing', why: 'Attesting to fitness for duty beyond the assessment exceeds the role and competence', keys: ['accurate documentation'], mistake: 'Overstating a conclusion' }),
      O('c', 'Refuse to provide any documentation at all and decline to explain what could appropriately be documented for her', -1,
        { r: 'Flat refusal forecloses helpful options', approach: 'Stonewall framing', why: 'Accurate, role-appropriate documentation can be provided rather than refused outright', keys: ['appropriate documentation'], mistake: 'Declining without clarifying the appropriate options' }),
      O('d', 'Tell her employer directly that she is unfit for duty without discussing it with her or obtaining her consent first', -2,
        { r: 'Disclosing without consent breaches confidentiality', approach: 'Unilateral-disclosure framing', why: 'Contacting the employer without consent breaches confidentiality', keys: ['consent required'], mistake: 'Disclosing to the employer without consent' }),
    ]),
    Q('q13', 'ethics', 'The counselor has limited training in nightmare-focused treatment. The most ethical course of action is to:', ['R4'], [
      O('a', 'Seek consultation and training, and refer or coordinate for the components beyond your competence', 3,
        { r: 'Consult, train, or refer within competence', approach: 'Practice within competence', why: 'ACA C.2. requires competence; nightmare-focused treatment may need consultation, training, or referral', keys: ['limited training', 'specific evidence-based method'], mistake: 'Delivering a specialized method without the required competence' }),
      O('b', 'Continue managing the case alone to preserve the continuity of the relationship built with her', -2,
        { r: 'Going it alone exceeds competence', approach: 'Continuity-over-competence', why: 'Continuity does not justify exceeding competence', keys: ['competence exceeded'], mistake: 'Prioritizing continuity over competence' }),
      O('c', 'Tell her the nightmares are not serious enough to need specialized help and continue with general talks only', -2,
        { r: 'Minimizing the problem fails the client', approach: 'Downplay framing', why: 'Impairing nightmare disorder warrants competent, specialized care', keys: ['real impairment'], mistake: 'Underestimating the need for specialized care' }),
      O('d', 'Transfer her at once to another provider with no explanation, consultation, or coordinated plan for the transition', -1,
        { r: 'Abrupt transfer mishandles continuity', approach: 'Uncoordinated handoff', why: 'A coordinated referral, not an abrupt transfer, is appropriate', keys: ['coordinated transition'], mistake: 'Dropping the client without coordination' }),
    ]),
  ],
};

// ============================================================================
// D178 — Excoriation (Skin-Picking) Disorder (L98.1) — OCD-Related — medium
// ============================================================================
const D178 = {
  id: 'ncmhce-D178',
  title: 'Recurrent skin-picking causing lesions, shame, and avoidance',
  category: 'OCD-Related',
  difficulty: 'medium',
  primaryDiagnosis: { name: 'Excoriation Disorder', code: 'L98.1' },
  diagnosis: { name: 'Excoriation Disorder', code: 'L98.1' },
  differentialOptions: [
    { id: 'do1', name: 'Excoriation Disorder', isCorrect: true },
    { id: 'do2', name: 'Obsessive-Compulsive Disorder', isCorrect: false },
    { id: 'do3', name: 'Body Dysmorphic Disorder', isCorrect: false },
    { id: 'do4', name: 'Trichotillomania', isCorrect: false },
  ],
  narrative: {
    intake:
      'Priya Sharma, a 26-year-old designer, seeks help for recurrent skin-picking that has caused visible lesions and scarring. She has tried ' +
      'many times to stop or cut back and cannot, and she feels intense shame and covers the affected areas with clothing and makeup.',
    session1:
      'The picking is not driven by intrusive obsessions or by a belief that her appearance is defective; it is often automatic or tension-relieving, ' +
      'with relief afterward, and the urge builds beforehand. She targets her skin specifically rather than pulling out hair.',
    session2:
      'She is otherwise functioning, denies hair-pulling as a separate problem, and is distressed by the visible marks and their impact on her social ' +
      'life. She is motivated to learn to manage the urges and has begun avoiding situations where the lesions might be noticed by other people.',
  },
  diagnosticRationale:
    'Recurrent skin-picking resulting in skin lesions, with repeated attempts to decrease or stop and clinically significant distress, not better ' +
    'explained by another disorder or a substance, meets DSM-5-TR criteria for excoriation (skin-picking) disorder, distinct from OCD’s ' +
    'obsession-driven compulsions, body dysmorphic disorder’s appearance preoccupation, and trichotillomania’s hair-pulling.',
  references: [
    { id: 'R1', source: 'DSM-5-TR', detail: 'Excoriation disorder: recurrent skin-picking with lesions, repeated attempts to stop, clinically significant distress' },
    { id: 'R2', source: 'NICE guidelines', detail: 'Body-focused repetitive behaviors: habit reversal training and behavioral intervention within coordinated care' },
    { id: 'R3', source: 'Barlow PCT', detail: 'Functional analysis of urges and antecedents and competing-response training' },
    { id: 'R4', source: 'ACA Code of Ethics', detail: 'A.1. and C.2.: client welfare, informed consent, and practicing within competence' },
    { id: 'R5', source: 'Corey (Theory & Practice)', detail: 'Working alliance, collaborative goal setting, and the counseling process' },
  ],
  questions: [
    Q('q1', 'intake', 'What is most important to confirm to support an excoriation disorder diagnosis?', ['R1'], [
      O('a', 'Recurrent skin-picking that results in skin lesions, with repeated unsuccessful attempts to stop and real distress', 3,
        { r: 'Recurrent picking, lesions, failed attempts', approach: 'Confirm the core criteria', why: 'Excoriation disorder requires recurrent skin-picking with lesions, repeated attempts to stop, and distress', keys: ['visible lesions and scarring', 'cannot stop despite trying'], mistake: 'Diagnosing without confirming the recurrent picking, lesions, and failed attempts' }),
      O('b', 'That she can pinpoint the single stressful event she is convinced first caused her to start picking her skin', -1,
        { r: 'A precipitant is not the criterion', approach: 'Trigger framing', why: 'Etiology is not part of the criteria', keys: ['criteria-based diagnosis'], mistake: 'Using a trigger as the diagnostic test' }),
      O('c', 'That her picking has grown a little more frequent over the past few days than it was the week just before that', -1,
        { r: 'Recent change is not the criterion', approach: 'Recent-change framing', why: 'A recurrent pattern, not a recent uptick, is required', keys: ['recurrent pattern'], mistake: 'Confusing a brief change with the criteria' }),
      O('d', 'That she currently meets the full symptom count required for a discrete major depressive episode at this time', 0,
        { r: 'Depressive count does not define it', approach: 'Mood-criteria framing', why: 'Excoriation disorder is a body-focused repetitive behavior, not a mood episode', keys: ['behavior-focused diagnosis'], mistake: 'Applying depressive criteria here' }),
    ]),
    Q('q2', 'core', 'Which feature best differentiates her presentation from obsessive-compulsive disorder?', ['R1'], [
      O('a', 'The picking is not driven by intrusive obsessions and is often automatic or tension-relieving, unlike OCD’s obsession-driven rituals', 3,
        { r: 'Not obsession-driven; tension-relieving', approach: 'Contrast the driver of the behavior', why: 'OCD compulsions are driven by intrusive obsessions; her picking is automatic or tension-relieving without obsessions', keys: ['no intrusive obsessions', 'relief after picking'], mistake: 'Reading body-focused picking as an OCD compulsion' }),
      O('b', 'The fact that she repeats a particular body-focused behavior over and over again even though she is really trying quite hard to stop herself from doing it each time', -1,
        { r: 'Repetitive behavior occurs in both', approach: 'Repetition framing', why: 'Repetitive behavior occurs in both; the driver differs', keys: ['shared feature'], mistake: 'Using repetition to differentiate' }),
      O('c', 'The distress and the shame that she feels about the behavior and its visible effects on her skin', -1,
        { r: 'Distress occurs in both', approach: 'Distress framing', why: 'Distress occurs in both; the behavioral driver differs', keys: ['shared affect'], mistake: 'Reading distress as decisive' }),
      O('d', 'The way her picking tends to be a little worse during the busiest and most stressful weeks of her work', 0,
        { r: 'Stress reactivity is nonspecific', approach: 'Stress framing', why: 'Worsening under stress does not differentiate them', keys: ['nonspecific reactivity'], mistake: 'Using stress sensitivity to differentiate' }),
    ]),
    Q('q3', 'core', 'How does her presentation differ from body dysmorphic disorder?', ['R1'], [
      O('a', 'Her picking is not driven by a belief that her appearance is defective, which is the core of body dysmorphic disorder', 3,
        { r: 'No appearance-defect belief driving it', approach: 'Contrast the underlying motive', why: 'BDD is driven by a perceived appearance defect; her picking is not, even though it affects appearance', keys: ['not driven by a defect belief', 'automatic or tension-relieving'], mistake: 'Confusing the appearance impact of picking with BDD’s defect preoccupation' }),
      O('b', 'The fact that she is unhappy about how the marks on her skin look and tries to cover the affected areas from view', -1,
        { r: 'Appearance distress occurs in both', approach: 'Appearance framing', why: 'Distress about appearance can occur in both; the driver differs', keys: ['shared feature'], mistake: 'Using appearance distress to differentiate' }),
      O('c', 'The way she avoids certain social situations where other people might notice the marks on her skin', -1,
        { r: 'Avoidance occurs in both', approach: 'Avoidance framing', why: 'Avoidance occurs in both; the underlying motive differs', keys: ['shared avoidance'], mistake: 'Reading avoidance as decisive' }),
      O('d', 'The way she feels a little more self-conscious in the evenings than she does earlier during the daytime hours', 0,
        { r: 'Diurnal pattern is not diagnostic', approach: 'Time-of-day framing', why: 'Timing does not separate the two', keys: ['nonspecific timing'], mistake: 'Over-reading a circadian pattern' }),
    ]),
    Q('q4', 'core', 'How does her presentation differ from trichotillomania?', ['R1'], [
      O('a', 'She targets her skin by picking, rather than recurrently pulling out her hair as in trichotillomania', 3,
        { r: 'Skin-picking versus hair-pulling', approach: 'Contrast the target behavior', why: 'Trichotillomania involves hair-pulling; excoriation disorder involves skin-picking', keys: ['targets skin', 'denies hair-pulling'], mistake: 'Conflating skin-picking with hair-pulling' }),
      O('b', 'The fact that she performs a recurrent body-focused behavior that she has real trouble stopping on her own', -1,
        { r: 'Body-focused behavior occurs in both', approach: 'Behavior framing', why: 'A body-focused repetitive behavior occurs in both; the target differs', keys: ['shared feature'], mistake: 'Using the behavior class to differentiate' }),
      O('c', 'The tension she feels building beforehand and the sense of relief that follows once she has done it', -1,
        { r: 'The urge-relief cycle occurs in both', approach: 'Urge framing', why: 'The build-and-relief cycle occurs in both; the target differs', keys: ['shared cycle'], mistake: 'Reading the urge cycle as decisive' }),
      O('d', 'The way the behavior tends to increase a little on the days when she has had less sleep the night before', 0,
        { r: 'Sleep effects are nonspecific', approach: 'Sleep framing', why: 'More of the behavior after poor sleep does not differentiate them', keys: ['nonspecific factor'], mistake: 'Over-reading a sleep effect' }),
    ]),
    Q('q5', 'intake', 'What is most useful to assess to inform a behavioral treatment plan?', ['R3'], [
      O('a', 'The antecedents, settings, and automatic-versus-focused pattern of her picking and the urges that precede it', 3,
        { r: 'Functional analysis of antecedents and urges', approach: 'Map the behavior’s function', why: 'Habit reversal depends on a functional analysis of antecedents, settings, and the urge pattern', keys: ['automatic or tension-relieving', 'urge builds before picking'], mistake: 'Starting treatment without a functional analysis of the behavior' }),
      O('b', 'A detailed family pedigree going back several generations to find relatives who also picked their skin', -1,
        { r: 'Extended pedigree is not the priority', approach: 'Pedigree framing', why: 'It does not inform the behavioral plan', keys: ['plan-relevant data'], mistake: 'Gathering data that does not inform treatment' }),
      O('c', 'Whether the picking can be traced to one specific childhood memory that fully explains all of it today', -1,
        { r: 'A single memory is not the target', approach: 'Origin-hunting framing', why: 'Treatment targets current antecedents and urges, not a single origin', keys: ['present maintenance'], mistake: 'Hunting for an origin instead of the maintaining factors' }),
      O('d', 'Her general personality style and broad preferences so the sessions can be matched to how she likes to work', 0,
        { r: 'Style preferences are secondary', approach: 'Preference framing', why: 'Useful but not what a behavioral plan hinges on', keys: ['secondary factor'], mistake: 'Prioritizing style over the functional analysis' }),
    ]),
    Q('q6', 'treatment', 'What is the most appropriate first-line treatment framework for Priya?', ['R2'], [
      O('a', 'Habit reversal training with competing-response and stimulus-control strategies for the picking', 3,
        { r: 'Habit reversal training', approach: 'Apply the guideline', why: 'Habit reversal training is the first-line behavioral treatment for excoriation disorder', keys: ['urge builds before picking', 'wants to manage the urges'], mistake: 'Defaulting to open-ended talk therapy instead of habit reversal' }),
      O('b', 'Long-term insight-oriented therapy to uncover the unconscious meaning of the picking before any behavioral work', -1,
        { r: 'Insight-first is not first-line', approach: 'Depth-work framing', why: 'Behavioral treatment is the evidence-based first-line approach', keys: ['behavioral intervention'], mistake: 'Prioritizing insight over the indicated behavioral work' }),
      O('c', 'Telling her to simply use more willpower and stop picking on her own, since it is just a matter of self-control', -2,
        { r: 'Willpower-only advice ignores the disorder', approach: 'Willpower framing', why: 'Framing a body-focused repetitive behavior as mere willpower disregards the evidence', keys: ['repeated failed attempts'], mistake: 'Reducing the disorder to willpower' }),
      O('d', 'Starting her on a medication that you will select and adjust to reduce the urges over the coming weeks yourself', -2,
        { r: 'Prescribing is outside counselor scope', approach: 'Prescribe medication', why: 'Counselors do not select or adjust medication', keys: ['no prescriptive authority'], mistake: 'Acting outside scope of practice' }),
    ]),
    Q('q7', 'treatment', 'What is the central behavioral strategy to teach her?', ['R3'], [
      O('a', 'A competing response she can use when the urge arises, paired with awareness training and stimulus control', 3,
        { r: 'Competing response plus awareness and stimulus control', approach: 'Teach the core habit-reversal skills', why: 'A competing response with awareness and stimulus control is the core of habit reversal training', keys: ['urge builds before picking', 'often automatic'], mistake: 'Omitting the competing response that is central to the treatment' }),
      O('b', 'Encouraging her to pick only in a controlled way at set times so that she stays in charge of when it happens', -2,
        { r: 'Scheduling the behavior maintains it', approach: 'Controlled-picking framing', why: 'Encouraging continued picking reinforces the behavior rather than reducing it', keys: ['reduce the behavior'], mistake: 'Endorsing the behavior the treatment aims to reduce' }),
      O('c', 'Telling her to wait until she feels no urge at all before she tries to use any of the strategies she has learned', -1,
        { r: 'Waiting for no urge stalls the work', approach: 'Wait-for-calm framing', why: 'The competing response is used when the urge arises, not after it disappears', keys: ['use the skill with the urge'], mistake: 'Setting an unattainable precondition' }),
      O('d', 'Focusing only on covering the lesions better so that the visible effects of the picking are less noticeable', -1,
        { r: 'Concealment is not the treatment', approach: 'Concealment framing', why: 'Hiding the effects does not address the picking behavior itself', keys: ['behavior change'], mistake: 'Treating concealment as the intervention' }),
    ]),
    Q('q8', 'treatment', 'How should progress be tracked over the course of treatment?', ['R5'], [
      O('a', 'Track picking frequency, urges, use of the competing response, and distress over time to guide the plan', 3,
        { r: 'Measurement-based tracking of behavior and skills', approach: 'Monitor the relevant outcomes', why: 'Tracking picking, urges, competing-response use, and distress steers the habit-reversal plan', keys: ['urges and picking', 'wants to manage them'], mistake: 'Proceeding without tracking the target behavior and skills' }),
      O('b', 'Rely only on whether she happens to say in session that the picking feels a little more under control lately', -1,
        { r: 'Anecdote alone is insufficient', approach: 'Anecdotal framing', why: 'Systematic tracking is more reliable than passing impressions', keys: ['structured measurement'], mistake: 'Substituting anecdote for measurement' }),
      O('c', 'Track only how well the lesions are hidden and base every decision solely on how visible they are', -1,
        { r: 'Concealment is the wrong metric', approach: 'Wrong-metric framing', why: 'The behavior and urges are the outcome, not how well the effects are concealed', keys: ['behavior focus'], mistake: 'Measuring concealment instead of the behavior' }),
      O('d', 'Wait until the end of treatment to review whether her picking has changed at all since the first session', -1,
        { r: 'End-only review misses steering data', approach: 'Delayed-review framing', why: 'Ongoing tracking is needed to steer the work', keys: ['continuous monitoring'], mistake: 'Deferring all measurement to the end' }),
    ]),
    Q('q9', 'treatment', 'How should the counselor handle the skin damage and any medical concern?', ['R4'], [
      O('a', 'Coordinate a referral for medical or dermatological care for the lesions while continuing the behavioral work', 3,
        { r: 'Refer for medical care, keep doing therapy', approach: 'Coordinate within scope', why: 'Skin damage may need medical or dermatological care, coordinated while the counselor continues the behavioral work', keys: ['visible lesions and scarring', 'scope limits'], mistake: 'Ignoring the medical aspect or trying to manage the skin damage yourself' }),
      O('b', 'Treat and dress the skin lesions yourself in session so that she does not have to see another provider about them', -2,
        { r: 'Providing medical care exceeds scope', approach: 'Overreach framing', why: 'Counselors do not provide medical or dermatological treatment', keys: ['scope limit'], mistake: 'Acting outside scope of practice' }),
      O('c', 'Tell her the lesions are not a concern and that she should simply ignore any medical aspect of the picking', -1,
        { r: 'Dismissing the medical aspect is inappropriate', approach: 'Dismiss framing', why: 'Skin damage can warrant medical attention and should not be dismissed', keys: ['coordinate medical care'], mistake: 'Ignoring a legitimate medical concern' }),
      O('d', 'Ignore the medical question entirely and simply redirect her back to the behavioral tasks every time she raises it', -1,
        { r: 'Dismissing the question is unhelpful', approach: 'Avoidant framing', why: 'A referral, not avoidance, is the appropriate response', keys: ['coordinated care'], mistake: 'Failing to address a legitimate concern' }),
    ]),
    Q('q10', 'counseling', 'Priya expresses deep shame and says she feels disgusting because of the picking. The most therapeutic response is to:', ['R5'], [
      O('a', 'Respond with empathy, normalize the behavior as a treatable condition, and separate her worth from the behavior', 3,
        { r: 'Empathize, normalize, and de-shame', approach: 'Reduce shame and instill hope', why: 'Empathic normalizing that separates her worth from the behavior reduces shame and supports engagement', keys: ['intense shame', 'feels disgusting'], mistake: 'Either minimizing the distress or reinforcing the shame' }),
      O('b', 'Tell her she has nothing to feel ashamed about and that she should simply stop letting it bother her so much', -1,
        { r: 'Dismissing the shame invalidates her', approach: 'Minimize framing', why: 'Telling her to just stop feeling ashamed invalidates the emotion and the alliance', keys: ['validate then support'], mistake: 'Minimizing a central feeling' }),
      O('c', 'Agree that the behavior is indeed disgusting so that she feels motivated to work hard at stopping it right away', -2,
        { r: 'Endorsing the shame is harmful', approach: 'Shame-as-motivation framing', why: 'Reinforcing shame is counter-therapeutic and tends to worsen the behavior', keys: ['de-shame'], mistake: 'Using shame as a motivator' }),
      O('d', 'Change the subject to something more positive so that she does not have to sit with the difficult feelings at all', -1,
        { r: 'Avoiding the feeling misses the work', approach: 'Avoidant framing', why: 'Her shame can be engaged and supported, not avoided', keys: ['engage the distress'], mistake: 'Sidestepping a meaningful moment' }),
    ]),
    Q('q11', 'counseling', 'How can the counselor best support Priya’s engagement in the behavioral work?', ['R5'], [
      O('a', 'Collaborate on realistic, graded goals tied to her wish to manage the urges, reinforcing each small success', 3,
        { r: 'Collaborative, graded goals with reinforcement', approach: 'Anchor the work in her goal', why: 'Graded, collaborative goals tied to her own motivation and reinforced successes sustain engagement', keys: ['motivated to manage the urges', 'repeated failed attempts'], mistake: 'Imposing rigid all-or-nothing demands that set her up for discouragement' }),
      O('b', 'Insist she stop all picking immediately and completely and treat any lapse as a total and unforgivable failure', -1,
        { r: 'All-or-nothing framing backfires', approach: 'All-or-nothing framing', why: 'Punitive, all-or-nothing expectations undermine engagement and relapse-prevention', keys: ['lapse versus relapse'], mistake: 'Setting up an all-or-nothing trap' }),
      O('c', 'Focus the sessions mainly on cataloguing every lesion in exhaustive detail every single week', -1,
        { r: 'Cataloguing is not the work', approach: 'Catalogue framing', why: 'Exhaustive logging without skill-building does not advance the work', keys: ['skill focus'], mistake: 'Centering sessions on enumerating the behavior' }),
      O('d', 'Tell her counseling cannot help her unless she first agrees to take medication exactly as a prescriber directs', -1,
        { r: 'Conditioning care is inappropriate', approach: 'Conditioning framing', why: 'Behavioral treatment can proceed alongside any coordinated medication decision', keys: ['engagement matters'], mistake: 'Making counseling contingent on medication' }),
    ]),
    Q('q12', 'ethics', 'Priya asks the counselor to keep the diagnosis out of any record her employer’s insurer could access. The most appropriate action is to:', ['R4'], [
      O('a', 'Clarify confidentiality and the limits of any release, sharing only what she consents to and what is needed', 3,
        { r: 'Honor consent and minimum-necessary disclosure', approach: 'Apply consent and minimum necessary', why: 'Disclosures to third parties are governed by her informed consent and minimum-necessary limits', keys: ['adult client', 'wants diagnosis withheld from insurer'], mistake: 'Disclosing more than she consents to or than is necessary' }),
      O('b', 'Send her full clinical record, including the diagnosis, to the insurer right away since they may need it anyway', -2,
        { r: 'Sending everything ignores consent', approach: 'Over-disclosure framing', why: 'Third-party disclosure requires consent and minimum-necessary limits', keys: ['minimum necessary'], mistake: 'Over-disclosing without consent' }),
      O('c', 'Falsify the record to remove the diagnosis entirely so that there is no chance the insurer could ever see it', -2,
        { r: 'Falsifying records is unethical', approach: 'Falsify framing', why: 'Altering the clinical record to hide a diagnosis violates professional honesty', keys: ['accurate records'], mistake: 'Falsifying documentation' }),
      O('d', 'Refuse to discuss the confidentiality question at all and simply change the subject whenever she raises it', -1,
        { r: 'Avoiding the issue is unhelpful', approach: 'Avoidant framing', why: 'Confidentiality should be explained, not avoided', keys: ['transparent limits'], mistake: 'Sidestepping a needed conversation' }),
    ]),
    Q('q13', 'ethics', 'Priya asks whether the counselor is trained in habit reversal for skin-picking. The most ethical response is to:', ['R4'], [
      O('a', 'Answer honestly about your competence and seek consultation or refer for any components beyond your training', 3,
        { r: 'Practice within competence', approach: 'Be transparent about competence', why: 'ACA C.2. requires practicing within competence and consulting or referring as needed', keys: ['client asks about training', 'specific behavioral method'], mistake: 'Overstating competence to retain the client' }),
      O('b', 'Assure her you can handle anything at all and that there is no need for her to ask about your training again', -2,
        { r: 'Overstating competence is unethical', approach: 'Overclaim framing', why: 'Misrepresenting competence violates the ethics code', keys: ['honest representation'], mistake: 'Claiming competence you cannot support' }),
      O('c', 'Tell her the question is inappropriate and that clients should not ask their counselors about their qualifications', -2,
        { r: 'Dismissing the question is wrong', approach: 'Dismissive framing', why: 'Clients are entitled to ask about competence and credentials', keys: ['client autonomy'], mistake: 'Shutting down a legitimate question' }),
      O('d', 'Transfer her to someone else at once without explanation rather than discuss your training or arrange a handoff', -1,
        { r: 'Abrupt transfer mishandles continuity', approach: 'Uncoordinated handoff', why: 'An honest conversation, not an abrupt transfer, is appropriate', keys: ['coordinated transition'], mistake: 'Dropping the client instead of answering honestly' }),
    ]),
  ],
};

// ============================================================================
// D179 — Selective Mutism (F94.0) — Anxiety — medium
// ============================================================================
const D179 = {
  id: 'ncmhce-D179',
  title: 'A child who speaks at home but is consistently silent at school',
  category: 'Anxiety',
  difficulty: 'medium',
  primaryDiagnosis: { name: 'Selective Mutism', code: 'F94.0' },
  diagnosis: { name: 'Selective Mutism', code: 'F94.0' },
  differentialOptions: [
    { id: 'do1', name: 'Selective Mutism', isCorrect: true },
    { id: 'do2', name: 'Social Anxiety Disorder', isCorrect: false },
    { id: 'do3', name: 'Autism Spectrum Disorder', isCorrect: false },
    { id: 'do4', name: 'Language Disorder', isCorrect: false },
  ],
  narrative: {
    intake:
      'Mia Nguyen, a 6-year-old, is referred by her teacher because she consistently does not speak at school despite speaking freely and fluently ' +
      'at home with her family. The pattern has lasted well beyond the first month of school and is interfering with her learning and friendships.',
    session1:
      'Her failure to speak is specific to certain social situations, not a general inability, and it is not due to a lack of knowledge of the ' +
      'spoken language or a communication disorder. She has age-appropriate language at home and reciprocal social interest with her family.',
    session2:
      'At school she communicates by nodding or pointing and appears anxious when expected to speak, and her parents note she is shy but warm at ' +
      'home. She is otherwise developing typically, and her parents want to help her feel comfortable enough to speak and participate at school.',
  },
  diagnosticRationale:
    'A consistent failure to speak in specific social situations where speaking is expected, despite speaking in other situations, lasting more ' +
    'than one month and interfering with functioning, not due to a lack of language knowledge or a communication disorder, meets DSM-5-TR ' +
    'criteria for selective mutism, distinct from social anxiety disorder, autism spectrum disorder, and a language disorder.',
  references: [
    { id: 'R1', source: 'DSM-5-TR', detail: 'Selective mutism: consistent failure to speak in specific situations despite speaking in others; 1+ month; not a language issue' },
    { id: 'R2', source: 'NICE guidelines', detail: 'Childhood anxiety: graded exposure and behavioral intervention with parent and school involvement' },
    { id: 'R3', source: 'Barlow PCT', detail: 'Graded exposure, shaping of speech, and reducing accommodation and safety behaviors' },
    { id: 'R4', source: 'ACA Code of Ethics', detail: 'A.1., B.5., and C.2.: welfare of minor clients, parental consent, and practicing within competence' },
    { id: 'R5', source: 'Corey (Theory & Practice)', detail: 'Working alliance with the child and family and collaborative goal setting' },
  ],
  questions: [
    Q('q1', 'intake', 'What is most important to confirm to support a selective mutism diagnosis?', ['R1'], [
      O('a', 'A consistent failure to speak in specific situations despite speaking elsewhere, lasting over a month with impairment', 3,
        { r: 'Situation-specific mutism over a month', approach: 'Confirm the core criteria', why: 'Selective mutism requires consistent failure to speak in specific situations despite speaking elsewhere, over a month, with impairment', keys: ['silent at school', 'speaks freely at home'], mistake: 'Diagnosing without confirming the situation-specificity, duration, and impairment' }),
      O('b', 'That her parents can pinpoint the single event they are convinced first caused her to stop speaking at school', -1,
        { r: 'A precipitant is not the criterion', approach: 'Trigger framing', why: 'Etiology is not part of the criteria', keys: ['criteria-based diagnosis'], mistake: 'Using a trigger as the diagnostic test' }),
      O('c', 'That her silence at school has grown a little more noticeable over the past few days than it was the week before', -1,
        { r: 'Recent change is not the criterion', approach: 'Recent-change framing', why: 'A pattern beyond one month, not a recent uptick, is required', keys: ['persistent pattern'], mistake: 'Confusing a brief change with the criteria' }),
      O('d', 'That she currently meets the full symptom count required for a discrete major depressive episode at this time', 0,
        { r: 'Depressive count does not define it', approach: 'Mood-criteria framing', why: 'Selective mutism is an anxiety-related condition, not a mood episode', keys: ['anxiety-focused diagnosis'], mistake: 'Applying depressive criteria here' }),
    ]),
    Q('q2', 'core', 'Which feature best differentiates her presentation from social anxiety disorder?', ['R1'], [
      O('a', 'The defining feature is a consistent failure to speak in specific settings, not a broader fear of social evaluation', 3,
        { r: 'Situation-specific mutism, not broad social fear', approach: 'Contrast the defining feature', why: 'Social anxiety disorder centers on fear of evaluation broadly; selective mutism centers on the consistent failure to speak in specific settings', keys: ['silent at school specifically', 'speaks at home'], mistake: 'Treating the mutism as merely part of general social anxiety' }),
      O('b', 'The fact that she appears anxious and uncomfortable in some of the social situations that she encounters at school', -1,
        { r: 'Social anxiety can occur in both', approach: 'Anxiety framing', why: 'Social anxiety can occur in both; the failure to speak is the defining feature', keys: ['shared feature'], mistake: 'Using social anxiety to differentiate' }),
      O('c', 'The shyness and the reticence that she shows around people she does not know very well yet', -1,
        { r: 'Shyness is nonspecific', approach: 'Shyness framing', why: 'Shyness can occur in both; the situation-specific mutism differs', keys: ['shared reticence'], mistake: 'Reading shyness as decisive' }),
      O('d', 'The way her reluctance tends to be a little worse on the busier and noisier days in her classroom', 0,
        { r: 'Environmental effects are nonspecific', approach: 'Environment framing', why: 'A noisier room does not differentiate the two', keys: ['nonspecific factor'], mistake: 'Over-reading an environmental effect' }),
    ]),
    Q('q3', 'core', 'How does her presentation differ from autism spectrum disorder?', ['R1'], [
      O('a', 'She has age-appropriate language and reciprocal social interest at home, unlike the social-communication deficits of autism', 3,
        { r: 'Intact language and reciprocity at home', approach: 'Contrast the social-communication capacity', why: 'Autism involves pervasive social-communication deficits; she has age-appropriate language and reciprocity at home', keys: ['speaks fluently at home', 'reciprocal social interest'], mistake: 'Reading situational mutism as autistic social-communication deficits' }),
      O('b', 'The fact that she often communicates by nodding or pointing rather than by speaking when she is at school', -1,
        { r: 'Nonverbal communication can occur in both', approach: 'Nonverbal framing', why: 'Nonverbal communication can occur in both; the home capacity differs', keys: ['shared feature'], mistake: 'Using nonverbal communication to differentiate' }),
      O('c', 'The difficulty she has interacting comfortably with the other children and adults at her school', -1,
        { r: 'Social difficulty occurs in both', approach: 'Social-difficulty framing', why: 'Social difficulty occurs in both; the underlying capacity differs', keys: ['shared difficulty'], mistake: 'Reading social difficulty as decisive' }),
      O('d', 'The way she seems a little more reserved on the days when her school routine has been changed or disrupted', 0,
        { r: 'Routine effects are nonspecific', approach: 'Routine framing', why: 'A disrupted routine does not differentiate the two', keys: ['nonspecific factor'], mistake: 'Over-reading a routine effect' }),
    ]),
    Q('q4', 'core', 'How does her presentation differ from a language disorder?', ['R1'], [
      O('a', 'Her failure to speak is situational, not due to a lack of language knowledge or an inability to produce speech', 3,
        { r: 'Situational silence, not a language deficit', approach: 'Contrast situational versus capacity', why: 'A language disorder reflects impaired language ability; her silence is situational with intact language at home', keys: ['fluent at home', 'not a language-knowledge problem'], mistake: 'Reading situational mutism as a language disorder' }),
      O('b', 'The fact that she does not speak in certain settings where the other children are talking and participating', -1,
        { r: 'Reduced speech occurs in both', approach: 'Speech framing', why: 'Reduced speech in settings can occur in both; the home fluency differs', keys: ['shared feature'], mistake: 'Using reduced speech to differentiate' }),
      O('c', 'The trouble she has fully participating in classroom activities that involve talking with others', -1,
        { r: 'Participation difficulty is nonspecific', approach: 'Participation framing', why: 'Participation difficulty occurs in both; the language capacity differs', keys: ['shared difficulty'], mistake: 'Reading participation difficulty as decisive' }),
      O('d', 'The way she tends to speak a little less on the days when she is more tired than she is on her more rested days', 0,
        { r: 'Fatigue effects are nonspecific', approach: 'Fatigue framing', why: 'Speaking less when tired does not differentiate them', keys: ['nonspecific factor'], mistake: 'Over-reading a fatigue effect' }),
    ]),
    Q('q5', 'intake', 'What is most useful to gather to support the assessment?', ['R1'], [
      O('a', 'Collateral from home and school documenting where she does and does not speak and any language concerns', 3,
        { r: 'Cross-setting collateral on speech', approach: 'Gather multi-setting data', why: 'Selective mutism assessment relies on collateral documenting the situational pattern and ruling out language concerns', keys: ['speaks at home, not at school', 'teacher referral'], mistake: 'Relying on one setting or informant without documenting the situational pattern' }),
      O('b', 'A detailed family pedigree going back several generations to find relatives who were also quiet children', -1,
        { r: 'Extended pedigree is not the priority', approach: 'Pedigree framing', why: 'It does not document the situational speech pattern', keys: ['criteria-relevant data'], mistake: 'Gathering data that does not inform the diagnosis' }),
      O('c', 'Whether her silence can be traced to one specific school incident that fully explains the entire pattern', -1,
        { r: 'A single incident is not the target', approach: 'Origin-hunting framing', why: 'The diagnosis rests on the situational pattern, not a single incident', keys: ['situational pattern'], mistake: 'Hunting for an origin instead of the pattern' }),
      O('d', 'Her favorite games and characters so that the sessions can be arranged around the activities she most enjoys', 0,
        { r: 'Interests are secondary', approach: 'Preference framing', why: 'Useful for rapport but not what supports the diagnosis', keys: ['secondary factor'], mistake: 'Prioritizing rapport detail over assessment' }),
    ]),
    Q('q6', 'treatment', 'What is the most appropriate first-line treatment framework for Mia?', ['R2'], [
      O('a', 'Behavioral intervention with graded exposure and shaping of speech, involving parents and the school', 3,
        { r: 'Graded exposure and speech shaping with parents and school', approach: 'Apply the guideline', why: 'Selective mutism responds to behavioral graded exposure and speech shaping with parent and school involvement', keys: ['silent at school', 'wants to participate'], mistake: 'Pressuring her to speak or treating the child in isolation from home and school' }),
      O('b', 'Insisting she speak in class right away and withholding privileges until she does so at school each day', -2,
        { r: 'Coercive pressure increases anxiety', approach: 'Coercion framing', why: 'Pressuring or punishing her to speak increases anxiety and worsens the mutism', keys: ['graded, supportive approach'], mistake: 'Coaching coercive pressure to speak' }),
      O('c', 'Long-term insight-oriented play therapy alone to uncover the hidden meaning of her silence before any exposure', -1,
        { r: 'Insight-only is not first-line', approach: 'Depth-work framing', why: 'Graded behavioral exposure is the evidence-based first-line approach', keys: ['exposure indicated'], mistake: 'Prioritizing insight over graded exposure' }),
      O('d', 'Starting her on a medication that you will select and adjust yourself over the coming weeks to help her speak', -2,
        { r: 'Prescribing is outside counselor scope', approach: 'Prescribe medication', why: 'Counselors do not select or adjust medication', keys: ['no prescriptive authority'], mistake: 'Acting outside scope of practice' }),
    ]),
    Q('q7', 'treatment', 'How should the counselor structure the exposure to speaking?', ['R3'], [
      O('a', 'Use graded steps that shape communication toward speech at a pace she can tolerate, building on small successes', 3,
        { r: 'Graded shaping toward speech', approach: 'Apply graded exposure and shaping', why: 'Shaping communication toward speech through graded, tolerable steps is the core behavioral approach for selective mutism', keys: ['communicates by nodding', 'anxious when expected to speak'], mistake: 'Demanding full speech at once rather than shaping it gradually' }),
      O('b', 'Require her to give a full spoken answer in front of the whole class on the very first day of the plan', -1,
        { r: 'Flooding is not the graded approach', approach: 'Flooding framing', why: 'A graded, shaping approach is the standard, not an abrupt demand for full speech', keys: ['graded steps'], mistake: 'Abandoning the graded structure' }),
      O('c', 'Encourage everyone to simply avoid asking her to communicate at all so that she never feels any anxiety at school', -2,
        { r: 'Total accommodation maintains the mutism', approach: 'Accommodation framing', why: 'Removing all expectation to communicate reinforces the mutism', keys: ['graded expectation'], mistake: 'Accommodating rather than shaping communication' }),
      O('d', 'Focus only on discussing her feelings about school without ever building toward any actual speaking at all', -1,
        { r: 'Talk without exposure is insufficient', approach: 'Insight-only framing', why: 'Graded exposure toward speech, not discussion alone, drives change', keys: ['exposure indicated'], mistake: 'Talking about it without building toward speech' }),
    ]),
    Q('q8', 'treatment', 'How should progress be tracked over the course of treatment?', ['R5'], [
      O('a', 'Track speaking across settings, communication steps achieved, and anxiety over time to guide the graded plan', 3,
        { r: 'Measurement-based tracking of speech and steps', approach: 'Monitor the relevant outcomes', why: 'Tracking speaking across settings, steps achieved, and anxiety steers the graded-exposure plan', keys: ['silent at school', 'graded steps'], mistake: 'Proceeding without tracking the situational speaking and steps' }),
      O('b', 'Rely only on whether her parents happen to mention that she seems a little more comfortable than before', -1,
        { r: 'Anecdote alone is insufficient', approach: 'Anecdotal framing', why: 'Systematic tracking is more reliable than passing impressions', keys: ['structured measurement'], mistake: 'Substituting anecdote for measurement' }),
      O('c', 'Track only how she behaves during the session itself and base every decision solely on what you see in the room', -1,
        { r: 'In-room behavior is too narrow', approach: 'Single-setting framing', why: 'The situational pattern requires data from home and school, not the session alone', keys: ['multi-setting monitoring'], mistake: 'Measuring only the session' }),
      O('d', 'Wait until the end of the school year to review whether her speaking has changed at all since the first session', -1,
        { r: 'End-only review misses steering data', approach: 'Delayed-review framing', why: 'Ongoing tracking is needed to steer the graded plan', keys: ['continuous monitoring'], mistake: 'Deferring all measurement to the end' }),
    ]),
    Q('q9', 'treatment', 'How should the counselor coordinate with the school?', ['R4'], [
      O('a', 'With the parents’ consent and a release, coordinate a graded, consistent plan with her teacher and school team', 3,
        { r: 'Consent and release before school coordination', approach: 'Coordinate with consent', why: 'A consistent graded plan across settings requires parental consent and coordination with the school', keys: ['teacher referral', 'silent at school'], mistake: 'Contacting the school without parental consent' }),
      O('b', 'Contact the school directly with her clinical details right away, since the school plainly needs all of the information', -2,
        { r: 'Disclosing without consent breaches confidentiality', approach: 'Assume-consent framing', why: 'A valid release is required before sharing with the school', keys: ['no release'], mistake: 'Disclosing without consent' }),
      O('c', 'Recommend the parents move her to a different school entirely so that she can make a completely fresh start', -1,
        { r: 'Switching schools is not the intervention', approach: 'Avoidance framing', why: 'A graded plan, not avoidance via a school change, addresses selective mutism', keys: ['graded plan'], mistake: 'Substituting avoidance for treatment' }),
      O('d', 'Avoid contacting the school at all so that her counseling stays entirely separate from anything happening at school', -1,
        { r: 'No coordination undercuts the plan', approach: 'Siloed framing', why: 'Consented coordination is central to a cross-setting graded plan', keys: ['integrated plan'], mistake: 'Refusing helpful, consented coordination' }),
    ]),
    Q('q10', 'counseling', 'Mia stays silent and looks anxious when the counselor gently invites her to speak. The most therapeutic response is to:', ['R5'], [
      O('a', 'Reduce the pressure, accept nonverbal communication for now, and build toward speech through small comfortable steps', 3,
        { r: 'Reduce pressure and shape gradually', approach: 'Lower pressure and build safety', why: 'Reducing pressure and accepting nonverbal steps while gradually shaping speech supports an anxious, mute child', keys: ['looks anxious when invited to speak', 'communicates nonverbally'], mistake: 'Pressuring her to speak, which raises anxiety and reinforces the mutism' }),
      O('b', 'Insist she answer out loud before the session can continue so that she learns she has to speak with you', -2,
        { r: 'Insisting on speech raises anxiety', approach: 'Coercion framing', why: 'Demanding speech increases anxiety and reinforces the mutism', keys: ['graded shaping'], mistake: 'Coercing speech from an anxious child' }),
      O('c', 'Ignore her entirely until she decides to speak on her own so that she learns speaking is the only way to get attention', -1,
        { r: 'Withholding attention is not the method', approach: 'Withdrawal framing', why: 'Graded shaping with warmth, not withheld attention, is the approach', keys: ['supportive shaping'], mistake: 'Using withdrawal instead of shaping' }),
      O('d', 'End the session early since she is not speaking rather than working with her anxiety in the room together', -1,
        { r: 'Ending abruptly misses the opportunity', approach: 'Escape framing', why: 'The moment can be used to reduce pressure and shape communication', keys: ['in-room shaping'], mistake: 'Avoiding a valuable clinical moment' }),
    ]),
    Q('q11', 'counseling', 'How can the counselor best engage Mia given her age and anxiety?', ['R5'], [
      O('a', 'Use warm, playful, developmentally appropriate methods that build safety and gradually invite communication', 3,
        { r: 'Warm, playful, developmentally matched engagement', approach: 'Engage the child age-appropriately', why: 'Warm, playful, developmentally appropriate work builds the safety a 6-year-old needs to gradually communicate', keys: ['6-year-old', 'anxious about speaking'], mistake: 'Using pressuring or abstract, adult-oriented methods a young child cannot engage with' }),
      O('b', 'Talk with her mainly in abstract, adult terms about why she feels unable to speak in certain places', -1,
        { r: 'Abstract methods do not fit a child', approach: 'Adult-framing', why: 'A young child engages through warmth and play, not abstract discussion', keys: ['developmental fit'], mistake: 'Pitching the work above her developmental level' }),
      O('c', 'Focus the sessions mainly on repeatedly testing whether she will speak on command every single week', -1,
        { r: 'Testing on command raises anxiety', approach: 'Testing framing', why: 'Repeated demands to speak on command heighten anxiety rather than build safety', keys: ['reduce pressure'], mistake: 'Turning sessions into speech testing' }),
      O('d', 'Tell her she must start speaking at school before any of the counseling work to help her can really begin', -1,
        { r: 'Demanding speech first stalls engagement', approach: 'Precondition framing', why: 'Safety and graded steps precede, not follow, speaking at school', keys: ['safety first'], mistake: 'Setting speaking as a precondition' }),
    ]),
    Q('q12', 'ethics', 'Mia communicates something distressing nonverbally and gestures that the counselor not tell her parents. The most appropriate action is to:', ['R4'], [
      O('a', 'Explain confidentiality and its limits in age-appropriate terms and clarify what must be shared to keep her safe', 3,
        { r: 'Explain confidentiality and its limits to a minor', approach: 'Balance the minor’s trust and the parental role', why: 'With minors, the counselor clarifies confidentiality and the safety limits that may require sharing', keys: ['minor client', 'gestures to keep a secret'], mistake: 'Promising a minor’s counselor cannot ethically guarantee absolute secrecy' }),
      O('b', 'Promise her that you will never tell her parents anything at all, no matter what she communicates to you', -2,
        { r: 'Absolute secrecy promise is unsafe', approach: 'Absolute-secrecy framing', why: 'A blanket promise ignores safety limits and parental rights with minors', keys: ['safety limits'], mistake: 'Guaranteeing confidentiality you cannot ethically keep' }),
      O('c', 'Tell her parents every detail of whatever she communicates right away, since they are entitled to know it all', -2,
        { r: 'Disclosing everything erodes the child’s trust', approach: 'Full-disclosure framing', why: 'Sharing everything regardless of relevance undermines the therapeutic relationship with the child', keys: ['developmentally appropriate sharing'], mistake: 'Over-disclosing and breaking the child’s trust' }),
      O('d', 'Refuse to address confidentiality with her at all and simply move on whenever the topic seems to come up', -1,
        { r: 'Avoiding the issue leaves her confused', approach: 'Avoidant framing', why: 'Confidentiality should be explained in age-appropriate terms, not avoided', keys: ['transparent limits'], mistake: 'Sidestepping a needed conversation' }),
    ]),
    Q('q13', 'ethics', 'The counselor has limited training in selective mutism. The most ethical course of action is to:', ['R4'], [
      O('a', 'Seek consultation and training, and refer or coordinate for the components beyond your competence', 3,
        { r: 'Consult, train, or refer within competence', approach: 'Practice within competence', why: 'ACA C.2. requires competence; selective mutism treatment may need consultation, training, or referral', keys: ['limited selective-mutism training', 'specialized behavioral method'], mistake: 'Delivering a specialized child intervention without the required competence' }),
      O('b', 'Continue managing the case alone to preserve the continuity of the relationship built with the child and family', -2,
        { r: 'Going it alone exceeds competence', approach: 'Continuity-over-competence', why: 'Continuity does not justify exceeding competence', keys: ['competence exceeded'], mistake: 'Prioritizing continuity over competence' }),
      O('c', 'Tell the parents the mutism is not serious enough to need specialized help and continue with general support only', -2,
        { r: 'Minimizing the problem fails the child', approach: 'Downplay framing', why: 'Impairing selective mutism warrants competent, specialized care', keys: ['real impairment'], mistake: 'Underestimating the need for specialized care' }),
      O('d', 'Transfer the family at once to another provider with no explanation, consultation, or coordinated plan for the transition', -1,
        { r: 'Abrupt transfer mishandles continuity', approach: 'Uncoordinated handoff', why: 'A coordinated referral, not an abrupt transfer, is appropriate', keys: ['coordinated transition'], mistake: 'Dropping the family without coordination' }),
    ]),
  ],
};

module.exports = { CASES: [D175, D176, D177, D178, D179] };
