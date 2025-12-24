# qa.automationexercise-web.webdriverio

Projeto de automação de testes **WEB** desenvolvido com **WebdriverIO**, seguindo boas práticas de mercado, foco em legibilidade, manutenibilidade e organização do código.

O projeto automatiza o **fluxo de cadastro e exclusão de usuário** do site  
https://automationexercise.com, conforme os requisitos do desafio.

---

## 📌 Objetivo do Projeto

- Automatizar cenários críticos de usuário em uma aplicação web real
- Demonstrar domínio de:
  - WebdriverIO
  - Page Objects
  - Separação de responsabilidades (Pages x Actions)
  - Estrutura de testes (Triple A)
  - Execução headless
  - Relatórios
  - Pipeline CI

---

## 🧰 Stack Utilizada

- **Node.js** (recomendado: versão 20 LTS)
- **WebdriverIO**
- **Mocha**
- **Chai**
- **Chrome / Chromedriver**
- **Allure Reports**
- **GitHub Actions** (CI)

---

## 📁 Estrutura do Projeto

```text
test/
 ├─ pages/              # Mapeamento de elementos (Page Objects)
 │   ├─ home.page.js
 │   ├─ login.page.js
 │   ├─ signup.page.js
 │   ├─ account.page.js
 │   └─ index.js
 │
 ├─ actions/            # Fluxos e ações do usuário
 │   ├─ home.actions.js
 │   ├─ login.actions.js
 │   ├─ signup.actions.js
 │   ├─ account.actions.js
 │   └─ index.js
 │
 ├─ support/
 │   └─ user.factory.js # Massa de dados
 │
 └─ specs/
     └─ register-user.spec.js
