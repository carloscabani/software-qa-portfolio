# TC-CART-004 — Verify Shopping Cart Contents Persist During Navigation

## Test Case Information

| Field | Value |
|---|---|
| Test Case ID | TC-CART-004 |
| Related Scenario | TS-CART-004 |
| Module | Shopping Cart |
| Test Type | Functional / State Persistence |
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

Verify that the shopping cart retains previously added products when the user navigates between the Products and Cart pages within the same authenticated session.

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

**Initial Cart Quantity:** 0

**Expected Cart Quantity:** 3

## Test Steps

1. Locate Sauce Labs Backpack on the Products page.
2. Click Add to cart for Sauce Labs Backpack.
3. Click Add to cart for Sauce Labs Bike Light.
4. Click Add to cart for Sauce Labs Bolt T-Shirt.
5. Verify that the shopping cart badge displays `3`.
6. Click the shopping cart icon.
7. Verify that all three selected products appear in the cart.
8. Click Continue Shopping to return to the Products page.
9. Verify that the shopping cart badge still displays `3`.
10. Click the shopping cart icon again.
11. Verify that the same three products remain in the cart.
12. Verify that no products have been unexpectedly added or removed.

## Expected Result

- The shopping cart badge displays `3` after adding the products.
- All three selected products appear in the cart.
- The shopping cart badge continues displaying `3` after returning to the Products page.
- All three products remain in the cart when it is reopened.
- No products are lost, duplicated, or unexpectedly added during navigation.

## Actual Result

The shopping cart badge consistently displayed `3` throughout navigation between the Products and Cart pages.

All three selected products remained in the cart after returning to the Products page and reopening the cart:

- Sauce Labs Backpack
- Sauce Labs Bike Light
- Sauce Labs Bolt T-Shirt

No additional or missing products were observed.

## Test Execution Result

**Status:** PASS

**Execution Method:** Manual

**Verification Summary:**

| Verification | Result |
|---|---|
| Cart badge displays 3 after adding products | PASS |
| All selected products appear during the first cart visit | PASS |
| Cart badge remains at 3 after returning to Products | PASS |
| All selected products remain during the second cart visit | PASS |
| No unexpected changes to cart contents | PASS |

**Defects Found:** None reported

**Reason:** All expected behaviors were observed during the reported execution.

## Risk Assessment

Loss of shopping cart contents during navigation could result in incomplete orders, customer frustration, abandoned purchases, and reduced trust in the application.

## Notes

- This test verifies shopping cart state persistence during navigation within an authenticated session.
- It does not verify persistence after logging out, refreshing the browser, or closing the browser.
- The shopping cart badge and product contents were both verified.
- No screenshots or video evidence were attached.