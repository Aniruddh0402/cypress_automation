/// <reference types="Cypress" />
Cypress.on('uncaught:exception', (err, runnable) => { return false; });

describe('orange hrm automate', () => {

    it('login using invalid pass', () => {

        cy.visit(Cypress.env('url'))

        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input')
            .type('Admin')

        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input')
            .type('admin12')

        cy.get('.oxd-button')
            .click()
            .url()
            .should('eq', Cypress.env('url2'))
    })
    it('login using invalid userid', () => {

        cy.visit(Cypress.env('url'))

        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input')
            .type('Admi')

        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input')
            .type('admin12')

        cy.get('.oxd-button')
            .click()
            .url()
            .should('eq', Cypress.env('url2'))
    })
    it('directly click on login', () => {

        cy.visit(Cypress.env('url'))

        cy.get('.oxd-button')
            .click()
            .url()
            .should('eq', Cypress.env('url2'))
    })
    it('login page with valid credentials', () => {

        cy.visit(Cypress.env('url'))

        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input')
            .type('Admin')

        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input')
            .type('admin123')

        cy.get('.oxd-button')
            .click()
            .url()
            .should('eq', Cypress.env('url2'))
    })

    it('validate leave list', () => {
        cy.get(':nth-child(3) > .oxd-main-menu-item')
            .click()
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input')
            .type('Admin')

        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input')
            .type('admin123')

        cy.get('.oxd-button')
            .click()
        cy.get(':nth-child(3) > .oxd-main-menu-item')
            .click()
            .url()
            .should('eq', Cypress.env('url3'))

        cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-input')
            .click()
            .clear()
            .type("1999-02-04")
        cy.get('.oxd-calendar-selector-year-selected > .oxd-icon')
        cy.get(':nth-child(4) > .oxd-calendar-date')
            .click()
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-input')
            .click()
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input-calendar > .oxd-calendar-wrapper > .oxd-calendar-dates-grid > :nth-child(12) > .oxd-calendar-date')
            .click()
        cy.get('.oxd-multiselect-wrapper > .oxd-select-text')
            .click()
        cy.get('.oxd-select-dropdown > :nth-child(5)')
            .click()
        cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text')
            .click()
        cy.get('.oxd-select-dropdown > :nth-child(5) > span')
            .click()
        cy.get('.oxd-autocomplete-text-input > input')
            .type('Jordan Mathews{enter}')
        cy.get('.oxd-button--secondary')
            .click()
    })
})