Cypress.Commands.add("login", (user = "standard_user") => {
    cy.fixture("users").then((users) => {
        const credentials = users[user];

        cy.visit("/");

        cy.get('[data-test="username"]')
            .type(credentials.username);

        cy.get('[data-test="password"]')
            .type(credentials.password);

        cy.get('[data-test="login-button"]').click();
    });
});