/// <reference types="Cypress" />

// beforeEach(() => {
//     cy.visit('https://www.saucedemo.com/')

// })
describe('Automate', () => {

    it('login page', () => {

        cy.visit(Cypress.env('saucedemo_url'))

        cy.get('input[id=user-name]')
            .type('problem_user')

        cy.get('input[id=password]')
            .type('secret_sauce')

        cy.get('input[id=login-button]')
            .click()
            .url().should('include', '/inventory.html')

    })

    it('Add to cart', () => {

        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]')
            .click()

        cy.get('[data-test="remove-sauce-labs-backpack"]')
            .should('have.text', 'Remove')

        cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]')
            .click()

        cy.get('[data-test="remove-sauce-labs-bike-light"]')
            .should('have.text', 'Remove')
    })

    it('cart items', () => {

        cy.get('.shopping_cart_link')
            .click()

        cy.get('input[id=user-name]')
            .type('problem_user')

        cy.get('input[id=password]')
            .type('secret_sauce')

        cy.get('input[id=login-button]')
            .click()

        cy.get('.shopping_cart_link')
            .click()
            .url().should('include', '/cart.html')
    })

})