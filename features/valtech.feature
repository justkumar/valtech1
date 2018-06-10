@search
Feature: search for valtach
  
  Scenario: valtech
    When I goto "https://www.valtech.com"
    Then I can see "latest news" section
    And I goto "https://www.valtech.com/about" page
    Then the header section should contain "about"
    And I goto "https://www.valtech.com/services" page
    Then the header section should contain "services"
    And I goto "https://www.valtech.com/work" page
    Then the header section should contain "work"
    And the no of companies in contact us section are "33"