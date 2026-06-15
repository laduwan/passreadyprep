// build-manual.js — generates the Documentary Evidence Technical Manual (.docx)
// Pulls the real reference library + seed wiring so the manual matches the pipeline.
const fs = require('fs');
const {
  Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell,
  Header, Footer, AlignmentType, LevelFormat, TableOfContents, HeadingLevel,
  BorderStyle, WidthType, ShadingType, PageNumber, PageBreak,
} = require('docx');

const { REFERENCE_LIBRARY } = require('./references');
const { SEED_CASES } = require('./seed-cases');
const bp = require('./blueprint');

const NAVY = '284157', BURGUNDY = '6B1D34', HUNTER = '4A7C59', GOLD = 'D4A855', GREY = '555555';
const CONTENT_W = 9360;

// ---- helpers ----------------------------------------------------------------
const H1 = (t) => new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun(t)] });
const H2 = (t) => new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun(t)] });
const H3 = (t) => new Paragraph({ heading: HeadingLevel.HEADING_3, children: [new TextRun(t)] });
const P = (t, opts = {}) => new Paragraph({ spacing: { after: 140, line: 276 }, children: [new TextRun({ text: t, ...opts })] });
function runs(parts) { return new Paragraph({ spacing: { after: 140, line: 276 }, children: parts.map((p) => new TextRun(p)) }); }
const bullet = (t) => new Paragraph({ numbering: { reference: 'bullets', level: 0 }, spacing: { after: 60, line: 264 }, children: [new TextRun(t)] });
const bulletRuns = (parts) => new Paragraph({ numbering: { reference: 'bullets', level: 0 }, spacing: { after: 60, line: 264 }, children: parts.map((p) => new TextRun(p)) });
const numItem = (t) => new Paragraph({ numbering: { reference: 'numbers', level: 0 }, spacing: { after: 80, line: 264 }, children: [new TextRun(t)] });

const cellBorder = { style: BorderStyle.SINGLE, size: 1, color: 'CCCCCC' };
const cellBorders = { top: cellBorder, bottom: cellBorder, left: cellBorder, right: cellBorder };
function cell(width, children, fill) {
  return new TableCell({
    borders: cellBorders, width: { size: width, type: WidthType.DXA },
    margins: { top: 60, bottom: 60, left: 110, right: 110 },
    shading: fill ? { fill, type: ShadingType.CLEAR } : undefined,
    children: Array.isArray(children) ? children : [children],
  });
}
function headerCell(width, text) {
  return cell(width, new Paragraph({ children: [new TextRun({ text, bold: true, color: 'FFFFFF', size: 18 })] }), NAVY);
}
function txt(text, opts = {}) { return new Paragraph({ children: [new TextRun({ text, size: 18, ...opts })] }); }

// ---- reference library table ------------------------------------------------
const refRows = [new TableRow({ tableHeader: true, children: [
  headerCell(1900, 'Source'), headerCell(5660, 'Citation & application'), headerCell(1800, 'Tier'),
] })];
for (const r of REFERENCE_LIBRARY) {
  refRows.push(new TableRow({ children: [
    cell(1900, txt(r.key, { bold: true })),
    cell(5660, [txt(r.citation), txt(r.use, { italics: true, color: GREY })]),
    cell(1800, txt(r.tier)),
  ] }));
}
const refTable = new Table({ width: { size: CONTENT_W, type: WidthType.DXA }, columnWidths: [1900, 5660, 1800], rows: refRows });

