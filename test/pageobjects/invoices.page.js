const Page = require('./page');

class InvoicesPage extends Page {
    get addNewBtn() {
        return $('[class="fas fa-plus"]');
    }

    async clickAddNewBtn() {
        await this.addNewBtn
        .click();
        await browser.pause(3000);
    }
}

module.exports = new InvoicesPage();
