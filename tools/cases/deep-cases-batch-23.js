// ============================================================================
// deep-cases-batch-23.js — NCMHCE deep cases, batch 23 (2022+ format)
// NCMHCE Prep Platform | GA Integrated Therapeutic Perspectives LLC
//
// Four exam-deep clinical simulations (13 items each, sections [5,4,4]), all
// difficulty: hard. Second, distinct scenarios for already-covered Trauma &
// Stressor-Related diagnoses, building toward the blueprint's per-category
// volume (duplication is a scenario problem, not a diagnosis problem —
// dedup.js). The diagnosis is GIVEN; items test clinical decision-making across
// the three derived sections (Assessment -> Planning -> Process). On id
// block D211+:
//   ncmhce-D211  Posttraumatic Stress Disorder                          (F43.10)
//   ncmhce-D212  Acute Stress Disorder                                  (F43.0)
//   ncmhce-D213  Adjustment Disorder, with Mixed Anxiety and Depressed Mood (F43.23)
//   ncmhce-D214  Prolonged Grief Disorder                               (F43.81)
//
// Authored to NCMHCE_DeepCase_Generation_Spec.md. Passes caseSchema
// (strictItemQuality) AND examDepth with zero errors / zero warnings.
// Auto-discovered by import-deep-cases.js (deep-cases-batch-*.js).
//
// Validate:
//   node tools/cases/validateCases.js tools/cases/deep-cases-batch-23.js
//   node -e "const{validateExamDepthSet}=require('./tools/cases/examDepth');const{CASES}=require('./tools/cases/deep-cases-batch-23');console.log(validateExamDepthSet(CASES))"
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
// D211 — Posttraumatic Stress Disorder (F43.10) — Trauma — hard
// ============================================================================
const D211 = {
  id: 'ncmhce-D211',
  title: 'Chronic PTSD in a firefighter after repeated critical incidents',
  category: 'Trauma',
  difficulty: 'hard',
  primaryDiagnosis: { name: 'Posttraumatic Stress Disorder', code: 'F43.10' },
  diagnosis: { name: 'Posttraumatic Stress Disorder', code: 'F43.10' },
  differentialOptions: [
    { id: 'do1', name: 'Posttraumatic Stress Disorder', isCorrect: true },
    { id: 'do2', name: 'Acute Stress Disorder', isCorrect: false },
    { id: 'do3', name: 'Major Depressive Disorder, Moderate', isCorrect: false },
    { id: 'do4', name: 'Adjustment Disorder, with Anxiety', isCorrect: false },
  ],
  narrative: {
    intake:
      'Sean Delaney, a 38-year-old firefighter, describes months of nightmares and intrusive images after several fatal-fire calls, hyperarousal and ' +
      'startle, avoidance of reminders and the station, emotional numbing, and irritability that are straining his marriage and work.',
    session1:
      'His symptoms follow exposure to actual death and serious injury and have persisted well beyond one month across all symptom clusters— ' +
      'intrusion, avoidance, negative alterations in cognition and mood, and arousal—consistent with PTSD rather than an acute stress reaction.',
    session2:
      'His symptoms exceed a purely depressive or a milder adjustment picture in trauma specificity, and he has passive thoughts that he would be ' +
      'better off dead. The counselor conducts a structured suicide-risk assessment and plans trauma-focused, evidence-based care within competence.',
  },
  diagnosticRationale:
    'Exposure to actual death and serious injury followed by intrusion, avoidance, negative alterations in cognition and mood, and marked arousal ' +
    'persisting beyond one month, best fits posttraumatic stress disorder, distinct from an acute stress reaction (under a month), a primary ' +
    'depressive disorder, and a milder adjustment reaction, and warranting suicide-risk assessment.',
  references: [
    { id: 'R1', source: 'DSM-5-TR', detail: 'PTSD: trauma exposure; intrusion, avoidance, negative cognition/mood, arousal; duration > 1 month' },
    { id: 'R2', source: 'VA/DoD CPG', detail: 'PTSD: trauma-focused psychotherapies (PE, CPT) first-line; risk management' },
    { id: 'R3', source: 'C-SSRS', detail: 'Structured suicide-risk assessment (elevated risk in PTSD)' },
    { id: 'R4', source: 'Stanley-Brown SPI', detail: 'Collaborative safety planning when risk is present' },
    { id: 'R5', source: 'ACA Code of Ethics', detail: 'A.1., B.2., C.2.: welfare, safety, coordination, and competence' },
  ],
  questions: [
    Q('q1', 'intake', 'What is most important to confirm to support a diagnosis of PTSD?', ['R1'], [
      O('a', 'Trauma exposure with intrusion, avoidance, negative cognition/mood, and arousal persisting beyond one month', 3,
        { r: 'All clusters present beyond one month', approach: 'Confirm the full criteria', why: 'PTSD requires trauma exposure plus intrusion, avoidance, negative alterations in cognition/mood, and arousal, persisting beyond one month', keys: ['fatal-fire calls', 'nightmares, avoidance, hyperarousal for months'], mistake: 'Diagnosing PTSD without confirming all symptom clusters and the greater-than-one-month duration' }),
      O('b', 'Mainly whether Sean is able to single out one particular call among the many that he is personally quite convinced was really the one specific incident that first set off absolutely everything he is now experiencing', -1,
        { r: 'A single index event is not required', approach: 'Single-event framing', why: 'Isolating one index incident is not what defines PTSD; the symptom pattern after exposure does', keys: ['syndrome-based focus'], mistake: 'Requiring a single index event rather than confirming the criteria' }),
      O('c', 'That his symptoms have gotten a little worse over the past few days than earlier in the week', -1,
        { r: 'Recent change is not the defining feature', approach: 'Recent-change framing', why: 'The sustained post-trauma syndrome, not the exact recent trajectory, defines PTSD', keys: ['sustained syndrome'], mistake: 'Confusing the recent course with the criteria' }),
      O('d', 'That he currently meets the full symptom count required for a discrete manic episode at this time', 0,
        { r: 'Manic count is not relevant', approach: 'Mania-criteria framing', why: 'The focus is a trauma disorder, not a manic episode', keys: ['trauma-focused'], mistake: 'Applying manic criteria here' }),
    ]),
    Q('q2', 'core', 'Which feature best distinguishes this from acute stress disorder?', ['R1'], [
      O('a', 'His symptoms have persisted well beyond one month, exceeding the acute stress disorder time frame', 3,
        { r: 'Duration beyond one month', approach: 'Contrast the duration', why: 'Acute stress disorder applies from three days to one month after trauma; his symptoms have persisted well beyond a month', keys: ['months of symptoms', 'not the acute window'], mistake: 'Labeling long-standing post-trauma symptoms as an acute stress reaction' }),
      O('b', 'The fact that ever since these difficult calls Sean has quite clearly been experiencing a genuinely distressing and painful set of trauma-related symptoms that continue to affect him a great deal in his daily life', -1,
        { r: 'Trauma symptoms occur in both', approach: 'Symptom framing', why: 'Trauma-related symptoms occur in both; the duration is what differs', keys: ['shared feature'], mistake: 'Using the presence of symptoms to differentiate' }),
      O('c', 'The nightmares and the hyperarousal that he describes right now', -1,
        { r: 'These symptoms are nonspecific to duration', approach: 'Symptom framing', why: 'Nightmares and arousal occur in both; the duration differs', keys: ['shared symptoms'], mistake: 'Reading individual symptoms as decisive for duration' }),
      O('d', 'The way his symptoms feel a little worse on days he has slept poorly', 0,
        { r: 'Sleep effects are nonspecific', approach: 'Sleep framing', why: 'Worse symptoms after poor sleep does not distinguish the two', keys: ['nonspecific factor'], mistake: 'Over-reading a sleep effect' }),
    ]),
    Q('q3', 'core', 'How does this differ from a primary depressive disorder?', ['R1'], [
      O('a', 'His picture is organized around trauma—intrusion, avoidance, and arousal—not primarily depressed mood and anhedonia', 3,
        { r: 'Trauma-organized, not primarily depressive', approach: 'Contrast the core disturbance', why: 'A primary depression centers on depressed mood and anhedonia; his picture is organized around trauma with intrusion, avoidance, and arousal', keys: ['intrusive images, avoidance', 'trauma-specific arousal'], mistake: 'Reading a trauma-organized presentation as a primary depressive disorder' }),
      O('b', 'The fact that during this period of his life Sean really has quite understandably been feeling genuinely low and down and distressed and worn out a good deal of the time as he struggles with all of it', -1,
        { r: 'Low mood occurs in both', approach: 'Mood framing', why: 'Low mood can occur in both; the trauma organization is what differs', keys: ['shared feature'], mistake: 'Using low mood to differentiate' }),
      O('c', 'The poor sleep and the irritability that he describes right now', -1,
        { r: 'These symptoms are nonspecific', approach: 'Symptom framing', why: 'Poor sleep and irritability occur in both; the trauma organization differs', keys: ['shared symptoms'], mistake: 'Reading nonspecific symptoms as decisive' }),
      O('d', 'The way his mood dips a little more in the mornings than later in the day', 0,
        { r: 'Diurnal pattern is not diagnostic', approach: 'Time-of-day framing', why: 'Diurnal variation does not distinguish the two', keys: ['nonspecific timing'], mistake: 'Over-reading a circadian pattern' }),
    ]),
    Q('q4', 'core', 'How does this differ from an adjustment disorder with anxiety?', ['R1'], [
      O('a', 'His presentation meets full PTSD criteria after Criterion-A trauma, exceeding a milder, non-specific adjustment reaction', 3,
        { r: 'Full PTSD criteria exceed an adjustment reaction', approach: 'Contrast severity and specificity', why: 'An adjustment disorder is a milder, non-specific reaction; his meets full PTSD criteria after qualifying trauma exposure', keys: ['full symptom clusters', 'qualifying trauma exposure'], mistake: 'Downgrading full PTSD to a non-specific adjustment reaction' }),
      O('b', 'The fact that there has very clearly and understandably been a good deal of genuine stress and difficulty present in Sean’s life over these recent months as he has tried to cope with everything he has been through', -1,
        { r: 'Stress is present in both', approach: 'Stressor framing', why: 'Stress accompanies both; meeting full PTSD criteria after qualifying trauma is what differs', keys: ['shared feature'], mistake: 'Using the presence of stress to differentiate' }),
      O('c', 'The tension and the distress that he feels about his current circumstances', -1,
        { r: 'Distress is nonspecific', approach: 'Distress framing', why: 'Distress occurs in both; the criteria and specificity differ', keys: ['shared affect'], mistake: 'Reading distress as decisive' }),
      O('d', 'The way his distress feels a little worse during the busiest shifts at work', 0,
        { r: 'Stress reactivity is nonspecific', approach: 'Stress framing', why: 'Worsening during busy shifts does not distinguish the two', keys: ['nonspecific reactivity'], mistake: 'Using stress sensitivity to differentiate' }),
    ]),
    Q('q5', 'intake', 'What is the single most important assessment step given his presentation?', ['R3'], [
      O('a', 'Conduct a structured suicide-risk assessment, since PTSD elevates risk and he has passive death thoughts', 3,
        { r: 'Structured suicide-risk assessment now', approach: 'Screen risk directly', why: 'PTSD elevates suicide risk and he reports passive death thoughts, so a structured risk assessment is essential', keys: ['better off dead', 'chronic PTSD'], mistake: 'Beginning trauma work without a structured suicide-risk assessment' }),
      O('b', 'Mainly obtaining a very detailed and complete moment-by-moment narrative of every single one of the traumatic calls in fine sensory detail right away in the very first session before turning at all to the question of his present safety', -2,
        { r: 'Detailed trauma recounting first is unsafe', approach: 'Recount-first framing', why: 'Pushing a detailed trauma narrative before assessing safety and stabilizing can destabilize and skips risk assessment', keys: ['safety and stabilization first'], mistake: 'Eliciting detailed trauma memories before assessing safety' }),
      O('c', 'Assuming there is no risk because he is still working and has a family', -2,
        { r: 'Assuming no risk is unsafe', approach: 'Dismissal framing', why: 'Working and having a family do not rule out risk; structured assessment is required', keys: ['assess regardless'], mistake: 'Dismissing risk based on functioning' }),
      O('d', 'Focusing only on sleep tips for now and returning to any safety questions much later', -1,
        { r: 'Sequencing safety behind tips is unsafe', approach: 'Single-issue framing', why: 'Sleep guidance does not displace assessing current safety', keys: ['safety first'], mistake: 'Sequencing safety behind other needs' }),
    ]),
    Q('q6', 'treatment', 'What is the most appropriate treatment approach?', ['R2'], [
      O('a', 'Offer a trauma-focused, evidence-based psychotherapy within competence and coordinate a medication referral', 3,
        { r: 'Trauma-focused therapy plus medication referral', approach: 'Match to the guideline', why: 'PTSD is treated with a trauma-focused evidence-based psychotherapy delivered within competence, plus a coordinated medication referral to consider', keys: ['full PTSD picture', 'functional strain'], mistake: 'Offering only nonspecific supportive talk, or prescribing/directing medication outside scope' }),
      O('b', 'Simply advising Sean in a reassuring sort of way that he really just needs to put the whole thing behind him and to stop thinking about any of the difficult calls and to avoid every possible reminder of them for as long as he can manage to', -2,
        { r: 'Encouraging avoidance maintains PTSD', approach: 'Avoidance framing', why: 'Advising him to avoid all reminders maintains PTSD rather than treating it', keys: ['reduce avoidance in treatment'], mistake: 'Reinforcing avoidance' }),
      O('c', 'Starting him on a medication that you will select and adjust yourself over time', -2,
        { r: 'Prescribing is outside scope', approach: 'Prescribe framing', why: 'Counselors do not select or adjust medication; that is referred to a prescriber', keys: ['no prescriptive authority'], mistake: 'Acting outside scope of practice' }),
      O('d', 'Focusing sessions only on his sleep and leaving the trauma symptoms unaddressed', -1,
        { r: 'A narrow focus is inadequate', approach: 'Narrow-focus framing', why: 'Sleep alone does not treat PTSD; the trauma symptoms are addressed within competent care', keys: ['treat the PTSD'], mistake: 'Addressing only one symptom' }),
    ]),
    Q('q7', 'treatment', 'How should the counselor sequence trauma-focused work?', ['R2'], [
      O('a', 'Establish safety and stabilization first, then proceed with trauma-focused processing at a tolerable pace', 3,
        { r: 'Stabilize first, then process at a tolerable pace', approach: 'Phase the trauma work', why: 'Trauma-focused care establishes safety and stabilization first, then processes the trauma at a tolerable, titrated pace', keys: ['passive death thoughts', 'high arousal'], mistake: 'Diving into detailed trauma processing before establishing safety, stabilization, and readiness' }),
      O('b', 'Simply pushing Sean right away to recount every single one of the traumatic calls in the fullest and most vivid sensory detail possible during the very first session, without any prior stabilization or attention to his current level of arousal or safety at all', -2,
        { r: 'Premature exposure can destabilize', approach: 'Flooding framing', why: 'Detailed trauma processing without stabilization can destabilize and worsen symptoms', keys: ['stabilize first'], mistake: 'Processing trauma before stabilization' }),
      O('c', 'Avoiding any trauma-focused work indefinitely and only ever discussing unrelated topics', -1,
        { r: 'Never addressing trauma is inadequate', approach: 'Avoidance framing', why: 'After stabilization, trauma-focused processing is central; avoiding it entirely undertreats PTSD', keys: ['process when ready'], mistake: 'Never addressing the trauma' }),
      O('d', 'Leaving the pacing entirely up to how you personally feel each session', -1,
        { r: 'Unstructured pacing is not the standard', approach: 'Subjective framing', why: 'Pacing follows the client’s stabilization and tolerance, not the counselor’s mood', keys: ['titrated pacing'], mistake: 'Pacing by impression rather than readiness' }),
    ]),
    Q('q8', 'treatment', 'What should the plan include given his passive death thoughts?', ['R4'], [
      O('a', 'Collaborative safety planning with coping strategies, supports, and means-safety, revisited over time', 3,
        { r: 'Collaborative safety planning', approach: 'Build a safety plan', why: 'Passive ideation warrants a collaborative safety plan with coping strategies, supports, and means-safety, revisited as treatment proceeds', keys: ['better off dead', 'access to means possible'], mistake: 'Using a no-suicide contract instead of a collaborative safety plan' }),
      O('b', 'Simply having Sean sign a written no-suicide contract in which he formally promises the counselor that he will not harm himself, and then treating that single signed promise as the entire safety plan for him going forward', -2,
        { r: 'No-suicide contracts are not evidence-based', approach: 'Contract framing', why: 'No-suicide contracts do not ensure safety and are not a substitute for a collaborative safety plan', keys: ['safety planning, not contracts'], mistake: 'Relying on a no-suicide contract' }),
      O('c', 'Ignoring the passive thoughts entirely because there is no specific plan at this time', -2,
        { r: 'Ignoring ideation is unsafe', approach: 'Dismiss framing', why: 'Passive ideation in PTSD still warrants safety planning and monitoring', keys: ['address ideation'], mistake: 'Overlooking passive ideation' }),
      O('d', 'Deferring any safety planning until the trauma processing is complete', -1,
        { r: 'Deferring safety planning is unsafe', approach: 'Delay framing', why: 'Safety planning happens now, alongside trauma-focused care', keys: ['plan now'], mistake: 'Postponing safety planning' }),
    ]),
    Q('q9', 'treatment', 'How should the counselor coordinate his broader care?', ['R5'], [
      O('a', 'With his consent, coordinate with a prescriber and relevant supports and share what is needed for collaborative care', 3,
        { r: 'Coordinate with consent', approach: 'Coordinate within consent and scope', why: 'Collaborative PTSD care depends on consented coordination with a prescriber and relevant supports', keys: ['medication referral', 'marital and work strain'], mistake: 'Working in isolation, or sharing without consent' }),
      O('b', 'Simply going ahead and contacting his employer and his family and forwarding the entire contents of his clinical record to all of them right away without first pausing to obtain his consent, on the general theory that coordinating his care is plainly in his interest anyway', -2,
        { r: 'Coordinating without consent breaches confidentiality', approach: 'Assume-consent framing', why: 'A valid release is required before disclosure', keys: ['no release'], mistake: 'Disclosing before consent is documented' }),
      O('c', 'Adjusting his medication dose yourself based on how he reports feeling week to week', -2,
        { r: 'Adjusting medication exceeds scope', approach: 'Self-adjust framing', why: 'Counselors do not adjust medication; the prescriber does', keys: ['no prescriptive authority'], mistake: 'Acting outside scope of practice' }),
      O('d', 'Avoiding any contact with other providers so counseling stays entirely separate', -1,
        { r: 'No coordination undercuts care', approach: 'Siloed framing', why: 'Consented coordination supports collaborative PTSD care', keys: ['integrated care'], mistake: 'Refusing helpful, consented coordination' }),
    ]),
    Q('q10', 'counseling', 'Sean becomes highly activated recalling a call and says he needs to stop. The most therapeutic response is to:', ['R4'], [
      O('a', 'Slow down, use grounding to bring him back into tolerance, and titrate the work to what he can manage', 3,
        { r: 'Ground and titrate to tolerance', approach: 'Regulate arousal in the moment', why: 'Slowing down, grounding, and titrating the work to his window of tolerance keeps trauma processing safe and effective', keys: ['highly activated', 'asks to stop'], mistake: 'Either pushing him to continue while overwhelmed or abandoning the work entirely at the first sign of distress' }),
      O('b', 'Simply insisting that Sean must push all the way through the full and complete detailed recollection of the entire traumatic event right now no matter how overwhelmed and activated and distressed he happens to become in the process of doing so', -2,
        { r: 'Pushing through overwhelm can retraumatize', approach: 'Push-through framing', why: 'Forcing continuation past his window of tolerance can retraumatize and destabilize', keys: ['stay in tolerance'], mistake: 'Overwhelming the client' }),
      O('c', 'Immediately ending the session and avoiding the topic in all future sessions', -1,
        { r: 'Total avoidance undertreats PTSD', approach: 'Avoidance framing', why: 'The work is titrated and resumed when ready, not avoided permanently', keys: ['titrate and resume'], mistake: 'Abandoning trauma work at the first distress' }),
      O('d', 'Telling him his reaction is an overreaction and he simply needs to calm down', -1,
        { r: 'Dismissing his reaction invalidates him', approach: 'Dismiss framing', why: 'Calling it an overreaction invalidates him and undermines the alliance', keys: ['validate then ground'], mistake: 'Invalidating a trauma response' }),
    ]),
    Q('q11', 'counseling', 'How can the counselor best support Sean’s engagement in trauma work?', ['R4'], [
      O('a', 'Build trust and coping resources, explain the rationale, and proceed collaboratively at a pace he controls', 3,
        { r: 'Trust, coping, rationale, client-controlled pace', approach: 'Empower engagement in trauma work', why: 'Building trust and coping resources, explaining the rationale, and proceeding at a pace he controls supports engagement in hard trauma work', keys: ['avoidance of reminders', 'wants his life back'], mistake: 'Proceeding without building trust and coping resources or without giving him control over the pace' }),
      O('b', 'Simply telling Sean in a fairly firm and matter-of-fact way that he really just needs to toughen up and force himself to get over the whole thing quickly and completely on his own without any need for a gradual or collaborative approach at all', -2,
        { r: 'Toughen-up framing is harmful', approach: 'Toughen-up framing', why: '“Toughen up and get over it” misunderstands PTSD and ruptures the alliance', keys: ['collaborative pacing'], mistake: 'Demanding he simply get over it' }),
      O('c', 'Focusing the sessions mainly on cataloguing every symptom of the week in exhaustive detail each time', -1,
        { r: 'Cataloguing is not engagement', approach: 'Catalogue framing', why: 'Listing symptoms without building trust and coping does not engage trauma work', keys: ['forward-focused work'], mistake: 'Centering sessions on the symptom list' }),
      O('d', 'Telling him counseling cannot help unless he first stops avoiding all reminders on his own', -1,
        { r: 'Conditioning care is inappropriate', approach: 'Conditioning framing', why: 'Reducing avoidance is part of the work, not a precondition for it', keys: ['engagement matters'], mistake: 'Making care contingent on symptom change' }),
    ]),
    Q('q12', 'ethics', 'Sean asks the counselor not to document his passive death thoughts, fearing effects on his firefighting job. The most appropriate response is to:', ['R5'], [
      O('a', 'Explain the need for accurate clinical records, protect confidentiality within its limits, and address his job fears honestly', 3,
        { r: 'Accurate records; confidentiality within limits', approach: 'Balance accurate records and confidentiality', why: 'Records are kept accurate for safety and care while confidentiality is protected within its limits and his job fears addressed honestly', keys: ['fears job impact', 'passive death thoughts'], mistake: 'Either omitting safety-relevant information from the record or breaching confidentiality to his employer' }),
      O('b', 'Simply agreeing to leave every mention of the passive death thoughts and the associated safety concerns entirely out of the clinical record altogether, specifically so that nothing about them could ever possibly come to the attention of his fire department or affect his job', -2,
        { r: 'Omitting safety data is improper', approach: 'Omit-records framing', why: 'Safety-relevant clinical information is documented accurately, not omitted to protect a job', keys: ['accurate documentation'], mistake: 'Falsifying the record by omission' }),
      O('c', 'Telling him his employer will definitely be informed regardless of consent', -2,
        { r: 'Misstating protections is improper', approach: 'Breach framing', why: 'His information is disclosed only with consent or a lawful exception, not to the employer by default', keys: ['confidentiality protected'], mistake: 'Misstating confidentiality protections' }),
      O('d', 'Refusing to discuss documentation or confidentiality and changing the subject', -1,
        { r: 'Evasion undermines trust', approach: 'Evasion framing', why: 'Documentation and confidentiality are explained honestly, not evaded', keys: ['transparent limits'], mistake: 'Being evasive about records and confidentiality' }),
    ]),
    Q('q13', 'ethics', 'The counselor has limited training in trauma-focused therapies. The most ethical course of action is to:', ['R5'], [
      O('a', 'Seek training, supervision, or consultation, or refer, so trauma-focused care is delivered competently', 3,
        { r: 'Get supervision/training or refer for competence', approach: 'Practice within competence', why: 'ACA C.2. requires seeking training, supervision, or consultation, or referring, so trauma-focused care is delivered competently', keys: ['limited trauma training', 'wants effective care'], mistake: 'Delivering an unfamiliar trauma-focused protocol without training, supervision, or referral' }),
      O('b', 'Simply going ahead and attempting to deliver an intensive trauma-focused processing protocol entirely on his or her own regardless of the limited training, without ever obtaining any supervision or consultation and without considering referring Sean to a more experienced clinician', -2,
        { r: 'Practicing beyond competence is improper', approach: 'Overreach framing', why: 'Delivering an unfamiliar trauma protocol without training, supervision, or referral exceeds competence', keys: ['competence first'], mistake: 'Practicing beyond competence' }),
      O('c', 'Telling Sean his symptoms are not serious enough to need specialized trauma care', -2,
        { r: 'Minimizing PTSD is unsafe', approach: 'Downplay framing', why: 'Chronic PTSD with risk warrants competent, coordinated trauma care', keys: ['serious presentation'], mistake: 'Underestimating the presentation' }),
      O('d', 'Transferring the case at once with no explanation, coordination, or plan for the transition', -1,
        { r: 'Abrupt transfer mishandles care', approach: 'Uncoordinated handoff', why: 'Where a referral is needed it is coordinated with explanation and a plan, not done abruptly', keys: ['coordinated referral'], mistake: 'Dropping the client without a plan' }),
    ]),
  ],
};

