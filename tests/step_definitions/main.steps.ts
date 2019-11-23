import { Before, Given, Then, When } from 'cucumber';
import { expect } from 'chai';
import { MainPage } from '../pages/main.po';
import { browser, element, by } from 'protractor';

let page: MainPage = new MainPage();

Given(/^I'm on the Calculator main page$/, { timeout: 2 * 5000 }, async () => {
    await page.navigateToStartingPage();
})

When(/^I enter first value as number "([^"]*)" and second value as number "([^"]*)"$/, { timeout: 2 * 5000 }, async (valueFirst, valueSecond) => {
   let first = await page.getFirstCalcValueInput();
   let second = await page.getSecondCalcValueInput();

   await first.sendKeys(valueFirst);
   await second.sendKeys(valueSecond);

})

When(/^I select math operator from select option as "([^"]*)"$/, { timeout: 2 * 5000 }, async (mathSymbol) => {
let option = await page.getMathSelectElement(mathSymbol);
await option.click();

 
    await browser.sleep(4000);
 
 })