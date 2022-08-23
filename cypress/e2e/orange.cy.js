/// <reference types="Cypress" />

const cypress = require("cypress")

describe('orange hrm automate', () => {

    it('login using invalid pass', () => {

        cy.visit(cypress.env('url'))

        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input')
            .type('Admin')

        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input')
            .type('admin12')

        cy.get('.oxd-button')
            .click()
            .url()
            .should('eq', 'https://opensource-demo.orangehrmlive.com/index.php/dashboard')



    })
    it('login using invalid userid', () => {

        cy.visit('https://opensource-demo.orangehrmlive.com/')

        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input')
            .type('Admi')

        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input')
            .type('admin12')

        cy.get('.oxd-button')
            .click()
            .url()
            .should('eq', 'https://opensource-demo.orangehrmlive.com/index.php/dashboard')
    })
    it('directly click on login', () => {

        cy.visit('https://opensource-demo.orangehrmlive.com/')

        cy.get('.oxd-button')
            .click()
            .url()
            .should('eq', 'https://opensource-demo.orangehrmlive.com/index.php/dashboard')
    })

    it('login page with valid credentials', () => {

        cy.visit('https://opensource-demo.orangehrmlive.com/')

        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input')
            .type('Admin')

        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input')
            .type('admin123')

        cy.get('.oxd-button')
            .click()
            .url()
            .should('eq', 'https://opensource-demo.orangehrmlive.com/index.php/dashboard')


    })
    it('validae Assign Leave page', () => {

        cy.get(':nth-child(1) > .quickLaunge > a')
            .click()

        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input')
            .type('Admin')

        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input')
            .type('admin123')

        cy.get('.oxd-button')
            .click()
            .url().should('include', '/leave/assignLeave')

        cy.get('input[id=assignleave_txtEmployee_empName]')
            .type('Or{enter}')

        cy.get('select[id=assignleave_txtLeaveType]')
            .select('CAN - Personal')
            .should('have.value', '9')

        cy.get('input[id=assignleave_txtFromDate]')
            .click()
        cy.get('select[class=ui-datepicker-year]')
            .select('1999')
        // .should('be.selected')
        cy.get('select[class=ui-datepicker-month]')
            .select('Feb')
        cy.get(':nth-child(1) > :nth-child(4) > .ui-state-default')
            .click()


        cy.get('#assignleave_txtToDate')
            .click()

        cy.get('select[class=ui-datepicker-year]')
            .select('1999')

        cy.get('select[class=ui-datepicker-month]')
            // .click('{force: true}')
            .select('Feb')

        cy.get(':nth-child(2) > :nth-child(4) > .ui-state-default')
            .click()

        cy.get('#assignleave_partialDays')
            .select('Start and End Day')
            .should('have.value', 'start_end')

        cy.get('#assignleave_firstDuration_duration')
            .should('be.visible')
            .select('Half Day')
            .should('have.value', 'half_day')

        cy.get('#assignleave_firstDuration_ampm')
            .should('be.visible')
            .select('Afternoon')
            .should('have.value', 'PM')

        cy.get('#assignleave_secondDuration_duration')
            .should('be.visible')
            .select('Half Day')
            .should('have.value', 'half_day')

        cy.get('#assignleave_secondDuration_ampm')
            .should('be.visible')
            .select('Afternoon')
            .should('have.value', 'PM')

        cy.get('#assignleave_txtComment')
            .type('Want some leaves for personal work')

        cy.get('#assignBtn')
            .click()

        cy.get('#confirmOkButton')
            .click()
    })

    it('click on Dashboard', () => {
        cy.get('#menu_dashboard_index > b')
            .click()

        cy.get('#txtUsername')
            .type('Admin')

        cy.get('#txtPassword')
            .type('admin123')

        cy.get('#btnLogin')
            .click()

            .url()
            .should('include', '/index.php/dashboard')
    })

    it('validate Leave list page', () => {

        cy.get(':nth-child(2) > .quickLaunge > a > .quickLinkText')
            .click()

        cy.get('#txtUsername')
            .type('Admin')

        cy.get('#txtPassword')
            .type('admin123')

        cy.get('#btnLogin')
            .click()

        cy.get('input[id=calFromDate]')
            .click()

        cy.get('select[class=ui-datepicker-month]')
            .select('Sep')
        // .should('have.value', '8')

        cy.get('#ui-datepicker-div > table > tbody > tr:nth-child(2) > td:nth-child(5) > a')
            .click()

        cy.get('#calToDate')
            .click()

        cy.get('.ui-datepicker-month')
            .select('Sep')

        cy.get(':nth-child(3) > :nth-child(5) > .ui-state-default')
            .click()

        cy.get('#leaveList_chkSearchFilter_checkboxgroup_allcheck')
            .should('not.be.checked')
            .check()

        cy.get('#leaveList_chkSearchFilter_1')
            .should('be.checked')
            .uncheck()

        cy.get('#leaveList_txtEmployee_empName')
            .type('oran{enter}')

        cy.get('#leaveList_cmbSubunit')
            .select('Engineering')
            .should('have.value', '3')

        cy.get('#leaveList_cmbWithTerminated')
            .should('not.be.checked')
            .check()

        cy.get('#btnSearch')
            .should('be.visible')
            .click()
    })

    it('Back to Dashboard again', () => {
        cy.get('#menu_dashboard_index > b')
            .click()

        cy.get('#txtUsername')
            .type('Admin')

        cy.get('#txtPassword')
            .type('admin123')

        cy.get('#btnLogin')
            .click()

            .url()
            .should('include', '/index.php/dashboard')
    })

    it('validate Timesheets page', () => {

        cy.get(':nth-child(3) > .quickLaunge > a > .quickLinkText')
            .click()

        cy.get('#txtUsername')
            .type('Admin')

        cy.get('#txtPassword')
            .type('admin123')

        cy.get('#btnLogin')
            .click()

        cy.get('#employee')
            .type('oran{enter}')

        cy.get('#btnView')
            .click()

            .url()
            .should('eq', 'https://opensource-demo.orangehrmlive.com/index.php/time/createTimesheetForSubourdinate/employeeId/1')
    })



})