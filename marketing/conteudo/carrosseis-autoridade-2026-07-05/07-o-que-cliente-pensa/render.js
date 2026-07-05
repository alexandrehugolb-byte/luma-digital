const { chromium } = require('playwright');
const path = require('path');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1200, height: 1500 } });
  const filePath = 'file://' + path.resolve(__dirname, 'carrossel.html');
  await page.goto(filePath);
  await page.evaluate(() => document.fonts.ready);

  const slides = await page.$$('.slide');
  for (let i = 0; i < slides.length; i++) {
    const num = String(i + 1).padStart(2, '0');
    const outPath = path.resolve(__dirname, 'instagram', `slide-${num}.png`);
    await slides[i].screenshot({ path: outPath });
    console.log('salvo:', outPath);
  }

  await browser.close();
})();
