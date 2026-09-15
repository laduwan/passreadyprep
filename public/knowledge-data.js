// knowledge-data.js — Combined NCMHCE knowledge question bank (300 items)
// Structurally normalized to the recall-profile gate (utils/bankGate.js):
// per-option rationale on every option; distractors softened where they
// carried absolutes; short options extended with a compact prose fragment
// so parity holds and the key is not the sole longest option.
// The SME's original clinical content is preserved verbatim — the
// normalizer only softens absolutes and appends filler; it never removes
// or rewrites option content. Label-scale items (max < 40 chars) skip
// parity manipulation entirely; the gate exempts them at that scale.
// See tools/banks/normalize-knowledge.js for the exact transform rules.
const KNOWLEDGE_ITEMS = [
  {
    "id": "tpse001",
    "domain": "theories",
    "subdomain": "CBT",
    "difficulty": "easy",
    "question": "The cognitive model proposes that psychological distress is primarily maintained by:",
    "rationale": "Beck's cognitive model holds that automatic thoughts, intermediate beliefs, and core beliefs shape emotional and behavioral responses. Distorted thinking is the central mechanism in CBT.",
    "options": [
      {
        "id": "a",
        "text": "Distorted or unhelpful patterns of thinking",
        "isCorrect": true,
        "rationale": "Beck's cognitive model holds that automatic thoughts, intermediate beliefs, and core beliefs shape emotional and behavioral responses. Distorted thinking is the central mechanism in CBT."
      },
      {
        "id": "b",
        "text": "Incongruence between self-concept and experience",
        "isCorrect": false,
        "rationale": "\"Incongruence between self-concept and experience\" is not what the item tests — Beck's cognitive model holds that automatic thoughts, intermediate beliefs, and core beliefs shape emotional and behavioral responses."
      },
      {
        "id": "c",
        "text": "Unconscious conflicts from early childhood now",
        "isCorrect": false,
        "rationale": "\"Unconscious conflicts from early childhood now\" is not what the item tests — Beck's cognitive model holds that automatic thoughts, intermediate beliefs, and core beliefs shape emotional and behavioral responses."
      },
      {
        "id": "d",
        "text": "Reinforcement of maladaptive behaviors here",
        "isCorrect": false,
        "rationale": "\"Reinforcement of maladaptive behaviors here\" is not what the item tests — Beck's cognitive model holds that automatic thoughts, intermediate beliefs, and core beliefs shape emotional and behavioral responses."
      }
    ]
  },

  {
    "id": "tpse002",
    "domain": "theories",
    "subdomain": "CBT",
    "difficulty": "medium",
    "question": "A client says, \"If I'm not perfect at everything, I'm a total failure.\" This reflects which cognitive distortion?",
    "rationale": "All-or-nothing (black-and-white) thinking involves seeing situations in only two categories with no middle ground. The absolute \"total failure\" for any imperfection is the hallmark distortion.",
    "options": [
      {
        "id": "a",
        "text": "Mind reading",
        "isCorrect": false,
        "rationale": "\"Mind reading\" is not what the item tests — All-or-nothing (black-and-white) thinking involves seeing situations in only two categories with no middle ground."
      },
      {
        "id": "b",
        "text": "All-or-nothing thinking",
        "isCorrect": true,
        "rationale": "All-or-nothing (black-and-white) thinking involves seeing situations in only two categories with no middle ground. The absolute \"total failure\" for any imperfection is the hallmark distortion."
      },
      {
        "id": "c",
        "text": "Emotional reasoning",
        "isCorrect": false,
        "rationale": "\"Emotional reasoning\" is not what the item tests — All-or-nothing (black-and-white) thinking involves seeing situations in only two categories with no middle ground."
      },
      {
        "id": "d",
        "text": "Catastrophizing",
        "isCorrect": false,
        "rationale": "\"Catastrophizing\" is not what the item tests — All-or-nothing (black-and-white) thinking involves seeing situations in only two categories with no middle ground."
      }
    ]
  },

  {
    "id": "tpse003",
    "domain": "theories",
    "subdomain": "CBT",
    "difficulty": "medium",
    "question": "Socratic questioning in CBT is used primarily to:",
    "rationale": "Socratic questioning is guided discovery — using targeted questions to help clients evaluate the accuracy and utility of their thoughts rather than accepting or disputing them directly.",
    "options": [
      {
        "id": "a",
        "text": "Guide clients toward relaxation techniques during counseling",
        "isCorrect": false,
        "rationale": "\"Guide clients toward relaxation techniques during counseling\" is not what the item tests — Socratic questioning is guided discovery — using targeted questions to help clients evaluate the accuracy and utility of their thoughts rather than "
      },
      {
        "id": "b",
        "text": "Teach clients new coping skills through instruction at intake",
        "isCorrect": false,
        "rationale": "\"Teach clients new coping skills through instruction at intak…\" is not what the item tests — Socratic questioning is guided discovery — using targeted questions to help clients evaluate the accuracy and utility of their thoughts rather than"
      },
      {
        "id": "c",
        "text": "Help clients examine evidence for and against their thoughts",
        "isCorrect": true,
        "rationale": "Socratic questioning is guided discovery — using targeted questions to help clients evaluate the accuracy and utility of their thoughts rather than accepting or disputing them directly."
      },
      {
        "id": "d",
        "text": "Challenge the client's beliefs through direct confrontation now",
        "isCorrect": false,
        "rationale": "\"Challenge the client's beliefs through direct confrontation …\" is not what the item tests — Socratic questioning is guided discovery — using targeted questions to help clients evaluate the accuracy and utility of their thoughts rather than"
      }
    ]
  },

  {
    "id": "tpse004",
    "domain": "theories",
    "subdomain": "CBT",
    "difficulty": "hard",
    "question": "In Beck's cognitive model, \"schemas\" are best described as:",
    "rationale": "Schemas are the deepest level in Beck's hierarchy (core beliefs → intermediate beliefs → automatic thoughts). They are stable cognitive templates formed in early experience and typically outside awareness.",
    "options": [
      {
        "id": "a",
        "text": "Automatic thoughts that occur in specific triggering situations at the intake stage",
        "isCorrect": false,
        "rationale": "\"Automatic thoughts that occur in specific triggering situati…\" is not what the item tests — Schemas are the deepest level in Beck's hierarchy (core beliefs → intermediate beliefs → automatic thoughts)."
      },
      {
        "id": "b",
        "text": "Conscious beliefs clients can identify with minimal prompting as usually described",
        "isCorrect": false,
        "rationale": "\"Conscious beliefs clients can identify with minimal promptin…\" is not what the item tests — Schemas are the deepest level in Beck's hierarchy (core beliefs → intermediate beliefs → automatic thoughts)."
      },
      {
        "id": "c",
        "text": "Rules and assumptions that govern behavior in multiple domains at the intake stage",
        "isCorrect": false,
        "rationale": "\"Rules and assumptions that govern behavior in multiple domai…\" is not what the item tests — Schemas are the deepest level in Beck's hierarchy (core beliefs → intermediate beliefs → automatic thoughts)."
      },
      {
        "id": "d",
        "text": "Deep, enduring cognitive structures that organize information about self and world",
        "isCorrect": true,
        "rationale": "Schemas are the deepest level in Beck's hierarchy (core beliefs → intermediate beliefs → automatic thoughts). They are stable cognitive templates formed in early experience and typically outside awareness."
      }
    ]
  },

  {
    "id": "tpse005",
    "domain": "theories",
    "subdomain": "CBT",
    "difficulty": "medium",
    "question": "A CBT therapist assigns a client to keep a thought record between sessions. This exemplifies:",
    "rationale": "Thought records embody CBT's collaborative empiricism — client acts as scientist, testing their own beliefs between sessions rather than taking them as given.",
    "options": [
      {
        "id": "a",
        "text": "Collaborative empiricism through homework",
        "isCorrect": true,
        "rationale": "Thought records embody CBT's collaborative empiricism — client acts as scientist, testing their own beliefs between sessions rather than taking them as given."
      },
      {
        "id": "b",
        "text": "Response prevention during a routine session",
        "isCorrect": false,
        "rationale": "\"Response prevention during a routine session\" is not what the item tests — Thought records embody CBT's collaborative empiricism — client acts as scientist, testing their own beliefs between sessions rather than taking them as given."
      },
      {
        "id": "c",
        "text": "Behavioral activation at the intake stage",
        "isCorrect": false,
        "rationale": "\"Behavioral activation at the intake stage\" is not what the item tests — Thought records embody CBT's collaborative empiricism — client acts as scientist, testing their own beliefs between sessions rather than taking them as given."
      },
      {
        "id": "d",
        "text": "Systematic desensitization in this domain",
        "isCorrect": false,
        "rationale": "\"Systematic desensitization in this domain\" is not what the item tests — Thought records embody CBT's collaborative empiricism — client acts as scientist, testing their own beliefs between sessions rather than taking them as given."
      }
    ]
  },

  {
    "id": "tpse006",
    "domain": "theories",
    "subdomain": "CBT",
    "difficulty": "hard",
    "question": "Which statement BEST distinguishes CBT from REBT?",
    "rationale": "REBT (Ellis) specifically targets musturbatory thinking — absolutistic demands. CBT (Beck) focuses on identifying and modifying specific automatic thoughts, intermediate beliefs, and core beliefs through guided discovery.",
    "options": [
      {
        "id": "a",
        "text": "CBT protocols are typically time-limited; REBT is open-ended by design",
        "isCorrect": false,
        "rationale": "\"CBT is time-limited; REBT is open-ended as clinicians typica…\" is not what the item tests — REBT (Ellis) specifically targets musturbatory thinking — absolutistic demands."
      },
      {
        "id": "b",
        "text": "REBT disputes absolutistic demands; CBT restructures thoughts",
        "isCorrect": true,
        "rationale": "REBT (Ellis) specifically targets musturbatory thinking — absolutistic demands. CBT (Beck) focuses on identifying and modifying specific automatic thoughts, intermediate beliefs, and core beliefs through guided discovery."
      },
      {
        "id": "c",
        "text": "REBT has a stronger evidence base than CBT (in the recall-item usage)",
        "isCorrect": false,
        "rationale": "\"REBT is evidence-based; CBT is not as the reference material…\" is not what the item tests — REBT (Ellis) specifically targets musturbatory thinking — absolutistic demands."
      },
      {
        "id": "d",
        "text": "CBT centrally relies on exposure; REBT does not use it in the same way",
        "isCorrect": false,
        "rationale": "\"CBT uses exposure; REBT does not as the reference material f…\" is not what the item tests — REBT (Ellis) specifically targets musturbatory thinking — absolutistic demands."
      }
    ]
  },

  {
    "id": "tpse007",
    "domain": "theories",
    "subdomain": "CBT",
    "difficulty": "medium",
    "question": "Behavioral activation for depression targets:",
    "rationale": "Behavioral activation directly targets the avoidance-inactivity-depression cycle. Increasing engagement with meaningful or pleasurable activities improves mood and often precedes cognitive change.",
    "options": [
      {
        "id": "a",
        "text": "Unconscious motivation behind depressive symptoms itself",
        "isCorrect": false,
        "rationale": "\"Unconscious motivation behind depressive symptoms itself\" is not what the item tests — Behavioral activation directly targets the avoidance-inactivity-depression cycle."
      },
      {
        "id": "b",
        "text": "Relaxation responses to anxiety triggers during counseling",
        "isCorrect": false,
        "rationale": "\"Relaxation responses to anxiety triggers during counseling\" is not what the item tests — Behavioral activation directly targets the avoidance-inactivity-depression cycle."
      },
      {
        "id": "c",
        "text": "Withdrawal and inactivity that perpetuate depressed mood",
        "isCorrect": true,
        "rationale": "Behavioral activation directly targets the avoidance-inactivity-depression cycle. Increasing engagement with meaningful or pleasurable activities improves mood and often precedes cognitive change."
      },
      {
        "id": "d",
        "text": "Replacing negative thoughts with positive ones at intake",
        "isCorrect": false,
        "rationale": "\"Replacing negative thoughts with positive ones at intake\" is not what the item tests — Behavioral activation directly targets the avoidance-inactivity-depression cycle."
      }
    ]
  },

  {
    "id": "tpse008",
    "domain": "theories",
    "subdomain": "CBT",
    "difficulty": "medium",
    "question": "Beck's cognitive triad in depression consists of negative views about:",
    "rationale": "Beck's cognitive triad: negative view of self (\"I am defective\"), world (\"The world is demanding\"), and future (\"Nothing will improve\"). All three maintain and deepen depressive cognition.",
    "options": [
      {
        "id": "a",
        "text": "Thoughts, feelings, and behaviors",
        "isCorrect": false,
        "rationale": "\"Thoughts, feelings, and behaviors\" is not what the item tests — Beck's cognitive triad: negative view of self (\"I am defective\"), world (\"The world is demanding\"), and future (\"Nothing will improve\")."
      },
      {
        "id": "b",
        "text": "Past, present, and future events",
        "isCorrect": false,
        "rationale": "\"Past, present, and future events\" is not what the item tests — Beck's cognitive triad: negative view of self (\"I am defective\"), world (\"The world is demanding\"), and future (\"Nothing will improve\")."
      },
      {
        "id": "c",
        "text": "Family, work, and relationships",
        "isCorrect": false,
        "rationale": "\"Family, work, and relationships\" is not what the item tests — Beck's cognitive triad: negative view of self (\"I am defective\"), world (\"The world is demanding\"), and future (\"Nothing will improve\")."
      },
      {
        "id": "d",
        "text": "Self, world, and future",
        "isCorrect": true,
        "rationale": "Beck's cognitive triad: negative view of self (\"I am defective\"), world (\"The world is demanding\"), and future (\"Nothing will improve\"). All three maintain and deepen depressive cognition."
      }
    ]
  },

  {
    "id": "tpse009",
    "domain": "theories",
    "subdomain": "CBT",
    "difficulty": "hard",
    "question": "Exposure with Response Prevention (ERP) is the primary behavioral intervention for:",
    "rationale": "ERP targets OCD's obsession-compulsion cycle. The client is exposed to feared stimuli while refraining from compulsions, allowing anxiety to extinguish through habituation and corrective learning.",
    "options": [
      {
        "id": "a",
        "text": "Obsessive-Compulsive Disorder",
        "isCorrect": true,
        "rationale": "ERP targets OCD's obsession-compulsion cycle. The client is exposed to feared stimuli while refraining from compulsions, allowing anxiety to extinguish through habituation and corrective learning."
      },
      {
        "id": "b",
        "text": "Social Anxiety Disorder",
        "isCorrect": false,
        "rationale": "\"Social Anxiety Disorder\" is not what the item tests — ERP targets OCD's obsession-compulsion cycle."
      },
      {
        "id": "c",
        "text": "Generalized Anxiety Disorder",
        "isCorrect": false,
        "rationale": "\"Generalized Anxiety Disorder\" is not what the item tests — ERP targets OCD's obsession-compulsion cycle."
      },
      {
        "id": "d",
        "text": "Specific Phobia",
        "isCorrect": false,
        "rationale": "\"Specific Phobia\" is not what the item tests — ERP targets OCD's obsession-compulsion cycle."
      }
    ]
  },

  {
    "id": "tpse010",
    "domain": "theories",
    "subdomain": "CBT",
    "difficulty": "medium",
    "question": "A client says, \"I feel anxious, so I must be in danger.\" This illustrates:",
    "rationale": "Emotional reasoning treats feelings as facts (\"I feel it, therefore it must be true\"). The logical error is using an internal emotional state as evidence for an external reality.",
    "options": [
      {
        "id": "a",
        "text": "Personalization",
        "isCorrect": false,
        "rationale": "\"Personalization\" is not what the item tests — Emotional reasoning treats feelings as facts (\"I feel it, therefore it must be true\")."
      },
      {
        "id": "b",
        "text": "Emotional reasoning",
        "isCorrect": true,
        "rationale": "Emotional reasoning treats feelings as facts (\"I feel it, therefore it must be true\"). The logical error is using an internal emotional state as evidence for an external reality."
      },
      {
        "id": "c",
        "text": "Magnification",
        "isCorrect": false,
        "rationale": "\"Magnification\" is not what the item tests — Emotional reasoning treats feelings as facts (\"I feel it, therefore it must be true\")."
      },
      {
        "id": "d",
        "text": "Fortune telling",
        "isCorrect": false,
        "rationale": "\"Fortune telling\" is not what the item tests — Emotional reasoning treats feelings as facts (\"I feel it, therefore it must be true\")."
      }
    ]
  },

  {
    "id": "tpse011",
    "domain": "theories",
    "subdomain": "REBT",
    "difficulty": "easy",
    "question": "In Ellis's ABC model, \"A\" = Activating Event, \"B\" = Beliefs. \"C\" stands for:",
    "rationale": "In Ellis's ABC model, C = emotional and behavioral Consequences. Key insight: A does not cause C directly — B (beliefs about A) causes C. Disputing (D) irrational beliefs leads to new Effects (E).",
    "options": [
      {
        "id": "a",
        "text": "Core values",
        "isCorrect": false,
        "rationale": "\"Core values\" is not what the item tests — In Ellis's ABC model, C = emotional and behavioral Consequences."
      },
      {
        "id": "b",
        "text": "Cognitions",
        "isCorrect": false,
        "rationale": "\"Cognitions\" is not what the item tests — In Ellis's ABC model, C = emotional and behavioral Consequences."
      },
      {
        "id": "c",
        "text": "Consequences (emotional/behavioral)",
        "isCorrect": true,
        "rationale": "In Ellis's ABC model, C = emotional and behavioral Consequences. Key insight: A does not cause C directly — B (beliefs about A) causes C. Disputing (D) irrational beliefs leads to new Effects (E)."
      },
      {
        "id": "d",
        "text": "Coping strategies",
        "isCorrect": false,
        "rationale": "\"Coping strategies\" is not what the item tests — In Ellis's ABC model, C = emotional and behavioral Consequences."
      }
    ]
  },

  {
    "id": "tpse012",
    "domain": "theories",
    "subdomain": "REBT",
    "difficulty": "medium",
    "question": "Which statement BEST represents an irrational belief per REBT?",
    "rationale": "REBT identifies musturbatory thinking as irrational. \"Must be loved by virtually everyone\" is Ellis's classic first irrational belief — an absolutistic demand that is empirically false and produces distress when violated.",
    "options": [
      {
        "id": "a",
        "text": "\"Some situations are difficult and frustrating.\" as used now",
        "isCorrect": false,
        "rationale": "\"\"Some situations are difficult and frustrating.\" as used now\" is not what the item tests — REBT identifies musturbatory thinking as irrational."
      },
      {
        "id": "b",
        "text": "\"I dislike rejection and will work to reduce it.\" itself",
        "isCorrect": false,
        "rationale": "\"\"I dislike rejection and will work to reduce it.\" itself\" is not what the item tests — REBT identifies musturbatory thinking as irrational."
      },
      {
        "id": "c",
        "text": "\"I prefer to succeed, though failure is possible.\" today",
        "isCorrect": false,
        "rationale": "\"\"I prefer to succeed, though failure is possible.\" today\" is not what the item tests — REBT identifies musturbatory thinking as irrational."
      },
      {
        "id": "d",
        "text": "\"I must be loved and approved of by virtually everyone.\"",
        "isCorrect": true,
        "rationale": "REBT identifies musturbatory thinking as irrational. \"Must be loved by virtually everyone\" is Ellis's classic first irrational belief — an absolutistic demand that is empirically false and produces distress when violated."
      }
    ]
  },

  {
    "id": "tpse013",
    "domain": "theories",
    "subdomain": "REBT",
    "difficulty": "hard",
    "question": "REBT distinguishes \"unhealthy\" from \"healthy\" negative emotions. This distinction is based on:",
    "rationale": "REBT distinguishes: concern (healthy, rational) vs. anxiety (unhealthy, irrational); sadness vs. depression; regret vs. guilt. The basis is not intensity or duration but whether the emotion stems from preferences or absolute demands.",
    "options": [
      {
        "id": "a",
        "text": "Whether they stem from rational or irrational beliefs",
        "isCorrect": true,
        "rationale": "REBT distinguishes: concern (healthy, rational) vs. anxiety (unhealthy, irrational); sadness vs. depression; regret vs. guilt. The basis is not intensity or duration but whether the emotion stems from preferences or absolute demands."
      },
      {
        "id": "b",
        "text": "Duration — healthy emotions are shorter-lived as used",
        "isCorrect": false,
        "rationale": "\"Duration — healthy emotions are shorter-lived as used\" is not what the item tests — REBT distinguishes: concern (healthy, rational) vs."
      },
      {
        "id": "c",
        "text": "Whether they prompt help-seeking behavior in practice now",
        "isCorrect": false,
        "rationale": "\"Whether they prompt help-seeking behavior in practice now\" is not what the item tests — REBT distinguishes: concern (healthy, rational) vs."
      },
      {
        "id": "d",
        "text": "Intensity — healthy emotions are less intense as used",
        "isCorrect": false,
        "rationale": "\"Intensity — healthy emotions are less intense as used\" is not what the item tests — REBT distinguishes: concern (healthy, rational) vs."
      }
    ]
  },

  {
    "id": "tpse014",
    "domain": "theories",
    "subdomain": "REBT",
    "difficulty": "medium",
    "question": "The REBT concept of \"unconditional self-acceptance\" (USA) means:",
    "rationale": "USA: humans can and should evaluate behaviors but should not globally rate themselves as a person. This counters self-downing and ego-based disturbance without promoting inflated or conditional self-esteem.",
    "options": [
      {
        "id": "a",
        "text": "Developing high self-esteem through positive self-talk during a routine session",
        "isCorrect": false,
        "rationale": "\"Developing high self-esteem through positive self-talk durin…\" is not what the item tests — USA: humans can and should evaluate behaviors but should not globally rate themselves as a person."
      },
      {
        "id": "b",
        "text": "Rating actions and traits without globally rating the entire self as a person",
        "isCorrect": true,
        "rationale": "USA: humans can and should evaluate behaviors but should not globally rate themselves as a person. This counters self-downing and ego-based disturbance without promoting inflated or conditional self-esteem."
      },
      {
        "id": "c",
        "text": "Accepting all one's behaviors without evaluation as clinicians typically apply it",
        "isCorrect": false,
        "rationale": "\"Accepting all one's behaviors without evaluation as clinicia…\" is not what the item tests — USA: humans can and should evaluate behaviors but should not globally rate themselves as a person."
      },
      {
        "id": "d",
        "text": "Accepting oneself only after meeting core life goals during a routine session",
        "isCorrect": false,
        "rationale": "\"Accepting oneself only after meeting core life goals during …\" is not what the item tests — USA: humans can and should evaluate behaviors but should not globally rate themselves as a person."
      }
    ]
  },

  {
    "id": "tpse015",
    "domain": "theories",
    "subdomain": "Person-Centered",
    "difficulty": "easy",
    "question": "Rogers' three core conditions for therapeutic change are:",
    "rationale": "Rogers' necessary and sufficient conditions: congruence (therapist's genuineness/realness), unconditional positive regard (non-judgmental acceptance), and accurate empathic understanding communicated to the client.",
    "options": [
      {
        "id": "a",
        "text": "Empathy, boundaries, and confrontation as clinicians typically apply it",
        "isCorrect": false,
        "rationale": "\"Empathy, boundaries, and confrontation as clinicians typical…\" is not what the item tests — Rogers' necessary and sufficient conditions: congruence (therapist's genuineness/realness), unconditional positive regard (non-judgmental acceptanc"
      },
      {
        "id": "b",
        "text": "Warmth, structure, and psychoeducation as clinicians typically apply it",
        "isCorrect": false,
        "rationale": "\"Warmth, structure, and psychoeducation as clinicians typical…\" is not what the item tests — Rogers' necessary and sufficient conditions: congruence (therapist's genuineness/realness), unconditional positive regard (non-judgmental acceptanc"
      },
      {
        "id": "c",
        "text": "Congruence, unconditional positive regard, and empathic understanding",
        "isCorrect": true,
        "rationale": "Rogers' necessary and sufficient conditions: congruence (therapist's genuineness/realness), unconditional positive regard (non-judgmental acceptance), and accurate empathic understanding communicated to the client."
      },
      {
        "id": "d",
        "text": "Acceptance, genuineness, and directiveness at the level the item tests",
        "isCorrect": false,
        "rationale": "\"Acceptance, genuineness, and directiveness at the level the …\" is not what the item tests — Rogers' necessary and sufficient conditions: congruence (therapist's genuineness/realness), unconditional positive regard (non-judgmental acceptanc"
      }
    ]
  },

  {
    "id": "tpse016",
    "domain": "theories",
    "subdomain": "Person-Centered",
    "difficulty": "medium",
    "question": "\"Conditions of worth\" in person-centered theory refers to:",
    "rationale": "Conditions of worth are introjected standards (from parents, culture) that say love and worth are conditional on meeting certain criteria. They cause denial or distortion of organismic experience, creating incongruence and vulnerability.",
    "options": [
      {
        "id": "a",
        "text": "The value clients place on the therapeutic relationship as clinicians typically apply it",
        "isCorrect": false,
        "rationale": "\"The value clients place on the therapeutic relationship as c…\" is not what the item tests — Conditions of worth are introjected standards (from parents, culture) that say love and worth are conditional on meeting certain criteria."
      },
      {
        "id": "b",
        "text": "External reinforcers for adaptive behavior at intake as the reference material frames it now",
        "isCorrect": false,
        "rationale": "\"External reinforcers for adaptive behavior at intake as the …\" is not what the item tests — Conditions of worth are introjected standards (from parents, culture) that say love and worth are conditional on meeting certain criteria."
      },
      {
        "id": "c",
        "text": "Criteria therapists use to determine client progress as the reference material frames it",
        "isCorrect": false,
        "rationale": "\"Criteria therapists use to determine client progress as the …\" is not what the item tests — Conditions of worth are introjected standards (from parents, culture) that say love and worth are conditional on meeting certain criteria."
      },
      {
        "id": "d",
        "text": "Internalized standards that cause clients to deny or distort experience to gain approval",
        "isCorrect": true,
        "rationale": "Conditions of worth are introjected standards (from parents, culture) that say love and worth are conditional on meeting certain criteria. They cause denial or distortion of organismic experience, creating incongruence and vulnerability."
      }
    ]
  },

  {
    "id": "tpse017",
    "domain": "theories",
    "subdomain": "Person-Centered",
    "difficulty": "medium",
    "question": "The \"actualizing tendency\" in person-centered theory is:",
    "rationale": "The actualizing tendency is the foundational motivating force in PCT — an inherent, forward-moving directionality toward growth, complexity, and autonomy present in all living organisms under facilitative conditions.",
    "options": [
      {
        "id": "a",
        "text": "An innate drive in all organisms toward growth and fulfillment",
        "isCorrect": true,
        "rationale": "The actualizing tendency is the foundational motivating force in PCT — an inherent, forward-moving directionality toward growth, complexity, and autonomy present in all living organisms under facilitative conditions."
      },
      {
        "id": "b",
        "text": "The drive to resolve Oedipal conflicts during a routine session",
        "isCorrect": false,
        "rationale": "\"The drive to resolve Oedipal conflicts during a routine sess…\" is not what the item tests — The actualizing tendency is the foundational motivating force in PCT — an inherent, forward-moving directionality toward growth, complexity, and au"
      },
      {
        "id": "c",
        "text": "The client's motivation to seek therapy during a routine session",
        "isCorrect": false,
        "rationale": "\"The client's motivation to seek therapy during a routine ses…\" is not what the item tests — The actualizing tendency is the foundational motivating force in PCT — an inherent, forward-moving directionality toward growth, complexity, and au"
      },
      {
        "id": "d",
        "text": "The process of moving from incongruence to congruence at intake",
        "isCorrect": false,
        "rationale": "\"The process of moving from incongruence to congruence at int…\" is not what the item tests — The actualizing tendency is the foundational motivating force in PCT — an inherent, forward-moving directionality toward growth, complexity, and au"
      }
    ]
  },

  {
    "id": "tpse018",
    "domain": "theories",
    "subdomain": "Person-Centered",
    "difficulty": "hard",
    "question": "In Rogers' theory, \"incongruence\" is defined as a discrepancy between:",
    "rationale": "Incongruence is the gap between organismic experience (what one actually feels/experiences) and the self-concept (how one views oneself). This discrepancy produces psychological tension and defensive functioning.",
    "options": [
      {
        "id": "a",
        "text": "What the client says and what the therapist observes now",
        "isCorrect": false,
        "rationale": "\"What the client says and what the therapist observes now\" is not what the item tests — Incongruence is the gap between organismic experience (what one actually feels/experiences) and the self-concept (how one views oneself)."
      },
      {
        "id": "b",
        "text": "The client's actual experience and their self-concept",
        "isCorrect": true,
        "rationale": "Incongruence is the gap between organismic experience (what one actually feels/experiences) and the self-concept (how one views oneself). This discrepancy produces psychological tension and defensive functioning."
      },
      {
        "id": "c",
        "text": "The client's stated and actual goals during counseling",
        "isCorrect": false,
        "rationale": "\"The client's stated and actual goals during counseling\" is not what the item tests — Incongruence is the gap between organismic experience (what one actually feels/experiences) and the self-concept (how one views oneself)."
      },
      {
        "id": "d",
        "text": "The client's conscious and unconscious motivations now",
        "isCorrect": false,
        "rationale": "\"The client's conscious and unconscious motivations now\" is not what the item tests — Incongruence is the gap between organismic experience (what one actually feels/experiences) and the self-concept (how one views oneself)."
      }
    ]
  },

  {
    "id": "tpse019",
    "domain": "theories",
    "subdomain": "Person-Centered",
    "difficulty": "medium",
    "question": "A person-centered therapist's primary role is to:",
    "rationale": "PCT positions the therapist as creating facilitative conditions, not directing change. The relational climate — not techniques — allows the client's inherent actualizing tendency to operate.",
    "options": [
      {
        "id": "a",
        "text": "Challenge irrational thinking patterns here as the reference material frames it",
        "isCorrect": false,
        "rationale": "\"Challenge irrational thinking patterns here as the reference…\" is not what the item tests — PCT positions the therapist as creating facilitative conditions, not directing change."
      },
      {
        "id": "b",
        "text": "Interpret the client's unconscious motivations as clinicians typically apply it",
        "isCorrect": false,
        "rationale": "\"Interpret the client's unconscious motivations as clinicians…\" is not what the item tests — PCT positions the therapist as creating facilitative conditions, not directing change."
      },
      {
        "id": "c",
        "text": "Provide a relational climate that facilitates the client's self-directed growth",
        "isCorrect": true,
        "rationale": "PCT positions the therapist as creating facilitative conditions, not directing change. The relational climate — not techniques — allows the client's inherent actualizing tendency to operate."
      },
      {
        "id": "d",
        "text": "Assign structured exercises to build coping skills as clinicians typically apply it",
        "isCorrect": false,
        "rationale": "\"Assign structured exercises to build coping skills as clinic…\" is not what the item tests — PCT positions the therapist as creating facilitative conditions, not directing change."
      }
    ]
  },

  {
    "id": "tpse020",
    "domain": "theories",
    "subdomain": "Existential",
    "difficulty": "medium",
    "question": "Yalom's four \"ultimate concerns\" or existential givens are:",
    "rationale": "Yalom's four ultimate concerns: death (inevitability), freedom (radical responsibility for one's choices), isolation (fundamental aloneness), and meaninglessness (absence of inherent meaning). Each generates existential anxiety.",
    "options": [
      {
        "id": "a",
        "text": "Identity, intimacy, purpose, mortality now",
        "isCorrect": false,
        "rationale": "\"Identity, intimacy, purpose, mortality now\" is not what the item tests — Yalom's four ultimate concerns: death (inevitability), freedom (radical responsibility for one's choices), isolation (fundamental aloneness), and meaninglessness (abs"
      },
      {
        "id": "b",
        "text": "Anxiety, guilt, shame, loneliness at intake",
        "isCorrect": false,
        "rationale": "\"Anxiety, guilt, shame, loneliness at intake\" is not what the item tests — Yalom's four ultimate concerns: death (inevitability), freedom (radical responsibility for one's choices), isolation (fundamental aloneness), and meaninglessness (ab"
      },
      {
        "id": "c",
        "text": "Birth, growth, suffering, death in practice",
        "isCorrect": false,
        "rationale": "\"Birth, growth, suffering, death in practice\" is not what the item tests — Yalom's four ultimate concerns: death (inevitability), freedom (radical responsibility for one's choices), isolation (fundamental aloneness), and meaninglessness (ab"
      },
      {
        "id": "d",
        "text": "Death, freedom, isolation, meaninglessness",
        "isCorrect": true,
        "rationale": "Yalom's four ultimate concerns: death (inevitability), freedom (radical responsibility for one's choices), isolation (fundamental aloneness), and meaninglessness (absence of inherent meaning). Each generates existential anxiety."
      }
    ]
  },

  {
    "id": "tpse021",
    "domain": "theories",
    "subdomain": "Existential",
    "difficulty": "hard",
    "question": "\"Existential anxiety\" is distinguished from neurotic anxiety because:",
    "rationale": "Existential anxiety is ontological — arising from confronting givens like death, freedom, and meaninglessness. It is normal and unavoidable. Neurotic anxiety is a defense against this authentic anxiety rather than a direct confrontation with it.",
    "options": [
      {
        "id": "a",
        "text": "Existential anxiety arises from confronting inescapable realities of human existence",
        "isCorrect": true,
        "rationale": "Existential anxiety is ontological — arising from confronting givens like death, freedom, and meaninglessness."
      },
      {
        "id": "b",
        "text": "Existential anxiety responds to medication; neurotic anxiety does not in this domain",
        "isCorrect": false,
        "rationale": "\"Existential anxiety responds to medication; neurotic anxiety…\" is not what the item tests — Existential anxiety is ontological — arising from confronting givens like death, freedom, and meaninglessness."
      },
      {
        "id": "c",
        "text": "Neurotic anxiety is more severe and disabling by definition during a routine session",
        "isCorrect": false,
        "rationale": "\"Neurotic anxiety is more severe and disabling by definition …\" is not what the item tests — Existential anxiety is ontological — arising from confronting givens like death, freedom, and meaninglessness."
      },
      {
        "id": "d",
        "text": "Existential anxiety occurs only in older adults confronting death at the intake stage",
        "isCorrect": false,
        "rationale": "\"Existential anxiety occurs only in older adults confronting …\" is not what the item tests — Existential anxiety is ontological — arising from confronting givens like death, freedom, and meaninglessness."
      }
    ]
  },

  {
    "id": "tpse022",
    "domain": "theories",
    "subdomain": "Existential",
    "difficulty": "medium",
    "question": "Frankl's logotherapy focuses on:",
    "rationale": "Logotherapy (Frankl) holds that the primary human motivation is will to meaning. Even in unavoidable suffering, meaning can be found. Techniques include paradoxical intention and dereflection.",
    "options": [
      {
        "id": "a",
        "text": "Analyzing childhood experiences to find meaning in current symptoms by counselors",
        "isCorrect": false,
        "rationale": "\"Analyzing childhood experiences to find meaning in current s…\" is not what the item tests — Logotherapy (Frankl) holds that the primary human motivation is will to meaning."
      },
      {
        "id": "b",
        "text": "Helping clients discover meaning as the primary motivational force in human life",
        "isCorrect": true,
        "rationale": "Logotherapy (Frankl) holds that the primary human motivation is will to meaning. Even in unavoidable suffering, meaning can be found. Techniques include paradoxical intention and dereflection."
      },
      {
        "id": "c",
        "text": "Developing authentic relationships through genuine encounter at the intake stage",
        "isCorrect": false,
        "rationale": "\"Developing authentic relationships through genuine encounter…\" is not what the item tests — Logotherapy (Frankl) holds that the primary human motivation is will to meaning."
      },
      {
        "id": "d",
        "text": "Reducing anxiety through acceptance of existential givens during a routine session",
        "isCorrect": false,
        "rationale": "\"Reducing anxiety through acceptance of existential givens du…\" is not what the item tests — Logotherapy (Frankl) holds that the primary human motivation is will to meaning."
      }
    ]
  },

  {
    "id": "tpse023",
    "domain": "theories",
    "subdomain": "Existential",
    "difficulty": "medium",
    "question": "The existential concept of \"bad faith\" (Sartre) in clinical work describes:",
    "rationale": "Bad faith = self-deception in which one denies radical freedom by claiming one \"had no choice.\" Clinically, clients in bad faith externalize responsibility for their lives, avoiding the anxiety of authentic choosing.",
    "options": [
      {
        "id": "a",
        "text": "Avoiding confrontation of death anxiety through distraction at the level the item tests",
        "isCorrect": false,
        "rationale": "\"Avoiding confrontation of death anxiety through distraction …\" is not what the item tests — Bad faith = self-deception in which one denies radical freedom by claiming one \"had no choice.\" Clinically, clients in bad faith externalize respon"
      },
      {
        "id": "b",
        "text": "Dishonesty with the therapist in session in practice as the reference material frames it",
        "isCorrect": false,
        "rationale": "\"Dishonesty with the therapist in session in practice as the …\" is not what the item tests — Bad faith = self-deception in which one denies radical freedom by claiming one \"had no choice.\" Clinically, clients in bad faith externalize respon"
      },
      {
        "id": "c",
        "text": "Denying one's freedom and responsibility by claiming external forces determine behavior",
        "isCorrect": true,
        "rationale": "Bad faith = self-deception in which one denies radical freedom by claiming one \"had no choice.\" Clinically, clients in bad faith externalize responsibility for their lives, avoiding the anxiety of authentic choosing."
      },
      {
        "id": "d",
        "text": "Lack of genuine encounter in the therapeutic relationship as clinicians typically apply it",
        "isCorrect": false,
        "rationale": "\"Lack of genuine encounter in the therapeutic relationship as…\" is not what the item tests — Bad faith = self-deception in which one denies radical freedom by claiming one \"had no choice.\" Clinically, clients in bad faith externalize respon"
      }
    ]
  },

  {
    "id": "tpse024",
    "domain": "theories",
    "subdomain": "Adlerian",
    "difficulty": "easy",
    "question": "Adler's concept of \"social interest\" (Gemeinschaftsgefühl) refers to:",
    "rationale": "Social interest = feeling of belonging to and caring for the broader human community. Adler correlated mental health with developed social interest; psychopathology reflects its absence or underdevelopment.",
    "options": [
      {
        "id": "a",
        "text": "Social skill deficits that require remediation as clinicians typically apply it",
        "isCorrect": false,
        "rationale": "\"Social skill deficits that require remediation as clinicians…\" is not what the item tests — Social interest = feeling of belonging to and caring for the broader human community."
      },
      {
        "id": "b",
        "text": "The need to belong as a source of anxiety as the reference material frames it",
        "isCorrect": false,
        "rationale": "\"The need to belong as a source of anxiety as the reference m…\" is not what the item tests — Social interest = feeling of belonging to and caring for the broader human community."
      },
      {
        "id": "c",
        "text": "The client's motivation to seek social relationships during a routine session",
        "isCorrect": false,
        "rationale": "\"The client's motivation to seek social relationships during …\" is not what the item tests — Social interest = feeling of belonging to and caring for the broader human community."
      },
      {
        "id": "d",
        "text": "An innate potential to cooperate with others and contribute to the community",
        "isCorrect": true,
        "rationale": "Social interest = feeling of belonging to and caring for the broader human community. Adler correlated mental health with developed social interest; psychopathology reflects its absence or underdevelopment."
      }
    ]
  },

  {
    "id": "tpse025",
    "domain": "theories",
    "subdomain": "Adlerian",
    "difficulty": "medium",
    "question": "In Adlerian therapy, \"lifestyle assessment\" examines:",
    "rationale": "Adlerian lifestyle assessment explores birth order, early recollections, family atmosphere, and the \"basic mistakes\" (mistaken private logic) that form the client's unique approach to self, others, and life.",
    "options": [
      {
        "id": "a",
        "text": "The client's early recollections, family constellation, and core convictions about life",
        "isCorrect": true,
        "rationale": "Adlerian lifestyle assessment explores birth order, early recollections, family atmosphere, and the \"basic mistakes\" (mistaken private logic) that form the client's unique approach to self, others, and life."
      },
      {
        "id": "b",
        "text": "Behavioral patterns in work and relationships only now as clinicians typically apply it",
        "isCorrect": false,
        "rationale": "\"Behavioral patterns in work and relationships only now as cl…\" is not what the item tests — Adlerian lifestyle assessment explores birth order, early recollections, family atmosphere, and the \"basic mistakes\" (mistaken private logic) that "
      },
      {
        "id": "c",
        "text": "Current habits, diet, and sleep patterns in practice as the reference material frames it",
        "isCorrect": false,
        "rationale": "\"Current habits, diet, and sleep patterns in practice as the …\" is not what the item tests — Adlerian lifestyle assessment explores birth order, early recollections, family atmosphere, and the \"basic mistakes\" (mistaken private logic) that "
      },
      {
        "id": "d",
        "text": "Social media use and recreational choices at intake as the reference material frames it",
        "isCorrect": false,
        "rationale": "\"Social media use and recreational choices at intake as the r…\" is not what the item tests — Adlerian lifestyle assessment explores birth order, early recollections, family atmosphere, and the \"basic mistakes\" (mistaken private logic) that "
      }
    ]
  },

  {
    "id": "tpse026",
    "domain": "theories",
    "subdomain": "Adlerian",
    "difficulty": "hard",
    "question": "Adler's concept of \"striving for superiority\" is best understood as:",
    "rationale": "Striving for superiority = Adler's term for the universal forward movement from felt minus to plus — toward mastery and wholeness. Healthy when directed toward social interest; pathological when purely self-serving.",
    "options": [
      {
        "id": "a",
        "text": "The ego's primary defense against anxiety today as the reference material frames it",
        "isCorrect": false,
        "rationale": "\"The ego's primary defense against anxiety today as the refer…\" is not what the item tests — Striving for superiority = Adler's term for the universal forward movement from felt minus to plus — toward mastery and wholeness."
      },
      {
        "id": "b",
        "text": "A universal drive to overcome inferiority and move toward competence and completion",
        "isCorrect": true,
        "rationale": "Striving for superiority = Adler's term for the universal forward movement from felt minus to plus — toward mastery and wholeness. Healthy when directed toward social interest; pathological when purely self-serving."
      },
      {
        "id": "c",
        "text": "A narcissistic drive to dominate others as used as the reference material frames it",
        "isCorrect": false,
        "rationale": "\"A narcissistic drive to dominate others as used as the refer…\" is not what the item tests — Striving for superiority = Adler's term for the universal forward movement from felt minus to plus — toward mastery and wholeness."
      },
      {
        "id": "d",
        "text": "A pathological need for social status and recognition as clinicians typically apply it",
        "isCorrect": false,
        "rationale": "\"A pathological need for social status and recognition as cli…\" is not what the item tests — Striving for superiority = Adler's term for the universal forward movement from felt minus to plus — toward mastery and wholeness."
      }
    ]
  },

  {
    "id": "tpse027",
    "domain": "theories",
    "subdomain": "Adlerian",
    "difficulty": "medium",
    "question": "Dreikurs identified four mistaken goals of misbehavior in children. Which list is correct?",
    "rationale": "Dreikurs (Adlerian) identified 4 mistaken goals: attention-getting, power/control, revenge/retaliation, and display of inadequacy. Each requires a different parental and therapeutic response.",
    "options": [
      {
        "id": "a",
        "text": "Power, status, revenge, escape during counseling",
        "isCorrect": false,
        "rationale": "\"Power, status, revenge, escape during counseling\" is not what the item tests — Dreikurs (Adlerian) identified 4 mistaken goals: attention-getting, power/control, revenge/retaliation, and display of inadequacy."
      },
      {
        "id": "b",
        "text": "Attention, aggression, withdrawal, manipulation now",
        "isCorrect": false,
        "rationale": "\"Attention, aggression, withdrawal, manipulation now\" is not what the item tests — Dreikurs (Adlerian) identified 4 mistaken goals: attention-getting, power/control, revenge/retaliation, and display of inadequacy."
      },
      {
        "id": "c",
        "text": "Attention, power, revenge, display of inadequacy",
        "isCorrect": true,
        "rationale": "Dreikurs (Adlerian) identified 4 mistaken goals: attention-getting, power/control, revenge/retaliation, and display of inadequacy. Each requires a different parental and therapeutic response."
      },
      {
        "id": "d",
        "text": "Control, approval, affiliation, achievement here",
        "isCorrect": false,
        "rationale": "\"Control, approval, affiliation, achievement here\" is not what the item tests — Dreikurs (Adlerian) identified 4 mistaken goals: attention-getting, power/control, revenge/retaliation, and display of inadequacy."
      }
    ]
  },

  {
    "id": "tpse028",
    "domain": "theories",
    "subdomain": "Gestalt",
    "difficulty": "easy",
    "question": "Gestalt therapy's emphasis on \"here-and-now\" awareness means:",
    "rationale": "Gestalt therapy prioritizes present-moment awareness. Even past issues are brought into the present. The contact and awareness occurring in the session IS the therapeutic work.",
    "options": [
      {
        "id": "a",
        "text": "Past trauma is typically reconstructed before it can be addressed at the level the item tests",
        "isCorrect": false,
        "rationale": "\"Past trauma is typically reconstructed before it can be addr…\" is not what the item tests — Gestalt therapy prioritizes present-moment awareness."
      },
      {
        "id": "b",
        "text": "Current behavioral reinforcement patterns are the unit of analysis in the outpatient setting",
        "isCorrect": false,
        "rationale": "\"Current behavioral reinforcement patterns are the unit of an…\" is not what the item tests — Gestalt therapy prioritizes present-moment awareness."
      },
      {
        "id": "c",
        "text": "The therapist focuses on future goals and behavior change plans as clinicians typically apply it",
        "isCorrect": false,
        "rationale": "\"The therapist focuses on future goals and behavior change pl…\" is not what the item tests — Gestalt therapy prioritizes present-moment awareness."
      },
      {
        "id": "d",
        "text": "The primary focus is on what the client is experiencing in the present moment of the session",
        "isCorrect": true,
        "rationale": "Gestalt therapy prioritizes present-moment awareness. Even past issues are brought into the present. The contact and awareness occurring in the session IS the therapeutic work."
      }
    ]
  },

  {
    "id": "tpse029",
    "domain": "theories",
    "subdomain": "Gestalt",
    "difficulty": "medium",
    "question": "The \"empty chair\" technique in Gestalt therapy is used to:",
    "rationale": "The empty chair facilitates dialogues — client speaks to an imagined person, part of self, or concept, then shifts chairs to respond from that perspective. Powerful for unfinished business and internal polarities.",
    "options": [
      {
        "id": "a",
        "text": "Enable clients to dialogue with aspects of self, significant others, or unfinished situations",
        "isCorrect": true,
        "rationale": "The empty chair facilitates dialogues — client speaks to an imagined person, part of self, or concept, then shifts chairs to respond from that perspective. Powerful for unfinished business and internal polarities."
      },
      {
        "id": "b",
        "text": "Symbolize that the client's concerns need not be present to be addressed as usually described",
        "isCorrect": false,
        "rationale": "\"Symbolize that the client's concerns need not be present to …\" is not what the item tests — The empty chair facilitates dialogues — client speaks to an imagined person, part of self, or concept, then shifts chairs to respond from that pers"
      },
      {
        "id": "c",
        "text": "Create physical safety through spatial distance from the therapist at the level the item tests",
        "isCorrect": false,
        "rationale": "\"Create physical safety through spatial distance from the the…\" is not what the item tests — The empty chair facilitates dialogues — client speaks to an imagined person, part of self, or concept, then shifts chairs to respond from that pers"
      },
      {
        "id": "d",
        "text": "Practice behavioral rehearsal for upcoming difficult conversations at the level the item tests",
        "isCorrect": false,
        "rationale": "\"Practice behavioral rehearsal for upcoming difficult convers…\" is not what the item tests — The empty chair facilitates dialogues — client speaks to an imagined person, part of self, or concept, then shifts chairs to respond from that pers"
      }
    ]
  },

  {
    "id": "tpse030",
    "domain": "theories",
    "subdomain": "Gestalt",
    "difficulty": "hard",
    "question": "Which Gestalt concept describes the process of turning an impulse back on oneself rather than directing it toward the environment?",
    "rationale": "Retroflection = redirecting toward oneself what one wants to do to others (e.g., self-harm instead of expressing anger). Projection = attributing inner experience to others; deflection = avoiding contact; introjection = swallowing whole without processing.",
    "options": [
      {
        "id": "a",
        "text": "Projection",
        "isCorrect": false,
        "rationale": "\"Projection\" is not what the item tests — Retroflection = redirecting toward oneself what one wants to do to others (e.g., self-harm instead of expressing anger)."
      },
      {
        "id": "b",
        "text": "Retroflection",
        "isCorrect": true,
        "rationale": "Retroflection = redirecting toward oneself what one wants to do to others (e.g., self-harm instead of expressing anger)."
      },
      {
        "id": "c",
        "text": "Introjection",
        "isCorrect": false,
        "rationale": "\"Introjection\" is not what the item tests — Retroflection = redirecting toward oneself what one wants to do to others (e.g., self-harm instead of expressing anger)."
      },
      {
        "id": "d",
        "text": "Deflection",
        "isCorrect": false,
        "rationale": "\"Deflection\" is not what the item tests — Retroflection = redirecting toward oneself what one wants to do to others (e.g., self-harm instead of expressing anger)."
      }
    ]
  },

  {
    "id": "tpse031",
    "domain": "theories",
    "subdomain": "Gestalt",
    "difficulty": "medium",
    "question": "\"Unfinished business\" in Gestalt therapy refers to:",
    "rationale": "Unfinished business (incomplete gestalt) = unresolved emotional experiences — resentments, grief, regrets — that linger and distort present functioning until they are completed and integrated.",
    "options": [
      {
        "id": "a",
        "text": "Topics the client has avoided in the therapeutic relationship in practice",
        "isCorrect": false,
        "rationale": "\"Topics the client has avoided in the therapeutic relationshi…\" is not what the item tests — Unfinished business (incomplete gestalt) = unresolved emotional experiences — resentments, grief, regrets — that linger and distort present functio"
      },
      {
        "id": "b",
        "text": "Goals the client has not yet achieved in life at the level the item tests",
        "isCorrect": false,
        "rationale": "\"Goals the client has not yet achieved in life at the level t…\" is not what the item tests — Unfinished business (incomplete gestalt) = unresolved emotional experiences — resentments, grief, regrets — that linger and distort present functio"
      },
      {
        "id": "c",
        "text": "Unexpressed feelings and incomplete situations that drain present energy",
        "isCorrect": true,
        "rationale": "Unfinished business (incomplete gestalt) = unresolved emotional experiences — resentments, grief, regrets — that linger and distort present functioning until they are completed and integrated."
      },
      {
        "id": "d",
        "text": "Incomplete homework assignments from previous sessions during counseling",
        "isCorrect": false,
        "rationale": "\"Incomplete homework assignments from previous sessions durin…\" is not what the item tests — Unfinished business (incomplete gestalt) = unresolved emotional experiences — resentments, grief, regrets — that linger and distort present functio"
      }
    ]
  },

  {
    "id": "tpse032",
    "domain": "theories",
    "subdomain": "SFBT",
    "difficulty": "easy",
    "question": "The \"miracle question\" in SFBT asks clients to:",
    "rationale": "The miracle question invites clients to vividly describe a future without the problem, bypassing problem focus and generating behavioral descriptors of the solution state to use as concrete goals.",
    "options": [
      {
        "id": "a",
        "text": "Rate the intensity of their problem on a 0–10 scale at the intake stage",
        "isCorrect": false,
        "rationale": "\"Rate the intensity of their problem on a 0–10 scale at the i…\" is not what the item tests — The miracle question invites clients to vividly describe a future without the problem, bypassing problem focus and generating behavioral descriptor"
      },
      {
        "id": "b",
        "text": "Describe an ideal therapist who could solve all their problems as used",
        "isCorrect": false,
        "rationale": "\"Describe an ideal therapist who could solve all their proble…\" is not what the item tests — The miracle question invites clients to vividly describe a future without the problem, bypassing problem focus and generating behavioral descriptor"
      },
      {
        "id": "c",
        "text": "Identify a time when things were worse and they coped during counseling",
        "isCorrect": false,
        "rationale": "\"Identify a time when things were worse and they coped during…\" is not what the item tests — The miracle question invites clients to vividly describe a future without the problem, bypassing problem focus and generating behavioral descriptor"
      },
      {
        "id": "d",
        "text": "Imagine what would be different if their problem were solved overnight",
        "isCorrect": true,
        "rationale": "The miracle question invites clients to vividly describe a future without the problem, bypassing problem focus and generating behavioral descriptors of the solution state to use as concrete goals."
      }
    ]
  },

  {
    "id": "tpse033",
    "domain": "theories",
    "subdomain": "SFBT",
    "difficulty": "medium",
    "question": "Scaling questions in SFBT primarily serve to:",
    "rationale": "SFBT scaling questions (0–10) track client-defined progress, explore what is different between scale points, and identify small, concrete, achievable next steps. They are strength-based and client-centered.",
    "options": [
      {
        "id": "a",
        "text": "Quantify progress, motivation, and confidence, and identify small next steps",
        "isCorrect": true,
        "rationale": "SFBT scaling questions (0–10) track client-defined progress, explore what is different between scale points, and identify small, concrete, achievable next steps. They are strength-based and client-centered."
      },
      {
        "id": "b",
        "text": "Determine the client's level of insight now as clinicians typically apply it",
        "isCorrect": false,
        "rationale": "\"Determine the client's level of insight now as clinicians ty…\" is not what the item tests — SFBT scaling questions (0–10) track client-defined progress, explore what is different between scale points, and identify small, concrete, achievab"
      },
      {
        "id": "c",
        "text": "Assess symptom severity for diagnostic purposes as clinicians typically apply it",
        "isCorrect": false,
        "rationale": "\"Assess symptom severity for diagnostic purposes as clinician…\" is not what the item tests — SFBT scaling questions (0–10) track client-defined progress, explore what is different between scale points, and identify small, concrete, achievab"
      },
      {
        "id": "d",
        "text": "Establish a behavioral baseline for treatment planning during a routine session",
        "isCorrect": false,
        "rationale": "\"Establish a behavioral baseline for treatment planning durin…\" is not what the item tests — SFBT scaling questions (0–10) track client-defined progress, explore what is different between scale points, and identify small, concrete, achievab"
      }
    ]
  },

  {
    "id": "tpse034",
    "domain": "theories",
    "subdomain": "SFBT",
    "difficulty": "hard",
    "question": "\"Exception questions\" in SFBT involve asking clients about:",
    "rationale": "Exception questions explore times the problem does not happen or is less present. These exceptions contain solution information — what was the client doing differently? Exceptions build on existing strengths rather than analyzing deficits.",
    "options": [
      {
        "id": "a",
        "text": "Situations they have avoided due to the problem at intake",
        "isCorrect": false,
        "rationale": "\"Situations they have avoided due to the problem at intake\" is not what the item tests — Exception questions explore times the problem does not happen or is less present."
      },
      {
        "id": "b",
        "text": "Times when the problem did not occur or was less intense",
        "isCorrect": true,
        "rationale": "Exception questions explore times the problem does not happen or is less present. These exceptions contain solution information — what was the client doing differently? Exceptions build on existing strengths rather than analyzing deficits."
      },
      {
        "id": "c",
        "text": "People they consider exceptions to their social difficulties",
        "isCorrect": false,
        "rationale": "\"People they consider exceptions to their social difficulties\" is not what the item tests — Exception questions explore times the problem does not happen or is less present."
      },
      {
        "id": "d",
        "text": "Times when they felt their problem was most severe today",
        "isCorrect": false,
        "rationale": "\"Times when they felt their problem was most severe today\" is not what the item tests — Exception questions explore times the problem does not happen or is less present."
      }
    ]
  },

  {
    "id": "tpse035",
    "domain": "theories",
    "subdomain": "SFBT",
    "difficulty": "medium",
    "question": "SFBT is philosophically grounded in:",
    "rationale": "SFBT is grounded in social constructionism — the idea that reality and meaning are constructed through language and social interaction. Problems and solutions are both linguistic constructions, not fixed internal realities.",
    "options": [
      {
        "id": "a",
        "text": "Biological psychiatry",
        "isCorrect": false,
        "rationale": "\"Biological psychiatry\" is not what the item tests — SFBT is grounded in social constructionism — the idea that reality and meaning are constructed through language and social interaction."
      },
      {
        "id": "b",
        "text": "Psychoanalytic theory",
        "isCorrect": false,
        "rationale": "\"Psychoanalytic theory\" is not what the item tests — SFBT is grounded in social constructionism — the idea that reality and meaning are constructed through language and social interaction."
      },
      {
        "id": "c",
        "text": "Social constructionism",
        "isCorrect": true,
        "rationale": "SFBT is grounded in social constructionism — the idea that reality and meaning are constructed through language and social interaction. Problems and solutions are both linguistic constructions, not fixed internal realities."
      },
      {
        "id": "d",
        "text": "Cognitive behavioral theory",
        "isCorrect": false,
        "rationale": "\"Cognitive behavioral theory\" is not what the item tests — SFBT is grounded in social constructionism — the idea that reality and meaning are constructed through language and social interaction."
      }
    ]
  },

  {
    "id": "tpse036",
    "domain": "theories",
    "subdomain": "Narrative",
    "difficulty": "easy",
    "question": "A core principle of narrative therapy is: \"The person is not the problem — _____ is the problem.\"",
    "rationale": "\"The person is not the problem; the problem is the problem.\" This encapsulates externalization — separating the person's identity from the problem-saturated story, reducing shame and opening possibility for agency.",
    "options": [
      {
        "id": "a",
        "text": "the story",
        "isCorrect": false,
        "rationale": "\"the story\" is not what the item tests — \"The person is not the problem; the problem is the problem.\" This encapsulates externalization — separating the person's identity from the problem-saturated story, reducing shame and opening possibil"
      },
      {
        "id": "b",
        "text": "society",
        "isCorrect": false,
        "rationale": "\"society\" is not what the item tests — \"The person is not the problem; the problem is the problem.\" This encapsulates externalization — separating the person's identity from the problem-saturated story, reducing shame and opening possibilit"
      },
      {
        "id": "c",
        "text": "the relationship",
        "isCorrect": false,
        "rationale": "\"the relationship\" is not what the item tests — \"The person is not the problem; the problem is the problem.\" This encapsulates externalization — separating the person's identity from the problem-saturated story, reducing shame and opening p"
      },
      {
        "id": "d",
        "text": "the problem",
        "isCorrect": true,
        "rationale": "\"The person is not the problem; the problem is the problem.\" This encapsulates externalization — separating the person's identity from the problem-saturated story, reducing shame and opening possibility for agency."
      }
    ]
  },

  {
    "id": "tpse037",
    "domain": "theories",
    "subdomain": "Narrative",
    "difficulty": "medium",
    "question": "\"Unique outcomes\" or \"sparkling moments\" in narrative therapy refer to:",
    "rationale": "Unique outcomes are exceptions to the dominant problem story — times when the problem's influence was resisted or absent. They are entry points for re-authoring a preferred identity narrative.",
    "options": [
      {
        "id": "a",
        "text": "Events that contradict the problem-saturated story, opening alternative narratives",
        "isCorrect": true,
        "rationale": "Unique outcomes are exceptions to the dominant problem story — times when the problem's influence was resisted or absent. They are entry points for re-authoring a preferred identity narrative."
      },
      {
        "id": "b",
        "text": "Breakthroughs in the therapeutic relationship now as clinicians typically apply it",
        "isCorrect": false,
        "rationale": "\"Breakthroughs in the therapeutic relationship now as clinici…\" is not what the item tests — Unique outcomes are exceptions to the dominant problem story — times when the problem's influence was resisted or absent."
      },
      {
        "id": "c",
        "text": "Goals the client has identified as most personally meaningful as usually described",
        "isCorrect": false,
        "rationale": "\"Goals the client has identified as most personally meaningfu…\" is not what the item tests — Unique outcomes are exceptions to the dominant problem story — times when the problem's influence was resisted or absent."
      },
      {
        "id": "d",
        "text": "The client's most important life achievements now as clinicians typically apply it now",
        "isCorrect": false,
        "rationale": "\"The client's most important life achievements now as clinici…\" is not what the item tests — Unique outcomes are exceptions to the dominant problem story — times when the problem's influence was resisted or absent."
      }
    ]
  },

  {
    "id": "tpse038",
    "domain": "theories",
    "subdomain": "Narrative",
    "difficulty": "hard",
    "question": "\"Externalization\" in narrative therapy involves:",
    "rationale": "Externalization objectifies the problem through language: \"How has Depression been influencing you?\" not \"How does your depression affect you?\" This creates separation between person and problem, enabling agency over it.",
    "options": [
      {
        "id": "a",
        "text": "Addressing the client's environment rather than internal states now",
        "isCorrect": false,
        "rationale": "\"Addressing the client's environment rather than internal sta…\" is not what the item tests — Externalization objectifies the problem through language: \"How has Depression been influencing you?\" not \"How does your depression affect you?\" Thi"
      },
      {
        "id": "b",
        "text": "Linguistically separating the problem from the person's identity",
        "isCorrect": true,
        "rationale": "Externalization objectifies the problem through language: \"How has Depression been influencing you?\" not \"How does your depression affect you?\" This creates separation between person and problem, enabling agency over it."
      },
      {
        "id": "c",
        "text": "Sharing therapy content with support systems for feedback itself",
        "isCorrect": false,
        "rationale": "\"Sharing therapy content with support systems for feedback it…\" is not what the item tests — Externalization objectifies the problem through language: \"How has Depression been influencing you?\" not \"How does your depression affect you?\" Thi"
      },
      {
        "id": "d",
        "text": "Projecting one's problems onto others at the level the item tests",
        "isCorrect": false,
        "rationale": "\"Projecting one's problems onto others at the level the item …\" is not what the item tests — Externalization objectifies the problem through language: \"How has Depression been influencing you?\" not \"How does your depression affect you?\" Thi"
      }
    ]
  },

  {
    "id": "tpse039",
    "domain": "theories",
    "subdomain": "Narrative",
    "difficulty": "medium",
    "question": "\"Definitional ceremonies\" in narrative therapy involve:",
    "rationale": "Definitional ceremonies use outsider witnesses — people who listen to the client's re-authored narrative, resonate with specific elements, and reflect that resonance back. This 'thickens' the preferred story through community witnessing.",
    "options": [
      {
        "id": "a",
        "text": "Cultural ceremonies incorporated into the therapeutic process during counseling",
        "isCorrect": false,
        "rationale": "\"Cultural ceremonies incorporated into the therapeutic proces…\" is not what the item tests — Definitional ceremonies use outsider witnesses — people who listen to the client's re-authored narrative, resonate with specific elements, and refl"
      },
      {
        "id": "b",
        "text": "Formal diagnostic rituals conducted at intake as clinicians typically apply it",
        "isCorrect": false,
        "rationale": "\"Formal diagnostic rituals conducted at intake as clinicians …\" is not what the item tests — Definitional ceremonies use outsider witnesses — people who listen to the client's re-authored narrative, resonate with specific elements, and refl"
      },
      {
        "id": "c",
        "text": "Outsider witnesses who respond to the client's preferred alternative narrative",
        "isCorrect": true,
        "rationale": "Definitional ceremonies use outsider witnesses — people who listen to the client's re-authored narrative, resonate with specific elements, and reflect that resonance back. This 'thickens' the preferred story through community witnessing."
      },
      {
        "id": "d",
        "text": "Formal termination rituals marking the end of therapy during a routine session",
        "isCorrect": false,
        "rationale": "\"Formal termination rituals marking the end of therapy during…\" is not what the item tests — Definitional ceremonies use outsider witnesses — people who listen to the client's re-authored narrative, resonate with specific elements, and refl"
      }
    ]
  },

  {
    "id": "tpse040",
    "domain": "theories",
    "subdomain": "ACT",
    "difficulty": "medium",
    "question": "ACT's concept of \"psychological flexibility\" refers to the ability to:",
    "rationale": "Psychological flexibility is ACT's core goal: fully contacting the present moment, accepting thoughts/feelings without defense, defusing from unhelpful language, connecting with self-as-context, clarifying values, and taking committed action.",
    "options": [
      {
        "id": "a",
        "text": "Tolerate discomfort by suppressing difficult emotions itself as the reference material frames it",
        "isCorrect": false,
        "rationale": "\"Tolerate discomfort by suppressing difficult emotions itself…\" is not what the item tests — Psychological flexibility is ACT's core goal: fully contacting the present moment, accepting thoughts/feelings without defense, defusing from unhel"
      },
      {
        "id": "b",
        "text": "Adapt social behavior flexibly to meet situational demands now as the reference material frames it",
        "isCorrect": false,
        "rationale": "\"Adapt social behavior flexibly to meet situational demands n…\" is not what the item tests — Psychological flexibility is ACT's core goal: fully contacting the present moment, accepting thoughts/feelings without defense, defusing from unhel"
      },
      {
        "id": "c",
        "text": "Change negative thoughts to positive ones systematically now as the reference material frames it",
        "isCorrect": false,
        "rationale": "\"Change negative thoughts to positive ones systematically now…\" is not what the item tests — Psychological flexibility is ACT's core goal: fully contacting the present moment, accepting thoughts/feelings without defense, defusing from unhel"
      },
      {
        "id": "d",
        "text": "Contact the present moment fully, accept unwanted private events, and pursue values-based action",
        "isCorrect": true,
        "rationale": "Psychological flexibility is ACT's core goal: fully contacting the present moment, accepting thoughts/feelings without defense, defusing from unhelpful language, connecting with self-as-context, clarifying values, and ta…"
      }
    ]
  },

  {
    "id": "tpse041",
    "domain": "theories",
    "subdomain": "ACT",
    "difficulty": "hard",
    "question": "\"Cognitive defusion\" in ACT aims to:",
    "rationale": "Defusion does not dispute or change thoughts — it changes the relationship with them: seeing thoughts as words/events in the mind rather than literal facts. Techniques (singing thoughts, 'I notice I'm having the thought that...') create psychological distance.",
    "options": [
      {
        "id": "a",
        "text": "Change the relationship with thoughts so they have less behavioral influence",
        "isCorrect": true,
        "rationale": "Defusion does not dispute or change thoughts — it changes the relationship with them: seeing thoughts as words/events in the mind rather than literal facts."
      },
      {
        "id": "b",
        "text": "Suppress unwanted thoughts through mindful awareness during a routine session",
        "isCorrect": false,
        "rationale": "\"Suppress unwanted thoughts through mindful awareness during …\" is not what the item tests — Defusion does not dispute or change thoughts — it changes the relationship with them: seeing thoughts as words/events in the mind rather than liter"
      },
      {
        "id": "c",
        "text": "Replace negative thoughts with more accurate alternative thoughts in practice",
        "isCorrect": false,
        "rationale": "\"Replace negative thoughts with more accurate alternative tho…\" is not what the item tests — Defusion does not dispute or change thoughts — it changes the relationship with them: seeing thoughts as words/events in the mind rather than liter"
      },
      {
        "id": "d",
        "text": "Challenge the validity of unhelpful thoughts as clinicians typically apply it",
        "isCorrect": false,
        "rationale": "\"Challenge the validity of unhelpful thoughts as clinicians t…\" is not what the item tests — Defusion does not dispute or change thoughts — it changes the relationship with them: seeing thoughts as words/events in the mind rather than liter"
      }
    ]
  },

  {
    "id": "tpse042",
    "domain": "theories",
    "subdomain": "ACT",
    "difficulty": "medium",
    "question": "\"Experiential avoidance\" in ACT refers to:",
    "rationale": "Experiential avoidance = struggling against unwanted internal states (thoughts, feelings, sensations). ACT treats it as a primary driver of psychopathology — the attempt to avoid suffering causes more suffering than the experiences themselves.",
    "options": [
      {
        "id": "a",
        "text": "Avoiding painful memories through dissociation as used as the reference material frames it",
        "isCorrect": false,
        "rationale": "\"Avoiding painful memories through dissociation as used as th…\" is not what the item tests — Experiential avoidance = struggling against unwanted internal states (thoughts, feelings, sensations)."
      },
      {
        "id": "b",
        "text": "Efforts to suppress or escape unwanted internal experiences, even when doing so is harmful",
        "isCorrect": true,
        "rationale": "Experiential avoidance = struggling against unwanted internal states (thoughts, feelings, sensations)."
      },
      {
        "id": "c",
        "text": "Avoiding challenging therapeutic exercises in practice as the reference material frames it now",
        "isCorrect": false,
        "rationale": "\"Avoiding challenging therapeutic exercises in practice as th…\" is not what the item tests — Experiential avoidance = struggling against unwanted internal states (thoughts, feelings, sensations)."
      },
      {
        "id": "d",
        "text": "Behavioral avoidance of feared external situations now as the reference material frames it",
        "isCorrect": false,
        "rationale": "\"Behavioral avoidance of feared external situations now as th…\" is not what the item tests — Experiential avoidance = struggling against unwanted internal states (thoughts, feelings, sensations)."
      }
    ]
  },

  {
    "id": "tpse043",
    "domain": "theories",
    "subdomain": "ACT",
    "difficulty": "medium",
    "question": "ACT's \"values\" work is distinct from goal-setting because values are:",
    "rationale": "Values in ACT are ongoing directions (e.g., \"being loving,\" \"being courageous\") that can never be permanently completed — unlike goals. They provide the \"why\" behind committed action regardless of whether specific goals are achieved.",
    "options": [
      {
        "id": "a",
        "text": "Derived primarily from religious or cultural traditions today",
        "isCorrect": false,
        "rationale": "\"Derived primarily from religious or cultural traditions toda…\" is not what the item tests — Values in ACT are ongoing directions (e.g., \"being loving,\" \"being courageous\") that can never be permanently completed — unlike goals."
      },
      {
        "id": "b",
        "text": "Shorter-term and more concrete than goals at the intake stage",
        "isCorrect": false,
        "rationale": "\"Shorter-term and more concrete than goals at the intake stag…\" is not what the item tests — Values in ACT are ongoing directions (e.g., \"being loving,\" \"being courageous\") that can never be permanently completed — unlike goals."
      },
      {
        "id": "c",
        "text": "Ongoing directions of living rather than achievable endpoints",
        "isCorrect": true,
        "rationale": "Values in ACT are ongoing directions (e.g., \"being loving,\" \"being courageous\") that can never be permanently completed — unlike goals. They provide the \"why\" behind committed action regardless of whether specific goals are achieved."
      },
      {
        "id": "d",
        "text": "Determined by the therapist in collaboration with the client now",
        "isCorrect": false,
        "rationale": "\"Determined by the therapist in collaboration with the client…\" is not what the item tests — Values in ACT are ongoing directions (e.g., \"being loving,\" \"being courageous\") that can never be permanently completed — unlike goals."
      }
    ]
  },

  {
    "id": "tpse044",
    "domain": "theories",
    "subdomain": "DBT",
    "difficulty": "easy",
    "question": "DBT was originally developed to treat:",
    "rationale": "Marsha Linehan developed DBT specifically for chronically suicidal individuals with BPD who did not respond to standard CBT. It has since been adapted for eating disorders, substance use, and adolescent populations.",
    "options": [
      {
        "id": "a",
        "text": "Bipolar Disorder with rapid cycling as usually described",
        "isCorrect": false,
        "rationale": "\"Bipolar Disorder with rapid cycling as usually described\" is not what the item tests — Marsha Linehan developed DBT specifically for chronically suicidal individuals with BPD who did not respond to standard CBT."
      },
      {
        "id": "b",
        "text": "Major Depressive Disorder as clinicians typically apply it",
        "isCorrect": false,
        "rationale": "\"Major Depressive Disorder as clinicians typically apply it\" is not what the item tests — Marsha Linehan developed DBT specifically for chronically suicidal individuals with BPD who did not respond to standard CBT."
      },
      {
        "id": "c",
        "text": "Substance Use Disorders in adolescents during counseling",
        "isCorrect": false,
        "rationale": "\"Substance Use Disorders in adolescents during counseling\" is not what the item tests — Marsha Linehan developed DBT specifically for chronically suicidal individuals with BPD who did not respond to standard CBT."
      },
      {
        "id": "d",
        "text": "Borderline Personality Disorder with chronic suicidality",
        "isCorrect": true,
        "rationale": "Marsha Linehan developed DBT specifically for chronically suicidal individuals with BPD who did not respond to standard CBT. It has since been adapted for eating disorders, substance use, and adolescent populations."
      }
    ]
  },

  {
    "id": "tpse045",
    "domain": "theories",
    "subdomain": "DBT",
    "difficulty": "medium",
    "question": "The four skill modules in standard DBT are:",
    "rationale": "Standard DBT skills training: mindfulness (core), distress tolerance (crisis survival without making things worse), emotion regulation (reducing vulnerability and reactivity), and interpersonal effectiveness (DEARMAN, GIVE, FAST).",
    "options": [
      {
        "id": "a",
        "text": "Mindfulness, distress tolerance, emotion regulation, and interpersonal effectiveness",
        "isCorrect": true,
        "rationale": "Standard DBT skills training: mindfulness (core), distress tolerance (crisis survival without making things worse), emotion regulation (reducing vulnerability and reactivity), and interpersonal effectiveness (DEARMAN, GIVE, FAST)."
      },
      {
        "id": "b",
        "text": "Acceptance, defusion, values, and committed action as the reference material frames it",
        "isCorrect": false,
        "rationale": "\"Acceptance, defusion, values, and committed action as the re…\" is not what the item tests — Standard DBT skills training: mindfulness (core), distress tolerance (crisis survival without making things worse), emotion regulation (reducing vu"
      },
      {
        "id": "c",
        "text": "Safety, coping, problem-solving, and social skills as the reference material frames it",
        "isCorrect": false,
        "rationale": "\"Safety, coping, problem-solving, and social skills as the re…\" is not what the item tests — Standard DBT skills training: mindfulness (core), distress tolerance (crisis survival without making things worse), emotion regulation (reducing vu"
      },
      {
        "id": "d",
        "text": "Relaxation, cognitive restructuring, exposure, and assertiveness at the intake stage",
        "isCorrect": false,
        "rationale": "\"Relaxation, cognitive restructuring, exposure, and assertive…\" is not what the item tests — Standard DBT skills training: mindfulness (core), distress tolerance (crisis survival without making things worse), emotion regulation (reducing vu"
      }
    ]
  },

  {
    "id": "tpse046",
    "domain": "theories",
    "subdomain": "DBT",
    "difficulty": "hard",
    "question": "The biosocial model in DBT proposes that BPD develops from:",
    "rationale": "Linehan's biosocial theory: biological temperamental sensitivity (high emotional reactivity) + pervasive invalidating environment → failure to develop emotion regulation → BPD features. Neither biology nor environment alone is sufficient.",
    "options": [
      {
        "id": "a",
        "text": "Childhood trauma alone as clinicians typically apply it as the reference material frames it",
        "isCorrect": false,
        "rationale": "\"Childhood trauma alone as clinicians typically apply it as t…\" is not what the item tests — Linehan's biosocial theory: biological temperamental sensitivity (high emotional reactivity) + pervasive invalidating environment → failure to deve"
      },
      {
        "id": "b",
        "text": "Biological emotional sensitivity interacting with a pervasively invalidating environment",
        "isCorrect": true,
        "rationale": "Linehan's biosocial theory: biological temperamental sensitivity (high emotional reactivity) + pervasive invalidating environment → failure to develop emotion regulation → BPD features. Neither biology nor environment alone is sufficient."
      },
      {
        "id": "c",
        "text": "Genetic factors and neurological abnormalities alone as the reference material frames it",
        "isCorrect": false,
        "rationale": "\"Genetic factors and neurological abnormalities alone as the …\" is not what the item tests — Linehan's biosocial theory: biological temperamental sensitivity (high emotional reactivity) + pervasive invalidating environment → failure to deve"
      },
      {
        "id": "d",
        "text": "Attachment disruptions exclusively in the first year of life at the level the item tests",
        "isCorrect": false,
        "rationale": "\"Attachment disruptions exclusively in the first year of life…\" is not what the item tests — Linehan's biosocial theory: biological temperamental sensitivity (high emotional reactivity) + pervasive invalidating environment → failure to deve"
      }
    ]
  },

  {
    "id": "tpse047",
    "domain": "theories",
    "subdomain": "Psychodynamic",
    "difficulty": "medium",
    "question": "Freud's structural model divides the psyche into:",
    "rationale": "Freud's structural model (1923): Id (primitive drives/pleasure principle), Ego (reality principle, mediates id/superego/reality), Superego (internalized moral standards). This replaced the earlier topographical model (conscious/preconscious/unconscious).",
    "options": [
      {
        "id": "a",
        "text": "Conscious, preconscious, and unconscious",
        "isCorrect": false,
        "rationale": "\"Conscious, preconscious, and unconscious\" is not what the item tests — Freud's structural model (1923): Id (primitive drives/pleasure principle), Ego (reality principle, mediates id/superego/reality), Superego (internalized moral standards"
      },
      {
        "id": "b",
        "text": "Instinct, defense, and reality (drives)",
        "isCorrect": false,
        "rationale": "\"Instinct, defense, and reality\" is not what the item tests — Freud's structural model (1923): Id (primitive drives/pleasure principle), Ego (reality principle, mediates id/superego/reality), Superego (internalized moral standards)."
      },
      {
        "id": "c",
        "text": "The id, ego, and superego (Freud)",
        "isCorrect": true,
        "rationale": "Freud's structural model (1923): Id (primitive drives/pleasure principle), Ego (reality principle, mediates id/superego/reality), Superego (internalized moral standards)."
      },
      {
        "id": "d",
        "text": "Drive, object, and self (relational)",
        "isCorrect": false,
        "rationale": "\"Drive, object, and self\" is not what the item tests — Freud's structural model (1923): Id (primitive drives/pleasure principle), Ego (reality principle, mediates id/superego/reality), Superego (internalized moral standards)."
      }
    ]
  },

  {
    "id": "tpse048",
    "domain": "theories",
    "subdomain": "Psychodynamic",
    "difficulty": "medium",
    "question": "\"Transference\" in psychoanalytic therapy refers to:",
    "rationale": "Transference = the client projects feelings, expectations, and relational patterns from significant past relationships onto the therapist. Analysis of transference is a central therapeutic tool in psychodynamic work.",
    "options": [
      {
        "id": "a",
        "text": "The process of moving from one therapeutic insight to another at the intake stage",
        "isCorrect": false,
        "rationale": "\"The process of moving from one therapeutic insight to anothe…\" is not what the item tests — Transference = the client projects feelings, expectations, and relational patterns from significant past relationships onto the therapist."
      },
      {
        "id": "b",
        "text": "The therapist's emotional reaction to the client as clinicians typically apply it",
        "isCorrect": false,
        "rationale": "\"The therapist's emotional reaction to the client as clinicia…\" is not what the item tests — Transference = the client projects feelings, expectations, and relational patterns from significant past relationships onto the therapist."
      },
      {
        "id": "c",
        "text": "The transfer of skills learned in therapy to daily life during a routine session",
        "isCorrect": false,
        "rationale": "\"The transfer of skills learned in therapy to daily life duri…\" is not what the item tests — Transference = the client projects feelings, expectations, and relational patterns from significant past relationships onto the therapist."
      },
      {
        "id": "d",
        "text": "The client's displacement of feelings from past relationships onto the therapist",
        "isCorrect": true,
        "rationale": "Transference = the client projects feelings, expectations, and relational patterns from significant past relationships onto the therapist. Analysis of transference is a central therapeutic tool in psychodynamic work."
      }
    ]
  },

  {
    "id": "tpse049",
    "domain": "theories",
    "subdomain": "Psychodynamic",
    "difficulty": "hard",
    "question": "The defense mechanism of \"reaction formation\" involves:",
    "rationale": "Reaction formation transforms an unacceptable impulse into its opposite (e.g., intense hatred expressed as exaggerated love). It is recognized by its rigid, exaggerated quality. Projection = attributing to others; conversion = physical symptoms; regression = earlier stage.",
    "options": [
      {
        "id": "a",
        "text": "Expressing the opposite of an unacceptable impulse",
        "isCorrect": true,
        "rationale": "Reaction formation transforms an unacceptable impulse into its opposite (e.g., intense hatred expressed as exaggerated love)."
      },
      {
        "id": "b",
        "text": "Returning to an earlier developmental stage under stress",
        "isCorrect": false,
        "rationale": "\"Returning to an earlier developmental stage under stress\" is not what the item tests — Reaction formation transforms an unacceptable impulse into its opposite (e.g., intense hatred expressed as exaggerated love)."
      },
      {
        "id": "c",
        "text": "Converting anxiety into physical symptoms at intake",
        "isCorrect": false,
        "rationale": "\"Converting anxiety into physical symptoms at intake\" is not what the item tests — Reaction formation transforms an unacceptable impulse into its opposite (e.g., intense hatred expressed as exaggerated love)."
      },
      {
        "id": "d",
        "text": "Attributing one's own unacceptable impulses to others",
        "isCorrect": false,
        "rationale": "\"Attributing one's own unacceptable impulses to others\" is not what the item tests — Reaction formation transforms an unacceptable impulse into its opposite (e.g., intense hatred expressed as exaggerated love)."
      }
    ]
  },

  {
    "id": "tpse050",
    "domain": "theories",
    "subdomain": "Psychodynamic",
    "difficulty": "medium",
    "question": "Object relations theory focuses primarily on:",
    "rationale": "Object relations (Winnicott, Klein, Kernberg, Fairbairn): \"objects\" = mental representations of people. Internal object representations — formed in early relationships — serve as templates for all subsequent relationship patterns and self-experience.",
    "options": [
      {
        "id": "a",
        "text": "The relationship between biological drives and their satisfaction in this domain",
        "isCorrect": false,
        "rationale": "\"The relationship between biological drives and their satisfa…\" is not what the item tests — Object relations (Winnicott, Klein, Kernberg, Fairbairn): \"objects\" = mental representations of people."
      },
      {
        "id": "b",
        "text": "Internalized representations of self and others that shape current relationships",
        "isCorrect": true,
        "rationale": "Object relations (Winnicott, Klein, Kernberg, Fairbairn): \"objects\" = mental representations of people."
      },
      {
        "id": "c",
        "text": "The structural components of id, ego, and superego as clinicians typically apply it",
        "isCorrect": false,
        "rationale": "\"The structural components of id, ego, and superego as clinic…\" is not what the item tests — Object relations (Winnicott, Klein, Kernberg, Fairbairn): \"objects\" = mental representations of people."
      },
      {
        "id": "d",
        "text": "The client's relationship with inanimate objects of importance during counseling",
        "isCorrect": false,
        "rationale": "\"The client's relationship with inanimate objects of importan…\" is not what the item tests — Object relations (Winnicott, Klein, Kernberg, Fairbairn): \"objects\" = mental representations of people."
      }
    ]
  },

  {
    "id": "tpse051",
    "domain": "pioneers",
    "subdomain": "Freud",
    "difficulty": "easy",
    "question": "Sigmund Freud is credited with founding:",
    "rationale": "Sigmund Freud (1856–1939) founded psychoanalysis — the first formal system of psychotherapy, emphasizing unconscious processes, defense mechanisms, dream analysis, and free association as the primary method.",
    "options": [
      {
        "id": "a",
        "text": "Humanistic psychology",
        "isCorrect": false,
        "rationale": "\"Humanistic psychology\" is not what the item tests — Sigmund Freud (1856–1939) founded psychoanalysis — the first formal system of psychotherapy, emphasizing unconscious processes, defense mechanisms, dream analysis, and free association as"
      },
      {
        "id": "b",
        "text": "Behavioral therapy",
        "isCorrect": false,
        "rationale": "\"Behavioral therapy\" is not what the item tests — Sigmund Freud (1856–1939) founded psychoanalysis — the first formal system of psychotherapy, emphasizing unconscious processes, defense mechanisms, dream analysis, and free association as th"
      },
      {
        "id": "c",
        "text": "Psychoanalysis",
        "isCorrect": true,
        "rationale": "Sigmund Freud (1856–1939) founded psychoanalysis — the first formal system of psychotherapy, emphasizing unconscious processes, defense mechanisms, dream analysis, and free association as the primary method."
      },
      {
        "id": "d",
        "text": "Rational Emotive Behavior Therapy",
        "isCorrect": false,
        "rationale": "\"Rational Emotive Behavior Therapy\" is not what the item tests — Sigmund Freud (1856–1939) founded psychoanalysis — the first formal system of psychotherapy, emphasizing unconscious processes, defense mechanisms, dream analysis, and free as"
      }
    ]
  },

  {
    "id": "tpse052",
    "domain": "pioneers",
    "subdomain": "Freud",
    "difficulty": "medium",
    "question": "Freud's psychosexual stages of development, in correct order, are:",
    "rationale": "Freud's psychosexual stages: oral (0–18 mo) → anal (18 mo–3 yr) → phallic/Oedipal (3–6 yr) → latency (6–12 yr) → genital (puberty+). Fixation at any stage creates characteristic adult personality patterns. The last option = Erikson's stages.",
    "options": [
      {
        "id": "a",
        "text": "Oral, phallic, anal, latency, genital",
        "isCorrect": false,
        "rationale": "\"Oral, phallic, anal, latency, genital\" is not what the item tests — Freud's psychosexual stages: oral (0–18 mo) → anal (18 mo–3 yr) → phallic/Oedipal (3–6 yr) → latency (6–12 yr) → genital (puberty+)."
      },
      {
        "id": "b",
        "text": "Oral, anal, genital, latency, phallic",
        "isCorrect": false,
        "rationale": "\"Oral, anal, genital, latency, phallic\" is not what the item tests — Freud's psychosexual stages: oral (0–18 mo) → anal (18 mo–3 yr) → phallic/Oedipal (3–6 yr) → latency (6–12 yr) → genital (puberty+)."
      },
      {
        "id": "c",
        "text": "Trust, autonomy, initiative, industry",
        "isCorrect": false,
        "rationale": "\"Trust, autonomy, initiative, industry, identity\" is not what the item tests — Freud's psychosexual stages: oral (0–18 mo) → anal (18 mo–3 yr) → phallic/Oedipal (3–6 yr) → latency (6–12 yr) → genital (puberty+)."
      },
      {
        "id": "d",
        "text": "Oral, anal, phallic, latency, genital",
        "isCorrect": true,
        "rationale": "Freud's psychosexual stages: oral (0–18 mo) → anal (18 mo–3 yr) → phallic/Oedipal (3–6 yr) → latency (6–12 yr) → genital (puberty+)."
      }
    ]
  },

  {
    "id": "tpse053",
    "domain": "pioneers",
    "subdomain": "Freud",
    "difficulty": "hard",
    "question": "The Oedipus complex in Freudian theory involves:",
    "rationale": "Oedipus complex (phallic stage): boy develops desire for mother, views father as rival, develops castration anxiety, and resolves through identification with father and superego internalization. Electra complex is the female analog.",
    "options": [
      {
        "id": "a",
        "text": "Unconscious desire for the opposite-sex parent and rivalry with the same-sex parent",
        "isCorrect": true,
        "rationale": "Oedipus complex (phallic stage): boy develops desire for mother, views father as rival, develops castration anxiety, and resolves through identification with father and superego internalization. Electra complex is the female analog."
      },
      {
        "id": "b",
        "text": "Sexual attraction to the parent of the same sex as the reference material frames it",
        "isCorrect": false,
        "rationale": "\"Sexual attraction to the parent of the same sex as the refer…\" is not what the item tests — Oedipus complex (phallic stage): boy develops desire for mother, views father as rival, develops castration anxiety, and resolves through identific"
      },
      {
        "id": "c",
        "text": "Fear of punishment for sexual feelings toward peers as clinicians typically apply it",
        "isCorrect": false,
        "rationale": "\"Fear of punishment for sexual feelings toward peers as clini…\" is not what the item tests — Oedipus complex (phallic stage): boy develops desire for mother, views father as rival, develops castration anxiety, and resolves through identific"
      },
      {
        "id": "d",
        "text": "Identification with the aggressor to manage castration anxiety as usually described",
        "isCorrect": false,
        "rationale": "\"Identification with the aggressor to manage castration anxie…\" is not what the item tests — Oedipus complex (phallic stage): boy develops desire for mother, views father as rival, develops castration anxiety, and resolves through identific"
      }
    ]
  },

  {
    "id": "tpse054",
    "domain": "pioneers",
    "subdomain": "Rogers",
    "difficulty": "easy",
    "question": "Carl Rogers developed which therapeutic approach?",
    "rationale": "Carl Rogers (1902–1987) developed Client-Centered Therapy (later Person-Centered Therapy). He emphasized the therapeutic relationship over technique and the client's inherent capacity for self-directed growth.",
    "options": [
      {
        "id": "a",
        "text": "Existential therapy",
        "isCorrect": false,
        "rationale": "\"Existential therapy\" is not what the item tests — Carl Rogers (1902–1987) developed Client-Centered Therapy (later Person-Centered Therapy)."
      },
      {
        "id": "b",
        "text": "Person-centered therapy",
        "isCorrect": true,
        "rationale": "Carl Rogers (1902–1987) developed Client-Centered Therapy (later Person-Centered Therapy). He emphasized the therapeutic relationship over technique and the client's inherent capacity for self-directed growth."
      },
      {
        "id": "c",
        "text": "Gestalt therapy",
        "isCorrect": false,
        "rationale": "\"Gestalt therapy\" is not what the item tests — Carl Rogers (1902–1987) developed Client-Centered Therapy (later Person-Centered Therapy)."
      },
      {
        "id": "d",
        "text": "Cognitive therapy",
        "isCorrect": false,
        "rationale": "\"Cognitive therapy\" is not what the item tests — Carl Rogers (1902–1987) developed Client-Centered Therapy (later Person-Centered Therapy)."
      }
    ]
  },

  {
    "id": "tpse055",
    "domain": "pioneers",
    "subdomain": "Rogers",
    "difficulty": "medium",
    "question": "Rogers changed \"nondirective therapy\" to \"client-centered therapy\" primarily to emphasize:",
    "rationale": "Rogers shifted from defining the approach by what it wasn't (\"nondirective\") to defining it positively — centering the client's experience and their inherent actualizing capacity as the driving force of change.",
    "options": [
      {
        "id": "a",
        "text": "The absence of any therapeutic technique in the approach as clinicians typically apply it",
        "isCorrect": false,
        "rationale": "\"The absence of any therapeutic technique in the approach as …\" is not what the item tests — Rogers shifted from defining the approach by what it wasn't (\"nondirective\") to defining it positively — centering the client's experience and thei"
      },
      {
        "id": "b",
        "text": "The removal of diagnosis from the therapeutic process as the reference material frames it",
        "isCorrect": false,
        "rationale": "\"The removal of diagnosis from the therapeutic process as the…\" is not what the item tests — Rogers shifted from defining the approach by what it wasn't (\"nondirective\") to defining it positively — centering the client's experience and thei"
      },
      {
        "id": "c",
        "text": "The client's capacity for self-direction rather than only the therapist's non-direction",
        "isCorrect": true,
        "rationale": "Rogers shifted from defining the approach by what it wasn't (\"nondirective\") to defining it positively — centering the client's experience and their inherent actualizing capacity as the driving force of change."
      },
      {
        "id": "d",
        "text": "The therapist's complete lack of directional influence as clinicians typically apply it",
        "isCorrect": false,
        "rationale": "\"The therapist's complete lack of directional influence as cl…\" is not what the item tests — Rogers shifted from defining the approach by what it wasn't (\"nondirective\") to defining it positively — centering the client's experience and thei"
      }
    ]
  },

  {
    "id": "tpse056",
    "domain": "pioneers",
    "subdomain": "Rogers",
    "difficulty": "hard",
    "question": "Rogers' empirical contributions to psychotherapy research are notable because he:",
    "rationale": "Rogers was a pioneer in empirically studying the therapy process — recording actual sessions (unprecedented at the time) and analyzing them systematically. This opened psychotherapy to scientific investigation for the first time.",
    "options": [
      {
        "id": "a",
        "text": "Developed the first standardized client outcome measures in this domain",
        "isCorrect": false,
        "rationale": "\"Developed the first standardized client outcome measures in …\" is not what the item tests — Rogers was a pioneer in empirically studying the therapy process — recording actual sessions (unprecedented at the time) and analyzing them systema"
      },
      {
        "id": "b",
        "text": "Was the first to use randomized controlled trials in psychotherapy research",
        "isCorrect": false,
        "rationale": "\"Was the first to use randomized controlled trials in psychot…\" is not what the item tests — Rogers was a pioneer in empirically studying the therapy process — recording actual sessions (unprecedented at the time) and analyzing them systema"
      },
      {
        "id": "c",
        "text": "Founded the first APA-accredited counseling psychology training program",
        "isCorrect": false,
        "rationale": "\"Founded the first APA-accredited counseling psychology train…\" is not what the item tests — Rogers was a pioneer in empirically studying the therapy process — recording actual sessions (unprecedented at the time) and analyzing them systema"
      },
      {
        "id": "d",
        "text": "Pioneered recording and systematically studying actual therapy sessions",
        "isCorrect": true,
        "rationale": "Rogers was a pioneer in empirically studying the therapy process — recording actual sessions (unprecedented at the time) and analyzing them systematically. This opened psychotherapy to scientific investigation for the first time."
      }
    ]
  },

  {
    "id": "tpse057",
    "domain": "pioneers",
    "subdomain": "Ellis",
    "difficulty": "easy",
    "question": "Albert Ellis developed:",
    "rationale": "Albert Ellis (1913–2007) developed REBT (originally called Rational Therapy, then Rational-Emotive Therapy). It is one of the earliest cognitive approaches to psychotherapy, predating Beck's cognitive therapy.",
    "options": [
      {
        "id": "a",
        "text": "Rational Emotive Behavior Therapy (REBT)",
        "isCorrect": true,
        "rationale": "Albert Ellis (1913–2007) developed REBT (originally called Rational Therapy, then Rational-Emotive Therapy). It is one of the earliest cognitive approaches to psychotherapy, predating Beck's cognitive therapy."
      },
      {
        "id": "b",
        "text": "Acceptance and Commitment Therapy (ACT) now",
        "isCorrect": false,
        "rationale": "\"Acceptance and Commitment Therapy (ACT) now\" is not what the item tests — Albert Ellis (1913–2007) developed REBT (originally called Rational Therapy, then Rational-Emotive Therapy)."
      },
      {
        "id": "c",
        "text": "Reality Therapy during a routine session",
        "isCorrect": false,
        "rationale": "\"Reality Therapy during a routine session\" is not what the item tests — Albert Ellis (1913–2007) developed REBT (originally called Rational Therapy, then Rational-Emotive Therapy)."
      },
      {
        "id": "d",
        "text": "Cognitive Therapy (CT) during counseling",
        "isCorrect": false,
        "rationale": "\"Cognitive Therapy (CT) during counseling\" is not what the item tests — Albert Ellis (1913–2007) developed REBT (originally called Rational Therapy, then Rational-Emotive Therapy)."
      }
    ]
  },

  {
    "id": "tpse058",
    "domain": "pioneers",
    "subdomain": "Ellis",
    "difficulty": "medium",
    "question": "Ellis identified which category of irrational beliefs as most fundamental?",
    "rationale": "Ellis considered demandingness (musturbation) the primary irrational belief, with awfulizing, low frustration tolerance, and global self-rating as secondary derivatives that follow from absolutistic demands.",
    "options": [
      {
        "id": "a",
        "text": "Global self-rating and human worth judgments at intake",
        "isCorrect": false,
        "rationale": "\"Global self-rating and human worth judgments at intake\" is not what the item tests — Ellis considered demandingness (musturbation) the primary irrational belief, with awfulizing, low frustration tolerance, and global self-rating as seconda"
      },
      {
        "id": "b",
        "text": "Demandingness — absolute musts, shoulds, and have-tos",
        "isCorrect": true,
        "rationale": "Ellis considered demandingness (musturbation) the primary irrational belief, with awfulizing, low frustration tolerance, and global self-rating as secondary derivatives that follow from absolutistic demands."
      },
      {
        "id": "c",
        "text": "Low frustration tolerance at the level the item tests",
        "isCorrect": false,
        "rationale": "\"Low frustration tolerance at the level the item tests\" is not what the item tests — Ellis considered demandingness (musturbation) the primary irrational belief, with awfulizing, low frustration tolerance, and global self-rating as secondar"
      },
      {
        "id": "d",
        "text": "Catastrophizing and awfulizing during a routine session",
        "isCorrect": false,
        "rationale": "\"Catastrophizing and awfulizing during a routine session\" is not what the item tests — Ellis considered demandingness (musturbation) the primary irrational belief, with awfulizing, low frustration tolerance, and global self-rating as second"
      }
    ]
  },

  {
    "id": "tpse059",
    "domain": "pioneers",
    "subdomain": "Beck",
    "difficulty": "easy",
    "question": "Aaron Beck is best known for developing:",
    "rationale": "Aaron Beck (1921–2021) developed Cognitive Therapy (CT) originally for depression, later expanded to anxiety, personality disorders, and psychosis. His hierarchical model is the basis for modern CBT.",
    "options": [
      {
        "id": "a",
        "text": "Dialectical Behavior Therapy at the intake stage",
        "isCorrect": false,
        "rationale": "\"Dialectical Behavior Therapy at the intake stage\" is not what the item tests — Aaron Beck (1921–2021) developed Cognitive Therapy (CT) originally for depression, later expanded to anxiety, personality disorders, and psychosis."
      },
      {
        "id": "b",
        "text": "Rational Emotive Behavior Therapy in this domain",
        "isCorrect": false,
        "rationale": "\"Rational Emotive Behavior Therapy in this domain\" is not what the item tests — Aaron Beck (1921–2021) developed Cognitive Therapy (CT) originally for depression, later expanded to anxiety, personality disorders, and psychosis."
      },
      {
        "id": "c",
        "text": "Cognitive Therapy / Cognitive Behavioral Therapy",
        "isCorrect": true,
        "rationale": "Aaron Beck (1921–2021) developed Cognitive Therapy (CT) originally for depression, later expanded to anxiety, personality disorders, and psychosis. His hierarchical model is the basis for modern CBT."
      },
      {
        "id": "d",
        "text": "Schema Therapy as the reference material frames it",
        "isCorrect": false,
        "rationale": "\"Schema Therapy as the reference material frames it\" is not what the item tests — Aaron Beck (1921–2021) developed Cognitive Therapy (CT) originally for depression, later expanded to anxiety, personality disorders, and psychosis."
      }
    ]
  },

  {
    "id": "tpse060",
    "domain": "pioneers",
    "subdomain": "Beck",
    "difficulty": "medium",
    "question": "Beck's cognitive therapy grew from his research on:",
    "rationale": "Beck initially researched depression while practicing psychoanalysis. He expected to find 'inverted hostility' (Freudian), but instead found consistent negative cognitive patterns, leading to the cognitive model of depression.",
    "options": [
      {
        "id": "a",
        "text": "Schizophrenia and the cognitive role of delusions as clinicians typically apply it",
        "isCorrect": false,
        "rationale": "\"Schizophrenia and the cognitive role of delusions as clinici…\" is not what the item tests — Beck initially researched depression while practicing psychoanalysis."
      },
      {
        "id": "b",
        "text": "Anxiety disorders and their physiological correlates at the level the item tests",
        "isCorrect": false,
        "rationale": "\"Anxiety disorders and their physiological correlates at the …\" is not what the item tests — Beck initially researched depression while practicing psychoanalysis."
      },
      {
        "id": "c",
        "text": "Personality disorders and schema development as the reference material frames it",
        "isCorrect": false,
        "rationale": "\"Personality disorders and schema development as the referenc…\" is not what the item tests — Beck initially researched depression while practicing psychoanalysis."
      },
      {
        "id": "d",
        "text": "Depression and his challenge of the psychoanalytic 'need for punishment' theory",
        "isCorrect": true,
        "rationale": "Beck initially researched depression while practicing psychoanalysis. He expected to find 'inverted hostility' (Freudian), but instead found consistent negative cognitive patterns, leading to the cognitive model of depression."
      }
    ]
  },

  {
    "id": "tpse061",
    "domain": "pioneers",
    "subdomain": "Perls",
    "difficulty": "medium",
    "question": "Fritz Perls developed Gestalt therapy in collaboration with:",
    "rationale": "Fritz Perls co-developed Gestalt therapy with his wife Laura Perls and philosopher Paul Goodman, detailed in their 1951 text 'Gestalt Therapy.' Watzlawick/Jackson = communication theory; Adler/Dreikurs = Adlerian approach.",
    "options": [
      {
        "id": "a",
        "text": "Laura Perls and Paul Goodman",
        "isCorrect": true,
        "rationale": "Fritz Perls co-developed Gestalt therapy with his wife Laura Perls and philosopher Paul Goodman, detailed in their 1951 text 'Gestalt Therapy.' Watzlawick/Jackson = communication theory; Adler/Dreikurs = Adlerian approach."
      },
      {
        "id": "b",
        "text": "Paul Watzlawick and Don Jackson",
        "isCorrect": false,
        "rationale": "\"Paul Watzlawick and Don Jackson\" is not what the item tests — Fritz Perls co-developed Gestalt therapy with his wife Laura Perls and philosopher Paul Goodman, detailed in their 1951 text 'Gestalt Therapy.' Watzlawick/Jackson = communicatio"
      },
      {
        "id": "c",
        "text": "Alfred Adler and Rudolf Dreikurs",
        "isCorrect": false,
        "rationale": "\"Alfred Adler and Rudolf Dreikurs\" is not what the item tests — Fritz Perls co-developed Gestalt therapy with his wife Laura Perls and philosopher Paul Goodman, detailed in their 1951 text 'Gestalt Therapy.' Watzlawick/Jackson = communicati"
      },
      {
        "id": "d",
        "text": "John Bowlby and Mary Ainsworth",
        "isCorrect": false,
        "rationale": "\"John Bowlby and Mary Ainsworth\" is not what the item tests — Fritz Perls co-developed Gestalt therapy with his wife Laura Perls and philosopher Paul Goodman, detailed in their 1951 text 'Gestalt Therapy.' Watzlawick/Jackson = communication"
      }
    ]
  },

  {
    "id": "tpse062",
    "domain": "pioneers",
    "subdomain": "Perls",
    "difficulty": "hard",
    "question": "Perls's Gestalt Prayer (\"I do my thing and you do your thing...\") reflects the Gestalt value of:",
    "rationale": "The Gestalt Prayer emphasizes personal responsibility and authentic contact — refusing to be responsible for others' fulfillment or to expect them to fulfill yours. Contact happens when both are genuine, not when one is performing for the other.",
    "options": [
      {
        "id": "a",
        "text": "Individual achievement prioritized over community as the reference material frames it",
        "isCorrect": false,
        "rationale": "\"Individual achievement prioritized over community as the ref…\" is not what the item tests — The Gestalt Prayer emphasizes personal responsibility and authentic contact — refusing to be responsible for others' fulfillment or to expect them "
      },
      {
        "id": "b",
        "text": "Responsibility for one's own experience rather than living for others' expectations",
        "isCorrect": true,
        "rationale": "The Gestalt Prayer emphasizes personal responsibility and authentic contact — refusing to be responsible for others' fulfillment or to expect them to fulfill yours."
      },
      {
        "id": "c",
        "text": "Emotional detachment from intimate relationships as the reference material frames it",
        "isCorrect": false,
        "rationale": "\"Emotional detachment from intimate relationships as the refe…\" is not what the item tests — The Gestalt Prayer emphasizes personal responsibility and authentic contact — refusing to be responsible for others' fulfillment or to expect them "
      },
      {
        "id": "d",
        "text": "Avoiding all forms of personal commitment today as the reference material frames it",
        "isCorrect": false,
        "rationale": "\"Avoiding all forms of personal commitment today as the refer…\" is not what the item tests — The Gestalt Prayer emphasizes personal responsibility and authentic contact — refusing to be responsible for others' fulfillment or to expect them "
      }
    ]
  },

  {
    "id": "tpse063",
    "domain": "pioneers",
    "subdomain": "Glasser",
    "difficulty": "medium",
    "question": "William Glasser is associated with:",
    "rationale": "William Glasser (1925–2013) developed Reality Therapy and later Choice Theory. Central premise: we choose our behaviors to meet five basic needs — survival, love/belonging, power/achievement, freedom, and fun.",
    "options": [
      {
        "id": "a",
        "text": "Logotherapy",
        "isCorrect": false,
        "rationale": "\"Logotherapy\" is not what the item tests — William Glasser (1925–2013) developed Reality Therapy and later Choice Theory."
      },
      {
        "id": "b",
        "text": "Acceptance and Commitment Therapy",
        "isCorrect": false,
        "rationale": "\"Acceptance and Commitment Therapy\" is not what the item tests — William Glasser (1925–2013) developed Reality Therapy and later Choice Theory."
      },
      {
        "id": "c",
        "text": "Reality Therapy / Choice Theory",
        "isCorrect": true,
        "rationale": "William Glasser (1925–2013) developed Reality Therapy and later Choice Theory. Central premise: we choose our behaviors to meet five basic needs — survival, love/belonging, power/achievement, freedom, and fun."
      },
      {
        "id": "d",
        "text": "Structural family therapy",
        "isCorrect": false,
        "rationale": "\"Structural family therapy\" is not what the item tests — William Glasser (1925–2013) developed Reality Therapy and later Choice Theory."
      }
    ]
  },

  {
    "id": "tpse064",
    "domain": "pioneers",
    "subdomain": "Glasser",
    "difficulty": "hard",
    "question": "In Glasser's Choice Theory, the WDEP system stands for:",
    "rationale": "WDEP (Wubbolding's Reality Therapy delivery system): Wants (what do you want?), Doing (what are you doing?), Evaluation (is what you're doing helping you get what you want?), Planning (concrete plan for change).",
    "options": [
      {
        "id": "a",
        "text": "Worth, Direction, Exploration, Process",
        "isCorrect": false,
        "rationale": "\"Worth, Direction, Exploration, Process\" is not what the item tests — WDEP (Wubbolding's Reality Therapy delivery system): Wants (what do you want?), Doing (what are you doing?), Evaluation (is what you're doing helping you get what you wan"
      },
      {
        "id": "b",
        "text": "Wishes, Decisions, Effectiveness, Progress",
        "isCorrect": false,
        "rationale": "\"Wishes, Decisions, Effectiveness, Progress\" is not what the item tests — WDEP (Wubbolding's Reality Therapy delivery system): Wants (what do you want?), Doing (what are you doing?), Evaluation (is what you're doing helping you get what you"
      },
      {
        "id": "c",
        "text": "Wellness, Drive, Engagement, Performance",
        "isCorrect": false,
        "rationale": "\"Wellness, Drive, Engagement, Performance\" is not what the item tests — WDEP (Wubbolding's Reality Therapy delivery system): Wants (what do you want?), Doing (what are you doing?), Evaluation (is what you're doing helping you get what you w"
      },
      {
        "id": "d",
        "text": "Wants, Doing, Evaluation, Planning",
        "isCorrect": true,
        "rationale": "WDEP (Wubbolding's Reality Therapy delivery system): Wants (what do you want?), Doing (what are you doing?), Evaluation (is what you're doing helping you get what you want?), Planning (concrete plan for change)."
      }
    ]
  },

  {
    "id": "tpse065",
    "domain": "pioneers",
    "subdomain": "Frankl",
    "difficulty": "easy",
    "question": "Viktor Frankl developed logotherapy from his experiences:",
    "rationale": "Frankl (1905–1997) survived Auschwitz, Dachau, and other camps. His observations about who survived — those who maintained meaning — informed logotherapy's core premise. Documented in 'Man's Search for Meaning' (1946).",
    "options": [
      {
        "id": "a",
        "text": "In Nazi concentration camps during World War II",
        "isCorrect": true,
        "rationale": "Frankl (1905–1997) survived Auschwitz, Dachau, and other camps. His observations about who survived — those who maintained meaning — informed logotherapy's core premise. Documented in 'Man's Search for Meaning' (1946)."
      },
      {
        "id": "b",
        "text": "As a student of Freud in Vienna during counseling",
        "isCorrect": false,
        "rationale": "\"As a student of Freud in Vienna during counseling\" is not what the item tests — Frankl (1905–1997) survived Auschwitz, Dachau, and other camps."
      },
      {
        "id": "c",
        "text": "As a military psychiatrist during the Korean War",
        "isCorrect": false,
        "rationale": "\"As a military psychiatrist during the Korean War\" is not what the item tests — Frankl (1905–1997) survived Auschwitz, Dachau, and other camps."
      },
      {
        "id": "d",
        "text": "Working with schizophrenic patients in a state hospital",
        "isCorrect": false,
        "rationale": "\"Working with schizophrenic patients in a state hospital\" is not what the item tests — Frankl (1905–1997) survived Auschwitz, Dachau, and other camps."
      }
    ]
  },

  {
    "id": "tpse066",
    "domain": "pioneers",
    "subdomain": "Frankl",
    "difficulty": "medium",
    "question": "Frankl's technique of \"paradoxical intention\" involves:",
    "rationale": "Paradoxical intention: client humorously intends to do the very thing they fear (e.g., someone fearing they'll sweat is instructed to 'try to sweat as much as possible'). This breaks the anticipatory anxiety feedback loop through humor and detachment.",
    "options": [
      {
        "id": "a",
        "text": "Encouraging clients to intensify their fear response deliberately as the reference material frames it",
        "isCorrect": false,
        "rationale": "\"Encouraging clients to intensify their fear response deliber…\" is not what the item tests — Paradoxical intention: client humorously intends to do the very thing they fear (e.g., someone fearing they'll sweat is instructed to 'try to sweat"
      },
      {
        "id": "b",
        "text": "Having clients humorously intend or wish for what they fear, breaking the anticipatory anxiety cycle",
        "isCorrect": true,
        "rationale": "Paradoxical intention: client humorously intends to do the very thing they fear (e.g., someone fearing they'll sweat is instructed to 'try to sweat as much as possible')."
      },
      {
        "id": "c",
        "text": "Setting goals opposite to stated desires to expose ambivalence now as the reference material frames it",
        "isCorrect": false,
        "rationale": "\"Setting goals opposite to stated desires to expose ambivalen…\" is not what the item tests — Paradoxical intention: client humorously intends to do the very thing they fear (e.g., someone fearing they'll sweat is instructed to 'try to sweat"
      },
      {
        "id": "d",
        "text": "Intentionally creating paradoxical situations to bypass defensive thinking in the outpatient setting",
        "isCorrect": false,
        "rationale": "\"Intentionally creating paradoxical situations to bypass defe…\" is not what the item tests — Paradoxical intention: client humorously intends to do the very thing they fear (e.g., someone fearing they'll sweat is instructed to 'try to sweat"
      }
    ]
  },

  {
    "id": "tpse067",
    "domain": "pioneers",
    "subdomain": "Satir",
    "difficulty": "medium",
    "question": "Virginia Satir is primarily associated with:",
    "rationale": "Virginia Satir (1916–1988) pioneered humanistic/experiential family therapy, focusing on communication patterns, self-esteem, and family sculpting. Structural = Minuchin; strategic = Haley/Madanes; intergenerational = Bowen.",
    "options": [
      {
        "id": "a",
        "text": "Intergenerational family therapy",
        "isCorrect": false,
        "rationale": "\"Intergenerational family therapy\" is not what the item tests — Virginia Satir (1916–1988) pioneered humanistic/experiential family therapy, focusing on communication patterns, self-esteem, and family sculpting."
      },
      {
        "id": "b",
        "text": "Structural family therapy",
        "isCorrect": false,
        "rationale": "\"Structural family therapy\" is not what the item tests — Virginia Satir (1916–1988) pioneered humanistic/experiential family therapy, focusing on communication patterns, self-esteem, and family sculpting."
      },
      {
        "id": "c",
        "text": "Humanistic/experiential family therapy",
        "isCorrect": true,
        "rationale": "Virginia Satir (1916–1988) pioneered humanistic/experiential family therapy, focusing on communication patterns, self-esteem, and family sculpting. Structural = Minuchin; strategic = Haley/Madanes; intergenerational = Bowen."
      },
      {
        "id": "d",
        "text": "Strategic family therapy",
        "isCorrect": false,
        "rationale": "\"Strategic family therapy\" is not what the item tests — Virginia Satir (1916–1988) pioneered humanistic/experiential family therapy, focusing on communication patterns, self-esteem, and family sculpting."
      }
    ]
  },

  {
    "id": "tpse068",
    "domain": "pioneers",
    "subdomain": "Satir",
    "difficulty": "hard",
    "question": "Satir identified four dysfunctional communication stances people adopt under stress. Which list is correct?",
    "rationale": "Satir's four survival stances: Placater (self-discounts to appease), Blamer (discounts others), Super-Reasonable/Computer (context-focused, emotionally disconnected), Irrelevant/Distractor (discounts everything). Congruent communication is the healthy fifth stance.",
    "options": [
      {
        "id": "a",
        "text": "Passive, aggressive, passive-aggressive, assertive",
        "isCorrect": false,
        "rationale": "\"Passive, aggressive, passive-aggressive, assertive\" is not what the item tests — Satir's four survival stances: Placater (self-discounts to appease), Blamer (discounts others), Super-Reasonable/Computer (context-focused, emotionally discon"
      },
      {
        "id": "b",
        "text": "Aggression, withdrawal, intellectualization, projection",
        "isCorrect": false,
        "rationale": "\"Aggression, withdrawal, intellectualization, projection\" is not what the item tests — Satir's four survival stances: Placater (self-discounts to appease), Blamer (discounts others), Super-Reasonable/Computer (context-focused, emotionally d"
      },
      {
        "id": "c",
        "text": "Enmeshed, disengaged, triangulated, parentified now",
        "isCorrect": false,
        "rationale": "\"Enmeshed, disengaged, triangulated, parentified now\" is not what the item tests — Satir's four survival stances: Placater (self-discounts to appease), Blamer (discounts others), Super-Reasonable/Computer (context-focused, emotionally disco"
      },
      {
        "id": "d",
        "text": "Placating, blaming, super-reasonable, irrelevant",
        "isCorrect": true,
        "rationale": "Satir's four survival stances: Placater (self-discounts to appease), Blamer (discounts others), Super-Reasonable/Computer (context-focused, emotionally disconnected), Irrelevant/Distractor (discounts everything)."
      }
    ]
  },

  {
    "id": "tpse069",
    "domain": "pioneers",
    "subdomain": "Bowen",
    "difficulty": "medium",
    "question": "Murray Bowen's concept of \"differentiation of self\" refers to:",
    "rationale": "Differentiation of self (Bowen): the ability to remain emotionally connected with others while maintaining independent thinking and not being 'emotionally fused' with the family system. High differentiation = responds thoughtfully; low = reactive and fused.",
    "options": [
      {
        "id": "a",
        "text": "The ability to maintain a stable sense of self while in emotional contact with others",
        "isCorrect": true,
        "rationale": "Differentiation of self (Bowen): the ability to remain emotionally connected with others while maintaining independent thinking and not being 'emotionally fused' with the family system."
      },
      {
        "id": "b",
        "text": "Physically and emotionally separating from one's family of origin at the intake stage",
        "isCorrect": false,
        "rationale": "\"Physically and emotionally separating from one's family of o…\" is not what the item tests — Differentiation of self (Bowen): the ability to remain emotionally connected with others while maintaining independent thinking and not being 'emot"
      },
      {
        "id": "c",
        "text": "The development of a unique personal identity during adolescence as usually described",
        "isCorrect": false,
        "rationale": "\"The development of a unique personal identity during adolesc…\" is not what the item tests — Differentiation of self (Bowen): the ability to remain emotionally connected with others while maintaining independent thinking and not being 'emot"
      },
      {
        "id": "d",
        "text": "Distinguishing between healthy and pathological family patterns during a routine session",
        "isCorrect": false,
        "rationale": "\"Distinguishing between healthy and pathological family patte…\" is not what the item tests — Differentiation of self (Bowen): the ability to remain emotionally connected with others while maintaining independent thinking and not being 'emot"
      }
    ]
  },

  {
    "id": "tpse070",
    "domain": "pioneers",
    "subdomain": "Bowen",
    "difficulty": "hard",
    "question": "\"Triangulation\" in Bowen family systems theory describes:",
    "rationale": "Triangulation (Bowen): the automatic process of pulling a third party (person, substance, work) into a two-person system when anxiety exceeds tolerance. Triangles are the basic stable unit; dyads are inherently unstable under stress.",
    "options": [
      {
        "id": "a",
        "text": "A three-phase treatment model in family therapy here as the reference material frames it",
        "isCorrect": false,
        "rationale": "\"A three-phase treatment model in family therapy here as the …\" is not what the item tests — Triangulation (Bowen): the automatic process of pulling a third party (person, substance, work) into a two-person system when anxiety exceeds toler"
      },
      {
        "id": "b",
        "text": "The process of including a third party to stabilize anxiety in a two-person relationship",
        "isCorrect": true,
        "rationale": "Triangulation (Bowen): the automatic process of pulling a third party (person, substance, work) into a two-person system when anxiety exceeds tolerance. Triangles are the basic stable unit; dyads are inherently unstable under stress."
      },
      {
        "id": "c",
        "text": "Three-generational transmission of relational patterns as the reference material frames it",
        "isCorrect": false,
        "rationale": "\"Three-generational transmission of relational patterns as th…\" is not what the item tests — Triangulation (Bowen): the automatic process of pulling a third party (person, substance, work) into a two-person system when anxiety exceeds toler"
      },
      {
        "id": "d",
        "text": "Three subsystems in family structure (parental, sibling, extended) during a routine session",
        "isCorrect": false,
        "rationale": "\"Three subsystems in family structure (parental, sibling, ext…\" is not what the item tests — Triangulation (Bowen): the automatic process of pulling a third party (person, substance, work) into a two-person system when anxiety exceeds toler"
      }
    ]
  },

  {
    "id": "tpse071",
    "domain": "pioneers",
    "subdomain": "Minuchin",
    "difficulty": "medium",
    "question": "Salvador Minuchin developed:",
    "rationale": "Salvador Minuchin (1921–2017) developed structural family therapy. Key concepts: family structure, subsystems, boundaries (enmeshed, disengaged, clear), hierarchies, and joining. Haley/Madanes = strategic; Bowen = intergenerational; White = narrative.",
    "options": [
      {
        "id": "a",
        "text": "Strategic family therapy",
        "isCorrect": false,
        "rationale": "\"Strategic family therapy\" is not what the item tests — Salvador Minuchin (1921–2017) developed structural family therapy."
      },
      {
        "id": "b",
        "text": "Intergenerational family therapy",
        "isCorrect": false,
        "rationale": "\"Intergenerational family therapy\" is not what the item tests — Salvador Minuchin (1921–2017) developed structural family therapy."
      },
      {
        "id": "c",
        "text": "Structural family therapy",
        "isCorrect": true,
        "rationale": "Salvador Minuchin (1921–2017) developed structural family therapy."
      },
      {
        "id": "d",
        "text": "Narrative family therapy",
        "isCorrect": false,
        "rationale": "\"Narrative family therapy\" is not what the item tests — Salvador Minuchin (1921–2017) developed structural family therapy."
      }
    ]
  },

  {
    "id": "tpse072",
    "domain": "pioneers",
    "subdomain": "Minuchin",
    "difficulty": "hard",
    "question": "In structural family therapy, \"enactment\" is a technique where the therapist:",
    "rationale": "Enactment (Minuchin): therapist directs family members to interact with each other (not with therapist) so the actual transactional patterns become visible and can be directly modified. The therapist observes, then intervenes in the live interaction.",
    "options": [
      {
        "id": "a",
        "text": "Re-enacts past traumatic family events to facilitate healing in practice as the reference material frames it",
        "isCorrect": false,
        "rationale": "\"Re-enacts past traumatic family events to facilitate healing…\" is not what the item tests — Enactment (Minuchin): therapist directs family members to interact with each other (not with therapist) so the actual transactional patterns become"
      },
      {
        "id": "b",
        "text": "Physically demonstrates healthy interaction patterns for the family to observe and imitate during counseling",
        "isCorrect": false,
        "rationale": "\"Physically demonstrates healthy interaction patterns for the…\" is not what the item tests — Enactment (Minuchin): therapist directs family members to interact with each other (not with therapist) so the actual transactional patterns become"
      },
      {
        "id": "c",
        "text": "Assigns family members role-plays to practice outside sessions at intake as the reference material frames it",
        "isCorrect": false,
        "rationale": "\"Assigns family members role-plays to practice outside sessio…\" is not what the item tests — Enactment (Minuchin): therapist directs family members to interact with each other (not with therapist) so the actual transactional patterns become"
      },
      {
        "id": "d",
        "text": "Directs family members to interact with each other in session so the structure is observable and changeable",
        "isCorrect": true,
        "rationale": "Enactment (Minuchin): therapist directs family members to interact with each other (not with therapist) so the actual transactional patterns become visible and can be directly modified."
      }
    ]
  },

  {
    "id": "tpse073",
    "domain": "pioneers",
    "subdomain": "Haley",
    "difficulty": "medium",
    "question": "Jay Haley and strategic family therapy are associated with:",
    "rationale": "Strategic therapy (Haley, Madanes): directive, problem-focused, uses paradoxical interventions (prescribing the symptom), ordeals, and specific directives to disrupt dysfunctional interaction sequences. Genograms = Bowen; sculpting = Satir; externalization = White.",
    "options": [
      {
        "id": "a",
        "text": "Paradoxical interventions and specific directives to disrupt dysfunctional patterns",
        "isCorrect": true,
        "rationale": "Strategic therapy (Haley, Madanes): directive, problem-focused, uses paradoxical interventions (prescribing the symptom), ordeals, and specific directives to disrupt dysfunctional interaction sequences."
      },
      {
        "id": "b",
        "text": "Genograms and multigenerational analysis itself as the reference material frames it",
        "isCorrect": false,
        "rationale": "\"Genograms and multigenerational analysis itself as the refer…\" is not what the item tests — Strategic therapy (Haley, Madanes): directive, problem-focused, uses paradoxical interventions (prescribing the symptom), ordeals, and specific dir"
      },
      {
        "id": "c",
        "text": "Externalization and re-authoring of problem-saturated narratives at the intake stage",
        "isCorrect": false,
        "rationale": "\"Externalization and re-authoring of problem-saturated narrat…\" is not what the item tests — Strategic therapy (Haley, Madanes): directive, problem-focused, uses paradoxical interventions (prescribing the symptom), ordeals, and specific dir"
      },
      {
        "id": "d",
        "text": "Experiential techniques including family sculpting as clinicians typically apply it",
        "isCorrect": false,
        "rationale": "\"Experiential techniques including family sculpting as clinic…\" is not what the item tests — Strategic therapy (Haley, Madanes): directive, problem-focused, uses paradoxical interventions (prescribing the symptom), ordeals, and specific dir"
      }
    ]
  },

  {
    "id": "tpse074",
    "domain": "pioneers",
    "subdomain": "White",
    "difficulty": "medium",
    "question": "Michael White and David Epston co-founded:",
    "rationale": "Michael White (Australia) and David Epston (New Zealand) co-founded narrative therapy, detailed in 'Narrative Means to Therapeutic Ends' (1990). de Shazer/Berg = SFBT; Anderson/Goolishian = collaborative therapy.",
    "options": [
      {
        "id": "a",
        "text": "Collaborative/Dialogic Therapy",
        "isCorrect": false,
        "rationale": "\"Collaborative/Dialogic Therapy\" is not what the item tests — Michael White (Australia) and David Epston (New Zealand) co-founded narrative therapy, detailed in 'Narrative Means to Therapeutic Ends' (1990)."
      },
      {
        "id": "b",
        "text": "Narrative Therapy",
        "isCorrect": true,
        "rationale": "Michael White (Australia) and David Epston (New Zealand) co-founded narrative therapy, detailed in 'Narrative Means to Therapeutic Ends' (1990). de Shazer/Berg = SFBT; Anderson/Goolishian = collaborative therapy."
      },
      {
        "id": "c",
        "text": "Solution-Focused Brief Therapy",
        "isCorrect": false,
        "rationale": "\"Solution-Focused Brief Therapy\" is not what the item tests — Michael White (Australia) and David Epston (New Zealand) co-founded narrative therapy, detailed in 'Narrative Means to Therapeutic Ends' (1990)."
      },
      {
        "id": "d",
        "text": "Feminist Therapy",
        "isCorrect": false,
        "rationale": "\"Feminist Therapy\" is not what the item tests — Michael White (Australia) and David Epston (New Zealand) co-founded narrative therapy, detailed in 'Narrative Means to Therapeutic Ends' (1990)."
      }
    ]
  },

  {
    "id": "tpse075",
    "domain": "pioneers",
    "subdomain": "de Shazer",
    "difficulty": "medium",
    "question": "Steve de Shazer and Insoo Kim Berg are associated with:",
    "rationale": "Steve de Shazer and Insoo Kim Berg co-developed SFBT at the Brief Family Therapy Center in Milwaukee. Key contributions: miracle question, exception questions, scaling questions, and the minimal intervention principle.",
    "options": [
      {
        "id": "a",
        "text": "Narrative therapy and externalization",
        "isCorrect": false,
        "rationale": "\"Narrative therapy and externalization\" is not what the item tests — Steve de Shazer and Insoo Kim Berg co-developed SFBT at the Brief Family Therapy Center in Milwaukee."
      },
      {
        "id": "b",
        "text": "Acceptance and Commitment Therapy",
        "isCorrect": false,
        "rationale": "\"Acceptance and Commitment Therapy\" is not what the item tests — Steve de Shazer and Insoo Kim Berg co-developed SFBT at the Brief Family Therapy Center in Milwaukee."
      },
      {
        "id": "c",
        "text": "Solution-Focused Brief Therapy (SFBT)",
        "isCorrect": true,
        "rationale": "Steve de Shazer and Insoo Kim Berg co-developed SFBT at the Brief Family Therapy Center in Milwaukee. Key contributions: miracle question, exception questions, scaling questions, and the minimal intervention principle."
      },
      {
        "id": "d",
        "text": "Strategic family therapy",
        "isCorrect": false,
        "rationale": "\"Strategic family therapy\" is not what the item tests — Steve de Shazer and Insoo Kim Berg co-developed SFBT at the Brief Family Therapy Center in Milwaukee."
      }
    ]
  },

  {
    "id": "tpse076",
    "domain": "pioneers",
    "subdomain": "Linehan",
    "difficulty": "easy",
    "question": "Marsha Linehan developed DBT. The term \"dialectical\" refers to:",
    "rationale": "DBT's 'dialectical' = synthesizing opposites: acceptance (\"you are doing the best you can\") AND change (\"you need to do better\"). The central dialectic is not acceptance OR change but both simultaneously.",
    "options": [
      {
        "id": "a",
        "text": "The two-format structure of individual therapy and skills group itself",
        "isCorrect": false,
        "rationale": "\"The two-format structure of individual therapy and skills gr…\" is not what the item tests — DBT's 'dialectical' = synthesizing opposites: acceptance (\"you are doing the best you can\") AND change (\"you need to do better\")."
      },
      {
        "id": "b",
        "text": "Two contradictory therapeutic techniques used in alternating sessions now",
        "isCorrect": false,
        "rationale": "\"Two contradictory therapeutic techniques used in alternating…\" is not what the item tests — DBT's 'dialectical' = synthesizing opposites: acceptance (\"you are doing the best you can\") AND change (\"you need to do better\")."
      },
      {
        "id": "c",
        "text": "The dialogue structure between therapist and client in individual sessions",
        "isCorrect": false,
        "rationale": "\"The dialogue structure between therapist and client in indiv…\" is not what the item tests — DBT's 'dialectical' = synthesizing opposites: acceptance (\"you are doing the best you can\") AND change (\"you need to do better\")."
      },
      {
        "id": "d",
        "text": "The synthesis of acceptance and change as the core therapeutic tension",
        "isCorrect": true,
        "rationale": "DBT's 'dialectical' = synthesizing opposites: acceptance (\"you are doing the best you can\") AND change (\"you need to do better\"). The central dialectic is not acceptance OR change but both simultaneously."
      }
    ]
  },

  {
    "id": "tpse077",
    "domain": "pioneers",
    "subdomain": "Hayes",
    "difficulty": "medium",
    "question": "Steven Hayes is credited with developing:",
    "rationale": "Steven Hayes (1948–present) developed ACT, based on Relational Frame Theory (RFT). MI = Miller/Rollnick; DBT = Linehan; MBSR = Kabat-Zinn. ACT is considered a third-wave behavioral approach.",
    "options": [
      {
        "id": "a",
        "text": "Acceptance and Commitment Therapy (ACT)",
        "isCorrect": true,
        "rationale": "Steven Hayes (1948–present) developed ACT, based on Relational Frame Theory (RFT). MI = Miller/Rollnick; DBT = Linehan; MBSR = Kabat-Zinn. ACT is considered a third-wave behavioral approach."
      },
      {
        "id": "b",
        "text": "Motivational Interviewing by counselors",
        "isCorrect": false,
        "rationale": "\"Motivational Interviewing by counselors\" is not what the item tests — Steven Hayes (1948–present) developed ACT, based on Relational Frame Theory (RFT)."
      },
      {
        "id": "c",
        "text": "Dialectical Behavior Therapy in practice",
        "isCorrect": false,
        "rationale": "\"Dialectical Behavior Therapy in practice\" is not what the item tests — Steven Hayes (1948–present) developed ACT, based on Relational Frame Theory (RFT)."
      },
      {
        "id": "d",
        "text": "Mindfulness-Based Stress Reduction (MBSR)",
        "isCorrect": false,
        "rationale": "\"Mindfulness-Based Stress Reduction (MBSR)\" is not what the item tests — Steven Hayes (1948–present) developed ACT, based on Relational Frame Theory (RFT)."
      }
    ]
  },

  {
    "id": "tpse078",
    "domain": "pioneers",
    "subdomain": "Miller",
    "difficulty": "medium",
    "question": "Motivational Interviewing's foundational spirit includes the elements:",
    "rationale": "MI Spirit (PACE): Partnership (collaborative, not hierarchical), Acceptance (autonomy, affirming, accurate empathy, absolute worth), Compassion (prioritizing client welfare), Evocation (drawing out client's own motivation, not installing it).",
    "options": [
      {
        "id": "a",
        "text": "Rogers' congruence, unconditional regard, and empathic understanding",
        "isCorrect": false,
        "rationale": "\"Rogers' congruence, unconditional regard, and empathic under…\" is not what the item tests — MI Spirit (PACE): Partnership (collaborative, not hierarchical), Acceptance (autonomy, affirming, accurate empathy, absolute worth), Compassion (pr"
      },
      {
        "id": "b",
        "text": "Partnership, evocation, acceptance, and compassion (PACE)",
        "isCorrect": true,
        "rationale": "MI Spirit (PACE): Partnership (collaborative, not hierarchical), Acceptance (autonomy, affirming, accurate empathy, absolute worth), Compassion (prioritizing client welfare), Evocation (drawing out client's own motivatio…"
      },
      {
        "id": "c",
        "text": "Validation, challenge, and systematic skill-building here",
        "isCorrect": false,
        "rationale": "\"Validation, challenge, and systematic skill-building here\" is not what the item tests — MI Spirit (PACE): Partnership (collaborative, not hierarchical), Acceptance (autonomy, affirming, accurate empathy, absolute worth), Compassion (priori"
      },
      {
        "id": "d",
        "text": "Confrontation, education, and directive guidance at intake",
        "isCorrect": false,
        "rationale": "\"Confrontation, education, and directive guidance at intake\" is not what the item tests — MI Spirit (PACE): Partnership (collaborative, not hierarchical), Acceptance (autonomy, affirming, accurate empathy, absolute worth), Compassion (prior"
      }
    ]
  },

  {
    "id": "tpse079",
    "domain": "pioneers",
    "subdomain": "Erikson",
    "difficulty": "medium",
    "question": "Erik Erikson expanded Freud's theory by emphasizing:",
    "rationale": "Erikson (1902–1994) extended Freud's psychosexual stages into a lifespan psychosocial model of 8 stages from trust vs. mistrust (infancy) through integrity vs. despair (late adulthood). Piaget = cognitive; Bowlby = attachment; Kohlberg = moral.",
    "options": [
      {
        "id": "a",
        "text": "Attachment patterns in the first year of life today",
        "isCorrect": false,
        "rationale": "\"Attachment patterns in the first year of life today\" is not what the item tests — Erikson (1902–1994) extended Freud's psychosexual stages into a lifespan psychosocial model of 8 stages from trust vs."
      },
      {
        "id": "b",
        "text": "Cognitive development across childhood stages today",
        "isCorrect": false,
        "rationale": "\"Cognitive development across childhood stages today\" is not what the item tests — Erikson (1902–1994) extended Freud's psychosexual stages into a lifespan psychosocial model of 8 stages from trust vs."
      },
      {
        "id": "c",
        "text": "Psychosocial development across the entire lifespan",
        "isCorrect": true,
        "rationale": "Erikson (1902–1994) extended Freud's psychosexual stages into a lifespan psychosocial model of 8 stages from trust vs."
      },
      {
        "id": "d",
        "text": "Moral development from childhood through adolescence",
        "isCorrect": false,
        "rationale": "\"Moral development from childhood through adolescence\" is not what the item tests — Erikson (1902–1994) extended Freud's psychosexual stages into a lifespan psychosocial model of 8 stages from trust vs."
      }
    ]
  },

  {
    "id": "tpse080",
    "domain": "pioneers",
    "subdomain": "Bowlby",
    "difficulty": "medium",
    "question": "John Bowlby's attachment theory proposes that:",
    "rationale": "Bowlby (1907–1990): children have an innate biological need to attach to caregivers for survival. Early attachment experiences form 'internal working models' — mental representations of self and others — that serve as templates for all later relationships.",
    "options": [
      {
        "id": "a",
        "text": "Separation anxiety is a classically conditioned response to maternal absence at intake",
        "isCorrect": false,
        "rationale": "\"Separation anxiety is a classically conditioned response to …\" is not what the item tests — Bowlby (1907–1990): children have an innate biological need to attach to caregivers for survival."
      },
      {
        "id": "b",
        "text": "Secure attachment develops through consistent feeding and physical care alone as used",
        "isCorrect": false,
        "rationale": "\"Secure attachment develops through consistent feeding and ph…\" is not what the item tests — Bowlby (1907–1990): children have an innate biological need to attach to caregivers for survival."
      },
      {
        "id": "c",
        "text": "Children's emotional development is driven primarily by unconscious libidinal drives now",
        "isCorrect": false,
        "rationale": "\"Children's emotional development is driven primarily by unco…\" is not what the item tests — Bowlby (1907–1990): children have an innate biological need to attach to caregivers for survival."
      },
      {
        "id": "d",
        "text": "Early attachment bonds shape internal working models for all subsequent relationships",
        "isCorrect": true,
        "rationale": "Bowlby (1907–1990): children have an innate biological need to attach to caregivers for survival."
      }
    ]
  },

  {
    "id": "tpse081",
    "domain": "skills",
    "subdomain": "Attending",
    "difficulty": "easy",
    "question": "In the SOLER framework for nonverbal attending, the \"O\" represents:",
    "rationale": "SOLER (Egan): Squarely face client, Open posture (no crossed arms/legs), Lean in slightly, Eye contact (culturally appropriate), Relax. These nonverbal behaviors communicate genuine attentiveness and interest.",
    "options": [
      {
        "id": "a",
        "text": "Open body posture",
        "isCorrect": true,
        "rationale": "SOLER (Egan): Squarely face client, Open posture (no crossed arms/legs), Lean in slightly, Eye contact (culturally appropriate), Relax. These nonverbal behaviors communicate genuine attentiveness and interest."
      },
      {
        "id": "b",
        "text": "Observing facial cues",
        "isCorrect": false,
        "rationale": "\"Observing facial cues\" is not what the item tests — SOLER (Egan): Squarely face client, Open posture (no crossed arms/legs), Lean in slightly, Eye contact (culturally appropriate), Relax."
      },
      {
        "id": "c",
        "text": "Open-ended questions",
        "isCorrect": false,
        "rationale": "\"Open-ended questions\" is not what the item tests — SOLER (Egan): Squarely face client, Open posture (no crossed arms/legs), Lean in slightly, Eye contact (culturally appropriate), Relax."
      },
      {
        "id": "d",
        "text": "Orienting to the client's perspective",
        "isCorrect": false,
        "rationale": "\"Orienting to the client's perspective\" is not what the item tests — SOLER (Egan): Squarely face client, Open posture (no crossed arms/legs), Lean in slightly, Eye contact (culturally appropriate), Relax."
      }
    ]
  },

  {
    "id": "tpse082",
    "domain": "skills",
    "subdomain": "Reflection",
    "difficulty": "easy",
    "question": "Reflection of feeling differs from paraphrasing in that reflection:",
    "rationale": "Paraphrasing reflects cognitive/content; reflection of feeling targets the emotional dimension. Format: \"You feel [feeling word] because [brief content reference].\" Both are empathic responses; reflection prioritizes the affective experience.",
    "options": [
      {
        "id": "a",
        "text": "Is typically longer and more detailed in delivery at the intake stage",
        "isCorrect": false,
        "rationale": "\"Is typically longer and more detailed in delivery at the int…\" is not what the item tests — Paraphrasing reflects cognitive/content; reflection of feeling targets the emotional dimension."
      },
      {
        "id": "b",
        "text": "Focuses specifically on the emotional content of the client's message",
        "isCorrect": true,
        "rationale": "Paraphrasing reflects cognitive/content; reflection of feeling targets the emotional dimension."
      },
      {
        "id": "c",
        "text": "Uses the client's exact words back to them at the level the item tests",
        "isCorrect": false,
        "rationale": "\"Uses the client's exact words back to them at the level the …\" is not what the item tests — Paraphrasing reflects cognitive/content; reflection of feeling targets the emotional dimension."
      },
      {
        "id": "d",
        "text": "Adds the therapist's interpretation of the underlying meaning as used",
        "isCorrect": false,
        "rationale": "\"Adds the therapist's interpretation of the underlying meanin…\" is not what the item tests — Paraphrasing reflects cognitive/content; reflection of feeling targets the emotional dimension."
      }
    ]
  },

  {
    "id": "tpse083",
    "domain": "skills",
    "subdomain": "Paraphrasing",
    "difficulty": "easy",
    "question": "The primary purpose of paraphrasing in counseling is to:",
    "rationale": "Paraphrasing communicates understanding of content in the therapist's own words, invites correction if inaccurate, and encourages the client to continue and elaborate. It does not add interpretation — that is the job of advanced empathy or interpretation.",
    "options": [
      {
        "id": "a",
        "text": "Interpret the underlying meaning of the client's communication today",
        "isCorrect": false,
        "rationale": "\"Interpret the underlying meaning of the client's communicati…\" is not what the item tests — Paraphrasing communicates understanding of content in the therapist's own words, invites correction if inaccurate, and encourages the client to con"
      },
      {
        "id": "b",
        "text": "Summarize everything the client said verbatim during a routine session",
        "isCorrect": false,
        "rationale": "\"Summarize everything the client said verbatim during a routi…\" is not what the item tests — Paraphrasing communicates understanding of content in the therapist's own words, invites correction if inaccurate, and encourages the client to con"
      },
      {
        "id": "c",
        "text": "Communicate that the client has been accurately heard and understood",
        "isCorrect": true,
        "rationale": "Paraphrasing communicates understanding of content in the therapist's own words, invites correction if inaccurate, and encourages the client to continue and elaborate."
      },
      {
        "id": "d",
        "text": "Introduce new perspectives on the client's situation during counseling",
        "isCorrect": false,
        "rationale": "\"Introduce new perspectives on the client's situation during …\" is not what the item tests — Paraphrasing communicates understanding of content in the therapist's own words, invites correction if inaccurate, and encourages the client to con"
      }
    ]
  },

  {
    "id": "tpse084",
    "domain": "skills",
    "subdomain": "Empathy",
    "difficulty": "medium",
    "question": "\"Advanced empathy\" (vs. basic empathy) involves:",
    "rationale": "Advanced/accurate empathy (Egan, Carkhuff) reflects the 'edge of awareness' — what the client is almost but not quite saying. It goes beyond the surface to the deeper implied meaning without being a full interpretation.",
    "options": [
      {
        "id": "a",
        "text": "Empathizing with more intense emotions like shame and rage today",
        "isCorrect": false,
        "rationale": "\"Empathizing with more intense emotions like shame and rage t…\" is not what the item tests — Advanced/accurate empathy (Egan, Carkhuff) reflects the 'edge of awareness' — what the client is almost but not quite saying."
      },
      {
        "id": "b",
        "text": "Using more complex feeling words in reflections during counseling",
        "isCorrect": false,
        "rationale": "\"Using more complex feeling words in reflections during couns…\" is not what the item tests — Advanced/accurate empathy (Egan, Carkhuff) reflects the 'edge of awareness' — what the client is almost but not quite saying."
      },
      {
        "id": "c",
        "text": "Maintaining empathic consistency across multiple sessions itself",
        "isCorrect": false,
        "rationale": "\"Maintaining empathic consistency across multiple sessions it…\" is not what the item tests — Advanced/accurate empathy (Egan, Carkhuff) reflects the 'edge of awareness' — what the client is almost but not quite saying."
      },
      {
        "id": "d",
        "text": "Reflecting what the client has implied but not yet said directly",
        "isCorrect": true,
        "rationale": "Advanced/accurate empathy (Egan, Carkhuff) reflects the 'edge of awareness' — what the client is almost but not quite saying. It goes beyond the surface to the deeper implied meaning without being a full interpretation."
      }
    ]
  },

  {
    "id": "tpse085",
    "domain": "skills",
    "subdomain": "Questioning",
    "difficulty": "easy",
    "question": "Open-ended questions differ from closed questions primarily because they:",
    "rationale": "Open-ended questions (who, what, where, when, how) invite narrative and elaboration. Closed questions can be answered with yes/no or a single word and are used for specific information-gathering but limit exploration.",
    "options": [
      {
        "id": "a",
        "text": "Cannot be answered with \"yes\" or \"no\" and invite elaboration",
        "isCorrect": true,
        "rationale": "Open-ended questions (who, what, where, when, how) invite narrative and elaboration. Closed questions can be answered with yes/no or a single word and are used for specific information-gathering but limit exploration."
      },
      {
        "id": "b",
        "text": "Focus on feelings rather than factual content in this domain now",
        "isCorrect": false,
        "rationale": "\"Focus on feelings rather than factual content in this domain…\" is not what the item tests — Open-ended questions (who, what, where, when, how) invite narrative and elaboration."
      },
      {
        "id": "c",
        "text": "Are reserved for later phases of the therapeutic process now",
        "isCorrect": false,
        "rationale": "\"Are reserved for later phases of the therapeutic process now\" is not what the item tests — Open-ended questions (who, what, where, when, how) invite narrative and elaboration."
      },
      {
        "id": "d",
        "text": "Are typically longer and require more time to formulate here",
        "isCorrect": false,
        "rationale": "\"Are typically longer and require more time to formulate here\" is not what the item tests — Open-ended questions (who, what, where, when, how) invite narrative and elaboration."
      }
    ]
  },

  {
    "id": "tpse086",
    "domain": "skills",
    "subdomain": "Questioning",
    "difficulty": "medium",
    "question": "\"Why\" questions are generally considered least therapeutically useful because:",
    "rationale": "\"Why did you do that?\" often triggers defensiveness and rationalization rather than genuine exploration. \"What were you hoping would happen?\" or \"What was going on for you?\" elicits richer, less defensive responses.",
    "options": [
      {
        "id": "a",
        "text": "They close off exploration by requiring a specific answer during counseling",
        "isCorrect": false,
        "rationale": "\"They close off exploration by requiring a specific answer du…\" is not what the item tests — \"Why did you do that?\" often triggers defensiveness and rationalization rather than genuine exploration."
      },
      {
        "id": "b",
        "text": "They prompt defensiveness, require rationalization, and can imply judgment",
        "isCorrect": true,
        "rationale": "\"Why did you do that?\" often triggers defensiveness and rationalization rather than genuine exploration. \"What were you hoping would happen?\" or \"What was going on for you?\" elicits richer, less defensive responses."
      },
      {
        "id": "c",
        "text": "They are too abstract for most clients to answer meaningfully by counselors",
        "isCorrect": false,
        "rationale": "\"They are too abstract for most clients to answer meaningfull…\" is not what the item tests — \"Why did you do that?\" often triggers defensiveness and rationalization rather than genuine exploration."
      },
      {
        "id": "d",
        "text": "They focus on the past rather than the present moment as usually described",
        "isCorrect": false,
        "rationale": "\"They focus on the past rather than the present moment as usu…\" is not what the item tests — \"Why did you do that?\" often triggers defensiveness and rationalization rather than genuine exploration."
      }
    ]
  },

  {
    "id": "tpse087",
    "domain": "skills",
    "subdomain": "Confrontation",
    "difficulty": "medium",
    "question": "Therapeutic confrontation is BEST described as:",
    "rationale": "Confrontation identifies discrepancies: between what a client says and does, between two statements, or between stated beliefs and nonverbal behavior. It is offered as a caring observation, not an attack, and requires a solid therapeutic alliance.",
    "options": [
      {
        "id": "a",
        "text": "Addressing problems in the therapeutic alliance directly at the intake stage",
        "isCorrect": false,
        "rationale": "\"Addressing problems in the therapeutic alliance directly at …\" is not what the item tests — Confrontation identifies discrepancies: between what a client says and does, between two statements, or between stated beliefs and nonverbal behavi"
      },
      {
        "id": "b",
        "text": "Directly challenging the client's problematic behaviors or choices at intake",
        "isCorrect": false,
        "rationale": "\"Directly challenging the client's problematic behaviors or c…\" is not what the item tests — Confrontation identifies discrepancies: between what a client says and does, between two statements, or between stated beliefs and nonverbal behavi"
      },
      {
        "id": "c",
        "text": "Pointing out discrepancies or inconsistencies in the client's communication",
        "isCorrect": true,
        "rationale": "Confrontation identifies discrepancies: between what a client says and does, between two statements, or between stated beliefs and nonverbal behavior."
      },
      {
        "id": "d",
        "text": "Using forceful language to break through defensive patterns during counseling",
        "isCorrect": false,
        "rationale": "\"Using forceful language to break through defensive patterns …\" is not what the item tests — Confrontation identifies discrepancies: between what a client says and does, between two statements, or between stated beliefs and nonverbal behavi"
      }
    ]
  },

  {
    "id": "tpse088",
    "domain": "skills",
    "subdomain": "Confrontation",
    "difficulty": "hard",
    "question": "Timing of confrontation is MOST critical because:",
    "rationale": "Premature confrontation before a therapeutic alliance is established frequently leads to dropout, increased defensiveness, or rupture. Clients must experience confrontation as caring rather than attacking — which requires sufficient trust.",
    "options": [
      {
        "id": "a",
        "text": "Early confrontation accelerates client awareness of their problems during counseling",
        "isCorrect": false,
        "rationale": "\"Early confrontation accelerates client awareness of their pr…\" is not what the item tests — Premature confrontation before a therapeutic alliance is established frequently leads to dropout, increased defensiveness, or rupture."
      },
      {
        "id": "b",
        "text": "Confrontation should only occur in the termination phase of treatment by counselors",
        "isCorrect": false,
        "rationale": "\"Confrontation should only occur in the termination phase of …\" is not what the item tests — Premature confrontation before a therapeutic alliance is established frequently leads to dropout, increased defensiveness, or rupture."
      },
      {
        "id": "c",
        "text": "Clients cannot tolerate confrontation until they demonstrate significant insight now",
        "isCorrect": false,
        "rationale": "\"Clients cannot tolerate confrontation until they demonstrate…\" is not what the item tests — Premature confrontation before a therapeutic alliance is established frequently leads to dropout, increased defensiveness, or rupture."
      },
      {
        "id": "d",
        "text": "Confrontation before alliance is established increases dropout and damages rapport",
        "isCorrect": true,
        "rationale": "Premature confrontation before a therapeutic alliance is established frequently leads to dropout, increased defensiveness, or rupture. Clients must experience confrontation as caring rather than attacking — which requires sufficient trust."
      }
    ]
  },

  {
    "id": "tpse089",
    "domain": "skills",
    "subdomain": "Immediacy",
    "difficulty": "medium",
    "question": "\"Immediacy\" as a counseling skill involves the therapist:",
    "rationale": "Immediacy (Egan): discussing the here-and-now quality of the therapeutic relationship. \"Right now, as we're talking about this, I notice...\" It brings the relationship itself into the open as a therapeutic tool and addresses parallel processes.",
    "options": [
      {
        "id": "a",
        "text": "Discussing what is happening in the therapeutic relationship in the present moment",
        "isCorrect": true,
        "rationale": "Immediacy (Egan): discussing the here-and-now quality of the therapeutic relationship."
      },
      {
        "id": "b",
        "text": "Addressing crisis concerns immediately before any other therapeutic content itself",
        "isCorrect": false,
        "rationale": "\"Addressing crisis concerns immediately before any other ther…\" is not what the item tests — Immediacy (Egan): discussing the here-and-now quality of the therapeutic relationship."
      },
      {
        "id": "c",
        "text": "Providing prompt behavioral feedback after client role-plays during a routine session",
        "isCorrect": false,
        "rationale": "\"Providing prompt behavioral feedback after client role-plays…\" is not what the item tests — Immediacy (Egan): discussing the here-and-now quality of the therapeutic relationship."
      },
      {
        "id": "d",
        "text": "Responding without pause to all client statements as clinicians typically apply it",
        "isCorrect": false,
        "rationale": "\"Responding without pause to all client statements as clinici…\" is not what the item tests — Immediacy (Egan): discussing the here-and-now quality of the therapeutic relationship."
      }
    ]
  },

  {
    "id": "tpse090",
    "domain": "skills",
    "subdomain": "Summarizing",
    "difficulty": "easy",
    "question": "Summarizing in counseling is MOST useful for:",
    "rationale": "Summarizing ties together multiple aspects of the session, provides transitions between topics, checks accuracy of the therapist's understanding, and gives the client a sense of coherence and direction.",
    "options": [
      {
        "id": "a",
        "text": "Collecting specific assessment data efficiently now as the reference material frames it",
        "isCorrect": false,
        "rationale": "\"Collecting specific assessment data efficiently now as the r…\" is not what the item tests — Summarizing ties together multiple aspects of the session, provides transitions between topics, checks accuracy of the therapist's understanding, a"
      },
      {
        "id": "b",
        "text": "Reviewing key themes, marking transitions, and checking for accuracy of understanding",
        "isCorrect": true,
        "rationale": "Summarizing ties together multiple aspects of the session, provides transitions between topics, checks accuracy of the therapist's understanding, and gives the client a sense of coherence and direction."
      },
      {
        "id": "c",
        "text": "Replacing reflection when sessions become repetitive as clinicians typically apply it",
        "isCorrect": false,
        "rationale": "\"Replacing reflection when sessions become repetitive as clin…\" is not what the item tests — Summarizing ties together multiple aspects of the session, provides transitions between topics, checks accuracy of the therapist's understanding, a"
      },
      {
        "id": "d",
        "text": "Providing clinical interpretation of unconscious material at the level the item tests",
        "isCorrect": false,
        "rationale": "\"Providing clinical interpretation of unconscious material at…\" is not what the item tests — Summarizing ties together multiple aspects of the session, provides transitions between topics, checks accuracy of the therapist's understanding, a"
      }
    ]
  },

  {
    "id": "tpse091",
    "domain": "skills",
    "subdomain": "SelfDisclosure",
    "difficulty": "medium",
    "question": "Appropriate counselor self-disclosure is BEST characterized as:",
    "rationale": "Appropriate self-disclosure is selective, purposeful, and client-focused. Key question: 'Why am I sharing this? For whom?' It should not burden the client or shift focus to the therapist, and should return focus to the client promptly.",
    "options": [
      {
        "id": "a",
        "text": "Revealing personal history to build the therapeutic alliance early in treatment in this domain",
        "isCorrect": false,
        "rationale": "\"Revealing personal history to build the therapeutic alliance…\" is not what the item tests — Appropriate self-disclosure is selective, purposeful, and client-focused."
      },
      {
        "id": "b",
        "text": "Sharing personal struggles to increase empathic connection as the reference material frames it now",
        "isCorrect": false,
        "rationale": "\"Sharing personal struggles to increase empathic connection a…\" is not what the item tests — Appropriate self-disclosure is selective, purposeful, and client-focused."
      },
      {
        "id": "c",
        "text": "Deliberate, purposeful sharing of the therapist's experience in service of the client's growth",
        "isCorrect": true,
        "rationale": "Appropriate self-disclosure is selective, purposeful, and client-focused. Key question: 'Why am I sharing this? For whom?' It should not burden the client or shift focus to the therapist, and should return focus to the client promptly."
      },
      {
        "id": "d",
        "text": "Avoided entirely to maintain therapeutic neutrality and abstinence at the level the item tests",
        "isCorrect": false,
        "rationale": "\"Avoided entirely to maintain therapeutic neutrality and abst…\" is not what the item tests — Appropriate self-disclosure is selective, purposeful, and client-focused."
      }
    ]
  },

  {
    "id": "tpse092",
    "domain": "skills",
    "subdomain": "GoalSetting",
    "difficulty": "medium",
    "question": "Counseling goals are MOST effective when they are:",
    "rationale": "SMART goals provide clear direction, allow objective progress monitoring, and maintain client motivation through achievable steps. Vague goals make progress evaluation difficult and can undermine the therapeutic alliance over time.",
    "options": [
      {
        "id": "a",
        "text": "Set by the counselor based on their clinical assessment in practice",
        "isCorrect": false,
        "rationale": "\"Set by the counselor based on their clinical assessment in p…\" is not what the item tests — SMART goals provide clear direction, allow objective progress monitoring, and maintain client motivation through achievable steps."
      },
      {
        "id": "b",
        "text": "Focused on symptom elimination as the singular target by counselors",
        "isCorrect": false,
        "rationale": "\"Focused on symptom elimination as the singular target by cou…\" is not what the item tests — SMART goals provide clear direction, allow objective progress monitoring, and maintain client motivation through achievable steps."
      },
      {
        "id": "c",
        "text": "Broadly stated to allow flexible interpretation across sessions now",
        "isCorrect": false,
        "rationale": "\"Broadly stated to allow flexible interpretation across sessi…\" is not what the item tests — SMART goals provide clear direction, allow objective progress monitoring, and maintain client motivation through achievable steps."
      },
      {
        "id": "d",
        "text": "Specific, measurable, achievable, relevant, and time-bound (SMART)",
        "isCorrect": true,
        "rationale": "SMART goals provide clear direction, allow objective progress monitoring, and maintain client motivation through achievable steps. Vague goals make progress evaluation difficult and can undermine the therapeutic alliance over time."
      }
    ]
  },

  {
    "id": "tpse093",
    "domain": "skills",
    "subdomain": "Termination",
    "difficulty": "medium",
    "question": "Which statement about termination is MOST clinically accurate?",
    "rationale": "Properly handled termination consolidates gains, reviews progress, processes the experience of ending, and prepares the client for the future. For clients with attachment difficulties, a well-handled ending is a valuable corrective relational experience.",
    "options": [
      {
        "id": "a",
        "text": "Termination is a therapeutic opportunity to consolidate gains and process separation",
        "isCorrect": true,
        "rationale": "Properly handled termination consolidates gains, reviews progress, processes the experience of ending, and prepares the client for the future."
      },
      {
        "id": "b",
        "text": "Termination should occur abruptly when clinical goals are met to prevent dependency now",
        "isCorrect": false,
        "rationale": "\"Termination should occur abruptly when clinical goals are me…\" is not what the item tests — Properly handled termination consolidates gains, reviews progress, processes the experience of ending, and prepares the client for the future."
      },
      {
        "id": "c",
        "text": "Termination should be avoided or indefinitely deferred with clients who have attachment difficulties",
        "isCorrect": false,
        "rationale": "\"Termination should be avoided or indefinitely deferred with …\" is not what the item tests — Properly handled termination consolidates gains, reviews progress, processes the experience of ending, and prepares the client for the future."
      },
      {
        "id": "d",
        "text": "A client's resistance to termination typically indicates insufficient clinical progress",
        "isCorrect": false,
        "rationale": "\"A client's resistance to termination typically indicates ins…\" is not what the item tests — Properly handled termination consolidates gains, reviews progress, processes the experience of ending, and prepares the client for the future."
      }
    ]
  },

  {
    "id": "tpse094",
    "domain": "skills",
    "subdomain": "Termination",
    "difficulty": "hard",
    "question": "A client making good progress suddenly misses sessions as planned termination approaches. This MOST likely reflects:",
    "rationale": "\"Flight into health\" = sudden apparent improvement or avoidance before termination. May represent anxiety about the ending, avoidance of grief about the loss of the relationship, or fear of coping independently. Warrants direct, curious clinical exploration.",
    "options": [
      {
        "id": "a",
        "text": "Resistance indicating the need to extend therapy indefinitely by counselors",
        "isCorrect": false,
        "rationale": "\"Resistance indicating the need to extend therapy indefinitel…\" is not what the item tests — \"Flight into health\" = sudden apparent improvement or avoidance before termination."
      },
      {
        "id": "b",
        "text": "Flight into health or termination anxiety requiring direct clinical address",
        "isCorrect": true,
        "rationale": "\"Flight into health\" = sudden apparent improvement or avoidance before termination."
      },
      {
        "id": "c",
        "text": "Successful internalization of skills and readiness for independent functioning",
        "isCorrect": false,
        "rationale": "\"Successful internalization of skills and readiness for indep…\" is not what the item tests — \"Flight into health\" = sudden apparent improvement or avoidance before termination."
      },
      {
        "id": "d",
        "text": "External logistical barriers such as transportation or scheduling at intake",
        "isCorrect": false,
        "rationale": "\"External logistical barriers such as transportation or sched…\" is not what the item tests — \"Flight into health\" = sudden apparent improvement or avoidance before termination."
      }
    ]
  },

  {
    "id": "tpse095",
    "domain": "skills",
    "subdomain": "Resistance",
    "difficulty": "medium",
    "question": "A client consistently arrives late, changes subjects when specific topics arise, and gives vague answers. The counselor should FIRST:",
    "rationale": "Resistance is typically self-protective and clinically meaningful — indicating areas of anxiety or ambivalence. A curious, non-judgmental exploration ('I notice when we approach X, the topic shifts — I wonder what that might be about') is more productive than consequences.",
    "options": [
      {
        "id": "a",
        "text": "Address this as a boundary violation and set firm consequences during counseling",
        "isCorrect": false,
        "rationale": "\"Address this as a boundary violation and set firm consequenc…\" is not what the item tests — Resistance is typically self-protective and clinically meaningful — indicating areas of anxiety or ambivalence."
      },
      {
        "id": "b",
        "text": "Terminate treatment for repeated non-compliance as clinicians typically apply it",
        "isCorrect": false,
        "rationale": "\"Terminate treatment for repeated non-compliance as clinician…\" is not what the item tests — Resistance is typically self-protective and clinically meaningful — indicating areas of anxiety or ambivalence."
      },
      {
        "id": "c",
        "text": "Explore the pattern with curiosity as potentially meaningful clinical material",
        "isCorrect": true,
        "rationale": "Resistance is typically self-protective and clinically meaningful — indicating areas of anxiety or ambivalence."
      },
      {
        "id": "d",
        "text": "Ask directly whether the client wants to continue in therapy during counseling",
        "isCorrect": false,
        "rationale": "\"Ask directly whether the client wants to continue in therapy…\" is not what the item tests — Resistance is typically self-protective and clinically meaningful — indicating areas of anxiety or ambivalence."
      }
    ]
  },

  {
    "id": "tpse096",
    "domain": "skills",
    "subdomain": "AllianceRupture",
    "difficulty": "hard",
    "question": "Research on therapeutic alliance ruptures consistently shows that:",
    "rationale": "Rupture and repair research (Safran, Muran): negotiating alliance strains can be among the most therapeutic experiences in treatment — especially for clients with relational trauma. The therapist's capacity to acknowledge, explore, and repair is more predictive of outcomes than avoiding rupture.",
    "options": [
      {
        "id": "a",
        "text": "Ruptures typically lead to premature termination if not immediately repaired",
        "isCorrect": false,
        "rationale": "\"Ruptures typically lead to premature termination if not imme…\" is not what the item tests — Rupture and repair research (Safran, Muran): negotiating alliance strains can be among the most therapeutic experiences in treatment — especially f"
      },
      {
        "id": "b",
        "text": "Ruptures occur only with clients who have personality disorder diagnoses now",
        "isCorrect": false,
        "rationale": "\"Ruptures occur only with clients who have personality disord…\" is not what the item tests — Rupture and repair research (Safran, Muran): negotiating alliance strains can be among the most therapeutic experiences in treatment — especially f"
      },
      {
        "id": "c",
        "text": "The therapist should acknowledge ruptures but not explore them to avoid escalation",
        "isCorrect": false,
        "rationale": "\"The therapist should acknowledge ruptures but not explore th…\" is not what the item tests — Rupture and repair research (Safran, Muran): negotiating alliance strains can be among the most therapeutic experiences in treatment — especially f"
      },
      {
        "id": "d",
        "text": "Repaired ruptures can actually strengthen the alliance and improve outcomes",
        "isCorrect": true,
        "rationale": "Rupture and repair research (Safran, Muran): negotiating alliance strains can be among the most therapeutic experiences in treatment — especially for clients with relational trauma."
      }
    ]
  },

  {
    "id": "tpse097",
    "domain": "skills",
    "subdomain": "Countertransference",
    "difficulty": "medium",
    "question": "Managing countertransference effectively requires the counselor to PRIMARILY:",
    "rationale": "Countertransference management: develop self-awareness (personal therapy, supervision) to recognize reactions, understand their source, and use them as data about the client's interpersonal dynamics — not as facts about the client, nor material to always suppress or always disclose.",
    "options": [
      {
        "id": "a",
        "text": "Develop self-awareness to recognize and use their reactions as clinical information",
        "isCorrect": true,
        "rationale": "Countertransference management: develop self-awareness (personal therapy, supervision) to recognize reactions, understand their source, and use them as data about the client's interpersonal dynamics — not as facts about…"
      },
      {
        "id": "b",
        "text": "Share countertransference reactions with clients to model transparency by counselors",
        "isCorrect": false,
        "rationale": "\"Share countertransference reactions with clients to model tr…\" is not what the item tests — Countertransference management: develop self-awareness (personal therapy, supervision) to recognize reactions, understand their source, and use the"
      },
      {
        "id": "c",
        "text": "Refer clients who trigger strong emotional reactions as clinicians typically apply it",
        "isCorrect": false,
        "rationale": "\"Refer clients who trigger strong emotional reactions as clin…\" is not what the item tests — Countertransference management: develop self-awareness (personal therapy, supervision) to recognize reactions, understand their source, and use the"
      },
      {
        "id": "d",
        "text": "Remain emotionally neutral and unaffected by all client material at the intake stage",
        "isCorrect": false,
        "rationale": "\"Remain emotionally neutral and unaffected by all client mate…\" is not what the item tests — Countertransference management: develop self-awareness (personal therapy, supervision) to recognize reactions, understand their source, and use the"
      }
    ]
  },

  {
    "id": "tpse098",
    "domain": "skills",
    "subdomain": "CrisisIntervention",
    "difficulty": "medium",
    "question": "In crisis intervention, after ensuring immediate safety the NEXT priority is to:",
    "rationale": "After safety: establish connection, listen actively, understand the precipitating crisis from the client's own frame of reference. Comprehensive assessment follows but is not the first task — the person must first feel genuinely heard.",
    "options": [
      {
        "id": "a",
        "text": "Contact family members for collateral information immediately during a routine session",
        "isCorrect": false,
        "rationale": "\"Contact family members for collateral information immediatel…\" is not what the item tests — After safety: establish connection, listen actively, understand the precipitating crisis from the client's own frame of reference."
      },
      {
        "id": "b",
        "text": "Establish rapport and understand the precipitating event from the client's perspective",
        "isCorrect": true,
        "rationale": "After safety: establish connection, listen actively, understand the precipitating crisis from the client's own frame of reference. Comprehensive assessment follows but is not the first task — the person must first feel genuinely heard."
      },
      {
        "id": "c",
        "text": "Complete a comprehensive diagnostic intake assessment as clinicians typically apply it",
        "isCorrect": false,
        "rationale": "\"Complete a comprehensive diagnostic intake assessment as cli…\" is not what the item tests — After safety: establish connection, listen actively, understand the precipitating crisis from the client's own frame of reference."
      },
      {
        "id": "d",
        "text": "Provide psychoeducation about the client's presenting disorder during a routine session",
        "isCorrect": false,
        "rationale": "\"Provide psychoeducation about the client's presenting disord…\" is not what the item tests — After safety: establish connection, listen actively, understand the precipitating crisis from the client's own frame of reference."
      }
    ]
  },

  {
    "id": "tpse099",
    "domain": "skills",
    "subdomain": "GroupSkills",
    "difficulty": "medium",
    "question": "Which of Yalom's therapeutic factors involves group members realizing others share their struggles?",
    "rationale": "Universality (Yalom): the powerful relief clients experience when discovering others share their shame, fears, and difficulties — 'I'm not alone in this.' Altruism = giving to others; cohesiveness = sense of belonging; imparting information = psychoeducation.",
    "options": [
      {
        "id": "a",
        "text": "Altruism",
        "isCorrect": false,
        "rationale": "\"Altruism\" is not what the item tests — Universality (Yalom): the powerful relief clients experience when discovering others share their shame, fears, and difficulties — 'I'm not alone in this.' Altruism = giving to others; cohesiveness = s"
      },
      {
        "id": "b",
        "text": "Imparting information",
        "isCorrect": false,
        "rationale": "\"Imparting information\" is not what the item tests — Universality (Yalom): the powerful relief clients experience when discovering others share their shame, fears, and difficulties — 'I'm not alone in this.' Altruism = giving to others; coh"
      },
      {
        "id": "c",
        "text": "Universality",
        "isCorrect": true,
        "rationale": "Universality (Yalom): the powerful relief clients experience when discovering others share their shame, fears, and difficulties — 'I'm not alone in this.' Altruism = giving to others; cohesiveness = sense of belonging; i…"
      },
      {
        "id": "d",
        "text": "Group cohesiveness",
        "isCorrect": false,
        "rationale": "\"Group cohesiveness\" is not what the item tests — Universality (Yalom): the powerful relief clients experience when discovering others share their shame, fears, and difficulties — 'I'm not alone in this.' Altruism = giving to others; cohesi"
      }
    ]
  },

  {
    "id": "tpse100",
    "domain": "skills",
    "subdomain": "GroupSkills",
    "difficulty": "hard",
    "question": "In group counseling, a leader should be MOST clinically concerned about a member who:",
    "rationale": "Prolonged silence with increasing withdrawal may indicate escalating distress, deepening isolation, or suicidal ideation. A challenging member is typically engaged; a progressively withdrawn member warrants individual clinical attention and direct contact.",
    "options": [
      {
        "id": "a",
        "text": "Frequently and directly challenges the group leader's perspectives now",
        "isCorrect": false,
        "rationale": "\"Frequently and directly challenges the group leader's perspe…\" is not what the item tests — Prolonged silence with increasing withdrawal may indicate escalating distress, deepening isolation, or suicidal ideation."
      },
      {
        "id": "b",
        "text": "Shows consistent empathy toward other members' disclosures in practice",
        "isCorrect": false,
        "rationale": "\"Shows consistent empathy toward other members' disclosures i…\" is not what the item tests — Prolonged silence with increasing withdrawal may indicate escalating distress, deepening isolation, or suicidal ideation."
      },
      {
        "id": "c",
        "text": "Shares emotional material and cries openly in group at the intake stage",
        "isCorrect": false,
        "rationale": "\"Shares emotional material and cries openly in group at the i…\" is not what the item tests — Prolonged silence with increasing withdrawal may indicate escalating distress, deepening isolation, or suicidal ideation."
      },
      {
        "id": "d",
        "text": "Remains silent for several weeks with increasing behavioral withdrawal",
        "isCorrect": true,
        "rationale": "Prolonged silence with increasing withdrawal may indicate escalating distress, deepening isolation, or suicidal ideation."
      }
    ]
  },

  {
    "id": "tpse101",
    "domain": "skills",
    "subdomain": "Psychoeducation",
    "difficulty": "medium",
    "question": "Psychoeducation in counseling is MOST appropriately used to:",
    "rationale": "Psychoeducation: deliberate teaching of clinical concepts to reduce stigma, increase illness understanding, and support treatment engagement. Most effective when tailored to the client's current level and not used as an avoidance of exploratory work.",
    "options": [
      {
        "id": "a",
        "text": "Provide accurate information that reduces stigma and normalizes experience",
        "isCorrect": true,
        "rationale": "Psychoeducation: deliberate teaching of clinical concepts to reduce stigma, increase illness understanding, and support treatment engagement."
      },
      {
        "id": "b",
        "text": "Replace exploratory work when clients resist personal disclosure at intake",
        "isCorrect": false,
        "rationale": "\"Replace exploratory work when clients resist personal disclo…\" is not what the item tests — Psychoeducation: deliberate teaching of clinical concepts to reduce stigma, increase illness understanding, and support treatment engagement."
      },
      {
        "id": "c",
        "text": "Direct clients toward specific treatment decisions the clinician recommends",
        "isCorrect": false,
        "rationale": "\"Direct clients toward specific treatment decisions the clini…\" is not what the item tests — Psychoeducation: deliberate teaching of clinical concepts to reduce stigma, increase illness understanding, and support treatment engagement."
      },
      {
        "id": "d",
        "text": "Fill session time when clients are not ready to discuss personal material now",
        "isCorrect": false,
        "rationale": "\"Fill session time when clients are not ready to discuss pers…\" is not what the item tests — Psychoeducation: deliberate teaching of clinical concepts to reduce stigma, increase illness understanding, and support treatment engagement."
      }
    ]
  },

  {
    "id": "tpse102",
    "domain": "skills",
    "subdomain": "Interpretation",
    "difficulty": "hard",
    "question": "A well-timed and accurate clinical interpretation should:",
    "rationale": "Effective interpretation: offered tentatively ('I wonder if...'), close to the edge of awareness (not too deep), and invites the client's response rather than presenting as established fact. Premature or deep interpretations create defensiveness rather than insight.",
    "options": [
      {
        "id": "a",
        "text": "Reveal the definitive unconscious meaning behind the client's behavior at the intake stage",
        "isCorrect": false,
        "rationale": "\"Reveal the definitive unconscious meaning behind the client'…\" is not what the item tests — Effective interpretation: offered tentatively ('I wonder if...'), close to the edge of awareness (not too deep), and invites the client's response "
      },
      {
        "id": "b",
        "text": "Be offered tentatively, close to the client's current awareness, and invite their response",
        "isCorrect": true,
        "rationale": "Effective interpretation: offered tentatively ('I wonder if...'), close to the edge of awareness (not too deep), and invites the client's response rather than presenting as established fact."
      },
      {
        "id": "c",
        "text": "Clearly explain what the client's behavior means based on clinical theory during counseling",
        "isCorrect": false,
        "rationale": "\"Clearly explain what the client's behavior means based on cl…\" is not what the item tests — Effective interpretation: offered tentatively ('I wonder if...'), close to the edge of awareness (not too deep), and invites the client's response "
      },
      {
        "id": "d",
        "text": "Be provided only when explicitly requested by the client as the reference material frames it",
        "isCorrect": false,
        "rationale": "\"Be provided only when explicitly requested by the client as …\" is not what the item tests — Effective interpretation: offered tentatively ('I wonder if...'), close to the edge of awareness (not too deep), and invites the client's response "
      }
    ]
  },

  {
    "id": "tpse103",
    "domain": "skills",
    "subdomain": "Reframing",
    "difficulty": "medium",
    "question": "A counselor reframes a client's \"weakness\" in crying as \"the courage to feel deeply.\" This technique:",
    "rationale": "Reframing places behavior or experience in a different, often more constructive context without denying the original frame. When well-timed and accurate, it expands the client's perspective and reduces shame and self-criticism.",
    "options": [
      {
        "id": "a",
        "text": "Is inherently manipulative and should be avoided in ethical practice in this domain",
        "isCorrect": false,
        "rationale": "\"Is inherently manipulative and should be avoided in ethical …\" is not what the item tests — Reframing places behavior or experience in a different, often more constructive context without denying the original frame."
      },
      {
        "id": "b",
        "text": "Should only be used within cognitive-behavioral frameworks during a routine session",
        "isCorrect": false,
        "rationale": "\"Should only be used within cognitive-behavioral frameworks d…\" is not what the item tests — Reframing places behavior or experience in a different, often more constructive context without denying the original frame."
      },
      {
        "id": "c",
        "text": "Offers an alternative perspective that opens new ways of relating to the experience",
        "isCorrect": true,
        "rationale": "Reframing places behavior or experience in a different, often more constructive context without denying the original frame. When well-timed and accurate, it expands the client's perspective and reduces shame and self-criticism."
      },
      {
        "id": "d",
        "text": "Invalidates the client's experience by unilaterally changing its meaning in practice",
        "isCorrect": false,
        "rationale": "\"Invalidates the client's experience by unilaterally changing…\" is not what the item tests — Reframing places behavior or experience in a different, often more constructive context without denying the original frame."
      }
    ]
  },

  {
    "id": "tpse104",
    "domain": "skills",
    "subdomain": "Motivational",
    "difficulty": "medium",
    "question": "In Motivational Interviewing, \"rolling with resistance\" means:",
    "rationale": "Rolling with resistance: avoid arguing, don't confront resistance directly, don't label it as a problem to overcome. Instead, explore with curiosity, shift focus, or reflect ambivalence. Research confirms direct confrontation in MI reliably increases resistance.",
    "options": [
      {
        "id": "a",
        "text": "Helping clients understand why their resistance is clinically dysfunctional",
        "isCorrect": false,
        "rationale": "\"Helping clients understand why their resistance is clinicall…\" is not what the item tests — Rolling with resistance: avoid arguing, don't confront resistance directly, don't label it as a problem to overcome."
      },
      {
        "id": "b",
        "text": "Intentionally scheduling resistance discussions to contain them in practice",
        "isCorrect": false,
        "rationale": "\"Intentionally scheduling resistance discussions to contain t…\" is not what the item tests — Rolling with resistance: avoid arguing, don't confront resistance directly, don't label it as a problem to overcome."
      },
      {
        "id": "c",
        "text": "Accepting all client resistance and abandoning change goals during counseling",
        "isCorrect": false,
        "rationale": "\"Accepting all client resistance and abandoning change goals …\" is not what the item tests — Rolling with resistance: avoid arguing, don't confront resistance directly, don't label it as a problem to overcome."
      },
      {
        "id": "d",
        "text": "Not arguing or confronting ambivalence; instead reflecting and exploring it",
        "isCorrect": true,
        "rationale": "Rolling with resistance: avoid arguing, don't confront resistance directly, don't label it as a problem to overcome."
      }
    ]
  },

  {
    "id": "tpse105",
    "domain": "skills",
    "subdomain": "Motivational",
    "difficulty": "hard",
    "question": "The Stages of Change model identifies which client as being in the \"contemplation\" stage?",
    "rationale": "Contemplation: client is aware of the problem and considering change but has not committed to action — classic ambivalence. Precontemplation = no awareness or desire to change; preparation = planning; action = actively changing; maintenance = sustaining change.",
    "options": [
      {
        "id": "a",
        "text": "A client who acknowledges the problem but is genuinely ambivalent about changing",
        "isCorrect": true,
        "rationale": "Contemplation: client is aware of the problem and considering change but has not committed to action — classic ambivalence."
      },
      {
        "id": "b",
        "text": "A client who has changed and is working to sustain their gains during counseling",
        "isCorrect": false,
        "rationale": "\"A client who has changed and is working to sustain their gai…\" is not what the item tests — Contemplation: client is aware of the problem and considering change but has not committed to action — classic ambivalence."
      },
      {
        "id": "c",
        "text": "A client actively taking concrete steps to change their behavior during counseling",
        "isCorrect": false,
        "rationale": "\"A client actively taking concrete steps to change their beha…\" is not what the item tests — Contemplation: client is aware of the problem and considering change but has not committed to action — classic ambivalence."
      },
      {
        "id": "d",
        "text": "A client who does not believe they have a problem as clinicians typically apply it",
        "isCorrect": false,
        "rationale": "\"A client who does not believe they have a problem as clinici…\" is not what the item tests — Contemplation: client is aware of the problem and considering change but has not committed to action — classic ambivalence."
      }
    ]
  },

  {
    "id": "tpse106",
    "domain": "skills",
    "subdomain": "Assessment",
    "difficulty": "medium",
    "question": "A biopsychosocial assessment examines which THREE domains?",
    "rationale": "Biopsychosocial model (Engel, 1977): comprehensive assessment considers biological (genetics, neurobiology, medical status), psychological (cognition, emotion, behavior, personality), and social (relationships, culture, socioeconomic environment) factors.",
    "options": [
      {
        "id": "a",
        "text": "Behavior, personality, and social factors as taught",
        "isCorrect": false,
        "rationale": "\"Behavior, personality, and social factors now\" is not what the item tests — Biopsychosocial model (Engel, 1977): comprehensive assessment considers biological (genetics, neurobiology, medical status), psychological (cognition, emotion, beh"
      },
      {
        "id": "b",
        "text": "Biological, psychological, and social factors as used",
        "isCorrect": true,
        "rationale": "Biopsychosocial model (Engel, 1977): comprehensive assessment considers biological (genetics, neurobiology, medical status), psychological (cognition, emotion, behavior, personality), and social (relationships, culture…"
      },
      {
        "id": "c",
        "text": "Brain function, psychodynamics, and social learning history",
        "isCorrect": false,
        "rationale": "\"Brain function, psychodynamics, and social learning history\" is not what the item tests — Biopsychosocial model (Engel, 1977): comprehensive assessment considers biological (genetics, neurobiology, medical status), psychological (cognition"
      },
      {
        "id": "d",
        "text": "Background, present concerns, and social supports",
        "isCorrect": false,
        "rationale": "\"Background, present concerns, and social supports\" is not what the item tests — Biopsychosocial model (Engel, 1977): comprehensive assessment considers biological (genetics, neurobiology, medical status), psychological (cognition, emotion,"
      }
    ]
  },

  {
    "id": "tpse107",
    "domain": "skills",
    "subdomain": "Assessment",
    "difficulty": "medium",
    "question": "A Mental Status Examination (MSE) typically assesses:",
    "rationale": "MSE domains: appearance, behavior/motor activity, speech characteristics, mood (subjective) and affect (observed), thought process, thought content, perceptual disturbances, cognitive functioning, insight, and judgment.",
    "options": [
      {
        "id": "a",
        "text": "DSM diagnostic criteria for the presenting concern by counselors as the reference material frames it",
        "isCorrect": false,
        "rationale": "\"DSM diagnostic criteria for the presenting concern by counse…\" is not what the item tests — MSE domains: appearance, behavior/motor activity, speech characteristics, mood (subjective) and affect (observed), thought process, thought content"
      },
      {
        "id": "b",
        "text": "Social history, family of origin, and trauma history in practice as the reference material frames it",
        "isCorrect": false,
        "rationale": "\"Social history, family of origin, and trauma history in prac…\" is not what the item tests — MSE domains: appearance, behavior/motor activity, speech characteristics, mood (subjective) and affect (observed), thought process, thought content"
      },
      {
        "id": "c",
        "text": "Appearance, behavior, speech, mood/affect, thought process/content, cognition, and insight/judgment",
        "isCorrect": true,
        "rationale": "MSE domains: appearance, behavior/motor activity, speech characteristics, mood (subjective) and affect (observed), thought process, thought content, perceptual disturbances, cognitive functioning, insight, and judgment."
      },
      {
        "id": "d",
        "text": "Personality traits, defense mechanisms, and coping styles today as the reference material frames it",
        "isCorrect": false,
        "rationale": "\"Personality traits, defense mechanisms, and coping styles to…\" is not what the item tests — MSE domains: appearance, behavior/motor activity, speech characteristics, mood (subjective) and affect (observed), thought process, thought content"
      }
    ]
  },

  {
    "id": "tpse108",
    "domain": "skills",
    "subdomain": "Assessment",
    "difficulty": "hard",
    "question": "The Columbia Suicide Severity Rating Scale (C-SSRS) is specifically designed to assess:",
    "rationale": "C-SSRS (Posner et al.) standardizes suicidality assessment across: ideation (passive through active with plan and intent), ideation intensity, and behavior (attempts, preparatory acts, interrupted/aborted attempts). Widely used in clinical practice and research.",
    "options": [
      {
        "id": "a",
        "text": "Depression severity in outpatient clinical populations now",
        "isCorrect": false,
        "rationale": "\"Depression severity in outpatient clinical populations now\" is not what the item tests — C-SSRS (Posner et al.) standardizes suicidality assessment across: ideation (passive through active with plan and intent), ideation intensity, and beh"
      },
      {
        "id": "b",
        "text": "Risk factors for inpatient psychiatric hospitalization now",
        "isCorrect": false,
        "rationale": "\"Risk factors for inpatient psychiatric hospitalization now\" is not what the item tests — C-SSRS (Posner et al.) standardizes suicidality assessment across: ideation (passive through active with plan and intent), ideation intensity, and beh"
      },
      {
        "id": "c",
        "text": "Psychiatric symptom burden across multiple diagnostic domains",
        "isCorrect": false,
        "rationale": "\"Psychiatric symptom burden across multiple diagnostic domain…\" is not what the item tests — C-SSRS (Posner et al.) standardizes suicidality assessment across: ideation (passive through active with plan and intent), ideation intensity, and "
      },
      {
        "id": "d",
        "text": "Suicidal ideation intensity and suicidal behavior history",
        "isCorrect": true,
        "rationale": "C-SSRS (Posner et al.) standardizes suicidality assessment across: ideation (passive through active with plan and intent), ideation intensity, and behavior (attempts, preparatory acts, interrupted/aborted attempts)."
      }
    ]
  },

  {
    "id": "tpse109",
    "domain": "skills",
    "subdomain": "Supervision",
    "difficulty": "medium",
    "question": "In clinical supervision, \"parallel process\" refers to:",
    "rationale": "Parallel process: the supervisee mirrors with the supervisor what the client does with the supervisee — a client's helplessness becomes the supervisee's helplessness in supervision. When identified and named, it provides valuable data about the client-counselor dynamic.",
    "options": [
      {
        "id": "a",
        "text": "The supervisee unconsciously replicating client dynamics within the supervisory relationship",
        "isCorrect": true,
        "rationale": "Parallel process: the supervisee mirrors with the supervisor what the client does with the supervisee — a client's helplessness becomes the supervisee's helplessness in supervision."
      },
      {
        "id": "b",
        "text": "Simultaneously recording and reviewing supervision sessions for training at the intake stage",
        "isCorrect": false,
        "rationale": "\"Simultaneously recording and reviewing supervision sessions …\" is not what the item tests — Parallel process: the supervisee mirrors with the supervisor what the client does with the supervisee — a client's helplessness becomes the supervi"
      },
      {
        "id": "c",
        "text": "Two supervisors independently providing input on the same clinical case as usually described now",
        "isCorrect": false,
        "rationale": "\"Two supervisors independently providing input on the same cl…\" is not what the item tests — Parallel process: the supervisee mirrors with the supervisor what the client does with the supervisee — a client's helplessness becomes the supervi"
      },
      {
        "id": "d",
        "text": "Running individual therapy and group therapy concurrently with the same client by counselors",
        "isCorrect": false,
        "rationale": "\"Running individual therapy and group therapy concurrently wi…\" is not what the item tests — Parallel process: the supervisee mirrors with the supervisor what the client does with the supervisee — a client's helplessness becomes the supervi"
      }
    ]
  },

  {
    "id": "tpse110",
    "domain": "skills",
    "subdomain": "Supervision",
    "difficulty": "hard",
    "question": "Bernard's Discrimination Model of supervision identifies three supervisor roles: teacher, counselor, and:",
    "rationale": "Bernard's Discrimination Model: supervisor roles = teacher (instructive/didactic), counselor (focuses on supervisee's personal issues affecting clinical work), and consultant (collegial problem-solving). The focus areas = intervention skills, conceptualization, and personalization.",
    "options": [
      {
        "id": "a",
        "text": "Advocate",
        "isCorrect": false,
        "rationale": "\"Advocate\" is not what the item tests — Bernard's Discrimination Model: supervisor roles = teacher (instructive/didactic), counselor (focuses on supervisee's personal issues affecting clinical work), and consultant (collegial problem-solvin"
      },
      {
        "id": "b",
        "text": "Consultant",
        "isCorrect": true,
        "rationale": "Bernard's Discrimination Model: supervisor roles = teacher (instructive/didactic), counselor (focuses on supervisee's personal issues affecting clinical work), and consultant (collegial problem-solving)."
      },
      {
        "id": "c",
        "text": "Evaluator",
        "isCorrect": false,
        "rationale": "\"Evaluator\" is not what the item tests — Bernard's Discrimination Model: supervisor roles = teacher (instructive/didactic), counselor (focuses on supervisee's personal issues affecting clinical work), and consultant (collegial problem-solvi"
      },
      {
        "id": "d",
        "text": "Mentor",
        "isCorrect": false,
        "rationale": "\"Mentor\" is not what the item tests — Bernard's Discrimination Model: supervisor roles = teacher (instructive/didactic), counselor (focuses on supervisee's personal issues affecting clinical work), and consultant (collegial problem-solving)"
      }
    ]
  },

  {
    "id": "tpse111",
    "domain": "skills",
    "subdomain": "CulturalCompetence",
    "difficulty": "medium",
    "question": "Cultural humility differs from cultural competence primarily in that cultural humility:",
    "rationale": "Cultural humility (Tervalon & Murray-García, 1998): an ongoing process of self-reflection, self-critique, and recognizing power imbalances. 'Competence' implies a state achieved; 'humility' implies continuous learning that acknowledges the limits of one's knowledge.",
    "options": [
      {
        "id": "a",
        "text": "Requires acquiring specific factual knowledge about cultural groups in the outpatient setting",
        "isCorrect": false,
        "rationale": "\"Requires acquiring specific factual knowledge about cultural…\" is not what the item tests — Cultural humility (Tervalon & Murray-García, 1998): an ongoing process of self-reflection, self-critique, and recognizing power imbalances."
      },
      {
        "id": "b",
        "text": "Is concerned with institutional policy rather than individual clinical practice by counselors",
        "isCorrect": false,
        "rationale": "\"Is concerned with institutional policy rather than individua…\" is not what the item tests — Cultural humility (Tervalon & Murray-García, 1998): an ongoing process of self-reflection, self-critique, and recognizing power imbalances."
      },
      {
        "id": "c",
        "text": "Is an ongoing, lifelong process of self-reflection rather than an achieved state of knowledge",
        "isCorrect": true,
        "rationale": "Cultural humility (Tervalon & Murray-García, 1998): an ongoing process of self-reflection, self-critique, and recognizing power imbalances."
      },
      {
        "id": "d",
        "text": "Focuses on developing technical skills for working with specific populations during counseling",
        "isCorrect": false,
        "rationale": "\"Focuses on developing technical skills for working with spec…\" is not what the item tests — Cultural humility (Tervalon & Murray-García, 1998): an ongoing process of self-reflection, self-critique, and recognizing power imbalances."
      }
    ]
  },

  {
    "id": "tpse112",
    "domain": "skills",
    "subdomain": "CulturalCompetence",
    "difficulty": "hard",
    "question": "Microaggressions in the counseling context are clinically harmful because:",
    "rationale": "Microaggressions (Sue et al.): brief, commonplace messages that communicate negative, demeaning slights to members of marginalized groups. Their harm operates through cumulative effect, regardless of intent. Research shows they damage the therapeutic alliance and treatment outcomes.",
    "options": [
      {
        "id": "a",
        "text": "They are typically consciously intended to demean and invalidate clients during counseling",
        "isCorrect": false,
        "rationale": "\"They are typically consciously intended to demean and invali…\" is not what the item tests — Microaggressions (Sue et al.): brief, commonplace messages that communicate negative, demeaning slights to members of marginalized groups."
      },
      {
        "id": "b",
        "text": "They are too minor in individual occurrence to meaningfully affect therapeutic alliance now",
        "isCorrect": false,
        "rationale": "\"They are too minor in individual occurrence to meaningfully …\" is not what the item tests — Microaggressions (Sue et al.): brief, commonplace messages that communicate negative, demeaning slights to members of marginalized groups."
      },
      {
        "id": "c",
        "text": "They only significantly affect clients from visible racial minority groups during counseling",
        "isCorrect": false,
        "rationale": "\"They only significantly affect clients from visible racial m…\" is not what the item tests — Microaggressions (Sue et al.): brief, commonplace messages that communicate negative, demeaning slights to members of marginalized groups."
      },
      {
        "id": "d",
        "text": "They cumulatively communicate invalidation of marginalized identities regardless of intent",
        "isCorrect": true,
        "rationale": "Microaggressions (Sue et al.): brief, commonplace messages that communicate negative, demeaning slights to members of marginalized groups."
      }
    ]
  },

  {
    "id": "tpse113",
    "domain": "skills",
    "subdomain": "Advocacy",
    "difficulty": "medium",
    "question": "The ACA Advocacy Competencies identify three levels of advocacy. Which correctly names them?",
    "rationale": "ACA Advocacy Competencies (Lewis et al., 2003): Client/Student Level (empowerment and advocacy on behalf of), School/Community Level (community collaboration and systems advocacy), and Public Arena Level (public information and social/political advocacy).",
    "options": [
      {
        "id": "a",
        "text": "Client/student, school/community, and public arena",
        "isCorrect": true,
        "rationale": "ACA Advocacy Competencies (Lewis et al., 2003): Client/Student Level (empowerment and advocacy on behalf of), School/Community Level (community collaboration and systems advocacy), and Public Arena Level (public informat…"
      },
      {
        "id": "b",
        "text": "Individual, group, and societal at the intake stage",
        "isCorrect": false,
        "rationale": "\"Individual, group, and societal at the intake stage\" is not what the item tests — ACA Advocacy Competencies (Lewis et al., 2003): Client/Student Level (empowerment and advocacy on behalf of), School/Community Level (community collaboration"
      },
      {
        "id": "c",
        "text": "Internal, external, and systemic during counseling",
        "isCorrect": false,
        "rationale": "\"Internal, external, and systemic during counseling\" is not what the item tests — ACA Advocacy Competencies (Lewis et al., 2003): Client/Student Level (empowerment and advocacy on behalf of), School/Community Level (community collaboration "
      },
      {
        "id": "d",
        "text": "Personal, professional, and political by counselors",
        "isCorrect": false,
        "rationale": "\"Personal, professional, and political by counselors\" is not what the item tests — ACA Advocacy Competencies (Lewis et al., 2003): Client/Student Level (empowerment and advocacy on behalf of), School/Community Level (community collaboration"
      }
    ]
  },

  {
    "id": "tpse114",
    "domain": "skills",
    "subdomain": "TreatmentPlanning",
    "difficulty": "medium",
    "question": "An effective clinical treatment plan includes all of the following EXCEPT:",
    "rationale": "Treatment plan required components: presenting problem, goals/objectives (measurable), interventions, frequency/duration of services, and target dates. The therapist's theoretical orientation is clinical background context but is not a standard required treatment plan element.",
    "options": [
      {
        "id": "a",
        "text": "Target dates for goal completion itself as the reference material frames it",
        "isCorrect": false,
        "rationale": "\"Target dates for goal completion itself as the reference mat…\" is not what the item tests — Treatment plan required components: presenting problem, goals/objectives (measurable), interventions, frequency/duration of services, and target da"
      },
      {
        "id": "b",
        "text": "The therapist's theoretical orientation as a required documentation element",
        "isCorrect": true,
        "rationale": "Treatment plan required components: presenting problem, goals/objectives (measurable), interventions, frequency/duration of services, and target dates."
      },
      {
        "id": "c",
        "text": "Planned interventions tied to each identified goal during a routine session",
        "isCorrect": false,
        "rationale": "\"Planned interventions tied to each identified goal during a …\" is not what the item tests — Treatment plan required components: presenting problem, goals/objectives (measurable), interventions, frequency/duration of services, and target da"
      },
      {
        "id": "d",
        "text": "Measurable goals and specific objectives as the reference material frames it",
        "isCorrect": false,
        "rationale": "\"Measurable goals and specific objectives as the reference ma…\" is not what the item tests — Treatment plan required components: presenting problem, goals/objectives (measurable), interventions, frequency/duration of services, and target da"
      }
    ]
  },

  {
    "id": "tpse115",
    "domain": "skills",
    "subdomain": "Documentation",
    "difficulty": "medium",
    "question": "SOAP note format stands for:",
    "rationale": "SOAP: Subjective (what client reports — symptoms, statements), Objective (observable data — MSE, behavioral observations, affect), Assessment (clinical impression, progress toward goals, risk level), Plan (interventions, next steps, homework). Standard in medical and mental health documentation.",
    "options": [
      {
        "id": "a",
        "text": "Symptoms, Observations, Assessment, Plan",
        "isCorrect": false,
        "rationale": "\"Symptoms, Observations, Assessment, Plan\" is not what the item tests — SOAP: Subjective (what client reports — symptoms, statements), Objective (observable data — MSE, behavioral observations, affect), Assessment (clinical impression, prog"
      },
      {
        "id": "b",
        "text": "Summary, Outcomes, Analysis, Prognosis now",
        "isCorrect": false,
        "rationale": "\"Summary, Outcomes, Analysis, Prognosis now\" is not what the item tests — SOAP: Subjective (what client reports — symptoms, statements), Objective (observable data — MSE, behavioral observations, affect), Assessment (clinical impression, pr"
      },
      {
        "id": "c",
        "text": "Subjective, Objective, Assessment, Plan",
        "isCorrect": true,
        "rationale": "SOAP: Subjective (what client reports — symptoms, statements), Objective (observable data — MSE, behavioral observations, affect), Assessment (clinical impression, progress toward goals, risk level), Plan (interventions…"
      },
      {
        "id": "d",
        "text": "Session, Observations, Approach, Progress",
        "isCorrect": false,
        "rationale": "\"Session, Observations, Approach, Progress\" is not what the item tests — SOAP: Subjective (what client reports — symptoms, statements), Objective (observable data — MSE, behavioral observations, affect), Assessment (clinical impression, pro"
      }
    ]
  },

  {
    "id": "tpse116",
    "domain": "skills",
    "subdomain": "Documentation",
    "difficulty": "hard",
    "question": "Clinical records should be written with the understanding that they:",
    "rationale": "Clinical records can be accessed by: clients (right to records), courts (subpoena), insurance companies (utilization review), licensing boards (complaint investigations), and supervisors. Write as if any appropriate third party might read it — clinically relevant and legally defensible.",
    "options": [
      {
        "id": "a",
        "text": "Are private documents unlikely to ever be reviewed by outside parties during counseling",
        "isCorrect": false,
        "rationale": "\"Are private documents unlikely to ever be reviewed by outsid…\" is not what the item tests — Clinical records can be accessed by: clients (right to records), courts (subpoena), insurance companies (utilization review), licensing boards (com"
      },
      {
        "id": "b",
        "text": "Should omit negative client statements to avoid potential harm if records are accessed now",
        "isCorrect": false,
        "rationale": "\"Should omit negative client statements to avoid potential ha…\" is not what the item tests — Clinical records can be accessed by: clients (right to records), courts (subpoena), insurance companies (utilization review), licensing boards (com"
      },
      {
        "id": "c",
        "text": "Must capture every detail of every session to constitute adequate documentation as used",
        "isCorrect": false,
        "rationale": "\"Must capture every detail of every session to constitute ade…\" is not what the item tests — Clinical records can be accessed by: clients (right to records), courts (subpoena), insurance companies (utilization review), licensing boards (com"
      },
      {
        "id": "d",
        "text": "May be subpoenaed, accessed by clients, and reviewed by supervisors or licensing boards",
        "isCorrect": true,
        "rationale": "Clinical records can be accessed by: clients (right to records), courts (subpoena), insurance companies (utilization review), licensing boards (complaint investigations), and supervisors."
      }
    ]
  },

  {
    "id": "tpse117",
    "domain": "skills",
    "subdomain": "Referral",
    "difficulty": "medium",
    "question": "When referring a client to another provider, the counselor's ethical responsibility includes:",
    "rationale": "Ethical referral: ensure client safety during transition (warm handoff where possible), continue providing at minimum crisis support until new services begin, document referral rationale and outcome. Abrupt termination without transition support constitutes abandonment — an ethical violation.",
    "options": [
      {
        "id": "a",
        "text": "Providing a warm handoff, continuing until new provider is engaged, and documenting the referral",
        "isCorrect": true,
        "rationale": "Ethical referral: ensure client safety during transition (warm handoff where possible), continue providing at minimum crisis support until new services begin, document referral rationale and outcome."
      },
      {
        "id": "b",
        "text": "Providing a referral list and requiring the client to manage their own transition in this domain",
        "isCorrect": false,
        "rationale": "\"Providing a referral list and requiring the client to manage…\" is not what the item tests — Ethical referral: ensure client safety during transition (warm handoff where possible), continue providing at minimum crisis support until new serv"
      },
      {
        "id": "c",
        "text": "Ending the current therapeutic relationship immediately upon making the referral during counseling",
        "isCorrect": false,
        "rationale": "\"Ending the current therapeutic relationship immediately upon…\" is not what the item tests — Ethical referral: ensure client safety during transition (warm handoff where possible), continue providing at minimum crisis support until new serv"
      },
      {
        "id": "d",
        "text": "Maintaining simultaneous roles with both providers until transition is fully complete in practice",
        "isCorrect": false,
        "rationale": "\"Maintaining simultaneous roles with both providers until tra…\" is not what the item tests — Ethical referral: ensure client safety during transition (warm handoff where possible), continue providing at minimum crisis support until new serv"
      }
    ]
  },

  {
    "id": "tpse118",
    "domain": "skills",
    "subdomain": "Mindfulness",
    "difficulty": "medium",
    "question": "Mindfulness in clinical practice is BEST defined as:",
    "rationale": "Mindfulness (Kabat-Zinn): 'paying attention in a particular way: on purpose, in the present moment, and non-judgmentally.' It is not merely relaxation (though relaxation may result) and is distinguished from cognitive restructuring by its acceptance orientation.",
    "options": [
      {
        "id": "a",
        "text": "Cognitive restructuring accomplished through present-focused awareness",
        "isCorrect": false,
        "rationale": "\"Cognitive restructuring accomplished through present-focused…\" is not what the item tests — Mindfulness (Kabat-Zinn): 'paying attention in a particular way: on purpose, in the present moment, and non-judgmentally.' It is not merely relaxat"
      },
      {
        "id": "b",
        "text": "Deliberate, non-judgmental attention to present-moment experience",
        "isCorrect": true,
        "rationale": "Mindfulness (Kabat-Zinn): 'paying attention in a particular way: on purpose, in the present moment, and non-judgmentally.' It is not merely relaxation (though relaxation may result) and is distinguished from cognitive re…"
      },
      {
        "id": "c",
        "text": "A relaxation technique primarily used for anxiety reduction today",
        "isCorrect": false,
        "rationale": "\"A relaxation technique primarily used for anxiety reduction …\" is not what the item tests — Mindfulness (Kabat-Zinn): 'paying attention in a particular way: on purpose, in the present moment, and non-judgmentally.' It is not merely relaxat"
      },
      {
        "id": "d",
        "text": "A Buddhist spiritual practice adapted for secular therapy contexts",
        "isCorrect": false,
        "rationale": "\"A Buddhist spiritual practice adapted for secular therapy co…\" is not what the item tests — Mindfulness (Kabat-Zinn): 'paying attention in a particular way: on purpose, in the present moment, and non-judgmentally.' It is not merely relaxat"
      }
    ]
  },

  {
    "id": "tpse119",
    "domain": "skills",
    "subdomain": "Telehealth",
    "difficulty": "medium",
    "question": "When providing telehealth counseling, which consideration is UNIQUE to this delivery format?",
    "rationale": "Telehealth requires all standard ethical practices PLUS: verifying client's physical location for emergencies (cannot physically intervene), confirming who may be present nearby, ensuring technology security (HIPAA-compliant platform), and cross-jurisdictional licensing compliance. Emergency planning for remote location is uniquely critical.",
    "options": [
      {
        "id": "a",
        "text": "Documenting session content and clinical impressions at the intake stage",
        "isCorrect": false,
        "rationale": "\"Documenting session content and clinical impressions at the …\" is not what the item tests — Telehealth requires all standard ethical practices PLUS: verifying client's physical location for emergencies (cannot physically intervene), confir"
      },
      {
        "id": "b",
        "text": "Maintaining confidentiality of clinical communications during counseling",
        "isCorrect": false,
        "rationale": "\"Maintaining confidentiality of clinical communications durin…\" is not what the item tests — Telehealth requires all standard ethical practices PLUS: verifying client's physical location for emergencies (cannot physically intervene), confir"
      },
      {
        "id": "c",
        "text": "Having a verified emergency protocol for the client's physical location",
        "isCorrect": true,
        "rationale": "Telehealth requires all standard ethical practices PLUS: verifying client's physical location for emergencies (cannot physically intervene), confirming who may be present nearby, ensuring technology security (HIPAA-compl…"
      },
      {
        "id": "d",
        "text": "Obtaining informed consent before beginning services at the intake stage",
        "isCorrect": false,
        "rationale": "\"Obtaining informed consent before beginning services at the …\" is not what the item tests — Telehealth requires all standard ethical practices PLUS: verifying client's physical location for emergencies (cannot physically intervene), confir"
      }
    ]
  },

  {
    "id": "tpse120",
    "domain": "skills",
    "subdomain": "EvidenceBased",
    "difficulty": "medium",
    "question": "Evidence-based practice (EBP) in counseling integrates:",
    "rationale": "EBP (APA, 2006) = integration of three elements: best available research evidence + clinical expertise (informed judgment based on experience) + client values, preferences, and cultural context. All three are required — research without clinical judgment or client fit is not EBP.",
    "options": [
      {
        "id": "a",
        "text": "Manualized protocols followed without deviation to ensure fidelity itself",
        "isCorrect": false,
        "rationale": "\"Manualized protocols followed without deviation to ensure fi…\" is not what the item tests — EBP (APA, 2006) = integration of three elements: best available research evidence + clinical expertise (informed judgment based on experience) + cl"
      },
      {
        "id": "b",
        "text": "Research evidence only, applied uniformly regardless of client context now",
        "isCorrect": false,
        "rationale": "\"Research evidence only, applied uniformly regardless of clie…\" is not what the item tests — EBP (APA, 2006) = integration of three elements: best available research evidence + clinical expertise (informed judgment based on experience) + cl"
      },
      {
        "id": "c",
        "text": "Empirically supported treatments applied through standardized protocols now",
        "isCorrect": false,
        "rationale": "\"Empirically supported treatments applied through standardize…\" is not what the item tests — EBP (APA, 2006) = integration of three elements: best available research evidence + clinical expertise (informed judgment based on experience) + cl"
      },
      {
        "id": "d",
        "text": "Best research evidence, clinical expertise, and client preferences/values",
        "isCorrect": true,
        "rationale": "EBP (APA, 2006) = integration of three elements: best available research evidence + clinical expertise (informed judgment based on experience) + client values, preferences, and cultural context."
      }
    ]
  },

  {
    "id": "tpse121",
    "domain": "ethics",
    "subdomain": "Confidentiality",
    "difficulty": "easy",
    "question": "Confidentiality in counseling is best defined as:",
    "rationale": "Confidentiality is an ethical duty with legal backing, but not absolute. Standard limits: danger to self/others, mandatory reporting obligations, court orders, insurance utilization review, supervision, and consultation. 'Privilege' is the client's separate legal right in court contexts.",
    "options": [
      {
        "id": "a",
        "text": "The ethical and legal protection of client-shared information with clearly specified limits",
        "isCorrect": true,
        "rationale": "Confidentiality is an ethical duty with legal backing, but not absolute."
      },
      {
        "id": "b",
        "text": "A promise to keep all therapy records permanently sealed as the reference material frames it",
        "isCorrect": false,
        "rationale": "\"A promise to keep all therapy records permanently sealed as …\" is not what the item tests — Confidentiality is an ethical duty with legal backing, but not absolute."
      },
      {
        "id": "c",
        "text": "A legal privilege that prevents any disclosure in court as the reference material frames it",
        "isCorrect": false,
        "rationale": "\"A legal privilege that prevents any disclosure in court as t…\" is not what the item tests — Confidentiality is an ethical duty with legal backing, but not absolute."
      },
      {
        "id": "d",
        "text": "An absolute promise rarely to share any client information under any circumstances at intake",
        "isCorrect": false,
        "rationale": "\"An absolute promise rarely to share any client information u…\" is not what the item tests — Confidentiality is an ethical duty with legal backing, but not absolute."
      }
    ]
  },

  {
    "id": "tpse122",
    "domain": "ethics",
    "subdomain": "Confidentiality",
    "difficulty": "medium",
    "question": "A counselor receives a call from a client's employer asking about the client's attendance and treatment progress. The MOST ethical response is:",
    "rationale": "Without a signed release, counselors should not confirm or deny whether someone is their client (HIPAA minimum necessary standard). Confirming treatment status alone constitutes a confidentiality breach. The caller should be directed to obtain consent from the client.",
    "options": [
      {
        "id": "a",
        "text": "Confirm the client is in treatment but share no clinical details by counselors",
        "isCorrect": false,
        "rationale": "\"Confirm the client is in treatment but share no clinical det…\" is not what the item tests — Without a signed release, counselors should not confirm or deny whether someone is their client (HIPAA minimum necessary standard)."
      },
      {
        "id": "b",
        "text": "Decline to confirm or deny the client is in treatment without a signed release",
        "isCorrect": true,
        "rationale": "Without a signed release, counselors should not confirm or deny whether someone is their client (HIPAA minimum necessary standard)."
      },
      {
        "id": "c",
        "text": "Refer the employer directly to the client for information as usually described",
        "isCorrect": false,
        "rationale": "\"Refer the employer directly to the client for information as…\" is not what the item tests — Without a signed release, counselors should not confirm or deny whether someone is their client (HIPAA minimum necessary standard)."
      },
      {
        "id": "d",
        "text": "Provide general information since employers have a legitimate occupational interest",
        "isCorrect": false,
        "rationale": "\"Provide general information since employers have a legitimat…\" is not what the item tests — Without a signed release, counselors should not confirm or deny whether someone is their client (HIPAA minimum necessary standard)."
      }
    ]
  },

  {
    "id": "tpse123",
    "domain": "ethics",
    "subdomain": "Confidentiality",
    "difficulty": "medium",
    "question": "Confidentiality in group counseling is ethically unique because:",
    "rationale": "In group counseling, the leader can commit to their own confidentiality but cannot compel or legally guarantee group members will maintain it. This limitation must be clearly disclosed in informed consent. A member breach is an ethical issue to address in group but cannot be prevented by legal authority.",
    "options": [
      {
        "id": "a",
        "text": "Information shared in groups is rarely legally protected as confidential during counseling",
        "isCorrect": false,
        "rationale": "\"Information shared in groups is rarely legally protected as …\" is not what the item tests — In group counseling, the leader can commit to their own confidentiality but cannot compel or legally guarantee group members will maintain it."
      },
      {
        "id": "b",
        "text": "Confidentiality is optional in group settings under ACA standards during a routine session",
        "isCorrect": false,
        "rationale": "\"Confidentiality is optional in group settings under ACA stan…\" is not what the item tests — In group counseling, the leader can commit to their own confidentiality but cannot compel or legally guarantee group members will maintain it."
      },
      {
        "id": "c",
        "text": "The group leader cannot guarantee that other group members will maintain confidentiality",
        "isCorrect": true,
        "rationale": "In group counseling, the leader can commit to their own confidentiality but cannot compel or legally guarantee group members will maintain it."
      },
      {
        "id": "d",
        "text": "HIPAA protections extend equally to all group member disclosures during a routine session",
        "isCorrect": false,
        "rationale": "\"HIPAA protections extend equally to all group member disclos…\" is not what the item tests — In group counseling, the leader can commit to their own confidentiality but cannot compel or legally guarantee group members will maintain it."
      }
    ]
  },

  {
    "id": "tpse124",
    "domain": "ethics",
    "subdomain": "Confidentiality",
    "difficulty": "hard",
    "question": "A deceased client's adult child requests access to their parent's therapy records. The counselor should FIRST:",
    "rationale": "Confidentiality survives death in most jurisdictions, but laws vary considerably. Some states allow executor/estate administrator access; others protect records indefinitely. Consult state statute and legal counsel. Clinical judgment about potential harm to the child from the content is also ethically relevant.",
    "options": [
      {
        "id": "a",
        "text": "Release records since the client is deceased and confidentiality obligations have ended during counseling",
        "isCorrect": false,
        "rationale": "\"Release records since the client is deceased and confidentia…\" is not what the item tests — Confidentiality survives death in most jurisdictions, but laws vary considerably."
      },
      {
        "id": "b",
        "text": "Release records only if the requesting child was also a client today as the reference material frames it",
        "isCorrect": false,
        "rationale": "\"Release records only if the requesting child was also a clie…\" is not what the item tests — Confidentiality survives death in most jurisdictions, but laws vary considerably."
      },
      {
        "id": "c",
        "text": "Refuse all requests generally since the client can no longer provide consent at the level the item tests",
        "isCorrect": false,
        "rationale": "\"Refuse all requests generally since the client can no longer…\" is not what the item tests — Confidentiality survives death in most jurisdictions, but laws vary considerably."
      },
      {
        "id": "d",
        "text": "Consult state law, as confidentiality obligations to deceased clients vary significantly by jurisdiction",
        "isCorrect": true,
        "rationale": "Confidentiality survives death in most jurisdictions, but laws vary considerably."
      }
    ]
  },

  {
    "id": "tpse125",
    "domain": "ethics",
    "subdomain": "InformedConsent",
    "difficulty": "easy",
    "question": "Informed consent for counseling must include all of the following EXCEPT:",
    "rationale": "Required informed consent elements: nature of counseling, limits of confidentiality, risks/benefits of treatment, fees/billing, crisis procedures, and client rights. Personal values are not required disclosure elements — they would be disclosed only when relevant to service limitations (e.g., value-based referral).",
    "options": [
      {
        "id": "a",
        "text": "The counselor's personal values and religious beliefs",
        "isCorrect": true,
        "rationale": "Required informed consent elements: nature of counseling, limits of confidentiality, risks/benefits of treatment, fees/billing, crisis procedures, and client rights."
      },
      {
        "id": "b",
        "text": "Fees, billing procedures, and payment policies itself",
        "isCorrect": false,
        "rationale": "\"Fees, billing procedures, and payment policies itself\" is not what the item tests — Required informed consent elements: nature of counseling, limits of confidentiality, risks/benefits of treatment, fees/billing, crisis procedures, and clie"
      },
      {
        "id": "c",
        "text": "The nature and specific limits of confidentiality now",
        "isCorrect": false,
        "rationale": "\"The nature and specific limits of confidentiality now\" is not what the item tests — Required informed consent elements: nature of counseling, limits of confidentiality, risks/benefits of treatment, fees/billing, crisis procedures, and clie"
      },
      {
        "id": "d",
        "text": "The client's rights and responsibilities in therapy",
        "isCorrect": false,
        "rationale": "\"The client's rights and responsibilities in the therapeutic …\" is not what the item tests — Required informed consent elements: nature of counseling, limits of confidentiality, risks/benefits of treatment, fees/billing, crisis procedures, "
      }
    ]
  },

  {
    "id": "tpse126",
    "domain": "ethics",
    "subdomain": "InformedConsent",
    "difficulty": "medium",
    "question": "When counseling minors, informed consent is MOST ethically addressed by:",
    "rationale": "Parents/guardians provide legal consent; minors provide assent (agreement to participate in services). Assent is ethically important even when not legally required — particularly for older adolescents. Some states allow minors to independently consent to specific services (mental health, substance use, reproductive health).",
    "options": [
      {
        "id": "a",
        "text": "Obtaining consent only from the minor if services are sought voluntarily at intake",
        "isCorrect": false,
        "rationale": "\"Obtaining consent only from the minor if services are sought…\" is not what the item tests — Parents/guardians provide legal consent; minors provide assent (agreement to participate in services)."
      },
      {
        "id": "b",
        "text": "Obtaining parental consent and the minor's assent when developmentally appropriate",
        "isCorrect": true,
        "rationale": "Parents/guardians provide legal consent; minors provide assent (agreement to participate in services)."
      },
      {
        "id": "c",
        "text": "Consent is not ethically required for minors since parents have full legal authority",
        "isCorrect": false,
        "rationale": "\"Consent is not ethically required for minors since parents h…\" is not what the item tests — Parents/guardians provide legal consent; minors provide assent (agreement to participate in services)."
      },
      {
        "id": "d",
        "text": "Obtaining consent only from the parent or legal guardian in the outpatient setting",
        "isCorrect": false,
        "rationale": "\"Obtaining consent only from the parent or legal guardian in …\" is not what the item tests — Parents/guardians provide legal consent; minors provide assent (agreement to participate in services)."
      }
    ]
  },

  {
    "id": "tpse127",
    "domain": "ethics",
    "subdomain": "InformedConsent",
    "difficulty": "hard",
    "question": "A client with schizophrenia agreed to treatment when stable but is now refusing medication during a psychotic episode. The MOST accurate ethical framing is:",
    "rationale": "Capacity is decision-specific and moment-specific — it must be re-assessed. When psychotic, capacity to meaningfully consent or refuse may be impaired. Psychiatric Advance Directives (PADs) address this by allowing competent individuals to make instructions for times when they are not competent.",
    "options": [
      {
        "id": "a",
        "text": "Beneficence requires treating against the expressed will of any client with psychosis in practice",
        "isCorrect": false,
        "rationale": "\"Beneficence requires treating against the expressed will of …\" is not what the item tests — Capacity is decision-specific and moment-specific — it must be re-assessed."
      },
      {
        "id": "b",
        "text": "Autonomy typically overrides beneficence in competent adults now as clinicians typically apply it now",
        "isCorrect": false,
        "rationale": "\"Autonomy typically overrides beneficence in competent adults…\" is not what the item tests — Capacity is decision-specific and moment-specific — it must be re-assessed."
      },
      {
        "id": "c",
        "text": "Decision-making capacity must be assessed; the refusal may be involuntary if capacity is impaired",
        "isCorrect": true,
        "rationale": "Capacity is decision-specific and moment-specific — it must be re-assessed."
      },
      {
        "id": "d",
        "text": "Prior consent remains permanently binding regardless of current mental state as usually described",
        "isCorrect": false,
        "rationale": "\"Prior consent remains permanently binding regardless of curr…\" is not what the item tests — Capacity is decision-specific and moment-specific — it must be re-assessed."
      }
    ]
  },

  {
    "id": "tpse128",
    "domain": "ethics",
    "subdomain": "DualRelationships",
    "difficulty": "easy",
    "question": "The ACA Code prohibits sexual relationships with current clients primarily because:",
    "rationale": "The therapeutic relationship carries an inherent power differential that compromises the client's ability to give fully free and genuine consent. The prohibition is fundamentally about protecting clients from exploitation — regardless of whether the client appears to want the relationship.",
    "options": [
      {
        "id": "a",
        "text": "Society and professional bodies regard such relationships as broadly immoral at the intake stage",
        "isCorrect": false,
        "rationale": "\"Society and professional bodies regard such relationships as…\" is not what the item tests — The therapeutic relationship carries an inherent power differential that compromises the client's ability to give fully free and genuine consent."
      },
      {
        "id": "b",
        "text": "They create scheduling and documentation complications that compromise care as usually described now",
        "isCorrect": false,
        "rationale": "\"They create scheduling and documentation complications that …\" is not what the item tests — The therapeutic relationship carries an inherent power differential that compromises the client's ability to give fully free and genuine consent."
      },
      {
        "id": "c",
        "text": "Such relationships are typically unwanted by clients who are experiencing them during counseling",
        "isCorrect": false,
        "rationale": "\"Such relationships are typically unwanted by clients who are…\" is not what the item tests — The therapeutic relationship carries an inherent power differential that compromises the client's ability to give fully free and genuine consent."
      },
      {
        "id": "d",
        "text": "The inherent power differential in the therapeutic relationship makes genuine consent impossible",
        "isCorrect": true,
        "rationale": "The therapeutic relationship carries an inherent power differential that compromises the client's ability to give fully free and genuine consent."
      }
    ]
  },

  {
    "id": "tpse129",
    "domain": "ethics",
    "subdomain": "DualRelationships",
    "difficulty": "medium",
    "question": "The ACA Code of Ethics addresses sexual relationships with FORMER clients by:",
    "rationale": "ACA Code A.5.b: counselors do not engage in sexual/romantic relationships with former clients, their romantic partners, or family members for 5 years following last professional contact — and even then only in the most unusual circumstances. The counselor bears the burden of demonstrating no exploitation.",
    "options": [
      {
        "id": "a",
        "text": "Requiring a minimum of 5 years and documentation that no exploitation occurred",
        "isCorrect": true,
        "rationale": "ACA Code A.5.b: counselors do not engage in sexual/romantic relationships with former clients, their romantic partners, or family members for 5 years following last professional contact — and even then only in the most u…"
      },
      {
        "id": "b",
        "text": "Permanently prohibiting them under all circumstances in the outpatient setting",
        "isCorrect": false,
        "rationale": "\"Permanently prohibiting them under all circumstances in the …\" is not what the item tests — ACA Code A.5.b: counselors do not engage in sexual/romantic relationships with former clients, their romantic partners, or family members for 5 yea"
      },
      {
        "id": "c",
        "text": "Permitting them after 6 months following the last professional contact as used",
        "isCorrect": false,
        "rationale": "\"Permitting them after 6 months following the last profession…\" is not what the item tests — ACA Code A.5.b: counselors do not engage in sexual/romantic relationships with former clients, their romantic partners, or family members for 5 yea"
      },
      {
        "id": "d",
        "text": "Permitting them after 2 years with written supervisor approval during counseling",
        "isCorrect": false,
        "rationale": "\"Permitting them after 2 years with written supervisor approv…\" is not what the item tests — ACA Code A.5.b: counselors do not engage in sexual/romantic relationships with former clients, their romantic partners, or family members for 5 yea"
      }
    ]
  },

  {
    "id": "tpse130",
    "domain": "ethics",
    "subdomain": "DualRelationships",
    "difficulty": "hard",
    "question": "A school counselor is asked to provide individual therapy for a student they already see for career guidance. This represents:",
    "rationale": "Dual roles are not automatically prohibited but require assessment of potential harm. This situation carries real risks: role confusion, compromised objectivity, and impact on the career guidance relationship. The counselor should assess harm potential and consider referral for the individual therapy component.",
    "options": [
      {
        "id": "a",
        "text": "An absolute ethical violation that must be generally refused as clinicians typically apply it",
        "isCorrect": false,
        "rationale": "\"An absolute ethical violation that must be generally refused…\" is not what the item tests — Dual roles are not automatically prohibited but require assessment of potential harm."
      },
      {
        "id": "b",
        "text": "A potentially problematic dual role requiring careful ethical assessment before proceeding",
        "isCorrect": true,
        "rationale": "Dual roles are not automatically prohibited but require assessment of potential harm."
      },
      {
        "id": "c",
        "text": "A straightforward extension of existing services requiring no special consideration itself",
        "isCorrect": false,
        "rationale": "\"A straightforward extension of existing services requiring n…\" is not what the item tests — Dual roles are not automatically prohibited but require assessment of potential harm."
      },
      {
        "id": "d",
        "text": "An appropriate use of established rapport for efficient and integrated service delivery now",
        "isCorrect": false,
        "rationale": "\"An appropriate use of established rapport for efficient and …\" is not what the item tests — Dual roles are not automatically prohibited but require assessment of potential harm."
      }
    ]
  },

  {
    "id": "tpse131",
    "domain": "ethics",
    "subdomain": "MandatoryReporting",
    "difficulty": "easy",
    "question": "Mandatory reporting laws require counselors to report child abuse based on:",
    "rationale": "Mandatory reporters are not investigators — they report reasonable suspicion. The investigation is the responsibility of Child Protective Services. Waiting for certainty before reporting constitutes a failure to report and creates legal and ethical liability.",
    "options": [
      {
        "id": "a",
        "text": "Only direct disclosures made by the child in session during counseling",
        "isCorrect": false,
        "rationale": "\"Only direct disclosures made by the child in session during …\" is not what the item tests — Mandatory reporters are not investigators — they report reasonable suspicion."
      },
      {
        "id": "b",
        "text": "Only confirmed incidents, not mere suspicion during a routine session",
        "isCorrect": false,
        "rationale": "\"Only confirmed incidents, not mere suspicion during a routin…\" is not what the item tests — Mandatory reporters are not investigators — they report reasonable suspicion."
      },
      {
        "id": "c",
        "text": "Reasonable suspicion of abuse or neglect — certainty is not required",
        "isCorrect": true,
        "rationale": "Mandatory reporters are not investigators — they report reasonable suspicion."
      },
      {
        "id": "d",
        "text": "Abuse only if the counselor personally witnessed it occurring itself",
        "isCorrect": false,
        "rationale": "\"Abuse only if the counselor personally witnessed it occurrin…\" is not what the item tests — Mandatory reporters are not investigators — they report reasonable suspicion."
      }
    ]
  },

  {
    "id": "tpse132",
    "domain": "ethics",
    "subdomain": "MandatoryReporting",
    "difficulty": "medium",
    "question": "When a client discloses abuse they experienced as a child (now an adult), with no current minor at risk, the counselor is:",
    "rationale": "Mandatory reporting is triggered by present or ongoing risk to a current child. A client disclosing their own past victimization generally does not trigger reporting unless there is reason to believe the historical perpetrator currently has access to children. Consult state law for jurisdiction-specific guidance.",
    "options": [
      {
        "id": "a",
        "text": "Required to report the historical perpetrator to law enforcement during a routine session",
        "isCorrect": false,
        "rationale": "\"Required to report the historical perpetrator to law enforce…\" is not what the item tests — Mandatory reporting is triggered by present or ongoing risk to a current child."
      },
      {
        "id": "b",
        "text": "Required to notify the survivor's current family members as clinicians typically apply it",
        "isCorrect": false,
        "rationale": "\"Required to notify the survivor's current family members as …\" is not what the item tests — Mandatory reporting is triggered by present or ongoing risk to a current child."
      },
      {
        "id": "c",
        "text": "Required to report to CPS regardless of whether any child is currently at risk in practice",
        "isCorrect": false,
        "rationale": "\"Required to report to CPS regardless of whether any child is…\" is not what the item tests — Mandatory reporting is triggered by present or ongoing risk to a current child."
      },
      {
        "id": "d",
        "text": "Generally not required to report absent current risk to a child; should consult state law",
        "isCorrect": true,
        "rationale": "Mandatory reporting is triggered by present or ongoing risk to a current child."
      }
    ]
  },

  {
    "id": "tpse133",
    "domain": "ethics",
    "subdomain": "MandatoryReporting",
    "difficulty": "hard",
    "question": "A client works in elder care and the counselor suspects they may be financially exploiting elderly patients. The reporting obligation depends on:",
    "rationale": "Elder abuse mandatory reporting statutes vary significantly by state — not all states designate counselors as mandatory reporters for elder abuse (unlike child abuse, where all states do). Check state-specific law. ACA ethics also call for protecting vulnerable individuals, informing ethical considerations even when a specific mandate is absent.",
    "options": [
      {
        "id": "a",
        "text": "State law — unlike child abuse reporting, elder abuse mandatory reporting statutes vary significantly",
        "isCorrect": true,
        "rationale": "Elder abuse mandatory reporting statutes vary significantly by state — not all states designate counselors as mandatory reporters for elder abuse (unlike child abuse, where all states do)."
      },
      {
        "id": "b",
        "text": "HIPAA regulations governing disclosure of PHI at the intake stage as the reference material frames it",
        "isCorrect": false,
        "rationale": "\"HIPAA regulations governing disclosure of PHI at the intake …\" is not what the item tests — Elder abuse mandatory reporting statutes vary significantly by state — not all states designate counselors as mandatory reporters for elder abuse ("
      },
      {
        "id": "c",
        "text": "Whether the exploitation involves physical harm in addition to financial as clinicians typically apply it",
        "isCorrect": false,
        "rationale": "\"Whether the exploitation involves physical harm in addition …\" is not what the item tests — Elder abuse mandatory reporting statutes vary significantly by state — not all states designate counselors as mandatory reporters for elder abuse ("
      },
      {
        "id": "d",
        "text": "Whether the client explicitly admits to the exploitation in session as the reference material frames it",
        "isCorrect": false,
        "rationale": "\"Whether the client explicitly admits to the exploitation in …\" is not what the item tests — Elder abuse mandatory reporting statutes vary significantly by state — not all states designate counselors as mandatory reporters for elder abuse ("
      }
    ]
  },

  {
    "id": "tpse134",
    "domain": "ethics",
    "subdomain": "DutyToWarn",
    "difficulty": "medium",
    "question": "The Tarasoff case (1974/1976) established the duty to:",
    "rationale": "Tarasoff established the 'duty to protect' — therapists must take reasonable steps to protect identifiable third parties from serious, credible threats. Methods vary by state: warning the victim directly, notifying law enforcement, hospitalizing the client, or a combination. 'Duty to warn' vs. 'duty to protect' varies by jurisdiction.",
    "options": [
      {
        "id": "a",
        "text": "Hospitalize any client who makes any threat of violence as clinicians typically apply it",
        "isCorrect": false,
        "rationale": "\"Hospitalize any client who makes any threat of violence as c…\" is not what the item tests — Tarasoff established the 'duty to protect' — therapists must take reasonable steps to protect identifiable third parties from serious, credible thr"
      },
      {
        "id": "b",
        "text": "Take reasonable steps to protect identifiable third parties from credible client threats",
        "isCorrect": true,
        "rationale": "Tarasoff established the 'duty to protect' — therapists must take reasonable steps to protect identifiable third parties from serious, credible threats."
      },
      {
        "id": "c",
        "text": "Ensure clients with violent histories are prohibited from owning firearms in this domain",
        "isCorrect": false,
        "rationale": "\"Ensure clients with violent histories are prohibited from ow…\" is not what the item tests — Tarasoff established the 'duty to protect' — therapists must take reasonable steps to protect identifiable third parties from serious, credible thr"
      },
      {
        "id": "d",
        "text": "Report all violent thoughts to law enforcement immediately as clinicians typically apply it",
        "isCorrect": false,
        "rationale": "\"Report all violent thoughts to law enforcement immediately a…\" is not what the item tests — Tarasoff established the 'duty to protect' — therapists must take reasonable steps to protect identifiable third parties from serious, credible thr"
      }
    ]
  },

  {
    "id": "tpse135",
    "domain": "ethics",
    "subdomain": "DutyToWarn",
    "difficulty": "hard",
    "question": "The Tarasoff duty is clinically triggered when:",
    "rationale": "Tarasoff duty requires: (1) a specific, serious, credible threat (2) against an identifiable potential victim. Vague homicidal ideation without a specific target does not trigger the duty. Anger or history alone is insufficient — the threat must be concrete and the victim reasonably identifiable.",
    "options": [
      {
        "id": "a",
        "text": "The client is angry and has a documented history of prior violence by counselors",
        "isCorrect": false,
        "rationale": "\"The client is angry and has a documented history of prior vi…\" is not what the item tests — Tarasoff duty requires: (1) a specific, serious, credible threat (2) against an identifiable potential victim."
      },
      {
        "id": "b",
        "text": "Any homicidal ideation is reported to the counselor by the client in this domain",
        "isCorrect": false,
        "rationale": "\"Any homicidal ideation is reported to the counselor by the c…\" is not what the item tests — Tarasoff duty requires: (1) a specific, serious, credible threat (2) against an identifiable potential victim."
      },
      {
        "id": "c",
        "text": "There is a serious, credible threat directed at an identifiable potential victim",
        "isCorrect": true,
        "rationale": "Tarasoff duty requires: (1) a specific, serious, credible threat (2) against an identifiable potential victim."
      },
      {
        "id": "d",
        "text": "The client owns or has access to a firearm now as the reference material frames it",
        "isCorrect": false,
        "rationale": "\"The client owns or has access to a firearm now as the refere…\" is not what the item tests — Tarasoff duty requires: (1) a specific, serious, credible threat (2) against an identifiable potential victim."
      }
    ]
  },

  {
    "id": "tpse136",
    "domain": "ethics",
    "subdomain": "Competence",
    "difficulty": "medium",
    "question": "A counselor is asked to use EMDR with a trauma survivor but has received no EMDR training. The ethical course of action is:",
    "rationale": "ACA Code C.2.a: counselors practice only within the boundaries of their competence. EMDR requires specific supervised training. The ethical response: serve the client using modalities within competence, refer specifically for EMDR, and pursue appropriate training to expand competence over time.",
    "options": [
      {
        "id": "a",
        "text": "Research EMDR online and in textbooks before beginning as clinicians typically apply it",
        "isCorrect": false,
        "rationale": "\"Research EMDR online and in textbooks before beginning as cl…\" is not what the item tests — ACA Code C.2.a: counselors practice only within the boundaries of their competence."
      },
      {
        "id": "b",
        "text": "Proceed if the client provides informed consent to the learning process in practice",
        "isCorrect": false,
        "rationale": "\"Proceed if the client provides informed consent to the learn…\" is not what the item tests — ACA Code C.2.a: counselors practice only within the boundaries of their competence."
      },
      {
        "id": "c",
        "text": "Proceed with EMDR if adequate supervisory oversight is available at the intake stage",
        "isCorrect": false,
        "rationale": "\"Proceed with EMDR if adequate supervisory oversight is avail…\" is not what the item tests — ACA Code C.2.a: counselors practice only within the boundaries of their competence."
      },
      {
        "id": "d",
        "text": "Decline EMDR specifically; treat trauma within current competence or refer for EMDR",
        "isCorrect": true,
        "rationale": "ACA Code C.2.a: counselors practice only within the boundaries of their competence."
      }
    ]
  },

  {
    "id": "tpse137",
    "domain": "ethics",
    "subdomain": "Competence",
    "difficulty": "hard",
    "question": "A counselor with deeply held religious beliefs that homosexuality is sinful is asked to counsel LGBTQ+ clients on relationship satisfaction. They should:",
    "rationale": "ACA Code A.11.b: counselors may not refer based solely on personal values conflicts. However, if the counselor cannot provide genuinely LGBTQ+-affirming care and the client's goal is relationship satisfaction (not orientation change), referral to an affirming provider is indicated. Conversion/change-effort practices are prohibited by ACA and CACREP standards.",
    "options": [
      {
        "id": "a",
        "text": "Refer to a counselor who can provide genuinely affirming, competent services without value imposition",
        "isCorrect": true,
        "rationale": "ACA Code A.11.b: counselors may not refer based solely on personal values conflicts."
      },
      {
        "id": "b",
        "text": "Provide services while maintaining strict value neutrality in session as clinicians typically apply it",
        "isCorrect": false,
        "rationale": "\"Provide services while maintaining strict value neutrality i…\" is not what the item tests — ACA Code A.11.b: counselors may not refer based solely on personal values conflicts."
      },
      {
        "id": "c",
        "text": "Provide services while sharing their value difference in the spirit of therapeutic transparency today",
        "isCorrect": false,
        "rationale": "\"Provide services while sharing their value difference in the…\" is not what the item tests — ACA Code A.11.b: counselors may not refer based solely on personal values conflicts."
      },
      {
        "id": "d",
        "text": "Attempt to facilitate change in the client's sexual orientation as a therapeutic approach in practice",
        "isCorrect": false,
        "rationale": "\"Attempt to facilitate change in the client's sexual orientat…\" is not what the item tests — ACA Code A.11.b: counselors may not refer based solely on personal values conflicts."
      }
    ]
  },

  {
    "id": "tpse138",
    "domain": "ethics",
    "subdomain": "EthicalDecisionMaking",
    "difficulty": "medium",
    "question": "The first step in most ethical decision-making models is to:",
    "rationale": "Most ethical decision-making models (Forester-Miller & Davis, Corey et al.) begin with recognizing that a potential ethical issue exists. One cannot navigate a dilemma one hasn't first identified. Subsequent steps: identify relevant codes, generate options, consider consequences, act, and evaluate the outcome.",
    "options": [
      {
        "id": "a",
        "text": "Generate all possible courses of action available by counselors",
        "isCorrect": false,
        "rationale": "\"Generate all possible courses of action available by counsel…\" is not what the item tests — Most ethical decision-making models (Forester-Miller & Davis, Corey et al.) begin with recognizing that a potential ethical issue exists."
      },
      {
        "id": "b",
        "text": "Identify and recognize that an ethical issue or dilemma exists",
        "isCorrect": true,
        "rationale": "Most ethical decision-making models (Forester-Miller & Davis, Corey et al.) begin with recognizing that a potential ethical issue exists."
      },
      {
        "id": "c",
        "text": "Consult immediately with a supervisor or trusted colleague now",
        "isCorrect": false,
        "rationale": "\"Consult immediately with a supervisor or trusted colleague n…\" is not what the item tests — Most ethical decision-making models (Forester-Miller & Davis, Corey et al.) begin with recognizing that a potential ethical issue exists."
      },
      {
        "id": "d",
        "text": "Review the relevant sections of the ACA Code of Ethics as used",
        "isCorrect": false,
        "rationale": "\"Review the relevant sections of the ACA Code of Ethics as us…\" is not what the item tests — Most ethical decision-making models (Forester-Miller & Davis, Corey et al.) begin with recognizing that a potential ethical issue exists."
      }
    ]
  },

  {
    "id": "tpse139",
    "domain": "ethics",
    "subdomain": "EthicalDecisionMaking",
    "difficulty": "hard",
    "question": "When legal requirements and ethical principles are in direct conflict, counselors should FIRST:",
    "rationale": "When ethics and law conflict (ACA B.1.d, H.1.b), counselors should: inform clients of the situation, consult with supervisors and legal counsel, seek to act as ethically as possible within legal requirements, and document the process. Neither law nor ethics always unambiguously trumps the other — navigating the tension requires careful deliberation.",
    "options": [
      {
        "id": "a",
        "text": "Typically follow ethical principles regardless of legal consequences as usually described",
        "isCorrect": false,
        "rationale": "\"Typically follow ethical principles regardless of legal cons…\" is not what the item tests — When ethics and law conflict (ACA B.1.d, H.1.b), counselors should: inform clients of the situation, consult with supervisors and legal counsel, se"
      },
      {
        "id": "b",
        "text": "Follow client preferences when ethics and law conflict as the reference material frames it",
        "isCorrect": false,
        "rationale": "\"Follow client preferences when ethics and law conflict as th…\" is not what the item tests — When ethics and law conflict (ACA B.1.d, H.1.b), counselors should: inform clients of the situation, consult with supervisors and legal counsel, se"
      },
      {
        "id": "c",
        "text": "Consult legal and ethics resources to find the most ethical path within legal constraints",
        "isCorrect": true,
        "rationale": "When ethics and law conflict (ACA B.1.d, H.1.b), counselors should: inform clients of the situation, consult with supervisors and legal counsel, seek to act as ethically as possible within legal requirements, and document the process."
      },
      {
        "id": "d",
        "text": "Typically follow legal requirements as they take absolute precedence as usually described",
        "isCorrect": false,
        "rationale": "\"Typically follow legal requirements as they take absolute pr…\" is not what the item tests — When ethics and law conflict (ACA B.1.d, H.1.b), counselors should: inform clients of the situation, consult with supervisors and legal counsel, se"
      }
    ]
  },

  {
    "id": "tpse140",
    "domain": "ethics",
    "subdomain": "PrinciplesOfEthics",
    "difficulty": "medium",
    "question": "Kitchener's five moral principles of counseling ethics are autonomy, nonmaleficence, beneficence, justice, and:",
    "rationale": "Kitchener (1984) identified five moral principles: autonomy (self-determination), nonmaleficence (do no harm), beneficence (promote wellbeing), justice (fairness/equal treatment), and fidelity (honoring commitments, being trustworthy/loyal). Veracity is sometimes added as a sixth principle.",
    "options": [
      {
        "id": "a",
        "text": "Competence",
        "isCorrect": false,
        "rationale": "\"Competence\" is not what the item tests — Kitchener (1984) identified five moral principles: autonomy (self-determination), nonmaleficence (do no harm), beneficence (promote wellbeing), justice (fairness/equal treatment), and fidelity (hono"
      },
      {
        "id": "b",
        "text": "Veracity",
        "isCorrect": false,
        "rationale": "\"Veracity\" is not what the item tests — Kitchener (1984) identified five moral principles: autonomy (self-determination), nonmaleficence (do no harm), beneficence (promote wellbeing), justice (fairness/equal treatment), and fidelity (honori"
      },
      {
        "id": "c",
        "text": "Transparency",
        "isCorrect": false,
        "rationale": "\"Transparency\" is not what the item tests — Kitchener (1984) identified five moral principles: autonomy (self-determination), nonmaleficence (do no harm), beneficence (promote wellbeing), justice (fairness/equal treatment), and fidelity (ho"
      },
      {
        "id": "d",
        "text": "Fidelity",
        "isCorrect": true,
        "rationale": "Kitchener (1984) identified five moral principles: autonomy (self-determination), nonmaleficence (do no harm), beneficence (promote wellbeing), justice (fairness/equal treatment), and fidelity (honoring commitments, bein…"
      }
    ]
  },

  {
    "id": "tpse141",
    "domain": "ethics",
    "subdomain": "PrinciplesOfEthics",
    "difficulty": "hard",
    "question": "A trauma survivor tells their counselor, \"I've decided to stop all my medications without telling my psychiatrist.\" Applying the principle of autonomy requires:",
    "rationale": "Autonomy requires informed decision-making, not just the absence of coercion. The ethical response: ensure the client has complete, accurate information about medication cessation risks (beneficence), explore the decision therapeutically, and ultimately respect their choice as a competent adult — while documenting the clinical discussion.",
    "options": [
      {
        "id": "a",
        "text": "Respecting the right to decide while ensuring the client has full, accurate information about risks",
        "isCorrect": true,
        "rationale": "Autonomy requires informed decision-making, not just the absence of coercion."
      },
      {
        "id": "b",
        "text": "Respecting the decision entirely without comment or further exploration at the level the item tests",
        "isCorrect": false,
        "rationale": "\"Respecting the decision entirely without comment or further …\" is not what the item tests — Autonomy requires informed decision-making, not just the absence of coercion."
      },
      {
        "id": "c",
        "text": "Notifying the prescribing psychiatrist directly without the client's consent during a routine session",
        "isCorrect": false,
        "rationale": "\"Notifying the prescribing psychiatrist directly without the …\" is not what the item tests — Autonomy requires informed decision-making, not just the absence of coercion."
      },
      {
        "id": "d",
        "text": "Terminating services for medically non-compliant behavior today as the reference material frames it",
        "isCorrect": false,
        "rationale": "\"Terminating services for medically non-compliant behavior to…\" is not what the item tests — Autonomy requires informed decision-making, not just the absence of coercion."
      }
    ]
  },

  {
    "id": "tpse142",
    "domain": "ethics",
    "subdomain": "Technology",
    "difficulty": "medium",
    "question": "Using a personal social media account to describe a \"frustrating client session\" without naming the client is:",
    "rationale": "ACA Code H.6.a–b: counselors maintain confidentiality on all social media platforms. Even without explicit identifying details, the act undermines professional standards, may inadvertently enable identification through context clues, and constitutes a violation of the dignity of the therapeutic relationship.",
    "options": [
      {
        "id": "a",
        "text": "Only problematic if current professional colleagues see the post as clinicians typically apply it",
        "isCorrect": false,
        "rationale": "\"Only problematic if current professional colleagues see the …\" is not what the item tests — ACA Code H.6.a–b: counselors maintain confidentiality on all social media platforms."
      },
      {
        "id": "b",
        "text": "An ethical concern even without names — clients may be identifiable and the act is unprofessional",
        "isCorrect": true,
        "rationale": "ACA Code H.6.a–b: counselors maintain confidentiality on all social media platforms."
      },
      {
        "id": "c",
        "text": "Acceptable as a legitimate self-care and venting tool for clinicians as clinicians typically apply it",
        "isCorrect": false,
        "rationale": "\"Acceptable as a legitimate self-care and venting tool for cl…\" is not what the item tests — ACA Code H.6.a–b: counselors maintain confidentiality on all social media platforms."
      },
      {
        "id": "d",
        "text": "Acceptable since no personally identifying information is shared as clinicians typically apply it",
        "isCorrect": false,
        "rationale": "\"Acceptable since no personally identifying information is sh…\" is not what the item tests — ACA Code H.6.a–b: counselors maintain confidentiality on all social media platforms."
      }
    ]
  },

  {
    "id": "tpse143",
    "domain": "ethics",
    "subdomain": "Technology",
    "difficulty": "hard",
    "question": "A counselor discovers a client has posted detailed descriptions of their therapy sessions on a public social media account. The counselor should FIRST:",
    "rationale": "Clients own their own therapy experiences and may share them. If the counselor discovered the posts through active social media searching, that raises separate ethical concerns. If discovered incidentally, bringing it to session therapeutically — what does posting mean for this client? any safety concerns? — is appropriate. This is clinical material.",
    "options": [
      {
        "id": "a",
        "text": "Take no action — clients have the right to share their own therapeutic experiences during counseling now",
        "isCorrect": false,
        "rationale": "\"Take no action — clients have the right to share their own t…\" is not what the item tests — Clients own their own therapy experiences and may share them."
      },
      {
        "id": "b",
        "text": "Terminate services for privacy violations that compromise the therapeutic relationship by counselors",
        "isCorrect": false,
        "rationale": "\"Terminate services for privacy violations that compromise th…\" is not what the item tests — Clients own their own therapy experiences and may share them."
      },
      {
        "id": "c",
        "text": "Discuss the posts with the client in session to understand the meaning and any clinical implications",
        "isCorrect": true,
        "rationale": "Clients own their own therapy experiences and may share them."
      },
      {
        "id": "d",
        "text": "Request that the client remove the posts immediately as a condition of continued therapy in practice",
        "isCorrect": false,
        "rationale": "\"Request that the client remove the posts immediately as a co…\" is not what the item tests — Clients own their own therapy experiences and may share them."
      }
    ]
  },

  {
    "id": "tpse144",
    "domain": "ethics",
    "subdomain": "Supervision",
    "difficulty": "medium",
    "question": "An intern discovers their supervisor is billing insurance for services the intern provided as if the supervisor rendered them directly. The intern should:",
    "rationale": "This constitutes insurance fraud — an ethical violation (ACA C.6.b) and potentially criminal act. The intern should document the situation, consult with a trusted supervisor or ethics resource, and use agency reporting procedures. Licensing board reporting may follow, but internal escalation is typically the recommended first step.",
    "options": [
      {
        "id": "a",
        "text": "Report immediately and exclusively to the state licensing board at the level the item tests",
        "isCorrect": false,
        "rationale": "\"Report immediately and exclusively to the state licensing bo…\" is not what the item tests — This constitutes insurance fraud — an ethical violation (ACA C.6.b) and potentially criminal act."
      },
      {
        "id": "b",
        "text": "Confront the supervisor directly and privately before taking any other steps by counselors",
        "isCorrect": false,
        "rationale": "\"Confront the supervisor directly and privately before taking…\" is not what the item tests — This constitutes insurance fraud — an ethical violation (ACA C.6.b) and potentially criminal act."
      },
      {
        "id": "c",
        "text": "Do nothing — billing is entirely the supervisor's professional responsibility by counselors",
        "isCorrect": false,
        "rationale": "\"Do nothing — billing is entirely the supervisor's profession…\" is not what the item tests — This constitutes insurance fraud — an ethical violation (ACA C.6.b) and potentially criminal act."
      },
      {
        "id": "d",
        "text": "Follow the agency's complaint procedure and consult with another supervisor or ethics body",
        "isCorrect": true,
        "rationale": "This constitutes insurance fraud — an ethical violation (ACA C.6.b) and potentially criminal act."
      }
    ]
  },

  {
    "id": "tpse145",
    "domain": "ethics",
    "subdomain": "Supervision",
    "difficulty": "hard",
    "question": "A supervisor discovers their supervisee has been providing counseling services outside the scope of their supervision agreement. The supervisor's primary obligation is to:",
    "rationale": "Supervisors' primary obligation is to client welfare — supervision exists fundamentally to protect clients (ACA F.1.a). The supervisor must address immediate client safety and wellbeing first, then address the supervisee's conduct through appropriate channels. Institutional loyalties do not override client protection.",
    "options": [
      {
        "id": "a",
        "text": "Client welfare first — then address the supervisee's ethical violation directly",
        "isCorrect": true,
        "rationale": "Supervisors' primary obligation is to client welfare — supervision exists fundamentally to protect clients (ACA F.1.a)."
      },
      {
        "id": "b",
        "text": "The supervisee first — to support their professional learning and development now",
        "isCorrect": false,
        "rationale": "\"The supervisee first — to support their professional learnin…\" is not what the item tests — Supervisors' primary obligation is to client welfare — supervision exists fundamentally to protect clients (ACA F.1.a)."
      },
      {
        "id": "c",
        "text": "The supervisee and all affected clients equally and simultaneously by counselors",
        "isCorrect": false,
        "rationale": "\"The supervisee and all affected clients equally and simultan…\" is not what the item tests — Supervisors' primary obligation is to client welfare — supervision exists fundamentally to protect clients (ACA F.1.a)."
      },
      {
        "id": "d",
        "text": "The agency first — to document the situation and protect the organization from liability",
        "isCorrect": false,
        "rationale": "\"The agency first — to document the situation and protect the…\" is not what the item tests — Supervisors' primary obligation is to client welfare — supervision exists fundamentally to protect clients (ACA F.1.a)."
      }
    ]
  },

  {
    "id": "tpse146",
    "domain": "ethics",
    "subdomain": "Abandonment",
    "difficulty": "medium",
    "question": "Therapeutic abandonment is defined as:",
    "rationale": "Abandonment: unilaterally ending professional services without reasonable notice, adequate referral, or transition planning — leaving a client without needed care. Clinically indicated termination with proper process and documentation is NOT abandonment, even if the client disagrees.",
    "options": [
      {
        "id": "a",
        "text": "Any termination of counseling that the client did not initiate themselves during a routine session",
        "isCorrect": false,
        "rationale": "\"Any termination of counseling that the client did not initia…\" is not what the item tests — Abandonment: unilaterally ending professional services without reasonable notice, adequate referral, or transition planning — leaving a client with"
      },
      {
        "id": "b",
        "text": "Unilateral termination by the counselor without adequate notice, transition support, or referral",
        "isCorrect": true,
        "rationale": "Abandonment: unilaterally ending professional services without reasonable notice, adequate referral, or transition planning — leaving a client without needed care."
      },
      {
        "id": "c",
        "text": "Ending therapy with clients who have a history of non-payment as the reference material frames it",
        "isCorrect": false,
        "rationale": "\"Ending therapy with clients who have a history of non-paymen…\" is not what the item tests — Abandonment: unilaterally ending professional services without reasonable notice, adequate referral, or transition planning — leaving a client with"
      },
      {
        "id": "d",
        "text": "Reducing session frequency without explicit client agreement as the reference material frames it",
        "isCorrect": false,
        "rationale": "\"Reducing session frequency without explicit client agreement…\" is not what the item tests — Abandonment: unilaterally ending professional services without reasonable notice, adequate referral, or transition planning — leaving a client with"
      }
    ]
  },

  {
    "id": "tpse147",
    "domain": "ethics",
    "subdomain": "FeesPractice",
    "difficulty": "medium",
    "question": "Bartering (exchanging goods or services for counseling) is:",
    "rationale": "ACA A.10.e: counselors may barter only if the relationship is not exploitative, if the client requests it, and if such arrangements are an accepted local community practice. Documentation and ongoing monitoring of the arrangement's impact on the therapeutic relationship are required.",
    "options": [
      {
        "id": "a",
        "text": "Prohibited in urban settings but ethically permissible in rural communities as clinicians typically apply it",
        "isCorrect": false,
        "rationale": "\"Prohibited in urban settings but ethically permissible in ru…\" is not what the item tests — ACA A.10.e: counselors may barter only if the relationship is not exploitative, if the client requests it, and if such arrangements are an accepted"
      },
      {
        "id": "b",
        "text": "Generally prohibited by the ACA Code of Ethics in all circumstances now as the reference material frames it",
        "isCorrect": false,
        "rationale": "\"Generally prohibited by the ACA Code of Ethics in all circum…\" is not what the item tests — ACA A.10.e: counselors may barter only if the relationship is not exploitative, if the client requests it, and if such arrangements are an accepted"
      },
      {
        "id": "c",
        "text": "Permissible only when it is not exploitative, is in the client's best interest, and is clearly documented",
        "isCorrect": true,
        "rationale": "ACA A.10.e: counselors may barter only if the relationship is not exploitative, if the client requests it, and if such arrangements are an accepted local community practice."
      },
      {
        "id": "d",
        "text": "Automatically acceptable if the client proposes the arrangement today as the reference material frames it",
        "isCorrect": false,
        "rationale": "\"Automatically acceptable if the client proposes the arrangem…\" is not what the item tests — ACA A.10.e: counselors may barter only if the relationship is not exploitative, if the client requests it, and if such arrangements are an accepted"
      }
    ]
  },

  {
    "id": "tpse148",
    "domain": "ethics",
    "subdomain": "Research",
    "difficulty": "medium",
    "question": "The principle of \"beneficence\" in research ethics (Belmont Report) requires:",
    "rationale": "Beneficence in research (Belmont Report): maximize benefits and minimize harms to participants. Distinguished from nonmaleficence (do no harm). IRB approval is a procedural safeguard; diverse samples = justice; compensation = a standard practice, not a named ethical principle.",
    "options": [
      {
        "id": "a",
        "text": "Ensuring all research participants receive monetary compensation for their time",
        "isCorrect": false,
        "rationale": "\"Ensuring all research participants receive monetary compensa…\" is not what the item tests — Beneficence in research (Belmont Report): maximize benefits and minimize harms to participants."
      },
      {
        "id": "b",
        "text": "Obtaining institutional review board (IRB) approval before any data collection",
        "isCorrect": false,
        "rationale": "\"Obtaining institutional review board (IRB) approval before a…\" is not what the item tests — Beneficence in research (Belmont Report): maximize benefits and minimize harms to participants."
      },
      {
        "id": "c",
        "text": "Including diverse and representative populations in all research samples now",
        "isCorrect": false,
        "rationale": "\"Including diverse and representative populations in all rese…\" is not what the item tests — Beneficence in research (Belmont Report): maximize benefits and minimize harms to participants."
      },
      {
        "id": "d",
        "text": "Maximizing possible benefits to participants while minimizing possible harms",
        "isCorrect": true,
        "rationale": "Beneficence in research (Belmont Report): maximize benefits and minimize harms to participants."
      }
    ]
  },

  {
    "id": "tpse149",
    "domain": "ethics",
    "subdomain": "Impairment",
    "difficulty": "medium",
    "question": "A counselor observes that a colleague appears intoxicated while actively working with clients. The MOST ethical FIRST step is to:",
    "rationale": "Client safety is the immediate non-negotiable priority. If impairment is clear and clients are at risk, intervening immediately is ethically required. ACA C.2.g: counselors assist impaired colleagues in seeking help. Reporting to the licensing board may follow, but the first obligation is ensuring client welfare.",
    "options": [
      {
        "id": "a",
        "text": "Ensure immediate client safety; then address the colleague directly or through supervisory channels",
        "isCorrect": true,
        "rationale": "Client safety is the immediate non-negotiable priority."
      },
      {
        "id": "b",
        "text": "Continue observing over several more incidents to confirm the pattern before acting during counseling",
        "isCorrect": false,
        "rationale": "\"Continue observing over several more incidents to confirm th…\" is not what the item tests — Client safety is the immediate non-negotiable priority."
      },
      {
        "id": "c",
        "text": "Consult other colleagues first to verify the observation before taking any action during counseling",
        "isCorrect": false,
        "rationale": "\"Consult other colleagues first to verify the observation bef…\" is not what the item tests — Client safety is the immediate non-negotiable priority."
      },
      {
        "id": "d",
        "text": "Report immediately and exclusively to the state licensing board as the reference material frames it",
        "isCorrect": false,
        "rationale": "\"Report immediately and exclusively to the state licensing bo…\" is not what the item tests — Client safety is the immediate non-negotiable priority."
      }
    ]
  },

  {
    "id": "tpse150",
    "domain": "ethics",
    "subdomain": "Diversity",
    "difficulty": "hard",
    "question": "A counselor's moral objection to a client's legal lifestyle (e.g., consensual non-monogamy) allows them, per ACA Code, to:",
    "rationale": "ACA A.11.b (2014 revision): counselors cannot refuse services based solely on personal values when this constitutes discrimination against protected characteristics or legally-protected lifestyles. They may refer when there is a genuine, documentable therapeutic limitation — not simply because of a value conflict. The 2014 revision explicitly addresses this scenario.",
    "options": [
      {
        "id": "a",
        "text": "Decline all services to clients who engage in this legal lifestyle as the reference material frames it",
        "isCorrect": false,
        "rationale": "\"Decline all services to clients who engage in this legal lif…\" is not what the item tests — ACA A.11.b (2014 revision): counselors cannot refuse services based solely on personal values when this constitutes discrimination against protecte"
      },
      {
        "id": "b",
        "text": "Refer only when the referral is clinically appropriate — not merely because of the values difference",
        "isCorrect": true,
        "rationale": "ACA A.11.b (2014 revision): counselors cannot refuse services based solely on personal values when this constitutes discrimination against protected characteristics or legally-protected lifestyles."
      },
      {
        "id": "c",
        "text": "Incorporate their values into the client's treatment goals where ethical principles are involved now",
        "isCorrect": false,
        "rationale": "\"Incorporate their values into the client's treatment goals w…\" is not what the item tests — ACA A.11.b (2014 revision): counselors cannot refuse services based solely on personal values when this constitutes discrimination against protecte"
      },
      {
        "id": "d",
        "text": "Explore how the behavior aligns with the counselor's values as a therapeutic intervention in practice",
        "isCorrect": false,
        "rationale": "\"Explore how the behavior aligns with the counselor's values …\" is not what the item tests — ACA A.11.b (2014 revision): counselors cannot refuse services based solely on personal values when this constitutes discrimination against protecte"
      }
    ]
  },

  {
    "id": "csi001",
    "domain": "skills_interventions",
    "subdomain": "Microskills",
    "difficulty": "easy",
    "question": "Minimal encouragers (e.g., \"mm-hmm,\" \"go on,\" a head nod) serve primarily to:",
    "rationale": "Minimal encouragers are brief, low-inference responses that signal attentiveness and encourage continued elaboration without shifting or redirecting the client's narrative.",
    "options": [
      {
        "id": "a",
        "text": "Summarize the key themes of the session during counseling as the reference material frames it",
        "isCorrect": false,
        "rationale": "\"Summarize the key themes of the session during counseling as…\" is not what the item tests — Minimal encouragers are brief, low-inference responses that signal attentiveness and encourage continued elaboration without shifting or redirectin"
      },
      {
        "id": "b",
        "text": "Transition the session toward a new topic by counselors as the reference material frames it",
        "isCorrect": false,
        "rationale": "\"Transition the session toward a new topic by counselors as t…\" is not what the item tests — Minimal encouragers are brief, low-inference responses that signal attentiveness and encourage continued elaboration without shifting or redirectin"
      },
      {
        "id": "c",
        "text": "Communicate attention and invite the client to continue without interrupting narrative flow",
        "isCorrect": true,
        "rationale": "Minimal encouragers are brief, low-inference responses that signal attentiveness and encourage continued elaboration without shifting or redirecting the client's narrative."
      },
      {
        "id": "d",
        "text": "Reflect the emotional content of the client's message now as the reference material frames it",
        "isCorrect": false,
        "rationale": "\"Reflect the emotional content of the client's message now as…\" is not what the item tests — Minimal encouragers are brief, low-inference responses that signal attentiveness and encourage continued elaboration without shifting or redirectin"
      }
    ]
  },

  {
    "id": "csi002",
    "domain": "skills_interventions",
    "subdomain": "Microskills",
    "difficulty": "medium",
    "question": "A counselor says, \"So your boss criticized you in front of the team, and you've been replaying it ever since.\" This is BEST classified as:",
    "rationale": "A paraphrase restates the cognitive/factual content of the client's message in the counselor's own words. No feeling word is added, and no interpretation is offered — distinguishing it from reflection or interpretation.",
    "options": [
      {
        "id": "a",
        "text": "Reflection of feeling",
        "isCorrect": false,
        "rationale": "\"Reflection of feeling\" is not what the item tests — A paraphrase restates the cognitive/factual content of the client's message in the counselor's own words."
      },
      {
        "id": "b",
        "text": "Confrontation",
        "isCorrect": false,
        "rationale": "\"Confrontation\" is not what the item tests — A paraphrase restates the cognitive/factual content of the client's message in the counselor's own words."
      },
      {
        "id": "c",
        "text": "Interpretation",
        "isCorrect": false,
        "rationale": "\"Interpretation\" is not what the item tests — A paraphrase restates the cognitive/factual content of the client's message in the counselor's own words."
      },
      {
        "id": "d",
        "text": "Paraphrase",
        "isCorrect": true,
        "rationale": "A paraphrase restates the cognitive/factual content of the client's message in the counselor's own words. No feeling word is added, and no interpretation is offered — distinguishing it from reflection or interpretation."
      }
    ]
  },

  {
    "id": "csi003",
    "domain": "skills_interventions",
    "subdomain": "Microskills",
    "difficulty": "medium",
    "question": "Carkhuff's scale for empathic responding rates responses from Level 1 to Level 5. A Level 3 response is described as:",
    "rationale": "Carkhuff's Level 3 is the minimally facilitative baseline: the response is interchangeable with the client's expression. Levels 1–2 subtract; Levels 4–5 add depth beyond what was expressed, moving toward advanced empathy.",
    "options": [
      {
        "id": "a",
        "text": "Interchangeable — accurately reflects what the client expressed, no more and no less",
        "isCorrect": true,
        "rationale": "Carkhuff's Level 3 is the minimally facilitative baseline: the response is interchangeable with the client's expression. Levels 1–2 subtract; Levels 4–5 add depth beyond what was expressed, moving toward advanced empathy."
      },
      {
        "id": "b",
        "text": "Brings hidden material fully into awareness here as the reference material frames it",
        "isCorrect": false,
        "rationale": "\"Brings hidden material fully into awareness here as the refe…\" is not what the item tests — Carkhuff's Level 3 is the minimally facilitative baseline: the response is interchangeable with the client's expression."
      },
      {
        "id": "c",
        "text": "Adds noticeably to what the client expressed now as the reference material frames it",
        "isCorrect": false,
        "rationale": "\"Adds noticeably to what the client expressed now as the refe…\" is not what the item tests — Carkhuff's Level 3 is the minimally facilitative baseline: the response is interchangeable with the client's expression."
      },
      {
        "id": "d",
        "text": "Subtracts from what the client expressed as used as the reference material frames it now",
        "isCorrect": false,
        "rationale": "\"Subtracts from what the client expressed as used as the refe…\" is not what the item tests — Carkhuff's Level 3 is the minimally facilitative baseline: the response is interchangeable with the client's expression."
      }
    ]
  },

  {
    "id": "csi004",
    "domain": "skills_interventions",
    "subdomain": "Microskills",
    "difficulty": "hard",
    "question": "When using focusing, the counselor's goal is to:",
    "rationale": "Focusing (Gendlin; also Ivey's microskills framework) directs mutual attention to a specific element — a feeling, bodily sensation, or theme — so it can be explored more fully rather than glossed over in broad narrative.",
    "options": [
      {
        "id": "a",
        "text": "Help the client stay on a single topic for the entire session now as the reference material frames it",
        "isCorrect": false,
        "rationale": "\"Help the client stay on a single topic for the entire sessio…\" is not what the item tests — Focusing (Gendlin; also Ivey's microskills framework) directs mutual attention to a specific element — a feeling, bodily sensation, or theme — so i"
      },
      {
        "id": "b",
        "text": "Direct therapeutic attention to a specific aspect of the client's experience for deeper exploration",
        "isCorrect": true,
        "rationale": "Focusing (Gendlin; also Ivey's microskills framework) directs mutual attention to a specific element — a feeling, bodily sensation, or theme — so it can be explored more fully rather than glossed over in broad narrative."
      },
      {
        "id": "c",
        "text": "Reduce session content to only what insurance will reimburse now as the reference material frames it",
        "isCorrect": false,
        "rationale": "\"Reduce session content to only what insurance will reimburse…\" is not what the item tests — Focusing (Gendlin; also Ivey's microskills framework) directs mutual attention to a specific element — a feeling, bodily sensation, or theme — so i"
      },
      {
        "id": "d",
        "text": "Narrow the presenting problem to a single diagnosable condition as the reference material frames it",
        "isCorrect": false,
        "rationale": "\"Narrow the presenting problem to a single diagnosable condit…\" is not what the item tests — Focusing (Gendlin; also Ivey's microskills framework) directs mutual attention to a specific element — a feeling, bodily sensation, or theme — so i"
      }
    ]
  },

  {
    "id": "csi005",
    "domain": "skills_interventions",
    "subdomain": "Microskills",
    "difficulty": "medium",
    "question": "The counselor says, \"Right now, as you describe this, I notice I feel a heaviness — like something important is being held back. I wonder if you sense that too.\" This is an example of:",
    "rationale": "Immediacy (Egan) uses what is happening between counselor and client right now as a therapeutic tool. The counselor shares a present-moment reaction to invite the client to examine what is live in the room.",
    "options": [
      {
        "id": "a",
        "text": "Self-disclosure of personal history as clinicians typically apply it",
        "isCorrect": false,
        "rationale": "\"Self-disclosure of personal history as clinicians typically …\" is not what the item tests — Immediacy (Egan) uses what is happening between counselor and client right now as a therapeutic tool."
      },
      {
        "id": "b",
        "text": "Confrontation of avoidance here as the reference material frames it",
        "isCorrect": false,
        "rationale": "\"Confrontation of avoidance here as the reference material fr…\" is not what the item tests — Immediacy (Egan) uses what is happening between counselor and client right now as a therapeutic tool."
      },
      {
        "id": "c",
        "text": "Immediacy — using the here-and-now therapeutic relationship as data",
        "isCorrect": true,
        "rationale": "Immediacy (Egan) uses what is happening between counselor and client right now as a therapeutic tool. The counselor shares a present-moment reaction to invite the client to examine what is live in the room."
      },
      {
        "id": "d",
        "text": "Countertransference acted out in session at the level the item tests",
        "isCorrect": false,
        "rationale": "\"Countertransference acted out in session at the level the it…\" is not what the item tests — Immediacy (Egan) uses what is happening between counselor and client right now as a therapeutic tool."
      }
    ]
  },

  {
    "id": "csi006",
    "domain": "skills_interventions",
    "subdomain": "Microskills",
    "difficulty": "medium",
    "question": "Therapeutic silence is MOST useful when:",
    "rationale": "Purposeful silence communicates acceptance, creates space for deeper processing, and respects the client's internal rhythm. It is an active, intentional skill — not an absence of skill or a strategy for managing time.",
    "options": [
      {
        "id": "a",
        "text": "The session has reached its time limit as clinicians typically apply it",
        "isCorrect": false,
        "rationale": "\"The session has reached its time limit as clinicians typical…\" is not what the item tests — Purposeful silence communicates acceptance, creates space for deeper processing, and respects the client's internal rhythm."
      },
      {
        "id": "b",
        "text": "The client is speaking too much and needs to be slowed down in practice",
        "isCorrect": false,
        "rationale": "\"The client is speaking too much and needs to be slowed down …\" is not what the item tests — Purposeful silence communicates acceptance, creates space for deeper processing, and respects the client's internal rhythm."
      },
      {
        "id": "c",
        "text": "The counselor is unsure what to say next as clinicians typically apply it",
        "isCorrect": false,
        "rationale": "\"The counselor is unsure what to say next as clinicians typic…\" is not what the item tests — Purposeful silence communicates acceptance, creates space for deeper processing, and respects the client's internal rhythm."
      },
      {
        "id": "d",
        "text": "The client needs space to process, integrate, or access deeper material",
        "isCorrect": true,
        "rationale": "Purposeful silence communicates acceptance, creates space for deeper processing, and respects the client's internal rhythm. It is an active, intentional skill — not an absence of skill or a strategy for managing time."
      }
    ]
  },

  {
    "id": "csi007",
    "domain": "skills_interventions",
    "subdomain": "Microskills",
    "difficulty": "hard",
    "question": "A client simultaneously discusses job stress, a relationship conflict, and childhood memories. The MOST skillful counselor response is to:",
    "rationale": "When clients scatter across multiple concerns, focusing helps establish a productive direction without the counselor arbitrarily choosing or the session becoming diffuse. It is done collaboratively, honoring client agency.",
    "options": [
      {
        "id": "a",
        "text": "Use focusing to collaboratively identify which thread to explore most deeply",
        "isCorrect": true,
        "rationale": "When clients scatter across multiple concerns, focusing helps establish a productive direction without the counselor arbitrarily choosing or the session becoming diffuse. It is done collaboratively, honoring client agency."
      },
      {
        "id": "b",
        "text": "Redirect to the presenting problem stated at intake during a routine session",
        "isCorrect": false,
        "rationale": "\"Redirect to the presenting problem stated at intake during a…\" is not what the item tests — When clients scatter across multiple concerns, focusing helps establish a productive direction without the counselor arbitrarily choosing or the se"
      },
      {
        "id": "c",
        "text": "Follow whichever topic the client returns to most frequently during counseling",
        "isCorrect": false,
        "rationale": "\"Follow whichever topic the client returns to most frequently…\" is not what the item tests — When clients scatter across multiple concerns, focusing helps establish a productive direction without the counselor arbitrarily choosing or the se"
      },
      {
        "id": "d",
        "text": "Address all three topics briefly to validate their importance in this domain",
        "isCorrect": false,
        "rationale": "\"Address all three topics briefly to validate their importanc…\" is not what the item tests — When clients scatter across multiple concerns, focusing helps establish a productive direction without the counselor arbitrarily choosing or the se"
      }
    ]
  },

  {
    "id": "csi008",
    "domain": "skills_interventions",
    "subdomain": "CBTInterventions",
    "difficulty": "medium",
    "question": "Behavioral experiments in CBT are designed to:",
    "rationale": "Behavioral experiments are hypothesis-testing exercises: the client predicts what will happen based on a belief, then conducts an experiment to gather evidence. They are distinct from exposure (which targets anxiety reduction) in that they target belief change through evidence.",
    "options": [
      {
        "id": "a",
        "text": "Train clients in new social skills through structured role plays",
        "isCorrect": false,
        "rationale": "\"Train clients in new social skills through structured role p…\" is not what the item tests — Behavioral experiments are hypothesis-testing exercises: the client predicts what will happen based on a belief, then conducts an experiment to gat"
      },
      {
        "id": "b",
        "text": "Test the validity of a belief by collecting real-world evidence",
        "isCorrect": true,
        "rationale": "Behavioral experiments are hypothesis-testing exercises: the client predicts what will happen based on a belief, then conducts an experiment to gather evidence."
      },
      {
        "id": "c",
        "text": "Gradually desensitize clients to feared stimuli through repeated exposure",
        "isCorrect": false,
        "rationale": "\"Gradually desensitize clients to feared stimuli through repe…\" is not what the item tests — Behavioral experiments are hypothesis-testing exercises: the client predicts what will happen based on a belief, then conducts an experiment to gat"
      },
      {
        "id": "d",
        "text": "Reduce avoidance through graded task assignments in this domain",
        "isCorrect": false,
        "rationale": "\"Reduce avoidance through graded task assignments in this dom…\" is not what the item tests — Behavioral experiments are hypothesis-testing exercises: the client predicts what will happen based on a belief, then conducts an experiment to gat"
      }
    ]
  },

  {
    "id": "csi009",
    "domain": "skills_interventions",
    "subdomain": "CBTInterventions",
    "difficulty": "medium",
    "question": "In systematic desensitization, the correct sequence of steps is:",
    "rationale": "Wolpe's systematic desensitization: (1) teach deep relaxation (reciprocal inhibition), (2) construct a fear hierarchy from least to most anxious, (3) pair each step with relaxation, moving up only when the lower step produces no anxiety.",
    "options": [
      {
        "id": "a",
        "text": "Hierarchy construction → flooding → relaxation training as clinicians typically apply it",
        "isCorrect": false,
        "rationale": "\"Hierarchy construction → flooding → relaxation training as c…\" is not what the item tests — Wolpe's systematic desensitization: (1) teach deep relaxation (reciprocal inhibition), (2) construct a fear hierarchy from least to most anxious, ("
      },
      {
        "id": "b",
        "text": "Relaxation training → flooding → hierarchy construction as clinicians typically apply it",
        "isCorrect": false,
        "rationale": "\"Relaxation training → flooding → hierarchy construction as c…\" is not what the item tests — Wolpe's systematic desensitization: (1) teach deep relaxation (reciprocal inhibition), (2) construct a fear hierarchy from least to most anxious, ("
      },
      {
        "id": "c",
        "text": "Relaxation training → hierarchy construction → graduated exposure paired with relaxation",
        "isCorrect": true,
        "rationale": "Wolpe's systematic desensitization: (1) teach deep relaxation (reciprocal inhibition), (2) construct a fear hierarchy from least to most anxious, (3) pair each step with relaxation, moving up only when the lower step produces no anxiety."
      },
      {
        "id": "d",
        "text": "Exposure → hierarchy construction → relaxation training as clinicians typically apply it now",
        "isCorrect": false,
        "rationale": "\"Exposure → hierarchy construction → relaxation training as c…\" is not what the item tests — Wolpe's systematic desensitization: (1) teach deep relaxation (reciprocal inhibition), (2) construct a fear hierarchy from least to most anxious, ("
      }
    ]
  },

  {
    "id": "csi010",
    "domain": "skills_interventions",
    "subdomain": "CBTInterventions",
    "difficulty": "hard",
    "question": "A client with health anxiety repetitively checks their body for symptoms and Googles diseases. The MOST appropriate CBT intervention targets:",
    "rationale": "Health anxiety (illness anxiety disorder) is maintained by safety behaviors — checking and reassurance-seeking — that prevent disconfirmation of feared beliefs. ERP targets the compulsive checking; psychoeducation and reassurance typically worsen the cycle.",
    "options": [
      {
        "id": "a",
        "text": "Thought records challenging catastrophic appraisals only now as clinicians typically apply it",
        "isCorrect": false,
        "rationale": "\"Thought records challenging catastrophic appraisals only now…\" is not what the item tests — Health anxiety (illness anxiety disorder) is maintained by safety behaviors — checking and reassurance-seeking — that prevent disconfirmation of fe"
      },
      {
        "id": "b",
        "text": "Relaxation to reduce physiological arousal in this domain as the reference material frames it",
        "isCorrect": false,
        "rationale": "\"Relaxation to reduce physiological arousal in this domain as…\" is not what the item tests — Health anxiety (illness anxiety disorder) is maintained by safety behaviors — checking and reassurance-seeking — that prevent disconfirmation of fe"
      },
      {
        "id": "c",
        "text": "Psychoeducation about medical conditions to reduce uncertainty as clinicians typically apply it",
        "isCorrect": false,
        "rationale": "\"Psychoeducation about medical conditions to reduce uncertain…\" is not what the item tests — Health anxiety (illness anxiety disorder) is maintained by safety behaviors — checking and reassurance-seeking — that prevent disconfirmation of fe"
      },
      {
        "id": "d",
        "text": "Response prevention of checking behavior combined with exposure to health-related uncertainty",
        "isCorrect": true,
        "rationale": "Health anxiety (illness anxiety disorder) is maintained by safety behaviors — checking and reassurance-seeking — that prevent disconfirmation of feared beliefs."
      }
    ]
  },

  {
    "id": "csi011",
    "domain": "skills_interventions",
    "subdomain": "BehavioralInterventions",
    "difficulty": "medium",
    "question": "Token economies are behavioral interventions that operate on which principle?",
    "rationale": "Token economies use secondary (conditioned) reinforcers (tokens/points) that are exchanged for primary or preferred backup reinforcers. They work through positive reinforcement, shaping target behaviors via operant conditioning.",
    "options": [
      {
        "id": "a",
        "text": "Operant conditioning — tokens serve as conditioned reinforcers exchangeable for backup reinforcers",
        "isCorrect": true,
        "rationale": "Token economies use secondary (conditioned) reinforcers (tokens/points) that are exchanged for primary or preferred backup reinforcers. They work through positive reinforcement, shaping target behaviors via operant conditioning."
      },
      {
        "id": "b",
        "text": "Classical conditioning through stimulus pairing in this domain as the reference material frames it",
        "isCorrect": false,
        "rationale": "\"Classical conditioning through stimulus pairing in this doma…\" is not what the item tests — Token economies use secondary (conditioned) reinforcers (tokens/points) that are exchanged for primary or preferred backup reinforcers."
      },
      {
        "id": "c",
        "text": "Extinction of maladaptive behavior through reinforcement withdrawal as clinicians typically apply it",
        "isCorrect": false,
        "rationale": "\"Extinction of maladaptive behavior through reinforcement wit…\" is not what the item tests — Token economies use secondary (conditioned) reinforcers (tokens/points) that are exchanged for primary or preferred backup reinforcers."
      },
      {
        "id": "d",
        "text": "Observational learning through modeled behavior in this domain as the reference material frames it",
        "isCorrect": false,
        "rationale": "\"Observational learning through modeled behavior in this doma…\" is not what the item tests — Token economies use secondary (conditioned) reinforcers (tokens/points) that are exchanged for primary or preferred backup reinforcers."
      }
    ]
  },

  {
    "id": "csi012",
    "domain": "skills_interventions",
    "subdomain": "BehavioralInterventions",
    "difficulty": "hard",
    "question": "Differential reinforcement of incompatible behavior (DRI) involves:",
    "rationale": "DRI: reinforce a behavior that is physically incompatible with the target behavior (e.g., keeping hands on the desk is incompatible with hitting). DRO reinforces absence; DRA reinforces any alternative behavior that is not necessarily incompatible.",
    "options": [
      {
        "id": "a",
        "text": "Reinforcing the absence of the problem behavior during a specified interval during counseling",
        "isCorrect": false,
        "rationale": "\"Reinforcing the absence of the problem behavior during a spe…\" is not what the item tests — DRI: reinforce a behavior that is physically incompatible with the target behavior (e.g., keeping hands on the desk is incompatible with hitting)."
      },
      {
        "id": "b",
        "text": "Reinforcing a behavior that physically cannot occur simultaneously with the problem behavior",
        "isCorrect": true,
        "rationale": "DRI: reinforce a behavior that is physically incompatible with the target behavior (e.g., keeping hands on the desk is incompatible with hitting)."
      },
      {
        "id": "c",
        "text": "Withholding reinforcement to extinguish the problem behavior directly during a routine session",
        "isCorrect": false,
        "rationale": "\"Withholding reinforcement to extinguish the problem behavior…\" is not what the item tests — DRI: reinforce a behavior that is physically incompatible with the target behavior (e.g., keeping hands on the desk is incompatible with hitting)."
      },
      {
        "id": "d",
        "text": "Reinforcing any behavior that reduces the target problem behavior at the level the item tests",
        "isCorrect": false,
        "rationale": "\"Reinforcing any behavior that reduces the target problem beh…\" is not what the item tests — DRI: reinforce a behavior that is physically incompatible with the target behavior (e.g., keeping hands on the desk is incompatible with hitting)."
      }
    ]
  },

  {
    "id": "csi013",
    "domain": "skills_interventions",
    "subdomain": "TraumaInterventions",
    "difficulty": "medium",
    "question": "EMDR (Eye Movement Desensitization and Reprocessing) has eight phases. The phase in which the traumatic memory is actively processed with bilateral stimulation is:",
    "rationale": "EMDR Phase 4 (Desensitization): client holds the target memory, negative cognition, emotion, and body sensation while engaging in bilateral stimulation. SUD (subjective units of distress) is tracked. Phase 5 installs the positive cognition; Phase 2 builds resources and prepares the client.",
    "options": [
      {
        "id": "a",
        "text": "Phase 2 — Preparation",
        "isCorrect": false,
        "rationale": "\"Phase 2 — Preparation\" is not what the item tests — EMDR Phase 4 (Desensitization): client holds the target memory, negative cognition, emotion, and body sensation while engaging in bilateral stimulation."
      },
      {
        "id": "b",
        "text": "Phase 7 — Closure",
        "isCorrect": false,
        "rationale": "\"Phase 7 — Closure\" is not what the item tests — EMDR Phase 4 (Desensitization): client holds the target memory, negative cognition, emotion, and body sensation while engaging in bilateral stimulation."
      },
      {
        "id": "c",
        "text": "Phase 4 — Desensitization",
        "isCorrect": true,
        "rationale": "EMDR Phase 4 (Desensitization): client holds the target memory, negative cognition, emotion, and body sensation while engaging in bilateral stimulation."
      },
      {
        "id": "d",
        "text": "Phase 5 — Installation",
        "isCorrect": false,
        "rationale": "\"Phase 5 — Installation\" is not what the item tests — EMDR Phase 4 (Desensitization): client holds the target memory, negative cognition, emotion, and body sensation while engaging in bilateral stimulation."
      }
    ]
  },

  {
    "id": "csi014",
    "domain": "skills_interventions",
    "subdomain": "TraumaInterventions",
    "difficulty": "medium",
    "question": "\"Titration\" in trauma-focused therapy refers to:",
    "rationale": "Titration (from chemistry/pharmacology) in trauma therapy means processing small amounts of traumatic material at a time — moving in and out of traumatic activation — to keep the client within the window of tolerance and prevent retraumatization.",
    "options": [
      {
        "id": "a",
        "text": "Measuring trauma symptom severity with standardized tools now as the reference material frames it",
        "isCorrect": false,
        "rationale": "\"Measuring trauma symptom severity with standardized tools no…\" is not what the item tests — Titration (from chemistry/pharmacology) in trauma therapy means processing small amounts of traumatic material at a time — moving in and out of tra"
      },
      {
        "id": "b",
        "text": "Reducing medication dosage after symptom improvement as used as the reference material frames it",
        "isCorrect": false,
        "rationale": "\"Reducing medication dosage after symptom improvement as used…\" is not what the item tests — Titration (from chemistry/pharmacology) in trauma therapy means processing small amounts of traumatic material at a time — moving in and out of tra"
      },
      {
        "id": "c",
        "text": "Gradually transferring care from one provider to another now as the reference material frames it",
        "isCorrect": false,
        "rationale": "\"Gradually transferring care from one provider to another now…\" is not what the item tests — Titration (from chemistry/pharmacology) in trauma therapy means processing small amounts of traumatic material at a time — moving in and out of tra"
      },
      {
        "id": "d",
        "text": "Carefully dosing the amount of traumatic material processed at any one time to prevent overwhelm",
        "isCorrect": true,
        "rationale": "Titration (from chemistry/pharmacology) in trauma therapy means processing small amounts of traumatic material at a time — moving in and out of traumatic activation — to keep the client within the window of tolerance and…"
      }
    ]
  },

  {
    "id": "csi015",
    "domain": "skills_interventions",
    "subdomain": "TraumaInterventions",
    "difficulty": "hard",
    "question": "The \"window of tolerance\" (Siegel) describes:",
    "rationale": "Window of tolerance (Siegel, Ogden): the optimal arousal zone between hyperarousal (fight/flight — too activated) and hypoarousal (freeze/shutdown — too numb). Effective trauma processing occurs in this window. Trauma interventions aim to keep or return the client to this zone.",
    "options": [
      {
        "id": "a",
        "text": "The zone of optimal arousal in which a client can process difficult material without hyper- or hypo-arousal",
        "isCorrect": true,
        "rationale": "Window of tolerance (Siegel, Ogden): the optimal arousal zone between hyperarousal (fight/flight — too activated) and hypoarousal (freeze/shutdown — too numb)."
      },
      {
        "id": "b",
        "text": "The time period within which trauma processing should be completed to prevent PTSD during a routine session",
        "isCorrect": false,
        "rationale": "\"The time period within which trauma processing should be com…\" is not what the item tests — Window of tolerance (Siegel, Ogden): the optimal arousal zone between hyperarousal (fight/flight — too activated) and hypoarousal (freeze/shutdown "
      },
      {
        "id": "c",
        "text": "The period between trauma exposure and onset of PTSD symptoms at intake as the reference material frames it",
        "isCorrect": false,
        "rationale": "\"The period between trauma exposure and onset of PTSD symptom…\" is not what the item tests — Window of tolerance (Siegel, Ogden): the optimal arousal zone between hyperarousal (fight/flight — too activated) and hypoarousal (freeze/shutdown "
      },
      {
        "id": "d",
        "text": "The acceptable range of session length for trauma-focused work at intake as the reference material frames it",
        "isCorrect": false,
        "rationale": "\"The acceptable range of session length for trauma-focused wo…\" is not what the item tests — Window of tolerance (Siegel, Ogden): the optimal arousal zone between hyperarousal (fight/flight — too activated) and hypoarousal (freeze/shutdown "
      }
    ]
  },

  {
    "id": "csi016",
    "domain": "skills_interventions",
    "subdomain": "TraumaInterventions",
    "difficulty": "medium",
    "question": "Grounding techniques in trauma work are used primarily to:",
    "rationale": "Grounding techniques (5-4-3-2-1 sensory, feet-on-floor, cold water, etc.) reorient the client to the present moment when they become flooded or dissociated. They are stabilization tools, not trauma processing tools.",
    "options": [
      {
        "id": "a",
        "text": "Improve the client's ability to narrate their trauma coherently during a routine session",
        "isCorrect": false,
        "rationale": "\"Improve the client's ability to narrate their trauma coheren…\" is not what the item tests — Grounding techniques (5-4-3-2-1 sensory, feet-on-floor, cold water, etc.) reorient the client to the present moment when they become flooded or dis"
      },
      {
        "id": "b",
        "text": "Reconnect the client with the present moment when they are dissociating or overwhelmed",
        "isCorrect": true,
        "rationale": "Grounding techniques (5-4-3-2-1 sensory, feet-on-floor, cold water, etc.) reorient the client to the present moment when they become flooded or dissociated. They are stabilization tools, not trauma processing tools."
      },
      {
        "id": "c",
        "text": "Reduce physical symptoms of PTSD such as nightmares as the reference material frames it",
        "isCorrect": false,
        "rationale": "\"Reduce physical symptoms of PTSD such as nightmares as the r…\" is not what the item tests — Grounding techniques (5-4-3-2-1 sensory, feet-on-floor, cold water, etc.) reorient the client to the present moment when they become flooded or dis"
      },
      {
        "id": "d",
        "text": "Help the client process traumatic memories more quickly as clinicians typically apply it",
        "isCorrect": false,
        "rationale": "\"Help the client process traumatic memories more quickly as c…\" is not what the item tests — Grounding techniques (5-4-3-2-1 sensory, feet-on-floor, cold water, etc.) reorient the client to the present moment when they become flooded or dis"
      }
    ]
  },

  {
    "id": "csi017",
    "domain": "skills_interventions",
    "subdomain": "MotivationalInterviewing",
    "difficulty": "easy",
    "question": "The four core MI skills summarized as \"OARS\" include Open questions, Affirmations, Reflective listening, and:",
    "rationale": "OARS: Open questions (explore), Affirmations (build confidence and acknowledge strengths), Reflective listening (demonstrate understanding), Summarizing (collect and link key themes, transition, and evoke change talk). All four are foundational MI micro-skills.",
    "options": [
      {
        "id": "a",
        "text": "Reframing",
        "isCorrect": false,
        "rationale": "\"Reframing\" is not what the item tests — OARS: Open questions (explore), Affirmations (build confidence and acknowledge strengths), Reflective listening (demonstrate understanding), Summarizing (collect and link key themes, transition, and "
      },
      {
        "id": "b",
        "text": "Scaling",
        "isCorrect": false,
        "rationale": "\"Scaling\" is not what the item tests — OARS: Open questions (explore), Affirmations (build confidence and acknowledge strengths), Reflective listening (demonstrate understanding), Summarizing (collect and link key themes, transition, and ev"
      },
      {
        "id": "c",
        "text": "Summarizing",
        "isCorrect": true,
        "rationale": "OARS: Open questions (explore), Affirmations (build confidence and acknowledge strengths), Reflective listening (demonstrate understanding), Summarizing (collect and link key themes, transition, and evoke change talk)."
      },
      {
        "id": "d",
        "text": "Strategizing",
        "isCorrect": false,
        "rationale": "\"Strategizing\" is not what the item tests — OARS: Open questions (explore), Affirmations (build confidence and acknowledge strengths), Reflective listening (demonstrate understanding), Summarizing (collect and link key themes, transition, a"
      }
    ]
  },

  {
    "id": "csi018",
    "domain": "skills_interventions",
    "subdomain": "MotivationalInterviewing",
    "difficulty": "medium",
    "question": "\"Change talk\" in MI refers to client statements that:",
    "rationale": "Change talk (DARN-C): Desire (\"I want to...\"), Ability (\"I could...\"), Reason (\"It would help...\"), Need (\"I have to...\"), Commitment (\"I will...\"). MI counselors selectively reinforce and explore change talk; sustain talk (\"I don't want to,\" resistance) is rolled with, not reinforced.",
    "options": [
      {
        "id": "a",
        "text": "Describe the history of the problem behavior in detail as used",
        "isCorrect": false,
        "rationale": "\"Describe the history of the problem behavior in detail as us…\" is not what the item tests — Change talk (DARN-C): Desire (\"I want to...\"), Ability (\"I could...\"), Reason (\"It would help...\"), Need (\"I have to...\"), Commitment (\"I will...\")"
      },
      {
        "id": "b",
        "text": "Indicate readiness to begin a new treatment modality at intake",
        "isCorrect": false,
        "rationale": "\"Indicate readiness to begin a new treatment modality at inta…\" is not what the item tests — Change talk (DARN-C): Desire (\"I want to...\"), Ability (\"I could...\"), Reason (\"It would help...\"), Need (\"I have to...\"), Commitment (\"I will...\")"
      },
      {
        "id": "c",
        "text": "Acknowledge problems but argue against changing in this domain now",
        "isCorrect": false,
        "rationale": "\"Acknowledge problems but argue against changing in this doma…\" is not what the item tests — Change talk (DARN-C): Desire (\"I want to...\"), Ability (\"I could...\"), Reason (\"It would help...\"), Need (\"I have to...\"), Commitment (\"I will...\")"
      },
      {
        "id": "d",
        "text": "Express desire, ability, reason, need, or commitment to change",
        "isCorrect": true,
        "rationale": "Change talk (DARN-C): Desire (\"I want to...\"), Ability (\"I could...\"), Reason (\"It would help...\"), Need (\"I have to...\"), Commitment (\"I will...\")."
      }
    ]
  },

  {
    "id": "csi019",
    "domain": "skills_interventions",
    "subdomain": "MotivationalInterviewing",
    "difficulty": "hard",
    "question": "A decisional balance exercise in MI is used MOST appropriately with clients in which stage?",
    "rationale": "Decisional balance (exploring pros and cons of change and of staying the same) is most useful in contemplation, where ambivalence is central. In precontemplation, it can backfire by reinforcing sustain talk; in action/maintenance, the client has already committed and doesn't need to re-examine the decision.",
    "options": [
      {
        "id": "a",
        "text": "Contemplation — to explore ambivalence about change",
        "isCorrect": true,
        "rationale": "Decisional balance (exploring pros and cons of change and of staying the same) is most useful in contemplation, where ambivalence is central."
      },
      {
        "id": "b",
        "text": "Maintenance — to prevent relapse through cost-benefit analysis",
        "isCorrect": false,
        "rationale": "\"Maintenance — to prevent relapse through cost-benefit analys…\" is not what the item tests — Decisional balance (exploring pros and cons of change and of staying the same) is most useful in contemplation, where ambivalence is central."
      },
      {
        "id": "c",
        "text": "Precontemplation — to demonstrate they have a problem",
        "isCorrect": false,
        "rationale": "\"Precontemplation — to demonstrate they have a problem\" is not what the item tests — Decisional balance (exploring pros and cons of change and of staying the same) is most useful in contemplation, where ambivalence is central."
      },
      {
        "id": "d",
        "text": "Action — to reinforce commitment to current change efforts",
        "isCorrect": false,
        "rationale": "\"Action — to reinforce commitment to current change efforts\" is not what the item tests — Decisional balance (exploring pros and cons of change and of staying the same) is most useful in contemplation, where ambivalence is central."
      }
    ]
  },

  {
    "id": "csi020",
    "domain": "skills_interventions",
    "subdomain": "SFBTInterventions",
    "difficulty": "medium",
    "question": "In SFBT, \"compliments\" delivered as part of the consultation break message serve to:",
    "rationale": "SFBT compliments identify and affirm what the client is already doing that relates to the solution. They are not generic praise — they link observed strengths to the client's goals, priming the \"task\" (homework) that follows in the consultation message.",
    "options": [
      {
        "id": "a",
        "text": "Build rapport early in the therapeutic relationship at the level the item tests",
        "isCorrect": false,
        "rationale": "\"Build rapport early in the therapeutic relationship at the l…\" is not what the item tests — SFBT compliments identify and affirm what the client is already doing that relates to the solution."
      },
      {
        "id": "b",
        "text": "Validate the client's strengths and frame exceptions as evidence of capability",
        "isCorrect": true,
        "rationale": "SFBT compliments identify and affirm what the client is already doing that relates to the solution."
      },
      {
        "id": "c",
        "text": "Motivate clients through praise for stated intentions during a routine session",
        "isCorrect": false,
        "rationale": "\"Motivate clients through praise for stated intentions during…\" is not what the item tests — SFBT compliments identify and affirm what the client is already doing that relates to the solution."
      },
      {
        "id": "d",
        "text": "Provide positive reinforcement for session attendance during a routine session",
        "isCorrect": false,
        "rationale": "\"Provide positive reinforcement for session attendance during…\" is not what the item tests — SFBT compliments identify and affirm what the client is already doing that relates to the solution."
      }
    ]
  },

  {
    "id": "csi021",
    "domain": "skills_interventions",
    "subdomain": "NarrativeInterventions",
    "difficulty": "medium",
    "question": "In narrative therapy, \"mapping the influence of the problem\" involves asking the client to:",
    "rationale": "Mapping influence is a two-phase externalization process: (1) map how the problem influences the person's life and relationships, and (2) map how the person influences the problem. Together, they expose agency and prepare for re-authoring.",
    "options": [
      {
        "id": "a",
        "text": "Trace the origins of the problem to specific childhood events today",
        "isCorrect": false,
        "rationale": "\"Trace the origins of the problem to specific childhood event…\" is not what the item tests — Mapping influence is a two-phase externalization process: (1) map how the problem influences the person's life and relationships, and (2) map how t"
      },
      {
        "id": "b",
        "text": "Identify where in their body they feel the problem most intensely now",
        "isCorrect": false,
        "rationale": "\"Identify where in their body they feel the problem most inte…\" is not what the item tests — Mapping influence is a two-phase externalization process: (1) map how the problem influences the person's life and relationships, and (2) map how t"
      },
      {
        "id": "c",
        "text": "Describe how the problem has affected different areas of their life",
        "isCorrect": true,
        "rationale": "Mapping influence is a two-phase externalization process: (1) map how the problem influences the person's life and relationships, and (2) map how the person influences the problem. Together, they expose agency and prepare for re-authoring."
      },
      {
        "id": "d",
        "text": "Draw a diagram of their social support network as usually described",
        "isCorrect": false,
        "rationale": "\"Draw a diagram of their social support network as usually de…\" is not what the item tests — Mapping influence is a two-phase externalization process: (1) map how the problem influences the person's life and relationships, and (2) map how t"
      }
    ]
  },

  {
    "id": "csi022",
    "domain": "skills_interventions",
    "subdomain": "GestaltInterventions",
    "difficulty": "medium",
    "question": "The two-chair technique in Gestalt therapy is MOST useful for:",
    "rationale": "The two-chair (Gestalt): client alternates between two chairs, speaking from each of two conflicting internal parts (e.g., the self-critical part vs. the wounded part). The dialogue promotes contact, awareness, and eventual integration of the split.",
    "options": [
      {
        "id": "a",
        "text": "Practicing assertiveness skills in a safe environment before real-world application",
        "isCorrect": false,
        "rationale": "\"Practicing assertiveness skills in a safe environment before…\" is not what the item tests — The two-chair (Gestalt): client alternates between two chairs, speaking from each of two conflicting internal parts (e.g., the self-critical part v"
      },
      {
        "id": "b",
        "text": "Desensitizing clients to interpersonal conflict by rehearsing difficult conversations",
        "isCorrect": false,
        "rationale": "\"Desensitizing clients to interpersonal conflict by rehearsin…\" is not what the item tests — The two-chair (Gestalt): client alternates between two chairs, speaking from each of two conflicting internal parts (e.g., the self-critical part v"
      },
      {
        "id": "c",
        "text": "Allowing the client to experience how others perceive their behavior in practice",
        "isCorrect": false,
        "rationale": "\"Allowing the client to experience how others perceive their …\" is not what the item tests — The two-chair (Gestalt): client alternates between two chairs, speaking from each of two conflicting internal parts (e.g., the self-critical part v"
      },
      {
        "id": "d",
        "text": "Facilitating dialogue between opposing parts of the self to promote integration",
        "isCorrect": true,
        "rationale": "The two-chair (Gestalt): client alternates between two chairs, speaking from each of two conflicting internal parts (e.g., the self-critical part vs."
      }
    ]
  },

  {
    "id": "csi023",
    "domain": "skills_interventions",
    "subdomain": "GestaltInterventions",
    "difficulty": "hard",
    "question": "\"The exaggeration experiment\" in Gestalt therapy asks the client to:",
    "rationale": "The exaggeration experiment: client is asked to amplify a small nonverbal cue (a tapping foot, a half-smile, a clenched fist) to heighten awareness of the emotion or message it carries. This brings body-held experience into conscious awareness.",
    "options": [
      {
        "id": "a",
        "text": "Amplify a nonverbal behavior or movement to heighten awareness of its meaning",
        "isCorrect": true,
        "rationale": "The exaggeration experiment: client is asked to amplify a small nonverbal cue (a tapping foot, a half-smile, a clenched fist) to heighten awareness of the emotion or message it carries."
      },
      {
        "id": "b",
        "text": "Perform the problem behavior deliberately to increase voluntary control over it",
        "isCorrect": false,
        "rationale": "\"Perform the problem behavior deliberately to increase volunt…\" is not what the item tests — The exaggeration experiment: client is asked to amplify a small nonverbal cue (a tapping foot, a half-smile, a clenched fist) to heighten awareness"
      },
      {
        "id": "c",
        "text": "Exaggerate positive self-statements to counteract negative thinking at intake",
        "isCorrect": false,
        "rationale": "\"Exaggerate positive self-statements to counteract negative t…\" is not what the item tests — The exaggeration experiment: client is asked to amplify a small nonverbal cue (a tapping foot, a half-smile, a clenched fist) to heighten awareness"
      },
      {
        "id": "d",
        "text": "Catastrophize about a feared outcome to reveal its irrationality by counselors",
        "isCorrect": false,
        "rationale": "\"Catastrophize about a feared outcome to reveal its irrationa…\" is not what the item tests — The exaggeration experiment: client is asked to amplify a small nonverbal cue (a tapping foot, a half-smile, a clenched fist) to heighten awareness"
      }
    ]
  },

  {
    "id": "csi024",
    "domain": "skills_interventions",
    "subdomain": "ExpressiveInterventions",
    "difficulty": "medium",
    "question": "Bibliotherapy as a counseling intervention is MOST appropriately used to:",
    "rationale": "Bibliotherapy uses carefully selected reading materials — self-help books, memoirs, workbooks, or fiction — as therapeutic adjuncts. It provides psychoeducation, reduces isolation, and often prompts material for exploration in session.",
    "options": [
      {
        "id": "a",
        "text": "Assign clients reading as a substitute for session attendance now as clinicians typically apply it",
        "isCorrect": false,
        "rationale": "\"Assign clients reading as a substitute for session attendanc…\" is not what the item tests — Bibliotherapy uses carefully selected reading materials — self-help books, memoirs, workbooks, or fiction — as therapeutic adjuncts."
      },
      {
        "id": "b",
        "text": "Supplement therapy by providing psychoeducation and normalizing experiences through selected texts",
        "isCorrect": true,
        "rationale": "Bibliotherapy uses carefully selected reading materials — self-help books, memoirs, workbooks, or fiction — as therapeutic adjuncts. It provides psychoeducation, reduces isolation, and often prompts material for exploration in session."
      },
      {
        "id": "c",
        "text": "Replace evidence-based treatment for clients with subclinical presentations during a routine session",
        "isCorrect": false,
        "rationale": "\"Replace evidence-based treatment for clients with subclinica…\" is not what the item tests — Bibliotherapy uses carefully selected reading materials — self-help books, memoirs, workbooks, or fiction — as therapeutic adjuncts."
      },
      {
        "id": "d",
        "text": "Assign memoir reading to clients who struggle with verbal expression as clinicians typically apply it",
        "isCorrect": false,
        "rationale": "\"Assign memoir reading to clients who struggle with verbal ex…\" is not what the item tests — Bibliotherapy uses carefully selected reading materials — self-help books, memoirs, workbooks, or fiction — as therapeutic adjuncts."
      }
    ]
  },

  {
    "id": "csi025",
    "domain": "skills_interventions",
    "subdomain": "ExpressiveInterventions",
    "difficulty": "medium",
    "question": "When integrating creative/expressive arts into counseling (outside specialized credentialing), the counselor's ethical responsibility is to:",
    "rationale": "ACA C.2.a (competence): basic expressive arts activities (drawing, journaling, metaphor-based exercises) may fall within a counselor's scope with appropriate training. Advanced or specialized art therapy applications require credentialed training. Scope of practice, not categorical prohibition, governs use.",
    "options": [
      {
        "id": "a",
        "text": "Avoid all expressive arts techniques without board-certified art therapy credentials during a routine session",
        "isCorrect": false,
        "rationale": "\"Avoid all expressive arts techniques without board-certified…\" is not what the item tests — ACA C.2.a (competence): basic expressive arts activities (drawing, journaling, metaphor-based exercises) may fall within a counselor's scope with a"
      },
      {
        "id": "b",
        "text": "Obtain client permission but no special training is needed for simple activities as clinicians typically apply it",
        "isCorrect": false,
        "rationale": "\"Obtain client permission but no special training is needed f…\" is not what the item tests — ACA C.2.a (competence): basic expressive arts activities (drawing, journaling, metaphor-based exercises) may fall within a counselor's scope with a"
      },
      {
        "id": "c",
        "text": "Use basic expressive techniques within scope of competence and refer to specialists for advanced applications",
        "isCorrect": true,
        "rationale": "ACA C.2.a (competence): basic expressive arts activities (drawing, journaling, metaphor-based exercises) may fall within a counselor's scope with appropriate training."
      },
      {
        "id": "d",
        "text": "Use expressive arts only with children, not adults during a routine session as the reference material frames it",
        "isCorrect": false,
        "rationale": "\"Use expressive arts only with children, not adults during a …\" is not what the item tests — ACA C.2.a (competence): basic expressive arts activities (drawing, journaling, metaphor-based exercises) may fall within a counselor's scope with a"
      }
    ]
  },

  {
    "id": "csi026",
    "domain": "skills_interventions",
    "subdomain": "GroupInterventions",
    "difficulty": "medium",
    "question": "A group leader uses \"blocking\" when:",
    "rationale": "Blocking (Corey et al.) is a leader intervention that interrupts group behaviors harmful to the therapeutic process — scapegoating, advice-giving that avoids feeling, gossiping about absent members, or inappropriate self-disclosure. It protects the group's therapeutic integrity.",
    "options": [
      {
        "id": "a",
        "text": "Refusing to allow a member to dominate the session now as clinicians typically apply it now",
        "isCorrect": false,
        "rationale": "\"Refusing to allow a member to dominate the session now as cl…\" is not what the item tests — Blocking (Corey et al.) is a leader intervention that interrupts group behaviors harmful to the therapeutic process — scapegoating, advice-giving t"
      },
      {
        "id": "b",
        "text": "Temporarily postponing a topic until the group is ready to address it during counseling",
        "isCorrect": false,
        "rationale": "\"Temporarily postponing a topic until the group is ready to a…\" is not what the item tests — Blocking (Corey et al.) is a leader intervention that interrupts group behaviors harmful to the therapeutic process — scapegoating, advice-giving t"
      },
      {
        "id": "c",
        "text": "Preventing a silent member from withdrawing further into isolation as usually described",
        "isCorrect": false,
        "rationale": "\"Preventing a silent member from withdrawing further into iso…\" is not what the item tests — Blocking (Corey et al.) is a leader intervention that interrupts group behaviors harmful to the therapeutic process — scapegoating, advice-giving t"
      },
      {
        "id": "d",
        "text": "Interrupting harmful, gossipy, or countertherapeutic interactions between group members",
        "isCorrect": true,
        "rationale": "Blocking (Corey et al.) is a leader intervention that interrupts group behaviors harmful to the therapeutic process — scapegoating, advice-giving that avoids feeling, gossiping about absent members, or inappropriate self-disclosure."
      }
    ]
  },

  {
    "id": "csi027",
    "domain": "skills_interventions",
    "subdomain": "GroupInterventions",
    "difficulty": "medium",
    "question": "\"Drawing out\" in group facilitation refers to:",
    "rationale": "Drawing out: leader uses targeted invitations, questions, or nonverbal cues to bring quieter members into the group interaction. It is done sensitively — not forcing participation but creating openings.",
    "options": [
      {
        "id": "a",
        "text": "Inviting silent or less verbal members to contribute to the group discussion",
        "isCorrect": true,
        "rationale": "Drawing out: leader uses targeted invitations, questions, or nonverbal cues to bring quieter members into the group interaction. It is done sensitively — not forcing participation but creating openings."
      },
      {
        "id": "b",
        "text": "Encouraging a member to leave the group temporarily when overwhelmed as used",
        "isCorrect": false,
        "rationale": "\"Encouraging a member to leave the group temporarily when ove…\" is not what the item tests — Drawing out: leader uses targeted invitations, questions, or nonverbal cues to bring quieter members into the group interaction."
      },
      {
        "id": "c",
        "text": "Helping a member articulate emotions they cannot name verbally by counselors now",
        "isCorrect": false,
        "rationale": "\"Helping a member articulate emotions they cannot name verbal…\" is not what the item tests — Drawing out: leader uses targeted invitations, questions, or nonverbal cues to bring quieter members into the group interaction."
      },
      {
        "id": "d",
        "text": "Bringing unexpressed material into the group from an outside perspective now",
        "isCorrect": false,
        "rationale": "\"Bringing unexpressed material into the group from an outside…\" is not what the item tests — Drawing out: leader uses targeted invitations, questions, or nonverbal cues to bring quieter members into the group interaction."
      }
    ]
  },

  {
    "id": "csi028",
    "domain": "skills_interventions",
    "subdomain": "GroupInterventions",
    "difficulty": "hard",
    "question": "\"Linking\" in group therapy is a leader skill that:",
    "rationale": "Linking builds cohesion and universality by connecting what one member says to another's experience: \"I notice what David just shared resonates with what Amara was describing earlier — both of you seem to...\" This highlights commonality and deepens group-level processing.",
    "options": [
      {
        "id": "a",
        "text": "Connects the current group theme to the agreed-upon group goals at the level the item tests",
        "isCorrect": false,
        "rationale": "\"Connects the current group theme to the agreed-upon group go…\" is not what the item tests — Linking builds cohesion and universality by connecting what one member says to another's experience: \"I notice what David just shared resonates wit"
      },
      {
        "id": "b",
        "text": "Points out thematic or emotional connections between different members' shared experiences",
        "isCorrect": true,
        "rationale": "Linking builds cohesion and universality by connecting what one member says to another's experience: \"I notice what David just shared resonates with what Amara was describing earlier — both of you seem to...\" This highli…"
      },
      {
        "id": "c",
        "text": "Links the group experience to each member's outside relationships during a routine session",
        "isCorrect": false,
        "rationale": "\"Links the group experience to each member's outside relation…\" is not what the item tests — Linking builds cohesion and universality by connecting what one member says to another's experience: \"I notice what David just shared resonates wit"
      },
      {
        "id": "d",
        "text": "Connects individual session content to between-session homework at the level the item tests",
        "isCorrect": false,
        "rationale": "\"Connects individual session content to between-session homew…\" is not what the item tests — Linking builds cohesion and universality by connecting what one member says to another's experience: \"I notice what David just shared resonates wit"
      }
    ]
  },

  {
    "id": "csi029",
    "domain": "skills_interventions",
    "subdomain": "GroupInterventions",
    "difficulty": "medium",
    "question": "A group member discloses suicidal ideation mid-session. The group leader should FIRST:",
    "rationale": "The leader's duty to protect client safety supersedes group process. A brief in-session assessment determines urgency. The leader may step out briefly with the member or pause the group, ensuring safety before considering whether and how to continue. The group's experience of the event also becomes therapeutic material.",
    "options": [
      {
        "id": "a",
        "text": "End the group session for all members immediately in practice as the reference material frames it",
        "isCorrect": false,
        "rationale": "\"End the group session for all members immediately in practic…\" is not what the item tests — The leader's duty to protect client safety supersedes group process."
      },
      {
        "id": "b",
        "text": "Refer the matter to the co-leader and continue the group now as the reference material frames it",
        "isCorrect": false,
        "rationale": "\"Refer the matter to the co-leader and continue the group now…\" is not what the item tests — The leader's duty to protect client safety supersedes group process."
      },
      {
        "id": "c",
        "text": "Conduct a brief safety assessment with the member and address safety before continuing the group",
        "isCorrect": true,
        "rationale": "The leader's duty to protect client safety supersedes group process."
      },
      {
        "id": "d",
        "text": "Ask the group to support the member through the disclosure now as the reference material frames it",
        "isCorrect": false,
        "rationale": "\"Ask the group to support the member through the disclosure n…\" is not what the item tests — The leader's duty to protect client safety supersedes group process."
      }
    ]
  },

  {
    "id": "csi030",
    "domain": "skills_interventions",
    "subdomain": "GroupInterventions",
    "difficulty": "hard",
    "question": "Research consistently shows that grouping antisocial or conduct-disordered adolescents together in group therapy:",
    "rationale": "Deviancy training (Dishion et al.): peer reinforcement of deviant talk and behavior in homogeneous antisocial youth groups can increase problem behaviors. Heterogeneous groups (mixing prosocial and antisocial youth) or individual/family approaches are preferable.",
    "options": [
      {
        "id": "a",
        "text": "Is effective only when combined with psychoeducation now as the reference material frames it",
        "isCorrect": false,
        "rationale": "\"Is effective only when combined with psychoeducation now as …\" is not what the item tests — Deviancy training (Dishion et al.): peer reinforcement of deviant talk and behavior in homogeneous antisocial youth groups can increase problem beh"
      },
      {
        "id": "b",
        "text": "Is the most efficient way to reach this population here as the reference material frames it",
        "isCorrect": false,
        "rationale": "\"Is the most efficient way to reach this population here as t…\" is not what the item tests — Deviancy training (Dishion et al.): peer reinforcement of deviant talk and behavior in homogeneous antisocial youth groups can increase problem beh"
      },
      {
        "id": "c",
        "text": "Is equivalent in effectiveness to individual therapy now as the reference material frames it",
        "isCorrect": false,
        "rationale": "\"Is equivalent in effectiveness to individual therapy now as …\" is not what the item tests — Deviancy training (Dishion et al.): peer reinforcement of deviant talk and behavior in homogeneous antisocial youth groups can increase problem beh"
      },
      {
        "id": "d",
        "text": "Can worsen outcomes through deviancy training and peer reinforcement of antisocial behavior",
        "isCorrect": true,
        "rationale": "Deviancy training (Dishion et al.): peer reinforcement of deviant talk and behavior in homogeneous antisocial youth groups can increase problem behaviors."
      }
    ]
  },

  {
    "id": "csi031",
    "domain": "skills_interventions",
    "subdomain": "FamilyInterventions",
    "difficulty": "medium",
    "question": "\"Joining\" in structural family therapy (Minuchin) refers to the therapist:",
    "rationale": "Joining: the therapist temporarily adopts the family's language, pace, and relational style to establish trust and entry into the system before attempting restructuring interventions. Without joining, structural interventions are met with resistance.",
    "options": [
      {
        "id": "a",
        "text": "Accommodating to the family's style and culture to build an alliance before restructuring",
        "isCorrect": true,
        "rationale": "Joining: the therapist temporarily adopts the family's language, pace, and relational style to establish trust and entry into the system before attempting restructuring interventions."
      },
      {
        "id": "b",
        "text": "Joining the identified patient in validating their perspective against the family as used",
        "isCorrect": false,
        "rationale": "\"Joining the identified patient in validating their perspecti…\" is not what the item tests — Joining: the therapist temporarily adopts the family's language, pace, and relational style to establish trust and entry into the system before att"
      },
      {
        "id": "c",
        "text": "Becoming part of the family system to observe its natural dynamics during a routine session",
        "isCorrect": false,
        "rationale": "\"Becoming part of the family system to observe its natural dy…\" is not what the item tests — Joining: the therapist temporarily adopts the family's language, pace, and relational style to establish trust and entry into the system before att"
      },
      {
        "id": "d",
        "text": "Forming a coalition with the parental subsystem to enforce hierarchy as usually described",
        "isCorrect": false,
        "rationale": "\"Forming a coalition with the parental subsystem to enforce h…\" is not what the item tests — Joining: the therapist temporarily adopts the family's language, pace, and relational style to establish trust and entry into the system before att"
      }
    ]
  },

  {
    "id": "csi032",
    "domain": "skills_interventions",
    "subdomain": "FamilyInterventions",
    "difficulty": "medium",
    "question": "Systemic reframing in family therapy differs from individual CBT reframing in that it:",
    "rationale": "Systemic reframing repositions symptoms as serving a relational or protective function in the family system (e.g., \"Your son's acting out may be his way of keeping you and your wife focused together\"). It shifts from individual pathology to relational meaning.",
    "options": [
      {
        "id": "a",
        "text": "Focuses exclusively on changing cognitions of the most symptomatic family member in practice",
        "isCorrect": false,
        "rationale": "\"Focuses exclusively on changing cognitions of the most sympt…\" is not what the item tests — Systemic reframing repositions symptoms as serving a relational or protective function in the family system (e.g., \"Your son's acting out may be hi"
      },
      {
        "id": "b",
        "text": "Recontextualizes a symptom or behavior in terms of its function within the relational system",
        "isCorrect": true,
        "rationale": "Systemic reframing repositions symptoms as serving a relational or protective function in the family system (e.g., \"Your son's acting out may be his way of keeping you and your wife focused together\")."
      },
      {
        "id": "c",
        "text": "Requires consensus among all family members before being offered at the level the item tests now",
        "isCorrect": false,
        "rationale": "\"Requires consensus among all family members before being off…\" is not what the item tests — Systemic reframing repositions symptoms as serving a relational or protective function in the family system (e.g., \"Your son's acting out may be hi"
      },
      {
        "id": "d",
        "text": "Is used only when the family's narrative is factually inaccurate at the level the item tests",
        "isCorrect": false,
        "rationale": "\"Is used only when the family's narrative is factually inaccu…\" is not what the item tests — Systemic reframing repositions symptoms as serving a relational or protective function in the family system (e.g., \"Your son's acting out may be hi"
      }
    ]
  },

  {
    "id": "csi033",
    "domain": "skills_interventions",
    "subdomain": "FamilyInterventions",
    "difficulty": "medium",
    "question": "A genogram is MOST useful in family therapy for:",
    "rationale": "Genograms (Bowen/McGoldrick) are multigenerational family maps showing structure, relationships (enmeshment, cut-off, conflict), significant events, and patterns (substance use, mental illness, abuse) across at least three generations. They inform case conceptualization and systemic hypotheses.",
    "options": [
      {
        "id": "a",
        "text": "Documenting insurance and billing information for family sessions during a routine session",
        "isCorrect": false,
        "rationale": "\"Documenting insurance and billing information for family ses…\" is not what the item tests — Genograms (Bowen/McGoldrick) are multigenerational family maps showing structure, relationships (enmeshment, cut-off, conflict), significant events"
      },
      {
        "id": "b",
        "text": "Mapping DSM diagnoses across family members as used as the reference material frames it",
        "isCorrect": false,
        "rationale": "\"Mapping DSM diagnoses across family members as used as the r…\" is not what the item tests — Genograms (Bowen/McGoldrick) are multigenerational family maps showing structure, relationships (enmeshment, cut-off, conflict), significant events"
      },
      {
        "id": "c",
        "text": "Visually representing multigenerational patterns, relationships, and significant events",
        "isCorrect": true,
        "rationale": "Genograms (Bowen/McGoldrick) are multigenerational family maps showing structure, relationships (enmeshment, cut-off, conflict), significant events, and patterns (substance use, mental illness, abuse) across at least three generations."
      },
      {
        "id": "d",
        "text": "Providing a legal record of family structure for custody evaluations at the intake stage",
        "isCorrect": false,
        "rationale": "\"Providing a legal record of family structure for custody eva…\" is not what the item tests — Genograms (Bowen/McGoldrick) are multigenerational family maps showing structure, relationships (enmeshment, cut-off, conflict), significant events"
      }
    ]
  },

  {
    "id": "csi034",
    "domain": "skills_interventions",
    "subdomain": "CouplesInterventions",
    "difficulty": "hard",
    "question": "Gottman's \"Four Horsemen\" — predictors of relationship dissolution — are:",
    "rationale": "Gottman's Four Horsemen: Criticism (attacking character), Contempt (superiority/disgust — strongest predictor of divorce), Defensiveness (counter-complaint or victim stance), Stonewalling (emotional withdrawal from interaction). Each has a corresponding antidote in Gottman couples therapy.",
    "options": [
      {
        "id": "a",
        "text": "Anger, silence, criticism, jealousy by counselors",
        "isCorrect": false,
        "rationale": "\"Anger, silence, criticism, jealousy by counselors\" is not what the item tests — Gottman's Four Horsemen: Criticism (attacking character), Contempt (superiority/disgust — strongest predictor of divorce), Defensiveness (counter-complaint or "
      },
      {
        "id": "b",
        "text": "Criticism, resentment, disengagement, hostility now",
        "isCorrect": false,
        "rationale": "\"Criticism, resentment, disengagement, hostility now\" is not what the item tests — Gottman's Four Horsemen: Criticism (attacking character), Contempt (superiority/disgust — strongest predictor of divorce), Defensiveness (counter-complaint o"
      },
      {
        "id": "c",
        "text": "Contempt, avoidance, withdrawal, passive aggression",
        "isCorrect": false,
        "rationale": "\"Contempt, avoidance, withdrawal, passive aggression\" is not what the item tests — Gottman's Four Horsemen: Criticism (attacking character), Contempt (superiority/disgust — strongest predictor of divorce), Defensiveness (counter-complaint o"
      },
      {
        "id": "d",
        "text": "Criticism, contempt, defensiveness, stonewalling",
        "isCorrect": true,
        "rationale": "Gottman's Four Horsemen: Criticism (attacking character), Contempt (superiority/disgust — strongest predictor of divorce), Defensiveness (counter-complaint or victim stance), Stonewalling (emotional withdrawal from interaction)."
      }
    ]
  },

  {
    "id": "csi035",
    "domain": "skills_interventions",
    "subdomain": "CouplesInterventions",
    "difficulty": "medium",
    "question": "Emotionally Focused Therapy (EFT) for couples, developed by Susan Johnson, focuses primarily on:",
    "rationale": "EFT (Johnson, 1985): grounded in attachment theory, EFT identifies negative interaction cycles (pursuer-withdrawer), accesses the primary attachment emotions beneath the cycle (fear, longing, shame), and restructures interactions around vulnerable, authentic expression to create secure bonding events.",
    "options": [
      {
        "id": "a",
        "text": "Restructuring negative interactional cycles by accessing and reshaping underlying attachment emotions",
        "isCorrect": true,
        "rationale": "EFT (Johnson, 1985): grounded in attachment theory, EFT identifies negative interaction cycles (pursuer-withdrawer), accesses the primary attachment emotions beneath the cycle (fear, longing, shame), and restructures int…"
      },
      {
        "id": "b",
        "text": "Behavioral contracts that reward positive couple interactions now as the reference material frames it",
        "isCorrect": false,
        "rationale": "\"Behavioral contracts that reward positive couple interaction…\" is not what the item tests — EFT (Johnson, 1985): grounded in attachment theory, EFT identifies negative interaction cycles (pursuer-withdrawer), accesses the primary attachmen"
      },
      {
        "id": "c",
        "text": "Teaching communication skills and conflict resolution strategies now as clinicians typically apply it",
        "isCorrect": false,
        "rationale": "\"Teaching communication skills and conflict resolution strate…\" is not what the item tests — EFT (Johnson, 1985): grounded in attachment theory, EFT identifies negative interaction cycles (pursuer-withdrawer), accesses the primary attachmen"
      },
      {
        "id": "d",
        "text": "Cognitive restructuring of negative attributions about the partner as the reference material frames it",
        "isCorrect": false,
        "rationale": "\"Cognitive restructuring of negative attributions about the p…\" is not what the item tests — EFT (Johnson, 1985): grounded in attachment theory, EFT identifies negative interaction cycles (pursuer-withdrawer), accesses the primary attachmen"
      }
    ]
  },

  {
    "id": "csi036",
    "domain": "skills_interventions",
    "subdomain": "CrisisInterventions",
    "difficulty": "medium",
    "question": "The six-step model of crisis intervention (Gilliland & James) begins with defining the problem from:",
    "rationale": "The six-step model: (1) Define the problem from the client's perspective, (2) Ensure safety, (3) Provide support, (4) Examine alternatives, (5) Make plans, (6) Obtain commitment. Beginning with the client's own understanding is foundational to a collaborative, person-centered crisis response.",
    "options": [
      {
        "id": "a",
        "text": "The referral source's presenting concern as intake",
        "isCorrect": false,
        "rationale": "\"The referral source's presenting concern\" is not what the item tests — The six-step model: (1) Define the problem from the client's perspective, (2) Ensure safety, (3) Provide support, (4) Examine alternatives, (5) Make plans, (6) Obtain c"
      },
      {
        "id": "b",
        "text": "The client's perspective on the presenting concern",
        "isCorrect": true,
        "rationale": "The six-step model: (1) Define the problem from the client's perspective, (2) Ensure safety, (3) Provide support, (4) Examine alternatives, (5) Make plans, (6) Obtain commitment."
      },
      {
        "id": "c",
        "text": "The counselor's clinical assessment and diagnostic formulation",
        "isCorrect": false,
        "rationale": "\"The counselor's clinical assessment and diagnostic formulati…\" is not what the item tests — The six-step model: (1) Define the problem from the client's perspective, (2) Ensure safety, (3) Provide support, (4) Examine alternatives, (5) Mak"
      },
      {
        "id": "d",
        "text": "The client's family's description of the events at intake",
        "isCorrect": false,
        "rationale": "\"The client's family's description of events\" is not what the item tests — The six-step model: (1) Define the problem from the client's perspective, (2) Ensure safety, (3) Provide support, (4) Examine alternatives, (5) Make plans, (6) Obtai"
      }
    ]
  },

  {
    "id": "csi037",
    "domain": "skills_interventions",
    "subdomain": "CrisisInterventions",
    "difficulty": "hard",
    "question": "Means restriction counseling in suicide intervention is evidence-based because:",
    "rationale": "Means restriction works because suicidal crises are typically acute and time-limited. Most people who survive an attempt do not go on to die by suicide. Reducing access to highly lethal means (firearms, medications) during the crisis window significantly reduces mortality — even without changing the underlying wish to die.",
    "options": [
      {
        "id": "a",
        "text": "It is required by HIPAA when a client discloses suicidal ideation at intake as the reference material frames it",
        "isCorrect": false,
        "rationale": "\"It is required by HIPAA when a client discloses suicidal ide…\" is not what the item tests — Means restriction works because suicidal crises are typically acute and time-limited."
      },
      {
        "id": "b",
        "text": "It provides the client with a sense of control over their environment today as the reference material frames it",
        "isCorrect": false,
        "rationale": "\"It provides the client with a sense of control over their en…\" is not what the item tests — Means restriction works because suicidal crises are typically acute and time-limited."
      },
      {
        "id": "c",
        "text": "Suicidal crises are time-limited and reducing access to lethal means during the crisis period reduces mortality",
        "isCorrect": true,
        "rationale": "Means restriction works because suicidal crises are typically acute and time-limited."
      },
      {
        "id": "d",
        "text": "It removes the underlying desire to die as the reference material frames it now as the reference material frames it",
        "isCorrect": false,
        "rationale": "\"It removes the underlying desire to die as the reference mat…\" is not what the item tests — Means restriction works because suicidal crises are typically acute and time-limited."
      }
    ]
  },

  {
    "id": "csi038",
    "domain": "skills_interventions",
    "subdomain": "CrisisInterventions",
    "difficulty": "medium",
    "question": "A safety plan for a suicidal client differs from a \"no-suicide contract\" primarily because:",
    "rationale": "Safety plans (Stanley & Brown): collaboratively identify warning signs, internal coping strategies, social contacts, professional resources, and means restriction. Research supports their effectiveness. No-suicide contracts lack evidence, may reduce the client's sense of agency, and create liability concerns if clients feel they signed under pressure.",
    "options": [
      {
        "id": "a",
        "text": "No-suicide contracts are preferred for clients with prior attempts (as commonly taught)",
        "isCorrect": false,
        "rationale": "\"No-suicide contracts are preferred for clients with prior at…\" is not what the item tests — Safety plans (Stanley & Brown): collaboratively identify warning signs, internal coping strategies, social contacts, professional resources, and me"
      },
      {
        "id": "b",
        "text": "Safety plans are used only in inpatient settings (as the reference material frames it)",
        "isCorrect": false,
        "rationale": "\"Safety plans are used only in inpatient settings as the refe…\" is not what the item tests — Safety plans (Stanley & Brown): collaboratively identify warning signs, internal coping strategies, social contacts, professional resources, and me"
      },
      {
        "id": "c",
        "text": "Safety plans are legally binding; no-suicide contracts are not (during routine sessions)",
        "isCorrect": false,
        "rationale": "\"Safety plans are legally binding; no-suicide contracts are n…\" is not what the item tests — Safety plans (Stanley & Brown): collaboratively identify warning signs, internal coping strategies, social contacts, professional resources, and me"
      },
      {
        "id": "d",
        "text": "Safety plans are collaboratively developed guides; no-suicide contracts are not evidence-based",
        "isCorrect": true,
        "rationale": "Safety plans (Stanley & Brown): collaboratively identify warning signs, internal coping strategies, social contacts, professional resources, and means restriction."
      }
    ]
  },

  {
    "id": "csi039",
    "domain": "skills_interventions",
    "subdomain": "CrisisInterventions",
    "difficulty": "medium",
    "question": "Psychological First Aid (PFA), used in disaster and mass trauma response, includes which core action?",
    "rationale": "PFA (NCTSN/NCPTSD) focuses on: ensuring safety, providing comfort, stabilizing distressed individuals, gathering information, offering practical assistance, connecting with supports, and providing information about coping. It does NOT involve formal diagnosis or routine debriefing.",
    "options": [
      {
        "id": "a",
        "text": "Providing immediate safety, comfort, practical support, and connection to additional services",
        "isCorrect": true,
        "rationale": "PFA (NCTSN/NCPTSD) focuses on: ensuring safety, providing comfort, stabilizing distressed individuals, gathering information, offering practical assistance, connecting with supports, and providing information about coping."
      },
      {
        "id": "b",
        "text": "Conducting formal diagnostic assessments with standardized tools as clinicians typically apply it",
        "isCorrect": false,
        "rationale": "\"Conducting formal diagnostic assessments with standardized t…\" is not what the item tests — PFA (NCTSN/NCPTSD) focuses on: ensuring safety, providing comfort, stabilizing distressed individuals, gathering information, offering practical as"
      },
      {
        "id": "c",
        "text": "Facilitating emotional debriefing for all exposed individuals as clinicians typically apply it",
        "isCorrect": false,
        "rationale": "\"Facilitating emotional debriefing for all exposed individual…\" is not what the item tests — PFA (NCTSN/NCPTSD) focuses on: ensuring safety, providing comfort, stabilizing distressed individuals, gathering information, offering practical as"
      },
      {
        "id": "d",
        "text": "Administering PTSD screening scales to all affected survivors as clinicians typically apply it",
        "isCorrect": false,
        "rationale": "\"Administering PTSD screening scales to all affected survivor…\" is not what the item tests — PFA (NCTSN/NCPTSD) focuses on: ensuring safety, providing comfort, stabilizing distressed individuals, gathering information, offering practical as"
      }
    ]
  },

  {
    "id": "csi040",
    "domain": "skills_interventions",
    "subdomain": "RelaxationInterventions",
    "difficulty": "easy",
    "question": "Progressive Muscle Relaxation (PMR) teaches clients to reduce anxiety by:",
    "rationale": "PMR (Jacobson): client alternately tenses and releases major muscle groups, learning to recognize and produce the contrast between tension and relaxation. This teaches voluntary control of physiological arousal through the somatic pathway.",
    "options": [
      {
        "id": "a",
        "text": "Consciously directing attention to pleasant imagery to displace anxious thoughts now",
        "isCorrect": false,
        "rationale": "\"Consciously directing attention to pleasant imagery to displ…\" is not what the item tests — PMR (Jacobson): client alternately tenses and releases major muscle groups, learning to recognize and produce the contrast between tension and rela"
      },
      {
        "id": "b",
        "text": "Systematically tensing and releasing muscle groups to produce a relaxation response",
        "isCorrect": true,
        "rationale": "PMR (Jacobson): client alternately tenses and releases major muscle groups, learning to recognize and produce the contrast between tension and relaxation. This teaches voluntary control of physiological arousal through the somatic pathway."
      },
      {
        "id": "c",
        "text": "Engaging in aerobic activity to metabolize stress hormones during a routine session",
        "isCorrect": false,
        "rationale": "\"Engaging in aerobic activity to metabolize stress hormones d…\" is not what the item tests — PMR (Jacobson): client alternately tenses and releases major muscle groups, learning to recognize and produce the contrast between tension and rela"
      },
      {
        "id": "d",
        "text": "Slowing breath rate to counteract the physiological arousal of anxiety by counselors",
        "isCorrect": false,
        "rationale": "\"Slowing breath rate to counteract the physiological arousal …\" is not what the item tests — PMR (Jacobson): client alternately tenses and releases major muscle groups, learning to recognize and produce the contrast between tension and rela"
      }
    ]
  },

  {
    "id": "csi041",
    "domain": "skills_interventions",
    "subdomain": "RelaxationInterventions",
    "difficulty": "medium",
    "question": "Diaphragmatic breathing (belly breathing) reduces anxiety primarily through:",
    "rationale": "Slow diaphragmatic breathing activates the parasympathetic nervous system via the vagus nerve (stimulating the relaxation response), counteracting sympathetic activation. This is why it is effective for acute anxiety, panic, and PTSD hyperarousal.",
    "options": [
      {
        "id": "a",
        "text": "Reducing muscle tension through rhythmic physical movement as clinicians typically apply it",
        "isCorrect": false,
        "rationale": "\"Reducing muscle tension through rhythmic physical movement a…\" is not what the item tests — Slow diaphragmatic breathing activates the parasympathetic nervous system via the vagus nerve (stimulating the relaxation response), counteracting "
      },
      {
        "id": "b",
        "text": "Distracting the client from anxious thoughts through attention to breathing by counselors",
        "isCorrect": false,
        "rationale": "\"Distracting the client from anxious thoughts through attenti…\" is not what the item tests — Slow diaphragmatic breathing activates the parasympathetic nervous system via the vagus nerve (stimulating the relaxation response), counteracting "
      },
      {
        "id": "c",
        "text": "Activating the parasympathetic nervous system, counteracting the fight-or-flight response",
        "isCorrect": true,
        "rationale": "Slow diaphragmatic breathing activates the parasympathetic nervous system via the vagus nerve (stimulating the relaxation response), counteracting sympathetic activation."
      },
      {
        "id": "d",
        "text": "Increasing blood oxygen to counteract hyperventilation-induced dizziness during counseling",
        "isCorrect": false,
        "rationale": "\"Increasing blood oxygen to counteract hyperventilation-induc…\" is not what the item tests — Slow diaphragmatic breathing activates the parasympathetic nervous system via the vagus nerve (stimulating the relaxation response), counteracting "
      }
    ]
  },

  {
    "id": "csi042",
    "domain": "skills_interventions",
    "subdomain": "PsychoeducationInterventions",
    "difficulty": "medium",
    "question": "Psychoeducation about the \"fight-flight-freeze\" response is MOST useful for clients with:",
    "rationale": "Teaching clients that anxiety symptoms (racing heart, shortness of breath, hypervigilance) are normal physiological responses to perceived threat reduces secondary fear (fear of fear) and catastrophic misinterpretation of body sensations — key mechanisms in anxiety and trauma.",
    "options": [
      {
        "id": "a",
        "text": "Personality disorders where emotional dysregulation is central during counseling",
        "isCorrect": false,
        "rationale": "\"Personality disorders where emotional dysregulation is centr…\" is not what the item tests — Teaching clients that anxiety symptoms (racing heart, shortness of breath, hypervigilance) are normal physiological responses to perceived threat r"
      },
      {
        "id": "b",
        "text": "Depressive disorders to explain low motivation and fatigue as usually described",
        "isCorrect": false,
        "rationale": "\"Depressive disorders to explain low motivation and fatigue a…\" is not what the item tests — Teaching clients that anxiety symptoms (racing heart, shortness of breath, hypervigilance) are normal physiological responses to perceived threat r"
      },
      {
        "id": "c",
        "text": "Psychotic disorders to explain the biological basis of hallucinations at intake",
        "isCorrect": false,
        "rationale": "\"Psychotic disorders to explain the biological basis of hallu…\" is not what the item tests — Teaching clients that anxiety symptoms (racing heart, shortness of breath, hypervigilance) are normal physiological responses to perceived threat r"
      },
      {
        "id": "d",
        "text": "Anxiety disorders and trauma presentations, to normalize physiological symptoms",
        "isCorrect": true,
        "rationale": "Teaching clients that anxiety symptoms (racing heart, shortness of breath, hypervigilance) are normal physiological responses to perceived threat reduces secondary fear (fear of fear) and catastrophic misinterpretation o…"
      }
    ]
  },

  {
    "id": "csi043",
    "domain": "skills_interventions",
    "subdomain": "CulturallyAdapted",
    "difficulty": "hard",
    "question": "Culturally adapted evidence-based interventions (CA-EBIs) are modified primarily by:",
    "rationale": "CA-EBIs (Bernal's Ecological Validity Framework): surface structure adaptations (language, images, materials) increase familiarity; deep structure adaptations (cultural values, norms, explanatory models, family roles) increase relevance and trust. Both increase engagement and outcomes.",
    "options": [
      {
        "id": "a",
        "text": "Adjusting surface features (language, examples, materials) and deep features (cultural values, worldview) to improve fit and engagement",
        "isCorrect": true,
        "rationale": "CA-EBIs (Bernal's Ecological Validity Framework): surface structure adaptations (language, images, materials) increase familiarity; deep structure adaptations (cultural values, norms, explanatory models, family roles) in…"
      },
      {
        "id": "b",
        "text": "Requiring bilingual therapists regardless of client language preference at the level the item tests as the reference material frames it",
        "isCorrect": false,
        "rationale": "\"Requiring bilingual therapists regardless of client language…\" is not what the item tests — CA-EBIs (Bernal's Ecological Validity Framework): surface structure adaptations (language, images, materials) increase familiarity; deep structure "
      },
      {
        "id": "c",
        "text": "Simplifying the evidence-based protocol to accommodate lower educational levels at the intake stage as the reference material frames it",
        "isCorrect": false,
        "rationale": "\"Simplifying the evidence-based protocol to accommodate lower…\" is not what the item tests — CA-EBIs (Bernal's Ecological Validity Framework): surface structure adaptations (language, images, materials) increase familiarity; deep structure "
      },
      {
        "id": "d",
        "text": "Replacing all Western assumptions with indigenous healing practices as clinicians typically apply it as the reference material frames it",
        "isCorrect": false,
        "rationale": "\"Replacing all Western assumptions with indigenous healing pr…\" is not what the item tests — CA-EBIs (Bernal's Ecological Validity Framework): surface structure adaptations (language, images, materials) increase familiarity; deep structure "
      }
    ]
  },

  {
    "id": "csi044",
    "domain": "skills_interventions",
    "subdomain": "RolePlayInterventions",
    "difficulty": "medium",
    "question": "Behavioral rehearsal as a counseling intervention is designed to:",
    "rationale": "Behavioral rehearsal: client practices a target behavior (assertiveness, conflict resolution, communication) through role play in the safety of the session. The therapist can provide feedback, modeling, and coaching before real-world transfer.",
    "options": [
      {
        "id": "a",
        "text": "Prepare for stressful medical or legal procedures through anticipatory coaching",
        "isCorrect": false,
        "rationale": "\"Prepare for stressful medical or legal procedures through an…\" is not what the item tests — Behavioral rehearsal: client practices a target behavior (assertiveness, conflict resolution, communication) through role play in the safety of the"
      },
      {
        "id": "b",
        "text": "Practice new skills in session before applying them in real-world situations",
        "isCorrect": true,
        "rationale": "Behavioral rehearsal: client practices a target behavior (assertiveness, conflict resolution, communication) through role play in the safety of the session."
      },
      {
        "id": "c",
        "text": "Help clients re-experience past events in a safe environment during counseling",
        "isCorrect": false,
        "rationale": "\"Help clients re-experience past events in a safe environment…\" is not what the item tests — Behavioral rehearsal: client practices a target behavior (assertiveness, conflict resolution, communication) through role play in the safety of the"
      },
      {
        "id": "d",
        "text": "Rehearse the content of the session for better retention between appointments",
        "isCorrect": false,
        "rationale": "\"Rehearse the content of the session for better retention bet…\" is not what the item tests — Behavioral rehearsal: client practices a target behavior (assertiveness, conflict resolution, communication) through role play in the safety of the"
      }
    ]
  },

  {
    "id": "csi045",
    "domain": "skills_interventions",
    "subdomain": "HomeworkInterventions",
    "difficulty": "medium",
    "question": "Therapeutic homework assignments are MOST effective when they are:",
    "rationale": "Effective homework: collaboratively developed (not imposed), logically connected to in-session work, specific and achievable, and always reviewed in the following session. Reviewing homework communicates its importance and informs next steps.",
    "options": [
      {
        "id": "a",
        "text": "Assigned at the end of every session regardless of content now as the reference material frames it",
        "isCorrect": false,
        "rationale": "\"Assigned at the end of every session regardless of content n…\" is not what the item tests — Effective homework: collaboratively developed (not imposed), logically connected to in-session work, specific and achievable, and always reviewed i"
      },
      {
        "id": "b",
        "text": "Assigned as consequences for lack of progress in session here as the reference material frames it",
        "isCorrect": false,
        "rationale": "\"Assigned as consequences for lack of progress in session her…\" is not what the item tests — Effective homework: collaboratively developed (not imposed), logically connected to in-session work, specific and achievable, and always reviewed i"
      },
      {
        "id": "c",
        "text": "Collaboratively developed, clearly connected to session content, and reviewed in the next session",
        "isCorrect": true,
        "rationale": "Effective homework: collaboratively developed (not imposed), logically connected to in-session work, specific and achievable, and always reviewed in the following session."
      },
      {
        "id": "d",
        "text": "Complex enough to challenge the client between sessions today as the reference material frames it",
        "isCorrect": false,
        "rationale": "\"Complex enough to challenge the client between sessions toda…\" is not what the item tests — Effective homework: collaboratively developed (not imposed), logically connected to in-session work, specific and achievable, and always reviewed i"
      }
    ]
  },

  {
    "id": "csi046",
    "domain": "skills_interventions",
    "subdomain": "MindfulnessInterventions",
    "difficulty": "medium",
    "question": "The \"leaves on a stream\" mindfulness exercise in ACT is primarily used to practice:",
    "rationale": "\"Leaves on a stream\": client imagines placing each thought on a leaf and watching it float downstream, not grasping or pushing any thought away. This trains defusion — the ability to observe thoughts as events without being swept along by them.",
    "options": [
      {
        "id": "a",
        "text": "Mindful breathing as a foundation for distress tolerance at the level the item tests",
        "isCorrect": false,
        "rationale": "\"Mindful breathing as a foundation for distress tolerance at …\" is not what the item tests — \"Leaves on a stream\": client imagines placing each thought on a leaf and watching it float downstream, not grasping or pushing any thought away."
      },
      {
        "id": "b",
        "text": "Values clarification through contemplative practice as clinicians typically apply it",
        "isCorrect": false,
        "rationale": "\"Values clarification through contemplative practice as clini…\" is not what the item tests — \"Leaves on a stream\": client imagines placing each thought on a leaf and watching it float downstream, not grasping or pushing any thought away."
      },
      {
        "id": "c",
        "text": "Grounding during dissociative episodes at intake as the reference material frames it",
        "isCorrect": false,
        "rationale": "\"Grounding during dissociative episodes at intake as the refe…\" is not what the item tests — \"Leaves on a stream\": client imagines placing each thought on a leaf and watching it float downstream, not grasping or pushing any thought away."
      },
      {
        "id": "d",
        "text": "Cognitive defusion — observing thoughts as passing mental events without attachment",
        "isCorrect": true,
        "rationale": "\"Leaves on a stream\": client imagines placing each thought on a leaf and watching it float downstream, not grasping or pushing any thought away."
      }
    ]
  },

  {
    "id": "csi047",
    "domain": "skills_interventions",
    "subdomain": "DeescalationInterventions",
    "difficulty": "medium",
    "question": "When a client in session becomes verbally aggressive and escalating, the counselor's FIRST priority is to:",
    "rationale": "De-escalation: prioritize safety — counselor's own and the client's. Maintain a calm voice, non-threatening posture, personal space, and reduced stimulation. Avoid power struggles. Limit-setting and termination may follow, but safety comes first. Security is contacted only if risk of harm is imminent.",
    "options": [
      {
        "id": "a",
        "text": "Ensure physical safety of all parties while maintaining a calm, non-threatening presence",
        "isCorrect": true,
        "rationale": "De-escalation: prioritize safety — counselor's own and the client's."
      },
      {
        "id": "b",
        "text": "Set a firm limit and remind the client of the behavioral agreement during a routine session",
        "isCorrect": false,
        "rationale": "\"Set a firm limit and remind the client of the behavioral agr…\" is not what the item tests — De-escalation: prioritize safety — counselor's own and the client's."
      },
      {
        "id": "c",
        "text": "Terminate the session immediately and ask the client to leave at the level the item tests",
        "isCorrect": false,
        "rationale": "\"Terminate the session immediately and ask the client to leav…\" is not what the item tests — De-escalation: prioritize safety — counselor's own and the client's."
      },
      {
        "id": "d",
        "text": "Contact security or law enforcement preemptively now as the reference material frames it",
        "isCorrect": false,
        "rationale": "\"Contact security or law enforcement preemptively now as the …\" is not what the item tests — De-escalation: prioritize safety — counselor's own and the client's."
      }
    ]
  },

  {
    "id": "csi048",
    "domain": "skills_interventions",
    "subdomain": "PeerSupport",
    "difficulty": "medium",
    "question": "Integrating peer support specialists into a treatment team is MOST beneficial because they:",
    "rationale": "Peer support specialists with lived experience of mental health or substance use challenges provide unique recovery-oriented support: hope through shared experience, practical navigation of systems, and engagement of populations that distrust traditional clinical services. They complement — not replace — clinical services.",
    "options": [
      {
        "id": "a",
        "text": "Can conduct assessments that clinicians are unable to complete at the level the item tests",
        "isCorrect": false,
        "rationale": "\"Can conduct assessments that clinicians are unable to comple…\" is not what the item tests — Peer support specialists with lived experience of mental health or substance use challenges provide unique recovery-oriented support: hope through "
      },
      {
        "id": "b",
        "text": "Offer lived experience, hope modeling, and bridge between clinical and community contexts",
        "isCorrect": true,
        "rationale": "Peer support specialists with lived experience of mental health or substance use challenges provide unique recovery-oriented support: hope through shared experience, practical navigation of systems, and engagement of pop…"
      },
      {
        "id": "c",
        "text": "Provide a less expensive alternative to licensed clinical services during a routine session",
        "isCorrect": false,
        "rationale": "\"Provide a less expensive alternative to licensed clinical se…\" is not what the item tests — Peer support specialists with lived experience of mental health or substance use challenges provide unique recovery-oriented support: hope through "
      },
      {
        "id": "d",
        "text": "Reduce clinician caseloads by taking on lower acuity clients as clinicians typically apply it",
        "isCorrect": false,
        "rationale": "\"Reduce clinician caseloads by taking on lower acuity clients…\" is not what the item tests — Peer support specialists with lived experience of mental health or substance use challenges provide unique recovery-oriented support: hope through "
      }
    ]
  },

  {
    "id": "csi049",
    "domain": "skills_interventions",
    "subdomain": "TerminationInterventions",
    "difficulty": "medium",
    "question": "When preparing a client for termination, the counselor should MOST importantly:",
    "rationale": "Effective termination: review of progress (what changed and how), consolidation of gains into transferable learning, anticipation of future stressors and relapse prevention, and processing the loss of the therapeutic relationship. All are clinically important before closing.",
    "options": [
      {
        "id": "a",
        "text": "Conduct a final comprehensive assessment to document outcomes at the level the item tests",
        "isCorrect": false,
        "rationale": "\"Conduct a final comprehensive assessment to document outcome…\" is not what the item tests — Effective termination: review of progress (what changed and how), consolidation of gains into transferable learning, anticipation of future stresso"
      },
      {
        "id": "b",
        "text": "Reassure the client they can return any time they struggle as clinicians typically apply it",
        "isCorrect": false,
        "rationale": "\"Reassure the client they can return any time they struggle a…\" is not what the item tests — Effective termination: review of progress (what changed and how), consolidation of gains into transferable learning, anticipation of future stresso"
      },
      {
        "id": "c",
        "text": "Review progress, consolidate gains, anticipate future challenges, and process the ending",
        "isCorrect": true,
        "rationale": "Effective termination: review of progress (what changed and how), consolidation of gains into transferable learning, anticipation of future stressors and relapse prevention, and processing the loss of the therapeutic relationship."
      },
      {
        "id": "d",
        "text": "Schedule a follow-up appointment to ensure maintenance of gains during a routine session",
        "isCorrect": false,
        "rationale": "\"Schedule a follow-up appointment to ensure maintenance of ga…\" is not what the item tests — Effective termination: review of progress (what changed and how), consolidation of gains into transferable learning, anticipation of future stresso"
      }
    ]
  },

  {
    "id": "csi050",
    "domain": "skills_interventions",
    "subdomain": "TerminationInterventions",
    "difficulty": "hard",
    "question": "A client who has achieved all treatment goals but is distressed about ending therapy says, \"You're the only person who has ever really listened to me.\" The counselor's BEST response:",
    "rationale": "The statement is clinically rich and emotionally valid — the relationship has been meaningful and real. Effective response: validate genuinely, explore what made this relationship different, use it to identify what the client can seek in other relationships, and strengthen the support network for post-termination.",
    "options": [
      {
        "id": "a",
        "text": "Remind the client that therapy is a professional, not personal, relationship in practice",
        "isCorrect": false,
        "rationale": "\"Remind the client that therapy is a professional, not person…\" is not what the item tests — The statement is clinically rich and emotionally valid — the relationship has been meaningful and real."
      },
      {
        "id": "b",
        "text": "Interpret this as unresolved abandonment issues requiring more treatment in this domain",
        "isCorrect": false,
        "rationale": "\"Interpret this as unresolved abandonment issues requiring mo…\" is not what the item tests — The statement is clinically rich and emotionally valid — the relationship has been meaningful and real."
      },
      {
        "id": "c",
        "text": "Offer to extend therapy given the depth of the relationship at the level the item tests",
        "isCorrect": false,
        "rationale": "\"Offer to extend therapy given the depth of the relationship …\" is not what the item tests — The statement is clinically rich and emotionally valid — the relationship has been meaningful and real."
      },
      {
        "id": "d",
        "text": "Validate the meaning of the relationship while exploring and building external supports",
        "isCorrect": true,
        "rationale": "The statement is clinically rich and emotionally valid — the relationship has been meaningful and real."
      }
    ]
  },

  {
    "id": "ppe001",
    "domain": "professional_ethics",
    "subdomain": "ACACode",
    "difficulty": "easy",
    "question": "The ACA Code of Ethics is BEST understood as:",
    "rationale": "The ACA Code of Ethics combines aspirational principles (how counselors should strive to act) with enforceable mandatory standards (what they must or must not do). It is not law, but licensing boards and ACA may sanction violations, and it is used as a standard of care in legal proceedings.",
    "options": [
      {
        "id": "a",
        "text": "A professional standard establishing aspirational ideals and enforceable conduct standards",
        "isCorrect": true,
        "rationale": "The ACA Code of Ethics combines aspirational principles (how counselors should strive to act) with enforceable mandatory standards (what they must or must not do)."
      },
      {
        "id": "b",
        "text": "A legal document with the force of state law in all jurisdictions during a routine session",
        "isCorrect": false,
        "rationale": "\"A legal document with the force of state law in all jurisdic…\" is not what the item tests — The ACA Code of Ethics combines aspirational principles (how counselors should strive to act) with enforceable mandatory standards (what they must "
      },
      {
        "id": "c",
        "text": "A billing and documentation compliance guide for third-party payers during a routine session",
        "isCorrect": false,
        "rationale": "\"A billing and documentation compliance guide for third-party…\" is not what the item tests — The ACA Code of Ethics combines aspirational principles (how counselors should strive to act) with enforceable mandatory standards (what they must "
      },
      {
        "id": "d",
        "text": "A set of recommendations that are entirely voluntary for licensed counselors by counselors",
        "isCorrect": false,
        "rationale": "\"A set of recommendations that are entirely voluntary for lic…\" is not what the item tests — The ACA Code of Ethics combines aspirational principles (how counselors should strive to act) with enforceable mandatory standards (what they must "
      }
    ]
  },

  {
    "id": "ppe002",
    "domain": "professional_ethics",
    "subdomain": "Confidentiality",
    "difficulty": "medium",
    "question": "Privileged communication differs from confidentiality in that privilege:",
    "rationale": "Confidentiality is the counselor's ethical duty. Privilege is the client's legal right to prevent testimony about therapeutic communications in legal proceedings. Privilege is waived by the CLIENT, not the counselor. It varies by state and relationship type.",
    "options": [
      {
        "id": "a",
        "text": "Applies to all mental health communications regardless of setting as usually described",
        "isCorrect": false,
        "rationale": "\"Applies to all mental health communications regardless of se…\" is not what the item tests — Confidentiality is the counselor's ethical duty."
      },
      {
        "id": "b",
        "text": "Is a legal right held by the client that protects disclosures from being used in court",
        "isCorrect": true,
        "rationale": "Confidentiality is the counselor's ethical duty."
      },
      {
        "id": "c",
        "text": "Can be waived by the counselor in the interest of the client in the outpatient setting",
        "isCorrect": false,
        "rationale": "\"Can be waived by the counselor in the interest of the client…\" is not what the item tests — Confidentiality is the counselor's ethical duty."
      },
      {
        "id": "d",
        "text": "Is an ethical obligation while confidentiality is a legal right during a routine session",
        "isCorrect": false,
        "rationale": "\"Is an ethical obligation while confidentiality is a legal ri…\" is not what the item tests — Confidentiality is the counselor's ethical duty."
      }
    ]
  },

  {
    "id": "ppe003",
    "domain": "professional_ethics",
    "subdomain": "Records",
    "difficulty": "medium",
    "question": "Under HIPAA, when a client requests a copy of their mental health records, the covered entity must respond within:",
    "rationale": "HIPAA Access Rule (45 CFR §164.524): covered entities must provide access to requested records within 30 days. A one-time 30-day extension is permitted if written notice with reason is provided. Counselors may not withhold records solely to collect unpaid balances.",
    "options": [
      {
        "id": "a",
        "text": "24 hours for urgent requests during a routine session",
        "isCorrect": false,
        "rationale": "\"24 hours for urgent requests during a routine session\" is not what the item tests — HIPAA Access Rule (45 CFR §164.524): covered entities must provide access to requested records within 30 days."
      },
      {
        "id": "b",
        "text": "60 days under all circumstances at the intake stage",
        "isCorrect": false,
        "rationale": "\"60 days under all circumstances at the intake stage\" is not what the item tests — HIPAA Access Rule (45 CFR §164.524): covered entities must provide access to requested records within 30 days."
      },
      {
        "id": "c",
        "text": "30 days, with a possible one-time 30-day extension",
        "isCorrect": true,
        "rationale": "HIPAA Access Rule (45 CFR §164.524): covered entities must provide access to requested records within 30 days."
      },
      {
        "id": "d",
        "text": "10 business days as an absolute standard at intake",
        "isCorrect": false,
        "rationale": "\"10 business days as an absolute standard at intake\" is not what the item tests — HIPAA Access Rule (45 CFR §164.524): covered entities must provide access to requested records within 30 days."
      }
    ]
  },

  {
    "id": "ppe004",
    "domain": "professional_ethics",
    "subdomain": "Records",
    "difficulty": "hard",
    "question": "A counselor's \"psychotherapy notes\" (process notes) receive a higher level of HIPAA protection than standard records because:",
    "rationale": "HIPAA defines psychotherapy notes as notes recorded in any medium by a healthcare provider who is a mental health professional documenting or analyzing the contents of a conversation, separated from the rest of the record. They require specific authorization beyond standard TPO disclosures and cannot be released without client consent except in very limited circumstances.",
    "options": [
      {
        "id": "a",
        "text": "They can only be released with court order, rarely with client consent (in item-tests usage)",
        "isCorrect": false,
        "rationale": "\"They can only be released with court order, rarely with clie…\" is not what the item tests — HIPAA defines psychotherapy notes as notes recorded in any medium by a healthcare provider who is a mental health professional documenting or analy"
      },
      {
        "id": "b",
        "text": "They are not subject to any disclosure under any circumstances (as typically described here)",
        "isCorrect": false,
        "rationale": "\"They are not subject to any disclosure under any circumstanc…\" is not what the item tests — HIPAA defines psychotherapy notes as notes recorded in any medium by a healthcare provider who is a mental health professional documenting or analy"
      },
      {
        "id": "c",
        "text": "They are protected by attorney-client privilege as the reference typically frames it now",
        "isCorrect": false,
        "rationale": "\"They are protected by attorney-client privilege as the refer…\" is not what the item tests — HIPAA defines psychotherapy notes as notes recorded in any medium by a healthcare provider who is a mental health professional documenting or analy"
      },
      {
        "id": "d",
        "text": "They require separate authorization and are excluded from the standard TPO disclosure exception",
        "isCorrect": true,
        "rationale": "HIPAA defines psychotherapy notes as notes recorded in any medium by a healthcare provider who is a mental health professional documenting or analyzing the contents of a conversation, separated from the rest of the record."
      }
    ]
  },

  {
    "id": "ppe005",
    "domain": "professional_ethics",
    "subdomain": "Supervision",
    "difficulty": "medium",
    "question": "Vicarious liability in clinical supervision means:",
    "rationale": "Vicarious liability (respondeat superior): supervisors can be held responsible for harm caused by supervisees under their supervision because they have a duty to ensure supervisee competence and conduct. This underscores the supervisor's ethical obligation to monitor, correct, and protect clients.",
    "options": [
      {
        "id": "a",
        "text": "Supervisors may be held legally responsible for harm caused by supervisees under their oversight",
        "isCorrect": true,
        "rationale": "Vicarious liability (respondeat superior): supervisors can be held responsible for harm caused by supervisees under their supervision because they have a duty to ensure supervisee competence and conduct."
      },
      {
        "id": "b",
        "text": "Supervisees share equal liability with their supervisors for all clinical decisions by counselors",
        "isCorrect": false,
        "rationale": "\"Supervisees share equal liability with their supervisors for…\" is not what the item tests — Vicarious liability (respondeat superior): supervisors can be held responsible for harm caused by supervisees under their supervision because they "
      },
      {
        "id": "c",
        "text": "Liability is transferred entirely to the supervisee once they obtain independent licensure today",
        "isCorrect": false,
        "rationale": "\"Liability is transferred entirely to the supervisee once the…\" is not what the item tests — Vicarious liability (respondeat superior): supervisors can be held responsible for harm caused by supervisees under their supervision because they "
      },
      {
        "id": "d",
        "text": "The supervisor is legally liable for any clinical outcome regardless of supervisee conduct today",
        "isCorrect": false,
        "rationale": "\"The supervisor is legally liable for any clinical outcome re…\" is not what the item tests — Vicarious liability (respondeat superior): supervisors can be held responsible for harm caused by supervisees under their supervision because they "
      }
    ]
  },

  {
    "id": "ppe006",
    "domain": "professional_ethics",
    "subdomain": "Consultation",
    "difficulty": "medium",
    "question": "When a counselor consults with a colleague about a clinical case, they are ethically obligated to:",
    "rationale": "Consultation falls under treatment operations (generally permissible under HIPAA) but ethically requires the minimum necessary information. While complete de-identification is ideal, in practice the minimum necessary standard governs — share only what the consultant needs to be helpful, and document all consultations.",
    "options": [
      {
        "id": "a",
        "text": "Obtain written informed consent from the client before any consultation in this domain",
        "isCorrect": false,
        "rationale": "\"Obtain written informed consent from the client before any c…\" is not what the item tests — Consultation falls under treatment operations (generally permissible under HIPAA) but ethically requires the minimum necessary information."
      },
      {
        "id": "b",
        "text": "Disclose only the minimum information necessary to accomplish the consultation purpose",
        "isCorrect": true,
        "rationale": "Consultation falls under treatment operations (generally permissible under HIPAA) but ethically requires the minimum necessary information."
      },
      {
        "id": "c",
        "text": "Avoid any identifying information about the client in all consultations in this domain",
        "isCorrect": false,
        "rationale": "\"Avoid any identifying information about the client in all co…\" is not what the item tests — Consultation falls under treatment operations (generally permissible under HIPAA) but ethically requires the minimum necessary information."
      },
      {
        "id": "d",
        "text": "Document only consultations where information was shared, not purely conceptual discussions",
        "isCorrect": false,
        "rationale": "\"Document only consultations where information was shared, no…\" is not what the item tests — Consultation falls under treatment operations (generally permissible under HIPAA) but ethically requires the minimum necessary information."
      }
    ]
  },

  {
    "id": "ppe007",
    "domain": "professional_ethics",
    "subdomain": "ProBono",
    "difficulty": "medium",
    "question": "The ACA Code of Ethics addresses pro bono service by:",
    "rationale": "ACA Code A.10.d: counselors are encouraged to contribute to society through pro bono or reduced-fee work. This is aspirational, not a mandatory specific percentage. It reflects the profession's commitment to access and social justice.",
    "options": [
      {
        "id": "a",
        "text": "Requiring counselors to provide a mandated minimum percentage of services at no charge today",
        "isCorrect": false,
        "rationale": "\"Requiring counselors to provide a mandated minimum percentag…\" is not what the item tests — ACA Code A.10.d: counselors are encouraged to contribute to society through pro bono or reduced-fee work."
      },
      {
        "id": "b",
        "text": "Prohibiting sliding fee scales that could reduce practice income unfairly at the intake stage",
        "isCorrect": false,
        "rationale": "\"Prohibiting sliding fee scales that could reduce practice in…\" is not what the item tests — ACA Code A.10.d: counselors are encouraged to contribute to society through pro bono or reduced-fee work."
      },
      {
        "id": "c",
        "text": "Encouraging counselors to contribute to society by offering pro bono or reduced-fee services",
        "isCorrect": true,
        "rationale": "ACA Code A.10.d: counselors are encouraged to contribute to society through pro bono or reduced-fee work. This is aspirational, not a mandatory specific percentage. It reflects the profession's commitment to access and social justice."
      },
      {
        "id": "d",
        "text": "Specifying that pro bono clients must receive the same services as paying clients in practice",
        "isCorrect": false,
        "rationale": "\"Specifying that pro bono clients must receive the same servi…\" is not what the item tests — ACA Code A.10.d: counselors are encouraged to contribute to society through pro bono or reduced-fee work."
      }
    ]
  },

  {
    "id": "ppe008",
    "domain": "professional_ethics",
    "subdomain": "DiagnosisEthics",
    "difficulty": "hard",
    "question": "Assigning a diagnosis primarily to secure third-party reimbursement when the diagnosis does not accurately reflect the client's condition is:",
    "rationale": "ACA Code E.5.c: counselors take special care to provide proper diagnosis of mental disorders and do not assign inaccurate diagnoses for billing purposes. This constitutes insurance fraud (a criminal act) and an ethical violation, regardless of client consent.",
    "options": [
      {
        "id": "a",
        "text": "Permissible if it is done collaboratively with the client",
        "isCorrect": false,
        "rationale": "\"Permissible if done collaboratively with the client\" is not what the item tests — ACA Code E.5.c: counselors take special care to provide proper diagnosis of mental disorders and do not assign inaccurate diagnoses for billing purposes."
      },
      {
        "id": "b",
        "text": "Acceptable if the counselor thinks criteria will eventually be met",
        "isCorrect": false,
        "rationale": "\"Acceptable if the counselor believes the client will eventua…\" is not what the item tests — ACA Code E.5.c: counselors take special care to provide proper diagnosis of mental disorders and do not assign inaccurate diagnoses for billing pur"
      },
      {
        "id": "c",
        "text": "Permitted if the diagnosis is V-code adjusted in the record",
        "isCorrect": false,
        "rationale": "\"Permitted if the diagnosis is V-code adjusted in the record\" is not what the item tests — ACA Code E.5.c: counselors take special care to provide proper diagnosis of mental disorders and do not assign inaccurate diagnoses for billing purpo"
      },
      {
        "id": "d",
        "text": "An ethical violation that constitutes insurance fraud",
        "isCorrect": true,
        "rationale": "ACA Code E.5.c: counselors take special care to provide proper diagnosis of mental disorders and do not assign inaccurate diagnoses for billing purposes."
      }
    ]
  },

  {
    "id": "ppe009",
    "domain": "professional_ethics",
    "subdomain": "Technology",
    "difficulty": "medium",
    "question": "When storing electronic client records, a counselor's primary HIPAA obligation is to:",
    "rationale": "HIPAA Security Rule requires \"reasonable and appropriate\" safeguards — physical (locked storage), technical (encryption, access controls), and administrative (policies, training). The standard is reasonable safeguards, not specific technology mandates. Cloud storage is permissible with a Business Associate Agreement.",
    "options": [
      {
        "id": "a",
        "text": "Implement reasonable physical, technical, and administrative safeguards to protect PHI",
        "isCorrect": true,
        "rationale": "HIPAA Security Rule requires \"reasonable and appropriate\" safeguards — physical (locked storage), technical (encryption, access controls), and administrative (policies, training)."
      },
      {
        "id": "b",
        "text": "Conduct annual third-party security audits of all systems as clinicians typically apply it",
        "isCorrect": false,
        "rationale": "\"Conduct annual third-party security audits of all systems as…\" is not what the item tests — HIPAA Security Rule requires \"reasonable and appropriate\" safeguards — physical (locked storage), technical (encryption, access controls), and admi"
      },
      {
        "id": "c",
        "text": "Use only government-approved encryption software now as the reference material frames it",
        "isCorrect": false,
        "rationale": "\"Use only government-approved encryption software now as the …\" is not what the item tests — HIPAA Security Rule requires \"reasonable and appropriate\" safeguards — physical (locked storage), technical (encryption, access controls), and admi"
      },
      {
        "id": "d",
        "text": "Store records exclusively on local hardware with no cloud storage as usually described",
        "isCorrect": false,
        "rationale": "\"Store records exclusively on local hardware with no cloud st…\" is not what the item tests — HIPAA Security Rule requires \"reasonable and appropriate\" safeguards — physical (locked storage), technical (encryption, access controls), and admi"
      }
    ]
  },

  {
    "id": "ppe010",
    "domain": "professional_ethics",
    "subdomain": "Advertising",
    "difficulty": "medium",
    "question": "A counselor uses client testimonials on their practice website. According to ACA ethics, this:",
    "rationale": "ACA Code C.3.b: counselors do not use testimonials from current clients or others who, because of their particular circumstances, are vulnerable to undue influence. The power differential in the therapeutic relationship makes genuine freely-given consent for promotional use ethically suspect.",
    "options": [
      {
        "id": "a",
        "text": "Is acceptable only for testimonials from former clients today as the reference material frames it",
        "isCorrect": false,
        "rationale": "\"Is acceptable only for testimonials from former clients toda…\" is not what the item tests — ACA Code C.3.b: counselors do not use testimonials from current clients or others who, because of their particular circumstances, are vulnerable to"
      },
      {
        "id": "b",
        "text": "Is prohibited because the therapeutic relationship creates undue influence over client statements",
        "isCorrect": true,
        "rationale": "ACA Code C.3.b: counselors do not use testimonials from current clients or others who, because of their particular circumstances, are vulnerable to undue influence."
      },
      {
        "id": "c",
        "text": "Is acceptable if the client provides written consent at intake as the reference material frames it",
        "isCorrect": false,
        "rationale": "\"Is acceptable if the client provides written consent at inta…\" is not what the item tests — ACA Code C.3.b: counselors do not use testimonials from current clients or others who, because of their particular circumstances, are vulnerable to"
      },
      {
        "id": "d",
        "text": "Is required to have proper SEO tagging to identify it as promotional as clinicians typically apply it",
        "isCorrect": false,
        "rationale": "\"Is required to have proper SEO tagging to identify it as pro…\" is not what the item tests — ACA Code C.3.b: counselors do not use testimonials from current clients or others who, because of their particular circumstances, are vulnerable to"
      }
    ]
  },

  {
    "id": "ppe011",
    "domain": "professional_ethics",
    "subdomain": "Competence",
    "difficulty": "medium",
    "question": "A counselor who has practiced a specific evidence-based approach for years without pursuing updated training may be at risk of:",
    "rationale": "ACA Code C.2.f: counselors recognize when their skills and knowledge are outdated and take steps to address this. Competence requires ongoing professional development, not just initial training. Evidence-based practices evolve; continuing education is an ethical obligation.",
    "options": [
      {
        "id": "a",
        "text": "Violating supervision requirements only, not competence standards itself as the reference material frames it",
        "isCorrect": false,
        "rationale": "\"Violating supervision requirements only, not competence stan…\" is not what the item tests — ACA Code C.2.f: counselors recognize when their skills and knowledge are outdated and take steps to address this."
      },
      {
        "id": "b",
        "text": "Nothing, as established training is sufficient for the duration of licensure as clinicians typically apply it",
        "isCorrect": false,
        "rationale": "\"Nothing, as established training is sufficient for the durat…\" is not what the item tests — ACA Code C.2.f: counselors recognize when their skills and knowledge are outdated and take steps to address this."
      },
      {
        "id": "c",
        "text": "Practicing with outdated methods that no longer reflect current standards, violating the competence standard",
        "isCorrect": true,
        "rationale": "ACA Code C.2.f: counselors recognize when their skills and knowledge are outdated and take steps to address this."
      },
      {
        "id": "d",
        "text": "Redundant practice, which is ethically neutral in the outpatient setting as the reference material frames it",
        "isCorrect": false,
        "rationale": "\"Redundant practice, which is ethically neutral in the outpat…\" is not what the item tests — ACA Code C.2.f: counselors recognize when their skills and knowledge are outdated and take steps to address this."
      }
    ]
  },

  {
    "id": "ppe012",
    "domain": "professional_ethics",
    "subdomain": "Impairment",
    "difficulty": "hard",
    "question": "A counselor experiencing burnout to the degree that it is affecting their clinical judgment is ETHICALLY required to:",
    "rationale": "ACA Code C.2.g: when counselors are impaired (by burnout, personal crises, substance use, etc.) to the point of affecting practice, they are ethically obligated to limit, suspend, or terminate professional responsibilities to protect clients. Self-care alone is insufficient when clients are at risk.",
    "options": [
      {
        "id": "a",
        "text": "Seek supervision, which substitutes for any other action when impaired now as clinicians typically apply it",
        "isCorrect": false,
        "rationale": "\"Seek supervision, which substitutes for any other action whe…\" is not what the item tests — ACA Code C.2.g: when counselors are impaired (by burnout, personal crises, substance use, etc.) to the point of affecting practice, they are ethica"
      },
      {
        "id": "b",
        "text": "Continue working and address burnout through self-care strategies only now as clinicians typically apply it",
        "isCorrect": false,
        "rationale": "\"Continue working and address burnout through self-care strat…\" is not what the item tests — ACA Code C.2.g: when counselors are impaired (by burnout, personal crises, substance use, etc.) to the point of affecting practice, they are ethica"
      },
      {
        "id": "c",
        "text": "Disclose their impairment to all current clients immediately in practice as the reference material frames it",
        "isCorrect": false,
        "rationale": "\"Disclose their impairment to all current clients immediately…\" is not what the item tests — ACA Code C.2.g: when counselors are impaired (by burnout, personal crises, substance use, etc.) to the point of affecting practice, they are ethica"
      },
      {
        "id": "d",
        "text": "Limit, suspend, or terminate their professional responsibilities to the extent necessary to protect clients",
        "isCorrect": true,
        "rationale": "ACA Code C.2.g: when counselors are impaired (by burnout, personal crises, substance use, etc.) to the point of affecting practice, they are ethically obligated to limit, suspend, or terminate professional responsibiliti…"
      }
    ]
  },

  {
    "id": "ppe013",
    "domain": "professional_ethics",
    "subdomain": "FERPA",
    "difficulty": "hard",
    "question": "In a school setting, student counseling records that are maintained separately from the general education record and used only by treatment personnel are governed primarily by:",
    "rationale": "FERPA excludes \"sole possession records\" maintained by a treatment provider and not shared with others from its education record definition. Separately maintained treatment records in schools may fall under HIPAA if the school is a covered entity, or be governed by state law. The intersection of FERPA and HIPAA in schools is complex; legal consultation is often warranted.",
    "options": [
      {
        "id": "a",
        "text": "HIPAA — they are health records exempt from FERPA's education record definition",
        "isCorrect": true,
        "rationale": "FERPA excludes \"sole possession records\" maintained by a treatment provider and not shared with others from its education record definition."
      },
      {
        "id": "b",
        "text": "FERPA — they are education records at intake as the reference material frames it",
        "isCorrect": false,
        "rationale": "\"FERPA — they are education records at intake as the referenc…\" is not what the item tests — FERPA excludes \"sole possession records\" maintained by a treatment provider and not shared with others from its education record definition."
      },
      {
        "id": "c",
        "text": "Neither FERPA nor HIPAA — school counseling records are unregulated in practice",
        "isCorrect": false,
        "rationale": "\"Neither FERPA nor HIPAA — school counseling records are unre…\" is not what the item tests — FERPA excludes \"sole possession records\" maintained by a treatment provider and not shared with others from its education record definition."
      },
      {
        "id": "d",
        "text": "State law only — federal law does not apply to school counseling in this domain",
        "isCorrect": false,
        "rationale": "\"State law only — federal law does not apply to school counse…\" is not what the item tests — FERPA excludes \"sole possession records\" maintained by a treatment provider and not shared with others from its education record definition."
      }
    ]
  },

  {
    "id": "ppe014",
    "domain": "professional_ethics",
    "subdomain": "Documentation",
    "difficulty": "medium",
    "question": "Late entries in clinical records (documentation completed after the session) are:",
    "rationale": "Late entries are clinically and legally common. Ethical documentation requires accurately recording BOTH the date of the session and the date the note was written. Backdating (recording a false date) is fraudulent. Timely documentation is a professional standard; late but accurately dated notes are preferable to no notes.",
    "options": [
      {
        "id": "a",
        "text": "Prohibited under HIPAA regardless of circumstances now as the reference material frames it",
        "isCorrect": false,
        "rationale": "\"Prohibited under HIPAA regardless of circumstances now as th…\" is not what the item tests — Late entries are clinically and legally common."
      },
      {
        "id": "b",
        "text": "Acceptable if clearly dated with the actual documentation date and the date of the session",
        "isCorrect": true,
        "rationale": "Late entries are clinically and legally common."
      },
      {
        "id": "c",
        "text": "Typically considered fraudulent if not completed within 24 hours in the outpatient setting",
        "isCorrect": false,
        "rationale": "\"Typically considered fraudulent if not completed within 24 h…\" is not what the item tests — Late entries are clinically and legally common."
      },
      {
        "id": "d",
        "text": "Acceptable only if the client provides retroactive consent as clinicians typically apply it",
        "isCorrect": false,
        "rationale": "\"Acceptable only if the client provides retroactive consent a…\" is not what the item tests — Late entries are clinically and legally common."
      }
    ]
  },

  {
    "id": "ppe015",
    "domain": "professional_ethics",
    "subdomain": "ClientRights",
    "difficulty": "medium",
    "question": "A competent adult client has the right to refuse treatment. Respecting this right, even when the counselor disagrees with the decision, reflects the principle of:",
    "rationale": "Autonomy: the ethical principle of respecting clients' rights to self-determination — including the right to refuse treatment, discontinue therapy, or make decisions the counselor disagrees with (provided the client has decision-making capacity and the refusal does not create imminent danger to others).",
    "options": [
      {
        "id": "a",
        "text": "Fidelity",
        "isCorrect": false,
        "rationale": "\"Fidelity\" is not what the item tests — Autonomy: the ethical principle of respecting clients' rights to self-determination — including the right to refuse treatment, discontinue therapy, or make decisions the counselor disagrees with (prov"
      },
      {
        "id": "b",
        "text": "Justice",
        "isCorrect": false,
        "rationale": "\"Justice\" is not what the item tests — Autonomy: the ethical principle of respecting clients' rights to self-determination — including the right to refuse treatment, discontinue therapy, or make decisions the counselor disagrees with (provi"
      },
      {
        "id": "c",
        "text": "Autonomy",
        "isCorrect": true,
        "rationale": "Autonomy: the ethical principle of respecting clients' rights to self-determination — including the right to refuse treatment, discontinue therapy, or make decisions the counselor disagrees with (provided the client has…"
      },
      {
        "id": "d",
        "text": "Nonmaleficence",
        "isCorrect": false,
        "rationale": "\"Nonmaleficence\" is not what the item tests — Autonomy: the ethical principle of respecting clients' rights to self-determination — including the right to refuse treatment, discontinue therapy, or make decisions the counselor disagrees with"
      }
    ]
  },

  {
    "id": "ppe016",
    "domain": "professional_ethics",
    "subdomain": "SuicideDocumentation",
    "difficulty": "hard",
    "question": "When documenting a clinical session in which suicide risk was assessed, the MOST important element to include is:",
    "rationale": "Documentation of suicide risk assessment should capture the clinical reasoning process: identified risk factors (static and dynamic), protective factors, assessment method/tools used, clinical determination of risk level, and the specific clinical actions taken and why. This demonstrates professional standard of care and provides a defensible record.",
    "options": [
      {
        "id": "a",
        "text": "A copy of the no-suicide contract signed by the client (as the reference frames it now)",
        "isCorrect": false,
        "rationale": "\"A copy of the no-suicide contract signed by the client as th…\" is not what the item tests — Documentation of suicide risk assessment should capture the clinical reasoning process: identified risk factors (static and dynamic), protective fa"
      },
      {
        "id": "b",
        "text": "Contact information for the nearest inpatient psychiatric unit (at the item-tests level)",
        "isCorrect": false,
        "rationale": "\"Contact information for the nearest inpatient psychiatric un…\" is not what the item tests — Documentation of suicide risk assessment should capture the clinical reasoning process: identified risk factors (static and dynamic), protective fa"
      },
      {
        "id": "c",
        "text": "A statement that the client denied any suicidal ideation (as the reference material typically frames it)",
        "isCorrect": false,
        "rationale": "\"A statement that the client denied suicidal ideation as the …\" is not what the item tests — Documentation of suicide risk assessment should capture the clinical reasoning process: identified risk factors (static and dynamic), protective fa"
      },
      {
        "id": "d",
        "text": "The clinical reasoning — risk and protective factors, findings, and the rationale for the decision",
        "isCorrect": true,
        "rationale": "Documentation of suicide risk assessment should capture the clinical reasoning process: identified risk factors (static and dynamic), protective factors, assessment method/tools used, clinical determination of risk level…"
      }
    ]
  },

  {
    "id": "ppe017",
    "domain": "professional_ethics",
    "subdomain": "MulticulturalEthics",
    "difficulty": "medium",
    "question": "The ACA's Multicultural and Social Justice Counseling Competencies (MSJCC) position multicultural competence as:",
    "rationale": "The MSJCC (Ratts et al., 2016) frames multicultural and social justice competence as foundational — not optional or specialty. All counselors are expected to develop awareness, knowledge, skills, and action across cultural and power dimensions regardless of their client population.",
    "options": [
      {
        "id": "a",
        "text": "A foundational ethical responsibility integrated throughout all competency domains",
        "isCorrect": true,
        "rationale": "The MSJCC (Ratts et al., 2016) frames multicultural and social justice competence as foundational — not optional or specialty."
      },
      {
        "id": "b",
        "text": "An elective specialty area counselors may choose to develop during a routine session",
        "isCorrect": false,
        "rationale": "\"An elective specialty area counselors may choose to develop …\" is not what the item tests — The MSJCC (Ratts et al., 2016) frames multicultural and social justice competence as foundational — not optional or specialty."
      },
      {
        "id": "c",
        "text": "Required only for counselors serving explicitly diverse populations in this domain",
        "isCorrect": false,
        "rationale": "\"Required only for counselors serving explicitly diverse popu…\" is not what the item tests — The MSJCC (Ratts et al., 2016) frames multicultural and social justice competence as foundational — not optional or specialty."
      },
      {
        "id": "d",
        "text": "A separate certification program requiring additional supervised hours in practice",
        "isCorrect": false,
        "rationale": "\"A separate certification program requiring additional superv…\" is not what the item tests — The MSJCC (Ratts et al., 2016) frames multicultural and social justice competence as foundational — not optional or specialty."
      }
    ]
  },

  {
    "id": "ppe018",
    "domain": "professional_ethics",
    "subdomain": "AssessmentEthics",
    "difficulty": "medium",
    "question": "Test security in psychological assessment refers to the counselor's obligation to:",
    "rationale": "ACA Code E.10: counselors maintain the integrity and security of tests and other assessment techniques by protecting test content from unauthorized disclosure. This protects assessment validity — if items are publicly known, normative comparisons become invalid. This includes secure storage, preventing item exposure, and not reproducing copyrighted materials.",
    "options": [
      {
        "id": "a",
        "text": "Conduct all assessments in a secure, private setting at the level the item tests",
        "isCorrect": false,
        "rationale": "\"Conduct all assessments in a secure, private setting at the …\" is not what the item tests — ACA Code E.10: counselors maintain the integrity and security of tests and other assessment techniques by protecting test content from unauthorized"
      },
      {
        "id": "b",
        "text": "Store assessments in a locked cabinet accessible only by licensed professionals",
        "isCorrect": true,
        "rationale": "ACA Code E.10: counselors maintain the integrity and security of tests and other assessment techniques by protecting test content from unauthorized disclosure."
      },
      {
        "id": "c",
        "text": "Ensure test results are encrypted in electronic health records during counseling",
        "isCorrect": false,
        "rationale": "\"Ensure test results are encrypted in electronic health recor…\" is not what the item tests — ACA Code E.10: counselors maintain the integrity and security of tests and other assessment techniques by protecting test content from unauthorized"
      },
      {
        "id": "d",
        "text": "Only use assessments with no known security vulnerabilities at the intake stage",
        "isCorrect": false,
        "rationale": "\"Only use assessments with no known security vulnerabilities …\" is not what the item tests — ACA Code E.10: counselors maintain the integrity and security of tests and other assessment techniques by protecting test content from unauthorized"
      }
    ]
  },

  {
    "id": "ppe019",
    "domain": "professional_ethics",
    "subdomain": "LicensingBoards",
    "difficulty": "hard",
    "question": "When a counselor receives a formal complaint from a licensing board, they should FIRST:",
    "rationale": "A licensing board complaint is a legal proceeding with career and licensure implications. The counselor should consult an attorney specializing in professional licensing before making any response. Contacting the complainant directly may violate board orders and worsen the situation. Clients should generally not be notified unless required.",
    "options": [
      {
        "id": "a",
        "text": "Notify all current clients of the complaint to maintain transparency by counselors",
        "isCorrect": false,
        "rationale": "\"Notify all current clients of the complaint to maintain tran…\" is not what the item tests — A licensing board complaint is a legal proceeding with career and licensure implications."
      },
      {
        "id": "b",
        "text": "Submit a detailed written response to the board within 48 hours at the intake stage",
        "isCorrect": false,
        "rationale": "\"Submit a detailed written response to the board within 48 ho…\" is not what the item tests — A licensing board complaint is a legal proceeding with career and licensure implications."
      },
      {
        "id": "c",
        "text": "Consult a licensed attorney familiar with professional licensing before responding",
        "isCorrect": true,
        "rationale": "A licensing board complaint is a legal proceeding with career and licensure implications."
      },
      {
        "id": "d",
        "text": "Immediately contact the complainant to address their concerns directly in practice",
        "isCorrect": false,
        "rationale": "\"Immediately contact the complainant to address their concern…\" is not what the item tests — A licensing board complaint is a legal proceeding with career and licensure implications."
      }
    ]
  },

  {
    "id": "ppe020",
    "domain": "professional_ethics",
    "subdomain": "WellnessEthics",
    "difficulty": "medium",
    "question": "The ACA Taskforce on Counselor Wellness and Impairment suggests that counselor self-care is an ethical issue primarily because:",
    "rationale": "Self-care is reframed as an ethical obligation (not just a personal benefit) because a counselor's impairment directly compromises client care. ACA Code C.2.g and C.2.e address impairment: counselors whose personal problems impair competence must address this, limiting practice if necessary.",
    "options": [
      {
        "id": "a",
        "text": "Wellness modeling increases client motivation for behavior change as the reference material frames it",
        "isCorrect": false,
        "rationale": "\"Wellness modeling increases client motivation for behavior c…\" is not what the item tests — Self-care is reframed as an ethical obligation (not just a personal benefit) because a counselor's impairment directly compromises client care."
      },
      {
        "id": "b",
        "text": "Counselors who burn out increase costs to the healthcare system as the reference material frames it",
        "isCorrect": false,
        "rationale": "\"Counselors who burn out increase costs to the healthcare sys…\" is not what the item tests — Self-care is reframed as an ethical obligation (not just a personal benefit) because a counselor's impairment directly compromises client care."
      },
      {
        "id": "c",
        "text": "The ACA Code requires counselors to engage in specific wellness activities during a routine session",
        "isCorrect": false,
        "rationale": "\"The ACA Code requires counselors to engage in specific welln…\" is not what the item tests — Self-care is reframed as an ethical obligation (not just a personal benefit) because a counselor's impairment directly compromises client care."
      },
      {
        "id": "d",
        "text": "Impaired counselors cannot provide competent care, and client welfare depends on counselor wellness",
        "isCorrect": true,
        "rationale": "Self-care is reframed as an ethical obligation (not just a personal benefit) because a counselor's impairment directly compromises client care."
      }
    ]
  },

  {
    "id": "int001",
    "domain": "intake",
    "subdomain": "IntakePurpose",
    "difficulty": "easy",
    "question": "The primary purpose of a clinical intake is to:",
    "rationale": "The intake serves multiple purposes but its primary clinical function is comprehensive information-gathering to understand the client's presenting concerns, history, strengths, and context — enabling an accurate formulation and appropriate treatment planning.",
    "options": [
      {
        "id": "a",
        "text": "Gather comprehensive information to understand the client's concerns and develop a treatment direction",
        "isCorrect": true,
        "rationale": "The intake serves multiple purposes but its primary clinical function is comprehensive information-gathering to understand the client's presenting concerns, history, strengths, and context — enabling an accurate formulat…"
      },
      {
        "id": "b",
        "text": "Orient the client to agency rules, fees, and paperwork in practice as the reference material frames it",
        "isCorrect": false,
        "rationale": "\"Orient the client to agency rules, fees, and paperwork in pr…\" is not what the item tests — The intake serves multiple purposes but its primary clinical function is comprehensive information-gathering to understand the client's presenting "
      },
      {
        "id": "c",
        "text": "Determine whether the client is appropriate for the agency's services as clinicians typically apply it",
        "isCorrect": false,
        "rationale": "\"Determine whether the client is appropriate for the agency's…\" is not what the item tests — The intake serves multiple purposes but its primary clinical function is comprehensive information-gathering to understand the client's presenting "
      },
      {
        "id": "d",
        "text": "Establish a formal diagnosis for insurance billing during counseling as the reference material frames it",
        "isCorrect": false,
        "rationale": "\"Establish a formal diagnosis for insurance billing during co…\" is not what the item tests — The intake serves multiple purposes but its primary clinical function is comprehensive information-gathering to understand the client's presenting "
      }
    ]
  },

  {
    "id": "int002",
    "domain": "intake",
    "subdomain": "PresentingProblem",
    "difficulty": "easy",
    "question": "When documenting the \"chief complaint\" at intake, the counselor should:",
    "rationale": "The chief complaint is best documented in the client's own words (often in quotation marks), capturing their subjective experience and primary concern before clinical formulation. This preserves the client's voice and provides a baseline for tracking progress.",
    "options": [
      {
        "id": "a",
        "text": "Summarize all presenting concerns in order of clinical severity in this domain",
        "isCorrect": false,
        "rationale": "\"Summarize all presenting concerns in order of clinical sever…\" is not what the item tests — The chief complaint is best documented in the client's own words (often in quotation marks), capturing their subjective experience and primary conc"
      },
      {
        "id": "b",
        "text": "Record the client's own words describing their primary reason for seeking help",
        "isCorrect": true,
        "rationale": "The chief complaint is best documented in the client's own words (often in quotation marks), capturing their subjective experience and primary concern before clinical formulation."
      },
      {
        "id": "c",
        "text": "Note only the DSM-diagnosable components of the client's stated concern itself",
        "isCorrect": false,
        "rationale": "\"Note only the DSM-diagnosable components of the client's sta…\" is not what the item tests — The chief complaint is best documented in the client's own words (often in quotation marks), capturing their subjective experience and primary conc"
      },
      {
        "id": "d",
        "text": "Translate the client's statement into clinical terminology at the intake stage now",
        "isCorrect": false,
        "rationale": "\"Translate the client's statement into clinical terminology a…\" is not what the item tests — The chief complaint is best documented in the client's own words (often in quotation marks), capturing their subjective experience and primary conc"
      }
    ]
  },

  {
    "id": "int003",
    "domain": "intake",
    "subdomain": "PresentingProblem",
    "difficulty": "medium",
    "question": "Exploring the \"history of present illness\" (HPI) at intake typically involves asking about:",
    "rationale": "HPI: characterizes the current episode — when it started (onset), how long it has lasted (duration), how intense it is (severity), whether it is stable/worsening/episodic (course), and what may have triggered or preceded it (precipitants). This is distinct from full psychiatric history.",
    "options": [
      {
        "id": "a",
        "text": "Previous diagnoses and hospitalizations only itself as the reference material frames it",
        "isCorrect": false,
        "rationale": "\"Previous diagnoses and hospitalizations only itself as the r…\" is not what the item tests — HPI: characterizes the current episode — when it started (onset), how long it has lasted (duration), how intense it is (severity), whether it is st"
      },
      {
        "id": "b",
        "text": "Family history of the same presenting concern today as the reference material frames it",
        "isCorrect": false,
        "rationale": "\"Family history of the same presenting concern today as the r…\" is not what the item tests — HPI: characterizes the current episode — when it started (onset), how long it has lasted (duration), how intense it is (severity), whether it is st"
      },
      {
        "id": "c",
        "text": "The onset, duration, severity, course, and precipitating factors of the current concern",
        "isCorrect": true,
        "rationale": "HPI: characterizes the current episode — when it started (onset), how long it has lasted (duration), how intense it is (severity), whether it is stable/worsening/episodic (course), and what may have triggered or preceded it (precipitants)."
      },
      {
        "id": "d",
        "text": "The client's entire psychiatric history from childhood to present during a routine session",
        "isCorrect": false,
        "rationale": "\"The client's entire psychiatric history from childhood to pr…\" is not what the item tests — HPI: characterizes the current episode — when it started (onset), how long it has lasted (duration), how intense it is (severity), whether it is st"
      }
    ]
  },

  {
    "id": "int004",
    "domain": "intake",
    "subdomain": "PsychiatricHistory",
    "difficulty": "medium",
    "question": "When gathering psychiatric history at intake, \"previous treatment response\" is clinically important because:",
    "rationale": "Prior treatment response is one of the most clinically informative elements of psychiatric history: what modalities were tried? what were the outcomes? what did the client find helpful or harmful? This avoids repeating ineffective approaches and builds on what works.",
    "options": [
      {
        "id": "a",
        "text": "It is required by most third-party payers before authorizing services at the intake stage",
        "isCorrect": false,
        "rationale": "\"It is required by most third-party payers before authorizing…\" is not what the item tests — Prior treatment response is one of the most clinically informative elements of psychiatric history: what modalities were tried?"
      },
      {
        "id": "b",
        "text": "It establishes whether the client qualifies for intensive services during a routine session",
        "isCorrect": false,
        "rationale": "\"It establishes whether the client qualifies for intensive se…\" is not what the item tests — Prior treatment response is one of the most clinically informative elements of psychiatric history: what modalities were tried?"
      },
      {
        "id": "c",
        "text": "It determines which diagnoses the client has had confirmed as clinicians typically apply it",
        "isCorrect": false,
        "rationale": "\"It determines which diagnoses the client has had confirmed a…\" is not what the item tests — Prior treatment response is one of the most clinically informative elements of psychiatric history: what modalities were tried?"
      },
      {
        "id": "d",
        "text": "It informs which approaches have worked or not worked, guiding current treatment planning",
        "isCorrect": true,
        "rationale": "Prior treatment response is one of the most clinically informative elements of psychiatric history: what modalities were tried?"
      }
    ]
  },

  {
    "id": "int005",
    "domain": "intake",
    "subdomain": "MedicalHistory",
    "difficulty": "medium",
    "question": "Obtaining a medical history at intake is clinically important primarily because:",
    "rationale": "Many medical conditions (thyroid disorders, neurological conditions, autoimmune diseases, medications) produce or mimic psychiatric symptoms. Failure to consider the medical context can lead to misdiagnosis and inappropriate treatment. Counselors screen for medical factors and collaborate with medical providers when relevant.",
    "options": [
      {
        "id": "a",
        "text": "Medical conditions can cause, contribute to, or be exacerbated by psychiatric symptoms",
        "isCorrect": true,
        "rationale": "Many medical conditions (thyroid disorders, neurological conditions, autoimmune diseases, medications) produce or mimic psychiatric symptoms."
      },
      {
        "id": "b",
        "text": "Insurance requires medical clearance before mental health services can begin at intake",
        "isCorrect": false,
        "rationale": "\"Insurance requires medical clearance before mental health se…\" is not what the item tests — Many medical conditions (thyroid disorders, neurological conditions, autoimmune diseases, medications) produce or mimic psychiatric symptoms."
      },
      {
        "id": "c",
        "text": "Counselors must rule out medical causes before providing any counseling service itself",
        "isCorrect": false,
        "rationale": "\"Counselors must rule out medical causes before providing any…\" is not what the item tests — Many medical conditions (thyroid disorders, neurological conditions, autoimmune diseases, medications) produce or mimic psychiatric symptoms."
      },
      {
        "id": "d",
        "text": "Counselors are required by law to coordinate with medical providers at the intake stage",
        "isCorrect": false,
        "rationale": "\"Counselors are required by law to coordinate with medical pr…\" is not what the item tests — Many medical conditions (thyroid disorders, neurological conditions, autoimmune diseases, medications) produce or mimic psychiatric symptoms."
      }
    ]
  },

  {
    "id": "int006",
    "domain": "intake",
    "subdomain": "FamilyHistory",
    "difficulty": "easy",
    "question": "A family history of mental health conditions is clinically relevant at intake primarily because:",
    "rationale": "Family psychiatric history informs: (1) genetic/biological vulnerability (e.g., family history of bipolar disorder increases risk), (2) differential diagnosis (e.g., family history of schizophrenia informs evaluation of psychotic symptoms), and (3) treatment planning (e.g., pharmacological considerations, family dynamics).",
    "options": [
      {
        "id": "a",
        "text": "Family history is required for all DSM diagnoses during counseling as the reference material frames it",
        "isCorrect": false,
        "rationale": "\"Family history is required for all DSM diagnoses during coun…\" is not what the item tests — Family psychiatric history informs: (1) genetic/biological vulnerability (e.g., family history of bipolar disorder increases risk), (2) differentia"
      },
      {
        "id": "b",
        "text": "It establishes the client's biological predisposition and may inform differential diagnosis and risk",
        "isCorrect": true,
        "rationale": "Family psychiatric history informs: (1) genetic/biological vulnerability (e.g., family history of bipolar disorder increases risk), (2) differential diagnosis (e.g., family history of schizophrenia informs evaluation of…"
      },
      {
        "id": "c",
        "text": "It identifies which family members should be included in treatment as the reference material frames it",
        "isCorrect": false,
        "rationale": "\"It identifies which family members should be included in tre…\" is not what the item tests — Family psychiatric history informs: (1) genetic/biological vulnerability (e.g., family history of bipolar disorder increases risk), (2) differentia"
      },
      {
        "id": "d",
        "text": "It determines which diagnoses to exclude during a routine session as the reference material frames it",
        "isCorrect": false,
        "rationale": "\"It determines which diagnoses to exclude during a routine se…\" is not what the item tests — Family psychiatric history informs: (1) genetic/biological vulnerability (e.g., family history of bipolar disorder increases risk), (2) differentia"
      }
    ]
  },

  {
    "id": "int007",
    "domain": "intake",
    "subdomain": "SocialHistory",
    "difficulty": "easy",
    "question": "The social history at intake typically includes:",
    "rationale": "Social history: educational background and attainment, occupational history, current living situation, relationship/marital history, cultural and religious background, primary support systems, and significant life events. This contextualizes the client's presenting concerns within their social world.",
    "options": [
      {
        "id": "a",
        "text": "A standardized social skills assessment in practice as the reference material frames it",
        "isCorrect": false,
        "rationale": "\"A standardized social skills assessment in practice as the r…\" is not what the item tests — Social history: educational background and attainment, occupational history, current living situation, relationship/marital history, cultural and r"
      },
      {
        "id": "b",
        "text": "A detailed account of the client's weekly social media use as clinicians typically apply it",
        "isCorrect": false,
        "rationale": "\"A detailed account of the client's weekly social media use a…\" is not what the item tests — Social history: educational background and attainment, occupational history, current living situation, relationship/marital history, cultural and r"
      },
      {
        "id": "c",
        "text": "Education, employment, housing, relationships, cultural background, and support systems",
        "isCorrect": true,
        "rationale": "Social history: educational background and attainment, occupational history, current living situation, relationship/marital history, cultural and religious background, primary support systems, and significant life events."
      },
      {
        "id": "d",
        "text": "Contact information for the client's primary social supports at the level the item tests",
        "isCorrect": false,
        "rationale": "\"Contact information for the client's primary social supports…\" is not what the item tests — Social history: educational background and attainment, occupational history, current living situation, relationship/marital history, cultural and r"
      }
    ]
  },

  {
    "id": "int008",
    "domain": "intake",
    "subdomain": "TraumaScreening",
    "difficulty": "medium",
    "question": "Routine trauma screening at intake is MOST justified because:",
    "rationale": "Trauma-informed care recognizes that trauma is highly prevalent (ACE studies), often undisclosed without direct inquiry, and influences multiple presenting concerns. Routine screening — done sensitively and with informed consent — prevents missing a primary driver of symptoms. Asking does not retraumatize; how one asks matters.",
    "options": [
      {
        "id": "a",
        "text": "All psychiatric conditions have a trauma component by counselors as the reference material frames it",
        "isCorrect": false,
        "rationale": "\"All psychiatric conditions have a trauma component by counse…\" is not what the item tests — Trauma-informed care recognizes that trauma is highly prevalent (ACE studies), often undisclosed without direct inquiry, and influences multiple pr"
      },
      {
        "id": "b",
        "text": "Trauma history determines whether a client can be seen in an outpatient setting as usually described",
        "isCorrect": false,
        "rationale": "\"Trauma history determines whether a client can be seen in an…\" is not what the item tests — Trauma-informed care recognizes that trauma is highly prevalent (ACE studies), often undisclosed without direct inquiry, and influences multiple pr"
      },
      {
        "id": "c",
        "text": "Trauma history is required for PTSD diagnosis at the intake stage as the reference material frames it",
        "isCorrect": false,
        "rationale": "\"Trauma history is required for PTSD diagnosis at the intake …\" is not what the item tests — Trauma-informed care recognizes that trauma is highly prevalent (ACE studies), often undisclosed without direct inquiry, and influences multiple pr"
      },
      {
        "id": "d",
        "text": "Trauma is highly prevalent and often not disclosed unless directly asked in a trauma-informed manner",
        "isCorrect": true,
        "rationale": "Trauma-informed care recognizes that trauma is highly prevalent (ACE studies), often undisclosed without direct inquiry, and influences multiple presenting concerns."
      }
    ]
  },

  {
    "id": "int009",
    "domain": "intake",
    "subdomain": "SubstanceUseHistory",
    "difficulty": "medium",
    "question": "When screening for substance use at intake, the CAGE questionnaire screens for:",
    "rationale": "CAGE: \"Have you ever felt you should Cut down? Have people Annoyed you by criticizing your drinking? Have you ever felt Guilty about your drinking? Have you ever had an Eye-opener (drink first thing in morning)?\" Two or more \"yes\" answers indicate probable alcohol use disorder. CAGE screens specifically for alcohol; AUDIT is broader.",
    "options": [
      {
        "id": "a",
        "text": "Alcohol use disorder using four questions about cutting down, annoyance, guilt, and eye-openers",
        "isCorrect": true,
        "rationale": "CAGE: \"Have you ever felt you should Cut down?"
      },
      {
        "id": "b",
        "text": "Cannabis, alcohol, gambling, and electronic device use here as the reference material frames it",
        "isCorrect": false,
        "rationale": "\"Cannabis, alcohol, gambling, and electronic device use here …\" is not what the item tests — CAGE: \"Have you ever felt you should Cut down?"
      },
      {
        "id": "c",
        "text": "Cocaine, alcohol, gambling, and eating disorders in practice as the reference material frames it",
        "isCorrect": false,
        "rationale": "\"Cocaine, alcohol, gambling, and eating disorders in practice…\" is not what the item tests — CAGE: \"Have you ever felt you should Cut down?"
      },
      {
        "id": "d",
        "text": "Any substance use through a comprehensive drug history here as the reference material frames it",
        "isCorrect": false,
        "rationale": "\"Any substance use through a comprehensive drug history here …\" is not what the item tests — CAGE: \"Have you ever felt you should Cut down?"
      }
    ]
  },

  {
    "id": "int010",
    "domain": "intake",
    "subdomain": "DevelopmentalHistory",
    "difficulty": "medium",
    "question": "Developmental history is MOST clinically relevant in intake when:",
    "rationale": "Developmental history — milestones, early attachment patterns, school functioning, early trauma — informs understanding of personality development, neurodevelopmental conditions (ADHD, ASD), and the origins of presenting patterns. It is relevant across the lifespan when current symptoms have developmental roots.",
    "options": [
      {
        "id": "a",
        "text": "The referring source specifically requests a developmental assessment as usually described in practice",
        "isCorrect": false,
        "rationale": "\"The referring source specifically requests a developmental a…\" is not what the item tests — Developmental history — milestones, early attachment patterns, school functioning, early trauma — informs understanding of personality development,"
      },
      {
        "id": "b",
        "text": "Symptoms began in childhood, neurodevelopmental conditions are suspected, or early patterns matter",
        "isCorrect": true,
        "rationale": "Developmental history — milestones, early attachment patterns, school functioning, early trauma — informs understanding of personality development, neurodevelopmental conditions (ADHD, ASD), and the origins of presenting patterns."
      },
      {
        "id": "c",
        "text": "The client presents with intellectual disability (as the reference material frames it now)",
        "isCorrect": false,
        "rationale": "\"The client presents with intellectual disability as the refe…\" is not what the item tests — Developmental history — milestones, early attachment patterns, school functioning, early trauma — informs understanding of personality development,"
      },
      {
        "id": "d",
        "text": "The client is under 18 years of age only (as the reference material typically frames it here)",
        "isCorrect": false,
        "rationale": "\"The client is under 18 years of age only as the reference ma…\" is not what the item tests — Developmental history — milestones, early attachment patterns, school functioning, early trauma — informs understanding of personality development,"
      }
    ]
  },

  {
    "id": "int011",
    "domain": "intake",
    "subdomain": "LegalHistory",
    "difficulty": "medium",
    "question": "Legal history gathered at intake is clinically relevant because:",
    "rationale": "Legal history provides context for understanding substance use patterns, trauma exposure (victimization or perpetration), systemic stressors, and current legal contingencies (court-mandated treatment, probation, custody). It informs realistic treatment planning and coordination with legal systems.",
    "options": [
      {
        "id": "a",
        "text": "It determines whether the client is eligible for services (as the reference material frames it now)",
        "isCorrect": false,
        "rationale": "\"It determines whether the client is eligible for services as…\" is not what the item tests — Legal history provides context for understanding substance use patterns, trauma exposure (victimization or perpetration), systemic stressors, and c"
      },
      {
        "id": "b",
        "text": "Counselors are required by law to report all criminal histories to authorities as usually described now",
        "isCorrect": false,
        "rationale": "\"Counselors are required by law to report all criminal histor…\" is not what the item tests — Legal history provides context for understanding substance use patterns, trauma exposure (victimization or perpetration), systemic stressors, and c"
      },
      {
        "id": "c",
        "text": "Legal involvement often intersects with mental health, substance use, and trauma — and may affect treatment",
        "isCorrect": true,
        "rationale": "Legal history provides context for understanding substance use patterns, trauma exposure (victimization or perpetration), systemic stressors, and current legal contingencies (court-mandated treatment, probation, custody)."
      },
      {
        "id": "d",
        "text": "Insurers require legal history disclosure before authorizing treatment as clinicians typically apply it now",
        "isCorrect": false,
        "rationale": "\"Insurers require legal history disclosure before authorizing…\" is not what the item tests — Legal history provides context for understanding substance use patterns, trauma exposure (victimization or perpetration), systemic stressors, and c"
      }
    ]
  },

  {
    "id": "int012",
    "domain": "intake",
    "subdomain": "CulturalFormulation",
    "difficulty": "hard",
    "question": "The DSM-5 Cultural Formulation Interview (CFI) helps clinicians:",
    "rationale": "DSM-5 CFI: a 16-question semi-structured interview exploring the client's cultural identity, cultural conceptualization of the problem (explanatory model), psychosocial stressors and supports in cultural context, and cultural features of the help-seeking relationship. It ensures culturally meaningful assessment.",
    "options": [
      {
        "id": "a",
        "text": "Adapt standardized assessment tools for culturally diverse populations during counseling as the reference material frames it",
        "isCorrect": false,
        "rationale": "\"Adapt standardized assessment tools for culturally diverse p…\" is not what the item tests — DSM-5 CFI: a 16-question semi-structured interview exploring the client's cultural identity, cultural conceptualization of the problem (explanatory"
      },
      {
        "id": "b",
        "text": "Determine which diagnoses apply across cultural contexts as clinicians typically apply it as the reference material frames it",
        "isCorrect": false,
        "rationale": "\"Determine which diagnoses apply across cultural contexts as …\" is not what the item tests — DSM-5 CFI: a 16-question semi-structured interview exploring the client's cultural identity, cultural conceptualization of the problem (explanatory"
      },
      {
        "id": "c",
        "text": "Identify culture-bound syndromes for accurate diagnosis as clinicians typically apply it as the reference material frames it",
        "isCorrect": false,
        "rationale": "\"Identify culture-bound syndromes for accurate diagnosis as c…\" is not what the item tests — DSM-5 CFI: a 16-question semi-structured interview exploring the client's cultural identity, cultural conceptualization of the problem (explanatory"
      },
      {
        "id": "d",
        "text": "Understand the client's cultural context, explanatory model, and how culture affects the illness experience and help-seeking",
        "isCorrect": true,
        "rationale": "DSM-5 CFI: a 16-question semi-structured interview exploring the client's cultural identity, cultural conceptualization of the problem (explanatory model), psychosocial stressors and supports in cultural context, and cul…"
      }
    ]
  },

  {
    "id": "int013",
    "domain": "intake",
    "subdomain": "ReligionSpirituality",
    "difficulty": "medium",
    "question": "Exploring religion and spirituality in a clinical intake is MOST appropriately approached by:",
    "rationale": "Religion and spirituality are dimensions of diversity and frequently serve as significant coping resources, sources of meaning, and potential stressors. ACA multicultural competencies support routinely, respectfully exploring their role — not imposing the counselor's views or avoiding the topic entirely.",
    "options": [
      {
        "id": "a",
        "text": "Routinely and respectfully inquiring about its role in the client's life, coping, and values",
        "isCorrect": true,
        "rationale": "Religion and spirituality are dimensions of diversity and frequently serve as significant coping resources, sources of meaning, and potential stressors."
      },
      {
        "id": "b",
        "text": "Including it only in assessments for clients who appear religiously observant in this domain",
        "isCorrect": false,
        "rationale": "\"Including it only in assessments for clients who appear reli…\" is not what the item tests — Religion and spirituality are dimensions of diversity and frequently serve as significant coping resources, sources of meaning, and potential stres"
      },
      {
        "id": "c",
        "text": "Referring all spiritual concerns to chaplains or clergy without clinical engagement at intake",
        "isCorrect": false,
        "rationale": "\"Referring all spiritual concerns to chaplains or clergy with…\" is not what the item tests — Religion and spirituality are dimensions of diversity and frequently serve as significant coping resources, sources of meaning, and potential stres"
      },
      {
        "id": "d",
        "text": "Avoiding the topic unless the client raises it, to respect separation of religion and clinical practice",
        "isCorrect": false,
        "rationale": "\"Avoiding the topic unless the client raises it, to respect s…\" is not what the item tests — Religion and spirituality are dimensions of diversity and frequently serve as significant coping resources, sources of meaning, and potential stres"
      }
    ]
  },

  {
    "id": "int014",
    "domain": "intake",
    "subdomain": "SuicideHistoryAtIntake",
    "difficulty": "medium",
    "question": "Obtaining a suicide and self-harm history at intake is important because:",
    "rationale": "History of suicidal behavior — attempts, hospitalizations, self-harm — is among the strongest known predictors of future suicidal behavior. Comprehensive intake must include this history to properly stratify risk and inform treatment intensity and safety planning from the outset.",
    "options": [
      {
        "id": "a",
        "text": "It determines whether the client can be seen in outpatient vs. inpatient settings",
        "isCorrect": false,
        "rationale": "\"It determines whether the client can be seen in outpatient v…\" is not what the item tests — History of suicidal behavior — attempts, hospitalizations, self-harm — is among the strongest known predictors of future suicidal behavior."
      },
      {
        "id": "b",
        "text": "Past suicidal behavior is one of the strongest predictors of future suicide risk",
        "isCorrect": true,
        "rationale": "History of suicidal behavior — attempts, hospitalizations, self-harm — is among the strongest known predictors of future suicidal behavior."
      },
      {
        "id": "c",
        "text": "It alerts the counselor to contact emergency services preemptively by counselors",
        "isCorrect": false,
        "rationale": "\"It alerts the counselor to contact emergency services preemp…\" is not what the item tests — History of suicidal behavior — attempts, hospitalizations, self-harm — is among the strongest known predictors of future suicidal behavior."
      },
      {
        "id": "d",
        "text": "It is required before any diagnosis can be assigned as clinicians typically apply it",
        "isCorrect": false,
        "rationale": "\"It is required before any diagnosis can be assigned as clini…\" is not what the item tests — History of suicidal behavior — attempts, hospitalizations, self-harm — is among the strongest known predictors of future suicidal behavior."
      }
    ]
  },

  {
    "id": "int015",
    "domain": "intake",
    "subdomain": "InvoluntaryClients",
    "difficulty": "hard",
    "question": "A counselor is conducting an intake with a court-mandated client who states, \"I don't want to be here.\" The MOST therapeutically effective response is:",
    "rationale": "With involuntary clients, acknowledging the mandated context honestly and non-defensively, validating their position, and exploring any personal stake they might have (\"Is there anything about your situation you'd want to change, apart from what the court requires?\") is more likely to build engagement than authority-based approaches.",
    "options": [
      {
        "id": "a",
        "text": "Contact the referring court to request motivational enhancement services at intake as the reference material frames it",
        "isCorrect": false,
        "rationale": "\"Contact the referring court to request motivational enhancem…\" is not what the item tests — With involuntary clients, acknowledging the mandated context honestly and non-defensively, validating their position, and exploring any personal st"
      },
      {
        "id": "b",
        "text": "Reschedule until the client is ready to engage voluntarily during a routine session as the reference material frames it",
        "isCorrect": false,
        "rationale": "\"Reschedule until the client is ready to engage voluntarily d…\" is not what the item tests — With involuntary clients, acknowledging the mandated context honestly and non-defensively, validating their position, and exploring any personal st"
      },
      {
        "id": "c",
        "text": "Acknowledge the mandated context while exploring what, if anything, the client might personally want from the process",
        "isCorrect": true,
        "rationale": "With involuntary clients, acknowledging the mandated context honestly and non-defensively, validating their position, and exploring any personal stake they might have (\"Is there anything about your situation you'd want t…"
      },
      {
        "id": "d",
        "text": "Remind the client of the legal consequences of non-participation during counseling as the reference material frames it",
        "isCorrect": false,
        "rationale": "\"Remind the client of the legal consequences of non-participa…\" is not what the item tests — With involuntary clients, acknowledging the mandated context honestly and non-defensively, validating their position, and exploring any personal st"
      }
    ]
  },

  {
    "id": "int016",
    "domain": "intake",
    "subdomain": "PreviousTreatment",
    "difficulty": "easy",
    "question": "Asking about previous counseling or therapy experiences at intake helps the counselor:",
    "rationale": "Previous therapy experience informs: what modalities and relationships have been helpful, what hasn't worked and why, how the client experiences and uses the therapeutic relationship, any prior ruptures or termination experiences, and what the client brings as expectations and preferences for current treatment.",
    "options": [
      {
        "id": "a",
        "text": "Determine whether referral back to the previous provider is more appropriate by counselors",
        "isCorrect": false,
        "rationale": "\"Determine whether referral back to the previous provider is …\" is not what the item tests — Previous therapy experience informs: what modalities and relationships have been helpful, what hasn't worked and why, how the client experiences an"
      },
      {
        "id": "b",
        "text": "Establish whether the client's expectations about therapy are realistic during counseling",
        "isCorrect": false,
        "rationale": "\"Establish whether the client's expectations about therapy ar…\" is not what the item tests — Previous therapy experience informs: what modalities and relationships have been helpful, what hasn't worked and why, how the client experiences an"
      },
      {
        "id": "c",
        "text": "Verify that the client has not been adequately treated elsewhere during a routine session",
        "isCorrect": false,
        "rationale": "\"Verify that the client has not been adequately treated elsew…\" is not what the item tests — Previous therapy experience informs: what modalities and relationships have been helpful, what hasn't worked and why, how the client experiences an"
      },
      {
        "id": "d",
        "text": "Understand what has helped, what has not, and any prior therapeutic relationship dynamics",
        "isCorrect": true,
        "rationale": "Previous therapy experience informs: what modalities and relationships have been helpful, what hasn't worked and why, how the client experiences and uses the therapeutic relationship, any prior ruptures or termination ex…"
      }
    ]
  },

  {
    "id": "int017",
    "domain": "intake",
    "subdomain": "InformedConsentIntake",
    "difficulty": "medium",
    "question": "Informed consent at intake should be treated as:",
    "rationale": "Informed consent is an ongoing process, not a one-time event. As treatment evolves, new modalities are introduced, circumstances change, or risks/benefits shift, informed consent must be revisited. ACA A.2.a: counselors continually review and update informed consent throughout treatment.",
    "options": [
      {
        "id": "a",
        "text": "An ongoing process that evolves as treatment progresses and circumstances change",
        "isCorrect": true,
        "rationale": "Informed consent is an ongoing process, not a one-time event."
      },
      {
        "id": "b",
        "text": "A one-time signed document completed before the first session at the intake stage",
        "isCorrect": false,
        "rationale": "\"A one-time signed document completed before the first sessio…\" is not what the item tests — Informed consent is an ongoing process, not a one-time event."
      },
      {
        "id": "c",
        "text": "A legal formality primarily protecting the counselor from liability by counselors",
        "isCorrect": false,
        "rationale": "\"A legal formality primarily protecting the counselor from li…\" is not what the item tests — Informed consent is an ongoing process, not a one-time event."
      },
      {
        "id": "d",
        "text": "Complete once all paperwork is signed and the client can recall the terms itself",
        "isCorrect": false,
        "rationale": "\"Complete once all paperwork is signed and the client can rec…\" is not what the item tests — Informed consent is an ongoing process, not a one-time event."
      }
    ]
  },

  {
    "id": "int018",
    "domain": "intake",
    "subdomain": "CollateralInformation",
    "difficulty": "medium",
    "question": "Obtaining collateral information (from family members, previous providers) at intake requires:",
    "rationale": "Releasing or receiving protected health information requires a valid HIPAA-compliant written authorization (ROI) from the client, with specific elements: who, what information, for what purpose, expiration date, and right to revoke. Exceptions exist for safety emergencies. Verbal consent alone is insufficient under HIPAA.",
    "options": [
      {
        "id": "a",
        "text": "Court authorization for any third-party contact as used as the reference material frames it",
        "isCorrect": false,
        "rationale": "\"Court authorization for any third-party contact as used as t…\" is not what the item tests — Releasing or receiving protected health information requires a valid HIPAA-compliant written authorization (ROI) from the client, with specific ele"
      },
      {
        "id": "b",
        "text": "A signed release of information from the client, except in specific emergency circumstances",
        "isCorrect": true,
        "rationale": "Releasing or receiving protected health information requires a valid HIPAA-compliant written authorization (ROI) from the client, with specific elements: who, what information, for what purpose, expiration date, and right to revoke."
      },
      {
        "id": "c",
        "text": "Only the client's verbal consent, which can be documented in the session note by counselors",
        "isCorrect": false,
        "rationale": "\"Only the client's verbal consent, which can be documented in…\" is not what the item tests — Releasing or receiving protected health information requires a valid HIPAA-compliant written authorization (ROI) from the client, with specific ele"
      },
      {
        "id": "d",
        "text": "Automatic inclusion in the intake process for all clients as the reference material frames it",
        "isCorrect": false,
        "rationale": "\"Automatic inclusion in the intake process for all clients as…\" is not what the item tests — Releasing or receiving protected health information requires a valid HIPAA-compliant written authorization (ROI) from the client, with specific ele"
      }
    ]
  },

  {
    "id": "int019",
    "domain": "intake",
    "subdomain": "FrameSetting",
    "difficulty": "medium",
    "question": "Establishing the \"frame\" at intake — explaining boundaries, structure, and expectations — primarily serves to:",
    "rationale": "The therapeutic frame (consistent time, place, roles, boundaries, and processes) creates predictability and safety — essential for clients to take the risks that therapy requires. It is not primarily about legal protection or authority but about creating conditions for trust and therapeutic work.",
    "options": [
      {
        "id": "a",
        "text": "Limit the scope of services to what the counselor is prepared to provide in this domain",
        "isCorrect": false,
        "rationale": "\"Limit the scope of services to what the counselor is prepare…\" is not what the item tests — The therapeutic frame (consistent time, place, roles, boundaries, and processes) creates predictability and safety — essential for clients to take "
      },
      {
        "id": "b",
        "text": "Establish the counselor's authority within the therapeutic relationship during counseling",
        "isCorrect": false,
        "rationale": "\"Establish the counselor's authority within the therapeutic r…\" is not what the item tests — The therapeutic frame (consistent time, place, roles, boundaries, and processes) creates predictability and safety — essential for clients to take "
      },
      {
        "id": "c",
        "text": "Create a predictable, safe therapeutic container that enables trust and productive work",
        "isCorrect": true,
        "rationale": "The therapeutic frame (consistent time, place, roles, boundaries, and processes) creates predictability and safety — essential for clients to take the risks that therapy requires."
      },
      {
        "id": "d",
        "text": "Protect the counselor legally by ensuring the client cannot later claim ignorance today",
        "isCorrect": false,
        "rationale": "\"Protect the counselor legally by ensuring the client cannot …\" is not what the item tests — The therapeutic frame (consistent time, place, roles, boundaries, and processes) creates predictability and safety — essential for clients to take "
      }
    ]
  },

  {
    "id": "int020",
    "domain": "intake",
    "subdomain": "StrengthsAtIntake",
    "difficulty": "medium",
    "question": "A strengths-based intake approach incorporates assessment of the client's strengths because:",
    "rationale": "Strengths-based assessment identifies client competencies, protective factors, support systems, and past successes as treatment resources. It provides a more complete picture than deficit-only assessment, reduces stigma, and aligns with recovery-oriented and solution-focused frameworks.",
    "options": [
      {
        "id": "a",
        "text": "It reduces the client's distress during the intake process itself as the reference material frames it now",
        "isCorrect": false,
        "rationale": "\"It reduces the client's distress during the intake process i…\" is not what the item tests — Strengths-based assessment identifies client competencies, protective factors, support systems, and past successes as treatment resources."
      },
      {
        "id": "b",
        "text": "Insurance companies require documentation of client strengths now as the reference material frames it",
        "isCorrect": false,
        "rationale": "\"Insurance companies require documentation of client strength…\" is not what the item tests — Strengths-based assessment identifies client competencies, protective factors, support systems, and past successes as treatment resources."
      },
      {
        "id": "c",
        "text": "DSM-5 requires strengths documentation alongside diagnosis itself as the reference material frames it",
        "isCorrect": false,
        "rationale": "\"DSM-5 requires strengths documentation alongside diagnosis i…\" is not what the item tests — Strengths-based assessment identifies client competencies, protective factors, support systems, and past successes as treatment resources."
      },
      {
        "id": "d",
        "text": "Strengths serve as resources for treatment and recovery and counterbalance deficit-focused assessment",
        "isCorrect": true,
        "rationale": "Strengths-based assessment identifies client competencies, protective factors, support systems, and past successes as treatment resources."
      }
    ]
  },

  {
    "id": "asx001",
    "domain": "assessment",
    "subdomain": "ScreeningTools",
    "difficulty": "easy",
    "question": "The PHQ-9 is a validated screening tool used to assess:",
    "rationale": "PHQ-9 (Patient Health Questionnaire-9): a 9-item validated measure of depression severity based on DSM criteria. Scores range from 0–27; cutoffs indicate mild, moderate, moderately severe, and severe depression. Also used to track treatment response. Widely used in primary care and mental health settings.",
    "options": [
      {
        "id": "a",
        "text": "Depression severity and change over time",
        "isCorrect": true,
        "rationale": "PHQ-9 (Patient Health Questionnaire-9): a 9-item validated measure of depression severity based on DSM criteria."
      },
      {
        "id": "b",
        "text": "Psychosis risk in primary care settings now",
        "isCorrect": false,
        "rationale": "\"Psychosis risk in primary care settings now\" is not what the item tests — PHQ-9 (Patient Health Questionnaire-9): a 9-item validated measure of depression severity based on DSM criteria."
      },
      {
        "id": "c",
        "text": "Generalized anxiety disorder severity now",
        "isCorrect": false,
        "rationale": "\"Generalized anxiety disorder severity now\" is not what the item tests — PHQ-9 (Patient Health Questionnaire-9): a 9-item validated measure of depression severity based on DSM criteria."
      },
      {
        "id": "d",
        "text": "PTSD symptom burden in trauma survivors now",
        "isCorrect": false,
        "rationale": "\"PTSD symptom burden in trauma survivors now\" is not what the item tests — PHQ-9 (Patient Health Questionnaire-9): a 9-item validated measure of depression severity based on DSM criteria."
      }
    ]
  },

  {
    "id": "asx002",
    "domain": "assessment",
    "subdomain": "ScreeningTools",
    "difficulty": "easy",
    "question": "The GAD-7 is designed to screen for and measure the severity of:",
    "rationale": "GAD-7 (Generalized Anxiety Disorder 7-item scale): validated 7-item screening tool for GAD severity. A score of 10+ suggests probable GAD and warrants further evaluation. Also shows good sensitivity/specificity for other anxiety disorders as a general screen, though developed specifically for GAD.",
    "options": [
      {
        "id": "a",
        "text": "Social anxiety disorder specifically",
        "isCorrect": false,
        "rationale": "\"Social anxiety disorder specifically\" is not what the item tests — GAD-7 (Generalized Anxiety Disorder 7-item scale): validated 7-item screening tool for GAD severity."
      },
      {
        "id": "b",
        "text": "Generalized anxiety disorder severity",
        "isCorrect": true,
        "rationale": "GAD-7 (Generalized Anxiety Disorder 7-item scale): validated 7-item screening tool for GAD severity."
      },
      {
        "id": "c",
        "text": "All anxiety disorders across the spectrum",
        "isCorrect": false,
        "rationale": "\"All anxiety disorders across the spectrum\" is not what the item tests — GAD-7 (Generalized Anxiety Disorder 7-item scale): validated 7-item screening tool for GAD severity."
      },
      {
        "id": "d",
        "text": "Panic disorder symptom frequency itself",
        "isCorrect": false,
        "rationale": "\"Panic disorder symptom frequency\" is not what the item tests — GAD-7 (Generalized Anxiety Disorder 7-item scale): validated 7-item screening tool for GAD severity."
      }
    ]
  },

  {
    "id": "asx003",
    "domain": "assessment",
    "subdomain": "TraumaAssessment",
    "difficulty": "medium",
    "question": "The PCL-5 (PTSD Checklist for DSM-5) is used clinically to:",
    "rationale": "PCL-5: a 20-item validated self-report measure corresponding to DSM-5 PTSD symptom clusters. It screens for probable PTSD (cutoff ~31–33), monitors treatment response, and can provisionally assess diagnostic criteria — but does not replace a full structured diagnostic interview.",
    "options": [
      {
        "id": "a",
        "text": "Assess trauma history and number of traumatic events as clinicians typically apply it",
        "isCorrect": false,
        "rationale": "\"Assess trauma history and number of traumatic events as clin…\" is not what the item tests — PCL-5: a 20-item validated self-report measure corresponding to DSM-5 PTSD symptom clusters."
      },
      {
        "id": "b",
        "text": "Diagnose PTSD definitively without clinical interview as clinicians typically apply it",
        "isCorrect": false,
        "rationale": "\"Diagnose PTSD definitively without clinical interview as cli…\" is not what the item tests — PCL-5: a 20-item validated self-report measure corresponding to DSM-5 PTSD symptom clusters."
      },
      {
        "id": "c",
        "text": "Screen for PTSD, monitor symptom change, and provisionally assess symptom severity",
        "isCorrect": true,
        "rationale": "PCL-5: a 20-item validated self-report measure corresponding to DSM-5 PTSD symptom clusters."
      },
      {
        "id": "d",
        "text": "Measure the impact of trauma on interpersonal functioning only at the intake stage",
        "isCorrect": false,
        "rationale": "\"Measure the impact of trauma on interpersonal functioning on…\" is not what the item tests — PCL-5: a 20-item validated self-report measure corresponding to DSM-5 PTSD symptom clusters."
      }
    ]
  },

  {
    "id": "asx004",
    "domain": "assessment",
    "subdomain": "SubstanceAssessment",
    "difficulty": "medium",
    "question": "The AUDIT (Alcohol Use Disorders Identification Test) was developed by the WHO to:",
    "rationale": "AUDIT: a 10-item WHO-developed screener sensitive to the full spectrum from hazardous drinking through alcohol dependence. An 8+ score indicates hazardous or harmful use. Designed to identify problems before dependence develops, making it valuable for early intervention.",
    "options": [
      {
        "id": "a",
        "text": "Monitor alcohol abstinence in patients in recovery as used as the reference material frames it now",
        "isCorrect": false,
        "rationale": "\"Monitor alcohol abstinence in patients in recovery as used a…\" is not what the item tests — AUDIT: a 10-item WHO-developed screener sensitive to the full spectrum from hazardous drinking through alcohol dependence."
      },
      {
        "id": "b",
        "text": "Assess the severity of withdrawal symptoms in detoxification settings during a routine session",
        "isCorrect": false,
        "rationale": "\"Assess the severity of withdrawal symptoms in detoxification…\" is not what the item tests — AUDIT: a 10-item WHO-developed screener sensitive to the full spectrum from hazardous drinking through alcohol dependence."
      },
      {
        "id": "c",
        "text": "Diagnose alcohol use disorder in clinical populations here as the reference material frames it",
        "isCorrect": false,
        "rationale": "\"Diagnose alcohol use disorder in clinical populations here a…\" is not what the item tests — AUDIT: a 10-item WHO-developed screener sensitive to the full spectrum from hazardous drinking through alcohol dependence."
      },
      {
        "id": "d",
        "text": "Screen for hazardous, harmful, and dependent alcohol use in primary care and clinical settings",
        "isCorrect": true,
        "rationale": "AUDIT: a 10-item WHO-developed screener sensitive to the full spectrum from hazardous drinking through alcohol dependence."
      }
    ]
  },

  {
    "id": "asx005",
    "domain": "assessment",
    "subdomain": "PersonalityAssessment",
    "difficulty": "medium",
    "question": "The MMPI-2 (Minnesota Multiphasic Personality Inventory-2) is BEST described as:",
    "rationale": "MMPI-2: an objective (self-report, empirically keyed) measure with clinical scales (depression, schizophrenia, psychopathic deviate, etc.), validity scales (L, F, K — detecting exaggeration, defensiveness), and content/supplementary scales. One of the most widely researched psychopathology measures.",
    "options": [
      {
        "id": "a",
        "text": "An objective, empirically developed self-report measure of psychopathology and personality",
        "isCorrect": true,
        "rationale": "MMPI-2: an objective (self-report, empirically keyed) measure with clinical scales (depression, schizophrenia, psychopathic deviate, etc.), validity scales (L, F, K — detecting exaggeration, defensiveness), and content/supplementary scales."
      },
      {
        "id": "b",
        "text": "A neuropsychological battery assessing cognitive and personality functioning by counselors",
        "isCorrect": false,
        "rationale": "\"A neuropsychological battery assessing cognitive and persona…\" is not what the item tests — MMPI-2: an objective (self-report, empirically keyed) measure with clinical scales (depression, schizophrenia, psychopathic deviate, etc.), validit"
      },
      {
        "id": "c",
        "text": "A clinician-rated scale for assessing personality disorder severity during a routine session",
        "isCorrect": false,
        "rationale": "\"A clinician-rated scale for assessing personality disorder s…\" is not what the item tests — MMPI-2: an objective (self-report, empirically keyed) measure with clinical scales (depression, schizophrenia, psychopathic deviate, etc.), validit"
      },
      {
        "id": "d",
        "text": "A projective measure assessing unconscious personality dynamics at the level the item tests",
        "isCorrect": false,
        "rationale": "\"A projective measure assessing unconscious personality dynam…\" is not what the item tests — MMPI-2: an objective (self-report, empirically keyed) measure with clinical scales (depression, schizophrenia, psychopathic deviate, etc.), validit"
      }
    ]
  },

  {
    "id": "asx006",
    "domain": "assessment",
    "subdomain": "PersonalityAssessment",
    "difficulty": "hard",
    "question": "The MCMI-IV (Millon Clinical Multiaxial Inventory-IV) differs from the MMPI-2 primarily in that it:",
    "rationale": "MCMI-IV: theoretically based on Millon's evolutionary-biosocial personality theory and closely aligned with DSM-5 personality disorder criteria. Designed specifically for clinical populations. MMPI-2 was empirically derived without a single guiding personality theory. Both are objective self-report instruments.",
    "options": [
      {
        "id": "a",
        "text": "Is designed for use with non-clinical, community populations at intake as the reference material frames it",
        "isCorrect": false,
        "rationale": "\"Is designed for use with non-clinical, community populations…\" is not what the item tests — MCMI-IV: theoretically based on Millon's evolutionary-biosocial personality theory and closely aligned with DSM-5 personality disorder criteria."
      },
      {
        "id": "b",
        "text": "Is theoretically grounded in Millon's biosocial theory and aligned with DSM personality disorder criteria",
        "isCorrect": true,
        "rationale": "MCMI-IV: theoretically based on Millon's evolutionary-biosocial personality theory and closely aligned with DSM-5 personality disorder criteria."
      },
      {
        "id": "c",
        "text": "Is shorter and used for screening, while MMPI-2 is used for diagnosis as the reference material frames it",
        "isCorrect": false,
        "rationale": "\"Is shorter and used for screening, while MMPI-2 is used for …\" is not what the item tests — MCMI-IV: theoretically based on Millon's evolutionary-biosocial personality theory and closely aligned with DSM-5 personality disorder criteria."
      },
      {
        "id": "d",
        "text": "Is a projective measure rather than an objective self-report at intake as the reference material frames it",
        "isCorrect": false,
        "rationale": "\"Is a projective measure rather than an objective self-report…\" is not what the item tests — MCMI-IV: theoretically based on Millon's evolutionary-biosocial personality theory and closely aligned with DSM-5 personality disorder criteria."
      }
    ]
  },

  {
    "id": "asx007",
    "domain": "assessment",
    "subdomain": "ProjectiveAssessment",
    "difficulty": "medium",
    "question": "The Rorschach Inkblot Method is classified as a projective assessment because:",
    "rationale": "Projective measures present ambiguous stimuli to elicit responses that are thought to reveal aspects of the individual's perceptual and cognitive organization, emotional processing, and interpersonal representations. The Rorschach is scored via standardized systems (e.g., Exner's Comprehensive System, R-PAS) to reduce subjectivity.",
    "options": [
      {
        "id": "a",
        "text": "Clients project their responses onto a screen during administration now as clinicians typically apply it",
        "isCorrect": false,
        "rationale": "\"Clients project their responses onto a screen during adminis…\" is not what the item tests — Projective measures present ambiguous stimuli to elicit responses that are thought to reveal aspects of the individual's perceptual and cognitive o"
      },
      {
        "id": "b",
        "text": "It was developed by projection onto a psychodynamic theoretical framework as clinicians typically apply it",
        "isCorrect": false,
        "rationale": "\"It was developed by projection onto a psychodynamic theoreti…\" is not what the item tests — Projective measures present ambiguous stimuli to elicit responses that are thought to reveal aspects of the individual's perceptual and cognitive o"
      },
      {
        "id": "c",
        "text": "Responses to ambiguous stimuli are thought to reflect the individual's internal psychological structures",
        "isCorrect": true,
        "rationale": "Projective measures present ambiguous stimuli to elicit responses that are thought to reveal aspects of the individual's perceptual and cognitive organization, emotional processing, and interpersonal representations."
      },
      {
        "id": "d",
        "text": "It directly measures unconscious conflicts through symbolic analysis as the reference material frames it",
        "isCorrect": false,
        "rationale": "\"It directly measures unconscious conflicts through symbolic …\" is not what the item tests — Projective measures present ambiguous stimuli to elicit responses that are thought to reveal aspects of the individual's perceptual and cognitive o"
      }
    ]
  },

  {
    "id": "asx008",
    "domain": "assessment",
    "subdomain": "CognitiveAssessment",
    "difficulty": "medium",
    "question": "The Wechsler Intelligence Scales (WAIS-IV, WISC-V) measure intelligence by producing:",
    "rationale": "Wechsler scales yield: Full Scale IQ (global cognitive ability) and Index scores — Verbal Comprehension, Visual Spatial (or Perceptual Reasoning), Fluid Reasoning, Working Memory, and Processing Speed. This profile approach identifies cognitive strengths and weaknesses more clinically useful than a single IQ score.",
    "options": [
      {
        "id": "a",
        "text": "Neurological integrity through pattern analysis as clinicians typically apply it as the reference material frames it",
        "isCorrect": false,
        "rationale": "\"Neurological integrity through pattern analysis as clinician…\" is not what the item tests — Wechsler scales yield: Full Scale IQ (global cognitive ability) and Index scores — Verbal Comprehension, Visual Spatial (or Perceptual Reasoning), "
      },
      {
        "id": "b",
        "text": "A single general intelligence quotient (g factor) only during a routine session as clinicians typically apply it",
        "isCorrect": false,
        "rationale": "\"A single general intelligence quotient (g factor) only durin…\" is not what the item tests — Wechsler scales yield: Full Scale IQ (global cognitive ability) and Index scores — Verbal Comprehension, Visual Spatial (or Perceptual Reasoning), "
      },
      {
        "id": "c",
        "text": "Academic achievement in reading, writing, and mathematics at the intake stage as the reference material frames it",
        "isCorrect": false,
        "rationale": "\"Academic achievement in reading, writing, and mathematics at…\" is not what the item tests — Wechsler scales yield: Full Scale IQ (global cognitive ability) and Index scores — Verbal Comprehension, Visual Spatial (or Perceptual Reasoning), "
      },
      {
        "id": "d",
        "text": "A Full Scale IQ and index scores across cognitive domains (verbal, perceptual, working memory, processing speed)",
        "isCorrect": true,
        "rationale": "Wechsler scales yield: Full Scale IQ (global cognitive ability) and Index scores — Verbal Comprehension, Visual Spatial (or Perceptual Reasoning), Fluid Reasoning, Working Memory, and Processing Speed."
      }
    ]
  },

  {
    "id": "asx009",
    "domain": "assessment",
    "subdomain": "Psychometrics",
    "difficulty": "medium",
    "question": "\"Reliability\" in psychological assessment refers to:",
    "rationale": "Reliability = consistency of measurement. Types: test-retest (consistent over time), internal consistency (items correlate with each other), inter-rater (different raters agree). Reliability is necessary but not sufficient for validity — a measure can be reliably measuring the wrong thing.",
    "options": [
      {
        "id": "a",
        "text": "The consistency of measurement across time, raters, or items",
        "isCorrect": true,
        "rationale": "Reliability = consistency of measurement."
      },
      {
        "id": "b",
        "text": "Whether an assessment has been validated in the population being tested",
        "isCorrect": false,
        "rationale": "\"Whether an assessment has been validated in the population b…\" is not what the item tests — Reliability = consistency of measurement."
      },
      {
        "id": "c",
        "text": "The accuracy of the assessment's norms for the local population",
        "isCorrect": false,
        "rationale": "\"The accuracy of the assessment's norms for the local populat…\" is not what the item tests — Reliability = consistency of measurement."
      },
      {
        "id": "d",
        "text": "Whether an assessment measures what it is intended to measure",
        "isCorrect": false,
        "rationale": "\"Whether an assessment measures what it is intended to measur…\" is not what the item tests — Reliability = consistency of measurement."
      }
    ]
  },

  {
    "id": "asx010",
    "domain": "assessment",
    "subdomain": "Psychometrics",
    "difficulty": "medium",
    "question": "\"Construct validity\" refers to whether an assessment:",
    "rationale": "Construct validity: evidence that the assessment measures the theoretical construct it claims to measure (e.g., does the depression scale actually measure depression, not general distress?). Assessed through convergent validity (correlates with other depression measures) and discriminant validity (does not correlate with unrelated constructs).",
    "options": [
      {
        "id": "a",
        "text": "Produces consistent results when administered to the same person twice",
        "isCorrect": false,
        "rationale": "\"Produces consistent results when administered to the same pe…\" is not what the item tests — Construct validity: evidence that the assessment measures the theoretical construct it claims to measure (e.g., does the depression scale actually "
      },
      {
        "id": "b",
        "text": "Measures the theoretical construct it is intended to measure",
        "isCorrect": true,
        "rationale": "Construct validity: evidence that the assessment measures the theoretical construct it claims to measure (e.g., does the depression scale actually measure depression, not general distress?)."
      },
      {
        "id": "c",
        "text": "Adequately represents all aspects of the content domain being measured",
        "isCorrect": false,
        "rationale": "\"Adequately represents all aspects of the content domain bein…\" is not what the item tests — Construct validity: evidence that the assessment measures the theoretical construct it claims to measure (e.g., does the depression scale actually "
      },
      {
        "id": "d",
        "text": "Predicts an important future outcome (e.g., treatment response)",
        "isCorrect": false,
        "rationale": "\"Predicts an important future outcome (e.g., treatment respon…\" is not what the item tests — Construct validity: evidence that the assessment measures the theoretical construct it claims to measure (e.g., does the depression scale actually "
      }
    ]
  },

  {
    "id": "asx011",
    "domain": "assessment",
    "subdomain": "Psychometrics",
    "difficulty": "hard",
    "question": "A test with high sensitivity but low specificity means:",
    "rationale": "Sensitivity = ability to correctly identify those WITH the condition (true positive rate). High sensitivity = few false negatives. Specificity = ability to correctly identify those WITHOUT the condition. Low specificity = many false positives. High sensitivity/low specificity = good for screening (don't miss cases) but produces overidentification.",
    "options": [
      {
        "id": "a",
        "text": "It correctly identifies true negatives but misses many true positives as used",
        "isCorrect": false,
        "rationale": "\"It correctly identifies true negatives but misses many true …\" is not what the item tests — Sensitivity = ability to correctly identify those WITH the condition (true positive rate)."
      },
      {
        "id": "b",
        "text": "It produces consistent results but does not measure the target construct here",
        "isCorrect": false,
        "rationale": "\"It produces consistent results but does not measure the targ…\" is not what the item tests — Sensitivity = ability to correctly identify those WITH the condition (true positive rate)."
      },
      {
        "id": "c",
        "text": "It correctly identifies true positives but also produces many false positives",
        "isCorrect": true,
        "rationale": "Sensitivity = ability to correctly identify those WITH the condition (true positive rate)."
      },
      {
        "id": "d",
        "text": "It is appropriate for high-stakes diagnostic decisions during a routine session",
        "isCorrect": false,
        "rationale": "\"It is appropriate for high-stakes diagnostic decisions durin…\" is not what the item tests — Sensitivity = ability to correctly identify those WITH the condition (true positive rate)."
      }
    ]
  },

  {
    "id": "asx012",
    "domain": "assessment",
    "subdomain": "Psychometrics",
    "difficulty": "medium",
    "question": "Norm-referenced assessment interprets a client's score by:",
    "rationale": "Norm-referenced assessment locates a score in relation to a standardization sample (e.g., \"above the 85th percentile for adults aged 30–40\"). Criterion-referenced assessment evaluates performance against an absolute standard (e.g., \"met the cutoff for clinical depression\"). Most standardized personality and cognitive tests are norm-referenced.",
    "options": [
      {
        "id": "a",
        "text": "Comparing it to a predefined standard of mastery or criterion in practice",
        "isCorrect": false,
        "rationale": "\"Comparing it to a predefined standard of mastery or criterio…\" is not what the item tests — Norm-referenced assessment locates a score in relation to a standardization sample (e.g., \"above the 85th percentile for adults aged 30–40\")."
      },
      {
        "id": "b",
        "text": "Evaluating it against the client's own previous performance by counselors",
        "isCorrect": false,
        "rationale": "\"Evaluating it against the client's own previous performance …\" is not what the item tests — Norm-referenced assessment locates a score in relation to a standardization sample (e.g., \"above the 85th percentile for adults aged 30–40\")."
      },
      {
        "id": "c",
        "text": "Using clinical cutoffs developed through expert consensus in this domain",
        "isCorrect": false,
        "rationale": "\"Using clinical cutoffs developed through expert consensus in…\" is not what the item tests — Norm-referenced assessment locates a score in relation to a standardization sample (e.g., \"above the 85th percentile for adults aged 30–40\")."
      },
      {
        "id": "d",
        "text": "Comparing it to the performance of a relevant normative comparison group",
        "isCorrect": true,
        "rationale": "Norm-referenced assessment locates a score in relation to a standardization sample (e.g., \"above the 85th percentile for adults aged 30–40\")."
      }
    ]
  },

  {
    "id": "asx013",
    "domain": "assessment",
    "subdomain": "RiskAssessment",
    "difficulty": "medium",
    "question": "Static risk factors in suicide risk assessment are significant because:",
    "rationale": "Static risk factors (prior attempts, history of trauma, demographic factors) are fixed and establish baseline risk. Dynamic risk factors (current hopelessness, substance use, access to means, social isolation) are modifiable and more predictive of imminent risk. Both inform the comprehensive risk assessment, but dynamic factors are the targets of intervention.",
    "options": [
      {
        "id": "a",
        "text": "They are immutable historical factors that establish baseline risk but cannot be reduced",
        "isCorrect": true,
        "rationale": "Static risk factors (prior attempts, history of trauma, demographic factors) are fixed and establish baseline risk."
      },
      {
        "id": "b",
        "text": "They only apply to clients with prior hospitalization histories during a routine session",
        "isCorrect": false,
        "rationale": "\"They only apply to clients with prior hospitalization histor…\" is not what the item tests — Static risk factors (prior attempts, history of trauma, demographic factors) are fixed and establish baseline risk."
      },
      {
        "id": "c",
        "text": "They are more important than dynamic factors in predicting imminent suicide by counselors",
        "isCorrect": false,
        "rationale": "\"They are more important than dynamic factors in predicting i…\" is not what the item tests — Static risk factors (prior attempts, history of trauma, demographic factors) are fixed and establish baseline risk."
      },
      {
        "id": "d",
        "text": "They change with treatment and indicate areas for intervention in the outpatient setting",
        "isCorrect": false,
        "rationale": "\"They change with treatment and indicate areas for interventi…\" is not what the item tests — Static risk factors (prior attempts, history of trauma, demographic factors) are fixed and establish baseline risk."
      }
    ]
  },

  {
    "id": "asx014",
    "domain": "assessment",
    "subdomain": "RiskAssessment",
    "difficulty": "hard",
    "question": "\"Hopelessness\" is particularly significant in suicide risk assessment because:",
    "rationale": "Beck's hopelessness research (Beck Hopelessness Scale): hopelessness — the belief that the future holds nothing positive — is a stronger predictor of suicidal intent and completion than depression severity. A client can be depressed without hopelessness (more treatable) or hopeless without severe depression (highest risk).",
    "options": [
      {
        "id": "a",
        "text": "It indicates the client lacks the protective factors needed for outpatient safety at the intake stage",
        "isCorrect": false,
        "rationale": "\"It indicates the client lacks the protective factors needed …\" is not what the item tests — Beck's hopelessness research (Beck Hopelessness Scale): hopelessness — the belief that the future holds nothing positive — is a stronger predictor "
      },
      {
        "id": "b",
        "text": "Research consistently identifies it as a stronger predictor of suicide than depression severity alone",
        "isCorrect": true,
        "rationale": "Beck's hopelessness research (Beck Hopelessness Scale): hopelessness — the belief that the future holds nothing positive — is a stronger predictor of suicidal intent and completion than depression severity."
      },
      {
        "id": "c",
        "text": "Clients who express hopelessness are typically in immediate danger as the reference material frames it",
        "isCorrect": false,
        "rationale": "\"Clients who express hopelessness are typically in immediate …\" is not what the item tests — Beck's hopelessness research (Beck Hopelessness Scale): hopelessness — the belief that the future holds nothing positive — is a stronger predictor "
      },
      {
        "id": "d",
        "text": "It is the primary symptom of Major Depressive Disorder in practice as the reference material frames it",
        "isCorrect": false,
        "rationale": "\"It is the primary symptom of Major Depressive Disorder in pr…\" is not what the item tests — Beck's hopelessness research (Beck Hopelessness Scale): hopelessness — the belief that the future holds nothing positive — is a stronger predictor "
      }
    ]
  },

  {
    "id": "asx015",
    "domain": "assessment",
    "subdomain": "AssessmentBias",
    "difficulty": "hard",
    "question": "Cultural bias in standardized assessment most commonly occurs when:",
    "rationale": "A normative sample that underrepresents or excludes specific cultural groups leads to scores being interpreted against a reference group that does not reflect the client's experience — inflating apparent pathology. Item bias (culturally unfamiliar content), construct bias (culture-specific constructs), and method bias (test-taking familiarity) also contribute.",
    "options": [
      {
        "id": "a",
        "text": "Counselors administer assessments without proper training as usually described",
        "isCorrect": false,
        "rationale": "\"Counselors administer assessments without proper training as…\" is not what the item tests — A normative sample that underrepresents or excludes specific cultural groups leads to scores being interpreted against a reference group that does "
      },
      {
        "id": "b",
        "text": "The client is unfamiliar with standardized testing formats at the intake stage",
        "isCorrect": false,
        "rationale": "\"The client is unfamiliar with standardized testing formats a…\" is not what the item tests — A normative sample that underrepresents or excludes specific cultural groups leads to scores being interpreted against a reference group that does "
      },
      {
        "id": "c",
        "text": "The normative sample does not adequately represent the client's cultural group",
        "isCorrect": true,
        "rationale": "A normative sample that underrepresents or excludes specific cultural groups leads to scores being interpreted against a reference group that does not reflect the client's experience — inflating apparent pathology."
      },
      {
        "id": "d",
        "text": "Assessments are translated without back-translation validation during counseling",
        "isCorrect": false,
        "rationale": "\"Assessments are translated without back-translation validati…\" is not what the item tests — A normative sample that underrepresents or excludes specific cultural groups leads to scores being interpreted against a reference group that does "
      }
    ]
  },

  {
    "id": "asx016",
    "domain": "assessment",
    "subdomain": "AssessmentFeedback",
    "difficulty": "medium",
    "question": "Providing assessment feedback to clients (therapeutic assessment) is recommended because:",
    "rationale": "Therapeutic Assessment (Finn): systematically sharing assessment results with clients in an empathic, collaborative manner — asking the client's own questions — can produce significant therapeutic benefits: increased self-understanding, reduced stigma, improved treatment engagement, and even symptom reduction.",
    "options": [
      {
        "id": "a",
        "text": "It ensures clients understand and accept their diagnoses now as the reference material frames it",
        "isCorrect": false,
        "rationale": "\"It ensures clients understand and accept their diagnoses now…\" is not what the item tests — Therapeutic Assessment (Finn): systematically sharing assessment results with clients in an empathic, collaborative manner — asking the client's ow"
      },
      {
        "id": "b",
        "text": "It increases billing justification for the assessment services rendered during a routine session",
        "isCorrect": false,
        "rationale": "\"It increases billing justification for the assessment servic…\" is not what the item tests — Therapeutic Assessment (Finn): systematically sharing assessment results with clients in an empathic, collaborative manner — asking the client's ow"
      },
      {
        "id": "c",
        "text": "Clients have a legal right to know their scores under HIPAA as the reference material frames it",
        "isCorrect": false,
        "rationale": "\"Clients have a legal right to know their scores under HIPAA …\" is not what the item tests — Therapeutic Assessment (Finn): systematically sharing assessment results with clients in an empathic, collaborative manner — asking the client's ow"
      },
      {
        "id": "d",
        "text": "Collaborative interpretation of results can itself produce therapeutic change and reduce shame",
        "isCorrect": true,
        "rationale": "Therapeutic Assessment (Finn): systematically sharing assessment results with clients in an empathic, collaborative manner — asking the client's own questions — can produce significant therapeutic benefits: increased sel…"
      }
    ]
  },

  {
    "id": "asx017",
    "domain": "assessment",
    "subdomain": "InformedConsentAssessment",
    "difficulty": "medium",
    "question": "Before administering a psychological assessment, informed consent must include:",
    "rationale": "Assessment informed consent (ACA E.3.a): clients must understand why they are being assessed, how results will be used, who will receive results (including referring parties), and their right to ask questions. This ensures autonomous decision-making about participation in the assessment process.",
    "options": [
      {
        "id": "a",
        "text": "The purpose of assessment, how results will be used, and who will have access to them",
        "isCorrect": true,
        "rationale": "Assessment informed consent (ACA E.3.a): clients must understand why they are being assessed, how results will be used, who will receive results (including referring parties), and their right to ask questions."
      },
      {
        "id": "b",
        "text": "A guarantee of assessment confidentiality under HIPAA as clinicians typically apply it",
        "isCorrect": false,
        "rationale": "\"A guarantee of assessment confidentiality under HIPAA as cli…\" is not what the item tests — Assessment informed consent (ACA E.3.a): clients must understand why they are being assessed, how results will be used, who will receive results (i"
      },
      {
        "id": "c",
        "text": "A complete list of all assessment instruments and their psychometric properties today",
        "isCorrect": false,
        "rationale": "\"A complete list of all assessment instruments and their psyc…\" is not what the item tests — Assessment informed consent (ACA E.3.a): clients must understand why they are being assessed, how results will be used, who will receive results (i"
      },
      {
        "id": "d",
        "text": "The counselor's credentials and training in the specific assessment being used itself",
        "isCorrect": false,
        "rationale": "\"The counselor's credentials and training in the specific ass…\" is not what the item tests — Assessment informed consent (ACA E.3.a): clients must understand why they are being assessed, how results will be used, who will receive results (i"
      }
    ]
  },

  {
    "id": "asx018",
    "domain": "assessment",
    "subdomain": "ClinicalInterview",
    "difficulty": "medium",
    "question": "Structured clinical interviews (e.g., SCID-5) differ from unstructured clinical interviews in that they:",
    "rationale": "Structured and semi-structured clinical interviews (SCID-5, MINI) systematically cover DSM criteria with standardized questions, reducing clinician bias and improving diagnostic reliability and agreement. They sacrifice some clinical flexibility but significantly improve diagnostic consistency — essential for research and high-stakes clinical decisions.",
    "options": [
      {
        "id": "a",
        "text": "Are administered by computer rather than a clinician as the reference material frames it now",
        "isCorrect": false,
        "rationale": "\"Are administered by computer rather than a clinician as the …\" is not what the item tests — Structured and semi-structured clinical interviews (SCID-5, MINI) systematically cover DSM criteria with standardized questions, reducing clinician"
      },
      {
        "id": "b",
        "text": "Use standardized questions following a prescribed order to reduce diagnostic variability",
        "isCorrect": true,
        "rationale": "Structured and semi-structured clinical interviews (SCID-5, MINI) systematically cover DSM criteria with standardized questions, reducing clinician bias and improving diagnostic reliability and agreement."
      },
      {
        "id": "c",
        "text": "Are considered less clinically rich but more legally defensible during a routine session",
        "isCorrect": false,
        "rationale": "\"Are considered less clinically rich but more legally defensi…\" is not what the item tests — Structured and semi-structured clinical interviews (SCID-5, MINI) systematically cover DSM criteria with standardized questions, reducing clinician"
      },
      {
        "id": "d",
        "text": "Cannot be used to assess complex presentations with multiple comorbidities by counselors",
        "isCorrect": false,
        "rationale": "\"Cannot be used to assess complex presentations with multiple…\" is not what the item tests — Structured and semi-structured clinical interviews (SCID-5, MINI) systematically cover DSM criteria with standardized questions, reducing clinician"
      }
    ]
  },

  {
    "id": "asx019",
    "domain": "assessment",
    "subdomain": "BehavioralAssessment",
    "difficulty": "medium",
    "question": "A functional behavioral assessment (FBA) identifies:",
    "rationale": "FBA (ABC analysis): Antecedents (what precedes/triggers the behavior), Behavior (specific observable definition), Consequences (what follows the behavior and maintains it). Identifying the function of behavior (attention, escape, sensory, access) directly informs intervention design.",
    "options": [
      {
        "id": "a",
        "text": "The frequency and intensity of a target behavior across settings by counselors",
        "isCorrect": false,
        "rationale": "\"The frequency and intensity of a target behavior across sett…\" is not what the item tests — FBA (ABC analysis): Antecedents (what precedes/triggers the behavior), Behavior (specific observable definition), Consequences (what follows the be"
      },
      {
        "id": "b",
        "text": "Neurological and cognitive factors underlying behavioral dysregulation itself",
        "isCorrect": false,
        "rationale": "\"Neurological and cognitive factors underlying behavioral dys…\" is not what the item tests — FBA (ABC analysis): Antecedents (what precedes/triggers the behavior), Behavior (specific observable definition), Consequences (what follows the be"
      },
      {
        "id": "c",
        "text": "The antecedents, behavior, and consequences that maintain the target behavior",
        "isCorrect": true,
        "rationale": "FBA (ABC analysis): Antecedents (what precedes/triggers the behavior), Behavior (specific observable definition), Consequences (what follows the behavior and maintains it)."
      },
      {
        "id": "d",
        "text": "Whether the behavior meets criteria for a behavioral disorder diagnosis today",
        "isCorrect": false,
        "rationale": "\"Whether the behavior meets criteria for a behavioral disorde…\" is not what the item tests — FBA (ABC analysis): Antecedents (what precedes/triggers the behavior), Behavior (specific observable definition), Consequences (what follows the be"
      }
    ]
  },

  {
    "id": "asx020",
    "domain": "assessment",
    "subdomain": "ScreeningVsDiagnosis",
    "difficulty": "medium",
    "question": "A screening tool with a positive result should be followed by:",
    "rationale": "Screening tools identify individuals who may warrant further evaluation — they are not diagnostic instruments. A positive screen indicates that a full clinical assessment (diagnostic interview, history, collateral information) should follow to confirm, rule out, or characterize the presentation before any diagnosis is assigned.",
    "options": [
      {
        "id": "a",
        "text": "Immediate psychoeducation about the screened-for condition during counseling",
        "isCorrect": false,
        "rationale": "\"Immediate psychoeducation about the screened-for condition d…\" is not what the item tests — Screening tools identify individuals who may warrant further evaluation — they are not diagnostic instruments."
      },
      {
        "id": "b",
        "text": "Assignment of the corresponding diagnostic code for billing purposes today",
        "isCorrect": false,
        "rationale": "\"Assignment of the corresponding diagnostic code for billing …\" is not what the item tests — Screening tools identify individuals who may warrant further evaluation — they are not diagnostic instruments."
      },
      {
        "id": "c",
        "text": "Referral to psychiatry for medication evaluation in the outpatient setting",
        "isCorrect": false,
        "rationale": "\"Referral to psychiatry for medication evaluation in the outp…\" is not what the item tests — Screening tools identify individuals who may warrant further evaluation — they are not diagnostic instruments."
      },
      {
        "id": "d",
        "text": "A comprehensive clinical assessment to confirm or disconfirm the diagnosis",
        "isCorrect": true,
        "rationale": "Screening tools identify individuals who may warrant further evaluation — they are not diagnostic instruments."
      }
    ]
  },

  {
    "id": "dx001",
    "domain": "diagnosis",
    "subdomain": "DXProcess",
    "difficulty": "easy",
    "question": "A \"provisional\" DSM-5 diagnosis is used when:",
    "rationale": "DSM-5 provisional specifier: used when the clinician has reason to believe the full criteria will be met but insufficient information exists to confirm (e.g., a client presenting in crisis before a full history is obtained). It is a working diagnosis pending further assessment.",
    "options": [
      {
        "id": "a",
        "text": "There is a strong presumption the full criteria will be met but information is still being gathered",
        "isCorrect": true,
        "rationale": "DSM-5 provisional specifier: used when the clinician has reason to believe the full criteria will be met but insufficient information exists to confirm (e.g., a client presenting in crisis before a full history is obtained)."
      },
      {
        "id": "b",
        "text": "The counselor is not fully trained to confirm the diagnosis now as the reference material frames it",
        "isCorrect": false,
        "rationale": "\"The counselor is not fully trained to confirm the diagnosis …\" is not what the item tests — DSM-5 provisional specifier: used when the clinician has reason to believe the full criteria will be met but insufficient information exists to con"
      },
      {
        "id": "c",
        "text": "Symptoms are subclinical and do not fully meet diagnostic criteria as clinicians typically apply it",
        "isCorrect": false,
        "rationale": "\"Symptoms are subclinical and do not fully meet diagnostic cr…\" is not what the item tests — DSM-5 provisional specifier: used when the clinician has reason to believe the full criteria will be met but insufficient information exists to con"
      },
      {
        "id": "d",
        "text": "The client has not consented to receiving a formal diagnosis now as the reference material frames it",
        "isCorrect": false,
        "rationale": "\"The client has not consented to receiving a formal diagnosis…\" is not what the item tests — DSM-5 provisional specifier: used when the clinician has reason to believe the full criteria will be met but insufficient information exists to con"
      }
    ]
  },

  {
    "id": "dx002",
    "domain": "diagnosis",
    "subdomain": "DXProcess",
    "difficulty": "medium",
    "question": "The DSM-5 requires that diagnostic criteria include a \"clinically significant\" requirement. This means symptoms must:",
    "rationale": "DSM-5 clinical significance: symptoms must cause clinically significant distress OR functional impairment (social, occupational, academic). This criterion distinguishes disorder from normative variation. Symptoms can be intense but not clinically significant if they cause no distress or impairment.",
    "options": [
      {
        "id": "a",
        "text": "Be rated as severe by a validated assessment tool now as the reference material frames it",
        "isCorrect": false,
        "rationale": "\"Be rated as severe by a validated assessment tool now as the…\" is not what the item tests — DSM-5 clinical significance: symptoms must cause clinically significant distress OR functional impairment (social, occupational, academic)."
      },
      {
        "id": "b",
        "text": "Cause distress OR functional impairment in social, occupational, or other important areas",
        "isCorrect": true,
        "rationale": "DSM-5 clinical significance: symptoms must cause clinically significant distress OR functional impairment (social, occupational, academic)."
      },
      {
        "id": "c",
        "text": "Be present for at least six months to qualify as clinically significant during counseling",
        "isCorrect": false,
        "rationale": "\"Be present for at least six months to qualify as clinically …\" is not what the item tests — DSM-5 clinical significance: symptoms must cause clinically significant distress OR functional impairment (social, occupational, academic)."
      },
      {
        "id": "d",
        "text": "Represent a change from the client's lifelong baseline functioning during a routine session",
        "isCorrect": false,
        "rationale": "\"Represent a change from the client's lifelong baseline funct…\" is not what the item tests — DSM-5 clinical significance: symptoms must cause clinically significant distress OR functional impairment (social, occupational, academic)."
      }
    ]
  },

  {
    "id": "dx003",
    "domain": "diagnosis",
    "subdomain": "DifferentialDiagnosis",
    "difficulty": "medium",
    "question": "The key feature distinguishing Persistent Depressive Disorder (PDD/Dysthymia) from Major Depressive Disorder (MDD) is:",
    "rationale": "PDD (DSM-5 F34.1): depressed mood for most of the day, more days than not, for at least 2 years (1 year for children/adolescents), with at least 2 additional symptoms. MDD involves more discrete episodes with 5+ symptoms for 2 weeks. Both can co-occur (\"double depression\").",
    "options": [
      {
        "id": "a",
        "text": "MDD can include psychotic features; PDD cannot in practice as the reference material frames it",
        "isCorrect": false,
        "rationale": "\"MDD can include psychotic features; PDD cannot in practice a…\" is not what the item tests — PDD (DSM-5 F34.1): depressed mood for most of the day, more days than not, for at least 2 years (1 year for children/adolescents), with at least 2 "
      },
      {
        "id": "b",
        "text": "PDD involves more severe symptoms than MDD in this domain as the reference material frames it",
        "isCorrect": false,
        "rationale": "\"PDD involves more severe symptoms than MDD in this domain as…\" is not what the item tests — PDD (DSM-5 F34.1): depressed mood for most of the day, more days than not, for at least 2 years (1 year for children/adolescents), with at least 2 "
      },
      {
        "id": "c",
        "text": "PDD requires depressed mood present most of the day, more days than not, for at least 2 years",
        "isCorrect": true,
        "rationale": "PDD (DSM-5 F34.1): depressed mood for most of the day, more days than not, for at least 2 years (1 year for children/adolescents), with at least 2 additional symptoms."
      },
      {
        "id": "d",
        "text": "PDD occurs only in adults; MDD can occur across the lifespan as clinicians typically apply it",
        "isCorrect": false,
        "rationale": "\"PDD occurs only in adults; MDD can occur across the lifespan…\" is not what the item tests — PDD (DSM-5 F34.1): depressed mood for most of the day, more days than not, for at least 2 years (1 year for children/adolescents), with at least 2 "
      }
    ]
  },

  {
    "id": "dx004",
    "domain": "diagnosis",
    "subdomain": "DifferentialDiagnosis",
    "difficulty": "hard",
    "question": "The key diagnostic feature distinguishing PTSD from Acute Stress Disorder (ASD) is:",
    "rationale": "Timing is the primary distinguishing criterion: ASD (F43.0) is diagnosed 3 days to 1 month post-trauma. PTSD (F43.10) is diagnosed when symptoms persist beyond 1 month. Both require the same Criterion A trauma exposure. ASD actually requires more dissociative symptoms than PTSD.",
    "options": [
      {
        "id": "a",
        "text": "ASD responds only to medication; PTSD responds to psychotherapy during a routine session",
        "isCorrect": false,
        "rationale": "\"ASD responds only to medication; PTSD responds to psychother…\" is not what the item tests — Timing is the primary distinguishing criterion: ASD (F43.0) is diagnosed 3 days to 1 month post-trauma."
      },
      {
        "id": "b",
        "text": "PTSD includes dissociative symptoms; ASD does not now as clinicians typically apply it",
        "isCorrect": false,
        "rationale": "\"PTSD includes dissociative symptoms; ASD does not now as cli…\" is not what the item tests — Timing is the primary distinguishing criterion: ASD (F43.0) is diagnosed 3 days to 1 month post-trauma."
      },
      {
        "id": "c",
        "text": "ASD requires a greater number of traumatic events now as clinicians typically apply it",
        "isCorrect": false,
        "rationale": "\"ASD requires a greater number of traumatic events now as cli…\" is not what the item tests — Timing is the primary distinguishing criterion: ASD (F43.0) is diagnosed 3 days to 1 month post-trauma."
      },
      {
        "id": "d",
        "text": "ASD is diagnosed within 3 days to 1 month post-trauma; PTSD is diagnosed after 1 month",
        "isCorrect": true,
        "rationale": "Timing is the primary distinguishing criterion: ASD (F43.0) is diagnosed 3 days to 1 month post-trauma."
      }
    ]
  },

  {
    "id": "dx005",
    "domain": "diagnosis",
    "subdomain": "DifferentialDiagnosis",
    "difficulty": "hard",
    "question": "Differentiating Borderline Personality Disorder (BPD) from Bipolar II Disorder is MOST reliably done by examining:",
    "rationale": "Key distinction: BPD mood instability is reactive — triggered by interpersonal events, shifting within hours to days. Bipolar II episodes are more spontaneous, sustained (days to weeks), and episodic, often without clear interpersonal precipitants. Identity disturbance, fear of abandonment, and chronic emptiness are more specific to BPD.",
    "options": [
      {
        "id": "a",
        "text": "The temporal relationship between mood instability and interpersonal events vs. spontaneous episode onset",
        "isCorrect": true,
        "rationale": "Key distinction: BPD mood instability is reactive — triggered by interpersonal events, shifting within hours to days."
      },
      {
        "id": "b",
        "text": "Whether mood episodes respond to mood stabilizing medication at intake as the reference material frames it",
        "isCorrect": false,
        "rationale": "\"Whether mood episodes respond to mood stabilizing medication…\" is not what the item tests — Key distinction: BPD mood instability is reactive — triggered by interpersonal events, shifting within hours to days."
      },
      {
        "id": "c",
        "text": "Age of onset — BPD presents in adolescence; Bipolar II in early adulthood as clinicians typically apply it",
        "isCorrect": false,
        "rationale": "\"Age of onset — BPD presents in adolescence; Bipolar II in ea…\" is not what the item tests — Key distinction: BPD mood instability is reactive — triggered by interpersonal events, shifting within hours to days."
      },
      {
        "id": "d",
        "text": "The presence of self-harm behavior, which occurs only in BPD at intake as the reference material frames it",
        "isCorrect": false,
        "rationale": "\"The presence of self-harm behavior, which occurs only in BPD…\" is not what the item tests — Key distinction: BPD mood instability is reactive — triggered by interpersonal events, shifting within hours to days."
      }
    ]
  },

  {
    "id": "dx006",
    "domain": "diagnosis",
    "subdomain": "DifferentialDiagnosis",
    "difficulty": "medium",
    "question": "The PRIMARY feature distinguishing Obsessive-Compulsive Disorder (OCD) from Generalized Anxiety Disorder (GAD) is:",
    "rationale": "OCD: ego-dystonic intrusive thoughts (obsessions) + compulsive rituals driven by the need to neutralize anxiety. GAD: pervasive, chronic, largely ego-syntonic worry across multiple life domains without discrete obsessions or compulsive rituals. OCD content is often perceived as repugnant or foreign to the self.",
    "options": [
      {
        "id": "a",
        "text": "OCD typically presents with depression; GAD does not during any routine visit",
        "isCorrect": false,
        "rationale": "\"OCD typically presents with depression; GAD does not during …\" is not what the item tests — OCD: ego-dystonic intrusive thoughts (obsessions) + compulsive rituals driven by the need to neutralize anxiety."
      },
      {
        "id": "b",
        "text": "OCD features discrete obsessions with compulsive rituals; GAD involves pervasive diffuse worry",
        "isCorrect": true,
        "rationale": "OCD: ego-dystonic intrusive thoughts (obsessions) + compulsive rituals driven by the need to neutralize anxiety."
      },
      {
        "id": "c",
        "text": "GAD responds to CBT; OCD does not (as the reference material typically frames it in item usage)",
        "isCorrect": false,
        "rationale": "\"GAD responds to CBT; OCD does not as the reference material …\" is not what the item tests — OCD: ego-dystonic intrusive thoughts (obsessions) + compulsive rituals driven by the need to neutralize anxiety."
      },
      {
        "id": "d",
        "text": "OCD involves more severe anxiety than GAD, as the reference material frames it here now",
        "isCorrect": false,
        "rationale": "\"OCD involves more severe anxiety than GAD as the reference m…\" is not what the item tests — OCD: ego-dystonic intrusive thoughts (obsessions) + compulsive rituals driven by the need to neutralize anxiety."
      }
    ]
  },

  {
    "id": "dx007",
    "domain": "diagnosis",
    "subdomain": "DifferentialDiagnosis",
    "difficulty": "medium",
    "question": "To distinguish a substance-induced depressive disorder from a primary depressive disorder, the clinician should determine:",
    "rationale": "Substance-induced depressive disorder: symptoms develop during or within 1 month of intoxication/withdrawal and resolve when the substance is removed. Primary MDD: symptoms preceded substance use, persist more than 1 month after cessation, or have a prior history independent of substance use. Timeline and temporal relationship are the key diagnostic tools.",
    "options": [
      {
        "id": "a",
        "text": "Whether the substance is a CNS depressant during a routine session as clinicians typically apply it now",
        "isCorrect": false,
        "rationale": "\"Whether the substance is a CNS depressant during a routine s…\" is not what the item tests — Substance-induced depressive disorder: symptoms develop during or within 1 month of intoxication/withdrawal and resolve when the substance is remov"
      },
      {
        "id": "b",
        "text": "Whether the client meets full MDD criteria as usually described as the reference material frames it",
        "isCorrect": false,
        "rationale": "\"Whether the client meets full MDD criteria as usually descri…\" is not what the item tests — Substance-induced depressive disorder: symptoms develop during or within 1 month of intoxication/withdrawal and resolve when the substance is remov"
      },
      {
        "id": "c",
        "text": "Whether depressive symptoms preceded substance use or persist beyond the expected withdrawal period",
        "isCorrect": true,
        "rationale": "Substance-induced depressive disorder: symptoms develop during or within 1 month of intoxication/withdrawal and resolve when the substance is removed."
      },
      {
        "id": "d",
        "text": "Whether the client has a family history of depression at intake as the reference material frames it",
        "isCorrect": false,
        "rationale": "\"Whether the client has a family history of depression at int…\" is not what the item tests — Substance-induced depressive disorder: symptoms develop during or within 1 month of intoxication/withdrawal and resolve when the substance is remov"
      }
    ]
  },

  {
    "id": "dx008",
    "domain": "diagnosis",
    "subdomain": "DifferentialDiagnosis",
    "difficulty": "hard",
    "question": "The diagnostic criterion that MOST clearly distinguishes Schizophrenia from Brief Psychotic Disorder is:",
    "rationale": "Duration: Brief Psychotic Disorder (F23) = 1 day to less than 1 month, with full return to premorbid functioning. Schizophreniform Disorder = 1–6 months. Schizophrenia requires symptoms for at least 6 months (including prodromal and residual phases). Symptom type alone does not differentiate them.",
    "options": [
      {
        "id": "a",
        "text": "The type of psychotic symptoms present (hallucinations vs. delusions) during a routine session",
        "isCorrect": false,
        "rationale": "\"The type of psychotic symptoms present (hallucinations vs. d…\" is not what the item tests — Duration: Brief Psychotic Disorder (F23) = 1 day to less than 1 month, with full return to premorbid functioning."
      },
      {
        "id": "b",
        "text": "Brief Psychotic Disorder typically has an identifiable stressor; Schizophrenia does not now",
        "isCorrect": false,
        "rationale": "\"Brief Psychotic Disorder typically has an identifiable stres…\" is not what the item tests — Duration: Brief Psychotic Disorder (F23) = 1 day to less than 1 month, with full return to premorbid functioning."
      },
      {
        "id": "c",
        "text": "The presence of negative symptoms, which occur only in Schizophrenia during a routine session",
        "isCorrect": false,
        "rationale": "\"The presence of negative symptoms, which occur only in Schiz…\" is not what the item tests — Duration: Brief Psychotic Disorder (F23) = 1 day to less than 1 month, with full return to premorbid functioning."
      },
      {
        "id": "d",
        "text": "Duration — Brief Psychotic Disorder lasts 1 day to 1 month; Schizophrenia requires 6 months",
        "isCorrect": true,
        "rationale": "Duration: Brief Psychotic Disorder (F23) = 1 day to less than 1 month, with full return to premorbid functioning."
      }
    ]
  },

  {
    "id": "dx009",
    "domain": "diagnosis",
    "subdomain": "ChildAdolDiagnosis",
    "difficulty": "medium",
    "question": "When diagnosing ADHD in adults, the DSM-5 requires:",
    "rationale": "DSM-5 ADHD: Criterion B requires that \"several inattentive or hyperactive-impulsive symptoms were present prior to age 12 years.\" Adults must present with 5 (not 6) symptoms in each domain. Adults often present primarily with inattention symptoms as hyperactivity diminishes with age. Retrospective history is often obtained from school records or family report.",
    "options": [
      {
        "id": "a",
        "text": "Evidence that several inattentive or hyperactive-impulsive symptoms were present before age 12",
        "isCorrect": true,
        "rationale": "DSM-5 ADHD: Criterion B requires that \"several inattentive or hyperactive-impulsive symptoms were present prior to age 12 years.\" Adults must present with 5 (not 6) symptoms in each domain."
      },
      {
        "id": "b",
        "text": "At least six symptoms of inattention, regardless of age now as the reference material frames it",
        "isCorrect": false,
        "rationale": "\"At least six symptoms of inattention, regardless of age now …\" is not what the item tests — DSM-5 ADHD: Criterion B requires that \"several inattentive or hyperactive-impulsive symptoms were present prior to age 12 years.\" Adults must prese"
      },
      {
        "id": "c",
        "text": "A neuropsychological assessment confirming executive function deficits during a routine session",
        "isCorrect": false,
        "rationale": "\"A neuropsychological assessment confirming executive functio…\" is not what the item tests — DSM-5 ADHD: Criterion B requires that \"several inattentive or hyperactive-impulsive symptoms were present prior to age 12 years.\" Adults must prese"
      },
      {
        "id": "d",
        "text": "Symptom onset after age 18 to distinguish from childhood-onset ADHD at the level the item tests",
        "isCorrect": false,
        "rationale": "\"Symptom onset after age 18 to distinguish from childhood-ons…\" is not what the item tests — DSM-5 ADHD: Criterion B requires that \"several inattentive or hyperactive-impulsive symptoms were present prior to age 12 years.\" Adults must prese"
      }
    ]
  },

  {
    "id": "dx010",
    "domain": "diagnosis",
    "subdomain": "ChildAdolDiagnosis",
    "difficulty": "hard",
    "question": "A 7-year-old is brought to counseling for significant oppositional behavior at home and school. To distinguish Oppositional Defiant Disorder (ODD) from Conduct Disorder (CD), the clinician should look for:",
    "rationale": "ODD: persistent pattern of angry/irritable mood, argumentative/defiant behavior, or vindictiveness — without physical aggression, property destruction, theft, or deceit. CD includes these more serious violations. CD is more severe and carries worse long-term prognosis. ODD can develop into CD but is not the same disorder.",
    "options": [
      {
        "id": "a",
        "text": "Whether the child is male, as ODD is diagnosed only in females in the outpatient setting",
        "isCorrect": false,
        "rationale": "\"Whether the child is male, as ODD is diagnosed only in femal…\" is not what the item tests — ODD: persistent pattern of angry/irritable mood, argumentative/defiant behavior, or vindictiveness — without physical aggression, property destruct"
      },
      {
        "id": "b",
        "text": "Whether behaviors include aggression, property destruction, deceitfulness, or rule violations (CD)",
        "isCorrect": true,
        "rationale": "ODD: persistent pattern of angry/irritable mood, argumentative/defiant behavior, or vindictiveness — without physical aggression, property destruction, theft, or deceit."
      },
      {
        "id": "c",
        "text": "Whether the behavior occurs across multiple settings as the reference material typically frames it here",
        "isCorrect": false,
        "rationale": "\"Whether the behavior occurs across multiple settings as the …\" is not what the item tests — ODD: persistent pattern of angry/irritable mood, argumentative/defiant behavior, or vindictiveness — without physical aggression, property destruct"
      },
      {
        "id": "d",
        "text": "Whether the child has callous-unemotional traits as the reference material frames it now",
        "isCorrect": false,
        "rationale": "\"Whether the child has callous-unemotional traits as the refe…\" is not what the item tests — ODD: persistent pattern of angry/irritable mood, argumentative/defiant behavior, or vindictiveness — without physical aggression, property destruct"
      }
    ]
  },

  {
    "id": "dx011",
    "domain": "diagnosis",
    "subdomain": "CulturalDiagnosis",
    "difficulty": "hard",
    "question": "The DSM-5 concept of \"cultural concepts of distress\" refers to:",
    "rationale": "DSM-5 cultural concepts of distress (replacing \"culture-bound syndromes\"): includes cultural syndromes (clusters of symptoms occurring in specific cultural contexts), cultural idioms of distress (shared expressions like \"nerves\"), and cultural explanations (explanatory models of causation). They inform how clients present and what is diagnostically meaningful.",
    "options": [
      {
        "id": "a",
        "text": "Culture-bound syndromes that occur only in non-Western populations in practice as the reference material frames it",
        "isCorrect": false,
        "rationale": "\"Culture-bound syndromes that occur only in non-Western popul…\" is not what the item tests — DSM-5 cultural concepts of distress (replacing \"culture-bound syndromes\"): includes cultural syndromes (clusters of symptoms occurring in specific "
      },
      {
        "id": "b",
        "text": "The cultural values that make certain DSM diagnoses more acceptable than others as the reference material frames it",
        "isCorrect": false,
        "rationale": "\"The cultural values that make certain DSM diagnoses more acc…\" is not what the item tests — DSM-5 cultural concepts of distress (replacing \"culture-bound syndromes\"): includes cultural syndromes (clusters of symptoms occurring in specific "
      },
      {
        "id": "c",
        "text": "Ways cultural groups experience, understand, and communicate suffering that may not map directly to DSM categories",
        "isCorrect": true,
        "rationale": "DSM-5 cultural concepts of distress (replacing \"culture-bound syndromes\"): includes cultural syndromes (clusters of symptoms occurring in specific cultural contexts), cultural idioms of distress (shared expressions like…"
      },
      {
        "id": "d",
        "text": "Cultural barriers to accessing mental health services during a routine session as the reference material frames it",
        "isCorrect": false,
        "rationale": "\"Cultural barriers to accessing mental health services during…\" is not what the item tests — DSM-5 cultural concepts of distress (replacing \"culture-bound syndromes\"): includes cultural syndromes (clusters of symptoms occurring in specific "
      }
    ]
  },

  {
    "id": "dx012",
    "domain": "diagnosis",
    "subdomain": "DiagnosisMedical",
    "difficulty": "medium",
    "question": "Before diagnosing a mental health disorder, the clinician must rule out that the condition is attributable to:",
    "rationale": "DSM-5 Criterion E (or similar exclusion criteria): the disturbance must not be attributable to the physiological effects of a substance (drug of abuse, medication) or another medical condition. Thyroid conditions, autoimmune diseases, neurological conditions, and medications commonly produce psychiatric symptoms.",
    "options": [
      {
        "id": "a",
        "text": "Prior trauma history that underlies the symptoms during a routine session",
        "isCorrect": false,
        "rationale": "\"Prior trauma history that underlies the symptoms during a ro…\" is not what the item tests — DSM-5 Criterion E (or similar exclusion criteria): the disturbance must not be attributable to the physiological effects of a substance (drug of ab"
      },
      {
        "id": "b",
        "text": "A personality disorder that better explains the presentation in practice",
        "isCorrect": false,
        "rationale": "\"A personality disorder that better explains the presentation…\" is not what the item tests — DSM-5 Criterion E (or similar exclusion criteria): the disturbance must not be attributable to the physiological effects of a substance (drug of ab"
      },
      {
        "id": "c",
        "text": "Recent life stressors that could explain the symptoms during counseling",
        "isCorrect": false,
        "rationale": "\"Recent life stressors that could explain the symptoms during…\" is not what the item tests — DSM-5 Criterion E (or similar exclusion criteria): the disturbance must not be attributable to the physiological effects of a substance (drug of ab"
      },
      {
        "id": "d",
        "text": "A general medical condition or the physiological effects of a substance",
        "isCorrect": true,
        "rationale": "DSM-5 Criterion E (or similar exclusion criteria): the disturbance must not be attributable to the physiological effects of a substance (drug of abuse, medication) or another medical condition."
      }
    ]
  },

  {
    "id": "dx013",
    "domain": "diagnosis",
    "subdomain": "VSyndromes",
    "difficulty": "medium",
    "question": "Z-codes (formerly V-codes) in DSM-5/ICD-10 are clinically useful because they:",
    "rationale": "Z-codes (ICD-10/DSM-5 Chapter on Other Conditions): document relational problems, abuse and neglect, housing/economic problems, social environment factors, and other psychosocial contexts affecting health. They provide clinical documentation of context without pathologizing the client and may be the primary focus of treatment.",
    "options": [
      {
        "id": "a",
        "text": "Document psychosocial and contextual factors that may affect mental health without assigning a mental disorder diagnosis",
        "isCorrect": true,
        "rationale": "Z-codes (ICD-10/DSM-5 Chapter on Other Conditions): document relational problems, abuse and neglect, housing/economic problems, social environment factors, and other psychosocial contexts affecting health."
      },
      {
        "id": "b",
        "text": "Provide diagnostic specificity for subclinical presentations during a routine session as the reference material frames it",
        "isCorrect": false,
        "rationale": "\"Provide diagnostic specificity for subclinical presentations…\" is not what the item tests — Z-codes (ICD-10/DSM-5 Chapter on Other Conditions): document relational problems, abuse and neglect, housing/economic problems, social environment "
      },
      {
        "id": "c",
        "text": "Are required by insurance before any mental disorder diagnosis can be billed as used as the reference material frames it",
        "isCorrect": false,
        "rationale": "\"Are required by insurance before any mental disorder diagnos…\" is not what the item tests — Z-codes (ICD-10/DSM-5 Chapter on Other Conditions): document relational problems, abuse and neglect, housing/economic problems, social environment "
      },
      {
        "id": "d",
        "text": "Are used when the clinician is uncertain which diagnosis applies at the intake stage as the reference material frames it",
        "isCorrect": false,
        "rationale": "\"Are used when the clinician is uncertain which diagnosis app…\" is not what the item tests — Z-codes (ICD-10/DSM-5 Chapter on Other Conditions): document relational problems, abuse and neglect, housing/economic problems, social environment "
      }
    ]
  },

  {
    "id": "dx014",
    "domain": "diagnosis",
    "subdomain": "Specifiers",
    "difficulty": "medium",
    "question": "The \"with anxious distress\" specifier in DSM-5 mood disorder diagnoses is clinically significant because:",
    "rationale": "DSM-5 \"with anxious distress\" specifier: MDD or bipolar with tension, restlessness, difficulty concentrating due to worry, fear of losing control. Research shows this subgroup has higher suicide risk, worse treatment response to standard antidepressants, and longer time to remission. It does not constitute a separate anxiety disorder diagnosis.",
    "options": [
      {
        "id": "a",
        "text": "It is required when prescribing anxiolytics alongside antidepressants by counselors",
        "isCorrect": false,
        "rationale": "\"It is required when prescribing anxiolytics alongside antide…\" is not what the item tests — DSM-5 \"with anxious distress\" specifier: MDD or bipolar with tension, restlessness, difficulty concentrating due to worry, fear of losing control."
      },
      {
        "id": "b",
        "text": "It identifies a subgroup with higher suicide risk and different treatment response",
        "isCorrect": true,
        "rationale": "DSM-5 \"with anxious distress\" specifier: MDD or bipolar with tension, restlessness, difficulty concentrating due to worry, fear of losing control."
      },
      {
        "id": "c",
        "text": "It shifts the primary diagnosis from mood disorder to anxiety disorder in practice",
        "isCorrect": false,
        "rationale": "\"It shifts the primary diagnosis from mood disorder to anxiet…\" is not what the item tests — DSM-5 \"with anxious distress\" specifier: MDD or bipolar with tension, restlessness, difficulty concentrating due to worry, fear of losing control."
      },
      {
        "id": "d",
        "text": "It indicates the client also meets criteria for a separate anxiety disorder itself",
        "isCorrect": false,
        "rationale": "\"It indicates the client also meets criteria for a separate a…\" is not what the item tests — DSM-5 \"with anxious distress\" specifier: MDD or bipolar with tension, restlessness, difficulty concentrating due to worry, fear of losing control."
      }
    ]
  },

  {
    "id": "dx015",
    "domain": "diagnosis",
    "subdomain": "Comorbidity",
    "difficulty": "medium",
    "question": "In clinical practice, comorbidity (multiple co-occurring diagnoses) is:",
    "rationale": "Epidemiological data (NCS-R and similar studies) consistently show that over 50% of individuals with one mental disorder meet criteria for at least one more. Comorbidity is the rule, not the exception. It complicates treatment planning and generally worsens prognosis — requiring integrated rather than sequential treatment approaches.",
    "options": [
      {
        "id": "a",
        "text": "Only relevant when diagnoses are from different diagnostic families",
        "isCorrect": false,
        "rationale": "\"Only relevant when diagnoses are from different diagnostic f…\" is not what the item tests — Epidemiological data (NCS-R and similar studies) consistently show that over 50% of individuals with one mental disorder meet criteria for at least"
      },
      {
        "id": "b",
        "text": "Unusual and suggests diagnostic error when present by counselors",
        "isCorrect": false,
        "rationale": "\"Unusual and suggests diagnostic error when present by counse…\" is not what the item tests — Epidemiological data (NCS-R and similar studies) consistently show that over 50% of individuals with one mental disorder meet criteria for at least"
      },
      {
        "id": "c",
        "text": "The norm rather than the exception in mental health populations",
        "isCorrect": true,
        "rationale": "Epidemiological data (NCS-R and similar studies) consistently show that over 50% of individuals with one mental disorder meet criteria for at least one more."
      },
      {
        "id": "d",
        "text": "Caused by diagnostic category overlap in the DSM system as used",
        "isCorrect": false,
        "rationale": "\"Caused by diagnostic category overlap in the DSM system as u…\" is not what the item tests — Epidemiological data (NCS-R and similar studies) consistently show that over 50% of individuals with one mental disorder meet criteria for at least"
      }
    ]
  },

  {
    "id": "dx016",
    "domain": "diagnosis",
    "subdomain": "SeverityRatings",
    "difficulty": "easy",
    "question": "In DSM-5, severity specifiers (mild, moderate, severe) are primarily based on:",
    "rationale": "DSM-5 severity ratings are typically based on symptom count beyond the minimum diagnostic threshold and level of functional impairment: mild (few extra symptoms, mild distress/impairment), moderate (symptoms/impairment between mild and severe), severe (substantially more symptoms, marked impairment). Specific severity criteria vary by diagnosis.",
    "options": [
      {
        "id": "a",
        "text": "The clinician's global assessment of functioning (GAF) as clinicians typically apply it",
        "isCorrect": false,
        "rationale": "\"The clinician's global assessment of functioning (GAF) as cl…\" is not what the item tests — DSM-5 severity ratings are typically based on symptom count beyond the minimum diagnostic threshold and level of functional impairment: mild (few e"
      },
      {
        "id": "b",
        "text": "Score ranges on a standardized severity rating scale as the reference material frames it",
        "isCorrect": false,
        "rationale": "\"Score ranges on a standardized severity rating scale as the …\" is not what the item tests — DSM-5 severity ratings are typically based on symptom count beyond the minimum diagnostic threshold and level of functional impairment: mild (few e"
      },
      {
        "id": "c",
        "text": "Duration of symptoms above the minimum criterion now as the reference material frames it",
        "isCorrect": false,
        "rationale": "\"Duration of symptoms above the minimum criterion now as the …\" is not what the item tests — DSM-5 severity ratings are typically based on symptom count beyond the minimum diagnostic threshold and level of functional impairment: mild (few e"
      },
      {
        "id": "d",
        "text": "The number of symptoms present beyond threshold and the degree of functional impairment",
        "isCorrect": true,
        "rationale": "DSM-5 severity ratings are typically based on symptom count beyond the minimum diagnostic threshold and level of functional impairment: mild (few extra symptoms, mild distress/impairment), moderate (symptoms/impairment b…"
      }
    ]
  },

  {
    "id": "dx017",
    "domain": "diagnosis",
    "subdomain": "MalingeringVsFactitious",
    "difficulty": "hard",
    "question": "The KEY distinction between Factitious Disorder and Malingering is:",
    "rationale": "Both involve intentional symptom production. Distinction is motivation: Malingering = external incentives (disability payments, avoiding legal consequences, obtaining medications). Factitious Disorder = internal psychological need to assume the sick role without obvious external rewards. Malingering is not a mental disorder in DSM-5; Factitious Disorder is.",
    "options": [
      {
        "id": "a",
        "text": "Malingering involves external incentives (financial, legal); factitious disorder is motivated by assuming the sick role without external gain",
        "isCorrect": true,
        "rationale": "Both involve intentional symptom production."
      },
      {
        "id": "b",
        "text": "In factitious disorder, symptoms are not intentionally produced as the reference material frames it at intake as the reference material frames it",
        "isCorrect": false,
        "rationale": "\"In factitious disorder, symptoms are not intentionally produ…\" is not what the item tests — Both involve intentional symptom production."
      },
      {
        "id": "c",
        "text": "Malingering typically involves physical symptoms; factitious disorder involves psychological symptoms now as the reference material frames it",
        "isCorrect": false,
        "rationale": "\"Malingering typically involves physical symptoms; factitious…\" is not what the item tests — Both involve intentional symptom production."
      },
      {
        "id": "d",
        "text": "Factitious disorder is diagnosed in adults; malingering is more common in adolescents at the intake stage as the reference material frames it",
        "isCorrect": false,
        "rationale": "\"Factitious disorder is diagnosed in adults; malingering is m…\" is not what the item tests — Both involve intentional symptom production."
      }
    ]
  },

  {
    "id": "dx018",
    "domain": "diagnosis",
    "subdomain": "SomaticDiagnosis",
    "difficulty": "medium",
    "question": "Somatic Symptom Disorder (SSD) in DSM-5 differs from prior editions' Somatization Disorder in that SSD:",
    "rationale": "SSD (DSM-5): a major change from prior somatoform categories is that medical explanation is NOT required for exclusion. The diagnosis is based on excessive thoughts, feelings, and behaviors related to symptoms (disproportionate worry, high health anxiety, excessive time/energy devoted to symptoms) — regardless of whether symptoms have a medical basis.",
    "options": [
      {
        "id": "a",
        "text": "Is classified under neurodevelopmental disorders in DSM-5 (as clinicians typically apply it now)",
        "isCorrect": false,
        "rationale": "\"Is classified under neurodevelopmental disorders in DSM-5 as…\" is not what the item tests — SSD (DSM-5): a major change from prior somatoform categories is that medical explanation is NOT required for exclusion."
      },
      {
        "id": "b",
        "text": "Can be diagnosed even when medical explanation exists, based on maladaptive thoughts and behaviors",
        "isCorrect": true,
        "rationale": "SSD (DSM-5): a major change from prior somatoform categories is that medical explanation is NOT required for exclusion."
      },
      {
        "id": "c",
        "text": "Requires symptoms to be medically unexplained as the reference material frames it in practice today",
        "isCorrect": false,
        "rationale": "\"Requires symptoms to be medically unexplained as the referen…\" is not what the item tests — SSD (DSM-5): a major change from prior somatoform categories is that medical explanation is NOT required for exclusion."
      },
      {
        "id": "d",
        "text": "Requires a longer symptom history than prior criteria (as the reference material frames it now)",
        "isCorrect": false,
        "rationale": "\"Requires a longer symptom history than prior criteria as the…\" is not what the item tests — SSD (DSM-5): a major change from prior somatoform categories is that medical explanation is NOT required for exclusion."
      }
    ]
  },

  {
    "id": "dx019",
    "domain": "diagnosis",
    "subdomain": "NeurodevelopmentalDX",
    "difficulty": "medium",
    "question": "Autism Spectrum Disorder (ASD) in DSM-5 consolidated prior categories (Autistic Disorder, Asperger's, PDD-NOS) primarily because:",
    "rationale": "DSM-5 ASD consolidation: reliability studies showed clinicians inconsistently applied the prior subtypes, and the core features (social communication deficits + restricted/repetitive behaviors) appeared continuous across severity levels. Severity specifiers (Level 1–3 for each domain) replaced separate categories.",
    "options": [
      {
        "id": "a",
        "text": "The consolidation reduced stigma for higher-functioning individuals in the outpatient setting as the reference material frames it",
        "isCorrect": false,
        "rationale": "\"The consolidation reduced stigma for higher-functioning indi…\" is not what the item tests — DSM-5 ASD consolidation: reliability studies showed clinicians inconsistently applied the prior subtypes, and the core features (social communicati"
      },
      {
        "id": "b",
        "text": "Research showed Asperger's was not a valid clinical construct as clinicians typically apply it as the reference material frames it",
        "isCorrect": false,
        "rationale": "\"Research showed Asperger's was not a valid clinical construc…\" is not what the item tests — DSM-5 ASD consolidation: reliability studies showed clinicians inconsistently applied the prior subtypes, and the core features (social communicati"
      },
      {
        "id": "c",
        "text": "Evidence showed the prior distinctions lacked diagnostic reliability and shared the same core features at varying severity levels",
        "isCorrect": true,
        "rationale": "DSM-5 ASD consolidation: reliability studies showed clinicians inconsistently applied the prior subtypes, and the core features (social communication deficits + restricted/repetitive behaviors) appeared continuous across severity levels."
      },
      {
        "id": "d",
        "text": "Insurance reimbursement required a single diagnosis for ABA therapy coverage during counseling as the reference material frames it",
        "isCorrect": false,
        "rationale": "\"Insurance reimbursement required a single diagnosis for ABA …\" is not what the item tests — DSM-5 ASD consolidation: reliability studies showed clinicians inconsistently applied the prior subtypes, and the core features (social communicati"
      }
    ]
  },

  {
    "id": "dx020",
    "domain": "diagnosis",
    "subdomain": "DiagnosisDevelopmentalContext",
    "difficulty": "hard",
    "question": "When diagnosing depression in adolescents, which modification to adult criteria does DSM-5 specify?",
    "rationale": "DSM-5 MDD in children/adolescents: irritable mood can be substituted for depressed mood as the primary mood symptom (Criterion A1). This is a developmentally sensitive modification — adolescents may present depression as irritability, anger, or behaviorally rather than sad affect.",
    "options": [
      {
        "id": "a",
        "text": "Duration is shortened to 1 week instead of 2 weeks during counseling",
        "isCorrect": false,
        "rationale": "\"Duration is shortened to 1 week instead of 2 weeks during co…\" is not what the item tests — DSM-5 MDD in children/adolescents: irritable mood can be substituted for depressed mood as the primary mood symptom (Criterion A1)."
      },
      {
        "id": "b",
        "text": "Adolescents must meet 7 rather than 5 criteria at the intake stage",
        "isCorrect": false,
        "rationale": "\"Adolescents must meet 7 rather than 5 criteria at the intake…\" is not what the item tests — DSM-5 MDD in children/adolescents: irritable mood can be substituted for depressed mood as the primary mood symptom (Criterion A1)."
      },
      {
        "id": "c",
        "text": "Vegetative symptoms are excluded from consideration in adolescents",
        "isCorrect": false,
        "rationale": "\"Vegetative symptoms (sleep, appetite) are excluded from cons…\" is not what the item tests — DSM-5 MDD in children/adolescents: irritable mood can be substituted for depressed mood as the primary mood symptom (Criterion A1)."
      },
      {
        "id": "d",
        "text": "Irritable mood can substitute for depressed mood as a core symptom",
        "isCorrect": true,
        "rationale": "DSM-5 MDD in children/adolescents: irritable mood can be substituted for depressed mood as the primary mood symptom (Criterion A1)."
      }
    ]
  },

  {
    "id": "tp001",
    "domain": "treatment_planning",
    "subdomain": "GoalWriting",
    "difficulty": "easy",
    "question": "A well-written short-term treatment goal for a client with MDD should be:",
    "rationale": "SMART goals provide direction, allow objective progress monitoring, and increase client investment. Vague goals like \"feel better\" cannot be tracked or evaluated. Symptom elimination alone is often insufficient and unrealistic as a sole target.",
    "options": [
      {
        "id": "a",
        "text": "Specific, measurable, achievable, relevant, and time-bound (SMART)",
        "isCorrect": true,
        "rationale": "SMART goals provide direction, allow objective progress monitoring, and increase client investment."
      },
      {
        "id": "b",
        "text": "Focused exclusively on symptom elimination during a routine session",
        "isCorrect": false,
        "rationale": "\"Focused exclusively on symptom elimination during a routine …\" is not what the item tests — SMART goals provide direction, allow objective progress monitoring, and increase client investment."
      },
      {
        "id": "c",
        "text": "Written by the clinician and presented to the client for signature",
        "isCorrect": false,
        "rationale": "\"Written by the clinician and presented to the client for sig…\" is not what the item tests — SMART goals provide direction, allow objective progress monitoring, and increase client investment."
      },
      {
        "id": "d",
        "text": "Broad enough to allow flexible interpretation across sessions here",
        "isCorrect": false,
        "rationale": "\"Broad enough to allow flexible interpretation across session…\" is not what the item tests — SMART goals provide direction, allow objective progress monitoring, and increase client investment."
      }
    ]
  },

  {
    "id": "tp002",
    "domain": "treatment_planning",
    "subdomain": "GoalWriting",
    "difficulty": "medium",
    "question": "Which of the following is the BEST example of a measurable short-term goal?",
    "rationale": "Option C is measurable (three techniques, 7/10 threshold), behavioral (identify and use), time-bound (4 weeks), and specific. Options A, B, and D use verbs — \"improve,\" \"understand,\" \"work on\" — that cannot be objectively observed or counted.",
    "options": [
      {
        "id": "a",
        "text": "Client will work on reducing anxiety through therapy as used as the reference material frames it",
        "isCorrect": false,
        "rationale": "\"Client will work on reducing anxiety through therapy as used…\" is not what the item tests — Option C is measurable (three techniques, 7/10 threshold), behavioral (identify and use), time-bound (4 weeks), and specific."
      },
      {
        "id": "b",
        "text": "Client will identify and use three grounding techniques when anxiety reaches 7/10 within 4 weeks",
        "isCorrect": true,
        "rationale": "Option C is measurable (three techniques, 7/10 threshold), behavioral (identify and use), time-bound (4 weeks), and specific."
      },
      {
        "id": "c",
        "text": "Client will understand the connection between thoughts and feelings as clinicians typically apply it",
        "isCorrect": false,
        "rationale": "\"Client will understand the connection between thoughts and f…\" is not what the item tests — Option C is measurable (three techniques, 7/10 threshold), behavioral (identify and use), time-bound (4 weeks), and specific."
      },
      {
        "id": "d",
        "text": "Client will improve coping skills over the next few months now as the reference material frames it",
        "isCorrect": false,
        "rationale": "\"Client will improve coping skills over the next few months n…\" is not what the item tests — Option C is measurable (three techniques, 7/10 threshold), behavioral (identify and use), time-bound (4 weeks), and specific."
      }
    ]
  },

  {
    "id": "tp003",
    "domain": "treatment_planning",
    "subdomain": "GoalWriting",
    "difficulty": "hard",
    "question": "Short-term goals differ from long-term goals in treatment planning primarily in that short-term goals:",
    "rationale": "Short-term goals are stepping stones — building skills and reducing acute distress in weeks to months. Long-term goals address functional recovery and identity-level outcomes over months to years. Short-term goals create early wins that build momentum and alliance.",
    "options": [
      {
        "id": "a",
        "text": "Are less clinically important and can be skipped when time is limited during a routine session",
        "isCorrect": false,
        "rationale": "\"Are less clinically important and can be skipped when time i…\" is not what the item tests — Short-term goals are stepping stones — building skills and reducing acute distress in weeks to months."
      },
      {
        "id": "b",
        "text": "Are typically set by the counselor; long-term goals are set collaboratively during counseling",
        "isCorrect": false,
        "rationale": "\"Are typically set by the counselor; long-term goals are set …\" is not what the item tests — Short-term goals are stepping stones — building skills and reducing acute distress in weeks to months."
      },
      {
        "id": "c",
        "text": "Address immediate stabilization and skill-building that scaffolds toward long-term outcomes",
        "isCorrect": true,
        "rationale": "Short-term goals are stepping stones — building skills and reducing acute distress in weeks to months."
      },
      {
        "id": "d",
        "text": "Cover a fixed period of 6 months while long-term goals cover a full year at the intake stage",
        "isCorrect": false,
        "rationale": "\"Cover a fixed period of 6 months while long-term goals cover…\" is not what the item tests — Short-term goals are stepping stones — building skills and reducing acute distress in weeks to months."
      }
    ]
  },

  {
    "id": "tp004",
    "domain": "treatment_planning",
    "subdomain": "InterventionSequencing",
    "difficulty": "medium",
    "question": "A client presents with severe PTSD and active alcohol use disorder. The CORRECT treatment sequencing is:",
    "rationale": "Research (Seeking Safety, COPE): integrated concurrent treatment of PTSD + SUD produces better outcomes than sequential approaches. The outdated \"get sober first\" model is exam-penalized. Exception: acute medical withdrawal requires medical stabilization before trauma work.",
    "options": [
      {
        "id": "a",
        "text": "Stabilize PTSD first through trauma processing, then address the alcohol use as clinicians typically apply it",
        "isCorrect": false,
        "rationale": "\"Stabilize PTSD first through trauma processing, then address…\" is not what the item tests — Research (Seeking Safety, COPE): integrated concurrent treatment of PTSD + SUD produces better outcomes than sequential approaches."
      },
      {
        "id": "b",
        "text": "Address alcohol use exclusively since it is the primary disorder at intake as the reference material frames it",
        "isCorrect": false,
        "rationale": "\"Address alcohol use exclusively since it is the primary diso…\" is not what the item tests — Research (Seeking Safety, COPE): integrated concurrent treatment of PTSD + SUD produces better outcomes than sequential approaches."
      },
      {
        "id": "c",
        "text": "Require complete abstinence before any trauma work begins during counseling as the reference material frames it",
        "isCorrect": false,
        "rationale": "\"Require complete abstinence before any trauma work begins du…\" is not what the item tests — Research (Seeking Safety, COPE): integrated concurrent treatment of PTSD + SUD produces better outcomes than sequential approaches."
      },
      {
        "id": "d",
        "text": "Integrated, concurrent treatment of PTSD and SUD; only acute withdrawal justifies medical stabilization first",
        "isCorrect": true,
        "rationale": "Research (Seeking Safety, COPE): integrated concurrent treatment of PTSD + SUD produces better outcomes than sequential approaches."
      }
    ]
  },

  {
    "id": "tp005",
    "domain": "treatment_planning",
    "subdomain": "InterventionSequencing",
    "difficulty": "medium",
    "question": "For a client with OCD, the correct sequencing of treatment components is:",
    "rationale": "ERP for OCD: psychoeducation (the obsession-compulsion model and ERP rationale) must precede exposure so the client understands why response prevention works. Hierarchy construction follows. ERP then proceeds from lowest to highest anxiety items. Starting without psychoeducation undermines buy-in.",
    "options": [
      {
        "id": "a",
        "text": "Psychoeducation → hierarchy construction → graduated ERP with response prevention",
        "isCorrect": true,
        "rationale": "ERP for OCD: psychoeducation (the obsession-compulsion model and ERP rationale) must precede exposure so the client understands why response prevention works."
      },
      {
        "id": "b",
        "text": "Cognitive restructuring → psychoeducation → ERP as a final phase during counseling",
        "isCorrect": false,
        "rationale": "\"Cognitive restructuring → psychoeducation → ERP as a final p…\" is not what the item tests — ERP for OCD: psychoeducation (the obsession-compulsion model and ERP rationale) must precede exposure so the client understands why response preven"
      },
      {
        "id": "c",
        "text": "Begin ERP immediately → add psychoeducation later to maintain momentum in practice",
        "isCorrect": false,
        "rationale": "\"Begin ERP immediately → add psychoeducation later to maintai…\" is not what the item tests — ERP for OCD: psychoeducation (the obsession-compulsion model and ERP rationale) must precede exposure so the client understands why response preven"
      },
      {
        "id": "d",
        "text": "Relaxation training → cognitive restructuring → ERP as clinicians typically apply it",
        "isCorrect": false,
        "rationale": "\"Relaxation training → cognitive restructuring → ERP as clini…\" is not what the item tests — ERP for OCD: psychoeducation (the obsession-compulsion model and ERP rationale) must precede exposure so the client understands why response preven"
      }
    ]
  },

  {
    "id": "tp006",
    "domain": "treatment_planning",
    "subdomain": "InterventionSequencing",
    "difficulty": "hard",
    "question": "A client with DID presents for treatment. Phase-oriented treatment prescribes the FIRST phase as:",
    "rationale": "Phase-oriented trauma treatment (ISSTD guidelines): Phase 1 = safety and stabilization (grounding, affect regulation, reducing crisis, building internal cooperation). Phase 2 = trauma processing. Phase 3 = integration. Skipping Phase 1 causes destabilization and retraumatization.",
    "options": [
      {
        "id": "a",
        "text": "Integration of all personality states as quickly as possible at intake",
        "isCorrect": false,
        "rationale": "\"Integration of all personality states as quickly as possible…\" is not what the item tests — Phase-oriented trauma treatment (ISSTD guidelines): Phase 1 = safety and stabilization (grounding, affect regulation, reducing crisis, building int"
      },
      {
        "id": "b",
        "text": "Safety, stabilization, and building internal communication among parts",
        "isCorrect": true,
        "rationale": "Phase-oriented trauma treatment (ISSTD guidelines): Phase 1 = safety and stabilization (grounding, affect regulation, reducing crisis, building internal cooperation)."
      },
      {
        "id": "c",
        "text": "Hypnosis to access and retrieve traumatic memories at the intake stage",
        "isCorrect": false,
        "rationale": "\"Hypnosis to access and retrieve traumatic memories at the in…\" is not what the item tests — Phase-oriented trauma treatment (ISSTD guidelines): Phase 1 = safety and stabilization (grounding, affect regulation, reducing crisis, building int"
      },
      {
        "id": "d",
        "text": "Processing traumatic memories held by child parts as usually described now",
        "isCorrect": false,
        "rationale": "\"Processing traumatic memories held by child parts as usually…\" is not what the item tests — Phase-oriented trauma treatment (ISSTD guidelines): Phase 1 = safety and stabilization (grounding, affect regulation, reducing crisis, building int"
      }
    ]
  },

  {
    "id": "tp007",
    "domain": "treatment_planning",
    "subdomain": "LevelOfCare",
    "difficulty": "easy",
    "question": "The \"least restrictive environment\" principle in treatment planning means:",
    "rationale": "Least restrictive environment: match the level of care to clinical need. Too much is unnecessarily disruptive; too little leaves the client unsafe. The NCMHCE rewards accurate calibration — not reflexive avoidance or overuse of intensive services.",
    "options": [
      {
        "id": "a",
        "text": "Using the least amount of structure to respect client preferences today as the reference material frames it",
        "isCorrect": false,
        "rationale": "\"Using the least amount of structure to respect client prefer…\" is not what the item tests — Least restrictive environment: match the level of care to clinical need."
      },
      {
        "id": "b",
        "text": "Typically starting with outpatient services regardless of symptom severity as clinicians typically apply it",
        "isCorrect": false,
        "rationale": "\"Typically starting with outpatient services regardless of sy…\" is not what the item tests — Least restrictive environment: match the level of care to clinical need."
      },
      {
        "id": "c",
        "text": "Placing the client in the least intensive setting that can safely and effectively meet their clinical needs",
        "isCorrect": true,
        "rationale": "Least restrictive environment: match the level of care to clinical need."
      },
      {
        "id": "d",
        "text": "Avoiding hospitalization under all circumstances to preserve client autonomy as clinicians typically apply it",
        "isCorrect": false,
        "rationale": "\"Avoiding hospitalization under all circumstances to preserve…\" is not what the item tests — Least restrictive environment: match the level of care to clinical need."
      }
    ]
  },

  {
    "id": "tp008",
    "domain": "treatment_planning",
    "subdomain": "LevelOfCare",
    "difficulty": "medium",
    "question": "A client with moderate MDD shows minimal improvement after 10 weekly sessions. The MOST appropriate treatment plan adjustment is:",
    "rationale": "Lack of adequate response after 8–12 sessions triggers a plan review: increase frequency, reconsider the approach, add medication augmentation. Continuing the same plan without adjustment when progress is stalled is a clinical error specifically tested on the NCMHCE.",
    "options": [
      {
        "id": "a",
        "text": "Continue the current plan — 10 sessions is insufficient to judge progress during a routine session",
        "isCorrect": false,
        "rationale": "\"Continue the current plan — 10 sessions is insufficient to j…\" is not what the item tests — Lack of adequate response after 8–12 sessions triggers a plan review: increase frequency, reconsider the approach, add medication augmentation."
      },
      {
        "id": "b",
        "text": "Terminate and refer since the client is not responding to treatment as clinicians typically apply it",
        "isCorrect": false,
        "rationale": "\"Terminate and refer since the client is not responding to tr…\" is not what the item tests — Lack of adequate response after 8–12 sessions triggers a plan review: increase frequency, reconsider the approach, add medication augmentation."
      },
      {
        "id": "c",
        "text": "Add a relaxation component to the existing treatment plan now as the reference material frames it",
        "isCorrect": false,
        "rationale": "\"Add a relaxation component to the existing treatment plan no…\" is not what the item tests — Lack of adequate response after 8–12 sessions triggers a plan review: increase frequency, reconsider the approach, add medication augmentation."
      },
      {
        "id": "d",
        "text": "Step up frequency or intensity, review the treatment approach, and consider a medication referral",
        "isCorrect": true,
        "rationale": "Lack of adequate response after 8–12 sessions triggers a plan review: increase frequency, reconsider the approach, add medication augmentation."
      }
    ]
  },

  {
    "id": "tp009",
    "domain": "treatment_planning",
    "subdomain": "LevelOfCare",
    "difficulty": "medium",
    "question": "ASAM criteria are used in substance use disorder treatment planning to:",
    "rationale": "ASAM criteria assess six dimensions: acute intoxication/withdrawal potential, biomedical conditions, emotional/behavioral/cognitive conditions, readiness to change, relapse/continued use potential, and recovery environment. Together they determine the least restrictive clinically appropriate level of care.",
    "options": [
      {
        "id": "a",
        "text": "Match the client to the appropriate level of care across six multidimensional assessment areas",
        "isCorrect": true,
        "rationale": "ASAM criteria assess six dimensions: acute intoxication/withdrawal potential, biomedical conditions, emotional/behavioral/cognitive conditions, readiness to change, relapse/continued use potential, and recovery environment."
      },
      {
        "id": "b",
        "text": "Determine exclusively whether medication-assisted treatment is indicated during a routine session",
        "isCorrect": false,
        "rationale": "\"Determine exclusively whether medication-assisted treatment …\" is not what the item tests — ASAM criteria assess six dimensions: acute intoxication/withdrawal potential, biomedical conditions, emotional/behavioral/cognitive conditions, rea"
      },
      {
        "id": "c",
        "text": "Diagnose the specific substance use disorder and its DSM-5 severity level as usually described",
        "isCorrect": false,
        "rationale": "\"Diagnose the specific substance use disorder and its DSM-5 s…\" is not what the item tests — ASAM criteria assess six dimensions: acute intoxication/withdrawal potential, biomedical conditions, emotional/behavioral/cognitive conditions, rea"
      },
      {
        "id": "d",
        "text": "Establish the minimum number of sessions insurance will authorize as clinicians typically apply it",
        "isCorrect": false,
        "rationale": "\"Establish the minimum number of sessions insurance will auth…\" is not what the item tests — ASAM criteria assess six dimensions: acute intoxication/withdrawal potential, biomedical conditions, emotional/behavioral/cognitive conditions, rea"
      }
    ]
  },

  {
    "id": "tp010",
    "domain": "treatment_planning",
    "subdomain": "ModalityMatching",
    "difficulty": "medium",
    "question": "A client presents with Panic Disorder. The treatment plan should specify which CBT protocol?",
    "rationale": "Panic disorder treatment: interoceptive exposure (Barlow) deliberately induces feared bodily sensations — racing heart, dizziness, shortness of breath — to break the catastrophic misinterpretation cycle. This is distinct from specific phobia (in-vivo graduated exposure to external stimuli) and OCD (ERP).",
    "options": [
      {
        "id": "a",
        "text": "Systematic desensitization to external feared situations only",
        "isCorrect": false,
        "rationale": "\"Systematic desensitization to external feared situations onl…\" is not what the item tests — Panic disorder treatment: interoceptive exposure (Barlow) deliberately induces feared bodily sensations — racing heart, dizziness, shortness of bre"
      },
      {
        "id": "b",
        "text": "Interoceptive exposure targeting fear of physical sensations",
        "isCorrect": true,
        "rationale": "Panic disorder treatment: interoceptive exposure (Barlow) deliberately induces feared bodily sensations — racing heart, dizziness, shortness of breath — to break the catastrophic misinterpretation cycle."
      },
      {
        "id": "c",
        "text": "Behavioral activation targeting avoidance and withdrawal now",
        "isCorrect": false,
        "rationale": "\"Behavioral activation targeting avoidance and withdrawal now\" is not what the item tests — Panic disorder treatment: interoceptive exposure (Barlow) deliberately induces feared bodily sensations — racing heart, dizziness, shortness of brea"
      },
      {
        "id": "d",
        "text": "ERP targeting obsessional triggers and compulsive rituals now",
        "isCorrect": false,
        "rationale": "\"ERP targeting obsessional triggers and compulsive rituals no…\" is not what the item tests — Panic disorder treatment: interoceptive exposure (Barlow) deliberately induces feared bodily sensations — racing heart, dizziness, shortness of bre"
      }
    ]
  },

  {
    "id": "tp011",
    "domain": "treatment_planning",
    "subdomain": "ModalityMatching",
    "difficulty": "hard",
    "question": "A 9-year-old presents with PTSD following documented chronic abuse. The evidence-based treatment plan should specify:",
    "rationale": "TF-CBT (Cohen, Mannarino, Deblinger) has the strongest evidence for childhood PTSD. It includes parallel caregiver components, direct trauma processing (trauma narrative), and conjoint child-caregiver sessions. Non-directive play therapy alone does not meet the evidence standard for PTSD.",
    "options": [
      {
        "id": "a",
        "text": "Non-directive play therapy until the child is ready to process the trauma",
        "isCorrect": false,
        "rationale": "\"Non-directive play therapy until the child is ready to verba…\" is not what the item tests — TF-CBT (Cohen, Mannarino, Deblinger) has the strongest evidence for childhood PTSD."
      },
      {
        "id": "b",
        "text": "EMDR as the only validated approach for children under 12 now",
        "isCorrect": false,
        "rationale": "\"EMDR as the only validated approach for children under 12 no…\" is not what the item tests — TF-CBT (Cohen, Mannarino, Deblinger) has the strongest evidence for childhood PTSD."
      },
      {
        "id": "c",
        "text": "Trauma-Focused CBT (TF-CBT) with parallel caregiver sessions",
        "isCorrect": true,
        "rationale": "TF-CBT (Cohen, Mannarino, Deblinger) has the strongest evidence for childhood PTSD."
      },
      {
        "id": "d",
        "text": "The standard adult CPT protocol adapted for the child’s developmental level",
        "isCorrect": false,
        "rationale": "\"The standard adult CPT protocol adapted for the child’s deve…\" is not what the item tests — TF-CBT (Cohen, Mannarino, Deblinger) has the strongest evidence for childhood PTSD."
      }
    ]
  },

  {
    "id": "tp012",
    "domain": "treatment_planning",
    "subdomain": "SessionFrequency",
    "difficulty": "medium",
    "question": "A client with Borderline Personality Disorder beginning DBT should be informed that standard DBT treatment requires:",
    "rationale": "Standard DBT (Linehan) has four required components: weekly individual therapy (targets hierarchy: life-threatening → therapy-interfering → quality-of-life behaviors), weekly skills group, between-session phone coaching, and therapist consultation team. Partial DBT (skills only) produces significantly weaker outcomes.",
    "options": [
      {
        "id": "a",
        "text": "Weekly individual sessions only, with skills group added if progress stalls as clinicians typically apply it",
        "isCorrect": false,
        "rationale": "\"Weekly individual sessions only, with skills group added if …\" is not what the item tests — Standard DBT (Linehan) has four required components: weekly individual therapy (targets hierarchy: life-threatening → therapy-interfering → quality"
      },
      {
        "id": "b",
        "text": "Twice-weekly individual sessions until crisis frequency decreases below a threshold during a routine session",
        "isCorrect": false,
        "rationale": "\"Twice-weekly individual sessions until crisis frequency decr…\" is not what the item tests — Standard DBT (Linehan) has four required components: weekly individual therapy (targets hierarchy: life-threatening → therapy-interfering → quality"
      },
      {
        "id": "c",
        "text": "Group skills training alone for mild BPD presentations during counseling as the reference material frames it",
        "isCorrect": false,
        "rationale": "\"Group skills training alone for mild BPD presentations durin…\" is not what the item tests — Standard DBT (Linehan) has four required components: weekly individual therapy (targets hierarchy: life-threatening → therapy-interfering → quality"
      },
      {
        "id": "d",
        "text": "Individual therapy, skills training group, between-session phone coaching, and therapist consultation team",
        "isCorrect": true,
        "rationale": "Standard DBT (Linehan) has four required components: weekly individual therapy (targets hierarchy: life-threatening → therapy-interfering → quality-of-life behaviors), weekly skills group, between-session phone coaching…"
      }
    ]
  },

  {
    "id": "tp013",
    "domain": "treatment_planning",
    "subdomain": "SessionFrequency",
    "difficulty": "medium",
    "question": "Increasing session frequency from weekly to twice-weekly is MOST clinically indicated when:",
    "rationale": "Frequency increases are clinically driven by: active suicidality requiring closer monitoring, recent crisis or hospitalization, insufficient progress at current intensity, or the demands of intensive trauma processing. Insurance coverage informs feasibility but is never the clinical indication.",
    "options": [
      {
        "id": "a",
        "text": "Acute safety risk, crisis instability, or insufficient progress warrants more intensive contact",
        "isCorrect": true,
        "rationale": "Frequency increases are clinically driven by: active suicidality requiring closer monitoring, recent crisis or hospitalization, insufficient progress at current intensity, or the demands of intensive trauma processing."
      },
      {
        "id": "b",
        "text": "The client’s insurance plan covers the additional sessions now as clinicians typically apply it",
        "isCorrect": false,
        "rationale": "\"The client’s insurance plan covers the additional sessions n…\" is not what the item tests — Frequency increases are clinically driven by: active suicidality requiring closer monitoring, recent crisis or hospitalization, insufficient progre"
      },
      {
        "id": "c",
        "text": "The client requests more support regardless of clinical presentation at the level the item tests",
        "isCorrect": false,
        "rationale": "\"The client requests more support regardless of clinical pres…\" is not what the item tests — Frequency increases are clinically driven by: active suicidality requiring closer monitoring, recent crisis or hospitalization, insufficient progre"
      },
      {
        "id": "d",
        "text": "This is standard practice for all clients beginning trauma processing work as usually described",
        "isCorrect": false,
        "rationale": "\"This is standard practice for all clients beginning trauma p…\" is not what the item tests — Frequency increases are clinically driven by: active suicidality requiring closer monitoring, recent crisis or hospitalization, insufficient progre"
      }
    ]
  },

  {
    "id": "tp014",
    "domain": "treatment_planning",
    "subdomain": "ProgressMonitoring",
    "difficulty": "medium",
    "question": "Routine outcome monitoring (ROM) in treatment planning involves:",
    "rationale": "ROM (Lambert, PCOMS): brief validated measures (PHQ-9, ORS/SRS) administered each session provide real-time feedback. Research shows clinicians are often unaware when clients are deteriorating without ROM — and feedback loops significantly improve outcomes by enabling earlier plan adjustment.",
    "options": [
      {
        "id": "a",
        "text": "Reviewing progress notes at the end of each calendar quarter as the reference material frames it",
        "isCorrect": false,
        "rationale": "\"Reviewing progress notes at the end of each calendar quarter…\" is not what the item tests — ROM (Lambert, PCOMS): brief validated measures (PHQ-9, ORS/SRS) administered each session provide real-time feedback."
      },
      {
        "id": "b",
        "text": "Systematically tracking client-reported outcomes at each session to guide treatment adjustments",
        "isCorrect": true,
        "rationale": "ROM (Lambert, PCOMS): brief validated measures (PHQ-9, ORS/SRS) administered each session provide real-time feedback."
      },
      {
        "id": "c",
        "text": "Conducting formal diagnostic reassessment every six months now as clinicians typically apply it",
        "isCorrect": false,
        "rationale": "\"Conducting formal diagnostic reassessment every six months n…\" is not what the item tests — ROM (Lambert, PCOMS): brief validated measures (PHQ-9, ORS/SRS) administered each session provide real-time feedback."
      },
      {
        "id": "d",
        "text": "Administering the full intake battery at the treatment midpoint as clinicians typically apply it",
        "isCorrect": false,
        "rationale": "\"Administering the full intake battery at the treatment midpo…\" is not what the item tests — ROM (Lambert, PCOMS): brief validated measures (PHQ-9, ORS/SRS) administered each session provide real-time feedback."
      }
    ]
  },

  {
    "id": "tp015",
    "domain": "treatment_planning",
    "subdomain": "ProgressMonitoring",
    "difficulty": "hard",
    "question": "A client’s PHQ-9 scores have remained unchanged after 8 sessions of CBT for MDD. The FIRST treatment plan adjustment the counselor should consider is:",
    "rationale": "Lack of progress triggers a systematic review before major changes: Is the formulation accurate? Are there maintaining factors not addressed (sleep, substance use, medical)? Is the client engaging with between-session work? Alliance issues? Is medication warranted? Switching orientations entirely before this review is premature.",
    "options": [
      {
        "id": "a",
        "text": "Switching to a completely different theoretical orientation by counselors as the reference material frames it",
        "isCorrect": false,
        "rationale": "\"Switching to a completely different theoretical orientation …\" is not what the item tests — Lack of progress triggers a systematic review before major changes: Is the formulation accurate?"
      },
      {
        "id": "b",
        "text": "Transferring the client to a more experienced clinician during counseling as the reference material frames it",
        "isCorrect": false,
        "rationale": "\"Transferring the client to a more experienced clinician duri…\" is not what the item tests — Lack of progress triggers a systematic review before major changes: Is the formulation accurate?"
      },
      {
        "id": "c",
        "text": "Reviewing the case conceptualization, assessing engagement barriers, and considering medication augmentation",
        "isCorrect": true,
        "rationale": "Lack of progress triggers a systematic review before major changes: Is the formulation accurate?"
      },
      {
        "id": "d",
        "text": "Adding relaxation training as a supplementary component during counseling as the reference material frames it",
        "isCorrect": false,
        "rationale": "\"Adding relaxation training as a supplementary component duri…\" is not what the item tests — Lack of progress triggers a systematic review before major changes: Is the formulation accurate?"
      }
    ]
  },

  {
    "id": "tp016",
    "domain": "treatment_planning",
    "subdomain": "DischargeCriteria",
    "difficulty": "easy",
    "question": "Discharge criteria in a treatment plan should be:",
    "rationale": "Discharge criteria defined at the outset give both client and counselor a shared target. They typically include symptom thresholds (e.g., PHQ-9 < 5), functional indicators (return to work, rebuilt relationships), and skill mastery (client applies techniques independently). Insurance authorization is administrative, not a clinical criterion.",
    "options": [
      {
        "id": "a",
        "text": "Left open-ended to allow flexibility as treatment progresses at the level the item tests now",
        "isCorrect": false,
        "rationale": "\"Left open-ended to allow flexibility as treatment progresses…\" is not what the item tests — Discharge criteria defined at the outset give both client and counselor a shared target."
      },
      {
        "id": "b",
        "text": "Set after the client achieves at least 80% symptom reduction at the level the item tests",
        "isCorrect": false,
        "rationale": "\"Set after the client achieves at least 80% symptom reduction…\" is not what the item tests — Discharge criteria defined at the outset give both client and counselor a shared target."
      },
      {
        "id": "c",
        "text": "Determined by the insurance company’s authorized number of sessions as usually described",
        "isCorrect": false,
        "rationale": "\"Determined by the insurance company’s authorized number of s…\" is not what the item tests — Discharge criteria defined at the outset give both client and counselor a shared target."
      },
      {
        "id": "d",
        "text": "Defined at the outset as observable, measurable indicators that goals have been achieved",
        "isCorrect": true,
        "rationale": "Discharge criteria defined at the outset give both client and counselor a shared target."
      }
    ]
  },

  {
    "id": "tp017",
    "domain": "treatment_planning",
    "subdomain": "DischargeCriteria",
    "difficulty": "medium",
    "question": "A client with panic disorder has had no panic attacks for 6 weeks and reports confidence managing symptoms independently. The BEST treatment plan decision is:",
    "rationale": "When discharge criteria are met: taper rather than abruptly end. Moving from weekly to biweekly to monthly builds confidence in independent functioning. Relapse prevention — identifying early warning signs, reviewing coping strategies, clarifying when to return — is required for anxiety disorder termination.",
    "options": [
      {
        "id": "a",
        "text": "Begin tapering sessions, review relapse prevention, and establish a plan for returning if needed",
        "isCorrect": true,
        "rationale": "When discharge criteria are met: taper rather than abruptly end."
      },
      {
        "id": "b",
        "text": "Terminate immediately to prevent the development of therapeutic dependency during a routine session",
        "isCorrect": false,
        "rationale": "\"Terminate immediately to prevent the development of therapeu…\" is not what the item tests — When discharge criteria are met: taper rather than abruptly end."
      },
      {
        "id": "c",
        "text": "Continue at the same frequency indefinitely to prevent any relapse as clinicians typically apply it",
        "isCorrect": false,
        "rationale": "\"Continue at the same frequency indefinitely to prevent any r…\" is not what the item tests — When discharge criteria are met: taper rather than abruptly end."
      },
      {
        "id": "d",
        "text": "Switch to open-ended maintenance therapy focused on general wellbeing at the level the item tests",
        "isCorrect": false,
        "rationale": "\"Switch to open-ended maintenance therapy focused on general …\" is not what the item tests — When discharge criteria are met: taper rather than abruptly end."
      }
    ]
  },

  {
    "id": "tp018",
    "domain": "treatment_planning",
    "subdomain": "CollaborativePlanning",
    "difficulty": "medium",
    "question": "Collaborative treatment planning — involving the client in goal-setting — is MOST important because:",
    "rationale": "Collaborative goal-setting increases client ownership, aligns treatment with the client’s own values and priorities, and strengthens alliance. Goal consensus research consistently shows that goals clients perceive as their own — not imposed by the clinician — predict stronger engagement and better outcomes.",
    "options": [
      {
        "id": "a",
        "text": "Clinicians lack sufficient expertise to set goals without client input at the level the item tests",
        "isCorrect": false,
        "rationale": "\"Clinicians lack sufficient expertise to set goals without cl…\" is not what the item tests — Collaborative goal-setting increases client ownership, aligns treatment with the client’s own values and priorities, and strengthens alliance."
      },
      {
        "id": "b",
        "text": "Client-generated goals are associated with stronger therapeutic alliance, motivation, and outcomes",
        "isCorrect": true,
        "rationale": "Collaborative goal-setting increases client ownership, aligns treatment with the client’s own values and priorities, and strengthens alliance."
      },
      {
        "id": "c",
        "text": "It satisfies managed care and documentation requirements today as the reference material frames it now",
        "isCorrect": false,
        "rationale": "\"It satisfies managed care and documentation requirements tod…\" is not what the item tests — Collaborative goal-setting increases client ownership, aligns treatment with the client’s own values and priorities, and strengthens alliance."
      },
      {
        "id": "d",
        "text": "It shifts clinical responsibility to the client if goals are not achieved during a routine session",
        "isCorrect": false,
        "rationale": "\"It shifts clinical responsibility to the client if goals are…\" is not what the item tests — Collaborative goal-setting increases client ownership, aligns treatment with the client’s own values and priorities, and strengthens alliance."
      }
    ]
  },

  {
    "id": "tp019",
    "domain": "treatment_planning",
    "subdomain": "CulturalTreatmentPlanning",
    "difficulty": "hard",
    "question": "When developing a treatment plan with a client from a collectivist cultural background, the counselor MOST importantly should:",
    "rationale": "Culturally responsive treatment planning adapts both goal content and structure to the client’s cultural context. In collectivist cultures, goals framed around family harmony, community contribution, or relational functioning may be more motivating and clinically meaningful than individually-framed goals. The counselor explores this rather than assumes.",
    "options": [
      {
        "id": "a",
        "text": "Avoid all family involvement to maintain individual client confidentiality as clinicians typically apply it",
        "isCorrect": false,
        "rationale": "\"Avoid all family involvement to maintain individual client c…\" is not what the item tests — Culturally responsive treatment planning adapts both goal content and structure to the client’s cultural context."
      },
      {
        "id": "b",
        "text": "Apply Western individualistic goal frameworks since these are empirically validated as usually described",
        "isCorrect": false,
        "rationale": "\"Apply Western individualistic goal frameworks since these ar…\" is not what the item tests — Culturally responsive treatment planning adapts both goal content and structure to the client’s cultural context."
      },
      {
        "id": "c",
        "text": "Explore whether including family or community in goals and interventions aligns with the client’s values",
        "isCorrect": true,
        "rationale": "Culturally responsive treatment planning adapts both goal content and structure to the client’s cultural context."
      },
      {
        "id": "d",
        "text": "Refer to a counselor from the same cultural background for more appropriate care during a routine session",
        "isCorrect": false,
        "rationale": "\"Refer to a counselor from the same cultural background for m…\" is not what the item tests — Culturally responsive treatment planning adapts both goal content and structure to the client’s cultural context."
      }
    ]
  },

  {
    "id": "tp020",
    "domain": "treatment_planning",
    "subdomain": "StepDownPlanning",
    "difficulty": "medium",
    "question": "A client is being discharged from inpatient psychiatric hospitalization. The MOST critical component of the step-down plan is:",
    "rationale": "The post-discharge period is the highest-risk window for suicide and psychiatric readmission. A confirmed follow-up appointment within 7 days (ideally 24–72 hours) is the single strongest predictor of successful transition. Without a scheduled appointment, the step-down plan is clinically incomplete regardless of other components.",
    "options": [
      {
        "id": "a",
        "text": "The client’s verbal agreement to contact the inpatient unit if symptoms worsen during counseling",
        "isCorrect": false,
        "rationale": "\"The client’s verbal agreement to contact the inpatient unit …\" is not what the item tests — The post-discharge period is the highest-risk window for suicide and psychiatric readmission."
      },
      {
        "id": "b",
        "text": "A written summary of the inpatient treatment provided to the client at the level the item tests",
        "isCorrect": false,
        "rationale": "\"A written summary of the inpatient treatment provided to the…\" is not what the item tests — The post-discharge period is the highest-risk window for suicide and psychiatric readmission."
      },
      {
        "id": "c",
        "text": "A 30-day medication supply with written administration instructions at the level the item tests",
        "isCorrect": false,
        "rationale": "\"A 30-day medication supply with written administration instr…\" is not what the item tests — The post-discharge period is the highest-risk window for suicide and psychiatric readmission."
      },
      {
        "id": "d",
        "text": "A confirmed outpatient appointment within 7 days of discharge, with crisis resources identified",
        "isCorrect": true,
        "rationale": "The post-discharge period is the highest-risk window for suicide and psychiatric readmission."
      }
    ]
  },
];
