// ============================================================================
// deep-cases-batch-18.js — NCMHCE deep cases, batch 18 (2022+ format)
// NCMHCE Prep Platform | GA Integrated Therapeutic Perspectives LLC
//
// Five exam-deep clinical simulations (13 items each, sections [5,4,4]). The
// diagnosis/clinical focus is GIVEN; items test clinical decision-making across
// the three derived sections (Assessment -> Planning -> Process). On the
// reserved id block ncmhce-D190+, adding distinct diagnoses not yet covered by
// any deep case (checked vs all deep-format cases + the exemplar):
//   ncmhce-D190  Alcohol Use Disorder, Severe (Substance)
//   ncmhce-D191  Schizoid Personality Disorder (Personality)
//   ncmhce-D192  Attention-Deficit/Hyperactivity Disorder, Inattentive (Neurodevelopmental)
//   ncmhce-D193  Nonsuicidal Self-Injury (Crisis)
//   ncmhce-D194  Opioid Withdrawal (Substance)
//
// Authored to NCMHCE_DeepCase_Generation_Spec.md. Passes caseSchema
// (strictItemQuality) AND examDepth with zero errors / zero warnings.
// Auto-discovered by import-deep-cases.js (deep-cases-batch-*.js).
//
// Validate:
//   node tools/cases/validateCases.js tools/cases/deep-cases-batch-18.js
//   node -e "const{validateExamDepthSet}=require('./tools/cases/examDepth');const{CASES}=require('./tools/cases/deep-cases-batch-18');console.log(validateExamDepthSet(CASES))"
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
// D190 — Alcohol Use Disorder, Severe (F10.20) — Substance — hard
// ============================================================================
const D190 = {
  id: 'ncmhce-D190',
  title: 'Severe alcohol dependence with withdrawal and heavy losses',
  category: 'Substance',
  difficulty: 'hard',
  primaryDiagnosis: { name: 'Alcohol Use Disorder, Severe', code: 'F10.20' },
  diagnosis: { name: 'Alcohol Use Disorder, Severe', code: 'F10.20' },
  differentialOptions: [
    { id: 'do1', name: 'Alcohol Use Disorder, Severe', isCorrect: true },
    { id: 'do2', name: 'Alcohol Use Disorder, Moderate', isCorrect: false },
    { id: 'do3', name: 'Major Depressive Disorder', isCorrect: false },
    { id: 'do4', name: 'Bipolar I Disorder', isCorrect: false },
  ],
  narrative: {
    intake:
      'Raymond Foster, a 52-year-old contractor, is referred by his physician after a fall while intoxicated. He describes daily heavy drinking, ' +
      'strong cravings, tolerance, and shakes and sweats when he tries to cut down, along with several failed attempts to quit over recent years.',
    session1:
      'He meets many criteria for the disorder—use despite harm, failed control, tolerance, and withdrawal—consistent with a severe rather than ' +
      'moderate level. The pattern centers on alcohol, and his low mood appears secondary to the drinking rather than a primary mood disorder.',
    session2:
      'His marriage and job are in jeopardy, he has had two prior withdrawal episodes with tremor, and he fears seizures if he stops abruptly. He ' +
      'feels ashamed and hopeless and at a low point said he would be better off dead, without current plan or intent, and wants to stop drinking safely.',
  },
  diagnosticRationale:
    'A problematic pattern of alcohol use meeting six or more criteria—impaired control, craving, tolerance, withdrawal, and use despite ' +
    'recurrent harm—indicates alcohol use disorder at the severe level, distinct from a moderate use disorder, a primary depressive disorder, and ' +
    'bipolar disorder, and notable for a potentially dangerous, medically managed withdrawal.',
  references: [
    { id: 'R1', source: 'DSM-5-TR', detail: 'Alcohol use disorder: 6+ of 11 criteria = severe; craving, tolerance, withdrawal, use despite harm' },
    { id: 'R2', source: 'ASAM Criteria', detail: 'Level-of-care decisions and medically supervised alcohol withdrawal management' },
    { id: 'R3', source: 'C-SSRS', detail: 'Structured suicide-risk screening given elevated risk in severe alcohol use disorder' },
    { id: 'R4', source: 'ACA Code of Ethics', detail: 'A.1. and C.2.: client welfare, coordination of care, and practicing within competence' },
    { id: 'R5', source: 'SAMHSA TIP 45', detail: 'Detoxification and safe withdrawal management and care coordination' },
  ],
  questions: [
    Q('q1', 'intake', 'What is most important to confirm to support a severe alcohol use disorder diagnosis?', ['R1'], [
      O('a', 'A problematic pattern meeting six or more criteria, including craving, tolerance, withdrawal, and use despite harm', 3,
        { r: 'Six or more criteria met', approach: 'Confirm the criteria count', why: 'The severe specifier requires six or more of the alcohol-use-disorder criteria', keys: ['daily heavy drinking', 'tolerance and withdrawal'], mistake: 'Assigning severity without counting the criteria met' }),
      O('b', 'That he can pinpoint the single event he is convinced first caused all of his problems with alcohol', -1,
        { r: 'A precipitant is not the criterion', approach: 'Trigger framing', why: 'Etiology is not part of the criteria', keys: ['criteria-based diagnosis'], mistake: 'Using a trigger as the diagnostic test' }),
      O('c', 'That his drinking has increased a little over the past few days compared with the week just before that', -1,
        { r: 'Recent change is not the criterion', approach: 'Recent-change framing', why: 'The criteria pattern, not a recent uptick, is what matters', keys: ['established pattern'], mistake: 'Confusing a brief change with the criteria' }),
      O('d', 'That he currently meets the full symptom count required for a discrete manic episode at this point in time', 0,
        { r: 'Manic count does not define it', approach: 'Mania-criteria framing', why: 'Alcohol use disorder is defined by the use pattern, not manic criteria', keys: ['use-focused diagnosis'], mistake: 'Applying manic criteria here' }),
    ]),
    Q('q2', 'core', 'Which feature best differentiates his presentation from a moderate alcohol use disorder?', ['R1'], [
      O('a', 'He meets six or more criteria, placing him at the severe rather than the moderate level of the disorder', 3,
        { r: 'Six or more criteria = severe', approach: 'Contrast on the criteria count', why: 'Severity is set by the number of criteria; six or more places him at the severe level', keys: ['many criteria met', 'withdrawal present'], mistake: 'Underrating a severe presentation as moderate' }),
      O('b', 'The fact that his drinking is causing him real problems in his relationships and his work life', -1,
        { r: 'Use despite harm occurs in both', approach: 'Harm framing', why: 'Use despite harm occurs at both levels; the criteria count differs', keys: ['shared feature'], mistake: 'Using harm to differentiate severity' }),
      O('c', 'The cravings he experiences and the difficulty he has cutting down when he decides he wants to try', -1,
        { r: 'Cravings occur at both levels', approach: 'Craving framing', why: 'Cravings occur at both levels; the criteria count differs', keys: ['shared craving'], mistake: 'Reading cravings as decisive about severity' }),
      O('d', 'The way his drinking tends to be a little heavier during the busiest and most stressful weeks at work', 0,
        { r: 'Stress reactivity is nonspecific', approach: 'Stress framing', why: 'Heavier use under stress does not set severity', keys: ['nonspecific reactivity'], mistake: 'Using stress sensitivity to differentiate' }),
    ]),
    Q('q3', 'core', 'How does his presentation differ from a primary depressive disorder?', ['R1'], [
      O('a', 'His low mood appears secondary to the drinking, and the presentation centers on the alcohol-use criteria', 3,
        { r: 'Alcohol-centered, mood secondary', approach: 'Contrast the primary problem', why: 'A primary depressive disorder centers on a mood episode; his presentation centers on alcohol use with secondary low mood', keys: ['low mood appears secondary', 'use-disorder criteria met'], mistake: 'Treating substance-related low mood as a primary depressive disorder' }),
      O('b', 'The fact that he has been feeling low and hopeless about his situation and his losses recently', -1,
        { r: 'Low mood is nonspecific', approach: 'Mood framing', why: 'Low mood can occur in both; the primary problem differs', keys: ['shared feature'], mistake: 'Using low mood to differentiate' }),
      O('c', 'The shame and the discouragement that he feels about the impact of his drinking on his life', -1,
        { r: 'Shame is nonspecific', approach: 'Shame framing', why: 'Shame can occur in both; the primary problem differs', keys: ['shared affect'], mistake: 'Reading shame as decisive' }),
      O('d', 'The way his mood tends to dip a little more in the mornings than it does later during the day', 0,
        { r: 'Diurnal pattern is not diagnostic', approach: 'Time-of-day framing', why: 'Diurnal variation does not separate the two', keys: ['nonspecific timing'], mistake: 'Over-reading a circadian pattern' }),
    ]),
    Q('q4', 'core', 'What is the most important safety consideration to assess in his case?', ['R2'], [
      O('a', 'His withdrawal risk, since abrupt alcohol cessation can be dangerous and may require medically supervised withdrawal', 3,
        { r: 'Assess dangerous withdrawal risk', approach: 'Prioritize the medical withdrawal risk', why: 'Alcohol withdrawal can be medically dangerous, so withdrawal risk and the need for supervised detox are assessed', keys: ['shakes and sweats when cutting down', 'prior withdrawal with tremor', 'fears seizures'], mistake: 'Overlooking the potentially dangerous withdrawal and advising him to just stop' }),
      O('b', 'A previously undetected primary psychotic disorder that might better account for his heavy drinking', -1,
        { r: 'Psychosis is not indicated', approach: 'Psychosis framing', why: 'Nothing suggests a psychotic process', keys: ['intact reality testing'], mistake: 'Pursuing an unsupported rule-out' }),
      O('c', 'A long-standing eating disorder that could be the single underlying cause of all of his drinking', -1,
        { r: 'Eating pathology is not indicated', approach: 'Eating-disorder framing', why: 'No eating concerns are reported', keys: ['no eating data'], mistake: 'Inventing an unsupported rule-out' }),
      O('d', 'An emerging neurocognitive decline that could account for why he keeps drinking despite his losses', 0,
        { r: 'Cognitive decline is improbable here', approach: 'Neurocognitive framing', why: 'Continued use despite harm fits the use disorder, not decline', keys: ['use-focused'], mistake: 'Pursuing an improbable rule-out' }),
    ]),
    Q('q5', 'intake', 'Given his remark that he would be better off dead, what is the most important step?', ['R3'], [
      O('a', 'Conduct a structured suicide-risk assessment of current ideation, intent, plan, and protective factors now', 3,
        { r: 'Structured suicide-risk assessment now', approach: 'Screen risk directly', why: 'Severe alcohol use disorder carries elevated suicide risk, so current risk is assessed directly', keys: ['better off dead', 'shame and hopelessness'], mistake: 'Failing to assess current suicide risk' }),
      O('b', 'Assume the risk has passed because he denies a current plan and frames the thought as only occasional', -2,
        { r: 'Assuming risk passed is unsafe', approach: 'Dismissal framing', why: 'Passive ideation still requires structured current assessment', keys: ['ongoing risk factors'], mistake: 'Dismissing risk on reassurance' }),
      O('c', 'Defer any risk assessment until his drinking is resolved and he has been stable for several months at least', -2,
        { r: 'Deferring assessment is unsafe', approach: 'Delay framing', why: 'Risk is assessed now, not after the drinking resolves', keys: ['present risk'], mistake: 'Postponing an urgent assessment' }),
      O('d', 'Focus only on a plan to reduce his drinking for now and return to any safety questions at a later date', -1,
        { r: 'Sequencing safety behind the drinking plan is unsafe', approach: 'Single-issue framing', why: 'The drinking plan does not displace assessing current safety', keys: ['safety first'], mistake: 'Sequencing safety behind other needs' }),
    ]),
    Q('q6', 'treatment', 'What is the most appropriate first-line step given the withdrawal risk?', ['R2'], [
      O('a', 'Coordinate a medically supervised withdrawal and the appropriate level of care before or alongside counseling', 3,
        { r: 'Medically supervised withdrawal first', approach: 'Apply level-of-care criteria', why: 'Potentially dangerous alcohol withdrawal requires medically supervised detox and the appropriate level of care', keys: ['prior withdrawal tremor', 'fears seizures'], mistake: 'Advising him to stop drinking on his own without medical supervision' }),
      O('b', 'Advise him to stop drinking abruptly on his own this week so that he can be sober as soon as possible', -2,
        { r: 'Abrupt cessation can be dangerous', approach: 'Cold-turkey framing', why: 'Abrupt alcohol cessation in dependence can cause dangerous withdrawal including seizures', keys: ['medical supervision'], mistake: 'Recommending unsupervised abrupt cessation' }),
      O('c', 'Design and manage a detox medication schedule yourself and adjust the doses over the coming days', -2,
        { r: 'Managing detox is outside scope', approach: 'Prescribe-by-proxy framing', why: 'Counselors do not design or manage detox medication; that is the medical team’s role', keys: ['no prescriptive authority'], mistake: 'Acting outside scope of practice' }),
      O('d', 'Reassure him that alcohol withdrawal is never dangerous and that he can simply taper himself whenever he likes', -2,
        { r: 'Minimizing the risk is unsafe', approach: 'Minimize framing', why: 'Alcohol withdrawal can be dangerous and warrants medical supervision', keys: ['withdrawal risk'], mistake: 'Downplaying a genuine medical risk' }),
    ]),
    Q('q7', 'treatment', 'What is the most appropriate counseling role alongside the medical withdrawal?', ['R5'], [
      O('a', 'Provide motivational and relapse-prevention counseling and coordinate with the medical team within scope', 3,
        { r: 'Counseling and coordination within scope', approach: 'Define the counselor role', why: 'The counselor provides motivational and relapse-prevention work and coordinates with the medical team', keys: ['wants to stop safely', 'medical withdrawal needed'], mistake: 'Either managing the medical detox or providing no structured counseling role' }),
      O('b', 'Step back entirely and provide no counseling at all until the medical withdrawal is completely finished', -1,
        { r: 'No counseling role understates the work', approach: 'Hands-off framing', why: 'Counseling and coordination proceed alongside, not only after, the medical withdrawal', keys: ['concurrent counseling'], mistake: 'Withholding the counseling role unnecessarily' }),
      O('c', 'Take over the medical management of his withdrawal so that all of the care stays within the counseling relationship', -2,
        { r: 'Taking over medical care exceeds scope', approach: 'Overreach framing', why: 'Managing withdrawal is the medical team’s role, not the counselor’s', keys: ['scope limits'], mistake: 'Assuming a medical role outside scope' }),
      O('d', 'Tell him that counseling is all he needs and that the medical involvement can simply be skipped entirely', -2,
        { r: 'Skipping medical care is unsafe', approach: 'Counseling-only framing', why: 'The dangerous withdrawal requires medical involvement, not counseling alone', keys: ['medical supervision'], mistake: 'Omitting necessary medical care' }),
    ]),
    Q('q8', 'treatment', 'What should the longer-term relapse-prevention plan include?', ['R5'], [
      O('a', 'Relapse-prevention skills, coping for triggers, and mutual-help or ongoing treatment resources for recovery', 3,
        { r: 'Relapse prevention plus support resources', approach: 'Plan for triggers and support', why: 'Durable recovery includes relapse-prevention skills, trigger coping, and mutual-help or ongoing treatment resources', keys: ['several failed quit attempts', 'high-risk situation'], mistake: 'Relying on detox alone without relapse-prevention and support' }),
      O('b', 'Advising him to keep some alcohol at home so that he can taper himself whenever he feels he needs to', -2,
        { r: 'Keeping alcohol undermines recovery', approach: 'Permission framing', why: 'Encouraging continued access undermines recovery and safe withdrawal', keys: ['recovery support'], mistake: 'Endorsing continued access to the substance' }),
      O('c', 'Treating any single slip as a complete and total failure that means the entire recovery effort has been wasted', -1,
        { r: 'All-or-nothing framing backfires', approach: 'All-or-nothing framing', why: 'Treating a lapse as total failure undermines relapse-prevention', keys: ['lapse versus relapse'], mistake: 'Setting up an all-or-nothing trap' }),
      O('d', 'Focusing only on the physical withdrawal and leaving relapse-prevention out of the plan entirely', -1,
        { r: 'Omitting relapse prevention narrows the plan', approach: 'Single-factor framing', why: 'Relapse prevention is central to durable recovery, not just detox', keys: ['relapse prevention'], mistake: 'Omitting a key component' }),
    ]),
    Q('q9', 'treatment', 'How should the counselor coordinate with the medical team?', ['R4'], [
      O('a', 'With his consent and a release, coordinate the withdrawal and care plan and share what is needed for safe treatment', 3,
        { r: 'Coordinate with consent for safe care', approach: 'Coordinate within consent and scope', why: 'Safe withdrawal depends on consented coordination with the medical team', keys: ['physician involved', 'dangerous withdrawal'], mistake: 'Working in isolation, or sharing without consent' }),
      O('b', 'Share his full history with everyone involved right away, since coordinating his care is plainly in his interest anyway', -2,
        { r: 'Coordinating without consent breaches confidentiality', approach: 'Assume-consent framing', why: 'A valid release is required before disclosure', keys: ['no release'], mistake: 'Disclosing before consent is documented' }),
      O('c', 'Adjust his detox medication yourself based on how he reports feeling rather than involving the medical team', -2,
        { r: 'Adjusting detox meds exceeds scope', approach: 'Self-adjust framing', why: 'Counselors do not adjust detox medication; the medical team does', keys: ['no prescriptive authority'], mistake: 'Acting outside scope of practice' }),
      O('d', 'Avoid contacting the medical team at all so that his counseling stays entirely separate from his medical care', -1,
        { r: 'No coordination undercuts safe care', approach: 'Siloed framing', why: 'Consented coordination supports safe withdrawal here', keys: ['integrated care'], mistake: 'Refusing helpful, consented coordination' }),
    ]),
    Q('q10', 'counseling', 'Raymond says he feels hopeless and doubts he can ever get sober. The most therapeutic response is to:', ['R5'], [
      O('a', 'Respond with empathy, reduce shame, and build self-efficacy while reinforcing the safe path to recovery', 3,
        { r: 'Empathize, de-shame, build self-efficacy', approach: 'Reduce shame and build confidence', why: 'Empathic, de-shaming work that builds confidence in the safe path supports his motivation to change', keys: ['hopeless', 'doubts he can get sober'], mistake: 'Either shaming him or confirming that he cannot change' }),
      O('b', 'Agree that he has probably been drinking too long to stop now and that sobriety is likely beyond his reach', -2,
        { r: 'Confirming hopelessness is harmful', approach: 'Hopelessness framing', why: 'Reinforcing that he cannot change undermines motivation and self-efficacy', keys: ['build confidence'], mistake: 'Validating a hopeless self-belief' }),
      O('c', 'List in detail all the terrible things that will happen to him if he fails to quit drinking right away', -1,
        { r: 'Fear-based lecturing raises resistance', approach: 'Scare-tactic framing', why: 'Heavy fear appeals tend to entrench resistance and shame', keys: ['evoke, do not impose'], mistake: 'Using fear rather than building motivation' }),
      O('d', 'Avoid his hopelessness entirely so that the sessions never touch on his shame or his past attempts at all', -1,
        { r: 'Avoiding the hopelessness misses the work', approach: 'Avoidant framing', why: 'His hopelessness and shame are central to address, not avoid', keys: ['engage the hopelessness'], mistake: 'Sidestepping a key barrier' }),
    ]),
    Q('q11', 'counseling', 'How can the counselor best strengthen Raymond’s motivation and engagement?', ['R5'], [
      O('a', 'Evoke his own reasons and values for change and reinforce his confidence in the safe, supported next steps', 3,
        { r: 'Evoke change talk and build confidence', approach: 'Build intrinsic motivation', why: 'Eliciting his own reasons and reinforcing confidence in the supported plan builds durable motivation', keys: ['wants to stop safely', 'marriage and job at risk'], mistake: 'Lecturing him on why he must stop instead of evoking his own motivation' }),
      O('b', 'Tell him his reasons do not matter and that he should just follow the plan exactly without questioning it', -2,
        { r: 'Dismissing his reasons undercuts motivation', approach: 'Authoritarian framing', why: 'Ignoring his values and autonomy erodes intrinsic motivation', keys: ['autonomy support'], mistake: 'Overriding the client’s autonomy' }),
      O('c', 'Focus the sessions mainly on detailing every harm of alcohol in exhaustive detail every single week', -1,
        { r: 'Lecturing on harms raises resistance', approach: 'Lecture framing', why: 'Repeated harm lectures tend to entrench resistance', keys: ['evoke, do not impose'], mistake: 'Imposing information rather than evoking motivation' }),
      O('d', 'Tell him counseling cannot help him unless he first completes the entire medical withdrawal on his own', -1,
        { r: 'Conditioning care is inappropriate', approach: 'Conditioning framing', why: 'Counseling proceeds alongside the coordinated medical withdrawal', keys: ['concurrent care'], mistake: 'Making counseling contingent on completing withdrawal first' }),
    ]),
    Q('q12', 'ethics', 'Raymond arrives at a session clearly intoxicated and intends to drive home. The most appropriate action is to:', ['R4'], [
      O('a', 'Address the immediate safety risk, discourage driving, and arrange a safe alternative for getting home', 3,
        { r: 'Address the safety risk and arrange a safe alternative', approach: 'Act on the imminent safety risk', why: 'An intoxicated client intending to drive is an imminent safety risk that the counselor addresses and mitigates', keys: ['intoxicated in session', 'intends to drive'], mistake: 'Letting an intoxicated client drive away without addressing the danger' }),
      O('b', 'Say nothing and let him drive home, since what he does after the session is entirely his own responsibility', -2,
        { r: 'Ignoring imminent danger is inappropriate', approach: 'Hands-off framing', why: 'An imminent risk of harm to him and others is addressed, not ignored', keys: ['imminent safety'], mistake: 'Disregarding an imminent safety risk' }),
      O('c', 'Physically take his keys and detain him against his will until he agrees to stay for several hours', -1,
        { r: 'Physically detaining him is inappropriate', approach: 'Detain framing', why: 'The counselor mitigates the risk through appropriate means, not by physically detaining him', keys: ['appropriate means'], mistake: 'Using inappropriate physical measures' }),
      O('d', 'Continue the session as normal and simply hope that he sobers up enough before he leaves the office', -1,
        { r: 'Hoping it resolves ignores the risk', approach: 'Passivity framing', why: 'The safety risk is actively addressed, not left to chance', keys: ['active mitigation'], mistake: 'Passively ignoring the risk' }),
    ]),
    Q('q13', 'ethics', 'The counselor has limited training in substance withdrawal management. The most ethical course of action is to:', ['R4'], [
      O('a', 'Seek consultation and coordinate medically supervised care, referring for components beyond your competence', 3,
        { r: 'Consult, coordinate, or refer within competence', approach: 'Practice within competence', why: 'ACA C.2. requires competence; dangerous withdrawal is managed with medical coordination and appropriate referral', keys: ['limited withdrawal training', 'dangerous withdrawal'], mistake: 'Managing a dangerous withdrawal alone without competence' }),
      O('b', 'Continue managing the entire case alone to preserve the continuity of the relationship built with him', -2,
        { r: 'Going it alone exceeds competence', approach: 'Continuity-over-competence', why: 'Continuity does not justify exceeding competence', keys: ['competence exceeded'], mistake: 'Prioritizing continuity over competence' }),
      O('c', 'Tell him his drinking is not serious enough to need medical care and continue with supportive talks only', -2,
        { r: 'Minimizing the risk fails the client', approach: 'Downplay framing', why: 'A dangerous alcohol withdrawal warrants medically supervised, specialized care', keys: ['withdrawal risk'], mistake: 'Underestimating the need for medical care' }),
      O('d', 'Transfer him at once to another provider with no explanation, consultation, or coordinated plan for the transition', -1,
        { r: 'Abrupt transfer mishandles continuity', approach: 'Uncoordinated handoff', why: 'A coordinated referral, not an abrupt transfer, is appropriate', keys: ['no transition plan'], mistake: 'Dropping the client without coordination' }),
    ]),
  ],
};

