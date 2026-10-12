// deep-cases-2027-batch-03.js — NCMHCE deep cases, 2027 specification
// ids: ncmhce-D930, ncmhce-D931, ncmhce-D932, ncmhce-D933, ncmhce-D934
// 2027 NCMHCE specification; hand-authored; validate with check2027.js
//
// ncmhce-D930 · plan 0 · Anxiety · hard   · adult         · GAD (F41.1)
// ncmhce-D931 · plan 1 · Trauma  · easy   · adult         · Adjustment Disorder, with Depressed Mood (F43.21)
// ncmhce-D932 · plan 2 · Trauma  · hard   · child         · Reactive Attachment Disorder (F94.1)
// ncmhce-D933 · plan 3 · Trauma  · medium · adult         · Prolonged Grief Disorder (F43.81)
// ncmhce-D934 · plan 4 · Trauma  · hard   · adult         · Posttraumatic Stress Disorder (F43.10)
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
// D930 — GAD, hard, plan 0
// ============================================================================
const D930 = {
  id: 'ncmhce-D930',
  title: 'An eviction notice, a shaking hand, and a nightly six-pack: a shop owner’s worry spirals',
  category: 'Anxiety',
  difficulty: 'hard',
  plan: 0,
  population: 'adult',
  primaryDiagnosis: { name: 'Generalized Anxiety Disorder', code: 'F41.1' },
  diagnosis: { name: 'Generalized Anxiety Disorder', code: 'F41.1' },
  differentialOptions: [
    { id: 'do1', name: 'Anxiety Disorder Due to Another Medical Condition', isCorrect: false },
    { id: 'do2', name: 'Alcohol-Induced Anxiety Disorder', isCorrect: false },
    { id: 'do3', name: 'Generalized Anxiety Disorder', isCorrect: true },
    { id: 'do4', name: 'Adjustment Disorder, with Anxiety', isCorrect: false },
  ],
  narrative: {
    intake:
      'Hyun-woo “Danny” Park, a 46-year-old Korean American man, is seen at a community mental health center. For 14 years he ran a dry-cleaning shop that ' +
      'closed three months ago when the building was sold; he is behind on rent, and ten days ago his family received a 30-day eviction notice. His wife, ' +
      'Soo-jin, works as a hotel housekeeper; they have two children, 15 and 11. Danny says he has been “a worrier my whole life”: since his twenties he has ' +
      'worried most days about money, his children’s health, his aging parents in Busan, and customer complaints, with muscle tension, restless sleep, ' +
      'irritability, and trouble concentrating. Mentioned in passing as “just stress”: over the past four months his heart races at rest, his hands shake, he ' +
      'sweats in air-conditioned rooms, he has frequent loose stools, and he has lost 14 pounds without trying even though he is eating more. He has not seen ' +
      'a doctor in three years and enrolled in a marketplace health plan last month. He drinks four to five cans of beer every night “to shut my brain off,” ' +
      'up from one or two on weekends a year ago; he denies morning drinking or past withdrawal. GAD-7 is 17. Near the end of intake he adds, “Don’t worry, ' +
      'I’m not going to do anything stupid. I just think sometimes my family would be better off with the life insurance than with me.” He keeps a handgun in ' +
      'his bedroom closet, bought after a break-in at the shop. His counselor, Renée, an LPC two years post-licensure, is herself two months behind on her ' +
      'mortgage after a divorce and notices she lies awake after his session; she has also had little training in co-occurring substance use.',
    session1:
      'A structured risk assessment at the close of intake found passive ideation without intent or plan; Danny agreed to have his brother-in-law hold the ' +
      'handgun, and a written safety plan was completed with Soo-jin present. The counselor coordinated a same-week primary care visit. Labs showed ' +
      'hyperthyroidism; nine days ago his physician started methimazole and propranolol and referred him to endocrinology. Danny now reports feeling “less ' +
      'shaky but dizzy when I stand up, and tired,” and has not told his physician. He has cut back to two or three beers a night. The eviction hearing is in ' +
      'three weeks. He has applied for nothing because “asking strangers for money is shameful for a man,” and he spends hours each night replaying ' +
      '“what-ifs” about the children getting sick and his parents dying while he is far away.',
    session2:
      'Danny says the “what-ifs” still take two or three hours a night, while the eviction paperwork sits unopened on the kitchen table. He says, “In my ' +
      'family the father fixes things alone. My father would be ashamed I am here.” He tells the counselor he still has a beer or two when he cannot sleep ' +
      'and asks whether that is “really so bad if it works.” His plan carries a $40 copay per session, and he asks whether the counselor could “just skip the ' +
      'copay and bill the insurance” until he finds work. The center has begun using an AI note-taking tool that records sessions to draft notes; Danny says he ' +
      'is uneasy about a recording that might let people at his church learn about his business failing.',
  },
  diagnosticRationale:
    'Danny describes excessive, hard-to-control worry about multiple domains on most days for decades, with muscle tension, sleep disturbance, irritability, ' +
    'and poor concentration, causing marked distress—Generalized Anxiety Disorder. Because the worry pattern long predates the alcohol increase and the recent ' +
    'physical changes, neither alcohol nor the thyroid disorder fully accounts for it, but both intensify his current symptoms: the hyperthyroid signs ' +
    '(tachycardia, tremor, heat intolerance, weight loss with increased appetite, loose stools) had to be medically evaluated rather than attributed to ' +
    'anxiety, and nightly drinking can worsen sleep and rebound anxiety. The eviction is a real stressor layered on a chronic disorder, not the cause of it, ' +
    'so adjustment disorder does not fit.',
  references: [
    { id: 'R1', source: 'DSM-5-TR', detail: 'Generalized anxiety disorder: criteria A–F, including exclusion of physiological effects of a substance or another medical condition (e.g., hyperthyroidism)' },
    { id: 'R2', source: 'C-SSRS', detail: 'Structured assessment of ideation, intent, plan, and behavior after an indirect suicide-related statement' },
    { id: 'R3', source: 'Stanley-Brown SPI', detail: 'Collaborative safety planning, including lethal-means counseling about firearms' },
    { id: 'R4', source: 'NICE guidelines', detail: 'Generalised anxiety disorder: stepped care, psychoeducation, CBT including worry-focused work and problem solving; assess alcohol use' },
    { id: 'R5', source: 'SAMHSA TIP 35', detail: 'Screening and brief motivational work around alcohol used to self-medicate anxiety' },
    { id: 'R6', source: 'ACA Code of Ethics', detail: 'Counselor impairment and self-monitoring, competence and consultation, informed consent including technology, honesty in billing and fees' },
    { id: 'R7', source: 'Wiger (Documentation)', detail: 'Documenting client-reported medication effects and coordination with prescribers; documentation supporting billed services' },
    { id: 'R8', source: 'Corey (Theory & Practice)', detail: 'Multicultural counseling, broaching culture and values, help-seeking and stigma' },
  ],
  questions: [
    // ---------------- intake (5) ----------------
    Q('q1', 'profdev', 'intake', 'Renée notices she lies awake after Danny’s session and is behind on her own mortgage. What should she do first?', ['R6'], [
      O('a', 'Tell Danny about her own mortgage trouble so he feels less alone and sees that financial setbacks happen to anyone.', -1,
        { r: 'Self-disclosure shifts the focus', approach: 'Rapport-through-disclosure framing', why: 'Disclosing her own financial crisis serves her need for connection more than his treatment and can burden a client already in distress', keys: ['counselor behind on mortgage', 'client in acute financial crisis'], mistake: 'Using self-disclosure to manage the counselor’s own distress' }),
      O('b', 'Reflect on how her own money stress may shape her reactions to him, and bring it to supervision while she continues care.', 3,
        { r: 'Self-reflection plus supervision', approach: 'Monitor and consult', why: 'Counselors monitor for personal problems that may affect their work and seek supervision before they impair care; noticing it is the first step', keys: ['lies awake after his session', 'parallel financial strain'], mistake: 'Either ignoring a personal reaction or acting on it without consultation' }),
      O('c', 'Ask a colleague to take over his care right away, since her own debt means she cannot stay objective about his situation now.', 0,
        { r: 'Premature transfer', approach: 'Transfer framing', why: 'A personal reaction is not automatically impairment; supervision determines whether she can work effectively before an abrupt handoff', keys: ['no evidence of impaired care yet'], mistake: 'Treating any countertransference as requiring immediate transfer' }),
      O('d', 'Advise him on which bills to pay first, drawing on the plan she has worked out for handling her own overdue mortgage.', -2,
        { r: 'Out of scope and boundary-blurring', approach: 'Financial-advisor framing', why: 'Giving debt advice based on her own situation steps outside counseling scope and merges her needs with his', keys: ['eviction notice', 'counselor’s own debt'], mistake: 'Offering personal financial advice instead of counseling' }),
    ]),
    Q('q2', 'profdev', 'intake', 'Renée has had little training in co-occurring substance use. What is the most appropriate course of action?', ['R6', 'R5'], [
      O('a', 'Focus only on his anxiety, since that is why he was referred, and leave the drinking unaddressed unless it gets worse.', -2,
        { r: 'Ignores a clinically central problem', approach: 'Narrow-scope framing', why: 'His drinking directly interacts with his anxiety and safety; avoiding it because of a training gap leaves a risk unaddressed', keys: ['four to five beers nightly', 'drinks to shut his brain off'], mistake: 'Avoiding a clinical issue because it falls outside the counselor’s comfort zone' }),
      O('b', 'Refer him to an addiction program and end her own involvement, since mixed anxiety and alcohol cases need a specialist.', -1,
        { r: 'Abandons a workable case', approach: 'Refer-out framing', why: 'Co-occurring anxiety and alcohol use is common in general outpatient work; competence gaps are closed by consultation and training, not by ending care', keys: ['no withdrawal history', 'established alliance'], mistake: 'Treating any training gap as a reason to discharge' }),
      O('c', 'Read about alcohol and anxiety on her own time, and wait to consult anyone until she sees whether his drinking improves.', 0,
        { r: 'Self-study without consultation', approach: 'Solo-learning framing', why: 'Self-study helps, but practicing in a new area calls for supervision or consultation now, not after the course is clear', keys: ['little co-occurring training'], mistake: 'Delaying consultation while practicing outside established competence' }),
      O('d', 'Get supervision on co-occurring care and training in it while she keeps treating him, referring if his needs exceed it.', 3,
        { r: 'Consult and train; refer if needed', approach: 'Build competence responsibly', why: 'Counselors practicing in a developing area obtain supervision and education to ensure competent work, and refer if they cannot provide it', keys: ['little co-occurring training', 'drinking tied to anxiety'], mistake: 'Either ignoring the gap or abandoning the client' }),
    ]),
    Q('q3', 'assess', 'intake', 'Given the physical symptoms Danny mentions as “just stress,” what is the most important next step?', ['R1'], [
      O('a', 'Refer him for a prompt medical evaluation, including thyroid testing, before attributing these symptoms to his anxiety.', 3,
        { r: 'Rule out a medical cause', approach: 'Medical rule-out first', why: 'GAD and other anxiety diagnoses require that symptoms not be attributable to another medical condition; weight loss despite eating more, tremor, and heat intolerance suggest hyperthyroidism', keys: ['lost 14 pounds while eating more', 'sweats in air-conditioned rooms', 'no doctor in three years'], mistake: 'Accepting a client’s “just stress” label for new physical signs' }),
      O('b', 'Teach him diaphragmatic breathing for the racing heart, since slowing his breath should settle the tremor and sweating too.', -2,
        { r: 'Treats a possible medical illness as anxiety', approach: 'Arousal-reduction framing', why: 'Treating untreated hyperthyroid signs as anxiety delays a diagnosis with real medical risk, including cardiac strain', keys: ['heart races at rest', 'unintended weight loss'], mistake: 'Assuming physical symptoms in an anxious client are psychological' }),
      O('c', 'Have him cut caffeine and track the symptoms for a month, and send him to a doctor only if they have not improved by then.', -1,
        { r: 'Watchful waiting is too slow', approach: 'Monitor-first framing', why: 'A month of tracking is not appropriate for unexplained weight loss and resting tachycardia; these warrant prompt medical evaluation', keys: ['four months of symptoms', 'weight loss'], mistake: 'Delaying medical referral for red-flag physical symptoms' }),
      O('d', 'Add a panic-disorder screen and a worry questionnaire to see whether the physical symptoms fit a second anxiety disorder.', 0,
        { r: 'Psychiatric lens before medical one', approach: 'More-measures framing', why: 'Further anxiety screening may be useful later, but it cannot rule out a medical cause and does not address the red-flag signs', keys: ['no recent medical care'], mistake: 'Looking for another psychiatric explanation before a medical one' }),
    ]),
    Q('q4', 'assess', 'intake', 'How should the counselor assess Danny’s drinking at this stage?', ['R5'], [
      O('a', 'Note that he denies morning drinking and withdrawal, and wait until a later session to ask more once he trusts her more.', 0,
        { r: 'Delays a needed assessment', approach: 'Defer framing', why: 'A rapid rise to nightly heavy drinking in a client with passive ideation and a firearm needs assessment now, not later', keys: ['up from weekends to nightly', 'handgun at home'], mistake: 'Postponing substance assessment to protect rapport' }),
      O('b', 'Encourage him to keep the nightly beers for now, since they lower his anxiety until he has learned other coping skills.', -2,
        { r: 'Endorses self-medication', approach: 'Harm-tolerating framing', why: 'Alcohol worsens sleep and rebound anxiety and raises suicide risk; endorsing it is harmful', keys: ['passive ideation', 'handgun'], mistake: 'Treating alcohol as an acceptable anxiety treatment' }),
      O('c', 'Use the AUDIT and ask about amount, pattern, function, and withdrawal to see how his drinking relates to his worry.', 3,
        { r: 'Structured screen plus functional history', approach: 'Assess substance use fully', why: 'A validated screen with quantity, pattern, the purpose drinking serves, and withdrawal history clarifies severity and its interaction with anxiety', keys: ['drinks to shut his brain off', 'four to five beers nightly'], mistake: 'Recording a drink count without its function or severity' }),
      O('d', 'Diagnose alcohol use disorder from the nightly amount, and refer him to a detox program before any anxiety work begins.', -1,
        { r: 'Premature diagnosis and level of care', approach: 'Label-and-refer framing', why: 'Quantity alone does not establish a use disorder or the need for detox; he denies withdrawal and needs a fuller assessment', keys: ['denies withdrawal', 'no morning drinking'], mistake: 'Jumping from drink count to diagnosis and detox' }),
    ]),
    Q('q5', 'assess', 'intake', 'Danny says his family “would be better off with the life insurance” but that he won’t “do anything stupid.” The counselor should:', ['R2', 'R3'], [
      O('a', 'Accept his reassurance, document low risk, and come back to the life insurance comment if it comes up again next time.', -1,
        { r: 'Reassurance is not assessment', approach: 'Take-at-face-value framing', why: 'A perceived-burden statement is a risk indicator; a reassurance does not replace direct assessment of ideation, intent, plan, and means', keys: ['family better off with life insurance', 'handgun at home'], mistake: 'Letting a client’s reassurance close a risk disclosure' }),
      O('b', 'Arrange an emergency psychiatric evaluation today, since any mention of life insurance means he is at high risk of suicide.', 0,
        { r: 'Over-restrictive before assessment', approach: 'Escalate-first framing', why: 'He needs a direct assessment now; escalating without one is premature, though it errs on the safe side', keys: ['passive statement', 'no assessment yet'], mistake: 'Choosing a level of care before assessing risk' }),
      O('c', 'Have him sign an agreement that he will not harm himself and will call the crisis line before acting on any of these thoughts.', -2,
        { r: 'No-suicide contract', approach: 'Contract framing', why: 'No-suicide contracts lack evidence and give false reassurance; they do not replace assessment, safety planning, or lethal-means counseling', keys: ['firearm access', 'burden statement'], mistake: 'Relying on a no-harm contract in place of assessment' }),
      O('d', 'Ask directly about ideation, intent, and plan with a structured tool, and address the handgun as part of a safety plan.', 3,
        { r: 'Structured assessment plus lethal means', approach: 'Assess and safety-plan', why: 'A burden statement calls for structured inquiry, and firearm access must be addressed through collaborative lethal-means counseling', keys: ['“better off with the life insurance”', 'handgun in the closet'], mistake: 'Assessing ideation without addressing access to a firearm' }),
    ]),

    // ---------------- session1 (3) ----------------
    Q('q6', 'planning', 'session1', 'At session 1, which set of priorities should anchor Danny’s initial treatment plan?', ['R4', 'R3'], [
      O('a', 'Start with his lifelong worry, since GAD is the diagnosis, and take up the eviction after his anxiety has come down.', -1,
        { r: 'Misses urgent priorities', approach: 'Diagnosis-first framing', why: 'Chronic worry is the long-term target, but an eviction in three weeks, medication side effects, and safety come first', keys: ['hearing in three weeks', 'dizzy on standing'], mistake: 'Ordering goals by diagnosis instead of urgency' }),
      O('b', 'Make stopping all alcohol the first goal, because no other part of the plan can work until he has fully stopped drinking.', 0,
        { r: 'Too narrow a first goal', approach: 'Abstinence-first framing', why: 'Reducing alcohol matters and he has already cut back, but safety, medical follow-up, and the eviction are more urgent', keys: ['cut back to two or three beers'], mistake: 'Making abstinence a precondition for other work' }),
      O('c', 'Keep safety and medical follow-up current, act on the eviction now, then target the worry pattern with CBT.', 3,
        { r: 'Urgency-ordered priorities', approach: 'Prioritize with the client', why: 'Safety and medical stability come first, a time-limited real stressor needs action now, and worry-focused CBT follows once the crisis is addressed', keys: ['safety plan in place', 'hearing in three weeks', 'new medications'], mistake: 'Treating every problem as equally urgent' }),
      O('d', 'Begin worry exposure right away and let the eviction case play out, since facing feared outcomes will lower his anxiety.', -2,
        { r: 'Ignores a real, solvable crisis', approach: 'Exposure-only framing', why: 'The eviction is a real problem that needs action, not a hypothetical worry; letting it play out could cost the family housing', keys: ['30-day notice', 'paperwork unopened'], mistake: 'Treating a real crisis as a worry to be tolerated' }),
    ]),
    Q('q7', 'planning', 'session1', 'Danny has applied for no help because asking “is shameful for a man.” How should the plan address the eviction?', ['R4', 'R8'], [
      O('a', 'Hand him a printed list of local agencies and let him decide on his own when he is ready to contact any of them.', 0,
        { r: 'Passive referral', approach: 'List-only framing', why: 'A list respects autonomy, but given his shame and avoidance it is unlikely to be used before the hearing', keys: ['applied for nothing', 'shame about asking'], mistake: 'Giving a resource list without addressing barriers to using it' }),
      O('b', 'Refer him to legal aid and emergency rental help, exploring his shame and planning the first call with him in session.', 3,
        { r: 'Active, culturally attuned referral', approach: 'Refer with barriers addressed', why: 'Connecting clients to community resources includes working through barriers such as shame, and planning concrete first steps raises follow-through', keys: ['hearing in three weeks', '“shameful for a man”'], mistake: 'Ignoring the cultural meaning of help-seeking when referring' }),
      O('c', 'Advise him to sign whatever move-out agreement the landlord offers, since a judgment on his record would be far worse.', -2,
        { r: 'Legal advice outside scope', approach: 'Advise-the-outcome framing', why: 'Counselors do not give legal advice; urging him to sign could forfeit defenses or assistance', keys: ['pending hearing'], mistake: 'Giving legal advice instead of referring to legal services' }),
      O('d', 'Wait to address the eviction until his worry is lower, so the stress of asking for help does not set back his progress.', -1,
        { r: 'Delay risks the housing', approach: 'Protect-from-stress framing', why: 'The hearing has a fixed date; delay can mean losing options and housing', keys: ['hearing in three weeks'], mistake: 'Postponing a time-bound problem for symptom reasons' }),
    ]),
    Q('q8', 'indirect', 'session1', 'Danny reports dizziness on standing and fatigue since starting new medications and has not told his physician. The counselor should:', ['R7'], [
      O('a', 'Suggest he skip the propranolol on days he feels dizzy, since the shaking has already improved enough without it.', -2,
        { r: 'Medication advice outside scope', approach: 'Adjust-the-dose framing', why: 'Counselors do not advise on dosing; stopping a beta-blocker abruptly can be harmful', keys: ['new propranolol', 'counselor scope'], mistake: 'Giving medication instructions as a counselor' }),
      O('b', 'Record the dizziness as part of his anxiety and keep the focus of the session on the eviction and on his nightly worry.', -1,
        { r: 'Misattributes a side effect', approach: 'Anxiety-attribution framing', why: 'New dizziness after starting medication should be documented as a reported effect and passed on, not folded into anxiety', keys: ['started nine days ago', 'dizzy on standing'], mistake: 'Attributing a possible medication effect to the psychiatric condition' }),
      O('c', 'Document what he reports and, with his consent, tell his physician and urge him to call the prescriber about it soon.', 3,
        { r: 'Document and coordinate', approach: 'Document self-reported effects', why: 'Counselors document client-reported medication effects and coordinate with the prescriber with consent, encouraging the client to report directly', keys: ['has not told his physician', 'dizziness and fatigue'], mistake: 'Neither documenting nor communicating a reported side effect' }),
      O('d', 'Note it in the chart and ask him to mention it at his endocrinology visit, whenever that first appointment is set.', 0,
        { r: 'Documents but delays', approach: 'Defer-to-specialist framing', why: 'Documenting is right, but waiting for an unscheduled specialist visit leaves the prescriber unaware of a possibly important effect', keys: ['referral not yet scheduled'], mistake: 'Documenting without timely communication to the prescriber' }),
    ]),

    // ---------------- session2 (5) ----------------
    Q('q9', 'interventions', 'session2', 'Danny spends hours on “what-ifs” while the eviction papers sit unopened. Which intervention fits best?', ['R4'], [
      O('a', 'Help him sort worries into solvable and hypothetical ones, use problem solving on the eviction, and CBT for the rest.', 3,
        { r: 'Differentiate worry types', approach: 'Worry-focused CBT', why: 'CBT for GAD separates current, solvable problems (problem solving) from hypothetical worries (worry exposure, tolerance of uncertainty)', keys: ['“what-ifs” about illness and death', 'paperwork unopened'], mistake: 'Treating all worry the same way' }),
      O('b', 'Teach thought-stopping, so he can snap a rubber band whenever a what-if starts and turn his attention back to sleep instead.', -1,
        { r: 'Suppression backfires', approach: 'Thought-stopping framing', why: 'Suppressing worry tends to increase it and does nothing about the real eviction problem', keys: ['hours of worry nightly'], mistake: 'Using suppression for generalized worry' }),
      O('c', 'Reassure him that his children are healthy and his parents are well cared for, so the what-ifs have no basis in reality.', -2,
        { r: 'Reassurance maintains worry', approach: 'Reassurance framing', why: 'Reassurance gives short relief but reinforces the worry cycle, and it ignores the solvable problem he is avoiding', keys: ['long-standing worry'], mistake: 'Offering reassurance as an intervention for GAD' }),
      O('d', 'Schedule a daily 30-minute worry period for all of his worries, including the eviction, and practice postponing them.', 0,
        { r: 'Helpful but misses the real problem', approach: 'Stimulus-control framing', why: 'Worry postponement is a valid technique, but the eviction needs action, not scheduled worry', keys: ['paperwork unopened'], mistake: 'Applying a worry technique to a problem that needs solving' }),
    ]),
    Q('q10', 'interventions', 'session2', 'Danny asks whether a beer or two when he can’t sleep is “really so bad if it works.” The best response is to:', ['R5', 'R4'], [
      O('a', 'Tell him firmly that any drinking will undo his treatment and that he has to stop completely before the next session.', -1,
        { r: 'Confrontation raises resistance', approach: 'Directive framing', why: 'A confrontational demand tends to increase resistance; motivational, informed discussion is more effective', keys: ['already cut back'], mistake: 'Using confrontation instead of motivational engagement' }),
      O('b', 'Explore what he notices after drinking, and explain how alcohol can disrupt sleep and raise next-day anxiety.', 3,
        { r: 'Elicit and inform', approach: 'Motivational psychoeducation', why: 'Eliciting his experience and offering information on rebound anxiety and sleep disruption supports change without arguing', keys: ['drinks when he cannot sleep', 'asks if it is so bad'], mistake: 'Either lecturing or colluding instead of exploring' }),
      O('c', 'Agree that a beer or two is moderate and fine, since he has already cut down and pressing harder could hurt the alliance.', -2,
        { r: 'Colludes with self-medication', approach: 'Collusion framing', why: 'Endorsing drinking as a sleep aid ignores its effect on anxiety and his recent safety picture', keys: ['passive ideation at intake'], mistake: 'Endorsing alcohol as a coping strategy' }),
      O('d', 'Suggest he ask his physician for a sleep medication instead, so he has something safer than beer to use at night.', 0,
        { r: 'Shifts focus to a prescription', approach: 'Substitute framing', why: 'Medical input on sleep is reasonable, but it skips exploring his drinking and the anxiety-alcohol cycle', keys: ['drinks to shut his brain off'], mistake: 'Replacing one sleep aid with another without exploring function' }),
    ]),
    Q('q11', 'interventions', 'session2', 'Danny says, “In my family the father fixes things alone. My father would be ashamed I am here.” The counselor should:', ['R8'], [
      O('a', 'Explain that seeking help is a sign of strength in American culture, and encourage him to let go of that old-fashioned view.', -2,
        { r: 'Dismisses his cultural values', approach: 'Acculturation framing', why: 'Framing his values as outdated invalidates him and risks a rupture and dropout', keys: ['father would be ashamed'], mistake: 'Imposing the counselor’s cultural values on the client' }),
      O('b', 'Move on to the eviction plan, since talking about his father could stir up feelings that distract from the urgent tasks.', 0,
        { r: 'Misses a key moment', approach: 'Task-focus framing', why: 'The eviction is urgent, but his statement explains his avoidance of help and needs attention to keep him engaged', keys: ['shame about being here'], mistake: 'Skipping a cultural disclosure that drives avoidance' }),
      O('c', 'Reflect the weight of that role, ask what being a father means in his family, and explore how it shapes his choices.', 3,
        { r: 'Broach and explore meaning', approach: 'Broaching culture', why: 'Inviting his cultural meaning of fatherhood and help-seeking builds trust and can reframe help-seeking as fulfilling his duty to his family', keys: ['“the father fixes things alone”', 'applied for nothing'], mistake: 'Avoiding culture or explaining it away' }),
      O('d', 'Offer to refer him to a Korean-speaking counselor, since a counselor from another culture cannot understand this pressure.', -1,
        { r: 'Reflexive referral', approach: 'Match-or-refer framing', why: 'A matched counselor can be offered if he wants one, but automatic referral replaces cultural competence with avoidance', keys: ['no stated preference'], mistake: 'Assuming cultural matching is required to address culture' }),
    ]),
    Q('q12', 'legal', 'session2', 'Danny asks the counselor to “just skip the copay and bill the insurance” until he finds work. The best response is to:', ['R6'], [
      O('a', 'Agree to waive the copay quietly and bill the plan as usual, since his hardship is real and the insurer pays most of it.', -2,
        { r: 'Routine waiver misrepresents fees', approach: 'Quiet-waiver framing', why: 'Routinely waiving copays while billing the full fee can misrepresent charges to the insurer and violate the payer contract', keys: ['$40 copay', 'insurance billing'], mistake: 'Treating a copay waiver as harmless kindness' }),
      O('b', 'Tell him that services must stop until the copay is paid in full, since the center cannot make exceptions for anyone.', -1,
        { r: 'Rigid and abandoning', approach: 'Hard-line framing', why: 'Stopping care for a client with recent suicidal ideation over a copay ignores options such as documented hardship policies', keys: ['recent passive ideation', 'lost his business'], mistake: 'Ending care abruptly over payment' }),
      O('c', 'Refer him to a free clinic elsewhere, since the copay is a burden and a free clinic avoids any billing problems for the center.', 0,
        { r: 'Unneeded transfer', approach: 'Refer-out framing', why: 'A free clinic may help, but transferring care first skips the center’s own hardship options and disrupts the alliance', keys: ['established alliance'], mistake: 'Transferring care before using available fee options' }),
      O('d', 'Explain that he can apply under the center’s written financial-hardship policy, applied consistently with his plan’s rules.', 3,
        { r: 'Use a documented hardship policy', approach: 'Honest fee arrangement', why: 'Fee adjustments should follow a written, consistently applied hardship policy that complies with the payer contract and is documented', keys: ['lost income', 'marketplace plan'], mistake: 'Improvising a waiver rather than using a compliant policy' }),
    ]),
    Q('q13', 'legal', 'session2', 'Danny is uneasy about the AI note-taking tool recording his sessions. How should the counselor proceed?', ['R6'], [
      O('a', 'Keep using the tool, since it is center policy and recordings are stored securely and are deleted once the note is drafted.', -2,
        { r: 'Overrides his consent', approach: 'Policy-overrides framing', why: 'Clients must give informed consent to recording and AI tools and may decline; security does not replace consent', keys: ['uneasy about recording'], mistake: 'Treating secure storage as a substitute for consent' }),
      O('b', 'Explain how the tool works and its risks, honor his choice to decline, turn it off, and document his decision.', 3,
        { r: 'Informed consent, revocable', approach: 'Respect technology consent', why: 'Use of AI recording tools requires informed consent covering purpose, storage, and risks; declining must not affect his care', keys: ['fears church community learning', 'AI note-taker records sessions'], mistake: 'Making care conditional on accepting a technology' }),
      O('c', 'Ask him to sign the consent form anyway, since the center needs it on file for every client before services can continue.', -1,
        { r: 'Coerced consent', approach: 'Paperwork framing', why: 'Consent obtained as a condition of services is not freely given', keys: ['client declined'], mistake: 'Confusing a signature with voluntary consent' }),
      O('d', 'Pause the tool for today only and revisit the decision next week, after he has read the center’s written AI policy.', 0,
        { r: 'Defers a decision he has made', approach: 'Defer-the-decision framing', why: 'Giving him written information is reasonable, but treating his refusal as provisional pressures him rather than honoring and documenting it', keys: ['uneasy about recording'], mistake: 'Treating a client’s refusal as temporary until they are persuaded' }),
    ]),
  ],
};

