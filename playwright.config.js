const { devices } = require('@playwright/test');

const config = ({
  testDir: './tests',
  retries:1,        //Retries any failed TC one time
  timeout:30*1000,
  expect:{
    timeout:5*1000
  },
  reporter: 'html',
  projects: [
    {
      name: 'Chrome',
      use: {
        browserName:'chromium',
        trace: 'on-first-retry',
        screenshot:'on',
        headless:false,
        video:'off',
        // ...devices['iPhone 14 Pro Max'],
        // viewport:{width:1920,height:1080}
      },
    },

    {
      name: 'Firefox',
      use: {
        browserName:'firefox',
        trace: 'on-first-retry',
        screenshot:'on',
        headless:false,
        video:'off'
      },
    },

    {
      name: 'Safari',
      use: {
        browserName:'webkit',
        trace: 'on-first-retry',
        screenshot:'on',
        headless:false,
        video:'off'
      },
    },
  ],
});
module.exports = config;

