Feature: ECommerce app validations
  @Smoke
  @Regression
  Scenario: Place order in an Ecomm app
    Given Login to Ecomm app "https://saucedemo.com" with username "standard_user" and password "secret_sauce"
    When Add this item "Sauce Labs Bolt T-Shirt" to the cart
    And Checkout item from cart by giving personal details like "Siva" "Anbalagan" "635109" and verify same "Sauce Labs Bolt T-Shirt" in the checkout page
    Then Logout from the app

  @ErrorValidation
  Scenario Outline: Error Validations
    Given Login to Ecomm app "https://saucedemo.com" with username "<username>" and password "<password>" and verify the error displayed

    Examples:
      | username        | password     |
      | locked_out_user | secret_sauce |