// ============================================================================
// D931 — Adjustment Disorder with Depressed Mood, easy, plan 1
// ============================================================================
const D931 = {
  id: 'ncmhce-D931',
  title: 'Twenty-one years, then a line on a spreadsheet: a logistics manager after a merger layoff',
  category: 'Trauma',
  difficulty: 'easy',
  plan: 1,
  population: 'adult',
  primaryDiagnosis: { name: 'Adjustment Disorder, with Depressed Mood', code: 'F43.21' },
  diagnosis: { name: 'Adjustment Disorder, with Depressed Mood', code: 'F43.21' },
  differentialOptions: [
    { id: 'do1', name: 'Adjustment Disorder, with Depressed Mood', isCorrect: true },
    { id: 'do2', name: 'Major Depressive Disorder, Single Episode, Mild', isCorrect: false },
    { id: 'do3', name: 'Persistent Depressive Disorder', isCorrect: false },
    { id: 'do4', name: 'Generalized Anxiety Disorder', isCorrect: false },
  ],
  narrative: {
    intake:
      'Esperanza “Espe” Gallardo, a 49-year-old Mexican American woman, completes intake by video with Marcus, an LPC in a small group practice; she joins ' +
      'from her kitchen table. Six weeks ago she was laid off as a regional logistics manager after 21 years with a freight company, when it merged with a ' +
      'competitor. Since then she has felt sad most of the day, cries when she drives past her old warehouse, sleeps nine to ten hours, and has a smaller ' +
      'appetite with no weight change. She has skipped her family’s Sunday dinners because her sisters “keep asking what I’m going to do.” She still enjoys ' +
      'her garden and her granddaughter’s soccer games, concentrates well enough to read, and has no history of depression or anxiety. She drinks a glass of ' +
      'wine on some weekends. She says, “Twenty-one years and I was just a line on a spreadsheet.” Her PHQ-9 is 11; item 9 is 0, and on direct questioning she ' +
      'denies any thoughts of death or suicide. Her severance includes four months of pay and an outplacement career coach; her employer health plan ends at ' +
      'month’s end. She asks whether Marcus could give her “one of those career tests,” though he has had no training in interest inventories. At the end of ' +
      'the session she laughs and asks if he would endorse her leadership skills on LinkedIn, since “you’ll know me better than anyone soon.”',
    session1:
      'Espe signs a release so Marcus can coordinate with her outplacement coach, Dana, who has asked how Espe is “doing emotionally” so she can pace the job ' +
      'search. Espe has applied for no jobs; she avoids LinkedIn because former coworkers’ posts make her cry. She lists what she is proud of: she led a team ' +
      'of 40, is bilingual in Spanish and English, holds a Six Sigma Green Belt, and cut freight costs 12 percent. She is weighing a supply-chain analytics ' +
      'certificate against consulting. Her husband, Rubén, a high school band director, is supportive. Her main goal is “to feel like myself again and be ' +
      'working by spring.”',
    session2:
      'Espe has applied for three positions and returned to Sunday dinner. Her employer coverage has ended; she has declined COBRA and will pay out of pocket. ' +
      'She will spend three weeks in another state next month caring for her mother after hip surgery and wants to keep video sessions while there. She tells ' +
      'Marcus, a little hesitantly, that last week she “felt pushed to talk about job applications before I was ready.” When she describes her first ' +
      'interview, she says the panel “looked at me like I was a dinosaur,” and asks Marcus to help her figure out what she actually wants next.',
  },
  diagnosticRationale:
    'Depressed mood, tearfulness, hypersomnia, reduced appetite, and social withdrawal began within weeks of an identifiable stressor—an involuntary layoff—' +
    'and cause marked distress and avoidance. She has fewer than five depressive symptoms, keeps interest in gardening and family events, and has no prior ' +
    'mood history or two-year course, so major depressive and persistent depressive disorders are not met. Her distress is centered on low mood, not worry, ' +
    'so Adjustment Disorder, with Depressed Mood fits.',
  references: [
    { id: 'R1', source: 'DSM-5-TR', detail: 'Adjustment disorders: onset within 3 months of a stressor, distress or impairment, not meeting another disorder; F43.21 specifier' },
    { id: 'R2', source: 'Hays (Assessment)', detail: 'Interpreting screening results with clients; competence and qualifications for administering career and interest inventories' },
    { id: 'R3', source: 'ACA Code of Ethics', detail: 'Boundaries and extending relationships, informed consent for technology-assisted services, confidentiality and releases, competence, client feedback' },
    { id: 'R4', source: 'Corey (Theory & Practice)', detail: 'Strengths-based and solution-focused approaches; reflection of meaning; integrating career concerns into counseling' },
    { id: 'R5', source: 'Counseling Compact', detail: 'Privilege to practice: licensure follows the client’s location at the time of service' },
    { id: 'R6', source: 'State law', detail: 'State telehealth practice rules; separately, the federal No Surprises Act good faith estimate requirement for uninsured or self-pay clients' },
    { id: 'R7', source: 'Wiger (Documentation)', detail: 'Treatment plans with measurable objectives; releases specifying scope of shared information' },
  ],
  questions: [
    // ---------------- intake (5) ----------------
    Q('q1', 'assess', 'intake', 'Espe’s intake is by video from her home. What must the counselor’s informed consent for telemental health include?', ['R3', 'R6'], [
      O('a', 'A signed general consent form, since the same consent covers in-person and video sessions once she has agreed to treatment.', -1,
        { r: 'Video-specific elements are missing', approach: 'Generic consent framing', why: 'Telemental health consent must add elements such as platform risks, location, and emergency planning that general consent omits', keys: ['intake by video'], mistake: 'Assuming general consent covers technology-specific risks' }),
      O('b', 'An agreement that she will join only from her home, so the counselor will not need to verify her location at later sessions.', 0,
        { r: 'Location still needs checking', approach: 'Fixed-location framing', why: 'Clients travel; location is confirmed at each session because it governs licensure and emergency response', keys: ['joins from her kitchen'], mistake: 'Treating location as fixed after intake' }),
      O('c', 'Platform privacy and risks, her location each session, an emergency contact, and local crisis resources near where she is.', 3,
        { r: 'Core telehealth consent elements', approach: 'Telehealth-specific consent', why: 'Telemental health consent covers technology risks and privacy, confirming the client’s location, an emergency contact, and local emergency resources', keys: ['video intake', 'home setting'], mistake: 'Omitting location and emergency planning from telehealth consent' }),
      O('d', 'Permission to record each video session, since recordings protect both of them if a question comes up later about care.', -2,
        { r: 'Recording is not a consent element', approach: 'Record-everything framing', why: 'Routine recording is not required and adds privacy risk; it does not cover the essential elements of telehealth consent', keys: ['privacy risk'], mistake: 'Confusing recording for protection with informed consent' }),
    ]),
    Q('q2', 'assess', 'intake', 'What best distinguishes Espe’s presentation from a major depressive episode?', ['R1'], [
      O('a', 'She has fewer than five depressive symptoms and still enjoys her garden and family, so full criteria are not met.', 3,
        { r: 'Subthreshold, interest preserved', approach: 'Apply the threshold', why: 'A major depressive episode requires five or more symptoms including depressed mood or anhedonia; her symptoms fall short and interest is intact', keys: ['enjoys garden and soccer games', 'concentration intact'], mistake: 'Labeling stressor-linked sadness as major depression without counting criteria' }),
      O('b', 'Her sadness started after a layoff, and a depressive episode cannot be diagnosed when an obvious cause can be found.', -2,
        { r: 'A stressor does not exclude MDD', approach: 'Trigger-excludes framing', why: 'Major depression is diagnosed whenever criteria are met, whether or not a stressor is present', keys: ['criteria-based differential'], mistake: 'Believing an identifiable trigger rules out depression' }),
      O('c', 'Her PHQ-9 score of 11 is under the cutoff for depression, which rules out a major depressive episode by itself.', -1,
        { r: 'A screen does not diagnose', approach: 'Score-as-diagnosis framing', why: 'A PHQ-9 score indicates severity range, not diagnosis; criteria are confirmed by clinical interview', keys: ['PHQ-9 = 11'], mistake: 'Using a screening cutoff as a diagnostic rule' }),
      O('d', 'Her sleep is increased rather than decreased, and only insomnia counts toward the sleep criterion for depression.', 0,
        { r: 'Hypersomnia also counts', approach: 'Single-symptom framing', why: 'Hypersomnia counts toward the sleep criterion; the discriminator is the overall count and preserved interest', keys: ['sleeps nine to ten hours'], mistake: 'Misreading one criterion instead of counting all of them' }),
    ]),
    Q('q3', 'assess', 'intake', 'How should the counselor discuss Espe’s PHQ-9 result of 11 with her?', ['R2'], [
      O('a', 'Tell her the score shows major depression so she understands how serious this is and takes the treatment plan seriously.', -2,
        { r: 'Misstates what a screen shows', approach: 'Alarm framing', why: 'A screen does not diagnose; telling her she has major depression is inaccurate and could frighten or mislabel her', keys: ['screen, not diagnosis'], mistake: 'Reporting a screening score as a diagnosis' }),
      O('b', 'Keep the score to herself and file it in the chart, since numbers can make clients worry more than they help them.', -1,
        { r: 'Withholds results', approach: 'Withhold framing', why: 'Clients are entitled to understand their assessment results; withholding them undermines collaboration', keys: ['client-centered feedback'], mistake: 'Not sharing assessment results with the client' }),
      O('c', 'Say only that the score is fine, since item 9 is zero, and move on to her plans for the job search instead of the result.', 0,
        { r: 'Incomplete feedback', approach: 'Minimize framing', why: 'The safety item is reassuring, but she should understand what the total score reflects', keys: ['PHQ-9 = 11', 'item 9 = 0'], mistake: 'Collapsing results into the safety item alone' }),
      O('d', 'Explain that it is in the moderate range, that it is a screen and not a diagnosis, and relate it to what she described.', 3,
        { r: 'Plain, accurate feedback', approach: 'Discuss results collaboratively', why: 'Counselors explain what a score means, its limits, and how it connects to the client’s experience, in language she can use', keys: ['PHQ-9 = 11', 'sad and tearful since layoff'], mistake: 'Either overstating or withholding assessment results' }),
    ]),
    Q('q4', 'profdev', 'intake', 'Espe asks for “one of those career tests,” but Marcus has no training in interest inventories. He should:', ['R2', 'R3'], [
      O('a', 'Download a free interest quiz from the internet and go over her results together, since it is only a starting point.', -2,
        { r: 'Unvalidated tool, no competence', approach: 'Use-what-is-free framing', why: 'Using an unvalidated tool he cannot interpret risks misleading her; competence and instrument quality both matter', keys: ['no inventory training'], mistake: 'Using an unvalidated instrument outside one’s competence' }),
      O('b', 'Arrange for a qualified career specialist to give the inventory, or get trained first, while he keeps counseling her.', 3,
        { r: 'Practice within assessment competence', approach: 'Refer or train for the instrument', why: 'Counselors use only assessments they are trained to administer and interpret, and refer or seek training otherwise', keys: ['no training in interest inventories', 'outplacement coach available'], mistake: 'Administering an instrument without the required training' }),
      O('c', 'Give a standard interest inventory himself, since a counseling degree covers basic testing and the scoring is automated.', -1,
        { r: 'Automated scoring is not competence', approach: 'Degree-covers-it framing', why: 'Automated scoring does not supply the training to interpret results responsibly', keys: ['no inventory training'], mistake: 'Equating automated scoring with interpretive competence' }),
      O('d', 'Tell her that tests are not part of counseling, and keep the sessions focused on how she feels about losing the job.', 0,
        { r: 'Narrows care unnecessarily', approach: 'Decline-the-request framing', why: 'Career concerns are part of her presenting problem; career assessment can be arranged even if he does not give it', keys: ['wants career direction'], mistake: 'Separating career concerns from counseling' }),
    ]),
    Q('q5', 'profdev', 'intake', 'Espe asks Marcus to endorse her leadership skills on LinkedIn. What is the most appropriate response?', ['R3'], [
      O('a', 'Endorse her skills, since it costs nothing and could help her land a job sooner, which is a main goal of counseling.', -2,
        { r: 'Public endorsement blurs roles', approach: 'Helpful-gesture framing', why: 'A public endorsement signals a professional relationship outside counseling and can reveal that she is a client', keys: ['public profile', 'counseling relationship'], mistake: 'Treating a public endorsement as a harmless favor' }),
      O('b', 'Connect with her on LinkedIn but leave her skills unendorsed, so he shows his support without a formal recommendation.', -1,
        { r: 'Connection still crosses a line', approach: 'Partial-boundary framing', why: 'A social media connection still creates a visible relationship and privacy risk outside counseling', keys: ['social media'], mistake: 'Assuming a connection is safer than an endorsement' }),
      O('c', 'Warmly decline, explain why he keeps counseling off social media, and explore what the request means to her.', 3,
        { r: 'Hold the boundary with warmth', approach: 'Maintain boundaries therapeutically', why: 'Declining while explaining the reason protects her privacy and the relationship, and her request opens meaningful clinical material', keys: ['“you’ll know me better than anyone”', 'loss of professional identity'], mistake: 'Either granting the request or refusing without explanation' }),
      O('d', 'Laugh it off without answering and move on, since she seemed to be joking and raising it might embarrass her today.', 0,
        { r: 'Avoids a clear answer', approach: 'Sidestep framing', why: 'Ignoring the request avoids awkwardness but leaves the boundary unclear and misses its meaning', keys: ['half-joking request'], mistake: 'Avoiding a boundary conversation' }),
    ]),

    // ---------------- session1 (3) ----------------
    Q('q6', 'indirect', 'session1', 'Espe’s outplacement coach asks how Espe is “doing emotionally.” With a signed release, Marcus should:', ['R3', 'R7'], [
      O('a', 'Share what Espe agreed to, such as pacing needs and goals, and coordinate on a job-search pace that fits her progress.', 3,
        { r: 'Collaborate within the release', approach: 'Coordinate with a non-clinical stakeholder', why: 'With consent, sharing the minimum needed to align goals with a non-clinical partner supports her plan without overdisclosure', keys: ['signed release', 'coach wants to pace search'], mistake: 'Either overdisclosing or refusing reasonable coordination' }),
      O('b', 'Send the coach his full intake note and diagnosis, so she has the complete picture of Espe’s mental health history.', -2,
        { r: 'Exceeds minimum necessary', approach: 'Full-disclosure framing', why: 'A release does not justify sharing more than is needed; a coach does not need diagnostic details or full notes', keys: ['non-clinical stakeholder'], mistake: 'Sharing the entire record when limited information is enough' }),
      O('c', 'Decline to speak with the coach at all, since career coaching and counseling should stay fully separate for her privacy.', -1,
        { r: 'Forgoes useful collaboration', approach: 'Silo framing', why: 'She authorized coordination, and aligning job-search pace with her mood serves her goals', keys: ['signed release'], mistake: 'Refusing collaboration the client requested' }),
      O('d', 'Ask Espe to tell the coach herself how she is doing, so Marcus does not need to share anything directly at this point.', 0,
        { r: 'Workable but less coordinated', approach: 'Client-relay framing', why: 'Self-advocacy has value, but she asked for coordination and the coach is asking for direct input', keys: ['release signed for coordination'], mistake: 'Avoiding coordination the client authorized' }),
    ]),
    Q('q7', 'planning', 'session1', 'Which objective best turns Espe’s goal to “feel like myself again and be working by spring” into a SMART objective?', ['R7'], [
      O('a', 'Espe will feel better about herself and stay positive about her job search over the course of the coming months.', -1,
        { r: 'Not measurable or timed', approach: 'Global-goal framing', why: 'Feeling better and staying positive cannot be measured or tracked', keys: ['SMART objective'], mistake: 'Writing a vague goal instead of a measurable objective' }),
      O('b', 'Espe will get a manager job at a company as large as her old one by spring so she returns to her former status.', -2,
        { r: 'Outside her control and rigid', approach: 'Outcome-only framing', why: 'Hiring is outside her control and setting status as the target ignores her own direction; failure would deepen her low mood', keys: ['weighing new paths'], mistake: 'Setting an objective she cannot control' }),
      O('c', 'Espe will stop feeling sad about the layoff and will no longer cry when she passes her old warehouse by next month.', 0,
        { r: 'Unrealistic symptom target', approach: 'Eliminate-symptoms framing', why: 'Some grief over a 21-year job is expected; eliminating it in a month is not realistic', keys: ['cries near warehouse'], mistake: 'Targeting the absence of normal sadness' }),
      O('d', 'Espe will send two tailored applications a week and attend Sunday dinner three times a month for eight weeks.', 3,
        { r: 'Specific, measurable, timed', approach: 'Write SMART objectives', why: 'Concrete actions within her control, with frequency and a time frame, can be tracked and reviewed', keys: ['applied for no jobs', 'skipping Sunday dinners'], mistake: 'Writing goals that cannot be measured' }),
    ]),
    Q('q8', 'planning', 'session1', 'How should Espe’s strengths be built into the treatment plan?', ['R4'], [
      O('a', 'Note her strengths in the chart, but center the plan on her low mood and avoidance, since those are the problems to treat.', 0,
        { r: 'Strengths recorded but unused', approach: 'Deficit-focused framing', why: 'Listing strengths without using them misses a key lever in a strengths-based plan', keys: ['led a team of 40'], mistake: 'Documenting strengths without integrating them' }),
      O('b', 'Use her leadership, bilingual skill, and record of results as tools in goals and job search, and name her barriers too.', 3,
        { r: 'Integrate strengths and barriers', approach: 'Strengths-based planning', why: 'Plans that draw on client strengths and name barriers (avoidance of LinkedIn, loss of identity) improve engagement and outcomes', keys: ['bilingual', 'Six Sigma Green Belt', 'avoids LinkedIn'], mistake: 'Planning only around deficits' }),
      O('c', 'Remind her of her strengths whenever she feels low, so praise from the counselor can lift her mood in each session.', -1,
        { r: 'Praise is not a plan', approach: 'Cheerleading framing', why: 'Counselor praise offers short relief but does not help her use her strengths toward goals', keys: ['strengths list'], mistake: 'Confusing reassurance with strengths-based work' }),
      O('d', 'Hold off on strengths until her mood lifts, since focusing on them now could seem to dismiss how much the layoff hurt.', -2,
        { r: 'Delays a core resource', approach: 'Wait-until-better framing', why: 'Strengths and grief can be addressed together; waiting removes a key resource when she needs it most', keys: ['wants to work by spring'], mistake: 'Treating strengths and grief as mutually exclusive' }),
    ]),

    // ---------------- session2 (5) ----------------
    Q('q9', 'legal', 'session2', 'Espe will spend three weeks in another state and wants to keep video sessions. Before continuing, Marcus should:', ['R5', 'R6'], [
      O('a', 'Continue as usual, since his license applies to his own state and he will be in his own office for every video session.', -2,
        { r: 'Licensure follows the client', approach: 'Counselor-location framing', why: 'Jurisdiction is generally based on the client’s location; practicing without authority there can violate that state’s law', keys: ['client in another state'], mistake: 'Assuming the counselor’s location controls licensure' }),
      O('b', 'Pause all sessions for three weeks without a plan, since he cannot treat anyone who is outside his own state.', -1,
        { r: 'Unplanned gap', approach: 'Stop-all framing', why: 'Options may exist, such as a Compact privilege or temporary practice rules; stopping without a plan leaves her without care', keys: ['options to verify'], mistake: 'Stopping care without exploring lawful options' }),
      O('c', 'Confirm he is authorized there, such as by a Compact privilege or that state’s rules, and plan for any gap if not.', 3,
        { r: 'Verify authority to practice', approach: 'Practice within license portability', why: 'Counselors verify authorization in the client’s state, such as a Counseling Compact privilege, and arrange alternatives if they lack it', keys: ['three weeks in another state', 'video sessions'], mistake: 'Failing to check jurisdiction before crossing state lines' }),
      O('d', 'Have her sign a waiver saying she chose to continue sessions while traveling, which shifts the licensure duty to her.', 0,
        { r: 'A waiver cannot grant authority', approach: 'Waiver framing', why: 'Licensure is a legal requirement; a client cannot waive it, though documenting her choice is part of the process', keys: ['licensure law'], mistake: 'Believing client consent can replace legal authority' }),
    ]),
    Q('q10', 'interventions', 'session2', 'Espe repeats, “Twenty-one years and I was just a line on a spreadsheet.” Which response is most therapeutic?', ['R4'], [
      O('a', '“After all you gave, being treated as a number hurt your sense of what those years meant, and of who you are.”', 3,
        { r: 'Reflects meaning', approach: 'Reflection of meaning', why: 'Reflecting the loss of meaning and identity behind the statement deepens exploration and conveys understanding', keys: ['“just a line on a spreadsheet”', '21 years'], mistake: 'Responding to content while missing meaning' }),
      O('b', '“Companies make cuts all the time, so it really was not personal, and many people end up happier somewhere else.”', -1,
        { r: 'Premature reassurance', approach: 'Normalize framing', why: 'Rationalizing the layoff dismisses her hurt and closes the topic', keys: ['distress about being disposable'], mistake: 'Explaining away the client’s feelings' }),
      O('c', '“What specific steps could you take this week to show employers that you are much more than a line in a spreadsheet?”', 0,
        { r: 'Moves to action too fast', approach: 'Solution-first framing', why: 'Action matters later, but jumping to steps skips the meaning she just expressed—and she said she felt pushed', keys: ['felt pushed last week'], mistake: 'Shifting to tasks before reflecting feelings' }),
      O('d', '“You sound angry at the company; maybe you should think about talking with a lawyer about whether the layoff was fair.”', -2,
        { r: 'Leading and out of scope', approach: 'Advocacy-by-suggestion framing', why: 'Introducing a legal grievance she did not raise redirects her and edges toward advice outside the counselor role', keys: ['no legal concern raised'], mistake: 'Steering the client toward an agenda she did not bring' }),
    ]),
    Q('q11', 'interventions', 'session2', 'Espe asks Marcus to help her figure out what she actually wants next. Which intervention fits best?', ['R4'], [
      O('a', 'Advise her to take the analytics certificate, since data skills are in demand and it would answer the “dinosaur” remark.', -1,
        { r: 'Directs her choice', approach: 'Advice framing', why: 'Choosing for her undercuts her agency; the task is to help her clarify values and options', keys: ['weighing two paths'], mistake: 'Making the career decision for the client' }),
      O('b', 'Focus only on her feelings about the interview, since career decisions belong with the coach and not in counseling.', 0,
        { r: 'Splits career from counseling', approach: 'Feelings-only framing', why: 'Career and emotional concerns are intertwined for her; integrating them is part of counseling', keys: ['asks what she wants next'], mistake: 'Treating career exploration as outside counseling' }),
      O('c', 'Encourage her to take the first offer that comes, since being back at work will lift her mood faster than more reflection would.', -2,
        { r: 'Rushes a major decision', approach: 'Any-job framing', why: 'A rushed choice that ignores her values risks another poor fit; she already felt pushed', keys: ['felt pushed', 'wants direction'], mistake: 'Pushing employment over fit' }),
      O('d', 'Explore her values and transferable skills, link them to both paths, and draw on inventory results from a qualified provider.', 3,
        { r: 'Integrate career exploration', approach: 'Values and skills exploration', why: 'Integrating career exploration with counseling helps her link values, strengths, and options, using assessment results from the qualified provider', keys: ['led a team of 40', 'certificate or consulting'], mistake: 'Separating career exploration from the counseling relationship' }),
    ]),
    Q('q12', 'legal', 'session2', 'Espe’s insurance has ended and she will pay out of pocket. What must the counselor do about fees?', ['R6', 'R3'], [
      O('a', 'Bill her the same as before and settle the amount later, since self-pay rates can be worked out once she finds a job.', -1,
        { r: 'No clear fee information', approach: 'Settle-later framing', why: 'Self-pay clients should receive clear fee information and, under federal rules, a good faith estimate before services', keys: ['now self-pay'], mistake: 'Leaving fees undefined for a self-pay client' }),
      O('b', 'Give her a written good faith estimate of expected charges and discuss fees and a sliding scale before her next visit.', 3,
        { r: 'Good faith estimate and clear fees', approach: 'Comply with fee transparency', why: 'Uninsured or self-pay clients are entitled to a good faith estimate of expected charges; fees are discussed openly and documented', keys: ['declined COBRA', 'will pay out of pocket'], mistake: 'Skipping the required estimate for self-pay clients' }),
      O('c', 'Keep billing her old plan until the claims come back denied, since the plan might still cover a few more sessions.', -2,
        { r: 'Billing a lapsed plan', approach: 'Bill-anyway framing', why: 'Submitting claims to a plan known to have ended misrepresents coverage', keys: ['coverage ended'], mistake: 'Billing an insurer after known termination' }),
      O('d', 'Tell her the self-pay rate out loud during the session and make a note in the chart that the two of them had discussed it.', 0,
        { r: 'Discussed but not in writing', approach: 'Verbal-only framing', why: 'Discussing fees is right, but self-pay clients need a written good faith estimate', keys: ['self-pay'], mistake: 'Relying on a verbal fee discussion alone' }),
    ]),
    Q('q13', 'interventions', 'session2', 'Espe says she “felt pushed” to talk about job applications last week. What should the counselor do?', ['R3', 'R4'], [
      O('a', 'Explain that applying is the goal she set, so moving forward on applications is the best way to help her right now.', -1,
        { r: 'Defends instead of listening', approach: 'Justify framing', why: 'Defending the approach dismisses her feedback and risks a rupture', keys: ['hesitant feedback'], mistake: 'Responding to feedback with justification' }),
      O('b', 'Apologize at length and promise not to bring up jobs again unless she is the one who raises the subject first herself.', 0,
        { r: 'Overcorrects', approach: 'Over-accommodate framing', why: 'Taking her feedback seriously is right, but abandoning a shared goal swings too far; the pace should be agreed together', keys: ['wants to be working by spring'], mistake: 'Overcorrecting instead of collaborating' }),
      O('c', 'Thank her for saying it, explore what felt like pushing, and agree together on the pace, checking in each session.', 3,
        { r: 'Invite and use feedback', approach: 'Solicit client feedback', why: 'Welcoming feedback, exploring it, and adjusting together strengthens the alliance; routine check-ins catch problems early', keys: ['“felt pushed”', 'hesitant to say it'], mistake: 'Not acting on client feedback about the process' }),
      O('d', 'Suggest she may be avoiding the job search because of her low mood and that the pushing she felt is part of her progress.', -2,
        { r: 'Pathologizes her feedback', approach: 'Interpret-away framing', why: 'Recasting feedback as a symptom invalidates her and can damage trust', keys: ['she has applied for three jobs'], mistake: 'Treating client feedback as resistance' }),
    ]),
  ],
};

