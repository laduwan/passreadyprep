// ============================================================================
// seed-cases.js — Hand-authored dual-mode NCMHCE cases (quality anchor)
// NCMHCE Prep Platform | GA Integrated Therapeutic Perspectives LLC
//
// Dual-mode (classic + 2022 new format) AND documentary-evidence layer:
// each case carries references[] (governing sources) and each question carries
// evidenceRef[] linking the keyed answer to those sources. Conforms to
// caseSchema.js. IDs use a "G" namespace so they never collide with case1-70.
// Specific locators are SME-verified before publication.
// ============================================================================

const SEED_CASES = [
  {
    "id": "ncmhce-G031",
    "title": "Recurrent Sudden Surges of Fear",
    "category": "Anxiety",
    "difficulty": "medium",
    "primaryDiagnosis": {
      "name": "Panic Disorder",
      "code": "F41.0"
    },
    "diagnosis": {
      "name": "Panic Disorder",
      "code": "F41.0"
    },
    "differentialOptions": [
      {
        "id": "panic",
        "name": "Panic Disorder",
        "isCorrect": true
      },
      {
        "id": "gad",
        "name": "Generalized Anxiety Disorder",
        "isCorrect": false
      },
      {
        "id": "phobia",
        "name": "Specific Phobia",
        "isCorrect": false
      },
      {
        "id": "cardiac",
        "name": "Cardiac / medical condition",
        "isCorrect": false
      }
    ],
    "narrative": {
      "intake": "Marcus, 29, a warehouse supervisor, presents after three emergency-room visits in two months for chest tightness, racing heart, and a feeling he was dying. Each cardiac workup was negative. The episodes come \"out of nowhere,\" peak within minutes, and leave him shaken for hours. He is embarrassed and worried something was missed.",
      "session1": "Marcus describes discrete attacks: pounding heart, shortness of breath, sweating, dizziness, and a fear of losing control. Between attacks he now worries constantly about the next one and has started checking his pulse. He denies a single feared object or social trigger; the attacks are unexpected. No substance use beyond occasional coffee.",
      "session2": "Marcus reports he has begun avoiding the highway and crowded stores because an attack there would be \"humiliating.\" He called out of work twice. He asks whether he should just avoid the places that set them off, and whether the lorazepam an ER doctor gave him is something he can take daily."
    },
    "diagnosticRationale": "Recurrent UNEXPECTED panic attacks plus 1+ month of persistent worry about additional attacks and maladaptive avoidance meet Panic Disorder criteria. Not GAD (the worry is about attacks, not diffuse multi-domain worry). Not Specific Phobia (no single cued trigger). Medical causes were reasonably excluded by negative cardiac workups.",
    "questions": [
      {
        "id": "q1",
        "domain": "treatment",
        "question": "Which is the MOST appropriate first-line treatment?",
        "options": [
          {
            "id": "a",
            "text": "CBT with interoceptive exposure and psychoeducation about the panic cycle",
            "isCorrect": true,
            "weight": 3,
            "rationale": "CBT with interoceptive exposure is first-line for panic disorder.",
            "explanation": {
              "approach": "Target the fear-of-fear cycle directly with exposure to bodily sensations.",
              "rationale": "CBT with interoceptive and situational exposure has the strongest evidence base for panic disorder and reduces relapse versus medication alone.",
              "keyIndicators": [
                "Fear is of the sensations and the next attack",
                "Avoidance is developing"
              ],
              "commonMistake": "Skipping exposure and relying on reassurance, which maintains the cycle."
            }
          },
          {
            "id": "b",
            "text": "Daily as-needed benzodiazepine as the primary treatment",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Standing PRN benzodiazepines risk dependence and undercut exposure learning.",
            "explanation": {
              "approach": "Medication can have a role but not as the primary, standing treatment here.",
              "rationale": "Routine benzodiazepine use fosters dependence and prevents the corrective learning exposure provides.",
              "keyIndicators": [
                "Young client",
                "Avoidance already forming"
              ],
              "commonMistake": "Treating panic with scheduled sedatives instead of exposure-based therapy."
            }
          },
          {
            "id": "c",
            "text": "SSRI alone with no psychotherapy",
            "isCorrect": false,
            "weight": 0,
            "rationale": "An SSRI can help but therapy addresses the avoidance and fear-of-fear.",
            "explanation": {
              "approach": "Pharmacotherapy is reasonable but incomplete by itself.",
              "rationale": "An SSRI may reduce attack frequency but does not directly extinguish the avoidance Marcus is building.",
              "keyIndicators": [
                "Emerging agoraphobic avoidance"
              ],
              "commonMistake": "Assuming medication alone resolves the behavioral avoidance."
            }
          },
          {
            "id": "d",
            "text": "Supportive counseling only, with no specific protocol",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Supportive work alone is insufficient for a treatable, protocol-driven condition.",
            "explanation": {
              "approach": "Support is necessary but not sufficient.",
              "rationale": "Panic disorder responds to a specific exposure-based protocol; generic support leaves the mechanism untreated.",
              "keyIndicators": [
                "Clear, treatable target"
              ],
              "commonMistake": "Defaulting to nonspecific support for a condition with a clear evidence-based treatment."
            }
          }
        ],
        "evidenceRef": [
          "R2",
          "R3"
        ]
      },
      {
        "id": "q2",
        "domain": "intake",
        "question": "The three negative cardiac workups are clinically MOST useful for what purpose?",
        "options": [
          {
            "id": "a",
            "text": "To reframe his bodily sensations and provide psychoeducation about the panic cycle",
            "isCorrect": true,
            "weight": 3,
            "rationale": "Negative workups support psychoeducation that the sensations are panic, not danger.",
            "explanation": {
              "approach": "Use the negative results therapeutically to recalibrate threat appraisal.",
              "rationale": "Demonstrating that the body is not in danger is the foundation for interoceptive exposure.",
              "keyIndicators": [
                "Repeated catastrophic misinterpretation of sensations"
              ],
              "commonMistake": "Treating the workups as merely \"ruling things out\" rather than as therapeutic data."
            }
          },
          {
            "id": "b",
            "text": "To tell him the symptoms are \"all in his head\"",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Dismissive framing damages alliance and misrepresents panic as imaginary.",
            "explanation": {
              "approach": "Validate that the sensations are real while reframing their meaning.",
              "rationale": "Panic sensations are physiologically real; calling them imaginary alienates the client.",
              "keyIndicators": [
                "Client already embarrassed and fearful"
              ],
              "commonMistake": "Invalidating the client, which erodes trust and engagement."
            }
          },
          {
            "id": "c",
            "text": "To justify ordering additional medical tests for reassurance",
            "isCorrect": false,
            "weight": -1,
            "rationale": "More testing feeds reassurance-seeking and reinforces the disorder.",
            "explanation": {
              "approach": "Avoid reinforcing reassurance-seeking.",
              "rationale": "Repeated testing maintains health anxiety and the panic cycle.",
              "keyIndicators": [
                "Pulse-checking and ER-seeking behavior"
              ],
              "commonMistake": "Colluding with reassurance-seeking via unnecessary tests."
            }
          },
          {
            "id": "d",
            "text": "To reassure him the symptoms are not real and will pass",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Blanket reassurance is a safety behavior that maintains panic.",
            "explanation": {
              "approach": "Replace reassurance with skills and exposure.",
              "rationale": "Reassurance briefly relieves anxiety but reinforces the need for it.",
              "keyIndicators": [
                "Seeks reassurance repeatedly"
              ],
              "commonMistake": "Providing reassurance instead of building tolerance for uncertainty."
            }
          }
        ],
        "evidenceRef": [
          "R1",
          "R3"
        ]
      },
      {
        "id": "q3",
        "domain": "counseling",
        "question": "Marcus is starting to avoid driving and crowded stores. The BEST response is to:",
        "options": [
          {
            "id": "a",
            "text": "Begin graded, collaborative exposure to the avoided situations",
            "isCorrect": true,
            "weight": 3,
            "rationale": "Graded exposure reverses the developing agoraphobic avoidance.",
            "explanation": {
              "approach": "Address avoidance early before it generalizes.",
              "rationale": "Situational exposure prevents the consolidation of agoraphobia.",
              "keyIndicators": [
                "Avoidance is recent and limited"
              ],
              "commonMistake": "Waiting until avoidance is entrenched before intervening."
            }
          },
          {
            "id": "b",
            "text": "Advise him to avoid the triggering situations until he feels calmer",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Endorsing avoidance accelerates agoraphobia.",
            "explanation": {
              "approach": "Do not sanction avoidance.",
              "rationale": "Avoidance is negatively reinforced and expands over time.",
              "keyIndicators": [
                "Early agoraphobic pattern"
              ],
              "commonMistake": "Advising avoidance, which worsens the disorder."
            }
          },
          {
            "id": "c",
            "text": "Defer any exposure until the panic attacks stop on their own",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Attacks are unlikely to remit without intervention; waiting entrenches avoidance.",
            "explanation": {
              "approach": "Intervene now rather than waiting for spontaneous remission.",
              "rationale": "Untreated panic with avoidance tends to persist and broaden.",
              "keyIndicators": [
                "Functional impairment already present"
              ],
              "commonMistake": "Passively waiting instead of treating."
            }
          },
          {
            "id": "d",
            "text": "Refer him out without addressing the avoidance",
            "isCorrect": false,
            "weight": 0,
            "rationale": "Referral without action delays a manageable, in-scope intervention.",
            "explanation": {
              "approach": "This is within an LPC scope; act on it.",
              "rationale": "Graded exposure is core counseling work, not grounds for referral.",
              "keyIndicators": [
                "Standard panic presentation"
              ],
              "commonMistake": "Reflexively referring treatable, in-scope cases."
            }
          }
        ],
        "evidenceRef": [
          "R3"
        ]
      },
      {
        "id": "q4",
        "domain": "core",
        "question": "What MOST distinguishes Marcus’s presentation from Generalized Anxiety Disorder?",
        "options": [
          {
            "id": "a",
            "text": "Recurrent unexpected attacks plus fear of future attacks, rather than chronic diffuse worry",
            "isCorrect": true,
            "weight": 3,
            "rationale": "Panic = discrete uncued attacks + anticipatory fear; GAD = pervasive worry.",
            "explanation": {
              "approach": "Differentiate by the focus and form of the anxiety.",
              "rationale": "Panic centers on discrete attacks and fear of them; GAD is sustained multi-domain worry.",
              "keyIndicators": [
                "Attacks are unexpected and peak in minutes",
                "Worry is about the attacks"
              ],
              "commonMistake": "Collapsing all anxiety into GAD without checking attack structure."
            }
          },
          {
            "id": "b",
            "text": "The presence of any physical symptoms at all",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Both disorders include physical symptoms.",
            "explanation": {
              "approach": "Physical symptoms are nonspecific.",
              "rationale": "GAD also produces somatic symptoms, so they do not separate the two.",
              "keyIndicators": [
                "Somatic overlap"
              ],
              "commonMistake": "Using somatic symptoms as the differentiator."
            }
          },
          {
            "id": "c",
            "text": "That he worries about many areas of life",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Multi-domain worry actually points toward GAD, not panic.",
            "explanation": {
              "approach": "Check what the worry is about.",
              "rationale": "Marcus worries specifically about attacks, not broadly, which fits panic.",
              "keyIndicators": [
                "Worry is attack-focused"
              ],
              "commonMistake": "Mis-assigning attack-focused worry as generalized worry."
            }
          },
          {
            "id": "d",
            "text": "The duration of symptoms being longer than six months",
            "isCorrect": false,
            "weight": 0,
            "rationale": "Duration is not the distinguishing feature here.",
            "explanation": {
              "approach": "Form, not duration, separates these.",
              "rationale": "Both can be chronic; the attack structure is the discriminator.",
              "keyIndicators": [
                "Discrete vs diffuse pattern"
              ],
              "commonMistake": "Relying on duration to differentiate."
            }
          }
        ],
        "evidenceRef": [
          "R1"
        ]
      },
      {
        "id": "q5",
        "domain": "ethics",
        "question": "Marcus asks you to support a request for daily lorazepam from his PCP. You should:",
        "options": [
          {
            "id": "a",
            "text": "Coordinate with the PCP, share concerns about daily benzodiazepine use, and prioritize CBT",
            "isCorrect": true,
            "weight": 3,
            "rationale": "Collaborative care plus advocating evidence-based treatment serves the client.",
            "explanation": {
              "approach": "Stay in your lane while coordinating care.",
              "rationale": "Counselors do not prescribe but can communicate concerns and champion exposure-based treatment.",
              "keyIndicators": [
                "Risk of dependence",
                "Interferes with exposure learning"
              ],
              "commonMistake": "Either rubber-stamping the request or ignoring the medication question entirely."
            }
          },
          {
            "id": "b",
            "text": "Tell him counselors cannot discuss medication, so it is not your concern",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Medication coordination is within the counselor’s collaborative role.",
            "explanation": {
              "approach": "Coordination is part of good care.",
              "rationale": "Declining to engage abandons a relevant clinical issue.",
              "keyIndicators": [
                "Medication affects therapy outcome"
              ],
              "commonMistake": "Treating medication as wholly outside the counselor’s purview."
            }
          },
          {
            "id": "c",
            "text": "Write to the PCP endorsing daily lorazepam to relieve his distress",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Endorsing standing benzodiazepines exceeds scope and risks harm.",
            "explanation": {
              "approach": "Do not advocate a treatment that conflicts with the evidence and your scope.",
              "rationale": "Recommending daily sedatives is outside scope and clinically counterproductive.",
              "keyIndicators": [
                "Dependence risk"
              ],
              "commonMistake": "Overstepping scope to relieve short-term distress."
            }
          },
          {
            "id": "d",
            "text": "Refuse to communicate with the PCP about the case",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Refusing coordination undermines integrated care.",
            "explanation": {
              "approach": "Communicate with consent.",
              "rationale": "With a release, coordinating care improves outcomes.",
              "keyIndicators": [
                "Shared client"
              ],
              "commonMistake": "Withholding appropriate, consented coordination."
            }
          }
        ],
        "evidenceRef": [
          "R4",
          "R2"
        ]
      }
    ],
    "references": [
      {
        "id": "R1",
        "source": "DSM-5-TR",
        "detail": "Panic Disorder criteria: recurrent unexpected panic attacks + 1 month of worry/maladaptive change."
      },
      {
        "id": "R2",
        "source": "NICE guidelines",
        "detail": "Panic disorder: CBT is first-line; cautions on routine benzodiazepine use."
      },
      {
        "id": "R3",
        "source": "Barlow PCT",
        "detail": "Panic Control Treatment: interoceptive and situational exposure to the fear-of-fear cycle."
      },
      {
        "id": "R4",
        "source": "ACA Code of Ethics",
        "detail": "Coordination of care and consultation with other providers (with client consent)."
      }
    ]
  },
  {
    "id": "ncmhce-G032",
    "title": "Nightly Drinking After Work",
    "category": "Substance",
    "difficulty": "medium",
    "primaryDiagnosis": {
      "name": "Alcohol Use Disorder, Moderate",
      "code": "F10.20"
    },
    "diagnosis": {
      "name": "Alcohol Use Disorder, Moderate",
      "code": "F10.20"
    },
    "differentialOptions": [
      {
        "id": "aud_mod",
        "name": "Alcohol Use Disorder, Moderate",
        "isCorrect": true
      },
      {
        "id": "aud_sev",
        "name": "Alcohol Use Disorder, Severe",
        "isCorrect": false
      },
      {
        "id": "adj",
        "name": "Adjustment Disorder",
        "isCorrect": false
      },
      {
        "id": "mdd",
        "name": "Major Depressive Disorder",
        "isCorrect": false
      }
    ],
    "narrative": {
      "intake": "Dana, 47, an accountant, came in at her sister’s urging. She drinks four to five glasses of wine most nights \"to unwind,\" has tried to cut back several times without success, and recently got a warning at work for missed deadlines. She does not see it as \"a real problem like alcoholics have.\"",
      "session1": "Dana reports she now needs more wine for the same effect, spends evenings drinking instead of with family, and feels irritable on nights she tries to stop. She denies morning drinking, shakes, or seizures. She drinks alone, hides bottles, and feels guilty the next morning. Roughly five of the eleven AUD criteria are present.",
      "session2": "Dana arrives ambivalent: \"Maybe I just need to be more disciplined.\" She is worried about her job and her teenage kids noticing. She asks whether she has to quit entirely or whether she can learn to control it, and whether she needs to go somewhere or can do this in weekly sessions."
    },
    "diagnosticRationale": "Tolerance, unsuccessful efforts to cut down, time spent drinking, craving/irritability when stopping, role impairment at work, and continued use despite problems indicate Alcohol Use Disorder. Severity is moderate (4-5 criteria), not severe (6+). Absence of morning drinking, tremor, or seizures argues against current physiological withdrawal requiring medical detox.",
    "questions": [
      {
        "id": "q1",
        "domain": "counseling",
        "question": "Dana says, \"Maybe I just need more discipline.\" The BEST response uses which approach?",
        "options": [
          {
            "id": "a",
            "text": "Roll with the ambivalence using motivational interviewing and explore the discrepancy she named",
            "isCorrect": true,
            "weight": 3,
            "rationale": "MI meets ambivalence without confrontation and elicits change talk.",
            "explanation": {
              "approach": "Reflect and explore rather than argue.",
              "rationale": "Motivational interviewing reduces resistance and builds intrinsic motivation in AUD.",
              "keyIndicators": [
                "Ambivalence",
                "Pre-contemplation/contemplation features"
              ],
              "commonMistake": "Confronting or labeling, which increases defensiveness."
            }
          },
          {
            "id": "b",
            "text": "Confront her denial directly and insist she admit she is an alcoholic",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Confrontation raises resistance and harms alliance.",
            "explanation": {
              "approach": "Avoid confrontational labeling.",
              "rationale": "Aggressive confrontation predicts worse engagement and outcomes.",
              "keyIndicators": [
                "Stigma sensitivity"
              ],
              "commonMistake": "Forcing the \"alcoholic\" label."
            }
          },
          {
            "id": "c",
            "text": "Agree that willpower is the core issue and assign a self-discipline plan",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Framing AUD as willpower misrepresents the disorder.",
            "explanation": {
              "approach": "Do not reinforce a willpower model.",
              "rationale": "AUD is not a discipline failure; that frame fosters shame and relapse.",
              "keyIndicators": [
                "Failed cutdown attempts despite intent"
              ],
              "commonMistake": "Endorsing the willpower myth."
            }
          },
          {
            "id": "d",
            "text": "Tell her the diagnosis and move directly to relapse-prevention skills",
            "isCorrect": false,
            "weight": 0,
            "rationale": "Skipping engagement when she is ambivalent risks dropout.",
            "explanation": {
              "approach": "Build motivation before action-stage tools.",
              "rationale": "Action-stage interventions misfire in contemplation.",
              "keyIndicators": [
                "Not yet committed to change"
              ],
              "commonMistake": "Jumping to action tasks prematurely."
            }
          }
        ],
        "evidenceRef": [
          "R2"
        ]
      },
      {
        "id": "q2",
        "domain": "intake",
        "question": "Before setting a treatment plan, the MOST important safety screen is:",
        "options": [
          {
            "id": "a",
            "text": "Assess withdrawal risk and history of complicated withdrawal to determine if medical detox is needed",
            "isCorrect": true,
            "weight": 3,
            "rationale": "Withdrawal risk dictates whether outpatient is safe.",
            "explanation": {
              "approach": "Screen withdrawal severity first.",
              "rationale": "Unrecognized severe withdrawal can be life-threatening; it gates level of care.",
              "keyIndicators": [
                "Daily heavy use",
                "Irritability when stopping"
              ],
              "commonMistake": "Planning outpatient work without screening withdrawal risk."
            }
          },
          {
            "id": "b",
            "text": "Ask which AA group she will attend",
            "isCorrect": false,
            "weight": 0,
            "rationale": "Mutual-help referral is helpful but not the safety screen.",
            "explanation": {
              "approach": "Support options come after safety.",
              "rationale": "AA is a resource, not a withdrawal assessment.",
              "keyIndicators": [
                "Safety not yet established"
              ],
              "commonMistake": "Prioritizing referrals over medical safety."
            }
          },
          {
            "id": "c",
            "text": "Have her sign a no-drinking contract",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Abstinence contracts do not assess medical risk and may shame.",
            "explanation": {
              "approach": "Contracts are not a safety screen.",
              "rationale": "They neither reduce withdrawal risk nor reflect her readiness.",
              "keyIndicators": [
                "Withdrawal unassessed"
              ],
              "commonMistake": "Substituting a contract for clinical screening."
            }
          },
          {
            "id": "d",
            "text": "Begin trauma processing to find the root cause",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Premature trauma work before stabilization raises relapse risk.",
            "explanation": {
              "approach": "Stabilize before depth work.",
              "rationale": "Trauma processing before sobriety stabilization commonly precipitates relapse.",
              "keyIndicators": [
                "Active heavy use"
              ],
              "commonMistake": "Opening trauma work in unstable active use."
            }
          }
        ],
        "evidenceRef": [
          "R4"
        ]
      },
      {
        "id": "q3",
        "domain": "treatment",
        "question": "Given moderate AUD with no withdrawal history, the MOST appropriate level of care is:",
        "options": [
          {
            "id": "a",
            "text": "Outpatient counseling with monitoring, escalating only if she does not stabilize",
            "isCorrect": true,
            "weight": 3,
            "rationale": "Least restrictive setting fits moderate AUD without withdrawal risk.",
            "explanation": {
              "approach": "Match level of care to severity and safety.",
              "rationale": "Moderate AUD with intact functioning and no withdrawal risk fits outpatient.",
              "keyIndicators": [
                "Still working",
                "No physiological withdrawal"
              ],
              "commonMistake": "Over-referring to higher levels than indicated."
            }
          },
          {
            "id": "b",
            "text": "Immediate inpatient residential treatment",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Residential is more restrictive than her presentation warrants.",
            "explanation": {
              "approach": "Do not over-restrict.",
              "rationale": "Inpatient is reserved for higher acuity or failed lower levels.",
              "keyIndicators": [
                "Moderate severity"
              ],
              "commonMistake": "Defaulting to the most intensive setting."
            }
          },
          {
            "id": "c",
            "text": "No formal treatment; advise her to cut back on her own",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Self-directed cutdown already failed repeatedly.",
            "explanation": {
              "approach": "Provide structured help.",
              "rationale": "Her repeated failed attempts argue against unaided self-management.",
              "keyIndicators": [
                "Multiple failed cutdowns"
              ],
              "commonMistake": "Under-treating by deferring to self-help alone."
            }
          },
          {
            "id": "d",
            "text": "Partial hospitalization five days a week",
            "isCorrect": false,
            "weight": 0,
            "rationale": "PHP exceeds what moderate, functioning AUD requires initially.",
            "explanation": {
              "approach": "Reserve PHP for higher need.",
              "rationale": "Her functioning and severity do not yet justify day treatment.",
              "keyIndicators": [
                "Employed, no withdrawal"
              ],
              "commonMistake": "Choosing a level above the indicated one."
            }
          }
        ],
        "evidenceRef": [
          "R3"
        ]
      },
      {
        "id": "q4",
        "domain": "counseling",
        "question": "Dana asks if she must abstain or can \"learn to control\" her drinking. The BEST clinical stance is to:",
        "options": [
          {
            "id": "a",
            "text": "Explore her goals collaboratively, present the evidence on abstinence vs. moderation, and let her choose an informed starting goal",
            "isCorrect": true,
            "weight": 3,
            "rationale": "Collaborative, informed goal-setting supports engagement and autonomy.",
            "explanation": {
              "approach": "Honor autonomy while being honest about evidence.",
              "rationale": "Shared decision-making improves retention; many begin with a moderation trial that informs next steps.",
              "keyIndicators": [
                "Ambivalent about abstinence"
              ],
              "commonMistake": "Issuing an ultimatum that drives her out of treatment."
            }
          },
          {
            "id": "b",
            "text": "Insist that total lifelong abstinence is the only acceptable goal",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Rigid mandates can disengage an ambivalent client.",
            "explanation": {
              "approach": "Avoid premature ultimatums.",
              "rationale": "A non-collaborative mandate often ends engagement.",
              "keyIndicators": [
                "Early in change process"
              ],
              "commonMistake": "Imposing a fixed goal over the client’s readiness."
            }
          },
          {
            "id": "c",
            "text": "Assure her she can definitely control it with the right schedule",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Guaranteeing controlled drinking is misleading and risky.",
            "explanation": {
              "approach": "Do not over-promise outcomes.",
              "rationale": "Promising control misstates the evidence and risks harm.",
              "keyIndicators": [
                "Tolerance and failed cutdowns"
              ],
              "commonMistake": "Guaranteeing controlled use."
            }
          },
          {
            "id": "d",
            "text": "Tell her the goal does not matter as long as she attends sessions",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Goals are central to AUD treatment planning.",
            "explanation": {
              "approach": "Goals anchor the plan.",
              "rationale": "A defined, informed goal guides measurable progress.",
              "keyIndicators": [
                "Needs a target"
              ],
              "commonMistake": "Treating the drinking goal as irrelevant."
            }
          }
        ],
        "evidenceRef": [
          "R2"
        ]
      },
      {
        "id": "q5",
        "domain": "ethics",
        "question": "Dana mentions she sometimes drives after drinking with her teens in the car. You should FIRST:",
        "options": [
          {
            "id": "a",
            "text": "Address it directly as a safety issue, assess frequency and risk, and plan concrete safeguards",
            "isCorrect": true,
            "weight": 3,
            "rationale": "Imminent safety to identifiable minors warrants direct, immediate attention.",
            "explanation": {
              "approach": "Prioritize safety of identifiable people, especially minors.",
              "rationale": "Driving impaired with children is an acute risk requiring direct intervention and safety planning.",
              "keyIndicators": [
                "Minors at risk",
                "Impaired driving"
              ],
              "commonMistake": "Deferring a present safety risk to \"later in treatment.\""
            }
          },
          {
            "id": "b",
            "text": "Ignore it to preserve rapport in early treatment",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Rapport never outweighs a child-safety risk.",
            "explanation": {
              "approach": "Safety precedes comfort.",
              "rationale": "Avoiding the issue exposes children to ongoing danger.",
              "keyIndicators": [
                "Children present during impaired driving"
              ],
              "commonMistake": "Sacrificing safety to avoid an awkward conversation."
            }
          },
          {
            "id": "c",
            "text": "Immediately file a report with authorities without any discussion",
            "isCorrect": false,
            "weight": -1,
            "rationale": "First assess and intervene clinically; reporting thresholds vary and require judgment.",
            "explanation": {
              "approach": "Assess before escalating externally.",
              "rationale": "Direct clinical intervention and safety planning come first unless mandated-report criteria are clearly met.",
              "keyIndicators": [
                "Need to clarify frequency and current risk"
              ],
              "commonMistake": "Reporting reflexively before assessment or clinical response."
            }
          },
          {
            "id": "d",
            "text": "Note it in the chart and move on to the next topic",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Documentation without intervention leaves the risk unaddressed.",
            "explanation": {
              "approach": "Documenting is not intervening.",
              "rationale": "A noted-but-ignored safety risk is a clinical and ethical failure.",
              "keyIndicators": [
                "Active risk"
              ],
              "commonMistake": "Charting a risk without acting on it."
            }
          }
        ],
        "evidenceRef": [
          "R5"
        ]
      }
    ],
    "references": [
      {
        "id": "R1",
        "source": "DSM-5-TR",
        "detail": "Alcohol Use Disorder criteria and moderate (4-5) vs severe (6+) severity."
      },
      {
        "id": "R2",
        "source": "SAMHSA TIP 35",
        "detail": "Motivational interviewing and stage-matched response to ambivalence in SUD."
      },
      {
        "id": "R3",
        "source": "ASAM Criteria",
        "detail": "Level-of-care determination; least-restrictive setting for moderate AUD without withdrawal risk."
      },
      {
        "id": "R4",
        "source": "SAMHSA TIP 45",
        "detail": "Withdrawal-risk assessment and medical-safety screening before outpatient planning."
      },
      {
        "id": "R5",
        "source": "ACA Code of Ethics",
        "detail": "Duty to protect identifiable others; safety of minors takes precedence."
      }
    ]
  },
  {
    "id": "ncmhce-G033",
    "title": "Depressed Now, But Productive Spells Before",
    "category": "Bipolar",
    "difficulty": "hard",
    "primaryDiagnosis": {
      "name": "Bipolar II Disorder",
      "code": "F31.81"
    },
    "diagnosis": {
      "name": "Bipolar II Disorder",
      "code": "F31.81"
    },
    "differentialOptions": [
      {
        "id": "bp2",
        "name": "Bipolar II Disorder",
        "isCorrect": true
      },
      {
        "id": "mdd",
        "name": "Major Depressive Disorder",
        "isCorrect": false
      },
      {
        "id": "cyclo",
        "name": "Cyclothymic Disorder",
        "isCorrect": false
      },
      {
        "id": "bp1",
        "name": "Bipolar I Disorder",
        "isCorrect": false
      }
    ],
    "narrative": {
      "intake": "Priya, 34, a graphic designer, presents for a depressive episode: low mood, anhedonia, hypersomnia, and guilt for the past six weeks. She has had several past depressive episodes and \"a couple of really good stretches\" she describes as just feeling normal again.",
      "session1": "On careful history, Priya describes discrete periods of four to seven days, several times over the past few years, of elevated mood, racing ideas, decreased need for sleep while still feeling rested, unusual talkativeness, and a burst of productivity. Others noticed she was \"not herself.\" She was never hospitalized and these spells did not cause severe impairment. She has no history of a week-long, severely impairing manic episode.",
      "session2": "Priya says her last counselor started her on an antidepressant alone, after which she felt \"wired and irritable\" for a week. She is frustrated that nothing has helped long-term and asks why her depressions keep coming back."
    },
    "diagnosticRationale": "At least one major depressive episode plus at least one hypomanic episode (4+ days of elevated/irritable mood with associated symptoms, observable change, not severe enough for marked impairment or hospitalization), and no full manic episode, meet Bipolar II criteria. Not MDD (hypomanic history present). Not Bipolar I (no full mania). Not Cyclothymia (full major depressive episodes present, exceeding subthreshold).",
    "questions": [
      {
        "id": "q1",
        "domain": "core",
        "question": "What is the MOST important assessment step before recommending treatment?",
        "options": [
          {
            "id": "a",
            "text": "Carefully screen the lifetime history for hypomanic and manic episodes",
            "isCorrect": true,
            "weight": 3,
            "rationale": "Screening for past (hypo)mania is essential before treating depression.",
            "explanation": {
              "approach": "Mine the lifetime mood history, not just the current episode.",
              "rationale": "Undetected hypomania changes the diagnosis and the entire treatment approach.",
              "keyIndicators": [
                "\"Good stretches\" with reduced sleep need",
                "Antidepressant caused activation"
              ],
              "commonMistake": "Diagnosing MDD from the depressed snapshot without a mood-elevation history."
            }
          },
          {
            "id": "b",
            "text": "Determine her preferred antidepressant",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Choosing an antidepressant first risks destabilization in bipolar illness.",
            "explanation": {
              "approach": "Do not select an antidepressant before ruling out bipolarity.",
              "rationale": "Antidepressant monotherapy can trigger switching or cycling.",
              "keyIndicators": [
                "Prior activation on an antidepressant"
              ],
              "commonMistake": "Treating presumed unipolar depression without screening for mania."
            }
          },
          {
            "id": "c",
            "text": "Schedule weekly behavioral activation",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Activation may help mood but is premature before clarifying diagnosis.",
            "explanation": {
              "approach": "Clarify diagnosis before the plan.",
              "rationale": "The plan hinges on whether this is bipolar or unipolar.",
              "keyIndicators": [
                "Diagnostic ambiguity"
              ],
              "commonMistake": "Building a plan before resolving the differential."
            }
          },
          {
            "id": "d",
            "text": "Assess her sleep hygiene only",
            "isCorrect": false,
            "weight": 0,
            "rationale": "Sleep is relevant but secondary to the mood-history screen.",
            "explanation": {
              "approach": "Sleep is one data point.",
              "rationale": "Reduced need for sleep is a clue, but the full (hypo)mania screen is the priority.",
              "keyIndicators": [
                "Decreased sleep need during good spells"
              ],
              "commonMistake": "Narrowing to sleep without the broader episode history."
            }
          }
        ],
        "evidenceRef": [
          "R1"
        ]
      },
      {
        "id": "q2",
        "domain": "treatment",
        "question": "Her prior \"wired and irritable\" week on an antidepressant alone MOST likely reflects:",
        "options": [
          {
            "id": "a",
            "text": "An antidepressant-associated activation/hypomanic switch, signaling bipolar spectrum illness",
            "isCorrect": true,
            "weight": 3,
            "rationale": "Activation on an antidepressant alone is a classic bipolar red flag.",
            "explanation": {
              "approach": "Read the medication response as diagnostic data.",
              "rationale": "A switch on antidepressant monotherapy strongly suggests bipolarity and the need for a mood stabilizer.",
              "keyIndicators": [
                "Wired, irritable, decreased sleep after starting the drug"
              ],
              "commonMistake": "Dismissing the reaction as a side effect rather than a diagnostic clue."
            }
          },
          {
            "id": "b",
            "text": "Proof that she simply needs a higher antidepressant dose",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Escalating the antidepressant could worsen cycling.",
            "explanation": {
              "approach": "Do not push the dose into a switch.",
              "rationale": "More antidepressant can intensify activation in bipolar illness.",
              "keyIndicators": [
                "Activation already occurred"
              ],
              "commonMistake": "Increasing the very agent that destabilized her."
            }
          },
          {
            "id": "c",
            "text": "Normal early antidepressant response requiring no change",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Activation with reduced sleep is not a benign expected response.",
            "explanation": {
              "approach": "Distinguish activation from ordinary onset effects.",
              "rationale": "A hypomanic-flavored reaction warrants reassessment, not reassurance.",
              "keyIndicators": [
                "Elevated, irritable, sleepless"
              ],
              "commonMistake": "Normalizing an activation signal."
            }
          },
          {
            "id": "d",
            "text": "Evidence she was not really depressed",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Depressive episodes and antidepressant-induced activation can coexist.",
            "explanation": {
              "approach": "Both can be true.",
              "rationale": "Her documented depressive episodes are real; the activation reflects bipolar vulnerability.",
              "keyIndicators": [
                "Clear depressive history"
              ],
              "commonMistake": "Invalidating the depression because of the activation."
            }
          }
        ],
        "evidenceRef": [
          "R2",
          "R1"
        ]
      },
      {
        "id": "q3",
        "domain": "counseling",
        "question": "A core psychoeducation and self-management focus for Priya should include:",
        "options": [
          {
            "id": "a",
            "text": "Mood monitoring and stabilizing sleep/wake and daily rhythms to reduce episode triggers",
            "isCorrect": true,
            "weight": 3,
            "rationale": "Routine/sleep regulation and mood tracking reduce bipolar relapse.",
            "explanation": {
              "approach": "Teach rhythm stability and early-warning monitoring.",
              "rationale": "Social-rhythm stability and sleep regulation are evidence-based for bipolar relapse prevention.",
              "keyIndicators": [
                "Sleep changes herald episodes"
              ],
              "commonMistake": "Treating it as ordinary depression without rhythm/sleep focus."
            }
          },
          {
            "id": "b",
            "text": "Encouraging her to maximize productivity during high-energy spells",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Pushing productivity in hypomania can escalate episodes.",
            "explanation": {
              "approach": "Do not amplify hypomanic states.",
              "rationale": "Riding the high-energy periods can worsen instability.",
              "keyIndicators": [
                "Hypomanic productivity surges"
              ],
              "commonMistake": "Reinforcing hypomania as desirable."
            }
          },
          {
            "id": "c",
            "text": "Avoiding any discussion of medication so therapy stays primary",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Bipolar II generally requires coordinated pharmacologic care.",
            "explanation": {
              "approach": "Coordinate, do not avoid, the medication question.",
              "rationale": "Mood stabilization usually needs a prescriber; therapy complements it.",
              "keyIndicators": [
                "Needs mood stabilizer evaluation"
              ],
              "commonMistake": "Sidelining necessary medication coordination."
            }
          },
          {
            "id": "d",
            "text": "Focusing only on the current depressive symptoms",
            "isCorrect": false,
            "weight": 0,
            "rationale": "A bipolar-specific frame, not depression-only care, is needed.",
            "explanation": {
              "approach": "Frame care around the bipolar course.",
              "rationale": "Targeting only depression misses relapse-prevention essentials.",
              "keyIndicators": [
                "Recurrent biphasic course"
              ],
              "commonMistake": "Managing it as unipolar depression."
            }
          }
        ],
        "evidenceRef": [
          "R3"
        ]
      },
      {
        "id": "q4",
        "domain": "core",
        "question": "What MOST distinguishes Bipolar II from Bipolar I in Priya’s case?",
        "options": [
          {
            "id": "a",
            "text": "Her elevated periods are hypomanic (4+ days, no marked impairment or hospitalization), with no full manic episode",
            "isCorrect": true,
            "weight": 3,
            "rationale": "Hypomania without full mania defines Bipolar II.",
            "explanation": {
              "approach": "Grade the severity and duration of the highs.",
              "rationale": "Bipolar II requires hypomania and excludes any full manic episode.",
              "keyIndicators": [
                "4-7 day highs",
                "No hospitalization or severe impairment"
              ],
              "commonMistake": "Calling any mood elevation \"mania.\""
            }
          },
          {
            "id": "b",
            "text": "The presence of depressive episodes",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Both can include depression.",
            "explanation": {
              "approach": "Depression does not separate the two.",
              "rationale": "Depressive episodes occur across the bipolar spectrum.",
              "keyIndicators": [
                "Depression in both"
              ],
              "commonMistake": "Using depression as the discriminator."
            }
          },
          {
            "id": "c",
            "text": "That she has ever felt irritable",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Irritability is nonspecific.",
            "explanation": {
              "approach": "Irritability spans many conditions.",
              "rationale": "It does not distinguish bipolar subtypes.",
              "keyIndicators": [
                "Nonspecific symptom"
              ],
              "commonMistake": "Treating irritability as diagnostic."
            }
          },
          {
            "id": "d",
            "text": "The total number of lifetime episodes",
            "isCorrect": false,
            "weight": 0,
            "rationale": "Episode count is not the I-vs-II distinction.",
            "explanation": {
              "approach": "Severity of the highs, not the count, decides.",
              "rationale": "The presence/absence of full mania is the discriminator.",
              "keyIndicators": [
                "Hypomania vs mania"
              ],
              "commonMistake": "Using episode count to subtype."
            }
          }
        ],
        "evidenceRef": [
          "R1"
        ]
      },
      {
        "id": "q5",
        "domain": "treatment",
        "question": "The MOST appropriate next step in care coordination is to:",
        "options": [
          {
            "id": "a",
            "text": "Refer for psychiatric evaluation for a mood stabilizer while continuing bipolar-informed therapy",
            "isCorrect": true,
            "weight": 3,
            "rationale": "Coordinated mood-stabilizer evaluation plus therapy fits Bipolar II.",
            "explanation": {
              "approach": "Pair prescriber referral with bipolar-specific therapy.",
              "rationale": "Bipolar II typically needs mood stabilization; therapy supports adherence and relapse prevention.",
              "keyIndicators": [
                "Prior antidepressant activation"
              ],
              "commonMistake": "Continuing therapy alone without a prescriber evaluation."
            }
          },
          {
            "id": "b",
            "text": "Restart an antidepressant alone and monitor",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Antidepressant monotherapy is contraindicated given her switch history.",
            "explanation": {
              "approach": "Avoid the agent that destabilized her.",
              "rationale": "Monotherapy risks another switch and cycling.",
              "keyIndicators": [
                "Documented activation"
              ],
              "commonMistake": "Repeating antidepressant monotherapy."
            }
          },
          {
            "id": "c",
            "text": "Tell her medication is unnecessary if she does therapy consistently",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Therapy alone is usually insufficient for Bipolar II.",
            "explanation": {
              "approach": "Do not over-promise therapy-only outcomes.",
              "rationale": "Mood stabilization generally requires medication.",
              "keyIndicators": [
                "Recurrent episodes"
              ],
              "commonMistake": "Overstating what therapy alone can achieve."
            }
          },
          {
            "id": "d",
            "text": "Defer any referral until she has another depressive episode",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Waiting for relapse delays appropriate stabilization.",
            "explanation": {
              "approach": "Act now, not after the next crisis.",
              "rationale": "Early stabilization reduces future episodes.",
              "keyIndicators": [
                "Currently symptomatic"
              ],
              "commonMistake": "Postponing necessary referral."
            }
          }
        ],
        "evidenceRef": [
          "R2"
        ]
      }
    ],
    "references": [
      {
        "id": "R1",
        "source": "DSM-5-TR",
        "detail": "Bipolar II: at least one hypomanic and one major depressive episode; no full mania."
      },
      {
        "id": "R2",
        "source": "VA/DoD CPG",
        "detail": "Bipolar management: caution with antidepressant monotherapy; mood-stabilizer-based treatment."
      },
      {
        "id": "R3",
        "source": "IPSRT",
        "detail": "Social-rhythm and sleep regulation for bipolar relapse prevention."
      }
    ]
  },
  {
    "id": "ncmhce-G034",
    "title": "Struggling Since the Layoff",
    "category": "Trauma",
    "difficulty": "easy",
    "primaryDiagnosis": {
      "name": "Adjustment Disorder, with Mixed Anxiety and Depressed Mood",
      "code": "F43.23"
    },
    "diagnosis": {
      "name": "Adjustment Disorder, with Mixed Anxiety and Depressed Mood",
      "code": "F43.23"
    },
    "differentialOptions": [
      {
        "id": "adj",
        "name": "Adjustment Disorder, with Mixed Anxiety and Depressed Mood",
        "isCorrect": true
      },
      {
        "id": "mdd",
        "name": "Major Depressive Disorder",
        "isCorrect": false
      },
      {
        "id": "gad",
        "name": "Generalized Anxiety Disorder",
        "isCorrect": false
      },
      {
        "id": "normal",
        "name": "Normal stress response (no disorder)",
        "isCorrect": false
      }
    ],
    "narrative": {
      "intake": "Tom, 52, was laid off from a job he held for 20 years about six weeks ago. Since then he has felt down, on-edge, and has trouble sleeping. He worries about finances and feels \"useless.\" He has no prior mental-health history and was functioning well before the layoff.",
      "session1": "Tom’s symptoms are clearly tied to the job loss and its aftermath. He has low mood and worry but does NOT meet full criteria for a major depressive episode (no pervasive anhedonia, no worthlessness beyond the situation, appetite intact) or GAD (worry is focused on the job loss, not pervasive and multi-domain for 6+ months). His distress exceeds what is expected and is impairing his job search and family life.",
      "session2": "Tom is engaging well. He has started updating his resume and reconnecting with his network. He still has hard days but feels \"a bit more like himself.\" He asks whether something is \"seriously wrong\" with him."
    },
    "diagnosticRationale": "Emotional symptoms (mixed anxiety and depressed mood) developing within three months of an identifiable stressor (the layoff), causing distress out of proportion and functional impairment, without meeting criteria for another disorder, define Adjustment Disorder. Not MDD (full criteria unmet). Not GAD (worry stressor-bound, under 6 months). Not a normal reaction (impairment and excess distress are present).",
    "questions": [
      {
        "id": "q1",
        "domain": "core",
        "question": "What MOST supports Adjustment Disorder over Major Depressive Disorder here?",
        "options": [
          {
            "id": "a",
            "text": "Symptoms are stressor-linked and impairing but do not meet full MDD criteria",
            "isCorrect": true,
            "weight": 3,
            "rationale": "Subthreshold, stressor-bound symptoms point to adjustment disorder.",
            "explanation": {
              "approach": "Check the criteria count and the stressor link.",
              "rationale": "Adjustment disorder is the right call when distress is tied to a stressor and stays below full MDD thresholds.",
              "keyIndicators": [
                "Clear stressor within 3 months",
                "MDD criteria not fully met"
              ],
              "commonMistake": "Over-diagnosing MDD whenever someone is sad after a loss."
            }
          },
          {
            "id": "b",
            "text": "The mere presence of low mood",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Low mood alone does not establish MDD.",
            "explanation": {
              "approach": "One symptom is not a syndrome.",
              "rationale": "Low mood occurs across many conditions and in normal reactions.",
              "keyIndicators": [
                "Single symptom"
              ],
              "commonMistake": "Equating sadness with major depression."
            }
          },
          {
            "id": "c",
            "text": "That he has any sleep difficulty",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Sleep disturbance is nonspecific.",
            "explanation": {
              "approach": "Sleep problems are nonspecific.",
              "rationale": "They appear in adjustment, MDD, GAD, and normal stress.",
              "keyIndicators": [
                "Nonspecific symptom"
              ],
              "commonMistake": "Using sleep alone to diagnose."
            }
          },
          {
            "id": "d",
            "text": "The fact that he lost his job",
            "isCorrect": false,
            "weight": 0,
            "rationale": "A stressor is necessary but does not by itself confirm the diagnosis.",
            "explanation": {
              "approach": "A stressor enables adjustment disorder but is not sufficient.",
              "rationale": "You also need impairing, excess symptoms below another disorder’s threshold.",
              "keyIndicators": [
                "Stressor present"
              ],
              "commonMistake": "Assuming any stressor plus distress equals adjustment disorder without checking impairment/criteria."
            }
          }
        ],
        "evidenceRef": [
          "R1"
        ]
      },
      {
        "id": "q2",
        "domain": "treatment",
        "question": "The MOST appropriate primary treatment is:",
        "options": [
          {
            "id": "a",
            "text": "Brief, problem-focused supportive counseling that mobilizes coping and resources",
            "isCorrect": true,
            "weight": 3,
            "rationale": "Short-term, problem-focused therapy fits adjustment disorder.",
            "explanation": {
              "approach": "Match intensity to a typically time-limited condition.",
              "rationale": "Adjustment disorder usually responds to brief, supportive, problem-solving work.",
              "keyIndicators": [
                "Stressor-linked, often self-limiting"
              ],
              "commonMistake": "Over-treating a time-limited condition with intensive long-term therapy."
            }
          },
          {
            "id": "b",
            "text": "Immediate referral for inpatient psychiatric care",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Inpatient care is grossly disproportionate here.",
            "explanation": {
              "approach": "Do not over-escalate.",
              "rationale": "No acute risk or severe impairment warrants inpatient care.",
              "keyIndicators": [
                "Engaged, improving, no safety concern"
              ],
              "commonMistake": "Choosing the most restrictive option for mild presentations."
            }
          },
          {
            "id": "c",
            "text": "Long-term psychodynamic therapy focused on childhood",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Depth work is mismatched to a stressor-linked, brief condition.",
            "explanation": {
              "approach": "Fit the modality to the presentation.",
              "rationale": "A current stressor calls for present-focused coping, not long-term depth work first.",
              "keyIndicators": [
                "Acute situational distress"
              ],
              "commonMistake": "Defaulting to long-term therapy for situational distress."
            }
          },
          {
            "id": "d",
            "text": "Starting an antidepressant before any counseling",
            "isCorrect": false,
            "weight": 0,
            "rationale": "Medication-first is not indicated for uncomplicated adjustment disorder.",
            "explanation": {
              "approach": "Lead with psychosocial intervention.",
              "rationale": "Counseling is first-line; medication is not the default here.",
              "keyIndicators": [
                "No MDD, recent stressor"
              ],
              "commonMistake": "Reaching for medication before brief therapy."
            }
          }
        ],
        "evidenceRef": [
          "R2",
          "R1"
        ]
      },
      {
        "id": "q3",
        "domain": "counseling",
        "question": "Tom asks if something is \"seriously wrong\" with him. The BEST response is to:",
        "options": [
          {
            "id": "a",
            "text": "Normalize his reaction as an understandable response to a major loss while validating the real distress",
            "isCorrect": true,
            "weight": 3,
            "rationale": "Normalizing without minimizing supports the alliance and reduces shame.",
            "explanation": {
              "approach": "Validate and normalize without dismissing.",
              "rationale": "Framing his reaction as understandable reduces shame while honoring the distress.",
              "keyIndicators": [
                "Self-stigmatizing (\"useless\")"
              ],
              "commonMistake": "Either pathologizing him or minimizing his pain."
            }
          },
          {
            "id": "b",
            "text": "Tell him he likely has a serious chronic mental illness",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Inaccurate and harmful overstatement.",
            "explanation": {
              "approach": "Do not catastrophize the diagnosis.",
              "rationale": "Mislabeling a situational reaction as chronic illness causes harm.",
              "keyIndicators": [
                "No prior history, improving"
              ],
              "commonMistake": "Over-pathologizing a normalizable reaction."
            }
          },
          {
            "id": "c",
            "text": "Dismiss his concerns by saying everyone goes through this",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Minimizing invalidates his real impairment.",
            "explanation": {
              "approach": "Avoid minimizing.",
              "rationale": "Brushing it off ignores the genuine distress and impairment.",
              "keyIndicators": [
                "Real functional impact"
              ],
              "commonMistake": "Minimizing the client’s experience."
            }
          },
          {
            "id": "d",
            "text": "Avoid answering and change the subject",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Evading a direct question weakens trust.",
            "explanation": {
              "approach": "Answer honestly and supportively.",
              "rationale": "Dodging the question undermines the therapeutic relationship.",
              "keyIndicators": [
                "Direct question asked"
              ],
              "commonMistake": "Sidestepping legitimate client questions."
            }
          }
        ],
        "evidenceRef": [
          "R1"
        ]
      },
      {
        "id": "q4",
        "domain": "core",
        "question": "If, over the next month, Tom develops pervasive anhedonia, worthlessness, and hopelessness, you should:",
        "options": [
          {
            "id": "a",
            "text": "Reassess and revise the diagnosis, as he may now meet criteria for a major depressive episode",
            "isCorrect": true,
            "weight": 3,
            "rationale": "Diagnoses are revisited as the picture evolves.",
            "explanation": {
              "approach": "Treat diagnosis as dynamic.",
              "rationale": "If symptoms cross the MDD threshold, the diagnosis and plan change.",
              "keyIndicators": [
                "Worsening, broadening symptoms"
              ],
              "commonMistake": "Anchoring on the initial diagnosis despite new data."
            }
          },
          {
            "id": "b",
            "text": "Keep the adjustment-disorder diagnosis regardless of new symptoms",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Ignoring escalation risks missing emerging MDD.",
            "explanation": {
              "approach": "Do not anchor rigidly.",
              "rationale": "Failing to update the diagnosis can leave worsening depression untreated.",
              "keyIndicators": [
                "New MDD-level symptoms"
              ],
              "commonMistake": "Diagnostic anchoring."
            }
          },
          {
            "id": "c",
            "text": "Discharge him because adjustment disorder is self-limiting",
            "isCorrect": false,
            "weight": -2,
            "rationale": "Worsening symptoms call for more care, not discharge.",
            "explanation": {
              "approach": "Escalation contraindicates discharge.",
              "rationale": "Premature discharge amid worsening symptoms is unsafe.",
              "keyIndicators": [
                "Deteriorating course"
              ],
              "commonMistake": "Discharging a worsening client."
            }
          },
          {
            "id": "d",
            "text": "Tell him the symptoms are not real because he was improving",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Invalidating new symptoms is inaccurate and harmful.",
            "explanation": {
              "approach": "Take new symptoms seriously.",
              "rationale": "Symptom course can fluctuate; new depression is real.",
              "keyIndicators": [
                "Genuine symptom change"
              ],
              "commonMistake": "Dismissing a genuine clinical shift."
            }
          }
        ],
        "evidenceRef": [
          "R1"
        ]
      },
      {
        "id": "q5",
        "domain": "treatment",
        "question": "A realistic prognosis and plan for Tom should emphasize:",
        "options": [
          {
            "id": "a",
            "text": "A generally favorable, time-limited course with monitoring and a clear step-up plan if symptoms intensify",
            "isCorrect": true,
            "weight": 3,
            "rationale": "Adjustment disorder typically remits as the stressor resolves, with monitoring.",
            "explanation": {
              "approach": "Set realistic, hopeful expectations with a safety net.",
              "rationale": "Most adjustment disorders improve with brief support; a step-up plan covers worsening.",
              "keyIndicators": [
                "Already mobilizing coping"
              ],
              "commonMistake": "Either over-promising a cure or failing to plan for deterioration."
            }
          },
          {
            "id": "b",
            "text": "A likely lifelong, treatment-resistant condition",
            "isCorrect": false,
            "weight": -2,
            "rationale": "This misrepresents the usually favorable prognosis.",
            "explanation": {
              "approach": "Do not catastrophize prognosis.",
              "rationale": "Adjustment disorder is generally time-limited.",
              "keyIndicators": [
                "Recent onset, improving"
              ],
              "commonMistake": "Predicting chronicity without basis."
            }
          },
          {
            "id": "c",
            "text": "That he will need indefinite weekly therapy for years",
            "isCorrect": false,
            "weight": -1,
            "rationale": "Indefinite intensive therapy is not indicated.",
            "explanation": {
              "approach": "Right-size the dose of care.",
              "rationale": "A brief course usually suffices.",
              "keyIndicators": [
                "Situational, improving"
              ],
              "commonMistake": "Over-prescribing duration of care."
            }
          },
          {
            "id": "d",
            "text": "Discharging him today since he had one good week",
            "isCorrect": false,
            "weight": 0,
            "rationale": "One good week is premature for discharge without a plan.",
            "explanation": {
              "approach": "Confirm stability before ending care.",
              "rationale": "A single good week does not establish durable recovery.",
              "keyIndicators": [
                "Still has hard days"
              ],
              "commonMistake": "Discharging on a single positive data point."
            }
          }
        ],
        "evidenceRef": [
          "R1",
          "R2"
        ]
      }
    ],
    "references": [
      {
        "id": "R1",
        "source": "DSM-5-TR",
        "detail": "Adjustment Disorder criteria; differentiation from MDD and GAD; diagnosis is dynamic if criteria later met."
      },
      {
        "id": "R2",
        "source": "APA CPG",
        "detail": "Brief, problem-focused/supportive intervention for stressor-linked, time-limited distress; step up if it worsens."
      }
    ]
  }
];

module.exports = { SEED_CASES };
