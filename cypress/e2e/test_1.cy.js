it('google search', () => {

    cy.visit('https://google.com')
    cy.get('.gLFyf')
        .type('automation step by step{Enter}')
    // cy.contains('Google Search').click()


    cy.wait(2000)
    cy.contains('Videos', { timeout: 6000 }).click()


    // cy.get('.MUFPAc > :nth-child(3) > a').click()


})