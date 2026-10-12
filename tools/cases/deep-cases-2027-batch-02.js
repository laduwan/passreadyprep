// deep-cases-2027-batch-02.js — NCMHCE deep cases, Anxiety category (5 cases)
// ids: ncmhce-D925, ncmhce-D926, ncmhce-D927, ncmhce-D928, ncmhce-D929
// 2027 NCMHCE specification; hand-authored; validate with check2027.js
//
// ncmhce-D925 · plan 5 · easy   · adult       · Social Anxiety Disorder (F40.10)
// ncmhce-D926 · plan 6 · medium · adult       · Specific Phobia, Animal Type (F40.218)
// ncmhce-D927 · plan 7 · hard   · older_adult · Agoraphobia (F40.00)
// ncmhce-D928 · plan 8 · medium · child       · Separation Anxiety Disorder (F93.0)
// ncmhce-D929 · plan 9 · medium · child       · Selective Mutism (F94.0)
//
// Standalone deliverable for SME review. Do NOT auto-import.

const O = (id, text, weight, ex) => ({
  id,
  text,
  isCorrect: weight === 3,
  weight,
  rationale: ex.r,
  explanation: { approach: ex.approach, rationale: ex.why, keyIndicators: ex.keys, commonMistake: ex.mistake },
});
const SECTION = {
  profdev: 'intake', assess: 'intake',
  planning: 'session1', indirect: 'session1',
  interventions: 'session2', legal: 'session2',
};
const Q = (id, domain, question, evidenceRef, options) => ({ id, domain, section: SECTION[domain], question, evidenceRef, options });

// ============================================================================
// D925 — Social Anxiety Disorder · easy · adult · plan 5
// ============================================================================
const D925 = {
  id: 'ncmhce-D925',
  title: 'A doctoral student from Kraków who has dreaded speaking up in two languages',
  category: 'Anxiety',
  difficulty: 'easy',
  plan: 5,
  population: 'adult',
  primaryDiagnosis: { name: 'Social Anxiety Disorder', code: 'F40.10' },
  diagnosis: { name: 'Social Anxiety Disorder', code: 'F40.10' },
  differentialOptions: [
    { id: 'do1', name: 'Adjustment Disorder, with Anxiety', isCorrect: false },
    { id: 'do2', name: 'Social Anxiety Disorder', isCorrect: true },
    { id: 'do3', name: 'Avoidant Personality Disorder', isCorrect: false },
    { id: 'do4', name: 'Panic Disorder', isCorrect: false },
  ],
  narrative: {
    intake:
      'Tomasz Wójcik, a 27-year-old Polish second-year PhD student in materials engineering who is in the United States on a student visa, self-refers to his ' +
      'university counseling center after his advisor, Dr. Ruth Hollis, asked why he declined to present at a departmental seminar. He describes intense fear ' +
      'of being judged as incompetent whenever he speaks in lab meetings, seminars, or office hours: his face flushes, his voice shakes, and he rehearses ' +
      'sentences for hours beforehand. He eats lunch alone to skip department social hours and has avoided his teaching-assistant office hours by trading ' +
      'duties with a labmate. He traces the fear to age 14, when he began avoiding oral exams in Kraków, and calls it "the same problem in two languages" since ' +
      'arriving 16 months ago, although speaking English makes it worse. He is fluent in spoken and written English, sleeps and eats normally, enjoys solo ' +
      'bouldering, drinks two or three beers a month socially, and denies suicidal thoughts. His Social Phobia Inventory (SPIN) score is 43, well above the ' +
      'usual screening cutoff. He asks whether seeing a counselor will be reported to the international student office or affect his visa. The counselor, ' +
      'licensed two years and trained mainly in brief CBT for depression with domestic undergraduates, has never counseled an international graduate student ' +
      'or delivered exposure-based CBT for social anxiety.',
    session1:
      'In the second session Tomasz and the counselor agree on individual CBT with graduated exposure. His main goal is to give the 20-minute departmental ' +
      'seminar talk scheduled ten weeks from now. He lists his feared situations: speaking in weekly lab meetings, holding office hours, phone calls with his ' +
      'landlord, and joining department social hours. He asks the counselor to contact Dr. Hollis and request that he be excused from lab-meeting presentations ' +
      '"until I am fixed," and he signs a release limited to confirming his attendance and supporting a presentation plan. He also reports that a student ' +
      'health physician prescribed propranolol 10 mg to take before presentations; it stops his hands shaking but leaves him "tired and foggy" all afternoon, ' +
      'so he has started taking half a tablet on his own.',
    session2:
      'By week five Tomasz has completed several exposures. During an in-session practice talk he reads from a memorized script, grips his notes, and keeps ' +
      'his eyes on the wall; afterward he rates his anxiety lower than he predicted but says it worked "only because of the script." He remarks that in Poland ' +
      'people do not discuss feelings with strangers and that he cannot tell whether Americans\' constant smiling means approval or judgment. The center is ' +
      'piloting an AI note-taking tool that records sessions to draft progress notes, and the counselor has not yet discussed it with him. He plans to spend ' +
      'the five-week winter break with his family in Kraków and asks to continue sessions by video from there. Later that week Dr. Hollis phones the ' +
      'counselor asking whether Tomasz "has a diagnosis" and whether he will be ready for the seminar.',
  },
  diagnosticRationale:
    'Tomasz has marked fear of scrutiny and negative evaluation in social and performance situations (lab meetings, seminars, office hours, social hours), ' +
    'the situations almost always provoke fear and are avoided or endured with distress, and the pattern has lasted well over six months with clear academic ' +
    'impairment. Onset at age 14 in Poland, long before relocation, rules out an adjustment disorder; the fear is of evaluation rather than of unexpected ' +
    'panic attacks; and the avoidance is circumscribed to evaluative situations rather than a pervasive pattern of inadequacy across his life, which argues ' +
    'against avoidant personality disorder. Acculturation and second-language demands intensify the presentation but do not explain it.',
  references: [
    { id: 'R1', source: 'DSM-5-TR', detail: 'Social anxiety disorder: fear of scrutiny in social or performance situations, avoidance or endurance with distress, 6+ months, impairment; differential with adjustment and avoidant personality disorders' },
    { id: 'R2', source: 'ICD-11', detail: '6B04 Social anxiety disorder, used alongside DSM-5-TR for cross-system diagnostic documentation' },
    { id: 'R3', source: 'NICE guidelines', detail: 'Social anxiety disorder (CG159): individual CBT specifically developed for social anxiety, including exposure and work on safety behaviours' },
    { id: 'R4', source: 'ACA Code of Ethics', detail: 'Informed consent and limits of confidentiality; minimum necessary disclosure under a release; competence and consultation; technology and distance counseling across jurisdictions' },
    { id: 'R5', source: 'Hays (Assessment)', detail: 'Self-report screening (e.g., SPIN) interpreted alongside clinical interview and cultural context' },
    { id: 'R6', source: 'Corey (Theory & Practice)', detail: 'Multicultural counseling competence, broaching culture, and cognitive-behavioral exposure with safety-behavior reduction' },
    { id: 'R7', source: 'Wiger (Documentation)', detail: 'Documenting client-reported medication effects and coordination with prescribers' },
    { id: 'R8', source: 'NBCC 2027 Spec', detail: 'Legal & Ethical Compliance tasks: AI note takers and technology-assisted tools, telemental health best practice' },
    { id: 'R9', source: 'State law', detail: 'Telemental health is governed by the law of the client\'s physical location as well as the counselor\'s licensing jurisdiction' },
  ],
  questions: [
    // ---------------- intake (4): profdev, assess, assess, profdev ----------------
    Q('q1', 'profdev', 'Which response best addresses the counselor\'s readiness to work with Tomasz\'s cultural context?', ['R4', 'R6'], [
      O('a', 'Ask Tomasz to teach her about Polish cultural norms so she can learn about his background as treatment moves along.', 0,
        { r: 'Curiosity, but the client carries the load', approach: 'Client-as-educator framing', why: 'Asking about his own cultural experience is useful, but making the client the main source of the counselor\'s cultural learning shifts her professional responsibility onto him', keys: ['never counseled an international student'], mistake: 'Treating the client as the counselor\'s cultural teacher instead of pursuing her own training' }),
      O('b', 'Begin treatment while seeking training and consultation on counseling international graduate students and acculturation.', 3,
        { r: 'Proceed while building cultural competence', approach: 'Training plus consultation', why: 'A competent counselor can begin a case at the edge of her experience when she actively pursues training and consultation on the population she is serving', keys: ['first international graduate student', 'acculturation and second-language stress'], mistake: 'Assuming general training is enough or that a gap in experience requires referral' }),
      O('c', 'Treat his culture as largely irrelevant, because the core features of social anxiety disorder look alike in every country.', -2,
        { r: 'Culture-blind stance', approach: 'Universalist framing', why: 'How evaluation fears are expressed and what counts as appropriate social behavior vary across cultures; ignoring culture invites misreading and rupture', keys: ['"the same problem in two languages"', 'speaking English makes it worse'], mistake: 'Believing a universal diagnosis makes cultural context clinically unimportant' }),
      O('d', 'Transfer him to a Polish-speaking counselor in the area, since cultural matching is needed for this client to benefit.', -1,
        { r: 'Unnecessary referral', approach: 'Matching framing', why: 'Tomasz is fluent in English and asked for help here; referral on cultural grounds alone delays care and is not required for effective treatment', keys: ['fluent in spoken and written English'], mistake: 'Equating cultural competence with cultural or language matching' }),
    ]),
    Q('q2', 'assess', 'Which finding most clearly supports social anxiety disorder rather than an adjustment disorder related to relocation?', ['R1'], [
      O('a', 'His symptoms have worsened since moving to the United States, which shows that acculturative stress is the main cause.', -1,
        { r: 'Worsening is not onset', approach: 'Relocation-as-cause framing', why: 'Second-language demands intensified his fear, but the fear began a decade before the move', keys: ['began at age 14 in Kraków'], mistake: 'Confusing an exacerbating stressor with the origin of the disorder' }),
      O('b', 'His SPIN score of 43 sits well above the screening cutoff, which by itself is enough to establish the social anxiety diagnosis.', 0,
        { r: 'A screen does not diagnose', approach: 'Score-driven framing', why: 'The elevated SPIN supports the picture, but diagnosis rests on criteria from the interview, especially onset and duration', keys: ['SPIN 43'], mistake: 'Treating a screening score as diagnostic proof' }),
      O('c', 'His avoidance of social hours and office hours shows a broad mistrust of others that points to a personality disorder.', -2,
        { r: 'Misreads fear as mistrust', approach: 'Personality-pathology framing', why: 'He avoids being evaluated, not people in general; labeling this as mistrust or personality pathology misdiagnoses a treatable anxiety disorder', keys: ['fear of being judged as incompetent', 'enjoys bouldering'], mistake: 'Reading performance avoidance as a pervasive personality trait' }),
      O('d', 'His fear of negative evaluation began at age 14 in Poland and has driven avoidance in both languages for many years.', 3,
        { r: 'Onset predates the stressor', approach: 'Apply onset and duration', why: 'Adjustment disorder requires onset within three months of a stressor; a fear of scrutiny present since adolescence, in both countries, fits social anxiety disorder', keys: ['onset at age 14', '"the same problem in two languages"'], mistake: 'Attributing long-standing anxiety in an international student to relocation by default' }),
    ]),
    Q('q3', 'assess', 'How should the counselor respond to Tomasz\'s question about whether counseling could affect his visa?', ['R4'], [
      O('a', 'Explain the center\'s confidentiality policy and its limits, including that records are not released without his consent.', 3,
        { r: 'Accurate policy review reduces the barrier', approach: 'Informed consent on confidentiality', why: 'A specific, accurate explanation of who can see his records and when addresses a real barrier to service and is required for informed consent', keys: ['asks if counseling will be reported', 'student visa'], mistake: 'Leaving a fear about records unaddressed, which can end treatment early' }),
      O('b', 'Reassure him that his records are private and suggest he raise any visa concerns directly with the international office.', 0,
        { r: 'Right intent, incomplete answer', approach: 'Reassure and redirect', why: 'Privacy matters, but vague reassurance omits the limits of confidentiality and sends him to the office he fears', keys: ['fear of the international office'], mistake: 'Offering reassurance in place of a clear explanation of policy and limits' }),
      O('c', 'Tell him that everything said in counseling is completely confidential, so there is no situation in which it is shared.', -1,
        { r: 'Overpromises confidentiality', approach: 'Blanket reassurance', why: 'Confidentiality has limits such as imminent danger or court orders; promising otherwise undermines informed consent', keys: ['informed consent at intake'], mistake: 'Calming a worried client by overstating confidentiality' }),
      O('d', 'Suggest he register under a different name on intake forms so nothing in the center\'s records can be tied to his visa.', -2,
        { r: 'Falsifies records', approach: 'Anonymizing workaround', why: 'Knowingly creating inaccurate records is unethical and can expose the client and the counselor to serious harm', keys: ['accurate records are required'], mistake: 'Solving a confidentiality worry by falsifying documentation' }),
    ]),
    Q('q4', 'profdev', 'Which step best addresses the counselor\'s limited experience with exposure-based CBT for social anxiety?', ['R3', 'R4'], [
      O('a', 'Substitute the depression-focused CBT protocol she knows well, since cognitive restructuring works the same way in both.', -1,
        { r: 'Wrong protocol', approach: 'Protocol substitution', why: 'Social anxiety CBT targets evaluation fears, safety behaviors, and avoidance through exposure; a depression protocol leaves those mechanisms untouched', keys: ['avoidance of evaluative situations'], mistake: 'Applying a familiar protocol to a disorder with different maintaining factors' }),
      O('b', 'Start unsupervised in-vivo exposures with him at a large campus event, building her skills through direct practice.', -2,
        { r: 'Practicing beyond competence', approach: 'Learn-by-doing framing', why: 'Untrained, unsupervised exposure at the top of his hierarchy risks a failed exposure, sensitization, and dropout', keys: ['never delivered exposure-based CBT'], mistake: 'Gaining competence on the client without training or consultation' }),
      O('c', 'Consult a colleague experienced in CBT for social anxiety and study the model while she begins the case under guidance.', 3,
        { r: 'Consultation for a specific modality', approach: 'Seek skill-specific consultation', why: 'Consultation with an experienced colleague plus targeted study lets her deliver the recommended treatment competently without delaying care', keys: ['trained mainly in CBT for depression', 'social anxiety CBT is first line'], mistake: 'Either practicing outside competence or delaying care until fully trained' }),
      O('d', 'Finish a continuing education course on exposure therapy before scheduling his next session, pausing his care until then.', 0,
        { r: 'Good training, unnecessary delay', approach: 'Train first, treat later', why: 'Continuing education is valuable, but pausing care is not needed when consultation can support her now', keys: ['seminar in ten weeks'], mistake: 'Delaying an engaged client\'s treatment while the counselor completes training' }),
    ]),
    // ---------------- session1 (4): indirect, planning, indirect, planning ----------------
    Q('q5', 'indirect', 'How should the counselor respond to Tomasz\'s request that she contact Dr. Hollis?', ['R3', 'R4'], [
      O('a', 'Ask Dr. Hollis to excuse him from all lab-meeting presentations until treatment ends, exactly as he has requested.', -1,
        { r: 'Reinforces avoidance and exceeds the release', approach: 'Advocate for excusal', why: 'Excusal would strengthen the avoidance treatment targets, and the release covers only attendance and a presentation plan', keys: ['release limited to attendance and plan', 'avoidance maintains fear'], mistake: 'Treating an accommodation request as support when it feeds the anxiety cycle' }),
      O('b', 'Explain how excusal feeds avoidance, then, within the release, ask Dr. Hollis to support a graded speaking plan.', 3,
        { r: 'Stakeholder support for graded exposure', approach: 'Collaborate within consent', why: 'Working with his advisor inside the limits of the release can turn lab meetings into graded exposure opportunities rather than avoided situations', keys: ['signed limited release', 'lab meetings are on his hierarchy'], mistake: 'Collaborating in a way that either exceeds consent or enables avoidance' }),
      O('c', 'Decline to contact Dr. Hollis and encourage Tomasz to discuss his presentation needs with his advisor on his own.', 0,
        { r: 'Empowering but misses useful collaboration', approach: 'Self-advocacy only', why: 'Self-advocacy is a good goal, but he consented to contact and advisor support could aid his exposure plan', keys: ['he signed a release'], mistake: 'Passing up appropriate collaboration with a non-clinical stakeholder' }),
      O('d', 'Call Dr. Hollis to explain his diagnosis and history so the department understands how severe his anxiety is.', -2,
        { r: 'Discloses beyond the release', approach: 'Full-disclosure advocacy', why: 'Sharing diagnosis and history exceeds his limited authorization and violates confidentiality', keys: ['release limited to attendance and plan'], mistake: 'Assuming advocacy justifies disclosing more than the client authorized' }),
    ]),
    Q('q6', 'planning', 'Which goal best meets SMART criteria for Tomasz\'s treatment plan?', ['R3'], [
      O('a', 'Within 10 weeks, deliver the 20-minute seminar talk without a script, with peak anxiety rated at or below 50 of 100.', 3,
        { r: 'Specific, measurable, time-bound', approach: 'SMART goal', why: 'The goal names the behavior, a measurable anxiety rating, a realistic target, and a deadline tied to his own priority, and it drops a key safety behavior', keys: ['seminar in ten weeks', 'rehearses scripts'], mistake: 'Writing goals that are vague or that build safety behaviors into success' }),
      O('b', 'Within 10 weeks, give the seminar talk with propranolol and his full script so he can get through the presentation.', 0,
        { r: 'Measurable, but builds in safety behaviors', approach: 'Get-through goal', why: 'The goal is measurable and time-bound, but relying on the script keeps his core prediction untested', keys: ['memorized scripts', 'rehearses for hours'], mistake: 'Defining success as enduring the situation with safety behaviors intact' }),
      O('c', 'Over the coming semester, feel more confident and less anxious when speaking with professors and peers in his department.', -1,
        { r: 'Not measurable or specific', approach: 'Global improvement goal', why: 'No observable behavior, rating, or date makes progress impossible to evaluate', keys: ['SMART criteria'], mistake: 'Confusing a broad aspiration with a measurable treatment goal' }),
      O('d', 'Postpone the seminar talk until his anxiety has fully resolved so that he does not risk a humiliating experience.', -2,
        { r: 'Codifies avoidance', approach: 'Wait-until-ready goal', why: 'Making avoidance a treatment goal strengthens the disorder and threatens his academic standing', keys: ['avoidance maintains social anxiety'], mistake: 'Treating avoidance as protection rather than as the maintaining factor' }),
    ]),
    Q('q7', 'indirect', 'How should the counselor handle Tomasz\'s report about propranolol?', ['R7'], [
      O('a', 'Advise him to stop the propranolol, since medication would interfere with the exposure work they are doing together.', -2,
        { r: 'Medication advice outside scope', approach: 'Counselor directs medication', why: 'Changing or stopping a prescribed medication is a prescriber decision; advising it is outside counselor scope', keys: ['prescribed by a physician'], mistake: 'Giving medication instructions because they seem clinically logical' }),
      O('b', 'Encourage him to discuss the fogginess with his physician, and leave medication details out of the counseling record.', 0,
        { r: 'Right referral, incomplete record', approach: 'Refer without documenting', why: 'Sending him to the prescriber is right, but the record should capture his self-reported effects and dose change', keys: ['"tired and foggy"', 'took half a tablet'], mistake: 'Omitting clinically relevant medication reports from documentation' }),
      O('c', 'Tell him that halving the dose is a sensible adjustment, since he is the best judge of how the medication affects him.', -1,
        { r: 'Endorses an unsupervised change', approach: 'Validate self-adjustment', why: 'Approving a self-directed dose change bypasses the prescriber and is outside scope', keys: ['changed dose on his own'], mistake: 'Equating client autonomy with endorsing unsupervised medication changes' }),
      O('d', 'Document the benefit, fogginess, and dose change he reports, and with consent share them with the prescribing physician.', 3,
        { r: 'Document and coordinate', approach: 'Record self-report, coordinate care', why: 'Documenting the client\'s reported medication effects and informing the prescriber with consent supports safe, coordinated care', keys: ['stops shaking but foggy', 'self-adjusted dose'], mistake: 'Either ignoring medication reports or managing them without the prescriber' }),
    ]),
    Q('q8', 'planning', 'How should the counselor help Tomasz prioritize his feared situations for exposure?', ['R3', 'R6'], [
      O('a', 'Start with the seminar talk, since it is his most important goal and success there will carry over to everything else.', -1,
        { r: 'Starts at the top of the hierarchy', approach: 'Biggest-first framing', why: 'Beginning with the most feared situation risks a failed exposure and dropout; graded work builds toward it', keys: ['seminar is the hardest item'], mistake: 'Equating the most important goal with the right first exposure' }),
      O('b', 'Start with phone calls to his landlord, since they are the easiest item and the least connected to his academic work.', 0,
        { r: 'Graded, but off-target', approach: 'Easiest-first framing', why: 'Starting low is reasonable, but choosing an item unrelated to his priority slows progress toward the seminar', keys: ['main goal is the seminar'], mistake: 'Grading by ease alone without linking steps to the client\'s priorities' }),
      O('c', 'Rate each situation for fear and importance together, then begin with a moderate lab-meeting step tied to his seminar goal.', 3,
        { r: 'Collaborative, graded, goal-linked', approach: 'Build a collaborative hierarchy', why: 'Ranking feared situations together and starting at a moderate, relevant step balances tolerability with progress toward his main goal', keys: ['lists four feared situations', 'seminar in ten weeks'], mistake: 'Choosing exposures for the client rather than building the hierarchy with him' }),
      O('d', 'Leave the department social hours off the plan for now, since feeling awkward with others is just part of his culture.', -2,
        { r: 'Stereotype that preserves avoidance', approach: 'Cultural explanation', why: 'Attributing his avoidance to culture is a stereotype the client himself does not endorse, and it removes a feared situation from treatment', keys: ['he lists social hours as feared'], mistake: 'Using a cultural assumption to excuse a symptom of the disorder' }),
    ]),
    // ---------------- session2 (5): interventions, interventions, legal, legal, legal ----------------
    Q('q9', 'interventions', 'How should the counselor respond to Tomasz\'s comments about Polish and American social norms?', ['R6'], [
      O('a', 'Invite him to explore how his cultural background and speaking a second language shape his fear of being judged.', 3,
        { r: 'Broaches culture directly', approach: 'Broaching', why: 'Openly inviting discussion of culture and language shows they are welcome in counseling and clarifies how they feed his evaluation fears', keys: ['comments on Polish and American norms', 'cannot read American smiling'], mistake: 'Treating cultural remarks as a digression instead of an invitation' }),
      O('b', 'Explain that American smiling is usually friendly so that he can reinterpret his peers\' expressions as signs of approval.', 0,
        { r: 'Reassurance in place of exploration', approach: 'Counselor-supplied reframe', why: 'Correcting an interpretation can help later, but supplying the answer skips his own meaning-making and may sound dismissive', keys: ['uncertain about smiling'], mistake: 'Offering reassurance before understanding the client\'s experience' }),
      O('c', 'Note the comment and keep the focus on exposure, since culture is a separate topic from his social anxiety symptoms.', -1,
        { r: 'Misses the cultural link', approach: 'Protocol-only focus', why: 'His uncertainty about others\' signals is part of what makes evaluation feel threatening; setting it aside weakens the formulation', keys: ['cannot tell approval from judgment'], mistake: 'Treating culture as outside the scope of symptom work' }),
      O('d', 'Tell him he will need to adopt American communication norms if he wants to succeed in his doctoral program here.', -2,
        { r: 'Imposes assimilation', approach: 'Assimilation directive', why: 'Telling a client to abandon his cultural norms imposes the counselor\'s values and can damage the alliance', keys: ['international student'], mistake: 'Confusing adaptation skills with a demand to assimilate' }),
    ]),
    Q('q10', 'interventions', 'What is the best next step after Tomasz\'s in-session practice talk?', ['R3', 'R6'], [
      O('a', 'Praise his lower anxiety rating and repeat the same talk next week to strengthen his confidence in presenting.', 0,
        { r: 'Repeats exposure with safety behaviors', approach: 'Repeat and reinforce', why: 'Praise and repetition help, but with the script still in place he credits success to the script, not to his own ability', keys: ['"only because of the script"'], mistake: 'Repeating exposures without addressing safety behaviors' }),
      O('b', 'Repeat the talk without the script or fixed gaze, so he can test whether his feared outcome happens without them.', 3,
        { r: 'Drop safety behaviors, test the prediction', approach: 'Safety-behavior reduction', why: 'CBT for social anxiety removes safety behaviors so the client can learn that the feared outcome does not occur, or is manageable, without them', keys: ['memorized script', 'eyes on the wall'], mistake: 'Allowing safety behaviors to block disconfirming learning' }),
      O('c', 'Shift to relaxation training for several weeks, since relying on the script shows he is not yet ready for exposures.', -1,
        { r: 'Retreats from exposure', approach: 'Relaxation instead', why: 'Safety-behavior use signals a target for exposure, not a reason to abandon it; relaxation alone is a weaker approach', keys: ['anxiety lower than predicted'], mistake: 'Reading safety behaviors as unreadiness rather than as the next target' }),
      O('d', 'Suggest a beer before his talks to take the edge off, since the script alone is not enough to manage his anxiety.', -2,
        { r: 'Recommends alcohol as a coping aid', approach: 'Chemical safety behavior', why: 'Advising alcohol to manage anxiety adds a risky safety behavior and can seed problematic drinking', keys: ['drinks socially only'], mistake: 'Recommending substance use as an anxiety-management tool' }),
    ]),
    Q('q11', 'legal', 'How should the counselor respond to Tomasz\'s request to continue video sessions from Kraków?', ['R4', 'R9'], [
      O('a', 'Agree to continue as usual, since her license is valid wherever she practices and his location does not matter.', -2,
        { r: 'Ignores the client\'s jurisdiction', approach: 'License-follows-counselor framing', why: 'Distance counseling is subject to the laws of the client\'s location as well as the counselor\'s; ignoring that risks unauthorized practice', keys: ['five weeks in Kraków'], mistake: 'Believing a license travels with the counselor rather than depending on the client\'s location' }),
      O('b', 'Agree to continue if he uses a secure platform, and address any legal questions only if a problem comes up over break.', 0,
        { r: 'Security without jurisdiction', approach: 'Platform-first framing', why: 'A secure platform is necessary but not sufficient; jurisdictional questions must be answered before services begin', keys: ['international location'], mistake: 'Treating platform security as the only telehealth requirement' }),
      O('c', 'Check the law of his location and center policy before break, and plan resources in case sessions cannot continue.', 3,
        { r: 'Verify jurisdiction and plan for a gap', approach: 'Jurisdiction check and continuity plan', why: 'Before providing distance services abroad, the counselor confirms what the client\'s location and her own rules permit and prepares a plan if they do not', keys: ['winter break abroad', 'asks for video sessions'], mistake: 'Deciding telehealth eligibility without checking the client\'s location' }),
      O('d', 'Suspend all contact over the break and tell him to resume in January, without arranging any support while he is away.', -1,
        { r: 'Interrupts care without a plan', approach: 'Pause without planning', why: 'Pausing may end up necessary, but leaving him without resources or a plan for five weeks is poor continuity of care', keys: ['five-week break'], mistake: 'Equating legal caution with leaving the client unsupported' }),
    ]),
    Q('q12', 'legal', 'What must the counselor do before using the center\'s AI note-taking tool in Tomasz\'s sessions?', ['R4', 'R8'], [
      O('a', 'Use the tool, since center leadership approved the pilot, and mention it to him if he ever asks how notes are written.', -1,
        { r: 'Institutional approval is not consent', approach: 'Policy-as-consent framing', why: 'Agency approval of a tool does not replace the client\'s informed consent to having sessions recorded', keys: ['not yet discussed with him'], mistake: 'Assuming institutional approval substitutes for client consent' }),
      O('b', 'Turn on the recording quietly to avoid raising his self-consciousness, since being recorded may worsen his anxiety.', -2,
        { r: 'Covert recording', approach: 'Protective nondisclosure', why: 'Recording without the client\'s knowledge violates informed consent and privacy, whatever the clinical rationale', keys: ['session recording'], mistake: 'Withholding information to protect the client from discomfort' }),
      O('c', 'Mention in passing that sessions may be recorded for notes, and proceed with the tool unless he objects in that session.', 0,
        { r: 'Disclosure without true consent', approach: 'Opt-out notice', why: 'A passing mention does not explain storage, data use, or his right to decline, so consent is not informed', keys: ['AI tool records sessions'], mistake: 'Treating a lack of objection as informed consent' }),
      O('d', 'Explain how the tool records, stores, and uses his data, obtain his informed consent, and let him decline without penalty.', 3,
        { r: 'Specific informed consent for AI tools', approach: 'Technology-specific consent', why: 'Clients must understand how an AI tool captures, stores, and uses their information and be free to decline before it is used', keys: ['records sessions to draft notes', 'pilot not yet discussed'], mistake: 'Adopting AI documentation tools without specific informed consent' }),
    ]),
    Q('q13', 'legal', 'How should the counselor respond to Dr. Hollis\'s phone call?', ['R4'], [
      O('a', 'Confirm only what his release covers, his attendance and the presentation plan, and decline to discuss any diagnosis.', 3,
        { r: 'Stays within the release', approach: 'Minimum necessary disclosure', why: 'The release authorizes confirming attendance and supporting the plan; diagnosis and readiness judgments fall outside it', keys: ['release limited to attendance and plan', 'asks about diagnosis'], mistake: 'Answering a stakeholder\'s questions beyond what the client authorized' }),
      O('b', 'Share his diagnosis and progress, since Dr. Hollis is his advisor and already knows he is receiving counseling.', -2,
        { r: 'Unauthorized disclosure', approach: 'Known-relationship framing', why: 'Knowing that a client attends counseling does not authorize disclosure of diagnosis or progress', keys: ['limited release'], mistake: 'Treating a stakeholder\'s awareness as permission to disclose' }),
      O('c', 'Decline to confirm anything at all and ask Dr. Hollis to speak with Tomasz, even though a valid release is on file.', 0,
        { r: 'Overly restrictive', approach: 'Say-nothing framing', why: 'Caution is understandable, but the client authorized limited collaboration that supports his exposure plan', keys: ['valid release on file'], mistake: 'Refusing authorized collaboration out of excessive caution' }),
      O('d', 'Give a general sense of his readiness for the seminar without naming a diagnosis, since that reveals no real details.', -1,
        { r: 'Clinical opinion beyond the release', approach: 'Soft disclosure', why: 'A readiness judgment is clinical information about him that the release does not cover', keys: ['asks if he will be ready'], mistake: 'Believing that omitting the diagnosis makes other clinical disclosures acceptable' }),
    ]),
  ],
};

