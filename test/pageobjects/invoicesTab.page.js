const Page = require('./page');

class InvoicesTabPage extends Page {

    get getSearchInput () {
        return $('[name="search"]');
    }

    async setSearchInput (value) {
        await this.getSearchInput
        .setValue(value);
    }
    
    async getCustomerByName(name) {
        return $('//*[text()="'+ name +'"]');
    }

    async clickCustomerByName(name) {
        $('//*[text()="'+ name +'"]')
        .click();
        await browser.pause(3000);
    }

    get proceedBtn() {
        return $('[class="btn btn-primary m-r-sm"]');
    }

    async clickProceedBtn() {
        await this.proceedBtn
        .click();
    }
}

module.exports = new InvoicesTabPage();
