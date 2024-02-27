describe('form tests', () => {
    beforeEach(() => {
        cy.visit("/forms")
    })
    it('Test subscribe form', () => {
        // make sure we are on correct page by checking that page contains heading text
        cy.contains(/testing forms/i)
        // #1: happy path
        // grab input & type email
        cy.getDataTest('subscribe-form').find('input').type('cindywongdev@gmail.com')
        // check that msg doesn't exist before clicking
        cy.contains(/Successfully subbed: cindywongdev@gmail.com!/i).should('not.exist')
        // click subscribe
        cy.getDataTest('subscribe-button').click()
        // check for success message
        cy.contains(/Successfully subbed: cindywongdev@gmail.com!/i).should('exist')
    })
})

//!