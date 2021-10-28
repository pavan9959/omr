Feature: BlogPostsManagement

    Scenario: User navigates to BlogPostsManagement
        Given I am a User loading BlogPostsManagement
        When I navigate to the BlogPostsManagement
        Then BlogPostsManagement will load with out errors
        And I can enter text with out errors
        And I can select the button with with out errors
        And I can leave the screen with out errors