const { LoginPage } = require('../pages');

class LoginActions {
  /**
   * Starts the signup flow for a new user.
   */
  async startSignup(name, email) {
    await LoginPage.signupName.waitForDisplayed();
    await LoginPage.signupName.setValue(name);
    await LoginPage.signupEmail.setValue(email);
    await LoginPage.signupButton.click();
  }
}

module.exports = new LoginActions();
