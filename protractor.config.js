exports.config = {
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
      capabilities: {
    browserName: 'chrome'
  },
  directConnect: true,
    specs: ['./tests/features/*.feature'],
//  specs: ['spec.js'],
    baseUrl: 'https://juliemr.github.io/protractor-demo/',
    cucumberOpts: {
   require: ['./tests/step_definitions/*.steps.ts'],
 },
};