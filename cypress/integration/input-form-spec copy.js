const typedText = "new todo";
describe("input form refactor?", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.get("[data-testid=title-input]")
      .type(typedText)
      .should("have.value", typedText);
    cy.get("[data-testid=submit-button]").click();
    cy.get(".todo--option");
  });

  it("completes todo", () => {
    cy.get("[data-test=complete-todo]").click();
    cy.get(".todo__complete").click();
  });

  it("edits todo", () => {
    cy.get("[data-test=edit-todo]").click();

    cy.get(".todo--option > input")
      .clear()
      .type("update todo")
      .should("have.value", "update todo");
    cy.get(".todo--option > button").click();
  });
  it("deletes todo", () => {
    cy.get("[data-test=delete-todo]").click();
    cy.contains("no items");
  });
});
