// deep-cases-2027-batch-01.js — NCMHCE deep cases, Depressive category
// 2027 NCMHCE specification (NBCC, effective July 1, 2027); hand-authored;
// validate with check2027.js. Standalone deliverable for SME review. Do NOT auto-import.
//
// ncmhce-D920 · plan 0 · Depressive · medium · adult       — Persistent Depressive Disorder (F34.1)
// ncmhce-D921 · plan 1 · Depressive · hard   · adult       — MDD, Single Episode, Moderate, With Peripartum Onset (F32.1)
// ncmhce-D922 · plan 2 · Depressive · medium · adult       — Premenstrual Dysphoric Disorder (F32.81)
// ncmhce-D923 · plan 3 · Depressive · medium · child       — Disruptive Mood Dysregulation Disorder (F34.81)
// ncmhce-D924 · plan 4 · Depressive · hard   · older_adult — Major Depressive Disorder, Severe (F33.2)

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
// D920 — Persistent Depressive Disorder · plan 0 · medium · adult
// Complications (medium): a differential needing a discriminator (onset that
// predates the caregiving stressor) and passive ideation inside caregiver burden.
// ============================================================================
const D920 = {
  id: 'ncmhce-D920',
  title: 'An eldest daughter’s years-long gray mood under the weight of her mother’s dementia',
  category: 'Depressive',
  difficulty: 'medium',
  plan: 0,
  population: 'adult',
  primaryDiagnosis: { name: 'Persistent Depressive Disorder', code: 'F34.1' },
  diagnosis: { name: 'Persistent Depressive Disorder', code: 'F34.1' },
  differentialOptions: [
    { id: 'do1', name: 'Adjustment Disorder, with Depressed Mood', isCorrect: false },
    { id: 'do2', name: 'Persistent Depressive Disorder', isCorrect: true },
    { id: 'do3', name: 'Major Depressive Disorder, Single Episode, Moderate', isCorrect: false },
    { id: 'do4', name: 'Generalized Anxiety Disorder', isCorrect: false },
  ],
  narrative: {
    intake:
      'Hyun-joo Park, a 52-year-old Korean American part-time bookkeeper for a dental group who is fluent in English and Korean, is referred by her primary care physician (PCP) to a community ' +
      'counseling center. For three years, since her father died, she has cared at home for her mother, Soon-ja, 81, who has moderate Alzheimer’s disease and ' +
      'now speaks mostly Korean. Hyun-joo is divorced; her son is in college and her younger brother, Daniel, lives in Seattle and sends money. She describes ' +
      'feeling “gray and heavy” most days “since my early forties, long before Umma got sick,” and cannot recall feeling okay for more than a few weeks at a ' +
      'time. She reports low energy, poor concentration at work, and low self-worth (“I am not a good daughter or a good anything”), and she sleeps about five ' +
      'broken hours because her mother wanders at night. Her appetite is unchanged, she still enjoys Sunday choir when she can go, and she has never had a ' +
      'period of several weeks that was much worse than her usual. PHQ-9 is 11. Asked about suicide, she says, “Sometimes at night I think it would be easier ' +
      'not to wake up, but I would never leave Umma alone”; she denies plan, intent, or past attempts, there are no firearms in the home, and she does not ' +
      'drink. Her PCP started sertraline four weeks ago. The counselor, who spends weekends caring for her own father with Parkinson’s-related dementia, ' +
      'notices her eyes tearing during the intake and an urge to tell Hyun-joo what worked for her family. The counselor has had few Korean American clients ' +
      'and little training in how caregiving duty is understood in Korean families.',
    session1:
      'Hyun-joo completes the Zarit Burden Interview and scores in the high-burden range. She lists her mother’s night wandering, her own exhaustion, missed ' +
      'workdays, guilt, and losing touch with her choir friends. She reports that since starting sertraline she has mild nausea, sleeps a little more deeply ' +
      'when she does sleep, and feels “maybe a little less heavy”; she has not told her PCP about the nausea and skips a dose “on bad stomach days.” She signs ' +
      'a release for the PCP. She is willing to look into an adult day program two days a week but worries her mother “won’t understand anyone” because ' +
      'Soon-ja has lost most of her English. The counselor mentions that some families also consider memory care later on.',
    session2:
      'Hyun-joo arrives tense and says that last week the counselor “sounded like you want me to put Umma in a home”; she almost cancelled. She explains that ' +
      'in her family the eldest daughter cares for her parents, that church friends would judge her, and that Daniel has pushed memory care for a year. She ' +
      'did go to choir once while a cousin sat with her mother and says she felt “lighter for a whole day.” The center has just begun offering an AI ' +
      'note-taking tool that records sessions and drafts progress notes; the counselor has not yet discussed it with Hyun-joo. That afternoon Daniel calls ' +
      'the center asking how his sister is doing and whether she is “really depressed or just tired.” Hyun-joo has not signed a release for him.',
  },
  diagnosticRationale:
    'Depressed mood most of the day, more days than not, for well over two years (since her early forties), with low energy, poor concentration, low ' +
    'self-esteem, and sleep disturbance, and no symptom-free interval longer than two months, meets persistent depressive disorder. Onset predates her ' +
    'mother’s illness by years, so the caregiving stressor intensifies but does not explain the disorder, which rules out an adjustment disorder. She has ' +
    'never had a distinct period meeting full major depressive episode criteria (interest preserved, appetite unchanged, PHQ-9 moderate), and worry is not ' +
    'her primary complaint. Caregiver burden is a clinical focus that shapes the plan rather than a separate diagnosis.',
  references: [
    { id: 'R1', source: 'DSM-5-TR', detail: 'Persistent depressive disorder: depressed mood most days for at least 2 years, 2+ associated symptoms, no symptom-free period over 2 months; differential with adjustment disorder and MDD' },
    { id: 'R2', source: 'C-SSRS', detail: 'Structured inquiry into passive and active ideation, intent, plan, and behavior when a client endorses wishing not to wake up' },
    { id: 'R3', source: 'Stanley-Brown SPI', detail: 'Collaborative safety plan: warning signs, coping strategies, social contacts, crisis lines, and means safety' },
    { id: 'R4', source: 'Hays (Assessment)', detail: 'Selecting instruments matched to the referral question, including caregiver burden measures and repeated symptom monitoring' },
    { id: 'R5', source: 'APA CPG', detail: 'Depression guideline: behavioral activation and CBT as supported psychotherapies for adult depressive disorders' },
    { id: 'R6', source: 'ACA Code of Ethics', detail: 'Informed consent, respect for client values and cultural meaning, avoiding imposition of counselor values, confidentiality, and counselor impairment and countertransference' },
    { id: 'R7', source: 'HIPAA', detail: 'Privacy Rule: no disclosure of protected health information to family without authorization; safeguards for recordings and electronic records' },
    { id: 'R8', source: 'Wiger (Documentation)', detail: 'Documenting client-reported medication effects and coordination with prescribers' },
    { id: 'R9', source: 'NBCC Code of Ethics', detail: 'Competence, consultation and supervision, and informed consent for technology used in counseling' },
  ],
  questions: [
    // ---------------- intake (5) ----------------
    Q('q1', 'profdev', 'intake', 'The counselor notices tears and an urge to share what worked with her own father during the intake. What is the best next step?', ['R6', 'R9'], [
      O('a', 'Briefly disclose that she is also a caregiver to build rapport, then watch for over-identification later.', 0,
        { r: 'Disclosure is not the first move', approach: 'Rapport through self-disclosure', why: 'A brief, purposeful disclosure can sometimes help, but it does not address the countertransference the counselor has already noticed', keys: ['eyes tearing during intake', 'urge to tell what worked'], mistake: 'Using self-disclosure to manage the counselor’s own reaction instead of examining it' }),
      O('b', 'Reflect on her reaction after the session and take it to supervision before it shapes clinical choices.', 3,
        { r: 'Self-reflection plus supervision', approach: 'Manage countertransference', why: 'A strong personal reaction rooted in the counselor’s own caregiving should be examined in self-reflection and supervision so it does not steer the plan', keys: ['own father with dementia', 'urge to advise from personal experience'], mistake: 'Assuming shared experience automatically helps the client' }),
      O('c', 'Set the reaction aside, since a trained counselor’s personal history has little effect on judgment.', -1,
        { r: 'Denies countertransference', approach: 'Suppress and proceed', why: 'Personal history does influence clinical judgment; ignoring a noticed reaction leaves it free to shape decisions without awareness', keys: ['visible tearing in session'], mistake: 'Believing training alone neutralizes personal reactions' }),
      O('d', 'Share the respite and placement strategies that worked for her own father as a model for Hyun-joo.', -2,
        { r: 'Boundary and values imposition', approach: 'Advise from personal life', why: 'Offering the counselor’s family choices as a template shifts focus to the counselor and imposes her values on a culturally different decision', keys: ['Korean family caregiving norms', 'client’s own values not yet explored'], mistake: 'Treating the counselor’s own caregiving solutions as the client’s answer' }),
    ]),
    Q('q2', 'profdev', 'intake', 'Given the counselor’s limited experience with Korean American caregiving norms, what should the counselor do?', ['R6', 'R9'], [
      O('a', 'Refer her to a Korean-speaking counselor, since cultural differences make this pairing unsuitable.', -1,
        { r: 'Referral on ethnicity alone', approach: 'Match by culture', why: 'Hyun-joo is fluent in English and has not asked for a different counselor; limited cultural knowledge calls for growth and consultation, not automatic referral', keys: ['fluent English speaker', 'no request for a different counselor'], mistake: 'Assuming any cultural gap makes a counselor unsuitable' }),
      O('b', 'Read about Korean culture in general and use that knowledge to guide decisions in her treatment plan.', 0,
        { r: 'Helpful but risks generalizing', approach: 'Self-study', why: 'Reading builds background, but applying group generalizations without asking her risks stereotyping; consultation and her own account are needed', keys: ['individual meaning of caregiving'], mistake: 'Substituting general cultural facts for the client’s own worldview' }),
      O('c', 'Treat her sense of filial duty as the source of her depression and target it for change in therapy.', -2,
        { r: 'Pathologizes a cultural value', approach: 'Value as symptom', why: 'Her low mood predates caregiving; framing filial duty as pathology imposes counselor values and can rupture the alliance', keys: ['mood low since early forties', 'eldest-daughter role'], mistake: 'Treating a culturally held value as the disorder' }),
      O('d', 'Seek consultation and cultural training while asking Hyun-joo how her family views caregiving.', 3,
        { r: 'Build competence, center client', approach: 'Consult, train, and ask', why: 'Competence is expanded through consultation and training while the client’s own meaning of caregiving guides the work', keys: ['few Korean American clients', 'little relevant training'], mistake: 'Either referring out or relying on generalizations instead of building competence' }),
    ]),
    Q('q3', 'assess', 'intake', 'Which finding most strongly supports persistent depressive disorder over the other diagnoses being considered?', ['R1'], [
      O('a', 'Her low mood has lasted most days since her early forties, predating her mother’s illness, without a full episode.', 3,
        { r: 'Chronicity predating the stressor', approach: 'Apply duration and onset', why: 'PDD requires depressed mood most days for two years; onset years before caregiving rules out adjustment disorder, and no full episode has occurred', keys: ['“since my early forties”', 'never several weeks much worse'], mistake: 'Attributing chronic depression to the most visible current stressor' }),
      O('b', 'Her mood worsened after her mother’s diagnosis three years ago, tying her symptoms to a clear stressor.', -1,
        { r: 'Points toward adjustment disorder', approach: 'Stressor-linked framing', why: 'Her mood was low long before the diagnosis; adjustment disorder requires onset within three months of a stressor', keys: ['onset predates caregiving'], mistake: 'Anchoring on the current stressor and ignoring the onset history' }),
      O('c', 'Her PHQ-9 score of 11 falls in the moderate range, which on its own confirms a chronic rather than an episodic disorder.', 0,
        { r: 'Screen does not establish course', approach: 'Score-based diagnosis', why: 'A PHQ-9 score reflects current severity over two weeks; it cannot establish chronicity, which comes from history', keys: ['PHQ-9 is a two-week screen'], mistake: 'Treating a screening score as diagnostic of course' }),
      O('d', 'Her fatigue and broken sleep come from night caregiving, so any depressive diagnosis would be premature.', -2,
        { r: 'Explains away depression', approach: 'Situational attribution', why: 'Caregiving explains some sleep loss, but years of depressed mood, low self-worth, and passive ideation would be missed', keys: ['passive ideation', 'low self-worth'], mistake: 'Dismissing a depressive disorder because a situational explanation exists' }),
    ]),
    Q('q4', 'assess', 'intake', 'Which assessment addition would best inform Hyun-joo’s treatment plan?', ['R4'], [
      O('a', 'Repeat the PHQ-9 at every session and use it as the single outcome measure for her treatment plan.', 0,
        { r: 'Useful but incomplete', approach: 'Symptom tracking only', why: 'Repeated PHQ-9 tracks mood, but it misses caregiver burden, which drives much of her impairment and plan', keys: ['night wandering', 'missed work'], mistake: 'Measuring symptoms while ignoring the main contextual driver' }),
      O('b', 'Give Hyun-joo a cognitive screen such as the MMSE, since poor concentration may signal early dementia.', -1,
        { r: 'Wrong target for the referral question', approach: 'Cognitive screening', why: 'Concentration problems are a depressive symptom here; nothing suggests a neurocognitive disorder in a 52-year-old working client', keys: ['working bookkeeper', 'concentration tied to mood and sleep'], mistake: 'Confusing the patient’s dementia with the caregiver’s symptoms' }),
      O('c', 'Add a caregiver burden measure such as the Zarit Burden Interview alongside ongoing PHQ-9 monitoring.', 3,
        { r: 'Measure burden and mood', approach: 'Instrument matched to the question', why: 'A caregiver burden measure quantifies strain that shapes goals and referrals, and repeated PHQ-9 tracks depressive severity', keys: ['three years of home caregiving', 'PHQ-9 of 11'], mistake: 'Choosing instruments that do not address the client’s actual stressors' }),
      O('d', 'Ask her brother to rate her mood by phone so the counselor has an objective view of how she functions.', -2,
        { r: 'Collateral without consent', approach: 'Third-party report', why: 'Contacting family requires her authorization, and a distant brother is not an objective informant on daily functioning', keys: ['no release for Daniel', 'brother lives in Seattle'], mistake: 'Gathering collateral without consent and assuming family reports are objective' }),
    ]),
    Q('q5', 'assess', 'intake', 'How should the counselor respond to Hyun-joo’s statement that it would be easier not to wake up?', ['R2', 'R3'], [
      O('a', 'Refer her for an emergency psychiatric evaluation today given her chronic depression and caregiving strain.', 0,
        { r: 'Over-restrictive for current risk', approach: 'Escalate level of care', why: 'She denies plan, intent, and past attempts and has strong reasons for living; emergency evaluation exceeds the current risk, though it errs toward safety', keys: ['no plan or intent', 'no firearms'], mistake: 'Escalating before completing a structured assessment' }),
      O('b', 'Complete a structured suicide risk assessment such as the C-SSRS and build a safety plan with her.', 3,
        { r: 'Assess fully, then safety-plan', approach: 'Structured risk assessment', why: 'Passive ideation warrants structured inquiry into ideation, intent, plan, and behavior plus a collaborative safety plan', keys: ['“easier not to wake up”', 'caregiver exhaustion'], mistake: 'Treating passive ideation as either harmless or an emergency without assessing it' }),
      O('c', 'Have her sign a written agreement not to harm herself before she leaves the intake appointment.', -2,
        { r: 'No-suicide contract', approach: 'Contract for safety', why: 'No-suicide contracts are not supported by evidence and can give false reassurance in place of assessment and planning', keys: ['passive ideation endorsed'], mistake: 'Believing a signed promise reduces suicide risk' }),
      O('d', 'Note the remark as passive ideation in the chart and revisit risk only if her mood scores worsen.', -1,
        { r: 'Misses a safety step', approach: 'Document and wait', why: 'Passive ideation still requires full assessment and a safety plan now; waiting for scores to rise leaves risk unaddressed', keys: ['ideation disclosed at intake'], mistake: 'Assuming passive ideation needs no action' }),
    ]),
    // ---------------- session1 (3) ----------------
    Q('q6', 'planning', 'session1', 'Which first objective best fits a collaborative, SMART treatment plan for Hyun-joo?', ['R5', 'R4'], [
      O('a', 'Within four weeks, Hyun-joo will arrange two respite blocks weekly and spend one on a valued activity.', 3,
        { r: 'Specific, measurable, attainable', approach: 'SMART objective', why: 'The goal is time-bound and measurable, targets her top burden, and builds in activation she values', keys: ['high Zarit score', 'enjoys choir'], mistake: 'Writing goals that are vague or set by the counselor' }),
      O('b', 'Hyun-joo will feel less guilty about her caregiving and more accepting of her limits as a daughter.', -1,
        { r: 'Not measurable', approach: 'Feeling-state goal', why: 'Reduced guilt is a worthy aim but has no behavior, measure, or timeframe, so progress cannot be reviewed', keys: ['guilt listed as a problem'], mistake: 'Confusing a broad aim with a SMART objective' }),
      O('c', 'Hyun-joo will lower her PHQ-9 score below 5 within four weeks through weekly counseling sessions.', 0,
        { r: 'Measurable but unrealistic', approach: 'Symptom-score target', why: 'Remission in four weeks is not realistic for a chronic disorder, and the goal does not address her burden', keys: ['chronic course since forties'], mistake: 'Setting an unattainable timeline for a persistent disorder' }),
      O('d', 'Hyun-joo will move her mother into a memory care facility within the month to protect her own health.', -2,
        { r: 'Imposes counselor values', approach: 'Directive placement goal', why: 'Placement is her family decision; writing it into the plan overrides her values and is not collaborative', keys: ['eldest-daughter duty', 'not raised by client'], mistake: 'Setting goals for the client based on the counselor’s view of what is best' }),
    ]),
    Q('q7', 'planning', 'session1', 'Hyun-joo is open to an adult day program but worries her mother will not understand staff. What referral is most appropriate?', ['R5', 'R6'], [
      O('a', 'Hold off on referrals until her depression improves so she does not feel overwhelmed by new tasks.', -1,
        { r: 'Delays needed support', approach: 'Defer resources', why: 'Caregiver burden maintains her depression; delaying respite withholds a key lever for improvement', keys: ['high burden', 'willing to try day program'], mistake: 'Treating resource linkage as optional until symptoms lift' }),
      O('b', 'Give her a printed list of local dementia support groups to look into when she has free time.', 0,
        { r: 'Passive and untargeted', approach: 'Generic resource list', why: 'Support groups can help, but a list does not address respite or her language concern, and she has little free time', keys: ['five hours of broken sleep'], mistake: 'Offering resources that ignore the client’s stated barrier' }),
      O('c', 'Refer her to the Area Agency on Aging and ask about adult day programs with Korean-speaking staff.', 3,
        { r: 'Targeted, culturally fit referral', approach: 'Community resource linkage', why: 'The Area Agency on Aging coordinates respite and day programs and can locate language-concordant services that address her barrier', keys: ['mother speaks mostly Korean', 'open to two days a week'], mistake: 'Making referrals without matching them to language and cultural needs' }),
      O('d', 'Urge her to enroll her mother anywhere open now, since language needs matter little in later dementia.', -2,
        { r: 'Inaccurate and dismissive', approach: 'Speed over fit', why: 'People with dementia often revert to their first language, so language-concordant care matters more, not less', keys: ['lost most English'], mistake: 'Dismissing a valid cultural and clinical concern' }),
    ]),
    Q('q8', 'indirect', 'session1', 'How should the counselor handle what Hyun-joo reports about her sertraline?', ['R8', 'R7'], [
      O('a', 'Encourage her to mention the nausea to her doctor at her next routine visit in two months.', 0,
        { r: 'Right idea, too slow', approach: 'Client self-report to PCP', why: 'Telling the PCP is appropriate, but skipped doses warrant timely coordination under the signed release', keys: ['skips doses on bad days', 'release signed'], mistake: 'Leaving a medication adherence problem until a routine visit' }),
      O('b', 'Advise her to take the sertraline with food and to skip a dose on the days when the nausea is at its worst.', -2,
        { r: 'Outside counselor scope', approach: 'Medication advice', why: 'Dosing guidance belongs to the prescriber; advising skipped doses can worsen symptoms and adherence', keys: ['sertraline prescribed by PCP'], mistake: 'Giving medication instructions as a counselor' }),
      O('c', 'Record that she takes an antidepressant without listing the effects and missed doses she reports.', -1,
        { r: 'Incomplete documentation', approach: 'Minimal note', why: 'Self-reported effects and adherence are clinically relevant and should be documented specifically for continuity of care', keys: ['nausea', 'improved sleep depth'], mistake: 'Omitting medication effects from the record' }),
      O('d', 'Document her reported nausea, missed doses, and sleep change, and share them with her PCP per her release.', 3,
        { r: 'Document and coordinate', approach: 'Self-reported medication effects', why: 'Counselors record what clients report about medication and coordinate with the prescriber when consent allows', keys: ['release for PCP signed', 'skipped doses'], mistake: 'Either advising on medication or ignoring what the client reports' }),
    ]),
    // ---------------- session2 (5) ----------------
    Q('q9', 'interventions', 'session2', 'Hyun-joo says the counselor sounded like she wanted Umma “in a home” and that she almost cancelled. What is the best response?', ['R6', 'R5'], [
      O('a', 'Explain that respite research is strong and suggest she may have misheard what was recommended.', -1,
        { r: 'Defends instead of repairing', approach: 'Clarify and justify', why: 'Defending the comment and implying she misheard places blame on her and deepens the rupture', keys: ['almost cancelled', 'tense arrival'], mistake: 'Responding to a rupture by explaining rather than listening' }),
      O('b', 'Acknowledge how the suggestion landed, invite her feedback, and affirm that care decisions are hers.', 3,
        { r: 'Repair the rupture', approach: 'Rupture repair', why: 'Naming the impact, inviting feedback, and restoring her autonomy repairs the alliance and models respect for her values', keys: ['memory care mention last week', 'nearly dropped out'], mistake: 'Missing that a rupture threatens retention' }),
      O('c', 'Apologize briefly, then move straight to reviewing her activity log to keep the session on schedule.', 0,
        { r: 'Partial repair', approach: 'Quick apology', why: 'An apology helps, but moving on without exploring her experience leaves the rupture unresolved', keys: ['strong reaction'], mistake: 'Prioritizing the agenda over the alliance' }),
      O('d', 'Restate that memory care is the healthiest option for both of them and ask her to reconsider it before next week.', -2,
        { r: 'Imposes values, worsens rupture', approach: 'Persuade', why: 'Pressing placement repeats the injury, overrides her autonomy, and risks dropout', keys: ['family duty', 'brother also pushing'], mistake: 'Treating client disagreement as resistance to overcome' }),
    ]),
    Q('q10', 'interventions', 'session2', 'Hyun-joo explains that the eldest daughter cares for her parents and that church friends would judge her. What should the counselor do?', ['R6'], [
      O('a', 'Explore what being the eldest daughter means to her and how respite could fit within those values.', 3,
        { r: 'Broach and integrate culture', approach: 'Values-based exploration', why: 'Exploring her meaning of duty lets respite be framed as serving those values rather than abandoning them', keys: ['eldest-daughter role', 'choir helped'], mistake: 'Avoiding or overriding cultural values instead of working within them' }),
      O('b', 'Validate the cultural value briefly and keep the session focused on symptom-reduction skills.', 0,
        { r: 'Validates but avoids', approach: 'Acknowledge and move on', why: 'Validation is respectful, but skipping exploration misses how her values shape every plan decision', keys: ['guilt about respite'], mistake: 'Treating culture as background rather than central to the work' }),
      O('c', 'Reassure her that most American families use outside care, so she has no reason to feel guilty.', -1,
        { r: 'Dismisses her frame', approach: 'Normalize by majority', why: 'Comparing her to majority norms dismisses her cultural frame and does not reduce her guilt', keys: ['Korean family norms'], mistake: 'Using dominant-culture norms as reassurance' }),
      O('d', 'Encourage her to step back from her church, since its expectations are deepening her depression.', -2,
        { r: 'Removes a protective factor', approach: 'Distance from community', why: 'Her church and choir are sources of joy and support; urging withdrawal imposes values and isolates her', keys: ['felt lighter after choir'], mistake: 'Targeting a protective community as the problem' }),
    ]),
    Q('q11', 'interventions', 'session2', 'Hyun-joo felt “lighter for a whole day” after attending choir. Which intervention best builds on this?', ['R5'], [
      O('a', 'Explore the childhood roots of her low self-worth before setting any new activity goals.', 0,
        { r: 'Plausible but delays activation', approach: 'Insight first', why: 'Exploring self-worth has value, but evidence supports acting on the mood lift now through activation', keys: ['mood lift after choir'], mistake: 'Sequencing insight work ahead of a supported behavioral intervention' }),
      O('b', 'Teach progressive muscle relaxation as the main intervention for her chronic low mood.', -1,
        { r: 'Wrong primary framework', approach: 'Relaxation training', why: 'Relaxation is an anxiety-focused tool and is not a primary treatment for depressive disorders', keys: ['depressive, not anxiety, disorder'], mistake: 'Applying an anxiety protocol to depression' }),
      O('c', 'Suggest she stop the sertraline, since choir appears to be helping more than the medication.', -2,
        { r: 'Scope violation', approach: 'Medication guidance', why: 'Medication changes are the prescriber’s decision; stopping abruptly can cause relapse and discontinuation symptoms', keys: ['prescribed by PCP'], mistake: 'Advising medication changes as a counselor' }),
      O('d', 'Build on the choir outing with behavioral activation, scheduling small valued activities.', 3,
        { r: 'Empirically supported activation', approach: 'Behavioral activation', why: 'Behavioral activation links mood to valued activity and is a supported treatment for depression', keys: ['felt lighter for a day', 'cousin covered care'], mistake: 'Missing a naturally occurring opening for activation' }),
    ]),
    Q('q12', 'legal', 'session2', 'The center now offers an AI note-taking tool that records sessions. What should the counselor do before using it with Hyun-joo?', ['R9', 'R7'], [
      O('a', 'Mention that the tool is running and continue with it unless she objects during the session.', -1,
        { r: 'Opt-out is not informed consent', approach: 'Notify and proceed', why: 'Informed consent requires explaining recording, storage, and use, then obtaining agreement before recording', keys: ['not yet discussed with client'], mistake: 'Treating notice as consent' }),
      O('b', 'Hold off using the tool with any client until the practice writes a formal AI use policy.', 0,
        { r: 'Cautious but not the task', approach: 'Policy first', why: 'A policy is wise, but the immediate obligation is informed consent from this client before any use', keys: ['tool already offered by center'], mistake: 'Confusing a practice-level step with the client-level obligation' }),
      O('c', 'Explain the tool, how recordings are stored and used, and get her written consent first.', 3,
        { r: 'Informed consent for AI tools', approach: 'Technology informed consent', why: 'Clients must understand what is recorded, how it is stored, who accesses it, and their right to decline before an AI tool is used', keys: ['records sessions', 'drafts notes'], mistake: 'Using recording technology without explicit consent' }),
      O('d', 'Use it without comment, since it only drafts notes that the counselor reviews and signs.', -2,
        { r: 'Covert recording', approach: 'Silent use', why: 'Recording without consent breaches privacy and trust regardless of who signs the note', keys: ['session audio captured'], mistake: 'Believing counselor review removes the need for consent' }),
    ]),
    Q('q13', 'legal', 'session2', 'Daniel calls asking whether his sister is “really depressed.” There is no release for him. What should the counselor do?', ['R7', 'R6'], [
      O('a', 'Neither confirm nor deny she is a client, explain the release policy, and tell Hyun-joo of the call.', 3,
        { r: 'Protect confidentiality', approach: 'No disclosure without release', why: 'Without authorization even the fact of treatment is protected; informing the client lets her decide on any release', keys: ['no release for Daniel'], mistake: 'Assuming family members are entitled to information' }),
      O('b', 'Confirm that she attends but share no details until she signs a release naming her brother.', 0,
        { r: 'Discloses client status', approach: 'Partial disclosure', why: 'Confirming she attends is itself a disclosure of protected information without consent', keys: ['no authorization'], mistake: 'Thinking that confirming attendance is harmless' }),
      O('c', 'Give him general impressions of her progress, since he is family and helps pay for their mother’s care.', -1,
        { r: 'Unauthorized disclosure', approach: 'Family exception', why: 'Financial support does not create a right to information; general impressions are still protected health information', keys: ['sends money'], mistake: 'Inventing a family exception to confidentiality' }),
      O('d', 'Discuss her diagnosis and passive suicidal thoughts so he can watch her more closely at home.', -2,
        { r: 'Serious confidentiality breach', approach: 'Safety rationale misapplied', why: 'Her risk is low and safety-planned; disclosing diagnosis and ideation without consent or imminent danger is a serious breach', keys: ['denies plan or intent', 'brother lives far away'], mistake: 'Stretching the safety exception to cover routine disclosure' }),
    ]),
  ],
};

