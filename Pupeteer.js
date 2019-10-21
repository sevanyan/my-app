const puppeteer = require('puppeteer');
(async () => {
    let movieUrl = 'https://www.imdb.com/title/tt1025100/?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=99ed26bb-89a8-4157-8c78-3cd5b17286cd&pf_rd_r=DCMMCBBPSB7C9F35SK3M&pf_rd_s=right-7&pf_rd_t=15061&pf_rd_i=homepage&ref_=hm_cht_t4';

    let browser = await puppeteer.launch({headless:false});
    let page = await browser.newPage();

    await page.goto(movieUrl, {waitUntil: 'networkidle2'});

    let data = await page.evaluate(() => {
        let title = document.querySelector('div[class="title_wrapper"]>h1').innerText;
        let rating = document.querySelector('span[itemprop="ratingValue"]').innerText;
        let ratingCount = document.querySelector('span[itemprop="ratingCount"]').innerText;
        return {
            title,
            rating,
            ratingCount
        }

    });
    console.log(data);
    debugger;
    await browser.close();
})();
