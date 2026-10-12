// deep-cases-2027-batch-12.js — NCMHCE deep cases, 2027 NCMHCE specification; hand-authored; validate with check2027.js
//
// ncmhce-D975 · plan 5 · Sexual-Gender · easy   · adult — Erectile Disorder (F52.21)
// ncmhce-D976 · plan 6 · Ethics        · medium · adult — Informed Consent / Competence Dilemma (Z65.8)
// ncmhce-D977 · plan 7 · Ethics        · hard   · adult — Boundary / Dual-Relationship Dilemma (Z65.8)
// ncmhce-D978 · plan 8 · Ethics        · hard   · adult — Confidentiality / Duty-to-Warn Dilemma (Z65.3)
//
// Ethics cases follow tools/cases/blueprint.js: the given "diagnosis" is the
// dilemma name/code; differentialOptions are the competing dilemma framings.
//
// Standalone deliverable for SME review. Do NOT auto-import.

const SECTION = {
  profdev: 'intake', assess: 'intake',
  planning: 'session1', indirect: 'session1',
  interventions: 'session2', legal: 'session2',
};

const O = (id, text, weight, ex) => ({
  id,
  text,
  isCorrect: weight === 3,
  weight,
  rationale: ex.r,
  explanation: { approach: ex.approach, rationale: ex.why, keyIndicators: ex.keys, commonMistake: ex.mistake },
});
const Q = (id, domain, question, evidenceRef, options) =>
  ({ id, domain, section: SECTION[domain], question, evidenceRef, options });

