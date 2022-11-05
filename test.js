const { assert } = require('chai');

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
    // If I uncomment it, getRequests() hangs
    console.log('entering getRequests')
    const requests = await browser.getRequests();
    console.log('returned from getRequests');
    console.log(`requests count = ${requests.length}`);
    assert(requests === 4, 'All network requests not caught');
});
