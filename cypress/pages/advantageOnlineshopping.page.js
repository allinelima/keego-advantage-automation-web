class HomePage {
  
  VisitPage() {
    cy.viewport(1440, 900);
    cy.visit("/");
  }

  clicIconkMagnifyingGlass() {
    cy.get('svg[data-ng-click="openSearchProducts()"]').click();
  }

  searchProductValid() {
    cy.get('#autoComplete').type('Bose SoundLink Wireless Speaker');
  }

  searchProductInvalid() {
    cy.get('#autoComplete').type("Produto que não existe");
  }

  clickOnSearch() {
    cy.get('div[id="search"] input').type('{enter}', { force: true });
  }

  btnViewAll() {
    cy.get('a[translate="View_All"]').click();
  }

  urlSearch() {
    cy.url().should('include', 'search');
  }

  clickProduct() {
    cy.get('[data-ng-show="([] | productsFilterForCategoriesProduct:searchResult:minPriceToFilter:maxPriceToFilter:productsInclude).length != 0"] > ul > li.ng-scope').click();
  }

  verifyProductInList(nomeProduto) {
    cy.get('div[data-ng-click="$event.stopPropagation()"] h3').contains(nomeProduto).should('be.visible');
  }

  logo() {
    cy.get('.logoDemo').click();
  }

  notResults() {
    cy.get('.noProducts .ng-binding').should('be.visible').contains('No results for "Produto que não existe"')
  }

  seeProducts(nomeProduto) {
    cy.get('div[data-ng-click="$event.stopPropagation()"] h3')
      .contains(nomeProduto)
      .should('be.visible');
  }
}

export default new HomePage();
