// deep-cases-batch-23-04.js — NCMHCE deep case: "Panic and sleep problems" that turn out to be partner violence (focus: Intimate partner violence)
// Authored to NCMHCE_DeepCase_Generation_Spec.md. Id block D901–D910 reserved
// for the Oct 2026 Areas-of-Clinical-Focus fill (live DB generator was at D314).
//
//   ncmhce-D904  Posttraumatic Stress Disorder (F43.10) — Trauma — hard
//
// Standalone deliverable for SME review. Do NOT auto-import — importing into the
// live DB is a separate, human-run step.

const O = (id, text, weight, ex) => ({
  id,
  text,
  isCorrect: weight === 3,
  weight,
  rationale: ex.r,
  explanation: { approach: ex.approach, rationale: ex.why, keyIndicators: ex.keys, commonMistake: ex.mistake },
});
const Q = (id, domain, question, evidenceRef, options) => ({ id, domain, question, evidenceRef, options });

// ============================================================================
// D904 — Posttraumatic Stress Disorder (F43.10) — Trauma — hard
// Focus area: Intimate partner violence
// ============================================================================
const D904 = {
  id: 'ncmhce-D904',
  title: 'Panic and sleep problems that turn out to be partner violence',
  category: 'Trauma',
  difficulty: 'hard',
  primaryDiagnosis: { name: 'Posttraumatic Stress Disorder', code: 'F43.10' },
  diagnosis: { name: 'Posttraumatic Stress Disorder', code: 'F43.10' },
  differentialOptions: [
    { id: 'do1', name: 'Panic Disorder', isCorrect: false },
    { id: 'do2', name: 'Posttraumatic Stress Disorder', isCorrect: true },
    { id: 'do3', name: 'Acute Stress Disorder', isCorrect: false },
    { id: 'do4', name: 'Adjustment Disorder, with Mixed Anxiety and Depressed Mood', isCorrect: false },
  ],
  narrative: {
    intake:
      'Aaliyah Brooks, a 29-year-old African American dental hygienist and mother of two (ages 7 and 4), is referred to an outpatient community ' +
      'counseling center by her primary care provider for "panic attacks and sleep problems." Her medical workup, including thyroid labs and an ECG, ' +
      'was unremarkable. She describes surges of pounding heart, chest tightness, and shaking that began about seven months ago, sleeps three to four ' +
      'hours a night, and wakes from nightmares she "can\'t remember." Attacks have happened when a man raised his voice in a store and when she ' +
      'smelled a particular cologne at work. Asked about home, she says things with her husband Terrence, 34, have been "tense" and adds, almost as an ' +
      'aside, "He grabbed me by the neck once last spring, but he\'d been drinking and he apologized. He\'s not like that." She laughs it off and ' +
      'returns to asking for help with sleep.',
    session1:
      'Aaliyah arrives early and sits facing the door. She now says the panic started the night of the neck incident in March, when she "saw ' +
      'spots" and thought she was going to die, and that her 7-year-old son watched from the hallway before hiding in a closet. She replays that night ' +
      'when she tries to sleep, avoids the street where they lived, startles at the door, feels "numb" with friends, and says, "Maybe I pushed him ' +
      'too far." Near the end of the session she mentions that three weeks ago she and the children moved into her sister\'s apartment. Terrence has ' +
      'texted her dozens of times a day, showed up in the parking lot of her dental office twice, and told her, "If you take my kids, you\'ll regret ' +
      'it." She notes he keeps a handgun in his truck "for work." She says she does not want to involve the police.',
    session2:
      'Aaliyah reports that Terrence called the counseling center last week asking whether she was a client and saying he wants to "join the ' +
      'sessions" for couples counseling; she thinks it might help and is considering moving back because money is tight and the children miss him. ' +
      'She also shares that Terrence is the policyholder on the family health plan and has the login to the insurance portal, and asks the counselor ' +
      'to "leave the abuse out" of her records. A structured suicide screen finds no current ideation, intent, or plan. She asks what the counselor ' +
      'is "required to tell anyone" about what her son saw.',
  },
  diagnosticRationale:
    'Aaliyah was strangled by her partner (a Criterion A event involving threatened death and serious injury) and, for about seven months, has had ' +
    'intrusions (trauma-cued nightmares and replaying), avoidance of reminders, negative alterations in cognition and mood (self-blame, detachment), ' +
    'and marked arousal (hypervigilance, startle, insomnia) with impairment, which meets posttraumatic stress disorder. Her panic attacks are cued by ' +
    'trauma reminders rather than unexpected, which argues against panic disorder; the duration exceeds the one-month limit of acute stress disorder; ' +
    'and a Criterion A trauma with full PTSD symptom clusters precludes an adjustment disorder. Ongoing partner violence, a recent separation, ' +
    'stalking, threats, firearm access, and prior strangulation make danger assessment and safety planning the first clinical priority.',
  references: [
    { id: 'R1', source: 'DSM-5-TR', detail: 'PTSD Criteria A–H (exposure, intrusion, avoidance, negative cognitions/mood, arousal, >1 month); panic attack specifier; acute stress disorder 3 days–1 month; adjustment disorder excludes Criterion A presentations meeting PTSD' },
    { id: 'R2', source: 'Hays (Assessment)', detail: 'Structured risk assessment; IPV danger/lethality indicators (e.g., Campbell Danger Assessment: prior strangulation, firearm access, recent separation, threats to kill, stalking)' },
    { id: 'R3', source: 'ACA Code of Ethics', detail: 'A.1.a client welfare; A.2 informed consent; A.8 multiple clients; B.1.c respect for confidentiality; B.2.a serious and foreseeable harm and legal requirements; B.2.e minimal disclosure; B.6 records and documentation' },
    { id: 'R4', source: 'State law', detail: 'Child abuse/neglect mandated reporting; whether child exposure to domestic violence is reportable varies by state; competent adult IPV victims generally not subject to mandated reporting by counselors' },
    { id: 'R5', source: 'VA/DoD CPG', detail: 'PTSD: individual trauma-focused psychotherapy (e.g., CPT, PE) as first-line; address safety and stabilization needs when initiating care' },
    { id: 'R6', source: 'APA CPG', detail: 'PTSD guideline: CPT, PE, CBT, and cognitive therapy recommended for adults with PTSD' },
    { id: 'R7', source: 'HIPAA', detail: '45 CFR 164.522(b): right to request confidential communications; health plans must accommodate when disclosure could endanger the individual; 164.522(a) restriction requests' },
    { id: 'R8', source: 'Wiger (Documentation)', detail: 'Objective, behaviorally specific documentation of risk, safety planning, and clinical rationale' },
    { id: 'R9', source: 'C-SSRS', detail: 'Structured suicide-risk screening' },
  ],
  questions: [
    // ---------------- Assessment & Conceptualization (5) ----------------
    Q('q1', 'intake', 'At intake, which detail most needs direct, immediate follow-up before the counselor turns to her sleep complaint?', ['R2', 'R1'], [
      O('a', 'The cologne-triggered attacks at work, to map her interoceptive cues and plan panic-focused exposure', -1,
        { r: 'Panic mapping misses the danger signal', approach: 'Panic-protocol framing', why: 'Mapping cues for interoceptive exposure treats the attacks as panic disorder and passes over the violence disclosure', keys: ['cued attacks', 'neck-grabbing mentioned in passing'], mistake: 'Applying a panic disorder protocol before asking about the disclosed assault' }),
      O('b', 'The neck-grabbing she minimized, asked about directly, since prior strangulation signals high lethality risk', 3,
        { r: 'Strangulation is a key lethality indicator', approach: 'Follow the buried safety disclosure', why: 'Nonfatal strangulation is among the strongest predictors of later lethal partner violence, so a minimized mention is explored directly and gently', keys: ['"grabbed me by the neck"', '"he\'s not like that" minimization'], mistake: 'Accepting the client\'s minimization and moving on to the presenting complaint' }),
      O('c', 'Her husband\'s view of the conflict, by inviting him to a session so both accounts can be heard', -2,
        { r: 'Inviting the partner endangers her', approach: 'Collateral framing', why: 'Bringing in a partner who has used violence can expose her disclosures and raise danger; her account is assessed privately', keys: ['possible abuser', 'private disclosure'], mistake: 'Treating partner violence as a two-sided conflict needing both accounts' }),
      O('d', 'Her nightly sleep pattern, logged in a two-week sleep diary before she and the counselor decide on further assessment', 0,
        { r: 'Sleep data is useful but secondary', approach: 'Presenting-complaint framing', why: 'A sleep diary is reasonable, but it does not take priority over clarifying a disclosed strangulation', keys: ['insomnia', 'nightmares'], mistake: 'Following the stated complaint ahead of a buried safety disclosure' }),
    ]),
    Q('q2', 'core', 'Which feature best distinguishes her presentation from panic disorder?', ['R1'], [
      O('a', 'Her attacks are cued by trauma reminders and sit inside intrusion, avoidance, and arousal symptoms', 3,
        { r: 'Cued attacks within a PTSD picture', approach: 'Contrast expected with unexpected attacks', why: 'Panic disorder requires recurrent unexpected attacks; hers are triggered by reminders of the assault and occur alongside the full PTSD clusters', keys: ['raised male voice', 'cologne trigger', 'nightmares and avoidance'], mistake: 'Diagnosing panic disorder from the attacks alone' }),
      O('b', 'Her attacks include a pounding heart, chest tightness, and shaking that she feels in her body', -1,
        { r: 'Somatic symptoms are shared', approach: 'Symptom-list framing', why: 'Physical panic symptoms occur in both conditions and do not discriminate', keys: ['shared somatic symptoms'], mistake: 'Using nonspecific panic symptoms as the discriminator' }),
      O('c', 'Her medical workup was normal, which removes a physical cause and confirms an anxiety disorder', 0,
        { r: 'Medical rule-out is necessary, not discriminating', approach: 'Rule-out framing', why: 'A normal workup is needed for either diagnosis but does not separate PTSD from panic disorder', keys: ['normal thyroid and ECG'], mistake: 'Treating a necessary rule-out as the decisive differential feature' }),
      O('d', 'Her attacks started in adulthood, whereas panic disorder typically begins in early childhood', -2,
        { r: 'Onset claim is factually wrong', approach: 'Onset framing', why: 'Panic disorder commonly begins in late adolescence or early adulthood; onset age does not rule it out', keys: ['age of onset'], mistake: 'Relying on an inaccurate onset rule to differentiate' }),
    ]),
    Q('q3', 'core', 'Why does posttraumatic stress disorder fit better than acute stress disorder or an adjustment disorder?', ['R1'], [
      O('a', 'She is still in contact with her husband, so the stressor is ongoing rather than in the past', -1,
        { r: 'Ongoing contact does not decide the diagnosis', approach: 'Stressor-status framing', why: 'PTSD can be diagnosed while danger continues; the event type, clusters, and duration decide it', keys: ['ongoing contact'], mistake: 'Believing PTSD requires the threat to be over' }),
      O('b', 'Her distress began after a change in the relationship, so it is a reaction to stress rather than to trauma', -2,
        { r: 'Reframing strangulation as stress is wrong', approach: 'Stressor-reaction framing', why: 'Strangulation is a Criterion A event; calling it a relationship stressor misses the trauma and the danger', keys: ['strangulation', 'threatened death'], mistake: 'Downgrading a life-threatening assault to an ordinary stressor' }),
      O('c', 'A strangulation (Criterion A) and full symptom clusters have lasted about seven months, past one month', 3,
        { r: 'Criterion A event, all clusters, >1 month', approach: 'Apply exposure, clusters, and duration', why: 'Acute stress disorder ends at one month, and adjustment disorder is not used when a Criterion A event produces a full PTSD picture', keys: ['strangulation in March', 'intrusion, avoidance, cognition, arousal'], mistake: 'Ignoring duration and Criterion A when choosing among trauma-related disorders' }),
      O('d', 'Her symptoms are severe enough to impair work and parenting, which an adjustment disorder lacks', 0,
        { r: 'Impairment is present in all three', approach: 'Severity framing', why: 'Impairment is required in all three diagnoses; the Criterion A event and duration are the discriminators', keys: ['work and parenting impact'], mistake: 'Using severity rather than criteria to differentiate' }),
    ]),
    Q('q4', 'intake', 'Given the session 1 disclosures, what is the most appropriate next assessment step?', ['R2', 'R9'], [
      O('a', 'Conclude her danger has dropped since she moved out, and shift the focus to her panic symptoms', -2,
        { r: 'Separation raises, not lowers, danger', approach: 'Left-equals-safe framing', why: 'The period after separation is one of the highest-risk times for lethal partner violence', keys: ['moved out three weeks ago', 'threat and stalking'], mistake: 'Assuming leaving ends the danger' }),
      O('b', 'Wait until rapport is stronger before asking more about Terrence, so she does not feel judged', -1,
        { r: 'Delaying danger assessment is unsafe', approach: 'Rapport-first framing', why: 'Rapport matters, but current lethality indicators call for assessment now, done in a nonjudgmental way', keys: ['firearm', 'recent threats'], mistake: 'Deferring risk assessment to protect the alliance' }),
      O('c', 'Screen her own suicide risk with the C-SSRS today, and then revisit Terrence\'s behavior at the next session', 0,
        { r: 'Suicide screening is needed but incomplete', approach: 'Self-harm-only framing', why: 'Suicide screening is appropriate for IPV survivors, but it does not assess the danger he poses now', keys: ['IPV raises suicide risk', 'external threat present'], mistake: 'Screening only self-directed risk when the main threat is the partner' }),
      O('d', 'Complete a structured danger assessment covering separation, the gun, strangulation, threats, and stalking', 3,
        { r: 'Structured lethality assessment now', approach: 'Assess IPV lethality indicators', why: 'Recent separation, firearm access, prior strangulation, threats, and stalking are recognized lethality indicators that call for structured assessment', keys: ['handgun in truck', 'moved out three weeks ago', '"you\'ll regret it"'], mistake: 'Treating each disclosure separately instead of weighing them together' }),
    ]),
    Q('q5', 'intake', 'What else must the counselor assess at this point to complete the safety picture?', ['R2', 'R4'], [
      O('a', 'The children\'s exposure and current safety, including what they saw and his access to them now', 3,
        { r: 'Children\'s exposure and access', approach: 'Extend assessment to the children', why: 'Her son witnessed the strangulation, and Terrence\'s threats concern the children, which shapes the safety plan and any reporting duty', keys: ['7-year-old saw it and hid', '"if you take my kids"'], mistake: 'Assessing the adult victim while overlooking the children in the home' }),
      O('b', 'Her childhood history of family conflict, to see whether she is drawn to abusive partners', -2,
        { r: 'Victim-blaming framing', approach: 'Pattern-seeking framing', why: 'Looking for why she "chooses" abusive partners shifts responsibility to her and delays safety work', keys: ['self-blame already present'], mistake: 'Locating the cause of the violence in the victim' }),
      O('c', 'Her drinking and his drinking, to decide whether alcohol treatment is the main need for both', -1,
        { r: 'Alcohol is not the cause of IPV', approach: 'Substance-cause framing', why: 'Alcohol can raise risk but does not explain partner violence; treating it as the core problem misses coercive control', keys: ['"he\'d been drinking" excuse'], mistake: 'Accepting intoxication as the explanation for the assault' }),
      O('d', 'Her workplace stress, since her dental office is where several of the panic attacks happened', 0,
        { r: 'Work matters mainly as a safety site', approach: 'Work-stress framing', why: 'Work is relevant chiefly because he has shown up there; job stress itself is not the safety gap', keys: ['he appeared in the parking lot'], mistake: 'Reading the workplace as a stress source rather than a safety concern' }),
    ]),

    // ---------------- Treatment Planning (4) ----------------
    Q('q6', 'treatment', 'How should treatment for her posttraumatic stress disorder be sequenced?', ['R5', 'R6'], [
      O('a', 'Use interoceptive exposure for panic as the main target, since the attacks are her stated concern', -1,
        { r: 'Wrong protocol for the diagnosis', approach: 'Panic-protocol framing', why: 'Her attacks are trauma-cued; a panic protocol leaves the PTSD and the danger unaddressed', keys: ['cued attacks', 'PTSD clusters'], mistake: 'Treating PTSD with a panic disorder protocol' }),
      O('b', 'Begin conjoint sessions with Terrence first, since conflict at home is driving her symptoms', -2,
        { r: 'Conjoint work is contraindicated', approach: 'Couples-first framing', why: 'Couples work while violence is active can raise danger and silence her; it does not treat her PTSD', keys: ['active violence', 'threats'], mistake: 'Framing partner violence as relationship conflict to be treated jointly' }),
      O('c', 'Prioritize safety planning and stabilization now, then begin CPT or PE as current danger is reduced', 3,
        { r: 'Safety first, then trauma-focused therapy', approach: 'Sequence safety before trauma processing', why: 'Trauma-focused therapy is first-line for PTSD, but active danger is addressed first, with grounding and psychoeducation started now', keys: ['recent separation', 'firearm access', 'PTSD diagnosis'], mistake: 'Starting trauma processing while lethality indicators remain unaddressed' }),
      O('d', 'Start trauma-focused CPT right away and add safety planning later if his contact continues', 0,
        { r: 'Right therapy, wrong timing', approach: 'Treatment-first framing', why: 'CPT fits PTSD, but deferring safety planning while danger is high reverses the sequence', keys: ['CPT is first-line', 'danger is current'], mistake: 'Confusing the right treatment with the right next step' }),
    ]),
    Q('q7', 'treatment', 'Aaliyah says she may move back because money is tight. How should the safety plan be built?', ['R2', 'R3'], [
      O('a', 'Make continued counseling contingent on her agreement to stay away from Terrence for good', -2,
        { r: 'Conditioning care abandons her', approach: 'Ultimatum framing', why: 'Making care conditional on leaving removes support at a high-risk time and overrides her autonomy', keys: ['considering return', 'financial pressure'], mistake: 'Using treatment as leverage to force a decision' }),
      O('b', 'Build it with her for both staying and leaving, with warning signs, safe contacts, and an exit plan', 3,
        { r: 'Plan for staying and leaving', approach: 'Collaborative, autonomy-respecting safety planning', why: 'Safety planning meets the client where she is; leaving is one option, not the only goal, and plans cover both paths', keys: ['may return', 'children', 'finances'], mistake: 'Treating leaving as the only acceptable safety outcome' }),
      O('c', 'Focus the plan on her leaving him permanently, since leaving is the one outcome that can make her safe', -1,
        { r: 'Leaving-only plans fail many clients', approach: 'Leave-only framing', why: 'A plan built only around leaving leaves her unprepared if she returns, and leaving itself carries elevated risk', keys: ['ambivalence', 'separation risk'], mistake: 'Equating safety planning with persuading her to leave' }),
      O('d', 'Give her the hotline number and a shelter list, then go over the plan in detail next week', 0,
        { r: 'Resources help but are not a plan', approach: 'Resource-handout framing', why: 'Hotline and shelter information belong in the plan, but a written, individualized plan is needed now given the danger', keys: ['current threats', 'stalking'], mistake: 'Substituting a handout for an individualized plan' }),
    ]),
    Q('q8', 'treatment', 'Which coordination step best supports Aaliyah\'s safety while respecting her wishes about police?', ['R3', 'R4'], [
      O('a', 'Advise her to file for a protective order this week, since a court order will keep Terrence away from her', -1,
        { r: 'Orders are her choice and not a guarantee', approach: 'Directive legal framing', why: 'A protective order can help, but it is her decision, made with an advocate, and service of the order can be a risk point', keys: ['does not want police', 'escalation risk'], mistake: 'Overstating what a protective order guarantees' }),
      O('b', 'Give her legal aid and shelter numbers to call on her own when she feels ready to act', 0,
        { r: 'Passive referral is less effective', approach: 'Hand-off framing', why: 'Information is helpful, but an active, consented connection to an advocate is more likely to be used', keys: ['high-risk period'], mistake: 'Making a passive referral when a warm handoff is feasible' }),
      O('c', 'Report the assault to police for her, since the threats and his gun make this an emergency', -2,
        { r: 'Unconsented report breaches confidentiality', approach: 'Rescue framing', why: 'Adult IPV is generally not mandated reporting for counselors; reporting against her wishes breaches confidentiality and may raise danger', keys: ['competent adult', 'declined police'], mistake: 'Assuming adult victimization must be reported' }),
      O('d', 'With her consent, link her to a domestic violence advocate for legal, housing, and order options', 3,
        { r: 'Consented warm handoff to an advocate', approach: 'Coordinate with specialized IPV services', why: 'DV advocates help with protective orders, firearm surrender options, housing, and finances while she keeps control of decisions', keys: ['finances', 'firearm', 'declines police'], mistake: 'Either forcing legal action or leaving her without specialized support' }),
    ]),
    Q('q9', 'treatment', 'Terrence asks to join the sessions for couples counseling, and Aaliyah thinks it might help. The best plan is to:', ['R3', 'R5'], [
      O('a', 'Decline conjoint work while violence and threats are active, and continue her individual care', 3,
        { r: 'Conjoint work contraindicated with active IPV', approach: 'Protect the identified client', why: 'Couples counseling with active violence can expose her disclosures and increase danger; individual trauma-informed care continues', keys: ['threats', 'stalking', 'strangulation'], mistake: 'Treating partner violence as a couples problem' }),
      O('b', 'Hold one joint session to assess the couple dynamic, with ground rules agreed in advance', -1,
        { r: 'Ground rules do not make it safe', approach: 'Assessment-session framing', why: 'Ground rules cannot control what happens after the session, when retaliation for disclosures is a risk', keys: ['active coercive control'], mistake: 'Believing session structure removes the danger of joint work' }),
      O('c', 'Begin weekly couples counseling, since repairing the relationship should ease her symptoms', -2,
        { r: 'Conjoint therapy here is harmful', approach: 'Relationship-repair framing', why: 'Repairing the relationship is not the treatment for her PTSD and conjoint work raises danger', keys: ['she is considering return'], mistake: 'Following the client\'s request into a contraindicated modality' }),
      O('d', 'Suggest Terrence see his own counselor for anger management, then revisit joint work later', 0,
        { r: 'Anger management is not IPV intervention', approach: 'Parallel-referral framing', why: 'Declining joint work is right, but anger management does not address coercive control; batterer intervention is the specialized option', keys: ['coercive control'], mistake: 'Treating partner violence as an anger-control problem' }),
    ]),

    // ---------------- Counseling & Ethics (4) ----------------
    Q('q10', 'counseling', 'Aaliyah says, "Maybe I pushed him too far. He\'s not a bad person." The most therapeutic response is to:', ['R3', 'R6'], [
      O('a', 'Tell her plainly that Terrence is an abuser and that she needs to see it and leave him now', -1,
        { r: 'Confrontation increases defensiveness', approach: 'Confrontational framing', why: 'Labeling him and pressing her to leave tends to provoke defensiveness and can push her toward withdrawing from care', keys: ['ambivalence', 'self-blame'], mistake: 'Arguing for leaving instead of exploring ambivalence' }),
      O('b', 'Reassure her that it was not her fault, and then move straight on to reviewing the safety plan', 0,
        { r: 'Reassurance skips her meaning', approach: 'Reassure-and-move-on framing', why: 'The message is accurate, but moving on quickly leaves her self-blaming belief unexplored', keys: ['self-blame', 'mixed feelings'], mistake: 'Delivering the right message without engaging her experience' }),
      O('c', 'Reflect her mixed feelings, and gently note that the choice to use violence was his, not hers', 3,
        { r: 'Validate ambivalence; place responsibility', approach: 'Trauma-informed, nonjudgmental reflection', why: 'Reflecting ambivalence while placing responsibility for violence with the person who used it addresses self-blame without pressuring a decision', keys: ['"maybe I pushed him"', '"he\'s not a bad person"'], mistake: 'Either colluding with self-blame or pressuring her to decide' }),
      O('d', 'Explore what she does that sets him off, so she can learn to de-escalate the arguments sooner', -2,
        { r: 'Colludes with victim blaming', approach: 'Trigger-management framing', why: 'Framing the violence as provoked by her behavior reinforces self-blame and misplaces responsibility', keys: ['self-blame'], mistake: 'Treating the victim as responsible for preventing the violence' }),
    ]),
    Q('q11', 'ethics', 'Terrence calls the center asking whether Aaliyah is a client. The most appropriate response is to:', ['R3', 'R7'], [
      O('a', 'Tell him she is a client but explain that what she shares in sessions has to stay confidential', -1,
        { r: 'Confirming she is a client is a disclosure', approach: 'Partial-disclosure framing', why: 'Even confirming she is a client discloses protected information and tells him where she will be', keys: ['no release', 'stalking'], mistake: 'Believing only session content is confidential' }),
      O('b', 'Neither confirm nor deny she is a client, then tell her about the call, document it, and update her plan', 3,
        { r: 'Protect identity; inform client; update plan', approach: 'Confidentiality plus safety follow-through', why: 'Without her authorization her status as a client is not disclosed; his call is a stalking indicator to share with her and document', keys: ['no authorization', 'he is tracking her'], mistake: 'Handling the call without telling the client or updating safety planning' }),
      O('c', 'Confirm that she attends weekly, and offer him time at the start of her next scheduled appointment with you', -2,
        { r: 'Disclosure endangers her', approach: 'Accommodating framing', why: 'This discloses her information and appointment times to a partner who is stalking her', keys: ['threats', 'shows up at her work'], mistake: 'Treating the partner as entitled to her information' }),
      O('d', 'Decline to share anything, and wait to see whether she brings up his call on her own next week', 0,
        { r: 'Confidential but misses safety follow-up', approach: 'Silent-decline framing', why: 'Declining protects her privacy, but not telling her withholds a stalking indicator she needs for safety', keys: ['his contact is a risk signal'], mistake: 'Protecting confidentiality while omitting the safety follow-through' }),
    ]),
    Q('q12', 'ethics', 'Terrence holds the family health plan and portal login. Aaliyah asks the counselor to "leave the abuse out" of her records. The best response is to:', ['R7', 'R8', 'R3'], [
      O('a', 'Omit the abuse from the record entirely, so that nothing he might later see could reveal what she has said', -2,
        { r: 'Falsifying the record is improper', approach: 'Omission framing', why: 'Leaving out clinically central facts makes the record inaccurate and undermines her care and any later legal protection', keys: ['risk and safety plan must be documented'], mistake: 'Compromising record accuracy to manage access' }),
      O('b', 'Document as usual and tell her the insurance mailings and portal access cannot be changed', -1,
        { r: 'Misstates her privacy rights', approach: 'Business-as-usual framing', why: 'She may request confidential communications, and plans must accommodate when disclosure could endanger her', keys: ['policyholder access', 'endangerment'], mistake: 'Not knowing the HIPAA confidential-communications right' }),
      O('c', 'Suggest she pay out of pocket so nothing is billed, while leaving the records exactly as written', 0,
        { r: 'Helpful option, incomplete answer', approach: 'Billing-workaround framing', why: 'Self-pay can restrict disclosure to the plan, but it may not be affordable and does not address communications or documentation', keys: ['money is tight'], mistake: 'Solving billing while leaving other access routes open' }),
      O('d', 'Keep accurate, objective records and help her request confidential communications and portal limits', 3,
        { r: 'Accurate records plus access protections', approach: 'Protect the client through process, not omission', why: 'Accurate, factual documentation is maintained while HIPAA confidential-communication requests and access limits reduce exposure', keys: ['he has portal login', 'safety risk'], mistake: 'Choosing between accuracy and safety instead of achieving both' }),
    ]),
    Q('q13', 'ethics', 'Aaliyah asks what the counselor must report about the night her son saw the strangulation. The best response is to:', ['R4', 'R3'], [
      O('a', 'Decide that no report is possible because Aaliyah, as the adult victim, has not agreed to one being made', -1,
        { r: 'Child-reporting duties do not depend on consent', approach: 'Consent-governs framing', why: 'Her consent controls reports about her as an adult, but a state child-reporting duty, if triggered, does not depend on it', keys: ['child witnessed violence'], mistake: 'Applying adult-victim rules to the child question' }),
      O('b', 'Report the assault on Aaliyah to police, since counselors must report partner violence on adults', -2,
        { r: 'Misstates the law and breaches confidentiality', approach: 'Adult-reporting framing', why: 'Competent adult IPV victims are generally not subject to counselor mandated reporting; an unconsented report breaches confidentiality', keys: ['competent adult', 'declined police'], mistake: 'Believing adult partner violence is mandated reporting' }),
      O('c', 'Review her state\'s law on child exposure to violence, consult, and if a report is required, involve her', 3,
        { r: 'Check state law; consult; involve her', approach: 'Apply state law with minimal, collaborative disclosure', why: 'Whether exposure to domestic violence is reportable varies by state; if required, she is informed and involved to the extent possible', keys: ['son witnessed strangulation', 'state law varies'], mistake: 'Guessing at the duty rather than checking the statute' }),
      O('d', 'Make a child-protection report right away without first checking the statute or telling her', 0,
        { r: 'Reporting without review or involvement', approach: 'Reflexive-report framing', why: 'Reporting may turn out to be required, but skipping the statute and her involvement can harm trust and her safety', keys: ['inform and involve the client'], mistake: 'Acting on the duty without checking it or involving the client' }),
    ]),
  ],
};

module.exports = { CASES: [D904] };
