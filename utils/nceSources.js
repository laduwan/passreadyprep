// ============================================================================
// nceSources.js — the reference library NCE items may cite, with a full
// bibliographic citation for every source key.
//
// Items store a short `source` key plus a specific `detail` locator (code
// section, criterion, chapter concept). The evidence record
// (GET /api/admin/nce/items/:id/record) resolves each key to the full citation
// below, so any item can be traced to its authority by ID.
//
// The shared NCMHCE library (tools/cases/references.js) is reused as-is; the
// entries here add the standard texts for the CACREP areas it doesn't cover.
// When citing a textbook, `edition` names the edition the bank was written
// against — an SME confirming a citation should check that edition.
// ============================================================================

const { REFERENCE_LIBRARY } = require('../tools/cases/references');

const NCE_EXTRA_LIBRARY = [
  { key: 'CACREP 2024 Standards', tier: 'primary', body: 'CACREP',
    citation: 'Council for Accreditation of Counseling and Related Educational Programs. (2023). 2024 CACREP Standards.',
    use: 'The eight common core areas the NCE aligns to; program accreditation.' },
  { key: 'Gladding (Counseling: A Comprehensive Profession)', tier: 'seminal', body: 'Gladding',
    citation: 'Gladding, S. T. (2018). Counseling: A Comprehensive Profession (8th ed.). Pearson.',
    use: 'Profession, skills, specialty settings, crisis, family and group overviews.' },
  { key: 'Sue & Sue (Counseling the Culturally Diverse)', tier: 'seminal', body: 'Sue, Sue, Neville & Smith',
    citation: 'Sue, D. W., Sue, D., Neville, H. A., & Smith, L. (2022). Counseling the Culturally Diverse: Theory and Practice (9th ed.). Wiley.',
    use: 'Multicultural competence, identity development models, worldview, culturally responsive practice.' },
  { key: 'Yalom & Leszcz (Group Psychotherapy)', tier: 'seminal', body: 'Yalom & Leszcz',
    citation: 'Yalom, I. D., & Leszcz, M. (2020). The Theory and Practice of Group Psychotherapy (6th ed.). Basic Books.',
    use: 'Therapeutic factors, group development, leader interventions.' },
  { key: 'Sharf (Career Development Theory)', tier: 'seminal', body: 'Sharf',
    citation: 'Sharf, R. S. (2016). Applying Career Development Theory to Counseling (6th ed.). Cengage.',
    use: 'Career development theories and their counseling applications.' },
  { key: 'Berk (Development Through the Lifespan)', tier: 'seminal', body: 'Berk',
    citation: 'Berk, L. E. (2018). Development Through the Lifespan (7th ed.). Pearson.',
    use: 'Human growth and development theories and research across the life span.' },
  { key: 'Erford (Research and Evaluation in Counseling)', tier: 'seminal', body: 'Erford',
    citation: 'Erford, B. T. (2015). Research and Evaluation in Counseling (2nd ed.). Cengage.',
    use: 'Research design, statistics, program evaluation.' },
  { key: 'Forester-Miller & Davis (Practitioner\'s Guide to Ethical Decision Making)', tier: 'primary', body: 'American Counseling Association',
    citation: 'Forester-Miller, H., & Davis, T. E. (2016). Practitioner\'s Guide to Ethical Decision Making (Rev. ed.). American Counseling Association.',
    use: 'ACA ethical decision-making model, including Stadler\'s tests of justice, publicity and universality.' },
  { key: 'Psychological First Aid Field Operations Guide (NCTSN/NCPTSD)', tier: 'protocol', body: 'NCTSN / National Center for PTSD',
    citation: 'Brymer, M., Jacobs, A., Layne, C., Pynoos, R., Ruzek, J., Steinberg, A., Vernberg, E., & Watson, P. (2006). Psychological First Aid: Field Operations Guide (2nd ed.). National Child Traumatic Stress Network and National Center for PTSD.',
    use: 'PFA core actions for disaster and crisis response.' },
  { key: 'AASM Clinical Practice Guideline (Insomnia)', tier: 'guideline', body: 'American Academy of Sleep Medicine',
    citation: 'Edinger, J. D., et al. (2021). Behavioral and psychological treatments for chronic insomnia disorder in adults: An American Academy of Sleep Medicine clinical practice guideline. Journal of Clinical Sleep Medicine, 17(2), 255-262.',
    use: 'CBT-I and its components for chronic insomnia.' },
  { key: 'ASGW Best Practice Guidelines', tier: 'primary', body: 'Association for Specialists in Group Work',
    citation: 'Association for Specialists in Group Work. (2008). Best practice guidelines 2007 revisions. The Journal for Specialists in Group Work, 33(2), 111-117.',
    use: 'Group planning, screening, performing and processing; group worker responsibilities.' },
  { key: 'FERPA', tier: 'primary', body: 'U.S. Department of Education',
    citation: 'Family Educational Rights and Privacy Act of 1974, 20 U.S.C. § 1232g; 34 CFR Part 99.',
    use: 'Privacy of student education records; parent and eligible-student rights in schools.' },
  { key: 'SAMHSA TIP 57', tier: 'guideline', body: 'SAMHSA',
    citation: 'Substance Abuse and Mental Health Services Administration. (2014). Trauma-Informed Care in Behavioral Health Services (Treatment Improvement Protocol 57).',
    use: 'Trauma-informed principles, screening and practice.' },
  { key: 'MSJCC (Ratts et al., 2016)', tier: 'primary', body: 'AMCD / ACA',
    citation: 'Ratts, M. J., Singh, A. A., Nassar-McMillan, S., Butler, S. K., & McCullough, J. R. (2016). Multicultural and social justice counseling competencies: Guidelines for the counseling profession. Journal of Multicultural Counseling and Development, 44(1), 28-48.',
    use: 'Multicultural and social justice competencies endorsed by ACA.' },
  { key: 'Marlatt & Donovan (Relapse Prevention)', tier: 'seminal', body: 'Marlatt & Donovan',
    citation: 'Marlatt, G. A., & Donovan, D. M. (Eds.). (2005). Relapse Prevention: Maintenance Strategies in the Treatment of Addictive Behaviors (2nd ed.). Guilford Press.',
    use: 'Cognitive-behavioral relapse prevention model; high-risk situations; abstinence violation effect.' },
  { key: 'Worden (Grief Counseling)', tier: 'seminal', body: 'Worden',
    citation: 'Worden, J. W. (2018). Grief Counseling and Grief Therapy: A Handbook for the Mental Health Practitioner (5th ed.). Springer.',
    use: 'Tasks of mourning; mediators of mourning; complicated grief.' },
  { key: 'Goldenberg (Family Therapy)', tier: 'seminal', body: 'Goldenberg, Stanton & Goldenberg',
    citation: 'Goldenberg, I., Stanton, M., & Goldenberg, H. (2017). Family Therapy: An Overview (9th ed.). Cengage.',
    use: 'Family systems theories and techniques: Bowen, structural, strategic, experiential, narrative.' },
  { key: 'Lambert (Outcome Monitoring)', tier: 'seminal', body: 'Lambert',
    citation: 'Lambert, M. J. (2010). Prevention of Treatment Failure: The Use of Measuring, Monitoring, and Feedback in Clinical Practice. American Psychological Association.',
    use: 'Routine outcome monitoring (OQ-45) and feedback for clients not on track.' },
  { key: 'SAMHSA 988 Lifeline', tier: 'guideline', body: 'SAMHSA',
    citation: 'Substance Abuse and Mental Health Services Administration. 988 Suicide & Crisis Lifeline (launched July 16, 2022).',
    use: 'National crisis line: call, text or chat, 24/7.' },
  { key: 'LOCUS (AACP)', tier: 'guideline', body: 'American Association for Community Psychiatry',
    citation: 'American Association for Community Psychiatry. (2020). Level of Care Utilization System for Psychiatric and Addiction Services (LOCUS), Version 20.',
    use: 'Mental health level-of-care determination across intensity levels.' },
  { key: 'Linehan (DBT Skills Training Manual)', tier: 'seminal', body: 'Linehan',
    citation: 'Linehan, M. M. (2015). DBT Skills Training Manual (2nd ed.). Guilford Press.',
    use: 'DBT skills modules (mindfulness, distress tolerance, emotion regulation, interpersonal effectiveness), chain analysis and validation.' },
  { key: 'James & Gilliland (Crisis Intervention Strategies)', tier: 'seminal', body: 'James & Gilliland',
    citation: 'James, R. K., & Gilliland, B. E. (2017). Crisis Intervention Strategies (8th ed.). Cengage.',
    use: 'Six-step model of crisis intervention; crisis assessment.' },
  { key: 'Kanel (A Guide to Crisis Intervention)', tier: 'seminal', body: 'Kanel',
    citation: 'Kanel, K. (2019). A Guide to Crisis Intervention (6th ed.). Cengage.',
    use: 'ABC model of crisis intervention.' },
  { key: 'ACA Advocacy Competencies', tier: 'primary', body: 'American Counseling Association',
    citation: 'Toporek, R. L., & Daniels, J. (2018). 2018 Update and Expansion of the 2003 ACA Advocacy Competencies: Honoring the Work of the Past and Contextualizing the Present. American Counseling Association. (Original competencies: Lewis, J. A., Arnold, M. S., House, R., & Toporek, R. L., 2003.)',
    use: 'Advocacy domains (client/student, school/community, public arena) and acting with vs on behalf of clients.' },
  { key: 'ASCA National Model', tier: 'primary', body: 'American School Counselor Association',
    citation: 'American School Counselor Association. (2019). The ASCA National Model: A Framework for School Counseling Programs (4th ed.).',
    use: 'School counselor role; appropriate vs inappropriate activities; comprehensive school counseling programs.' },
  { key: 'Brown & Ryan Krane (Career Interventions)', tier: 'seminal', body: 'Brown & Ryan Krane',
    citation: 'Brown, S. D., & Ryan Krane, N. E. (2000). Four (or five) sessions and a cloud of dust: Old assumptions and new observations about career counseling. In S. D. Brown & R. W. Lent (Eds.), Handbook of Counseling Psychology (3rd ed., pp. 740-766). Wiley.',
    use: 'Critical ingredients of effective career interventions.' },
  { key: 'Gelso & Hayes (Countertransference)', tier: 'seminal', body: 'Gelso & Hayes',
    citation: 'Gelso, C. J., & Hayes, J. A. (2007). Countertransference and the Therapist\'s Inner Experience: Perils and Possibilities. Lawrence Erlbaum.',
    use: 'Classical, totalistic, complementary and integrative views of countertransference; managing countertransference.' },
  { key: 'Friedlander et al. (Alliances in Couple & Family Therapy)', tier: 'seminal', body: 'Friedlander, Escudero & Heatherington',
    citation: 'Friedlander, M. L., Escudero, V., & Heatherington, L. (2006). Therapeutic Alliances in Couple and Family Therapy: An Empirically Informed Guide to Practice. American Psychological Association.',
    use: 'SOFTA alliance dimensions; split (unbalanced) alliances in conjoint therapy, building on Pinsof\'s integrative alliance model.' },
  { key: 'Davis (Multidimensional Empathy)', tier: 'primary', body: 'Davis',
    citation: 'Davis, M. H. (1983). Measuring individual differences in empathy: Evidence for a multidimensional approach. Journal of Personality and Social Psychology, 44(1), 113-126.',
    use: 'Cognitive (perspective taking) vs affective (empathic concern, personal distress) components of empathy.' },
];

const NCE_REFERENCE_LIBRARY = [...REFERENCE_LIBRARY, ...NCE_EXTRA_LIBRARY];
const NCE_SOURCES = NCE_REFERENCE_LIBRARY.map((r) => r.key);
const BY_KEY = new Map(NCE_REFERENCE_LIBRARY.map((r) => [r.key, r]));

// An item's references with each source key resolved to its library entry.
function resolveReferences(refs) {
  return (refs || []).map((r) => {
    const lib = BY_KEY.get(r && r.source);
    return {
      source: r && r.source,
      detail: (r && r.detail) || '',
      citation: lib ? lib.citation : null,
      tier: lib ? lib.tier : null,
      body: lib ? lib.body : null,
      use: lib ? lib.use : null,
      approved: !!lib,
    };
  });
}

module.exports = { NCE_REFERENCE_LIBRARY, NCE_EXTRA_LIBRARY, NCE_SOURCES, resolveReferences };
