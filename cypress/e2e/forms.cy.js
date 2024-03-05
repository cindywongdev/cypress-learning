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

        // #2: unhappy path for invalid email
        cy.get('@subscribe-input').type('invalid-email') // grab input & type an invalid email
        cy.contains(/Invalid email: invalid-email!/i).should('not.exist')// check that error msg doesn't exist before clicking
        cy.getDataTest('subscribe-button').click() // click subscribe
        cy.contains(/Invalid email: invalid-email!/i).should('exist') // check for error msg
        cy.wait(3000) // wait for 3s
        cy.contains(/Invalid email: invalid-email!/i).should('not.exist') // check that error msg is gone

        // #3: unhappy path for empty input
        // cy.get('@subscribe-input').type('') // this will throw a cypress error bc you cant type nothing, this basically tells cypress to do nothing. so just skip this step and click the button
        cy.getDataTest('subscribe-button').click()
    })
})

//!