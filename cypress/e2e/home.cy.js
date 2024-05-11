describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:1318/')
    cy.get('h1').first().should('have.text', 'This is index.html')
    
  })
})