// ============================================================================
// D191 — Schizoid Personality Disorder (F60.1) — Personality — hard
// ============================================================================
const D191 = {
  id: 'ncmhce-D191',
  title: 'Lifelong detachment and little desire for close relationships',
  category: 'Personality',
  difficulty: 'hard',
  primaryDiagnosis: { name: 'Schizoid Personality Disorder', code: 'F60.1' },
  diagnosis: { name: 'Schizoid Personality Disorder', code: 'F60.1' },
  differentialOptions: [
    { id: 'do1', name: 'Schizoid Personality Disorder', isCorrect: true },
    { id: 'do2', name: 'Avoidant Personality Disorder', isCorrect: false },
    { id: 'do3', name: 'Schizotypal Personality Disorder', isCorrect: false },
    { id: 'do4', name: 'Autism Spectrum Disorder', isCorrect: false },
  ],
  narrative: {
    intake:
      'Nathan Cole, a 38-year-old night security guard, is referred by his primary-care provider. He describes a lifelong pattern of detachment ' +
      'from social relationships and a restricted range of emotional expression, and he neither desires nor enjoys close relationships, including family.',
    session1:
      'His detachment reflects little desire for closeness rather than a fear of rejection, distinguishing it from an avoidant pattern. He lacks ' +
      'the odd beliefs and perceptual experiences of a schizotypal pattern, and he has intact social-communication capacity without autistic-type deficits.',
    session2:
      'He chooses solitary activities, takes pleasure in few things, and appears indifferent to praise or criticism. He came only because his ' +
      'provider urged it; he denies distress about his solitude itself but at a low point felt life was flat and pointless, without plan or intent.',
  },
  diagnosticRationale:
    'A pervasive pattern of detachment from social relationships and a restricted range of emotional expression, beginning by early adulthood—' +
    'little desire for close relationships, choosing solitary activities, taking pleasure in few activities, and emotional coldness—meets DSM-5-TR ' +
    'criteria for schizoid personality disorder, distinct from avoidant PD, schizotypal PD, and autism spectrum disorder.',
  references: [
    { id: 'R1', source: 'DSM-5-TR', detail: 'Schizoid PD: pervasive detachment and restricted emotional expression; little desire for closeness, by early adulthood' },
    { id: 'R2', source: 'Corey (Theory & Practice)', detail: 'Approach selection, the working alliance, and respecting autonomy in personality-focused work' },
    { id: 'R3', source: 'C-SSRS', detail: 'Structured suicide-risk screening when anhedonia and hopelessness co-occur' },
    { id: 'R4', source: 'ACA Code of Ethics', detail: 'A.1. and C.2.: client welfare, autonomy and self-determination, and competence' },
    { id: 'R5', source: 'NBCC Content Outline', detail: 'Clinical decision-making and measurement-based care across the counseling process' },
  ],
  questions: [
    Q('q1', 'intake', 'What is most important to establish to support a schizoid personality disorder diagnosis?', ['R1'], [
      O('a', 'A pervasive, early-adulthood pattern of detachment and restricted emotional expression with little desire for closeness', 3,
        { r: 'Pervasive detachment with little desire for closeness', approach: 'Confirm the trait pattern', why: 'Schizoid PD requires a pervasive, enduring pattern of detachment and restricted emotion with little desire for closeness', keys: ['lifelong detachment', 'neither desires nor enjoys closeness'], mistake: 'Diagnosing from a single period of withdrawal rather than a pervasive pattern' }),
      O('b', 'That he can pinpoint the single past event he is convinced first made him withdraw from other people', -1,
        { r: 'A precipitant is not the criterion', approach: 'Trigger framing', why: 'Etiology is not part of the criteria', keys: ['pattern-based diagnosis'], mistake: 'Using a trigger as the diagnostic test' }),
      O('c', 'That his detachment has grown a little more noticeable over the past few days than it was the week before', -1,
        { r: 'Recent change is not the criterion', approach: 'Recent-change framing', why: 'A pervasive, enduring pattern is required', keys: ['enduring pattern'], mistake: 'Confusing a brief change with the criteria' }),
      O('d', 'That he currently meets the full symptom count required for a discrete major depressive episode at this time', 0,
        { r: 'Depressive count does not define it', approach: 'Mood-criteria framing', why: 'Schizoid PD is a personality pattern, not a mood episode', keys: ['personality pattern'], mistake: 'Applying depressive criteria here' }),
    ]),
    Q('q2', 'core', 'Which feature best differentiates his presentation from avoidant personality disorder?', ['R1'], [
      O('a', 'He has little desire for closeness, rather than wanting relationships but avoiding them out of fear of rejection', 3,
        { r: 'Little desire versus fearful avoidance', approach: 'Contrast the underlying motive', why: 'Avoidant PD involves wanting closeness but fearing rejection; schizoid PD involves little desire for closeness', keys: ['neither desires nor enjoys closeness', 'not driven by fear of rejection'], mistake: 'Confusing detached indifference with fearful avoidance' }),
      O('b', 'The fact that he keeps to himself and has only limited social contact with the people around him', -1,
        { r: 'Social withdrawal occurs in both', approach: 'Withdrawal framing', why: 'Social withdrawal occurs in both; the underlying motive differs', keys: ['shared feature'], mistake: 'Using withdrawal to differentiate' }),
      O('c', 'The distance he keeps from others and the small number of close relationships that he has', -1,
        { r: 'Social distance is nonspecific', approach: 'Distance framing', why: 'Social distance occurs in both; the motive differs', keys: ['shared distance'], mistake: 'Reading distance as decisive' }),
      O('d', 'The way his solitude tends to feel a little heavier during the busiest and most demanding weeks at his job', 0,
        { r: 'Stress reactivity is nonspecific', approach: 'Stress framing', why: 'Worsening under stress does not differentiate them', keys: ['nonspecific reactivity'], mistake: 'Using stress sensitivity to differentiate' }),
    ]),
    Q('q3', 'core', 'How does his presentation differ from schizotypal personality disorder?', ['R1'], [
      O('a', 'He lacks the odd beliefs, magical thinking, and perceptual distortions that characterize schizotypal PD', 3,
        { r: 'No cognitive-perceptual distortions', approach: 'Contrast on cognitive-perceptual features', why: 'Schizotypal PD includes odd beliefs and perceptual distortions; his pattern is detachment without those features', keys: ['no odd beliefs', 'no perceptual distortions'], mistake: 'Overlooking the absence of the cognitive-perceptual features of schizotypal PD' }),
      O('b', 'The fact that he is socially detached and keeps his distance from most of the people around him', -1,
        { r: 'Social detachment occurs in both', approach: 'Detachment framing', why: 'Social detachment occurs in both; the cognitive-perceptual features differ', keys: ['shared feature'], mistake: 'Using detachment to differentiate' }),
      O('c', 'The restricted emotional expression and the flat way that he often comes across to others', -1,
        { r: 'Restricted affect can occur in both', approach: 'Affect framing', why: 'Restricted affect can occur in both; the perceptual features differ', keys: ['shared affect'], mistake: 'Reading restricted affect as decisive' }),
      O('d', 'The way his mood tends to feel a little flatter in the evenings than it does earlier during the daytime hours', 0,
        { r: 'Diurnal pattern is not diagnostic', approach: 'Time-of-day framing', why: 'Timing does not separate the two', keys: ['nonspecific timing'], mistake: 'Over-reading a circadian pattern' }),
    ]),
    Q('q4', 'core', 'How does his presentation differ from autism spectrum disorder?', ['R1'], [
      O('a', 'He has intact social-communication capacity and a lifelong preference for solitude, not autistic social-communication deficits', 3,
        { r: 'Intact social-communication, prefers solitude', approach: 'Contrast the social-communication profile', why: 'Autism involves core social-communication deficits; his is a preference for solitude with intact capacity', keys: ['intact social-communication capacity', 'prefers solitude'], mistake: 'Reading a preference for solitude as autistic social-communication deficits' }),
      O('b', 'The fact that he spends a great deal of his time alone and tends to have only very limited day-to-day engagement with most of the various people who happen to be around him', -1,
        { r: 'Limited engagement occurs in both', approach: 'Engagement framing', why: 'Limited social engagement can occur in both; the social-communication profile differs', keys: ['shared feature'], mistake: 'Using limited engagement to differentiate' }),
      O('c', 'The narrow range of activities and interests that he tends to pursue in his day-to-day life', -1,
        { r: 'Narrow interests are nonspecific', approach: 'Interest framing', why: 'A narrow range of interests can occur in both; the social-communication profile differs', keys: ['shared narrowness'], mistake: 'Reading narrow interests as decisive' }),
      O('d', 'The way he seems a little more withdrawn on the days when his routine has been changed or disrupted', 0,
        { r: 'Routine effects are nonspecific', approach: 'Routine framing', why: 'A disrupted routine does not differentiate the two', keys: ['nonspecific factor'], mistake: 'Over-reading a routine effect' }),
    ]),
    Q('q5', 'intake', 'Given his remark that life felt flat and pointless, what is the most important step?', ['R3'], [
      O('a', 'Conduct a structured suicide-risk assessment and screen for a co-occurring depressive disorder', 3,
        { r: 'Risk assessment and depression screen', approach: 'Assess risk and comorbidity', why: 'Anhedonia and a statement of pointlessness warrant risk assessment and screening for a co-occurring depression', keys: ['life felt flat and pointless', 'takes pleasure in few things'], mistake: 'Attributing flat mood to the personality style without screening risk and depression' }),
      O('b', 'Assume the flat feeling is just his personality and therefore does not need any assessment at all', -2,
        { r: 'Dismissing the remark is unsafe', approach: 'Dismissal framing', why: 'A statement of pointlessness is assessed, not attributed away to the personality style', keys: ['assess regardless'], mistake: 'Dismissing risk based on the personality style' }),
      O('c', 'Defer any risk or mood screening until his social functioning improves and he has been stable for months', -2,
        { r: 'Deferring assessment is unsafe', approach: 'Delay framing', why: 'Risk and mood are screened now, not after functioning improves', keys: ['present risk'], mistake: 'Postponing a needed assessment' }),
      O('d', 'Focus only on encouraging him to socialize more for now and return to any safety questions at a later date', -1,
        { r: 'Sequencing safety behind socializing is unsafe', approach: 'Single-issue framing', why: 'Socializing does not displace assessing current safety and mood', keys: ['safety first'], mistake: 'Sequencing safety behind other needs' }),
    ]),
    Q('q6', 'treatment', 'What is the most appropriate treatment framework for Nathan?', ['R2'], [
      O('a', 'Supportive psychotherapy that respects his autonomy and works on his own goals at a comfortable pace', 3,
        { r: 'Supportive, autonomy-respecting psychotherapy', approach: 'Apply a person-centered approach', why: 'Schizoid PD is approached with supportive therapy that respects his autonomy and works on goals he chooses', keys: ['came at his provider’s urging', 'denies distress about solitude'], mistake: 'Pressuring him to become social against his own values and goals' }),
      O('b', 'Insisting that he build an active social life and make many new friends as the central goal of treatment', -2,
        { r: 'Imposing social goals disrespects autonomy', approach: 'Impose-goals framing', why: 'Forcing social goals he does not share disrespects his autonomy and is counter-therapeutic', keys: ['his own goals'], mistake: 'Imposing goals the client does not hold' }),
      O('c', 'Telling him personality cannot change and that there is no point in his attending counseling at all', -2,
        { r: 'Therapeutic nihilism abandons the client', approach: 'Nihilism framing', why: 'Supportive work on his own goals can help; dismissing it abandons the client', keys: ['meaningful support'], mistake: 'Foreclosing the value of counseling' }),
      O('d', 'Starting him on a medication that you will select and adjust to make him more sociable over the coming weeks', -2,
        { r: 'Prescribing is outside counselor scope', approach: 'Prescribe medication', why: 'Counselors do not select or adjust medication', keys: ['no prescriptive authority'], mistake: 'Acting outside scope of practice' }),
    ]),
    Q('q7', 'treatment', 'How should the counselor set goals given he denies distress about his solitude?', ['R2'], [
      O('a', 'Collaborate on goals he actually values, such as any concerns he does have, respecting his self-determination', 3,
        { r: 'Collaborate on his own valued goals', approach: 'Honor self-determination', why: 'Working on goals he values, and respecting his self-determination about solitude, fits person-centered practice', keys: ['denies distress about solitude', 'came reluctantly'], mistake: 'Deciding that he must want to change his solitary lifestyle' }),
      O('b', 'Set a goal of eliminating his solitary lifestyle entirely regardless of whether he wants that or not', -1,
        { r: 'Imposing a lifestyle change disrespects autonomy', approach: 'Impose-change framing', why: 'Requiring him to give up his solitary lifestyle overrides his self-determination', keys: ['self-determination'], mistake: 'Imposing a change he does not want' }),
      O('c', 'Tell him he has no real goals worth working on and that counseling is therefore pointless for him', -2,
        { r: 'Dismissing his goals is inappropriate', approach: 'Dismiss framing', why: 'There are goals he may value; dismissing them abandons the work', keys: ['find his goals'], mistake: 'Foreclosing the work' }),
      O('d', 'Avoid setting any goals at all so that the sessions simply drift without any direction or focus', -1,
        { r: 'No goals leaves the work adrift', approach: 'No-direction framing', why: 'Collaborative goals give the work direction while respecting his autonomy', keys: ['collaborative goals'], mistake: 'Leaving the work without direction' }),
    ]),
    Q('q8', 'treatment', 'How should progress be tracked in this personality-focused work?', ['R5'], [
      O('a', 'Track his own chosen goals, mood, and engagement over time to guide a respectful, longer-term course', 3,
        { r: 'Measurement-based tracking of his goals and mood', approach: 'Measure his own goals over time', why: 'Tracking his chosen goals, mood, and engagement steers a respectful, longer-term course', keys: ['his own goals', 'flat mood at times'], mistake: 'Measuring social activity he does not value as the outcome' }),
      O('b', 'Rely only on whether he happens to remark in session that he feels a little different than before', -1,
        { r: 'Anecdote alone is insufficient', approach: 'Anecdotal framing', why: 'Systematic tracking is more reliable than passing impressions', keys: ['structured measurement'], mistake: 'Substituting anecdote for measurement' }),
      O('c', 'Track only how many social activities he attends and base every decision solely on that single number', -1,
        { r: 'Social-activity count is the wrong metric', approach: 'Wrong-metric framing', why: 'His own goals and mood, not a social-activity count he does not value, are the outcomes', keys: ['his goals'], mistake: 'Measuring the wrong variable' }),
      O('d', 'Wait until the very last session to decide whether anything has changed at all since the first appointment', -1,
        { r: 'End-only review misses steering data', approach: 'Delayed-review framing', why: 'Ongoing tracking is needed to steer a longer course', keys: ['continuous monitoring'], mistake: 'Deferring all measurement to the end' }),
    ]),
    Q('q9', 'treatment', 'How should the counselor handle any medication question he raises?', ['R4'], [
      O('a', 'Coordinate a referral to a prescriber for evaluation if indicated while continuing supportive work within scope', 3,
        { r: 'Refer for prescribing if indicated, keep doing therapy', approach: 'Coordinate within scope', why: 'Medication questions are referred to a prescriber while the counselor continues supportive therapy', keys: ['asks about medication', 'scope limits'], mistake: 'Advising on specific medication outside scope' }),
      O('b', 'Recommend a specific medication and dose for him to begin taking before his next primary-care visit', -2,
        { r: 'Recommending a drug and dose exceeds scope', approach: 'Prescribe-by-proxy framing', why: 'Counselors do not recommend specific drugs or doses', keys: ['no prescriptive authority'], mistake: 'Making a prescribing recommendation' }),
      O('c', 'Tell him that medication never helps with personality patterns and that he should refuse it if it is offered', -1,
        { r: 'Blanket refusal advice overreaches', approach: 'Anti-medication framing', why: 'The prescriber and client weigh medication; the counselor does not forbid it', keys: ['shared decision'], mistake: 'Directing a medical decision' }),
      O('d', 'Ignore the medication question and simply redirect him back to the supportive work every time he raises it', -1,
        { r: 'Dismissing the question is unhelpful', approach: 'Avoidant framing', why: 'A referral, not avoidance, is the appropriate response', keys: ['coordinated care'], mistake: 'Failing to address a legitimate question' }),
    ]),
    Q('q10', 'counseling', 'Nathan says he does not really see the point of talking and is only here for his doctor. The most therapeutic response is to:', ['R2'], [
      O('a', 'Respect his ambivalence, be transparent about the process, and look for anything he might find useful', 3,
        { r: 'Respect ambivalence; find something useful', approach: 'Engage a reluctant client respectfully', why: 'Respecting his ambivalence and finding something he values engages a reluctant client without pressure', keys: ['only here for his doctor', 'sees little point'], mistake: 'Pressuring him to engage or insisting he must want to change' }),
      O('b', 'Tell him he clearly needs a lot of help and that he must commit fully to intensive therapy right away', -1,
        { r: 'Pressuring a reluctant client backfires', approach: 'Pressure framing', why: 'Insisting on intensive commitment tends to increase a schizoid client’s withdrawal', keys: ['respect autonomy'], mistake: 'Pressuring rather than engaging' }),
      O('c', 'Agree that counseling is pointless for him and simply end the sessions since he does not want to be here', -1,
        { r: 'Giving up forecloses engagement', approach: 'Give-up framing', why: 'There may be goals he values; abandoning engagement is not indicated', keys: ['find his goals'], mistake: 'Disengaging rather than exploring' }),
      O('d', 'Insist that he change his solitary lifestyle before any of the counseling work can begin with him', -1,
        { r: 'Demanding lifestyle change stalls engagement', approach: 'Precondition framing', why: 'Requiring he change his lifestyle first blocks engagement and disrespects autonomy', keys: ['engage first'], mistake: 'Setting an autonomy-violating precondition' }),
    ]),
    Q('q11', 'counseling', 'How can the counselor best engage Nathan while respecting his autonomy?', ['R2'], [
      O('a', 'Move at his pace, avoid pressure, and connect the work to any concerns or goals he does hold', 3,
        { r: 'Paced, pressure-free, goal-linked engagement', approach: 'Engage on his terms', why: 'Moving at his pace without pressure and linking the work to his own concerns respects autonomy and builds engagement', keys: ['reluctant', 'values his solitude'], mistake: 'Pushing closeness or social change he does not want' }),
      O('b', 'Press him to open up emotionally and share deeply in every session to speed the work along quickly', -1,
        { r: 'Pressured disclosure increases withdrawal', approach: 'Push-disclosure framing', why: 'Forcing emotional disclosure tends to increase a schizoid client’s withdrawal', keys: ['paced engagement'], mistake: 'Demanding disclosure too fast' }),
      O('c', 'Focus the sessions mainly on cataloguing all the ways his solitary lifestyle is a problem every week', -1,
        { r: 'Framing his lifestyle as the problem disrespects autonomy', approach: 'Problematize framing', why: 'Treating his chosen lifestyle as the problem overrides his self-determination', keys: ['respect autonomy'], mistake: 'Pathologizing his autonomous choices' }),
      O('d', 'Tell him counseling cannot help him at all unless he first agrees to build several new relationships', -1,
        { r: 'Conditioning care on social goals is inappropriate', approach: 'Conditioning framing', why: 'Supportive work proceeds on his own goals, not conditioned on social change', keys: ['his own goals'], mistake: 'Making care contingent on social goals' }),
    ]),
    Q('q12', 'ethics', 'His primary-care provider asks the counselor to report whether Nathan is "complying" with becoming more social. The most appropriate action is to:', ['R4'], [
      O('a', 'Clarify confidentiality and Nathan’s own goals, and share only what he consents to and what is appropriate', 3,
        { r: 'Consent and client goals govern disclosure', approach: 'Apply consent and respect autonomy', why: 'Disclosure to the provider is governed by Nathan’s consent, and his own goals—not an imposed social agenda—guide the work', keys: ['provider wants a compliance report', 'client’s autonomy'], mistake: 'Reporting on an imposed social agenda or disclosing without consent' }),
      O('b', 'Send the provider a report on how social he is becoming right away, since the provider referred him', -2,
        { r: 'Disclosing without consent breaches confidentiality', approach: 'Assume-consent framing', why: 'A valid release is required before disclosure regardless of who referred him', keys: ['no release'], mistake: 'Disclosing without consent' }),
      O('c', 'Take on the provider’s goal of making him more social and report on his compliance with that goal', -1,
        { r: 'Adopting an imposed goal disrespects autonomy', approach: 'Imposed-goal framing', why: 'The work follows the client’s own goals, not an externally imposed social agenda', keys: ['client-centered goals'], mistake: 'Letting an outside agenda override the client’s' }),
      O('d', 'Refuse to communicate with the provider at all, even to clarify confidentiality and the client’s goals', -1,
        { r: 'Refusing to clarify is unhelpful', approach: 'Stonewall framing', why: 'The counselor can clarify confidentiality and the client’s goals rather than refuse all contact', keys: ['clarify appropriately'], mistake: 'Declining to clarify the appropriate process' }),
    ]),
    Q('q13', 'ethics', 'The counselor has limited training in personality disorders. The most ethical course of action is to:', ['R4'], [
      O('a', 'Seek consultation and training, and refer or coordinate for the components beyond your competence', 3,
        { r: 'Consult, train, or refer within competence', approach: 'Practice within competence', why: 'ACA C.2. requires competence; personality-focused work may need consultation, training, or referral', keys: ['limited personality-disorder training', 'complex case'], mistake: 'Managing a complex personality case alone without competence' }),
      O('b', 'Continue managing the case alone to preserve the continuity of the relationship built with him', -2,
        { r: 'Going it alone exceeds competence', approach: 'Continuity-over-competence', why: 'Continuity does not justify exceeding competence', keys: ['competence exceeded'], mistake: 'Prioritizing continuity over competence' }),
      O('c', 'Tell him his pattern is not serious enough to need any specialized help and continue with general talks only', -2,
        { r: 'Minimizing the problem fails the client', approach: 'Downplay framing', why: 'A complex presentation with anhedonia and risk warrants competent care', keys: ['complex case'], mistake: 'Underestimating the need for specialized care' }),
      O('d', 'Transfer him at once to another provider with no explanation, consultation, or coordinated plan for the transition', -1,
        { r: 'Abrupt transfer mishandles continuity', approach: 'Uncoordinated handoff', why: 'Transitions must be coordinated to avoid abandonment', keys: ['no transition plan'], mistake: 'Dropping the client without coordination' }),
    ]),
  ],
};

