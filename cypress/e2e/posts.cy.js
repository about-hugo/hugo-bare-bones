describe('home page', () => {
  it('passes', () => {
    cy.visit('http://localhost:1318/posts')
    cy.get('h1').first().should('have.text', 'Posts')
  })
})