const {test} = require('@playwright/test');
const {LoginPage} = require('../pageobjects/LoginPage');
const {CartPage} = require('../pageobjects/CartPage');
const {CheckoutPage} = require('../pageobjects/CheckoutPage');
const {LogoutPage} = require('../pageobjects/LogoutPage');
const { json } = require('stream/consumers');
const loginData = JSON.parse(JSON.stringify(require("../utils/UrlAndLoginDetails.json")));
const orderData = JSON.parse(JSON.stringify(require("../utils/PlaceOrder.json")));

test('@Web TC001_EcommApp_PlaceOrder', async({page})=>{
    //Login
    const loginPage = new LoginPage(page);
    await loginPage.Navigate(loginData.url);
    await loginPage.LoginToApp(loginData.username,loginData.password);

    //AddItems to Cart dynamically
    const cartPage = new CartPage(page);
    await cartPage.AddToCart(orderData.product);
    await cartPage.ClickCartLink(orderData.product);

    //Cart
    const checkoutPage = new CheckoutPage(page);
    await checkoutPage.Checkout();
    await checkoutPage.PersonalDetails(orderData.fname,orderData.lname,orderData.pincode,orderData.product)
    await checkoutPage.Finish();

    //Logout
    const logoutPage = new LogoutPage(page);
    await logoutPage.Logout();
});

test('@Web TC002_Locked_Out_User Login', async({page})=>{
    const loginPage = new LoginPage(page);
    await loginPage.Navigate(loginData.url);
    await loginPage.InvalidLogin(loginData.unlock,loginData.pwdlock);
});