// deep-cases-2027-batch-05.js — NCMHCE deep cases, 2027 specification
// ids: ncmhce-D940, ncmhce-D941, ncmhce-D942, ncmhce-D943, ncmhce-D944
// 2027 NCMHCE specification; hand-authored; validate with check2027.js
//
// ncmhce-D940 · plan 0 · Substance · hard · older_adult — Sedative, Hypnotic, or Anxiolytic Use Disorder, Moderate (F13.20)
// ncmhce-D941 · plan 1 · Personality · medium · adult — Narcissistic Personality Disorder (F60.81)
// ncmhce-D942 · plan 2 · Personality · hard · adult — Antisocial Personality Disorder (F60.2)
// ncmhce-D943 · plan 3 · Personality · easy · adult — Avoidant Personality Disorder (F60.6)
// ncmhce-D944 · plan 4 · Personality · medium · older_adult — Dependent Personality Disorder (F60.7)
//
// Standalone deliverable for SME review. Do NOT auto-import.

const O = (id, text, weight, r, approach, why, keys, mistake) => ({
  id,
  text,
  isCorrect: weight === 3,
  weight,
  rationale: r,
  explanation: { approach, rationale: why, keyIndicators: keys, commonMistake: mistake },
});
const Q = (id, domain, section, question, evidenceRef, options) => ({ id, domain, section, question, evidenceRef, options });

// ============================================================================
// D940 — Long-term lorazepam, a bathroom fall, and a plan to "pour it all out" (plan 0)
// Hard: the decisive fact (a probable withdrawal seizure two years ago) is buried
// in an aside, and the client's own "solution" (abrupt cessation) is the danger.
// ============================================================================
const D940 = {
  id: 'ncmhce-D940',
  title: 'Sixteen years of lorazepam, a bathroom fall, and a widow’s plan to pour every pill down the sink',
  category: 'Substance',
  difficulty: 'hard',
  plan: 0,
  population: 'older_adult',
  primaryDiagnosis: { name: 'Sedative, Hypnotic, or Anxiolytic Use Disorder, Moderate', code: 'F13.20' },
  diagnosis: { name: 'Sedative, Hypnotic, or Anxiolytic Use Disorder, Moderate', code: 'F13.20' },
  differentialOptions: [
    { id: 'do1', name: 'Major Neurocognitive Disorder Due to Alzheimer’s Disease', isCorrect: false },
    { id: 'do2', name: 'Sedative, Hypnotic, or Anxiolytic Use Disorder, Moderate', isCorrect: true },
    { id: 'do3', name: 'Generalized Anxiety Disorder', isCorrect: false },
    { id: 'do4', name: 'Alcohol Use Disorder, Mild', isCorrect: false },
  ],
  narrative: {
    intake:
      'Hyun-ok Bae, a 74-year-old Korean American widow and retired dry-cleaning shop owner who lives alone in a senior apartment outside Atlanta, is ' +
      'referred to an outpatient counseling practice by her primary care physician, Dr. Alvarez, after a nighttime fall in her bathroom three weeks ago ' +
      'that bruised her hip and led to an emergency room visit. She has taken lorazepam since her husband’s death 16 years ago, currently prescribed by ' +
      'Dr. Alvarez at 1 mg three times daily. She admits she often takes “one more” at bedtime, has twice tried to cut back on her own and “could not ' +
      'stand it,” and for two years has also filled a lorazepam prescription from an urgent-care physician at a different pharmacy, which Dr. Alvarez ' +
      'does not know about. She drinks a small glass of plum wine most evenings “for sleep.” She reports forgetting conversations and once leaving a pot ' +
      'on the stove; her daughter Grace, who lives in Charlotte, North Carolina, worries about dementia. In passing, while explaining why she keeps ' +
      'extra pills, she mentions that two years ago, when a refill was delayed over a holiday weekend, a neighbor found her “confused on the kitchen ' +
      'floor with a bitten tongue”; she says she “must have fainted” and refused the ambulance. She speaks conversational English but prefers Korean ' +
      'for medical topics. The counselor, who spent her career in a college counseling center, has little experience with older adults or sedative ' +
      'use, and after the intake she notices herself thinking, “At her age, why put her through stopping?”',
    session1:
      'With a professional Korean-language interpreter on the phone, Ms. Bae signs releases for Dr. Alvarez and the urgent-care clinic. A brief ' +
      'cognitive screen the counselor administers is mildly below the expected range. Ms. Bae says she is ashamed of the second prescription and, ' +
      'smiling, announces she has “solved the problem”: when Grace visits this weekend she will “pour every pill down the sink and be done with it — ' +
      'I am strong,” and stop the wine at the same time. Her stated goals are “not falling again,” “getting my memory back so Grace stops worrying,” ' +
      'and returning to her volunteer role teaching children at her church’s Saturday Korean-language school.',
    session2:
      'Three weeks later, Dr. Alvarez has consolidated her prescriptions, notified the urgent-care clinic, and begun a slow lorazepam taper using ' +
      'weekly pharmacy blister packs. Ms. Bae reports waking at 3 a.m. and lying awake, more daytime worry, and a mild hand tremor in the mornings. She ' +
      'admits that twice she took an extra half-tablet from an old bottle she had kept “for emergencies” and has not told Dr. Alvarez. She says, ' +
      '“Maybe I am too old for this. My mother took her pills until she died at 90,” then adds that she was embarrassed when she forgot a student’s ' +
      'name at Korean school, which she loves. Grace wants her to stay in Charlotte for six weeks after the holidays, and Ms. Bae asks to continue ' +
      'sessions by video from Grace’s home. Yesterday Grace phoned the practice asking for “my mother’s exact dose and whether she is cheating”; ' +
      'Ms. Bae has not signed a release for Grace.',
  },
  diagnosticRationale:
    'Ms. Bae meets four sedative use disorder criteria: she takes more than intended and prescribed (extra bedtime doses and a second prescriber), ' +
    'has made unsuccessful efforts to cut down, continues use despite a physical and cognitive problem it likely worsens (a fall and memory lapses), ' +
    'and has had withdrawal (a probable withdrawal seizure when supply stopped). Because her use exceeds medical direction, the DSM-5-TR exclusion ' +
    'of tolerance and withdrawal for use solely under appropriate medical supervision does not apply. Four to five criteria is moderate (F13.20). ' +
    'Her memory complaints cannot be attributed to a neurocognitive disorder while sedative and alcohol effects are active, and her wine use does ' +
    'not, on the facts given, meet criteria for a separate alcohol use disorder.',
  references: [
    { id: 'R1', source: 'DSM-5-TR', detail: 'Sedative, hypnotic, or anxiolytic use disorder: 11 criteria; tolerance/withdrawal not counted when taken solely under appropriate medical supervision; moderate = 4–5 criteria; neurocognitive differential' },
    { id: 'R2', source: 'SAMHSA TIP 45', detail: 'Sedative-hypnotic withdrawal: seizure and delirium risk with abrupt discontinuation; medically supervised gradual taper; heightened risk in older adults' },
    { id: 'R3', source: 'ASAM Criteria', detail: 'Dimension 1 (acute intoxication/withdrawal potential) and Dimension 2 (biomedical conditions) in level-of-care and withdrawal-management decisions' },
    { id: 'R4', source: 'Miller & Rollnick (MI)', detail: 'Evoking change talk, developing discrepancy with client values, avoiding the righting reflex, responding to lapses without judgment' },
    { id: 'R5', source: 'ACA Code of Ethics', detail: 'Competence and consultation when entering a new practice area; nondiscrimination including age; confidentiality and consent for disclosure' },
    { id: 'R6', source: 'Hays (Assessment)', detail: 'Assessing older adults: cognitive screening, medical and substance contributors to cognitive complaints, use of interpreters' },
    { id: 'R7', source: 'VA/DoD CPG', detail: 'Management of chronic insomnia: CBT-I (stimulus control, sleep restriction, fixed wake time) as first-line treatment, including in older adults' },
    { id: 'R8', source: 'Counseling Compact', detail: 'Practice where the client is located; privilege to practice in member states; telehealth across state lines' },
    { id: 'R9', source: 'HIPAA', detail: 'Privacy Rule: disclosure of PHI to family requires the competent client’s authorization or agreement' },
  ],
  questions: [
    // ---------------- intake (5) ----------------
    Q('q1', 'profdev', 'intake', 'Given the counselor’s background, what is the most appropriate professional step as she begins Ms. Bae’s care?', ['R5'], [
      O('a', 'Rely on general counseling skills, since cutting back a prescribed medication works much like any other habit change.', -2,
        'Ignores a competence gap with real risk', 'Generalist framing', 'Sedative dependence in an older adult carries medical risks (withdrawal seizures, falls, cognition) that general skills do not cover; proceeding without consultation risks missing them', ['little experience with older adults', 'little experience with sedative use'], 'Assuming general counseling skills transfer to a medically risky specialty area'),
      O('b', 'Seek consultation from a clinician experienced with older adults and sedative use while pursuing focused training.', 3,
        'Consult and train while continuing care', 'Build competence responsibly', 'When practicing in an area new to them, counselors obtain consultation and training so care is competent, and refer only if that proves insufficient', ['college counseling background', 'older adult with long-term lorazepam'], 'Either ignoring the gap or ending care when consultation would close it'),
      O('c', 'Transfer her to a geriatric psychiatrist and close the case, since substance use in older adults is outside counselor scope.', -1,
        'Misstates scope; premature transfer', 'Refer-out framing', 'Substance use counseling with older adults is within counselor scope when competence is supported; closing the case abandons a client who needs counseling alongside medical care', ['referral came from her physician', 'counseling need is real'], 'Treating a competence gap as a scope boundary and transferring instead of consulting'),
      O('d', 'Ask Dr. Alvarez to direct the counseling plan, since the physician knows her medication history better than anyone.', 0,
        'Shifts the counselor’s responsibility', 'Delegate framing', 'Coordinating with the physician is essential, but the counselor remains responsible for her own competence and the counseling plan', ['prescriber coordination needed'], 'Confusing collaboration with handing over responsibility for counseling competence'),
    ]),
    Q('q2', 'profdev', 'intake', 'How should the counselor handle her private thought, “At her age, why put her through stopping?”', ['R5'], [
      O('a', 'Treat the thought as clinical wisdom and steer Ms. Bae toward keeping her current lorazepam use exactly as it is now.', -2,
        'Acts on bias against client welfare', 'Collusion', 'Acting on an age-based assumption would leave an older adult on a pattern linked to falls and cognitive problems; it substitutes bias for assessment', ['bathroom fall', 'memory lapses'], 'Letting an unexamined belief about older adults drive a clinical recommendation'),
      O('b', 'Set the thought aside for now and revisit it only if it starts to visibly affect her recommendations for Ms. Bae later.', 0,
        'Waits until the bias acts', 'Suppression', 'Noticing is a good start, but biases shape choices before they become visible; deliberate reflection and supervision are needed now', ['thought arose after intake'], 'Assuming a bias is harmless until it shows up in behavior'),
      O('c', 'Share the thought with Ms. Bae so she knows the counselor would support her if she chooses not to taper at all.', -1,
        'Inappropriate self-disclosure', 'Disclosure framing', 'Disclosing a biased reaction burdens the client and nudges her toward a choice; self-disclosure must serve the client’s goals', ['client wants to stop falling'], 'Using self-disclosure to process the counselor’s own reaction'),
      O('d', 'Recognize the thought as a possible age bias, examine it in supervision, and keep it from shaping her recommendations.', 3,
        'Self-reflection and supervision', 'Examine the reaction', 'Counselors monitor personal values and biases, including about age, and use supervision so those reactions do not compromise care', ['“At her age, why put her through stopping?”', 'older adult client'], 'Ignoring countertransference or acting on it instead of examining it'),
    ]),
    Q('q3', 'assess', 'intake', 'Which findings most directly support the given use disorder rather than expected physical dependence on a prescribed medication?', ['R1'], [
      O('a', 'She takes more than prescribed, adds a second prescription, cannot cut back, and keeps using despite her fall.', 3,
        'Behavioral criteria beyond dependence', 'Apply the criteria', 'Taking more than intended, unsuccessful efforts to cut down, and use despite physical problems are use-disorder criteria; because she exceeds medical direction, withdrawal also counts', ['“one more” at bedtime', 'second urgent-care prescription', 'tried twice to cut back'], 'Diagnosing from duration or physiology alone instead of behavioral criteria'),
      O('b', 'Her second prescription from urgent care is the key finding; the rest reflects expected dependence after 16 years.', 0,
        'One criterion, others discounted', 'Single-finding framing', 'The second prescriber matters, but the extra doses, failed cut-downs, and continued use despite falls are also criteria and together establish moderate severity', ['multiple criteria present'], 'Anchoring on one dramatic finding and discounting the rest of the criteria'),
      O('c', 'She reports withdrawal discomfort whenever she tries to cut down, which by itself establishes a use disorder.', -1,
        'Withdrawal alone is not the disorder', 'Physiology framing', 'Withdrawal alone can occur with appropriately prescribed benzodiazepines and is not sufficient; the diagnosis rests on a pattern of problematic use', ['long-term prescribed use'], 'Equating physical dependence with a use disorder'),
      O('d', 'Her memory lapses and nighttime fall point to a neurocognitive disorder that better explains her medication use.', -2,
        'Premature, reversed causal reading', 'Neurocognitive framing', 'Sedatives and alcohol can produce memory problems and falls; diagnosing a neurocognitive disorder now reverses cause and effect and could leave the sedative pattern untreated', ['active lorazepam and wine use', 'no medical workup yet'], 'Attributing substance effects in an older adult to dementia'),
    ]),
    Q('q4', 'assess', 'intake', 'How should the counselor approach Ms. Bae’s memory complaints and her daughter’s worry about dementia?', ['R6', 'R1'], [
      O('a', 'Record a provisional major neurocognitive disorder so the plan can focus on memory supports and home services.', -2,
        'Premature diagnosis', 'Label first', 'Recording a neurocognitive diagnosis before medical evaluation, with sedative and alcohol effects active, is unsupported and can redirect care away from the real problem', ['nightly lorazepam and wine', 'no medical evaluation of memory'], 'Diagnosing dementia in an older adult without ruling out substance and medical causes'),
      O('b', 'Reassure Ms. Bae that occasional forgetting is a normal part of being 74 and needs no further evaluation now.', -1,
        'Dismisses a real concern', 'Normalization', 'Leaving a pot on the stove and forgetting conversations warrant evaluation; dismissing them as normal aging misses both safety and substance effects', ['pot left on the stove', 'forgetting conversations'], 'Explaining away cognitive symptoms in older adults as normal aging'),
      O('c', 'Screen her cognition and request a medical evaluation, since sedatives and alcohol can mimic impairment.', 3,
        'Screen, refer, consider substances', 'Integrated assessment', 'A brief screen documents a baseline, and medical evaluation can sort substance, medical, and neurodegenerative contributors before any diagnosis', ['lorazepam 3 mg daily plus extras', 'plum wine most evenings'], 'Skipping the substance and medical contributors to cognitive complaints'),
      O('d', 'Defer cognitive screening until she has fully stopped lorazepam, since any result before then would be invalid.', 0,
        'Delays a useful baseline', 'Wait-and-see', 'Results will be affected by sedatives, but a baseline now still guides safety and lets change be tracked during the taper', ['safety concerns at home'], 'Withholding screening until conditions are perfect'),
    ]),
    Q('q5', 'assess', 'intake', 'Which level-of-care recommendation best fits what Ms. Bae has disclosed about stopping lorazepam in the past?', ['R3', 'R2'], [
      O('a', 'Weekly outpatient counseling while she tapers on her own schedule, since she has gotten through missed doses before.', -2,
        'Misses a probable withdrawal seizure', 'Self-directed taper', 'The holiday episode with confusion and a bitten tongue suggests a withdrawal seizure; an unsupervised taper repeats the danger', ['“confused on the kitchen floor with a bitten tongue”', 'refill delayed over a holiday'], 'Reading a buried seizure history as evidence she can manage withdrawal alone'),
      O('b', 'Urgent medical evaluation of withdrawal risk, citing the holiday episode, to set a supervised taper and its setting.', 3,
        'Medical oversight of withdrawal', 'Match care to withdrawal risk', 'A probable withdrawal seizure raises ASAM Dimension 1 risk; a physician must evaluate it and decide whether the gradual taper can be outpatient or needs inpatient withdrawal management, with counseling continuing', ['bitten tongue and confusion', 'age 74', 'alcohol use'], 'Overlooking withdrawal potential when planning level of care'),
      O('c', 'Direct admission to an inpatient withdrawal unit, since older adults on long-term benzodiazepines need that.', 0,
        'Over-restrictive but safe', 'Default to most intensive', 'Inpatient withdrawal management may prove necessary, but the setting is a medical decision based on full evaluation; many older adults taper safely with close outpatient supervision', ['medical evaluation pending'], 'Choosing the most restrictive level by category rather than by assessment'),
      O('d', 'A peer support group first, deferring any medical involvement until she shows she is truly ready to change.', -1,
        'Delays needed medical input', 'Readiness-first', 'Peer support may help later, but withdrawal risk needs medical input now regardless of readiness', ['history of possible seizure'], 'Sequencing motivation before medical safety'),
    ]),
    // ---------------- session1 (3) ----------------
    Q('q6', 'planning', 'session1', 'How should the counselor respond to Ms. Bae’s plan to pour out every pill when Grace visits this weekend?', ['R2'], [
      O('a', 'Explain that stopping abruptly can cause seizures like the holiday episode, and set a prescriber-led taper first.', 3,
        'Abrupt stop is contraindicated', 'Safety-first sequencing', 'Abrupt benzodiazepine discontinuation after long-term use risks seizures and delirium, and she likely had one already; any reduction must follow a supervised taper', ['“pour every pill down the sink”', 'holiday-weekend episode'], 'Supporting motivation without recognizing that the method is dangerous'),
      O('b', 'Praise her resolve and suggest Grace stay close all weekend in case the withdrawal becomes uncomfortable.', -2,
        'Endorses a dangerous plan', 'Supportive collusion', 'Family presence cannot manage a withdrawal seizure; endorsing abrupt cessation in someone with a probable prior seizure is a serious safety error', ['prior probable withdrawal seizure', 'lives alone'], 'Treating benzodiazepine withdrawal as discomfort rather than a medical risk'),
      O('c', 'Suggest she cut her dose in half this weekend instead, a gentler step that still honors her strong motivation to stop.', -1,
        'Unsupervised rapid reduction', 'Halfway compromise', 'Halving a long-term dose without the prescriber is still a rapid reduction with withdrawal risk, and setting doses is outside counselor scope', ['3 mg daily for years'], 'Believing any smaller step is safe and within counselor scope'),
      O('d', 'Support her goal but ask her to wait until Dr. Alvarez’s next routine visit to discuss the best way to stop.', 0,
        'Safe but lacks urgency and education', 'Defer to routine care', 'Waiting is safer than stopping, but without explaining the risk she may proceed, and the prescriber should hear about the plan now', ['plan is set for this weekend'], 'Missing the urgency of a plan that is days away'),
    ]),
    Q('q7', 'planning', 'session1', 'Which objective best meets SMART standards for the first phase of Ms. Bae’s treatment plan?', ['R2', 'R4'], [
      O('a', 'Become completely free of lorazepam and wine within the next 30 days by using willpower and family support.', -2,
        'Unsafe and unrealistic', 'Rapid abstinence goal', 'A 30-day stop after 16 years is a rapid taper with seizure risk; it is neither safe nor attainable', ['16 years of use', 'probable prior seizure'], 'Setting a fast abstinence target that endangers the client'),
      O('b', 'Feel less foggy and more confident about her memory so that Grace can stop worrying about her living alone.', -1,
        'Not measurable; other-focused', 'Vague goal', 'The goal is not specific, measurable, or time-bound, and it centers Grace’s worry rather than Ms. Bae’s behavior', ['her stated goals'], 'Writing feelings-based goals without measurable behavior'),
      O('c', 'Reduce her lorazepam use gradually over the coming months at whatever pace feels manageable to her each week.', 0,
        'Right direction, not measurable', 'Open-ended taper', 'A gradual reduction is right, but the pace must be set by the prescriber and the objective lacks a measure and a timeframe', ['taper must be supervised'], 'Leaving the taper pace to the client instead of the prescriber'),
      O('d', 'For 12 weeks, take only the doses in Dr. Alvarez’s weekly taper packs, logging each dose and any falls daily.', 3,
        'Specific, measurable, safe', 'SMART objective', 'The objective names a behavior, a measure, a timeframe, and ties dosing to the prescriber’s plan while tracking falls', ['not falling again', 'prescriber coordination'], 'Writing objectives that are vague or that set doses outside medical direction'),
    ]),
    Q('q8', 'indirect', 'session1', 'With releases signed, what should the counselor make sure Dr. Alvarez learns from her first contact?', ['R2', 'R5'], [
      O('a', 'Only that Ms. Bae is attending counseling, keeping the urgent-care prescription private to spare her shame.', -2,
        'Withholds safety-critical facts', 'Protective secrecy', 'With a release in place, withholding the second prescriber and the seizure history leaves the physician unable to manage withdrawal safely', ['two prescribers', 'release signed'], 'Prioritizing the client’s embarrassment over medical safety'),
      O('b', 'Her cognitive screen results, while leaving Ms. Bae to mention the second prescription at her next visit.', 0,
        'Incomplete handoff', 'Partial disclosure', 'The screen is useful, but the physician needs the full dosing picture now to plan a taper', ['ashamed of second prescription'], 'Relying on a reluctant client to report the most important fact'),
      O('c', 'Both prescriptions, the holiday collapse with a bitten tongue, her plan to stop abruptly, and nightly wine use.', 3,
        'Share what changes medical management', 'Care coordination', 'The prescriber needs total intake, a possible withdrawal seizure, an imminent abrupt-stop plan, and alcohol use to plan a safe taper', ['release for Dr. Alvarez', 'weekend stop plan'], 'Coordinating with the prescriber but omitting the facts that drive safety'),
      O('d', 'A recommendation to switch her to a different sedative that is considered safer for older adults during the taper.', -1,
        'Outside counselor scope', 'Medication advice', 'Recommending a specific medication change is a prescriber decision; the counselor’s role is to share information and coordinate', ['counselor scope'], 'Offering medication recommendations instead of clinical information'),
    ]),
    // ---------------- session2 (5) ----------------
    Q('q9', 'interventions', 'session2', 'Which intervention best addresses Ms. Bae’s 3 a.m. waking during the taper?', ['R7'], [
      O('a', 'Suggest an over-the-counter sleep aid such as diphenhydramine to bridge the nights until the taper is finished.', -2,
        'Out of scope and risky', 'Substitute a sedative', 'Recommending medication is outside scope, and anticholinergic sleep aids raise confusion and fall risk in older adults', ['age 74', 'recent fall', 'memory complaints'], 'Replacing one sedating drug with another'),
      O('b', 'Teach CBT-I strategies such as a fixed wake time and leaving bed when awake, and explain rebound insomnia.', 3,
        'First-line insomnia treatment', 'CBT-I plus psychoeducation', 'CBT-I is first-line for insomnia, including in older adults and during benzodiazepine tapers; explaining rebound insomnia reduces alarm', ['waking at 3 a.m.', 'active taper'], 'Treating taper-related insomnia with medication or reassurance alone'),
      O('c', 'Advise her to keep her evening glass of plum wine, since stopping both alcohol and lorazepam at once is too much.', -1,
        'Endorses a CNS depressant', 'Harm-trade framing', 'Alcohol fragments sleep and adds to sedative effects and fall risk; it should not be recommended as a sleep aid', ['wine “for sleep”', 'falls'], 'Recommending alcohol as a coping tool during a sedative taper'),
      O('d', 'Review general sleep hygiene tips, such as avoiding caffeine, and check back on her sleep in a few weeks.', 0,
        'Helpful but insufficient', 'Hygiene only', 'Sleep hygiene alone is weaker than CBT-I and leaves her without an active plan at a vulnerable point in the taper', ['ongoing waking'], 'Stopping at sleep hygiene when an active treatment exists'),
    ]),
    Q('q10', 'interventions', 'session2', 'Ms. Bae says, “Maybe I am too old for this.” Which response best reflects motivational interviewing?', ['R4'], [
      O('a', '“Part of you wonders if it is worth it, and part of you wants to stay sharp enough to teach at Korean school.”', 3,
        'Double-sided reflection with values', 'Develop discrepancy', 'A double-sided reflection honors ambivalence and links change to her own valued role, which evokes change talk', ['loves Korean school', 'forgot a student’s name'], 'Arguing for change instead of evoking the client’s own reasons'),
      O('b', '“Your mother took pills until 90, but research shows benzodiazepines carry real risks for older adults like you.”', -1,
        'Righting reflex', 'Persuasion', 'Correcting her with research invites her to defend the status quo and increases resistance', ['ambivalent statement'], 'Using facts to argue rather than reflecting ambivalence'),
      O('c', '“What do you think would help you feel more ready to keep going with Dr. Alvarez’s taper plan?”', 0,
        'Reasonable but skips the reflection', 'Open question', 'An open question is MI-consistent, but reflecting first shows understanding and draws on her values more directly', ['sustain talk present'], 'Jumping to planning before reflecting ambivalence'),
      O('d', '“You may be right that it is too late, so we can pause the taper and focus only on your sleep and worry.”', -2,
        'Colludes and reverses medical plan', 'Agree with sustain talk', 'Agreeing it is too late abandons her goals and suggests changing a prescriber-directed taper, which is outside scope and unsafe', ['taper underway', 'goal of not falling'], 'Reinforcing sustain talk and interfering with a medical plan'),
    ]),
    Q('q11', 'interventions', 'session2', 'How should the counselor respond to Ms. Bae’s extra half-tablets from the old “emergency” bottle?', ['R4', 'R2'], [
      O('a', 'Tell her further extra doses will mean ending counseling, since the taper works only with complete honesty.', -2,
        'Punitive and abandoning', 'Ultimatum', 'Threatening discharge shames her, discourages disclosure, and risks losing her mid-taper', ['she disclosed voluntarily', 'active taper'], 'Treating a lapse as grounds for discharge'),
      O('b', 'Keep the lapses between the two of them to protect trust, and work on coping skills so it does not happen again.', -1,
        'Withholds information the prescriber needs', 'Secrecy pact', 'The prescriber needs accurate dosing to set the taper pace; promising secrecy blocks safe care', ['release on file', 'morning tremor'], 'Equating confidentiality with keeping prescribers uninformed'),
      O('c', 'Explore the lapses without judgment, help her tell Dr. Alvarez, and plan safe disposal of the old bottle.', 3,
        'Nonjudgmental lapse management', 'Explore, coordinate, reduce access', 'Lapses are common in tapers; exploring triggers, supporting disclosure to the prescriber, and removing extra supply keep the taper safe', ['two extra half-tablets', 'old “emergency” bottle'], 'Either punishing lapses or hiding them from the prescriber'),
      O('d', 'Normalize the lapses as common during tapers and focus the session on coping with her 3 a.m. worry instead.', 0,
        'Normalizes but leaves risks', 'Normalize and move on', 'Normalizing is right, but the extra supply and the prescriber’s need to know are left unaddressed', ['old bottle remains'], 'Stopping at reassurance without addressing supply and coordination'),
    ]),
    Q('q12', 'legal', 'session2', 'What must the counselor confirm before holding video sessions while Ms. Bae stays in Charlotte?', ['R8'], [
      O('a', 'That her Georgia residence keeps jurisdiction in Georgia, so the counselor’s Georgia license covers the sessions.', -1,
        'Misreads jurisdiction', 'Residence framing', 'Telehealth jurisdiction generally follows where the client is located during the session, not her home address', ['six weeks in North Carolina'], 'Assuming the client’s home state governs sessions held elsewhere'),
      O('b', 'That the video platform is HIPAA-compliant, since platform security is the main legal issue in telehealth practice.', 0,
        'Necessary but not sufficient', 'Platform-only', 'A secure platform is required, but it does not resolve whether the counselor may legally practice in North Carolina', ['client located out of state'], 'Treating platform security as the only telehealth requirement'),
      O('c', 'Nothing more, because a six-week visit is too short to trigger another state’s licensure requirements for counselors.', -2,
        'Practicing without authorization', 'Short-stay assumption', 'There is no general short-visit exemption; practicing without authority in the client’s location can violate law and board rules', ['six-week stay'], 'Assuming brief out-of-state stays are exempt from licensure law'),
      O('d', 'That she is authorized to practice in North Carolina, by license or Compact privilege, with a local emergency plan.', 3,
        'Verify authority and emergency plan', 'Location-based practice', 'Counselors must be authorized where the client is located, for example through a Counseling Compact privilege, and set up emergency contacts for that location', ['video from Grace’s home', 'Charlotte, North Carolina'], 'Overlooking licensure and emergency planning for the client’s physical location'),
    ]),
    Q('q13', 'legal', 'session2', 'How should the counselor handle Grace’s call asking for her mother’s exact dose and whether she is “cheating”?', ['R9', 'R5'], [
      O('a', 'Without confirming anything, listen to Grace’s concerns and later invite Ms. Bae to decide about a release.', 3,
        'Protect confidentiality; invite consent', 'Listen without disclosing', 'Without authorization the counselor discloses nothing, including that Ms. Bae is a client, but can hear concerns and raise a release with the client', ['no release for Grace', 'competent adult client'], 'Disclosing to family because they are worried and related'),
      O('b', 'Share the dosing schedule only, since Grace is family and dose information is not really counseling content.', -1,
        'Unauthorized disclosure', 'Partial disclosure', 'Medication and dosing information is protected health information; family status does not authorize disclosure', ['no release'], 'Assuming medication facts are not confidential'),
      O('c', 'Tell Grace about the extra half-tablets, since a daughter has a right to know about safety concerns like these.', -2,
        'Breach without exception', 'Safety-justified breach', 'No imminent danger exception applies, and Dr. Alvarez is already managing the taper; disclosure breaches confidentiality and trust', ['taper medically managed'], 'Stretching safety exceptions to justify routine disclosure to family'),
      O('d', 'Decline to speak with Grace at all and end the call, then note the request in the record for the next session.', 0,
        'Protects privacy but misses engagement', 'Shut down contact', 'Confidentiality is kept, but listening costs nothing and Grace’s concerns may be useful to raise with Ms. Bae', ['family involvement could help'], 'Equating confidentiality with refusing to listen'),
    ]),
  ],
};

