Feature: HousePricesArViewer

    Scenario: User navigates to HousePricesArViewer
        Given I am a User loading HousePricesArViewer
        When I navigate to the HousePricesArViewer
        Then HousePricesArViewer will load with out errors
        And I can enter text with out errors
        And I can select the button with with out errors
        And I can leave the screen with out errors