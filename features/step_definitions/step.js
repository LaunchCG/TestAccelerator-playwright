const { Given, When, Then } = require("@cucumber/cucumber");
const { LoginPage } = require("../../pageobjects/LoginPage");
const { CartPage } = require("../../pageobjects/CartPage");
const { CheckoutPage } = require("../../pageobjects/CheckoutPage");
const { LogoutPage } = require("../../pageobjects/LogoutPage");


Given('Login to Ecomm app {string} with username {string} and password {string}', {timeout:30*1000}, async function (url, username, password) {
    const loginPage = new LoginPage(this.page);
    await loginPage.Navigate(url);
    await loginPage.LoginToApp(username, password);
  }
);

When('Add this item {string} to the cart', async function (product) {
  const cartPage = new CartPage(this.page);
  await cartPage.AddToCart(product);
  await cartPage.ClickCartLink(product);
});


When('Checkout item from cart by giving personal details like {string} {string} {string} and verify same {string} in the checkout page', async function (fn, ln, pin, product) {
  const checkoutPage = new CheckoutPage(this.page);
  await checkoutPage.Checkout();
  await checkoutPage.PersonalDetails(fn,ln,pin,product)
  await checkoutPage.Finish();
});


Then('Logout from the app', async function () {
  const logoutPage = new LogoutPage(this.page);
  await logoutPage.Logout();
});


Given('Login to Ecomm app {string} with username {string} and password {string} and verify the error displayed', async function (url, unlock, pwdlock) {
  const loginPage = new LoginPage(this.page);
  await loginPage.Navigate(url);
  await loginPage.InvalidLogin(unlock,pwdlock);
});
