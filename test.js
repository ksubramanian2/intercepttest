const { assert } = require('chai');

describe('reproduce getRequests hanging', function integrationTest() {
    before(async () => {
        await browser.url('https://www.google.com');
    });

    let pageLoadSuccess = null;
      
    it('getRequests test', async function() {
        pageLoadSuccess = await browser.$('img.lnXdpd');
        assert(pageLoadSuccess, 'The page did not load');
       
        await browser.setupInterceptor();
        //  Seach text entry
        const searchTextElement = await browser.$('input.gLFyf.gsfi');
        await searchTextElement.waitForDisplayed();
        await searchTextElement.waitForEnabled();
        await searchTextElement.setValue('abc');

        await browser.pause(2000);
        console.log('entering getRequests')
        const requests = await browser.getRequests();
        console.log('returned from getRequests');
        console.log(`requests count = ${requests.length}`);
    });
});