// ============================================================================
// D975 — Erectile Disorder (easy, plan 5)
// ============================================================================
const D975 = {
  id: 'ncmhce-D975',
  plan: 5,
  population: 'adult',
  title: 'A bus-fleet supervisor with diabetes stops trusting his body in the bedroom',
  category: 'Sexual-Gender',
  difficulty: 'easy',
  primaryDiagnosis: { name: 'Erectile Disorder', code: 'F52.21' },
  diagnosis: { name: 'Erectile Disorder', code: 'F52.21' },
  differentialOptions: [
    { id: 'do1', name: 'Male Hypoactive Sexual Desire Disorder', isCorrect: false },
    { id: 'do2', name: 'Substance/Medication-Induced Sexual Dysfunction', isCorrect: false },
    { id: 'do3', name: 'Erectile Disorder', isCorrect: true },
    { id: 'do4', name: 'Major Depressive Disorder, Single Episode, Mild', isCorrect: false },
  ],
  narrative: {
    intake:
      'Tomasi Fifita, a 52-year-old Tongan American maintenance supervisor for a city bus fleet in Salt Lake City, self-refers to a community ' +
      'counseling practice. He has had type 2 diabetes for eight years, treated with metformin by his primary care physician, and says his last A1C ' +
      'was "in the good range." For about seven months he has been unable to keep an erection during sex with Losana, his wife of 24 years, on roughly ' +
      'four of every five attempts. It began the night he "lost it" after a double shift; since then he watches himself anxiously during intimacy and ' +
      '"freezes up." He still wakes with erections some mornings. He has not told his physician because "that is not something you say to a doctor," ' +
      'and says that in his family "men do not talk about this—I almost did not come." He feels ashamed, now goes to bed after Losana falls asleep, ' +
      'and she has asked whether he still finds her attractive. Sexual desire is unchanged. He drinks two or three beers on weekends, does not smoke, ' +
      'takes no other medications, and on screening denies depressed mood, loss of interest, or suicidal thoughts. He is active in his Methodist church ' +
      'and coaches youth rugby. His counselor, Hannah, a recently licensed LPC, notices she feels awkward asking detailed sexual questions; her only ' +
      'training on sexual concerns was one graduate-school lecture.',
    session1:
      'At the counselor\'s suggestion Tomasi brings Losana, 49, to the second session. Losana moved from Tonga 12 years ago; she manages ' +
      'conversational English but is more comfortable discussing personal matters in Tongan, and at the start Tomasi offers to "just translate for ' +
      'her." Losana says she has feared he is seeing someone else or no longer wants her; Tomasi insists the problem is "all me." Both want to feel ' +
      'close again and say they almost never talk about sex. Tomasi agrees to see his physician and signs a release allowing the counselor to ' +
      'communicate with the physician\'s office. The counselor plans conjoint sessions as part of Tomasi\'s treatment, billed to his employer insurance.',
    session2:
      'Two sessions later, with a Tongan-language interpreter present, the couple reports that the physician found good glucose control and no signs ' +
      'of nerve or blood-vessel complications, and prescribed tadalafil as needed. Tomasi says it "helps some" but gives him a headache, and he still ' +
      'catches himself "checking" whether it is working. Losana now understands the problem is not about her but says he still avoids touching her ' +
      'outside the bedroom. Tomasi asks to hold the next session by video from home because of his shift schedule and asks whether his insurance ' +
      'company will "read about our sex life." After the session Losana emails the counselor from her personal account asking for a copy of the ' +
      'session notes "so I can show my sister I am not the problem."',
  },
  diagnosticRationale:
    'Tomasi has had marked difficulty maintaining an erection on roughly 75–100% of partnered occasions for about seven months, with clear distress and ' +
    'relationship strain, meeting the core DSM-5-TR criteria for erectile disorder. Desire is intact (not hypoactive desire), he takes no medication ' +
    'linked to sexual dysfunction and drinks lightly, and he denies a depressive syndrome. Situational onset after a stressful night, preserved morning ' +
    'erections, and anxious self-monitoring point to a strong psychological component; because diabetes is a known vascular and neuropathic risk factor, ' +
    'medical evaluation is coordinated first, and the physician\'s normal findings support the diagnosis.',
  references: [
    { id: 'R1', source: 'DSM-5-TR', detail: 'Erectile disorder: difficulty obtaining/maintaining erection on ~75–100% of occasions, ≥6 months, clinically significant distress; rule out medical/substance causes' },
    { id: 'R2', source: 'Hays (Assessment)', detail: 'Biopsychosocial assessment including medical history, medications, substance use, and culturally responsive interviewing' },
    { id: 'R3', source: 'Corey (Theory & Practice)', detail: 'Cognitive-behavioral and couples approaches: anxiety reduction, graded nondemand behavioral tasks, communication skills' },
    { id: 'R4', source: 'ACA Code of Ethics', detail: 'C.2.a.–C.2.b. boundaries of competence and new specialty areas; B.4.b. couples/family confidentiality; H.2 informed consent in distance counseling' },
    { id: 'R5', source: 'HIPAA', detail: 'Authorization for release of PHI, minimum necessary standard, and disclosures to health plans for payment' },
    { id: 'R6', source: 'Wiger (Documentation)', detail: 'Treatment plans with measurable objectives; documentation that supports medical necessity for each billed service' },
  ],
  questions: [
    // ---------------- intake ----------------
    Q('q1', 'profdev', 'Hannah notices her discomfort with sexual questions and her limited training. What is her most appropriate step?', ['R4'], [
      O('a', 'Seek consultation and focused training on sexual concerns while serving Tomasi within her current competence.', 3,
        { r: 'Consult and train while practicing within competence', approach: 'Close the gap responsibly', why: 'A generalist can treat a common sexual concern with consultation and targeted training; competence standards call for building skills rather than avoiding or abandoning the work', keys: ['one graduate lecture on sexual concerns', 'feels awkward asking sexual questions'], mistake: 'Treating a closable skill gap as a reason either to avoid the topic or to refer out' }),
      O('b', 'Transfer Tomasi to a certified sex therapist right away, since sexual concerns are beyond a general counselor\'s scope.', -1,
        { r: 'Premature referral', approach: 'Refer-out reflex', why: 'Erectile problems with a performance-anxiety component are within a trained generalist\'s reach; an abrupt transfer of a client who "almost did not come" risks losing him', keys: ['almost did not come', 'common presentation'], mistake: 'Assuming any sexual concern automatically requires a specialist' }),
      O('c', 'Keep her sexual questions brief and general so her discomfort does not show, and center sessions on work stress.', -2,
        { r: 'Avoids the presenting problem', approach: 'Avoidance framing', why: 'Steering away from the sexual concern to manage the counselor\'s comfort leaves the presenting problem unassessed and models the shame he already feels', keys: ['presenting problem is sexual', 'client shame'], mistake: 'Letting counselor discomfort set the clinical agenda' }),
      O('d', 'Rely on her general counseling skills and read about erectile problems on her own as questions come up in sessions.', 0,
        { r: 'Self-study without consultation', approach: 'Go-it-alone framing', why: 'Reading helps, but without consultation or structured training her discomfort and knowledge gaps may go unchecked', keys: ['recently licensed', 'limited training'], mistake: 'Substituting ad hoc reading for consultation and training' }),
    ]),
    Q('q2', 'assess', 'Which finding most directly supports the given diagnosis of erectile disorder?', ['R1'], [
      O('a', 'His morning erections prove the problem is purely psychological, which is what the diagnosis of erectile disorder requires.', 0,
        { r: 'Suggestive, not diagnostic', approach: 'Etiology framing', why: 'Morning erections suggest a psychological contribution but do not prove one, and the core criteria are about frequency, duration, and distress', keys: ['wakes with erections some mornings'], mistake: 'Treating one etiologic clue as the defining diagnostic criterion' }),
      O('b', 'He has had trouble keeping an erection on about four of five attempts for seven months, causing him clear distress.', 3,
        { r: 'Frequency, duration, distress', approach: 'Match the core criteria', why: 'Erectile disorder requires difficulty on about 75–100% of occasions for at least six months with clinically significant distress', keys: ['four of every five attempts', 'about seven months', 'ashamed, avoids bedtime'], mistake: 'Diagnosing from a single symptom without checking frequency, duration, and distress' }),
      O('c', 'His shame and his habit of going to bed late show a problem with sexual desire rather than with sexual arousal.', -1,
        { r: 'Confuses avoidance with low desire', approach: 'Desire framing', why: 'He reports unchanged desire; avoidance here is a reaction to anticipated failure, not a desire disorder', keys: ['sexual desire unchanged'], mistake: 'Reading avoidance as hypoactive desire' }),
      O('d', 'He has diabetes, and erectile problems in men with diabetes are coded as erectile disorder without further evaluation.', -2,
        { r: 'Skips the medical rule-out', approach: 'Automatic-coding framing', why: 'The diagnosis requires that the problem not be fully explained by a medical condition; diabetes calls for medical evaluation, not automatic coding', keys: ['type 2 diabetes eight years'], mistake: 'Ignoring the medical-condition exclusion when a risk factor is present' }),
    ]),
    Q('q3', 'assess', 'What additional information is most important to gather at intake?', ['R2'], [
      O('a', 'A detailed history of his past partners and any affairs, to test whether Losana\'s suspicion has any basis.', -1,
        { r: 'Off-target and alliance-damaging', approach: 'Investigative framing', why: 'Probing for affairs is not indicated by anything he reports and can shame him; it does not inform the medical or anxiety picture', keys: ['problem began after a double shift'], mistake: 'Chasing a partner\'s worry instead of the clinical picture' }),
      O('b', 'A depression screen at every session from now on, since depression is the likeliest cause of his erectile problem.', 0,
        { r: 'Reasonable but misprioritized', approach: 'Depression-first framing', why: 'Monitoring mood is sensible, but he denies depressive symptoms; the bigger gap is his medical and medication picture', keys: ['denies depressed mood or loss of interest'], mistake: 'Fixing on a comorbidity he has screened negative for' }),
      O('c', 'His diabetes care, current medications, alcohol use, and when his physician last examined him for complications.', 3,
        { r: 'Medical and substance context', approach: 'Biopsychosocial rule-out', why: 'Diabetes, medications, and alcohol can all contribute to erectile problems; knowing his medical care shapes the referral and the diagnosis', keys: ['type 2 diabetes', 'has not told his physician', 'weekend beer'], mistake: 'Skipping the medical and substance history in a client with a known risk factor' }),
      O('d', 'No medical history is needed, because the problem started after a stressful night and so must be psychological.', -2,
        { r: 'Rules out medical causes by assumption', approach: 'Psychogenic-only framing', why: 'A stressful trigger does not exclude vascular or nerve contributions, which are common in diabetes', keys: ['diabetes risk factor'], mistake: 'Assuming a psychological trigger rules out a medical cause' }),
    ]),
    Q('q4', 'profdev', 'Tomasi says men in his family do not talk about sex. How should Hannah attend to culture at this point?', ['R2', 'R4'], [
      O('a', 'Assume he would prefer a male counselor given his background, and arrange a transfer before the next session.', -2,
        { r: 'Acts on a stereotype', approach: 'Assumption-driven transfer', why: 'Transferring him on an untested cultural assumption disrupts care and stereotypes him; preferences are asked, not presumed', keys: ['came despite reluctance'], mistake: 'Acting on cultural assumptions without asking the client' }),
      O('b', 'Set culture aside and treat him like any other client, so that she does not risk stereotyping him in any way.', -1,
        { r: 'Colorblind stance', approach: 'Culture-neutral framing', why: 'Ignoring culture misses meaning he named himself—family norms about discussing sex and his church life', keys: ['"men do not talk about this"', 'active church member'], mistake: 'Equating cultural humility with ignoring culture' }),
      O('c', 'Read general material on Pacific Islander gender roles and apply those norms when planning his treatment.', 0,
        { r: 'Learning is fine; applying generalizations is not', approach: 'Group-norm framing', why: 'Background reading helps, but applying group norms to an individual risks overgeneralizing', keys: ['individual meanings vary'], mistake: 'Applying group generalizations to one client' }),
      O('d', 'Reflect on her own assumptions and ask Tomasi what his family, faith, and culture mean for talking about this.', 3,
        { r: 'Self-reflection plus client-led exploration', approach: 'Cultural humility', why: 'Examining her own assumptions and inviting his perspective lets culture inform care without stereotyping', keys: ['"I almost did not come"', 'church and family norms'], mistake: 'Either ignoring culture or assuming its meaning for the client' }),
    ]),
    // ---------------- session1 ----------------
    Q('q5', 'indirect', 'Tomasi has signed a release for his physician\'s office. How should the counselor coordinate care?', ['R5'], [
      O('a', 'Request his full medical record so she can judge for herself whether his diabetes has caused nerve damage.', -1,
        { r: 'Exceeds need and scope', approach: 'Records-gathering framing', why: 'Judging diabetic complications is medical work; requesting the entire record also exceeds the minimum necessary', keys: ['physician evaluates complications'], mistake: 'Taking on medical judgment and over-collecting records' }),
      O('b', 'Send the physician a brief note on his erectile concern and ask for an evaluation, sharing only what is needed.', 3,
        { r: 'Targeted, consented coordination', approach: 'Collaborate with the prescriber', why: 'With a signed release, a focused note prompts medical evaluation and keeps disclosure to the minimum necessary', keys: ['signed release', 'has not told his physician'], mistake: 'Either skipping coordination or over-sharing session content' }),
      O('c', 'Leave it to Tomasi to raise the concern with his doctor, since contacting the physician could embarrass him.', 0,
        { r: 'Leaves the gap open', approach: 'Client-only framing', why: 'Encouraging him is good, but he has avoided telling his doctor for months; with consent, coordination closes the gap', keys: ['"not something you say to a doctor"'], mistake: 'Relying on a client to complete a step he has avoided' }),
      O('d', 'Ask Losana to call the physician\'s office herself and explain the problem, since she is affected by it as well.', -2,
        { r: 'Routes PHI through a third party', approach: 'Delegate-to-spouse framing', why: 'The release covers the counselor, not his wife; asking her to relay his health information bypasses his control of his own care', keys: ['release names the counselor'], mistake: 'Using a family member to carry out a clinical coordination task' }),
    ]),
    Q('q6', 'planning', 'Which initial treatment plan best fits Tomasi\'s presentation?', ['R1', 'R3'], [
      O('a', 'Begin with a medical evaluation of his diabetes-related risk, then couple-based work on anxiety and communication.', 3,
        { r: 'Medical evaluation first, then couple work', approach: 'Rule out, then treat', why: 'Diabetes is a vascular and nerve risk factor, so medical evaluation comes first; couple-based anxiety reduction and communication then target the maintaining factors', keys: ['type 2 diabetes', 'performance anxiety', 'couple rarely talks about sex'], mistake: 'Starting sex-focused work before medical contributors are evaluated' }),
      O('b', 'Start graded touching exercises with the couple this week, and consider medical input only if they do not help.', -1,
        { r: 'Skips the medical step', approach: 'Behavioral-first framing', why: 'The exercises are useful, but deferring medical evaluation in a man with diabetes reverses the indicated sequence', keys: ['diabetes risk factor'], mistake: 'Treating medical evaluation as a fallback instead of a first step' }),
      O('c', 'Individual cognitive therapy for performance anxiety, keeping Losana out of treatment to protect his privacy.', 0,
        { r: 'Helpful but leaves out the couple', approach: 'Individual-only framing', why: 'CBT targets his anxiety, but Losana\'s fears and the couple\'s avoidance maintain the problem and both want to reconnect', keys: ['Losana fears he no longer wants her'], mistake: 'Treating a relational sexual problem as purely individual' }),
      O('d', 'Encourage him to try a friend\'s erection pills for a few weeks to rebuild confidence before addressing anxiety.', -2,
        { r: 'Unsafe and outside scope', approach: 'Borrowed-medication framing', why: 'Suggesting someone else\'s prescription is outside counselor scope and medically unsafe without evaluation', keys: ['no medical evaluation yet'], mistake: 'Advising medication use, which belongs to a prescriber' }),
    ]),
    Q('q7', 'indirect', 'Tomasi offers to "just translate" for Losana in the conjoint session. What should the counselor do?', ['R4'], [
      O('a', 'Accept his offer for this session, since Losana understands some English and the couple seems comfortable.', 0,
        { r: 'Convenient but compromised', approach: 'Family-interpreter framing', why: 'A spouse interpreting in a couples session filters her voice through the person whose behavior is being discussed', keys: ['Losana prefers Tongan for personal matters'], mistake: 'Accepting a family interpreter for convenience' }),
      O('b', 'Hold the session in English only and speak slowly, so Losana can follow along without anyone interpreting for her.', -1,
        { r: 'Ignores her language preference', approach: 'English-only framing', why: 'Conversational English is not enough for emotionally loaded material she prefers to discuss in Tongan', keys: ['more comfortable in Tongan'], mistake: 'Equating conversational English with full participation' }),
      O('c', 'Ask Losana to bring a bilingual friend from church who can interpret for her during the counseling sessions.', -2,
        { r: 'Privacy breach risk', approach: 'Community-interpreter framing', why: 'A church acquaintance would hear intimate details in a close-knit community, risking confidentiality and candor', keys: ['shared church community', 'sexual content'], mistake: 'Using an untrained acquaintance for sensitive clinical interpreting' }),
      O('d', 'Arrange a qualified Tongan-language interpreter so that Losana can speak for herself in her preferred language.', 3,
        { r: 'Qualified interpreter', approach: 'Secure translation services', why: 'A trained interpreter lets each partner speak directly and keeps confidentiality, which matters most in couples work', keys: ['prefers Tongan', 'Tomasi offers to translate'], mistake: 'Letting a partner interpret in conjoint sessions' }),
    ]),
    Q('q8', 'planning', 'Which goal is the best-written SMART objective for the couple\'s plan?', ['R6'], [
      O('a', 'Tomasi will have intercourse three times weekly for a month so that he can rebuild confidence in his body.', -2,
        { r: 'Builds in performance pressure', approach: 'Performance-demand goal', why: 'A required intercourse schedule intensifies the anxious self-monitoring that maintains the problem', keys: ['"freezes up"', 'watches himself during intimacy'], mistake: 'Setting a goal that feeds the performance anxiety it should reduce' }),
      O('b', 'The couple will improve their sexual relationship and communicate better about intimacy over the coming months.', -1,
        { r: 'Not measurable or time-bound', approach: 'Global-goal framing', why: 'The aim is sound, but it lacks a measurable behavior and a time frame, so progress cannot be tracked', keys: ['SMART criteria'], mistake: 'Writing an aspiration instead of a measurable objective' }),
      O('c', 'Within eight weeks the couple will do three nondemand touching exercises weekly and rate closeness 7 of 10.', 3,
        { r: 'Specific, measurable, time-bound', approach: 'SMART objective', why: 'It names a behavior, frequency, rating, and timeline that are realistic and aimed at reducing pressure', keys: ['both want to feel close', 'avoids touching'], mistake: 'Omitting a measurable behavior or deadline' }),
      O('d', 'Tomasi will stop worrying about sex within two weeks by reminding himself that the problem is not his fault.', 0,
        { r: 'Unrealistic timeline', approach: 'Cognitive-only goal', why: 'Reframing helps, but eliminating worry in two weeks is not attainable and is hard to measure', keys: ['seven months of anxiety'], mistake: 'Setting an unattainable, poorly measurable target' }),
    ]),
    // ---------------- session2 ----------------
    Q('q9', 'interventions', 'Tomasi still "checks" whether the medication is working. Which psychoeducation fits best?', ['R3'], [
      O('a', 'Tell him the headache shows the dose is too high, so he should take half a tablet before the next attempt.', -2,
        { r: 'Medication advice outside scope', approach: 'Dose-adjustment framing', why: 'Changing a dose is a prescriber decision; the counselor encourages him to report side effects to his physician', keys: ['tadalafil headache'], mistake: 'Giving medication instructions as a counselor' }),
      O('b', 'Explain how watching for an erection fuels anxiety that blocks arousal, and how nondemand touch eases it.', 3,
        { r: 'Spectatoring and the anxiety cycle', approach: 'Psychoeducation on performance anxiety', why: 'Naming the self-monitoring cycle helps both partners see why pressure-free touch reduces anxiety and restores arousal', keys: ['"checking" whether it works', '"freezes up"'], mistake: 'Leaving the anxious self-monitoring unaddressed once medication starts' }),
      O('c', 'Assure him that the medication will solve the problem by itself once his body adjusts to it over a few weeks.', -1,
        { r: 'Overpromises a medical fix', approach: 'Medication-only framing', why: 'Medication helps blood flow but does not remove the anxious monitoring he describes', keys: ['"helps some"'], mistake: 'Treating medication as the whole answer to a mixed problem' }),
      O('d', 'Teach him a breathing exercise to use during sex when he notices himself worrying about losing the erection.', 0,
        { r: 'Useful but incomplete', approach: 'Coping-skill framing', why: 'Breathing can calm him, but without understanding the spectatoring cycle he keeps monitoring his body', keys: ['ongoing checking'], mistake: 'Teaching a coping tool without the explanatory framework' }),
    ]),
    Q('q10', 'interventions', 'Losana says Tomasi still avoids touching her outside the bedroom. How should the counselor respond?', ['R3'], [
      O('a', 'Reassure Losana that the avoidance will fade by itself once the medication starts working more reliably.', -1,
        { r: 'Premature reassurance', approach: 'Wait-it-out framing', why: 'Reassurance skips the couple\'s pattern; avoidance of affection is a relational habit that needs attention', keys: ['avoids touching outside the bedroom'], mistake: 'Closing an important relational topic with reassurance' }),
      O('b', 'Explain to Losana that men with erectile problems often withdraw, so she should give Tomasi more space for now.', -2,
        { r: 'Reinforces withdrawal', approach: 'Give-space framing', why: 'Advising more distance strengthens the avoidance cycle and leaves her fears unaddressed', keys: ['Losana feared he did not want her'], mistake: 'Recommending more distance in a couple already avoiding closeness' }),
      O('c', 'Ask Tomasi why he avoids her, and then suggest that he make a list of reasons to share at the next session.', 0,
        { r: 'Explores, but one-sided', approach: 'Individual-insight framing', why: 'Understanding his reasons helps, but the couple also needs a guided exchange in the room', keys: ['rarely talk about intimacy'], mistake: 'Turning a couples moment into individual homework' }),
      O('d', 'Help Losana voice her wish for everyday affection directly to Tomasi, and coach him to listen and reflect it back.', 3,
        { r: 'Facilitate direct couple communication', approach: 'Structured speaker–listener exchange', why: 'Guided, direct expression and reflection build the communication both partners said they lack', keys: ['both want to feel close', 'almost never talk about sex'], mistake: 'Talking about the couple instead of helping them talk to each other' }),
    ]),
    Q('q11', 'legal', 'Tomasi asks to hold the next session by video from home. What must the counselor do?', ['R4'], [
      O('a', 'Confirm telehealth consent, his location and privacy at each session, and an emergency contact and backup plan.', 3,
        { r: 'Telehealth safeguards', approach: 'Follow telehealth best practice', why: 'Distance counseling requires informed consent, verification of location and privacy each session, and a plan for emergencies and disconnections', keys: ['video from home', 'shift schedule'], mistake: 'Treating a video session as identical to an office visit' }),
      O('b', 'Agree and send him a link from her personal video app, since the session will be short and on a familiar topic.', -2,
        { r: 'Unsecured platform', approach: 'Convenience framing', why: 'Personal video apps may lack the safeguards required for protected health information', keys: ['sensitive sexual content'], mistake: 'Using a non-compliant platform for clinical sessions' }),
      O('c', 'Decline the request, since conjoint sessions on sexual concerns can only be conducted in person at the office.', -1,
        { r: 'Unneeded refusal', approach: 'In-person-only framing', why: 'Telehealth is appropriate for many couples sessions when safeguards are in place; refusal adds a barrier to care', keys: ['work schedule barrier'], mistake: 'Assuming sensitive topics rule out telehealth' }),
      O('d', 'Agree to the request and review telehealth risks only if a technical problem comes up during the video session.', 0,
        { r: 'Reactive rather than planned', approach: 'Fix-as-needed framing', why: 'Agreeing is reasonable, but consent and contingency planning must happen before the session, not after a failure', keys: ['first video session'], mistake: 'Leaving consent and backup planning until something goes wrong' }),
    ]),
    Q('q12', 'legal', 'Tomasi asks whether his insurer will "read about our sex life." What is the most appropriate response?', ['R5', 'R6'], [
      O('a', 'Tell him the insurer receives nothing but the date of service, so there is no need to worry about his privacy.', -1,
        { r: 'Inaccurate reassurance', approach: 'Minimize framing', why: 'Claims carry a diagnosis code and service information, and insurers may request records to support medical necessity', keys: ['employer insurance billing'], mistake: 'Giving inaccurate reassurance about what payers receive' }),
      O('b', 'Advise him to switch to paying out of pocket, without going over what the insurer would actually see in a claim.', 0,
        { r: 'An option, but uninformed', approach: 'Self-pay framing', why: 'Self-pay is a legitimate choice, but he needs accurate information to make it', keys: ['client asks a direct question'], mistake: 'Steering a decision without giving the facts behind it' }),
      O('c', 'Explain that claims carry a diagnosis code, notes record only what supports necessity, and self-pay is an option.', 3,
        { r: 'Accurate, informed choice', approach: 'Transparent billing disclosure', why: 'He deserves an accurate picture of what is shared with payers and his options, and notes should document necessity with minimum detail', keys: ['"read about our sex life"', 'conjoint sessions billed'], mistake: 'Either overpromising privacy or not explaining options' }),
      O('d', 'Offer to bill the sessions under an anxiety diagnosis so the claims do not show anything about his sexual concerns.', -2,
        { r: 'Billing fraud', approach: 'Diagnosis-substitution framing', why: 'Submitting a diagnosis that does not reflect the clinical picture to protect privacy is insurance fraud', keys: ['given diagnosis is erectile disorder'], mistake: 'Altering a diagnosis on a claim for the client\'s comfort' }),
    ]),
    Q('q13', 'legal', 'Losana emails from her personal account asking for a copy of the session notes. What should the counselor do?', ['R4', 'R5'], [
      O('a', 'Email her the notes, since she attended the conjoint sessions and the content is about her relationship.', -2,
        { r: 'Releases records without authorization', approach: 'Attendee-access framing', why: 'The notes are part of Tomasi\'s record; releasing them requires his written authorization and a secure channel', keys: ['sessions are part of Tomasi\'s treatment', 'personal email'], mistake: 'Assuming attending a session grants access to the client\'s record' }),
      O('b', 'Reply securely that the notes are in Tomasi\'s record and can be released only with his authorization.', 3,
        { r: 'Authorization and secure response', approach: 'Protect the record', why: 'Conjoint sessions billed under Tomasi\'s care are documented in his record; release requires his written authorization, handled securely', keys: ['conjoint sessions billed to Tomasi', 'request via personal email'], mistake: 'Releasing or discussing the record over an insecure channel without authorization' }),
      O('c', 'Ignore the email and wait to see whether she raises the request again at the next scheduled couples session.', -1,
        { r: 'Unresponsive', approach: 'Avoidance framing', why: 'Ignoring her request damages the alliance and leaves her without information about how records work', keys: ['Losana is part of treatment'], mistake: 'Avoiding a records request instead of answering it properly' }),
      O('d', 'Write Losana a short summary that she is not the problem, which she can share with her sister if she wishes.', 0,
        { r: 'Well-meant but unauthorized', approach: 'Summary-letter framing', why: 'A written summary is still a disclosure from Tomasi\'s record and needs his consent; the impulse to support her is understandable', keys: ['wants to show her sister'], mistake: 'Treating an informal summary as outside record-release rules' }),
    ]),
  ],
};

