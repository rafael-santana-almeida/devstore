describe('search products', () => {
  it('should be able to search for products', () => {
    cy.searchByQuery('moletom')

    cy.location('pathname').should('include', '/search')
    cy.location('search').should('include', 'q=moletom')

    cy.get('a[href^="/product"]').should('exist')
  })

  it('should not be able to visit search page without a search query', () => {
    /** Comando usado para contornar possíveis exceptions não tratadas,
     * como o redirecionamento realizado pelo Next
     *
     * cy.on('uncaught:exception', () => false)
     */

    cy.visit('/search')

    cy.location('pathname').should('equal', '/')
  })
})
