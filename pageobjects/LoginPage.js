const {expect} = require('@playwright/test');
class LoginPage{
    constructor(page){
        this.page = page;
        this.username = page.getByPlaceholder('Username');
        this.password = page.getByPlaceholder('Password');
        this.loginBtn = page.locator("input#login-button");
        this.landingPageTitle = page.locator("[data-test='title']")
        this.lockedoutErrorMsg = page.locator("[data-test='error']");
    }

    async Navigate(url){
        await this.page.goto(url); 
        await expect(this.page).toHaveTitle("Swag Labs");
    }

    async LoginToApp(un,pwd){
        await this.page.getByPlaceholder('Username').fill("");
        await this.page.getByPlaceholder('Username').fill(un);
        await this.page.getByPlaceholder('Password').fill("");
        await this.page.getByPlaceholder('Password').fill(pwd);
        await this.page.locator("input#login-button").click();
        await this.page.waitForLoadState('networkidle');        
        await expect(this.landingPageTitle).toHaveText("Products");
    }

    async InvalidLogin(un,pwd){
        await this.page.getByPlaceholder('Username').fill("");
        await this.page.getByPlaceholder('Username').fill(un);
        await this.page.getByPlaceholder('Password').fill("");
        await this.page.getByPlaceholder('Password').fill(pwd);
        await this.page.locator("input#login-button").click();
        //await this.page.waitForLoadState('networkidle');
        await expect(this.lockedoutErrorMsg).toContainText("Sorry");
        const lockedoutErrorMessage =  await this.lockedoutErrorMsg.textContent();
        console.log(lockedoutErrorMessage);
    }
}
module.exports = {LoginPage};