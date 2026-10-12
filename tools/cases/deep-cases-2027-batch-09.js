// deep-cases-2027-batch-09.js — NCMHCE deep cases, 2027 NCMHCE specification; hand-authored; validate with check2027.js
//
//   ncmhce-D960 · plan 0 · Crisis · medium · adult        — Acute Crisis / Decompensation (F43.0)
//   ncmhce-D961 · plan 1 · Crisis · hard · adult          — Homicidal Ideation / Threat Assessment (R45.850)
//   ncmhce-D962 · plan 2 · Crisis · medium · older_adult  — Suicidal Behavior / Acute Risk (R45.851)
//   ncmhce-D963 · plan 3 · Disruptive · easy · child      — Oppositional Defiant Disorder (F91.3)
//   ncmhce-D964 · plan 4 · Disruptive · hard · child      — Conduct Disorder, Adolescent-Onset Type (F91.2)
//
// Question i's domain/section follow blueprint2027.DOMAIN_PLANS_2027[plan] in order.
// Standalone deliverable for SME review. Do NOT auto-import.

const O = (id, text, weight, ex) => ({
  id,
  text,
  isCorrect: weight === 3,
  weight,
  rationale: ex.r,
  explanation: { approach: ex.approach, rationale: ex.why, keyIndicators: ex.keys, commonMistake: ex.mistake },
});
const Q = (id, domain, section, question, evidenceRef, options) => ({ id, domain, section, question, evidenceRef, options });

// ============================================================================
// D960 — Acute Crisis / Decompensation (F43.0) — Crisis — medium — plan 0
// Complications (medium): antidepressant lost in the flood (discontinuation
// symptoms, prescriber coordination) and rising alcohol use for sleep.
// ============================================================================
const D960 = {
  id: 'ncmhce-D960',
  title: 'A hurricane floods a bus driver’s home and her counselor’s office in the same week',
  category: 'Crisis',
  difficulty: 'medium',
  plan: 0,
  population: 'adult',
  primaryDiagnosis: { name: 'Acute Crisis / Decompensation', code: 'F43.0' },
  diagnosis: { name: 'Acute Crisis / Decompensation', code: 'F43.0' },
  differentialOptions: [
    { id: 'do1', name: 'Posttraumatic Stress Disorder', isCorrect: false },
    { id: 'do2', name: 'Acute Crisis / Decompensation', isCorrect: true },
    { id: 'do3', name: 'Major Depressive Disorder, Recurrent Episode', isCorrect: false },
    { id: 'do4', name: 'Adjustment Disorder, with Anxiety', isCorrect: false },
  ],
  narrative: {
    intake:
      'Margaret “Margo” Fontenot, a 47-year-old white Cajun school bus driver from Lake Charles, Louisiana, was scheduled for an intake the week a ' +
      'Category 3 hurricane made landfall. The counselor’s ground-floor office flooded, so the group practice activated its emergency preparedness plan: ' +
      'staff reached scheduled clients through the phone tree kept in the cloud-hosted EHR, and the counselor—whose own house lost its roof and who is ' +
      'staying with her parents in Shreveport—completed Margo’s intake by video nine days after landfall. Margo is staying with her sister in Alexandria; ' +
      'the counselor obtained telehealth consent, confirmed her physical address, and recorded her sister as emergency contact. Margo and her 16-year-old ' +
      'son sheltered in their attic for six hours as water rose before a neighbor rescued them by boat; her dog drowned. Since then she has had intrusive ' +
      'images of the water, nightmares, a strong startle, avoidance of storm news, irritability, poor concentration on aid forms, about three hours of ' +
      'sleep a night, and moments of “watching myself from outside,” with gaps in her memory of the rescue. She had a major depressive episode in 2021 ' +
      'treated by her primary care physician (PCP) with sertraline 100 mg; her medication was lost in the flood and she has taken none for eight days, ' +
      'reporting dizziness, “electric zaps” in her head, and tearfulness since stopping. She now drinks two to three glasses of wine nightly “to knock ' +
      'myself out,” up from occasional use. On a structured screen she endorses a passing thought two nights ago that “it would’ve been easier if the boat ' +
      'hadn’t come,” with no intent, plan, or preparatory behavior; there are no firearms in her sister’s home. Near the end, Margo asks whether the ' +
      'counselor’s house was hit and offers to have her brother-in-law, a roofer, “fix it at cost.” Since landfall the counselor has been sleeping poorly ' +
      'and has teared up twice when clients described the water.',
    session1:
      'At the second video session (day 14) Margo confirms she is still at her sister’s home. She sleeps about four hours, still “spaces out” when she ' +
      'hears rain, and says FEMA paperwork, a flooded car, and no word from her insurer leave her “frozen.” Her son is staying with his father in Lafayette ' +
      'and texts her daily. Her PCP’s clinic remains closed; she has not replaced the sertraline, still has the zaps and dizziness, and asks whether she ' +
      'should “just take some of my sister’s pills” in the meantime. The counselor’s office will stay closed for at least two months during repairs, ' +
      'forecasters are tracking a new tropical system in the Gulf, and Margo worries aloud about what happens to her sessions “if the power goes out ' +
      'again.” She wants help “getting my life back in order” and agrees to weekly video sessions.',
    session2:
      'By day 21 Margo has seen a covering physician through her insurer’s telehealth service and restarted sertraline; the zaps have eased, she has cut ' +
      'back to one glass of wine most nights, and she sleeps five hours. Midway through the session a news alert about the tropical system sounds on her ' +
      'phone; she breathes rapidly, grips the table, and says, “It’s happening again.” Once settled she asks, “Am I going crazy? I keep spacing out,” and ' +
      'later cries about her dog: “I should have carried him up—what kind of person leaves her dog?” After the session the practice manager reports two ' +
      'problems: the insurance adjuster found a ground-floor cabinet of paper intake forms soaked and partly scattered across the flooded office, and ' +
      'during last week’s outage of the practice’s telehealth vendor a part-time colleague held sessions on a free consumer video app that has no business ' +
      'associate agreement. The partners ask the counselor to help update the practice’s emergency preparedness plan.',
  },
  diagnosticRationale:
    'Margo was exposed to actual threatened death (trapped in a flooding attic) and, within days, developed nine or more symptoms across the intrusion ' +
    '(images, nightmares), dissociative (depersonalization, amnesia for parts of the rescue), avoidance, and arousal (insomnia, irritability, poor ' +
    'concentration, startle) clusters, now present from day 3 to day 21 with marked distress and impairment. Because duration is under one month, PTSD ' +
    'cannot yet be diagnosed; the acute stress picture coded F43.0 is the given diagnosis and the crisis frame for care. A recurrent depressive episode ' +
    'is a live differential—tearfulness began with abrupt sertraline discontinuation and she voiced a passive death wish—so mood, medication effects, ' +
    'alcohol, and risk are monitored; if trauma symptoms persist past one month, PTSD is reassessed.',
  references: [
    { id: 'R1', source: 'DSM-5-TR', detail: 'Acute stress disorder: trauma exposure; 9 or more of 14 symptoms across intrusion, negative mood, dissociation, avoidance, arousal; duration 3 days to 1 month; PTSD requires more than 1 month' },
    { id: 'R2', source: 'C-SSRS', detail: 'Full ideation and behavior items when a screen is positive, including passive death wishes after disasters' },
    { id: 'R3', source: 'Stanley-Brown SPI', detail: 'Collaborative written safety plan: warning signs, coping, contacts, professional and crisis resources, means safety' },
    { id: 'R4', source: 'VA/DoD CPG', detail: 'Management of PTSD and Acute Stress Disorder: early post-trauma care and monitoring; brief trauma-focused CBT when acute stress symptoms persist' },
    { id: 'R5', source: 'ACA Code of Ethics', detail: 'Boundaries and nonprofessional interactions; impairment and self-monitoring; continuity of care and planning for interruption of services; distance counseling security' },
    { id: 'R6', source: 'HIPAA', detail: 'Breach Notification Rule four-factor risk assessment for unsecured PHI; business associate agreements for telehealth vendors; Security Rule contingency planning' },
    { id: 'R7', source: 'NBCC 2027 Spec', detail: 'Legal & Ethical Compliance: activate, review, and update a practice emergency preparedness plan; Treatment Planning: plan for disruption of service' },
    { id: 'R8', source: 'Wiger (Documentation)', detail: 'Documenting client-reported medication effects and care coordination in the record' },
    { id: 'R9', source: 'Hays (Assessment)', detail: 'Structured screening for alcohol use (e.g., AUDIT) and interpreting results in context' },
    { id: 'R10', source: 'NICE guidelines', detail: 'PTSD (NG116): do not offer psychologically focused debriefing to prevent or treat PTSD; practical and social support and active monitoring early; trauma-focused CBT for acute stress disorder or clinically important symptoms within the first month' },
  ],
  questions: [
    // ---------------- intake (5): profdev ×2, assess ×3 ----------------
    Q('q1', 'profdev', 'intake', 'The counselor lost her own roof, is sleeping poorly, and has teared up when clients describe the water. What should she do first?', ['R5'], [
      O('a', 'Keep her full caseload and push through, since her community needs counselors most right after the storm.', -2,
        { r: 'Ignores signs of impairment', approach: 'Push-through framing', why: 'Counselors monitor themselves for impairment; working a full disaster caseload while symptomatic risks harm to clients and to herself', keys: ['sleeping poorly', 'tears up when clients describe the water'], mistake: 'Treating community need as a reason to skip self-assessment' }),
      O('b', 'Assess how her own losses affect her work, arrange supervision or peer support, and trim her caseload if needed.', 3,
        { r: 'Self-assess, get support, adjust load', approach: 'Monitor shared-trauma exposure', why: 'In a shared disaster the counselor is also a survivor; she gauges her functioning, uses supervision and peer support, and adjusts her caseload so care stays sound', keys: ['own house lost its roof', 'staying with her parents'], mistake: 'Either ignoring her own exposure or abandoning clients over it' }),
      O('c', 'Close her practice for the season and refer every client elsewhere, since any personal loss impairs her work.', -1,
        { r: 'Overcorrects into abandonment', approach: 'Withdraw-from-practice framing', why: 'Personal loss does not automatically mean impairment; a blanket shutdown strands displaced clients when continuity matters most', keys: ['clients displaced', 'continuity of care'], mistake: 'Equating any exposure with impairment requiring withdrawal' }),
      O('d', 'Start her own counseling once the storm season ends, and keep seeing all of her usual clients on schedule in the meantime.', 0,
        { r: 'Support delayed, no self-check now', approach: 'Defer self-care framing', why: 'Her own counseling may help, but symptoms are present now; waiting months skips the current check on how she is functioning', keys: ['symptoms since landfall'], mistake: 'Postponing self-monitoring until a convenient time' }),
    ]),
    Q('q2', 'profdev', 'intake', 'Margo offers to have her brother-in-law, a roofer, repair the counselor’s roof “at cost.” The best response is to:', ['R5'], [
      O('a', 'Accept the offer, since roofers are scarce after the storm and the price is fair to both of them.', -2,
        { r: 'Creates a business dual relationship', approach: 'Accept-the-favor framing', why: 'A discounted service from a client’s family creates a financial entanglement that can compromise objectivity and exploit the client’s gratitude', keys: ['“fix it at cost”', 'new client in crisis'], mistake: 'Letting the counselor’s own disaster needs override boundaries' }),
      O('b', 'Accept only if she pays the full market rate, which keeps the arrangement a fair business deal.', -1,
        { r: 'Still a business tie to the client', approach: 'Fair-price framing', why: 'Paying full price removes the discount but not the dual relationship; disputes over the work could still spill into therapy', keys: ['brother-in-law of the client'], mistake: 'Believing fair payment cancels a dual relationship' }),
      O('c', 'Say she will think it over and revisit the offer once Margo’s course of counseling has fully ended.', 0,
        { r: 'Leaves the boundary unclear', approach: 'Defer-the-offer framing', why: 'Postponing keeps the door open and leaves Margo unsure; a clear, kind decline is cleaner', keys: ['offer made at intake'], mistake: 'Avoiding a clear boundary to spare discomfort' }),
      O('d', 'Thank her warmly, decline, explain why, and explore what wanting to help means for her right now.', 3,
        { r: 'Decline kindly and explore', approach: 'Hold the boundary therapeutically', why: 'Declining protects the relationship from a financial entanglement, and exploring the offer can surface her need for reciprocity and control after loss', keys: ['offer of a discounted repair', 'counselor’s own damage'], mistake: 'Rejecting the gift without exploring its meaning' }),
    ]),
    Q('q3', 'assess', 'intake', 'Which finding most directly supports the given acute stress diagnosis rather than PTSD?', ['R1'], [
      O('a', 'Her depersonalization and memory gaps, since dissociation is required for the acute stress diagnosis.', 0,
        { r: 'Dissociation is not required', approach: 'Dissociation-required framing', why: 'Dissociative symptoms count toward the total but are not mandatory; the decisive discriminator is duration', keys: ['“watching myself from outside”'], mistake: 'Treating dissociation as a required criterion' }),
      O('b', 'Her symptoms meet PTSD with dissociative symptoms already, since full criteria are present right after trauma.', -1,
        { r: 'PTSD needs more than one month', approach: 'Early-PTSD framing', why: 'PTSD cannot be diagnosed until symptoms last more than one month; at nine days the acute stress frame applies', keys: ['nine days after landfall'], mistake: 'Ignoring the duration criterion that separates the two' }),
      O('c', 'Nine or more trauma symptoms began after the flood and have lasted nine days, inside the one-month window.', 3,
        { r: 'Symptom count plus timing', approach: 'Apply count and duration', why: 'The diagnosis needs nine of fourteen symptoms after exposure lasting three days to one month; PTSD needs more than a month', keys: ['intrusions, dissociation, avoidance, arousal', 'nine days post-landfall'], mistake: 'Diagnosing from symptoms without checking duration' }),
      O('d', 'Her reactions are normal for a disaster, so a diagnosis would only stigmatize her during recovery.', -2,
        { r: 'Misses impairment and risk', approach: 'Normalize-only framing', why: 'Many survivors are distressed, but her symptoms are marked, impairing, and accompanied by a death wish and rising alcohol use', keys: ['three hours of sleep', 'passive death wish'], mistake: 'Normalizing away a clinically significant acute reaction' }),
    ]),
    Q('q4', 'assess', 'intake', 'How should the counselor respond to Margo’s thought that “it would’ve been easier if the boat hadn’t come”?', ['R2', 'R3'], [
      O('a', 'Ask her to promise she will call before acting on any thought of death, then return to the intake.', -2,
        { r: 'A promise is not a safety intervention', approach: 'No-harm contract framing', why: 'No-suicide contracts lack evidence and can end inquiry early; a full assessment and written safety plan are indicated', keys: ['positive screen'], mistake: 'Relying on a verbal promise instead of assessment' }),
      O('b', 'Arrange an inpatient admission today, since any thought of death after a disaster signals a high level of risk.', 0,
        { r: 'More restrictive than the data support', approach: 'Hospitalize-now framing', why: 'A passive thought without intent or plan does not by itself require admission; still, erring restrictive is safer than missing risk', keys: ['no intent or plan'], mistake: 'Choosing a level of care before completing the assessment' }),
      O('c', 'Note it as an expected grief reaction after the rescue and recheck her mood at next week’s session.', -1,
        { r: 'Skips assessment and planning', approach: 'Defer framing', why: 'A positive screen with alcohol use and a stopped antidepressant calls for full assessment now, not a week’s delay', keys: ['wine nightly', 'off sertraline'], mistake: 'Treating a death wish as routine grief' }),
      O('d', 'Complete the full C-SSRS, ask about means and alcohol, and write a safety plan with her and her sister.', 3,
        { r: 'Full assessment and safety plan', approach: 'Assess, then plan collaboratively', why: 'A positive screen calls for the full scale, attention to risk amplifiers such as alcohol, and a written plan that includes her supports', keys: ['passive death wish', 'drinking to sleep', 'sister as emergency contact'], mistake: 'Stopping at a screen when risk factors are stacking' }),
    ]),
    Q('q5', 'assess', 'intake', 'What is the best way to address Margo’s nightly drinking at this point?', ['R9'], [
      O('a', 'Screen her drinking with a structured tool and explore how she uses wine to manage sleep and memories.', 3,
        { r: 'Structured screen plus function', approach: 'Measure and understand use', why: 'A validated screen gauges risk, and asking what the wine does for her links use to sleep and intrusions so it can be targeted', keys: ['two to three glasses nightly', '“to knock myself out”'], mistake: 'Skipping structured screening when use has escalated' }),
      O('b', 'Note the increase and revisit drinking once her housing and medication problems are sorted out.', 0,
        { r: 'Right concern, wrong timing', approach: 'Defer framing', why: 'Practical needs matter, but alcohol now interacts with sleep, mood, and risk; screening it cannot wait', keys: ['passive death wish'], mistake: 'Sequencing substance screening behind practical needs' }),
      O('c', 'Tell her to stop drinking at once, since increased use after trauma signals an alcohol addiction.', -1,
        { r: 'Labels before assessing', approach: 'Addiction-label framing', why: 'Escalation is a concern, but calling it addiction without assessment misapplies the framework and can shame her', keys: ['use rose after the flood'], mistake: 'Diagnosing addiction from one change in use' }),
      O('d', 'Suggest she keep using wine to sleep for now, since rest matters most during the acute phase.', -2,
        { r: 'Endorses a harmful coping strategy', approach: 'Permissive framing', why: 'Alcohol fragments sleep, worsens mood, and raises suicide risk; endorsing it is harmful', keys: ['death wish', 'off antidepressant'], mistake: 'Encouraging alcohol as a sleep aid' }),
    ]),

    // ---------------- session1 (3): planning ×2, indirect ×1 ----------------
    Q('q6', 'planning', 'session1', 'Margo feels “frozen” by FEMA forms, has no car, and is still off sertraline. How should initial treatment be sequenced?', ['R4', 'R10'], [
      O('a', 'Begin trauma-focused CBT with imaginal exposure this week, since early treatment helps prevent later PTSD.', 0,
        { r: 'Right treatment, wrong moment', approach: 'Exposure-first framing', why: 'Brief trauma-focused CBT helps acute stress, but starting exposure while she is unhoused and off medication risks overload', keys: ['no stable housing', 'off sertraline'], mistake: 'Starting processing before basic stability' }),
      O('b', 'Stabilize first—safety, sleep, medication, aid—then add brief trauma-focused CBT if symptoms persist.', 3,
        { r: 'Stabilize, then treat', approach: 'Psychological first aid, then CBT', why: 'Early care restores safety, calm, connection, and self-efficacy and addresses practical needs; brief trauma-focused CBT follows if symptoms persist', keys: ['“frozen” by FEMA forms', 'flooded car', 'off sertraline'], mistake: 'Ignoring practical needs that drive distress' }),
      O('c', 'Hold all counseling until she moves back home, since displaced clients cannot engage in treatment.', -1,
        { r: 'Delays care when needed most', approach: 'Wait-for-home framing', why: 'Displacement is when support matters; telehealth lets care continue', keys: ['weekly video sessions agreed'], mistake: 'Treating displacement as a reason to withhold care' }),
      O('d', 'Hold one debriefing session where she retells the rescue in full detail to release the emotion.', -2,
        { r: 'Debriefing can worsen outcomes', approach: 'Debriefing framing', why: 'Single-session psychological debriefing is not recommended and may raise later PTSD risk', keys: ['acute stress symptoms'], mistake: 'Using debriefing as an early intervention' }),
    ]),
    Q('q7', 'planning', 'session1', 'Margo worries about losing sessions “if the power goes out again.” What should the plan include?', ['R7', 'R5'], [
      O('a', 'Plan to reschedule any missed session once power returns and remind her that 988 is there meanwhile.', 0,
        { r: 'Partial plan only', approach: 'Reschedule framing', why: 'A crisis line helps, but there is no backup contact method, covering counselor, or local resource list', keys: ['new tropical system'], mistake: 'Leaving continuity to chance during an active storm season' }),
      O('b', 'Pause counseling until the tropical system passes, since talking about outages may raise her anxiety.', -1,
        { r: 'Avoidance leaves her unsupported', approach: 'Pause framing', why: 'Planning reduces uncertainty; pausing removes support during a feared event', keys: ['worry about outages'], mistake: 'Avoiding continuity planning to spare anxiety' }),
      O('c', 'Agree on a backup phone number, alternate session times, local crisis contacts, and a covering counselor.', 3,
        { r: 'Concrete disruption-of-service plan', approach: 'Plan for interruption', why: 'A disruption plan names how to reconnect, who covers, and where to get local help, protecting continuity', keys: ['office closed two months', 'new tropical system'], mistake: 'Assuming the usual setup will hold through another storm' }),
      O('d', 'Have her text the counselor’s personal cell during any outage, with a promise to answer at any hour.', -2,
        { r: 'Unsustainable and unsecured', approach: 'Personal-access framing', why: 'Round-the-clock personal texting is not secure, cannot be sustained, and blurs boundaries', keys: ['practice systems'], mistake: 'Offering unlimited personal access in place of a plan' }),
    ]),
    Q('q8', 'indirect', 'session1', 'Margo still has zaps and dizziness and asks about taking some of her sister’s pills. The counselor should:', ['R8'], [
      O('a', 'Advise her to take some of her sister’s pills until her refill comes, since some medication is better than none at all.', -2,
        { r: 'Unsafe and outside scope', approach: 'Borrow-medication framing', why: 'Another person’s medication may differ in drug and dose; advising it is outside counselor scope and unsafe', keys: ['sister’s pills'], mistake: 'Giving medication advice outside scope' }),
      O('b', 'Record the symptoms as a depressive relapse and suggest she ask her prescriber for a higher sertraline dose.', -1,
        { r: 'Misreads and oversteps', approach: 'Relapse-label framing', why: 'Her symptoms fit discontinuation after abrupt stopping; interpreting them and suggesting doses is outside scope', keys: ['zaps since stopping'], mistake: 'Interpreting medication effects instead of reporting them' }),
      O('c', 'Document her reported zaps, dizziness, and missed doses, and with consent share them with a prescriber.', 3,
        { r: 'Document and coordinate', approach: 'Record self-report; link to prescriber', why: 'Counselors record clients’ self-reported medication effects and, with consent, help connect them to a prescriber for an urgent refill', keys: ['off sertraline eight days', 'PCP clinic closed'], mistake: 'Ignoring medication problems or advising on them directly' }),
      O('d', 'Note the stopped medication and suggest she call her PCP once that clinic reopens after repairs.', 0,
        { r: 'Too slow given symptoms', approach: 'Wait-for-PCP framing', why: 'Documenting is right, but waiting for a closed clinic leaves her symptomatic; other prescribers are available', keys: ['clinic remains closed'], mistake: 'Not seeking an available covering prescriber' }),
    ]),

    // ---------------- session2 (5): interventions ×3, legal ×2 ----------------
    Q('q9', 'interventions', 'session2', 'A storm alert sounds; Margo breathes rapidly, grips the table, and says, “It’s happening again.” The counselor should:', ['R4'], [
      O('a', 'Suggest she step away from the screen, get a drink of water, and call back once she feels calmer.', 0,
        { r: 'Loses contact at peak distress', approach: 'Self-soothe-alone framing', why: 'Breaks can help, but leaving her alone while activated forgoes guided grounding', keys: ['rapid breathing'], mistake: 'Disconnecting when guided regulation is needed' }),
      O('b', 'Guide her to slow her breathing, name what she sees in the room, and orient to today and her safe place.', 3,
        { r: 'Grounding and orientation', approach: 'Calm and orient', why: 'Paced breathing and present-moment orienting reduce acute arousal and dissociation, a core early-crisis skill', keys: ['“It’s happening again”', 'grips the table'], mistake: 'Processing content before regulating arousal' }),
      O('c', 'Tell her forecasters expect this storm to miss Louisiana, so there is no real danger to fear now.', -1,
        { r: 'False reassurance', approach: 'Reassure framing', why: 'The counselor cannot promise a storm track; reassurance that proves wrong erodes trust', keys: ['active tropical system'], mistake: 'Offering predictions instead of regulation skills' }),
      O('d', 'Ask her to describe the attic in detail now, since facing the memory while activated speeds recovery.', -2,
        { r: 'Retraumatizing without structure', approach: 'Immediate-processing framing', why: 'Unplanned trauma recounting at peak arousal can flood her and worsen dissociation', keys: ['panic in session'], mistake: 'Confusing exposure therapy with recounting during a panic' }),
    ]),
    Q('q10', 'interventions', 'session2', 'Margo asks, “Am I going crazy? I keep spacing out.” The most helpful response is to:', ['R4', 'R1'], [
      O('a', 'Reassure her that she is not going crazy and move back to the session’s plan for the FEMA forms.', 0,
        { r: 'Comfort without information', approach: 'Brief reassurance framing', why: 'Reassurance helps, but she needs to understand the symptom and what to do about it', keys: ['“spacing out”'], mistake: 'Reassuring without educating' }),
      O('b', 'Explain that spacing out shows the trauma is stuck in her body and must be released in intense therapy.', -1,
        { r: 'Unsupported explanation', approach: 'Stored-trauma framing', why: 'This framing is not evidence-based and can heighten fear', keys: ['acute phase'], mistake: 'Offering a dramatic model in place of evidence' }),
      O('c', 'Explain that spacing out is a common acute stress reaction that often eases, and review what helps.', 3,
        { r: 'Normalize with accurate education', approach: 'Psychoeducation', why: 'Accurate information that dissociation is a common acute reaction, with coping steps and signs to report, reduces fear and builds self-efficacy', keys: ['memory gaps', 'day 21'], mistake: 'Leaving a frightened client without explanation' }),
      O('d', 'Tell her the spells may signal an emerging psychotic disorder and that she should seek admission.', -2,
        { r: 'Alarming and inaccurate', approach: 'Pathologize framing', why: 'Dissociation after trauma is not psychosis; this misinformation could frighten and harm her', keys: ['no psychotic symptoms'], mistake: 'Mislabeling dissociation as psychosis' }),
    ]),
    Q('q11', 'interventions', 'session2', 'Margo sobs, “I should have carried him up—what kind of person leaves her dog?” The best response is to:', ['R4'], [
      O('a', 'Point out that she saved her son and herself, so the guilt is irrational and she can let it go.', 0,
        { r: 'Disputes too soon', approach: 'Early-challenge framing', why: 'Her reasoning may shift later, but rushing to dispute skips the grief and can feel dismissive', keys: ['sobbing'], mistake: 'Challenging guilt before reflecting it' }),
      O('b', 'Suggest she adopt a new dog soon, since a new pet often eases the loss of the one who died.', -1,
        { r: 'Replacement skips grief', approach: 'Replace-the-loss framing', why: 'A pet may help someday, but this bypasses her grief and guilt now', keys: ['grief for her dog'], mistake: 'Offering a fix instead of attending to feelings' }),
      O('c', 'Agree that leaving the dog was a failure she should own, since accepting blame is part of healing.', -2,
        { r: 'Reinforces trauma-related guilt', approach: 'Endorse-blame framing', why: 'Endorsing self-blame deepens guilt that maintains acute stress and depression', keys: ['death wish history'], mistake: 'Validating distorted blame' }),
      O('d', 'Reflect her grief and guilt, then gently explore what she could see and choose as the water rose.', 3,
        { r: 'Reflect, then explore context', approach: 'Empathic reflection', why: 'Reflecting her feelings, then exploring what she knew in the moment, honors the loss and loosens hindsight bias', keys: ['“I should have carried him up”'], mistake: 'Skipping empathy to fix the thought' }),
    ]),
    Q('q12', 'legal', 'session2', 'The adjuster found soaked paper intake forms scattered across the flooded office. What should the practice do?', ['R6', 'R7'], [
      O('a', 'Have staff shred the soaked forms right away so that no one can read whatever parts of them survived.', 0,
        { r: 'Destroys before assessing', approach: 'Shred-now framing', why: 'Securing records is right, but shredding before an inventory blocks the breach assessment and may break retention rules', keys: ['records scattered'], mistake: 'Skipping inventory and assessment' }),
      O('b', 'Secure and inventory the forms, assess whether PHI was exposed, and notify clients if the rules require it.', 3,
        { r: 'Secure, assess, notify if required', approach: 'Follow the emergency plan and breach rule', why: 'The plan calls for securing records; HIPAA requires a breach risk assessment for unsecured PHI and notice when it is warranted', keys: ['soaked forms', 'adjuster had access'], mistake: 'Assuming a disaster removes privacy duties' }),
      O('c', 'Treat it as a disaster loss outside HIPAA, since no one at the practice chose to disclose any records.', -1,
        { r: 'Breach rules still apply', approach: 'No-intent framing', why: 'Breaches do not require intent; exposure of unsecured PHI must be assessed', keys: ['scattered forms'], mistake: 'Equating breach with intentional disclosure' }),
      O('d', 'Leave the forms in the office until repairs begin, since data in a flooded building is not at any real risk of exposure.', -2,
        { r: 'Leaves PHI exposed', approach: 'Leave-in-place framing', why: 'Contractors and adjusters have access; leaving records exposed compounds the breach', keys: ['adjuster in office'], mistake: 'Ignoring ongoing exposure of PHI' }),
    ]),
    Q('q13', 'legal', 'session2', 'The partners ask how to update the emergency preparedness plan after this storm. The best revision is to:', ['R7', 'R6'], [
      O('a', 'Keep the plan as written, since it reached clients after landfall and worked well enough this season.', 0,
        { r: 'Misses identified gaps', approach: 'No-change framing', why: 'The phone tree worked, but the storm exposed gaps in records storage and backup telehealth', keys: ['soaked forms', 'consumer app used'], mistake: 'Skipping a post-incident review' }),
      O('b', 'Approve free consumer video apps as the backup, since disaster flexibilities allow any app to be used.', -1,
        { r: 'Misstates current rules', approach: 'Any-app framing', why: 'Pandemic-era enforcement discretion has ended; backup platforms need HIPAA safeguards and a BAA', keys: ['app with no BAA'], mistake: 'Assuming emergency flexibilities are permanent' }),
      O('c', 'Name a vetted backup platform with a BAA, store records off-site or digitally, and refresh contact lists.', 3,
        { r: 'Close the gaps found', approach: 'Review and update after an incident', why: 'Updating the plan to fix what failed—records storage, backup telehealth, contact procedures—is the core of emergency preparedness', keys: ['vendor outage', 'ground-floor records'], mistake: 'Treating the plan as finished once written' }),
      O('d', 'Let each clinician pick their own backup tools, since disaster conditions make written plans unrealistic to follow.', -2,
        { r: 'Abandons a practice-wide plan', approach: 'Ad hoc framing', why: 'Leaving tools to individuals reproduces the noncompliant app use the storm exposed', keys: ['colleague used consumer app'], mistake: 'Replacing planning with improvisation' }),
    ]),
  ],
};

