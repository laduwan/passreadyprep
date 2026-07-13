// ============================================================================
// deep-cases-batch-19.js — NCMHCE deep cases, batch 19 (2022+ format)
// NCMHCE Prep Platform | GA Integrated Therapeutic Perspectives LLC
//
// Four exam-deep clinical simulations (13 items each, sections [5,4,4]). The
// diagnosis/clinical focus is GIVEN; items test clinical decision-making across
// the three derived sections (Assessment -> Planning -> Process). On the
// reserved id block ncmhce-D195+, covering the remaining standard clinical
// foci not yet covered by any deep case (checked vs all deep-format cases +
// the exemplar):
//   ncmhce-D195  Alcohol Withdrawal (Substance)
//   ncmhce-D196  Stimulant Intoxication (Substance)
//   ncmhce-D197  Acute Crisis / Decompensation (Crisis)
//   ncmhce-D198  Homicidal Ideation / Threat Assessment (Crisis)
//
// Authored to NCMHCE_DeepCase_Generation_Spec.md. Passes caseSchema
// (strictItemQuality) AND examDepth with zero errors / zero warnings.
// Auto-discovered by import-deep-cases.js (deep-cases-batch-*.js).
//
// Validate:
//   node tools/cases/validateCases.js tools/cases/deep-cases-batch-19.js
//   node -e "const{validateExamDepthSet}=require('./tools/cases/examDepth');const{CASES}=require('./tools/cases/deep-cases-batch-19');console.log(validateExamDepthSet(CASES))"
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
// D195 — Alcohol Withdrawal (F10.230) — Substance — hard
// ============================================================================
const D195 = {
  id: 'ncmhce-D195',
  title: 'Acute alcohol withdrawal with tremor and autonomic signs',
  category: 'Substance',
  difficulty: 'hard',
  primaryDiagnosis: { name: 'Alcohol Withdrawal', code: 'F10.230' },
  diagnosis: { name: 'Alcohol Withdrawal', code: 'F10.230' },
  differentialOptions: [
    { id: 'do1', name: 'Alcohol Withdrawal', isCorrect: true },
    { id: 'do2', name: 'Generalized Anxiety Disorder', isCorrect: false },
    { id: 'do3', name: 'Opioid Withdrawal', isCorrect: false },
    { id: 'do4', name: 'Panic Disorder', isCorrect: false },
  ],
  narrative: {
    intake:
      'Gerald Pratt, a 55-year-old, presents in acute distress about a day after abruptly stopping heavy daily drinking. He has tremor, sweating, ' +
      'rapid heartbeat, nausea, agitation, and anxiety, following cessation of prolonged heavy alcohol use.',
    session1:
      'His signs are the characteristic autonomic hyperactivity of alcohol withdrawal that developed after reducing heavy alcohol use, ' +
      'distinguishing it from a primary anxiety disorder. The physiological picture is specific to alcohol rather than opioid withdrawal, and severe withdrawal risks seizures and delirium.',
    session2:
      'He has a history of a prior withdrawal seizure, is frightened, and craves a drink to relieve the symptoms. He is at risk for complicated ' +
      'withdrawal, and the counselor recognizes this is a medical emergency requiring urgent medically supervised management rather than counseling alone.',
  },
  diagnosticRationale:
    'A characteristic alcohol-withdrawal syndrome—autonomic hyperactivity, tremor, insomnia, nausea, anxiety, and agitation—developing within ' +
    'hours to days after cessation of heavy, prolonged alcohol use, best fits alcohol withdrawal, distinct from a primary anxiety or panic ' +
    'disorder and from opioid withdrawal, and carrying a risk of seizures and delirium tremens that requires urgent medical management.',
  references: [
    { id: 'R1', source: 'DSM-5-TR', detail: 'Alcohol withdrawal: autonomic hyperactivity, tremor, nausea, anxiety, agitation after cessation of heavy use; seizure/DT risk' },
    { id: 'R2', source: 'ASAM Criteria', detail: 'Level-of-care decisions and medically supervised alcohol withdrawal management' },
    { id: 'R3', source: 'C-SSRS', detail: 'Structured suicide-risk screening given elevated risk during and after withdrawal' },
    { id: 'R4', source: 'ACA Code of Ethics', detail: 'A.1., B.2., and C.2.: client welfare, safety, coordination, and practicing within competence' },
    { id: 'R5', source: 'SAMHSA TIP 45', detail: 'Detoxification and safe withdrawal management and care coordination' },
  ],
  questions: [
    Q('q1', 'intake', 'What is most important to confirm to support an alcohol withdrawal focus?', ['R1'], [
      O('a', 'A characteristic withdrawal syndrome with autonomic hyperactivity developing after cessation of heavy alcohol use', 3,
        { r: 'Autonomic withdrawal syndrome after cessation', approach: 'Confirm the core features', why: 'Alcohol withdrawal is the characteristic autonomic syndrome developing after cessation of heavy, prolonged use', keys: ['tremor, sweating, rapid heartbeat', 'after stopping heavy drinking'], mistake: 'Attributing the syndrome to something other than alcohol withdrawal without confirming the pattern' }),
      O('b', 'That he can pinpoint the single event he is convinced first caused all of his problems with alcohol', -1,
        { r: 'A precipitant is not the criterion', approach: 'Trigger framing', why: 'Etiology is not the defining feature of the withdrawal syndrome', keys: ['syndrome-based focus'], mistake: 'Using a trigger as the diagnostic test' }),
      O('c', 'That his symptoms have grown a little worse over the past few hours than they were earlier this morning', -1,
        { r: 'Recent change is not the defining feature', approach: 'Recent-change framing', why: 'The characteristic syndrome after cessation, not the exact hourly trajectory, defines the focus', keys: ['characteristic syndrome'], mistake: 'Confusing the hourly course with the defining features' }),
      O('d', 'That he currently meets the full symptom count required for a discrete manic episode at this point in time', 0,
        { r: 'Manic count is not relevant', approach: 'Mania-criteria framing', why: 'The focus is the withdrawal syndrome, not a manic episode', keys: ['withdrawal-focused'], mistake: 'Applying manic criteria here' }),
    ]),
    Q('q2', 'core', 'Which feature best differentiates his presentation from a primary anxiety disorder?', ['R1'], [
      O('a', 'His symptoms are the characteristic physiological withdrawal syndrome after stopping alcohol, not primary anxiety', 3,
        { r: 'Withdrawal syndrome, not primary anxiety', approach: 'Contrast the cause', why: 'A primary anxiety disorder is not a withdrawal syndrome; his symptoms are the characteristic alcohol-withdrawal picture', keys: ['autonomic withdrawal signs', 'after alcohol cessation'], mistake: 'Reading withdrawal-driven distress as a primary anxiety disorder' }),
      O('b', 'The fact that he feels quite anxious and on edge and physically uncomfortable during this difficult time', -1,
        { r: 'Anxiety is nonspecific', approach: 'Anxiety framing', why: 'Anxiety occurs in both; the withdrawal syndrome differs', keys: ['shared feature'], mistake: 'Using anxiety to differentiate' }),
      O('c', 'The agitation and the restlessness that he experiences while he is going through this episode', -1,
        { r: 'Agitation is nonspecific', approach: 'Agitation framing', why: 'Agitation can occur in both; the physiological syndrome differs', keys: ['shared discomfort'], mistake: 'Reading agitation as decisive' }),
      O('d', 'The way his symptoms tend to feel a little worse during the most stressful parts of the day for him', 0,
        { r: 'Stress reactivity is nonspecific', approach: 'Stress framing', why: 'Worsening under stress does not identify the cause', keys: ['nonspecific reactivity'], mistake: 'Using stress sensitivity to differentiate' }),
    ]),
    Q('q3', 'core', 'How does his presentation differ from opioid withdrawal?', ['R1'], [
      O('a', 'His autonomic signs follow alcohol cessation and carry seizure and delirium risk, unlike the opioid-withdrawal picture', 3,
        { r: 'Alcohol-specific signs and seizure/DT risk', approach: 'Contrast the substance and risks', why: 'The signs, the substance, and the seizure and delirium risk are specific to alcohol withdrawal, not opioid withdrawal', keys: ['tremor, autonomic hyperactivity', 'prior withdrawal seizure'], mistake: 'Conflating alcohol withdrawal with opioid withdrawal' }),
      O('b', 'The fact that he is experiencing an uncomfortable physiological withdrawal syndrome after stopping a substance', -1,
        { r: 'A withdrawal syndrome occurs in both', approach: 'Withdrawal framing', why: 'A withdrawal syndrome occurs in both; the specific signs and substance differ', keys: ['shared feature'], mistake: 'Using the presence of withdrawal to differentiate the substance' }),
      O('c', 'The craving and the distress that he feels while he is going through the withdrawal', -1,
        { r: 'Craving is nonspecific', approach: 'Craving framing', why: 'Craving occurs across withdrawals; the substance and risks differ', keys: ['shared craving'], mistake: 'Reading craving as decisive about the substance' }),
      O('d', 'The way his symptoms feel a little worse when he is in a more stressful environment at the time', 0,
        { r: 'Environmental effects are nonspecific', approach: 'Environment framing', why: 'Worse symptoms in a stressful environment do not identify the substance', keys: ['nonspecific factor'], mistake: 'Over-reading an environmental effect' }),
    ]),
    Q('q4', 'core', 'What is the most important safety consideration in his case?', ['R2'], [
      O('a', 'His risk of complicated withdrawal—seizures and delirium tremens—which makes medically supervised management essential', 3,
        { r: 'Seizure and delirium-tremens risk', approach: 'Prioritize the complicated-withdrawal risk', why: 'Severe alcohol withdrawal risks seizures and delirium tremens, so medically supervised management is essential', keys: ['prior withdrawal seizure', 'autonomic hyperactivity'], mistake: 'Overlooking the seizure and DT risk and treating it as a routine anxiety presentation' }),
      O('b', 'A previously undetected primary psychotic disorder that might better account for his agitation and anxiety', -1,
        { r: 'Psychosis is not indicated', approach: 'Psychosis framing', why: 'His agitation reflects withdrawal, not a primary psychotic disorder', keys: ['withdrawal-driven'], mistake: 'Pursuing an unsupported rule-out' }),
      O('c', 'A long-standing eating disorder that could be the single underlying cause of his withdrawal symptoms', -1,
        { r: 'Eating pathology is not indicated', approach: 'Eating-disorder framing', why: 'No eating concerns are reported and this is an acute withdrawal picture', keys: ['no eating data'], mistake: 'Inventing an unsupported rule-out' }),
      O('d', 'An emerging neurocognitive decline that could account for why he feels so agitated during withdrawal', 0,
        { r: 'Cognitive decline is not the issue here', approach: 'Neurocognitive framing', why: 'The acute withdrawal picture, not a chronic decline, is what matters', keys: ['acute picture'], mistake: 'Pursuing an irrelevant rule-out' }),
    ]),
    Q('q5', 'intake', 'Given the elevated risk, what is the most important assessment step regarding safety to self?', ['R3'], [
      O('a', 'Conduct a structured suicide-risk assessment alongside the withdrawal evaluation, since risk is elevated', 3,
        { r: 'Structured suicide-risk assessment now', approach: 'Screen risk directly', why: 'Suicide risk is elevated during and after withdrawal, so structured risk assessment accompanies the withdrawal evaluation', keys: ['acute distress', 'heavy alcohol use'], mistake: 'Focusing only on the physical withdrawal and skipping suicide-risk assessment' }),
      O('b', 'Assume there is no risk to himself because his distress is clearly due to the physical withdrawal symptoms', -2,
        { r: 'Assuming no risk is unsafe', approach: 'Dismissal framing', why: 'Elevated risk warrants structured assessment even when distress is withdrawal-related', keys: ['elevated risk'], mistake: 'Skipping risk assessment based on assumption' }),
      O('c', 'Defer any risk assessment until the acute withdrawal has fully resolved and he has been stable for months', -2,
        { r: 'Deferring assessment is unsafe', approach: 'Delay framing', why: 'Risk is assessed now, not after withdrawal resolves', keys: ['present risk'], mistake: 'Postponing an urgent assessment' }),
      O('d', 'Focus only on managing his tremor for now and return to any safety questions at a much later date', -1,
        { r: 'Sequencing safety behind symptoms is unsafe', approach: 'Single-issue framing', why: 'Physical management does not displace assessing current safety', keys: ['safety first'], mistake: 'Sequencing safety behind other needs' }),
    ]),
    Q('q6', 'treatment', 'What is the single most important step given his acute withdrawal?', ['R2'], [
      O('a', 'Coordinate urgent medically supervised withdrawal management and the appropriate level of care', 3,
        { r: 'Urgent medical withdrawal management', approach: 'Recognize the emergency', why: 'Acute alcohol withdrawal with seizure risk is a medical emergency requiring urgent supervised management', keys: ['prior seizure', 'autonomic hyperactivity'], mistake: 'Attempting to manage acute withdrawal with counseling alone' }),
      O('b', 'Advise him to simply tough out the withdrawal at home with willpower and no medical support at all', -2,
        { r: 'Unsupervised withdrawal is dangerous', approach: 'Tough-it-out framing', why: 'Unsupervised alcohol withdrawal risks seizures and delirium; medical support is essential', keys: ['medical supervision'], mistake: 'Dismissing the need for medical management' }),
      O('c', 'Design and manage a withdrawal medication schedule yourself and adjust the doses over the coming days', -2,
        { r: 'Managing detox is outside scope', approach: 'Prescribe-by-proxy framing', why: 'Counselors do not design or manage detox medication; the medical team does', keys: ['no prescriptive authority'], mistake: 'Acting outside scope of practice' }),
      O('d', 'Reassure him that alcohol withdrawal is never dangerous and that he can taper himself whenever he likes', -2,
        { r: 'Minimizing the risk is unsafe', approach: 'Minimize framing', why: 'Alcohol withdrawal can be life-threatening and warrants medical supervision', keys: ['withdrawal risk'], mistake: 'Downplaying a genuine medical emergency' }),
    ]),
    Q('q7', 'treatment', 'What is the most appropriate counseling role alongside the medical management?', ['R5'], [
      O('a', 'Provide support and engagement, coordinate with the medical team, and plan for ongoing treatment within scope', 3,
        { r: 'Support, coordination, and engagement', approach: 'Define the counselor role', why: 'The counselor supports the client, coordinates with the medical team, and engages him into ongoing treatment', keys: ['frightened', 'craves a drink'], mistake: 'Either managing the medical detox or providing no structured counseling role' }),
      O('b', 'Take over the medical management of his withdrawal so that all of the care stays within the counseling relationship', -2,
        { r: 'Taking over medical care exceeds scope', approach: 'Overreach framing', why: 'Managing withdrawal is the medical team’s role, not the counselor’s', keys: ['scope limits'], mistake: 'Assuming a medical role outside scope' }),
      O('c', 'Tell him that counseling is all he needs and that the medical involvement can simply be skipped entirely', -2,
        { r: 'Skipping medical care is unsafe', approach: 'Counseling-only framing', why: 'The dangerous withdrawal requires medical involvement, not counseling alone', keys: ['medical supervision'], mistake: 'Omitting necessary medical care' }),
      O('d', 'Step back entirely and provide no counseling at all until the medical withdrawal is completely finished', -1,
        { r: 'No counseling role understates the work', approach: 'Hands-off framing', why: 'Support and engagement proceed alongside the medical management', keys: ['concurrent counseling'], mistake: 'Withholding the counseling role unnecessarily' }),
    ]),
    Q('q8', 'treatment', 'What should the plan include after the acute withdrawal is managed?', ['R5'], [
      O('a', 'Relapse-prevention and engagement into ongoing alcohol-use-disorder treatment and support resources', 3,
        { r: 'Relapse prevention and ongoing treatment', approach: 'Plan beyond the acute phase', why: 'After acute withdrawal, relapse-prevention and engagement into ongoing treatment support durable recovery', keys: ['craves a drink', 'high relapse risk'], mistake: 'Treating the acute withdrawal as the end point rather than a gateway to ongoing treatment' }),
      O('b', 'Telling him that once withdrawal is over he is fully cured and needs no further treatment or support at all', -2,
        { r: 'Declaring a cure is inaccurate', approach: 'Cure framing', why: 'Withdrawal is not a cure; ongoing alcohol-use-disorder treatment is needed', keys: ['ongoing treatment'], mistake: 'Falsely declaring him cured' }),
      O('c', 'Advising him to keep alcohol at home so that he can taper himself gradually whenever he chooses to', -2,
        { r: 'Keeping alcohol undermines recovery', approach: 'Permission framing', why: 'Encouraging continued access undermines recovery and safe withdrawal', keys: ['recovery support'], mistake: 'Endorsing continued access to the substance' }),
      O('d', 'Focusing only on the acute symptoms and leaving relapse-prevention out of the plan entirely', -1,
        { r: 'Omitting relapse prevention narrows the plan', approach: 'Symptom-only framing', why: 'Relapse-prevention and engagement are central to durable recovery, not just the acute phase', keys: ['engagement focus'], mistake: 'Omitting the ongoing-treatment engagement' }),
    ]),
    Q('q9', 'treatment', 'How should the counselor coordinate with the medical team?', ['R4'], [
      O('a', 'With his consent and a release, coordinate the withdrawal and care plan and share what is needed for safe treatment', 3,
        { r: 'Coordinate with consent for safe care', approach: 'Coordinate within consent and scope', why: 'Safe withdrawal depends on consented coordination with the medical team', keys: ['medical emergency', 'team involved'], mistake: 'Working in isolation, or sharing without consent' }),
      O('b', 'Share his full history with everyone involved right away, since coordinating his care is plainly in his interest anyway', -2,
        { r: 'Coordinating without consent breaches confidentiality', approach: 'Assume-consent framing', why: 'A valid release is required before disclosure', keys: ['no release'], mistake: 'Disclosing before consent is documented' }),
      O('c', 'Adjust his detox medication yourself based on how he reports feeling rather than involving the medical team', -2,
        { r: 'Adjusting detox meds exceeds scope', approach: 'Self-adjust framing', why: 'Counselors do not adjust detox medication; the medical team does', keys: ['no prescriptive authority'], mistake: 'Acting outside scope of practice' }),
      O('d', 'Avoid contacting the medical team at all so that his counseling stays entirely separate from his medical care', -1,
        { r: 'No coordination undercuts safe care', approach: 'Siloed framing', why: 'Consented coordination supports safe withdrawal here', keys: ['integrated care'], mistake: 'Refusing helpful, consented coordination' }),
    ]),
    Q('q10', 'counseling', 'Gerald is frightened and says he cannot get through the withdrawal without a drink. The most therapeutic response is to:', ['R5'], [
      O('a', 'Respond with empathy, instill realistic hope, and reinforce the medical supports that make safe withdrawal possible', 3,
        { r: 'Empathize and instill realistic hope', approach: 'Support and instill hope', why: 'Empathizing while reinforcing medical supports helps a frightened client through withdrawal safely', keys: ['frightened', 'craves a drink'], mistake: 'Either minimizing his fear or endorsing a drink to relieve the symptoms' }),
      O('b', 'Agree that he probably does need a drink to get through it and suggest he have one to ease the symptoms', -2,
        { r: 'Endorsing a drink is unsafe', approach: 'Permission framing', why: 'Endorsing a drink to relieve symptoms undermines safe withdrawal and recovery', keys: ['medical management'], mistake: 'Encouraging continued use' }),
      O('c', 'Tell him he simply needs to toughen up and stop being so frightened about the withdrawal symptoms', -1,
        { r: 'Dismissing his fear invalidates him', approach: 'Toughen-up framing', why: 'Telling him to toughen up dismisses his fear and undermines the alliance', keys: ['validate then support'], mistake: 'Minimizing his fear' }),
      O('d', 'Change the subject away from the withdrawal so that he does not have to think about how frightened he is', -1,
        { r: 'Avoiding the fear misses the work', approach: 'Avoidant framing', why: 'His fear can be engaged and supported, not avoided', keys: ['engage the fear'], mistake: 'Sidestepping a meaningful moment' }),
    ]),
    Q('q11', 'counseling', 'How can the counselor best support Gerald’s engagement into ongoing treatment?', ['R5'], [
      O('a', 'Build motivation and connect him to ongoing alcohol-use-disorder treatment tied to his own goals and hope', 3,
        { r: 'Build motivation and connect to ongoing treatment', approach: 'Engage him into continuing care', why: 'Building motivation and connecting him to ongoing treatment supports recovery beyond acute withdrawal', keys: ['high relapse risk', 'frightened'], mistake: 'Treating acute withdrawal as the end point rather than a gateway to ongoing treatment' }),
      O('b', 'Tell him that getting through withdrawal is all he needs and that no further treatment is necessary at all', -2,
        { r: 'Declaring withdrawal sufficient is inaccurate', approach: 'Withdrawal-is-enough framing', why: 'Withdrawal alone is not sufficient; ongoing treatment is needed for alcohol use disorder', keys: ['ongoing treatment'], mistake: 'Framing withdrawal as the complete treatment' }),
      O('c', 'Focus the sessions mainly on cataloguing every past drinking episode in exhaustive detail every single week', -1,
        { r: 'Cataloguing use is not engagement', approach: 'Catalogue framing', why: 'Rehashing past use does not build motivation or engagement into ongoing treatment', keys: ['engagement focus'], mistake: 'Centering sessions on past use' }),
      O('d', 'Tell him counseling cannot help him at all unless he first gets through the entire withdrawal on his own', -1,
        { r: 'Conditioning care is inappropriate', approach: 'Conditioning framing', why: 'Counseling and engagement proceed alongside the coordinated medical withdrawal', keys: ['concurrent care'], mistake: 'Making counseling contingent on completing withdrawal first' }),
    ]),
    Q('q12', 'ethics', 'Gerald wants to leave against advice to go drink and relieve the symptoms. The most appropriate action is to:', ['R4'], [
      O('a', 'Assess capacity and risk, communicate the serious medical danger, and coordinate an appropriate safety response', 3,
        { r: 'Assess capacity/risk; communicate danger; coordinate safety', approach: 'Balance autonomy and the medical emergency', why: 'Leaving during dangerous withdrawal is a medical emergency, so capacity and risk are assessed and safety is coordinated', keys: ['wants to leave to drink', 'seizure risk'], mistake: 'Either simply letting him leave into danger or coercing him without assessment or the proper process' }),
      O('b', 'Let him leave immediately without any discussion, since what he does with his body is entirely his own choice', -2,
        { r: 'Ignoring the medical danger is inappropriate', approach: 'Hands-off framing', why: 'A life-threatening withdrawal emergency requires assessment and a coordinated safety response, not passive release', keys: ['medical emergency'], mistake: 'Disregarding an imminent medical danger' }),
      O('c', 'Physically block the door and restrain him yourself until he agrees to stay for the treatment he needs', -2,
        { r: 'Physically restraining him is inappropriate', approach: 'Restraint framing', why: 'The counselor coordinates an appropriate, lawful safety response rather than personally restraining him', keys: ['appropriate process'], mistake: 'Using inappropriate physical measures' }),
      O('d', 'Tell him the withdrawal is nothing to worry about so that he feels calm enough to stay a little longer', -1,
        { r: 'Minimizing the danger is dishonest and unsafe', approach: 'Minimize framing', why: 'He needs accurate information about the serious danger, not false reassurance', keys: ['honest information'], mistake: 'Misrepresenting the medical seriousness' }),
    ]),
    Q('q13', 'ethics', 'The counselor has limited training in withdrawal management. The most ethical course of action is to:', ['R4'], [
      O('a', 'Ensure urgent medical involvement, seek consultation, and coordinate rather than manage the emergency alone', 3,
        { r: 'Ensure medical involvement and coordinate', approach: 'Practice within competence', why: 'ACA C.2. and safety require ensuring urgent medical care and coordination for a withdrawal emergency', keys: ['limited training', 'medical emergency'], mistake: 'Attempting to manage an acute withdrawal emergency alone without competence' }),
      O('b', 'Continue managing the case alone to preserve the continuity of the relationship built with him', -2,
        { r: 'Going it alone in an emergency is unsafe', approach: 'Continuity-over-competence', why: 'Continuity does not justify managing a medical emergency beyond competence', keys: ['competence and safety'], mistake: 'Prioritizing continuity over safety' }),
      O('c', 'Tell him the withdrawal is not serious enough to need urgent medical care and continue with supportive talks only', -2,
        { r: 'Minimizing an emergency is dangerous', approach: 'Downplay framing', why: 'Alcohol withdrawal with seizure risk is an emergency warranting urgent medical care', keys: ['urgent care'], mistake: 'Underestimating a medical emergency' }),
      O('d', 'Transfer the case at once with no explanation, communication with the medical team, or coordinated plan at all', -1,
        { r: 'Abrupt transfer mishandles an emergency', approach: 'Uncoordinated handoff', why: 'An emergency requires coordinated communication, not an abrupt, uncommunicated transfer', keys: ['coordinated response'], mistake: 'Dropping the case without coordination during an emergency' }),
    ]),
  ],
};

