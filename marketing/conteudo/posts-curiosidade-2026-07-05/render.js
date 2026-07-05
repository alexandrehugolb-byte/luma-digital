const { chromium } = require('playwright');
const path = require('path');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1080, height: 1350 } });
  await page.goto('file://' + path.resolve(__dirname, 'posts.html'));
  await page.waitForTimeout(2500); // fontes do Google carregarem

  const slides = await page.$$('.slide');
  for (let i = 0; i < slides.length; i++) {
    const num = String(i + 1).padStart(2, '0');
    await slides[i].screenshot({ path: path.resolve(__dirname, 'instagram', `post-${num}.png`) });
    console.log(`post-${num}.png ok`);
  }
  await browser.close();
})();
