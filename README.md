# Puppeteer Boilerplate code with Multi-Browser

This code will help you to run your puppeteer tests on browsers like Chrome, Firefox and Edge. Can be extended easily to any browser which is built on **Chromium**

## Setup for Run

- Clone the Repo
- **cd** into the repo
- Run "**npm install**" to install the required node modules
- Have a look at the scripts in the **package.json** file
- The code supports multiple environments also
- The Syntax for running the code is - **Execute** npm run test:**browser name**: **environment**
- For suppose, to run the tests on chrome browser for dev environment - **Execute** npm run test:chrome:dev
- The code was configured for two environments - Dev and Integration
- The environments can be extended by adding the new environment details in **config/default.json** file

## node_modules

- [minimist](https://www.npmjs.com/package/minimist) : This module is the guts of optimist's argument parser without all the fanciful decoration. To parse the command line arguments
- [Mocha](https://mochajs.org/) : Runner for the Tests
- [Puppeteer](Puppeteer) : Puppeteer is a Node library which provides a high-level API to control Chrome or Chromium over the [DevTools Protocol](https://chromedevtools.github.io/devtools-protocol/)
- [Puppeteer-firefox](https://github.com/GoogleChrome/puppeteer/tree/master/experimental/puppeteer-firefox) : This project is a feasibility prototype to guide the work of implementing Puppeteer endpoints into Firefox's code base.
- [Config](https://www.npmjs.com/package/config) : This lets you define a set of default parameters, and extend them for different deployment environments (development, qa, staging, production, etc.).
