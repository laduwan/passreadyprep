require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();

// Allow the browser frontend to talk to this server, and read JSON bodies.
app.use(cors({ origin: process.env.CLIENT_ORIGIN || '*' }));
app.use(express.json());

// A simple heartbeat so you can confirm the server is alive.
app.get('/api/health', (req, res) =>
  res.json({ ok: true, service: 'passreadyprep', time: new Date().toISOString() })
);

// The front door (accounts + login) and the lockbox (saved progress).
app.use('/api/auth', require('./routes/auth'));
app.use('/api/progress', require('./routes/progress'));
app.use('/api/content', require('./routes/content'));

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
