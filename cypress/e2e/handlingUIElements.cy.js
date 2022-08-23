describe('UI Elements', function () {
    it('verify Inputbox & Radio Buttons', () => {

        cy.visit()
        cy.url().should('include', 'newtours')

        cy.get('input[name=userName]')
            .should('be.visible')
            // .should('be.enabled')
            .type("mercury")


            cy.get(':nth-child(3) > [width="112"]')
            .should('be.visible')
            // .should('be.enabled')
            .type("mercury")

            cy.get('div > input')
            .should('be.visible')
            .click()

            cy.get(':nth-child(2) > [width="80"] > a').click()

            //Title verification
            cy.title().should('eq','Find a Flight: Mercury Tours:')

            //Radio Buttons
            cy.get('[value="roundtrip"]')
            .should('be.visible')
            .should('be.checked')

            cy.get('[value="oneway"]')
            .should('be.visible')
            .should('not.be.checked')
            .click()

            //Title Verification
            cy.title().should('eq','Find a Flight: Mercury Tours:')






            
         
    
    })
})