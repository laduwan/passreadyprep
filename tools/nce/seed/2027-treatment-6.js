// tools/nce/seed/2027-treatment-6.js — 2027 NCE: Treatment Planning & Continuity of Care (30 original items)
const T1 = 'Help client prioritize presenting problems';
const T2 = 'Develop SMART (Specific, Measurable, Attainable, Realistic, and Timely) counseling goals and objectives';
const T3 = 'Develop an initial treatment plan';
const T4 = 'Identify strengths and barriers affecting client goal attainment';
const T5 = 'Integrate assessment results into treatment plans';
const T6 = 'Integrate client\'s contextual and cultural considerations into treatment plans';
const T7 = 'Review diagnosis with client';
const T8 = 'Assess for contraindications of treatment approaches';
const T9 = 'Collaborate with client to establish treatment goals and objectives';
const T10 = 'Collaborate with client to revise treatment plan as needed';
const T11 = 'Develop behavioral management plans';
const T12 = 'Refer clients and/or family members to community resources or to specialists';
const T13 = 'Develop an aftercare plan';
const T14 = 'Discuss with clients how they will maintain progress';
const T15 = 'Develop a discharge plan';
const T16 = 'Develop a relapse prevention plan';
const T17 = 'Develop a plan for disruption of service';
const T18 = 'Engage with client in review of progress toward treatment goals at planned intervals';
const T19 = 'Evaluate treatment effectiveness and client response';
const T20 = 'Collaborate with client to determine counseling termination criteria';

const base = { spec: '2027', domain: 'treatment_continuity' };