// ============================================================================
// D926 — Specific Phobia, Animal Type · medium · adult · plan 6
// ============================================================================
const D926 = {
  id: 'ncmhce-D926',
  title: 'A veterinary technology student whose fear of dogs stands between her and graduation',
  category: 'Anxiety',
  difficulty: 'medium',
  plan: 6,
  population: 'adult',
  primaryDiagnosis: { name: 'Specific Phobia, Animal Type', code: 'F40.218' },
  diagnosis: { name: 'Specific Phobia, Animal Type', code: 'F40.218' },
  differentialOptions: [
    { id: 'do1', name: 'Posttraumatic Stress Disorder', isCorrect: false },
    { id: 'do2', name: 'Panic Disorder', isCorrect: false },
    { id: 'do3', name: 'Specific Phobia, Animal Type', isCorrect: true },
    { id: 'do4', name: 'Agoraphobia', isCorrect: false },
  ],
  narrative: {
    intake:
      'Leilani Kahananui, a 23-year-old Native Hawaiian second-year student in a veterinary technology associate program at a community college in ' +
      'Portland, Oregon, is referred by the program\'s clinical coordinator, Marcus Ortiz, after she froze, began wheezing, and left a skills lab when a ' +
      'leashed Labrador was brought in. Her required canine clinical rotation starts in 10 weeks. Since a neighbor\'s dog bit her forearm at age 7 (it ' +
      'needed stitches), she has feared dogs: she crosses streets to avoid them, skips gatherings at friends\' homes with dogs, and scans parks before ' +
      'entering; near a dog her heart pounds and she feels she must flee, though she calls the fear "way out of proportion." She works part-time at a ' +
      'cat-only boarding facility and loves cats, reptiles, and horses. She has no nightmares, intrusive memories, or flashbacks of the bite, recalls it ' +
      '"like a story I\'ve told a hundred times," and has no other trauma history. She has moderate persistent asthma treated with a daily controller and an ' +
      'albuterol rescue inhaler, which she used four times last week, and she says strong anxiety "sets off my chest." She drinks wine occasionally and ' +
      'denies suicidal thoughts. Informed consent for treatment has not yet been reviewed. The counselor, a lifelong dog lover who brings her golden retriever ' +
      'to the office on Fridays, notices a flash of impatience and the thought "dogs are harmless." As the intake ends, Leilani sees a photo of the ' +
      'retriever and half-jokes that she could dog-sit him for a weekend as practice in exchange for a reduced fee.',
    session1:
      'Leilani agrees to graduated exposure. The plan includes weekly 90-minute sessions, some held at a local animal shelter where a volunteer handler, ' +
      'Gary, can bring out a calm senior beagle; Leilani consents to the shelter sessions. Mr. Ortiz emails asking whether she will be able to complete the ' +
      'rotation, and Leilani asks the counselor to request a permanent exemption so she can "just specialize in cats." The program handbook states that ' +
      'canine handling competencies are required for graduation and credentialing. Leilani has signed a release for Mr. Ortiz limited to confirming ' +
      'attendance and supporting her treatment plan, and a release for her primary care nurse practitioner. Her asthma control over the past month is unclear.',
    session2:
      'By week six Leilani has moved from photos and videos to standing across a room from the leashed beagle. During the last shelter session a dog in a ' +
      'nearby kennel barked suddenly and she ran outside; today she says angrily, "You pushed me too fast. It felt like you didn\'t care." She still wants to ' +
      'continue and asks, before the next step of standing beside the beagle, "How long do I have to stay there?" The practice owner has just bought a ' +
      'virtual reality headset with dog-exposure scenarios and asks the counselor, who has no training in it, to start using it with Leilani. Leilani says ' +
      'that once she pets a dog she would love the practice to post her story and photo on its Instagram page. Her insurer covers extended sessions when ' +
      'medical necessity is documented; the shelter sessions run 90 minutes of face-to-face work, plus 20 minutes of travel each way for the counselor.',
  },
  diagnosticRationale:
    'Leilani has marked, persistent fear of dogs that is out of proportion to the actual danger, is provoked almost every time she encounters a dog, and ' +
    'leads to active avoidance; it has lasted far longer than six months and now threatens her training and career. The fear began after a dog bite, but ' +
    'she has no intrusion, negative mood, or arousal cluster beyond the phobic response and no trauma-reminder pattern, so PTSD is not supported. Her panic-like ' +
    'symptoms occur only on exposure to dogs rather than unexpectedly, and her avoidance is limited to one stimulus rather than agoraphobic situations. ' +
    'Asthma is a comorbid medical condition that changes how exposure is delivered rather than the diagnosis.',
  references: [
    { id: 'R1', source: 'DSM-5-TR', detail: 'Specific phobia, animal type: marked fear out of proportion, immediate fear response, avoidance, 6+ months, impairment; differential with PTSD and panic disorder' },
    { id: 'R2', source: 'Corey (Theory & Practice)', detail: 'Behavior therapy: graduated in vivo exposure, fear hierarchies, and the therapeutic relationship in exposure work' },
    { id: 'R3', source: 'ACA Code of Ethics', detail: 'Informed consent; boundaries and bartering; countertransference and personal values; confidentiality and minimum disclosure; testimonials from current clients; competence with new techniques' },
    { id: 'R4', source: 'Hays (Assessment)', detail: 'Differential assessment of trauma-related symptoms versus circumscribed fear; medical history in the biopsychosocial assessment' },
    { id: 'R5', source: 'Wiger (Documentation)', detail: 'Documentation supporting medical necessity: time, setting, interventions, response, and link to functional goals' },
    { id: 'R6', source: 'NBCC 2027 Spec', detail: 'Legal & Ethical Compliance tasks: technology-assisted tools such as virtual reality, billing and reimbursement documentation, appropriate marketing' },
    { id: 'R7', source: 'HIPAA', detail: 'Minimum necessary standard for disclosures to third parties' },
  ],
  questions: [
    // ---------------- intake (4): assess, profdev, assess, profdev ----------------
    Q('q1', 'assess', 'Which finding best supports specific phobia rather than posttraumatic stress disorder from the childhood bite?', ['R1', 'R4'], [
      O('a', 'She was bitten badly enough to need stitches, which shows that the bite itself was the starting point of her fear.', 0,
        { r: 'True, but does not discriminate', approach: 'Onset-event framing', why: 'A bite can begin either a phobia or PTSD; the event alone does not distinguish them', keys: ['bite at age 7'], mistake: 'Using the precipitating event rather than the symptom pattern to make the differential' }),
      O('b', 'Her racing heart and urge to flee near dogs show the hyperarousal that defines PTSD rather than a phobic reaction.', -1,
        { r: 'Misreads cue-bound fear', approach: 'Arousal-equals-PTSD framing', why: 'Cue-triggered arousal and escape urges are the core of a phobic response; PTSD needs intrusion, avoidance of reminders, mood, and arousal clusters', keys: ['fear only near dogs'], mistake: 'Treating any physiological fear response as evidence of PTSD' }),
      O('c', 'Her fear is set off by dogs themselves, without nightmares, intrusive memories, or other trauma symptoms since the bite.', 3,
        { r: 'Circumscribed fear without trauma clusters', approach: 'Apply the discriminator', why: 'The absence of intrusions, nightmares, and trauma-related mood changes, with fear tied to the animal itself, fits specific phobia', keys: ['recalls bite "like a story"', 'no nightmares or flashbacks'], mistake: 'Diagnosing PTSD whenever a fear began with a frightening event' }),
      O('d', 'Her wheezing during the skills lab shows that her reaction is mainly a medical asthma problem, not an anxiety disorder.', -2,
        { r: 'Dismisses the anxiety disorder', approach: 'Medicalizing framing', why: 'Asthma can be triggered by anxiety, but her lifelong avoidance of dogs is a phobia; dismissing it would leave her untreated', keys: ['avoidance since age 7', 'fear is "out of proportion"'], mistake: 'Letting a comorbid medical symptom replace the psychiatric picture' }),
    ]),
    Q('q2', 'profdev', 'How should the counselor handle her private reaction that dogs are harmless?', ['R3'], [
      O('a', 'Reflect on how her own attachment to dogs shapes her reactions and bring it to supervision so it does not steer pacing.', 3,
        { r: 'Self-reflection and supervision', approach: 'Manage countertransference', why: 'Noticing a personal value that could minimize the client\'s fear and processing it in supervision protects the pacing and the alliance', keys: ['flash of impatience', 'lifelong dog lover'], mistake: 'Ignoring a personal reaction that can quietly push exposure too fast' }),
      O('b', 'Set the reaction aside and proceed, since her own calm with dogs can help her model relaxed behavior during sessions.', 0,
        { r: 'Useful asset, unexamined bias', approach: 'Proceed as is', why: 'Modeling calm can help, but an unexamined belief that the fear is silly can still leak into pacing and responses', keys: ['"dogs are harmless"'], mistake: 'Assuming a personal reaction is harmless because it is not spoken aloud' }),
      O('c', 'Tell Leilani early on how much she loves dogs, to show her that dogs are safe and to give her a hopeful example to follow.', -2,
        { r: 'Self-disclosure that minimizes the fear', approach: 'Counselor-centered disclosure', why: 'Disclosure that serves the counselor\'s view of dogs invalidates the client\'s fear and can rupture the alliance early', keys: ['client calls the fear out of proportion'], mistake: 'Using self-disclosure to persuade rather than to serve the client' }),
      O('d', 'Refer Leilani to another counselor right away, since a counselor who owns a dog cannot treat a dog phobia objectively.', -1,
        { r: 'Unneeded referral', approach: 'Automatic referral', why: 'Owning a dog is not a conflict of interest; awareness and supervision address the reaction without delaying care', keys: ['rotation in 10 weeks'], mistake: 'Treating any personal reaction as disqualifying' }),
    ]),
    Q('q3', 'assess', 'What should the counselor cover when obtaining Leilani\'s informed consent for exposure-based treatment?', ['R3', 'R2'], [
      O('a', 'Describe exposure only in general terms, since detailed warnings about temporary anxiety might discourage her from starting.', -1,
        { r: 'Withholds material information', approach: 'Soft-pedal framing', why: 'Clients have a right to know that exposure temporarily raises anxiety; withholding it undermines consent and trust', keys: ['consent not yet reviewed'], mistake: 'Protecting engagement by limiting what the client is told' }),
      O('b', 'Explain the steps of exposure and its success rates, and plan to discuss the risks later once her confidence is higher.', 0,
        { r: 'Incomplete consent', approach: 'Benefits-first framing', why: 'Explaining the steps and evidence is right, but risks and alternatives belong in consent before treatment begins', keys: ['exposure about to begin'], mistake: 'Splitting consent so that risks are discussed after the client has started' }),
      O('c', 'Tell her that exposure is required to stay in the program, so declining treatment is not really an option for her now.', -2,
        { r: 'Coercive consent', approach: 'Program-pressure framing', why: 'Consent obtained by implying she has no choice is not voluntary, and the counselor does not set program requirements', keys: ['program pressure', 'voluntary treatment'], mistake: 'Using external pressure to secure agreement to treatment' }),
      O('d', 'Explain the rationale, the expected temporary rise in anxiety, alternatives, and her right to set the pace or to stop.', 3,
        { r: 'Complete, voluntary consent', approach: 'Full informed consent', why: 'Consent for exposure covers purpose, procedures, expected discomfort, alternatives, and the client\'s control over pace and withdrawal', keys: ['exposure-based plan', 'consent not yet reviewed'], mistake: 'Treating consent as a signature instead of an informed discussion' }),
    ]),
    Q('q4', 'profdev', 'How should the counselor respond to Leilani\'s offer to dog-sit the retriever in exchange for a reduced fee?', ['R3'], [
      O('a', 'Accept the dog-sitting as homework but keep her fee unchanged, so that no financial barter is part of the arrangement.', -1,
        { r: 'Still a dual relationship', approach: 'Remove the barter only', why: 'Removing the fee change does not fix the problem: caring for the counselor\'s pet creates a personal relationship outside counseling', keys: ['counselor\'s own dog'], mistake: 'Thinking a boundary issue is solved once money is taken out of it' }),
      O('b', 'Decline warmly, explain why mixing personal favors with counseling blurs roles, and plan exposures through other means.', 3,
        { r: 'Clear, warm boundary', approach: 'Maintain boundaries', why: 'Declining a barter and personal favor protects the counseling relationship, and planned exposures can be arranged without it', keys: ['offer to dog-sit for reduced fee'], mistake: 'Accepting an informal arrangement because it seems therapeutic' }),
      O('c', 'Decline the barter but suggest she drop by on Fridays to visit the counselor\'s dog informally as extra practice.', 0,
        { r: 'Smaller boundary blur', approach: 'Informal contact', why: 'Avoiding barter is right, but unstructured visits with the counselor\'s pet outside sessions still blur roles and are not planned exposure', keys: ['office dog on Fridays'], mistake: 'Replacing one boundary crossing with a smaller one' }),
      O('d', 'Accept the offer, since bartering services is a creative way to give intense exposure while easing her finances.', -2,
        { r: 'Barter and dual relationship', approach: 'Creative-arrangement framing', why: 'Bartering personal services with a client risks exploitation and creates an unplanned, uncontrolled exposure in the counselor\'s home', keys: ['counselor\'s pet', 'reduced fee'], mistake: 'Rationalizing a dual relationship as a treatment technique' }),
    ]),
    // ---------------- session1 (4): planning, indirect, indirect, planning ----------------
    Q('q5', 'planning', 'Before in vivo exposure begins, what should the counselor do about Leilani\'s asthma?', ['R2', 'R4'], [
      O('a', 'Begin with photos and videos only and delay any live-dog exposure until her asthma seems better on its own.', 0,
        { r: 'Graded start, no coordination', approach: 'Wait-and-see', why: 'Starting low is fine, but waiting without medical input leaves the contraindication question unresolved and stalls progress', keys: ['asthma control unclear'], mistake: 'Delaying instead of actively checking a possible contraindication' }),
      O('b', 'Proceed with live-dog exposure as planned, since her breathlessness is part of anxiety and pushing through will reduce it.', -2,
        { r: 'Ignores a medical risk', approach: 'Push-through framing', why: 'Anxiety can trigger asthma attacks; proceeding without checking control and rescue access puts her at real medical risk', keys: ['rescue inhaler four times last week'], mistake: 'Assuming all physical symptoms during exposure are anxiety' }),
      O('c', 'Rule out in vivo exposure entirely and use talk-based coping skills, since asthma makes exposure therapy unsafe.', -1,
        { r: 'Overcorrects', approach: 'Rule out exposure', why: 'Asthma calls for medical coordination, not abandoning the most effective treatment for her phobia', keys: ['rotation in 10 weeks'], mistake: 'Treating a manageable medical issue as an absolute contraindication' }),
      O('d', 'With consent, consult her prescriber about asthma control and keep her rescue inhaler on hand during exposures.', 3,
        { r: 'Check the contraindication', approach: 'Medical coordination before exposure', why: 'Confirming asthma control with the prescriber and keeping rescue medication available makes exposure safe without abandoning it', keys: ['moderate persistent asthma', 'anxiety "sets off my chest"'], mistake: 'Starting exposure without checking a known medical risk' }),
    ]),
    Q('q6', 'indirect', 'How should the counselor respond to Leilani\'s request to seek a permanent exemption from the canine rotation?', ['R3', 'R7'], [
      O('a', 'Write to Mr. Ortiz requesting the exemption, since advocating for what the client asks is the counselor\'s main role.', -1,
        { r: 'Advocacy that feeds avoidance', approach: 'Literal advocacy', why: 'An exemption request exceeds the release, works against her goal of graduating, and reinforces avoidance', keys: ['canine competencies required', 'release limited'], mistake: 'Equating advocacy with carrying out every request' }),
      O('b', 'Tell Leilani that the program will not grant it and leave any contact with Mr. Ortiz entirely to her to arrange.', 0,
        { r: 'Accurate but unhelpful', approach: 'Reality-test and withdraw', why: 'The handbook supports the point, but declining all collaboration wastes a release she signed to support her plan', keys: ['release for Mr. Ortiz'], mistake: 'Stepping back from stakeholder collaboration the client authorized' }),
      O('c', 'Explore her goals, then within her release work with Mr. Ortiz on a timeline that supports graduated canine exposure.', 3,
        { r: 'Goal-focused stakeholder collaboration', approach: 'Collaborate within consent', why: 'Exploring her ambivalence and working with the program inside the release supports both her career goal and the exposure plan', keys: ['release limited to attendance and plan', 'canine competencies required'], mistake: 'Acting on a request without exploring how it fits the client\'s goals' }),
      O('d', 'Send Mr. Ortiz her full intake summary, including the bite and her asthma, so the program can judge her fitness.', -2,
        { r: 'Discloses beyond the release', approach: 'Full-record disclosure', why: 'The release covers attendance and plan support only; sending history and health information violates confidentiality', keys: ['limited release'], mistake: 'Assuming a release for one purpose covers the whole record' }),
    ]),
    Q('q7', 'indirect', 'How should the counselor coordinate with Gary, the shelter volunteer who will handle the dog?', ['R7', 'R2'], [
      O('a', 'With her consent, tell Gary only what the exposures need, such as pacing and leash control, not her history.', 3,
        { r: 'Minimum necessary collaboration', approach: 'Consent-based stakeholder briefing', why: 'The handler needs clear instructions to run safe, graded exposures, but not her diagnosis or history', keys: ['volunteer handler', 'calm senior beagle'], mistake: 'Either over-sharing with a non-clinical helper or giving him too little to do the job' }),
      O('b', 'Share her diagnosis and bite history with the shelter staff so they understand why the sessions are being held there.', -2,
        { r: 'Unnecessary disclosure', approach: 'Explain everything', why: 'Diagnosis and history are not needed for the handler\'s role and exceed what she has authorized', keys: ['non-clinical stakeholder'], mistake: 'Believing helpers need the clinical story to be helpful' }),
      O('c', 'Tell Gary nothing about the purpose and simply ask for a calm dog to be brought out at set times during each visit.', 0,
        { r: 'Too little coordination', approach: 'Minimal contact', why: 'Protecting privacy is right, but a handler with no guidance on pacing or distance cannot support graded exposure', keys: ['graded exposure needs control'], mistake: 'Under-briefing a stakeholder whose actions shape the intervention' }),
      O('d', 'Let Leilani decide during each visit what to tell Gary, without any plan for the handler\'s role in the exposures.', -1,
        { r: 'No plan for the handler', approach: 'Ad hoc coordination', why: 'Leaving the briefing unplanned shifts the work to the client and makes exposures unpredictable', keys: ['off-site sessions'], mistake: 'Leaving stakeholder coordination to chance' }),
    ]),
    Q('q8', 'planning', 'Which plan element best fits Leilani\'s goal of starting the canine rotation in 10 weeks?', ['R2'], [
      O('a', 'Rely on cognitive restructuring of her beliefs about dogs, adding exposure only if her thoughts shift first.', -1,
        { r: 'Withholds the active ingredient', approach: 'Cognition-first plan', why: 'Exposure is the core treatment for specific phobia; waiting for beliefs to change first slows or blocks progress', keys: ['10-week deadline'], mistake: 'Treating cognitive change as a prerequisite for exposure' }),
      O('b', 'A graded hierarchy from photos to a calm leashed dog to handling, with weekly SUDS ratings and a 10-week target.', 3,
        { r: 'Graded, measurable, time-bound', approach: 'Graduated exposure plan', why: 'A stepwise hierarchy with regular ratings and a deadline tied to her rotation is the evidence-based, measurable plan', keys: ['rotation in 10 weeks', 'shelter sessions available'], mistake: 'Writing a plan without steps, measures, or a timeline' }),
      O('c', 'One prolonged flooding session with an unfamiliar large dog, so she can face her worst fear before the rotation.', -2,
        { r: 'Unsafe and unconsented intensity', approach: 'Flooding', why: 'Flooding with an unfamiliar dog risks injury, an asthma attack, and dropout in a client who wants graded work', keys: ['asthma', 'wheezing in skills lab'], mistake: 'Choosing maximum intensity over safety and client choice' }),
      O('d', 'A graded hierarchy from photos to handling dogs, starting after her rotation so the time pressure is off.', 0,
        { r: 'Right method, wrong timing', approach: 'Defer the plan', why: 'The method is sound, but postponing it until after the rotation defeats her stated goal', keys: ['rotation is the goal'], mistake: 'Getting sequencing wrong relative to the client\'s deadline' }),
    ]),
    // ---------------- session2 (5): legal, interventions, interventions, legal, legal ----------------
    Q('q9', 'legal', 'The practice owner asks the counselor to start using the new VR dog-exposure headset with Leilani. What should the counselor do first?', ['R3', 'R6'], [
      O('a', 'Use the headset in the next session, since the vendor\'s tutorial video covers what is needed to run it with clients.', -1,
        { r: 'Inadequate training', approach: 'Vendor-tutorial framing', why: 'A product video is not training in using virtual reality exposure clinically', keys: ['no training in the tool'], mistake: 'Equating product familiarity with clinical competence' }),
      O('b', 'Let Leilani take the headset home to practice alone, since more exposure time between sessions speeds her progress.', -2,
        { r: 'Unsupervised, unvetted use', approach: 'Home-practice framing', why: 'Sending an untested device home without training, consent, or privacy review risks poorly graded exposure and data exposure', keys: ['new tool', 'recent rupture over pacing'], mistake: 'Expanding a technology tool before it is vetted' }),
      O('c', 'Get training in the tool, review its data privacy, and obtain Leilani\'s informed consent before adding it to her plan.', 3,
        { r: 'Competence, privacy, consent', approach: 'Vet the technology first', why: 'Technology-assisted tools require counselor competence, a privacy review, and specific client consent before use', keys: ['no training', 'owner request'], mistake: 'Adopting a tool because the employer purchased it' }),
      O('d', 'Obtain Leilani\'s consent to try the headset, then learn how the tool works by using it with her during the session.', 0,
        { r: 'Consent without competence', approach: 'Learn on the job', why: 'Consent is necessary, but learning the tool with the client risks poorly paced exposure', keys: ['no training in VR'], mistake: 'Treating consent as sufficient for an untrained technique' }),
    ]),
    Q('q10', 'interventions', 'How should the counselor respond to Leilani\'s anger that she was pushed too fast?', ['R2'], [
      O('a', 'Explain that exposure is supposed to feel uncomfortable, so the barking episode was part of the plan and not a problem.', -1,
        { r: 'Defensive response', approach: 'Justify the method', why: 'Explaining the rationale defensively dismisses her experience and can widen the rupture', keys: ['"it felt like you didn\'t care"'], mistake: 'Defending the treatment instead of attending to the relationship' }),
      O('b', 'Apologize and agree to go back to photos and videos for several weeks so that she can feel safe with exposure again.', 0,
        { r: 'Repair by retreat', approach: 'Unilateral step-back', why: 'Apologizing helps, but deciding on a large retreat without exploring what happened may reinforce avoidance', keys: ['she still wants to continue'], mistake: 'Resolving a rupture by giving up treatment gains' }),
      O('c', 'Tell her that the anger shows avoidance, and that she must commit fully to exposure or else consider ending treatment.', -2,
        { r: 'Blames and threatens', approach: 'Confrontation', why: 'Framing her feedback as resistance and threatening termination damages the alliance and risks dropout', keys: ['rupture after barking'], mistake: 'Interpreting rupture as client resistance' }),
      O('d', 'Acknowledge her experience without defensiveness, explore what felt rushed, and agree together on the pace going forward.', 3,
        { r: 'Repair the rupture collaboratively', approach: 'Rupture repair', why: 'Nondefensive acknowledgment and joint decisions about pacing repair the alliance and keep exposure on track', keys: ['angry feedback', 'wants to continue'], mistake: 'Either defending or abandoning the plan instead of repairing together' }),
    ]),
    Q('q11', 'interventions', 'How should the counselor answer Leilani\'s question about how long she must stay beside the beagle?', ['R2'], [
      O('a', 'Agree on her feared prediction first, then stay with the dog until she can test it, not leave at the peak of her fear.', 3,
        { r: 'Test the prediction', approach: 'Expectancy-violation exposure', why: 'Naming the feared outcome and staying long enough to test it gives her new learning that the dog will not attack', keys: ['next step: standing beside the beagle'], mistake: 'Ending exposure on a fixed clock or at peak fear' }),
      O('b', 'Stay until her anxiety rating drops to half of its peak, since a clear drop in fear shows that the exposure has worked.', 0,
        { r: 'Habituation-only rule', approach: 'SUDS-drop rule', why: 'Within-session fear reduction is a reasonable guide, but learning that the feared outcome did not occur matters more', keys: ['SUDS ratings'], mistake: 'Treating a drop in anxiety as the only marker of a successful exposure' }),
      O('c', 'Leave whenever her anxiety goes above 7 out of 10, so that the exposures stay tolerable and she keeps coming back.', -1,
        { r: 'Builds in escape', approach: 'Escape-at-threshold', why: 'Leaving at high anxiety reinforces escape and teaches that fear must be avoided', keys: ['ran out after barking'], mistake: 'Confusing tolerability with allowing escape at peak fear' }),
      O('d', 'Stay as long as the counselor decides, even if she asks to stop or needs her inhaler, so she cannot escape the fear.', -2,
        { r: 'Coercive and medically unsafe', approach: 'No-exit exposure', why: 'Overriding her right to stop and her need for rescue medication violates consent and risks an asthma emergency', keys: ['asthma', 'right to stop'], mistake: 'Treating client control and medical safety as obstacles' }),
    ]),
    Q('q12', 'legal', 'How should the counselor respond to Leilani\'s wish to have her story and photo posted on the practice\'s Instagram?', ['R3', 'R6'], [
      O('a', 'Post it with her written consent, since she offered it freely and a success story could encourage others to seek help.', -1,
        { r: 'Testimonial from a current client', approach: 'Consent-is-enough framing', why: 'Consent does not remove the undue-influence concern of using a current client\'s story to market the practice', keys: ['current client', 'practice marketing'], mistake: 'Believing written consent makes any marketing use acceptable' }),
      O('b', 'Thank her, explain the practice does not post current clients\' stories, and explore what sharing publicly could mean.', 3,
        { r: 'Protects client and relationship', approach: 'Decline and explore', why: 'Avoiding testimonials from current clients prevents undue influence and protects her privacy, while honoring her pride', keys: ['asks the practice to post her story'], mistake: 'Using a client\'s enthusiasm for marketing purposes' }),
      O('c', 'Agree to post it after treatment ends, once she signs a written release covering both the photo and her story.', 0,
        { r: 'Better timing, still risky', approach: 'Defer and release', why: 'Waiting until after termination lowers the risk, but promising now still ties her care to the practice\'s marketing', keys: ['ongoing treatment'], mistake: 'Treating a future testimonial promise as harmless' }),
      O('d', 'Post the photo and story right away while she is excited, and collect her written consent at a later session.', -2,
        { r: 'Disclosure before consent', approach: 'Post first', why: 'Publishing a client\'s identifiable image and treatment story before written consent is a confidentiality breach', keys: ['identifiable photo'], mistake: 'Treating verbal enthusiasm as consent to public disclosure' }),
    ]),
    Q('q13', 'legal', 'How should the counselor document the 90-minute shelter sessions for insurance billing?', ['R5', 'R6'], [
      O('a', 'Bill them as standard office sessions at the usual code, since the insurer does not need to know where they took place.', -2,
        { r: 'Misrepresents the service', approach: 'Simplify the claim', why: 'Billing a different service than the one delivered is a false claim, whatever the convenience', keys: ['90-minute off-site sessions'], mistake: 'Treating claim details as an administrative formality' }),
      O('b', 'Bill the 90 minutes with a brief note that exposure was done, and add further detail only if the insurer requests it.', 0,
        { r: 'Thin documentation', approach: 'Minimal note', why: 'The time is accurate, but extended sessions need documentation of medical necessity at the time of service', keys: ['insurer requires documented necessity'], mistake: 'Documenting after the fact instead of at the time of service' }),
      O('c', 'Record the actual start and end times, setting, interventions, and her response, linked to her functional goals.', 3,
        { r: 'Documentation supports the claim', approach: 'Medical-necessity documentation', why: 'Accurate time, setting, interventions, and progress toward functional goals support the extended-session claim', keys: ['extended sessions', 'rotation goal'], mistake: 'Submitting claims that the record does not support' }),
      O('d', 'Include the travel time to the shelter in the billed minutes, since the counselor was working on her case throughout.', -1,
        { r: 'Bills non-face-to-face time', approach: 'Inflate time', why: 'Travel time is not psychotherapy time and should not be billed as part of the session', keys: ['20 minutes travel each way'], mistake: 'Counting all case-related time as billable session time' }),
    ]),
  ],
};

