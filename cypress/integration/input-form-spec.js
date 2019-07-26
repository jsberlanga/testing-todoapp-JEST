describe("input form", () => {
  it("changes", () => {
    cy.visit("http://localhost:3000/");
    cy.get("[data-testid=title-input]")
      .type("new todo")
      .should("have.value", "new todo");

    cy.get("[data-testid=submit-button]").click();
    cy.get(".todo--option");

    cy.get("[data-test=complete-todo]").click();
    cy.get(".todo__complete").click();
    cy.get("[data-test=edit-todo]").click();

    cy.get(".todo--option > input")
      .clear()
      .type("update todo")
      .should("have.value", "update todo");
    cy.get(".todo--option > button").click();

    cy.get("[data-test=delete-todo]").click();
    cy.contains("no items");
  });
});
