const homePage = require('../pageobjects/home.page');
const invoicesPage = require('../pageobjects/invoices.page');
const invoicesTabPage = require('../pageobjects/invoicesTab.page');
const loginPage = require('../pageobjects/login.page');
const facturePage = require('../pageobjects/facture.page');
const expectChai = require('chai').expect;

describe('Onetrackui tests', () => {
 const login = "jorji@ehtest.com";
 const pass = "admin";
 const searchCustomer = "agape";
 const customerName = "Agape Mechanical";

  before(async function () {
    await browser.setWindowSize(1600, 1000);
  });

  it('Should go to proceed page', async () => {
    await loginPage.open();
    await loginPage.setLoginInputValue(login);
    await loginPage.setPasswordValue(pass);
    await loginPage.clickSubmitBtn();
    await homePage.waitUntilInvoicesBtnDisplayed();
    await homePage.clickInvoicesBtn();
    await invoicesPage.clickAddNewBtn();
    await invoicesTabPage.setSearchInput(searchCustomer);
    await invoicesTabPage.clickCustomerByName(customerName);
    await invoicesTabPage.clickProceedBtn();
  });

  it('Should generate facture', async () => {
    await facturePage.clickProductsSearchInput();
    await facturePage.selectProductByIndex(24);
    await facturePage.clickProductsSearchInput();
    await facturePage.selectProductByIndex(23);
    await facturePage.clickAddDiscountBtn();
    await facturePage.setDiscountInput("10");
    await facturePage.selectDiscountKind("%");
    await facturePage.clickSaveDiscountBtn();
  });

  it('Should generate and check preview', async () => {
    await facturePage.clickActionsBtn();
    await facturePage.clickPreviewBtn();
    expectChai(await facturePage.getTotalFacturePriceText()).to.include('$459.00');
    expectChai(await facturePage.getTotalFacturePricePreviewText()).to.include('$459.00');
    expectChai(await facturePage.getTotalFacturePricePreviewText()).to.include('Discount');
  });

});


