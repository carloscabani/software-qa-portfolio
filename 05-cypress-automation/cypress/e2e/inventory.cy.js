describe("SauceDemo - Inventory Tests", () => {

    beforeEach(() => {
        cy.login();
    });

    it("should display all six products", () => {
        cy.get('[data-test="inventory-item"]').should("have.length", 6);
    });

    it("should display product names", () => {
        cy.get('[data-test="inventory-item-name"]').should("be.visible");
    });

    it("should add a product to the cart", () => {
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();

        cy.get('[data-test="shopping-cart-badge"]')
            .should("have.text", "1");

        cy.get('[data-test="remove-sauce-labs-backpack"]')
            .should("be.visible");
    });

});
