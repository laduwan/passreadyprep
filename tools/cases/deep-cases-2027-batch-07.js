// deep-cases-2027-batch-07.js — NCMHCE deep cases, 2027 NCMHCE specification; hand-authored; validate with check2027.js
//
// ncmhce-D950 · plan 0 · Neurodevelopmental · easy · child — Tourette's Disorder (F95.2)
// ncmhce-D951 · plan 1 · OCD-Related · hard · older_adult — Hoarding Disorder (F42.3)
// ncmhce-D952 · plan 2 · Psychotic · medium · adult — Brief Psychotic Disorder (F23)
// ncmhce-D953 · plan 3 · Psychotic · hard · adult — Delusional Disorder, Persecutory Type (F22)
// ncmhce-D954 · plan 4 · Eating · medium · adult — Bulimia Nervosa, Moderate (F50.22)
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
const Q = (id, domain, section, question, evidenceRef, options) => ({ id, domain, section, question, evidenceRef, options });

// ============================================================================
// D950 — Tourette's Disorder (easy, child, plan 0)
// ============================================================================
const D950 = {
  id: 'ncmhce-D950',
  plan: 0,
  population: 'child',
  title: 'A sixth grader’s tics become the target of teasing in his first months of middle school',
  category: 'Neurodevelopmental',
  difficulty: 'easy',
  primaryDiagnosis: { name: "Tourette's Disorder", code: 'F95.2' },
  diagnosis: { name: "Tourette's Disorder", code: 'F95.2' },
  differentialOptions: [
    { id: 'do1', name: 'Persistent (Chronic) Motor or Vocal Tic Disorder', isCorrect: false },
    { id: 'do2', name: "Tourette's Disorder", isCorrect: true },
    { id: 'do3', name: 'Provisional Tic Disorder', isCorrect: false },
    { id: 'do4', name: 'Obsessive-Compulsive Disorder', isCorrect: false },
  ],
  narrative: {
    intake:
      'Theo Nakashima-Brooks, an 11-year-old sixth grader of Japanese American and Black heritage, is brought to a group counseling practice in Columbus, Ohio, ' +
      'by his parents, Lena (a middle school librarian) and Ken (a city bus mechanic). Theo’s eye blinking began at age 7, followed by head jerking and shoulder ' +
      'shrugging; throat clearing and sniffing started at 8, and last year a short, high-pitched “yip” appeared. The tics wax and wane, worsen when he is tired ' +
      'or excited, and fade while he plays piano. He describes “an itchy feeling” in his neck just before a head jerk and says he can hold the tics in during ' +
      'class, but they “explode” when he gets home. Three months ago a pediatric neurologist found a normal neurological exam, diagnosed Tourette’s disorder, and ' +
      'recommended behavioral therapy (CBIT) as the first-line treatment before considering medication. Since middle school began two months ago, classmates ' +
      'have mimicked his yip, one filmed him and shared the clip in a group chat, and he has twice asked to stay home. His grades remain As and Bs and he has ' +
      'close friends in robotics club. Parent report shows no attention problems, obsessions, or compulsions; Theo feels sad after teasing but denies thoughts ' +
      'of hurting himself. Both parents consent and Theo assents after the counselor explains confidentiality and its limits. The counselor is CBT-trained but ' +
      'has never completed CBIT training; the one CBIT-trained colleague in the practice has a four-month waitlist. During intake a loud yip startles the ' +
      'counselor, who visibly flinches; Theo apologizes, and afterward the counselor notices she felt irritated during a noisy burst of tics.',
    session1:
      'The counselor has completed a two-day CBIT workshop and arranged monthly case consultation with her trained colleague. Theo’s baseline Yale Global Tic ' +
      'Severity Scale (YGTSS) total tic score is 24. He ranks his priorities: the head jerk first, because it makes his neck sore, then the yip, because it is ' +
      'what classmates copy. His language arts teacher has told him in front of the class to “stop making noises.” His parents sign a release of information ' +
      'for the school counselor, Ms. Ortiz, and ask how the school can help.',
    session2:
      'Theo is practicing a competing response for his head jerk and wants to start on the yip. He says, “I’m a freak. Everyone is going to see it no matter ' +
      'what I do.” Lena reports that she and Ken have been saying “stop it” at dinner whenever he tics. Because of Ken’s shift schedule, the family asks to do ' +
      'the remaining weekly CBIT sessions by video from home. Lena also asks the counselor to email Theo’s full chart to the school “so they understand everything.”',
  },
  diagnosticRationale:
    'Theo has had multiple motor tics (blinking, head jerking, shoulder shrugging) and at least one vocal tic (throat clearing, sniffing, yip) for about four ' +
    'years, with onset at age 7, well before age 18. Tics wax and wane but have persisted more than one year since first onset, and a normal neurological ' +
    'examination supports that they are not due to a substance or another medical condition. The combination of multiple motor and vocal tics distinguishes ' +
    'Tourette’s disorder from persistent motor or vocal tic disorder (one type only) and from provisional tic disorder (under one year). The premonitory urge ' +
    'and brief suppressibility are typical of tics, and no obsessions or compulsions are reported.',
  references: [
    { id: 'R1', source: 'DSM-5-TR', detail: 'Tic disorders: Tourette’s disorder criteria A–D (multiple motor and one or more vocal tics, >1 year since onset, onset before 18, not attributable to a substance or medical condition)' },
    { id: 'R2', source: 'Corey (Theory & Practice)', detail: 'Behavior therapy: awareness training, competing-response (habit reversal) training, and reinforcement — the basis of CBIT; SME to confirm a tic-specific guideline' },
    { id: 'R3', source: 'Hays (Assessment)', detail: 'Selecting standardized measures for baseline and progress (e.g., YGTSS) and screening for co-occurring conditions in children' },
    { id: 'R4', source: 'ACA Code of Ethics', detail: 'A.2. informed consent and assent of minors; B.5. confidentiality with minor clients; C.2.a.–C.2.b. boundaries of competence and new specialty areas' },
    { id: 'R5', source: 'HIPAA', detail: 'Privacy Rule: authorizations for disclosure and the minimum necessary standard' },
    { id: 'R6', source: 'NBCC Code of Ethics', detail: 'Telehealth practice: informed consent for technology-assisted services, verifying client location, and emergency planning' },
    { id: 'R7', source: 'Wiger (Documentation)', detail: 'Writing measurable (SMART) goals and objectives tied to baseline assessment' },
  ],
  questions: [
    // ---------------- intake (5) ----------------
    Q('q1', 'profdev', 'intake', 'The counselor has not been trained in CBIT, and the practice’s trained colleague has a four-month waitlist. What should she do?', ['R4'], [
      O('a', 'Place Theo on the colleague’s waitlist and offer no sessions until CBIT can be delivered by a trained clinician.', 0,
        { r: 'Safe but leaves a gap in care', approach: 'Wait-for-specialist framing', why: 'Deferring to a trained colleague respects competence, but a four-month wait leaves a teased child without support when training plus consultation could close the gap sooner', keys: ['four-month waitlist', 'teasing is active now'], mistake: 'Treating referral as the only competent option when training and consultation are available' }),
      O('b', 'Complete CBIT-specific training and arrange consultation with the trained colleague before delivering the protocol.', 3,
        { r: 'Train and consult before practicing', approach: 'Build competence for a new technique', why: 'Counselors practice in a new specialty area only after appropriate education, training, and supervised or consulted experience; this lets Theo start sooner without practicing beyond competence', keys: ['never completed CBIT training', 'trained colleague available for consultation'], mistake: 'Either ignoring the training gap or assuming referral is the only option' }),
      O('c', 'Begin CBIT now using an online summary, since habit reversal is a basic behavioral skill any CBT clinician knows.', -1,
        { r: 'General CBT is not CBIT competence', approach: 'Overgeneralized-competence framing', why: 'CBIT has specific components (function-based assessment, awareness training, competing responses) that require training; a summary does not establish competence', keys: ['CBT-trained only'], mistake: 'Assuming a related skill set covers a specialized protocol' }),
      O('d', 'Tell the family counseling cannot help with tics and send them back to the neurologist to discuss medication instead.', -2,
        { r: 'Misinforms and abandons the family', approach: 'Medication-only framing', why: 'Behavioral therapy is the neurologist’s first-line recommendation; turning the family away misstates the evidence and leaves Theo without care', keys: ['neurologist recommended CBIT first-line'], mistake: 'Believing tics are only a medical problem and abandoning the referral' }),
    ]),
    Q('q2', 'profdev', 'intake', 'After intake the counselor notices she felt irritated during Theo’s noisy burst of tics. What is the best response?', ['R4'], [
      O('a', 'Ask Theo to try holding in his louder tics during sessions so that the counselor can focus on what he is saying.', -2,
        { r: 'Shames the client to soothe the counselor', approach: 'Suppress-for-comfort framing', why: 'Asking a child to suppress tics for the counselor’s comfort is invalidating, adds rebound strain, and repeats the teacher’s harmful message', keys: ['tics “explode” after suppression', 'teacher told him to stop'], mistake: 'Managing the counselor’s reaction by changing the client’s behavior' }),
      O('b', 'Transfer Theo to another counselor because any negative feeling toward a client means she is not suited to the case.', -1,
        { r: 'Overreacts to a normal reaction', approach: 'Automatic-transfer framing', why: 'A passing reaction to loud tics is common and workable through reflection and supervision; transfer is for reactions that cannot be managed', keys: ['single episode of irritation'], mistake: 'Treating any countertransference as disqualifying' }),
      O('c', 'Ignore the reaction, since the startle was involuntary and has no effect on how she conducts the counseling sessions.', 0,
        { r: 'Unexamined reactions can leak', approach: 'Dismiss-the-reaction framing', why: 'The flinch was involuntary, but unexamined irritation can shape tone and pacing; Theo already noticed and apologized', keys: ['Theo apologized after the flinch'], mistake: 'Assuming a reaction that is not acted on deliberately cannot affect the client' }),
      O('d', 'Reflect on the reaction, discuss it in supervision, and practice staying relaxed and neutral when tics occur in session.', 3,
        { r: 'Self-reflection and supervision', approach: 'Practice self-awareness and self-regulation', why: 'Noticing a reaction, exploring it in supervision, and practicing a calm neutral response keeps it from affecting the relationship and models acceptance for Theo', keys: ['visible flinch', 'irritation during tic burst'], mistake: 'Either ignoring the reaction or overcorrecting by ending the relationship' }),
    ]),
    Q('q3', 'assess', 'intake', 'Which finding most clearly supports Tourette’s disorder rather than another tic disorder?', ['R1'], [
      O('a', 'Multiple motor tics and at least one vocal tic have been present for about four years, starting at age 7.', 3,
        { r: 'Motor plus vocal tics for over a year', approach: 'Apply the discriminating criterion', why: 'Tourette’s requires both multiple motor and one or more vocal tics, present over one year since onset, beginning before 18; persistent tic disorder has only one type', keys: ['blinking, head jerk, shrug', 'throat clearing, sniffing, yip', 'onset at 7'], mistake: 'Diagnosing from tic severity or a single tic type instead of the motor-plus-vocal pattern' }),
      O('b', 'His tics are loud and noticeable enough that classmates mimic them and one student filmed him in the school hallway.', -1,
        { r: 'Social impact is not a criterion', approach: 'Severity-by-visibility framing', why: 'Tourette’s criteria do not depend on how noticeable tics are or how peers react; teasing reflects impact, not diagnosis', keys: ['classmates mimic the yip'], mistake: 'Confusing social consequences with diagnostic criteria' }),
      O('c', 'He feels an itchy urge in his neck before tics and can hold them in briefly during class time.', 0,
        { r: 'Typical of tics, not specific', approach: 'Premonitory-urge framing', why: 'Premonitory urges and brief suppressibility are typical of tics in general, so they do not separate Tourette’s from other tic disorders', keys: ['“itchy feeling” before head jerk'], mistake: 'Using a feature common to all tic disorders as the discriminator' }),
      O('d', 'His yip resembles coprolalia, which is required before a diagnosis of Tourette’s disorder can be made.', -2,
        { r: 'Coprolalia is not required', approach: 'Coprolalia-myth framing', why: 'Coprolalia occurs in a minority of people with Tourette’s and is not a criterion; a yip is a simple vocal tic, and this belief causes missed diagnoses', keys: ['simple vocal tic'], mistake: 'Believing Tourette’s requires involuntary swearing' }),
    ]),
    Q('q4', 'assess', 'intake', 'How should the counselor handle consent for treatment with Theo and his parents?', ['R4'], [
      O('a', 'Have both parents sign consent and begin, since an 11-year-old cannot meaningfully take part in decisions about care.', -1,
        { r: 'Skips the child’s assent', approach: 'Parent-only framing', why: 'Parents give legal consent, but counselors seek a minor’s assent in developmentally appropriate language and include the child in decisions', keys: ['11-year-old client'], mistake: 'Treating a child as unable to participate in consent' }),
      O('b', 'Obtain parental consent and Theo’s assent in plain language, explaining confidentiality and its limits to all three.', 3,
        { r: 'Consent plus developmentally fitting assent', approach: 'Informed consent with a minor', why: 'Parents provide legal consent; Theo gives assent after an age-appropriate explanation of treatment and how confidentiality works, including its limits', keys: ['parents consent', 'Theo assents', 'limits explained'], mistake: 'Omitting either the child’s assent or the confidentiality discussion' }),
      O('c', 'Ask Theo alone to agree to treatment, then share a summary of the plan with his parents at a later session.', -2,
        { r: 'Bypasses legal consent', approach: 'Child-only framing', why: 'An 11-year-old cannot give legal consent for outpatient treatment in most states; proceeding without parental consent is a legal and ethical violation', keys: ['minor client'], mistake: 'Treating a child’s assent as legal consent' }),
      O('d', 'Obtain written consent from the parents and promise Theo that nothing he says will be shared with them.', 0,
        { r: 'Overpromises confidentiality', approach: 'Absolute-privacy framing', why: 'Consent is right, but promising total confidentiality to a minor is inaccurate; safety and parental rights create limits', keys: ['confidentiality limits'], mistake: 'Promising a child more confidentiality than the counselor can keep' }),
    ]),
    Q('q5', 'assess', 'intake', 'Which assessment step is most useful before treatment planning begins?', ['R3'], [
      O('a', 'Have Theo keep a diary of every tic for a full month before any measure is used, so that the tic counts are fully accurate.', -1,
        { r: 'Delays care; diary is not a baseline measure', approach: 'Delay-for-data framing', why: 'Self-monitoring has a role in CBIT, but a month of diaries delays treatment and does not replace a standardized severity measure', keys: ['teasing is active now'], mistake: 'Postponing treatment to gather informal data' }),
      O('b', 'Order an EEG and brain imaging to confirm the neurologist’s diagnosis before starting any counseling work.', -2,
        { r: 'Outside scope and not indicated', approach: 'Re-diagnose framing', why: 'Counselors do not order medical tests, the neurologist already examined him, and tic disorders are diagnosed clinically', keys: ['normal neurological exam'], mistake: 'Duplicating a completed medical workup and stepping outside scope' }),
      O('c', 'Administer a standardized tic severity scale for a baseline and screen for commonly co-occurring ADHD, OCD, and anxiety.', 3,
        { r: 'Baseline measure plus targeted screening', approach: 'Standardized baseline and screening', why: 'A measure like the YGTSS gives a baseline to track CBIT progress, and ADHD, OCD, and anxiety co-occur often enough to warrant brief standardized screening', keys: ['parent report only', 'CBIT planned'], mistake: 'Relying on informal report without a baseline or screening' }),
      O('d', 'Rely on the parents’ report that he has no attention problems or compulsions and focus the plan on the teasing.', 0,
        { r: 'Informal report is a thin baseline', approach: 'Informal-report framing', why: 'Parent report is useful, but it is not a standardized baseline and can miss subtle co-occurring symptoms', keys: ['no attention problems per parents'], mistake: 'Skipping measurement because informal report sounds reassuring' }),
    ]),

    // ---------------- session1 (3) ----------------
    Q('q6', 'planning', 'session1', 'Which goal is written as the best SMART objective for Theo’s first phase of treatment?', ['R7'], [
      O('a', 'Theo will stop having tics at school by the end of the semester so classmates have no reason to tease him.', -2,
        { r: 'Unattainable and blames the child', approach: 'Elimination framing', why: 'Tics are not expected to disappear and the goal makes Theo responsible for peers’ teasing; it sets him up to fail', keys: ['tics wax and wane'], mistake: 'Setting tic elimination as a goal and linking it to bullying' }),
      O('b', 'Within 8 weeks, Theo will use his competing response for the head jerk and lower his YGTSS tic score from 24 to 18.', 3,
        { r: 'Specific, measurable, time-bound', approach: 'SMART goal tied to baseline', why: 'It names the target tic he ranked first, a concrete skill, a measurable outcome from his baseline score, and a time frame', keys: ['YGTSS baseline 24', 'head jerk ranked first'], mistake: 'Writing goals without a baseline, a measure, or a time frame' }),
      O('c', 'Theo will feel more confident about his tics and better about going to middle school each day as counseling continues.', -1,
        { r: 'Vague and unmeasurable', approach: 'Global-feeling framing', why: 'Confidence is a worthy aim, but this goal has no behavior, measure, or time frame', keys: ['SMART criteria'], mistake: 'Writing a hope instead of a measurable objective' }),
      O('d', 'Within 8 weeks, Theo will learn competing responses for all of his tics and use each of them at school daily.', 0,
        { r: 'Overreaches the first phase', approach: 'Everything-at-once framing', why: 'It is time-bound but targets every tic at once rather than the one he prioritized, and lacks an outcome measure', keys: ['Theo ranked his tics'], mistake: 'Ignoring the client’s prioritization and CBIT’s one-tic-at-a-time sequencing' }),
    ]),
    Q('q7', 'planning', 'session1', 'Which initial treatment plan best fits Theo’s diagnosis and situation?', ['R2'], [
      O('a', 'Play therapy to explore underlying feelings that are expressed through tics, with parent sessions every other month.', -1,
        { r: 'Wrong model for tics', approach: 'Symbolic-expression framing', why: 'Tics are neurodevelopmental, not symbolic expressions of feelings; insight-oriented play therapy is not an evidence-based tic treatment', keys: ['neurologist recommended CBIT'], mistake: 'Treating tics as an emotional symptom to be interpreted' }),
      O('b', 'Weekly CBIT for the tics he ranked, psychoeducation for the family, and coordination with his school on the teasing.', 3,
        { r: 'CBIT plus family and school', approach: 'Match to diagnosis and context', why: 'CBIT is the first-line behavioral treatment; family psychoeducation and school coordination address the teasing and classroom responses that add to his distress', keys: ['priorities ranked', 'teacher told him to stop', 'classmates mimic him'], mistake: 'Treating the tics while ignoring the school environment, or the reverse' }),
      O('c', 'Social skills training so Theo can respond to teasing, holding CBIT until the bullying at school has stopped.', 0,
        { r: 'Helpful but delays first-line care', approach: 'Teasing-first framing', why: 'Coping with teasing matters, but holding CBIT delays the treatment he and his neurologist want and does not require the bullying to end first', keys: ['CBIT recommended first-line'], mistake: 'Sequencing supportive work ahead of the indicated treatment' }),
      O('d', 'Teach Theo to suppress his tics for longer periods at school, then let them out in a private space each afternoon.', -2,
        { r: 'Suppression is not treatment', approach: 'Suppression-training framing', why: 'Sustained suppression is effortful and leads to rebound at home, as Theo already reports; it is not CBIT and can worsen distress', keys: ['tics “explode” at home'], mistake: 'Confusing tic suppression with competing-response training' }),
    ]),
    Q('q8', 'indirect', 'session1', 'With the release signed, how should the counselor work with the school counselor, Ms. Ortiz?', ['R2', 'R5'], [
      O('a', 'Share tic education, suggest calm classroom responses and test-room options, and ask how the school will stop the teasing.', 3,
        { r: 'Targeted collaboration within the release', approach: 'Collaborate with support systems', why: 'Educating staff about tics, recommending accommodations, and asking the school to address the teasing aligns school responses with the treatment goals', keys: ['teacher said “stop making noises”', 'video shared in group chat'], mistake: 'Leaving the school uninformed about how to respond to tics' }),
      O('b', 'Ask Ms. Ortiz to have Theo explain Tourette’s to his whole class right away so that classmates understand and stop teasing him.', 0,
        { r: 'Peer education should be his choice', approach: 'Class-presentation framing', why: 'Peer education can help, but whether and how Theo shares is his decision to make with his family, not something to arrange for him', keys: ['Theo’s assent and preferences'], mistake: 'Planning disclosure for a child without asking him' }),
      O('c', 'Ask the school to excuse Theo from classes when his tics increase so classmates will not have a chance to see them.', -1,
        { r: 'Removal reinforces avoidance', approach: 'Exclusion framing', why: 'Pulling him from class when tics rise can reinforce tics and avoidance and costs learning time', keys: ['asked to stay home twice'], mistake: 'Using removal from class as an accommodation for tics' }),
      O('d', 'Wait for the school to contact the practice, since direct outreach could make Theo feel singled out at school.', -2,
        { r: 'Passive approach leaves bullying unaddressed', approach: 'Wait-and-see framing', why: 'The parents asked for help and signed a release; waiting leaves the teacher’s response and the peer video unaddressed while Theo avoids school', keys: ['ROI signed', 'parents asked for help'], mistake: 'Treating outreach as optional when the release exists to enable it' }),
    ]),

    // ---------------- session2 (5) ----------------
    Q('q9', 'interventions', 'session2', 'Lena says she and Ken have been saying “stop it” when Theo tics at dinner. What psychoeducation is most appropriate?', ['R2'], [
      O('a', 'Tell them to remind him more gently, since cues from parents help a child notice tics he would otherwise miss.', -1,
        { r: 'Reminders still focus attention on tics', approach: 'Gentle-reminder framing', why: 'Even gentle reminders draw attention to tics and can raise tension; awareness training is done in structured practice, not as dinner-table correction', keys: ['saying “stop it” at dinner'], mistake: 'Believing parental cueing is a form of awareness training' }),
      O('b', 'Advise them to have Theo eat alone when his tics are frequent, so that meals stay calm for everyone in the family.', -2,
        { r: 'Isolation and shame', approach: 'Separation framing', why: 'Excluding Theo from family meals shames him and teaches that tics make him unwelcome, worsening distress', keys: ['sad after teasing'], mistake: 'Managing tics by isolating the child' }),
      O('c', 'Explain that tics are involuntary, that correcting them adds stress, and that praising his practice works better.', 3,
        { r: 'Reduce correction, reinforce practice', approach: 'Family psychoeducation', why: 'Tics are not willful; criticism raises stress that can worsen them, while ignoring tics and praising competing-response practice supports CBIT', keys: ['“stop it” at dinner', 'practicing a competing response'], mistake: 'Treating tics as misbehavior to be corrected' }),
      O('d', 'Explain that tics usually fade by adulthood, so the family can simply wait them out without changing anything.', 0,
        { r: 'True trend, wrong message', approach: 'Wait-it-out framing', why: 'Many youth improve by adulthood, but this skips the correction that is adding stress now and the role parents play in supporting practice', keys: ['parents correcting tics'], mistake: 'Using prognosis to avoid addressing current family responses' }),
    ]),
    Q('q10', 'interventions', 'session2', 'Theo wants to begin work on his vocal yip. Which CBIT step is most appropriate?', ['R2'], [
      O('a', 'Teach a competing response such as slow rhythmic breathing through the nose that he starts when he feels the urge.', 3,
        { r: 'Breathing-based competing response', approach: 'Competing-response training', why: 'For vocal tics, CBIT commonly uses slow diaphragmatic breathing that is incompatible with the tic and started at the premonitory urge', keys: ['wants to start on the yip', 'feels urges before tics'], mistake: 'Skipping the competing response or using one incompatible with daily life' }),
      O('b', 'Have him repeat the yip on purpose many times in a row until the sound loses its pull and fades on its own.', -1,
        { r: 'Massed practice is not CBIT', approach: 'Massed-negative-practice framing', why: 'Repeating a tic deliberately is an older technique with weak support and is not part of CBIT', keys: ['CBIT protocol'], mistake: 'Confusing massed negative practice with habit reversal' }),
      O('c', 'Have him snap a rubber band on his wrist each time he yips so that the tic becomes linked with discomfort.', -2,
        { r: 'Aversive and harmful', approach: 'Punishment framing', why: 'Self-punishment for an involuntary tic is aversive, shaming, and not evidence-based', keys: ['child client', 'involuntary tics'], mistake: 'Using punishment to suppress involuntary behavior' }),
      O('d', 'Wait to address the yip until the head-jerk response is fully automatic, even though Theo is eager to begin.', 0,
        { r: 'Overly rigid sequencing', approach: 'One-tic-only framing', why: 'CBIT works one tic at a time, but he is already practicing the head-jerk response, and his readiness supports adding the next target', keys: ['practicing head-jerk response'], mistake: 'Holding a motivated child back for a perfect first skill' }),
    ]),
    Q('q11', 'interventions', 'session2', 'Theo says, “I’m a freak. Everyone is going to see it no matter what I do.” What is the most therapeutic response?', ['R2'], [
      O('a', '“You’re not a freak at all. Lots of famous people have Tourette’s and are very successful, so try to think of them.”', 0,
        { r: 'Reassures before reflecting', approach: 'Reassurance framing', why: 'Positive role models can help later, but jumping to reassurance skips his feelings and may feel dismissive', keys: ['“I’m a freak”'], mistake: 'Offering reassurance before reflecting the feeling' }),
      O('b', '“It sounds really lonely to feel like everyone is watching. What has been hardest about how kids have treated you?”', 3,
        { r: 'Reflect, then explore', approach: 'Core counseling skills', why: 'Reflecting his feeling and inviting him to describe the hardest part validates him and opens the teasing for problem-solving', keys: ['classmates mimic him', 'asked to stay home'], mistake: 'Moving to fix or reassure before the child feels heard' }),
      O('c', '“If you keep practicing hard enough, the tics will go away completely and nobody will notice anything anymore.”', -2,
        { r: 'False promise', approach: 'Cure-promise framing', why: 'CBIT reduces tics but does not promise elimination; a false promise sets up failure and self-blame when tics persist', keys: ['tics wax and wane'], mistake: 'Promising a cure to motivate a child' }),
      O('d', '“Let’s not use the word freak. Can we just get back to practicing the breathing response for your yip now?”', -1,
        { r: 'Shuts down the feeling', approach: 'Redirect framing', why: 'Correcting his word and redirecting to skills misses an important disclosure of shame and peer pain', keys: ['shame disclosure'], mistake: 'Prioritizing the protocol over the child’s emotional disclosure' }),
    ]),
    Q('q12', 'legal', 'session2', 'Lena asks the counselor to email Theo’s full chart to the school. What is the most appropriate response?', ['R5'], [
      O('a', 'Email the full chart as she asks, since a parent of a minor child can authorize the release of any of his clinical records.', -1,
        { r: 'Ignores minimum necessary', approach: 'Release-everything framing', why: 'A parent can authorize release, but the counselor should guide disclosure to what the school needs and protect sensitive session content', keys: ['school needs tic information, not notes'], mistake: 'Treating a parent request as a reason to release more than is needed' }),
      O('b', 'Refuse to share anything else with the school, since session records are confidential from educators.', 0,
        { r: 'Overly restrictive', approach: 'Refuse-all framing', why: 'A signed release allows sharing relevant information; refusing everything blocks useful coordination', keys: ['ROI signed in session 1'], mistake: 'Treating confidentiality as a bar to any authorized disclosure' }),
      O('c', 'Explain the minimum necessary approach and send a summary of tic information and recommendations under the release.', 3,
        { r: 'Share what the school needs', approach: 'Minimum necessary disclosure', why: 'Disclosures should be limited to what the purpose requires; a summary of the diagnosis, tic education, and recommendations serves the school without exposing session content', keys: ['release names Ms. Ortiz', 'request for full chart'], mistake: 'Releasing the full record when a summary meets the need' }),
      O('d', 'Email the full chart to Ms. Ortiz and ask her to forward it to every teacher who has Theo in class this year.', -2,
        { r: 'Excessive and uncontrolled disclosure', approach: 'Broad-distribution framing', why: 'Sending the whole chart and authorizing redistribution exceeds the release and spreads protected information beyond any need', keys: ['release limited to school counselor'], mistake: 'Disclosing beyond the scope of the authorization' }),
    ]),
    Q('q13', 'legal', 'session2', 'The family asks to finish CBIT by video from home. What should the counselor do before the first video session?', ['R6'], [
      O('a', 'Send a video link and start next week, since consent for counseling was already obtained at the first intake.', -1,
        { r: 'Telehealth needs its own consent', approach: 'Reuse-consent framing', why: 'In-person consent does not cover telehealth risks, privacy, technology failure, or emergency procedures', keys: ['switch to video'], mistake: 'Assuming general consent covers a new modality' }),
      O('b', 'Obtain telehealth consent, confirm a secure platform, and plan to verify Theo’s location and a parent nearby each time.', 3,
        { r: 'Telehealth consent, security, location', approach: 'Telehealth best practice', why: 'Telehealth requires informed consent to the modality, a compliant platform, and per-session confirmation of the client’s location and a reachable adult for emergencies', keys: ['minor at home', 'video sessions'], mistake: 'Skipping modality-specific consent or emergency planning' }),
      O('c', 'Use whatever free video app the family already has, since it is easiest for an 11-year-old to get comfortable with.', -2,
        { r: 'Unsecured platform', approach: 'Convenience framing', why: 'Consumer apps may not meet privacy and security requirements for protected health information', keys: ['PHI over video'], mistake: 'Choosing a platform for convenience over compliance' }),
      O('d', 'Decline video sessions, because CBIT has to be delivered in the office for the competing responses to be taught well.', 0,
        { r: 'Unnecessarily restrictive', approach: 'Office-only framing', why: 'CBIT has been delivered effectively by video; declining creates a barrier to care without a clinical reason', keys: ['shift schedule barrier'], mistake: 'Assuming behavioral protocols cannot be delivered by telehealth' }),
    ]),
  ],
};

