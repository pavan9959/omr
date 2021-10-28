Feature: DetailedSummaryReportsGraph

    Scenario: User navigates to DetailedSummaryReportsGraph
        Given I am a User loading DetailedSummaryReportsGraph
        When I navigate to the DetailedSummaryReportsGraph
        Then DetailedSummaryReportsGraph will load with out errors
        And I can enter text with out errors
        And I can select the button with with out errors
        And I can leave the screen with out errors