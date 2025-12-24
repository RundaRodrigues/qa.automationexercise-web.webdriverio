function createUser() {
  const ts = Date.now();

  return {
    name: 'Runda',
    email: `runda.${ts}@test.com`,
    password: 'Senha@12345',

    day: '21',
    month: 'June',
    year: '2003',

    firstName: 'Runda',
    lastName: 'Rodrigues',
    company: 'QA Labs',
    address1: 'Av Paulista, 1000',
    address2: 'Apto 13',
    country: 'Canada',
    state: 'SP',
    city: 'Sao Paulo',
    zipcode: '01310-100',
    mobile: '+5511961205371'
  };
}

module.exports = { createUser };
