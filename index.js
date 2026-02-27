/**
 * WhatsApp MD Bot - Main Entry Point with Express Keep-Alive
 */

// --- SEHEMU YA EXPRESS (HII NDIO INAZUIA BOT ISIZIME RENDER) ---
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('KnightBot is Active and Running 24/7!');
});

app.listen(port, () => {
  console.log(`✅ Web Server is running on port ${port}`);
});
// -----------------------------------------------------------

process.env.PUPPETEER_SKIP_DOWNLOAD = 'true';
process.env.PUPPETEER_SKIP_CHROMIUM_DOWNLOAD = 'true';
process.env.PUPPETEER_CACHE_DIR = process.env.PUPPETEER_CACHE_DIR || '/tmp/puppeteer_cache_disabled';

const { initializeTempSystem } = require('./utils/tempManager');
// ... (Kodi zako nyingine zote zinaendelea hapa chini bila mabadiliko)
