/// <reference types="cypress" />
describe('Automate the Register Module', function() {

    before('Lunch the browser and navigate to url', function() {
       
        cy.fixture('logindata').then(function(user) {
            this.user = user

        })

    })
    it('Verify Register Page', function() {
        cy.visit(Cypress.env('mainurl'))
        cy.get('#myaccount').click()
        cy.get('#firstname').type(this.user.firstname)
        cy.get('#lastname').type(this.user.firstname)
        cy.get('#email_address').type(this.user.email)
        cy.get('#password').type(this.user.pass)
        cy.get('#confirmation').type(this.user.confirmation)
        cy.get('#is_subscribed').click()
        cy.get('#qa-registration-form-register-button').click()
        cy.wait(10000)

    })
})