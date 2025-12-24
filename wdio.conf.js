exports.config = {
  runner: 'local',

  specs: ['./test/specs/**/*.spec.js'],

  maxInstances: 1,
  logLevel: 'info',

  baseUrl: 'https://automationexercise.com',

  waitforTimeout: 15000,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 2,

  services: [],

  framework: 'mocha',
  mochaOpts: {
    ui: 'bdd',
    timeout: 120000
  },

  reporters: [
    'spec',
    ['allure', { outputDir: 'allure-results' }]
  ],

  capabilities: [{
  browserName: 'chrome',
  'goog:chromeOptions': {
    args: [
    '--disable-gpu',
    '--no-sandbox',
    '--disable-dev-shm-usage',
    '--window-size=1366,768'
  ]

  }
}],

  afterTest: async function (_test, _context, { error }) {
    if (error) {
      await browser.takeScreenshot();
    }
  }
};