// ============================================================================
// D941 — A sales executive sent by HR, and a counselor who feels herself shrink (plan 1)
// Medium: a third-party (EAP/HR) referral that limits disclosure, plus a
// differential that needs a specific discriminator (pervasive vs. episodic grandiosity).
// ============================================================================
const D941 = {
  id: 'ncmhce-D941',
  title: 'A sales executive sent by HR asks whether his counselor is “actually licensed”',
  category: 'Personality',
  difficulty: 'medium',
  plan: 1,
  population: 'adult',
  primaryDiagnosis: { name: 'Narcissistic Personality Disorder', code: 'F60.81' },
  diagnosis: { name: 'Narcissistic Personality Disorder', code: 'F60.81' },
  differentialOptions: [
    { id: 'do1', name: 'Bipolar II Disorder', isCorrect: false },
    { id: 'do2', name: 'Antisocial Personality Disorder', isCorrect: false },
    { id: 'do3', name: 'Narcissistic Personality Disorder', isCorrect: true },
    { id: 'do4', name: 'Alcohol Use Disorder, Mild', isCorrect: false },
  ],
  narrative: {
    intake:
      'Rafael Quintero, a 46-year-old Colombian American senior vice president of sales at a Denver medical-device company, comes to a group private ' +
      'practice through his employer’s employee assistance program (EAP) after three HR complaints in six months from direct reports describing public ' +
      'belittling, taking credit for their work, and shouting at a junior representative who missed a quota. HR has made counseling part of a ' +
      'performance improvement plan; the EAP authorization he signed allows the counselor to report attendance and completion only, and he says HR ' +
      '“will obviously get your notes.” In the first minutes he asks whether the counselor is “actually licensed or still in training,” says he ' +
      'expected “the senior partner,” and calls himself “the reason this company exists.” He says his ex-wife and two prior employers also “could not ' +
      'handle excellence,” expects his team to anticipate his needs, and becomes visibly irritated when asked about his part in the complaints. He ' +
      'sleeps seven hours nightly, denies any period of decreased need for sleep, racing thoughts, or unusual spending, and says he has “always been ' +
      'like this, since business school.” He has two cocktails at client dinners a few nights a week. Near the end, asked about stress, he laughs: ' +
      '“If they fire me, that is it — I am done, there is nothing after this,” then turns to his bonus. The counselor, licensed two years, feels her ' +
      'face flush and catches herself reciting her credentials; afterward she notices she also felt pleased when he called her “sharper than the last ' +
      'one,” an EAP counselor he quit after one session.',
    session1:
      'A structured suicide-risk screen completed at the end of intake was negative for current ideation, intent, plan, or past attempts; he called the ' +
      'remark “a figure of speech” but agreed that losing his title “would be the end of who I am.” The HR director, Ms. Kowalski, emails the counselor ' +
      'asking for her “impressions” and whether Rafael is “fixable,” noting the company will decide on his role in 60 days. In session Rafael says his ' +
      'goal is “to get HR off my back” and blames “oversensitive millennials,” but says he was stung when his 16-year-old daughter chose not to spend ' +
      'spring break with him, and that he wants to keep his job. He brings a 360-degree feedback report showing his lowest scores on “listens to ' +
      'others” and “gives credit to the team.”',
    session2:
      'At the fourth of twelve planned sessions the counselor starts six minutes late. Rafael says coldly that “someone at my level does not wait,” ' +
      'threatens to report her to the licensing board, then answers in single words. Later he asks her to write HR a letter stating he has ' +
      '“successfully completed treatment and is no longer a risk.” He describes shouting at a representative again and says, “I do not know how to tell ' +
      'them they are wrong without it turning into a fight.” On the brief session-rating scale the counselor gives at the end of each session, he has ' +
      'rated every session a perfect score, including this one. Two days later a one-star review signed “R.Q.” appears on the practice’s public ' +
      'business page calling the counselor “incompetent and late,” and the practice owner asks how she wants to respond.',
  },
  diagnosticRationale:
    'Rafael shows a pervasive pattern, since early adulthood and across work, marriage, and prior jobs, of grandiosity (“the reason this company ' +
    'exists”), entitlement (expects the senior partner, expects others to anticipate his needs), interpersonal exploitation (taking credit), lack of ' +
    'empathy (public belittling), and arrogant, haughty behavior, with marked sensitivity to criticism. That meets five or more Narcissistic ' +
    'Personality Disorder criteria. His grandiosity is stable rather than episodic, with no decreased need for sleep, racing thoughts, or impulsive ' +
    'spending, which argues against hypomania. He lacks the conduct-disorder history and pervasive rule-breaking of antisocial personality disorder, ' +
    'and his social drinking does not meet use-disorder criteria on the facts given.',
  references: [
    { id: 'R1', source: 'DSM-5-TR', detail: 'Narcissistic personality disorder: pervasive grandiosity, need for admiration, lack of empathy (5 of 9 criteria); differentiation from hypomanic episodes and antisocial personality disorder' },
    { id: 'R2', source: 'ACA Code of Ethics', detail: 'Informed consent including limits of confidentiality with third-party referrals; honesty in reports to third parties; responding to online reviews without revealing client status' },
    { id: 'R3', source: 'C-SSRS', detail: 'Screening for suicidal ideation and behavior when a client voices hopelessness after a threatened loss' },
    { id: 'R4', source: 'Corey (Theory & Practice)', detail: 'Working alliance, countertransference, repairing ruptures, and skill rehearsal (role-play) in counseling' },
    { id: 'R5', source: 'HIPAA', detail: 'Minimum necessary standard; disclosures limited to the scope of the client’s authorization; no confirmation of client status in public forums' },
    { id: 'R6', source: 'NBCC Code of Ethics', detail: 'Self-monitoring of personal reactions, use of supervision, and accurate representation of services and outcomes' },
  ],
  questions: [
    // ---------------- intake (5) ----------------
    Q('q1', 'assess', 'intake', 'Rafael says HR “will obviously get your notes.” What should the counselor do before going further in the intake?', ['R2', 'R5'], [
      O('a', 'Assure him that nothing he says will ever leave the room, so he can speak freely without worrying about his employer.', -2,
        'Overpromises confidentiality', 'Blanket assurance', 'Confidentiality has legal and safety limits, and his signed authorization does allow some disclosure; a false promise undermines consent', ['EAP authorization on file', 'limits of confidentiality'], 'Promising absolute confidentiality to build rapport'),
      O('b', 'Continue the history and clarify reporting later, once he trusts the counselor enough to hear the details calmly.', -1,
        'Consent after disclosure', 'Delay consent', 'He is disclosing under a false belief about what HR will see; consent must be informed before he shares more', ['“will obviously get your notes”'], 'Gathering information before correcting a misunderstanding about disclosure'),
      O('c', 'Explain that HR receives attendance and completion only under his authorization, and review the other limits now.', 3,
        'Informed consent for a mandated referral', 'Clarify third-party limits', 'With third-party referrals, the client must understand exactly what will be shared and the standard limits of confidentiality before proceeding', ['EAP authorization: attendance and completion only', 'performance improvement plan'], 'Leaving a mandated client unsure what the referral source will receive'),
      O('d', 'Offer to send HR a summary of each session as well, since full transparency may improve his standing at work.', 0,
        'Exceeds the authorization', 'Over-share for goodwill', 'Expanding disclosure is his choice through a new authorization, not the counselor’s offer; minimum necessary applies', ['authorization limited in scope'], 'Treating more disclosure as automatically helpful to a mandated client'),
    ]),
    Q('q2', 'assess', 'intake', 'Which finding best distinguishes Rafael’s grandiosity from a hypomanic episode?', ['R1'], [
      O('a', 'His self-importance has been stable since business school, with normal sleep and no racing thoughts or spending sprees.', 3,
        'Pervasive, not episodic', 'Apply the discriminator', 'Hypomania is a distinct episode with decreased need for sleep and other symptoms; his grandiosity is a stable trait since early adulthood', ['“always been like this, since business school”', 'sleeps seven hours'], 'Diagnosing hypomania from grandiosity without an episodic change'),
      O('b', 'His irritability when challenged about the complaints is typical of hypomania and shows his mood is currently elevated.', -1,
        'Mistakes trait reaction for mood state', 'Irritability framing', 'Irritability under criticism fits narcissistic vulnerability; without an episode it does not indicate hypomania', ['irritation when asked about his part'], 'Treating interpersonal irritability as a mood episode'),
      O('c', 'His drinking at client dinners several times a week means substance effects best explain his inflated self-image.', -2,
        'Unsupported attribution', 'Substance framing', 'Two drinks at dinners does not explain a lifelong pattern across settings, and the conclusion would derail assessment', ['pattern predates drinking context'], 'Attributing a lifelong trait pattern to modest social drinking'),
      O('d', 'His success as a senior executive shows that his confidence reflects real ability rather than any disorder at all.', 0,
        'Partly true, misses the pattern', 'Achievement framing', 'Success can coexist with the disorder; the pattern of entitlement, exploitation, and lack of empathy causes impairment regardless of ability', ['three HR complaints', 'divorce'], 'Using achievement to rule out a personality disorder'),
    ]),
    Q('q3', 'assess', 'intake', 'How should the counselor respond to Rafael’s laughing remark, “If they fire me … I am done, there is nothing after this”?', ['R3'], [
      O('a', 'Treat it as a figure of speech, since he laughed and moved on to his bonus without any sign of distress.', -2,
        'Dismisses a possible warning sign', 'Take the affect at face value', 'Laughter does not cancel risk; humiliation and threatened loss of status can raise suicide risk in people with narcissistic traits', ['“I am done”', '60-day decision pending'], 'Dismissing a death-related statement because of the client’s casual tone'),
      O('b', 'Note the comment and plan to ask about suicidal thoughts at the next session, once more rapport has been built.', -1,
        'Delays a needed screen', 'Wait for rapport', 'A possible warning statement calls for direct inquiry in the same session; waiting leaves risk unknown', ['statement made at intake'], 'Postponing risk assessment to protect rapport'),
      O('c', 'Reflect the importance of his job to him and explore what his work means to his identity before asking anything else.', 0,
        'Good empathy, missing the question', 'Explore meaning first', 'Exploring meaning is useful, but it must not replace directly asking about suicidal thoughts', ['job tied to identity'], 'Substituting exploration for a direct suicide inquiry'),
      O('d', 'Ask directly about suicidal thoughts using a structured screen before he leaves, despite his casual tone.', 3,
        'Direct, structured screen now', 'Assess risk', 'Statements about having “nothing after” a loss warrant direct, structured screening in the same session', ['threatened loss of status', 'hopeless phrasing'], 'Letting a joking tone substitute for asking'),
    ]),
    Q('q4', 'profdev', 'intake', 'Afterward, the counselor realizes she felt pleased when Rafael called her “sharper than the last one.” What is the best next step?', ['R6', 'R4'], [
      O('a', 'Enjoy the compliment as a sign of a strong alliance and build on it by sharing more of her professional background.', -1,
        'Misreads idealization', 'Accept praise', 'Idealization often precedes devaluation in narcissistic patterns; leaning into praise sets up a later rupture', ['quit last counselor after one session'], 'Taking idealization as a solid working alliance'),
      O('b', 'Bring both the flattery and her flushed defensiveness to supervision as linked parts of his relational pattern.', 3,
        'Supervision for countertransference', 'Self-reflection', 'Feeling diminished and then flattered mirrors his idealize–devalue pattern; supervision helps her use those reactions rather than act on them', ['recited her credentials', 'felt pleased by praise'], 'Treating each reaction separately and missing the pattern'),
      O('c', 'Transfer him to a senior partner, since her reactions show she is not experienced enough to treat him effectively.', -2,
        'Abandons care; enacts his demand', 'Refer out', 'Countertransference is expected with this client and is managed through supervision, not transfer; transferring also rewards his devaluation', ['asked for “the senior partner”'], 'Treating normal countertransference as proof of incompetence'),
      O('d', 'Journal about her reactions privately and keep them out of supervision, since they reflect her own issues only.', 0,
        'Reflection without support', 'Private processing', 'Self-reflection is useful, but these reactions carry clinical information that supervision can help her use', ['strong reactions in session'], 'Seeing countertransference as purely personal rather than clinical data'),
    ]),
    Q('q5', 'profdev', 'intake', 'In the moment Rafael asked whether she was “actually licensed,” which self-regulation response would have served best?', ['R4', 'R6'], [
      O('a', 'Correct his assumption firmly by listing her degree, license, and training so he takes the counseling seriously.', -1,
        'Defensive reaction', 'Assert credentials', 'Defending herself enacts the power struggle he is inviting and shifts focus to her need to be seen as competent', ['face flushed', 'recited credentials'], 'Responding to devaluation with self-justification'),
      O('b', 'Point out that his question is an example of the disrespect his employees complained about to HR.', -2,
        'Premature confrontation', 'Interpret the attack', 'Confronting him in the first minutes, out of her own irritation, is likely to end the alliance before it forms', ['first minutes of intake'], 'Confronting from a defensive state early in treatment'),
      O('c', 'Answer briefly and invite him to say what he would want from a counselor, letting the moment pass without comment.', 0,
        'Calm, but no self-monitoring', 'Answer and redirect', 'A brief answer is reasonable, but it skips noticing her own arousal, which drove the defensive recital', ['flushing'], 'Managing the client’s behavior without regulating her own reaction'),
      O('d', 'Notice her flushing, slow her breathing, answer briefly, and get curious about what he needs to trust her.', 3,
        'Regulate, then respond', 'Self-regulation', 'Noticing physiological arousal and slowing down lets her answer factually and stay curious instead of defensive', ['face flushed', '“actually licensed or still in training”'], 'Reacting from arousal instead of regulating first'),
    ]),
    // ---------------- session1 (3) ----------------
    Q('q6', 'indirect', 'session1', 'How should the counselor respond to Ms. Kowalski’s request for her “impressions” and whether Rafael is “fixable”?', ['R5', 'R2'], [
      O('a', 'Reply with a brief, balanced clinical impression, since HR is funding care and must decide on his role in 60 days.', -2,
        'Unauthorized disclosure', 'Payer entitlement', 'Funding the referral does not expand the authorization; sharing impressions breaches confidentiality and could cost him his job', ['authorization: attendance and completion only'], 'Assuming the referral source is entitled to clinical information'),
      O('b', 'Ignore the email, since any contact with HR would reveal that Rafael is participating in counseling.', -1,
        'Unprofessional nonresponse', 'Avoidance', 'His participation is already authorized for disclosure; ignoring HR is unprofessional and can harm his standing', ['attendance may be reported'], 'Treating all contact with a third party as prohibited'),
      O('c', 'Reply with his attendance only, explain the limits of his authorization, and tell Rafael about the request.', 3,
        'Disclose within scope; be transparent', 'Honor the authorization', 'Disclosure stays within the signed authorization, and telling the client keeps the process transparent and supports trust', ['HR request for impressions', 'EAP authorization'], 'Going beyond the authorization or concealing third-party contact from the client'),
      O('d', 'Ask Rafael to sign a broader release so the counselor can tell HR he is engaged and making early progress.', 0,
        'Pressures expanded disclosure', 'Seek broader release', 'Any expansion must be his free choice; proposing it in response to HR pressure risks coercing a mandated client', ['60-day decision looming'], 'Seeking a broader release to satisfy the employer'),
    ]),
    Q('q7', 'planning', 'session1', 'Rafael’s stated goal is “to get HR off my back.” How should the counselor approach goal setting?', ['R4'], [
      O('a', 'Set the goal of gaining insight into his narcissistic traits, since lasting change depends on that first.', -1,
        'Counselor-imposed goal', 'Insight-first', 'Imposing an insight goal he does not endorse invites resistance and ignores his stated motivation', ['blames “oversensitive millennials”'], 'Setting goals around the diagnosis instead of the client’s motivation'),
      O('b', 'Link what he wants, keeping his job and time with his daughter, to specific behaviors he agrees to change.', 3,
        'Collaborative, motivation-linked goals', 'Use his own priorities', 'Tying goals to his values (job, daughter) gives him reasons to change interpersonal behaviors he otherwise dismisses', ['wants to keep his job', 'stung by daughter’s choice'], 'Rejecting the client’s goal instead of building on it'),
      O('c', 'Accept “get HR off my back” as written, since a mandated client’s goals must be taken exactly as he states them.', 0,
        'Respects autonomy, lacks focus', 'Literal acceptance', 'Starting from his words is right, but the goal must be shaped into behaviors he controls', ['vague, externally focused goal'], 'Treating a vague complaint as a workable treatment goal'),
      O('d', 'Let HR’s performance improvement plan set the treatment goals, since the employer defined the problem.', -2,
        'Cedes treatment to employer', 'Third-party goals', 'Treatment goals belong to the client and counselor; letting the employer set them compromises his autonomy and the alliance', ['EAP referral', 'limited authorization'], 'Letting the referral source define counseling goals'),
    ]),
    Q('q8', 'planning', 'session1', 'Using the 360-degree feedback, which objective best meets SMART standards?', ['R4'], [
      O('a', 'For 8 weeks, credit a named team member in each weekly sales meeting, tracked in a log and a follow-up 360 survey.', 3,
        'Specific, measurable, tied to data', 'SMART objective', 'The objective targets a low-scoring behavior, defines frequency and timeframe, and uses repeat 360 data to measure change', ['lowest score: gives credit to the team'], 'Writing objectives that cannot be measured'),
      O('b', 'Become a more empathic and collaborative leader whom his direct reports trust and respect by the next quarter ends.', -1,
        'Vague aspiration', 'Global goal', 'Empathy and trust are worthy aims but are not stated as observable behaviors with measures', ['360 report available'], 'Confusing broad aspirations with measurable objectives'),
      O('c', 'Have no further HR complaints filed against him for the remainder of the 60-day performance improvement period.', 0,
        'Measurable but not in his control', 'Outcome-only', 'Complaint counts are measurable but depend on others and do not specify the behavior he will change', ['60-day decision'], 'Using an outcome others control as the objective'),
      O('d', 'Accept that his team is oversensitive and focus on reducing his own frustration with their reactions to him.', -2,
        'Reinforces the externalizing view', 'Collude with blame', 'Adopting his view that others are the problem undermines the reason for referral and the feedback data', ['“oversensitive millennials”', 'low 360 scores'], 'Colluding with externalization to keep the alliance'),
    ]),
    // ---------------- session2 (5) ----------------
    Q('q9', 'legal', 'session2', 'How should the counselor respond to Rafael’s request for a letter saying he has “successfully completed treatment”?', ['R2', 'R6'], [
      O('a', 'Write the letter as requested, since a supportive statement may protect his job and strengthen the alliance.', -2,
        'False report to a third party', 'Accommodate', 'Stating completion after four of twelve sessions is inaccurate and violates honesty duties in reports to third parties', ['four of twelve sessions', '“no longer a risk”'], 'Writing an inaccurate report to please a client'),
      O('b', 'Decline any letter at all, since writing to HR would compromise the counseling relationship and his privacy.', 0,
        'Protects privacy, unhelpfully', 'Blanket refusal', 'Declining avoids an inaccurate report, but he authorized attendance and completion reports, so an accurate status letter within that scope serves him better', ['EAP authorization'], 'Refusing all reports instead of providing an accurate one'),
      O('c', 'Write that he has attended four sessions to date and that treatment is ongoing, within his authorization.', 3,
        'Accurate, in-scope report', 'Honest documentation', 'A report limited to accurate attendance and status honors both his authorization and the counselor’s duty of honesty', ['four of twelve sessions', 'attendance and completion only'], 'Overstating progress or refusing an authorized report'),
      O('d', 'Agree to write that he is making good progress and engaged, without stating that treatment is complete.', -1,
        'Exceeds scope; shades accuracy', 'Soften the request', 'Progress opinions go beyond the attendance-and-completion authorization and overstate engagement after a rupture', ['authorization scope', 'single-word answers'], 'Adding clinical opinion beyond the authorization'),
    ]),
    Q('q10', 'interventions', 'session2', 'After the late start, Rafael threatens a board complaint and then answers in single words. What should the counselor do?', ['R4'], [
      O('a', 'Explain that six minutes is within normal scheduling variance and suggest they move on to his workplace goals.', -1,
        'Defensive minimizing', 'Justify and proceed', 'Minimizing his reaction deepens the rupture and models the dismissiveness his team complains about', ['withdrawal after lateness'], 'Defending the counselor’s behavior instead of addressing the rupture'),
      O('b', 'Interpret his anger as the same entitlement his employees describe, so he can see the pattern in action.', -2,
        'Confrontation during a rupture', 'Interpretation', 'Interpreting while he feels slighted is likely to be heard as an attack and could end treatment', ['board threat', 'withdrawal'], 'Using the rupture to confront rather than repair'),
      O('c', 'Continue with the planned agenda and let the tension fade, since raising it could escalate his anger further.', 0,
        'Avoids the rupture', 'Wait it out', 'Avoidance keeps the session calm but leaves the rupture unrepaired and the withdrawal unexplored', ['single-word answers'], 'Avoiding rupture repair to prevent conflict'),
      O('d', 'Acknowledge starting late without defensiveness and invite him to say what the wait was like for him.', 3,
        'Rupture repair', 'Acknowledge and explore', 'Owning her part non-defensively and exploring his experience repairs the alliance and models a skill he needs', ['six minutes late', 'cold withdrawal'], 'Ignoring or justifying a rupture instead of repairing it'),
    ]),
    Q('q11', 'interventions', 'session2', 'Rafael says he does not know how to tell his team they are wrong without a fight. Which intervention fits best?', ['R4'], [
      O('a', 'Role-play giving corrective feedback with a simple structure, then switch roles so he hears it as his employee.', 3,
        'Skill rehearsal with perspective-taking', 'Behavioral rehearsal', 'Rehearsal builds a concrete skill, and role reversal gives him direct experience of the other person’s perspective', ['“I do not know how to tell them”', 'low “listens to others” score'], 'Talking about empathy instead of practicing the behavior'),
      O('b', 'Explore how his father gave him feedback as a child, since insight into its origins must come before new skills.', 0,
        'Possibly useful, not timely', 'Insight-first', 'Family history may add meaning later, but he has asked for a skill he can use now', ['request for a practical skill'], 'Prioritizing insight over a skill the client has asked for'),
      O('c', 'Advise him to avoid giving feedback directly for now and route all corrections through a mid-level manager.', -1,
        'Avoidance strategy', 'Workaround', 'Delegating sidesteps the problem and leaves him without the skill his role requires', ['senior leadership role'], 'Teaching avoidance instead of building skill'),
      O('d', 'Tell him his team is right about him and that he needs to apologize to each of them before anything else.', -2,
        'Shaming directive', 'Confront and direct', 'Shaming confrontation is likely to provoke devaluation and dropout, and directing apologies is not collaborative', ['sensitivity to criticism'], 'Confronting a narcissistic client with shame'),
    ]),
    Q('q12', 'legal', 'session2', 'How should the counselor respond to the one-star review signed “R.Q.”?', ['R2', 'R5'], [
      O('a', 'Post a factual reply noting the client arrived on time but was seen six minutes late, to correct the public record.', -2,
        'Public breach of confidentiality', 'Correct the record', 'Any reply that acknowledges a counseling relationship discloses protected information, even if the client posted first', ['public review', '“R.Q.”'], 'Assuming a client’s public post waives confidentiality'),
      O('b', 'Do not reply in any way that confirms he is a client; if anything, post only a general statement of practice policy.', 3,
        'Protect client status', 'Non-confirming response', 'Counselors do not confirm or discuss clients in public forums; a generic policy statement, or none, protects confidentiality', ['public business page', 'possible client author'], 'Defending oneself publicly at the cost of client confidentiality'),
      O('c', 'Ask Rafael in session to remove the review, explaining that it harms the practice and her professional reputation.', 0,
        'Private, but self-serving', 'Request removal', 'Raising the review with him privately breaches nothing, but framing it around her reputation puts the counselor’s interests above his; exploring it as part of the rupture would be better', ['rupture in progress'], 'Using the counseling relationship to manage the counselor’s reputation'),
      O('d', 'Ask the platform to remove the review under its policies, stating that it contains a client’s private health details.', -1,
        'Confirms client status to a third party', 'Platform takedown', 'A removal request through platform policy can be reasonable, but asserting the review contains client health details discloses the counseling relationship to a third party without authorization', ['platform is a third party', 'client status is protected'], 'Assuming a private disclosure to a platform does not count as disclosure'),
    ]),
    Q('q13', 'interventions', 'session2', 'Rafael has rated every session a perfect score, including today’s. How should the counselor use this feedback?', ['R4'], [
      O('a', 'Take the perfect ratings as evidence the alliance is strong and that the late start did not affect him much.', -1,
        'Accepts invalid feedback', 'Take at face value', 'Perfect ratings after a visible rupture likely reflect reluctance to show vulnerability rather than satisfaction', ['cold withdrawal today', 'board threat'], 'Trusting ratings that contradict observed behavior'),
      O('b', 'Stop using the rating scale with him, since a client with these traits cannot give honest feedback anyway.', -2,
        'Abandons feedback; stigmatizing', 'Discard the tool', 'Dropping feedback removes a route to repairing ruptures and stereotypes him as incapable of honesty', ['ongoing ruptures'], 'Assuming personality disorder makes client feedback useless'),
      O('c', 'Say that critical feedback helps her most, and ask specifically what could have gone better in today’s session.', 3,
        'Actively invite negative feedback', 'Solicit specific feedback', 'Explicitly welcoming criticism and asking a specific question makes it safer for him to give honest feedback about the process', ['perfect scores despite rupture'], 'Accepting uniformly positive ratings without inviting candor'),
      O('d', 'Note the mismatch in her records and review the rating trend with him at the planned mid-treatment progress check.', 0,
        'Monitors but delays', 'Defer review', 'Tracking the mismatch is useful, but waiting misses the chance to address it while the rupture is fresh', ['today’s rupture'], 'Postponing feedback discussion to a later review'),
    ]),
  ],
};