// ============================================================================
// D927 — Agoraphobia · hard · older_adult · plan 7
// ============================================================================
const D927 = {
  id: 'ncmhce-D927',
  title: 'A retired librarian who stopped leaving home after a fall in the supermarket',
  category: 'Anxiety',
  difficulty: 'hard',
  plan: 7,
  population: 'older_adult',
  primaryDiagnosis: { name: 'Agoraphobia', code: 'F40.00' },
  diagnosis: { name: 'Agoraphobia', code: 'F40.00' },
  differentialOptions: [
    { id: 'do1', name: 'Panic Disorder', isCorrect: false },
    { id: 'do2', name: 'Agoraphobia', isCorrect: true },
    { id: 'do3', name: 'Major Neurocognitive Disorder', isCorrect: false },
    { id: 'do4', name: 'Major Depressive Disorder', isCorrect: false },
    { id: 'do5', name: 'Anxiety Disorder Due to Another Medical Condition', isCorrect: false },
  ],
  narrative: {
    intake:
      'Rita Delgado, a 74-year-old retired Puerto Rican school librarian, widowed three years, lives alone in Tampa, Florida. Her parish nurse referred her ' +
      'after she stopped attending Mass. Because Rita says she cannot leave home, the Florida-licensed counselor begins the intake by video. Nine months ' +
      'ago Rita fell in a supermarket aisle and bruised her hip. Since then she will not ride the bus, enter the supermarket or pharmacy, stand in lines, ' +
      'or attend church, fearing she will "have one of my spells," fall, and be unable to get help or be embarrassed. She leaves home only for medical ' +
      'visits, driven by her daughter Marisol, who lives 20 minutes away, and she will not walk to the mailbox at the end of her driveway even with Marisol ' +
      'beside her. Asked about the spells, she says her heart "flutters and races" and she gets light-headed, "worse when I get up fast from the bed," and ' +
      'adds that they began in the spring, "around when Dr. Patel added the water pill and the little white pill for my pressure." The fall came a few weeks ' +
      'later. Near the end she says, "Don\'t worry about me, I\'m strong. If I fell one day and nobody found me, well, maybe that\'s God\'s way. I\'ve had a ' +
      'good life," and mentions that she keeps her late husband Ramón\'s revolver, loaded, in her nightstand "since I\'m alone." She wears hearing aids. ' +
      'Marisol, joining briefly with Rita\'s permission, worries about her mother\'s memory, and the counselor, who has never been trained in the Montreal ' +
      'Cognitive Assessment (MoCA), plans to give it by video next session. The counselor\'s own mother broke her hip in a fall two months ago, and during the ' +
      'intake she notices a strong urge to tell Rita to stay home and be careful. No emergency plan or session location has yet been set for telehealth.',
    session1:
      'A structured suicide-risk screen at the end of the intake found a passive wish to die without intent, plan, or past attempts; Rita and the counselor ' +
      'completed a safety plan, and with Rita\'s agreement Marisol took the revolver to her own home. In this session Rita admits she has been skipping the ' +
      '"little white pill" on days she feels dizzy, without telling Dr. Patel, for whom she has signed a release. Marisol joins with Rita\'s consent; she ' +
      'does all of her mother\'s shopping and errands and asks the counselor to "call me after every session and tell me what she says." The counselor is ' +
      'deciding what the first phase of treatment should include.',
    session2:
      'Dr. Patel found orthostatic hypotension related to the new blood pressure medication and adjusted it; a heart monitor showed no arrhythmia. Her ' +
      'spells are now rare, and she is cleared for graded activity with a physical therapy referral for balance. Rita often mishears the counselor over ' +
      'video and asks her to "just talk louder"; the platform offers live captions. She says, "In our family you don\'t leave the old ones alone. Marisol ' +
      'should take care of me, like I cared for my mother," and wants her first outing to be Christmas Eve Mass, three weeks away. Midway through today\'s session, at her home ' +
      'address confirmed at the start, Rita stands to fetch her glasses, says "ay, I\'m dizzy," and falls out of view; she says her hip hurts, and the ' +
      'connection drops.',
  },
  diagnosticRationale:
    'Rita has marked fear and avoidance of at least three agoraphobic situations (public transportation, enclosed places such as stores and church, ' +
    'standing in line, and being outside the home alone) because escape or help might be unavailable if she falls or has a spell, lasting nine months with ' +
    'major functional decline. A medical condition contributes: her light-headedness began with a new antihypertensive and worsens on standing, which ' +
    'proved to be orthostatic hypotension. DSM-5-TR permits the diagnosis when a medical condition is present only if the fear and avoidance are clearly ' +
    'excessive; refusing to walk to the mailbox even with her daughter beside her meets that bar. Her spells are tied to posture and medication rather ' +
    'than unexpected panic attacks, memory concerns are unassessed rather than established, and her passive death wish requires risk management but does ' +
    'not by itself establish a depressive disorder.',
  references: [
    { id: 'R1', source: 'DSM-5-TR', detail: 'Agoraphobia: fear in 2+ of 5 situations, 6+ months; if a medical condition is present, fear and avoidance must be clearly excessive; differential with panic disorder and anxiety due to a medical condition' },
    { id: 'R2', source: 'C-SSRS', detail: 'Structured screening of passive and active suicidal ideation, intent, plan, and behavior' },
    { id: 'R3', source: 'Stanley-Brown SPI', detail: 'Collaborative safety planning including making the environment safer by reducing access to lethal means' },
    { id: 'R4', source: 'ACA Code of Ethics', detail: 'Distance counseling: verifying client location, emergency procedures, accessibility; competence in assessment instruments; confidentiality with family; personal values and countertransference' },
    { id: 'R5', source: 'HIPAA', detail: 'Privacy and Security Rules: clinical information kept in secured, access-controlled practice systems; disclosure to emergency responders and family in an emergency' },
    { id: 'R6', source: 'Wiger (Documentation)', detail: 'Documenting client-reported medication effects and adherence; communicating with prescribers; prompt, factual documentation of critical incidents' },
    { id: 'R7', source: 'Corey (Theory & Practice)', detail: 'Graded in vivo exposure, multicultural counseling, and family values such as familismo in treatment planning' },
    { id: 'R8', source: 'Hays (Assessment)', detail: 'Competence and training requirements for administering cognitive screening instruments; older adult assessment' },
  ],
  questions: [
    // ---------------- intake (4): profdev, profdev, assess, assess ----------------
    Q('q1', 'profdev', 'How should the counselor address her own reaction to Rita\'s account of the fall?', ['R4'], [
      O('a', 'Share her mother\'s recent hip fracture with Rita to build rapport and show she understands how frightening falls are.', -1,
        { r: 'Self-disclosure serving the counselor', approach: 'Rapport through disclosure', why: 'Disclosing a fresh personal loss centers the counselor\'s experience and can reinforce Rita\'s view that going out is dangerous', keys: ['mother fell two months ago'], mistake: 'Using personal disclosure to manage the counselor\'s own feelings' }),
      O('b', 'Encourage Rita to keep staying home for now, since the counselor\'s own experience shows falls in older adults are dangerous.', -2,
        { r: 'Countertransference shapes treatment', approach: 'Protective advice', why: 'Acting on the urge to protect reinforces the avoidance that maintains agoraphobia and deepens Rita\'s isolation', keys: ['urge to tell Rita to stay home'], mistake: 'Letting a personal experience direct clinical recommendations' }),
      O('c', 'Recognize the urge to protect Rita as linked to her mother\'s fall and take it to supervision so it does not shape the plan.', 3,
        { r: 'Self-awareness and supervision', approach: 'Manage countertransference', why: 'Naming the source of the reaction and processing it in supervision keeps the counselor from colluding with avoidance', keys: ['mother broke her hip', 'strong urge to protect'], mistake: 'Missing how a recent personal event is shaping clinical judgment' }),
      O('d', 'Keep the reaction private and monitor it on her own, raising it in supervision only if it starts to affect her sessions.', 0,
        { r: 'Awareness without consultation', approach: 'Self-monitoring only', why: 'Self-monitoring is a start, but the reaction is already strong; waiting for visible effects risks subtle collusion', keys: ['urge already present at intake'], mistake: 'Assuming one can catch one\'s own blind spots without consultation' }),
    ]),
    Q('q2', 'profdev', 'What should the counselor do about her plan to give Rita the MoCA by video?', ['R8', 'R4'], [
      O('a', 'Complete the required MoCA training before using it, or coordinate cognitive screening through Rita\'s physician.', 3,
        { r: 'Assessment competence', approach: 'Train or refer', why: 'Counselors use only instruments they are trained to administer; the MoCA requires training, and her physician can screen meanwhile', keys: ['never trained in the MoCA', 'Marisol\'s memory concern'], mistake: 'Administering a cognitive screen without the required training' }),
      O('b', 'Give the MoCA by video as planned, noting in the report that remote scores may be less reliable than in-person ones.', -1,
        { r: 'Caveat does not fix competence', approach: 'Administer with caveats', why: 'Noting reduced reliability does not address the counselor\'s lack of training in the instrument', keys: ['untrained in the MoCA'], mistake: 'Believing a disclaimer substitutes for competence' }),
      O('c', 'Postpone cognitive screening until the anxiety improves, since worry can lower scores on memory tests in older adults.', 0,
        { r: 'Valid point, unaddressed concern', approach: 'Defer screening', why: 'Anxiety can depress scores, but the family concern still deserves screening by someone qualified rather than indefinite delay', keys: ['Marisol worries about memory'], mistake: 'Delaying a reasonable screening instead of routing it appropriately' }),
      O('d', 'Diagnose a mild neurocognitive disorder from Marisol\'s report, since a family member\'s observations are enough.', -2,
        { r: 'Diagnosis without assessment', approach: 'Collateral-only diagnosis', why: 'Family concern is not evidence of cognitive impairment; a premature label could change how Rita is treated and how she sees herself', keys: ['no testing done'], mistake: 'Diagnosing from collateral worry alone' }),
    ]),
    Q('q3', 'assess', 'Which element of telehealth informed consent is most essential to establish at the start of Rita\'s video intake?', ['R4'], [
      O('a', 'A list of the platform\'s technical features, so Rita can use screen sharing and chat functions in later sessions.', -1,
        { r: 'Features over safety', approach: 'Tech orientation', why: 'Orientation is useful, but it does not address location, emergencies, or what happens if she falls', keys: ['lives alone', 'history of falls'], mistake: 'Prioritizing platform features over emergency planning' }),
      O('b', 'Her physical address, a local emergency contact, and a plan for what to do if she falls or the connection drops.', 3,
        { r: 'Location and emergency plan', approach: 'Telehealth safety set-up', why: 'Telehealth best practice requires knowing where the client is and how to reach local help, especially for an older adult who lives alone and has fallen', keys: ['no emergency plan yet', 'lives alone', 'falls'], mistake: 'Starting telehealth without a location and emergency plan' }),
      O('c', 'A general statement that video sessions carry privacy risks, with details given in a handout she can read later.', 0,
        { r: 'Necessary but not the priority', approach: 'Privacy disclosure', why: 'Privacy risks belong in telehealth consent, but they do not cover her most pressing safety needs', keys: ['fall risk'], mistake: 'Treating privacy disclosure as the whole of telehealth consent' }),
      O('d', 'Her agreement to call 911 herself if anything goes wrong, so the counselor does not need her address on file.', -2,
        { r: 'No usable emergency plan', approach: 'Client-managed emergencies', why: 'A client who has fallen or is incapacitated cannot call for help; the counselor needs her address to summon it', keys: ['fell before', 'lives alone'], mistake: 'Shifting emergency responsibility entirely to the client' }),
    ]),
    Q('q4', 'assess', 'How should the counselor respond to Rita\'s remark about not being found after a fall and the revolver in her nightstand?', ['R2', 'R3'], [
      O('a', 'Ask whether she feels safe, accept her reassurance that she would not act on it, and revisit if her mood worsens.', 0,
        { r: 'Too thin with a firearm present', approach: 'Single safety question', why: 'Asking directly is right, but a passive death wish plus a loaded firearm calls for structured assessment and means safety now', keys: ['loaded revolver', 'lives alone'], mistake: 'Accepting reassurance when lethal means are in the home' }),
      O('b', 'Have her sign a written promise not to harm herself, then return to her anxiety symptoms for the rest of the session.', -2,
        { r: 'No-suicide contract', approach: 'Contract for safety', why: 'No-suicide contracts are not protective and leave risk and firearm access unassessed', keys: ['passive death wish', 'loaded revolver'], mistake: 'Using a contract in place of assessment and safety planning' }),
      O('c', 'Treat the remark as a cultural expression of faith rather than a risk factor, since it reflects her religious beliefs.', -1,
        { r: 'Explains away a risk statement', approach: 'Cultural normalization', why: 'Faith may shape her words, but a statement about welcoming death still requires assessment, especially with a gun at home', keys: ['"maybe that\'s God\'s way"'], mistake: 'Using culture or religion to dismiss a possible suicide warning sign' }),
      O('d', 'Assess suicidal thinking with a structured tool and discuss safer storage of the revolver, involving Marisol if she agrees.', 3,
        { r: 'Structured assessment and means safety', approach: 'Assess and reduce lethal means', why: 'A passive death wish buried in reassurance, in an isolated older adult with a loaded firearm, requires structured screening and lethal-means counseling', keys: ['"maybe that\'s God\'s way"', 'loaded revolver in nightstand'], mistake: 'Taking "don\'t worry about me" at face value' }),
    ]),
    // ---------------- session1 (4): indirect, indirect, planning, planning ----------------
    Q('q5', 'indirect', 'How should the counselor handle Rita\'s report that she skips the blood pressure pill on dizzy days?', ['R6'], [
      O('a', 'Document her report in her own words, including the dizziness and skipped doses, and with consent inform Dr. Patel.', 3,
        { r: 'Document and coordinate', approach: 'Record self-report, notify prescriber', why: 'Self-reported side effects and nonadherence belong in the record and, with her release, go to the prescriber who can act on them', keys: ['skips the pill', 'release for Dr. Patel'], mistake: 'Leaving medically important reports undocumented or uncommunicated' }),
      O('b', 'Encourage her to take the pill every day as prescribed, since skipping doses could raise her blood pressure dangerously.', -1,
        { r: 'Medication advice outside scope', approach: 'Adherence coaching', why: 'Well-meant, but directing medication use is the prescriber\'s role, and the dizziness itself needs medical review', keys: ['dizziness on the pill'], mistake: 'Giving medication instructions without the prescriber' }),
      O('c', 'Suggest she bring up the dizziness at her next scheduled checkup, and note in the record that medication was discussed.', 0,
        { r: 'Delayed and vague', approach: 'Defer to next visit', why: 'Encouraging her to tell the doctor is right, but a vague note and waiting for a routine visit miss an active fall risk', keys: ['fall risk', 'release on file'], mistake: 'Documenting vaguely and delaying communication about a safety-relevant report' }),
      O('d', 'Advise her to keep skipping the pill on dizzy days, since the dizziness is causing falls and making her anxiety worse.', -2,
        { r: 'Directs a medication change', approach: 'Counselor adjusts medication', why: 'Endorsing self-directed dosing of an antihypertensive is outside scope and medically unsafe', keys: ['antihypertensive'], mistake: 'Making medication decisions because the reasoning seems sound' }),
    ]),
    Q('q6', 'indirect', 'How should the counselor respond to Marisol\'s request for a call after every session?', ['R4', 'R7'], [
      O('a', 'Agree to call Marisol after each session with a summary, since she is family and closely involved in Rita\'s daily care.', -2,
        { r: 'Breaches the client\'s confidentiality', approach: 'Family-reporting framing', why: 'Rita is a competent adult; sharing session content without her consent violates confidentiality and undermines her autonomy', keys: ['competent adult client'], mistake: 'Treating an involved family member as entitled to session content' }),
      O('b', 'Decline to involve Marisol at all, to protect Rita\'s privacy and avoid strengthening Rita\'s reliance on her daughter.', 0,
        { r: 'Loses a key support', approach: 'Exclude family', why: 'Privacy matters, but Marisol is central to Rita\'s daily life and can support the plan with Rita\'s consent', keys: ['Marisol runs all errands'], mistake: 'Excluding a support system instead of defining its role' }),
      O('c', 'Ask Rita what she wants shared, then involve Marisol in planning how to step back gradually as Rita builds skills.', 3,
        { r: 'Consent-based family collaboration', approach: 'Collaborate with support system', why: 'Rita decides what is shared, and Marisol becomes a partner in gradually reducing the accommodation that maintains avoidance', keys: ['Marisol does all errands', 'joins with consent'], mistake: 'Either over-sharing with family or leaving them out of the plan' }),
      O('d', 'Advise Marisol to stop running all errands right away, so that Rita is pushed to begin leaving the house on her own.', -1,
        { r: 'Abrupt withdrawal of support', approach: 'Force independence', why: 'Removing help suddenly, before skills and medical clearance, is more likely to isolate Rita than to reduce avoidance', keys: ['spells not yet evaluated'], mistake: 'Confusing abrupt removal of support with graded exposure' }),
    ]),
    Q('q7', 'planning', 'Given Rita\'s spells, what should the first phase of the treatment plan include?', ['R1', 'R6'], [
      O('a', 'Interoceptive exposure, such as standing up quickly, to show her the dizziness is harmless anxiety she can tolerate.', -2,
        { r: 'Contraindicated before medical review', approach: 'Interoceptive exposure', why: 'Her dizziness worsens on standing and began with a new antihypertensive; provoking it could cause another fall', keys: ['worse when she gets up fast', 'new blood pressure pill'], mistake: 'Assuming physical symptoms are anxiety before a medical cause is ruled out' }),
      O('b', 'Graded walks outside right away, asking Rita to sit down if she gets dizzy while her physician reviews the spells.', 0,
        { r: 'Right method, wrong sequence', approach: 'Start exposure now', why: 'Graded exposure is the eventual treatment, but beginning before the spells are evaluated risks a fall', keys: ['spells unexplained', 'prior fall'], mistake: 'Starting exposure before checking a medical contraindication' }),
      O('c', 'Breathing retraining alone, treating the spells as panic attacks, since medical causes are not a counseling concern.', -1,
        { r: 'Misattributes the spells', approach: 'Panic-only framing', why: 'Her spells are positional and began with a medication change; treating them as panic misses a medical cause', keys: ['onset with new medication'], mistake: 'Viewing medical rule-outs as outside the counselor\'s concern' }),
      O('d', 'A request that Dr. Patel evaluate the spells, with psychoeducation and coping skills while exposure awaits clearance.', 3,
        { r: 'Medical rule-out before exposure', approach: 'Check contraindications', why: 'Positional light-headedness that began with a new antihypertensive needs medical evaluation before exposure; skills work can start now', keys: ['spells began with new pills', 'worse on standing'], mistake: 'Either ignoring the medical picture or stalling all treatment' }),
    ]),
    Q('q8', 'planning', 'Which initial treatment goal is most appropriate for Rita?', ['R7', 'R1'], [
      O('a', 'Attend Sunday Mass on her own within four weeks, since church is what she misses most and will keep her motivated.', 0,
        { r: 'Meaningful but too high a first step', approach: 'Top-of-hierarchy goal', why: 'Mass is a valued long-term goal, but it is the hardest item and an unrealistic first target', keys: ['will not walk to the mailbox'], mistake: 'Choosing the most meaningful goal as the first step' }),
      O('b', 'After medical clearance, walk to her mailbox and back alone five days a week within 8 weeks, with fear at 4 of 10 or less.', 3,
        { r: 'SMART and appropriately graded', approach: 'SMART initial goal', why: 'A specific, measurable, attainable, time-bound goal at the bottom of her hierarchy, conditioned on clearance, builds toward larger outings', keys: ['mailbox avoided', 'medical clearance pending'], mistake: 'Setting first goals that are vague or too ambitious' }),
      O('c', 'Accept staying home as a reasonable adjustment at her age, with Marisol continuing to handle all errands for her.', -2,
        { r: 'Ageist and avoidance-reinforcing', approach: 'Accommodation as goal', why: 'Treating isolation as normal aging abandons treatment and accelerates functional decline', keys: ['74 and previously active'], mistake: 'Assuming anxiety-driven avoidance is a normal part of aging' }),
      O('d', 'Feel more comfortable leaving the house and return to her usual activities as her confidence comes back over time.', -1,
        { r: 'Not measurable', approach: 'Global goal', why: 'No behavior, measure, or date makes progress hard to track', keys: ['SMART criteria'], mistake: 'Writing an aspiration instead of a measurable goal' }),
    ]),
    // ---------------- session2 (5): legal, legal, interventions, legal, interventions ----------------
    Q('q9', 'legal', 'Rita falls out of view during the video session and the connection drops. What should the counselor do?', ['R4'], [
      O('a', 'Call Marisol first, since she lives 20 minutes away and can check on her mother and decide whether to call 911.', 0,
        { r: 'Delays emergency care', approach: 'Family first', why: 'Contacting Marisol is part of the plan, but a fall with hip pain in an older adult needs emergency services first', keys: ['hip pain', 'connection lost'], mistake: 'Routing an emergency through family instead of emergency services' }),
      O('b', 'Wait several minutes for Rita to reconnect, since calling emergency services could embarrass her and harm rapport.', -2,
        { r: 'Leaves an injured client without help', approach: 'Wait and see', why: 'An older adult who fell and reports hip pain may be injured and unable to call; delay can cause serious harm', keys: ['fell', 'hip hurts', 'lives alone'], mistake: 'Putting rapport ahead of physical safety' }),
      O('c', 'Call the local non-emergency police line to request a wellness check, then send Rita a message asking her to call back.', -1,
        { r: 'Wrong level of response', approach: 'Wellness check', why: 'A witnessed fall with pain is an emergency, not a welfare question; a non-emergency line adds delay', keys: ['witnessed fall'], mistake: 'Underestimating the urgency of a fall in an older adult' }),
      O('d', 'Call 911 with the address confirmed for this session, then contact Marisol, as set out in the intake emergency plan.', 3,
        { r: 'Activate the emergency plan', approach: 'Follow the telehealth emergency plan', why: 'The location and contacts set at intake exist for this moment: emergency services first, then the emergency contact', keys: ['address confirmed at start', 'fall with hip pain'], mistake: 'Improvising instead of following the established emergency plan' }),
    ]),
    Q('q10', 'legal', 'Once the emergency response after Rita\'s fall is under way, how should the counselor document the interrupted session?', ['R6', 'R5', 'R4'], [
      O('a', 'Enter a same-day note in the practice EHR with the times, what she saw and heard, each call made, and the follow-up plan.', 3,
        { r: 'Timely, complete, secure record', approach: 'Document the emergency per policy', why: 'A prompt, factual note in the secure record of observations, actions, contacts, and follow-up meets record-keeping standards and supports continuity of care', keys: ['fall during session', 'connection dropped', 'emergency plan used'], mistake: 'Delaying, scattering, or omitting documentation of a critical incident' }),
      O('b', 'Wait to write the note until she learns how Rita is doing, so that the record shows the full outcome in a single entry.', 0,
        { r: 'Right content, delayed', approach: 'Document after the outcome', why: 'Including the outcome is useful, but events and actions should be recorded promptly while memory is fresh, with outcome added later', keys: ['outcome not yet known'], mistake: 'Holding a contemporaneous record until the story is complete' }),
      O('c', 'Write the details in her personal notebook tonight and add a short summary to the EHR before Rita\'s next session.', -1,
        { r: 'Unsecured, delayed record', approach: 'Informal notes first', why: 'Clinical details kept in a personal notebook sit outside practice safeguards, and a later summary leaves the official record incomplete', keys: ['client health information'], mistake: 'Keeping clinical information outside the secure record system' }),
      O('d', 'Leave the fall out of the session note, since recording an injury that happened during a session could raise liability.', -2,
        { r: 'Falsifies by omission', approach: 'Omit the incident', why: 'Leaving out a fall and the emergency response makes the record inaccurate, harms continuity of care, and increases rather than reduces risk', keys: ['fall with hip pain'], mistake: 'Shaping the record to manage liability instead of reflecting what happened' }),
    ]),
    Q('q11', 'interventions', 'How should the counselor respond to Rita\'s wish to make Christmas Eve Mass her first outing?', ['R7'], [
      O('a', 'Make Christmas Eve Mass her first outing with Marisol beside her, since strong motivation can carry her through it.', 0,
        { r: 'Motivated, but ungraded', approach: 'Start at the top', why: 'Her motivation is an asset, but a crowded midnight service is the top of her hierarchy and a poor first step', keys: ['will not reach the mailbox yet'], mistake: 'Letting a meaningful date override graded exposure' }),
      O('b', 'Have her practice by standing up quickly and walking fast through the house to bring on the dizzy spells she fears.', -2,
        { r: 'Unsafe interoceptive exercise', approach: 'Provoke symptoms', why: 'With orthostatic hypotension and a fall history, deliberately provoking dizziness risks another fall', keys: ['orthostatic hypotension', 'fall today'], mistake: 'Applying interoceptive exposure without regard to medical findings' }),
      O('c', 'Build steps toward Mass, from the porch to short outings to a weekday service, coordinated with her balance therapy.', 3,
        { r: 'Graded, goal-linked, coordinated', approach: 'Graded in vivo exposure', why: 'A hierarchy that leads toward Mass keeps her motivation while building success, and coordinating with physical therapy addresses real balance risk', keys: ['cleared for graded activity', 'physical therapy referral'], mistake: 'Either rushing to the top item or dismissing the client\'s goal' }),
      O('d', 'Tell her Mass is unrealistic this year and suggest she watch it online, since crowds could lead to another fall.', -1,
        { r: 'Reinforces avoidance', approach: 'Substitute and avoid', why: 'Steering her away from her valued goal confirms her fear and ignores her medical clearance', keys: ['medical clearance obtained'], mistake: 'Endorsing avoidance as a safety measure' }),
    ]),
    Q('q12', 'legal', 'How should the counselor address Rita\'s difficulty hearing during video sessions?', ['R4'], [
      O('a', 'Speak louder and more slowly as she asks, and repeat key points at the end of each session to check her understanding.', 0,
        { r: 'Helpful but limited', approach: 'Adjust speech only', why: 'Clear speech helps, but available accommodations like captions would serve her better and more reliably', keys: ['captions available'], mistake: 'Relying on informal fixes when formal accommodations exist' }),
      O('b', 'Choose accommodations with Rita, such as live captions, headphones, and a written session summary.', 3,
        { r: 'Collaborative accommodation', approach: 'Provide accessibility accommodations', why: 'Counselors make reasonable accommodations for disabilities; captions, audio options, and written summaries chosen with her make sessions accessible', keys: ['hearing aids', 'mishears over video', 'platform captions'], mistake: 'Treating accessibility as the client\'s problem to solve' }),
      O('c', 'Suggest that Marisol sit in on each session to repeat what is said, since she knows her mother\'s hearing well.', -1,
        { r: 'Compromises confidentiality', approach: 'Family interpreter', why: 'Making a family member a standing intermediary limits privacy and Rita\'s independence when direct accommodations exist', keys: ['confidential sessions'], mistake: 'Using family as an accommodation instead of providing one' }),
      O('d', 'Switch to phone-only sessions, noting in the record that hearing loss makes telehealth unsuitable at her age.', -2,
        { r: 'Reduces access, ageist', approach: 'Downgrade the modality', why: 'Phone removes visual cues and captions she needs, and labeling her unsuitable for telehealth because of age is discriminatory', keys: ['hearing aids', 'video gives captions'], mistake: 'Responding to disability by reducing access' }),
    ]),
    Q('q13', 'interventions', 'How should the counselor respond to Rita\'s statement that Marisol should take care of her as she cared for her mother?', ['R7'], [
      O('a', 'Point out that her reliance on Marisol is feeding her agoraphobia, and that she needs to become fully independent.', -1,
        { r: 'Pathologizes a cultural value', approach: 'Independence framing', why: 'Framing interdependence as the problem imposes an individualist goal and may alienate her', keys: ['family caregiving values'], mistake: 'Equating recovery with full independence from family' }),
      O('b', 'Tell Rita that expecting her daughter\'s care is unhealthy and that Marisol needs to set firm limits with her.', -2,
        { r: 'Imposes values and damages trust', approach: 'Confront the value', why: 'Labeling a cultural value unhealthy imposes the counselor\'s values and risks rupture', keys: ['"you don\'t leave the old ones alone"'], mistake: 'Treating culturally rooted expectations as pathology' }),
      O('c', 'Validate the value of family care and move the conversation back to the exposure plan to keep treatment on track.', 0,
        { r: 'Validation without integration', approach: 'Validate and redirect', why: 'Validating is right, but moving on misses how her values could shape goals she will actually pursue', keys: ['cultural statement'], mistake: 'Acknowledging culture without integrating it into treatment' }),
      O('d', 'Explore what family care means to her and shape goals that honor closeness with Marisol while rebuilding her mobility.', 3,
        { r: 'Integrates culture into goals', approach: 'Explore values and worldview', why: 'Understanding her family values lets goals preserve closeness while reducing the avoidance that limits her', keys: ['"like I cared for my mother"', 'Marisol central'], mistake: 'Either ignoring culture or treating it as the problem' }),
    ]),
  ],
};

