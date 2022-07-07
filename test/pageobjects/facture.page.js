const Page = require('./page');

class FacturePage extends Page {
    get productsSearchInput() {
        return $('[class="sorting_1"]');
    }

    async clickProductsSearchInput() {
        await this.productsSearchInput
        .click();
        await browser.pause(2000);
    }
    
    async selectProductByIndex(index) {
        $('[id="mat-option-'+ index +'"]')
        .click();
        await browser.pause(2000);
    }

    get addDiscountBtn() {
        return $('[style="cursor: pointer;"]');
    }

    async clickAddDiscountBtn() {
        await this.addDiscountBtn
        .click();
    }

    get discountInput () {
        return $('[name="discountValue"]');
    }

    async setDiscountInput (discount) {
        await this.discountInput
        .addValue(discount);
    }

    get discountKind () {
        return $('[name="discountKind"]');
    }

    async selectDiscountKind (discountKind) {
        await this.discountKind
        .selectByVisibleText(discountKind)
    }

    get saveDiscountBtn() {
        return $('//*[@id="modalAddDiscount"]//button[2]');
    }

    async clickSaveDiscountBtn() {
        await this.saveDiscountBtn
        .click();
    }

    get totalFacturePrice() {
        return $('table[class="table invoice-total readonly"] [class="total"]');
    }

    async getTotalFacturePriceText() {
      return await this.totalFacturePrice
        .getText();
    }

    get actionsBtn() {
        return $('[class="btn-group pull-right"] button');
    }

    async clickActionsBtn() {
        await this.actionsBtn
        .click();
    }

    get previewBtn() {
        return $('[class="far fa-eye"]');
    }

    async clickPreviewBtn() {
        await this.previewBtn
        .click();
        await browser.pause(5000);
    }

    get totalFacturePricePreview() {
        return $('[class="iframe"]');
    }

    async getTotalFacturePricePreviewText() {
      return await this.totalFacturePricePreview
        .getHTML();

    }

}

module.exports = new FacturePage();
