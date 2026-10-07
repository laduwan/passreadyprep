#!/usr/bin/env node
// Builds public/sheets/nce-study-sheets.pdf, the NCE counterpart of
// public/sheets/ncmhce-study-sheets.pdf (same layout: teal section headings,
// a bold term with a purple tag, and a one-line key fact under it).
//
// Sections follow the eight CACREP content areas in utils/nceBlueprint.js.
// Edit SECTIONS below, then run:  node tools/nce/build-study-sheets.js
//
// Text uses the PDF standard Helvetica font (WinAnsi), so stick to plain
// ASCII plus the en/em dash, middle dot and curly quotes.

const fs = require('fs');
const path = require('path');
const { PDFDocument, StandardFonts, rgb } = require('pdf-lib');
const bp = require('../../utils/nceBlueprint');

const OUT = path.join(__dirname, '..', '..', 'public', 'sheets', 'nce-study-sheets.pdf');

// [term, tag (names, years, ranges), key fact]
const SECTIONS = {
  professional_orientation: [
    ['ACA Code of Ethics', '2014', 'Nine sections, A–I: relationship, confidentiality, responsibility, colleagues, assessment, supervision, research, distance counseling, resolving issues'],
    ['NBCC Code of Ethics', 'NCC', 'Binds National Certified Counselors; NBCC also administers the NCE'],
    ['Licensure vs. certification', 'state vs. national', 'Licensure is state law and required to practice; certification (NCC) is voluntary and national'],
    ['Moral principles', 'Kitchener', 'Autonomy, nonmaleficence, beneficence, justice, fidelity (veracity is often added)'],
    ['Informed consent', 'ACA A.2', 'Purpose, risks and benefits, limits of confidentiality, fees, records, right to refuse or end services'],
    ['Confidentiality exceptions', 'ACA B.2', 'Serious and foreseeable harm, suspected abuse or neglect, court order, client waiver'],
    ['Tarasoff v. Regents of UC', '1976', 'Duty to protect an identifiable victim from a client’s serious threat of violence'],
    ['Jaffee v. Redmond', '1996', 'Psychotherapist–patient privilege recognized in federal courts, including licensed social workers'],
    ['HIPAA', '1996', 'Federal privacy and security rules for health records; psychotherapy notes get extra protection'],
    ['FERPA', '1974', 'Parents may access a minor student’s education records; the right passes to the student at 18'],
    ['42 CFR Part 2', 'federal', 'Stricter confidentiality for substance use disorder treatment records'],
    ['Former clients', 'ACA A.5.c', 'Romantic or sexual relationships prohibited for 5 years after the last professional contact'],
    ['Mandated reporting', 'state law', 'Reasonable suspicion of child or vulnerable-adult abuse is enough; you do not need proof'],
    ['Clifford Beers', '1908', 'A Mind That Found Itself; launched the mental hygiene movement'],
  ],
  social_cultural: [
    ['Multicultural competencies', 'Sue, Arredondo & McDavis 1992', 'Counselor awareness of own biases, knowledge of client worldview, culturally appropriate skills'],
    ['MSJCC', '2015', 'Self-awareness, client worldview, counseling relationship, counseling and advocacy interventions'],
    ['Racial/Cultural Identity Development', 'Atkinson, Morten & Sue', 'Conformity, dissonance, resistance and immersion, introspection, integrative awareness'],
    ['Nigrescence', 'Cross', 'Pre-encounter, encounter, immersion–emersion, internalization (internalization–commitment)'],
    ['White racial identity', 'Helms', 'Contact, disintegration, reintegration, pseudo-independence, immersion/emersion, autonomy'],
    ['Gay and lesbian identity', 'Cass', 'Identity confusion, comparison, tolerance, acceptance, pride, synthesis'],
    ['Acculturation strategies', 'Berry', 'Integration, assimilation, separation, marginalization'],
    ['Cultural dimensions', 'Hofstede', 'Individualism–collectivism, power distance, uncertainty avoidance, masculinity–femininity'],
    ['Etic vs. emic', '', 'Etic: universal across cultures. Emic: specific to one culture'],
    ['Microaggressions', 'Sue', 'Microassaults, microinsults, microinvalidations'],
    ['Cultural encapsulation', 'Wrenn 1962', 'Viewing clients only through the counselor’s own cultural assumptions'],
    ['ADDRESSING', 'Hays', 'Age, Disability, Religion, Ethnicity, Socioeconomic status, Sexual orientation, Indigenous heritage, National origin, Gender'],
  ],
  human_growth: [
    ['Cognitive development', 'Piaget', 'Sensorimotor (0–2), preoperational (2–7), concrete operational (7–11), formal operational (11+)'],
    ['Psychosocial stages', 'Erikson', 'Trust, autonomy, initiative, industry, identity, intimacy, generativity, integrity (each vs. its crisis)'],
    ['Psychosexual stages', 'Freud', 'Oral, anal, phallic, latency, genital'],
    ['Moral development', 'Kohlberg', 'Preconventional (punishment, self-interest), conventional (approval, law and order), postconventional (social contract, universal principles)'],
    ['Ethic of care', 'Gilligan', 'Individual survival, goodness as self-sacrifice, morality of nonviolence'],
    ['Attachment', 'Bowlby; Ainsworth', 'Strange Situation: secure, anxious-avoidant, anxious-ambivalent; Main added disorganized'],
    ['Zone of proximal development', 'Vygotsky', 'What a learner can do with help; support through scaffolding'],
    ['Identity statuses', 'Marcia', 'Diffusion, foreclosure, moratorium, achievement (crisis and commitment)'],
    ['Hierarchy of needs', 'Maslow', 'Physiological, safety, love and belonging, esteem, self-actualization'],
    ['Ecological systems', 'Bronfenbrenner', 'Microsystem, mesosystem, exosystem, macrosystem, chronosystem'],
    ['Stages of grief', 'Kübler-Ross', 'Denial, anger, bargaining, depression, acceptance (not strictly linear)'],
  ],
  career: [
    ['Trait and factor', 'Parsons 1909', 'Know yourself, know the world of work, use true reasoning to match them'],
    ['RIASEC', 'Holland', 'Realistic, Investigative, Artistic, Social, Enterprising, Conventional; congruence; Self-Directed Search'],
    ['Life-span, life-space', 'Super', 'Growth, exploration, establishment, maintenance, disengagement; Life-Career Rainbow; self-concept'],
    ['Circumscription and compromise', 'Gottfredson', 'Children rule out careers by sex type and prestige, then compromise on accessibility'],
    ['Social learning / happenstance', 'Krumboltz', 'Learning experiences shape choices; planned happenstance turns chance events into opportunities'],
    ['Needs-based theory', 'Roe', 'Early parent–child relationships shape needs and steer people toward or away from working with people'],
    ['Developmental stages', 'Ginzberg', 'Fantasy, tentative, realistic'],
    ['SCCT', 'Lent, Brown & Hackett', 'Self-efficacy, outcome expectations and goals drive career interests and choices'],
    ['Career construction', 'Savickas', 'Career adaptability: concern, control, curiosity, confidence'],
    ['Cognitive information processing', 'Peterson, Sampson & Reardon', 'Pyramid of information processing; CASVE cycle: communication, analysis, synthesis, valuing, execution'],
    ['Decision making', 'Tiedeman & O’Hara', 'Anticipation (exploring, crystallizing, choosing) then implementation'],
    ['Career resources', '', 'O*NET replaced the Dictionary of Occupational Titles; Strong Interest Inventory; SDS'],
  ],
  helping_relationships: [
    ['Person-centered', 'Rogers', 'Congruence, unconditional positive regard, empathic understanding: necessary and sufficient conditions'],
    ['Psychoanalytic', 'Freud', 'Id, ego, superego; defense mechanisms; free association, dream analysis, transference'],
    ['Individual psychology', 'Adler', 'Inferiority, style of life, birth order, social interest; acting “as if”, spitting in the soup'],
    ['Existential', 'Frankl; May; Yalom', 'Meaning, freedom and responsibility, isolation, death; logotherapy (Frankl)'],
    ['Gestalt', 'Perls', 'Here-and-now awareness, unfinished business, empty chair'],
    ['Behavioral', 'Skinner; Wolpe', 'Operant conditioning; systematic desensitization via reciprocal inhibition'],
    ['REBT', 'Ellis', 'A-B-C-D-E: activating event, belief, consequence, disputing, effective new belief'],
    ['Cognitive therapy', 'Beck', 'Automatic thoughts, cognitive distortions, cognitive triad (self, world, future)'],
    ['Reality therapy / choice theory', 'Glasser; Wubbolding', 'Needs: survival, love and belonging, power, freedom, fun; WDEP'],
    ['Solution-focused', 'de Shazer & Berg', 'Miracle question, exception questions, scaling questions'],
    ['Narrative', 'White & Epston', 'Externalizing the problem; re-authoring the client’s story'],
    ['Motivational interviewing', 'Miller & Rollnick', 'OARS skills; evoke change talk; roll with sustain talk'],
    ['Stages of change', 'Prochaska & DiClemente', 'Precontemplation, contemplation, preparation, action, maintenance'],
    ['Transactional analysis', 'Berne', 'Parent, Adult, Child ego states; games and life scripts'],
    ['Family systems', 'Bowen', 'Differentiation of self, triangles, multigenerational transmission, genogram'],
    ['Structural / experiential family', 'Minuchin; Satir', 'Minuchin: boundaries, subsystems, enactment. Satir: communication stances'],
    ['Microskills', 'Ivey', 'Attending, open questions, paraphrasing, reflecting feeling, summarizing'],
  ],
  group: [
    ['Group stages', 'Tuckman', 'Forming, storming, norming, performing, adjourning'],
    ['Group stages', 'Corey', 'Initial, transition, working, final'],
    ['Therapeutic factors', 'Yalom (11)', 'Hope, universality, information, altruism, family recapitulation, socializing, imitation, interpersonal learning, cohesiveness, catharsis, existential factors'],
    ['Group types', 'ASGW', 'Task/work, psychoeducation, counseling, psychotherapy'],
    ['Screening', 'ACA A.9.a', 'Screen prospective members to match needs and goals with the group'],
    ['Johari window', 'Luft & Ingham', 'Open, blind, hidden, unknown'],
    ['Leadership styles', 'Lewin', 'Autocratic, democratic, laissez-faire'],
    ['Process vs. content', '', 'Content is what is said; process is how members relate while saying it'],
    ['T-groups', 'Lewin; NTL', 'Training groups focused on here-and-now interpersonal learning'],
    ['Psychodrama', 'Moreno', 'Protagonist, auxiliary egos, doubling, role reversal; Moreno also created the sociogram'],
  ],
  assessment: [
    ['Reliability', 'consistency', 'Test-retest, alternate forms, split-half (Spearman-Brown), internal consistency (Cronbach’s alpha), interrater'],
    ['Validity', 'accuracy', 'Content, criterion (concurrent, predictive), construct (convergent, discriminant)'],
    ['Normal curve', '68 · 95 · 99.7', 'Percent of scores within 1, 2 and 3 standard deviations of the mean'],
    ['Standard scores', 'M / SD', 'z 0/1 · T 50/10 · deviation IQ 100/15 · stanine 5/2 (range 1–9)'],
    ['Standard error of measurement', 'SEM', 'Builds a confidence band around an observed score'],
    ['Scales of measurement', 'NOIR', 'Nominal, ordinal, interval, ratio (true zero)'],
    ['Norm- vs. criterion-referenced', '', 'Compared with other test takers vs. against a set standard'],
    ['Skewness', '', 'Positive skew: tail to the right, mean > median > mode. Negative skew: the reverse'],
    ['Correlation', 'r from -1 to +1', 'Strength and direction; r squared = shared variance (coefficient of determination)'],
    ['Intelligence tests', 'Wechsler; Stanford-Binet', 'WAIS-IV (adults), WISC-V (children), Stanford-Binet 5'],
    ['Personality tests', 'objective vs. projective', 'MMPI-3 and MCMI-IV (objective); Rorschach and TAT (projective); MBTI (type)'],
    ['Beck Depression Inventory-II', 'BDI-II', '21-item self-report measure of depressive symptom severity'],
    ['Mental status exam', 'MSE', 'Appearance, behavior, speech, mood and affect, thought process and content, perception, cognition, insight, judgment'],
  ],
  research: [
    ['Type I error', 'alpha', 'Rejecting a true null hypothesis (false positive)'],
    ['Type II error', 'beta', 'Failing to reject a false null hypothesis (false negative); power = 1 - beta'],
    ['Choosing a test', '', 't-test: 2 means · ANOVA (F): 3+ groups · chi-square: frequencies · Pearson r: interval · Spearman rho: ordinal'],
    ['Research designs', '', 'Experimental (random assignment), quasi-experimental (no random assignment), correlational, single-subject (AB, ABAB)'],
    ['Internal validity threats', '', 'History, maturation, testing, instrumentation, regression to the mean, selection, attrition'],
    ['External validity', '', 'How well results generalize to other people, settings and times'],
    ['Bias controls', '', 'Hawthorne effect, placebo effect; double-blind designs reduce expectancy bias'],
    ['Qualitative traditions', '', 'Grounded theory, phenomenology, ethnography, case study'],
    ['Trustworthiness', 'Lincoln & Guba', 'Credibility, transferability, dependability, confirmability'],
    ['Program evaluation', '', 'Needs assessment; formative (during) vs. summative (outcome) evaluation'],
    ['Belmont Report', '1979', 'Respect for persons, beneficence, justice; IRBs review research with human subjects'],
    ['Descriptive statistics', '', 'Central tendency: mean, median, mode. Variability: range, variance, standard deviation'],
  ],
};

