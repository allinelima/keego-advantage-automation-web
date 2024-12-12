import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import HomePage from "../../../pages/advantageOnlineshopping.page"
import AddProducts from "../../../pages/addProductsPage.page";

const nomeProduto = "BOSE SOUNDLINK WIRELESS SPEAKER";
Given('que eu estou na página inicial do site Advantage Online Shopping', () => {
    HomePage.VisitPage();
});


And('adiciona um produto ao carrinho', () => {
    HomePage.logo()
    HomePage.clicIconkMagnifyingGlass();
    HomePage.searchProductValid(nomeProduto);

});

And('o usuário clica no produto desejado', () => {
    HomePage.btnViewAll()
    HomePage.clickProduct()

});
And('o usuário seleciona a cor e a quantidade do produto', () => {
    AddProducts.clickColor()
    AddProducts.addQt()

});
When('o usuário clica no botão "Adicionar ao Carrinho"', () => {
    AddProducts.addToCart()

});
Then('o produto deve ser adicionado ao carrinho com as opções selecionadas', () => {
    AddProducts.openCart()
    AddProducts.totalProducts()
});



