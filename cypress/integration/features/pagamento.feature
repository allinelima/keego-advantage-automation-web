Feature: Compra de produtos no site Advantage Online Shopping

  Scenario: Adicionar um produto ao carrinho e validar na tela de pagamento
    Given que o usuário acessou a página inicial do site Advantage Online Shopping
    And o usuário clica no ícone de lupa no cabeçalho do site
    And busca e seleciona o produto desejado
    And adiciono um produto ao carrinho
    When navego até tela de order payment
    Then o produto deve estar listado na tela de pagamento com as seguintes informações: nome, cor, quantidade e preço
