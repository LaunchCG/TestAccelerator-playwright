const {expect} = require('@playwright/test');

class CheckoutPage{
    constructor(page){
        this.checkoutBtn = page.getByRole('button',{name:'Checkout'});
        this.headerTitle = page.locator("span.title");
        this.firstName = page.locator("#first-name");
        this.lastName = page.locator("#last-name");
        this.postCode = page.locator("#postal-code");
        this.itemName = page.locator("div.inventory_item_name");
        this.continueBtn = page.locator("#continue");
        this.itemPrice = page.locator("div.inventory_item_price");
        this.totalPrice = page.locator("div.summary_total_label");
        this.finishBtn = page.getByRole('button',{name:'Finish'});
        this.thankyouMsg = page.locator("h2.complete-header");
    }

    async Checkout(){        
        await this.checkoutBtn.click();
        await expect(this.headerTitle).toHaveText("Checkout: Your Information");
    }

    async PersonalDetails(fName,lName,postCode,prodSelected){        
        await this.firstName.fill("");
        await this.firstName.fill(fName);
        await this.lastName.fill("");
        await this.lastName.fill(lName);
        await this.postCode.fill("");
        await this.postCode.fill(postCode);
        await this.continueBtn.click();
        await expect(this.headerTitle).toHaveText("Checkout: Overview");
        await expect(this.itemName).toHaveText(prodSelected);
    }

    async Finish(){    
        const itemPrice = await this.itemPrice.textContent();
        console.log(itemPrice);
        const TotalPrice = await this.totalPrice.textContent();
        console.log(TotalPrice);
        await this.finishBtn.click();
        await expect(this.thankyouMsg).toHaveText("Thank you for your order!");
    }
}

module.exports = {CheckoutPage};