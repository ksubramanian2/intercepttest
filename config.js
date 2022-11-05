exports.config = {
  debug: 'true',
  capabilities: [
    {
      browserName: 'chrome',
      browserVersion: '107'
    }
  ],

  services: ['intercept', 'chromedriver'],
  
  host: 'localhost',
  specs: ['./test.js'],

  sync: true,
  logLevel: 'error',
  waitforTimeout: 60000,
  connectionRetryTimeout: 30000,
  connectionRetryCount: 3,

  framework: 'mocha',
  mochaOpts: {
    timeout: 60000
  },
  reporters: ['spec']
};