// ============================================================================
// D942 — A probationer, a rifle in the truck, and "Saturday this gets settled" (plan 2)
// Hard: the first threat is buried in a charming custody story; the decisive
// facts (identifiable target, location, means, timeline) surface mid-escalation
// and are followed by a retraction; confidentiality is already split with probation.
// ============================================================================
const D942 = {
  id: 'ncmhce-D942',
  title: 'A roofing foreman on probation says the man raising his son “will get what is coming”',
  category: 'Personality',
  difficulty: 'hard',
  plan: 2,
  population: 'adult',
  primaryDiagnosis: { name: 'Antisocial Personality Disorder', code: 'F60.2' },
  diagnosis: { name: 'Antisocial Personality Disorder', code: 'F60.2' },
  differentialOptions: [
    { id: 'do1', name: 'Intermittent Explosive Disorder', isCorrect: false },
    { id: 'do2', name: 'Alcohol Use Disorder, Moderate', isCorrect: false },
    { id: 'do3', name: 'Antisocial Personality Disorder', isCorrect: true },
    { id: 'do4', name: 'Bipolar I Disorder, Current Episode Manic', isCorrect: false },
  ],
  narrative: {
    intake:
      'Garrett Lindahl, a 34-year-old white roofing crew foreman from a rural county, is court-ordered to 26 weeks of counseling at a community mental ' +
      'health center as a condition of three years of felony probation for second-degree assault (he beat a man outside a bar in 2024) and check ' +
      'fraud. As required by the court, he has signed a release allowing the counselor to send his probation officer, Dana Reyes, monthly reports ' +
      'of attendance and treatment progress. His probation bars alcohol and firearms. He was expelled at 13 for setting a school dumpster fire, ' +
      'admits he “got rid of” a neighbor’s cats at 12, was truant and ran away repeatedly, and has adult arrests for fighting, using false names on ' +
      'job applications, and defaulting on loans; he says his victims “had it coming” and that his crew “would be lost without me.” He has a ' +
      '5-year-old son, Wyatt, with his ex-partner, Kayla, and owes child support. Describing his custody situation with a relaxed grin, he praises ' +
      'his own patience and adds that Kayla’s new boyfriend, Josh, “turned my boy against me — guy like that, one day he gets what is coming.” He ' +
      'says he stopped drinking when probation began, and most of his fights and frauds happened sober. He is engaging and complimentary, and asks ' +
      'for 7 p.m. Thursday appointments “because of work”; the counselor, a 28-year-old woman, agreed, although the building is empty after 6 p.m. ' +
      'While reading the record before the session, she felt disgust at the cat history and caught herself planning to “catch him lying.”',
    session1:
      'At the end of intake, asked directly about the remark, Garrett laughed, said it was “just talk,” and denied any intent or plan to harm Josh or ' +
      'anyone else. At session 3, held at 2 p.m. after the counselor moved his appointments into staffed hours, Garrett says custody mediation is in ' +
      'five weeks. He mentions that he had “a couple beers” at his cousin’s wedding and asks the counselor to “leave that out” of this month’s report, ' +
      'which Officer Reyes has just requested, because it would “violate me for nothing.” He says his goal is “to get Reyes off my back and see my ' +
      'boy.” He asks the counselor whether she is married and what she did over the weekend. Writing her note, the counselor drafts the phrase ' +
      '“manipulative, psychopathic, lying throughout.”',
    session2:
      'At session 7, Garrett arrives agitated: Kayla has filed for a protective order, citing things Josh told her, and the hearing is Monday. He ' +
      'paces, says Josh “works the feed-store lot on Route 9 till six,” that his brother’s deer rifle “has been in my truck since Tuesday,” and that ' +
      '“Saturday this gets settled — nobody is going to miss him.” He stands between the counselor and the door, voice rising, fists clenched. After ' +
      'several minutes he sits, says “forget I said that, I am just venting,” and leaves early. The counselor’s state has a duty-to-warn/protect ' +
      'statute covering serious threats against a reasonably identifiable victim. Three weeks later, after Garrett is charged with a probation ' +
      'violation, the counselor receives a subpoena from the county prosecutor for his complete counseling record.',
  },
  diagnosticRationale:
    'Garrett is over 18 and shows a pervasive pattern since age 15 of disregard for the rights of others: repeated arrests, deceitfulness (false ' +
    'names, fraud), impulsivity, irritability and aggression (assault, fights), reckless disregard for others’ safety, irresponsibility (defaulted ' +
    'loans, unpaid child support), and lack of remorse (“had it coming”). Evidence of conduct disorder before 15 (fire-setting, cruelty to animals, ' +
    'truancy, running away) is present, as DSM-5-TR requires. His aggression is part of a broad antisocial pattern rather than isolated explosive ' +
    'outbursts, the behavior occurs largely while sober, and there is no history of manic episodes.',
  references: [
    { id: 'R1', source: 'DSM-5-TR', detail: 'Antisocial personality disorder: pattern since age 15, age at least 18, evidence of conduct disorder with onset before 15; not exclusively during schizophrenia or bipolar disorder' },
    { id: 'R2', source: 'ACA Code of Ethics', detail: 'Informed consent and limits of confidentiality for court-mandated clients; serious and foreseeable harm exception; honesty in reports; documentation; boundaries' },
    { id: 'R3', source: 'State law', detail: 'Duty-to-warn/protect statute (serious threat, reasonably identifiable victim, permitted or required protective actions); response to subpoenas versus court orders' },
    { id: 'R4', source: 'Wiger (Documentation)', detail: 'Objective, behaviorally specific progress notes; contemporaneous documentation of risk assessment, consultation, and protective actions' },
    { id: 'R5', source: 'Corey (Theory & Practice)', detail: 'Cognitive-behavioral approaches with mandated clients; structured, consequence-focused goals; countertransference and supervision' },
    { id: 'R6', source: 'HIPAA', detail: 'Psychotherapy notes and disclosures for judicial proceedings: a subpoena without a court order requires client authorization or satisfactory assurances; minimum necessary' },
    { id: 'R7', source: 'NBCC Code of Ethics', detail: 'Self-awareness of personal reactions, consultation, and maintaining professional boundaries and safety' },
  ],
  questions: [
    // ---------------- intake (5) ----------------
    Q('q1', 'assess', 'intake', 'Before taking Garrett’s history, which informed-consent step matters most for this court-mandated client?', ['R2', 'R3'], [
      O('a', 'Assure him that what he says stays confidential unless he asks for it to be shared, so he will be honest from the start.', -2,
        'False assurance', 'Standard promise', 'He has already authorized monthly reports to probation, and threats of serious harm are an exception; promising otherwise is deceptive', ['court-required release', 'probation reports'], 'Giving a mandated client the same confidentiality promise as a voluntary one'),
      O('b', 'Have him re-sign the court release and begin the history, since the court has already explained what his probation officer receives.', 0,
        'Paperwork without understanding', 'Rely on the court', 'A signature is not informed consent; the counselor must explain what goes in reports and the other limits herself', ['release signed for court'], 'Treating a signed form as proof the client understands'),
      O('c', 'Postpone discussing limits until he has built trust, since mandated clients often disengage when consent is too formal.', -1,
        'Consent after disclosure', 'Rapport first', 'He would disclose without knowing what reaches his officer; consent must come before the history', ['monthly reports to Officer Reyes'], 'Delaying consent for the sake of rapport'),
      O('d', 'Explain what monthly reports to Officer Reyes contain and the other limits, including threats to harm others, first.', 3,
        'Clarify dual reporting and exceptions', 'Informed consent first', 'Mandated clients must know what the referral source will receive and when confidentiality can be broken before they disclose', ['court-ordered counseling', 'release to probation'], 'Starting a mandated assessment without explaining reporting and limits'),
    ]),
    Q('q2', 'profdev', 'intake', 'What should the counselor do about the 7 p.m. Thursday appointments she agreed to?', ['R7', 'R2'], [
      O('a', 'Keep the evening slot but leave her office door open and her phone nearby during his sessions for safety.', 0,
        'Partial safety measure', 'Self-protect in place', 'An open door helps little in an empty building; the underlying problem is meeting a client with violent history with no one present', ['building empty after 6 p.m.', 'assault history'], 'Relying on small precautions instead of fixing an unsafe arrangement'),
      O('b', 'Move his sessions into staffed hours under the center’s safety policy and notice how readily she accommodated him.', 3,
        'Restore safe boundaries; self-reflect', 'Boundary and safety', 'Scheduling within staffed hours protects the counselor, and noticing how quickly she accommodated a charming client guards against further boundary drift', ['7 p.m. in an empty building', 'engaging, complimentary client'], 'Accommodating requests that compromise counselor safety'),
      O('c', 'Keep the evening appointments, since changing them now would signal distrust and damage the early alliance.', -2,
        'Accepts an unsafe arrangement', 'Protect rapport', 'Counselor safety is a precondition for treatment; prioritizing rapport over basic safeguards with a violent history is a serious error', ['violent history', 'isolated after-hours setting'], 'Placing rapport above counselor safety'),
      O('d', 'Ask a male colleague to sit in on each of his evening sessions, so the counselor is not alone with him after hours.', -1,
        'Adds a third party without consent', 'Chaperone', 'A silent observer changes the treatment and raises confidentiality concerns; moving to staffed hours is simpler and better', ['confidentiality of sessions'], 'Solving a scheduling problem by adding an observer'),
    ]),
    Q('q3', 'assess', 'intake', 'Which finding is required to support the given antisocial personality disorder diagnosis?', ['R1'], [
      O('a', 'Evidence of conduct disorder before age 15, such as the fire-setting, cruelty to animals, truancy, and running away.', 3,
        'Required childhood onset', 'Apply the criterion', 'DSM-5-TR requires evidence of conduct disorder with onset before 15; his history documents it', ['dumpster fire at 13', 'cats at 12'], 'Diagnosing from adult criminal history alone'),
      O('b', 'His current felony conviction for assault, which shows a pattern of aggression serious enough to involve the courts.', -1,
        'One conviction is not the pattern', 'Legal-status framing', 'A conviction is a single data point; the diagnosis needs a pervasive pattern and childhood conduct problems', ['current conviction'], 'Equating criminal justice involvement with the diagnosis'),
      O('c', 'A history of alcohol misuse that preceded his adult arrests and explains how all of the antisocial behavior began.', -2,
        'Reverses the rule-out', 'Substance framing', 'Antisocial behavior occurring only during substance use argues against the diagnosis; most of his acts occurred sober', ['fights and frauds sober'], 'Treating substance use as support rather than a rule-out'),
      O('d', 'His charm and flattery in session, which show the superficial interpersonal style often seen in antisocial clients.', 0,
        'Consistent but not required', 'Interpersonal style', 'Superficial charm is often observed but is not a DSM-5-TR criterion; the conduct-disorder history is', ['engaging and complimentary'], 'Relying on interpersonal impressions over formal criteria'),
    ]),
    Q('q4', 'profdev', 'intake', 'How should the counselor handle her disgust at the cat history and her urge to “catch him lying”?', ['R7', 'R5'], [
      O('a', 'Use the urge productively by confronting inconsistencies in his story firmly, starting from the first session onward.', -1,
        'Acts on countertransference', 'Confrontational stance', 'Treatment driven by a wish to catch him becomes adversarial and invites power struggles', ['urge to “catch him lying”'], 'Acting out countertransference as a confrontational style'),
      O('b', 'Refer him to another counselor, since strong negative feelings mean she cannot be objective with this client.', -2,
        'Abandons a mandated client', 'Refer out', 'Strong reactions to antisocial clients are common and manageable; referring out without trying supervision disrupts court-ordered care', ['court-ordered treatment'], 'Treating normal countertransference as disqualifying'),
      O('c', 'Acknowledge the reactions, take them to supervision, and aim for a stance that is neither punitive nor naive.', 3,
        'Self-reflection and supervision', 'Manage countertransference', 'Supervision helps her keep firm boundaries and skepticism without hostility, a balance antisocial clients require', ['disgust at cat history', 'urge to catch him lying'], 'Either suppressing reactions or acting on them'),
      O('d', 'Push the feelings aside and stay warm and accepting, trusting that empathy will reduce his need to deceive.', 0,
        'Suppression; risks naivety', 'Unconditional warmth', 'Warmth matters, but ignoring reactions and trusting empathy alone can make her easier to manipulate', ['history of deceit'], 'Over-correcting for negative feelings with naive acceptance'),
    ]),
    Q('q5', 'assess', 'intake', 'What should the counselor do with Garrett’s grinning remark that Josh “gets what is coming”?', ['R2', 'R3'], [
      O('a', 'Note it for later, since custody disputes produce angry talk and he said it with a smile while praising his patience.', -2,
        'Dismisses a possible threat', 'Normalize', 'A remark about an identifiable person from a man with an assault conviction must be explored now; tone does not cancel risk', ['assault history', 'named target'], 'Discounting a threat because of a relaxed tone'),
      O('b', 'Ask directly, before he leaves, about intent, plans, access to weapons, and any past violence toward Josh.', 3,
        'Assess risk to others now', 'Direct violence-risk inquiry', 'A veiled threat toward an identifiable person by someone with violent history calls for same-session inquiry into intent, plan, means, and history', ['“one day he gets what is coming”', 'second-degree assault'], 'Waiting for an explicit threat before assessing'),
      O('c', 'Notify Officer Reyes and Josh today, since any remark like this from a probationer triggers a duty to warn.', 0,
        'Premature, but protective', 'Warn immediately', 'Warning may become necessary, but first the counselor should assess whether a serious threat exists; acting without assessment may breach confidentiality', ['vague remark', 'no stated plan yet'], 'Skipping assessment and jumping to disclosure'),
      O('d', 'Reflect his frustration about custody and explore his feelings about Josh before asking anything about safety.', -1,
        'Delays the safety question', 'Empathy first', 'Reflection is useful but should not postpone direct risk inquiry, and the session may end before safety is assessed', ['end of intake'], 'Letting empathic exploration delay risk assessment'),
    ]),
    // ---------------- session1 (3) ----------------
    Q('q6', 'indirect', 'session1', 'How should the counselor respond to Garrett’s request to “leave out” the wedding beers from this month’s report?', ['R2'], [
      O('a', 'Agree to leave it out, since two beers is minor and reporting it could cost him his freedom and the alliance.', -2,
        'Falsifies a court report', 'Collude with omission', 'Omitting information by agreement makes the report misleading and compromises the counselor’s integrity with the court', ['report requested', '“leave that out”'], 'Shading a court report to keep a client engaged'),
      O('b', 'Tell Officer Reyes about the drinking right away and before the report, so probation can respond quickly.', -1,
        'Exceeds the reporting process', 'Report urgently', 'Nothing about two beers weeks ago is an emergency; disclosure should follow the agreed report scope and process, discussed with him first', ['release covers monthly reports'], 'Treating a routine issue as requiring immediate disclosure'),
      O('c', 'Report only attendance this month and leave substance issues out, since the release says nothing about alcohol.', 0,
        'Narrows scope to avoid conflict', 'Literal reading', 'The release covers progress, and selectively omitting content to avoid conflict still risks a misleading report; the issue should be discussed openly', ['release: attendance and progress'], 'Reading the release narrowly to sidestep a hard conversation'),
      O('d', 'Explain that reports must be accurate within the release, and review with him what this one will contain.', 3,
        'Honest reporting, transparent process', 'Clarify and review', 'Reviewing report content with the client keeps reports honest and within scope while modeling accountability without secrecy', ['release to probation', 'request to omit'], 'Either colluding with omissions or disclosing without discussion'),
    ]),
    Q('q7', 'indirect', 'session1', 'How should the counselor revise her draft note, “manipulative, psychopathic, lying throughout”?', ['R4'], [
      O('a', 'Keep the wording, since it accurately reflects her clinical impression and will usefully alert future providers.', -2,
        'Pejorative, non-objective note', 'Label-based', 'Judgmental labels are not observations, may be read in court, and can bias future care', ['report shared with probation', 'possible court review'], 'Recording opinions as labels rather than observable behavior'),
      O('b', 'Replace the labels with specific observed behavior and his own words, such as his request to omit the beers.', 3,
        'Objective, behavioral documentation', 'Describe, do not label', 'Notes should record observable behavior and direct quotes, which are accurate, defensible, and clinically useful', ['“leave that out”', 'personal questions about the counselor'], 'Writing conclusions instead of observations'),
      O('c', 'Leave all impressions out of the record and write only the date, length, and general topics discussed in session.', -1,
        'Insufficient documentation', 'Minimal note', 'Notes must document clinically relevant content, including the request to omit information and boundary-testing', ['clinically relevant requests'], 'Avoiding judgmental language by leaving out clinical content'),
      O('d', 'Soften the wording to “possible antisocial traits” so it reads as less harsh if the record is subpoenaed.', 0,
        'Better, still a label', 'Soften the label', 'Softer wording is less pejorative but still substitutes an interpretation for the behavior that supports it', ['diagnosis already documented'], 'Rewording labels instead of documenting behavior'),
    ]),
    Q('q8', 'planning', 'session1', 'Garrett’s goal is “to get Reyes off my back and see my boy.” Which treatment goal fits best?', ['R5'], [
      O('a', 'Develop genuine remorse for his past victims, since empathy is the core deficit behind his antisocial behavior.', -1,
        'Unrealistic, counselor-driven', 'Insight goal', 'Remorse is hard to target or measure and is not what he is motivated to work on; concrete behavioral goals fit better', ['self-interested motivation'], 'Setting a goal that requires a personality change he does not seek'),
      O('b', 'Accept his goal as stated and focus sessions on strategies for handling his probation officer more smoothly.', -2,
        'Colludes with manipulation', 'Literal acceptance', 'Treating counseling as a way to manage his officer reinforces the manipulation the court asked treatment to address', ['wants Reyes “off my back”'], 'Building treatment around the client’s strategy for avoiding accountability'),
      O('c', 'Complete probation with no violations and qualify for supervised visits, using anger and impulse-control skills.', 3,
        'Concrete, motivation-linked goal', 'Use self-interest', 'Antisocial clients engage best with concrete goals tied to their own interests; linking skills to visits and freedom makes them relevant', ['wants to see his son', 'custody mediation in five weeks'], 'Ignoring the client’s motivation in favor of abstract goals'),
      O('d', 'Attend all 26 court-ordered sessions on time, since attendance is the measure the court and probation will track.', 0,
        'Measurable but superficial', 'Compliance goal', 'Attendance is necessary but measures presence, not change in the behaviors that led to the conviction', ['court order'], 'Confusing compliance with treatment progress'),
    ]),
    // ---------------- session2 (5) ----------------
    Q('q9', 'legal', 'session2', 'After Garrett leaves session 7, what is the counselor’s most appropriate action?', ['R3', 'R2'], [
      O('a', 'Take protective action today as the state statute directs, such as notifying police and warning Josh.', 3,
        'Act on duty to warn/protect', 'Follow the statute', 'He named an identifiable victim, a place, a time, and a weapon in his possession; that meets the threshold for the protective actions the statute requires or permits', ['“Saturday this gets settled”', 'rifle in his truck', 'Josh at the feed-store lot'], 'Treating a retraction as erasing a serious, specific threat'),
      O('b', 'Notify Officer Reyes today about the threat and the rifle, and let probation decide what steps to take.', 0,
        'Protective but may not satisfy the statute', 'Report to probation', 'Probation may act on the firearm, but the statute typically specifies warning the victim and/or law enforcement; relying on probation alone may not discharge the duty', ['firearm violates probation'], 'Assuming notifying a probation officer fulfills a duty to warn'),
      O('c', 'Call Garrett this evening and ask him to promise he will stay away from Josh until their next session.', -1,
        'Relies on a promise', 'Verbal contract', 'A promise from someone with a specific plan and a weapon offers no protection and delays required action', ['history of deceit', 'plan for Saturday'], 'Substituting a client promise for protective action'),
      O('d', 'Explore the threat at the next session, since he retracted it and said he was only venting about the hearing.', -2,
        'Fails to protect', 'Accept retraction', 'Waiting past Saturday with a named victim, weapon, and timeline is a dangerous failure of the duty to protect', ['“forget I said that”', 'Saturday timeline'], 'Accepting a retraction of a specific threat at face value'),
    ]),
    Q('q10', 'interventions', 'session2', 'As Garrett paces between the counselor and the door with fists clenched, what should she do first?', ['R5', 'R2'], [
      O('a', 'Firmly tell him to sit down and lower his voice, or the session will end and his probation officer will be called.', -2,
        'Escalating ultimatum', 'Command and threaten', 'Commands and threats raise arousal in an agitated client blocking the exit and increase the risk of violence', ['blocking the door', 'clenched fists'], 'Using authority and threats with an escalating client'),
      O('b', 'Speak calmly, acknowledge his anger, give him space, and use the center’s safety procedure to get help.', 3,
        'De-escalate and protect safety', 'Verbal de-escalation', 'A calm voice, validation, space, and activating safety procedures lower arousal while protecting the counselor’s exit', ['voice rising', 'between her and the door'], 'Prioritizing the session over immediate safety'),
      O('c', 'Ask him questions about the protective order hearing to keep him talking until his anger has run its course.', 0,
        'Engages but may fuel anger', 'Keep him talking', 'Talking can help, but focusing on the trigger without validating or attending to safety may escalate him further', ['protective order is the trigger'], 'Exploring the trigger before safety is secured'),
      O('d', 'Point out that this behavior is exactly the pattern that led to his assault charge, so he can see it happening.', -1,
        'Interpretation during escalation', 'Insight in the moment', 'Interpretations land as criticism when a client is agitated and can provoke him', ['active agitation'], 'Attempting insight work during a crisis'),
    ]),
    Q('q11', 'interventions', 'session2', 'If treatment continues after the safety response, which approach best fits Garrett?', ['R5'], [
      O('a', 'Nondirective, person-centered counseling, trusting that a warm relationship will gradually reduce his aggression.', -1,
        'Poor fit for antisocial patterns', 'Unstructured warmth', 'Unstructured approaches give little leverage on antisocial behavior and can be exploited', ['history of manipulation'], 'Assuming warmth alone changes antisocial behavior'),
      O('b', 'Insight-oriented exploration of his childhood, since understanding the origin of his anger will reduce it over time.', 0,
        'Possibly useful, low evidence', 'Insight focus', 'History may add context, but structured skill-based work has more support for reducing aggression and offending', ['impulsivity', 'repeated offenses'], 'Prioritizing insight over structured behavioral change'),
      O('c', 'A couples session with Kayla to resolve the custody conflict directly, since that is what is driving his anger.', -2,
        'Unsafe and inappropriate', 'Conjoint session', 'Bringing together a client who just threatened violence and an ex-partner seeking a protective order endangers her', ['protective order filed', 'recent threat'], 'Using conjoint work where there is a risk of violence'),
      O('d', 'Structured CBT targeting anger and antisocial thinking, tied to his goals of avoiding prison and seeing his son.', 3,
        'Structured, consequence-linked CBT', 'Cognitive-behavioral', 'Structured CBT addressing anger and criminal thinking, linked to self-interested goals, best fits antisocial presentations', ['wants to see his son', 'impulsive aggression'], 'Choosing unstructured or insight-only approaches'),
    ]),
    Q('q12', 'legal', 'session2', 'How should the counselor document session 7 and her response to it?', ['R4', 'R3'], [
      O('a', 'Record only that the session ended early, since detailed notes about the threat could be used against Garrett.', -2,
        'Inadequate, risky documentation', 'Minimize the record', 'Omitting a threat and the response leaves no record of the risk assessment or duty-to-protect actions, harming client, victim, and counselor', ['specific threat', 'protective actions taken'], 'Leaving risk events out of the record to protect the client'),
      O('b', 'Wait until the situation resolves, then write a full summary once the outcome of Monday’s hearing is known.', -1,
        'Not contemporaneous', 'Delay the note', 'Risk documentation should be written promptly; delayed notes are less accurate and less defensible', ['events of session 7'], 'Delaying documentation of a high-risk event'),
      O('c', 'Promptly record his exact words, the risk assessment, consultation, and each protective step, with times.', 3,
        'Contemporaneous, specific record', 'Document the decision', 'A prompt, factual record of quotes, assessment, consultation, and actions supports continuity of care and shows the duty was met', ['“nobody is going to miss him”', 'rifle in truck'], 'Writing vague or delayed notes after a duty-to-warn event'),
      O('d', 'Write a brief summary of the threat in the chart and keep a separate detailed account in her personal files.', 0,
        'Splits the record improperly', 'Shadow file', 'Keeping clinical details outside the official, secure record undermines record integrity and security', ['secure records requirement'], 'Keeping a shadow record outside the clinical file'),
    ]),
    Q('q13', 'legal', 'session2', 'How should the counselor respond to the county prosecutor’s subpoena for Garrett’s complete record?', ['R6', 'R3'], [
      O('a', 'Respond in time but release nothing until she consults counsel and has his authorization or a court order.', 3,
        'Respond without automatic release', 'Subpoena procedure', 'A subpoena is not a court order; she responds on time, consults legal counsel, notifies the client, and discloses only with authorization or an order', ['subpoena from prosecutor', 'no client authorization'], 'Treating a subpoena as an order to release records'),
      O('b', 'Send the full record promptly, since a subpoena is a legal order and refusing could place her in contempt.', -2,
        'Unauthorized release', 'Comply automatically', 'Releasing records on a subpoena alone, without authorization or a court order, can violate privilege and privacy law', ['complete record requested'], 'Confusing a subpoena with a court order'),
      O('c', 'Ignore the subpoena, since counseling records are privileged and the prosecutor has no right to request them.', -1,
        'Ignores legal process', 'Privilege assumption', 'Privilege must be asserted properly; ignoring a subpoena can expose the counselor to sanctions', ['legal deadline'], 'Assuming privilege means a subpoena can be ignored'),
      O('d', 'Send only the duty-to-warn documentation, since that is the part of the record most relevant to the charge.', 0,
        'Self-selected disclosure', 'Partial release', 'Limiting the scope is better than full release, but she still needs authorization or an order before releasing anything', ['minimum necessary'], 'Deciding unilaterally which records to release on a subpoena'),
    ]),
  ],
};

