describe('sample test', () => {
    let page;

    before(async () => {
        page = await browser.newPage();
        await page.setDefaultNavigationTimeout(10000);
        await page.goto(params.baseUrl, { waitUntil: 'domcontentloaded'});
    });

    after(async () => {
        await page.close();
    })

    it('should have the correct page title', async ()  => {
        expect(await page.title()).to.eql('The Internet');
        expect(await page.$eval('.heading', el => el.textContent)).to.eql('Welcome to the-internet');
    });

});
