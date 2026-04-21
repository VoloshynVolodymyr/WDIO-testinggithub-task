import { join } from 'path';
import url from 'url';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

export const config = {
  runner: 'local',
  specs: [join(__dirname, '../tests/**/*.spec.js')],
  exclude: [],
  maxInstances: 1,
  capabilities: [
    {
      browserName: 'chrome',
      'goog:chromeOptions': {
        args: ['--no-sandbox', '--disable-dev-shm-usage', '--window-size=1920,1080'],
      },
    },
  ],
  logLevel: 'info',
  outputDir: join(__dirname, '../../logs'),
  bail: 0,
  baseUrl: 'https://github.com',
  waitforTimeout: 10000,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 3,
  framework: 'mocha',
  reporters: [
    'spec',
    [
      'allure',
      {
        outputDir: join(__dirname, '../../allure-results'),
        disableWebdriverStepsReporting: false,
        disableWebdriverScreenshotsReporting: false,
      },
    ],
  ],
  mochaOpts: {
    ui: 'bdd',
    timeout: 60000,
  },

  before: async function () {
    await browser.setWindowSize(1920, 1080);
    await browser.setTimeout({ implicit: 10000 });
  },

  afterTest: async function (test, context, { error }) {
    if (error) {
      await browser.takeScreenshot();
    }
  },
};
