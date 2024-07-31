const { Given, When, Then } = require("@cucumber/cucumber");
const { LoginPage } = require("../../pageobjects/LoginPage");
const { CartPage } = require("../../pageobjects/CartPage");
const { CheckoutPage } = require("../../pageobjects/CheckoutPage");
const { LogoutPage } = require("../../pageobjects/LogoutPage");
const {expect,chromium,webkit,firefox} = require("@playwright/test");


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

//Below steps are not using hooks

Given('Login to Ecomm app2 {string} with username {string} and password {string}',{timeout:30*1000}, async function (url, un, pwd) {
    const browser = await chromium.launch({ headless: false });
    //const context = await browser.newContext();
    //this.page = await context.newPage();
    const loginPage = new LoginPage(this.page);
    await loginPage.Navigate(url);
    await loginPage.LoginToApp(un, pwd);

});
When('Add item {string} to the cart', async function (prdt) {
    const cartPage = new CartPage(this.page);
    await cartPage.AddToCart(prdt);
    await cartPage.ClickCartLink(prdt);
});
Then('Checkout item from cart and give personal details like {string} {string} {string} and verify same {string} in the checkout page after placing the order', async function (fn, ln, pin, prdt) {      
  const checkoutPage = new CheckoutPage(this.page);
  await checkoutPage.Checkout();
  await checkoutPage.PersonalDetails(fn,ln,pin,prdt)
  await checkoutPage.Finish();
});
Then('Logout from the Ecomm app2', async function () {
  const logoutPage = new LogoutPage(this.page);
  await logoutPage.Logout();
  
});