import { faker } from '@faker-js/faker';
class RegisterPagePage {
    myAccount() {
        cy.get('#menuUser').click()
    }
    btnNewAccount() {
        cy.contains('a', 'CREATE NEW ACCOUNT').click()
    }
    emptyField() {
        const requiredFields = [
            { field: 'usernameRegisterPage', message: 'Username field is required' },
            { field: 'emailRegisterPage', message: 'Email field is required' },
            { field: 'passwordRegisterPage', message: 'Password field is required' },
            { field: 'confirm_passwordRegisterPage', message: 'Confirm password field is required' }
        ];

        requiredFields.forEach(({ field, message }) => {
            cy.get(`input[name="${field}"]`)
                .should('have.value', '')
                .click().blur();
            cy.get('label.invalid')
                .should('exist')
                .and('be.visible')
                .and('contain.text', message);
        });

        cy.get('button#register_btn').should('be.disabled');
    }

    btnRegisterDisable() {
        cy.get('button#register_btn').should('be.disabled');

    }
    submitWithoutEmail() {
        cy.get('input[name="emailRegisterPage"]').should('have.value', '');

        cy.get('input[name="usernameRegisterPage"]').type('TesteUsuario');
        cy.get('input[name="passwordRegisterPage"]').type('Senha@123');
        cy.get('input[name="confirm_passwordRegisterPage"]').type('Senha@123');
    }
    btnRegister() {
        cy.get('button#register_btn').click();
    }
    requiredFieldEmail() {
        cy.get('input[name="emailRegisterPage"]')
            .should('have.value', '')
            .click().blur();
        cy.get('label.invalid')
            .should('exist')
            .and('be.visible')
            .and('contain.text', 'Email field is required');
    }
    requiredFieldPassword() {
        cy.get('input[name="passwordRegisterPage"]')
            .should('have.value', '')
            .click().blur();
        cy.get('label.invalid')
            .should('exist')
            .and('be.visible')
            .and('contain.text', 'Password field is required');

    }
    submitWithoutPassword() {
        cy.get('input[name="passwordRegisterPage"]').should('have.value', '');
        cy.get('input[name="usernameRegisterPage"]').type('TesteUsuario');
        cy.get('input[name="emailRegisterPage"]').type('email@123.com');
        cy.get('input[name="confirm_passwordRegisterPage"]').type('Senha@123');
    }


    submitWithoutConfirmPassword() {
        cy.get('input[name="usernameRegisterPage"]').type('TesteUsuario');
        cy.get('input[name="emailRegisterPage"]').type('email@123.com');
        cy.get('input[name="passwordRegisterPage"]').type('Test@123');
        cy.get('input[name="confirm_passwordRegisterPage"]').should('have.value', '');

    }
    requiredFieldConfirmPassword() {
        cy.get('input[name="confirm_passwordRegisterPage"]')
            .should('have.value', '')
            .click().blur();
        cy.get('label.invalid')
            .should('exist')
            .and('be.visible')
            .and('contain.text', 'Confirm password field is required');
    }
    passwordNotMatch() {
        cy.get('input[name="usernameRegisterPage"]').type('TesteUsuario');
        cy.get('input[name="emailRegisterPage"]').type('email@123.com');
        cy.get('input[name="passwordRegisterPage"]').type('Test@123');
        cy.get('input[name="confirm_passwordRegisterPage"]').type('Test@1234');
    }
    messagePasswordNotMatch() {
        cy.get('input[name="confirm_passwordRegisterPage"]')
            .click().blur();
        cy.get('label.invalid')
            .should('exist')
            .and('be.visible')
            .and('contain.text', 'Passwords do not match');
    }
    shortPassword() {
        cy.get('input[name="passwordRegisterPage"]').type("AL")
            .click().blur()
    }
    messageShortPassword() {
        cy.get('[a-hint="Password"] > .inputContainer > label.invalid')
            .should('contain.text', 'Use  4 character or longer');
    }
    shortPasswordWithoutOneLetter() {
        cy.get('input[name="passwordRegisterPage"]').type("12245")
            .click().blur()
    }
    messagemShortPasswordOneLetter() {
        cy.get('[a-hint="Password"] > .inputContainer > label.invalid')
            .should('contain.text', 'One lower letter required');
    }
    characterMaximum() {
        cy.get('input[name="passwordRegisterPage"]').type("123456789123456789")
            .click().blur()
    }
    messagemCharacterMaximum() {
        cy.get('[a-hint="Password"] > .inputContainer > label.invalid')
            .should('contain.text', 'Use maximum 12 character');
    }