// ============================================================================
// D192 — Attention-Deficit/Hyperactivity Disorder, Inattentive (F90.0) — Neurodevelopmental — medium
// ============================================================================
const D192 = {
  id: 'ncmhce-D192',
  title: 'Longstanding inattention without prominent hyperactivity',
  category: 'Neurodevelopmental',
  difficulty: 'medium',
  primaryDiagnosis: { name: 'Attention-Deficit/Hyperactivity Disorder, Inattentive', code: 'F90.0' },
  diagnosis: { name: 'Attention-Deficit/Hyperactivity Disorder, Inattentive', code: 'F90.0' },
  differentialOptions: [
    { id: 'do1', name: 'Attention-Deficit/Hyperactivity Disorder, Inattentive', isCorrect: true },
    { id: 'do2', name: 'Attention-Deficit/Hyperactivity Disorder, Combined', isCorrect: false },
    { id: 'do3', name: 'Generalized Anxiety Disorder', isCorrect: false },
    { id: 'do4', name: 'Specific Learning Disorder', isCorrect: false },
  ],
  narrative: {
    intake:
      'Priya Menon, a 24-year-old graduate student, seeks help for chronic difficulty sustaining attention. She makes careless mistakes, loses ' +
      'things, is easily distracted and forgetful, and struggles to finish tasks, with several symptoms present since childhood and across settings.',
    session1:
      'Her presentation is predominantly inattentive without prominent hyperactivity or impulsivity, distinguishing it from the combined ' +
      'presentation. Her attention problems are pervasive across tasks rather than tied to a specific academic skill or driven mainly by worry.',
    session2:
      'The inattention impairs her studies and daily life, she has developed workarounds, and she feels frustrated and demoralized. She denies ' +
      'that anxiety is the primary driver, is otherwise functioning, and wants strategies and support to manage the attention difficulties.',
  },
  diagnosticRationale:
    'A persistent pattern of inattention with several symptoms present before age twelve and across two or more settings, causing impairment, ' +
    'without prominent hyperactivity-impulsivity, meets DSM-5-TR criteria for ADHD, predominantly inattentive presentation, distinct from the ' +
    'combined presentation, generalized anxiety disorder, and a specific learning disorder.',
  references: [
    { id: 'R1', source: 'DSM-5-TR', detail: 'ADHD inattentive: 5+ inattention symptoms (adult), onset before 12, 2+ settings, impairment; not enough hyperactivity for combined' },
    { id: 'R2', source: 'NICE guidelines', detail: 'ADHD: psychoeducation, behavioral and skills-based intervention, and coordinated care; medication via prescriber' },
    { id: 'R3', source: 'Hays (Assessment)', detail: 'Coordinating standardized assessment and collateral across settings' },
    { id: 'R4', source: 'ACA Code of Ethics', detail: 'A.1. and C.2.: client welfare, coordination of care, and practicing within competence' },
    { id: 'R5', source: 'Corey (Theory & Practice)', detail: 'Working alliance, strengths-based practice, and collaborative goal setting' },
  ],
  questions: [
    Q('q1', 'intake', 'What is most important to confirm to support an ADHD, inattentive presentation, diagnosis?', ['R1'], [
      O('a', 'Persistent inattention with several symptoms present before age twelve and across two or more settings, causing impairment', 3,
        { r: 'Inattention, childhood onset, cross-setting, impairing', approach: 'Confirm the core criteria', why: 'ADHD requires several inattention symptoms with onset before 12 across settings, causing impairment', keys: ['symptoms since childhood', 'across settings'], mistake: 'Diagnosing without confirming the childhood onset and cross-setting impairment' }),
      O('b', 'That she can pinpoint the single event she is convinced first caused her attention difficulties', -1,
        { r: 'A precipitant is not the criterion', approach: 'Trigger framing', why: 'Etiology is not part of the criteria', keys: ['criteria-based diagnosis'], mistake: 'Using a trigger as the diagnostic test' }),
      O('c', 'That her attention has slipped a little further over the past few days than it had the week just before that', -1,
        { r: 'Recent change is not the criterion', approach: 'Recent-change framing', why: 'A persistent pattern since childhood, not a recent dip, is required', keys: ['persistent pattern'], mistake: 'Confusing a brief change with the criteria' }),
      O('d', 'That she currently meets the full symptom count required for a discrete major depressive episode at this time', 0,
        { r: 'Depressive count does not define it', approach: 'Mood-criteria framing', why: 'ADHD is a neurodevelopmental condition, not a mood episode', keys: ['neurodevelopmental diagnosis'], mistake: 'Applying depressive criteria here' }),
    ]),
    Q('q2', 'core', 'Which feature best differentiates her presentation from the combined presentation of ADHD?', ['R1'], [
      O('a', 'Her symptoms are predominantly inattentive without prominent hyperactivity or impulsivity', 3,
        { r: 'Inattentive without prominent hyperactivity', approach: 'Contrast the symptom profile', why: 'The combined presentation requires prominent hyperactivity-impulsivity; hers is predominantly inattentive', keys: ['predominantly inattentive', 'no prominent hyperactivity'], mistake: 'Assigning the combined presentation without the hyperactivity-impulsivity symptoms' }),
      O('b', 'The fact that she has clear difficulty sustaining her attention and completing the tasks that she takes on', -1,
        { r: 'Inattention occurs in both', approach: 'Inattention framing', why: 'Inattention occurs in both presentations; the hyperactivity differs', keys: ['shared feature'], mistake: 'Using inattention to differentiate the presentation' }),
      O('c', 'The forgetfulness and the disorganization that she experiences across her day-to-day activities', -1,
        { r: 'Disorganization is nonspecific', approach: 'Disorganization framing', why: 'Disorganization occurs in both; the hyperactivity differs', keys: ['shared difficulty'], mistake: 'Reading disorganization as decisive' }),
      O('d', 'The way her focus tends to be a little worse during the busiest and most stressful weeks of her semester', 0,
        { r: 'Stress reactivity is nonspecific', approach: 'Stress framing', why: 'Worse focus under stress does not set the presentation', keys: ['nonspecific reactivity'], mistake: 'Using stress sensitivity to differentiate' }),
    ]),
    Q('q3', 'core', 'How does her presentation differ from generalized anxiety disorder?', ['R1'], [
      O('a', 'Her inattention is a pervasive, longstanding pattern, not concentration difficulty driven mainly by chronic worry', 3,
        { r: 'Trait inattention, not worry-driven', approach: 'Contrast the driver', why: 'GAD concentration difficulty is driven by worry; her inattention is a pervasive, longstanding trait pattern', keys: ['inattention since childhood', 'denies anxiety as the driver'], mistake: 'Attributing longstanding inattention to a primary anxiety disorder' }),
      O('b', 'The fact that she finds it hard to concentrate and to keep her mind on the task in front of her', -1,
        { r: 'Concentration difficulty occurs in both', approach: 'Concentration framing', why: 'Concentration difficulty occurs in both; the driver differs', keys: ['shared feature'], mistake: 'Using concentration difficulty to differentiate' }),
      O('c', 'The frustration and the demoralization that she feels about her performance and her struggles', -1,
        { r: 'Frustration is nonspecific', approach: 'Frustration framing', why: 'Frustration can accompany both; the driver differs', keys: ['shared affect'], mistake: 'Reading frustration as decisive' }),
      O('d', 'The way her focus tends to be a little better on the calmer and less demanding days for her', 0,
        { r: 'Situational effects are nonspecific', approach: 'Situation framing', why: 'Better focus on calmer days does not differentiate them', keys: ['nonspecific factor'], mistake: 'Over-reading a situational effect' }),
    ]),
    Q('q4', 'core', 'How does her presentation differ from a specific learning disorder?', ['R1'], [
      O('a', 'Her attention problems are pervasive across tasks, not limited to a single academic skill like reading or math', 3,
        { r: 'Pervasive inattention versus a specific skill', approach: 'Contrast pervasive versus specific', why: 'A specific learning disorder affects a particular academic skill; her inattention is pervasive across tasks', keys: ['distractible across tasks', 'not limited to one skill'], mistake: 'Reading pervasive inattention as an isolated learning disorder' }),
      O('b', 'The fact that she has difficulty keeping up with the demands of her graduate studies this year', -1,
        { r: 'Academic difficulty occurs in both', approach: 'Academic framing', why: 'Academic difficulty occurs in both; the breadth differs', keys: ['shared feature'], mistake: 'Using academic difficulty to differentiate' }),
      O('c', 'The extra effort and the workarounds she uses to manage her studies and daily tasks', -1,
        { r: 'Compensation occurs in both', approach: 'Compensation framing', why: 'Compensation can occur in both; the breadth of the difficulty differs', keys: ['shared strategy'], mistake: 'Reading compensation as decisive' }),
      O('d', 'The way her work tends to be a little better on the days when she has slept well the night before', 0,
        { r: 'Sleep effects are nonspecific', approach: 'Sleep framing', why: 'Better work after good sleep does not differentiate them', keys: ['nonspecific factor'], mistake: 'Over-reading a sleep effect' }),
    ]),
    Q('q5', 'intake', 'What is most useful to coordinate to support the assessment?', ['R3'], [
      O('a', 'Standardized ADHD assessment and collateral documenting childhood onset and cross-setting impairment', 3,
        { r: 'Standardized assessment and collateral', approach: 'Coordinate formal evaluation', why: 'ADHD assessment relies on standardized measures and collateral establishing onset and cross-setting impairment', keys: ['symptoms since childhood', 'across settings'], mistake: 'Concluding the diagnosis without coordinating standardized assessment and collateral' }),
      O('b', 'A detailed family pedigree going back several generations to find relatives who were also distractible', -1,
        { r: 'Extended pedigree is not the priority', approach: 'Pedigree framing', why: 'It does not document the onset and cross-setting impairment', keys: ['criteria-relevant data'], mistake: 'Gathering data that does not inform the diagnosis' }),
      O('c', 'Whether her inattention can be traced to one specific school year that fully explains the entire pattern', -1,
        { r: 'A single year is not the target', approach: 'Origin-hunting framing', why: 'The lifelong pattern, not a single year, is the basis', keys: ['lifelong pattern'], mistake: 'Hunting for an origin instead of the pattern' }),
      O('d', 'Her favorite hobbies and interests so that the sessions can be arranged around the activities she most enjoys', 0,
        { r: 'Interests are secondary', approach: 'Preference framing', why: 'Useful for rapport but not what supports the diagnosis', keys: ['secondary factor'], mistake: 'Prioritizing rapport detail over assessment' }),
    ]),
    Q('q6', 'treatment', 'What is the most appropriate counselor role in supporting Priya?', ['R2'], [
      O('a', 'Provide psychoeducation and skills-based, behavioral strategies for attention and organization, coordinating care', 3,
        { r: 'Psychoeducation and skills-based strategies', approach: 'Define the counselor role', why: 'ADHD is supported with psychoeducation and behavioral, skills-based strategies, coordinating any medication with a prescriber', keys: ['struggles to finish tasks', 'wants strategies'], mistake: 'Offering vague support without concrete skills or coordination' }),
      O('b', 'Telling her to simply try harder and focus more, since the difficulty is entirely a matter of willpower', -2,
        { r: 'Willpower framing is inaccurate and shaming', approach: 'Willpower framing', why: 'Framing ADHD as mere willpower disregards the evidence and deepens demoralization', keys: ['neurodevelopmental difficulty'], mistake: 'Reducing the disorder to willpower' }),
      O('c', 'Focusing only on her past rather than the present strategies and supports she needs to function now', -1,
        { r: 'Past-only focus misses the target', approach: 'Past-focus framing', why: 'Present strategies and supports are the focus, not only the past', keys: ['present strategies'], mistake: 'Missing the current functional needs' }),
      O('d', 'Starting her on a stimulant medication that you will select and adjust over the coming weeks yourself', -2,
        { r: 'Prescribing is outside counselor scope', approach: 'Prescribe medication', why: 'Counselors do not select or adjust medication', keys: ['no prescriptive authority'], mistake: 'Acting outside scope of practice' }),
    ]),
    Q('q7', 'treatment', 'What should the skills-based work emphasize?', ['R2'], [
      O('a', 'Concrete organization, planning, and attention-management strategies she can apply across her tasks', 3,
        { r: 'Concrete organization and attention strategies', approach: 'Teach the core skills', why: 'Concrete organization, planning, and attention-management strategies address the functional impact of inattention', keys: ['loses things', 'struggles to finish tasks'], mistake: 'Discussing the difficulty without building concrete, applicable skills' }),
      O('b', 'Encouraging her to avoid all demanding tasks so that her inattention never causes any problems for her', -1,
        { r: 'Avoidance is not the strategy', approach: 'Avoidance framing', why: 'Skills and supports, not blanket avoidance, address the inattention', keys: ['skill-building'], mistake: 'Substituting avoidance for skills' }),
      O('c', 'Telling her the workarounds she has built are pointless and that she should abandon all of them at once', -1,
        { r: 'Dismissing her strategies is unhelpful', approach: 'Dismiss framing', why: 'Building on her existing workarounds is more helpful than dismissing them', keys: ['build on strengths'], mistake: 'Discarding useful existing strategies' }),
      O('d', 'Focusing only on discussing her feelings without ever building any concrete attention or organization skills', -1,
        { r: 'Insight without skills is insufficient', approach: 'Insight-only framing', why: 'Concrete skills, not discussion alone, drive functional change', keys: ['skills practice'], mistake: 'Talking without building skills' }),
    ]),
    Q('q8', 'treatment', 'How should progress be tracked over the course of treatment?', ['R5'], [
      O('a', 'Track attention-related functioning, task completion, and use of strategies over time to guide the plan', 3,
        { r: 'Measurement-based tracking of functioning and skills', approach: 'Monitor the relevant outcomes', why: 'Tracking attention-related functioning, task completion, and strategy use steers the skills-based plan', keys: ['impaired studies', 'wants strategies'], mistake: 'Proceeding without tracking functioning and skill use' }),
      O('b', 'Rely only on whether she happens to mention in session that she feels a little more focused than before', -1,
        { r: 'Anecdote alone is insufficient', approach: 'Anecdotal framing', why: 'Systematic tracking is more reliable than passing impressions', keys: ['structured measurement'], mistake: 'Substituting anecdote for measurement' }),
      O('c', 'Track only her grades and base every decision about her support solely on that single outcome', -1,
        { r: 'Grades alone are too narrow', approach: 'Single-metric framing', why: 'Functioning, task completion, and strategy use all inform the plan, not grades alone', keys: ['multidimensional monitoring'], mistake: 'Reducing monitoring to one outcome' }),
      O('d', 'Wait until the end of the semester to review whether anything has changed at all since the first session', -1,
        { r: 'End-only review misses steering data', approach: 'Delayed-review framing', why: 'Ongoing tracking is needed to steer the work', keys: ['continuous monitoring'], mistake: 'Deferring all measurement to the end' }),
    ]),
    Q('q9', 'treatment', 'How should the counselor handle her questions about medication?', ['R4'], [
      O('a', 'Coordinate a referral to a prescriber for evaluation while continuing the skills-based work within scope', 3,
        { r: 'Refer for prescribing, keep doing therapy', approach: 'Coordinate within scope', why: 'Medication questions are referred to a prescriber while the counselor continues skills-based work', keys: ['asks about medication', 'scope limits'], mistake: 'Advising on specific medication outside scope' }),
      O('b', 'Recommend a specific stimulant and dose for her to begin taking before her next set of exams', -2,
        { r: 'Recommending a drug and dose exceeds scope', approach: 'Prescribe-by-proxy framing', why: 'Counselors do not recommend specific drugs or doses', keys: ['no prescriptive authority'], mistake: 'Making a prescribing recommendation' }),
      O('c', 'Tell her that medication never helps with attention and that she should refuse it if it is ever offered', -1,
        { r: 'Blanket refusal advice overreaches', approach: 'Anti-medication framing', why: 'The prescriber and client weigh medication; the counselor does not forbid it', keys: ['shared decision'], mistake: 'Directing a medical decision' }),
      O('d', 'Ignore the medication question and simply redirect her back to the skills work every time she raises it', -1,
        { r: 'Dismissing the question is unhelpful', approach: 'Avoidant framing', why: 'A referral, not avoidance, is the appropriate response', keys: ['coordinated care'], mistake: 'Failing to address a legitimate question' }),
    ]),
    Q('q10', 'counseling', 'Priya says she feels stupid and lazy because she cannot focus like her peers. The most therapeutic response is to:', ['R5'], [
      O('a', 'Validate her frustration, correct the "lazy" self-blame with psychoeducation, and affirm her strengths', 3,
        { r: 'Validate and correct the self-blame', approach: 'Reduce shame with accurate information', why: 'Validating her frustration and reframing the inattention as a treatable condition counters the "lazy" self-blame', keys: ['feels stupid and lazy', 'demoralized'], mistake: 'Either agreeing she is lazy or dismissing her distress' }),
      O('b', 'Agree that she is probably just being lazy and that she simply needs to apply herself more from now on', -2,
        { r: 'Endorsing the self-blame is harmful', approach: 'Laziness framing', why: 'Calling her lazy reinforces shame and ignores the disorder', keys: ['accurate framing'], mistake: 'Reinforcing an inaccurate, shaming self-view' }),
      O('c', 'Tell her she has no reason to feel bad and that she should simply put the whole thing out of her mind for now', -1,
        { r: 'Dismissing the feeling invalidates her', approach: 'Minimize framing', why: 'Telling her not to feel bad dismisses a valid feeling', keys: ['validate then support'], mistake: 'Minimizing a central feeling' }),
      O('d', 'Change the subject to something more positive so that she does not have to sit with the difficult feelings at all', -1,
        { r: 'Avoiding the feeling misses the work', approach: 'Avoidant framing', why: 'Her feelings can be engaged and corrected, not avoided', keys: ['engage the feeling'], mistake: 'Sidestepping a meaningful moment' }),
    ]),
    Q('q11', 'counseling', 'How can the counselor best support Priya’s engagement in the skills-based work?', ['R5'], [
      O('a', 'Collaborate on realistic, strengths-based strategies tied to her goals and reinforce her successes', 3,
        { r: 'Collaborative, strengths-based, goal-linked skills', approach: 'Anchor the work in her goals and strengths', why: 'Collaborative, strengths-based strategies tied to her goals and reinforced successes sustain engagement', keys: ['wants strategies and support', 'has built workarounds'], mistake: 'Imposing rigid systems without connecting them to her goals and strengths' }),
      O('b', 'Insist she adopt a complex, rigid organization system all at once and treat any lapse as a total failure', -1,
        { r: 'Rigid, all-or-nothing systems backfire', approach: 'All-or-nothing framing', why: 'Overly complex, rigid demands undermine engagement in ADHD support', keys: ['realistic strategies'], mistake: 'Setting up an all-or-nothing trap' }),
      O('c', 'Focus the sessions mainly on cataloguing every mistake she made during the week in exhaustive detail', -1,
        { r: 'Cataloguing mistakes is not skill-building', approach: 'Catalogue framing', why: 'Rehashing mistakes does not build the skills she needs', keys: ['skill focus'], mistake: 'Centering sessions on cataloguing mistakes' }),
      O('d', 'Tell her counseling cannot help her at all unless she first agrees to start a stimulant medication right away', -1,
        { r: 'Conditioning care is inappropriate', approach: 'Conditioning framing', why: 'Skills-based work proceeds alongside any coordinated medication decision', keys: ['engagement matters'], mistake: 'Making counseling contingent on medication' }),
    ]),
    Q('q12', 'ethics', 'Priya asks the counselor to write that she "needs" a stimulant so she can obtain one for exams. The most appropriate action is to:', ['R4'], [
      O('a', 'Clarify that prescribing decisions are the prescriber’s and provide only accurate, role-appropriate information', 3,
        { r: 'Defer prescribing to the prescriber; document accurately', approach: 'Limit statements to your competence and role', why: 'Prescribing decisions belong to the prescriber; the counselor provides only accurate, role-appropriate information', keys: ['requests a "needs medication" letter', 'exam pressure'], mistake: 'Writing a letter that effectively directs prescribing beyond your role' }),
      O('b', 'Write the letter exactly as she requests, since keeping the client satisfied is what matters most right now', -2,
        { r: 'Directing prescribing is outside the role', approach: 'Please-the-client framing', why: 'Attesting that she "needs" a specific medication exceeds the counselor’s role and competence', keys: ['role boundaries'], mistake: 'Overstepping into prescribing territory' }),
      O('c', 'Refuse to provide any documentation at all and decline to explain what could appropriately be documented for her', -1,
        { r: 'Flat refusal forecloses helpful options', approach: 'Stonewall framing', why: 'Accurate, role-appropriate documentation can be provided rather than refused outright', keys: ['appropriate documentation'], mistake: 'Declining without clarifying the appropriate options' }),
      O('d', 'Encourage her to obtain a stimulant from a friend or another source so that she is ready for her exams', -2,
        { r: 'Encouraging diversion is unethical and unsafe', approach: 'Diversion framing', why: 'Encouraging her to obtain a controlled medication from an unauthorized source is unethical and unsafe', keys: ['safe, lawful care'], mistake: 'Facilitating diversion' }),
    ]),
    Q('q13', 'ethics', 'The counselor has limited training in ADHD assessment. The most ethical course of action is to:', ['R4'], [
      O('a', 'Refer the formal assessment to a qualified professional and stay within your supportive, skills-based role', 3,
        { r: 'Refer assessment; stay within role', approach: 'Practice within competence', why: 'Formal ADHD assessment requires specific competence; the counselor refers and supports within role', keys: ['no assessment training', 'evaluation needed'], mistake: 'Conducting a formal ADHD evaluation without the required competence' }),
      O('b', 'Conduct and interpret the formal ADHD testing yourself to keep everything within the counseling relationship', -2,
        { r: 'Testing without competence is unethical', approach: 'Overreach framing', why: 'Performing assessment beyond your competence violates the ethics code', keys: ['competence limits'], mistake: 'Acting outside demonstrated competence' }),
      O('c', 'Tell her a formal evaluation is unnecessary and that her difficulties will simply resolve with more effort', -2,
        { r: 'Minimizing the need misleads care', approach: 'Downplay framing', why: 'A documented evaluation is appropriate and should not be discouraged', keys: ['evaluation indicated'], mistake: 'Discouraging an indicated evaluation' }),
      O('d', 'Transfer her at once to another provider with no explanation, consultation, or coordinated plan for the transition', -1,
        { r: 'Abrupt transfer mishandles continuity', approach: 'Uncoordinated handoff', why: 'A coordinated referral, not an abrupt transfer, is appropriate', keys: ['coordinated transition'], mistake: 'Dropping the client without coordination' }),
    ]),
  ],
};

