const puppeteer = require('puppeteer');
const puppeteer_ff = require('puppeteer-firefox');
const { expect } = require('chai');
const config = require('config');
const minimist = require('minimist');


const defaultOptions = {
    headless: false,
    defaultViewport: null,
    args: ['--start-fullscreen']
}
// puppeteer options
const ff_opts = {
    ...defaultOptions,
    executablePath: '/Applications/Firefox.app/Contents/MacOS/firefox'
};

const chrome_opts = {
    ...defaultOptions,
    executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
}

const edge_opts = {
    ...defaultOptions,
    executablePath: '/Applications/Microsoft Edge Beta.app/Contents/MacOS/Microsoft Edge Beta'
}

// expose variables
before(async function () {
    // assigning the assertions globally
    global.expect = expect;

    // fetching the command line arguments
    const args = minimist(process.argv.slice(2));

    // assiging  the environment globally
    const env = args.env;
    global.params = config.get(env);

    // crearting the browser as per the command line arguments
    if(args.br === 'chrome') {
        global.browser = await puppeteer.launch(chrome_opts);
    } else if(args.br === 'firefox') {
        global.browser = await puppeteer_ff.launch(ff_opts);
    } else if(args.br === 'edge') {
        global.browser = await puppeteer.launch(edge_opts);
    } else {
        global.browser = await puppeteer.launch(defaultOptions);
    }
});

// close browser and reset global variables
after(async function () {
    await browser.close();
});
