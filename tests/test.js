// ���C�u�������g����������
const playwright = require('playwright');
const fs = require('fs');

(async () => {
  for (const browserType of ['chromium', 'firefox', 'webkit']) {
    // ������browserType��ς��邱�ƂŁA�Ώۂ̃u���E�U��ύX���邱�Ƃ��ł��܂��B
    // �u���E�U�𗧂��グ�鏈��
    // �w�b�h���X���[�h�i�u���E�U���\������Ȃ��j
    // const browser = await playwright[browserType].launch();
    // �w�b�h���X���[�h�I�t�i���ۂɃu���E�U���\������ăe�X�g���s����j
    const browser = await playwright[browserType].launch({ headless: false});
    // ��@
    const context = await browser.newContext();
    // �u���E�U�Ń^�u���쐬����C���[�W
    const page = await context.newPage();

    // �ʏ�̃y�[�W�̏ꍇ�͈ȉ��̒ʂ�
    // await page.goto('https://youtube.com/');
    // ���[�J���̃t�@�C�����w�肷��ꍇ�͈ȉ��̂悤�ɂ���Ɨǂ��ipuppeteer�̉����@�݂��������ǎg����j
    var contentHtml = fs.readFileSync('public/index.html', 'utf8');
    await page.setContent(contentHtml);
    await page.screenshot({ path: `results/example-${browserType}.png` });
    await browser.close();
  }
})();