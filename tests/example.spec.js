// �e�X�g�����i�[���g�p����ꍇ�̏�����
// example.spec.js
const { test, expect } = require('@playwright/test');
const envConfig = require('../env.config.json');

// �������F�e�X�g�̃^�C�g��
// �������F�e�X�g����
test('�����Z�@�\�̊m�F', async ({ page, browserName }) => {
  // �y�[�W�J��
  await page.goto(envConfig.SiteUrl);
  // await page.goto('http://127.0.0.1:5500/public/index.html');
  // await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  // �^�C�g���̊m�F
  await expect(page).toHaveTitle(/Playwright/);

  await page.fill('#number1', '1');
  await page.fill('#number2', '1');
  await page.click('#btnCalculate');
  // �\���̊m�F
  const locator = page.locator('#answer');
  await expect(locator).toHaveValue('2');
  await page.screenshot({ path: `results/screenshot-${browserName}.png` });
  

//   // Expect an attribute "to be strictly equal" to the value.
//   // �\���̊m�F
//   await expect(page.locator('text=Get Started').first()).toHaveAttribute('href', '/docs/intro');

//   // Expect an element "to be visible".
//   await expect(page.locator('text=Learn more').first()).toBeVisible();

//   await page.click('text=Get Started');
//   // Expect some text to be visible on the page.
//   await expect(page.locator('text=Introduction').first()).toBeVisible();
});
