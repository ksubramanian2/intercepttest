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
  waitforTimeout: 600000,
  connectionRetryTimeout: 300000,
  connectionRetryCount: 3,

  framework: 'mocha',
  mochaOpts: {
    timeout: 600000
  },
  reporters: ['spec']
};
