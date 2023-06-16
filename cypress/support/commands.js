Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function () {
    cy.get('#firstName').type('Vagner')
    cy.get('#lastName').type('do Carmo')
    cy.get('#email').type('vagner@email.com')
    cy.get('#open-text-area').type('Teste')
    cy.get('button[type="submit"]').click()
})