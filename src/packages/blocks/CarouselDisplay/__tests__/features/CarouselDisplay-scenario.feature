Feature: CarouselDisplay

    Scenario: User navigates to CarouselDisplay
        Given I am a User loading CarouselDisplay
        When I navigate to the CarouselDisplay
        Then CarouselDisplay will load with out errors
        And I can enter text with out errors
        And I can select the button with with out errors
        And I can leave the screen with out errors