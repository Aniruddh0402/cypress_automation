import { Loginpage } from "./Pages/Loginpage"

const login = new Loginpage()

beforeEach(() => {
    cy.visit(Cypress.env('saucedemo_url'))

})
describe('All login tests', () => {



    it('login with valid credentials', () => {
        login.enterusername('standard_user')
        login.enterpassword('secret_sauce')
        login.clicklogin()
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()

    });

    it('login with invalid username', () => {
        login.enterusername('standard_user1')
        login.enterpassword('secret_sauce')
        login.clicklogin()
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()

    });
})

it('login with invalid password', () => {
    login.enterusername('standard_user')
    login.enterpassword('secret_sauce1')
    login.clicklogin()
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()

});