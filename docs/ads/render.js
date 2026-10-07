// Renders app-ad.html to the PNG sizes Google Ads accepts for App and Display campaigns.
// Usage: node docs/ads/render.js
const path = require('path');
const { chromium } = require('playwright');

const SIZES = [
  { layout: 'landscape', width: 1200, height: 628 },
  { layout: 'square', width: 1200, height: 1200 },
  { layout: 'portrait', width: 1200, height: 1500 },
];

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  const file = 'file://' + path.join(__dirname, 'app-ad.html');
  for (const { layout, width, height } of SIZES) {
    await page.setViewportSize({ width, height });
    await page.goto(`${file}?layout=${layout}`);
    await page.evaluate(() => document.fonts.ready);
    const out = path.join(__dirname, `passready-app-ad-${width}x${height}.png`);
    await page.screenshot({ path: out, omitBackground: false });
    console.log('wrote', out);
  }
  await browser.close();
})();
