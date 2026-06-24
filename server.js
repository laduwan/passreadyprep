require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();

// Allow the browser frontend to talk to this server, and read JSON bodies.
// The Stripe webhook needs the raw request body to verify its signature,
// so it must be registered BEFORE express.json() consumes the body.
app.use(cors({ origin: process.env.CLIENT_ORIGIN || '*' }));
app.use('/api/payment/webhook', express.raw({ type: 'application/json' }));
app.use(express.json());

// A simple heartbeat so you can confirm the server is alive.
app.get('/api/health', (req, res) =>
  res.json({ ok: true, service: 'passreadyprep', time: new Date().toISOString() })
);

// The front door (accounts + login) and the lockbox (saved progress).
app.use('/api/auth', require('./routes/auth'));
app.use('/api/payment', require('./routes/payment'));
app.use('/api/progress', require('./routes/progress'));
app.use('/api/content', require('./routes/content'));
app.use('/api/admin', require('./routes/admin'));
app.use('/api/admin/generate', require('./routes/adminGenerate'));
app.use('/api/debrief', require('./routes/debrief'));

// Explicit page routes — must come BEFORE express.static so the landing page
// wins at / instead of public/index.html.
const path = require('path');
const fs   = require('fs');
app.get('/', (_req, res) => res.sendFile(path.join(__dirname, 'public', 'landing.html')));
app.get('/study', (_req, res) => res.sendFile(path.join(__dirname, 'public', 'index.html')));

// Serve the React SPA (built by Vite to client/dist/) and legacy static pages from /public.
// React app takes priority; /public has admin review page, standalone tools, and data files.
app.use(express.static(path.join(__dirname, 'client/dist')));
app.use(express.static('public'));

// SPA fallback — any non-API, non-file route serves the React app's index.html
app.get('*', (req, res, next) => {
  if (req.path.startsWith('/api/')) return next();
  const spaIndex = path.join(__dirname, 'client/dist/index.html');
  if (fs.existsSync(spaIndex)) return res.sendFile(spaIndex);
  next();
});

const PORT = process.env.PORT || 4000;

async function start() {
  if (!process.env.MONGO_URI) {
    console.warn('MONGO_URI is not set — add it to your .env before using accounts for real.');
  } else {
    try {
      await mongoose.connect(process.env.MONGO_URI, { dbName: 'passreadyprep' });
      console.log('Connected to MongoDB');
    } catch (err) {
      console.error('MongoDB connection failed:', err.message);
    }
  }

  app.listen(PORT, () => console.log(`PassReady Prep API listening on port ${PORT}`));
}

start();
