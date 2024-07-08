# TestAccelerator-playwright
A Test Accelerator for the Playwright test automation framework

# Playwright-js Test Automation Framework:
# Features of this framework:
•	Playwright with Mocha framework

•	Playwright with Cucumber framework

•	Playwright reporting, Allure reporting and Cucumber reporting

•	Page object Model (PoM)

•	API Integration

•	Cross browser testing (chrome, webkit, firefox)

•	Parallel Test executions

•	Screenshots, Tracing and Logs

•	External Data Source

•	Parametrization

•	TC’s Tagging and execution from package.json


# Getting Started:

**Pre-requisites**

•	Download and install Node.js

•	Download and install Text Editor Visual Code

**Setup Scripts**

•	Clone the repository into a folder

•	Go to Project root directory and install Dependency: npm install

•	All the dependencies from package.json would be installed in node_modules folder


# How to Run UI Test

# Playwright with Mocha Framework 

**Go to Project root directory and run command**

npx playwright test E2EPlaceOrder.spec.spec.js --project=chrome (For Chrome browser)

**To View report run below command**

npx playwright show-report

![image](https://github.com/LaunchCG/TestAccelerator-playwright/assets/159937908/ec6cba49-4c1b-4b41-bd19-d53e37a22d77)


**To run in parallel browsers, issue below command (Ensure all 3 project names are available in the playwright.config.js)**

npx playwright test E2EPlaceOrder.spec.js

**To run the TC’s using Tags**

npx playwright test –grep @Web

npx playwright test –grep @API


# Playwright with Cucumber Framework

**Go to Project root directory and run command**

npx cucumber-js –exit

npx cucumber.js features\EComm.feature –exit

**To run the TC’s using Tags**

npx cucumber.js –tags @Smoke –exit

**View the cucumber html report**

npx cucumber.js –tags @Smoke –format –exit html:cucumber-report.html

![image](https://github.com/LaunchCG/TestAccelerator-playwright/assets/159937908/85d4152c-4b44-470a-9c07-5b178d5f3648)


# Allure Reporting

npx playwright test –reporter=line,allure-playwright (To run the test with allure reporting)

npx allure generate ./allure-results –clean (To generate the results)

npx allure open ./allure-report (To view the allure report in html format)

![image](https://github.com/LaunchCG/TestAccelerator-playwright/assets/159937908/1de484d0-17e6-47a3-b0df-415a9ac2e6c5)

![image](https://github.com/LaunchCG/TestAccelerator-playwright/assets/159937908/c63a5822-9ec1-48a7-b4a2-4b3569f79897)



# How to Run API Test

npx playwright test APITests.spec.js

# How to run tests through package.json file

npm run APITests 

npm run UITests

npm run regression

npm run CucumberSmoke


# How to write Test

•	Add new spec under tests folder

•	Name the file as .spec.js (e.g. testnew.spec.js)

•	In the root directory cmd, issue below command to run the test

npx playwright test testnew.spec.js

# Other configurations

**•	Traces, Screenshot, Video settings**

![image](https://github.com/LaunchCG/TestAccelerator-playwright/assets/159937908/ab62a90a-f2e9-4c42-a5d9-e5dde94ff9a1)

 
**•	Devices and Screensize settings**

![image](https://github.com/LaunchCG/TestAccelerator-playwright/assets/159937908/70e3f8cb-e9b6-47c3-9860-d53dab04f152)

 
**•	Test retries (retry any failed TC due to flakiness)**

![image](https://github.com/LaunchCG/TestAccelerator-playwright/assets/159937908/7e31e46b-06fb-441f-b6d7-fb325cefa88b)

 

