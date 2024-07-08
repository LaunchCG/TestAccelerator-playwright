const {expect} = require('@playwright/test');

class CartPage{
    constructor(page){
        this.items = page.locator("div.inventory_item");
        this.itemTitles = page.locator("div.inventory_item_label a");
        this.cartLink = page.locator("[data-test='shopping-cart-link']")
        this.prodt = page.locator("div.inventory_item_name");
    }
    async AddToCart(productName){
        
        console.log("Total # of products:",await this.items.count());
        console.log("Product Titles:",await this.itemTitles.allTextContents());
    
        for(let i=0;i<await this.items.count();i++){
            if(await this.items.nth(i).locator("div.inventory_item_description").locator("div.inventory_item_label a").textContent()==productName){
                await this.items.nth(i).locator("div.inventory_item_description").locator("div.pricebar").getByRole('button',{name:'Add to cart'}).click();
                break;
            }
        }
    }

    async ClickCartLink(productName){
        await this.cartLink.click();
        await expect(this.prodt).toHaveText(productName);
    }

}
module.exports = {CartPage};