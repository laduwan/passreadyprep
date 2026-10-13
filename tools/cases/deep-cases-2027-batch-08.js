// deep-cases-2027-batch-08.js — 2027 NCMHCE deep cases (Eating / Crisis)
// ncmhce-D955 · plan 5 · Eating · medium · adult         — Binge-Eating Disorder, Moderate (F50.811)
// ncmhce-D956 · plan 6 · Eating · easy · child           — Avoidant/Restrictive Food Intake Disorder (F50.82)
// ncmhce-D957 · plan 7 · Eating · hard · child           — Anorexia Nervosa, Restricting Type, Severe (F50.012)
// ncmhce-D958 · plan 8 · Crisis · hard · adult           — Suicidal Behavior / Acute Risk (R45.851)
// ncmhce-D959 · plan 9 · Crisis · medium · child         — Nonsuicidal Self-Injury (R45.88)
//
// 2027 NCMHCE specification; hand-authored; validate with check2027.js.
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
// D955 — Binge-Eating Disorder, Moderate (plan 5, medium, adult)
// ============================================================================
const D955 = {
  id: 'ncmhce-D955',
  title: 'A sales manager who stopped seeing doctors brings his evening binges to telehealth',
  category: 'Eating',
  difficulty: 'medium',
  plan: 5,
  population: 'adult',
  primaryDiagnosis: { name: 'Binge-Eating Disorder, Moderate', code: 'F50.811' },
  diagnosis: { name: 'Binge-Eating Disorder, Moderate', code: 'F50.811' },
  differentialOptions: [
    { id: 'do1', name: 'Bulimia Nervosa, Moderate', isCorrect: false },
    { id: 'do2', name: 'Binge-Eating Disorder, Moderate', isCorrect: true },
    { id: 'do3', name: 'Other Specified Feeding or Eating Disorder (night eating syndrome)', isCorrect: false },
    { id: 'do4', name: 'Major Depressive Disorder, Single Episode, Mild', isCorrect: false },
  ],
  narrative: {
    intake:
      'Kwabena “Kobby” Asante, a 50-year-old Ghanaian-born American regional sales manager for an irrigation-equipment company, lives in Macon, Georgia, ' +
      'with his wife, Akosua, and two teenagers, and attends a Ghanaian Methodist congregation. He self-refers to a Georgia telehealth counseling practice after ' +
      'his primary care chart read “obesity—counsel diet” and a nurse announced his weight loudly in a hallway; he has avoided his physician for a year since. ' +
      'For eight months he has eaten very large amounts of food within about an hour, in his car or hotel room, an average of five evenings a week, feeling ' +
      'unable to stop, eating until uncomfortably full and alone out of embarrassment, then feeling disgusted and guilty. He eats a small breakfast, often ' +
      'skips lunch on busy sales days, and denies vomiting, laxatives, fasting, or compulsive exercise. He has type 2 diabetes and a BMI of 36. His PHQ-9 is 9, ' +
      'and he denies suicidal ideation. Writing her intake note, the counselor notices she privately thought, “If he would just stop eating in the car.” She ' +
      'has general CBT training but no training in eating disorder treatment.',
    session1:
      'With Kobby’s signed release, his physician’s office sends a note recommending an 800-calorie meal-replacement program and confirming that lisdexamfetamine ' +
      'was started three weeks ago. Kobby says his binges dropped to three last week, but he now sleeps four to five hours and notices his heart racing at night; ' +
      'he has not told his physician. He says losing weight is his only goal. His wife cooks fufu and light soup, the family shares a large meal after church ' +
      'every Sunday, and he worries that refusing food from customers who host him on sales calls would be disrespectful.',
    session2:
      'Sessions are by video. When the counselor mentions the weight figures in the physician’s note, Kobby says, “You sound like every doctor—you think I’m ' +
      'just lazy,” and turns off his camera. The next week he logs in from a hotel in a neighboring state where the counselor holds no license or compact ' +
      'privilege. The practice has just introduced an AI note-taking tool, and Kobby asks whether “a computer is listening.” His insurer’s utilization ' +
      'reviewer then requests his complete session notes before authorizing more sessions.',
  },
  diagnosticRationale:
    'Recurrent binge episodes (large amount in a discrete period with loss of control) occur at least weekly for more than three months, with eating alone from ' +
    'embarrassment, eating until uncomfortably full, and marked distress afterward. There is no regular compensatory behavior, which rules out bulimia nervosa, ' +
    'and the episodes are discrete binges rather than night eating after awakening. Severity follows binge frequency: an average of about five episodes per ' +
    'week falls in the moderate range (4–7). Body weight and diabetes are medical context, not diagnostic criteria. Mild depressive symptoms (PHQ-9 = 9) do not ' +
    'meet criteria for a major depressive episode.',
  references: [
    { id: 'R1', source: 'DSM-5-TR', detail: 'Binge-eating disorder criteria; severity by episodes per week (mild 1–3, moderate 4–7, severe 8–13, extreme 14+); differential from bulimia nervosa' },
    { id: 'R2', source: 'NICE guidelines', detail: 'Eating disorders (NG69): eating-disorder-focused CBT for binge-eating disorder; regular eating; weight loss is not a target of the eating disorder treatment' },
    { id: 'R3', source: 'ACA Code of Ethics', detail: 'Competence and new specialty areas; personal values and bias; technology-assisted services and informed consent' },
    { id: 'R4', source: 'HIPAA', detail: 'Minimum necessary standard; special protection of psychotherapy notes; business associate requirements for vendors handling PHI' },
    { id: 'R5', source: 'Counseling Compact', detail: 'Telehealth practice occurs where the client is located; a privilege to practice is needed in that state' },
    { id: 'R6', source: 'Corey (Theory & Practice)', detail: 'Therapeutic alliance, repair of ruptures, and multicultural counseling' },
    { id: 'R7', source: 'Wiger (Documentation)', detail: 'Documenting client-reported medication effects and coordinating with prescribers' },
  ],
  questions: [
    // ---------------- intake (profdev, assess, assess, profdev) ----------------
    Q('q1', 'profdev', 'intake', 'Writing her intake note, the counselor notices her private thought, “If he would just stop eating in the car.” What should she do first?', ['R3'], [
      O('a', 'Leave the thought unexamined, since a reaction she has kept to herself is unlikely to affect how she treats him.', -1,
        { r: 'Unspoken bias still shapes care', approach: 'Ignore the reaction', why: 'Weight bias influences tone, focus, and treatment choices even when unspoken, and Kobby has already disengaged from care over stigma', keys: ['avoided his physician for a year', 'nurse announced his weight'], mistake: 'Believing an unspoken bias cannot leak into clinical work' }),
      O('b', 'Recognize it as weight bias, reflect on it in supervision or consultation, and watch how it shapes her choices.', 3,
        { r: 'Self-reflection plus supervision', approach: 'Practice self-reflection', why: 'Counselors examine personal values and biases that could harm clients and use supervision to keep them out of care, which matters most for a client hurt by weight stigma', keys: ['private thought about his eating', 'history of weight stigma from providers'], mistake: 'Treating a bias as harmless because it was not said aloud' }),
      O('c', 'Plan to take a general diversity course at her next renewal and continue the case as planned in the meantime.', 0,
        { r: 'Too general and too late', approach: 'Defer to future training', why: 'Training helps, but the bias is active now in this case; reflection and supervision address it before it shapes the next session', keys: ['first sessions pending'], mistake: 'Postponing self-examination to a later training cycle' }),
      O('d', 'Tell Kobby about her reaction to model honesty and use it to motivate him toward the weight loss his doctor advised.', -2,
        { r: 'Burdens client; repeats stigma', approach: 'Disclose the bias', why: 'Sharing a stigmatizing reaction serves the counselor, not the client, and pushes the weight focus that drove him from care', keys: ['shame about eating', 'avoided physician'], mistake: 'Using self-disclosure of a bias as a motivational tool' }),
    ]),
    Q('q2', 'assess', 'intake', 'Which finding best supports the moderate severity specifier for Kobby’s binge-eating disorder?', ['R1'], [
      O('a', 'His BMI of 36 together with his type 2 diabetes, which indicate significant medical consequences of his eating.', -1,
        { r: 'Specifier is not weight-based', approach: 'Medical severity framing', why: 'Binge-eating severity is rated by binge frequency, not by BMI or medical comorbidity', keys: ['five episodes a week'], mistake: 'Using body weight to rate eating disorder severity' }),
      O('b', 'His PHQ-9 score of 9 and his guilt after binges, which together point to a moderate level of emotional distress.', 0,
        { r: 'Right specifier, wrong basis', approach: 'Distress framing', why: 'Distress is required for the diagnosis, but the specifier is set by binge frequency; the answer is right only by accident', keys: ['frequency-based specifier'], mistake: 'Rating severity from mood scores instead of episode counts' }),
      O('c', 'His binge episodes average about five evenings a week, which falls in the four-to-seven range for moderate.', 3,
        { r: 'Frequency sets the specifier', approach: 'Apply the DSM-5-TR rule', why: 'Severity for binge-eating disorder is based on binge episodes per week; four to seven is moderate', keys: ['average of five evenings a week', 'eight months'], mistake: 'Rating severity from weight or distress rather than frequency' }),
      O('d', 'His obesity better explains the eating pattern, so a specifier should wait until his medical weight issues are treated.', -2,
        { r: 'Treats obesity as the cause', approach: 'Obesity-explains framing', why: 'Obesity is not a mental disorder and does not explain loss-of-control eating; this reasoning withholds a diagnosis and care he needs', keys: ['loss of control', 'marked distress'], mistake: 'Treating obesity as an alternative explanation for binge eating' }),
    ]),
    Q('q3', 'assess', 'intake', 'What most clearly distinguishes Kobby’s presentation from bulimia nervosa?', ['R1'], [
      O('a', 'He has no regular compensatory behavior after binges, such as vomiting, laxatives, fasting, or excessive exercise.', 3,
        { r: 'No recurrent compensation', approach: 'Apply the discriminating criterion', why: 'Bulimia nervosa requires recurrent inappropriate compensatory behavior; binge-eating disorder excludes it', keys: ['denies vomiting, laxatives, fasting, exercise', 'small breakfast, skipped lunches'], mistake: 'Confusing irregular meals with recurrent compensatory behavior' }),
      O('b', 'His weight is in the obese range, while people with bulimia nervosa usually have a body weight in the normal range.', 0,
        { r: 'Typical, not defining', approach: 'Weight-based framing', why: 'Weight patterns differ on average, but weight is not a criterion; people with bulimia can have higher weights', keys: ['criterion-based differential'], mistake: 'Using average body weight as a diagnostic discriminator' }),
      O('c', 'His binges happen alone in the evening in hotel rooms, a timing pattern that is specific to binge-eating disorder.', -1,
        { r: 'Setting is not a discriminator', approach: 'Timing framing', why: 'Secretive evening binges occur in both disorders; timing does not separate them', keys: ['eating alone from embarrassment'], mistake: 'Treating when and where binges occur as diagnostic' }),
      O('d', 'He feels disgust and guilt afterward, while people with bulimia nervosa tend to feel relief with little distress.', -2,
        { r: 'Reverses the clinical picture', approach: 'Affect framing', why: 'Shame and distress after binges are common in bulimia nervosa too; this misreads both disorders', keys: ['marked distress is shared'], mistake: 'Believing people with bulimia are untroubled by their binges' }),
    ]),
    Q('q4', 'profdev', 'intake', 'The counselor has general CBT training but none in eating disorder treatment. What is the most appropriate step?', ['R3', 'R2'], [
      O('a', 'Refer him to a residential eating disorder program, since binge eating can be treated safely only by specialists.', -1,
        { r: 'Over-restrictive referral', approach: 'Refer-out framing', why: 'He is medically and psychiatrically suited to outpatient care; a residential referral overshoots and ends a fragile alliance', keys: ['outpatient presentation', 'avoidance of care'], mistake: 'Equating a training gap with a need for a higher level of care' }),
      O('b', 'Treat him with general weight-management coaching, which falls within her scope and needs no extra training.', -2,
        { r: 'Wrong treatment and a competence gap', approach: 'Weight-coaching framing', why: 'Weight-loss coaching is not treatment for binge-eating disorder and can worsen the restrict-binge cycle', keys: ['loss-of-control eating', 'skipped lunches'], mistake: 'Substituting diet coaching for eating disorder treatment' }),
      O('c', 'Start CBT for his low mood now and add eating disorder work once she has completed a specialty certification.', 0,
        { r: 'Delays the primary problem', approach: 'Mood-first framing', why: 'His mood is mild; the binge eating is the presenting problem, and competence can be built through consultation now', keys: ['PHQ-9 of 9', 'five binges a week'], mistake: 'Postponing the core treatment until a credential is earned' }),
      O('d', 'Seek consultation and targeted training in CBT for eating disorders, and refer if that does not close the gap.', 3,
        { r: 'Build competence; refer if needed', approach: 'Assess need for specialized training', why: 'When entering a specialty area, counselors obtain training and consultation to practice competently and refer if they cannot', keys: ['general CBT training only', 'binge-eating disorder'], mistake: 'Either ignoring the gap or abandoning the client' }),
    ]),

    // ---------------- session1 (indirect, planning, indirect, planning) ----------------
    Q('q5', 'indirect', 'session1', 'Kobby reports sleeping four to five hours and a racing heart at night since starting lisdexamfetamine. What should the counselor do?', ['R7'], [
      O('a', 'Document the effects he reports and, under the signed release, notify his prescriber promptly about them.', 3,
        { r: 'Document and inform the prescriber', approach: 'Document self-reported medication effects', why: 'Counselors record client-reported medication effects and, with consent, pass them to the prescriber, who decides what to do', keys: ['racing heart at night', 'has not told his physician', 'release signed'], mistake: 'Holding on to medically relevant information instead of coordinating' }),
      O('b', 'Advise him to take half his dose until his sleep improves, then note that change in her next progress note.', -2,
        { r: 'Prescribing outside scope', approach: 'Dose-advice framing', why: 'Changing a dose is a medical decision; advising it is a scope violation that could also cause harm', keys: ['counselor scope'], mistake: 'Giving medication instructions as a counselor' }),
      O('c', 'Reassure him that these effects usually fade within a month and recheck them at the next session before acting.', -1,
        { r: 'Minimizes a cardiac symptom', approach: 'Wait-and-see framing', why: 'A racing heart on a stimulant needs prescriber review; reassurance delays it', keys: ['heart racing', 'type 2 diabetes'], mistake: 'Offering medical reassurance the counselor cannot give' }),
      O('d', 'Encourage him to mention the effects at his next primary care visit and record his report in her own notes.', 0,
        { r: 'Right idea, too slow', approach: 'Client-relays framing', why: 'Documenting and encouraging him is appropriate, but given cardiac symptoms and his avoidance of his physician, direct coordination is better', keys: ['avoided physician for a year'], mistake: 'Relying on a client who avoids care to relay urgent information' }),
    ]),
    Q('q6', 'planning', 'session1', 'Which initial treatment plan best fits Kobby’s diagnosis?', ['R2'], [
      O('a', 'Begin with insight-oriented work on the childhood roots of his eating before addressing his current pattern.', -1,
        { r: 'Not the first-line approach', approach: 'Insight-first framing', why: 'Eating-disorder-focused CBT targets the current binge cycle first; insight work alone does not', keys: ['five binges a week'], mistake: 'Choosing an exploratory approach over the indicated CBT' }),
      O('b', 'Eating-disorder-focused CBT that starts with self-monitoring and regular meals and snacks, not strict dieting.', 3,
        { r: 'CBT with regular eating', approach: 'Implement the indicated treatment', why: 'CBT for binge eating builds a regular eating pattern and self-monitoring to break the restrict-binge cycle; strict dieting is not a goal of that treatment', keys: ['skips lunch on busy days', 'evening binges'], mistake: 'Making dieting the first step when restriction feeds binges' }),
      O('c', 'Support the 800-calorie meal-replacement plan first, since rapid weight loss will ease his shame and his urges.', -2,
        { r: 'Severe restriction fuels binges', approach: 'Diet-first framing', why: 'Very-low-calorie restriction is a known trigger of binge eating and runs against the core of treatment', keys: ['skipped lunches precede evening binges'], mistake: 'Assuming weight loss will treat binge eating' }),
      O('d', 'Start with supportive counseling for his work stress and add eating-focused CBT after he has settled into care.', 0,
        { r: 'Delays the indicated work', approach: 'Rapport-first framing', why: 'Stress matters and rapport is needed, but eating-focused CBT can begin now with a supportive stance', keys: ['symptom frequency'], mistake: 'Sequencing the core treatment behind general support' }),
    ]),
    Q('q7', 'indirect', 'session1', 'How should the counselor respond to the physician’s recommendation of an 800-calorie meal-replacement program?', ['R2', 'R7'], [
      O('a', 'Defer to the physician’s plan without comment, since dietary recommendations fall outside a counselor’s scope.', -1,
        { r: 'Silence leaves care in conflict', approach: 'Defer framing', why: 'Diet prescription is medical, but sharing how restriction affects binge eating is within scope and needed for a coherent plan', keys: ['plan conflict'], mistake: 'Confusing scope limits with withholding relevant clinical input' }),
      O('b', 'Ask Kobby to pass the counseling rationale along to his physician himself at his next scheduled appointment.', 0,
        { r: 'Indirect and uncertain', approach: 'Client-relays framing', why: 'Client involvement is good, but he avoids his physician; direct, consented contact is more reliable', keys: ['avoided physician for a year'], mistake: 'Leaving coordination to a client who avoids care' }),
      O('c', 'With his consent, contact the physician to explain how strict dieting can maintain bingeing and agree on a plan.', 3,
        { r: 'Coordinate a shared plan', approach: 'Collaborate with other providers', why: 'Care coordination lets the counselor share the eating disorder rationale while the physician keeps medical decisions', keys: ['release signed', '800-calorie program'], mistake: 'Leaving two providers working against each other' }),
      O('d', 'Tell Kobby to stop the medication and ignore the diet advice, since both conflict with what counseling requires.', -2,
        { r: 'Scope violation', approach: 'Override framing', why: 'A counselor cannot direct a client to stop medication or disregard medical advice', keys: ['counselor scope'], mistake: 'Overriding medical decisions instead of coordinating' }),
    ]),
    Q('q8', 'planning', 'session1', 'Which goal is best written for Kobby’s treatment plan?', ['R2'], [
      O('a', 'Lose 30 pounds in three months by keeping intake under 1,200 calories daily and weighing himself each morning.', -2,
        { r: 'Restrictive goal fuels the cycle', approach: 'Weight-loss goal', why: 'Calorie caps and daily weighing reinforce the restriction and shame that maintain binge eating', keys: ['weight loss his only goal', 'skips lunch'], mistake: 'Writing a dieting goal into eating disorder treatment' }),
      O('b', 'Eat three meals and two planned snacks each day, and review his progress with the counselor whenever needed.', 0,
        { r: 'Right target, not measurable', approach: 'Partial SMART goal', why: 'Regular eating is the right target, but there is no timeframe or measure of the binge outcome', keys: ['regular eating'], mistake: 'Omitting the measurable, time-bound parts of a goal' }),
      O('c', 'Reduce binge episodes from about five to one or fewer per week within 12 weeks, tracked in a daily eating log.', 3,
        { r: 'Specific, measurable, timed', approach: 'Write a SMART goal', why: 'A frequency target with a baseline, timeframe, and tracking method is measurable and aligned with the diagnosis', keys: ['about five binges a week', 'self-monitoring'], mistake: 'Writing vague or weight-based goals' }),
      O('d', 'Build a healthier relationship with food and feel better about his body as treatment moves forward over time.', -1,
        { r: 'Not measurable', approach: 'Global goal', why: 'The aim is reasonable but cannot be measured or reviewed at planned intervals', keys: ['SMART criteria'], mistake: 'Confusing a broad aspiration with a treatment goal' }),
    ]),

    // ---------------- session2 (interventions, interventions, legal, legal, legal) ----------------
    Q('q9', 'interventions', 'session2', 'Kobby says, “You sound like every doctor—you think I’m just lazy,” and turns off his camera. The best response is:', ['R6'], [
      O('a', '“You’re right to name that. I raised your weight, and it felt like those visits. Can we talk about what happened?”', 3,
        { r: 'Acknowledge and repair', approach: 'Resolve the therapeutic rupture', why: 'Owning the counselor’s part and inviting discussion repairs the rupture and can strengthen the alliance', keys: ['turns off camera', 'history of weight stigma'], mistake: 'Defending or pressing on instead of repairing' }),
      O('b', '“I’m not like those doctors at all. I only brought up weight because it was in the note your physician sent me.”', -1,
        { r: 'Defensive', approach: 'Self-justifying framing', why: 'Defending the counselor’s intent dismisses his experience and widens the rupture', keys: ['rupture'], mistake: 'Explaining one’s intent instead of attending to the client’s experience' }),
      O('c', '“Let’s take a short break and return to your food log when you feel ready to turn your camera back on again.”', 0,
        { r: 'Avoids the rupture', approach: 'Pause framing', why: 'A pause respects his feelings but leaves the rupture unaddressed', keys: ['rupture unspoken'], mistake: 'Moving past a rupture instead of exploring it' }),
      O('d', '“Your health depends on losing weight, so we need to keep discussing it even when it feels uncomfortable.”', -2,
        { r: 'Repeats the stigma', approach: 'Push-through framing', why: 'Insisting on weight confirms his fear and risks him leaving care again', keys: ['avoided care after stigma'], mistake: 'Prioritizing weight over the alliance and the diagnosis' }),
    ]),
    Q('q10', 'interventions', 'session2', 'How should the counselor address Sunday family meals and customers who offer him food on sales calls?', ['R2', 'R6'], [
      O('a', 'Advise his wife to stop cooking traditional Ghanaian dishes, since high-starch foods are likely triggering binges.', -2,
        { r: 'Culturally harmful and inaccurate', approach: 'Food-blame framing', why: 'Banning cultural foods is stigmatizing and reinforces restriction, which maintains bingeing', keys: ['fufu and light soup', 'family meals'], mistake: 'Blaming cultural foods instead of the restrict-binge cycle' }),
      O('b', 'Ask him to skip the family meals and turn down food on sales calls until his binge eating is under control.', -1,
        { r: 'Adds restriction and isolation', approach: 'Avoidance framing', why: 'Avoiding shared meals adds restriction and cuts him off from support and his culture', keys: ['meal after church'], mistake: 'Treating social eating as the problem' }),
      O('c', 'Explore what shared food means to him and plan regular eating that includes family meals and accepting hospitality.', 3,
        { r: 'Integrate culture into the plan', approach: 'Explore culture and context', why: 'Regular eating works best when it fits his family, faith community, and work norms around hospitality', keys: ['Sunday meal', 'refusing food seems disrespectful'], mistake: 'Building a meal plan that ignores cultural meaning' }),
      O('d', 'Focus on his weekday hotel binges first and leave family and cultural eating patterns for a later phase of care.', 0,
        { r: 'Sequencing gap', approach: 'Narrow-focus framing', why: 'Hotel binges matter, but regular eating spans his whole week, including family and work meals', keys: ['regular eating across the week'], mistake: 'Separating cultural context from the core plan' }),
    ]),
    Q('q11', 'legal', 'session2', 'Kobby logs in from a hotel in a neighboring state where the counselor holds no license or compact privilege. What should she do?', ['R5'], [
      O('a', 'Go ahead with the session, since he lives in Georgia and residency rather than his location sets her jurisdiction.', -1,
        { r: 'Location, not residency, governs', approach: 'Residency framing', why: 'Telehealth occurs where the client is physically located at the time of service', keys: ['hotel in a neighboring state'], mistake: 'Believing client residency determines jurisdiction' }),
      O('b', 'Hold the session this once after noting his location, then check the board rules on interstate practice afterward.', 0,
        { r: 'Acts first, checks later', approach: 'Document-and-proceed framing', why: 'Documentation is good, but she would still be practicing without authority in that state', keys: ['no license or privilege there'], mistake: 'Treating a jurisdiction rule as something to check after practicing' }),
      O('c', 'Proceed but record his Georgia home address as the session location so the claim meets payer requirements.', -2,
        { r: 'Falsified record', approach: 'Falsify-location framing', why: 'Misstating the location is unlicensed practice plus falsified documentation and billing', keys: ['claim submitted'], mistake: 'Altering records to fit licensure or billing rules' }),
      O('d', 'Confirm his location, explain she cannot counsel him there, and reschedule for his return, giving crisis resources.', 3,
        { r: 'Practice only where authorized', approach: 'Follow license portability rules', why: 'She may practice only where she holds a license or compact privilege; rescheduling with crisis resources protects him and complies', keys: ['verified location', 'no compact privilege'], mistake: 'Holding the session anyway because the client is a resident' }),
    ]),
    Q('q12', 'legal', 'session2', 'Kobby asks whether “a computer is listening” now that the practice uses an AI note-taking tool. The counselor should:', ['R3', 'R4'], [
      O('a', 'Tell him the tool only writes a summary, so his consent is not needed as long as she reviews each note herself.', -1,
        { r: 'Consent is still required', approach: 'Review-replaces-consent framing', why: 'Reviewing output is required, but clients must be informed about and consent to AI tools that process their sessions', keys: ['client asked directly'], mistake: 'Treating clinician review as a substitute for informed consent' }),
      O('b', 'Explain how the tool works and stores data, get his informed consent, and honor his choice if he opts out.', 3,
        { r: 'Inform, consent, allow opt-out', approach: 'Use AI tools ethically', why: 'Technology-assisted tools require informed consent about function, storage, and risks, a vendor agreement, and a real choice', keys: ['client concern', 'new AI tool'], mistake: 'Using an AI tool without the client’s informed consent' }),
      O('c', 'Reassure him that nothing is recorded and keep the tool running, since the practice wants it used in every session.', -2,
        { r: 'Deceptive', approach: 'False-reassurance framing', why: 'Misinforming a client about recording violates honesty and informed consent and erodes trust', keys: ['tool is processing audio'], mistake: 'Deceiving a client to follow practice policy' }),
      O('d', 'Quietly turn the tool off for his sessions without discussing it, so that his concern does not affect their rapport.', 0,
        { r: 'Protective but not transparent', approach: 'Silent opt-out framing', why: 'Disabling it protects him, but he deserves a direct answer and a documented choice', keys: ['client asked a question'], mistake: 'Avoiding the consent conversation the client opened' }),
    ]),
    Q('q13', 'legal', 'session2', 'His insurer’s reviewer requests Kobby’s complete session notes before authorizing more sessions. What is most appropriate?', ['R4'], [
      O('a', 'Send the minimum necessary, such as diagnosis, plan, and progress data, to show medical necessity for more care.', 3,
        { r: 'Minimum necessary for authorization', approach: 'Support reimbursement with proper documentation', why: 'Reviewers receive the information needed to establish medical necessity; process notes are not required', keys: ['authorization request', 'documented binge frequency'], mistake: 'Over-disclosing the whole record or refusing to document necessity' }),
      O('b', 'Refuse the request and offer self-pay, since sharing any clinical details with an insurer would violate his privacy.', 0,
        { r: 'Overly restrictive', approach: 'Refuse framing', why: 'Sharing minimum necessary data for payment is permitted; refusal may cost him coverage', keys: ['covered benefit'], mistake: 'Treating all disclosure to payers as a privacy breach' }),
      O('c', 'Send every note, including her process notes, since the insurer is paying and is entitled to the full record.', -1,
        { r: 'Exceeds minimum necessary', approach: 'Full-record framing', why: 'Psychotherapy notes have special protection, and payers are entitled only to what is needed', keys: ['minimum necessary standard'], mistake: 'Assuming payment entitles a payer to the full record' }),
      O('d', 'Raise his severity to severe binge-eating disorder so the reviewer approves the sessions without more questions.', -2,
        { r: 'Upcoding is fraud', approach: 'Upcode framing', why: 'Changing a diagnosis to secure payment misrepresents his condition and is insurance fraud', keys: ['five binges a week = moderate'], mistake: 'Altering a diagnosis to gain reimbursement' }),
    ]),
  ],
};

