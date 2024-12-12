class addProductsPage {

    clickColor() {
        cy.get('[ng-show="firstImageToShow"] > .BLACK').click()

    }
    addQt() {
        cy.get('.plus').click()
    }
    addToCart(){
        cy.contains('ADD TO CART').click()
    }
    totalProducts(){
        cy.contains('span', '$258.00')
    }
    openCart(){
        cy.get('#shoppingCartLink').click()
    }
    checkQuantityErrorMessage() {
        cy.get('.error-message-selector') 
          .should('be.visible')
          .and('contain.text', 'Quantidade é obrigatória'); 
    }
}
export default new addProductsPage();
