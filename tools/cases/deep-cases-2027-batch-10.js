// deep-cases-2027-batch-10.js — NCMHCE deep cases, 2027 specification
// ids: ncmhce-D965, ncmhce-D966, ncmhce-D967, ncmhce-D968, ncmhce-D969
// 2027 NCMHCE specification; hand-authored; validate with check2027.js
//
// D965 · plan 5 · Disruptive · medium · couple_family — Intermittent Explosive Disorder (F63.81)
// D966 · plan 6 · Disruptive · medium · child         — Oppositional Defiant Disorder (F91.3)
// D967 · plan 7 · Somatic    · easy   · adult         — Illness Anxiety Disorder (F45.21)
// D968 · plan 8 · Somatic    · hard   · adult         — Functional Neurological Symptom Disorder (F44.4)
// D969 · plan 9 · Somatic    · hard   · adult         — Factitious Disorder Imposed on Self (F68.10)
//
// Standalone deliverable for SME review. Do NOT auto-import.

const SECTION_OF = {
  assess: 'intake', profdev: 'intake',
  planning: 'session1', indirect: 'session1',
  interventions: 'session2', legal: 'session2',
};

// O(text, weight, rationale, approach, why, keyIndicators[], commonMistake)
const O = (text, weight, r, approach, why, keys, mistake) => ({ text, weight, r, approach, why, keys, mistake });

// Q(id, domain, question, evidenceRef, keySlot, [keyOption, ...distractors])
// Places the keyed option in keySlot (a–d); distractors fill the other slots in order.
const Q = (id, domain, question, evidenceRef, keySlot, opts) => {
  const slots = ['a', 'b', 'c', 'd'];
  const ki = slots.indexOf(keySlot);
  const [key, ...rest] = opts;
  const ordered = rest.slice();
  ordered.splice(ki, 0, key);
  return {
    id,
    domain,
    section: SECTION_OF[domain],
    question,
    evidenceRef,
    options: ordered.map((o, i) => ({
      id: slots[i],
      text: o.text,
      isCorrect: o.weight === 3,
      weight: o.weight,
      rationale: o.r,
      explanation: { approach: o.approach, rationale: o.why, keyIndicators: o.keys, commonMistake: o.mistake },
    })),
  };
};

// ============================================================================
// D965 — Intermittent Explosive Disorder (couple/family, medium)
// Complications: an IPV disclosure in the individual screen that makes conjoint
// work contraindicated for now, and an unsecured rifle in the home.
// ============================================================================
const D965 = {
  id: 'ncmhce-D965',
  plan: 5,
  population: 'couple_family',
  title: 'A couple asks for joint counseling to stop a husband’s kitchen-table explosions',
  category: 'Disruptive',
  difficulty: 'medium',
  primaryDiagnosis: { name: 'Intermittent Explosive Disorder', code: 'F63.81' },
  diagnosis: { name: 'Intermittent Explosive Disorder', code: 'F63.81' },
  differentialOptions: [
    { id: 'do1', name: 'Antisocial Personality Disorder', isCorrect: false },
    { id: 'do2', name: 'Intermittent Explosive Disorder', isCorrect: true },
    { id: 'do3', name: 'Alcohol Use Disorder, Mild', isCorrect: false },
    { id: 'do4', name: 'Bipolar II Disorder', isCorrect: false },
  ],
  narrative: {
    intake:
      'Hiroshi “Hiro” Tanaka, 38, a Japanese American HVAC service manager, and his wife, Leah Brennan-Tanaka, 36, a public-library branch manager, ' +
      'request couples counseling at a suburban group practice because they “fight too much.” They have two children, ages 6 and 9. Both describe Hiro’s ' +
      'sudden verbal outbursts (shouting, swearing, slamming cabinet doors) about two to three times a week for roughly three years, set off by minor ' +
      'frustrations such as a late dinner or a misplaced remote; each lasts under 15 minutes. Last spring he punched a hole in the garage drywall; no other ' +
      'property damage is reported. Afterward he feels ashamed and apologizes. He denies planning the outbursts or gaining anything from them, once yelled at ' +
      'a coworker, drinks two beers on some weekends, and denies drug use, mood episodes, or head injury. He keeps a deer rifle in an unlocked garage cabinet. ' +
      'His primary care physician started fluoxetine four weeks ago. Practice policy calls for a separate individual interview with each partner before any ' +
      'conjoint session, and the intake explains a limited-secrets policy: what one partner shares alone is not passed to the other without consent unless ' +
      'safety requires it. The practice recently enabled an AI tool that drafts progress notes from session audio; the general consent form mentions it in one ' +
      'line. The counselor has couples-counseling training but none in screening for or treating intimate partner violence. She grew up with a father whose ' +
      'rages frightened the family, and when Hiro raises his voice describing an argument, she feels her chest tighten and silently hopes Leah will “get out.”',
    session1:
      'In her individual interview, Leah reports that during an argument last spring Hiro grabbed her wrist hard enough to leave a bruise. She denies other ' +
      'physical contact, choking, threats to kill, or stalking, says she is not afraid for her life, but “walks on eggshells” and edits what she says around ' +
      'him. She asks the counselor not to tell Hiro she disclosed this. In his interview Hiro, unprompted, admits “grabbing her once” and says he wants to stop ' +
      'before the children copy him. Since starting fluoxetine he feels “a little flat” and sleeps poorly, though the outbursts are unchanged; he has not told ' +
      'his physician, and he signs a release for her. Leah still wants joint sessions “so we can fix this together.” The counselor’s referral list still shows ' +
      'an old hotline number for the local domestic violence program, which changed its number this year.',
    session2:
      'In an individual session, Hiro reviews his anger log: three outbursts last week, each beginning with jaw tension and the thought “nobody respects my ' +
      'time.” He agrees to talk about the rifle, saying he hunts once a year and his brother has a gun safe. He then asks, “Did Leah tell you about the wrist ' +
      'thing?” Leah emails that she did not know the AI tool was recording their sessions and would not have spoken freely if she had. She also asks whether ' +
      'her individual safety-planning sessions can be billed to Hiro’s insurance, which covers conjoint sessions under his diagnosis; she has no mental health ' +
      'diagnosis of her own.',
  },
  diagnosticRationale:
    'Hiro has recurrent verbal aggression averaging about twice weekly for well over three months, with outbursts grossly out of proportion to minor ' +
    'triggers, not premeditated and not aimed at a tangible goal, causing marked distress and harm to his marriage and work relationships. Onset is after age 6. ' +
    'His occasional weekend beer use is not linked to outbursts, he reports no mood episodes or head injury, and there is no pervasive pattern of disregard for ' +
    'others or remorselessness that would suggest antisocial personality disorder. The wrist-grab and drywall punch are single events that add to the IPV and ' +
    'safety picture but do not by themselves define the diagnosis, which rests on the verbal-aggression pattern.',
  references: [
    { id: 'R1', source: 'DSM-5-TR', detail: 'Intermittent explosive disorder: Criterion A1 verbal aggression about twice weekly for 3 months or A2 three damaging outbursts in 12 months; not premeditated; not attributable to a substance or another disorder' },
    { id: 'R2', source: 'Hays (Assessment)', detail: 'Risk assessment and separate, private screening of each partner for intimate partner violence, including fear, threats, and access to weapons' },
    { id: 'R3', source: 'ACA Code of Ethics', detail: 'A.4.b personal values; C.2.a boundaries of competence; B.4.b couples and family counseling confidentiality; informed consent for technology-assisted services' },
    { id: 'R4', source: 'Corey (Theory & Practice)', detail: 'Cognitive behavioral approaches to anger: arousal cues, relaxation, time-out, cognitive restructuring; assessing contraindications to conjoint work' },
    { id: 'R5', source: 'Wiger (Documentation)', detail: 'Documenting client-reported medication effects, coordination of care, measurable goals, and medical-necessity support for billed services' },
    { id: 'R6', source: 'HIPAA', detail: 'Privacy Rule: business associate agreements for vendors handling PHI, such as AI documentation tools; disclosures with valid authorization' },
    { id: 'R7', source: 'VA/DoD CPG', detail: 'Lethal means counseling: collaborative, voluntary reduction of firearm access during periods of elevated risk' },
  ],
  questions: [
    Q('q1', 'profdev', 'The counselor feels her chest tighten and silently hopes Leah will “get out.” What should she do first?', ['R3'], 'b', [
      O('Recognize the reaction as tied to her own history and bring it to supervision so it does not shape her assessment.', 3,
        'Self-reflection plus supervision', 'Identify and manage countertransference', 'A strong personal reaction rooted in the counselor’s history can bias risk and treatment decisions; naming it and taking it to supervision protects both partners', ['father’s rages', 'silently hopes Leah will leave'], 'Acting on a personal reaction instead of examining it'),
      O('Disclose her childhood experience to the couple so they understand why she will watch Hiro’s anger closely in sessions.', -1,
        'Self-disclosure serves the counselor', 'Self-disclosure framing', 'Sharing her history meets the counselor’s need, not the couple’s, and may align her with Leah from the start', ['no clinical purpose for the disclosure'], 'Using self-disclosure to manage the counselor’s own discomfort'),
      O('Quietly encourage Leah in her individual interview to consider separating, since rages like Hiro’s rarely change.', -2,
        'Imposes the counselor’s values', 'Rescuer framing', 'Steering a client toward divorce from personal history imposes values, ignores Leah’s autonomy, and is not supported by the assessment', ['Leah wants joint work', 'assessment not yet done'], 'Letting personal experience dictate a client’s life decisions'),
      O('Refer the couple to a colleague at once, since any personal reaction to a client means she cannot stay objective with them.', 0,
        'Referral is premature', 'Automatic-referral framing', 'Personal reactions are common and are first managed through reflection and supervision; referral is reserved for impairment that cannot be managed', ['reaction noticed early'], 'Treating every countertransference reaction as requiring referral'),
    ]),
    Q('q2', 'assess', 'Which finding most directly supports the given diagnosis of intermittent explosive disorder?', ['R1'], 'd', [
      O('Verbal outbursts about twice weekly for years, far out of proportion to minor triggers, unplanned, with no gain sought.', 3,
        'Matches Criterion A1 plus B and C', 'Confirm the core criteria', 'IED is defined by recurrent verbal aggression averaging twice weekly for 3 months, out of proportion to provocation, not premeditated or goal-directed', ['two to three outbursts a week', 'late dinner as trigger'], 'Diagnosing from one dramatic event instead of the recurrent pattern'),
      O('One episode of punching the garage drywall, which by itself meets the property-damage criterion for this diagnosis.', -1,
        'One event does not meet A2', 'Single-event framing', 'Criterion A2 requires three outbursts involving damage or injury within 12 months; one punch does not meet it', ['no other property damage'], 'Misreading the frequency threshold for damaging outbursts'),
      O('His shame and apologies after each outburst, which show the anger is out of character rather than part of his personality.', 0,
        'Remorse is common, not a criterion', 'Remorse framing', 'Regret after outbursts is typical of IED but is not what establishes the diagnosis; frequency, proportion, and lack of premeditation do', ['feels ashamed afterward'], 'Using an associated feature in place of the defining criteria'),
      O('His weekend beer use, since outbursts that occur in the context of alcohol are what define this diagnosis in adult men.', -2,
        'Reverses the exclusion criterion', 'Substance framing', 'IED requires that outbursts are not attributable to a substance; linking them to alcohol would argue against, not for, the diagnosis', ['two beers on some weekends', 'outbursts not tied to drinking'], 'Reversing the substance exclusion in the criteria'),
    ]),
    Q('q3', 'assess', 'Before any conjoint session, how should the counselor screen for intimate partner violence?', ['R2'], 'a', [
      O('Interview each partner alone with direct behavioral questions about physical harm, threats, fear, and access to weapons.', 3,
        'Separate, direct, behavioral screening', 'Private IPV screen', 'Partners can disclose violence safely only when interviewed alone; behaviorally specific questions about acts, fear, and weapons detect risk that general questions miss', ['practice policy of individual interviews', 'rifle in the garage'], 'Screening with both partners present'),
      O('Ask about violence in the first joint session so both partners can hear each other’s account and correct any distortions.', -2,
        'Joint screening endangers the victim', 'Joint-disclosure framing', 'Asking in front of a possibly abusive partner silences disclosure and can trigger retaliation after the session', ['Leah edits what she says around him'], 'Screening for violence with both partners in the room'),
      O('Have both partners fill out a written conflict questionnaire together in the waiting room before their first session.', -1,
        'Completed together, it is not private', 'Shared-form framing', 'A questionnaire completed side by side has the same safety problem as a joint interview, even if the tool itself is sound', ['partners present together'], 'Assuming a written format removes the need for privacy'),
      O('Ask Leah alone a single general question about whether she feels safe at home, and screen further only if she says no.', 0,
        'Private but too thin', 'Single-question framing', 'Seeing her alone is right, but one global question misses specific acts, fear, and weapon access, and Hiro is not screened', ['behaviorally specific questions needed'], 'Relying on one global safety question'),
    ]),
    Q('q4', 'profdev', 'The counselor has couples training but none in screening for or treating intimate partner violence. What is most appropriate?', ['R3'], 'c', [
      O('Obtain consultation and IPV-specific training while proceeding cautiously, and refer if competence cannot be built in time.', 3,
        'Consult, train, refer if needed', 'Build competence responsibly', 'Counselors practice within competence and gain training and consultation when entering a new area; referral is the fallback if that is not enough', ['no IPV training', 'violence risk factors present'], 'Either ignoring the gap or abandoning the clients'),
      O('Proceed with standard conjoint therapy, since general couples skills are enough for a couple who both want to stay together.', -2,
        'Ignores a competence gap with safety stakes', 'Generalist framing', 'IPV changes assessment, sequencing, and safety planning; untrained conjoint work can increase danger', ['rifle at home', 'IPV not yet assessed'], 'Assuming couples skills cover violence-related risk'),
      O('Decline the case outright and hand the couple a list of names, since she has no training of her own in this area.', -1,
        'Abrupt referral without support', 'Refer-out framing', 'A competence gap can often be closed with consultation; dropping the couple with a list risks losing them during a risky period', ['couple already engaged'], 'Treating any training gap as a reason to end care'),
      O('Rely on the practice’s intake screening form to flag any violence, so that her own sessions can focus on communication.', 0,
        'Delegates a core assessment task', 'Form-reliance framing', 'Forms can help, but the counselor remains responsible for competent IPV assessment and for how it shapes treatment', ['counselor responsibility'], 'Letting a form substitute for clinical competence'),
    ]),
    Q('q5', 'indirect', 'Hiro feels “a little flat” and sleeps poorly since starting fluoxetine and has not told his physician. The counselor should:', ['R5'], 'c', [
      O('Document his self-reported effects in his own words and, using his signed release, share them with his physician.', 3,
        'Document and coordinate', 'Record and communicate medication effects', 'Counselors document client-reported medication effects and, with consent, relay them to the prescriber, who decides on any change', ['signed release', 'side effects not yet reported'], 'Either advising on medication or leaving the prescriber uninformed'),
      O('Advise him to stop the fluoxetine, since side effects like these show that the medication is not right for his outbursts.', -2,
        'Medication advice is outside scope', 'Prescriber framing', 'Telling a client to stop a prescribed medication is outside counselor scope and could cause discontinuation effects', ['counselor scope'], 'Giving medication advice instead of coordinating with the prescriber'),
      O('Note that he mentioned side effects and encourage him to raise them with his physician at his next scheduled visit.', 0,
        'Right direction, too passive', 'Client-relay framing', 'Encouraging him is fine, but a release is already signed and documentation plus direct coordination closes the loop sooner', ['release on file'], 'Leaving coordination entirely to the client'),
      O('Reassure him the effects will fade in a few weeks and leave the medication question for his next routine physical.', -1,
        'Reassurance outside scope', 'Wait-it-out framing', 'The counselor cannot predict medication course, and delaying communication leaves the prescriber without needed information', ['four weeks on fluoxetine'], 'Offering medical reassurance the counselor cannot give'),
    ]),
    Q('q6', 'planning', 'Leah still wants joint sessions “so we can fix this together.” What is the most appropriate plan now?', ['R4', 'R2'], 'a', [
      O('Start individual anger treatment for Hiro and safety support for Leah, deferring conjoint work until violence has stopped.', 3,
        'Conjoint work is contraindicated for now', 'Assess contraindications', 'Physical aggression and fear of a partner are contraindications to conjoint therapy until violence has ceased and each partner can speak freely and safely', ['wrist grab with bruise', '“walks on eggshells”'], 'Starting couples work before the violence and fear are addressed'),
      O('Begin weekly conjoint sessions now, since both partners want them and his admission shows the violence has been resolved.', -2,
        'Admission is not resolution', 'Readiness framing', 'Acknowledging one act does not make conjoint sessions safe; Leah still edits what she says and outbursts continue weekly', ['outbursts unchanged', 'Leah edits her speech'], 'Treating a partner’s admission as evidence that risk has passed'),
      O('Offer a short communication workshop for the couple now, adding individual anger work for Hiro if the outbursts go on.', -1,
        'Wrong sequence', 'Communication-first framing', 'Framing aggression as a shared communication problem places the work on the couple and delays the individual treatment Hiro needs', ['aggression is Hiro’s behavior'], 'Treating aggression as a mutual communication deficit'),
      O('Refer Hiro to a batterer intervention group and close the case for the couple until he has completed that program.', 0,
        'Partial fit, loses the clinical work', 'Program-only framing', 'Some programs may help, but Hiro has a diagnosable disorder that calls for individual treatment, and Leah needs ongoing safety support', ['IED diagnosis', 'Leah wants support'], 'Closing the case instead of sequencing care'),
    ]),
    Q('q7', 'indirect', 'The counselor’s referral list still shows the domestic violence program’s old hotline. What should she do for Leah?', ['R2'], 'd', [
      O('Verify the current number, update her referral list, and with Leah’s consent connect her to a domestic violence advocate.', 3,
        'Current resources and a warm link', 'Maintain referral resources', 'An updated list and a direct link to a community advocate give Leah safety-planning support beyond the counseling room', ['hotline number changed', 'Leah edits what she says'], 'Giving a victim outdated or unusable resources'),
      O('Give Leah the list as it stands and suggest she search online for the program if the hotline turns out to be out of date.', 0,
        'Shifts the burden to the client', 'As-is framing', 'The counselor knows the number is outdated; handing it over anyway risks Leah reaching a dead line when she needs help', ['outdated hotline'], 'Not maintaining an accurate referral list'),
      O('Ask Hiro to pass the program’s information along to Leah, since he has already acknowledged grabbing her during a fight.', -2,
        'Routes safety resources through the aggressor', 'Messenger framing', 'Giving DV resources through the partner who used violence reveals her disclosure and can increase her danger', ['Leah asked that Hiro not know'], 'Breaching a victim’s confidence and safety'),
      O('Skip outside referrals for now, since Leah says she is not afraid for her life and would rather work things out jointly.', -1,
        'Underestimates ongoing risk', 'Minimization framing', 'Not fearing for her life does not mean she lacks safety needs; advocacy supports her regardless of whether she stays', ['bruise last spring', 'rifle at home'], 'Equating no fear of death with no need for support'),
    ]),
    Q('q8', 'planning', 'Which goal for Hiro is written in the most useful SMART form?', ['R5'], 'b', [
      O('Within 8 weeks, cut outbursts from about three a week to one or fewer, tracked in a daily anger log reviewed each session.', 3,
        'Specific, measurable, time-bound', 'SMART goal', 'The goal names a baseline, a realistic target, a time frame, and a measure Hiro owns and reviews in session', ['three outbursts last week', 'anger log'], 'Writing goals that cannot be measured'),
      O('Within 8 weeks, Hiro will understand his anger triggers better and feel more in control during arguments at home.', 0,
        'Not measurable', 'Global-goal framing', 'Understanding and feeling in control are worthwhile but cannot be counted or checked against a baseline', ['no measure named'], 'Confusing a broad aim with a measurable objective'),
      O('Hiro will stop raising his voice at home entirely, starting this week, beginning with the very next disagreement.', -1,
        'Not attainable', 'Perfection framing', 'Immediate, total elimination sets him up to fail and leaves no room for graded progress', ['three outbursts a week now'], 'Setting an unrealistic all-or-nothing target'),
      O('Leah will track and report each of Hiro’s outbursts at every session so that the counselor can hold him accountable.', -2,
        'Makes the victim the monitor', 'Partner-monitor framing', 'Assigning Leah to monitor and report him places her in danger and shifts responsibility from Hiro to her', ['wrist grab', 'limited-secrets policy'], 'Making the at-risk partner responsible for the aggressor’s change'),
    ]),
    Q('q9', 'interventions', 'Hiro’s log shows jaw tension and the thought “nobody respects my time” before outbursts. Which intervention fits best?', ['R4'], 'a', [
      O('Use the log to build an early-cue plan: relaxation at the first jaw tension, a structured time-out, and testing the thought.', 3,
        'Cue-based CBT for anger', 'Implement an empirically supported intervention', 'CBT for anger links early physical cues and hot thoughts to coping steps: arousal reduction, time-out, and cognitive restructuring', ['jaw tension', '“nobody respects my time”'], 'Not using the client’s own data to target the cycle'),
      O('Teach general stress management such as exercise and better sleep, and come back to the anger log once those are in place.', 0,
        'Helpful but indirect', 'General-wellness framing', 'Lifestyle changes may help arousal, but they do not target the identified cue-thought-outburst chain', ['specific cues already logged'], 'Delaying targeted skills for general ones'),
      O('Encourage him to vent his anger fully by hitting a punching bag whenever he feels tense, so that it does not build up.', -1,
        'Catharsis tends to increase anger', 'Venting framing', 'Rehearsing aggressive release tends to strengthen anger responses rather than drain them', ['punched drywall last spring'], 'Believing venting reduces aggression'),
      O('Advise him to stay and talk each argument through until it is settled, since leaving the room is a form of avoidance.', -2,
        'Blocks the key safety skill', 'Stay-and-resolve framing', 'Staying in an escalating argument removes the time-out that prevents aggression and raises risk to Leah', ['wrist grab during an argument'], 'Discouraging time-outs in a case with physical aggression'),
    ]),
    Q('q10', 'interventions', 'Hiro agrees to talk about the deer rifle kept in an unlocked garage cabinet. What is the counselor’s best approach?', ['R7', 'R2'], 'c', [
      O('Explore storing the rifle in his brother’s gun safe while treatment goes on, framed as family safety, and confirm the plan.', 3,
        'Collaborative lethal means counseling', 'Reduce access voluntarily', 'Temporary off-site storage with a trusted person reduces risk during a period of aggression and is most effective when collaborative and specific', ['unlocked cabinet', 'brother has a gun safe'], 'Skipping firearm access when violence is present'),
      O('Suggest he buy a trigger lock and keep the rifle at home, since he denies having it out during any of their arguments.', 0,
        'Partial step', 'Lock-at-home framing', 'A lock helps, but off-site storage during treatment reduces access more, and his denial alone does not settle the risk', ['wrist grab', 'weekly outbursts'], 'Accepting the smallest step when a stronger one is available'),
      O('Leave the topic for later sessions, since raising firearms now could make him defensive and strain the new alliance.', -1,
        'Delays a safety step', 'Alliance-first framing', 'He has already agreed to discuss it; postponing leaves an unsecured firearm in a home with recent physical aggression', ['he agreed to talk about it'], 'Putting rapport ahead of addressing lethal means'),
      O('Tell him that the counselor must report the rifle to police unless he gets rid of it, given the wrist-grabbing incident.', -2,
        'Coercive and legally inaccurate', 'Threat framing', 'There is no general duty to report lawful firearm ownership; threats damage trust and make him less likely to disclose risk', ['voluntary engagement'], 'Using false legal threats instead of collaboration'),
    ]),
    Q('q11', 'legal', 'Hiro asks, “Did Leah tell you about the wrist thing?” Under the limited-secrets policy, the counselor should:', ['R3'], 'b', [
      O('Decline to share what Leah said alone, restate the policy, and invite Hiro to describe the incident in his own words.', 3,
        'Follow the agreed policy', 'Adhere to informed-consent policy', 'Under the policy reviewed at intake, individual disclosures stay private unless the partner consents; inviting his account keeps the work focused on him', ['Leah asked that he not know', 'policy explained at intake'], 'Breaking the agreed confidentiality structure'),
      O('Confirm that Leah raised it, since he already admitted the grab and honesty between the partners is the goal of counseling.', -2,
        'Breaches Leah’s confidence', 'Transparency framing', 'Confirming her disclosure breaks the policy and her explicit request and can expose her to retaliation', ['Leah’s request', 'limited-secrets policy'], 'Disclosing one partner’s confidences to the other'),
      O('End the individual session and set a joint meeting so that Leah can answer his question directly with him there.', -1,
        'Puts Leah on the spot', 'Joint-answer framing', 'Forcing the question into a joint session pressures Leah to confirm or deny in front of him, which is unsafe', ['IPV disclosed privately'], 'Moving a safety-sensitive issue into a joint session'),
      O('Tell him the counselor cannot discuss Leah at all and move straight on to reviewing his anger log for the week.', 0,
        'Right boundary, poorly handled', 'Deflect framing', 'Protecting Leah is right, but restating the policy and inviting his own account is more therapeutic than a flat shutdown', ['his own admission'], 'Holding the boundary without using the moment'),
    ]),
    Q('q12', 'legal', 'Leah writes that she did not know the AI note tool was recording and would not have spoken freely. The counselor should:', ['R6', 'R3'], 'd', [
      O('Pause the tool, explain what it records and keeps, obtain each partner’s explicit consent or opt-out, and document it.', 3,
        'Specific informed consent for AI tools', 'Use AI within practice ethically', 'AI tools that capture session audio require clear, specific informed consent from each participant and a right to decline; a one-line form mention is not enough', ['one line in the consent form', 'Leah unaware'], 'Treating a buried form clause as informed consent'),
      O('Explain that the one-line notice in the intake forms covered the tool, and offer to delete any recording she worries about.', 0,
        'Relies on inadequate consent', 'Form-covered framing', 'Offering deletion helps, but the consent was not meaningful; the tool needs specific consent before further use', ['Leah did not know'], 'Defending the original consent instead of fixing it'),
      O('Keep the tool running but avoid saying anything sensitive aloud in sessions, so that the drafted notes stay clinically clean.', -1,
        'Distorts the counseling', 'Work-around framing', 'Censoring sessions to suit a recording tool harms care and still ignores Leah’s lack of consent', ['IPV content in sessions'], 'Adapting the counseling to the tool instead of the reverse'),
      O('Tell her AI tools are now standard and HIPAA-compliant by default, so her consent to recording is not needed going forward.', -2,
        'False and dismissive', 'Compliance-by-default framing', 'No tool is compliant by default; vendors need agreements and clients need informed consent, especially in a case with safety concerns', ['IPV disclosures'], 'Assuming technology compliance removes consent duties'),
    ]),
    Q('q13', 'legal', 'Leah asks whether her individual safety-planning sessions can be billed to Hiro’s insurance. The counselor should:', ['R5', 'R3'], 'a', [
      O('Explain that her sessions cannot be billed under Hiro’s diagnosis, and discuss a sliding fee or free advocacy services.', 3,
        'Accurate billing, alternatives offered', 'Ensure claims match documentation', 'Claims must reflect the person treated and a documented diagnosis; Leah’s sessions are not treatment of Hiro’s disorder', ['Leah has no diagnosis', 'individual sessions'], 'Billing one person’s services under another’s diagnosis'),
      O('Bill her sessions as part of Hiro’s IED treatment, since her safety planning is a direct result of his outbursts at home.', -2,
        'Misrepresents services to an insurer', 'Causal-link framing', 'Linking her need to his behavior does not make her sessions his treatment; billing them that way is a false claim', ['Leah attends alone'], 'Rationalizing a misleading claim'),
      O('Waive her fees without telling the practice, since safety planning is too important to delay over a billing question.', 0,
        'Good intent, bypasses policy', 'Quiet-waiver framing', 'Reduced fees can be appropriate, but they should follow practice policy rather than be arranged privately', ['practice billing policy'], 'Solving a billing issue outside practice procedures'),
      O('Postpone her safety-planning sessions until the billing question is settled with the insurer, to avoid unpaid sessions.', -1,
        'Delays safety support', 'Payment-first framing', 'Holding safety planning for a billing answer leaves her without support while risk factors remain', ['bruise last spring', 'rifle at home'], 'Putting payment ahead of client safety'),
    ]),
  ],
};

