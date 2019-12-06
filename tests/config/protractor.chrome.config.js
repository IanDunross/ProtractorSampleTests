exports.config = {
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
      capabilities: {
    browserName: 'chrome'
  },
  directConnect: true,
    specs: ['../features/*.feature'],
//  specs: ['spec.js'],
    baseUrl: 'https://juliemr.github.io/protractor-demo/',
    cucumberOpts: {
   require: ['../step_definitions/*.steps.ts'],
 },
    async onPrepare(){
        browser.manage().window().maximize();
        browser.manage().timeouts().implicitlyWait(3000);
        require('ts-node').register({
            project:require('path').join(__dirname,'../../tsconfig.json')
        })
    }
};
