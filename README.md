## Volvo Campaign Team WebdriverIO (WDIO) Automation set-up
This project demonstrate automation test suites set-up for Campaign
Volvo team. Automation testing will be done using WebdriverIO 
framework with page object pattern and Docker images set-up.
## System Requirements
- Node.js v16.15.1 or greater (https://nodejs.org/)
- npm v8.11.0 or greater (https://www.npmjs.com/)
- java 
- docker (https://www.docker.com/get-started/)

## How to start
1. npm install
2. npm run docker:start
3. npm run test
4. npm run report
5. npm run docker:stop

## Docker notes
1. Install Docker on the local machine: https://www.docker.com/get-started/
2. run the command: docker-compose up
3. run wdio

## Parallel execution of tests
Parallel execution of tests realized by the capabilities option
in the wdio.conf.js file.
Every single test file will be run in parallel. 
You can adjust Capabilities depends on the need by adjusting
maxInstances value in the wdio.conf.js file for desired browser. 
You can also adjust the browser depends on the requirements. 
Please consider to add new test files if needed with the project growth.

## Results Reporting
Report of the run the test cases/suites could be seen in the 
Allure report. To see the run results run the following command: {command}
??run: npm i allure-commandline before the report generation

## Image Comparison  Service
In order to perform pixel-by-pixel testing you can use 
Image Comparison service methods. With the first run of the 
test-cases needed screenshots will be automatically saved to the 
sauceLabsBaseline folder. You can put the screenshots in the folder
by yourself.
Note: only execute visual comparison on screenshots that
have been taken with the same platform. Just delete the Screenshot files 
in the sauceLabsBaseline folder before every run on the new platform


https://www.npmjs.com/package/webdriver-manager