// ============================================================================
// D212 — Acute Stress Disorder (F43.0) — Trauma — hard
// ============================================================================
const D212 = {
  id: 'ncmhce-D212',
  title: 'Acute trauma symptoms twelve days after an armed robbery',
  category: 'Trauma',
  difficulty: 'hard',
  primaryDiagnosis: { name: 'Acute Stress Disorder', code: 'F43.0' },
  diagnosis: { name: 'Acute Stress Disorder', code: 'F43.0' },
  differentialOptions: [
    { id: 'do1', name: 'Acute Stress Disorder', isCorrect: true },
    { id: 'do2', name: 'Posttraumatic Stress Disorder', isCorrect: false },
    { id: 'do3', name: 'Adjustment Disorder, with Anxiety', isCorrect: false },
    { id: 'do4', name: 'Panic Disorder', isCorrect: false },
  ],
  narrative: {
    intake:
      'Amara Osei, a 29-year-old store clerk, was held at gunpoint during a robbery twelve days ago. Since then she has had intrusive memories, ' +
      'nightmares, feeling dazed and unreal, difficulty recalling parts of the event, avoidance of the store, poor sleep, and a heightened startle.',
    session1:
      'Her symptoms began after actual threat to her life and have lasted more than three days but under a month, consistent with acute stress ' +
      'disorder rather than PTSD, which requires a duration beyond one month. Dissociative and intrusion symptoms are prominent.',
    session2:
      'Her symptoms are trauma-specific and exceed a milder adjustment reaction, and her fear is tied to the trauma and its reminders rather than ' +
      'unexpected out-of-the-blue attacks. The counselor assesses her safety and plans early, supportive, trauma-informed care.',
  },
  diagnosticRationale:
    'Trauma exposure to actual threat to life followed by intrusion, dissociation, avoidance, and arousal lasting from three days to one month, best ' +
    'fits acute stress disorder, distinct from PTSD (duration beyond one month), a milder adjustment reaction, and panic disorder (unexpected attacks).',
  references: [
    { id: 'R1', source: 'DSM-5-TR', detail: 'Acute stress disorder: trauma exposure; intrusion/dissociation/avoidance/arousal; 3 days to 1 month' },
    { id: 'R2', source: 'NICE guidelines', detail: 'Early trauma care: watchful waiting and trauma-focused CBT where indicated; avoid harmful debriefing' },
    { id: 'R3', source: 'C-SSRS', detail: 'Structured suicide-risk screening after acute trauma' },
    { id: 'R4', source: 'Corey (Theory & Practice)', detail: 'Supportive, trauma-informed engagement and stabilization' },
    { id: 'R5', source: 'ACA Code of Ethics', detail: 'A.1., B.2., C.2.: welfare, safety, coordination, and competence' },
  ],
  questions: [
    Q('q1', 'intake', 'What is most important to confirm to support acute stress disorder?', ['R1'], [
      O('a', 'Trauma exposure with intrusion, dissociation, avoidance, or arousal lasting from three days to one month', 3,
        { r: 'Trauma symptoms in the 3-day to 1-month window', approach: 'Confirm the core criteria', why: 'Acute stress disorder requires trauma exposure with intrusion, dissociation, avoidance, or arousal lasting three days to one month', keys: ['armed robbery twelve days ago', 'dissociation and intrusion'], mistake: 'Diagnosing acute stress disorder without confirming the symptom pattern and the specific time window' }),
      O('b', 'Mainly whether Amara is able to describe in complete and exhaustive detail every single second of the robbery itself in full sensory detail right away during the very first session', -1,
        { r: 'Exhaustive recounting is not the criterion', approach: 'Recount framing', why: 'Detailed recounting is not what defines the disorder and can be destabilizing early on', keys: ['syndrome-based focus'], mistake: 'Requiring exhaustive recounting rather than confirming the criteria' }),
      O('c', 'That her symptoms have gotten a little worse over the past few days than earlier in the week', -1,
        { r: 'Recent change is not the defining feature', approach: 'Recent-change framing', why: 'The post-trauma syndrome within the time window, not the exact recent trajectory, defines the disorder', keys: ['time-window syndrome'], mistake: 'Confusing the recent course with the criteria' }),
      O('d', 'That she currently meets the full symptom count required for a discrete manic episode at this time', 0,
        { r: 'Manic count is not relevant', approach: 'Mania-criteria framing', why: 'The focus is a trauma disorder, not a manic episode', keys: ['trauma-focused'], mistake: 'Applying manic criteria here' }),
    ]),
    Q('q2', 'core', 'Which feature best distinguishes this from PTSD?', ['R1'], [
      O('a', 'Her symptoms have lasted under a month (twelve days), within the acute stress disorder window rather than PTSD’s duration', 3,
        { r: 'Duration under one month', approach: 'Contrast the duration', why: 'PTSD requires symptoms beyond one month; hers began twelve days ago, within the acute stress disorder window', keys: ['twelve days ago', 'under one month'], mistake: 'Labeling symptoms within the first month as PTSD' }),
      O('b', 'The fact that ever since the frightening robbery Amara has quite clearly been experiencing a genuinely distressing and painful set of trauma-related symptoms that are affecting her a great deal in her daily life', -1,
        { r: 'Trauma symptoms occur in both', approach: 'Symptom framing', why: 'Trauma-related symptoms occur in both; the duration is what differs', keys: ['shared feature'], mistake: 'Using the presence of symptoms to differentiate' }),
      O('c', 'The nightmares and the heightened startle that she describes right now', -1,
        { r: 'These symptoms are nonspecific to duration', approach: 'Symptom framing', why: 'Nightmares and startle occur in both; the duration differs', keys: ['shared symptoms'], mistake: 'Reading individual symptoms as decisive for duration' }),
      O('d', 'The way her symptoms feel a little worse on days she has slept poorly', 0,
        { r: 'Sleep effects are nonspecific', approach: 'Sleep framing', why: 'Worse symptoms after poor sleep does not distinguish the two', keys: ['nonspecific factor'], mistake: 'Over-reading a sleep effect' }),
    ]),
    Q('q3', 'core', 'How does this differ from an adjustment disorder with anxiety?', ['R1'], [
      O('a', 'She has trauma-specific intrusion and dissociation after life threat, exceeding a milder non-specific adjustment reaction', 3,
        { r: 'Trauma-specific symptoms after life threat', approach: 'Contrast specificity and exposure', why: 'An adjustment disorder is a milder, non-specific reaction; hers has trauma-specific intrusion and dissociation after threat to life', keys: ['gunpoint robbery', 'intrusion and dissociation'], mistake: 'Downgrading a trauma-specific acute stress reaction to a non-specific adjustment disorder' }),
      O('b', 'The fact that there has very clearly and understandably been a great deal of genuine stress and upset present in Amara’s life over these recent days as she tries to cope with what happened to her', -1,
        { r: 'Stress is present in both', approach: 'Stressor framing', why: 'Stress accompanies both; the trauma-specific symptom pattern after life threat is what differs', keys: ['shared feature'], mistake: 'Using the presence of stress to differentiate' }),
      O('c', 'The worry and the distress that she feels about her current circumstances', -1,
        { r: 'Distress is nonspecific', approach: 'Distress framing', why: 'Distress occurs in both; the trauma-specific symptoms differ', keys: ['shared affect'], mistake: 'Reading distress as decisive' }),
      O('d', 'The way her distress feels a little worse during especially busy days', 0,
        { r: 'Stress reactivity is nonspecific', approach: 'Stress framing', why: 'Worsening on busy days does not distinguish the two', keys: ['nonspecific reactivity'], mistake: 'Using stress sensitivity to differentiate' }),
    ]),
    Q('q4', 'core', 'How does this differ from panic disorder?', ['R1'], [
      O('a', 'Her fear is cued by the trauma and its reminders, not recurrent unexpected out-of-the-blue attacks', 3,
        { r: 'Trauma-cued, not unexpected attacks', approach: 'Contrast the trigger', why: 'Panic disorder features unexpected attacks; her fear is cued by the trauma and its reminders', keys: ['fear tied to the robbery and reminders', 'avoids the store'], mistake: 'Reading trauma-cued fear as unexpected panic disorder' }),
      O('b', 'The fact that Amara really does quite understandably feel very frightened and physically activated and strongly distressed at various points as she copes with the aftermath of what she has been through', -1,
        { r: 'Fear occurs in both', approach: 'Fear framing', why: 'Fear and physical symptoms occur in both; the cued versus unexpected pattern differs', keys: ['shared feature'], mistake: 'Using fear itself to differentiate' }),
      O('c', 'The startle and the poor sleep that she describes right now', -1,
        { r: 'These symptoms are nonspecific', approach: 'Symptom framing', why: 'Startle and poor sleep occur in both; the trigger pattern differs', keys: ['shared symptoms'], mistake: 'Reading physical symptoms as decisive' }),
      O('d', 'The way her fear feels a little worse in warmer, crowded rooms', 0,
        { r: 'Environmental effects are nonspecific', approach: 'Environment framing', why: 'A crowded room does not distinguish the two', keys: ['nonspecific factor'], mistake: 'Over-reading an environmental effect' }),
    ]),
    Q('q5', 'intake', 'What is the single most important assessment step in the early aftermath?', ['R3'], [
      O('a', 'Assess her safety and suicide risk and her current stability, since acute trauma can elevate risk', 3,
        { r: 'Assess safety, risk, and stability now', approach: 'Screen safety and stability', why: 'Acute trauma can elevate risk, so assessing safety, suicide risk, and current stability comes first', keys: ['recent life threat', 'dissociation and distress'], mistake: 'Moving to process trauma details before assessing current safety and stability' }),
      O('b', 'Mainly obtaining a very complete and exhaustive moment-by-moment narrative of the entire robbery in the fullest possible sensory detail right away in the first session before turning at all to the question of her present safety and stability', -2,
        { r: 'Detailed recounting first is unsafe', approach: 'Recount-first framing', why: 'Pushing a detailed trauma narrative before assessing safety and stabilizing can destabilize and skips risk assessment', keys: ['safety and stabilization first'], mistake: 'Eliciting detailed trauma memories before assessing safety' }),
      O('c', 'Assuming there is no risk because she is physically unharmed', -2,
        { r: 'Assuming no risk is unsafe', approach: 'Dismissal framing', why: 'Being physically unharmed does not rule out risk; structured assessment is required', keys: ['assess regardless'], mistake: 'Dismissing risk based on physical status' }),
      O('d', 'Focusing only on getting her back to work for now and returning to any safety questions much later', -1,
        { r: 'Sequencing safety behind logistics is unsafe', approach: 'Single-issue framing', why: 'Return-to-work logistics do not displace assessing current safety', keys: ['safety first'], mistake: 'Sequencing safety behind other needs' }),
    ]),
    Q('q6', 'treatment', 'What is the most appropriate early intervention approach?', ['R2'], [
      O('a', 'Provide supportive, trauma-informed stabilization and psychoeducation, with trauma-focused CBT where indicated', 3,
        { r: 'Supportive stabilization; trauma-focused CBT if indicated', approach: 'Match to early-trauma guidance', why: 'Early care provides supportive, trauma-informed stabilization and psychoeducation, with trauma-focused CBT where indicated', keys: ['acute aftermath', 'dissociation and intrusion'], mistake: 'Forcing a single-session emotional debriefing or diving into intensive processing prematurely' }),
      O('b', 'Simply insisting that Amara must sit through a single intensive session in which she is required to fully relive and recount every distressing detail of the robbery all at once, on the assumption that forcing it all out immediately will somehow prevent any later problems', -2,
        { r: 'Single-session debriefing can harm', approach: 'Debriefing framing', why: 'Mandatory single-session emotional debriefing is not recommended and can be harmful', keys: ['avoid forced debriefing'], mistake: 'Using a harmful debriefing approach' }),
      O('c', 'Starting her on a medication that you will select and adjust yourself over time', -2,
        { r: 'Prescribing is outside scope', approach: 'Prescribe framing', why: 'Counselors do not select or adjust medication; that is referred to a prescriber', keys: ['no prescriptive authority'], mistake: 'Acting outside scope of practice' }),
      O('d', 'Advising her to simply avoid all reminders of the robbery indefinitely', -1,
        { r: 'Encouraging total avoidance is unhelpful', approach: 'Avoidance framing', why: 'Broad indefinite avoidance can entrench symptoms; supported, graded re-engagement is used when ready', keys: ['supported re-engagement'], mistake: 'Reinforcing avoidance' }),
    ]),
    Q('q7', 'treatment', 'How should the counselor handle her wish to avoid the store where it happened?', ['R2'], [
      O('a', 'Normalize early avoidance, support safety, and plan supported, graded re-engagement when she is ready', 3,
        { r: 'Normalize now; graded re-engagement when ready', approach: 'Balance safety and re-engagement', why: 'Early avoidance is normalized while safety is supported and a supported, graded re-engagement is planned for when she is ready', keys: ['avoids the store', 'recent trauma'], mistake: 'Either forcing immediate return or endorsing permanent avoidance of the reminder' }),
      O('b', 'Simply reassuring Amara that it is perfectly fine and entirely reasonable for her to go right on completely avoiding the store and every other reminder of the robbery permanently and indefinitely for as long as she possibly can, with no plan for any eventual re-engagement at all', -2,
        { r: 'Endorsing permanent avoidance entrenches it', approach: 'Permission framing', why: 'Permanent avoidance can entrench trauma symptoms; graded re-engagement is planned', keys: ['graded re-engagement'], mistake: 'Reinforcing avoidance' }),
      O('c', 'Forcing her to return to the store immediately with no preparation or readiness', -2,
        { r: 'Forcing immediate return can harm', approach: 'Flooding framing', why: 'Re-engagement is graded and readiness-based, not forced in the acute aftermath', keys: ['graded and ready'], mistake: 'Forcing premature exposure' }),
      O('d', 'Leaving the avoidance entirely unaddressed in the plan', -1,
        { r: 'Ignoring avoidance is inadequate', approach: 'Ignore framing', why: 'Avoidance is addressed with a plan for supported re-engagement', keys: ['address avoidance'], mistake: 'Omitting avoidance from the plan' }),
    ]),
    Q('q8', 'treatment', 'What should the plan include to monitor her course?', ['R2'], [
      O('a', 'Monitor symptoms over the coming weeks for resolution or progression to PTSD and adjust care accordingly', 3,
        { r: 'Monitor for resolution or progression to PTSD', approach: 'Track the trajectory', why: 'Acute stress reactions are monitored over the coming weeks for resolution or progression to PTSD, adjusting care accordingly', keys: ['within the first month', 'may resolve or persist'], mistake: 'Assuming the acute reaction will simply resolve without monitoring for progression to PTSD' }),
      O('b', 'Simply assuming that because the robbery has already happened and is now over and done with, all of Amara’s symptoms are therefore certain to fade away entirely on their own very soon regardless, and that there is no real need to monitor her course over the coming weeks at all', -1,
        { r: 'Assuming resolution misses monitoring', approach: 'Assume-resolved framing', why: 'Symptoms may resolve or progress; monitoring the trajectory guides care', keys: ['monitor the course'], mistake: 'Skipping needed monitoring' }),
      O('c', 'Discharging her immediately after one session with no follow-up plan', -1,
        { r: 'Immediate discharge is premature', approach: 'Premature-discharge framing', why: 'A follow-up plan is arranged to monitor her course, not an immediate discharge', keys: ['follow-up plan'], mistake: 'Discharging without monitoring' }),
      O('d', 'Waiting many months before checking on her at all', -1,
        { r: 'A long gap misses the window', approach: 'Delay framing', why: 'The early weeks are the key monitoring window, not many months later', keys: ['timely monitoring'], mistake: 'Leaving too long a gap in the critical window' }),
    ]),
    Q('q9', 'treatment', 'How should the counselor coordinate her broader supports?', ['R5'], [
      O('a', 'With her consent, coordinate medical, workplace, and victim-support resources and share what is needed', 3,
        { r: 'Coordinate supports with consent', approach: 'Coordinate within consent and scope', why: 'With consent, medical, workplace, and victim-support resources are coordinated to support recovery', keys: ['recent violent crime', 'work reintegration'], mistake: 'Either mobilizing supports without consent or failing to connect her to appropriate resources' }),
      O('b', 'Simply going ahead and contacting her employer and various other parties and sharing all of the details of the robbery and her symptoms with each of them right away without first pausing to obtain her consent, on the assumption that it must be in her interest', -2,
        { r: 'Disclosing without consent breaches confidentiality', approach: 'Assume-consent framing', why: 'Mobilizing supports still requires her consent absent a safety exception', keys: ['no consent'], mistake: 'Disclosing to others without consent' }),
      O('c', 'Handling everything within the session alone and connecting her to no resources at all', -1,
        { r: 'Excluding resources weakens care', approach: 'Isolation framing', why: 'Consented connection to appropriate resources strengthens acute-trauma recovery', keys: ['mobilize resources'], mistake: 'Excluding helpful, consented resources' }),
      O('d', 'Deciding what to share based only on personal feelings rather than her consent and needs', -1,
        { r: 'Personal feelings are not the standard', approach: 'Subjective framing', why: 'Coordination follows her consent and needs, not personal feelings', keys: ['consent-based'], mistake: 'Basing coordination on personal feelings' }),
    ]),
    Q('q10', 'counseling', 'Amara breaks down describing feeling unreal and detached since the robbery. The most therapeutic response is to:', ['R4'], [
      O('a', 'Normalize dissociation as a common trauma response, use grounding, and support her sense of safety', 3,
        { r: 'Normalize dissociation; ground; support safety', approach: 'Stabilize and normalize', why: 'Normalizing dissociation as a common acute-trauma response, using grounding, and supporting safety stabilizes her', keys: ['feeling unreal and detached', 'recent trauma'], mistake: 'Either alarming her about the dissociation or pushing detailed trauma processing while she is dissociating' }),
      O('b', 'Simply reacting with a good deal of visible alarm yourself and telling Amara that the strange unreal and detached feelings she is describing are a very worrying sign that something is seriously and frighteningly wrong with her mind, which would only heighten her fear', -1,
        { r: 'Alarming her heightens distress', approach: 'Alarm framing', why: 'Reacting with alarm about normal dissociation heightens her fear', keys: ['normalize the response'], mistake: 'Pathologizing a common trauma response' }),
      O('c', 'Pushing her to recount the full trauma in detail while she is dissociating', -2,
        { r: 'Processing during dissociation can harm', approach: 'Flooding framing', why: 'Detailed processing while she is dissociating can destabilize; grounding comes first', keys: ['ground first'], mistake: 'Processing trauma during active dissociation' }),
      O('d', 'Telling her the feelings are nothing and she should simply ignore them', -1,
        { r: 'Dismissing the experience misses the work', approach: 'Dismiss framing', why: 'The dissociation is engaged, normalized, and grounded, not dismissed', keys: ['engage and ground'], mistake: 'Dismissing a meaningful trauma response' }),
    ]),
    Q('q11', 'counseling', 'How can the counselor best support Amara’s recovery and sense of control?', ['R4'], [
      O('a', 'Reinforce her coping strengths, restore routine and safety, and support choices that rebuild her sense of control', 3,
        { r: 'Reinforce strengths; restore routine; rebuild control', approach: 'Rebuild safety and agency', why: 'Reinforcing coping strengths, restoring routine and safety, and supporting her choices rebuilds a sense of control after trauma', keys: ['loss of safety', 'wants to feel normal again'], mistake: 'Overwhelming her or taking over decisions rather than rebuilding her own sense of control' }),
      O('b', 'Simply telling Amara in a fairly firm and matter-of-fact way that she really just needs to put the whole frightening robbery completely behind her right now and to get herself back to her normal routine immediately and entirely on her own through willpower alone', -1,
        { r: 'Willpower framing is unhelpful', approach: 'Toughen-up framing', why: '“Just put it behind you” misunderstands acute trauma and undermines the alliance', keys: ['supported recovery'], mistake: 'Demanding she simply move on' }),
      O('c', 'Focusing the sessions mainly on cataloguing every frightening detail in exhaustive detail each time', -1,
        { r: 'Cataloguing details is not support', approach: 'Catalogue framing', why: 'Repeatedly rehearsing details without stabilization does not support recovery', keys: ['stabilize and support'], mistake: 'Centering sessions on the details' }),
      O('d', 'Telling her counseling cannot help unless she first returns to the store on her own', -1,
        { r: 'Conditioning care is inappropriate', approach: 'Conditioning framing', why: 'Support proceeds now, not contingent on her first confronting the reminder alone', keys: ['engagement matters'], mistake: 'Making care contingent on exposure' }),
    ]),
    Q('q12', 'ethics', 'Amara asks whether details she shares could be used in the criminal case against the robber. The most appropriate response is to:', ['R5'], [
      O('a', 'Explain confidentiality and its limits honestly, including how records could be subject to legal process', 3,
        { r: 'Explain confidentiality and legal limits honestly', approach: 'Give accurate informed-consent information', why: 'The counselor honestly explains confidentiality and its limits, including that records can be subject to legal process, so she can make informed choices', keys: ['asks about the criminal case', 'wants to understand privacy'], mistake: 'Either promising absolute confidentiality or being vague about how records could be subject to legal process' }),
      O('b', 'Simply reassuring Amara in a very confident and definitive sort of way that absolutely nothing she ever says in any of her counseling sessions could ever under any circumstance at all be accessed or used by anyone in connection with the criminal case, without accurately explaining the actual limits', -2,
        { r: 'Absolute promises are inaccurate', approach: 'Absolutist framing', why: 'Records can be subject to legal process; an absolute promise is inaccurate', keys: ['honest limits'], mistake: 'Overpromising absolute confidentiality' }),
      O('c', 'Telling her that everything she says will automatically be handed to the prosecutor', -2,
        { r: 'Misstating the process is inaccurate', approach: 'Breach framing', why: 'Records are not automatically handed over; disclosure follows consent or legal process', keys: ['accurate information'], mistake: 'Misstating how disclosure works' }),
      O('d', 'Refusing to discuss the question and simply changing the subject', -1,
        { r: 'Evasion undermines informed consent', approach: 'Evasion framing', why: 'Her question is answered honestly, supporting informed consent, not evaded', keys: ['transparent limits'], mistake: 'Being evasive about confidentiality' }),
    ]),
    Q('q13', 'ethics', 'A workplace manager calls the counselor asking how Amara is doing. The most appropriate response is to:', ['R5'], [
      O('a', 'Neither confirm nor deny the relationship without consent, and disclose only with a valid release or lawful basis', 3,
        { r: 'Protect confidentiality; disclose only with consent', approach: 'Protect confidentiality with third parties', why: 'Without a valid release the counselor does not confirm the relationship or disclose information to the workplace', keys: ['manager calls', 'no release on file'], mistake: 'Disclosing to the workplace without a valid release or lawful basis' }),
      O('b', 'Simply going ahead and openly discussing all of the details of Amara’s condition and her progress and her symptoms with the manager over the phone right then and there, on the general assumption that since it is her workplace calling they must obviously have a legitimate right to know how she is doing', -2,
        { r: 'Disclosing to the workplace breaches confidentiality', approach: 'Assume-entitlement framing', why: 'The workplace has no right to her clinical information without a valid release', keys: ['no release'], mistake: 'Disclosing without authorization' }),
      O('c', 'Telling the manager you cannot say anything, then sharing a few details anyway to be helpful', -2,
        { r: 'Partial disclosure still breaches confidentiality', approach: 'Partial-disclosure framing', why: 'Even sharing a few details without a release breaches confidentiality', keys: ['no disclosure without release'], mistake: 'Leaking details despite disclaiming' }),
      O('d', 'Promising the manager a full written report as soon as possible', -2,
        { r: 'Promising a report without consent is improper', approach: 'Overcommit framing', why: 'No report is provided to the workplace without her valid consent', keys: ['consent required'], mistake: 'Committing to unauthorized disclosure' }),
    ]),
  ],
};

