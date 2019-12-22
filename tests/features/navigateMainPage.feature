Feature: Mathematic operations with Angular Calculator application

Scenario: Checking if '+' operation working correctly
Given I'm on the Calculator main page
When I enter first value as number "1111" and second value as number "2222"
And I select math operator from select option as "+"
And I click 'Go' button
Then I see the number "3333" as a result

Scenario: Checking if '-' operation working correctly
When I enter first value as number "101" and second value as number "102"
And I select math operator from select option as "-"
And I click 'Go' button
Then I see the number "-1" as a result