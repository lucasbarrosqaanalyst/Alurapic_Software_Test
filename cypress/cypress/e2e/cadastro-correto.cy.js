var website = 'http://localhost:4200';

describe('Página de cadastro', () => {

  beforeEach(() => {      
    cy.visit(website);
  })

  it('Preencher os campos do formulário corretamente para cadastrar um novo formulário', () => {    
    cy.get('[data-test="register"]').click();
    cy.get('input[data-test="email"]').type('lucas@alurapic.com');
    cy.get('input[data-test="fullName"]').type('Lucas Barros');
    cy.get('input[data-test="registerUserName"]').type('lucasbarros99');
    cy.get('input[data-test="registerPassword"]').type('lucas123');
    cy.get('[data-test="btnRegister"]').click();
  })
})
