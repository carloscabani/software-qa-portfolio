
describe("SauceDemo - Login Tests", () => {

    beforeEach(() => {
        cy.visit("/");
    });

    it("should successfully load the login page", () => {
        cy.get('[data-test="username"]').should("be.visible");
        cy.get('[data-test="password"]').should("be.visible");
        cy.get('[data-test="login-button"]').should("be.visible");
    });

    it("should login successfully with valid credentials", () => {
        cy.get('[data-test="username"]').type("standard_user");
        cy.get('[data-test="password"]').type("secret_sauce");
        cy.get('[data-test="login-button"]').click();

        cy.url().should("include", "/inventory.html");
        cy.get('[data-test="title"]').should("contain", "Products");
    });

    it("should reject an invalid password", () => {
        cy.get('[data-test="username"]').type("standard_user");
        cy.get('[data-test="password"]').type("wrong_password");
        cy.get('[data-test="login-button"]').click();

        cy.get('[data-test="error"]')
            .should("contain", "Username and password do not match");
    });

    it("should reject a locked out user", () => {
        cy.get('[data-test="username"]').type("locked_out_user");
        cy.get('[data-test="password"]').type("secret_sauce");
        cy.get('[data-test="login-button"]').click();

        cy.get('[data-test="error"]')
            .should("contain", "Sorry, this user has been locked out");
    });

    it("should require a username", () => {
        cy.get('[data-test="password"]').type("secret_sauce");
        cy.get('[data-test="login-button"]').click();

        cy.get('[data-test="error"]')
            .should("contain", "Username is required");
    });

    it("should require a password", () => {
        cy.get('[data-test="username"]').type("standard_user");
        cy.get('[data-test="login-button"]').click();

        cy.get('[data-test="error"]')
            .should("contain", "Password is required");
    });

});


describe("SauceDemo - Data Driven Login Tests", () => {

    it("should reject multiple invalid login credentials", () => {

        cy.fixture("login-invalid-data").then((testCases) => {

            cy.wrap(testCases).each((testCase) => {

                cy.visit("/");

                cy.get('[data-test="username"]')
                    .type(testCase.username);

                cy.get('[data-test="password"]')
                    .type(testCase.password);

                cy.get('[data-test="login-button"]').click();

                cy.get('[data-test="error"]')
                    .should("be.visible")
                    .and("contain", testCase.expectedError);
            });

        });

    });

});