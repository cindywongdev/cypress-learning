describe ('Fundamentals test', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/fundamentals')
    // can pass string or regex into methods, and this one specifically makes it so that test is case insensitive
    // method #1:
    // cy.get('[data-test="fundamentals-header"]').contains(/Testing Fundamentals/i)
    // method #2:
    cy.get('[data-test="fundamentals-header"]').should('contain.text', 'Testing Fundamentals')
  })
})