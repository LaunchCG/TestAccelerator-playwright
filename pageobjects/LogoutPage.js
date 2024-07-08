class LogoutPage{
    constructor(page){
        this.hamburgerMenuBtn = page.getByRole('button',{name:'Open Menu'});
        this.logoutEle = page.locator("a#logout_sidebar_link");
    }
    async Logout(){
        await this.hamburgerMenuBtn.click();
        await this.logoutEle.click();
    }
}

module.exports = {LogoutPage};