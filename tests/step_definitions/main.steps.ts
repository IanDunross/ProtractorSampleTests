import { Before, Given, Then, When } from 'cucumber';
import { expect } from 'chai';
import { MainPage } from '../pages/main.po';
import { browser, element, by } from 'protractor';

let page: MainPage = new MainPage();

Given(/^I'm on the Calculator main page$/, { timeout: 2 * 5000 }, async () => {
    await page.navigateToStartingPage();
});

When(/^I enter first value as number "([^"]*)" and second value as number "([^"]*)"$/, { timeout: 2 * 5000 }, async (valueFirst, valueSecond) => {
   const first = await page.getFirstCalcValueInput();
   const second = await page.getSecondCalcValueInput();

   await first.clear();
   await second.clear();
   await first.sendKeys(valueFirst);
   await second.sendKeys(valueSecond);

});

When(/^I select math operator from select option as "([^"]*)"$/,  async (mathSymbol) => {
    
    const option = await page.getMathSelectElement(mathSymbol);
    await option.click();
 
 });

 
When(/^I click 'Go' button$/, async () => {
    
    const goButton =  await page.getGoButton();
    await goButton.click();
 
 });

 Then(/^I see the number "([^"]*)" as a result$/,{ timeout: 2 * 5000 }, async (expectedNumber) => {

    const resultElement =  await page.getOperationResult();
    expect(await resultElement.isDisplayed()).to.be.equal(true);
    expect(await resultElement.getText()).to.be.equal(expectedNumber);
 
 });

Then(/^I count all rows written in the history and the number should be "([^"]*)"$/, async (countNumber) => {

    const countFromTheHistory = await page.getHistoryRowsCount();
    expect(countFromTheHistory).to.be.equal(+countNumber);


});