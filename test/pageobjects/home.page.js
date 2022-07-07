const Page = require('./page');

class HomePage extends Page {
    get getInvoicesBtn() {
        return $('[href="/invoicesTab"]');
    }
    async clickInvoicesBtn() {
        await this.getInvoicesBtn
        .click();
        await browser.pause(3000);
    }

     async isLockScreenPageDisplayed(){ 
      return (await this.getInvoicesBtn).isDisplayed(); 
    } 
       
    async waitUntilInvoicesBtnDisplayed(){ 
    await browser.waitUntil( 
        async () => { 
        return await (await this.getInvoicesBtn).isDisplayed(); 
        },  
    ); 
    }
}

module.exports = new HomePage();
