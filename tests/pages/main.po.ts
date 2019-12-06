import { browser, by, element } from 'protractor';

export class MainPage {
    async navigateToStartingPage() {
        return await browser.get(browser.baseUrl);
    }
    async getFirstCalcValueInput() {
        return await element(by.tagName('input[ng-model="first"]'));
    }
    async getSecondCalcValueInput() {
        return await element(by.tagName('input[ng-model="second"]'));
    }
    async getMathSelectElement(symbol) {
        return await element(by.cssContainingText('option', symbol));
    }

    async getGoButton(){
        return await element(by.id('gobutton'));
    }

    async getOperationResult(){
        return await element(by.className('form-inline')).element(by.tagName('h2'));
    }
}