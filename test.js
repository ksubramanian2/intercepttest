const { assert } = require('chai');

describe("intercept test", function () {
    this.timeout(20000); 
    it('getRequests test', async function() {
        this.timeout(20000); 
        await browser.url('https://www.google.com');    
        await browser.setupInterceptor();

        //  Seach text entry
        const searchTextElement = await browser.$('input.gLFyf.gsfi');
        await searchTextElement.waitForDisplayed();
        await searchTextElement.waitForEnabled();
        await searchTextElement.setValue('abc');

        await browser.pause(5000);
        // The above browser.pause() causes varying behaviors in Chrome 107
        // With a pause 0 msecs, getRequests() returns but gives a zero count for the number of requests
        // With a pause for 100 msecs, it works in Chrome
        // With a pause for 5000 msecs, getRequests() hangs and then times out
        // The test works in Safari even with pauses of 5000 or higher msecs.

        console.log('entering getRequests')
        const requests = await browser.getRequests();
        const requestsCount = requests.length;
        console.log('returned from getRequests');
        console.log(`requests count = ${requestsCount}`);
        // assert(requestsCount === 4, 'All network requests not caught');
    });
});
