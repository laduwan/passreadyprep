// deep-cases-2027-batch-04.js — NCMHCE deep cases, 2027 specification
// ids: ncmhce-D935, ncmhce-D936, ncmhce-D937, ncmhce-D938, ncmhce-D939
// 2027 NCMHCE specification; hand-authored; validate with check2027.js
//
// ncmhce-D935 · plan 5 · Trauma · medium · adult — Acute Stress Disorder (F43.0)
// ncmhce-D936 · plan 6 · Substance · hard · adult — Opioid Use Disorder, Severe (F11.20)
// ncmhce-D937 · plan 7 · Substance · easy · child — Cannabis Use Disorder, Moderate (F12.20)
// ncmhce-D938 · plan 8 · Substance · medium · adult — Stimulant Use Disorder, Cocaine, Moderate (F14.20)
// ncmhce-D939 · plan 9 · Substance · medium · couple_family — Gambling Disorder (F63.0)
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
// D935 — Acute Stress Disorder after a workplace shooting (plan 5)
// ============================================================================
const D935 = {
  id: 'ncmhce-D935',
  title: 'A store manager held the stockroom door shut, and ten days later she cannot stop holding it',
  category: 'Trauma',
  difficulty: 'medium',
  plan: 5,
  population: 'adult',
  primaryDiagnosis: { name: 'Acute Stress Disorder', code: 'F43.0' },
  diagnosis: { name: 'Acute Stress Disorder', code: 'F43.0' },
  differentialOptions: [
    { id: 'do1', name: 'Posttraumatic Stress Disorder', isCorrect: false },
    { id: 'do2', name: 'Acute Stress Disorder', isCorrect: true },
    { id: 'do3', name: 'Adjustment Disorder, with Anxiety', isCorrect: false },
    { id: 'do4', name: 'Alcohol Use Disorder, Mild', isCorrect: false },
  ],
  narrative: {
    intake:
      'Abena Owusu-Mensah, 34, a Ghanaian American assistant manager at a suburban home-improvement store, is referred through her employer’s ' +
      'Employee Assistance Program (EAP) 10 days after a gunman opened fire in the store’s garden center and wounded a cashier, Luis, who survived. ' +
      'Abena herded six customers into a stockroom and held the door shut for 25 minutes until police arrived. Intake is by video from her apartment, ' +
      'where she lives with her 14-year-old son. The counselor completes telemental health informed consent and records her physical address, an ' +
      'emergency contact (her sister, Efua), and the nearest emergency department. Since the shooting Abena reports intrusive images of the door ' +
      'handle turning, nightly nightmares, feeling “like I’m watching myself from the ceiling,” trying not to think about that day, avoiding the store ' +
      'and the news, being unable to feel happy even with her son, checking the door locks several times a night, jumping at loud sounds, snapping at ' +
      'her son, poor concentration, and 3–4 hours of sleep. She now drinks two to three glasses of wine most nights “to switch my brain off”; before ' +
      'the shooting she drank only at weddings. She denies suicidal ideation, intent, or plan, denies thoughts of harming anyone, and reports no ' +
      'firearms in the home. She has no prior psychiatric history. The EAP covers six sessions, and Abena signed a release allowing the counselor to ' +
      'give the EAP coordinator only her attendance and a general work-status recommendation. The counselor, an EAP-contracted provider, has done four ' +
      'intakes with employees from the same store this week, including Abena’s direct report, Devin, whom Abena blames for “freezing” instead of ' +
      'locking the front doors. That night the counselor notices replaying survivors’ details while trying to fall asleep.',
    session1:
      'Fifteen days after the shooting, Abena’s PCL-5 score is 51. Her primary care physician prescribed trazodone for sleep five days ago; she says ' +
      'she now sleeps about five hours but feels “foggy until noon” and nearly backed into a pole leaving her driveway. She has cut back to one glass ' +
      'of wine most nights. Carla, the store’s HR manager, calls the counselor asking for Abena’s diagnosis and whether she can return to full closing ' +
      'shifts next Monday. Abena says she wants to be back “for my team” but feels sick driving past the store. The store plans a mandatory group ' +
      '“debriefing” at which every employee will retell what they saw, and Abena asks whether she should go. She says her goals are to sleep through ' +
      'the night, stop the nightmares, and be working again within a month.',
    session2:
      'Twenty-two days after the shooting, Abena logs on from Efua’s house in a neighboring state, where she is staying for a week; the counselor is ' +
      'licensed only in the state where Abena lives. Twenty minutes in, a car backfires outside. Abena goes still, stares past the camera, and says, ' +
      '“I’m back in the stockroom.” Later she says, “If I had yelled for Luis to come with us, he wouldn’t have been shot.” The counselor’s practice has ' +
      'just begun using an AI ambient note-taker that records sessions and drafts progress notes; Abena has not been told about it. With the EAP ' +
      'sessions nearly used, Abena asks to continue through her health insurance but asks the counselor to bill “without a diagnosis, so it doesn’t ' +
      'follow me at work.”',
  },
  diagnosticRationale:
    'Abena was directly exposed to actual and threatened death (Criterion A) and, within days, developed well over nine of the fourteen acute stress ' +
    'symptoms across intrusion (memories, nightmares), negative mood (inability to feel happiness), dissociation (depersonalization), avoidance ' +
    '(of thoughts and of external reminders), and arousal (sleep disturbance, irritability, hypervigilance with lock-checking, poor concentration, ' +
    'exaggerated startle), with clear distress and impairment. Symptoms are present between 3 days and 1 month after the event, which defines acute ' +
    'stress disorder; PTSD cannot be diagnosed until symptoms persist beyond one month. New nightly drinking is self-medication to monitor, not yet ' +
    'a use disorder. If symptoms continue past the one-month mark, the diagnosis is re-evaluated for PTSD.',
  references: [
    { id: 'R1', source: 'DSM-5-TR', detail: 'Acute stress disorder: Criterion A exposure; 9 or more of 14 symptoms in any category; duration 3 days to 1 month after trauma (F43.0); PTSD requires more than 1 month' },
    { id: 'R2', source: 'NICE guidelines', detail: 'PTSD (NG116): do not offer psychologically focused debriefing; consider individual trauma-focused CBT within 1 month for acute stress disorder or clinically important symptoms; active monitoring' },
    { id: 'R3', source: 'VA/DoD CPG', detail: 'Management of PTSD and acute stress reaction: early psychological first aid principles, trauma-focused psychotherapy, and against benzodiazepines' },
    { id: 'R4', source: 'ACA Code of Ethics', detail: 'Counselor impairment and self-care (C.2.g.); informed consent including technology and record-keeping; confidentiality and release of information; accurate billing and records' },
    { id: 'R5', source: 'HIPAA', detail: 'Minimum-necessary disclosures limited to the scope of a valid authorization; business associate agreements for vendors handling PHI' },
    { id: 'R6', source: 'NBCC 2027 Spec', detail: 'Telemental health location verification and licensure where the client is located; AI tools in practice; vicarious trauma; billing documentation' },
  ],
  questions: [
    // ---------------- intake (profdev, assess, assess, profdev) ----------------
    Q('q1', 'profdev', 'intake', 'After four survivor intakes this week, the counselor is replaying survivors’ details at night. What is the most appropriate first step?', ['R4', 'R6'], [
      O('a', 'Add exercise and an earlier bedtime on her own time and keep this week’s full survivor caseload unchanged for continuity.', 0,
        'Self-care alone is incomplete', 'Private self-care only', 'Self-care matters, but early vicarious trauma signs also call for supervision and a look at caseload concentration so client care is protected', ['four survivor intakes in one week'], 'Treating vicarious trauma as a private wellness issue instead of a professional-practice issue'),
      O('b', 'Recognize likely vicarious trauma exposure, bring it to supervision, and adjust caseload and self-care before care is affected.', 3,
        'Assess exposure, use supervision, adjust load', 'Self-assessment plus supervision', 'Counselors monitor their own vicarious trauma exposure and act on early signs through supervision, workload changes, and self-care so impairment does not reach clients', ['replaying survivors’ details at night', 'concentrated trauma caseload'], 'Waiting until performance slips before addressing vicarious trauma'),
      O('c', 'Tell Abena in session that the counselor has also been losing sleep, so she feels less alone in her reaction to the shooting.', -1,
        'Self-disclosure serves the counselor', 'Mutual-disclosure framing', 'Disclosing the counselor’s own distress shifts focus to the counselor and may lead Abena to protect the counselor rather than speak freely', ['client in acute distress'], 'Using self-disclosure to meet the counselor’s needs rather than the client’s'),
      O('d', 'Close all four store cases this week and give each client the EAP phone number so they can request a different counselor.', -2,
        'Abrupt closure abandons clients', 'Withdraw from all cases', 'Ending care abruptly for acutely traumatized clients without transition is abandonment; impairment is addressed through supervision and planned referral when needed', ['10 days post-trauma', 'acute symptoms'], 'Confusing self-protection with abandonment of clients in acute need'),
    ]),
    Q('q2', 'assess', 'intake', 'Which finding most directly supports acute stress disorder rather than PTSD for Abena right now?', ['R1'], [
      O('a', 'Her symptoms are severe and impairing, which places her presentation in PTSD rather than in a briefer stress reaction.', -1,
        'Severity does not set the diagnosis', 'Severity framing', 'Acute stress disorder can be severe; what separates it from PTSD is timing, not intensity', ['day 10 after the shooting'], 'Using symptom severity instead of duration to choose between ASD and PTSD'),
      O('b', 'She was not physically injured herself, so the exposure criterion is unmet and an adjustment disorder fits better.', -2,
        'Misreads the exposure criterion', 'Injury-required framing', 'Direct exposure to threatened death qualifies; she was present and threatened during an active shooting, so Criterion A is clearly met', ['held the door shut for 25 minutes'], 'Believing physical injury is required for trauma-related diagnoses'),
      O('c', 'Her depersonalization is present, and a dissociative symptom is required before acute stress disorder can be given.', 0,
        'Dissociation is not required', 'Dissociation-required framing', 'DSM-5-TR requires nine of fourteen symptoms from any category; dissociation counts toward the total but is not mandatory', ['“watching myself from the ceiling”'], 'Applying the older DSM-IV dissociation requirement to the current criteria'),
      O('d', 'Nine or more qualifying symptoms began after the shooting and have lasted between three days and one month so far.', 3,
        'Symptom count plus the time window', 'Apply criteria and duration', 'ASD requires nine or more of fourteen symptoms present from 3 days to 1 month after exposure; PTSD cannot be diagnosed until symptoms exceed one month', ['10 days post-event', 'intrusion, avoidance, arousal, dissociation'], 'Diagnosing PTSD before the one-month duration has been reached'),
    ]),
    Q('q3', 'assess', 'intake', 'How should the counselor respond to Abena’s new nightly drinking at this point?', ['R1', 'R3'], [
      O('a', 'Screen her drinking with a structured tool, review risk in light of it, and track the pattern as treatment goes on.', 3,
        'Screen, assess risk, monitor', 'Structured substance screen', 'New drinking to cope after trauma raises risk for a use disorder and for impulsive harm; a structured screen sets a baseline and guides monitoring', ['two to three glasses most nights', 'drank only at weddings before'], 'Assuming trauma-related drinking will resolve on its own'),
      O('b', 'Note the drinking in the record and revisit it only if it continues after her trauma symptoms begin to ease.', 0,
        'Deferring a needed screen', 'Watchful-waiting framing', 'Noting it is a start, but self-medication after trauma warrants a structured screen now rather than waiting for symptoms to resolve', ['abrupt change in drinking'], 'Treating self-medication as secondary to trauma symptoms instead of assessing it'),
      O('c', 'Refer her today for an inpatient withdrawal program because daily drinking after trauma signals alcohol dependence.', -1,
        'Over-restrictive and unsupported', 'Escalate level of care', 'Ten days of two to three drinks a night does not establish dependence or a need for inpatient care; assessment should precede level-of-care decisions', ['no prior use history'], 'Jumping to a high level of care before assessing severity'),
      O('d', 'Advise that a glass or two at night is a reasonable short-term sleep aid while the acute trauma symptoms settle.', -2,
        'Endorses self-medication', 'Normalize drinking for sleep', 'Alcohol fragments sleep, worsens nightmares and mood, and builds a drinking pattern that can harden into a use disorder after trauma', ['drinking “to switch my brain off”'], 'Endorsing alcohol as a coping tool for trauma symptoms'),
    ]),
    Q('q4', 'profdev', 'intake', 'Abena blames Devin, whom the counselor also saw at intake this week. How should the counselor handle seeing both?', ['R4'], [
      O('a', 'Keep seeing both and keep each one’s information separate, without raising the overlap with the EAP or with either client.', 0,
        'Confidential but conflict unexamined', 'Silent separation', 'Keeping information separate protects confidentiality, but the conflict of interest still needs assessment and a transparent plan', ['Abena blames Devin'], 'Assuming confidentiality alone resolves a conflict of interest'),
      O('b', 'Use what Devin shared about that day to help Abena see the event more accurately and to soften her anger at him.', -2,
        'Breaches Devin’s confidentiality', 'Cross-client disclosure', 'Using one client’s disclosures in another client’s treatment breaches confidentiality, even when the intent is therapeutic', ['two clients from the same incident'], 'Treating clients from the same event as a shared information pool'),
      O('c', 'Assess the conflict of interest and, with consent, arrange through the EAP for one of them to see a different counselor.', 3,
        'Assess suitability; transfer one case', 'Conflict-of-interest review', 'Treating a client alongside the coworker she blames can compromise objectivity and trust; the counselor assesses suitability and arranges a transfer with consent', ['Abena blames Devin', 'same EAP provider'], 'Overlooking how a relational conflict between two clients affects counselor objectivity'),
      O('d', 'Invite Abena and Devin to a joint session so they can talk through that day and repair their working relationship.', -1,
        'Premature conjoint work', 'Mediation framing', 'Bringing two acutely traumatized coworkers together to process blame is not the treatment either sought and risks re-exposure and conflict', ['acute stage', 'individual EAP referrals'], 'Turning individual trauma care into workplace mediation'),
    ]),

    // ---------------- session1 (indirect, planning, indirect, planning) ----------------
    Q('q5', 'indirect', 'session1', 'Carla from HR asks for Abena’s diagnosis and whether she can work full closing shifts Monday. How should the counselor respond?', ['R5'], [
      O('a', 'Share her diagnosis with Carla, because the EAP benefit is employer-sponsored and HR coordinates return-to-work planning.', -1,
        'Exceeds the release', 'Employer-entitlement framing', 'The release covers attendance and a general work-status recommendation only; an employer-sponsored benefit does not entitle HR to a diagnosis', ['release limited to attendance and work status'], 'Assuming employer sponsorship of an EAP widens what can be disclosed'),
      O('b', 'Confirm attendance and give a general work-status recommendation only, as the release allows, and discuss the call with Abena.', 3,
        'Disclose within the release only', 'Minimum necessary', 'Disclosures stay within the signed authorization; the counselor shares only what Abena approved and keeps her informed about the request', ['release limited to attendance and work status', 'HR requesting diagnosis'], 'Disclosing beyond a release because the requester has a legitimate interest'),
      O('c', 'Decline to say anything at all, including attendance, until Abena signs a broader release that names her diagnosis.', 0,
        'Overly restrictive', 'Refuse all disclosure', 'Withholding even what Abena authorized is safe but unhelpful; she agreed to attendance and work-status updates, and a broader release is not needed', ['valid release on file'], 'Treating any third-party call as a reason to share nothing'),
      O('d', 'Send Carla the intake summary so the store can plan accommodations that fit Abena’s symptoms and her sleep problems.', -2,
        'Releases full records without consent', 'Full-record disclosure', 'Sending clinical records to an employer without authorization violates confidentiality and could harm her employment', ['no authorization for records'], 'Releasing clinical documentation to an employer to be helpful'),
    ]),
    Q('q6', 'planning', 'session1', 'Abena asks whether to attend the store’s mandatory group debriefing. Which initial plan best fits her diagnosis?', ['R2', 'R3'], [
      O('a', 'Encourage her to attend the debriefing so she can retell the event in detail with coworkers while support is close.', -2,
        'Debriefing is not recommended', 'Single-session debriefing', 'Single-session psychological debriefing that requires retelling the event is not recommended and may raise later PTSD risk', ['mandatory retelling', 'acute stress disorder'], 'Assuming early, detailed retelling prevents PTSD'),
      O('b', 'Hold formal treatment for now and offer supportive check-ins, since most people recover within the first month on their own.', 0,
        'Watchful waiting under-treats ASD', 'Watchful waiting only', 'Many people recover, but a diagnosed acute stress disorder with marked impairment warrants active treatment, not monitoring alone', ['PCL-5 of 51', 'impairment at home and work'], 'Applying watchful waiting to a client who already meets ASD criteria'),
      O('c', 'Start brief trauma-focused CBT with sleep and coping goals, and help her plan to attend without retelling details.', 3,
        'Early trauma-focused CBT', 'Guideline-matched plan', 'Guidelines support individual trauma-focused CBT within the first month for acute stress disorder and advise against single-session debriefing; if the employer requires attendance, she can be present for practical support without recounting the event in detail', ['ASD at day 15', 'mandatory retelling planned'], 'Defaulting to detailed retelling or waiting instead of early trauma-focused CBT'),
      O('d', 'Ask her physician to add a benzodiazepine for anxiety and focus counseling on support until her sleep is restored.', -1,
        'Outside scope; not recommended', 'Medication-first framing', 'Recommending a specific medication is outside counselor scope, and benzodiazepines are advised against after trauma; counseling should not wait on sleep', ['acute trauma', 'counselor scope'], 'Directing medication choices and delaying indicated psychotherapy'),
    ]),
    Q('q7', 'indirect', 'session1', 'Abena reports feeling foggy until noon on trazodone and nearly backing into a pole. What should the counselor do?', ['R4'], [
      O('a', 'Leave the medication report out of the note, since prescriptions are the physician’s domain and not part of counseling.', -1,
        'Omits clinically relevant data', 'Out-of-scope framing', 'Self-reported medication effects belong in counseling documentation, and a safety-relevant effect needs to reach the prescriber', ['near-miss while driving'], 'Confusing not prescribing with not documenting medication effects'),
      O('b', 'Document her report in her own words and, with her consent, let her physician know about the morning sedation.', 3,
        'Document and coordinate', 'Record self-report; inform prescriber', 'Counselors document self-reported medication effects and, with consent, coordinate with the prescriber, especially when safety such as driving is involved', ['“foggy until noon”', 'near-miss driving'], 'Failing to relay a safety-relevant side effect to the prescriber'),
      O('c', 'Suggest she take half the trazodone dose for a week and report back on whether the morning fog has lifted.', -2,
        'Medication advice outside scope', 'Adjust the dose', 'Advising a dose change is outside counselor scope and could lead to unmanaged side effects or loss of benefit', ['counselor scope'], 'Giving medication instructions instead of coordinating with the prescriber'),
      O('d', 'Note the side effect in the record and encourage her to mention it at her regular physician visit next month.', 0,
        'Delays a safety concern', 'Document and defer', 'Documentation is right, but sedation affecting driving is a safety issue that warrants timely prescriber contact rather than waiting a month', ['near-miss while driving'], 'Underestimating the urgency of a safety-relevant side effect'),
    ]),
    Q('q8', 'planning', 'session1', 'Which treatment goal is best written for Abena’s plan?', ['R1', 'R2'], [
      O('a', 'Abena will feel like herself again and get back to normal at work and at home as soon as she feels ready to do so.', -1,
        'Vague and unmeasurable', 'Global-wellness goal', 'The goal has no measure, criterion, or time frame, so progress and medical necessity cannot be tracked', ['no baseline or date'], 'Writing goals as hopes rather than measurable targets'),
      O('b', 'Abena will return to full closing shifts next Monday as HR requested, with her counselor confirming readiness.', -2,
        'Adopts employer timeline over clinical need', 'Employer-driven goal', 'The goal serves HR’s schedule, ignores her avoidance and sedation, and makes the counselor a gatekeeper for a premature return', ['feels sick driving past the store', 'morning sedation'], 'Letting a third party set the client’s treatment goals'),
      O('c', 'Within four weeks, her PCL-5 will fall below 33 and she will sleep six hours on five of seven nights per sleep log.', 3,
        'SMART and baseline-linked', 'Measurable, time-bound goal', 'A SMART goal names a measure, a target, and a date tied to baseline data such as her PCL-5 of 51 and her own sleep goals', ['PCL-5 of 51', 'goal to sleep through the night'], 'Omitting the baseline measure that makes progress visible'),
      O('d', 'Abena will attend all six EAP sessions and complete her trauma-focused CBT homework assignments each week.', 0,
        'Process, not outcome', 'Attendance goal', 'Attendance and homework are useful objectives, but they measure participation rather than change in her symptoms or functioning', ['outcome not specified'], 'Confusing treatment participation with treatment outcome'),
    ]),

    // ---------------- session2 (interventions, interventions, legal, legal, legal) ----------------
    Q('q9', 'interventions', 'session2', 'When the car backfires, Abena freezes and says, “I’m back in the stockroom.” What should the counselor do first?', ['R2', 'R3'], [
      O('a', 'Ask her to describe in detail what she is seeing in the stockroom, since the memory is already active right now.', -2,
        'Unstructured exposure while dissociated', 'Seize the activation', 'Pushing detailed recall during a dissociative episode, without preparation, risks retraumatization rather than therapeutic exposure', ['dissociated', 'unplanned trigger'], 'Mistaking spontaneous flooding for planned exposure work'),
      O('b', 'Reassure her that she is safe at her sister’s house and move on to the planned agenda for the rest of the session.', -1,
        'Skips stabilization', 'Reassure and proceed', 'Reassurance alone does not reorient a dissociating client; continuing the agenda leaves her ungrounded', ['staring past the camera'], 'Assuming verbal reassurance ends a dissociative reaction'),
      O('c', 'Offer to end the session early so she can rest and pick up the trauma work again at the next appointment.', 0,
        'Ends before she is grounded', 'Early close', 'Stopping may feel kind, but ending a video session while she is dissociated leaves her without support; ground her first, then decide', ['dissociation on video'], 'Ending a session before the client is reoriented'),
      O('d', 'Ground her: orient her to the present, slow her breathing, and have her name objects in the room before going on.', 3,
        'Ground and reorient first', 'Grounding and de-escalation', 'Grounding brings her back to the present and lowers arousal; trauma work resumes only once she is oriented and regulated', ['“I’m back in the stockroom”', 'loud trigger'], 'Continuing trauma content before the client is regulated'),
    ]),
    Q('q10', 'interventions', 'session2', 'Abena says, “If I had yelled for Luis to come with us, he wouldn’t have been shot.” Which response best fits trauma-focused CBT?', ['R2'], [
      O('a', 'Use Socratic questions about what she knew and could do in those seconds, to examine her hindsight-based guilt.', 3,
        'Socratic restructuring of guilt', 'Cognitive restructuring', 'Examining what she knew at the time helps her separate hindsight from responsibility, a core move in trauma-focused CBT', ['“If I had yelled for Luis”', 'hindsight bias'], 'Leaving a trauma-related guilt cognition unexamined'),
      O('b', 'Tell her firmly that she did nothing wrong and that nobody could expect her to have saved everyone in the store.', 0,
        'Reassurance does not shift the belief', 'Direct reassurance', 'Reassurance is kind, but guilt beliefs tend to persist unless she examines the evidence herself', ['self-blame about Luis'], 'Substituting reassurance for cognitive work on a stuck belief'),
      O('c', 'Explore whether her guilt echoes earlier family experiences where she felt responsible for keeping others safe.', -1,
        'Shifts away from the trauma belief', 'Historical-insight framing', 'Early history may matter later, but the current target is a specific trauma cognition that responds to restructuring now', ['acute stress disorder', 'specific guilt belief'], 'Applying an insight framework when a cognitive target is present'),
      O('d', 'Agree that she could have done more and suggest she apologize to Luis, so she can begin to let the guilt go.', -2,
        'Reinforces distorted blame', 'Validate the self-blame', 'Endorsing her self-blame strengthens the distortion and could deepen guilt and depression', ['she sheltered six customers'], 'Validating a distorted belief in the name of accountability'),
    ]),
    Q('q11', 'legal', 'session2', 'Abena logs on from her sister’s home in a neighboring state. What should the counselor do before continuing?', ['R6'], [
      O('a', 'Proceed as usual, since licensure follows the counselor’s office and Abena remains a resident of the counselor’s state.', -2,
        'Misstates where practice occurs', 'Provider-location framing', 'Telemental health is generally regulated where the client is located; proceeding without authority there may be unlicensed practice', ['client in another state'], 'Assuming the counselor’s location determines licensure'),
      O('b', 'Confirm her current address and local emergency resources, and verify authority to practice where she is located.', 3,
        'Verify location, emergency plan, licensure', 'Telehealth location check', 'Each telehealth session confirms the client’s location and emergency plan, and the counselor verifies authority to practice there, such as a Compact privilege or that state’s rules', ['staying in a neighboring state', 'licensed only in her home state'], 'Skipping the location check that drives both emergency planning and licensure'),
      O('c', 'Finish today’s session, then update her emergency contact information in the record before the next appointment.', 0,
        'Right idea, wrong order', 'Update after the fact', 'Updating the record matters, but location, emergency resources, and authority to practice must be confirmed before services continue', ['new location today'], 'Treating location verification as paperwork instead of a precondition'),
      O('d', 'Ask her to step outside or drive back home so that the session is technically taking place in her home state.', -1,
        'Impractical and unsafe workaround', 'Relocate the client', 'Asking a dysregulated client to drive or relocate to satisfy licensure is unsafe and does not address proper verification', ['recent dissociation', 'morning sedation'], 'Solving a licensure question by moving the client'),
    ]),
    Q('q12', 'legal', 'session2', 'The practice’s new AI ambient note-taker records sessions to draft notes, and Abena has not been told. What is required?', ['R4', 'R5'], [
      O('a', 'Use it as configured, because the vendor signed a business associate agreement and notes belong to the clinician.', -1,
        'BAA does not replace consent', 'Vendor-compliance framing', 'A BAA addresses vendor obligations but does not replace informing the client and obtaining consent to record sessions', ['Abena not informed'], 'Equating vendor compliance with client informed consent'),
      O('b', 'Mention at the start of the session that the tool is running and let her ask for it to be turned off if she minds.', 0,
        'Notification is not consent', 'Opt-out notice', 'Telling her is better than silence, but recording requires informed consent explaining purpose, storage, and risks, with a real choice', ['recording trauma narrative'], 'Treating notice with opt-out as informed consent'),
      O('c', 'Paste the session transcript into a free consumer AI chatbot to draft the note, then delete the transcript afterward.', -2,
        'Exposes PHI to an unvetted tool', 'Consumer AI shortcut', 'Entering PHI into a consumer AI tool without a BAA or consent risks an unauthorized disclosure; deletion afterward does not undo it', ['identifiable trauma details'], 'Assuming deletion cures an improper disclosure'),
      O('d', 'Explain what the tool records, how data is stored and secured, and its risks, and get her written consent or opt-out.', 3,
        'Informed consent for AI recording', 'Consent before use', 'Using an AI note-taker requires informed consent covering what is recorded, storage, security, and the right to decline, alongside vendor safeguards', ['tool records sessions', 'not yet told'], 'Implementing AI tools without client informed consent'),
    ]),
    Q('q13', 'legal', 'session2', 'Abena asks to continue on her insurance but billed “without a diagnosis.” How should the counselor respond?', ['R4', 'R6'], [
      O('a', 'Bill under a milder, less stigmatizing code than acute stress disorder so the claim is less likely to draw notice.', -2,
        'Inaccurate billing is fraud', 'Code substitution', 'Submitting a diagnosis that does not match the clinical record is insurance fraud, regardless of the protective intent', ['F43.0 documented'], 'Altering diagnoses on claims to protect a client'),
      O('b', 'Bill her insurance accurately with the documented diagnosis and continue care without raising her privacy concern.', 0,
        'Accurate but not informed', 'Bill without discussion', 'The claim is accurate, but ignoring her stated concern misses informed consent about what insurers receive and her alternatives', ['“so it doesn’t follow me”'], 'Treating accurate billing as the whole obligation'),

      O('c', 'Keep seeing her under the EAP past the six sessions and sort out the authorization with the EAP later on.', -1,
        'Services beyond authorization', 'Extend EAP informally', 'Providing sessions outside the EAP authorization risks unpaid or improperly billed care and sidesteps her actual question', ['six-session EAP limit'], 'Avoiding the billing conversation by stretching a benefit'),
      O('d', 'Bill accurately with a documented diagnosis, explain what the insurer receives, and offer self-pay as an option.', 3,
        'Accurate billing and informed choice', 'Transparent billing', 'Insurance claims require a diagnosis supported by documentation; the counselor explains what is shared and offers self-pay if she prefers privacy', ['EAP sessions ending', 'concern about work'], 'Billing without informing the client what the insurer will see'),    ]),
  ],
};

