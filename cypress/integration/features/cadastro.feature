Feature: Registro de usuário na Advantage Online Shopping
    Como um novo usuário do sistema, desejo criar uma conta, para acessar o sistema e utilizar suas funcionalidades após realizar o login.

    Background: 
        Given que o usuário acessa a página inicial
        And clica no ícone de "Minha Conta"
        And clica em "Create New Account"

    Scenario: Exibir mensagens de erro ao tentar registrar sem preencher campos obrigatórios
        When o usuário não preenche nenhum campo obrigatório
        Then mensagens de erro devem ser exibidas informando que os campos são obrigatórios
        And o botão "Register" deve estar desabilitado

    Scenario: Cadastro sem preencher campo de Email
        And o usuário não está registrado
        When o usuário deixa o campo E-mail vazio
        Then a mensagem "Email não pode ser vazio" é exibida
        And o botão "Register" deve estar desabilitado

    Scenario: Cadastro sem preencher campo de Senha
        When o usuário deixa o campo Senha vazio
        Then a mensagem "Senha não pode ser vazio" é exibida
        And o botão "Register" deve estar desabilitado

    Scenario: Cadastro sem preencher campo de Confirmar Senha
        When o usuário deixa o campo Confirmar Senha vazio
        Then a mensagem "Confirmar Senha não pode ser vazio" é exibida
        And o botão "Register" deve estar desabilitado

    Scenario: Cadastro com Senha e Confirmação de Senha diferentes
        When insere senhas diferentes nos campos de Senha e Confirmação de Senha
        Then a mensagem "Senha não combinam" é exibida
        And o botão "Register" deve estar desabilitado

    Scenario: Cadastro com Senha curta
        When cadastra com senha muito curta no campo de "Password"
        Then a mensagem "Use 4 characters or longer" deve ser exibida
        And o botão "Register" deve estar desabilitado

    Scenario: Cadastro com Senha sem uma letra
        When cadastra com senha sem uma letra
        Then a mensagem "Incluind at least one letter" deve ser exibida
        And o botão "Register" deve estar desabilitado

    Scenario: Cadastro com Senha com 10 caracteres
        When cadastra com senha com 10 caracteres
        Then a mensagem "Use maximum 12 character" deve ser exibida
        And o botão "Register" deve estar desabilitado

    Scenario: Cadastro com Senha sem uma letra em maiúsculo
        When digita senha sem letra em maiúsculo
        Then a mensagem "One upper letter at least" deve ser exibida
        And o botão "Register" deve estar desabilitado

    Scenario: Cadastro com Senha sem uma letra em minúsculo
        When digita senha sem letra em minúsculo
        Then a mensagem "One lower letter at least" deve ser exibida
        And o botão "Register" deve estar desabilitado

    Scenario: Digitar um e-mail em formato inválido
        When digita um e-mail inválido
        Then a mensagem "Your email address isnt formatted correctly" deve ser exibida
        And o botão "Register" deve estar desabilitado

    Scenario: Digitar um nome com mais de 15 caracteres
        When digita um nome com mais de 15 caracteres
        Then a mensagem "User maximum 15 characters" deve ser exibida
        And o botão "Register" deve estar desabilitado

    Scenario: Preencher os campos obrigatórios e não aceitar os termos de condições
        And preenche os campos obrigatórios
        When aceita os "Conditions of Use and Privacy Notice"
        Then o botão "Register" deve estar desabilitado

    Scenario: Usuário preenche todos os campos do formulário de registro com dados válidos
        And preenche os campos obrigatórios
        And preenche dados pessoais
        And preenche endereço
        And aceita receber ofertas e promoções exclusivas
        And aceita os termos de "Conditions of Use and Privacy Notice"
        When clica no botão de "Registrar"
        Then deve ser registrado com sucesso e redirecionado para a página inicial

    Scenario: O usuário não consegue se registrar com um nome de usuário já utilizado
        When o usuário cadastra com username já cadastrado 
        Then uma mensagem de erro deve ser exibida indicando que o username já existe

    Scenario: Clicar no botão de "Já possuo uma conta?"
        When clica em "ALREADY HAVE AN ACCOUNT?"
        Then abre um modal de login 
