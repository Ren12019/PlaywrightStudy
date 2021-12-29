// ライブラリを使った書き方
const playwright = require('playwright');
const fs = require('fs');

(async () => {
  for (const browserType of ['chromium', 'firefox', 'webkit']) {
    // ここのbrowserTypeを変えることで、対象のブラウザを変更することができます。
    // ブラウザを立ち上げる処理
    // ヘッドレスモード（ブラウザが表示されない）
    // const browser = await playwright[browserType].launch();
    // ヘッドレスモードオフ（実際にブラウザが表示されてテストが行われる）
    const browser = await playwright[browserType].launch({ headless: false});
    // 作法
    const context = await browser.newContext();
    // ブラウザでタブを作成するイメージ
    const page = await context.newPage();

    // 通常のページの場合は以下の通り
    // await page.goto('https://youtube.com/');
    // ローカルのファイルを指定する場合は以下のようにすると良い（puppeteerの解決法みたいだけど使える）
    var contentHtml = fs.readFileSync('public/index.html', 'utf8');
    await page.setContent(contentHtml);
    await page.screenshot({ path: `results/example-${browserType}.png` });
    await browser.close();
  }
})();