// ============================================================================
// D196 — Stimulant Intoxication (F14.129) — Substance — hard
// ============================================================================
const D196 = {
  id: 'ncmhce-D196',
  title: 'Acute stimulant intoxication with agitation and paranoia',
  category: 'Substance',
  difficulty: 'hard',
  primaryDiagnosis: { name: 'Stimulant Intoxication', code: 'F14.129' },
  diagnosis: { name: 'Stimulant Intoxication', code: 'F14.129' },
  differentialOptions: [
    { id: 'do1', name: 'Stimulant Intoxication', isCorrect: true },
    { id: 'do2', name: 'Bipolar I Disorder, Manic Episode', isCorrect: false },
    { id: 'do3', name: 'Brief Psychotic Disorder', isCorrect: false },
    { id: 'do4', name: 'Generalized Anxiety Disorder', isCorrect: false },
  ],
  narrative: {
    intake:
      'Andre Willis, a 29-year-old, is brought to a crisis clinic acutely agitated, euphoric-then-irritable, and paranoid shortly after using ' +
      'cocaine. He has a rapid heartbeat, dilated pupils, elevated blood pressure, restlessness, and pressured speech following recent stimulant use.',
    session1:
      'His presentation is an acute stimulant-intoxication state with the characteristic physiological and behavioral signs occurring during or ' +
      'shortly after use, distinguishing it from a primary manic episode. His symptoms are expected to resolve as the drug clears, unlike a sustained psychotic disorder.',
    session2:
      'He has physiological signs of stimulant effect and is at risk of agitation-related harm, and there is a possibility of medical complications. ' +
      'The counselor recognizes this acute intoxication requires medical evaluation and a calm, safety-focused approach rather than confrontation.',
  },
  diagnosticRationale:
    'Clinically significant behavioral and physiological changes—euphoria or affective blunting, hypervigilance, agitation, tachycardia, ' +
    'pupillary dilation, and elevated blood pressure—developing during or shortly after stimulant use best fit stimulant intoxication, distinct ' +
    'from a primary manic episode, a sustained brief psychotic disorder, and generalized anxiety disorder, and warranting medical evaluation.',
  references: [
    { id: 'R1', source: 'DSM-5-TR', detail: 'Stimulant intoxication: behavioral/physiological changes during or shortly after use; tachycardia, dilated pupils, agitation' },
    { id: 'R2', source: 'ASAM Criteria', detail: 'Assessment of acute intoxication and level-of-care decisions' },
    { id: 'R3', source: 'C-SSRS', detail: 'Structured suicide-risk screening and assessment of risk to self and others in acute intoxication' },
    { id: 'R4', source: 'ACA Code of Ethics', detail: 'B.2. and C.2.: safety, danger exceptions, coordination, and practicing within competence' },
    { id: 'R5', source: 'Corey (Theory & Practice)', detail: 'Calm, supportive engagement and de-escalation' },
  ],
  questions: [
    Q('q1', 'intake', 'What is most important to confirm to support a stimulant intoxication focus?', ['R1'], [
      O('a', 'Characteristic behavioral and physiological changes developing during or shortly after stimulant use', 3,
        { r: 'Characteristic changes during/after use', approach: 'Confirm the core features', why: 'Stimulant intoxication is the characteristic behavioral and physiological change occurring during or shortly after use', keys: ['agitation and paranoia after cocaine', 'tachycardia, dilated pupils'], mistake: 'Attributing the picture to something other than intoxication without confirming recent use and the signs' }),
      O('b', 'That he can pinpoint the single event he is convinced first caused all of his problems with stimulants', -1,
        { r: 'A precipitant is not the criterion', approach: 'Trigger framing', why: 'Etiology is not the defining feature of the intoxication state', keys: ['state-based focus'], mistake: 'Using a trigger as the diagnostic test' }),
      O('c', 'That his symptoms have grown a little worse over the past few minutes than they were a short while ago', -1,
        { r: 'Recent change is not the defining feature', approach: 'Recent-change framing', why: 'The characteristic state during/after use, not the exact minute-to-minute change, defines the focus', keys: ['characteristic state'], mistake: 'Confusing the minute-to-minute course with the defining features' }),
      O('d', 'That he currently meets the full symptom count required for a discrete major depressive episode at this time', 0,
        { r: 'Depressive count is not relevant', approach: 'Mood-criteria framing', why: 'The focus is the acute intoxication state, not a depressive episode', keys: ['intoxication-focused'], mistake: 'Applying depressive criteria here' }),
    ]),
    Q('q2', 'core', 'Which feature best differentiates his presentation from a primary manic episode?', ['R1'], [
      O('a', 'His symptoms occur during or shortly after stimulant use and are expected to resolve as the drug clears', 3,
        { r: 'Substance-linked and time-limited', approach: 'Contrast against a mood episode', why: 'A manic episode is a sustained mood disturbance; his symptoms are linked to recent use and resolve as the drug clears', keys: ['symptoms after cocaine use', 'resolve as the drug clears'], mistake: 'Attributing substance-induced symptoms to a primary manic episode' }),
      O('b', 'The fact that he is agitated and has rapid, pressured speech during this acute presentation', -1,
        { r: 'Agitation and pressured speech occur in both', approach: 'Symptom framing', why: 'Agitation and pressured speech occur in both; the substance link and course differ', keys: ['shared feature'], mistake: 'Using agitation to differentiate' }),
      O('c', 'The elevated energy and the euphoria that he shows at points during this episode', -1,
        { r: 'Euphoria and high energy occur in both', approach: 'Energy framing', why: 'Euphoria and high energy occur in both; the substance link differs', keys: ['shared affect'], mistake: 'Reading euphoria as decisive' }),
      O('d', 'The way his agitation tends to feel a little worse in the noisier and more crowded parts of the clinic', 0,
        { r: 'Environmental effects are nonspecific', approach: 'Environment framing', why: 'A noisier environment does not differentiate the two', keys: ['nonspecific factor'], mistake: 'Over-reading an environmental effect' }),
    ]),
    Q('q3', 'core', 'How does his presentation differ from a brief psychotic disorder?', ['R1'], [
      O('a', 'His symptoms are attributable to acute stimulant intoxication expected to resolve, not a sustained primary psychosis', 3,
        { r: 'Substance-induced and resolving, not sustained psychosis', approach: 'Contrast the cause and course', why: 'Brief psychotic disorder is a primary psychosis; his paranoia is substance-induced and expected to resolve as the drug clears', keys: ['paranoia after stimulant use', 'expected to resolve'], mistake: 'Reading substance-induced paranoia as a primary psychotic disorder' }),
      O('b', 'The fact that he seems rather suspicious right now and misreads a good deal of what is going on around him in the clinic today', -1,
        { r: 'Paranoia can occur in both', approach: 'Paranoia framing', why: 'Paranoia can occur in both; the substance link and course differ', keys: ['shared feature'], mistake: 'Using paranoia to differentiate' }),
      O('c', 'The distress and the agitation that he shows during this acute and frightening episode', -1,
        { r: 'Agitation is nonspecific', approach: 'Agitation framing', why: 'Agitation can occur in both; the substance link differs', keys: ['shared agitation'], mistake: 'Reading agitation as decisive' }),
      O('d', 'The way his symptoms seem a little worse in the brighter and busier areas of the clinic', 0,
        { r: 'Environmental effects are nonspecific', approach: 'Environment framing', why: 'A busier environment does not differentiate the two', keys: ['nonspecific factor'], mistake: 'Over-reading an environmental effect' }),
    ]),
    Q('q4', 'core', 'What is the most important immediate concern to assess?', ['R2'], [
      O('a', 'Medical stability and safety, since stimulant intoxication can cause cardiovascular and other medical complications', 3,
        { r: 'Assess medical stability and safety', approach: 'Prioritize the medical and safety risk', why: 'Stimulant intoxication can cause serious medical complications, so medical stability and safety are assessed urgently', keys: ['rapid heartbeat, high blood pressure', 'agitation'], mistake: 'Treating an acutely intoxicated, physiologically activated client as a routine outpatient presentation' }),
      O('b', 'A previously undetected primary anxiety disorder that might better account for his agitation and restlessness', -1,
        { r: 'Anxiety does not explain the intoxication', approach: 'Anxiety framing', why: 'His activation is substance-induced, not a primary anxiety disorder', keys: ['substance-induced'], mistake: 'Reducing intoxication to anxiety' }),
      O('c', 'A long-standing eating disorder that could be the single underlying cause of his acute agitation', -1,
        { r: 'Eating pathology is not indicated', approach: 'Eating-disorder framing', why: 'No eating concerns are reported and this is an acute intoxication picture', keys: ['no eating data'], mistake: 'Inventing an unsupported rule-out' }),
      O('d', 'An emerging neurocognitive decline that could account for why he is so restless and agitated right now', 0,
        { r: 'Cognitive decline is not the issue', approach: 'Neurocognitive framing', why: 'The acute intoxication state, not a chronic decline, is what matters', keys: ['acute picture'], mistake: 'Pursuing an irrelevant rule-out' }),
    ]),
    Q('q5', 'intake', 'Given his agitation and paranoia, what is most important to assess about risk?', ['R3'], [
      O('a', 'Risk to himself and to others in his current agitated, paranoid state, screening both channels now', 3,
        { r: 'Assess risk to self and others now', approach: 'Screen risk in both directions', why: 'Acute agitation and paranoia can elevate risk to self and others, so both are assessed now', keys: ['agitated and paranoid', 'risk of agitation-related harm'], mistake: 'Assessing only one channel of risk, or deferring assessment' }),
      O('b', 'Assume there is no risk because his symptoms are due to the drug and will simply pass on their own', -2,
        { r: 'Assuming no risk is unsafe', approach: 'Dismissal framing', why: 'Acute agitation and paranoia can carry real risk that must be assessed now', keys: ['present risk'], mistake: 'Dismissing risk based on the substance cause' }),
      O('c', 'Defer any risk assessment until the intoxication has fully resolved and he has been calm for several hours', -2,
        { r: 'Deferring assessment is unsafe', approach: 'Delay framing', why: 'Risk is assessed now, during the acute state, not only after it resolves', keys: ['assess now'], mistake: 'Postponing an urgent assessment' }),
      O('d', 'Focus only on calming his agitation for now and return to any risk questions at a much later date', -1,
        { r: 'Sequencing risk behind calming is unsafe', approach: 'Single-issue framing', why: 'De-escalation and risk assessment proceed together, not one deferred behind the other', keys: ['safety first'], mistake: 'Sequencing risk assessment behind other needs' }),
    ]),
    Q('q6', 'treatment', 'What is the most appropriate immediate approach?', ['R2'], [
      O('a', 'Ensure medical evaluation and use a calm, low-stimulation, de-escalating approach to support safety', 3,
        { r: 'Medical evaluation plus calm de-escalation', approach: 'Stabilize medically and de-escalate', why: 'Acute stimulant intoxication needs medical evaluation and a calm, low-stimulation, de-escalating approach', keys: ['agitated and paranoid', 'physiological activation'], mistake: 'Confronting or over-stimulating an acutely intoxicated, paranoid client' }),
      O('b', 'Confront him firmly about his drug use right now so that he understands the seriousness of what he has done', -2,
        { r: 'Confrontation escalates agitation', approach: 'Confront framing', why: 'Confronting an agitated, paranoid, intoxicated client tends to escalate agitation and risk', keys: ['de-escalation'], mistake: 'Escalating rather than de-escalating' }),
      O('c', 'Begin intensive insight-oriented therapy about his substance use during the acute intoxication itself', -1,
        { r: 'Insight work is not appropriate now', approach: 'Depth-work framing', why: 'The acute intoxication is stabilized and de-escalated first; depth work comes later', keys: ['stabilize first'], mistake: 'Attempting depth work during acute intoxication' }),
      O('d', 'Starting him on a medication that you will select and adjust to calm him over the coming hours yourself', -2,
        { r: 'Prescribing is outside counselor scope', approach: 'Prescribe medication', why: 'Counselors do not select or adjust medication', keys: ['no prescriptive authority'], mistake: 'Acting outside scope of practice' }),
    ]),
    Q('q7', 'treatment', 'How should the counselor manage the environment during the acute state?', ['R5'], [
      O('a', 'Provide a calm, low-stimulation setting and a reassuring, non-threatening stance to reduce agitation', 3,
        { r: 'Calm, low-stimulation, reassuring setting', approach: 'Reduce stimulation and threat', why: 'A calm, low-stimulation, reassuring environment reduces agitation and paranoia in acute intoxication', keys: ['agitated and paranoid', 'restlessness'], mistake: 'Providing a loud, crowded, or confrontational environment that heightens agitation' }),
      O('b', 'Place him in a bright, busy, crowded area with many staff around so that he is closely watched at all times', -1,
        { r: 'Over-stimulation worsens agitation', approach: 'Over-stimulation framing', why: 'A crowded, high-stimulation setting tends to worsen agitation and paranoia', keys: ['low stimulation'], mistake: 'Increasing stimulation for a paranoid, agitated client' }),
      O('c', 'Leave him entirely alone with no support at all until the drug wears off completely on its own', -1,
        { r: 'Leaving him unsupported is unsafe', approach: 'Withdrawal framing', why: 'Calm supportive monitoring, not isolation without support, is appropriate given the risks', keys: ['supportive monitoring'], mistake: 'Withdrawing needed support and monitoring' }),
      O('d', 'Ignore the environment entirely and treat it as having no bearing on his agitation at all', -1,
        { r: 'Ignoring the environment misses a lever', approach: 'Hands-off framing', why: 'The environment meaningfully affects agitation and is part of supportive care', keys: ['environment matters'], mistake: 'Ignoring a modifiable supportive factor' }),
    ]),
    Q('q8', 'treatment', 'What should the plan include once he is stabilized?', ['R5'], [
      O('a', 'Assess for a stimulant use disorder and engage him into appropriate ongoing treatment and support', 3,
        { r: 'Assess use disorder and engage ongoing treatment', approach: 'Plan beyond the acute state', why: 'After stabilization, assessing for a use disorder and engaging ongoing treatment supports recovery', keys: ['acute intoxication', 'stimulant use'], mistake: 'Treating the acute intoxication as the whole picture without assessing for a use disorder' }),
      O('b', 'Assume that once the drug clears there is nothing further to address and no follow-up is needed at all', -1,
        { r: 'Assuming no follow-up misses the work', approach: 'Assume-resolved framing', why: 'Assessment for a use disorder and follow-up are needed, not an assumption that clearing the drug ends it', keys: ['follow-up needed'], mistake: 'Skipping needed assessment and follow-up' }),
      O('c', 'Confront him harshly about his drug use once he is calm so that he feels bad enough to never use again', -1,
        { r: 'Harsh confrontation is counter-therapeutic', approach: 'Shame framing', why: 'Harsh confrontation and shaming tend to reduce engagement rather than support change', keys: ['engagement over shame'], mistake: 'Using shame as a motivator' }),
      O('d', 'Starting him on a medication that you will select and adjust to prevent future use over the coming weeks', -2,
        { r: 'Prescribing is outside counselor scope', approach: 'Prescribe medication', why: 'Counselors do not select or adjust medication', keys: ['no prescriptive authority'], mistake: 'Acting outside scope of practice' }),
    ]),
    Q('q9', 'treatment', 'How should the counselor coordinate with the medical and crisis team?', ['R4'], [
      O('a', 'Communicate the acute presentation and, with appropriate consent, coordinate medical evaluation and next steps', 3,
        { r: 'Communicate and coordinate with consent', approach: 'Coordinate the acute care', why: 'The acute presentation is communicated and coordinated with the medical and crisis team with appropriate consent', keys: ['medical complications possible', 'crisis clinic'], mistake: 'Failing to communicate the acute change or disclosing without appropriate authority' }),
      O('b', 'Share his full history with everyone in the clinic freely, since his safety overrides all confidentiality entirely', -2,
        { r: 'Unlimited disclosure over-discloses', approach: 'Over-disclosure framing', why: 'Even for safety, disclosure follows consent and minimum-necessary and lawful limits', keys: ['minimum necessary'], mistake: 'Over-disclosing beyond what is appropriate' }),
      O('c', 'Avoid contacting the medical team at all so that his counseling stays entirely separate from his medical care', -1,
        { r: 'No coordination undercuts safe care', approach: 'Siloed framing', why: 'Consented coordination supports safe acute care here', keys: ['integrated care'], mistake: 'Refusing helpful, consented coordination' }),
      O('d', 'Manage the medical aspects of his intoxication yourself rather than involving the medical team at all', -2,
        { r: 'Managing medical care exceeds scope', approach: 'Overreach framing', why: 'Medical evaluation and management are the medical team’s role, not the counselor’s', keys: ['scope limits'], mistake: 'Assuming a medical role outside scope' }),
    ]),
    Q('q10', 'counseling', 'Andre becomes suspicious of the counselor and accuses the staff of trying to hurt him. The most therapeutic response is to:', ['R5'], [
      O('a', 'Stay calm and non-threatening, reassure him, and avoid arguing about the paranoid content', 3,
        { r: 'Calm, non-threatening reassurance', approach: 'De-escalate without confronting the paranoia', why: 'A calm, reassuring, non-threatening stance de-escalates paranoia without arguing about the content', keys: ['paranoid and suspicious', 'agitated'], mistake: 'Arguing with the paranoia or reacting in a way that heightens the perceived threat' }),
      O('b', 'Firmly argue that no one is trying to hurt him until he admits that his suspicion is completely unfounded', -2,
        { r: 'Arguing escalates the paranoia', approach: 'Confront framing', why: 'Arguing about the paranoid content tends to escalate agitation and threat perception', keys: ['de-escalation'], mistake: 'Confronting the paranoia' }),
      O('c', 'Agree that the staff probably are trying to hurt him so that he feels you are on his side right now', -2,
        { r: 'Colluding reinforces the paranoia', approach: 'Collude framing', why: 'Confirming the paranoid belief reinforces it and can heighten agitation', keys: ['reassure without colluding'], mistake: 'Validating the paranoid content' }),
      O('d', 'Raise your voice and stand over him to make clear that he needs to calm down immediately right now', -2,
        { r: 'A threatening stance escalates risk', approach: 'Intimidation framing', why: 'A loud, looming stance heightens threat perception and agitation', keys: ['non-threatening stance'], mistake: 'Adopting a threatening posture' }),
    ]),
    Q('q11', 'counseling', 'How can the counselor best support Andre once the acute state settles?', ['R5'], [
      O('a', 'Engage him non-judgmentally about his use and connect him to treatment tied to his own goals', 3,
        { r: 'Non-judgmental engagement and treatment linkage', approach: 'Engage and connect to care', why: 'Non-judgmental engagement about his use and linkage to treatment supports recovery once he is settled', keys: ['stimulant use', 'wants help'], mistake: 'Lecturing or shaming him rather than engaging and connecting him to care' }),
      O('b', 'Lecture him at length about how dangerous his drug use is until he promises to never use again', -1,
        { r: 'Lecturing raises resistance', approach: 'Lecture framing', why: 'Lecturing tends to entrench resistance rather than build engagement', keys: ['engage, do not lecture'], mistake: 'Imposing rather than engaging' }),
      O('c', 'Focus the sessions mainly on cataloguing every past use episode in exhaustive detail every single week', -1,
        { r: 'Cataloguing use is not engagement', approach: 'Catalogue framing', why: 'Rehashing past use does not build motivation or engagement', keys: ['engagement focus'], mistake: 'Centering sessions on past use' }),
      O('d', 'Tell him counseling cannot help him at all unless he first promises to stop using immediately and completely', -1,
        { r: 'Conditioning care is inappropriate', approach: 'Conditioning framing', why: 'Engagement and treatment linkage proceed without extracting an all-or-nothing promise', keys: ['engagement matters'], mistake: 'Making care contingent on a promise' }),
    ]),
    Q('q12', 'ethics', 'While intoxicated, Andre makes a specific, credible threat to harm an identifiable person. The most appropriate action is to:', ['R4'], [
      O('a', 'Assess the risk and follow duty-to-protect obligations, which may require warning or other protective steps', 3,
        { r: 'Assess and act on duty to protect', approach: 'Apply duty-to-protect', why: 'A serious, specific, identifiable threat triggers assessment and protective duties even during intoxication', keys: ['specific threat', 'identifiable person'], mistake: 'Dismissing the threat because he is intoxicated rather than assessing and acting on it' }),
      O('b', 'Keep the threat entirely confidential, since anything he says while intoxicated should never be shared at all', -2,
        { r: 'Confidentiality yields to a serious threat', approach: 'Absolutist framing', why: 'A serious, identifiable threat can require disclosure regardless of intoxication', keys: ['identifiable target'], mistake: 'Treating confidentiality as absolute when there is danger' }),
      O('c', 'Wait until he is completely sober and see whether he repeats the threat before assessing the risk at all', -2,
        { r: 'Delaying assessment is unsafe', approach: 'Wait-and-see framing', why: 'An identifiable threat requires prompt assessment, not waiting for sobriety', keys: ['active threat'], mistake: 'Postponing an urgent risk assessment' }),
      O('d', 'Notify the person and the police at once without first assessing the seriousness or following the proper process', -1,
        { r: 'Act on assessed risk, not reflexively', approach: 'Reflexive-disclosure framing', why: 'Protective steps follow a careful risk assessment', keys: ['proportionate response'], mistake: 'Disclosing before assessing the risk' }),
    ]),
    Q('q13', 'ethics', 'The counselor has limited training in acute intoxication and crisis care. The most ethical course of action is to:', ['R4'], [
      O('a', 'Ensure medical involvement, seek consultation, and coordinate rather than manage the crisis alone', 3,
        { r: 'Ensure medical involvement and coordinate', approach: 'Practice within competence', why: 'ACA C.2. and safety require ensuring medical care and coordination for an acute intoxication crisis', keys: ['limited training', 'acute intoxication with risk'], mistake: 'Attempting to manage an acute intoxication crisis alone without competence' }),
      O('b', 'Continue managing the case alone to preserve the continuity of the relationship built with him', -2,
        { r: 'Going it alone in a crisis is unsafe', approach: 'Continuity-over-competence', why: 'Continuity does not justify managing an acute crisis beyond competence', keys: ['competence and safety'], mistake: 'Prioritizing continuity over safety' }),
      O('c', 'Tell the team the intoxication is not serious enough to need medical evaluation and continue with supportive talks', -2,
        { r: 'Minimizing the risk is dangerous', approach: 'Downplay framing', why: 'Acute stimulant intoxication with physiological activation warrants medical evaluation', keys: ['medical evaluation'], mistake: 'Underestimating an acute medical risk' }),
      O('d', 'Transfer the case at once with no explanation, communication with the team, or coordinated plan at all', -1,
        { r: 'Abrupt transfer mishandles a crisis', approach: 'Uncoordinated handoff', why: 'A crisis requires coordinated communication, not an abrupt, uncommunicated transfer', keys: ['coordinated response'], mistake: 'Dropping the case without coordination during a crisis' }),
    ]),
  ],
};