// ============================================================================
// D921 — MDD, Single Episode, Moderate, With Peripartum Onset · plan 1 · hard · adult
// Buried facts (hard): passive ideation inside a reassurance; ego-dystonic
// intrusive images that a novice reads as intent; an unstarted antidepressant;
// leftover post-cesarean opioids she has "counted"; a session joined from out of state.
// ============================================================================
const D921 = {
  id: 'ncmhce-D921',
  title: 'A new mother on video at seven weeks postpartum, frightened by pictures in her own head',
  category: 'Depressive',
  difficulty: 'hard',
  plan: 1,
  population: 'adult',
  primaryDiagnosis: { name: 'Major Depressive Disorder, Single Episode, Moderate, With Peripartum Onset', code: 'F32.1' },
  diagnosis: { name: 'Major Depressive Disorder, Single Episode, Moderate, With Peripartum Onset', code: 'F32.1' },
  differentialOptions: [
    { id: 'do1', name: 'Obsessive-Compulsive Disorder', isCorrect: false },
    { id: 'do2', name: 'Brief Psychotic Disorder, With Peripartum Onset', isCorrect: false },
    { id: 'do3', name: 'Major Depressive Disorder, Single Episode, Moderate, With Peripartum Onset', isCorrect: true },
    { id: 'do4', name: 'Adjustment Disorder, with Depressed Mood', isCorrect: false },
  ],
  narrative: {
    intake:
      'Lucía Ferreira-Castro, 31, who moved from Belo Horizonte, Brazil, to suburban Georgia six years ago and works as a software quality tester, is on ' +
      'maternity leave seven weeks after the cesarean birth of her first child, Theo. Her OB referred her after an Edinburgh Postnatal Depression Scale ' +
      '(EPDS) score of 16 at her six-week visit; on item 10 (thoughts of harming herself) she marked “hardly ever.” The group practice offers video sessions ' +
      'only for new parents, and Lucía joins from her bedroom while her husband, Rui, a hospital lab technician who works three night shifts a week, sleeps ' +
      'after a shift; telehealth consent has not yet been reviewed. She describes depressed mood most of the day beginning about two weeks after delivery, ' +
      'loss of interest in friends and in Theo, guilt (“I’m a bad mother”), poor concentration, fatigue, and lying awake even when Theo sleeps, about four ' +
      'hours a night. She reports sudden pictures of dropping Theo in the bath or of him falling down the stairs; she calls them “disgusting, not me,” ' +
      'knows they come from her own mind, and now has Rui bathe Theo and avoids carrying him on the stairs. She denies hallucinations, is fully oriented, and ' +
      'describes no unusual beliefs about the baby. Near the end she says, “Honestly I’m fine, I’d never hurt Theo. Sometimes I just think Rui and Theo would ' +
      'be better off with someone who isn’t broken, but that’s just tiredness.” The counselor, newly licensed with no perinatal training and few perinatal ' +
      'clients, feels a jolt of alarm at the images, briefly thinks about calling child protective services, and notices her own voice tightening.',
    session1:
      'Lucía signs releases for her OB, Theo’s pediatrician, and Rui. She admits she never started the sertraline her OB prescribed at the six-week visit ' +
      'because she “read online it gets into breast milk”; the OB does not know. Rui joins for the last ten minutes and says the nights he works are the ' +
      'hardest for her. Lucía’s mother calls daily from Brazil but could not get a visa to come, and Lucía cries about missing the resguardo, the ' +
      'forty days of rest and family care after birth she grew up expecting, saying she “failed” it. She attends a Portuguese-language church but has told ' +
      'no one there how she feels. Theo’s two-month pediatric visit is next week.',
    session2:
      'At the start of the scheduled video session, the counselor asks her location; Lucía says she is at a friend’s house in Jacksonville, Florida, for the ' +
      'weekend. The counselor is licensed only in Georgia. The session is moved to Monday, when Lucía is home. On Monday she says the images come less often, ' +
      'but she still will not bathe Theo and is terrified the counselor “has to report” her and that Theo will be taken. Discussing her worst nights, she ' +
      'mentions in passing that she still keeps the leftover oxycodone from her cesarean, about a dozen tablets, in the bathroom cabinet “in case the ' +
      'incision hurts,” and that one night last week she “counted them, just to know.” She says Rui wants to help at night but “doesn’t know what to do.”',
  },
  diagnosticRationale:
    'Five or more symptoms (depressed mood, loss of interest, guilt, insomnia, fatigue, poor concentration) present most days for over two weeks with ' +
    'clear impairment meet a major depressive episode; onset within four weeks of delivery supports the with-peripartum-onset specifier, and EPDS 16 and ' +
    'functioning point to moderate severity. Her images of harm are ego-dystonic, recognized as products of her own mind, and met with avoidance, which ' +
    'marks them as intrusive thoughts common in perinatal depression rather than intent; she has no hallucinations, delusions, or confusion, which argues ' +
    'against a peripartum psychotic disorder. The intrusions occur within the depressive episode and are not yet a separate obsessive-compulsive pattern ' +
    'requiring its own diagnosis, though this should be monitored. Symptom count and severity exceed adjustment disorder.',
  references: [
    { id: 'R1', source: 'DSM-5-TR', detail: 'Major depressive episode criteria; with peripartum onset specifier (onset in pregnancy or within 4 weeks after delivery); differential with peripartum psychosis and OCD' },
    { id: 'R2', source: 'C-SSRS', detail: 'Structured follow-up of a positive EPDS item 10 and passive “better off without me” statements' },
    { id: 'R3', source: 'Stanley-Brown SPI', detail: 'Safety plan including means safety for medications stored in the home' },
    { id: 'R4', source: 'Hays (Assessment)', detail: 'Use and interpretation of postpartum screening such as the EPDS, including item-level review' },
    { id: 'R5', source: 'APA CPG', detail: 'Depression guideline: interpersonal therapy and CBT as supported psychotherapies, including in the perinatal period' },
    { id: 'R6', source: 'ACA Code of Ethics', detail: 'Distance counseling informed consent and emergency procedures; competence and consultation; confidentiality with family' },
    { id: 'R7', source: 'State law', detail: 'Licensure applies where the client is located during telehealth; mandated reporting criteria for child abuse and neglect' },
    { id: 'R8', source: 'HIPAA', detail: 'Disclosure to treating providers and family under signed authorization' },
    { id: 'R9', source: 'NBCC Code of Ethics', detail: 'Practicing within competence, seeking consultation, and accurate representation of qualifications' },
  ],
  questions: [
    // ---------------- intake (5) ----------------
    Q('q1', 'assess', 'intake', 'Before the clinical interview, what should the counselor’s telehealth informed consent with Lucía include?', ['R6', 'R7'], [
      O('a', 'Use the practice’s standard in-person consent form, since the counseling content is the same online.', -1,
        { r: 'Omits telehealth elements', approach: 'Generic consent', why: 'Telehealth consent must add technology risks, privacy at the client’s location, and emergency procedures that in-person forms omit', keys: ['video-only service', 'consent not yet reviewed'], mistake: 'Assuming in-person consent covers distance counseling' }),
      O('b', 'Skip formal consent this time because she is exhausted, and go straight to the clinical interview.', -2,
        { r: 'Treats without informed consent', approach: 'Defer consent', why: 'Consent precedes services; skipping it also leaves no emergency plan for a client who may be at risk', keys: ['positive EPDS item 10'], mistake: 'Treating consent as paperwork that can wait' }),
      O('c', 'Review telehealth risks and privacy, her usual location, an emergency contact, and local crisis resources.', 3,
        { r: 'Complete telehealth consent', approach: 'Telehealth informed consent', why: 'Distance counseling consent covers technology and privacy risks, verifies location, and sets emergency contacts and local resources before care', keys: ['joins from bedroom', 'husband asleep nearby'], mistake: 'Leaving out the emergency plan that remote care requires' }),
      O('d', 'Cover privacy and technology-failure plans now, and collect emergency details later if risk emerges.', 0,
        { r: 'Emergency plan delayed', approach: 'Partial consent', why: 'Privacy and backup plans are needed, but emergency contacts and location must be set before risk is known, not after', keys: ['EPDS 16'], mistake: 'Building the emergency plan only after a crisis appears' }),
    ]),
    Q('q2', 'assess', 'intake', 'Which finding best indicates that Lucía’s images of Theo being harmed are intrusive thoughts rather than intent or psychosis?', ['R1'], [
      O('a', 'She finds the images horrifying, knows they come from her own mind, and now avoids bathing Theo.', 3,
        { r: 'Ego-dystonic with avoidance', approach: 'Discriminate intrusion from intent', why: 'Distress, insight, and protective avoidance mark ego-dystonic intrusive thoughts, which differ from intent or psychotic beliefs', keys: ['“disgusting, not me”', 'Rui bathes Theo'], mistake: 'Equating the content of a thought with intent to act' }),
      O('b', 'She has had no hallucinations, which by itself shows the images pose no risk at all to Theo.', 0,
        { r: 'Necessary but not sufficient', approach: 'Single rule-out', why: 'Absent psychosis matters, but the decisive features are distress, insight, and avoidance; one negative finding does not settle risk', keys: ['denies hallucinations'], mistake: 'Resting the judgment on one absent symptom' }),
      O('c', 'She sleeps about four hours a night, which explains the images as simple exhaustion that needs no follow-up.', -1,
        { r: 'Explains away a symptom', approach: 'Fatigue attribution', why: 'Sleep loss may worsen intrusions, but they still need assessment and treatment as part of her depression', keys: ['four hours of sleep'], mistake: 'Dismissing intrusive thoughts as tiredness' }),
      O('d', 'She has thoughts of harming Theo, which signals intent and calls for separating her from the baby.', -2,
        { r: 'Misreads intrusion as intent', approach: 'Content equals danger', why: 'Ego-dystonic intrusions are not intent; separation would be traumatic, unwarranted, and would deter disclosure', keys: ['horrified by images', 'no unusual beliefs'], mistake: 'Treating ego-dystonic intrusive thoughts as homicidal intent' }),
    ]),
    Q('q3', 'assess', 'intake', 'Lucía says Rui and Theo would be “better off” without her “but that’s just tiredness,” and she marked EPDS item 10 “hardly ever.” What should the counselor do?', ['R2', 'R3', 'R4'], [
      O('a', 'Refer her for an emergency room evaluation today, since postpartum depression can escalate quickly.', 0,
        { r: 'Over-restrictive before assessing', approach: 'Escalate first', why: 'Escalation errs toward safety, but a structured assessment should determine the level of care first', keys: ['passive statements', 'no assessment yet'], mistake: 'Skipping assessment and jumping to the highest level of care' }),
      O('b', 'Accept her explanation that it is tiredness and recheck the EPDS at the next session in two weeks.', -1,
        { r: 'Misses buried ideation', approach: 'Accept reassurance', why: 'A “better off without me” statement and a positive item 10 require assessment now, whatever the client’s explanation', keys: ['“better off with someone who isn’t broken”'], mistake: 'Letting a reassurance close a risk inquiry' }),
      O('c', 'Ask her to promise she will call the counselor before acting on any thoughts of harming herself.', -2,
        { r: 'No-suicide contract', approach: 'Promise of safety', why: 'Safety promises lack evidence and replace the assessment and planning she needs', keys: ['passive ideation'], mistake: 'Relying on a client promise as a safety intervention' }),
      O('d', 'Complete a C-SSRS, explore the better-off statement and item 10, and build a safety plan with her.', 3,
        { r: 'Structured assessment and plan', approach: 'Assess and safety-plan', why: 'Passive ideation embedded in reassurance warrants structured inquiry and a collaborative safety plan', keys: ['EPDS item 10 positive', 'buried “better off” remark'], mistake: 'Hearing the reassurance and missing the disclosure' }),
    ]),
    Q('q4', 'profdev', 'intake', 'The counselor feels a jolt of alarm at the images and notices her voice tightening. What is the best way to handle this reaction?', ['R9', 'R6'], [
      O('a', 'Stay calm in session and plan to reflect on the reaction at her next supervision meeting late next month.', 0,
        { r: 'Right steps, too slow', approach: 'Defer reflection', why: 'Calm presence is right, but a reaction tied to a possible reporting decision calls for prompt consultation', keys: ['thought about calling CPS'], mistake: 'Delaying consultation when a high-stakes decision is in play' }),
      O('b', 'Use self-regulation to stay steady in session, then consult a perinatal-informed colleague promptly.', 3,
        { r: 'Self-regulate, then consult', approach: 'Self-regulation and consultation', why: 'Steadying herself protects the disclosure, and prompt consultation guards against acting on alarm', keys: ['voice tightening', 'no perinatal training'], mistake: 'Letting an emotional reaction drive a clinical decision' }),
      O('c', 'Ask Lucía to stop describing the images until the counselor has gained more perinatal training.', -1,
        { r: 'Shuts down disclosure', approach: 'Limit content', why: 'Stopping her disclosure blocks assessment and signals that her thoughts are shameful', keys: ['first disclosure of images'], mistake: 'Managing counselor discomfort by silencing the client' }),
      O('d', 'Show her concern openly and tell Lucía the images are a serious warning sign for the baby.', -2,
        { r: 'Iatrogenic alarm', approach: 'Express alarm', why: 'Labeling ego-dystonic intrusions as dangerous increases shame and fear and can drive concealment', keys: ['images are ego-dystonic'], mistake: 'Transmitting counselor anxiety as clinical fact' }),
    ]),
    Q('q5', 'profdev', 'intake', 'The counselor has no perinatal mental health training. What is the most appropriate professional response?', ['R9', 'R6'], [
      O('a', 'Pursue perinatal mental health training while consulting a specialist on Lucía’s care.', 3,
        { r: 'Build competence with support', approach: 'Training plus consultation', why: 'Counselors extend into new areas through training and consultation while protecting the client from harm', keys: ['few perinatal clients', 'newly licensed'], mistake: 'Either referring out reflexively or practicing without added support' }),
      O('b', 'Refer her to a perinatal specialist and close the case, given the counselor’s lack of training.', 0,
        { r: 'Defensible but disruptive', approach: 'Refer out', why: 'Referral is acceptable when competence cannot be built, but closing abruptly disrupts care for an at-risk client', keys: ['rapport forming', 'positive item 10'], mistake: 'Treating referral as the only response to a competence gap' }),
      O('c', 'Rely on general depression training, since perinatal depression is treated the same way.', -1,
        { r: 'Ignores perinatal specifics', approach: 'General competence', why: 'Perinatal care adds infant safety, intrusive thoughts, lactation, and pediatric coordination beyond general training', keys: ['intrusive images', 'seven weeks postpartum'], mistake: 'Assuming general competence covers a specialty population' }),
      O('d', 'Present herself to Lucía as a perinatal specialist to strengthen her confidence in treatment.', -2,
        { r: 'Misrepresents qualifications', approach: 'Overstate expertise', why: 'Misrepresenting credentials violates ethics codes and undermines informed consent', keys: ['no perinatal training'], mistake: 'Believing reassurance justifies misrepresentation' }),
    ]),
    // ---------------- session1 (3) ----------------
    Q('q6', 'indirect', 'session1', 'Lucía never started the sertraline her OB prescribed, and the OB does not know. What should the counselor do?', ['R8', 'R6'], [
      O('a', 'Encourage her to raise her breastfeeding concern with the OB herself at her next routine visit.', 0,
        { r: 'Right direction, too passive', approach: 'Client self-advocacy', why: 'Her own voice matters, but a prescriber unaware of nonadherence in a moderate episode warrants timely coordination', keys: ['release signed', 'OB unaware'], mistake: 'Leaving a key treatment gap to a future visit' }),
      O('b', 'Reassure her that sertraline is safe in breastfeeding and urge her to start it today.', -2,
        { r: 'Outside counselor scope', approach: 'Medication advice', why: 'Medication safety in lactation is the prescriber’s domain; counselors do not advise on starting medication', keys: ['OB prescribed'], mistake: 'Giving medication guidance as a counselor' }),
      O('c', 'Document that she has not started it and why, and inform her OB under the signed release.', 3,
        { r: 'Document and coordinate', approach: 'Care coordination', why: 'Recording her self-report and informing the prescriber lets the OB address her lactation concern directly', keys: ['“gets into breast milk”', 'OB release'], mistake: 'Neither documenting nor coordinating on nonadherence' }),
      O('d', 'Note in the chart that she takes sertraline as prescribed, per the OB’s original referral letter.', -1,
        { r: 'Inaccurate record', approach: 'Copy referral data', why: 'Records must reflect the client’s actual report; charting adherence that is not occurring misleads other providers', keys: ['never started'], mistake: 'Documenting from referral paperwork instead of the client' }),
    ]),
    Q('q7', 'planning', 'session1', 'Which sequencing best fits Lucía’s initial treatment plan?', ['R5', 'R3'], [
      O('a', 'Start with exposure work for the intrusive images before addressing her sleep or her safety plan.', -1,
        { r: 'Wrong sequence', approach: 'Exposure first', why: 'Exposure may help later, but safety and sleep are more urgent and support her ability to engage', keys: ['four hours of sleep', 'passive ideation'], mistake: 'Treating the most vivid symptom before safety and stabilization' }),
      O('b', 'Make safety planning and a protected sleep block the first priorities, then add IPT or CBT.', 3,
        { r: 'Safety and sleep first', approach: 'Prioritize presenting problems', why: 'Passive ideation and severe sleep loss come first; supported psychotherapy such as IPT or CBT follows', keys: ['nights alone', 'item 10 positive'], mistake: 'Ignoring safety and physiological stabilization when sequencing' }),
      O('c', 'Begin weekly IPT on her role transition and add sleep goals once her mood begins to lift.', 0,
        { r: 'Good therapy, wrong order', approach: 'Therapy first', why: 'IPT fits her role transition, but sleep and safety should not wait for mood to lift', keys: ['new mother role'], mistake: 'Assuming sleep will improve on its own as mood improves' }),
      O('d', 'Defer safety planning since her ideation is passive, and focus first on bonding with Theo.', -2,
        { r: 'Omits a safety step', approach: 'Bonding focus', why: 'Passive ideation still requires a safety plan; deferring it leaves her unprotected', keys: ['“better off” statement'], mistake: 'Treating passive ideation as no ideation' }),
    ]),
    Q('q8', 'planning', 'session1', 'Lucía grieves missing the resguardo and says she “failed” it. How should this shape her plan?', ['R5', 'R6'], [
      O('a', 'Note her cultural background in the plan and keep goals focused on standard postpartum self-care.', 0,
        { r: 'Acknowledges without integrating', approach: 'Document culture', why: 'Naming culture is a start, but goals that ignore resguardo miss a source of both shame and support', keys: ['resguardo expectations'], mistake: 'Recording culture without using it in the plan' }),
      O('b', 'Help her let go of resguardo expectations, since they do not fit her life in the United States.', -1,
        { r: 'Dismisses cultural meaning', approach: 'Acculturation push', why: 'Asking her to drop a meaningful tradition deepens her sense of failure and loss', keys: ['“failed” the resguardo'], mistake: 'Treating a cultural practice as a problem to discard' }),
      O('c', 'Recommend she stop the daily calls with her mother, since they seem to heighten her sense of shame.', -2,
        { r: 'Removes key support', approach: 'Cut contact', why: 'Her mother is a primary support; cutting contact increases isolation in a depressed, at-risk mother', keys: ['daily calls from Brazil'], mistake: 'Targeting a support as a stressor' }),
      O('d', 'Plan with her to recreate parts of resguardo, such as meal and rest help from her church community.', 3,
        { r: 'Integrate culture as strength', approach: 'Culturally integrated plan', why: 'Rebuilding elements of resguardo through her church turns a source of shame into practical support', keys: ['Portuguese-language church', 'no family nearby'], mistake: 'Missing culturally congruent supports already in her life' }),
    ]),
    // ---------------- session2 (5) ----------------
    Q('q9', 'legal', 'session2', 'At the start of the video session, Lucía says she is visiting Jacksonville, Florida. The counselor is licensed only in Georgia. What should the counselor do?', ['R7', 'R6'], [
      O('a', 'Confirm her location, verify any authority to practice in Florida, and reschedule if there is none.', 3,
        { r: 'Practice where licensed', approach: 'Telehealth jurisdiction', why: 'Telehealth is governed by the client’s location; without a license, privilege, or registration there, the session is rescheduled', keys: ['Jacksonville, Florida', 'Georgia license only'], mistake: 'Assuming the counselor’s or client’s home state governs' }),
      O('b', 'Hold only a brief safety check-in now, then reschedule the full session for when she is home.', 0,
        { r: 'Reasonable but unverified', approach: 'Limited contact', why: 'A brief check may be defensible, but authority to practice in Florida should be verified rather than assumed', keys: ['not in crisis'], mistake: 'Assuming a short contact sidesteps jurisdiction rules' }),
      O('c', 'Proceed this once, because she is a Georgia resident and is only visiting Florida for the weekend.', -1,
        { r: 'Wrong jurisdiction rule', approach: 'Residence governs', why: 'Licensure attaches to where the client is physically located during the session, not where she lives', keys: ['weekend visit'], mistake: 'Confusing residence with location' }),
      O('d', 'Proceed and document the session as held from her Georgia home to avoid licensing questions.', -2,
        { r: 'Falsified record', approach: 'Alter documentation', why: 'Documenting a false location is falsification and compounds unlicensed practice', keys: ['location stated by client'], mistake: 'Altering records to avoid a regulatory problem' }),
    ]),
    Q('q10', 'interventions', 'session2', 'Lucía still will not bathe Theo and fears the images mean she is dangerous. Which response is most helpful?', ['R5', 'R1'], [
      O('a', 'Reassure her the images will fade once she sleeps more, without discussing her avoidance of bathing.', 0,
        { r: 'Partial reassurance', approach: 'Sleep reassurance', why: 'Sleep may reduce intrusions, but leaving avoidance unaddressed lets it strengthen the fear', keys: ['still avoids bathing'], mistake: 'Offering reassurance without psychoeducation about avoidance' }),
      O('b', 'Teach her to push the images out of her mind each time they occur until they stop coming.', -1,
        { r: 'Thought suppression', approach: 'Suppress thoughts', why: 'Suppression tends to increase intrusive thoughts and the distress attached to them', keys: ['images still recur'], mistake: 'Using suppression for intrusive thoughts' }),
      O('c', 'Explain that unwanted images are common after birth, are not intent, and grow with avoidance.', 3,
        { r: 'Accurate psychoeducation', approach: 'Psychoeducation', why: 'Normalizing ego-dystonic intrusions and explaining how avoidance maintains them reduces shame and sets up gradual re-engagement', keys: ['fears she is dangerous', 'avoidance ongoing'], mistake: 'Leaving the client’s catastrophic interpretation unchallenged' }),
      O('d', 'Advise that Rui handle all of Theo’s care for now, until the images have stopped completely.', -2,
        { r: 'Reinforces danger belief', approach: 'Full avoidance', why: 'This confirms her fear that she is dangerous, harms bonding, and entrenches avoidance', keys: ['ego-dystonic images'], mistake: 'Treating intrusive thoughts as a reason to restrict parenting' }),
    ]),
    Q('q11', 'interventions', 'session2', 'Lucía says Rui wants to help at night but “doesn’t know what to do.” What is the best next intervention?', ['R5'], [
      O('a', 'Coach Lucía to ask Rui for more help in general terms when he is home from work.', 0,
        { r: 'Vague request', approach: 'Assertiveness coaching', why: 'Asking for help is useful, but a general request does not give Rui a concrete role', keys: ['Rui unsure what to do'], mistake: 'Stopping at encouragement instead of a concrete plan' }),
      O('b', 'Hold a joint session to plan a protected sleep block for her on Rui’s nights off.', 3,
        { r: 'Concrete partner involvement', approach: 'Interpersonal skill building', why: 'A joint plan with Rui protects her sleep and strengthens support, with consent already signed', keys: ['release for Rui', 'nights hardest'], mistake: 'Missing a willing partner as an active resource' }),
      O('c', 'Suggest Rui leave his night-shift job so she is not alone at night, whatever the cost.', -1,
        { r: 'Impractical directive', approach: 'Major life change', why: 'Directing a job change ignores finances and autonomy when smaller changes can meet the need', keys: ['three night shifts weekly'], mistake: 'Prescribing a drastic change instead of a workable plan' }),
      O('d', 'Advise Lucía to stop breastfeeding at once so that Rui can take over every feeding.', -2,
        { r: 'Outside scope', approach: 'Feeding directive', why: 'Feeding decisions involve her OB and pediatrician; an abrupt directive may cause medical and emotional harm', keys: ['breastfeeding'], mistake: 'Giving medical feeding advice as a counselor' }),
    ]),
    Q('q12', 'legal', 'session2', 'Lucía fears the counselor “has to report” her. How should the counselor handle the mandated-reporting question?', ['R7', 'R6'], [
      O('a', 'Consult a supervisor before deciding, and avoid discussing reporting with Lucía in the meantime.', 0,
        { r: 'Consultation is fine; silence is not', approach: 'Consult and wait', why: 'Consultation is wise, but leaving her fear unaddressed harms the alliance when the facts do not meet reporting criteria', keys: ['terrified of report'], mistake: 'Withholding information the client needs to keep engaging' }),
      O('b', 'Tell Lucía a report will be required if the images keep coming after her treatment begins.', -1,
        { r: 'Misstates the law', approach: 'Conditional threat', why: 'Persistent intrusive thoughts are not abuse or neglect; this misinforms her and discourages disclosure', keys: ['no abuse or neglect'], mistake: 'Linking symptoms rather than harm to reporting duties' }),
      O('c', 'File a report with child protective services as a precaution, since the images involve an infant.', -2,
        { r: 'Unwarranted report', approach: 'Precautionary report', why: 'Reporting ego-dystonic thoughts without abuse or neglect is unwarranted, traumatizing, and deters help-seeking', keys: ['protective avoidance', 'no intent'], mistake: 'Treating any thought of infant harm as reportable' }),
      O('d', 'Explain that the images alone are not reportable, and document the assessment and its basis.', 3,
        { r: 'Accurate legal limits', approach: 'Apply reporting criteria', why: 'Reporting duties concern reasonable suspicion of abuse or neglect; documenting why none exists protects client and counselor', keys: ['ego-dystonic images', 'Theo cared for safely'], mistake: 'Confusing distressing thoughts with reportable conduct' }),
    ]),
    Q('q13', 'interventions', 'session2', 'Lucía mentions keeping about a dozen leftover oxycodone tablets and that she “counted them, just to know.” What should the counselor do?', ['R3', 'R2'], [
      O('a', 'Suggest Rui lock the tablets away and hold the key, then return to the session’s planned topic.', 0,
        { r: 'Means step, no reassessment', approach: 'Partial means safety', why: 'Securing the pills helps, but counting them is a warning sign that requires reassessment and an updated plan', keys: ['counted the pills'], mistake: 'Treating means safety as separate from risk reassessment' }),
      O('b', 'Note the pills in the record and revisit means safety only if her ideation becomes active.', -1,
        { r: 'Delays a safety step', approach: 'Monitor and wait', why: 'Lethal means should be addressed when identified; waiting for active ideation misses the warning sign', keys: ['dozen tablets at home'], mistake: 'Making means safety contingent on escalation' }),
      O('c', 'Reassess risk now that she has counted them, and plan their disposal at a pharmacy take-back.', 3,
        { r: 'Reassess and remove means', approach: 'Lethal means counseling', why: 'Counting pills is a warning sign; reassessing and removing unneeded opioids, then updating the safety plan, reduces risk', keys: ['“counted them, just to know”', 'passive ideation'], mistake: 'Missing a buried warning sign in a passing remark' }),
      O('d', 'Accept that she keeps them for incision pain and move on to the session plan for today.', -2,
        { r: 'Misses a lethal means risk', approach: 'Accept explanation', why: 'Accepting the explanation ignores the counting behavior and leaves a lethal means in reach of an at-risk client', keys: ['seven weeks post-cesarean'], mistake: 'Letting a plausible reason override a warning sign' }),
    ]),
  ],
};