// ============================================================================
// D193 — Nonsuicidal Self-Injury (R45.88) — Crisis — hard
// ============================================================================
const D193 = {
  id: 'ncmhce-D193',
  title: 'Repeated self-injury to regulate distress, without suicidal intent',
  category: 'Crisis',
  difficulty: 'hard',
  primaryDiagnosis: { name: 'Nonsuicidal Self-Injury', code: 'R45.88' },
  diagnosis: { name: 'Nonsuicidal Self-Injury', code: 'R45.88' },
  differentialOptions: [
    { id: 'do1', name: 'Nonsuicidal Self-Injury', isCorrect: true },
    { id: 'do2', name: 'Suicidal Behavior', isCorrect: false },
    { id: 'do3', name: 'Borderline Personality Disorder', isCorrect: false },
    { id: 'do4', name: 'Major Depressive Disorder', isCorrect: false },
  ],
  narrative: {
    intake:
      'Camila Duarte, a 17-year-old, is referred by her school counselor after cuts were noticed on her arms. She describes repeatedly cutting to ' +
      'relieve overwhelming emotional distress and tension, with relief afterward, and she is clear that she does not intend to die when she does it.',
    session1:
      'Her self-injury functions to regulate emotion rather than to end her life, distinguishing it from a suicide attempt, and it is a specific ' +
      'behavior rather than a full personality disorder or a primary mood episode. She has recent, repeated episodes and expects them to continue without help.',
    session2:
      'She feels ashamed and hides the injuries, and stress at home and school precedes the episodes. She denies current suicidal intent but the ' +
      'counselor recognizes that self-injury elevates future suicide risk and requires careful, ongoing risk assessment and a safety-focused plan.',
  },
  diagnosticRationale:
    'Repeated, intentional self-inflicted damage to the body’s surface, undertaken to relieve negative feelings or interpersonal difficulty and ' +
    'without suicidal intent, best fits the clinical focus of nonsuicidal self-injury—distinct from suicidal behavior with intent to die, ' +
    'borderline personality disorder as a full pattern, and a primary depressive disorder, and requiring ongoing suicide-risk monitoring.',
  references: [
    { id: 'R1', source: 'DSM-5-TR', detail: 'Nonsuicidal self-injury: repeated self-inflicted bodily harm to relieve distress, without suicidal intent' },
    { id: 'R2', source: 'NICE guidelines', detail: 'Self-harm: compassionate assessment, harm reduction, and evidence-based psychological therapy' },
    { id: 'R3', source: 'C-SSRS', detail: 'Structured suicide-risk assessment; self-injury elevates future suicide risk and is monitored' },
    { id: 'R4', source: 'ACA Code of Ethics', detail: 'A.1., B.5., and C.2.: welfare of minor clients, confidentiality limits, safety, and competence' },
    { id: 'R5', source: 'Stanley-Brown SPI', detail: 'Collaborative safety planning and coping strategies for self-harm and suicide risk' },
  ],
  questions: [
    Q('q1', 'intake', 'What is most important to confirm to support a nonsuicidal self-injury focus?', ['R1'], [
      O('a', 'Repeated self-inflicted bodily harm undertaken to relieve distress and without any intent to die', 3,
        { r: 'Repeated self-harm to relieve distress, no intent to die', approach: 'Confirm the core features', why: 'Nonsuicidal self-injury involves repeated self-inflicted harm to relieve distress, explicitly without suicidal intent', keys: ['cuts to relieve distress', 'no intent to die'], mistake: 'Confirming the behavior without clarifying the function and absence of suicidal intent' }),
      O('b', 'That she can pinpoint the single event she is convinced first caused her to start injuring herself', -1,
        { r: 'A precipitant is not the criterion', approach: 'Trigger framing', why: 'Etiology is not the defining feature', keys: ['function-based focus'], mistake: 'Using a trigger as the diagnostic test' }),
      O('c', 'That her self-injury has grown a little more frequent over the past few days than it was the week before', -1,
        { r: 'Recent change is not the criterion', approach: 'Recent-change framing', why: 'The repeated pattern and function, not a recent uptick, define the focus', keys: ['repeated pattern'], mistake: 'Confusing a brief change with the focus' }),
      O('d', 'That she currently meets the full symptom count required for a discrete manic episode at this point in time', 0,
        { r: 'Manic count is not relevant', approach: 'Mania-criteria framing', why: 'The focus is the self-injury behavior, not a manic episode', keys: ['behavior-focused'], mistake: 'Applying manic criteria here' }),
    ]),
    Q('q2', 'core', 'Which feature best differentiates her presentation from suicidal behavior?', ['R1'], [
      O('a', 'She injures herself to regulate emotion without intending to die, unlike a suicide attempt with intent to die', 3,
        { r: 'No intent to die; emotion-regulation function', approach: 'Contrast the intent and function', why: 'Suicidal behavior involves intent to die; her self-injury functions to regulate emotion without that intent', keys: ['does not intend to die', 'relief afterward'], mistake: 'Treating nonsuicidal self-injury and a suicide attempt as identical without assessing intent' }),
      O('b', 'The fact that she deliberately causes harm to her own body during times of significant distress', -1,
        { r: 'Self-inflicted harm can occur in both', approach: 'Self-harm framing', why: 'Self-inflicted harm can occur in both; the intent differs', keys: ['shared feature'], mistake: 'Using self-harm alone to differentiate' }),
      O('c', 'The distress and the tension that she feels building before she injures herself', -1,
        { r: 'Preceding distress is nonspecific', approach: 'Distress framing', why: 'Preceding distress can occur in both; the intent differs', keys: ['shared distress'], mistake: 'Reading preceding distress as decisive' }),
      O('d', 'The way her self-injury tends to be a little more frequent during the most stressful weeks at home', 0,
        { r: 'Stress reactivity is nonspecific', approach: 'Stress framing', why: 'Worsening under stress does not determine intent', keys: ['nonspecific reactivity'], mistake: 'Using stress sensitivity to differentiate' }),
    ]),
    Q('q3', 'core', 'How does her presentation differ from borderline personality disorder?', ['R1'], [
      O('a', 'Self-injury here is a specific behavior, not necessarily part of a full pervasive borderline personality pattern', 3,
        { r: 'A specific behavior, not the full BPD pattern', approach: 'Contrast a behavior with a full pattern', why: 'BPD is a pervasive personality pattern; nonsuicidal self-injury is a specific behavior that can occur with or without it', keys: ['self-injury as a specific behavior', 'not a confirmed full pattern'], mistake: 'Assuming self-injury automatically means borderline personality disorder' }),
      O('b', 'The fact that she uses self-injury as a way to cope with intense and overwhelming emotional states', -1,
        { r: 'Self-injury as coping occurs in both', approach: 'Coping framing', why: 'Self-injury as coping can occur in both; the full pattern differs', keys: ['shared feature'], mistake: 'Using the coping function to differentiate' }),
      O('c', 'The emotional intensity and the difficulty regulating feelings that she experiences at difficult times', -1,
        { r: 'Emotional dysregulation is nonspecific', approach: 'Dysregulation framing', why: 'Emotional dysregulation can occur in both; the full pattern differs', keys: ['shared difficulty'], mistake: 'Reading dysregulation as decisive' }),
      O('d', 'The way her episodes tend to be a little more frequent around the more stressful times in her life', 0,
        { r: 'Stress reactivity is nonspecific', approach: 'Stress framing', why: 'More episodes under stress does not establish a personality disorder', keys: ['nonspecific reactivity'], mistake: 'Using stress sensitivity to differentiate' }),
    ]),
    Q('q4', 'core', 'What is most important to assess about the function of her self-injury?', ['R2'], [
      O('a', 'The triggers, function, and pattern of the self-injury, since understanding its function guides the plan', 3,
        { r: 'Assess triggers, function, and pattern', approach: 'Map the behavior’s function', why: 'Understanding the triggers, function, and pattern of self-injury guides an effective, harm-reducing plan', keys: ['injures to relieve distress', 'stress precedes episodes'], mistake: 'Focusing only on stopping the behavior without understanding its function' }),
      O('b', 'A detailed family pedigree going back several generations to find relatives who also self-injured', -1,
        { r: 'Extended pedigree is not the priority', approach: 'Pedigree framing', why: 'It does not inform the function-based plan', keys: ['plan-relevant data'], mistake: 'Gathering data that does not inform treatment' }),
      O('c', 'Whether the self-injury can be traced to one specific event that fully explains all of it today', -1,
        { r: 'A single event is not the target', approach: 'Origin-hunting framing', why: 'The current triggers and function, not a single origin, guide the work', keys: ['present function'], mistake: 'Hunting for an origin instead of the function' }),
      O('d', 'Her general hobbies and preferences so that the sessions can be arranged around the activities she most enjoys', 0,
        { r: 'Interests are secondary', approach: 'Preference framing', why: 'Useful for rapport but not what the plan hinges on', keys: ['secondary factor'], mistake: 'Prioritizing rapport detail over the assessment' }),
    ]),
    Q('q5', 'intake', 'Even though she denies suicidal intent, what is the most important safety step?', ['R3'], [
      O('a', 'Conduct a thorough suicide-risk assessment, since self-injury elevates future suicide risk, and monitor it over time', 3,
        { r: 'Assess suicide risk; monitor over time', approach: 'Screen risk directly and ongoing', why: 'Nonsuicidal self-injury elevates future suicide risk, so a thorough risk assessment and ongoing monitoring are essential', keys: ['denies current intent', 'elevated future risk'], mistake: 'Assuming that because she denies intent, no suicide-risk assessment is needed' }),
      O('b', 'Assume there is no suicide risk at all because she is clear that she does not intend to die when she cuts', -2,
        { r: 'Assuming no risk is unsafe', approach: 'Dismissal framing', why: 'Self-injury elevates future suicide risk even without current intent, so assessment is still needed', keys: ['elevated future risk'], mistake: 'Skipping risk assessment based on denial of intent' }),
      O('c', 'Defer any suicide-risk assessment until the self-injury has stopped and she has been stable for several months', -2,
        { r: 'Deferring assessment is unsafe', approach: 'Delay framing', why: 'Risk is assessed now and monitored, not after the behavior stops', keys: ['ongoing monitoring'], mistake: 'Postponing needed risk assessment' }),
      O('d', 'Focus only on getting her to stop cutting for now and return to any suicide-risk questions at a later date', -1,
        { r: 'Sequencing risk behind stopping is unsafe', approach: 'Single-issue framing', why: 'Stopping the behavior does not displace assessing and monitoring suicide risk', keys: ['safety first'], mistake: 'Sequencing risk assessment behind other goals' }),
    ]),
    Q('q6', 'treatment', 'What is the most appropriate treatment approach for Camila?', ['R2'], [
      O('a', 'Compassionate, evidence-based therapy building emotion-regulation and coping skills with harm reduction', 3,
        { r: 'Skills-based, compassionate, harm-reduction therapy', approach: 'Apply the guideline', why: 'Self-harm is treated with compassionate, evidence-based therapy that builds emotion-regulation and coping skills with harm reduction', keys: ['cuts to regulate emotion', 'expects episodes to continue'], mistake: 'Reacting punitively or focusing only on stopping the behavior without building skills' }),
      O('b', 'Reacting with alarm and shaming her so that she is frightened enough to stop the behavior right away', -2,
        { r: 'Shaming increases self-injury', approach: 'Shame framing', why: 'Alarm and shaming tend to increase shame and self-injury rather than reduce it', keys: ['compassionate stance'], mistake: 'Responding punitively' }),
      O('c', 'Focusing only on getting her to promise to stop, without building any emotion-regulation or coping skills', -1,
        { r: 'A promise without skills is insufficient', approach: 'Promise-only framing', why: 'Building skills, not extracting a promise, addresses the function of the behavior', keys: ['skills-based work'], mistake: 'Relying on a promise instead of skills' }),
      O('d', 'Starting her on a medication that you will select and adjust to stop the self-injury over the coming weeks yourself', -2,
        { r: 'Prescribing is outside counselor scope', approach: 'Prescribe medication', why: 'Counselors do not select or adjust medication', keys: ['no prescriptive authority'], mistake: 'Acting outside scope of practice' }),
    ]),
    Q('q7', 'treatment', 'What should the safety-focused plan include?', ['R5'], [
      O('a', 'Collaborative safety planning with coping alternatives, means-safety, and supports she can use in a crisis', 3,
        { r: 'Collaborative safety planning', approach: 'Build a usable safety plan', why: 'A collaborative safety plan with coping alternatives, means-safety, and supports helps her manage crises', keys: ['stress precedes episodes', 'expects continuation'], mistake: 'Relying on a no-harm contract instead of a collaborative safety plan' }),
      O('b', 'Having her sign a no-self-harm contract promising never to cut again, and treating that as the plan', -2,
        { r: 'No-harm contracts are not evidence-based', approach: 'Contract framing', why: 'No-harm contracts do not ensure safety and are not a substitute for a collaborative safety plan', keys: ['safety planning, not contracts'], mistake: 'Relying on a no-harm contract' }),
      O('c', 'Telling her to simply use willpower to resist the urge without any coping alternatives or supports at all', -1,
        { r: 'Willpower alone is insufficient', approach: 'Willpower framing', why: 'Coping alternatives and supports, not willpower alone, help her manage urges', keys: ['coping alternatives'], mistake: 'Relying on willpower without skills' }),
      O('d', 'Leaving safety planning out entirely and focusing only on exploring the origins of her distress each week', -1,
        { r: 'Omitting safety planning is unsafe', approach: 'Origins-only framing', why: 'Safety planning is essential alongside any exploration of her distress', keys: ['safety planning'], mistake: 'Omitting the safety plan' }),
    ]),
    Q('q8', 'treatment', 'How should progress and safety be tracked over time?', ['R5'], [
      O('a', 'Track self-injury frequency, urges, coping-skill use, mood, and suicide risk over time to guide the plan', 3,
        { r: 'Measurement-based tracking of behavior and risk', approach: 'Monitor outcomes and safety', why: 'Tracking self-injury, urges, coping-skill use, mood, and suicide risk steers the plan and catches escalation', keys: ['repeated episodes', 'elevated future risk'], mistake: 'Proceeding without tracking the behavior and ongoing risk' }),
      O('b', 'Rely only on whether she happens to say in session that she feels a little better than she did before', -1,
        { r: 'Anecdote alone is insufficient', approach: 'Anecdotal framing', why: 'Systematic tracking is more reliable than passing impressions', keys: ['structured measurement'], mistake: 'Substituting anecdote for measurement' }),
      O('c', 'Track only the number of visible injuries and base every decision solely on that single count', -1,
        { r: 'A visible-injury count is too narrow', approach: 'Single-metric framing', why: 'Urges, coping, mood, and risk all inform the plan, not visible injuries alone', keys: ['multidimensional monitoring'], mistake: 'Reducing monitoring to one count' }),
      O('d', 'Wait until the end of treatment to review whether her self-injury has changed at all since intake', -1,
        { r: 'End-only review misses risk shifts', approach: 'Delayed-review framing', why: 'Ongoing tracking is needed to catch changes in risk', keys: ['continuous monitoring'], mistake: 'Deferring all measurement to the end' }),
    ]),
    Q('q9', 'treatment', 'How should the counselor coordinate care given she is a minor?', ['R4'], [
      O('a', 'Clarify confidentiality and its limits, involve the family appropriately with attention to safety, and coordinate care', 3,
        { r: 'Clarify limits; involve family with safety in mind', approach: 'Coordinate within minor-consent rules', why: 'For a self-injuring minor, the counselor clarifies confidentiality limits and involves the family appropriately with attention to safety', keys: ['17-year-old', 'safety concern'], mistake: 'Either promising absolute secrecy or over-disclosing without regard to the therapeutic relationship' }),
      O('b', 'Promise her that nothing about the self-injury will ever be shared with her parents no matter what happens', -2,
        { r: 'Absolute secrecy ignores safety limits', approach: 'Absolute-secrecy framing', why: 'A blanket promise ignores safety limits and parental involvement for a minor with a safety concern', keys: ['safety limits'], mistake: 'Guaranteeing confidentiality you cannot ethically keep' }),
      O('c', 'Tell her parents every detail of everything she shares regardless of relevance or her therapeutic relationship', -2,
        { r: 'Over-disclosure erodes the alliance', approach: 'Full-disclosure framing', why: 'Sharing everything regardless of relevance undermines the therapeutic relationship with the minor', keys: ['appropriate sharing'], mistake: 'Over-disclosing beyond what safety requires' }),
      O('d', 'Avoid involving the family entirely so that the counseling stays completely separate from her home life', -1,
        { r: 'Excluding the family misses key support and safety', approach: 'Siloed framing', why: 'Appropriate family involvement supports safety and the plan for a minor', keys: ['appropriate involvement'], mistake: 'Excluding the family entirely' }),
    ]),
    Q('q10', 'counseling', 'Camila is ashamed and expects the counselor to react with alarm or judgment. The most therapeutic response is to:', ['R5'], [
      O('a', 'Respond calmly and compassionately, without alarm or judgment, and focus on understanding and safety', 3,
        { r: 'Calm, compassionate, non-judgmental stance', approach: 'Reduce shame and build safety', why: 'A calm, compassionate, non-judgmental stance reduces shame and builds the safety needed to engage', keys: ['ashamed', 'expects alarm or judgment'], mistake: 'Reacting with alarm or judgment, which increases shame and secrecy' }),
      O('b', 'React with visible alarm and tell her how dangerous and frightening her behavior is so she grasps the seriousness', -1,
        { r: 'Alarm increases shame and secrecy', approach: 'Alarm framing', why: 'Reacting with alarm tends to increase shame and secrecy rather than engagement', keys: ['calm stance'], mistake: 'Responding with alarm' }),
      O('c', 'Tell her the self-injury is shameful and that she should feel bad enough about it to stop immediately', -2,
        { r: 'Shaming is harmful and counterproductive', approach: 'Shame framing', why: 'Shaming increases self-injury rather than reducing it', keys: ['compassionate stance'], mistake: 'Using shame as a motivator' }),
      O('d', 'Change the subject away from the self-injury so that she does not have to feel embarrassed about it at all', -1,
        { r: 'Avoiding the topic misses the work', approach: 'Avoidant framing', why: 'The self-injury and her shame are engaged compassionately, not avoided', keys: ['engage compassionately'], mistake: 'Sidestepping the central issue' }),
    ]),
    Q('q11', 'counseling', 'How can the counselor best support Camila’s engagement and skill-building?', ['R5'], [
      O('a', 'Collaborate on coping alternatives she can use instead of self-injury, tied to her own goals, and reinforce successes', 3,
        { r: 'Collaborative coping alternatives, goal-linked', approach: 'Build skills on her terms', why: 'Collaborating on coping alternatives tied to her goals and reinforcing successes builds engagement and skills', keys: ['injures to cope', 'wants help'], mistake: 'Imposing prohibitions without building alternative coping skills' }),
      O('b', 'Insist she stop all self-injury immediately and treat any lapse as a complete and total failure', -1,
        { r: 'All-or-nothing framing backfires', approach: 'All-or-nothing framing', why: 'Punitive, all-or-nothing expectations undermine engagement and harm reduction', keys: ['harm reduction'], mistake: 'Setting up an all-or-nothing trap' }),
      O('c', 'Focus the sessions mainly on describing each self-injury episode in vivid detail every single week', -1,
        { r: 'Detailed rehearsal is not skill-building', approach: 'Detail-focus framing', why: 'Vivid rehearsal of episodes does not build coping skills and can be counterproductive', keys: ['skill focus'], mistake: 'Centering sessions on the episodes' }),
      O('d', 'Tell her counseling cannot help her at all unless she first promises to never self-injure again', -1,
        { r: 'Conditioning care on a promise is inappropriate', approach: 'Conditioning framing', why: 'Skills-based work proceeds without extracting an all-or-nothing promise', keys: ['engagement matters'], mistake: 'Making care contingent on a promise' }),
    ]),
    Q('q12', 'ethics', 'Camila begs the counselor not to tell her parents about the self-injury. The most appropriate action is to:', ['R4'], [
      O('a', 'Explain confidentiality and its safety limits and involve the parents appropriately given the safety concern', 3,
        { r: 'Explain limits; involve parents for safety', approach: 'Balance the minor’s trust and safety duties', why: 'For a self-injuring minor, the counselor explains confidentiality limits and involves the parents appropriately for safety', keys: ['minor', 'begs for secrecy', 'safety concern'], mistake: 'Promising absolute secrecy that safety and minor-consent rules do not allow' }),
      O('b', 'Promise her complete secrecy and agree that her parents will never be told anything about the self-injury', -2,
        { r: 'Absolute secrecy ignores safety limits', approach: 'Absolute-secrecy framing', why: 'A blanket promise ignores safety limits and parental involvement for a minor safety concern', keys: ['safety limits'], mistake: 'Guaranteeing confidentiality you cannot ethically keep' }),
      O('c', 'Immediately tell her parents every detail without any discussion with her or attention to how it is handled', -1,
        { r: 'Abrupt full disclosure mishandles the alliance', approach: 'Abrupt-disclosure framing', why: 'Appropriate, safety-focused involvement is handled thoughtfully with her, not as an abrupt full disclosure', keys: ['thoughtful involvement'], mistake: 'Disclosing abruptly without any collaboration' }),
      O('d', 'Avoid the confidentiality question entirely and simply change the subject whenever she raises it', -1,
        { r: 'Avoiding the issue leaves her confused', approach: 'Avoidant framing', why: 'Confidentiality and its limits are explained, not avoided', keys: ['transparent limits'], mistake: 'Sidestepping a needed conversation' }),
    ]),
    Q('q13', 'ethics', 'The counselor has limited training in self-harm treatment. The most ethical course of action is to:', ['R4'], [
      O('a', 'Seek consultation and training, and refer or coordinate for the components beyond your competence', 3,
        { r: 'Consult, train, or refer within competence', approach: 'Practice within competence', why: 'ACA C.2. requires competence; self-harm treatment with elevated risk may need consultation, training, or referral', keys: ['limited self-harm training', 'elevated risk'], mistake: 'Managing a higher-risk self-harm case alone without competence' }),
      O('b', 'Continue managing the case alone to preserve the continuity of the relationship built with her', -2,
        { r: 'Going it alone exceeds competence', approach: 'Continuity-over-competence', why: 'Continuity does not justify exceeding competence', keys: ['competence exceeded'], mistake: 'Prioritizing continuity over competence' }),
      O('c', 'Tell her the self-injury is not serious enough to need specialized help and continue with general talks only', -2,
        { r: 'Minimizing the risk fails the client', approach: 'Downplay framing', why: 'Self-injury with elevated future risk warrants competent, specialized care', keys: ['elevated risk'], mistake: 'Underestimating the need for specialized care' }),
      O('d', 'Transfer her at once to another provider with no explanation, consultation, or coordinated plan for the transition', -1,
        { r: 'Abrupt transfer mishandles continuity', approach: 'Uncoordinated handoff', why: 'A coordinated referral, not an abrupt transfer, is appropriate', keys: ['coordinated transition'], mistake: 'Dropping the client without coordination' }),
    ]),
  ],
};

