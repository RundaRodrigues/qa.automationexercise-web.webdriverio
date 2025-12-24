const { SignupPage } = require('../pages');

class SignupActions {
  async completeRegistration(user) {
    await SignupPage.password.waitForDisplayed();

    await SignupPage.titleMr.click();
    await SignupPage.password.setValue(user.password);

    await SignupPage.days.selectByVisibleText(user.day);
    await SignupPage.months.selectByVisibleText(user.month);
    await SignupPage.years.selectByVisibleText(user.year);

    await SignupPage.newsletter.click();
    await SignupPage.offers.click();

    await SignupPage.firstName.setValue(user.firstName);
    await SignupPage.lastName.setValue(user.lastName);
    await SignupPage.company.setValue(user.company);
    await SignupPage.address1.setValue(user.address1);
    await SignupPage.address2.setValue(user.address2);
    await SignupPage.country.selectByVisibleText(user.country);
    await SignupPage.state.setValue(user.state);
    await SignupPage.city.setValue(user.city);
    await SignupPage.zipcode.setValue(user.zipcode);
    await SignupPage.mobile.setValue(user.mobile);

    await SignupPage.createAccount.click();
  }
}

module.exports = new SignupActions();
