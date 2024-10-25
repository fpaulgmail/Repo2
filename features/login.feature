Feature: User login

Scenario: Successful login with valid credentials
    Given the user is on the login page
    When the user enters a valid username and password 
    Then the user should be redirected to the homepage