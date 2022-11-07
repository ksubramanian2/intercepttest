const { assert } = require('chai');

describe("intercept test", function () {
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

        await browser.pause(5000);
        // I have isolated the problem to the above browser.pause()
        // If I comment it, getRequests() returns but gives a zero count for the number of requests
        // If I uncomment it and pause for up to 100 msecs, it works
        // If I uncomment it and pause for 5000 msecs, getRequests() times out
        console.log('entering getRequests')
        const requests = await browser.getRequests();
        const requestsCount = requests.length;
        console.log('returned from getRequests');
        console.log(`requests count = ${requestsCount}`);
        // assert(requestsCount === 4, 'All network requests not caught');
    });
});