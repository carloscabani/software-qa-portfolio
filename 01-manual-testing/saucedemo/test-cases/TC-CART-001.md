# TC-CART-001 — Verify Adding a Single Product to the Shopping Cart

## Test Case Information

| Field | Value |
|---|---|
| Test Case ID | TC-CART-001 |
| Module | Shopping Cart |
| Test Type | Functional / Positive |
| Priority | High |
| Status | PASS |
| Application | SauceDemo |
| Browser | Not recorded |
| Bug ID | N/A |
| Evidence | Not attached |

## Preconditions

- The SauceDemo application is accessible.
- The user is authenticated.
- The user is on the Products page.
- The shopping cart is empty.

## Test Data

| Field | Value |
|---|---|
| Username | `standard_user` |
| Product | `Sauce Labs Backpack` |
| Initial Cart Quantity | 0 |

## Test Steps

1. Navigate to https://www.saucedemo.com/.
2. Log in using a valid demo account, if not already authenticated.
3. Navigate to the Products page.
4. Locate the Sauce Labs Backpack product.
5. Click the Add to cart button.
6. Verify that the button changes to Remove.
7. Verify that the shopping cart badge displays `1`.
8. Click the shopping cart icon.
9. Verify that Sauce Labs Backpack appears in the cart.

## Expected Result

The product is successfully added to the shopping cart.

- The Add to cart button changes to Remove.
- The shopping cart badge displays `1`.
- Sauce Labs Backpack appears in the shopping cart.

## Actual Result

After clicking Add to cart for Sauce Labs Backpack, the button changed to Remove.

The shopping cart badge displayed `1`, and Sauce Labs Backpack appeared in the shopping cart.

## Test Execution Result

**Status:** PASS

**Reason:** All three expected behaviors were observed during the test execution.

## Notes

- The test verified the addition of one specific product.
- The shopping cart badge reflected the expected item count.
- The selected product was present in the cart.
- No defect was identified during this test execution.