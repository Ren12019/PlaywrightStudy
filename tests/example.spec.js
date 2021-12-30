// �e�X�g�����i�[���g�p����ꍇ�̏�����
// example.spec.js
const { test, expect } = require('@playwright/test');
const envConfig = require('../env.config.json');

// �������F�e�X�g�̃^�C�g��
// �������F�e�X�g����
// UI�̊m�F
test('Confirm UI', async ({ page, browserName }) => {
  // �y�[�W�J��
  await page.goto(envConfig.SiteUrl);
  // await page.goto('http://127.0.0.1:5500/public/index.html');
  // await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  // �^�C�g���̊m�F
  await expect(page).toHaveTitle(/Playwright/);

  // h1 �� "Calculate App" �ƂȂ��Ă��邩���؂���
  const h1Text = await page.innerText("h1");
  expect(h1Text).toBe("Calculate App");

  // �����l�̊m�F
  const locatorNumber1 = page.locator('#number1');
  await expect(locatorNumber1).toHaveValue('0');
  const locatorNumber2 = page.locator('#number2');
  await expect(locatorNumber2).toHaveValue('0');
  await page.screenshot({ path: `results/ui/screenshot-${browserName}.png` });
});

// �����Z�̊m�F
test('Confirm Plus Function', async ({ page, browserName }) => {
  // �y�[�W�J��
  await page.goto(envConfig.SiteUrl);

  await page.selectOption('select#method-select', 'plus');
  await page.fill('#number1', '1');
  await page.fill('#number2', '1');
  await page.click('#btnCalculate');
  // �\���̊m�F
  const locator = page.locator('#answer');
  await expect(locator).toHaveValue('2');
  await page.screenshot({ path: `results/plus/screenshot-${browserName}.png` });
});

// �����Z�̊m�F
test('Confirm Minus Function', async ({ page, browserName }) => {
  // �y�[�W�J��
  await page.goto(envConfig.SiteUrl);

  await page.selectOption('select#method-select', 'minus');
  await page.fill('#number1', '1');
  await page.fill('#number2', '1');
  await page.click('#btnCalculate');
  // �\���̊m�F
  const locator = page.locator('#answer');
  await expect(locator).toHaveValue('0');
  await page.screenshot({ path: `results/minus/screenshot-${browserName}.png` });
});

// �|���Z�̊m�F
test('Confirm Multiplication Function', async ({ page, browserName }) => {
  // �y�[�W�J��
  await page.goto(envConfig.SiteUrl);

  await page.selectOption('select#method-select', 'multiplication');
  await page.fill('#number1', '6');
  await page.fill('#number2', '3');
  await page.click('#btnCalculate');
  // �\���̊m�F
  const locator = page.locator('#answer');
  await expect(locator).toHaveValue('18');
  await page.screenshot({ path: `results/multiplication/screenshot-${browserName}.png` });
});

// ����Z�̊m�F
test('Confirm Division Function', async ({ page, browserName }) => {
  // �y�[�W�J��
  await page.goto(envConfig.SiteUrl);

  await page.selectOption('select#method-select', 'division');
  await page.fill('#number1', '6');
  await page.fill('#number2', '3');
  await page.click('#btnCalculate');
  // �\���̊m�F
  const locator = page.locator('#answer');
  await expect(locator).toHaveValue('2');
  await page.screenshot({ path: `results/division/screenshot-${browserName}.png` });
});