// ============================================================================
// D956 — Avoidant/Restrictive Food Intake Disorder (plan 6, easy, child)
// ============================================================================
const D956 = {
  id: 'ncmhce-D956',
  title: 'After a choking scare at a cousin’s party, a second grader will only eat what she can sip',
  category: 'Eating',
  difficulty: 'easy',
  plan: 6,
  population: 'child',
  primaryDiagnosis: { name: 'Avoidant/Restrictive Food Intake Disorder', code: 'F50.82' },
  diagnosis: { name: 'Avoidant/Restrictive Food Intake Disorder', code: 'F50.82' },
  differentialOptions: [
    { id: 'do1', name: 'Anorexia Nervosa, Restricting Type', isCorrect: false },
    { id: 'do2', name: 'Specific Phobia, Other Type (choking)', isCorrect: false },
    { id: 'do3', name: 'Avoidant/Restrictive Food Intake Disorder', isCorrect: true },
    { id: 'do4', name: 'Separation Anxiety Disorder', isCorrect: false },
  ],
  narrative: {
    intake:
      'Pa Nhia Vang, a 7-year-old Hmong American second grader in St. Paul, Minnesota, is brought to an outpatient counseling practice by her parents, Tou (a ' +
      'warehouse supervisor) and Mai (a dental assistant). Her paternal grandmother, Yer, lives with the family, speaks mainly Hmong, and cooks most weekday ' +
      'meals. Six weeks ago Pa Nhia choked on a piece of chicken at a cousin’s birthday party; her father dislodged it with back blows and no hospital care was ' +
      'needed. Since then she eats only yogurt, smoothies, applesauce, mashed potatoes, and thin rice porridge, and spits out anything she has to chew, saying ' +
      '“my throat will close.” Before the incident she ate a varied diet. She has lost 1.5 kg. Her pediatrician found no swallowing or medical problem, noted ' +
      'her weight fell from the 45th to the 30th percentile, judged her medically stable for outpatient care, and referred her. She has no concern about her ' +
      'body size or shape and says she misses rice and her grandmother’s chicken “but I’m scared.” She sleeps well, plays happily, and is doing well in school. ' +
      'The counselor reviews consent with the parents and plans how to explain counseling to Pa Nhia. The counselor has used exposure with anxious children but ' +
      'has little experience with feeding problems and knows little about Hmong family roles or foodways.',
    session1:
      'The counselor and family build a “brave food ladder” from soft pasta up to chicken and rice. Yer has been hiding small pieces of meat in the porridge, and ' +
      'Pa Nhia now gags on porridge too. Her parents have started saying, “One more bite or no tablet.” Yer wants to join sessions but prefers Hmong, and Pa ' +
      'Nhia’s 11-year-old brother offers to interpret. The parents sign a release for the pediatrician, who asks for an update and plans a weight check in four weeks.',
    session2:
      'Pa Nhia has practiced “brave bites” of soft pasta at home. In session she becomes teary before a bite and says her throat feels tight. Her parents ask ' +
      'whether the counselor could coach a dinner by video from their home. The school nurse emails the counselor directly asking for Pa Nhia’s treatment plan ' +
      'to arrange lunch support, and Mai has begun texting photos of meals to the counselor’s personal cell phone.',
  },
  diagnosticRationale:
    'Pa Nhia’s eating became sharply restricted after a choking episode, driven by fear of an aversive consequence (choking), with weight loss and a drop ' +
    'across weight percentiles. There is no disturbance in how she experiences her body weight or shape, which rules out anorexia nervosa, and her pediatrician ' +
    'found no medical condition that explains the restriction. Because the eating disturbance and weight loss are the focus of clinical attention, ARFID is ' +
    'diagnosed rather than a specific phobia. She has no other psychiatric symptoms and a clear, recent onset, which makes this a straightforward presentation.',
  references: [
    { id: 'R1', source: 'DSM-5-TR', detail: 'ARFID: restriction with weight loss or nutritional impact; fear of aversive consequences; no body-image disturbance; not better explained by a medical condition' },
    { id: 'R2', source: 'ACA Code of Ethics', detail: 'Informed consent and assent of minors; confidentiality and release of information; competence and multicultural competence' },
    { id: 'R3', source: 'Corey (Theory & Practice)', detail: 'Behavioral graded exposure, reinforcement, and family-involved treatment for childhood fears' },
    { id: 'R4', source: 'HIPAA', detail: 'Authorization for disclosures to schools; minimum necessary; securing electronic PHI' },
    { id: 'R5', source: 'Hays (Assessment)', detail: 'Developmentally appropriate assessment; culturally responsive intake; use of qualified interpreters' },
    { id: 'R6', source: 'NBCC Code of Ethics', detail: 'Telehealth practice standards, emergency planning, and secure electronic communication' },
  ],
  questions: [
    // ---------------- intake (assess, profdev, assess, profdev) ----------------
    Q('q1', 'assess', 'intake', 'Which finding most clearly supports ARFID rather than anorexia nervosa for Pa Nhia?', ['R1'], [
      O('a', 'She restricts out of fear of choking and shows no concern at all about her body size or shape.', 3,
        { r: 'Fear-based restriction, no body-image concern', approach: 'Apply the discriminating criterion', why: 'ARFID restriction is driven by fear of aversive consequences, sensory issues, or low interest, without the weight or shape disturbance of anorexia nervosa', keys: ['“my throat will close”', 'no concern about body size'], mistake: 'Diagnosing anorexia nervosa from weight loss alone' }),
      O('b', 'She has lost 1.5 kg and dropped from the 45th to the 30th percentile on her growth chart.', 0,
        { r: 'Shared by both disorders', approach: 'Weight-change framing', why: 'Weight loss supports a feeding or eating disorder but does not separate ARFID from anorexia nervosa', keys: ['weight loss'], mistake: 'Using weight loss as the discriminator' }),
      O('c', 'She is only seven years old, and anorexia nervosa is not diagnosed in children before puberty.', -1,
        { r: 'Age does not rule it out', approach: 'Age framing', why: 'Anorexia nervosa can occur in prepubertal children; the discriminator is body-image disturbance', keys: ['criterion-based differential'], mistake: 'Believing anorexia cannot occur in young children' }),
      O('d', 'She still eats soft foods and smoothies, which shows that she is not truly restricting her intake.', -2,
        { r: 'Denies the restriction', approach: 'Minimize framing', why: 'Eating only soft foods with weight loss is restriction; this reasoning would deny a diagnosis and care', keys: ['1.5 kg lost', 'percentile drop'], mistake: 'Discounting restriction because some food is eaten' }),
    ]),
    Q('q2', 'profdev', 'intake', 'The counselor has used exposure with anxious children but has little feeding experience. What is the best step?', ['R2'], [
      O('a', 'Decline the case and refer to a hospital feeding clinic, since feeding problems belong to medical specialists.', -1,
        { r: 'Unneeded referral', approach: 'Refer-out framing', why: 'She is medically stable and the counselor has related exposure skills; consultation can close the gap', keys: ['medically stable', 'exposure experience'], mistake: 'Treating a narrow gap as a reason to refuse care' }),
      O('b', 'Proceed with her general child-anxiety approach, since a fear of choking works like any other fear.', -2,
        { r: 'Overlooks feeding-specific risks', approach: 'Generalist framing', why: 'Feeding exposure involves nutrition, gagging, and growth monitoring that general anxiety work does not address', keys: ['weight loss', 'gagging'], mistake: 'Assuming general skills cover a specialty area' }),
      O('c', 'Seek consultation from a colleague experienced in pediatric feeding exposure while she begins treatment.', 3,
        { r: 'Targeted consultation', approach: 'Consult for a specific modality', why: 'Counselors extend related skills into a new area through consultation and training rather than practicing beyond competence', keys: ['little feeding experience', 'exposure skills'], mistake: 'Either refusing the case or practicing without support' }),
      O('d', 'Read about feeding disorders on her own before each session and rely on that reading to guide the work.', 0,
        { r: 'Helpful but not sufficient', approach: 'Self-study framing', why: 'Reading builds knowledge, but consultation provides case-specific oversight', keys: ['new skill area'], mistake: 'Substituting reading for consultation' }),
    ]),
    Q('q3', 'assess', 'intake', 'How should the counselor handle consent for Pa Nhia’s counseling?', ['R2'], [
      O('a', 'Have Pa Nhia sign the consent form herself, since she is the client and the one who will be in session.', -1,
        { r: 'A child cannot give legal consent', approach: 'Child-consents framing', why: 'A 7-year-old cannot give legal consent; her parents consent and she gives assent', keys: ['age 7'], mistake: 'Confusing a child’s assent with legal consent' }),
      O('b', 'Obtain consent from her parents only, since a child her age is too young to have a say in her care.', 0,
        { r: 'Leaves out assent', approach: 'Parent-only framing', why: 'Parental consent is required, but seeking the child’s assent respects her and improves engagement', keys: ['child can understand simple terms'], mistake: 'Skipping assent for young children' }),
      O('c', 'Begin exposure work right away and finish the consent paperwork once she has started to eat more foods.', -2,
        { r: 'Treatment without consent', approach: 'Treat-first framing', why: 'Starting treatment before informed consent violates ethics and law', keys: ['consent required before treatment'], mistake: 'Delaying consent until after treatment begins' }),
      O('d', 'Obtain her parents’ informed consent and Pa Nhia’s assent, explained simply as practicing brave eating.', 3,
        { r: 'Parental consent plus child assent', approach: 'Obtain consent and assent', why: 'Guardians give legal consent; the counselor seeks the child’s assent in developmentally appropriate language', keys: ['minor client', 'parents present'], mistake: 'Skipping assent or confusing it with consent' }),
    ]),
    Q('q4', 'profdev', 'intake', 'The counselor knows little about Hmong family roles or foodways. What is the most appropriate response?', ['R2', 'R5'], [
      O('a', 'Ask the family to explain Hmong culture to her over the first sessions so she can learn as treatment goes on.', 0,
        { r: 'Shifts the learning to the family', approach: 'Client-as-teacher framing', why: 'Asking about their own practices is good, but she should not rely on the family for her cultural education', keys: ['counselor responsibility'], mistake: 'Making clients responsible for the counselor’s cultural learning' }),
      O('b', 'Pursue training on Hmong families and foodways and ask the family how meals and roles work in their home.', 3,
        { r: 'Training plus humble inquiry', approach: 'Training on working with different cultures', why: 'Counselors build cultural knowledge through training and learn each family’s practices directly', keys: ['grandmother cooks most meals', 'little cultural knowledge'], mistake: 'Either ignoring culture or relying only on the family' }),
      O('c', 'Refer the family to a Hmong counselor, since only someone from the same culture can understand their needs.', -1,
        { r: 'Matching is not required', approach: 'Match-or-refer framing', why: 'Multicultural competence, not automatic matching, is the standard unless the family requests it', keys: ['no stated preference'], mistake: 'Assuming cultural matching is required' }),
      O('d', 'Keep culture out of the plan, since a fear of choking has nothing to do with the family’s background.', -2,
        { r: 'Ignores the food context', approach: 'Culture-blind framing', why: 'Exposure foods, meal routines, and who feeds her are cultural; ignoring them weakens the plan', keys: ['grandmother’s chicken', 'rice porridge'], mistake: 'Treating culture as irrelevant to a feeding plan' }),
    ]),

    // ---------------- session1 (planning, indirect, indirect, planning) ----------------
    Q('q5', 'planning', 'session1', 'Which initial treatment plan best fits Pa Nhia’s ARFID?', ['R3'], [
      O('a', 'Wait for her fear to fade on its own and offer her favorite foods only, so that mealtimes stay calm for now.', -1,
        { r: 'Avoidance maintains fear', approach: 'Accommodation framing', why: 'Accommodating avoidance keeps the fear in place and her diet narrow', keys: ['six weeks of restriction'], mistake: 'Accommodating avoidance instead of treating it' }),
      O('b', 'Graded exposure up her brave food ladder with praise, and parent coaching to support calm, no-pressure meals.', 3,
        { r: 'Graded exposure with parent coaching', approach: 'Develop an initial treatment plan', why: 'Fear-based ARFID responds to gradual exposure to feared textures with reinforcement, with caregivers coached to support practice', keys: ['brave food ladder', 'fear of choking'], mistake: 'Using pressure or accommodation instead of graded exposure' }),
      O('c', 'Have her eat a full plate of chicken and rice at each meal so she learns quickly that she will not choke.', -2,
        { r: 'Flooding a young child', approach: 'Forced-exposure framing', why: 'Forcing a feared food can worsen fear and gagging; exposure must be graded and collaborative', keys: ['gags on porridge'], mistake: 'Confusing forced eating with exposure therapy' }),
      O('d', 'Start weekly play therapy on her feelings about the party, then move to eating practice once she is calmer.', 0,
        { r: 'Delays exposure', approach: 'Feelings-first framing', why: 'Play can build rapport, but exposure is the active treatment and should start early', keys: ['weight down'], mistake: 'Sequencing the active treatment behind general support' }),
    ]),
    Q('q6', 'indirect', 'session1', 'Yer wants to join sessions but prefers Hmong, and Pa Nhia’s 11-year-old brother offers to interpret. What should the counselor do?', ['R5'], [
      O('a', 'Accept the brother’s offer, since he knows the family and will make his grandmother feel comfortable.', -1,
        { r: 'Child interpreter is inappropriate', approach: 'Family-interpreter framing', why: 'A child interpreter may mistranslate, filter, or be burdened by adult clinical content', keys: ['11-year-old brother'], mistake: 'Using a family child as an interpreter' }),
      O('b', 'Ask Yer to stay out of sessions, since her parents can pass the main points along to her at home.', -2,
        { r: 'Excludes a key caregiver', approach: 'Exclude framing', why: 'Yer cooks most meals and must be part of the plan; excluding her over language is inequitable', keys: ['cooks most weekday meals'], mistake: 'Excluding a caregiver because of a language barrier' }),
      O('c', 'Use a free phone translation app during sessions so that Yer can follow along in her own language.', 0,
        { r: 'Better, but unreliable', approach: 'App framing', why: 'Apps can help in a pinch but are not reliable for clinical content or privacy', keys: ['clinical detail'], mistake: 'Relying on consumer apps for clinical interpretation' }),
      O('d', 'Arrange a qualified Hmong medical interpreter so that Yer can take part fully in her granddaughter’s care.', 3,
        { r: 'Qualified interpreter', approach: 'Secure translation services', why: 'A trained interpreter supports accurate communication and lets a key caregiver take part', keys: ['Yer prefers Hmong', 'cooks meals'], mistake: 'Using family members or apps instead of qualified interpreters' }),
    ]),
    Q('q7', 'indirect', 'session1', 'With a signed release, the pediatrician asks for an update and plans a weight check in four weeks. What should the counselor do?', ['R2'], [
      O('a', 'Send a brief update on goals and progress and agree to share weight results and any changes in eating.', 3,
        { r: 'Coordinate around growth', approach: 'Collaborate with other providers', why: 'Ongoing coordination lets the pediatrician track growth while counseling tracks feeding progress', keys: ['release signed', 'weight check planned'], mistake: 'Working in parallel without sharing progress' }),
      O('b', 'Hold off on contact until the four-week weight check, since the pediatrician will see her progress there.', 0,
        { r: 'Coordination too late', approach: 'Wait framing', why: 'The pediatrician asked for an update now; delaying misses early coordination', keys: ['update requested'], mistake: 'Waiting for the next visit instead of coordinating' }),
      O('c', 'Send her full session notes so the pediatrician has every detail about the family and their meals.', -1,
        { r: 'More than needed', approach: 'Full-record framing', why: 'Only information relevant to her care should be shared', keys: ['minimum necessary'], mistake: 'Over-disclosing session content to another provider' }),
      O('d', 'Ask the pediatrician to start an appetite medication so that she will eat more of the foods she avoids.', -2,
        { r: 'Outside scope and off target', approach: 'Medication-request framing', why: 'Her problem is fear, not appetite; directing prescribing is outside counselor scope', keys: ['fear of choking'], mistake: 'Recommending medication for a fear-based feeding problem' }),
    ]),
    Q('q8', 'planning', 'session1', 'Which goal is best written for Pa Nhia’s treatment plan?', ['R3'], [
      O('a', 'Pa Nhia will feel less scared of eating and enjoy family meals again as her treatment goes along.', -1,
        { r: 'Not measurable', approach: 'Global goal', why: 'The goal is caring but has no measure or timeframe', keys: ['SMART criteria'], mistake: 'Writing an aspiration instead of a goal' }),
      O('b', 'Pa Nhia will eat chicken and rice at every meal within one week of starting her exposure practice.', -2,
        { r: 'Unrealistic and pressured', approach: 'Rapid-goal framing', why: 'Skipping the ladder sets her up to fail and may raise fear', keys: ['gags on porridge'], mistake: 'Setting an unattainable goal' }),
      O('c', 'Within six weeks, Pa Nhia will eat two chewable foods from her ladder at dinner on five of seven nights.', 3,
        { r: 'Specific, measurable, timed', approach: 'Write a SMART goal', why: 'The goal names the behavior, frequency, and timeframe and follows the ladder', keys: ['brave food ladder'], mistake: 'Writing vague or unrealistic goals' }),
      O('d', 'Pa Nhia will practice brave bites at home each day and talk about her progress at counseling sessions.', 0,
        { r: 'Activity, not outcome', approach: 'Process goal', why: 'Daily practice is useful, but the goal lacks a measurable outcome and timeframe', keys: ['practice at home'], mistake: 'Confusing a task with a measurable objective' }),
    ]),

    // ---------------- session2 (legal, interventions, interventions, legal, legal) ----------------
    Q('q9', 'legal', 'session2', 'The school nurse emails asking for Pa Nhia’s treatment plan to arrange lunch support. What should the counselor do?', ['R4', 'R2'], [
      O('a', 'Email the full treatment plan, since school staff share the goal of helping her eat at lunchtime.', -2,
        { r: 'No authorization', approach: 'Shared-goal framing', why: 'A shared goal does not authorize disclosure; a release is required', keys: ['no school release'], mistake: 'Disclosing to school staff without authorization' }),
      O('b', 'Obtain her parents’ written authorization and then share only what the nurse needs for lunch support.', 3,
        { r: 'Authorization, then minimum necessary', approach: 'Follow release-of-information procedures', why: 'Disclosure to a school requires guardian authorization and is limited to what is needed', keys: ['nurse request', 'minor client'], mistake: 'Sharing without a release or sharing too much' }),
      O('c', 'Ignore the email, since the nurse has no role in counseling and is not part of the treatment team.', -1,
        { r: 'Shuts out helpful support', approach: 'Ignore framing', why: 'Ignoring a stakeholder misses a chance to support lunches with proper consent', keys: ['lunch support'], mistake: 'Treating school staff as irrelevant to care' }),
      O('d', 'Reply that she cannot confirm Pa Nhia is a client and ask the nurse to contact her parents directly.', 0,
        { r: 'Protective but incomplete', approach: 'Redirect framing', why: 'Confidentiality is upheld, but she can also offer to obtain a release with the parents', keys: ['coordination opportunity'], mistake: 'Stopping at refusal instead of facilitating consent' }),
    ]),
    Q('q10', 'interventions', 'session2', 'Before a brave bite, Pa Nhia becomes teary and says her throat feels tight. What should the counselor do?', ['R3'], [
      O('a', 'End the practice for today and switch to a game, so that she does not connect counseling with fear.', 0,
        { r: 'Avoidance reinforces fear', approach: 'Stop framing', why: 'Ending practice teaches that distress means stop; a coping step keeps the exposure going at her pace', keys: ['teary before a bite'], mistake: 'Ending exposure at peak anxiety' }),
      O('b', 'Tell her that her throat is fine and she must take the bite now, so she learns that her fear is wrong.', -2,
        { r: 'Coercive', approach: 'Insist framing', why: 'Pressure increases fear and erodes trust in a young child', keys: ['age 7', 'fear of choking'], mistake: 'Using pressure in exposure work' }),
      O('c', 'Ask her parents to take her home and try the bite later, when she seems calmer and more ready.', -1,
        { r: 'Hands off the moment', approach: 'Defer framing', why: 'Sending practice home at peak fear misses coached coping', keys: ['in-session practice'], mistake: 'Avoiding the coached moment' }),
      O('d', 'Guide her in belly breathing, offer a smaller step on her ladder, and praise each brave try she makes.', 3,
        { r: 'Coping skill plus graded step', approach: 'Facilitate skill development', why: 'A calming skill, a smaller step, and praise keep exposure graded and build mastery', keys: ['throat feels tight', 'brave food ladder'], mistake: 'Ending practice or pushing too hard' }),
    ]),
    Q('q11', 'interventions', 'session2', 'Her parents have been saying, “One more bite or no tablet.” What psychoeducation should the counselor give them?', ['R3'], [
      O('a', 'Explain that pressure and threats can deepen her fear, and coach them to offer ladder foods calmly with praise.', 3,
        { r: 'Low pressure, positive reinforcement', approach: 'Provide psychoeducation', why: 'Pressure raises mealtime anxiety; calm offering and praise for brave tries support exposure', keys: ['“one more bite or no tablet”', 'Yer hiding meat'], mistake: 'Endorsing pressure or hidden foods' }),
      O('b', 'Explain that the tablet rule is reasonable, but they should also take away dessert whenever she refuses a bite.', -2,
        { r: 'Escalates punishment', approach: 'More-consequences framing', why: 'Adding punishments raises fear and conflict around eating', keys: ['fear-based restriction'], mistake: 'Using punishment to force eating' }),
      O('c', 'Explain that they should stop mentioning food entirely and let her decide what to eat for a few months.', -1,
        { r: 'Withdraws needed support', approach: 'Hands-off framing', why: 'Full withdrawal leaves her restricting; parents need to support graded practice', keys: ['weight down'], mistake: 'Replacing pressure with complete accommodation' }),
      O('d', 'Explain that rewards help, so they should offer extra tablet time for every bite of chicken she eats.', 0,
        { r: 'Reward is fine, target is off', approach: 'Reward framing', why: 'Positive reinforcement helps, but rewarding only chicken skips the graded steps', keys: ['ladder starts at soft pasta'], mistake: 'Skipping the hierarchy when rewarding' }),
    ]),
    Q('q12', 'legal', 'session2', 'The parents ask whether the counselor could coach a family dinner by video from their home. What must be in place first?', ['R6'], [
      O('a', 'Telehealth consent, a confirmed home address, and an emergency plan, including calling 911 if she chokes.', 3,
        { r: 'Consent plus emergency plan', approach: 'Follow telemental health guidelines', why: 'Telehealth requires informed consent, a verified location, and a plan for emergencies, which matters during eating practice', keys: ['choking history', 'home video session'], mistake: 'Starting telehealth without an emergency plan' }),
      O('b', 'Nothing additional, since the parents already consented to counseling and will be in the room at dinner.', -2,
        { r: 'Skips telehealth safeguards', approach: 'Assume-covered framing', why: 'In-office consent does not cover telehealth risks or emergency steps', keys: ['choking risk'], mistake: 'Treating office consent as covering telehealth' }),
      O('c', 'A free video app the family already uses, so the call is easy for them to join from the kitchen table.', -1,
        { r: 'Platform may not be secure', approach: 'Convenience framing', why: 'Telehealth requires a secure, compliant platform', keys: ['PHI in session'], mistake: 'Choosing convenience over compliance' }),
      O('d', 'A brief verbal agreement from the parents at the start of the call, noted in the record afterward.', 0,
        { r: 'Consent too thin', approach: 'Verbal-consent framing', why: 'Some consent is obtained, but the location and emergency plan are missing', keys: ['emergency plan'], mistake: 'Skipping location and emergency planning' }),
    ]),
    Q('q13', 'legal', 'session2', 'Mai has begun texting meal photos to the counselor’s personal cell phone. What should the counselor do?', ['R4', 'R6'], [
      O('a', 'Keep receiving them on her phone, since meal photos are not sensitive and help her track progress.', -1,
        { r: 'PHI on a personal device', approach: 'Convenience framing', why: 'Photos tied to a client are PHI and should not sit on an unsecured personal device', keys: ['personal cell'], mistake: 'Treating client data as non-sensitive' }),
      O('b', 'Block the number so the texts stop and say nothing more about it at the next session with the family.', -2,
        { r: 'Unexplained cutoff', approach: 'Block framing', why: 'Cutting off contact without explanation harms the alliance and leaves the need unmet', keys: ['useful meal data'], mistake: 'Handling a boundary issue by silent avoidance' }),
      O('c', 'Ask Mai to stop texting and move the photos into the secure portal, then delete them from her phone.', 3,
        { r: 'Secure channel, secure records', approach: 'Securely maintain records', why: 'Client information belongs in secure systems; the counselor redirects and removes PHI from personal devices', keys: ['personal cell phone', 'meal photos'], mistake: 'Leaving PHI on a personal device' }),
      O('d', 'Ask Mai to text only during office hours so that the photos arrive when she is able to review them.', 0,
        { r: 'Timing, not security', approach: 'Office-hours framing', why: 'Limiting hours is a boundary step but does not fix the security problem', keys: ['unsecured device'], mistake: 'Addressing timing rather than security' }),
    ]),
  ],
};