// ============================================================================
// D961 — Homicidal Ideation / Threat Assessment (R45.850) — Crisis — hard — plan 1
// Buried: specific target, schedule, unmonitored location and access to a
// pistol surface inside a "doing way better" reassurance; counselor
// overidentification and limited threat-assessment training interact.
// ============================================================================
const D961 = {
  id: 'ncmhce-D961',
  title: 'A warehouse worker’s grudge against his supervisor turns specific',
  category: 'Crisis',
  difficulty: 'hard',
  plan: 1,
  population: 'adult',
  primaryDiagnosis: { name: 'Homicidal Ideation / Threat Assessment', code: 'R45.850' },
  diagnosis: { name: 'Homicidal Ideation / Threat Assessment', code: 'R45.850' },
  differentialOptions: [
    { id: 'do1', name: 'Intermittent Explosive Disorder', isCorrect: false },
    { id: 'do2', name: 'Alcohol Use Disorder, Mild', isCorrect: false },
    { id: 'do3', name: 'Homicidal Ideation / Threat Assessment', isCorrect: true },
    { id: 'do4', name: 'Antisocial Personality Disorder', isCorrect: false },
  ],
  narrative: {
    intake:
      'Rafael Quiñones, a 34-year-old Puerto Rican forklift operator on second shift at a regional distribution warehouse, is referred by his employer’s ' +
      'employee assistance program (EAP) after he shouted at his supervisor, Gary Lund, and shoved a pallet jack toward him during a dispute over pick ' +
      'rates. He received a final written warning. Rafael says Gary calls him “Speedy,” gives him the worst routes, and that HR “did nothing.” He ' +
      'co-parents his 6-year-old daughter, Mia, with his former partner and has her every other weekend. He sleeps four to five hours, feels “wound up all ' +
      'the time,” and has gone from six beers on weekends to four or five most work nights. He was arrested after a bar fight three years ago (charges ' +
      'dismissed) and says he does not own a gun. Asked about thoughts of harming anyone, he laughs: “Sometimes I think about Gary getting what he ' +
      'deserves—but I’m not stupid.” He denies suicidal thoughts. The EAP release he signed allows the counselor to confirm attendance only. The ' +
      'counselor, who is also Puerto Rican and was called “Speedy” at a warehouse job in college, felt a rush of anger at Gary and caught herself nodding ' +
      'when Rafael said Gary “has it coming.” Her training in violence risk assessment is one graduate lecture.',
    session1:
      'In the second session Rafael is calmer. He says he has “a lot of hate” for Gary but wants to keep his job for Mia. He admits he checks Gary’s ' +
      'Facebook “to see what he’s posting about me.” He wants to “get through a shift without blowing up” and agrees to work on anger, drinking, and ' +
      'sleep. A cousin told him to “hit a punching bag and picture Gary’s face,” and he asks if that would help. He denies intent or a plan to harm Gary ' +
      'and again says he has no weapon. The next morning the EAP case manager leaves a voicemail asking whether Rafael is “safe to put back on the forklift” ' +
      'and requesting a summary of what he has said about Gary.',
    session2:
      'Rafael opens the third session saying he is “doing way better” and has “cut back to a few beers.” Later he mentions that Gary got him suspended ' +
      'without pay on Friday and that his former partner canceled his weekend with Mia after smelling beer on him: “I’ve got nothing left to lose.” ' +
      'Talking about the warehouse, he adds that Gary walks to his truck at 11:15 every night, that the back-lot camera “has been broken since spring,” and ' +
      'that he has been borrowing his cousin’s car—“he keeps his piece in the glovebox, whatever.” He finishes, “Not that I’d do anything.” When the ' +
      'counselor asks more about these details he stands, raises his voice, and says, “So now you think I’m some kind of criminal?” The counselor’s state ' +
      'statute requires a mental health professional to take reasonable protective action—warning the identified person and notifying law enforcement, ' +
      'or initiating hospitalization—when a client communicates a serious threat of physical violence against a reasonably identifiable victim or the ' +
      'professional reasonably believes the client presents such a danger. Her supervisor is reachable by phone. After he sits down and the counselor ' +
      'explains what she must do, Rafael says, “I trusted you, and you’re going to rat me out.”',
  },
  diagnosticRationale:
    'The focus of clinical attention is homicidal ideation toward an identifiable person, coded R45.850. Across sessions the picture escalates from vague ' +
    'grievance (“getting what he deserves”) to fixation (monitoring the supervisor’s social media), then to a specific target, known schedule, ' +
    'unmonitored location, access to a firearm, and loss of protective factors (job suspension, lost time with his daughter) voiced as “nothing left to ' +
    'lose.” Prior violence, escalating alcohol use, and sleep loss add risk. Intermittent explosive disorder, alcohol use disorder, and antisocial ' +
    'personality disorder are differentials to assess over time, but none explains the immediate clinical task, which is threat assessment and ' +
    'protective action.',
  references: [
    { id: 'R1', source: 'DSM-5-TR', detail: 'Other conditions that may be a focus of clinical attention; differentials of intermittent explosive disorder, alcohol use disorder, antisocial personality disorder' },
    { id: 'R2', source: 'State law', detail: 'Duty-to-warn/protect statute as stated in the case: serious threat or reasonable belief of danger to an identifiable victim; warning plus law enforcement notice, or hospitalization' },
    { id: 'R3', source: 'ACA Code of Ethics', detail: 'Confidentiality exceptions for serious and foreseeable harm; informing clients of limits of confidentiality; consultation; boundaries of competence' },
    { id: 'R4', source: 'Hays (Assessment)', detail: 'Violence risk assessment: ideation, intent, plan, target, means, history of violence, substance use, protective factors' },
    { id: 'R5', source: 'Wiger (Documentation)', detail: 'Documenting risk assessment, consultation, protective actions and rationale contemporaneously' },
    { id: 'R6', source: 'HIPAA', detail: 'Minimum necessary standard; disclosures to employers/EAPs only as authorized in a valid release' },
    { id: 'R7', source: 'Corey (Theory & Practice)', detail: 'Cognitive-behavioral anger management; countertransference and self-awareness; repairing ruptures in the alliance' },
    { id: 'R8', source: 'Miller & Rollnick (MI)', detail: 'Assessing and discussing alcohol use without confrontation' },
  ],
  questions: [
    // ---------------- intake (5): assess ×3, profdev ×2 ----------------
    Q('q1', 'assess', 'intake', 'Rafael laughs, “Sometimes I think about Gary getting what he deserves—but I’m not stupid.” The counselor should next:', ['R4'], [
      O('a', 'Accept that he is not stupid and move on, since a joking tone shows the thought is not a serious one for him.', -2,
        { r: 'Drops a violence screen', approach: 'Accept-the-joke framing', why: 'Humor can mask intent; with a recent physical confrontation and prior violence, the statement must be explored', keys: ['shoved a pallet jack', 'bar fight arrest'], mistake: 'Letting a reassuring tone end risk inquiry' }),
      O('b', 'Give him an anger questionnaire first, and ask about harm only if his score turns out elevated.', 0,
        { r: 'Indirect and delayed', approach: 'Questionnaire-gate framing', why: 'Measures help, but a direct statement about a named person calls for direct questions now', keys: ['names Gary'], mistake: 'Letting a score decide whether to ask about violence' }),
      O('c', 'Ask directly about the frequency, intent, and any plan to harm Gary, plus weapons access and past violence.', 3,
        { r: 'Direct violence risk inquiry', approach: 'Structured threat assessment', why: 'Violence risk assessment covers ideation, intent, plan, target, means, history, substances, and protective factors', keys: ['named target', 'prior violence', 'rising alcohol use'], mistake: 'Skipping the elements of a violence risk assessment' }),
      O('d', 'Tell him any threat must be reported to his employer, then ask whether he has plans to hurt Gary.', -1,
        { r: 'Misstates the limits', approach: 'Report-to-employer framing', why: 'Confidentiality limits involve protecting a victim under law, not routine employer reports; misstating them chills disclosure', keys: ['EAP release covers attendance'], mistake: 'Misrepresenting confidentiality limits' }),
    ]),
    Q('q2', 'assess', 'intake', 'How should the counselor address Rafael’s drinking during the intake?', ['R8', 'R4'], [
      O('a', 'Note the increase and plan to address it after the anger work, since anger is the referral reason.', 0,
        { r: 'Underweights a risk amplifier', approach: 'Referral-first framing', why: 'Anger is the referral issue, but alcohol lowers restraint and is part of violence risk now', keys: ['four to five beers on work nights'], mistake: 'Treating substance use as separate from risk' }),
      O('b', 'Assess his drinking pattern in detail with a structured screen, since rising use can lower his restraint.', 3,
        { r: 'Screen alcohol as a risk factor', approach: 'Assess use within risk picture', why: 'Escalating alcohol use is a dynamic violence risk factor; a structured, nonjudgmental screen informs risk and treatment', keys: ['weekend to nightly use', 'poor sleep'], mistake: 'Leaving alcohol out of the risk formulation' }),
      O('c', 'Refer him to inpatient detox right away, since daily beer at this level means he is severely dependent.', -1,
        { r: 'Premature level-of-care call', approach: 'Detox-first framing', why: 'Nothing yet shows withdrawal risk or severe dependence; assessment comes first', keys: ['no withdrawal reported'], mistake: 'Jumping to detox without assessment' }),
      O('d', 'Leave drinking alone unless he raises it, since probing at intake could damage the new alliance.', -2,
        { r: 'Ignores a key risk factor', approach: 'Avoidance framing', why: 'Skipping alcohol in a violence-risk intake omits a factor that changes the risk picture', keys: ['nightly drinking'], mistake: 'Avoiding substance questions to protect rapport' }),
    ]),
    Q('q3', 'assess', 'intake', 'What should the counselor tell Rafael about confidentiality, given the EAP referral?', ['R3', 'R6'], [
      O('a', 'Explain confidentiality in general terms and save the specific limits for when harm comes up later.', 0,
        { r: 'Limits explained too late', approach: 'Generalities-first framing', why: 'Clients should know the limits before disclosing; waiting can feel like a bait-and-switch', keys: ['EAP referral'], mistake: 'Delaying the limits of confidentiality' }),
      O('b', 'Promise nothing he says will reach anyone at work, since his EAP release covers attendance only.', -1,
        { r: 'Overpromises', approach: 'Absolute-privacy framing', why: 'Protecting an identifiable coworker could require contact outside counseling; the promise may have to be broken', keys: ['coworker as possible target'], mistake: 'Promising more confidentiality than the law allows' }),
      O('c', 'Tell him the EAP will receive his full session notes, since his employer is the one paying for the counseling.', -2,
        { r: 'Misstates the release', approach: 'Payer-access framing', why: 'The release authorizes attendance only; telling him otherwise is false and harms trust', keys: ['attendance-only release'], mistake: 'Assuming the payer is entitled to records' }),
      O('d', 'Explain that the EAP learns attendance only, and that confidentiality has limits, such as a serious threat.', 3,
        { r: 'Accurate, upfront limits', approach: 'Review policies at intake', why: 'Clients are told at the outset what is shared and the legal limits, including danger to others', keys: ['attendance-only release', 'statement about Gary'], mistake: 'Omitting the limits in a referral from an employer' }),
    ]),
    Q('q4', 'profdev', 'intake', 'The counselor felt anger at Gary and caught herself nodding when Rafael said Gary “has it coming.” She should:', ['R7', 'R3'], [
      O('a', 'Keep the reaction private and work at staying neutral, since naming it might make it stronger.', 0,
        { r: 'Self-management without reflection', approach: 'Suppress framing', why: 'Trying to stay neutral is reasonable, but unexamined overidentification can still bias risk judgment', keys: ['nodding along'], mistake: 'Suppressing countertransference rather than examining it' }),
      O('b', 'Transfer him to a colleague at once, since any shared background makes objectivity impossible.', -1,
        { r: 'Overcorrects', approach: 'Transfer framing', why: 'Shared background is not automatically a conflict; an abrupt transfer of a risky client disrupts care', keys: ['new alliance'], mistake: 'Treating shared identity as disqualifying' }),
      O('c', 'Reflect on her overidentification and take it to supervision so it does not soften her risk judgment.', 3,
        { r: 'Reflect and supervise', approach: 'Self-reflection', why: 'Recognizing and processing overidentification in supervision protects objective risk assessment and keeps her empathy useful', keys: ['also called “Speedy”', 'anger at Gary'], mistake: 'Letting personal history color risk judgment' }),
      O('d', 'Share her own “Speedy” story and agree that Gary’s conduct fully justifies Rafael’s anger toward him.', -2,
        { r: 'Colludes with the grievance', approach: 'Disclose-and-agree framing', why: 'Agreeing that the target deserves anger reinforces the grievance driving risk', keys: ['“has it coming”'], mistake: 'Using self-disclosure to collude with a client’s hostility' }),
    ]),
    Q('q5', 'profdev', 'intake', 'Her violence-risk training is one graduate lecture. What is the most appropriate step?', ['R3', 'R4'], [
      O('a', 'Consult a colleague skilled in violence risk assessment and review a structured method before next session.', 3,
        { r: 'Consult and build skill now', approach: 'Seek consultation', why: 'When a case exceeds current skill, timely consultation and a structured approach keep care competent and safe', keys: ['one graduate lecture', 'statement about Gary'], mistake: 'Working alone past the edge of competence' }),
      O('b', 'Take a general continuing-education course on anger later this year and rely on judgment for now.', 0,
        { r: 'Too slow, too general', approach: 'Delayed-CE framing', why: 'Training helps, but it does not help this client this month', keys: ['active risk'], mistake: 'Deferring competence-building past when it is needed' }),
      O('c', 'Refer him to a forensic psychologist and end her role, since threat cases fall outside of a counselor’s scope.', -1,
        { r: 'Misreads scope', approach: 'Refer-out framing', why: 'Risk assessment is within counselor scope; consultation, not abandonment, closes the gap', keys: ['EAP referral'], mistake: 'Equating a skill gap with being out of scope' }),
      O('d', 'Skip formal threat assessment, since he denies a gun and the charges from the bar fight were dropped.', -2,
        { r: 'Discounts real risk factors', approach: 'Minimize framing', why: 'Dismissed charges do not erase violent behavior, and the risk picture includes a recent confrontation', keys: ['pallet jack incident'], mistake: 'Treating legal outcome as proof of low risk' }),
    ]),

    // ---------------- session1 (3): indirect ×1, planning ×2 ----------------
    Q('q6', 'indirect', 'session1', 'The EAP case manager asks if Rafael is “safe to put back on the forklift” and wants a summary of his statements. The counselor should:', ['R6', 'R3'], [
      O('a', 'Not return the call, since any contact with the EAP could suggest his counseling is not private.', 0,
        { r: 'Unhelpful silence', approach: 'Ignore framing', why: 'The release allows confirming attendance; a brief, limited reply keeps the referral working', keys: ['attendance-only release'], mistake: 'Avoiding authorized contact' }),
      O('b', 'Give the case manager a general sense that he is doing better, since that may help him hold on to his job.', -1,
        { r: 'Discloses beyond the release', approach: 'Helpful-hint framing', why: 'Even a general clinical impression exceeds an attendance-only release', keys: ['attendance-only release'], mistake: 'Sharing clinical impressions without authorization' }),
      O('c', 'Confirm attendance only, as the release allows, and explain that anything more needs his written consent.', 3,
        { r: 'Share only what is authorized', approach: 'Minimum necessary', why: 'Disclosure follows the release; fitness-for-duty opinions and content require separate consent', keys: ['release covers attendance', 'request for statements'], mistake: 'Treating an employer request as authorization' }),
      O('d', 'Send a summary of his statements about Gary, since workplace safety outweighs his privacy here.', -2,
        { r: 'Unauthorized disclosure', approach: 'Safety-trumps framing', why: 'At this point there is no specific threat; sharing content with the employer breaches confidentiality', keys: ['denies intent or plan'], mistake: 'Invoking safety to justify routine disclosure' }),
    ]),
    Q('q7', 'planning', 'session1', 'Which goal best fits Rafael’s wish to “get through a shift without blowing up”?', ['R7'], [
      O('a', 'Rafael will reduce his anger toward Gary and get along better with his supervisors over the next months.', 0,
        { r: 'Not measurable', approach: 'Vague-goal framing', why: 'The direction is right but there is no measure, method, or timeframe', keys: ['wants to keep his job'], mistake: 'Writing goals that cannot be tracked' }),
      O('b', 'Over 8 weeks, Rafael will use a timeout and paced breathing in 4 of 5 shift conflicts, logged daily.', 3,
        { r: 'SMART and his own goal', approach: 'Specific, measurable, timed', why: 'The goal states a skill, a measure, and a timeframe tied to his own words', keys: ['“without blowing up”'], mistake: 'Omitting measures from goals' }),
      O('c', 'Rafael will stop feeling angry at work by the end of treatment and will apologize to Gary in person.', -1,
        { r: 'Unrealistic and imposed', approach: 'Eliminate-anger framing', why: 'Anger is not eliminated, and requiring an apology to Gary imposes a counselor goal and could raise conflict', keys: ['“a lot of hate”'], mistake: 'Setting unattainable, imposed goals' }),
      O('d', 'Rafael will stay away from any talk of Gary in sessions so that his anger is not stirred up again.', -2,
        { r: 'Blocks risk monitoring', approach: 'Avoid-the-topic framing', why: 'Avoiding the target removes the counselor’s view of escalating risk', keys: ['checks Gary’s Facebook'], mistake: 'Avoiding the very content that signals risk' }),
    ]),
    Q('q8', 'planning', 'session1', 'Rafael asks if hitting a punching bag while picturing Gary’s face would help. The counselor should:', ['R7'], [
      O('a', 'Allow the punching bag as homework if he pairs it with breathing, since physical release eases tension.', 0,
        { r: 'Mixes a calming and an arousing tool', approach: 'Partial-venting framing', why: 'Exercise can help, but target-focused hitting rehearses aggression even with breathing added', keys: ['“picture Gary’s face”'], mistake: 'Assuming physical venting reduces anger' }),
      O('b', 'Use empty-chair work where he confronts Gary aloud, since expressing rage in session is cathartic.', -1,
        { r: 'Catharsis model in a risk case', approach: 'Expressive framing', why: 'Rehearsing rage at a specific target can increase arousal and fixation', keys: ['fixation on Gary'], mistake: 'Applying catharsis to a client at risk of violence' }),
      O('c', 'Steer away from venting exercises like this one, which can rehearse aggression, and use CBT anger skills.', 3,
        { r: 'Avoid a contraindicated method', approach: 'Assess contraindications', why: 'Venting aimed at a target tends to increase aggression; cognitive-behavioral anger skills are supported', keys: ['cousin’s suggestion', 'named target'], mistake: 'Endorsing catharsis without weighing harm' }),
      O('d', 'Encourage the punching bag while picturing Gary, since rehearsing anger safely drains the urge to act.', -2,
        { r: 'Rehearses violence toward a target', approach: 'Endorse-venting framing', why: 'Visualizing harm to a specific person while hitting reinforces the aggressive script', keys: ['“a lot of hate”'], mistake: 'Believing rehearsal drains violent urges' }),
    ]),

    // ---------------- session2 (5): legal, interventions ×2, legal, interventions ----------------
    Q('q9', 'legal', 'session2', 'After Rafael describes Gary’s 11:15 walk, the broken camera, and the pistol in the glovebox, the counselor should:', ['R2', 'R3'], [
      O('a', 'Call his employer’s HR department to report the risk, since the threat involves a workplace supervisor.', 0,
        { r: 'Acts, but not as the statute directs', approach: 'Employer-report framing', why: 'Some protective action is needed, but the statute names warning the person and notifying police, or hospitalization', keys: ['statute’s listed actions'], mistake: 'Choosing a disclosure route the law does not specify' }),
      O('b', 'Wait until the next supervision meeting before acting, since he said he would not do anything.', -1,
        { r: 'Delays protective action', approach: 'Defer framing', why: 'A specific target, schedule, place, and weapon access call for same-day action; his disclaimer does not lower the risk', keys: ['“nothing left to lose”', 'pistol access'], mistake: 'Letting a disclaimer override specific risk facts' }),
      O('c', 'Finish a focused assessment now, consult her supervisor today, and take the steps the statute lists.', 3,
        { r: 'Assess, consult, protect', approach: 'Duty to protect', why: 'Target, plan details, means, and lost protective factors meet the statute’s standard; she completes the assessment, consults promptly, and acts', keys: ['11:15 walk, broken camera', 'pistol in glovebox', 'suspended, lost visit'], mistake: 'Missing buried plan details inside a reassurance' }),
      O('d', 'Keep the disclosure confidential, since he made no direct threat and confidentiality protects the alliance.', -2,
        { r: 'Fails the duty to protect', approach: 'Literal-threat framing', why: 'The statute also covers reasonable belief of danger; specific plan details and access trigger the duty', keys: ['statute covers reasonable belief'], mistake: 'Requiring an explicit threat before acting' }),
    ]),
    Q('q10', 'interventions', 'session2', 'Rafael stands, raises his voice, and says, “So now you think I’m some kind of criminal?” The counselor should:', ['R7'], [
      O('a', 'Say firmly that raising his voice is not acceptable and that the session will end if he does it again.', 0,
        { r: 'Limit-setting before calming', approach: 'Firm-limit framing', why: 'Limits have a place, but leading with an ultimatum can escalate an agitated client', keys: ['standing, raised voice'], mistake: 'Confronting before de-escalating' }),
      O('b', 'Stay calm and seated, lower her voice, name his anger, and invite him to sit back down when ready.', 3,
        { r: 'De-escalate', approach: 'Crisis de-escalation', why: 'A calm, nonthreatening stance, validation, and offered choices reduce arousal so the risk discussion can continue', keys: ['“some kind of criminal?”'], mistake: 'Matching the client’s intensity' }),
      O('c', 'Apologize and drop the questions about Gary, then return to the topic at a later, calmer session.', -1,
        { r: 'Abandons the risk assessment', approach: 'Back-off framing', why: 'Calming him matters, but dropping the assessment leaves an active risk unaddressed', keys: ['pistol access'], mistake: 'Trading safety for short-term calm' }),
      O('d', 'Stand and move toward him to show she is not intimidated, and insist he answer her questions now.', -2,
        { r: 'Escalates and is unsafe', approach: 'Show-strength framing', why: 'Approaching an agitated client is threatening and raises the chance of violence', keys: ['history of violence'], mistake: 'Using physical posture to assert control' }),
    ]),
    Q('q11', 'interventions', 'session2', 'What is the best way to address the pistol in his cousin’s glovebox?', ['R4'], [
      O('a', 'Suggest he lock the pistol in the trunk of the car for as long as he keeps borrowing it from his cousin.', 0,
        { r: 'Partial means restriction', approach: 'Store-it framing', why: 'Locking it away is better than nothing, but he still has the key; removal is safer', keys: ['borrowing the car'], mistake: 'Settling for partial restriction' }),
      O('b', 'Ask him to return the car or have his cousin remove the pistol today, and confirm it before he leaves.', 3,
        { r: 'Remove access, verify', approach: 'Lethal means counseling', why: 'Removing a firearm from a person at risk of violence is a core protective step, and verification makes it real', keys: ['“keeps his piece in the glovebox”'], mistake: 'Leaving firearm access in place' }),
      O('c', 'Revisit weapon access at the next session, once he is calmer and less defensive about the topic.', -1,
        { r: 'Delays a safety step', approach: 'Defer framing', why: 'Access is present now and risk is elevated; waiting leaves the means available', keys: ['11:15 nightly'], mistake: 'Putting rapport ahead of means safety' }),
      O('d', 'Have him sign an agreement not to touch the pistol and rely on that agreement in place of other steps.', -2,
        { r: 'Contract instead of action', approach: 'No-harm agreement framing', why: 'A signed promise has no protective value and can create false reassurance', keys: ['firearm access'], mistake: 'Substituting a contract for means removal' }),
    ]),
    Q('q12', 'legal', 'session2', 'After taking protective action, how should the counselor document and follow up?', ['R5', 'R3'], [
      O('a', 'Write a brief note that a risk issue was handled, leaving details out in case records are subpoenaed.', 0,
        { r: 'Too thin to show reasoning', approach: 'Minimal-note framing', why: 'A vague note cannot show the assessment, consultation, and rationale that justify the actions', keys: ['duty-to-protect action'], mistake: 'Under-documenting to limit exposure' }),
      O('b', 'Document the warning and police notice but leave out the consultation, which is not part of the record.', -1,
        { r: 'Omits consultation', approach: 'Partial-record framing', why: 'Consultation is part of sound risk management and belongs in the record', keys: ['supervisor consulted'], mistake: 'Excluding consultation from documentation' }),
      O('c', 'Record his exact words, risk factors, consultation, actions, and rationale, and notify her liability carrier.', 3,
        { r: 'Full, timely documentation', approach: 'Document and seek risk guidance', why: 'Contemporaneous notes of statements, factors, consultation, actions, and reasoning show the standard of care; her liability carrier can advise', keys: ['verbatim statements', 'statutory steps'], mistake: 'Leaving out the reasoning behind actions' }),
      O('d', 'Hold off on any note until things settle down, then write one summary that reflects how the events turned out.', -2,
        { r: 'Late, outcome-shaped record', approach: 'Write-later framing', why: 'Delayed notes shaped by outcomes are unreliable and can look like record tampering', keys: ['same-day actions'], mistake: 'Writing records after the fact to fit the outcome' }),
    ]),
    Q('q13', 'interventions', 'session2', 'Rafael says, “I trusted you, and you’re going to rat me out.” The best response is to:', ['R7'], [
      O('a', 'Reassure him that the law forced her hand, and then move on to planning around his suspension.', 0,
        { r: 'Explains but skips the rupture', approach: 'Explain-and-move-on framing', why: 'Explaining the law helps, but moving on leaves his sense of betrayal unaddressed', keys: ['“I trusted you”'], mistake: 'Explaining without repairing' }),
      O('b', 'Tell him that if he cannot trust her now, it may be better to transfer him to a different counselor.', -1,
        { r: 'Withdraws during a rupture', approach: 'Transfer framing', why: 'Offering transfer at the moment of rupture can feel like rejection and break continuity during high risk', keys: ['loss of job and visit'], mistake: 'Treating a rupture as the end of the relationship' }),
      O('c', 'Promise she will not contact anyone else about what he says from now on, so he can feel safe again.', -2,
        { r: 'A promise she cannot keep', approach: 'Restore-trust-by-promise framing', why: 'She cannot promise to ignore future danger; the promise misleads and invites a second rupture', keys: ['ongoing risk'], mistake: 'Promising confidentiality that the law does not allow' }),
      O('d', 'Acknowledge his sense of betrayal, explain what she did and why, and invite his reaction to it.', 3,
        { r: 'Repair the rupture', approach: 'Name and repair', why: 'Acknowledging the rupture nondefensively, being transparent, and inviting his feedback can preserve the alliance', keys: ['“you’re going to rat me out”'], mistake: 'Defending rather than repairing' }),
    ]),
  ],
};

