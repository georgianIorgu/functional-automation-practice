exports.config = {
  tests: './e2e-tests/test/acceptance/*_test.js',
  output: './output',
  helpers: {
    WebDriver: {
      url: 'http://automationpractice.com/',
      browser: 'chrome',
      angular: false,
      capabilities: {
          acceptInsecureCerts: true
      },
      rootElement: "body",
      smartWait: 10000,
    }
  },
  include: {
    I: './e2e-tests/test/acceptance/steps_file.js',
    commonStep: "./e2e-tests/test/acceptance/steps/common.js",
    womenPage: "./e2e-tests/test/acceptance/pages/women.js",

  },
  bootstrap: null,
  plugins: {
    screenshotOnFail: {
          enabled: true
      },
    allure: {
          enabled: true
      }
    },
   scripts: {
    test: 'node ./node_modules/codeceptjs-webdriverio/node_modules/codeceptjs/bin/codecept.js run --debug --grep'
    },
  name: 'functional-automated-testing'
};