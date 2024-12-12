Feature: Buscar ProdutOSs 

  Background:
    Given que o usuário acessou a página inicial do site Advantage Online Shopping
    And  o usuário clica no ícone de lupa no cabeçalho do site
  Scenario: Buscar um produto com sucesso
    And o usuário digita o nome de um produto válido na barra de pesquisa
    When o usuário clica em 'View All'
    Then o sistema deve retornar uma lista de produtos relacionados ao nome buscado

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
  Scenario: Buscar um produto inexistente
    And o usuário digita um nome de produto inexistente na barra de pesquisa
   When clica em "Enter"
  Then o sistema deve retornar uma mensagem informando que nenhum resultado foi encontrado


  