// ============================================================================
// D962 — Suicidal Behavior / Acute Risk (R45.851) — Crisis — medium — plan 2
// Complications (medium): telehealth client travels out of state without
// notice (licensure/Compact, local emergency resources), and an anniversary
// reaction with a retained medication stockpile.
// ============================================================================
const D962 = {
  id: 'ncmhce-D962',
  title: 'A widowed retired teacher logs on to her video session from another state',
  category: 'Crisis',
  difficulty: 'medium',
  plan: 2,
  population: 'older_adult',
  primaryDiagnosis: { name: 'Suicidal Behavior / Acute Risk', code: 'R45.851' },
  diagnosis: { name: 'Suicidal Behavior / Acute Risk', code: 'R45.851' },
  differentialOptions: [
    { id: 'do1', name: 'Suicidal Behavior / Acute Risk', isCorrect: true },
    { id: 'do2', name: 'Prolonged Grief Disorder', isCorrect: false },
    { id: 'do3', name: 'Major Neurocognitive Disorder', isCorrect: false },
    { id: 'do4', name: 'Adjustment Disorder, with Depressed Mood', isCorrect: false },
  ],
  narrative: {
    intake:
      'Evelyn Marchetti, a 71-year-old Italian American retired middle-school band teacher in Columbus, Ohio, is referred by her primary care physician ' +
      '(PCP) after a PHQ-9 score of 16 with thoughts of being better off dead on “several days.” Before the first video session the counselor reviews ' +
      'telehealth consent with her. Her husband of 46 years, Sal, died of pancreatic cancer eight months ago after she nursed him at home. She lives ' +
      'alone; her daughter, Gina, lives in Tucson, Arizona, and her son in Germany. She sleeps poorly, has lost eight pounds, no longer plays the piano, ' +
      'and says, “I should have pushed for that scan sooner.” She has missed two bills and an appointment and wonders if she is “getting senile.” She ' +
      'wears hearing aids and asks for captions. She is a practicing Catholic. On a structured screen she endorses wishing she “wouldn’t wake up” most ' +
      'nights for three weeks, denies a method, intent, or plan, and has never attempted. Sal’s .38 revolver is still in her bedroom closet and his ' +
      'leftover oxycodone is in a kitchen cabinet. She drinks one glass of wine at dinner. The counselor, who is 29 and has worked mostly with college ' +
      'students, catches herself thinking that “at her age, thinking about death is natural.” She has had no training in cognitive screening tools. She ' +
      'is licensed only in Ohio and holds no privilege to practice in any other state.',
    session1:
      'By the third session Evelyn’s brother, Paul, has taken Sal’s revolver to his home; Evelyn said she would take the oxycodone to the pharmacy ' +
      'take-back box. Her PCP started sertraline 25 mg two weeks ago; she says she has felt “jittery” and queasy and is “not sure it does anything.” She ' +
      'signs releases for her PCP and for Gina to be included in safety planning. Her safety plan lists Paul, Gina, her parish priest, 988, and Columbus ' +
      'crisis numbers. She mentions she will fly to Tucson in five weeks for her granddaughter’s graduation and stay through what would have been Sal’s ' +
      '75th birthday.',
    session2:
      'Two weeks later Evelyn logs on for her regular session. When the counselor confirms her location, she says she is in Gina’s guest room in ' +
      'Tucson—she flew out early and did not mention it. Tearful, she says Sal’s birthday is tomorrow and that she brought his oxycodone “in case my ' +
      'back acts up”; she never took it to the take-back box. She says, “I’ve thought about taking them all tomorrow and just going to sleep next to his ' +
      'picture,” then adds, “But suicide is a mortal sin—I couldn’t.” Gina is home. Partway through safety planning the video freezes and the call ' +
      'drops. Evelyn plans to stay in Tucson three more weeks. The counselor has not checked whether Arizona participates in the Counseling Compact and ' +
      'has no authorization to practice there.',
  },
  diagnosticRationale:
    'The focus of clinical attention is suicidal ideation with acute risk, coded R45.851. Risk escalates from passive death wishes at intake to ' +
    'ideation with a specific method (Sal’s oxycodone), a time (his birthday tomorrow), and access, in a widowed older adult with depressive symptoms, ' +
    'guilt, weight loss, and an anniversary reaction. Her depressive episode is assessed and coded alongside, with prolonged grief disorder ruled out ' +
    'for now (fewer than 12 months since the death). Missed bills raise a neurocognitive question that warrants PCP screening, but depression can ' +
    'impair concentration, and nothing yet supports a major neurocognitive disorder.',
  references: [
    { id: 'R1', source: 'C-SSRS', detail: 'Full ideation (method, intent, plan) and behavior items; screen at every contact when risk is active' },
    { id: 'R2', source: 'Stanley-Brown SPI', detail: 'Safety plan with warning signs, contacts, local crisis resources and means safety, revised when setting changes' },
    { id: 'R3', source: 'Counseling Compact', detail: 'Practice occurs where the client is located; a privilege to practice must be obtained in each remote member state before providing services there' },
    { id: 'R4', source: 'ACA Code of Ethics', detail: 'Distance counseling: informed consent, verifying client location, emergency procedures, laws of both jurisdictions; competence; nondiscrimination including age' },
    { id: 'R5', source: 'DSM-5-TR', detail: 'Other conditions that may be a focus of clinical attention; prolonged grief disorder requires at least 12 months since the death in adults' },
    { id: 'R6', source: 'Wiger (Documentation)', detail: 'Recording client-reported medication effects and coordination with prescribers' },
    { id: 'R7', source: 'Hays (Assessment)', detail: 'Competence to select and administer instruments; cognitive screening and referral' },
    { id: 'R8', source: 'NBCC Code of Ethics', detail: 'Technology-assisted services: emergency plans, location verification, and jurisdictional practice requirements' },
  ],
  questions: [
    // ---------------- intake (5): assess, profdev, assess, profdev, assess ----------------
    Q('q1', 'assess', 'intake', 'Before Evelyn’s first video session, what must telehealth informed consent cover?', ['R4', 'R8'], [
      O('a', 'The platform’s privacy features and the fee policy, with emergency steps left until a crisis actually comes up.', -1,
        { r: 'Leaves out emergency planning', approach: 'Tech-and-fees framing', why: 'Privacy and fees matter, but emergency procedures must be agreed before they are needed', keys: ['positive PHQ-9 item 9'], mistake: 'Treating emergency steps as optional consent content' }),
      O('b', 'Confirming her location each session, an emergency contact, local crisis resources, and a dropped-call plan.', 3,
        { r: 'Location, contacts, emergencies', approach: 'Telehealth-specific consent', why: 'Telehealth consent covers verifying location, emergency contacts and local resources, what happens if the connection fails, and accommodations such as captions', keys: ['video sessions', 'lives alone', 'asks for captions'], mistake: 'Using in-person consent for telehealth' }),
      O('c', 'A general consent for counseling, since telehealth uses the same consent as office sessions do.', -2,
        { r: 'Misses telehealth-specific risks', approach: 'Same-as-office framing', why: 'Telehealth adds location, connectivity, and emergency issues that office consent does not address', keys: ['remote sessions'], mistake: 'Assuming office consent covers telehealth' }),
      O('d', 'Her agreement to keep the camera on and to hold each session in a private, quiet room in her own home.', 0,
        { r: 'Useful but incomplete', approach: 'Session-etiquette framing', why: 'Privacy expectations help, but location checks and emergency planning are the core', keys: ['death wishes'], mistake: 'Focusing on logistics over safety' }),
    ]),
    Q('q2', 'profdev', 'intake', 'The counselor thinks, “At her age, thinking about death is natural.” What should she do with this reaction?', ['R4'], [
      O('a', 'Set the thought aside and rely on the PHQ-9, since a standardized measure removes personal bias.', 0,
        { r: 'Measures do not remove bias', approach: 'Instrument-as-shield framing', why: 'Scores still need interpretation; unexamined bias can shape how she reads them', keys: ['“at her age”'], mistake: 'Assuming tools neutralize clinician bias' }),
      O('b', 'Refer Evelyn to a geriatric specialist, since a 29-year-old counselor cannot understand an older widow.', -1,
        { r: 'Unnecessary referral', approach: 'Age-match framing', why: 'Age difference is not incompetence; reflection and consultation can address it', keys: ['no stated preference'], mistake: 'Assuming only age peers can help' }),
      O('c', 'Treat her death wishes as part of normal aging and grief, and focus the work on loneliness instead.', -2,
        { r: 'Ageism that misses risk', approach: 'Normalize framing', why: 'Older adults have high suicide rates; normalizing death wishes misses risk', keys: ['death wishes most nights'], mistake: 'Normalizing suicidal ideation in older adults' }),
      O('d', 'Recognize it as an age bias, reflect on it, and seek consultation or training on suicide in older adults.', 3,
        { r: 'Name bias, seek learning', approach: 'Self-reflection', why: 'Recognizing ageist assumptions and building knowledge of late-life suicide risk protects her assessment', keys: ['mostly college-age clients'], mistake: 'Letting bias go unexamined' }),
    ]),
    Q('q3', 'assess', 'intake', 'Evelyn wishes she “wouldn’t wake up” most nights. What should the counselor do next?', ['R1', 'R2'], [
      O('a', 'Use the PHQ-9 item as her risk measure and repeat it each session to track any change.', 0,
        { r: 'A screen is not an assessment', approach: 'Single-item framing', why: 'Repeating one item tracks change but misses method, intent, plan, and access', keys: ['revolver and oxycodone at home'], mistake: 'Using a screening item as the full assessment' }),
      O('b', 'Hold off on asking about the revolver for now, since Sal’s belongings may deepen her grief.', -1,
        { r: 'Skips access questions', approach: 'Protect-from-grief framing', why: 'Firearm access is a top risk factor; it must be addressed regardless of grief', keys: ['.38 revolver in closet'], mistake: 'Avoiding means questions to spare feelings' }),
      O('c', 'Complete the full C-SSRS, ask about access to the revolver and oxycodone, and review warning signs.', 3,
        { r: 'Full assessment including means', approach: 'Structured risk assessment', why: 'A positive screen calls for the full scale, explicit questions about firearms and medications at home, and warning signs', keys: ['revolver', 'oxycodone', 'lives alone'], mistake: 'Leaving lethal means unasked' }),
      O('d', 'Ask her to promise she will not harm herself and to call the counselor if the thoughts get stronger.', -2,
        { r: 'No-suicide contract', approach: 'Promise framing', why: 'Contracts are not protective and can halt inquiry', keys: ['positive screen'], mistake: 'Using a promise in place of assessment' }),
    ]),
    Q('q4', 'profdev', 'intake', 'Evelyn’s missed bills raise a memory question, and the counselor is untrained in cognitive screening. She should:', ['R7'], [
      O('a', 'Give a brief cognitive screen anyway, since such tools are simple and the results only guide referral.', -1,
        { r: 'Uses a tool outside competence', approach: 'Simple-tool framing', why: 'Even brief instruments need training to administer and interpret', keys: ['no training in cognitive tools'], mistake: 'Equating short with requiring no training' }),
      O('b', 'Hold off on a screen she cannot give competently and ask her PCP to assess cognition while she trains.', 3,
        { r: 'Stay in competence; coordinate', approach: 'Know your assessment limits', why: 'Counselors use instruments they are trained in; the PCP can screen cognition now, and training builds her skill', keys: ['missed bills', 'PCP referral'], mistake: 'Administering instruments beyond training' }),
      O('c', 'Assume her memory slips reflect depression and skip any cognitive screening until her mood lifts.', 0,
        { r: 'Plausible but unverified', approach: 'Depression-explains-all framing', why: 'Depression can impair memory, but a medical cause should still be checked', keys: ['age 71'], mistake: 'Not ruling out medical contributors' }),
      O('d', 'Tell her the forgetfulness likely signals early dementia, so she can begin planning for that future.', -2,
        { r: 'Unfounded, harmful message', approach: 'Premature-label framing', why: 'Suggesting dementia without assessment could deepen hopelessness in a client at risk', keys: ['death wishes'], mistake: 'Offering a diagnostic opinion without evidence' }),
    ]),
    Q('q5', 'assess', 'intake', 'Evelyn has death wishes without method, intent, or plan, but has a revolver and oxycodone at home. What level of care fits?', ['R1', 'R2'], [
      O('a', 'Refer her to an intensive outpatient program, since an older widow with death wishes needs daily support there.', 0,
        { r: 'More intensive than needed', approach: 'Step-up framing', why: 'More restrictive than the findings require, but safer than missing the means issue', keys: ['no plan or intent'], mistake: 'Choosing intensity without matching findings' }),
      O('b', 'Monthly check-ins, since she has no plan, no past attempts, and strong religious beliefs to protect her.', -2,
        { r: 'Undertreats risk', approach: 'Low-intensity framing', why: 'Ideation most nights with firearm access needs closer contact and means safety', keys: ['revolver in closet'], mistake: 'Treating absence of plan as low risk' }),
      O('c', 'Biweekly outpatient sessions, raising the revolver and pills once she trusts the counselor more.', -1,
        { r: 'Delays means safety', approach: 'Rapport-first framing', why: 'Means safety cannot wait for rapport', keys: ['firearm access'], mistake: 'Deferring lethal means counseling' }),
      O('d', 'Weekly outpatient telehealth with a written safety plan, removal of the revolver and pills, and PCP contact.', 3,
        { r: 'Outpatient with means safety', approach: 'Match care to risk', why: 'Passive ideation without plan or intent fits outpatient care with a safety plan, means removal, and coordination', keys: ['no plan', 'firearm and opioids at home'], mistake: 'Missing means safety in outpatient planning' }),
    ]),

    // ---------------- session1 (3): indirect ×2, planning ----------------
    Q('q6', 'indirect', 'session1', 'Evelyn says sertraline makes her “jittery” and queasy and she is “not sure it does anything.” The counselor should:', ['R6'], [
      O('a', 'Record her reported jitters, nausea, and doubts in her own words and share them with her PCP.', 3,
        { r: 'Document and relay', approach: 'Document self-reported effects', why: 'Counselors record self-reported medication effects and, with a release, inform the prescriber who manages the medication', keys: ['started two weeks ago', 'release signed'], mistake: 'Commenting on medication instead of coordinating' }),
      O('b', 'Note the side effects and suggest she raise them at her next scheduled PCP visit in two months.', 0,
        { r: 'Documents but delays', approach: 'Wait-for-visit framing', why: 'Early side effects can drive stopping; the release lets the counselor relay them now', keys: ['release for PCP'], mistake: 'Not using an existing release to coordinate' }),
      O('c', 'Reassure her that early side effects tend to fade, so she should push through without calling.', -1,
        { r: 'Advice outside scope', approach: 'Reassure framing', why: 'Side-effect advice belongs to the prescriber; reassurance may hide a real problem', keys: ['jittery'], mistake: 'Giving medication advice' }),
      O('d', 'Suggest she stop the sertraline if the jitters bother her, since counseling alone may be enough.', -2,
        { r: 'Unsafe and outside scope', approach: 'Stop-medication framing', why: 'Advising a medication stop is outside counselor scope and could worsen depression and risk', keys: ['active ideation'], mistake: 'Directing medication changes' }),
    ]),
    Q('q7', 'indirect', 'session1', 'Evelyn has signed a release to include Gina in safety planning. What is the best way to involve her?', ['R2'], [
      O('a', 'Encourage Evelyn to tell Gina about the plan herself, since adult children prefer to hear such news from a parent.', 0,
        { r: 'Indirect involvement', approach: 'Client-relays framing', why: 'Evelyn may share it, but a joint session lets Gina learn warning signs and her role directly', keys: ['release for Gina'], mistake: 'Not using an authorized support' }),
      O('b', 'Email Gina a copy of the safety plan so she knows the steps, without holding any joint session with her.', -1,
        { r: 'Unsecured and one-way', approach: 'Send-a-copy framing', why: 'Plain email may not be secure, and a document alone does not prepare Gina to respond', keys: ['safety plan details'], mistake: 'Sharing PHI by unsecured email' }),
      O('c', 'With Evelyn’s consent, meet with her and Gina by video to share warning signs, the plan, and how to get help.', 3,
        { r: 'Collaborate with support', approach: 'Involve support systems', why: 'Including a trusted family member in safety planning strengthens monitoring and means safety', keys: ['Gina in Tucson', 'release signed'], mistake: 'Leaving supports out of safety planning' }),
      O('d', 'Keep Gina out of the plan, since involving family would strip Evelyn of her independence as an adult.', -2,
        { r: 'Withholds a protective resource', approach: 'Autonomy-only framing', why: 'Evelyn chose to include Gina; excluding her drops a protective factor', keys: ['Evelyn requested it'], mistake: 'Overriding the client’s choice to involve family' }),
    ]),
    Q('q8', 'planning', 'session1', 'Evelyn plans a three-week Tucson trip spanning Sal’s birthday. How should the plan change?', ['R2', 'R3'], [
      O('a', 'Pause sessions during the trip, schedule one for the day she returns, and add 988 to her safety plan.', 0,
        { r: 'Partial coverage', approach: 'Pause framing', why: 'Lawful, but it leaves out local resources and the anniversary risk', keys: ['Sal’s birthday'], mistake: 'Not planning for an anniversary reaction' }),
      O('b', 'Keep weekly video sessions during the trip, since her Ohio license covers a client who lives in Ohio.', -1,
        { r: 'Misreads jurisdiction', approach: 'Residence framing', why: 'Practice occurs where the client is located; an Ohio license does not cover Arizona', keys: ['licensed only in Ohio'], mistake: 'Using residence instead of location' }),
      O('c', 'Leave the plan as is, since being with her family during the visit will keep her safe.', -2,
        { r: 'Ignores a high-risk window', approach: 'Family-protects framing', why: 'Anniversaries raise risk; family presence does not replace planning', keys: ['75th birthday'], mistake: 'Assuming family presence ensures safety' }),
      O('d', 'Confirm whether she can lawfully see Evelyn in Arizona, add Tucson crisis numbers, and set backups.', 3,
        { r: 'Plan for travel and anniversary', approach: 'Revise for disruption', why: 'The plan addresses licensure, adds local resources, and sets backup contacts before a high-risk date', keys: ['Tucson', 'Sal’s birthday'], mistake: 'Failing to update the plan for travel' }),
    ]),

    // ---------------- session2 (5): legal, interventions ×2, legal ×2 ----------------
    Q('q9', 'legal', 'session2', 'At the location check, Evelyn says she is in Tucson. The counselor has no authorization in Arizona. She should:', ['R3', 'R4'], [
      O('a', 'End the session at once and tell her to call 988, since she is not licensed where Evelyn is now.', -2,
        { r: 'Abandons a client in crisis', approach: 'Hang-up framing', why: 'Licensure limits do not justify dropping a client mid-crisis; immediate safety comes first', keys: ['tearful', 'anniversary tomorrow'], mistake: 'Putting licensure ahead of imminent safety' }),
      O('b', 'Continue weekly sessions as usual, since her Ohio residence means the Ohio license still applies.', -1,
        { r: 'Misreads jurisdiction', approach: 'Residence framing', why: 'Practice occurs where the client sits; routine care in Arizona needs authorization', keys: ['in Tucson'], mistake: 'Ignoring location-based licensure' }),
      O('c', 'Pause and call the Arizona licensing board to confirm the rules before going on with the session.', 0,
        { r: 'Right question, wrong moment', approach: 'Check-first framing', why: 'Licensure must be sorted out, but not while a client is disclosing risk', keys: ['risk disclosure'], mistake: 'Delaying crisis care for administrative steps' }),
      O('d', 'Manage the immediate risk in this session, then connect her to Arizona crisis services before ending.', 3,
        { r: 'Safety first, then local link', approach: 'Crisis exception, then transition', why: 'In an emergency the counselor stabilizes the client, then links her to local services and resolves licensure before routine care', keys: ['Tucson', 'oxycodone', 'birthday tomorrow'], mistake: 'Either abandoning or ignoring jurisdiction' }),
    ]),
    Q('q10', 'interventions', 'session2', 'Evelyn says she has thought about taking all of Sal’s oxycodone tomorrow. Gina is home. The counselor should:', ['R1', 'R2'], [
      O('a', 'Call 911 to the Tucson address now without telling Evelyn, so police can take her to the nearest emergency room.', 0,
        { r: 'Overly restrictive, not collaborative', approach: 'Covert-911 framing', why: 'Safety-oriented but bypasses collaboration with a cooperative client and available family', keys: ['Gina is home'], mistake: 'Skipping collaborative options' }),
      O('b', 'Update the plan now, have Gina take and dispose of the pills, and set up a same-day local crisis evaluation.', 3,
        { r: 'Means removal and evaluation', approach: 'Crisis intervention', why: 'A method, a date, and access call for immediate means removal with family help and same-day local evaluation', keys: ['“taking them all tomorrow”', 'Gina home'], mistake: 'Leaving means in place during acute risk' }),
      O('c', 'Ask her to leave the pills with Gina overnight and check in again by video at next week’s session.', -1,
        { r: 'Partial means safety, no evaluation', approach: 'Overnight framing', why: 'The pills could be returned, and a week is too long given a planned date', keys: ['birthday tomorrow'], mistake: 'Underestimating time-specific risk' }),
      O('d', 'Ask her to promise not to take the pills tomorrow and to call the counselor if the urge grows.', -2,
        { r: 'Contract in acute risk', approach: 'Promise framing', why: 'A promise does nothing to remove means or secure evaluation', keys: ['specific method and time'], mistake: 'Relying on a no-suicide contract' }),
    ]),
    Q('q11', 'interventions', 'session2', 'Evelyn says, “Suicide is a mortal sin—I couldn’t.” How should the counselor work with her faith?', ['R1'], [
      O('a', 'Ask whether her priest could visit and leave faith out of the risk talk, since it is a private matter.', 0,
        { r: 'Support offered, value unexplored', approach: 'Refer-to-clergy framing', why: 'Her priest may help, but her beliefs belong in the risk discussion', keys: ['practicing Catholic'], mistake: 'Treating faith as outside counseling' }),
      O('b', 'Treat her faith as lowering her risk enough to skip a same-day crisis evaluation, given her strong beliefs.', -2,
        { r: 'Over-relies on a protective factor', approach: 'Faith-as-safety framing', why: 'Moral objections can coexist with high risk; with a method and date, evaluation is still needed', keys: ['plan for tomorrow'], mistake: 'Letting one protective factor override risk' }),
      O('c', 'Explore what her faith means to her now and use it as a reason for living, without relying on it alone.', 3,
        { r: 'Integrate faith thoughtfully', approach: 'Explore culture and values', why: 'Religious beliefs can be protective reasons for living, but are weighed alongside method, intent, and access', keys: ['“mortal sin”', 'specific plan'], mistake: 'Either ignoring or over-relying on faith' }),
      O('d', 'Challenge her belief that suicide is a sin, since religious guilt can make grief and depression worse.', -1,
        { r: 'Undermines a protective belief', approach: 'Dispute framing', why: 'Challenging a protective belief imposes the counselor’s values and may weaken a reason for living', keys: ['Catholic faith'], mistake: 'Disputing a client’s religious belief' }),
    ]),
    Q('q12', 'legal', 'session2', 'Partway through safety planning, the video freezes and the call drops. The counselor should:', ['R4', 'R8'], [
      O('a', 'Wait ten minutes for her to rejoin the video, then send a secure message asking her to log back on.', -1,
        { r: 'Too passive in a crisis', approach: 'Wait framing', why: 'Waiting may be fine routinely, but not mid-crisis with a specific plan', keys: ['oxycodone plan'], mistake: 'Treating a crisis drop like a routine one' }),
      O('b', 'Call 911 from Ohio and give Gina’s address, since dispatchers can route the call to the right state for her.', 0,
        { r: 'Wrong emergency route', approach: 'Local-911 framing', why: 'Acting is right, but a 911 call from Ohio reaches Ohio dispatch and must be transferred, and it skips the faster steps of calling Evelyn and Gina', keys: ['client in Tucson'], mistake: 'Assuming 911 routes to the client’s location' }),
      O('c', 'Call her phone at once; if no answer, call Gina, then Tucson emergency services at the local number.', 3,
        { r: 'Follow the emergency plan', approach: 'Telehealth emergency protocol', why: 'The agreed dropped-call plan moves from client phone to emergency contact to local emergency services', keys: ['dropped mid-crisis', 'Gina is home'], mistake: 'Not following the agreed protocol' }),
      O('d', 'Document the dropped call and wait for her to reach out, since she said she could not act on it.', -2,
        { r: 'Abandons a client at risk', approach: 'Wait-for-client framing', why: 'Her disclaimer does not lower risk; failing to reconnect in a crisis is unsafe', keys: ['birthday tomorrow'], mistake: 'Relying on a disclaimer after a drop' }),
    ]),
    Q('q13', 'legal', 'session2', 'Evelyn will stay in Tucson three more weeks. How should ongoing counseling be handled?', ['R3'], [
      O('a', 'Pause counseling until she returns to Ohio, giving her 988 and Tucson crisis numbers for the three weeks.', 0,
        { r: 'Lawful but leaves a gap', approach: 'Pause framing', why: 'Pausing complies with licensure, but a gap right after a crisis is risky when other options exist', keys: ['recent crisis'], mistake: 'Not exploring lawful continuity options' }),
      O('b', 'Hold sessions by phone instead of video, since phone counseling falls outside interstate licensure rules.', -1,
        { r: 'No phone loophole', approach: 'Modality framing', why: 'Licensure applies to any counseling service, whatever the medium', keys: ['in Tucson'], mistake: 'Believing modality changes jurisdiction' }),
      O('c', 'Before routine sessions, obtain a privilege to practice if Arizona allows it, or arrange an Arizona provider.', 3,
        { r: 'Get authorized or hand off', approach: 'Practice within license portability', why: 'The Compact requires a privilege in each remote member state; otherwise a local provider bridges care', keys: ['licensed only in Ohio', 'three more weeks'], mistake: 'Assuming the Compact authorizes practice automatically' }),
      O('d', 'Resume weekly sessions now, since the Counseling Compact lets any Ohio-licensed counselor see clients located in all states.', -2,
        { r: 'Misstates the Compact', approach: 'Universal-license framing', why: 'The Compact covers member states only and requires a privilege before practice', keys: ['no privilege held'], mistake: 'Treating the Compact as a national license' }),
    ]),
  ],
};

