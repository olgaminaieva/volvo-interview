## Volvo Campaign Team WebdriverIO (WDIO) Automation set-up
This project demonstrate automation test suites set-up for Campaign team.
Automation testing will be done using WebdriverIO framework with page object pattern. And Docker images set-up.
## System Requirements
- Node.js v16.15.1 or greater (https://nodejs.org/)
- npm v8.11.0 or greater (https://www.npmjs.com/)
- java 
- docker

## How to start
1. npm install
2. npm run docker:start
3. npm run test
4. npm run report

## Docker notes
1. Install Docker on the local machine: https://www.docker.com/get-started/
2. run the command: docker-compose up
3. run wdio

## Parallel execution of tests
Parallel execution of tests realized by the Capabilities ability in the WDIO. Every single test file will be run in parallel. Please consider to add new test files if needed.

## Results Reporting
Report of the run the test cases/suites could be seen in the Allure report. To see the result run the following command:
run: npm i allure-commandline before the report generation
## Image Comprassion Service
In order to test pixel to pixel you can use Image Comprassion service methods. With the first run of the test-cases needed sreenshots will be automatically saved to the sauceLabsBaseline folder. You can put the screenshots in the folder by yourself.


https://www.npmjs.com/package/webdriver-manager