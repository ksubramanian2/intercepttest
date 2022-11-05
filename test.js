describe('reproduce getRequests hanging', function integrationTest() {
    /*
    before(async () => {
        
        // await browser.url('https://localhost:9000');
    });
    */
    it('getRequests test', async function() {
        await browser.url('https://www.google.com');
        await browser.setupInterceptor();
        // Dismiss sign in dialog 
        /*
        const signInDismiss = await browser.$(function() {return this.document.querySelector('button[data-dismiss="n"]');});
        console.log(await signInDismiss.getAttribute('aria-label'));
        await signInDismiss.waitForClickable();
        await signInDismiss.click();
        */
        //  Seach text entry
        const searchTextElement = await browser.$('input.gLFyf.gsfi');
        await searchTextElement.waitForDisplayed();
        await searchTextElement.waitForEnabled();
        await searchTextElement.setValue('abc');
        /*
        // Language selection
        const selectLanguage = await browser.$('a[href*="wRky6sr0Sh7HBG7UfnGJkKZb3Ws"]');
        console.log("selected language");
        await selectLanguage.waitForClickable();
        console.log("language ready to be clicked");
        await selectLanguage.click();
        console.log("clicked on selected language");
        */
        await browser.pause(2000);
        console.log('entering getRequests')
        const requests = await browser.getRequests();
        console.log('returned from getRequests');
        console.log(`requests count = ${requests.length}`);
    });
});