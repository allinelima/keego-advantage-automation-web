import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import HomePage from "../../../pages/advantageOnlineshopping.page"
import AddProductsPage from "../../../pages/addProductsPage.page"
import PaymentPage from "../../../pages/payment.page"

const nomeProduto = "BOSE SOUNDLINK WIRELESS SPEAKER";
Given('que o usuário acessou a página inicial do site Advantage Online Shopping', () => {
    HomePage.VisitPage();
});
And('o usuário clica no ícone de lupa no cabeçalho do site', () => {
    HomePage.logo()
    HomePage.clicIconkMagnifyingGlass();

});
And('busca e seleciona o produto desejado', () => {
    HomePage.searchProductValid(nomeProduto);
    HomePage.btnViewAll()
    HomePage.clickProduct()
    AddProductsPage.clickColor()

});
And('adiciono um produto ao carrinho', () => {
    AddProductsPage.addQt()
    AddProductsPage.addToCart()
    AddProductsPage.openCart()
    AddProductsPage.totalProducts()
});
When('navego até tela de order payment', () => {
    PaymentPage.btnCheckout()

});
Then('o produto deve estar listado na tela de pagamento com as seguintes informações: nome, cor, quantidade e preço', () => {
    PaymentPage.paymentDataValidation()

});



