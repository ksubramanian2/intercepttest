describe('reproduce getRequests hanging', function integrationTest() {
    before(async () => {
        await browser.url('https://www.google.com');
        // await browser.url('https://localhost:9000');
    });
    it('getRequests test', async function() {
        await browser.setupInterceptor();
        /*
        const signInDismiss = await browser.$('button[data-dismiss="n"]');
        await signInDismiss.waitForClickable();
        await signInDismiss.click();
        const searchTextElement = await browser.$('input.gLFyf.gsfi');
        await searchTextElement.waitForDisplayed();
        await searchTextElement.waitForEnabled();
        await searchTextElement.setValue('abc');
        */
        const selectTamil = await browser.$('=தமிழ்');
        await selectTamil.waitForClickable();
        await selectTamil.click();
        console.log('entering getRequests')
        const requests = await browser.getRequests();
        console.log('returned from getRequests');
        console.log(`requests count = ${requests.length}`);
    });
});