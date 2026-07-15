// ============================================================================
// deep-cases-batch-21.js — NCMHCE deep cases, batch 21 (2022+ format)
// NCMHCE Prep Platform | GA Integrated Therapeutic Perspectives LLC
//
// Four exam-deep clinical simulations (13 items each, sections [5,4,4]). These
// add SECOND, distinct scenarios for already-covered Depressive diagnoses to
// build toward the blueprint's per-category volume (duplication is a scenario
// problem, not a diagnosis problem — dedup.js). The diagnosis/clinical focus is
// GIVEN; items test clinical decision-making across the three derived sections
// (Assessment -> Planning -> Process). All difficulty: hard. On id block D203+:
//   ncmhce-D203  Major Depressive Disorder, Moderate            (F33.1)
//   ncmhce-D204  Major Depressive Disorder, Severe              (F33.2)
//   ncmhce-D205  Persistent Depressive Disorder                 (F34.1)
//   ncmhce-D206  Major Depressive Disorder, with Peripartum Onset (F53.0)
//
// Authored to NCMHCE_DeepCase_Generation_Spec.md. Passes caseSchema
// (strictItemQuality) AND examDepth with zero errors / zero warnings.
// Auto-discovered by import-deep-cases.js (deep-cases-batch-*.js).
//
// Validate:
//   node tools/cases/validateCases.js tools/cases/deep-cases-batch-21.js
//   node -e "const{validateExamDepthSet}=require('./tools/cases/examDepth');const{CASES}=require('./tools/cases/deep-cases-batch-21');console.log(validateExamDepthSet(CASES))"
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
// D203 — Major Depressive Disorder, Moderate (F33.1) — Depressive — hard
// ============================================================================
const D203 = {
  id: 'ncmhce-D203',
  title: 'Two months of moderate depression in a graduate student',
  category: 'Depressive',
  difficulty: 'hard',
  primaryDiagnosis: { name: 'Major Depressive Disorder, Moderate', code: 'F33.1' },
  diagnosis: { name: 'Major Depressive Disorder, Moderate', code: 'F33.1' },
  differentialOptions: [
    { id: 'do1', name: 'Major Depressive Disorder, Moderate', isCorrect: true },
    { id: 'do2', name: 'Persistent Depressive Disorder', isCorrect: false },
    { id: 'do3', name: 'Adjustment Disorder, with Depressed Mood', isCorrect: false },
    { id: 'do4', name: 'Bipolar II Disorder', isCorrect: false },
  ],
  narrative: {
    intake:
      'Nadia Ahmadi, a 24-year-old graduate student, reports about two months of persistent low mood, loss of interest in her studies and friends, ' +
      'poor concentration, disrupted sleep, low energy, and feelings of worthlessness, with a clear change from her usual functioning.',
    session1:
      'Her symptoms are present most of the day, nearly every day, for well over two weeks and represent a distinct episode of moderate severity ' +
      'rather than a lifelong low-grade baseline. There has never been a hypomanic or manic period, distinguishing this from a bipolar course.',
    session2:
      'She denies any past elevated-mood episodes and her symptoms exceed what a single stressor and an adjustment reaction would explain in scope ' +
      'and severity. The counselor screens her suicide risk, finds passive thoughts without a plan, and plans evidence-based therapy with a medication referral offered.',
  },
  diagnosticRationale:
    'A distinct two-month episode of depressed mood and anhedonia with several associated symptoms most of the day, nearly every day, causing a ' +
    'clear change in functioning, best fits moderate major depressive disorder, distinct from a chronic persistent depressive baseline, a stressor-' +
    'bound adjustment reaction, and a bipolar course, and warranting suicide-risk screening.',
  references: [
    { id: 'R1', source: 'DSM-5-TR', detail: 'MDD: 5+ symptoms including depressed mood/anhedonia, most of the day nearly every day for 2+ weeks; severity specifiers' },
    { id: 'R2', source: 'APA CPG', detail: 'Evidence-based psychotherapy (CBT/behavioral activation/IPT) for moderate depression' },
    { id: 'R3', source: 'C-SSRS', detail: 'Structured suicide-risk screening in depression' },
    { id: 'R4', source: 'Stanley-Brown SPI', detail: 'Collaborative safety planning when risk is present' },
    { id: 'R5', source: 'ACA Code of Ethics', detail: 'A.1., B.2., C.2.: welfare, safety, coordination, and competence' },
  ],
  questions: [
    Q('q1', 'intake', 'What is most important to confirm to support a moderate major depressive episode?', ['R1'], [
      O('a', 'Depressed mood or anhedonia with associated symptoms, most of the day nearly every day for at least two weeks', 3,
        { r: 'Core episode criteria met', approach: 'Confirm the episode criteria', why: 'A major depressive episode requires depressed mood or anhedonia plus associated symptoms most of the day, nearly every day, for at least two weeks', keys: ['two months of low mood', 'loss of interest, poor sleep and concentration'], mistake: 'Diagnosing depression without confirming the full-episode duration and symptom pattern' }),
      O('b', 'Mainly that Nadia can point to one particular recent event that she is personally quite convinced is really the single underlying thing that first started off absolutely all of her current difficulties with her mood', -1,
        { r: 'A precipitant is not the criterion', approach: 'Trigger framing', why: 'Etiology is not the defining feature of a depressive episode', keys: ['syndrome-based focus'], mistake: 'Using a trigger as the diagnostic test' }),
      O('c', 'That her low mood has gotten a little worse over the past few days than it was earlier in the week', -1,
        { r: 'Recent change is not the defining feature', approach: 'Recent-change framing', why: 'The sustained episode, not the exact daily trajectory, defines the diagnosis', keys: ['sustained episode'], mistake: 'Confusing the daily course with the defining criteria' }),
      O('d', 'That she currently meets the full symptom count required for a discrete manic episode at this point in time', 0,
        { r: 'Manic count is not relevant', approach: 'Mania-criteria framing', why: 'The focus is a depressive episode, not a manic one', keys: ['depression-focused'], mistake: 'Applying manic criteria here' }),
    ]),
    Q('q2', 'core', 'Which feature best distinguishes this from persistent depressive disorder?', ['R1'], [
      O('a', 'This is a distinct two-month episode with a clear change from baseline, not a chronic low-grade course lasting years', 3,
        { r: 'Distinct episode versus chronic baseline', approach: 'Contrast episode with chronicity', why: 'Persistent depressive disorder is a chronic, low-grade course of two or more years; hers is a distinct episode with a clear change from baseline', keys: ['clear change two months ago', 'no lifelong low baseline'], mistake: 'Reading a discrete episode as a lifelong low-grade depression' }),
      O('b', 'The fact that she is clearly feeling really quite low and sad and has plainly lost most of her usual interest in the things that she normally cares about and enjoys doing in her day-to-day life', -1,
        { r: 'Low mood occurs in both', approach: 'Mood framing', why: 'Low mood and anhedonia occur in both; the course and onset differ', keys: ['shared feature'], mistake: 'Using low mood to differentiate' }),
      O('c', 'The trouble she has with her concentration and her energy during this period', -1,
        { r: 'These symptoms are nonspecific', approach: 'Symptom framing', why: 'Poor concentration and low energy occur in both; the course differs', keys: ['shared symptoms'], mistake: 'Reading nonspecific symptoms as decisive' }),
      O('d', 'The way her mood tends to dip a little more in the mornings than later in the day', 0,
        { r: 'Diurnal pattern is not diagnostic', approach: 'Time-of-day framing', why: 'Diurnal variation does not distinguish the two', keys: ['nonspecific timing'], mistake: 'Over-reading a circadian pattern' }),
    ]),
    Q('q3', 'core', 'How does this differ from an adjustment disorder with depressed mood?', ['R1'], [
      O('a', 'Her symptoms meet full episode criteria in scope and severity, exceeding a stressor-bound adjustment reaction', 3,
        { r: 'Full episode exceeds an adjustment reaction', approach: 'Contrast severity and criteria', why: 'An adjustment disorder is a milder, stressor-bound reaction that does not meet full episode criteria; hers does', keys: ['full symptom count', 'marked functional change'], mistake: 'Downgrading a full depressive episode to an adjustment reaction' }),
      O('b', 'The fact that there has clearly been at least some degree of stress and difficulty going on in her life over the past little while, around the same general time that her mood first began to noticeably slip and worsen', -1,
        { r: 'A stressor can be present in both', approach: 'Stressor framing', why: 'A stressor can precede both; meeting full episode criteria is what differs', keys: ['shared feature'], mistake: 'Using the presence of a stressor to differentiate' }),
      O('c', 'The sadness and the worry that she feels in response to her current circumstances', -1,
        { r: 'Distress is nonspecific', approach: 'Distress framing', why: 'Distress occurs in both; the criteria and severity differ', keys: ['shared affect'], mistake: 'Reading distress as decisive' }),
      O('d', 'The way her mood feels a little worse during the busiest weeks of her academic term', 0,
        { r: 'Stress reactivity is nonspecific', approach: 'Stress framing', why: 'Worsening during busy times does not distinguish the two', keys: ['nonspecific reactivity'], mistake: 'Using stress sensitivity to differentiate' }),
    ]),
    Q('q4', 'core', 'How does this differ from a bipolar II depressive episode?', ['R1'], [
      O('a', 'There is no history of any hypomanic or manic period, so the course is unipolar rather than bipolar', 3,
        { r: 'No hypomania/mania — unipolar', approach: 'Screen the mood history', why: 'Bipolar II requires a past hypomanic episode; she has never had elevated-mood periods, so the course is unipolar', keys: ['no past hypomania', 'no elevated-mood history'], mistake: 'Diagnosing unipolar depression without screening for any past hypomanic or manic episodes' }),
      O('b', 'The fact that during this present period of her life she is quite clearly feeling really rather low and depressed and generally down in her mood for most of the time on most of the days of the week', -1,
        { r: 'A depressive episode occurs in both', approach: 'Depression framing', why: 'A depressive episode occurs in both; the past mood history is what differs', keys: ['shared feature'], mistake: 'Using the current depression to differentiate' }),
      O('c', 'The low energy and the poor concentration that she describes right now', -1,
        { r: 'These symptoms are nonspecific', approach: 'Symptom framing', why: 'Low energy and poor concentration occur in both; the mood history differs', keys: ['shared symptoms'], mistake: 'Reading nonspecific symptoms as decisive' }),
      O('d', 'The way her mood feels a little worse on the days when she has slept poorly the night before', 0,
        { r: 'Sleep effects are nonspecific', approach: 'Sleep framing', why: 'Worse mood after poor sleep does not distinguish the two', keys: ['nonspecific factor'], mistake: 'Over-reading a sleep effect' }),
    ]),
    Q('q5', 'intake', 'What is the single most important assessment step given her depression?', ['R3'], [
      O('a', 'Conduct a structured suicide-risk assessment, since depression elevates risk and worthlessness is present', 3,
        { r: 'Structured suicide-risk assessment now', approach: 'Screen risk directly', why: 'Depression with worthlessness elevates suicide risk, so a structured risk assessment is essential', keys: ['feelings of worthlessness', 'moderate depression'], mistake: 'Treating the depression without a structured suicide-risk assessment' }),
      O('b', 'Mainly getting a very thorough and complete accounting of her entire family history going back through several generations before turning to anything at all about her current safety or her present level of risk to herself', -2,
        { r: 'Deferring safety is unsafe', approach: 'History-first framing', why: 'Family history does not displace assessing current suicide risk', keys: ['safety first'], mistake: 'Sequencing safety behind background data' }),
      O('c', 'Assuming there is no risk because she is a high-functioning student who is still attending her classes', -2,
        { r: 'Assuming no risk is unsafe', approach: 'Dismissal framing', why: 'Functioning does not rule out risk; structured assessment is still required', keys: ['assess regardless'], mistake: 'Dismissing risk based on functioning' }),
      O('d', 'Focusing only on study-skills coaching for now and returning to any safety questions much later', -1,
        { r: 'Sequencing safety behind coaching is unsafe', approach: 'Single-issue framing', why: 'Practical coaching does not displace assessing current safety', keys: ['safety first'], mistake: 'Sequencing safety behind other needs' }),
    ]),
    Q('q6', 'treatment', 'What is the most appropriate first-line treatment approach?', ['R2'], [
      O('a', 'Offer an evidence-based psychotherapy such as CBT, behavioral activation, or IPT and coordinate a medication referral', 3,
        { r: 'Evidence-based therapy plus medication referral', approach: 'Match to the guideline', why: 'Moderate depression is treated with evidence-based psychotherapy, coordinating a medication referral for the client to consider', keys: ['moderate severity', 'clear functional impact'], mistake: 'Offering only vague supportive talk, or prescribing or directing medication outside scope' }),
      O('b', 'Simply telling Nadia in a reassuring sort of way that she is really just going through an ordinary rough patch and that she should try to keep herself busy and stay positive and it will very likely all pass on its own before too long', -1,
        { r: 'Generic reassurance is not treatment', approach: 'Reassurance framing', why: 'Generic reassurance is not evidence-based care for a depressive episode', keys: ['active treatment'], mistake: 'Substituting reassurance for treatment' }),
      O('c', 'Starting her on an antidepressant that you will select and adjust yourself over the coming weeks', -2,
        { r: 'Prescribing is outside scope', approach: 'Prescribe framing', why: 'Counselors do not select or adjust medication; that is referred to a prescriber', keys: ['no prescriptive authority'], mistake: 'Acting outside scope of practice' }),
      O('d', 'Focusing sessions only on her sleep hygiene and leaving the depression itself unaddressed', -1,
        { r: 'A single narrow focus is inadequate', approach: 'Narrow-focus framing', why: 'Sleep alone does not treat the depressive episode; the depression is addressed directly', keys: ['treat the depression'], mistake: 'Addressing only one symptom' }),
    ]),
    Q('q7', 'treatment', 'Given passive suicidal thoughts, what should the plan include?', ['R4'], [
      O('a', 'Collaborative safety planning with coping strategies, supports, and means-safety, revisited as treatment proceeds', 3,
        { r: 'Collaborative safety planning', approach: 'Build a safety plan', why: 'Passive ideation warrants a collaborative safety plan with coping strategies, supports, and means-safety, revisited over time', keys: ['passive thoughts, no plan', 'worthlessness'], mistake: 'Using a no-suicide contract instead of a collaborative safety plan' }),
      O('b', 'Having Nadia go ahead and sign a straightforward no-suicide contract in which she simply promises the counselor in writing that she is not going to hurt herself, and then treating that signed promise as the whole of the safety plan', -2,
        { r: 'No-suicide contracts are not evidence-based', approach: 'Contract framing', why: 'No-suicide contracts do not ensure safety and are not a substitute for a collaborative safety plan', keys: ['safety planning, not contracts'], mistake: 'Relying on a no-suicide contract' }),
      O('c', 'Ignoring the passive thoughts entirely because there is no specific plan at this time', -2,
        { r: 'Ignoring ideation is unsafe', approach: 'Dismiss framing', why: 'Passive ideation still warrants safety planning and monitoring', keys: ['address ideation'], mistake: 'Overlooking passive ideation' }),
      O('d', 'Deferring any safety planning until symptoms have fully resolved on their own', -1,
        { r: 'Deferring safety planning is unsafe', approach: 'Delay framing', why: 'Safety planning happens now, while symptoms are present', keys: ['plan now'], mistake: 'Postponing safety planning' }),
    ]),
    Q('q8', 'treatment', 'How should progress be monitored over the course of treatment?', ['R2'], [
      O('a', 'Track symptoms and functioning with a measurement-based approach and adjust the plan and referral as needed', 3,
        { r: 'Measurement-based monitoring', approach: 'Measure and adjust', why: 'Depression care uses measurement-based tracking of symptoms and functioning to guide adjustments and referral', keys: ['moderate depression', 'measurable symptoms'], mistake: 'Continuing indefinitely without tracking response or adjusting the plan' }),
      O('b', 'Simply assuming that as long as Nadia keeps on showing up to her scheduled sessions each week then the treatment must obviously be working perfectly well for her, without ever actually checking on her symptoms or her functioning in any structured way at all', -1,
        { r: 'Attendance is not outcome', approach: 'Attendance framing', why: 'Attendance does not measure symptom response; structured tracking does', keys: ['measure outcomes'], mistake: 'Equating attendance with progress' }),
      O('c', 'Waiting many months before checking whether anything has changed at all', -1,
        { r: 'Infrequent review is inadequate', approach: 'Delay framing', why: 'Response is tracked regularly, not only after long gaps', keys: ['timely review'], mistake: 'Reviewing progress too infrequently' }),
      O('d', 'Deciding whether it is working based only on how you personally feel about the sessions', -1,
        { r: 'Subjective impression is not measurement', approach: 'Subjective framing', why: 'Progress is judged by measured symptoms and functioning, not personal impression', keys: ['objective measures'], mistake: 'Relying on subjective impression' }),
    ]),
    Q('q9', 'treatment', 'How should the counselor coordinate the medication referral?', ['R5'], [
      O('a', 'With her consent and a release, coordinate with the prescriber and share what is needed for collaborative care', 3,
        { r: 'Coordinate with consent', approach: 'Coordinate within consent and scope', why: 'Collaborative care depends on consented coordination with the prescriber', keys: ['medication referral', 'collaborative care'], mistake: 'Working in isolation, or sharing without consent' }),
      O('b', 'Simply going ahead and contacting the prescriber and passing along the entire contents of Nadia’s clinical record and all of her personal history right away without pausing to obtain her consent, on the general theory that coordinating her care is plainly in her interest anyway', -2,
        { r: 'Coordinating without consent breaches confidentiality', approach: 'Assume-consent framing', why: 'A valid release is required before disclosure', keys: ['no release'], mistake: 'Disclosing before consent is documented' }),
      O('c', 'Adjusting her medication dose yourself based on how she reports feeling week to week', -2,
        { r: 'Adjusting medication exceeds scope', approach: 'Self-adjust framing', why: 'Counselors do not adjust medication; the prescriber does', keys: ['no prescriptive authority'], mistake: 'Acting outside scope of practice' }),
      O('d', 'Avoiding any contact with the prescriber so that her counseling stays entirely separate', -1,
        { r: 'No coordination undercuts care', approach: 'Siloed framing', why: 'Consented coordination supports collaborative depression care', keys: ['integrated care'], mistake: 'Refusing helpful, consented coordination' }),
    ]),
    Q('q10', 'counseling', 'Nadia says she feels like a failure and that her friends would be better off without her. The most therapeutic response is to:', ['R4'], [
      O('a', 'Respond with empathy, explore the thought and any risk directly, and gently reflect the depression coloring her view', 3,
        { r: 'Empathize and assess the thought and risk', approach: 'Engage the cognition and safety', why: 'Empathy plus directly exploring the thought and any risk addresses both the alliance and safety while naming the depressive distortion', keys: ['feels like a failure', 'others better off without her'], mistake: 'Either brushing past the statement or reacting with alarm instead of exploring the thought and risk' }),
      O('b', 'Quickly telling Nadia in a very upbeat and cheerful sort of way that she really should not ever think or say things like that about herself, and then moving the conversation along to some more pleasant and less heavy topic so that she does not have to dwell on it', -1,
        { r: 'Brushing past it misses the work', approach: 'Cheerful-deflection framing', why: 'Quickly reassuring and changing the subject misses a clinically important, safety-relevant statement', keys: ['engage the statement'], mistake: 'Deflecting from a meaningful, risk-relevant disclosure' }),
      O('c', 'Reacting with visible alarm and immediately ending the session to arrange a hospitalization', -1,
        { r: 'Overreacting preempts assessment', approach: 'Alarm framing', why: 'The thought is explored and risk assessed before any disposition, not reacted to with alarm', keys: ['assess first'], mistake: 'Jumping to disposition without assessment' }),
      O('d', 'Telling her that many people feel far worse so she has little reason to feel this way', -2,
        { r: 'Minimizing is invalidating', approach: 'Comparison framing', why: 'Comparing her to others invalidates her distress and harms the alliance', keys: ['validate, do not minimize'], mistake: 'Minimizing her distress' }),
    ]),
    Q('q11', 'counseling', 'How can the counselor best support Nadia’s engagement and hope?', ['R2'], [
      O('a', 'Use behavioral activation toward valued activities and build small, achievable steps tied to her own goals', 3,
        { r: 'Behavioral activation and achievable steps', approach: 'Rebuild activity and momentum', why: 'Behavioral activation toward valued activities with small achievable steps counters withdrawal and builds hope', keys: ['lost interest in studies and friends', 'wants to feel like herself'], mistake: 'Waiting passively for motivation to return before any behavioral steps' }),
      O('b', 'Simply instructing Nadia in a rather firm and matter-of-fact way that she really just needs to push herself much harder and to snap out of it and to get all of her usual activities back to normal completely on her own by sheer force of willpower', -1,
        { r: 'Willpower framing is unhelpful', approach: 'Toughen-up framing', why: '“Snap out of it” misunderstands depression and undermines the alliance', keys: ['graded activation'], mistake: 'Demanding willpower instead of graded steps' }),
      O('c', 'Focusing the sessions mainly on cataloguing every low moment of her week in exhaustive detail each time', -1,
        { r: 'Cataloguing lows is not activation', approach: 'Catalogue framing', why: 'Rehearsing every low moment does not build activation or hope', keys: ['forward-focused steps'], mistake: 'Centering sessions on the lows' }),
      O('d', 'Telling her counseling cannot help at all unless she first raises her grades back up herself', -1,
        { r: 'Conditioning care is inappropriate', approach: 'Conditioning framing', why: 'Support proceeds now, not contingent on her first fixing external outcomes', keys: ['engagement matters'], mistake: 'Making care contingent on outcomes' }),
    ]),
    Q('q12', 'ethics', 'Nadia’s risk increases and she describes a plan. The most appropriate action is to:', ['R3'], [
      O('a', 'Complete a structured risk assessment and safety planning, escalating the level of care as clinically indicated', 3,
        { r: 'Assess, safety-plan, escalate as needed', approach: 'Apply risk assessment and safety planning', why: 'Emerging ideation with a plan requires structured assessment, safety planning, and escalation of care as indicated', keys: ['describes a plan', 'moderate depression worsening'], mistake: 'Treating an emerging plan the same as earlier passive ideation with no change in response' }),
      O('b', 'Just having Nadia promise the counselor out loud that she will be perfectly safe until the next scheduled appointment, and then simply carrying on with the regular session exactly as planned without changing anything about the risk response at all', -2,
        { r: 'A verbal promise is not a response', approach: 'Reassurance framing', why: 'A verbal promise does not substitute for structured assessment and safety planning', keys: ['structured response'], mistake: 'Relying on a promise of safety' }),
      O('c', 'Waiting until the next session to see whether the plan resolves on its own before acting', -2,
        { r: 'Delaying with a plan is unsafe', approach: 'Wait-and-see framing', why: 'Ideation with a plan requires prompt action, not waiting', keys: ['active risk'], mistake: 'Postponing action on active risk' }),
      O('d', 'Immediately hospitalizing her regardless of the assessed level of risk or her input', -1,
        { r: 'Match care to assessed risk', approach: 'Reflexive-hospitalization framing', why: 'Disposition follows a careful risk assessment and collaboration, not a reflex', keys: ['stratified decision'], mistake: 'Hospitalizing reflexively without assessment' }),
    ]),
    Q('q13', 'ethics', 'Nadia asks the counselor to keep her depression from her academic program, worried about stigma. The most appropriate response is to:', ['R5'], [
      O('a', 'Honor her confidentiality within its limits and only disclose with consent or where a safety exception applies', 3,
        { r: 'Protect confidentiality within its limits', approach: 'Respect confidentiality and its limits', why: 'Her information is protected and disclosed only with consent or where a safety exception applies', keys: ['fears academic stigma', 'wants privacy'], mistake: 'Either disclosing to the program without consent or promising an absolute confidentiality that ignores safety exceptions' }),
      O('b', 'Simply going ahead and reaching out to inform her academic program about the depression on her behalf anyway, on the general assumption that surely they would want to know about it and that it must obviously be in her own best interest for them to be told', -2,
        { r: 'Disclosing without consent breaches confidentiality', approach: 'Assume-consent framing', why: 'Disclosure to the program requires her consent absent a safety exception', keys: ['no consent'], mistake: 'Disclosing without consent' }),
      O('c', 'Promising her that absolutely nothing she ever says will be disclosed under any circumstance at all', -1,
        { r: 'Absolute promises ignore limits', approach: 'Absolutist framing', why: 'Confidentiality has limits, such as safety exceptions, that are explained honestly', keys: ['honest limits'], mistake: 'Overpromising absolute confidentiality' }),
      O('d', 'Refusing to discuss confidentiality at all and simply changing the subject when she raises it', -1,
        { r: 'Evasion undermines transparency', approach: 'Evasion framing', why: 'Confidentiality and its limits are explained honestly, not evaded', keys: ['transparent limits'], mistake: 'Being evasive about confidentiality' }),
    ]),
  ],
};