// ---- worked-example blocks --------------------------------------------------
function caseBlock(c) {
  const out = [];
  out.push(H3(`${c.id} — ${c.title}`));
  out.push(runs([
    { text: 'Diagnosis (given): ', bold: true }, { text: `${c.diagnosis.name} (${c.diagnosis.code})  ` },
    { text: 'Category: ', bold: true }, { text: `${c.category}  ` },
    { text: 'Difficulty: ', bold: true }, { text: c.difficulty },
  ]));
  // references sub-table
  const rows = [new TableRow({ tableHeader: true, children: [
    headerCell(900, 'Ref'), headerCell(2100, 'Source'), headerCell(6360, 'Specific basis applied'),
  ] })];
  for (const r of c.references) {
    rows.push(new TableRow({ children: [
      cell(900, txt(r.id, { bold: true })), cell(2100, txt(r.source)), cell(6360, txt(r.detail)),
    ] }));
  }
  out.push(new Table({ width: { size: CONTENT_W, type: WidthType.DXA }, columnWidths: [900, 2100, 6360], rows }));
  // evidence map
  const map = c.questions.map((q) => `${q.id} (${q.domain}) \u2192 ${q.evidenceRef.join(', ')}`).join('   |   ');
  out.push(new Paragraph({ spacing: { before: 100, after: 200 }, children: [
    new TextRun({ text: 'Keyed-answer evidence map: ', bold: true, size: 18 }),
    new TextRun({ text: map, size: 18, color: GREY }),
  ] }));
  return out;
}