// ============================================================================
// D922 — Premenstrual Dysphoric Disorder · plan 2 · medium · adult
// Complications (medium): diagnosis rests on prospective daily ratings rather
// than recall, and workplace conflict pulls in HR, an EAP, and a subpoena.
// ============================================================================
const D922 = {
  id: 'ncmhce-D922',
  title: 'A 911 dispatcher’s monthly storm and the written warning that followed it',
  category: 'Depressive',
  difficulty: 'medium',
  plan: 2,
  population: 'adult',
  primaryDiagnosis: { name: 'Premenstrual Dysphoric Disorder', code: 'F32.81' },
  diagnosis: { name: 'Premenstrual Dysphoric Disorder', code: 'F32.81' },
  differentialOptions: [
    { id: 'do1', name: 'Major Depressive Disorder, Recurrent, Moderate', isCorrect: false },
    { id: 'do2', name: 'Bipolar II Disorder', isCorrect: false },
    { id: 'do3', name: 'Premenstrual Dysphoric Disorder', isCorrect: true },
    { id: 'do4', name: 'Intermittent Explosive Disorder', isCorrect: false },
  ],
  narrative: {
    intake:
      'Aaliyah Brooks, a 27-year-old Black American 911 dispatcher at a county emergency communications center, comes to a group counseling practice ' +
      'through her employer’s employee assistance program (EAP) after a written warning: during an overnight shift she snapped at a coworker and slammed ' +
      'down her headset, and the coworker’s complaint called her “aggressive.” She lives with her girlfriend, Simone. For about 18 months, in the seven to ' +
      'ten days before her period, she has felt intensely irritable and “on edge,” tearful and hurt by small slights, hopeless, uninterested in things, ' +
      'tired, unable to focus, and craving sweets, with breast tenderness and bloating. Symptoms ease within two or three days after her period starts, and ' +
      'the week after she feels “like me again.” She describes this from memory; her phone app records only period dates. She has no history of elevated ' +
      'mood, decreased need for sleep, or episodes lasting beyond the premenstrual window, uses no hormonal contraception, drinks one or two glasses of ' +
      'wine on weekends, and has not had a physical in two years. Asked about suicide, she says that on her worst premenstrual days she thinks “what’s the ' +
      'point,” and once, driving home, she thought about “letting the car drift”; she denies intent, plan, or past attempts, and there are no firearms at ' +
      'home. The counselor, a man in his fifties, realizes he had already thought of her as “aggressive” after reading the complaint before meeting her. ' +
      'The same day, the EAP coordinator emails asking him to also complete a fitness-for-duty evaluation clearing her for overnight console work; he has ' +
      'no training in fitness-for-duty evaluations.',
    session1:
      'Aaliyah brings her first month of Daily Record of Severity of Problems (DRSP) ratings: scores climb sharply in the eight days before menses and drop ' +
      'to near zero by day three of her period. She will rate a second cycle, and the counselor records PMDD as provisional until then; she has a gynecology appointment in three weeks, and she signs a release for the ' +
      'gynecologist. She also signs a limited release allowing the counselor to confirm attendance and give work-related recommendations to HR. HR then ' +
      'emails asking for her diagnosis, prognosis, and “whether she is a danger on the console.” Together they review her goals: fewer blowups at work, ' +
      'keeping her job, and feeling less “hijacked” each month. She reports three work outbursts in the past three months.',
    session2:
      'Aaliyah brings her second month of DRSP ratings, which show the same sharp rise before menses and near-zero scores after, confirming the diagnosis. ' +
      'Her six EAP sessions are ending, and she plans to continue through her health insurance. She asks the counselor to bill “anxiety or something” ' +
      'instead of PMDD because she worries her employer will see it. On her premenstrual days she thinks, “Everyone on that floor is against me,” and she ' +
      'wants to talk with her supervisor about schedule needs without “sounding angry.” She asks whether she can text screenshots from her new mood-and-cycle ' +
      'app to the counselor’s cell phone. Aaliyah has filed a union grievance over the written warning, and that week the practice receives a subpoena from ' +
      'the county’s attorney for her counseling records for the arbitration; it is not signed by a judge and she has not authorized any release.',
  },
  diagnosticRationale:
    'In most cycles over the past year, five or more symptoms, including marked irritability, affective lability and rejection sensitivity, and ' +
    'hopelessness, appear in the final week before menses, improve within a few days of onset, and become minimal in the week after, with clear ' +
    'occupational impairment. Prospective daily ratings across at least two symptomatic cycles are required to confirm the diagnosis, which is provisional until then; ' +
    'both of her DRSP cycles show the luteal pattern. The symptoms are not an exacerbation of another disorder (no symptoms outside the luteal window, no episodes of ' +
    'elevated mood), are not attributable to a substance or hormonal treatment, and the irritability is cyclical rather than the recurrent, unprovoked ' +
    'aggression of intermittent explosive disorder. A medical evaluation (including thyroid) is part of the workup.',
  references: [
    { id: 'R1', source: 'DSM-5-TR', detail: 'Premenstrual dysphoric disorder: symptom timing in the luteal phase, confirmation by prospective daily ratings over at least two symptomatic cycles, differential with premenstrual exacerbation' },
    { id: 'R2', source: 'Hays (Assessment)', detail: 'Prospective self-monitoring instruments and competence limits for specialized evaluations' },
    { id: 'R3', source: 'C-SSRS', detail: 'Structured assessment of passive ideation, including symptom-window-specific risk' },
    { id: 'R4', source: 'Stanley-Brown SPI', detail: 'Safety plan matched to predictable high-risk periods' },
    { id: 'R5', source: 'APA CPG', detail: 'CBT approaches, including cognitive restructuring and skills practice, for depressive and mood-related presentations' },
    { id: 'R6', source: 'ACA Code of Ethics', detail: 'Competence and role boundaries in evaluation, multicultural self-awareness, release of information, accurate diagnosis and billing, technology use, and court-ordered disclosure' },
    { id: 'R7', source: 'HIPAA', detail: 'Minimum necessary disclosure; secure electronic communication; a subpoena without a court order or authorization does not by itself permit disclosure' },
    { id: 'R8', source: 'State law', detail: 'Privilege and subpoena response procedures for counseling records' },
    { id: 'R9', source: 'Wiger (Documentation)', detail: 'Measurable, time-bound treatment objectives linked to assessment data' },
  ],
  questions: [
    // ---------------- intake (5) ----------------
    Q('q1', 'assess', 'intake', 'Which feature of Aaliyah’s history most supports premenstrual dysphoric disorder over a depressive or bipolar disorder?', ['R1'], [
      O('a', 'Irritability is her most impairing symptom, which is typical of premenstrual dysphoric disorder.', 0,
        { r: 'True but not discriminating', approach: 'Symptom-type focus', why: 'Irritability is common in PMDD but also in depression and bipolar disorder; timing is what discriminates', keys: ['irritability at work'], mistake: 'Relying on symptom type rather than symptom timing' }),
      O('b', 'Her symptoms began about 18 months ago at age 25, which fits the usual onset age for PMDD.', -1,
        { r: 'Onset age does not discriminate', approach: 'Onset-age reasoning', why: 'Onset age overlaps across mood disorders and cannot separate PMDD from other diagnoses', keys: ['18-month history'], mistake: 'Using an epidemiological fact as a diagnostic discriminator' }),
      O('c', 'Her outbursts at work suggest bipolar mood episodes that happen to line up with her cycle.', -2,
        { r: 'Unsupported bipolar framing', approach: 'Episode attribution', why: 'She has no elevated mood or decreased need for sleep; mislabeling can lead to inappropriate treatment', keys: ['no history of elevated mood'], mistake: 'Reading cyclical irritability as mania or hypomania' }),
      O('d', 'Symptoms cluster in the week before menses, ease within days of onset, and are minimal after.', 3,
        { r: 'Luteal timing pattern', approach: 'Apply timing criterion', why: 'PMDD is defined by symptom onset in the final premenstrual week, improvement after menses begins, and minimal symptoms afterward', keys: ['“like me again” the week after', 'seven to ten days before period'], mistake: 'Overlooking timing, the feature that defines the disorder' }),
    ]),
    Q('q2', 'profdev', 'intake', 'The counselor realizes he had already thought of Aaliyah as “aggressive” before meeting her. What should he do?', ['R6'], [
      O('a', 'Note his first impression in the chart and rely on standardized measures to keep it from mattering.', 0,
        { r: 'Measures do not remove bias', approach: 'Instrument as safeguard', why: 'Measures help, but bias shapes interpretation and rapport; it needs active self-examination', keys: ['impression formed from complaint'], mistake: 'Assuming objective tools neutralize counselor bias' }),
      O('b', 'Examine where the label came from and how race and gender stereotypes may shape his view of her.', 3,
        { r: 'Multicultural self-reflection', approach: 'Self-reflection on bias', why: 'An “aggressive” label applied to a Black woman can carry stereotype; examining it protects assessment and the alliance', keys: ['coworker called her “aggressive”', 'formed before meeting her'], mistake: 'Accepting a third party’s loaded label as clinical data' }),
      O('c', 'Set the impression aside, since a brief first reaction is unlikely to influence his work.', -1,
        { r: 'Underestimates bias', approach: 'Dismiss reaction', why: 'Unexamined first impressions shape questions, interpretation, and tone throughout treatment', keys: ['label adopted early'], mistake: 'Believing awareness alone ends bias' }),
      O('d', 'Treat her anger as a personality trait to address before considering a cycle-related diagnosis.', -2,
        { r: 'Bias drives misdiagnosis', approach: 'Trait framing', why: 'This lets the stereotype override a clear cyclical history and pathologizes her', keys: ['symptom-free week after menses'], mistake: 'Letting bias redefine the presenting problem' }),
    ]),
    Q('q3', 'assess', 'intake', 'Aaliyah describes her pattern from memory. Which assessment step is most important next?', ['R1', 'R2'], [
      O('a', 'Have her complete prospective daily ratings such as the DRSP across at least two cycles.', 3,
        { r: 'Prospective confirmation', approach: 'Daily symptom ratings', why: 'PMDD is confirmed with prospective daily ratings over at least two symptomatic cycles; recall is unreliable', keys: ['describes from memory', 'app tracks dates only'], mistake: 'Accepting retrospective recall as confirmation' }),
      O('b', 'Use the period dates in her phone app as recall data, since they confirm her cycle pattern.', 0,
        { r: 'Dates without symptoms', approach: 'Use existing data', why: 'Period dates help anchor ratings but contain no symptom data, so they cannot show the luteal pattern', keys: ['app records only dates'], mistake: 'Treating cycle dates as symptom evidence' }),
      O('c', 'Give the PHQ-9 once at intake to establish the severity of her depressive symptoms.', -1,
        { r: 'Snapshot misses cyclicity', approach: 'Single screen', why: 'A one-time screen captures two weeks and cannot show the on-off pattern that defines PMDD', keys: ['symptoms vary by cycle phase'], mistake: 'Using a cross-sectional tool for a cyclical disorder' }),
      O('d', 'Ask her supervisor to rate her mood each shift to verify the cyclical pattern at work.', -2,
        { r: 'Confidentiality breach', approach: 'Workplace ratings', why: 'Involving her supervisor discloses treatment, creates harm at work, and is not a valid method', keys: ['no release', 'active work conflict'], mistake: 'Seeking collateral that harms the client' }),
    ]),
    Q('q4', 'profdev', 'intake', 'The EAP coordinator asks the counselor to complete a fitness-for-duty evaluation for Aaliyah. What should he do?', ['R6', 'R2'], [
      O('a', 'Tell the EAP he will review the request with Aaliyah first, then decide how to respond.', 0,
        { r: 'Delays the clear answer', approach: 'Defer the decision', why: 'Involving her is good, but the role conflict and lack of training already make the answer clear', keys: ['no fitness-for-duty training'], mistake: 'Leaving open a role the counselor should not take' }),
      O('b', 'Agree to complete it once she signs a release, since he knows her symptoms better than anyone.', -1,
        { r: 'Dual role and competence', approach: 'Accept with consent', why: 'A treating counselor evaluating for the employer creates a dual role, and he lacks training in these evaluations', keys: ['treating counselor', 'employer request'], mistake: 'Assuming consent resolves competence and role conflicts' }),
      O('c', 'Decline, since it is outside his training and role, and suggest a qualified evaluator.', 3,
        { r: 'Competence and role clarity', approach: 'Decline and refer', why: 'Counselors evaluate only within competence and avoid forensic roles with their own clients', keys: ['no evaluation training', 'treating relationship'], mistake: 'Taking on an assessment role beyond competence' }),
      O('d', 'Complete it from his session notes without telling her, as the EAP contract seems to allow.', -2,
        { r: 'Covert evaluation', approach: 'Contract over consent', why: 'Evaluating and disclosing without her knowledge breaches consent and confidentiality', keys: ['no authorization'], mistake: 'Treating an employer contract as client consent' }),
    ]),
    Q('q5', 'assess', 'intake', 'Aaliyah reports thinking about “letting the car drift” on a premenstrual day. What should the counselor do?', ['R3', 'R4'], [
      O('a', 'Use the C-SSRS with a focus on her premenstrual days, and safety-plan for that window.', 3,
        { r: 'Window-specific assessment', approach: 'Structured assessment', why: 'Suicidality can rise in the luteal phase; assessing and planning for that predictable window addresses real risk', keys: ['“what’s the point”', 'car drift thought'], mistake: 'Dismissing cyclical ideation as merely hormonal' }),
      O('b', 'Refer her for a psychiatric emergency evaluation today because of the driving thought.', 0,
        { r: 'Over-restrictive', approach: 'Escalate first', why: 'She denies intent and plan; escalation errs toward safety but precedes needed assessment', keys: ['no intent or plan'], mistake: 'Escalating before structured assessment' }),
      O('c', 'Reassure her that these thoughts are hormonal and will pass once her period starts.', -1,
        { r: 'Minimizes risk', approach: 'Normalize', why: 'Cyclical ideation is still ideation and needs assessment and planning, not reassurance', keys: ['recurrent premenstrual hopelessness'], mistake: 'Treating predictable risk as no risk' }),
      O('d', 'Have her agree not to drive at all during her premenstrual week as her safety contract.', -2,
        { r: 'Contract instead of plan', approach: 'Safety contract', why: 'Safety contracts are not effective and replace a collaborative safety plan', keys: ['passive ideation'], mistake: 'Relying on a promise rather than a plan' }),
    ]),
    // ---------------- session1 (3) ----------------
    Q('q6', 'indirect', 'session1', 'Aaliyah has a gynecology appointment and has signed a release. How should the counselor coordinate care?', ['R7', 'R1'], [
      O('a', 'Suggest she bring her rating sheets to the gynecologist herself and leave coordination to her.', 0,
        { r: 'Client-led only', approach: 'Self-advocacy', why: 'Her involvement matters, but direct coordination under the release ensures the data reach the provider', keys: ['release signed'], mistake: 'Leaving coordination entirely to the client' }),
      O('b', 'Wait to involve the gynecologist until counseling alone has been tried for six months.', -1,
        { r: 'Delays medical workup', approach: 'Counseling first', why: 'Medical evaluation, including thyroid and treatment options, is part of the PMDD workup, not a last resort', keys: ['no physical in two years'], mistake: 'Sequencing medical evaluation after a long trial' }),
      O('c', 'Recommend she ask the gynecologist for a specific SSRI dose the counselor read about.', -2,
        { r: 'Outside scope', approach: 'Medication advice', why: 'Recommending specific medications and doses is outside counselor scope', keys: ['gynecologist prescribes'], mistake: 'Directing medication choices as a counselor' }),
      O('d', 'Send the gynecologist a summary of her daily ratings to support the medical evaluation.', 3,
        { r: 'Collaborate with provider', approach: 'Care coordination', why: 'Sharing prospective ratings under her release supports diagnosis and treatment decisions within each provider’s scope', keys: ['DRSP luteal pattern', 'appointment in three weeks'], mistake: 'Missing interdisciplinary coordination' }),
    ]),
    Q('q7', 'indirect', 'session1', 'HR asks for Aaliyah’s diagnosis, prognosis, and whether she is “a danger on the console.” Her release covers attendance and work recommendations. What should the counselor do?', ['R7', 'R6'], [
      O('a', 'Send a letter describing her symptoms in general terms without naming the diagnosis.', 0,
        { r: 'Exceeds the release', approach: 'Softened disclosure', why: 'General symptom descriptions still go beyond what she authorized', keys: ['release limited to attendance and recommendations'], mistake: 'Assuming vague clinical details stay within a narrow release' }),
      O('b', 'Confirm attendance and give work recommendations only, as her signed release allows.', 3,
        { r: 'Minimum necessary', approach: 'Release-bound disclosure', why: 'Disclosure is limited to what the client authorized and what the purpose requires', keys: ['limited release', 'HR asking for more'], mistake: 'Answering every question a stakeholder asks' }),
      O('c', 'Ask HR to put its questions in writing, then answer whatever they request in full.', -1,
        { r: 'Process without limits', approach: 'Formalize request', why: 'A written request does not expand her authorization', keys: ['diagnosis and prognosis requested'], mistake: 'Treating a formal request as permission' }),
      O('d', 'Send HR her daily ratings so that they can schedule her shifts around her cycle.', -2,
        { r: 'Major overdisclosure', approach: 'Share data', why: 'Sharing detailed clinical data with an employer breaches confidentiality and can harm her employment', keys: ['no authorization for records'], mistake: 'Equating helpfulness with disclosure' }),
    ]),
    Q('q8', 'planning', 'session1', 'Which objective best fits a SMART treatment plan for Aaliyah?', ['R9', 'R5'], [
      O('a', 'She will reduce her premenstrual irritability, as measured by her own sense of feeling in control.', 0,
        { r: 'Weak measure and timeframe', approach: 'Subjective target', why: 'The focus is right, but the measure is vague and there is no timeframe', keys: ['feeling “hijacked”'], mistake: 'Using an unanchored subjective measure' }),
      O('b', 'She will stop feeling angry with her coworkers and supervisor by the time her counseling ends.', -1,
        { r: 'Not measurable or realistic', approach: 'Feeling elimination', why: 'Eliminating anger is neither measurable nor realistic, and the end date is undefined', keys: ['ongoing work conflict'], mistake: 'Writing goals as the absence of feelings' }),
      O('c', 'In three cycles, she will cut work outbursts from three to zero using a luteal-day time-out plan.', 3,
        { r: 'SMART and data-linked', approach: 'Measurable objective', why: 'The objective names a behavior, a baseline, a target, and a timeframe tied to her cycle data', keys: ['three outbursts in three months', 'DRSP pattern'], mistake: 'Failing to anchor goals to baseline data' }),
      O('d', 'She will hide her symptoms at work so that her supervisor stops noticing her monthly cycle.', -2,
        { r: 'Harmful goal', approach: 'Concealment', why: 'Concealment adds strain, ignores accommodation options, and is not a therapeutic aim', keys: ['wants to keep job'], mistake: 'Setting goals around hiding rather than managing symptoms' }),
    ]),
    // ---------------- session2 (5) ----------------
    Q('q9', 'legal', 'session2', 'Aaliyah asks the counselor to bill “anxiety or something” instead of PMDD. What should the counselor do?', ['R6', 'R7'], [
      O('a', 'Bill PMDD as diagnosed and simply reassure her that employers do not see any claim details.', 0,
        { r: 'Accurate but incomplete', approach: 'Reassure', why: 'Billing accurately is right, but she also needs to know how claims flow and that self-pay is an option', keys: ['fears employer access'], mistake: 'Answering a privacy fear without informed choices' }),
      O('b', 'Bill an anxiety code instead, since tension and feeling on edge are among her reported symptoms.', -1,
        { r: 'Inaccurate diagnosis', approach: 'Symptom-based relabel', why: 'Billing a diagnosis that is not the clinical diagnosis misrepresents care to the insurer', keys: ['PMDD diagnosed'], mistake: 'Using a symptom to justify a different code' }),
      O('c', 'Bill adjustment disorder for less stigma and record the PMDD diagnosis only in private notes.', -2,
        { r: 'Insurance fraud', approach: 'Dual records', why: 'Deliberately billing a false diagnosis and keeping a separate record is fraudulent', keys: ['client request'], mistake: 'Believing client consent makes false billing acceptable' }),
      O('d', 'Explain that billed diagnoses must be accurate, review who sees claims, and offer self-pay.', 3,
        { r: 'Accurate billing, informed choice', approach: 'Billing ethics', why: 'Claims must reflect the actual diagnosis; explaining claim access and self-pay respects her privacy choices', keys: ['EAP ending', 'insurance next'], mistake: 'Bending a diagnosis to address a privacy concern' }),
    ]),
    Q('q10', 'interventions', 'session2', 'Aaliyah reports thinking “Everyone on that floor is against me” on premenstrual days. Which intervention is best supported?', ['R5'], [
      O('a', 'Build a luteal-phase coping plan using cognitive restructuring for thoughts like that one.', 3,
        { r: 'CBT matched to timing', approach: 'Cognitive restructuring', why: 'CBT targets the predictable cognitive shift and prepares coping before the symptomatic window', keys: ['premenstrual thought', 'predictable timing'], mistake: 'Ignoring the timing that makes the pattern treatable' }),
      O('b', 'Teach general stress management skills and have her apply them evenly across the whole month.', 0,
        { r: 'Helpful but untargeted', approach: 'General skills', why: 'Stress skills help, but not concentrating them on the luteal window misses the pattern', keys: ['symptoms limited to luteal phase'], mistake: 'Treating a cyclical problem as constant' }),
      O('c', 'Focus on graded exposure to coworker conflict to reduce her sensitivity to rejection.', -1,
        { r: 'Wrong framework', approach: 'Exposure', why: 'Exposure targets anxiety avoidance, not cyclical mood-driven cognitions', keys: ['not an avoidance problem'], mistake: 'Applying an anxiety protocol to a mood disorder' }),
      O('d', 'Encourage her to vent her anger fully on premenstrual days to release the built-up tension.', -2,
        { r: 'Catharsis backfires', approach: 'Venting anger', why: 'Venting tends to increase anger and could cost her the job she wants to keep', keys: ['written warning'], mistake: 'Believing catharsis reduces anger' }),
    ]),
    Q('q11', 'interventions', 'session2', 'Aaliyah wants to talk with her supervisor about schedule needs without “sounding angry.” What should the counselor do?', ['R5'], [
      O('a', 'Suggest she let HR handle all communication with her supervisor for the time being.', 0,
        { r: 'Avoids skill building', approach: 'Delegate communication', why: 'Routing through HR may be safe, but it bypasses the skill she asked to build', keys: ['client goal stated'], mistake: 'Removing the client from her own advocacy' }),
      O('b', 'Encourage her to email her supervisor a full account of her diagnosis and symptoms.', -1,
        { r: 'Overdisclosure risk', approach: 'Full disclosure', why: 'Sharing a full diagnosis is her right but not needed for schedule requests and may harm her', keys: ['concern about employer'], mistake: 'Equating openness with effective self-advocacy' }),
      O('c', 'Rehearse an assertive talk with her supervisor about schedule needs, using role-play.', 3,
        { r: 'Skill rehearsal', approach: 'Assertiveness training', why: 'Role-play builds assertive communication and helps her advocate for herself calmly', keys: ['wants not to sound angry'], mistake: 'Discussing skills without practicing them' }),
      O('d', 'Coach her to confront the coworker who complained during her next shift to clear the air.', -2,
        { r: 'Escalation risk', approach: 'Confrontation', why: 'Confronting the complainant during a grievance could escalate conflict and jeopardize her job', keys: ['pending grievance'], mistake: 'Confusing confrontation with assertiveness' }),
    ]),
    Q('q12', 'legal', 'session2', 'Aaliyah asks if she can text screenshots from her mood-and-cycle app to the counselor’s cell phone. What is the best response?', ['R7', 'R6'], [
      O('a', 'Accept screenshots by regular email once she consents in writing to unencrypted email.', 0,
        { r: 'Permissible but weaker', approach: 'Consented email', why: 'Informed consent can allow unencrypted email, but a secure portal better protects sensitive reproductive data', keys: ['reproductive health data'], mistake: 'Choosing an allowable option over the more secure one' }),
      O('b', 'Use the practice’s secure portal for uploads and review the app’s privacy policy with her.', 3,
        { r: 'Secure channel, informed use', approach: 'Technology-assisted tools', why: 'Secure channels protect health data, and reviewing the app’s policy informs her about who else may see it', keys: ['new app', 'personal phone requested'], mistake: 'Ignoring the privacy of third-party apps and channels' }),
      O('c', 'Let her text screenshots to his personal phone, deleting them after he copies his notes.', -1,
        { r: 'Unsecured device', approach: 'Personal phone', why: 'Personal phones lack safeguards, and deletion does not undo exposure', keys: ['counselor’s cell phone'], mistake: 'Believing later deletion makes insecure transfer acceptable' }),
      O('d', 'Link the app to his personal cloud account so that her data sync to him automatically each day.', -2,
        { r: 'Uncontrolled data flow', approach: 'Personal cloud sync', why: 'Routing health data to a personal account outside practice safeguards is a serious privacy breach', keys: ['sensitive health data'], mistake: 'Prioritizing convenience over data protection' }),
    ]),
    Q('q13', 'legal', 'session2', 'The county’s attorney subpoenas Aaliyah’s records for the arbitration. No judge signed it and she has not authorized release. What should the counselor do?', ['R8', 'R7', 'R6'], [
      O('a', 'Notify Aaliyah, seek legal advice, and release nothing without her consent or a court order.', 3,
        { r: 'Protect privilege properly', approach: 'Subpoena response', why: 'An attorney-issued subpoena requires a response but not disclosure; release needs client authorization or a court order', keys: ['not signed by a judge', 'no authorization'], mistake: 'Treating a subpoena as an order to disclose' }),
      O('b', 'Contact the attorney to explain that her records are confidential, and then wait for a reply.', 0,
        { r: 'Incomplete response', approach: 'Assert confidentiality', why: 'Asserting confidentiality is right, but the client must be notified and legal advice obtained', keys: ['client unaware'], mistake: 'Handling a subpoena without involving the client' }),
      O('c', 'Release a short treatment summary only, which limits disclosure while still complying.', -1,
        { r: 'Unauthorized disclosure', approach: 'Minimal compliance', why: 'Even a summary is a disclosure that needs authorization or a court order', keys: ['no release signed'], mistake: 'Believing partial disclosure satisfies privilege' }),
      O('d', 'Release her full record promptly, since any subpoena legally requires full compliance.', -2,
        { r: 'Breach of privilege', approach: 'Full compliance', why: 'Releasing records on an attorney subpoena alone breaches confidentiality and privilege', keys: ['pending arbitration'], mistake: 'Confusing a subpoena with a court order' }),
    ]),
  ],
};

