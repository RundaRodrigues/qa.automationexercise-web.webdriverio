class AccountPage {
  get accountCreated() {
    return $('h2[data-qa="account-created"]');
  }

  get accountDeleted() {
    return $('h2[data-qa="account-deleted"]');
  }

  get continueButton() {
    return $('[data-qa="continue-button"]');
  }

  get deleteAccountLink() {
    return $('a[href="/delete_account"]');
  }
}

module.exports = new AccountPage();