// ============================================================================
// D966 — Oppositional Defiant Disorder (child, medium)
// Complications: ADHD differential needing a discriminator; blended-family and
// custody facts that change consent, discipline roles, and record access.
// ============================================================================
const D966 = {
  id: 'ncmhce-D966',
  plan: 6,
  population: 'child',
  title: 'A seventh grader’s battles with her stepfather and two teachers reach the school-based counselor',
  category: 'Disruptive',
  difficulty: 'medium',
  primaryDiagnosis: { name: 'Oppositional Defiant Disorder', code: 'F91.3' },
  diagnosis: { name: 'Oppositional Defiant Disorder', code: 'F91.3' },
  differentialOptions: [
    { id: 'do1', name: 'Attention-Deficit/Hyperactivity Disorder, Combined Presentation', isCorrect: false },
    { id: 'do2', name: 'Adjustment Disorder, with Disturbance of Conduct', isCorrect: false },
    { id: 'do3', name: 'Oppositional Defiant Disorder', isCorrect: true },
    { id: 'do4', name: 'Conduct Disorder, Childhood-Onset Type', isCorrect: false },
  ],
  narrative: {
    intake:
      'Noor Haddad, a 12-year-old Lebanese American seventh grader, is referred by her assistant principal after a third in-school suspension this semester. ' +
      'She is seen by a licensed counselor employed by a community mental health agency that provides school-based services at her middle school under ' +
      'contract; the agency is a HIPAA-covered provider that bills insurers electronically and keeps its own clinical records, separate from school files and not maintained or controlled by the school. Noor’s mother, Rania, a dental hygienist, remarried 18 months ago to ' +
      'Curtis Bell, a Black American city bus mechanic, whose son Malik, 9, lives with them. Noor’s father, Sami Haddad, lives in Michigan and shares joint ' +
      'legal custody under the divorce decree. For about 14 months Noor has lost her temper several times a week, argued with and refused requests from ' +
      'Curtis and her math and science teachers, hidden Malik’s things on purpose to annoy Curtis, and blamed others for her mistakes (“Mr. K hates me”). ' +
      'Teacher Vanderbilt rating scales from two teachers show inattention and hyperactivity items in the normal range, and she completes work and gets ' +
      'along with her art and English teachers. She has no history of aggression toward people or animals, property destruction, theft, or running away. ' +
      'Rania arrives with Curtis, who says he can sign the consent forms “since I’m her dad now.” The school psychologist offers the counselor a BASC-3 kit, ' +
      'a test the counselor has never been trained to administer or interpret. The family attends a Maronite Catholic parish; assuming the family was ' +
      'Muslim, the counselor asked whether Noor’s outbursts were worse during Ramadan, and Rania stiffened.',
    session1:
      'Rania says Curtis took over enforcing rules soon after the wedding, often taking Noor’s phone for “attitude,” and that the arguments with him are the ' +
      'worst part of every evening. Noor’s grandmother, Teta Mariam, watches the children after school, speaks mainly Arabic, and reportedly finds Noor ' +
      'respectful with her; the counselor wants her input on afternoons at home, and Noor offers to translate. Rania signs a release allowing the counselor to ' +
      'share treatment-relevant information with Noor’s teachers. Noor’s math teacher, Mr. Kowalczyk, emails asking for “anything that works” and offers to ' +
      'use a daily behavior chart. Noor’s father has not been contacted.',
    session2:
      'Noor says, “Curtis isn’t my dad. He can’t tell me what to do,” then describes a shouting match over chores that ended with her phone taken for a ' +
      'week. The assistant principal asks the counselor for a copy of her session notes for Noor’s disciplinary file before a hearing. Sami calls from ' +
      'Michigan asking how his daughter’s counseling is going; Rania has asked the counselor not to speak with him, and the counselor has not seen any court ' +
      'order limiting his rights. Midway through a session with Noor, the school announces a lockdown.',
  },
  diagnosticRationale:
    'For about 14 months Noor has shown angry/irritable mood (frequent loss of temper), argumentative/defiant behavior (arguing with and refusing adult ' +
    'requests, blaming others), and vindictiveness (deliberately hiding her stepbrother’s belongings to annoy her stepfather), with at least four symptoms ' +
    'directed at people other than a sibling and impairment at home and school. Teacher ratings show no inattentive or hyperactive pattern and her ' +
    'difficulties are selective to particular adults, arguing against ADHD. There is no aggression to people or animals, destruction, theft, or serious ' +
    'rule violation, so conduct disorder is not met. The pattern exceeds an adjustment reaction in duration and meets full criteria for another disorder. ' +
    'Symptoms in two settings indicate moderate severity.',
  references: [
    { id: 'R1', source: 'DSM-5-TR', detail: 'Oppositional defiant disorder: four or more symptoms from angry/irritable, argumentative/defiant, and vindictive clusters for 6 months with at least one non-sibling; severity by number of settings; differential with ADHD and conduct disorder' },
    { id: 'R2', source: 'ACA Code of Ethics', detail: 'A.2.d inability to give consent (minors, assent, parental involvement); B.5.b responsibility to parents and legal guardians; C.2.a boundaries of competence; multicultural competence' },
    { id: 'R3', source: 'Hays (Assessment)', detail: 'Competence to administer and interpret instruments; multi-informant child assessment using parent and teacher rating scales' },
    { id: 'R4', source: 'Corey (Theory & Practice)', detail: 'Behavioral parent training, problem-solving skills training, family systems work in stepfamilies; core skills of reflection and empathy' },
    { id: 'R5', source: 'HIPAA', detail: 'Privacy Rule: health records of a covered provider versus FERPA education records; authorization requirements; parents as personal representatives of minors' },
    { id: 'R6', source: 'State law', detail: 'Consent to treatment of minors, rights of a parent with joint legal custody to a child’s health information, and school emergency (lockdown) procedures' },
    { id: 'R7', source: 'NBCC 2027 Spec', detail: 'Indirect client care: translation services for preferred language; collaboration with support systems and non-clinical stakeholders; emergency preparedness' },
  ],
  questions: [
    Q('q1', 'assess', 'Curtis says he can sign the consent forms “since I’m her dad now.” How should consent for Noor’s counseling be obtained?', ['R2', 'R6'], 'c', [
      O('Rania, as a legal parent, gives informed consent after the counselor checks the decree for Sami’s rights, and Noor gives assent.', 3,
        'Legal parent consents; minor assents', 'Obtain valid consent and assent', 'A stepparent without guardianship lacks legal authority to consent; a legal parent consents, custody terms are checked, and the minor’s assent is sought', ['joint legal custody', 'stepfather not a guardian'], 'Accepting consent from someone without legal authority'),
      O('Rania gives consent and Noor gives assent, and the custody decree can be looked at later if Sami ever asks about her care.', 0,
        'Valid consent, incomplete review', 'Defer-the-decree framing', 'Rania’s consent is valid, but with joint legal custody the decree should be reviewed at the start because it shapes consent and information rights', ['divorce decree', 'father in Michigan'], 'Leaving custody terms unreviewed until a conflict arises'),
      O('Curtis and Rania both sign as parents, since a stepparent who lives in the home shares legal authority over Noor’s care.', -1,
        'Misstates stepparent authority', 'Household framing', 'Living in the home does not give a stepparent legal authority; Rania’s signature is what makes consent valid', ['no adoption or guardianship'], 'Equating household role with legal authority'),
      O('Curtis signs alone today, and Noor’s assent is skipped since she was referred by the school for disciplinary reasons.', -2,
        'Invalid consent and no assent', 'Convenience framing', 'Consent from a person without legal authority is invalid, and a disciplinary referral does not remove the minor’s right to assent', ['Rania present', 'minor client'], 'Proceeding without valid consent or assent'),
    ]),
    Q('q2', 'profdev', 'The school psychologist offers a BASC-3 kit that the counselor has never been trained to give or interpret. She should:', ['R3', 'R2'], 'a', [
      O('Use only measures within her training, such as the teacher Vanderbilt scales, and ask the psychologist to give the BASC-3.', 3,
        'Practice within assessment competence', 'Determine competency for assessments', 'Counselors use only instruments they are trained to administer and interpret, and collaborate with qualified colleagues for others', ['never trained on the BASC-3', 'Vanderbilt scales available'], 'Using an instrument without training'),
      O('Administer and interpret the BASC-3 herself by following the manual, since behavior rating scales are simple to score.', -2,
        'Outside assessment competence', 'Self-teach framing', 'Reading the manual is not training; misinterpreted results could mislabel a child and misdirect treatment', ['no training'], 'Assuming rating scales need no training'),
      O('Have Noor complete the BASC-3 self-report now and set the results aside until she has time to learn the scoring system.', -1,
        'Gives a test she cannot use', 'Collect-now framing', 'Administering a test with no competent interpretation burdens the client and creates records no one can properly use', ['no scoring competence'], 'Collecting data she is not qualified to interpret'),
      O('Decline any standardized measures and rely on her clinical interview alone, since she is not trained in the offered test.', 0,
        'Overcorrects', 'Interview-only framing', 'Lacking training in one test does not rule out measures she is trained in; multi-informant ratings strengthen the assessment', ['Vanderbilt scales already used'], 'Dropping structured measures because of one gap'),
    ]),
    Q('q3', 'assess', 'Which finding best supports oppositional defiant disorder over ADHD as the explanation for Noor’s school problems?', ['R1'], 'd', [
      O('Her defiance is aimed at certain adults, and teacher ratings show inattention and hyperactivity items in the normal range.', 3,
        'Selective defiance, normal ADHD ratings', 'Apply the discriminator', 'ADHD shows inattention or hyperactivity across settings; ODD is a pattern of anger and defiance aimed at particular authority figures', ['normal Vanderbilt items', 'fine in art and English'], 'Reading defiance as inattention without rating data'),
      O('She works well in her art and English classes, which suggests her school problems come from teacher conflict, not attention.', 0,
        'One data point, incomplete', 'Single-setting framing', 'Her good classes are relevant, but the teacher ratings are the stronger discriminator; class performance alone can vary for many reasons', ['two teacher ratings'], 'Relying on one observation instead of the rating data'),
      O('Her problems began after her mother’s remarriage, so the behavior is a reaction to family change rather than a disorder.', -1,
        'Onset does not rule out a disorder', 'Stressor framing', 'A stressor can precede ODD; 14 months of symptoms meeting full criteria is not an adjustment reaction', ['14 months of symptoms'], 'Assuming a clear trigger means no disorder'),
      O('She hides her stepbrother’s things on purpose, which points to emerging conduct disorder rather than either ODD or ADHD.', -2,
        'Overpathologizes vindictiveness', 'Escalation framing', 'Spiteful acts are part of ODD’s vindictive cluster; conduct disorder requires aggression, destruction, deceit or theft, or serious rule violations', ['no aggression or theft'], 'Misreading an ODD symptom as conduct disorder'),
    ]),
    Q('q4', 'profdev', 'Assuming the family was Muslim, the counselor asked about Ramadan, and Rania stiffened. What is the best next step?', ['R2'], 'b', [
      O('Acknowledge the error to Rania, ask about the family’s faith and culture, and reflect on and seek training about her assumptions.', 3,
        'Repair and build cultural competence', 'Self-reflection and cultural training', 'Owning an assumption, learning from the family, and seeking training address both the rupture and its source', ['Maronite Catholic parish', 'Rania stiffened'], 'Moving on without addressing a cultural misstep'),
      O('Let the moment pass without comment and avoid religious topics with the family for the rest of their time in counseling.', -1,
        'Avoidance leaves the rupture', 'Avoid-the-topic framing', 'Avoiding faith entirely leaves the misstep unrepaired and removes a part of the family’s life from the work', ['faith community involvement'], 'Treating culture as a topic to avoid'),
      O('Apologize briefly and move on, assuming one corrected mistake is enough and her general cultural knowledge is adequate.', 0,
        'Repair without reflection', 'Quick-fix framing', 'An apology helps, but the assumption came from a gap the counselor should examine and address through training', ['assumption based on ethnicity'], 'Fixing the moment without examining the bias'),
      O('Explain to Rania that most Lebanese families are Muslim, so the question was reasonable and she need not take offense.', -2,
        'Defends a stereotype', 'Justification framing', 'Justifying the assumption with a generalization compounds the harm and invalidates the family’s identity', ['Maronite Catholic family'], 'Defending a stereotype instead of repairing'),
    ]),
    Q('q5', 'planning', 'Which initial treatment plan best fits Noor’s oppositional defiant disorder?', ['R4'], 'a', [
      O('Parent management training with Rania and Curtis, problem-solving skills work with Noor, and a shared school behavior plan.', 3,
        'Parent training plus youth skills', 'Develop an initial plan', 'Parent management training is the best-supported treatment for ODD; adding problem-solving work for a preteen and a school plan covers both settings', ['symptoms at home and school', 'conflict with stepfather'], 'Treating the child alone for a family-maintained pattern'),
      O('Weekly individual sessions with Noor on anger and problem solving, with her parents updated by phone once a month.', 0,
        'Omits parent training', 'Child-only framing', 'Individual skills help, but leaving out parent training misses the most effective component', ['home conflict drives evenings'], 'Leaving parents at the margins of ODD treatment'),
      O('Refer Noor for a stimulant medication evaluation first, since defiance in school usually reflects untreated attention problems.', -1,
        'Wrong framework', 'ADHD-first framing', 'Her ratings show no ADHD pattern; a stimulant referral treats a disorder she does not show', ['normal Vanderbilt items'], 'Applying an ADHD plan to ODD'),
      O('Recommend a strict, zero-tolerance routine at home enforced by Curtis, with growing punishments for each refusal.', -2,
        'Escalates the coercive cycle', 'Punishment framing', 'Harsh, escalating punishment from a new stepparent intensifies coercive cycles and damages the relationship', ['phone taken for “attitude”', 'conflict with stepfather'], 'Using escalating punishment as the main tool'),
    ]),
    Q('q6', 'indirect', 'Mr. Kowalczyk asks for “anything that works” and offers a daily chart. With Rania’s release, the counselor should:', ['R4', 'R2'], 'c', [
      O('Share only needed treatment goals and co-design a daily report card with clear targets and praise for success.', 3,
        'Minimum necessary, shared plan', 'Collaborate with support systems', 'Consistent targets and positive feedback across settings support ODD treatment; sharing only what is needed respects privacy', ['release for teachers', 'teacher offered a chart'], 'Either over-sharing or not collaborating'),
      O('Thank him and suggest he read about classroom strategies for defiant students until her treatment plan is complete.', 0,
        'Misses a ready partner', 'Wait framing', 'The teacher is willing now; delaying collaboration loses consistency across settings', ['teacher request'], 'Not using an available collaborator'),
      O('Send him her full intake summary, including family history and the remarriage conflict, so he understands the context.', -1,
        'Over-discloses', 'Full-context framing', 'The release covers treatment-relevant information; family history beyond that exceeds what he needs', ['release scope'], 'Ignoring the minimum necessary standard'),
      O('Advise him to send Noor out of class at the first sign of defiance, so her refusals stop disrupting the other students.', -2,
        'Reinforces escape and suspensions', 'Removal framing', 'Removal at the first sign rewards avoidance and feeds the suspension cycle that brought her to counseling', ['three suspensions'], 'Recommending a strategy that reinforces defiance'),
    ]),
    Q('q7', 'indirect', 'The counselor wants Teta Mariam’s input on afternoons at home, and Noor offers to translate. The counselor should:', ['R7'], 'b', [
      O('Arrange a qualified Arabic interpreter for a call with Teta Mariam rather than having Noor interpret about herself.', 3,
        'Qualified interpreter', 'Secure translation services', 'A trained interpreter gives accurate, neutral communication; a child should not interpret information about herself', ['Teta speaks mainly Arabic', 'Noor offered'], 'Using the client as interpreter'),
      O('Ask Rania to interpret for Teta Mariam, since she is a parent and is fluent in both Arabic and English at home.', 0,
        'Family interpreter has limits', 'Family-interpreter framing', 'Rania is a better choice than Noor, but a family member may filter what is said; a qualified interpreter is best practice', ['family conflict'], 'Assuming fluency equals neutral interpreting'),
      O('Skip Teta Mariam’s input, since her report that Noor is respectful at home probably reflects a language barrier.', -1,
        'Dismisses a key informant', 'Discount framing', 'Teta’s view adds an important contrast; language is a reason to provide an interpreter, not to exclude her', ['respectful with grandmother'], 'Excluding informants who speak another language'),
      O('Let Noor translate the call, since she is fluent and having her there may help her feel included in the treatment plan.', -2,
        'Child interprets about herself', 'Inclusion framing', 'A minor interpreting reports about her own behavior has every reason to filter them and is placed in an inappropriate role', ['minor client'], 'Using a child as interpreter in her own assessment'),
    ]),
    Q('q8', 'planning', 'How should the plan address Curtis’s role in enforcing rules at home?', ['R4'], 'd', [
      O('Have Rania lead discipline for now while Curtis builds a warm relationship with Noor, with both agreeing on house rules.', 3,
        'Stepfamily-informed roles', 'Integrate family context', 'In newer stepfamilies, the biological parent usually leads discipline while the stepparent builds a bond first, with shared rules', ['married 18 months ago', 'conflict centers on Curtis'], 'Having a new stepparent lead discipline'),
      O('Have Curtis and Rania take turns enforcing rules week by week, so Noor sees that both adults share equal authority.', 0,
        'Equal roles too early', 'Rotation framing', 'Consistency matters, but a new stepparent enforcing half the time keeps him at the center of conflict before a bond exists', ['arguments with Curtis'], 'Ignoring stepfamily development'),
      O('Keep Curtis as the main enforcer but coach him to explain each consequence calmly so that Noor sees the rules as fair.', -1,
        'Keeps the problem structure', 'Better-delivery framing', 'Calmer delivery helps, but leaving the stepparent as primary enforcer maintains the conflict pattern', ['evenings dominated by conflict'], 'Fixing tone while keeping the wrong role'),
      O('Ask Noor to choose which adult she will obey, since giving her that control may lower her need to defy everyone.', -2,
        'Triangulates the child', 'Child-choice framing', 'Letting the child choose whom to obey undermines both adults and splits the parental team', ['parental unity needed'], 'Giving a child authority over the parental hierarchy'),
    ]),
    Q('q9', 'legal', 'The assistant principal asks for a copy of the counselor’s session notes for Noor’s disciplinary file. The counselor should:', ['R5', 'R6'], 'd', [
      O('Explain that agency records are health records under HIPAA, not FERPA education records, and need Rania’s written authorization.', 3,
        'Agency records are not education records', 'Adhere to federal law', 'Records kept by a contracted health care agency are protected health information, not education records; release needs a valid authorization', ['agency keeps its own records', 'release limited to teachers'], 'Treating on-campus health records as school records'),
      O('Give a brief verbal summary of progress instead, since the existing release lets her share some information with the school.', 0,
        'Release does not cover this use', 'Partial-release framing', 'The release covers treatment-relevant sharing with teachers, not disciplinary use by an administrator', ['release scope'], 'Stretching a limited release to a new purpose'),
      O('Ask Noor whether she minds the notes being shared, and send them if she agrees, since she is the client in counseling.', -1,
        'Minor cannot authorize', 'Client-agrees framing', 'A 12-year-old generally cannot authorize release of her health records; her guardian must', ['minor client'], 'Treating a minor’s agreement as valid authorization'),
      O('Send the notes, since FERPA treats everything about a student served on school grounds as part of her education record.', -2,
        'Misapplies FERPA', 'Location framing', 'Where services happen does not decide which law applies; disclosing would violate HIPAA and Noor’s confidentiality', ['agency employee', 'disciplinary hearing'], 'Assuming the school setting makes records FERPA-governed'),
    ]),
    Q('q10', 'interventions', 'Noor says, “Curtis isn’t my dad. He can’t tell me what to do.” Which response best uses core counseling skills?', ['R4'], 'a', [
      O('“It sounds really hard to have someone new making the rules, especially someone who isn’t your dad.”', 3,
        'Reflects feeling and meaning', 'Core skills: reflection', 'Reflecting her experience builds the alliance and opens exploration without endorsing or opposing her stance', ['stepparent conflict', 'loyalty to her father'], 'Moving to persuasion before understanding'),
      O('“Lots of kids in blended families feel that way. What would help you and Curtis get along a little better?”', 0,
        'Normalizes, then jumps to solutions', 'Problem-solving framing', 'Normalizing is fine, but jumping to solutions before reflecting skips her feelings', ['statement of loyalty'], 'Problem-solving before reflecting'),
      O('“Curtis is an adult in your home, so it is important to follow his rules even if he is not your dad.”', -1,
        'Lectures instead of listening', 'Directive framing', 'Taking the adults’ side shuts down exploration and confirms her sense that no one listens', ['defiance toward Curtis'], 'Lecturing a defiant client'),
      O('“You’re right that he isn’t your dad, so you don’t have to listen to him. Let’s talk about your mom.”', -2,
        'Sides with the child against a parent', 'Alliance framing', 'Endorsing defiance undermines the parental team and the treatment plan', ['parent training plan'], 'Joining the child against a caregiver'),
    ]),
    Q('q11', 'interventions', 'Noor describes the chore fight that ended with her phone taken for a week. Which intervention best builds her skills?', ['R4'], 'c', [
      O('Walk through the chore fight step by step to define the problem, list options, weigh them, and rehearse one she picks.', 3,
        'Problem-solving skills training', 'Facilitate skill development', 'Using a real conflict to practice structured problem-solving builds skills she can use the next time', ['recent chore fight'], 'Teaching skills in the abstract'),
      O('Give her a handout on problem-solving steps and ask her to read it at home before their next scheduled session.', 0,
        'Passive and abstract', 'Handout framing', 'Written steps can support practice, but skills develop through guided rehearsal with real examples', ['skill rehearsal needed'], 'Relying on reading in place of practice'),
      O('Have her list every unfair thing Curtis has done so she can vent fully before they think about any solutions.', -1,
        'Venting entrenches grievance', 'Catharsis framing', 'Building a list of grievances strengthens the hostile story rather than building skills', ['conflict with Curtis'], 'Assuming venting reduces conflict'),
      O('Teach her to stay quiet and comply with all adult requests, since arguing is what keeps landing her in suspension.', -2,
        'Suppression, not skills', 'Compliance framing', 'Demanding silent compliance ignores her perspective, does not build skills, and is likely to raise defiance', ['ODD dynamics'], 'Confusing compliance with skill development'),
    ]),
    Q('q12', 'legal', 'Sami calls asking about Noor’s counseling, and Rania has asked the counselor not to speak with him. The counselor should:', ['R6', 'R5', 'R2'], 'b', [
      O('Check the decree and agency policy; unless a court order limits his rights, give Sami the access state law allows.', 3,
        'Follow custody law and policy', 'Adhere to state law', 'A parent with joint legal custody generally keeps rights to a child’s health information unless a court order limits them', ['joint legal custody', 'no limiting order seen'], 'Letting one parent’s wishes override another’s legal rights'),
      O('Honor Rania’s request and tell Sami nothing, since the parent who signed the consent controls all of Noor’s information.', -1,
        'Misstates parental rights', 'Consenting-parent framing', 'Signing consent does not give one parent control over the other parent’s legal rights', ['joint legal custody'], 'Assuming the consenting parent holds all rights'),
      O('Tell Sami she will call back, and ask Rania to talk the matter over with him herself before the counselor responds.', 0,
        'Delays without resolving', 'Defer framing', 'A brief delay to check the decree is fine, but making his access depend on Rania’s talk is not the legal standard', ['custody decree'], 'Routing a legal question through the other parent'),
      O('Tell Sami that Noor is not a client of the agency, to respect Rania’s wishes and avoid a custody dispute.', -2,
        'Lying to a legal parent', 'Deception framing', 'Denying a client relationship to a parent with legal rights is dishonest and may violate law', ['father’s legal rights'], 'Using deception to avoid conflict'),
    ]),
    Q('q13', 'legal', 'A lockdown is announced midway through a session with Noor. What should the counselor do?', ['R6', 'R7'], 'a', [
      O('Follow the school’s lockdown plan: lock the door, turn off lights, keep Noor calm and out of sight until the all clear.', 3,
        'Follow the emergency plan', 'Activate an emergency preparedness plan', 'Counselors working on site follow the building’s emergency procedures and stay with the student until released', ['lockdown announced', 'student in her care'], 'Improvising instead of following the plan'),
      O('Finish the session quietly at the table while waiting for the all clear, since the counseling room is away from the main halls.', 0,
        'Misses required steps', 'Business-as-usual framing', 'Staying put is right, but lockdown steps such as locking, lights out, and staying out of sight are required wherever the room is', ['lockdown procedures'], 'Assuming location exempts her from procedures'),
      O('Call Rania right away to let her know Noor is safe, then follow the lockdown steps once that phone call is finished.', -1,
        'Wrong priority', 'Notify-first framing', 'Parent notification follows school protocol after safety steps; a call first delays protection and may add noise', ['lockdown in progress'], 'Putting notification ahead of protective action'),
      O('Walk Noor back to her classroom quickly so that her teacher can account for her during the lockdown now underway.', -2,
        'Moves a child through halls in a lockdown', 'Return-to-class framing', 'Entering hallways during a lockdown exposes the student and counselor to danger', ['lockdown announced'], 'Leaving a secure room during a lockdown'),
    ]),
  ],
};

