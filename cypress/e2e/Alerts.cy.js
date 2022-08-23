/// <reference types="Cypress" />

describe('Alerts handling', () => {


   it('window alert', () => {

      cy.visit(Cypress.env('alert_url'))
      cy.get('#pass_div > [type="submit"]')
         .click()

      cy.on('window:alert', (str) => {

         expect(str).to.equal('Please enter valid email')
      })

   })


   it('window confirm alert', () => {

      cy.visit(Cypress.env('confirm_alert_url'))
      cy.get('#HTML9 > .widget-content > button').click()

      cy.on('window:confirm', (str) => {

         expect(str).to.equal('Press a button!')
      })


   })
})