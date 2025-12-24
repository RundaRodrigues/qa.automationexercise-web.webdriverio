const { HomePage } = require('../pages');

class HomeActions {
  async open() {
    await browser.url('/');
    await HomePage.signupLoginLink.waitForDisplayed();
  }

  async goToLogin() {
    await HomePage.signupLoginLink.click();
  }
}

module.exports = new HomeActions();
