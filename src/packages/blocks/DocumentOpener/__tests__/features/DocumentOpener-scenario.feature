Feature: DocumentOpener

    Scenario: User navigates to DocumentOpener
        Given I am a User loading DocumentOpener
        When I navigate to the DocumentOpener
        Then DocumentOpener will load with out errors
        And I can enter text with out errors
        And I can select the button with with out errors
        And I can leave the screen with out errors