// tools/nce/seed/clinical-focus-2.js
// Areas of Clinical Focus — blueprint topics 15–28 (child abuse … military).
// Hand-authored original items; ids nce-s-clf-031 … nce-s-clf-059.
module.exports = [
  // ---------------------------------------------------------------- child abuse and neglect
  {
    id: 'nce-s-clf-031',
    domain: 'clinical_focus',
    cacrep: 'helping_relationships',
    topic: 'child abuse and neglect',
    difficulty: 'easy',
    stem: 'During a session at an elementary school, a 7-year-old tells the school counselor that her stepfather hit her with a belt last night, and the counselor sees welts on her arm. What should the counselor do FIRST?',
    options: [
      { id: 'a', text: 'Make a report to child protective services as the law requires of mandated reporters', isCorrect: true, rationale: 'Reasonable suspicion of abuse triggers a mandated report; the counselor reports promptly and lets child protective services investigate.' },
      { id: 'b', text: 'Call the stepfather to hear his account of what happened before deciding to file any report', isCorrect: false, rationale: 'Contacting the alleged offender can put the child at risk and is not required before reporting; investigation belongs to CPS.' },
      { id: 'c', text: 'Examine and photograph all of the child\'s injuries so the evidence is complete before reporting', isCorrect: false, rationale: 'Counselors do not conduct forensic examinations; doing so can retraumatize the child and is the investigator\'s role.' },
      { id: 'd', text: 'Schedule a follow-up meeting for next week to see whether new marks appear before reporting', isCorrect: false, rationale: 'Waiting delays protection; the reporting duty arises at reasonable suspicion, which is already present.' },
    ],
    rationale: 'Counselors are mandated reporters in every U.S. state. The threshold is reasonable suspicion, not proof, and the report is made promptly to child protective services or law enforcement. The counselor\'s job is to report and support the child, not to investigate or confront the alleged perpetrator.',
    references: [
      { source: 'State law', detail: 'Mandated reporting statutes for suspected child abuse and neglect' },
      { source: 'ACA Code of Ethics', detail: 'B.2.a Serious and Foreseeable Harm and Legal Requirements' },
    ],
  },
  {
    id: 'nce-s-clf-032',
    domain: 'clinical_focus',
    cacrep: 'helping_relationships',
    topic: 'child abuse and neglect',
    difficulty: 'medium',
    stem: 'A 10-year-old client mentions that he is often home alone for whole weekends with little food in the house. He gives few details and changes the subject. A colleague advises the counselor not to report neglect until the boy gives a clear account. Which statement BEST reflects the reporting standard?',
    options: [
      { id: 'a', text: 'A report is required only after the child gives a clear and consistent disclosure', isCorrect: false, rationale: 'Children often disclose partially; the law does not require a complete or consistent disclosure before reporting.' },
      { id: 'b', text: 'A report is required only after a parent has a chance to explain the circumstances', isCorrect: false, rationale: 'Mandated reporters do not need to hear the caregiver\'s explanation first; that is part of the CPS investigation.' },
      { id: 'c', text: 'A report is required when there is reasonable suspicion; proof of neglect is not needed', isCorrect: true, rationale: 'The legal threshold is reasonable cause to suspect abuse or neglect, which repeated lack of supervision and food can meet.' },
      { id: 'd', text: 'A report is required only once a supervisor independently confirms that neglect occurred', isCorrect: false, rationale: 'Consulting a supervisor is good practice, but the individual duty to report does not wait for anyone to confirm the facts.' },
    ],
    rationale: 'Mandated reporting laws use a reasonable-suspicion standard. Counselors report what they have observed or been told and leave fact-finding to child protective services. Neglect, including inadequate supervision and failure to provide food, is reportable in the same way as physical abuse.',
    references: [
      { source: 'State law', detail: 'Child abuse and neglect reporting statutes: reasonable cause to suspect standard' },
    ],
  },

  // ---------------------------------------------------------------- career and vocational concerns
  {
    id: 'nce-s-clf-033',
    domain: 'clinical_focus',
    cacrep: 'career',
    topic: 'career and vocational concerns',
    difficulty: 'medium',
    stem: 'In Holland\'s theory, consistency describes how close the first two letters of a person\'s code sit on the RIASEC hexagon. Which Holland code shows the LOWEST consistency?',
    options: [
      { id: 'a', text: 'RIC (Realistic-Investigative)', isCorrect: false, rationale: 'Realistic and Investigative are adjacent on the hexagon, so this code is highly consistent.' },
      { id: 'b', text: 'SEA (Social-Enterprising)', isCorrect: false, rationale: 'Social and Enterprising are adjacent on the hexagon, so this code is highly consistent.' },
      { id: 'c', text: 'ECR (Enterprising-Conventional)', isCorrect: false, rationale: 'Enterprising and Conventional are adjacent on the hexagon, so this code is highly consistent.' },
      { id: 'd', text: 'RSI (Realistic-Social)', isCorrect: true, rationale: 'Realistic and Social sit opposite each other on the hexagon, the least consistent pairing.' },
    ],
    rationale: 'Holland arranged the six types in the order R-I-A-S-E-C around a hexagon. Adjacent types share the most in common and opposite types the least, so a code whose first two letters are opposite (R-S, I-E, A-C) has low consistency. Consistency is distinct from differentiation (how sharply one type stands out) and congruence (person-environment fit).',
    references: [
      { source: 'Sharf (Career Development Theory)', detail: 'Holland\'s theory of types: consistency, differentiation, congruence' },
    ],
  },
  {
    id: 'nce-s-clf-034',
    domain: 'clinical_focus',
    cacrep: 'career',
    topic: 'career and vocational concerns',
    difficulty: 'hard',
    stem: 'A 52-year-old machinist who expected to finish his career at one plant is laid off when it closes. He is now researching training programs, trying out new interests, and reconsidering what work means to him. Which concept from Super\'s life-span, life-space theory BEST describes this process?',
    options: [
      { id: 'a', text: 'Recycling through exploration tasks during a later life stage', isCorrect: true, rationale: 'Super held that adults can recycle through earlier stage tasks, such as exploration, when a transition disrupts their career.' },
      { id: 'b', text: 'Circumscription of options that conflict with his social class', isCorrect: false, rationale: 'Circumscription belongs to Gottfredson\'s theory and describes early elimination of options by sex type and prestige.' },
      { id: 'c', text: 'Planned happenstance that turns the chance layoff into learning', isCorrect: false, rationale: 'Planned happenstance is Krumboltz\'s concept, not Super\'s, and describes using unplanned events, not a stage process.' },
      { id: 'd', text: 'Correspondence between his abilities and the reinforcers of work', isCorrect: false, rationale: 'Correspondence is the core idea of the theory of work adjustment (Dawis and Lofquist), not of Super\'s stage model.' },
    ],
    rationale: 'Super\'s stages (growth, exploration, establishment, maintenance, disengagement) form a maxicycle across the life span, but people can recycle through minicycles of earlier stages at transitions such as job loss. A midlife worker re-exploring options is the classic example of recycling.',
    references: [
      { source: 'Sharf (Career Development Theory)', detail: 'Super\'s life-span, life-space theory: maxicycle, minicycles and recycling' },
    ],
  },
  {
    id: 'nce-s-clf-035',
    domain: 'clinical_focus',
    cacrep: 'career',
    topic: 'career and vocational concerns',
    difficulty: 'medium',
    stem: 'A 7-year-old girl who loves building things tells her counselor that she cannot be an engineer because "that is a job for boys." In Gottfredson\'s theory, what is this child doing?',
    options: [
      { id: 'a', text: 'Compromising by settling for a job that is more accessible to her', isCorrect: false, rationale: 'Compromise comes later, when people give up preferred options because of real-world barriers to access.' },
      { id: 'b', text: 'Circumscribing her options by ruling out jobs seen as wrong for her sex', isCorrect: true, rationale: 'Ages 6 to 8 are Gottfredson\'s orientation to sex roles, when children eliminate jobs that seem wrong for their gender.' },
      { id: 'c', text: 'Showing low differentiation because her interests are not yet clear', isCorrect: false, rationale: 'Differentiation is a Holland concept about how distinct a profile is; her interest in building is actually clear.' },
      { id: 'd', text: 'Crystallizing a vocational preference as the exploration stage begins', isCorrect: false, rationale: 'Crystallization is a task in Super\'s exploration stage during adolescence, not a process of ruling options out in childhood.' },
    ],
    rationale: 'Gottfredson\'s theory of circumscription and compromise describes children progressively eliminating occupations: by size and power (ages 3-5), by sex type (ages 6-8), by social valuing or prestige (ages 9-13), and then by internal, unique self (14 and older). Options eliminated early are often never reconsidered, so counselors can help children revisit them.',
    references: [
      { source: 'Sharf (Career Development Theory)', detail: 'Gottfredson\'s theory of circumscription and compromise: orientation to sex roles' },
    ],
  },

  // ---------------------------------------------------------------- couples and family concerns
  {
    id: 'nce-s-clf-036',
    reviewNote: 'Confirm the Gladding section that covers Gottman\'s Four Horsemen.',
    domain: 'clinical_focus',
    cacrep: 'helping_relationships',
    topic: 'couples and family concerns',
    difficulty: 'easy',
    stem: 'In couples sessions, one partner regularly rolls her eyes, mocks her spouse\'s tone, and calls him "pathetic." According to Gottman\'s research, which of the Four Horsemen is this, and the single strongest predictor of divorce?',
    options: [
      { id: 'a', text: 'Criticism', isCorrect: false, rationale: 'Criticism attacks the partner\'s character, but it lacks the superiority and disgust that mark contempt.' },
      { id: 'b', text: 'Stonewalling', isCorrect: false, rationale: 'Stonewalling is emotional withdrawal from the interaction, not mockery or eye-rolling.' },
      { id: 'c', text: 'Defensiveness', isCorrect: false, rationale: 'Defensiveness is self-protection through excuses or counterattack, not a display of disgust.' },
      { id: 'd', text: 'Contempt', isCorrect: true, rationale: 'Eye-rolling, mockery and name-calling express contempt, which Gottman found to be the strongest predictor of divorce.' },
    ],
    rationale: 'Gottman\'s Four Horsemen are criticism, contempt, defensiveness and stonewalling. Contempt communicates superiority and disgust through sarcasm, mockery, eye-rolling and insults, and it was the single best predictor of divorce in his studies. The antidote is building a culture of appreciation and respect.',
    references: [
      { source: 'Gladding (Counseling: A Comprehensive Profession)', detail: 'Marriage, couple and family counseling: Gottman\'s research on the Four Horsemen' },
    ],
  },
  {
    id: 'nce-s-clf-037',
    reviewNote: 'Confirm the Gladding section that covers stepfamily discipline roles.',
    domain: 'clinical_focus',
    cacrep: 'helping_relationships',
    topic: 'couples and family concerns',
    difficulty: 'medium',
    stem: 'A newly formed stepfamily seeks counseling because the 13-year-old daughter openly defies her new stepfather\'s rules, and he responds by giving stricter punishments. Which recommendation is MOST consistent with research on stepfamily adjustment?',
    options: [
      { id: 'a', text: 'Have the stepfather take over discipline so the teen accepts him as the new head of the home', isCorrect: false, rationale: 'Early stepparent discipline before a bond forms tends to increase conflict and resentment.' },
      { id: 'b', text: 'Have the biological parent lead discipline while the stepparent builds a warm relationship first', isCorrect: true, rationale: 'Stepfamily research supports the biological parent handling discipline early while the stepparent focuses on connection.' },
      { id: 'c', text: 'Have both adults avoid setting any rules until the teen says she is ready to accept the stepfather', isCorrect: false, rationale: 'Removing structure leaves the teen without limits and puts her in charge of the family\'s functioning.' },
      { id: 'd', text: 'Have the teen spend more time with her other parent until she is willing to follow the new rules', isCorrect: false, rationale: 'Using contact with the other parent as leverage triangulates the teen and can deepen loyalty conflicts.' },
    ],
    rationale: 'Stepfamilies form after losses and bring loyalty binds. Stepparents gain authority gradually, after a relationship exists, so the biological parent usually remains the primary disciplinarian at first while the stepparent acts more like a supportive adult. The couple still agrees on house rules together.',
    references: [
      { source: 'Gladding (Counseling: A Comprehensive Profession)', detail: 'Family counseling: blended families and stepparent roles' },
    ],
  },
  {
    id: 'nce-s-clf-038',
    domain: 'clinical_focus',
    cacrep: 'helping_relationships',
    topic: 'couples and family concerns',
    difficulty: 'easy',
    stem: 'A counselor is about to begin conjoint counseling with a married couple. Each partner may also call or meet with the counselor alone from time to time. What should the counselor establish at the outset?',
    options: [
      { id: 'a', text: 'A promise that any individual disclosure will stay sealed from the other partner', isCorrect: false, rationale: 'Promising to hold secrets can trap the counselor in a hidden alliance and undermine the couple work.' },
      { id: 'b', text: 'An agreement that each partner will be assigned their own separate counselor', isCorrect: false, rationale: 'Separate counselors are an option but do not answer how this counselor will handle the couple case.' },
      { id: 'c', text: 'A clear policy, agreed by both, on how information shared individually is handled', isCorrect: true, rationale: 'Clarifying who the client is and how individual information will be handled is required at the outset of multiple-client work.' },
      { id: 'd', text: 'A rule that the counselor will refuse to speak to either partner outside sessions', isCorrect: false, rationale: 'Some contact outside joint sessions can be appropriate; the issue is a clear policy, not a ban.' },
    ],
    rationale: 'When counseling more than one person who share a relationship, counselors clarify at the outset who the client is and the limits of confidentiality, including whether a no-secrets or limited-secrets policy applies. Both partners agree to that policy before individual contacts happen.',
    references: [
      { source: 'ACA Code of Ethics', detail: 'A.8 Multiple Clients; B.4.b Couples and Family Counseling' },
    ],
  },

  // ---------------------------------------------------------------- developmental life transitions
  {
    id: 'nce-s-clf-039',
    reviewNote: 'Confirm Sharf covers Schlossberg\'s 4 S model (adult transitions).',
    domain: 'clinical_focus',
    cacrep: 'human_growth',
    topic: 'developmental life transitions',
    difficulty: 'medium',
    stem: 'A counselor uses Schlossberg\'s transition model with a 58-year-old woman who has just retired early to care for her spouse. Which set of factors does the model use to assess her resources for coping?',
    options: [
      { id: 'a', text: 'Situation, self, support and strategies', isCorrect: true, rationale: 'Schlossberg\'s 4 S\'s are situation, self, support and strategies, used to weigh a person\'s coping resources.' },
      { id: 'b', text: 'Denial, anger, bargaining and acceptance', isCorrect: false, rationale: 'These are stages from Kübler-Ross\'s grief model, not Schlossberg\'s factors for coping with a transition.' },
      { id: 'c', text: 'Growth, exploration, establishment and decline', isCorrect: false, rationale: 'These are life stages in Super\'s career theory, not resources for coping with a transition.' },
      { id: 'd', text: 'Shock, withdrawal, adjustment and integration', isCorrect: false, rationale: 'This is a generic phase sequence, not the four coping-resource factors of Schlossberg\'s model.' },
    ],
    rationale: 'Schlossberg defines a transition as any event or non-event that changes roles, relationships, routines and assumptions. Coping is assessed through the 4 S\'s: the situation (timing, control, concurrent stress), the self (personal and psychological resources), support (relationships and institutions) and strategies (ways of coping).',
    references: [
      { source: 'Sharf (Career Development Theory)', detail: 'Adult career transitions: Schlossberg\'s transition model (4 S\'s)' },
    ],
  },
  {
    id: 'nce-s-clf-040',
    domain: 'clinical_focus',
    cacrep: 'human_growth',
    topic: 'developmental life transitions',
    difficulty: 'easy',
    stem: 'A 24-year-old client lives with his parents, has changed jobs and majors several times, and says he feels "not really a kid, but not quite an adult." He is still exploring identity, work and relationships. Which concept BEST fits this period?',
    options: [
      { id: 'a', text: 'Identity foreclosure', isCorrect: false, rationale: 'Foreclosure is commitment without exploration; this client is exploring and has not committed.' },
      { id: 'b', text: 'Midlife transition', isCorrect: false, rationale: 'Levinson\'s midlife transition occurs around age 40, not in the early twenties.' },
      { id: 'c', text: 'Generativity versus stagnation', isCorrect: false, rationale: 'Erikson\'s generativity stage concerns middle adulthood and guiding the next generation.' },
      { id: 'd', text: 'Emerging adulthood', isCorrect: true, rationale: 'Arnett described emerging adulthood (about ages 18 to 25) as a time of identity exploration and feeling in-between.' },
    ],
    rationale: 'Arnett proposed emerging adulthood as a distinct period, roughly ages 18 to 25 in industrialized societies, marked by identity exploration, instability, self-focus, feeling in-between and a sense of possibilities. Counselors can frame this exploration as developmentally typical rather than as failure to launch.',
    references: [
      { source: 'Berk (Development Through the Lifespan)', detail: 'Early adulthood: Arnett\'s emerging adulthood' },
    ],
  },

  // ---------------------------------------------------------------- aging and older adults
  {
    id: 'nce-s-clf-041',
    domain: 'clinical_focus',
    cacrep: 'human_growth',
    topic: 'aging and older adults',
    difficulty: 'easy',
    stem: 'A 79-year-old widower in assisted living spends sessions reviewing his life, some proud moments and some regrets, and asks whether his life "added up to anything." Which of Erikson\'s psychosocial stages is he working through?',
    options: [
      { id: 'a', text: 'Generativity versus stagnation', isCorrect: false, rationale: 'Generativity is the middle-adulthood task of guiding the next generation and being productive.' },
      { id: 'b', text: 'Intimacy versus isolation', isCorrect: false, rationale: 'Intimacy is the young-adult task of forming close, committed relationships.' },
      { id: 'c', text: 'Integrity versus despair', isCorrect: true, rationale: 'Late adulthood centers on accepting one\'s life as meaningful (integrity) rather than feeling regret (despair).' },
      { id: 'd', text: 'Identity versus role confusion', isCorrect: false, rationale: 'Identity versus role confusion is the adolescent task of forming a coherent sense of self.' },
    ],
    rationale: 'Erikson\'s final stage, integrity versus despair, involves looking back and accepting one\'s life as it was. Life review, described by Butler, is a structured way to help older adults integrate successes and regrets and move toward integrity.',
    references: [
      { source: 'Berk (Development Through the Lifespan)', detail: 'Late adulthood: Erikson\'s ego integrity versus despair; life review' },
    ],
  },
  {
    id: 'nce-s-clf-042',
    domain: 'clinical_focus',
    cacrep: 'human_growth',
    topic: 'aging and older adults',
    difficulty: 'medium',
    stem: 'An adult daughter brings her 74-year-old mother to counseling, worried about "early dementia." Over two months the mother has lost interest in her garden, sleeps poorly, and often says "I just can\'t remember anything anymore." She seems distressed by her memory lapses. What should the counselor do FIRST?',
    options: [
      { id: 'a', text: 'Screen for depression and refer for a medical evaluation of the memory complaints', isCorrect: true, rationale: 'Depression in older adults can mimic cognitive decline, and a medical workup rules out treatable causes.' },
      { id: 'b', text: 'Tell the family that memory loss of this kind is a normal part of growing older', isCorrect: false, rationale: 'Noticeable decline with mood change is not normal aging and should not be dismissed.' },
      { id: 'c', text: 'Begin memory-training exercises in sessions to slow the progression of dementia', isCorrect: false, rationale: 'This assumes a dementia diagnosis that has not been made and skips assessment of depression.' },
      { id: 'd', text: 'Recommend that the daughter begin looking into memory-care residential placement', isCorrect: false, rationale: 'Placement planning is premature without assessment and could cause harm if the cause is depression.' },
    ],
    rationale: 'Late-life depression often presents with memory and concentration complaints, sometimes called pseudodementia. Clues include recent onset with mood symptoms and a person who is distressed by and emphasizes their lapses. The counselor screens for depression (for example with the Geriatric Depression Scale) and coordinates a medical evaluation.',
    references: [
      { source: 'DSM-5-TR', detail: 'Major depressive disorder: diminished ability to think or concentrate; differential with major neurocognitive disorder' },
    ],
  },

  // ---------------------------------------------------------------- chronic illness and disability
  {
    id: 'nce-s-clf-043',
    reviewNote: 'Confirm Sue & Sue\'s disability coverage; \'rehabilitation model\' distractor is a looser term than medical/moral/social.',
    domain: 'clinical_focus',
    cacrep: 'helping_relationships',
    topic: 'chronic illness and disability',
    difficulty: 'easy',
    stem: 'A client who uses a wheelchair after a spinal cord injury says, "My body is not the problem. The problem is buildings without ramps and managers who assume I can\'t do the job." Which model of disability does her statement reflect?',
    options: [
      { id: 'a', text: 'Medical model', isCorrect: false, rationale: 'The medical model locates disability in the individual\'s impairment, to be diagnosed and treated.' },
      { id: 'b', text: 'Moral model', isCorrect: false, rationale: 'The moral model treats disability as a sign of sin or a test of character.' },
      { id: 'c', text: 'Rehabilitation model', isCorrect: false, rationale: 'This model focuses on restoring individual function, still locating the problem in the person.' },
      { id: 'd', text: 'Social model', isCorrect: true, rationale: 'The social model locates disability in environmental and attitudinal barriers, not in the person.' },
    ],
    rationale: 'The social model distinguishes impairment (a bodily difference) from disability (exclusion created by inaccessible environments and attitudes). Counselors working from it attend to barriers, advocacy and accommodation as well as the client\'s adjustment.',
    references: [
      { source: 'Sue & Sue (Counseling the Culturally Diverse)', detail: 'Counseling individuals with disabilities: medical versus social models of disability' },
    ],
  },
  {
    id: 'nce-s-clf-044',
    domain: 'clinical_focus',
    cacrep: 'helping_relationships',
    topic: 'chronic illness and disability',
    difficulty: 'hard',
    stem: 'A 34-year-old client with type 1 diabetes often skips glucose checks and insulin because, she says, "thinking about it makes it too real." Her blood sugar control has worsened and she has had two ER visits. She reports no persistent low mood, worry about having other illnesses, or other psychiatric symptoms. Which DSM-5-TR diagnosis BEST fits?',
    options: [
      { id: 'a', text: 'Illness anxiety disorder of the care-avoidant type', isCorrect: false, rationale: 'Illness anxiety involves preoccupation with having or getting a serious illness, which she does not report.' },
      { id: 'b', text: 'Psychological factors affecting other medical conditions', isCorrect: true, rationale: 'Her avoidance is a psychological factor that worsens a diagnosed medical condition, with no other mental disorder.' },
      { id: 'c', text: 'Somatic symptom disorder with a persistent course', isCorrect: false, rationale: 'Somatic symptom disorder requires distressing physical symptoms with excessive related thoughts, not avoidance of care.' },
      { id: 'd', text: 'Factitious disorder imposed on self, with recurrent episodes', isCorrect: false, rationale: 'Factitious disorder involves deliberately falsifying or inducing illness, which is not described here.' },
    ],
    rationale: 'Psychological factors affecting other medical conditions applies when psychological or behavioral factors, such as denial or poor adherence, adversely affect a medical condition and are not better explained by another mental disorder. It is listed with somatic symptom and related disorders but does not require distressing somatic symptoms.',
    references: [
      { source: 'DSM-5-TR', detail: 'Psychological Factors Affecting Other Medical Conditions: criteria A-B' },
    ],
  },

  // ---------------------------------------------------------------- LGBTQ+ clients and minority stress
  {
    id: 'nce-s-clf-045',
    domain: 'clinical_focus',
    cacrep: 'social_cultural',
    topic: 'LGBTQ+ clients and minority stress',
    difficulty: 'medium',
    stem: 'A bisexual client has never experienced overt harassment, yet she hides her identity at work, constantly scans for signs of rejection, and says part of her believes something is wrong with her. In Meyer\'s minority stress model, these experiences are BEST described as which kind of stressors?',
    options: [
      { id: 'a', text: 'Distal stressors from discrimination', isCorrect: false, rationale: 'Distal stressors are external events such as harassment or discrimination, which she has not experienced.' },
      { id: 'b', text: 'General life stressors shared by all', isCorrect: false, rationale: 'These stressors are tied specifically to her stigmatized identity, not common to everyone.' },
      { id: 'c', text: 'Proximal stressors tied to stigma', isCorrect: true, rationale: 'Concealment, expected rejection and internalized stigma are Meyer\'s proximal (internal) minority stressors.' },
      { id: 'd', text: 'Coping resources within the community', isCorrect: false, rationale: 'Community connection is a protective factor in the model, not a source of stress.' },
    ],
    rationale: 'Meyer\'s model separates distal stressors (external prejudice events, discrimination, violence) from proximal stressors (expectations of rejection, concealment and internalized homophobia or biphobia). Both add to the general stress everyone faces, and community connection and coping can buffer their effects on mental health.',
    references: [
      { source: 'Sue & Sue (Counseling the Culturally Diverse)', detail: 'Counseling LGBTQ individuals: minority stress' },
    ],
  },
  {
    id: 'nce-s-clf-046',
    domain: 'clinical_focus',
    cacrep: 'social_cultural',
    topic: 'LGBTQ+ clients and minority stress',
    difficulty: 'medium',
    stem: 'The parents of a 16-year-old who recently came out as gay ask a counselor to "help him become straight." The teen does not want to change his orientation. How should the counselor respond?',
    options: [
      { id: 'a', text: 'Decline to attempt orientation change and offer support for the teen and family', isCorrect: true, rationale: 'Orientation change efforts lack scientific support and carry risk of harm; family support work is appropriate.' },
      { id: 'b', text: 'Agree to the goal because parents hold legal authority over a minor\'s treatment', isCorrect: false, rationale: 'Parental consent does not make a harmful, unsupported technique ethical to use.' },
      { id: 'c', text: 'Refer the family to a provider who specializes in sexual orientation change work', isCorrect: false, rationale: 'Referring for a harmful practice still facilitates it and does not protect the client.' },
      { id: 'd', text: 'Explore with the teen whether his orientation might be a phase that will soon pass', isCorrect: false, rationale: 'Framing his identity as a phase invalidates it and reflects the parents\' goal, not his own.' },
    ],
    rationale: 'The ACA Code bars techniques with substantial evidence of harm even when requested, and sexual orientation change efforts fall in that category. The counselor can decline that goal while still helping the family: providing education, supporting the parents\' reactions and reducing family rejection, which is a strong risk factor for LGBTQ+ youth.',
    references: [
      { source: 'ACA Code of Ethics', detail: 'C.7.a Scientific Basis for Treatment; C.7.c Harmful Practices' },
    ],
  },

  // ---------------------------------------------------------------- acculturation and immigration stress
  {
    id: 'nce-s-clf-047',
    domain: 'clinical_focus',
    cacrep: 'social_cultural',
    topic: 'acculturation and immigration stress',
    difficulty: 'easy',
    stem: 'A man who immigrated from Vietnam 15 years ago has stopped speaking Vietnamese, no longer observes family traditions, and says he identifies only with mainstream American culture. Which of Berry\'s acculturation strategies does this describe?',
    options: [
      { id: 'a', text: 'Integration', isCorrect: false, rationale: 'Integration keeps the heritage culture while also taking part in the host culture.' },
      { id: 'b', text: 'Assimilation', isCorrect: true, rationale: 'Assimilation means giving up heritage culture and adopting the host culture.' },
      { id: 'c', text: 'Separation', isCorrect: false, rationale: 'Separation keeps the heritage culture while avoiding the host culture.' },
      { id: 'd', text: 'Marginalization', isCorrect: false, rationale: 'Marginalization means little connection to either the heritage or host culture.' },
    ],
    rationale: 'Berry\'s model crosses two questions: is the heritage culture maintained, and is contact with the host society sought? Yes and yes is integration; no and yes is assimilation; yes and no is separation; no and no is marginalization.',
    references: [
      { source: 'Sue & Sue (Counseling the Culturally Diverse)', detail: 'Acculturation: Berry\'s four acculturation strategies' },
    ],
  },
  {
    id: 'nce-s-clf-048',
    domain: 'clinical_focus',
    cacrep: 'social_cultural',
    topic: 'acculturation and immigration stress',
    difficulty: 'hard',
    stem: 'A refugee teen has drifted away from her parents\' language and customs but also feels unwelcome and isolated among peers at her new school. In Berry\'s framework, which strategy does this reflect, and how does it generally compare with the others in acculturative stress?',
    options: [
      { id: 'a', text: 'Separation, generally tied to the lowest acculturative stress', isCorrect: false, rationale: 'Separation keeps heritage culture; she has moved away from hers, and integration, not separation, is lowest in stress.' },
      { id: 'b', text: 'Integration, generally tied to the highest acculturative stress', isCorrect: false, rationale: 'She does not hold both cultures, and integration is usually associated with the least stress.' },
      { id: 'c', text: 'Assimilation, generally tied to the lowest acculturative stress', isCorrect: false, rationale: 'She has not joined the host culture, and assimilation is not the lowest-stress strategy.' },
      { id: 'd', text: 'Marginalization, generally tied to the highest acculturative stress', isCorrect: true, rationale: 'Losing ties to both cultures is marginalization, which Berry found carries the greatest acculturative stress.' },
    ],
    rationale: 'In Berry\'s research, integration is generally associated with the best adaptation and least acculturative stress, while marginalization, low engagement with both cultures, is associated with the most. Assimilation and separation fall in between. Counselors can help marginalized clients rebuild connection to one or both cultures.',
    references: [
      { source: 'Sue & Sue (Counseling the Culturally Diverse)', detail: 'Acculturation and acculturative stress: Berry\'s model' },
    ],
  },

  // ---------------------------------------------------------------- spiritual and religious concerns
  {
    id: 'nce-s-clf-049',
    domain: 'clinical_focus',
    cacrep: 'social_cultural',
    topic: 'spiritual and religious concerns',
    difficulty: 'easy',
    stem: 'A devout client feels intense guilt about her divorce because of her faith community\'s teachings. The counselor is not religious and privately views the teachings as harmful. Which approach is MOST appropriate?',
    options: [
      { id: 'a', text: 'Encourage her to question the teachings that are leading her to feel guilty', isCorrect: false, rationale: 'Steering her away from her beliefs imposes the counselor\'s values on the client.' },
      { id: 'b', text: 'Explore her guilt within her own faith framework and the resources it offers', isCorrect: true, rationale: 'Working within the client\'s belief system respects her values and can draw on her faith as a resource.' },
      { id: 'c', text: 'Refer her to clergy because religious concerns fall outside counseling scope', isCorrect: false, rationale: 'Spiritual concerns are within counseling scope; referral based on the topic alone is not warranted.' },
      { id: 'd', text: 'Disclose the counselor\'s own views so she can weigh both sides of the issue', isCorrect: false, rationale: 'Sharing personal views on her religion serves the counselor and risks pressuring the client.' },
    ],
    rationale: 'Counselors avoid imposing their own values, attitudes and beliefs and respect the diversity of clients\' spiritual lives. Exploring guilt within the client\'s framework, including forgiveness or grace in her tradition, honors her worldview and can turn faith into a source of coping.',
    references: [
      { source: 'ACA Code of Ethics', detail: 'A.4.b Personal Values' },
    ],
  },

  // ---------------------------------------------------------------- self-injury
  {
    id: 'nce-s-clf-050',
    domain: 'clinical_focus',
    cacrep: 'helping_relationships',
    topic: 'self-injury',
    difficulty: 'medium',
    stem: 'A 15-year-old discloses repeated nonsuicidal self-injury and says, "When everything builds up, it is the only thing that makes the feeling stop." Which function of self-injury does her statement MOST clearly reflect?',
    options: [
      { id: 'a', text: 'A wish to end her life that has not yet been spoken aloud', isCorrect: false, rationale: 'NSSI by definition lacks suicidal intent; her words describe emotional relief, not a wish to die.' },
      { id: 'b', text: 'A bid to get attention from peers and adults around her', isCorrect: false, rationale: 'NSSI is often hidden; attributing it to attention-seeking is a common, inaccurate assumption here.' },
      { id: 'c', text: 'Relief from intense negative emotion (affect regulation)', isCorrect: true, rationale: 'Affect regulation, gaining relief from overwhelming feelings, is the most common reported function of NSSI.' },
      { id: 'd', text: 'Self-punishment for having broken a rule in her family', isCorrect: false, rationale: 'Self-punishment is a possible function, but she describes stopping a feeling, not punishing herself.' },
    ],
    rationale: 'Research consistently finds that the most common function of nonsuicidal self-injury is affect regulation: obtaining relief from a negative feeling or cognitive state. DSM-5-TR lists this expectation in its proposed criteria for nonsuicidal self-injury disorder. Treatment builds alternative regulation skills, as in DBT.',
    references: [
      { source: 'DSM-5-TR', detail: 'Conditions for Further Study: Nonsuicidal Self-Injury Disorder, criterion B' },
    ],
  },
  {
    id: 'nce-s-clf-051',
    domain: 'clinical_focus',
    cacrep: 'helping_relationships',
    topic: 'self-injury',
    difficulty: 'medium',
    stem: 'A college student shows the counselor healed marks on her forearm and says she has hurt herself during stressful weeks for two years. She denies wanting to die. Which counselor response is BEST?',
    options: [
      { id: 'a', text: 'Ask her to sign a no-harm contract before agreeing to continue in counseling', isCorrect: false, rationale: 'No-harm contracts lack evidence of benefit and can shut down honest disclosure.' },
      { id: 'b', text: 'Arrange an inpatient admission because self-injury signals imminent danger', isCorrect: false, rationale: 'NSSI without suicidal intent or other acute risk does not by itself call for hospitalization.' },
      { id: 'c', text: 'Respond calmly, explore what the behavior does for her, and assess suicide risk', isCorrect: true, rationale: 'A calm, curious stance keeps her engaged, and NSSI still raises suicide risk, so risk is assessed.' },
      { id: 'd', text: 'Avoid discussing the marks so that attention does not reinforce the behavior', isCorrect: false, rationale: 'Ignoring the disclosure misses assessment and can feel dismissive, discouraging further honesty.' },
    ],
    rationale: 'A respectful, nonjudgmental response to self-injury builds trust and allows functional assessment. NSSI is distinct from a suicide attempt but is a strong risk factor for later suicidal behavior, so counselors also assess suicidal ideation and behavior directly, for example with the C-SSRS.',
    references: [
      { source: 'C-SSRS', detail: 'Suicidal behavior section: distinguishing nonsuicidal self-injurious behavior from suicide attempts' },
    ],
  },

  // ---------------------------------------------------------------- sleep-wake concerns
  {
    id: 'nce-s-clf-052',
    domain: 'clinical_focus',
    cacrep: 'helping_relationships',
    topic: 'sleep-wake concerns',
    difficulty: 'medium',
    stem: 'A counselor is using cognitive behavioral therapy for insomnia (CBT-I) with a client who lies awake in bed for hours most nights. Which instruction is part of the stimulus control component?',
    options: [
      { id: 'a', text: 'Avoid caffeine after noon and keep the bedroom cool, dark and quiet', isCorrect: false, rationale: 'These are sleep hygiene recommendations, a separate and weaker component of insomnia care.' },
      { id: 'b', text: 'Limit time in bed to the hours actually slept, then extend it slowly', isCorrect: false, rationale: 'This describes sleep restriction, a different CBT-I component that consolidates sleep.' },
      { id: 'c', text: 'Practice progressive muscle relaxation for twenty minutes at bedtime', isCorrect: false, rationale: 'Relaxation training is a separate CBT-I component aimed at lowering arousal.' },
      { id: 'd', text: 'Get out of bed if unable to sleep and return only once feeling sleepy', isCorrect: true, rationale: 'Stimulus control re-links the bed with sleep by leaving it when awake and returning when sleepy.' },
    ],
    rationale: 'Stimulus control therapy aims to restore the bed and bedroom as cues for sleep: go to bed only when sleepy, use the bed only for sleep and sex, leave the bed when unable to sleep, keep a fixed wake time and avoid daytime naps. It is combined with sleep restriction, cognitive work and education in CBT-I, the recommended first-line treatment for chronic insomnia.',
    references: [
      { source: 'AASM Clinical Practice Guideline (Insomnia)', detail: 'Behavioral and psychological treatments for chronic insomnia (2021): CBT-I recommended; stimulus control as a component' },
      { source: 'NICE guidelines', detail: 'Clinical Knowledge Summary: Insomnia, CBT-I as first-line management of long-term insomnia' },
    ],
  },
  {
    id: 'nce-s-clf-053',
    domain: 'clinical_focus',
    cacrep: 'helping_relationships',
    topic: 'sleep-wake concerns',
    difficulty: 'easy',
    stem: 'A client reports difficulty staying asleep, with daytime fatigue that affects her work. The problem is not explained by a medical condition, substance or other sleep disorder. According to DSM-5-TR, how often and for how long must the sleep difficulty occur to meet criteria for insomnia disorder?',
    options: [
      { id: 'a', text: 'At least 3 nights a week for at least 3 months', isCorrect: true, rationale: 'DSM-5-TR requires the difficulty at least 3 nights per week, present for at least 3 months.' },
      { id: 'b', text: 'At least 5 nights a week for at least 2 weeks', isCorrect: false, rationale: 'This is far shorter than required; two weeks fits a brief, situational sleep problem.' },
      { id: 'c', text: 'At least 1 night a week for at least 6 months', isCorrect: false, rationale: 'One night a week is below the frequency threshold for insomnia disorder.' },
      { id: 'd', text: 'At least 4 nights a week for at least 1 month', isCorrect: false, rationale: 'One month falls short of the 3-month duration; briefer insomnia is coded as other specified insomnia disorder.' },
    ],
    rationale: 'DSM-5-TR insomnia disorder requires dissatisfaction with sleep quantity or quality (trouble initiating sleep, maintaining sleep or early waking) occurring at least 3 nights per week for at least 3 months, despite adequate opportunity for sleep, with clinically significant distress or impairment.',
    references: [
      { source: 'DSM-5-TR', detail: 'Insomnia Disorder: criteria C and D (frequency and duration)' },
    ],
  },

  // ---------------------------------------------------------------- psychopharmacology basics for counselors
  {
    id: 'nce-s-clf-054',
    domain: 'clinical_focus',
    cacrep: 'helping_relationships',
    topic: 'psychopharmacology basics for counselors',
    difficulty: 'hard',
    stem: 'A client with bipolar I disorder who takes lithium had a stomach virus with vomiting for two days. In session she has a coarse hand tremor, seems confused, and walks unsteadily. What should the counselor do?',
    options: [
      { id: 'a', text: 'Reassure her that tremor is a common side effect and continue the planned session', isCorrect: false, rationale: 'A mild tremor can occur on lithium, but confusion and unsteady gait after dehydration suggest toxicity.' },
      { id: 'b', text: 'Suggest she skip her next lithium dose until she feels better, then call her prescriber', isCorrect: false, rationale: 'Advising medication changes is outside counselor scope, and the symptoms need urgent evaluation now.' },
      { id: 'c', text: 'Arrange immediate medical evaluation because the symptoms may signal lithium toxicity', isCorrect: true, rationale: 'Dehydration can raise lithium levels; confusion, coarse tremor and ataxia warrant urgent medical care.' },
      { id: 'd', text: 'Explore whether anxiety about her illness is causing her shaking and trouble focusing', isCorrect: false, rationale: 'Attributing these signs to anxiety risks missing a medical emergency.' },
    ],
    rationale: 'Lithium has a narrow therapeutic range and requires regular blood-level monitoring. Vomiting, diarrhea, dehydration and some medications can raise levels into the toxic range, producing coarse tremor, confusion, ataxia and gastrointestinal symptoms. Counselors do not adjust medication but recognize warning signs and arrange urgent medical evaluation.',
    references: [
      { source: 'NICE guidelines', detail: 'Bipolar disorder (CG185): lithium monitoring and toxicity' },
    ],
  },
  {
    id: 'nce-s-clf-055',
    domain: 'clinical_focus',
    cacrep: 'helping_relationships',
    topic: 'psychopharmacology basics for counselors',
    difficulty: 'easy',
    stem: 'A client with major depressive disorder started an SSRI prescribed by her physician 10 days ago. She says, "It is not doing anything, so I am going to stop taking it." What is the counselor\'s BEST response?',
    options: [
      { id: 'a', text: 'Agree that stopping makes sense since there has been no improvement', isCorrect: false, rationale: 'Ten days is too early to judge, and stopping without the prescriber is not the counselor\'s call to endorse.' },
      { id: 'b', text: 'Explain SSRIs often take weeks to work; urge a talk with the prescriber', isCorrect: true, rationale: 'SSRI benefit usually builds over several weeks, and medication decisions belong with the prescriber.' },
      { id: 'c', text: 'Suggest she ask her physician for a benzodiazepine to work more quickly', isCorrect: false, rationale: 'Recommending a specific drug is outside counselor scope, and benzodiazepines carry dependence risk.' },
      { id: 'd', text: 'Advise her to take half the dose for a week to see if she feels different', isCorrect: false, rationale: 'Counselors do not advise dose changes; that is a prescriber decision.' },
    ],
    rationale: 'SSRIs typically take several weeks to produce a full antidepressant effect, although side effects can appear sooner. Counselors provide basic education, support adherence and coordinate with the prescriber, but they do not recommend starting, stopping or changing specific medications.',
    references: [
      { source: 'APA CPG', detail: 'Depression across the lifespan: second-generation antidepressants' },
      { source: 'ACA Code of Ethics', detail: 'C.2.a Boundaries of Competence' },
    ],
  },

  // ---------------------------------------------------------------- school and academic concerns
  {
    id: 'nce-s-clf-056',
    domain: 'clinical_focus',
    cacrep: 'human_growth',
    topic: 'school and academic concerns',
    difficulty: 'medium',
    stem: 'A 9-year-old with ADHD performs at grade level when given extended test time and a seat near the teacher. He does not need specially designed instruction. Which school plan BEST fits his needs?',
    options: [
      { id: 'a', text: 'An Individualized Education Program under IDEA', isCorrect: false, rationale: 'An IEP is for students who need specially designed instruction, which he does not.' },
      { id: 'b', text: 'A gifted education plan for advanced placement', isCorrect: false, rationale: 'Nothing indicates a need for gifted programming.' },
      { id: 'c', text: 'A behavior intervention plan for disruptive acts', isCorrect: false, rationale: 'A behavior plan targets problem behaviors; the need described is for accommodations.' },
      { id: 'd', text: 'A Section 504 plan for classroom accommodations', isCorrect: true, rationale: 'Section 504 provides accommodations for a disability that limits learning without special education.' },
    ],
    rationale: 'Section 504 of the Rehabilitation Act covers students with a disability that substantially limits a major life activity such as learning, and provides accommodations such as extended time or preferential seating. IDEA provides an IEP only for students in eligible categories who need specially designed instruction.',
    references: [
      { source: 'Gladding (Counseling: A Comprehensive Profession)', detail: 'School counseling: Section 504 plans and IEPs under IDEA' },
    ],
  },
  {
    id: 'nce-s-clf-057',
    domain: 'clinical_focus',
    cacrep: 'human_growth',
    topic: 'school and academic concerns',
    difficulty: 'hard',
    stem: 'An 8-year-old has missed most of three weeks of school, crying and complaining of stomachaches each morning that ease once his mother lets him stay home. He worries something bad will happen to her while he is away. Pediatric causes have been ruled out. Which plan is MOST appropriate?',
    options: [
      { id: 'a', text: 'Arrange home-based instruction until his worry about his mother eases on its own', isCorrect: false, rationale: 'Staying home relieves anxiety in the short term but reinforces avoidance and lets the fear grow.' },
      { id: 'b', text: 'A gradual return to school with exposure, coping skills and school collaboration', isCorrect: true, rationale: 'Graduated exposure with parent and school coordination is the evidence-based approach to anxiety-based school refusal.' },
      { id: 'c', text: 'Tell his mother to keep him home on any morning that he has physical complaints', isCorrect: false, rationale: 'Making symptoms the ticket to stay home rewards them and maintains the cycle.' },
      { id: 'd', text: 'Delay any school plan until weekly play therapy has resolved the underlying fear', isCorrect: false, rationale: 'Each week out of school makes return harder; return should begin alongside treatment.' },
    ],
    rationale: 'School refusal driven by separation anxiety is maintained by avoidance, because staying home brings immediate relief. Treatment uses CBT with graduated exposure to attending school, coping skills, parent training to reduce accommodation, and close collaboration with school staff to support a prompt, stepwise return.',
    references: [
      { source: 'DSM-5-TR', detail: 'Separation Anxiety Disorder: reluctance or refusal to go to school; physical complaints on anticipated separation' },
    ],
  },

  // ---------------------------------------------------------------- military and veteran populations
  {
    id: 'nce-s-clf-058',
    reviewNote: 'How VA/DoD 2023 grades debriefing and supportive counseling (distractors) is from memory; verify.',
    domain: 'clinical_focus',
    cacrep: 'helping_relationships',
    topic: 'military and veteran populations',
    difficulty: 'medium',
    stem: 'A 31-year-old Army veteran meets criteria for PTSD after combat deployments. He is willing to engage in therapy and asks what treatment has the strongest support. According to the VA/DoD clinical practice guideline, which approach is recommended as first-line?',
    options: [
      { id: 'a', text: 'Individual, manualized trauma-focused therapy such as PE or CPT', isCorrect: true, rationale: 'The VA/DoD guideline recommends manualized trauma-focused psychotherapies such as PE, CPT and EMDR first.' },
      { id: 'b', text: 'A benzodiazepine to reduce his hyperarousal and improve sleep', isCorrect: false, rationale: 'The guideline recommends against benzodiazepines for PTSD because of harm and lack of benefit.' },
      { id: 'c', text: 'Single-session psychological debriefing about his deployments', isCorrect: false, rationale: 'Psychological debriefing is not supported for PTSD and may worsen outcomes.' },
      { id: 'd', text: 'Nondirective supportive counseling without trauma processing', isCorrect: false, rationale: 'Supportive counseling is less effective than trauma-focused therapy and is not first-line.' },
    ],
    rationale: 'The VA/DoD PTSD guideline recommends individual, manualized trauma-focused psychotherapies, chiefly prolonged exposure (PE), cognitive processing therapy (CPT) and EMDR, over pharmacotherapy. It recommends against benzodiazepines for PTSD. Counselors working with veterans should know these options and refer when they are not trained to deliver them.',
    references: [
      { source: 'VA/DoD CPG', detail: 'Management of PTSD and Acute Stress Disorder: trauma-focused psychotherapy recommendations' },
    ],
  },
  {
    id: 'nce-s-clf-059',
    reviewNote: 'Moral injury (Litz et al.) is not a DSM construct; the DSM-5-TR reference points to PTSD criterion D only.',
    domain: 'clinical_focus',
    cacrep: 'helping_relationships',
    topic: 'military and veteran populations',
    difficulty: 'hard',
    stem: 'A Marine veteran says his worst memory is not being in danger himself but following an order that led to civilian deaths. He is consumed by guilt and shame, believes he is "a bad person," and has pulled away from his faith community. Which concept BEST describes his distress?',
    options: [
      { id: 'a', text: 'Moral injury from acts that violated his own deeply held moral beliefs', isCorrect: true, rationale: 'Moral injury describes guilt, shame and loss of trust after perpetrating or witnessing acts that violate one\'s moral code.' },
      { id: 'b', text: 'Compassion fatigue from caring for wounded civilians and fellow troops', isCorrect: false, rationale: 'Compassion fatigue affects helpers worn down by caregiving; his distress centers on his own actions.' },
      { id: 'c', text: 'Survivor guilt from having lived through events in which comrades died', isCorrect: false, rationale: 'Survivor guilt centers on surviving when others did not; his guilt is about what he did.' },
      { id: 'd', text: 'Adjustment disorder triggered by the stress of returning to civilian life', isCorrect: false, rationale: 'His distress is tied to a specific morally violating combat event, not to the transition home.' },
    ],
    rationale: 'Moral injury, described by Litz and colleagues, is lasting distress after perpetrating, failing to prevent or witnessing acts that transgress deeply held moral beliefs. It shows up mainly as guilt, shame, self-condemnation and spiritual or relational withdrawal rather than fear. It overlaps with PTSD criterion D (negative beliefs about oneself, guilt, shame) but is not a DSM diagnosis.',
    references: [
      { source: 'DSM-5-TR', detail: 'PTSD criterion D: persistent negative beliefs about oneself and persistent guilt or shame' },
    ],
  },
];