// ============================================================================
// D957 — Anorexia Nervosa, Restricting Type, Severe (plan 7, hard, child)
// ============================================================================
const D957 = {
  id: 'ncmhce-D957',
  title: 'A robotics captain-elect’s “clean eating” hides a resting heart rate in the low 40s',
  category: 'Eating',
  difficulty: 'hard',
  plan: 7,
  population: 'child',
  primaryDiagnosis: { name: 'Anorexia Nervosa, Restricting Type, Severe', code: 'F50.012' },
  diagnosis: { name: 'Anorexia Nervosa, Restricting Type, Severe', code: 'F50.012' },
  differentialOptions: [
    { id: 'do1', name: 'Avoidant/Restrictive Food Intake Disorder', isCorrect: false },
    { id: 'do2', name: 'Anorexia Nervosa, Restricting Type, Severe', isCorrect: true },
    { id: 'do3', name: 'Body Dysmorphic Disorder, with muscle dysmorphia', isCorrect: false },
    { id: 'do4', name: 'Major Depressive Disorder, Single Episode, Moderate', isCorrect: false },
  ],
  narrative: {
    intake:
      'Kiran Bhatt, a 15-year-old Gujarati Indian American sophomore and captain-elect of his school’s robotics team, is brought to an outpatient group practice ' +
      'by his mother, Hetal, a pharmacist. His parents separated a year ago and share joint legal custody; his father, Rajesh, “agreed by text” to the ' +
      'appointment. After a health-class nutrition unit and a sports physical where he was called “a little heavy,” Kiran cut out rice, roti, sweets, and ' +
      '“unclean” foods over five months, now eats about 800 calories a day, runs six miles daily, and has lost 14 kg; his BMI is 15.2. He weighs himself ' +
      'several times a day, says he is “still soft around the middle,” and is terrified of gaining weight. He denies bingeing, vomiting, laxatives, and ' +
      'suicidal ideation. Hetal is reassured because his pediatrician called him healthy four months ago. In passing she mentions that he “grayed out” and ' +
      'had to sit down when he stood up at a robotics competition last Saturday, and that his smartwatch shows a resting heart rate around 42, “because he’s ' +
      'so fit now.” The counselor, newly licensed, recovered from anorexia nervosa as a teenager and notices she is silently comparing her own teenage weight ' +
      'to his. She has no training in family-based treatment (FBT), and the practice has no eating disorder specialist.',
    session1:
      'At the counselor’s urging, Kiran was evaluated at an emergency department that evening: his heart rate was 38 while asleep and his pulse rose 35 beats ' +
      'on standing. He spent six days on an adolescent medical unit for stabilization and refeeding and was discharged at a BMI of 15.9 to an adolescent ' +
      'medicine physician who will check vitals weekly and a registered dietitian. The team recommends FBT; the counselor has since completed introductory ' +
      'FBT training and arranged weekly consultation with a certified FBT therapist. Hetal signs releases for the physician and dietitian. Kiran’s school ' +
      'lunch is unsupervised; the school counselor and robotics coach offer to help, and Hetal agrees to share limited information with the school counselor. ' +
      'Kiran wants to resume running right away and travel with the robotics team next month.',
    session2:
      'Because Hetal cannot leave work, the FBT family meal is held by video from her kitchen, with Rajesh joining from his apartment. Kiran pushes his plate ' +
      'away and says, “My heart rate is low because I’m an athlete.” Hetal starts to argue nutrition facts, then pleads. Seen alone afterward, Kiran admits ' +
      'he throws away the lunch his mother packs and asks the counselor not to tell his parents. The next day Rajesh calls, angry that he never agreed to ' +
      '“force-feeding,” demands copies of all records, and says he wants treatment stopped.',
  },
  diagnosticRationale:
    'Kiran restricts intake to a significantly low body weight, has an intense fear of gaining weight with weight-control behavior (daily running, frequent ' +
    'weighing), and shows disturbance in how he experiences his body (“still soft around the middle”), meeting criteria for anorexia nervosa. There is no ' +
    'binge eating or purging in the last three months, so the restricting type applies. A BMI of 15.2 falls in the severe range (15.0–15.99) on the adult ' +
    'cutoffs; for adolescents severity is judged with BMI percentiles, and his BMI is below the 3rd percentile for age. ARFID is excluded by his weight ' +
    'and shape concerns, and muscle dysmorphia by his drive to be smaller rather than more muscular. Bradycardia and orthostatic changes signal medical ' +
    'instability that requires medical evaluation before outpatient treatment.',
  references: [
    { id: 'R1', source: 'DSM-5-TR', detail: 'Anorexia nervosa criteria A–C; restricting type; severity by BMI (severe 15–15.99) with percentiles for youth; ARFID differential' },
    { id: 'R2', source: 'NICE guidelines', detail: 'Eating disorders (NG69): physical risk assessment, admission for medical instability, and anorexia-focused family therapy as first-line for young people' },
    { id: 'R3', source: 'ACA Code of Ethics', detail: 'Competence; personal impairment and self-monitoring; confidentiality of minors and its limits; parents’ rights' },
    { id: 'R4', source: 'State law', detail: 'Parental access to a minor’s records and consent under joint legal custody' },
    { id: 'R5', source: 'HIPAA', detail: 'Disclosures to schools with authorization; minimum necessary; parent as personal representative' },
    { id: 'R6', source: 'NBCC Code of Ethics', detail: 'Telehealth: verifying location, emergency procedures, and multi-site sessions' },
    { id: 'R7', source: 'Miller & Rollnick (MI)', detail: 'Reflective listening and rolling with resistance; avoiding the righting reflex' },
  ],
  questions: [
    // ---------------- intake (profdev, profdev, assess, assess) ----------------
    Q('q1', 'profdev', 'intake', 'The counselor notices she is silently comparing her own teenage weight to Kiran’s. What is the most appropriate response?', ['R3'], [
      O('a', 'Disclose her own recovery to Kiran right away, so he can see that someone like him got better.', -1,
        { r: 'Premature self-disclosure', approach: 'Disclose framing', why: 'Early disclosure driven by her own reaction serves the counselor and can shift focus to her', keys: ['silent comparison'], mistake: 'Using self-disclosure to manage one’s own reaction' }),
      O('b', 'Set her reaction aside and continue, since her recovery means she understands him better than most.', -2,
        { r: 'Unexamined countertransference', approach: 'Lived-experience framing', why: 'Lived experience can help but can also distort judgment; active comparison signals a need for supervision', keys: ['comparing weights'], mistake: 'Assuming recovery equals objectivity' }),
      O('c', 'Recognize it as countertransference, bring it to supervision, and use self-care to stay well herself.', 3,
        { r: 'Self-reflection plus supervision', approach: 'Practice self-reflection and seek supervision', why: 'Counselors monitor for personal reactions that could impair their work and seek supervision to keep care client-centered', keys: ['recovered from anorexia', 'comparing her weight'], mistake: 'Ignoring a reaction that could affect judgment or her own recovery' }),
      O('d', 'Transfer Kiran to another counselor at once, since her history makes any eating case unsafe for her.', 0,
        { r: 'Premature transfer', approach: 'Transfer framing', why: 'Supervision may resolve it; transfer is an option only if impairment persists', keys: ['newly noticed reaction'], mistake: 'Treating any reaction as automatic disqualification' }),
    ]),
    Q('q2', 'profdev', 'intake', 'The counselor has no FBT training and the practice has no eating disorder specialist. What should she do?', ['R3', 'R2'], [
      O('a', 'Use general CBT with Kiran alone, since that is within her current training and can start this week.', -1,
        { r: 'Not the indicated approach', approach: 'Familiar-method framing', why: 'Family-based treatment is first-line for adolescents; individual CBT alone is not the standard here', keys: ['15-year-old', 'severe anorexia'], mistake: 'Choosing a familiar method over the indicated one' }),
      O('b', 'Assess her readiness honestly, then seek FBT training and consultation or refer to a specialty team.', 3,
        { r: 'Assess competence; train or refer', approach: 'Assess need for specialized training', why: 'Severe adolescent anorexia calls for FBT and a medical team; she must gain that competence under consultation or refer', keys: ['no FBT training', 'no specialist on site'], mistake: 'Practicing beyond competence in a high-risk disorder' }),
      O('c', 'Wait until she earns a specialty certification and see Kiran for supportive talks in the meantime.', 0,
        { r: 'Delays effective care', approach: 'Wait framing', why: 'Supportive talks delay needed treatment; consultation or referral addresses the gap now', keys: ['medical risk'], mistake: 'Delaying effective treatment for a credential' }),
      O('d', 'Proceed on her own, since her personal history with anorexia gives her enough expertise to treat it.', -2,
        { r: 'Personal history is not training', approach: 'Lived-experience framing', why: 'Recovery does not confer clinical competence in FBT or medical monitoring', keys: ['no FBT training'], mistake: 'Treating lived experience as professional competence' }),
    ]),
    Q('q3', 'assess', 'intake', 'Given Hetal’s comments, what is the most important next step in assessing Kiran?', ['R2'], [
      O('a', 'Schedule weekly outpatient sessions and ask his pediatrician to see him at the next routine visit.', 0,
        { r: 'Underestimates acute risk', approach: 'Routine-care framing', why: 'Low heart rate and near-fainting need same-day medical review, not a routine visit', keys: ['heart rate around 42', '“grayed out”'], mistake: 'Accepting outdated medical clearance' }),
      O('b', 'Accept the pediatrician’s report from four months ago, since a low heart rate is common in teenagers who run.', -2,
        { r: 'Misses medical instability', approach: 'Athlete framing', why: 'The clearance predates most of the weight loss; bradycardia with orthostatic symptoms in anorexia is dangerous', keys: ['14 kg lost', 'smartwatch heart rate'], mistake: 'Attributing bradycardia to fitness in anorexia' }),
      O('c', 'Begin a full biopsychosocial interview first and plan to request medical records within a few weeks.', -1,
        { r: 'Wrong sequence', approach: 'History-first framing', why: 'A thorough history matters, but possible instability must be evaluated first', keys: ['orthostatic symptoms'], mistake: 'Putting history-taking before medical safety' }),
      O('d', 'Arrange an urgent medical evaluation today for possible instability before planning outpatient care.', 3,
        { r: 'Urgent medical evaluation', approach: 'Determine the appropriate level of care', why: 'Bradycardia and orthostatic symptoms in severe anorexia signal possible instability that may need hospitalization', keys: ['resting heart rate ~42', 'grayed out on standing', 'BMI 15.2'], mistake: 'Overlooking vital signs buried in reassurance' }),
    ]),
    Q('q4', 'assess', 'intake', 'Which finding most clearly supports anorexia nervosa rather than ARFID?', ['R1'], [
      O('a', 'His intense fear of weight gain and his view that he is “still soft around the middle” despite weight loss.', 3,
        { r: 'Weight fear and body-image disturbance', approach: 'Apply the discriminating criterion', why: 'Fear of gaining weight and disturbed body experience define anorexia nervosa and are absent in ARFID', keys: ['“still soft around the middle”', 'weighs himself often'], mistake: 'Missing body-image disturbance as the discriminator' }),
      O('b', 'His 14 kg weight loss over five months, which is far more than is typically seen in a teenager who has ARFID.', 0,
        { r: 'Weight loss occurs in both', approach: 'Severity framing', why: 'Large weight loss can occur in ARFID; it does not separate the two', keys: ['weight loss'], mistake: 'Using the amount of weight lost to differentiate' }),
      O('c', 'His daily six-mile runs, which show he is focused on building muscle rather than restricting food.', -2,
        { r: 'Misreads the drive', approach: 'Muscle framing', why: 'His exercise serves weight loss, not muscle gain; this reasoning could miss anorexia entirely', keys: ['drive to be smaller'], mistake: 'Mistaking compensatory exercise for muscle-building' }),
      O('d', 'His being a boy, since ARFID is mainly diagnosed in boys and anorexia nervosa mainly in girls.', -1,
        { r: 'Gender is not a criterion', approach: 'Gender framing', why: 'Both disorders occur across genders; boys with anorexia are often missed because of this myth', keys: ['male presentation'], mistake: 'Using gender to make the diagnosis' }),
    ]),

    // ---------------- session1 (indirect, indirect, planning, planning) ----------------
    Q('q5', 'indirect', 'session1', 'After discharge, how should the counselor work with Kiran’s physician and dietitian?', ['R2'], [
      O('a', 'Leave medical matters to them and focus only on counseling, sharing information if they ask for it.', -1,
        { r: 'Siloed care', approach: 'Separate-lanes framing', why: 'Anorexia treatment requires an integrated team with regular communication', keys: ['weekly vitals', 'FBT'], mistake: 'Working in parallel instead of as a team' }),
      O('b', 'Ask the physician to send her his weight each week, but keep counseling observations within her practice.', 0,
        { r: 'One-way coordination', approach: 'Receive-only framing', why: 'Receiving data helps, but the team also needs the counselor’s observations', keys: ['team approach'], mistake: 'Treating coordination as one-way' }),
      O('c', 'Set up regular team contact to share weights, vitals, and session observations, with a plan if he slips.', 3,
        { r: 'Integrated team communication', approach: 'Collaborate with other treatment providers', why: 'A multidisciplinary team with shared data and a clear plan for deterioration is the standard for adolescent anorexia', keys: ['releases signed', 'weekly vitals'], mistake: 'Failing to set a shared plan for medical deterioration' }),
      O('d', 'Take over the weekly weigh-ins in her own office, so the medical visits can be spaced further apart.', -2,
        { r: 'Replaces medical monitoring', approach: 'Substitute framing', why: 'Weighing cannot replace vitals and labs after refeeding', keys: ['recent instability'], mistake: 'Substituting counseling for medical monitoring' }),
    ]),
    Q('q6', 'indirect', 'session1', 'The school counselor and robotics coach offer to help. How should the counselor proceed?', ['R5'], [
      O('a', 'Share his full history with both of them so the school can watch for any warning signs of relapse.', -1,
        { r: 'Over-disclosure', approach: 'Full-history framing', why: 'Only the school counselor is authorized, and only for limited information', keys: ['limited consent'], mistake: 'Disclosing beyond the authorization' }),
      O('b', 'With Hetal’s authorization, give the school counselor only what is needed to set up supported lunches.', 3,
        { r: 'Authorized, minimum necessary', approach: 'Collaborate with non-clinical stakeholders', why: 'Supervised lunches support FBT; disclosure is limited to the authorized person and purpose', keys: ['lunch unsupervised', 'Hetal agrees to limited sharing'], mistake: 'Sharing too much or with unauthorized staff' }),
      O('c', 'Decline to involve the school, since his eating disorder should remain completely private from staff.', 0,
        { r: 'Misses needed support', approach: 'Privacy-first framing', why: 'Privacy matters, but authorized lunch support is part of the plan', keys: ['unsupervised lunch'], mistake: 'Excluding helpful supports out of caution' }),
      O('d', 'Ask the robotics coach to weigh Kiran before practice and report his weight to his parents each week.', -2,
        { r: 'Inappropriate role', approach: 'Coach-monitor framing', why: 'Weighing by a coach is unsafe, shaming, and outside consent', keys: ['coach not authorized'], mistake: 'Giving clinical monitoring to non-clinical staff' }),
    ]),
    Q('q7', 'planning', 'session1', 'Which treatment plan best fits Kiran now that he is medically stabilized?', ['R2'], [
      O('a', 'Individual insight-oriented therapy for Kiran to explore why he started restricting, with parents kept out.', -1,
        { r: 'Not first-line for teens', approach: 'Individual-insight framing', why: 'Family-based treatment is first-line for adolescent anorexia; excluding parents removes the main lever', keys: ['age 15', 'team recommends FBT'], mistake: 'Choosing individual therapy for an adolescent' }),
      O('b', 'Let Kiran choose his own meals so that he can rebuild trust and a sense of control over his own eating.', -2,
        { r: 'Hands control to the illness', approach: 'Autonomy framing', why: 'In early recovery the illness drives food choices; this risks rapid relapse', keys: ['recent instability'], mistake: 'Giving control to the eating disorder too early' }),
      O('c', 'Monthly check-ins focused on school stress, since his weight gain is being handled by the medical team.', 0,
        { r: 'Too little, too narrow', approach: 'Low-intensity framing', why: 'Medical care is essential, but weekly FBT is the active psychological treatment', keys: ['severe anorexia'], mistake: 'Underdosing treatment after hospitalization' }),
      O('d', 'Phase one of FBT, with his parents in charge of refeeding and the team tracking weight and vitals weekly.', 3,
        { r: 'FBT phase one', approach: 'Develop an initial treatment plan', why: 'FBT puts parents in charge of weight restoration, coordinated with medical monitoring', keys: ['team recommends FBT', 'weekly vitals'], mistake: 'Leaving parents out of refeeding' }),
    ]),
    Q('q8', 'planning', 'session1', 'Kiran wants to resume running now and travel with the robotics team next month. How should the plan address this?', ['R2'], [
      O('a', 'Allow running but cap it at three miles a day, since some exercise will reduce his anxiety about eating.', -1,
        { r: 'Bypasses medical clearance', approach: 'Compromise framing', why: 'Activity decisions belong to the medical team after stabilization', keys: ['recent bradycardia'], mistake: 'Setting activity limits without medical input' }),
      O('b', 'Hold running until the medical team clears it, and plan robotics travel with meal support if they approve.', 3,
        { r: 'Medically guided activity', approach: 'Assess contraindications', why: 'Exercise is contraindicated until medically cleared; valued activities can resume with supports as safe', keys: ['runs six miles daily', 'recent instability'], mistake: 'Allowing compensatory exercise too early' }),
      O('c', 'Ban robotics and running until he reaches full weight restoration, as leverage to motivate his eating.', 0,
        { r: 'Punitive leverage', approach: 'Leverage framing', why: 'Removing valued, non-athletic activities as leverage harms motivation; robotics is not a medical risk', keys: ['robotics captain-elect'], mistake: 'Using valued activities as punishment' }),
      O('d', 'Let Kiran decide on running and travel himself, since respecting his choices will strengthen the alliance.', -2,
        { r: 'Unsafe autonomy', approach: 'Autonomy framing', why: 'Leaving exercise to the illness risks cardiac harm', keys: ['heart rate 38 while asleep'], mistake: 'Deferring safety decisions to the eating disorder' }),
    ]),

    // ---------------- session2 (legal, legal, interventions, legal, interventions) ----------------
    Q('q9', 'legal', 'session2', 'The family meal is held by video, with Hetal and Kiran in her kitchen and Rajesh in his apartment. What is required?', ['R6'], [
      O('a', 'A secure platform alone, since both parents have already consented to his counseling in the office.', -1,
        { r: 'Missing telehealth elements', approach: 'Platform-only framing', why: 'A secure platform is necessary but does not replace telehealth consent and emergency planning', keys: ['two locations'], mistake: 'Assuming office consent covers telehealth' }),
      O('b', 'Verbal permission from Hetal at the start of the call, since she is the parent who brought him to care.', 0,
        { r: 'Incomplete', approach: 'Verbal-consent framing', why: 'Some consent exists, but locations and an emergency plan are missing', keys: ['medical risk at meals'], mistake: 'Skipping location and emergency planning' }),
      O('c', 'Telehealth consent, each person’s verified location, and an emergency plan in case Kiran becomes unwell.', 3,
        { r: 'Consent, location, emergency plan', approach: 'Follow telehealth best practices', why: 'Telehealth requires informed consent, verified locations, and an emergency plan, which matters with his recent instability', keys: ['video family meal', 'recent bradycardia'], mistake: 'Starting telehealth without verifying location and emergency steps' }),
      O('d', 'Nothing extra, since a family meal session is coaching rather than counseling and needs no consent.', -2,
        { r: 'Mislabels treatment', approach: 'Not-counseling framing', why: 'FBT meal sessions are treatment and carry all consent and safety duties', keys: ['FBT'], mistake: 'Treating a clinical session as non-clinical' }),
    ]),
    Q('q10', 'legal', 'session2', 'Kiran admits he throws away his packed lunch and asks the counselor not to tell his parents. What should she do?', ['R3'], [
      O('a', 'Explain that his health is at serious risk and that his parents must know, and plan with him how to tell them.', 3,
        { r: 'Limits of confidentiality', approach: 'Adhere to ethics with minors', why: 'Confidentiality yields when a minor’s health is at serious risk; involving him in how it is shared preserves the alliance', keys: ['discards lunch', 'recent instability', 'FBT'], mistake: 'Keeping a secret that undermines refeeding' }),
      O('b', 'Keep the disclosure confidential, since he is old enough to decide what his parents should know.', -2,
        { r: 'Unsafe secrecy', approach: 'Full-confidentiality framing', why: 'Keeping it from parents defeats FBT and risks medical decline', keys: ['BMI 15.9', 'parents lead refeeding'], mistake: 'Promising a minor confidentiality the situation cannot allow' }),
      O('c', 'Tell his parents everything he said in the session, including his feelings about each of them.', 0,
        { r: 'Over-disclosure', approach: 'Tell-all framing', why: 'Only safety-relevant information must be shared', keys: ['minimum necessary'], mistake: 'Disclosing beyond what safety requires' }),
      O('d', 'Keep it private for now and ask the dietitian to quietly add more calories to his breakfast and dinner instead.', -1,
        { r: 'Workaround without honesty', approach: 'Covert-fix framing', why: 'Adjusting meals helps but keeps parents uninformed and the secrecy intact', keys: ['parents lead refeeding'], mistake: 'Working around rather than addressing the secret' }),
    ]),
    Q('q11', 'interventions', 'session2', 'At the video meal, Kiran pushes his plate away and Hetal starts arguing nutrition facts. What should the counselor do?', ['R2'], [
      O('a', 'End the meal early so that the conflict does not damage the family, and try again at the next session.', 0,
        { r: 'Avoids the key moment', approach: 'Stop framing', why: 'Ending early teaches that refusal works', keys: ['plate refused'], mistake: 'Ending the meal at peak resistance' }),
      O('b', 'Coach Hetal to stop debating, stay calm and united with Rajesh, and keep presenting the plate firmly.', 3,
        { r: 'Coach united, calm persistence', approach: 'Implement FBT interventions', why: 'FBT coaches parents to persist calmly and together, separating the illness from their son', keys: ['Hetal argues then pleads', 'both parents present'], mistake: 'Joining the debate instead of coaching parents' }),
      O('c', 'Explain the medical risks to Kiran in detail herself until he agrees to eat the meal on his plate.', -1,
        { r: 'Counselor takes over', approach: 'Lecture framing', why: 'Lecturing invites argument and sidelines the parents’ role', keys: ['FBT parent role'], mistake: 'Replacing parental authority with counselor persuasion' }),
      O('d', 'Let Kiran choose a smaller meal he feels comfortable with, so that he does not feel pressured or controlled.', -2,
        { r: 'Negotiates with the illness', approach: 'Compromise framing', why: 'Reducing the meal undermines weight restoration', keys: ['BMI 15.9'], mistake: 'Letting the eating disorder set the portion' }),
    ]),
    Q('q12', 'legal', 'session2', 'Rajesh, who shares joint legal custody, demands all records and wants treatment stopped. What should the counselor do?', ['R4', 'R3'], [
      O('a', 'Ignore his call, since Hetal is the parent who brought Kiran in and consented to his treatment.', -2,
        { r: 'Disregards a legal parent', approach: 'Ignore framing', why: 'A parent with joint legal custody has rights that cannot be ignored', keys: ['joint legal custody'], mistake: 'Treating one parent as the only decision maker' }),
      O('b', 'Stop treatment right away, since either parent with legal custody can end a minor’s treatment.', -1,
        { r: 'Abrupt termination', approach: 'Comply-at-once framing', why: 'Stopping treatment immediately abandons a medically fragile client; the law must be checked first', keys: ['recent hospitalization'], mistake: 'Ending care without legal review or transition planning' }),
      O('c', 'Check the custody order and state law, consult as needed, and invite Rajesh to talk through the plan.', 3,
        { r: 'Verify law; engage the parent', approach: 'Adhere to state law and policy', why: 'Rights to records and consent depend on the custody order and state law; engaging him addresses his concerns', keys: ['joint legal custody', 'father objects'], mistake: 'Acting without checking custody terms or law' }),
      O('d', 'Send him a copy of every record right away, since a parent with joint legal custody may access everything.', 0,
        { r: 'Right may exist, process skipped', approach: 'Release-all framing', why: 'He may have access rights, but the counselor should confirm the order and law first', keys: ['records request'], mistake: 'Releasing records before verifying authority' }),
    ]),
    Q('q13', 'interventions', 'session2', 'During the video meal, Kiran says, “My heart rate is low because I’m an athlete.” The best response is:', ['R7'], [
      O('a', '“That’s not true. Your heart rate was 38 because you are starving, and you could die if you keep going like this.”', -2,
        { r: 'Confrontational', approach: 'Confront framing', why: 'Direct confrontation hardens resistance and damages the alliance', keys: ['ambivalence'], mistake: 'Arguing with the eating disorder' }),
      O('b', '“Being fit matters to you. Part of you sees the low rate as proof, and part of you got scared in the hospital.”', 3,
        { r: 'Reflect both sides', approach: 'Use core counseling skills', why: 'A double-sided reflection honors his values and draws out ambivalence without arguing', keys: ['athlete identity', 'hospital stay'], mistake: 'Using the righting reflex instead of reflection' }),
      O('c', '“Let’s talk about robotics instead, since your heart rate is something for your doctor to discuss.”', 0,
        { r: 'Avoids the material', approach: 'Deflect framing', why: 'Deflecting misses an opening to explore ambivalence', keys: ['opening for change talk'], mistake: 'Avoiding the topic the client raised' }),
      O('d', '“You may be right that athletes have lower heart rates, so let’s not focus on your heart today.”', -1,
        { r: 'Colludes with the illness', approach: 'Agree framing', why: 'Agreeing reinforces a dangerous belief', keys: ['recent bradycardia'], mistake: 'Validating a distortion to keep rapport' }),
    ]),
  ],
};

