import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import HomePage from "../../../pages/advantageOnlineshopping.page";

const produtoValido = "Bose SoundLink Wireless Speaker";
const produtoInexistente = "Produto que não Existe";

Given('que o usuário acessou a página inicial do site Advantage Online Shopping', () => {
  HomePage.VisitPage();
});
And('o usuário clica no ícone de lupa no cabeçalho do site', () => {
  HomePage.clicIconkMagnifyingGlass();
});

And('o usuário digita o nome de um produto válido na barra de pesquisa', () => {
  HomePage.searchProductValid();
});


When("o usuário clica em 'View All'", () => {
  HomePage.btnViewAll();
});

Then('o sistema deve retornar uma lista de produtos relacionados ao nome buscado', () => {
  HomePage.seeProducts(produtoValido);
});

And('o usuário digita um nome de produto inexistente na barra de pesquisa', () => {
  HomePage.searchProductInvalid(produtoInexistente);
});

When('clica em "Enter"', () => {
  HomePage.clickOnSearch() 
   
});

Then('o sistema deve retornar uma mensagem informando que nenhum resultado foi encontrado', () => {
  HomePage.notResults();
});


