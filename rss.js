import { chromium } from 'playwright';

async function ilearnLogin() {
    try {
        // 啟動瀏覽器
        const browser = await chromium.launch({
            headless: false,
            args: ['--start-maximized']
        });

        // 建立 BrowserContext 並開新分頁
        const context = await browser.newContext({ viewport: null });
        const page = await context.newPage();

        // 前往登入頁面
        await page.goto('https://ilearn.fcu.edu.tw/login/index.php');
        // 等待登入表單欄位載入
        await page.waitForSelector('#username');
        await page.waitForSelector('#password');
        await page.waitForSelector('#loginbtn');

        // 輸入登入憑證
        await page.fill('#username', 'D1349728');
        await page.fill('#password', 'jimmyNID0627');

        // 點擊登入按鈕，並等待頁面載入完成
        await page.click('#loginbtn');
        await page.waitForLoadState('networkidle');

        // 登入後印出目前頁面內容
        const loginPageContent = await page.content();
        console.log('Login page content:', loginPageContent);

        // 前往指定課程頁面並等待載入
        await page.goto('https://ilearn.fcu.edu.tw/course/view.php?id=131918');
        await page.waitForLoadState('networkidle');

        // 印出課程頁面內容
        const coursePageContent = await page.content();
        console.log('Course page content:', coursePageContent);

        // 關閉瀏覽器
        
    } catch (error) {
        console.error('An error occurred:', error);
    }
}

// Run the script
ilearnLogin();