module.exports = [
  {
    ...base,
    id: 'nce-s-t27f-001',
    cacrep: 'helping_relationships',
    topic: T1,
    difficulty: 'medium',
    stem: 'Ravi, 36, a software tester, seeks counseling for career dissatisfaction and insomnia. Midway through intake he says he keeps imagining hurting a coworker who humiliated him in a meeting, and he mentions that he knows where the coworker parks. Which concern should the counselor prioritize FIRST?',
    options: [
      { id: 'a', text: 'Exploring his long-standing dissatisfaction with his career', isCorrect: false, rationale: 'Career concerns matter to him, but they do not outrank a possible risk of harm to another person.' },
      { id: 'b', text: 'Assessing his risk of violence toward the coworker', isCorrect: true, rationale: 'Thoughts of harming an identified person, plus knowledge of where to find him, call for an immediate violence risk assessment before other goals.' },
      { id: 'c', text: 'Teaching sleep hygiene to reduce his nightly insomnia', isCorrect: false, rationale: 'Insomnia is a legitimate target, but it is addressed after the counselor understands and manages the risk of harm to others.' },
    ],
    rationale: 'When prioritizing presenting problems, danger to self or others comes before every other concern. Ideation about harming an identifiable person, with details suggesting access, requires assessment of intent, plan, history and means, and may trigger protective steps. Whether a legal duty to warn or protect applies depends on state law, so the counselor checks the jurisdiction\'s requirements and consults while managing the risk.',
    references: [
      { source: 'ACA Code of Ethics', detail: 'B.2.a Serious and Foreseeable Harm and Legal Requirements' },
      { source: 'State law', detail: 'Duty to warn or protect statutes differ by state (mandatory, permissive or none)' },
    ],
  },
  {
    ...base,
    id: 'nce-s-t27f-002',
    cacrep: 'helping_relationships',
    topic: T2,
    difficulty: 'medium',
    stem: 'Imani, 44, stopped driving on highways after a crash a year ago and wants to commute by interstate again. She and her counselor are writing the first objective toward that goal. Which objective is BEST?',
    options: [
      { id: 'a', text: 'Within two weeks, drive the interstate alone at rush hour daily', isCorrect: false, rationale: 'Jumping straight to the hardest driving situation is not attainable as a first step and invites failure and more avoidance.' },
      { id: 'b', text: 'Client will gradually feel safer about driving in the months ahead', isCorrect: false, rationale: 'This is vague and unmeasurable: it names no behavior, no frequency, no data source and no specific date.' },
      { id: 'c', text: 'In 2 weeks, drive 10 minutes on side streets 3 times, per her log', isCorrect: true, rationale: 'It is specific, measurable through her log, attainable as a first step, realistic for her situation, and time-bound.' },
    ],
    rationale: 'SMART objectives break a long-term goal into small, observable steps that the client can reach and the counselor can track. A good first objective sits low on the difficulty ladder so early success builds self-efficacy, and later objectives raise the challenge toward the full goal. Each objective names the behavior, how often, how it will be measured and by when.',
    references: [
      { source: 'Wiger (Documentation)', detail: 'Treatment plan objectives — behavioral, measurable, time-limited steps toward goals' },
    ],
  },
  {
    ...base,
    id: 'nce-s-t27f-003',
    cacrep: 'helping_relationships',
    topic: T3,
    difficulty: 'medium',
    stem: 'A client comes to a community crisis program after an eviction, sleeping little and reporting passive suicidal thoughts without plan or intent. Program policy requires a treatment plan within 72 hours, but the full biopsychosocial assessment will take several sessions. What is the BEST approach?',
    options: [
      { id: 'a', text: 'Write a brief plan for immediate safety and needs, then expand it', isCorrect: true, rationale: 'An initial plan can target safety, housing and sleep now, and be expanded as the assessment is completed.' },
      { id: 'b', text: 'Delay the treatment plan until the full assessment is complete', isCorrect: false, rationale: 'Waiting ignores the program\'s timeline and leaves the client\'s urgent safety and housing needs without a documented plan.' },
      { id: 'c', text: 'Write a complete long-term plan now from the intake screening alone', isCorrect: false, rationale: 'A full long-term plan built on a screening alone outruns the available data and is likely to need wholesale revision.' },
    ],
    rationale: 'An initial treatment plan is a working document: it addresses the most pressing needs identified so far, such as safety planning and basic needs, and is revised as assessment continues. Counseling plans are developed with the client and reviewed regularly, so a brief, focused plan now is consistent with good practice. Waiting for complete information or overreaching beyond the data both weaken care.',
    references: [
      { source: 'ACA Code of Ethics', detail: 'A.1.c Counseling Plans — developed jointly and reviewed regularly' },
      { source: 'Wiger (Documentation)', detail: 'Initial treatment plan based on available assessment data and updated over time' },
    ],
  },
  {
    ...base,
    id: 'nce-s-t27f-004',
    cacrep: 'helping_relationships',
    topic: T4,
    difficulty: 'easy',
    stem: 'Walter, 74, agreed to weekly video sessions for depression because he no longer drives. At his first two appointments he could not get the video platform to open, and both sessions were lost. How should the counselor BEST address this barrier?',
    options: [
      { id: 'a', text: 'Note that he may be avoiding counseling and explore his resistance', isCorrect: false, rationale: 'Labeling a technology problem as resistance misreads a practical barrier and can damage the alliance.' },
      { id: 'b', text: 'Walk him through a test call and agree on a phone backup option', isCorrect: true, rationale: 'Practicing access and setting a backup method removes the barrier directly while keeping him in care.' },
      { id: 'c', text: 'Close his case and suggest he seek services when he can drive', isCorrect: false, rationale: 'Ending services over a solvable access problem leaves a depressed client without care.' },
    ],
    rationale: 'Barriers to goal attainment include practical ones such as transportation, technology access and digital literacy. When services are delivered by telehealth, counselors confirm that the client can use the platform and agree on what to do if it fails. Treating logistics as solvable problems keeps the client engaged and the plan realistic.',
    references: [
      { source: 'ACA Code of Ethics', detail: 'H.4.c Technology-Assisted Services (client capability to use the application); H.2.a (possibility of technology failure and alternate methods of service delivery)' },
    ],
  },
  {
    ...base,
    id: 'nce-s-t27f-005',
    cacrep: 'assessment',
    topic: T5,
    difficulty: 'hard',
    stem: 'On a personality inventory given at intake, a client\'s validity scales show marked over-reporting of symptoms, and her clinical scale elevations are extreme across nearly every area. She is seeking counseling after a painful divorce. How should the counselor use these results in treatment planning?',
    options: [
      { id: 'a', text: 'Treat each elevated clinical scale as a separate treatment target', isCorrect: false, rationale: 'When validity indicators show over-reporting, clinical scale elevations cannot be taken at face value as separate problems.' },
      { id: 'b', text: 'Conclude she is malingering and limit the plan to brief services', isCorrect: false, rationale: 'Over-reporting has several possible causes, including intense distress or a plea for help; it does not by itself establish malingering.' },
      { id: 'c', text: 'Interpret the profile cautiously and explore it through interview', isCorrect: true, rationale: 'The counselor treats the profile as limited and uses interview and other data to understand her distress and set targets.' },
    ],
    rationale: 'Validity scales indicate whether clinical scales can be interpreted. A profile suggesting over-reporting may reflect genuine severe distress, a cry for help, confusion or exaggeration, so the counselor does not plan treatment from the clinical scales alone. Results are integrated with interview, history and collateral information before goals are set.',
    references: [
      { source: 'Hays (Assessment)', detail: 'Personality inventories — validity scales, over-reporting and limits on interpreting clinical scales' },
    ],
  },
  {
    ...base,
    id: 'nce-s-t27f-006',
    cacrep: 'social_cultural',
    topic: T6,
    difficulty: 'medium',
    stem: 'Min-ji, 31, an international graduate student, says open-ended reflection in sessions leaves her confused. She explains that she expected clear guidance and practical tasks, as she received from a previous counselor in her home country. How should the counselor BEST integrate this into her treatment plan?',
    options: [
      { id: 'a', text: 'Add structured, goal-focused sessions with concrete practice tasks', isCorrect: true, rationale: 'Matching the structure of sessions to her stated expectations increases engagement while still pursuing her goals.' },
      { id: 'b', text: 'Explain that nondirective exploration is how counseling works here', isCorrect: false, rationale: 'Insisting on one style imposes the counselor\'s cultural assumptions and risks early dropout.' },
      { id: 'c', text: 'Refer her to a counselor from her home country to meet her needs', isCorrect: false, rationale: 'Her request can be met by adapting the approach; referral based on nationality is unnecessary and may feel rejecting.' },
    ],
    rationale: 'Clients\' expectations about the counselor\'s role are shaped by culture and prior experience. Sue and Sue note that many clients expect a more active, structured and practical approach, and a mismatch can lead to premature termination. Culturally responsive planning asks the client what she expects and adapts methods, such as concrete tasks and clear structure, to fit.',
    references: [
      { source: 'Sue & Sue (Counseling the Culturally Diverse)', detail: 'Culture-bound counseling values; client expectations for structure, directiveness and concrete help' },
    ],
  },
  {
    ...base,
    id: 'nce-s-t27f-007',
    cacrep: 'assessment',
    topic: T7,
    difficulty: 'hard',
    stem: 'Reviewing her record with her counselor, a client asks why her diagnosis reads “other specified depressive disorder (recurrent brief depression)” rather than major depressive disorder. Which explanation is MOST accurate?',
    options: [
      { id: 'a', text: 'Her symptoms are too mild to be treated or billed to her insurer', isCorrect: false, rationale: 'An other specified diagnosis is a clinically significant disorder that can be treated; it does not mean symptoms are too mild for care.' },
      { id: 'b', text: 'Her episodes are impairing but too brief to meet MDD criteria', isCorrect: true, rationale: 'Recurrent brief depression involves depressive episodes lasting 2–13 days, which fall short of the two-week MDD duration.' },
      { id: 'c', text: 'The counselor has not yet decided which depressive disorder fits', isCorrect: false, rationale: 'This describes a provisional diagnosis or the unspecified category, not an other specified diagnosis with a named reason.' },
    ],
    rationale: 'DSM-5-TR uses "other specified" when symptoms cause clinically significant distress or impairment but do not meet full criteria for a specific disorder, and the clinician records the specific reason. Recurrent brief depression is one listed example: depressed mood with at least four other depressive symptoms lasting 2–13 days, at least once a month for at least 12 consecutive months. "Unspecified" is used when the clinician chooses not to state the reason.',
    references: [
      { source: 'DSM-5-TR', detail: 'Other Specified Depressive Disorder — recurrent brief depression; other specified vs unspecified categories' },
    ],
  },
  {
    ...base,
    id: 'nce-s-t27f-008',
    cacrep: 'helping_relationships',
    topic: T8,
    difficulty: 'hard',
    stem: 'Tariq, 23, asks to receive counseling only by video. Two weeks ago he was discharged from a hospital after a suicide attempt. He lives alone, has no local supports, and says he often turns his camera off when he is upset. What should the counselor do FIRST?',
    options: [
      { id: 'a', text: 'Assess whether video alone is safe or in-person care is needed', isCorrect: true, rationale: 'His recent attempt, isolation and pattern of disengaging on camera may make video-only care unsuitable without more support.' },
      { id: 'b', text: 'Begin weekly video sessions as he asked, with a no-harm contract', isCorrect: false, rationale: 'No-harm contracts are not an effective safety intervention, and starting as requested skips the suitability assessment.' },
      { id: 'c', text: 'Start telehealth and ask him to keep his camera on in sessions', isCorrect: false, rationale: 'A camera rule does not address his acute risk, lack of local supports or the need for an emergency plan.' },
    ],
    rationale: 'A treatment modality can be contraindicated for a particular client. Before relying on distance counseling, counselors judge whether it is appropriate given risk, supports and the client\'s ability to engage, and plan for emergencies at the client\'s location. For a recently hospitalized, isolated client, in-person or more intensive care, a collaborative safety plan and lethal means counseling may be needed first.',
    references: [
      { source: 'ACA Code of Ethics', detail: 'H.4.c (application appropriate for the client\'s needs); H.4.d Effectiveness of Services (consider face-to-face); H.2.a (emergency procedures)' },
      { source: 'Stanley-Brown SPI', detail: 'Collaborative safety planning after a suicide attempt, including means safety' },
    ],
  },
  {
    ...base,
    id: 'nce-s-t27f-009',
    cacrep: 'helping_relationships',
    topic: T9,
    difficulty: 'medium',
    stem: 'Sgt. Alvarez, 38, has PTSD after a convoy attack. His counselor is trained in both prolonged exposure and cognitive processing therapy, and Alvarez is unsure which to choose. Which approach to setting his treatment goals and methods is MOST consistent with collaborative planning?',
    options: [
      { id: 'a', text: 'Assign the therapy the counselor personally prefers to deliver', isCorrect: false, rationale: 'Choosing for him based on the counselor\'s preference leaves out his values and lowers his ownership of the plan.' },
      { id: 'b', text: 'Postpone goal setting until he chooses a therapy on his own time', isCorrect: false, rationale: 'Leaving him to decide alone withholds the information and support he needs to make an informed choice.' },
      { id: 'c', text: 'Explain what each option involves and decide on one with him', isCorrect: true, rationale: 'Shared decision-making gives him the facts about each approach and makes the choice a joint one.' },
    ],
    rationale: 'When more than one evidence-based treatment fits, shared decision-making means the counselor explains each option, including its demands, and the client weighs it against his own preferences and goals. The VA/DoD PTSD guideline recommends shared decision-making and lists both prolonged exposure and cognitive processing therapy among first-line trauma-focused psychotherapies. Joint choices strengthen the working alliance and engagement.',
    references: [
      { source: 'VA/DoD CPG', detail: 'PTSD guideline — shared decision-making; PE and CPT as recommended trauma-focused psychotherapies' },
    ],
  },
  {
    ...base,
    id: 'nce-s-t27f-010',
    cacrep: 'helping_relationships',
    topic: T10,
    difficulty: 'medium',
    stem: 'Lena has been seen individually for depression for three months. She now asks whether her husband can join her sessions so they can work on their frequent arguments. Before revising the plan to include conjoint sessions, what should the counselor do?',
    options: [
      { id: 'a', text: 'Add him at the next session and keep the current individual plan', isCorrect: false, rationale: 'Adding a partner changes the nature of treatment; leaving the individual plan unchanged ignores the new roles and goals.' },
      { id: 'b', text: 'Clarify who the client is and how confidentiality will work', isCorrect: true, rationale: 'Before shifting to conjoint work, roles, confidentiality and possible conflicts are discussed and agreed to.' },
      { id: 'c', text: 'Decline, since individual and couples counseling cannot be mixed', isCorrect: false, rationale: 'Adding conjoint sessions can be appropriate when roles are clarified; a flat refusal is not required.' },
    ],
    rationale: 'When a plan is revised to include more than one person, counselors clarify at the outset who is the client and the nature of the relationship with each person. They also explain how information shared individually and jointly will be handled. If roles become conflicting, the counselor may adjust or refer, and the revised goals are agreed with everyone involved.',
    references: [
      { source: 'ACA Code of Ethics', detail: 'A.8 Multiple Clients; B.4.b Couples and Family Counseling (confidentiality)' },
    ],
  },
  {
    ...base,
    id: 'nce-s-t27f-011',
    cacrep: 'helping_relationships',
    topic: T11,
    difficulty: 'easy',
    stem: 'A behavior plan for Eli, 7, who spits at classmates, gives him a sticker at the end of every 10-minute period in which no spitting occurs. This procedure is BEST described as:',
    options: [
      { id: 'a', text: 'Differential reinforcement of other behavior', isCorrect: true, rationale: 'DRO reinforces the absence of the target behavior during a set interval.' },
      { id: 'b', text: 'Differential reinforcement of alternative behavior', isCorrect: false, rationale: 'DRA reinforces a specific replacement behavior, such as asking for a turn; here the reward depends only on no spitting.' },
      { id: 'c', text: 'Negative reinforcement of a desired behavior', isCorrect: false, rationale: 'Negative reinforcement removes an aversive stimulus; a sticker is added, so this is positive reinforcement.' },
    ],
    rationale: 'Differential reinforcement of other behavior (DRO) delivers reinforcement when the problem behavior has not occurred for a specified interval. It differs from DRA, which reinforces a named replacement behavior, and DRI, which reinforces a behavior physically incompatible with the target. Interval length is usually set short at first and lengthened as the child succeeds.',
    references: [
      { source: 'Corey (Theory & Practice)', detail: 'Behavior therapy — operant techniques and reinforcement procedures' },
    ],
  },
  {
    ...base,
    id: 'nce-s-t27f-012',
    cacrep: 'helping_relationships',
    topic: T11,
    difficulty: 'medium',
    stem: 'A counselor is drafting a behavior contract with Nia, 15, and her parents to reduce curfew violations. Which feature is MOST likely to make the contract effective?',
    options: [
      { id: 'a', text: 'Consequences chosen by her parents and kept private until needed', isCorrect: false, rationale: 'Hidden consequences remove the predictability that makes a contract work and undercut Nia\'s buy-in.' },
      { id: 'b', text: 'A broad commitment from Nia to show more respect at home', isCorrect: false, rationale: 'A vague commitment gives no observable behavior to track and no clear basis for rewards.' },
      { id: 'c', text: 'Specific terms and rewards that Nia helps choose and agrees to', isCorrect: true, rationale: 'Clear behaviors and rewards she helped select increase both clarity and motivation to follow through.' },
    ],
    rationale: 'Behavioral (contingency) contracts work best when target behaviors are specific and observable, reinforcers are meaningful to the client, consequences are stated in advance, and all parties negotiate and sign the agreement. Involving an adolescent in choosing terms increases ownership and reduces power struggles. Contracts also include a date for review.',
    references: [
      { source: 'Corey (Theory & Practice)', detail: 'Behavior therapy — contingency contracts and client participation in goal setting' },
    ],
  },
  {
    ...base,
    id: 'nce-s-t27f-013',
    cacrep: 'helping_relationships',
    topic: T12,
    difficulty: 'easy',
    stem: 'During a parent meeting about her 8-year-old son\'s anxiety treatment, Ms. Okafor tearfully says she has felt hopeless for months and can barely get out of bed. She denies any suicidal thoughts. What is the counselor\'s MOST appropriate response?',
    options: [
      { id: 'a', text: 'Shift the son\'s sessions to focus on his mother\'s depression', isCorrect: false, rationale: 'Using the child\'s treatment time for the parent\'s depression blurs roles and shortchanges the identified client.' },
      { id: 'b', text: 'Offer her referrals for her own assessment and treatment', isCorrect: true, rationale: 'A parent\'s depression deserves its own care; referral supports her and, indirectly, her son\'s progress.' },
      { id: 'c', text: 'Tell her to wait until her son finishes his own treatment', isCorrect: false, rationale: 'Delaying care for months of hopelessness is not warranted and may worsen her symptoms and the family climate.' },
    ],
    rationale: 'Family members of clients sometimes reveal needs of their own. Rather than treating a parent inside the child\'s sessions, the counselor validates the concern, briefly checks safety, and connects the parent with appropriate services. Parental depression affects child outcomes, so getting the parent help also supports the child\'s treatment plan.',
    references: [
      { source: 'ACA Code of Ethics', detail: 'A.1.a Primary Responsibility (client welfare); A.8 Multiple Clients (clarifying roles)' },
      { source: 'Goldenberg (Family Therapy)', detail: 'Family systems view — parental functioning affects the child' },
    ],
  },
  {
    ...base,
    id: 'nce-s-t27f-014',
    cacrep: 'helping_relationships',
    topic: T12,
    difficulty: 'medium',
    stem: 'The parents of Andre, 22, who has schizophrenia and lives with them, say they feel lost and argue about how to respond to his symptoms. Andre consents to their involvement. Which referral BEST matches evidence-based care for the family?',
    options: [
      { id: 'a', text: 'A family psychoeducation program focused on schizophrenia', isCorrect: true, rationale: 'Family interventions that teach about the illness, problem solving and communication are recommended in schizophrenia care.' },
      { id: 'b', text: 'Individual psychodynamic therapy for each parent separately', isCorrect: false, rationale: 'Separate insight-oriented therapy does not target their knowledge of the illness or how they respond to Andre together.' },
      { id: 'c', text: 'A parenting class designed for parents of young children', isCorrect: false, rationale: 'A general early-childhood parenting class does not address an adult son\'s psychotic disorder.' },
    ],
    rationale: 'Families who live with a person with schizophrenia benefit from structured family interventions that combine education about the illness, coping and problem-solving skills, and communication training. The American Psychiatric Association\'s schizophrenia guideline recommends family interventions for patients who have ongoing contact with family. Referral with the client\'s consent supports both the family and his recovery.',
    references: [
      { source: 'APA Practice Guidelines (Psychiatric)', detail: 'Treatment of Patients With Schizophrenia (2020) — family interventions for patients with ongoing family contact' },
    ],
  },
  {
    ...base,
    id: 'nce-s-t27f-015',
    cacrep: 'helping_relationships',
    topic: T13,
    difficulty: 'hard',
    stem: 'Kendra, 30, is completing 30 days of residential treatment for opioid use disorder and has decided not to start medication. Which aftercare element MOST directly reduces her risk of fatal overdose if she returns to use?',
    options: [
      { id: 'a', text: 'A sponsor\'s phone number and a list of local meeting times', isCorrect: false, rationale: 'Mutual-help support aids recovery but does not directly prevent death if an overdose occurs.' },
      { id: 'b', text: 'A referral to weekly outpatient group counseling sessions', isCorrect: false, rationale: 'Continuing care is valuable, but it is not the element that most directly addresses overdose lethality.' },
      { id: 'c', text: 'Naloxone in hand and education on her lowered tolerance', isCorrect: true, rationale: 'After a period of abstinence tolerance drops, so a return to prior doses is especially dangerous; naloxone can reverse an overdose.' },
    ],
    rationale: 'Leaving residential treatment or incarceration is a period of high overdose risk because opioid tolerance falls during abstinence. Aftercare plans for opioid use disorder include overdose education and naloxone for the client and those around her, along with continuing care. Medication for opioid use disorder should remain available to her if she reconsiders.',
    references: [
      { source: 'SAMHSA TIP 63', detail: 'Overdose risk after loss of tolerance; overdose education and naloxone' },
    ],
  },
  {
    ...base,
    id: 'nce-s-t27f-016',
    cacrep: 'professional_orientation',
    topic: T13,
    difficulty: 'medium',
    stem: 'A residential substance use disorder program covered by 42 CFR Part 2 wants to send a client\'s aftercare plan to the outpatient counselor who will see him next week. What is required before the program discloses this information?',
    options: [
      { id: 'a', text: 'The client\'s written consent meeting Part 2 requirements', isCorrect: true, rationale: 'Part 2 records generally require the patient\'s written consent before disclosure, including for treatment purposes.' },
      { id: 'b', text: 'Only a verbal agreement noted by staff in the client\'s chart', isCorrect: false, rationale: 'Part 2 consent must be written and contain required elements; a verbal agreement does not suffice.' },
      { id: 'c', text: 'Nothing, since providers may share any records for treatment', isCorrect: false, rationale: 'That reflects HIPAA\'s treatment provision; Part 2 adds stricter consent rules for SUD program records.' },
    ],
    rationale: 'Records from federally assisted substance use disorder programs are protected by 42 CFR Part 2, which requires written patient consent for most disclosures. Under the 2024 final rule, a patient may sign a single consent covering future uses and disclosures for treatment, payment and health care operations. Without valid consent, the aftercare plan cannot be sent, even to a treating provider.',
    references: [
      { source: '42 CFR Part 2', detail: 'Written consent required for disclosure; 2024 final rule — single consent for future treatment, payment and health care operations' },
    ],
  },
  {
    ...base,
    id: 'nce-s-t27f-017',
    cacrep: 'helping_relationships',
    topic: T14,
    difficulty: 'easy',
    stem: 'Parent training has reduced 6-year-old Leo\'s aggressive outbursts, and counseling is ending. Which plan will MOST help maintain his progress?',
    options: [
      { id: 'a', text: 'Stopping all praise now that the behavior has improved', isCorrect: false, rationale: 'Abruptly removing reinforcement can lead the gains to fade and outbursts to return.' },
      { id: 'b', text: 'Parents keeping praise going and fading rewards gradually', isCorrect: true, rationale: 'Ongoing social reinforcement with gradual thinning of tangible rewards helps behavior persist after treatment.' },
      { id: 'c', text: 'Rewarding Leo daily with a toy for the next several years', isCorrect: false, rationale: 'Continuous tangible rewards are impractical and make behavior fragile when they stop.' },
    ],
    rationale: 'Gains made through behavioral parent training are maintained when parents keep using the skills they learned. Natural reinforcers such as praise continue, while tangible rewards are faded to an intermittent schedule, which makes behavior more resistant to extinction. Discussing this plan before ending helps parents sustain progress on their own.',
    references: [
      { source: 'Corey (Theory & Practice)', detail: 'Behavior therapy — maintenance and generalization; schedules of reinforcement' },
    ],
  },
  {
    ...base,
    id: 'nce-s-t27f-018',
    cacrep: 'helping_relationships',
    topic: T14,
    difficulty: 'medium',
    stem: 'Near the end of grief counseling, Graciela, 58, mentions that the first anniversary of her husband\'s death falls two months after their final session. How can the counselor BEST help her maintain progress?',
    options: [
      { id: 'a', text: 'Schedule weekly sessions to continue until the anniversary passes', isCorrect: false, rationale: 'Extending weekly care by default suggests she cannot cope on her own and is not based on her current need.' },
      { id: 'b', text: 'Advise her to keep busy so the date passes without much notice', isCorrect: false, rationale: 'Encouraging avoidance of the date can intensify grief reactions rather than support adaptive coping.' },
      { id: 'c', text: 'Plan with her how she will mark the day and whom she can lean on', isCorrect: true, rationale: 'Anticipating the anniversary with a plan for meaning and support prepares her to cope with a predictable surge in grief.' },
    ],
    rationale: 'Anniversaries, holidays and other significant dates often bring temporary surges of grief. Worden recommends anticipating these times and helping mourners plan how they will spend them and whom they will turn to. Maintenance planning before termination prepares the client for predictable stressors without assuming she will need more counseling.',
    references: [
      { source: 'Worden (Grief Counseling)', detail: 'Anniversary reactions — anticipating difficult dates and planning support' },
    ],
  },
  {
    ...base,
    id: 'nce-s-t27f-019',
    cacrep: 'professional_orientation',
    topic: T15,
    difficulty: 'medium',
    stem: 'A client\'s former partner has repeatedly threatened the counselor in person and online because of the counseling, and police are involved. After consultation, the counselor decides to end services. Under the ACA Code of Ethics, what should the discharge plan include?',
    options: [
      { id: 'a', text: 'An immediate end to services with no further client contact', isCorrect: false, rationale: 'Ending abruptly without referrals leaves the client without care and risks abandonment.' },
      { id: 'b', text: 'Pretermination counseling as feasible and referrals to others', isCorrect: true, rationale: 'The Code permits ending services under threat while still providing pretermination counseling and referrals when needed.' },
      { id: 'c', text: 'Continued sessions, because threats are not grounds for ending', isCorrect: false, rationale: 'The Code expressly allows termination when the counselor is in jeopardy of harm from a person connected to the client.' },
    ],
    rationale: 'The ACA Code allows counselors to terminate when they are in jeopardy of harm by the client or by another person with whom the client has a relationship. Even then, counselors provide pretermination counseling and recommend other service providers when necessary. The discharge plan protects the counselor\'s safety while ensuring the client is not abandoned.',
    references: [
      { source: 'ACA Code of Ethics', detail: 'A.11.c Appropriate Termination — jeopardy of harm; pretermination counseling and referral' },
    ],
  },
  {
    ...base,
    id: 'nce-s-t27f-020',
    cacrep: 'helping_relationships',
    topic: T15,
    difficulty: 'easy',
    stem: 'Paul, 45, has an intellectual disability and a court-appointed guardian with authority over his health care decisions. He is ready to be discharged from a day program. How should the discharge plan be developed?',
    options: [
      { id: 'a', text: 'With Paul taking part and his guardian consenting to the plan', isCorrect: true, rationale: 'Paul is involved to the extent he is able, and the guardian provides legal consent.' },
      { id: 'b', text: 'By staff alone, since Paul cannot make decisions for himself', isCorrect: false, rationale: 'Excluding Paul ignores his right to participate and leaves out the person with legal authority.' },
      { id: 'c', text: 'With Paul only, because a guardian\'s role ends at discharge', isCorrect: false, rationale: 'Guardianship does not end with a discharge; the guardian\'s consent is still required for health care decisions.' },
    ],
    rationale: 'When a client lacks legal capacity for certain decisions, counselors seek the client\'s assent and involve him in decisions as far as possible while obtaining consent from the legally authorized person. Discharge planning for Paul therefore includes his preferences and the guardian\'s consent. Plans are written in language Paul can understand.',
    references: [
      { source: 'ACA Code of Ethics', detail: 'A.2.d Inability to Give Consent' },
    ],
  },
  {
    ...base,
    id: 'nce-s-t27f-021',
    cacrep: 'helping_relationships',
    topic: T16,
    difficulty: 'easy',
    stem: 'Most of Derek\'s high-risk situations for drinking involve coworkers urging him to join them at happy hour. Which relapse prevention skill BEST targets this situation?',
    options: [
      { id: 'a', text: 'Daily journaling about his childhood family history', isCorrect: false, rationale: 'Exploring family history may have value, but it does not give him a skill for the moment of social pressure.' },
      { id: 'b', text: 'Progressive muscle relaxation before going to sleep', isCorrect: false, rationale: 'Relaxation at bedtime targets tension, not the interpersonal pressure he faces after work.' },
      { id: 'c', text: 'Rehearsing drink-refusal responses through role-play', isCorrect: true, rationale: 'Refusal skills practiced in session prepare him to respond to social pressure in the real situation.' },
    ],
    rationale: 'Marlatt\'s model identifies social pressure as a common high-risk situation for relapse. Relapse prevention plans match coping skills to the client\'s specific high-risk situations; for direct offers and urging, that means rehearsing refusal statements and exit plans. Successful coping raises self-efficacy and lowers the chance of a lapse.',
    references: [
      { source: 'Marlatt & Donovan (Relapse Prevention)', detail: 'High-risk situations — social pressure; coping skills training including drink refusal' },
    ],
  },
  {
    ...base,
    id: 'nce-s-t27f-022',
    cacrep: 'helping_relationships',
    topic: T16,
    difficulty: 'medium',
    stem: 'Hannah, 47, is in remission after her fourth episode of major depressive disorder and worries about another recurrence. Which intervention is BEST supported for preventing depressive relapse in clients like Hannah?',
    options: [
      { id: 'a', text: 'Unstructured supportive check-ins held only during crises', isCorrect: false, rationale: 'Crisis-only contact lacks the skills training shown to reduce relapse.' },
      { id: 'b', text: 'Mindfulness-based cognitive therapy in a group format', isCorrect: true, rationale: 'Group MBCT was developed for relapse prevention and is among NICE\'s options for people in remission at higher risk of relapse.' },
      { id: 'c', text: 'Critical incident debriefing after each stressful event', isCorrect: false, rationale: 'Debriefing was designed for traumatic incidents and is not a relapse-prevention treatment for depression.' },
    ],
    rationale: 'Mindfulness-based cognitive therapy teaches people with recurrent depression to notice early negative thinking and mood shifts and relate to them differently, reducing the risk of relapse. NICE guidance (NG222) lists group CBT and group MBCT among the psychological interventions to consider for relapse prevention in adults whose depression is in remission and who are at higher risk of relapse. Plans may also include early-warning signs and continuation of effective treatments.',
    references: [
      { source: 'NICE guidelines', detail: 'Depression in adults (NG222) — relapse prevention for people at higher risk: options to consider include group CBT and group MBCT' },
    ],
  },
  {
    ...base,
    id: 'nce-s-t27f-023',
    cacrep: 'professional_orientation',
    topic: T17,
    difficulty: 'easy',
    stem: 'A counselor at a community agency has accepted a new job and will leave in six weeks. Agency policy states that clients remain with the agency. Several of her clients are mid-treatment. What is the MOST appropriate plan?',
    options: [
      { id: 'a', text: 'Tell clients in her final week so they are not upset too early', isCorrect: false, rationale: 'Late notice gives clients little time to process the change or meet a new counselor, risking a gap in care.' },
      { id: 'b', text: 'Invite her clients to follow her to her new private practice', isCorrect: false, rationale: 'Soliciting agency clients conflicts with agency policy and puts the counselor\'s interests ahead of clients\'.' },
      { id: 'c', text: 'Inform clients soon and arrange transfers to agency colleagues', isCorrect: true, rationale: 'Early notice and planned transfers protect continuity of care and follow agency policy.' },
    ],
    rationale: 'A counselor\'s departure is a foreseeable disruption of service. Ethical practice calls for timely notice, discussion of clients\' reactions, and a planned transfer that keeps lines of communication open with the receiving counselor. Leaving without adequate arrangements risks client abandonment.',
    references: [
      { source: 'ACA Code of Ethics', detail: 'A.11.d Appropriate Transfer of Services; A.12 Abandonment and Client Neglect' },
    ],
  },
  {
    ...base,
    id: 'nce-s-t27f-024',
    cacrep: 'professional_orientation',
    topic: T17,
    difficulty: 'hard',
    stem: 'Aisha, 20, sees a U.S. counselor for recurrent depression. She will spend next semester studying in Spain and asks to continue video sessions from there. What should the counselor do FIRST in planning for this disruption?',
    options: [
      { id: 'a', text: 'Check the legal and policy limits and plan local supports abroad', isCorrect: true, rationale: 'Distance counseling is subject to laws where the client is located, and she needs local crisis and care options either way.' },
      { id: 'b', text: 'Agree to continue as usual, since her U.S. records are on file', isCorrect: false, rationale: 'Where records are kept does not determine whether the counselor may lawfully serve a client in another country.' },
      { id: 'c', text: 'End services now and tell her to find help once she returns', isCorrect: false, rationale: 'Ending care without a transition plan leaves a client with recurrent depression unsupported for months.' },
    ],
    rationale: 'Counselors who provide technology-assisted services must understand that they may be subject to the laws of both their own location and the client\'s location. Before a client relocates abroad, the counselor checks what is permitted by the licensing board, the other country and any employer or insurer policy, and builds a plan for local crisis resources and care. The Counseling Compact offers privileges only in U.S. member states, so it does not cover practice abroad.',
    references: [
      { source: 'ACA Code of Ethics', detail: 'H.1.b Laws and Statutes — counselor and client locations' },
      { source: 'Counseling Compact', detail: 'Privilege to practice applies only in member states' },
    ],
  },
  {
    ...base,
    id: 'nce-s-t27f-025',
    cacrep: 'research',
    topic: T18,
    difficulty: 'easy',
    stem: 'At intake, a counselor and client defined five outcome levels for each goal, from much less than expected (−2) to much more than expected (+2). At each planned review they rate where the client stands. This method is called:',
    options: [
      { id: 'a', text: 'Single-subject reversal design', isCorrect: false, rationale: 'A reversal (ABAB) design withdraws and reintroduces treatment; it is not a goal-rating method.' },
      { id: 'b', text: 'Goal attainment scaling', isCorrect: true, rationale: 'GAS uses individualized, client-specific outcome levels, typically from −2 to +2, to rate progress on each goal.' },
      { id: 'c', text: 'Reliable change indexing', isCorrect: false, rationale: 'The reliable change index tests whether score change on a standardized measure exceeds measurement error.' },
    ],
    rationale: 'Goal attainment scaling, developed by Kiresuk and Sherman, defines a graded set of outcomes for each individualized goal, with 0 as the expected level. At planned reviews the counselor and client rate attainment, which makes progress concrete and keeps the client involved. Scores can also be combined across goals to summarize overall progress.',
    references: [
      { source: 'Erford (Research and Evaluation in Counseling)', detail: 'Outcome and program evaluation — goal attainment scaling (Kiresuk & Sherman): individualized −2 to +2 outcome levels' },
    ],
  },
  {
    ...base,
    id: 'nce-s-t27f-026',
    cacrep: 'professional_orientation',
    topic: T18,
    difficulty: 'medium',
    stem: 'Before a planned 90-day review, a counselor uses an AI tool approved by her practice to summarize a client\'s progress across session notes. How should the counselor use the summary?',
    options: [
      { id: 'a', text: 'Paste it into the record as the official progress review', isCorrect: false, rationale: 'An unverified AI summary may contain errors, and a progress review is done with the client, not by software.' },
      { id: 'b', text: 'Email it to the client so she can review it on her own first', isCorrect: false, rationale: 'Sending it unreviewed risks sharing errors and replaces the joint review with a one-way document.' },
      { id: 'c', text: 'Verify it against the record, then review progress with her', isCorrect: true, rationale: 'The counselor remains responsible for accuracy and uses the summary only as a starting point for the joint review.' },
    ],
    rationale: 'AI tools can help organize documentation, but the counselor is responsible for the accuracy of anything entered in the record and for clinical judgments. Any vendor handling client information must meet HIPAA safeguards, typically under a business associate agreement. Planned progress reviews remain a collaborative conversation with the client about goals, data and next steps.',
    references: [
      { source: 'HIPAA', detail: 'Security Rule safeguards for ePHI; business associate agreements with technology vendors' },
      { source: 'Wiger (Documentation)', detail: 'Accuracy of clinical records; periodic treatment plan reviews with the client' },
    ],
  },
  {
    ...base,
    id: 'nce-s-t27f-027',
    cacrep: 'assessment',
    topic: T19,
    difficulty: 'medium',
    stem: 'Over 12 weeks of treatment, a client\'s PHQ-9 score fell from 20 to 9. Using common outcome definitions in depression treatment, how is this result BEST described?',
    options: [
      { id: 'a', text: 'Treatment response, but not yet remission', isCorrect: true, rationale: 'A drop of more than 50% from baseline meets the usual definition of response, but 9 is above the remission cutoff of under 5.' },
      { id: 'b', text: 'Full remission of the depressive episode', isCorrect: false, rationale: 'Remission on the PHQ-9 is commonly defined as a score below 5; a score of 9 still reflects mild symptoms.' },
      { id: 'c', text: 'No meaningful response to the treatment', isCorrect: false, rationale: 'An 11-point, 55% reduction is a substantial change, not a lack of response.' },
    ],
    rationale: 'Depression outcomes are commonly classified as response (at least a 50% reduction in symptom score from baseline) and remission (minimal symptoms; on the PHQ-9, a score below 5). This client has responded but has residual symptoms, which raise relapse risk. The counselor discusses continuing or adjusting treatment toward remission.',
    references: [
      { source: 'APA Practice Guidelines (Psychiatric)', detail: 'Treatment of Patients With Major Depressive Disorder (3rd ed., 2010) — response (≥50% symptom reduction) vs remission (minimal or no symptoms)' },
      { source: 'Hays (Assessment)', detail: 'PHQ-9 severity bands (0–4 minimal, 5–9 mild); score <5 commonly used as the remission threshold' },
    ],
  },
  {
    ...base,
    id: 'nce-s-t27f-028',
    cacrep: 'assessment',
    topic: T19,
    difficulty: 'hard',
    stem: 'Outcome monitoring software flags Marisol as “not on track” after her fourth session: her scores have worsened more than expected for clients who started at her level. She says counseling is going “okay.” What should the counselor do NEXT?',
    options: [
      { id: 'a', text: 'Wait until session 12 to see if her scores begin to improve', isCorrect: false, rationale: 'Early off-track signals predict poor outcomes; waiting forfeits the chance to change course.' },
      { id: 'b', text: 'Raise the alert with her and explore the alliance and stressors', isCorrect: true, rationale: 'Discussing the feedback openly and checking the alliance, motivation and life stressors is the recommended response to a not-on-track alert.' },
      { id: 'c', text: 'Rely on her verbal report since she says sessions are going okay', isCorrect: false, rationale: 'Research shows clinicians and clients often miss deterioration; the measured signal should not be dismissed.' },
    ],
    rationale: 'Routine outcome monitoring compares a client\'s progress with expected recovery curves and flags those at risk of treatment failure. Lambert\'s clinical support tools direct the counselor to review the alliance, the client\'s motivation and readiness, social supports and the need for referral or medication evaluation, and to discuss the feedback with the client. Acting on these alerts reduces deterioration and dropout.',
    references: [
      { source: 'Lambert (Outcome Monitoring)', detail: 'Not-on-track feedback and clinical support tools (alliance, motivation, social support)' },
    ],
  },
  {
    ...base,
    id: 'nce-s-t27f-029',
    cacrep: 'helping_relationships',
    topic: T20,
    difficulty: 'easy',
    stem: 'The parents of Sofia, 9, who has separation anxiety disorder, say counseling can end "when she\'s back to normal." Which approach to setting termination criteria is BEST?',
    options: [
      { id: 'a', text: 'Let the parents decide when she is back to normal', isCorrect: false, rationale: 'A vague standard set by the parents alone leaves Sofia out and gives no shared, observable endpoint.' },
      { id: 'b', text: 'End when Sofia says she no longer feels any fear', isCorrect: false, rationale: 'Some anxiety is normal; requiring zero fear sets an unrealistic, unmeasurable criterion.' },
      { id: 'c', text: 'Agree with Sofia and parents on observable signs', isCorrect: true, rationale: 'Concrete signs, such as attending school without calls home, give everyone a shared and measurable endpoint.' },
    ],
    rationale: 'Termination criteria work best when they are stated in observable terms and agreed on by everyone involved, including a child at her developmental level. Examples for separation anxiety include sleeping in her own bed and attending school without distress calls for a set period. Clear criteria make it easier to recognize when goals are met.',
    references: [
      { source: 'Wiger (Documentation)', detail: 'Discharge criteria stated in behavioral, measurable terms' },
    ],
  },
  {
    ...base,
    id: 'nce-s-t27f-030',
    cacrep: 'helping_relationships',
    topic: T20,
    difficulty: 'medium',
    stem: 'Jada, 17, is in outpatient treatment for anorexia nervosa with a counselor, a physician and a dietitian. As she and the counselor set termination criteria for counseling, which criterion is MOST appropriate?',
    options: [
      { id: 'a', text: 'Sustained eating changes plus her physician\'s medical clearance', isCorrect: true, rationale: 'Combining lasting behavioral change with medical stability reflects the team-based nature of eating disorder care.' },
      { id: 'b', text: 'Reaching a goal weight once, as weighed in the counselor\'s office', isCorrect: false, rationale: 'A single weight reading is not sustained recovery, and weight monitoring belongs with the medical team.' },
      { id: 'c', text: 'Her report that she no longer thinks about food or her weight', isCorrect: false, rationale: 'An all-or-nothing self-report standard is unrealistic and does not reflect medical or behavioral stability.' },
    ],
    rationale: 'Eating disorder treatment is typically delivered by a multidisciplinary team, so counseling termination criteria are coordinated with medical and nutritional status. Useful criteria combine sustained behavioral change, such as regular eating without compensatory behaviors, with medical stability confirmed by the physician. Criteria are agreed on with the adolescent and, as appropriate, her family.',
    references: [
      { source: 'APA Practice Guidelines (Psychiatric)', detail: 'Treatment of Patients With Eating Disorders (4th ed., 2023) — plan integrating medical, psychological and nutritional expertise via a coordinated multidisciplinary team' },
    ],
  },
];
