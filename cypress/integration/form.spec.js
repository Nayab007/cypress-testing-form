describe("Form test", () => {
  it("Can fill the form", () => {
    cy.visit("/");
    cy.get("form");

    cy.get('input[name="name"]')
      .type("Nayab")
      .should("have.value", "Molly");

    cy.get('input[name="email"]')
      .type("nayab@gmail.com")
      .should("have.value", "nayab@gmail.com");

    cy.get("textarea")
      .type("Hello, How are you?")
      .should("have.value", "Hello, How are you?");

    cy.server();
    cy.route({
      url: "/users/**",
      method: "POST",
      response: { status: "Form saved!", code: 201 }
    });

    cy.get("form").submit();

    cy.contains("Form saved!");
  });
});