// ============================================================================
// D936 — Opioid Use Disorder, Severe, after a scaffold fall (plan 6, hard)
// Buried: a nonfatal overdose told as “just overtired”; alprazolam co-use
// listed among sleep habits; a solo cold-turkey plan after a prior abstinence.
// ============================================================================
const D936 = {
  id: 'ncmhce-D936',
  title: 'An ironworker says the nasal spray in March just meant he was overtired',
  category: 'Substance',
  difficulty: 'hard',
  plan: 6,
  population: 'adult',
  primaryDiagnosis: { name: 'Opioid Use Disorder, Severe', code: 'F11.20' },
  diagnosis: { name: 'Opioid Use Disorder, Severe', code: 'F11.20' },
  differentialOptions: [
    { id: 'do1', name: 'Opioid Use Disorder, Severe', isCorrect: true },
    { id: 'do2', name: 'Opioid Use Disorder, Moderate', isCorrect: false },
    { id: 'do3', name: 'Sedative, Hypnotic, or Anxiolytic Use Disorder, Mild', isCorrect: false },
    { id: 'do4', name: 'Somatic Symptom Disorder, with Predominant Pain', isCorrect: false },
  ],
  narrative: {
    intake:
      'Gary Kowalczyk, 52, a Polish American union ironworker, self-refers to a federally assisted outpatient substance use treatment program after ' +
      'his wife, Donna, told him to “get help or get out.” Twenty-six months ago he fell from scaffolding, had spinal surgery, and was prescribed ' +
      'oxycodone for four months. When his physician tapered him off, he began buying pressed “blues” from a coworker; he now snorts eight to ten ' +
      'a day, spends about $250 a day, and wakes sweating with diarrhea, yawning, and gooseflesh until he uses. He describes using more than he ' +
      'intends, failed attempts to cut down, constant craving, hours spent getting pills, quitting coaching his grandson’s baseball team, and keeping ' +
      'on despite Donna’s anger. Asked about overdoses, he laughs: “Never. My brother-in-law hit me with that nose spray once in March when I nodded ' +
      'off in the truck, but I was just overtired.” Listing his sleep habits, he adds that he “takes one of Donna’s Xanax a couple nights a week.” He ' +
      'denies suicidal thoughts now or in March. He plans to “go cold turkey this weekend at the cabin by myself — I did four days clean in May, so I ' +
      'know I can.” His back pain averages 6 out of 10 and is not being treated. He signs a 42 CFR Part 2–compliant consent allowing the counselor ' +
      'to share treatment information with Dr. Nwosu, a buprenorphine prescriber at a community health center. The counselor, in long-term ' +
      'abstinence-based recovery herself, privately thinks buprenorphine is “trading one drug for another.” Learning that the counselor is ' +
      'renovating her house, Gary offers to do the framing “at cost, as thanks.”',
    session1:
      'Two weeks later Gary has started buprenorphine-naloxone with Dr. Nwosu. His cravings are lower and the morning sickness is gone, but he has ' +
      'nausea, and one day he “put an extra strip under my tongue” when cravings spiked. He mentions he is still taking Donna’s alprazolam on some ' +
      'nights. Donna has asked to be part of his treatment and wants to know how to help. Gary says his back pain is “what sets the cravings off” ' +
      'and asks what to work on first; he names his marriage, his pain, staying off pills, and getting back to full shifts.',
    session2:
      'In week five Gary admits that after a fight with Donna last Saturday he used two pressed pills alone in his garage while she was out. He says, ' +
      '“Once the pain’s handled I’ll taper off the strips in a month or two — I don’t want to be on something forever.” A representative from his ' +
      'union’s member assistance program calls asking whether Gary is enrolled and what his drug screens show; Gary has signed no consent for the ' +
      'union. A subpoena arrives from his ex-wife’s attorney in a child-support case requesting “all treatment records,” with no court order ' +
      'attached. Gary asks the counselor for her personal cell number so he can text her when cravings hit.',
  },
  diagnosticRationale:
    'Gary meets well over six opioid use disorder criteria in the past year: use in larger amounts than intended, unsuccessful efforts to cut down, ' +
    'time spent obtaining opioids, craving, continued use despite interpersonal problems, giving up valued activities, tolerance, and withdrawal ' +
    '(sweating, diarrhea, yawning, piloerection relieved by use). Tolerance and withdrawal count because the opioids are no longer taken as ' +
    'prescribed. Six or more criteria specify severe (F11.20). Alprazolam use a few nights a week is a high-risk co-use pattern to assess and ' +
    'monitor but does not yet establish a separate disorder, and his pain is real and untreated rather than a somatic symptom presentation. The ' +
    'March naloxone rescue was a nonfatal overdose, the strongest predictor of a future fatal one.',
  references: [
    { id: 'R1', source: 'DSM-5-TR', detail: 'Opioid use disorder: 11 criteria; severe = 6 or more; tolerance and withdrawal not counted when taken solely under medical supervision; F11.20' },
    { id: 'R2', source: 'SAMHSA TIP 63', detail: 'Medications for OUD: buprenorphine and methadone reduce overdose death; overdose education and naloxone; risks of benzodiazepine co-use and of lost tolerance after abstinence; long-term retention' },
    { id: 'R3', source: 'ASAM Criteria', detail: 'Multidimensional assessment (withdrawal, biomedical, emotional, readiness, relapse potential, recovery environment) for level of care with MOUD' },
    { id: 'R4', source: 'Miller & Rollnick (MI)', detail: 'Reflecting ambivalence, eliciting change talk, exchanging information with permission, avoiding the righting reflex' },
    { id: 'R5', source: 'HIPAA', detail: 'Applied together with 42 CFR Part 2 (federal SUD confidentiality rule, amended 2024): written consent specifying recipient and purpose; no confirmation of patient status without consent; subpoenas require a Part 2–compliant court order' },
    { id: 'R6', source: 'ACA Code of Ethics', detail: 'Boundaries and gifts; values-based referral not permitted; counselor competence; secure technology-assisted communication; confidentiality' },
  ],
  questions: [
    // ---------------- intake (assess, profdev, assess, profdev) ----------------
    Q('q1', 'assess', 'intake', 'Which detail from Gary’s intake most changes the immediate risk picture?', ['R2', 'R3'], [
      O('a', 'His use has risen to eight to ten pills a day, which signals tolerance that will intensify his withdrawal this weekend.', 0,
        'Relevant but not the decisive fact', 'Tolerance focus', 'Rising tolerance matters for withdrawal, but a prior nonfatal overdose is the strongest predictor of a fatal one', ['eight to ten pills a day'], 'Weighing withdrawal discomfort above overdose death risk'),
      O('b', 'The nasal naloxone his brother-in-law gave him in March, which was a nonfatal overdose he describes as just being tired.', 3,
        'Buried nonfatal overdose', 'Identify the overdose history', 'A naloxone rescue is a nonfatal overdose; it sharply raises future fatal-overdose risk and warrants overdose- and suicide-risk follow-up', ['“hit me with that nose spray”', '“just overtired”'], 'Accepting the client’s reframe of an overdose as tiredness'),
      O('c', 'Donna’s ultimatum, which makes it likely that he will drop out of treatment if she changes her mind about leaving him.', -1,
        'Secondary engagement issue', 'External-motivation focus', 'External pressure can affect engagement, but it does not change his immediate risk of death the way an overdose history does', ['“get help or get out”'], 'Focusing on motivation while missing a lethal risk factor'),
      O('d', 'His steady union job and stable home, which suggest his overdose risk is lower than for most people who use opioids.', -2,
        'False reassurance', 'Protective-factor framing', 'Employment and housing do not offset fentanyl-pressed pills, benzodiazepine co-use, and a prior overdose; this reasoning misses lethal risk', ['pressed “blues”', 'Xanax co-use'], 'Letting protective factors override clear overdose indicators'),
    ]),
    Q('q2', 'profdev', 'intake', 'The counselor privately views buprenorphine as “trading one drug for another.” What should she do?', ['R2', 'R6'], [
      O('a', 'Tell Gary that true recovery means coming off all opioids and steer him toward the abstinence-based care that helped her.', -2,
        'Imposes values; blocks lifesaving care', 'Personal-recovery framing', 'Steering a severe OUD client with a prior overdose away from MOUD imposes personal values and raises his risk of death', ['prior overdose', 'severe OUD'], 'Generalizing the counselor’s own recovery path to the client'),
      O('b', 'Keep her views private and present medication neutrally, without seeking consultation or reviewing the current evidence.', 0,
        'Neutral but unexamined', 'Private neutrality', 'Not voicing the bias is a start, but unexamined beliefs leak into care; consultation and the evidence on MOUD are needed', ['“trading one drug for another”'], 'Assuming silence about a bias keeps it out of treatment'),
      O('c', 'Refer Gary to a different counselor, since her personal recovery values conflict with the treatment he is likely to need.', -1,
        'Values-based referral', 'Refer out', 'Referring a client because of the counselor’s personal values is discouraged; the counselor addresses her bias instead', ['no competence gap, only a value conflict'], 'Using referral to avoid examining personal values'),
      O('d', 'Reflect on her bias, review the evidence that MOUD lowers overdose deaths, and use supervision so it does not shape his care.', 3,
        'Self-reflection plus evidence plus supervision', 'Examine and correct bias', 'Counselors examine personal values that could impede care, update their knowledge of evidence-based treatment, and use supervision', ['counselor in abstinence-based recovery', 'MOUD indicated'], 'Letting personal recovery beliefs override current evidence'),
    ]),
    Q('q3', 'assess', 'intake', 'Gary plans to quit cold turkey alone at his cabin this weekend. What should the counselor recommend?', ['R2', 'R3'], [
      O('a', 'Support his plan to stop on his own at the cabin this weekend, since he already managed four days without pills last May.', -2,
        'Endorses a high-risk solo plan', 'Self-detox framing', 'Unsupported withdrawal alone, followed by lost tolerance, sharply raises fatal-overdose risk if he relapses on fentanyl-pressed pills', ['alone at the cabin', 'prior overdose'], 'Treating past brief abstinence as proof a solo detox is safe'),
      O('b', 'Refer him now for medication for OUD with outpatient counseling, and explain the overdose risk of stopping alone.', 3,
        'MOUD referral plus risk education', 'Match care to severity', 'Severe OUD with a prior overdose calls for prompt MOUD, which lowers mortality, plus counseling and frank education about lost tolerance', ['severe OUD', 'March overdose', 'solo cold-turkey plan'], 'Overlooking MOUD as first-line care for severe OUD'),
      O('c', 'Recommend intensive outpatient counseling without medication and reassess whether he needs medication in a month.', 0,
        'Delays first-line medication', 'Counseling-only intensive care', 'More counseling helps, but deferring MOUD for a month leaves a client with a recent overdose at high risk', ['severe OUD', 'fentanyl-pressed pills'], 'Sequencing medication after counseling instead of alongside it'),
      O('d', 'Recommend a 30-day residential program without medication before any other services, since his use is severe.', -1,
        'Wrong emphasis; omits MOUD', 'Residential-first framing', 'Residential care without MOUD followed by discharge can leave him with low tolerance and no medication, an especially lethal combination', ['severe OUD', 'stable home'], 'Equating more restrictive care with safer care for OUD'),
    ]),
    Q('q4', 'profdev', 'intake', 'Gary offers to do the framing on the counselor’s house renovation “at cost, as thanks.” What is the best response?', ['R6'], [
      O('a', 'Accept the framing work as a gift, since turning it down could shame him and damage early rapport with a new client.', -2,
        'Creates a dual relationship', 'Accept to protect rapport', 'Accepting substantial labor from a client creates a business and personal relationship that risks exploitation and clouds judgment', ['early treatment', 'power differential'], 'Prioritizing rapport over boundaries'),
      O('b', 'Hire him at the full market rate, which keeps the arrangement fair and makes the business side of it fully transparent.', -1,
        'Still a dual relationship', 'Market-rate framing', 'Paying fairly does not remove the dual role; a business dispute or his relapse could harm the counseling relationship', ['ongoing client'], 'Thinking fair payment cures a dual relationship'),
      O('c', 'Thank him warmly, explain why she cannot take on work from clients, and explore what the offer means to him.', 3,
        'Decline with warmth; explore meaning', 'Maintain the boundary', 'Declining kindly keeps the relationship therapeutic, and exploring the gesture may reveal his need to repay or to feel useful', ['“at cost, as thanks”'], 'Declining abruptly or not exploring the meaning of the offer'),
      O('d', 'Tell him she will think it over and raise it in supervision before giving him an answer at their next session.', 0,
        'Consults but leaves it open', 'Defer the decision', 'Consulting is reasonable, but leaving the offer open signals it might be accepted; a clear boundary can be set now', ['clear boundary question'], 'Delaying a decision the counselor can already make'),
    ]),

    // ---------------- session1 (planning, indirect, indirect, planning) ----------------
    Q('q5', 'planning', 'session1', 'Which element is most important to build into Gary’s initial treatment plan now?', ['R2'], [
      O('a', 'Naloxone in the home, training for Donna, and frank review of the risks of using alone, alprazolam, and lost tolerance.', 3,
        'Overdose prevention plan', 'Overdose education and naloxone', 'With a prior overdose, fentanyl exposure, and benzodiazepine co-use, an overdose prevention plan is a core part of OUD treatment', ['March naloxone rescue', 'alprazolam use'], 'Leaving overdose prevention out of an OUD plan'),
      O('b', 'Naloxone in the home, with the rest of the plan focused on cravings and relapse triggers until he is further along.', 0,
        'Partial overdose plan', 'Naloxone only', 'Naloxone is essential, but leaving out alprazolam co-use, using alone, and lost tolerance misses the drivers of his risk', ['benzodiazepine co-use'], 'Treating naloxone as the whole overdose plan'),
      O('c', 'Overdose planning after he is stable on buprenorphine, since the medication has already lowered his risk of dying.', -1,
        'Delays a needed safeguard', 'Medication-is-enough framing', 'Buprenorphine lowers risk but does not remove it, especially with alprazolam co-use and pressed pills', ['still taking alprazolam'], 'Assuming MOUD alone makes overdose planning unnecessary'),
      O('d', 'No naloxone in the plan for now, since keeping it at home could signal to him that a relapse is being expected.', -2,
        'Withholds a lifesaving tool', 'Enabling myth', 'Naloxone access does not increase use; omitting it leaves a man with a prior overdose without a rescue option', ['prior overdose'], 'Believing naloxone access encourages relapse'),
    ]),
    Q('q6', 'indirect', 'session1', 'Donna asks to be part of Gary’s treatment. How should the counselor proceed?', ['R5', 'R2'], [
      O('a', 'Call Donna with updates on his drug screens and attendance, since she is his wife and they live in the same home.', -2,
        'Disclosure without Part 2 consent', 'Family-entitlement framing', 'SUD treatment information cannot go to family without the client’s written Part 2–compliant consent, even to a spouse', ['no consent for Donna'], 'Assuming spouses are entitled to SUD treatment information'),
      O('b', 'Hold off on involving Donna until Gary is further along, and give her a general pamphlet on family support.', 0,
        'Misses a timely support', 'Defer family involvement', 'A pamphlet is harmless, but Donna is a key support and naloxone responder now; with consent she can be involved sooner', ['Donna asks to help', 'overdose risk'], 'Delaying family involvement that could save a life'),
      O('c', 'With Gary’s written consent naming what may be shared, include Donna in naloxone training and support planning.', 3,
        'Consent-based family collaboration', 'Engage the support system', 'With a Part 2–compliant consent, involving Donna in overdose response and support planning strengthens his recovery environment', ['Donna wants to help', 'naloxone responder'], 'Either excluding family or involving them without consent'),
      O('d', 'Hold a joint session where Donna can confront Gary about the lying and money, so he finally feels the impact.', -1,
        'Confrontation is not collaboration', 'Confrontational family session', 'Confrontation tends to raise defensiveness and shame; family work in SUD is more effective when supportive and skills-based', ['early recovery'], 'Using family sessions to confront rather than support'),
    ]),
    Q('q7', 'indirect', 'session1', 'Gary reports nausea, an extra strip taken for cravings, and ongoing alprazolam use. What should the counselor do?', ['R2', 'R5'], [
      O('a', 'Leave the extra strip out of the note, so it is not held against him if his treatment records are reviewed later on.', -1,
        'Incomplete documentation', 'Protective omission', 'Omitting medication-relevant information makes the record inaccurate and deprives the prescriber of safety information', ['extra strip taken'], 'Shielding the client by leaving key facts out of the record'),
      O('b', 'Document what he reports in his own words and, under his consent, inform Dr. Nwosu promptly, flagging the alprazolam.', 3,
        'Document and coordinate', 'Record self-report; inform prescriber', 'Counselors document self-reported medication effects and, under the existing consent, tell the prescriber, especially about benzodiazepine co-use', ['consent for Dr. Nwosu on file', 'alprazolam with buprenorphine'], 'Failing to relay a dangerous co-use pattern to the prescriber'),
      O('c', 'Note the nausea and extra strip and suggest he bring them up with Dr. Nwosu at his next visit in two weeks.', 0,
        'Delays safety information', 'Document and defer', 'Documenting is right, but benzodiazepine co-use with buprenorphine is a safety issue that warrants prompt prescriber contact', ['alprazolam co-use'], 'Underestimating the urgency of sedative co-use'),
      O('d', 'Tell him to skip alprazolam on nights he uses an extra strip, and to take the extra strip only on high-craving days.', -2,
        'Medication advice outside scope', 'Counselor dosing guidance', 'Giving dosing instructions is outside counselor scope and normalizes unprescribed extra doses and sedative use', ['counselor scope'], 'Giving medication instructions instead of coordinating with the prescriber'),
    ]),
    Q('q8', 'planning', 'session1', 'Gary asks what to work on first among his marriage, pain, pills, and work. How should the counselor help him prioritize?', ['R3', 'R2'], [
      O('a', 'Put rebuilding trust with Donna first, since the marriage is the main reason he came to treatment in the first place.', 0,
        'Important, not first', 'Relationship-first framing', 'The marriage matters to him, but stabilizing on MOUD and addressing pain-driven craving come first for safety', ['pain sets off cravings'], 'Ranking the referral trigger above clinical stability'),
      O('b', 'Treat his pain later, once he is off buprenorphine, so that the plan can stay focused on the addiction alone.', -1,
        'Ignores a key relapse driver', 'Addiction-only plan', 'Untreated pain drives his craving; deferring it undermines MOUD stability and relapse prevention', ['pain 6 of 10', '“what sets the cravings off”'], 'Separating pain from addiction treatment'),
      O('c', 'Help him ask Dr. Nwosu for a short oxycodone course for pain so he stops buying pills from his coworker.', -2,
        'Outside scope and harmful', 'Substitute prescribed opioids', 'Steering medication choices is outside counselor scope, and full-agonist opioids on top of buprenorphine are clinically risky', ['on buprenorphine', 'severe OUD'], 'Suggesting opioid medication strategy outside counselor scope'),
      O('d', 'Make MOUD stability and a non-opioid pain management referral the top priorities, since pain drives his cravings.', 3,
        'Stabilize and treat the pain driver', 'Prioritize with the client', 'Prioritizing MOUD stability and coordinated pain care targets the main relapse driver while respecting his own priorities', ['pain sets off cravings', 'new to buprenorphine'], 'Treating co-occurring pain as outside the treatment plan'),
    ]),

    // ---------------- session2 (legal, interventions, interventions, legal, legal) ----------------
    Q('q9', 'legal', 'session2', 'The union assistance program representative asks whether Gary is enrolled and what his screens show. What should the counselor do?', ['R5'], [
      O('a', 'Confirm that Gary attends regularly but withhold his drug-screen results, since attendance alone is low-risk information.', -1,
        'Confirms patient status', 'Partial disclosure', 'Under Part 2, even confirming that someone is a patient discloses SUD treatment and requires written consent', ['no union consent'], 'Believing attendance is not protected information'),
      O('b', 'Share his attendance and recent screen results, since the union funds the assistance benefit he is using.', -2,
        'Unauthorized SUD disclosure', 'Funder-entitlement framing', 'A third party’s funding role does not authorize disclosure; releasing screens without consent violates Part 2', ['no union consent'], 'Assuming whoever pays is entitled to treatment information'),
      O('c', 'Neither confirm nor deny that Gary is a patient, and ask Gary whether he wants to sign a Part 2 consent for the union.', 3,
        'Protect status; ask the client', 'Part 2 confidentiality', 'Without written consent, the program cannot acknowledge that Gary is a patient; the counselor brings the request to Gary to decide', ['no union consent', 'federally assisted program'], 'Disclosing patient status in a phone call'),
      O('d', 'Tell the representative to send a written request on letterhead, and handle it when that request arrives.', 0,
        'Defers without protecting', 'Paperwork-first framing', 'A written request does not authorize disclosure; the key step is client consent, and the reply should not imply he is a patient', ['no consent'], 'Thinking a formal request substitutes for client consent'),
    ]),
    Q('q10', 'interventions', 'session2', 'Gary admits using two pressed pills alone in his garage after a fight. What is the most appropriate response?', ['R2', 'R4'], [
      O('a', 'Praise his honesty, remind him that lapses are common, and keep the current plan without changing anything in it.', 0,
        'Supportive but no plan update', 'Normalize only', 'Normalizing helps, but using alone on buprenorphine with pressed pills reveals gaps in the overdose and relapse plan', ['used alone', 'after a fight'], 'Treating a lapse as information without using it to revise the plan'),
      O('b', 'Require twice-weekly observed urine screens as a consequence, so that he takes his recovery more seriously.', -1,
        'Punitive response to a lapse', 'Consequence framing', 'Monitoring has a place, but framing it as punishment discourages honest disclosure of future use', ['voluntary disclosure'], 'Responding to honesty with punishment'),
      O('c', 'Warn him the program may discharge him after one more positive screen, so he understands what is at stake.', -2,
        'Threatens loss of lifesaving care', 'Zero-tolerance framing', 'Discharging people from MOUD care for use raises overdose death risk; a lapse calls for more support, not less', ['on buprenorphine', 'prior overdose'], 'Treating use during MOUD as grounds for discharge'),
      O('d', 'Explore the lapse without judgment, note that he used alone, and update his overdose and relapse plans together.', 3,
        'Nonjudgmental analysis and plan update', 'Lapse as learning', 'Exploring triggers and context without judgment, then revising safety and relapse plans, keeps him engaged and safer', ['used alone in garage', 'fight with Donna'], 'Missing the “used alone” overdose signal inside the lapse'),
    ]),
    Q('q11', 'interventions', 'session2', 'Gary says he will taper off the strips in a month or two once the pain is handled. Which response best fits MI?', ['R4', 'R2'], [
      O('a', 'Reflect both sides of his wish to taper and, with permission, share what is known about stopping MOUD early.', 3,
        'Reflect ambivalence; ask–tell–ask', 'MI information exchange', 'MI reflects ambivalence and offers information with permission, so Gary weighs early tapering risks without being pushed', ['“I don’t want to be on something forever”', 'recent lapse'], 'Lecturing instead of exchanging information with permission'),
      O('b', 'Explain that research supports long-term buprenorphine and suggest he put off any taper plans for now.', 0,
        'Accurate but righting reflex', 'Advise directly', 'The information is accurate, but delivering it as unrequested advice tends to raise resistance', ['ambivalence about medication'], 'Correcting the client before exploring his view'),
      O('c', 'Point out that his lapse shows he is not ready to taper and that the taper idea is a sign of ongoing denial.', -1,
        'Confrontational labeling', 'Confront denial', 'Labeling his goal as denial invites defensiveness and undermines the alliance MI depends on', ['recent lapse'], 'Using confrontation where MI calls for reflection'),
      O('d', 'Back his plan to taper off the strips within a month, since setting his own goals builds his commitment to recovery.', -2,
        'Endorses a high-risk taper', 'Autonomy-only framing', 'Supporting a rapid taper after a recent lapse raises overdose risk; autonomy is honored by informed choice, not uncritical endorsement', ['lapse last week', 'prior overdose'], 'Confusing respect for autonomy with endorsing a risky plan'),
    ]),
    Q('q12', 'legal', 'session2', 'A subpoena requests “all treatment records,” with no court order attached. How should the counselor respond?', ['R5'], [
      O('a', 'Send the complete record by the subpoena’s deadline, since a subpoena is a legal demand the program has to obey.', -2,
        'Unlawful release of SUD records', 'Subpoena-equals-order framing', 'Under Part 2, a subpoena alone does not authorize disclosure; releasing records requires consent or a qualifying court order', ['no court order attached'], 'Treating a subpoena as authorization to release SUD records'),
      O('b', 'Ignore the subpoena, since substance use records are protected and no response of any kind is legally required.', -1,
        'Ignoring legal process', 'Ignore it', 'Records are protected, but a subpoena still requires a timely, appropriate response, such as an objection, made with legal guidance', ['subpoena received'], 'Assuming protected status means no response is needed'),
      O('c', 'Ask Gary to sign a release right away so the records can go to the attorney without any delay or conflict.', 0,
        'Pressures consent', 'Consent-to-comply framing', 'Consent is a lawful route, but urging Gary to sign without exploring the risks to him in a legal dispute does not protect his interests', ['ex-wife’s attorney', 'child-support case'], 'Steering the client toward release instead of informing his choice'),
      O('d', 'Withhold the records, notify Gary, consult legal counsel, and respond that release needs a Part 2–compliant order.', 3,
        'Protect records; respond properly', 'Part 2 subpoena response', 'The counselor protects the records, informs Gary, and responds through counsel that disclosure requires consent or a court order meeting Part 2 standards', ['no court order', 'SUD program records'], 'Either complying with or ignoring a subpoena for SUD records'),
    ]),
    Q('q13', 'legal', 'session2', 'Gary asks for the counselor’s personal cell number to text when cravings hit. What is the best response?', ['R6', 'R5'], [
      O('a', 'Give him her personal cell for check-ins whenever cravings hit, since round-the-clock contact can prevent a relapse.', -2,
        'Unsecure, unsustainable boundary', 'Unlimited personal access', 'Personal-phone contact around the clock is unsecured, blurs boundaries, and cannot be sustained, which risks abandonment later', ['craving crises', 'protected SUD information'], 'Offering personal availability as a substitute for a crisis plan'),
      O('b', 'Agree to texts on her personal phone for scheduling only, after Gary signs a note accepting the privacy risks.', 0,
        'Limited but still unsecured', 'Restricted personal texting', 'Limiting content helps, but a personal device still is not a secure, documented channel for SUD treatment contact', ['personal device'], 'Thinking a signed waiver makes a personal device secure'),
      O('c', 'Text him from her personal phone but delete each message right away so no record is kept on her device.', -1,
        'Unsecure and undocumented', 'Delete-after-use framing', 'Deleting messages removes clinical documentation and does not fix the security problem of using a personal device', ['clinical contact'], 'Treating deletion as a security safeguard'),
      O('d', 'Explain that contact goes through the program’s secure portal or line, and add craving coping steps to his plan.', 3,
        'Secure channel plus crisis plan', 'Policy-based communication', 'Counselors use secure, documented channels and build craving responses into the plan rather than offering personal access', ['craving texts requested'], 'Meeting a reasonable need through an insecure personal channel'),
    ]),
  ],
};