// ============================================================================
// D204 — Major Depressive Disorder, Severe (F33.2) — Depressive — hard
// ============================================================================
const D204 = {
  id: 'ncmhce-D204',
  title: 'Severe depression with near-total functional shutdown',
  category: 'Depressive',
  difficulty: 'hard',
  primaryDiagnosis: { name: 'Major Depressive Disorder, Severe', code: 'F33.2' },
  diagnosis: { name: 'Major Depressive Disorder, Severe', code: 'F33.2' },
  differentialOptions: [
    { id: 'do1', name: 'Major Depressive Disorder, Severe', isCorrect: true },
    { id: 'do2', name: 'Major Depressive Disorder, Moderate', isCorrect: false },
    { id: 'do3', name: 'Persistent Depressive Disorder', isCorrect: false },
    { id: 'do4', name: 'Major Depressive Disorder, Severe with Psychotic Features', isCorrect: false },
  ],
  narrative: {
    intake:
      'Gregory Tanaka, a 47-year-old, is brought in by his sister after weeks of near-total shutdown: he barely eats, rarely leaves his bed, has ' +
      'stopped bathing and working, shows marked psychomotor slowing, and expresses profound hopelessness and that life is not worth living.',
    session1:
      'His symptoms are numerous, intense, and pervasively disabling, consistent with a severe major depressive episode rather than a moderate one, ' +
      'and they represent a distinct severe episode rather than a chronic low-grade baseline. He has no hallucinations or delusions on assessment.',
    session2:
      'He voices passive death wishes and the counselor recognizes high acuity requiring urgent, structured suicide-risk assessment and a higher ' +
      'level of care. There is no evidence of psychotic features, and a medication evaluation and coordinated, intensive plan are indicated.',
  },
  diagnosticRationale:
    'Numerous, intense depressive symptoms causing pervasive functional incapacitation, with marked psychomotor slowing and hopelessness, indicate a ' +
    'severe major depressive episode, distinct from a moderate episode, a chronic persistent depressive baseline, and a psychotic-featured episode ' +
    '(no hallucinations or delusions), and demanding urgent suicide-risk assessment and a higher level of care.',
  references: [
    { id: 'R1', source: 'DSM-5-TR', detail: 'MDD severity specifiers; severe = many symptoms, marked intensity, serious functional impairment; psychotic-features specifier' },
    { id: 'R2', source: 'VA/DoD CPG', detail: 'Severe depression and suicide-risk pathways; stepped/higher level of care' },
    { id: 'R3', source: 'C-SSRS', detail: 'Structured suicide-risk assessment for high-acuity depression' },
    { id: 'R4', source: 'Stanley-Brown SPI', detail: 'Collaborative safety planning and means-safety' },
    { id: 'R5', source: 'ACA Code of Ethics', detail: 'A.1., B.2., C.2.: welfare, safety, coordination, and competence' },
  ],
  questions: [
    Q('q1', 'intake', 'What is most important to confirm to support a severe major depressive episode?', ['R1'], [
      O('a', 'Numerous, intense symptoms causing serious, pervasive functional impairment beyond a moderate presentation', 3,
        { r: 'Numerous, intense, pervasively disabling', approach: 'Confirm the severity criteria', why: 'Severe depression is marked by numerous, intense symptoms with serious functional impairment, exceeding a moderate episode', keys: ['barely eats, rarely leaves bed', 'psychomotor slowing'], mistake: 'Underrating a pervasively disabling presentation as merely moderate' }),
      O('b', 'Mainly whether Gregory himself is able to clearly point to one single specific recent event in his life that he is quite personally convinced must really be the underlying root cause of absolutely everything he is going through', -1,
        { r: 'A precipitant is not the criterion', approach: 'Trigger framing', why: 'Etiology is not the defining feature of episode severity', keys: ['severity-based focus'], mistake: 'Using a trigger as the diagnostic test' }),
      O('c', 'That his symptoms have gotten a little worse over the past few days than they were last week', -1,
        { r: 'Recent change is not the defining feature', approach: 'Recent-change framing', why: 'The overall severity, not the exact recent trajectory, defines the specifier', keys: ['overall severity'], mistake: 'Confusing the recent course with the severity criteria' }),
      O('d', 'That he currently meets the full symptom count required for a discrete manic episode at this time', 0,
        { r: 'Manic count is not relevant', approach: 'Mania-criteria framing', why: 'The focus is a severe depressive episode, not a manic one', keys: ['depression-focused'], mistake: 'Applying manic criteria here' }),
    ]),
    Q('q2', 'core', 'Which feature best distinguishes this from a moderate episode?', ['R1'], [
      O('a', 'The number and intensity of symptoms and the serious, pervasive functional incapacitation exceed a moderate presentation', 3,
        { r: 'Greater number, intensity, and incapacitation', approach: 'Contrast the severity level', why: 'Severity is judged by symptom number and intensity and degree of impairment; his pervasive incapacitation exceeds a moderate episode', keys: ['near-total shutdown', 'stopped self-care and work'], mistake: 'Rating a pervasively incapacitating episode as moderate' }),
      O('b', 'The fact that Gregory is quite clearly feeling really rather low and down and depressed in his mood for most of the day on the great majority of the individual days across the week', -1,
        { r: 'Depressed mood occurs in both', approach: 'Mood framing', why: 'Depressed mood occurs in both moderate and severe episodes; the number, intensity, and impairment differ', keys: ['shared feature'], mistake: 'Using low mood itself to grade severity' }),
      O('c', 'The trouble he has with his sleep and his appetite during this period', -1,
        { r: 'These symptoms are nonspecific to severity', approach: 'Symptom framing', why: 'Sleep and appetite changes occur across severities; the overall impairment differs', keys: ['shared symptoms'], mistake: 'Reading individual symptoms as decisive for severity' }),
      O('d', 'The way his mood dips a little more in the mornings than later in the day', 0,
        { r: 'Diurnal pattern is not diagnostic of severity', approach: 'Time-of-day framing', why: 'Diurnal variation does not grade severity', keys: ['nonspecific timing'], mistake: 'Over-reading a circadian pattern' }),
    ]),
    Q('q3', 'core', 'How does this differ from persistent depressive disorder?', ['R1'], [
      O('a', 'This is a distinct, acutely severe episode, not a chronic low-grade course lasting two or more years', 3,
        { r: 'Acute severe episode versus chronic baseline', approach: 'Contrast acuity with chronicity', why: 'Persistent depressive disorder is a chronic, low-grade course; his is a distinct, acutely severe episode', keys: ['weeks of severe shutdown', 'clear change from baseline'], mistake: 'Reading an acute severe episode as a lifelong low-grade depression' }),
      O('b', 'The fact that he is very plainly experiencing a genuinely low and rather sad and generally down sort of mood across most of the hours of most of the days that make up his week at the moment', -1,
        { r: 'Low mood occurs in both', approach: 'Mood framing', why: 'Low mood occurs in both; the acuity and severity differ', keys: ['shared feature'], mistake: 'Using low mood to differentiate' }),
      O('c', 'The low energy and the hopelessness that he describes right now', -1,
        { r: 'These symptoms are nonspecific', approach: 'Symptom framing', why: 'Low energy and hopelessness occur in both; the course differs', keys: ['shared symptoms'], mistake: 'Reading nonspecific symptoms as decisive' }),
      O('d', 'The way his mood feels a little worse on days he has slept poorly', 0,
        { r: 'Sleep effects are nonspecific', approach: 'Sleep framing', why: 'Worse mood after poor sleep does not distinguish the two', keys: ['nonspecific factor'], mistake: 'Over-reading a sleep effect' }),
    ]),
    Q('q4', 'core', 'How does this differ from a severe episode with psychotic features?', ['R1'], [
      O('a', 'He has no hallucinations or delusions, so the psychotic-features specifier does not apply to his episode', 3,
        { r: 'No psychosis — specifier does not apply', approach: 'Assess for psychotic features', why: 'The psychotic-features specifier requires hallucinations or delusions; he has none, so it does not apply', keys: ['no hallucinations or delusions', 'reality testing intact'], mistake: 'Adding a psychotic-features specifier without evidence of hallucinations or delusions' }),
      O('b', 'The fact that during this current period of his life he is very clearly and unmistakably experiencing a genuinely severe and profoundly disabling degree of depression that affects nearly everything he does', -1,
        { r: 'Severe depression occurs in both', approach: 'Severity framing', why: 'Severe depression occurs with and without psychotic features; the presence of psychosis is what differs', keys: ['shared feature'], mistake: 'Using severity itself to differentiate' }),
      O('c', 'The hopelessness and the profound withdrawal that he shows right now', -1,
        { r: 'These features are nonspecific', approach: 'Symptom framing', why: 'Hopelessness and withdrawal occur in both; psychotic features are what differ', keys: ['shared symptoms'], mistake: 'Reading nonspecific features as decisive' }),
      O('d', 'The way his withdrawal seems a little deeper on the days his sister cannot visit', 0,
        { r: 'Situational variation is nonspecific', approach: 'Situational framing', why: 'Day-to-day variation does not indicate psychotic features', keys: ['nonspecific factor'], mistake: 'Over-reading situational variation' }),
    ]),
    Q('q5', 'intake', 'What is the single most urgent assessment step given his acuity?', ['R3'], [
      O('a', 'Conduct an urgent structured suicide-risk assessment, since severe depression with death wishes is high-acuity', 3,
        { r: 'Urgent structured suicide-risk assessment', approach: 'Screen risk urgently', why: 'Severe depression with passive death wishes is high-acuity and demands an urgent, structured suicide-risk assessment', keys: ['life not worth living', 'near-total shutdown'], mistake: 'Proceeding with routine intake before urgently assessing suicide risk' }),
      O('b', 'Mainly taking the time to gather a very complete and exhaustive developmental and social history covering his entire life story in fine detail before turning at all to the question of his present safety or his current level of risk', -2,
        { r: 'Deferring safety is unsafe', approach: 'History-first framing', why: 'A full history does not displace urgent suicide-risk assessment in a high-acuity presentation', keys: ['safety first'], mistake: 'Sequencing safety behind background data' }),
      O('c', 'Assuming there is no risk because he has not stated a specific plan yet', -2,
        { r: 'Assuming no risk is unsafe', approach: 'Dismissal framing', why: 'Passive death wishes in severe depression require structured assessment regardless of a stated plan', keys: ['assess regardless'], mistake: 'Dismissing risk based on the absence of a stated plan' }),
      O('d', 'Focusing only on encouraging him to eat more for now and returning to safety later', -1,
        { r: 'Sequencing safety behind self-care is unsafe', approach: 'Single-issue framing', why: 'Encouraging self-care does not displace assessing current safety', keys: ['safety first'], mistake: 'Sequencing safety behind other needs' }),
    ]),
    Q('q6', 'treatment', 'What is the most appropriate immediate treatment step given his severity and risk?', ['R2'], [
      O('a', 'Coordinate an urgent medication evaluation and a higher, appropriate level of care alongside safety planning', 3,
        { r: 'Urgent higher level of care and med evaluation', approach: 'Escalate the level of care', why: 'Severe, high-risk depression warrants urgent medication evaluation and a higher level of care with safety planning', keys: ['pervasive incapacitation', 'death wishes'], mistake: 'Managing a severe, high-risk episode with routine weekly outpatient talk alone' }),
      O('b', 'Simply continuing with a standard once-weekly supportive-counseling arrangement exactly as if this were an ordinary mild presentation, and just assuming that things will very likely improve well enough on their own given a bit more time', -2,
        { r: 'Undertreating severe risk is unsafe', approach: 'Business-as-usual framing', why: 'A severe, high-risk episode needs escalated care, not routine weekly talk alone', keys: ['escalate care'], mistake: 'Undertreating a high-acuity presentation' }),
      O('c', 'Starting him on an antidepressant that you will select and titrate yourself over the coming weeks', -2,
        { r: 'Prescribing is outside scope', approach: 'Prescribe framing', why: 'Counselors do not select or titrate medication; that is referred urgently to a prescriber', keys: ['no prescriptive authority'], mistake: 'Acting outside scope of practice' }),
      O('d', 'Focusing only on sleep-hygiene tips and deferring the level-of-care decision indefinitely', -1,
        { r: 'A narrow focus is inadequate here', approach: 'Narrow-focus framing', why: 'Sleep tips do not address a severe, high-risk episode; the level of care is decided now', keys: ['address acuity'], mistake: 'Addressing only one symptom in a crisis-level presentation' }),
    ]),
    Q('q7', 'treatment', 'What should the safety plan prioritize given his risk?', ['R4'], [
      O('a', 'Collaborative safety planning with means-safety, supports, and clear steps for escalation', 3,
        { r: 'Safety planning with means-safety and escalation', approach: 'Build a robust safety plan', why: 'High-risk depression calls for collaborative safety planning emphasizing means-safety, supports, and escalation steps', keys: ['death wishes', 'high acuity'], mistake: 'Relying on a no-suicide contract instead of a collaborative safety plan with means-safety' }),
      O('b', 'Simply having Gregory sign a written no-suicide contract in which he formally promises the counselor that he will not harm himself, and then treating that single signed promise as the entire safety plan for a person at this level of risk', -2,
        { r: 'No-suicide contracts are not evidence-based', approach: 'Contract framing', why: 'No-suicide contracts do not ensure safety and are not a substitute for a collaborative safety plan', keys: ['safety planning, not contracts'], mistake: 'Relying on a no-suicide contract' }),
      O('c', 'Leaving means-safety out of the plan entirely to avoid an uncomfortable conversation', -2,
        { r: 'Omitting means-safety is unsafe', approach: 'Avoidance framing', why: 'Means-safety is a core, evidence-based element of safety planning for suicide risk', keys: ['means-safety'], mistake: 'Omitting means-safety' }),
      O('d', 'Deferring safety planning until after the medication evaluation is complete', -1,
        { r: 'Deferring safety planning is unsafe', approach: 'Delay framing', why: 'Safety planning happens now, alongside the medication referral', keys: ['plan now'], mistake: 'Postponing safety planning' }),
    ]),
    Q('q8', 'treatment', 'How should the counselor coordinate the higher level of care?', ['R5'], [
      O('a', 'With appropriate consent or an applicable safety exception, coordinate the referral and share what is needed', 3,
        { r: 'Coordinate the referral with consent/exception', approach: 'Coordinate lawfully and clinically', why: 'A higher level of care is coordinated with consent or under an applicable safety exception, sharing what is needed for safe care', keys: ['higher level of care', 'high acuity'], mistake: 'Either coordinating without any consent basis or failing to coordinate the needed referral at all' }),
      O('b', 'Simply taking it upon himself to personally manage the entire severe, high-risk episode single-handedly within his own once-weekly outpatient sessions, rather than actually involving any of the higher-level or medical resources that a presentation of this acuity plainly calls for', -2,
        { r: 'Going it alone at this acuity is unsafe', approach: 'Overreach framing', why: 'A severe, high-risk episode requires coordinated higher-level care, not solo outpatient management', keys: ['coordinate care'], mistake: 'Managing beyond what the setting safely allows' }),
      O('c', 'Sharing his entire history with everyone in the building regardless of what is needed', -2,
        { r: 'Over-disclosure is improper', approach: 'Over-disclosure framing', why: 'Even for safety, disclosure follows minimum-necessary and lawful limits', keys: ['minimum necessary'], mistake: 'Over-disclosing beyond what is needed' }),
      O('d', 'Deciding what to share based only on personal feelings rather than what safe care requires', -1,
        { r: 'Personal feelings are not the standard', approach: 'Subjective framing', why: 'Coordination follows what safe care and consent/law require, not personal feelings', keys: ['objective standard'], mistake: 'Basing coordination on personal feelings' }),
    ]),
    Q('q9', 'treatment', 'What should the ongoing plan include once he is stabilized?', ['R2'], [
      O('a', 'Continued evidence-based therapy, relapse-prevention, and coordinated medication follow-up matched to his needs', 3,
        { r: 'Continued therapy, relapse prevention, med follow-up', approach: 'Plan beyond stabilization', why: 'After stabilization, continued evidence-based therapy, relapse-prevention, and coordinated medication follow-up support recovery', keys: ['severe episode', 'high relapse risk'], mistake: 'Treating stabilization as the end point rather than a bridge to ongoing, coordinated care' }),
      O('b', 'Simply assuming that once the immediate crisis has passed and he is a little more stable there is really nothing further at all that needs to be done, and that no ongoing therapy or medication follow-up or relapse planning of any kind will be necessary going forward', -2,
        { r: 'Assuming no follow-up misses the work', approach: 'Assume-resolved framing', why: 'Severe depression carries relapse risk; ongoing therapy and follow-up are needed', keys: ['ongoing care'], mistake: 'Skipping needed follow-up' }),
      O('c', 'Discharging him abruptly the moment he looks slightly better, with no follow-up plan', -1,
        { r: 'Abrupt discharge is premature', approach: 'Premature-discharge framing', why: 'A coordinated follow-up plan is arranged, not an abrupt discharge at first improvement', keys: ['coordinated follow-up'], mistake: 'Discharging without a plan' }),
      O('d', 'Focusing the ongoing plan only on cataloguing symptoms without any active treatment', -1,
        { r: 'Monitoring without treatment is inadequate', approach: 'Monitor-only framing', why: 'Ongoing care includes active treatment, not monitoring alone', keys: ['active treatment'], mistake: 'Monitoring without treating' }),
    ]),
    Q('q10', 'counseling', 'Gregory says, almost inaudibly, that everyone would be relieved if he were gone. The most therapeutic response is to:', ['R3'], [
      O('a', 'Respond with calm empathy and directly, sensitively assess his suicidal thinking and current risk', 3,
        { r: 'Empathize and directly assess risk', approach: 'Engage the statement and safety', why: 'A calm, empathic, direct assessment of his suicidal thinking addresses both the alliance and safety', keys: ['everyone relieved if gone', 'severe depression'], mistake: 'Either avoiding the statement or responding with alarm instead of a calm, direct risk assessment' }),
      O('b', 'Quickly telling Gregory in a very warm and upbeat and encouraging sort of way that of course that simply is not true at all and that his family loves him very much, and then steering the conversation gently along toward some lighter and easier topic', -1,
        { r: 'Reassure-and-deflect misses the work', approach: 'Cheerful-deflection framing', why: 'Quick reassurance and changing the subject miss a critical, safety-relevant disclosure', keys: ['engage the statement'], mistake: 'Deflecting from a meaningful, risk-relevant disclosure' }),
      O('c', 'Reacting with visible panic and abruptly leaving the room to make calls', -1,
        { r: 'Panic preempts assessment', approach: 'Alarm framing', why: 'The statement is assessed calmly and directly before any disposition, not reacted to with panic', keys: ['assess first'], mistake: 'Reacting with alarm instead of assessing' }),
      O('d', 'Telling him that plenty of people have things far worse and he should count his blessings', -2,
        { r: 'Minimizing is invalidating and unsafe', approach: 'Comparison framing', why: 'Comparing his suffering to others invalidates him and can heighten risk', keys: ['validate, do not minimize'], mistake: 'Minimizing a high-risk disclosure' }),
    ]),
    Q('q11', 'counseling', 'How can the counselor best support Gregory’s engagement while he is so shut down?', ['R2'], [
      O('a', 'Meet him with patience and very small, achievable steps, honoring his pace while sustaining hope and connection', 3,
        { r: 'Patience, small steps, hope, connection', approach: 'Engage gently at his capacity', why: 'Patience, very small achievable steps, and sustained connection meet a profoundly shut-down client where he is', keys: ['near-total shutdown', 'brought in by sister'], mistake: 'Pushing large expectations that a severely depressed, shut-down client cannot meet' }),
      O('b', 'Simply instructing Gregory in a rather firm and no-nonsense way that he really just needs to get himself up out of bed and get straight back to his job and resume all of his usual responsibilities immediately and entirely on his own by sheer willpower alone', -2,
        { r: 'Willpower demands are harmful here', approach: 'Toughen-up framing', why: 'Demanding immediate full functioning misunderstands severe depression and harms the alliance', keys: ['graded, gentle steps'], mistake: 'Imposing demands a severely depressed client cannot meet' }),
      O('c', 'Focusing the sessions mainly on cataloguing every hopeless thought in exhaustive detail each time', -1,
        { r: 'Cataloguing hopelessness is not support', approach: 'Catalogue framing', why: 'Rehearsing every hopeless thought does not build hope or engagement', keys: ['forward-focused connection'], mistake: 'Centering sessions on the hopelessness' }),
      O('d', 'Telling him counseling cannot help at all unless he first returns to work on his own', -1,
        { r: 'Conditioning care is inappropriate', approach: 'Conditioning framing', why: 'Support proceeds now, not contingent on him first resuming full functioning', keys: ['engagement matters'], mistake: 'Making care contingent on recovery' }),
    ]),
    Q('q12', 'ethics', 'The counselor judges Gregory to be at imminent risk but he refuses a higher level of care. The most appropriate action is to:', ['R5'], [
      O('a', 'Assess capacity and imminent risk and take the appropriate protective steps under the applicable legal framework', 3,
        { r: 'Assess capacity/risk; act protectively per law', approach: 'Balance autonomy and imminent risk', why: 'Imminent risk with refusal requires assessing capacity and risk and taking protective steps under the applicable legal framework', keys: ['imminent risk', 'refuses higher care'], mistake: 'Either simply accepting the refusal into danger or coercing him without assessment or the proper legal process' }),
      O('b', 'Simply going along with his refusal entirely and sending him home as usual without taking any further protective step at all, on the general principle that a competent adult always has an absolute right to decline any and all care under every possible circumstance', -2,
        { r: 'Ignoring imminent risk is unsafe', approach: 'Autonomy-absolutist framing', why: 'Imminent risk can justify protective action under the law despite refusal', keys: ['imminent-risk exception'], mistake: 'Treating autonomy as absolute in the face of imminent danger' }),
      O('c', 'Physically preventing him from leaving and restraining him yourself until he agrees to go', -2,
        { r: 'Personal restraint is inappropriate', approach: 'Restraint framing', why: 'The counselor coordinates a lawful protective response rather than personally restraining him', keys: ['lawful process'], mistake: 'Using inappropriate physical measures' }),
      O('d', 'Telling him his depression is nothing serious so that he agrees to stay a little longer', -1,
        { r: 'Minimizing the danger is dishonest', approach: 'Minimize framing', why: 'He needs accurate information about the seriousness, not false reassurance', keys: ['honest information'], mistake: 'Misrepresenting the clinical seriousness' }),
    ]),
    Q('q13', 'ethics', 'The counselor has limited experience with this level of acuity. The most ethical course of action is to:', ['R5'], [
      O('a', 'Seek consultation and coordinate the appropriate higher-level resources rather than managing the acuity alone', 3,
        { r: 'Consult and coordinate within competence', approach: 'Practice within competence', why: 'ACA C.2. and safety require consultation and coordinated higher-level care for a high-acuity presentation beyond one’s experience', keys: ['limited experience', 'high acuity'], mistake: 'Managing a high-acuity, high-risk episode alone without consultation or coordination' }),
      O('b', 'Simply continuing to manage the entire case entirely on his own regardless of the acuity, mainly in order to preserve the continuity of the therapeutic relationship that he and Gregory have been building together over their time working with each other', -2,
        { r: 'Going it alone is unsafe', approach: 'Continuity-over-competence', why: 'Continuity does not justify managing acuity beyond competence', keys: ['competence and safety'], mistake: 'Prioritizing continuity over safety' }),
      O('c', 'Telling the family the presentation is not serious enough to need any additional resources', -2,
        { r: 'Minimizing the acuity is dangerous', approach: 'Downplay framing', why: 'A severe, high-risk episode warrants competent, coordinated care', keys: ['high acuity'], mistake: 'Underestimating the acuity' }),
      O('d', 'Transferring the case at once with no explanation, coordination, or plan for the transition', -1,
        { r: 'Abrupt transfer mishandles acuity', approach: 'Uncoordinated handoff', why: 'A high-acuity case requires coordinated communication, not an abrupt, uncommunicated transfer', keys: ['coordinated response'], mistake: 'Dropping the case without coordination' }),
    ]),
  ],
};

