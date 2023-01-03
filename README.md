# omneky-ui-automation

A [@playwright/test](https://playwright.dev/) based test automation framework for UI test automation for Omneky.

## Prerequisites

- Nodejs 12.x [Install Nodejs 12.x or later version using [nvm](https://github.com/creationix/nvm) or [Node.js](https://nodejs.org/en/)]

## Local Setup

\> git clone git@github.com:a5g/omneky-ui-automation.git <br />
\> cd omneky-ui-automation <br />
\> npm install <br />
Watch [video](https://www.loom.com/embed/fbbffbf8f9f5441dafd5a1592e621af7)

## Add Credentials

For security reasons, credentials are not stored in this repo.<br/>
Add the credentials by following this [video](https://www.loom.com/embed/a6399c7fd67c428897f00d1cc6521f4d)

## Run Tests

Watch [video](https://www.loom.com/embed/fbbffbf8f9f5441dafd5a1592e621af7)

`To run all tests (except AB tests, Login and Logout tests)` <br/>
\> npm run test

`To run Login test` <br/>
\> npm run login

`To run Logout test` <br/>
\> npm run logout

`To run tests from a specific path` <br/>
\> npx playwright test <PATH_TO_SPEC_FILE> <br/>
Eg., <br/>
\> npx playwright test tests/omneky/navigation.spec.ts<br/>

`Filter and Run Tests` <br/>
\> npx playwright test --grep P0 <br/>
[runs only P0 tests]<br/>
\> npx playwright test --grep P1 <br/>
[runs only P1 tests]<br/>
\> npx playwright test --grep P0 --grep P1 <br/>
[runs only both P0 and P1 tests]<br/>

## Test Reports

To view the HTML Test reports

\> npm run report <br/>
[or] <br/>
\> npx playwright show-report

## AB Testing

Watch [video](https://www.loom.com/embed/6990a1c8bdbb47888591af1200ed62ac)

Commands to run AB tests <br/>
\> npm run ab:baseline <br/>
\> npm run ab:compare <br/>

## Parallel Test Runs

Watch [video](https://www.loom.com/embed/bcb16a53339b4b88887f1cbc9c90d180)

Commands to run AB tests <br/>
\> npm run ab:baseline <br/>
\> npm run ab:compare <br/>

## Preferred Editor

[VSCode](https://code.visualstudio.com/download) with extensions

- Prettier - Code Formatter

## Why TypeScript

TypeScript offers the benefit of types, but you won't find them in this project. I have found TypeScript to be great because of the IDE intellisense and support for the latest JavaScript features:

## Support

For any support or corporate trainings, feel free to reach out to me at gani.anand@gmail.com