// ============================================================================
// D937 — Cannabis Use Disorder, Moderate, in a 16-year-old (plan 7, easy)
// One clear presentation; no comorbidity, no medical rule-out, no safety issue.
// ============================================================================
const D937 = {
  id: 'ncmhce-D937',
  title: 'A midfielder keeps finishing the cartridge she meant to make last a week',
  category: 'Substance',
  difficulty: 'easy',
  plan: 7,
  population: 'child',
  primaryDiagnosis: { name: 'Cannabis Use Disorder, Moderate', code: 'F12.20' },
  diagnosis: { name: 'Cannabis Use Disorder, Moderate', code: 'F12.20' },
  differentialOptions: [
    { id: 'do1', name: 'Cannabis Use Disorder, Mild', isCorrect: false },
    { id: 'do2', name: 'Cannabis Use Disorder, Severe', isCorrect: false },
    { id: 'do3', name: 'Cannabis Use Disorder, Moderate', isCorrect: true },
    { id: 'do4', name: 'Generalized Anxiety Disorder', isCorrect: false },
  ],
  narrative: {
    intake:
      'Nadia Haddad, 16, a Lebanese American high-school sophomore and varsity-hopeful soccer midfielder, is referred to a community counseling ' +
      'agency by her school after being caught vaping a THC cartridge in a restroom for the second time; the school requires an assessment before ' +
      'she can return to practice. She lives with her parents, Sami (who owns an auto-repair shop) and Rana (a pharmacy technician), a younger ' +
      'brother, and her grandmother, Hoda, who speaks mostly Arabic and cares for the children after school. Nadia began vaping at parties 14 ' +
      'months ago and now vapes daily after school and more on weekends. She says she “keeps finishing the cartridge I meant to make last a ' +
      'week,” tried to stop for tryouts in August and could not, thinks about vaping during class, and needs “way more to feel anything” than she ' +
      'used to. Her grades have dropped from Bs to Ds in two classes and she has missed several practices. She reports no sleep, appetite, or mood ' +
      'changes when she goes a day without it, has tried alcohol twice and none in the past three months, and uses no other drugs. A depression ' +
      'and anxiety screen is negative, and she denies suicidal thoughts. Both parents attend the intake; Nadia is guarded but polite. The assigned ' +
      'counselor has worked mainly with adults and recently joined the agency’s adolescent team; privately, the counselor thinks of cannabis as ' +
      '“basically harmless, it’s legal for adults here.”',
    session1:
      'Nadia’s parents and Nadia signed a release allowing the counselor to coordinate with the school counselor, Ms. Pruitt, on attendance and ' +
      'school supports only. Ms. Pruitt calls offering daily check-ins and asks what Nadia has been talking about in sessions. The counselor plans ' +
      'a family session; Hoda wants to attend, and Sami suggests that Nadia interpret for her grandmother “since she’s fluent.” Nadia says she ' +
      'doesn’t want to quit completely, but she wants to make varsity next fall and “not have my parents on me all the time.”',
    session2:
      'Rana calls between sessions asking exactly how often Nadia vapes and who sells to her. That evening Nadia sends the counselor a follow ' +
      'request on Instagram. In session Nadia says, “Everyone smokes, it’s legal for grown-ups, and it helps me chill after school.” The agency’s ' +
      'marketing coordinator, hearing that Nadia is doing better, asks the counselor to get the family’s permission to feature her story in a ' +
      'social-media campaign. In a family session Sami lectures Nadia about “throwing away” her chances while Nadia stares at her phone and goes quiet.',
  },
  diagnosticRationale:
    'Nadia shows five cannabis use disorder criteria in the past 12 months: using more than intended, unsuccessful efforts to cut down, craving, ' +
    'tolerance, and failure to fulfill major role obligations (grades and missed practices). She reports no withdrawal symptoms, and there is no ' +
    'evidence of hazardous use, social or interpersonal problems caused by use, or other remaining criteria. Four to five criteria specify moderate ' +
    'severity (F12.20). Negative mood and anxiety screens and an absence of symptoms outside use do not support a co-occurring anxiety or depressive ' +
    'disorder. Alcohol use is minimal and not current.',
  references: [
    { id: 'R1', source: 'DSM-5-TR', detail: 'Cannabis use disorder: 11 criteria within 12 months; mild 2–3, moderate 4–5 (F12.20), severe 6 or more' },
    { id: 'R2', source: 'Hays (Assessment)', detail: 'Developmentally appropriate substance screening for adolescents (e.g., CRAFFT 2.1); multi-informant assessment' },
    { id: 'R3', source: 'SAMHSA TIP 35', detail: 'Motivational enhancement for adolescents; stage-matched intervention; involving families in SUD care' },
    { id: 'R4', source: 'Miller & Rollnick (MI)', detail: 'Reflective listening, exploring ambivalence and decisional balance, rolling with discord rather than confronting' },
    { id: 'R5', source: 'ACA Code of Ethics', detail: 'Minors’ consent/assent and confidentiality with parents; personal values; competence boundaries; social media boundaries (H.6.); testimonials not solicited from current clients (C.3.b.); interpreters' },
    { id: 'R6', source: 'State law', detail: 'Minor consent to SUD treatment and parental access to records vary by state; release-of-information scope' },
  ],
  questions: [
    // ---------------- intake (profdev, profdev, assess, assess) ----------------
    Q('q1', 'profdev', 'intake', 'The counselor privately views cannabis as “basically harmless” because it is legal for adults. What should the counselor do?', ['R5'], [
      O('a', 'Share the view with Nadia, since being open about it will help the counselor seem less judgmental to a teenager.', -1,
        'Self-disclosure that undercuts care', 'Disclose to build rapport', 'Sharing a personal view that cannabis is harmless could validate her use and weaken treatment aimed at her impairment', ['grades falling', 'missed practices'], 'Using personal opinions to build rapport with a minor'),
      O('b', 'Reflect on how the belief could minimize her impairment, and bring it to supervision before treatment planning.', 3,
        'Self-reflection plus supervision', 'Examine personal values', 'Counselors notice personal values that could affect care and use supervision so they do not downplay a minor’s real impairment', ['“basically harmless”', 'adolescent with five criteria'], 'Assuming personal views stay out of clinical decisions on their own'),
      O('c', 'Set the belief aside for now and treat her as the school requested, without needing to look at it any further.', 0,
        'Good intent, unexamined', 'Bracket and proceed', 'Bracketing is a start, but unexamined beliefs tend to shape choices; reflection and supervision make the safeguard real', ['counselor’s belief'], 'Thinking a belief is neutralized just by deciding to ignore it'),
      O('d', 'Frame the problem for her parents as school rule-breaking rather than a disorder, since adult use is legal here.', -2,
        'Misframes a diagnosable disorder', 'Legality framing', 'Adult legality does not make adolescent use benign; minimizing a moderate use disorder withholds needed treatment', ['meets five criteria', 'age 16'], 'Letting legal status for adults define clinical significance for a teen'),
    ]),
    Q('q2', 'profdev', 'intake', 'The counselor has worked mainly with adults and is new to adolescent substance use. What is the best step?', ['R5', 'R3'], [
      O('a', 'Seek supervision and training in adolescent substance use approaches while treating Nadia within current competence.', 3,
        'Build competence with support', 'Training plus supervision', 'Counselors entering a new population gain training and supervision while practicing within their competence boundaries', ['new to adolescent team'], 'Practicing in a new specialty without added training or supervision'),
      O('b', 'Use the same adult substance use approach, since cannabis use disorder has the same criteria at every age.', -1,
        'Ignores developmental needs', 'Adult-model framing', 'Criteria are shared, but adolescent treatment involves family, school, and developmental factors that adult models omit', ['16-year-old', 'family and school involved'], 'Assuming identical criteria mean identical treatment'),
      O('c', 'Refer Nadia to an adolescent specialist right away, since the counselor lacks enough experience with teens.', 0,
        'Reasonable but premature', 'Refer out', 'Referral is an option, but an uncomplicated case can be treated while building competence under supervision', ['easy, uncomplicated case'], 'Assuming any experience gap requires immediate referral'),
      O('d', 'Proceed on intuition and adjust along the way, since rapport with teenagers matters more than formal training.', -2,
        'Practicing beyond competence', 'Intuition-only framing', 'Relying on intuition alone outside one’s competence risks ineffective or harmful care for a minor', ['no adolescent training'], 'Treating rapport as a substitute for competence'),
    ]),
    Q('q3', 'assess', 'intake', 'Which screening instrument is most appropriate to add to Nadia’s substance use assessment?', ['R2'], [
      O('a', 'The AUDIT, since alcohol screening covers most teen substance problems and can be adapted to ask about cannabis.', -1,
        'Wrong substance focus', 'Alcohol-tool framing', 'The AUDIT targets alcohol in adults; it is not designed to screen adolescent cannabis use', ['cannabis is the primary substance'], 'Stretching a single-substance adult tool beyond its validation'),
      O('b', 'A personality inventory, since teens who use cannabis often have underlying traits that explain why they use it.', -2,
        'Irrelevant and stigmatizing', 'Trait-explanation framing', 'A personality inventory does not screen substance use and assumes pathology with no evidence', ['negative mood and anxiety screens'], 'Seeking a trait explanation instead of screening the substance problem'),
      O('c', 'The CRAFFT 2.1, a brief screen validated for adolescent alcohol and drug use that she can complete herself.', 3,
        'Validated adolescent screen', 'Age-appropriate instrument', 'The CRAFFT 2.1 is validated for ages 12–21 and screens substance-related risk, fitting her age and setting', ['age 16', 'cannabis use'], 'Choosing a tool validated for adults instead of adolescents'),
      O('d', 'An unstructured interview alone, since a standard screen adds little once she has described her use pattern.', 0,
        'Misses standardized data', 'Interview only', 'Her interview is informative, but a validated screen adds standardized data and a baseline to track', ['guarded presentation'], 'Assuming a self-report interview makes screening redundant'),
    ]),
    Q('q4', 'assess', 'intake', 'How should the counselor handle consent and confidentiality at Nadia’s intake?', ['R5', 'R6'], [
      O('a', 'Have her parents sign consent and tell them they will receive a full report of what Nadia shares each week.', -2,
        'Undermines the adolescent’s trust', 'Full parental disclosure', 'Promising parents everything she says will likely end her honest disclosure and ignores her assent and privacy needs', ['guarded teen'], 'Treating a teen’s sessions as fully open to parents'),
      O('b', 'Follow state law on consent, get Nadia’s assent, and agree with the family on what is shared and the safety limits.', 3,
        'Consent, assent, and a clear framework', 'Informed consent for minors', 'Consent rules for minors in SUD care vary by state; assent and a shared agreement about what parents hear and the safety limits protect trust', ['parents present', 'guarded but polite'], 'Skipping a clear confidentiality agreement with a minor and her parents'),
      O('c', 'Tell Nadia that everything she says will stay private, so she feels safe enough to be honest about her use.', -1,
        'Promises too much', 'Absolute privacy', 'Confidentiality with a minor has limits, including safety, and parents may have rights to some information under state law', ['minor client'], 'Promising a minor complete confidentiality'),
      O('d', 'Get her parents’ signed consent and review confidentiality only with them, leaving Nadia’s questions for later.', 0,
        'Leaves the client out', 'Parent-only consent', 'Parental consent may be legally needed, but leaving Nadia out of the confidentiality discussion weakens her assent and engagement', ['16-year-old client'], 'Treating consent as only a parental matter'),
    ]),

    // ---------------- session1 (indirect, indirect, planning, planning) ----------------
    Q('q5', 'indirect', 'session1', 'Ms. Pruitt offers daily check-ins and asks what Nadia has talked about in sessions. How should the counselor respond?', ['R5', 'R6'], [
      O('a', 'Thank her, coordinate on attendance and the check-ins as the release allows, and keep session content private.', 3,
        'Collaborate within the release', 'Scoped school collaboration', 'The release covers attendance and supports, so the counselor coordinates on those while protecting what Nadia said in session', ['release limited to attendance and supports'], 'Sharing session content because the requester is a school professional'),
      O('b', 'Summarize what Nadia has said about her use, since school staff need the details to support her return to practice.', -2,
        'Exceeds the release', 'Professional-courtesy disclosure', 'Session content is outside the release; sharing it breaches confidentiality and can harm her at school', ['release scope'], 'Assuming school staff are covered by the counseling relationship'),
      O('c', 'Decline to discuss Nadia at all, including attendance, and suggest the school contact her parents for updates.', 0,
        'Overly restrictive', 'Refuse all contact', 'Declining protects privacy but forgoes coordination the family authorized and that could help her', ['valid school release'], 'Treating any outside contact as a confidentiality risk'),
      O('d', 'Ask Ms. Pruitt to have Nadia tested at school each week and to report the results to the counselor directly.', -1,
        'Misuses the collaboration', 'Surveillance framing', 'Turning the school into a testing arm goes beyond the release and the counselor’s role, and may damage trust', ['supports, not monitoring, authorized'], 'Using collaboration for surveillance instead of support'),
    ]),
    Q('q6', 'indirect', 'session1', 'Hoda, who speaks mostly Arabic, wants to attend the family session, and Sami suggests Nadia interpret. What should the counselor do?', ['R5'], [
      O('a', 'Let Nadia interpret, since she is fluent and already knows the details being discussed in the session.', -1,
        'Child as interpreter', 'Family-interpreter framing', 'Having the identified client interpret puts her in a conflicted role and risks filtered or inaccurate communication', ['Nadia is the client'], 'Using a family member, especially the client, as interpreter'),
      O('b', 'Leave Hoda out of the family sessions, since language barriers would slow down the work with Nadia’s parents.', -2,
        'Excludes a key caregiver', 'Exclusion for convenience', 'Excluding a primary caregiver because of language is inequitable and loses an important support in Nadia’s recovery', ['cares for children after school'], 'Letting a language barrier exclude a family member'),

      O('c', 'Hold the session in English and give Hoda a written summary in Arabic from a translation app afterward.', 0,
        'Excludes her in real time', 'After-the-fact translation', 'A later summary does not let Hoda take part, and app translation may be inaccurate for clinical content', ['caregiver after school'], 'Treating a summary as equal to participation'),
      O('d', 'Arrange a qualified Arabic interpreter for the session and confirm Hoda’s preferred dialect beforehand.', 3,
        'Qualified interpreter', 'Secure language services', 'A trained interpreter supports accurate, confidential communication and lets Nadia take part as herself', ['Hoda speaks mostly Arabic'], 'Relying on family members instead of qualified interpreters'),    ]),
    Q('q7', 'planning', 'session1', 'Which initial treatment plan best fits Nadia’s diagnosis and situation?', ['R3'], [
      O('a', 'Individual sessions only, since involving her parents is likely to make a guarded teen even less open in therapy.', 0,
        'Leaves out family involvement', 'Individual-only plan', 'Individual work is part of the plan, but family involvement improves adolescent SUD outcomes', ['parents engaged', 'family conflict'], 'Treating a teen without her family system'),
      O('b', 'Referral to a residential adolescent program, since daily use and falling grades show outpatient care will fail.', -1,
        'Over-restrictive', 'Escalate level of care', 'A moderate use disorder with no withdrawal, safety risk, or failed outpatient care fits outpatient treatment', ['moderate severity', 'stable home'], 'Choosing a high level of care without indication'),
      O('c', 'Weekly home drug tests with loss of phone and car privileges for each positive result, managed by her parents.', -2,
        'Punitive monitoring as treatment', 'Consequence-only plan', 'Testing with punishment alone is not treatment and tends to increase conflict and secrecy', ['family conflict', 'guarded teen'], 'Substituting surveillance for evidence-based treatment'),
      O('d', 'Outpatient motivational enhancement and CBT with Nadia, plus family sessions on communication and monitoring.', 3,
        'MET/CBT with family involvement', 'Evidence-based outpatient plan', 'Motivational enhancement with CBT, plus family involvement, is an evidence-based outpatient approach for adolescent cannabis use disorder', ['moderate severity', 'parents engaged'], 'Omitting either the motivational or the family component'),
    ]),
    Q('q8', 'planning', 'session1', 'Nadia wants to make varsity but does not want to quit completely. Which approach to goal-setting fits best?', ['R3', 'R4'], [
      O('a', 'Write the goals with her parents alone, since Nadia is a minor and her input would only weaken the targets.', -2,
        'Excludes the client', 'Parent-set goals', 'Goals set without the adolescent’s input undermine engagement and ignore her autonomy and assent', ['she named her own goals'], 'Treating a minor as an object of treatment rather than a partner'),
      O('b', 'Set full abstinence as the only acceptable goal and explain that cutting back is not a real goal for a minor.', -1,
        'Rigid goal invites dropout', 'Abstinence-only framing', 'Abstinence is a valid long-term aim, but insisting on it before she is ready tends to drive resistance and dropout', ['ambivalent about quitting'], 'Imposing the end goal before building motivation'),
      O('c', 'Agree on measurable steps toward her varsity goal, such as fewer use days logged weekly, and revisit abstinence.', 3,
        'Collaborative, measurable, motivating', 'Collaborative SMART goals', 'Linking measurable use reduction to her own varsity goal builds motivation while keeping abstinence open for discussion', ['wants to make varsity', 'ambivalent about quitting'], 'Writing goals the client does not own'),
      O('d', 'Let Nadia set any goal she wants without measures, so she feels in charge of her own treatment process.', 0,
        'Owned but unmeasurable', 'Unstructured goals', 'Ownership matters, but goals without measures cannot track progress or support treatment decisions', ['school and parents involved'], 'Confusing autonomy with having no structure'),
    ]),

    // ---------------- session2 (legal, legal, interventions, legal, interventions) ----------------
    Q('q9', 'legal', 'session2', 'Rana calls asking exactly how often Nadia vapes and who sells to her. How should the counselor respond?', ['R5', 'R6'], [
      O('a', 'Give Rana the details, since parents have the right to know everything about their minor child’s substance use.', -2,
        'Breaks the confidentiality agreement', 'Full parental access', 'Disclosing specifics outside the agreed framework breaks trust and may end Nadia’s honest participation', ['agreed framework', 'guarded teen'], 'Assuming parents are owed every detail of a teen’s sessions'),
      O('b', 'Tell Rana nothing at all and end the call, since anything said in session is protected from her parents.', -1,
        'Too rigid; dismissive', 'Total refusal', 'Parents may receive general progress per the agreement and state law; shutting Rana out damages the family alliance', ['parents involved in care'], 'Treating a teen’s confidentiality as absolute against parents'),
      O('c', 'Share general progress as agreed, acknowledge her worry, and offer to help Nadia talk with her parents directly.', 3,
        'Honor the agreed framework', 'Facilitate family communication', 'Following the agreement keeps trust; acknowledging the parent’s worry and supporting direct family talk addresses her real need', ['agreement at intake', 'mother worried'], 'Choosing between total disclosure and total refusal'),
      O('d', 'Tell Rana that the counselor will share the details once Nadia has had a chance to approve what will be said.', 0,
        'Sets up an expectation', 'Conditional disclosure', 'Checking with Nadia is respectful, but promising details goes beyond the agreed framework of general progress', ['intake agreement'], 'Promising disclosures the framework does not allow'),
    ]),
    Q('q10', 'legal', 'session2', 'Nadia sends the counselor a follow request on Instagram. What is the most appropriate response?', ['R5'], [
      O('a', 'Accept the request, since following her account could reveal how often she posts about vaping with her friends.', -2,
        'Boundary violation and surveillance', 'Monitor through social media', 'Connecting with a client on personal social media creates a dual relationship and uses access in a way she did not consent to', ['personal account'], 'Using social media connections as a monitoring tool'),
      O('b', 'Leave the request pending without saying anything, so Nadia does not feel rejected by the counselor right now.', 0,
        'Avoids the conversation', 'Ignore it', 'Leaving it unanswered avoids hurt but misses a chance to explain the boundary and the policy clearly', ['follow request'], 'Avoiding a boundary conversation to spare feelings'),
      O('c', 'Decline the request and talk about it in the next session, explaining the agency’s social media policy kindly.', 3,
        'Decline and discuss', 'Explain the social media boundary', 'Counselors avoid personal social media relationships with clients and explain the reason, using it to strengthen the relationship', ['follow request from a minor client'], 'Declining without explanation or accepting to seem relatable'),
      O('d', 'Accept the request but mute her posts, since declining could damage the trust that has been built so far.', -1,
        'Still a personal connection', 'Accept and mute', 'Muting does not undo the personal connection, which still blurs boundaries and confidentiality', ['personal account'], 'Thinking a hidden connection is not a connection'),
    ]),
    Q('q11', 'interventions', 'session2', 'Nadia says, “Everyone smokes, it’s legal for grown-ups, and it helps me chill.” Which response best fits MI?', ['R4'], [
      O('a', '“Vaping is what is hurting your grades and soccer, and you need to see that before we can make progress.”', -1,
        'Confrontation raises discord', 'Confront the rationalization', 'Direct confrontation tends to increase defensiveness in adolescents and reduce change talk', ['ambivalent teen'], 'Arguing for change on the client’s behalf'),
      O('b', '“It helps you unwind after school, and you also want varsity next fall. How do those two fit together for you?”', 3,
        'Double-sided reflection', 'Develop discrepancy', 'A double-sided reflection honors what she values about vaping and invites her to explore the gap with her own goal', ['“helps me chill”', 'wants varsity'], 'Missing the ambivalence a double-sided reflection can surface'),
      O('c', '“Lots of teens do vape, so let’s set that aside and talk about something easier for you, like school stress.”', -2,
        'Colludes and abandons the target', 'Agree and redirect', 'Agreeing and dropping the topic reinforces her rationalization and drops the focus of treatment', ['moderate use disorder'], 'Avoiding the target behavior to keep rapport'),
      O('d', '“Let me explain what research says about cannabis and the teenage brain, so you can see the real risks here.”', 0,
        'Information without permission', 'Unsolicited education', 'Information has a place, but offering it uninvited at this moment triggers the righting reflex and discord', ['guarded teen'], 'Leading with education before exploring her view'),
    ]),
    Q('q12', 'legal', 'session2', 'The marketing coordinator asks the counselor to get the family’s permission to feature Nadia’s story. What should the counselor do?', ['R5'], [
      O('a', 'Ask her parents for written permission, since they are her legal guardians and can consent on her behalf.', -1,
        'Soliciting a current client’s testimonial', 'Guardian-consent framing', 'Parental permission does not cure soliciting a testimonial from a current minor client vulnerable to undue influence', ['current client', 'minor'], 'Treating guardian consent as the only issue'),
      O('b', 'Decline, explaining to the coordinator that testimonials are not solicited from current clients like Nadia.', 3,
        'Do not solicit testimonials', 'Ethical marketing', 'Counselors do not solicit testimonials from current clients or others vulnerable to undue influence, and they protect client information in marketing', ['current client', 'social media campaign'], 'Letting marketing goals override client protection'),
      O('c', 'Share a de-identified version of her story online, since removing her name protects her confidentiality.', 0,
        'De-identification may be weak', 'De-identify and post', 'Removing a name is better than using it, but details like a teen midfielder at a local school can still identify her', ['identifying details'], 'Assuming removing a name fully de-identifies a story'),
      O('d', 'Ask Nadia herself to record a short video about her progress, since teens often like being featured online.', -2,
        'Exploits a minor client', 'Client-as-marketing', 'Asking a minor client to promote the agency exploits the relationship and exposes her substance use publicly', ['minor', 'substance use treatment'], 'Using a client’s progress to market the practice'),
    ]),
    Q('q13', 'interventions', 'session2', 'In a family session, Sami lectures while Nadia goes quiet on her phone. What should the counselor do next?', ['R3'], [
      O('a', 'Let Sami finish, since a parent’s concern is important for Nadia to hear before she can begin to change.', -1,
        'Allows a harmful pattern', 'Let it run', 'Letting the lecture continue reinforces the cycle that shuts Nadia down and erodes family engagement', ['Nadia withdrawing'], 'Mistaking a parent’s monologue for family work'),
      O('b', 'Tell Nadia to put her phone away and answer her father, since respecting parents comes first in her family.', -2,
        'Sides with one member; assumes culture', 'Enforce compliance', 'Taking a side and invoking assumed cultural rules alienates the teen and stereotypes the family', ['Lebanese American family'], 'Using assumed cultural norms to enforce compliance'),

      O('c', 'Ask Sami to step out so Nadia can talk freely, then meet him alone later to explain why lecturing backfires.', 0,
        'Separates rather than coaches', 'Split the session', 'Meeting separately can help later, but the moment is a chance to coach the family together', ['family session'], 'Avoiding the live pattern instead of working with it'),
      O('d', 'Pause the exchange, reflect each person’s concern, and coach them in a short structured turn-taking talk.', 3,
        'Interrupt and structure communication', 'Family communication skills', 'Interrupting the lecture–withdrawal cycle and coaching structured communication builds the family skills that support recovery', ['lecturing', 'teen withdrawing'], 'Letting a familiar family pattern play out in session'),    ]),
  ],
};

