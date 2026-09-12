const express = require('express');
const ContentItem = require('../models/ContentItem');
const { caseToNbsItems } = require('../utils/nbsItems');

const router = express.Router();

// Extra items for the "Next Best Step" drill, harvested from cases flagged
// `nbsHarvest` (retired duplicates — see tools/cases/nbs-harvest.js). Only
// flagged cases are served, so nothing a student can still sit appears here.
// public/next-best-step.html merges these with its static bank and renders the
// static bank alone if this call fails.

const CACHE_MS = 5 * 60 * 1000;
let cache = { at: 0, items: [] };

async function harvestedItems() {
  if (Date.now() - cache.at < CACHE_MS) return cache.items;
  const docs = await ContentItem.find({ format: 'case_sim', nbsHarvest: true })
    .select('externalId category caseSim')
    .lean();
  const items = docs.reduce((all, d) => all.concat(caseToNbsItems(d)), []);
  cache = { at: Date.now(), items };
  return items;
}

// GET /api/nbs/items -> { count, items }
router.get('/items', async (req, res) => {
  try {
    const items = await harvestedItems();
    res.json({ count: items.length, items });
  } catch (e) {
    res.status(500).json({ error: String(e.message || e) });
  }
});

module.exports = router;
module.exports.invalidateCache = () => { cache = { at: 0, items: [] }; };
