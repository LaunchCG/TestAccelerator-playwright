Feature: ECommerce app Place order
  @SmokeBDD  
  Scenario: Place order in an Ecomm app
    Given Login to Ecomm app2 "https://saucedemo.com" with username "standard_user" and password "secret_sauce"
    When Add item "Sauce Labs Bolt T-Shirt" to the cart
    Then Checkout item from cart and give personal details like "User" "Test" "474837" and verify same "Sauce Labs Bolt T-Shirt" in the checkout page after placing the order
    Then Logout from the Ecomm app2