// ============================================================================
// D923 — Disruptive Mood Dysregulation Disorder · plan 3 · medium · child
// Complications (medium): a differential needing a discriminator (chronic
// irritability vs. episodic mania with a family history of bipolar I; the ODD
// exclusion) and coordination across two homes, a grandparent, and a school.
// ============================================================================
const D923 = {
  id: 'ncmhce-D923',
  title: 'A nine-year-old’s daily storms at home, at school, and in the counselor’s office',
  category: 'Depressive',
  difficulty: 'medium',
  plan: 3,
  population: 'child',
  primaryDiagnosis: { name: 'Disruptive Mood Dysregulation Disorder', code: 'F34.81' },
  diagnosis: { name: 'Disruptive Mood Dysregulation Disorder', code: 'F34.81' },
  differentialOptions: [
    { id: 'do1', name: 'Oppositional Defiant Disorder', isCorrect: false },
    { id: 'do2', name: 'Bipolar I Disorder', isCorrect: false },
    { id: 'do3', name: 'Intermittent Explosive Disorder', isCorrect: false },
    { id: 'do4', name: 'Disruptive Mood Dysregulation Disorder', isCorrect: true },
  ],
  narrative: {
    intake:
      'Tomasz “Tomek” Wiśniewski, a 9-year-old Polish American fourth grader, is brought to an outpatient counseling practice by his mother, Agnieszka, a ' +
      'dental hygienist. His parents divorced last year; the decree on file gives joint legal custody, with Tomek living mainly with his mother and ' +
      'spending every other weekend with his father, Piotr, a long-haul truck driver. His grandmother, Halina, who speaks mostly Polish, watches him three ' +
      'afternoons a week. Since about first grade, well before the divorce, Tomek has had severe temper outbursts (screaming, throwing objects, kicking ' +
      'walls) three or four times a week at home and at least weekly at school, set off by ordinary limits such as turning off a game. Between outbursts ' +
      'his mother and grandmother describe him as grouchy and “angry at everything” most of the day, nearly every day. He also argues with adults and ' +
      'refuses requests. He has had no periods of unusually elevated mood, grandiosity, or reduced need for sleep and sleeps nine to ten hours a night. His ' +
      'maternal uncle has bipolar I disorder, and Agnieszka fears Tomek “has it too.” He has four office referrals this semester; his mother is willing to ' +
      'sign releases for the school. When told play time is over, Tomek throws a plastic dinosaur that hits the window and yells, “I hate this place.” The ' +
      'counselor feels a flash of irritation and an urge to “lay down the law.” Her caseload is mostly adults; Tomek is her first child client in three ' +
      'years, and her child counseling training is limited.',
    session1:
      'Teacher rating scales and school records, obtained with releases, confirm daily irritability and frequent classroom outbursts. Agnieszka admits that ' +
      'after long outbursts she sometimes gives in and sometimes spanks him, and says Piotr “lets him do anything” on weekends. The school counselor, ' +
      'Mr. Ramírez, is drafting a behavior intervention plan and asks to coordinate; Agnieszka signs a release for him. Tomek has not seen his ' +
      'pediatrician in eighteen months, and Agnieszka asks whether “a pill” might help. She wants Halina, who cares for him three afternoons a week, to ' +
      'use the same plan, but Halina understands little English; Tomek offers to translate.',
    session2:
      'Agnieszka reports fewer school outbursts since the plan began, but homework time at home still brings outbursts about three times a week; she ' +
      'gives in after about twenty minutes of screaming. Tomek says he “goes from zero to a hundred” and cannot tell when anger is building. Near the end ' +
      'of the session, when told he must put the blocks away before leaving, he grabs a small chair and raises it over his head, yelling. That week Piotr ' +
      'calls and asks for a copy of Tomek’s records. Two days later the governor issues a mandatory evacuation order for the coastal county where the ' +
      'counseling office is located, ahead of a hurricane expected in 48 hours.',
  },
  diagnosticRationale:
    'Severe, recurrent temper outbursts grossly out of proportion to the situation, occurring three or more times a week, with persistently irritable ' +
    'or angry mood most of the day nearly every day between outbursts, present for well over twelve months in at least two settings (home and school), ' +
    'with onset before age 10 in a child now 9, meet DMDD. The irritability is chronic rather than episodic, and there have been no distinct periods of ' +
    'elevated mood, grandiosity, or decreased need for sleep, so a family history of bipolar I does not make bipolar disorder the diagnosis. Although he ' +
    'argues and refuses requests, ODD is not diagnosed when DMDD criteria are met, and the persistent between-outburst mood disturbance distinguishes ' +
    'DMDD from intermittent explosive disorder.',
  references: [
    { id: 'R1', source: 'DSM-5-TR', detail: 'Disruptive mood dysregulation disorder: outbursts 3+ per week, persistent irritability between outbursts, 12+ months, 2+ settings, onset before 10; ODD exclusion; differential with bipolar disorder' },
    { id: 'R2', source: 'Hays (Assessment)', detail: 'Multi-informant assessment of children, including teacher rating scales and school records' },
    { id: 'R3', source: 'Corey (Theory & Practice)', detail: 'Behavioral approaches: reinforcement, consistent limits, extinction and intermittent reinforcement; skills training for children' },
    { id: 'R4', source: 'ACA Code of Ethics', detail: 'Competence and new specialty areas, consultation, releases for collaboration, confidentiality with minors and parents, and avoiding abandonment when services are interrupted' },
    { id: 'R5', source: 'HIPAA', detail: 'Parents as personal representatives of minors; minimum necessary disclosure to schools under authorization; Security Rule contingency planning (data backup, disaster recovery, emergency-mode operation)' },
    { id: 'R6', source: 'State law', detail: 'Parental access to a minor’s records under joint legal custody; licensure for telehealth across state lines' },
    { id: 'R7', source: 'NBCC 2027 Spec', detail: 'Legal and ethical compliance tasks: activate and update an emergency preparedness plan for the counseling practice' },
    { id: 'R8', source: 'NBCC Code of Ethics', detail: 'Practicing within competence and arranging supervision when entering an unfamiliar population' },
  ],
  questions: [
    // ---------------- intake (4) ----------------
    Q('q1', 'profdev', 'intake', 'Tomek is the counselor’s first child client in three years, and her child training is limited. What is the best way to handle her suitability for this case?', ['R8', 'R4'], [
      O('a', 'Arrange child-focused supervision and confirm she can meet his needs, referring if she cannot.', 3,
        { r: 'Assess fit and add support', approach: 'Suitability review', why: 'Counselors judge whether they have the needed skills and add supervision, referring when competence cannot be built in time', keys: ['first child client in three years', 'limited child training'], mistake: 'Accepting or declining a case without honestly weighing fit' }),
      O('b', 'Refer him to a child specialist after the intake, since she has seen so few children recently.', 0,
        { r: 'Defensible but premature', approach: 'Refer out', why: 'Referral is acceptable, but supervision may let her serve him competently without a disruptive transfer', keys: ['family already engaged'], mistake: 'Treating referral as the only answer to a skills gap' }),
      O('c', 'Continue with adult CBT methods, since depressive disorders are treated alike at every age.', -1,
        { r: 'Ignores developmental needs', approach: 'Adult methods', why: 'Children need developmentally adapted, family- and school-involved approaches', keys: ['9-year-old', 'outbursts at home and school'], mistake: 'Assuming adult competence transfers to children' }),
      O('d', 'Keep the case without supervision and learn child methods through trial and error with him.', -2,
        { r: 'Practicing beyond competence', approach: 'Learn on the client', why: 'Practicing in a new area without training or supervision risks harm to the child', keys: ['limited training'], mistake: 'Using the client as the training ground' }),
    ]),
    Q('q2', 'assess', 'intake', 'Which step best completes the assessment of whether Tomek’s irritability is present across settings?', ['R2', 'R5'], [
      O('a', 'Rely on his mother’s detailed report, since she observes him across most of his daily settings.', 0,
        { r: 'Single informant', approach: 'Parent report only', why: 'Her report is valuable but does not show school functioning directly', keys: ['school referrals'], mistake: 'Relying on one informant for a cross-setting criterion' }),
      O('b', 'Ask Tomek to rate his own anger over the past year, since he knows best how he feels inside.', -1,
        { r: 'Unreliable as sole source', approach: 'Child self-report', why: 'A 9-year-old’s recall over a year is limited and cannot establish cross-setting patterns alone', keys: ['age 9'], mistake: 'Over-relying on a young child’s retrospective self-report' }),
      O('c', 'With releases, gather teacher rating scales and school records to confirm cross-setting symptoms.', 3,
        { r: 'Multi-informant data', approach: 'Collateral information', why: 'Teacher scales and records document the school setting, which the diagnosis requires', keys: ['four office referrals', 'mother willing to sign releases'], mistake: 'Skipping collateral that the criteria depend on' }),
      O('d', 'Call his teacher for her impressions before any release is signed, since it is a school matter.', -2,
        { r: 'Disclosure without consent', approach: 'Informal contact', why: 'Contacting the school discloses that he is in treatment; a release is required first', keys: ['no release yet'], mistake: 'Assuming school contact needs no authorization' }),
    ]),
    Q('q3', 'profdev', 'intake', 'Tomek throws a toy at the window, and the counselor feels a flash of irritation and an urge to “lay down the law.” What should she do?', ['R3', 'R8'], [
      O('a', 'Raise her voice to match his so he knows that throwing toys is not allowed in her office.', -1,
        { r: 'Escalates and models anger', approach: 'Match intensity', why: 'Matching his volume escalates the outburst and models the behavior being treated', keys: ['counselor irritation'], mistake: 'Letting the counselor’s emotion set the response' }),
      O('b', 'Notice her irritation, slow her breathing, and answer in a calm, low voice with a clear limit.', 3,
        { r: 'Self-regulation first', approach: 'Self-regulation', why: 'Regulating herself lets her set a calm limit that models the skill Tomek needs', keys: ['flash of irritation', 'urge to lay down the law'], mistake: 'Acting on countertransference in the moment' }),
      O('c', 'Let the outburst run its course without comment, then discuss it with his mother afterward.', 0,
        { r: 'Calm but no limit', approach: 'Ignore and debrief', why: 'Staying calm is right, but throwing objects needs a clear, calm limit', keys: ['object hit window'], mistake: 'Confusing non-reaction with self-regulation' }),
      O('d', 'End the intake early and tell his mother he is too disruptive for outpatient counseling.', -2,
        { r: 'Rejects the presenting problem', approach: 'Terminate', why: 'The outburst is the presenting problem; ending care in reaction to it is abandonment driven by irritation', keys: ['first session'], mistake: 'Using termination to manage counselor discomfort' }),
    ]),
    Q('q4', 'assess', 'intake', 'Agnieszka fears Tomek has bipolar disorder like her brother. Which finding best supports DMDD as the diagnosis?', ['R1'], [
      O('a', 'His arguing and refusing also meet oppositional defiant disorder, so both diagnoses are recorded.', -1,
        { r: 'Ignores the exclusion rule', approach: 'Dual diagnosis', why: 'DSM-5-TR does not allow ODD to be diagnosed when DMDD criteria are met', keys: ['argues with adults'], mistake: 'Reversing the DMDD/ODD hierarchy' }),
      O('b', 'His uncle’s bipolar I disorder makes early bipolar disorder the most likely explanation for him.', -2,
        { r: 'Family history overrides criteria', approach: 'Heredity reasoning', why: 'Family history raises risk but cannot substitute for distinct manic or hypomanic episodes, which he lacks', keys: ['no elevated mood', 'sleeps 9–10 hours'], mistake: 'Diagnosing from family history instead of symptoms' }),
      O('c', 'His symptoms began before age 10 and have lasted over a year, which alone confirms the diagnosis.', 0,
        { r: 'Necessary, not sufficient', approach: 'Timing only', why: 'Onset and duration are required, but chronic irritability without episodes is what separates DMDD from bipolar disorder', keys: ['onset in first grade'], mistake: 'Treating timing criteria as the discriminator' }),
      O('d', 'His irritability is chronic between outbursts, with no episodes of elevated mood or less sleep.', 3,
        { r: 'Chronic, not episodic', approach: 'Apply the discriminator', why: 'Persistent irritability without distinct mood episodes distinguishes DMDD from bipolar disorder', keys: ['“angry at everything” daily', 'no grandiosity or reduced sleep'], mistake: 'Equating severe irritability with mania' }),
    ]),
    // ---------------- session1 (4) ----------------
    Q('q5', 'planning', 'session1', 'Agnieszka sometimes gives in and sometimes spanks, and Piotr “lets him do anything.” Which plan element best addresses the home outbursts?', ['R3'], [
      O('a', 'Teach Tomek anger-management skills in weekly individual sessions before involving the parents.', 0,
        { r: 'Child skills alone', approach: 'Individual first', why: 'Child skills help, but inconsistent parenting maintains outbursts and must be addressed early', keys: ['giving in', 'lenient weekends'], mistake: 'Treating the child in isolation from the reinforcement at home' }),
      O('b', 'Recommend a reward chart for good days that his mother runs on her own at her house only.', -1,
        { r: 'Inconsistent across homes', approach: 'Single-home rewards', why: 'A one-home system leaves weekend and grandparent care inconsistent', keys: ['two households'], mistake: 'Building a plan for one caregiver only' }),
      O('c', 'Use parent management training so both homes use the same praise, limits, and calm consequences.', 3,
        { r: 'Consistent parent training', approach: 'Behavioral management plan', why: 'Parent training aligns praise and consistent limits across caregivers, the core of behavior management for outbursts', keys: ['mixed responses at home', 'joint legal custody'], mistake: 'Overlooking caregiver consistency' }),
      O('d', 'Recommend firmer physical discipline at home, since giving in has been rewarding his outbursts.', -2,
        { r: 'Endorses harmful discipline', approach: 'Physical punishment', why: 'Physical punishment worsens aggression and models it; the problem is inconsistency, not too little force', keys: ['already spanks'], mistake: 'Answering intermittent reinforcement with harsher punishment' }),
    ]),
    Q('q6', 'indirect', 'session1', 'Mr. Ramírez is drafting a behavior intervention plan and asks to coordinate. Agnieszka signed a release. What should the counselor do?', ['R5', 'R4'], [
      O('a', 'Share the key home strategies with the school team so the home and school plans align.', 3,
        { r: 'Coordinated, consented care', approach: 'Collaborate with school', why: 'Sharing relevant strategies under the release aligns adult responses across settings', keys: ['release for school counselor', 'behavior plan in progress'], mistake: 'Letting home and school plans run separately' }),
      O('b', 'Let the school build its own plan and compare notes with the family at the end of the semester.', 0,
        { r: 'Too little, too late', approach: 'Parallel plans', why: 'Waiting until semester’s end allows inconsistent plans to run for months', keys: ['school outbursts weekly'], mistake: 'Deferring collaboration that consent already allows' }),
      O('c', 'Send the school his full intake report so staff understand everything behind his behavior.', -1,
        { r: 'Exceeds minimum necessary', approach: 'Full disclosure', why: 'Family and divorce details exceed what the school needs to run a behavior plan', keys: ['sensitive family history'], mistake: 'Equating more information with better collaboration' }),
      O('d', 'Tell the school his diagnosis is probably bipolar so staff can watch him closely for mania.', -2,
        { r: 'Inaccurate and stigmatizing', approach: 'Speculative label', why: 'Sharing an unsupported diagnosis misinforms staff and can lead to harmful responses', keys: ['no manic episodes'], mistake: 'Passing on a feared label as clinical fact' }),
    ]),
    Q('q7', 'planning', 'session1', 'Agnieszka asks whether “a pill” might help, and Tomek has not seen his pediatrician in eighteen months. What should the counselor do?', ['R4', 'R1'], [
      O('a', 'Tell her medication questions can wait until parent training has been tried for six months.', 0,
        { r: 'Reasonable sequence, missed referral', approach: 'Defer medication question', why: 'Parent training is first-line, but an overdue medical visit and her question warrant referral now', keys: ['eighteen months since pediatrician'], mistake: 'Withholding a referral the family has asked about' }),
      O('b', 'Tell her medication rarely helps children and steer her toward counseling alone instead.', -1,
        { r: 'Outside scope and inaccurate', approach: 'Discourage medication', why: 'Counselors do not judge medication efficacy for a specific child; that is for a prescriber', keys: ['parent asked'], mistake: 'Offering medication opinions as a counselor' }),
      O('c', 'Suggest the stimulant that helped another child of hers with a similar pattern of outbursts.', -2,
        { r: 'Scope and confidentiality breach', approach: 'Recommend a drug', why: 'Recommending a medication is outside scope, and referencing another client breaches confidentiality', keys: ['no prescriber involved'], mistake: 'Recommending medication from anecdote' }),
      O('d', 'Refer him to his pediatrician and a child psychiatrist for evaluation, with consent to share.', 3,
        { r: 'Refer within scope', approach: 'Specialist referral', why: 'Referral for medical and psychiatric evaluation answers her question within the counselor’s scope', keys: ['medication question', 'overdue checkup'], mistake: 'Answering a medication question instead of referring' }),
    ]),
    Q('q8', 'indirect', 'session1', 'Halina, who understands little English, cares for Tomek three afternoons a week. Tomek offers to translate. How should the counselor include her?', ['R4'], [
      O('a', 'Ask his mother to interpret in sessions, since she is fluent in Polish and knows the plan.', 0,
        { r: 'Family interpreter', approach: 'Adult family member interprets', why: 'Better than a child, but family interpreters may filter content and lose their own role in the session', keys: ['mother is a participant'], mistake: 'Using a participant as the interpreter' }),
      O('b', 'Arrange a professional Polish interpreter so his grandmother can join the planning sessions.', 3,
        { r: 'Professional interpreter', approach: 'Translation services', why: 'A qualified interpreter gives Halina accurate access to the plan in her preferred language', keys: ['mostly Polish', 'regular caregiver'], mistake: 'Relying on family members to interpret clinical content' }),
      O('c', 'Leave his grandmother out of the plan, since she cares for him only three afternoons a week.', -1,
        { r: 'Excludes a caregiver', approach: 'Narrow the team', why: 'Three afternoons a week is substantial care; leaving her out undermines consistency', keys: ['three afternoons weekly'], mistake: 'Excluding caregivers because of language' }),
      O('d', 'Let Tomek interpret for his grandmother, since he speaks both languages well and wants to help.', -2,
        { r: 'Child as interpreter', approach: 'Child interprets', why: 'Having the identified child interpret his own behavior plan reverses roles and distorts the message', keys: ['Tomek offered'], mistake: 'Using the child client as an interpreter' }),
    ]),
    // ---------------- session2 (5) ----------------
    Q('q9', 'interventions', 'session2', 'Agnieszka gives in after about twenty minutes of screaming at homework time. What should the counselor coach her to do?', ['R3'], [
      O('a', 'Stay calm, hold the limit, and praise him quickly once he settles and begins his work.', 3,
        { r: 'Consistency plus praise', approach: 'Parent training', why: 'Holding limits and praising calm behavior removes the reward for escalation and reinforces recovery', keys: ['gives in after twenty minutes'], mistake: 'Missing that giving in reinforces outbursts' }),
      O('b', 'Skip homework on hard days until his outbursts become less frequent over the coming weeks.', 0,
        { r: 'Avoids the trigger', approach: 'Remove demand', why: 'Reducing demand may calm evenings, but it teaches that outbursts end demands', keys: ['homework trigger'], mistake: 'Removing the trigger instead of changing the response' }),
      O('c', 'Explain at length why homework matters while he is in the middle of an outburst.', -1,
        { r: 'Attention during outburst', approach: 'Reason mid-outburst', why: 'Lengthy talk during an outburst adds attention and cannot be processed at peak arousal', keys: ['screaming episodes'], mistake: 'Reasoning with a child at peak arousal' }),
      O('d', 'Give in sooner, since shorter outbursts would mean less stress for the whole family.', -2,
        { r: 'Strengthens outbursts', approach: 'Earlier capitulation', why: 'Giving in reinforces outbursts and accelerates their return', keys: ['reinforcement pattern'], mistake: 'Misreading short-term relief as improvement' }),
    ]),
    Q('q10', 'interventions', 'session2', 'Tomek says he “goes from zero to a hundred” and cannot tell when anger is building. Which intervention fits best?', ['R3'], [
      O('a', 'Discuss in depth with him why he gets angry so that he gains insight into the underlying causes.', 0,
        { r: 'Insight over skill', approach: 'Insight discussion', why: 'Some discussion helps, but a 9-year-old needs concrete, practiced skills', keys: ['cannot detect early anger'], mistake: 'Using adult insight work with a young child' }),
      O('b', 'Teach him to hit a pillow when he is angry so that he can release the anger safely.', -1,
        { r: 'Catharsis', approach: 'Venting on objects', why: 'Hitting objects rehearses aggression and does not reduce anger', keys: ['physical outbursts'], mistake: 'Believing catharsis reduces aggression' }),
      O('c', 'Teach a feelings thermometer and practice a calm-down plan for when he reaches a 3.', 3,
        { r: 'Developmental skill-building', approach: 'Emotion regulation skills', why: 'A thermometer helps him notice rising anger, and a rehearsed plan gives him a response before he peaks', keys: ['“zero to a hundred”'], mistake: 'Skipping awareness training before coping skills' }),
      O('d', 'Warn him that if the outbursts continue he could be sent to a special hospital to stay.', -2,
        { r: 'Threat-based', approach: 'Fear motivation', why: 'Threats frighten the child, damage the alliance, and do not build regulation', keys: ['9-year-old'], mistake: 'Using fear as an intervention' }),
    ]),
    Q('q11', 'interventions', 'session2', 'Told to put the blocks away, Tomek grabs a small chair and raises it over his head, yelling. What should the counselor do first?', ['R3', 'R8'], [
      O('a', 'Firmly order him to put the chair down at once and tell him he will lose his tablet tonight.', -1,
        { r: 'Escalating demand', approach: 'Command and threat', why: 'Commands and threats at peak arousal tend to escalate aggression', keys: ['yelling, chair raised'], mistake: 'Adding demands during a crisis' }),
      O('b', 'Keep a safe distance, speak low and slow, offer a simple choice, and reduce demands.', 3,
        { r: 'De-escalation', approach: 'Crisis de-escalation', why: 'Space, a calm voice, simple choices, and fewer demands lower arousal while keeping everyone safe', keys: ['chair overhead', 'demand triggered outburst'], mistake: 'Confronting rather than de-escalating' }),
      O('c', 'Move other objects out of reach and wait in silence until he decides to put the chair down.', 0,
        { r: 'Safe but passive', approach: 'Wait it out', why: 'Securing objects helps, but calm verbal guidance and a choice speed de-escalation', keys: ['safety risk'], mistake: 'Withdrawing all guidance during escalation' }),
      O('d', 'Physically take the chair out of his hands before he can throw it at anyone in the room.', -2,
        { r: 'Physical intervention', approach: 'Physical restraint', why: 'Grabbing the chair risks injury and is not appropriate without training or imminent danger', keys: ['no restraint training'], mistake: 'Using physical force as a first response' }),
    ]),
    Q('q12', 'legal', 'session2', 'Piotr, who has joint legal custody under the decree on file, asks for a copy of Tomek’s records. What should the counselor do?', ['R6', 'R5'], [
      O('a', 'Release the full record to him at once, since joint legal custody gives him equal access.', 0,
        { r: 'Likely right, unverified', approach: 'Immediate release', why: 'He likely has access, but the decree, state law, and practice policy should be checked first', keys: ['joint legal custody'], mistake: 'Skipping verification before releasing records' }),
      O('b', 'Ask his mother whether she approves before deciding whether to release anything to him.', -1,
        { r: 'Wrong gatekeeper', approach: 'Defer to mother', why: 'Under joint legal custody his access does not depend on her approval; asking her triangulates the counselor', keys: ['divorced parents'], mistake: 'Treating the bringing parent as the records gatekeeper' }),
      O('c', 'Refuse, and tell him that a nonresidential father has no right to see his son’s records.', -2,
        { r: 'Misstates parental rights', approach: 'Refuse access', why: 'Joint legal custody generally includes records access; refusing on that basis is legally wrong and harmful', keys: ['decree on file'], mistake: 'Confusing physical custody with legal custody' }),
      O('d', 'Verify his rights under the decree and state law, then respond per the records policy.', 3,
        { r: 'Verify, then comply', approach: 'Records access procedure', why: 'Parental access to a minor’s records depends on the custody order and state law, applied through practice policy', keys: ['joint legal custody', 'records request'], mistake: 'Deciding access on assumption rather than documents and law' }),
    ]),
    Q('q13', 'legal', 'session2', 'A mandatory evacuation order covers the county where the office is located, with a hurricane due in 48 hours. What should the counselor do?', ['R7', 'R4', 'R5', 'R6'], [
      O('a', 'Cancel all sessions by voicemail and resume scheduling whenever the office reopens.', 0,
        { r: 'Safe but no continuity', approach: 'Cancel and wait', why: 'Closing is right, but clients need outreach and a continuity plan, especially at-risk families', keys: ['mandatory evacuation'], mistake: 'Treating closure as the whole plan' }),
      O('b', 'Follow the practice emergency plan, contact clients, and use telehealth where it is lawful.', 3,
        { r: 'Activate the plan', approach: 'Emergency preparedness', why: 'An emergency plan sets client contact, record access, and continuity of care, with telehealth only where licensure allows', keys: ['48-hour warning', 'ongoing child client'], mistake: 'Improvising instead of following the preparedness plan' }),
      O('c', 'Keep seeing clients in the office until the storm arrives, since families need continuity.', -2,
        { r: 'Endangers clients', approach: 'Stay open', why: 'Holding sessions in an evacuation zone puts clients and staff in danger', keys: ['mandatory order'], mistake: 'Valuing continuity over physical safety' }),
      O('d', 'Continue sessions by video from wherever families evacuate, without checking licensure.', -1,
        { r: 'Jurisdiction ignored', approach: 'Telehealth anywhere', why: 'Continuity is good, but clients who evacuate to another state may be outside the counselor’s authority to practice', keys: ['coastal evacuation'], mistake: 'Assuming telehealth follows the client anywhere' }),
    ]),
  ],
};

