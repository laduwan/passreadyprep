// tools/nce/seed/2027-interventions-2.js — 2027 NCE: Provision of Counseling Interventions (34 original items)
const T1 = 'Orient client to the Counseling process';
const T2 = 'Provide crisis intervention and de-escalation';
const T3 = 'Provide psychoeducation';
const T4 = 'Solicit client feedback regarding the Counseling process';
const T5 = 'Support client in advocating for their needs';
const T6 = 'Use core Counseling skills to facilitate treatment';
const T7 = 'Monitor and resolve therapeutic ruptures';

module.exports = [
  // ── T1: Orient client to the Counseling process ──
  {
    id: 'nce-s-v27b-001', spec: '2027', domain: 'interventions', cacrep: 'helping_relationships', topic: T1, difficulty: 'easy',
    stem: "In a first session, a counselor explains how sessions are structured, what the client and counselor will each do, and what progress usually looks like. This practice is BEST described as:",
    options: [
      { id: 'a', text: 'Reflection of meaning', isCorrect: false, rationale: "Reflection of meaning is a listening skill that captures a client's values and deeper significance; it does not explain the counseling process." },
      { id: 'b', text: 'Role induction', isCorrect: true, rationale: 'Role induction prepares clients for counseling by clarifying roles, expectations, and how the process works.' },
      { id: 'c', text: 'Termination planning', isCorrect: false, rationale: 'Termination planning prepares for ending counseling, not for beginning it.' },
    ],
    rationale: 'Role induction (structuring) orients a client to what counseling is, what each participant does, and what to expect. Clear structure early on reduces confusion, aligns expectations, and supports the working alliance.',
    references: [{ source: 'Gladding (Counseling: A Comprehensive Profession)', detail: 'Initial interview — structure and role clarification' }],
  },
  {
    id: 'nce-s-v27b-002', spec: '2027', domain: 'interventions', cacrep: 'social_cultural', topic: T1, difficulty: 'medium',
    stem: "A recently arrived client from a culture where help-seeking usually means receiving expert direction asks, \"When will you tell me what to do?\" What is the counselor's MOST appropriate first response?",
    options: [
      { id: 'a', text: 'Offer direct advice to establish credibility early', isCorrect: false, rationale: 'Giving advice before clarifying the process skips orientation and may set up a role the counselor cannot sustain.' },
      { id: 'b', text: 'Refer the client for a medication evaluation first', isCorrect: false, rationale: 'Nothing in the scenario suggests a need for medication; the issue is a mismatch in expectations.' },
      { id: 'c', text: 'Explain how counseling works and invite questions', isCorrect: true, rationale: 'Explaining the process and inviting questions addresses differing expectations respectfully and collaboratively.' },
    ],
    rationale: "Clients' cultural expectations of helping relationships shape how they respond to counseling. Orienting the client to the process, while staying open to adjusting style (for example, more structure), reduces early dropout and respects the client's worldview.",
    references: [{ source: 'Sue & Sue (Counseling the Culturally Diverse)', detail: 'Culture-bound expectations of the helping relationship; culturally responsive structuring' }],
  },
  {
    id: 'nce-s-v27b-003', spec: '2027', domain: 'interventions', cacrep: 'professional_orientation', topic: T1, difficulty: 'medium',
    stem: 'While orienting a new adult client to counseling, which topic does the ACA Code of Ethics expect the counselor to address as part of informed consent?',
    options: [
      { id: 'a', text: 'Limits of confidentiality', isCorrect: true, rationale: 'Informed consent includes explaining confidentiality and its limits so the client can make an informed choice.' },
      { id: 'b', text: "The counselor's own therapy history", isCorrect: false, rationale: "A counselor's personal therapy history is not an informed consent element and could be an inappropriate self-disclosure." },
      { id: 'c', text: 'A firm diagnosis by session two', isCorrect: false, rationale: 'Informed consent covers the use of diagnosis generally, not a promise of a diagnosis by a set session.' },
    ],
    rationale: 'Under the ACA Code, informed consent is ongoing and covers the nature of services, counselor credentials, fees, records, diagnosis and testing, and the limits of confidentiality. Discussing these at the start orients the client to the counseling relationship.',
    references: [{ source: 'ACA Code of Ethics', detail: 'Standard A.2.b, Types of Information Needed (informed consent)' }],
  },
  {
    id: 'nce-s-v27b-004', spec: '2027', domain: 'interventions', cacrep: 'professional_orientation', topic: T1, difficulty: 'easy',
    stem: 'Before starting video-based counseling, which item should the counselor include when orienting the client to the process?',
    options: [
      { id: 'a', text: 'Assurance the platform is unhackable', isCorrect: false, rationale: 'Counselors cannot guarantee technology is secure; they disclose risks and safeguards instead.' },
      { id: 'b', text: 'A plan if the connection drops', isCorrect: true, rationale: 'Distance counseling consent includes procedures for technology failure, such as how to reconnect.' },
      { id: 'c', text: 'Agreement to text between sessions', isCorrect: false, rationale: 'Between-session texting is optional and not a required orientation element; it carries its own privacy risks.' },
    ],
    rationale: 'Section H of the ACA Code calls for informed consent specific to distance counseling, including the risks and benefits of the technology, what happens if it fails, and emergency procedures. Setting up a backup plan is part of orienting a telehealth client.',
    references: [{ source: 'ACA Code of Ethics', detail: 'Section H, informed consent and disclosure for distance counseling (technology failure, emergency procedures)' }],
  },

  // ── T2: Provide crisis intervention and de-escalation ──
  {
    id: 'nce-s-v27b-005', spec: '2027', domain: 'interventions', cacrep: 'helping_relationships', topic: T2, difficulty: 'medium',
    stem: "In Roberts's seven-stage crisis intervention model, what is the FIRST stage?",
    options: [
      { id: 'a', text: 'Assess lethality and safety', isCorrect: true, rationale: 'Stage 1 is a psychosocial and lethality assessment that establishes immediate risk.' },
      { id: 'b', text: 'Identify the major problems', isCorrect: false, rationale: 'Identifying major problems is stage 3, after assessment and rapport.' },
      { id: 'c', text: 'Develop an action plan', isCorrect: false, rationale: 'Developing an action plan is stage 6, near the end of the model.' },
    ],
    rationale: "Roberts's model runs: (1) assess lethality and psychosocial status, (2) establish rapport, (3) identify major problems, (4) deal with feelings, (5) explore alternatives, (6) develop an action plan, and (7) follow up. Assessing safety comes first because every later step depends on it.",
    references: [{ source: 'Gladding (Counseling: A Comprehensive Profession)', detail: "Crisis counseling — Roberts's seven-stage crisis intervention model" }],
  },
  {
    id: 'nce-s-v27b-006', spec: '2027', domain: 'interventions', cacrep: 'helping_relationships', topic: T2, difficulty: 'hard',
    stem: "In James and Gilliland's six-step crisis intervention model, which three steps are primarily listening activities rather than acting activities?",
    options: [
      { id: 'a', text: 'Examining alternatives, making plans, gaining commitment', isCorrect: false, rationale: 'These are the final three steps, which are the acting steps.' },
      { id: 'b', text: 'Ensuring safety, making plans, obtaining commitment', isCorrect: false, rationale: 'This mixes one listening step with two acting steps.' },
      { id: 'c', text: 'Defining the problem, ensuring safety, giving support', isCorrect: true, rationale: 'The first three steps (define the problem, ensure safety, provide support) center on listening.' },
    ],
    rationale: 'James and Gilliland divide their model into listening steps (define the problem, ensure client safety, provide support) and acting steps (examine alternatives, make plans, obtain commitment). Assessment runs through every step, and client safety stays a priority from start to finish.',
    references: [{ source: 'James & Gilliland (Crisis Intervention Strategies)', detail: 'Six-step model of crisis intervention — listening vs. acting steps' }],
  },
  {
    id: 'nce-s-v27b-007', spec: '2027', domain: 'interventions', cacrep: 'helping_relationships', topic: T2, difficulty: 'medium',
    stem: 'When a counselor and client complete a Stanley-Brown Safety Planning Intervention together, which step comes FIRST?',
    options: [
      { id: 'a', text: 'Making the environment safe', isCorrect: false, rationale: 'Reducing access to lethal means is the final step of the plan.' },
      { id: 'b', text: 'Recognizing personal warning signs', isCorrect: true, rationale: 'The plan starts by identifying the thoughts, moods, or situations that signal a crisis is building.' },
      { id: 'c', text: 'Contacting professionals or agencies', isCorrect: false, rationale: 'Professional and agency contacts, including 988, come later in the sequence.' },
    ],
    rationale: 'The Stanley-Brown plan moves from warning signs, to internal coping strategies, to people and social settings for distraction, to people to ask for help, to professionals and agencies, and finally to making the environment safe. Starting with warning signs helps the client know when to use the plan.',
    references: [{ source: 'Stanley-Brown SPI', detail: 'Safety Planning Intervention — Step 1, warning signs' }],
  },
  {
    id: 'nce-s-v27b-008', spec: '2027', domain: 'interventions', cacrep: 'helping_relationships', topic: T2, difficulty: 'easy',
    stem: 'A client asks for a nationwide number to call, text, or chat with trained crisis counselors at any hour when experiencing suicidal thoughts or emotional distress. The counselor should provide:',
    options: [
      { id: 'a', text: '988', isCorrect: true, rationale: '988 is the 988 Suicide & Crisis Lifeline, offering 24/7 call, text, and chat support.' },
      { id: 'b', text: '211', isCorrect: false, rationale: '211 connects callers to community social services such as housing and food, not crisis counseling.' },
      { id: 'c', text: '311', isCorrect: false, rationale: '311 is a non-emergency municipal services line in many cities.' },
    ],
    rationale: 'The 988 Suicide & Crisis Lifeline is the national three-digit number for suicidal, mental health, and substance use crises, reachable by call, text, or chat. Counselors routinely include it in safety plans.',
    references: [{ source: 'SAMHSA 988 Lifeline', detail: '988 Suicide & Crisis Lifeline — call, text, and chat access' }],
  },
  {
    id: 'nce-s-v27b-009', spec: '2027', domain: 'interventions', cacrep: 'helping_relationships', topic: T2, difficulty: 'medium',
    stem: 'A client in a community clinic waiting room is shouting that staff lost his paperwork and is pacing near the door. Which counselor approach is MOST likely to de-escalate the situation?',
    options: [
      { id: 'a', text: 'Stand close and firmly direct the client to sit', isCorrect: false, rationale: 'Moving close and giving commands can feel threatening and invite a power struggle.' },
      { id: 'b', text: "Explain the clinic's rules and consequences now", isCorrect: false, rationale: 'Leading with rules and consequences tends to escalate an agitated person before they feel heard.' },
      { id: 'c', text: 'Speak calmly, keep distance, and validate anger', isCorrect: true, rationale: 'A calm tone, respect for personal space, and validation lower arousal and build cooperation.' },
    ],
    rationale: 'Verbal de-escalation relies on a calm, low voice, enough physical space, acknowledging the person\'s feelings, and avoiding power struggles. Limits are set respectfully once the person feels heard, while staff safety stays a priority.',
    references: [{ source: 'Kanel (A Guide to Crisis Intervention)', detail: 'Working with agitated or potentially violent clients — de-escalation' }],
  },
  {
    id: 'nce-s-v27b-010', spec: '2027', domain: 'interventions', cacrep: 'helping_relationships', topic: T2, difficulty: 'medium',
    stem: 'A counselor deployed to a family assistance center after a tornado is trained in Psychological First Aid. Which of the following is one of its core actions?',
    options: [
      { id: 'a', text: 'Detailed trauma narrative work', isCorrect: false, rationale: 'PFA does not ask survivors to give detailed accounts of the trauma.' },
      { id: 'b', text: 'Contact and engagement', isCorrect: true, rationale: 'Contact and engagement is the first PFA core action: a nonintrusive, compassionate approach to survivors.' },
      { id: 'c', text: 'Mandatory group debriefing', isCorrect: false, rationale: 'PFA is voluntary and does not use required debriefing sessions.' },
    ],
    rationale: 'PFA has eight core actions: contact and engagement, safety and comfort, stabilization, information gathering, practical assistance, connection with social supports, information on coping, and linkage with collaborative services. It is evidence-informed, flexible, and does not require survivors to tell their story.',
    references: [{ source: 'Psychological First Aid Field Operations Guide (NCTSN/NCPTSD)', detail: 'Core Actions — Contact and Engagement' }],
  },
  {
    id: 'nce-s-v27b-011', spec: '2027', domain: 'interventions', cacrep: 'helping_relationships', topic: T2, difficulty: 'hard',
    stem: "In Kanel's ABC model of crisis intervention, the \"B\" phase primarily involves:",
    options: [
      { id: 'a', text: 'Boiling down the problem', isCorrect: true, rationale: 'B stands for boiling down the problem: identifying the precipitating event, perceptions, and distress.' },
      { id: 'b', text: 'Building long-term insight', isCorrect: false, rationale: 'Crisis work is brief and focused on the present, not on long-term insight.' },
      { id: 'c', text: 'Bolstering client defenses', isCorrect: false, rationale: 'This is not a phase of the model; the third phase (C) focuses on coping.' },
    ],
    rationale: "Kanel's ABC model has three parts: A, achieving contact (rapport and attending); B, boiling down the problem (precipitating event, cognitions, distress, functioning); and C, coping (exploring and building coping strategies and an action plan).",
    references: [{ source: 'Kanel (A Guide to Crisis Intervention)', detail: 'ABC model of crisis intervention — B: boiling down the problem' }],
  },

  // ── T3: Provide psychoeducation ──
  {
    id: 'nce-s-v27b-012', spec: '2027', domain: 'interventions', cacrep: 'helping_relationships', topic: T3, difficulty: 'easy',
    stem: 'A counselor teaches a client with panic disorder how the fight-or-flight response produces a racing heart and why these sensations are not dangerous. This intervention is BEST described as:',
    options: [
      { id: 'a', text: 'Interpretation', isCorrect: false, rationale: 'Interpretation offers a new frame for hidden meaning; this intervention teaches factual information.' },
      { id: 'b', text: 'Paradoxical intention', isCorrect: false, rationale: 'Paradoxical intention tells the client to try to bring on the feared symptom; that is not described here.' },
      { id: 'c', text: 'Psychoeducation', isCorrect: true, rationale: 'Teaching how symptoms work and why they are harmless is psychoeducation.' },
    ],
    rationale: 'Psychoeducation gives clients accurate information about their condition and its treatment. In panic disorder, explaining the physiology of anxiety reduces catastrophic misreading of body sensations and prepares the client for interventions such as exposure.',
    references: [{ source: 'J. Beck (CBT: Basics and Beyond)', detail: 'Psychoeducation about the cognitive model and anxiety symptoms' }],
  },
  {
    id: 'nce-s-v27b-013', spec: '2027', domain: 'interventions', cacrep: 'helping_relationships', topic: T3, difficulty: 'medium',
    stem: 'A client recently diagnosed with bipolar I disorder appears overwhelmed and tearful when the topic of the diagnosis comes up. Which approach to psychoeducation is MOST appropriate?',
    options: [
      { id: 'a', text: 'Give paced, brief information and check recall', isCorrect: true, rationale: 'Giving information in small amounts and checking understanding fits the client\'s current capacity.' },
      { id: 'b', text: 'Cover all illness information in a single session', isCorrect: false, rationale: 'Too much information at once is poorly retained and can increase distress.' },
      { id: 'c', text: 'Delay all education until symptoms fully remit', isCorrect: false, rationale: 'Waiting for full remission withholds information the client needs to manage the illness now.' },
    ],
    rationale: "Effective psychoeducation is timed and dosed to the client's readiness: brief pieces, plain language, and checks for understanding. Information about early warning signs and adherence is most useful when the client can absorb and apply it.",
    references: [{ source: 'APA CPG', detail: 'Practice guideline for bipolar disorder — psychoeducation as part of treatment' }],
  },
  {
    id: 'nce-s-v27b-014', spec: '2027', domain: 'interventions', cacrep: 'helping_relationships', topic: T3, difficulty: 'hard',
    stem: 'Family psychoeducation for schizophrenia has strong evidence for lowering relapse rates. This effect is largely attributed to reducing which family factor?',
    options: [
      { id: 'a', text: 'Enmeshment', isCorrect: false, rationale: 'Enmeshment is a structural family concept; it is not the main target in schizophrenia relapse research.' },
      { id: 'b', text: 'Expressed emotion', isCorrect: true, rationale: 'High expressed emotion (criticism, hostility, emotional overinvolvement) predicts relapse, and psychoeducation lowers it.' },
      { id: 'c', text: 'Triangulation', isCorrect: false, rationale: 'Triangulation is a Bowenian concept and is not the factor tied to relapse in this research.' },
    ],
    rationale: 'Expressed emotion research showed that critical, hostile, or overinvolved family climates predict relapse in schizophrenia. Family psychoeducation teaches about the illness, communication, and problem solving, which lowers expressed emotion and relapse.',
    references: [
      { source: 'Goldenberg (Family Therapy)', detail: 'Psychoeducational family therapy and expressed emotion' },
      { source: 'APA CPG', detail: 'Practice guideline for schizophrenia — family interventions' },
    ],
  },
  {
    id: 'nce-s-v27b-015', spec: '2027', domain: 'interventions', cacrep: 'helping_relationships', topic: T3, difficulty: 'hard',
    stem: 'A client with chronic insomnia asks whether learning good sleep hygiene will be enough to fix the problem. According to the AASM clinical practice guideline, sleep hygiene education used alone is:',
    options: [
      { id: 'a', text: 'The first-line standalone treatment', isCorrect: false, rationale: 'The guideline places multicomponent CBT-I, not sleep hygiene alone, as the strongly recommended approach.' },
      { id: 'b', text: 'Equivalent to CBT-I in outcomes', isCorrect: false, rationale: 'Sleep hygiene alone has not matched the effectiveness of CBT-I.' },
      { id: 'c', text: 'Not recommended as a single therapy', isCorrect: true, rationale: 'The guideline suggests against using sleep hygiene as a single-component treatment.' },
    ],
    rationale: 'Psychoeducation is often necessary but not enough on its own. For chronic insomnia, the AASM recommends multicomponent CBT-I and suggests against sleep hygiene as a standalone therapy, though sleep hygiene education can be part of a broader treatment.',
    references: [{ source: 'AASM Clinical Practice Guideline (Insomnia)', detail: 'Behavioral and psychological treatments for chronic insomnia — sleep hygiene as single-component therapy' }],
  },
  {
    id: 'nce-s-v27b-016', spec: '2027', domain: 'interventions', cacrep: 'helping_relationships', topic: T3, difficulty: 'medium',
    stem: 'After a flood displaces several families, a counselor tells survivors that trouble sleeping, feeling on edge, and replaying the event are common reactions to a frightening experience. This is PRIMARILY an example of:',
    options: [
      { id: 'a', text: 'Normalizing through psychoeducation', isCorrect: true, rationale: 'Explaining that these reactions are common normalizes them and reduces fear of what is happening.' },
      { id: 'b', text: 'Confronting a discrepancy', isCorrect: false, rationale: 'Confrontation points out mixed messages; no discrepancy is being addressed.' },
      { id: 'c', text: 'Diagnosing acute stress disorder', isCorrect: false, rationale: 'The counselor is describing common reactions, not making a diagnosis.' },
    ],
    rationale: "Giving information about common stress reactions is part of PFA's \"information on coping\" core action. Normalizing reactions lowers distress, encourages adaptive coping, and helps survivors notice when reactions persist and call for referral.",
    references: [{ source: 'Psychological First Aid Field Operations Guide (NCTSN/NCPTSD)', detail: 'Core Action 7 — Information on Coping (common stress reactions)' }],
  },

  // ── T4: Solicit client feedback regarding the Counseling process ──
  {
    id: 'nce-s-v27b-017', spec: '2027', domain: 'interventions', cacrep: 'assessment', topic: T4, difficulty: 'easy',
    stem: 'In feedback-informed treatment, the Outcome Rating Scale (ORS) asks clients to rate:',
    options: [
      { id: 'a', text: "The session's alliance quality", isCorrect: false, rationale: 'Alliance quality is rated on the Session Rating Scale (SRS), not the ORS.' },
      { id: 'b', text: 'Their recent overall well-being', isCorrect: true, rationale: 'The ORS covers individual, interpersonal, social, and overall functioning over the past week.' },
      { id: 'c', text: "Their counselor's competence", isCorrect: false, rationale: 'The ORS does not evaluate counselor competence; it tracks client functioning.' },
    ],
    rationale: 'The ORS is a brief four-item visual analog measure of client well-being, given at the start of sessions to track change. Paired with the SRS, it lets counselors use client feedback to adjust treatment.',
    references: [{ source: 'Lambert (Outcome Monitoring)', detail: 'Feedback-informed treatment — Outcome Rating Scale' }],
  },
  {
    id: 'nce-s-v27b-018', spec: '2027', domain: 'interventions', cacrep: 'assessment', topic: T4, difficulty: 'medium',
    stem: 'A counselor adopts the Session Rating Scale (SRS) as part of feedback-informed treatment. When is it typically given, and what does it measure?',
    options: [
      { id: 'a', text: 'Session start; symptom distress', isCorrect: false, rationale: 'The ORS, not the SRS, is given at the start of sessions to track functioning.' },
      { id: 'b', text: 'Intake only; diagnostic criteria', isCorrect: false, rationale: 'The SRS is repeated every session and is not a diagnostic tool.' },
      { id: 'c', text: 'Session end; the working alliance', isCorrect: true, rationale: 'The SRS is completed near the end of each session to rate the alliance.' },
    ],
    rationale: 'The SRS asks clients to rate the relationship, goals and topics, approach or method, and overall fit of the session. Getting this feedback before the client leaves lets the counselor repair alliance problems early.',
    references: [{ source: 'Lambert (Outcome Monitoring)', detail: 'Feedback-informed treatment — Session Rating Scale and alliance monitoring' }],
  },
  {
    id: 'nce-s-v27b-019', spec: '2027', domain: 'interventions', cacrep: 'research', topic: T4, difficulty: 'hard',
    stem: "Lambert's research on routine outcome monitoring found that giving counselors session-by-session feedback MOST improves outcomes for which group of clients?",
    options: [
      { id: 'a', text: 'Clients not on track to improve', isCorrect: true, rationale: 'Feedback warns counselors when clients are at risk of deterioration, so they can change course.' },
      { id: 'b', text: 'Clients who improve rapidly', isCorrect: false, rationale: 'Clients already improving gain little extra from feedback alerts.' },
      { id: 'c', text: 'Clients with the mildest symptoms', isCorrect: false, rationale: 'The benefit is tied to the early-response trajectory, not to mild initial severity.' },
    ],
    rationale: 'Counselors tend to overestimate client progress and miss deterioration. Outcome monitoring systems flag "not-on-track" clients, and studies show feedback cuts deterioration and improves outcomes most for this group.',
    references: [{ source: 'Lambert (Outcome Monitoring)', detail: 'Effects of feedback on not-on-track cases' }],
  },
  {
    id: 'nce-s-v27b-020', spec: '2027', domain: 'interventions', cacrep: 'helping_relationships', topic: T4, difficulty: 'medium',
    stem: 'A teenage client marks a low score on the "approach or method" item of the session feedback form and hands it back silently. What is the counselor\'s BEST response?',
    options: [
      { id: 'a', text: 'Reassure the client that sessions will get better', isCorrect: false, rationale: 'Reassurance skips the feedback and does not learn what needs to change.' },
      { id: 'b', text: 'Thank the client and explore what to adjust', isCorrect: true, rationale: 'Thanking the client and asking what to change shows the feedback matters and invites collaboration.' },
      { id: 'c', text: 'Record the score and continue the current plan', isCorrect: false, rationale: 'Collecting feedback without acting on it undermines the purpose of gathering it.' },
    ],
    rationale: 'In feedback-informed treatment, low alliance scores are opportunities. Thanking the client and openly asking what would make sessions more helpful builds trust and lets the counselor adjust before the client disengages.',
    references: [{ source: 'Lambert (Outcome Monitoring)', detail: 'Responding to client alliance feedback' }],
  },

  // ── T5: Support client in advocating for their needs ──
  {
    id: 'nce-s-v27b-021', spec: '2027', domain: 'interventions', cacrep: 'social_cultural', topic: T5, difficulty: 'medium',
    stem: 'A counselor helps a client with a chronic illness identify workplace barriers, understand her rights, and rehearse requesting accommodations from her supervisor. This work BEST reflects which ACA Advocacy Competencies domain?',
    options: [
      { id: 'a', text: 'Public information', isCorrect: false, rationale: 'Public information involves broad public awareness efforts, not individual skill-building.' },
      { id: 'b', text: 'Social/political advocacy', isCorrect: false, rationale: 'Social/political advocacy targets legislation and policy at the public level.' },
      { id: 'c', text: 'Client/student empowerment', isCorrect: true, rationale: 'Building a client\'s own capacity to identify barriers and self-advocate is empowerment.' },
    ],
    rationale: 'The ACA Advocacy Competencies range from the individual level (client/student empowerment and advocacy), to the community level (collaboration and systems advocacy), to the public level (public information and social/political advocacy). Empowerment strengthens the client\'s ability to self-advocate.',
    references: [{ source: 'ACA Advocacy Competencies', detail: 'Client/Student level — Empowerment' }],
    reviewNote: 'Domain names follow the 2003 Lewis et al. competencies; the 2018 update (Toporek & Daniels) renamed public-level domains (e.g., public information became collective action). Confirm which version the 2027 NCE uses.',
  },
  {
    id: 'nce-s-v27b-022', spec: '2027', domain: 'interventions', cacrep: 'social_cultural', topic: T5, difficulty: 'easy',
    stem: 'A counselor role-plays with a Deaf client how to ask a clinic in advance for a qualified ASL interpreter at medical appointments. This intervention BEST supports:',
    options: [
      { id: 'a', text: 'Client self-advocacy', isCorrect: true, rationale: 'Rehearsing how to request an accommodation builds the client\'s own advocacy skills.' },
      { id: 'b', text: 'Counselor systems advocacy', isCorrect: false, rationale: 'Systems advocacy means the counselor working to change an organization; here the client is being equipped.' },
      { id: 'c', text: 'A dual relationship', isCorrect: false, rationale: 'Skill rehearsal is within the counseling role and creates no second relationship.' },
    ],
    rationale: 'Supporting self-advocacy means helping clients build the knowledge, confidence, and skills to state their needs and secure their rights. Role-play is a common way to strengthen these skills.',
    references: [{ source: 'ACA Advocacy Competencies', detail: 'Client/Student Empowerment — training clients in self-advocacy skills' }],
  },
  {
    id: 'nce-s-v27b-023', spec: '2027', domain: 'interventions', cacrep: 'social_cultural', topic: T5, difficulty: 'hard',
    stem: 'Within the ACA Advocacy Competencies, client/student ADVOCACY differs from client/student EMPOWERMENT primarily in that the counselor:',
    options: [
      { id: 'a', text: 'Works only at the legislative level', isCorrect: false, rationale: 'Legislative work falls under the public-level social/political advocacy domain.' },
      { id: 'b', text: "Acts on the client's behalf directly", isCorrect: true, rationale: 'In client/student advocacy, the counselor acts for the client, such as by negotiating with an agency.' },
      { id: 'c', text: 'Teaches the client to self-advocate', isCorrect: false, rationale: 'Teaching self-advocacy describes empowerment, not advocacy.' },
    ],
    rationale: 'Both are individual-level domains. Empowerment works with the client to build their capacity; advocacy has the counselor act on the client\'s behalf when barriers call for direct action, such as getting access to services.',
    references: [{ source: 'ACA Advocacy Competencies', detail: 'Client/Student level — Empowerment vs. Advocacy' }],
  },
  {
    id: 'nce-s-v27b-024', spec: '2027', domain: 'interventions', cacrep: 'professional_orientation', topic: T5, difficulty: 'medium',
    stem: "A counselor learns that a client's landlord keeps refusing a disability-related repair request. The counselor wants to contact the landlord. What should the counselor do FIRST?",
    options: [
      { id: 'a', text: 'Notify the local fair housing office', isCorrect: false, rationale: 'Contacting outside agencies about an identifiable client without consent breaches confidentiality.' },
      { id: 'b', text: 'Write a letter citing housing law', isCorrect: false, rationale: 'Acting without the client\'s consent and input is premature and may not reflect what the client wants.' },
      { id: 'c', text: "Get the client's informed consent", isCorrect: true, rationale: 'The ACA Code requires client consent before advocating on behalf of an identifiable client.' },
    ],
    rationale: 'Advocacy on behalf of a client must protect confidentiality and respect the client\'s autonomy. Obtaining consent also lets the client decide whether and how the counselor gets involved.',
    references: [{ source: 'ACA Code of Ethics', detail: 'Standard A.7.b, Confidentiality and Advocacy' }],
  },

  // ── T6: Use core Counseling skills to facilitate treatment ──
  {
    id: 'nce-s-v27b-025', spec: '2027', domain: 'interventions', cacrep: 'helping_relationships', topic: T6, difficulty: 'easy',
    stem: "In Ivey's microskills hierarchy, which skill forms the foundation on which the other skills are built?",
    options: [
      { id: 'a', text: 'Attending behavior', isCorrect: true, rationale: 'Attending behavior (eye contact, vocal qualities, verbal tracking, body language) is the base of the hierarchy.' },
      { id: 'b', text: 'Confrontation', isCorrect: false, rationale: 'Confrontation is a higher-level influencing skill that depends on basic listening skills.' },
      { id: 'c', text: 'Reflection of meaning', isCorrect: false, rationale: 'Reflection of meaning is an advanced skill placed above the basic listening sequence.' },
    ],
    rationale: 'The microskills hierarchy builds from ethics, multicultural competence, and wellness up through attending, the basic listening sequence, and then influencing skills. Attending behavior is the first skill because the others depend on it.',
    references: [{ source: 'Ivey et al. (Intentional Interviewing)', detail: 'Microskills hierarchy — attending behavior' }],
  },
  {
    id: 'nce-s-v27b-026', spec: '2027', domain: 'interventions', cacrep: 'helping_relationships', topic: T6, difficulty: 'medium',
    stem: 'A client says, "My sister canceled on me again. I planned the whole weekend around her visit." Which counselor response is a reflection of feeling?',
    options: [
      { id: 'a', text: 'Your sister canceled the plans you made.', isCorrect: false, rationale: 'This restates the content of what happened without naming any emotion, so it is a paraphrase.' },
      { id: 'b', text: "You're feeling hurt and let down by her.", isCorrect: true, rationale: 'Naming the emotions (hurt, let down) and their source is a reflection of feeling.' },
      { id: 'c', text: 'What do you think made her cancel again?', isCorrect: false, rationale: 'This is an open question that shifts focus to the sister\'s motives.' },
    ],
    rationale: 'A reflection of feeling names the client\'s emotion, often with its context ("You feel ___ because ___"). A paraphrase reflects content, and questions gather information. Accurate reflections of feeling deepen empathy and emotional exploration.',
    references: [{ source: 'Ivey et al. (Intentional Interviewing)', detail: 'Reflection of feeling vs. paraphrasing' }],
  },
  {
    id: 'nce-s-v27b-027', spec: '2027', domain: 'interventions', cacrep: 'helping_relationships', topic: T6, difficulty: 'hard',
    stem: "On Carkhuff's five-level empathy scale, a response that accurately captures the client's expressed feelings and meaning, without adding to or taking away from them, is rated at which level?",
    options: [
      { id: 'a', text: 'Level 1', isCorrect: false, rationale: 'Level 1 responses are clearly unhelpful and miss or dismiss the client\'s feelings.' },
      { id: 'b', text: 'Level 2', isCorrect: false, rationale: 'Level 2 responses take away noticeably from the client\'s expressed feelings.' },
      { id: 'c', text: 'Level 3', isCorrect: true, rationale: 'Level 3 is the interchangeable response, the minimum level of facilitative empathy.' },
    ],
    rationale: 'Carkhuff rated responses from 1 to 5: levels 1 and 2 subtract from the client\'s message, level 3 is interchangeable, and levels 4 and 5 add deeper understanding. Level 3 is the minimum facilitative level.',
    references: [{ source: 'Ivey et al. (Intentional Interviewing)', detail: 'Empathic understanding scale (Carkhuff) — interchangeable responses' }],
  },
  {
    id: 'nce-s-v27b-028', spec: '2027', domain: 'interventions', cacrep: 'helping_relationships', topic: T6, difficulty: 'medium',
    stem: 'A client says, "I\'m totally fine with the divorce," while clenching his fists and tearing up. Which counselor response BEST uses confrontation as defined in the microskills model?',
    options: [
      { id: 'a', text: "You say you're fine, yet you look upset.", isCorrect: true, rationale: 'This supportively names the discrepancy between the client\'s words and nonverbal behavior.' },
      { id: 'b', text: 'Why are you still holding on to that anger?', isCorrect: false, rationale: '"Why" questions can feel accusatory and assume anger rather than noting the mixed message.' },
      { id: 'c', text: "It sounds like you're doing well with it.", isCorrect: false, rationale: 'This reflects only the verbal message and misses the contradictory nonverbal cues.' },
    ],
    rationale: 'In microskills terms, confrontation is a supportive challenge that identifies discrepancies, often as "On one hand… yet on the other…". It is non-judgmental and invites the client to explore the mixed feelings.',
    references: [{ source: 'Ivey et al. (Intentional Interviewing)', detail: 'Confrontation — identifying and addressing discrepancies' }],
  },
  {
    id: 'nce-s-v27b-029', spec: '2027', domain: 'interventions', cacrep: 'helping_relationships', topic: T6, difficulty: 'hard',
    stem: 'According to microskills guidelines, effective counselor self-disclosure is BEST characterized as:',
    options: [
      { id: 'a', text: 'Detailed, to show shared experience', isCorrect: false, rationale: 'Long, detailed disclosures shift attention to the counselor and away from the client.' },
      { id: 'b', text: 'Brief, then returned to the client', isCorrect: true, rationale: 'Effective disclosure is short, relevant, and quickly brings the focus back to the client.' },
      { id: 'c', text: 'Frequent, to build equal footing', isCorrect: false, rationale: 'Frequent disclosure risks role confusion and takes time away from the client.' },
    ],
    rationale: "Self-disclosure should be used sparingly, for the client's benefit, kept brief and genuine, and followed by returning the focus to the client, often with a check-in such as \"How is that for you?\"",
    references: [{ source: 'Ivey et al. (Intentional Interviewing)', detail: 'Self-disclosure — guidelines for effective use' }],
  },
  {
    id: 'nce-s-v27b-030', spec: '2027', domain: 'interventions', cacrep: 'helping_relationships', topic: T6, difficulty: 'medium',
    stem: "A counselor values an older client's inherent worth while not endorsing the client's choice to stop speaking to his adult children. This stance reflects which of Rogers's core conditions?",
    options: [
      { id: 'a', text: 'Congruence', isCorrect: false, rationale: "Congruence is the counselor's genuineness, with outer behavior matching inner experience." },
      { id: 'b', text: 'Accurate empathy', isCorrect: false, rationale: "Empathy is understanding the client's inner world as if it were one's own; it is not acceptance of worth." },
      { id: 'c', text: 'Unconditional positive regard', isCorrect: true, rationale: 'UPR is nonjudgmental acceptance of the person, which is different from approving every behavior.' },
    ],
    rationale: 'Rogers named three core conditions for therapeutic change: congruence (genuineness), unconditional positive regard, and accurate empathic understanding. UPR means accepting the person without conditions of worth. It does not require approving all of the client\'s actions.',
    references: [{ source: 'Corey (Theory & Practice)', detail: 'Person-centered therapy — core therapeutic conditions' }],
  },

  // ── T7: Monitor and resolve therapeutic ruptures ──
  {
    id: 'nce-s-v27b-031', spec: '2027', domain: 'interventions', cacrep: 'helping_relationships', topic: T7, difficulty: 'medium',
    stem: "After the counselor suggests a new homework task, a client becomes overly agreeable, changes topics, and gives one-word answers for the rest of the session. Safran and Muran would MOST likely classify this as a:",
    options: [
      { id: 'a', text: 'Withdrawal rupture', isCorrect: true, rationale: 'Withdrawal ruptures involve moving away from the counselor or the work, such as deference, avoidance, or minimal responses.' },
      { id: 'b', text: 'Confrontation rupture', isCorrect: false, rationale: 'Confrontation ruptures involve moving against the counselor through complaints or hostility.' },
      { id: 'c', text: 'Positive transference', isCorrect: false, rationale: 'Agreeableness here signals disengagement, not idealization of the counselor.' },
    ],
    rationale: 'Safran and Muran describe two rupture types: withdrawal (pulling away, deferring, going vague) and confrontation (expressing anger or dissatisfaction). Withdrawal ruptures are easy to miss, so counselors watch for subtle signs of disengagement.',
    references: [{ source: 'Gelso & Hayes (Countertransference)', detail: 'Alliance ruptures — withdrawal vs. confrontation markers (Safran & Muran)' }],
    reviewNote: 'Safran & Muran is not on the allowed source list; cited via Gelso & Hayes for the alliance rupture framework. SME to confirm locator.',
  },
  {
    id: 'nce-s-v27b-032', spec: '2027', domain: 'interventions', cacrep: 'helping_relationships', topic: T7, difficulty: 'hard',
    stem: 'Midway through a session, a client says angrily, "This is pointless. We keep going in circles." Which counselor response BEST reflects Safran and Muran\'s metacommunication approach to repair?',
    options: [
      { id: 'a', text: 'Explain the research support for the approach', isCorrect: false, rationale: 'Defending the method treats the rupture as a debate and avoids the relational moment.' },
      { id: 'b', text: 'Explore what is happening between them now', isCorrect: true, rationale: 'Metacommunication brings collaborative, here-and-now attention to the interaction itself.' },
      { id: 'c', text: 'Return to the agenda set in the last session', isCorrect: false, rationale: 'Redirecting ignores the rupture and risks deepening the client\'s frustration.' },
    ],
    rationale: 'Metacommunication means stepping back with the client to talk about what is happening between them in the moment, with curiosity and without defensiveness. Owning one\'s own part and exploring the client\'s experience helps repair ruptures and can strengthen the alliance.',
    references: [{ source: 'Gelso & Hayes (Countertransference)', detail: 'Rupture repair through metacommunication and nondefensive exploration' }],
    reviewNote: 'Safran & Muran is not on the allowed source list; cited via Gelso & Hayes. SME to confirm locator.',
  },
  {
    id: 'nce-s-v27b-033', spec: '2027', domain: 'interventions', cacrep: 'helping_relationships', topic: T7, difficulty: 'easy',
    stem: "Bordin's pantheoretical model of the working alliance consists of agreement on goals, agreement on tasks, and:",
    options: [
      { id: 'a', text: 'Transference', isCorrect: false, rationale: 'Transference is a psychodynamic concept and is not one of the working alliance components.' },
      { id: 'b', text: 'Homework', isCorrect: false, rationale: 'Homework is a type of task, not a separate alliance component.' },
      { id: 'c', text: 'The bond', isCorrect: true, rationale: 'The emotional bond of trust and attachment is the third component.' },
    ],
    rationale: 'Bordin defined the working alliance as agreement on goals, agreement on tasks, and the bond between client and counselor. Ruptures can be understood as strains in any of these parts, which helps guide repair.',
    references: [{ source: 'Friedlander et al. (Alliances in Couple & Family Therapy)', detail: "Bordin's working alliance — goals, tasks, and bond" }],
  },
  {
    id: 'nce-s-v27b-034', spec: '2027', domain: 'interventions', cacrep: 'helping_relationships', topic: T7, difficulty: 'medium',
    stem: 'A client tells the counselor, "You don\'t really listen to what I say." Which counselor response is MOST likely to help repair this rupture?',
    options: [
      { id: 'a', text: "You're right that I missed something; say more.", isCorrect: true, rationale: 'Validating the client\'s experience, owning one\'s part, and inviting more is nondefensive repair.' },
      { id: 'b', text: "I hear you, but I've been listening closely.", isCorrect: false, rationale: 'Defending oneself dismisses the client\'s experience and can deepen the rupture.' },
      { id: 'c', text: "Let's look at why you feel this with others.", isCorrect: false, rationale: 'Shifting to outside relationships too early avoids the rupture happening in the room.' },
    ],
    rationale: "Ruptures are repaired by acknowledging the client's experience, taking responsibility for one's contribution, and exploring the client's reaction nondefensively. Successfully repaired ruptures are linked to stronger alliances and better outcomes.",
    references: [{ source: 'Gelso & Hayes (Countertransference)', detail: 'Nondefensive responding and alliance rupture repair' }],
  },
];