// ============================================================================
// D963 — Oppositional Defiant Disorder (F91.3) — Disruptive — easy — plan 3
// One clear presentation: textbook ODD, no comorbidity, no safety concern.
// ============================================================================
const D963 = {
  id: 'ncmhce-D963',
  title: 'A 7-year-old who says “No, you do it” and a father who yells, then gives in',
  category: 'Disruptive',
  difficulty: 'easy',
  plan: 3,
  population: 'child',
  primaryDiagnosis: { name: 'Oppositional Defiant Disorder', code: 'F91.3' },
  diagnosis: { name: 'Oppositional Defiant Disorder', code: 'F91.3' },
  differentialOptions: [
    { id: 'do1', name: 'Attention-Deficit/Hyperactivity Disorder, Combined Presentation', isCorrect: false },
    { id: 'do2', name: 'Disruptive Mood Dysregulation Disorder', isCorrect: false },
    { id: 'do3', name: 'Conduct Disorder, Childhood-Onset Type', isCorrect: false },
    { id: 'do4', name: 'Oppositional Defiant Disorder', isCorrect: true },
  ],
  narrative: {
    intake:
      'Leo Halvorsen, a 7-year-old second grader, is brought to a community counseling center by his father, Erik, 36, a dental hygienist who has had ' +
      'sole legal custody since his divorce two years ago and provides a copy of the custody order; Leo’s mother lives in another state and video-calls ' +
      'weekly. For about ten months Leo has argued with adults most days, refused simple requests (“No, you do it”), deliberately annoyed his cousin and ' +
      'classmates, blamed others for his mistakes, and had loud angry outbursts when told no. He is touchy and easily annoyed. Problems are worst at home ' +
      'with Erik and with his paternal grandmother, Ingrid, who watches him after school; his teacher reports frequent defiance during transitions. He has ' +
      'not hurt people or animals, destroyed property, stolen, or lied to con others. Teacher and parent rating scales show no elevated inattention or ' +
      'hyperactivity, his mood between outbursts is cheerful, he sleeps well, and his development has been typical. Erik says he “yells, then caves,” ' +
      'and Ingrid gives Leo candy to stop tantrums. Leo, drawing quietly, says he wants his dad to “stop being mad all the time.” The counselor’s ' +
      'training is mostly with adults and she has not delivered behavioral parent training before. While Erik describes his yelling, she notices her ' +
      'chest tighten and recalls her own father’s temper.',
    session1:
      'Erik and Ingrid attend a parent session without Leo. Erik wants Leo to “just listen the first time.” A week of home tracking shows Leo followed ' +
      'first-time instructions in about 2 of 10 requests a day. With Erik’s signed release, Leo’s teacher, Ms. Adebayo, emails that she would “love to be ' +
      'on the same page.” Ingrid asks whether the candy is “really so bad.” After the session the counselor writes the progress note, which Leo’s ' +
      'insurer may review for medical necessity.',
    session2:
      'Two weeks into parent training, Erik says he praises Leo more but mostly says “good boy.” He tried a time-out once; Leo screamed and kicked the ' +
      'door for 20 minutes, so Erik let him out and gave him the tablet. He says time-out “made it worse” and wonders whether it “even works.” The ' +
      'center has begun piloting an AI note-taking tool that records and transcribes sessions, and Erik asks, “Is this being recorded?” The clinic ' +
      'biller asks how to bill the parent-only sessions, which Leo does not attend, under Leo’s insurance.',
  },
  diagnosticRationale:
    'For about ten months Leo has shown angry/irritable mood (loses temper, touchy), argumentative/defiant behavior (argues with adults, refuses ' +
    'requests, deliberately annoys others, blames others), with at least one non-sibling person, causing impairment at home and school—meeting the ' +
    'four-symptom, six-month threshold for oppositional defiant disorder. There is no aggression to people or animals, property destruction, theft, ' +
    'or deceitfulness (ruling out conduct disorder), no elevated inattention or hyperactivity on rating scales (ADHD), and his mood between outbursts ' +
    'is cheerful (ruling out disruptive mood dysregulation disorder).',
  references: [
    { id: 'R1', source: 'DSM-5-TR', detail: 'Oppositional defiant disorder: 4+ symptoms for 6+ months with at least one non-sibling individual; differentials CD, ADHD, DMDD' },
    { id: 'R2', source: 'NICE guidelines', detail: 'Antisocial behaviour and conduct disorders in children and young people: group or individual parent-training programmes as first-line for ages 3–11' },
    { id: 'R3', source: 'ACA Code of Ethics', detail: 'Informed consent and assent of minors; competence and new specialty areas; personal values and self-awareness; technology and recording consent' },
    { id: 'R4', source: 'Corey (Theory & Practice)', detail: 'Behavioral principles: labeled praise, differential attention, time-out, extinction bursts' },
    { id: 'R5', source: 'Wiger (Documentation)', detail: 'Progress notes that link interventions and measurable data to diagnosis and treatment goals; medical-necessity documentation' },
    { id: 'R6', source: 'HIPAA', detail: 'Minimum necessary disclosures under a release; business associate agreements for AI documentation vendors' },
    { id: 'R7', source: 'Hays (Assessment)', detail: 'Multi-informant rating scales (parent and teacher) and baseline behavioral tracking' },
  ],
  questions: [
    // ---------------- intake (4): profdev, assess, profdev, assess ----------------
    Q('q1', 'profdev', 'intake', 'The counselor has not delivered behavioral parent training before. What should she do?', ['R2', 'R3'], [
      O('a', 'Study an evidence-based parent training model and arrange consultation with an experienced colleague.', 3,
        { r: 'Build competence in the indicated model', approach: 'Develop evidence-based skills', why: 'Parent training is first-line for young children with ODD; learning a model and getting consultation lets her deliver it competently', keys: ['no prior parent training', 'age 7'], mistake: 'Practicing a new modality without preparation' }),
      O('b', 'Refer the family to a certified PCIT therapist and close the case, since only certified staff treat ODD.', 0,
        { r: 'Overstates the requirement', approach: 'Certification-only framing', why: 'Referral can be appropriate, but many parent-training models can be learned with consultation', keys: ['community center'], mistake: 'Assuming only certified clinicians can help' }),
      O('c', 'Use child-centered play therapy, which she knows better, since any warm relationship-based work helps.', -1,
        { r: 'Not the indicated treatment', approach: 'Familiar-method framing', why: 'Play therapy alone is not first-line for ODD; parent training is', keys: ['defiance at home'], mistake: 'Choosing a familiar method over the indicated one' }),
      O('d', 'Start coaching Erik from general common sense about discipline, since that is all parenting takes.', -2,
        { r: 'No evidence base', approach: 'Common-sense framing', why: 'Unstructured advice ignores the specific skills that make parent training work', keys: ['“yells, then caves”'], mistake: 'Treating parent training as common sense' }),
    ]),
    Q('q2', 'assess', 'intake', 'Which approach to consent is correct for Leo’s treatment?', ['R3'], [
      O('a', 'Get Erik’s consent and skip Leo’s agreement, since a 7-year-old is too young to give assent at all.', 0,
        { r: 'Overlooks assent', approach: 'Parent-only framing', why: 'Consent is from Erik, but even young children should be asked for assent in simple terms', keys: ['Leo speaks in session'], mistake: 'Skipping assent for young children' }),
      O('b', 'Delay treatment until Leo’s mother also signs consent, since both parents must agree for any minor.', -1,
        { r: 'Misreads custody', approach: 'Both-parents framing', why: 'Erik has sole legal custody per the order on file', keys: ['sole legal custody'], mistake: 'Not checking custody documents' }),
      O('c', 'Begin sessions with Leo before any consent is signed, since Erik bringing him in implies consent.', -2,
        { r: 'No valid consent', approach: 'Implied-consent framing', why: 'Treatment requires documented informed consent from the legal guardian', keys: ['no signed consent yet'], mistake: 'Treating attendance as consent' }),
      O('d', 'Obtain Erik’s written consent, keep the custody order on file, and get Leo’s assent in simple words.', 3,
        { r: 'Guardian consent plus assent', approach: 'Consent and assent', why: 'The legal custodian consents; the child gives developmentally appropriate assent', keys: ['custody order provided', 'Leo is 7'], mistake: 'Missing either the guardian’s consent or the child’s assent' }),
    ]),
    Q('q3', 'profdev', 'intake', 'As Erik describes yelling, the counselor’s chest tightens and she recalls her father’s temper. She should:', ['R3'], [
      O('a', 'Set the reaction aside and process it on her own only if it keeps coming up in later sessions.', 0,
        { r: 'Waits on reflection', approach: 'Wait-and-see framing', why: 'Watching for patterns is reasonable, but noticing it now and reflecting is better practice', keys: ['chest tightens'], mistake: 'Postponing self-reflection' }),
      O('b', 'Notice it, reflect on how her father’s temper may color her view of Erik, and bring it to supervision.', 3,
        { r: 'Reflect and supervise', approach: 'Self-reflection', why: 'Recognizing personal reactions and processing them in supervision protects her alliance with Erik', keys: ['own father’s temper'], mistake: 'Letting personal history shape judgments of a parent' }),
      O('c', 'Share her childhood memory with Erik so he can see how yelling feels to a child like Leo.', -1,
        { r: 'Self-disclosure for her needs', approach: 'Disclosure framing', why: 'Disclosure here serves her reaction more than the client and may shame Erik', keys: ['first session'], mistake: 'Using self-disclosure to make a point' }),
      O('d', 'Confront Erik firmly in the first session about the yelling so he sees how harmful it really is to Leo.', -2,
        { r: 'Shames the key change agent', approach: 'Confront framing', why: 'Shaming Erik risks dropout; parent training relies on his engagement', keys: ['Erik is the client’s main parent'], mistake: 'Acting on countertransference by confronting' }),
    ]),
    Q('q4', 'assess', 'intake', 'Which finding best supports the given diagnosis of oppositional defiant disorder?', ['R1', 'R7'], [
      O('a', 'His defiance during school transitions, since ODD is diagnosed mainly from a teacher’s report.', 0,
        { r: 'One setting, one informant', approach: 'Teacher-report framing', why: 'School defiance supports the picture, but the diagnosis rests on symptom count, duration, and exclusions', keys: ['teacher report'], mistake: 'Relying on one informant' }),
      O('b', 'Ten months of temper, arguing, defiance, and blaming, with no aggression, theft, or ADHD signs.', 3,
        { r: 'Pattern, duration, exclusions', approach: 'Criteria and differentials', why: 'Four or more symptoms for six months, with conduct disorder, ADHD, and DMDD features absent, fit ODD', keys: ['ten months', 'no aggression or theft', 'normal rating scales'], mistake: 'Skipping the differential' }),
      O('c', 'His outbursts when told no, which point mainly to disruptive mood dysregulation in a child his age.', -1,
        { r: 'Misapplies DMDD', approach: 'Mood-disorder framing', why: 'DMDD needs persistent irritable mood between outbursts; Leo is cheerful between them', keys: ['cheerful between outbursts'], mistake: 'Calling every tantrum DMDD' }),
      O('d', 'His annoying of classmates, which shows early conduct disorder needing a full juvenile risk review.', -2,
        { r: 'Escalates without basis', approach: 'Conduct-disorder framing', why: 'Annoying peers is an ODD symptom; there is no aggression, theft, or rule violation', keys: ['no aggression'], mistake: 'Confusing ODD with conduct disorder' }),
    ]),

    // ---------------- session1 (4): planning, indirect, planning, indirect ----------------
    Q('q5', 'planning', 'session1', 'Which initial treatment plan best fits Leo’s diagnosis and family?', ['R2'], [
      O('a', 'Weekly individual sessions with Leo on naming feelings, with short parent updates at the end.', 0,
        { r: 'Child-focused, parent-light', approach: 'Child-skills framing', why: 'Feelings work may help, but the primary lever at this age is parent behavior', keys: ['“yells, then caves”'], mistake: 'Treating the child alone' }),
      O('b', 'Child-centered play therapy where Leo leads so he can work through anger about his parents’ divorce.', -1,
        { r: 'Assumes a cause; wrong model', approach: 'Play-therapy framing', why: 'Nothing ties symptoms to the divorce, and play therapy is not first-line', keys: ['divorce two years ago'], mistake: 'Inferring a cause and choosing a nonindicated model' }),
      O('c', 'Refer for a stimulant medication trial first, since defiance often reflects hidden attention problems.', -2,
        { r: 'Unsupported medication referral', approach: 'Medication-first framing', why: 'Rating scales show no ADHD; medication is not first-line for ODD', keys: ['normal rating scales'], mistake: 'Assuming hidden ADHD' }),
      O('d', 'Behavioral parent training with Erik and Ingrid on praise, attention, clear commands, and time-out.', 3,
        { r: 'First-line parent training', approach: 'Parent management training', why: 'Parent training is first-line for young children with ODD and should include both caregivers', keys: ['grandmother provides care', 'inconsistent limits'], mistake: 'Leaving a caregiver out' }),
    ]),
    Q('q6', 'indirect', 'session1', 'Ms. Adebayo wants to be “on the same page.” What is the best way to collaborate with her?', ['R6'], [
      O('a', 'Send the teacher a copy of the treatment plan and ask her to read it, without setting shared targets.', 0,
        { r: 'Informs but does not coordinate', approach: 'Send-the-plan framing', why: 'Sharing helps, but aligned targets and feedback make the collaboration work', keys: ['“same page”'], mistake: 'Confusing information with coordination' }),
      O('b', 'With Erik’s release, set up a shared daily report card so home and school reward the same behaviors.', 3,
        { r: 'Aligned home–school system', approach: 'Collaborate with support systems', why: 'A daily report card links school behavior to home rewards and gives consistent data', keys: ['release signed', 'school transitions'], mistake: 'Running parallel systems at home and school' }),
      O('c', 'Ask the teacher to give Leo extra recess whenever he complains, to cut down his school defiance.', -1,
        { r: 'Rewards complaining', approach: 'Appease framing', why: 'Contingent extra recess for complaints reinforces the behavior', keys: ['defiance at transitions'], mistake: 'Reinforcing the target behavior' }),
      O('d', 'Share Leo’s full intake history with the school, since the release lets the counselor send any records.', -2,
        { r: 'Exceeds minimum necessary', approach: 'Full-disclosure framing', why: 'Releases are limited in scope; family history is not needed for a behavior plan', keys: ['divorce history'], mistake: 'Over-sharing under a release' }),
    ]),
    Q('q7', 'planning', 'session1', 'Leo follows first-time instructions in about 2 of 10 daily requests. Which goal is best written?', ['R5'], [
      O('a', 'Leo will be more cooperative at home and school, with progress reviewed whenever Erik feels ready.', 0,
        { r: 'Not measurable or timed', approach: 'General-goal framing', why: 'The aim is right but there is no metric or date', keys: ['2 of 10 baseline'], mistake: 'Ignoring baseline data' }),
      O('b', 'Leo will follow each instruction the first time within two weeks, and any lapse earns a time-out.', -1,
        { r: 'Unrealistic target', approach: 'Perfection framing', why: 'Jumping from 20% to 100% in two weeks sets the family up to fail', keys: ['low baseline'], mistake: 'Setting an unattainable target' }),
      O('c', 'Within 8 weeks, Leo will follow first-time instructions in 6 of 10 daily requests on Erik’s chart.', 3,
        { r: 'SMART from baseline', approach: 'Specific, measurable, timed', why: 'The goal builds on the baseline with a realistic target, measure, and timeframe', keys: ['2 of 10 baseline', '“listen the first time”'], mistake: 'Writing goals without a measure' }),
      O('d', 'Leo will lose all screen time until he stops arguing with adults, as tracked by Ingrid each day.', -2,
        { r: 'Punitive, open-ended', approach: 'Punishment framing', why: 'Open-ended removal of privileges is not a goal and tends to escalate conflict', keys: ['outbursts when told no'], mistake: 'Writing a punishment as a goal' }),
    ]),
    Q('q8', 'indirect', 'session1', 'What should the progress note for this parent-only session include?', ['R5'], [
      O('a', 'A short narrative of what Erik and Ingrid discussed, with goals to be added at the next review.', 0,
        { r: 'Missing goals and data', approach: 'Narrative-only framing', why: 'A narrative alone does not show what was done or link it to the plan', keys: ['baseline data'], mistake: 'Leaving goals out of the note' }),
      O('b', 'Very little, since a parent-only session without Leo is not part of Leo’s clinical record at all.', -1,
        { r: 'Misunderstands the record', approach: 'Not-the-patient framing', why: 'Parent sessions for a child’s treatment belong in the child’s record', keys: ['insurer may review'], mistake: 'Excluding collateral sessions from the record' }),
      O('c', 'Goals, skills taught, homework, baseline compliance data, and how the work targets Leo’s diagnosis.', 3,
        { r: 'Complete, necessity-linked note', approach: 'Write clinical documentation', why: 'Notes record interventions, data, and homework, and tie the session to the diagnosis and goals', keys: ['2 of 10 baseline', 'medical-necessity review'], mistake: 'Writing notes that do not support the service' }),
      O('d', 'A copy of the intake note with a new date, since the diagnosis and the plan have not changed.', -2,
        { r: 'Cloned documentation', approach: 'Copy-forward framing', why: 'Cloned notes misrepresent the service and can be fraudulent for billing', keys: ['new session content'], mistake: 'Copying notes forward' }),
    ]),

    // ---------------- session2 (5): interventions ×3, legal ×2 ----------------
    Q('q9', 'interventions', 'session2', 'Erik praises Leo more but mostly says “good boy.” How should the counselor coach him?', ['R4'], [
      O('a', 'Coach labeled praise right after the behavior, like “Thank you for putting your shoes on the first time.”', 3,
        { r: 'Specific, immediate praise', approach: 'Labeled praise', why: 'Naming the exact behavior right away tells Leo what to repeat', keys: ['“good boy”'], mistake: 'Using general praise' }),
      O('b', 'Coach him to say “good boy” even more often, since the amount of praise matters more than content.', 0,
        { r: 'Quantity over specificity', approach: 'More-praise framing', why: 'More praise helps a little, but specificity is what shapes behavior', keys: ['praises more'], mistake: 'Equating frequency with effectiveness' }),
      O('c', 'Coach him to give Leo a small toy each time he complies, since tangible rewards beat praise.', -1,
        { r: 'Overuses tangibles', approach: 'Toy-reward framing', why: 'Constant tangible rewards are costly and not sustainable; social praise is the core', keys: ['daily requests'], mistake: 'Replacing praise with prizes' }),
      O('d', 'Coach him to praise only on days with no outbursts, so that praise is not handed out for partly good behavior.', -2,
        { r: 'Withholds reinforcement', approach: 'Earn-the-day framing', why: 'Withholding praise for small successes removes the main tool for building compliance', keys: ['2 of 10 baseline'], mistake: 'Making praise contingent on a perfect day' }),
    ]),
    Q('q10', 'interventions', 'session2', 'How should the counselor help Erik set up time-out?', ['R4'], [
      O('a', 'Use one minute per year of age, but let Leo out early once he says he is sorry to his dad.', 0,
        { r: 'Early release teaches escape', approach: 'Apology-release framing', why: 'Length is fine, but letting him out on apology makes ending time-out negotiable', keys: ['released after kicking'], mistake: 'Making time-out negotiable' }),
      O('b', 'Replace time-out with a long talk about feelings whenever Leo refuses, so he learns the rule’s reason.', -1,
        { r: 'Attention for refusal', approach: 'Talk-it-out framing', why: 'Long talks after refusal give attention to the behavior', keys: ['refuses requests'], mistake: 'Rewarding defiance with attention' }),
      O('c', 'Plan a brief, calm time-out that ends after a short quiet period, carried out the same way each time.', 3,
        { r: 'Brief, calm, consistent', approach: 'Structured time-out', why: 'A short, predictable time-out with a quiet-to-end rule removes attention without escalating', keys: ['20-minute standoff'], mistake: 'Running time-out inconsistently' }),
      O('d', 'Spank Leo once if he leaves time-out, since a firm physical backup makes time-out effective.', -2,
        { r: 'Physical punishment', approach: 'Corporal-backup framing', why: 'Spanking is linked to more aggression and is not part of evidence-based parent training', keys: ['outbursts'], mistake: 'Endorsing corporal punishment' }),
    ]),
    Q('q11', 'interventions', 'session2', 'Erik says time-out “made it worse” after Leo kicked the door for 20 minutes. The best response is to:', ['R4'], [
      O('a', 'Agree time-out may not suit Leo and switch to a sticker chart alone to avoid further distress.', 0,
        { r: 'Drops a tool too soon', approach: 'Switch framing', why: 'Sticker charts help, but abandoning time-out after one try teaches that escalation works', keys: ['one attempt'], mistake: 'Giving up during a burst' }),
      O('b', 'Explain that a short surge in protest is expected when giving in stops, and plan how to stay consistent.', 3,
        { r: 'Normalize the extinction burst', approach: 'Psychoeducation and problem-solving', why: 'Behavior often worsens briefly when it stops paying off; consistency gets through it', keys: ['released and given the tablet'], mistake: 'Misreading a burst as failure' }),
      O('c', 'Suggest Erik let Leo out whenever he kicks the door, to avoid any damage, and then try time-out again later.', -1,
        { r: 'Reinforces escalation', approach: 'Release-on-kick framing', why: 'Releasing on kicking teaches Leo that escalation ends time-out', keys: ['let out after kicking'], mistake: 'Rewarding escalation' }),
      O('d', 'Advise Erik to lock Leo in his room until he calms down, since he cannot stay in time-out.', -2,
        { r: 'Unsafe confinement', approach: 'Lock-in framing', why: 'Locking a child in a room is unsafe and frightening', keys: ['7-year-old'], mistake: 'Using confinement as discipline' }),
    ]),
    Q('q12', 'legal', 'session2', 'Erik asks, “Is this being recorded?” about the center’s AI note-taking pilot. The counselor should:', ['R3', 'R6'], [
      O('a', 'Turn the tool off only if Erik objects, since the center’s general consent form already covers it.', 0,
        { r: 'Opt-out instead of informed consent', approach: 'Opt-out framing', why: 'Recording with AI needs specific informed consent, not a general form', keys: ['pilot tool'], mistake: 'Relying on generic consent' }),
      O('b', 'Explain what the tool does, how recordings are stored and protected, and use it only with his consent.', 3,
        { r: 'Specific informed consent', approach: 'Transparent AI use', why: 'Clients are told how an AI tool records, stores, and protects data, and it is used only with consent', keys: ['“Is this being recorded?”'], mistake: 'Using AI tools without disclosure' }),
      O('c', 'Tell Erik the recording is just for internal quality checks and move on, since the vendor holds it.', -1,
        { r: 'Incomplete disclosure', approach: 'Minimize framing', why: 'Vendor storage is exactly what clients need explained', keys: ['vendor holds data'], mistake: 'Downplaying third-party data handling' }),
      O('d', 'Keep using the tool without talking about it, since asking about consent may make Erik distrustful.', -2,
        { r: 'Recording without consent', approach: 'Conceal framing', why: 'Recording without informed consent violates ethics and may violate law', keys: ['direct question from Erik'], mistake: 'Hiding technology use' }),
    ]),
    Q('q13', 'legal', 'session2', 'The biller asks how to bill the parent-only sessions under Leo’s insurance. The counselor should:', ['R5'], [
      O('a', 'Bill them to Erik as self-pay, since insurers do not cover sessions where the child is not present.', 0,
        { r: 'Lawful but unnecessary', approach: 'Self-pay framing', why: 'Many plans cover family sessions without the patient when documented; self-pay may be unnecessary', keys: ['Leo’s insurance'], mistake: 'Assuming no coverage' }),
      O('b', 'Bill them as family therapy without the patient present, with notes tying each to Leo’s goals.', 3,
        { r: 'Accurate code with support', approach: 'Billing supported by documentation', why: 'The service is billed as it occurred, and notes show medical necessity for the identified client', keys: ['parent-only', 'medical-necessity review'], mistake: 'Miscoding the service' }),
      O('c', 'Bill them under Erik’s own insurance as his individual therapy, since he is the one attending.', -1,
        { r: 'Wrong patient', approach: 'Attendee-is-patient framing', why: 'Erik has no diagnosis being treated; billing him misrepresents the service', keys: ['treatment is for Leo'], mistake: 'Billing the wrong person' }),
      O('d', 'Bill them as individual therapy with Leo, since the treatment is for his diagnosis either way.', -2,
        { r: 'Misrepresents the service', approach: 'Code-as-individual framing', why: 'Billing a session Leo did not attend as his individual therapy is false claims risk', keys: ['Leo not present'], mistake: 'Billing a service that did not occur' }),
    ]),
  ],
};