// ============================================================================
// D932 — Reactive Attachment Disorder, hard, plan 2
// ============================================================================
const D932 = {
  id: 'ncmhce-D932',
  title: 'She stiffens when she is held: a 4-year-old in her fourth home since removal',
  category: 'Trauma',
  difficulty: 'hard',
  plan: 2,
  population: 'child',
  primaryDiagnosis: { name: 'Reactive Attachment Disorder', code: 'F94.1' },
  diagnosis: { name: 'Reactive Attachment Disorder', code: 'F94.1' },
  differentialOptions: [
    { id: 'do1', name: 'Autism Spectrum Disorder', isCorrect: false },
    { id: 'do2', name: 'Disinhibited Social Engagement Disorder', isCorrect: false },
    { id: 'do3', name: 'Attention-Deficit/Hyperactivity Disorder, Combined Presentation', isCorrect: false },
    { id: 'do4', name: 'Reactive Attachment Disorder', isCorrect: true },
  ],
  narrative: {
    intake:
      'Zuri Bennett, a 4-year-old Black girl, is referred to a community child and family clinic by her county child welfare caseworker, Ms. Alvarez. Zuri was ' +
      'removed from her mother, Keisha, at 2 years 9 months after neighbors found her alone in an apartment for more than a day; agency records describe long ' +
      'stretches left in a crib with little interaction. Since removal she has lived with a maternal aunt, in an emergency shelter home, and for the past eight ' +
      'months with foster mother Linh Tran, 58, a widowed Vietnamese American retired pharmacy technician who has fostered 11 children. The agency holds legal ' +
      'custody under a court order; the goal is reunification, and Keisha has weekly supervised visits. Linh brings Zuri to intake and signs the clinic’s ' +
      'consent form; the caseworker is not present. Linh reports that when Zuri falls and scrapes her knee she does not cry for or go to anyone, and when ' +
      'picked up she stiffens and turns her face away; she rarely smiles, and she freezes and whimpers when Linh brushes her hair. At preschool she grabs toys, ' +
      'cannot sit through circle time, and runs from the room at transitions; the director has suggested “ADHD testing and maybe medication.” With the ' +
      'counselor, Zuri brings a toy truck over to show him, feeds a doll pretend soup, makes eye contact, and speaks in two- and three-word phrases. There are ' +
      'no repetitive movements or unusually intense interests, and she does not approach or go off with strangers. The counselor, Brendan, an LPC trained in ' +
      'child-centered play therapy but not in caregiver-child attachment interventions, notices after intake that he feels angry at Keisha and keeps picturing ' +
      'how Zuri would do “in a stable home like mine.”',
    session1:
      'Ms. Alvarez signs the agency’s consent for treatment and releases allowing the counselor to speak with the preschool, the pediatrician, and the ' +
      'guardian ad litem. She asks for a written update for the six-month case review. Agency records show Zuri’s well-child visits lapsed while she was with ' +
      'her mother and that her speech delay has never been evaluated. Linh says that Zuri still pushes her away “all day,” but that she lets Linh sit beside ' +
      'her during bath time. The counselor begins drafting an initial treatment plan.',
    session2:
      'Two weeks ago the court approved unsupervised daytime visits at Keisha’s apartment, where her new boyfriend lives. In session, Linh mentions that after ' +
      'Monday’s visit she found four fingertip-shaped bruises on Zuri’s upper arm, and Zuri said, “Mr. Dre squeeze hard.” Linh adds, “I texted the caseworker ' +
      'a photo, so she probably already knows.” Later, Zuri bumps her head on the table and turns away when Linh reaches for her; Linh pulls back and says, ' +
      '“See? She doesn’t want me.” Afterward Linh quietly says, “I love her, but I’m not sure I can keep doing this,” and that she has not told the agency. The ' +
      'next day Keisha calls the clinic asking for “everything in my daughter’s file.” The counselor also receives a subpoena to testify at the permanency ' +
      'hearing, and the guardian ad litem asks whether he would recommend that reunification go forward.',
  },
  diagnosticRationale:
    'Zuri shows a consistent pattern of inhibited, emotionally withdrawn behavior toward adult caregivers—she rarely seeks or responds to comfort when ' +
    'distressed—along with at least two persistent social-emotional disturbances: limited positive affect and episodes of unexplained fearfulness during nonthreatening caregiving. ' +
    'She experienced extremes of insufficient care (social neglect and repeated changes of primary caregiver), the disturbance is evident before age 5, and ' +
    'her developmental age is well above 9 months. Autism spectrum disorder is not supported: she shares interest, engages in pretend play, makes eye ' +
    'contact, and shows no restricted or repetitive behaviors. She is not indiscriminately social, ruling out disinhibited social engagement disorder. Her ' +
    'preschool overactivity occurs mainly at transitions and is better understood in the context of neglect, hypervigilance, and age than as ADHD at this point.',
  references: [
    { id: 'R1', source: 'DSM-5-TR', detail: 'Reactive attachment disorder criteria A–G; differential from autism spectrum disorder, DSED, and ADHD; caution diagnosing ADHD in young trauma-exposed children' },
    { id: 'R2', source: 'State law', detail: 'Consent for treatment of children in state custody; mandated reporting of suspected child abuse; parental access to records under court orders; subpoenas' },
    { id: 'R3', source: 'ACA Code of Ethics', detail: 'Informed consent with minors and legal guardians, competence and new specialty areas, personal impairment and countertransference, multiple roles in court-involved cases' },
    { id: 'R4', source: 'Hays (Assessment)', detail: 'Multi-informant, multi-setting developmental assessment of young children; collateral records' },
    { id: 'R5', source: 'Corey (Theory & Practice)', detail: 'Caregiver-mediated, attachment-informed intervention; supporting the caregiving system' },
    { id: 'R6', source: 'Wiger (Documentation)', detail: 'Treatment planning and documentation shared with authorized parties; minimum necessary in reports' },
  ],
  questions: [
    // ---------------- intake (5) ----------------
    Q('q1', 'assess', 'intake', 'Linh signed the clinic’s consent form at intake. What should the counselor do about consent for Zuri’s treatment?', ['R2', 'R3'], [
      O('a', 'Proceed on Linh’s signature, since as the daily caregiver she has the authority to consent to routine counseling.', -2,
        { r: 'Foster parent may lack authority', approach: 'Caregiver-consents framing', why: 'When an agency holds custody under court order, a foster parent typically cannot consent to treatment; proceeding risks treating without valid consent', keys: ['agency holds legal custody', 'caseworker not present'], mistake: 'Assuming the person who brings the child holds legal authority' }),
      O('b', 'Confirm who holds legal authority under the order, get consent from the agency, and include Linh as the caregiver.', 3,
        { r: 'Verify authority, obtain proper consent', approach: 'Verify and obtain valid consent', why: 'Counselors determine who can legally consent for a child in custody—here the agency under court order—while involving the foster parent in care', keys: ['court order', 'agency custody', 'Linh signed'], mistake: 'Accepting a signature without verifying legal authority' }),
      O('c', 'Get consent from Keisha, since parents keep full rights to consent to their children’s treatment until rights are ended.', -1,
        { r: 'Misreads custody', approach: 'Biological-parent framing', why: 'Parental rights remain, but under the custody order the agency usually holds treatment consent; this varies by state and order', keys: ['agency legal custody'], mistake: 'Assuming residual parental rights include treatment consent' }),
      O('d', 'Hold off on all services until the court issues a specific order authorizing counseling for Zuri in this clinic.', 0,
        { r: 'Over-cautious delay', approach: 'Court-order-first framing', why: 'The agency with custody can usually consent; waiting for a new court order delays needed care', keys: ['agency can consent'], mistake: 'Delaying treatment for a step the law does not require' }),
    ]),
    Q('q2', 'profdev', 'intake', 'Brendan is trained in child-centered play therapy but not in caregiver-child attachment interventions. He should:', ['R3', 'R5'], [
      O('a', 'Use child-centered play therapy alone with Zuri, since it is a sound method for young children who have had trauma.', -1,
        { r: 'Mismatched modality', approach: 'Use-what-I-know framing', why: 'Attachment problems are treated through the caregiving relationship; individual play therapy alone omits the caregiver', keys: ['attachment disorder', 'foster mother available'], mistake: 'Choosing a modality by counselor familiarity rather than client need' }),
      O('b', 'Transfer her to an attachment specialist right away and close the case, since he cannot ethically continue without training.', 0,
        { r: 'Abrupt transfer for a child with many losses', approach: 'Refer-out framing', why: 'Referral may be right, but closing abruptly adds another lost adult; a planned transition or supervised training is preferable', keys: ['repeated caregiver changes'], mistake: 'Treating a training gap as requiring immediate termination' }),
      O('c', 'Begin a caregiver-child attachment model he has read about, since experience in play therapy carries over closely enough.', -2,
        { r: 'Practicing without training', approach: 'Self-taught framing', why: 'Structured dyadic models require specific training and supervision; improvising with a high-risk child can harm', keys: ['no dyadic training'], mistake: 'Practicing a specialized model without training' }),
      O('d', 'Get supervision or consultation and training in a caregiver-based model, or arrange a planned referral if he cannot.', 3,
        { r: 'Build competence or refer responsibly', approach: 'Assess need for specialized training', why: 'When a client needs an approach outside the counselor’s training, he obtains training and supervision or makes a planned referral', keys: ['trained only in play therapy', 'attachment disorder'], mistake: 'Either practicing beyond competence or dropping the child' }),
    ]),
    Q('q3', 'assess', 'intake', 'Which observations best distinguish Zuri’s presentation from autism spectrum disorder?', ['R1'], [
      O('a', 'She shares interest, plays pretend, and makes eye contact, and she shows no restricted or repetitive behaviors.', 3,
        { r: 'Social communication intact', approach: 'Apply the discriminator', why: 'RAD involves disturbed comfort-seeking with caregivers, while autism involves broad social communication deficits plus restricted, repetitive behaviors', keys: ['shows toy truck', 'feeds doll pretend soup', 'no repetitive movements'], mistake: 'Equating withdrawal from caregivers with autism' }),
      O('b', 'Her limited speech and her lack of comfort-seeking show autism, so a referral for an autism diagnosis is the priority.', -2,
        { r: 'Misreads neglect as autism', approach: 'Speech-equals-autism framing', why: 'Language delay and withdrawn behavior are common after neglect; misdiagnosing autism leads to the wrong treatment', keys: ['early neglect', 'shares interest'], mistake: 'Attributing neglect-related delays to autism' }),
      O('c', 'Her fearful reaction to having her hair brushed reflects sensory sensitivity, which points more to autism than to RAD.', -1,
        { r: 'Misreads fearfulness', approach: 'Sensory framing', why: 'Unexplained fearfulness during caregiving is a RAD feature; a single reaction does not indicate a sensory profile', keys: ['freezes with Linh brushing hair'], mistake: 'Interpreting trauma-related fear as sensory sensitivity' }),
      O('d', 'Autism and RAD cannot be told apart before about age 6, so both should be listed as provisional until she is older.', 0,
        { r: 'Unneeded deferral', approach: 'Wait-and-see framing', why: 'The two can be distinguished now through social communication and behavior patterns', keys: ['observable discriminators'], mistake: 'Assuming young age prevents differential diagnosis' }),
    ]),
    Q('q4', 'profdev', 'intake', 'After intake Brendan feels angry at Keisha and pictures Zuri “in a stable home like mine.” What should he do?', ['R3'], [
      O('a', 'Set the feelings aside, since they reflect real concern for Zuri’s safety and will help him advocate harder for her.', -1,
        { r: 'Unexamined countertransference', approach: 'Advocacy-justifies framing', why: 'Unexamined anger and rescue fantasies can bias his assessment, especially in a reunification case', keys: ['angry at Keisha', 'reunification goal'], mistake: 'Treating countertransference as useful without examining it' }),
      O('b', 'Talk with Linh about his concerns about Keisha, so the foster home can be ready if reunification falls through later.', -2,
        { r: 'Acts on bias and oversteps', approach: 'Act-on-it framing', why: 'Sharing his views with the foster parent acts on countertransference and undermines the court’s reunification goal', keys: ['reunification is the plan'], mistake: 'Acting out countertransference with collateral contacts' }),
      O('c', 'Reflect on what is stirring these reactions, take them to supervision, and watch for bias in his notes and reports.', 3,
        { r: 'Self-reflection and supervision', approach: 'Monitor countertransference', why: 'Rescue fantasies and anger toward a parent are common in child welfare work; supervision helps keep them from shaping clinical judgment', keys: ['“a stable home like mine”', 'anger at Keisha'], mistake: 'Ignoring countertransference in a court-involved case' }),
      O('d', 'Ask the agency to assign another counselor, since feeling this strongly means he can no longer remain objective here.', 0,
        { r: 'Premature withdrawal', approach: 'Withdraw framing', why: 'Strong feelings call for supervision first; withdrawal is considered only if they impair his work', keys: ['no impairment shown'], mistake: 'Equating a reaction with impairment' }),
    ]),
    Q('q5', 'assess', 'intake', 'The preschool director suggests “ADHD testing and maybe medication.” How should the counselor approach this?', ['R1', 'R4'], [
      O('a', 'Support the director’s request and suggest a medication evaluation, since early treatment may help Zuri keep her preschool spot.', -2,
        { r: 'Premature and risky', approach: 'Medication-first framing', why: 'Behaviors in a neglected 4-year-old may reflect trauma and development; pushing medication before assessment risks misdiagnosis', keys: ['early neglect', 'behaviors at transitions'], mistake: 'Accepting a school’s diagnosis and medication suggestion' }),
      O('b', 'Diagnose ADHD as a comorbid condition now, since the preschool behaviors already meet the count of required symptoms.', -1,
        { r: 'Symptom count without context', approach: 'Count-only framing', why: 'Symptoms must not be better explained by another condition, and trauma-related arousal can mimic hyperactivity', keys: ['runs from room at transitions'], mistake: 'Diagnosing ADHD without considering trauma' }),
      O('c', 'Send ADHD rating scales to the preschool and to Linh, and settle the question once the scores come back from both.', 0,
        { r: 'Scales alone are not enough', approach: 'Score-decides framing', why: 'Rating scales help but cannot separate ADHD from trauma-related behavior on their own', keys: ['trauma history'], mistake: 'Letting rating scales decide a complex differential' }),
      O('d', 'Gather history and observations across settings over time, weighing trauma and development before any ADHD diagnosis.', 3,
        { r: 'Context-sensitive assessment', approach: 'Multi-setting, trauma-informed assessment', why: 'In young trauma-exposed children, overactivity at transitions may reflect hypervigilance; multi-informant data over time is needed before diagnosing ADHD', keys: ['behaviors at transitions', 'four homes since removal'], mistake: 'Diagnosing ADHD without considering the trauma context' }),
    ]),

    // ---------------- session1 (3) ----------------
    Q('q6', 'indirect', 'session1', 'Ms. Alvarez asks for a written update for the six-month case review. The counselor should:', ['R6', 'R2'], [
      O('a', 'Send his complete session notes, including Linh’s private comments, so the agency has every detail for its review.', -2,
        { r: 'Overdisclosure', approach: 'Send-everything framing', why: 'Reports share the minimum necessary for the purpose; full notes include material beyond what the review needs', keys: ['case review'], mistake: 'Sending full notes instead of a focused report' }),
      O('b', 'Write a focused report on diagnosis, goals, attendance, and progress, within the agency’s consent and its purpose.', 3,
        { r: 'Collaborate within authorization', approach: 'Collaborate with the custodial agency', why: 'The custodian is entitled to relevant treatment information; a focused report supports the case plan without overdisclosure', keys: ['agency consent', 'six-month review'], mistake: 'Either overdisclosing or refusing a legitimate request' }),
      O('c', 'Decline to put anything in writing, since written reports from a child’s counselor can be used against the mother in court.', -1,
        { r: 'Refuses a legitimate request', approach: 'Avoid-court framing', why: 'The custodial agency has a legitimate need for treatment information; refusing undermines coordination', keys: ['agency holds custody'], mistake: 'Withholding information from the legal custodian' }),
      O('d', 'Give the update by phone only, so nothing written enters the case file that could be misread by the court later on.', 0,
        { r: 'Workable but less accountable', approach: 'Verbal-only framing', why: 'Verbal coordination is possible, but a written report requested for a formal review is reasonable when focused and accurate', keys: ['formal review'], mistake: 'Avoiding documentation out of fear of court use' }),
    ]),
    Q('q7', 'indirect', 'session1', 'Records show lapsed well-child visits and a speech delay that was never evaluated. The counselor should:', ['R4', 'R6'], [
      O('a', 'Work with the agency and pediatrician to restart well-child care and get her a speech and developmental evaluation.', 3,
        { r: 'Interdisciplinary coordination', approach: 'Coordinate care', why: 'Untreated medical and developmental needs affect behavior and treatment; the counselor coordinates with the custodian and providers', keys: ['lapsed well-child visits', 'unevaluated speech delay', 'releases signed'], mistake: 'Treating behavior without ensuring medical and developmental care' }),
      O('b', 'Note the speech delay in the chart and work on her words in play sessions, since a speech evaluation can wait a while.', -1,
        { r: 'Out of scope and delayed', approach: 'Counselor-handles-it framing', why: 'Speech therapy is outside counseling scope; delayed evaluation can miss services she qualifies for', keys: ['never evaluated'], mistake: 'Substituting counseling for a needed specialist evaluation' }),
      O('c', 'Leave the medical and speech follow-up to Linh, since health care for foster children is the foster parent’s job.', -2,
        { r: 'Drops the coordination role', approach: 'Not-my-job framing', why: 'Gaps have already occurred; leaving follow-up to one person without coordination risks continued neglect of her needs', keys: ['lapsed visits'], mistake: 'Assuming someone else will close a known care gap' }),
      O('d', 'Ask the preschool to watch her speech for a few more months, and refer for evaluation if it does not improve by then.', 0,
        { r: 'Watchful waiting', approach: 'Monitor framing', why: 'Monitoring has some value, but a known, never-evaluated delay at 4 warrants evaluation now', keys: ['two- and three-word phrases at 4'], mistake: 'Waiting on a delay that already warrants evaluation' }),
    ]),
    Q('q8', 'planning', 'session1', 'Which initial treatment plan best fits Zuri?', ['R5', 'R1'], [
      O('a', 'Individual play sessions with Zuri, keeping Linh in the waiting room so Zuri can form a bond with the counselor first.', -1,
        { r: 'Builds the wrong attachment', approach: 'Counselor-as-attachment framing', why: 'The target is her bond with her caregiver; excluding Linh misdirects the work', keys: ['foster mother present'], mistake: 'Making the counselor the attachment figure' }),
      O('b', 'Behavior charts and time-outs for grabbing and running at preschool, with rewards once she shows affection to Linh.', 0,
        { r: 'Targets surface behavior', approach: 'Behavioral framing', why: 'Behavior management can help at school, but rewarding affection misreads the attachment problem', keys: ['withdrawn with caregivers'], mistake: 'Treating an attachment disorder as a compliance problem' }),
      O('c', 'Caregiver-based attachment work with Linh and Zuri, building nurturing responses and support for placement stability.', 3,
        { r: 'Caregiver-mediated treatment', approach: 'Dyadic attachment intervention', why: 'RAD is treated through a consistent, nurturing caregiver; the plan centers Linh and supports placement stability', keys: ['lets Linh sit with her at bath time', 'many caregiver changes'], mistake: 'Treating the child alone, apart from the caregiver' }),
      O('d', 'Holding therapy in which Linh restrains Zuri until she stops resisting and accepts comfort, to force a bond to form.', -2,
        { r: 'Coercive and contraindicated', approach: 'Coercive-holding framing', why: 'Restraint-based “attachment therapies” are contraindicated and have caused serious harm and deaths', keys: ['stiffens when held'], mistake: 'Using coercive restraint as attachment treatment' }),
    ]),

    // ---------------- session2 (5) ----------------
    Q('q9', 'legal', 'session2', 'Linh describes fingertip-shaped bruises after a visit and says the caseworker “probably already knows.” The counselor should:', ['R2'], [
      O('a', 'Accept that the caseworker has the photo and note it in the chart, since the agency already has custody and can act.', -1,
        { r: 'Duty is the counselor’s own', approach: 'Someone-else-reported framing', why: 'Mandated reporting is an individual duty; a text to a caseworker is not a report to child protective intake', keys: ['“probably already knows”'], mistake: 'Relying on another person’s informal notice' }),
      O('b', 'Ask Zuri more questions in play to find out exactly what happened before deciding whether a report is warranted.', -2,
        { r: 'Investigating harms the case', approach: 'Investigate-first framing', why: 'Counselors report reasonable suspicion; leading a 4-year-old through questions can contaminate a forensic interview', keys: ['young child', 'disclosure made'], mistake: 'Investigating instead of reporting suspicion' }),
      O('c', 'Call the caseworker to confirm she got Linh’s photo and let the agency decide whether the bruises need follow-up.', 0,
        { r: 'Coordination is not a report', approach: 'Confirm-with-agency framing', why: 'Informing the caseworker helps, but it does not replace the counselor’s own report to the designated intake', keys: ['mandated reporter'], mistake: 'Treating a call to the caseworker as fulfilling the duty' }),
      O('d', 'Make his own report to child protective intake now, inform the caseworker, and document what he saw and was told.', 3,
        { r: 'Report directly', approach: 'Fulfill mandated reporting', why: 'Fingertip bruising with a disclosure is reasonable suspicion; he reports promptly himself, coordinates with the agency, and documents', keys: ['fingertip-shaped bruises', '“Mr. Dre squeeze hard”'], mistake: 'Assuming another adult’s notice discharges the counselor’s duty' }),
    ]),
    Q('q10', 'interventions', 'session2', 'Zuri bumps her head and turns away; Linh pulls back saying, “See? She doesn’t want me.” What should the counselor do?', ['R5'], [
      O('a', 'Comfort Zuri himself, showing Linh how calm, gentle responses can help a child who has real trouble accepting comfort.', -1,
        { r: 'Replaces the caregiver', approach: 'Model-by-doing framing', why: 'Stepping in makes the counselor the comforter and confirms Linh’s belief that Zuri does not want her', keys: ['“She doesn’t want me”'], mistake: 'Taking over the caregiver’s role in a dyadic session' }),
      O('b', 'Coach Linh to stay close and keep offering calm comfort, explaining that Zuri may need it most when she seems not to.', 3,
        { r: 'Coach nurturance through rejection', approach: 'In-the-moment caregiver coaching', why: 'Children with attachment disturbances push away needed comfort; coaching the caregiver to offer nurturance anyway is the core intervention', keys: ['turns away when hurt', 'Linh pulls back'], mistake: 'Accepting the child’s rejection as a signal to withdraw' }),
      O('c', 'Agree that Zuri needs space when upset, and tell Linh to wait until Zuri comes to her before she offers any comfort.', -2,
        { r: 'Reinforces withdrawal', approach: 'Wait-for-the-child framing', why: 'Waiting for a child with RAD to seek comfort reinforces the pattern of not seeking it', keys: ['does not seek comfort'], mistake: 'Matching the child’s avoidance' }),
      O('d', 'Validate Linh’s hurt and plan to discuss it in a parent-only session next week, letting the moment pass for now.', 0,
        { r: 'Misses a live coaching moment', approach: 'Defer framing', why: 'Her feelings matter, but the live moment is the best chance to practice a new response', keys: ['in-session event'], mistake: 'Deferring coaching that is best done live' }),
    ]),
    Q('q11', 'interventions', 'session2', 'Linh says, “I love her, but I’m not sure I can keep doing this,” and has not told the agency. The counselor should:', ['R5', 'R2'], [
      O('a', 'Tell the agency right away that the placement may end, so the caseworker can start looking for another home for her.', -2,
        { r: 'Premature and disruptive', approach: 'Escalate framing', why: 'Acting on a tentative statement without exploring it may hasten a disruption that support could prevent', keys: ['“I love her”'], mistake: 'Treating caregiver strain as a placement decision' }),
      O('b', 'Reassure Linh that every foster parent feels this way, and that it will pass once Zuri settles in over the next months.', -1,
        { r: 'Reassurance without support', approach: 'Normalize framing', why: 'Normalizing helps a little, but it ignores real exhaustion and the support she needs', keys: ['pushed away all day'], mistake: 'Reassuring instead of addressing caregiver strain' }),
      O('c', 'Validate her exhaustion, explore what would help, and with her consent bring in agency supports such as respite care.', 3,
        { r: 'Support the caregiver', approach: 'Support placement stability', why: 'Caregiver burnout threatens placement stability; validating and connecting her to respite and agency support protects Zuri’s attachment', keys: ['“not sure I can keep doing this”', 'has not told the agency'], mistake: 'Missing caregiver strain as a treatment target' }),
      O('d', 'Encourage her to take a break from sessions for a few weeks so she can rest, then return when she feels more able.', 0,
        { r: 'Removes support when needed', approach: 'Pause framing', why: 'Rest is reasonable, but pausing dyadic work now removes support at a vulnerable point', keys: ['exhaustion'], mistake: 'Pausing treatment instead of adding support' }),
    ]),
    Q('q12', 'legal', 'session2', 'Keisha calls the clinic asking for “everything in my daughter’s file.” What is the most appropriate response?', ['R2', 'R3'], [
      O('a', 'Explain that he must check her access rights under the order and state law with the agency before sharing anything.', 3,
        { r: 'Verify legal access first', approach: 'Follow release-of-information procedures', why: 'A parent’s right to a child’s records in custody depends on the court order and state law; the counselor verifies before disclosing', keys: ['agency holds custody', 'unsupervised visits approved'], mistake: 'Either disclosing or refusing without verifying rights' }),
      O('b', 'Send her the full file, since she is Zuri’s mother and parents have the right to their children’s treatment records.', -2,
        { r: 'Discloses without verifying', approach: 'Parent-rights framing', why: 'Access may be limited by the order; releasing the file could expose information, including the new abuse report', keys: ['pending report', 'court order'], mistake: 'Assuming biological parents have unrestricted access' }),
      O('c', 'Tell her she has no right to any information while Zuri is in custody, and end the call without taking her details.', -1,
        { r: 'Overstates the restriction', approach: 'Shut-out framing', why: 'Parents may retain some rights depending on the order; flatly refusing is inaccurate and damages a reunification relationship', keys: ['reunification goal'], mistake: 'Misstating a parent’s rights' }),
      O('d', 'Suggest she have her attorney request the records, and say nothing else about Zuri’s care until that request arrives.', 0,
        { r: 'Partly right but incomplete', approach: 'Redirect framing', why: 'Routing through counsel may help, but he still must verify her rights with the custodian', keys: ['court-involved case'], mistake: 'Redirecting without verifying access rights' }),
    ]),
    Q('q13', 'legal', 'session2', 'Brendan is subpoenaed to the permanency hearing, and the guardian ad litem asks if he would recommend reunification. He should:', ['R2', 'R3'], [
      O('a', 'Give the guardian ad litem his opinion that reunification should not proceed, since the bruises show the home is unsafe.', -2,
        { r: 'Forensic opinion from a treating role', approach: 'Recommend-outcome framing', why: 'A treating counselor offering a permanency recommendation takes on a forensic role he has not assessed for and compromises treatment', keys: ['treating counselor', 'report pending'], mistake: 'Making custody recommendations from a treatment role' }),
      O('b', 'Get legal advice on the subpoena, limit testimony to facts from his treating role, and decline to recommend outcomes.', 3,
        { r: 'Stay within the treating role', approach: 'Meet court obligations within role', why: 'Treating counselors respond to subpoenas with legal guidance and limit testimony to treatment facts, avoiding forensic recommendations', keys: ['subpoena', 'GAL asks for recommendation'], mistake: 'Blurring treating and forensic roles' }),
      O('c', 'Ignore the subpoena, since a counselor’s records and testimony are privileged and cannot be required by any court.', -1,
        { r: 'Ignoring a subpoena is risky', approach: 'Privilege-is-absolute framing', why: 'A subpoena requires a response; privilege must be asserted properly, not by ignoring it', keys: ['subpoena received'], mistake: 'Treating privilege as permission to ignore legal process' }),
      O('d', 'Tell the guardian ad litem he supports reunification, since the court set it as the goal and he should back the plan.', 0,
        { r: 'Still a recommendation', approach: 'Defer-to-plan framing', why: 'Endorsing the case goal is still a forensic recommendation outside his role', keys: ['treating role'], mistake: 'Offering an outcome opinion because it matches the plan' }),
    ]),
  ],
};

