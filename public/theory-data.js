// theory-data.js — Counseling Theories & Pioneers Reference
// For use with theory.html
const THEORY_DATA = [
  {
    cat: 'Cognitive-Behavioral',
    items: [
      {
        name: 'Cognitive Therapy (CT / CBT)',
        founder: 'Aaron Beck',
        core: 'Psychological distress is maintained by distorted automatic thoughts, intermediate beliefs, and core beliefs. Changing thinking changes emotion and behavior.',
        keyTerms: ['Cognitive triad', 'Automatic thoughts', 'Schemas', 'Socratic questioning', 'Collaborative empiricism'],
        techniques: ['Thought records', 'Behavioral experiments', 'Behavioral activation', 'Psychoeducation'],
        examTip: 'Beck\u2019s cognitive triad = negative views of self, world, and future. Schemas are the deepest level. Socratic questioning \u2260 direct disputation.'
      },
      {
        name: 'Rational Emotive Behavior Therapy (REBT)',
        founder: 'Albert Ellis',
        core: 'Activating events don\u2019t cause emotional consequences \u2014 irrational beliefs (absolutistic demands) do. Dispute the musts, shoulds, and have-tos.',
        keyTerms: ['ABC model', 'Musturbation', 'Awfulizing', 'Low frustration tolerance', 'Unconditional self-acceptance'],
        techniques: ['ABCDE disputation', 'Shame-attacking exercises', 'Rational emotive imagery', 'Psychoeducation'],
        examTip: 'A does not cause C \u2014 B does. Demandingness is primary; awfulizing, LFT, and global rating are derivatives. USA \u2260 high self-esteem.'
      },
      {
        name: 'Dialectical Behavior Therapy (DBT)',
        founder: 'Marsha Linehan',
        core: 'Synthesizes acceptance and change for clients with emotion dysregulation. Biological sensitivity + invalidating environment = BPD (biosocial model).',
        keyTerms: ['Biosocial model', 'Dialectical', 'Validation', 'Radical acceptance', 'Chain analysis'],
        techniques: ['Individual therapy', 'Skills group', 'Phone coaching', 'TIPP', 'DEARMAN/GIVE/FAST'],
        examTip: 'Standard DBT = 4 components. "Dialectical" = acceptance AND change. 4 modules: mindfulness, distress tolerance, emotion regulation, interpersonal effectiveness.'
      },
      {
        name: 'Acceptance and Commitment Therapy (ACT)',
        founder: 'Steven Hayes',
        core: 'Psychological inflexibility (experiential avoidance + cognitive fusion) drives suffering. Build flexibility through acceptance, defusion, values, and committed action.',
        keyTerms: ['Psychological flexibility', 'Experiential avoidance', 'Cognitive defusion', 'Self-as-context', 'Values vs. goals'],
        techniques: ['Leaves on a stream', 'Defusion exercises', 'Values clarification', 'Committed action', 'Acceptance metaphors'],
        examTip: 'Defusion \u2260 disputing thoughts \u2014 changes the relationship with thoughts. Values are directions, not endpoints. ACT = third-wave behavioral.'
      },
      {
        name: 'Mindfulness-Based Stress Reduction (MBSR)',
        founder: 'Jon Kabat-Zinn',
        core: 'Deliberate, non-judgmental attention to present-moment experience reduces stress and suffering. Mindfulness is not relaxation \u2014 it is aware acceptance.',
        keyTerms: ['Present-moment awareness', 'Non-judgment', 'Body scan', 'Mindful movement', '8-week program'],
        techniques: ['Body scan', 'Sitting meditation', 'Mindful eating', 'STOP technique'],
        examTip: 'MBSR \u2260 relaxation. Non-judgmental observation is the key qualifier. Kabat-Zinn \u2014 not Hayes (ACT) or Linehan (DBT) \u2014 developed MBSR.'
      }
    ]
  },
  {
    cat: 'Humanistic / Existential',
    items: [
      {
        name: 'Person-Centered Therapy (PCT)',
        founder: 'Carl Rogers',
        core: 'Humans have an innate actualizing tendency. Conditions of worth create incongruence. Three core conditions (congruence, UPR, empathy) are necessary and sufficient for change.',
        keyTerms: ['Actualizing tendency', 'Conditions of worth', 'Incongruence', 'Unconditional positive regard', 'Congruence'],
        techniques: ['Reflective listening', 'Empathic following', 'Authentic presence', 'Non-directive responding'],
        examTip: 'Rogers originally called it "nondirective." The shift to "client-centered" emphasized client self-direction. Conditions are necessary AND sufficient \u2014 no techniques needed.'
      },
      {
        name: 'Gestalt Therapy',
        founder: 'Fritz Perls (with Laura Perls & Paul Goodman)',
        core: 'Awareness of present-moment experience enables contact and growth. Unfinished business, contact disruptions, and the here-and-now are central.',
        keyTerms: ['Here-and-now', 'Unfinished business', 'Contact', 'Retroflection', 'Introjection'],
        techniques: ['Empty chair', 'Two-chair', 'Exaggeration experiment', 'Staying with the feeling', 'Body awareness'],
        examTip: 'Empty chair = dialogue with someone or a part of self. Two-chair = dialogue between two internal parts. Retroflection = turning impulse back on self.'
      },
      {
        name: 'Existential Therapy',
        founder: 'Rollo May, Irvin Yalom, Viktor Frankl',
        core: 'Confronting the four ultimate concerns (death, freedom, isolation, meaninglessness) is the source of existential anxiety and the pathway to authentic living.',
        keyTerms: ['Ultimate concerns', 'Existential anxiety', 'Authenticity', 'Bad faith', 'Will to meaning'],
        techniques: ['Exploration of meaning', 'Confronting givens', 'Authentic relationship', 'Paradoxical intention (Frankl)'],
        examTip: 'Yalom\u2019s 4 givens: death, freedom, isolation, meaninglessness. Frankl\u2019s logotherapy = will to meaning. Paradoxical intention = humorously intend what you fear.'
      },
      {
        name: 'Logotherapy',
        founder: 'Viktor Frankl',
        core: 'The primary human motivation is will to meaning, not pleasure (Freud) or power (Adler). Meaning can be found even in unavoidable suffering.',
        keyTerms: ['Will to meaning', 'Existential vacuum', 'Noogenic neurosis', 'Dereflection', 'Tragic triad'],
        techniques: ['Paradoxical intention', 'Dereflection', 'Socratic dialogue', 'Meaning exploration'],
        examTip: 'Frankl survived Auschwitz \u2014 his experience grounded the theory. "Man\u2019s Search for Meaning" (1946). Paradoxical intention breaks the anticipatory anxiety cycle.'
      }
    ]
  },
  {
    cat: 'Psychodynamic',
    items: [
      {
        name: 'Psychoanalysis',
        founder: 'Sigmund Freud',
        core: 'Unconscious conflicts (primarily sexual and aggressive) drive behavior. The structural model (id/ego/superego) and psychosexual stages explain personality and pathology.',
        keyTerms: ['Unconscious', 'Id/Ego/Superego', 'Defense mechanisms', 'Transference', 'Free association'],
        techniques: ['Free association', 'Dream analysis', 'Transference interpretation', 'Resistance analysis'],
        examTip: 'Structural model: id (pleasure principle), ego (reality principle), superego (moral). Psychosexual stages: oral, anal, phallic, latency, genital. Oedipus = phallic stage.'
      },
      {
        name: 'Object Relations Theory',
        founder: 'Melanie Klein, Donald Winnicott, Ronald Fairbairn, Otto Kernberg',
        core: 'Internal representations of self and other (objects) formed in early relationships serve as templates for all subsequent relationships. The "good enough" mother enables healthy development.',
        keyTerms: ['Internal objects', 'Good enough mother', 'Transitional object', 'Splitting', 'Projective identification'],
        techniques: ['Analysis of relational patterns', 'Exploration of early object relations', 'Countertransference use'],
        examTip: 'Winnicott: "good enough mother," transitional objects. Kernberg: splitting in BPD. Object = mental representation of a person, not an inanimate thing.'
      },
      {
        name: 'Ego Psychology',
        founder: 'Anna Freud, Erik Erikson, Heinz Hartmann',
        core: 'The ego has autonomous functions beyond just managing id impulses. Development occurs across the lifespan (Erikson\u2019s 8 psychosocial stages).',
        keyTerms: ['Defense mechanisms', 'Psychosocial stages', 'Epigenesis', 'Identity vs. role confusion', 'Integrity vs. despair'],
        techniques: ['Defense analysis', 'Ego strengthening', 'Life review', 'Developmental assessment'],
        examTip: 'Erikson\u2019s 8 stages span the lifespan (trust vs. mistrust through integrity vs. despair). Each stage has a psychosocial crisis and a syntonic/dystonic pole.'
      },
      {
        name: 'Attachment Theory',
        founder: 'John Bowlby, Mary Ainsworth',
        core: 'Humans have an innate need to form attachment bonds. Early attachment quality forms internal working models that shape all subsequent relationships.',
        keyTerms: ['Internal working models', 'Secure base', 'Separation anxiety', 'Strange Situation', 'Attachment styles'],
        techniques: ['Attachment-informed exploration', 'Earned security work', 'Corrective emotional experience'],
        examTip: 'Ainsworth\u2019s Strange Situation: secure, anxious/ambivalent, avoidant, disorganized. Bowlby = ethological, biological basis for attachment. IWMs shape adult relationships.'
      }
    ]
  },
  {
    cat: 'Behavioral',
    items: [
      {
        name: 'Classical Conditioning',
        founder: 'Ivan Pavlov (applied clinically by John Watson, Joseph Wolpe)',
        core: 'Pairing a neutral stimulus with an unconditioned stimulus produces a conditioned response. Basis for understanding and treating phobias and anxiety.',
        keyTerms: ['CS/UCS/UCR/CR', 'Extinction', 'Stimulus generalization', 'Reciprocal inhibition', 'Counterconditioning'],
        techniques: ['Systematic desensitization', 'Exposure therapy', 'Flooding/implosion', 'Aversion therapy'],
        examTip: 'Systematic desensitization (Wolpe): relaxation training \u2192 fear hierarchy \u2192 graduated exposure. Reciprocal inhibition = relaxation and anxiety cannot co-occur.'
      },
      {
        name: 'Operant Conditioning',
        founder: 'B.F. Skinner (applied by Bandura, Kazdin)',
        core: 'Behavior is shaped by its consequences. Reinforcement increases behavior; punishment decreases it. Schedules of reinforcement determine response strength.',
        keyTerms: ['Positive/negative reinforcement', 'Punishment', 'Extinction', 'Shaping', 'Token economy'],
        techniques: ['Token economies', 'Behavioral contracts', 'Contingency management', 'DRI/DRO/DRA', 'Chaining'],
        examTip: 'Negative reinforcement = removing aversive stimulus (not punishment). DRI = reinforce behavior physically incompatible with the problem behavior. Variable ratio = most resistant to extinction.'
      },
      {
        name: 'Social Learning Theory',
        founder: 'Albert Bandura',
        core: 'Learning occurs through observation, imitation, and self-efficacy beliefs. Behavior, person, and environment interact reciprocally (triadic reciprocal determinism).',
        keyTerms: ['Modeling', 'Self-efficacy', 'Vicarious reinforcement', 'Triadic reciprocal determinism', 'BASIC ID'],
        techniques: ['Behavioral rehearsal', 'Modeling', 'Role play', 'Self-efficacy enhancement', 'Assertiveness training'],
        examTip: 'Bandura: Bobo doll study, self-efficacy (most important predictor of behavior change). Self-efficacy \u2260 self-esteem. Lazarus extended to Multimodal Therapy (BASIC ID).'
      }
    ]
  },
  {
    cat: 'Brief / Postmodern',
    items: [
      {
        name: 'Solution-Focused Brief Therapy (SFBT)',
        founder: 'Steve de Shazer & Insoo Kim Berg',
        core: 'Problems are not the same as solutions. Focus on exceptions, client strengths, and a preferred future rather than problem analysis. Language constructs reality.',
        keyTerms: ['Miracle question', 'Exception questions', 'Scaling questions', 'Compliments', 'Minimum intervention'],
        techniques: ['Miracle question', 'Exception questions', 'Scaling (0\u201310)', 'Compliments', 'Coping questions'],
        examTip: 'Miracle question \u2260 scaling. Scaling tracks progress and identifies next small steps. Exceptions contain solution information. SFBT = social constructionist philosophy.'
      },
      {
        name: 'Narrative Therapy',
        founder: 'Michael White & David Epston',
        core: 'People live by stories. Problem-saturated stories constrain identity. Re-authoring preferred narratives through externalization and unique outcomes creates new possibilities.',
        keyTerms: ['Externalization', 'Unique outcomes', 'Re-authoring', 'Definitional ceremonies', 'Dominant story'],
        techniques: ['Externalization', 'Mapping influence', 'Re-membering', 'Definitional ceremonies', 'Letters'],
        examTip: '"The person is not the problem; the problem is the problem." Externalization separates identity from problem. Unique outcomes are exceptions to the dominant story.'
      },
      {
        name: 'Reality Therapy / Choice Theory',
        founder: 'William Glasser',
        core: 'All behavior is chosen to meet five basic needs: survival, love/belonging, power/achievement, freedom, and fun. The WDEP system guides change.',
        keyTerms: ['Basic needs', 'Quality world', 'Total behavior', 'WDEP', 'Effective planning'],
        techniques: ['WDEP (Wants, Doing, Evaluation, Planning)', 'Self-evaluation', 'Action planning'],
        examTip: 'WDEP (Wubbolding): Wants, Doing, Evaluation, Planning. Total behavior = acting + thinking + feeling + physiology. Only acting and thinking are directly controllable.'
      },
      {
        name: 'Motivational Interviewing (MI)',
        founder: 'William Miller & Stephen Rollnick',
        core: 'A collaborative, person-centered style for strengthening motivation and commitment to change. Ambivalence is normal; change talk is elicited, not installed.',
        keyTerms: ['OARS', 'Change talk', 'Sustain talk', 'Ambivalence', 'Spirit: PACE'],
        techniques: ['Open questions', 'Affirmations', 'Reflections', 'Summaries', 'Decisional balance'],
        examTip: 'MI Spirit = Partnership, Acceptance (x4), Compassion, Evocation. OARS = Open questions, Affirmations, Reflections, Summaries. Rolling with resistance \u2260 arguing.'
      }
    ]
  },
  {
    cat: 'Family Systems',
    items: [
      {
        name: 'Structural Family Therapy',
        founder: 'Salvador Minuchin',
        core: 'Family problems arise from dysfunctional structures: poor boundaries (enmeshment/disengagement), weak hierarchy, and misaligned subsystems. Restructuring heals.',
        keyTerms: ['Subsystems', 'Boundaries', 'Enmeshment/disengagement', 'Hierarchy', 'Joining'],
        techniques: ['Joining', 'Enactment', 'Reframing', 'Boundary-making', 'Unbalancing'],
        examTip: 'Enactment = have family interact in session (don\u2019t just talk about it). Joining comes before restructuring. Enmeshed = diffuse boundaries; disengaged = rigid boundaries.'
      },
      {
        name: 'Strategic Family Therapy',
        founder: 'Jay Haley & Cloe Madanes',
        core: 'Problems are maintained by repetitive, dysfunctional interaction sequences. Directive, paradoxical interventions disrupt patterns without requiring insight.',
        keyTerms: ['Directives', 'Paradoxical intervention', 'Prescribing the symptom', 'Ordeal therapy', 'Reframing'],
        techniques: ['Prescribing the symptom', 'Ordeals', 'Pretend techniques', 'Directives', 'Restraining change'],
        examTip: 'Strategic \u2260 structural. Strategic uses directives and paradox; structural uses enactment and boundary-making. Both are problem-focused and therapist-directed.'
      },
      {
        name: 'Bowenian Family Systems',
        founder: 'Murray Bowen',
        core: 'Differentiation of self (maintaining individuality in emotional contact with others) is the cornerstone of mental health. Triangles are the basic stable unit.',
        keyTerms: ['Differentiation of self', 'Triangulation', 'Nuclear family emotional system', 'Multigenerational transmission', 'Emotional cutoff'],
        techniques: ['Genogram', 'Coach role', 'Differentiating from family of origin', 'Detriangulation'],
        examTip: 'Differentiation \u2260 separation/individuation. High differentiation = stays connected and non-reactive. Genogram maps 3+ generations. Therapist as coach, not participant.'
      },
      {
        name: 'Experiential/Humanistic Family Therapy',
        founder: 'Virginia Satir',
        core: 'Low self-esteem and dysfunctional communication patterns drive family dysfunction. The goal is authentic, congruent communication and higher self-esteem for all members.',
        keyTerms: ['Communication stances', 'Self-esteem', 'Family sculpting', 'Congruent communication', 'Survival stances'],
        techniques: ['Family sculpting', 'Parts parties', 'Temperature reading', 'Ropes exercise'],
        examTip: 'Satir\u2019s 4 dysfunctional stances: Placater, Blamer, Super-Reasonable, Irrelevant. Congruent = 5th stance. Family sculpting = physical representation of family dynamics.'
      },
      {
        name: 'Emotionally Focused Therapy (EFT)',
        founder: 'Susan Johnson',
        core: 'Adult romantic bonds are attachment relationships. Negative interaction cycles (pursuer-withdrawer) are driven by underlying attachment fears. Restructure interaction to create secure bonding events.',
        keyTerms: ['Attachment bonds', 'Negative cycle', 'Pursuer-withdrawer', 'Hold me tight', 'Bonding events'],
        techniques: ['Tracking negative cycles', 'Accessing primary emotions', 'Restructuring interactions', 'Enactment', 'Consolidation'],
        examTip: 'EFT = couples therapy grounded in attachment theory (Bowlby). 9-step, 3-phase model. Pursuer-withdrawer is the most common negative cycle. Bonding events create earned security.'
      }
    ]
  },
  {
    cat: 'Adlerian',
    items: [
      {
        name: 'Individual Psychology (Adlerian)',
        founder: 'Alfred Adler',
        core: 'Humans are primarily social, goal-directed, and motivated by striving for superiority (mastery). Social interest is the hallmark of mental health. Lifestyle is the core personality pattern.',
        keyTerms: ['Social interest', 'Striving for superiority', 'Inferiority feelings', 'Lifestyle', 'Basic mistakes'],
        techniques: ['Lifestyle assessment', 'Early recollections', 'Encouragement', 'The question', 'Acting "as if"'],
        examTip: 'Social interest (Gemeinschaft) = mental health marker. Striving for superiority \u2260 wanting to dominate others. Early recollections reveal lifestyle. "The question": if you didn\u2019t have this symptom, what would be different?'
      },
      {
        name: 'Dreikurs & Mistaken Goals of Misbehavior',
        founder: 'Rudolf Dreikurs',
        core: 'Children misbehave to achieve one of four mistaken goals: attention, power, revenge, or display of inadequacy. Identifying the goal guides the intervention.',
        keyTerms: ['Mistaken goals', 'Natural consequences', 'Logical consequences', 'Encouragement', 'Democratic parenting'],
        techniques: ['Identifying the mistaken goal', 'Natural and logical consequences', 'Encouragement vs. praise', 'Family council'],
        examTip: '4 mistaken goals: attention, power, revenge, display of inadequacy. Each requires a different response. Encouragement \u2260 praise \u2014 encouragement focuses on effort and belonging.'
      }
    ]
  },
  {
    cat: 'Skills Frameworks',
    items: [
      {
        name: 'Microskills Hierarchy (Ivey)',
        founder: 'Allen Ivey',
        core: 'Counseling competence builds from basic attending skills upward through reflecting, influencing, and focusing. Cultural intentionality is foundational.',
        keyTerms: ['SOLER/SOLAR', 'Minimal encouragers', 'Paraphrase vs. reflection', 'Focusing', 'Influencing skills'],
        techniques: ['Attending behavior (SOLER)', 'Open/closed questions', 'Reflection of feeling', 'Confrontation', 'Focusing'],
        examTip: 'SOLER: Squarely, Open posture, Lean in, Eye contact, Relax. Paraphrase = content; reflection = feeling. "Why" questions are least useful \u2014 prompt defensiveness.'
      },
      {
        name: 'The Skilled Helper (Egan)',
        founder: 'Gerard Egan',
        core: 'Three-stage model: (1) Current picture \u2014 what\u2019s going on? (2) Preferred picture \u2014 what do you want? (3) Getting there \u2014 how do you get what you want?',
        keyTerms: ['Three-stage model', 'Immediacy', 'Advanced empathy', 'Blind spots', 'Leverage'],
        techniques: ['Basic empathy', 'Advanced empathy', 'Confrontation', 'Immediacy', 'Self-disclosure'],
        examTip: 'Egan: immediacy = discussing here-and-now of the therapeutic relationship. Advanced empathy = reflecting the edge of awareness (what client implies but hasn\u2019t said). Stage 3 = action planning.'
      },
      {
        name: 'Carkhuff Empathy Scale',
        founder: 'Robert Carkhuff',
        core: 'Empathy can be measured on a 1\u20135 scale. Level 3 is minimally facilitative (interchangeable with client\u2019s expression). Levels 4\u20135 add depth beyond what was expressed.',
        keyTerms: ['Level 1\u20135', 'Interchangeable response', 'Additive empathy', 'Subtractive response', 'Core conditions'],
        techniques: ['Empathic responding', 'Matching feeling word to intensity', 'Tentative phrasing'],
        examTip: 'Level 3 = baseline (interchangeable). Levels 1\u20132 subtract/distort. Levels 4\u20135 add depth. Carkhuff operationalized Rogers\u2019 conditions into measurable response levels.'
      },
      {
        name: 'Stages of Change (Transtheoretical Model)',
        founder: 'James Prochaska & Carlo DiClemente',
        core: 'Change is a process through stages: precontemplation, contemplation, preparation, action, maintenance, and (sometimes) termination. Interventions should match the stage.',
        keyTerms: ['Precontemplation', 'Contemplation', 'Preparation', 'Action', 'Maintenance'],
        techniques: ['Consciousness raising (pre-C)', 'Decisional balance (contemplation)', 'Goal-setting (preparation)', 'Relapse prevention (maintenance)'],
        examTip: 'Contemplation = ambivalence (knows problem, not committed to change). Decisional balance works in contemplation, backfires in precontemplation. MI pairs best with precontemplation/contemplation.'
      }
    ]
  },
  {
    cat: 'Multicultural & Social Justice',
    items: [
      {
        name: 'Multicultural Counseling Competencies (MCC)',
        founder: 'Sue, Arredondo, McDavis; updated by Ratts et al. (MSJCC 2016)',
        core: 'Culturally competent counselors develop awareness of their own biases, knowledge of diverse worldviews, and skills to work with diverse populations across power dimensions.',
        keyTerms: ['Awareness', 'Knowledge', 'Skills', 'Action', 'Privilege and oppression'],
        techniques: ['Cultural self-assessment', 'Community involvement', 'Advocacy', 'Culturally adapted interventions'],
        examTip: 'MSJCC adds social justice and advocacy to the original MCC. 4 competency domains: counselor self-awareness, client worldview, counseling relationship, counseling and advocacy interventions.'
      },
      {
        name: 'Cultural Humility',
        founder: 'Melanie Tervalon & Jann Murray-Garc\xEDa',
        core: 'An ongoing, lifelong process of self-reflection and critique \u2014 not an achieved state. Requires acknowledging power imbalances and committing to institutional advocacy.',
        keyTerms: ['Lifelong learning', 'Self-reflection', 'Power imbalance', 'Institutional accountability', 'Other-oriented posture'],
        techniques: ['Reflective practice', 'Power analysis', 'Community partnership', 'Asking rather than assuming'],
        examTip: 'Humility \u2260 competence. Competence implies achieved end-state; humility implies ongoing process. Cultural humility requires power-consciousness that cultural competence alone may not.'
      },
      {
        name: 'Feminist Therapy',
        founder: 'Multiple founders (Jean Baker Miller, Carolyn Enns, Laura Brown)',
        core: 'The personal is political. Mental health problems often reflect social and systemic oppression, not individual pathology. Therapy should empower and be egalitarian.',
        keyTerms: ['The personal is political', 'Egalitarian relationship', 'Empowerment', 'Gender analysis', 'Social change'],
        techniques: ['Power analysis', 'Consciousness-raising', 'Social action', 'Reframing as political', 'Self-disclosure'],
        examTip: 'Feminist therapy is not only for women \u2014 it applies to all marginalized identities. The egalitarian relationship and social analysis of symptoms distinguish it from other humanistic approaches.'
      }
    ]
  }
];
