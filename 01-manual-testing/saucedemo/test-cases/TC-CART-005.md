# TC-CART-005 — Verify Shopping Cart Becomes Empty After Removing All Products

## Test Case Information

| Field | Value |
|---|---|
| Test Case ID | TC-CART-005 |
| Related Scenario | TS-CART-005 |
| Module | Shopping Cart |
| Test Type | Functional / State Transition |
| Priority | High |
| Status | PASS |
| Application | SauceDemo |
| Application URL | https://www.saucedemo.com/ |
| Browser | Not recorded |
| Execution Method | Manual |
| Execution Date | Not recorded |
| Bug ID | N/A |
| Evidence | Not attached |

## Objective

Verify that removing all products from the shopping cart correctly updates the cart contents, item counter, and product button states, and that the cart remains empty during navigation.

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

**Initial Cart Quantity:** 0

**Quantity Before Removal:** 2

**Expected Quantity After Removal:** 0

## Test Steps

1. Locate Sauce Labs Backpack on the Products page.
2. Click Add to cart for Sauce Labs Backpack.
3. Click Add to cart for Sauce Labs Bike Light.
4. Verify that the shopping cart badge displays `2`.
5. Click the shopping cart icon.
6. Verify that both products appear in the shopping cart.
7. Click Remove for Sauce Labs Backpack.
8. Click Remove for Sauce Labs Bike Light.
9. Verify that no product rows remain in the shopping cart.
10. Verify that the shopping cart badge no longer displays a numeric count.
11. Click Continue Shopping to return to the Products page.
12. Verify that both products display Add to cart.
13. Verify that the shopping cart badge remains without a numeric count.
14. Open the shopping cart again.
15. Verify that the shopping cart still contains no products.

## Expected Result

- Both products are successfully added to the cart.
- The shopping cart badge displays `2` before removal.
- Both products are removed successfully.
- No product rows remain in the shopping cart.
- The shopping cart badge no longer displays a numeric count.
- Both product buttons return to Add to cart.
- The cart remains empty after navigating to the Products page and returning.

## Actual Result

After adding Sauce Labs Backpack and Sauce Labs Bike Light, the shopping cart badge displayed `2`, and both products appeared in the cart.

After removing both products, the cart contained no product rows. The QTY and DESCRIPTION column headers remained visible, but no products were listed.

Upon returning to the Products page, both product buttons displayed Add to cart, and the shopping cart badge no longer showed a numeric count.

After reopening the shopping cart, it remained empty.

All observed behaviors matched the expected results.

## Test Execution Result

**Status:** PASS

**Execution Method:** Manual

**Verification Summary:**

| Verification | Result |
|---|---|
| Cart badge displays 2 after adding both products | PASS |
| Both selected products appear in the cart | PASS |
| Both product rows disappear after removal | PASS |
| Numeric cart badge disappears | PASS |
| Both product buttons return to Add to cart | PASS |
| Cart remains empty after navigation | PASS |

**Defects Found:** None reported

**Reason:** All six expected conditions were satisfied during the reported test execution.

## Risk Assessment

Failure to remove products correctly may result in unwanted items remaining in the shopping cart. This could lead to incorrect orders, unintended purchases, refund requests, customer complaints, and reduced trust in the application.

## Notes

- This test validates the transition from an empty cart to a cart containing two products and back to an empty cart.
- The cart badge, product rows, and product button states were verified.
- The empty cart state was verified again after navigation.
- The presence of the QTY and DESCRIPTION headers does not indicate that products remain in the cart.
- The checkout process was not executed.
- No screenshots or video evidence were attached.