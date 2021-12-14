Feature: Create a Freemail Account

  Scenario: Create a Freemail Account
    Given I navigate to the website
    When I click on Sign Up
    And validate the page title
    Then Fill email adress
    Then Fill Surename
    Then Fill Name
    
    