// ============================================================================
// D924 — Major Depressive Disorder, Severe (recurrent; F33.2) · plan 4 · hard · older_adult
// Buried facts (hard): firearm access disclosed as reassurance at the end of the
// intake; warning signs (gun cleaning, giving away the boat) surfaced only by the
// spouse; nightly drinking plus a new hypnotic; ageist normalizing by the counselor.
// ============================================================================
const D924 = {
  id: 'ncmhce-D924',
  title: 'A retired Navy chief and shipyard planner who says the pistol is “nothing to worry about”',
  category: 'Depressive',
  difficulty: 'hard',
  plan: 4,
  population: 'older_adult',
  primaryDiagnosis: { name: 'Major Depressive Disorder, Severe', code: 'F33.2' },
  diagnosis: { name: 'Major Depressive Disorder, Severe', code: 'F33.2' },
  differentialOptions: [
    { id: 'do1', name: 'Adjustment Disorder, with Depressed Mood', isCorrect: false },
    { id: 'do2', name: 'Major Depressive Disorder, Severe', isCorrect: true },
    { id: 'do3', name: 'Alcohol-Induced Depressive Disorder', isCorrect: false },
    { id: 'do4', name: 'Persistent Depressive Disorder', isCorrect: false },
  ],
  narrative: {
    intake:
      'Ernesto Villanueva, 66, a Filipino American who retired from the Navy as a chief petty officer and then worked twenty years as a shipyard planner, ' +
      'retired five months ago. His primary care physician (PCP) referred him to a group counseling practice after a PHQ-9 of 22. Over the past two months ' +
      'he reports depressed mood every day, no interest in fishing or his grandchildren, a 15-pound weight loss, waking at 3 a.m., fatigue, poor ' +
      'concentration, and feeling “useless now.” He had one prior depressive episode at 44, after leaving the Navy, which remitted with VA counseling and ' +
      'medication; he has never had manic symptoms. His drinking has risen from one or two beers on weekends to four or five every night, alone in the ' +
      'garage, and his PCP prescribed zolpidem for sleep a month ago. He says, “Some mornings I wish I wouldn’t wake up. Lourdes would be fine; she’d have my ' +
      'pension,” and denies a plan or intent. Near the end, asked about weapons, he says, “Just my old pistol in the nightstand and a couple of shotguns in ' +
      'the garage cabinet. Nothing to worry about; I’ve handled guns for forty years.” With his consent, his wife, Lourdes, a retired nurse, joins for the ' +
      'last ten minutes and signs on as a safety contact; she mentions that he has been cleaning the pistol “more than usual” and gave his fishing boat to ' +
      'their nephew last month. The counselor, a 34-year-old LPC, catches herself thinking, “Of course he’s down; he’s retired, that’s normal at his age.” ' +
      'She has never had formal training in lethal means counseling and felt awkward asking about the guns.',
    session1:
      'On the C-SSRS, Ernesto endorses wishing he were dead most days and admits he has “thought about the pistol” once in the past month, but says, “I ' +
      'wouldn’t do that to Lourdes”; he denies intent, preparatory steps, or past attempts. He takes the zolpidem with beer on some nights. He signs a ' +
      'release for his PCP, who does not know about his drinking or his suicidal thoughts. He tells the counselor, “Filipinos don’t go to counselors; we ' +
      'pray and keep working,” says he has stopped going to Mass, and describes his identity as “the one who provides and fixes things.” He used to hunt ' +
      'deer with his son, Paolo, who lives twenty minutes away, and once mentored teens in a parish program. He agrees Lourdes can be part of safety ' +
      'planning and says Paolo “could maybe hold the guns for a while.”',
    session2:
      'Paolo has not yet picked up the guns. Ernesto now says, “A man protects his home. I’m not handing my pistol to anyone.” He spends most days alone in ' +
      'the garage. He asks the counselor to keep “all the gun talk” out of his record because he has heard the state can take guns away and worries the VA ' +
      'will find out. By the end of the session he agrees that Paolo will hold the pistol and shotguns “until I’m back on my feet,” and Paolo picks them up ' +
      'that Sunday. Four days later Lourdes calls the counselor: Ernesto drove to Paolo’s house the day before and took the pistol back, he skipped Mass ' +
      'again, and he is drinking more. She says, “Please don’t tell him I called.”',
  },
  diagnosticRationale:
    'Nearly all nine criteria are present for two months (depressed mood, anhedonia, weight loss, early waking, fatigue, worthlessness, poor ' +
    'concentration, recurrent thoughts of death and passive ideation) with marked impairment, meeting a severe ' +
    'major depressive episode; a prior episode at 44 with full remission makes the disorder recurrent (F33.2), and there are no psychotic features or ' +
    'history of mania. Retirement is a precipitant, but the symptom count and severity exceed an adjustment disorder. Depressive symptoms preceded the ' +
    'rise in drinking and a prior episode occurred without alcohol, which argues against an alcohol-induced depressive disorder, though his drinking ' +
    'needs screening and treatment. Risk is elevated by age, sex, retirement-related role loss, nightly drinking, a sedative-hypnotic, firearm access, ' +
    'gun cleaning, and giving away a valued possession.',
  references: [
    { id: 'R1', source: 'DSM-5-TR', detail: 'Major depressive disorder, recurrent, severe: criteria, severity specifiers, and differential with adjustment disorder and substance-induced depressive disorder' },
    { id: 'R2', source: 'C-SSRS', detail: 'Ideation intensity, method-specific thoughts, preparatory behavior, and warning signs such as giving away possessions' },
    { id: 'R3', source: 'Stanley-Brown SPI', detail: 'Written safety plan: warning signs, internal coping, social contacts, professional and crisis contacts, and making the environment safe' },
    { id: 'R4', source: 'VA/DoD CPG', detail: 'Suicide risk guideline: lethal means safety counseling, including temporary off-site firearm storage, and risk stratification for level of care' },
    { id: 'R5', source: 'APA CPG', detail: 'Depression guideline, including older adults: behavioral activation and CBT as supported psychotherapies' },
    { id: 'R6', source: 'Hays (Assessment)', detail: 'Alcohol screening with the AUDIT and selecting age-appropriate instruments' },
    { id: 'R7', source: 'ACA Code of Ethics', detail: 'Honest records, explaining confidentiality limits, avoiding imposition of values, competence, and cultural humility' },
    { id: 'R8', source: 'HIPAA', detail: 'Disclosure to treating providers and family under authorization; client right of access and record content' },
    { id: 'R9', source: 'State law', detail: 'Extreme risk protection order statutes and record-access rules vary by jurisdiction' },
    { id: 'R10', source: 'NBCC Code of Ethics', detail: 'Competence through training and consultation; counselor self-awareness of bias, including age' },
  ],
  questions: [
    // ---------------- intake (4) ----------------
    Q('q1', 'assess', 'intake', 'Ernesto denies plan and intent and calls his firearms “nothing to worry about.” What is the best way to assess his suicide risk at intake?', ['R2', 'R4'], [
      O('a', 'Arrange an emergency psychiatric evaluation today because he is an older man with firearm access.', 0,
        { r: 'Errs toward safety, skips assessment', approach: 'Escalate on demographics', why: 'Escalation may become necessary, but the level of care should follow a structured assessment of his actual risk', keys: ['denies plan and intent'], mistake: 'Deciding level of care on demographics before assessing' }),
      O('b', 'Use the C-SSRS to probe the gun cleaning and boat gift, and address firearm access now.', 3,
        { r: 'Assess the buried signs', approach: 'Structured risk assessment', why: 'Warning signs reported by his wife and firearm access disclosed as reassurance must be assessed directly and acted on', keys: ['cleaning the pistol more', 'gave away boat', 'pistol in nightstand'], mistake: 'Accepting reassurance and missing collateral warning signs' }),
      O('c', 'Accept his denial of a plan or intent and schedule weekly sessions to keep monitoring his mood.', -1,
        { r: 'Misses warning signs', approach: 'Accept self-report', why: 'His denial conflicts with the warning signs Lourdes reported; weekly monitoring leaves firearm access unaddressed', keys: ['“nothing to worry about”'], mistake: 'Letting the client’s minimization close the assessment' }),
      O('d', 'Ask him to promise not to use his firearms while he is in counseling for his depression.', -2,
        { r: 'No-suicide contract', approach: 'Promise of safety', why: 'A promise is not a safety intervention and leaves lethal means in place', keys: ['firearms at home'], mistake: 'Substituting a contract for assessment and means safety' }),
    ]),
    Q('q2', 'assess', 'intake', 'Ernesto now drinks four or five beers nightly, alone, and takes a new sleep medication. How should the counselor assess his substance use?', ['R6', 'R1'], [
      O('a', 'Screen with the AUDIT and ask how drinking relates to his mood, sleep, and evenings alone.', 3,
        { r: 'Screen and contextualize', approach: 'Substance use screening', why: 'A validated screen plus functional questions clarify severity and its link to mood and risk', keys: ['four or five beers nightly', 'drinks alone in garage'], mistake: 'Treating drinking as a side issue in a depressed older adult' }),
      O('b', 'Note his beer intake in the chart and plan to address drinking once the depression lifts.', 0,
        { r: 'Delays a risk factor', approach: 'Sequence later', why: 'Drinking raises suicide risk and affects treatment now; deferring it leaves risk unmeasured', keys: ['zolpidem with beer'], mistake: 'Assuming substance use will resolve with mood' }),
      O('c', 'Accept that a few beers a night is normal for a retired man and leave drinking out of the plan.', -1,
        { r: 'Normalizes risky use', approach: 'Normalize', why: 'A fivefold increase while depressed is a clinical concern, not a normal retirement habit', keys: ['rise from weekend-only'], mistake: 'Normalizing a change that signals risk' }),
      O('d', 'Tell him to stop drinking completely tonight, since alcohol is making his depression worse.', -2,
        { r: 'Directive and unassessed', approach: 'Abrupt abstinence order', why: 'Ordering abrupt cessation before assessing dependence and medical risk is outside scope and may provoke disengagement', keys: ['nightly drinking'], mistake: 'Directing change before assessing severity' }),
    ]),
    Q('q3', 'profdev', 'intake', 'The counselor catches herself thinking, “Of course he’s down; he’s retired, that’s normal at his age.” What should she do?', ['R10', 'R7'], [
      O('a', 'Rely on a geriatric depression scale so that scores rather than her impressions guide the plan.', 0,
        { r: 'Tools do not fix bias', approach: 'Instrument as safeguard', why: 'Standardized tools help, but the assumption still shapes interpretation and urgency', keys: ['PHQ-9 of 22'], mistake: 'Assuming measures neutralize the counselor’s bias' }),
      O('b', 'Accept that low mood is expected after retirement and focus on adjusting to his new routine.', -1,
        { r: 'Ageist normalizing', approach: 'Normalize', why: 'Severe depression is not a normal part of aging; this framing under-treats a high-risk client', keys: ['PHQ-9 of 22', 'passive ideation'], mistake: 'Treating depression in older adults as expected' }),
      O('c', 'Examine her assumption that sadness is normal at his age, and seek supervision on age bias.', 3,
        { r: 'Self-reflection on ageism', approach: 'Self-reflection and supervision', why: 'Recognizing and examining age bias protects the accuracy of risk assessment and treatment intensity', keys: ['“normal at his age”'], mistake: 'Letting age stereotypes lower clinical urgency' }),
      O('d', 'Keep the impression to herself, since older clients tend to dislike talking about depression.', -2,
        { r: 'Compounds the bias', approach: 'Avoid the topic', why: 'Adding a second stereotype risks avoiding depression and suicide questions with a high-risk client', keys: ['older man with firearms'], mistake: 'Using stereotypes to justify avoiding clinical topics' }),
    ]),
    Q('q4', 'profdev', 'intake', 'The counselor has no formal lethal means counseling training and felt awkward asking about the guns. What is the best professional response?', ['R10', 'R4'], [
      O('a', 'Read about firearm safety and rely on that general knowledge for conversations with clients.', 0,
        { r: 'Self-study only', approach: 'Independent reading', why: 'Reading helps, but structured training and consultation build the specific skill', keys: ['felt awkward asking'], mistake: 'Treating general reading as skill training' }),
      O('b', 'Leave firearm questions to a psychiatrist, since gun safety falls outside a counselor’s role.', -1,
        { r: 'Misreads scope', approach: 'Defer to others', why: 'Assessing access and counseling on lethal means are core counselor suicide-prevention tasks', keys: ['firearms disclosed'], mistake: 'Believing lethal means counseling is outside counseling' }),
      O('c', 'Avoid raising firearms with Ernesto again until she feels more at ease with the topic.', -2,
        { r: 'Avoidance with a high-risk client', approach: 'Wait for comfort', why: 'Avoiding the topic leaves a firearm in reach of a severely depressed man with warning signs', keys: ['pistol in nightstand', 'gun cleaning'], mistake: 'Letting counselor discomfort set the safety agenda' }),
      O('d', 'Complete lethal means counseling training such as CALM, and consult while serving Ernesto.', 3,
        { r: 'Targeted training plus consultation', approach: 'Specialized training', why: 'Training such as Counseling on Access to Lethal Means builds the skill while consultation supports this case now', keys: ['no formal training', 'firearms present'], mistake: 'Practicing a high-stakes skill without training or support' }),
    ]),
    // ---------------- session1 (4) ----------------
    Q('q5', 'planning', 'session1', 'Ernesto has thought about the pistol once, denies intent, and is willing to consider Paolo holding the guns. Which initial plan is most appropriate?', ['R4', 'R3'], [
      O('a', 'Recommend inpatient admission now, since severe depression and a firearm call for the highest care.', 0,
        { r: 'Over-restrictive', approach: 'Maximum level of care', why: 'Admission errs toward safety, but he denies intent, has supports, and accepts means safety, so a less restrictive plan fits', keys: ['no intent', 'willing to involve son'], mistake: 'Equating severity with a need for hospitalization' }),
      O('b', 'Schedule sessions every two weeks on retirement adjustment, revisiting risk if his mood worsens.', -1,
        { r: 'Under-intensive, misframed', approach: 'Adjustment focus', why: 'Severe depression with method-specific thoughts needs closer follow-up and active safety planning', keys: ['thought about the pistol'], mistake: 'Matching intensity to the stressor rather than the risk' }),
      O('c', 'Start weekly outpatient sessions and leave the firearms in place, since he denies any intent.', -2,
        { r: 'Omits means safety', approach: 'Outpatient without means plan', why: 'Leaving firearms in place after method-specific thoughts omits the most important safety step', keys: ['pistol in nightstand'], mistake: 'Treating denial of intent as making means safety optional' }),
      O('d', 'Begin weekly care with a safety plan, off-site firearm storage, and a psychiatric referral.', 3,
        { r: 'Least restrictive safe plan', approach: 'Risk-matched initial plan', why: 'Close outpatient care, a written safety plan, firearm removal, and a psychiatric evaluation match his risk and supports', keys: ['severe MDD', 'firearm access', 'supportive wife and son'], mistake: 'Choosing a level of care without a means plan' }),
    ]),
    Q('q6', 'planning', 'session1', 'Ernesto says, “Filipinos don’t go to counselors; we pray and keep working,” and sees himself as “the one who provides and fixes things.” How should this shape his plan?', ['R5', 'R7'], [
      O('a', 'Focus goals on symptom reduction and leave his views on counseling for a later session.', 0,
        { r: 'Postpones key context', approach: 'Symptoms first', why: 'Symptom goals matter, but ignoring his framing of help-seeking risks dropout early in care', keys: ['ambivalent about counseling'], mistake: 'Treating cultural context as optional' }),
      O('b', 'Build goals around valued roles, like parish mentoring, and frame care as a family strength.', 3,
        { r: 'Integrate culture and identity', approach: 'Contextual treatment planning', why: 'Linking goals to his provider identity, faith, and family values makes treatment congruent and engaging', keys: ['stopped Mass', 'mentored parish teens'], mistake: 'Planning goals that ignore the client’s worldview' }),
      O('c', 'Help him see that his views on counseling are outdated so he can commit fully to treatment.', -1,
        { r: 'Dismisses his worldview', approach: 'Challenge beliefs', why: 'Labeling his views outdated imposes the counselor’s values and weakens the alliance', keys: ['cultural beliefs about help'], mistake: 'Treating cultural beliefs as barriers to correct' }),
      O('d', 'Suggest he stop relying on prayer so he can focus fully on evidence-based treatment.', -2,
        { r: 'Removes a protective factor', approach: 'Discourage faith', why: 'Faith is a protective resource; discouraging it imposes values and may increase risk', keys: ['Catholic faith'], mistake: 'Framing faith as competing with treatment' }),
    ]),
    Q('q7', 'indirect', 'session1', 'Ernesto agrees that Lourdes can be part of safety planning and that Paolo “could maybe hold the guns.” What should the counselor do?', ['R4', 'R8'], [
      O('a', 'With his consent, bring Lourdes into the safety plan and arrange for Paolo to hold the guns.', 3,
        { r: 'Engage supports in means safety', approach: 'Collaborate with support system', why: 'Involving family with consent turns his tentative agreement into a concrete off-site storage plan', keys: ['Lourdes as safety contact', 'son nearby'], mistake: 'Leaving a tentative agreement without follow-through' }),
      O('b', 'Ask Lourdes to lock all the guns in the garage cabinet and to keep the only key with her.', 0,
        { r: 'Weaker storage option', approach: 'In-home locked storage', why: 'Locked storage helps, but off-site storage with Paolo, which he has offered, provides more distance from the means', keys: ['offered Paolo'], mistake: 'Settling for in-home storage when off-site is available' }),
      O('c', 'Leave Lourdes out of planning, since involving his wife could embarrass him even further.', -1,
        { r: 'Excludes a consenting support', approach: 'Protect pride', why: 'He consented to her involvement, and she is a key safety resource', keys: ['signed on as safety contact'], mistake: 'Prioritizing embarrassment over safety' }),
      O('d', 'Ask Lourdes to watch him around the clock and report to the counselor without telling him.', -2,
        { r: 'Covert surveillance', approach: 'Secret monitoring', why: 'Covert monitoring undermines trust and autonomy and is not a safety plan', keys: ['consent given openly'], mistake: 'Replacing collaborative planning with surveillance' }),
    ]),
    Q('q8', 'indirect', 'session1', 'Ernesto takes zolpidem with beer on some nights. His PCP does not know about his drinking or suicidal thoughts. He has signed a release. What should the counselor do?', ['R8', 'R4'], [
      O('a', 'Encourage Ernesto to tell his PCP about his drinking at his next visit in three months.', 0,
        { r: 'Too slow for the risk', approach: 'Client-led disclosure', why: 'Self-disclosure is good, but a sedative plus alcohol and ideation calls for prompt coordination', keys: ['zolpidem with beer'], mistake: 'Leaving a medication safety issue to a routine visit' }),
      O('b', 'Fax his PCP the counselor’s complete session notes so that the doctor has every detail.', -1,
        { r: 'Beyond minimum necessary', approach: 'Send everything', why: 'Coordination needs the relevant risks, not every detail of counseling content', keys: ['release for PCP'], mistake: 'Equating more disclosure with better coordination' }),
      O('c', 'Inform his PCP of his ideation, his drinking, and the zolpidem with beer, and coordinate care.', 3,
        { r: 'Timely, relevant coordination', approach: 'Care coordination', why: 'The prescriber needs to know about ideation and alcohol use with a hypnotic to make safe medication decisions', keys: ['PCP unaware', 'release signed'], mistake: 'Not sharing safety-relevant information with a prescriber' }),
      O('d', 'Tell Ernesto to stop taking his zolpidem, since mixing it with beer is dangerous for him.', -2,
        { r: 'Outside scope', approach: 'Medication directive', why: 'Medication changes belong to the prescriber; the counselor’s role is to coordinate', keys: ['PCP prescribed'], mistake: 'Directing medication changes as a counselor' }),
    ]),
    // ---------------- session2 (5) ----------------
    Q('q9', 'interventions', 'session2', 'Ernesto says, “A man protects his home. I’m not handing my pistol to anyone.” How should the counselor respond?', ['R4'], [
      O('a', 'Accept a trigger lock on the pistol at home as enough, since he refuses to move it off-site.', 0,
        { r: 'Partial means safety', approach: 'Accept compromise early', why: 'A lock is better than nothing, but exploring temporary off-site storage first offers more protection', keys: ['earlier openness to Paolo'], mistake: 'Settling before exploring his values' }),
      O('b', 'Explain that gun owners have higher suicide rates and that he must remove all guns today.', -1,
        { r: 'Confrontational', approach: 'Lecture and demand', why: 'Demands provoke reactance; lethal means counseling is collaborative and respects ownership', keys: ['“a man protects his home”'], mistake: 'Using statistics and demands instead of collaboration' }),
      O('c', 'Respect his protector role and explore temporary storage with Paolo until he feels better.', 3,
        { r: 'Collaborative means counseling', approach: 'Lethal means counseling', why: 'Framing storage as temporary and as protecting his family aligns safety with his values', keys: ['protector identity', 'son available'], mistake: 'Treating firearm safety as a debate to win' }),
      O('d', 'Drop the firearm topic so that his resistance does not damage the therapeutic relationship.', -2,
        { r: 'Abandons means safety', approach: 'Avoid conflict', why: 'Dropping the topic leaves a firearm in reach of a client with method-specific thoughts', keys: ['thought about the pistol'], mistake: 'Prioritizing comfort over safety' }),
    ]),
    Q('q10', 'interventions', 'session2', 'Which approach to Ernesto’s safety plan is most consistent with best practice?', ['R3'], [
      O('a', 'Build a written plan with warning signs, coping steps, contacts, crisis lines, and means safety.', 3,
        { r: 'Collaborative written plan', approach: 'Stanley-Brown safety planning', why: 'A collaborative written plan covering each step, including means safety, is the evidence-based standard', keys: ['warning signs known', 'family supports'], mistake: 'Treating a phone number as a safety plan' }),
      O('b', 'Give him the 988 number and the office line to call if he begins to feel unsafe at home.', 0,
        { r: 'One component only', approach: 'Crisis numbers', why: 'Crisis contacts are one step of a plan but omit warning signs, coping, supports, and means safety', keys: ['isolation in garage'], mistake: 'Reducing safety planning to crisis numbers' }),
      O('c', 'Write a safety plan for him at home after the session, then review it with him at the next visit.', -1,
        { r: 'Not collaborative, delayed', approach: 'Counselor-authored plan', why: 'Plans work when built with the client in session; delay leaves him without one', keys: ['elevated risk now'], mistake: 'Authoring the plan for the client' }),
      O('d', 'Have him sign an agreement to stay safe and not drink at all until his next counseling session.', -2,
        { r: 'Contract for safety', approach: 'Safety contract', why: 'No-suicide contracts lack evidence and can create false reassurance', keys: ['method-specific thoughts'], mistake: 'Believing a signed agreement manages risk' }),
    ]),
    Q('q11', 'interventions', 'session2', 'Ernesto spends most days alone in the garage. Which intervention best targets his withdrawal?', ['R5'], [
      O('a', 'Explore his grief about leaving the shipyard before setting any new activity goals with him.', 0,
        { r: 'Valuable but delays action', approach: 'Grief work first', why: 'Role loss deserves attention, but activation can begin now alongside it', keys: ['retired five months ago'], mistake: 'Waiting for insight before activation' }),
      O('b', 'Teach him relaxation breathing as the main approach for his severe and persistent depressed mood.', -1,
        { r: 'Wrong primary framework', approach: 'Relaxation training', why: 'Relaxation targets anxiety and is not a primary treatment for severe depression', keys: ['PHQ-9 of 22'], mistake: 'Applying an anxiety tool to depression' }),
      O('c', 'Set a goal of returning to solo hunting trips, since hunting was a favorite pastime of his.', -2,
        { r: 'Adds isolation and firearm access', approach: 'Reinstate a pastime', why: 'Solo hunting returns firearms and isolation to a client at elevated suicide risk', keys: ['firearm risk', 'alone in garage'], mistake: 'Choosing activation targets without a safety lens' }),
      O('d', 'Use behavioral activation to schedule valued roles, like mentoring in the parish program.', 3,
        { r: 'Empirically supported activation', approach: 'Behavioral activation', why: 'Scheduling valued, social roles counters withdrawal and draws on his identity and faith', keys: ['mentored parish teens', 'provider identity'], mistake: 'Missing activation built on the client’s values' }),
    ]),
    Q('q12', 'legal', 'session2', 'Ernesto asks the counselor to keep “all the gun talk” out of his record because he fears the state or the VA will take his guns. What should the counselor do?', ['R7', 'R9', 'R8'], [
      O('a', 'Agree to keep the firearm details brief in the note and focus the record on his mood symptoms.', 0,
        { r: 'Understates key risk data', approach: 'Minimize in record', why: 'Brevity is fine, but the risk assessment and means plan must be clearly documented', keys: ['means plan agreed'], mistake: 'Trading record completeness for reassurance' }),
      O('b', 'Explain what his record holds, who can access it, and its limits, and then document accurately.', 3,
        { r: 'Informed and honest', approach: 'Records and confidentiality', why: 'Clarifying access and limits addresses his fear while records accurately reflect risk and the plan', keys: ['fears state action', 'fears VA access'], mistake: 'Either altering the record or ignoring his concern' }),
      O('c', 'Reassure him that counseling records are private and cannot be shared under any circumstances.', -1,
        { r: 'Inaccurate reassurance', approach: 'Overpromise privacy', why: 'Records have legal limits; overpromising misinforms him and undermines consent', keys: ['confidentiality limits exist'], mistake: 'Overstating confidentiality to calm a client' }),
      O('d', 'Agree to leave the firearms and his suicidal thoughts out of the record to keep his trust.', -2,
        { r: 'Falsified record', approach: 'Omit risk', why: 'Omitting risk and means planning falsifies the record and endangers continuity of care', keys: ['method-specific thoughts'], mistake: 'Believing trust justifies an inaccurate record' }),
    ]),
    Q('q13', 'legal', 'session2', 'Lourdes calls: Ernesto took the pistol back from Paolo, is drinking more, and skipped Mass. “Please don’t tell him I called.” What should the counselor do?', ['R7', 'R2', 'R4'], [
      O('a', 'Tell Lourdes the call can’t be kept secret, then reach Ernesto today to reassess his risk.', 3,
        { r: 'Honest and timely', approach: 'Confidentiality and safety', why: 'The counselor cannot keep secrets from the client, and retrieving the pistol requires same-day reassessment', keys: ['took pistol back', 'drinking more'], mistake: 'Agreeing to secrecy or delaying action' }),
      O('b', 'Request a police welfare check right away, before trying to reach Ernesto by phone yourself.', 0,
        { r: 'Over-restrictive first step', approach: 'Escalate first', why: 'A welfare check may be needed, but trying to reach him first allows assessment with less disruption', keys: ['no report of imminent act'], mistake: 'Skipping direct contact before escalating' }),
      O('c', 'Promise to keep the call secret, then phone Ernesto today with a general, low-key check-in.', -1,
        { r: 'Deceptive contact', approach: 'Secret check-in', why: 'A disguised check-in deceives him and may miss the pistol, the key risk to address', keys: ['pistol retrieved'], mistake: 'Trading honesty for a weaker check-in' }),
      O('d', 'Promise to keep the call secret and wait to raise the pistol at his next scheduled session.', -2,
        { r: 'Delays a safety response', approach: 'Secrecy and delay', why: 'Waiting leaves a retrieved firearm with a high-risk client and enlists the counselor in secrecy', keys: ['warning signs escalating'], mistake: 'Delaying action when means access returns' }),
    ]),
  ],
};

module.exports = { CASES: [D920, D921, D922, D923, D924] };