// ============================================================================
// D967 — Illness Anxiety Disorder (adult, easy)
// One clear presentation: care-seeking health anxiety with a completed, normal
// medical work-up, no comorbidity, no safety concerns.
// ============================================================================
const D967 = {
  id: 'ncmhce-D967',
  plan: 7,
  population: 'adult',
  title: 'A graphic designer’s calf twitch becomes ten months of searching for ALS',
  category: 'Somatic',
  difficulty: 'easy',
  primaryDiagnosis: { name: 'Illness Anxiety Disorder', code: 'F45.21' },
  diagnosis: { name: 'Illness Anxiety Disorder', code: 'F45.21' },
  differentialOptions: [
    { id: 'do1', name: 'Somatic Symptom Disorder', isCorrect: false },
    { id: 'do2', name: 'Generalized Anxiety Disorder', isCorrect: false },
    { id: 'do3', name: 'Illness Anxiety Disorder', isCorrect: true },
    { id: 'do4', name: 'Obsessive-Compulsive Disorder', isCorrect: false },
  ],
  narrative: {
    intake:
      'Gustavo Ferreira, 29, a Brazilian-born freelance graphic designer who lives alone, is referred by his primary care physician, Dr. Amara Osei, for ' +
      '“health worry.” Ten months ago he noticed a twitch in his left calf, read online that twitching can be an early sign of ALS, and has been convinced ' +
      'he has or will soon develop it. He now spends two to three hours a day researching symptoms, tests his grip strength several times daily, and has ' +
      'seen Dr. Osei six times and a neurologist once; a neurological exam, blood work, and an EMG were normal, and each reassurance calms him for a day or ' +
      'two. The twitch is occasional and painless, and he reports no other physical symptoms. He sleeps well and denies depressed mood, panic attacks, worry ' +
      'about other topics, substance use, and suicidal thoughts. Before the first session he sends three patient-portal messages asking whether a new ' +
      'twitch “sounds like ALS.” Counseling will take place by video from his apartment. The counselor completed graduate CBT coursework but has not ' +
      'treated health anxiety.',
    session1:
      'Gustavo signs a release for Dr. Osei, who calls to say she wants to stop ordering new tests but feels pressured at each visit. He completes a ' +
      'validated health-anxiety questionnaire at baseline and agrees to log his daily checking. He describes a cycle: a twitch, an hour of searching, a grip ' +
      'test, a portal message, brief relief, then a new worry. He says the checking “takes over my day” and he wants to cut it back. The counselor sits down ' +
      'to write her progress note for the session.',
    session2:
      'At the start of the video session Gustavo asks, “Can you just tell me I don’t have ALS? Then I can focus.” He mentions he will spend next month at ' +
      'his sister’s home in another state and wants to keep his video sessions; both states belong to the Counseling Compact, but the counselor holds no ' +
      'license or privilege to practice in his sister’s state. He also asks for a copy of his counseling records to show his sister “what the experts ' +
      'think.” The counselor plans to begin exposure work.',
  },
  diagnosticRationale:
    'For ten months Gustavo has been preoccupied with having or developing ALS, with minimal somatic symptoms (an occasional painless twitch), high anxiety ' +
    'about health, and excessive health-related behavior (hours of searching, repeated grip testing, frequent physician visits) despite a normal ' +
    'neurological work-up. This is the care-seeking type. Somatic symptom disorder is less fitting because distressing somatic symptoms are not the focus; ' +
    'generalized anxiety disorder is ruled out because his worry is confined to illness; and his checking is organized around one illness fear rather than ' +
    'the broader obsessions and compulsions of OCD.',
  references: [
    { id: 'R1', source: 'DSM-5-TR', detail: 'Illness anxiety disorder: preoccupation with having or acquiring a serious illness, somatic symptoms absent or mild, excessive checking or avoidance, 6 months; care-seeking type; differential with somatic symptom disorder' },
    { id: 'R2', source: 'Hays (Assessment)', detail: 'Selecting and interpreting validated screening measures and behavioral baselines; discussing results with clients' },
    { id: 'R3', source: 'Corey (Theory & Practice)', detail: 'Cognitive behavioral therapy: cognitive restructuring, exposure with response prevention, and reducing safety behaviors such as reassurance seeking' },
    { id: 'R4', source: 'ACA Code of Ethics', detail: 'C.2.a boundaries of competence; C.2.b new specialty areas; A.2 informed consent; boundaries of professional contact' },
    { id: 'R5', source: 'Wiger (Documentation)', detail: 'Behaviorally specific progress notes linking observations, interventions, and measurable plans; coordination with medical providers' },
    { id: 'R6', source: 'Counseling Compact', detail: 'Privilege to practice: counselors may serve clients located in another member state only after obtaining that state’s privilege to practice' },
    { id: 'R7', source: 'HIPAA', detail: 'Right of access to the designated record set within required timelines; psychotherapy notes kept separately are excluded' },
    { id: 'R8', source: 'NBCC Code of Ethics', detail: 'Technology-assisted services: informed consent covering risks, privacy, client location, emergency procedures, and service interruptions' },
  ],
  questions: [
    Q('q1', 'profdev', 'The counselor has CBT coursework but has not treated health anxiety. What is the most appropriate step?', ['R4', 'R3'], 'd', [
      O('Review the evidence on CBT for health anxiety and set up consultation with a colleague experienced in this treatment.', 3,
        'Build knowledge and consult', 'Develop knowledge of supported approaches', 'Counselors new to a population build knowledge of empirically supported treatment and obtain consultation while providing care', ['CBT coursework', 'no health-anxiety experience'], 'Either ignoring the gap or referring when it can be closed'),
      O('Refer him to a specialist clinic right away, even though the nearest one has a waiting list of several months.', 0,
        'Premature referral', 'Refer-out framing', 'Referral is reasonable if competence cannot be built, but here a feasible path through study and consultation exists', ['waiting list', 'CBT background'], 'Referring when the gap can be bridged'),
      O('Offer general supportive counseling, since health anxiety tends to improve once the client feels fully heard.', -1,
        'Not the supported treatment', 'Supportive-only framing', 'Feeling heard matters, but CBT targeting checking and reassurance is the supported approach', ['checking cycle'], 'Substituting general support for indicated treatment'),
      O('Take him on and rely on reassurance that his tests were normal, since reassurance is what calms him most effectively.', -2,
        'Reassurance maintains the disorder', 'Reassurance framing', 'Reassurance brings short relief and strengthens the cycle; building treatment on it worsens the problem', ['relief lasts a day or two'], 'Mistaking short-term relief for treatment'),
    ]),
    Q('q2', 'profdev', 'Before the first session, Gustavo sends three portal messages asking whether a new twitch “sounds like ALS.” She should:', ['R4', 'R3'], 'b', [
      O('Reply briefly that she does not assess symptoms by message, restate her contact policy, and plan to discuss it in session.', 3,
        'Clear, kind boundary', 'Maintain appropriate boundaries', 'A brief boundary-setting reply avoids feeding reassurance seeking and brings the pattern into the work', ['three portal messages', 'reassurance cycle'], 'Either ignoring messages or answering the symptom question'),
      O('Leave the messages unanswered until the first session, when she can explain her contact policy to him in person.', 0,
        'Silence can feel rejecting', 'No-reply framing', 'Waiting avoids reassurance but leaves him unsure whether he was heard; a brief boundary reply is better', ['portal messages'], 'Avoiding contact rather than setting a boundary'),
      O('Answer each message with a short reassurance that ALS is rare at his age, so his anxiety does not build before they meet.', -1,
        'Feeds reassurance seeking', 'Soothe framing', 'Reassurance by message rewards checking and is outside the counselor’s medical role', ['relief lasts a day or two'], 'Providing reassurance that maintains the cycle'),
      O('Tell him the twitch sounds harmless from what she knows about ALS, and invite him to message whenever symptoms change.', -2,
        'Medical opinion plus open access', 'Availability framing', 'Offering a medical opinion exceeds scope, and open messaging invites endless reassurance seeking', ['counselor scope'], 'Giving medical judgments and erasing boundaries'),
    ]),
    Q('q3', 'assess', 'Which finding most clearly supports illness anxiety disorder rather than somatic symptom disorder?', ['R1'], 'a', [
      O('His bodily symptoms are minimal, while his preoccupation with having ALS and his checking have lasted ten months.', 3,
        'Mild symptoms, high illness preoccupation', 'Apply the differential', 'Illness anxiety disorder centers on fear of disease with absent or mild symptoms; somatic symptom disorder centers on distressing symptoms', ['occasional painless twitch', 'hours of searching'], 'Confusing fear of illness with distress over symptoms'),
      O('His normal EMG and neurological exam, which show that no medical condition explains his concern about having ALS.', 0,
        'True but not discriminating', 'Normal-tests framing', 'A normal work-up fits both disorders; the discriminator is the severity of somatic symptoms', ['normal EMG'], 'Using a shared feature to separate two disorders'),
      O('His preoccupation has lasted more than six months, which by itself separates illness anxiety from somatic symptoms.', -1,
        'Both require six months', 'Duration framing', 'Both disorders usually require about six months; duration does not distinguish them', ['ten months'], 'Misremembering the duration criteria'),
      O('His twitching is a real physical symptom, so his concern cannot be a mental disorder until ALS has been fully excluded.', -2,
        'Blocks diagnosis indefinitely', 'Rule-out-forever framing', 'An appropriate work-up is complete; demanding absolute exclusion feeds the disorder and delays treatment', ['normal neurological work-up'], 'Requiring medical certainty before diagnosing'),
    ]),
    Q('q4', 'assess', 'Which assessment step best sets a baseline for Gustavo’s health anxiety?', ['R2'], 'c', [
      O('Give a validated health-anxiety measure and log his daily checking time, then review the results with him.', 3,
        'Standardized measure plus behavior log', 'Use screening instruments', 'A validated measure plus a behavioral log gives a baseline for planning and tracking progress, and reviewing results engages him', ['two to three hours a day', 'grip tests'], 'Relying on impressions instead of measurement'),
      O('Rely on his description in the interview, since his history already makes the diagnosis and its severity clear.', 0,
        'No measurable baseline', 'Interview-only framing', 'The interview supports the diagnosis, but a baseline measure is needed to track change', ['progress monitoring'], 'Skipping measurement in a clear case'),
      O('Give a broad personality inventory to look for traits that might explain why he focuses so much on his health.', -1,
        'Wrong instrument for the question', 'Trait framing', 'A personality inventory does not measure health anxiety and adds little to treatment planning', ['focused health worry'], 'Choosing an instrument that does not match the referral question'),
      O('Ask Dr. Osei to order one more round of neurological tests so the baseline starts from a fully clear result.', -2,
        'Feeds the reassurance cycle', 'More-testing framing', 'Additional testing without medical indication reinforces the disorder and is outside counselor scope', ['normal EMG', 'relief lasts a day or two'], 'Using medical tests as reassurance'),
    ]),
    Q('q5', 'indirect', 'Dr. Osei says she feels pressured to order new tests at each visit. With Gustavo’s release, the counselor should:', ['R5', 'R3'], 'b', [
      O('Coordinate a shared plan with regular scheduled visits, tests only when clinically indicated, and consistent messages.', 3,
        'Coordinated care plan', 'Collaborate with other providers', 'Scheduled visits and consistent messages from both providers reduce reassurance-driven visits and testing', ['six physician visits', 'physician feels pressured'], 'Leaving medical and counseling care uncoordinated'),
      O('Tell Dr. Osei that counseling will handle the anxiety, and leave decisions about visits and tests entirely to her.', 0,
        'Respects scope but misses coordination', 'Separate-lanes framing', 'Medical decisions are hers, but a shared plan helps both providers respond consistently', ['physician asked for help'], 'Missing a chance for integrated care'),
      O('Suggest Dr. Osei refer him to a new physician, so the pressured pattern of visits can start over from a clean slate.', -1,
        'Encourages doctor shopping', 'Fresh-start framing', 'A new physician would likely repeat tests and restart the cycle', ['reassurance cycle'], 'Mistaking a change of provider for a change of pattern'),
      O('Ask Dr. Osei to order whatever tests he requests for now, since refusing could damage his trust in both providers.', -2,
        'Reinforces the disorder', 'Accommodation framing', 'Accommodating every request maintains illness anxiety and exposes him to needless procedures', ['normal work-up'], 'Prioritizing short-term comfort over treatment'),
    ]),
    Q('q6', 'indirect', 'Which entry best documents the cycle Gustavo described in session one?', ['R5'], 'd', [
      O('Client reports 2–3 hours a day of symptom searching, grip tests, and portal messages; CBT model reviewed; plan to log checking.', 3,
        'Specific, behavioral, linked to plan', 'Write clinical documentation', 'Good notes record observable behavior with frequency, the intervention used, and the plan', ['two to three hours a day', 'agreed to log'], 'Writing vague or judgmental notes'),
      O('Client discussed ongoing health worries and the time he spends on them. Supportive counseling given. Continue weekly.', 0,
        'Too vague', 'Generic-note framing', 'The note lacks measurable behavior and a specific intervention, so progress cannot be tracked', ['no frequency recorded'], 'Writing notes too general to guide care'),
      O('Client is obsessed with ALS and seems unable to accept medical facts. Counselor challenged his beliefs. Will continue.', -1,
        'Judgmental language', 'Subjective framing', 'Pejorative wording is unprofessional and does not describe behavior or the planned intervention', ['behavioral description needed'], 'Recording opinions instead of observations'),
      O('Client likely has early ALS symptoms that his physicians missed; counselor advised him to get a second neurology opinion.', -2,
        'Outside scope, contradicts work-up', 'Medical-opinion framing', 'A counselor’s note should not offer a medical diagnosis or advise testing that contradicts the work-up', ['normal EMG'], 'Documenting medical opinions beyond scope'),
    ]),
    Q('q7', 'planning', 'Which initial treatment approach best fits Gustavo’s illness anxiety disorder?', ['R3'], 'a', [
      O('CBT for health anxiety, with cognitive work on threat beliefs and exposure with gradual cuts in checking and reassurance.', 3,
        'Supported treatment', 'Develop an initial plan', 'CBT that targets catastrophic illness beliefs and reduces checking and reassurance is the best-supported treatment', ['checking cycle', 'reassurance seeking'], 'Choosing an approach that does not target safety behaviors'),
      O('Relaxation training and mindfulness on their own, aimed at lowering his overall stress until the health worries fade.', 0,
        'Adjunct, not core', 'Stress-reduction framing', 'Relaxation can help, but alone it leaves the checking and reassurance cycle untouched', ['hours of searching'], 'Using an adjunct as the main treatment'),
      O('Insight-oriented therapy exploring the early origins of his fears, with his checking left alone until insight is reached.', -1,
        'Leaves the maintaining cycle', 'Insight-first framing', 'Insight alone does not change the checking that maintains health anxiety', ['two to three hours a day'], 'Waiting for insight before changing behavior'),
      O('Regular reassurance from the counselor that his tests were normal, repeated each session until his worry about ALS settles.', -2,
        'Builds treatment on reassurance', 'Reassurance framing', 'Structured reassurance is a safety behavior that maintains the disorder', ['relief lasts a day or two'], 'Treating the maintaining behavior as the cure'),
    ]),
    Q('q8', 'planning', 'Which goal is written in the most useful SMART form?', ['R5'], 'c', [
      O('Within 8 weeks, cut symptom searching from 2–3 hours a day to 20 minutes or less, tracked with his phone’s screen-time log.', 3,
        'Specific, measurable, timed', 'Develop SMART goals', 'The goal states a baseline, a realistic target, a deadline, and an objective tracking method', ['two to three hours a day', 'wants to cut back'], 'Writing goals that cannot be measured'),
      O('Within 8 weeks, Gustavo will worry less about ALS and feel more confident that his body is healthy and working well.', 0,
        'Not measurable', 'Global-goal framing', 'The aim is reasonable, but it gives no behavior or measure to track', ['no measure named'], 'Confusing a hope with an objective'),
      O('Gustavo will stop all symptom searching starting tomorrow and will report any lapses at the start of each session.', -1,
        'Not attainable', 'All-or-nothing framing', 'Abrupt total abstinence from checking is unrealistic and sets up failure', ['current baseline'], 'Setting an unrealistic target'),
      O('Gustavo will get one final full neurological work-up within 8 weeks so that he can be certain he does not have ALS.', -2,
        'Goal reinforces the disorder', 'Certainty framing', 'Seeking certainty through testing is the problem behavior; making it a goal reinforces it', ['normal work-up'], 'Building a goal around reassurance'),
    ]),
    Q('q9', 'legal', 'Before the first video session, what should the counselor’s telehealth informed consent cover?', ['R8'], 'a', [
      O('Telehealth risks and benefits, privacy, confirming his location and emergency contact each session, and dropped calls.', 3,
        'Telehealth-specific consent', 'Obtain telehealth informed consent', 'Telehealth consent covers risks, privacy, verifying location, emergency procedures, and what happens if the connection fails', ['video sessions from home'], 'Treating telehealth consent as identical to in-person consent'),
      O('The same items as an in-person consent form, since the counseling itself is identical whether by video or in person.', 0,
        'Misses telehealth elements', 'Same-form framing', 'In-person consent leaves out location, emergency procedures, and technology risks', ['video format'], 'Overlooking telehealth-specific consent'),
      O('Only the platform’s privacy features, since an adult client who is not in crisis needs no emergency plan for video work.', -1,
        'Omits emergency planning', 'Low-risk framing', 'Emergency procedures are a standard element of telehealth consent regardless of current risk', ['remote client'], 'Skipping emergency planning in low-risk cases'),
      O('Nothing more, since agreeing to the platform’s terms at sign-up counts as his consent to counseling by video.', -2,
        'Vendor terms are not informed consent', 'Terms-of-service framing', 'Clicking a vendor’s terms does not inform him about counseling risks, privacy, or emergencies', ['counselor’s duty'], 'Substituting vendor terms for informed consent'),
    ]),
    Q('q10', 'legal', 'Gustavo will spend a month in his sister’s state, where the counselor holds no license or Compact privilege. She should:', ['R6'], 'c', [
      O('Explain she cannot see him there without a license or privilege, then check Compact options or arrange interim care.', 3,
        'Practice where the client is located', 'Practice per license portability', 'Telehealth practice is governed by the client’s location; the Compact allows practice only after obtaining a privilege to practice', ['Compact member states', 'no privilege held'], 'Assuming her own license covers clients anywhere'),
      O('Pause sessions for the month and resume when he returns, giving him crisis resources to use while he is away.', 0,
        'Legal but limited', 'Pause framing', 'Pausing is lawful, but she could also pursue a privilege or arrange interim care to avoid a gap', ['Compact available'], 'Not exploring lawful ways to continue care'),
      O('Continue sessions as usual, since her license follows her own location and his location does not matter for video.', -1,
        'Misunderstands jurisdiction', 'Counselor-location framing', 'Jurisdiction generally follows the client’s location, so practicing there without authorization is unlicensed practice', ['sister’s state'], 'Believing the counselor’s location governs'),
      O('Keep seeing him and leave his location out of the notes, since a short visit to another state is unlikely to be noticed.', -2,
        'Unlicensed practice plus concealment', 'Concealment framing', 'Hiding location adds dishonest documentation to unauthorized practice', ['documentation integrity'], 'Falsifying records to avoid a licensure rule'),
    ]),
    Q('q11', 'interventions', 'Gustavo asks, “Can you just tell me I don’t have ALS? Then I can focus.” The most therapeutic response is:', ['R3'], 'd', [
      O('“I hear how much you want certainty. Reassurance helps for a day, then the worry returns. Can we look at that?”', 3,
        'Empathy plus psychoeducation', 'Provide psychoeducation', 'Validating the wish for certainty while naming the reassurance cycle helps him see why the counselor will not reassure', ['relief lasts a day or two'], 'Either reassuring or dismissing the request'),
      O('“I’m not a doctor, so I can’t answer that. Let’s get back to what we had planned to work on in today’s session.”', 0,
        'Accurate but misses the moment', 'Deflect framing', 'Declining is right, but redirecting without exploring the request misses a teaching moment', ['reassurance request'], 'Declining without using the moment'),
      O('“Your doctors have run every test, so you can be sure you don’t have ALS. Try to hold on to that this week.”', -1,
        'Gives reassurance', 'Reassurance framing', 'Reassuring him repeats the safety behavior that maintains his anxiety', ['reassurance cycle'], 'Providing the reassurance the treatment aims to reduce'),
      O('“I can’t rule it out myself, so it may be worth asking for another EMG to settle the question once and for all.”', -2,
        'Encourages more testing', 'Testing framing', 'Suggesting more tests outside scope feeds illness anxiety and contradicts the coordinated plan', ['normal EMG'], 'Feeding health anxiety with medical uncertainty'),
    ]),
    Q('q12', 'legal', 'Gustavo asks for a copy of his counseling records to show his sister. The counselor should:', ['R7'], 'b', [
      O('Provide access to his designated record set within HIPAA timelines, excluding any separately kept psychotherapy notes.', 3,
        'Honor the right of access', 'Adhere to federal law', 'Clients have a right of access to their records within required timelines; separately kept psychotherapy notes are excluded', ['records request'], 'Denying or delaying a lawful access request'),
      O('Offer to review the records with him in session first, and release a copy only if he still wants one after that review.', 0,
        'Helpful but conditional', 'Review-first framing', 'Offering review is reasonable, but access cannot be made conditional on it', ['right of access'], 'Making access depend on a review'),
      O('Decline, since the records could feed his health anxiety, and offer a summary letter for his sister instead.', -1,
        'Improper denial', 'Protective framing', 'Concern that records might fuel anxiety is not a valid ground to deny access here', ['no safety concern'], 'Withholding records for clinical comfort'),
      O('Send the full record, including her psychotherapy notes, straight to his sister’s email so she can read it herself.', -2,
        'Discloses to a third party', 'Direct-send framing', 'Sending records to a third party without written authorization breaches confidentiality', ['sister is not authorized'], 'Disclosing to a family member without authorization'),
    ]),
    Q('q13', 'interventions', 'The counselor begins exposure work. Which plan best fits Gustavo?', ['R3'], 'a', [
      O('Build a graded list, from reading the word ALS to delaying grip tests, and practice each step while he resists checking.', 3,
        'Graded exposure with response prevention', 'Implement supported interventions', 'Exposure to illness cues while preventing checking lets anxiety fall without the safety behavior', ['grip tests', 'searching'], 'Allowing checking during exposure'),
      O('Begin with imaginal exposure only, waiting to address his checking behaviors until his anxiety ratings are lower.', 0,
        'Delays response prevention', 'Sequence framing', 'Imaginal work fits, but delaying response prevention leaves checking in place to undo gains', ['checking cycle'], 'Separating exposure from response prevention'),
      O('Start with the hardest item, watching ALS patient videos, since intense exposure gets the fastest results for most clients.', -1,
        'Flooding first', 'Flooding framing', 'Starting at the top of the hierarchy risks overwhelming him and dropout', ['first exposure session'], 'Skipping the graded hierarchy'),
      O('Pair each exposure with a review of his normal test results, so that he finishes every exercise feeling calm.', -2,
        'Builds reassurance into exposure', 'Calm-ending framing', 'Reassurance during exposure blocks new learning and maintains the disorder', ['reassurance cycle'], 'Using a safety behavior to end exposure'),
    ]),
  ],
};