// ============================================================================
// D928 — Separation Anxiety Disorder · medium · child · plan 8
// ============================================================================
const D928 = {
  id: 'ncmhce-D928',
  title: 'An 8-year-old who falls apart at every Sunday handoff after his parents\' divorce',
  category: 'Anxiety',
  difficulty: 'medium',
  plan: 8,
  population: 'child',
  primaryDiagnosis: { name: 'Separation Anxiety Disorder', code: 'F93.0' },
  diagnosis: { name: 'Separation Anxiety Disorder', code: 'F93.0' },
  differentialOptions: [
    { id: 'do1', name: 'Adjustment Disorder, with Anxiety', isCorrect: false },
    { id: 'do2', name: 'Generalized Anxiety Disorder', isCorrect: false },
    { id: 'do3', name: 'Posttraumatic Stress Disorder', isCorrect: false },
    { id: 'do4', name: 'Separation Anxiety Disorder', isCorrect: true },
  ],
  narrative: {
    intake:
      'Noah Takahashi-Reyes, an 8-year-old third grader, is brought to a group counseling practice by his mother, Ana Reyes, a Mexican American labor-and-' +
      'delivery nurse. Ana and Noah\'s father, Kenji Takahashi, a Japanese American software engineer, divorced seven months ago and share joint legal ' +
      'custody, alternating weeks with Sunday exchanges in Ana\'s driveway. For five months Noah has cried, clung to Ana, and complained of stomachaches at ' +
      'every handoff, vomiting twice. During father weeks he asks to call Ana many times a day and worries "something bad will happen to Mommy, like a car ' +
      'crash." He visits the school nurse three or four times a week with stomachaches asking to call home, refuses sleepovers, sleeps in Ana\'s bed during ' +
      'her weeks, and has nightmares about getting lost. Before the divorce he had only a shy start to kindergarten. Ana says Kenji "doesn\'t know how to ' +
      'comfort him," suggests Noah may be scared of his father, and asks the counselor not to tell Kenji about counseling because "he\'ll say I\'m ' +
      'overreacting." She signs consent; the custody order has not been reviewed. Seen alone, Noah says his dad\'s apartment is "boring and too quiet," that ' +
      'he likes building Lego with his dad, and that he worries Mom will be sad and alone or get hurt; he shows no fear of his father and discloses no harm. ' +
      'During the intake the counselor realizes that Kenji coaches her own son\'s youth soccer team; they chat at games. The counselor has mainly treated ' +
      'adults with CBT and has limited experience with childhood anxiety or parent-based approaches.',
    session1:
      'The custody order gives both parents the right to consent to mental health care, and the counselor contacts Kenji, who consents and attends a ' +
      'separate session. He is supportive, says Noah settles within an hour of arriving and is happy at his place, and reports that Ana stays in the ' +
      'driveway for 20 minutes while Noah sobs and texts Noah every night of father weeks, "the house is so empty without you." Ana asks the counselor to ' +
      'recommend that Noah live with her full-time "until he\'s better." The school counselor, Ms. Patterson, emails asking how to handle the nurse visits; ' +
      'both parents sign releases for the school. The counselor plans CBT with graded exposure and coaching for both parents.',
    session2:
      'By week six Noah calls his fear "the worry bully" and has slept in his own bed three nights. He says the worry bully tells him Mom will crash her car ' +
      'when she drives away. In a joint session held to review Noah\'s brave ladder, Ana and Kenji begin arguing loudly about the nightly texts while Noah ' +
      'covers his ears. Afterward Ana privately asks the counselor to write a letter to her attorney recommending that Noah live primarily with her. A week ' +
      'later the counselor receives a subpoena for Noah\'s records from Ana\'s attorney, with no court order attached. Kenji then emails asking for a copy of ' +
      'Noah\'s records, and Ana tells the counselor she objects to Kenji seeing anything.',
  },
  diagnosticRationale:
    'Noah shows developmentally excessive fear about separation from his mother, with at least four criterion symptoms: distress at separation, worry ' +
    'about harm befalling her, refusal to sleep away from her, nightmares about separation, and physical complaints at separations. Symptoms have lasted ' +
    'five months, well beyond the four-week minimum for children, and impair school and family functioning. His worry centers on separation and his ' +
    'mother\'s safety rather than multiple domains (GAD), he has no trauma exposure or intrusion cluster (PTSD), and the specific, criterion-level pattern ' +
    'is better captured by separation anxiety disorder than by an adjustment disorder, even though the divorce precipitated it. His comfort with his father ' +
    'once settled argues against mistreatment as the driver.',
  references: [
    { id: 'R1', source: 'DSM-5-TR', detail: 'Separation anxiety disorder: 3+ of 8 symptoms of excessive fear about separation from attachment figures, 4+ weeks in children, impairment; differential with GAD, PTSD, and adjustment disorder' },
    { id: 'R2', source: 'ACA Code of Ethics', detail: 'Consent and assent with minors and parental rights; conflicts of interest and objectivity; role clarity when treating counselors are asked for forensic or custody opinions; responding to subpoenas' },
    { id: 'R3', source: 'State law', detail: 'Custody orders define each parent\'s authority to consent to mental health care and to access a child\'s records; procedures for subpoenas without a court order' },
    { id: 'R4', source: 'HIPAA', detail: 'Parents as personal representatives with access to a minor\'s records; disclosures in response to a subpoena without a court order require satisfactory assurances or authorization' },
    { id: 'R5', source: 'Corey (Theory & Practice)', detail: 'CBT for children with graded exposure and contingency management; family systems and parent involvement; de-escalating conflict in conjoint sessions' },
    { id: 'R6', source: 'Hays (Assessment)', detail: 'Multi-informant child assessment, including separate interviews of the child and each parent' },
  ],
  questions: [
    // ---------------- intake (4): profdev, assess, profdev, assess ----------------
    Q('q1', 'profdev', 'How should the counselor handle realizing that Kenji coaches her son\'s soccer team?', ['R2'], [
      O('a', 'Say nothing about the connection, since it is a casual acquaintance and raising it could make the parents uncomfortable.', -2,
        { r: 'Conceals a potential conflict', approach: 'Nondisclosure', why: 'Hiding a social tie to one parent in a high-conflict divorce invites accusations of bias and undermines trust', keys: ['coaches her son\'s team', 'parents in conflict'], mistake: 'Treating an undisclosed social connection as harmless' }),
      O('b', 'Disclose the connection to both parents and proceed, since a casual acquaintance rarely affects a counselor\'s judgment.', 0,
        { r: 'Disclosure without consultation', approach: 'Disclose and continue', why: 'Disclosure is right, but the tie should first be weighed with a supervisor given the custody conflict', keys: ['Ana questions Kenji\'s parenting'], mistake: 'Deciding alone that a dual connection is manageable' }),
      O('c', 'Refer Noah elsewhere at once without discussing it, since any outside contact with a parent is a conflict of interest.', -1,
        { r: 'Reflexive referral', approach: 'Automatic referral', why: 'Not every acquaintance is disqualifying, and an unexplained referral disrupts care for a distressed child', keys: ['casual contact at games'], mistake: 'Equating any social contact with a disqualifying conflict' }),
      O('d', 'Consult her supervisor, disclose the tie to both parents, and refer if it could compromise her objectivity.', 3,
        { r: 'Consult, disclose, decide', approach: 'Determine counselor-client suitability', why: 'A social tie to one parent in a contested divorce warrants consultation, transparency with both parents, and referral if objectivity is at risk', keys: ['coaches her son\'s team', 'custody tension'], mistake: 'Either ignoring or overreacting to a possible conflict of interest' }),
    ]),
    Q('q2', 'assess', 'What should the counselor do about consent for Noah\'s treatment?', ['R2', 'R3'], [
      O('a', 'Rely on Ana\'s consent alone, since she is the parent who sought treatment and knows Noah\'s symptoms best.', -1,
        { r: 'Ignores joint custody', approach: 'Presenting-parent consent', why: 'Under joint legal custody the other parent\'s rights depend on the order; relying on one parent without checking risks invalid consent', keys: ['joint legal custody', 'order not reviewed'], mistake: 'Assuming the parent who brings the child controls consent' }),
      O('b', 'Review the custody order on consent, inform Kenji and seek his consent as it requires, and obtain Noah\'s assent.', 3,
        { r: 'Order-based consent plus assent', approach: 'Consent appropriate to clientele', why: 'The custody order defines consent authority; involving both legal custodians and obtaining the child\'s assent protects the child and the treatment', keys: ['joint legal custody', 'order not yet reviewed'], mistake: 'Starting treatment before confirming who must consent' }),
      O('c', 'Begin with Ana\'s consent and Noah\'s assent, and inform Kenji later once Noah has settled into counseling.', 0,
        { r: 'Right parts, wrong order', approach: 'Delay notifying father', why: 'Assent is right, but the order should be checked and Kenji involved before treatment rather than after', keys: ['order not reviewed'], mistake: 'Sequencing parental notification after treatment has begun' }),
      O('d', 'Agree to Ana\'s request not to tell Kenji about counseling, since she reports that Noah may be afraid of his father.', -2,
        { r: 'Excludes a legal custodian', approach: 'Secret treatment', why: 'Hiding treatment from a parent with legal rights can violate the order and the law and align the counselor with one side', keys: ['Noah shows no fear of father', 'joint legal custody'], mistake: 'Accepting one parent\'s account to exclude the other' }),
    ]),
    Q('q3', 'profdev', 'Which step best prepares the counselor to treat Noah\'s anxiety effectively?', ['R5'], [
      O('a', 'Review evidence for child CBT with parent involvement, such as SPACE, and consult a colleague skilled in child anxiety.', 3,
        { r: 'Knowledge of ESIs plus consultation', approach: 'Develop knowledge of supported interventions', why: 'Child anxiety is treated with CBT and exposure, often with parent-focused components that reduce accommodation; consultation fills her experience gap', keys: ['limited child anxiety experience', 'parent accommodation'], mistake: 'Relying on adult methods for a child with heavy parental involvement' }),
      O('b', 'Adapt her adult CBT protocol by simplifying the worksheets, since the core cognitive techniques are the same for children.', -1,
        { r: 'Wrong framework', approach: 'Simplify adult CBT', why: 'Child anxiety treatment depends on behavioral exposure, rewards, and parent involvement more than simplified adult cognitive work', keys: ['age 8'], mistake: 'Treating children as small adults in CBT' }),
      O('c', 'Read about divorce adjustment and focus the work on helping Noah process his feelings about the family changes.', 0,
        { r: 'Relevant but off-target', approach: 'Divorce-processing focus', why: 'Divorce context matters, but processing feelings alone does not treat the separation fear and avoidance', keys: ['separation anxiety criteria met'], mistake: 'Treating the precipitant rather than the disorder' }),
      O('d', 'Recommend that Noah skip father weeks until his anxiety settles, since forced separations will deepen his fear.', -2,
        { r: 'Harmful accommodation', approach: 'Avoidance-based plan', why: 'Removing separations reinforces the disorder and interferes with a custody order', keys: ['comfortable with father once settled'], mistake: 'Believing avoidance protects an anxious child' }),
    ]),
    Q('q4', 'assess', 'Which finding best supports separation anxiety disorder rather than a reaction to mistreatment in his father\'s home?', ['R1', 'R6'], [
      O('a', 'Ana\'s report that Noah is scared of his father, since the parent who knows him best is the most reliable informant.', -2,
        { r: 'Single biased informant', approach: 'Trust one parent', why: 'In a contested divorce one parent\'s view must be weighed against the child\'s own account and other informants', keys: ['Noah likes Lego with dad'], mistake: 'Treating one parent\'s concern as fact in a custody conflict' }),
      O('b', 'His symptoms began after the divorce, which shows the stress of the family change rather than harm at either home.', 0,
        { r: 'Timing does not discriminate', approach: 'Onset framing', why: 'Onset after divorce fits several explanations, including mistreatment; it is not the discriminating finding', keys: ['onset after divorce'], mistake: 'Using onset timing in place of the symptom pattern' }),
      O('c', 'His worries center on harm to his mother, he has symptoms at school too, and he describes enjoying time with his father.', 3,
        { r: 'Fear about the attachment figure', approach: 'Multi-informant differential', why: 'Fear focused on harm to his mother across settings, with positive time with his father, fits separation anxiety rather than fear of a caregiver', keys: ['"something bad will happen to Mommy"', 'nurse visits', 'Lego with dad'], mistake: 'Failing to compare the child\'s own account with parent reports' }),
      O('d', 'His nightmares about being lost, which suggest he has been through a traumatic event that he has not yet disclosed.', -1,
        { r: 'Over-reads a criterion symptom', approach: 'Hidden-trauma framing', why: 'Nightmares about separation are a separation anxiety criterion, not evidence of undisclosed trauma', keys: ['nightmares about getting lost'], mistake: 'Treating separation-themed nightmares as a trauma marker' }),
    ]),
    // ---------------- session1 (3): planning, planning, indirect ----------------
    Q('q5', 'planning', 'Which plan element best addresses Noah\'s distress at the Sunday handoffs?', ['R5'], [
      O('a', 'Recommend that Noah live with Ana full-time until his anxiety improves, as she has asked the counselor to do.', -2,
        { r: 'Custody recommendation and avoidance', approach: 'Change the schedule', why: 'Recommending custody changes is outside the treating role, and removing separations reinforces the disorder', keys: ['Ana requests full-time placement'], mistake: 'Using custody changes as an anxiety intervention' }),
      O('b', 'Coach Ana alone on calmer goodbyes, since the handoffs take place in her driveway and she sees the most distress.', 0,
        { r: 'Half the system', approach: 'Coach one parent', why: 'Ana\'s lingering matters, but a consistent routine needs both parents practicing it', keys: ['20 minutes in driveway', 'Kenji supportive'], mistake: 'Leaving one parent out of a two-home plan' }),
      O('c', 'A brief, predictable handoff routine that both parents practice, paired with graded separations in each home.', 3,
        { r: 'Consistent two-home plan', approach: 'Behavioral plan across homes', why: 'A short, predictable goodbye practiced by both parents, combined with graded exposure, reduces accommodation and builds tolerance of separation', keys: ['lingering handoffs', 'alternating weeks'], mistake: 'Planning for one household when the child lives in two' }),
      O('d', 'Let Noah call his mother whenever he wants during father weeks, so that he feels secure enough to stay calm.', -1,
        { r: 'Accommodation that maintains fear', approach: 'Unlimited reassurance contact', why: 'Unlimited calls give short-term relief but maintain the belief that he cannot cope without checking on her', keys: ['asks to call many times a day'], mistake: 'Treating reassurance-seeking as a coping skill' }),
    ]),
    Q('q6', 'planning', 'Which goal is best written for Noah\'s treatment plan?', ['R5'], [
      O('a', 'Within 8 weeks, Noah will finish handoffs in 10 minutes or less and sleep in his own bed 5 of 7 nights in both homes.', 3,
        { r: 'SMART, two-home goal', approach: 'Measurable child goal', why: 'The goal names observable behaviors in both homes, a numeric target, and a timeline', keys: ['handoff distress', 'sleeps in Ana\'s bed'], mistake: 'Writing child goals as feelings rather than behaviors' }),
      O('b', 'Noah will feel less worried about his mother and enjoy his time at both homes as he gets used to the divorce.', -1,
        { r: 'Not measurable', approach: 'Feeling-based goal', why: 'No behavior, measure, or date makes progress impossible to track', keys: ['SMART criteria'], mistake: 'Confusing a hope with a measurable objective' }),
      O('c', 'Within 8 weeks, Noah will make fewer nurse visits for stomachaches, as the school reports to the counselor each month.', 0,
        { r: 'Measurable but thin', approach: 'School-only goal', why: 'Tracking nurse visits is useful, but "fewer" lacks a target and the goal ignores handoffs and sleep', keys: ['nurse visits 3-4 times a week'], mistake: 'Writing a goal without a specific target' }),
      O('d', 'Noah will live mainly with Ana until handoffs stop upsetting him, then return slowly to the alternating schedule.', -2,
        { r: 'Codifies avoidance', approach: 'Avoidance-based goal', why: 'A goal built on avoiding separation strengthens the disorder and oversteps the counselor\'s role in custody', keys: ['Ana\'s request'], mistake: 'Writing avoidance into the treatment plan' }),
    ]),
    Q('q7', 'indirect', 'How should the counselor respond to Ms. Patterson\'s email about the nurse visits?', ['R4', 'R5'], [
      O('a', 'Ask the school to call Ana whenever Noah visits the nurse, so he can hear her voice and go back to class calmer.', -1,
        { r: 'School-based accommodation', approach: 'Reassurance by phone', why: 'Routine calls home reinforce the fear that something has happened to his mother', keys: ['asks to call home'], mistake: 'Building reassurance-seeking into the school plan' }),
      O('b', 'Send Ms. Patterson Noah\'s full assessment, including the parents\' conflict, so the school understands the family.', -2,
        { r: 'Discloses beyond need', approach: 'Full disclosure', why: 'Parental conflict details are not needed to manage nurse visits and exceed the minimum necessary', keys: ['school releases signed'], mistake: 'Treating a release as permission to share everything' }),
      O('c', 'Tell Ms. Patterson to handle the nurse visits as the school usually does, since school is outside the counseling plan.', 0,
        { r: 'Misses collaboration', approach: 'Hands-off', why: 'Releases are signed and school is where much of the avoidance occurs; coordination supports the plan', keys: ['3-4 nurse visits a week'], mistake: 'Leaving a key support system out of treatment' }),
      O('d', 'Using both parents\' releases, agree with Ms. Patterson on brief nurse visits and a return to class without calling home.', 3,
        { r: 'Coordinated school plan', approach: 'Collaborate with support systems', why: 'With proper releases, a consistent school response that limits calls home extends the exposure plan into the school day', keys: ['releases from both parents', 'nurse visits'], mistake: 'Running a home plan that the school unknowingly undermines' }),
    ]),
    // ---------------- session2 (6): interventions x3, legal x3 ----------------
    Q('q8', 'interventions', 'Noah says the worry bully tells him his mom will crash her car. Which response best builds his skills?', ['R5'], [
      O('a', 'Reassure Noah that his mother is a careful driver and that nothing bad will happen to her while he is at school.', 0,
        { r: 'Reassurance in place of skill', approach: 'Reassure', why: 'Reassurance soothes briefly but does not teach him to handle the worry himself', keys: ['worry bully'], mistake: 'Providing reassurance instead of coping skills' }),
      O('b', 'Help him practice talking back to the worry bully with a coping thought, then try a brave step and earn a reward.', 3,
        { r: 'Age-appropriate CBT', approach: 'Externalizing and brave practice', why: 'Externalizing the worry, rehearsing coping self-talk, and rewarding brave steps is developmentally appropriate CBT for an 8-year-old', keys: ['calls it the worry bully', 'brave ladder'], mistake: 'Using techniques beyond a child\'s developmental level' }),
      O('c', 'Ask Noah to keep a daily journal analyzing his thought distortions about the car crash, using adult CBT worksheets.', -1,
        { r: 'Developmentally mismatched', approach: 'Adult cognitive work', why: 'Formal distortion analysis exceeds most 8-year-olds\' abilities and is less effective than behavioral practice', keys: ['age 8'], mistake: 'Applying adult cognitive techniques to a young child' }),
      O('d', 'Tell Noah his worries are silly and that big boys need to stop thinking about bad things that will not happen.', -2,
        { r: 'Shames the child', approach: 'Dismiss the fear', why: 'Shaming increases distress and secrecy and damages the alliance', keys: ['frightened child'], mistake: 'Dismissing a child\'s fear as immaturity' }),
    ]),
    Q('q9', 'interventions', 'Ana and Kenji begin arguing loudly while Noah covers his ears. What should the counselor do?', ['R5'], [
      O('a', 'Calmly pause the discussion, have Noah wait with a staff member, and set ground rules with the parents before going on.', 3,
        { r: 'De-escalate and protect the child', approach: 'De-escalation in family session', why: 'Stopping the conflict, removing the child from it, and setting ground rules protects Noah and restores a workable session', keys: ['Noah covers his ears', 'loud argument'], mistake: 'Letting parental conflict play out in front of the child' }),
      O('b', 'Let the argument run its course, since airing the conflict in session can help the parents resolve it for Noah.', -1,
        { r: 'Exposes child to conflict', approach: 'Let it play out', why: 'Unmanaged conflict in front of Noah adds to his distress and rarely resolves anything', keys: ['Noah distressed'], mistake: 'Believing open conflict in session is automatically therapeutic' }),
      O('c', 'Redirect the parents to the brave ladder chart, keeping Noah in the room so that he sees the adults can work together.', 0,
        { r: 'Redirect without protecting', approach: 'Refocus on task', why: 'Refocusing helps, but keeping Noah present while tension is high continues his exposure to the conflict', keys: ['covers his ears'], mistake: 'De-escalating without first removing the child from conflict' }),
      O('d', 'Side with Kenji that the texts are harmful, since agreeing with one parent can end the argument more quickly.', -2,
        { r: 'Triangulation', approach: 'Take sides', why: 'Siding with one parent in front of the child damages neutrality and the alliance with the other parent', keys: ['custody conflict'], mistake: 'Ending conflict by aligning with one parent' }),
    ]),
    Q('q10', 'interventions', 'How should the counselor address Ana\'s nightly texts and long goodbyes?', ['R5'], [
      O('a', 'Tell Ana to stop all contact with Noah during father weeks, so he learns to manage without her on his own.', -1,
        { r: 'Overcorrection', approach: 'Cut off contact', why: 'Abruptly ending contact is punitive and can heighten his fear; the aim is supportive, confident contact', keys: ['nightly texts'], mistake: 'Confusing reduced accommodation with no contact' }),
      O('b', 'Suggest Ana send cheerful texts instead, avoiding sad comments but keeping the nightly messages exactly as they are now.', 0,
        { r: 'Partial fix', approach: 'Change tone only', why: 'Removing sad content helps, but nightly check-ins and long goodbyes still accommodate his fear', keys: ['"the house is so empty"'], mistake: 'Changing message tone without addressing the accommodation pattern' }),
      O('c', 'Agree with Ana that her texts show love, and suggest that Kenji is the one making transitions hard for Noah.', -2,
        { r: 'Takes sides and reinforces accommodation', approach: 'Validate and blame', why: 'Blaming the other parent undermines the co-parenting plan and keeps the accommodation going', keys: ['Kenji supportive'], mistake: 'Aligning with one parent against the other' }),
      O('d', 'Explain how her lingering and sad texts can feed his fear, and coach brief, warm messages that show confidence in him.', 3,
        { r: 'Psychoeducation on accommodation', approach: 'Supportive parenting coaching', why: 'Parents reduce anxiety when they pair warmth with confidence in the child\'s ability to cope and cut back accommodation', keys: ['lingers 20 minutes', 'nightly texts'], mistake: 'Leaving parental accommodation unaddressed' }),
    ]),
    Q('q11', 'legal', 'How should the counselor respond to Ana\'s request for a letter recommending that Noah live primarily with her?', ['R2'], [
      O('a', 'Write the letter, since the counselor knows Noah best and the court will benefit from her clinical opinion.', -2,
        { r: 'Role conflict', approach: 'Treating counselor as evaluator', why: 'A treating counselor who has not evaluated both homes for custody should not offer custody recommendations', keys: ['custody dispute', 'treating role'], mistake: 'Confusing a therapeutic role with a forensic one' }),
      O('b', 'Write a letter limited to Noah\'s diagnosis and progress, leaving out any opinion about where he should live.', -1,
        { r: 'Still enters the dispute', approach: 'Limited letter', why: 'Writing for one parent\'s attorney without proper process or the other parent\'s involvement still draws the counselor into litigation', keys: ['request via Ana\'s attorney'], mistake: 'Believing a limited letter avoids role conflict' }),
      O('c', 'Decline to make custody recommendations, explaining her treating role and that a custody evaluator can assess that.', 3,
        { r: 'Clear role boundaries', approach: 'Clarify role', why: 'Counselors avoid forensic evaluations of their own clients; explaining this protects the treatment and the child', keys: ['custody letter request', 'both parents in treatment'], mistake: 'Agreeing to advocacy that compromises the treating role' }),
      O('d', 'Decline for now and offer to revisit the letter once Noah\'s treatment ends and his anxiety has fully resolved.', 0,
        { r: 'Right refusal, wrong reason', approach: 'Defer the request', why: 'Declining is correct, but the role conflict does not disappear at termination', keys: ['treating counselor'], mistake: 'Treating role conflict as a timing problem' }),
    ]),
    Q('q12', 'legal', 'How should the counselor respond to the subpoena from Ana\'s attorney?', ['R3', 'R4'], [
      O('a', 'Send the full record to Ana\'s attorney promptly, since a subpoena is a legal order that has to be obeyed right away.', -2,
        { r: 'Releases without authority', approach: 'Comply immediately', why: 'An attorney-issued subpoena without a court order does not by itself authorize release of confidential records', keys: ['no court order'], mistake: 'Treating any subpoena as a court order' }),
      O('b', 'Hold the records, consult legal counsel, and release them only with valid authorization or a court order.', 3,
        { r: 'Respond, protect, consult', approach: 'Follow subpoena procedures', why: 'A subpoena requires a response, but records go out only with valid authorization or a court order, and legal consultation guides the response', keys: ['subpoena without court order', 'contested custody'], mistake: 'Either ignoring a subpoena or over-complying with it' }),
      O('c', 'Ignore the subpoena, since it came from one parent\'s attorney rather than the court and has no legal force.', -1,
        { r: 'Ignoring creates legal risk', approach: 'Disregard', why: 'A subpoena still requires a timely response, even if the records cannot be released', keys: ['subpoena received'], mistake: 'Believing an attorney subpoena can simply be ignored' }),
      O('d', 'Ask Ana to sign a release so the records can go to her attorney, since she is one of Noah\'s legal parents.', 0,
        { r: 'Plausible, but skips consultation', approach: 'Single-parent authorization', why: 'A parent\'s authorization may be valid, but in contested custody legal consultation should come first', keys: ['joint custody', 'litigation'], mistake: 'Relying on one parent\'s release in a contested case without consultation' }),
    ]),
    Q('q13', 'legal', 'How should the counselor respond to Kenji\'s request for Noah\'s records over Ana\'s objection?', ['R3', 'R4'], [
      O('a', 'Confirm that the order and state law do not limit Kenji\'s access, then handle his request the same as one from Ana.', 3,
        { r: 'Access set by order and law', approach: 'Follow custody and records law', why: 'Parental access to a minor\'s records depends on the custody order and state law; where joint legal custody carries no restriction, a parent ordinarily has the same access as the other parent', keys: ['joint legal custody', 'order gives both consent rights'], mistake: 'Letting one parent\'s objection override the other\'s legal rights' }),
      O('b', 'Refuse Kenji\'s request, since Ana is the parent who brought Noah to counseling and objects to Kenji seeing what was said.', -2,
        { r: 'Denies a legal right', approach: 'Side with first parent', why: 'One parent\'s objection does not by itself remove the other parent\'s access rights under the order and state law', keys: ['Ana objects'], mistake: 'Treating the parent who initiated treatment as controlling access' }),
      O('c', 'Tell Kenji he can have a summary only, since records about a child are too sensitive for a parent to read.', 0,
        { r: 'Limits without basis', approach: 'Summary only', why: 'A summary can be offered, but limiting access without a legal basis is not the counselor\'s choice', keys: ['parent request'], mistake: 'Restricting access on preference rather than law' }),
      O('d', 'Ask Ana\'s permission before responding to Kenji, since she was the first parent to consent to Noah\'s treatment.', -1,
        { r: 'Gives one parent veto power', approach: 'Defer to Ana', why: 'Kenji\'s access is set by the order and state law, not by Ana\'s permission', keys: ['joint legal custody'], mistake: 'Granting one parent control over the other\'s rights' }),
    ]),
  ],
};