// ============================================================================
// D933 — Prolonged Grief Disorder, medium, plan 3
// ============================================================================
const D933 = {
  id: 'ncmhce-D933',
  title: 'A closed bedroom door and an unanswered prayer: a mother 18 months after her daughter’s death',
  category: 'Trauma',
  difficulty: 'medium',
  plan: 3,
  population: 'adult',
  primaryDiagnosis: { name: 'Prolonged Grief Disorder', code: 'F43.81' },
  diagnosis: { name: 'Prolonged Grief Disorder', code: 'F43.81' },
  differentialOptions: [
    { id: 'do1', name: 'Major Depressive Disorder, Single Episode, Moderate', isCorrect: false },
    { id: 'do2', name: 'Posttraumatic Stress Disorder', isCorrect: false },
    { id: 'do3', name: 'Prolonged Grief Disorder', isCorrect: true },
    { id: 'do4', name: 'Adjustment Disorder, with Depressed Mood', isCorrect: false },
  ],
  narrative: {
    intake:
      'Ngozi Okonkwo, a 41-year-old Igbo Nigerian American labor-and-delivery nurse, is referred by her primary care physician to an outpatient counseling ' +
      'practice. Eighteen months ago her daughter, Adaeze (“Ada”), died at age 7 of acute chest syndrome during a sickle cell crisis. Ngozi has been on unpaid ' +
      'leave for four months. Nearly every day she feels an intense longing for Ada, replays Ada’s last night in the hospital, says “part of me died with her,” ' +
      'and still finds it hard to believe Ada is gone. She keeps Ada’s bedroom door closed and avoids the children’s wing at work. She has stopped singing in ' +
      'her church choir and says life “feels like it has no point without her.” She still enjoys her 12-year-old son Chidera’s football games and cooking with ' +
      'him, does not see herself as worthless, and her sleep and appetite are close to normal except around Ada’s birthday. Her physician started sertraline ' +
      'two months ago. A devout Catholic, she has not attended Mass since the funeral and asks, “How can I pray to the God who took my baby?” Her husband, Chidi, ' +
      '44, an engineer, went back to work two weeks after the death; they argue over Ada’s things. Near the end of intake Ngozi says quietly, “Sometimes I just ' +
      'want to be with Ada.” Her counselor, Hannah, an LPC with a 7-year-old daughter, notices she has been changing the subject whenever Ngozi starts to ' +
      'describe the hospital night, and that afterward she held her own daughter longer than usual. Hannah has not studied grief-specific treatments and had ' +
      'planned to offer general supportive counseling.',
    session1:
      'A full risk assessment found that Ngozi’s wish “to be with Ada” is a longing for reunion without intent or plan; she names Chidera and her faith as ' +
      'reasons for living, there are no firearms in the home, and she completed a safety plan. She tells Hannah, “I want to be able to pray again,” and asks ' +
      'whether Hannah could speak with her parish priest, Father Emeka, who has reached out to her. She reports that sertraline “takes the edge off” but makes ' +
      'her nauseated, so she has been skipping doses several days a week; she has not told her physician. She says Chidi “grieves by staying busy” and wants ' +
      'to donate Ada’s clothes to the parish, while she cannot open the door. Chidi agrees to come to a session.',
    session2:
      'Ngozi consents to grief-focused work and to a joint session with Chidi. She still has not opened Ada’s door. In the joint session, Chidi says, “We have ' +
      'to move on. Keeping her room like a shrine isn’t healthy for any of us,” and Ngozi begins to cry. Later, alone, she repeats, “God took my baby. How ' +
      'can I pray to Him?” The next day Chidi calls Hannah and asks what Ngozi has said about him in her individual sessions. Ngozi also mentions that her ' +
      'insurer “probably doesn’t cover grief” and asks Hannah to bill her sessions as depression instead.',
  },
  diagnosticRationale:
    'More than 12 months after her daughter’s death, Ngozi has intense yearning and preoccupation with Ada nearly every day, along with identity disruption ' +
    '(“part of me died”), disbelief, avoidance of reminders, difficulty reintegrating into activities, and a sense that life is meaningless—well beyond ' +
    'three required symptoms and beyond cultural and religious norms for her community, with marked impairment. Major depressive disorder is not the best ' +
    'fit: her distress centers on longing for Ada rather than pervasive low mood, she keeps the capacity for enjoyment with her son, her self-worth is intact, ' +
    'and sleep and appetite are near normal. She does not describe a traumatic-exposure symptom pattern with fear-based reexperiencing, so PTSD is not the ' +
    'primary picture, and the 18-month course exceeds an adjustment disorder.',
  references: [
    { id: 'R1', source: 'DSM-5-TR', detail: 'Prolonged grief disorder: at least 12 months since the death for adults, yearning/preoccupation plus 3 of 8 symptoms; differential from MDD and PTSD' },
    { id: 'R2', source: 'C-SSRS', detail: 'Structured inquiry when a bereaved client expresses a wish to be with the deceased' },
    { id: 'R3', source: 'Corey (Theory & Practice)', detail: 'Integrating spirituality and culture; couples work; grief-focused and cognitive-behavioral interventions' },
    { id: 'R4', source: 'ACA Code of Ethics', detail: 'Countertransference and self-monitoring, competence, confidentiality in individual and couple work, releases, accurate diagnosis and billing' },
    { id: 'R5', source: 'APA CPG', detail: 'Evidence-based, grief-targeted treatment selection over nonspecific supportive counseling' },
    { id: 'R6', source: 'Wiger (Documentation)', detail: 'Documenting client-reported medication effects and nonadherence; diagnosis documentation supporting claims' },
    { id: 'R7', source: 'ICD-11', detail: 'Prolonged grief disorder (6B42) as a recognized disorder with cultural-norm qualifier' },
  ],
  questions: [
    // ---------------- intake (4) ----------------
    Q('q1', 'profdev', 'intake', 'Hannah notices she changes the subject when Ngozi describes the hospital night. What should she do?', ['R4'], [
      O('a', 'Keep steering away from the hospital night, since going over it again is likely to make Ngozi’s grief more intense.', -2,
        { r: 'Counselor avoidance blocks treatment', approach: 'Protect-the-client framing', why: 'Avoiding the death narrative reinforces the client’s avoidance, a core maintaining factor in prolonged grief', keys: ['changes the subject', 'replays the last night'], mistake: 'Rationalizing the counselor’s avoidance as protecting the client' }),
      O('b', 'Refer Ngozi to a counselor without young children, since being a mother of a 7-year-old makes this case too close for her.', 0,
        { r: 'Premature referral', approach: 'Refer-out framing', why: 'Personal resonance is not automatically impairment; supervision determines whether she can work effectively', keys: ['no impairment established'], mistake: 'Treating any personal resonance as disqualifying' }),
      O('c', 'Reflect on her reaction to the parallel with her own daughter and take it to supervision so it does not shape the work.', 3,
        { r: 'Self-reflection plus supervision', approach: 'Monitor countertransference', why: 'Recognizing a personal reaction and processing it in supervision prevents it from steering sessions away from needed material', keys: ['held her daughter longer', 'changes the subject'], mistake: 'Ignoring a reaction that is already affecting sessions' }),
      O('d', 'Tell Ngozi she has a daughter the same age, so Ngozi will understand why the hospital story is hard for her to hear.', -1,
        { r: 'Self-disclosure burdens the client', approach: 'Disclose framing', why: 'Sharing this shifts attention to the counselor and may lead Ngozi to protect her by holding back', keys: ['bereaved mother'], mistake: 'Using self-disclosure to manage the counselor’s own reaction' }),
    ]),
    Q('q2', 'assess', 'intake', 'What best distinguishes Ngozi’s presentation from major depressive disorder?', ['R1', 'R7'], [
      O('a', 'Her distress centers on longing for Ada, she enjoys time with her son, and her self-worth and sleep are intact.', 3,
        { r: 'Yearning-centered, enjoyment and self-worth intact', approach: 'Apply the discriminator', why: 'Prolonged grief centers on yearning and preoccupation with the deceased; pervasive anhedonia and worthlessness point to MDD', keys: ['enjoys Chidera’s games', 'does not feel worthless', 'longing for Ada daily'], mistake: 'Treating all post-loss sadness as depression' }),
      O('b', 'Her symptoms began after a death, and DSM-5-TR does not allow major depression to be diagnosed during bereavement.', -2,
        { r: 'Misstates the bereavement rule', approach: 'Bereavement-exclusion framing', why: 'DSM-5 removed the bereavement exclusion; MDD can be diagnosed after a loss when criteria are met', keys: ['criteria-based differential'], mistake: 'Applying the removed bereavement exclusion' }),
      O('c', 'She is taking sertraline, which shows her physician has already ruled out depression as the cause of her symptoms.', -1,
        { r: 'Medication does not decide diagnosis', approach: 'Medication-inference framing', why: 'A prescription does not establish or exclude a diagnosis; the counselor assesses criteria', keys: ['sertraline started'], mistake: 'Inferring diagnosis from medication' }),
      O('d', 'More than a year has passed since Ada died, and depression after a loss usually resolves well within that first year.', 0,
        { r: 'Duration is not the discriminator', approach: 'Timeline framing', why: 'The 12-month mark is a PGD criterion, but it does not by itself separate PGD from MDD', keys: ['18 months since death'], mistake: 'Using time since death to rule out depression' }),
    ]),
    Q('q3', 'profdev', 'intake', 'Hannah had planned general supportive counseling and has not studied grief-specific treatments. She should:', ['R5', 'R4'], [
      O('a', 'Go ahead with supportive counseling, since warmth and a strong alliance matter more than which model a counselor uses.', -1,
        { r: 'Nonspecific care underserves PGD', approach: 'Common-factors framing', why: 'The alliance matters, but grief-targeted treatments outperform nonspecific support for prolonged grief', keys: ['18 months of impairment'], mistake: 'Assuming nonspecific support is enough for a disorder with targeted treatments' }),
      O('b', 'Learn the empirically supported, grief-targeted treatments and get consultation or training in delivering them.', 3,
        { r: 'Develop knowledge of supported treatments', approach: 'Build evidence-based knowledge', why: 'Counselors develop knowledge of empirically supported interventions for the conditions they treat and seek consultation while learning', keys: ['planned general support', 'prolonged grief diagnosis'], mistake: 'Relying on familiar methods when targeted ones exist' }),
      O('c', 'Ask Ngozi’s physician to raise the sertraline dose, since medication is the main evidence-based treatment for grief disorders.', -2,
        { r: 'Misstates evidence and scope', approach: 'Medication-first framing', why: 'Grief-targeted psychotherapy is the primary treatment; directing dosing is outside counselor scope', keys: ['already on sertraline'], mistake: 'Treating medication as the main grief treatment' }),
      O('d', 'Refer her to a bereaved parents’ support group in place of counseling, since peers who have lost children help most.', 0,
        { r: 'Adjunct, not replacement', approach: 'Peer-support framing', why: 'Support groups can help, but they do not replace treatment for a diagnosed disorder', keys: ['marked impairment'], mistake: 'Substituting peer support for treatment' }),
    ]),
    Q('q4', 'assess', 'intake', 'Ngozi says quietly, “Sometimes I just want to be with Ada.” What should the counselor do?', ['R2'], [
      O('a', 'Treat it as an expected part of grieving and leave it unexplored, so the first session does not upset her any further.', -2,
        { r: 'Misses a possible risk statement', approach: 'Normalize framing', why: 'Prolonged grief carries elevated suicide risk; a wish to be with the deceased must be explored directly', keys: ['“want to be with Ada”', 'life has no point'], mistake: 'Assuming a reunion wish is always benign' }),
      O('b', 'Ask Chidi whether he has noticed signs that she might hurt herself, rather than asking Ngozi about it directly.', -1,
        { r: 'Collateral does not replace direct inquiry', approach: 'Ask-someone-else framing', why: 'Collateral input can help, but direct, structured inquiry with the client is essential', keys: ['client present'], mistake: 'Substituting collateral reports for direct assessment' }),
      O('c', 'Arrange an emergency evaluation today, since any wish to be with a deceased child signals high and immediate risk.', 0,
        { r: 'Escalates before assessing', approach: 'Escalate-first framing', why: 'She needs assessment first; escalating without it is premature, though it errs toward safety', keys: ['no assessment yet'], mistake: 'Choosing a level of care before assessing risk' }),
      O('d', 'Ask directly whether this includes thoughts of suicide, using a structured tool to assess intent, plan, and means.', 3,
        { r: 'Clarify with structured inquiry', approach: 'Assess risk directly', why: 'A reunion wish may be a longing or suicidal ideation; structured inquiry clarifies intent, plan, and access to means', keys: ['“want to be with Ada”', 'feels life has no point'], mistake: 'Not clarifying an ambiguous risk statement' }),
    ]),

    // ---------------- session1 (4) ----------------
    Q('q5', 'planning', 'session1', 'Ngozi says, “I want to be able to pray again.” How should this shape her treatment plan?', ['R3'], [
      O('a', 'Leave faith out of the plan, since religious questions belong with her priest and counseling should stay secular.', -1,
        { r: 'Omits a client-identified goal', approach: 'Secular-only framing', why: 'Spiritual concerns the client raises are part of her context and can be legitimate treatment goals', keys: ['wants to pray again'], mistake: 'Excluding spirituality the client wants addressed' }),
      O('b', 'Include her spiritual goal in her own terms alongside grief goals, and, with her consent, coordinate with her priest.', 3,
        { r: 'Integrate faith as she defines it', approach: 'Integrate cultural and spiritual context', why: 'Plans integrate the client’s cultural and spiritual values; collaboration with clergy, with consent, supports her goal', keys: ['devout Catholic', 'asks counselor to talk with priest'], mistake: 'Either ignoring faith or defining its role for her' }),
      O('c', 'Set a goal for her to return to weekly Mass within a month, since going back would show her faith has recovered.', 0,
        { r: 'Counselor-defined spiritual goal', approach: 'Behavioral-marker framing', why: 'Returning to Mass may be part of her path, but the counselor should not set the spiritual target or timeline', keys: ['wants to pray again'], mistake: 'Setting a spiritual goal for the client' }),
      O('d', 'Help her see that her anger at God is part of her grief and that letting go of her faith may be a healthy step to take.', -2,
        { r: 'Imposes the counselor’s view', approach: 'Reframe-away framing', why: 'Steering her away from faith she wants to recover imposes values and undermines her goal', keys: ['“I want to be able to pray again”'], mistake: 'Imposing the counselor’s values on spiritual matters' }),
    ]),
    Q('q6', 'indirect', 'session1', 'Ngozi asks Hannah to speak with Father Emeka. How should Hannah proceed?', ['R4'], [
      O('a', 'Call him now and share her history, since he is her priest and already knows about Ada’s death and her grief.', -2,
        { r: 'No release obtained', approach: 'He-already-knows framing', why: 'Prior knowledge does not authorize disclosure; contact requires a written release', keys: ['no release yet'], mistake: 'Assuming a known person may receive information without consent' }),
      O('b', 'Decline to speak with clergy, since involving her priest could mix religion into counseling in ways that confuse her.', -1,
        { r: 'Refuses requested collaboration', approach: 'Keep-separate framing', why: 'Collaborating with clergy at the client’s request can support her spiritual goals', keys: ['client asks for contact'], mistake: 'Refusing collaboration with a non-clinical support the client values' }),
      O('c', 'Get a written release stating what may be shared and why, then coordinate with him on supporting her spiritual goal.', 3,
        { r: 'Release first, then focused coordination', approach: 'Collaborate with a non-clinical stakeholder', why: 'With a specific release, coordinating with clergy supports her goals while limiting disclosure to what is needed', keys: ['asks counselor to talk with priest'], mistake: 'Contacting support systems without a defined release' }),
      O('d', 'Suggest she talk with Father Emeka herself first, and plan to reach out to him only if she still wants it afterward.', 0,
        { r: 'Reasonable but slower', approach: 'Client-first framing', why: 'Her own contact can help, but she has asked for coordination, which can be done with a release', keys: ['client request'], mistake: 'Delaying requested coordination without reason' }),
    ]),
    Q('q7', 'planning', 'session1', 'Ngozi says Chidi “grieves by staying busy” and they argue over Ada’s things. How should the plan address this?', ['R3'], [
      O('a', 'Plan joint sessions on their different ways of grieving, and offer Chidi resources like a bereaved parents’ group.', 3,
        { r: 'Address the couple system', approach: 'Refer family members and plan conjoint work', why: 'Couple conflict after a child’s death often reflects different grieving styles; joint work and resources for the partner support both', keys: ['Chidi agrees to come', 'argue over Ada’s things'], mistake: 'Treating the bereaved parent alone when the couple is in conflict' }),
      O('b', 'Keep the work individual and coach Ngozi to avoid talking about Ada’s things with Chidi until her own grief has eased.', -1,
        { r: 'Avoidance in the marriage', approach: 'Avoid-conflict framing', why: 'Avoiding the topic leaves both partners alone in their grief and the conflict unresolved', keys: ['arguments continue'], mistake: 'Recommending avoidance as a couple strategy' }),
      O('c', 'Refer them straight to a separate couples therapist, since couple conflict falls outside the focus of grief treatment.', 0,
        { r: 'Splits care unnecessarily', approach: 'Outside-referral framing', why: 'A referral may help later, but the conflict is grief-related and can be addressed in her plan first', keys: ['grief-related conflict'], mistake: 'Separating grief and couple issues' }),
      O('d', 'Help Ngozi see that Chidi is avoiding his grief, so she can encourage him to start dealing with it the way she does.', -2,
        { r: 'Pathologizes his style', approach: 'Right-way-to-grieve framing', why: 'Labeling his style as avoidance sides with her and deepens the conflict', keys: ['“grieves by staying busy”'], mistake: 'Treating one grieving style as correct' }),
    ]),
    Q('q8', 'indirect', 'session1', 'Ngozi reports nausea on sertraline and skipping doses, and has not told her physician. The counselor should:', ['R6'], [
      O('a', 'Tell her to stop the sertraline, since it is not helping enough to justify the nausea she has been dealing with.', -2,
        { r: 'Medication advice outside scope', approach: 'Stop-it framing', why: 'Counselors do not direct medication changes; stopping should be decided with the prescriber', keys: ['counselor scope'], mistake: 'Giving medication instructions as a counselor' }),
      O('b', 'Leave medication matters to her physician, since commenting on side effects falls outside what a counselor does.', -1,
        { r: 'Misses the documentation duty', approach: 'Not-my-lane framing', why: 'Documenting and relaying reported effects and adherence is within scope; staying silent leaves the prescriber unaware', keys: ['has not told her physician'], mistake: 'Confusing prescribing scope with documenting reported effects' }),
      O('c', 'Note the nausea in the chart and plan to ask about it again at her next appointment to see if it has eased by then.', 0,
        { r: 'Documents but does not coordinate', approach: 'Monitor framing', why: 'Documenting is right, but the prescriber should know about missed doses and side effects now', keys: ['skipping doses several days a week'], mistake: 'Documenting without timely coordination' }),
      O('d', 'Document the effects and skipped doses she reports, and with consent tell her physician and urge her to call too.', 3,
        { r: 'Document and coordinate', approach: 'Document self-reported effects', why: 'Counselors document client-reported medication effects and adherence and coordinate with the prescriber with consent', keys: ['nausea', 'skipping doses', 'not told physician'], mistake: 'Neither documenting nor communicating reported effects' }),
    ]),

    // ---------------- session2 (5) ----------------
    Q('q9', 'interventions', 'session2', 'Ngozi still cannot open Ada’s door. Which grief-focused intervention is most appropriate?', ['R5', 'R3'], [
      O('a', 'Encourage her to keep the door closed until she feels ready, since avoiding the room protects her from more pain.', -1,
        { r: 'Reinforces avoidance', approach: 'Wait-until-ready framing', why: 'Avoidance of reminders maintains prolonged grief; waiting for readiness tends to prolong it', keys: ['door closed 18 months'], mistake: 'Supporting avoidance as protection' }),
      O('b', 'Ask her to clear out the room this week, since facing the loss all at once is the fastest way to accept it is real.', -2,
        { r: 'Forced and premature', approach: 'Flooding framing', why: 'Forcing a major step without preparation can overwhelm her and is not graded exposure', keys: ['cannot open the door'], mistake: 'Confusing forced removal with therapeutic exposure' }),
      O('c', 'Plan graded steps toward the room with her, paired with memories of Ada and goals for re-engaging in her life.', 3,
        { r: 'Graded revisiting plus restoration', approach: 'Grief-targeted intervention', why: 'Grief-targeted treatments pair graded approach to avoided reminders with memory work and restoration goals', keys: ['avoids the room', 'stopped choir'], mistake: 'Either reinforcing avoidance or forcing exposure' }),
      O('d', 'Explore her memories of Ada in session and leave the bedroom alone for now, since talking about her is enough work.', 0,
        { r: 'Partial approach', approach: 'Memory-only framing', why: 'Memory work is valuable, but leaving avoidance untouched misses a central target', keys: ['door still closed'], mistake: 'Addressing memories while ignoring avoidance' }),
    ]),
    Q('q10', 'interventions', 'session2', 'Ngozi asks, “God took my baby. How can I pray to Him?” Which response is most therapeutic?', ['R3'], [
      O('a', '“God doesn’t cause children to die, so it may help to see that Ada’s illness was not something He did to you.”', -2,
        { r: 'Imposes theology', approach: 'Theological-correction framing', why: 'Offering the counselor’s theology imposes values and shuts down her spiritual struggle', keys: ['devout Catholic'], mistake: 'Answering a spiritual question with the counselor’s beliefs' }),
      O('b', '“You feel betrayed by the God you trusted, and you still want to reach Him. Tell me what praying used to be like.”', 3,
        { r: 'Reflects and explores the struggle', approach: 'Explore spiritual struggle', why: 'Reflecting her anger and longing and exploring her relationship with prayer respects her faith and opens meaning work', keys: ['“How can I pray to Him?”', 'wants to pray again'], mistake: 'Avoiding or resolving spiritual pain for the client' }),
      O('c', '“That is a question for Father Emeka, so let’s keep our focus on your grief and how you are coping this week.”', -1,
        { r: 'Deflects spiritual content', approach: 'Refer-the-question framing', why: 'Redirecting to clergy dismisses a spiritual struggle she brought to counseling', keys: ['faith in treatment plan'], mistake: 'Treating spirituality as outside counseling' }),
      O('d', '“Your faith has helped you through hard times before, and I believe you will find your way back to prayer in time.”', 0,
        { r: 'Premature reassurance', approach: 'Reassurance framing', why: 'Encouragement is kind but closes exploration of her anger and longing', keys: ['spiritual struggle'], mistake: 'Reassuring instead of exploring' }),
    ]),
    Q('q11', 'interventions', 'session2', 'In the joint session, Chidi says the room is “like a shrine” and they need “to move on.” The counselor should:', ['R3'], [
      O('a', 'Agree with Chidi that clearing the room is healthy, and help Ngozi see that holding on is keeping her stuck in grief.', -2,
        { r: 'Sides with one partner', approach: 'Side-taking framing', why: 'Siding with Chidi shames Ngozi and damages her alliance and the couple’s trust', keys: ['Ngozi crying'], mistake: 'Taking sides in a couple conflict' }),
      O('b', 'Point out to Chidi that staying busy is a way of avoiding grief, and that he needs to slow down and feel the loss too.', -1,
        { r: 'Pathologizes his style', approach: 'Confront-the-partner framing', why: 'Labeling his coping as avoidance alienates him and treats one style as correct', keys: ['grieves by staying busy'], mistake: 'Treating one grieving style as the right one' }),
      O('c', 'Suggest they stop joint sessions for now and each work on their own grief, since talking together causes too much pain.', 0,
        { r: 'Retreats from the conflict', approach: 'Separate framing', why: 'Individual work helps, but stopping joint work leaves the shared conflict unaddressed', keys: ['ongoing arguments'], mistake: 'Avoiding couple conflict instead of working with it' }),
      O('d', 'Help each say what the room means to them, normalize their different ways of grieving, and work toward a shared plan.', 3,
        { r: 'Bridge grieving styles', approach: 'Couples/family counseling', why: 'Partners often grieve differently; making each style understandable reduces blame and allows a shared, paced decision', keys: ['“like a shrine”', 'cannot open the door'], mistake: 'Adjudicating who is grieving correctly' }),
    ]),
    Q('q12', 'legal', 'session2', 'Chidi calls asking what Ngozi has said about him in her individual sessions. How should Hannah respond?', ['R4'], [
      O('a', 'Explain that she cannot share what Ngozi says without Ngozi’s written consent, and suggest raising it in a joint session.', 3,
        { r: 'Protect confidentiality; redirect', approach: 'Follow release-of-information policy', why: 'Joining a couple session does not give a partner access to individual-session content; without a release, nothing is shared', keys: ['individual sessions', 'no release for Chidi'], mistake: 'Treating a joint-session participant as entitled to individual content' }),
      O('b', 'Give him a general summary of her concerns, since he is her husband and has already taken part in one of her sessions.', -2,
        { r: 'Unauthorized disclosure', approach: 'Spouse-is-family framing', why: 'Marriage and a joint session do not authorize disclosure of individual-session content', keys: ['no release'], mistake: 'Assuming spouses may receive information' }),
      O('c', 'Confirm that Ngozi is a client but say nothing more, and tell him to ask Ngozi directly about what she discusses in sessions.', 0,
        { r: 'Partly right', approach: 'Limited-acknowledgment framing', why: 'Redirecting is right, but even confirming detail beyond what he already knows should follow her consent and policy', keys: ['joint session known to him'], mistake: 'Not anchoring the response in the release policy' }),
      O('d', 'Refuse to take his call and tell him he cannot attend any more joint sessions, since he has tried to breach her privacy.', -1,
        { r: 'Punitive overreaction', approach: 'Exclude framing', why: 'His question is understandable; excluding him harms the couple work Ngozi agreed to', keys: ['Ngozi consented to joint work'], mistake: 'Punishing a family member for asking' }),
    ]),
    Q('q13', 'legal', 'session2', 'Ngozi thinks her insurer “probably doesn’t cover grief” and asks Hannah to bill her sessions as depression. Hannah should:', ['R4', 'R6'], [
      O('a', 'Bill under depression, since her low mood is real and the label matters less than making sure she can keep coming.', -2,
        { r: 'Misrepresents diagnosis', approach: 'Access-justifies framing', why: 'Billing a diagnosis that is not supported is fraudulent, whatever the motive', keys: ['MDD not supported'], mistake: 'Changing a diagnosis to obtain reimbursement' }),
      O('b', 'Add depression as a second diagnosis on the claim, since she is on an antidepressant and that supports the code.', -1,
        { r: 'Unsupported added diagnosis', approach: 'Add-a-code framing', why: 'A medication does not establish a diagnosis; adding unsupported codes misrepresents care', keys: ['sertraline', 'MDD criteria not met'], mistake: 'Inferring a billable diagnosis from medication' }),
      O('c', 'Explain that claims must match what her assessment supports, check her plan’s coverage, and discuss options.', 3,
        { r: 'Accurate coding; verify coverage', approach: 'Ensure claims match documentation', why: 'Claims must match the documented, supported diagnosis; prolonged grief disorder has its own code, and coverage can be checked rather than assumed', keys: ['F43.81', 'assumes no coverage'], mistake: 'Altering diagnosis instead of verifying coverage' }),
      O('d', 'Offer to see her at a reduced self-pay rate so nothing goes to insurance and the diagnosis question does not come up.', 0,
        { r: 'Avoids rather than verifies', approach: 'Bypass-insurance framing', why: 'Self-pay is an option, but coverage should be verified first; she may be covered as is', keys: ['unverified assumption'], mistake: 'Avoiding insurance instead of checking coverage' }),
    ]),
  ],
};