// ============================================================================
// D976 — Informed Consent / Competence Dilemma (medium, plan 6)
// ============================================================================
const D976 = {
  id: 'ncmhce-D976',
  plan: 6,
  population: 'adult',
  title: 'A pharmacist asks what "technology-assisted documentation" means, and her counselor cannot say',
  category: 'Ethics',
  difficulty: 'medium',
  primaryDiagnosis: { name: 'Informed Consent / Competence Dilemma', code: 'Z65.8' },
  diagnosis: { name: 'Informed Consent / Competence Dilemma', code: 'Z65.8' },
  differentialOptions: [
    { id: 'do1', name: 'Confidentiality / Duty-to-Warn Dilemma', isCorrect: false },
    { id: 'do2', name: 'Informed Consent / Competence Dilemma', isCorrect: true },
    { id: 'do3', name: 'Boundary / Dual-Relationship Dilemma', isCorrect: false },
    { id: 'do4', name: 'Mandated Reporting Decision', isCorrect: false },
  ],
  narrative: {
    intake:
      'Mai Nguyen, a 38-year-old Vietnamese American hospital pharmacist and mother of two in Houston, begins counseling with Andre Wallace, LPC, at ' +
      'a group practice that has just switched to a new telehealth platform with a built-in AI note-taker. For 14 months she has worried most days ' +
      'about dispensing errors, her children\'s health, and money, with restlessness, muscle tension, and broken sleep; her GAD-7 score is 14. She ' +
      'joins the first video session from her car in the hospital parking garage on her lunch break. The intake packet she e-signed has a single ' +
      'signature page covering both telehealth services and "technology-assisted documentation tools." She asks Andre what that phrase means and ' +
      'whether anything records her; he answers vaguely that it "helps with notes." Andre has been licensed three years; his only exposure to the ' +
      'AI tool was a 20-minute vendor demonstration. The practice manager has told staff the vendor is "HIPAA compliant per their website" and that ' +
      'its business associate agreement (BAA) is "being finalized." Andre feels irritated that manual notes add half an hour to his day, since the ' +
      'manager tracks note-completion times.',
    session1:
      'After Andre reads the vendor\'s terms and explains that the tool would record and transcribe sessions and send audio to the vendor for ' +
      'processing, Mai declines the AI note-taker but agrees to continue by telehealth, asking for evening sessions from her home office. She wants ' +
      'to worry less at work and sleep better. She also describes her worry as "constant, about everything," distinct from her focused, factual ' +
      'questions about her data. The platform went down twice last month during other clinicians\' sessions. The practice manager emails Andre that ' +
      'the BAA is "still pending" but asks him to "turn it on anyway—everyone else is."',
    session2:
      'At the fourth session Mai notices a "Transcribing" badge on her screen; a platform update had switched AI transcription on by default for all ' +
      'practice accounts, and it has been running for about ten minutes. She says sharply, "I told you no," and goes quiet. Later in the session she ' +
      'describes rechecking completed orders three or four times and lying awake replaying her shift. That week the manager announces that every ' +
      'clinician must use the AI note-taker starting next month and that clients who refuse "may need to find another practice."',
  },
  diagnosticRationale:
    'The case centers on informed consent and counselor competence with technology. A bundled, vague consent did not tell Mai what the AI tool does, ' +
    'Andre lacked the training to explain it, and the vendor had no signed BAA; consent for AI tools must be specific, and clients may refuse ' +
    'without losing services. The default-on transcription turns a consent problem into a possible privacy incident that the practice must assess. ' +
    'Mai\'s clinical picture (14 months of excessive, hard-to-control worry with restlessness, tension, and poor sleep; GAD-7 of 14) fits generalized ' +
    'anxiety disorder, but her specific, factual data questions are a reasonable exercise of her rights, not a symptom. Confidentiality and duty to ' +
    'warn, boundaries, and mandated reporting are not the central issues.',
  references: [
    { id: 'R1', source: 'ACA Code of Ethics', detail: 'A.2 informed consent; C.2.a. boundaries of competence; H.2 informed consent and security in distance counseling and technology' },
    { id: 'R2', source: 'HIPAA', detail: 'Business associate agreements; Privacy and Security Rules; breach risk assessment and notification for unauthorized disclosures' },
    { id: 'R3', source: 'NBCC Code of Ethics', detail: 'Competence before using technology; client rights to consent and refuse; protecting client records' },
    { id: 'R4', source: 'DSM-5-TR', detail: 'Generalized anxiety disorder: ≥6 months of excessive, hard-to-control worry with associated physical symptoms' },
    { id: 'R5', source: 'APA CPG', detail: 'CBT as a first-line psychotherapy for generalized anxiety; reducing safety behaviors such as checking' },
    { id: 'R6', source: 'Wiger (Documentation)', detail: 'Timely, accurate clinical notes; documenting informed consent and informed refusal' },
  ],
  questions: [
    // ---------------- intake ----------------
    Q('q1', 'assess', 'Mai joins the first video session from her car in a parking garage. What should Andre do before proceeding?', ['R1'], [
      O('a', 'Proceed with the session, since she has already e-signed the practice\'s telehealth consent page in the packet.', -2,
        { r: 'Signature is not informed consent', approach: 'Paperwork framing', why: 'A bundled e-signature does not show she understood telehealth risks, and nothing confirms her privacy or an emergency plan', keys: ['single signature page', 'car in a parking garage'], mistake: 'Treating a signed form as completed informed consent' }),
      O('b', 'Reschedule for an in-person intake at the office, since telehealth is not suitable for a new client\'s first visit.', -1,
        { r: 'Unneeded barrier', approach: 'In-person-only framing', why: 'Telehealth intake is appropriate with proper consent and safeguards; rescheduling adds a barrier to care', keys: ['works hospital shifts'], mistake: 'Assuming first sessions cannot be done by telehealth' }),
      O('c', 'Review telehealth risks, confirm her location and privacy, agree on an emergency plan and backup contact, then proceed.', 3,
        { r: 'Telehealth informed consent', approach: 'Obtain telehealth consent', why: 'Telehealth consent covers risks and limits, the client\'s location and privacy, and emergency and disconnection plans', keys: ['car in a parking garage', 'first video session'], mistake: 'Skipping location, privacy, and emergency planning in telehealth' }),
      O('d', 'Obtain her verbal consent to telehealth and move into the intake, leaving location and emergency details for later.', 0,
        { r: 'Consent without safeguards', approach: 'Partial-consent framing', why: 'Verbal consent helps, but location and emergency planning belong at the start of the first session', keys: ['public setting', 'no emergency plan yet'], mistake: 'Deferring core telehealth safeguards' }),
    ]),
    Q('q2', 'profdev', 'Andre cannot explain what the AI note-taker does. What is his most appropriate professional step?', ['R1', 'R3'], [
      O('a', 'Complete training on ethical, legal AI use and learn how the tool handles data before using it with any client.', 3,
        { r: 'Competence before use', approach: 'Build competence first', why: 'Counselors must understand a technology\'s function, risks, and data handling before using it and before seeking client consent', keys: ['20-minute vendor demo', 'could not answer Mai'], mistake: 'Using a tool before being able to explain it to clients' }),
      O('b', 'Use the tool now with clients who agree, since the vendor demonstration covered the basic functions he needs.', -2,
        { r: 'Uses technology without competence', approach: 'Demo-is-enough framing', why: 'A brief sales demonstration does not provide the understanding needed to obtain valid consent or protect data', keys: ['no BAA signed', 'vague answer to Mai'], mistake: 'Equating a vendor demo with professional competence' }),
      O('c', 'Ask the practice manager to explain the tool to clients, since technology questions fall outside his clinical role.', -1,
        { r: 'Delegates his consent duty', approach: 'Hand-off framing', why: 'The counselor is responsible for informed consent about the tools he uses in sessions', keys: ['client asked him directly'], mistake: 'Treating technology consent as an administrative task' }),
      O('d', 'Use the tool only with clients who consent while he learns more about it from colleagues over the coming months.', 0,
        { r: 'Consent before competence', approach: 'Learn-on-the-job framing', why: 'Client consent does not cure his inability to explain the tool; competence comes first', keys: ['limited training'], mistake: 'Seeking consent for something he cannot yet describe accurately' }),
    ]),
    Q('q3', 'assess', 'How should Andre understand Mai\'s questions about whether anything records her?', ['R4'], [
      O('a', 'As a sign that her GAD is worse than her score suggests, so he should give a longer anxiety measure at once.', -1,
        { r: 'Over-reads a reasonable question', approach: 'Symptom-severity framing', why: 'Her focused questions do not indicate higher severity; re-testing misreads the situation', keys: ['GAD-7 of 14', 'focused, factual questions'], mistake: 'Reading a rights question as a severity marker' }),
      O('b', 'As a professional habit from pharmacy work that needs no further attention, since privacy rules are part of her job.', 0,
        { r: 'Plausible but dismissive', approach: 'Occupational framing', why: 'Her background may inform her questions, but they still deserve a clear answer and noting how they differ from her worry', keys: ['hospital pharmacist'], mistake: 'Explaining the question away instead of answering it' }),
      O('c', 'As GAD-driven worry, so her refusal of the AI tool becomes a treatment target for exposure and cognitive work.', -2,
        { r: 'Pathologizes a client right', approach: 'Symptom-target framing', why: 'Treating an informed refusal as a symptom to change undermines her right to decline and distorts the treatment plan', keys: ['declines after explanation'], mistake: 'Turning a consent decision into a clinical target' }),
      O('d', 'As specific, reasonable data questions that differ from the broad, hard-to-control worry that defines her GAD.', 3,
        { r: 'Distinguishes rights from symptoms', approach: 'Differential reasoning', why: 'GAD worry is excessive, broad, and hard to control; focused questions about recording are a reasonable exercise of informed consent', keys: ['"constant, about everything"', 'asks what the phrase means'], mistake: 'Treating legitimate privacy questions as anxiety' }),
    ]),
    Q('q4', 'profdev', 'Andre notices irritation that manual notes slow him down. How should he handle this reaction?', ['R1'], [
      O('a', 'Stress the tool\'s time-saving benefits when he next talks with Mai, so she can see the advantages of agreeing.', -2,
        { r: 'Lets self-interest shape consent', approach: 'Persuasion framing', why: 'Steering a client toward a choice that benefits the counselor compromises voluntary consent', keys: ['tracked note times', 'Mai\'s refusal'], mistake: 'Allowing personal convenience to influence a client\'s consent' }),
      O('b', 'Reflect on the reaction, keep it out of the consent conversation, and bring it to supervision or consultation.', 3,
        { r: 'Self-reflection and supervision', approach: 'Self-awareness', why: 'Naming the reaction and processing it outside session protects the voluntariness of her decision', keys: ['irritation about workload', 'manager tracks times'], mistake: 'Letting an unexamined reaction leak into the consent process' }),
      O('c', 'Tell Mai that manual notes add to his workload, so that she understands the practical cost of her decision.', -1,
        { r: 'Burdens the client', approach: 'Self-disclosure framing', why: 'Sharing his workload pressure places his needs on her and can feel coercive', keys: ['client\'s right to refuse'], mistake: 'Using self-disclosure that pressures a client' }),
      O('d', 'Set the irritation aside and trust that it will not affect how he presents the AI option to her in session.', 0,
        { r: 'Suppression without reflection', approach: 'Push-through framing', why: 'Good intent helps, but unexamined reactions often shape tone and framing; reflection and consultation are stronger', keys: ['ongoing pressure'], mistake: 'Assuming awareness alone neutralizes a reaction' }),
    ]),
    // ---------------- session1 ----------------
    Q('q5', 'planning', 'Which initial treatment plan best reflects Mai\'s diagnosis and her stated preferences?', ['R5', 'R1'], [
      O('a', 'Relaxation training alone in office sessions, since telehealth adds stress for clients who worry about privacy.', -1,
        { r: 'Overrides her preference; thin', approach: 'Office-only framing', why: 'She chose telehealth after an informed explanation, and relaxation alone is less complete than CBT for GAD', keys: ['agrees to continue by telehealth'], mistake: 'Overriding an informed client choice' }),
      O('b', 'CBT with an AI note-taker for accuracy, after he explains to Mai again why the tool would benefit her care.', -2,
        { r: 'Disregards her refusal', approach: 'Re-persuade framing', why: 'Planning to reopen a settled refusal disrespects her decision, and the tool lacks a BAA', keys: ['declines the AI note-taker', 'BAA pending'], mistake: 'Building a plan around a tool the client refused' }),
      O('c', 'CBT for worry with measurable goals, by telehealth evenings as she asked, and notes written without the AI tool.', 3,
        { r: 'Evidence-based and preference-congruent', approach: 'Integrate client preferences', why: 'CBT is first-line for GAD, and the plan honors her choices about modality, timing, and documentation', keys: ['GAD-7 of 14', 'evening telehealth', 'declined AI'], mistake: 'Building a plan that ignores how the client chose to receive care' }),
      O('d', 'Supportive counseling on work stress until the practice resolves its BAA, then a more structured plan for GAD.', 0,
        { r: 'Delays indicated treatment', approach: 'Wait-for-admin framing', why: 'Her care does not depend on the AI tool; delaying CBT for an administrative issue postpones effective treatment', keys: ['14 months of worry'], mistake: 'Tying clinical care to an unrelated administrative issue' }),
    ]),
    Q('q6', 'indirect', 'How should Andre handle documentation now that Mai has declined the AI note-taker?', ['R6'], [
      O('a', 'Document her informed refusal of the AI tool in the record and write each note himself soon after the session.', 3,
        { r: 'Record refusal; timely notes', approach: 'Accurate documentation', why: 'Recording informed refusal protects her choice across the practice, and timely self-written notes keep the record accurate', keys: ['declined the AI tool', 'manager pressure'], mistake: 'Leaving a client\'s refusal undocumented where others may override it' }),
      O('b', 'Turn the tool on to draft the note and delete the transcript afterward, so she is not affected by the recording.', -2,
        { r: 'Violates her refusal', approach: 'Covert-use framing', why: 'Recording against a client\'s stated refusal breaches consent, whatever happens to the transcript later', keys: ['"declines the AI note-taker"'], mistake: 'Believing deletion afterward cures use without consent' }),
      O('c', 'Write his notes himself but leave her refusal out of the record, since it is not clinical information.', -1,
        { r: 'Leaves refusal invisible', approach: 'Clinical-only framing', why: 'Consent and refusal are part of the record; without it, staff may enable the tool for her', keys: ['practice-wide rollout'], mistake: 'Treating consent decisions as outside documentation' }),
      O('d', 'Write all of his notes from memory at the end of each week, when he has more time to complete them carefully.', 0,
        { r: 'Delayed notes lose accuracy', approach: 'Batching framing', why: 'Manual notes are right, but writing them days later reduces accuracy and timeliness', keys: ['manual notes take time'], mistake: 'Delaying documentation in ways that reduce accuracy' }),
    ]),
    Q('q7', 'indirect', 'The manager asks Andre to "turn it on anyway" while the BAA is pending. What should he do?', ['R2'], [
      O('a', 'Turn on the tool for clients who have not objected, since the manager is responsible for practice compliance.', -2,
        { r: 'Uses PHI without a BAA', approach: 'Defer-to-manager framing', why: 'Sending session audio to a vendor without a BAA risks a HIPAA violation that the counselor shares responsibility for', keys: ['BAA still pending', '"everyone else is"'], mistake: 'Assuming a supervisor\'s instruction removes personal responsibility' }),
      O('b', 'Report the practice manager to the state licensing board right away for asking staff to use the tool too early.', -1,
        { r: 'Skips direct resolution', approach: 'Escalate-first framing', why: 'Ethical standards favor first raising concerns directly and through internal channels', keys: ['no attempt to resolve yet'], mistake: 'Escalating externally before trying internal resolution' }),
      O('c', 'Quietly keep the tool off for his own clients without raising the BAA issue with the manager or colleagues.', 0,
        { r: 'Protects his clients only', approach: 'Private-avoidance framing', why: 'Keeping it off is right for his clients, but colleagues\' clients remain exposed if he says nothing', keys: ['practice-wide use'], mistake: 'Avoiding the issue rather than addressing it within the practice' }),
      O('d', 'Tell the manager he will not use the tool until a BAA is signed, and ask for the vendor\'s data-use terms.', 3,
        { r: 'Collaborate, and hold the line', approach: 'Engage a non-clinical stakeholder', why: 'A BAA is required before a vendor handles PHI; raising it with the manager and requesting terms addresses the risk for all clients', keys: ['BAA pending', 'audio sent to vendor'], mistake: 'Either complying or staying silent about a compliance gap' }),
    ]),
    Q('q8', 'planning', 'The platform went down twice last month. How should the plan address service disruption?', ['R1'], [
      O('a', 'Wait until an outage happens and then decide with Mai whether to reschedule or switch to a phone call.', -1,
        { r: 'No advance plan', approach: 'Reactive framing', why: 'Deciding during an outage leaves her unsure what to do, especially for a client prone to worry', keys: ['two outages last month'], mistake: 'Leaving disruption plans until a disruption occurs' }),
      O('b', 'Agree now that if video drops he calls her within five minutes, and set next steps if she cannot be reached.', 3,
        { r: 'Advance disruption plan', approach: 'Plan for disruption of service', why: 'A specific backup plan made in advance reduces uncertainty and preserves continuity and safety', keys: ['platform outages', 'evening telehealth'], mistake: 'Failing to set a concrete backup plan before telehealth begins' }),
      O('c', 'Move her to in-office sessions only, since unreliable technology makes telehealth unsuitable for her care.', 0,
        { r: 'Overcorrects', approach: 'Abandon-telehealth framing', why: 'In-office care is possible, but outages can be managed with a plan, and she chose telehealth', keys: ['prefers evening sessions at home'], mistake: 'Discarding a chosen modality instead of planning for its risks' }),
      O('d', 'Use his personal messaging app with her during outages, since it is quicker than the practice phone system.', -2,
        { r: 'Unsecured channel', approach: 'Personal-app framing', why: 'Personal apps may not protect PHI and blur professional boundaries', keys: ['privacy-conscious client'], mistake: 'Using personal channels for clinical contact' }),
    ]),
    // ---------------- session2 ----------------
    Q('q9', 'legal', 'The manager says clients who refuse the AI tool may need to leave. What should Andre do?', ['R1', 'R3'], [
      O('a', 'Advocate within the practice that clients can refuse the AI tool without losing services, citing consent standards.', 3,
        { r: 'Protect the right to refuse', approach: 'Adhere to ethics codes', why: 'Clients may decline specific technologies without penalty; conditioning care on AI consent makes the consent coerced', keys: ['"may need to find another practice"', 'Mai declined'], mistake: 'Accepting a policy that turns consent into a condition of care' }),
      O('b', 'Tell Mai that practice policy now requires her to accept the tool, or he will help her transfer to another practice.', -2,
        { r: 'Coerces consent', approach: 'Policy-first framing', why: 'Forcing a choice between consent and losing care is coercive and risks abandonment', keys: ['established alliance', 'informed refusal'], mistake: 'Treating an employer policy as overriding client consent rights' }),
      O('c', 'Leave the practice himself right away so he does not have to take part in a policy he believes is unethical.', -1,
        { r: 'Abrupt exit abandons clients', approach: 'Exit framing', why: 'Leaving abruptly disrupts his clients\' care; internal advocacy comes first', keys: ['active caseload'], mistake: 'Leaving clients without continuity to avoid a conflict' }),
      O('d', 'Start arranging Mai\'s referral to another practice now, before the new policy takes effect next month.', 0,
        { r: 'Premature referral', approach: 'Protective-referral framing', why: 'It protects her from the policy but accepts it; advocacy should come before transferring care', keys: ['policy not yet in effect'], mistake: 'Moving the client instead of challenging the policy' }),
    ]),
    Q('q10', 'interventions', 'Mai says sharply, "I told you no," and goes quiet. What is the most therapeutic response?', ['R1'], [
      O('a', '"It ran for only ten minutes and it is encrypted, so there is really nothing here that you need to worry about."', -2,
        { r: 'Minimizes a real breach of trust', approach: 'Minimize framing', why: 'Dismissing her reaction compounds the rupture and misstates the risk', keys: ['"I told you no"', 'no BAA'], mistake: 'Minimizing the counselor\'s error to end the discomfort' }),
      O('b', '"I can see this is your anxiety talking; let us look at the thoughts you are having right now about the recording."', -1,
        { r: 'Pathologizes a valid reaction', approach: 'Symptom-reframe framing', why: 'Her anger is a reasonable response to a violated refusal, not a cognitive distortion', keys: ['she declined clearly'], mistake: 'Treating a rupture as a symptom' }),
      O('c', '"You told me no, and it ran anyway. I am sorry. I will stop it, tell you what I know, and hear how this lands."', 3,
        { r: 'Acknowledge, own, repair', approach: 'Rupture repair', why: 'Naming the breach, taking responsibility, and inviting her reaction is the core of repairing a therapeutic rupture', keys: ['"I told you no"', 'goes quiet'], mistake: 'Moving past a rupture without owning it' }),
      O('d', '"I am so sorry that happened. Let us switch it off and get back to the worry log you were telling me about."', 0,
        { r: 'Apology without repair', approach: 'Quick-fix framing', why: 'The apology helps, but moving on quickly skips exploring her reaction and explaining what happened', keys: ['she goes quiet'], mistake: 'Apologizing and moving on before the rupture is repaired' }),
    ]),
    Q('q11', 'interventions', 'Mai rechecks finished orders three or four times. Which intervention best addresses this?', ['R5'], [
      O('a', 'Encourage her to keep double-checking each order, since in pharmacy careful checking is a sign of good practice.', -1,
        { r: 'Reinforces a safety behavior', approach: 'Validate-checking framing', why: 'Repeated checking beyond the required check maintains worry by preventing new learning', keys: ['rechecks three or four times'], mistake: 'Treating an anxiety-driven safety behavior as diligence' }),
      O('b', 'Teach progressive muscle relaxation to use whenever she feels the urge to recheck an order during her shift.', 0,
        { r: 'Helpful but indirect', approach: 'Relaxation-only framing', why: 'Relaxation can lower arousal but does not target checking or the beliefs behind it', keys: ['muscle tension'], mistake: 'Using a coping skill in place of targeting the maintaining behavior' }),
      O('c', 'Reassure her that her error rate is surely very low, so she can trust herself and stop worrying about mistakes.', -2,
        { r: 'Reassurance maintains anxiety', approach: 'Reassurance framing', why: 'Counselor reassurance substitutes for her own learning and tends to increase reassurance-seeking', keys: ['worry about dispensing errors'], mistake: 'Providing reassurance that feeds the worry cycle' }),
      O('d', 'Use CBT to examine her error beliefs and gradually cut rechecks to the one check her workplace protocol requires.', 3,
        { r: 'Cognitive work plus reducing safety behaviors', approach: 'CBT for GAD', why: 'Testing beliefs about errors while gradually dropping excess checks addresses the cycle that maintains her worry', keys: ['rechecks three or four times', 'replays her shift'], mistake: 'Leaving safety behaviors in place during anxiety treatment' }),
    ]),
    Q('q12', 'legal', 'The AI transcribed about ten minutes of Mai\'s session without consent or a BAA. What must Andre do?', ['R2'], [
      O('a', 'Delete the transcript himself and say nothing further, since the recording was accidental and quite brief.', -2,
        { r: 'Conceals a possible breach', approach: 'Quiet-fix framing', why: 'An unauthorized disclosure to a vendor without a BAA must go through the practice\'s breach-assessment process', keys: ['no BAA', 'ten minutes transcribed'], mistake: 'Handling a possible breach privately and without disclosure' }),
      O('b', 'Stop the feature, notify the practice privacy officer, and follow its breach risk assessment process.', 3,
        { r: 'Follow the breach process', approach: 'Adhere to HIPAA and SOPs', why: 'Disclosing PHI to a vendor without a BAA is an impermissible disclosure, presumed a breach unless a documented risk assessment shows a low probability the PHI was compromised; the practice must assess and notify as required', keys: ['default-on transcription', 'BAA pending'], mistake: 'Skipping the formal risk-assessment and notification process' }),
      O('c', 'Tell Mai that nothing was saved, since the feature was only running briefly and no notes were finalized.', -1,
        { r: 'Unverified reassurance', approach: 'Assumption framing', why: 'He does not know what the vendor kept; telling her otherwise may be false', keys: ['audio sent to vendor'], mistake: 'Reassuring a client before the facts are known' }),
      O('d', 'Tell Mai what happened and delete the transcript, without involving the practice privacy officer in it.', 0,
        { r: 'Honest but incomplete', approach: 'Transparency-only framing', why: 'Telling her is right, but the practice must assess the incident and contact the vendor; deletion on his own is not enough', keys: ['practice-wide update'], mistake: 'Treating disclosure to the client as the whole response' }),
    ]),
    Q('q13', 'legal', 'Before any client\'s sessions are processed by the AI tool, what does Andre need in place?', ['R1', 'R2', 'R3'], [
      O('a', 'The vendor\'s statement that it is HIPAA compliant, plus a general consent signature in the intake packet.', 0,
        { r: 'Insufficient safeguards', approach: 'Vendor-claim framing', why: 'A website claim is not a BAA, and a bundled signature is not specific informed consent', keys: ['"HIPAA compliant per their website"'], mistake: 'Treating marketing claims and bundled consent as enough' }),
      O('b', 'A practice-wide policy requiring all clients to accept the tool, so that documentation stays consistent.', -1,
        { r: 'Mandatory use undermines consent', approach: 'Uniformity framing', why: 'Consent must be voluntary; uniform mandates remove the right to refuse', keys: ['client refusal'], mistake: 'Prioritizing uniformity over individual consent' }),
      O('c', 'A signed BAA, a review of data use, specific client consent, and his own check of each AI draft for accuracy.', 3,
        { r: 'Contract, consent, competence, review', approach: 'Implement AI tools responsibly', why: 'Responsible AI use requires a BAA, knowing how data is used, specific consent with a right to refuse, and counselor review of output', keys: ['BAA pending', 'vague consent'], mistake: 'Skipping any of the safeguards that make AI use lawful and ethical' }),
      O('d', 'Permission to let AI drafts go straight into the record unreviewed, since the tool is designed for clinicians.', -2,
        { r: 'Abdicates record accuracy', approach: 'Automation framing', why: 'The counselor remains responsible for the accuracy of the clinical record; unreviewed AI notes can contain errors', keys: ['counselor owns the record'], mistake: 'Assuming AI output is accurate without review' }),
    ]),
  ],
};

