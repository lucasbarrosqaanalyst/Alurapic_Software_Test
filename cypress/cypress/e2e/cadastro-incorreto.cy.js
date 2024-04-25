var website = 'http://localhost:4200';

describe('Página de cadastro', () => {
    
  beforeEach(() => {      
    cy.visit(website);
  })
  
    it('Preencher os campos do formulário de forma incorreta', () => {
      cy.contains('a','Register now').click();

      //Trying to register a user with no information
      cy.contains('button','Register').click();
      cy.contains('button','Register').click();
      
      //Red texts should inform what was wrong
      cy.contains('Email is required!').should('be.visible');
      cy.contains('Full name is required!').should('be.visible');
      cy.contains('User name is required!').should('be.visible');
      cy.contains('Password is required!').should('be.visible');
      
    })
  })