// ============================================================================
// D197 — Acute Crisis / Decompensation (F43.0) — Crisis — hard
// ============================================================================
const D197 = {
  id: 'ncmhce-D197',
  title: 'Acute psychological crisis with overwhelming distress',
  category: 'Crisis',
  difficulty: 'hard',
  primaryDiagnosis: { name: 'Acute Crisis / Decompensation', code: 'F43.0' },
  diagnosis: { name: 'Acute Crisis / Decompensation', code: 'F43.0' },
  differentialOptions: [
    { id: 'do1', name: 'Acute Crisis / Decompensation', isCorrect: true },
    { id: 'do2', name: 'Major Depressive Disorder', isCorrect: false },
    { id: 'do3', name: 'Generalized Anxiety Disorder', isCorrect: false },
    { id: 'do4', name: 'Adjustment Disorder', isCorrect: false },
  ],
  narrative: {
    intake:
      'Denise Holloway, a 42-year-old, presents in acute crisis after a sudden series of losses—a job loss and a relationship ending in the same ' +
      'week. She is overwhelmed, tearful, unable to function or make decisions, and describes feeling that everything is falling apart at once.',
    session1:
      'Her presentation is an acute crisis state with impaired coping and functioning in response to overwhelming stressors, requiring immediate ' +
      'stabilization rather than a full diagnostic workup first. The intensity and acuity distinguish it from a stable, chronic mood or anxiety disorder.',
    session2:
      'She feels hopeless in the moment and says she does not know how she will get through this, and the counselor recognizes the need for careful ' +
      'risk assessment. She has some support but is currently overwhelmed, and she wants help to get through the immediate crisis and regain her footing.',
  },
  diagnosticRationale:
    'An acute crisis state—overwhelming distress, impaired coping, and disrupted functioning precipitated by acute stressors—calls for immediate ' +
    'crisis stabilization and risk assessment, a clinical focus distinct from a stable major depressive disorder, generalized anxiety disorder, or ' +
    'a longer-course adjustment disorder, where the priority is safety and stabilization before extended treatment planning.',
  references: [
    { id: 'R1', source: 'DSM-5-TR', detail: 'Acute stress reaction / crisis: acute overwhelming distress and impaired functioning after stressors' },
    { id: 'R2', source: 'NICE guidelines', detail: 'Crisis care: immediate stabilization, safety, and coordinated follow-up' },
    { id: 'R3', source: 'C-SSRS', detail: 'Structured suicide-risk assessment as a core element of crisis response' },
    { id: 'R4', source: 'ACA Code of Ethics', detail: 'A.1., B.2., and C.2.: client welfare, safety, danger exceptions, and competence' },
    { id: 'R5', source: 'Stanley-Brown SPI', detail: 'Collaborative safety planning and coping strategies in a crisis' },
  ],
  questions: [
    Q('q1', 'intake', 'What is most important to recognize about her presentation?', ['R1'], [
      O('a', 'It is an acute crisis state requiring immediate stabilization and risk assessment before extended treatment planning', 3,
        { r: 'Acute crisis; stabilize and assess risk first', approach: 'Frame it as a crisis', why: 'An acute crisis with impaired functioning calls for immediate stabilization and risk assessment first', keys: ['overwhelmed, unable to function', 'sudden losses'], mistake: 'Launching into a full diagnostic workup or long-term plan instead of stabilizing the crisis' }),
      O('b', 'That she can pinpoint the single childhood event she believes first made her vulnerable to crises', -1,
        { r: 'A remote precipitant is not the focus', approach: 'Trigger framing', why: 'The acute crisis and safety, not a remote origin, are the immediate focus', keys: ['crisis focus'], mistake: 'Chasing a remote origin instead of stabilizing' }),
      O('c', 'That her distress has grown a little worse over the past few days than it was the week before that', -1,
        { r: 'Recent change is not the focus', approach: 'Recent-change framing', why: 'The acute crisis state and safety, not the exact trajectory, are the focus', keys: ['acute state'], mistake: 'Focusing on the trajectory instead of stabilizing' }),
      O('d', 'That she currently meets the full symptom count required for a discrete manic episode at this point in time', 0,
        { r: 'Manic count is not the focus', approach: 'Mania-criteria framing', why: 'The focus is acute crisis stabilization, not a manic episode', keys: ['crisis-focused'], mistake: 'Applying manic criteria here' }),
    ]),
    Q('q2', 'core', 'Which feature best distinguishes her presentation from a stable major depressive disorder?', ['R1'], [
      O('a', 'The acuity and the impaired functioning in response to sudden stressors mark an acute crisis, not a stable chronic course', 3,
        { r: 'Acute, stressor-linked crisis versus stable course', approach: 'Contrast acuity and course', why: 'A stable major depressive disorder is a sustained course; hers is an acute, stressor-precipitated crisis with impaired coping', keys: ['sudden losses this week', 'unable to function'], mistake: 'Treating an acute crisis as though it were a stable, chronic disorder' }),
      O('b', 'The fact that she is feeling very low and quite tearful and is having a really hard time functioning in her daily life right now', -1,
        { r: 'Low mood occurs in both', approach: 'Mood framing', why: 'Low mood can occur in both; the acuity and stressor link differ', keys: ['shared feature'], mistake: 'Using low mood to differentiate' }),
      O('c', 'The hopelessness she feels in the moment and the distress that comes with it', -1,
        { r: 'Hopelessness is nonspecific', approach: 'Hopelessness framing', why: 'Hopelessness can occur in both; the acuity differs', keys: ['shared affect'], mistake: 'Reading hopelessness as decisive' }),
      O('d', 'The way her mood tends to dip a little more in the mornings than it does later during the day', 0,
        { r: 'Diurnal pattern is not diagnostic', approach: 'Time-of-day framing', why: 'Diurnal variation does not distinguish an acute crisis', keys: ['nonspecific timing'], mistake: 'Over-reading a circadian pattern' }),
    ]),
    Q('q3', 'core', 'How does her presentation differ from generalized anxiety disorder?', ['R1'], [
      O('a', 'Her state is an acute crisis precipitated by sudden events, not chronic, pervasive worry across many domains', 3,
        { r: 'Acute crisis versus chronic pervasive worry', approach: 'Contrast acuity and breadth', why: 'GAD is chronic, pervasive worry; hers is an acute crisis precipitated by sudden, specific losses', keys: ['acute crisis this week', 'precipitated by losses'], mistake: 'Reading an acute crisis as a chronic anxiety disorder' }),
      O('b', 'The fact that she feels anxious and overwhelmed and finds it hard to settle her distress right now', -1,
        { r: 'Anxiety and overwhelm occur in both', approach: 'Anxiety framing', why: 'Anxiety and overwhelm can occur in both; the acuity and precipitants differ', keys: ['shared feature'], mistake: 'Using anxiety to differentiate' }),
      O('c', 'The difficulty she has thinking clearly and making decisions while she is so distressed', -1,
        { r: 'Impaired decision-making is nonspecific', approach: 'Decision framing', why: 'Difficulty deciding can occur in both; the acuity differs', keys: ['shared difficulty'], mistake: 'Reading impaired decision-making as decisive' }),
      O('d', 'The way her worry tends to ease a little on the weekends when her overall schedule is a good deal lighter', 0,
        { r: 'Schedule effects are nonspecific', approach: 'Schedule framing', why: 'A lighter schedule does not distinguish an acute crisis', keys: ['nonspecific factor'], mistake: 'Over-reading a schedule effect' }),
    ]),
    Q('q4', 'core', 'How does her presentation differ from an adjustment disorder?', ['R1'], [
      O('a', 'The immediate priority is acute crisis stabilization and safety, not a longer-course diagnostic and treatment plan', 3,
        { r: 'Acute stabilization priority versus longer course', approach: 'Contrast the immediate priority', why: 'An adjustment disorder is managed over a longer course; her acute crisis prioritizes immediate stabilization and safety', keys: ['acute, overwhelming crisis', 'stabilization first'], mistake: 'Deferring stabilization to work up a longer-course diagnosis first' }),
      O('b', 'The fact that her distress is clearly connected to the recent stressful events in her life', -1,
        { r: 'Stressor link occurs in both', approach: 'Stressor framing', why: 'A stressor link occurs in both; the acuity and immediate priority differ', keys: ['shared feature'], mistake: 'Using the stressor link to differentiate' }),
      O('c', 'The sadness and the worry that she feels in response to the losses she has experienced', -1,
        { r: 'Distress after loss is nonspecific', approach: 'Distress framing', why: 'Distress after loss can occur in both; the acuity differs', keys: ['shared affect'], mistake: 'Reading distress as decisive' }),
      O('d', 'The way her distress tends to feel a little worse during the busiest and most demanding parts of her week', 0,
        { r: 'Stress reactivity is nonspecific', approach: 'Stress framing', why: 'Worsening during busy times does not distinguish an acute crisis', keys: ['nonspecific reactivity'], mistake: 'Using stress sensitivity to differentiate' }),
    ]),
    Q('q5', 'intake', 'Given her hopelessness in the moment, what is the single most important step?', ['R3'], [
      O('a', 'Conduct a structured suicide-risk assessment as a core, immediate part of the crisis response', 3,
        { r: 'Structured suicide-risk assessment now', approach: 'Screen risk directly', why: 'Structured suicide-risk assessment is a core, immediate element of any crisis response', keys: ['feels hopeless', 'does not know how she will get through'], mistake: 'Providing crisis support without a structured suicide-risk assessment' }),
      O('b', 'Assume there is no risk because she has some support and her distress is clearly situational', -2,
        { r: 'Assuming no risk is unsafe', approach: 'Dismissal framing', why: 'Hopelessness in a crisis warrants structured assessment regardless of situational cause or support', keys: ['present risk'], mistake: 'Dismissing risk based on assumption' }),
      O('c', 'Defer any risk assessment until she is calmer and has had several days to process the losses first', -2,
        { r: 'Deferring assessment is unsafe', approach: 'Delay framing', why: 'Risk is assessed now, as a core part of the crisis response', keys: ['assess now'], mistake: 'Postponing an urgent assessment' }),
      O('d', 'Focus only on practical problem-solving for the job and relationship for now and return to safety later', -1,
        { r: 'Sequencing safety behind problem-solving is unsafe', approach: 'Single-issue framing', why: 'Practical problem-solving does not displace assessing current safety in a crisis', keys: ['safety first'], mistake: 'Sequencing safety behind other needs' }),
    ]),
    Q('q6', 'treatment', 'What is the most appropriate immediate crisis-intervention approach?', ['R2'], [
      O('a', 'Provide stabilization, emotional support, and collaborative problem-focused coping for the immediate crisis', 3,
        { r: 'Stabilization and problem-focused coping', approach: 'Apply crisis intervention', why: 'Crisis intervention provides stabilization, support, and collaborative, problem-focused coping for the immediate situation', keys: ['overwhelmed and unable to function', 'wants to get through it'], mistake: 'Launching long-term therapy or a full workup instead of stabilizing the immediate crisis' }),
      O('b', 'Begin long-term insight-oriented therapy about the deeper roots of her difficulties during the acute crisis', -1,
        { r: 'Depth work is not the immediate priority', approach: 'Depth-work framing', why: 'Stabilization and immediate coping come first; depth work is not the crisis priority', keys: ['stabilize first'], mistake: 'Attempting depth work during an acute crisis' }),
      O('c', 'Tell her the losses are not really that serious and that she should simply calm down and move on quickly', -2,
        { r: 'Minimizing the crisis is invalidating', approach: 'Minimize framing', why: 'Minimizing her crisis invalidates her distress and undermines stabilization', keys: ['validate and stabilize'], mistake: 'Dismissing a genuine crisis' }),
      O('d', 'Starting her on a medication that you will select and adjust to calm her over the coming weeks yourself', -2,
        { r: 'Prescribing is outside counselor scope', approach: 'Prescribe medication', why: 'Counselors do not select or adjust medication', keys: ['no prescriptive authority'], mistake: 'Acting outside scope of practice' }),
    ]),
    Q('q7', 'treatment', 'What should the immediate safety-focused plan include?', ['R5'], [
      O('a', 'Collaborative safety planning, mobilizing supports, and concrete next steps for the immediate period', 3,
        { r: 'Safety planning and mobilizing supports', approach: 'Build an immediate plan', why: 'A collaborative safety plan, mobilized supports, and concrete next steps stabilize the immediate crisis', keys: ['some support available', 'overwhelmed now'], mistake: 'Relying on a no-suicide contract instead of a collaborative safety plan and supports' }),
      O('b', 'Have her sign a no-suicide contract and treat that promise as the entire safety plan for the crisis', -2,
        { r: 'No-suicide contracts are not evidence-based', approach: 'Contract framing', why: 'No-suicide contracts do not ensure safety and are not a substitute for a collaborative safety plan', keys: ['safety planning, not contracts'], mistake: 'Relying on a no-suicide contract' }),
      O('c', 'Tell her to simply go home and rest and that everything will look better in the morning on its own', -1,
        { r: 'Sending her off without a plan is inadequate', approach: 'Dismiss framing', why: 'A crisis warrants a collaborative safety plan and supports, not simply sending her home', keys: ['concrete plan'], mistake: 'Providing no immediate safety plan' }),
      O('d', 'Focus only on scheduling a future appointment and leave immediate safety and supports out of the plan', -1,
        { r: 'Deferring safety to a future visit is unsafe', approach: 'Defer framing', why: 'Immediate safety planning and supports come now, not only at a future appointment', keys: ['immediate safety'], mistake: 'Deferring immediate safety planning' }),
    ]),
    Q('q8', 'treatment', 'How should follow-up be arranged after the immediate crisis is stabilized?', ['R2'], [
      O('a', 'Coordinate timely follow-up and appropriate level of care, and reassess for any underlying condition', 3,
        { r: 'Timely follow-up and reassessment', approach: 'Bridge from crisis to ongoing care', why: 'After stabilization, timely follow-up, appropriate level of care, and reassessment guide ongoing support', keys: ['acute crisis stabilized', 'possible underlying issues'], mistake: 'Ending contact after the acute crisis with no follow-up or reassessment' }),
      O('b', 'Assume the crisis is fully resolved and that no follow-up or further contact is needed at all', -1,
        { r: 'Assuming full resolution skips follow-up', approach: 'Assume-resolved framing', why: 'Follow-up and reassessment are needed, not an assumption that the crisis is fully resolved', keys: ['follow-up needed'], mistake: 'Skipping needed follow-up' }),
      O('c', 'Immediately hospitalize her regardless of the assessed level of risk or her own preferences and input', -1,
        { r: 'Match level of care to assessed risk', approach: 'Reflexive-hospitalization framing', why: 'Disposition follows a careful risk assessment and collaboration, not a reflex', keys: ['stratified decision'], mistake: 'Hospitalizing reflexively without assessment' }),
      O('d', 'Wait several weeks before any follow-up so that she has plenty of time to sort things out on her own first', -1,
        { r: 'A long gap after a crisis is risky', approach: 'Delayed-follow-up framing', why: 'Timely follow-up after a crisis is important, not a long unsupported gap', keys: ['timely follow-up'], mistake: 'Leaving a long gap after a crisis' }),
    ]),
    Q('q9', 'treatment', 'How should the counselor mobilize supports appropriately?', ['R4'], [
      O('a', 'With her consent, help mobilize her existing supports and appropriate community and crisis resources', 3,
        { r: 'Mobilize supports with consent', approach: 'Coordinate within consent', why: 'Mobilizing her supports and appropriate resources, with consent, strengthens the crisis response', keys: ['has some support', 'community resources'], mistake: 'Mobilizing supports without her consent, or failing to involve any supports at all' }),
      O('b', 'Contact her family and employer with all the details right away without discussing it or obtaining consent', -2,
        { r: 'Disclosing without consent breaches confidentiality', approach: 'Assume-consent framing', why: 'Contacting others requires her consent except where a safety exception applies', keys: ['no consent'], mistake: 'Disclosing to others without consent' }),
      O('c', 'Handle everything yourself without involving any of her supports so that her privacy is fully protected', -1,
        { r: 'Excluding all supports weakens the response', approach: 'Isolation framing', why: 'Consented support mobilization strengthens the crisis response', keys: ['mobilize supports'], mistake: 'Excluding helpful, consented supports' }),
      O('d', 'Tell her she must resolve the crisis entirely on her own without any outside help or resources at all', -1,
        { r: 'Withholding resources is inappropriate', approach: 'Go-it-alone framing', why: 'Appropriate supports and resources are part of a good crisis response', keys: ['coordinated support'], mistake: 'Denying appropriate resources' }),
    ]),
    Q('q10', 'counseling', 'Denise sobs that she cannot cope and everything is falling apart. The most therapeutic response is to:', ['R5'], [
      O('a', 'Respond with calm empathy, help her feel contained and safe, and gently focus on the immediate next step', 3,
        { r: 'Calm empathy, containment, and one next step', approach: 'Stabilize the moment', why: 'Calm empathy, emotional containment, and a focus on one immediate step stabilize an overwhelmed client', keys: ['sobbing, overwhelmed', 'everything falling apart'], mistake: 'Either minimizing her distress or overwhelming her with too much at once' }),
      O('b', 'Tell her she is overreacting and that her situation is really not as bad as she is making it out to be', -2,
        { r: 'Minimizing is invalidating', approach: 'Minimize framing', why: 'Telling her she is overreacting invalidates her distress and undermines stabilization', keys: ['validate and stabilize'], mistake: 'Dismissing her distress' }),
      O('c', 'List every problem she is facing and everything she will need to fix so she sees the full scope right now', -1,
        { r: 'Overwhelming her worsens the crisis', approach: 'Overload framing', why: 'Laying out the full scope at once overwhelms an already overwhelmed client', keys: ['one step at a time'], mistake: 'Overwhelming rather than containing' }),
      O('d', 'End the session quickly so she can go home and calm down rather than working with her distress now', -1,
        { r: 'Ending abruptly misses the stabilization', approach: 'Escape framing', why: 'The moment is used to stabilize and support, not avoided by ending early', keys: ['stabilize now'], mistake: 'Avoiding the immediate stabilization work' }),
    ]),
    Q('q11', 'counseling', 'How can the counselor best support Denise’s coping in the crisis?', ['R5'], [
      O('a', 'Help her identify immediate coping strategies and strengths and take one manageable step at a time', 3,
        { r: 'Immediate coping, strengths, one step at a time', approach: 'Build coping and momentum', why: 'Identifying immediate coping strategies and strengths and taking one manageable step supports crisis coping', keys: ['unable to make decisions', 'wants to regain footing'], mistake: 'Overwhelming her with everything at once instead of one manageable step' }),
      O('b', 'Tell her to just stay positive and that everything will simply work itself out on its own in time', -1,
        { r: 'Empty reassurance is not coping work', approach: 'Reassurance framing', why: 'Generic positivity does not build the immediate coping she needs', keys: ['concrete coping'], mistake: 'Substituting reassurance for coping work' }),
      O('c', 'Focus the session mainly on analyzing why her job and relationship ended in exhaustive detail right now', -1,
        { r: 'Analysis is not the crisis priority', approach: 'Analysis framing', why: 'Detailed analysis is not the immediate crisis priority; stabilization and coping are', keys: ['stabilize first'], mistake: 'Analyzing instead of stabilizing' }),
      O('d', 'Tell her counseling cannot help her at all unless she first resolves the job and relationship issues herself', -1,
        { r: 'Conditioning care is inappropriate', approach: 'Conditioning framing', why: 'Crisis support proceeds now, regardless of the external problems being resolved', keys: ['engagement matters'], mistake: 'Making support contingent on resolving the stressors' }),
    ]),
    Q('q12', 'ethics', 'During the crisis Denise discloses active suicidal ideation with a plan. The most appropriate action is to:', ['R3'], [
      O('a', 'Complete a structured risk assessment and safety planning, escalating the level of care as indicated', 3,
        { r: 'Assess and safety-plan, escalate as needed', approach: 'Apply risk assessment and safety planning', why: 'Active ideation with a plan requires structured assessment, safety planning, and escalation as indicated', keys: ['active ideation with a plan', 'acute crisis'], mistake: 'Treating active ideation with a plan as no different from general crisis distress' }),
      O('b', 'Ask her to sign a no-suicide contract promising not to act, and treat that promise as the safety plan', -2,
        { r: 'No-suicide contracts are not evidence-based', approach: 'Contract framing', why: 'No-suicide contracts do not ensure safety and are not a substitute for assessment and safety planning', keys: ['safety planning, not contracts'], mistake: 'Relying on a no-suicide contract' }),
      O('c', 'Wait until the next session to see whether the ideation passes before taking any further action at all', -2,
        { r: 'Delaying with active ideation is unsafe', approach: 'Wait-and-see framing', why: 'Active ideation with a plan requires prompt action, not waiting', keys: ['active risk'], mistake: 'Postponing action on active risk' }),
      O('d', 'Immediately hospitalize her regardless of the assessed level of risk or her own preferences and input', -1,
        { r: 'Match level of care to assessed risk', approach: 'Reflexive-hospitalization framing', why: 'Disposition follows a careful risk assessment and collaboration, not a reflex', keys: ['stratified decision'], mistake: 'Hospitalizing reflexively without assessment' }),
    ]),
    Q('q13', 'ethics', 'The counselor has limited training in crisis intervention. The most ethical course of action is to:', ['R4'], [
      O('a', 'Seek consultation and coordinate crisis resources, referring for components beyond your competence', 3,
        { r: 'Consult, coordinate, or refer within competence', approach: 'Practice within competence', why: 'ACA C.2. and safety require consultation and coordinated crisis resources for a high-acuity crisis', keys: ['limited crisis training', 'high-acuity crisis'], mistake: 'Managing a high-acuity crisis alone without competence' }),
      O('b', 'Continue managing the case alone to preserve the continuity of the relationship built with her', -2,
        { r: 'Going it alone in a crisis is unsafe', approach: 'Continuity-over-competence', why: 'Continuity does not justify managing a high-acuity crisis beyond competence', keys: ['competence and safety'], mistake: 'Prioritizing continuity over safety' }),
      O('c', 'Tell her the crisis is not serious enough to need any extra resources and continue with general talks only', -2,
        { r: 'Minimizing the crisis is dangerous', approach: 'Downplay framing', why: 'A high-acuity crisis with risk warrants competent, coordinated care', keys: ['high-acuity crisis'], mistake: 'Underestimating a crisis' }),
      O('d', 'Transfer the case at once with no explanation, coordination, or plan for the transition during the crisis', -1,
        { r: 'Abrupt transfer mishandles a crisis', approach: 'Uncoordinated handoff', why: 'A crisis requires coordinated communication, not an abrupt, uncommunicated transfer', keys: ['coordinated response'], mistake: 'Dropping the case without coordination during a crisis' }),
    ]),
  ],
};

