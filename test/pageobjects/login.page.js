const Page = require('./page');

class LoginPage extends Page {
    get getLoginInput () {
        return $('[name="Name"]');
    }

    async setLoginInputValue (value) {
        await this.getLoginInput
        .setValue(value);
    }

    get getPasswordInput () {
        return $('[name="Pwd"]');
    }

    async setPasswordValue (value) {
        await this.getPasswordInput
        .setValue(value);
    }

    get getSubmitBtn () {
        return $('[type="submit"]');
    }

    async clickSubmitBtn () {
        await this.getSubmitBtn
        .click();
    }
}

module.exports = new LoginPage();