// ============================================================================
// D977 — Boundary / Dual-Relationship Dilemma (hard, plan 7)
// ============================================================================
const D977 = {
  id: 'ncmhce-D977',
  plan: 7,
  population: 'adult',
  title: 'The only counselor in a wheat town, his son\'s teacher, and a duplex on Fir Street',
  category: 'Ethics',
  difficulty: 'hard',
  primaryDiagnosis: { name: 'Boundary / Dual-Relationship Dilemma', code: 'Z65.8' },
  diagnosis: { name: 'Boundary / Dual-Relationship Dilemma', code: 'Z65.8' },
  differentialOptions: [
    { id: 'do1', name: 'Informed Consent / Competence Dilemma', isCorrect: false },
    { id: 'do2', name: 'Confidentiality / Duty-to-Warn Dilemma', isCorrect: false },
    { id: 'do3', name: 'Mandated Reporting Decision', isCorrect: false },
    { id: 'do4', name: 'Boundary / Dual-Relationship Dilemma', isCorrect: true },
  ],
  narrative: {
    intake:
      'Marcus Lindqvist, LPC, is the only licensed counselor in Coulee Springs, a wheat-farming town of 2,600 in eastern Washington; the nearest other ' +
      'outpatient clinic is 70 miles away, though several Washington-licensed counselors offer telehealth. Marcus and his wife, Anna, also own a duplex ' +
      'on Fir Street that Anna manages. Graciela "Gracie" Ortiz, a 39-year-old Mexican American fourth-grade teacher at the town\'s only elementary ' +
      'school, calls for an appointment; Marcus\'s 9-year-old son, Eli, is in her class this year. At intake she describes four months of low mood, ' +
      'poor sleep, fatigue, and tearfulness since her husband moved out, though she has kept teaching. She says, "Small towns, right? Everybody knows ' +
      'everybody," mentions that money has been tight since "a rental mess on Fir Street three years ago that went to collections," and adds, laughing, ' +
      '"Some days I think my students would be better off with a teacher who has it together—not that I would ever do anything, don\'t write that ' +
      'down." She has never had counseling and would "rather not drive two hours each way."',
    session1:
      'At the second session a structured screen finds passive thoughts of "not waking up" twice in the past month, with no intent, plan, or past ' +
      'attempts and no firearms in her home; Marcus and Gracie complete a written safety plan. Gracie mentions that her Fir Street landlord was "Anna ' +
      'somebody" who kept her $1,200 deposit, then says, "Oh—Lindqvist. Your wife? Small world. No hard feelings." Marcus confirms privately that the ' +
      'unpaid balance is still with a collection agency Anna uses. That evening Gracie sends a friend request to Marcus\'s personal social media ' +
      'account, where he posts family photos. Parent-teacher conferences, where Marcus is scheduled to meet Gracie about Eli, are in two weeks. Marcus ' +
      'calls a trusted colleague for consultation.',
    session2:
      'Marcus has not responded to the request. Gracie asks, a little hurt, whether he saw it, then says, "Don\'t worry, I\'ll take extra good care of ' +
      'Eli this year." She asks whether he could "get Anna to drop the collections thing, since we\'re practically family now." Her mood has improved ' +
      'slightly with behavioral activation, and the safety plan is in use. When Marcus raises transferring her care to a telehealth counselor in ' +
      'another town, she says quietly, "So I\'m too much trouble, too."',
  },
  diagnosticRationale:
    'The central problem is overlapping relationships: Gracie is the teacher of Marcus\'s child, she has an unresolved debt to a business Marcus co-owns ' +
    '(still in collections), and she seeks a personal social media connection. Rural practice makes some overlap unavoidable and boundary extensions can ' +
    'be ethical with consent, consultation, and documentation, but an active financial dispute with the counselor\'s household, plus his child\'s ' +
    'daily dependence on her, creates a conflict of interest that safeguards cannot neutralize. Because telehealth makes a competent alternative ' +
    'available, a planned, client-centered transfer is indicated. Her depressive symptoms and passive ideation require risk assessment and continuity ' +
    'of safety planning through the transition. Confidentiality, consent, and reporting issues arise but are secondary.',
  references: [
    { id: 'R1', source: 'ACA Code of Ethics', detail: 'A.5.e. personal virtual relationships with current clients; A.6.a.–A.6.b. previous relationships and extending boundaries; A.11 termination and referral; B.1.c. respect for confidentiality' },
    { id: 'R2', source: 'C-SSRS', detail: 'Structured suicide-risk screening when passive ideation is voiced inside a reassurance' },
    { id: 'R3', source: 'Stanley-Brown SPI', detail: 'Collaborative safety plan maintained across a transfer of care' },
    { id: 'R4', source: 'Wiger (Documentation)', detail: 'Documenting consultation, ethical reasoning, and transfer of care in the clinical record' },
    { id: 'R5', source: 'Corey (Theory & Practice)', detail: 'Ethical decision-making steps; core counseling skills and repairing therapeutic ruptures' },
    { id: 'R6', source: 'State law', detail: 'Licensure and telehealth practice rules for in-state transfer to a Washington-licensed counselor' },
  ],
  questions: [
    // ---------------- intake ----------------
    Q('q1', 'profdev', 'Gracie is Eli\'s teacher, and Marcus is the only local counselor. What is his best first step at intake?', ['R1'], [
      O('a', 'Decline to see her at all, since any second relationship with a client is prohibited under the code of ethics.', -1,
        { r: 'Misreads the code', approach: 'Blanket-prohibition framing', why: 'The code does not ban all overlapping roles; in rural settings some are unavoidable and are managed with care', keys: ['only local counselor', 'long drive to alternatives'], mistake: 'Treating every dual relationship as forbidden' }),
      O('b', 'Assess the overlap and his own objectivity, discuss it openly with her, and consult before deciding on care.', 3,
        { r: 'Assess suitability transparently', approach: 'Determine client–counselor suitability', why: 'Before committing, he weighs the conflict and its effect on his objectivity, discusses it with her, and consults', keys: ['his son is in her class', 'small town'], mistake: 'Either accepting or refusing without examining the conflict' }),
      O('c', 'Accept her as a client without comment, since in a small town everyone knows each other and overlap is expected.', -2,
        { r: 'Ignores a real conflict', approach: 'Normalize framing', why: 'Rural overlap is common, but it still requires deliberate assessment and discussion with the client', keys: ['"everybody knows everybody"'], mistake: 'Using rural norms to skip boundary assessment' }),
      O('d', 'Accept her as a client and plan to raise the school connection only if a problem comes up later in treatment.', 0,
        { r: 'Reactive rather than proactive', approach: 'Wait-and-see framing', why: 'Seeing her may be defensible, but the overlap should be discussed at the start, not after problems arise', keys: ['upcoming school contact'], mistake: 'Delaying a boundary discussion until it becomes a crisis' }),
    ]),
    Q('q2', 'profdev', 'Which intake detail should most change Marcus\'s view of whether he can serve Gracie objectively?', ['R1'], [
      O('a', 'Her comment that "everybody knows everybody," which signals she will expect special treatment from him.', -1,
        { r: 'Over-reads a casual remark', approach: 'Expectation framing', why: 'The remark describes small-town life; it is not evidence that she expects favors', keys: ['small-town remark'], mistake: 'Reading a common comment as a boundary threat' }),
      O('b', 'Her preference not to drive two hours, which means he must keep her as a client whatever the overlap.', 0,
        { r: 'Relevant, but not the conflict', approach: 'Access framing', why: 'Access matters for options, but it is not what changes his objectivity; telehealth also exists', keys: ['telehealth alternatives exist'], mistake: 'Letting access alone decide a conflict question' }),
      O('c', 'Her teaching role, since teachers are mandated reporters and that will complicate the counseling relationship.', -2,
        { r: 'Misses the decisive fact', approach: 'Wrong-variable framing', why: 'Her reporting duties do not affect his objectivity; the buried debt tied to his household does', keys: ['Fir Street duplex'], mistake: 'Focusing on an irrelevant role while missing the conflict of interest' }),
      O('d', 'The Fir Street rental debt, which may be owed to the duplex that he and Anna own and that Anna manages.', 3,
        { r: 'Possible prior financial relationship', approach: 'Identify the conflict of interest', why: 'A disputed debt with the counselor\'s household is a prior and ongoing financial relationship that threatens objectivity', keys: ['"rental mess on Fir Street"', 'owns a duplex on Fir Street'], mistake: 'Missing a buried financial connection to the counselor' }),
    ]),
    Q('q3', 'assess', 'Gracie laughs and says her students would be "better off" but she "would never do anything." What should Marcus do?', ['R2'], [
      O('a', 'Gently follow up with a structured suicide-risk screen, asking directly about thoughts of death and any plans.', 3,
        { r: 'Follow the cue with a structured screen', approach: 'Assess risk to self', why: 'A passive death-related statement wrapped in reassurance warrants direct, structured follow-up', keys: ['"better off with a teacher who has it together"', 'four months of low mood'], mistake: 'Accepting a reassurance that hides a risk statement' }),
      O('b', 'Honor her request not to write it down and move on, since she clearly said she would not do anything.', -2,
        { r: 'Misses a risk cue and mishandles records', approach: 'Take-at-face-value framing', why: 'Her reassurance does not rule out ideation, and risk statements must be assessed and documented', keys: ['"don\'t write that down"'], mistake: 'Letting a client\'s request override risk assessment and documentation' }),
      O('c', 'Note the comment and plan to ask about suicide later, once more trust has been built in the coming sessions.', -1,
        { r: 'Delays assessment', approach: 'Defer framing', why: 'Asking now does not harm rapport; deferral leaves risk unknown', keys: ['passive statement at intake'], mistake: 'Believing direct questions should wait for rapport' }),
      O('d', 'Ask whether she feels safe tonight, and use a structured screen only if her answer suggests a concern.', 0,
        { r: 'Too thin', approach: 'Single-question framing', why: 'A single safety question may miss passive ideation that a structured screen would catch', keys: ['statement embedded in a joke'], mistake: 'Relying on one global safety question' }),
    ]),
    Q('q4', 'assess', 'What should Marcus\'s informed consent with Gracie include, given the small town?', ['R1', 'R4'], [
      O('a', 'The standard practice consent form only, since additional discussion could make her feel singled out.', -1,
        { r: 'Leaves known risks unaddressed', approach: 'Standard-form framing', why: 'Foreseeable overlaps should be discussed, not left to a generic form', keys: ['his son is in her class'], mistake: 'Using boilerplate consent for a foreseeable dual-role situation' }),
      O('b', 'An agreement that they will avoid each other in town and at school events for as long as treatment lasts.', 0,
        { r: 'Unrealistic in a small town', approach: 'Avoidance framing', why: 'Planning for encounters is right, but promising to avoid each other is not workable', keys: ['only elementary school'], mistake: 'Promising avoidance instead of planning for encounters' }),
      O('c', 'How they will handle meeting in town and at school, what goes in the record, and confidentiality limits.', 3,
        { r: 'Address foreseeable overlap', approach: 'Review policies with the client', why: 'Consent covers how outside encounters will be handled, what is documented (including risk), and confidentiality limits', keys: ['"don\'t write that down"', 'school contact'], mistake: 'Omitting dual-role and documentation issues from consent' }),
      O('d', 'A promise that nothing she says will be written down, so she can speak freely in a town where people talk.', -2,
        { r: 'False promise', approach: 'No-record framing', why: 'Counselors must keep records, and risk information must be documented', keys: ['passive death statement'], mistake: 'Promising not to document in order to build trust' }),
    ]),
    // ---------------- session1 ----------------
    Q('q5', 'indirect', 'After consulting a colleague, how should Marcus document the boundary issues?', ['R4'], [
      O('a', 'Keep a separate private file on the boundary issues so they do not appear in her clinical record.', -2,
        { r: 'Shadow record', approach: 'Separate-file framing', why: 'Clinical decisions belong in the official record; private side files undermine accuracy and accountability', keys: ['consultation held'], mistake: 'Keeping ethically relevant information outside the record' }),
      O('b', 'Note only that a consultation took place, without details, to protect Anna\'s privacy regarding the debt.', 0,
        { r: 'Too thin', approach: 'Minimal-note framing', why: 'Protecting third parties matters, but the record should still show the conflict, options, and rationale', keys: ['debt in collections'], mistake: 'Documenting the fact of consultation without its reasoning' }),
      O('c', 'Wait to document anything until he has made a final decision, so the record shows only the outcome.', -1,
        { r: 'Loses the reasoning trail', approach: 'Outcome-only framing', why: 'Contemporaneous notes show how the decision was made; delay loses accuracy', keys: ['ongoing dilemma'], mistake: 'Documenting outcomes without the process' }),
      O('d', 'Record the roles, the debt, the friend request, his consultation, options weighed, and his rationale.', 3,
        { r: 'Full ethical-reasoning record', approach: 'Write clinical documentation', why: 'Documenting the relationships, consultation, alternatives, and rationale supports sound care and accountability', keys: ['debt confirmed', 'friend request', 'colleague consulted'], mistake: 'Leaving ethical reasoning out of the clinical record' }),
    ]),
    Q('q6', 'indirect', 'Marcus considers a referral. Which step best uses his referral resources?', ['R6'], [
      O('a', 'Give her the phone number of the clinic 70 miles away and let her decide whether to call it on her own.', -1,
        { r: 'Passive hand-off', approach: 'List-and-leave framing', why: 'A bare phone number for a distant clinic ignores her stated barrier and offers no coordination', keys: ['"rather not drive two hours"'], mistake: 'Treating a referral as handing over a number' }),
      O('b', 'Identify Washington-licensed telehealth counselors, confirm openings and fit, and offer her a warm handoff.', 3,
        { r: 'Coordinated, accessible referral', approach: 'Maintain and use referral resources', why: 'Vetted, in-state telehealth options address her access barrier and support continuity through a warm handoff', keys: ['telehealth counselors available', 'no local alternative'], mistake: 'Offering referrals without checking licensure, availability, or fit' }),
      O('c', 'Refer her to an online counseling app with out-of-state counselors, since it is the fastest way to start.', -2,
        { r: 'Licensure and continuity risk', approach: 'Speed framing', why: 'Counselors must be licensed where the client is located; an unvetted app may not provide that or support safety planning', keys: ['client in Washington', 'passive ideation'], mistake: 'Ignoring licensure location and continuity in a referral' }),
      O('d', 'Ask her school counselor to see her during the school day until she finds another counselor herself.', 0,
        { r: 'Wrong role', approach: 'Workplace-resource framing', why: 'A school counselor serves students, and seeing a colleague at work raises its own privacy concerns', keys: ['she works at the school'], mistake: 'Referring to a resource outside its role' }),
    ]),
    Q('q7', 'planning', 'Given everything Marcus now knows, which plan for Gracie\'s care is most appropriate?', ['R1', 'R5'], [
      O('a', 'Plan a collaborative transfer to a telehealth counselor, continuing her care and safety plan until it is complete.', 3,
        { r: 'Planned transfer with continuity', approach: 'Refer while preventing abandonment', why: 'An active financial dispute and his child\'s classroom create a conflict that safeguards cannot resolve; telehealth offers a competent alternative', keys: ['debt in collections', 'Eli in her class', 'telehealth available'], mistake: 'Either continuing despite an unresolvable conflict or ending care abruptly' }),
      O('b', 'Continue treating her indefinitely, documenting the overlap and consulting regularly, since he is the local option.', 0,
        { r: 'Defensible only without alternatives', approach: 'Boundary-extension framing', why: 'Documented safeguards can justify rural overlap, but here an active financial dispute and an available alternative tip the balance', keys: ['telehealth alternatives'], mistake: 'Applying the rural-exception logic when a competent alternative exists' }),
      O('c', 'End treatment at the next session and give her a list of names, since continuing would violate the code.', -1,
        { r: 'Abrupt termination', approach: 'Clean-break framing', why: 'Ending care suddenly with a client who has passive ideation risks abandonment', keys: ['passive ideation', 'safety plan in use'], mistake: 'Ending care without a transition plan' }),
      O('d', 'Continue her care and ask Anna to forgive the debt so the financial conflict no longer stands in the way.', -2,
        { r: 'Deepens the entanglement', approach: 'Remove-the-conflict framing', why: 'Forgiving a debt for a client creates a new financial benefit tied to therapy and further blurs roles', keys: ['Anna manages the duplex'], mistake: 'Trying to resolve a conflict of interest by adding another' }),
    ]),
    Q('q8', 'planning', 'How should the plan protect continuity during the transfer?', ['R3'], [
      O('a', 'Stop sessions once she has the new counselor\'s name, since continuing would prolong the dual relationship.', -2,
        { r: 'Gap in care', approach: 'Immediate-stop framing', why: 'Stopping before the first appointment leaves a client with passive ideation without care', keys: ['passive ideation', 'safety plan'], mistake: 'Creating a gap in care to end a boundary issue quickly' }),
      O('b', 'Keep seeing her until she feels ready to leave, however long that takes, so she does not feel rejected.', -1,
        { r: 'Open-ended delay', approach: 'Client-readiness framing', why: 'An open-ended timeline prolongs the conflict; a defined transition protects both continuity and objectivity', keys: ['ongoing conflict of interest'], mistake: 'Letting a transfer drift with no endpoint' }),
      O('c', 'Continue sessions until her first telehealth visit, share her safety plan with consent, and set a final session.', 3,
        { r: 'Bridged transition', approach: 'Plan for disruption of service', why: 'Bridging sessions, a consented transfer of the safety plan, and a defined end preserve continuity and safety', keys: ['safety plan in use', 'transfer planned'], mistake: 'Failing to bridge care and carry over the safety plan' }),
      O('d', 'Give her a crisis line number for the gap between counselors and send her records once she signs a release.', 0,
        { r: 'Helpful but incomplete', approach: 'Crisis-line framing', why: 'Crisis resources and records help, but bridging sessions keep active care in place', keys: ['passive ideation'], mistake: 'Relying on crisis resources instead of bridging care' }),
    ]),
    // ---------------- session2 ----------------
    Q('q9', 'legal', 'Gracie asks whether Marcus saw her friend request. How should he handle it?', ['R1'], [
      O('a', 'Accept the request but limit what she can see, so she does not feel rejected while she is struggling.', -2,
        { r: 'Personal virtual relationship', approach: 'Limited-access framing', why: 'The code prohibits personal virtual relationships with current clients, whatever the privacy settings', keys: ['personal account with family photos'], mistake: 'Believing privacy settings make a personal connection acceptable' }),
      O('b', 'Acknowledge it kindly, explain he does not friend clients on personal social media, and explore her reaction.', 3,
        { r: 'Decline with care', approach: 'Adhere to the code on virtual relationships', why: 'Explaining the policy directly and exploring her feelings protects the boundary and the alliance', keys: ['she asks, a little hurt', 'friend request'], mistake: 'Either accepting the request or ignoring it without explanation' }),
      O('c', 'Say nothing about it and let the request sit, since raising it could hurt her feelings more than ignoring it.', -1,
        { r: 'Avoidance', approach: 'Ignore framing', why: 'She asked directly; silence leaves her guessing and adds to the hurt', keys: ['she asks whether he saw it'], mistake: 'Avoiding a boundary conversation the client has opened' }),
      O('d', 'Tell her he did not see the request and quietly block her account so the issue does not come up again.', 0,
        { r: 'Dishonest workaround', approach: 'Block-quietly framing', why: 'Blocking keeps the boundary but the denial is untrue and the topic stays unprocessed', keys: ['client asked directly'], mistake: 'Managing a boundary through deception' }),
    ]),
    Q('q10', 'legal', 'Parent-teacher conferences are in two weeks. How should Marcus approach meeting Gracie about Eli?', ['R1'], [
      O('a', 'Attend as usual and keep to Eli\'s progress, without raising the conference with Gracie in session beforehand.', 0,
        { r: 'Right role, no preparation', approach: 'Unannounced-meeting framing', why: 'Keeping to his parent role is right, but discussing it with her first reduces awkwardness and protects the work', keys: ['meeting in two weeks'], mistake: 'Not preparing a client for a foreseeable outside encounter' }),
      O('b', 'Use part of the conference to check on her mood, since they will be meeting face to face that week anyway.', -1,
        { r: 'Blurs roles', approach: 'Double-duty framing', why: 'Counseling in a school meeting mixes roles and risks exposing her client status', keys: ['school setting', 'parent role'], mistake: 'Bringing the counseling role into an outside encounter' }),
      O('c', 'Ask the principal to move Eli to a different class, explaining that Gracie is one of his counseling clients.', -2,
        { r: 'Breach of confidentiality', approach: 'Disclose-to-school framing', why: 'Revealing that she is his client to her employer is an unauthorized disclosure with professional harm to her', keys: ['principal is her employer'], mistake: 'Disclosing client status to solve a boundary problem' }),
      O('d', 'Discuss it with Gracie in session first, agree on how they will keep roles separate, and act only as Eli\'s parent.', 3,
        { r: 'Prepare and keep roles separate', approach: 'Manage an unavoidable overlap', why: 'Talking through the meeting in advance and staying in his parent role protects her privacy and the counseling relationship', keys: ['conference in two weeks', 'Eli in her class'], mistake: 'Leaving an unavoidable dual-role encounter unplanned' }),
    ]),
    Q('q11', 'interventions', 'Gracie says quietly, "So I\'m too much trouble, too." What is the most therapeutic response?', ['R5'], [
      O('a', '"It sounds like this feels like one more person stepping away. I want to understand, and it is not about you."', 3,
        { r: 'Reflect and repair', approach: 'Use core skills to repair a rupture', why: 'Reflecting the feeling of rejection, linked to her separation, and clarifying the reason keeps the alliance intact', keys: ['"too much trouble, too"', 'husband moved out'], mistake: 'Explaining the policy before attending to the client\'s hurt' }),
      O('b', '"You are not too much trouble at all. Let us drop the transfer idea for now and just keep working together."', -2,
        { r: 'Abandons the needed plan', approach: 'Reassure-and-retreat framing', why: 'Dropping the transfer to soothe her leaves the conflict of interest in place', keys: ['debt and Eli unresolved'], mistake: 'Reversing a sound decision to relieve the client\'s distress' }),
      O('c', '"The code of ethics requires this transfer, so it is not my choice. I am simply following the professional rules."', -1,
        { r: 'Hides behind the rules', approach: 'Rule-citation framing', why: 'Pointing to rules without empathy feels like rejection and distances him from the decision', keys: ['she feels rejected'], mistake: 'Citing rules in place of empathic engagement' }),
      O('d', '"I can tell that hurts. Let me explain the reasons for the transfer so you can see it is the best choice."', 0,
        { r: 'Empathy, then persuasion', approach: 'Explain framing', why: 'The empathy helps, but moving straight to persuading skips exploring her experience', keys: ['quiet, hurt tone'], mistake: 'Rushing to justify the plan instead of exploring the feeling' }),
    ]),
    Q('q12', 'legal', 'Gracie asks Marcus to "get Anna to drop the collections thing." What should he do?', ['R1'], [
      O('a', 'Agree to raise it with Anna, since forgiving the debt would reduce Gracie\'s financial stress and help her mood.', -2,
        { r: 'Uses the role to arrange a benefit', approach: 'Intervene-financially framing', why: 'Arranging a financial favor through his household deepens the dual relationship and exploits his position', keys: ['debt still in collections'], mistake: 'Mixing family business and counseling to help a client' }),
      O('b', 'Tell her he will check the account details with Anna and let her know what he finds at the next session.', -1,
        { r: 'Becomes a go-between', approach: 'Go-between framing', why: 'Acting as a messenger about his family\'s business is itself a second role with the client', keys: ['"practically family now"'], mistake: 'Taking on a business role inside therapy' }),
      O('c', 'Decline kindly, explain why he cannot be involved in the debt, and document it and raise it in consultation.', 3,
        { r: 'Hold the boundary and document', approach: 'Adhere to the code on conflicts', why: 'He stays out of the financial matter, explains why, documents the request, and brings it to consultation', keys: ['debt with his household', '"practically family"'], mistake: 'Getting involved in a client\'s dispute with the counselor\'s family' }),
      O('d', 'Suggest she contact the collection agency directly, and avoid the topic in their sessions from now on.', 0,
        { r: 'Correct boundary, closed topic', approach: 'Redirect framing', why: 'Pointing her to the agency is fine, but banning the topic misses its meaning in the relationship', keys: ['"practically family now"'], mistake: 'Closing a clinically meaningful topic instead of processing it' }),
    ]),
    Q('q13', 'interventions', 'How should Marcus orient Gracie to the transfer in their remaining sessions?', ['R5'], [
      O('a', 'Give her the new counselor\'s details by email and keep remaining sessions on behavioral activation only.', -1,
        { r: 'Avoids processing the transfer', approach: 'Logistics-only framing', why: 'Handling the transfer only by email skips her feelings and her input', keys: ['"too much trouble"'], mistake: 'Treating a transfer as an administrative step' }),
      O('b', 'Let her choose whether to transfer at all, and continue with him if she prefers to stay with a local counselor.', -2,
        { r: 'Leaves the conflict in place', approach: 'Client-veto framing', why: 'Her preferences shape how the transfer happens, but she cannot waive his conflict of interest', keys: ['debt and Eli unresolved'], mistake: 'Letting the client decide whether a conflict of interest matters' }),
      O('c', 'Focus on her progress with behavioral activation and leave the transfer for the last session to keep things calm.', 0,
        { r: 'Postpones the process', approach: 'Delay framing', why: 'Progress review is useful, but leaving the transfer to the end prevents meaningful processing', keys: ['remaining sessions'], mistake: 'Delaying transfer discussion to avoid discomfort' }),
      O('d', 'Explain the reasons without blame, ask what she wants in a new counselor, and review her gains and safety plan.', 3,
        { r: 'Collaborative, transparent transition', approach: 'Orient and solicit feedback', why: 'Clear reasons, her preferences, and a review of gains and safety support a good handoff', keys: ['improving with activation', 'safety plan in use'], mistake: 'Transferring without involving the client in the process' }),
    ]),
  ],
};

