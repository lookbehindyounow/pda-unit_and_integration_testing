describe("Calculator", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
    cy.get("#clear").click()
    cy.get("#clear").click()
  })

  it('should have working number buttons', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2')
  })

  it("should update display with result of an arithmetical operation",()=>{
    cy.get("#number2").click()
    cy.get("#operator-add").click()
    cy.get("#number2").click()
    cy.get("#operator-subtract").click()
    cy.get(".display").should("contain","4")
  })

  it("should chain operations",()=>{
    cy.get("#number3").click()
    cy.get("#operator-add").click()
    cy.get("#number1").click()
    cy.get("#operator-subtract").click()
    cy.get("#number2").click()
    cy.get("#operator-equals").click()
    cy.get(".display").should("contain","2")
  })
  
  it("should work for negative numbers",()=>{ // already tested for positive numbers above
    cy.get("#number2").click()
    cy.get("#operator-subtract").click()
    cy.get("#number4").click()
    cy.get("#operator-equals").click()
    cy.get('.display').should("contain","-2")
    cy.get("#operator-subtract").click()
    cy.get("#number2").click()
    cy.get("#operator-equals").click()
    cy.get(".display").should("contain","-4")
  })
  
  it("should work for decimal numbers",()=>{
    cy.get("#number1").click()
    cy.get("#operator-divide").click()
    cy.get("#number2").click()
    cy.get("#operator-equals").click()
    cy.get(".display").should("contain","0.5")
  })

  it("should work for very large numbers",()=>{
    cy.get("#number9").click()
    cy.get("#number9").click()
    cy.get("#number9").click()
    cy.get("#number9").click()
    cy.get("#number9").click()
    cy.get("#operator-multiply").click()
    cy.get("#number9").click()
    cy.get("#number9").click()
    cy.get("#number9").click()
    cy.get("#number9").click()
    cy.get("#number9").click()
    cy.get("#operator-multiply").click()
    cy.get("#number9").click()
    cy.get("#number9").click()
    cy.get("#number9").click()
    cy.get("#number9").click()
    cy.get("#number9").click()
    cy.get("#operator-multiply").click()
    cy.get("#number9").click()
    cy.get("#number9").click()
    cy.get("#number9").click()
    cy.get("#number9").click()
    cy.get("#number9").click()
    cy.get("#operator-multiply").click()
    cy.get("#number9").click()
    cy.get("#number9").click()
    cy.get("#number9").click()
    cy.get("#number9").click()
    cy.get("#number9").click()
    cy.get("#operator-equals").click()
    cy.get(".display").should("contain","9.99").and("contain","e+24")
  })

  it("should divide by 0 to get ∞",()=>{
    cy.get("#number1").click()
    cy.get("#operator-divide").click()
    cy.get("#number0").click()
    cy.get("#operator-equals").click()
    cy.get(".display").should("contain","∞")
  })  
})