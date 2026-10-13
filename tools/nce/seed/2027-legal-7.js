// tools/nce/seed/2027-legal-7.js — 2027 NCE: Legal & Ethical Compliance (40 original items)
const T1 = 'Activate (i.e., follow) an emergency preparedness plan for your Counseling practice in response to a relevant incident';
const T2 = 'Adhere to internal policies or standard operating procedures (SOPs) relevant to your clinical practice (e.g., informed consent, record retention, release of information, mandated reporting protocols)';
const T3 = 'Adhere to relevant state and federal laws and regulations that apply to your clinical practice';
const T4 = 'Adhere to telemental health best practice guidelines';
const T5 = 'Adhere to the Counseling codes of ethics';
const T6 = 'Engage in activities to maintain licensure status';
const T7 = 'Engage in billing, third-party reimbursement and other insurance panel processes';
const T8 = 'Engage in compliance-related training (e.g., insurance, credentialing, billing, payment)';
const T9 = 'Ensure telemental health platforms are utilized in compliance with state and federal laws';
const T10 = 'Ensure that reimbursement requests are supported by proper clinical documentation';
const T11 = 'Implement technology-assisted clinical tools (e.g., online therapy platform, AI note takers, virtual reality tools, calming apps, wearable devices to monitor heart rate and breathing)';
const T12 = 'Maintain professional liability insurance';
const T13 = 'Practice in accordance with license portability (e.g., Counseling Compact)';
const T14 = 'Provide adequate accommodations for clients with disabilities';
const T15 = 'Review and update an emergency preparedness plan for your Counseling practice';
const T16 = 'Securely maintain case notes, records, and files';
const T17 = 'Solicit best practices for understanding and adhering to obligations of court proceedings';
const T18 = 'Use an electronic health record (EHR) or electronic medical record (EMR) system';
const T19 = 'Use artificial intelligence (AI) within your Counseling practice';
const T20 = 'Market your Counseling business appropriately (e.g., proper utilization of social media, proper protection of client information)';

