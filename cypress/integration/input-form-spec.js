describe("input form", () => {
  it("changes", () => {
    cy.visit("http://localhost:3000/");
    cy.get("[data-testid=title-input]")
      .type("new todo")
      .should("have.value", "new todo");

    cy.get("[data-testid=submit-button]").click();
    cy.get(".todo--option");
  });
});