// ============================================================================
// D213 — Adjustment Disorder, with Mixed Anxiety and Depressed Mood (F43.23) — Trauma — hard
// ============================================================================
const D213 = {
  id: 'ncmhce-D213',
  title: 'Mixed anxiety and low mood after a serious medical diagnosis',
  category: 'Trauma',
  difficulty: 'hard',
  primaryDiagnosis: { name: 'Adjustment Disorder, with Mixed Anxiety and Depressed Mood', code: 'F43.23' },
  diagnosis: { name: 'Adjustment Disorder, with Mixed Anxiety and Depressed Mood', code: 'F43.23' },
  differentialOptions: [
    { id: 'do1', name: 'Adjustment Disorder, with Mixed Anxiety and Depressed Mood', isCorrect: true },
    { id: 'do2', name: 'Major Depressive Disorder, Moderate', isCorrect: false },
    { id: 'do3', name: 'Generalized Anxiety Disorder', isCorrect: false },
    { id: 'do4', name: 'Posttraumatic Stress Disorder', isCorrect: false },
  ],
  narrative: {
    intake:
      'Gordon Blake, a 52-year-old, presents about six weeks after receiving a serious chronic-illness diagnosis with a mix of low mood, tearfulness, ' +
      'worry about the future, restlessness, and trouble sleeping that are out of proportion to his usual coping but not meeting a full disorder.',
    session1:
      'His symptoms emerged within three months of an identifiable stressor—the diagnosis—and cause marked distress and some impairment without ' +
      'meeting full criteria for major depression or generalized anxiety, consistent with an adjustment disorder with mixed features.',
    session2:
      'His reaction does not stem from a life-threatening traumatic event with intrusion and dissociation, and his worry is tied to the diagnosis ' +
      'rather than pervasive and long-standing. The counselor screens his suicide risk, finds none, and plans supportive, skills-based counseling.',
  },
  diagnosticRationale:
    'Emotional and behavioral symptoms of both anxiety and low mood emerging within three months of an identifiable stressor, causing marked distress ' +
    'or impairment but not meeting full criteria for another disorder, best fits adjustment disorder with mixed anxiety and depressed mood, distinct ' +
    'from major depression, generalized anxiety disorder, and PTSD.',
  references: [
    { id: 'R1', source: 'DSM-5-TR', detail: 'Adjustment disorder: symptoms within 3 months of a stressor; marked distress/impairment; not another disorder' },
    { id: 'R2', source: 'NICE guidelines', detail: 'Supportive, problem-focused psychological intervention for adjustment reactions' },
    { id: 'R3', source: 'C-SSRS', detail: 'Structured suicide-risk screening' },
    { id: 'R4', source: 'Corey (Theory & Practice)', detail: 'Supportive, strengths-based counseling and coping-skills building' },
    { id: 'R5', source: 'ACA Code of Ethics', detail: 'A.1., B.2., C.2.: welfare, safety, coordination, and competence' },
  ],
  questions: [
    Q('q1', 'intake', 'What is most important to confirm to support an adjustment disorder with mixed features?', ['R1'], [
      O('a', 'Anxiety and low-mood symptoms within three months of an identifiable stressor, distressing but not meeting another full disorder', 3,
        { r: 'Stressor-linked mixed symptoms, subthreshold', approach: 'Confirm the core criteria', why: 'An adjustment disorder requires symptoms within three months of a stressor, causing marked distress or impairment without meeting full criteria for another disorder', keys: ['six weeks after a diagnosis', 'mixed anxiety and low mood, subthreshold'], mistake: 'Diagnosing an adjustment disorder without confirming the stressor link and that full criteria for another disorder are not met' }),
      O('b', 'Mainly whether Gordon is able to identify one single specific childhood event that he is personally quite convinced first made him the sort of person who reacts strongly to stressful news like this', -1,
        { r: 'A remote origin is not the criterion', approach: 'Origin framing', why: 'A remote developmental origin is not what defines an adjustment disorder', keys: ['recent-stressor focus'], mistake: 'Chasing a remote origin rather than confirming the criteria' }),
      O('c', 'That his symptoms have gotten a little worse over the past few days than earlier in the week', -1,
        { r: 'Recent change is not the defining feature', approach: 'Recent-change framing', why: 'The stressor-linked, subthreshold pattern, not the exact recent trajectory, defines the disorder', keys: ['stressor-linked pattern'], mistake: 'Confusing the recent course with the criteria' }),
      O('d', 'That he currently meets the full symptom count required for a discrete manic episode at this time', 0,
        { r: 'Manic count is not relevant', approach: 'Mania-criteria framing', why: 'The focus is a stressor-related disorder, not a manic episode', keys: ['stressor-focused'], mistake: 'Applying manic criteria here' }),
    ]),
    Q('q2', 'core', 'Which feature best distinguishes this from major depressive disorder?', ['R1'], [
      O('a', 'His symptoms are stressor-linked and do not meet full major-depressive-episode criteria in number and severity', 3,
        { r: 'Subthreshold and stressor-linked', approach: 'Contrast against full criteria', why: 'MDD requires the full episode criteria; his symptoms are stressor-linked and fall short of that threshold', keys: ['does not meet full MDD criteria', 'tied to the diagnosis'], mistake: 'Diagnosing MDD when the criteria are not fully met and the reaction is stressor-bound' }),
      O('b', 'The fact that ever since receiving the difficult news of his diagnosis Gordon has quite understandably been feeling genuinely low and down and tearful and generally distressed a fair amount of the time', -1,
        { r: 'Low mood occurs in both', approach: 'Mood framing', why: 'Low mood occurs in both; whether full criteria are met is what differs', keys: ['shared feature'], mistake: 'Using low mood to differentiate' }),
      O('c', 'The poor sleep and the tearfulness that he describes right now', -1,
        { r: 'These symptoms are nonspecific', approach: 'Symptom framing', why: 'Poor sleep and tearfulness occur in both; the threshold differs', keys: ['shared symptoms'], mistake: 'Reading nonspecific symptoms as decisive' }),
      O('d', 'The way his mood dips a little more in the mornings than later in the day', 0,
        { r: 'Diurnal pattern is not diagnostic', approach: 'Time-of-day framing', why: 'Diurnal variation does not distinguish the two', keys: ['nonspecific timing'], mistake: 'Over-reading a circadian pattern' }),
    ]),
    Q('q3', 'core', 'How does this differ from generalized anxiety disorder?', ['R1'], [
      O('a', 'His worry is recent and tied to the diagnosis, not chronic, pervasive worry across many domains for six months or more', 3,
        { r: 'Recent, stressor-tied worry versus chronic GAD', approach: 'Contrast onset and breadth', why: 'GAD is chronic, pervasive worry for six months or more; his worry is recent and tied to the diagnosis', keys: ['worry since the diagnosis', 'not long-standing or pervasive'], mistake: 'Reading a recent, stressor-linked worry as chronic generalized anxiety disorder' }),
      O('b', 'The fact that Gordon really does quite understandably tend to feel genuinely anxious and worried and on edge and preoccupied about what may lie ahead for him during this difficult period following his diagnosis', -1,
        { r: 'Worry occurs in both', approach: 'Worry framing', why: 'Worry occurs in both; the chronicity and breadth are what differ', keys: ['shared feature'], mistake: 'Using worry itself to differentiate' }),
      O('c', 'The restlessness and the tension that he describes right now', -1,
        { r: 'These symptoms are nonspecific', approach: 'Symptom framing', why: 'Restlessness and tension occur in both; the chronicity differs', keys: ['shared symptoms'], mistake: 'Reading nonspecific symptoms as decisive' }),
      O('d', 'The way his worry feels a little worse on especially busy days', 0,
        { r: 'Stress reactivity is nonspecific', approach: 'Stress framing', why: 'Worsening on busy days does not distinguish the two', keys: ['nonspecific reactivity'], mistake: 'Using stress sensitivity to differentiate' }),
    ]),
    Q('q4', 'core', 'How does this differ from posttraumatic stress disorder?', ['R1'], [
      O('a', 'His stressor is a serious diagnosis, not a life-threatening traumatic event, and he lacks intrusion and dissociation', 3,
        { r: 'No Criterion-A trauma or trauma symptoms', approach: 'Contrast the stressor and symptoms', why: 'PTSD follows a life-threatening trauma with intrusion and dissociation; his stressor is a diagnosis and he lacks those trauma-specific symptoms', keys: ['stressor is a diagnosis', 'no intrusion or dissociation'], mistake: 'Applying a trauma-disorder frame to a non-traumatic stressor without trauma-specific symptoms' }),
      O('b', 'The fact that receiving this serious diagnosis has very clearly and understandably been a genuinely stressful and upsetting and difficult experience for Gordon to have to come to terms with over these recent weeks', -1,
        { r: 'A stressful event occurs in both', approach: 'Stressor framing', why: 'A stressful event precedes both; a qualifying trauma with trauma-specific symptoms is what differs', keys: ['shared feature'], mistake: 'Using the stressful event to differentiate' }),
      O('c', 'The worry and the low mood that he feels about his current circumstances', -1,
        { r: 'Distress is nonspecific', approach: 'Distress framing', why: 'Distress occurs in both; trauma-specific symptoms differ', keys: ['shared affect'], mistake: 'Reading distress as decisive' }),
      O('d', 'The way his distress feels a little worse after difficult medical appointments', 0,
        { r: 'Trigger sensitivity is nonspecific', approach: 'Trigger framing', why: 'Feeling worse after appointments does not indicate PTSD', keys: ['nonspecific factor'], mistake: 'Over-reading a trigger effect' }),
    ]),
    Q('q5', 'intake', 'What assessment step should not be skipped despite the subthreshold, non-suicidal picture?', ['R3'], [
      O('a', 'A structured suicide-risk assessment, since a serious diagnosis and distress can elevate risk', 3,
        { r: 'Structured suicide-risk assessment', approach: 'Screen risk directly', why: 'A serious diagnosis and marked distress can elevate suicide risk, so a structured assessment is done regardless of severity level', keys: ['serious diagnosis', 'marked distress'], mistake: 'Skipping suicide-risk screening because the presentation looks like a milder adjustment reaction' }),
      O('b', 'Mainly obtaining a very complete and exhaustive medical history of every symptom and test and appointment related to his illness in fine detail before turning at all to the question of his present safety', -2,
        { r: 'Deferring safety is unsafe', approach: 'History-first framing', why: 'An exhaustive medical history does not displace assessing current suicide risk', keys: ['safety first'], mistake: 'Sequencing safety behind background data' }),
      O('c', 'Assuming there is no risk because the reaction is only an adjustment disorder', -2,
        { r: 'Assuming no risk is unsafe', approach: 'Dismissal framing', why: 'A subthreshold label does not rule out risk; structured screening is still done', keys: ['assess regardless'], mistake: 'Dismissing risk based on the label' }),
      O('d', 'Focusing only on illness-management tips for now and returning to any safety questions much later', -1,
        { r: 'Sequencing safety behind tips is unsafe', approach: 'Single-issue framing', why: 'Illness-management tips do not displace assessing current safety', keys: ['safety first'], mistake: 'Sequencing safety behind other needs' }),
    ]),
    Q('q6', 'treatment', 'What is the most appropriate treatment approach?', ['R2'], [
      O('a', 'Provide supportive, problem-focused counseling and coping-skills building around the diagnosis and its stressors', 3,
        { r: 'Supportive, problem-focused, skills-based counseling', approach: 'Match to the stressor reaction', why: 'An adjustment disorder is treated with supportive, problem-focused counseling and coping-skills building around the stressor', keys: ['adjusting to a diagnosis', 'mixed anxiety and low mood'], mistake: 'Either overtreating a stressor reaction as a severe disorder or offering no active coping support' }),
      O('b', 'Simply telling Gordon in a reassuring sort of way that plenty of people receive serious diagnoses all the time and cope with them perfectly well, and that he really just needs to accept his and move on from it quickly and entirely on his own', -1,
        { r: 'Minimizing his reaction is unhelpful', approach: 'Minimize framing', why: 'Minimizing his distress does not provide the coping support an adjustment reaction needs', keys: ['support, not minimize'], mistake: 'Dismissing a genuine adjustment reaction' }),
      O('c', 'Starting him on a medication that you will select and adjust yourself over time', -2,
        { r: 'Prescribing is outside scope', approach: 'Prescribe framing', why: 'Counselors do not select or adjust medication; that is referred to a prescriber if indicated', keys: ['no prescriptive authority'], mistake: 'Acting outside scope of practice' }),
      O('d', 'Focusing sessions only on his sleep and leaving the adjustment reaction unaddressed', -1,
        { r: 'A narrow focus is inadequate', approach: 'Narrow-focus framing', why: 'Sleep alone does not address the adjustment reaction; the coping work is addressed directly', keys: ['address the reaction'], mistake: 'Addressing only one symptom' }),
    ]),
    Q('q7', 'treatment', 'What should the plan emphasize for his coping with the diagnosis?', ['R4'], [
      O('a', 'Build problem-solving and coping skills, mobilize supports, and help him adapt to the diagnosis over time', 3,
        { r: 'Coping skills, supports, and adaptation', approach: 'Support adaptation to the stressor', why: 'The plan builds problem-solving and coping skills, mobilizes supports, and helps him adapt to the diagnosis over time', keys: ['adjusting to chronic illness', 'wants to cope'], mistake: 'Providing only passive listening without building coping skills or mobilizing supports' }),
      O('b', 'Simply telling Gordon in a fairly firm and matter-of-fact way that he really just needs to stop worrying about the diagnosis entirely and to make himself feel completely fine about the whole thing immediately and on his own through sheer willpower', -1,
        { r: 'Willpower framing is unhelpful', approach: 'Toughen-up framing', why: '“Just stop worrying and feel fine” does not build coping and undermines the alliance', keys: ['skills-based coping'], mistake: 'Demanding willpower instead of building coping' }),
      O('c', 'Focusing the sessions mainly on cataloguing every worry about the illness in exhaustive detail each time', -1,
        { r: 'Cataloguing is not coping', approach: 'Catalogue framing', why: 'Listing worries without building skills does not support adaptation', keys: ['forward-focused coping'], mistake: 'Centering sessions on the worry list' }),
      O('d', 'Telling him counseling cannot help unless he first accepts the diagnosis completely on his own', -1,
        { r: 'Conditioning care is inappropriate', approach: 'Conditioning framing', why: 'Supporting adaptation is the work, not a precondition for it', keys: ['engagement matters'], mistake: 'Making care contingent on acceptance' }),
    ]),
    Q('q8', 'treatment', 'How should the counselor coordinate with his medical care?', ['R5'], [
      O('a', 'With his consent, coordinate with his medical team so psychological and medical care support each other', 3,
        { r: 'Coordinate with consent for integrated care', approach: 'Coordinate within consent and scope', why: 'With consent, coordinating with his medical team lets psychological and medical care support each other', keys: ['chronic-illness diagnosis', 'ongoing medical care'], mistake: 'Either coordinating without consent or ignoring the medical context of his adjustment' }),
      O('b', 'Simply going ahead and contacting his entire medical team and sharing all of the details of his counseling and his emotional reactions with each of them right away without first pausing to obtain his consent, on the assumption that it must be in his interest', -2,
        { r: 'Coordinating without consent breaches confidentiality', approach: 'Assume-consent framing', why: 'A valid release is required before disclosure', keys: ['no release'], mistake: 'Disclosing before consent is documented' }),
      O('c', 'Offering him your own medical opinions about his illness and its treatment', -2,
        { r: 'Giving medical opinions exceeds scope', approach: 'Medical-advice framing', why: 'Medical opinions about his illness are outside the counselor’s scope', keys: ['scope limits'], mistake: 'Overstepping into medical judgment' }),
      O('d', 'Avoiding any contact with his medical team so counseling stays entirely separate', -1,
        { r: 'No coordination undercuts care', approach: 'Siloed framing', why: 'Consented coordination supports integrated care around the diagnosis', keys: ['integrated care'], mistake: 'Refusing helpful, consented coordination' }),
    ]),
    Q('q9', 'treatment', 'How should the counselor think about the expected course?', ['R2'], [
      O('a', 'Expect improvement as he adapts, while monitoring for progression to a fuller disorder if symptoms worsen or persist', 3,
        { r: 'Expect adaptation; monitor for progression', approach: 'Track the trajectory', why: 'Adjustment reactions often improve with adaptation, while the counselor monitors for progression to a fuller disorder if symptoms worsen or persist', keys: ['recent stressor', 'subthreshold now'], mistake: 'Assuming it will always resolve without monitoring for progression, or overtreating it as a chronic disorder' }),
      O('b', 'Simply assuming that because this is only an adjustment disorder it is therefore certain to resolve entirely on its own very soon no matter what, and that there is consequently no need at all to monitor for whether his symptoms might worsen or progress into something more', -1,
        { r: 'Assuming guaranteed resolution misses monitoring', approach: 'Assume-resolved framing', why: 'Symptoms may improve or progress; monitoring guides care', keys: ['monitor the course'], mistake: 'Skipping needed monitoring' }),
      O('c', 'Treating it as a lifelong chronic disorder requiring indefinite intensive treatment from the outset', -1,
        { r: 'Overtreating is a mistake', approach: 'Overtreat framing', why: 'An adjustment reaction is not assumed chronic; care is proportionate and monitored', keys: ['proportionate care'], mistake: 'Overtreating a stressor reaction' }),
      O('d', 'Deciding the course based only on how you personally feel about the sessions', -1,
        { r: 'Subjective impression is not the standard', approach: 'Subjective framing', why: 'The course is tracked by symptoms and functioning, not impression', keys: ['objective monitoring'], mistake: 'Relying on subjective impression' }),
    ]),
    Q('q10', 'counseling', 'Gordon says he feels weak for struggling so much with the news. The most therapeutic response is to:', ['R4'], [
      O('a', 'Normalize his reaction as an understandable response to a major stressor and affirm his strengths in seeking help', 3,
        { r: 'Normalize the reaction; affirm strengths', approach: 'Reduce shame and build on strengths', why: 'Normalizing his reaction as understandable and affirming his strengths in seeking help reduces shame and supports coping', keys: ['feels weak for struggling', 'sought counseling'], mistake: 'Either agreeing he is weak or brushing past the shame without reframing it' }),
      O('b', 'Simply agreeing with Gordon straight away that yes, he probably really is being rather weak and is not coping nearly as well as he ought to be with the whole situation, and that he really should be handling his diagnosis a good deal better than this by now', -2,
        { r: 'Agreeing he is weak is harmful', approach: 'Confirm-shame framing', why: 'Agreeing that he is weak reinforces shame and harms the alliance', keys: ['reduce shame'], mistake: 'Reinforcing self-criticism' }),
      O('c', 'Quickly telling him not to worry about it and moving on to another topic', -1,
        { r: 'Brushing past it misses the work', approach: 'Deflection framing', why: 'Quickly moving on misses a chance to reframe the shame', keys: ['engage the shame'], mistake: 'Deflecting from a meaningful moment' }),
      O('d', 'Telling him others cope far better so he should try harder', -2,
        { r: 'Comparison is invalidating', approach: 'Comparison framing', why: 'Comparing him unfavorably to others invalidates him and deepens shame', keys: ['normalize, do not compare'], mistake: 'Minimizing through comparison' }),
    ]),
    Q('q11', 'counseling', 'How can the counselor best support Gordon’s coping and outlook?', ['R4'], [
      O('a', 'Help him find meaning and manageable next steps, mobilize supports, and build realistic hope', 3,
        { r: 'Meaning, next steps, supports, realistic hope', approach: 'Build coping and hope', why: 'Helping him find meaning and manageable next steps, mobilizing supports, and building realistic hope supports adaptation', keys: ['facing a hard road', 'wants to cope well'], mistake: 'Offering empty positivity or leaving him without manageable steps and supports' }),
      O('b', 'Simply telling Gordon in a very upbeat and cheerful sort of way that he should just stay positive and think happy thoughts and that absolutely everything is definitely going to turn out completely fine for him in the end no matter what', -1,
        { r: 'Empty positivity is not coping work', approach: 'Toxic-positivity framing', why: 'Generic positivity does not build the coping and realistic hope he needs', keys: ['realistic hope'], mistake: 'Substituting positivity for coping work' }),
      O('c', 'Focusing the sessions mainly on cataloguing every fear about the illness in exhaustive detail each time', -1,
        { r: 'Cataloguing is not coping', approach: 'Catalogue framing', why: 'Listing fears without building coping does not support outlook', keys: ['forward-focused coping'], mistake: 'Centering sessions on the fears' }),
      O('d', 'Telling him counseling cannot help unless he first feels hopeful on his own', -1,
        { r: 'Conditioning care is inappropriate', approach: 'Conditioning framing', why: 'Building hope is part of the work, not a precondition for it', keys: ['engagement matters'], mistake: 'Making care contingent on outlook' }),
    ]),
    Q('q12', 'ethics', 'Gordon asks the counselor to advise him on whether to pursue a risky medical treatment. The most appropriate response is to:', ['R5'], [
      O('a', 'Stay within scope, support his own informed decision-making, and defer the medical judgment to his medical team', 3,
        { r: 'Support decision-making; defer medical judgment', approach: 'Practice within scope on medical decisions', why: 'The medical treatment decision is outside the counselor’s scope, so the counselor supports his informed decision-making and defers the judgment to his medical team', keys: ['asks for a treatment recommendation', 'medical decision'], mistake: 'Giving a medical recommendation outside the counselor’s scope rather than supporting his own informed decision-making' }),
      O('b', 'Simply going ahead and telling Gordon quite directly and confidently exactly whether or not he personally ought to pursue the risky medical treatment, offering him a firm and definite recommendation one way or the other, even though that is really a medical decision well outside the counselor’s scope', -2,
        { r: 'A medical recommendation exceeds scope', approach: 'Overreach framing', why: 'Recommending for or against a medical treatment is outside the counselor’s scope', keys: ['scope limits'], mistake: 'Giving medical advice outside scope' }),
      O('c', 'Refusing to discuss the decision at all and simply changing the subject', -1,
        { r: 'Avoiding the topic is unhelpful', approach: 'Avoidance framing', why: 'The counselor supports his decision process and clarifies scope rather than avoiding it', keys: ['support the process'], mistake: 'Avoiding a decision he is struggling with' }),
      O('d', 'Telling him to just do whatever his family thinks is best regardless of his own wishes', -1,
        { r: 'Overriding his autonomy is inappropriate', approach: 'Defer-to-family framing', why: 'His own informed decision-making and autonomy are supported, not overridden', keys: ['respect autonomy'], mistake: 'Sidelining his autonomy' }),
    ]),
    Q('q13', 'ethics', 'Gordon worries the diagnosis in his record could raise his insurance costs and asks the counselor to omit it. The most appropriate response is to:', ['R5'], [
      O('a', 'Explain the need for accurate records and confidentiality protections, disclosing only with consent or a lawful basis', 3,
        { r: 'Accurate records; confidentiality protections', approach: 'Balance accuracy and confidentiality', why: 'Records are kept accurate while confidentiality is protected and disclosure occurs only with consent or a lawful basis', keys: ['fears insurance impact', 'wants an omission'], mistake: 'Either falsifying the record by omission or breaching confidentiality to third parties' }),
      O('b', 'Simply agreeing to deliberately leave the diagnosis and the related clinical information entirely out of the record altogether, specifically so that it will not accurately reflect his actual clinical picture in case his insurer should ever happen to review it', -2,
        { r: 'Falsifying records is improper', approach: 'Omit-records framing', why: 'Documentation is kept accurate; omitting the diagnosis to mislead is improper', keys: ['accurate documentation'], mistake: 'Compromising record accuracy' }),
      O('c', 'Telling him the insurer will certainly be sent his full records regardless of consent', -2,
        { r: 'Misstating protections is improper', approach: 'Breach framing', why: 'His information is disclosed only with consent or a lawful basis, not to the insurer by default', keys: ['confidentiality protected'], mistake: 'Misstating confidentiality protections' }),
      O('d', 'Refusing to discuss records or confidentiality and changing the subject', -1,
        { r: 'Evasion undermines informed consent', approach: 'Evasion framing', why: 'Records and confidentiality are explained honestly, not evaded', keys: ['transparent limits'], mistake: 'Being evasive about records and confidentiality' }),
    ]),
  ],
};

