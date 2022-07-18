/// <reference types="cypress" />

context('Window', () => {
    beforeEach(() => {
      cy.visit(Cypress.env('mainurl'))
    })

    it('Open in macbook 15', () => {
        cy.viewport('macbook-15')
        cy.screenshot()
        cy.wait(200)
    })

      it('Open in iphone-6', () => {
        cy.viewport('iphone-6')
        cy.screenshot()
        cy.wait(200)
    })

})
  