// ============================================================================
// D943 — A software tester who turned down team lead twice (plan 3)
// Easy: one clear presentation, textbook differential (social anxiety disorder),
// no comorbidity, no medical rule-out, unambiguous safety picture.
// ============================================================================
const D943 = {
  id: 'ncmhce-D943',
  title: 'A software tester turns down team lead a second time, sure they will find out he is not good enough',
  category: 'Personality',
  difficulty: 'easy',
  plan: 3,
  population: 'adult',
  primaryDiagnosis: { name: 'Avoidant Personality Disorder', code: 'F60.6' },
  diagnosis: { name: 'Avoidant Personality Disorder', code: 'F60.6' },
  differentialOptions: [
    { id: 'do1', name: 'Social Anxiety Disorder', isCorrect: false },
    { id: 'do2', name: 'Schizoid Personality Disorder', isCorrect: false },
    { id: 'do3', name: 'Avoidant Personality Disorder', isCorrect: true },
    { id: 'do4', name: 'Autism Spectrum Disorder', isCorrect: false },
  ],
  narrative: {
    intake:
      'Daniel Kahananui, a 29-year-old Native Hawaiian software quality-assurance tester who grew up in Hilo and moved to Portland, Oregon, for college, ' +
      'self-refers to an outpatient counseling practice after declining a promotion to QA team lead for the second time. The role would require ' +
      'leading daily stand-up meetings and mentoring two junior testers; his manager has told him a third refusal may stall his career. Since middle ' +
      'school he has avoided group projects, team sports, and parties, believing others will “figure out I am boring and not good enough.” He has one ' +
      'close friend he games with online, talks with his parents and sister in Hilo weekly, and very much wants a partner and more friends, but has ' +
      'never asked anyone out because he could not be sure they would say yes. He chose testing because he can work alone, stays silent in meetings ' +
      'unless he is certain he is right, replays any critical comment for days, and rarely tries new activities “in case I embarrass myself.” He reads ' +
      'social cues well and says he “understands people fine — I just assume they will not like me.” He sleeps and eats normally, denies substance ' +
      'use, trauma, or suicidal thoughts, and has no medical conditions. The counselor plans to give a structured clinical interview for personality ' +
      'disorders she has read about but never been trained to administer. During intake she notices she keeps filling Daniel’s long pauses by ' +
      'finishing his sentences for him.',
    session1:
      'Baseline measures show a PHQ-9 of 3 (minimal) and a markedly elevated score on a social anxiety self-report scale; the counselor reviews the ' +
      'results with Daniel, who says they “make sense.” He agrees to cognitive-behavioral counseling. His goals are “to be able to say yes to team ' +
      'lead within six months” and “to have one more real friend.” The practice runs no groups, but a nearby university training clinic offers a ' +
      '12-week CBT interpersonal-skills group with an opening in four weeks; it requires a referral and a pre-group screening interview. Daniel says ' +
      'the idea of a group “makes my stomach drop,” but he is curious and agrees to a referral. He signs a release for the group facilitator.',
    session2:
      'By session 8, Daniel has started the group and attended two meetings without speaking. He reports skipping his planned comment at stand-up ' +
      'because “they will realize I am a fraud.” Near the end of the session, looking down, he says, “You are probably tired of me not doing my ' +
      'homework.” The practice has just adopted an AI note-taking tool that records sessions to draft notes, and the counselor’s original consent form ' +
      'did not mention it; Daniel looks uneasy when she brings it up. He also asks whether his insurer will see “personality disorder” on claims, ' +
      'because he may apply to a team that needs a security clearance.',
  },
  diagnosticRationale:
    'Since adolescence Daniel has shown a pervasive pattern of social inhibition, feelings of inadequacy, and hypersensitivity to negative ' +
    'evaluation: he avoids occupational activities involving interpersonal contact (declining team lead), is unwilling to get involved with people ' +
    'unless certain of being liked, is preoccupied with criticism, sees himself as socially inept and unappealing, and avoids new activities for ' +
    'fear of embarrassment. This meets Avoidant Personality Disorder criteria. Unlike social anxiety disorder alone, the avoidance reflects a ' +
    'pervasive, identity-level sense of inadequacy across relationships and life choices. He wants relationships (unlike schizoid personality ' +
    'disorder) and reads social cues well (no indication of autism spectrum disorder).',
  references: [
    { id: 'R1', source: 'DSM-5-TR', detail: 'Avoidant personality disorder: pervasive social inhibition, feelings of inadequacy, hypersensitivity to negative evaluation (4 of 7 criteria); overlap with and differentiation from social anxiety disorder' },
    { id: 'R2', source: 'Hays (Assessment)', detail: 'Counselor competence to administer and interpret instruments; reviewing assessment results with clients' },
    { id: 'R3', source: 'Corey (Theory & Practice)', detail: 'Cognitive restructuring, graded exposure and behavioral experiments, here-and-now processing of the therapeutic relationship, group preparation' },
    { id: 'R4', source: 'Wiger (Documentation)', detail: 'Progress notes that link interventions and client response to treatment-plan objectives' },
    { id: 'R5', source: 'ACA Code of Ethics', detail: 'Competence in assessment; informed consent for technology and recording; screening and preparing clients for group work; counselor self-awareness' },
    { id: 'R6', source: 'HIPAA', detail: 'Information included on insurance claims; right to pay out of pocket and restrict disclosure to a health plan' },
  ],
  questions: [
    // ---------------- intake (4) ----------------
    Q('q1', 'profdev', 'intake', 'What should the counselor do about the structured personality-disorder interview she has never been trained to give?', ['R2', 'R5'], [
      O('a', 'Give the interview anyway, following the manual closely, since reading about it is enough preparation for a licensed counselor.', -2,
        'Practicing beyond competence', 'Administer without training', 'Structured diagnostic interviews require training to administer and interpret validly; untrained use risks invalid results', ['never trained', 'personality diagnosis'], 'Assuming a license confers competence with every instrument'),
      O('b', 'Use a free online personality quiz instead, since it covers similar traits and requires no special training to score.', -1,
        'Unvalidated tool', 'Informal substitute', 'Unvalidated online quizzes do not support clinical diagnosis and may mislead the client', ['need for valid assessment'], 'Replacing a validated tool with an unvalidated one'),
      O('c', 'Obtain training and supervised practice before using it, relying meanwhile on a careful clinical interview.', 3,
        'Build competence before use', 'Assessment competence', 'Counselors use only instruments they are trained to administer and interpret, and seek training and supervision before adding new ones', ['read about but never trained'], 'Using an instrument before becoming competent with it'),
      O('d', 'Skip structured measures entirely and base the diagnosis only on her overall impression from the first session.', 0,
        'Avoids misuse, loses rigor', 'Impression only', 'Avoiding untrained use is right, but a thorough clinical interview and appropriate screening measures should still inform the diagnosis', ['clear but complex pattern'], 'Abandoning structured assessment rather than using tools within competence'),
    ]),
    Q('q2', 'assess', 'intake', 'Which finding best supports avoidant personality disorder over social anxiety disorder alone?', ['R1'], [
      O('a', 'A pervasive sense of being inadequate shapes his job, friendships, and dating, not only specific social situations.', 3,
        'Pervasive, identity-level inadequacy', 'Apply the discriminator', 'Both involve fear of evaluation; avoidant personality disorder is marked by a pervasive self-concept of inadequacy that shapes life choices across domains', ['chose solitary work', 'never asked anyone out', '“not good enough”'], 'Diagnosing from situational fear without the pervasive self-concept'),
      O('b', 'He feels anxious when speaking in meetings, which shows his fear is limited to performance situations at work.', -2,
        'Misreads the pattern', 'Performance-only framing', 'His avoidance extends well beyond performance situations to friendships and dating; a performance-only view misses the pattern', ['avoids parties and dating'], 'Narrowing a pervasive pattern to one situation'),
      O('c', 'He has one close online friend, which shows he can form relationships and rules out a personality disorder.', -1,
        'One relationship does not rule out', 'Exception framing', 'Having a single safe relationship is common in avoidant personality disorder and does not exclude it', ['one gaming friend'], 'Treating any relationship as evidence against the diagnosis'),
      O('d', 'His symptoms began in middle school, which is also a typical age of onset for social anxiety disorder in many people.', 0,
        'True but not discriminating', 'Onset framing', 'Early onset fits both conditions, so it does not distinguish them', ['onset in middle school'], 'Using a shared feature as a discriminator'),
    ]),
    Q('q3', 'profdev', 'intake', 'What does the counselor’s habit of finishing Daniel’s sentences during pauses call for?', ['R5', 'R3'], [
      O('a', 'Nothing, since filling silences helps an anxious client avoid embarrassment and keeps the intake moving.', -1,
        'Misses the impact', 'Rescue framing', 'Rescuing him from pauses reinforces his belief that he cannot manage social moments and limits what he can say himself', ['long pauses', 'fear of embarrassment'], 'Assuming rescuing an anxious client is supportive'),
      O('b', 'Reflect on her own discomfort with silence, then practice allowing pauses so Daniel can finish his thoughts.', 3,
        'Self-reflection and adjustment', 'Examine her reaction', 'Noticing that the pattern serves her own discomfort lets her tolerate silence and give him room to speak', ['finishing his sentences'], 'Ignoring how counselor anxiety shapes the session'),
      O('c', 'Tell Daniel directly that his slow responses are making the session hard and ask him to answer more quickly.', -2,
        'Shaming and counter-therapeutic', 'Correct the client', 'Criticizing his pace confirms his fear of negative evaluation and can damage the alliance at intake', ['hypersensitive to criticism'], 'Placing the counselor’s discomfort on the client'),
      O('d', 'Shorten the intake questions to yes-or-no items, so there are fewer pauses for her to feel she must fill.', 0,
        'Workaround that limits data', 'Change the format', 'Closed questions reduce pauses but also limit his voice and leave her reaction unexamined', ['rich history needed'], 'Changing technique instead of examining the reaction'),
    ]),
    Q('q4', 'assess', 'intake', 'Which screening step best supports Daniel’s assessment and treatment planning?', ['R2'], [
      O('a', 'Give a full personality inventory and share only the overall profile, since detailed feedback could upset him.', -1,
        'Withholds results', 'Limited feedback', 'Clients are entitled to understandable feedback; withholding results is paternalistic', ['sensitive to evaluation'], 'Avoiding feedback to protect a sensitive client'),
      O('b', 'Skip standardized measures, since his history already makes the diagnosis clear and testing may feel like judgment.', 0,
        'Loses a baseline', 'Interview only', 'The history is clear, but brief measures give a baseline for tracking change and screen for co-occurring depression', ['treatment progress needs tracking'], 'Skipping baseline measures when the diagnosis seems obvious'),
      O('c', 'Ask his manager to complete a rating of his workplace social behavior to confirm what he has described.', -2,
        'Unauthorized collateral contact', 'Employer report', 'Contacting his employer without consent breaches confidentiality and could harm his job', ['self-referred', 'no release for employer'], 'Seeking collateral from an employer without consent'),
      O('d', 'Give brief validated measures of social anxiety and depression, then review the results with him together.', 3,
        'Baseline and collaborative feedback', 'Screen and discuss', 'Brief validated measures establish a baseline, screen for co-occurring depression, and are reviewed with the client collaboratively', ['need for baseline', 'possible low mood from isolation'], 'Testing without sharing results or skipping a baseline'),
    ]),
    // ---------------- session1 (4) ----------------
    Q('q5', 'planning', 'session1', 'Which objective best meets SMART standards for Daniel’s goal of saying yes to team lead?', ['R3'], [
      O('a', 'By week 8, comment at least once in three of five weekly stand-ups, tracked in a brief log reviewed in session.', 3,
        'Specific, measurable, graded', 'SMART objective', 'The objective names a behavior, frequency, timeframe, and tracking method, and is a graded step toward the role', ['team lead requires stand-ups', 'silent in meetings'], 'Writing goals that cannot be observed or measured'),
      O('b', 'Feel confident enough in his abilities to accept the team-lead promotion the next time his manager offers it.', -1,
        'Feeling-based, not measurable', 'Global goal', 'Confidence is a hoped-for outcome, not a behavior with a measure or timeframe', ['stated goal'], 'Confusing a feeling with an objective'),
      O('c', 'Accept the team-lead role within the next two weeks, since immediate full exposure produces the fastest change.', -2,
        'Unrealistic, flooding', 'Immediate exposure', 'Jumping straight to the most feared step without preparation is unrealistic and risks failure that confirms his fears', ['two refusals', 'severe avoidance'], 'Setting an unattainable first objective'),
      O('d', 'Attend weekly counseling sessions for the next six months and complete the assigned CBT worksheets each week.', 0,
        'Measurable process, not outcome', 'Attendance objective', 'Attendance and homework are measurable but track participation, not the behavior change he wants', ['goal: say yes to team lead'], 'Using participation as the treatment objective'),
    ]),
    Q('q6', 'indirect', 'session1', 'With Daniel’s release signed, what should the counselor do to support the group referral?', ['R5', 'R3'], [
      O('a', 'Send the facilitator his full record, so the group leader knows everything before the screening interview.', -1,
        'More than is needed', 'Full disclosure', 'Even with a release, sharing should be limited to what the facilitator needs for screening and coordination', ['minimum necessary'], 'Equating a release with permission to send everything'),
      O('b', 'Leave all coordination to Daniel, since contacting the facilitator may make him feel talked about behind his back.', 0,
        'Respects autonomy, misses support', 'Client-only contact', 'His autonomy matters, but with a release, brief coordination helps a highly avoidant client follow through', ['avoidance of new situations'], 'Under-supporting a referral for an avoidant client'),
      O('c', 'Share relevant goals and concerns with the facilitator and help Daniel prepare for the pre-group interview.', 3,
        'Coordinated, prepared referral', 'Collaborate with provider', 'Coordinating within the release and preparing him for screening improves group fit and lowers early dropout', ['release for facilitator', 'pre-group screening'], 'Making a referral without coordination or preparation'),
      O('d', 'Tell the facilitator Daniel will probably drop out quickly, so the group can hold a waitlisted spot in reserve.', -2,
        'Undermines the referral', 'Predict failure', 'Predicting dropout biases the facilitator and can become self-fulfilling for a client sensitive to judgment', ['sensitivity to evaluation'], 'Sharing pessimistic predictions that undermine treatment'),
    ]),
    Q('q7', 'planning', 'session1', 'How should the counselor plan the timing of group work alongside individual counseling?', ['R3'], [
      O('a', 'Hold the group referral until he has finished all individual sessions, so he enters the group fully recovered.', -1,
        'Delays a useful modality', 'Sequential only', 'Waiting for full recovery misses the benefit of practicing skills in a group and the available opening', ['opening in four weeks'], 'Treating group as a reward for finishing individual work'),
      O('b', 'Replace individual counseling with the group, since group work is the treatment of choice for this diagnosis.', -2,
        'Drops needed support', 'Group-only', 'Ending individual support just as he enters a feared setting increases the risk of dropout and loses an essential source of support', ['group “makes my stomach drop”'], 'Abruptly substituting one modality for another'),
      O('c', 'Ask him to decide on his own whether to join, since group participation must come entirely from his own initiative.', 0,
        'Respects choice, lacks guidance', 'Client decides alone', 'Choice is his, but the counselor should guide timing and preparation for a client whose avoidance drives decisions', ['avoidant decision-making'], 'Leaving an avoidant client to decide without support'),
      O('d', 'Continue individual CBT and use the four weeks before the group to rehearse what he might say in it.', 3,
        'Concurrent care with preparation', 'Prepare and combine', 'Combining individual and group work, with rehearsal beforehand, lets him practice skills in both settings while lowering anticipatory anxiety', ['opening in four weeks', 'curious but anxious'], 'Ignoring preparation before a feared group setting'),
    ]),
    Q('q8', 'indirect', 'session1', 'Which progress note entry best documents session 1?', ['R4'], [
      O('a', '“Client anxious and avoidant as expected. Talked about the group and goals. Will continue to see weekly.”', -1,
        'Vague and unlinked', 'Minimal note', 'The note lacks specific data, interventions, client response, and links to the plan', ['results reviewed', 'referral made'], 'Writing notes that do not show what was done or why'),
      O('b', '“Reviewed PHQ-9 (3) and social anxiety scores; set stand-up objective; made group referral with release.”', 3,
        'Specific and linked to plan', 'Data-based note', 'The entry records results, interventions, and actions tied to treatment objectives, supporting continuity and review', ['measures reviewed', 'objective set', 'release signed'], 'Leaving out the data and actions that justify care'),
      O('c', '“Client is an avoidant personality and will likely struggle in group. Recommend he be pushed hard to speak.”', -2,
        'Labeling and prejudicial', 'Label and predict', 'Labeling the person and predicting failure is unprofessional and can bias future providers', ['diagnosis not the person'], 'Recording judgments rather than observations'),
      O('d', '“Session focused on assessment feedback and goals. Client agreed to a group referral. Plan to follow up next week.”', 0,
        'Accurate but thin', 'Summary note', 'The note is accurate but omits scores, the specific objective, and the release, which make it useful', ['specific data available'], 'Writing an accurate but under-specified note'),
    ]),
    // ---------------- session2 (5) ----------------
    Q('q9', 'interventions', 'session2', 'Daniel skipped his stand-up comment because “they will realize I am a fraud.” Which intervention fits best?', ['R3'], [
      O('a', 'Reassure him that he is clearly competent at his job and that his coworkers would not think of him as a fraud.', -1,
        'Reassurance, not restructuring', 'Reassure', 'Reassurance gives brief relief but leaves the belief untested, and he can easily discount it', ['“I am a fraud”'], 'Using reassurance in place of cognitive work'),
      O('b', 'Explore what being seen as a fraud would mean about him, then wait for him to decide when he feels ready to try.', 0,
        'Useful exploration, no action', 'Explore only', 'Exploring the belief is useful, but without a test it is likely to keep the avoidance going', ['skipped planned comment'], 'Stopping at exploration without a behavioral test'),
      O('c', 'Examine the evidence for the thought with him and plan a small behavioral experiment for the next stand-up.', 3,
        'Cognitive restructuring plus experiment', 'Test the belief', 'Examining the evidence and testing the prediction directly is the core CBT method for beliefs that maintain avoidance', ['predicted outcome', 'skipped comment'], 'Challenging thoughts verbally without testing them in action'),
      O('d', 'Suggest he ask his manager to let him skip stand-ups until the group has helped him feel more comfortable.', -2,
        'Reinforces avoidance', 'Accommodate avoidance', 'Formal accommodation of avoidance strengthens it and undermines his stated goal', ['goal: team lead'], 'Accommodating avoidance instead of approaching feared situations'),
    ]),
    Q('q10', 'interventions', 'session2', 'Daniel has attended two group meetings without speaking. How should the counselor help him with the group?', ['R3'], [
      O('a', 'Plan a small first step with him, such as sharing one sentence at the next meeting, and rehearse it in session.', 3,
        'Graded exposure in group', 'Small rehearsed step', 'A small, rehearsed step makes the first contribution manageable and builds on the exposure the group provides', ['silent two meetings'], 'Expecting full participation without graded steps'),
      O('b', 'Encourage him to leave the group, since it is clearly too much right now and is making his anxiety worse.', -2,
        'Rescues from exposure', 'Withdraw', 'Silence early in group is expected; pulling him out reinforces avoidance and loses the group’s benefit', ['only two meetings'], 'Treating early silence as treatment failure'),
      O('c', 'Ask the facilitator to call on him directly at the next meeting, so he has no choice but to speak up.', -1,
        'Forced exposure', 'Pressure', 'Being singled out without his agreement may feel humiliating and confirm his fears', ['fear of embarrassment'], 'Forcing exposure without collaboration'),
      O('d', 'Let him take part in the group silently for as long as he needs to, since listening is a form of participation too.', 0,
        'Patient, but passive', 'Wait it out', 'Patience is fine early on, but without a plan the silence can become another form of avoidance', ['pattern of avoidance'], 'Allowing avoidance to continue without a plan'),
    ]),
    Q('q11', 'interventions', 'session2', 'Looking down, Daniel says, “You are probably tired of me not doing my homework.” What is the best response?', ['R3'], [
      O('a', 'Assure him quickly that she is not tired of him at all and that everyone struggles with homework now and then.', 0,
        'Kind, but closes the moment', 'Reassure', 'Reassurance is kind but misses a chance to explore his prediction about how others see him as it happens', ['looking down', 'expects disappointment'], 'Reassuring instead of exploring a live example'),
      O('b', 'Gently explore what he imagines she is feeling, and compare that with what is actually happening between them.', 3,
        'Here-and-now processing', 'Use the relationship', 'His fear of disappointing her is a live example of his core belief; exploring it in the moment lets him test it safely', ['“You are probably tired of me”'], 'Missing in-session examples of the client’s relational pattern'),
      O('c', 'Agree that the homework needs to get done and set firmer consequences if the assignments are skipped again next week.', -2,
        'Confirms his fear', 'Firm limits', 'Responding with consequences confirms his belief that others will judge and reject him', ['hypersensitive to criticism'], 'Responding to a vulnerable disclosure with criticism'),
      O('d', 'Move straight back to the homework plan, since discussing the relationship could make him more self-conscious.', -1,
        'Avoids the relational moment', 'Stay on task', 'Redirecting misses an important opportunity and models avoidance of interpersonal discomfort', ['relational disclosure'], 'Avoiding here-and-now discussion with an avoidant client'),
    ]),
    Q('q12', 'legal', 'session2', 'How should the counselor handle the practice’s new AI note-taking tool with Daniel?', ['R5'], [
      O('a', 'Begin using it, since the practice adopted it and notes are confidential whether a person or a tool drafts them.', -2,
        'No informed consent', 'Assume consent', 'Recording sessions with an AI tool requires informed consent; his original consent did not cover it', ['consent form did not mention it', 'he looks uneasy'], 'Using new technology without updated consent'),
      O('b', 'Use the tool only for the first half of each session, so most of what he says is still not recorded.', -1,
        'Partial use without consent', 'Compromise', 'Partial recording still requires consent and does not resolve his discomfort', ['uneasy response'], 'Treating partial use as a substitute for consent'),
      O('c', 'Mention the tool briefly and ask for a quick verbal okay today, adding a written consent form later.', 0,
        'Consent, but not fully informed', 'Quick verbal consent', 'Asking first is right, but a brief mention skips how the tool records and stores data and that he can decline, which his unease calls for', ['he looks uneasy', 'data handling unexplained'], 'Treating a quick yes as informed consent'),
      O('d', 'Explain how it works and stores data, get written consent first, and offer care without it if he declines.', 3,
        'Informed, voluntary consent', 'Consent before use', 'Clients must understand AI tools and data handling and can decline without losing services', ['new AI tool', 'uneasy'], 'Making services depend on accepting a technology'),
    ]),
    Q('q13', 'legal', 'session2', 'How should the counselor answer Daniel’s question about whether his insurer will see “personality disorder”?', ['R6', 'R5'], [
      O('a', 'Bill using an adjustment disorder code instead, since it is less stigmatizing and still covers his sessions.', -2,
        'Billing fraud', 'Change the code', 'Submitting a diagnosis that does not fit is fraudulent, regardless of the motive', ['diagnosis documented'], 'Altering a diagnosis to protect a client'),
      O('b', 'Tell him not to worry, since insurers do not share claim information with employers or security investigators.', -1,
        'Inaccurate assurance', 'Reassure', 'Overpromising misinforms him; he should understand what claims contain and his options', ['clearance question'], 'Giving absolute reassurance about disclosure'),
      O('c', 'Explain that claims include his diagnosis and that he may choose to pay out of pocket to keep it off claims.', 3,
        'Accurate information and options', 'Inform and offer choice', 'Clients should know what claims disclose and that self-pay lets them restrict information sent to the health plan', ['clearance concern', 'claims include diagnosis'], 'Misinforming clients or altering a diagnosis'),
      O('d', 'Suggest he ask his insurer what claims contain, since billing details are outside what counselors should discuss.', 0,
        'Deflects a fair question', 'Refer to insurer', 'Checking with the insurer is reasonable, but counselors should explain what they submit on claims and the client’s options as part of informed consent', ['claims include diagnosis', 'informed consent about billing'], 'Treating billing disclosures as outside the counselor’s role'),
    ]),
  ],
};