// ============================================================================
// D214 — Prolonged Grief Disorder (F43.81) — Trauma — hard
// ============================================================================
const D214 = {
  id: 'ncmhce-D214',
  title: 'Unremitting grief fourteen months after losing an adult child',
  category: 'Trauma',
  difficulty: 'hard',
  primaryDiagnosis: { name: 'Prolonged Grief Disorder', code: 'F43.81' },
  diagnosis: { name: 'Prolonged Grief Disorder', code: 'F43.81' },
  differentialOptions: [
    { id: 'do1', name: 'Prolonged Grief Disorder', isCorrect: true },
    { id: 'do2', name: 'Major Depressive Disorder, Moderate', isCorrect: false },
    { id: 'do3', name: 'Posttraumatic Stress Disorder', isCorrect: false },
    { id: 'do4', name: 'Normal (Uncomplicated) Grief', isCorrect: false },
  ],
  narrative: {
    intake:
      'Yolanda Simmons, a 47-year-old, lost her adult son fourteen months ago and describes intense daily yearning, preoccupation with him, an ' +
      'inability to accept the loss, emotional numbness, a sense that life is meaningless, and profound difficulty re-engaging with her life.',
    session1:
      'Her grief is persistent, pervasive, and disabling well beyond the expected social and cultural norms and time frame, centered on yearning and ' +
      'preoccupation with the deceased, consistent with prolonged grief disorder rather than ordinary grief that gradually eases.',
    session2:
      'Her core disturbance is grief-focused yearning rather than pervasive depressed mood or trauma-based intrusion and avoidance, and it exceeds ' +
      'uncomplicated grief in duration and disability. The counselor screens her suicide risk given her hopelessness and plans grief-focused care.',
  },
  diagnosticRationale:
    'Persistent, pervasive yearning and preoccupation with a deceased loved one, with intense grief and impaired functioning lasting well beyond ' +
    'expected norms (at least a year in adults), best fits prolonged grief disorder, distinct from major depression, PTSD, and normal grief that ' +
    'gradually eases, and warranting suicide-risk screening.',
  references: [
    { id: 'R1', source: 'DSM-5-TR', detail: 'Prolonged grief disorder: persistent yearning/preoccupation and grief; 12+ months in adults; beyond norms' },
    { id: 'R2', source: 'NICE guidelines', detail: 'Complicated/prolonged grief: structured grief-focused psychological intervention' },
    { id: 'R3', source: 'C-SSRS', detail: 'Structured suicide-risk screening (elevated risk in prolonged grief)' },
    { id: 'R4', source: 'Corey (Theory & Practice)', detail: 'Grief-focused counseling, meaning-reconstruction, and the working alliance' },
    { id: 'R5', source: 'ACA Code of Ethics', detail: 'A.1., B.2., C.2.: welfare, safety, coordination, and competence' },
  ],
  questions: [
    Q('q1', 'intake', 'What is most important to confirm to support prolonged grief disorder?', ['R1'], [
      O('a', 'Persistent, pervasive yearning and preoccupation with the deceased, disabling and beyond expected norms for at least a year', 3,
        { r: 'Persistent yearning beyond norms, 12+ months', approach: 'Confirm the core criteria', why: 'Prolonged grief disorder requires persistent, pervasive yearning and preoccupation with the deceased, disabling and beyond expected norms, at least a year in adults', keys: ['fourteen months', 'daily yearning and preoccupation'], mistake: 'Diagnosing prolonged grief without confirming the persistence, disability, and duration beyond expected norms' }),
      O('b', 'Mainly whether Yolanda is able to describe in complete and exhaustive detail every single circumstance of her son’s death in full detail right away during the very first session', -1,
        { r: 'Exhaustive recounting is not the criterion', approach: 'Recount framing', why: 'Detailed recounting is not what defines the disorder and can be distressing early on', keys: ['syndrome-based focus'], mistake: 'Requiring exhaustive recounting rather than confirming the criteria' }),
      O('c', 'That her grief has gotten a little worse over the past few days than earlier in the week', -1,
        { r: 'Recent change is not the defining feature', approach: 'Recent-change framing', why: 'The persistent, disabling grief syndrome, not the exact recent trajectory, defines the disorder', keys: ['persistent syndrome'], mistake: 'Confusing the recent course with the criteria' }),
      O('d', 'That she currently meets the full symptom count required for a discrete manic episode at this time', 0,
        { r: 'Manic count is not relevant', approach: 'Mania-criteria framing', why: 'The focus is a grief disorder, not a manic episode', keys: ['grief-focused'], mistake: 'Applying manic criteria here' }),
    ]),
    Q('q2', 'core', 'Which feature best distinguishes this from major depressive disorder?', ['R1'], [
      O('a', 'The core disturbance is grief-focused yearning and preoccupation with the deceased, not pervasive depressed mood and anhedonia', 3,
        { r: 'Grief-focused yearning, not primary depression', approach: 'Contrast the core disturbance', why: 'MDD centers on pervasive depressed mood and anhedonia; her core disturbance is grief-focused yearning and preoccupation with the deceased', keys: ['yearning for her son', 'preoccupation with the loss'], mistake: 'Reading grief-focused yearning as a primary depressive disorder' }),
      O('b', 'The fact that ever since the devastating loss of her son Yolanda has quite understandably been feeling genuinely low and down and sorrowful and heavy-hearted a great deal of the time as she struggles with it', -1,
        { r: 'Low mood occurs in both', approach: 'Mood framing', why: 'Low mood can occur in both; the grief-focused yearning is what differs', keys: ['shared feature'], mistake: 'Using low mood to differentiate' }),
      O('c', 'The numbness and the poor sleep that she describes right now', -1,
        { r: 'These symptoms are nonspecific', approach: 'Symptom framing', why: 'Numbness and poor sleep occur in both; the core disturbance differs', keys: ['shared symptoms'], mistake: 'Reading nonspecific symptoms as decisive' }),
      O('d', 'The way her mood dips a little more in the mornings than later in the day', 0,
        { r: 'Diurnal pattern is not diagnostic', approach: 'Time-of-day framing', why: 'Diurnal variation does not distinguish the two', keys: ['nonspecific timing'], mistake: 'Over-reading a circadian pattern' }),
    ]),
    Q('q3', 'core', 'How does this differ from PTSD?', ['R1'], [
      O('a', 'Her disturbance centers on yearning and loss, not trauma-based intrusion, avoidance, and hyperarousal after a life threat', 3,
        { r: 'Loss-focused yearning, not trauma symptoms', approach: 'Contrast the core disturbance', why: 'PTSD centers on trauma-based intrusion, avoidance, and arousal after a life-threatening event; hers centers on yearning and loss', keys: ['yearning and preoccupation', 'loss rather than life threat'], mistake: 'Framing grief-focused yearning as a trauma disorder' }),
      O('b', 'The fact that the loss of her beloved son has very clearly and understandably been a genuinely devastating and painful and profoundly distressing experience for Yolanda to have to endure over this past year', -1,
        { r: 'Distress occurs in both', approach: 'Distress framing', why: 'Profound distress occurs in both; the core disturbance is what differs', keys: ['shared feature'], mistake: 'Using distress to differentiate' }),
      O('c', 'The numbness and the difficulty re-engaging that she describes right now', -1,
        { r: 'These features are nonspecific', approach: 'Symptom framing', why: 'Numbness and withdrawal occur in both; the core disturbance differs', keys: ['shared features'], mistake: 'Reading nonspecific features as decisive' }),
      O('d', 'The way her distress feels a little worse around anniversaries and reminders', 0,
        { r: 'Reminder sensitivity is nonspecific', approach: 'Reminder framing', why: 'Feeling worse around reminders occurs in grief and does not indicate PTSD', keys: ['nonspecific factor'], mistake: 'Over-reading reminder sensitivity' }),
    ]),
    Q('q4', 'core', 'How does this differ from normal, uncomplicated grief?', ['R1'], [
      O('a', 'Her grief is persistent, pervasive, and disabling well beyond expected norms and time, not gradually easing over time', 3,
        { r: 'Persistent, disabling, beyond norms', approach: 'Contrast severity and course', why: 'Uncomplicated grief gradually eases; hers is persistent, pervasive, and disabling well beyond the expected norms and time frame', keys: ['fourteen months, not easing', 'profoundly disabling'], mistake: 'Either pathologizing normal grief or dismissing a persistent, disabling grief as ordinary' }),
      O('b', 'The fact that Yolanda is very understandably grieving deeply and painfully for her son and is feeling the profound sorrow and heartache that would come with the loss of a beloved child for any parent', -1,
        { r: 'Grief itself occurs in both', approach: 'Grief framing', why: 'Deep grief occurs in both; the persistence, disability, and duration beyond norms are what differ', keys: ['shared feature'], mistake: 'Using the presence of grief to differentiate' }),
      O('c', 'The sorrow and the tearfulness that she shows right now', -1,
        { r: 'These features are nonspecific', approach: 'Symptom framing', why: 'Sorrow and tears occur in both; the course and disability differ', keys: ['shared features'], mistake: 'Reading nonspecific features as decisive' }),
      O('d', 'The way her grief feels a little worse on especially difficult days', 0,
        { r: 'Day-to-day variation is nonspecific', approach: 'Variation framing', why: 'Feeling worse on hard days does not distinguish complicated from normal grief', keys: ['nonspecific factor'], mistake: 'Over-reading day-to-day variation' }),
    ]),
    Q('q5', 'intake', 'What is the single most important assessment step given her hopelessness?', ['R3'], [
      O('a', 'Conduct a structured suicide-risk assessment, since prolonged grief and meaninglessness can elevate risk', 3,
        { r: 'Structured suicide-risk assessment now', approach: 'Screen risk directly', why: 'Prolonged grief with a sense that life is meaningless can elevate suicide risk, so a structured assessment is essential', keys: ['life feels meaningless', 'profound grief'], mistake: 'Beginning grief work without a structured suicide-risk assessment' }),
      O('b', 'Mainly obtaining a very complete and exhaustive account of every detail of her son’s life and death in fine detail right away during the first session before turning at all to the question of her present safety', -2,
        { r: 'Deferring safety is unsafe', approach: 'History-first framing', why: 'An exhaustive account does not displace assessing current suicide risk', keys: ['safety first'], mistake: 'Sequencing safety behind background data' }),
      O('c', 'Assuming there is no risk because grief is a normal experience', -2,
        { r: 'Assuming no risk is unsafe', approach: 'Dismissal framing', why: 'Grief being common does not rule out risk; structured assessment is required', keys: ['assess regardless'], mistake: 'Dismissing risk because grief is normal' }),
      O('d', 'Focusing only on encouraging her to stay busy for now and returning to any safety questions much later', -1,
        { r: 'Sequencing safety behind advice is unsafe', approach: 'Single-issue framing', why: 'Keeping-busy advice does not displace assessing current safety', keys: ['safety first'], mistake: 'Sequencing safety behind other needs' }),
    ]),
    Q('q6', 'treatment', 'What is the most appropriate treatment approach?', ['R2'], [
      O('a', 'Offer a structured, grief-focused psychological intervention and coordinate a medication referral if indicated', 3,
        { r: 'Grief-focused intervention plus referral if indicated', approach: 'Match to the guideline', why: 'Prolonged grief disorder is treated with a structured, grief-focused psychological intervention, with a coordinated medication referral if indicated', keys: ['persistent disabling grief', 'stuck in yearning'], mistake: 'Offering only nonspecific supportive talk, or prescribing/directing medication outside scope' }),
      O('b', 'Simply telling Yolanda in a reassuring sort of way that she really just needs to move on from the loss of her son now and to stop dwelling on it so much and to get back to her normal life quickly and entirely on her own', -2,
        { r: '“Just move on” is harmful', approach: 'Move-on framing', why: 'Telling a bereaved parent to simply move on is harmful and misunderstands prolonged grief', keys: ['grief-focused care'], mistake: 'Dismissing and rushing her grief' }),
      O('c', 'Starting her on a medication that you will select and adjust yourself over time', -2,
        { r: 'Prescribing is outside scope', approach: 'Prescribe framing', why: 'Counselors do not select or adjust medication; that is referred to a prescriber if indicated', keys: ['no prescriptive authority'], mistake: 'Acting outside scope of practice' }),
      O('d', 'Focusing sessions only on her sleep and leaving the grief unaddressed', -1,
        { r: 'A narrow focus is inadequate', approach: 'Narrow-focus framing', why: 'Sleep alone does not treat prolonged grief; the grief is addressed directly', keys: ['treat the grief'], mistake: 'Addressing only one symptom' }),
    ]),
    Q('q7', 'treatment', 'What should grief-focused work help her move toward?', ['R4'], [
      O('a', 'Processing the loss, restoring meaningful engagement, and building a continuing bond that allows re-engagement with life', 3,
        { r: 'Process the loss; restore engagement; continuing bond', approach: 'Support adaptation to the loss', why: 'Grief-focused work helps her process the loss, restore meaningful engagement, and build a continuing bond that allows re-engagement with life', keys: ['cannot accept the loss', 'withdrawn from life'], mistake: 'Pushing her to sever the bond and “get over it” rather than integrating the loss and re-engaging' }),
      O('b', 'Simply insisting that Yolanda must completely sever and let go of every last connection and memory and bond with her deceased son entirely, and telling her that fully forgetting him and cutting him out of her mind is really the only proper way for her to ever move forward', -2,
        { r: 'Forcing severance is harmful', approach: 'Sever-the-bond framing', why: 'Grief work integrates the loss and supports a continuing bond, not forced severance and forgetting', keys: ['continuing bond'], mistake: 'Demanding she cut off the bond' }),
      O('c', 'Focusing the sessions mainly on cataloguing every painful moment of the loss in exhaustive detail each time', -1,
        { r: 'Cataloguing pain is not integration', approach: 'Catalogue framing', why: 'Repeatedly rehearsing pain without processing and re-engagement does not support adaptation', keys: ['process and re-engage'], mistake: 'Centering sessions on the pain alone' }),
      O('d', 'Telling her counseling cannot help unless she first accepts the loss completely on her own', -1,
        { r: 'Conditioning care is inappropriate', approach: 'Conditioning framing', why: 'Supporting acceptance is the work, not a precondition for it', keys: ['engagement matters'], mistake: 'Making care contingent on acceptance' }),
    ]),
    Q('q8', 'treatment', 'How should the counselor address her withdrawal from life?', ['R4'], [
      O('a', 'Gently support graded re-engagement with valued activities and relationships at a pace she can tolerate', 3,
        { r: 'Graded re-engagement with valued life', approach: 'Rebuild engagement gradually', why: 'Gently supporting graded re-engagement with valued activities and relationships, at a tolerable pace, counters grief-related withdrawal', keys: ['withdrawn from life', 'wants to reconnect eventually'], mistake: 'Either forcing rapid re-engagement or allowing indefinite total withdrawal' }),
      O('b', 'Simply reassuring Yolanda that it is perfectly fine and entirely appropriate for her to go on completely withdrawing from every single activity and relationship and part of her former life indefinitely for as long as she likes, with no gentle support toward any eventual re-engagement at all', -2,
        { r: 'Endorsing total withdrawal is harmful', approach: 'Permission framing', why: 'Indefinite total withdrawal maintains the disorder; gentle graded re-engagement is supported', keys: ['graded re-engagement'], mistake: 'Reinforcing withdrawal' }),
      O('c', 'Forcing her to resume all her former activities at once with no regard to her pace', -1,
        { r: 'Forcing rapid re-engagement can harm', approach: 'Flooding framing', why: 'Re-engagement is graded and tolerable, not forced all at once', keys: ['tolerable pace'], mistake: 'Forcing premature re-engagement' }),
      O('d', 'Leaving her withdrawal entirely unaddressed in the plan', -1,
        { r: 'Ignoring withdrawal is inadequate', approach: 'Ignore framing', why: 'Withdrawal is central to prolonged grief and is addressed with graded re-engagement', keys: ['address withdrawal'], mistake: 'Omitting withdrawal from the plan' }),
    ]),
    Q('q9', 'treatment', 'How should the counselor coordinate additional supports?', ['R5'], [
      O('a', 'With her consent, connect her to grief supports and coordinate with other providers as needed', 3,
        { r: 'Connect to supports with consent', approach: 'Coordinate within consent and scope', why: 'With consent, connecting her to grief supports and coordinating with other providers strengthens grief-focused care', keys: ['isolated in grief', 'may benefit from peer support'], mistake: 'Either connecting or disclosing without consent or failing to mobilize helpful grief supports' }),
      O('b', 'Simply going ahead and contacting her family members and various support organizations and sharing all of the details of her grief and her clinical situation with each of them right away without first pausing to obtain her consent, on the assumption that it must be in her interest', -2,
        { r: 'Disclosing without consent breaches confidentiality', approach: 'Assume-consent framing', why: 'Connecting her to supports still requires her consent absent a safety exception', keys: ['no consent'], mistake: 'Disclosing to others without consent' }),
      O('c', 'Handling everything within the session alone and connecting her to no supports at all', -1,
        { r: 'Excluding supports weakens care', approach: 'Isolation framing', why: 'Consented connection to grief supports strengthens recovery', keys: ['mobilize supports'], mistake: 'Excluding helpful, consented supports' }),
      O('d', 'Deciding what to share based only on personal feelings rather than her consent and needs', -1,
        { r: 'Personal feelings are not the standard', approach: 'Subjective framing', why: 'Coordination follows her consent and needs, not personal feelings', keys: ['consent-based'], mistake: 'Basing coordination on personal feelings' }),
    ]),
    Q('q10', 'counseling', 'Yolanda says moving forward at all would mean betraying her son’s memory. The most therapeutic response is to:', ['R4'], [
      O('a', 'Validate the fear and gently explore how honoring his memory and re-engaging with life can coexist', 3,
        { r: 'Validate; reframe re-engagement and honoring coexisting', approach: 'Hold the bond and re-engagement together', why: 'Validating her fear while gently exploring how honoring his memory and re-engaging with life can coexist addresses the core grief block', keys: ['fears betraying his memory', 'stuck in place'], mistake: 'Either pushing her to move on as if the bond does not matter or agreeing that re-engaging would betray him' }),
      O('b', 'Simply agreeing with Yolanda straight away that yes, she is quite right, and that for her to ever move forward with her own life in any way at all really would amount to a genuine betrayal of her son’s memory, so she had better not do it', -2,
        { r: 'Agreeing reinforces the grief block', approach: 'Collude framing', why: 'Agreeing that re-engaging betrays him reinforces the block and deepens her stuckness', keys: ['reframe the belief'], mistake: 'Reinforcing the grief-maintaining belief' }),
      O('c', 'Bluntly telling her the belief is irrational and she simply needs to move on', -1,
        { r: 'Dismissing the belief invalidates her', approach: 'Dismiss framing', why: 'Calling the belief irrational and demanding she move on invalidates her grief and ruptures the alliance', keys: ['validate then explore'], mistake: 'Invalidating a grief belief' }),
      O('d', 'Changing the subject so she does not have to sit with the pain', -1,
        { r: 'Avoidance misses the work', approach: 'Avoidant framing', why: 'The belief is engaged and gently explored, not avoided', keys: ['engage the belief'], mistake: 'Sidestepping the core grief material' }),
    ]),
    Q('q11', 'counseling', 'How can the counselor best support Yolanda’s meaning-making and hope?', ['R4'], [
      O('a', 'Support meaning-reconstruction and a continuing bond, and reinforce small steps back toward valued living', 3,
        { r: 'Meaning-reconstruction, continuing bond, small steps', approach: 'Rebuild meaning and engagement', why: 'Supporting meaning-reconstruction and a continuing bond, and reinforcing small steps toward valued living, supports adaptation and hope', keys: ['life feels meaningless', 'loved her son deeply'], mistake: 'Offering empty positivity or insisting she sever the bond rather than rebuild meaning around it' }),
      O('b', 'Simply telling Yolanda in a very upbeat and cheerful sort of way that she should just try to stay positive and to focus on happy thoughts and that everything in her life is definitely going to feel completely fine again very soon no matter what', -1,
        { r: 'Empty positivity is not grief work', approach: 'Toxic-positivity framing', why: 'Generic positivity does not support meaning-reconstruction in prolonged grief', keys: ['meaning-focused work'], mistake: 'Substituting positivity for grief work' }),
      O('c', 'Focusing the sessions mainly on cataloguing every regret about the loss in exhaustive detail each time', -1,
        { r: 'Cataloguing regrets is not meaning-making', approach: 'Catalogue framing', why: 'Rehearsing regrets without meaning-reconstruction does not support hope', keys: ['meaning-reconstruction'], mistake: 'Centering sessions on regrets' }),
      O('d', 'Telling her counseling cannot help unless she first feels hopeful on her own', -1,
        { r: 'Conditioning care is inappropriate', approach: 'Conditioning framing', why: 'Rebuilding meaning and hope is the work, not a precondition for it', keys: ['engagement matters'], mistake: 'Making care contingent on hope' }),
    ]),
    Q('q12', 'ethics', 'Yolanda develops active suicidal ideation, saying she wants to be with her son. The most appropriate action is to:', ['R3'], [
      O('a', 'Complete a structured risk assessment and safety planning, escalating the level of care as indicated', 3,
        { r: 'Assess, safety-plan, escalate as needed', approach: 'Apply risk assessment and safety planning', why: 'Active ideation with a wish to join the deceased requires structured assessment, safety planning, and escalation of care as indicated', keys: ['wants to be with her son', 'active ideation'], mistake: 'Treating active ideation to reunite with the deceased as ordinary grief without a structured risk response' }),
      O('b', 'Simply viewing Yolanda’s statement that she wants to be with her son as nothing more than a completely normal and expected expression of her grief, and therefore carrying on with the usual grief session exactly as planned without conducting any structured risk assessment at all', -2,
        { r: 'Normalizing active ideation is unsafe', approach: 'Normalize-risk framing', why: 'A wish to join the deceased can signal real risk and requires structured assessment', keys: ['assess the risk'], mistake: 'Dismissing active ideation as ordinary grief' }),
      O('c', 'Waiting until the next session to see whether the ideation passes before acting', -2,
        { r: 'Delaying with active ideation is unsafe', approach: 'Wait-and-see framing', why: 'Active ideation requires prompt action, not waiting', keys: ['active risk'], mistake: 'Postponing action on active risk' }),
      O('d', 'Immediately hospitalizing her regardless of the assessed level of risk or her input', -1,
        { r: 'Match care to assessed risk', approach: 'Reflexive-hospitalization framing', why: 'Disposition follows a careful assessment and collaboration, not a reflex', keys: ['stratified decision'], mistake: 'Hospitalizing reflexively without assessment' }),
    ]),
    Q('q13', 'ethics', 'Yolanda asks the counselor to attend her son’s memorial and grave visits with her regularly. The most appropriate response is to:', ['R5'], [
      O('a', 'Maintain appropriate role boundaries with empathy and support her supports and rituals within the counseling frame', 3,
        { r: 'Hold boundaries with empathy; support her rituals', approach: 'Keep the role clear and supportive', why: 'Regularly attending personal memorial events would blur the counseling role, so the counselor holds the boundary with empathy and supports her own rituals and supports', keys: ['wants counselor at personal events', 'role boundary'], mistake: 'Either stepping outside the professional role to attend personal events or refusing coldly without empathy' }),
      O('b', 'Simply agreeing to regularly attend all of the personal memorial services and the ongoing grave visits together with Yolanda as a steady part of her life going forward, without pausing to consider how doing so would blur the boundaries of the counseling role or foster dependence', -2,
        { r: 'Attending personal events blurs the role', approach: 'Role-blurring framing', why: 'Regularly attending personal events blurs the counseling role and can foster dependence', keys: ['role boundaries'], mistake: 'Stepping outside the professional role' }),
      O('c', 'Refusing the request coldly with no empathy or explanation and changing the subject', -1,
        { r: 'A cold refusal harms the alliance', approach: 'Cold-refusal framing', why: 'The boundary is held with empathy and explanation, not coldly', keys: ['empathic boundary'], mistake: 'Refusing without empathy' }),
      O('d', 'Telling her she will never cope with these events without the counselor present', -2,
        { r: 'Fostering dependence is harmful', approach: 'Dependence framing', why: 'The aim is her own supported coping, not dependence on the counselor’s presence', keys: ['build her supports'], mistake: 'Undermining her autonomy and supports' }),
    ]),
  ],
};

module.exports = { CASES: [D211, D212, D213, D214] };