// ============================================================================
// D938 — Stimulant Use Disorder, Cocaine, Moderate, in an attorney (plan 8, medium)
// Complications: passive suicidal thoughts during crashes; a request to
// diagnose ADHD so she can be prescribed a stimulant.
// ============================================================================
const D938 = {
  id: 'ncmhce-D938',
  title: 'A litigator who cannot afford to be tired asks for an ADHD diagnosis',
  category: 'Substance',
  difficulty: 'medium',
  plan: 8,
  population: 'adult',
  primaryDiagnosis: { name: 'Stimulant Use Disorder, Cocaine, Moderate', code: 'F14.20' },
  diagnosis: { name: 'Stimulant Use Disorder, Cocaine, Moderate', code: 'F14.20' },
  differentialOptions: [
    { id: 'do1', name: 'Attention-Deficit/Hyperactivity Disorder, Predominantly Inattentive Presentation', isCorrect: false },
    { id: 'do2', name: 'Major Depressive Disorder, Single Episode, Moderate', isCorrect: false },
    { id: 'do3', name: 'Stimulant Use Disorder, Cocaine, Mild', isCorrect: false },
    { id: 'do4', name: 'Stimulant Use Disorder, Cocaine, Moderate', isCorrect: true },
  ],
  narrative: {
    intake:
      'Renée Fontenot, 39, a Black Creole litigation associate up for partnership at a mid-size firm, self-refers to a counselor in private ' +
      'practice. She began using cocaine three years ago during a long trial and now binges on weekends and before major filings, often with ' +
      'wine, using more and for longer than she plans. She has tried twice to stop and craves cocaine whenever a deadline nears. Two months ago, ' +
      'after a weekend binge, she missed a filing deadline; the client filed a grievance with the state bar, and she is terrified of discipline but ' +
      'kept using. After binges she “crashes” for a day or two with exhaustion, oversleeping, vivid dreams, and low mood, and she says that “some ' +
      'Mondays I think everyone would be fine if I just didn’t wake up.” She denies any plan or intent, has no prior attempts, and has no firearms ' +
      'at home. She has heard of the state’s lawyer assistance program but fears it “reports straight to the bar.” She says cocaine is the only ' +
      'thing that helps her focus and asks the counselor to “diagnose ADHD so I can get Adderall instead”; she earned top grades through school, ' +
      'and she and her mother recall no attention or behavior problems before college. During intake Renée sharply questions the counselor’s ' +
      'credentials, and the counselor notices an urge to prove herself and over-explain. The counselor’s spouse is a partner at another firm in the ' +
      'same small legal community.',
    session1:
      'Renée scores in the high-risk range on a structured substance screen and completes a collaborative safety plan for crash days. She agrees to ' +
      'weekly outpatient counseling and says her priority is keeping her license. She wants to know more about the lawyer assistance program. Her ' +
      'own attorney, who is defending her in the grievance, asks the counselor for a letter about her treatment, and Renée signs a release ' +
      'allowing a letter confirming her enrollment, attendance, and engagement.',
    session2:
      'Renée used cocaine after a celebration dinner for a trial win, “just one line that turned into the whole night.” She cancelled the following ' +
      'session and arrives at this one cold, saying the counselor “pushed” the lawyer assistance program on her “like everyone else who wants ' +
      'something from me.” Later she says she is the only Black woman associate at her firm: “I can’t be tired, and I can’t be wrong.” She asks ' +
      'the counselor to leave cocaine out of her records “in case the bar ever sees them.” She also admits she reviewed client documents while high ' +
      'last month. A week later, a subpoena for her counseling records arrives from the bar’s disciplinary counsel.',
  },
  diagnosticRationale:
    'Renée meets five stimulant use disorder criteria in the past year: using more and longer than intended, unsuccessful efforts to stop, ' +
    'craving, failure to fulfill a major role obligation (the missed filing deadline, which she kept using after), and withdrawal (post-binge dysphoria with ' +
    'fatigue, hypersomnia, and vivid dreams). Four to five criteria specify moderate severity (F14.20). Her low mood is tied to crashes rather than ' +
    'a persistent two-week episode, so a depressive disorder is not established, though passive suicidal thoughts during crashes require ongoing ' +
    'assessment. ADHD is not supported: there is no evidence of symptoms before age 12, and attention complaints during active stimulant use and ' +
    'withdrawal cannot be attributed to ADHD.',
  references: [
    { id: 'R1', source: 'DSM-5-TR', detail: 'Stimulant use disorder (moderate = 4–5 criteria; F14.20); stimulant withdrawal; ADHD requires several symptoms before age 12 and not better explained by substance use' },
    { id: 'R2', source: 'C-SSRS', detail: 'Structured assessment of passive and active suicidal ideation, intent, plan, and behavior' },
    { id: 'R3', source: 'Stanley-Brown SPI', detail: 'Collaborative safety planning targeting predictable high-risk periods' },
    { id: 'R4', source: 'NICE guidelines', detail: 'Drug misuse psychosocial interventions: contingency management as a core intervention for cocaine use, with CBT-based relapse prevention' },
    { id: 'R5', source: 'Miller & Rollnick (MI)', detail: 'Repairing discord, eliciting feedback, autonomy support' },
    { id: 'R6', source: 'ACA Code of Ethics', detail: 'Conflicts of interest; self-reflection and countertransference; records accurate and confidential; responding to subpoenas and court-ordered disclosure; multicultural competence' },
    { id: 'R7', source: 'HIPAA', detail: 'Subpoenas without a court order require client authorization or satisfactory assurances; minimum necessary; psychotherapy-note protections' },
  ],
  questions: [
    // ---------------- intake (profdev, assess, profdev, assess) ----------------
    Q('q1', 'profdev', 'intake', 'The counselor’s spouse is a partner at another firm in Renée’s small legal community. What should the counselor do?', ['R6'], [
      O('a', 'Say nothing, since the spouse works at a different firm and Renée’s case is unlikely to come up at home anyway.', -1,
        'Unexamined conflict', 'Assume no overlap', 'Different firms do not rule out overlap in a small legal community; the potential conflict needs to be assessed and disclosed', ['small legal community'], 'Assuming separate employers mean no conflict of interest'),
      O('b', 'Assess for overlap in cases or contacts, disclose the connection to Renée, and refer her if a conflict exists.', 3,
        'Assess and disclose', 'Client–counselor suitability', 'Counselors check for conflicts of interest, disclose relevant connections, and refer when objectivity or confidentiality could be compromised', ['spouse is a partner', 'grievance pending'], 'Skipping a conflict check when a family member works in the client’s field'),
      O('c', 'Ask the spouse whether anyone at the firm knows Renée, so the counselor can judge the overlap before treatment.', -2,
        'Discloses client identity', 'Investigate through spouse', 'Asking the spouse about Renée reveals that she is a client, which breaches confidentiality', ['confidential client identity'], 'Breaching confidentiality while trying to check for a conflict'),
      O('d', 'Tell Renée about the connection and leave the decision to her, without assessing the overlap any further.', 0,
        'Discloses but incomplete', 'Disclose only', 'Disclosure is right, but the counselor also has to judge whether a conflict exists rather than shifting that duty to the client', ['spouse in same legal community'], 'Delegating a professional judgment to the client'),
    ]),
    Q('q2', 'assess', 'intake', 'Renée says that some Mondays she thinks everyone would be fine if she did not wake up. What should the counselor do?', ['R2', 'R3'], [
      O('a', 'Note it as a figure of speech common among exhausted lawyers and move on to the substance use history.', -1,
        'Dismisses passive ideation', 'Normalize the statement', 'Passive death wishes tied to stimulant crashes warrant structured follow-up; dismissing them misses a risk pattern', ['“didn’t wake up”', 'crash days'], 'Treating passive ideation as an idiom'),
      O('b', 'Ask her to agree not to harm herself during crash days and to call the counselor if the thoughts come back.', -2,
        'No-suicide contract', 'Contract for safety', 'No-suicide agreements lack evidence and can create false reassurance; they do not replace assessment or safety planning', ['passive ideation'], 'Substituting a no-harm agreement for assessment'),
      O('c', 'Assess ideation, intent, plan, and means with a structured tool, and plan for the crash days when risk rises.', 3,
        'Structured assessment and planning', 'Assess and safety-plan', 'Structured assessment clarifies severity, and a plan targeting predictable crash days addresses when her risk peaks', ['thoughts on post-binge Mondays', 'no plan or intent'], 'Skipping structured assessment when ideation is described as passive'),
      O('d', 'Refer her for an emergency psychiatric evaluation today, since any suicidal thought during substance use is urgent.', 0,
        'Over-restrictive but safe', 'Escalate immediately', 'Passive thoughts without plan or intent call for structured assessment and planning first; emergency referral is more than the facts show', ['no plan, intent, or attempts'], 'Escalating care before completing a structured assessment'),
    ]),
    Q('q3', 'profdev', 'intake', 'The counselor notices an urge to prove herself after Renée challenges her credentials. What is the best response?', ['R6'], [
      O('a', 'Recognize the reaction as countertransference, reflect on it, and take it to supervision before next session.', 3,
        'Self-reflection and supervision', 'Countertransference awareness', 'Noticing and reflecting on a reaction, with supervision, keeps it from steering the counselor’s choices with the client', ['urge to prove herself', 'over-explaining'], 'Acting on a reaction instead of examining it'),
      O('b', 'List her credentials in detail at the next session, so Renée can see the counselor is qualified to help her.', -1,
        'Acts out the reaction', 'Prove competence', 'Over-explaining credentials meets the counselor’s need rather than exploring what the challenge means for Renée', ['sharp questioning'], 'Answering a client’s test by defending oneself'),
      O('c', 'Match Renée’s directness and push back firmly, since a litigator will respect someone who does not back down.', -2,
        'Turns therapy into a contest', 'Counter-challenge', 'Pushing back to win a power struggle damages the alliance and repeats the adversarial dynamics she lives in', ['litigator', 'early alliance'], 'Turning a therapeutic relationship into a contest'),
      O('d', 'Briefly answer her questions about training and move on, without thinking further about the reaction.', 0,
        'Answers but skips reflection', 'Answer and proceed', 'Answering credential questions is fine, but ignoring the counselor’s own reaction leaves it free to shape later sessions', ['urge to over-explain'], 'Overlooking the counselor’s own reaction'),
    ]),
    Q('q4', 'assess', 'intake', 'Renée asks the counselor to diagnose ADHD so she can be prescribed a stimulant. What is the most accurate response?', ['R1'], [
      O('a', 'Agree that ADHD is likely, since stimulants helping her focus is a strong sign of an attention disorder.', -2,
        'Faulty inference; risky result', 'Response-to-stimulant framing', 'Stimulants improve focus in most people; this reasoning could lead to prescribed stimulants for someone with an active stimulant use disorder', ['cocaine “helps her focus”'], 'Using a stimulant response as diagnostic evidence'),
      O('b', 'Refer her for psychological testing for ADHD now, so a specialist can settle the question during active use.', 0,
        'Premature testing', 'Refer for testing', 'Testing is a reasonable later step, but results during active use and withdrawal would be hard to interpret', ['active binges', 'crashes'], 'Testing attention during active stimulant use'),
      O('c', 'Explain that ADHD cannot be ruled in without symptoms before age 12, and that current use clouds attention.', 3,
        'Apply onset and exclusion criteria', 'Criterion-based differential', 'ADHD requires several symptoms before age 12 and is not diagnosed when symptoms are better explained by substance use or withdrawal', ['no childhood symptoms', 'active cocaine use'], 'Diagnosing ADHD from adult focus complaints during substance use'),
      O('d', 'Diagnose ADHD provisionally so she can try a prescribed stimulant in place of cocaine, then reassess later.', -1,
        'Diagnosis to obtain medication', 'Substitution framing', 'Giving a diagnosis without criteria to enable a prescription is inaccurate and could expose her to stimulant misuse', ['no childhood history'], 'Making a diagnosis to meet a client’s request'),
    ]),

    // ---------------- session1 (planning, planning, indirect) ----------------
    Q('q5', 'planning', 'session1', 'Which treatment approach is best supported for Renée’s cocaine use?', ['R4', 'R5'], [
      O('a', 'Contingency management with CBT-based relapse prevention and MI, plus her safety plan for crash days.', 3,
        'CM plus CBT, MI, and safety plan', 'Evidence-based stimulant care', 'Contingency management has the strongest evidence for stimulant use disorder; CBT and MI build skills and motivation, and the safety plan addresses crash-day risk', ['cocaine binges', 'passive ideation on crash days'], 'Overlooking contingency management for stimulant use'),
      O('b', 'Mutual-help meetings alone, since peer support is the most effective option for professionals who use cocaine.', 0,
        'Helpful adjunct, not the core', 'Peer-support only', 'Mutual-help groups can support recovery, but they do not replace evidence-based treatment such as CM and CBT', ['moderate disorder'], 'Treating mutual-help as sufficient treatment'),
      O('c', 'A 60-day residential program right away, since her license is at stake and outpatient care moves too slowly.', -1,
        'Level of care not indicated', 'Escalate level of care', 'Moderate severity, no medical complications, and a stable home fit outpatient care; residential care is not indicated now', ['moderate severity', 'agreed to outpatient'], 'Matching level of care to stakes rather than to clinical need'),
      O('d', 'Ask her physician to prescribe a stimulant to replace cocaine, since that will lower her craving the fastest.', -2,
        'Outside scope; unsupported', 'Agonist-replacement framing', 'No stimulant is approved for cocaine use disorder, and recommending one is outside counselor scope and risky', ['counselor scope'], 'Steering medication decisions outside scope'),
    ]),
    Q('q6', 'planning', 'session1', 'Renée wants to know more about the lawyer assistance program but fears it reports to the bar. How should the counselor proceed?', ['R6'], [
      O('a', 'Tell her the program is fully confidential and that nothing she says there could ever reach the state bar.', -1,
        'Overpromises', 'Blanket reassurance', 'Confidentiality rules for such programs vary by state and by whether participation is voluntary or monitored; the counselor cannot guarantee them', ['state-specific rules'], 'Making confidentiality guarantees on another program’s behalf'),
      O('b', 'Advise her to avoid the program for now, since any record of her use could be used against her in the grievance.', 0,
        'Discourages a useful resource', 'Avoid-the-risk framing', 'Her caution is understandable, but steering her away closes off a confidential support built for lawyers before she has the facts', ['wants to learn more'], 'Deciding for the client instead of helping her get information'),
      O('c', 'Enroll her in the program’s monitoring track on her behalf, since showing treatment will help in the grievance.', -2,
        'Acts without consent', 'Counselor-driven enrollment', 'Contacting the program on her behalf without consent breaches confidentiality and overrides her autonomy', ['no release for the program'], 'Making a referral the client has not agreed to'),
      O('d', 'Describe the program as a resource, help her check its confidentiality rules, and leave the choice to her.', 3,
        'Inform and support choice', 'Community resource referral', 'Presenting the program, helping her confirm its confidentiality terms, and respecting her decision supports informed choice', ['fears reporting', 'wants more information'], 'Either overpromising confidentiality or discouraging the referral'),
    ]),
    Q('q7', 'indirect', 'session1', 'Renée’s defense attorney asks for a letter about her treatment. What should the letter contain?', ['R6', 'R7'], [
      O('a', 'Enrollment, attendance, and engagement, as the release allows, without opinions on her fitness to practice.', 3,
        'Scoped, factual letter', 'Stay within release and role', 'The letter stays within the release and the counselor’s role, giving facts rather than forensic opinions on fitness', ['release covers enrollment, attendance, engagement'], 'Offering opinions outside the release and the counselor’s role'),
      O('b', 'A statement that she is fit to practice law, since a strong endorsement could help her keep her license.', -2,
        'Forensic opinion outside role', 'Advocacy letter', 'A fitness-to-practice opinion is a forensic judgment outside the treating counselor’s role and beyond the release', ['treating counselor', 'grievance pending'], 'Mixing treating and evaluative roles to help a client'),
      O('c', 'Her diagnosis, use history, and progress, since the attorney needs full context to represent her well.', -1,
        'Exceeds the release', 'Full-context disclosure', 'The release does not cover diagnosis or use history; adding them could harm her in the proceeding', ['limited release'], 'Assuming her own attorney is entitled to everything'),
      O('d', 'A general note that she is a client, leaving out attendance and engagement so that less is disclosed.', 0,
        'Under-delivers on authorized content', 'Minimal letter', 'Disclosing less than authorized is safe but fails to provide what Renée asked for and agreed to share', ['signed release'], 'Withholding what the client authorized'),
    ]),

    // ---------------- session2 (interventions x3, legal x3) ----------------
    Q('q8', 'interventions', 'session2', 'Renée used after a celebration dinner, “one line that turned into the whole night.” What is the best intervention?', ['R4'], [
      O('a', 'Walk through the evening step by step to map triggers, thoughts, and choice points, then plan for the next win.', 3,
        'Functional analysis of the lapse', 'CBT chain analysis', 'Mapping the chain from celebration to use reveals triggers like alcohol and success, and builds specific coping plans', ['celebration dinner', 'wine with cocaine'], 'Treating the lapse as failure rather than data'),
      O('b', 'Remind her that one line tends to lead to more, and ask her to recommit to full abstinence starting today.', -1,
        'Lecture without analysis', 'Recommitment framing', 'Recommitting without understanding the triggers leaves her unprepared for the next high-risk situation', ['predictable trigger'], 'Asking for willpower instead of a plan'),
      O('c', 'Tell her the lapse shows that outpatient care is not working and that she needs residential treatment.', -2,
        'Overreacts to a single lapse', 'Escalate after a lapse', 'A single lapse is common and expected; recommending residential care now is not indicated and may feel punitive', ['first lapse in treatment'], 'Treating a lapse as treatment failure'),
      O('d', 'Validate that celebrations are hard and suggest she skip social events with alcohol for the next few months.', 0,
        'Avoidance without skills', 'Avoid high-risk events', 'Avoiding some situations helps early on, but she also needs skills for celebrations that come with her career', ['work celebrations'], 'Relying on avoidance alone for relapse prevention'),
    ]),
    Q('q9', 'interventions', 'session2', 'Renée says the counselor “pushed” the assistance program on her like everyone else. How should the counselor respond?', ['R5'], [
      O('a', 'Explain that the counselor only described the program and did not push it, so she sees what really happened.', -1,
        'Defends instead of repairing', 'Correct the record', 'Defending the counselor’s intent can feel dismissive and widen the rupture, even if accurate', ['she cancelled a session', 'arrived cold'], 'Prioritizing being right over repairing the alliance'),
      O('b', 'Move on to the lapse, since focusing on the relationship would distract from the substance use work she needs.', -2,
        'Ignores a rupture', 'Avoid the rupture', 'Unaddressed ruptures predict dropout; skipping it risks losing her from care altogether', ['cancelled session', 'anger at counselor'], 'Treating a rupture as a distraction'),
      O('c', 'Acknowledge how it felt, own any part in it, and ask what would help her feel the choices are hers.', 3,
        'Repair the rupture', 'Rupture repair', 'Naming the rupture, acknowledging her experience, and inviting feedback restores the alliance and supports autonomy', ['“pushed”', '“wants something from me”'], 'Defending rather than exploring the client’s experience'),
      O('d', 'Apologize and promise not to raise the program again, so she feels in control of her treatment from now on.', 0,
        'Repairs by giving up a resource', 'Over-accommodate', 'Apologizing helps, but promising never to revisit a useful resource overcorrects; repair includes asking what she wants', ['program still relevant'], 'Confusing repair with abandoning a clinical topic'),
    ]),
    Q('q10', 'interventions', 'session2', 'Renée says, “I’m the only Black woman associate. I can’t be tired, and I can’t be wrong.” What should the counselor do?', ['R6'], [
      O('a', 'Steer back to her cocaine use, since workplace race issues are outside the scope of her substance use treatment.', -2,
        'Dismisses culture and context', 'Scope-narrowing framing', 'Race-related pressure appears to feed her use to stay sharp; dismissing it misses a key driver and harms trust', ['“can’t be tired”', 'cocaine to focus'], 'Treating culture as outside the presenting problem'),
      O('b', 'Reassure her that her firm values her and that she is likely judged on her work alone, not on her race.', -1,
        'Invalidates her experience', 'Colorblind reassurance', 'Reassuring her that race does not matter dismisses her reality and may silence an important topic', ['only Black woman associate'], 'Offering colorblind reassurance'),
      O('c', 'Recommend she find a Black woman counselor, since she may feel better understood by someone who shares her identity.', 0,
        'Premature referral', 'Match-by-identity framing', 'Some clients prefer a matched counselor, and that can be offered, but assuming it avoids broaching the topic with her', ['ongoing alliance'], 'Referring out instead of broaching culture'),
      O('d', 'Broach it directly, explore how race and gender pressures at work connect to her use, and invite her view.', 3,
        'Broach and explore', 'Broaching culture', 'Openly broaching race and gender lets her explore how pressure to be flawless drives her stimulant use', ['only Black woman associate', 'cocaine to stay sharp'], 'Avoiding a cultural topic the client has opened'),
    ]),
    Q('q11', 'legal', 'session2', 'Renée asks the counselor to leave cocaine out of her records “in case the bar ever sees them.” How should the counselor respond?', ['R6', 'R7'], [
      O('a', 'Agree to describe it as “stress” in the record, since that still captures what brought her to treatment.', -2,
        'Falsifies records', 'Euphemistic documentation', 'Recording a different problem misrepresents the clinical record and any billing based on it', ['cocaine use disorder'], 'Altering documentation to protect a client'),
      O('b', 'Keep accurate records limited to what care requires, and explain their protections and when they may be released.', 3,
        'Accurate records; informed client', 'Accurate, minimal documentation', 'Records must be accurate; the counselor documents what care requires and explains confidentiality protections and limits', ['fear of the bar'], 'Either falsifying records or failing to explain their protections'),
      O('c', 'Keep accurate records but add a second set of private notes so the official file stays as brief as possible.', -1,
        'Shadow records', 'Parallel records', 'Keeping a hidden second set of records is improper; psychotherapy notes have specific rules and are not a way to hide the diagnosis', ['official record'], 'Using informal notes to sidestep the official record'),
      O('d', 'Keep accurate records and tell her that her concern is unfounded, since counseling records cannot be released.', 0,
        'Overstates protection', 'Overreassure', 'Records are protected, but they can be released with authorization or a court order; telling her otherwise is inaccurate', ['pending grievance'], 'Overstating confidentiality to calm a client'),
    ]),
    Q('q12', 'legal', 'session2', 'Renée admits reviewing client documents while high. Does this create a duty for the counselor to report her to the bar?', ['R6'], [
      O('a', 'Yes, because her conduct may have harmed her clients, which creates a duty to warn the bar about the risk.', -2,
        'Misapplies duty to warn', 'Duty-to-warn framing', 'Duty to warn concerns serious threats of violence to identifiable people; it does not cover reporting a client’s past professional conduct', ['no threat of violence'], 'Stretching duty to warn into professional misconduct'),
      O('b', 'Yes, since counselors have to report any licensed professional who works while impaired to their licensing board.', -1,
        'Invents a reporting duty', 'Universal-reporting framing', 'Reporting obligations about impaired professionals depend on specific laws; no general rule requires a counselor to report a client', ['client disclosure in therapy'], 'Assuming a reporting duty that state law has not created'),
      O('c', 'No, so the counselor should not raise it again, since her legal profession’s ethics are her own concern.', 0,
        'Right on duty; misses the clinical work', 'Hands-off framing', 'There is generally no duty to report, but working while high is clinically important and should be explored', ['reviewed documents while high'], 'Equating no legal duty with no clinical relevance'),
      O('d', 'No general duty applies absent a specific law; keep it confidential and explore its meaning and risks with her.', 3,
        'Confidentiality holds; explore clinically', 'Confidentiality with clinical focus', 'Absent a specific legal mandate, the disclosure stays confidential, and the counselor explores its risks and implications in treatment', ['no threat of harm', 'confidential disclosure'], 'Breaching confidentiality without a legal basis'),
    ]),
    Q('q13', 'legal', 'session2', 'A subpoena for Renée’s counseling records arrives from the bar’s disciplinary counsel. What should the counselor do?', ['R7', 'R6'], [
      O('a', 'Send the records by the deadline, since a subpoena from a disciplinary body is a legal order that must be obeyed.', -2,
        'Releases without authority', 'Subpoena-equals-order framing', 'A subpoena alone often does not authorize release; disclosing without consent or a court order can breach confidentiality and privilege', ['no court order', 'no authorization'], 'Treating a subpoena as a court order'),
      O('b', 'Notify Renée, consult an attorney, assert privilege, and release records only with her consent or a court order.', 3,
        'Protect, notify, consult', 'Proper subpoena response', 'The counselor informs the client, gets legal advice, asserts privilege where it applies, and discloses only with valid authorization or an order', ['bar subpoena', 'pending grievance'], 'Either ignoring or simply complying with a subpoena'),
      O('c', 'Set the subpoena aside, since counseling records are privileged and need no response from the counselor.', -1,
        'Ignores legal process', 'Ignore it', 'Privilege must be asserted; ignoring a subpoena can expose the counselor to sanctions and leaves the client unprotected', ['subpoena received'], 'Assuming privilege works without being asserted'),
      O('d', 'Call disciplinary counsel to explain the records are confidential and ask whether a summary would be enough.', 0,
        'Engages before consulting', 'Negotiate directly', 'Contacting the requester before notifying the client and consulting counsel risks disclosing information and waiving protections', ['client not yet informed'], 'Negotiating disclosure before protecting the client'),
    ]),
  ],
};

