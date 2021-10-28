Feature: SaveAsPdf

    Scenario: User navigates to SaveAsPdf
        Given I am a User loading SaveAsPdf
        When I navigate to the SaveAsPdf
        Then SaveAsPdf will load with out errors
        And I can enter text with out errors
        And I can select the button with with out errors
        And I can leave the screen with out errors