// ---- document ---------------------------------------------------------------
const doc = new Document({
  creator: 'GA Integrated Therapeutic Perspectives LLC',
  title: 'Documentary Evidence Technical Manual — NCMHCE Case Bank',
  styles: {
    default: { document: { run: { font: 'Arial', size: 22 } } },
    paragraphStyles: [
      { id: 'Heading1', name: 'Heading 1', basedOn: 'Normal', next: 'Normal', quickFormat: true,
        run: { size: 30, bold: true, font: 'Arial', color: NAVY },
        paragraph: { spacing: { before: 300, after: 160 }, outlineLevel: 0 } },
      { id: 'Heading2', name: 'Heading 2', basedOn: 'Normal', next: 'Normal', quickFormat: true,
        run: { size: 25, bold: true, font: 'Arial', color: BURGUNDY },
        paragraph: { spacing: { before: 220, after: 120 }, outlineLevel: 1 } },
      { id: 'Heading3', name: 'Heading 3', basedOn: 'Normal', next: 'Normal', quickFormat: true,
        run: { size: 22, bold: true, font: 'Arial', color: HUNTER },
        paragraph: { spacing: { before: 160, after: 80 }, outlineLevel: 2 } },
    ],
  },
  numbering: { config: [
    { reference: 'bullets', levels: [{ level: 0, format: LevelFormat.BULLET, text: '\u2022', alignment: AlignmentType.LEFT, style: { paragraph: { indent: { left: 540, hanging: 280 } } } }] },
    { reference: 'numbers', levels: [{ level: 0, format: LevelFormat.DECIMAL, text: '%1.', alignment: AlignmentType.LEFT, style: { paragraph: { indent: { left: 540, hanging: 280 } } } }] },
  ] },
  sections: [{
    properties: { page: { size: { width: 12240, height: 15840 }, margin: { top: 1440, right: 1440, bottom: 1440, left: 1440 } } },
    headers: { default: new Header({ children: [new Paragraph({
      border: { bottom: { style: BorderStyle.SINGLE, size: 4, color: NAVY, space: 4 } },
      children: [
        new TextRun({ text: 'GA Integrated Therapeutic Perspectives LLC', size: 16, color: NAVY, bold: true }),
        new TextRun({ text: '\tDocumentary Evidence Technical Manual', size: 16, color: GREY }),
      ],
      tabStops: [{ type: 'right', position: CONTENT_W }],
    })] }) },
    footers: { default: new Footer({ children: [new Paragraph({
      border: { top: { style: BorderStyle.SINGLE, size: 4, color: 'CCCCCC', space: 4 } },
      children: [
        new TextRun({ text: 'Confidential — internal content-integrity documentation', size: 15, color: GREY }),
        new TextRun({ children: ['\tPage ', PageNumber.CURRENT, ' of ', PageNumber.TOTAL_PAGES], size: 15, color: GREY }),
      ],
      tabStops: [{ type: 'right', position: CONTENT_W }],
    })] }) },
    children: [
      // ---- title block ----
      new Paragraph({ spacing: { before: 1400, after: 0 }, children: [new TextRun({ text: 'Documentary Evidence', bold: true, size: 56, color: NAVY })] }),
      new Paragraph({ spacing: { after: 200 }, children: [new TextRun({ text: 'Technical Manual', bold: true, size: 56, color: NAVY })] }),
      new Paragraph({ spacing: { after: 80 }, children: [new TextRun({ text: 'NCMHCE Clinical Case Bank — Evidentiary Basis, Sourcing, and Verification', size: 26, color: BURGUNDY })] }),
      new Paragraph({ spacing: { after: 600 }, border: { bottom: { style: BorderStyle.SINGLE, size: 12, color: GOLD, space: 8 } }, children: [new TextRun({ text: 'Clinical content governance for AI-assisted exam-prep and continuing-education material', size: 20, italics: true, color: GREY })] }),
      runs([{ text: 'Owner: ', bold: true }, { text: 'GA Integrated Therapeutic Perspectives LLC' }]),
      runs([{ text: 'CE provider context: ', bold: true }, { text: 'CounselorReady (NBCC ACEP #7760)' }]),
      runs([{ text: 'Scope: ', bold: true }, { text: 'NCMHCE Prep Platform clinical case bank (standalone product)' }]),
      runs([{ text: 'Version: ', bold: true }, { text: '1.0' }, { text: '     ' }, { text: 'Issued: ', bold: true }, { text: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) }]),
      new Paragraph({ children: [new PageBreak()] }),

      // ---- TOC ----
      H1('Contents'),
      new TableOfContents('Contents', { hyperlink: true, headingStyleRange: '1-2' }),
      new Paragraph({ children: [new PageBreak()] }),

      // ---- 1 Purpose ----
      H1('1. Purpose and Scope'),
      P('This manual documents the evidentiary basis of the NCMHCE clinical case bank and the controls that keep its content traceable to authoritative sources. It is the reference of record for how case content is grounded, cited, validated, and verified before publication.'),
      P('It exists to support content integrity for AI-assisted exam-preparation and continuing-education material produced under GA Integrated Therapeutic Perspectives LLC, including material that feeds the CounselorReady CE platform (NBCC ACEP #7760). It is written to be usable as an audit-facing artifact and as a working specification for the people who generate, review, and maintain the case bank.'),
      H2('What this manual covers'),
      bullet('The evidence architecture: what each layer of a case rests on.'),
      bullet('The canonical reference library: the fixed set of authoritative sources content may cite.'),
      bullet('The sourcing mechanics: how each case and each keyed answer is linked to its basis.'),
      bullet('The subject-matter-expert (SME) review workflow and the validation/audit controls.'),
      bullet('Worked examples, limitations, and maintenance procedures.'),

      // ---- 2 Architecture ----
      H1('2. Evidence Architecture'),
      P('Every case is grounded at three layers. The first two are anchored to authoritative sources by construction; the third is the layer that requires explicit citation and human verification.'),
      H2('Layer 1 — Diagnostic and structural'),
      P('Diagnostic criteria, specifiers, and differential rule-outs derive from the DSM-5-TR (APA, 2022); diagnostic codes follow ICD-10-CM. The case bank uses DSM-5-TR, which is the current text revision and is more recent than the DSM-5 edition listed in the NBCC Candidate Handbook.'),
      H2('Layer 2 — Blueprint and domain alignment'),
      runs([
        { text: 'The 200-case distribution and the per-case question mix are mapped to the NBCC NCMHCE Content Outline. The bank spans ' },
        { text: String(bp.CATEGORY_NAMES.length), bold: true },
        { text: ' DSM-5 categories totaling ' },
        { text: String(bp.TOTAL_TARGET), bold: true },
        { text: ' target cases, and each case weights its five questions toward the exam\u2019s scored domains (Counseling Skills/Interventions heaviest, then Intake/Assessment, then Treatment Planning, with Ethics and Core Attributes).' },
      ]),
      H2('Layer 3 — Clinical-decision paths'),
      P('The correct answer and its rationale in each question constitute the clinical-decision path. This is the layer that carries explicit documentary evidence: each case names its governing sources, and each question links its keyed answer to those sources. Unlike Layers 1 and 2, this layer is not self-anchoring — it is cited and then verified by a qualified clinician (see Sections 4 and 5).'),

      // ---- 3 Reference library ----
      H1('3. The Canonical Reference Library'),
      P('Case content may cite only the sources below. The generator draws the source name verbatim from this list and never invents a source; the specific criterion or recommendation applied is recorded in each citation\u2019s detail and confirmed at review. Tiers: primary (a standard the counselor is held to), guideline (clinical practice guideline), protocol (validated tool), seminal (foundational model or text), and exam (NBCC exam-defining document).'),
      refTable,
      P(''),
      runs([{ text: 'Note on the NBCC handbook. ', bold: true }, { text: 'NBCC does not endorse any study materials for the NCMHCE and presents its reference list as potentially helpful options. The ACA Code of Ethics (2014), the APA diagnostic manual, and the Corey, Hays, and Wiger texts above appear on that handbook list; the remaining clinical-guideline and protocol sources are included to ground specific treatment and risk decisions.' }]),

      // ---- 4 How grounded ----
      H1('4. How Content Is Grounded'),
      P('Documentary evidence is encoded directly in the case data and enforced automatically.'),
      H2('Case-level references'),
      P('Each case carries a references array. Every entry has a case-local id (R1, R2, ...), a source drawn from the canonical library, and a detail naming the specific criterion or recommendation applied.'),
      H2('Per-answer evidence links'),
      P('Each question carries an evidenceRef array listing the reference id(s) that justify its keyed (correct) answer. This binds the scored clinical decision to a named source rather than to unattributed judgment.'),
      H2('Generation controls'),
      bullet('The generator is instructed to ground every case in two to four sources from the approved list and to attach an evidenceRef to every question.'),
      bullet('It must use the approved source strings verbatim and must not invent sources, page numbers, or study names.'),
      bullet('Any generated case that omits references or evidence links, or cites outside the approved list, fails validation and is regenerated or discarded.'),
      H2('Validation enforcement'),
      P('The schema validator treats missing references, malformed citations, missing evidence links, and dangling reference ids as errors; a citation to a source outside the approved library is flagged as a warning for review. No case is accepted into the bank until it passes.'),

      // ---- 5 SME workflow ----
      H1('5. SME Review and Verification Workflow'),
      P('Automated controls guarantee that a citation exists and is well-formed. They do not guarantee that the cited criterion is the right one or that the locator is exact. That judgment is a required human step performed by a qualified subject-matter expert (a licensed clinician).'),
      H3('Reviewer checklist (per case)'),
      numItem('Confirm the given diagnosis matches the narrative and meets DSM-5-TR criteria.'),
      numItem('For each question, confirm the keyed answer is the best clinical choice and that its evidenceRef sources actually support it.'),
      numItem('Confirm each reference detail names the correct, specific criterion or recommendation (correct the locator if needed).'),
      numItem('Confirm distractor weights reflect how clinically wrong each option is, and that safety-critical items key to the safe action.'),
      numItem('Confirm any ethics or legal path is consistent with the ACA Code of Ethics and applicable state law for the target jurisdiction.'),
      numItem('Confirm cultural framing is responsive and non-stereotyping.'),
      numItem('Record sign-off (reviewer, credential, date) before the case is published.'),
      P('Sign-off converts a case from "evidence-aligned and cited" to "clinician-verified." Only verified cases should appear in published or CE-bearing material.'),

      // ---- 6 Audit ----
      H1('6. Validation and Audit Trail'),
      P('The validator produces a per-file pass/fail result, an itemized error and warning list, and a coverage report against the 200-case blueprint. Running it on any case file yields a reproducible record suitable for an audit file.'),
      bulletRuns([{ text: 'Structural integrity: ', bold: true }, { text: 'five questions per case, four options per question, exactly one correct answer (weight 3), distractors weighted 0/-1/-2, valid ICD-10 code shape, unique ids.' }]),
      bulletRuns([{ text: 'Evidence integrity: ', bold: true }, { text: 'a non-empty references array, well-formed citations, an evidenceRef on every question, and no dangling reference ids.' }]),
      bulletRuns([{ text: 'Source integrity: ', bold: true }, { text: 'citations limited to the approved library (out-of-library sources flagged for review).' }]),
      bulletRuns([{ text: 'Coverage: ', bold: true }, { text: 'count per category versus the blueprint target, with remaining gaps to 200.' }]),
      bulletRuns([{ text: 'Scenario distinctness: ', bold: true }, { text: 'each case is fingerprinted (diagnosis + client age/gender/setting + a text signature) and compared across the bank. At generation, the clinical angle is rotated and near-duplicates are rejected and regenerated; the validator reports any near-duplicate pairs already present so they can be reviewed.' }]),

      // ---- 7 Worked examples ----
      H1('7. Worked Examples'),
      P('The hand-authored anchor cases below show the documentary-evidence layer in practice. Each lists its governing sources and the evidence map binding every keyed answer to those sources.'),
      ...SEED_CASES.flatMap(caseBlock),

      // ---- 8 Limitations ----
      H1('8. Limitations and Disclaimers'),
      bulletRuns([{ text: 'AI-assisted content. ', bold: true }, { text: 'Generated cases originate from a language model instructed to apply approved sources. The instruction constrains sourcing; it does not by itself guarantee clinical accuracy. SME verification (Section 5) is mandatory before publication.' }]),
      bulletRuns([{ text: 'Locators require verification. ', bold: true }, { text: 'A citation\u2019s detail names the criterion or recommendation applied but is not a substitute for the primary source. Reviewers confirm specifics against the source of record.' }]),
      bulletRuns([{ text: 'State-law variance. ', bold: true }, { text: 'Duty-to-warn, mandated-reporting, and confidentiality specifics vary by jurisdiction. Ethics paths cite the ACA Code of Ethics plus applicable state law and must be confirmed for the target jurisdiction.' }]),
      bulletRuns([{ text: 'Not individual advice. ', bold: true }, { text: 'This material is for exam preparation and professional education. It is not legal advice and not clinical direction for the care of any specific client.' }]),
      bulletRuns([{ text: 'Edition currency. ', bold: true }, { text: 'Sources are cited at their current editions as of issue. Superseded editions are addressed through the maintenance process below.' }]),

      // ---- 9 Maintenance ----
      H1('9. Maintenance and Version Control'),
      bulletRuns([{ text: 'Source updates. ', bold: true }, { text: 'When a cited standard is revised (e.g., a new DSM text revision, an updated ACA Code, or a refreshed clinical practice guideline), update the reference library entry and re-review affected cases.' }]),
      bulletRuns([{ text: 'Exam change to watch. ', bold: true }, { text: 'NBCC has published a revised NCMHCE content outline; the updated exam is expected to launch in summer 2027, with format and scoring details anticipated in summer 2026. The current exam is unchanged for now. Re-validate the blueprint and domain weighting when those details are released.' }]),
      bulletRuns([{ text: 'Change log. ', bold: true }, { text: 'Record manual version, date, and the nature of each change. This document is version 1.0.' }]),

      // ---- appendix ----
      H1('Appendix A — Evidence Field Reference'),
      P('The documentary-evidence fields added to the case schema:'),
      bulletRuns([{ text: 'references: ', bold: true }, { text: '[ { id, source, detail } ] at case level. id is case-local; source is from the approved library; detail names the specific basis applied.' }]),
      bulletRuns([{ text: 'evidenceRef: ', bold: true }, { text: '[ referenceId, ... ] on each question, pointing into the case references and justifying the keyed answer.' }]),
      P('Both are validated by caseSchema.js and reported by validateCases.js. The canonical source list lives in references.js and is shared by the generator and this manual.'),
    ],
  }],
});

Packer.toBuffer(doc).then((buf) => {
  fs.writeFileSync('NCMHCE_Documentary_Evidence_Manual.docx', buf);
  console.log('wrote NCMHCE_Documentary_Evidence_Manual.docx (' + buf.length + ' bytes)');
});