// ============================================================================
// D194 — Opioid Withdrawal (F11.23) — Substance — hard
// ============================================================================
const D194 = {
  id: 'ncmhce-D194',
  title: 'Acute opioid withdrawal with distress and relapse risk',
  category: 'Substance',
  difficulty: 'hard',
  primaryDiagnosis: { name: 'Opioid Withdrawal', code: 'F11.23' },
  diagnosis: { name: 'Opioid Withdrawal', code: 'F11.23' },
  differentialOptions: [
    { id: 'do1', name: 'Opioid Withdrawal', isCorrect: true },
    { id: 'do2', name: 'Generalized Anxiety Disorder', isCorrect: false },
    { id: 'do3', name: 'Major Depressive Disorder', isCorrect: false },
    { id: 'do4', name: 'Alcohol Withdrawal', isCorrect: false },
  ],
  narrative: {
    intake:
      'Marcus Ellison, a 31-year-old, presents in acute distress after stopping opioids about a day ago. He has muscle aches, nausea, sweating, ' +
      'yawning, dilated pupils, restlessness, and intense craving, following cessation of heavy, prolonged opioid use.',
    session1:
      'His symptoms are the characteristic opioid-withdrawal syndrome that developed after reducing heavy opioid use, distinguishing it from a ' +
      'primary anxiety or mood disorder. The physiological signs are specific to opioid rather than alcohol withdrawal, and craving and relapse risk are high.',
    session2:
      'He is uncomfortable and frightened, worried he cannot get through it, and at high risk of returning to use to relieve the symptoms. He asks ' +
      'for help to get through withdrawal safely and, at a low moment, said he sometimes feels hopeless, without current plan or intent.',
  },
  diagnosticRationale:
    'A characteristic opioid-withdrawal syndrome—dysphoria, nausea, muscle aches, lacrimation or rhinorrhea, pupillary dilation, sweating, ' +
    'yawning, and craving—developing after cessation of heavy, prolonged opioid use, best fits opioid withdrawal, distinct from a primary anxiety ' +
    'or depressive disorder and from alcohol withdrawal, and carrying high craving and relapse risk that warrants coordinated medical care.',
  references: [
    { id: 'R1', source: 'DSM-5-TR', detail: 'Opioid withdrawal: characteristic syndrome after cessation of heavy opioid use; dysphoria, aches, autonomic signs, craving' },
    { id: 'R2', source: 'SAMHSA TIP 63', detail: 'Medications for opioid use disorder and safe, evidence-based withdrawal management' },
    { id: 'R3', source: 'C-SSRS', detail: 'Structured suicide-risk screening given elevated risk during opioid withdrawal' },
    { id: 'R4', source: 'ACA Code of Ethics', detail: 'A.1., B.2., and C.2.: client welfare, safety, coordination, and practicing within competence' },
    { id: 'R5', source: 'ASAM Criteria', detail: 'Level-of-care decisions and medically supervised opioid withdrawal management' },
  ],
  questions: [
    Q('q1', 'intake', 'What is most important to confirm to support an opioid withdrawal focus?', ['R1'], [
      O('a', 'A characteristic opioid-withdrawal syndrome developing after cessation of heavy, prolonged opioid use', 3,
        { r: 'Characteristic syndrome after opioid cessation', approach: 'Confirm the core features', why: 'Opioid withdrawal is the characteristic syndrome developing after cessation of heavy, prolonged opioid use', keys: ['muscle aches, nausea, sweating, dilated pupils', 'after stopping opioids'], mistake: 'Attributing the syndrome to something other than opioid withdrawal without confirming the pattern' }),
      O('b', 'That he can pinpoint the single event he is convinced first caused all of his problems with opioids', -1,
        { r: 'A precipitant is not the criterion', approach: 'Trigger framing', why: 'Etiology is not the defining feature of the withdrawal syndrome', keys: ['syndrome-based focus'], mistake: 'Using a trigger as the diagnostic test' }),
      O('c', 'That his symptoms have grown a little worse over the past few hours than they were earlier this morning', -1,
        { r: 'Recent change is not the defining feature', approach: 'Recent-change framing', why: 'The characteristic syndrome after cessation, not the exact hourly trajectory, defines the focus', keys: ['characteristic syndrome'], mistake: 'Confusing the hourly course with the defining features' }),
      O('d', 'That he currently meets the full symptom count required for a discrete manic episode at this point in time', 0,
        { r: 'Manic count is not relevant', approach: 'Mania-criteria framing', why: 'The focus is the withdrawal syndrome, not a manic episode', keys: ['withdrawal-focused'], mistake: 'Applying manic criteria here' }),
    ]),
    Q('q2', 'core', 'Which feature best differentiates his presentation from a primary anxiety disorder?', ['R1'], [
      O('a', 'His symptoms are the characteristic physiological withdrawal syndrome after stopping opioids, not primary anxiety', 3,
        { r: 'Withdrawal syndrome, not primary anxiety', approach: 'Contrast the cause', why: 'A primary anxiety disorder is not a withdrawal syndrome; his symptoms are the characteristic opioid-withdrawal picture', keys: ['physiological withdrawal signs', 'after opioid cessation'], mistake: 'Reading withdrawal-driven distress as a primary anxiety disorder' }),
      O('b', 'The fact that he feels restless and anxious and quite distressed during this difficult time for him', -1,
        { r: 'Anxiety and restlessness are nonspecific', approach: 'Anxiety framing', why: 'Anxiety and restlessness occur in both; the withdrawal syndrome differs', keys: ['shared feature'], mistake: 'Using anxiety to differentiate' }),
      O('c', 'The discomfort and the agitation that he experiences while he is going through this episode', -1,
        { r: 'Discomfort is nonspecific', approach: 'Discomfort framing', why: 'Discomfort can occur in both; the physiological syndrome differs', keys: ['shared discomfort'], mistake: 'Reading discomfort as decisive' }),
      O('d', 'The way his symptoms tend to feel a little worse during the most stressful parts of the day for him', 0,
        { r: 'Stress reactivity is nonspecific', approach: 'Stress framing', why: 'Worsening under stress does not identify the cause', keys: ['nonspecific reactivity'], mistake: 'Using stress sensitivity to differentiate' }),
    ]),
    Q('q3', 'core', 'How does his presentation differ from a primary depressive disorder?', ['R1'], [
      O('a', 'His dysphoria is part of an acute withdrawal syndrome after opioid cessation, not a primary depressive episode', 3,
        { r: 'Acute withdrawal dysphoria, not a mood episode', approach: 'Contrast the cause and course', why: 'A primary depressive disorder is a sustained mood episode; his dysphoria is part of an acute withdrawal syndrome', keys: ['acute onset after cessation', 'physiological withdrawal signs'], mistake: 'Reading acute withdrawal dysphoria as a primary depressive disorder' }),
      O('b', 'The fact that he feels low and hopeless at times during this difficult and uncomfortable period', -1,
        { r: 'Low mood is nonspecific', approach: 'Mood framing', why: 'Low mood can occur in both; the acute withdrawal context differs', keys: ['shared feature'], mistake: 'Using low mood to differentiate' }),
      O('c', 'The distress and the discouragement that he feels while he is going through the withdrawal', -1,
        { r: 'Distress is nonspecific', approach: 'Distress framing', why: 'Distress can occur in both; the acute withdrawal context differs', keys: ['shared distress'], mistake: 'Reading distress as decisive' }),
      O('d', 'The way his mood seems a little lower in the mornings than it does later during the day', 0,
        { r: 'Diurnal pattern is not diagnostic', approach: 'Time-of-day framing', why: 'Diurnal variation does not establish a primary depressive disorder here', keys: ['nonspecific timing'], mistake: 'Over-reading a circadian pattern' }),
    ]),
    Q('q4', 'core', 'How does his presentation differ from alcohol withdrawal?', ['R1'], [
      O('a', 'His physiological signs are specific to opioid withdrawal, following opioid rather than alcohol cessation', 3,
        { r: 'Opioid-specific signs, opioid cessation', approach: 'Contrast the substance and signs', why: 'The physiological signs and the substance involved are specific to opioid withdrawal, not alcohol withdrawal', keys: ['dilated pupils, yawning, muscle aches', 'after opioid use'], mistake: 'Conflating opioid withdrawal with alcohol withdrawal' }),
      O('b', 'The fact that he is experiencing an uncomfortable physiological withdrawal syndrome after stopping a substance', -1,
        { r: 'A withdrawal syndrome occurs in both', approach: 'Withdrawal framing', why: 'A withdrawal syndrome occurs in both; the specific signs and substance differ', keys: ['shared feature'], mistake: 'Using the presence of withdrawal to differentiate the substance' }),
      O('c', 'The craving and the distress that he feels while he is going through the withdrawal', -1,
        { r: 'Craving is nonspecific', approach: 'Craving framing', why: 'Craving occurs across withdrawals; the substance differs', keys: ['shared craving'], mistake: 'Reading craving as decisive about the substance' }),
      O('d', 'The way his symptoms feel a little worse when he is in a more stressful environment at the time', 0,
        { r: 'Environmental effects are nonspecific', approach: 'Environment framing', why: 'Worse symptoms in a stressful environment do not identify the substance', keys: ['nonspecific factor'], mistake: 'Over-reading an environmental effect' }),
    ]),
    Q('q5', 'intake', 'What is the single most important step given his acute withdrawal and relapse risk?', ['R2'], [
      O('a', 'Coordinate urgent medical evaluation for supervised withdrawal management and appropriate level of care', 3,
        { r: 'Urgent medical withdrawal management', approach: 'Prioritize medical care', why: 'Acute opioid withdrawal with high relapse risk warrants urgent medical evaluation for supervised management and level of care', keys: ['acute withdrawal', 'high craving and relapse risk'], mistake: 'Attempting to manage acute withdrawal with counseling alone instead of coordinating medical care' }),
      O('b', 'Begin long-term insight-oriented therapy for his opioid use and plan to reassess over the next several months', -2,
        { r: 'Depth therapy delays urgent care', approach: 'Therapy-first framing', why: 'Acute withdrawal needs urgent medical management, not deferral to long-term depth therapy', keys: ['urgent management'], mistake: 'Delaying the required urgent medical care' }),
      O('c', 'A previously undetected primary psychotic disorder that might better account for his withdrawal symptoms', -1,
        { r: 'Psychosis is not indicated', approach: 'Psychosis framing', why: 'Nothing suggests a psychotic process', keys: ['intact reality testing'], mistake: 'Pursuing an unsupported rule-out' }),
      O('d', 'A long-standing eating disorder that could be the single underlying cause of his acute withdrawal symptoms', 0,
        { r: 'Eating pathology is not indicated', approach: 'Eating-disorder framing', why: 'No eating concerns are reported and this is an acute withdrawal picture', keys: ['no eating data'], mistake: 'Inventing an unsupported rule-out' }),
    ]),
    Q('q6', 'treatment', 'What is the most appropriate first-line step for his care?', ['R2'], [
      O('a', 'Coordinate evidence-based, medically supervised withdrawal management and medications-for-opioid-use-disorder options', 3,
        { r: 'Medically supervised withdrawal and MOUD options', approach: 'Apply the guideline', why: 'Evidence-based, medically supervised withdrawal management and MOUD options are first-line for opioid withdrawal', keys: ['acute withdrawal', 'wants to get through it safely'], mistake: 'Advising him to just tough it out without coordinating medical management and MOUD options' }),
      O('b', 'Advising him to simply tough out the withdrawal alone at home with willpower and no medical support at all', -2,
        { r: 'Unsupported withdrawal raises relapse risk', approach: 'Tough-it-out framing', why: 'Unsupported withdrawal is distressing and raises relapse and overdose risk; medical support is indicated', keys: ['medical support'], mistake: 'Dismissing the need for medical management' }),
      O('c', 'Design and manage a withdrawal medication regimen yourself and adjust the doses over the coming days', -2,
        { r: 'Managing medications is outside scope', approach: 'Prescribe-by-proxy framing', why: 'Counselors do not design or manage withdrawal medications; that is the medical team’s role', keys: ['no prescriptive authority'], mistake: 'Acting outside scope of practice' }),
      O('d', 'Telling him that counseling alone will get him through withdrawal and that no medical care is needed at all', -2,
        { r: 'Counseling alone is insufficient here', approach: 'Counseling-only framing', why: 'Acute opioid withdrawal warrants coordinated medical management, not counseling alone', keys: ['medical management'], mistake: 'Omitting necessary medical care' }),
    ]),
    Q('q7', 'treatment', 'What is the most important counseling role during and after withdrawal?', ['R5'], [
      O('a', 'Provide support, relapse-prevention, and engagement into ongoing opioid-use-disorder treatment, coordinating care', 3,
        { r: 'Support, relapse prevention, and engagement', approach: 'Define the counselor role', why: 'The counselor supports him through withdrawal, builds relapse-prevention, and engages him into ongoing treatment, coordinating care', keys: ['high relapse risk', 'wants help'], mistake: 'Focusing only on the acute symptoms without engaging him into ongoing treatment' }),
      O('b', 'Ending all contact once the acute withdrawal is over, since the immediate crisis will have passed by then', -2,
        { r: 'Ending contact abandons ongoing needs', approach: 'End-contact framing', why: 'Relapse risk remains high after withdrawal; ongoing treatment engagement is essential', keys: ['ongoing treatment'], mistake: 'Abandoning him once acute withdrawal ends' }),
      O('c', 'Telling him that once withdrawal is over he is fully cured and needs no further treatment or support at all', -2,
        { r: 'Declaring a cure is inaccurate and harmful', approach: 'Cure framing', why: 'Withdrawal is not a cure; ongoing opioid-use-disorder treatment is needed', keys: ['ongoing treatment'], mistake: 'Falsely declaring him cured' }),
      O('d', 'Focusing only on the acute physical symptoms and leaving relapse-prevention and engagement out of the plan', -1,
        { r: 'Omitting engagement narrows the plan', approach: 'Symptom-only framing', why: 'Relapse-prevention and engagement into ongoing treatment are central, not just acute symptoms', keys: ['engagement focus'], mistake: 'Omitting the ongoing-treatment engagement' }),
    ]),
    Q('q8', 'treatment', 'How should progress and safety be tracked during and after withdrawal?', ['R5'], [
      O('a', 'Track withdrawal severity, craving, treatment engagement, mood, and risk over time to guide the plan', 3,
        { r: 'Measurement-based tracking of withdrawal and risk', approach: 'Monitor outcomes and safety', why: 'Tracking withdrawal severity, craving, engagement, mood, and risk steers the plan and catches relapse or deterioration', keys: ['high craving', 'elevated risk'], mistake: 'Proceeding without tracking withdrawal, craving, and risk' }),
      O('b', 'Rely only on whether he happens to say he feels a little better than he did before at each visit', -1,
        { r: 'Anecdote alone is insufficient', approach: 'Anecdotal framing', why: 'Systematic tracking is more reliable than passing impressions', keys: ['structured measurement'], mistake: 'Substituting anecdote for measurement' }),
      O('c', 'Track only the number of days since his last use and base every decision solely on that single figure', -1,
        { r: 'Days-since-use alone is too narrow', approach: 'Single-metric framing', why: 'Withdrawal, craving, engagement, and risk all inform the plan, not days alone', keys: ['multidimensional monitoring'], mistake: 'Reducing monitoring to one number' }),
      O('d', 'Wait until the end of treatment to review whether anything has changed at all since intake', -1,
        { r: 'End-only review misses risk shifts', approach: 'Delayed-review framing', why: 'Ongoing tracking is needed to catch relapse and changes in risk', keys: ['continuous monitoring'], mistake: 'Deferring all measurement to the end' }),
    ]),
    Q('q9', 'treatment', 'How should the counselor coordinate with the medical team?', ['R4'], [
      O('a', 'With his consent and a release, coordinate withdrawal management and MOUD with the medical team', 3,
        { r: 'Coordinate with consent for medical management', approach: 'Coordinate within consent and scope', why: 'Safe withdrawal and MOUD depend on consented coordination with the medical team', keys: ['medical management', 'MOUD options'], mistake: 'Working in isolation, or sharing without consent' }),
      O('b', 'Share his full history with everyone involved right away, since coordinating his care is plainly in his interest anyway', -2,
        { r: 'Coordinating without consent breaches confidentiality', approach: 'Assume-consent framing', why: 'A valid release is required before disclosure', keys: ['no release'], mistake: 'Disclosing before consent is documented' }),
      O('c', 'Adjust his withdrawal medications yourself based on how he reports feeling rather than involving the medical team', -2,
        { r: 'Adjusting medications exceeds scope', approach: 'Self-adjust framing', why: 'Counselors do not adjust withdrawal medications; the medical team does', keys: ['no prescriptive authority'], mistake: 'Acting outside scope of practice' }),
      O('d', 'Avoid contacting the medical team at all so that his counseling stays entirely separate from his medical care', -1,
        { r: 'No coordination undercuts safe care', approach: 'Siloed framing', why: 'Consented coordination supports safe withdrawal and MOUD here', keys: ['integrated care'], mistake: 'Refusing helpful, consented coordination' }),
    ]),
    Q('q10', 'counseling', 'Marcus is frightened and says he cannot get through the withdrawal. The most therapeutic response is to:', ['R5'], [
      O('a', 'Respond with empathy, instill realistic hope, and reinforce the medical supports available to get through it', 3,
        { r: 'Empathize and instill realistic hope', approach: 'Support and instill hope', why: 'Empathizing while instilling realistic hope and reinforcing medical supports helps a frightened client through withdrawal', keys: ['frightened', 'worried he cannot get through it'], mistake: 'Either minimizing his fear or offering no realistic hope or support' }),
      O('b', 'Agree that he probably cannot get through it and that relapse is inevitable no matter what he does now', -2,
        { r: 'Endorsing hopelessness raises relapse risk', approach: 'Hopelessness framing', why: 'Confirming he cannot get through it undermines motivation and raises relapse risk', keys: ['instill hope'], mistake: 'Validating a hopeless belief' }),
      O('c', 'Tell him he simply needs to toughen up and stop being so frightened about the withdrawal symptoms', -1,
        { r: 'Dismissing his fear invalidates him', approach: 'Toughen-up framing', why: 'Telling him to toughen up dismisses his fear and undermines the alliance', keys: ['validate then support'], mistake: 'Minimizing his fear' }),
      O('d', 'Change the subject away from the withdrawal so that he does not have to think about how frightened he is', -1,
        { r: 'Avoiding the fear misses the work', approach: 'Avoidant framing', why: 'His fear can be engaged and supported, not avoided', keys: ['engage the fear'], mistake: 'Sidestepping a meaningful moment' }),
    ]),
    Q('q11', 'counseling', 'How can the counselor best support Marcus’s engagement into ongoing treatment?', ['R5'], [
      O('a', 'Build motivation and connect him to ongoing opioid-use-disorder treatment tied to his own goals and hope', 3,
        { r: 'Build motivation and connect to ongoing treatment', approach: 'Engage him into continuing care', why: 'Building motivation and connecting him to ongoing treatment tied to his goals supports recovery beyond acute withdrawal', keys: ['wants help', 'high relapse risk'], mistake: 'Treating acute withdrawal as the end point rather than a gateway to ongoing treatment' }),
      O('b', 'Tell him that getting through withdrawal is all he needs and that no further treatment is necessary at all', -2,
        { r: 'Declaring withdrawal sufficient is inaccurate', approach: 'Withdrawal-is-enough framing', why: 'Withdrawal alone is not sufficient; ongoing treatment is needed for opioid use disorder', keys: ['ongoing treatment'], mistake: 'Framing withdrawal as the complete treatment' }),
      O('c', 'Focus the sessions mainly on cataloguing every past use episode in exhaustive detail every single week', -1,
        { r: 'Cataloguing use is not engagement', approach: 'Catalogue framing', why: 'Rehashing past use does not build motivation or engagement into ongoing treatment', keys: ['engagement focus'], mistake: 'Centering sessions on past use' }),
      O('d', 'Tell him counseling cannot help him at all unless he first gets through the entire withdrawal on his own', -1,
        { r: 'Conditioning care is inappropriate', approach: 'Conditioning framing', why: 'Counseling and engagement proceed alongside the coordinated medical withdrawal', keys: ['concurrent care'], mistake: 'Making counseling contingent on completing withdrawal first' }),
    ]),
    Q('q12', 'ethics', 'Marcus asks the counselor to help him get opioids to ease the withdrawal until he feels ready to stop. The most appropriate action is to:', ['R4'], [
      O('a', 'Decline to facilitate obtaining opioids and instead coordinate safe, medically supervised withdrawal and MOUD', 3,
        { r: 'Do not facilitate; coordinate safe medical care', approach: 'Stay within scope and coordinate', why: 'The counselor does not facilitate obtaining opioids but coordinates safe, medically supervised withdrawal and MOUD', keys: ['asks for help getting opioids', 'acute withdrawal'], mistake: 'Helping him obtain opioids outside a medical plan' }),
      O('b', 'Help him obtain opioids this once so that his withdrawal symptoms are relieved and he feels supported', -2,
        { r: 'Facilitating opioids is unsafe and outside scope', approach: 'Facilitate-access framing', why: 'Helping him obtain opioids is unsafe, outside scope, and undermines recovery', keys: ['safe medical care'], mistake: 'Facilitating access to the substance' }),
      O('c', 'Encourage him to buy opioids from a friend so that he can taper himself gradually at home on his own', -2,
        { r: 'Encouraging illicit use is dangerous', approach: 'Illicit-taper framing', why: 'Encouraging illicit opioid use to self-taper is dangerous and unethical', keys: ['safe, supervised care'], mistake: 'Facilitating dangerous illicit use' }),
      O('d', 'Refuse to discuss the withdrawal symptoms at all and simply change the subject whenever he raises them', -1,
        { r: 'Avoiding the issue is unhelpful', approach: 'Avoidant framing', why: 'The symptoms are addressed by coordinating safe medical care, not by avoidance', keys: ['coordinate care'], mistake: 'Failing to address a legitimate concern' }),
    ]),
    Q('q13', 'ethics', 'The counselor has limited training in opioid withdrawal management. The most ethical course of action is to:', ['R4'], [
      O('a', 'Ensure medical involvement, seek consultation, and coordinate rather than manage the withdrawal alone', 3,
        { r: 'Ensure medical involvement and coordinate', approach: 'Practice within competence', why: 'ACA C.2. and safety require ensuring medical management and coordination for opioid withdrawal', keys: ['limited training', 'acute withdrawal with risk'], mistake: 'Attempting to manage acute opioid withdrawal alone without competence' }),
      O('b', 'Continue managing the case alone to preserve the continuity of the relationship built with him', -2,
        { r: 'Going it alone exceeds competence', approach: 'Continuity-over-competence', why: 'Continuity does not justify exceeding competence or safety', keys: ['competence and safety'], mistake: 'Prioritizing continuity over safety' }),
      O('c', 'Tell him the withdrawal is not serious enough to need medical care and continue with supportive talks only', -2,
        { r: 'Minimizing the risk fails the client', approach: 'Downplay framing', why: 'Opioid withdrawal with relapse and overdose risk warrants competent, coordinated medical care', keys: ['withdrawal risk'], mistake: 'Underestimating the need for medical care' }),
      O('d', 'Transfer him at once to another provider with no explanation, consultation, or coordinated plan for the transition', -1,
        { r: 'Abrupt transfer mishandles continuity', approach: 'Uncoordinated handoff', why: 'A coordinated referral, not an abrupt transfer, is appropriate', keys: ['coordinated transition'], mistake: 'Dropping the client without coordination' }),
    ]),
  ],
};

module.exports = { CASES: [D190, D191, D192, D193, D194] };