// ============================================================================
// D939 — Gambling Disorder, sports-betting debt found by a spouse (plan 9, medium)
// Complications: an insurance remark with a rifle in the garage (suicide risk
// and lethal means); a wall-punch that requires IPV screening before conjoint work.
// ============================================================================
const D939 = {
  id: 'ncmhce-D939',
  title: 'His wife found three betting apps and a 401(k) loan he called a car repair',
  category: 'Substance',
  difficulty: 'medium',
  plan: 9,
  population: 'couple_family',
  primaryDiagnosis: { name: 'Gambling Disorder', code: 'F63.0' },
  diagnosis: { name: 'Gambling Disorder', code: 'F63.0' },
  differentialOptions: [
    { id: 'do1', name: 'Bipolar I Disorder, Current Episode Manic', isCorrect: false },
    { id: 'do2', name: 'Gambling Disorder', isCorrect: true },
    { id: 'do3', name: 'Major Depressive Disorder, Single Episode, Mild', isCorrect: false },
    { id: 'do4', name: 'Antisocial Personality Disorder', isCorrect: false },
  ],
  narrative: {
    intake:
      'Andre Baptiste, 37, a Haitian American HVAC dispatcher, and his wife, Yesenia, 35, a Mexican American dental hygienist, come to a group ' +
      'practice for couples counseling after Yesenia found $41,000 in sports-betting debt: three betting apps, two maxed credit cards, a 401(k) ' +
      'loan, and $5,000 borrowed from his brother “for a car repair.” They have two children, ages 6 and 9. The counselor clarifies at intake that ' +
      'Andre is the identified client for billing, that both partners are clients in conjoint work, and that, under the practice’s signed ' +
      'no-secrets policy, information from individual sessions that bears on the couple’s work will not be kept from the other partner. Andre ' +
      'describes betting larger amounts to feel the same rush, failed attempts to stop, irritability when he tries, thinking about games all day, ' +
      'chasing losses, and lying to Yesenia. He has no history of periods of decreased need for sleep, racing thoughts, or unusually elevated ' +
      'mood, and he gambles steadily rather than in bursts. Yesenia mentions that when she showed him the statements he “punched the wall next to ' +
      'me.” In a brief individual check-in, Andre says quietly, “Honestly, my life insurance would cover all of it,” and mentions a deer rifle in the ' +
      'garage. The counselor is experienced in couples work but has treated gambling disorder only once and begins parental leave in six weeks.',
    session1:
      'Separate individual sessions are held with each partner. Andre completes a safety plan; with his agreement, his brother is holding the ' +
      'rifle, and Andre denies current intent. Yesenia reports no other physical aggression and says she feels safe at home. The couple ' +
      'agrees to meet with a nonprofit credit counselor and signs releases for coordination. Andre has not yet set up self-exclusion from the ' +
      'betting apps. Both say they want to stay together if they can “get honest.”',
    session2:
      'In an individual session, Andre reveals a fourth credit card with a $9,000 balance that Yesenia does not know about. Yesenia has consulted a ' +
      'family law attorney, who sends the counselor a request for the couple’s records signed only by Yesenia. In a conjoint session Yesenia says, ' +
      '“You chose your phone over our kids,” and Andre stands up, red-faced, and moves toward the door. Later Andre insists, “It’s not luck, I know ' +
      'football — I was up six grand in January.” Yesenia’s parents offer to pay part of the debt, and Andre says that in his family “a man handles ' +
      'his own,” and that taking the money would shame him.',
  },
  diagnosticRationale:
    'Andre shows at least seven gambling disorder criteria within the past 12 months: needing to gamble with increasing amounts for the same ' +
    'excitement, restlessness or irritability when cutting down, repeated unsuccessful efforts to stop, preoccupation, chasing losses, lying to ' +
    'conceal gambling, and relying on others for money (the loan from his brother), and jeopardizing his marriage. Four or more criteria are ' +
    'required (F63.0). His gambling is steady and not better explained by a manic episode, as he has no history of decreased need for sleep, ' +
    'racing thoughts, or elevated mood. The remark about life insurance, with access to a rifle, requires suicide risk assessment and lethal means ' +
    'counseling, since suicide risk is elevated in gambling disorder.',
  references: [
    { id: 'R1', source: 'DSM-5-TR', detail: 'Gambling disorder: 4 or more of 9 criteria in 12 months; not better explained by a manic episode; F63.0; elevated suicide risk noted' },
    { id: 'R2', source: 'C-SSRS', detail: 'Structured assessment of ideation, intent, plan, and preparatory behavior' },
    { id: 'R3', source: 'VA/DoD CPG', detail: 'Suicide risk assessment and management: lethal means safety counseling; collaborative safety planning' },
    { id: 'R4', source: 'Corey (Theory & Practice)', detail: 'Couples and family counseling: structured communication, de-escalation, cognitive restructuring; multicultural and family-systems lenses' },
    { id: 'R5', source: 'ACA Code of Ethics', detail: 'Couples and family confidentiality and defining the client (B.4.); counselor competence; informed consent; accurate billing; interruption of services' },
    { id: 'R6', source: 'HIPAA', detail: 'Authorization required to release records; multi-party records in conjoint treatment; billing under the identified client with documented medical necessity' },
  ],
  questions: [
    // ---------------- intake (assess, profdev, assess, profdev) ----------------
    Q('q1', 'assess', 'intake', 'Which finding is most important for ruling out another explanation of Andre’s gambling?', ['R1'], [
      O('a', 'His lying to Yesenia, which shows that the gambling is driven by deceitful personality traits rather than a disorder.', -2,
        'Mislabels a criterion as personality', 'Character framing', 'Lying to conceal gambling is a gambling disorder criterion, not evidence of a personality disorder', ['lies only about gambling'], 'Diagnosing personality pathology from disorder-driven behavior'),
      O('b', 'His steady gambling with no history of reduced sleep, racing thoughts, or elevated mood, which argues against mania.', 3,
        'Rules out a manic episode', 'Apply the exclusion', 'Gambling disorder is diagnosed only when the behavior is not better explained by a manic episode; his history shows no manic features', ['steady gambling', 'no elevated mood or reduced sleep'], 'Skipping the manic-episode exclusion'),
      O('c', 'His irritability when he tries to stop, which suggests an underlying depressive disorder that is driving the betting.', -1,
        'Misreads a gambling criterion', 'Depression-driven framing', 'Irritability when cutting down is itself a gambling disorder criterion and does not point to a depressive disorder', ['irritable when stopping'], 'Treating a disorder criterion as a sign of another disorder'),
      O('d', 'The size of the $41,000 debt, which shows his gambling is too severe to be explained by anything but a disorder.', 0,
        'Severity is not an exclusion', 'Severity framing', 'The debt shows harm, but the size of losses does not rule out mania as an explanation', ['$41,000 debt'], 'Using severity instead of the exclusion criterion'),
    ]),
    Q('q2', 'profdev', 'intake', 'The counselor has treated gambling disorder only once. What is the most appropriate step?', ['R5'], [
      O('a', 'Treat the couple with standard couples methods only, since the gambling will likely fade as the marriage improves.', -2,
        'Ignores the primary disorder', 'Relationship-only framing', 'Treating only the marriage leaves a gambling disorder with high suicide risk unaddressed', ['gambling disorder', 'suicide remark'], 'Assuming the addiction is a symptom of the relationship'),
      O('b', 'Rely on general substance use approaches, since gambling disorder is treated the same way as alcohol use disorder.', -1,
        'Overgeneralizes', 'Same-as-SUD framing', 'Some principles overlap, but gambling has distinct features such as financial safeguards and cognitive distortions about skill', ['debt', 'betting apps'], 'Assuming all addictive disorders need identical treatment'),

      O('c', 'Refer Andre to a gambling specialist and continue only the couples work, without coordinating with the specialist.', 0,
        'Referral without coordination', 'Split care', 'A specialist referral may help, but uncoordinated parallel care risks mixed messages to the couple', ['conjoint work ongoing'], 'Splitting care without coordination'),
      O('d', 'Consult a colleague experienced with gambling disorder and pursue training while providing care within competence.', 3,
        'Consultation plus training', 'Build specialty competence', 'Counselors seek consultation and training when a case requires skills they have used little, while practicing within competence', ['one prior gambling case'], 'Practicing in a specialty area without consultation'),    ]),
    Q('q3', 'assess', 'intake', 'Andre says his life insurance “would cover all of it” and mentions a rifle in the garage. What should the counselor do?', ['R2', 'R3'], [
      O('a', 'Treat the remark as dark humor about the debt and return to the couple’s communication goals for the session.', -1,
        'Misses a risk disclosure', 'Dismiss as humor', 'An insurance remark with firearm access in gambling disorder, which carries elevated suicide risk, must be assessed, not dismissed', ['“life insurance would cover all of it”', 'rifle in garage'], 'Treating an indirect suicide statement as a joke'),
      O('b', 'Ask Andre to promise he will not hurt himself and to call the counselor before acting on any thoughts like that.', -2,
        'No-suicide contract', 'Contract for safety', 'A promise is not an assessment or plan and can give false reassurance', ['indirect statement', 'firearm access'], 'Substituting a promise for assessment and lethal means counseling'),
      O('c', 'Ask about suicidal thoughts directly with a structured tool, and discuss storing the rifle away from home for now.', 3,
        'Assess risk and address lethal means', 'Structured assessment and means safety', 'Direct structured assessment clarifies risk, and lethal means counseling about the rifle lowers the chance of a fatal act', ['indirect suicidal statement', 'rifle in garage'], 'Assessing ideation without addressing firearm access'),
      O('d', 'Raise the remark with Yesenia in the conjoint session, so she can help watch over Andre at home this week.', 0,
        'Premature disclosure', 'Involve the spouse first', 'Involving family can help safety, but the counselor first assesses risk with Andre and plans with his input', ['individual check-in'], 'Bringing in others before assessing risk directly'),
    ]),
    Q('q4', 'profdev', 'intake', 'The counselor begins parental leave in six weeks. How should this be handled with the couple?', ['R5'], [
      O('a', 'Wait to mention the leave until closer to the date, so it does not distract from their early work together.', -1,
        'Withholds a relevant fact', 'Delay disclosure', 'A known interruption affects informed choice; delaying disclosure can feel like a betrayal for a couple dealing with secrecy', ['secrecy as a core issue'], 'Withholding a planned absence from clients'),
      O('b', 'Disclose the leave now and discuss their options, such as seeing a colleague now or starting with a planned handoff.', 3,
        'Disclose and plan for availability', 'Suitability and availability', 'Counselors weigh their availability when taking a case and give clients an informed choice about continuity', ['leave in six weeks', 'high-risk case'], 'Accepting a case without discussing known availability limits'),
      O('c', 'Begin treatment and plan to arrange coverage later, since six weeks is long enough to make solid progress.', 0,
        'Plans coverage but not consent', 'Start and cover later', 'Coverage planning helps, but the couple should know about the leave and have a say before starting', ['informed consent'], 'Planning continuity without the clients’ input'),
      O('d', 'Start treatment and stop sessions when leave begins, since the couple can return to the practice afterward.', -2,
        'Leads to abandonment', 'Pause without plan', 'Stopping abruptly during active risk and crisis, with no plan for continuity, amounts to abandonment', ['suicide risk', 'marital crisis'], 'Treating a known absence as a simple pause'),
    ]),

    // ---------------- session1 (indirect, planning, planning) ----------------
    Q('q5', 'indirect', 'session1', 'The couple agrees to meet with a nonprofit credit counselor and signs releases. How should the counselor collaborate?', ['R6'], [
      O('a', 'Share only what the releases allow, such as the financial treatment goals, and align the debt plan with those goals.', 3,
        'Scoped collaboration', 'Coordinate with a non-clinical partner', 'Coordinating within the releases helps align the debt plan with treatment goals like financial safeguards', ['signed releases', 'nonprofit credit counselor'], 'Over-sharing or failing to coordinate with a non-clinical stakeholder'),
      O('b', 'Send the credit counselor the intake summary, since knowing about the disorder will help them build a debt plan.', -1,
        'Exceeds what is needed', 'Share the whole record', 'A credit counselor needs goals and coordination points, not the clinical record; this exceeds the minimum necessary', ['non-clinical stakeholder'], 'Treating a release as permission to share everything'),
      O('c', 'Leave the debt plan to the couple and the credit counselor, since financial matters fall outside counseling.', 0,
        'Misses useful coordination', 'Stay in lane', 'The debt plan is not counseling, but coordination helps financial safeguards support treatment goals', ['gambling-related debt'], 'Treating finances as outside gambling disorder treatment'),
      O('d', 'Ask the credit counselor to tell the counselor whenever Andre spends money, so his gambling can be tracked.', -2,
        'Surveillance outside the release', 'Monitoring arrangement', 'Turning the credit counselor into a monitor goes beyond the releases and undermines Andre’s trust and autonomy', ['releases for coordination only'], 'Using collaboration for surveillance'),
    ]),
    Q('q6', 'planning', 'session1', 'Given the wall-punch, what should the counselor do before continuing conjoint sessions?', ['R5', 'R4'], [
      O('a', 'Continue conjoint sessions as planned, since one punch at a wall during a crisis does not count as violence.', -1,
        'Skips a contraindication check', 'Minimize the incident', 'Property violence near a partner can signal intimidation; it calls for screening before conjoint work', ['“punched the wall next to me”'], 'Dismissing property violence as non-violent'),
      O('b', 'Address the punch in a conjoint session, so Andre can take responsibility in front of Yesenia right away.', -2,
        'Unsafe if IPV is present', 'Confront jointly', 'Raising violence jointly before screening could endanger Yesenia if coercion is present', ['wall punched next to her'], 'Confronting possible IPV in a joint session'),
      O('c', 'Screen each partner individually for violence and coercion, and continue conjoint work only if it is safe.', 3,
        'Individual IPV screening', 'Assess contraindications', 'Individual screening for intimate partner violence determines whether conjoint therapy is safe or contraindicated', ['wall-punch', 'conjoint plan'], 'Starting conjoint work without screening for IPV'),
      O('d', 'Ask Yesenia in the conjoint session whether she feels safe, so the answer is clear to both of them.', 0,
        'Screening in the wrong setting', 'Joint safety question', 'Asking about safety is right, but asking with Andre present may keep her from answering honestly', ['partner present'], 'Asking about safety in front of the other partner'),
    ]),
    Q('q7', 'planning', 'session1', 'Which plan best fits Andre’s gambling disorder and the couple’s goals?', ['R4', 'R1'], [
      O('a', 'CBT for gambling, a GA referral for Andre, Gam-Anon for Yesenia, app self-exclusion, and conjoint sessions.', 3,
        'Integrated plan', 'Multi-level plan', 'Combining CBT, mutual-help for both partners, financial and access safeguards, and conjoint work addresses the disorder and the relationship', ['no self-exclusion yet', 'want to “get honest”'], 'Treating only one part of a multi-part problem'),
      O('b', 'Conjoint sessions on trust and communication, with gambling addressed later once the marriage feels steadier.', 0,
        'Delays core treatment', 'Relationship-first plan', 'Rebuilding trust matters, but gambling treatment and access safeguards come first to stop ongoing harm', ['betting apps active'], 'Postponing treatment of the primary disorder'),
      O('c', 'GA meetings alone for Andre, since peer support is enough and couples work can come once he has stopped.', -1,
        'Narrow plan', 'Mutual-help only', 'GA can help, but alone it omits evidence-based treatment, safeguards, and support for Yesenia', ['couple seeking help together'], 'Treating mutual-help as complete treatment'),
      O('d', 'Have Yesenia take full control of Andre’s pay and phone, and focus sessions on enforcing those limits.', -2,
        'Control in place of treatment', 'Enforcement plan', 'Total control by one partner, without treatment, fuels resentment and does not treat the disorder', ['IPV screen ongoing', 'mutual goals'], 'Substituting control for treatment'),
    ]),

    // ---------------- session2 (legal x3, interventions x3) ----------------
    Q('q8', 'legal', 'session2', 'In an individual session, Andre reveals a fourth credit card that Yesenia does not know about. What should the counselor do?', ['R5'], [
      O('a', 'Keep the card confidential, since it came up in an individual session and Andre has a right to privacy there.', -1,
        'Contradicts the signed policy', 'Individual-privacy framing', 'The couple agreed to a no-secrets policy; keeping the secret now aligns the counselor with Andre against the couple’s work', ['signed no-secrets policy'], 'Ignoring the confidentiality agreement made at intake'),
      O('b', 'Tell Yesenia about the card at the start of the next conjoint session, before Andre has a chance to explain.', -2,
        'Disclosure without process', 'Counselor discloses abruptly', 'The policy allows sharing, but disclosing it without giving Andre the chance to share it himself harms trust and safety', ['recent suicide risk', 'secrecy'], 'Applying the policy without care for process'),
      O('c', 'Remind Andre of the policy and help him plan to tell Yesenia himself in a conjoint session soon.', 3,
        'Follow the policy collaboratively', 'Support self-disclosure', 'Under the agreed policy, the counselor helps Andre disclose the information himself within a reasonable time', ['no-secrets policy', 'fourth card'], 'Either keeping secrets or disclosing without supporting the client'),
      O('d', 'Ask Andre to pay off the card quietly first, so that the disclosure will hurt Yesenia less when it comes.', 0,
        'Delays honesty', 'Fix it first', 'Paying it down first prolongs the secret and risks more borrowing or gambling to cover it', ['$9,000 balance'], 'Putting damage control ahead of honesty'),
    ]),
    Q('q9', 'legal', 'session2', 'Yesenia’s attorney requests the couple’s records with an authorization signed only by Yesenia. What should the counselor do?', ['R6', 'R5'], [
      O('a', 'Release the couple’s records, since Yesenia is a client and has signed a valid authorization for her attorney.', -2,
        'Discloses Andre’s information', 'Single-signature release', 'Couple records include Andre’s information; releasing them on one partner’s signature can breach his confidentiality', ['signed only by Yesenia'], 'Treating one partner’s consent as enough for joint records'),
      O('b', 'Release only Yesenia’s individual session notes, after removing anything Andre said during those sessions.', 0,
        'Partial and risky', 'Redact and release', 'Sorting records alone is error-prone; the counselor consults and follows policy and law before releasing anything', ['shared records'], 'Making legal judgments about records without consultation'),
      O('c', 'Tell the attorney that couples records cannot be released, and decline any further contact on the matter.', -1,
        'Inaccurate and dismissive', 'Blanket refusal', 'Records can be released with proper authorization or a court order; a blanket refusal misstates the law', ['legal request'], 'Overstating confidentiality'),
      O('d', 'Release joint records only with both partners’ written authorization or a court order, after consulting.', 3,
        'Both authorizations or an order', 'Multi-client records', 'In conjoint work, release of joint records generally requires both partners’ authorization or a court order; consultation guides the reply', ['signed only by Yesenia', 'conjoint records'], 'Treating one partner’s authorization as sufficient'),
    ]),
    Q('q10', 'legal', 'session2', 'How should the counselor bill the conjoint sessions focused on Andre’s gambling disorder?', ['R6', 'R5'], [
      O('a', 'Bill the conjoint sessions as individual therapy for Andre, since the reimbursement rate is often higher that way.', -2,
        'Misrepresents the service', 'Code for payment', 'Billing a conjoint session as individual therapy misrepresents the service provided and is fraudulent', ['conjoint sessions'], 'Choosing codes for reimbursement rather than accuracy'),
      O('b', 'Bill under Andre’s diagnosis and keep notes brief, since detailed couple notes could reveal Yesenia’s information.', 0,
        'Accurate code, weak documentation', 'Minimal notes', 'Notes can be concise, but they still need to document medical necessity for the billed service', ['insurance billing'], 'Under-documenting billed services'),

      O('c', 'Bill the sessions under Yesenia’s plan with an adjustment diagnosis, since the betrayal has caused her distress.', -1,
        'Diagnosis to fit billing', 'Diagnose to bill', 'Giving Yesenia a diagnosis to support billing, without an assessment showing one, is inaccurate', ['Andre is identified client'], 'Creating a diagnosis to fit reimbursement'),
      O('d', 'Bill a conjoint session code under Andre’s diagnosis, with notes showing how each session treats his disorder.', 3,
        'Accurate code, documented necessity', 'Billing with documentation', 'Conjoint sessions can be billed under the identified client’s diagnosis when notes document how the work treats his disorder', ['Andre identified client', 'gambling-focused sessions'], 'Billing without documentation of medical necessity'),    ]),
    Q('q11', 'interventions', 'session2', 'Andre stands, red-faced, and moves toward the door after Yesenia’s comment. What should the counselor do first?', ['R4'], [
      O('a', 'Calmly name the moment, invite a short time-out with a plan to return, and slow the exchange once both are seated.', 3,
        'De-escalate and structure', 'Crisis de-escalation', 'A calm, structured time-out lowers arousal, preserves safety, and lets the couple return to a slowed, guided exchange', ['standing, red-faced', 'prior wall-punch'], 'Either pressing on or ending without a plan'),
      O('b', 'Ask Andre to sit down and respond to what Yesenia said, since leaving would just be avoiding responsibility again.', -1,
        'Escalates the conflict', 'Demand engagement', 'Demanding engagement while Andre is highly aroused raises the risk of escalation', ['prior wall-punch'], 'Pressing for engagement during escalation'),
      O('c', 'Let him leave and continue with Yesenia, since his walking out is the pattern that needs to be talked about.', -2,
        'Unsafe split', 'Continue without him', 'Letting a recently suicidal, escalated client leave without a check-in, and continuing one-sided, raises risk and splits the couple', ['recent suicide risk', 'escalation'], 'Overlooking safety when a client leaves in crisis'),
      O('d', 'End the session now for both of them and reschedule, so that nobody says anything they will regret later.', 0,
        'Safe but abrupt', 'End session', 'Ending can prevent escalation, but without a time-out plan and safety check it misses a chance to model repair', ['high arousal'], 'Ending sessions instead of de-escalating'),
    ]),
    Q('q12', 'interventions', 'session2', 'Andre insists, “It’s not luck, I know football — I was up six grand in January.” Which response best fits CBT for gambling?', ['R4'], [
      O('a', 'Tell him that sports betting is pure chance and that his knowledge of football cannot make any difference.', -1,
        'Lecture invites argument', 'Correct directly', 'Flatly contradicting him tends to start a debate; guided discovery helps him see the distortion himself', ['firm belief in skill'], 'Arguing with a distortion instead of exploring it'),
      O('b', 'Help him review his full record of wins and losses and explore how odds and memory of wins shape his belief.', 3,
        'Guided discovery of distortions', 'Cognitive restructuring', 'Reviewing his actual record addresses illusion of control and selective memory of wins, key distortions in gambling disorder', ['“I know football”', 'up six grand in January'], 'Leaving gambling distortions unexamined'),
      O('c', 'Agree that skill plays some part, and suggest he limit himself to the games where his knowledge is strongest.', -2,
        'Reinforces the distortion', 'Controlled-gambling framing', 'Endorsing skill-based betting reinforces the illusion of control and invites continued gambling', ['$41,000 debt'], 'Colluding with the illusion of control'),
      O('d', 'Note the belief for later and focus this session on the couple’s communication, since that is more urgent now.', 0,
        'Defers a key target', 'Postpone', 'Communication matters, but this distortion drives his gambling and is a timely target', ['active belief'], 'Missing an in-session opening to address a distortion'),
    ]),
    Q('q13', 'interventions', 'session2', 'Andre says that in his family “a man handles his own,” and taking Yesenia’s parents’ money would shame him. What should the counselor do?', ['R4'], [
      O('a', 'Encourage him to accept the money, since paying down debt quickly is the most practical way to lower stress.', -1,
        'Skips cultural exploration', 'Practical-fix framing', 'Pushing the practical choice ignores values that shape his shame and help-seeking', ['“a man handles his own”'], 'Overriding cultural values with practical advice'),
      O('b', 'Support his refusal, since respecting cultural values means the counselor should not question them at all.', 0,
        'Respectful but unexplored', 'Defer to culture', 'Respect is right, but exploring the value helps him and Yesenia see how it shapes shame and secrecy', ['shame', 'secrecy pattern'], 'Confusing respect with not exploring'),
      O('c', 'Explore what handling his own means to him and to Yesenia, and how the value shapes his shame and secrecy.', 3,
        'Explore culture and worldview', 'Cultural exploration', 'Exploring each partner’s cultural values about money and help reveals how shame may sustain secrecy, informing joint decisions', ['Haitian American family values', 'Mexican American family offer'], 'Overlooking cultural meanings tied to the problem'),
      O('d', 'Point out that the same pride led him to hide the debt, so he needs to let go of that value to recover.', -2,
        'Pathologizes his culture', 'Value-as-problem framing', 'Labeling his cultural value as the problem is disrespectful and likely to deepen shame and withdrawal', ['cultural identity'], 'Treating a client’s cultural value as pathology'),
    ]),
  ],
};

module.exports = { CASES: [D935, D936, D937, D938, D939] };