// ============================================================================
// D958 — Suicidal Behavior / Acute Risk (plan 8, hard, adult)
// ============================================================================
const D958 = {
  id: 'ncmhce-D958',
  title: 'An Army veteran says he has his girls to live for—then mentions the loaded pistol in his lap',
  category: 'Crisis',
  difficulty: 'hard',
  plan: 8,
  population: 'adult',
  primaryDiagnosis: { name: 'Suicidal Behavior / Acute Risk', code: 'R45.851' },
  diagnosis: { name: 'Suicidal Behavior / Acute Risk', code: 'R45.851' },
  differentialOptions: [
    { id: 'do1', name: 'Adjustment Disorder, with Depressed Mood', isCorrect: false },
    { id: 'do2', name: 'Posttraumatic Stress Disorder', isCorrect: false },
    { id: 'do3', name: 'Alcohol Use Disorder, Mild', isCorrect: false },
    { id: 'do4', name: 'Suicidal Behavior / Acute Risk', isCorrect: true },
  ],
  narrative: {
    intake:
      'Andre Batiste, a 43-year-old Black Creole Army veteran (combat engineer, two Afghanistan deployments, honorably discharged in 2015), works as an HVAC ' +
      'technician in Lafayette, Louisiana, and self-refers to a private counseling practice after a coworker urged him. His wife, Renée, filed for divorce ' +
      'three weeks ago; he moved into his brother Lionel’s camp on the bayou and sees his daughters, 12 and 9, on weekends. He sleeps three to four hours, has ' +
      'raised his drinking from two beers to five or six a night, and has lost interest in fishing. He says, “I’m not going to do anything stupid—I’ve got my ' +
      'girls.” He owns three firearms and keeps a loaded 9mm pistol in his truck console. Asked how he copes, he says cleaning his guns “settles” him, and adds ' +
      'that twice last week he “sat in the truck with the 9 in my lap, loaded, just to see what it felt like,” then went inside. He has a VA disability rating ' +
      'for tinnitus and back injury but has never used VA mental health care, and reports no prior attempts. The counselor, who is not a veteran and grew up ' +
      'without guns, feels uneasy and is tempted to skip firearm questions so she will not seem “anti-gun.” A client of hers died by suicide eight months ago, ' +
      'and since then she has dreaded risk assessments and had intrusive images of that client.',
    session1:
      'Through a warm handoff to the Veterans Crisis Line, Andre was evaluated that evening at the VA medical center emergency department; he was not admitted. ' +
      'He agreed to let Lionel keep his rifles in Lionel’s locked safe and was discharged with a referral to the VA Suicide Prevention Coordinator and a mental ' +
      'health appointment in ten days. Two days later he returns and signs a release for the VA. He now reports daily passive thoughts of “not waking up” without ' +
      'intent and no further rehearsal, but admits he kept the 9mm at the camp “for protection.” He wants to spend sessions preparing for the custody fight.',
    session2:
      'A week later the session is by video from the camp. That morning Andre was served a custody filing citing his drinking and his guns. He has had four beers, ' +
      'paces, and shouts, “She’s trying to take my girls.” Later he says quietly, “Maybe the girls are better off with the insurance money.” The 9mm is still at ' +
      'the camp. Minutes later the video freezes and the call drops. The following week the counselor receives a subpoena for Andre’s records from Renée’s attorney.',
  },
  diagnosticRationale:
    'The clinical focus is acute suicide risk: ideation in the context of a major loss (divorce and threatened custody), insomnia, rising alcohol use, ' +
    'anhedonia, access to a loaded firearm, and preparatory behavior—sitting with a loaded pistol twice in the past week to “see what it felt like.” On the ' +
    'C-SSRS, this is preparatory behavior within the past three months, which places him at high risk despite his verbal reassurance. Depressive, trauma-related, ' +
    'and alcohol-use diagnoses remain to be assessed, but none would change the immediate priority. The code R45.851 (suicidal ideations) documents the ' +
    'risk status that is the focus of care while those diagnoses are assessed.',
  references: [
    { id: 'R1', source: 'C-SSRS', detail: 'Suicidal ideation severity and suicidal behavior, including preparatory acts; recency-based triage' },
    { id: 'R2', source: 'Stanley-Brown SPI', detail: 'Six-step collaborative safety plan including making the environment safe' },
    { id: 'R3', source: 'VA/DoD CPG', detail: 'Assessment and management of patients at risk for suicide: lethal means safety counseling, care transitions, and Veterans Crisis Line (988, press 1)' },
    { id: 'R4', source: 'ACA Code of Ethics', detail: 'Competence; impairment and self-care; confidentiality, court orders, and subpoenas' },
    { id: 'R5', source: 'NBCC Code of Ethics', detail: 'Telehealth emergency procedures and verification of client location' },
    { id: 'R6', source: 'Wiger (Documentation)', detail: 'Documenting risk assessment, clinical reasoning, and actions taken' },
    { id: 'R7', source: 'State law', detail: 'Response to subpoenas; privilege; requirement of client authorization or court order' },
  ],
  questions: [
    // ---------------- intake (profdev, assess, profdev, assess) ----------------
    Q('q1', 'profdev', 'intake', 'The counselor feels uneasy about firearms and is tempted to skip asking about them. What should she do?', ['R3', 'R4'], [
      O('a', 'Skip the firearm questions for now so Andre does not feel judged, and return to them once rapport is stronger.', -2,
        { r: 'Misses lethal means', approach: 'Avoid framing', why: 'Firearms are the most lethal method; skipping them leaves the main danger unassessed', keys: ['loaded 9mm in truck'], mistake: 'Letting counselor discomfort override a safety assessment' }),
      O('b', 'Let Andre bring up firearms himself if they matter, since raising them could feel political to him.', -1,
        { r: 'Passive approach', approach: 'Client-led framing', why: 'Clients rarely volunteer firearm access unprompted; counselors ask directly', keys: ['owns three firearms'], mistake: 'Waiting for the client to raise lethal means' }),
      O('c', 'Ask about firearms using a scripted checklist so the questions sound neutral and do not reflect her views.', 0,
        { r: 'Asks, but stiffly', approach: 'Checklist framing', why: 'Asking is right, but a scripted approach without addressing her discomfort may come across as judgment', keys: ['counselor unease'], mistake: 'Masking a bias instead of addressing it' }),
      O('d', 'Recognize her discomfort, ask about firearms directly and respectfully, and seek lethal means training.', 3,
        { r: 'Self-awareness plus training', approach: 'Assess limitations and pursue training', why: 'Counselors manage their reactions and build lethal means counseling skills so safety questions are asked well', keys: ['tempted to skip questions', 'firearm access'], mistake: 'Avoiding a safety topic because of personal discomfort' }),
    ]),
    Q('q2', 'assess', 'intake', 'How should the counselor interpret Andre sitting in his truck with a loaded pistol “to see what it felt like”?', ['R1'], [
      O('a', 'As a way of coping with stress, since he also says that cleaning his guns helps to settle him down.', -1,
        { r: 'Misreads rehearsal as coping', approach: 'Coping framing', why: 'Holding a loaded gun to see how it feels is rehearsal, not coping', keys: ['loaded 9mm in his lap'], mistake: 'Accepting the client’s framing of a risk behavior' }),
      O('b', 'As preparatory behavior that places him at high risk despite his statement that he has his girls to live for.', 3,
        { r: 'Preparatory behavior = high risk', approach: 'Assess risk to self', why: 'On the C-SSRS, recent preparatory acts signal high risk; verbal reassurance does not cancel behavior', keys: ['twice last week', 'loaded', '“I’ve got my girls”'], mistake: 'Letting reassurance outweigh recent behavior' }),
      O('c', 'As a sign of passive ideation only, since he did not fire the gun or describe a specific plan to use it.', 0,
        { r: 'Underrates behavior', approach: 'Ideation-only framing', why: 'The behavior goes beyond passive ideation; preparatory acts raise the level of risk', keys: ['rehearsal'], mistake: 'Counting only ideation and missing behavior' }),
      O('d', 'As low risk, since he went back inside each time and has strong protective factors in his daughters and his job.', -2,
        { r: 'Dangerous underestimate', approach: 'Protective-factor framing', why: 'Protective factors do not offset recent rehearsal with a loaded firearm', keys: ['loaded gun', 'divorce', 'alcohol'], mistake: 'Treating stopping as evidence of safety' }),
    ]),
    Q('q3', 'profdev', 'intake', 'Since a client died by suicide, the counselor dreads risk assessments and has intrusive images. What should she do?', ['R4'], [
      O('a', 'Assess her exposure to vicarious trauma, seek supervision and support, and monitor how it affects her work.', 3,
        { r: 'Assess and address vicarious trauma', approach: 'Assess exposure to vicarious trauma', why: 'Client suicide can cause traumatic stress; counselors monitor for impairment and seek supervision and support', keys: ['client died by suicide', 'intrusive images'], mistake: 'Ignoring signs of impairment after a client loss' }),
      O('b', 'Stop seeing clients with any suicide risk until she feels fully recovered from the loss of her prior client.', 0,
        { r: 'Overly broad', approach: 'Withdraw framing', why: 'Limiting caseload may help, but supervision and support come first; blanket avoidance may not be needed', keys: ['current client'], mistake: 'Withdrawing broadly without assessment' }),
      O('c', 'Push through her reactions, since dread is a normal part of the work and will pass with more experience.', -2,
        { r: 'Unaddressed impairment', approach: 'Push-through framing', why: 'Untreated traumatic stress can impair judgment in high-risk assessments', keys: ['dreads risk assessments'], mistake: 'Treating impairment as normal stress' }),
      O('d', 'Hand the risk assessment to a colleague and continue counseling Andre on his divorce and custody issues.', -1,
        { r: 'Fragments care', approach: 'Hand-off framing', why: 'Splitting off risk assessment avoids the issue and fragments care', keys: ['acute risk'], mistake: 'Delegating the hardest part to avoid one’s own reaction' }),
    ]),
    Q('q4', 'assess', 'intake', 'Given Andre’s rehearsal and his loaded pistol, what level of care is most appropriate today?', ['R1', 'R3'], [
      O('a', 'Weekly outpatient counseling with a written safety plan, starting at the next scheduled session.', -1,
        { r: 'Under-responds to acute risk', approach: 'Outpatient-only framing', why: 'Recent rehearsal with a loaded gun needs same-day evaluation', keys: ['preparatory behavior'], mistake: 'Matching care to his words instead of his behavior' }),
      O('b', 'A no-suicide contract he signs today, plus a follow-up phone call in two or three days to check on him.', -2,
        { r: 'Contracts are not safety care', approach: 'Contract framing', why: 'No-suicide contracts lack evidence and do not address risk or means', keys: ['loaded 9mm'], mistake: 'Relying on a contract instead of evaluation' }),
      O('c', 'A same-day emergency evaluation by warm handoff, with the gun in his truck addressed before he leaves.', 3,
        { r: 'Same-day evaluation', approach: 'Determine the appropriate level of care', why: 'High risk with recent preparatory behavior calls for immediate evaluation and lethal means steps', keys: ['rehearsal twice last week', 'loaded gun in truck'], mistake: 'Letting a high-risk client leave without evaluation' }),
      O('d', 'A referral to VA mental health with a phone number to call, plus outpatient counseling here each week.', 0,
        { r: 'Right resources, wrong urgency', approach: 'Referral framing', why: 'VA care is appropriate, but acute risk requires a same-day, connected evaluation', keys: ['high risk today'], mistake: 'Giving a passive referral for acute risk' }),
    ]),

    // ---------------- session1 (planning, planning, indirect) ----------------
    Q('q5', 'planning', 'session1', 'After the VA evaluation, how should the counselor develop Andre’s safety plan?', ['R2'], [
      O('a', 'Give him the practice’s standard safety plan handout and ask him to fill it out at home before the next visit.', 0,
        { r: 'Not collaborative', approach: 'Handout framing', why: 'Safety plans work when built together and personalized', keys: ['collaborative planning'], mistake: 'Treating a safety plan as a form' }),
      O('b', 'Build a Stanley-Brown plan with him: warning signs, coping, contacts, crisis lines, and making his setting safe.', 3,
        { r: 'Collaborative Stanley-Brown plan', approach: 'Develop a safety plan', why: 'The Stanley-Brown plan is built with the client, uses his words, and includes lethal means safety', keys: ['passive ideation', '9mm at the camp'], mistake: 'Skipping means safety or writing the plan for him' }),
      O('c', 'Have Lionel write the plan for him, since family members often know warning signs better than clients do.', -1,
        { r: 'Excludes the client', approach: 'Family-writes framing', why: 'Family input helps, but the client must own the plan', keys: ['his warning signs'], mistake: 'Building a plan without the client' }),
      O('d', 'Have him promise to call the counselor before acting on any urge, and treat that promise as his safety plan.', -2,
        { r: 'A promise is not a plan', approach: 'Promise framing', why: 'A promise is a no-harm contract in disguise and lacks the steps of a real plan', keys: ['acute risk history'], mistake: 'Substituting a promise for a safety plan' }),
    ]),
    Q('q6', 'planning', 'session1', 'Andre wants to spend sessions preparing for the custody fight. How should the counselor prioritize?', ['R3'], [
      O('a', 'Agree to focus on the custody case, since honoring his priority will keep him engaged in counseling.', -1,
        { r: 'Defers safety', approach: 'Client-priority framing', why: 'Engagement matters, but safety must come first while risk is elevated', keys: ['9mm kept', 'daily passive ideation'], mistake: 'Letting the client’s agenda displace safety' }),
      O('b', 'Refuse to discuss custody until his ideation is gone, so that sessions stay focused on suicide risk.', 0,
        { r: 'Too rigid', approach: 'Safety-only framing', why: 'Safety comes first, but refusing to discuss his main stressor harms engagement', keys: ['custody fight'], mistake: 'Ignoring the stressor that drives risk' }),
      O('c', 'Work with him to put safety first, then address custody stress, drinking, and sleep as linked goals.', 3,
        { r: 'Collaborative prioritization', approach: 'Help client prioritize problems', why: 'Safety leads, and linking it to his stressors keeps him engaged', keys: ['daily passive ideation', 'drinking and sleep'], mistake: 'Either ignoring safety or ignoring his priorities' }),
      O('d', 'Refer him to a custody attorney and close counseling, since legal matters are outside a counselor’s role.', -2,
        { r: 'Abandons a high-risk client', approach: 'Refer-out framing', why: 'Closing care during elevated risk is abandonment', keys: ['recent ED visit'], mistake: 'Ending treatment during a crisis' }),
    ]),
    Q('q7', 'indirect', 'session1', 'With Andre’s release, how should the counselor coordinate with the VA?', ['R3'], [
      O('a', 'Contact the VA Suicide Prevention Coordinator to share risk findings and confirm his appointment and follow-up.', 3,
        { r: 'Active care coordination', approach: 'Collaborate with other providers', why: 'Care transitions are a high-risk period; direct coordination ensures follow-up and shared risk information', keys: ['release signed', 'appointment in ten days'], mistake: 'Assuming the referral will happen on its own' }),
      O('b', 'Leave coordination to Andre, since he is an adult and can manage his own VA appointments and follow-up.', -2,
        { r: 'Passive coordination', approach: 'Client-manages framing', why: 'Clients at risk often miss follow-up; providers should close the loop', keys: ['transition period'], mistake: 'Relying on a high-risk client to coordinate' }),
      O('c', 'Fax the VA his full record so their team has all of the information they could possibly need.', 0,
        { r: 'Over-disclosure', approach: 'Full-record framing', why: 'Coordination is right, but the minimum necessary standard applies', keys: ['minimum necessary'], mistake: 'Sharing more than needed' }),
      O('d', 'Ask the VA to admit him to inpatient care, since the emergency evaluation that did not admit him was likely wrong.', -1,
        { r: 'Second-guessing without basis', approach: 'Override framing', why: 'The counselor shares findings but does not dictate admission without new evidence', keys: ['no new rehearsal'], mistake: 'Overriding another team without new findings' }),
    ]),

    // ---------------- session2 (interventions x3, legal x3) ----------------
    Q('q8', 'interventions', 'session2', 'Andre is pacing and shouting, “She’s trying to take my girls.” What should the counselor do first?', ['R3'], [
      O('a', 'Tell him firmly to sit down and calm down, or she will have to end the session and call for help.', -1,
        { r: 'Escalating', approach: 'Command framing', why: 'Commands and threats tend to escalate an agitated client', keys: ['pacing, shouting'], mistake: 'Using authority instead of de-escalation' }),
      O('b', 'Stay calm, speak slowly, and validate his fear of losing his daughters before moving to problem-solving.', 3,
        { r: 'De-escalate first', approach: 'Provide crisis de-escalation', why: 'A calm tone and validation lower arousal so he can think and engage', keys: ['custody filing', 'four beers'], mistake: 'Problem-solving before de-escalating' }),
      O('c', 'Review the custody filing with him point by point so that he can see the claims against him are manageable.', 0,
        { r: 'Too early', approach: 'Problem-solve framing', why: 'Problem-solving helps after de-escalation, not during peak arousal', keys: ['agitated'], mistake: 'Moving to content while he is flooded' }),
      O('d', 'Encourage him to call Renée right now and tell her how he feels, so that the anger does not build up any further.', -2,
        { r: 'Invites escalation', approach: 'Vent framing', why: 'Contacting Renée while intoxicated and enraged risks conflict and harm', keys: ['four beers', 'custody conflict'], mistake: 'Encouraging contact during a crisis' }),
    ]),
    Q('q9', 'interventions', 'session2', 'The 9mm is still at the camp. How should the counselor address it?', ['R3', 'R2'], [
      O('a', 'Ask him to unload the pistol and keep the ammunition in another room of the camp until he feels better.', 0,
        { r: 'Partial step', approach: 'Unload framing', why: 'Separating ammunition helps somewhat, but off-site storage is far safer', keys: ['four beers', 'distress'], mistake: 'Settling for a weak barrier' }),
      O('b', 'Tell him he must surrender all of his guns to police, or she will report him as a danger to others.', -2,
        { r: 'Coercive and inaccurate', approach: 'Ultimatum framing', why: 'Threats damage trust and may drive concealment; lethal means counseling is collaborative', keys: ['gun owner identity'], mistake: 'Using threats instead of collaborative means counseling' }),
      O('c', 'Leave the pistol out of the discussion, since he says he needs it for protection out at the camp.', -1,
        { r: 'Leaves the means in place', approach: 'Defer framing', why: 'Protection concerns can be addressed while still storing the gun safely', keys: ['loaded 9mm'], mistake: 'Accepting a reason without exploring options' }),
      O('d', 'Respect his values while asking him to let Lionel store the 9mm off-site now, with a plan for its return.', 3,
        { r: 'Collaborative lethal means counseling', approach: 'Implement lethal means counseling', why: 'Temporary, voluntary off-site storage with a trusted person is a key safety step and respects his identity', keys: ['Lionel stores rifles', '9mm still at camp'], mistake: 'Ignoring lethal means or making demands' }),
    ]),
    Q('q10', 'interventions', 'session2', 'Andre says quietly, “Maybe the girls are better off with the insurance money.” What should the counselor do?', ['R1', 'R2'], [
      O('a', 'Reassure him that his daughters need him far more than money and move on to coping with the filing.', -1,
        { r: 'Reassures past the risk', approach: 'Reassure framing', why: 'Reassurance can close the door on disclosure; the statement needs direct follow-up', keys: ['insurance comment'], mistake: 'Reassuring instead of assessing' }),
      O('b', 'Note the comment and plan to explore it more fully at his upcoming VA mental health appointment.', -2,
        { r: 'Defers acute risk', approach: 'Defer framing', why: 'A statement of burdensomeness with alcohol and a gun needs immediate assessment', keys: ['four beers', '9mm'], mistake: 'Deferring assessment of active risk' }),
      O('c', 'Ask directly about suicidal thoughts and intent right now, then use his safety plan steps with him.', 3,
        { r: 'Assess now; use the plan', approach: 'Provide crisis intervention', why: 'Statements of being a burden require direct questions and immediate use of the safety plan', keys: ['“better off with the insurance money”', 'intoxicated'], mistake: 'Not asking directly in a crisis' }),
      O('d', 'Remind him to call 988 and press 1 if things get worse after the session, and then end on time.', 0,
        { r: 'Resource without assessment', approach: 'Hotline framing', why: 'Crisis line information is part of the plan, but current risk must be assessed first', keys: ['active statement'], mistake: 'Giving a number instead of assessing' }),
    ]),
    Q('q11', 'legal', 'session2', 'Minutes after his insurance comment, the video freezes and the call drops. What should the counselor do?', ['R5'], [
      O('a', 'Wait for Andre to reconnect, since he may be dealing with the poor internet signal out at the camp.', -1,
        { r: 'Passive waiting', approach: 'Wait framing', why: 'With elevated risk, waiting loses critical time', keys: ['recent burden statement'], mistake: 'Treating a dropped call as only technical' }),
      O('b', 'Follow the telehealth emergency plan: call him back, then reach Lionel, and send 911 to the camp if needed.', 3,
        { r: 'Activate the emergency plan', approach: 'Follow telehealth emergency procedures', why: 'A pre-set plan with location and emergency contact lets the counselor act at once if he cannot be reached', keys: ['known location', 'Lionel as contact'], mistake: 'Lacking or not using an emergency plan' }),
      O('c', 'Email him the crisis line number and ask him to confirm that he is safe when he gets the chance.', 0,
        { r: 'Too slow', approach: 'Email framing', why: 'Email is not timely for acute risk', keys: ['acute risk'], mistake: 'Using slow channels in a crisis' }),
      O('d', 'Document the dropped call and follow up at the next scheduled session if he does not reach out to her first.', -2,
        { r: 'No response to acute risk', approach: 'Document-only framing', why: 'Failing to act after a risk statement and disconnection could be fatal', keys: ['intoxicated', 'firearm'], mistake: 'Waiting a week after a crisis disconnection' }),
    ]),
    Q('q12', 'legal', 'session2', 'Renée’s attorney sends a subpoena for Andre’s records. What should the counselor do?', ['R7', 'R4'], [
      O('a', 'Send the records right away, since a subpoena is a legal order that must be obeyed without delay.', -1,
        { r: 'A subpoena is not consent', approach: 'Comply framing', why: 'Without client authorization or a court order, release can breach confidentiality and privilege', keys: ['no authorization'], mistake: 'Treating a subpoena as a court order' }),
      O('b', 'Ignore the subpoena, since counseling records are privileged and attorneys cannot request them at all.', 0,
        { r: 'Ignoring is risky', approach: 'Ignore framing', why: 'Protecting records is right, but ignoring a subpoena can create legal problems', keys: ['legal response required'], mistake: 'Not responding to legal process' }),
      O('c', 'Call Renée’s attorney to explain his risk level, so the custody decision is made with full information.', -2,
        { r: 'Unauthorized disclosure', approach: 'Inform framing', why: 'Sharing risk information with the opposing party breaches confidentiality and can harm him', keys: ['custody conflict'], mistake: 'Disclosing to the opposing party' }),
      O('d', 'Notify Andre, consult an attorney, and release records only with his authorization or a court order.', 3,
        { r: 'Protect records; follow process', approach: 'Follow best practices for court proceedings', why: 'Counselors assert privilege, inform the client, consult, and release only under proper authority', keys: ['subpoena from opposing counsel'], mistake: 'Either complying blindly or ignoring legal process' }),
    ]),
    Q('q13', 'legal', 'session2', 'How should the counselor document the session with the dropped call?', ['R6'], [
      O('a', 'Record his statements, risk assessment, actions taken, and clinical reasoning in a secure record.', 3,
        { r: 'Complete risk documentation', approach: 'Securely maintain case notes', why: 'Documenting assessment, actions, and reasoning supports continuity and shows the standard of care', keys: ['insurance comment', 'emergency plan used'], mistake: 'Leaving out reasoning or actions taken' }),
      O('b', 'Write a brief note that the session ended early because of a technical problem with the connection.', -2,
        { r: 'Omits risk', approach: 'Minimal-note framing', why: 'Leaving out the risk statement and response is inaccurate and unsafe', keys: ['burden statement'], mistake: 'Omitting risk information' }),
      O('c', 'Leave his insurance comment out of the note, since the records may be subpoenaed in the custody case.', -1,
        { r: 'Altered record', approach: 'Omit framing', why: 'Records must be accurate whatever their legal use', keys: ['subpoena'], mistake: 'Shaping records for litigation' }),
      O('d', 'Keep detailed notes on her personal laptop so that they stay separate from the practice record system.', 0,
        { r: 'Insecure storage', approach: 'Separate-notes framing', why: 'Detail is good, but records belong in the secure system', keys: ['record security'], mistake: 'Storing records insecurely' }),
    ]),
  ],
};

