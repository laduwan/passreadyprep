/**
 * Copyright (c) 2026 CounselorReady, a subsidiary of Ga Integrated Therapeutic Perspectives, LLC.
 * All rights reserved. Proprietary and confidential.
 *
 * NCMHCE Case Spec Queue — source list for automated draft generation.
 *
 * ncmhceCaseGen picks one spec per run, generates a draft simulation, and saves
 * it for admin review. Specs rotate in order; each generated case records its
 * `specId` so the job knows what has already been produced. When every spec has
 * been generated, the cycle restarts from the oldest.
 *
 * ADDING SPECS: append to the array. Never remove or reorder existing entries
 * (it shifts the rotation). To retire a spec, set `retired: true`.
 *
 * difficulty: 'foundational' | 'intermediate' | 'advanced'  (must match model enum)
 */

const NCMHCE_CASE_SPECS = [
  {
    id: 'mood-mdd-adult-foundational',
    contentArea: 'Mood Disorders',
    difficulty: 'foundational',
    population: 'an adult',
    diagnosisHint: 'Major Depressive Disorder, single episode',
    brief: 'An adult presenting with low mood, anhedonia, sleep and appetite change, and functional decline. Include differential with adjustment disorder and persistent depressive disorder.'
  },
  {
    id: 'anxiety-gad-adult-foundational',
    contentArea: 'Anxiety Disorders',
    difficulty: 'foundational',
    population: 'an adult',
    diagnosisHint: 'Generalized Anxiety Disorder',
    brief: 'Chronic, excessive worry across domains with restlessness, fatigue, and concentration difficulty. Differentiate from panic disorder and a medical cause.'
  },
  {
    id: 'trauma-ptsd-adult-intermediate',
    contentArea: 'Trauma- and Stressor-Related Disorders',
    difficulty: 'intermediate',
    population: 'an adult',
    diagnosisHint: 'Posttraumatic Stress Disorder',
    brief: 'Intrusion, avoidance, negative alterations in cognition/mood, and arousal after a traumatic event. Include risk screening and a trauma-informed information-gathering section.'
  },
  {
    id: 'substance-aud-adult-intermediate',
    contentArea: 'Substance-Related and Addictive Disorders',
    difficulty: 'intermediate',
    population: 'an adult',
    diagnosisHint: 'Alcohol Use Disorder, moderate',
    brief: 'Escalating use, failed cutting-down attempts, tolerance, and role impairment. Include a motivational, non-confrontational stance and screening for withdrawal risk.'
  },
  {
    id: 'child-adhd-intermediate',
    contentArea: 'Neurodevelopmental Disorders',
    difficulty: 'intermediate',
    population: 'a school-age child (with caregiver present)',
    diagnosisHint: 'Attention-Deficit/Hyperactivity Disorder, combined presentation',
    brief: 'Inattention and hyperactivity across home and school. Emphasize collateral information, developmental history, and coordination with school and pediatrician.'
  },
  {
    id: 'panic-adult-intermediate',
    contentArea: 'Anxiety Disorders',
    difficulty: 'intermediate',
    population: 'an adult',
    diagnosisHint: 'Panic Disorder',
    brief: 'Recurrent unexpected panic attacks with anticipatory anxiety and avoidance. Rule out medical contributors and differentiate from specific phobia.'
  },
  {
    id: 'ocd-adult-advanced',
    contentArea: 'Obsessive-Compulsive and Related Disorders',
    difficulty: 'advanced',
    population: 'an adult',
    diagnosisHint: 'Obsessive-Compulsive Disorder',
    brief: 'Intrusive obsessions and time-consuming compulsions with insight that varies. Include ERP-oriented decision-making and differentiation from GAD.'
  },
  {
    id: 'bipolar-adult-advanced',
    contentArea: 'Mood Disorders',
    difficulty: 'advanced',
    population: 'an adult',
    diagnosisHint: 'Bipolar I Disorder, current episode depressed',
    brief: 'Current depressive presentation with a history suggestive of a prior manic episode. Stress careful history-taking, safety, and the risk of antidepressant monotherapy assumptions.'
  },
  {
    id: 'grief-adult-foundational',
    contentArea: 'Trauma- and Stressor-Related Disorders',
    difficulty: 'foundational',
    population: 'an adult',
    diagnosisHint: 'Adjustment Disorder with depressed mood (differentiate from prolonged grief and MDD)',
    brief: 'Distress following a significant loss. Center the differential between normative grief, prolonged grief disorder, adjustment disorder, and MDD.'
  },
  {
    id: 'eating-adolescent-advanced',
    contentArea: 'Feeding and Eating Disorders',
    difficulty: 'advanced',
    population: 'an adolescent (with caregiver present)',
    diagnosisHint: 'Anorexia Nervosa, restricting type',
    brief: 'Restriction, fear of weight gain, and body-image disturbance. Emphasize medical risk, collateral, and coordinated care; avoid specific weight/calorie numbers.'
  },
  {
    id: 'social-anxiety-young-adult-foundational',
    contentArea: 'Anxiety Disorders',
    difficulty: 'foundational',
    population: 'a young adult',
    diagnosisHint: 'Social Anxiety Disorder',
    brief: 'Marked fear of social/performance situations with avoidance and academic/occupational impact. Differentiate from avoidant personality traits and panic disorder.'
  },
  {
    id: 'psychosis-young-adult-advanced',
    contentArea: 'Schizophrenia Spectrum and Other Psychotic Disorders',
    difficulty: 'advanced',
    population: 'a young adult',
    diagnosisHint: 'Brief Psychotic Disorder vs. early Schizophreniform (differential)',
    brief: 'First-episode positive symptoms of recent onset. Emphasize safety, medical/substance rule-outs, urgent coordination with psychiatry, and family involvement.'
  },
  {
    id: 'borderline-adult-advanced',
    contentArea: 'Personality Disorders',
    difficulty: 'advanced',
    population: 'an adult',
    diagnosisHint: 'Borderline Personality Disorder',
    brief: 'Affective instability, fear of abandonment, identity disturbance, and self-harm history. Stress risk assessment, validation, and frame/boundary decisions.'
  },
  {
    id: 'perinatal-mdd-adult-intermediate',
    contentArea: 'Mood Disorders',
    difficulty: 'intermediate',
    population: 'a postpartum adult',
    diagnosisHint: 'Major Depressive Disorder with peripartum onset',
    brief: 'Depressive symptoms within the postpartum period. Include screening for thoughts of harm to self or infant and coordination with OB/medical providers.'
  }
];

module.exports = { NCMHCE_CASE_SPECS };