// ============================================================================
// D968 — Functional Neurological Symptom Disorder (adult, hard)
// Buried facts: new urinary hesitancy (attributed to tramadol) beside leg
// weakness; a joked-off suicidal statement with a handgun and pills at home;
// a neurology work-up that is still pending.
// ============================================================================
const D968 = {
  id: 'ncmhce-D968',
  plan: 8,
  population: 'adult',
  title: 'A PE teacher’s leg gives out after a fender-bender, and the neurology work-up is still pending',
  category: 'Somatic',
  difficulty: 'hard',
  primaryDiagnosis: { name: 'Functional Neurological Symptom Disorder (Conversion Disorder)', code: 'F44.4' },
  diagnosis: { name: 'Functional Neurological Symptom Disorder (Conversion Disorder)', code: 'F44.4' },
  differentialOptions: [
    { id: 'do1', name: 'Functional Neurological Symptom Disorder (Conversion Disorder)', isCorrect: true },
    { id: 'do2', name: 'Malingering', isCorrect: false },
    { id: 'do3', name: 'Posttraumatic Stress Disorder', isCorrect: false },
    { id: 'do4', name: 'Somatic Symptom Disorder', isCorrect: false },
    { id: 'do5', name: 'Factitious Disorder Imposed on Self', isCorrect: false },
  ],
  narrative: {
    intake:
      'Tatiana Morales, 46, a Puerto Rican middle-school physical education teacher and former college softball player, is referred by her primary care ' +
      'physician seven weeks after a rear-end car crash in which she was not seriously hurt. Three weeks after the crash she developed weakness in her right ' +
      'leg; she now drags it and walks with a cane. Emergency department notes describe give-way weakness, a positive Hoover’s sign, a normal head CT, and ' +
      '“probable functional neurological disorder.” A neurology appointment is three weeks away, and a lumbar MRI is waiting on insurance approval. She is ' +
      'on short-term disability. Tearful and angry, she says, “The ER doctor basically said it’s all in my head.” While listing her medications she mentions ' +
      'tramadol since the crash and adds that she has had “some trouble starting to pee the last couple of days, probably the pain pills.” Later, laughing, ' +
      'she says, “If I’m stuck like this, my husband would be better off with the life insurance. Kidding.” The counselor catches herself privately ' +
      'wondering whether Tatiana is exaggerating. The counselor has never treated functional neurological disorder.',
    session1:
      'At the counselor’s urging, Tatiana was seen at urgent care the same day; a bladder scan was normal, her physician tapered the tramadol, and the ' +
      'hesitancy resolved. The neurology visit and MRI are still pending. A structured suicide-risk screen finds passive thoughts that her family would be ' +
      'better off without her, with no plan, intent, or past attempts; her husband keeps a loaded handgun in their bedroom nightstand, and she has a partial ' +
      'bottle of tramadol at home. She wants to return to teaching and coach softball in the spring. Her physical therapist has started a gait program. Her ' +
      'school district’s human resources office asks the counselor to complete a disability-accommodation form and to send her “complete counseling ' +
      'records.” She signs releases for her physician, her physical therapist, and HR limited to the accommodation form.',
    session2:
      'The counselor’s office is on the second floor of a building with no elevator, and Tatiana arrives exhausted after the stairs. She says her leg is ' +
      'weaker when she watches it closely and moves more easily when she is chasing her dog in the yard. When the counselor begins explaining functional ' +
      'symptoms, Tatiana snaps, “So you think it’s all in my head too,” and falls silent. Her insurer asks for a diagnosis and treatment plan to authorize ' +
      'more sessions, and a colleague suggests coding PTSD “because it gets approved faster,” though she does not meet PTSD criteria. Her personal-injury ' +
      'attorney writes asking for her records and for the counselor to testify that the crash caused her condition.',
  },
  diagnosticRationale:
    'Tatiana has altered motor function (right leg weakness with gait disturbance) with clinical findings of incompatibility with recognized neurological ' +
    'disease (give-way weakness and a positive Hoover’s sign), causing significant impairment. The diagnosis rests on these positive signs, not on the ' +
    'absence of findings or on a psychological explanation. Because the neurology work-up is pending and functional and structural conditions can coexist, ' +
    'the diagnosis is held provisionally and new neurological symptoms (such as bladder changes) still need medical evaluation. She is not intentionally ' +
    'producing symptoms (no evidence of deception, as in factitious disorder or malingering), she lacks the intrusion and avoidance clusters of PTSD, and ' +
    'her presentation centers on a neurological-type deficit rather than distress about somatic symptoms.',
  references: [
    { id: 'R1', source: 'DSM-5-TR', detail: 'Functional neurological symptom disorder: altered motor or sensory function with clinical findings of incompatibility with recognized neurological conditions; not intentionally produced; differential with factitious disorder and malingering' },
    { id: 'R2', source: 'C-SSRS', detail: 'Structured suicide-risk screening, including ideation, intent, plan, and past behavior' },
    { id: 'R3', source: 'Stanley-Brown SPI', detail: 'Collaborative safety planning, including lethal means steps for firearms and medications' },
    { id: 'R4', source: 'ACA Code of Ethics', detail: 'A.4.b personal values; C.2.a boundaries of competence; B.6 records and minimum disclosure; E.13 forensic roles separate from counseling; fair treatment of clients with disabilities' },
    { id: 'R5', source: 'Corey (Theory & Practice)', detail: 'Cognitive behavioral and integrative approaches; repairing ruptures in the working alliance; psychoeducation' },
    { id: 'R6', source: 'Wiger (Documentation)', detail: 'Diagnosis, impairment, and medical-necessity documentation supporting reimbursement requests' },
    { id: 'R7', source: 'State law', detail: 'Responding to subpoenas and attorney requests; disability accommodation duties of service providers' },
    { id: 'R8', source: 'HIPAA', detail: 'Minimum necessary standard; disclosures limited to the scope of a valid authorization' },
  ],
  questions: [
    Q('q1', 'profdev', 'The counselor catches herself wondering whether Tatiana is exaggerating her weakness. What is the most appropriate response?', ['R4', 'R1'], 'a', [
      O('Treat the doubt as a bias to examine in self-reflection and supervision, knowing functional symptoms are not feigned.', 3,
        'Examine bias; FND is not feigning', 'Practice self-reflection', 'Suspicion that a client is faking is a common bias toward FND; examining it prevents invalidating care', ['private doubt', 'positive Hoover’s sign'], 'Equating functional symptoms with exaggeration'),
      O('Keep the doubt private and stay neutral, since a counselor’s inner reactions have little effect on the counseling work.', 0,
        'Underestimates bias effects', 'Neutrality framing', 'Unexamined doubt tends to leak into tone and choices; reflection is needed, not just silence', ['she already feels dismissed'], 'Assuming private reactions stay private'),
      O('Watch for inconsistencies in her walking between sessions to clarify whether she is exaggerating her symptoms.', -1,
        'Turns counseling into surveillance', 'Detective framing', 'Inconsistency is a feature of FND, not proof of exaggeration; monitoring for it acts on the bias', ['variability with attention'], 'Reading variability as deception'),
      O('Share the concern with Tatiana directly, so she knows the counselor will be honest if her symptoms do not add up.', -2,
        'Invalidates and damages trust', 'Honesty framing', 'Voicing doubt repeats the invalidation she felt in the ED and risks her leaving care', ['“all in my head” comment'], 'Confusing candor with acting on bias'),
    ]),
    Q('q2', 'assess', 'Tatiana mentions new trouble starting to urinate, which she blames on the pain pills. What should the counselor do?', ['R1'], 'c', [
      O('Urge a same-day medical evaluation and, with her consent, alert her physician, since new bladder changes need prompt review.', 3,
        'Medical red flag first', 'Evaluate barriers and refer for medical review', 'New bladder symptoms alongside leg weakness can signal spinal involvement; medication is a possible cause, but only a same-day medical review can decide', ['trouble starting to pee', 'MRI not yet done'], 'Letting a psychological frame override a medical red flag'),
      O('Encourage her to call her physician’s office this week about the medication, while counseling continues as planned.', 0,
        'Right direction, too slow', 'Routine-call framing', 'Contacting the physician is right, but new bladder symptoms with leg weakness call for same-day evaluation', ['new symptom'], 'Treating a red flag as routine'),
      O('Ask her to track how often the problem occurs for a week and bring the log to the next counseling session for review.', -1,
        'Delays medical review', 'Monitor framing', 'A week of tracking delays evaluation of a possibly urgent neurological sign', ['last couple of days'], 'Monitoring a symptom that needs evaluation'),
      O('Note the symptom and suggest she mention it at the neurology visit, since the cause is most likely the medication.', -2,
        'Three-week delay of a red flag', 'Wait-for-neurology framing', 'Accepting the medication explanation and waiting weeks could miss a serious spinal problem', ['neurology three weeks away'], 'Anchoring on the client’s explanation of a red flag'),
    ]),
    Q('q3', 'profdev', 'The counselor has never treated functional neurological disorder. What is the most appropriate step?', ['R4'], 'b', [
      O('Seek consultation and focused training in FND-informed counseling, and refer if she cannot provide competent care.', 3,
        'Consult, train, refer if needed', 'Assess need for specialized training', 'Entering a new area requires training and consultation; referral is the fallback when competence cannot be built', ['no FND experience'], 'Either ignoring the gap or abandoning the client'),
      O('Refer her at once to a specialist program, even though the nearest has a six-month wait and she has no other support.', 0,
        'Leaves a gap in care', 'Immediate-referral framing', 'Specialist care may help later, but a six-month gap with no support is not in her interest when competence can be built', ['passive ideation risk'], 'Referring out without bridging care'),
      O('Use standard trauma processing for the crash, since FND is a form of PTSD that clears once the memory is processed.', -1,
        'Wrong framework', 'PTSD framing', 'FND is not a form of PTSD; trauma processing without trauma symptoms misdirects care', ['no PTSD criteria'], 'Applying a trauma protocol to FND'),
      O('Proceed without consultation, relying on general counseling skills, since FND symptoms are mostly about stress anyway.', -2,
        'Ignores the gap and the condition', 'Stress-only framing', 'Reducing FND to stress invalidates the condition and proceeds outside competence', ['complex presentation'], 'Minimizing a specialized condition'),
    ]),
    Q('q4', 'assess', 'Laughing, Tatiana says her husband would be better off with the life insurance, then adds “Kidding.” She should:', ['R2'], 'd', [
      O('Ask directly about suicidal thoughts with a structured screen, covering plan, intent, and access to guns or pills.', 3,
        'Structured risk assessment', 'Assess risk to self', 'A burden-themed comment followed by “kidding” still warrants direct, structured screening that includes access to means', ['“better off with the life insurance”', 'new disability'], 'Accepting a joke as reassurance'),
      O('Ask whether she feels safe at home today, and do a fuller screen only if she says that she does not feel safe there.', 0,
        'Too thin', 'Single-question framing', 'Asking directly is right, but one global question misses ideation, intent, and means', ['burden statement'], 'Relying on a single safety question'),
      O('Note the comment and revisit her mood next session, since she framed it as a joke and laughed as she said it.', -1,
        'Delays risk assessment', 'Wait framing', 'Humor often masks real ideation; deferring assessment leaves risk unknown', ['laughed', '“Kidding”'], 'Taking the joke frame at face value'),
      O('Accept the joke and move on, since asking directly about suicide could plant an idea she has not considered.', -2,
        'Myth-based avoidance', 'Contagion framing', 'Asking about suicide does not increase risk; avoiding it misses a possible burden-related warning sign', ['burden statement'], 'Believing that asking plants the idea'),
    ]),
    Q('q5', 'planning', 'With the neurology visit and MRI still pending, which initial plan best fits?', ['R1', 'R5'], 'd', [
      O('Begin FND-informed counseling on coping and function now, coordinate with PT and her physician, and revise after neurology.', 3,
        'Start now, coordinate, revise', 'Develop an initial plan', 'Early function-focused work alongside physical therapy helps FND; the plan stays open to revision when results arrive', ['neurology pending', 'gait program started'], 'Either waiting for certainty or ignoring pending results'),
      O('Hold counseling until the neurology visit confirms the diagnosis, offering supportive phone check-ins until then.', 0,
        'Delays useful care', 'Wait-for-certainty framing', 'Pending tests do not prevent starting function-focused support, and delay can let disability become entrenched', ['short-term disability'], 'Waiting for complete certainty before starting'),
      O('Focus early sessions on getting her to accept that the cause is psychological, since acceptance predicts recovery.', -1,
        'Premature and invalidating', 'Acceptance-first framing', 'Pushing a psychological cause, especially before neurology, invalidates her and risks disengagement', ['“all in my head” anger'], 'Making acceptance of a cause a precondition'),
      O('Advise her to stop using the cane and skip physical therapy, since aids and attention to the leg keep the weakness going.', -2,
        'Unsafe and outside scope', 'Remove-supports framing', 'Removing mobility aids risks falls and contradicts PT, which is central to FND care', ['drags leg', 'PT gait program'], 'Giving physical advice that endangers the client'),
    ]),
    Q('q6', 'planning', 'The screen finds passive ideation without plan or intent, a loaded handgun in the nightstand, and leftover tramadol. The plan should:', ['R3', 'R2'], 'b', [
      O('Add a collaborative safety plan with locked or off-site storage of the handgun and disposal of leftover tramadol.', 3,
        'Safety plan with lethal means', 'Plan for safety', 'Passive ideation with a loaded firearm and pills at home calls for a written safety plan that reduces access to both', ['loaded handgun', 'partial tramadol bottle'], 'Safety planning without addressing means'),
      O('Arrange a voluntary psychiatric admission for evaluation, since passive ideation after an injury signals high risk.', 0,
        'More restrictive than needed', 'Over-restrictive framing', 'Her risk does not call for inpatient care, but erring toward protection is less harmful than missing a safety step', ['no plan or intent'], 'Over-estimating risk level'),
      O('Add a safety plan with coping steps and crisis lines, and revisit the handgun if her thoughts become more active.', -1,
        'Omits lethal means', 'Coping-only framing', 'Leaving a loaded firearm in place misses the most effective risk-reduction step', ['loaded handgun'], 'Waiting for higher risk before addressing means'),
      O('Have her sign a no-suicide contract and keep sessions focused on her leg weakness and her return to work.', -2,
        'No-suicide contracts are not protective', 'Contract framing', 'Contracts lack evidence, can give false reassurance, and replace the needed safety plan', ['passive ideation'], 'Relying on a contract instead of a safety plan'),
    ]),
    Q('q7', 'indirect', 'HR asks for an accommodation form and her “complete counseling records.” Under her limited release, she should:', ['R8', 'R4'], 'c', [
      O('Complete the form with only the functional information needed and decline to send her full counseling records to HR.', 3,
        'Minimum necessary within the release', 'Collaborate with non-clinical stakeholders', 'The release covers the accommodation form; functional information meets the purpose without exposing her records', ['release limited to the form'], 'Disclosing beyond the scope of a release'),
      O('Ask HR to send its request to her physician instead, since counselors are not able to complete accommodation forms.', 0,
        'Unnecessary deflection', 'Not-my-role framing', 'Counselors can complete accommodation forms within their knowledge; deflecting slows her return to work', ['she wants to return'], 'Declining a legitimate collaborative task'),
      O('Send the records but black out the suicide-screen results, since the rest of the file supports her need for leave.', -1,
        'Still exceeds the release', 'Partial-redaction framing', 'Redacting one section still discloses far more than the form requires', ['release scope'], 'Treating redaction as authorization'),
      O('Send the complete records, since she signed a release for HR and full context will help the district support her.', -2,
        'Breach of confidentiality', 'Full-disclosure framing', 'The release was limited to the form; sending everything to an employer can harm her job and privacy', ['employer recipient'], 'Ignoring the limits of a release'),
    ]),
    Q('q8', 'interventions', 'Which explanation of functional symptoms is most therapeutic while neurology results are pending?', ['R1', 'R5'], 'a', [
      O('Her symptoms are real and involuntary, functional problems are common and can improve, and neurology will clarify the rest.', 3,
        'Validating, accurate, provisional', 'Provide psychoeducation', 'Framing FND as genuine, common, and treatable while noting the pending work-up avoids both invalidation and premature closure', ['neurology pending', 'feels dismissed'], 'Either invalidating symptoms or overstating certainty'),
      O('The counselor cannot discuss causes until neurology reports, so sessions will focus only on stress for the time being.', 0,
        'Avoids needed education', 'Defer-education framing', 'She needs a validating explanation now; avoiding the topic leaves the ED message unchallenged', ['“all in my head”'], 'Withholding psychoeducation until certainty'),
      O('Her weakness is the body’s way of expressing emotions about the crash that she has not yet allowed herself to feel.', -1,
        'Speculative and invalidating', 'Hidden-emotion framing', 'Asserting a psychological cause she has not described echoes “all in my head” and is not required for diagnosis', ['positive signs, not inferred causes'], 'Explaining FND as repressed emotion'),
      O('Tests show nothing is wrong with her nerves, so the weakness should fade once she stops worrying so much about it.', -2,
        'Inaccurate and dismissive', 'Nothing-wrong framing', 'Tests are pending, and telling her nothing is wrong invalidates real symptoms and blames her worry', ['MRI pending'], 'Calling functional symptoms imaginary'),
    ]),
    Q('q9', 'interventions', 'Tatiana snaps, “So you think it’s all in my head too,” and falls silent. What is the best response?', ['R5'], 'b', [
      O('“I can see that landed badly, and I’m sorry. Your symptoms are real. Can you tell me what you heard me say?”', 3,
        'Name and repair the rupture', 'Monitor and resolve ruptures', 'Acknowledging the misattunement, validating her, and inviting her view repairs the alliance', ['falls silent', 'ED experience'], 'Defending the explanation instead of repairing'),
      O('“That isn’t what I meant at all. Let me explain functional symptoms again more clearly so you understand.”', 0,
        'Defensive re-explaining', 'Clarify framing', 'Clarifying may help later, but leading with defense skips the repair she needs first', ['rupture'], 'Correcting the client before repairing'),
      O('“It sounds like the ER visit still upsets you. Let’s talk about that doctor instead of what I said just now.”', -1,
        'Deflects the rupture', 'Redirect framing', 'Shifting focus to the ED avoids the rupture happening in the room', ['reaction to counselor'], 'Avoiding a rupture by redirecting'),
      O('“Your reaction may be part of the problem, since resisting the explanation can keep symptoms going longer.”', -2,
        'Blames the client', 'Resistance framing', 'Pathologizing her reaction deepens the rupture and repeats the invalidation', ['feels dismissed'], 'Labeling hurt as resistance'),
    ]),
    Q('q10', 'interventions', 'Tatiana notices her leg works better when she is chasing her dog. Which intervention best builds on this?', ['R5', 'R1'], 'd', [
      O('Coordinate with her PT on graded activities using attention shifting, building on movements that work during play.', 3,
        'Attention shifting with graded activity', 'Facilitate skill development', 'Functional symptoms often lessen when attention is directed away; graded, coordinated practice builds on that', ['better when chasing dog', 'worse when watching leg'], 'Not using the client’s observation to guide skills'),
      O('Teach relaxation breathing for tense moments, and leave all walking practice entirely to her physical therapist.', 0,
        'Misses integration', 'Separate-lanes framing', 'Relaxation helps some, but coordinating with PT on attention strategies uses her own discovery', ['PT gait program'], 'Treating counseling and PT as unrelated'),
      O('Encourage her to rest the leg more on bad days and add activity only once her strength feels fully back to normal.', -1,
        'Promotes deconditioning', 'Rest framing', 'Waiting for full strength before activity tends to entrench disability', ['drags leg'], 'Using rest as the main strategy'),
      O('Point out that walking with the dog shows she can walk normally whenever she chooses to try hard enough.', -2,
        'Implies voluntary control', 'Effort framing', 'FND symptoms are not voluntary; implying they are is invalidating and inaccurate', ['involuntary symptoms'], 'Treating variability as proof of choice'),
    ]),
    Q('q11', 'legal', 'The office is up a flight of stairs with no elevator, and Tatiana arrives exhausted. The counselor should:', ['R7', 'R4'], 'a', [
      O('Ask what would work best for her and offer an accessible ground-floor room or telehealth for her future sessions.', 3,
        'Provide reasonable accommodation', 'Accommodate clients with disabilities', 'Services must be accessible to clients with disabilities; asking her preference and offering options meets that duty', ['uses a cane', 'second floor, no elevator'], 'Leaving access barriers in place'),
      O('Schedule her at a quieter time so she can take the stairs slowly, with extra time added to her sessions.', 0,
        'Accommodates partly', 'Extra-time framing', 'More time helps a little but does not remove the barrier, and she may not be able to climb safely', ['exhausted after stairs'], 'Adjusting time instead of access'),
      O('Tell her that climbing the stairs is good practice for her leg and part of her functional recovery plan.', -1,
        'Reframes a barrier as treatment', 'Therapeutic-barrier framing', 'Unplanned stair climbing is not graded PT and may risk a fall', ['cane use'], 'Calling an access barrier therapy'),
      O('Refer her to another practice, since meeting mobility needs is the job of a larger clinic with more resources.', -2,
        'Disability-based refusal', 'Refer-away framing', 'Refusing service due to disability is discriminatory and disrupts care', ['established client'], 'Discharging a client because of disability'),
    ]),
    Q('q12', 'legal', 'A colleague suggests coding PTSD for faster insurer approval. The counselor should:', ['R6'], 'c', [
      O('Submit the FND diagnosis she has documented, supported by notes on findings, impairment, and medical necessity.', 3,
        'Accurate, supported claim', 'Support reimbursement with documentation', 'Claims must reflect the actual diagnosis and be backed by documentation of impairment and medical necessity', ['positive signs', 'does not meet PTSD'], 'Altering a diagnosis for reimbursement'),
      O('Submit FND and send the insurer all of her session notes so the reviewer can see every detail of her care.', 0,
        'Accurate but over-discloses', 'Send-everything framing', 'The diagnosis is right, but insurers receive only the minimum necessary, not full notes', ['minimum necessary'], 'Over-sharing to speed approval'),
      O('Submit an unspecified anxiety disorder instead, since it is less stigmatizing and is usually approved without delay.', -1,
        'Inaccurate diagnosis', 'Softer-label framing', 'Choosing a diagnosis for convenience misrepresents her condition', ['no anxiety disorder assessed'], 'Picking a diagnosis for payment or comfort'),
      O('Submit PTSD as the colleague suggests, since faster approval keeps her in treatment and serves her best interests.', -2,
        'Insurance fraud', 'Ends-justify framing', 'Coding a diagnosis she does not meet is fraudulent and can follow her in records', ['does not meet PTSD'], 'Rationalizing false claims as client advocacy'),
    ]),
    Q('q13', 'legal', 'Her attorney requests her records and testimony that the crash caused her condition. The counselor should:', ['R7', 'R4'], 'b', [
      O('Require her written authorization or a court order, consult on legal duties, and testify only as a treating counselor.', 3,
        'Proper process, proper role', 'Follow court-proceeding best practices', 'Records go out with her authorization or a court order, and a treating counselor avoids forensic opinions such as causation', ['attorney request', 'causation question'], 'Taking on a forensic role as a treating counselor'),
      O('Send the records once Tatiana signs a release, and agree to testify about what she has observed in their sessions.', 0,
        'Mostly right, skips consultation', 'Release-only framing', 'Authorization and fact testimony are appropriate, but consulting on legal duties and limits protects her', ['litigation'], 'Entering legal proceedings without consultation'),
      O('Refuse any involvement, since counselors are shielded from court proceedings by client privilege in every case.', -1,
        'Misstates privilege', 'Blanket-privilege framing', 'Privilege has exceptions, and she may waive it; refusing outright can violate legal obligations', ['client may waive'], 'Believing privilege is absolute'),
      O('Write a letter stating that the crash caused her FND, since a causation opinion from her counselor will help her case.', -2,
        'Role conflict, beyond expertise', 'Advocate framing', 'A causation opinion is a forensic judgment outside the treating role and beyond the evidence', ['neurology pending'], 'Blurring treating and forensic roles'),
    ]),
  ],
};