// ============================================================================
// D959 — Nonsuicidal Self-Injury (plan 9, medium, child)
// ============================================================================
const D959 = {
  id: 'ncmhce-D959',
  title: 'A 14-year-old swimmer cuts where her suit will cover it—“to let the pressure out”',
  category: 'Crisis',
  difficulty: 'medium',
  plan: 9,
  population: 'child',
  primaryDiagnosis: { name: 'Nonsuicidal Self-Injury', code: 'R45.88' },
  diagnosis: { name: 'Nonsuicidal Self-Injury', code: 'R45.88' },
  differentialOptions: [
    { id: 'do1', name: 'Nonsuicidal Self-Injury', isCorrect: true },
    { id: 'do2', name: 'Suicidal Behavior Disorder', isCorrect: false },
    { id: 'do3', name: 'Borderline Personality Disorder', isCorrect: false },
    { id: 'do4', name: 'Major Depressive Disorder, Single Episode, Moderate', isCorrect: false },
  ],
  narrative: {
    intake:
      'Zoe Nakamura-Bell, a 14-year-old ninth grader of Japanese American and Black American heritage, swims on her high school team and lives mostly with her ' +
      'mother, Keiko, an ICU nurse; her father, Darnell, lives in another city. A friend told the school counselor about cuts on Zoe’s upper thighs, and Keiko ' +
      'later found razor blades taken from pencil sharpeners. Zoe says she has cut two or three times a week for seven months, usually after arguments or when ' +
      'she feels “too much,” and that it “lets the pressure out” and leaves her calm and numb. She says, “I don’t want to die, I just want to stop feeling like ' +
      'this.” She has never needed stitches and cuts where her swimsuit covers. At intake the counselor explains to Zoe and Keiko that what Zoe shares stays ' +
      'private except when her safety is at serious risk, and both agree. When Zoe shows a fresh cut, the counselor feels a wave of nausea, visibly pulls back, ' +
      'and Zoe looks away. The counselor completed basic DBT training years ago but has no training in DBT for adolescents.',
    session1:
      'Keiko signs a release for the school counselor, Ms. Alvarez, who wants to coordinate support at school. Zoe’s PHQ-A score is 14 (moderate), and the ' +
      'C-SSRS shows no lifetime suicidal ideation or attempts. Her urges follow conflicts with her mother over grades and being left out of a friend group chat. ' +
      'Zoe wants to keep swimming, and her coach does not know.',
    session2:
      'Zoe reports a new cut two days ago after a group-chat incident; it was deeper than usual, but she cleaned it herself and it did not need stitches. She asks ' +
      'the counselor not to tell her mother. Keiko emails asking for “a copy of everything Zoe says.” The counselor considers pasting session details into a free ' +
      'public AI chatbot to draft a treatment plan update. In a family session, Keiko panics and threatens to pull Zoe from swimming and take her phone.',
  },
  diagnosticRationale:
    'Zoe has engaged in intentional self-inflicted cutting on more than five days in the past year, without suicidal intent, to relieve negative feelings ' +
    'and tension, with urges following interpersonal conflict, and with the relief and numbness typical of NSSI. Her explicit denial of a wish to die is ' +
    'supported by a C-SSRS with no lifetime ideation or attempts, which separates NSSI from suicidal behavior. Moderate depressive symptoms (PHQ-A 14) need ' +
    'monitoring as a co-occurring concern. Borderline personality disorder is not diagnosed from self-injury alone. R45.88 (nonsuicidal self-harm) documents ' +
    'the behavior that is the focus of care.',
  references: [
    { id: 'R1', source: 'DSM-5-TR', detail: 'Nonsuicidal self-injury (condition for further study): criteria, function, and differential from suicidal behavior; current NSSI coded R45.88 under Other Conditions That May Be a Focus of Clinical Attention' },
    { id: 'R2', source: 'C-SSRS', detail: 'Distinguishing suicidal ideation and behavior from nonsuicidal self-injury' },
    { id: 'R3', source: 'ACA Code of Ethics', detail: 'Confidentiality with minors and its limits; parents’ rights; competence; technology and client privacy' },
    { id: 'R4', source: 'Corey (Theory & Practice)', detail: 'DBT: validation, chain analysis, distress tolerance, emotion regulation; family involvement with adolescents' },
    { id: 'R5', source: 'HIPAA', detail: 'Safeguarding PHI; no disclosure to vendors without a business associate agreement; minimum necessary' },
    { id: 'R6', source: 'Hays (Assessment)', detail: 'Age-appropriate screening instruments (e.g., PHQ-A) and self-injury assessment' },
  ],
  questions: [
    // ---------------- intake (assess, profdev, assess, profdev) ----------------
    Q('q1', 'assess', 'intake', 'What is most important to assess first to tell Zoe’s self-injury apart from suicidal behavior?', ['R1', 'R2'], [
      O('a', 'Whether her cuts are on hidden areas such as her thighs, which shows she is not trying to end her life.', 0,
        { r: 'Location is not intent', approach: 'Location framing', why: 'Hiding cuts is common in NSSI but does not establish intent', keys: ['cuts covered by swimsuit'], mistake: 'Inferring intent from location' }),
      O('b', 'Her intent and the function of cutting, plus a structured suicide screen even though she denies wanting to die.', 3,
        { r: 'Intent, function, structured screen', approach: 'Assess risk to self', why: 'NSSI is separated by absence of suicidal intent and its tension-relief function; a structured screen checks for co-occurring suicidality', keys: ['“I don’t want to die”', '“lets the pressure out”'], mistake: 'Accepting a denial without a structured screen' }),
      O('c', 'How many cuts she has made in total, since a high count would show that suicide is her real goal.', -1,
        { r: 'Frequency is not intent', approach: 'Count framing', why: 'Frequency matters for severity but not for intent', keys: ['two to three times a week'], mistake: 'Equating frequency with suicidal intent' }),
      O('d', 'Nothing further, since her clear statement that she does not want to die is enough to rule out any suicide risk.', -2,
        { r: 'Unscreened risk', approach: 'Take-at-word framing', why: 'NSSI raises later suicide risk; a denial needs structured screening', keys: ['seven months of cutting'], mistake: 'Skipping suicide screening in NSSI' }),
    ]),
    Q('q2', 'profdev', 'intake', 'When Zoe shows a fresh cut, the counselor feels nauseated and visibly pulls back. What should she do?', ['R3'], [
      O('a', 'Avoid looking at the injuries in future sessions so that her reaction does not show again.', -1,
        { r: 'Avoidance reinforces shame', approach: 'Avoid framing', why: 'Avoiding the wounds blocks assessment and signals shame', keys: ['Zoe looked away'], mistake: 'Managing one’s reaction by avoiding assessment' }),
      O('b', 'Explain to Zoe that the injuries are upsetting, so she understands why the counselor reacted that way.', -2,
        { r: 'Adds to her shame', approach: 'Explain framing', why: 'Telling her the wounds are upsetting shifts the burden to her and deepens shame', keys: ['Zoe looked away'], mistake: 'Burdening the client with the counselor’s distress' }),
      O('c', 'Ignore the moment, since Zoe probably did not notice it and raising it again might make her feel worse.', 0,
        { r: 'Leaves a rupture', approach: 'Ignore framing', why: 'Zoe did notice; a gentle repair and self-regulation are needed', keys: ['Zoe looked away'], mistake: 'Ignoring a visible rupture' }),
      O('d', 'Use self-regulation to steady herself, take a calm, respectful stance, and process it in supervision.', 3,
        { r: 'Self-regulation plus supervision', approach: 'Utilize self-regulation techniques', why: 'A calm, respectful stance toward wounds supports disclosure; supervision addresses the reaction', keys: ['nausea', 'visible pulling back'], mistake: 'Letting a personal reaction shape the client’s shame' }),
    ]),
    Q('q3', 'assess', 'intake', 'Which additional assessment is most important for Zoe at intake?', ['R6', 'R1'], [
      O('a', 'A full personality assessment, since cutting in teenagers points to an emerging borderline personality disorder.', -2,
        { r: 'Premature labeling', approach: 'Personality framing', why: 'Self-injury alone does not indicate a personality disorder, and labeling a teen early can harm', keys: ['age 14'], mistake: 'Assuming NSSI means borderline personality disorder' }),
      O('b', 'An IQ test, since struggles with grades may explain her conflicts with her mother and her cutting.', -1,
        { r: 'Off-target', approach: 'Cognitive framing', why: 'Nothing suggests a cognitive problem; mood and self-injury details matter more', keys: ['grades conflict'], mistake: 'Choosing an unrelated instrument' }),
      O('c', 'Method, frequency, wound severity and care, and an age-appropriate depression screen such as the PHQ-A.', 3,
        { r: 'Self-injury details and mood screen', approach: 'Select age-appropriate instruments', why: 'Assessing method, severity, wound care, and co-occurring depression guides safety and treatment', keys: ['razor blades', 'feels “too much”'], mistake: 'Skipping medical severity or mood screening' }),
      O('d', 'A substance use screen only, since many teens who self-injure are also using alcohol or drugs.', 0,
        { r: 'Useful, too narrow', approach: 'Substance framing', why: 'Substance screening is worthwhile, but self-injury detail and mood come first', keys: ['no reported substance use'], mistake: 'Narrowing assessment to one area' }),
    ]),
    Q('q4', 'profdev', 'intake', 'The counselor had basic DBT training years ago but none in DBT for adolescents. What is the best step?', ['R3', 'R4'], [
      O('a', 'Use her basic DBT training as it is, since DBT for adolescents is the same as the adult version.', -2,
        { r: 'Overlooks key differences', approach: 'Same-as-adult framing', why: 'Adolescent DBT adds family involvement and developmental adaptations', keys: ['14-year-old'], mistake: 'Assuming adult training covers adolescents' }),
      O('b', 'Seek DBT-A training and consultation, and refer to a DBT-A program if her skills prove insufficient.', 3,
        { r: 'Train, consult, refer if needed', approach: 'Assess need for specialized training', why: 'Counselors update skills through training and consultation and refer when needed', keys: ['basic DBT years ago', 'adolescent client'], mistake: 'Practicing beyond competence or abandoning care' }),
      O('c', 'Refer Zoe right away to a DBT-A program in another city, since only certified DBT teams are able to treat her.', -1,
        { r: 'Premature referral', approach: 'Refer-out framing', why: 'She can build competence locally; a distant program disrupts care', keys: ['local engagement'], mistake: 'Treating any gap as requiring transfer' }),
      O('d', 'Teach Zoe DBT skills from a workbook while she plans to take a refresher course sometime next year.', 0,
        { r: 'Delayed competence', approach: 'Workbook framing', why: 'Workbooks help, but consultation should start now, not next year', keys: ['current case'], mistake: 'Delaying needed training' }),
    ]),

    // ---------------- session1 (indirect, planning, planning) ----------------
    Q('q5', 'indirect', 'session1', 'With Keiko’s release, how should the counselor work with Ms. Alvarez, the school counselor?', ['R3'], [
      O('a', 'Agree on a school plan, such as a pass to see her when urges rise, sharing only what she needs to know.', 3,
        { r: 'Coordinated, minimum necessary', approach: 'Collaborate with support systems', why: 'A school support plan helps in the moments urges hit, with disclosure limited to what is needed', keys: ['release signed', 'urges after conflicts'], mistake: 'Over-disclosing or not coordinating' }),
      O('b', 'Send Ms. Alvarez the session notes so that she understands Zoe’s triggers in full detail.', -1,
        { r: 'Over-disclosure', approach: 'Full-notes framing', why: 'Session notes include more than the school needs', keys: ['minimum necessary'], mistake: 'Sharing whole notes with school staff' }),
      O('c', 'Ask Ms. Alvarez to check Zoe’s thighs each week for new cuts and to report any she finds back to her mother.', -2,
        { r: 'Invasive and shaming', approach: 'Body-check framing', why: 'Body checks by school staff violate dignity and erode trust', keys: ['adolescent privacy'], mistake: 'Using physical checks as monitoring' }),
      O('d', 'Keep school contact brief and general, since too much school involvement may embarrass her.', 0,
        { r: 'Underuses support', approach: 'Minimal-contact framing', why: 'Privacy matters, but a concrete plan at school helps', keys: ['school is a trigger setting'], mistake: 'Missing a chance for real support' }),
    ]),
    Q('q6', 'planning', 'session1', 'Which initial treatment plan best fits Zoe’s needs?', ['R4'], [
      O('a', 'Weekly supportive talk about her friendships, with skill-building added if her cutting continues.', 0,
        { r: 'Not targeted', approach: 'Supportive framing', why: 'Support helps, but NSSI needs targeted skills from the start', keys: ['two to three times a week'], mistake: 'Delaying targeted intervention' }),
      O('b', 'Inpatient admission until the cutting stops, since self-injury of this frequency requires hospitalization.', -2,
        { r: 'Over-restrictive', approach: 'Hospital framing', why: 'She has no suicidal ideation and wounds have not needed stitches; outpatient care fits', keys: ['C-SSRS negative'], mistake: 'Equating NSSI with inpatient need' }),
      O('c', 'DBT-informed skills, chain analysis of episodes, and family sessions to reduce conflict at home.', 3,
        { r: 'DBT-informed with family', approach: 'Develop an initial treatment plan', why: 'DBT-informed skills and family work target NSSI triggers and functions', keys: ['conflict with mother', 'tension relief'], mistake: 'Skipping skills or family work' }),
      O('d', 'Have her pause swimming until she stops cutting, so that the stress of competing is removed for now.', -1,
        { r: 'Removes a protective factor', approach: 'Restrict framing', why: 'Swimming is a valued activity and support; removing it can worsen mood', keys: ['wants to keep swimming'], mistake: 'Removing protective activities as treatment' }),
    ]),
    Q('q7', 'planning', 'session1', 'How should the counselor and Zoe plan for urges between sessions?', ['R4', 'R2'], [
      O('a', 'Have Zoe sign a contract promising not to cut herself again before the next counseling session.', -2,
        { r: 'Contracts do not work', approach: 'Contract framing', why: 'No-harm contracts lack evidence and can discourage honest disclosure', keys: ['ongoing urges'], mistake: 'Using a contract instead of a plan' }),
      O('b', 'Tell Zoe to call the counselor whenever she has an urge, at any hour, so that someone is there for her.', -1,
        { r: 'Unsustainable', approach: 'On-call framing', why: 'Unlimited access is not sustainable and is not a coping plan', keys: ['boundaries'], mistake: 'Making the counselor the coping skill' }),
      O('c', 'Build a coping plan with triggers, alternative skills, safe wound care, fewer blades, and who to tell.', 3,
        { r: 'Collaborative coping and safety plan', approach: 'Develop a behavioral management plan', why: 'A coping plan names triggers, replacement skills, wound care, means reduction, and supports', keys: ['group chat', 'arguments with mother'], mistake: 'Relying on promises or the counselor alone' }),
      O('d', 'Ask Keiko to search Zoe’s room each night and remove anything sharp she finds there.', 0,
        { r: 'Too intrusive alone', approach: 'Search framing', why: 'Reducing access helps, but nightly searches harm trust without skills', keys: ['razor blades'], mistake: 'Relying on control instead of skills' }),
    ]),

    // ---------------- session2 (legal x3, interventions x3) ----------------
    Q('q8', 'legal', 'session2', 'Zoe reports a deeper cut and asks the counselor not to tell her mother. What should the counselor do?', ['R3'], [
      O('a', 'Promise to keep it private if Zoe agrees in writing to stop cutting before the next session.', -2,
        { r: 'Contract plus false promise', approach: 'Bargain framing', why: 'This combines a no-harm contract with a promise she may not be able to keep', keys: ['deeper cut'], mistake: 'Bargaining confidentiality for a promise' }),
      O('b', 'Call her mother after the session and describe the cut and the group-chat incident in full.', 0,
        { r: 'Bypasses Zoe', approach: 'Tell-all framing', why: 'Disclosure may be needed, but involving Zoe and sharing only what safety requires keeps trust', keys: ['intake agreement'], mistake: 'Disclosing without the client' }),
      O('c', 'Keep it private this time since it needed no stitches, and revisit telling her mother if it happens again.', -1,
        { r: 'Misses escalation', approach: 'Wait framing', why: 'A deeper cut is an escalation that the intake agreement anticipated', keys: ['deeper than usual'], mistake: 'Ignoring escalation' }),
      O('d', 'Assess the wound and current risk, then help Zoe tell her mother about the change, as agreed at intake.', 3,
        { r: 'Assess, then involve the parent with her', approach: 'Adhere to ethics on minor confidentiality', why: 'Escalation falls within the safety exception; involving Zoe in telling her mother keeps trust', keys: ['deeper cut', 'intake agreement'], mistake: 'Either keeping escalation secret or disclosing without her' }),
    ]),
    Q('q9', 'legal', 'session2', 'Keiko emails asking for “a copy of everything Zoe says.” How should the counselor respond?', ['R3'], [
      O('a', 'Send Keiko the full notes, since a parent of a minor is entitled to all of her child’s records.', -1,
        { r: 'Ignores the agreement', approach: 'Release-all framing', why: 'Parents have rights, but the agreed confidentiality plan and therapeutic need guide what is shared', keys: ['intake agreement'], mistake: 'Releasing records without considering the plan' }),
      O('b', 'Acknowledge her worry, revisit the intake agreement, and offer a family session to share safety updates.', 3,
        { r: 'Honor the agreement; involve her', approach: 'Adhere to policies on minor records', why: 'The counselor balances a parent’s rights with the agreed limits and gives safety information in a joint setting', keys: ['Keiko’s request', 'confidentiality agreement'], mistake: 'Either shutting the parent out or disclosing everything' }),
      O('c', 'Ignore the email, since what Zoe says in counseling is confidential and not her mother’s concern.', -2,
        { r: 'Shuts out the parent', approach: 'Ignore framing', why: 'Ignoring a parent damages the alliance and overstates confidentiality', keys: ['parent consented'], mistake: 'Treating a minor’s confidentiality as absolute' }),
      O('d', 'Reply that she cannot share anything, and ask Keiko to talk directly to Zoe about her sessions instead.', 0,
        { r: 'Overstates limits', approach: 'Redirect framing', why: 'Some information can and should be shared within the agreement', keys: ['safety exception'], mistake: 'Promising more confidentiality than exists' }),
    ]),
    Q('q10', 'legal', 'session2', 'The counselor considers pasting session details into a free public AI chatbot to draft Zoe’s plan update. What should she do?', ['R5'], [
      O('a', 'Use it but change Zoe’s name, since removing the name makes the details safe to share with the tool.', -1,
        { r: 'Not fully de-identified', approach: 'Rename framing', why: 'Changing a name alone does not de-identify PHI, and the tool has no business associate agreement', keys: ['public chatbot'], mistake: 'Assuming a name change de-identifies data' }),
      O('b', 'Use it as planned, since the chatbot only drafts text and she will review the result before using it.', -2,
        { r: 'PHI disclosure', approach: 'Review-later framing', why: 'Entering PHI into a public tool is an unauthorized disclosure regardless of review', keys: ['session details'], mistake: 'Treating review as protection for disclosure' }),
      O('c', 'Use only practice-approved AI tools with safeguards and client consent, and keep PHI out of public tools.', 3,
        { r: 'Approved tools, safeguards, consent', approach: 'Use AI within practice compliantly', why: 'AI tools that touch PHI need a business associate agreement, safeguards, and informed consent', keys: ['free public chatbot', 'minor’s PHI'], mistake: 'Entering PHI into unsecured AI tools' }),
      O('d', 'Ask Keiko for permission to use the chatbot, since a parent can consent to any use of a minor’s data.', 0,
        { r: 'Consent alone is not enough', approach: 'Consent framing', why: 'Consent helps, but a public tool still lacks required safeguards', keys: ['no business associate agreement'], mistake: 'Treating consent as a substitute for safeguards' }),
    ]),
    Q('q11', 'interventions', 'session2', 'How should the counselor respond as Zoe describes the new cut after the group-chat incident?', ['R4'], [
      O('a', 'Validate how painful being left out felt, then do a chain analysis from trigger to cut to consequences.', 3,
        { r: 'Validate, then chain analysis', approach: 'Implement empirically supported interventions', why: 'Validation reduces shame; chain analysis maps triggers and points where skills could replace cutting', keys: ['group-chat incident', 'deeper cut'], mistake: 'Skipping validation or skill analysis' }),
      O('b', 'Tell her she is making things worse for herself and that she must find better ways to deal with her friends.', -2,
        { r: 'Shaming response', approach: 'Lecture framing', why: 'Criticism increases shame, a common driver of more self-injury', keys: ['shame'], mistake: 'Responding to self-injury with criticism' }),
      O('c', 'Move quickly past the cut to her friendships, since dwelling on self-injury may reinforce it.', 0,
        { r: 'Misses the analysis', approach: 'Redirect framing', why: 'Excess focus can reinforce, but a structured chain analysis is evidence-based', keys: ['new episode'], mistake: 'Avoiding the behavior entirely' }),
      O('d', 'Focus mainly on how the group chat made her feel, without going into details of the cutting itself.', -1,
        { r: 'Incomplete', approach: 'Feelings-only framing', why: 'Feelings matter, but skipping the behavior misses where to intervene', keys: ['deeper cut'], mistake: 'Leaving the behavior unexamined' }),
    ]),
    Q('q12', 'interventions', 'session2', 'Which skill is most useful to teach Zoe for intense urges in the moment?', ['R4'], [
      O('a', 'Journaling about the roots of her feelings, so that she can gain insight into why the urges happen.', -1,
        { r: 'Not a crisis skill', approach: 'Insight framing', why: 'Reflection helps later but is hard at peak arousal', keys: ['in-the-moment urges'], mistake: 'Using an insight task for crisis urges' }),
      O('b', 'Snapping a rubber band on her wrist, since it gives a similar sensation without causing real damage.', -2,
        { r: 'Substitutes self-harm', approach: 'Substitute-pain framing', why: 'Rubber bands keep the self-harm pattern and can escalate', keys: ['NSSI function'], mistake: 'Replacing one form of self-harm with another' }),
      O('c', 'Calling a friend from the group chat to talk through what happened right when the urge starts.', 0,
        { r: 'Support, but risky source', approach: 'Reach-out framing', why: 'Reaching out is good, but the group chat is the trigger', keys: ['group-chat exclusion'], mistake: 'Choosing a support tied to the trigger' }),
      O('d', 'Distress tolerance skills such as cold water on her face and paced breathing to bring the urge down.', 3,
        { r: 'Distress tolerance', approach: 'Facilitate skill development', why: 'Cold water and paced breathing lower physiological arousal quickly and replace cutting', keys: ['“too much”', 'pressure relief'], mistake: 'Teaching skills that do not work at peak arousal' }),
    ]),
    Q('q13', 'interventions', 'session2', 'In a family session, Keiko panics and threatens to pull Zoe from swimming and take her phone. What should the counselor do?', ['R4'], [
      O('a', 'Support Keiko’s limits, since firm consequences show Zoe that self-injury is not acceptable.', -2,
        { r: 'Punishment increases shame', approach: 'Consequence framing', why: 'Punishing NSSI raises shame and secrecy and removes protective activities', keys: ['swimming is protective'], mistake: 'Treating self-injury as misbehavior' }),
      O('b', 'Validate Keiko’s fear, then coach her toward calm, caring responses instead of punishment.', 3,
        { r: 'Validate parent; coach response', approach: 'Engage in family counseling', why: 'Parents respond better when their fear is validated and they learn calm, supportive responses', keys: ['Keiko panics', 'threatens swim and phone'], mistake: 'Siding against the parent or with punishment' }),
      O('c', 'Ask Keiko to leave so that Zoe can talk freely, and finish the family session alone with Zoe.', -1,
        { r: 'Excludes the parent', approach: 'Exclude framing', why: 'Removing the parent misses the chance to change family responses', keys: ['family session'], mistake: 'Excluding a parent at a key moment' }),
      O('d', 'Explain the research on NSSI to Keiko in detail so that she understands why her reaction is unhelpful.', 0,
        { r: 'Information before validation', approach: 'Educate framing', why: 'Education helps after her fear is acknowledged', keys: ['panic'], mistake: 'Educating before validating' }),
    ]),
  ],
};

module.exports = { CASES: [D955, D956, D957, D958, D959] };
