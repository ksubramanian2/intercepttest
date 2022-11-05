const { assert } = require('chai');

describe('reproduce getRequests hanging', function integrationTest() {    
    this.timeout(30000);
    it('getRequests test', async function() {
        this.timeout(30000);
        await browser.url('https://www.google.com');       
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