import { Given, And, When, Then } from "cypress-cucumber-preprocessor/steps";
import RegisterPage from "../../../pages/registerPage.page";
import HomePage from "../../../pages/advantageOnlineshopping.page";


Given('que o usuário acessa a página inicial', () => {
    HomePage.VisitPage();
});

And('clica no ícone de "Minha Conta"', () => {
    RegisterPage.myAccount();
});
And('clica em "Create New Account"', () => {
    RegisterPage.btnNewAccount()
})
When('o usuário não preenche nenhum campo obrigatório', () => {
    RegisterPage.emptyField()
});
Then('mensagens de erro devem ser exibidas informando que os campos são obrigatórios', () => {

});

And('o botão "Register" deve estar desabilitado', () => {
    RegisterPage.btnRegisterDisable()
});

And('o usuário não está registrado', () => {
});
When('o usuário deixa o campo E-mail vazio', () => {
    RegisterPage.submitWithoutEmail()
});

Then('a mensagem "Email não pode ser vazio" é exibida', () => {
    RegisterPage.requiredFieldEmail()

});
And('o botão "Register" deve estar desabilitado', () => {
    RegisterPage.requiredFieldEmail()
});

When('o usuário deixa o campo Senha vazio', () => {
    RegisterPage.submitWithoutPassword()

});
Then('a mensagem "Senha não pode ser vazio" é exibida', () => {
    RegisterPage.requiredFieldPassword()

});
When('o usuário deixa o campo Confirmar Senha vazio', () => {
    RegisterPage.submitWithoutConfirmPassword()

});
Then('a mensagem "Confirmar Senha não pode ser vazio" é exibida', () => {
    RegisterPage.requiredFieldConfirmPassword()
});

When('insere senhas diferentes nos campos de Senha e Confirmação de Senha', () => {
    RegisterPage.passwordNotMatch();
});

Then('a mensagem "Senha não combinam" é exibida', () => {
    RegisterPage.messagePasswordNotMatch();
});

And('o botão "Register" deve estar desabilitado', () => {
    RegisterPage.btnRegisterDisable();
});
When('cadastra com senha muito curta no campo de "Password"', () => {
    RegisterPage.shortPassword()

});

Then('a mensagem "Use 4 characters or longer" deve ser exibida', () => {
    RegisterPage.messageShortPassword()

})
And('o botão "Register" deve estar desabilitado', () => {
    RegisterPage.btnRegisterDisable();

});
When('cadastra com senha sem uma letra', () => {
    RegisterPage.shortPasswordWithoutOneLetter()         

});
Then('a mensagem "Incluind at least one letter" deve ser exibida', () => {
    RegisterPage.messagemShortPasswordOneLetter()
});

When('cadastra com senha com 10 caracteres', () => {
    RegisterPage.characterMaximum()

});
Then('a mensagem "Use maximum 12 character" deve ser exibida', () => {
    RegisterPage.messagemCharacterMaximum()

});

When('digita senha sem letra em maiúsculo', () => {
    RegisterPage.oneUpperLetter()

});
Then('a mensagem "One upper letter at least" deve ser exibida', () => {
    RegisterPage.messageOneUpperLetter()


});

When('digita senha sem letra em minúsculo', () => {
    RegisterPage.oneLowerLetter()

});
Then('a mensagem "One lower letter at least" deve ser exibida', () => {
    RegisterPage.messageOneLowerLetter()

});
When('digita um e-mail inválido', () => {
    RegisterPage.emailInvalid()

});
Then('a mensagem "Your email address isnt formatted correctly" deve ser exibida', () => {
    RegisterPage.messageEmailInvalid()

});

When('digita um nome com mais de 15 caracteres', () => {
    RegisterPage.nameMaxxium()

});
Then('a mensagem "User maximum 15 characters" deve ser exibida', () => {
    RegisterPage.messageNameMaxxium()

});

And('preenche os campos obrigatórios', () => {
    RegisterPage.requiredMandatory()
});
When('aceita os "Conditions of Use and Privacy Notice"', () => {
    RegisterPage.checkboxConditionOfUse()
});

And('preenche dados pessoais', () => {
    RegisterPage.personalDetais()
});


And('preenche endereço', () => {
    RegisterPage.adress()
});
And('aceita receber ofertas e promoções exclusivas', () => {
    RegisterPage.checkboxReceivePromo()
});

And('aceita os termos de "Conditions of Use and Privacy Notice"', () => {
    RegisterPage.checkboxConditionOfUseChecked()
});

When('clica no botão de "Registrar"', () => {
    RegisterPage.btnRegister()

});
Then('deve ser registrado com sucesso e redirecionado para a página inicial', () => {
    RegisterPage.pageHome()

});


When('o usuário cadastra com username já cadastrado', () => {
    RegisterPage.duplicateUsername();
    RegisterPage.checkboxConditionOfUseChecked();
    RegisterPage.btnRegister();
});

Then('uma mensagem de erro deve ser exibida indicando que o username já existe', () => {
    RegisterPage.checkUsernameExistsError();
});


When('clica em "ALREADY HAVE AN ACCOUNT?"', () => {
    RegisterPage.btnLogin()
});

When('abre um modal de login', () => {
    RegisterPage.modalLogin                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         
 
});
