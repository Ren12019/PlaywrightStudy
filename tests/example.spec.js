// テストランナーを使用する場合の書き方
// example.spec.js
const { test, expect } = require('@playwright/test');
const envConfig = require('../env.config.json');

// 第一引数：テストのタイトル
// 第二引数：テスト処理
test('足し算機能の確認', async ({ page, browserName }) => {
  // ページ遷移
  await page.goto(envConfig.SiteUrl);
  // await page.goto('http://127.0.0.1:5500/public/index.html');
  // await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  // タイトルの確認
  await expect(page).toHaveTitle(/Playwright/);

  await page.fill('#number1', '1');
  await page.fill('#number2', '1');
  await page.click('#btnCalculate');
  // 表示の確認
  const locator = page.locator('#answer');
  await expect(locator).toHaveValue('2');
  await page.screenshot({ path: `results/screenshot-${browserName}.png` });
  

//   // Expect an attribute "to be strictly equal" to the value.
//   // 表示の確認
//   await expect(page.locator('text=Get Started').first()).toHaveAttribute('href', '/docs/intro');

//   // Expect an element "to be visible".
//   await expect(page.locator('text=Learn more').first()).toBeVisible();

//   await page.click('text=Get Started');
//   // Expect some text to be visible on the page.
//   await expect(page.locator('text=Introduction').first()).toBeVisible();
});
