@search
Feature: search for valtach
  
  Scenario : valtech
    When I goto "https://www.valtech.com"
    Then I can see "latest news" section
    And I goto "https://www.valtech.com/about" page
    Then The header section should contain "about"