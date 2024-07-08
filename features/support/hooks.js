const { Before, After, BeforeStep, AfterStep,Status } = require("@cucumber/cucumber");
const { chromium, webkit, firefox } = require("@playwright/test");
const browserNew = chromium;

Before(async function () {
    console.log("Before Scenario Message");
    const browser = await browserNew.launch({ headless: false });
    const context = await browser.newContext();
    this.page = await context.newPage();
});

After(function () {
  // Assuming this.driver is a selenium webdriver
  //return this.driver.quit();
  console.log("After Scenario Message");
});

BeforeStep( function () {
  // This hook will be executed before all steps in a scenario with tag @foo
  console.log("Before Step Message");
});

AfterStep(async function ({ result }) {
  // This hook will be executed after all steps, and take a screenshot on step failure
  console.log("After Step Message")
  if (result.status === Status.FAILED) {
    await this.page.screenshot({path:'Screenshot1.png'})
  }
});
