describe('various examples', () => {
    beforeEach(() => {
        cy.visit('/examples')
    })

    it('multi-page testing', () => {
        cy.getDataTest('nav-why-cypress').click() // visit home page by clicking button
        cy.location('pathname').should('equal', '/') // assert that current path is correct

        // do the same for all the other pages! make sure buttons lead to where they r supposed to :)
        cy.getDataTest('nav-overview').click()
        cy.location('pathname').should('equal', '/overview')

        cy.getDataTest('nav-fundamentals').click()
        cy.location('pathname').should('equal', '/fundamentals')

        cy.getDataTest('nav-forms').click()
        cy.location('pathname').should('equal', '/forms')

        cy.getDataTest('nav-examples').click()
        cy.location('pathname').should('equal', '/examples')

        cy.getDataTest('nav-component').click()
        cy.location('pathname').should('equal', '/component')

        cy.getDataTest('nav-best-practices').click()
        cy.location('pathname').should('equal', '/best-practices')
    })

    it.only('intercepts', () => {
        cy.intercept("POST", 'http://localhost:3000/examples', {
            body: {
                message: 'successfully intercepted request'
            }
        })

        cy.getDataTest('post-button').click()
    })
})

// !