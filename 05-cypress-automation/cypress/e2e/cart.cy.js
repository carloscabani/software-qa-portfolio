describe("SauceDemo - Shopping Cart Tests", () => {

    beforeEach(() => {
        cy.login();
    });

    it("should add two products to the cart", () => {
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
        cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click();

        cy.get('[data-test="shopping-cart-badge"]')
            .should("have.text", "2");
    });

    it("should remove a product from the cart", () => {
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
        cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click();

        cy.get('[data-test="remove-sauce-labs-backpack"]').click();

        cy.get('[data-test="shopping-cart-badge"]')
            .should("have.text", "1");

        cy.get('[data-test="remove-sauce-labs-bike-light"]')
            .should("be.visible");
    });

    it("should display the selected products in the cart", () => {
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
        cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click();

        cy.get('[data-test="shopping-cart-link"]').click();

        cy.url().should("include", "/cart.html");

        cy.get('[data-test="inventory-item"]')
            .should("have.length", 2);

        cy.contains("Sauce Labs Backpack").should("be.visible");
        cy.contains("Sauce Labs Bike Light").should("be.visible");
    });

});

