describe('Fb Assign', () => {

    it('Create New Account', () => {

        cy.visit(Cypress.env('Fburl'))
        cy.get('.fcb > a').click() // Visit the home page of Login

        cy.get('[data-testid="open-registration-form-button"]')
            .click() //Click On The Create New Account Button

        cy.get('input[name=firstname]') // Locate the firstName element
            .should('be.visible') // check it is visible or not
            .type('Aniruddh') // Enter the value in Firstname

        cy.get('input[name=lastname]') // locate the surname element
            .should('be.visible') // check it is visible or not
            .type('chidrewar') // Enter value in Surname

        cy.get('input[name=reg_email__]') // locate email address element
            .should('be.visible') // Check it is visible or not
            .type(Cypress.env('email')) // Enter value in it

        cy.get('input[name=reg_email_confirmation__]') // after entering email once it will ask to re-enter it
            .should('be.visible') // check it's visibility
            .type(Cypress.env('email')) // re-enter your email

        cy.get('input[id=password_step_input]')// locate new pass element
            .should('be.visible') // checl it is visible or not
            .type(Cypress.env('fbpass'))

        cy.get('#day') // locate date of birth dropdown
            .select('4') // select the value

        cy.get('#month') // locate month dropdown
            .select('Feb') // select the value

        cy.get('#year') // locate year dropdown
            .select('1999') //select the value

        cy.get('input[value=2]') // locate radio button
            .should('be.visible') // check it is visible or not
            .should('not.be.checked') // it should not be checked already
            .click() // now select it

        cy.get('button[name=websubmit]')// locate sign up button
            .should('be.visible')//check that button is visible or not
            .click()// now click on it



    })
})