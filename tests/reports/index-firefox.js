var reporter = require('cucumber-html-reporter');

var options = {
  theme: 'bootstrap',
  jsonFile: './tests/reports/report-from-superCalculatorAngularPage-firefox.json',
  output: './tests/reports/report-from-superCalculatorAngularPage-firefox.html',
  reportSuiteAsScenarios: true,
  launchReport: false,
  metadata: {
    "App Version":"1.0.0",
    "Test Environment": "Test Environment",
    "Browser": "Firefox",
    "Platform": "Windows 10",
    "Parallel": "Scenarios",
    "Executed": "Remote"
  }
};

reporter.generate(options);
