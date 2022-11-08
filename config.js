drivers = {
  chrome: { version: '107.0.3' } // https://chromedriver.chromium.org/
}

exports.config = {
  debug: 'true',
  capabilities: [
    {
      // platformName: 'macOS 12.4',
      browserName: 'chrome',
      // browserVersion: '107'
      'goog:chromeOptions': {
        args: [
          'no-sandbox'
        ]
      }
    }
  ],

  services: ['intercept', 
    ['selenium-standalone' , {
      logPath: 'logs',
      // installArgs: { drivers }, // drivers to install
      // args: { drivers } // drivers to use
    }]
  ],
  
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
