// tools/nce/seed/2027-indirect-6.js — 2027 NCE: Indirect Care (24 original items)
const T1 = 'Collaborate with client\'s relevant support systems (e.g., advocate, family, wraparound services, legal services) with goals and objectives';
const T2 = 'Collaborate with non-clinical stakeholders (e.g., legal counselor, community resources)';
const T3 = 'Collaborate with other treatment providers (e.g., care coordination, interdisciplinary treatment team)';
const T4 = 'Document the self-reported effects of client\'s medication';
const T5 = 'Maintain an updated list of referral resources';
const T6 = 'Review clinical documentation before client sessions';
const T7 = 'Secure appropriate translation services for clients\' preferred language';
const T8 = 'Write clinical documentation during or after client sessions';

module.exports = [
  // ---- T1: support systems ------------------------------------------------
  {
    id: 'nce-s-x27f-001',
    spec: '2027',
    domain: 'indirect_care',
    cacrep: 'professional_orientation',
    topic: T1,
    difficulty: 'medium',
    stem: 'A 31-year-old client with an intellectual disability lives in a group home. A court has appointed his sister as his full (plenary) guardian. At the first treatment-planning meeting, the sister asks to set his counseling goals herself. What is the counselor\'s BEST approach?',
    options: [
      { id: 'a', text: 'Obtain the guardian\'s consent while involving him in the goals', isCorrect: true, rationale: 'The guardian holds legal consent authority, but the counselor still seeks the client\'s assent and includes him in choosing goals to the extent he is able.' },
      { id: 'b', text: 'Have him sign the plan himself because it is his own treatment', isCorrect: false, rationale: 'Under a plenary guardianship the client generally lacks legal authority to consent; bypassing the guardian ignores the court order.' },
      { id: 'c', text: 'Let the guardian choose the goals because she holds legal authority', isCorrect: false, rationale: 'Legal authority to consent does not remove the counselor\'s duty to seek the client\'s assent and include him in decisions.' },
    ],
    rationale: 'When a client cannot give legally valid consent, the ACA Code directs counselors to seek the client\'s assent and include the client in decision making as appropriate, while respecting the legal rights of those authorized to consent. Collaborating with a guardian therefore means pairing the guardian\'s consent with the client\'s own voice in goal-setting. The scope of a guardian\'s authority depends on the specific court order and state law, so the counselor reviews the order.',
    references: [
      { source: 'ACA Code of Ethics', detail: 'Section A.2.d — inability to give consent: seek assent and include clients in decision making as appropriate' },
    ],
  },
  {
    id: 'nce-s-x27f-002',
    spec: '2027',
    domain: 'indirect_care',
    cacrep: 'professional_orientation',
    topic: T1,
    difficulty: 'hard',
    stem: 'A 44-year-old client with bipolar I disorder is currently stable. She wants to be sure that during a future manic episode her partner can speak for her treatment preferences, including which hospital she prefers and which medications have helped. Which collaborative step BEST supports this goal?',
    options: [
      { id: 'a', text: 'Ask her partner to co-sign her treatment plan as a co-decision maker', isCorrect: false, rationale: 'Co-signing a counseling treatment plan gives the partner no legal authority to speak for her in a future crisis.' },
      { id: 'b', text: 'Write a chart note that her partner may approve any future treatment', isCorrect: false, rationale: 'A counselor\'s chart note is not a legal instrument and cannot grant decision-making authority to another person.' },
      { id: 'c', text: 'Help her explore a psychiatric advance directive naming her partner', isCorrect: true, rationale: 'A psychiatric advance directive lets a person with capacity record treatment preferences and, where state law allows, name an agent for future crises.' },
    ],
    rationale: 'Psychiatric advance directives allow people with episodic conditions to document treatment preferences while they have capacity and, in many states, to appoint a health care agent who can speak for them during a crisis. The counselor supports the client\'s self-determination by helping her explore this option and, with her consent, sharing the directive with her support person and providers. Execution requirements and agent authority vary, so the client should check state law and may need legal help.',
    references: [
      { source: 'State law', detail: 'Psychiatric advance directive statutes — execution requirements and agent authority vary by state' },
      { source: 'ACA Code of Ethics', detail: 'Section A.1.a — client welfare and self-determination in planning' },
    ],
  },
  {
    id: 'nce-s-x27f-003',
    spec: '2027',
    domain: 'indirect_care',
    cacrep: 'helping_relationships',
    topic: T1,
    difficulty: 'easy',
    stem: 'With a client\'s written consent, a counselor invites the client\'s two roommates to one session to plan how they can help him keep up his progress in recovering from depression. Which addition to the written treatment plan BEST reflects this collaboration?',
    options: [
      { id: 'a', text: 'A note that both roommates are now co-clients in his treatment', isCorrect: false, rationale: 'Supports who attend a session to help a client do not become clients; their role is collateral.' },
      { id: 'b', text: 'Each roommate\'s agreed role, such as joining him on morning walks', isCorrect: true, rationale: 'Writing each support person\'s specific agreed role into the plan ties their help to the client\'s goals and objectives.' },
      { id: 'c', text: 'A summary of each roommate\'s own mental health history and diagnoses', isCorrect: false, rationale: 'The roommates\' own histories are not part of the client\'s plan and recording them intrudes on their privacy.' },
    ],
    rationale: 'Collaborating with natural supports is most useful when their contributions are linked to the client\'s goals and written as concrete, agreed actions. The plan records who will do what to support each objective, while the client remains the focus of treatment. Supports are collateral participants, not clients, and information about them is limited to what the plan needs.',
    references: [
      { source: 'Wiger (Documentation)', detail: 'Treatment plans — measurable objectives and the roles of collateral supports' },
    ],
  },

  // ---- T2: non-clinical stakeholders -------------------------------------
  {
    id: 'nce-s-x27f-004',
    spec: '2027',
    domain: 'indirect_care',
    cacrep: 'professional_orientation',
    topic: T2,
    difficulty: 'medium',
    stem: 'An immigration attorney representing a client in her asylum case asks the client\'s treating counselor for a letter. The client signs a release and wants the letter written. Which content is MOST appropriate for the treating counselor to include?',
    options: [
      { id: 'a', text: 'An opinion on whether her account of persecution is truthful and credible', isCorrect: false, rationale: 'Judging credibility is a legal or forensic question, not part of a treating counselor\'s role.' },
      { id: 'b', text: 'A recommendation that the court grant her asylum application', isCorrect: false, rationale: 'Advocating a legal outcome exceeds the treating role and the counselor\'s competence.' },
      { id: 'c', text: 'Her diagnosis, symptoms, and the treatment the counselor has given', isCorrect: true, rationale: 'A treating counselor can factually describe assessment findings and treatment provided, within the scope of the release.' },
    ],
    rationale: 'Treating counselors may provide factual information about diagnosis, symptoms and treatment when a client authorizes it, but they avoid forensic opinions about their own clients. The ACA Code bars counselors from evaluating current or former clients for forensic purposes, and opinions on credibility or legal outcomes belong to forensic evaluators and the court. Keeping the letter within the treating role protects both the client and the integrity of the testimony.',
    references: [
      { source: 'ACA Code of Ethics', detail: 'Section E.13.c — counselors do not evaluate current or former clients for forensic purposes' },
    ],
  },
  {
    id: 'nce-s-x27f-005',
    spec: '2027',
    domain: 'indirect_care',
    cacrep: 'professional_orientation',
    topic: T2,
    difficulty: 'medium',
    stem: 'A mother brings her 9-year-old son for counseling. A few weeks later, the counselor receives a letter from the father\'s attorney demanding that the counseling stop and that the counselor explain the boy\'s progress. The counselor is unsure of her legal obligations. What is her BEST next step?',
    options: [
      { id: 'a', text: 'Consult an attorney or her liability insurer\'s risk-management line', isCorrect: true, rationale: 'When legal obligations are unclear, consulting a qualified attorney or the insurer\'s risk-management service is the appropriate non-clinical resource.' },
      { id: 'b', text: 'End the boy\'s counseling at once to limit her own legal exposure', isCorrect: false, rationale: 'Abruptly ending services to protect herself risks client abandonment and may not be legally required.' },
      { id: 'c', text: 'Reply to the attorney with a summary of the boy\'s progress so far', isCorrect: false, rationale: 'Releasing information to the other parent\'s attorney without verifying legal authority risks an improper disclosure.' },
    ],
    rationale: 'Counselors are not legal experts, and parental rights to consent to or access a child\'s treatment depend on custody orders and state law. The appropriate response to an attorney\'s demand is to consult legal counsel or a risk-management service, review any custody documents, and avoid disclosing information until authority is clear. Consulting before acting, and documenting that consultation, is consistent with ethical decision-making models.',
    references: [
      { source: 'ACA Code of Ethics', detail: 'Section C.2.e — consultation on ethical and legal obligations' },
      { source: 'Forester-Miller & Davis (Practitioner\'s Guide to Ethical Decision Making)', detail: 'Consult with colleagues or appropriate professionals, including legal counsel, before acting' },
    ],
  },
  {
    id: 'nce-s-x27f-006',
    spec: '2027',
    domain: 'indirect_care',
    cacrep: 'professional_orientation',
    topic: T2,
    difficulty: 'easy',
    stem: 'A client with PTSD asks her employer for a workplace accommodation, and the human resources department requests supporting documentation from her counselor. The client signs a release for this purpose. What should the counselor send?',
    options: [
      { id: 'a', text: 'A copy of her full record so HR can judge the request on its merits', isCorrect: false, rationale: 'Sending the whole record discloses far more than the employer needs and ignores the minimum-necessary principle.' },
      { id: 'b', text: 'A brief letter on her functional limits and how the change would help', isCorrect: true, rationale: 'Documentation of the condition\'s functional limitations and the need for accommodation is what the employer process requires.' },
      { id: 'c', text: 'A short note stating only that she attends counseling sessions weekly', isCorrect: false, rationale: 'Attendance alone does not establish a limitation or the need for an accommodation, so it does not help her request.' },
    ],
    rationale: 'Under the ADA, an employer may request reasonable documentation that an employee has a disability and needs an accommodation. With the client\'s authorization, the counselor limits the disclosure to the functional limitations and how the requested accommodation addresses them. Sharing only what is needed respects confidentiality while supporting the client\'s request.',
    references: [
      { source: 'ADA', detail: 'Title I — reasonable accommodation; employer may request reasonable documentation of disability and need' },
      { source: 'HIPAA', detail: 'Privacy Rule — authorizations and the minimum necessary standard' },
    ],
  },

  // ---- T3: other treatment providers --------------------------------------
  {
    id: 'nce-s-x27f-007',
    spec: '2027',
    domain: 'indirect_care',
    cacrep: 'helping_relationships',
    topic: T3,
    difficulty: 'easy',
    stem: 'A counselor begins outpatient treatment with a 17-year-old who has anorexia nervosa. She is medically stable and followed by her pediatrician. Which additional professional is MOST important to bring onto her treatment team?',
    options: [
      { id: 'a', text: 'A personal trainer to design a supervised exercise plan', isCorrect: false, rationale: 'Exercise programming is not a core need and may reinforce compensatory behavior in anorexia nervosa.' },
      { id: 'b', text: 'An occupational therapist to build daily-living skills', isCorrect: false, rationale: 'Occupational therapy is not a standard core role in outpatient eating disorder treatment.' },
      { id: 'c', text: 'A registered dietitian with eating disorder training', isCorrect: true, rationale: 'Nutritional rehabilitation is central to treating anorexia nervosa, so a dietitian is a core team member.' },
    ],
    rationale: 'Eating disorders are treated by a multidisciplinary team that typically includes a mental health clinician, a medical provider who monitors physical status, and a dietitian who guides nutritional rehabilitation, with psychiatric input as needed. The counselor coordinates with each team member so that weight, medical and psychological goals are aligned. For adolescents, family involvement is also central to treatment.',
    references: [
      { source: 'APA Practice Guidelines (Psychiatric)', detail: 'Treatment of Patients With Eating Disorders (4th ed., 2023) — plan integrating medical, psychiatric, psychological and nutritional expertise via a coordinated multidisciplinary team' },
    ],
  },
  {
    id: 'nce-s-x27f-008',
    spec: '2027',
    domain: 'indirect_care',
    cacrep: 'helping_relationships',
    topic: T3,
    difficulty: 'medium',
    stem: 'A client who is 30 weeks pregnant scores 16 on the Edinburgh Postnatal Depression Scale and denies any thoughts of self-harm. She has signed a release for the obstetric provider who manages her prenatal care. Which step BEST reflects care coordination?',
    options: [
      { id: 'a', text: 'Share the screening result and the counseling plan with her obstetric provider', isCorrect: true, rationale: 'Sharing a positive screen and the plan with the prenatal provider aligns care and allows medical follow-up.' },
      { id: 'b', text: 'Wait until after the delivery to involve her obstetric provider in her care', isCorrect: false, rationale: 'Perinatal depression is treated during pregnancy; delaying coordination leaves the prenatal team uninformed.' },
      { id: 'c', text: 'Advise her to stop any prescribed medication that might affect her mood', isCorrect: false, rationale: 'Medication advice is outside counselor scope, and stopping medication in pregnancy can be harmful.' },
    ],
    rationale: 'The EPDS is validated for use during pregnancy as well as after birth, and a score in this range is a positive screen that warrants follow-up. With the client\'s release, the counselor communicates the result and the counseling plan to the obstetric provider so that medical and mental health care are coordinated. Self-harm risk is screened and monitored throughout.',
    references: [
      { source: 'ACA Code of Ethics', detail: 'Section D.1 — relationships with colleagues; interdisciplinary teamwork and coordinated care' },
    ],
  },
  {
    id: 'nce-s-x27f-009',
    spec: '2027',
    domain: 'indirect_care',
    cacrep: 'assessment',
    topic: T3,
    difficulty: 'medium',
    stem: 'A 52-year-old client being treated for depression reports constant daytime sleepiness despite eight hours in bed. His wife says he snores loudly and seems to stop breathing during the night. With his consent, what should the counselor do?',
    options: [
      { id: 'a', text: 'Add behavioral activation to his plan to address his daytime fatigue', isCorrect: false, rationale: 'Adjusting counseling alone overlooks a possible medical cause of the fatigue and mood symptoms.' },
      { id: 'b', text: 'Contact his primary care provider about a possible sleep disorder', isCorrect: true, rationale: 'Loud snoring, witnessed breathing pauses and sleepiness suggest sleep apnea, which needs medical evaluation.' },
      { id: 'c', text: 'Teach sleep hygiene skills and reassess his fatigue in one month', isCorrect: false, rationale: 'Sleep hygiene does not treat a possible breathing-related sleep disorder and delays evaluation.' },
    ],
    rationale: 'Snoring, breathing pauses during sleep and daytime sleepiness are hallmark features of obstructive sleep apnea hypopnea, which can mimic or worsen depression. Coordinating with the primary care provider allows a medical evaluation, and DSM-5-TR requires that depressive symptoms not be attributable to another medical condition. The counselor continues treatment while the medical question is addressed.',
    references: [
      { source: 'DSM-5-TR', detail: 'Obstructive Sleep Apnea Hypopnea — snoring, breathing pauses, daytime sleepiness; MDD criterion C (not attributable to another medical condition)' },
    ],
  },

  // ---- T4: self-reported medication effects -------------------------------
  {
    id: 'nce-s-x27f-010',
    spec: '2027',
    domain: 'indirect_care',
    cacrep: 'helping_relationships',
    topic: T4,
    difficulty: 'easy',
    stem: 'A client says her new medication "makes my hands shake." During the session the counselor also notices a visible fine tremor when the client lifts a cup. In a SOAP progress note, how should this information be recorded?',
    options: [
      { id: 'a', text: 'Her statement under S and the observed tremor under O', isCorrect: true, rationale: 'SOAP separates the client\'s report (Subjective) from what the counselor directly observes (Objective).' },
      { id: 'b', text: 'Both items under A, labeled as a likely drug side effect', isCorrect: false, rationale: 'Labeling the tremor a drug effect is a medical conclusion, and the raw data belong in S and O.' },
      { id: 'c', text: 'Only the tremor under O, since it was directly observed', isCorrect: false, rationale: 'Omitting her own report loses the self-reported effect, which is what the counselor needs to document.' },
    ],
    rationale: 'In the SOAP format, the Subjective section records what the client reports, often in her own words, and the Objective section records what the counselor observes. Documenting both a self-reported medication effect and any corroborating observation gives the prescriber clear, factual information. The counselor avoids drawing medical conclusions about causation.',
    references: [
      { source: 'Wiger (Documentation)', detail: 'SOAP progress notes — subjective report vs objective observation' },
    ],
  },
  {
    id: 'nce-s-x27f-011',
    spec: '2027',
    domain: 'indirect_care',
    cacrep: 'professional_orientation',
    topic: T4,
    difficulty: 'medium',
    stem: 'On a Saturday, a client sends a message through the practice\'s secure client portal saying her new antidepressant has given her daily headaches. Practice policy states the portal is checked on business days. When the counselor reads the message on Monday, what should she do?',
    options: [
      { id: 'a', text: 'Delete the message after reading it, since portal messages are not notes', isCorrect: false, rationale: 'Clinically relevant client messages are part of the record; deleting them leaves the report undocumented.' },
      { id: 'b', text: 'Wait to discuss it at the next session in two weeks before noting it', isCorrect: false, rationale: 'Delaying documentation and response leaves a reported side effect unaddressed for two weeks.' },
      { id: 'c', text: 'Reply, record the message and reply, and urge a call to her prescriber', isCorrect: true, rationale: 'Responding, documenting the self-reported effect and directing her to the prescriber addresses the report promptly.' },
    ],
    rationale: 'Medication effects that a client reports between sessions, including through a secure portal, are clinical information and belong in the record along with the counselor\'s response. The counselor documents the report, avoids giving medication advice, and directs the client to the prescriber. Portal policies should also tell clients how to get urgent help when messages are not monitored.',
    references: [
      { source: 'HIPAA', detail: 'Privacy Rule — designated record set includes records used to make decisions about the individual' },
      { source: 'Wiger (Documentation)', detail: 'Documenting between-session contacts and collateral information' },
    ],
  },
  {
    id: 'nce-s-x27f-012',
    spec: '2027',
    domain: 'indirect_care',
    cacrep: 'helping_relationships',
    topic: T4,
    difficulty: 'hard',
    stem: 'A 29-year-old client in recovery from opioid use disorder receives monthly extended-release naltrexone injections. He reports that his cravings are gone and says he will skip next month\'s injection because he feels "cured." Besides documenting his report, which risk is MOST important for the counselor to address?',
    options: [
      { id: 'a', text: 'Severe opioid withdrawal that begins as the naltrexone wears off', isCorrect: false, rationale: 'Naltrexone is an antagonist, not an opioid, so stopping it does not cause opioid withdrawal.' },
      { id: 'b', text: 'Overdose from reduced opioid tolerance if he uses after stopping', isCorrect: true, rationale: 'After naltrexone, opioid tolerance is lost, so a return to use at prior amounts carries a high overdose risk.' },
      { id: 'c', text: 'Dangerous liver failure that sets in soon after the last injection', isCorrect: false, rationale: 'Stopping naltrexone does not trigger liver failure; liver concerns relate to monitoring during use.' },
    ],
    rationale: 'Extended-release naltrexone blocks opioid effects, and people who stop it have lost their opioid tolerance. Returning to opioid use at previous amounts can therefore cause a fatal overdose. The counselor documents his self-reported benefits and plan, addresses overdose risk and naloxone, and encourages him to discuss the decision with his prescriber.',
    references: [
      { source: 'SAMHSA TIP 63', detail: 'Part 3, Naltrexone — risk of opioid overdose after discontinuing XR-NTX due to loss of tolerance; patient education and naloxone' },
    ],
  },

  // ---- T5: referral resources -------------------------------------------
  {
    id: 'nce-s-x27f-013',
    spec: '2027',
    domain: 'indirect_care',
    cacrep: 'helping_relationships',
    topic: T5,
    difficulty: 'easy',
    stem: 'A client with alcohol use disorder says he attended Alcoholics Anonymous but felt uncomfortable with its spiritual language. He wants peer support that fits his own views. Which addition to the counselor\'s referral list would BEST serve clients like him?',
    options: [
      { id: 'a', text: 'A longer list of AA meetings held at other times and places', isCorrect: false, rationale: 'More AA meetings do not address his discomfort with the program\'s spiritual framework.' },
      { id: 'b', text: 'Secular mutual-help options, such as SMART Recovery groups', isCorrect: true, rationale: 'Secular mutual-help groups offer peer support without a spiritual framework and respect his preference.' },
      { id: 'c', text: 'Inpatient programs that do not include any group meetings', isCorrect: false, rationale: 'He is seeking peer support, not a higher level of care, and nothing suggests he needs inpatient treatment.' },
    ],
    rationale: 'A useful referral list offers a range of options so clients can choose resources that fit their values. Secular mutual-help groups such as SMART Recovery provide peer support for clients who prefer not to use a spiritual approach. Offering a menu of options supports client autonomy and engagement.',
    references: [
      { source: 'Miller & Rollnick (MI)', detail: 'Supporting autonomy — offering a menu of options' },
      { source: 'ACA Code of Ethics', detail: 'Section A.1.a — client welfare; respecting client values in referrals' },
    ],
  },
  {
    id: 'nce-s-x27f-014',
    spec: '2027',
    domain: 'indirect_care',
    cacrep: 'professional_orientation',
    topic: T5,
    difficulty: 'medium',
    stem: 'A counselor is referring a client to a trauma specialist. Her up-to-date referral list shows three providers who accept the client\'s insurance and practice near his home. Which referral practice BEST supports the client\'s autonomy?',
    options: [
      { id: 'a', text: 'Give him only the one provider she personally likes best', isCorrect: false, rationale: 'Offering a single name based on her preference limits his choice when suitable options exist.' },
      { id: 'b', text: 'Pick the shortest wait and book his intake on his behalf', isCorrect: false, rationale: 'Booking without his input takes the decision away from him, even if speed matters.' },
      { id: 'c', text: 'Share all three and discuss which may fit him best', isCorrect: true, rationale: 'Presenting suitable options and discussing fit lets him make an informed choice.' },
    ],
    rationale: 'Respect for client autonomy means helping clients make informed choices about their care, including which provider to see. When several appropriate resources are on the list, the counselor shares them with relevant details such as wait times, approach and fit, and helps the client decide. A well-maintained list makes this kind of informed choice possible.',
    references: [
      { source: 'ACA Code of Ethics', detail: 'Section A.1.a and A.2 — client welfare, autonomy and informed choice' },
    ],
  },
  {
    id: 'nce-s-x27f-015',
    spec: '2027',
    domain: 'indirect_care',
    cacrep: 'helping_relationships',
    topic: T5,
    difficulty: 'medium',
    stem: 'A counselor\'s referral list records each provider\'s license type and insurance but not the treatments they offer. A client with severe obsessive-compulsive disorder needs a provider trained in exposure and response prevention. Which update to the list would MOST improve referrals like this?',
    options: [
      { id: 'a', text: 'Record the specific evidence-based treatments each provider offers', isCorrect: true, rationale: 'Listing specific treatments lets the counselor match clients to providers who deliver the indicated intervention.' },
      { id: 'b', text: 'Add more providers who list anxiety disorders as a general interest', isCorrect: false, rationale: 'A general interest in anxiety does not show training in exposure and response prevention.' },
      { id: 'c', text: 'Sort the list by the number of years each provider has been in practice', isCorrect: false, rationale: 'Years in practice do not indicate whether a provider offers the specific treatment needed.' },
    ],
    rationale: 'Exposure and response prevention is the recommended psychological treatment for OCD, yet many providers who treat anxiety do not offer it. A referral list that records the specific evidence-based treatments each provider delivers allows accurate matching. Updating entries with treatment modalities is as important as tracking fees and openings.',
    references: [
      { source: 'NICE guidelines', detail: 'CG31 Obsessive-compulsive disorder and body dysmorphic disorder — CBT including exposure and response prevention' },
    ],
  },

  // ---- T6: pre-session documentation review -------------------------------
  {
    id: 'nce-s-x27f-016',
    spec: '2027',
    domain: 'indirect_care',
    cacrep: 'professional_orientation',
    topic: T6,
    difficulty: 'hard',
    stem: 'Reviewing her chart before a session, a counselor sees that her note from last week records a 10-year-old client\'s disclosure that his stepfather burns him with cigarettes. There is no record that a report was made, and she does not recall making one. What should she do?',
    options: [
      { id: 'a', text: 'Question the boy in today\'s session to learn whether the abuse is ongoing', isCorrect: false, rationale: 'Investigating is the role of child protective services; the duty to report already exists and delay compounds the lapse.' },
      { id: 'b', text: 'Add a late entry to the chart stating that his disclosure was unclear', isCorrect: false, rationale: 'Changing the record to minimize a documented disclosure is falsification and does not meet the reporting duty.' },
      { id: 'c', text: 'Report to child protective services now and document the report made', isCorrect: true, rationale: 'The reporting duty was triggered by the disclosure; it must be met immediately and documented, even though it is late.' },
    ],
    rationale: 'A documented disclosure of physical abuse creates a mandated reporting duty that does not lapse because time has passed. Reviewing the chart before sessions can catch such gaps, and the counselor reports immediately and documents the report, the date and the reason it is late. Counselors do not investigate allegations themselves, and timelines and procedures are set by state law.',
    references: [
      { source: 'State law', detail: 'Child abuse mandated reporting statutes — immediate report on reasonable suspicion; timelines vary by state' },
      { source: 'ACA Code of Ethics', detail: 'Section B.2.a — serious and foreseeable harm and legal requirements' },
    ],
  },
  {
    id: 'nce-s-x27f-017',
    spec: '2027',
    domain: 'indirect_care',
    cacrep: 'professional_orientation',
    topic: T6,
    difficulty: 'medium',
    stem: 'A client who has attended six in-person sessions will begin video sessions today. Reviewing the chart beforehand, the counselor finds the signed in-person consent form but nothing addressing telehealth. What should the counselor do?',
    options: [
      { id: 'a', text: 'Postpone counseling until the client can return to the office', isCorrect: false, rationale: 'Missing consent is fixed by obtaining it, not by suspending services the client wants.' },
      { id: 'b', text: 'Review telehealth consent with the client before beginning', isCorrect: true, rationale: 'Distance counseling requires its own informed consent covering its specific risks, benefits and procedures.' },
      { id: 'c', text: 'Proceed, since the first consent covers any service format', isCorrect: false, rationale: 'General in-person consent does not address telehealth-specific issues such as privacy, technology failure and emergencies.' },
    ],
    rationale: 'Before providing distance counseling, counselors obtain informed consent that covers issues specific to technology, such as confidentiality limits, technology failure, emergency procedures, the client\'s location and response times. A pre-session chart review that reveals missing consent allows the counselor to obtain it before services start. The completed consent is documented in the record.',
    references: [
      { source: 'ACA Code of Ethics', detail: 'Section H.2.a — informed consent and disclosure for distance counseling' },
    ],
  },
  {
    id: 'nce-s-x27f-018',
    spec: '2027',
    domain: 'indirect_care',
    cacrep: 'professional_orientation',
    topic: T6,
    difficulty: 'medium',
    stem: 'While reviewing a client\'s electronic health record before a session, a counselor finds a scanned intake form that belongs to a different client filed in the chart. What is the MOST appropriate action?',
    options: [
      { id: 'a', text: 'Notify the privacy officer and follow policy to correct the misfile', isCorrect: true, rationale: 'A misfiled record is a possible privacy incident that the designated officer assesses under policy.' },
      { id: 'b', text: 'Move it quietly to the correct chart and go on with the session', isCorrect: false, rationale: 'Fixing it silently skips the required assessment of whether the record was improperly disclosed.' },
      { id: 'c', text: 'Delete the scanned form and ask the other client to fill it out again', isCorrect: false, rationale: 'Destroying the document removes the record and evidence without addressing the incident.' },
    ],
    rationale: 'A record filed in the wrong client\'s chart may have been viewed or released to people without authority to see it. Under the HIPAA Breach Notification Rule, an impermissible use or disclosure is presumed to be a breach unless a risk assessment shows a low probability of compromise, so the incident is reported to the privacy officer. Following policy ensures the error is corrected, assessed and documented.',
    references: [
      { source: 'HIPAA', detail: 'Breach Notification Rule — presumption of breach and four-factor risk assessment' },
    ],
  },

  // ---- T7: translation services -------------------------------------------
  {
    id: 'nce-s-x27f-019',
    spec: '2027',
    domain: 'indirect_care',
    cacrep: 'social_cultural',
    topic: T7,
    difficulty: 'medium',
    stem: 'A clinic that receives federal funding has a receptionist who grew up speaking Arabic at home. When an Arabic-speaking client with limited English proficiency arrives for an intake, the counselor considers asking the receptionist to interpret. Which statement reflects federal language-access requirements?',
    options: [
      { id: 'a', text: 'She may interpret, since any fluent staff member is acceptable', isCorrect: false, rationale: 'Conversational fluency does not show interpreting skill, ethics or knowledge of terminology.' },
      { id: 'b', text: 'The client should bring an adult relative to interpret instead', isCorrect: false, rationale: 'Requiring clients to supply their own interpreters is not permitted; the program must provide language assistance.' },
      { id: 'c', text: 'She may interpret only if assessed as a qualified interpreter', isCorrect: true, rationale: 'Section 1557 rules require interpreters, including bilingual staff, to be qualified for the role.' },
    ],
    rationale: 'Section 1557 and its regulations require covered programs to provide qualified interpreters to people with limited English proficiency at no cost. Bilingual staff may interpret only if they meet the standard for a qualified interpreter, including proficiency in both languages, accurate interpretation and adherence to confidentiality. Programs may not require clients to bring their own interpreters.',
    references: [
      { source: 'Title VI & Section 1557', detail: '2024 Section 1557 rule, 45 CFR 92.201 — oral interpretation by a qualified interpreter; no requiring clients to bring their own; limits on relying on accompanying adults' },
    ],
  },
  {
    id: 'nce-s-x27f-020',
    spec: '2027',
    domain: 'indirect_care',
    cacrep: 'social_cultural',
    topic: T7,
    difficulty: 'easy',
    stem: 'Using a qualified interpreter, a counselor completes a safety plan with a client whose preferred language is Spanish. The clinic\'s safety plan form is printed only in English. What is the BEST way to give the client a usable copy?',
    options: [
      { id: 'a', text: 'Hand her the English copy and ask a relative to read it later', isCorrect: false, rationale: 'An English-only copy may be unusable in a crisis, and relying on relatives risks errors and privacy loss.' },
      { id: 'b', text: 'Give her the plan in Spanish via a qualified, verified translation', isCorrect: true, rationale: 'A safety plan is meant to be used independently, so it must be in the language she can read.' },
      { id: 'c', text: 'Skip giving her a written copy since the plan was discussed aloud', isCorrect: false, rationale: 'A written copy the client keeps is a core part of safety planning and should not be omitted.' },
    ],
    rationale: 'A safety plan works only if the client can read and use it during a crisis, so it is provided in her preferred language. Language-access rules call for written translation of vital documents, and safety planning guidance emphasizes that the client keeps a copy written in her own words. A qualified translator or a verified translated template ensures accuracy.',
    references: [
      { source: 'Stanley-Brown SPI', detail: 'Client keeps a copy of the plan written in their own words' },
      { source: 'Title VI & Section 1557', detail: 'Language assistance — translation of vital written documents' },
    ],
  },
  {
    id: 'nce-s-x27f-021',
    spec: '2027',
    domain: 'indirect_care',
    cacrep: 'social_cultural',
    topic: T7,
    difficulty: 'hard',
    stem: 'A private practice uses video remote interpreting (VRI) for a Deaf client who uses American Sign Language. Midway through a session the video repeatedly freezes, and the client signs that she cannot follow the interpreter. What should the counselor do?',
    options: [
      { id: 'a', text: 'Pause to fix the connection or arrange an on-site interpreter', isCorrect: true, rationale: 'VRI must provide clear, real-time communication; if it cannot, another effective means such as an on-site interpreter is needed.' },
      { id: 'b', text: 'Continue the session by trading written notes for the rest of it', isCorrect: false, rationale: 'Written notes are often not effective for the complex, emotional exchange of counseling, especially with ASL users.' },
      { id: 'c', text: 'Keep going, since offering VRI fulfills the practice\'s ADA duty', isCorrect: false, rationale: 'Offering VRI is not enough; the ADA requires that communication actually be effective.' },
    ],
    rationale: 'ADA Title III requires public accommodations, including private counseling practices, to ensure effective communication with people who are Deaf. When VRI is used, it must meet performance standards such as real-time, high-quality video without lags or choppy images. If VRI is not working, the counselor resolves the problem or arranges an alternative such as an on-site qualified interpreter.',
    references: [
      { source: 'ADA', detail: 'Title III, 28 CFR 36.303(f) — VRI performance standards (real-time, full-motion video, clear image and audio, trained users)' },
    ],
  },

  // ---- T8: writing documentation ------------------------------------------
  {
    id: 'nce-s-x27f-022',
    spec: '2027',
    domain: 'indirect_care',
    cacrep: 'professional_orientation',
    topic: T8,
    difficulty: 'easy',
    stem: 'A counselor writes progress notes in the DAP (Data, Assessment, Plan) format for a client being treated for social anxiety. Which entry belongs in the Assessment section?',
    options: [
      { id: 'a', text: 'Client stated, "I spoke up twice in my team meeting this week."', isCorrect: false, rationale: 'A client\'s statement is information gathered in session, which belongs in the Data section.' },
      { id: 'b', text: 'Client will complete two new exposure tasks before next session.', isCorrect: false, rationale: 'Assigned tasks and next steps belong in the Plan section.' },
      { id: 'c', text: 'Avoidance appears to be decreasing as exposure tasks progress.', isCorrect: true, rationale: 'The counselor\'s interpretation of progress belongs in the Assessment section.' },
    ],
    rationale: 'In DAP notes, Data captures what the client said and what the counselor observed, Assessment records the counselor\'s clinical interpretation of that data and progress toward goals, and Plan records next steps. Keeping these elements separate makes notes clear and supports continuity of care. Assessment statements link observations to treatment goals.',
    references: [
      { source: 'Wiger (Documentation)', detail: 'Progress note formats — DAP structure' },
    ],
  },
  {
    id: 'nce-s-x27f-023',
    spec: '2027',
    domain: 'indirect_care',
    cacrep: 'professional_orientation',
    topic: T8,
    difficulty: 'hard',
    stem: 'A counselor provides 65 minutes of crisis psychotherapy to a client in acute distress with high suicide risk, including urgent assessment and safety planning. Which documentation BEST supports billing this session as crisis psychotherapy (CPT 90839)?',
    options: [
      { id: 'a', text: 'Total crisis time with the urgent assessment and interventions used', isCorrect: true, rationale: '90839 is time-based, so total crisis time and the urgent assessment and interventions must be documented.' },
      { id: 'b', text: 'Total time, with 90837 added for the minutes beyond the first hour', isCorrect: false, rationale: '90837 is not reported with 90839; additional crisis time beyond 74 minutes uses add-on code 90840.' },
      { id: 'c', text: 'A note that a crisis occurred, without any time, since 90839 is untimed', isCorrect: false, rationale: '90839 is a timed code covering the first 60 minutes (30–74 minutes) of crisis psychotherapy.' },
    ],
    rationale: 'CPT 90839 covers the first 60 minutes of psychotherapy for crisis and is reported for 30 to 74 minutes; 90840 is added for each additional 30 minutes. Crisis psychotherapy includes urgent assessment and history of the crisis, mental status, and interventions to reduce distress, so the note should document total time and these elements. A 65-minute crisis session is reported with 90839 alone, and 90839 is not reported with routine psychotherapy codes such as 90837 for the same session.',
    references: [
      { source: 'AMA CPT', detail: 'Psychotherapy for crisis — 90839 (first 60 min, reported for 30–74 min), add-on 90840 per additional 30 min; not reported with 90832–90838 for the same provider and date' },
    ],
  },
  {
    id: 'nce-s-x27f-024',
    spec: '2027',
    domain: 'indirect_care',
    cacrep: 'professional_orientation',
    topic: T8,
    difficulty: 'medium',
    stem: 'In a HIPAA-covered practice, a client reads her record and asks her counselor to remove a progress note statement that she "presented as irritable," calling it unfair. The counselor believes the note is accurate and complete. What is the counselor\'s obligation?',
    options: [
      { id: 'a', text: 'Delete the statement, since clients decide what their records say', isCorrect: false, rationale: 'Clients may request amendments, but the provider may deny a request when the record is accurate and complete.' },
      { id: 'b', text: 'Respond in writing and, if denied, let her file a disagreement', isCorrect: true, rationale: 'HIPAA requires a timely written response; if the request is denied, the client may submit a statement of disagreement.' },
      { id: 'c', text: 'Refuse the request verbally, with no further steps required', isCorrect: false, rationale: 'A denial must be in writing and explain the client\'s rights, including filing a statement of disagreement.' },
    ],
    rationale: 'The HIPAA Privacy Rule gives individuals the right to request amendment of their records. A covered entity may deny a request if the information is accurate and complete, but it must respond in writing within the required time frame, explain the basis for denial, and inform the client that she may file a statement of disagreement. That statement is then linked to the disputed entry in the record.',
    references: [
      { source: 'HIPAA', detail: 'Privacy Rule, 45 CFR 164.526 — right to amend; written denial and statement of disagreement' },
    ],
  },
];
