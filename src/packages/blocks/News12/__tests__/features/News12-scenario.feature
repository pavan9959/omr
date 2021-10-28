Feature: News12

    Scenario: User navigates to News12
        Given I am a User loading News12
        When I navigate to the News12
        Then News12 will load with out errors
        And I can enter text with out errors
        And I can select the button with with out errors
        And I can leave the screen with out errors