// ============================================================================
// D951 — Hoarding Disorder (hard, older adult, plan 1)
// ============================================================================
const D951 = {
  id: 'ncmhce-D951',
  plan: 1,
  population: 'older_adult',
  title: 'A housing inspection puts a retired chemistry teacher’s home, and her safety, at risk',
  category: 'OCD-Related',
  difficulty: 'hard',
  primaryDiagnosis: { name: 'Hoarding Disorder', code: 'F42.3' },
  diagnosis: { name: 'Hoarding Disorder', code: 'F42.3' },
  differentialOptions: [
    { id: 'do1', name: 'Major Neurocognitive Disorder', isCorrect: false },
    { id: 'do2', name: 'Obsessive-Compulsive Disorder', isCorrect: false },
    { id: 'do3', name: 'Hoarding Disorder', isCorrect: true },
    { id: 'do4', name: 'Major Depressive Disorder', isCorrect: false },
  ],
  narrative: {
    intake:
      'Rosalind Achterberg, 78, a widowed Dutch American retired high school chemistry teacher, comes to a community counseling agency in Grand Rapids, Michigan, ' +
      'after a city housing inspection of her rented duplex. The inspector’s notice cites blocked exits and “excessive combustible storage” and gives her 30 days ' +
      'to comply or face lease termination. Rosalind says she has “saved things since my forties,” especially newspapers, lab journals, and her late husband ' +
      'Pieter’s woodworking magazines; it worsened after his death in 2019. She feels intense distress at the idea of discarding anything “that might be useful,” ' +
      'and the kitchen and bedroom can no longer be used as intended. She says the problem is “exaggerated by the city.” A cognitive screen administered by her ' +
      'primary care provider last month was in the normal range, and she manages her own finances. Near the end of the intake, while insisting she is “perfectly ' +
      'fine,” she mentions she “had a little tumble” two weeks ago and “it took a while to get up, maybe three hours, but I managed.” She adds that the furnace ' +
      'has been broken since October because she will not let a repair person in, so she runs a space heater “tucked between the paper stacks” in the living ' +
      'room, and that she has been “eating out of cans” since the refrigerator stopped working in the summer. She has type 2 diabetes and says she “sometimes ' +
      'skips” her metformin when she cannot find it. Her only daughter lives in Arizona and calls weekly.',
    session1:
      'With Rosalind’s consent, the counselor makes a home visit and rates the living room and kitchen at 7 of 9 on the Clutter Image Rating; the path to the back ' +
      'door is blocked and the smoke detector is buried under boxes. Rosalind signs a release allowing the counselor to speak with the housing inspector and her ' +
      'landlord. She says she will “do whatever it takes to keep the house” but wants to “sort everything myself, slowly.” The landlord tells the counselor he will ' +
      'consider an extension only if he sees “real progress.” Rosalind asks the counselor to take a few boxes of Pieter’s magazines home “for safekeeping until the ' +
      'inspector is gone.” During the visit the counselor notices a strong odor of spoiled food and feels a wave of disgust and an urge to start clearing the ' +
      'kitchen herself.',
    session2:
      'At the next visit the space heater is still running beside the stacks, the furnace remains unrepaired, and Rosalind has fallen again, this time bruising ' +
      'her hip; she declines medical care. She says, “Those aren’t junk. Pieter read every one of those magazines. But I can’t lose this place.” Later, a letter ' +
      'from the landlord’s attorney arrives during the session; she becomes tearful and agitated and says, “If they take my things, they might as well take me ' +
      'with them.” The counselor took photos of each room for the Clutter Image Rating on a personal cell phone.',
  },
  diagnosticRationale:
    'Rosalind has persistent difficulty discarding possessions regardless of their value, driven by a perceived need to save them and distress at discarding, ' +
    'resulting in accumulation that congests active living areas and compromises their intended use, with significant impairment and safety risk. The pattern ' +
    'began in midlife and worsened after bereavement, a normal cognitive screen and intact financial management argue against a neurocognitive disorder as the ' +
    'cause, and the saving is ego-syntonic and object-focused rather than driven by obsessions, which distinguishes it from OCD. Her minimization and ' +
    'attribution of the problem to the city suggest a poor-insight specifier. Self-neglect indicators (falls, no heat, no refrigeration, missed medication) and a ' +
    'fire hazard are safety issues to address alongside the diagnosis.',
  references: [
    { id: 'R1', source: 'DSM-5-TR', detail: 'Hoarding disorder criteria A–F; insight specifiers; differential with neurocognitive disorders and OCD' },
    { id: 'R2', source: 'Hays (Assessment)', detail: 'Selecting standardized, in-context measures (e.g., Clutter Image Rating, Saving Inventory-Revised) and in-home assessment' },
    { id: 'R3', source: 'Miller & Rollnick (MI)', detail: 'Reflective listening and double-sided reflections for ambivalence; evoking change talk' },
    { id: 'R4', source: 'Corey (Theory & Practice)', detail: 'Cognitive behavioral therapy: skills training, graded exposure, and behavioral experiments (basis of CBT for hoarding); harm-reduction stance' },
    { id: 'R5', source: 'State law', detail: 'Vulnerable/elder adult protective services statutes, including whether counselors are mandated reporters and whether self-neglect is reportable' },
    { id: 'R6', source: 'ACA Code of Ethics', detail: 'A.6. boundaries and professional relationships; B.6. records security; C.2. competence; A.1.a. client welfare' },
    { id: 'R7', source: 'HIPAA', detail: 'Security Rule safeguards for electronic PHI, including photos stored on mobile devices; minimum necessary disclosures' },
    { id: 'R8', source: 'C-SSRS', detail: 'Structured suicide-risk inquiry when a client voices hopelessness or passive death wishes' },
    { id: 'R9', source: 'Stanley-Brown SPI', detail: 'Collaborative safety planning, including coping, contacts, and means safety' },
  ],
  questions: [
    // ---------------- intake (5) ----------------
    Q('q1', 'assess', 'intake', 'Which assessment approach will best establish the severity of Rosalind’s hoarding?', ['R2'], [
      O('a', 'Rely on the inspector’s notice, since it already documents the blocked exits and the amount of combustible storage.', 0,
        { r: 'Useful collateral, not an assessment', approach: 'Collateral-only framing', why: 'The notice is valuable collateral, but it is not a standardized measure and does not capture saving cognitions, distress, or room-by-room function', keys: ['inspection notice'], mistake: 'Substituting a third-party report for clinical assessment' }),
      O('b', 'Use a standardized hoarding measure and, with her consent, a home visit with picture-based clutter ratings by room.', 3,
        { r: 'Standardized measure plus in-home rating', approach: 'Multi-method, in-context assessment', why: 'Self-report measures capture saving and distress, while a home visit with picture-based ratings counters minimization and shows function and safety', keys: ['“exaggerated by the city”', 'rooms no longer usable'], mistake: 'Relying on the client’s office self-report alone when insight is poor' }),
      O('c', 'Ask Rosalind to bring photos of her home to the office, so that she stays comfortable and avoids feeling judged.', -1,
        { r: 'Client-selected photos understate severity', approach: 'Office-only framing', why: 'With poor insight, client-chosen photos can minimize clutter and hazards; an in-home assessment gives a truer picture', keys: ['minimizes the problem'], mistake: 'Letting a client with poor insight control the assessment data' }),
      O('d', 'Ask her daughter in Arizona to estimate the clutter, since family members tend to report more accurately than clients.', -2,
        { r: 'Distant, unconsented collateral', approach: 'Family-report framing', why: 'Contacting family requires consent, and a daughter who has not seen the home recently cannot rate current severity', keys: ['daughter lives in Arizona'], mistake: 'Seeking collateral without consent from someone without direct knowledge' }),
    ]),
    Q('q2', 'assess', 'intake', 'Which finding best supports hoarding disorder over a neurocognitive disorder?', ['R1'], [
      O('a', 'She is 78 years old and widowed, and saving behavior is common among older adults living alone after a loss.', -1,
        { r: 'Age and loss do not discriminate', approach: 'Demographic framing', why: 'Age and bereavement are context, not evidence for one diagnosis over the other; both conditions occur in older adults', keys: ['age 78', 'widowed 2019'], mistake: 'Using demographics in place of discriminating findings' }),
      O('b', 'She resists discarding because she feels distress, which is a symptom found only in hoarding disorder.', 0,
        { r: 'Distress is necessary, not unique', approach: 'Single-symptom framing', why: 'Distress at discarding is a hoarding criterion, but people with neurocognitive disorders can also resist losing possessions', keys: ['distress at discarding'], mistake: 'Treating a required criterion as a unique discriminator' }),
      O('c', 'Her saving began in her forties, worsened after a loss, and her cognitive screen and finances are intact.', 3,
        { r: 'Lifelong course, intact cognition', approach: 'Apply the exclusion criterion', why: 'Hoarding is not better explained by another condition when the pattern began in midlife, follows the typical progressive course, and cognition and independent function are intact', keys: ['saved since forties', 'normal cognitive screen', 'manages finances'], mistake: 'Attributing late-life clutter to dementia without checking course and cognition' }),
      O('d', 'Her home is cluttered enough to fail inspection, which shows that the problem is psychiatric, not cognitive.', -2,
        { r: 'Severity says nothing about cause', approach: 'Severity-as-etiology framing', why: 'The amount of clutter cannot distinguish hoarding from dementia-related accumulation; this reasoning could miss a neurocognitive disorder', keys: ['failed inspection'], mistake: 'Inferring cause from severity' }),
    ]),
    Q('q3', 'assess', 'intake', 'Rosalind says she is “perfectly fine.” Which of her remarks should the counselor assess most urgently?', ['R1', 'R5'], [
      O('a', 'Her belief that the city exaggerated the problem, which suggests poor insight that must be assessed first.', 0,
        { r: 'Real, but not the urgent risk', approach: 'Insight-first framing', why: 'Insight shapes treatment, but it is less urgent than a fall with a long lie, an unsafe heater, and missed diabetes medication', keys: ['“exaggerated by the city”'], mistake: 'Prioritizing a treatment-planning variable over physical safety' }),
      O('b', 'Her grief about Pieter, since bereavement is the main factor that drove her saving to worsen so sharply after 2019.', -1,
        { r: 'Important context, not the emergency', approach: 'Grief-first framing', why: 'Grief matters to the formulation, but the buried safety disclosures need attention first', keys: ['worsened after husband’s death'], mistake: 'Following the emotional theme past embedded safety risks' }),
      O('c', 'Her fall with three hours on the floor, the heater among papers, no refrigerator, and skipped diabetes medication.', 3,
        { r: 'Buried self-neglect and fire risk', approach: 'Assess safety disclosures inside reassurance', why: 'A long lie after a fall, an ignition source among combustibles, no food storage, and missed medication point to self-neglect and fire risk that require prompt assessment', keys: ['“took a while to get up, maybe three hours”', 'space heater between stacks', 'skips metformin'], mistake: 'Accepting “perfectly fine” and missing safety facts mentioned in passing' }),
      O('d', 'Her worry about the 30-day deadline, which is the most pressing issue she has raised during the intake.', -2,
        { r: 'Misses physical danger', approach: 'Client-agenda framing', why: 'The deadline is pressing, but focusing only on it overlooks risks that could cause injury or death before 30 days pass', keys: ['30-day notice'], mistake: 'Letting the presenting crisis eclipse life-safety risks' }),
    ]),
    Q('q4', 'profdev', 'intake', 'Rosalind asks the counselor to take some of Pieter’s magazines home “for safekeeping.” What should the counselor do?', ['R6'], [
      O('a', 'Take one or two boxes home, since it builds trust and helps her pass the inspection without discarding anything.', -2,
        { r: 'Boundary crossing that colludes', approach: 'Helpful-favor framing', why: 'Storing client property creates a dual relationship and helps conceal hoarding from the inspector, undermining treatment and honesty', keys: ['“until the inspector is gone”'], mistake: 'Crossing a boundary to keep the alliance' }),
      O('b', 'Decline warmly, explore what the boxes mean to her, and consider together what she might do with them.', 3,
        { r: 'Hold the boundary, explore meaning', approach: 'Maintain appropriate boundaries', why: 'Declining protects the professional role, and exploring her attachment to Pieter’s magazines turns the request into therapeutic material', keys: ['Pieter’s magazines', 'request to store items'], mistake: 'Either granting the favor or refusing without exploring its meaning' }),
      O('c', 'Decline and explain that the agency has a policy against accepting client property, then move on to other topics.', 0,
        { r: 'Right boundary, missed opening', approach: 'Policy-only framing', why: 'Declining is correct, but citing policy without exploring the request misses meaningful clinical material', keys: ['emotional attachment'], mistake: 'Holding a boundary without processing it' }),
      O('d', 'Suggest she ask a neighbor or her daughter to store the boxes for her, so that the home looks clearer by inspection.', -1,
        { r: 'Moves the clutter, not the problem', approach: 'Relocation framing', why: 'Moving items elsewhere temporarily helps her avoid the work of deciding and can mislead the inspector', keys: ['avoidance of discarding'], mistake: 'Treating relocation of possessions as progress' }),
    ]),
    Q('q5', 'profdev', 'intake', 'At the home visit the counselor feels disgust and an urge to start clearing the kitchen herself. What is the best response?', ['R6'], [
      O('a', 'Begin clearing the spoiled food, since it is a health hazard and helping physically shows the counselor cares.', -1,
        { r: 'Acting on the urge oversteps', approach: 'Rescue framing', why: 'Removing items without a plan and her direction undermines her autonomy and the treatment model, even with good intent', keys: ['wants to sort things herself'], mistake: 'Acting on a rescue impulse instead of reflecting on it' }),
      O('b', 'Notice the reaction, use self-regulation in the moment, and process it in supervision before the next visit.', 3,
        { r: 'Self-regulate and seek supervision', approach: 'Counselor self-awareness', why: 'Strong reactions in hoarded homes are common; regulating them in the moment and processing them in supervision keeps them from driving clinical decisions', keys: ['wave of disgust', 'urge to start clearing'], mistake: 'Letting a visceral reaction direct the intervention' }),
      O('c', 'Shorten home visits so the counselor is not exposed to the odor, and hold the remaining sessions at the office.', 0,
        { r: 'Avoidance limits care', approach: 'Avoid-the-trigger framing', why: 'Some adjustment may be reasonable, but abandoning home visits to avoid discomfort loses the most useful setting for hoarding work', keys: ['in-home assessment needed'], mistake: 'Changing the treatment setting to manage counselor discomfort' }),
      O('d', 'Tell Rosalind that the smell is making the visit hard and that she needs to clean before the counselor returns.', -2,
        { r: 'Shaming and ultimatum', approach: 'Confront-the-client framing', why: 'Shaming her and setting a condition for care damages the alliance and is likely to increase avoidance', keys: ['poor insight', 'fragile alliance'], mistake: 'Making the counselor’s comfort the client’s responsibility' }),
    ]),

    // ---------------- session1 (3) ----------------
    Q('q6', 'indirect', 'session1', 'With the release signed, how should the counselor work with the landlord and the housing inspector?', ['R4', 'R7'], [
      O('a', 'Send the landlord her full assessment so he understands the diagnosis and how serious her condition really is.', -2,
        { r: 'Excess disclosure to a non-clinician', approach: 'Full-disclosure framing', why: 'A landlord needs a plan and timeline, not her clinical record; oversharing exposes her and violates minimum necessary', keys: ['release for coordination'], mistake: 'Treating a release as permission to share everything' }),
      O('b', 'Leave all contact to Rosalind, since contacting them could make the counselor seem to be taking the landlord’s side.', 0,
        { r: 'Forgoes useful advocacy', approach: 'Hands-off framing', why: 'Her autonomy matters, but she signed the release because coordination can win time; staying out wastes that opening', keys: ['landlord wants “real progress”'], mistake: 'Declining a coordination role the client has authorized' }),
      O('c', 'Share a safety-first plan and a realistic timeline, and request an extension tied to measurable progress.', 3,
        { r: 'Plan, timeline, and limited disclosure', approach: 'Collaborate with non-clinical stakeholders', why: 'Sharing a concrete plan that puts exits and fire hazards first, with measurable milestones, gives the landlord the “real progress” he wants while protecting clinical detail', keys: ['30-day notice', 'extension depends on progress'], mistake: 'Either oversharing clinical detail or leaving stakeholders without a plan' }),
      O('d', 'Ask the landlord to arrange a professional cleanout crew so that the home can meet code within the 30 days.', -1,
        { r: 'Forced cleanout backfires', approach: 'Cleanout framing', why: 'Cleanouts without the client’s participation cause severe distress, damage trust, and are followed by rapid reaccumulation', keys: ['wants to sort herself'], mistake: 'Equating removal of items with treatment' }),
    ]),
    Q('q7', 'planning', 'session1', 'How should the counselor help Rosalind prioritize her goals for the first two weeks?', ['R4'], [
      O('a', 'Start with the room most precious to her, so that early sorting work there builds her motivation to continue.', -1,
        { r: 'Hardest place first, safety ignored', approach: 'Meaningful-room framing', why: 'Sentimental areas usually provoke the most distress, and starting there ignores the urgent egress and fire risks', keys: ['Pieter’s magazines'], mistake: 'Ordering goals by emotional meaning rather than safety' }),
      O('b', 'Clear the back-door path, uncover the smoke detector, move the heater away from paper, and fix heat and food storage.', 3,
        { r: 'Harm reduction first', approach: 'Prioritize life-safety goals', why: 'A harm-reduction plan first addresses egress, fire detection, ignition sources, heat, and food safety, which also answer the inspector’s citations', keys: ['blocked back door', 'buried smoke detector', 'heater beside stacks'], mistake: 'Treating decluttering volume as the goal instead of safety' }),
      O('c', 'Have her sort all of the newspapers first, because they are the largest category and the easiest to throw away.', 0,
        { r: 'Volume over safety', approach: 'Largest-category framing', why: 'Newspapers may be lower in attachment, but sorting them first does not target the hazards that endanger her now', keys: ['excessive combustible storage'], mistake: 'Choosing targets by quantity instead of risk' }),
      O('d', 'Let Rosalind choose any starting point she likes, so that the plan stays fully client-directed from the start.', -2,
        { r: 'Abdicates safety responsibility', approach: 'Pure-autonomy framing', why: 'Collaboration matters, but leaving life-threatening hazards unaddressed while she chooses freely fails the counselor’s duty to client welfare', keys: ['fire hazard', 'falls'], mistake: 'Treating client direction as a reason to ignore known danger' }),
    ]),
    Q('q8', 'planning', 'session1', 'Which overall treatment plan best fits Rosalind’s hoarding disorder?', ['R3', 'R4'], [
      O('a', 'CBT for hoarding with MI for ambivalence, in-home practice in sorting and discarding, and help limiting new items.', 3,
        { r: 'CBT for hoarding plus MI', approach: 'Evidence-based, in-home CBT', why: 'CBT for hoarding builds decision-making, sorting, and discarding skills with graded exposure and curbs acquiring; MI addresses her ambivalence and poor insight', keys: ['ambivalent', 'poor insight', 'home-based problem'], mistake: 'Choosing a plan that skips either skill-building or motivation' }),
      O('b', 'Weekly office-based grief counseling about Pieter, on the view that the hoarding will lessen as her grief resolves.', -1,
        { r: 'Grief work alone will not reduce hoarding', approach: 'Grief-only framing', why: 'Grief may be part of the formulation, but hoarding behavior needs targeted CBT and in-home practice', keys: ['saving since her forties'], mistake: 'Assuming a precipitant explains and will resolve a long-standing pattern' }),
      O('c', 'Refer her to her primary care provider for an SSRI and see her monthly while waiting for the medication to work.', -2,
        { r: 'Medication-first, monthly contact', approach: 'Medication-only framing', why: 'Medication evidence for hoarding is limited, and monthly contact is far too thin given safety risks and a 30-day deadline', keys: ['30-day notice', 'self-neglect indicators'], mistake: 'Relying on medication with weak evidence while risks mount' }),
      O('d', 'Psychoeducation about hoarding and a list of local junk-removal companies she can call when she feels ready.', 0,
        { r: 'Information without treatment', approach: 'Psychoeducation-only framing', why: 'Psychoeducation helps, but without skills practice and motivational work she is unlikely to make sustained change', keys: ['distress at discarding'], mistake: 'Stopping at education when skills training is indicated' }),
    ]),

    // ---------------- session2 (5) ----------------
    Q('q9', 'legal', 'session2', 'The heater is still among the stacks, the furnace is unrepaired, and she has fallen again and refuses care. What should the counselor do?', ['R5'], [
      O('a', 'Respect her right to refuse care, document the risks, and keep working on the plan at their next scheduled visit.', -1,
        { r: 'Autonomy without legal review', approach: 'Pure-autonomy framing', why: 'Respecting refusal is important, but repeated falls, no heat, and a fire hazard may meet the state’s self-neglect threshold and require action', keys: ['second fall', 'declines care'], mistake: 'Treating client autonomy as ending the counselor’s legal duties' }),
      O('b', 'Arrange with the landlord to remove the space heater and the stacks around it while Rosalind is out of the home.', -2,
        { r: 'Covert removal violates autonomy', approach: 'Covert-intervention framing', why: 'Removing belongings without consent breaks trust, involves a third party in deception, and does not address the broader self-neglect', keys: ['release covers coordination only'], mistake: 'Taking unilateral action through a third party' }),
      O('c', 'Consult the state’s adult protective law and, if criteria are met, report self-neglect, telling her and continuing care.', 3,
        { r: 'Follow state law on self-neglect', approach: 'Adhere to state reporting law', why: 'Whether self-neglect is reportable and whether counselors are mandated varies by state; when criteria are met, report, inform her, and keep working with her', keys: ['repeated falls', 'no heat', 'heater among combustibles', 'missed medication'], mistake: 'Either ignoring self-neglect or acting without checking what state law requires' }),
      O('d', 'Ask Rosalind for permission to call her daughter in Arizona and plan with both of them how to make the home safe.', 0,
        { r: 'Helpful, but skips the legal review', approach: 'Family-support framing', why: 'Involving her daughter with consent can add support, but it does not answer whether repeated falls, no heat, and a fire hazard meet the state’s self-neglect reporting threshold', keys: ['daughter calls weekly', 'repeated falls'], mistake: 'Substituting family involvement for the legal duty to assess reportable self-neglect' }),
    ]),
    Q('q10', 'interventions', 'session2', 'Rosalind says, “Those aren’t junk. Pieter read every one of those magazines. But I can’t lose this place.” The best response is:', ['R3'], [
      O('a', '“They’re only magazines, Rosalind. Pieter would want you to keep your home more than he would want you to keep those.”', -2,
        { r: 'Dismisses and argues', approach: 'Persuasion framing', why: 'Minimizing the magazines and speaking for Pieter invites defensiveness and sustain talk', keys: ['“Those aren’t junk”'], mistake: 'Arguing for change against a client’s attachment' }),
      O('b', '“The magazines hold Pieter for you, and at the same time keeping this home matters to you a great deal.”', 3,
        { r: 'Double-sided reflection', approach: 'Reflect ambivalence', why: 'A double-sided reflection honors her attachment and her goal of keeping the home, inviting her to resolve the tension herself', keys: ['grief for Pieter', '“I can’t lose this place”'], mistake: 'Taking one side of the ambivalence instead of reflecting both' }),
      O('c', '“What if you kept one magazine from each year and recycled the rest? That would still honor what Pieter loved.”', 0,
        { r: 'Premature solution', approach: 'Fix-it framing', why: 'The idea may help later, but offering it before she voices change talk can provoke resistance', keys: ['ambivalent'], mistake: 'Moving to solutions before exploring ambivalence' }),
      O('d', '“It sounds like you are still very stuck in your grief, and holding on to things is a way of avoiding it.”', -1,
        { r: 'Interpretation over reflection', approach: 'Interpretive framing', why: 'An unsolicited interpretation can feel like a judgment and shifts focus away from her stated values', keys: ['grief for Pieter'], mistake: 'Interpreting before reflecting' }),
    ]),
    Q('q11', 'interventions', 'session2', 'How should the counselor structure Rosalind’s first in-home sorting practice?', ['R4'], [
      O('a', 'Have her sort a small area of newspapers near the heater, using decision rules she sets, while rating her distress.', 3,
        { r: 'Graded, self-directed practice', approach: 'Facilitate skill development', why: 'Starting with a lower-attachment, safety-relevant area, using her own decision rules and distress ratings, builds discarding skills through graded exposure', keys: ['wants to sort herself', 'heater beside stacks'], mistake: 'Starting with high-attachment items or doing the sorting for her' }),
      O('b', 'Have her start with Pieter’s magazines, since working through the hardest items first will speed up her progress.', -1,
        { r: 'Too much exposure too soon', approach: 'Flooding framing', why: 'Starting with the most sentimental items risks overwhelming distress and dropout', keys: ['attachment to Pieter’s things'], mistake: 'Beginning a graded hierarchy at the top' }),
      O('c', 'Have the counselor sort while Rosalind watches, so that she can learn by example how keep-or-discard choices are made.', 0,
        { r: 'Modeling without practice', approach: 'Demonstration framing', why: 'Brief modeling can help, but she needs to make the decisions herself for skills and tolerance to grow', keys: ['skill-building goal'], mistake: 'Substituting counselor decisions for client practice' }),
      O('d', 'Bring large trash bags and set a goal of filling ten of them during the session so the landlord sees real progress.', -2,
        { r: 'Volume goal drives coercion', approach: 'Quota framing', why: 'A bag quota pressures discarding faster than she can tolerate and serves the landlord rather than her skills', keys: ['landlord wants progress'], mistake: 'Setting quantity targets that bypass her decision-making' }),
    ]),
    Q('q12', 'legal', 'session2', 'The counselor took the Clutter Image Rating photos on a personal cell phone. What is the most appropriate step?', ['R7'], [
      O('a', 'Keep the photos on the phone for comparison at later visits, since only the counselor will look at them.', -1,
        { r: 'Unsecured PHI on a personal device', approach: 'Convenience framing', why: 'Photos of a client’s home are protected health information; keeping them on a personal phone risks loss or exposure', keys: ['personal cell phone'], mistake: 'Assuming private intent makes storage secure' }),
      O('b', 'Text the photos to the landlord as proof that Rosalind is working on the plan, since she signed a release.', -2,
        { r: 'Unsecure and beyond the release', approach: 'Proof-of-progress framing', why: 'Texting home photos to a landlord exceeds minimum necessary and uses an insecure channel', keys: ['release for coordination only'], mistake: 'Treating a release as permission for any disclosure' }),
      O('c', 'Delete the photos right away, because pictures of a client’s home should not be kept as part of a record.', 0,
        { r: 'Loses useful clinical data', approach: 'Delete-all framing', why: 'Photos can be a legitimate part of assessment when consented to and stored securely; deleting them loses the baseline', keys: ['CIR baseline'], mistake: 'Treating secure storage problems as a reason to discard clinical data' }),
      O('d', 'Confirm her consent, move the photos into the secure record, and delete them from the phone and any backups.', 3,
        { r: 'Secure the PHI properly', approach: 'Securely maintain records', why: 'With her consent, the photos belong in the secure record; removing them from the personal device and cloud backups protects them', keys: ['photos on personal phone', 'CIR assessment'], mistake: 'Leaving PHI on an unsecured personal device' }),
    ]),
    Q('q13', 'interventions', 'session2', 'After the attorney’s letter Rosalind says, “If they take my things, they might as well take me with them.” What should the counselor do?', ['R8', 'R9'], [
      O('a', 'Reassure her that the landlord cannot take her things and that the counselor will help her keep her home.', -1,
        { r: 'False reassurance, risk unassessed', approach: 'Reassurance framing', why: 'Promising an outcome the counselor cannot guarantee skips the possible death wish in her statement', keys: ['“take me with them”'], mistake: 'Responding to the content of the threat instead of the risk statement' }),
      O('b', 'Help her calm down, then ask directly about suicidal thoughts and use a structured tool to guide a safety plan.', 3,
        { r: 'De-escalate, ask directly, plan', approach: 'Crisis intervention and risk assessment', why: 'An older widowed adult facing loss who voices a wish to be “taken” needs de-escalation and a direct, structured risk inquiry leading to a collaborative safety plan', keys: ['tearful and agitated', '“might as well take me”', 'falls and self-neglect'], mistake: 'Treating an ambiguous death wish as a figure of speech' }),
      O('c', 'Ask her to promise she will not hurt herself before the next visit and write that agreement in her chart.', -2,
        { r: 'No-suicide contract', approach: 'Contract framing', why: 'No-suicide contracts are not effective and do not replace assessment or safety planning', keys: ['possible suicidal statement'], mistake: 'Using a no-harm contract in place of assessment' }),
      O('d', 'Note the remark as an expression of stress and return to it next week once she is calmer and able to talk more.', 0,
        { r: 'Delays assessment', approach: 'Defer framing', why: 'Waiting a week leaves a possible suicide risk unassessed during an acute stressor', keys: ['acute stressor'], mistake: 'Postponing risk assessment until the client is calmer' }),
    ]),
  ],
};