// ============================================================================
// D934 — PTSD, hard, plan 4
// ============================================================================
const D934 = {
  id: 'ncmhce-D934',
  title: 'He never hit her face: a Deaf mother, a protective order, and her ex-husband’s attorney',
  category: 'Trauma',
  difficulty: 'hard',
  plan: 4,
  population: 'adult',
  primaryDiagnosis: { name: 'Posttraumatic Stress Disorder', code: 'F43.10' },
  diagnosis: { name: 'Posttraumatic Stress Disorder', code: 'F43.10' },
  differentialOptions: [
    { id: 'do1', name: 'Acute Stress Disorder', isCorrect: false },
    { id: 'do2', name: 'Posttraumatic Stress Disorder', isCorrect: true },
    { id: 'do3', name: 'Major Depressive Disorder, Single Episode, Moderate', isCorrect: false },
    { id: 'do4', name: 'Generalized Anxiety Disorder', isCorrect: false },
    { id: 'do5', name: 'Adjustment Disorder, with Anxiety', isCorrect: false },
  ],
  narrative: {
    intake:
      'Courtney Bledsoe, a 34-year-old white woman who has been Deaf since birth and whose primary language is American Sign Language, comes to a community ' +
      'counseling center. She works nights as a mail processor at a postal distribution center. Four months ago she separated from her hearing husband, Wade, ' +
      'after six years of marriage; their son, Eli, 6, is hearing and signs fluently. She has a temporary protective order, with a final hearing in five weeks, ' +
      'and custody is being contested. No interpreter had been booked, so intake begins 40 minutes late, once a certified ASL interpreter is reached by video ' +
      'remote interpreting. Courtney has nightmares about the assaults four or five nights a week, has flashbacks when she feels the vibration of a slammed ' +
      'door, avoids the street where they lived, startles easily, sleeps with the lights on, feels detached from friends, and says, “It’s my fault. I should ' +
      'have left the first time.” Her symptoms began during the marriage and have worsened since the separation. Describing the marriage, she signs almost ' +
      'casually, “He never hit my face. He’d choke me until I saw spots, so nobody could tell.” She adds that the order made Wade turn in his guns, “but his ' +
      'brother Travis is keeping them for him across the road,” and that last week she found a note on her car reading, “We’re not done.” She denies suicidal ' +
      'thoughts and says, “Eli keeps me going.” Before the interpreter connected she completed the PCL-5 in written English, which she says “took forever”; ' +
      'the score is 38. Her counselor, Mireille, an LPC who took one ASL course in college, has no training in Deaf culture and wonders whether she could ' +
      'manage sessions by signing herself. After intake Mireille has intrusive images of the choking, catches herself rechecking her own door locks, and ' +
      'notes that Courtney is her fourth new intimate partner violence client this month.',
    session1:
      'Courtney is staying with a cousin. She tells Mireille she wants “to stop the nightmares” and asks to start “the trauma therapy where you talk about it” ' +
      'right away. The local domestic violence program has an advocate who works with Deaf survivors by videophone. The only in-person certified interpreter ' +
      'in the county is a close friend of Wade’s sister. Courtney’s legal aid attorney, under a release Courtney signed, asks Mireille for a letter on her ' +
      'diagnosis and “what Wade did to her” for the custody case. The center also learns that Courtney’s phone number in its records is still the old number ' +
      'on Wade’s family plan.',
    session2:
      'Four weeks later the final protective order is in place, Travis has turned Wade’s guns over to the sheriff, and Courtney has begun cognitive processing ' +
      'therapy. Working on her impact statement, she again signs, “It’s my fault. I should have left the first time.” Midway through, a heavy door slams down ' +
      'the hall; Courtney freezes, her eyes go unfocused, and she does not respond to the interpreter’s signing. At her next session she is furious: an ' +
      'automated reminder went to the old number, and Wade texted her, “See you Thursday at 3.” That week the center receives a subpoena from Wade’s attorney ' +
      'for “all records” of Courtney’s treatment. On Thursday, during her session, Wade walks into the lobby and demands to see her.',
  },
  diagnosticRationale:
    'Courtney experienced repeated physical assault, including strangulation, by an intimate partner (Criterion A). She has intrusions (nightmares and ' +
    'vibration-triggered flashbacks), avoidance of reminders, negative cognitions and mood (self-blame, detachment), and arousal (startle, hypervigilance, ' +
    'sleep disturbance) lasting far more than one month with clear impairment—PTSD. Acute stress disorder is ruled out by duration. Some vigilance is ' +
    'realistic given ongoing threats, so assessment separates warranted caution from trauma-driven arousal, but her nightmares, flashbacks, and self-blame ' +
    'are trauma responses rather than proportionate safety behavior. She does not report pervasive depressed mood or anhedonia, and her anxiety is ' +
    'trauma-specific rather than generalized.',
  references: [
    { id: 'R1', source: 'DSM-5-TR', detail: 'Posttraumatic stress disorder criteria A–H; differential from acute stress disorder; cultural and linguistic considerations in assessment' },
    { id: 'R2', source: 'VA/DoD CPG', detail: 'PTSD: trauma-focused psychotherapies (CPT, PE) as first-line; addressing safety and ongoing threat' },
    { id: 'R3', source: 'Hays (Assessment)', detail: 'Validity of instruments across language and culture; use of interpreters; structured risk and lethality assessment' },
    { id: 'R4', source: 'ACA Code of Ethics', detail: 'Competence with diverse populations, interpreters and accessibility, counselor self-care and impairment, confidentiality and court-ordered disclosure' },
    { id: 'R5', source: 'State law', detail: 'Protective orders and firearm surrender; responding to subpoenas for counseling records; privilege' },
    { id: 'R6', source: 'HIPAA', detail: 'Minimum necessary disclosures; subpoenas without court order require satisfactory assurances or client authorization; confidential communications requests' },
    { id: 'R7', source: 'Stanley-Brown SPI', detail: 'Collaborative safety planning adapted to the client’s communication access' },
    { id: 'R8', source: 'Corey (Theory & Practice)', detail: 'Repairing therapeutic ruptures; grounding and stabilization; cognitive approaches to self-blame' },
  ],
  questions: [
    // ---------------- intake (4) ----------------
    Q('q1', 'assess', 'intake', 'Which response to Courtney’s description of the marriage and Wade’s current situation is most important at intake?', ['R3', 'R5'], [
      O('a', 'Note that the protective order is in place and the guns were surrendered, so her risk is being managed by the court.', -2,
        { r: 'Misses lethal risk indicators', approach: 'Order-equals-safety framing', why: 'Strangulation and a partner’s continued firearm access are among the strongest predictors of intimate partner homicide; the order has not removed the guns', keys: ['choked until she saw spots', 'Travis keeping the guns', '“We’re not done”'], mistake: 'Assuming a protective order means the danger is controlled' }),
      O('b', 'Focus on her PTSD symptoms, since evaluating the danger from Wade belongs to the police and the court rather than to counseling.', -1,
        { r: 'Safety is a counseling task', approach: 'Not-my-role framing', why: 'Assessing risk to the client is a core counselor task; deferring it to others leaves critical information unused', keys: ['note on her car'], mistake: 'Treating partner-violence risk as outside counseling' }),
      O('c', 'Tell her she needs to go to a shelter tonight, since staying anywhere Wade might find her is too dangerous right now.', 0,
        { r: 'Directive before assessment', approach: 'Rescue framing', why: 'Shelter may be part of a plan, but directing it before assessing and planning with her overrides her judgment', keys: ['staying with a cousin'], mistake: 'Prescribing a safety step before collaborative assessment' }),
      O('d', 'Treat strangulation and his gun access as lethality signs, assess danger in a structured way, and link her with an advocate.', 3,
        { r: 'Identify lethality indicators', approach: 'Structured danger assessment', why: 'Nonfatal strangulation, firearm access, and ongoing threats call for structured lethality assessment and advocacy linkage', keys: ['strangulation', 'guns across the road', '“We’re not done”'], mistake: 'Overlooking risk facts disclosed casually' }),
    ]),
    Q('q2', 'assess', 'intake', 'Courtney completed the PCL-5 in written English before the interpreter connected. How should the counselor use the score of 38?', ['R3', 'R1'], [
      O('a', 'Accept the score as valid, since the PCL-5 is a well-validated tool and a score of 38 is clearly above the usual cutoff.', -1,
        { r: 'Ignores language access', approach: 'Score-is-score framing', why: 'Validity depends on the client accessing the items in her language; English-only administration to an ASL user may distort results', keys: ['“took forever”', 'ASL primary language'], mistake: 'Assuming validation applies regardless of administration language' }),
      O('b', 'Treat it as tentative, readminister with a qualified interpreter or ASL version, and confirm with a clinical interview.', 3,
        { r: 'Administer in her language', approach: 'Culturally and linguistically valid assessment', why: 'Instruments must align with the client’s language; results from English-only administration are confirmed with interpreter-mediated assessment', keys: ['completed before interpreter', 'ASL primary language'], mistake: 'Relying on a score obtained without language access' }),
      O('c', 'Set the score aside entirely and diagnose from her description alone, since standardized tools are not valid for Deaf adults.', 0,
        { r: 'Overcorrects', approach: 'Discard-tools framing', why: 'Tools can be used with appropriate language access; discarding structured assessment loses useful data', keys: ['interpreter available'], mistake: 'Assuming instruments cannot be used with Deaf clients' }),
      O('d', 'Ask Eli to sign the items to her at home so she can retake the measure in ASL before her next appointment at the center.', -2,
        { r: 'Child as interpreter', approach: 'Family-interpreter framing', why: 'Using a 6-year-old to interpret trauma items exposes him to his mother’s abuse details and compromises accuracy', keys: ['Eli, 6', 'assault content'], mistake: 'Using a child to interpret clinical material' }),
    ]),
    Q('q3', 'profdev', 'intake', 'Mireille took one ASL course and wonders whether she could sign with Courtney herself. What should she do?', ['R4'], [
      O('a', 'Use qualified interpreters, get training and consultation on Deaf culture, and offer a Deaf-fluent counselor if she wants.', 3,
        { r: 'Assess competence and suitability', approach: 'Determine counselor–client suitability', why: 'Limited signing skill is not clinical fluency; counselors use qualified interpreters, build cultural competence, and respect client preference', keys: ['one college ASL course', 'no Deaf-culture training'], mistake: 'Overestimating one’s own language skill' }),
      O('b', 'Sign with her directly to build rapport, since a Deaf client will appreciate the effort even if Mireille’s signing is limited.', -2,
        { r: 'Inadequate communication in trauma work', approach: 'Effort-counts framing', why: 'Limited signing in trauma therapy risks misunderstanding and denies her full communication access', keys: ['one ASL course'], mistake: 'Substituting goodwill for language access' }),
      O('c', 'Transfer her to another center with a signing counselor, since a hearing counselor cannot work effectively with a Deaf client.', -1,
        { r: 'Reflexive referral', approach: 'Match-or-refer framing', why: 'Hearing counselors can work effectively with qualified interpreters and cultural competence; preference should guide referral', keys: ['no stated preference'], mistake: 'Assuming only a Deaf counselor can serve a Deaf client' }),
      O('d', 'Rely on interpreters for sessions and read about Deaf culture on her own, since formal training is not needed for one client.', 0,
        { r: 'Partial competence plan', approach: 'Self-study framing', why: 'Interpreters are right, but working across a cultural and linguistic difference warrants training and consultation', keys: ['no Deaf-culture training'], mistake: 'Treating cultural competence as optional reading' }),
    ]),
    Q('q4', 'profdev', 'intake', 'After intake, Mireille has intrusive images of the choking and keeps rechecking her own locks. What should she do?', ['R4'], [
      O('a', 'Push through it, since images like these fade with time and are part of the job in a busy trauma-focused practice.', -1,
        { r: 'Ignores early vicarious trauma', approach: 'Push-through framing', why: 'Intrusions and hypervigilance after client material are signs of vicarious trauma that warrant attention', keys: ['intrusive images', 'rechecks locks'], mistake: 'Normalizing vicarious trauma as part of the job' }),
      O('b', 'Stop taking intimate partner violence cases for good, since her reactions show she is not suited to this kind of work.', 0,
        { r: 'Overreaction', approach: 'Exit framing', why: 'Vicarious trauma is addressed through supervision, caseload balance, and self-care, not necessarily by leaving the work', keys: ['four new IPV clients'], mistake: 'Treating a stress reaction as unsuitability' }),
      O('c', 'Recognize possible vicarious trauma, take it to supervision, and look at her caseload mix and self-care practices.', 3,
        { r: 'Assess and address vicarious trauma', approach: 'Assess exposure to vicarious trauma', why: 'Counselors monitor for vicarious trauma and respond with supervision, caseload adjustments, and self-care to protect themselves and clients', keys: ['intrusive images', 'fourth new IPV client this month'], mistake: 'Ignoring the counselor’s own trauma responses' }),
      O('d', 'Tell Courtney about her reaction so Courtney knows how serious her story is and feels validated by the counselor’s response.', -2,
        { r: 'Burdens the client', approach: 'Disclose-reaction framing', why: 'Sharing her own trauma response shifts care onto the client, who may then protect her by withholding', keys: ['client in crisis'], mistake: 'Using the client to process the counselor’s reactions' }),
    ]),

    // ---------------- session1 (4) ----------------
    Q('q5', 'planning', 'session1', 'Courtney asks to start “the trauma therapy where you talk about it” right away. How should treatment be sequenced?', ['R2', 'R7'], [
      O('a', 'Begin prolonged exposure this week, since trauma-focused therapy is first-line for PTSD and she has asked for it herself.', 0,
        { r: 'Right treatment, wrong moment', approach: 'Start-now framing', why: 'Trauma-focused therapy is first-line, but with active threats, an armed relative nearby, and a pending hearing, safety comes first', keys: ['note on her car', 'guns across the road', 'hearing in five weeks'], mistake: 'Starting exposure before addressing an active danger' }),
      O('b', 'Do safety planning and stabilization now, then start trauma-focused therapy once immediate safety is reasonably secure.', 3,
        { r: 'Safety first, then trauma-focused care', approach: 'Sequence treatment', why: 'Active danger is addressed first; trauma-focused therapy follows promptly once safety is reasonably established, without indefinite delay', keys: ['ongoing threats', 'wants trauma therapy'], mistake: 'Either rushing exposure or postponing it indefinitely' }),
      O('c', 'Postpone trauma therapy until the divorce and custody case are finished, since processing trauma during litigation is unsafe.', -1,
        { r: 'Indefinite delay', approach: 'Wait-for-court framing', why: 'Litigation can last a year or more; ongoing legal stress alone is not a reason to withhold first-line treatment', keys: ['custody contested'], mistake: 'Delaying effective treatment until every stressor resolves' }),
      O('d', 'Offer joint sessions with Wade to lower conflict before the hearing, since a calmer co-parenting relationship will help Eli.', -2,
        { r: 'Conjoint work with an abuser', approach: 'Reduce-conflict framing', why: 'Joint sessions with an abusive partner are contraindicated and can endanger the survivor', keys: ['protective order', 'strangulation'], mistake: 'Treating partner violence as relationship conflict' }),
    ]),
    Q('q6', 'planning', 'session1', 'How should the counselor build Courtney’s safety plan?', ['R7', 'R5'], [
      O('a', 'Use the center’s standard safety-plan form in written English, listing 911 and the hotline phone number as her contacts.', -1,
        { r: 'Not accessible to her', approach: 'Standard-template framing', why: 'Voice-based contacts and an English form do not match her communication access; the plan must be usable by her', keys: ['ASL primary language'], mistake: 'Using a plan the client cannot readily use' }),
      O('b', 'Suggest she meet Wade with a mediator before the hearing so they can settle things calmly and lower the risk of violence.', -2,
        { r: 'Unsafe contact', approach: 'Mediation framing', why: 'Mediation with an abuser who has strangled her and violated the order raises danger', keys: ['“We’re not done”', 'protective order'], mistake: 'Treating partner violence as a dispute to mediate' }),
      O('c', 'Give her the domestic violence program’s contact information, and let her decide later whether to reach out to them.', 0,
        { r: 'Passive referral', approach: 'List-only framing', why: 'Sharing resources helps, but a high-risk situation calls for an active, collaborative plan now', keys: ['high lethality indicators'], mistake: 'Giving resources without building a plan' }),
      O('d', 'Plan with her and the Deaf services advocate, using text-to-911 and videophone, and raise the guns with her attorney.', 3,
        { r: 'Accessible plan with advocacy', approach: 'Collaborative, accessible safety plan', why: 'Safety plans are built with the client and advocates, use her communication modes, and address firearm access through legal channels', keys: ['Deaf services advocate', 'Travis keeping the guns'], mistake: 'Building a plan that ignores access needs or firearms' }),
    ]),
    Q('q7', 'indirect', 'session1', 'The only in-person certified interpreter in the county is a close friend of Wade’s sister. The counselor should:', ['R4'], [
      O('a', 'Book that interpreter, since certified interpreters follow a code of confidentiality and can be trusted to stay neutral.', -1,
        { r: 'Ignores a conflict of interest', approach: 'Certification-suffices framing', why: 'A personal tie to the abuser’s family is a conflict that can endanger her and chill disclosure, regardless of certification', keys: ['friend of Wade’s sister'], mistake: 'Treating certification as eliminating conflicts' }),
      O('b', 'Use written notes in English for sessions until a better option comes up, since it keeps her information fully private.', 0,
        { r: 'Inadequate access', approach: 'Write-it-out framing', why: 'Written English is not her primary language and limits trauma work; it is a stopgap at most', keys: ['ASL primary language'], mistake: 'Accepting reduced communication access' }),
      O('c', 'Talk it over with Courtney and book a qualified interpreter with no family ties, such as a video remote service.', 3,
        { r: 'Conflict-free qualified interpreter', approach: 'Secure appropriate translation services', why: 'Counselors arrange qualified interpreters without conflicts, consulting the client about her preferences and safety', keys: ['only local interpreter tied to Wade’s family', 'video interpreting available'], mistake: 'Using an interpreter with a conflict of interest' }),
      O('d', 'Ask Eli to interpret during sessions, since he signs fluently and Courtney already trusts him more than anyone else.', -2,
        { r: 'Child interpreter', approach: 'Family-interpreter framing', why: 'Using a child to interpret his mother’s trauma therapy harms him and compromises her care', keys: ['Eli, 6'], mistake: 'Using a family member, especially a child, as interpreter' }),
    ]),
    Q('q8', 'indirect', 'session1', 'With Courtney’s release, her attorney asks for a letter on her diagnosis and “what Wade did to her.” The counselor should:', ['R4', 'R6'], [
      O('a', 'Write a factual letter on her diagnosis, symptoms, and treatment, noting that abuse details are as she reported them.', 3,
        { r: 'Factual, within role', approach: 'Collaborate with a non-clinical stakeholder', why: 'Counselors provide factual information within their role, attribute abuse details to the client’s report, and avoid conclusions about a person they have not assessed', keys: ['release signed', 'never evaluated Wade'], mistake: 'Offering findings about someone never assessed' }),
      O('b', 'Write that Wade is an abuser who is unsafe around Eli, since the counselor’s view will carry weight with the family court.', -2,
        { r: 'Opinion beyond role', approach: 'Advocate-the-outcome framing', why: 'Stating conclusions about Wade or custody exceeds the counselor’s role and data and can harm credibility and treatment', keys: ['custody contested'], mistake: 'Making custody-related conclusions from a treating role' }),
      O('c', 'Decline to write anything, since letters for court can be used against clients and it is safer to stay out of the case.', -1,
        { r: 'Refuses authorized collaboration', approach: 'Avoid-court framing', why: 'The client authorized the request; a factual letter within role can support her', keys: ['signed release'], mistake: 'Refusing collaboration the client requested' }),
      O('d', 'Send her full intake notes to the attorney, so the attorney can choose which details to use in the custody case.', 0,
        { r: 'Exceeds minimum necessary', approach: 'Send-the-record framing', why: 'Releasing full notes shares more than needed and could expose sensitive material in litigation', keys: ['custody litigation'], mistake: 'Sending records instead of a focused letter' }),
    ]),

    // ---------------- session2 (5) ----------------
    Q('q9', 'interventions', 'session2', 'During cognitive processing therapy Courtney signs, “It’s my fault. I should have left the first time.” The counselor should:', ['R2', 'R8'], [
      O('a', 'Agree that leaving sooner would have helped, so she can learn from it and spot warning signs sooner in future relationships.', -2,
        { r: 'Reinforces self-blame', approach: 'Lesson-learned framing', why: 'Agreeing confirms the stuck point and shifts responsibility for abuse onto the survivor', keys: ['self-blame'], mistake: 'Colluding with a trauma-related stuck point' }),
      O('b', 'Reassure her firmly that it was not her fault and that nothing she did made Wade hurt her, then move on to the next item.', 0,
        { r: 'Reassurance does not shift belief', approach: 'Reassure framing', why: 'The message is accurate, but telling her does not help her examine the belief herself, as CPT intends', keys: ['stuck point'], mistake: 'Replacing Socratic work with reassurance' }),
      O('c', 'Explore how her early childhood may have led her to choose a partner like Wade, so she can understand the pattern.', -1,
        { r: 'Wrong framework', approach: 'Origins framing', why: 'This shifts focus to her choices and implies responsibility, rather than examining the self-blame belief', keys: ['“It’s my fault”'], mistake: 'Applying an insight-oriented frame that implies responsibility' }),
      O('d', 'Use Socratic questions about what she knew then, the danger of leaving, and who is responsible for the violence.', 3,
        { r: 'Socratic work on the stuck point', approach: 'Challenge self-blame through questioning', why: 'CPT uses Socratic questioning to examine hindsight bias and responsibility, helping her reach a more accurate belief', keys: ['“I should have left the first time”', 'impact statement'], mistake: 'Telling rather than guiding the client to examine the belief' }),
    ]),
    Q('q10', 'interventions', 'session2', 'A door slams; Courtney freezes, her eyes unfocus, and she does not respond to the interpreter. What should the counselor do first?', ['R8'], [
      O('a', 'Ground her with visual cues and only pre-agreed touch, orient her to the room and date, and pause the trauma work.', 3,
        { r: 'Ground through her senses', approach: 'Crisis de-escalation and grounding', why: 'Grounding must reach her through visual and agreed-on tactile cues, since spoken or signed words are not landing; trauma processing pauses until she is regulated', keys: ['vibration-triggered flashbacks', 'not responding to signing'], mistake: 'Using spoken or signed instructions alone with a dissociating Deaf client' }),
      O('b', 'Keep going with the impact statement, since staying with the memory while she is activated will make processing deeper.', -2,
        { r: 'Processing while dissociated', approach: 'Push-through framing', why: 'Continuing while she is dissociated is not therapeutic exposure and can retraumatize her', keys: ['eyes unfocused'], mistake: 'Treating dissociation as productive engagement' }),
      O('c', 'Have the interpreter keep signing calming words to her, and wait for her to come back to the session on her own time.', -1,
        { r: 'Channel is not reaching her', approach: 'Wait-it-out framing', why: 'She is not responding to signing; grounding must use other senses, and waiting passively prolongs the flashback', keys: ['does not respond to signing'], mistake: 'Repeating a channel that is not reaching the client' }),
      O('d', 'End the session early and send her home to rest, since a flashback means she is not ready for trauma therapy yet.', 0,
        { r: 'Ends without regulating', approach: 'Stop-and-send-home framing', why: 'Ending is premature; she must be grounded first, and one flashback does not mean CPT is wrong for her', keys: ['in-session flashback'], mistake: 'Sending a client home while dysregulated' }),
    ]),
    Q('q11', 'interventions', 'session2', 'Courtney is furious that a reminder went to the old number and Wade texted “See you Thursday at 3.” The counselor should:', ['R8', 'R6'], [
      O('a', 'Explain that the reminder system is run by the front desk, so the error was not part of her counseling or her plan.', -2,
        { r: 'Deflects responsibility', approach: 'Not-my-fault framing', why: 'Deflecting dismisses a real safety breach and her anger, deepening the rupture', keys: ['Wade learned her appointment time'], mistake: 'Defending instead of repairing a rupture' }),
      O('b', 'Acknowledge the breach and her anger, apologize, update her contact details, and revise safety plans for her visits.', 3,
        { r: 'Repair the rupture and fix the breach', approach: 'Monitor and resolve therapeutic ruptures', why: 'Non-defensive acknowledgment and concrete correction repair trust; the breach also requires updating contact records and safety planning', keys: ['old number on Wade’s plan', '“See you Thursday at 3”'], mistake: 'Fixing the record without repairing the relationship, or vice versa' }),
      O('c', 'Reassure her that the text was only a threat and that nothing happened, so there is no reason to change anything yet.', -1,
        { r: 'Minimizes danger and feelings', approach: 'Minimize framing', why: 'Wade now knows her appointment time; minimizing ignores both the risk and her anger', keys: ['history of violations'], mistake: 'Minimizing a safety-relevant breach' }),
      O('d', 'Correct her phone number in the record right away and move on to the session’s planned trauma work to keep progress going.', 0,
        { r: 'Fixes data, skips repair', approach: 'Fix-and-move-on framing', why: 'Correcting the record is needed, but skipping her anger leaves the rupture unrepaired', keys: ['furious'], mistake: 'Addressing logistics but not the alliance' }),
    ]),
    Q('q12', 'legal', 'session2', 'Wade’s attorney subpoenas “all records” of Courtney’s treatment. What should the counselor do?', ['R5', 'R6'], [
      O('a', 'Send the complete record right away, since a subpoena is a legal order and failing to comply could mean contempt of court.', -2,
        { r: 'Releases without authority', approach: 'Comply-immediately framing', why: 'An attorney’s subpoena alone generally does not authorize release of privileged records; disclosure could endanger her', keys: ['subpoena from abuser’s attorney'], mistake: 'Treating a subpoena as a court order to disclose' }),
      O('b', 'Ignore the subpoena, since counseling records are privileged and an attorney has no power to make the center respond.', -1,
        { r: 'Ignoring legal process', approach: 'Privilege-is-absolute framing', why: 'A subpoena requires a timely response; privilege is asserted properly, not by silence', keys: ['subpoena received'], mistake: 'Confusing privilege with permission to ignore process' }),
      O('c', 'Notify Courtney, consult legal counsel, and assert privilege, releasing only with her authorization or a court order.', 3,
        { r: 'Notify, consult, assert privilege', approach: 'Respond to court proceedings properly', why: 'Counselors respond to subpoenas by informing the client, seeking legal advice, and asserting privilege, disclosing only with authorization or a court order', keys: ['“all records”', 'custody litigation'], mistake: 'Either disclosing on demand or ignoring the subpoena' }),
      O('d', 'Send a brief treatment summary instead of the full record, since a summary meets the subpoena while sharing less detail.', 0,
        { r: 'Partial disclosure still unauthorized', approach: 'Compromise framing', why: 'Sending any information without authorization or an order is still a disclosure; less is not the same as permitted', keys: ['no authorization'], mistake: 'Believing a summary avoids the authorization requirement' }),
    ]),
    Q('q13', 'legal', 'session2', 'During Courtney’s Thursday session, Wade walks into the lobby demanding to see her. What should the center do?', ['R5', 'R4'], [
      O('a', 'Follow its emergency plan: keep Courtney in a secure room, call 911 about the order, and not confirm she is there.', 3,
        { r: 'Activate the emergency plan', approach: 'Activate the emergency preparedness plan', why: 'Practices follow their emergency procedures: secure the client, contact police about the violation, protect her presence, and document and review afterward', keys: ['protective order', 'Wade in the lobby'], mistake: 'Improvising a response instead of following the plan' }),
      O('b', 'Have the counselor go out and calmly ask Wade to leave, explaining that Courtney cannot see him because of the order.', -2,
        { r: 'Confirms her presence and escalates', approach: 'Talk-him-down framing', why: 'Engaging him confirms she is there and places staff at risk; this is a police matter', keys: ['strangulation history'], mistake: 'Confronting a violent person instead of following protocol' }),
      O('c', 'Tell Wade she is not here, and once he leaves, let Courtney walk out the front door to her car as she usually would.', -1,
        { r: 'Unsafe exit plan', approach: 'Wait-him-out framing', why: 'He may be waiting outside; she needs a protected exit and police involvement', keys: ['“See you Thursday at 3”'], mistake: 'Assuming the threat ends when he leaves the lobby' }),
      O('d', 'Lock the inner door and wait for Wade to leave on his own, then call the police afterward to report what happened.', 0,
        { r: 'Delays police contact', approach: 'Shelter-and-wait framing', why: 'Securing her is right, but police should be called during an active violation, not afterward', keys: ['active order violation'], mistake: 'Delaying law enforcement during an active threat' }),
    ]),
  ],
};

module.exports = { CASES: [D930, D931, D932, D933, D934] };