// ============================================================================
// D205 — Persistent Depressive Disorder (F34.1) — Depressive — hard
// ============================================================================
const D205 = {
  id: 'ncmhce-D205',
  title: 'Five years of low-grade depression a client calls her normal',
  category: 'Depressive',
  difficulty: 'hard',
  primaryDiagnosis: { name: 'Persistent Depressive Disorder', code: 'F34.1' },
  diagnosis: { name: 'Persistent Depressive Disorder', code: 'F34.1' },
  differentialOptions: [
    { id: 'do1', name: 'Persistent Depressive Disorder', isCorrect: true },
    { id: 'do2', name: 'Major Depressive Disorder, Moderate', isCorrect: false },
    { id: 'do3', name: 'Adjustment Disorder, with Depressed Mood', isCorrect: false },
    { id: 'do4', name: 'Cyclothymic Disorder', isCorrect: false },
  ],
  narrative: {
    intake:
      'Marisol Vega, a 39-year-old, describes about five years of near-daily low mood, low energy, poor self-esteem, and a joyless, going-through-the-' +
      'motions quality that she has come to regard as simply her normal personality rather than an illness.',
    session1:
      'Her depressed mood has been present more days than not for well over two years without a symptom-free stretch of more than two months, ' +
      'consistent with a chronic persistent course rather than a single discrete episode. There have never been hypomanic periods.',
    session2:
      'She is functioning but joyless, denies any past elevated-mood episodes, and her symptoms long predate any recent stressor. The counselor ' +
      'screens her suicide risk, finds chronic low-grade hopelessness without a plan, and frames evidence-based therapy with a medication referral offered.',
  },
  diagnosticRationale:
    'Depressed mood present more days than not for at least two years, without a symptom-free interval exceeding two months and without any ' +
    'hypomanic periods, best fits persistent depressive disorder, distinct from a discrete moderate episode, a recent stressor-bound adjustment ' +
    'reaction, and cyclothymia, and still warranting suicide-risk screening.',
  references: [
    { id: 'R1', source: 'DSM-5-TR', detail: 'Persistent depressive disorder: depressed mood more days than not for 2+ years; no 2-month symptom-free interval' },
    { id: 'R2', source: 'NICE guidelines', detail: 'Chronic depression: evidence-based psychotherapy and stepped care' },
    { id: 'R3', source: 'C-SSRS', detail: 'Structured suicide-risk screening in chronic depression' },
    { id: 'R4', source: 'Corey (Theory & Practice)', detail: 'Engaging chronic, ego-syntonic depression and building hope' },
    { id: 'R5', source: 'ACA Code of Ethics', detail: 'A.1., B.2., C.2.: welfare, safety, coordination, and competence' },
  ],
  questions: [
    Q('q1', 'intake', 'What is most important to confirm to support persistent depressive disorder?', ['R1'], [
      O('a', 'Depressed mood present more days than not for at least two years without a symptom-free interval over two months', 3,
        { r: 'Chronic 2-year course, no long remission', approach: 'Confirm the chronicity criteria', why: 'Persistent depressive disorder requires depressed mood more days than not for at least two years without a two-month symptom-free interval', keys: ['about five years of near-daily low mood', 'no lasting symptom-free stretch'], mistake: 'Diagnosing a chronic course without confirming the two-year duration and the absence of a sustained remission' }),
      O('b', 'Mainly whether Marisol is personally able to identify one single specific event somewhere in her past that she is really quite convinced first set off the whole of her long-standing pattern of low mood', -1,
        { r: 'A precipitant is not the criterion', approach: 'Trigger framing', why: 'Etiology is not the defining feature of the chronic course', keys: ['course-based focus'], mistake: 'Using a trigger as the diagnostic test' }),
      O('c', 'That her mood has been a little worse over the past few days than earlier in the week', -1,
        { r: 'Recent change is not the defining feature', approach: 'Recent-change framing', why: 'The chronic course, not the exact recent trajectory, defines the diagnosis', keys: ['chronic course'], mistake: 'Confusing the recent trajectory with the criteria' }),
      O('d', 'That she currently meets the full symptom count required for a discrete manic episode at this time', 0,
        { r: 'Manic count is not relevant', approach: 'Mania-criteria framing', why: 'The focus is a chronic depressive course, not a manic episode', keys: ['depression-focused'], mistake: 'Applying manic criteria here' }),
    ]),
    Q('q2', 'core', 'Which feature best distinguishes this from a discrete moderate major depressive episode?', ['R1'], [
      O('a', 'The chronic multi-year, more-days-than-not course, not a distinct recent episode with a clear change from baseline', 3,
        { r: 'Chronic course versus a discrete episode', approach: 'Contrast chronicity with an episode', why: 'A moderate episode is a distinct recent change; hers is a chronic, more-days-than-not course over years', keys: ['five-year course', 'regards it as her normal'], mistake: 'Reading a chronic low-grade course as a single discrete episode' }),
      O('b', 'The fact that she is very clearly experiencing a genuinely low and rather flat and joyless sort of mood across the great majority of the individual days that make up her typical week at present', -1,
        { r: 'Low mood occurs in both', approach: 'Mood framing', why: 'Low mood occurs in both; the chronicity and course differ', keys: ['shared feature'], mistake: 'Using low mood to differentiate' }),
      O('c', 'The low energy and the poor self-esteem that she describes right now', -1,
        { r: 'These symptoms are nonspecific', approach: 'Symptom framing', why: 'Low energy and poor self-esteem occur in both; the course differs', keys: ['shared symptoms'], mistake: 'Reading nonspecific symptoms as decisive' }),
      O('d', 'The way her mood dips a little more in the mornings than later in the day', 0,
        { r: 'Diurnal pattern is not diagnostic', approach: 'Time-of-day framing', why: 'Diurnal variation does not distinguish the two', keys: ['nonspecific timing'], mistake: 'Over-reading a circadian pattern' }),
    ]),
    Q('q3', 'core', 'How does this differ from an adjustment disorder with depressed mood?', ['R1'], [
      O('a', 'Her low mood is chronic and long predates any recent stressor, not a time-limited reaction to one', 3,
        { r: 'Chronic and predates any stressor', approach: 'Contrast chronicity with a stressor reaction', why: 'An adjustment disorder is a time-limited reaction to a recent stressor; her low mood is chronic and predates any such event', keys: ['five-year course', 'predates recent stressors'], mistake: 'Attributing a long-standing chronic depression to a recent stressor' }),
      O('b', 'The fact that there may well have been at least some amount of ordinary stress and difficulty present here and there across the various different periods of her life over these past several years', -1,
        { r: 'Stress can be present in both', approach: 'Stressor framing', why: 'Stress can accompany both; the chronic course predating any stressor is what differs', keys: ['shared feature'], mistake: 'Using the presence of stress to differentiate' }),
      O('c', 'The sadness and the flatness that she feels in her current circumstances', -1,
        { r: 'Distress is nonspecific', approach: 'Distress framing', why: 'Distress occurs in both; the chronicity differs', keys: ['shared affect'], mistake: 'Reading distress as decisive' }),
      O('d', 'The way her mood feels a little worse during especially busy weeks', 0,
        { r: 'Stress reactivity is nonspecific', approach: 'Stress framing', why: 'Worsening during busy times does not distinguish the two', keys: ['nonspecific reactivity'], mistake: 'Using stress sensitivity to differentiate' }),
    ]),
    Q('q4', 'core', 'How does this differ from cyclothymic disorder?', ['R1'], [
      O('a', 'She has only chronic depressive symptoms with no hypomanic periods, not alternating hypomanic and depressive symptoms', 3,
        { r: 'No hypomanic periods — not cyclothymia', approach: 'Screen for hypomanic symptoms', why: 'Cyclothymia involves alternating hypomanic and depressive symptoms; she has only chronic depressive symptoms with no hypomania', keys: ['no elevated-mood periods', 'purely depressive course'], mistake: 'Overlooking that cyclothymia requires hypomanic-range symptoms she does not have' }),
      O('b', 'The fact that across this long stretch of years she has quite consistently and persistently felt really rather low and down and flat in her general mood for most of the time on most of her days', -1,
        { r: 'Chronic low mood occurs in both', approach: 'Mood framing', why: 'Chronic low mood can occur in both; the presence of hypomanic symptoms is what differs', keys: ['shared feature'], mistake: 'Using chronic low mood to differentiate' }),
      O('c', 'The low self-esteem and the low energy that she describes right now', -1,
        { r: 'These symptoms are nonspecific', approach: 'Symptom framing', why: 'Low self-esteem and low energy occur in both; hypomanic symptoms are what differ', keys: ['shared symptoms'], mistake: 'Reading nonspecific symptoms as decisive' }),
      O('d', 'The way her mood feels a little worse on days she has slept poorly', 0,
        { r: 'Sleep effects are nonspecific', approach: 'Sleep framing', why: 'Worse mood after poor sleep does not distinguish the two', keys: ['nonspecific factor'], mistake: 'Over-reading a sleep effect' }),
    ]),
    Q('q5', 'intake', 'What important assessment step should not be skipped despite the chronic, low-grade picture?', ['R3'], [
      O('a', 'A structured suicide-risk assessment, since chronic depression and hopelessness still carry risk', 3,
        { r: 'Structured suicide-risk assessment', approach: 'Screen risk directly', why: 'Chronic depression with hopelessness still carries suicide risk, so a structured assessment is essential', keys: ['chronic hopelessness', 'long-standing low mood'], mistake: 'Skipping suicide-risk assessment because the presentation seems low-grade and stable' }),
      O('b', 'Mainly getting a very complete and detailed accounting of every job she has ever held and every place she has ever lived across the whole of her adult life before turning at all to the question of her present safety', -2,
        { r: 'Deferring safety is unsafe', approach: 'History-first framing', why: 'An exhaustive work-and-residence history does not displace assessing current suicide risk', keys: ['safety first'], mistake: 'Sequencing safety behind background data' }),
      O('c', 'Assuming there is no risk because she has lived with these symptoms for years and still functions', -2,
        { r: 'Assuming no risk is unsafe', approach: 'Dismissal framing', why: 'Chronicity and functioning do not rule out risk; structured assessment is still required', keys: ['assess regardless'], mistake: 'Dismissing risk based on chronicity' }),
      O('d', 'Focusing only on lifestyle tips for now and returning to any safety questions much later', -1,
        { r: 'Sequencing safety behind tips is unsafe', approach: 'Single-issue framing', why: 'Lifestyle guidance does not displace assessing current safety', keys: ['safety first'], mistake: 'Sequencing safety behind other needs' }),
    ]),
    Q('q6', 'treatment', 'What is the most appropriate treatment approach for her chronic depression?', ['R2'], [
      O('a', 'Evidence-based psychotherapy for chronic depression and a coordinated medication referral to consider', 3,
        { r: 'Evidence-based therapy plus medication referral', approach: 'Match to the guideline', why: 'Chronic depression is treated with evidence-based psychotherapy and a coordinated medication referral for the client to consider', keys: ['chronic course', 'functional but joyless'], mistake: 'Assuming a chronic, ego-syntonic depression is untreatable rather than offering evidence-based care' }),
      O('b', 'Simply agreeing with Marisol’s own view that this is really just her fixed personality and her permanent normal, and therefore concluding together with her that there is not really any point in attempting any active treatment for it at all', -2,
        { r: 'Therapeutic nihilism is a mistake', approach: 'Nihilism framing', why: 'Chronic depression is treatable; agreeing it is untreatable forecloses effective care', keys: ['treatable condition'], mistake: 'Accepting the illness as an untreatable trait' }),
      O('c', 'Starting her on an antidepressant that you will select and adjust yourself over the coming weeks', -2,
        { r: 'Prescribing is outside scope', approach: 'Prescribe framing', why: 'Counselors do not select or adjust medication; that is referred to a prescriber', keys: ['no prescriptive authority'], mistake: 'Acting outside scope of practice' }),
      O('d', 'Focusing sessions only on her sleep and leaving the chronic depression unaddressed', -1,
        { r: 'A narrow focus is inadequate', approach: 'Narrow-focus framing', why: 'Sleep alone does not treat chronic depression; the depression is addressed directly', keys: ['treat the depression'], mistake: 'Addressing only one symptom' }),
    ]),
    Q('q7', 'treatment', 'How should the counselor frame realistic goals with her?', ['R4'], [
      O('a', 'Collaboratively set concrete, achievable goals that build hope and challenge the belief that change is impossible', 3,
        { r: 'Collaborative, hope-building achievable goals', approach: 'Build hope through achievable goals', why: 'Concrete, achievable, collaboratively set goals build hope and counter the ego-syntonic belief that change is impossible', keys: ['sees it as permanent', 'never a symptom-free stretch'], mistake: 'Setting no goals because the client believes change is impossible, or setting unrealistic ones' }),
      O('b', 'Simply promising Marisol in a very confident and reassuring sort of way that if she just keeps coming to her sessions then every last one of her symptoms is guaranteed to disappear entirely and permanently within only a couple of short weeks', -1,
        { r: 'Overpromising undermines trust', approach: 'Overpromise framing', why: 'Guaranteeing a rapid, total cure is unrealistic and undermines trust when it does not occur', keys: ['realistic goals'], mistake: 'Setting unrealistic expectations' }),
      O('c', 'Focusing the sessions mainly on cataloguing every disappointment of the past five years in detail', -1,
        { r: 'Cataloguing the past is not goal-setting', approach: 'Catalogue framing', why: 'Rehearsing past disappointments does not build achievable, hope-oriented goals', keys: ['forward-focused goals'], mistake: 'Centering sessions on past disappointments' }),
      O('d', 'Telling her that goals are pointless since this is simply who she is', -2,
        { r: 'Foreclosing goals is nihilistic', approach: 'Nihilism framing', why: 'Achievable goals are central to treating chronic depression, not pointless', keys: ['goals matter'], mistake: 'Foreclosing goal-setting' }),
    ]),
    Q('q8', 'treatment', 'How should progress be monitored given the chronic course?', ['R2'], [
      O('a', 'Track symptoms and functioning over time with a measurement-based approach and adjust the plan accordingly', 3,
        { r: 'Measurement-based monitoring', approach: 'Measure and adjust', why: 'A chronic course is followed with measurement-based tracking of symptoms and functioning to guide adjustments', keys: ['long-standing symptoms', 'measurable change'], mistake: 'Continuing indefinitely without tracking whether the chronic symptoms are shifting' }),
      O('b', 'Simply assuming that because her depression has already lasted for so many years it must therefore be completely fixed and entirely unchangeable, and that there is consequently no real point in ever bothering to track her symptoms or her functioning at all', -1,
        { r: 'Assuming it cannot change is a mistake', approach: 'Fixed framing', why: 'Chronic depression can improve with treatment; progress is tracked rather than assumed static', keys: ['track change'], mistake: 'Assuming no change is possible' }),
      O('c', 'Waiting several years before checking whether anything has changed', -1,
        { r: 'Infrequent review is inadequate', approach: 'Delay framing', why: 'Response is tracked regularly, not only after very long gaps', keys: ['timely review'], mistake: 'Reviewing progress too infrequently' }),
      O('d', 'Judging progress only by how you personally feel about the sessions', -1,
        { r: 'Subjective impression is not measurement', approach: 'Subjective framing', why: 'Progress is judged by measured symptoms and functioning, not impression', keys: ['objective measures'], mistake: 'Relying on subjective impression' }),
    ]),
    Q('q9', 'treatment', 'How should the counselor coordinate the medication referral?', ['R5'], [
      O('a', 'With her consent and a release, coordinate with the prescriber and share what is needed for collaborative care', 3,
        { r: 'Coordinate with consent', approach: 'Coordinate within consent and scope', why: 'Collaborative care depends on consented coordination with the prescriber', keys: ['medication referral', 'collaborative care'], mistake: 'Working in isolation, or sharing without consent' }),
      O('b', 'Simply going ahead and forwarding Marisol’s entire clinical record together with her whole personal history to the prescriber right away without first pausing to obtain her consent, on the general theory that coordinating her care is obviously in her interest regardless', -2,
        { r: 'Coordinating without consent breaches confidentiality', approach: 'Assume-consent framing', why: 'A valid release is required before disclosure', keys: ['no release'], mistake: 'Disclosing before consent is documented' }),
      O('c', 'Adjusting her medication dose yourself based on how she reports feeling week to week', -2,
        { r: 'Adjusting medication exceeds scope', approach: 'Self-adjust framing', why: 'Counselors do not adjust medication; the prescriber does', keys: ['no prescriptive authority'], mistake: 'Acting outside scope of practice' }),
      O('d', 'Avoiding any contact with the prescriber so counseling stays entirely separate', -1,
        { r: 'No coordination undercuts care', approach: 'Siloed framing', why: 'Consented coordination supports collaborative care', keys: ['integrated care'], mistake: 'Refusing helpful, consented coordination' }),
    ]),
    Q('q10', 'counseling', 'Marisol says, “This is just who I am — there is no point trying to change.” The most therapeutic response is to:', ['R4'], [
      O('a', 'Validate how real and enduring it feels, gently offer hope, and note that chronic depression is treatable', 3,
        { r: 'Validate, offer hope, note treatability', approach: 'Meet the belief with empathy and hope', why: 'Validating how enduring it feels while gently offering realistic hope and noting treatability engages the ego-syntonic belief without arguing', keys: ['sees it as permanent', 'joyless for years'], mistake: 'Either simply agreeing that nothing can change or bluntly arguing her out of the belief' }),
      O('b', 'Simply agreeing with her straight away that yes, this really most likely just is her fixed and unchangeable personality after all, and that she is therefore probably quite right that there is not much genuine point in the two of you attempting any real treatment for it together', -2,
        { r: 'Agreeing forecloses hope', approach: 'Collude framing', why: 'Agreeing that nothing can change forecloses hope and effective treatment', keys: ['treatable condition'], mistake: 'Reinforcing the hopeless belief' }),
      O('c', 'Bluntly arguing with her and insisting she is simply wrong until she concedes the point', -1,
        { r: 'Arguing raises resistance', approach: 'Argue framing', why: 'Arguing her out of the belief tends to raise resistance rather than build hope', keys: ['engage, do not argue'], mistake: 'Confronting rather than engaging the belief' }),
      O('d', 'Changing the subject so the two of you do not have to sit with the discouragement', -1,
        { r: 'Avoidance misses the work', approach: 'Avoidant framing', why: 'The belief is engaged with empathy and hope, not avoided', keys: ['engage the belief'], mistake: 'Sidestepping a meaningful moment' }),
    ]),
    Q('q11', 'counseling', 'How can the counselor best support Marisol’s engagement and motivation?', ['R4'], [
      O('a', 'Connect treatment to her own values and small experiences of pleasure, building momentum step by step', 3,
        { r: 'Tie treatment to values and small pleasures', approach: 'Build momentum through meaning', why: 'Connecting treatment to her values and small experiences of pleasure builds motivation and momentum in chronic depression', keys: ['joyless, going through the motions', 'wants to feel more alive'], mistake: 'Waiting for motivation to appear on its own rather than building it through valued, achievable steps' }),
      O('b', 'Simply instructing Marisol in a fairly firm and matter-of-fact manner that she really just needs to decide to be happier and to make herself feel more positive about her life entirely on her own through willpower', -1,
        { r: 'Willpower framing is unhelpful', approach: 'Toughen-up framing', why: '“Just decide to be happier” misunderstands chronic depression and undermines the alliance', keys: ['graded, valued steps'], mistake: 'Demanding willpower instead of building motivation' }),
      O('c', 'Focusing the sessions mainly on cataloguing every joyless day in exhaustive detail each time', -1,
        { r: 'Cataloguing is not engagement', approach: 'Catalogue framing', why: 'Rehearsing every joyless day does not build motivation or momentum', keys: ['forward-focused steps'], mistake: 'Centering sessions on the joylessness' }),
      O('d', 'Telling her counseling cannot help unless she first feels motivated on her own', -1,
        { r: 'Conditioning care is inappropriate', approach: 'Conditioning framing', why: 'Building motivation is part of the work, not a precondition for it', keys: ['engagement matters'], mistake: 'Making care contingent on pre-existing motivation' }),
    ]),
    Q('q12', 'ethics', 'Marisol mentions that her chronic hopelessness has recently deepened into thoughts of not wanting to be here. The most appropriate action is to:', ['R3'], [
      O('a', 'Complete a structured risk assessment and safety planning, escalating care if the risk warrants it', 3,
        { r: 'Assess, safety-plan, escalate if warranted', approach: 'Apply risk assessment and safety planning', why: 'A deepening of chronic hopelessness into thoughts of not wanting to be here warrants structured assessment and safety planning', keys: ['deepening hopelessness', 'thoughts of not being here'], mistake: 'Treating new passive ideation the same as the stable chronic baseline without reassessing risk' }),
      O('b', 'Simply assuming that because Marisol has clearly lived with this same sort of chronic low mood and hopelessness for so many years already, this latest development must therefore also be perfectly safe and stable and require no particular change in the risk response at all', -2,
        { r: 'Assuming stability is unsafe', approach: 'Stable-baseline framing', why: 'A change from baseline warrants fresh assessment rather than an assumption of stability', keys: ['reassess on change'], mistake: 'Assuming chronic risk is always stable' }),
      O('c', 'Waiting until the next session to see whether the thoughts pass before acting', -2,
        { r: 'Delaying assessment is unsafe', approach: 'Wait-and-see framing', why: 'New ideation warrants prompt assessment, not waiting', keys: ['assess now'], mistake: 'Postponing assessment of new ideation' }),
      O('d', 'Immediately hospitalizing her regardless of the assessed level of risk or her input', -1,
        { r: 'Match care to assessed risk', approach: 'Reflexive-hospitalization framing', why: 'Disposition follows a careful assessment and collaboration, not a reflex', keys: ['stratified decision'], mistake: 'Hospitalizing reflexively without assessment' }),
    ]),
    Q('q13', 'ethics', 'Marisol asks whether it is even ethical to charge her for treating something she sees as untreatable. The most appropriate response is to:', ['R5'], [
      O('a', 'Honestly explain that chronic depression is treatable, review realistic goals, and clarify informed consent to treatment', 3,
        { r: 'Honest treatability, goals, informed consent', approach: 'Give honest information and informed consent', why: 'The counselor honestly explains that chronic depression is treatable, reviews realistic goals, and clarifies informed consent', keys: ['believes it is untreatable', 'questions the value of treatment'], mistake: 'Either dismissing her concern or agreeing that treatment is pointless while continuing to bill for it' }),
      O('b', 'Simply agreeing with her that the treatment is in fact quite unlikely to accomplish very much of anything at all for her, and then nonetheless carrying right on scheduling and billing her for a long open-ended series of ongoing weekly sessions anyway', -2,
        { r: 'Billing for care called pointless is improper', approach: 'Bad-faith framing', why: 'Agreeing treatment is pointless while continuing to bill is not honest, beneficial practice', keys: ['honest, beneficial care'], mistake: 'Providing care in bad faith' }),
      O('c', 'Refusing to discuss the fee or the value of treatment at all and simply changing the subject', -1,
        { r: 'Evasion undermines informed consent', approach: 'Evasion framing', why: 'The value of treatment and informed consent are discussed honestly, not evaded', keys: ['transparent consent'], mistake: 'Being evasive about treatment value' }),
      O('d', 'Telling her that questioning the treatment means she cannot be helped and discharging her', -1,
        { r: 'Punishing the question is inappropriate', approach: 'Punitive framing', why: 'Her question is engaged collaboratively, not treated as grounds for discharge', keys: ['engage the concern'], mistake: 'Reacting punitively to a reasonable question' }),
    ]),
  ],
};

