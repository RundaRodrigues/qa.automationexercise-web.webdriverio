const {
  HomeActions,
  LoginActions,
  SignupActions,
  AccountActions
} = require('../actions');

const { createUser } = require('../support/user.factory');

describe('User registration', () => {
  it('registers and deletes a user account', async () => {
    const user = createUser();

    await HomeActions.open();
    await HomeActions.goToLogin();

    await LoginActions.startSignup(user.name, user.email);
    await SignupActions.completeRegistration(user);

    await AccountActions.shouldSeeAccountCreated();
    await AccountActions.continue();
    await AccountActions.deleteAccount();
    await AccountActions.shouldSeeAccountDeleted();
  });
});
