it('Assertion demo', () => {

   cy.visit('https://example.cypress.io')
   cy.contains('get').click()


   cy.get('#query-btn')
      .should('contain', 'Button')
      .and('have.class', 'query-btn btn btn-primary')
      .and('be.visible')
      .and('be.enabled')

   expect(true).to.be.true

   assert.equal(4, 4, 'NOT EQUAL')
})