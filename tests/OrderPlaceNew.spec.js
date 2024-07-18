
const {test,expect} = require('@playwright/test');
test('AddtoCartTest',async({page})=>{
    await page.goto("https://saucedemo.com");
    await page.getByPlaceholder('Username').fill("");
    await page.getByPlaceholder('Username').fill("standard_user");
    await page.getByPlaceholder('Password').fill("");
    await page.getByPlaceholder('Password').fill("secret_sauce");
    await page.locator("input#login-button").click();
    await page.waitForLoadState('networkidle');        
    await expect(page.locator("[data-test='title']")).toHaveText("Products");

    // const rootLocator = await page.locator("div.inventory_item");
    // await rootLocator.nth(3).locator("div.inventory_item_description div.pricebar text='Add to cart'").click();
    //await page.locator("div.inventory_item").nth(4).locator("div.inventory_item_description").locator("div.pricebar").getByRole('button',{name:'Add to cart'}).click();
    await page.locator("div.inventory_item").nth(4).locator("div.inventory_item_description div.pricebar").getByRole('button',{name:'Add to cart'}).click();
    await page.waitForTimeout(2000);
});

test('Google Test',async({page})=>{
    await page.goto("https://google.com");     
    await expect(page.locator("[alt='Google']")).toBeVisible();
    await page.locator("[name='q']").fill("playwright dev");
    await page.keyboard.press('Enter');
    await page.getByRole('link', { name: 'Playwright: Fast and reliable end-to-end testing for modern ...' }).click();
    await expect(page.getByRole('link', { name: 'Get started' })).toBeVisible();
});
