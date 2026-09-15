// ca-quiz-data.js — Core Counseling Attributes Quiz Bank (30 items)
// Restructured to the current bank quality gate (utils/bankGate.js):
// options within [98,112] char band, key not longest, no absolutes,
// per-option rationale, blueprint domain per NBCC content outline.
// Recall-profile items — scored dichotomously; see utils/bankSchema.js.
const CA_QUIZ_ITEMS = [
  {
    "id": "ca01",
    "topic": "Rogers' Core Conditions",
    "domain": "core",
    "stem": "A client discloses she has been having an affair. The counselor says, \"Tell me more about what that experience has been like for you.\" This BEST demonstrates:",
    "rationale": "UPR is valuing the client's personhood regardless of behavior. Inviting exploration without implied judgment operationalizes UPR.",
    "options": [
      {
        "id": "a",
        "text": "Unconditional positive regard — nonjudgmental acceptance of the client regardless of behavior",
        "isCorrect": true,
        "rationale": "Inviting exploration without moral evaluation is the operational marker of UPR."
      },
      {
        "id": "b",
        "text": "Accurate empathy — the counselor is reflecting the emotional content of what she has just shared",
        "isCorrect": false,
        "rationale": "Empathy reflects felt experience; an open invitation is not a reflection."
      },
      {
        "id": "c",
        "text": "Congruence — the counselor is authentically expressing curiosity about the affair disclosure",
        "isCorrect": false,
        "rationale": "Congruence is inner-outer alignment; simple inquiry does not display it."
      },
      {
        "id": "d",
        "text": "Advanced empathy — the counselor is reflecting the implied shame and guilt behind her disclosure",
        "isCorrect": false,
        "rationale": "Advanced empathy names implicit affect; the response only invites her to speak."
      }
    ]
  },

  {
    "id": "ca02",
    "topic": "Rogers' Core Conditions",
    "domain": "core",
    "stem": "A counselor responds: \"You sound exhausted by all of this — like you've been carrying it alone for a long time.\" The client says, \"Exactly. That's exactly it.\" This exchange BEST illustrates:",
    "rationale": "Accurate empathy is felt tracking PLUS successful communication; the client's confirmation shows both landed.",
    "options": [
      {
        "id": "a",
        "text": "Advanced empathy — the counselor is reflecting a meaning the client has not yet put into words",
        "isCorrect": false,
        "rationale": "Advanced empathy names the unspoken; exhaustion had already been implied."
      },
      {
        "id": "b",
        "text": "Accurate empathic understanding successfully communicated to the client in a way that landed",
        "isCorrect": true,
        "rationale": "The client's 'Exactly' confirms empathy was tracked AND communicated."
      },
      {
        "id": "c",
        "text": "Unconditional positive regard — the counselor is signaling nonjudgmental acceptance of the client",
        "isCorrect": false,
        "rationale": "UPR is acceptance of personhood; the reflection tracks affect, not worth."
      },
      {
        "id": "d",
        "text": "Congruence — the counselor is aligning inner experience with outer expression in the response",
        "isCorrect": false,
        "rationale": "Congruence is genuineness; nothing here reveals the counselor's own experience."
      }
    ]
  },

  {
    "id": "ca03",
    "topic": "Rogers' Core Conditions",
    "domain": "core",
    "stem": "During a session, a counselor notices they feel genuinely bored and distracted. Acting on congruence, the MOST appropriate response is:",
    "rationale": "Congruence means inner experience, outward expression, and words align. Brief, relevant, returned to client.",
    "options": [
      {
        "id": "a",
        "text": "End the session early and reschedule the appointment for a time when the counselor is more focused",
        "isCorrect": false,
        "rationale": "Terminating avoids the transaction; congruence is about naming, not withdrawing."
      },
      {
        "id": "b",
        "text": "Ask the client to slow their pace so the counselor can follow the material more closely in session",
        "isCorrect": false,
        "rationale": "Locating the problem in the client masks the counselor's own experience."
      },
      {
        "id": "c",
        "text": "Disclose the experience when relevant: \"I notice my attention drifting; I want to stay with you here.\"",
        "isCorrect": true,
        "rationale": "Brief, relevant disclosure returned to the client's process operationalizes congruence."
      },
      {
        "id": "d",
        "text": "Continue the session without any disclosure because showing boredom would violate the UPR condition",
        "isCorrect": false,
        "rationale": "Congruence requires disclosure when therapeutically relevant, not suppression."
      }
    ]
  },

  {
    "id": "ca04",
    "topic": "Rogers' Core Conditions",
    "domain": "core",
    "stem": "Rogers argued that the three core conditions are \"necessary and sufficient\" for therapeutic change. This means:",
    "rationale": "The conditions are necessary (required) AND sufficient (nothing else needed) — Rogers' radical relational claim.",
    "options": [
      {
        "id": "a",
        "text": "Techniques are helpful additions but are secondary to the relational conditions that produce change",
        "isCorrect": false,
        "rationale": "This softens Rogers' claim; he held techniques were not required at all."
      },
      {
        "id": "b",
        "text": "Skilled counselors need the three conditions plus at least one evidence-based technique to work",
        "isCorrect": false,
        "rationale": "This reverses Rogers' claim by making a technique necessary."
      },
      {
        "id": "c",
        "text": "All three of the conditions must be present at the same time in every moment of every session",
        "isCorrect": false,
        "rationale": "Rogers required consistency in the relationship, not moment-by-moment perfection."
      },
      {
        "id": "d",
        "text": "No additional therapeutic techniques are required as long as all three conditions are present",
        "isCorrect": true,
        "rationale": "\"Sufficient\" is Rogers' claim that the conditions alone can produce change."
      }
    ]
  },

  {
    "id": "ca05",
    "topic": "Rogers' Core Conditions",
    "domain": "core",
    "stem": "A counselor says, \"I think you should reconsider leaving that relationship — you've worked hard on it.\" This response MOST directly violates:",
    "rationale": "UPR is violated when the counselor evaluates or directs the client's choices rather than accepting the person.",
    "options": [
      {
        "id": "a",
        "text": "Unconditional positive regard — the counselor is directing and evaluating the client's own choices",
        "isCorrect": true,
        "rationale": "Prescribing a choice conveys conditional acceptance based on the client's decision."
      },
      {
        "id": "b",
        "text": "The therapeutic frame — advice-giving is prohibited across nearly every counseling modality",
        "isCorrect": false,
        "rationale": "Directive input is used in many modalities; the Rogerian violation is UPR."
      },
      {
        "id": "c",
        "text": "Congruence — the counselor is not being genuine or authentic about their own inner state right now",
        "isCorrect": false,
        "rationale": "The response may be genuine; the flaw is evaluative direction, not falseness."
      },
      {
        "id": "d",
        "text": "Empathy — the counselor has not first reflected the feelings that the client had just expressed",
        "isCorrect": false,
        "rationale": "Failure to reflect is present but secondary; the primary violation is evaluative."
      }
    ]
  },

  {
    "id": "ca06",
    "topic": "Bordin's Working Alliance",
    "domain": "core",
    "stem": "A client says, \"I don't understand why we're doing all this breathing stuff — I came here because my marriage is falling apart.\" This represents a rupture in:",
    "rationale": "Task rupture: goal is intact (save the marriage) but the client cannot see how the method serves it.",
    "options": [
      {
        "id": "a",
        "text": "Bond and tasks equally — safety concerns and questions about methods are both being expressed",
        "isCorrect": false,
        "rationale": "The stem raises method only; treating both as equal misreads the rupture."
      },
      {
        "id": "b",
        "text": "Tasks — the client is questioning whether the current session methods connect to their own goals",
        "isCorrect": true,
        "rationale": "A task rupture is exactly this: shared goal, disputed means."
      },
      {
        "id": "c",
        "text": "Goals — the client and the counselor do not agree about what therapy is supposed to be for",
        "isCorrect": false,
        "rationale": "The client accepts the marriage as the goal; disagreement is with the method."
      },
      {
        "id": "d",
        "text": "Bond — the client does not feel emotionally safe with the counselor sitting across from them",
        "isCorrect": false,
        "rationale": "No safety concern is stated; the complaint targets methods, not the relationship."
      }
    ]
  },

  {
    "id": "ca07",
    "topic": "Bordin's Working Alliance",
    "domain": "core",
    "stem": "A client attends sessions but repeatedly says things like \"I guess if you think that's helpful\" and \"sure, whatever you say.\" This pattern MOST likely signals:",
    "rationale": "Passive compliance flags a goal rupture: the client is going along without endorsing the aim.",
    "options": [
      {
        "id": "a",
        "text": "A bond rupture — the client no longer feels emotionally safe with the counselor in session",
        "isCorrect": false,
        "rationale": "The client is still attending and speaking; bond signals differ (withdrawal)."
      },
      {
        "id": "b",
        "text": "A task rupture — the client is questioning the counselor's methods, not their overall aims",
        "isCorrect": false,
        "rationale": "Task ruptures voice method complaints; passive assent points to goals."
      },
      {
        "id": "c",
        "text": "A goal rupture — the client and the counselor are not sharing the same treatment objectives",
        "isCorrect": true,
        "rationale": "Compliance without buy-in is the classic goal-rupture presentation."
      },
      {
        "id": "d",
        "text": "Good therapeutic compliance — the client is genuinely engaged in the direction set by the counselor",
        "isCorrect": false,
        "rationale": "Passive assent is not engagement; it hides disagreement from the counselor."
      }
    ]
  },

  {
    "id": "ca08",
    "topic": "Bordin's Working Alliance",
    "domain": "core",
    "stem": "A client who was abused as a child says tearfully, \"I just don't think I can talk about what happened — it doesn't feel safe.\" The FIRST clinical priority is:",
    "rationale": "\"Doesn't feel safe\" is a bond signal. Bond is foundational — everything else waits for it.",
    "options": [
      {
        "id": "a",
        "text": "Refer the client to an outside trauma specialist who can provide the felt safety they are needing",
        "isCorrect": false,
        "rationale": "Referral abandons a workable rupture; bond can be repaired in-session."
      },
      {
        "id": "b",
        "text": "Introduce EMDR right away as a nonverbal alternative to discussing the trauma out loud in session",
        "isCorrect": false,
        "rationale": "Starting an exposure-based method before safety is established repeats the harm."
      },
      {
        "id": "c",
        "text": "Renegotiate the treatment plan tasks to include stabilization work ahead of trauma processing",
        "isCorrect": false,
        "rationale": "Right principle, wrong level: bond precedes both task and goal renegotiation."
      },
      {
        "id": "d",
        "text": "Address the bond component: create conditions of felt safety before any trauma processing occurs",
        "isCorrect": true,
        "rationale": "\"Doesn't feel safe\" names a bond issue; bond is foundational to trauma work."
      }
    ]
  },

  {
    "id": "ca09",
    "topic": "Bordin's Working Alliance",
    "domain": "core",
    "stem": "Research on the therapeutic alliance consistently shows that it is:",
    "rationale": "Alliance is the strongest common-factor predictor of outcome across modalities (Wampold, Lambert).",
    "options": [
      {
        "id": "a",
        "text": "The strongest common-factor predictor of treatment outcome across a wide range of modalities",
        "isCorrect": true,
        "rationale": "Wampold and Lambert converge on the alliance as the top common factor."
      },
      {
        "id": "b",
        "text": "Determined mostly by pre-existing client factors rather than by observable counselor behavior",
        "isCorrect": false,
        "rationale": "Counselor behavior contributes; the alliance is a two-person process."
      },
      {
        "id": "c",
        "text": "Important only in humanistic or person-centered approaches, not the more directive modalities",
        "isCorrect": false,
        "rationale": "Alliance effects are found in CBT, psychodynamic, and other modalities."
      },
      {
        "id": "d",
        "text": "Less predictive of client outcome than the specific evidence-based technique used in a modality",
        "isCorrect": false,
        "rationale": "Meta-analyses find the reverse: alliance predicts more variance than technique."
      }
    ]
  },

  {
    "id": "ca10",
    "topic": "Rupture & Repair",
    "domain": "core",
    "stem": "A client who usually engages openly arrives, gives one-word answers, avoids eye contact, and does not elaborate. The counselor's BEST response is:",
    "rationale": "Withdrawal ruptures need tentative metacommunication — name the shift, invite exploration.",
    "options": [
      {
        "id": "a",
        "text": "Confront the withdrawal by asking directly, \"What's wrong today? You seem completely different now.\"",
        "isCorrect": false,
        "rationale": "The demand for an answer intensifies withdrawal instead of inviting engagement."
      },
      {
        "id": "b",
        "text": "Tentatively name the shift: \"I notice you seem quieter than usual today — I want to check in.\"",
        "isCorrect": true,
        "rationale": "Naming the observation and offering warmth is the metacommunication repair move."
      },
      {
        "id": "c",
        "text": "Continue the session agenda as planned because the client may just be having a difficult day today",
        "isCorrect": false,
        "rationale": "Proceeding as if nothing changed leaves the withdrawal rupture unaddressed."
      },
      {
        "id": "d",
        "text": "Interpret the behavior as resistance and say, \"It seems like you're not ready to work today.\"",
        "isCorrect": false,
        "rationale": "Labeling withdrawal as resistance is blaming and hardens the rupture."
      }
    ]
  },

  {
    "id": "ca11",
    "topic": "Rupture & Repair",
    "domain": "core",
    "stem": "A client says directly, \"I feel like you're not really listening to me — you keep steering us back to CBT when I just want to be heard.\" This is BEST classified as:",
    "rationale": "Confrontation ruptures involve direct disagreement with or challenge to the counselor.",
    "options": [
      {
        "id": "a",
        "text": "Transference — the client is displacing frustration from another relationship onto the counselor",
        "isCorrect": false,
        "rationale": "A concrete complaint about a real behavior is not a transference reading."
      },
      {
        "id": "b",
        "text": "A termination signal that would require an explicit discussion of ending the counseling arrangement",
        "isCorrect": false,
        "rationale": "The client is engaged and asking for change, not signaling termination."
      },
      {
        "id": "c",
        "text": "A confrontation rupture — the client is directly challenging the counselor's approach in the session",
        "isCorrect": true,
        "rationale": "Direct challenge to the counselor is the definition of a confrontation rupture."
      },
      {
        "id": "d",
        "text": "A withdrawal rupture — the client is pulling back and disengaging from the session in front of you",
        "isCorrect": false,
        "rationale": "The client is actively confronting, not withdrawing."
      }
    ]
  },

  {
    "id": "ca12",
    "topic": "Rupture & Repair",
    "domain": "core",
    "stem": "Research on therapeutic rupture and repair (Safran & Muran) found that:",
    "rationale": "Repaired ruptures strengthen the alliance and improve outcomes (Safran & Muran).",
    "options": [
      {
        "id": "a",
        "text": "Effective repair mostly requires interpreting the rupture as transference from the past instead",
        "isCorrect": false,
        "rationale": "Metacommunication in the here-and-now, not transference talk, is the model."
      },
      {
        "id": "b",
        "text": "A single unrepaired rupture reliably predicts that the client will drop out of treatment shortly",
        "isCorrect": false,
        "rationale": "One rupture does not reliably cause dropout; repair rate matters more."
      },
      {
        "id": "c",
        "text": "Ruptures should be prevented at all costs so as to maintain a positive therapeutic climate over time",
        "isCorrect": false,
        "rationale": "Ruptures are inevitable; the outcome depends on repair, not prevention."
      },
      {
        "id": "d",
        "text": "Successfully repaired ruptures can strengthen the alliance and improve counseling outcomes overall",
        "isCorrect": true,
        "rationale": "Safran & Muran show repaired ruptures deepen alliance and improve outcome."
      }
    ]
  },

  {
    "id": "ca13",
    "topic": "Rupture & Repair",
    "domain": "core",
    "stem": "A client says, \"I felt hurt when you cut me off last session.\" The MOST effective repair response is:",
    "rationale": "Repair sequence: acknowledge, explore what happened for the client, stay with it before repairing.",
    "options": [
      {
        "id": "a",
        "text": "\"I appreciate you telling me. Can you say more about how that landed? I want to understand it.\"",
        "isCorrect": true,
        "rationale": "Acknowledge, invite exploration, and stay with it — the Safran & Muran move."
      },
      {
        "id": "b",
        "text": "\"That's not what happened — I was trying to redirect us to something more clinically productive.\"",
        "isCorrect": false,
        "rationale": "Correcting the client denies their experience and prevents repair."
      },
      {
        "id": "c",
        "text": "\"Let's put that aside so we can focus on what you actually came in to work on today in session.\"",
        "isCorrect": false,
        "rationale": "Deferring the rupture blocks metacommunication and models avoidance."
      },
      {
        "id": "d",
        "text": "\"I'm sorry, that was completely wrong of me. I'll be more mindful and I will make sure to fix it.\"",
        "isCorrect": false,
        "rationale": "Premature apology closes the exploration and prioritizes counselor comfort."
      }
    ]
  },

  {
    "id": "ca14",
    "topic": "Stages of Counseling",
    "domain": "counseling",
    "stem": "A new client arrives for their first session and immediately says, \"So what should I work on?\" The counselor's FIRST priority is:",
    "rationale": "Stage 1 (Egan / Ivey): rapport and shared story precede assessment, goals, and intervention.",
    "options": [
      {
        "id": "a",
        "text": "Start a formal assessment battery so the counselor can rule in or out major clinical diagnoses",
        "isCorrect": false,
        "rationale": "Structured assessment belongs to stage 2, after alliance is established."
      },
      {
        "id": "b",
        "text": "Establish rapport and collaboratively explore what brought them in and what they are hoping for",
        "isCorrect": true,
        "rationale": "Stage 1 is alliance and shared understanding before any goal-setting."
      },
      {
        "id": "c",
        "text": "Give the client several evidence-based options and encourage them to pick the one that fits best",
        "isCorrect": false,
        "rationale": "Choosing a modality before alliance and goals is a stage error."
      },
      {
        "id": "d",
        "text": "Provide psychoeducation about the counseling process and set homework for the second session",
        "isCorrect": false,
        "rationale": "Psychoeducation is fine but not the priority before the alliance is formed."
      }
    ]
  },

  {
    "id": "ca15",
    "topic": "Stages of Counseling",
    "domain": "counseling",
    "stem": "A client and counselor have completed a thorough assessment and share a working understanding of the problem. The NEXT stage is:",
    "rationale": "Model sequence: alliance/story -> goal setting -> intervention -> maintenance/termination.",
    "options": [
      {
        "id": "a",
        "text": "Terminate services because the client can now work on the problem independently outside sessions",
        "isCorrect": false,
        "rationale": "Termination follows goal attainment, not the completion of assessment."
      },
      {
        "id": "b",
        "text": "Continue exploration of the presenting problem to gather still more information from the client",
        "isCorrect": false,
        "rationale": "Further exploration delays goal-setting once shared understanding exists."
      },
      {
        "id": "c",
        "text": "Set concrete, measurable, collaborative goals for what the client wants to change in counseling",
        "isCorrect": true,
        "rationale": "After the shared story, stage 2 collaboratively sets change-focused goals."
      },
      {
        "id": "d",
        "text": "Move directly into confrontation of the client's defenses about the problem they have described",
        "isCorrect": false,
        "rationale": "Confrontation of defenses is not a standard stage of the counseling model."
      }
    ]
  },

  {
    "id": "ca16",
    "topic": "Stages of Counseling",
    "domain": "counseling",
    "stem": "A client says, \"I feel so much better — I don't know if I need to come back.\" The counselor's BEST response is:",
    "rationale": "Termination is a stage: explore the improvement, plan a stepped exit, include relapse prevention.",
    "options": [
      {
        "id": "a",
        "text": "Interpret the wish to stop as a rupture, avoidance, or resistance that requires deeper exploration",
        "isCorrect": false,
        "rationale": "Reading normal termination readiness as resistance pathologizes progress."
      },
      {
        "id": "b",
        "text": "Agree to terminate today and wish them well since improvement is the goal of the entire process",
        "isCorrect": false,
        "rationale": "Abrupt termination skips relapse planning and consolidation of gains."
      },
      {
        "id": "c",
        "text": "Warn the client that stopping now will cause a relapse and firmly recommend continuing sessions",
        "isCorrect": false,
        "rationale": "Alarmist warnings undermine autonomy and the alliance."
      },
      {
        "id": "d",
        "text": "Explore the improvement and collaboratively plan a stepped-down termination with relapse prevention",
        "isCorrect": true,
        "rationale": "Stage 4 termination is stepped, planned, and includes relapse prevention."
      }
    ]
  },

  {
    "id": "ca17",
    "topic": "Cultural Responsiveness",
    "domain": "core",
    "stem": "A client from a collectivist cultural background says, \"I can't decide about the job without talking to my family first.\" The BEST response is:",
    "rationale": "Cultural humility explores the client's frame without imposing an individualist standard.",
    "options": [
      {
        "id": "a",
        "text": "Explore how the family conversations fit the client's own decision-making process and identity",
        "isCorrect": true,
        "rationale": "Cultural humility is exploring the client's frame, not correcting it."
      },
      {
        "id": "b",
        "text": "Refer the client to a counselor from the same culture on the grounds that scope has been exceeded",
        "isCorrect": false,
        "rationale": "Reflexive referral is not required and can feel like abandonment."
      },
      {
        "id": "c",
        "text": "Encourage the client to prioritize their own individual autonomy over the family's preferences here",
        "isCorrect": false,
        "rationale": "Imposing individualism ignores culturally embedded decision-making."
      },
      {
        "id": "d",
        "text": "Interpret the deference to family as enmeshment and set a clearer boundary with them in session",
        "isCorrect": false,
        "rationale": "Labeling collectivism \"enmeshment\" is a Western pathologizing frame."
      }
    ]
  },

  {
    "id": "ca18",
    "topic": "Cultural Responsiveness",
    "domain": "core",
    "stem": "The MSJCC (Multicultural and Social Justice Counseling Competencies) emphasize which sequence?",
    "rationale": "MSJCC ordering: attitudes/beliefs -> knowledge -> skills -> action, across four domains.",
    "options": [
      {
        "id": "a",
        "text": "Complete cultural competence first, then skills, and finally social-justice advocacy work with clients",
        "isCorrect": false,
        "rationale": "MSJCC treats advocacy as concurrent, not a later stage after competence."
      },
      {
        "id": "b",
        "text": "Attitudes and beliefs first, then knowledge, then skills, then action — a developmental sequence",
        "isCorrect": true,
        "rationale": "The MSJCC domains build in this order across all counselor–client interactions."
      },
      {
        "id": "c",
        "text": "Techniques first, followed by knowledge of the client's culture, and only then counselor awareness",
        "isCorrect": false,
        "rationale": "This reverses the MSJCC ordering, which begins with awareness."
      },
      {
        "id": "d",
        "text": "Client demographics first, then interventions matched to the demographic profile, and then advocacy",
        "isCorrect": false,
        "rationale": "Demographics are not the entry point; counselor awareness is."
      }
    ]
  },

  {
    "id": "ca19",
    "topic": "Cultural Responsiveness",
    "domain": "core",
    "stem": "A White counselor notices they feel uncomfortable when a Black client discusses experiences of racism. The BEST first step is:",
    "rationale": "Counselor discomfort about race is worked in supervision — not offloaded to the client.",
    "options": [
      {
        "id": "a",
        "text": "Change the topic to prevent the discomfort from spilling into the therapeutic relationship over time",
        "isCorrect": false,
        "rationale": "Avoidance silences the client and reinforces the counselor's discomfort."
      },
      {
        "id": "b",
        "text": "Refer the client to a counselor of color to avoid causing further harm in the current relationship",
        "isCorrect": false,
        "rationale": "Reflexive referral offloads the counselor's work onto the client."
      },
      {
        "id": "c",
        "text": "Explore the discomfort in supervision or consultation without burdening the client with it in session",
        "isCorrect": true,
        "rationale": "Cultural humility requires the counselor's own work; the client is not the classroom."
      },
      {
        "id": "d",
        "text": "Disclose the discomfort in session to model transparency and openness with the client immediately",
        "isCorrect": false,
        "rationale": "Well-meant disclosure here centers the counselor's reaction over the client's."
      }
    ]
  },

  {
    "id": "ca20",
    "topic": "Theory Identification",
    "domain": "core",
    "stem": "A counselor asks a client to complete a thought record examining automatic thoughts, evidence for and against, and a balanced alternative view. This is:",
    "rationale": "Thought records = Beckian CBT: identify automatic thoughts, weigh evidence, generate a balanced view.",
    "options": [
      {
        "id": "a",
        "text": "Person-centered therapy — reflecting the client's felt experience without directive intervention here",
        "isCorrect": false,
        "rationale": "Person-centered work does not use structured cognitive worksheets."
      },
      {
        "id": "b",
        "text": "Psychodynamic therapy — interpretation of the underlying conflicts driving the client's current distress",
        "isCorrect": false,
        "rationale": "Thought records are Beckian CBT, not psychodynamic interpretation."
      },
      {
        "id": "c",
        "text": "Solution-focused therapy — building exceptions and scaling toward the preferred future outcomes",
        "isCorrect": false,
        "rationale": "SFBT uses exceptions and scales, not thought records."
      },
      {
        "id": "d",
        "text": "Cognitive-behavioral therapy — examining automatic thoughts, evidence, and balanced alternatives",
        "isCorrect": true,
        "rationale": "Thought records are the signature CBT technique for restructuring cognitions."
      }
    ]
  },

  {
    "id": "ca21",
    "topic": "Theory Identification",
    "domain": "core",
    "stem": "A counselor helps a client identify their family birth order, sibling constellation, and early recollections. This is:",
    "rationale": "Adler = lifestyle assessment, family constellation, birth order, early recollections.",
    "options": [
      {
        "id": "a",
        "text": "Adlerian (individual psychology) — using lifestyle assessment, family constellation, early recollections",
        "isCorrect": true,
        "rationale": "Adler's hallmark tools: birth order, constellation, and early recollections."
      },
      {
        "id": "b",
        "text": "Jungian analytical therapy — exploring the archetypes and the deeper collective unconscious material",
        "isCorrect": false,
        "rationale": "Jungian work centers archetypes and the collective unconscious, not birth order."
      },
      {
        "id": "c",
        "text": "Bowenian family systems therapy — genogram construction and analysis of multigenerational patterns",
        "isCorrect": false,
        "rationale": "Genograms and differentiation are Bowen; Adler owns the earlier tools listed."
      },
      {
        "id": "d",
        "text": "Object-relations therapy — the exploration of internalized representations of parents and caregivers",
        "isCorrect": false,
        "rationale": "Object relations focuses on internalized objects, not constellation data."
      }
    ]
  },

  {
    "id": "ca22",
    "topic": "Theory Identification",
    "domain": "core",
    "stem": "A counselor uses \"the miracle question\" and asks the client to scale progress from 1-10. This is:",
    "rationale": "de Shazer / Berg SFBT: miracle question, exceptions, scaling toward the preferred future.",
    "options": [
      {
        "id": "a",
        "text": "Reality therapy (choice theory) — addressing the client's five basic needs and current choices",
        "isCorrect": false,
        "rationale": "Reality therapy uses WDEP and choice theory, not miracle questions."
      },
      {
        "id": "b",
        "text": "Solution-focused brief therapy — using the miracle question and scaling questions to build progress",
        "isCorrect": true,
        "rationale": "Miracle question and scaling questions are the signature SFBT tools."
      },
      {
        "id": "c",
        "text": "Narrative therapy — externalizing the problem so it becomes something the client can act against in life",
        "isCorrect": false,
        "rationale": "Externalizing is White & Epston narrative; miracles/scales are SFBT."
      },
      {
        "id": "d",
        "text": "Motivational interviewing — evoking the client's own change talk about the target behavior over time",
        "isCorrect": false,
        "rationale": "MI evokes change talk with OARS; miracle/scaling are not MI signatures."
      }
    ]
  },

  {
    "id": "ca23",
    "topic": "Theory Identification",
    "domain": "core",
    "stem": "A counselor asks a client to accept their thoughts as thoughts (not facts) and commit to values-based action. This is:",
    "rationale": "ACT builds psychological flexibility: acceptance, defusion, present moment, values, committed action.",
    "options": [
      {
        "id": "a",
        "text": "Dialectical behavior therapy — balancing acceptance with change work through the DBT skill modules",
        "isCorrect": false,
        "rationale": "DBT is dialectical but not organized around psychological flexibility."
      },
      {
        "id": "b",
        "text": "Traditional cognitive therapy — disputing the content of the automatic thoughts and replacing them",
        "isCorrect": false,
        "rationale": "ACT changes relationship with thoughts; content-disputing is Beck / Ellis."
      },
      {
        "id": "c",
        "text": "Acceptance and commitment therapy — building psychological flexibility through defusion and values",
        "isCorrect": true,
        "rationale": "Defusion + values-guided action is Hayes' ACT model of flexibility."
      },
      {
        "id": "d",
        "text": "Reality therapy — helping the client take responsibility for their choices and current commitments",
        "isCorrect": false,
        "rationale": "Reality therapy uses WDEP; ACT uses defusion and values."
      }
    ]
  },

  {
    "id": "ca24",
    "topic": "Theory Identification",
    "domain": "core",
    "stem": "A counselor confronts a client's \"musts\" and \"shoulds\" and asks them to dispute these rigid demands actively. This is:",
    "rationale": "REBT (Ellis): identify absolute demands (must, should, ought) and dispute them directly.",
    "options": [
      {
        "id": "a",
        "text": "Beckian cognitive therapy — a Socratic examination of the evidence for automatic thoughts held today",
        "isCorrect": false,
        "rationale": "Beck uses Socratic inquiry; Ellis directly disputes \"musts\" and \"shoulds.\""
      },
      {
        "id": "b",
        "text": "Motivational interviewing — evoking the client's own reasons for change through open-ended reflection",
        "isCorrect": false,
        "rationale": "MI is nondirective evocation; direct disputation is not MI-consistent."
      },
      {
        "id": "c",
        "text": "Person-centered therapy — providing accurate reflections without any directive challenge in session",
        "isCorrect": false,
        "rationale": "Person-centered work does not confront or dispute the client's beliefs."
      },
      {
        "id": "d",
        "text": "Rational emotive behavior therapy — disputing the client's irrational beliefs, demands, and \"musts\"",
        "isCorrect": true,
        "rationale": "Ellis' REBT names and disputes musturbation and rigid demands."
      }
    ]
  },

  {
    "id": "ca25",
    "topic": "Theory Identification",
    "domain": "core",
    "stem": "A counselor helps a client construct a preferred alternative story by asking about unique outcomes and exceptions. This is:",
    "rationale": "Narrative therapy (White & Epston): externalize the problem, find unique outcomes, thicken the alternative story.",
    "options": [
      {
        "id": "a",
        "text": "Narrative therapy — externalizing the problem and identifying unique outcomes to re-author the story",
        "isCorrect": true,
        "rationale": "White & Epston: externalize, find unique outcomes, thicken a preferred story."
      },
      {
        "id": "b",
        "text": "Existential therapy — addressing the givens of existence such as freedom, isolation, and mortality",
        "isCorrect": false,
        "rationale": "Existential work targets the givens, not story re-authoring."
      },
      {
        "id": "c",
        "text": "Solution-focused brief therapy — scaling and exception questions to build small changes over sessions",
        "isCorrect": false,
        "rationale": "SFBT uses exceptions too, but narrative owns \"unique outcomes\" and re-storying."
      },
      {
        "id": "d",
        "text": "Adlerian therapy — exploring the client's lifestyle patterns and their subjective view of the past",
        "isCorrect": false,
        "rationale": "Adler uses lifestyle, not unique outcomes and re-storying."
      }
    ]
  },

  {
    "id": "ca26",
    "topic": "Microskills",
    "domain": "counseling",
    "stem": "A client says, \"I don't know why I even bother trying anymore.\" The counselor responds, \"You sound worn down.\" This is:",
    "rationale": "Reflection of feeling names the emotion; paraphrase mirrors content; interpretation adds new meaning.",
    "options": [
      {
        "id": "a",
        "text": "An interpretation — the counselor is offering a deeper meaning that the client has not yet articulated",
        "isCorrect": false,
        "rationale": "\"Worn down\" mirrors what was implied; it does not add a new meaning."
      },
      {
        "id": "b",
        "text": "A reflection of feeling — the counselor is naming the emotional experience behind what the client said",
        "isCorrect": true,
        "rationale": "Naming the client's emotion IS a reflection of feeling."
      },
      {
        "id": "c",
        "text": "A summary — the counselor is pulling together the major themes covered so far in the session material",
        "isCorrect": false,
        "rationale": "A summary integrates several statements; this reflects a single feeling."
      },
      {
        "id": "d",
        "text": "A paraphrase — the counselor is restating the informational content of what the client just described",
        "isCorrect": false,
        "rationale": "A paraphrase mirrors the content, not the underlying emotion."
      }
    ]
  },

  {
    "id": "ca27",
    "topic": "Microskills",
    "domain": "counseling",
    "stem": "A client says, \"My boss said my work isn't up to standard.\" The counselor: \"Your boss criticized your work.\" This is:",
    "rationale": "Paraphrase = restating factual content; reflection of feeling = naming affect.",
    "options": [
      {
        "id": "a",
        "text": "Confrontation — the counselor is pointing out an inconsistency in the client's described experience",
        "isCorrect": false,
        "rationale": "No discrepancy is pointed out; this is a straight content mirror."
      },
      {
        "id": "b",
        "text": "Reflection of feeling — the counselor is naming the underlying emotional experience of the client",
        "isCorrect": false,
        "rationale": "No feeling is named; only the content is restated."
      },
      {
        "id": "c",
        "text": "Paraphrase — the counselor is restating the informational content of what the client just described",
        "isCorrect": true,
        "rationale": "Restating the factual content in the counselor's own words is a paraphrase."
      },
      {
        "id": "d",
        "text": "Summary — the counselor is pulling together the major themes covered so far in the client's session",
        "isCorrect": false,
        "rationale": "A summary integrates multiple statements, not one."
      }
    ]
  },

  {
    "id": "ca28",
    "topic": "Microskills",
    "domain": "counseling",
    "stem": "A client says, \"I love my job, but I dread going to work every morning.\" The counselor: \"You say you love it, and you dread it.\" This is:",
    "rationale": "Confrontation (Ivey) names a discrepancy without judgment: \"on one hand X, on the other Y.\"",
    "options": [
      {
        "id": "a",
        "text": "Reflection of feeling — the counselor is naming the emotional experience behind what the client said",
        "isCorrect": false,
        "rationale": "No feeling label is used; the counselor highlighted a discrepancy."
      },
      {
        "id": "b",
        "text": "Paraphrase — the counselor is restating the informational content of what the client just described",
        "isCorrect": false,
        "rationale": "The counselor pointed out contradictory statements, not merely restated content."
      },
      {
        "id": "c",
        "text": "Interpretation — the counselor is offering a deeper explanation of the meaning of the discrepancy",
        "isCorrect": false,
        "rationale": "The counselor named the discrepancy without offering a new explanatory frame."
      },
      {
        "id": "d",
        "text": "Confrontation — the counselor is naming a discrepancy or mixed message in the client's statements",
        "isCorrect": true,
        "rationale": "Naming a \"you say X and Y\" contradiction is Ivey-style confrontation."
      }
    ]
  },

  {
    "id": "ca29",
    "topic": "Microskills",
    "domain": "counseling",
    "stem": "A client speaks for 10 minutes about a difficult week. The counselor pauses and offers a brief summary of the themes. This BEST reflects:",
    "rationale": "Summaries integrate major themes across a stretch of session content, orienting both parties.",
    "options": [
      {
        "id": "a",
        "text": "A summary that integrates the major themes the client raised across the entire ten-minute segment",
        "isCorrect": true,
        "rationale": "Integrating several statements into themes is a summary."
      },
      {
        "id": "b",
        "text": "A reflection of feeling that names the primary emotion running through the client's difficult week",
        "isCorrect": false,
        "rationale": "Feeling reflections name one affect; a summary integrates themes."
      },
      {
        "id": "c",
        "text": "Immediacy — the counselor is naming what is happening between them in the here-and-now interaction",
        "isCorrect": false,
        "rationale": "Immediacy speaks to the counselor–client interaction, not week themes."
      },
      {
        "id": "d",
        "text": "An interpretation that offers a deeper unconscious meaning that the client has not yet articulated",
        "isCorrect": false,
        "rationale": "A theme summary is not an interpretation of unconscious material."
      }
    ]
  },

  {
    "id": "ca30",
    "topic": "Microskills",
    "domain": "counseling",
    "stem": "A counselor says, \"I notice we've been going back and forth about your job, but you keep pulling us into work when I ask about home.\" This is:",
    "rationale": "Immediacy speaks to the here-and-now counselor–client relationship in the session.",
    "options": [
      {
        "id": "a",
        "text": "A paraphrase — the counselor is restating the informational content of what the client just described",
        "isCorrect": false,
        "rationale": "A paraphrase mirrors content; immediacy names the process."
      },
      {
        "id": "b",
        "text": "Immediacy — the counselor is naming what is happening between them in the here-and-now interaction",
        "isCorrect": true,
        "rationale": "Naming what is happening between counselor and client right now is immediacy."
      },
      {
        "id": "c",
        "text": "A summary — the counselor is integrating major themes discussed across the previous session material",
        "isCorrect": false,
        "rationale": "A summary integrates themes; this names an in-session pattern."
      },
      {
        "id": "d",
        "text": "Interpretation — the counselor is offering a deeper meaning of the pattern in the client's life history",
        "isCorrect": false,
        "rationale": "Interpretation adds new meaning; immediacy stays with the observable process."
      }
    ]
  },
];
