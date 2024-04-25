var website = 'http://localhost:4200';
const USUARIOS = require('../fixtures/usuarios.json');


describe('Página de cadastro', () => {

    beforeEach(() => {
        cy.visit(website);
    })
    
    USUARIOS.forEach(usuario => {
        it('Preencher os campos do formulário corretamente para cadastrar um novo formulário', () => {
            cy.get('[data-test="register"]').click();
            cy.get('input[data-test="email"]').type(usuario.email);
            cy.get('input[data-test="fullName"]').type(usuario.fullName);
            cy.get('input[data-test="registerUserName"]').type(usuario.userName);
            cy.get('input[data-test="registerPassword"]').type(usuario.password);
            cy.get('[data-test="btnRegister"]').click();
        })
        
    })
    
})