// ============================================================================
// D206 — Major Depressive Disorder, with Peripartum Onset (F53.0) — Depressive — hard
// ============================================================================
const D206 = {
  id: 'ncmhce-D206',
  title: 'Severe depression emerging two months after a birth',
  category: 'Depressive',
  difficulty: 'hard',
  primaryDiagnosis: { name: 'Major Depressive Disorder, with Peripartum Onset', code: 'F53.0' },
  diagnosis: { name: 'Major Depressive Disorder, with Peripartum Onset', code: 'F53.0' },
  differentialOptions: [
    { id: 'do1', name: 'Major Depressive Disorder, with Peripartum Onset', isCorrect: true },
    { id: 'do2', name: 'Postpartum Blues', isCorrect: false },
    { id: 'do3', name: 'Adjustment Disorder, with Depressed Mood', isCorrect: false },
    { id: 'do4', name: 'Postpartum Psychosis', isCorrect: false },
  ],
  narrative: {
    intake:
      'Hannah Weiss, a 31-year-old, presents about eight weeks after the birth of her first child with persistent low mood, tearfulness, guilt about ' +
      'her mothering, difficulty bonding, poor sleep beyond the baby’s waking, appetite loss, and intrusive thoughts that she is a bad mother.',
    session1:
      'Her symptoms meet full major-depressive-episode criteria with onset in the peripartum period and have persisted well beyond the brief, mild ' +
      'window of postpartum blues. There are no hallucinations, delusions, or disorganization to suggest postpartum psychosis.',
    session2:
      'She is frightened by her intrusive thoughts, denies any intent to harm the baby or herself, and the counselor conducts a careful suicide-risk ' +
      'and infant-safety assessment. A medication referral compatible with her feeding choices and a coordinated support plan are indicated.',
  },
  diagnosticRationale:
    'A full major depressive episode with onset in the peripartum period, persisting well beyond the brief postpartum-blues window, best fits major ' +
    'depressive disorder with peripartum onset, distinct from transient postpartum blues, a milder adjustment reaction, and postpartum psychosis (no ' +
    'hallucinations, delusions, or disorganization), and requiring suicide-risk and infant-safety assessment.',
  references: [
    { id: 'R1', source: 'DSM-5-TR', detail: 'MDD with peripartum-onset specifier; differentiation from postpartum blues and postpartum psychosis' },
    { id: 'R2', source: 'NICE guidelines', detail: 'Perinatal depression: assessment, psychological treatment, and medication considerations with feeding' },
    { id: 'R3', source: 'C-SSRS', detail: 'Structured suicide-risk assessment; screening thoughts of harm in the perinatal period' },
    { id: 'R4', source: 'Stanley-Brown SPI', detail: 'Collaborative safety planning; infant-safety considerations' },
    { id: 'R5', source: 'ACA Code of Ethics', detail: 'A.1., B.2., C.2.: welfare, safety, coordination, and competence' },
  ],
  questions: [
    Q('q1', 'intake', 'What is most important to confirm to support a peripartum-onset major depressive episode?', ['R1'], [
      O('a', 'A full major depressive episode with onset in the peripartum period persisting beyond the brief postpartum-blues window', 3,
        { r: 'Full episode, peripartum onset, beyond blues', approach: 'Confirm the episode and its onset', why: 'The peripartum specifier applies when a full major depressive episode has onset in the peripartum period and persists beyond the brief blues window', keys: ['eight weeks postpartum', 'full episode symptoms'], mistake: 'Labeling a persistent full episode as ordinary postpartum blues' }),
      O('b', 'Mainly whether Hannah is able to point to one single specific event during the birth or the early weeks afterward that she is personally convinced first caused everything she is now feeling', -1,
        { r: 'A precipitant is not the criterion', approach: 'Trigger framing', why: 'Etiology is not the defining feature of the episode or its specifier', keys: ['syndrome-based focus'], mistake: 'Using a trigger as the diagnostic test' }),
      O('c', 'That her mood has been a little worse over the past few days than earlier in the week', -1,
        { r: 'Recent change is not the defining feature', approach: 'Recent-change framing', why: 'The sustained episode with peripartum onset, not the exact daily trajectory, defines the diagnosis', keys: ['sustained episode'], mistake: 'Confusing the daily course with the criteria' }),
      O('d', 'That she currently meets the full symptom count required for a discrete manic episode at this time', 0,
        { r: 'Manic count is not relevant', approach: 'Mania-criteria framing', why: 'The focus is a depressive episode, not a manic one', keys: ['depression-focused'], mistake: 'Applying manic criteria here' }),
    ]),
    Q('q2', 'core', 'Which feature best distinguishes this from postpartum blues?', ['R1'], [
      O('a', 'Her symptoms meet full episode criteria and persist well beyond the brief, mild, self-limited blues window', 3,
        { r: 'Full episode persisting beyond the blues window', approach: 'Contrast severity and duration', why: 'Postpartum blues is brief, mild, and self-limited; hers is a full episode persisting well beyond that window', keys: ['eight weeks of full symptoms', 'marked impairment'], mistake: 'Dismissing a persistent full depressive episode as transient postpartum blues' }),
      O('b', 'The fact that in the weeks since the birth of her baby she has quite understandably been feeling really rather emotional and tearful and generally low in her mood a good deal of the time', -1,
        { r: 'Tearfulness occurs in both', approach: 'Mood framing', why: 'Low mood and tearfulness occur in both; the severity and duration differ', keys: ['shared feature'], mistake: 'Using tearfulness to differentiate' }),
      O('c', 'The tiredness and the disrupted sleep that she is experiencing right now', -1,
        { r: 'These symptoms are nonspecific', approach: 'Symptom framing', why: 'Fatigue and disrupted sleep occur in both; the severity and duration differ', keys: ['shared symptoms'], mistake: 'Reading nonspecific symptoms as decisive' }),
      O('d', 'The way her mood dips a little more in the evenings after a long day with the baby', 0,
        { r: 'Time-of-day variation is not diagnostic', approach: 'Time-of-day framing', why: 'Diurnal variation does not distinguish the two', keys: ['nonspecific timing'], mistake: 'Over-reading a circadian pattern' }),
    ]),
    Q('q3', 'core', 'How does this differ from an adjustment disorder with depressed mood?', ['R1'], [
      O('a', 'Her symptoms meet full major-depressive-episode criteria in scope and severity, beyond a milder adjustment reaction', 3,
        { r: 'Full episode exceeds an adjustment reaction', approach: 'Contrast severity and criteria', why: 'An adjustment disorder is a milder reaction not meeting full episode criteria; her presentation does meet them', keys: ['full symptom count', 'marked impairment and guilt'], mistake: 'Downgrading a full peripartum depressive episode to an adjustment reaction' }),
      O('b', 'The fact that the recent arrival of a newborn baby is obviously an enormous and genuinely stressful and life-altering sort of change for any new parent to have to adjust and adapt to in a fairly short span of time', -1,
        { r: 'A stressor is present in both', approach: 'Stressor framing', why: 'A major life change accompanies both; meeting full episode criteria is what differs', keys: ['shared feature'], mistake: 'Using the presence of a stressor to differentiate' }),
      O('c', 'The sadness and the worry that she feels adjusting to new motherhood', -1,
        { r: 'Distress is nonspecific', approach: 'Distress framing', why: 'Distress occurs in both; the criteria and severity differ', keys: ['shared affect'], mistake: 'Reading distress as decisive' }),
      O('d', 'The way her mood feels a little worse on the days when she gets the least sleep', 0,
        { r: 'Sleep effects are nonspecific', approach: 'Sleep framing', why: 'Worse mood on low-sleep days does not distinguish the two', keys: ['nonspecific factor'], mistake: 'Over-reading a sleep effect' }),
    ]),
    Q('q4', 'core', 'How does this differ from postpartum psychosis?', ['R1'], [
      O('a', 'She has no hallucinations, delusions, or disorganization; her intrusive thoughts are ego-dystonic without psychosis', 3,
        { r: 'No psychosis; ego-dystonic intrusive thoughts', approach: 'Screen for psychotic features and safety', why: 'Postpartum psychosis involves hallucinations, delusions, or disorganization; hers are ego-dystonic intrusive thoughts without psychosis', keys: ['no hallucinations or delusions', 'frightened by the thoughts'], mistake: 'Confusing frightening, ego-dystonic intrusive thoughts with the delusions of postpartum psychosis — or missing genuine psychosis' }),
      O('b', 'The fact that ever since the birth of her baby she has quite clearly been going through a genuinely difficult and distressing and emotionally painful sort of period in her life as she tries to cope with everything', -1,
        { r: 'Postpartum distress occurs in both', approach: 'Distress framing', why: 'Postpartum distress occurs in both; the presence of psychosis is what differs', keys: ['shared feature'], mistake: 'Using general distress to differentiate' }),
      O('c', 'The guilt and the difficulty bonding that she describes right now', -1,
        { r: 'These features are nonspecific', approach: 'Symptom framing', why: 'Guilt and bonding difficulty occur in depression without psychosis; psychotic features are what differ', keys: ['shared symptoms'], mistake: 'Reading nonspecific features as decisive' }),
      O('d', 'The way her distress seems a little worse on days she is alone with the baby', 0,
        { r: 'Situational variation is nonspecific', approach: 'Situational framing', why: 'Day-to-day variation does not indicate psychosis', keys: ['nonspecific factor'], mistake: 'Over-reading situational variation' }),
    ]),
    Q('q5', 'intake', 'What is the most important safety assessment in her case?', ['R3'], [
      O('a', 'A careful suicide-risk assessment and assessment of any thoughts of harm to the infant, alongside infant safety', 3,
        { r: 'Assess suicide risk and infant-safety', approach: 'Screen both channels of risk', why: 'Perinatal depression requires assessing suicide risk and any thoughts of harm to the infant, alongside infant safety', keys: ['intrusive thoughts of being a bad mother', 'new infant at home'], mistake: 'Assessing the mother’s mood while overlooking suicide risk and infant-safety assessment' }),
      O('b', 'Mainly gathering a very thorough and complete account of every detail of the labor and the delivery and the hospital stay before turning at all to the question of her present safety or the safety of the baby', -2,
        { r: 'Deferring safety is unsafe', approach: 'History-first framing', why: 'A detailed birth history does not displace assessing current suicide and infant-safety risk', keys: ['safety first'], mistake: 'Sequencing safety behind background data' }),
      O('c', 'Assuming there is no risk because she denies any intent and clearly loves her baby', -2,
        { r: 'Assuming no risk is unsafe', approach: 'Dismissal framing', why: 'Denial of intent and evident love do not remove the need for structured assessment', keys: ['assess regardless'], mistake: 'Dismissing risk based on assumption' }),
      O('d', 'Focusing only on infant feeding and sleep for now and returning to safety later', -1,
        { r: 'Sequencing safety behind logistics is unsafe', approach: 'Single-issue framing', why: 'Feeding and sleep guidance does not displace assessing current safety', keys: ['safety first'], mistake: 'Sequencing safety behind other needs' }),
    ]),
    Q('q6', 'treatment', 'What is the most appropriate treatment approach?', ['R2'], [
      O('a', 'Evidence-based psychotherapy for perinatal depression and a medication referral compatible with her feeding choices', 3,
        { r: 'Evidence-based therapy plus feeding-compatible referral', approach: 'Match to the perinatal guideline', why: 'Perinatal depression is treated with evidence-based psychotherapy and a medication referral compatible with her feeding choices for her to consider', keys: ['full peripartum episode', 'feeding a newborn'], mistake: 'Offering only vague reassurance, or prescribing/directing medication without regard to scope or feeding' }),
      O('b', 'Simply telling Hannah in a warm and reassuring sort of way that what she is feeling is really just the ordinary and completely normal exhaustion of being a brand-new mother, and that it is very likely to lift entirely on its own before too much longer', -1,
        { r: 'Normalizing away a full episode is a mistake', approach: 'Reassurance framing', why: 'Normalizing a full depressive episode as ordinary new-parent tiredness delays needed treatment', keys: ['active treatment'], mistake: 'Dismissing a treatable episode as normal fatigue' }),
      O('c', 'Selecting and adjusting an antidepressant yourself with attention to her feeding', -2,
        { r: 'Prescribing is outside scope', approach: 'Prescribe framing', why: 'Counselors do not select or adjust medication; that is referred to a prescriber who weighs feeding', keys: ['no prescriptive authority'], mistake: 'Acting outside scope of practice' }),
      O('d', 'Focusing sessions only on infant sleep training and leaving her depression unaddressed', -1,
        { r: 'A narrow focus is inadequate', approach: 'Narrow-focus framing', why: 'Infant sleep alone does not treat her depression; the depression is addressed directly', keys: ['treat the depression'], mistake: 'Addressing only one logistical issue' }),
    ]),
    Q('q7', 'treatment', 'How should the counselor address her frightening intrusive thoughts in the plan?', ['R4'], [
      O('a', 'Assess them carefully, provide psychoeducation that ego-dystonic intrusive thoughts are common and treatable, and monitor safety', 3,
        { r: 'Assess, psychoeducate, monitor safety', approach: 'Normalize ego-dystonic thoughts while assessing safety', why: 'Careful assessment plus psychoeducation that ego-dystonic intrusive thoughts are common and treatable, with ongoing safety monitoring, addresses her fear responsibly', keys: ['frightened by the thoughts', 'denies intent'], mistake: 'Either overreacting to ego-dystonic thoughts as intent or dismissing them without assessment and monitoring' }),
      O('b', 'Simply telling Hannah in a very quick and firm sort of way that she really must stop having such thoughts immediately and just push them completely out of her mind entirely on her own, and then moving briskly along to some other topic', -1,
        { r: 'Thought-suppression advice is unhelpful', approach: 'Suppression framing', why: 'Telling her to simply stop the thoughts is ineffective and shaming; assessment and psychoeducation help', keys: ['normalize and assess'], mistake: 'Advising suppression instead of assessment and psychoeducation' }),
      O('c', 'Immediately treating the intrusive thoughts as intent and moving straight to remove the baby', -2,
        { r: 'Overreacting misreads ego-dystonic thoughts', approach: 'Overreaction framing', why: 'Ego-dystonic intrusive thoughts are assessed, not automatically equated with intent to harm', keys: ['assess before acting'], mistake: 'Equating intrusive thoughts with intent' }),
      O('d', 'Ignoring the thoughts entirely and leaving safety monitoring out of the plan', -2,
        { r: 'Ignoring them is unsafe', approach: 'Dismiss framing', why: 'The thoughts are assessed and safety monitored, not ignored', keys: ['monitor safety'], mistake: 'Failing to assess and monitor' }),
    ]),
    Q('q8', 'treatment', 'What supports should the coordinated plan mobilize?', ['R2'], [
      O('a', 'With her consent, mobilize partner and family support, perinatal resources, and practical help alongside treatment', 3,
        { r: 'Mobilize supports and perinatal resources', approach: 'Wrap support around treatment', why: 'With consent, mobilizing partner and family support, perinatal resources, and practical help strengthens recovery alongside treatment', keys: ['new infant', 'stretched and exhausted'], mistake: 'Focusing on the individual session alone without mobilizing available supports and resources' }),
      O('b', 'Simply contacting every one of Hannah’s family members straight away and sharing all of the details of her depression and her intrusive thoughts with each of them, entirely without pausing to obtain her consent first, on the assumption that they would surely want to know', -2,
        { r: 'Disclosing without consent breaches confidentiality', approach: 'Assume-consent framing', why: 'Mobilizing supports still requires her consent absent a safety exception', keys: ['no consent'], mistake: 'Disclosing to others without consent' }),
      O('c', 'Handling everything within the session alone and involving no supports at all', -1,
        { r: 'Excluding supports weakens the plan', approach: 'Isolation framing', why: 'Consented support mobilization strengthens perinatal recovery', keys: ['mobilize supports'], mistake: 'Excluding helpful, consented supports' }),
      O('d', 'Telling her she must manage the newborn and her recovery entirely on her own', -1,
        { r: 'Withholding support is inappropriate', approach: 'Go-it-alone framing', why: 'Appropriate supports and resources are part of good perinatal care', keys: ['coordinated support'], mistake: 'Denying appropriate supports' }),
    ]),
    Q('q9', 'treatment', 'How should the counselor coordinate the medication referral with her feeding choices?', ['R5'], [
      O('a', 'With her consent, coordinate with the prescriber so options can be weighed with her feeding decisions in mind', 3,
        { r: 'Coordinate with consent, feeding in mind', approach: 'Coordinate within consent and scope', why: 'Consented coordination lets the prescriber weigh medication options with her feeding choices', keys: ['feeding a newborn', 'medication referral'], mistake: 'Either coordinating without consent or making medication decisions the prescriber should make' }),
      O('b', 'Simply going ahead and telling Hannah quite confidently and definitively yourself exactly which specific medication she ought to take and precisely how she should dose it around her feeding schedule, rather than leaving those particular decisions to the prescriber', -2,
        { r: 'Directing medication exceeds scope', approach: 'Prescribe-by-proxy framing', why: 'Medication choice and dosing around feeding are the prescriber’s role, not the counselor’s', keys: ['no prescriptive authority'], mistake: 'Acting outside scope of practice' }),
      O('c', 'Forwarding her entire record to the prescriber without her consent', -2,
        { r: 'Disclosing without consent breaches confidentiality', approach: 'Assume-consent framing', why: 'A valid release is required before disclosure', keys: ['no release'], mistake: 'Disclosing before consent is documented' }),
      O('d', 'Avoiding any contact with the prescriber so counseling stays entirely separate', -1,
        { r: 'No coordination undercuts care', approach: 'Siloed framing', why: 'Consented coordination supports safe perinatal medication decisions', keys: ['integrated care'], mistake: 'Refusing helpful, consented coordination' }),
    ]),
    Q('q10', 'counseling', 'Hannah sobs that she is a terrible mother and her baby deserves better. The most therapeutic response is to:', ['R4'], [
      O('a', 'Respond with warmth, gently reframe the guilt as a symptom of depression, and assess her thinking and safety', 3,
        { r: 'Warmth, reframe guilt, assess safety', approach: 'Engage the guilt and safety together', why: 'Warmth plus gently reframing the guilt as a depressive symptom, while assessing her thinking and safety, addresses both the alliance and risk', keys: ['guilt about mothering', 'difficulty bonding'], mistake: 'Either brushing past the guilt or treating it as fact instead of a depressive symptom to explore' }),
      O('b', 'Simply telling Hannah in a very quick and cheerful and upbeat sort of way that of course she is a wonderful mother and that she really has absolutely nothing at all to feel guilty about, and then briskly moving the conversation along to a lighter topic', -1,
        { r: 'Quick reassurance misses the work', approach: 'Cheerful-deflection framing', why: 'Quick reassurance and changing the subject miss the guilt as a symptom and a safety-relevant cue', keys: ['engage the guilt'], mistake: 'Deflecting from a meaningful disclosure' }),
      O('c', 'Agreeing that her guilt is probably accurate so she feels understood', -2,
        { r: 'Confirming the guilt is harmful', approach: 'Collude framing', why: 'Confirming the depressive guilt as fact reinforces it and can heighten risk', keys: ['reframe the guilt'], mistake: 'Validating a depressive distortion as fact' }),
      O('d', 'Telling her many mothers feel worse so she should not complain', -2,
        { r: 'Minimizing is invalidating', approach: 'Comparison framing', why: 'Comparing her to others invalidates her distress and harms the alliance', keys: ['validate, do not minimize'], mistake: 'Minimizing her distress' }),
    ]),
    Q('q11', 'counseling', 'How can the counselor best support Hannah’s bonding and confidence?', ['R2'], [
      O('a', 'Support small, positive interactions with the baby, build confidence gradually, and normalize that bonding can grow with treatment', 3,
        { r: 'Small interactions, confidence, normalize bonding', approach: 'Build bonding through small steps', why: 'Supporting small positive interactions, building confidence gradually, and normalizing that bonding can grow with treatment helps a struggling new mother', keys: ['difficulty bonding', 'wants to connect with the baby'], mistake: 'Pressuring instant bonding or implying her bonding difficulty makes her a bad mother' }),
      O('b', 'Simply instructing Hannah in a fairly firm and matter-of-fact manner that she really just needs to make herself feel an instant and powerful and complete bond with her baby right away entirely through her own effort and willpower alone starting today', -1,
        { r: 'Demanding instant bonding is harmful', approach: 'Willpower framing', why: 'Demanding instant bonding by willpower shames her and misunderstands perinatal depression', keys: ['gradual, supported bonding'], mistake: 'Pressuring instant bonding' }),
      O('c', 'Focusing the sessions mainly on cataloguing every parenting worry in exhaustive detail each time', -1,
        { r: 'Cataloguing worries is not support', approach: 'Catalogue framing', why: 'Rehearsing every worry does not build bonding or confidence', keys: ['forward-focused steps'], mistake: 'Centering sessions on the worries' }),
      O('d', 'Telling her counseling cannot help unless she first feels bonded on her own', -1,
        { r: 'Conditioning care is inappropriate', approach: 'Conditioning framing', why: 'Support for bonding is part of the work, not a precondition for it', keys: ['engagement matters'], mistake: 'Making care contingent on bonding' }),
    ]),
    Q('q12', 'ethics', 'Hannah discloses a fleeting thought of harming the baby that frightens her, with no intent or plan. The most appropriate action is to:', ['R3'], [
      O('a', 'Assess the thought, intent, and infant safety carefully and respond proportionately, involving supports and monitoring', 3,
        { r: 'Assess thought/intent/safety; respond proportionately', approach: 'Assess and respond proportionately', why: 'A frightening, ego-dystonic thought without intent is assessed carefully for intent and infant safety and met with a proportionate, monitored response', keys: ['fleeting ego-dystonic thought', 'no intent or plan'], mistake: 'Either overreacting to an ego-dystonic thought as intent or dismissing it without careful assessment and monitoring' }),
      O('b', 'Simply reassuring Hannah right away that thoughts like that are completely normal and mean absolutely nothing whatsoever, and then moving on without conducting any real assessment of her intent or of the baby’s safety or arranging any kind of follow-up monitoring at all', -2,
        { r: 'Dismissing without assessment is unsafe', approach: 'Dismiss framing', why: 'Even ego-dystonic thoughts warrant careful assessment of intent and infant safety, not blanket dismissal', keys: ['assess and monitor'], mistake: 'Dismissing without assessment' }),
      O('c', 'Immediately treating the thought as intent and moving straight to remove the baby without assessment', -2,
        { r: 'Overreacting misreads the thought', approach: 'Overreaction framing', why: 'Ego-dystonic thoughts are assessed, not automatically equated with intent', keys: ['assess before acting'], mistake: 'Equating intrusive thoughts with intent' }),
      O('d', 'Waiting until the next session to explore the thought before assessing safety', -1,
        { r: 'Delaying assessment is unsafe', approach: 'Delay framing', why: 'Intent and infant safety are assessed now, not deferred', keys: ['assess now'], mistake: 'Postponing a safety-relevant assessment' }),
    ]),
    Q('q13', 'ethics', 'The counselor has limited perinatal mental-health experience. The most ethical course of action is to:', ['R5'], [
      O('a', 'Seek consultation and coordinate perinatal-competent resources rather than managing beyond one’s competence alone', 3,
        { r: 'Consult and coordinate within competence', approach: 'Practice within competence', why: 'ACA C.2. and safety require consultation and coordinated perinatal-competent care when experience is limited', keys: ['limited perinatal experience', 'safety considerations'], mistake: 'Managing a perinatal presentation with safety concerns alone without consultation or coordination' }),
      O('b', 'Simply continuing to manage the entire perinatal case entirely on his or her own regardless of the limited experience, mainly so as to preserve the continuity of the relationship that has been forming with Hannah over their sessions together', -2,
        { r: 'Going it alone is unsafe', approach: 'Continuity-over-competence', why: 'Continuity does not justify practicing beyond competence with safety concerns present', keys: ['competence and safety'], mistake: 'Prioritizing continuity over safety' }),
      O('c', 'Telling Hannah the presentation is not serious enough to warrant any specialized perinatal input', -2,
        { r: 'Minimizing the presentation is unsafe', approach: 'Downplay framing', why: 'A perinatal depressive episode with safety considerations warrants competent, coordinated care', keys: ['safety considerations'], mistake: 'Underestimating the presentation' }),
      O('d', 'Transferring the case at once with no explanation, coordination, or plan for the transition', -1,
        { r: 'Abrupt transfer mishandles care', approach: 'Uncoordinated handoff', why: 'A perinatal case requires coordinated communication, not an abrupt, uncommunicated transfer', keys: ['coordinated response'], mistake: 'Dropping the case without coordination' }),
    ]),
  ],
};

module.exports = { CASES: [D203, D204, D205, D206] };
