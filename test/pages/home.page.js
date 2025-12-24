class HomePage {
  get signupLoginLink() {
    return $('a[href="/login"]');
  }
}

module.exports = new HomePage();