// ============================================================================
// D964 — Conduct Disorder, Adolescent-Onset Type (F91.2) — Disruptive — hard — plan 4
// Buried: fire-setting and possible animal cruelty inside a guardian's
// reassurance; guardianship and probation release limits; subpoena vs court order.
// ============================================================================
const D964 = {
  id: 'ncmhce-D964',
  title: 'A 15-year-old on probation, a burned hayfield, and two requests for his records',
  category: 'Disruptive',
  difficulty: 'hard',
  plan: 4,
  population: 'child',
  primaryDiagnosis: { name: 'Conduct Disorder, Adolescent-Onset Type', code: 'F91.2' },
  diagnosis: { name: 'Conduct Disorder, Adolescent-Onset Type', code: 'F91.2' },
  differentialOptions: [
    { id: 'do1', name: 'Oppositional Defiant Disorder', isCorrect: false },
    { id: 'do2', name: 'Conduct Disorder, Childhood-Onset Type', isCorrect: false },
    { id: 'do3', name: 'Cannabis Use Disorder, Mild', isCorrect: false },
    { id: 'do4', name: 'Conduct Disorder, Adolescent-Onset Type', isCorrect: true },
  ],
  narrative: {
    intake:
      'Wyatt Bramlett, a 15-year-old white ninth grader in a rural county, is referred by his juvenile probation officer; outpatient counseling is a ' +
      'condition of his six-month probation after he broke into a vacant house and took a dirt bike worth about $1,800. He lives with his maternal aunt, ' +
      'Renee, 41, a home health aide whom a county court appointed his legal guardian 18 months ago when his mother entered long-term residential ' +
      'treatment. Renee says she is “basically his mom” but did not bring the guardianship papers. Since age 13 Wyatt has started three fights at school, ' +
      'lies to get money or out of chores (“he can talk anybody into anything”), and was suspended for vaping cannabis. Renee and school records describe ' +
      'a “regular kid” with no discipline problems before seventh grade. He shrugs through much of the interview, calls the break-in “no big deal, nobody ' +
      'lived there,” and says he came only “because the judge said.” He denies suicidal thoughts. His mother has left the counselor a voicemail asking ' +
      'for updates. The county has a multisystemic therapy (MST) team with a four-week waitlist; the counselor is not trained in MST. Hearing about the ' +
      'break-in, the counselor feels a flash of anger—her own home was burglarized last year.',
    session1:
      'Renee brings the guardianship order, which gives her authority over Wyatt’s medical and educational decisions and gives his mother no access to ' +
      'his records. In a family session Renee says Wyatt has been “easier lately” and “likes to mess with lighters, like all boys.” Describing the summer, ' +
      'she mentions that a burn-barrel fire behind their shed spread into a neighbor’s hayfield in July—“an accident”—and that the neighbor’s cat “turned ' +
      'up burned out by the shed, probably coyotes got it after.” Wyatt smirks and says nothing. Gas cans and a lighter collection sit in the unlocked ' +
      'shed. The probation officer emails asking for a “full report” on Wyatt’s progress; Renee has signed a release allowing the counselor to tell ' +
      'probation about attendance and participation only. The school counselor asks about a team meeting with Renee, probation, and the counselor.',
    session2:
      'A focused fire-setting assessment found that Wyatt has lit small fires behind the shed since spring; he denies harming the cat, and Renee has ' +
      'locked the shed and moved the lighters. Wyatt comes in irritable: counseling is “a waste—I’m only here so I don’t get locked up,” though he admits ' +
      'he “doesn’t want to end up like my mom.” He describes a fight that started when a classmate “looked at me wrong” and says he “just snapped.” In a ' +
      'joint segment Renee says she often does not know where Wyatt goes after school and that rules “change depending on how tired I am.” Two weeks ' +
      'later the counselor receives a subpoena signed by an assistant county prosecutor seeking “all records” on Wyatt for an arson investigation of the ' +
      'hayfield fire. The following week a juvenile court judge signs an order in his probation case directing the counselor to provide a summary of his ' +
      'attendance and treatment progress.',
  },
  diagnosticRationale:
    'In the past 12 months Wyatt has initiated physical fights, broken into a house (taking a dirt bike), and lied to obtain goods or ' +
    'avoid obligations—at least three conduct disorder criteria, with impairment at school and legal involvement. Repeated fire-setting since spring ' +
    'and a possible animal-cruelty incident are buried risk indicators that must be assessed directly. Guardian and school records show no criterion ' +
    'behavior before age 10 (problems began around 13), so the adolescent-onset type applies. Oppositional defiant disorder does not account for ' +
    'violations of others’ rights; cannabis use is assessed as a co-occurring concern.',
  references: [
    { id: 'R1', source: 'DSM-5-TR', detail: 'Conduct disorder: 3+ of 15 criteria in 12 months; childhood-onset requires at least one symptom before age 10, adolescent-onset none before 10; limited prosocial emotions specifier' },
    { id: 'R2', source: 'ACA Code of Ethics', detail: 'Consent for minors and legal guardians; responding to subpoenas and court orders (minimal disclosure, consult, notify client); competence; personal values' },
    { id: 'R3', source: 'State law', detail: 'Guardianship authority as written in the court order; privilege and response to subpoenas versus court orders for mental health records' },
    { id: 'R4', source: 'HIPAA', detail: 'Disclosures for judicial proceedings: court order versus subpoena without order (satisfactory assurances required); minimum necessary; personal representative status' },
    { id: 'R5', source: 'NICE guidelines', detail: 'Antisocial behaviour and conduct disorders: multimodal, family-focused interventions (e.g., multisystemic therapy) for ages 11–17; avoid aggregating antisocial peers' },
    { id: 'R6', source: 'Miller & Rollnick (MI)', detail: 'Double-sided reflections and autonomy support with mandated, ambivalent adolescents' },
    { id: 'R7', source: 'Corey (Theory & Practice)', detail: 'Problem-solving skills training and cognitive-behavioral anger management for adolescents; countertransference' },
    { id: 'R8', source: 'Hays (Assessment)', detail: 'Collateral and multi-informant assessment; structured inquiry into fire-setting and harm to animals' },
  ],
  questions: [
    // ---------------- intake (4): assess ×2, profdev ×2 ----------------
    Q('q1', 'assess', 'intake', 'Renee says she is “basically his mom” but did not bring the guardianship papers. How should consent be handled?', ['R2', 'R3'], [
      O('a', 'Accept Renee’s consent today on her word and ask her to bring in the guardianship papers within a month.', 0,
        { r: 'Verifies too late', approach: 'Trust-now framing', why: 'Her account is plausible, but authority should be confirmed from the order before relying on it', keys: ['no papers brought'], mistake: 'Relying on self-report of legal authority' }),
      O('b', 'Return the mother’s call and get her consent too, since a parent keeps the right to approve her son’s health care.', -1,
        { r: 'Assumes parental rights', approach: 'Parent-rights framing', why: 'A guardianship order may limit the mother’s rights; the order decides', keys: ['mother’s voicemail'], mistake: 'Assuming biological parents keep all rights' }),
      O('c', 'Get a copy of the order, have Renee sign consent, obtain Wyatt’s assent, and review what probation will get.', 3,
        { r: 'Verify authority, consent, assent, limits', approach: 'Informed consent with a guardian', why: 'The order shows who may consent; the minor assents; and court-referred clients learn what probation receives', keys: ['court-appointed guardian', 'probation referral'], mistake: 'Skipping verification of guardianship' }),
      O('d', 'Skip formal consent, since a court-ordered referral means the judge has already consented for him.', -2,
        { r: 'No valid consent', approach: 'Court-consents framing', why: 'A probation condition requires attendance; it does not replace guardian consent', keys: ['probation condition'], mistake: 'Confusing a court mandate with consent' }),
    ]),
    Q('q2', 'assess', 'intake', 'Which finding determines the adolescent-onset specifier?', ['R1', 'R8'], [
      O('a', 'He was 15 at the time of the break-in, which places the start of his conduct problems in adolescence.', 0,
        { r: 'One event, not the rule', approach: 'Index-event framing', why: 'The specifier depends on whether any criterion appeared before age 10, not the age at one event', keys: ['age at break-in'], mistake: 'Dating onset from a single event' }),
      O('b', 'His lack of remorse marks the limited prosocial emotions specifier instead of an onset type.', -1,
        { r: 'Confuses specifiers', approach: 'Callousness framing', why: 'Limited prosocial emotions is a separate specifier needing persistent traits across settings', keys: ['shrugs'], mistake: 'Mixing onset and trait specifiers' }),
      O('c', 'No conduct disorder symptom appeared before age 10, and his problems began around age 13.', 3,
        { r: 'No symptom before 10', approach: 'Apply onset rule', why: 'Adolescent-onset requires no criterion symptom before age 10, confirmed here by guardian and school records', keys: ['“regular kid”', 'no discipline problems before seventh grade'], mistake: 'Ignoring collateral history' }),
      O('d', 'His court involvement began at 15, and onset type is set by the age of his first legal charge.', -2,
        { r: 'Legal events do not define onset', approach: 'Arrest-age framing', why: 'Onset is based on symptoms, not on when the legal system got involved', keys: ['probation'], mistake: 'Using legal history to date onset' }),
    ]),
    Q('q3', 'profdev', 'intake', 'The county MST team has a four-week waitlist and the counselor is not trained in MST. She should:', ['R5', 'R2'], [
      O('a', 'Refer to the county MST team and offer family-based work within her training while Wyatt waits.', 3,
        { r: 'Refer to the model; bridge care', approach: 'Assess need for specialized training', why: 'MST is delivered by trained, supervised teams; she refers and provides competent bridging care', keys: ['not trained in MST', 'four-week waitlist'], mistake: 'Practicing a specialized model without training' }),
      O('b', 'Enroll in MST certification herself so she can treat Wyatt with the full model sometime next year.', 0,
        { r: 'Not timely', approach: 'Self-certify framing', why: 'Training may serve future clients, but it does not help Wyatt now', keys: ['probation period'], mistake: 'Planning training past when care is needed' }),
      O('c', 'Deliver MST herself from the published manual while the family waits for the county team.', -1,
        { r: 'Outside competence', approach: 'Manual-only framing', why: 'MST requires team training and supervision; a manual is not enough', keys: ['not trained in MST'], mistake: 'Assuming a manual confers competence' }),
      O('d', 'Tell the probation officer that counseling cannot help conduct disorder and decline the referral.', -2,
        { r: 'Pessimism and refusal', approach: 'Untreatable framing', why: 'Family-based treatments are effective; declining leaves Wyatt without care', keys: ['court-ordered referral'], mistake: 'Treating conduct disorder as untreatable' }),
    ]),
    Q('q4', 'profdev', 'intake', 'Hearing about the break-in, the counselor feels a flash of anger tied to her own burglary. She should:', ['R2', 'R7'], [
      O('a', 'Keep the reaction to herself and stay strictly neutral, since naming it could make it harder to set aside.', 0,
        { r: 'Suppression without reflection', approach: 'Suppress framing', why: 'Neutrality is the aim, but unexamined anger can leak into judgments', keys: ['own burglary'], mistake: 'Suppressing rather than examining reactions' }),
      O('b', 'Transfer Wyatt to a colleague right away, since any personal reaction to a crime creates a conflict.', -1,
        { r: 'Overcorrects', approach: 'Transfer framing', why: 'A reaction is not a conflict of interest; reflection and supervision come first', keys: ['first session'], mistake: 'Equating feelings with impairment' }),
      O('c', 'Reflect on how her burglary may shape her view of Wyatt and use supervision so it does not bias care.', 3,
        { r: 'Reflect and supervise', approach: 'Self-reflection', why: 'Naming and processing reactions in supervision keeps her assessment fair', keys: ['flash of anger'], mistake: 'Letting personal history bias care' }),
      O('d', 'Tell Wyatt how being burglarized affected her, so he can grasp the harm his break-in caused.', -2,
        { r: 'Self-disclosure as confrontation', approach: 'Victim-disclosure framing', why: 'Disclosure here serves her feelings and may shame and alienate him', keys: ['“no big deal”'], mistake: 'Using disclosure to confront' }),
    ]),

    // ---------------- session1 (4): planning ×2, indirect ×2 ----------------
    Q('q5', 'planning', 'session1', 'Renee mentions lighters, the hayfield fire, and the burned cat in passing. How should the plan be prioritized?', ['R8'], [
      O('a', 'Note the fire and the cat as possible concerns and revisit them after anger goals are set.', 0,
        { r: 'Right concern, wrong order', approach: 'Later framing', why: 'They are noted, but fire-setting and animal harm are risk issues that come first', keys: ['unlocked gas cans'], mistake: 'Sequencing risk behind routine goals' }),
      O('b', 'Assess fire-setting and harm to animals in detail first, and secure the lighters and gas cans now.', 3,
        { r: 'Risk first, means secured', approach: 'Prioritize safety', why: 'Fire-setting and animal cruelty signal elevated risk; assessment and securing materials come first', keys: ['“likes to mess with lighters”', 'hayfield fire', 'burned cat'], mistake: 'Missing risk buried in a caregiver’s reassurance' }),
      O('c', 'Treat the fire and the cat as accidents, as Renee says, and focus the plan on fights and lying.', -2,
        { r: 'Misses buried risk', approach: 'Accept-the-explanation framing', why: 'The pattern of lighters, an escaped fire, and a burned animal requires assessment, not acceptance', keys: ['Wyatt smirks'], mistake: 'Accepting minimizing explanations' }),
      O('d', 'Confront Wyatt in front of Renee about killing the cat, to make him take responsibility for it.', -1,
        { r: 'Accuses without assessment', approach: 'Confront framing', why: 'Accusing him before assessing invites denial and damages engagement', keys: ['no confirmed facts'], mistake: 'Confronting rather than assessing' }),
    ]),
    Q('q6', 'planning', 'session1', 'Which overall treatment approach best fits Wyatt?', ['R5'], [
      O('a', 'Weekly individual CBT with Wyatt on anger and problem solving, updating Renee by phone each month.', 0,
        { r: 'Too narrow', approach: 'Individual-only framing', why: 'Skills work helps, but adolescent conduct problems respond best to family and systems work', keys: ['inconsistent home rules'], mistake: 'Treating the teen without his systems' }),
      O('b', 'Place Wyatt in an anger group with other youth on probation, so peers can confront his excuses.', -1,
        { r: 'Peer contagion risk', approach: 'Peer-group framing', why: 'Grouping antisocial youth can increase problem behavior', keys: ['probation'], mistake: 'Aggregating antisocial peers' }),
      O('c', 'A family-centered plan with Renee, school, peers, and probation, plus referral to the county MST team.', 3,
        { r: 'Multisystemic approach', approach: 'Family and systems', why: 'Family-focused, multisystemic work across home, school, peers, and community fits adolescent conduct disorder', keys: ['MST available', 'probation and school involved'], mistake: 'Ignoring the systems maintaining behavior' }),
      O('d', 'Recommend a wilderness boot camp, since a hard shock helps teens with conduct problems turn around.', -2,
        { r: 'Harmful approach', approach: 'Shock framing', why: 'Boot camps and scare tactics have not shown benefit and can worsen outcomes', keys: ['adolescent'], mistake: 'Believing harsh shock deters' }),
    ]),
    Q('q7', 'indirect', 'session1', 'The probation officer asks for a “full report”; Renee’s release covers attendance and participation only. The counselor should:', ['R4', 'R2'], [
      O('a', 'Ask Renee to tell probation how Wyatt is doing, so the counselor avoids sharing anything at all.', 0,
        { r: 'Skips authorized sharing', approach: 'Deflect framing', why: 'The release allows attendance and participation; refusing it all strains a needed partnership', keys: ['signed release'], mistake: 'Withholding authorized information' }),
      O('b', 'Send probation the attendance and participation the release covers, and say more needs consent or an order.', 3,
        { r: 'Share within the release', approach: 'Collaborate within limits', why: 'Disclosures follow the release scope; more requires new consent or a court order', keys: ['release limited', '“full report” request'], mistake: 'Treating a request as authorization' }),
      O('c', 'Include the fire and the cat in the update, since they may matter to probation even if not covered.', -1,
        { r: 'Exceeds the release', approach: 'Helpful-extra framing', why: 'Clinical details are outside the release and no legal exception applies', keys: ['attendance only'], mistake: 'Over-disclosing in good faith' }),
      O('d', 'Send probation the full clinical notes, since the court ordered the counseling and that overrides the release.', -2,
        { r: 'Unauthorized disclosure', approach: 'Court-referral framing', why: 'A probation condition is not an order for records', keys: ['no court order for records'], mistake: 'Confusing a referral with authorization' }),
    ]),
    Q('q8', 'indirect', 'session1', 'The school counselor proposes a team meeting with Renee, probation, and the counselor. The best response is to:', ['R5', 'R4'], [
      O('a', 'Send the school counselor a written summary instead of meeting, so the team still has her input.', 0,
        { r: 'Less coordination', approach: 'Written-only framing', why: 'A summary helps, but a shared meeting aligns goals and roles', keys: ['team meeting offered'], mistake: 'Substituting a document for collaboration' }),
      O('b', 'Join the meeting but leave Renee out, since professionals can plan more frankly without the family.', -1,
        { r: 'Excludes the guardian', approach: 'Professionals-only framing', why: 'The guardian is central to a family-based plan and must consent', keys: ['Renee is guardian'], mistake: 'Planning without the family' }),
      O('c', 'With Renee’s consent, join a meeting to set shared goals and roles across home, school, and probation.', 3,
        { r: 'Wraparound collaboration', approach: 'Coordinate with support systems', why: 'Aligning family, school, and probation is central to a multisystemic plan', keys: ['school counselor', 'probation officer'], mistake: 'Working in silos' }),
      O('d', 'Join and share Wyatt’s session content freely, since everyone at the table is working to help him.', -2,
        { r: 'Breaches confidentiality', approach: 'Open-sharing framing', why: 'Good intentions do not authorize disclosure beyond consent', keys: ['limited release'], mistake: 'Equating shared goals with consent' }),
    ]),

    // ---------------- session2 (5): interventions ×3, legal ×2 ----------------
    Q('q9', 'interventions', 'session2', 'Wyatt says counseling is “a waste” but he “doesn’t want to end up like my mom.” The best response is:', ['R6'], [
      O('a', '“You’re here because the judge said so, so let’s make the best of the time we have together.”', 0,
        { r: 'Accepts mandate, misses change talk', approach: 'Make-the-best framing', why: 'Pragmatic, but it skips the change talk in what he said', keys: ['“end up like my mom”'], mistake: 'Missing change talk' }),
      O('b', '“Part of you sees this as a waste, and part of you doesn’t want to end up where your mom did.”', 3,
        { r: 'Double-sided reflection', approach: 'Motivational interviewing', why: 'Reflecting both sides of his ambivalence highlights his own reason for change without pressure', keys: ['“a waste”', '“end up like my mom”'], mistake: 'Arguing with sustain talk' }),
      O('c', '“If you keep this attitude, the judge will hear that you aren’t taking counseling seriously.”', -1,
        { r: 'Threat raises resistance', approach: 'Leverage framing', why: 'Threatening consequences provokes reactance and damages the alliance', keys: ['mandated client'], mistake: 'Using coercion to motivate' }),
      O('d', '“You broke into a house—it is a big deal, and you need to start taking responsibility now.”', -2,
        { r: 'Confrontation', approach: 'Confront framing', why: 'Head-on confrontation with a mandated teen tends to entrench resistance', keys: ['“no big deal”'], mistake: 'Confronting minimization head-on' }),
    ]),
    Q('q10', 'interventions', 'session2', 'Wyatt says he “just snapped” when a classmate “looked at me wrong.” Which intervention fits best?', ['R7'], [
      O('a', 'Explore his past in depth, since understanding why he snaps will cut fights before skills are needed.', 0,
        { r: 'Insight before skills', approach: 'Insight framing', why: 'Understanding helps, but he needs skills to manage the next trigger now', keys: ['three fights this year'], mistake: 'Delaying skills for insight' }),
      O('b', 'Teach him to vent anger by hitting a pillow when it rises, so the feeling does not build up inside.', -1,
        { r: 'Catharsis', approach: 'Venting framing', why: 'Venting rehearses aggression rather than reducing it', keys: ['“just snapped”'], mistake: 'Believing venting reduces anger' }),
      O('c', 'Tell him the next fight will break probation, since fear of consequences works best with teens.', -2,
        { r: 'Fear-based', approach: 'Scare framing', why: 'Threats do not build skills and can heighten defiance', keys: ['probation'], mistake: 'Relying on fear to change behavior' }),
      O('d', 'Teach him to spot early anger cues and use a stop-and-think problem-solving step before acting.', 3,
        { r: 'Skill-building', approach: 'Problem-solving skills training', why: 'Cue recognition and structured problem solving reduce reactive aggression', keys: ['“looked at me wrong”'], mistake: 'Skipping skill development' }),
    ]),
    Q('q11', 'interventions', 'session2', 'Renee often does not know where Wyatt goes after school and her rules “change depending on how tired I am.” She should be coached to:', ['R5'], [
      O('a', 'Give Wyatt more freedom, since teens with conduct problems rebel harder against close monitoring.', -1,
        { r: 'Reduces needed supervision', approach: 'Loosen framing', why: 'Low monitoring is a risk factor; more freedom worsens it', keys: ['unknown whereabouts'], mistake: 'Equating monitoring with rebellion' }),
      O('b', 'Track where Wyatt is after school and use the same rules and consequences each day.', 3,
        { r: 'Monitoring and consistency', approach: 'Guardian skill-building', why: 'Parental monitoring and consistent discipline are core targets in family treatment of conduct problems', keys: ['rules change with fatigue'], mistake: 'Ignoring guardian practices' }),
      O('c', 'Ground him for the rest of probation, since longer punishments deter delinquent behavior best.', 0,
        { r: 'Overly long consequence', approach: 'Long-grounding framing', why: 'Limits help, but months-long punishment loses effect and breeds resentment', keys: ['six-month probation'], mistake: 'Equating severity with effectiveness' }),
      O('d', 'Let probation handle discipline, since court supervision takes the place of rules at home.', -2,
        { r: 'Abdicates home role', approach: 'Outsource framing', why: 'Probation cannot replace daily home structure', keys: ['guardian role'], mistake: 'Outsourcing parenting to the court' }),
    ]),
    Q('q12', 'legal', 'session2', 'A subpoena signed by an assistant prosecutor seeks “all records” on Wyatt for an arson investigation. The counselor should:', ['R2', 'R3', 'R4'], [
      O('a', 'Send only a summary to the prosecutor, since a summary discloses far less than the full record would.', 0,
        { r: 'Still discloses without authority', approach: 'Partial-compliance framing', why: 'A smaller disclosure is still unauthorized on a subpoena alone', keys: ['no court order'], mistake: 'Assuming partial disclosure is safe' }),
      O('b', 'Ignore the subpoena, since a prosecutor cannot compel a counselor to share any records at all.', -1,
        { r: 'A subpoena needs a response', approach: 'Ignore framing', why: 'Ignoring a subpoena can bring contempt; it requires a timely, proper response', keys: ['subpoena received'], mistake: 'Ignoring legal process' }),
      O('c', 'Not release records on the subpoena alone; notify Renee, consult an attorney, and assert privilege.', 3,
        { r: 'Respond without disclosing', approach: 'Court proceedings best practice', why: 'An attorney-signed subpoena does not authorize release; the counselor asserts privilege, consults counsel, and informs the guardian', keys: ['signed by prosecutor', 'arson investigation'], mistake: 'Treating a subpoena as a court order' }),
      O('d', 'Send all of Wyatt’s records, since a subpoena signed by a prosecutor legally requires full disclosure.', -2,
        { r: 'Unauthorized release', approach: 'Comply-fully framing', why: 'Releasing everything without consent or order breaches privilege and could harm him legally', keys: ['minor’s records'], mistake: 'Equating subpoena with mandatory release' }),
    ]),
    Q('q13', 'legal', 'session2', 'A juvenile court judge orders a summary of Wyatt’s attendance and treatment progress. The counselor should:', ['R2', 'R4'], [
      O('a', 'Ask Renee to sign a release first and send nothing until she does, despite the judge’s order.', 0,
        { r: 'Order does not need a release', approach: 'Release-first framing', why: 'Informing Renee is right, but a court order authorizes the specified disclosure', keys: ['judge-signed order'], mistake: 'Treating a court order like a request' }),
      O('b', 'Send the full chart, since a court order allows the counselor to share every record she holds.', -1,
        { r: 'Exceeds the order', approach: 'Full-chart framing', why: 'Disclosure is limited to what the order specifies', keys: ['summary requested'], mistake: 'Over-complying with an order' }),
      O('c', 'Decline to respond, since sharing a teen’s records would breach his trust and harm the alliance.', -2,
        { r: 'Defies a court order', approach: 'Refuse framing', why: 'Refusing a valid order risks contempt and does not protect him', keys: ['court order'], mistake: 'Putting the alliance above legal duty' }),
      O('d', 'Comply with the order, release only the attendance and progress summary, and tell Renee and Wyatt.', 3,
        { r: 'Comply narrowly, inform', approach: 'Follow the court order', why: 'A court order is followed, limited to what it specifies, with the guardian and client informed', keys: ['order for a summary'], mistake: 'Releasing more or less than ordered' }),
    ]),
  ],
};

module.exports = { CASES: [D960, D961, D962, D963, D964] };
