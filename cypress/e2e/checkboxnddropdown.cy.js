/// <reference types="Cypress" />


describe('check nd drop', () => {
    // beforeEach

    it('Checkboxes', () => {

        cy.visit(Cypress.env('checkbox_url'))

        cy.get('#checkbox1')
            .check()
            .should('be.checked')
            .and('have.value', 'Cricket')

        cy.get('#checkbox2')
            .check()
            .should('be.checked')
            .and('have.value', 'Movies')

        cy.get('#checkbox3')
            .check()
            .should('be.checked')
            .and('have.value', 'Hockey')

        cy.get('#checkbox1').uncheck().should('not.be.checked')
        cy.get('#checkbox2').uncheck().should('not.be.checked')
        cy.get('#checkbox3').uncheck().should('not.be.checked')

        cy.get('input[type=checkbox]')
            .check(['Cricket', 'Movies', 'Hockey'])


    })
    it('Skills dropdown', () => {

        cy.get('#Skills')
            .select('Android')
            .should('have.value', 'Android')

    })
    it('Languages multi select', () => {

        cy.get('#msdd').click()
        cy.get('.ui-corner-all').contains('English').click()
        cy.get('.ui-corner-all').contains('Hindi').click()
        cy.get('.ui-corner-all').contains('Spanish').click()
        cy.get('.ui-corner-all').contains('Russian').click()
        cy.get('.ui-corner-all').contains('Italian').click()

    })
    it('select country searchable dropdown', () => {

        cy.get('[role=combobox]').click({ force: true })
        cy.get('.select2-search__field').type('Ind{enter}')
    })

    

})