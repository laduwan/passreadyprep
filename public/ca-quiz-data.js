// ca-quiz-data.js — Core Counseling Attributes Quiz Bank
// 30 scenario-based MCQs covering the 15% Core Counseling Attributes NCMHCE domain
// Topics: Rogers conditions, Bordin alliance, rupture/repair, stages, cultural,
//         theories (psychodynamic/adlerian/humanistic/CBT/systemic/existential), microskills
const CA_QUIZ_ITEMS = [

  // ---- ROGERS' CORE CONDITIONS ----
  {
    id:'ca01', topic:"Rogers' Core Conditions",
    stem:'A client discloses she has been having an affair. The counselor says, "Tell me more about what that experience has been like for you." This BEST demonstrates:',
    options:[
      {id:'a', text:'Congruence — the counselor is being authentic about curiosity', isCorrect:false},
      {id:'b', text:'Unconditional positive regard — non-judgmental acceptance of the client regardless of behavior', isCorrect:true},
      {id:'c', text:'Advanced empathy — reflecting the implied shame behind the disclosure', isCorrect:false},
      {id:'d', text:'Accurate empathy — reflecting the content of what she shared', isCorrect:false},
    ],
    rationale:"UPR means valuing the client's personhood regardless of behavior or choices. Inviting exploration without implied judgment demonstrates UPR. Empathy would reflect her emotional experience; congruence would involve the counselor's authentic self-expression."
  },
  {
    id:'ca02', topic:"Rogers' Core Conditions",
    stem:'A counselor responds: "You sound exhausted by all of this — like you\'ve been carrying it alone for a long time." The client says, "Exactly. That\'s exactly it." This exchange BEST illustrates:',
    options:[
      {id:'a', text:'Unconditional positive regard', isCorrect:false},
      {id:'b', text:'Congruence', isCorrect:false},
      {id:'c', text:'Accurate empathic understanding communicated to the client', isCorrect:true},
      {id:'d', text:'Advanced empathy — reflecting what was not yet said', isCorrect:false},
    ],
    rationale:"The client's confirmation ('Exactly — that's it') indicates the counselor accurately reflected the felt experience AND communicated it in a way that landed. This is the empathy condition fully realized: accurate tracking + successful communication."
  },
  {
    id:'ca03', topic:"Rogers' Core Conditions",
    stem:'During a session, a counselor notices they feel genuinely bored and distracted. Acting on congruence, the MOST appropriate response is:',
    options:[
      {id:'a', text:'Continue the session without disclosure — showing boredom violates UPR', isCorrect:false},
      {id:'b', text:'Disclose the experience if therapeutically relevant — "I notice my attention drifting; I want to stay with you here."', isCorrect:true},
      {id:'c', text:'End the session early and reschedule for when more focused', isCorrect:false},
      {id:'d', text:'Ask the client to speak more slowly so the counselor can follow better', isCorrect:false},
    ],
    rationale:"Congruence means the counselor's internal experience, outward expression, and words align. When relevant, this includes naming what's happening authentically. This is NOT full self-disclosure — it's brief, relevant, and returned to the client's process."
  },
  {
    id:'ca04', topic:"Rogers' Core Conditions",
    stem:'Rogers argued that the three core conditions are "necessary and sufficient" for therapeutic change. This means:',
    options:[
      {id:'a', text:'Techniques are helpful but secondary to the relational conditions', isCorrect:false},
      {id:'b', text:'No additional therapeutic techniques are required if all three conditions are genuinely present', isCorrect:true},
      {id:'c', text:'All three conditions must be present simultaneously in every moment of the session', isCorrect:false},
      {id:'d', text:'Skilled counselors need the conditions plus at least one evidence-based technique', isCorrect:false},
    ],
    rationale:"Rogers' radical claim: the three conditions (UPR, empathy, congruence) are BOTH necessary (you can't do without them) AND sufficient (nothing else is required). This distinguishes PCT from all technique-driven approaches. The relationship IS the therapy."
  },
  {
    id:'ca05', topic:"Rogers' Core Conditions",
    stem:'A counselor says, "I think you should reconsider leaving that relationship — you\'ve worked hard on it." This response MOST directly violates:',
    options:[
      {id:'a', text:'Congruence — the counselor is not being authentic', isCorrect:false},
      {id:'b', text:'Empathy — the counselor did not reflect the client\'s feeling', isCorrect:false},
      {id:'c', text:'Unconditional positive regard — the counselor is directing and evaluating the client\'s choices', isCorrect:true},
      {id:'d', text:'The therapeutic frame — advice-giving is prohibited in all counseling', isCorrect:false},
    ],
    rationale:"UPR is violated when the counselor implies the client should feel differently, make different choices, or evaluates their decisions. 'You should reconsider' is a directive that communicates conditional acceptance based on the counselor's values."
  },

  // ---- BORDIN'S WORKING ALLIANCE ----
  {
    id:'ca06', topic:"Bordin's Working Alliance",
    stem:"Bordin's working alliance model has three components. A client says, 'I don't understand why we're doing all this breathing stuff — I came here because my marriage is falling apart.' This represents a rupture in:",
    options:[
      {id:'a', text:'Bond — the client does not feel emotionally safe with the counselor', isCorrect:false},
      {id:'b', text:'Goals — the client does not agree what therapy is for', isCorrect:false},
      {id:'c', text:'Tasks — the client questions whether the methods connect to the goals', isCorrect:true},
      {id:'d', text:'Both bond and tasks equally', isCorrect:false},
    ],
    rationale:"Task rupture: the client agrees something is wrong (goals are intact) but doesn't see how breathing exercises connect to the marital problem. The repair is to collaboratively renegotiate methods — explain the rationale or shift approach."
  },
  {
    id:'ca07', topic:"Bordin's Working Alliance",
    stem:'A client has been attending sessions but repeatedly says things like "I guess if you think that\'s helpful" and "sure, whatever you say." This pattern MOST likely signals:',
    options:[
      {id:'a', text:'Good therapeutic compliance', isCorrect:false},
      {id:'b', text:'A goal rupture — client and counselor do not share the same treatment objectives', isCorrect:true},
      {id:'c', text:'A bond rupture — the client does not feel emotionally safe', isCorrect:false},
      {id:'d', text:'A task rupture — the client questions the methods being used', isCorrect:false},
    ],
    rationale:"Passive compliance ('sure, whatever you say') suggests the client is going along without buy-in — a goal rupture in which the client's actual goals differ from the stated treatment goals. The repair involves re-exploring what the client genuinely wants from therapy."
  },
  {
    id:'ca08', topic:"Bordin's Working Alliance",
    stem:"A client who was molested as a child says tearfully, 'I just don't think I can talk about what happened — it doesn't feel safe.' The FIRST clinical priority is:",
    options:[
      {id:'a', text:'Introduce EMDR as a non-verbal alternative', isCorrect:false},
      {id:'b', text:'Address the bond component — create conditions of safety before any trauma processing', isCorrect:true},
      {id:'c', text:'Renegotiate the treatment plan tasks to include stabilization', isCorrect:false},
      {id:'d', text:'Refer to a trauma specialist who can provide safety', isCorrect:false},
    ],
    rationale:"'It doesn't feel safe' is a bond rupture signal. Feeling emotionally safe with the counselor is foundational (bond). No task or goal work succeeds without it. The counselor must repair or strengthen the bond before any trauma processing resumes."
  },
  {
    id:'ca09', topic:"Bordin's Working Alliance",
    stem:'Research on the therapeutic alliance consistently shows that it is:',
    options:[
      {id:'a', text:'Less predictive of outcome than the specific treatment technique used', isCorrect:false},
      {id:'b', text:'The single strongest predictor of treatment outcome across modalities', isCorrect:true},
      {id:'c', text:'Only important in humanistic and person-centered approaches', isCorrect:false},
      {id:'d', text:'Primarily determined by client factors, not counselor behavior', isCorrect:false},
    ],
    rationale:"Meta-analytic research (Wampold, Lambert) consistently finds the therapeutic alliance accounts for more outcome variance than any specific technique. This finding holds across CBT, psychodynamic, and other modalities — making alliance skills the highest-leverage counselor competency."
  },

  // ---- RUPTURE & REPAIR ----
  {
    id:'ca10', topic:'Rupture & Repair',
    stem:"A client who usually engages openly arrives and gives one-word answers, avoids eye contact, and doesn't elaborate. The counselor's BEST response is:",
    options:[
      {id:'a', text:'Continue the session agenda — the client may just be having a hard day', isCorrect:false},
      {id:'b', text:'Ask directly, "What\'s wrong? You seem different today."', isCorrect:false},
      {id:'c', text:'Tentatively name the shift: "I notice you seem quieter than usual today — I want to check in with you."', isCorrect:true},
      {id:'d', text:'Address the behavior as resistance: "It seems like you\'re not ready to work today."', isCorrect:false},
    ],
    rationale:"A withdrawal rupture is signaled by the client pulling back without explanation. The correct response is to name the observation tentatively and with curiosity — not to interpret it as resistance or ignore it and plow ahead. 'I want to check in with you' invites without pressure."
  },
  {
    id:'ca11', topic:'Rupture & Repair',
    stem:'A client says directly, "I feel like you\'re not really listening to me — you keep steering us back to CBT when I just want to be heard." This is BEST classified as:',
    options:[
      {id:'a', text:'A withdrawal rupture — the client is pulling back from engagement', isCorrect:false},
      {id:'b', text:'A confrontation rupture — the client is directly challenging the counselor\'s approach', isCorrect:true},
      {id:'c', text:'A termination signal requiring discussion of ending therapy', isCorrect:false},
      {id:'d', text:'Transference — the client is displacing frustration from another relationship', isCorrect:false},
    ],
    rationale:"Confrontation ruptures involve direct disagreement or challenge to the counselor. The client is explicitly naming a grievance. The repair: acknowledge the client's experience, don't defend, and explore what would feel more like being heard."
  },
  {
    id:'ca12', topic:'Rupture & Repair',
    stem:'Research on therapeutic rupture and repair (Safran & Muran) found that:',
    options:[
      {id:'a', text:'Ruptures should be prevented at all costs to maintain a positive therapeutic climate', isCorrect:false},
      {id:'b', text:'Successfully repaired ruptures can strengthen the alliance and improve outcomes', isCorrect:true},
      {id:'c', text:'Ruptures indicate poor therapeutic fit requiring immediate referral', isCorrect:false},
      {id:'d', text:'Confrontation ruptures are more damaging than withdrawal ruptures', isCorrect:false},
    ],
    rationale:"Rupture-repair research: navigating alliance strains is often more therapeutic than avoiding them — especially for clients with relational trauma. The therapist's capacity to acknowledge, explore, and repair is a stronger predictor of outcomes than the absence of rupture."
  },
  {
    id:'ca13', topic:'Rupture & Repair',
    stem:'A client who met all treatment goals begins arriving late and cancelling sessions 3 weeks before the planned final session. The counselor\'s BEST response is:',
    options:[
      {id:'a', text:'Extend treatment by 4 sessions to allow time for the client to stabilize', isCorrect:false},
      {id:'b', text:'Confront the client about the pattern as a boundary violation', isCorrect:false},
      {id:'c', text:'Name the pattern and connect it to the approaching ending without abandoning the termination plan', isCorrect:true},
      {id:'d', text:'Contact the client between sessions to assess for crisis', isCorrect:false},
    ],
    rationale:"Pre-termination regression is NORMAL and EXPECTED — not a sign of failure or crisis. Extending therapy in response to it reinforces avoidance of ending. The correct response: name what you observe, normalize it, and maintain the planned termination while processing the ending together."
  },

  // ---- STAGES OF COUNSELING ----
  {
    id:'ca14', topic:'Stages of Counseling',
    stem:'A new client describes her depression and before the session ends asks, "So what\'s our treatment plan?" The counselor\'s MOST appropriate response is:',
    options:[
      {id:'a', text:'Present a treatment plan developed from the intake information gathered so far', isCorrect:false},
      {id:'b', text:'Explain that treatment planning is deferred to session three per best practice guidelines', isCorrect:false},
      {id:'c', text:'Validate her desire for direction, continue gathering information, and establish safety before focusing on a plan', isCorrect:true},
      {id:'d', text:'Collaboratively set two treatment goals before the session ends', isCorrect:false},
    ],
    rationale:"In the initial/exploration stage, safety and alliance are the primary tasks. Moving to goal-setting before the client feels heard or before safety is assessed is a common NCMHCE trap. Validate the desire for direction and continue building the foundation."
  },
  {
    id:'ca15', topic:'Stages of Counseling',
    stem:"The working/middle stage of counseling is characterized by:",
    options:[
      {id:'a', text:'Primarily building rapport and establishing the counseling frame', isCorrect:false},
      {id:'b', text:'Active treatment implementation, increased client risk-taking, and likely alliance ruptures', isCorrect:true},
      {id:'c', text:'Consolidating gains and preparing for termination', isCorrect:false},
      {id:'d', text:'Psychoeducation about the therapeutic process before deeper work begins', isCorrect:false},
    ],
    rationale:"The working stage: the treatment plan is active, the client is taking risks, and alliance ruptures are most likely because the work gets harder. The counselor moves between support and challenge — building on the alliance established in the initial stage."
  },
  {
    id:'ca16', topic:'Stages of Counseling',
    stem:'At termination, a well-executed ending includes all of the following EXCEPT:',
    options:[
      {id:'a', text:'Reviewing progress and consolidating gains', isCorrect:false},
      {id:'b', text:'Developing a relapse prevention plan', isCorrect:false},
      {id:'c', text:'Processing the client\'s feelings about the ending', isCorrect:false},
      {id:'d', text:'Waiting until the final session to raise the topic of ending', isCorrect:true},
    ],
    rationale:"Termination should be raised early enough for the client to have time to process it — not sprung in the final session. Adequate lead time allows grief, regression, and consolidation to be worked through rather than bypassed."
  },

  // ---- CULTURAL RESPONSIVENESS ----
  {
    id:'ca17', topic:'Cultural Responsiveness',
    stem:'A counselor says to a Hmong client: "I\'d like to understand how your community and family think about seeking help for emotional difficulties." This BEST demonstrates:',
    options:[
      {id:'a', text:'Cultural competence — applying known knowledge about Hmong culture', isCorrect:false},
      {id:'b', text:'Cultural humility — asking rather than assuming, positioning the client as the expert on their own experience', isCorrect:true},
      {id:'c', text:'Multicultural assessment — gathering culturally relevant history', isCorrect:false},
      {id:'d', text:'Psychoeducation — explaining how therapy works cross-culturally', isCorrect:false},
    ],
    rationale:"Cultural humility: asking rather than assuming, positioning the client as the cultural expert. This contrasts with cultural competence (applying pre-learned knowledge about a group). On the NCMHCE, humility responses ('I'd like to understand...') outperform competence responses ('In many X cultures...')."
  },
  {
    id:'ca18', topic:'Cultural Responsiveness',
    stem:'Microaggressions in counseling are MOST harmful because:',
    options:[
      {id:'a', text:'They are always consciously intended as discrimination', isCorrect:false},
      {id:'b', text:'Their cumulative effect communicates invalidation of identity regardless of intent', isCorrect:true},
      {id:'c', text:'They only affect clients from visible racial minority groups', isCorrect:false},
      {id:'d', text:'A single microaggression is sufficient to destroy the therapeutic alliance', isCorrect:false},
    ],
    rationale:"Microaggressions (Sue et al.) cause harm through cumulative effect and regardless of intent. A well-meaning counselor can damage the alliance through repeated, subtle invalidations. The NCMHCE tests awareness that impact matters more than intent."
  },
  {
    id:'ca19', topic:'Cultural Responsiveness',
    stem:'A Latina client describes "ataque de nervios" following her mother\'s death. The counselor\'s MOST culturally responsive response is:',
    options:[
      {id:'a', text:'Assess for Panic Disorder using DSM-5 criteria', isCorrect:false},
      {id:'b', text:'Explore the meaning and cultural context of the experience before applying any diagnostic framework', isCorrect:true},
      {id:'c', text:'Provide psychoeducation about anxiety and its physiological basis', isCorrect:false},
      {id:'d', text:'Refer to a Latino mental health specialist', isCorrect:false},
    ],
    rationale:"Ataques de nervios is a cultural concept of distress — a culturally shaped expression of suffering that may or may not map to a DSM diagnosis. Exploring its meaning and cultural context first is culturally responsive; jumping to Panic Disorder assessment pathologizes a cultural expression."
  },

  // ---- THEORIES: EXAM DISCRIMINATION ----
  {
    id:'ca20', topic:'Theory Identification',
    stem:'The counselor says, "Let\'s explore what that memory of your father means to how you relate to people in authority today." This MOST reflects:',
    options:[
      {id:'a', text:'Cognitive-behavioral therapy — connecting thoughts to present patterns', isCorrect:false},
      {id:'b', text:'Psychodynamic/psychoanalytic therapy — exploring early object relations and their present-day influence', isCorrect:true},
      {id:'c', text:'Existential therapy — exploring authentic relationships', isCorrect:false},
      {id:'d', text:'Adlerian therapy — exploring lifestyle and birth order', isCorrect:false},
    ],
    rationale:"Exploring childhood relational experiences and their influence on present-day patterns is the hallmark of psychodynamic/object relations work. NCMHCE stems referencing 'early experiences,' 'what your father meant to you,' or transference point to psychodynamic orientation."
  },
  {
    id:'ca21', topic:'Theory Identification',
    stem:'A counselor asks, "If a miracle happened tonight while you slept and your problem was solved, what would be the first thing you\'d notice tomorrow morning?" This technique comes from:',
    options:[
      {id:'a', text:'Existential therapy — exploring a preferred future without constraints', isCorrect:false},
      {id:'b', text:'Solution-Focused Brief Therapy — the miracle question', isCorrect:true},
      {id:'c', text:'Narrative therapy — re-authoring the dominant story', isCorrect:false},
      {id:'d', text:'Gestalt therapy — fantasy work in the here-and-now', isCorrect:false},
    ],
    rationale:"The miracle question is a signature SFBT technique (de Shazer/Berg). It bypasses problem focus to generate a concrete solution picture. On the NCMHCE: miracle question = SFBT; externalization = Narrative; enactment = Structural Family; empty chair = Gestalt."
  },
  {
    id:'ca22', topic:'Theory Identification',
    stem:'The NCMHCE presents a vignette in which the counselor "explores the client\'s birth order, early recollections, and social interest." This MOST identifies:',
    options:[
      {id:'a', text:'Bowenian family systems — genogram and multigenerational patterns', isCorrect:false},
      {id:'b', text:'Adlerian (Individual Psychology) — lifestyle assessment', isCorrect:true},
      {id:'c', text:'Humanistic/PCT — actualizing tendency and early conditions of worth', isCorrect:false},
      {id:'d', text:'Psychodynamic — early developmental history', isCorrect:false},
    ],
    rationale:"Birth order + early recollections + social interest = Adlerian. These are the diagnostic tools of lifestyle assessment. Bowenian uses genograms; PCT explores conditions of worth; psychodynamic focuses on early object relations and defense mechanisms."
  },
  {
    id:'ca23', topic:'Theory Identification',
    stem:'"The client relates to the counselor as if the counselor were her critical mother." This clinical observation is MOST relevant to which orientation?',
    options:[
      {id:'a', text:'Person-centered therapy — conditions of worth', isCorrect:false},
      {id:'b', text:'Psychodynamic therapy — transference', isCorrect:true},
      {id:'c', text:'CBT — cognitive distortion about the counselor', isCorrect:false},
      {id:'d', text:'Gestalt therapy — unfinished business', isCorrect:false},
    ],
    rationale:"Relating to the therapist as if they were a significant figure from the past is the definition of transference — a central concept in psychodynamic/psychoanalytic work. Analysis of transference is the primary therapeutic tool in this orientation."
  },
  {
    id:'ca24', topic:'Theory Identification',
    stem:'A counselor asks, "What evidence do you have that your boss actually thinks you\'re incompetent?" This is BEST identified as:',
    options:[
      {id:'a', text:'REBT — disputing irrational beliefs (A-B-C model)', isCorrect:false},
      {id:'b', text:'CBT — Socratic questioning to examine evidence for automatic thoughts', isCorrect:true},
      {id:'c', text:'MI — exploring the decisional balance', isCorrect:false},
      {id:'d', text:'Solution-focused — exception question about times when the boss was positive', isCorrect:false},
    ],
    rationale:"Examining evidence for and against a belief is Socratic questioning — a CBT technique. Distinguish: REBT disputes the irrationality of beliefs (the 'should/must'); CBT examines evidence for their accuracy. 'What evidence do you have?' = CBT/Beck, not REBT/Ellis."
  },
  {
    id:'ca25', topic:'Theory Identification',
    stem:'A counselor helps a client draw a three-generation family map showing relationships, cutoffs, and emotional distance. This technique is MOST associated with:',
    options:[
      {id:'a', text:'Structural family therapy (Minuchin) — mapping subsystems', isCorrect:false},
      {id:'b', text:'Bowenian family systems — genogram', isCorrect:true},
      {id:'c', text:'Strategic family therapy (Haley) — mapping interactional sequences', isCorrect:false},
      {id:'d', text:'Narrative therapy — mapping the influence of the problem', isCorrect:false},
    ],
    rationale:"Genogram = Bowenian (McGoldrick/Gerson). It maps three-plus generations, relationship quality (enmeshment, conflict, cutoff), and significant events. NCMHCE pairings to memorize: miracle question=SFBT, enactment=Structural, genogram=Bowenian, externalization=Narrative, prescribing symptom=Strategic."
  },

  // ---- MICROSKILLS ----
  {
    id:'ca26', topic:'Microskills',
    stem:'A client says, "I\'ve been feeling overwhelmed at work and I don\'t know how much longer I can keep this up." The BEST first counselor response is:',
    options:[
      {id:'a', text:'"Have you considered talking to your supervisor about workload?"', isCorrect:false},
      {id:'b', text:'"You\'re feeling overwhelmed and worried you\'ve reached your limit."', isCorrect:true},
      {id:'c', text:'"How long has this been going on?"', isCorrect:false},
      {id:'d', text:'"It sounds like your job is causing you significant stress."', isCorrect:false},
    ],
    rationale:"When a client expresses distress, the first scored response reflects feeling, not content. Option B reflects the feeling (overwhelmed, at my limit) accurately and communicates understanding. Option D is a paraphrase (content); Options A and C are influencing and closed questions — premature before listening is established."
  },
  {
    id:'ca27', topic:'Microskills',
    stem:'A paraphrase DIFFERS from a reflection of feeling in that a paraphrase:',
    options:[
      {id:'a', text:'Is longer and more detailed', isCorrect:false},
      {id:'b', text:'Restates the cognitive/factual content; reflection targets the emotional dimension', isCorrect:true},
      {id:'c', text:'Uses the client\'s exact words', isCorrect:false},
      {id:'d', text:'Requires a tentative stem ("It sounds like...")', isCorrect:false},
    ],
    rationale:"Paraphrase = cognitive/content ('You\'re saying the project has three deadlines this week'). Reflection = emotional ('You feel overwhelmed by those three deadlines'). The NCMHCE tests this distinction frequently — when the stem shows distress, reflection scores higher than paraphrase."
  },
  {
    id:'ca28', topic:'Microskills',
    stem:'Ivey\'s microskills hierarchy places "influencing skills" above "listening skills." This means:',
    options:[
      {id:'a', text:'Influencing skills are more important and should be used first', isCorrect:false},
      {id:'b', text:'Listening skills must be established before influencing skills can be effective', isCorrect:true},
      {id:'c', text:'Influencing skills are only used with resistant clients', isCorrect:false},
      {id:'d', text:'Higher-hierarchy skills replace lower-hierarchy skills as therapy progresses', isCorrect:false},
    ],
    rationale:"The hierarchy: attend → listen → influence. Lower skills are foundational — you cannot effectively challenge or interpret (influence) before the client feels heard (listening). The NCMHCE rewards the lower-hierarchy skill when the listening foundation is not yet laid."
  },
  {
    id:'ca29', topic:'Microskills',
    stem:'"Why did you stop taking your medication?" is considered a LESS effective question because:',
    options:[
      {id:'a', text:'It is a closed question requiring only a yes/no answer', isCorrect:false},
      {id:'b', text:'It implies judgment and prompts defensiveness and rationalization rather than genuine exploration', isCorrect:true},
      {id:'c', text:'It addresses medication, which is outside a counselor\'s scope', isCorrect:false},
      {id:'d', text:'It is a leading question that suggests the client was wrong to stop', isCorrect:false},
    ],
    rationale:"'Why' questions prompt the client to justify and defend rather than reflect and explore. They often carry an implied judgment ('why did you do that wrong thing?'). More effective alternatives: 'Tell me about what led up to stopping' or 'What was going on for you around that decision?'"
  },
  {
    id:'ca30', topic:'Microskills',
    stem:'A counselor says: "Right now, as you describe the argument with your partner, I notice I feel some tension in this conversation too — I wonder if that\'s part of what you\'re carrying." This is an example of:',
    options:[
      {id:'a', text:'Self-disclosure of personal history', isCorrect:false},
      {id:'b', text:'Countertransference acted out in session', isCorrect:false},
      {id:'c', text:'Immediacy — using the here-and-now of the therapeutic relationship as clinical data', isCorrect:true},
      {id:'d', text:'Advanced empathy — reflecting what the client has not yet said', isCorrect:false},
    ],
    rationale:"Immediacy (Egan) = discussing what is happening right now between counselor and client in the room. The counselor names their in-the-moment experience and offers it as a possible parallel to the client's interpersonal pattern. This is a higher-order skill used after listening is established."
  },
];