// ============================================================================
// D198 — Homicidal Ideation / Threat Assessment (R45.850) — Crisis — hard
// ============================================================================
const D198 = {
  id: 'ncmhce-D198',
  title: 'A client voicing threats toward an identifiable person',
  category: 'Crisis',
  difficulty: 'hard',
  primaryDiagnosis: { name: 'Homicidal Ideation / Threat Assessment', code: 'R45.850' },
  diagnosis: { name: 'Homicidal Ideation / Threat Assessment', code: 'R45.850' },
  differentialOptions: [
    { id: 'do1', name: 'Homicidal Ideation / Threat Assessment', isCorrect: true },
    { id: 'do2', name: 'Intermittent Explosive Disorder', isCorrect: false },
    { id: 'do3', name: 'Antisocial Personality Disorder', isCorrect: false },
    { id: 'do4', name: 'Delusional Disorder', isCorrect: false },
  ],
  narrative: {
    intake:
      'Kevin Barnes, a 38-year-old, discloses in session that he has been thinking of seriously harming a specific former coworker who he believes ' +
      'cost him his job. He voices anger and a desire for revenge and mentions that he knows where the coworker lives and works.',
    session1:
      'The clinical focus is a threat assessment of homicidal ideation toward an identifiable person, which centers on evaluating intent, plan, ' +
      'means, and risk factors rather than assigning a single categorical disorder. The presence of a specific target and possible means elevates concern.',
    session2:
      'He is agitated but has intact reality testing, and his ideation is anger- and revenge-driven rather than a fixed delusion or a broad ' +
      'pattern of exploiting others. He has access to means, and the counselor recognizes the duty to assess risk and act to protect an identifiable potential victim.',
  },
  diagnosticRationale:
    'Homicidal ideation toward an identifiable person is a clinical focus requiring structured threat and risk assessment—intent, plan, means, ' +
    'target specificity, and risk and protective factors—and consideration of duty-to-protect obligations, rather than a single categorical ' +
    'diagnosis, and is distinct from intermittent explosive disorder, antisocial personality disorder, and delusional disorder.',
  references: [
    { id: 'R1', source: 'DSM-5-TR', detail: 'Homicidal ideation as a clinical focus warranting threat/risk assessment; not a single categorical disorder' },
    { id: 'R2', source: 'State law', detail: 'Duty to protect / warn: statutory and case-law obligations regarding serious threats to identifiable victims' },
    { id: 'R3', source: 'C-SSRS', detail: 'Structured risk screening principles applied to risk of harm to self and others' },
    { id: 'R4', source: 'ACA Code of Ethics', detail: 'B.2.: serious and foreseeable harm as an exception to confidentiality; duty to protect' },
    { id: 'R5', source: 'Corey (Theory & Practice)', detail: 'Maintaining the alliance while managing risk and mandated disclosures' },
  ],
  questions: [
    Q('q1', 'intake', 'What is most important to recognize about the clinical focus here?', ['R1'], [
      O('a', 'It calls for a structured threat and risk assessment of intent, plan, means, and target, not just a categorical label', 3,
        { r: 'Structured threat/risk assessment focus', approach: 'Frame it as a threat assessment', why: 'Homicidal ideation toward an identifiable person centers on a structured threat and risk assessment, not on assigning one label', keys: ['specific target', 'anger and desire for revenge'], mistake: 'Focusing on picking a diagnostic label instead of conducting a structured threat assessment' }),
      O('b', 'That he can pinpoint the single childhood event that first made him prone to violent thoughts', -1,
        { r: 'A remote origin is not the focus', approach: 'Trigger framing', why: 'The threat assessment and safety, not a remote origin, are the immediate focus', keys: ['threat-assessment focus'], mistake: 'Chasing a remote origin instead of assessing the threat' }),
      O('c', 'That his anger has grown a little more intense over the past few days than it was the week before', -1,
        { r: 'Recent change is not the focus', approach: 'Recent-change framing', why: 'The structured assessment of the current threat, not the trajectory, is the focus', keys: ['current threat'], mistake: 'Focusing on the trajectory instead of assessing the threat' }),
      O('d', 'That he currently meets the full symptom count required for a discrete major depressive episode at this time', 0,
        { r: 'Depressive count is not the focus', approach: 'Mood-criteria framing', why: 'The focus is threat and risk assessment, not a depressive episode', keys: ['threat-focused'], mistake: 'Applying depressive criteria here' }),
    ]),
    Q('q2', 'core', 'Which feature best differentiates this from intermittent explosive disorder?', ['R1'], [
      O('a', 'The focus is a specific, targeted threat requiring assessment, not a pattern of impulsive outbursts out of proportion', 3,
        { r: 'Targeted threat versus impulsive outburst pattern', approach: 'Contrast the clinical focus', why: 'IED is a pattern of impulsive aggressive outbursts; here the focus is a specific, targeted threat requiring assessment', keys: ['specific former coworker', 'desire for revenge'], mistake: 'Reframing a targeted threat as merely an impulsive outburst pattern' }),
      O('b', 'The fact that he is feeling very angry and has quite aggressive thoughts during this difficult period of his life right now', -1,
        { r: 'Anger and aggression occur in both', approach: 'Anger framing', why: 'Anger and aggressive thoughts occur in both; the specific targeted threat differs', keys: ['shared feature'], mistake: 'Using anger to differentiate' }),
      O('c', 'The frustration and the resentment that he expresses about losing his job', -1,
        { r: 'Resentment is nonspecific', approach: 'Resentment framing', why: 'Resentment can occur in both; the targeted threat is the focus', keys: ['shared affect'], mistake: 'Reading resentment as decisive' }),
      O('d', 'The way his anger tends to feel a little worse during the most stressful parts of his day', 0,
        { r: 'Stress reactivity is nonspecific', approach: 'Stress framing', why: 'Worsening under stress does not distinguish the clinical focus', keys: ['nonspecific reactivity'], mistake: 'Using stress sensitivity to differentiate' }),
    ]),
    Q('q3', 'core', 'How does this differ from antisocial personality disorder?', ['R1'], [
      O('a', 'The focus is an acute threat to assess, not a pervasive lifelong pattern of exploiting and disregarding others', 3,
        { r: 'Acute threat focus versus pervasive pattern', approach: 'Contrast acute focus with a trait pattern', why: 'Antisocial PD is a pervasive lifelong pattern; here the focus is assessing an acute, specific threat', keys: ['acute revenge-driven threat', 'not a pervasive exploitation pattern'], mistake: 'Reframing an acute threat as a full personality disorder' }),
      O('b', 'The fact that he is expressing anger and thoughts of harming someone who he feels wronged him', -1,
        { r: 'Aggressive intent can occur in both', approach: 'Intent framing', why: 'Aggressive intent can occur in both; the acute-threat focus differs', keys: ['shared feature'], mistake: 'Using aggressive intent to differentiate' }),
      O('c', 'The blame he places on the coworker and the resentment that he feels toward him', -1,
        { r: 'Blame and resentment are nonspecific', approach: 'Blame framing', why: 'Blame and resentment can occur in both; the focus differs', keys: ['shared affect'], mistake: 'Reading blame as decisive' }),
      O('d', 'The way his agitation tends to be a little worse in the evenings than during the daytime hours', 0,
        { r: 'Diurnal pattern is not diagnostic', approach: 'Time-of-day framing', why: 'Timing does not distinguish the clinical focus', keys: ['nonspecific timing'], mistake: 'Over-reading a circadian pattern' }),
    ]),
    Q('q4', 'core', 'How does this differ from delusional disorder?', ['R1'], [
      O('a', 'His ideation is anger- and revenge-driven with intact reality testing, not a fixed false delusional belief', 3,
        { r: 'Anger-driven with intact reality testing', approach: 'Contrast against a fixed delusion', why: 'Delusional disorder involves a fixed false belief; his ideation is anger-driven with intact reality testing', keys: ['intact reality testing', 'anger- and revenge-driven'], mistake: 'Reading revenge-driven ideation as a fixed delusion' }),
      O('b', 'The fact that he blames the coworker and feels strongly that the coworker wronged him', -1,
        { r: 'A grievance belief can occur in both', approach: 'Grievance framing', why: 'A strong grievance belief can occur in both; the reality testing and fixity differ', keys: ['shared feature'], mistake: 'Using a grievance belief to differentiate' }),
      O('c', 'The suspicion and the hostility that he feels toward the coworker he blames', -1,
        { r: 'Hostility is nonspecific', approach: 'Hostility framing', why: 'Hostility can occur in both; the reality testing differs', keys: ['shared affect'], mistake: 'Reading hostility as decisive' }),
      O('d', 'The way his agitation seems a little worse on the days when he has slept poorly the night before', 0,
        { r: 'Sleep effects are nonspecific', approach: 'Sleep framing', why: 'Worse agitation after poor sleep does not distinguish the focus', keys: ['nonspecific factor'], mistake: 'Over-reading a sleep effect' }),
    ]),
    Q('q5', 'intake', 'What is the most important assessment to conduct right now?', ['R3'], [
      O('a', 'A structured threat assessment of intent, plan, means, target specificity, and risk and protective factors', 3,
        { r: 'Structured threat/risk assessment now', approach: 'Assess the threat systematically', why: 'A structured assessment of intent, plan, means, target, and risk/protective factors is essential to gauge the threat', keys: ['specific target', 'knows where the coworker lives', 'access to means'], mistake: 'Reacting without a structured assessment of intent, plan, means, and risk factors' }),
      O('b', 'A detailed family pedigree going back several generations to find relatives who were also aggressive', -1,
        { r: 'Extended pedigree is not the priority', approach: 'Pedigree framing', why: 'It does not inform the immediate threat assessment', keys: ['assessment-relevant data'], mistake: 'Gathering data that does not inform the threat assessment' }),
      O('c', 'Whether his anger can be traced to one specific event that fully explains all of his aggressive thoughts', -1,
        { r: 'A single origin is not the priority', approach: 'Origin-hunting framing', why: 'The structured threat assessment, not a single origin, is the immediate priority', keys: ['assess the threat'], mistake: 'Hunting for an origin instead of assessing the threat' }),
      O('d', 'His general hobbies and preferences so that the sessions can be arranged around what he most enjoys', 0,
        { r: 'Preferences are secondary', approach: 'Preference framing', why: 'Useful for rapport but not the immediate threat-assessment priority', keys: ['secondary factor'], mistake: 'Prioritizing rapport detail over the threat assessment' }),
    ]),
    Q('q6', 'treatment', 'Given a serious, credible threat to an identifiable person, what is the most appropriate action?', ['R2'], [
      O('a', 'Assess the risk and follow duty-to-protect obligations, which may require warning or other protective steps', 3,
        { r: 'Assess and act on duty to protect', approach: 'Apply duty-to-protect', why: 'A serious, specific, credible threat to an identifiable victim triggers assessment and duty-to-protect obligations', keys: ['specific target', 'access to means'], mistake: 'Treating a serious, identifiable threat as fully confidential' }),
      O('b', 'Keep the threat entirely confidential, since everything shared in counseling must always stay completely private', -2,
        { r: 'Confidentiality yields to a serious threat', approach: 'Absolutist framing', why: 'A serious, identifiable threat can require disclosure under duty-to-protect obligations', keys: ['identifiable target'], mistake: 'Treating confidentiality as absolute when there is danger' }),
      O('c', 'Wait to see whether he repeats the threat at the next session before assessing the risk or acting at all', -2,
        { r: 'Delaying assessment is unsafe', approach: 'Wait-and-see framing', why: 'A serious, identifiable threat requires prompt assessment and action', keys: ['active threat'], mistake: 'Postponing an urgent assessment and response' }),
      O('d', 'Notify the coworker and the police at once without first assessing the seriousness or following the proper process', -1,
        { r: 'Act on assessed risk, not reflexively', approach: 'Reflexive-disclosure framing', why: 'Protective steps follow a careful risk assessment and the applicable legal process', keys: ['proportionate response'], mistake: 'Disclosing before assessing the risk and following the proper process' }),
    ]),
    Q('q7', 'treatment', 'How should the counselor determine the specific protective steps to take?', ['R2'], [
      O('a', 'Base the response on the assessed level of risk and the applicable legal duty in the jurisdiction', 3,
        { r: 'Match the response to assessed risk and law', approach: 'Apply a proportionate, lawful response', why: 'Protective steps are matched to the assessed level of risk and the applicable legal duty', keys: ['serious, credible threat', 'jurisdictional duty'], mistake: 'Applying a one-size-fits-all response instead of one matched to risk and the applicable law' }),
      O('b', 'Always immediately hospitalize the client regardless of the assessed level of risk or the circumstances', -1,
        { r: 'Reflexive hospitalization ignores assessment', approach: 'Reflexive framing', why: 'Disposition follows the assessed risk, not a reflex to hospitalize in every case', keys: ['stratified decision'], mistake: 'Hospitalizing reflexively regardless of risk' }),
      O('c', 'Do nothing at all and simply hope the threat resolves on its own without any action from you', -2,
        { r: 'Inaction ignores the duty', approach: 'Inaction framing', why: 'A serious, identifiable threat requires action, not inaction', keys: ['duty to act'], mistake: 'Failing to act on a serious threat' }),
      O('d', 'Decide based only on how you personally feel about the client rather than the assessed risk and the law', -1,
        { r: 'Personal feelings are not the standard', approach: 'Subjective framing', why: 'The response follows the assessed risk and the applicable law, not personal feelings', keys: ['objective standard'], mistake: 'Basing protective steps on personal feelings' }),
    ]),
    Q('q8', 'treatment', 'How should the counselor handle the therapeutic work alongside the risk management?', ['R5'], [
      O('a', 'Continue to engage him therapeutically on his anger and options while managing the risk and duties', 3,
        { r: 'Engage therapeutically while managing risk', approach: 'Hold both the alliance and the duty', why: 'The counselor engages the anger and safer options therapeutically while managing the risk and any mandated duties', keys: ['anger and revenge', 'wants to be heard'], mistake: 'Either abandoning the therapeutic work or ignoring the risk-management duty' }),
      O('b', 'Abandon all therapeutic engagement and treat him purely as a threat to be reported and nothing more', -1,
        { r: 'Abandoning the work is not indicated', approach: 'Pure-threat framing', why: 'Therapeutic engagement continues alongside risk management, not instead of it', keys: ['hold both'], mistake: 'Dropping the therapeutic work entirely' }),
      O('c', 'Focus only on the alliance and avoid the risk-management duty so that he does not feel betrayed by you', -2,
        { r: 'Avoiding the duty is unsafe', approach: 'Alliance-only framing', why: 'The safety duty cannot be avoided to preserve the alliance', keys: ['duty to protect'], mistake: 'Neglecting the safety duty' }),
      O('d', 'Encourage him to confront the coworker directly so that he can resolve his grievance in person', -2,
        { r: 'Encouraging confrontation raises risk', approach: 'Confrontation framing', why: 'Encouraging direct confrontation with the target increases risk', keys: ['risk escalation'], mistake: 'Advising an action that raises risk' }),
    ]),
    Q('q9', 'treatment', 'How should the counselor document and coordinate this situation?', ['R4'], [
      O('a', 'Document the assessment and actions carefully and coordinate with appropriate parties per the legal duty', 3,
        { r: 'Careful documentation and lawful coordination', approach: 'Document and coordinate appropriately', why: 'Careful documentation of the assessment and actions, and coordination per the legal duty, are essential in threat cases', keys: ['serious threat', 'protective steps'], mistake: 'Failing to document the assessment and actions, or coordinating outside the legal framework' }),
      O('b', 'Keep no records of the threat or the assessment so that nothing could ever be used against the client', -2,
        { r: 'Failing to document is improper', approach: 'No-records framing', why: 'Careful documentation is required, especially in threat and duty-to-protect situations', keys: ['document carefully'], mistake: 'Failing to document a serious clinical event' }),
      O('c', 'Share every detail of his entire history with everyone, since a threat overrides all confidentiality entirely', -2,
        { r: 'Unlimited disclosure over-discloses', approach: 'Over-disclosure framing', why: 'Disclosure is limited to what is necessary to protect, not the client’s entire history', keys: ['minimum necessary'], mistake: 'Over-disclosing beyond what protection requires' }),
      O('d', 'Avoid coordinating with anyone at all so that his counseling stays entirely private no matter what', -1,
        { r: 'No coordination ignores the duty', approach: 'Siloed framing', why: 'Appropriate, lawful coordination is part of the duty to protect', keys: ['lawful coordination'], mistake: 'Refusing appropriate, lawful coordination' }),
    ]),
    Q('q10', 'counseling', 'Kevin becomes more agitated when the counselor raises the duty to protect. The most therapeutic response is to:', ['R5'], [
      O('a', 'Stay calm, be transparent about the limits of confidentiality, and keep engaging him around his distress', 3,
        { r: 'Calm transparency about limits, keep engaging', approach: 'Be transparent while managing risk', why: 'Calm transparency about confidentiality limits, while continuing to engage his distress, manages risk without rupturing the alliance', keys: ['agitated when limits raised', 'wants to be heard'], mistake: 'Either hiding the duty from him or reacting in a way that escalates his agitation' }),
      O('b', 'Hide the fact that you may have to act so that he keeps talking and does not become more upset with you', -2,
        { r: 'Concealing the limits is not transparent', approach: 'Conceal framing', why: 'Confidentiality limits are disclosed transparently, not hidden', keys: ['transparent limits'], mistake: 'Concealing the limits of confidentiality' }),
      O('c', 'Threaten him with the police right away to make sure he understands that you are serious about acting', -1,
        { r: 'Threatening him escalates the situation', approach: 'Threat framing', why: 'Threatening him tends to escalate agitation; a calm, transparent stance is appropriate', keys: ['de-escalation'], mistake: 'Escalating with threats' }),
      O('d', 'End the session immediately and remove yourself rather than engaging with his agitation at all', -1,
        { r: 'Ending abruptly may increase risk', approach: 'Escape framing', why: 'Where safe, continuing to engage and de-escalate is preferable to an abrupt ending', keys: ['engage and de-escalate'], mistake: 'Abandoning engagement when it could de-escalate' }),
    ]),
    Q('q11', 'counseling', 'How can the counselor best support Kevin therapeutically through this?', ['R5'], [
      O('a', 'Validate his underlying hurt and anger while redirecting toward safer coping and problem-solving', 3,
        { r: 'Validate the feeling, redirect to safer coping', approach: 'Engage the distress, not the plan', why: 'Validating his underlying hurt and anger while redirecting to safer coping supports him without endorsing harm', keys: ['anger and revenge', 'lost his job'], mistake: 'Either endorsing the revenge plan or dismissing his underlying distress' }),
      O('b', 'Agree that harming the coworker is understandable so that he feels validated and stays engaged with you', -2,
        { r: 'Endorsing harm is dangerous', approach: 'Endorse-harm framing', why: 'Endorsing the plan to harm is dangerous and inappropriate', keys: ['redirect to safety'], mistake: 'Validating a plan to harm' }),
      O('c', 'Focus the sessions mainly on detailing his plans against the coworker in exhaustive detail every week', -1,
        { r: 'Elaborating the plan is not therapeutic', approach: 'Plan-focus framing', why: 'Dwelling on the plan is not therapeutic and can heighten risk', keys: ['redirect to coping'], mistake: 'Centering the work on the plan' }),
      O('d', 'Tell him counseling cannot help him at all unless he first drops all of his anger immediately and completely', -1,
        { r: 'Demanding he drop the anger stalls engagement', approach: 'Precondition framing', why: 'Engaging and redirecting the anger is the work, not demanding he eliminate it first', keys: ['engage the anger'], mistake: 'Setting an unworkable precondition' }),
    ]),
    Q('q12', 'ethics', 'Kevin asks whether the counselor is going to "tell on him." The most appropriate response is to:', ['R4'], [
      O('a', 'Explain confidentiality and its limits honestly, including the duty to protect an identifiable person from harm', 3,
        { r: 'Explain confidentiality and its limits honestly', approach: 'Be transparent about the duty', why: 'The counselor honestly explains confidentiality and the duty-to-protect limits that apply to a serious, identifiable threat', keys: ['asks if you will tell', 'serious threat'], mistake: 'Either promising absolute secrecy or being evasive about the duty to protect' }),
      O('b', 'Promise him that you will never tell anyone anything at all, no matter what he says about the coworker', -2,
        { r: 'Absolute secrecy ignores the duty', approach: 'Absolute-secrecy framing', why: 'A blanket promise ignores the duty to protect an identifiable person from a serious threat', keys: ['duty to protect'], mistake: 'Guaranteeing confidentiality you cannot ethically keep' }),
      O('c', 'Refuse to answer the question at all and simply change the subject whenever he raises it again', -1,
        { r: 'Evasion undermines transparency', approach: 'Evasion framing', why: 'Confidentiality and its limits are explained honestly, not evaded', keys: ['transparent limits'], mistake: 'Being evasive about the limits' }),
      O('d', 'Tell him you will definitely report him no matter what, before you have even assessed the actual risk', -1,
        { r: 'Premature certainty preempts assessment', approach: 'Premature-disclosure framing', why: 'Protective steps follow a careful assessment; stating you will report before assessing preempts that', keys: ['assess first'], mistake: 'Declaring a report before assessing the risk' }),
    ]),
    Q('q13', 'ethics', 'The counselor is unsure of the specific duty-to-protect law in the jurisdiction. The most ethical course of action is to:', ['R4'], [
      O('a', 'Seek immediate consultation and legal/ethical guidance while ensuring safety, rather than guessing alone', 3,
        { r: 'Consult and get guidance while ensuring safety', approach: 'Practice within competence and law', why: 'Uncertainty about the specific legal duty calls for immediate consultation and guidance while ensuring safety', keys: ['unsure of the law', 'serious threat'], mistake: 'Guessing at the legal duty alone instead of seeking immediate consultation and guidance' }),
      O('b', 'Do nothing until you have had time to research the law thoroughly on your own over the coming weeks', -2,
        { r: 'Delaying action on a serious threat is unsafe', approach: 'Delay framing', why: 'A serious threat requires prompt action and consultation, not weeks of solo research', keys: ['prompt action'], mistake: 'Delaying action on an active threat' }),
      O('c', 'Assume there is no duty at all and keep everything confidential to avoid any risk to the client relationship', -2,
        { r: 'Assuming no duty is unsafe', approach: 'Assume-no-duty framing', why: 'Assuming no duty in order to protect the relationship endangers an identifiable person', keys: ['duty to protect'], mistake: 'Assuming away a possible duty to protect' }),
      O('d', 'Transfer the case at once with no explanation, coordination, or attention to the immediate safety risk', -1,
        { r: 'Abrupt transfer mishandles the risk', approach: 'Uncoordinated handoff', why: 'A serious threat requires coordinated action and consultation, not an abrupt, uncommunicated transfer', keys: ['coordinated response'], mistake: 'Dropping the case without addressing the safety risk' }),
    ]),
  ],
};

module.exports = { CASES: [D195, D196, D197, D198] };
