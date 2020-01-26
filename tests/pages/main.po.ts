import { browser, by, element } from 'protractor';

export class MainPage {
    navigateToStartingPage() {
        return browser.get(browser.baseUrl);
    }
    getFirstCalcValueInput() {
        return element(by.tagName('input[ng-model="first"]'));
    }
    getSecondCalcValueInput() {
        return element(by.tagName('input[ng-model="second"]'));
    }
    getMathSelectElement(symbol) {
        return element(by.cssContainingText('option', symbol));
    }

    getGoButton(){
        return element(by.id('gobutton'));
    }

    getOperationResult(){
        return element(by.className('form-inline')).element(by.tagName('h2'));
    }

    getHistoryRowsCount(){
        return element.all(by.repeater('result in memory')).count();
    }
}