    oneUpperLetter() {
        cy.get('input[name="passwordRegisterPage"]').type("test@123")
            .click().blur()

    }
    messageOneUpperLetter() {
        cy.get('[a-hint="Password"] > .inputContainer > label.invalid')
            .should('contain.text', 'One upper letter required');
    }
    oneLowerLetter() {
        cy.get('input[name="passwordRegisterPage"]').type("TEST@123")
            .click().blur()
    }
    messageOneLowerLetter() {
        cy.get('[a-hint="Password"] > .inputContainer > label.invalid')
            .should('contain.text', 'One lower letter required');
    }
    emailInvalid() {
        cy.get('input[name="emailRegisterPage"]').type('email123com')
           .click().blur()

    }
    messageEmailInvalid() {
        cy.get('[sec-name="userEmail"] > .inputContainer > .animated')
            .should('contain.text', "Your email address isn't formatted correctly");
    }

    nameMaxxium() {
        cy.get('input[name="usernameRegisterPage"]').type('aqui é um exemplo de nome ultrapassando 15 caracteres ')
            .click().blur()
    }

    messageNameMaxxium() {
        cy.get('[a-hint="Username"] > .inputContainer > .animated')
            .should('contain.text', "Use maximum 15 character");
    }
    requiredMandatory() {
        const randomEmail = faker.internet.email();   
        const randomUsername = faker.internet.userName();
        
       
        cy.get('input[name="emailRegisterPage"]').should('be.visible').type(randomEmail); 
        cy.get('input[name="usernameRegisterPage"]').should('be.visible').type(randomUsername);    
        cy.get('input[name="passwordRegisterPage"]').should('be.visible').type('Senha@123');      
        cy.get('input[name="confirm_passwordRegisterPage"]').should('be.visible').type('Senha@123');
    }
    
    checkboxConditionOfUse(){
        cy.get('input[name="i_agree"]').should('not.be.checked');

        
    }
    personalDetais(){
        cy.get('input[name="first_nameRegisterPage"]').type('Nome Teste')
        cy.get('input[name="last_nameRegisterPage"]').type(' Sobrenome Teste')
        cy.get('input[name="phone_numberRegisterPage"]').type('11983659785')        
    }

    adress(){
        cy.get('select[name="countryListboxRegisterPage"]').select('Brazil')
        cy.get('input[name="cityRegisterPage"]').type('São Paulo')
        cy.get('input[name="addressRegisterPage"]').type("Rua dos QAS")
        cy.get('input[name="state_/_province_/_regionRegisterPage"]').type('São Paulo', {force: true})
        cy.get('input[name="postal_codeRegisterPage"]').type('060000')
     
    }  
    checkboxReceivePromo(){
        cy.get('input[name="allowOffersPromotion"]').should('be.checked')
    }
    checkboxConditionOfUseChecked(){
        cy.get('input[name="i_agree"]')
        .should('not.be.checked')
        .click({ force: true })  
        .should('be.checked');

    }   

    pageHome(){
        cy.url().should('eq', 'https://www.advantageonlineshopping.com/#/'); 

    }

  
    duplicateUsername() {
        const existingUsername = 'TesteUsuario'; 
        const randomEmail = faker.internet.email();   
    
        cy.get('input[name="usernameRegisterPage"]').type(existingUsername);
        cy.get('input[name="emailRegisterPage"]').type(randomEmail); 
        cy.get('input[name="passwordRegisterPage"]').type('Senha@123');
        cy.get('input[name="confirm_passwordRegisterPage"]').type('Senha@123');
        
    }
    
    checkUsernameExistsError() {
        cy.get('label.invalid')
            .should('be.visible')
            .and('contain.text', 'User name already exists'); 
    }
btnLogin(){
    cy.get('a[translate="ALREADY_HAVE_AN_ACCOUNT"]').click()

}
modalLogin(){
    cy.get('div.PopUp img').should(be.visible)
}



}
export default new RegisterPagePage();