// ============================================================================
// D978 — Confidentiality / Duty-to-Warn Dilemma (hard, plan 8)
// ============================================================================
const D978 = {
  id: 'ncmhce-D978',
  plan: 8,
  population: 'adult',
  title: 'A freight dispatcher says his numbers are "undetectable" and his wife is ready for another baby',
  category: 'Ethics',
  difficulty: 'hard',
  primaryDiagnosis: { name: 'Confidentiality / Duty-to-Warn Dilemma', code: 'Z65.3' },
  diagnosis: { name: 'Confidentiality / Duty-to-Warn Dilemma', code: 'Z65.3' },
  differentialOptions: [
    { id: 'do1', name: 'Confidentiality / Duty-to-Warn Dilemma', isCorrect: true },
    { id: 'do2', name: 'Mandated Reporting Decision', isCorrect: false },
    { id: 'do3', name: 'Boundary / Dual-Relationship Dilemma', isCorrect: false },
    { id: 'do4', name: 'Informed Consent / Competence Dilemma', isCorrect: false },
  ],
  narrative: {
    intake:
      'Curtis Bellamy, a 46-year-old white freight dispatcher in a Great Lakes port city, is referred by his HIV clinic\'s social worker for low mood. He was ' +
      'diagnosed with HIV five months ago after a hospital stay for pneumonia and believes he was infected during a separation from his wife, Dana, ' +
      'two years ago. Dana, 41, a dental hygienist, does not know his diagnosis; they have two children. He says, "My numbers were great—undetectable, ' +
      'the doctor said," and later, describing his mornings, mentions he has been "skipping a lot since spring—those pills are a reminder." He reports ' +
      'low mood, poor sleep, and guilt. Near the end he says, "If Dana ever finds out, I\'ll just be done—with everything," then laughs: "The ' +
      'marriage, I mean. Relax." He keeps a handgun in his truck for night shifts at the freight yard. His counselor, Naomi Feld, LPC, reviewed ' +
      'confidentiality and its limits at the start. A close friend of Naomi\'s died of AIDS-related illness in the 1990s, and she notices a surge ' +
      'of anger at Curtis. She is unsure of current transmission science and of what her state permits counselors to disclose about HIV.',
    session1:
      'A structured screen finds passive wishes to be dead twice in the past month, no intent or plan, and no past attempts; the handgun stays in ' +
      'his truck. Curtis has not refilled his antiretroviral medication in nine weeks, and his viral load has not been checked since. He and Dana ' +
      'have condomless sex about weekly, and Dana stopped birth control last month because they are "talking about one more baby." He says, "I ' +
      'could never say the words to her." The clinic social worker has mentioned the health department\'s partner services. Curtis signs the ' +
      'practice\'s general release for the clinic, which tells Naomi that state law requires a separate written authorization specifically naming ' +
      'HIV-related information.',
    session2:
      'Curtis missed his clinic appointment and says he will not tell Dana "ever—she\'ll leave and take the kids." He says restarting medication ' +
      'is pointless: "It\'s too late anyway." When Naomi revisits the limits of confidentiality, he stands and raises his voice: "You said this ' +
      'was confidential! You going to call her?" Naomi consults an experienced colleague and reviews the practice\'s attorney-reviewed policy, ' +
      'which states that the state permits, but does not require, a provider to notify an identified spouse at risk after the patient refuses, and ' +
      'that the health department can notify partners without naming the source.',
  },
  diagnosticRationale:
    'The case turns on confidentiality when a client with a communicable, life-threatening disease is placing an identifiable partner at serious, ' +
    'foreseeable risk. The decisive facts are buried: his "undetectable" status is out of date because he stopped treatment nine weeks ago, the ' +
    'couple has condomless sex weekly, and Dana is trying to conceive. Under the ACA standard on contagious, life-threatening diseases, a counselor ' +
    'may be justified in disclosing to an identifiable third party at serious and foreseeable risk, after assessing the client\'s intent to inform ' +
    'and in line with state law—a permission, not a mandatory duty. Encouraging his own or health-department disclosure comes first. Passive ' +
    'death wishes and handgun access require risk assessment and lethal-means counseling. Mandated reporting, boundaries, and consent are not ' +
    'the central issues.',
  references: [
    { id: 'R1', source: 'ACA Code of Ethics', detail: 'B.2.c. contagious, life-threatening diseases; B.1.d. explanation of limitations; B.2.e. minimal disclosure; C.2.a. boundaries of competence' },
    { id: 'R2', source: 'State law', detail: 'Provider disclosure of HIV status to at-risk spouses or partners; specific authorization for HIV-related information; health department partner services' },
    { id: 'R3', source: 'C-SSRS', detail: 'Structured suicide-risk screening when a death-related statement is minimized' },
    { id: 'R4', source: 'Stanley-Brown SPI', detail: 'Collaborative safety planning including lethal-means counseling for firearm access' },
    { id: 'R5', source: 'Miller & Rollnick (MI)', detail: 'Reflecting ambivalence and evoking change talk about disclosure and treatment re-engagement' },
    { id: 'R6', source: 'Wiger (Documentation)', detail: 'Documenting risk assessment, consultation, legal review, options considered, and rationale' },
  ],
  questions: [
    // ---------------- intake ----------------
    Q('q1', 'profdev', 'Naomi notices a surge of anger toward Curtis linked to her friend\'s death. What should she do?', ['R1'], [
      O('a', 'Tell Curtis about her friend so he understands how serious his choices are for the people around him.', -2,
        { r: 'Self-disclosure that serves the counselor', approach: 'Confrontive self-disclosure', why: 'Using her loss to pressure him puts her feelings at the center and risks shaming him out of care', keys: ['friend died of AIDS-related illness'], mistake: 'Using personal disclosure to express the counselor\'s anger' }),
      O('b', 'Transfer him to another counselor right away, since her history means she cannot be objective with HIV cases.', -1,
        { r: 'Premature referral', approach: 'Refer-out framing', why: 'A strong reaction calls for reflection and supervision first; referral is a later option if objectivity cannot be restored', keys: ['first session'], mistake: 'Treating any countertransference as disqualifying' }),
      O('c', 'Push the feeling aside and continue, since a professional counselor should not let personal history matter.', 0,
        { r: 'Suppression without processing', approach: 'Push-through framing', why: 'Intent matters, but unprocessed anger can leak into judgments about disclosure', keys: ['surge of anger'], mistake: 'Assuming willpower alone controls countertransference' }),
      O('d', 'Reflect on the reaction, seek supervision or consultation, and watch for how it might shape her decisions.', 3,
        { r: 'Self-reflection and supervision', approach: 'Manage countertransference', why: 'Naming and processing the reaction protects her objectivity, especially in decisions about confidentiality', keys: ['friend died in the 1990s', 'anger at Curtis'], mistake: 'Letting personal history drive clinical and ethical decisions' }),
    ]),
    Q('q2', 'assess', 'Curtis says he would "just be done—with everything," then laughs it off. What should Naomi do next?', ['R3'], [
      O('a', 'Follow up with a structured suicide-risk screen and ask directly about the handgun in his truck.', 3,
        { r: 'Structured screen plus means', approach: 'Assess risk to self', why: 'A death-related statement inside a joke needs direct, structured follow-up, and firearm access is a key risk factor', keys: ['"done—with everything"', 'handgun in his truck', 'low mood and guilt'], mistake: 'Accepting the client\'s minimization of a risk statement' }),
      O('b', 'Accept his clarification that he meant the marriage, since he laughed and seemed relaxed when he said it.', -2,
        { r: 'Misses a risk cue', approach: 'Take-at-face-value framing', why: 'A laugh and a reframe do not rule out ideation, especially with low mood, guilt, and a firearm', keys: ['handgun', 'guilt'], mistake: 'Letting the client\'s reframing close a risk inquiry' }),
      O('c', 'Ask whether he is safe tonight, and use a structured screen only if he says that he is not feeling safe.', 0,
        { r: 'Too thin', approach: 'Single-question framing', why: 'Asking is right, but one question may miss passive ideation that a structured screen would capture', keys: ['minimized statement'], mistake: 'Relying on one global safety question' }),
      O('d', 'Make a note to explore the comment at the next session, once he is less guarded about his diagnosis.', -1,
        { r: 'Delays assessment', approach: 'Defer framing', why: 'Delay leaves risk unknown in a client with a firearm and a fresh stressor', keys: ['handgun access'], mistake: 'Postponing risk assessment for rapport' }),
    ]),
    Q('q3', 'profdev', 'Naomi is unsure of current HIV transmission science and of her state\'s disclosure law. What should she do?', ['R1', 'R2'], [
      O('a', 'Rely on what she learned about HIV in graduate school, since the basic facts of transmission have not changed.', -1,
        { r: 'Outdated knowledge', approach: 'Prior-training framing', why: 'Treatment-as-prevention science has changed a great deal; outdated knowledge distorts risk judgments', keys: ['unsure of current science'], mistake: 'Assuming earlier training is current' }),
      O('b', 'Ask Curtis to explain the transmission facts and the law to her, since his clinic will have taught him both.', -2,
        { r: 'Shifts competence onto the client', approach: 'Client-as-expert framing', why: 'Her duty to be competent cannot be met by relying on the client, whose own account is already inaccurate', keys: ['his "undetectable" claim is outdated'], mistake: 'Relying on the client for the facts that govern her duties' }),
      O('c', 'Seek consultation from an HIV-knowledgeable colleague, verify her state\'s law, and update her training.', 3,
        { r: 'Consult, verify, train', approach: 'Address competence gaps', why: 'Accurate science and law are needed before any confidentiality decision; consultation and training close the gap', keys: ['unsure of science and law'], mistake: 'Making disclosure decisions without verified knowledge' }),
      O('d', 'Read general online summaries about HIV and assume her state follows the same rules as most other states.', 0,
        { r: 'Partial, unverified', approach: 'Self-study framing', why: 'Reading helps, but state laws vary and must be verified for her jurisdiction', keys: ['state law varies'], mistake: 'Assuming laws are uniform across states' }),
    ]),
    Q('q4', 'assess', 'Curtis says he is "undetectable" yet has been "skipping a lot." What should Naomi clarify?', ['R1', 'R2'], [
      O('a', 'Whether he has told any friends or family members about his diagnosis, to gauge his overall level of support.', 0,
        { r: 'Useful, but not the key gap', approach: 'Support-network framing', why: 'Support matters, but the contradiction about treatment determines the risk to Dana', keys: ['"skipping a lot"'], mistake: 'Prioritizing support over the facts that define risk' }),
      O('b', 'How often he takes his medication, when his viral load was last checked, and whether he and Dana use protection.', 3,
        { r: 'Clarify adherence and exposure', approach: 'Obtain the facts that define risk', why: 'Being undetectable depends on ongoing treatment; adherence, recent viral load, and protection define whether Dana is at risk', keys: ['"undetectable"', '"skipping a lot since spring"'], mistake: 'Accepting an outdated status report without checking adherence' }),
      O('c', 'Who he was with during the separation from Dana, so she can understand how and when the infection happened.', -1,
        { r: 'Off-target probing', approach: 'Source-tracing framing', why: 'How he was infected does not change the current risk and may shame him', keys: ['separation two years ago'], mistake: 'Focusing on the past instead of current exposure' }),
      O('d', 'Nothing further, since an undetectable viral load means no risk to Dana and no question of disclosure.', -2,
        { r: 'Accepts a contradicted claim', approach: 'Take-at-face-value framing', why: 'His own account shows missed medication, so the undetectable status may no longer hold', keys: ['skipping pills', 'no recent check'], mistake: 'Ignoring a contradiction that changes the risk picture' }),
    ]),
    // ---------------- session1 ----------------
    Q('q5', 'planning', 'Curtis reports passive death wishes, no plan, and a handgun in his truck. Which safety plan fits best?', ['R4'], [
      O('a', 'A collaborative safety plan with lethal-means counseling on storing the handgun away from his truck.', 3,
        { r: 'Safety plan plus lethal means', approach: 'Collaborative safety planning', why: 'Passive ideation without plan or intent fits outpatient safety planning, and reducing access to the firearm is a key step', keys: ['passive wishes, no plan', 'handgun in truck'], mistake: 'Leaving firearm access out of the safety plan' }),
      O('b', 'Have him sign an agreement not to harm himself before each session, and review that agreement every week.', -2,
        { r: 'No-suicide contract', approach: 'Contract framing', why: 'No-harm contracts are not effective and do not replace safety planning or means counseling', keys: ['handgun access'], mistake: 'Relying on a no-suicide contract' }),
      O('c', 'A safety plan listing his warning signs, coping steps, and contacts, leaving the handgun for a later discussion.', -1,
        { r: 'Misses lethal means', approach: 'Partial-plan framing', why: 'A plan without means counseling leaves the most lethal method within reach', keys: ['handgun in truck'], mistake: 'Omitting firearm access from a safety plan' }),
      O('d', 'Arrange an inpatient evaluation today because he has access to a firearm, even though he denies intent or a plan.', 0,
        { r: 'Over-restrictive', approach: 'Hospitalize framing', why: 'It errs toward safety, but his risk profile fits outpatient planning with means counseling', keys: ['no intent or plan'], mistake: 'Choosing a higher level of care than the assessment supports' }),
    ]),
    Q('q6', 'planning', 'Curtis says he "could never say the words" to Dana. Which referral best supports the plan?', ['R2'], [
      O('a', 'A referral to a divorce mediator, since disclosure is likely to end the marriage whatever he decides to do.', -2,
        { r: 'Assumes the outcome', approach: 'Prepare-for-divorce framing', why: 'Assuming the marriage will end is unfounded and does nothing to protect Dana from ongoing exposure', keys: ['wants to keep his family'], mistake: 'Planning for a feared outcome instead of the disclosure task' }),
      O('b', 'A referral to an HIV support group, with disclosure set aside until he feels ready to raise it himself.', -1,
        { r: 'Support without protection', approach: 'Defer-disclosure framing', why: 'Peer support helps, but leaving disclosure open-ended keeps Dana exposed while she tries to conceive', keys: ['condomless sex weekly', 'trying for a baby'], mistake: 'Deferring a time-sensitive risk issue indefinitely' }),
      O('c', 'A referral to couples counseling with Dana so they can talk through his diagnosis in a supported setting.', 0,
        { r: 'Premature before consent', approach: 'Conjoint framing', why: 'Couples work may help after disclosure, but it cannot begin while Dana does not know', keys: ['Dana unaware'], mistake: 'Planning conjoint work before the disclosure question is resolved' }),
      O('d', 'The health department\'s partner services, which can notify Dana without naming him, as one path to disclosure.', 3,
        { r: 'Community resource for notification', approach: 'Refer to community resources', why: 'Partner services give a client who cannot say the words a confidential, professional route to notifying his partner', keys: ['"could never say the words"', 'clinic mentioned partner services'], mistake: 'Overlooking public-health resources built for this task' }),
    ]),
    Q('q7', 'indirect', 'Naomi wants to coordinate with Curtis\'s HIV clinic. What does she need first?', ['R2'], [
      O('a', 'Nothing more than the practice\'s general release, since he has already agreed to coordination with the clinic.', -1,
        { r: 'Insufficient authorization', approach: 'General-release framing', why: 'The clinic has told her state law requires a separate authorization naming HIV information', keys: ['clinic requires specific authorization'], mistake: 'Assuming a general release covers specially protected information' }),
      O('b', 'Permission from the clinic social worker, who referred him and already knows the details of his diagnosis.', -2,
        { r: 'Wrong person consents', approach: 'Referrer-consent framing', why: 'Only the client can authorize release of his HIV information', keys: ['client controls his records'], mistake: 'Treating another provider\'s involvement as consent' }),
      O('c', 'A separate written authorization from Curtis that names HIV-related information, as state law requires.', 3,
        { r: 'Specific authorization', approach: 'Collaborate with other providers lawfully', why: 'Where state law gives HIV information extra protection, coordination requires authorization that names it', keys: ['state law requires separate authorization'], mistake: 'Exchanging specially protected information under a general release' }),
      O('d', 'Have Curtis carry messages between her and the clinic himself, so no release of information is ever needed.', 0,
        { r: 'Workable but unreliable', approach: 'Client-as-messenger framing', why: 'It avoids the release, but he is already giving inaccurate information and missing appointments', keys: ['outdated "undetectable" claim'], mistake: 'Relying on the client to relay critical clinical information' }),
    ]),
    // ---------------- session2 ----------------
    Q('q8', 'interventions', 'Curtis says he will not tell Dana because she will "leave and take the kids." Which response fits best?', ['R5'], [
      O('a', '"If you really cared about Dana, you would tell her this week before she gets pregnant or gets sick from you."', -2,
        { r: 'Shaming confrontation', approach: 'Confrontational framing', why: 'Shame increases resistance and risks driving him out of care, which helps no one, Dana included', keys: ['guilt', 'passive death wishes'], mistake: 'Using shame to force change' }),
      O('b', '"You\'re terrified of losing Dana and the kids, and part of you also doesn\'t want her to get sick."', 3,
        { r: 'Reflects both sides of the ambivalence', approach: 'Motivational interviewing', why: 'A double-sided reflection names his fear and his care for Dana, which opens room for change talk', keys: ['"she\'ll leave and take the kids"', 'guilt'], mistake: 'Arguing for disclosure instead of evoking his own reasons' }),
      O('c', '"Many people tell their partners and the relationship survives, so she may react better than you think."', -1,
        { r: 'Premature reassurance', approach: 'Reassurance framing', why: 'Reassurance dismisses his fear and does not engage his own motivation', keys: ['strong fear of loss'], mistake: 'Countering a fear with reassurance' }),
      O('d', '"What would it take for you to feel ready to tell Dana, and what would help you get to that point sooner?"', 0,
        { r: 'Useful, but skips reflection', approach: 'Open question framing', why: 'The question invites planning, but without reflecting his fear it may feel like pressure', keys: ['refuses to tell her'], mistake: 'Moving to planning before reflecting ambivalence' }),
    ]),
    Q('q9', 'interventions', 'Curtis stands and shouts, "You going to call her?" What should Naomi do first?', ['R5'], [
      O('a', 'Tell him firmly to sit down or the session will end, since raised voices are not allowed in her office.', -1,
        { r: 'Escalates', approach: 'Limit-setting-first framing', why: 'Leading with an ultimatum can escalate an angry, frightened client', keys: ['raised voice', 'fear of exposure'], mistake: 'Starting with a threat instead of de-escalation' }),
      O('b', 'Assure him that she will not tell Dana anything at all, so that he can calm down and stay in the session.', -2,
        { r: 'False promise', approach: 'Appease framing', why: 'Promising absolute confidentiality is untrue given the limits she reviewed and may later breach his trust', keys: ['limits reviewed at intake'], mistake: 'Promising what she may not be able to keep' }),
      O('c', 'Explain the full details of the state law and the practice policy so he understands exactly where things stand.', 0,
        { r: 'Right content, wrong moment', approach: 'Inform-first framing', why: 'He will need this information, but a detailed legal explanation will not land while he is escalated', keys: ['standing, shouting'], mistake: 'Giving complex information before de-escalating' }),
      O('d', 'Stay calm, acknowledge his fear, give him space, and promise that nothing will be decided without telling him.', 3,
        { r: 'De-escalate and stay honest', approach: 'Crisis de-escalation', why: 'A calm stance, validation, space, and an honest commitment to transparency lower arousal without false promises', keys: ['"You going to call her?"', 'stands and raises voice'], mistake: 'Either escalating or offering false reassurance' }),
    ]),
    Q('q10', 'interventions', 'Curtis says restarting medication is pointless: "It\'s too late anyway." What should Naomi do?', ['R1'], [
      O('a', 'Explain that steady treatment can lower the virus to levels that do not pass on sexually, and urge a clinic visit.', 3,
        { r: 'Accurate psychoeducation and linkage', approach: 'Provide psychoeducation', why: 'Treatment can restore viral suppression and protect Dana; correcting the belief and linking him to the clinic stays within scope', keys: ['"It\'s too late anyway"', 'missed appointment'], mistake: 'Leaving a hopeless, inaccurate belief unchallenged' }),
      O('b', 'Advise him to restart his old pills tonight at a higher dose to make up for the nine weeks that he missed.', -2,
        { r: 'Medical advice outside scope', approach: 'Dose advice framing', why: 'Restarting or changing antiretroviral therapy must be guided by his prescriber', keys: ['nine weeks without medication'], mistake: 'Giving medication instructions as a counselor' }),
      O('c', 'Accept his view for now and focus the rest of the session on his depressed mood instead of his medication.', -1,
        { r: 'Colludes with hopelessness', approach: 'Mood-only framing', why: 'His belief is inaccurate and drives risk to himself and Dana; leaving it in place is a missed intervention', keys: ['hopeless statement'], mistake: 'Avoiding a medically consequential belief' }),
      O('d', 'Tell him to ask his clinic whether it is too late, and return to the subject once he has heard back from them.', 0,
        { r: 'Defers to the clinic only', approach: 'Defer framing', why: 'Clinic follow-up is needed, but he just missed an appointment; brief accurate information may motivate him now', keys: ['missed appointment'], mistake: 'Handing off without addressing the belief' }),
    ]),
    Q('q11', 'legal', 'Curtis still refuses to tell Dana. What is Naomi\'s most appropriate position under the code and her state\'s law?', ['R1', 'R2'], [
      O('a', 'Call Dana today without telling Curtis, since she is at clear risk and a warning should not be delayed.', -2,
        { r: 'Premature, covert disclosure', approach: 'Warn-now framing', why: 'The code calls for assessing his intent and encouraging disclosure first; a covert call skips those steps and the client\'s right to be told', keys: ['partner services available', 'no notice to client'], mistake: 'Disclosing without first exhausting client-led options and informing him' }),
      O('b', 'Keep everything confidential, since a counselor has no role in HIV disclosure and the law gives her no option.', -1,
        { r: 'Misreads the code and law', approach: 'Absolute-confidentiality framing', why: 'The code allows disclosure to an identifiable partner at serious risk, and her state permits it', keys: ['state permits provider notification', 'Dana trying to conceive'], mistake: 'Believing confidentiality cannot yield to an identified partner\'s risk' }),
      O('c', 'Keep urging his own or health-department disclosure, consult, and weigh disclosure only if he still refuses.', 3,
        { r: 'Encourage first; disclosure permitted, not required', approach: 'Apply the contagious-disease standard', why: 'The counselor assesses intent, encourages client-led disclosure, consults, and follows state law, which permits but does not require notification', keys: ['refuses to tell Dana', 'state permits, does not require'], mistake: 'Treating disclosure as either mandatory or forbidden' }),
      O('d', 'Tell him the law requires her to warn Dana within a week unless he tells her first, to push him to act.', 0,
        { r: 'Misstates the law to pressure him', approach: 'Deadline framing', why: 'A timeline may be reasonable, but the law permits rather than requires notification, and misstating it damages trust', keys: ['policy: permits, not requires'], mistake: 'Misrepresenting the law to motivate a client' }),
    ]),
    Q('q12', 'legal', 'If Naomi concludes disclosure is justified, how should she carry it out?', ['R1', 'R2'], [
      O('a', 'Ask the HIV clinic to take the matter over and step back from it herself, since disclosure is a medical task.', 0,
        { r: 'Coordination without ownership', approach: 'Hand-off framing', why: 'Clinic and health-department involvement is valuable, but she remains responsible for her own decision and its process', keys: ['clinic involvement'], mistake: 'Treating an ethical decision as someone else\'s task' }),
      O('b', 'Tell Curtis first, then share only what Dana needs to protect herself, directly or via the health department.', 3,
        { r: 'Notice, minimal disclosure, lawful channel', approach: 'Disclose only what is necessary', why: 'Informing the client beforehand and limiting disclosure to what protects the partner follow the code and state law', keys: ['identifiable spouse', 'health department notification'], mistake: 'Disclosing more than needed or without telling the client' }),
      O('c', 'Send Dana a text message explaining the situation so she has the information in writing as soon as possible.', -1,
        { r: 'Insecure, impersonal channel', approach: 'Text-message framing', why: 'Texting sensitive health information is insecure and gives Dana no support or follow-up', keys: ['sensitive diagnosis'], mistake: 'Using an insecure channel for a sensitive disclosure' }),
      O('d', 'Tell Dana his full history, including the separation, so she understands everything that led to his infection.', -2,
        { r: 'Exceeds what is necessary', approach: 'Full-disclosure framing', why: 'Only the information needed for her protection may be shared; his history is not necessary', keys: ['separation two years ago'], mistake: 'Disclosing beyond the minimum necessary' }),
    ]),
    Q('q13', 'legal', 'How should Naomi document this situation?', ['R6'], [
      O('a', 'Record his statements, her risk assessments, consultations, the law reviewed, options weighed, and her rationale.', 3,
        { r: 'Complete decision record', approach: 'Securely maintain case notes', why: 'Documenting facts, consultations, legal review, alternatives, and reasoning supports a defensible, accountable decision', keys: ['colleague consulted', 'attorney-reviewed policy'], mistake: 'Leaving the reasoning behind a confidentiality decision undocumented' }),
      O('b', 'Leave his HIV status out of the record entirely, so it cannot be seen by anyone who might later request it.', -1,
        { r: 'Incomplete record', approach: 'Omit framing', why: 'Omitting the central clinical fact makes the record inaccurate; protection comes from secure handling', keys: ['HIV is central to care'], mistake: 'Protecting privacy by making the record inaccurate' }),
      O('c', 'Keep a separate personal file on the disclosure question at home, so it stays apart from the clinical record.', -2,
        { r: 'Shadow record', approach: 'Separate-file framing', why: 'Off-site personal files undermine security and accountability and fall outside proper record keeping', keys: ['secure records required'], mistake: 'Storing clinical information outside the secure record' }),
      O('d', 'Document only the final decision about disclosure, since the steps that led to it are not part of the record.', 0,
        { r: 'Outcome without reasoning', approach: 'Outcome-only framing', why: 'Recording the decision is necessary, but the process and rationale are what make it defensible', keys: ['multiple consultations'], mistake: 'Documenting the outcome without the reasoning' }),
    ]),
  ],
};

module.exports = { CASES: [D975, D976, D977, D978] };
