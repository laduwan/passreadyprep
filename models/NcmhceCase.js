/**
 * Copyright (c) 2026 CounselorReady, a subsidiary of Ga Integrated Therapeutic Perspectives, LLC.
 * All rights reserved. Proprietary and confidential.
 *
 * NcmhceCase — stored clinical simulation ("deep case") for NCMHCE-style practice.
 *
 * Generated as a DRAFT by jobs/ncmhceCaseGen.js (never auto-published).
 * Reviewed and published from the admin surface. Collection: `ncmhcecases`.
 *
 * NOTE: These are ORIGINAL practice simulations authored for CounselorReady.
 * They are NOT real exam items. NCMHCE(R) is a registered trademark of the
 * National Board for Certified Counselors, Inc. (NBCC). CounselorReady is not
 * affiliated with, endorsed by, or sponsored by NBCC.
 */

const mongoose = require('mongoose');

const optionSchema = new mongoose.Schema({
  text:      { type: String, required: true, trim: true },
  isCorrect: { type: Boolean, default: false },
  rationale: { type: String, default: '', trim: true }
}, { _id: false });

const sectionSchema = new mongoose.Schema({
  order:       { type: Number, required: true },
  type:        { type: String, enum: ['information_gathering', 'decision_making'], required: true },
  prompt:      { type: String, required: true, trim: true },
  selectCount: { type: Number, default: 1 },
  options:     { type: [optionSchema], default: [] }
}, { _id: false });

const ncmhceCaseSchema = new mongoose.Schema({
  caseId: { type: String, required: true, unique: true, trim: true },

  title:  { type: String, required: true, trim: true },

  status: { type: String, enum: ['draft', 'published', 'archived'], default: 'draft' },

  difficulty:  { type: String, enum: ['foundational', 'intermediate', 'advanced'], default: 'intermediate' },
  contentArea: { type: String, required: true, trim: true },

  vignette: {
    clientDescription: { type: String, default: '' },
    presentingConcern: { type: String, default: '' },
    background:        { type: String, default: '' },
    mentalStatusExam:  { type: String, default: '' }
  },

  diagnosis: {
    primary:       { type: String, default: '' },
    differentials: { type: [String], default: [] }
  },

  sections:   { type: [sectionSchema], default: [] },
  references: { type: [String], default: [] },

  validation: {
    passed:            { type: Boolean, default: false },
    lengthBalanced:    { type: Boolean, default: false },
    repairedQuestions: { type: Number, default: 0 },
    flags:             { type: [String], default: [] },
    report:            { type: mongoose.Schema.Types.Mixed }
  },

  generatedBy: { type: String, default: 'ncmhceCaseGen' },
  model:       { type: String, default: '' },
  specId:      { type: String, default: '' },

  publishedAt: { type: Date }
}, { timestamps: true });

ncmhceCaseSchema.index({ status: 1, contentArea: 1 });
ncmhceCaseSchema.index({ specId: 1 });

module.exports = mongoose.model('NcmhceCase', ncmhceCaseSchema);
