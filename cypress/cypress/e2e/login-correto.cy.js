var website = 'http://localhost:4200';

describe('Página de login', () => {
    
    beforeEach(() => {      
      cy.visit(website);
    })
  
    it('Preencher os campos do formulário corretamente para logar no sistema Alurapic', () => {
        cy.login('lucasbarros99', 'lucas123');
      
    })
    
  })
  