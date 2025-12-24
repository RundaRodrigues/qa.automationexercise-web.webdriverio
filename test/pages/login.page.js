class LoginPage {
  get signupName() {
    return $('[data-qa="signup-name"]');
  }

  get signupEmail() {
    return $('[data-qa="signup-email"]');
  }

  get signupButton() {
    return $('[data-qa="signup-button"]');
  }
}

module.exports = new LoginPage();
