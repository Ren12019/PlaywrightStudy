// テストランナーを使用する場合の書き方
// example.spec.js
const { test, expect } = require('@playwright/test');
const envConfig = require('../env.config.json');

// 第一引数：テストのタイトル
// 第二引数：テスト処理
// UIの確認
test('Confirm UI', async ({ page, browserName }) => {
  // ページ遷移
  await page.goto(envConfig.SiteUrl);
  // await page.goto('http://127.0.0.1:5500/public/index.html');
  // await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  // タイトルの確認
  await expect(page).toHaveTitle(/Playwright/);

  // h1 が "Calculate App" となっているか検証する
  const h1Text = await page.innerText("h1");
  expect(h1Text).toBe("Calculate App");

  // 初期値の確認
  const locatorNumber1 = page.locator('#number1');
  await expect(locatorNumber1).toHaveValue('0');
  const locatorNumber2 = page.locator('#number2');
  await expect(locatorNumber2).toHaveValue('0');
  await page.screenshot({ path: `results/ui/screenshot-${browserName}.png` });
});

// 足し算の確認
test('Confirm Plus Function', async ({ page, browserName }) => {
  // ページ遷移
  await page.goto(envConfig.SiteUrl);

  await page.selectOption('select#method-select', 'plus');
  await page.fill('#number1', '1');
  await page.fill('#number2', '1');
  await page.click('#btnCalculate');
  // 表示の確認
  const locator = page.locator('#answer');
  await expect(locator).toHaveValue('2');
  await page.screenshot({ path: `results/plus/screenshot-${browserName}.png` });
});

// 引き算の確認
test('Confirm Minus Function', async ({ page, browserName }) => {
  // ページ遷移
  await page.goto(envConfig.SiteUrl);

  await page.selectOption('select#method-select', 'minus');
  await page.fill('#number1', '1');
  await page.fill('#number2', '1');
  await page.click('#btnCalculate');
  // 表示の確認
  const locator = page.locator('#answer');
  await expect(locator).toHaveValue('0');
  await page.screenshot({ path: `results/minus/screenshot-${browserName}.png` });
});

// 掛け算の確認
test('Confirm Multiplication Function', async ({ page, browserName }) => {
  // ページ遷移
  await page.goto(envConfig.SiteUrl);

  await page.selectOption('select#method-select', 'multiplication');
  await page.fill('#number1', '6');
  await page.fill('#number2', '3');
  await page.click('#btnCalculate');
  // 表示の確認
  const locator = page.locator('#answer');
  await expect(locator).toHaveValue('18');
  await page.screenshot({ path: `results/multiplication/screenshot-${browserName}.png` });
});

// 割り算の確認
test('Confirm Division Function', async ({ page, browserName }) => {
  // ページ遷移
  await page.goto(envConfig.SiteUrl);

  await page.selectOption('select#method-select', 'division');
  await page.fill('#number1', '6');
  await page.fill('#number2', '3');
  await page.click('#btnCalculate');
  // 表示の確認
  const locator = page.locator('#answer');
  await expect(locator).toHaveValue('2');
  await page.screenshot({ path: `results/division/screenshot-${browserName}.png` });
});
