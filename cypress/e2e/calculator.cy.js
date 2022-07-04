describe("Calculator", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  })

  it('should have working number buttons', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2')
  })

  it('should update running total when number buttons are clicked', () => {
    cy.get('#number2').click();
    cy.get('#number2').click();
    cy.get('#number1').click();
    cy.get('#running-total').should('contain', '221');
  });

  it('update display with result of operation when operator button is clicked', () => {
    cy.get('#number2').click();
    cy.get('#operator-add').click();
    cy.get('#number1').click();
    cy.get('#operator-add').click();
    cy.get('.display').should('contain', '3')
  });

  it('should chain multiple operations together', () => {
    cy.get('#number2').click();
    cy.get('#operator-add').click();
    cy.get('#number1').click();
    cy.get('#operator-add').click();
    cy.get('#number2').click();
    cy.get('#operator-equals').click();
    cy.get('#running-total').should('contain', '5');
  });

  it('properly display for a positive number', () => {
    cy.get('#number1').click();
    cy.get('#number0').click();
    cy.get('#operator-multiply').click();
    cy.get('#number1').click();
    cy.get('#number0').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '100')
  });

  it('properly display for a negative number', () => {
    cy.get('#number1').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#operator-subtract').click();
    cy.get('#number2').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '-100')
  });

  it('properly display for a decimal number', () => {
    cy.get('#number9').click();
    cy.get('#operator-divide').click();
    cy.get('#number2').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '4.5')
  });

  it('properly display for very large number', () => {
    cy.get('#number1').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
 
    cy.get('.display').should('contain', '100000000000000')
    
  });

  it('when divided by 0 gives the result as 0', () => {
    cy.get('#number9').click();
    cy.get('#operator-divide').click();
    cy.get('#number0').click();
    cy.get('#operator-equals').click();
    cy.get('#running-total').should('contain', '0');
  });
});