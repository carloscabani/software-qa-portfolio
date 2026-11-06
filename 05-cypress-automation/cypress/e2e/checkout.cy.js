describe("SauceDemo - Checkout Tests", () => {

    beforeEach(() => {
        cy.visit("/");

        cy.get('[data-test="username"]').type("standard_user");
        cy.get('[data-test="password"]').type("secret_sauce");
        cy.get('[data-test="login-button"]').click();

        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
        cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click();

        cy.get('[data-test="shopping-cart-link"]').click();
        cy.get('[data-test="checkout"]').click();
    });

    it("should complete a purchase successfully", () => {
        cy.get('[data-test="firstName"]').type("QA");
        cy.get('[data-test="lastName"]').type("Tester");
        cy.get('[data-test="postalCode"]').type("090101");

        cy.get('[data-test="continue"]').click();

        cy.url().should("include", "/checkout-step-two.html");

        cy.contains("Sauce Labs Backpack").should("be.visible");
        cy.contains("Sauce Labs Bike Light").should("be.visible");

        cy.get('[data-test="finish"]').click();

        cy.get('[data-test="complete-header"]')
            .should("have.text", "Thank you for your order!");
    });

    it("should display an error when checkout information is missing", () => {
        cy.get('[data-test="continue"]').click();

        cy.get('[data-test="error"]')
            .should("be.visible")
            .and("contain", "First Name is required");
    });

});