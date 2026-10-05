// tools/nce/seed/counseling-14.js — Counseling Skills and Interventions, batch 7
// Hand-authored original items (nce-s-cou-391 … nce-s-cou-420).
const C = 'Corey (Theory & Practice)';
const GL = 'Gladding (Counseling: A Comprehensive Profession)';
const IV = 'Ivey et al. (Intentional Interviewing)';
const YL = 'Yalom & Leszcz (Group Psychotherapy)';
const SH = 'Sharf (Career Development Theory)';
const BK = 'Berk (Development Through the Lifespan)';
const SS = 'Sue & Sue (Counseling the Culturally Diverse)';
const JG = 'James & Gilliland (Crisis Intervention Strategies)';
const GO = 'Goldenberg (Family Therapy)';
const TIP57 = 'SAMHSA TIP 57';
const ACA = 'ACA Code of Ethics';
const MSJ = 'MSJCC (Ratts et al., 2016)';

module.exports = [
  // ── BASIC ATTENDING AND LISTENING SKILLS ─────────────────────────────────
  {
    id: 'nce-s-cou-391',
    domain: 'counseling',
    cacrep: 'helping_relationships',
    topic: 'basic attending and listening skills',
    difficulty: 'easy',
    stem: `A supervisor watching a trainee's session notes that the trainee keeps good eye contact and stays on the client's topic, but speaks quickly and loudly whenever the client becomes upset. Which dimension of Ivey's attending behavior does the supervisor's feedback address?`,
    options: [
      { id: 'a', text: `Verbal tracking`, isCorrect: false, rationale: `Verbal tracking means staying with the client's topic, which the trainee already does well.` },
      { id: 'b', text: `Vocal qualities`, isCorrect: true, rationale: `Vocal qualities cover rate, volume and tone of voice; a rushed, loud voice can unsettle an upset client.` },
      { id: 'c', text: `Visual contact`, isCorrect: false, rationale: `Eye contact is the visual component, and the supervisor reports it is appropriate.` },
      { id: 'd', text: `Selective attention`, isCorrect: false, rationale: `Selective attention concerns which topics the counselor responds to, not how the counselor's voice sounds.` },
    ],
    rationale: `Ivey summarizes attending behavior as the "3 V's + B": visuals (culturally appropriate eye contact), vocal qualities, verbal tracking and attentive body language. Vocal qualities include speech rate, volume and tone, and changes in them signal comfort or discomfort. A calm, even voice helps an upset client feel heard and settled.`,
    references: [{ source: IV, detail: 'Attending behavior: the 3 V\'s + B (visuals, vocal qualities, verbal tracking, body language)' }],
  },
  {
    id: 'nce-s-cou-392',
    domain: 'counseling',
    cacrep: 'helping_relationships',
    topic: 'basic attending and listening skills',
    difficulty: 'medium',
    stem: `A 38-year-old client says, "Things with my partner have just been off lately. It's hard to explain." The counselor wants to move the conversation from this general statement to something they can actually work on. Which response BEST does this?`,
    options: [
      { id: 'a', text: `"Why do you think things feel off with your partner lately?"`, isCorrect: false, rationale: `A "why" question asks for an explanation the client has said is hard to give and can sound demanding.` },
      { id: 'b', text: `"It sounds like you're feeling distant from your partner."`, isCorrect: false, rationale: `This guesses at a feeling the client has not described; it does not draw out specific detail.` },
      { id: 'c', text: `"Is your relationship with your partner going well or not?"`, isCorrect: false, rationale: `This closed question invites a yes-or-no reply and adds nothing concrete to the picture.` },
      { id: 'd', text: `"Could you give me a recent example of a time it felt off?"`, isCorrect: true, rationale: `Asking for a specific example builds concreteness, turning a vague statement into a situation that can be explored.` },
    ],
    rationale: `Concreteness, a core condition in Carkhuff's model and a skill Ivey teaches through questions, helps clients move from vague generalities to specific examples. Questions such as "Could you give me a specific example?" bring out the who, what, when and where of a concern. Specific material makes it easier to understand the problem and to set goals.`,
    references: [{ source: IV, detail: 'Questions: eliciting concreteness with "Could you give me a specific example?"' }],
  },

  // ── REFLECTION, PARAPHRASING AND SUMMARIZING ─────────────────────────────
  {
    id: 'nce-s-cou-393',
    domain: 'counseling',
    cacrep: 'helping_relationships',
    topic: 'reflection, paraphrasing and summarizing',
    difficulty: 'hard',
    stem: `A client explains at length that her brother forgot her graduation. The counselor responds, "Sounds like you feel hurt. Is that right?" Ivey describes a full reflection of feeling as having several parts. Which part is MISSING from this response?`,
    options: [
      { id: 'a', text: `The context`, isCorrect: true, rationale: `The response never links the feeling to its source, such as "because your brother missed your graduation."` },
      { id: 'b', text: `A feeling label`, isCorrect: false, rationale: `"Hurt" names the feeling, so this part is present.` },
      { id: 'c', text: `A sentence stem`, isCorrect: false, rationale: `"Sounds like you feel" is a sentence stem, so this part is present.` },
      { id: 'd', text: `A check-out`, isCorrect: false, rationale: `"Is that right?" is a check-out that invites the client to confirm or correct.` },
    ],
    rationale: `Ivey's reflection of feeling typically includes a sentence stem ("You feel..."), a feeling label, the context or situation the feeling is about, and a check-out to confirm accuracy; a present-tense focus can add impact. Leaving out the context can make a reflection sound generic. Adding a brief paraphrase of the situation ties the feeling to the client's own story.`,
    references: [{ source: IV, detail: 'Reflection of feeling: sentence stem, feeling label, context and check-out' }],
  },
  {
    id: 'nce-s-cou-394',
    domain: 'counseling',
    cacrep: 'helping_relationships',
    topic: 'reflection, paraphrasing and summarizing',
    difficulty: 'easy',
    stem: `A client says, "I keep meaning to call my dad, but every time I pick up the phone I put it down again." The counselor replies, "You keep meaning to call your dad, but every time you pick up the phone you put it down again." What is the MAIN weakness of this reply?`,
    options: [
      { id: 'a', text: `It adds an interpretation the client did not offer`, isCorrect: false, rationale: `Nothing new is added; the reply contains only the client's own words.` },
      { id: 'b', text: `It moves the focus from the client to the counselor`, isCorrect: false, rationale: `The reply stays on the client's statement, so the focus has not shifted.` },
      { id: 'c', text: `It parrots the client instead of restating the essence`, isCorrect: true, rationale: `Word-for-word repetition shows little understanding; a paraphrase restates the core message in fresh, briefer words.` },
      { id: 'd', text: `It asks a closed question that limits what the client says`, isCorrect: false, rationale: `The reply is a statement, not a question of any kind.` },
    ],
    rationale: `A paraphrase captures the essence of what a client said, keeping a few key words but mostly using the counselor's own, briefer language. Repeating a statement verbatim, often called parroting, sounds mechanical and does not show understanding. A better reply might be, "Part of you wants to reach out to him, and something keeps stopping you."`,
    references: [{ source: IV, detail: 'Paraphrasing: restating the essence of client content in fresh words' }],
  },

  // ── CONFRONTATION AND IMMEDIACY ──────────────────────────────────────────
  {
    id: 'nce-s-cou-395',
    domain: 'counseling',
    cacrep: 'helping_relationships',
    topic: 'confrontation and immediacy',
    difficulty: 'medium',
    stem: `In a first session, a court-referred 27-year-old says he "barely drinks" and later mentions two recent blackouts. The counselor notices the discrepancy. Which approach to confrontation is MOST appropriate at this point?`,
    options: [
      { id: 'a', text: `Note the discrepancy and build trust before raising it gently`, isCorrect: true, rationale: `Confrontation works best within a trusting relationship, so the counselor notes the mixed message and raises it supportively once rapport exists.` },
      { id: 'b', text: `Tell him at once that his account is inconsistent and untrue`, isCorrect: false, rationale: `A blunt challenge in a first session with a mandated client is likely to provoke defensiveness and dropout.` },
      { id: 'c', text: `Drop the discrepancy, because confrontation harms the alliance`, isCorrect: false, rationale: `Supportive confrontation is a useful skill; the issue is timing and relationship, not avoiding it.` },
      { id: 'd', text: `Ask the referring court to settle which of his two reports is true`, isCorrect: false, rationale: `This sidesteps the counseling relationship and casts the counselor as an investigator.` },
    ],
    rationale: `Supportive confrontation points out discrepancies so that clients can examine them, but it depends on a solid working relationship. Ivey stresses listening first to identify mixed messages and challenging in a nonjudgmental way once the client feels understood. Early, harsh confrontation, especially with mandated clients, tends to increase defensiveness rather than change.`,
    references: [
      { source: IV, detail: 'Confrontation: supportive challenge built on listening and a working relationship' },
      { source: GL, detail: 'Counseling skills: confrontation and the importance of timing and rapport' },
    ],
  },
  {
    id: 'nce-s-cou-396',
    domain: 'counseling',
    cacrep: 'helping_relationships',
    topic: 'confrontation and immediacy',
    difficulty: 'medium',
    stem: `A counselor notes that a client says her health comes first, yet she answers work email until midnight. The client pauses, then says, "You're right. Starting Monday I'll turn off alerts at 8 and tell my manager I'm offline after that." On Ivey's Client Change Scale, where does this response fall?`,
    options: [
      { id: 'a', text: `Partial examination`, isCorrect: false, rationale: `Partial examination involves working on only part of the discrepancy without fully accepting it.` },
      { id: 'b', text: `Denial`, isCorrect: false, rationale: `In denial, the client does not acknowledge the discrepancy at all.` },
      { id: 'c', text: `Creation of a new solution`, isCorrect: true, rationale: `The client both accepts the discrepancy and produces a concrete new plan to resolve it.` },
      { id: 'd', text: `Transcendence`, isCorrect: false, rationale: `Transcendence is a broader shift in thinking that reaches well beyond this single issue.` },
    ],
    rationale: `Ivey's Client Change Scale rates responses to confrontation in five levels: denial, partial examination, acceptance and recognition, creation of a new solution, and transcendence. Acceptance alone would be level 3; this client moves further by generating a specific, workable change. Counselors use the scale to judge whether a challenge is helping and to plan the next intervention.`,
    references: [{ source: IV, detail: 'Client Change Scale: denial, partial examination, acceptance and recognition, new solution, transcendence' }],
  },

  // ── PLAY THERAPY ─────────────────────────────────────────────────────────
  {
    id: 'nce-s-cou-397',
    domain: 'counseling',
    cacrep: 'helping_relationships',
    topic: 'play therapy',
    difficulty: 'hard',
    stem: `A counselor asks an 8-year-old to close her eyes, imagine she is a rosebush, then draw it and speak as the bush: "I have thorns so no one can get close." The counselor uses clay, sensory activities and drawing to strengthen the child's sense of self and contact. Which approach is this?`,
    options: [
      { id: 'a', text: `Filial family therapy, developed by Bernard Guerney`, isCorrect: false, rationale: `Filial therapy trains parents to hold child-centered play sessions; it does not use this fantasy-and-art method.` },
      { id: 'b', text: `Gestalt play therapy, developed by Violet Oaklander`, isCorrect: true, rationale: `Oaklander's rosebush fantasy and her focus on the senses, self and contact are hallmarks of Gestalt play therapy.` },
      { id: 'c', text: `Jungian sandplay therapy, developed by Dora Kalff`, isCorrect: false, rationale: `Sandplay uses a sand tray and miniature figures within a Jungian frame.` },
      { id: 'd', text: `Child-centered play therapy, developed by Landreth`, isCorrect: false, rationale: `Child-centered play therapy is nondirective; the counselor would not direct a fantasy exercise like this.` },
    ],
    rationale: `Violet Oaklander, author of Windows to Our Children, applied Gestalt principles to work with children. Her methods include drawing, clay, sensory awareness and projective fantasies such as the rosebush, in which the child speaks as the image in the first person. The aim is to strengthen the child's sense of self and ability to make contact, so that blocked feelings can be expressed.`,
    references: [{ source: C, detail: 'Gestalt therapy: applications with children; Oaklander\'s projective techniques' }],
  },
  {
    id: 'nce-s-cou-398',
    domain: 'counseling',
    cacrep: 'helping_relationships',
    topic: 'play therapy',
    difficulty: 'medium',
    stem: `A school counselor equipping a child-centered playroom includes a bop bag, toy soldiers, a rubber knife and handcuffs. A teacher worries these toys encourage violence. Using Landreth's toy categories, what is their MAIN purpose?`,
    options: [
      { id: 'a', text: `To let the counselor test whether the child is at risk of violence`, isCorrect: false, rationale: `These toys are not assessment tools; using them this way would misread normal symbolic play.` },
      { id: 'b', text: `To teach children rules for safe play through counselor instruction`, isCorrect: false, rationale: `Child-centered play therapy is nondirective; the counselor does not instruct the child in play rules.` },
      { id: 'c', text: `To reward children for cooperative behavior earlier in the session`, isCorrect: false, rationale: `Toys are not used as behavioral rewards in child-centered play therapy.` },
      { id: 'd', text: `To let children safely express anger, fear and aggression in play`, isCorrect: true, rationale: `Acting-out and aggressive-release toys give children a safe outlet for feelings they cannot yet put into words.` },
    ],
    rationale: `Landreth groups playroom toys into real-life (nurturing) toys, acting-out or aggressive-release toys, and toys for creative expression and emotional release. Aggressive-release toys let children express anger, fear and the need for control symbolically, within limits the counselor sets only when needed. Expressing these feelings in play, rather than acting them out on others, is part of what makes play therapeutic.`,
    references: [{ source: GL, detail: 'Counseling children: play therapy and the selection of toys and materials' }],
  },

  // ── CRISIS INTERVENTION MODELS ───────────────────────────────────────────
  {
    id: 'nce-s-cou-399',
    domain: 'counseling',
    cacrep: 'helping_relationships',
    topic: 'crisis intervention models',
    difficulty: 'easy',
    stem: `Building on Lindemann's work, which psychiatrist described crisis as a temporary loss of equilibrium when usual coping fails, and introduced primary, secondary and tertiary prevention to community mental health?`,
    options: [
      { id: 'a', text: `Albert Roberts`, isCorrect: false, rationale: `Roberts developed the later seven-stage crisis intervention model.` },
      { id: 'b', text: `Kendra Kanel`, isCorrect: false, rationale: `Kanel developed the ABC model of crisis intervention.` },
      { id: 'c', text: `Viktor Frankl`, isCorrect: false, rationale: `Frankl founded logotherapy, an existential approach, not crisis theory.` },
      { id: 'd', text: `Gerald Caplan`, isCorrect: true, rationale: `Caplan extended Lindemann's work into crisis theory and preventive psychiatry with three levels of prevention.` },
    ],
    rationale: `Gerald Caplan, working with Erich Lindemann, framed crisis as a time-limited state of disequilibrium that occurs when a person's usual problem-solving fails. In Principles of Preventive Psychiatry (1964), he described primary, secondary and tertiary prevention, which shaped community mental health. Crisis intervention models that followed build on these ideas.`,
    references: [{ source: JG, detail: 'Historical foundations of crisis intervention: Lindemann and Caplan' }],
  },
  {
    id: 'nce-s-cou-400',
    domain: 'counseling',
    cacrep: 'helping_relationships',
    topic: 'crisis intervention models',
    difficulty: 'medium',
    stem: `A 58-year-old who devoted her life to her company learns she will be laid off. She tells the counselor, "None of it meant anything. I don't know who I am or why I bothered." Using James and Gilliland's types of crisis, which type does this MOST closely fit?`,
    options: [
      { id: 'a', text: `Existential crisis`, isCorrect: true, rationale: `Her distress centers on purpose, meaning and identity, which defines an existential crisis.` },
      { id: 'b', text: `Developmental crisis`, isCorrect: false, rationale: `Developmental crises arise from normal life transitions, such as a birth or retirement, not from a sudden loss of meaning.` },
      { id: 'c', text: `Ecosystemic crisis`, isCorrect: false, rationale: `Ecosystemic crises are natural or human-caused disasters affecting a whole community.` },
      { id: 'd', text: `Psychiatric crisis`, isCorrect: false, rationale: `This is not one of James and Gilliland's crisis types, and nothing suggests a psychiatric emergency.` },
    ],
    rationale: `James and Gilliland describe normal developmental, situational, existential and ecosystemic crises. A layoff is a situational trigger, but this client's core struggle is about meaning, purpose and identity, which marks an existential crisis. Naming the type helps the counselor attend to what matters most to the client, here meaning and self-worth beyond the job itself.`,
    references: [{ source: JG, detail: 'Types of crises: developmental, situational, existential, ecosystemic' }],
  },
  {
    id: 'nce-s-cou-401',
    domain: 'counseling',
    cacrep: 'helping_relationships',
    topic: 'crisis intervention models',
    difficulty: 'medium',
    stem: `Years after a robbery at her store, a 46-year-old owner says she "got over it" quickly and never talked about it. After a neighbor's shop is burglarized, she suddenly cannot sleep, avoids the store and feels as panicked as on the night of the robbery. In James and Gilliland's terms, what BEST describes this?`,
    options: [
      { id: 'a', text: `A new developmental crisis set off by midlife`, isCorrect: false, rationale: `Developmental crises arise from normal life transitions; her reaction is tied to the earlier robbery.` },
      { id: 'b', text: `An ecosystemic crisis affecting her community`, isCorrect: false, rationale: `Ecosystemic crises are large-scale disasters; one nearby burglary does not fit that type.` },
      { id: 'c', text: `A transcrisis state from the unresolved robbery`, isCorrect: true, rationale: `The original crisis was submerged rather than resolved, and a new stressor has brought it back to the surface.` },
      { id: 'd', text: `Normal equilibrium after a successfully resolved crisis`, isCorrect: false, rationale: `Her sudden, intense distress shows the earlier crisis was not resolved in an adaptive way.` },
    ],
    rationale: `James and Gilliland describe a transcrisis state as a crisis that was not resolved but pushed out of awareness, where it can lie dormant for years. A later stressor, often one that resembles the original event, can bring the old reaction back with its original intensity. Counselors who recognize this pattern address the earlier, unresolved crisis rather than only the recent trigger.`,
    references: [{ source: JG, detail: 'Transcrisis states: unresolved crises that resurface with later stressors' }],
  },


  // ── CAREER DEVELOPMENT ───────────────────────────────────────────────────
  {
    id: 'nce-s-cou-402',
    domain: 'counseling',
    cacrep: 'career',
    topic: 'career development theories (Holland, Super, Krumboltz)',
    difficulty: 'easy',
    stem: `A counselor and a first-generation college student map the jobs, education and work values of the student's parents, grandparents, aunts and uncles across three generations. What is this career intervention called?`,
    options: [
      { id: 'a', text: `A card sort`, isCorrect: false, rationale: `A card sort has the client sort occupation or value cards, not map family members.` },
      { id: 'b', text: `A career genogram`, isCorrect: true, rationale: `A career genogram maps the occupations and work messages in a client's family across generations.` },
      { id: 'c', text: `A lifeline`, isCorrect: false, rationale: `A lifeline plots the client's own past and future life events along a timeline.` },
      { id: 'd', text: `An ecomap`, isCorrect: false, rationale: `An ecomap shows the client's current links to people and community systems, not work histories by generation.` },
    ],
    rationale: `The career genogram, adapted from family therapy by Okiishi, charts occupations, education and work-related beliefs across about three generations. It helps clients see family expectations, role models and messages that shape their own choices. It is especially useful for exploring family and cultural influences on career decisions.`,
    references: [{ source: SH, detail: 'Qualitative career assessment: the career genogram' }],
  },
  {
    id: 'nce-s-cou-403',
    domain: 'counseling',
    cacrep: 'career',
    topic: 'career development theories (Holland, Super, Krumboltz)',
    difficulty: 'medium',
    stem: `A counselor helps a 44-year-old client weave together love, labor, learning and leisure, attend to spirituality and global needs, and see her life as a quilt of connected pieces rather than a single job choice. Which approach is the counselor using?`,
    options: [
      { id: 'a', text: `Parsons's trait-and-factor approach`, isCorrect: false, rationale: `Parsons matched personal traits to job requirements; he did not address life roles or global needs.` },
      { id: 'b', text: `Roe's personality development theory`, isCorrect: false, rationale: `Roe linked early family climate to person- or non-person-oriented occupations.` },
      { id: 'c', text: `Hansen's integrative life planning`, isCorrect: true, rationale: `Hansen's model uses the quilt metaphor and integrates love, labor, learning and leisure within broader life tasks.` },
      { id: 'd', text: `Holland's theory of vocational types`, isCorrect: false, rationale: `Holland matches RIASEC personality types to work environments, not whole-life planning.` },
    ],
    rationale: `Sunny Hansen's integrative life planning views career as part of a whole life, using the image of a quilt to show how the pieces fit together. It joins the four L's of love, labor, learning and leisure and names critical life tasks such as finding work that needs doing in changing global contexts and exploring spirituality and life purpose. It is a holistic alternative to single-decision matching models.`,
    references: [{ source: SH, detail: 'Hansen\'s integrative life planning: quilt metaphor and critical life tasks' }],
  },
  {
    id: 'nce-s-cou-404',
    domain: 'counseling',
    cacrep: 'career',
    topic: 'career development theories (Holland, Super, Krumboltz)',
    difficulty: 'medium',
    stem: `A client whose Holland code is strongly Artistic works as a payroll auditor in a highly structured, rule-bound office, a Conventional environment. How would Holland describe the fit between this person and this environment?`,
    options: [
      { id: 'a', text: `High consistency`, isCorrect: false, rationale: `Consistency describes how closely a person's own top types relate on the hexagon, not person-environment fit.` },
      { id: 'b', text: `Low congruence`, isCorrect: true, rationale: `Artistic and Conventional lie opposite each other on the hexagon, so the person-environment fit is poor.` },
      { id: 'c', text: `High differentiation`, isCorrect: false, rationale: `Differentiation describes how clearly one type stands out in a profile, not fit with a job.` },
      { id: 'd', text: `Low identity`, isCorrect: false, rationale: `Identity refers to the clarity of a person's goals and talents, not the fit with an environment.` },
    ],
    rationale: `In Holland's hexagon (Realistic, Investigative, Artistic, Social, Enterprising, Conventional), types placed opposite each other share the fewest traits. Congruence is the degree of match between a person's type and the work environment, and Artistic and Conventional are opposites. Low congruence predicts lower satisfaction and greater likelihood of change.`,
    references: [{ source: SH, detail: 'Holland\'s theory: congruence and the RIASEC hexagon' }],
  },

  // ── HUMAN DEVELOPMENT ────────────────────────────────────────────────────
  {
    id: 'nce-s-cou-405',
    domain: 'counseling',
    cacrep: 'human_growth',
    topic: 'human development theories (Erikson, Piaget, Kohlberg)',
    difficulty: 'easy',
    stem: `A 13-year-old refuses to go to school after getting a bad haircut, convinced that "everyone will be staring and talking about it all day." Which concept from Elkind's account of adolescent egocentrism BEST explains this?`,
    options: [
      { id: 'a', text: `The imaginary audience`, isCorrect: true, rationale: `The imaginary audience is the belief that one is the focus of everyone else's attention and judgment.` },
      { id: 'b', text: `The personal fable`, isCorrect: false, rationale: `The personal fable is the belief that one's experiences are unique or that one is invulnerable.` },
      { id: 'c', text: `Identity foreclosure`, isCorrect: false, rationale: `Foreclosure is Marcia's status of commitment without exploration, unrelated to feeling watched.` },
      { id: 'd', text: `Centration`, isCorrect: false, rationale: `Centration is a preoperational tendency to focus on one feature of a problem.` },
    ],
    rationale: `David Elkind described two forms of adolescent egocentrism that come with the new ability to think about thinking. The imaginary audience is the belief that others are constantly watching and evaluating the teen, which fuels self-consciousness. The personal fable, its partner, is the belief that one's feelings and experiences are unique.`,
    references: [{ source: BK, detail: 'Adolescent cognitive development: imaginary audience and personal fable' }],
  },

  // ── ATTACHMENT THEORY ────────────────────────────────────────────────────
  {
    id: 'nce-s-cou-406',
    domain: 'counseling',
    cacrep: 'human_growth',
    topic: 'attachment theory',
    difficulty: 'hard',
    stem: `A 2½-year-old protests less when his mother leaves for work now. He asks when she will return, and he asks her to read one story before she goes, and she agrees. In Bowlby's phases of attachment, which phase does this reflect?`,
    options: [
      { id: 'a', text: `Preattachment`, isCorrect: false, rationale: `Preattachment covers roughly the first six weeks, when infants are comforted by any caregiver.` },
      { id: 'b', text: `Clear-cut attachment`, isCorrect: false, rationale: `In clear-cut attachment, infants show strong separation protest without yet understanding or negotiating departures.` },
      { id: 'c', text: `Attachment in the making`, isCorrect: false, rationale: `This phase, around 6 weeks to 6-8 months, involves growing preference for familiar caregivers.` },
      { id: 'd', text: `Formation of a reciprocal relationship`, isCorrect: true, rationale: `Growing language and representation let the toddler understand the parent's comings and goings and negotiate.` },
    ],
    rationale: `Bowlby described four phases: preattachment, attachment in the making, clear-cut attachment and formation of a reciprocal relationship. From about 18 months to 2 years, language and mental representation let toddlers understand why a parent leaves and predict a return. Separation protest declines, and children begin to negotiate with caregivers, using requests and persuasion.`,
    references: [{ source: BK, detail: 'Bowlby\'s ethological theory: phases of attachment, formation of a reciprocal relationship' }],
  },
  {
    id: 'nce-s-cou-407',
    domain: 'counseling',
    cacrep: 'human_growth',
    topic: 'attachment theory',
    difficulty: 'medium',
    stem: `During a long hospital stay without his parents, a toddler first screams and searches for his mother, then becomes listless and withdrawn. By the third week he seems cheerful with staff but treats his mother with indifference when she visits. Which phase describes his final reaction?`,
    options: [
      { id: 'a', text: `Detachment`, isCorrect: true, rationale: `Detachment is the last phase, in which the child appears to recover but responds to the parent with indifference.` },
      { id: 'b', text: `Despair`, isCorrect: false, rationale: `Despair is the middle phase of listlessness and withdrawal, which came before this reaction.` },
      { id: 'c', text: `Protest`, isCorrect: false, rationale: `Protest is the first phase of crying and searching for the absent parent.` },
      { id: 'd', text: `Avoidance`, isCorrect: false, rationale: `Avoidance names an insecure attachment pattern in the Strange Situation, not a phase of prolonged separation.` },
    ],
    rationale: `James Robertson and John Bowlby observed that young children separated from parents for long periods move through protest, despair and detachment. In detachment, the child seems to adjust and engages with others but shows apparent indifference to the parent, masking the attachment loss. These observations helped change hospital policies to allow parents to stay with young children.`,
    references: [{ source: BK, detail: 'Attachment: effects of prolonged separation (protest, despair, detachment)' }],
  },

  // ── MULTICULTURAL COUNSELING COMPETENCIES ────────────────────────────────
  {
    id: 'nce-s-cou-408',
    domain: 'counseling',
    cacrep: 'social_cultural',
    topic: 'multicultural counseling competencies',
    difficulty: 'medium',
    stem: `A counselor serving undocumented immigrant families testifies before a state legislative committee and joins a coalition lobbying for a bill that would expand access to mental health care regardless of immigration status. In the MSJCC socioecological model, at which level is she intervening?`,
    options: [
      { id: 'a', text: `Interpersonal`, isCorrect: false, rationale: `Interpersonal work targets relationships among family, friends and peers.` },
      { id: 'b', text: `Institutional`, isCorrect: false, rationale: `Institutional work targets organizations such as schools, agencies and employers.` },
      { id: 'c', text: `Intrapersonal`, isCorrect: false, rationale: `Intrapersonal work targets the client's own beliefs, feelings and identity.` },
      { id: 'd', text: `Public policy`, isCorrect: true, rationale: `Testifying and lobbying for legislation target laws and policies, the public policy level.` },
    ],
    rationale: `The Multicultural and Social Justice Counseling Competencies use a socioecological model with intrapersonal, interpersonal, institutional, community, public policy and international or global levels. Counselors may intervene at any level, from individual counseling to systemic advocacy. Work on laws, regulations and funding falls at the public policy level.`,
    references: [{ source: MSJ, detail: 'Counseling and advocacy interventions: socioecological levels, including public policy' }],
  },
  {
    id: 'nce-s-cou-409',
    domain: 'counseling',
    cacrep: 'social_cultural',
    topic: 'multicultural counseling competencies',
    difficulty: 'hard',
    stem: `A Black client is guarded with his White counselor, shares little personal detail early on, and asks about the counselor's experience working with Black men. A colleague suggests the client may be paranoid. Which interpretation is MOST consistent with Sue and Sue?`,
    options: [
      { id: 'a', text: `Resistance that should be confronted directly in the session`, isCorrect: false, rationale: `Treating adaptive caution as resistance pathologizes the client and is likely to harm the alliance.` },
      { id: 'b', text: `Healthy cultural paranoia, an adaptive response to racism`, isCorrect: true, rationale: `Grier and Cobbs's concept frames such mistrust as a reasonable, protective response to experiences of racism.` },
      { id: 'c', text: `An early sign of a paranoid personality style needing assessment`, isCorrect: false, rationale: `Nothing beyond appropriate caution suggests a personality disorder; this would misdiagnose a cultural response.` },
      { id: 'd', text: `Transference of feelings about his father onto the counselor`, isCorrect: false, rationale: `The guardedness reflects sociopolitical realities, not displaced feelings about a parent.` },
    ],
    rationale: `Grier and Cobbs used the term healthy cultural paranoia to describe the adaptive mistrust many Black Americans develop in response to racism. Sue and Sue caution that counselors may misread this caution as pathology or resistance. Openly acknowledging racial differences and earning trust are more helpful than labeling the client.`,
    references: [{ source: SS, detail: 'Sociopolitical dimensions: mistrust, healthy cultural paranoia and counselor credibility' }],
  },

  // ── RACIAL AND CULTURAL IDENTITY MODELS ──────────────────────────────────
  {
    id: 'nce-s-cou-410',
    domain: 'counseling',
    cacrep: 'social_cultural',
    topic: 'racial and cultural identity models',
    difficulty: 'easy',
    stem: `A White first-year counseling student says, "I don't really see color. I treat everyone the same, so race doesn't come up for me." She has had little contact with people of other races. In Helms's White racial identity model, which status does this reflect?`,
    options: [
      { id: 'a', text: `Autonomy`, isCorrect: false, rationale: `Autonomy reflects a mature, nonracist identity that actively values diversity.` },
      { id: 'b', text: `Disintegration`, isCorrect: false, rationale: `Disintegration involves guilt and conflict after racism becomes hard to ignore.` },
      { id: 'c', text: `Contact`, isCorrect: true, rationale: `Contact is marked by a color-blind stance and little awareness of race or racism.` },
      { id: 'd', text: `Reintegration`, isCorrect: false, rationale: `Reintegration involves idealizing White people and blaming people of color.` },
    ],
    rationale: `Helms's model begins with contact, in which White people are largely unaware of race and racism and often claim to be color-blind. Later statuses are disintegration, reintegration, pseudo-independence, immersion/emersion and autonomy. Counselor education aims to move trainees past contact toward an informed, nonracist White identity.`,
    references: [{ source: SS, detail: 'White racial identity development: Helms\'s contact status' }],
  },
  {
    id: 'nce-s-cou-411',
    domain: 'counseling',
    cacrep: 'social_cultural',
    topic: 'racial and cultural identity models',
    difficulty: 'medium',
    stem: `A Latino 20-year-old tells his counselor he avoids speaking Spanish in public, prefers only White friends and calls his own culture "backward." In Atkinson, Morten and Sue's Racial/Cultural Identity Development model, which stage does this fit?`,
    options: [
      { id: 'a', text: `Resistance and immersion`, isCorrect: false, rationale: `This stage involves rejecting dominant culture and embracing one's own group.` },
      { id: 'b', text: `Conformity`, isCorrect: true, rationale: `Conformity involves preferring dominant-culture values and depreciating one's own group.` },
      { id: 'c', text: `Dissonance`, isCorrect: false, rationale: `Dissonance begins when experiences challenge the client's devaluing beliefs, causing conflict.` },
      { id: 'd', text: `Integrative awareness`, isCorrect: false, rationale: `Integrative awareness reflects a secure identity that values both one's own and other cultures.` },
    ],
    rationale: `The R/CID model has five stages: conformity, dissonance, resistance and immersion, introspection, and integrative awareness. In conformity, people from marginalized groups favor dominant-culture values and hold negative views of their own group. Counselors working with clients in this stage may be valued if they belong to the dominant group, which shapes how culture can be explored.`,
    references: [{ source: SS, detail: 'Racial/Cultural Identity Development model: conformity stage' }],
  },

  // ── TRAUMA-INFORMED INTERVENTIONS ────────────────────────────────────────
  {
    id: 'nce-s-cou-412',
    domain: 'counseling',
    cacrep: 'helping_relationships',
    topic: 'trauma-informed interventions',
    difficulty: 'medium',
    stem: `In her second session, a 31-year-old with repeated childhood abuse wants to describe her worst memories in detail. She reports cutting herself this week, has no stable housing and has few coping skills. Which plan BEST fits a phase-oriented, trauma-informed approach?`,
    options: [
      { id: 'a', text: `Build safety, stability and coping skills before trauma processing`, isCorrect: true, rationale: `A phase-oriented approach puts safety and stabilization first, then trauma processing once the client can tolerate it.` },
      { id: 'b', text: `Begin detailed trauma processing now, since she is asking to do it`, isCorrect: false, rationale: `Processing trauma while she is self-harming and unstable risks overwhelming and destabilizing her.` },
      { id: 'c', text: `Advise her to avoid discussing the abuse for the whole course of care`, isCorrect: false, rationale: `Trauma processing is not ruled out; it is sequenced after stabilization.` },
      { id: 'd', text: `Refer her to a group for survivors so she can share her story there`, isCorrect: false, rationale: `This shifts disclosure to another setting without first addressing safety and stability.` },
    ],
    rationale: `Trauma-informed, phase-oriented treatment begins with safety and stabilization: managing self-harm, meeting basic needs and building emotion-regulation skills. Trauma processing follows when the client can tolerate distressing material without becoming overwhelmed. Reconnection with relationships and daily life is the final focus.`,
    references: [{ source: TIP57, detail: 'Trauma-specific treatment: establishing safety and stabilization before trauma processing' }],
  },
  {
    id: 'nce-s-cou-413',
    domain: 'counseling',
    cacrep: 'helping_relationships',
    topic: 'trauma-informed interventions',
    difficulty: 'medium',
    stem: `A college student who was assaulted says, "I didn't fight or scream. I just froze. Maybe that means I let it happen." Which counselor response BEST reflects trauma-informed practice?`,
    options: [
      { id: 'a', text: `Ask her to think about what she could do differently next time`, isCorrect: false, rationale: `This implies she was responsible and could have prevented the assault.` },
      { id: 'b', text: `Move on to safety planning and come back to this feeling later`, isCorrect: false, rationale: `Moving on misses the self-blame she has voiced, which is central to her distress.` },
      { id: 'c', text: `Reassure her that she should not dwell on what happened that night`, isCorrect: false, rationale: `This dismisses her experience and gives no understanding of her reaction.` },
      { id: 'd', text: `Explain that freezing is an automatic survival response, not consent`, isCorrect: true, rationale: `Psychoeducation that normalizes freezing as an involuntary survival response reduces shame and self-blame.` },
    ],
    rationale: `Trauma-informed care includes psychoeducation that helps clients understand common reactions to trauma. Freezing is an automatic survival response controlled by the nervous system, not a choice or a form of consent. Normalizing such reactions reduces shame and self-blame and supports recovery.`,
    references: [{ source: TIP57, detail: 'Common responses to trauma; psychoeducation that normalizes survival reactions' }],
  },

  // ── TERMINATION SKILLS ───────────────────────────────────────────────────
  {
    id: 'nce-s-cou-414',
    domain: 'counseling',
    cacrep: 'professional_orientation',
    topic: 'termination skills',
    difficulty: 'easy',
    stem: `A counselor at a community agency has accepted a new job and will leave in two months. Several of her clients are still working on their goals. What should she do?`,
    options: [
      { id: 'a', text: `Tell clients in the final session and give them the agency's phone number`, isCorrect: false, rationale: `Last-minute notice leaves no time to process the ending or arrange a smooth transfer.` },
      { id: 'b', text: `Keep seeing them privately after she leaves so that care is not interrupted`, isCorrect: false, rationale: `Taking agency clients into private practice raises conflicts and agency policy concerns.` },
      { id: 'c', text: `Tell clients early, process the ending and arrange a careful transfer of care`, isCorrect: true, rationale: `Early notice, discussion of the ending and a well-coordinated transfer protect continuity of care.` },
      { id: 'd', text: `Let the agency reassign her clients after she has gone, as is usual practice`, isCorrect: false, rationale: `Leaving the transfer to others after she departs does not meet her own duty to ensure continuity.` },
    ],
    rationale: `The ACA Code of Ethics requires counselors who transfer or refer clients to complete the needed clinical and administrative steps and keep open communication with clients and receiving practitioners (A.11.d). Giving ample notice lets clients process the ending and lets the counselor prepare a careful handoff. This protects clients from abandonment and keeps care continuous.`,
    references: [{ source: ACA, detail: 'A.11.d Appropriate Transfer of Services' }],
  },
  {
    id: 'nce-s-cou-415',
    domain: 'counseling',
    cacrep: 'professional_orientation',
    topic: 'termination skills',
    difficulty: 'hard',
    stem: `A client's partner, who has a history of violence, has begun waiting outside the counselor's office and recently sent the counselor a threatening message. The counselor is considering ending counseling with the client. Which statement BEST reflects the ACA Code of Ethics?`,
    options: [
      { id: 'a', text: `She must continue, since ending counseling here would be abandonment`, isCorrect: false, rationale: `The Code allows termination in this situation; ending with proper steps is not abandonment.` },
      { id: 'b', text: `She may end counseling only if the client consents to the ending`, isCorrect: false, rationale: `Client consent is not required when the counselor is in jeopardy of harm.` },
      { id: 'c', text: `She may end it, with pretermination counseling and referrals`, isCorrect: true, rationale: `A.11.c permits termination when the counselor is in jeopardy of harm from someone in a relationship with the client, with pretermination counseling and referrals.` },
      { id: 'd', text: `She may end counseling at once without contact, since safety comes first`, isCorrect: false, rationale: `Ending without any contact or referral fails the duty to provide pretermination counseling when possible.` },
    ],
    rationale: `ACA Code A.11.c allows counselors to terminate when they are in jeopardy of harm by the client or by another person with whom the client has a relationship. Counselors still provide pretermination counseling and recommend other service providers when necessary. Arranging the ending safely, for example by phone or with other staff present, protects both the counselor and the client.`,
    references: [{ source: ACA, detail: 'A.11.c Appropriate Termination' }],
  },

  // ── FAMILY SYSTEMS THEORIES ──────────────────────────────────────────────
  {
    id: 'nce-s-cou-416',
    domain: 'counseling',
    cacrep: 'helping_relationships',
    topic: 'family systems theories (Bowen, structural, strategic)',
    difficulty: 'hard',
    stem: `Two anxious parents worry constantly about one of their three children, a 12-year-old they see as "fragile." They monitor her closely, and over time she has become the most anxious and least independent of the siblings. Which Bowen concept BEST describes this pattern?`,
    options: [
      { id: 'a', text: `Emotional cutoff`, isCorrect: false, rationale: `Emotional cutoff is distancing from one's family of origin to manage unresolved fusion.` },
      { id: 'b', text: `Sibling position`, isCorrect: false, rationale: `Sibling position links birth order to traits; it does not explain one child absorbing parental anxiety.` },
      { id: 'c', text: `Societal emotional process`, isCorrect: false, rationale: `This concept concerns anxiety at the level of society, not within one family.` },
      { id: 'd', text: `Family projection process`, isCorrect: true, rationale: `Parents project their own undifferentiation and anxiety onto one child, who becomes the most impaired.` },
    ],
    rationale: `In Bowen's family projection process, parents transmit their own anxiety and lack of differentiation to a particular child. That child becomes the focus of worry, absorbs the most anxiety and tends to end up with the lowest differentiation of self. Repeated over generations, this process feeds the multigenerational transmission of symptoms.`,
    references: [{ source: GO, detail: 'Bowen family systems theory: family projection process' }],
  },
  {
    id: 'nce-s-cou-417',
    domain: 'counseling',
    cacrep: 'helping_relationships',
    topic: 'family systems theories (Bowen, structural, strategic)',
    difficulty: 'easy',
    stem: `In a family session, the parents of a 15-year-old do not know who his friends are, rarely eat with him and learned about his school suspension weeks later. Each family member seems to live separately. In structural family therapy, this family's boundaries are BEST described as:`,
    options: [
      { id: 'a', text: `rigid, producing disengagement`, isCorrect: true, rationale: `Rigid boundaries limit contact and support, so members are disengaged from one another.` },
      { id: 'b', text: `diffuse, producing enmeshment`, isCorrect: false, rationale: `Diffuse boundaries create over-involvement, the opposite of this family's distance.` },
      { id: 'c', text: `clear, producing healthy autonomy`, isCorrect: false, rationale: `Clear boundaries allow autonomy along with support and contact, which is missing here.` },
      { id: 'd', text: `triangulated, producing coalitions`, isCorrect: false, rationale: `Triangulation describes drawing a third person into a dyad's conflict, not general distance.` },
    ],
    rationale: `Minuchin described boundaries on a continuum from rigid to diffuse. Rigid boundaries lead to disengagement, in which members are isolated and slow to respond to one another's needs. Diffuse boundaries lead to enmeshment, and clear boundaries allow both closeness and autonomy.`,
    references: [{ source: GO, detail: 'Structural family therapy: boundaries, disengagement and enmeshment' }],
  },

  // ── GROUP STAGES AND LEADERSHIP ──────────────────────────────────────────
  {
    id: 'nce-s-cou-418',
    domain: 'counseling',
    cacrep: 'group',
    topic: 'group leadership skills and therapeutic factors',
    difficulty: 'medium',
    stem: `In a psychodrama group, a 33-year-old man re-enacts a painful conversation with his late father. The director asks another group member to stand beside him and voice the grief and anger he seems unable to say aloud. In Moreno's psychodrama, what role is this member playing?`,
    options: [
      { id: 'a', text: `The protagonist`, isCorrect: false, rationale: `The protagonist is the man whose story is being enacted, not the member who supports him.` },
      { id: 'b', text: `An auxiliary ego (double)`, isCorrect: true, rationale: `An auxiliary ego plays roles in the protagonist's drama; as a double, it voices his unspoken thoughts and feelings.` },
      { id: 'c', text: `The director`, isCorrect: false, rationale: `The director is the leader who guides the enactment and assigned this member the role.` },
      { id: 'd', text: `The audience`, isCorrect: false, rationale: `The audience observes and later shares; this member has stepped into the enactment.` },
    ],
    rationale: `Jacob Moreno's psychodrama includes the protagonist, the director, auxiliary egos, the audience and the stage. Auxiliary egos are group members who take roles in the protagonist's drama, such as significant others. In the doubling technique, an auxiliary ego stands beside the protagonist and expresses inner thoughts and feelings he has not voiced, helping him access and own them.`,
    references: [{ source: GL, detail: 'Group work approaches: Moreno\'s psychodrama (protagonist, director, auxiliary ego, doubling)' }],
  },

  {
    id: 'nce-s-cou-419',
    domain: 'counseling',
    cacrep: 'group',
    topic: 'group stages and dynamics',
    difficulty: 'easy',
    stem: `In 1977, Tuckman and Jensen added a fifth stage to Tuckman's original model of forming, storming, norming and performing. What is this stage, and what happens in it?`,
    options: [
      { id: 'a', text: `Transforming, as the group sets new goals`, isCorrect: false, rationale: `Transforming is not a stage in Tuckman's model.` },
      { id: 'b', text: `Adjourning, as the group comes to an end`, isCorrect: true, rationale: `Adjourning covers ending the group, completing tasks and dealing with separation.` },
      { id: 'c', text: `Reforming, as members renegotiate roles`, isCorrect: false, rationale: `Reforming is not a stage in Tuckman's model.` },
      { id: 'd', text: `Mourning, as members grieve a lost member`, isCorrect: false, rationale: `Some writers use "mourning" informally, but the stage Tuckman and Jensen named is adjourning.` },
    ],
    rationale: `Tuckman's 1965 model described forming, storming, norming and performing. In 1977, Tuckman and Jensen added adjourning, the stage in which the group completes its work and members deal with ending and separation. Leaders help members review what they gained and say goodbye.`,
    references: [{ source: GL, detail: 'Group work: stages of group development (Tuckman and Jensen)' }],
  },
  {
    id: 'nce-s-cou-420',
    domain: 'counseling',
    cacrep: 'group',
    topic: 'group leadership skills and therapeutic factors',
    difficulty: 'medium',
    stem: `At the end of an eight-week panic disorder group, a 45-year-old member says what helped most was the leader's explanation of how the body's alarm response produces panic symptoms, along with practical advice for managing them. Which of Yalom's therapeutic factors does this BEST illustrate?`,
    options: [
      { id: 'a', text: `Imparting information`, isCorrect: true, rationale: `Didactic teaching and direct advice from the leader or members make up imparting information.` },
      { id: 'b', text: `Universality`, isCorrect: false, rationale: `Universality is the relief of learning that others share one's problems.` },
      { id: 'c', text: `Catharsis`, isCorrect: false, rationale: `Catharsis is the release of strong emotion, which the member does not describe.` },
      { id: 'd', text: `Instillation of hope`, isCorrect: false, rationale: `Instillation of hope comes from seeing others improve, not from learning facts about symptoms.` },
    ],
    rationale: `Yalom's imparting information covers didactic instruction about mental health and illness and direct advice from the leader or other members. It is especially prominent in psychoeducational and symptom-focused groups, such as groups for panic disorder. Explaining how symptoms work can itself reduce fear by making them understandable.`,
    references: [{ source: YL, detail: 'Therapeutic factors: imparting information' }],
  },
];
