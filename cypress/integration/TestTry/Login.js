/// <reference types="cypress" />
describe('Automate the Login Module', function() {
  
    before('Lunch the browser and navigate to url', function() {
        
        cy.fixture('logindata').then(function(user) {
            this.user = user

        })

    })
    it('Verify Register Page', function() {
        cy.visit(Cypress.env('mainurl'))
        cy.get('#myaccount').click()
        cy.get('#qa-login-email > #email').type(this.user.email)
        cy.get('#qa-login-password > #pass').type(this.user.pass)
        cy.get('#qa-login-button > #send2').click()
        cy.wait(10000)

    })
})