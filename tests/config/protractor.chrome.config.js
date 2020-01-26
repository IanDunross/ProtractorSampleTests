exports.config = {
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    capabilities: {
        browserName: 'chrome'
    },
    directConnect: true,
    specs: ['../features/*.feature'],
    baseUrl: 'https://juliemr.github.io/protractor-demo/',
    cucumberOpts: {
        require: [
            '../step_definitions/*.steps.ts',
            '../support/scenarioHook.ts'
        ],
        tags: false,
        format: ['json:./tests/reports/report-files/report-from-superCalculatorAngularPage-chrome.json'],
        profile: false,
        'no-source': true
    },
    async onPrepare() {
        browser.manage().window().maximize();
        browser.manage().timeouts().implicitlyWait(3000);
        require('ts-node').register({
            project: require('path').join(__dirname, '../../tsconfig.json')
        })
    }
};
