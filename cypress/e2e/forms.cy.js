describe('form tests', () => {
    beforeEach(() => {
        cy.visit("/forms")
    })
    it('Test subscribe form', () => {
        // make sure we are on correct page by checking that page contains heading text
        cy.contains(/testing forms/i)

        // #1: happy path
        // grab input and create alias for it
        cy.getDataTest('subscribe-form').find('input').as('subscribe-input')
        // grab input & type email
        cy.get('@subscribe-input').type('cindywongdev@gmail.com')
        // check that msg doesn't exist before clicking
        cy.contains(/Successfully subbed: cindywongdev@gmail.com!/i).should('not.exist')
        // click subscribe
        cy.getDataTest('subscribe-button').click()
        // check for success message
        cy.contains(/Successfully subbed: cindywongdev@gmail.com!/i).should('exist')
        // wait 3 secondcs
        cy.wait(3000)
        // check that success message has disappeared
        cy.contains(/Successfully subbed: cindywongdev@gmail.com!/i).should('not.exist')
    })
})

//!