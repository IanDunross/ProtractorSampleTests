Feature: Go to main page of super calculator

Scenario: Home Page
Given I'm on the Calculator main page
When I enter first value as number "10000" and second value as number "20000"
And I select math operator from select option as "-"
And I click 'Go' button