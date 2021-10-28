Feature: ProductDescription

    Scenario: User navigates to ProductDescription
        Given I am a User loading ProductDescription
        When I navigate to the ProductDescription
        Then ProductDescription will load with out errors
        And I can enter text with out errors
        And I can select the button with with out errors
        And I can leave the screen with out errors