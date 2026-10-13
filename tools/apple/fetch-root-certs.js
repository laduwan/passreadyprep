// Downloads Apple's public root certificates into certs/apple so the server
// can verify App Store signed transactions without reaching apple.com at
// runtime (utils/appleIap.js fetches them on first use otherwise).
//   node tools/apple/fetch-root-certs.js
'use strict';
const fs = require('fs');
const path = require('path');
const https = require('https');
const { X509Certificate } = require('crypto');

const DIR = process.env.APPLE_ROOT_CA_DIR || path.join(__dirname, '..', '..', 'certs', 'apple');
const URLS = [
  'https://www.apple.com/certificateauthority/AppleRootCA-G3.cer',
  'https://www.apple.com/certificateauthority/AppleRootCA-G2.cer',
  'https://www.apple.com/appleca/AppleIncRootCertificate.cer',
];

function get(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode !== 200) { res.resume(); return reject(new Error(`${url} → HTTP ${res.statusCode}`)); }
      const chunks = []; res.on('data', (c) => chunks.push(c)); res.on('end', () => resolve(Buffer.concat(chunks))); res.on('error', reject);
    }).on('error', reject);
  });
}

(async () => {
  fs.mkdirSync(DIR, { recursive: true });
  for (const url of URLS) {
    const der = await get(url);
    const cert = new X509Certificate(der); // throws if it is not a certificate
    const file = path.join(DIR, path.basename(url));
    fs.writeFileSync(file, der);
    console.log(`saved ${file}  (${cert.subject.replace(/\n/g, ', ')}; valid to ${cert.validTo})`);
  }
})().catch((e) => { console.error(e.message); process.exit(1); });