// ============================================================================
// D952 — Brief Psychotic Disorder (medium, adult, plan 2)
// ============================================================================
const D952 = {
  id: 'ncmhce-D952',
  plan: 2,
  population: 'adult',
  title: 'After her brother’s sudden death, a nursing assistant begins hearing voices her family cannot explain',
  category: 'Psychotic',
  difficulty: 'medium',
  primaryDiagnosis: { name: 'Brief Psychotic Disorder', code: 'F23' },
  diagnosis: { name: 'Brief Psychotic Disorder', code: 'F23' },
  differentialOptions: [
    { id: 'do1', name: 'Schizophreniform Disorder', isCorrect: false },
    { id: 'do2', name: 'Prolonged Grief Disorder', isCorrect: false },
    { id: 'do3', name: 'Major Depressive Disorder, with Psychotic Features', isCorrect: false },
    { id: 'do4', name: 'Brief Psychotic Disorder', isCorrect: true },
  ],
  narrative: {
    intake:
      'Marisol Quispe Huamán, 29, a Peruvian American certified nursing assistant of Andean Quechua heritage, is brought to an urgent intake at a community mental ' +
      'health center in Phoenix by her mother, Celestina, and her aunt. Nine days ago her younger brother, Wilmer, died in a motorcycle crash. Two days later ' +
      'Marisol began saying that coworkers at the nursing home had arranged his death through “signals” in the hospital radios, hearing several voices commenting ' +
      'on what she does, and speaking in jumbled, hard-to-follow sentences. She sleeps about two hours a night and has wandered outside after midnight twice. ' +
      'Her mother says that in their family, seeing or hearing a loved one who has just died is a normal part of mourning, but “this is not that.” An urgent ' +
      'care visit five days ago found normal labs and a negative urine drug screen. Marisol has no prior psychiatric history and worked full time until the ' +
      'death. She denies suicidal or homicidal thoughts, the voices do not give commands, and there are no weapons in the home. Her family can stay with her ' +
      'around the clock and she agrees to see a psychiatrist. The counselor, an LPC with no experience in Andean culture, has never been trained to administer ' +
      'the Brief Psychiatric Rating Scale that the clinic keeps on file.',
    session1:
      'Six days later Marisol has started a low-dose antipsychotic prescribed by the clinic psychiatrist. She sleeps about six hours, the voices are fainter, and ' +
      'she is less certain about the coworkers. She reports feeling “stiff” and unable to sit still, and she has not told the psychiatrist. Celestina speaks ' +
      'mainly Spanish and some Quechua; Marisol’s 16-year-old sister has been interpreting at appointments. Celestina asks whether Marisol can join a family ' +
      'ceremony led by a Quechua healer for Wilmer’s spirit.',
    session2:
      'By day 30 the psychotic symptoms have resolved and Marisol is grieving openly. She says she sometimes hears Wilmer’s voice saying goodbye at night and finds ' +
      'it comforting. She wants to return to work, and the nursing home’s HR manager calls the counselor asking for her diagnosis. A clinic supervisor suggests ' +
      'coding schizophrenia “so insurance approves more sessions.” The clinic has also just adopted an AI note-taking tool that records sessions and drafts notes.',
  },
  diagnosticRationale:
    'Marisol developed delusions, hallucinations, and disorganized speech within days of a sudden, severe loss, with a duration of more than one day and less ' +
    'than one month and a full return to her premorbid functioning, consistent with brief psychotic disorder with a marked stressor. Her persecutory beliefs about ' +
    'coworkers, multiple commenting voices, and disorganized speech go beyond the culturally sanctioned experience of sensing a deceased loved one, which her own ' +
    'family distinguishes. Normal labs and a negative drug screen argue against a substance or medical cause, there is no prominent mood episode, and the ' +
    'one-month resolution rules out schizophreniform disorder. Her later comforting sense of hearing Wilmer say goodbye, without other psychotic features, fits ' +
    'normative, culturally congruent grief.',
  references: [
    { id: 'R1', source: 'DSM-5-TR', detail: 'Brief psychotic disorder criteria A–C, with marked stressor(s) specifier; culturally sanctioned response exclusion; Cultural Formulation' },
    { id: 'R2', source: 'ACA Code of Ethics', detail: 'A.2.c. developmental and cultural sensitivity (including interpreters); B.1.c. respect for confidentiality; C.2.a. competence; E.2.a. competence to use assessment instruments' },
    { id: 'R3', source: 'C-SSRS', detail: 'Structured suicide-risk screening, including during psychosis and acute bereavement' },
    { id: 'R4', source: 'Hays (Assessment)', detail: 'Culturally responsive assessment and level-of-care decisions using collateral from family' },
    { id: 'R5', source: 'Wiger (Documentation)', detail: 'Documenting client-reported medication effects and communication with prescribers; documentation supporting diagnosis and billing' },
    { id: 'R6', source: 'HIPAA', detail: 'Authorization for disclosures to employers; minimum necessary standard; business associate agreements for technology vendors' },
    { id: 'R7', source: 'Corey (Theory & Practice)', detail: 'Multicultural counseling; family involvement and psychoeducation in recovery from psychosis' },
    { id: 'R8', source: 'NBCC Code of Ethics', detail: 'Honest representation in billing and records; informed consent for technology, including recording' },
  ],
  questions: [
    // ---------------- intake (5) ----------------
    Q('q1', 'assess', 'intake', 'Which finding best shows that Marisol’s experiences go beyond a culturally expected grief response?', ['R1'], [
      O('a', 'She has been sleeping only about two hours a night since her brother’s death, which is quite unusual for normal grief.', 0,
        { r: 'Common in grief and psychosis', approach: 'Sleep-loss framing', why: 'Severe insomnia is concerning but occurs in acute grief too; it does not by itself separate cultural mourning from psychosis', keys: ['two hours of sleep'], mistake: 'Using a nonspecific symptom as the cultural discriminator' }),
      O('b', 'She believes coworkers arranged his death through radio signals, hears commenting voices, and her speech is jumbled.', 3,
        { r: 'Psychotic features beyond cultural norms', approach: 'Apply the cultural exclusion', why: 'Sensing the deceased may be culturally sanctioned, but persecutory delusions, commenting voices, and disorganized speech are not, and her family confirms “this is not that”', keys: ['radio “signals” delusion', 'several commenting voices', 'mother says “this is not that”'], mistake: 'Treating any perception of the dead as either normal or pathological without examining content' }),
      O('c', 'She says she is hearing voices, and hearing voices is a sign of psychosis in every cultural group.', -2,
        { r: 'Ignores cultural context', approach: 'Universal-symptom framing', why: 'Hearing a deceased loved one is normative in many cultures, including her family’s; this reasoning would pathologize normal grief', keys: ['mother describes cultural norm'], mistake: 'Treating any voice-hearing as psychotic regardless of culture' }),
      O('d', 'Her mother and aunt are worried and brought her in, which shows that her family considers her behavior abnormal.', -1,
        { r: 'Concern alone is not evidence', approach: 'Family-worry framing', why: 'Family concern is useful collateral, but the discriminator is the content of her symptoms, not that relatives are worried', keys: ['urgent intake'], mistake: 'Substituting family concern for symptom analysis' }),
    ]),
    Q('q2', 'profdev', 'intake', 'The counselor has no experience with Andean Quechua culture. What should the counselor do?', ['R2'], [
      O('a', 'Ask Marisol’s mother to explain all of her culture’s grief practices so the counselor can learn them during sessions.', -1,
        { r: 'Shifts the learning burden to the family', approach: 'Client-as-teacher framing', why: 'Asking about a family’s own meanings is good, but relying on a grieving family to educate the counselor is a burden and not a substitute for competence', keys: ['family in acute grief'], mistake: 'Making the client responsible for the counselor’s cultural education' }),
      O('b', 'Refer the family to another clinic that has Spanish-speaking staff, since cultural mismatch prevents effective care.', 0,
        { r: 'Premature referral', approach: 'Match-or-refer framing', why: 'A referral may be appropriate if competence cannot be built, but cultural difference alone does not require transfer during a crisis', keys: ['urgent presentation'], mistake: 'Assuming only a culturally matched provider can help' }),
      O('c', 'Seek cultural consultation and training while practicing with humility and asking the family about their own meanings.', 3,
        { r: 'Consult, train, and use humility', approach: 'Build cultural competence', why: 'Counselors seek training and consultation for unfamiliar populations and use cultural humility, asking the family what experiences mean to them', keys: ['no Andean experience', 'family describes mourning norms'], mistake: 'Either ignoring the gap or abandoning the client' }),
      O('d', 'Treat Marisol the same way as any other client, since psychosis looks similar in all cultures and is treated the same.', -2,
        { r: 'Culture-blind practice', approach: 'Universalist framing', why: 'Culture shapes how grief and psychosis are expressed and treated; ignoring it risks misdiagnosis and alienating the family', keys: ['cultural grief practices'], mistake: 'Assuming cultural context is irrelevant to diagnosis and care' }),
    ]),
    Q('q3', 'assess', 'intake', 'What is the most appropriate level of care for Marisol at intake?', ['R4'], [
      O('a', 'Routine weekly outpatient counseling, with a psychiatric referral to be considered if symptoms continue after a month.', -1,
        { r: 'Too little, too late', approach: 'Routine-care framing', why: 'Active psychosis with severe insomnia and night wandering needs prompt psychiatric evaluation; waiting a month misses a critical window', keys: ['wandering after midnight', 'two hours of sleep'], mistake: 'Treating acute psychosis like a routine outpatient concern' }),
      O('b', 'Involuntary hospitalization right away, since any acute psychosis requires inpatient care for her own safety.', 0,
        { r: 'Over-restrictive here', approach: 'Inpatient-for-all framing', why: 'She is not dangerous, is cooperative, and has 24-hour family supervision; involuntary admission is not warranted, though erring safe is less harmful than undertreatment', keys: ['no SI/HI', 'family supervision', 'agrees to psychiatry'], mistake: 'Equating psychosis with a need for involuntary inpatient care' }),
      O('c', 'Have her rest at home with her family and return in two weeks, since the symptoms will likely pass as her grief settles.', -2,
        { r: 'No treatment for active psychosis', approach: 'Watchful-waiting framing', why: 'Brief psychotic episodes can remit, but active psychosis with night wandering needs evaluation and close follow-up now', keys: ['night wandering'], mistake: 'Assuming a stress-linked psychosis needs no active care' }),
      O('d', 'Same-week psychiatric evaluation and frequent outpatient visits, with family supervision and a plan if risk changes.', 3,
        { r: 'Intensive outpatient with supports', approach: 'Match level of care to risk and supports', why: 'With no danger to self or others, cooperation, and 24-hour family supervision, close outpatient care with urgent psychiatry is the least restrictive safe option', keys: ['no weapons', 'family can stay with her', 'agrees to psychiatrist'], mistake: 'Choosing a level of care without weighing risk, supports, and willingness' }),
    ]),
    Q('q4', 'profdev', 'intake', 'The clinic has the Brief Psychiatric Rating Scale on file, but the counselor has not been trained to use it. What should she do?', ['R2'], [
      O('a', 'Administer it, since the scoring manual is on file and rating scales are straightforward for licensed clinicians.', -1,
        { r: 'Manual access is not competence', approach: 'Self-taught framing', why: 'Counselors use only assessments they are trained to administer and interpret; a manual does not establish competence', keys: ['never trained on BPRS'], mistake: 'Treating access to a tool as competence to use it' }),
      O('b', 'Use the scale but report only the total score, since a total is less likely to be misinterpreted than item scores.', -2,
        { r: 'Untrained use with false precision', approach: 'Partial-use framing', why: 'An untrained rater’s total score is unreliable, and presenting it as a clinical result misleads the team', keys: ['untrained rater'], mistake: 'Assuming simplifying the output fixes untrained administration' }),
      O('c', 'Defer structured rating to the psychiatrist, use her own clinical interview, and seek training before using the scale.', 3,
        { r: 'Stay within assessment competence', approach: 'Determine competency for assessments', why: 'Counselors use instruments only within their training; relying on her interview and the psychiatrist’s rating, while getting trained, keeps assessment valid', keys: ['psychiatrist involved', 'no BPRS training'], mistake: 'Using an instrument before being trained to administer it' }),
      O('d', 'Skip structured measurement entirely, since psychosis in grief is better understood through clinical judgment alone.', 0,
        { r: 'Discards useful measurement', approach: 'Judgment-only framing', why: 'Clinical interview is central, but structured measures help track change when used by trained raters', keys: ['tracking symptom resolution'], mistake: 'Rejecting structured assessment instead of using it competently' }),
    ]),
    Q('q5', 'assess', 'intake', 'How should the counselor assess Marisol’s safety at intake?', ['R3'], [
      O('a', 'Accept her denial of suicidal thoughts, since asking more questions could make her paranoia about other people even worse.', -1,
        { r: 'Denial alone is not a screen', approach: 'Avoid-agitation framing', why: 'A single denial during psychosis and acute loss is not enough; structured questions can be asked calmly without worsening paranoia', keys: ['psychosis plus bereavement'], mistake: 'Skipping risk assessment to avoid upsetting a psychotic client' }),
      O('b', 'Ask her to sign an agreement that she will not harm herself and will call the clinic if she feels unsafe.', -2,
        { r: 'No-suicide contract', approach: 'Contract framing', why: 'No-harm contracts do not reduce risk and can create false reassurance in place of assessment', keys: ['acute risk factors'], mistake: 'Relying on a contract instead of structured assessment' }),
      O('c', 'Ask her family whether she seems suicidal, since her psychosis makes her own report unreliable at this point.', 0,
        { r: 'Collateral without direct inquiry', approach: 'Collateral-only framing', why: 'Family collateral is valuable, but the counselor still asks Marisol directly, as psychotic clients can report risk', keys: ['family present'], mistake: 'Replacing direct inquiry with collateral' }),
      O('d', 'Use a structured screen covering suicide, harm to others, and voice content, adding family report and checking means.', 3,
        { r: 'Structured screen plus collateral', approach: 'Assess risk to self and others', why: 'Psychosis and sudden bereavement raise risk; a structured screen, questions about command content and harm to others, collateral, and a means check give a complete picture', keys: ['no command voices', 'no weapons in home', 'sudden loss'], mistake: 'Treating a brief denial as a complete risk assessment' }),
    ]),

    // ---------------- session1 (3) ----------------
    Q('q6', 'indirect', 'session1', 'Marisol’s 16-year-old sister has been interpreting for their mother. What should the counselor do?', ['R2'], [
      O('a', 'Continue using the sister, since family interpreters understand the cultural context better than strangers do.', -1,
        { r: 'Minor family interpreter is inappropriate', approach: 'Family-interpreter framing', why: 'A grieving 16-year-old relative cannot be expected to interpret accurately or neutrally and is exposed to distressing clinical content', keys: ['16-year-old sister', 'family in grief'], mistake: 'Using a minor relative as an interpreter' }),
      O('b', 'Arrange a qualified medical interpreter in Celestina’s preferred language, Spanish or Quechua, for each session.', 3,
        { r: 'Professional interpreter', approach: 'Secure translation services', why: 'Qualified interpreters in the client’s or family member’s preferred language ensure accuracy, confidentiality, and neutrality', keys: ['mother speaks Spanish and Quechua', 'sister interpreting'], mistake: 'Relying on family members, especially minors, to interpret' }),
      O('c', 'Speak with Celestina in English and simplify the language, since she understands some English from living in Phoenix.', -2,
        { r: 'Ignores language access', approach: 'Simplified-English framing', why: 'Partial English risks misunderstanding of a serious psychiatric condition and excludes a key support', keys: ['speaks mainly Spanish'], mistake: 'Assuming partial English proficiency is adequate for clinical communication' }),
      O('d', 'Have the sister interpret only for scheduling and routine matters, and use an interpreter for clinical topics.', 0,
        { r: 'Better, but still uses a minor', approach: 'Split-role framing', why: 'Limiting her role is an improvement, but routine talk often turns clinical; a qualified interpreter throughout is the standard', keys: ['minor relative'], mistake: 'Assuming the line between routine and clinical talk will hold' }),
    ]),
    Q('q7', 'indirect', 'session1', 'Marisol reports feeling “stiff” and unable to sit still since starting her medication. What should the counselor do?', ['R5'], [
      O('a', 'Document her reported effects and, with consent, contact the psychiatrist promptly, encouraging her to tell him too.', 3,
        { r: 'Document and coordinate', approach: 'Document self-reported medication effects', why: 'Stiffness and restlessness may be side effects the prescriber needs to know about; documenting and coordinating keeps care safe and supports her adherence', keys: ['“stiff”', 'unable to sit still', 'has not told psychiatrist'], mistake: 'Either advising on the medication or ignoring reported side effects' }),
      O('b', 'Advise her to cut her dose in half until her next psychiatry appointment, since the side effects are so uncomfortable.', -2,
        { r: 'Outside scope', approach: 'Dose-advice framing', why: 'Counselors do not adjust medications; advising a dose change risks relapse and steps outside scope', keys: ['antipsychotic prescribed by psychiatrist'], mistake: 'Giving medication advice beyond counselor scope' }),
      O('c', 'Reassure her that these feelings are expected early in treatment and will fade over the next few weeks.', -1,
        { r: 'Reassurance in place of reporting', approach: 'Normalize framing', why: 'The counselor cannot judge whether these effects will fade; restlessness from antipsychotics can require prescriber attention', keys: ['new movement symptoms'], mistake: 'Assuming side effects are benign without informing the prescriber' }),
      O('d', 'Note the effects in her chart and suggest she mention them at her next psychiatry visit in a few weeks.', 0,
        { r: 'Documented but slow', approach: 'Next-visit framing', why: 'Documentation is right, but waiting weeks leaves possibly significant side effects untreated and risks her stopping the medication', keys: ['has not told psychiatrist'], mistake: 'Leaving communication about side effects to the client alone' }),
    ]),
    Q('q8', 'planning', 'session1', 'Celestina asks whether Marisol can join a family ceremony led by a Quechua healer for Wilmer’s spirit. How should the plan address this?', ['R7'], [
      O('a', 'Advise against the ceremony, since spiritual rituals could reinforce Marisol’s psychotic beliefs about her brother.', -1,
        { r: 'Pathologizes culture', approach: 'Ritual-as-risk framing', why: 'Mourning rituals are a culturally congruent support; her delusions were about coworkers, not the ceremony, and opposing it damages the alliance', keys: ['family mourning practice'], mistake: 'Treating cultural practice as a symptom risk' }),
      O('b', 'Support the ceremony as a substitute for medication, since the family’s healer can address her symptoms directly.', -2,
        { r: 'Replaces indicated treatment', approach: 'Substitution framing', why: 'Honoring the ceremony does not mean dropping medication that is resolving her psychosis', keys: ['symptoms improving on medication'], mistake: 'Framing cultural and clinical care as either-or' }),
      O('c', 'Explore what the ceremony means, support her taking part alongside treatment, and plan around her energy and sleep.', 3,
        { r: 'Integrate cultural practice', approach: 'Integrate cultural considerations into the plan', why: 'A family ceremony can support grieving; integrating it with ongoing treatment and attention to rest respects culture while protecting recovery', keys: ['ceremony for Wilmer’s spirit', 'sleep improving'], mistake: 'Either opposing cultural practice or letting it replace treatment' }),
      O('d', 'Leave the decision to the family and keep the ceremony out of the plan, since spiritual matters are outside counseling.', 0,
        { r: 'Misses an integration opportunity', approach: 'Hands-off framing', why: 'Respecting family choice is good, but spiritual and cultural supports belong in a culturally responsive plan', keys: ['mother asked directly'], mistake: 'Treating culture and spirituality as outside the counseling plan' }),
    ]),

    // ---------------- session2 (5) ----------------
    Q('q9', 'legal', 'session2', 'The nursing home’s HR manager calls asking for Marisol’s diagnosis. What should the counselor do?', ['R6'], [
      O('a', 'Confirm the diagnosis, since the employer has a legitimate need to know whether she can safely return to patient care.', -2,
        { r: 'Unauthorized disclosure', approach: 'Employer-need framing', why: 'Disclosing a diagnosis to an employer without written authorization violates confidentiality and HIPAA', keys: ['no release for employer'], mistake: 'Assuming an employer’s interest permits disclosure' }),
      O('b', 'Neither confirm nor deny she is a client, then discuss with Marisol what, if anything, she wants shared in a release.', 3,
        { r: 'Protect, then let her decide', approach: 'Adhere to confidentiality law', why: 'Without authorization the counselor cannot confirm treatment; Marisol can choose a limited release such as a return-to-work letter', keys: ['HR call', 'wants to return to work'], mistake: 'Disclosing first and seeking authorization later' }),
      O('c', 'Tell HR that Marisol is in treatment but decline to give the diagnosis until she signs a release form.', -1,
        { r: 'Confirms treatment without consent', approach: 'Partial-disclosure framing', why: 'Confirming she is a client is itself a disclosure of protected information', keys: ['no authorization'], mistake: 'Believing that withholding the diagnosis alone protects confidentiality' }),
      O('d', 'Refer HR to the clinic’s records department and let them decide how to respond to the employer’s request.', 0,
        { r: 'Defers a decision the counselor should guide', approach: 'Pass-it-on framing', why: 'Records staff follow policy, but the counselor should protect the disclosure and involve Marisol in any release', keys: ['client autonomy'], mistake: 'Handing off a confidentiality decision without involving the client' }),
    ]),
    Q('q10', 'interventions', 'session2', 'Marisol says she sometimes hears Wilmer’s voice saying goodbye at night and finds it comforting. What is the best response?', ['R1', 'R7'], [
      O('a', 'Tell her the voice may be a sign her psychosis is returning and that she should contact the psychiatrist right away.', -1,
        { r: 'Pathologizes normal grief', approach: 'Relapse-alarm framing', why: 'A comforting sense of a deceased loved one, without other psychotic features, fits culturally congruent grief', keys: ['comforting', 'other symptoms resolved'], mistake: 'Treating any voice as relapse regardless of context' }),
      O('b', 'Explore what the experience means to her and her family, normalize it as grief, and keep watching for warning signs.', 3,
        { r: 'Explore meaning, normalize, monitor', approach: 'Explore cultural meaning', why: 'Her experience matches her family’s mourning norms and lacks other psychotic features; exploring it supports grief while monitoring relapse signs', keys: ['psychosis resolved', 'family norm of sensing the dead'], mistake: 'Either pathologizing grief or ignoring relapse risk' }),
      O('c', 'Avoid discussing the voice, since talking about hearing her brother could pull her back into psychotic thinking.', -2,
        { r: 'Avoidance blocks grief work', approach: 'Avoid-the-topic framing', why: 'Refusing to discuss the experience isolates her in grief and misses both its meaning and any relapse signs', keys: ['grieving openly'], mistake: 'Treating a normal grief experience as too dangerous to discuss' }),
      O('d', 'Reassure her that the voice is normal grief and move on to planning her return to work at the nursing home.', 0,
        { r: 'Right idea, too brief', approach: 'Quick-reassurance framing', why: 'It is likely normal grief, but moving on quickly skips exploring its meaning and monitoring for change', keys: ['recent psychosis'], mistake: 'Closing the topic before exploring it' }),
    ]),
    Q('q11', 'interventions', 'session2', 'What relapse-prevention psychoeducation should the counselor give Marisol and her family?', ['R7'], [
      O('a', 'Teach them that sleep loss and new suspicious ideas are early warning signs and plan whom to call if these appear.', 3,
        { r: 'Warning signs and an action plan', approach: 'Family psychoeducation', why: 'Her episode began with severe insomnia and persecutory ideas; teaching the family these signs and an action plan supports early response', keys: ['two hours of sleep at onset', 'family collaboration'], mistake: 'Ending treatment without a family warning-sign plan' }),
      O('b', 'Tell them a relapse is unlikely now that symptoms have resolved, so no special monitoring is needed at home.', -2,
        { r: 'False reassurance', approach: 'All-clear framing', why: 'Some people with brief psychotic disorder have later episodes or develop other diagnoses; dismissing monitoring leaves the family unprepared', keys: ['recent episode'], mistake: 'Treating remission as the end of risk' }),
      O('c', 'Explain that she will need antipsychotic medication for life to prevent another psychotic episode from occurring.', -1,
        { r: 'Inaccurate and outside scope', approach: 'Lifelong-medication framing', why: 'Medication duration is a prescriber decision and is often time-limited after a brief episode; this statement is inaccurate', keys: ['psychiatrist manages medication'], mistake: 'Giving medication guidance beyond scope' }),
      O('d', 'Give them written material on psychosis and ask them to read it at home before their next family session.', 0,
        { r: 'Information without a plan', approach: 'Handout framing', why: 'Written material helps but does not replace an individualized discussion of warning signs and an action plan', keys: ['family collaboration'], mistake: 'Relying on handouts in place of tailored psychoeducation' }),
    ]),
    Q('q12', 'legal', 'session2', 'A supervisor suggests coding schizophrenia “so insurance approves more sessions.” What should the counselor do?', ['R5', 'R8'], [
      O('a', 'Use the schizophrenia code, since the supervisor is responsible for billing decisions at the clinic.', -2,
        { r: 'Insurance fraud', approach: 'Defer-to-supervisor framing', why: 'Submitting a diagnosis not supported by documentation is fraudulent regardless of who suggests it', keys: ['psychosis resolved in 30 days'], mistake: 'Believing a supervisor’s direction makes misrepresentation acceptable' }),
      O('b', 'Use an unspecified psychosis code, since it is vague enough to support continued sessions without being false.', -1,
        { r: 'Still misrepresents', approach: 'Vague-code framing', why: 'Choosing a code to secure reimbursement rather than to reflect the documented diagnosis is still misrepresentation', keys: ['criteria for F23 met'], mistake: 'Treating a vaguer code as an acceptable workaround' }),
      O('c', 'Code brief psychotic disorder and document medical necessity for continued care, such as grief and relapse risk.', 3,
        { r: 'Accurate code, documented necessity', approach: 'Support claims with documentation', why: 'Claims must reflect the supported diagnosis; continued care can be justified through accurate documentation of current needs', keys: ['F23 criteria met', 'ongoing grief work'], mistake: 'Altering a diagnosis instead of documenting real need' }),
      O('d', 'Code brief psychotic disorder and end treatment once the insurer’s session limit for that diagnosis has been reached.', 0,
        { r: 'Accurate but ignores need', approach: 'Limit-driven framing', why: 'The code is right, but ending care at a limit without documenting need or appealing may leave her without support', keys: ['grief work ongoing'], mistake: 'Letting payer limits rather than clinical need set the end of care' }),
    ]),
    Q('q13', 'legal', 'session2', 'The clinic has adopted an AI note-taking tool that records sessions. What should the counselor do before using it with Marisol?', ['R6', 'R8'], [
      O('a', 'Use it without discussion, since the clinic approved the tool and notes are part of normal clinical operations.', -1,
        { r: 'No informed consent', approach: 'Clinic-approval framing', why: 'Clinic approval does not replace the client’s informed consent to recording and AI processing', keys: ['records sessions'], mistake: 'Assuming institutional approval covers client consent' }),
      O('b', 'Explain the tool and obtain her consent, confirm a business associate agreement, and review each note before signing.', 3,
        { r: 'Consent, BAA, and review', approach: 'Use AI tools responsibly', why: 'AI note-takers require client informed consent, a vendor with a business associate agreement, and clinician review for accuracy', keys: ['recent paranoia', 'recording sessions'], mistake: 'Using AI tools without consent, vendor safeguards, or review' }),
      O('c', 'Use it but do not mention the recording, since knowing about it could revive her recent paranoid thinking.', -2,
        { r: 'Covert recording', approach: 'Concealment framing', why: 'Recording without the client’s knowledge violates informed consent and trust, and discovery could be especially harmful after paranoia', keys: ['recent paranoia'], mistake: 'Withholding information to avoid distressing the client' }),
      O('d', 'Ask for her consent to use the tool and then sign whatever notes it drafts, since the software is described as highly accurate.', 0,
        { r: 'Consent without review', approach: 'Trust-the-tool framing', why: 'Consent is necessary, but the counselor remains responsible for note accuracy and must review AI drafts', keys: ['counselor responsibility'], mistake: 'Signing AI-generated notes without review' }),
    ]),
  ],
};

