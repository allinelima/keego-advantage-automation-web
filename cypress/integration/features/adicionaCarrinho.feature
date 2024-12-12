Feature: Adicionar produtos ao carrinho de compras

  Scenario: Adicionar um produto ao carrinho com sucesso
    Given que eu estou na página inicial do site Advantage Online Shopping
    And adiciona um produto ao carrinho
    And o usuário clica no produto desejado
    And o usuário seleciona a cor e a quantidade do produto
    When o usuário clica no botão "Adicionar ao Carrinho"
    Then o produto deve ser adicionado ao carrinho com as opções selecionadas
