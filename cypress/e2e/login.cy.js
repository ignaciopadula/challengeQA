describe('Login', () => {
  it('Login correcto', () => {
    cy.visit('https://www.saucedemo.com');
    cy.get('#user-name').type('standard_user');
    cy.get('#password').type('secret_sauce');
    cy.get('#login-button').click();
    cy.url().should('include', '/inventory.html');
  })

  it('Login erroneo', () => {
    cy.visit('https://www.saucedemo.com');
    cy.get('#user-name').type('standard_user');
    cy.get('#password').type('password');
    cy.get('#login-button').click();
    cy.get('[data-test="error"]').should('be.visible')
  })

  it('Login roto', () => {
    cy.visit('https://www.saucedemo.com');
    cy.log(Cypress.currentTest.title)
    cy.get('#user-name').type('standard_user');
    cy.get('#password').type('password');
    cy.get('#login-button').click();
    cy.get('[data-test="test"]').should('be.visible')
  })
})