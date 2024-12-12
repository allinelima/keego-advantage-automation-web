class PaymentPage {

    btnCheckout() {
        cy.get('#checkOutButton').click()
    }
    checkoutDataValidation() {
        cy.contains('label', 'BOSE SOUNDLINK WIRELESS SPEAKER', { timeout: 10000 })
        cy.contains('span', '$258.00', { timeout: 10000 })
        cy.get('span[title="BLACK"]', { timeout: 10000 })       

    }
    paymentDataValidation(){
        cy.get('span.itemsCount').should('have.text', '2 ITEMS');

        cy.get('h3.ng-binding').should('contain', 'BOSE SOUNDLINK WIRELESS SPE...');
    
        cy.get('label.ng-binding').contains('QTY').should('have.text', 'QTY: 2');
    
        cy.get('label.ng-binding').contains('Color').find('span.ng-binding').should('have.text', 'BLACK');   
    
        
        cy.get('label.roboto-bold.totalText > span.totalValue').should('have.text', '$258.00');
      
    }
}
export default new PaymentPage();
