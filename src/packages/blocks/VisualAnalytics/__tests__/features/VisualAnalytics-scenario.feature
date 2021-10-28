Feature: VisualAnalytics

    Scenario: User navigates to VisualAnalytics
        Given I am a User loading VisualAnalytics
        When I navigate to the VisualAnalytics
        Then VisualAnalytics will load with out errors
        And I can enter text with out errors
        And I can select the button with with out errors
        And I can leave the screen with out errors