describe ('Fundamentals test', () => {
  beforeEach(() => {
    cy.visit('/fundamentals')
  })

  // in cypress, best practice would be to write out a bunch of tests in one it block, rather than having a bunch of it blocks w small unit tests, bc cypress does a lot of stuff between tests and having a bunch of tests slows it down
  // so cypress is better suited for e2e testing rather than unit testing
  // but here we r writing multiple just for tutorial's sake
  it('Contains correct header text', () => {
    // can pass string or regex into methods, and this one specifically makes it so that test is case insensitive
    // method #1:
    // cy.get('[data-test="fundamentals-header"]').contains(/Testing Fundamentals/i)
    // method #2:
    cy.getDataTest('fundamentals-header').should('contain.text', 'Testing Fundamentals')
  })
  // can chain only onto it so that the runner only runs this it clock (allows you to focus on one test)
  it('Acccordion works correctly', () => {
    cy.contains(/Your tests will exist in a describe block./i).should('not.be.visible')
    cy.get('[data-test="accordion-item-1"] div[role="button"]').click()
    cy.contains(/Your tests will exist in a describe block./i).should('be.visible')
    cy.get('[data-test="accordion-item-1"] div[role="button"]').click()
    cy.contains(/Your tests will exist in a describe block./i).should('not.be.visible')
  })
})