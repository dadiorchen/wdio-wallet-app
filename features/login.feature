Feature: Wallet app login
  In order to access my wallet

  Scenario Outline: As a user, I can log into the wallet app

    Given I am on the login page
    When I login with <username> and <password>
    Then I should see text <message>

    Examples:
      | username | password             | message                        |
      #| tomsmith | SuperSecretPassword! | You logged into a secure area! |
      | foobar   | barfoo               | Login failed      |

