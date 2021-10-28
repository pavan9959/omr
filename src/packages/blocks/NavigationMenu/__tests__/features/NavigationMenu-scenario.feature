Feature: NavigationMenu

    Scenario: User navigates to NavigationMenu
        Given I am a User loading NavigationMenu
        When I navigate to the NavigationMenu
        Then NavigationMenu will load with out errors
        And I can enter text with out errors
        And I can select the button with with out errors
        And I can leave the screen with out errors