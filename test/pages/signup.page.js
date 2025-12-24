class SignupPage {
  get titleMr() { return $('#id_gender1'); }
  get password() { return $('#password'); }
  get days() { return $('#days'); }
  get months() { return $('#months'); }
  get years() { return $('#years'); }

  get newsletter() { return $('#newsletter'); }
  get offers() { return $('#optin'); }

  get firstName() { return $('#first_name'); }
  get lastName() { return $('#last_name'); }
  get company() { return $('#company'); }
  get address1() { return $('#address1'); }
  get address2() { return $('#address2'); }
  get country() { return $('#country'); }
  get state() { return $('#state'); }
  get city() { return $('#city'); }
  get zipcode() { return $('#zipcode'); }
  get mobile() { return $('#mobile_number'); }

  get createAccount() { return $('[data-qa="create-account"]'); }
}

module.exports = new SignupPage();