// ============================================================================
// D929 — Selective Mutism · medium · child · plan 9
// ============================================================================
const D929 = {
  id: 'ncmhce-D929',
  title: 'A 6-year-old who chatters in two languages at home and has not spoken a word at school',
  category: 'Anxiety',
  difficulty: 'medium',
  plan: 9,
  population: 'child',
  primaryDiagnosis: { name: 'Selective Mutism', code: 'F94.0' },
  diagnosis: { name: 'Selective Mutism', code: 'F94.0' },
  differentialOptions: [
    { id: 'do1', name: 'Social Anxiety Disorder', isCorrect: false },
    { id: 'do2', name: 'Language Disorder', isCorrect: false },
    { id: 'do3', name: 'Selective Mutism', isCorrect: true },
    { id: 'do4', name: 'Autism Spectrum Disorder', isCorrect: false },
  ],
  narrative: {
    intake:
      'Liya Tesfaye, a 6-year-old first grader in Columbus, Ohio, is referred by her teacher, Ms. Kowalski, and the school psychologist because she has not ' +
      'spoken a word at school since starting kindergarten 14 months ago. She does not speak to teachers, classmates, or the Amharic-speaking classroom ' +
      'aide, Ms. Hirut, though she nods, points, and completes written and drawn work at grade level; on the playground she sometimes whispers to her ' +
      'brother, Yonas, 11. Her family emigrated from Addis Ababa two and a half years ago. At home Liya chatters in Amharic with her parents and plays in ' +
      'English with Yonas and her cousins, and her parents have heard her sing English songs from school. At Sunday school at their Ethiopian Orthodox ' +
      'church she is silent with the teachers. A school hearing screen was normal. Her father, Dawit, a former accountant who now drives for a rideshare ' +
      'service, speaks English well; her mother, Selam, who is training as a home health aide, prefers Amharic and speaks limited English. Dawit says, "In our ' +
      'culture children are quiet with teachers; she will grow out of it," and he interprets for Selam during the intake. The family has Medicaid. The ' +
      'counselor\'s first impression is that Liya is in the normal "silent period" of learning a second language. The school psychologist asks the counselor ' +
      'to give Liya a standardized English language proficiency test; the counselor has no training in language assessment. The parents have not yet signed ' +
      'releases for the school.',
    session1:
      'For the next session, which Selam wants to attend because she spends the most time with Liya, Dawit suggests that Yonas interpret because "he is ' +
      'better at English feeling words than me," or that Dawit interpret again. The practice has a contract with a telephone and video interpreter service. ' +
      'The parents also report that the school\'s ESL teacher advised them to speak only English at home "so Liya will be ready to talk at school." The ' +
      'parents sign releases for the school, and the counselor is building a plan with the family and Ms. Kowalski.',
    session2:
      'In a play session with Selam and a video Amharic interpreter, Liya whispers answers to Selam during a board game while the counselor sits across the ' +
      'room. Later, through the interpreter, Selam says, "In Ethiopia children are taught to be quiet and respectful with teachers. You make it sound like I ' +
      'did something wrong." The counselor notices that both parents often answer for Liya when adults ask her questions. Dawit has begun sending videos of ' +
      'Liya talking at home to the counselor\'s personal cell phone through WhatsApp. Ms. Kowalski invites the counselor to Liya\'s Section 504 meeting, and ' +
      'the practice\'s release form for it exists only in English. The practice billing manager proposes charging the family $40 per session for the ' +
      'interpreter because Medicaid does not reimburse the practice separately for interpreter costs.',
  },
  diagnosticRationale:
    'Liya consistently fails to speak at school, where speech is expected, despite speaking freely at home in both Amharic and English; the pattern has ' +
    'lasted 14 months, is not limited to the first month of school, and interferes with her education. DSM-5-TR excludes failure to speak that is due to ' +
    'lack of knowledge of, or comfort with, the spoken language required, and her fluent English with siblings and cousins, together with her silence in ' +
    'Amharic with the aide and her Sunday school teachers, shows that language acquisition does not explain it. Grade-level written work and fluent home ' +
    'speech argue against a language disorder, though a bilingual speech-language evaluation is still appropriate, and her rich play and communication at ' +
    'home do not suggest autism spectrum disorder. Selective mutism is commonly accompanied by social anxiety, which should be monitored.',
  references: [
    { id: 'R1', source: 'DSM-5-TR', detail: 'Selective mutism: consistent failure to speak where expected, 1+ month and not limited to the first month of school, not due to lack of knowledge of or comfort with the spoken language; differential with language disorder and autism' },
    { id: 'R2', source: 'ACA Code of Ethics', detail: 'Informed consent in a language the client understands; qualified interpreters; cultural sensitivity in assessment; competence to use assessment instruments; security of client records' },
    { id: 'R3', source: 'Hays (Assessment)', detail: 'Assessing culturally and linguistically diverse children; multi-informant data across settings; referral for bilingual speech-language evaluation' },
    { id: 'R4', source: 'Corey (Theory & Practice)', detail: 'Behavioral interventions (stimulus fading, shaping, contingency management) and multicultural counseling with immigrant families' },
    { id: 'R5', source: 'HIPAA', detail: 'Security Rule: protected health information is transmitted and stored through secure, practice-approved systems' },
    { id: 'R6', source: 'NBCC 2027 Spec', detail: 'Indirect Client Care: secure translation services in the client\'s preferred language; Legal & Ethical Compliance: federal language-access duties (Title VI, ACA Section 1557) for federally funded providers' },
  ],
  questions: [
    // ---------------- intake (4): assess, profdev, assess, profdev ----------------
    Q('q1', 'assess', 'Which finding best distinguishes selective mutism from the normal silent period of learning a second language?', ['R1'], [
      O('a', 'She has been silent at school for over 14 months, far longer than the first month of school that DSM-5-TR excludes.', 0,
        { r: 'A criterion, not the discriminator', approach: 'Duration framing', why: 'Duration beyond the first month is required, but a long silent period can also occur in language learners; it does not separate the two', keys: ['14 months of silence'], mistake: 'Treating duration alone as ruling out language acquisition' }),
      O('b', 'She speaks English with her brother and cousins at home yet stays silent at school in both languages, even with the aide.', 3,
        { r: 'Silence across languages despite competence', approach: 'Apply the language exclusion', why: 'She has the English to speak and is silent even in Amharic with the aide, so lack of language knowledge does not explain the pattern', keys: ['plays in English with Yonas', 'silent with Amharic-speaking aide'], mistake: 'Attributing silence in a bilingual child to language learning by default' }),
      O('c', 'Her father reports that children in their culture are quiet with teachers, which explains her silence at school.', -1,
        { r: 'Overextends a cultural norm', approach: 'Cultural explanation', why: 'Respectful quiet differs from 14 months of total silence with peers and adults in both languages', keys: ['silent with classmates too'], mistake: 'Using a cultural norm to explain impairment it does not account for' }),
      O('d', 'Her silence mainly reflects limited English, so speech therapy for English learners is the only help she will need.', -2,
        { r: 'Misattributes and undertreats', approach: 'Language-only framing', why: 'This ignores her English fluency at home and leaves an anxiety disorder untreated', keys: ['sings English songs', 'silent in Amharic at school'], mistake: 'Treating selective mutism as a language-learning problem' }),
    ]),
    Q('q2', 'profdev', 'How should the counselor handle her first impression that Liya is in a normal silent period?', ['R2', 'R3'], [
      O('a', 'Trust the impression, since the counselor\'s experience with English learners makes it a reliable place to start.', -1,
        { r: 'Unexamined assumption', approach: 'Trust first impression', why: 'An untested assumption about immigrant children can anchor the assessment and delay treatment', keys: ['14 months of silence'], mistake: 'Letting a first impression substitute for data' }),
      O('b', 'Set the impression aside and rely on the school\'s referral, since the school has observed Liya for over a year.', 0,
        { r: 'Defers rather than reflects', approach: 'Defer to referral', why: 'The school\'s observations matter, but the counselor still needs to examine her own assumption and form an independent view', keys: ['school referral'], mistake: 'Outsourcing judgment instead of examining one\'s own bias' }),
      O('c', 'Share the impression with the family to reassure them that Liya will start talking once her English improves.', -2,
        { r: 'False reassurance delays care', approach: 'Reassure family', why: 'Telling the family she will outgrow it reinforces "wait and see" for a disorder that tends to entrench without treatment', keys: ['"she will grow out of it"'], mistake: 'Confirming a family\'s wait-and-see belief without evidence' }),
      O('d', 'Examine the assumption against the evidence and build her knowledge of language acquisition in immigrant children.', 3,
        { r: 'Self-reflection and targeted learning', approach: 'Practice self-reflection', why: 'Testing a first impression against the data and filling knowledge gaps about bilingual development prevents cultural and linguistic misdiagnosis', keys: ['speaks English at home', 'silent in both languages at school'], mistake: 'Assuming knowledge of immigrant children without checking it' }),
    ]),
    Q('q3', 'assess', 'What collateral information is most important to obtain next?', ['R3', 'R2'], [
      O('a', 'A detailed account of the family\'s immigration journey, since migration trauma is the most likely cause of her silence.', -1,
        { r: 'Assumes a cause', approach: 'Trauma-first framing', why: 'Migration history belongs in the biopsychosocial, but nothing suggests trauma and assuming it narrows the assessment', keys: ['no trauma reported'], mistake: 'Assuming immigration implies trauma' }),
      O('b', 'Her report cards, since grade-level written work shows that she understands the curriculum despite not speaking.', 0,
        { r: 'Useful but narrow', approach: 'Academic records', why: 'Grades show comprehension but not where, with whom, or in which language she speaks', keys: ['grade-level work'], mistake: 'Collecting data that cannot answer the diagnostic question' }),
      O('c', 'With consent, reports from her teacher, aide, and school psychologist on where, to whom, and in which language she talks.', 3,
        { r: 'Setting-by-setting speech data', approach: 'Multi-informant collateral', why: 'Selective mutism is defined by speaking patterns across settings; informants who see her at school, including a same-language aide, supply them', keys: ['releases not yet signed', 'Amharic-speaking aide'], mistake: 'Relying on parent report alone for a setting-specific disorder' }),
      O('d', 'Reports gathered directly from the school without the parents\' consent, since the school made the original referral.', -2,
        { r: 'No consent', approach: 'Bypass consent', why: 'A referral does not authorize the counselor to exchange information about the child without the parents\' consent', keys: ['releases not signed'], mistake: 'Treating a referral as consent to exchange information' }),
    ]),
    Q('q4', 'profdev', 'How should the counselor respond to the request to give Liya a standardized English proficiency test?', ['R2', 'R3'], [
      O('a', 'Explain that language testing is outside her training and recommend a speech-language evaluation in both languages.', 3,
        { r: 'Recognizes assessment limits', approach: 'Determine competency for assessments', why: 'Counselors use only assessments they are trained to give; a bilingual speech-language evaluation is the right source of language data', keys: ['no training in language assessment', 'bilingual child'], mistake: 'Administering tests outside one\'s competence because a colleague asked' }),
      O('b', 'Give the test using its English norms, noting that the results may underestimate the skills of an Amharic speaker.', -1,
        { r: 'Untrained and poorly normed', approach: 'Administer with caveat', why: 'A caveat does not fix the lack of training or the poor fit of English-only norms for a bilingual child', keys: ['no training'], mistake: 'Believing a disclaimer makes an inappropriate test acceptable' }),
      O('c', 'Give the test with her brother translating the items into Amharic, so that Liya can understand every question.', -2,
        { r: 'Invalidates the test and misuses a child', approach: 'Ad hoc translation', why: 'Sibling translation of a standardized test destroys its validity and places a child in an inappropriate role', keys: ['Yonas is 11'], mistake: 'Using family members to translate standardized assessments' }),
      O('d', 'Give a brief English vocabulary screen she knows instead, and leave formal language testing to the school.', 0,
        { r: 'Still outside competence', approach: 'Substitute screen', why: 'Swapping in a smaller language screen still asks her to interpret language skills she is not trained to assess', keys: ['no language assessment training'], mistake: 'Scaling down an assessment instead of referring it' }),
    ]),
    // ---------------- session1 (3): indirect, planning, planning ----------------
    Q('q5', 'indirect', 'How should the counselor arrange communication with Selam for the next session?', ['R2', 'R6'], [
      O('a', 'Have Yonas interpret, since he is fluent in both languages and Liya is more comfortable with her brother present.', -2,
        { r: 'Child as interpreter', approach: 'Sibling interpreter', why: 'Using a child to interpret burdens him, distorts clinical content, and compromises confidentiality', keys: ['Yonas is 11'], mistake: 'Choosing convenience over a qualified interpreter' }),
      O('b', 'Have Dawit interpret again, since he speaks English well and already knows the family\'s history and concerns.', -1,
        { r: 'Family interpreter filters Selam', approach: 'Spouse interpreter', why: 'A family member may filter or reframe Selam\'s words, and Dawit already holds a "she will grow out of it" view', keys: ['Dawit interpreted at intake'], mistake: 'Assuming a bilingual relative is an adequate interpreter' }),
      O('c', 'Arrange a qualified Amharic interpreter through the practice\'s service so Selam can take part directly.', 3,
        { r: 'Qualified interpreter', approach: 'Secure translation services', why: 'A trained interpreter lets Selam communicate in her preferred language accurately and confidentially', keys: ['Selam prefers Amharic', 'interpreter service contract'], mistake: 'Relying on family members when professional interpreting is available' }),
      O('d', 'Hold the session in English with Dawit and send Selam a written summary in Amharic afterward.', 0,
        { r: 'Excludes Selam from dialogue', approach: 'Translate afterward', why: 'A written summary is better than nothing, but Selam is the main caregiver and needs to take part in the conversation', keys: ['Selam wants to attend'], mistake: 'Informing a parent instead of including her' }),
    ]),
    Q('q6', 'planning', 'How should the plan respond to the ESL teacher\'s advice to speak only English at home?', ['R4', 'R3'], [
      O('a', 'Support the ESL teacher\'s advice, since more English at home will help Liya feel ready to speak at school.', -1,
        { r: 'Misreads the problem', approach: 'English-immersion framing', why: 'Liya already speaks English at home; the problem is anxiety at school, not language exposure', keys: ['plays in English with Yonas'], mistake: 'Treating an anxiety disorder as a language deficit' }),
      O('b', 'Keep Amharic at home, and set goals for speaking at school in whichever language Liya chooses at each step.', 3,
        { r: 'Honors home language, targets anxiety', approach: 'Integrate cultural considerations', why: 'Preserving the home language protects family bonds and identity, while goals focus on speaking at school in any language', keys: ['Amharic at home', 'silent at school in both'], mistake: 'Building language assimilation into an anxiety plan' }),
      O('c', 'Leave home language choices entirely to the parents and focus the plan only on what happens at school.', 0,
        { r: 'Misses a teachable moment', approach: 'Stay neutral', why: 'Respecting parental choice is right, but the parents were given advice that does not fit Liya\'s problem and deserve accurate information', keys: ['ESL teacher advice'], mistake: 'Staying silent when the family has received misleading advice' }),
      O('d', 'Make English at home a treatment goal, rewarding Liya each time she uses English with her parents and brother.', -2,
        { r: 'Undermines family and identity', approach: 'English-only goal', why: 'Rewarding English over Amharic at home targets the wrong problem and can damage family communication and identity', keys: ['Selam speaks limited English'], mistake: 'Treating the home language as an obstacle' }),
    ]),
    Q('q7', 'planning', 'Which treatment approach best fits Liya\'s plan?', ['R4'], [
      O('a', 'Wait until second grade to see whether Liya begins speaking as her English improves, monitoring progress.', -1,
        { r: 'Wait-and-see', approach: 'Watchful waiting', why: 'Selective mutism lasting over a year tends to persist without treatment; waiting delays care', keys: ['14 months of silence'], mistake: 'Assuming selective mutism will resolve on its own' }),
      O('b', 'Require Liya to say a word before she can join recess or get help, so that speaking becomes necessary for her.', -2,
        { r: 'Coercive pressure', approach: 'Forced speech', why: 'Demanding speech under threat of loss raises anxiety and entrenches mutism', keys: ['anxiety-based silence'], mistake: 'Using punishment to force speech' }),
      O('c', 'Use play therapy to build rapport with the counselor, adding speaking goals once she talks freely in sessions.', 0,
        { r: 'Rapport without exposure', approach: 'Rapport first', why: 'Rapport matters, but without graded speaking steps progress is slow and may never generalize to school', keys: ['school is the target'], mistake: 'Postponing behavioral steps until rapport is complete' }),
      O('d', 'Use stimulus fading and shaping, starting with Selam at school after hours, coordinated with Ms. Kowalski.', 3,
        { r: 'Evidence-based behavioral plan', approach: 'Stimulus fading and shaping', why: 'Fading new people and places into settings where she already speaks, with shaped and reinforced steps, is the core treatment for selective mutism', keys: ['speaks with mother', 'releases for school signed'], mistake: 'Choosing nondirective or coercive methods over graded behavioral steps' }),
    ]),
    // ---------------- session2 (6): legal x3, interventions x3 ----------------
    Q('q8', 'legal', 'How should the counselor respond to the videos Dawit is sending to her personal phone?', ['R5', 'R2'], [
      O('a', 'Thank Dawit, explain the privacy risks, and set up the practice\'s secure method for sharing any videos from now on.', 3,
        { r: 'Secure the information', approach: 'Securely maintain records', why: 'Client recordings are health information; moving them to a secure, approved channel protects the family while keeping useful data', keys: ['personal cell phone', 'WhatsApp'], mistake: 'Accepting clinical material through unsecured personal channels' }),
      O('b', 'Keep the videos on her personal phone for reference, since they are helpful and the family chose to send them.', -1,
        { r: 'Unsecured storage', approach: 'Keep as is', why: 'Family choice does not make a personal phone a secure record system', keys: ['personal device'], mistake: 'Treating client-initiated sharing as permission to store insecurely' }),
      O('c', 'Delete the videos from her phone right away without noting them, and ask Dawit to stop sending recordings.', 0,
        { r: 'Secure but loses information', approach: 'Delete and stop', why: 'Removing them from a personal device is right, but the clinical information should be documented and a secure route offered', keys: ['videos show home speech'], mistake: 'Solving a security problem by discarding useful clinical data' }),
      O('d', 'Forward the videos to Ms. Kowalski so the teacher can hear Liya speak, since the parents want the school informed.', -2,
        { r: 'Unauthorized redisclosure', approach: 'Share with school', why: 'Forwarding recordings exceeds what the parents authorized and spreads identifiable material through an insecure channel', keys: ['school release not for videos'], mistake: 'Assuming a general wish to inform the school covers specific disclosures' }),
    ]),
    Q('q9', 'legal', 'What should the counselor do about the English-only release for the 504 meeting?', ['R2', 'R6'], [
      O('a', 'Have Dawit sign the English release for both parents, since he reads English well and can explain it to Selam later.', -1,
        { r: 'Selam not informed', approach: 'One-parent signature', why: 'Relying on Dawit leaves Selam without direct understanding of what she is authorizing', keys: ['Selam prefers Amharic'], mistake: 'Assuming one parent can carry consent for a parent who does not read the form' }),
      O('b', 'Attend the 504 meeting and share information about Liya, since the parents said aloud that they were willing.', -2,
        { r: 'No valid authorization', approach: 'Verbal willingness', why: 'Spoken willingness without an informed, signed release does not meet consent requirements', keys: ['release not signed'], mistake: 'Treating verbal agreement as a release of information' }),
      O('c', 'Give the parents the English release to take home, so they can ask a relative to translate it before signing.', 0,
        { r: 'Shifts the burden', approach: 'Family translation', why: 'Taking time is fine, but informal translation may be inaccurate; the practice should provide language access', keys: ['interpreter available'], mistake: 'Leaving translation of consent documents to relatives' }),
      O('d', 'Review the release with both parents through the interpreter, confirm they understand it, and then obtain signatures.', 3,
        { r: 'Informed consent in her language', approach: 'Follow release-of-information SOP', why: 'Consent is valid only when understood; reviewing it through a qualified interpreter lets both parents authorize knowingly', keys: ['English-only form', 'Selam prefers Amharic'], mistake: 'Treating a signature as consent without comprehension' }),
    ]),
    Q('q10', 'legal', 'How should the counselor respond to the billing manager\'s proposed interpreter fee?', ['R6'], [
      O('a', 'Charge the family the $40 fee, since Medicaid does not separately reimburse the practice for interpreter costs.', -2,
        { r: 'Violates language-access law', approach: 'Pass cost to family', why: 'Providers receiving federal funds, including Medicaid, must provide language assistance free of charge', keys: ['Medicaid', 'interpreter fee'], mistake: 'Treating language access as a billable extra' }),
      O('b', 'Provide the interpreter at no cost to the family, as federal language-access rules require of Medicaid providers.', 3,
        { r: 'Free language assistance', approach: 'Adhere to federal law', why: 'Title VI and Section 1557 require federally funded providers to offer qualified language assistance at no cost', keys: ['Medicaid provider', 'Selam prefers Amharic'], mistake: 'Letting reimbursement gaps override legal duties' }),
      O('c', 'Waive the fee only if the family shows financial hardship, since interpreter costs are otherwise the family\'s.', -1,
        { r: 'Conditions a legal right', approach: 'Hardship waiver', why: 'Language access is not means-tested; requiring proof of hardship still violates the duty', keys: ['Medicaid'], mistake: 'Treating a civil-rights requirement as charity' }),
      O('d', 'Use the interpreter only for Selam\'s own sessions, and hold sessions with Dawit in English to limit the costs.', 0,
        { r: 'Reasonable but narrow', approach: 'Limit interpreter use', why: 'Dawit may not need one, but planning access around cost rather than need risks excluding Selam from joint work', keys: ['joint family sessions'], mistake: 'Planning language access around cost' }),
    ]),
    Q('q11', 'interventions', 'Liya whispers answers to Selam during the game while the counselor sits across the room. What should happen next?', ['R4'], [
      O('a', 'Ask Liya to repeat her answer aloud to the counselor, since she has just shown that she is able to speak.', -2,
        { r: 'Direct pressure', approach: 'Demand speech', why: 'Asking her to speak to a new person at once spikes anxiety and can undo progress', keys: ['whispers only to mother'], mistake: 'Treating the ability to speak as readiness to speak to anyone' }),
      O('b', 'Have Selam relay Liya\'s whispered answers to the counselor so the game can go on with no pressure on Liya.', 0,
        { r: 'Proxy speech maintains avoidance', approach: 'Relay through mother', why: 'Relaying keeps the game going but lets Liya avoid speaking in the counselor\'s presence', keys: ['parents answer for her'], mistake: 'Accepting a speaking proxy as progress' }),
      O('c', 'Have the counselor move closer step by step while Selam keeps the game going, praising speech without fuss.', 3,
        { r: 'Stimulus fading in action', approach: 'Implement stimulus fading', why: 'Gradually fading in the counselor while speech continues with her mother, with low-key praise, is the evidence-based next step', keys: ['speaks to Selam in session', 'counselor across the room'], mistake: 'Either pressuring speech or leaving the counselor outside the speaking circle' }),
      O('d', 'Leave the room whenever Liya speaks to Selam, so she can enjoy talking without a stranger in the session.', -1,
        { r: 'Removes the new stimulus', approach: 'Withdraw', why: 'Leaving keeps her comfortable but blocks the counselor from being faded into her speaking circle', keys: ['goal is speech with new people'], mistake: 'Confusing comfort with progress' }),
    ]),
    Q('q12', 'interventions', 'How should the counselor respond to Selam\'s statement that she is being blamed?', ['R4', 'R2'], [
      O('a', 'Acknowledge her concern, ask how children are raised to speak with teachers, and set goals that respect those values.', 3,
        { r: 'Repair and broach culture', approach: 'Resolve rupture, explore culture', why: 'Acknowledging the rupture and exploring her cultural values lets the counselor frame goals that fit the family', keys: ['"you make it sound like I did something wrong"'], mistake: 'Explaining the treatment again instead of repairing the rupture' }),
      O('b', 'Tell Selam that cultural norms of quiet children are causing Liya\'s mutism and the family needs to change them.', -2,
        { r: 'Blames the culture', approach: 'Pathologize culture', why: 'Blaming the family\'s culture confirms her fear, damages trust, and is inaccurate', keys: ['rupture in progress'], mistake: 'Attributing a disorder to the family\'s cultural values' }),
      O('c', 'Reassure Selam that no one is to blame and return to explaining the stimulus fading steps planned for this week.', 0,
        { r: 'Reassure and move on', approach: 'Quick reassurance', why: 'Reassurance helps, but moving on skips the cultural meaning behind her reaction', keys: ['cultural values raised'], mistake: 'Smoothing over a rupture without exploring it' }),
      O('d', 'Agree that Liya\'s quietness reflects their culture and suggest they revisit treatment if school gets harder.', -1,
        { r: 'Avoids conflict, abandons the plan', approach: 'Concede to avoid conflict', why: 'Agreeing that culture explains 14 months of silence ends needed treatment to avoid discomfort', keys: ['silent with peers in both languages'], mistake: 'Avoiding a rupture by dropping clinically needed work' }),
    ]),
    Q('q13', 'interventions', 'What should the counselor teach Liya\'s parents about how they respond when adults speak to her?', ['R4'], [
      O('a', 'Praise Liya warmly and at length each time she speaks, so that she learns speaking earns lots of adult attention.', 0,
        { r: 'Right idea, too much attention', approach: 'Big praise', why: 'Reinforcing speech is right, but effusive praise can make speaking feel like a spotlight; low-key praise works better', keys: ['anxious about attention'], mistake: 'Over-praising a socially anxious child' }),
      O('b', 'Encourage the parents to keep answering for Liya when adults ask her questions, so she does not feel put on the spot.', -1,
        { r: 'Maintains avoidance', approach: 'Rescue the child', why: 'Answering for her removes the chance to speak and maintains the mutism', keys: ['parents answer for her'], mistake: 'Treating rescue as kindness' }),
      O('c', 'Advise the parents to withhold privileges until Liya speaks to adults outside the family, to build her motivation.', -2,
        { r: 'Punitive pressure', approach: 'Withhold privileges', why: 'Punishing silence raises anxiety and damages the parent-child relationship', keys: ['anxiety-based silence'], mistake: 'Treating anxiety-driven silence as defiance' }),
      O('d', 'Coach them to wait about five seconds, offer choice questions, and avoid answering for Liya when adults speak to her.', 3,
        { r: 'Reduce rescue, scaffold speech', approach: 'Psychoeducation for parents', why: 'Waiting, offering forced-choice questions, and not answering for her give Liya manageable chances to speak', keys: ['parents answer for her'], mistake: 'Leaving parent rescuing unaddressed' }),
    ]),
  ],
};

module.exports = { CASES: [D925, D926, D927, D928, D929] };