// ============================================================================
// D969 — Factitious Disorder Imposed on Self (adult, hard)
// Buried facts: declined paid leave and workers' comp (discriminates from
// malingering); "relief" at septic hypotension (risk); no evidence of patient
// harm (governs disclosure ethics); coworkers can open his chart.
// ============================================================================
const D969 = {
  id: 'ncmhce-D969',
  plan: 9,
  population: 'adult',
  title: 'A dialysis nurse’s abscesses keep returning weeks after every discharge',
  category: 'Somatic',
  difficulty: 'hard',
  primaryDiagnosis: { name: 'Factitious Disorder Imposed on Self', code: 'F68.10' },
  diagnosis: { name: 'Factitious Disorder Imposed on Self', code: 'F68.10' },
  differentialOptions: [
    { id: 'do1', name: 'Malingering', isCorrect: false },
    { id: 'do2', name: 'Somatic Symptom Disorder', isCorrect: false },
    { id: 'do3', name: 'Factitious Disorder Imposed on Self', isCorrect: true },
    { id: 'do4', name: 'Borderline Personality Disorder', isCorrect: false },
  ],
  narrative: {
    intake:
      'Tomás Villarreal, 33, a Mexican American dialysis nurse and the eldest of five siblings, is referred to the counselor embedded in a hospital-affiliated ' +
      'multispecialty clinic by his infectious disease physician, Dr. Helen Park, for “stress related to chronic illness.” Over 14 months he has had six ' +
      'admissions for forearm abscesses and two bloodstream infections with unusual mixtures of bowel and skin bacteria; wounds heal in the hospital and ' +
      'recur within weeks of discharge. Team notes record that a nurse found an unlabeled syringe and stool-stained gauze in his bathroom, and Dr. Park has ' +
      'documented that the infections appear self-induced; no one has discussed this with Tomás. He declined his employer’s offer of paid medical leave and a ' +
      'workers’ compensation claim, picks up extra shifts between admissions, and says he loves his job. He describes how the nurses “really took care of ' +
      'me” during admissions. Recalling his last bout of sepsis, he says almost wistfully, “When my pressure dropped into the 70s, I felt kind of relieved, ' +
      'like I could finally stop.” He signed the clinic’s standard consent, which permits sharing treatment information with his care team. Reading the ' +
      'chart, the counselor notices she feels irritated and “played.” She has never treated factitious disorder.',
    session1:
      'The team (Dr. Park, a wound-care nurse, the consultation-liaison psychiatrist, and the counselor) meets to coordinate. Dr. Park proposes confronting ' +
      'Tomás at his next visit with a photo of the syringe; the psychiatrist favors a non-punitive approach. In his first full session, Tomás talks about ' +
      'caring for his siblings after his father died when he was 15 and says no one has ever asked how he is doing. The counselor learns she will begin a ' +
      'planned eight-week medical leave in two months.',
    session2:
      'Tomás says, “Dr. Park looks at me like I’m doing this to myself,” and later describes urges to “mess with” a healing wound when he feels alone after a ' +
      'shift. He says his family expects the eldest son to handle things without complaint. The counselor’s supervisor asks whether she must report Tomás to ' +
      'the board of nursing or his employer; there is no evidence he has harmed patients or taken supplies from work, and the counselor has not yet checked ' +
      'her state’s rules. Dr. Park asks for the counselor’s session notes. Because Tomás is a hospital employee, coworkers can open his chart in the shared ' +
      'electronic health record.',
  },
  diagnosticRationale:
    'Evidence points to induction of infection (polymicrobial bowel and skin flora, an unlabeled syringe and stool-stained gauze, healing in hospital with ' +
    'recurrence after discharge) with deceptive presentation to his care team, and the behavior continues without obvious external reward: he declined paid ' +
    'leave and workers’ compensation and works extra shifts. That absence of external incentive distinguishes factitious disorder from malingering. ' +
    'Somatic symptom disorder does not involve falsification, and there is no pervasive pattern of unstable relationships or identity to suggest borderline ' +
    'personality disorder as the primary explanation. Recurrent episodes and his relief at septic hypotension make medical and suicide-risk assessment ' +
    'central.',
  references: [
    { id: 'R1', source: 'DSM-5-TR', detail: 'Factitious disorder imposed on self: falsification or induction of signs or symptoms with identified deception, presenting as ill, deceptive behavior evident without obvious external rewards; recurrent episodes; differential with malingering' },
    { id: 'R2', source: 'C-SSRS', detail: 'Structured suicide-risk screening when a client expresses relief at a life-threatening event' },
    { id: 'R3', source: 'ACA Code of Ethics', detail: 'A.4.b personal values; C.2.a competence; B.1.c respect for confidentiality; B.2 exceptions; A.12 abandonment and client neglect (continuity of care during counselor absence)' },
    { id: 'R4', source: 'Corey (Theory & Practice)', detail: 'Supportive, non-confrontational alliance building; DBT-informed distress tolerance; multicultural exploration and broaching' },
    { id: 'R5', source: 'HIPAA', detail: 'Treatment disclosures among providers; separate protections for psychotherapy notes; access controls and audit of EHR access' },
    { id: 'R6', source: 'State law', detail: 'Whether counselors have any mandated duty to report an impaired health-care professional to a licensing board or employer' },
    { id: 'R7', source: 'NBCC 2027 Spec', detail: 'Collaboration with interdisciplinary teams; plans for disruption of service; EHR security' },
  ],
  questions: [
    Q('q1', 'assess', 'Which finding most clearly distinguishes factitious disorder from malingering in Tomás’s case?', ['R1'], 'c', [
      O('His inducing infections while declining paid leave and workers’ compensation, with no obvious external reward.', 3,
        'Deception without external incentive', 'Apply the discriminator', 'Both conditions involve deception; factitious disorder is defined by the absence of obvious external rewards such as money or time off', ['declined paid leave', 'extra shifts'], 'Using evidence of deception alone to choose between the two'),
      O('His repeated infections with mixed bowel and skin bacteria, which strongly suggest the wounds are being induced.', 0,
        'Shows induction, not motive', 'Lab-evidence framing', 'The bacteria support induced illness but do not separate factitious disorder from malingering', ['polymicrobial cultures'], 'Using shared evidence as the discriminator'),
      O('His strong love of nursing, which shows he could not be faking illness to escape his job or other obligations.', -1,
        'Overreads one statement', 'Character framing', 'Enjoying work is weaker evidence than his declined benefits and does not rule out deception', ['says he loves his job'], 'Relying on self-report over behavior'),
      O('His good wound healing in the hospital, which points to a genuine immune problem rather than deliberate behavior.', -2,
        'Reverses the evidence', 'Medical-cause framing', 'Healing under observation and recurrence after discharge points toward induction, not immune disease', ['recurs after discharge'], 'Misreading a hallmark pattern'),
    ]),
    Q('q2', 'profdev', 'Reading the chart, the counselor feels irritated and “played.” What is the most appropriate response?', ['R3'], 'd', [
      O('Use self-regulation and supervision to process the reaction, so that it does not turn into a punitive stance toward him.', 3,
        'Self-regulate and process', 'Utilize self-regulation', 'Strong negative reactions are common with factitious disorder; processing them protects the alliance and the client', ['feels “played”'], 'Letting anger shape the approach'),
      O('Set the reaction aside and proceed, since experienced counselors can put personal feelings on hold during sessions.', 0,
        'Suppression is not processing', 'Bracket framing', 'Feelings set aside without reflection often resurface as subtle hostility', ['strong reaction'], 'Assuming feelings can be switched off'),
      O('Ask the team to have someone else see him first, until she feels less irritated about the way he has deceived them.', -1,
        'Avoids the work', 'Delay framing', 'Handing off to wait out her irritation delays care and does not address the reaction', ['referral from Dr. Park'], 'Avoiding the client instead of processing'),
      O('Tell Tomás at the first session that she knows what he is doing, so that the work starts from a place of full honesty.', -2,
        'Acts out the reaction', 'Confrontation framing', 'Opening with an accusation is likely to end engagement and repeat the team’s suspicion', ['no one has discussed it'], 'Calling hostility honesty'),
    ]),
    Q('q3', 'assess', 'Tomás says that when his pressure dropped he “felt kind of relieved, like I could finally stop.” She should:', ['R2'], 'b', [
      O('Assess suicide risk directly with a structured tool, including how he views the danger of the infections he induces.', 3,
        'Structured risk assessment', 'Assess risk to self', 'Relief at a life-threatening event can signal suicidal thinking; direct screening that includes the danger of self-induced illness is needed', ['relief at septic hypotension', 'two bloodstream infections'], 'Overlooking risk hidden in a wistful remark'),
      O('Ask Dr. Park to admit him for observation now, since relief at a medical crisis shows that he is at imminent risk.', 0,
        'Jumps to a level of care', 'Over-restrictive framing', 'Admission may become necessary, but assessment comes first; over-restriction is still safer than missing risk', ['risk not yet assessed'], 'Deciding level of care before assessing'),
      O('Note it as a sign of exhaustion from chronic illness, and revisit it if he says anything similar in a later session.', -1,
        'Delays assessment', 'Exhaustion framing', 'Attributing the remark to fatigue leaves possible suicidal thinking unexplored', ['“finally stop”'], 'Explaining away a risk statement'),
      O('Avoid asking about suicide for now, since raising it could make him defensive and lead him to leave counseling early.', -2,
        'Avoids a needed safety step', 'Alliance-protection framing', 'Asking directly does not drive clients away when done with care; avoidance misses risk', ['recurrent life-threatening infections'], 'Trading safety assessment for rapport'),
    ]),
    Q('q4', 'profdev', 'The counselor has never treated factitious disorder. What is the most appropriate step?', ['R3', 'R7'], 'a', [
      O('Consult the consultation-liaison psychiatrist and seek focused training, while coordinating care within the team.', 3,
        'Consult and train within the team', 'Seek consultation', 'A rare, high-risk condition calls for consultation with experienced colleagues and targeted training while staying in coordinated care', ['C-L psychiatrist on team', 'no FD experience'], 'Working alone or abandoning care'),
      O('Refer him to an outside specialist at once, even though leaving the team could cut him off from coordinated care.', 0,
        'Loses integration', 'Refer-out framing', 'A specialist could help, but leaving the integrated team fragments care for a condition that depends on coordination', ['integrated clinic'], 'Choosing referral over consultation'),
      O('Treat him as she would a client with somatic symptom disorder, since both conditions respond to the same approach.', -1,
        'Wrong framework', 'Equivalence framing', 'Factitious disorder involves deception and induced illness, which call for a different team approach', ['induced infections'], 'Treating different disorders as interchangeable'),
      O('Proceed alone without consultation, since factitious disorder is rare and specialized guidance is hard to find.', -2,
        'Unsupported practice in a high-risk case', 'Go-it-alone framing', 'Rarity is a reason to consult, not to proceed alone, especially with life-threatening self-harm', ['sepsis history'], 'Using rarity as an excuse to skip consultation'),
    ]),
    Q('q5', 'indirect', 'Dr. Park proposes confronting Tomás with the syringe photo at his next visit. How should the counselor contribute?', ['R4', 'R7'], 'a', [
      O('Advocate for a unified, non-punitive team approach with one medical lead and shared limits on unneeded procedures.', 3,
        'Coordinated, non-punitive team stance', 'Collaborate with treatment team', 'A consistent, supportive approach with a single lead reduces harm and keeps him engaged better than accusation', ['psychiatrist favors non-punitive approach', 'six admissions'], 'Leaving the team divided or punitive'),
      O('Stay out of the medical discussion, since decisions about how to present the findings belong to the physicians.', 0,
        'Withholds needed input', 'Lane framing', 'The counselor’s view on engagement is directly relevant; silence leaves a risky plan unexamined', ['team meeting'], 'Not contributing to interdisciplinary planning'),
      O('Support the confrontation but ask to be present so she can calm Tomás down if he becomes upset by the photo.', -1,
        'Endorses a likely harmful approach', 'Bystander framing', 'Being present does not offset the risk that an accusatory confrontation leads him to flee care', ['photo of syringe'], 'Softening a confrontation instead of changing it'),
      O('Agree to the plan and suggest also telling his employer, so his access to hospital supplies can be restricted.', -2,
        'Punitive and a breach', 'Punitive framing', 'Informing his employer without legal basis breaches confidentiality and could cost his livelihood', ['no evidence of workplace harm'], 'Combining confrontation with an unauthorized disclosure'),
    ]),
    Q('q6', 'planning', 'Which initial counseling approach best fits Tomás right now?', ['R4'], 'c', [
      O('Build trust through a supportive, non-confrontational focus on his stress, caregiving history, and need for care.', 3,
        'Alliance-first, non-punitive', 'Develop an initial plan', 'A supportive focus on the needs behind the behavior engages him and creates room to address the illness without shame', ['no one asked how he is', 'cared for siblings'], 'Starting with accusation or ignoring the behavior'),
      O('Focus first on his grief over his father’s death, setting the infections aside until that loss has been processed.', 0,
        'Relevant but incomplete', 'Grief-first framing', 'Grief may matter, but the plan must also address ongoing self-induced infection risk', ['bloodstream infections'], 'Setting aside a life-threatening behavior'),
      O('Use a direct, firm approach that names the self-induced infections early, since denial is the main barrier in FD.', -1,
        'Confrontation tends to drive clients away', 'Confront-early framing', 'Early direct confrontation commonly leads to denial, anger, and leaving care', ['team has not raised it'], 'Mistaking confrontation for honesty'),
      O('Make continued medical care conditional on his signed admission that he caused the infections himself.', -2,
        'Coercive and dangerous', 'Ultimatum framing', 'Withholding medical care risks his life and is coercive', ['sepsis history'], 'Using care as leverage'),
    ]),
    Q('q7', 'planning', 'The counselor will begin an eight-week medical leave in two months. How should she plan for this?', ['R3', 'R7'], 'd', [
      O('Tell Tomás early, name a covering counselor, plan a warm handoff, and agree on how his care continues during her leave.', 3,
        'Planned continuity of care', 'Plan for disruption of service', 'Early notice and a concrete coverage plan protect continuity for a client whose distress rises when he feels alone', ['planned leave', 'urges when alone'], 'Leaving a disruption unplanned'),
      O('Tell Tomás a week before the leave and give him the clinic’s main number to call if he needs anything while she is away.', 0,
        'Late and thin', 'Short-notice framing', 'Some notice is given, but one week and a general number are not a continuity plan', ['eight-week leave'], 'Under-planning a service disruption'),
      O('Wait to mention the leave until their alliance is stronger, so the news does not unsettle him too early in counseling.', -1,
        'Withholds needed information', 'Protective-delay framing', 'Delaying notice leaves less time to plan and may feel like a betrayal later', ['two months away'], 'Withholding information to protect the alliance'),
      O('Close his case before the leave and ask him to start again with a new counselor once she is back at the clinic.', -2,
        'Abandonment', 'Close-and-restart framing', 'Closing a high-risk client’s case for a planned absence abandons him at a vulnerable time', ['recurrent sepsis'], 'Ending care instead of covering it'),
    ]),
    Q('q8', 'legal', 'The supervisor asks whether the counselor must report Tomás to the board of nursing or his employer. She should:', ['R6', 'R3'], 'b', [
      O('Check state law and consult, keep his confidence absent a legal duty or danger to others, and document why.', 3,
        'Law-informed confidentiality', 'Adhere to laws and ethics', 'Without evidence of risk to patients or a legal mandate, confidentiality holds; checking law and documenting the decision is required', ['no evidence of patient harm', 'state rules not yet checked'], 'Reporting or refusing without checking the law'),
      O('Report nothing and skip consultation, since counseling confidentiality outweighs any rule about health-care workers.', 0,
        'Right outcome, wrong process', 'Confidentiality-absolute framing', 'Confidentiality likely holds, but she must verify state law and document rather than assume', ['rules not checked'], 'Assuming confidentiality without verifying law'),
      O('Urge Tomás to self-report to the board now, and tell him she will report it herself if he does not do so.', -1,
        'Coercive threat', 'Ultimatum framing', 'Threatening a report she may have no basis to make coerces him and damages trust', ['no legal mandate identified'], 'Using a threatened report as leverage'),
      O('Notify his employer, since a nurse who harms himself may harm patients and the hospital has a right to know.', -2,
        'Unauthorized disclosure', 'Speculative-risk framing', 'Speculation about patient risk does not justify breaching confidentiality without evidence or legal duty', ['no evidence of patient harm'], 'Breaching confidentiality on speculation'),
    ]),
    Q('q9', 'legal', 'Dr. Park asks for the counselor’s session notes. Under the clinic consent, the counselor should:', ['R5'], 'd', [
      O('Share the treatment information the team needs for coordination, keeping her separate psychotherapy notes private.', 3,
        'Treatment sharing, notes protected', 'Adhere to federal law', 'Treatment information may be shared among the care team under his consent; separately kept psychotherapy notes need specific authorization', ['clinic consent covers team sharing'], 'Confusing treatment information with psychotherapy notes'),
      O('Decline to share anything without a new signed release, even though the clinic consent covers team communication.', 0,
        'Overly restrictive', 'New-release framing', 'His consent already covers team treatment communication; refusing hampers coordinated care', ['standard consent signed'], 'Blocking appropriate team communication'),
      O('Send her complete psychotherapy notes, since Dr. Park is a treating physician and needs the full clinical picture.', -1,
        'Over-discloses protected notes', 'Full-picture framing', 'Psychotherapy notes carry extra protection and are not needed for medical coordination', ['psychotherapy notes'], 'Treating all notes as shareable'),
      O('Send the notes and copy the wound-care nurse and his unit manager, so that everyone involved stays fully informed.', -2,
        'Discloses to his employer', 'Broadcast framing', 'His unit manager is his employer, not a treating provider; this is a serious breach', ['unit manager is not on the care team'], 'Widening disclosure beyond the care team'),
    ]),
    Q('q10', 'legal', 'Coworkers can open Tomás’s chart in the shared electronic health record. What should the counselor do?', ['R5', 'R7'], 'a', [
      O('Ask that his record be flagged as restricted under EHR policy, and request an audit of who has opened it so far.', 3,
        'Access controls and audit', 'Securely maintain records', 'Restricting access to staff-patient records and auditing access are core EHR safeguards against snooping', ['hospital employee', 'shared EHR'], 'Leaving a known privacy risk unaddressed'),
      O('Tell Tomás that coworkers may be able to see his chart, so he can decide what to share with her in counseling.', 0,
        'Informs but does not fix', 'Disclosure framing', 'Telling him is honest, but she should also act to reduce the risk', ['shared EHR'], 'Shifting the burden to the client'),
      O('Keep only brief notes in the EHR and store the details in a paper file at her desk where coworkers cannot reach them.', -1,
        'Creates an unsecured shadow record', 'Shadow-record framing', 'An off-system file creates its own security and records-integrity problems', ['records policy'], 'Solving one risk by creating another'),
      O('Do nothing, since staff are bound by HIPAA and it is up to each employee to stay out of a coworker’s chart.', -2,
        'Ignores a known risk', 'Individual-responsibility framing', 'Known access risks call for safeguards; relying on goodwill leaves his record exposed', ['coworkers can open the chart'], 'Treating rules as a substitute for safeguards'),
    ]),
    Q('q11', 'interventions', 'Tomás says, “Dr. Park looks at me like I’m doing this to myself.” Which response best uses core counseling skills?', ['R4'], 'b', [
      O('“It sounds lonely to feel judged by the people who are caring for you. What has that been like for you?”', 3,
        'Empathic reflection', 'Use core counseling skills', 'Reflecting his feeling without confirming or denying the team’s view keeps him engaged and opens exploration', ['feels judged', 'no one asks how he is'], 'Defending the team or confronting the client'),
      O('“Doctors can seem cold when they are busy. I’m sure Dr. Park is doing her best to help you as she can.”', 0,
        'Reassures and defends', 'Smoothing framing', 'Defending the physician skips his experience and may feel dismissive', ['his statement'], 'Reassuring instead of reflecting'),
      O('“Let’s not focus on Dr. Park. Tell me more about the stress you have been feeling at work this month.”', -1,
        'Deflects', 'Redirect framing', 'Changing the subject misses a key opening about feeling judged', ['opening offered'], 'Avoiding an emotionally loaded topic'),
      O('“The team does think so, and the evidence is strong. Let’s talk about why you are hurting yourself.”', -2,
        'Abrupt confrontation', 'Confront framing', 'Unplanned confrontation outside the team strategy risks flight from care', ['non-punitive team plan'], 'Confronting outside the agreed approach'),
    ]),
    Q('q12', 'interventions', 'Tomás describes urges to “mess with” a healing wound when he feels alone after a shift. Which intervention fits best?', ['R4'], 'c', [
      O('Map the urge cycle with him and practice distress-tolerance and connection skills to use when the urges rise.', 3,
        'Skills for the urge cycle', 'Facilitate skill development', 'Linking loneliness to urges and building alternative coping and connection directly targets the behavior', ['urges when alone', 'after shifts'], 'Not targeting the urge cycle'),
      O('Ask him to record each urge in a diary and bring it to sessions, before any coping skills are introduced.', 0,
        'Assessment without intervention', 'Monitor-first framing', 'Tracking helps, but holding off on skills leaves him without tools while urges continue', ['current urges'], 'Delaying skills for data collection'),
      O('Suggest he pick up more shifts so he is too busy to be alone, since loneliness appears to trigger his urges.', -1,
        'Avoidance, not coping', 'Busy framing', 'Extra shifts may increase exhaustion and do not build coping or connection', ['extra shifts already'], 'Using busyness as a coping strategy'),
      O('Tell him that acting on the urges is a choice and that he simply needs to stop, since as a nurse he knows the risks.', -2,
        'Shaming and ineffective', 'Willpower framing', 'Shame increases secrecy and does nothing to build alternatives', ['disclosed urges'], 'Responding to disclosure with blame'),
    ]),
    Q('q13', 'interventions', 'Tomás says his family expects the eldest son to handle things without complaint. The counselor should:', ['R4'], 'c', [
      O('Explore how family and cultural expectations shape how he asks for care, and how they may connect to his illness.', 3,
        'Broach culture and context', 'Explore culture and worldview', 'Understanding how role expectations limit direct help-seeking helps explain the need for care met through illness', ['eldest son', 'cared for siblings at 15'], 'Treating culture as background only'),
      O('Encourage him to bring his mother to a session so the counselor can explain his needs directly to his family.', 0,
        'Premature family involvement', 'Family-session framing', 'Family work may help later, but it skips his own exploration and his consent to what is shared', ['confidential disclosures'], 'Moving to family sessions before exploring'),
      O('Note it as background and return the focus to his wound urges, since culture is not central to this disorder.', -1,
        'Misses a key context', 'Culture-as-background framing', 'His role expectations may link closely to how he seeks care', ['no one asks how he is'], 'Discounting cultural context'),
      O('Tell him that these traditional expectations are unhealthy and that he should set them aside in order to get better.', -2,
        'Imposes values', 'Judgment framing', 'Dismissing his family’s values imposes the counselor’s worldview and harms the alliance', ['cultural identity'], 'Imposing personal values on a client'),
    ]),
  ],
};

module.exports = { CASES: [D965, D966, D967, D968, D969] };