// ============================================================================
// D944 — A widow who has never paid a bill alone (plan 4)
// Medium: a differential needing a discriminator (lifelong dependence vs. normal
// grief, with cultural norms of family interdependence) and a sequencing decision
// (safety and lethal means before skill building, with adult children pulling two ways).
// ============================================================================
const D944 = {
  id: 'ncmhce-D944',
  title: 'Widowed after 49 years, a retired hospital clerk calls her daughter fifteen times a day to decide',
  category: 'Personality',
  difficulty: 'medium',
  plan: 4,
  population: 'older_adult',
  primaryDiagnosis: { name: 'Dependent Personality Disorder', code: 'F60.7' },
  diagnosis: { name: 'Dependent Personality Disorder', code: 'F60.7' },
  differentialOptions: [
    { id: 'do1', name: 'Prolonged Grief Disorder', isCorrect: false },
    { id: 'do2', name: 'Dependent Personality Disorder', isCorrect: true },
    { id: 'do3', name: 'Major Depressive Disorder, Single Episode, Moderate', isCorrect: false },
    { id: 'do4', name: 'Mild Neurocognitive Disorder', isCorrect: false },
  ],
  narrative: {
    intake:
      'Corazon “Cora” Dimaculangan, a 72-year-old Filipina American retired hospital unit clerk in Chula Vista, California, is referred by her primary ' +
      'care physician four months after her husband of 49 years, Ernesto, died of heart failure in home hospice. She moved from her parents’ home to ' +
      'her marriage at 22; Ernesto handled all finances, driving, and household decisions, and before him her father and older sister did. She and ' +
      'her daughter both describe a lifelong pattern: she has never paid a bill or chosen a major purchase alone, phones someone before deciding ' +
      'what to cook or wear to Mass, agrees with plans she privately dislikes so no one is displeased, and once volunteered for years of her sister’s ' +
      'unpleasant errands “so she would keep helping me.” She now calls her daughter Marisol, 44, a nurse, 10 to 15 times a day about which bill to ' +
      'pay or whether to answer the door. Her son Jun, 48, in Phoenix, wants her to sell the house and move in with him; she says, “Whatever Jun ' +
      'thinks.” She cries daily, talks about Ernesto often, and sleeps poorly, but still attends Mass, enjoys her grandchildren, eats normally, and ' +
      'manages her own medications without errors. Near the end she says quietly, “I do not know how to live without him. Maybe God should take me ' +
      'too.” The counselor, whose own mother died eight months ago, notices tears in her own eyes when Cora describes the hospice bed. Later she ' +
      'catches herself writing “goal: full independence” before asking what Cora wants.',
    session1:
      'A structured suicide screen finds a passive wish to be with Ernesto, with no intent, plan, preparatory behavior, or past attempts. Ernesto’s ' +
      'leftover hospice morphine and his heart medications are still in her kitchen cabinet. Cora says she wants “to stop bothering Marisol so much” ' +
      'and “to learn the bills before Jun decides everything for me.” Her physician, Dr. Nguyen, started zolpidem 5 mg for sleep three weeks ago; ' +
      'Cora says it makes her “wobbly” at night and she has gotten up dizzy twice. With Cora’s consent Marisol joins part of the session and admits ' +
      'she is exhausted and has started simply making decisions for her mother “to save time,” while Jun, by phone, keeps raising the house sale. ' +
      'Cora signs releases for Dr. Nguyen and for Marisol.',
    session2:
      'By session 6, Cora has paid the electric bill herself after Marisol walked her through it, and calls Marisol about five times a day. She says, ' +
      '“Jun says I should sell. You are the expert — just tell me what to do,” and describes agreeing on the phone to list the house, though she wants ' +
      'to stay near her parish and Ernesto’s grave. Tearfully she asks if it is “crazy” that she talks to Ernesto’s photo each night. That week Jun ' +
      'calls the counselor, says he holds his mother’s durable financial power of attorney, and demands to know what she has said about the house ' +
      'and to join the next session. Cora has signed no release for Jun. The same week, a wildfire evacuation order closes the counselor’s office ' +
      'for an unknown period; Cora is staying with Marisol ten miles away.',
  },
  diagnosticRationale:
    'Cora shows a pervasive, lifelong need to be taken care of that long predates Ernesto’s death: difficulty making everyday decisions without ' +
    'excessive reassurance, needing others to assume responsibility for major areas of life, difficulty expressing disagreement for fear of losing ' +
    'support, going to excessive lengths to obtain support (years of her sister’s errands), and urgently seeking a new source of care when a close ' +
    'relationship ends (Marisol, Jun). That meets five or more Dependent Personality Disorder criteria. Her grief is normal at four months, and ' +
    'prolonged grief disorder requires at least 12 months after the loss in adults. She keeps interest, appetite, and social engagement, so a major ' +
    'depressive episode is not supported, and she manages her own medications accurately with no cognitive decline reported. Family ' +
    'interdependence can be culturally normative, so the diagnosis rests on the degree, rigidity, and lifelong impairment of the pattern rather ' +
    'than on reliance on family alone.',
  references: [
    { id: 'R1', source: 'DSM-5-TR', detail: 'Dependent personality disorder (5 of 8 criteria), cultural considerations for dependent behavior; prolonged grief disorder 12-month duration in adults; normal bereavement' },
    { id: 'R2', source: 'C-SSRS', detail: 'Screening passive and active suicidal ideation, intent, plan, and behavior in a bereaved older adult' },
    { id: 'R3', source: 'Stanley-Brown SPI', detail: 'Collaborative safety planning including making the environment safer (lethal means: disposing of leftover opioids and medications)' },
    { id: 'R4', source: 'ACA Code of Ethics', detail: 'Counselor values and self-awareness, multicultural competence, impaired functioning and self-care, confidentiality with family, and preparing for interruptions in services' },
    { id: 'R5', source: 'Corey (Theory & Practice)', detail: 'Problem-solving and graded skill building, assertiveness training and role-play, grief work and continuing bonds, fostering client autonomy' },
    { id: 'R6', source: 'HIPAA', detail: 'Personal representatives: a financial power of attorney does not grant access to a competent adult’s health information; authorization required' },
    { id: 'R7', source: 'NBCC Code of Ethics', detail: 'Emergency and continuity planning, telehealth informed consent and verification of client location' },
  ],
  questions: [
    // ---------------- intake (4) ----------------
    Q('q1', 'assess', 'intake', 'Which finding best supports the given dependent personality disorder diagnosis rather than a grief reaction alone?', ['R1'], [
      O('a', 'Her daily crying and poor sleep since Ernesto’s death show a lasting change that goes well beyond normal grief.', -1,
        'Normal grief symptoms', 'Symptom framing', 'Crying and poor sleep at four months fit normal bereavement and say nothing about a lifelong personality pattern', ['four months since death'], 'Pathologizing expected grief symptoms'),
      O('b', 'She has relied on others for decisions and avoided disagreeing since young adulthood, long before Ernesto died.', 3,
        'Pervasive, long-standing pattern', 'Apply the discriminator', 'A personality disorder requires an enduring pattern from early adulthood; her dependence predates the loss by decades and is confirmed by her daughter', ['father, sister, then Ernesto decided', 'never paid a bill alone'], 'Attributing a lifelong pattern to the recent loss'),
      O('c', 'She leans on her adult children, which goes against the independence expected of adults in the United States.', -2,
        'Culturally biased reasoning', 'Individualist norm', 'Reliance on family can be culturally normative; diagnosing from departure from individualist norms is biased and inaccurate', ['Filipina American', 'family interdependence'], 'Using majority-culture norms as the diagnostic standard'),
      O('d', 'She keeps calling Marisol many times a day, which shows a need for reassurance that has grown since the death.', 0,
        'Relevant but recent', 'Current-behavior framing', 'The calls fit the pattern but, viewed alone, could reflect grief; the lifelong history is what establishes the diagnosis', ['10 to 15 calls daily'], 'Relying on current behavior without the lifelong history'),
    ]),
    Q('q2', 'assess', 'intake', 'How should the counselor respond to Cora’s comment, “Maybe God should take me too”?', ['R2'], [
      O('a', 'Accept it as an expression of faith common among bereaved Catholics and continue gathering her history.', -2,
        'Dismisses a possible warning sign', 'Cultural explanation', 'Religious language can carry a real wish to die; explaining it away without asking misses risk in a bereaved older adult', ['recently widowed', 'age 72'], 'Assuming religious phrasing rules out suicidal thinking'),
      O('b', 'Reassure her that her grandchildren need her and that these feelings usually ease within the first year.', -1,
        'Reassurance instead of assessment', 'Reassure', 'Reassurance may feel supportive but leaves her risk unassessed and may discourage further disclosure', ['passive death statement'], 'Reassuring rather than asking directly'),
      O('c', 'Note the comment and refer her to her physician for an antidepressant evaluation before the next session.', 0,
        'Defers the core task', 'Medical referral', 'A medical referral may help later, but the counselor must first ask directly about suicidal thoughts in the same session', ['statement at end of intake'], 'Referring out instead of assessing'),
      O('d', 'Ask directly about thoughts of death or suicide, intent, plans, and access to means before she leaves.', 3,
        'Direct, same-session screen', 'Assess risk', 'Passive death wishes are common in bereavement but must be screened directly; older widowed adults carry elevated risk', ['“Maybe God should take me too”', 'recent spousal loss'], 'Leaving a death-related statement unexplored'),
    ]),
    Q('q3', 'profdev', 'intake', 'What should the counselor do after noticing tears in her own eyes as Cora describes the hospice bed?', ['R4'], [
      O('a', 'Explore how her own recent loss may affect this work, using supervision and self-care to stay effective.', 3,
        'Self-reflection and support', 'Assess own readiness', 'A recent personal loss can intensify reactions to a grieving client; supervision and self-care help her judge and maintain her effectiveness', ['mother died eight months ago', 'tears in session'], 'Ignoring how personal grief can affect clinical judgment'),
      O('b', 'Share her own loss with Cora, since showing they have both grieved will strengthen the therapeutic bond.', -1,
        'Self-disclosure for the counselor', 'Mutual grief', 'Disclosing her loss shifts focus to the counselor and risks Cora caretaking her, a dependent pattern', ['client prone to pleasing others'], 'Using self-disclosure to meet the counselor’s needs'),
      O('c', 'Refer Cora to another counselor right away, since any emotional reaction shows she is not fit to see her.', -2,
        'Unnecessary transfer', 'Refer out', 'A moment of emotion is not impairment; abrupt transfer abandons a client whose core fear is being left alone', ['fear of abandonment'], 'Treating normal emotion as disqualifying impairment'),
      O('d', 'Suppress the reaction during sessions and avoid topics about hospice so it does not happen again.', 0,
        'Avoids rather than addresses', 'Suppress', 'Avoiding hospice topics would limit Cora’s grief work to manage the counselor’s feelings', ['hospice is central to her loss'], 'Steering away from client material to avoid counselor discomfort'),
    ]),
    Q('q4', 'profdev', 'intake', 'The counselor wrote “goal: full independence” before asking Cora what she wants. What is the best next step?', ['R4', 'R1'], [
      O('a', 'Keep the goal, since helping a dependent client become fully independent is the main purpose of her treatment.', -2,
        'Imposes counselor values', 'Counselor-defined goal', 'Imposing an individualist ideal ignores Cora’s values and culture and can damage the alliance', ['goal written before asking'], 'Imposing personal or cultural values on goals'),
      O('b', 'Ask Marisol and Jun what level of independence they want for their mother and set the goal around that answer.', -1,
        'Substitutes family for client', 'Family-defined goal', 'The family’s views matter, but setting goals around them repeats the pattern of others deciding for Cora', ['others decide for her'], 'Letting others define goals for a dependent client'),
      O('c', 'Examine her own cultural assumptions, seek consultation as needed, and ask Cora how she sees healthy reliance.', 3,
        'Cultural self-awareness', 'Examine values; ask the client', 'Recognizing an individualist bias and asking Cora about family and interdependence keeps goals hers and culturally fitting', ['Filipina American', 'counselor wrote goal first'], 'Equating mental health with individualist independence'),
      O('d', 'Delete the goal and avoid any mention of independence, since raising it could feel culturally insensitive.', 0,
        'Overcorrects', 'Avoid the topic', 'Avoiding the topic is overcautious; Cora herself may want more self-reliance, and that should be asked rather than assumed either way', ['wants to “learn the bills”'], 'Avoiding a topic instead of asking the client'),
    ]),
    // ---------------- session1 (4) ----------------
    Q('q5', 'planning', 'session1', 'Given the screening results, what should come first in Cora’s treatment plan?', ['R3', 'R2'], [
      O('a', 'Start skill-building on bills right away, since mastering tasks will improve her mood and ease the wish to die.', -1,
        'Right work, wrong order', 'Skills first', 'Skill building matters, but a safety plan and removing the morphine should come first given her passive wish', ['passive wish', 'morphine in cabinet'], 'Sequencing skill work ahead of safety'),
      O('b', 'Ask her to promise she will call the counselor before acting on any thought of harming herself.', -2,
        'No-suicide contract', 'Verbal promise', 'Promises do not reduce risk and can discourage disclosure; collaborative safety planning is the standard', ['passive death wish'], 'Relying on a no-harm promise'),
      O('c', 'Arrange an evaluation for inpatient admission, since any wish to die in an older widow requires hospital care.', 0,
        'Over-restrictive but safety-minded', 'Hospitalize', 'It attends to safety, but a passive wish with no intent or plan calls for outpatient safety planning, not hospitalization; overreaction can damage trust', ['no intent, plan, or attempts'], 'Matching care to the presence of ideation rather than risk level'),
      O('d', 'Build a collaborative safety plan that includes safe disposal of Ernesto’s morphine and heart medications.', 3,
        'Safety plan with lethal means', 'Safety first', 'A collaborative safety plan, including removing leftover opioids and medications, addresses the passive wish and the means at hand', ['hospice morphine', 'heart medications'], 'Overlooking lethal means in the home'),
    ]),
    Q('q6', 'planning', 'session1', 'Which objective best meets SMART standards for Cora’s goal to “learn the bills”?', ['R5'], [
      O('a', 'By week 10, pay two bills herself with Marisol only observing, then one fully alone, tracked in a log.', 3,
        'Graded, measurable, client-chosen', 'SMART objective', 'The objective uses her own goal, grades the steps, and sets a timeframe and measure', ['wants to learn the bills', 'Marisol willing to help'], 'Writing vague or all-at-once goals'),
      O('b', 'Become able to manage all of her household finances independently, without any help from her children.', -1,
        'Global and unrealistic', 'Total independence', 'The aim is broad, lacks a timeframe or measure, and jumps far beyond her starting point', ['never paid a bill alone'], 'Setting an all-or-nothing objective'),
      O('c', 'Let Jun manage her finances under his power of attorney so that she no longer has to worry about the bills.', -2,
        'Contradicts her goal', 'Hand off responsibility', 'This reverses her stated goal and repeats the pattern of others taking over her life', ['“before Jun decides everything for me”'], 'Reinforcing dependence against the client’s wishes'),
      O('d', 'Feel more confident about money and less anxious when bills arrive in the mail over the next few months.', 0,
        'Relevant but not measurable', 'Feelings goal', 'Reduced anxiety is a fair aim, but it lacks a specific behavior and measure', ['bills cause distress'], 'Writing feelings-based objectives'),
    ]),
    Q('q7', 'indirect', 'session1', 'How should the counselor work with Marisol and Jun as Cora’s supports?', ['R5', 'R4'], [
      O('a', 'Ask Marisol to keep making decisions for now, since she is a nurse and her mother is still deeply grieving.', -1,
        'Maintains dependence', 'Delegate to family', 'Continuing to decide for Cora reinforces the pattern and adds to Marisol’s exhaustion', ['Marisol exhausted', 'Cora wants to learn'], 'Prioritizing efficiency over the client’s goals'),
      O('b', 'Encourage Marisol to set limits, such as answering only once a day, so Cora is forced to manage alone.', -2,
        'Abrupt withdrawal of support', 'Cut off support', 'Abruptly removing support from a newly bereaved woman with a passive death wish risks distress and crisis', ['passive wish', 'recent loss'], 'Treating dependence by sudden withdrawal of support'),
      O('c', 'With Cora’s consent, help the family support her small decisions rather than deciding for her.', 3,
        'Align supports with goals', 'Collaborate with supports', 'Coaching supports to scaffold rather than take over, and to slow the house decision, serves her goals and eases Marisol’s burden', ['release for Marisol', 'Jun pressing sale'], 'Leaving family patterns unaddressed'),
      O('d', 'Focus only on Cora in session and leave the family to sort out the house and other decisions among themselves.', 0,
        'Misses a key lever', 'Individual focus only', 'Individual work is central, but family patterns maintain the dependence, and she has consented to involve Marisol', ['family involvement consented'], 'Ignoring the support system'),
    ]),
    Q('q8', 'indirect', 'session1', 'What should the counselor do with Cora’s report that zolpidem makes her “wobbly” and dizzy at night?', ['R4'], [
      O('a', 'Advise her to stop the zolpidem, since falls are dangerous and her sleep can be addressed in counseling instead.', -2,
        'Outside counselor scope', 'Medication advice', 'Advising a medication change is a prescriber decision; stopping without guidance can disrupt care', ['prescribed by Dr. Nguyen'], 'Giving medication advice outside scope'),
      O('b', 'Document her self-reported effects and, with her release, inform Dr. Nguyen about the dizziness at night.', 3,
        'Document and coordinate', 'Report medication effects', 'Recording self-reported side effects and sharing them with the prescriber supports safe care, especially fall risk in older adults', ['release for Dr. Nguyen', '“wobbly” at night'], 'Neither documenting nor coordinating on side effects'),
      O('c', 'Note the effects in her chart and encourage her to raise them at her next scheduled appointment with Dr. Nguyen.', 0,
        'Documents but delays', 'Client-led follow-up', 'Documenting is right, but night-time dizziness in a 72-year-old warrants prompt contact, and a dependent client may not raise it', ['two dizzy episodes'], 'Leaving a safety issue to a routine visit'),
      O('d', 'Suggest she take half the dose at bedtime for now, which would likely reduce the dizziness while still helping her sleep.', -1,
        'Dosing advice', 'Adjust dose', 'Recommending a dose change is outside counselor scope, even if well meant', ['counselor scope'], 'Making dosing recommendations'),
    ]),
    // ---------------- session2 (5) ----------------
    Q('q9', 'interventions', 'session2', 'Cora says, “You are the expert — just tell me what to do” about the house. What is the best response?', ['R5'], [
      O('a', 'Decline to decide, and help her list what matters most to her, such as her parish and Ernesto’s grave.', 3,
        'Foster her own decision-making', 'Guided problem-solving', 'Helping her weigh options by her own values builds decision-making skill instead of repeating the pattern', ['“just tell me what to do”', 'wants to stay near parish'], 'Taking over decisions for a dependent client'),
      O('b', 'Recommend she keep the house, since she clearly wants to stay and someone needs to support that wish.', -1,
        'Decides for her', 'Advise by deciding', 'Even well-aligned advice reinforces reliance on others to decide', ['dependent pattern'], 'Making the decision for the client'),
      O('c', 'Tell her she should follow Jun’s advice, since family is important and he is offering her a home.', -2,
        'Reinforces dependence', 'Defer to family', 'This endorses the pattern of others deciding and overrides what she has said she wants', ['wants to stay near grave'], 'Siding with family pressure over client wishes'),
      O('d', 'Point out that she usually asks others to decide, so she can see that the pattern is happening right now.', 0,
        'Insight without support', 'Interpret', 'Naming the pattern can be useful but, without help deciding, may feel critical', ['sensitivity to disapproval'], 'Offering interpretation instead of building the skill'),
    ]),
    Q('q10', 'interventions', 'session2', 'Cora agreed on the phone to list the house, though she wants to stay. Which intervention helps most?', ['R5'], [
      O('a', 'Call Jun on her behalf and explain that his mother does not actually want to sell the house right now.', -1,
        'Speaks for her', 'Advocate for her', 'Speaking for her repeats the pattern; she needs support to speak for herself', ['dependent pattern'], 'Advocating for the client instead of building her voice'),
      O('b', 'Advise her to go along with the listing for now and revisit the decision after the first year of grief.', -2,
        'Endorses acting against her wishes', 'Defer the decision', 'Going along could lead to selling her home against her wishes during acute grief', ['listing agreed under pressure'], 'Encouraging compliance against stated wishes'),
      O('c', 'Explore why disagreeing with Jun feels so frightening, and leave practicing what to say for a later session.', 0,
        'Good exploration, delays the skill', 'Insight first', 'Understanding the fear helps, but the listing makes rehearsal timely', ['listing pending'], 'Delaying skill practice when action is imminent'),
      O('d', 'Role-play telling Jun what she wants, practicing a clear, respectful statement for their next call.', 3,
        'Assertiveness rehearsal', 'Behavioral rehearsal', 'Rehearsing a respectful, direct statement builds assertiveness in a real, time-sensitive situation', ['agreed despite wanting to stay', 'next call with Jun'], 'Talking about assertiveness without practice'),
    ]),
    Q('q11', 'interventions', 'session2', 'Cora asks if it is “crazy” that she talks to Ernesto’s photo each night. What is the best response?', ['R5', 'R1'], [
      O('a', 'Explain that talking to the photo suggests she has not accepted the death and should be gradually reduced.', -1,
        'Pathologizes a normal bond', 'Detachment model', 'Continuing bonds are common and often helpful in grief, especially within many cultural and religious traditions', ['four months after death'], 'Assuming healthy grief requires severing the bond'),
      O('b', 'Explain that ongoing bonds with a loved one are common in grief and explore what the nightly talks mean to her.', 3,
        'Normalize continuing bonds', 'Psychoeducation and exploration', 'Normalizing continuing bonds and exploring their meaning supports adaptive grief without pathologizing', ['talks to photo nightly', 'Catholic faith'], 'Treating normal grief practices as symptoms'),
      O('c', 'Ask whether Ernesto ever answers her, since hearing his voice could mean she is developing a psychotic disorder.', -2,
        'Misframes grief as psychosis', 'Psychosis screen', 'Sensing or talking to the deceased is common in bereavement; framing it as psychosis alarms her and misreads the data', ['no other psychotic features'], 'Mistaking grief experiences for psychosis'),
      O('d', 'Reassure her that it is not crazy at all and move on to the plan for her next bill-paying task.', 0,
        'Reassures but misses meaning', 'Reassure and redirect', 'Reassurance is accurate, but moving on misses the chance to explore her grief', ['tearful question'], 'Skipping grief exploration for task focus'),
    ]),
    Q('q12', 'legal', 'session2', 'How should the counselor respond to Jun’s call claiming financial power of attorney and demanding information?', ['R6', 'R4'], [
      O('a', 'Share a brief summary about the house discussion, since a power of attorney gives him the right to her information.', -2,
        'Unauthorized disclosure', 'Assume POA access', 'A financial power of attorney does not authorize access to a competent adult’s counseling information', ['Cora competent', 'no release for Jun'], 'Treating financial POA as health-information authority'),
      O('b', 'Without confirming anything, explain that a release from Cora is needed, and raise his request with her.', 3,
        'Protect confidentiality; involve client', 'Require authorization', 'Cora is a competent adult who has not authorized disclosure to Jun; the counselor discloses nothing and lets her decide about a release or a joint session', ['financial POA only', 'no release for Jun'], 'Releasing information to family based on a claimed legal role'),
      O('c', 'Agree to let him join the next session, since including family will help settle the house question faster.', -1,
        'Decides for the client', 'Invite family', 'Whether Jun joins is Cora’s choice; agreeing on her behalf repeats the pattern and risks confidentiality', ['Cora’s autonomy'], 'Arranging family involvement without client consent'),
      O('d', 'Ask Jun to send a copy of the power of attorney document so the counselor can decide what she may share.', 0,
        'Reviews the wrong document', 'Verify the document', 'Checking documents is careful, but a financial POA does not make Jun her HIPAA personal representative, so no version of it unlocks her counseling information', ['financial POA'], 'Assuming the right document would unlock disclosure'),
    ]),
    Q('q13', 'legal', 'session2', 'With the office closed by the wildfire evacuation order, what should the counselor do for Cora?', ['R7', 'R4'], [
      O('a', 'Follow the emergency plan: contact her, offer telehealth with consent, and confirm her location and contacts.', 3,
        'Activate emergency preparedness', 'Continuity of care', 'An emergency plan maintains care for a client with recent passive ideation, using telehealth with consent and verified location and emergency contacts', ['office closed', 'staying with Marisol'], 'Letting a disaster interrupt care without a plan'),
      O('b', 'Pause all sessions until the office reopens, since telehealth was not part of her original informed consent.', -2,
        'Interrupts care at a risky time', 'Wait for reopening', 'Leaving a recently bereaved client with a passive wish without contact for an unknown period is unsafe; consent can be obtained now', ['passive death wish', 'unknown closure length'], 'Treating an emergency as a reason to stop care'),
      O('c', 'Ask Marisol to check on her mother each day and call the counselor if anything seems wrong in the meantime.', -1,
        'Shifts care to family', 'Family monitoring', 'Marisol can help, but asking her to monitor replaces the counselor’s contact and adds to her burden', ['Marisol exhausted'], 'Substituting family monitoring for professional contact'),
      O('d', 'Start video sessions the next day using a free, widely used video-chat app until the office is able to reopen.', 0,
        'Continues care, skips safeguards', 'Quick telehealth', 'Continuing care is right, but platform security, consent, and location verification should not be skipped', ['telehealth requirements'], 'Moving to telehealth without proper safeguards'),
    ]),
  ],
};

module.exports = { CASES: [D940, D941, D942, D943, D944] };