// ============================================================================
// D953 — Delusional Disorder, Persecutory Type (hard, adult, plan 3)
// ============================================================================
const D953 = {
  id: 'ncmhce-D953',
  plan: 3,
  population: 'adult',
  title: 'A long-haul trucker on medical leave is certain his neighbor is poisoning his water',
  category: 'Psychotic',
  difficulty: 'hard',
  primaryDiagnosis: { name: 'Delusional Disorder, Persecutory Type', code: 'F22' },
  diagnosis: { name: 'Delusional Disorder, Persecutory Type', code: 'F22' },
  differentialOptions: [
    { id: 'do1', name: 'Schizophrenia', isCorrect: false },
    { id: 'do2', name: 'Paranoid Personality Disorder', isCorrect: false },
    { id: 'do3', name: 'Delusional Disorder, Persecutory Type', isCorrect: true },
    { id: 'do4', name: 'Major Neurocognitive Disorder', isCorrect: false },
  ],
  narrative: {
    intake:
      'Arturo Benavides, 54, a Mexican American long-haul trucker on medical leave after back surgery, is referred by his primary care physician to an outpatient ' +
      'practice in Bakersfield, California. For 14 months Arturo has believed that his neighbor, Dale Hutchins, is putting antifreeze in his well water and his ' +
      'garden. He has had the water tested twice (both negative) and says the lab “is in on it.” He installed cameras, drinks only bottled water, and has had ' +
      'two shouting confrontations with Dale over the fence. He occasionally notices a “chemical smell” in the kitchen but reports no voices or visions. He pays ' +
      'his bills, keeps his home in order, talks warmly about his adult daughter, and is planning his return to work. His speech is organized. His physician’s ' +
      'workup, including labs and a brain MRI, was normal, and he drinks two beers on weekends. Arturo says he keeps a hunting rifle in a locked case. He came ' +
      'because his doctor “wants me checked so I can get back on the road.” The counselor lives alone in a rural area and finds herself uneasy after he describes ' +
      'watching the camera feed for hours; she also has no training in CBT for psychosis.',
    session1:
      'Arturo agrees to focus on “the stress this is causing” and his poor sleep. He refuses a psychiatric referral at first, saying, “I’m not crazy, I’m right.” ' +
      'He signs a release for his primary care physician. Near the end of the session he mentions, almost in passing, that he recently bought a handgun “for ' +
      'protection, since the sheriff won’t do anything,” and that he now carries it in his truck.',
    session2:
      'Arturo arrives angry: Dale has obtained a temporary restraining order, and a subpoena from Dale’s attorney requesting Arturo’s counseling records has ' +
      'arrived at the practice. Arturo asks the counselor, “You believe me, right?” When the counselor mentions a psychiatric consultation again, he snaps, “So ' +
      'you think I’m crazy too.” Later, calmer, he says, “Don’t worry, I’m a reasonable man. Last Saturday I just sat in my truck outside Dale’s place for a ' +
      'couple of hours with the pistol on the seat, to watch. I’ll only handle it myself if he tries it again.”',
  },
  diagnosticRationale:
    'Arturo has held a single, non-bizarre persecutory delusion (that his neighbor is poisoning his water) for over one month, maintained despite contrary ' +
    'evidence. Apart from the delusion and its ramifications, his functioning is not markedly impaired and his behavior is not obviously odd; hallucinations, if ' +
    'present, are not prominent and relate to the delusional theme (a chemical smell). He has no disorganized speech, negative symptoms, or mood episode, which ' +
    'rules out schizophrenia, and the belief is fixed and delusional rather than a pervasive pattern of suspiciousness, distinguishing it from paranoid ' +
    'personality disorder. A normal medical workup including brain MRI and minimal alcohol use argue against a medical or substance cause.',
  references: [
    { id: 'R1', source: 'DSM-5-TR', detail: 'Delusional disorder criteria A–E, persecutory type; differential with schizophrenia and paranoid personality disorder' },
    { id: 'R2', source: 'State law', detail: 'California Civil Code §43.92 (duty to protect: serious threat of physical violence against a reasonably identifiable victim; discharged by reasonable efforts to warn the victim and law enforcement)' },
    { id: 'R3', source: 'ACA Code of Ethics', detail: 'B.2.a. serious and foreseeable harm; B.2.d. court-ordered disclosure; C.2.a.–C.2.b. competence; A.1.a. client welfare' },
    { id: 'R4', source: 'Corey (Theory & Practice)', detail: 'Person-centered core conditions and working alliance; cognitive approaches to distress around fixed beliefs; repairing ruptures' },
    { id: 'R5', source: 'Wiger (Documentation)', detail: 'Documenting risk disclosures verbatim, risk assessment, consultation, and actions taken' },
    { id: 'R6', source: 'HIPAA', detail: 'Disclosures for judicial proceedings: subpoena vs. court order; satisfactory assurances; minimum necessary' },
    { id: 'R7', source: 'Miller & Rollnick (MI)', detail: 'Exploring client goals and ambivalence to support engagement with referral' },
  ],
  questions: [
    // ---------------- intake (4) ----------------
    Q('q1', 'profdev', 'intake', 'The counselor, who lives alone in a rural area, feels uneasy after Arturo describes watching his camera feed for hours. What should she do?', ['R3'], [
      O('a', 'Acknowledge the unease to herself, consult her supervisor about it, and check that it is not steering her clinical judgment.', 3,
        { r: 'Self-reflection and consultation', approach: 'Practice self-reflection', why: 'Unease with a client who has persecutory beliefs is understandable; supervision helps her separate personal anxiety from real risk cues so neither is ignored', keys: ['lives alone in a rural area', 'feels uneasy'], mistake: 'Either suppressing the reaction or letting it substitute for risk assessment' }),
      O('b', 'Transfer Arturo to a male colleague right away, since a client with persecutory beliefs may become dangerous to her.', -1,
        { r: 'Premature transfer based on fear', approach: 'Fear-driven transfer framing', why: 'Unease alone does not show danger or unsuitability; transferring now disrupts engagement without assessing either', keys: ['no threat to counselor'], mistake: 'Acting on fear without assessment or consultation' }),
      O('c', 'Set aside the feeling as unprofessional and continue as usual, since counselors should not let emotions affect them.', 0,
        { r: 'Suppression misses information', approach: 'Suppression framing', why: 'Reactions can carry useful clinical information and can distort judgment if ignored; examining them is part of competent practice', keys: ['feels uneasy'], mistake: 'Treating counselor reactions as irrelevant' }),
      O('d', 'Tell Arturo that his surveillance is making her nervous and ask him to stop describing the camera footage in sessions.', -2,
        { r: 'Shifts burden and ruptures the alliance', approach: 'Disclose-and-restrict framing', why: 'Burdening a suspicious client with the counselor’s fear and limiting what he can say damages trust and hides risk information', keys: ['camera surveillance'], mistake: 'Managing counselor anxiety by silencing the client' }),
    ]),
    Q('q2', 'assess', 'intake', 'Which finding best supports delusional disorder rather than schizophrenia?', ['R1'], [
      O('a', 'He refuses to accept the negative water tests and believes that the lab is cooperating with his neighbor.', 0,
        { r: 'Shows fixity, not the discriminator', approach: 'Fixity framing', why: 'Holding a belief despite evidence shows it is delusional, but delusions occur in both disorders; it does not separate them', keys: ['lab “is in on it”'], mistake: 'Using delusional conviction to distinguish two delusional disorders' }),
      O('b', 'His single non-bizarre belief has lasted over a month while his speech, self-care, and functioning remain intact.', 3,
        { r: 'Non-bizarre delusion, function preserved', approach: 'Apply the discriminating criteria', why: 'Delusional disorder involves delusions for at least one month without other schizophrenia criteria and without markedly impaired functioning apart from the delusion', keys: ['organized speech', 'pays bills', 'no voices'], mistake: 'Diagnosing schizophrenia from a delusion without checking other criteria and function' }),
      O('c', 'He notices a chemical smell in his kitchen, which is a hallucination that confirms a primary psychotic disorder.', -1,
        { r: 'Misreads a theme-related perception', approach: 'Any-hallucination framing', why: 'Olfactory experiences related to the delusional theme are allowed in delusional disorder when not prominent', keys: ['occasional chemical smell'], mistake: 'Treating any perceptual disturbance as ruling out delusional disorder' }),
      O('d', 'His beliefs about the neighbor are likely accurate, since neighbors do sometimes harm one another in rural areas.', -2,
        { r: 'Colludes and misses the disorder', approach: 'Plausibility framing', why: 'Non-bizarre does not mean true; two negative tests and a 14-month fixed belief support a delusion', keys: ['two negative water tests'], mistake: 'Confusing a plausible-sounding belief with a likely-true one' }),
    ]),
    Q('q3', 'profdev', 'intake', 'The counselor has no training in CBT for psychosis. What is the most appropriate step?', ['R3'], [
      O('a', 'Refer Arturo elsewhere right away, since no part of his care is within a generalist counselor’s competence.', -1,
        { r: 'Overstates the gap', approach: 'Refer-out framing', why: 'Engagement, risk assessment, and stress-focused work are within her competence; she can seek consultation for the specialized modality', keys: ['agreed to focus on stress'], mistake: 'Treating one specialized gap as disqualifying for all care' }),
      O('b', 'Read a CBT for psychosis manual and begin challenging his beliefs in the next session to build experience.', -2,
        { r: 'Untrained challenging of delusions', approach: 'Learn-by-doing framing', why: 'Unskilled challenging of a fixed delusion damages the alliance and can increase distress and risk', keys: ['fixed belief', 'firearm access'], mistake: 'Practicing a specialized method without training on a high-risk client' }),
      O('c', 'Avoid any work on his beliefs and focus only on sleep hygiene so that she stays within her current competence.', 0,
        { r: 'Narrow, avoids the core issue', approach: 'Stay-in-lane framing', why: 'Sleep work helps, but the delusion drives his distress and risk; consultation lets her address it competently', keys: ['14-month belief'], mistake: 'Limiting care to avoid the main clinical issue' }),
      O('d', 'Seek consultation from a clinician experienced in CBT for psychosis and pursue training while using core skills.', 3,
        { r: 'Consult and train', approach: 'Seek consultation for a specific modality', why: 'Consultation lets her provide engagement and stress-focused care now while building competence in the specialized approach', keys: ['no CBTp training'], mistake: 'Either practicing beyond competence or abandoning the client' }),
    ]),
    Q('q4', 'assess', 'intake', 'Which risk assessment step is most important at intake?', ['R1', 'R3'], [
      O('a', 'Ask in detail about his confrontations with Dale, any thoughts of harming him, past violence, and access to weapons.', 3,
        { r: 'Violence risk with means', approach: 'Assess risk to others', why: 'Persecutory delusions with a named target, repeated confrontations, and a firearm call for direct assessment of intent, history, and means', keys: ['two shouting confrontations', 'hunting rifle', 'named neighbor'], mistake: 'Assessing only suicide risk in a client with a persecutory delusion' }),
      O('b', 'Screen for suicide only, since violence toward others is uncommon in delusional disorder and asking could insult him.', -2,
        { r: 'Misses violence risk', approach: 'Suicide-only framing', why: 'Persecutory delusions with a specific target and weapon access raise violence risk; skipping it is a dangerous omission', keys: ['identifiable target', 'rifle'], mistake: 'Avoiding violence questions to protect rapport' }),
      O('c', 'Accept that the rifle is locked in a case and focus on his stress, since he seems calm and organized in the session.', -1,
        { r: 'Surface reassurance', approach: 'Presentation-based framing', why: 'Calm presentation and a locked case do not establish safety when there is a named target and conflict', keys: ['locked case', 'confrontations'], mistake: 'Letting calm demeanor stand in for assessment' }),
      O('d', 'Ask his primary care physician whether Arturo has ever seemed dangerous, then decide whether to ask him directly.', 0,
        { r: 'Collateral before direct inquiry', approach: 'Collateral-first framing', why: 'Collateral can help, but direct questioning of the client is the first step', keys: ['PCP referral'], mistake: 'Delaying direct inquiry for collateral' }),
    ]),

    // ---------------- session1 (4) ----------------
    Q('q5', 'planning', 'session1', 'Which initial treatment goal is most appropriate for Arturo?', ['R4', 'R7'], [
      O('a', 'Arturo will recognize that his neighbor is not poisoning him within the first six weeks of treatment.', -1,
        { r: 'Goal he does not share', approach: 'Insight-first framing', why: 'Goals built on giving up a fixed belief are rejected by the client and damage engagement', keys: ['“I’m not crazy, I’m right”'], mistake: 'Setting belief change as the first goal' }),
      O('b', 'Arturo will improve his sleep and reduce stress from the conflict, with a safety plan for contact with Dale.', 3,
        { r: 'Client-endorsed goals plus safety', approach: 'Collaborate on goals', why: 'Goals he agrees with, such as sleep and stress, build engagement, and a safety plan addresses the conflict with Dale', keys: ['agrees to focus on stress', 'poor sleep', 'confrontations'], mistake: 'Ignoring either client-endorsed goals or safety' }),
      O('c', 'Arturo will gather more evidence of the poisoning so the counselor can help him take it to the authorities.', -2,
        { r: 'Colludes with the delusion', approach: 'Investigative framing', why: 'Helping gather evidence reinforces the delusion and can escalate conflict with the neighbor', keys: ['two negative tests'], mistake: 'Joining the delusion to preserve the alliance' }),
      O('d', 'Arturo will attend weekly sessions and report his stress level, with goals to be set once rapport is established.', 0,
        { r: 'Too vague and delayed', approach: 'Rapport-first framing', why: 'Rapport matters, but leaving goals undefined delays care and ignores the safety concerns already present', keys: ['firearm access'], mistake: 'Postponing goal setting in a case with risk factors' }),
    ]),
    Q('q6', 'indirect', 'session1', 'Arturo signed a release for his primary care physician. How should the counselor use it?', ['R5'], [
      O('a', 'Send the physician her full notes, including Arturo’s statements about Dale, so the doctor has every detail.', -1,
        { r: 'Exceeds minimum necessary', approach: 'Send-everything framing', why: 'The physician needs a summary and recommendations, not verbatim session notes', keys: ['release for coordination'], mistake: 'Equating a release with sharing the whole record' }),
      O('b', 'Wait to contact the physician until Arturo agrees to see a psychiatrist, so that the referral can be coordinated.', 0,
        { r: 'Delays useful coordination', approach: 'Wait framing', why: 'Coordination with the referring physician can begin now and may help him accept a psychiatric consultation', keys: ['refuses psychiatry now'], mistake: 'Holding coordination until a separate goal is reached' }),
      O('c', 'Share a summary of findings with the physician and agree on how to encourage a psychiatric consultation.', 3,
        { r: 'Coordinate with the referral source', approach: 'Collaborate with treatment providers', why: 'The physician he trusts can support a psychiatric consultation; sharing a focused summary aligns the team', keys: ['PCP referred him', 'refuses psychiatry'], mistake: 'Failing to coordinate with the provider the client trusts' }),
      O('d', 'Ask the physician to tell Arturo that his return-to-work clearance depends on seeing a psychiatrist this month.', -2,
        { r: 'Coercive and alliance-damaging', approach: 'Leverage framing', why: 'Using clearance as leverage without clinical basis is coercive and likely to confirm his sense of persecution', keys: ['suspicious of others'], mistake: 'Using another provider as leverage to force treatment' }),
    ]),
    Q('q7', 'planning', 'session1', 'Arturo says, “I’m not crazy, I’m right,” when psychiatry is mentioned. How should the plan approach a psychiatric referral?', ['R7'], [
      O('a', 'Drop the referral for now, since raising it again would harm the alliance with a suspicious client.', 0,
        { r: 'Avoids a needed referral', approach: 'Avoidance framing', why: 'Protecting the alliance matters, but antipsychotic evaluation is an important option to revisit as his goals evolve', keys: ['delusion driving risk'], mistake: 'Abandoning a needed referral because of initial refusal' }),
      O('b', 'Make the referral a condition of continued counseling so that he takes his treatment more seriously.', -2,
        { r: 'Ultimatum risks dropout', approach: 'Condition-of-care framing', why: 'An ultimatum is likely to end treatment, leaving a high-risk client without care', keys: ['firearm access', 'suspicious'], mistake: 'Using withdrawal of care as leverage' }),
      O('c', 'Link a consultation to his own goals, such as better sleep and less stress, and revisit it as trust grows.', 3,
        { r: 'Goal-linked, paced referral', approach: 'Refer in the client’s terms', why: 'Framing psychiatry around goals he endorses, such as sleep and stress, makes the referral acceptable without arguing about the delusion', keys: ['poor sleep', 'refuses psychiatry'], mistake: 'Framing the referral as treatment for being “crazy”' }),
      O('d', 'Tell him that his beliefs are symptoms of a mental illness and that medication is the only way to fix them.', -1,
        { r: 'Confrontational framing', approach: 'Confront framing', why: 'Directly labeling the belief as illness invites defensiveness and refusal', keys: ['“I’m right”'], mistake: 'Confronting a delusion to motivate referral' }),
    ]),
    Q('q8', 'indirect', 'session1', 'Arturo mentions in passing that he bought a handgun and carries it in his truck. How should the counselor document this session?', ['R5'], [
      O('a', 'Note his exact words about the handgun, the risk questions asked and answered, her assessment, and the follow-up plan.', 3,
        { r: 'Verbatim, assessment, plan', approach: 'Write clinical documentation', why: 'Risk disclosures should be documented verbatim along with the assessment, reasoning, consultation, and plan', keys: ['new handgun', '“the sheriff won’t do anything”'], mistake: 'Documenting risk vaguely or not at all' }),
      O('b', 'Leave the handgun out of the note, since writing it down could be used against him in a later legal matter.', -2,
        { r: 'Omits material risk', approach: 'Protective-omission framing', why: 'Omitting a risk disclosure leaves the record inaccurate and the counselor unable to show reasonable care', keys: ['firearm in truck'], mistake: 'Leaving out risk information to protect the client' }),
      O('c', 'Write that he owns firearms legally, since lawful ownership means there is no risk concern to document.', -1,
        { r: 'Legality is not safety', approach: 'Lawful-ownership framing', why: 'Legal ownership does not lower risk when there is a named target and conflict', keys: ['identifiable target'], mistake: 'Treating legal possession as no risk' }),
      O('d', 'Write only a brief note that firearms were discussed and that a fuller risk assessment will take place at the next session.', 0,
        { r: 'Too vague, delays assessment', approach: 'Defer framing', why: 'A vague note and a delayed assessment fall short given a new weapon and an identified adversary', keys: ['new handgun'], mistake: 'Postponing risk assessment and documentation' }),
    ]),

    // ---------------- session2 (5) ----------------
    Q('q9', 'interventions', 'session2', 'Arturo asks, “You believe me, right?” What is the most therapeutic response?', ['R4'], [
      O('a', '“I believe you, Arturo. It sounds like Dale has really been after you, and it makes sense you’re on guard.”', -2,
        { r: 'Colludes with the delusion', approach: 'Agreement framing', why: 'Endorsing the delusion strengthens it and may support escalation toward the neighbor', keys: ['two negative tests', 'restraining order'], mistake: 'Agreeing with a delusion to protect the relationship' }),
      O('b', '“I can’t say whether Dale is doing it, but I can see how frightened and worn down you feel, and that matters.”', 3,
        { r: 'Validate feelings, not content', approach: 'Alliance without collusion', why: 'Acknowledging his fear and exhaustion without agreeing or arguing preserves the alliance and honesty', keys: ['asks if counselor believes him'], mistake: 'Either agreeing with or disputing the delusion' }),
      O('c', '“The water tests were negative twice, so I don’t think Dale is poisoning you. Let’s look at the evidence together.”', -1,
        { r: 'Direct challenge', approach: 'Reality-confrontation framing', why: 'Directly disputing a fixed delusion when he is angry usually increases defensiveness and ruptures trust', keys: ['arrives angry'], mistake: 'Arguing with a delusion' }),
      O('d', '“What I believe isn’t important here. What matters is how you are feeling about the restraining order this week.”', 0,
        { r: 'Deflects the question', approach: 'Redirect framing', why: 'Redirecting avoids collusion but sidesteps his direct question and can feel evasive to a suspicious client', keys: ['suspicious'], mistake: 'Dodging the question instead of answering honestly' }),
    ]),
    Q('q10', 'interventions', 'session2', 'Arturo snaps, “So you think I’m crazy too,” when psychiatry is mentioned. What should the counselor do?', ['R4'], [
      O('a', 'Explain the psychiatric referral again more clearly, since he may have misunderstood the reason for it.', -1,
        { r: 'Persists instead of repairing', approach: 'Re-explain framing', why: 'Repeating the referral ignores the rupture he just expressed', keys: ['“you think I’m crazy too”'], mistake: 'Pushing content when the relationship needs repair' }),
      O('b', 'Acknowledge how the suggestion landed, take responsibility for her part, and ask what would help him feel heard.', 3,
        { r: 'Repair the rupture', approach: 'Monitor and resolve ruptures', why: 'Naming the rupture, owning her contribution, and inviting his feedback restores trust before returning to the topic', keys: ['angry response', 'feels judged'], mistake: 'Ignoring or defending against a rupture' }),
      O('c', 'Reassure him that she does not think he is crazy at all and move on to his sleep goals for the rest of the session.', 0,
        { r: 'Smooths over the rupture', approach: 'Reassure-and-move-on framing', why: 'Reassurance may calm him but skips exploring how he experienced the comment', keys: ['feels judged'], mistake: 'Moving on before repairing the rupture' }),
      O('d', 'End the session early, since he is angry and continuing could put the counselor at risk of harm.', -2,
        { r: 'Abandons a high-risk moment', approach: 'Terminate-session framing', why: 'He shows anger, not threat toward her; ending early misses repair and risk assessment of the restraining order situation', keys: ['restraining order', 'handgun in truck'], mistake: 'Ending contact when risk assessment is needed' }),
    ]),
    Q('q11', 'interventions', 'session2', 'Which intervention best addresses Arturo’s distress about the conflict without arguing about the poisoning?', ['R4'], [
      O('a', 'Help him plan how to respond to triggers, like seeing Dale, using calming skills and the restraining order terms.', 3,
        { r: 'Distress and conflict management', approach: 'Facilitate skill development', why: 'Working on how to respond when he sees Dale reduces distress and risk without debating the belief', keys: ['restraining order', 'confrontations'], mistake: 'Focusing on proving or disproving the belief instead of coping' }),
      O('b', 'Suggest he move to a new home, since distance from Dale will resolve the conflict and his beliefs together.', -1,
        { r: 'Geographic fix', approach: 'Relocation framing', why: 'Delusions often persist or shift targets after a move; it also avoids the immediate safety work', keys: ['14-month belief'], mistake: 'Assuming distance cures a delusion' }),
      O('c', 'Encourage him to collect more camera footage to bring to his attorney so that the court can see his side.', -2,
        { r: 'Escalates surveillance', approach: 'Evidence-gathering framing', why: 'More surveillance reinforces the delusion and may violate the restraining order', keys: ['restraining order'], mistake: 'Supporting behaviors that escalate the conflict' }),
      O('d', 'Teach him relaxation for sleep and leave the conflict with Dale for later, when he is less angry about it.', 0,
        { r: 'Helpful but avoids the main stressor', approach: 'Sleep-only framing', why: 'Relaxation helps, but the conflict with Dale is the active driver of distress and risk', keys: ['restraining order'], mistake: 'Deferring the central stressor' }),
    ]),
    Q('q12', 'legal', 'session2', 'Arturo says he sat outside Dale’s home with his pistol and will “handle it myself if he tries it again.” What should the counselor do?', ['R2', 'R3', 'R5'], [
      O('a', 'Accept his assurance that he is “a reasonable man,” document the statement, and reassess at the next session.', -2,
        { r: 'Ignores a serious threat', approach: 'Reassurance framing', why: 'Armed surveillance of a named person plus a conditional threat signals serious risk; waiting a week could be fatal', keys: ['pistol on the seat', 'named victim', 'conditional threat'], mistake: 'Accepting reassurance that contradicts the disclosed behavior' }),
      O('b', 'Assess his intent and plan now, then take the protective steps state law requires, consult, and document each step.', 3,
        { r: 'Assess, protect, consult, document', approach: 'Adhere to duty-to-protect law', why: 'A serious threat against a reasonably identifiable victim triggers the state duty to protect, met by warning the victim and police or other required steps', keys: ['armed surveillance', 'identifiable victim Dale', '“handle it myself”'], mistake: 'Either missing the duty or acting without assessment' }),
      O('c', 'Call Dale’s attorney to warn him, since the attorney is already involved in the case and can protect his client.', -1,
        { r: 'Wrong recipient', approach: 'Attorney-warning framing', why: 'The duty is met by warning the victim and law enforcement; the attorney is not a protective step and the disclosure may be improper', keys: ['identifiable victim'], mistake: 'Misdirecting a protective disclosure' }),
      O('d', 'Ask him to give his pistol to his daughter and, if he agrees, treat the risk as resolved without further steps.', 0,
        { r: 'Means safety is part, not all', approach: 'Means-only framing', why: 'Means counseling is important, but it does not discharge the legal duty once a serious threat is made', keys: ['conditional threat', 'second weapon at home'], mistake: 'Treating partial means restriction as fulfilling the duty' }),
    ]),
    Q('q13', 'legal', 'session2', 'A subpoena from Dale’s attorney requests Arturo’s counseling records. What should the counselor do first?', ['R6', 'R3'], [
      O('a', 'Send the full records right away, since a subpoena is a legal order that requires immediate compliance.', -2,
        { r: 'A subpoena is not a court order', approach: 'Comply-immediately framing', why: 'A subpoena alone does not authorize release of privileged records; disclosing without client consent or a court order breaches confidentiality', keys: ['attorney subpoena'], mistake: 'Treating a subpoena as a court order' }),
      O('b', 'Ignore the subpoena, since counseling records are privileged and cannot be reached by an opposing attorney.', -1,
        { r: 'Ignoring legal process', approach: 'Ignore framing', why: 'A subpoena requires a response; privilege must be asserted properly, not ignored', keys: ['legal process'], mistake: 'Assuming privilege means no response is required' }),
      O('c', 'Inform Arturo, consult an attorney or the board, and release nothing without his consent or a court order.', 3,
        { r: 'Notify, consult, protect', approach: 'Respond to court process properly', why: 'The counselor informs the client, seeks legal consultation, and asserts privilege, releasing only with consent or a court order', keys: ['subpoena from opposing attorney'], mistake: 'Either releasing records or ignoring the legal process' }),
      O('d', 'Send a summary of his treatment instead of full records, since a summary protects his privacy while complying.', 0,
        { r: 'Still discloses without authority', approach: 'Partial-compliance framing', why: 'A summary is still a disclosure; without consent or a court order nothing should be released', keys: ['no consent'], mistake: 'Assuming a summary avoids confidentiality concerns' }),
    ]),
  ],
};

