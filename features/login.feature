Feature: Wallet app login
  In order to access my wallet

  Scenario Outline: As a user, I can log into the wallet app

    Given I am on the login page
    #And: test@greenstand.org is registered
    When I login with <username> and <password>
    Then I should see text <message>

    Examples:
      | username | password             | message                        |
      | foobar   | barfoo               | Login failed      |
      #| test@greenstand.org | abc.123   | You logged into a secure area! |

  @skip
  Scenario: As a user, I can log into the wallet app with my social account

    Given I am on the login page
    And My social account is linked
    When I login with my social account
    Then I should see text "You logged into a secure area!"
