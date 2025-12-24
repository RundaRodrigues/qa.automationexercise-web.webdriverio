const { expect } = require('chai');
const { AccountPage } = require('../pages');

class AccountActions {
  async shouldSeeAccountCreated() {
    await AccountPage.accountCreated.waitForDisplayed();
    expect(await AccountPage.accountCreated.getText())
      .to.include('ACCOUNT CREATED!');
  }

  async continue() {
    await AccountPage.continueButton.click();
  }

  async deleteAccount() {
    await AccountPage.deleteAccountLink.waitForDisplayed();
    await AccountPage.deleteAccountLink.click();
  }

  async shouldSeeAccountDeleted() {
    await AccountPage.accountDeleted.waitForDisplayed();
    expect(await AccountPage.accountDeleted.getText())
      .to.include('ACCOUNT DELETED!');
  }
}

module.exports = new AccountActions();
