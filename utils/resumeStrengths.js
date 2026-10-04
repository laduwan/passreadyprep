// Turns a learner's strongest practice areas into résumé-ready competency
// statements for the résumé builder (routes/resume.js). Statements describe
// professional skills only — never scores, percentages, or PassReady Prep data,
// and never a licensure or certification claim.
const STATEMENTS = {
  counseling: 'Evidence-based counseling interventions and core microskills, including reflection, reframing, and immediacy',
  intake: 'Clinical intake, biopsychosocial assessment, and DSM-5-TR differential diagnosis',
  treatment: 'Measurable, client-centered treatment planning and level-of-care decision-making',
  ethics: 'Ethical and legal practice: informed consent, confidentiality, duty to warn, and mandated reporting',
  core: 'Therapeutic alliance building, empathic responding, and culturally responsive practice',
  clinical_focus: 'Clinical knowledge across mood, anxiety, trauma, substance use, and other presenting concerns',
};

const MIN_ANSWERED = 5; // a practice area needs at least this many answers to count

// areas: [{ key, ok, total }] from either exam (NCMHCE uses ok, NCE uses correct)
// Returns up to `max` statements, strongest first, de-duplicated by area.
function topStrengths(areas, max = 3) {
  const best = {};
  areas.forEach((a) => {
    if (!STATEMENTS[a.key] || !a.total || a.total < MIN_ANSWERED) return;
    const pct = a.ok / a.total;
    if (!best[a.key] || pct > best[a.key].pct) best[a.key] = { key: a.key, pct, total: a.total };
  });
  return Object.values(best)
    .sort((x, y) => (y.pct - x.pct) || (y.total - x.total))
    .slice(0, max)
    .map((a) => STATEMENTS[a.key]);
}

module.exports = { topStrengths, STATEMENTS };