module.exports = [
  // ---------------- T1: activate emergency plan ----------------
  {
    id: 'nce-s-l27g-001',
    spec: '2027',
    domain: 'legal_ethical',
    cacrep: 'group',
    topic: T1,
    difficulty: 'medium',
    stem: 'Twenty minutes into an evening process group, a counselor receives a county alert ordering residents to shelter in place because of a chemical leak at a nearby rail yard. The agency\'s emergency plan assigns group leaders specific duties for shelter-in-place orders. Two members stand up and say they are leaving to drive home. What should the counselor do?',
    options: [
      { id: 'a', text: 'Let members leave once they sign a form accepting the risk of going', isCorrect: false, rationale: 'A signed waiver does not make leaving safe; the order and the plan direct everyone to stay indoors.' },
      { id: 'b', text: 'Keep the group indoors per the plan and account for each one', isCorrect: true, rationale: 'Shelter-in-place plans keep people inside, seal the space as directed, and require a headcount so no one is unaccounted for.' },
      { id: 'c', text: 'End the session and dismiss everyone so they can be with family', isCorrect: false, rationale: 'Dismissing the group sends members into the hazard the order is meant to avoid and abandons the plan.' },
    ],
    rationale: 'Activating a plan means carrying out the role it assigns, not improvising. In a shelter-in-place incident the leader keeps clients indoors in the designated area, follows instructions from authorities, and accounts for every person present. The counselor can acknowledge members\' fear for their families while explaining why staying put is safer.',
    references: [
      { source: 'Psychological First Aid Field Operations Guide (NCTSN/NCPTSD)', detail: 'Core action — safety and comfort: ensure immediate physical safety' },
      { source: 'ACA Code of Ethics', detail: 'Section A.1.a — primary responsibility to promote client welfare' },
    ],
  },
  {
    id: 'nce-s-l27g-002',
    spec: '2027',
    domain: 'legal_ethical',
    cacrep: 'professional_orientation',
    topic: T1,
    difficulty: 'easy',
    stem: 'A fire damages a counseling practice overnight, and the building will be closed indefinitely. The emergency plan tells the office manager to update the practice\'s voicemail greeting and website the same day. Which message content BEST follows the plan\'s purpose?',
    options: [
      { id: 'a', text: 'The closure, how to reach counselors, and 988 or 911 for a crisis', isCorrect: true, rationale: 'Clients need to know services changed, how to keep contact, and where to go in a crisis while the office is closed.' },
      { id: 'b', text: 'A note that the office is closed and that clients should wait to hear', isCorrect: false, rationale: 'Telling clients only to wait leaves people in crisis without direction and breaks continuity of care.' },
      { id: 'c', text: 'Details of the fire, the damage, and the status of the client files', isCorrect: false, rationale: 'Public details about records add nothing for clients and could raise privacy concerns; contact and crisis options matter most.' },
    ],
    rationale: 'Emergency communications aim to preserve continuity of care and safety. A public message should state the service change, give a working way to reach the counselors or the alternate service plan, and name crisis resources such as the 988 Suicide & Crisis Lifeline or 911. Specific client or record details do not belong in public notices.',
    references: [
      { source: 'SAMHSA 988 Lifeline', detail: 'National crisis line available 24/7 by call, text or chat' },
      { source: 'ACA Code of Ethics', detail: 'Section A.12 — Abandonment and Client Neglect (arrangements for continuation of treatment during interruptions)' },
    ],
  },

  // ---------------- T2: SOPs ----------------
  {
    id: 'nce-s-l27g-003',
    spec: '2027',
    domain: 'legal_ethical',
    cacrep: 'professional_orientation',
    topic: T2,
    difficulty: 'medium',
    stem: 'A client signed a release allowing her counselor to confirm attendance and general progress to her employer\'s employee assistance program. The EAP coordinator now calls and asks for her diagnosis and what she has said about her manager. Under the practice\'s release-of-information SOP, what should the counselor do?',
    options: [
      { id: 'a', text: 'Share the diagnosis, since the EAP already knows she is in care', isCorrect: false, rationale: 'Knowing that someone attends counseling does not authorize disclosure of the diagnosis or session content.' },
      { id: 'b', text: 'Refuse to speak with the EAP until the client signs a new release', isCorrect: false, rationale: 'The existing release still authorizes attendance and general progress; refusing all contact is unnecessary.' },
      { id: 'c', text: 'Give only attendance and general progress, as the release allows', isCorrect: true, rationale: 'A release defines the scope of disclosure; anything beyond it requires a new authorization from the client.' },
    ],
    rationale: 'Release-of-information procedures limit disclosures to the information, recipient, and purpose the client authorized. A request for more than the release covers is answered by disclosing only what is authorized and, if the client wishes, obtaining a new, specific authorization. This mirrors HIPAA\'s requirement that authorizations describe the information to be disclosed.',
    references: [
      { source: 'HIPAA', detail: 'Privacy Rule — 45 CFR 164.508: valid authorization describes the specific information to be disclosed' },
      { source: 'ACA Code of Ethics', detail: 'Section B.2.e — minimal disclosure' },
    ],
  },
  {
    id: 'nce-s-l27g-004',
    spec: '2027',
    domain: 'legal_ethical',
    cacrep: 'professional_orientation',
    topic: T2,
    difficulty: 'easy',
    stem: 'A counselor makes a phone report to child protective services after a 9-year-old describes being hit with a belt. The agency\'s mandated reporting SOP requires that each report be documented in the client record. Which entry BEST meets this requirement?',
    options: [
      { id: 'a', text: 'A brief note that a report was made, with no other details given', isCorrect: false, rationale: 'A bare note omits the facts that show the duty was met and when, which the SOP is meant to capture.' },
      { id: 'b', text: 'The date, what was reported, the agency, and the intake number', isCorrect: true, rationale: 'These details create a clear record that the report was made, to whom, and on what basis.' },
      { id: 'c', text: 'The counselor\'s opinion of whether the parents are likely to be charged', isCorrect: false, rationale: 'Speculation about legal outcomes is not part of documenting a report and is outside the counselor\'s role.' },
    ],
    rationale: 'Documenting a mandated report protects the client and the counselor. A sound entry records the date and time, the information that prompted the report, the agency and person contacted, any reference or intake number, and follow-up steps. Opinions about prosecution are not part of the clinical record of the report.',
    references: [
      { source: 'State law', detail: 'Child abuse reporting statutes — reports by mandated reporters to child protective services' },
      { source: 'Wiger (Documentation)', detail: 'Documenting critical incidents and mandated reports in the clinical record' },
    ],
  },

  // ---------------- T3: state & federal laws ----------------
  {
    id: 'nce-s-l27g-005',
    spec: '2027',
    domain: 'legal_ethical',
    cacrep: 'professional_orientation',
    topic: T3,
    difficulty: 'medium',
    stem: 'A former client asks a HIPAA-covered counselor for a paper copy of her 120-page record. The counselor\'s office manager suggests charging a $1 per page "retrieval and search fee." Under the HIPAA right of access, what may the practice charge?',
    options: [
      { id: 'a', text: 'Whatever amount the office manager believes is fair to the practice', isCorrect: false, rationale: 'HIPAA limits access fees; a practice cannot set any amount it chooses.' },
      { id: 'b', text: 'A fee that covers the time spent searching for and retrieving records', isCorrect: false, rationale: 'Search and retrieval costs are specifically excluded from fees for an individual\'s own access request.' },
      { id: 'c', text: 'A reasonable, cost-based fee for labor, supplies, and postage', isCorrect: true, rationale: 'HIPAA allows only a reasonable, cost-based fee for copying labor, supplies, and postage when an individual requests her own records.' },
    ],
    rationale: 'Under the HIPAA Privacy Rule, individuals have a right to access their records, and covered entities may charge only a reasonable, cost-based fee covering copying labor, supplies, postage, and preparing a summary if the client agrees to one. Fees for searching and retrieving records are not permitted. State law may set lower limits.',
    references: [
      { source: 'HIPAA', detail: 'Privacy Rule — 45 CFR 164.524(c)(4): reasonable, cost-based fees for access' },
    ],
  },
  {
    id: 'nce-s-l27g-006',
    spec: '2027',
    domain: 'legal_ethical',
    cacrep: 'professional_orientation',
    topic: T3,
    difficulty: 'hard',
    stem: 'A patient at a federally assisted outpatient substance use disorder program is asked to sign one consent covering all future uses and disclosures of her records for treatment, payment, and health care operations. A staff member questions whether a single consent like this is allowed. Under 42 CFR Part 2 as amended by the 2024 final rule, which statement is accurate?',
    options: [
      { id: 'a', text: 'A single consent for all future treatment, payment, and operations is allowed', isCorrect: true, rationale: 'The 2024 final rule permits one consent for all future uses and disclosures for treatment, payment, and health care operations.' },
      { id: 'b', text: 'Each disclosure for payment still needs its own separate signed consent form', isCorrect: false, rationale: 'This reflects the older, stricter approach; the 2024 rule allows a single TPO consent.' },
      { id: 'c', text: 'Consent is no longer needed because Part 2 records now follow HIPAA alone', isCorrect: false, rationale: 'Part 2 still applies and still requires written consent for most disclosures; it was aligned with HIPAA, not replaced by it.' },
    ],
    rationale: 'The 2024 final rule aligned 42 CFR Part 2 more closely with HIPAA. Patients may now sign a single consent for all future uses and disclosures for treatment, payment, and health care operations, and HIPAA-covered recipients may redisclose under HIPAA rules. Part 2 still requires written consent for most disclosures and still restricts use of records in legal proceedings against the patient without consent or a court order.',
    references: [
      { source: '42 CFR Part 2', detail: '2024 final rule — single consent for all future uses and disclosures for treatment, payment, and health care operations' },
    ],
  },

  // ---------------- T4: telemental health best practice ----------------
  {
    id: 'nce-s-l27g-007',
    spec: '2027',
    domain: 'legal_ethical',
    cacrep: 'helping_relationships',
    topic: T4,
    difficulty: 'medium',
    stem: 'A 39-year-old accountant plans to join weekly video sessions from her office during lunch, using her employer-issued laptop on the company network. She says her door closes and no one will hear her. Which guidance BEST reflects telemental health practice?',
    options: [
      { id: 'a', text: 'Go ahead, since a closed office door gives her enough privacy at work', isCorrect: false, rationale: 'Physical privacy does not address the employer\'s ability to monitor its own devices and network.' },
      { id: 'b', text: 'Have her join from the office only after coworkers have gone home', isCorrect: false, rationale: 'Changing the time does not change the device or network, which remain under the employer\'s control.' },
      { id: 'c', text: 'Suggest a personal device on a network her employer doesn\'t control', isCorrect: true, rationale: 'Employer devices and networks may be monitored; a personal device on a private connection better protects confidentiality.' },
    ],
    rationale: 'Telemental health guidelines ask counselors to help clients choose a private setting and secure technology. Work computers and networks are often monitored or logged by employers, so sessions on them can expose confidential content. The counselor educates the client about these risks and helps her plan a more secure way to connect.',
    references: [
      { source: 'ACA Code of Ethics', detail: 'Section H.2.c — acknowledgment of limitations of confidentiality with technology; H.4.a — benefits and limitations' },
    ],
  },
  {
    id: 'nce-s-l27g-008',
    spec: '2027',
    domain: 'legal_ethical',
    cacrep: 'helping_relationships',
    topic: T4,
    difficulty: 'easy',
    stem: 'A 24-year-old graduate student with social anxiety asks to keep his camera off during video sessions because seeing his own face on screen makes him intensely self-conscious. Which response BEST reflects telemental health best practice?',
    options: [
      { id: 'a', text: 'Explore his reasons and agree on options, such as hiding self-view', isCorrect: true, rationale: 'Collaborating on adjustments such as turning off self-view addresses his concern while keeping visual contact where possible.' },
      { id: 'b', text: 'Require the camera to stay on, since video is needed for every session', isCorrect: false, rationale: 'A rigid rule ignores the client\'s concern and the flexibility that telehealth allows when clinically appropriate.' },
      { id: 'c', text: 'Agree right away and stop raising video for the rest of his care', isCorrect: false, rationale: 'Agreeing without discussion skips the clinical meaning of the request and the loss of visual cues.' },
    ],
    rationale: 'Telemental health practice involves discussing how the format affects the work and adapting it collaboratively. Hiding self-view, gradually returning to video, or agreeing on audio-only with its limits are options to explore. The counselor also notes that fewer visual cues can affect assessment and builds in verbal check-ins.',
    references: [
      { source: 'ACA Code of Ethics', detail: 'Section H.2.a — informed consent and disclosure about distance counseling' },
      { source: 'Gladding (Counseling: A Comprehensive Profession)', detail: 'Technology in counseling — adapting distance formats to client needs' },
    ],
  },

  // ---------------- T5: codes of ethics ----------------
  {
    id: 'nce-s-l27g-009',
    spec: '2027',
    domain: 'legal_ethical',
    cacrep: 'professional_orientation',
    topic: T5,
    difficulty: 'medium',
    stem: 'A counselor going through a painful divorce notices she is tearful between sessions, loses track of details clients share, and missed a client\'s mention of hopelessness until reviewing her notes days later. According to the ACA Code of Ethics, what should she do?',
    options: [
      { id: 'a', text: 'Keep her full caseload, as stepping back would harm her clients', isCorrect: false, rationale: 'Continuing while impaired risks harm, such as missed risk statements, which the Code asks counselors to prevent.' },
      { id: 'b', text: 'Seek help and limit or pause practice until she can work safely', isCorrect: true, rationale: 'The impairment standard directs counselors to seek assistance and limit, suspend, or end services when impaired.' },
      { id: 'c', text: 'Tell clients about her divorce so they will understand any lapses', isCorrect: false, rationale: 'Self-disclosure shifts the burden to clients and does not fix the impairment that is affecting care.' },
    ],
    rationale: 'Under the ACA Code\'s impairment standard, counselors monitor themselves for signs of physical, mental, or emotional problems and refrain from offering services when impaired. They seek help for problems that reach the level of impairment and, if needed, limit, suspend, or terminate professional responsibilities until it is safe to resume. Here she should also follow up promptly on the missed risk statement.',
    references: [
      { source: 'ACA Code of Ethics', detail: 'Section C.2.g — Impairment' },
    ],
  },
  {
    id: 'nce-s-l27g-010',
    spec: '2027',
    domain: 'legal_ethical',
    cacrep: 'professional_orientation',
    topic: T5,
    difficulty: 'easy',
    stem: 'A client has not paid the fees agreed upon in her informed consent for three months, despite reminders and an offered payment plan. She is not in crisis. According to the ACA Code of Ethics, which statement about ending counseling is accurate?',
    options: [
      { id: 'a', text: 'She must keep seeing the client until the balance is paid in full', isCorrect: false, rationale: 'The Code does not require counselors to continue indefinitely when agreed fees go unpaid.' },
      { id: 'b', text: 'She may stop services at once without telling the client the reason', isCorrect: false, rationale: 'Ending abruptly without explanation or referral risks abandonment.' },
      { id: 'c', text: 'She may end services, with pre-termination counseling and referrals', isCorrect: true, rationale: 'Nonpayment of agreed fees is an accepted reason to terminate, provided the counselor offers pre-termination counseling and referrals.' },
    ],
    rationale: 'The ACA Code permits counselors to terminate when clients do not pay fees as agreed, as well as when clients no longer need or benefit from services or the counselor is at risk of harm. Termination must still be handled appropriately: the counselor provides pre-termination counseling and suggests other providers when needed, avoiding abandonment.',
    references: [
      { source: 'ACA Code of Ethics', detail: 'Section A.11.c — Appropriate Termination' },
    ],
  },

  // ---------------- T6: maintain licensure ----------------
  {
    id: 'nce-s-l27g-011',
    spec: '2027',
    domain: 'legal_ethical',
    cacrep: 'professional_orientation',
    topic: T6,
    difficulty: 'medium',
    stem: 'An LPC licensed only in State A accepts a job in State B, which has not joined the Counseling Compact. She is scheduled to begin seeing clients there in six weeks. Which step BEST protects her licensure status?',
    options: [
      { id: 'a', text: 'Apply for a State B license, such as by endorsement, before starting', isCorrect: true, rationale: 'Practice in State B requires authorization from State B; endorsement or reciprocity pathways exist for licensed counselors in many states.' },
      { id: 'b', text: 'Begin seeing clients, then apply for State B licensure within a year', isCorrect: false, rationale: 'Practicing before authorization would be unlicensed practice unless State B has a specific temporary provision.' },
      { id: 'c', text: 'Rely on her State A license, since it is valid in any U.S. state', isCorrect: false, rationale: 'Counselor licenses are state-specific; a State A license does not authorize practice in State B.' },
    ],
    rationale: 'Licensure is granted by each state, and practice is generally regulated by the state where services are delivered. Because State B is not a Compact member, she needs a State B license, often obtainable by endorsement, before she sees clients there. She should check State B\'s board rules early, since processing can take weeks or months.',
    references: [
      { source: 'State law', detail: 'Counselor licensure statutes — licensure by endorsement for counselors licensed in other states' },
      { source: 'ACA Code of Ethics', detail: 'Section C.1 — knowledge of and compliance with standards, including laws and regulations' },
    ],
  },
  {
    id: 'nce-s-l27g-012',
    spec: '2027',
    domain: 'legal_ethical',
    cacrep: 'professional_orientation',
    topic: T6,
    difficulty: 'hard',
    stem: 'A counselor licensed in two states receives a public reprimand from State A\'s board for a recordkeeping violation. State B\'s rules require licensees to report discipline taken by other jurisdictions within a set period. What should she do?',
    options: [
      { id: 'a', text: 'Wait and see whether State B\'s board learns of the reprimand on its own', isCorrect: false, rationale: 'Her duty to report does not depend on whether State B finds out another way; failing to report can be a separate violation.' },
      { id: 'b', text: 'Report it to State B only if the reprimand later leads to probation', isCorrect: false, rationale: 'The rule covers discipline taken, and a public reprimand is discipline; she cannot wait for a more serious action.' },
      { id: 'c', text: 'Report the reprimand to State B as its rules require, by its deadline', isCorrect: true, rationale: 'Complying with State B\'s self-reporting rule keeps her in good standing there.' },
    ],
    rationale: 'Each licensing board sets its own reporting duties, and many require licensees to report discipline from other jurisdictions. A public reprimand is a disciplinary action even if it does not restrict practice. Timely, accurate self-reporting under each board\'s rules is part of maintaining every license a counselor holds.',
    references: [
      { source: 'State law', detail: 'Board rules — licensee duty to report disciplinary action taken in other jurisdictions (varies by state)' },
    ],
  },

  // ---------------- T7: billing & insurance panels ----------------
  {
    id: 'nce-s-l27g-013',
    spec: '2027',
    domain: 'legal_ethical',
    cacrep: 'professional_orientation',
    topic: T7,
    difficulty: 'medium',
    stem: 'A practice submits a claim to an in-network commercial plan after the plan\'s timely filing deadline has passed, and the claim is denied. The network contract states that members may not be billed for claims denied because of provider error. How should the practice handle the balance?',
    options: [
      { id: 'a', text: 'Bill the client for the full session fee instead of the plan', isCorrect: false, rationale: 'The contract bars billing members for denials caused by the provider\'s late filing.' },
      { id: 'b', text: 'Write off the balance as the network contract requires', isCorrect: true, rationale: 'In-network contracts typically hold the provider responsible for late-filing denials, so the balance is written off.' },
      { id: 'c', text: 'Resubmit the claim with the service date changed to a recent one', isCorrect: false, rationale: 'Altering the date of service on a claim is falsification and could constitute fraud.' },
    ],
    rationale: 'Payers set timely filing limits for claims, and network contracts usually bar providers from billing members when a claim is denied for the provider\'s own administrative error. The practice should write off the amount and fix its claims workflow. Changing dates to beat the deadline would be a false claim.',
    references: [
      { source: 'HHS OIG', detail: 'Compliance guidance — accurate claims submission; falsified claims' },
      { source: 'ACA Code of Ethics', detail: 'Section C.6.b — Reports to Third Parties (accurate, honest reporting, including to insurers)' },
    ],
  },
  {
    id: 'nce-s-l27g-014',
    spec: '2027',
    domain: 'legal_ethical',
    cacrep: 'professional_orientation',
    topic: T7,
    difficulty: 'hard',
    stem: 'A mental health counselor enrolled in Medicare provides a psychotherapy session by video to a 70-year-old client who joins from his own home. Under CMS place-of-service definitions, which POS code describes where this service was furnished?',
    options: [
      { id: 'a', text: 'POS 10, telehealth in the patient\'s home', isCorrect: true, rationale: 'POS 10 is defined as telehealth provided in the patient\'s home.' },
      { id: 'b', text: 'POS 02, telehealth not in the patient\'s home', isCorrect: false, rationale: 'POS 02 is for telehealth when the patient is somewhere other than home, such as a clinic.' },
      { id: 'c', text: 'POS 11, office, where the counselor was located', isCorrect: false, rationale: 'For telehealth, the POS reflects the telehealth setting defined by CMS, not simply the counselor\'s office.' },
    ],
    rationale: 'CMS distinguishes POS 02 (telehealth provided other than in the patient\'s home) from POS 10 (telehealth provided in the patient\'s home), which was added in 2022. Accurate POS coding matters because payment and payer rules can depend on it. Counselors should also check each payer\'s current telehealth modifier requirements.',
    references: [
      { source: 'Medicare (CMS)', detail: 'Place of Service code set — POS 02 and POS 10 telehealth definitions' },
    ],
  },

  // ---------------- T8: compliance training ----------------
  {
    id: 'nce-s-l27g-015',
    spec: '2027',
    domain: 'legal_ethical',
    cacrep: 'professional_orientation',
    topic: T8,
    difficulty: 'hard',
    stem: 'During No Surprises Act training, front-desk staff review good faith estimate (GFE) deadlines. An uninsured client calls and schedules an intake 14 business days from today. By when must the practice provide the GFE?',
    options: [
      { id: 'a', text: 'Within 1 business day after the appointment is scheduled', isCorrect: false, rationale: 'The 1-business-day deadline applies when the service is scheduled 3 to 9 business days ahead.' },
      { id: 'b', text: 'At the time of the intake appointment, before it starts', isCorrect: false, rationale: 'The GFE must be given in advance within set deadlines, not held until the visit.' },
      { id: 'c', text: 'Within 3 business days after the appointment is scheduled', isCorrect: true, rationale: 'When a service is scheduled at least 10 business days ahead, the GFE is due within 3 business days of scheduling.' },
    ],
    rationale: 'Under the No Surprises Act, providers must give uninsured and self-pay clients a good faith estimate of expected charges. If the service is scheduled at least 3 business days ahead, the GFE is due within 1 business day of scheduling; if scheduled at least 10 business days ahead, within 3 business days. Training front-desk staff on these timelines is part of billing compliance.',
    references: [
      { source: 'No Surprises Act', detail: '45 CFR 149.610 — timing of good faith estimates for uninsured (or self-pay) individuals' },
    ],
  },
  {
    id: 'nce-s-l27g-016',
    spec: '2027',
    domain: 'legal_ethical',
    cacrep: 'professional_orientation',
    topic: T8,
    difficulty: 'medium',
    stem: 'In credentialing training, a newly licensed counselor learns that a commercial plan approved her application, with in-network participation effective the first of next month. A client with that plan wants to start sessions this week. What does credentialing guidance MOST likely advise?',
    options: [
      { id: 'a', text: 'See her this week and bill the plan as an in-network provider', isCorrect: false, rationale: 'Services before the effective date are generally not covered as in-network under the contract.' },
      { id: 'b', text: 'Explain in-network status starts next month and discuss options', isCorrect: true, rationale: 'Telling the client about the effective date lets her choose to wait, self-pay, or use out-of-network benefits with full information.' },
      { id: 'c', text: 'Bill this week\'s sessions using a credentialed colleague\'s NPI', isCorrect: false, rationale: 'Billing under another clinician\'s NPI misrepresents who provided the service.' },
    ],
    rationale: 'A payer contract applies from its effective date, so sessions before that date usually cannot be billed as in-network. Credentialing and billing compliance training teaches clinicians to confirm effective dates before seeing members as in-network and to be transparent with clients about costs. Billing under someone else\'s identifier is a false claim.',
    references: [
      { source: 'HHS OIG', detail: 'Compliance guidance — billing only for services rendered by the identified provider' },
      { source: 'ACA Code of Ethics', detail: 'Section A.2.b — informed consent includes fees and billing arrangements' },
    ],
  },

  // ---------------- T9: TMH platform compliance ----------------
  {
    id: 'nce-s-l27g-017',
    spec: '2027',
    domain: 'legal_ethical',
    cacrep: 'professional_orientation',
    topic: T9,
    difficulty: 'medium',
    stem: 'A practice has a business associate agreement covering its healthcare-tier account with a video vendor. When the practice\'s session link fails, a counselor considers starting the session from her free personal account with the same vendor. What should she do?',
    options: [
      { id: 'a', text: 'Use only the BAA-covered account or the plan\'s backup method', isCorrect: true, rationale: 'The BAA protects only the covered account; the free account lacks those contractual safeguards.' },
      { id: 'b', text: 'Use the free account, since this same vendor signed the BAA', isCorrect: false, rationale: 'BAAs usually apply to specific business or healthcare accounts, not to every product the vendor offers.' },
      { id: 'c', text: 'Use the free account today if the client agrees to it aloud', isCorrect: false, rationale: 'Client agreement does not replace the business associate safeguards HIPAA requires of the practice.' },
    ],
    rationale: 'A business associate agreement covers the specific service the practice contracted for. Free or consumer accounts typically fall outside that agreement and may lack required security settings. When the covered link fails, the counselor uses another compliant option, such as the backup method in her plan or a phone call.',
    references: [
      { source: 'HIPAA', detail: 'Privacy and Security Rules — business associate contracts, 45 CFR 164.502(e) and 164.314(a)' },
    ],
  },
  {
    id: 'nce-s-l27g-018',
    spec: '2027',
    domain: 'legal_ethical',
    cacrep: 'professional_orientation',
    topic: T9,
    difficulty: 'easy',
    stem: 'A group practice adds a new telehealth platform that includes video, chat, and file sharing. Under the HIPAA Security Rule, what should the practice do in response to this change?',
    options: [
      { id: 'a', text: 'Rely on the vendor\'s marketing claim that it is HIPAA compliant', isCorrect: false, rationale: 'Vendor marketing does not replace the practice\'s own risk analysis or a business associate agreement.' },
      { id: 'b', text: 'Wait until a security incident occurs before reviewing its risks', isCorrect: false, rationale: 'The Security Rule requires proactive risk analysis, not review only after harm occurs.' },
      { id: 'c', text: 'Include the platform in an updated security risk analysis', isCorrect: true, rationale: 'New systems that handle ePHI should be assessed in the practice\'s risk analysis and risk management plan.' },
    ],
    rationale: 'The HIPAA Security Rule requires covered entities to conduct an accurate and thorough risk analysis of threats to electronic protected health information and to update it as their environment changes. Adding a platform that transmits and stores ePHI is such a change. Findings then guide safeguards like settings, access controls, and staff training.',
    references: [
      { source: 'HIPAA', detail: 'Security Rule — 45 CFR 164.308(a)(1)(ii)(A)-(B): risk analysis and risk management' },
    ],
  },

  // ---------------- T10: documentation supporting reimbursement ----------------
  {
    id: 'nce-s-l27g-019',
    spec: '2027',
    domain: 'legal_ethical',
    cacrep: 'professional_orientation',
    topic: T10,
    difficulty: 'hard',
    stem: 'A counselor provides 95 minutes of crisis psychotherapy to a client hours after a sexual assault. Her note documents urgent risk assessment, de-escalation, mobilizing supports, and safety planning, with start and stop times. Which coding does this documentation support?',
    options: [
      { id: 'a', text: '90839 alone, since it covers any crisis session over 30 minutes', isCorrect: false, rationale: '90839 covers the first 60 minutes (reported for 30 to 74 minutes); time beyond 74 minutes adds 90840.' },
      { id: 'b', text: '90839 for the first 60 minutes plus one unit of 90840', isCorrect: true, rationale: 'For 75 to 104 minutes of crisis psychotherapy, CPT supports 90839 plus one unit of the 90840 add-on.' },
      { id: 'c', text: '90837 plus 90840 for time beyond the first 60 minutes', isCorrect: false, rationale: '90840 is an add-on only to 90839, not to the standard 60-minute psychotherapy code.' },
    ],
    rationale: 'Psychotherapy for crisis is reported with 90839 for the first 60 minutes and 90840 for each additional 30 minutes. Under CPT time rules, 90839 is used for 30 to 74 minutes, and 90839 plus one unit of 90840 for 75 to 104 minutes. The note must document the crisis, the urgent interventions, and total time to support these codes.',
    references: [
      { source: 'AMA CPT', detail: 'Psychotherapy for crisis — 90839 (first 60 minutes) and add-on 90840 (each additional 30 minutes)' },
    ],
  },
  {
    id: 'nce-s-l27g-020',
    spec: '2027',
    domain: 'legal_ethical',
    cacrep: 'assessment',
    topic: T10,
    difficulty: 'medium',
    stem: 'During an internal audit, a biller notices that a client\'s claims list F41.1, generalized anxiety disorder, but the counselor\'s assessment and progress notes document adjustment disorder with anxiety. What is the PRIMARY concern?',
    options: [
      { id: 'a', text: 'The claim diagnosis is not supported by the clinical record', isCorrect: true, rationale: 'The diagnosis on a claim must match and be supported by the documented assessment.' },
      { id: 'b', text: 'Adjustment disorders cannot be billed to any insurance plans', isCorrect: false, rationale: 'Adjustment disorders are DSM-5-TR diagnoses with ICD-10-CM codes and are commonly billable.' },
      { id: 'c', text: 'Claims must list at least two diagnoses to show medical need', isCorrect: false, rationale: 'No such rule exists; medical necessity rests on documented symptoms and impairment.' },
    ],
    rationale: 'Reimbursement depends on documentation that supports what is billed, including the diagnosis. A claim listing a diagnosis that the record does not support can be treated as inaccurate billing in an audit. The practice should determine the correct diagnosis from the record and correct the claims as payer rules require.',
    references: [
      { source: 'ICD-10-CM', detail: 'F41.1 Generalized anxiety disorder; F43.22 Adjustment disorder with anxiety' },
      { source: 'ACA Code of Ethics', detail: 'Section E.5.a — proper diagnosis; Section C.6.b — accurate reporting' },
    ],
  },

  // ---------------- T11: technology-assisted clinical tools ----------------
  {
    id: 'nce-s-l27g-021',
    spec: '2027',
    domain: 'legal_ethical',
    cacrep: 'assessment',
    topic: T11,
    difficulty: 'medium',
    stem: 'A practice turns on its online therapy platform\'s feature that sends the PHQ-9 to clients the evening before each session and scores it automatically. When configuring this feature, which step is MOST important?',
    options: [
      { id: 'a', text: 'Show clients their total score so they can track their progress', isCorrect: false, rationale: 'Sharing scores can be useful but does nothing to ensure that risk responses are acted on.' },
      { id: 'b', text: 'Set the platform to skip item 9 so that no risk alerts get sent', isCorrect: false, rationale: 'Removing the suicide item hides risk information instead of managing it.' },
      { id: 'c', text: 'Set up a process for prompt review and follow-up of item 9 answers', isCorrect: true, rationale: 'Item 9 asks about thoughts of death or self-harm; positive answers need a defined, timely response.' },
    ],
    rationale: 'Automated screening shifts when data arrives, so the practice must plan how it will be reviewed. PHQ-9 item 9 asks about thoughts of being better off dead or of self-harm, and a positive response calls for timely risk assessment. Clients should also be told when results are reviewed and what to do in a crisis before then.',
    references: [
      { source: 'Hays (Assessment)', detail: 'Screening instruments — PHQ-9 and follow-up of positive suicide items' },
      { source: 'ACA Code of Ethics', detail: 'Section H.4.a — benefits and limitations of technology applications' },
    ],
  },
  {
    id: 'nce-s-l27g-022',
    spec: '2027',
    domain: 'legal_ethical',
    cacrep: 'helping_relationships',
    topic: T11,
    difficulty: 'medium',
    stem: 'A counselor plans to use a wearable that tracks heart rate and breathing during coping practice with a 15-year-old who has panic attacks. Her parents will help pay for the device and ask for access to its data dashboard. What should the counselor do FIRST?',
    options: [
      { id: 'a', text: 'Give the parents dashboard access, since they pay for the device', isCorrect: false, rationale: 'Paying for a device does not settle who should see the data or how it affects the teen\'s trust.' },
      { id: 'b', text: 'Agree with the teen and parents on who sees which data, and why', isCorrect: true, rationale: 'Settling data access at the start respects the teen, involves her parents, and avoids later surprises.' },
      { id: 'c', text: 'Keep all the data from the parents, since the teen is the client', isCorrect: false, rationale: 'Parents of minors usually have rights and a role; shutting them out without discussion is not the first step.' },
    ],
    rationale: 'Before using a wearable, the counselor explains what data it collects, where it goes, and who can view it, and reaches agreement as part of informed consent. With minors, access is negotiated with the young person and the parents within state law. Clear agreements protect the alliance and prevent misuse of physiological data.',
    references: [
      { source: 'ACA Code of Ethics', detail: 'Section H.2.a — informed consent for technology; Section B.5.b — responsibility to parents and legal guardians' },
    ],
  },

  // ---------------- T12: professional liability insurance ----------------
  {
    id: 'nce-s-l27g-023',
    spec: '2027',
    domain: 'legal_ethical',
    cacrep: 'professional_orientation',
    topic: T12,
    difficulty: 'easy',
    stem: 'A counselor who holds Counseling Compact privileges begins seeing telehealth clients located in two other member states. When reviewing her professional liability insurance, what should she confirm?',
    options: [
      { id: 'a', text: 'That it covers telehealth to clients located in those states', isCorrect: true, rationale: 'Policies can limit territory or services, so she should confirm out-of-state telehealth is covered.' },
      { id: 'b', text: 'That her clients have bought liability coverage of their own', isCorrect: false, rationale: 'Clients do not carry coverage for a counselor\'s professional services.' },
      { id: 'c', text: 'That each client\'s health plan includes malpractice protection', isCorrect: false, rationale: 'Health plans pay for care; they do not insure the counselor against malpractice claims.' },
    ],
    rationale: 'Professional liability policies define the services and locations they cover. When a counselor adds telehealth or serves clients in other states, she should confirm with her carrier that this practice is covered and update her policy if needed. A coverage gap may only become apparent when a claim is filed.',
    references: [
      { source: 'Counseling Compact', detail: 'Privilege to practice in remote member states' },
      { source: 'Gladding (Counseling: A Comprehensive Profession)', detail: 'Legal aspects — malpractice and liability insurance' },
    ],
  },
  {
    id: 'nce-s-l27g-024',
    spec: '2027',
    domain: 'legal_ethical',
    cacrep: 'professional_orientation',
    topic: T12,
    difficulty: 'medium',
    stem: 'A solo counselor\'s EHR account is breached, requiring client notification letters and a forensic investigation. She assumes her professional liability (malpractice) policy will pay for these costs. Which statement is MOST accurate?',
    options: [
      { id: 'a', text: 'Malpractice policies pay every cost that comes from a data breach', isCorrect: false, rationale: 'Many malpractice policies exclude or sharply limit breach response costs.' },
      { id: 'b', text: 'Breach costs are paid by the clients\' own health insurance plans', isCorrect: false, rationale: 'Health plans do not pay a provider\'s costs of responding to its own breach.' },
      { id: 'c', text: 'Breach costs may need separate cyber liability coverage', isCorrect: true, rationale: 'Cyber liability policies typically address notification, forensics, and related costs that malpractice coverage may not.' },
    ],
    rationale: 'Professional liability insurance focuses on claims arising from professional services. Costs of a data breach, such as notification, forensic review, and regulatory response, are often covered only by a cyber liability policy or endorsement. Counselors who store records electronically should review both types of coverage.',
    references: [
      { source: 'HIPAA', detail: 'Breach Notification Rule — 45 CFR 164.404: notification to individuals' },
      { source: 'Gladding (Counseling: A Comprehensive Profession)', detail: 'Legal aspects — liability insurance and risk management' },
    ],
  },

  // ---------------- T13: Counseling Compact ----------------
  {
    id: 'nce-s-l27g-025',
    spec: '2027',
    domain: 'legal_ethical',
    cacrep: 'professional_orientation',
    topic: T13,
    difficulty: 'easy',
    stem: 'At a staff meeting, a colleague says the Counseling Compact gives counselors one "multistate license" that is valid in every member state. Which statement BEST corrects this?',
    options: [
      { id: 'a', text: 'It replaces each state license with a single national license', isCorrect: false, rationale: 'The Compact does not create a national license; home-state licenses remain.' },
      { id: 'b', text: 'It grants a separate privilege to practice in each remote state', isCorrect: true, rationale: 'Under the Compact, a counselor obtains a privilege to practice for each remote member state, based on a home-state license.' },
      { id: 'c', text: 'It lets counselors practice in any state once they pass the NCE', isCorrect: false, rationale: 'Passing an exam does not authorize practice; the Compact applies only among member states and requires a home-state license.' },
    ],
    rationale: 'The Counseling Compact uses a privilege-to-practice model rather than a multistate license. A counselor with an active, unencumbered license in a home member state applies for a privilege in each remote member state where clients are located, meeting any requirements such as a jurisprudence exam. Privileges are available only in member states that have begun issuing them.',
    references: [
      { source: 'Counseling Compact', detail: 'Privilege to practice — issued per remote member state; home-state license required' },
    ],
  },
  {
    id: 'nce-s-l27g-026',
    spec: '2027',
    domain: 'legal_ethical',
    cacrep: 'professional_orientation',
    topic: T13,
    difficulty: 'easy',
    stem: 'A counselor practicing under a Compact privilege learns that the remote state requires counselors to give clients a written professional disclosure statement, which her home state does not require. For clients located in the remote state, what should she do?',
    options: [
      { id: 'a', text: 'Provide the disclosure statement as the remote state requires', isCorrect: true, rationale: 'Practice under a privilege is subject to the laws and rules of the remote state where the client is located.' },
      { id: 'b', text: 'Follow only her home state\'s rules, since her license is there', isCorrect: false, rationale: 'Her home license is the basis for the privilege, but remote-state practice follows remote-state rules.' },
      { id: 'c', text: 'Ask these clients whether they would like such a statement', isCorrect: false, rationale: 'A required disclosure is not optional for the client to request.' },
    ],
    rationale: 'A counselor using a Compact privilege must follow the laws and regulations of the remote state where the client is located. Requirements such as professional disclosure statements, record rules, or reporting duties can differ from the home state. Checking each remote state\'s rules is part of practicing within the Compact.',
    references: [
      { source: 'Counseling Compact', detail: 'Practice under a privilege is subject to the remote state\'s laws and regulations' },
    ],
  },

  // ---------------- T14: disability accommodations ----------------
  {
    id: 'nce-s-l27g-027',
    spec: '2027',
    domain: 'legal_ethical',
    cacrep: 'social_cultural',
    topic: T14,
    difficulty: 'hard',
    stem: 'A hearing 10-year-old is in counseling at a private practice. His mother, who is Deaf and uses ASL, will attend regular parent sessions to discuss his treatment. The counselor plans to communicate with her by passing written notes. Under the ADA, what is the counselor\'s obligation?',
    options: [
      { id: 'a', text: 'None, because the mother is not the client receiving counseling services', isCorrect: false, rationale: 'The ADA\'s effective communication duty extends to companions, such as a parent involved in a child\'s care.' },
      { id: 'b', text: 'Have the child sign for his mother during the parent sessions', isCorrect: false, rationale: 'Using a minor child to interpret is generally not permitted outside emergencies and harms the clinical work.' },
      { id: 'c', text: 'Provide effective communication for her, such as an interpreter', isCorrect: true, rationale: 'For lengthy, complex discussions with an ASL user, a qualified interpreter is often needed for communication to be effective.' },
    ],
    rationale: 'Title III of the ADA requires public accommodations, including private practices, to communicate effectively with people with disabilities, including companions such as the parent of a minor client. Written notes may work for brief exchanges but are often inadequate for complex treatment discussions with an ASL user. The practice bears the cost of the interpreter.',
    references: [
      { source: 'ADA', detail: 'Title III — 28 CFR 36.303: auxiliary aids and services; effective communication with companions' },
    ],
  },
  {
    id: 'nce-s-l27g-028',
    spec: '2027',
    domain: 'legal_ethical',
    cacrep: 'social_cultural',
    topic: T14,
    difficulty: 'easy',
    stem: 'A 31-year-old client with cerebral palsy, whose speech takes extra time to understand, arrives for an intake with her personal care aide. Which approach BEST accommodates her?',
    options: [
      { id: 'a', text: 'Speak to her directly and ask how she prefers to communicate', isCorrect: true, rationale: 'Addressing the client directly and asking her preferences respects her autonomy and identifies the right supports.' },
      { id: 'b', text: 'Direct questions to the aide, who knows how she communicates', isCorrect: false, rationale: 'Talking past the client to her aide undermines her autonomy and the counseling relationship.' },
      { id: 'c', text: 'Finish her sentences to save time and reduce her frustration', isCorrect: false, rationale: 'Finishing sentences risks misunderstanding and signals impatience; extra time is the accommodation.' },
    ],
    rationale: 'Disability-affirming practice starts by treating the client as the expert on her own needs. The counselor speaks to her directly, allows extra time, checks understanding, and asks what supports help, such as a communication board or typed responses. Whether the aide stays in session is the client\'s choice, given confidentiality.',
    references: [
      { source: 'ADA', detail: 'Effective communication — consulting the individual about the aid or service needed' },
      { source: 'ACA Code of Ethics', detail: 'Section C.5 — nondiscrimination' },
    ],
  },

  // ---------------- T15: review & update emergency plan ----------------
  {
    id: 'nce-s-l27g-029',
    spec: '2027',
    domain: 'legal_ethical',
    cacrep: 'social_cultural',
    topic: T15,
    difficulty: 'medium',
    stem: 'A community practice serves many clients who prefer Spanish or Haitian Creole. Reviewing its emergency plan, the director finds that its closure text alerts and crisis instructions exist only in English. Which update is MOST needed?',
    options: [
      { id: 'a', text: 'Ask bilingual clients to pass the alerts on to other clients', isCorrect: false, rationale: 'Relying on clients to relay messages is unreliable and shifts the practice\'s duty onto clients.' },
      { id: 'b', text: 'Prepare alerts in clients\' preferred languages ahead of time', isCorrect: true, rationale: 'Translating alerts in advance, with qualified translators, ensures that every client can act on them in an emergency.' },
      { id: 'c', text: 'Keep English alerts, as translation can wait until a crisis', isCorrect: false, rationale: 'Waiting until a crisis delays critical information when time matters most.' },
    ],
    rationale: 'An emergency plan works only if everyone can understand its messages. Federally funded providers have language access duties under Title VI and Section 1557, and good practice for all providers is to prepare translated alerts and crisis instructions before they are needed. Translations should be done or checked by qualified translators.',
    references: [
      { source: 'Title VI & Section 1557', detail: 'Language access for individuals with limited English proficiency; qualified translators' },
    ],
  },
  {
    id: 'nce-s-l27g-030',
    spec: '2027',
    domain: 'legal_ethical',
    cacrep: 'professional_orientation',
    topic: T15,
    difficulty: 'easy',
    stem: 'A group practice has several versions of its emergency plan saved in different shared folders, and staff are unsure which one is current. Which review practice BEST fixes this problem?',
    options: [
      { id: 'a', text: 'Let each counselor keep whichever version she finds most useful', isCorrect: false, rationale: 'Multiple versions mean staff may follow different procedures during the same incident.' },
      { id: 'b', text: 'Delete all the plan files and rely on staff memory in incidents', isCorrect: false, rationale: 'Memory is unreliable under stress; a written plan is the reference staff need.' },
      { id: 'c', text: 'Name an owner, date each revision, and share only the current one', isCorrect: true, rationale: 'An accountable owner and version control make the current plan clear and keep reviews on schedule.' },
    ],
    rationale: 'Plan review includes managing the document itself. Assigning a responsible person, dating each revision, retiring old copies, and telling staff where the current version lives prevents confusion when the plan must be used. HIPAA also requires covered entities to retain and review their contingency procedures.',
    references: [
      { source: 'HIPAA', detail: 'Security Rule — 45 CFR 164.316(b): documentation, availability, and periodic review of policies and procedures' },
    ],
  },

  // ---------------- T16: secure records ----------------
  {
    id: 'nce-s-l27g-031',
    spec: '2027',
    domain: 'legal_ethical',
    cacrep: 'professional_orientation',
    topic: T16,
    difficulty: 'medium',
    stem: 'A billing assistant faxes a client\'s treatment summary to a wrong number, which turns out to belong to a local auto repair shop. What should the practice do?',
    options: [
      { id: 'a', text: 'Report it internally and assess it as a possible breach', isCorrect: true, rationale: 'A misdirected disclosure of PHI is presumed a breach unless a risk assessment shows a low probability of compromise.' },
      { id: 'b', text: 'Take no action, since faxes sent to shops are rarely read', isCorrect: false, rationale: 'The practice cannot assume the fax went unread; HIPAA requires a documented assessment.' },
      { id: 'c', text: 'Call the client only if the auto shop complains about it', isCorrect: false, rationale: 'Notification duties depend on the breach assessment, not on whether the recipient complains.' },
    ],
    rationale: 'An impermissible disclosure of protected health information is presumed to be a breach unless a four-factor risk assessment shows a low probability that the information was compromised. The practice should try to retrieve or confirm destruction of the fax, document the assessment, and notify as required. Fixing the fax process prevents repeats.',
    references: [
      { source: 'HIPAA', detail: 'Breach Notification Rule — 45 CFR 164.402: presumption of breach and four-factor risk assessment' },
    ],
  },
  {
    id: 'nce-s-l27g-032',
    spec: '2027',
    domain: 'legal_ethical',
    cacrep: 'professional_orientation',
    topic: T16,
    difficulty: 'medium',
    stem: 'A practice is replacing office computers that stored client records and wants to donate the old machines to a local school. Which step BEST protects client information?',
    options: [
      { id: 'a', text: 'Delete client files and empty the trash folder before donating', isCorrect: false, rationale: 'Deleted files can often be recovered; deletion does not sanitize a drive.' },
      { id: 'b', text: 'Sanitize or destroy the drives by an approved method first', isCorrect: true, rationale: 'Proper sanitization, such as secure wiping or physical destruction, makes the data unrecoverable.' },
      { id: 'c', text: 'Remove the computers\' log-in passwords before donating them', isCorrect: false, rationale: 'Removing passwords makes stored data easier to reach, not harder.' },
    ],
    rationale: 'The HIPAA Security Rule requires policies for the final disposal of electronic media containing ePHI and for removing ePHI before media are reused. Simply deleting files leaves data recoverable. Drives should be wiped using recognized sanitization methods or physically destroyed, and the disposal documented.',
    references: [
      { source: 'HIPAA', detail: 'Security Rule — 45 CFR 164.310(d)(2)(i)-(ii): disposal and media re-use' },
    ],
  },

  // ---------------- T17: court proceedings ----------------
  {
    id: 'nce-s-l27g-033',
    spec: '2027',
    domain: 'legal_ethical',
    cacrep: 'professional_orientation',
    topic: T17,
    difficulty: 'medium',
    stem: 'A counselor receives a subpoena to testify at a deposition about a current client in a civil case. The client has not waived privilege, and there is no court order requiring disclosure. Which course of action BEST reflects best practice?',
    options: [
      { id: 'a', text: 'Ignore the subpoena, since the client has not waived privilege', isCorrect: false, rationale: 'A subpoena requires a response; ignoring it can lead to contempt even when privilege applies.' },
      { id: 'b', text: 'Appear and answer every question fully, as the subpoena requires', isCorrect: false, rationale: 'A subpoena alone does not override privilege; answering fully could breach confidentiality.' },
      { id: 'c', text: 'Respond, consult an attorney, and assert privilege for the client', isCorrect: true, rationale: 'The counselor responds to the subpoena, gets legal advice, and asserts privilege on the client\'s behalf unless it is waived or a court orders disclosure.' },
    ],
    rationale: 'A subpoena compels a response but does not by itself authorize disclosure of privileged information. Best practice is to notify the client, consult an attorney, appear or respond as legally required, and assert privilege on the client\'s behalf. Disclosure follows only with the client\'s authorization or a court order, and then is limited to what is required.',
    references: [
      { source: 'ACA Code of Ethics', detail: 'Section B.2.d — court-ordered disclosure; Section B.2.e — minimal disclosure' },
      { source: 'State law', detail: 'Privileged communication statutes — privilege held by the client and asserted by the counselor' },
    ],
  },
  {
    id: 'nce-s-l27g-034',
    spec: '2027',
    domain: 'legal_ethical',
    cacrep: 'professional_orientation',
    topic: T17,
    difficulty: 'hard',
    stem: 'Before testifying as a fact witness about a client\'s attendance, a counselor plans to bring her complete client file to the witness stand so she can look up dates as needed. Her attorney advises against it. What is the MOST likely concern?',
    options: [
      { id: 'a', text: 'Notes used on the stand may be opened to review by opposing counsel', isCorrect: true, rationale: 'Under rules of evidence, writings used to refresh a witness\'s memory can often be inspected by the other side.' },
      { id: 'b', text: 'Witnesses are barred from looking at any notes while testifying', isCorrect: false, rationale: 'Witnesses may refresh their memory with documents; the issue is what that exposes.' },
      { id: 'c', text: 'Bringing notes means she will be treated as an expert witness', isCorrect: false, rationale: 'Witness type depends on the testimony given, not on whether notes are brought.' },
    ],
    rationale: 'Rules of evidence in many jurisdictions allow the opposing party to inspect a writing a witness uses to refresh memory and to question the witness about it. Bringing the full file can expose more client information than the authorization or order covers. Counselors should consult an attorney about what to bring and bring only what is needed.',
    references: [
      { source: 'State law', detail: 'Rules of evidence — writings used to refresh a witness\'s memory (rules vary by jurisdiction)' },
      { source: 'ACA Code of Ethics', detail: 'Section B.2.e — minimal disclosure' },
    ],
  },

  // ---------------- T18: EHR ----------------
  {
    id: 'nce-s-l27g-035',
    spec: '2027',
    domain: 'legal_ethical',
    cacrep: 'professional_orientation',
    topic: T18,
    difficulty: 'easy',
    stem: 'A busy counselor gives her EHR password to her intern so the intern can enter progress notes under the counselor\'s account while she is in sessions. What is the PRIMARY problem with this practice?',
    options: [
      { id: 'a', text: 'The intern\'s notes will take longer to finish this way', isCorrect: false, rationale: 'Speed is not the issue; accountability and security are.' },
      { id: 'b', text: 'Shared log-ins defeat unique user IDs and audit trails', isCorrect: true, rationale: 'Each user needs a unique ID so that access and entries can be traced to the right person.' },
      { id: 'c', text: 'The intern should have used the front desk\'s account', isCorrect: false, rationale: 'Using any other person\'s account has the same problem of false attribution.' },
    ],
    rationale: 'The HIPAA Security Rule requires unique user identification so that each person\'s access can be tracked. When staff share credentials, the audit trail shows the wrong author, notes misrepresent who wrote them, and supervision requirements are bypassed. Interns should have their own accounts and notes co-signed as required.',
    references: [
      { source: 'HIPAA', detail: 'Security Rule — 45 CFR 164.312(a)(2)(i): unique user identification; 164.312(b) audit controls' },
    ],
  },
  {
    id: 'nce-s-l27g-036',
    spec: '2027',
    domain: 'legal_ethical',
    cacrep: 'professional_orientation',
    topic: T18,
    difficulty: 'hard',
    stem: 'A 16-year-old consents to her own outpatient counseling under her state\'s minor-consent law, which limits parental access to those records. Her mother has proxy access to the teen\'s account in the agency\'s EHR patient portal. What should the counselor do?',
    options: [
      { id: 'a', text: 'Check state law and set proxy access to block protected notes', isCorrect: true, rationale: 'Portal proxy settings should match state law so that records protected by minor consent are not exposed.' },
      { id: 'b', text: 'Leave proxy access alone, since parents may see all of a minor\'s records', isCorrect: false, rationale: 'Where state law lets a minor consent and limits parental access, the parent is not entitled to those records.' },
      { id: 'c', text: 'Delete the teen\'s notes from the EHR so her mother cannot read them', isCorrect: false, rationale: 'Deleting records breaks documentation and retention duties; access controls are the right tool.' },
    ],
    rationale: 'Under HIPAA, when a minor lawfully consents to her own care and state law does not require parental consent, the parent may not be the personal representative for those records. EHR portal proxy settings must be configured to match these rules. Counselors should know their state\'s minor-consent laws and how their system handles proxy access.',
    references: [
      { source: 'HIPAA', detail: 'Privacy Rule — 45 CFR 164.502(g): personal representatives and minors' },
      { source: 'State law', detail: 'Minor-consent statutes for outpatient mental health care (vary by state)' },
    ],
  },

  // ---------------- T19: AI ----------------
  {
    id: 'nce-s-l27g-037',
    spec: '2027',
    domain: 'legal_ethical',
    cacrep: 'social_cultural',
    topic: T19,
    difficulty: 'medium',
    stem: 'A counselor uses an AI tool to translate a safety plan worksheet into Tagalog for a 62-year-old client with limited English proficiency. What should the counselor do before giving the translated plan to the client?',
    options: [
      { id: 'a', text: 'Give it as is, since AI translations are accurate for common languages', isCorrect: false, rationale: 'Machine translation can distort meaning, which is especially risky in safety-critical content.' },
      { id: 'b', text: 'Have the client\'s teenage grandson check the translation at home', isCorrect: false, rationale: 'Family members, especially minors, are not qualified translators and raise confidentiality concerns.' },
      { id: 'c', text: 'Have a qualified translator review it for accuracy and meaning', isCorrect: true, rationale: 'A qualified human review catches errors before the client relies on the plan in a crisis.' },
    ],
    rationale: 'AI tools can speed up translation, but the counselor remains responsible for content accuracy. For covered health programs, the Section 1557 rule calls for review by a qualified human translator when machine translation is used for critical documents. A safety plan must be understood exactly as intended, so the counselor also reviews it with the client.',
    references: [
      { source: 'Title VI & Section 1557', detail: 'Section 1557 rule, 45 CFR 92.201(c)(3) — machine translation of critical content must be reviewed by a qualified human translator' },
    ],
  },
  {
    id: 'nce-s-l27g-038',
    spec: '2027',
    domain: 'legal_ethical',
    cacrep: 'professional_orientation',
    topic: T19,
    difficulty: 'medium',
    stem: 'A counselor reviews the settings of her AI note-taker, whose vendor has signed a business associate agreement. By default, the tool keeps raw session audio indefinitely after notes are finalized. Which action BEST reflects responsible use of AI?',
    options: [
      { id: 'a', text: 'Keep the default, since stored audio may help her at a later date', isCorrect: false, rationale: 'Keeping recordings with no need increases breach risk and goes beyond what clients may expect.' },
      { id: 'b', text: 'Set audio to delete per her retention policy and tell clients', isCorrect: true, rationale: 'Limiting retention reduces risk, and informing clients keeps consent accurate.' },
      { id: 'c', text: 'Download the audio onto her personal laptop as an extra backup', isCorrect: false, rationale: 'Copying recordings to a personal device adds unsecured copies of sensitive data.' },
    ],
    rationale: 'Responsible AI use includes configuring tools to collect and keep only what is needed. Indefinitely stored session audio creates privacy and breach risk without clinical benefit once notes are final. The counselor sets retention to match her policy and informs clients what is kept, for how long, and how it is deleted.',
    references: [
      { source: 'HIPAA', detail: 'Privacy Rule — minimum necessary; Security Rule — risk management of stored ePHI' },
      { source: 'ACA Code of Ethics', detail: 'Section H.2.a — informed consent regarding technology, including storage of records' },
    ],
  },

  // ---------------- T20: marketing ----------------
  {
    id: 'nce-s-l27g-039',
    spec: '2027',
    domain: 'legal_ethical',
    cacrep: 'professional_orientation',
    topic: T20,
    difficulty: 'medium',
    stem: 'A marketing consultant suggests uploading the practice\'s client email list to a social media ad platform so it can target "lookalike" audiences. The platform has not signed a business associate agreement with the practice. What should the counselor do?',
    options: [
      { id: 'a', text: 'Decline, since it would disclose client information to the platform', isCorrect: true, rationale: 'A list of clients of a counseling practice reveals that each person receives services and is protected health information.' },
      { id: 'b', text: 'Upload the list, since email addresses alone are not health data', isCorrect: false, rationale: 'Linked to a counseling practice\'s client list, email addresses identify clients and are PHI.' },
      { id: 'c', text: 'Upload only clients who have liked the practice\'s page before', isCorrect: false, rationale: 'Liking a page is not a HIPAA authorization; the disclosure would still be impermissible.' },
    ],
    rationale: 'Under HIPAA, identifiers such as email addresses become protected health information when they show that a person is a client of a health care provider. Sharing a client list with an ad platform for targeting is a disclosure for marketing that requires written authorization. Ethically, it also breaches confidentiality.',
    references: [
      { source: 'HIPAA', detail: 'Privacy Rule — 45 CFR 164.508(a)(3): authorization required for marketing' },
      { source: 'ACA Code of Ethics', detail: 'Section B.1.c — respect for confidentiality' },
    ],
  },
  {
    id: 'nce-s-l27g-040',
    spec: '2027',
    domain: 'legal_ethical',
    cacrep: 'professional_orientation',
    topic: T20,
    difficulty: 'easy',
    stem: 'A counselor paid for an online certificate that required no exam, case review, or supervised training. She wants her practice website to call her a "Certified Trauma Specialist." Which approach BEST fits the ACA Code of Ethics?',
    options: [
      { id: 'a', text: 'Use the title, since she paid for it and holds the certificate', isCorrect: false, rationale: 'Holding a purchased certificate does not make the title an accurate claim of specialized competence.' },
      { id: 'b', text: 'Use the title but list it below her license on the website', isCorrect: false, rationale: 'Placement does not fix a credential claim that may mislead the public.' },
      { id: 'c', text: 'Describe her training accurately without implying expertise', isCorrect: true, rationale: 'Counselors represent their qualifications accurately and avoid implying competence they have not established.' },
    ],
    rationale: 'Counselors claim or imply only professional qualifications they actually hold and correct misrepresentations. A certificate that required no assessment of competence should not be marketed as specialist status. Describing the training plainly lets the public judge it accurately.',
    references: [
      { source: 'ACA Code of Ethics', detail: 'Section C.4.a — Accurate Representation; Section C.3.a — accurate advertising' },
    ],
  },
];
