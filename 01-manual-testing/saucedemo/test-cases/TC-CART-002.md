# TC-CART-002 — Verify Removing the First Added Product After Adding Four Products

## Test Case Information

| Field | Value |
|---|---|
| Test Case ID | TC-CART-002 |
| Module | Shopping Cart |
| Test Type | Functional / State Transition |
| Priority | High |
| Status | PASS |
| Application | SauceDemo |
| Application URL | https://www.saucedemo.com/ |
| Browser | Not recorded |
| Bug ID | N/A |
| Evidence | Not attached |

## Objective

Verify that removing the first added product from a shopping cart containing four different products updates the cart correctly without affecting the remaining products.

## Preconditions

- The SauceDemo application is accessible.
- The user is authenticated with a valid account.
- The user is on the Products page.
- The shopping cart is empty.

## Test Data

**Test Account:** `standard_user`

**Products:**

1. Sauce Labs Backpack
2. Sauce Labs Bike Light
3. Sauce Labs Bolt T-Shirt
4. Sauce Labs Fleece Jacket

**Product to Remove:** Sauce Labs Backpack

**Initial Cart Quantity:** 0

**Expected Quantity Before Removal:** 4

**Expected Quantity After Removal:** 3

## Test Steps

1. Locate Sauce Labs Backpack on the Products page.
2. Click Add to cart for Sauce Labs Backpack.
3. Click Add to cart for Sauce Labs Bike Light.
4. Click Add to cart for Sauce Labs Bolt T-Shirt.
5. Click Add to cart for Sauce Labs Fleece Jacket.
6. Verify that the shopping cart badge displays `4`.
7. Locate Sauce Labs Backpack and click Remove.
8. Verify that the shopping cart badge displays `3`.
9. Verify that the Sauce Labs Backpack button changes back to Add to cart.
10. Click the shopping cart icon.
11. Verify that Sauce Labs Backpack is no longer present.
12. Verify that the following products remain in the cart:
    - Sauce Labs Bike Light
    - Sauce Labs Bolt T-Shirt
    - Sauce Labs Fleece Jacket

## Expected Result

- All four products are successfully added to the shopping cart.
- The cart badge initially displays `4`.
- Removing Sauce Labs Backpack removes only that product.
- The cart badge updates from `4` to `3`.
- The Sauce Labs Backpack button changes back to Add to cart.
- Sauce Labs Backpack no longer appears in the shopping cart.
- The other three products remain in the shopping cart.

## Actual Result

All four products were successfully added to the shopping cart, and the cart badge displayed `4`.

After removing Sauce Labs Backpack:

- The shopping cart badge changed from `4` to `3`.
- The Sauce Labs Backpack button changed back to Add to cart.
- Sauce Labs Backpack was no longer displayed in the shopping cart.
- Sauce Labs Bike Light, Sauce Labs Bolt T-Shirt, and Sauce Labs Fleece Jacket remained in the cart.

The observed behavior matched the expected result.

## Test Execution Result

**Status:** PASS

**Executed By:** Manual QA Tester

**Execution Date:** Not recorded

**Execution Method:** Manual

**Defects Found:** None reported

**Reason:** All expected conditions were satisfied during the reported test execution.

## Risk Assessment

Incorrect product removal could lead to shopping cart inconsistencies, unintended purchases, customer complaints, refund requests, and reduced trust in the application.

## Notes

- This test validates the removal of a specific product from a cart containing multiple products.
- The cart item count was verified before and after removal.
- The remaining products were verified individually.
- This test does not validate the checkout process.
- No screenshots or video evidence were attached.