const TEAL = rgb(0.06, 0.46, 0.43);
const PURPLE = rgb(0.55, 0.36, 0.96);
const INK = rgb(0.07, 0.09, 0.15);
const GREY = rgb(0.35, 0.39, 0.45);

async function build() {
  const doc = await PDFDocument.create();
  doc.setTitle('NCE Study Sheets — PassReady Prep');
  doc.setAuthor('PassReady Prep');
  const reg = await doc.embedFont(StandardFonts.Helvetica);
  const bold = await doc.embedFont(StandardFonts.HelveticaBold);

  const W = 612, H = 792, M = 54, maxW = W - 2 * M;
  let page, y;
  const newPage = () => { page = doc.addPage([W, H]); y = H - M; };

  function wrap(text, font, size, width) {
    const lines = [];
    let line = '';
    text.split(' ').forEach((w) => {
      const t = line ? line + ' ' + w : w;
      if (font.widthOfTextAtSize(t, size) > width && line) { lines.push(line); line = w; } else line = t;
    });
    if (line) lines.push(line);
    return lines;
  }
  const center = (text, font, size, color) => {
    page.drawText(text, { x: (W - font.widthOfTextAtSize(text, size)) / 2, y, size, font, color });
  };

  newPage();
  y -= 10;
  center('NCE Quick Reference', bold, 22, TEAL); y -= 20;
  const total = Object.values(SECTIONS).reduce((n, s) => n + s.length, 0);
  center('8 CACREP Content Areas · ' + total + ' Key Theories, Names & Facts', reg, 11, GREY); y -= 24;
  center('PassReady Prep · GA Integrated Therapeutic Perspectives LLC', reg, 7.5, GREY); y -= 30;

  bp.CACREP_AREAS.forEach((area) => {
    const rows = SECTIONS[area.key];
    if (!rows) throw new Error('No study-sheet section for CACREP area ' + area.key);
    if (y < M + 80) newPage(); else if (y < H - M) y -= 10;
    page.drawText(area.label, { x: M, y, size: 15, font: bold, color: TEAL });
    y -= 22;
    rows.forEach(([term, tag, fact]) => {
      const factLines = wrap(fact, reg, 8.5, maxW - 12);
      const need = 12 + factLines.length * 11 + 8;
      if (y - need < M) newPage();
      page.drawText(term, { x: M, y, size: 9.5, font: bold, color: INK });
      if (tag) page.drawText('(' + tag + ')', { x: M + bold.widthOfTextAtSize(term, 9.5) + 4, y, size: 9.5, font: bold, color: PURPLE });
      y -= 12;
      factLines.forEach((l) => { page.drawText(l, { x: M + 12, y, size: 8.5, font: reg, color: GREY }); y -= 11; });
      y -= 7;
    });
  });

  const pages = doc.getPages();
  pages.forEach((p, i) => {
    const t = 'NCE® is a registered trademark of NBCC. PassReady Prep is not affiliated with NBCC.   ' + (i + 1) + ' / ' + pages.length;
    p.drawText(t, { x: (W - reg.widthOfTextAtSize(t, 7)) / 2, y: 28, size: 7, font: reg, color: GREY });
  });

  fs.writeFileSync(OUT, await doc.save());
  console.log('Wrote ' + path.relative(process.cwd(), OUT) + ' (' + pages.length + ' pages, ' + total + ' entries)');
}

build().catch((e) => { console.error(e); process.exit(1); });