// ============================================================================
// D954 — Bulimia Nervosa, Moderate (medium, adult, plan 4)
// ============================================================================
const D954 = {
  id: 'ncmhce-D954',
  plan: 4,
  population: 'adult',
  title: 'A collegiate swimmer hides a binge-purge cycle behind her training schedule',
  category: 'Eating',
  difficulty: 'medium',
  primaryDiagnosis: { name: 'Bulimia Nervosa, Moderate', code: 'F50.22' },
  diagnosis: { name: 'Bulimia Nervosa, Moderate', code: 'F50.22' },
  differentialOptions: [
    { id: 'do1', name: 'Anorexia Nervosa, Binge-Eating/Purging Type', isCorrect: false },
    { id: 'do2', name: 'Bulimia Nervosa, Moderate', isCorrect: true },
    { id: 'do3', name: 'Binge-Eating Disorder', isCorrect: false },
  ],
  narrative: {
    intake:
      'Hana Kealoha, 20, a Native Hawaiian sophomore on a Division I swim team at a university in Oregon, self-refers to the campus counseling center after a ' +
      'teammate finds her vomiting in the locker room. For eight months she has had episodes of eating large amounts of food quickly while feeling out of control, ' +
      'followed by self-induced vomiting, averaging about five times a week. She restricts during the day to “stay light” because her coach holds team weigh-ins ' +
      'and has said that “lighter swimmers are faster.” Her weight is in the normal range. She feels her self-worth depends on her shape and race times. She ' +
      'reports dizziness during practice, one episode of a racing heartbeat last week, and new tooth sensitivity, and has not seen a physician. A structured ' +
      'suicide screen is negative. She describes close family ties and big family meals at home. The counselor is a former collegiate rower who notices herself ' +
      'admiring Hana’s training discipline and comparing their bodies.',
    session1:
      'A campus physician’s labs show a potassium level of 3.1, below the normal range, and an ECG is pending; the physician asks to be kept informed. Hana signs ' +
      'releases for the team physician and the head athletic trainer, but not for her coach. She wants to “just stop throwing up” and keep training full time. ' +
      'The athletic trainer calls asking what Hana is being treated for.',
    session2:
      'Hana has been using a self-monitoring log. After a poor race she binged and purged twice and says, “I’ve ruined everything. I’m a failure at this too.” ' +
      'She says, “Coach says lighter swimmers are faster, and my aunties say I look skinny and want me to eat more at home.” She will spend the summer at her ' +
      'family’s home in a state where the counselor is not licensed, which has not joined the Counseling Compact, and wants to keep meeting by video. She is on ' +
      'her parents’ insurance and asks that they not find out about her treatment.',
  },
  diagnosticRationale:
    'Hana has recurrent binge episodes (large amounts with loss of control) and recurrent compensatory vomiting, both occurring about five times a week for ' +
    'eight months, well beyond the three-month, once-weekly minimum, with self-evaluation unduly influenced by shape and weight. Her weight is in the normal ' +
    'range, which rules out anorexia nervosa, binge-eating/purging type, and her regular compensatory behavior rules out binge-eating disorder. An average of ' +
    'four to seven compensatory episodes per week places severity at moderate (F50.22). Dizziness, palpitations, tooth sensitivity, and low potassium are ' +
    'medical complications of purging that require medical monitoring alongside counseling.',
  references: [
    { id: 'R1', source: 'DSM-5-TR', detail: 'Bulimia nervosa criteria A–E; severity specifiers by weekly frequency of compensatory behaviors (moderate: 4–7 per week)' },
    { id: 'R2', source: 'NICE guidelines', detail: 'Eating disorders: recognition and treatment (NG69) — bulimia nervosa in adults: guided self-help, then individual eating-disorder-focused CBT (CBT-ED); physical health monitoring' },
    { id: 'R3', source: 'ACA Code of Ethics', detail: 'A.1.a. client welfare; B.1.c. confidentiality; C.2.a. competence; A.6. boundaries and professional relationships; H. distance counseling and jurisdiction' },
    { id: 'R4', source: 'Counseling Compact', detail: 'Practice is governed by the law of the state where the client is located; privilege to practice exists only in member states' },
    { id: 'R5', source: 'HIPAA', detail: 'Minimum necessary disclosures under an authorization; right to request confidential communications from a health plan' },
    { id: 'R6', source: 'Corey (Theory & Practice)', detail: 'Cognitive restructuring of all-or-nothing thinking; multicultural exploration of family and community values' },
    { id: 'R7', source: 'Wiger (Documentation)', detail: 'SMART treatment goals and objectives; accurate diagnostic coding for claims' },
  ],
  questions: [
    // ---------------- intake (4) ----------------
    Q('q1', 'assess', 'intake', 'Which finding determines that Hana’s bulimia nervosa is of moderate severity?', ['R1'], [
      O('a', 'She has had the binge-purge pattern for eight months, which is longer than the three months required.', -1,
        { r: 'Duration is not severity', approach: 'Duration framing', why: 'Duration establishes the diagnosis, but severity is set by weekly frequency of compensatory behaviors', keys: ['eight months'], mistake: 'Using duration to rate severity' }),
      O('b', 'Her weight is in the normal range, which places her disorder in the moderate category rather than severe.', -2,
        { r: 'Weight does not set BN severity', approach: 'Weight-based framing', why: 'Weight is not used to rate bulimia severity; using it can minimize risk in normal-weight clients', keys: ['normal weight'], mistake: 'Assuming normal weight means lower severity' }),
      O('c', 'She has dizziness, palpitations, and low potassium, which shows medical complications of moderate disease.', 0,
        { r: 'Complications can raise severity, not set it', approach: 'Complication framing', why: 'DSM-5-TR lets severity be raised for functional disability, but the baseline rating comes from compensatory frequency', keys: ['dizziness', 'racing heartbeat'], mistake: 'Basing severity on medical findings alone' }),
      O('d', 'Her vomiting averages about five episodes a week, within the four to seven range for moderate severity.', 3,
        { r: 'Weekly compensatory frequency', approach: 'Apply the severity specifier', why: 'Bulimia severity is rated by the average weekly frequency of compensatory behaviors; four to seven per week is moderate', keys: ['about five times a week'], mistake: 'Rating severity from symptoms other than compensatory frequency' }),
    ]),
    Q('q2', 'assess', 'intake', 'Given her dizziness, racing heartbeat, and purging frequency, what is the most appropriate next step?', ['R2'], [
      O('a', 'Refer her for prompt medical evaluation, including electrolytes and an ECG, while starting outpatient counseling.', 3,
        { r: 'Urgent medical evaluation', approach: 'Determine level of care with medical input', why: 'Frequent purging with dizziness and palpitations can signal electrolyte imbalance and cardiac risk; medical evaluation sets whether outpatient care is safe', keys: ['racing heartbeat', 'dizziness', 'about five purges a week'], mistake: 'Starting counseling without medical evaluation of purging complications' }),
      O('b', 'Begin weekly counseling and recommend that she see a doctor sometime this semester if symptoms continue.', -1,
        { r: 'Underestimates medical risk', approach: 'Routine-care framing', why: 'Palpitations and dizziness with frequent purging need prompt medical assessment, not a deferred visit', keys: ['palpitations'], mistake: 'Treating medical warning signs as routine' }),
      O('c', 'Arrange residential eating disorder treatment right away, since bulimia with any symptoms needs 24-hour care.', 0,
        { r: 'Over-restrictive without evaluation', approach: 'Highest-care framing', why: 'Residential care may be needed if medically unstable, but the level of care should follow medical evaluation; erring high is safer than missing risk', keys: ['not yet medically evaluated'], mistake: 'Choosing level of care before medical assessment' }),
      O('d', 'Recommend she drink a sports drink after purging to replace lost electrolytes until she can see a doctor.', -2,
        { r: 'Outside scope and unsafe', approach: 'Self-management framing', why: 'Advising on electrolyte replacement is beyond counselor scope and may mask dangerous imbalances', keys: ['no medical evaluation'], mistake: 'Giving medical advice instead of referring' }),
    ]),
    Q('q3', 'profdev', 'intake', 'The counselor, a former collegiate rower, notices herself admiring Hana’s discipline and comparing their bodies. What should she do?', ['R3'], [
      O('a', 'Share her own rowing history with Hana to build rapport around their common experience as college athletes.', -1,
        { r: 'Self-disclosure serves the counselor', approach: 'Shared-identity framing', why: 'Disclosure here centers the counselor and can reinforce body comparison', keys: ['comparing bodies'], mistake: 'Using self-disclosure to manage countertransference' }),
      O('b', 'Reflect on the reaction, take it to supervision, and watch for praising discipline that may reinforce restriction.', 3,
        { r: 'Self-reflection and supervision', approach: 'Practice self-reflection', why: 'Admiring training discipline can unintentionally reinforce restriction; supervision helps her notice and manage this', keys: ['admiring discipline', 'comparing bodies'], mistake: 'Letting personal body attitudes enter the treatment' }),
      O('c', 'Refer Hana to a counselor with no athletic background, since her own history makes her unable to be objective.', 0,
        { r: 'Premature referral', approach: 'Refer-out framing', why: 'Athletic background can be an asset once reactions are examined; referral is for reactions that cannot be managed', keys: ['reaction just noticed'], mistake: 'Treating any countertransference as disqualifying' }),
      O('d', 'Praise Hana’s discipline openly, since recognizing her strengths will help motivate her during treatment.', -2,
        { r: 'Reinforces the disorder', approach: 'Strength-praise framing', why: 'Praising discipline around training and weight can reinforce restriction that drives the binge-purge cycle', keys: ['restricts to “stay light”'], mistake: 'Praising eating-disorder-linked behavior as a strength' }),
    ]),
    Q('q4', 'profdev', 'intake', 'Which treatment approach has the strongest evidence for adults with bulimia nervosa?', ['R2'], [
      O('a', 'Psychodynamic therapy exploring early family relationships as the underlying root cause of her binge-purge cycle.', -1,
        { r: 'Not first-line', approach: 'Insight-first framing', why: 'Psychodynamic therapy is not first-line for bulimia in adults; CBT-ED has the strongest support', keys: ['adult with BN'], mistake: 'Choosing an approach without checking the evidence base' }),
      O('b', 'Eating-disorder-focused CBT targeting regular eating, binge-purge cycles, and shape and weight concerns.', 3,
        { r: 'CBT-ED is first-line', approach: 'Know empirically supported interventions', why: 'Guidelines recommend eating-disorder-focused CBT for adults with bulimia, targeting regular eating, binge-purge cycles, and overvaluation of shape', keys: ['binge-purge cycle', 'restricts by day'], mistake: 'Not matching treatment to the evidence base' }),
      O('c', 'Mindfulness-based stress reduction to help her manage the ongoing pressure of daily training and racing.', 0,
        { r: 'Adjunct, not core', approach: 'Stress-reduction framing', why: 'Mindfulness may help with stress but does not target the binge-purge cycle directly', keys: ['training stress'], mistake: 'Choosing an adjunct as the main treatment' }),
      O('d', 'A structured weight-loss plan so she can meet team weigh-in targets without needing to purge.', -2,
        { r: 'Reinforces the disorder', approach: 'Weight-loss framing', why: 'Dieting drives the restriction-binge cycle; a weight-loss plan worsens bulimia', keys: ['restricts to “stay light”'], mistake: 'Treating weight goals as part of the cure' }),
    ]),

    // ---------------- session1 (4) ----------------
    Q('q5', 'planning', 'session1', 'Which initial treatment plan best fits Hana’s needs?', ['R2'], [
      O('a', 'CBT-ED with regular eating as the first target, medical monitoring of her potassium, and a sports dietitian.', 3,
        { r: 'CBT-ED plus medical and nutrition', approach: 'Develop an initial treatment plan', why: 'CBT-ED starts with regular eating to break the restriction-binge cycle, with medical monitoring for low potassium and dietitian support for fueling', keys: ['potassium 3.1', 'restricts during day'], mistake: 'Treating psychological symptoms without medical and nutrition coordination' }),
      O('b', 'Focus first on stopping her vomiting through willpower and accountability, adding other work once purging ends.', -1,
        { r: 'Targets the wrong link', approach: 'Purge-first framing', why: 'Restriction drives bingeing, which drives purging; regular eating, not willpower, breaks the cycle', keys: ['“just stop throwing up”'], mistake: 'Targeting purging before the restriction that drives it' }),
      O('c', 'CBT-ED alone, since the medical team can handle her potassium separately without coordination with counseling.', 0,
        { r: 'Right therapy, siloed care', approach: 'Silo framing', why: 'CBT-ED is correct, but bulimia care needs team coordination, especially with low potassium', keys: ['physician asked to be informed'], mistake: 'Leaving medical monitoring uncoordinated' }),
      O('d', 'Have her stop swimming entirely until she has gone four weeks without purging, then resume counseling goals.', -2,
        { r: 'Punitive and unsupported', approach: 'Remove-the-sport framing', why: 'Participation decisions belong to the medical team based on safety; an arbitrary ban can feel punitive and drive secrecy', keys: ['wants to keep training'], mistake: 'Using sport removal as a counseling consequence' }),
    ]),
    Q('q6', 'planning', 'session1', 'Which goal is the best SMART objective for Hana’s first month of CBT-ED?', ['R7'], [
      O('a', 'Hana will stop purging completely by the end of the month so that she can return to full training safely.', -2,
        { r: 'Unrealistic for month one', approach: 'Abstinence-now framing', why: 'Immediate abstinence is unrealistic and sets her up to feel like a failure', keys: ['five purges a week'], mistake: 'Setting an all-or-nothing early goal' }),
      O('b', 'Hana will feel better about her body and her eating by the end of the semester, as reported in session.', -1,
        { r: 'Vague and unmeasurable', approach: 'Global-feeling framing', why: 'No behavior, measure, or time frame makes progress impossible to track', keys: ['SMART criteria'], mistake: 'Writing a hope rather than an objective' }),
      O('c', 'Within four weeks, Hana will eat three meals and two snacks on at least five days a week, tracked in her log.', 3,
        { r: 'Specific, measurable, time-bound', approach: 'Develop SMART objectives', why: 'Regular eating is the first CBT-ED target; the goal is specific, measurable through her log, achievable, and time-bound', keys: ['restricts during day', 'self-monitoring'], mistake: 'Skipping regular eating as the first measurable target' }),
      O('d', 'Within four weeks, Hana will reduce her purging episodes by half and avoid eating foods that tend to trigger binges.', 0,
        { r: 'Measurable but adds restriction', approach: 'Food-avoidance framing', why: 'Halving purging is measurable, but avoiding trigger foods adds restriction that fuels bingeing', keys: ['restriction-binge cycle'], mistake: 'Building food avoidance into early goals' }),
    ]),
    Q('q7', 'indirect', 'session1', 'The campus physician asks to be kept informed. How should the counselor coordinate with the medical team?', ['R5'], [
      O('a', 'Coordinate within Hana’s releases, sharing her purging frequency and agreeing on how medical status guides training.', 3,
        { r: 'Coordinate care within releases', approach: 'Collaborate with other providers', why: 'Sharing purging frequency and aligning on medical criteria for training keeps her safe and the team consistent', keys: ['potassium 3.1', 'ECG pending', 'releases signed'], mistake: 'Leaving medical decisions about training uncoordinated' }),
      O('b', 'Let the physician manage the medical side alone, since sharing counseling information could damage Hana’s trust.', 0,
        { r: 'Siloed care', approach: 'Separate-lanes framing', why: 'She signed releases so the team could coordinate; low potassium makes coordination important', keys: ['release signed'], mistake: 'Not using a release meant to support coordination' }),
      O('c', 'Send the physician her full session notes so the medical team understands all of Hana’s emotional struggles.', -1,
        { r: 'Exceeds minimum necessary', approach: 'Send-everything framing', why: 'The physician needs clinically relevant information, not full notes', keys: ['minimum necessary'], mistake: 'Oversharing under a release' }),
      O('d', 'Ask the physician to clear Hana for full training so she stays motivated, since swimming is central to who she is.', -2,
        { r: 'Pressures medical judgment', approach: 'Advocate-for-clearance framing', why: 'Pushing for clearance despite low potassium and a pending ECG puts her at medical risk', keys: ['potassium 3.1', 'pending ECG'], mistake: 'Putting motivation ahead of medical safety' }),
    ]),
    Q('q8', 'indirect', 'session1', 'The head athletic trainer, covered by Hana’s release, calls asking what she is being treated for. How should the counselor respond?', ['R5'], [
      O('a', 'Share only what the release covers and the trainer needs, such as attendance and medical guidance on practice.', 3,
        { r: 'Minimum necessary under the release', approach: 'Collaborate with support systems', why: 'The trainer needs participation guidance, not clinical detail; sharing within the release supports Hana while protecting her privacy', keys: ['release for trainer', 'no release for coach'], mistake: 'Either withholding authorized coordination or oversharing' }),
      O('b', 'Explain the diagnosis and ask the trainer to pass it on to the coach so that weigh-ins can be changed.', -2,
        { r: 'Discloses to someone not authorized', approach: 'Pass-it-on framing', why: 'Hana did not authorize disclosure to her coach; asking the trainer to relay it breaches her consent', keys: ['no release for coach'], mistake: 'Using an authorized party to reach an unauthorized one' }),
      O('c', 'Decline to confirm anything about Hana, since athletic department staff should not be involved in counseling matters.', 0,
        { r: 'Ignores a valid release', approach: 'Refuse-all framing', why: 'Hana authorized coordination with the trainer; refusing everything blocks safety planning for practice', keys: ['release signed'], mistake: 'Treating confidentiality as a bar to authorized disclosure' }),
      O('d', 'Describe her binge-purge pattern in detail so that the trainer can watch for vomiting at practice.', -1,
        { r: 'More detail than needed', approach: 'Surveillance framing', why: 'Detailed clinical information exceeds the trainer’s role and may turn staff into monitors', keys: ['minimum necessary'], mistake: 'Sharing clinical detail beyond the purpose of the release' }),
    ]),

    // ---------------- session2 (5) ----------------
    Q('q9', 'interventions', 'session2', 'After a poor race and two binge-purge episodes, Hana says, “I’ve ruined everything. I’m a failure at this too.” The best response is:', ['R6'], [
      O('a', '“You haven’t ruined anything. Everyone slips up, so just forget about this and start fresh tomorrow.”', -1,
        { r: 'Reassures and skips learning', approach: 'Reassure-and-move-on framing', why: 'Reassurance dismisses her distress and skips reviewing what led to the lapse', keys: ['“I’ve ruined everything”'], mistake: 'Moving past a lapse without learning from it' }),
      O('b', '“It sounds like this week feels like proof you’ve failed. Can we look at your log to see what led up to it?”', 3,
        { r: 'Reflect, then analyze the lapse', approach: 'Cognitive restructuring', why: 'Reflecting her all-or-nothing thinking and reviewing her log turns a lapse into learning', keys: ['self-monitoring log', 'poor race'], mistake: 'Accepting all-or-nothing thinking about a lapse' }),
      O('c', '“If you keep having episodes like this, we may need to think about a higher level of care for you.”', -2,
        { r: 'Threatens instead of helps', approach: 'Escalation-threat framing', why: 'Two episodes after a stressor is a lapse, not grounds for escalation; the threat increases shame', keys: ['lapse after poor race'], mistake: 'Using level of care as a threat' }),
      O('d', '“Let’s talk about the race. What do you think went wrong in the water that day, and how can you fix it?”', 0,
        { r: 'Focuses on sport, not the cycle', approach: 'Performance framing', why: 'Exploring the race is relevant, but focusing on fixing performance misses her self-criticism and the eating cycle', keys: ['“failure at this too”'], mistake: 'Following the performance thread instead of the lapse' }),
    ]),
    Q('q10', 'interventions', 'session2', 'Hana says, “Coach says lighter swimmers are faster, and my aunties say I look skinny.” How should the counselor respond?', ['R6'], [
      O('a', 'Explore what these messages mean to her, including family meals and sport culture, and how they shape her eating.', 3,
        { r: 'Explore cultural and sport context', approach: 'Explore culture, context, and values', why: 'Sport culture and Native Hawaiian family food traditions both shape her eating; exploring their meaning helps her navigate them', keys: ['coach’s message', 'aunties want her to eat'], mistake: 'Ignoring the cultural and sport context of the eating disorder' }),
      O('b', 'Tell her the coach is wrong and her aunties are right, so she should simply follow her family’s advice about eating.', -1,
        { r: 'Takes sides', approach: 'Side-taking framing', why: 'Taking sides oversimplifies conflicting messages and does not help her sort them out', keys: ['conflicting messages'], mistake: 'Resolving the conflict for the client' }),
      O('c', 'Suggest she avoid family meals for now, since pressure to eat more could trigger more binges at home.', -2,
        { r: 'Promotes isolation and restriction', approach: 'Avoidance framing', why: 'Avoiding family meals removes support and adds restriction, which fuels bingeing', keys: ['close family ties'], mistake: 'Treating family meals as the problem' }),
      O('d', 'Explain that a lighter weight does not reliably mean faster times, then move on to her meal plan for the week.', 0,
        { r: 'Psychoeducation without exploration', approach: 'Correct-the-myth framing', why: 'Correcting the myth helps, but moving on skips her experience of both messages', keys: ['coach’s message'], mistake: 'Educating without exploring meaning' }),
    ]),
    Q('q11', 'interventions', 'session2', 'Which CBT-ED intervention should the counselor emphasize now that Hana is keeping a log?', ['R2'], [
      O('a', 'Have her weigh herself daily and record it in her log so that she can see her weight staying stable.', -1,
        { r: 'Increases weight focus', approach: 'Frequent-weighing framing', why: 'CBT-ED uses weekly in-session weighing; daily weighing heightens weight preoccupation', keys: ['team weigh-ins'], mistake: 'Increasing weighing frequency' }),
      O('b', 'Focus sessions on her feelings about racing and leave the log for her to keep as a private journal.', 0,
        { r: 'Underuses the log', approach: 'Feelings-only framing', why: 'Emotions matter, but the log is a core CBT-ED tool that should guide sessions', keys: ['using a log'], mistake: 'Ignoring self-monitoring data in sessions' }),
      O('c', 'Have her list her forbidden foods and agree to avoid them until her bingeing is under control.', -2,
        { r: 'Adds restriction', approach: 'Forbidden-foods framing', why: 'Rigid food avoidance fuels the restriction-binge cycle', keys: ['restriction-binge cycle'], mistake: 'Treating avoidance as binge prevention' }),
      O('d', 'Review the log for patterns linking skipped meals to later binges and build a regular eating schedule.', 3,
        { r: 'Use the log to target restriction', approach: 'Implement empirically supported interventions', why: 'Linking daytime restriction to later binges in her log shows why regular eating is the first target', keys: ['restricts during day', 'self-monitoring log'], mistake: 'Collecting logs without using them to change eating patterns' }),
    ]),
    Q('q12', 'legal', 'session2', 'Hana will spend the summer in a non-Compact state where the counselor is not licensed and wants to continue by video. What should the counselor do?', ['R4', 'R3'], [
      O('a', 'Continue sessions by video, since the counselor’s license in Oregon covers clients wherever they travel.', -2,
        { r: 'Practicing without authorization', approach: 'Home-license framing', why: 'Practice is governed by the client’s location; without a license or authorization there, the counselor would be practicing unlawfully', keys: ['non-Compact state', 'not licensed there'], mistake: 'Assuming the counselor’s license travels with the client' }),
      O('b', 'Check that state’s rules on temporary practice and, if not allowed, plan a transition to a licensed provider there.', 3,
        { r: 'Follow the client-location rule', approach: 'Practice within license portability', why: 'The counselor checks whether the state allows temporary practice; if not, she coordinates a transition to a licensed provider there', keys: ['non-Compact state', 'summer at home'], mistake: 'Continuing care across state lines without checking authorization' }),
      O('c', 'End treatment for the summer and resume in the fall, since gaps in care are common for college students.', -1,
        { r: 'Unplanned interruption', approach: 'Pause framing', why: 'A summer gap without a plan risks relapse in an active eating disorder', keys: ['recent lapse', 'low potassium history'], mistake: 'Accepting an unplanned gap in care' }),
      O('d', 'Continue by video but call the sessions coaching, since coaching is not regulated as counseling in most states anyway.', 0,
        { r: 'Relabeling does not change practice', approach: 'Relabel framing', why: 'Providing the same clinical service under another name is still counseling', keys: ['ongoing CBT-ED'], mistake: 'Renaming services to avoid licensure rules' }),
    ]),
    Q('q13', 'legal', 'session2', 'Hana is on her parents’ insurance and asks that they not learn of her treatment. What is the most appropriate response?', ['R5', 'R7'], [
      O('a', 'Bill using a general medical code so the explanation of benefits will not reveal her eating disorder treatment to them.', -2,
        { r: 'Insurance fraud', approach: 'Code-switching framing', why: 'Billing a code that does not reflect the service is fraudulent', keys: ['accurate coding required'], mistake: 'Altering claims to protect privacy' }),
      O('b', 'Assure her that her parents will not find out, since she is an adult and her records are confidential.', -1,
        { r: 'Overpromises', approach: 'Reassurance framing', why: 'Explanations of benefits may go to the policyholder; promising secrecy is inaccurate', keys: ['parents’ insurance'], mistake: 'Ignoring how insurance communications work' }),
      O('c', 'Explain that the insurer may send notices to the policyholder and review confidential communications or self-pay.', 3,
        { r: 'Inform and review options', approach: 'Engage in billing processes accurately', why: 'She can request that the insurer send communications to her privately or choose self-pay; claims must still be accurate', keys: ['adult client', 'parents’ policy'], mistake: 'Either overpromising privacy or altering claims' }),
      O('d', 'Tell her the only option is to self-pay, since using her parents’ insurance means they will know everything.', 0,
        { r: 'Incomplete options', approach: 'Self-pay-only framing', why: 'Self-pay is one option, but confidential communication requests to the insurer are another', keys: ['HIPAA confidential communications'], mistake: 'Omitting the confidential communications option' }),
    ]),
  ],
};

module.exports = { CASES: [D950, D951, D952, D953, D954] };
