# TC-CART-003 — Verify Single-Unit Product Selection Through the Shopping Cart Interface

## Test Case Information

| Field | Value |
|---|---|
| Test Case ID | TC-CART-003 |
| Related Scenario | TS-CART-003 |
| Module | Shopping Cart |
| Test Type | Functional / Exploratory |
| Priority | Medium |
| Status | NOT EXECUTED |
| Application | SauceDemo |
| Application URL | https://www.saucedemo.com/ |
| Browser | Not recorded |
| Execution Date | Not recorded |
| Bug ID | N/A |
| Evidence | Not attached |

## Objective

Verify the behavior of the shopping cart interface when a user attempts to add more than one unit of the same product.

## Preconditions

- The SauceDemo application is accessible.
- The user is authenticated with a valid account.
- The user is on the Products page.
- The shopping cart is empty.

## Test Data

| Field | Value |
|---|---|
| Test Account | `standard_user` |
| Product | Sauce Labs Backpack |
| Initial Cart Quantity | 0 |

## Test Steps

1. Locate Sauce Labs Backpack on the Products page.
2. Click Add to cart for Sauce Labs Backpack.
3. Verify that the product button changes to Remove.
4. Verify that the shopping cart badge displays `1`.
5. Inspect the product controls for an option to increase the quantity.
6. Open the shopping cart.
7. Locate Sauce Labs Backpack in the cart.
8. Inspect the cart interface for quantity-increase controls.
9. Return to the Products page using Continue Shopping.
10. Verify whether the interface provides an option to add another unit without removing the existing one.

## Expected Result

Based on preliminary exploratory observations:

- Sauce Labs Backpack is added to the cart.
- The Add to cart button changes to Remove.
- The shopping cart badge displays `1`.
- No quantity-increase control is available through the observed Products or Cart interface.
- The interface does not provide a direct way to add another unit of the same product while it is already selected.

## Actual Result

Not recorded for formal test execution.

## Test Execution Result

**Status:** NOT EXECUTED

**Reason:** The behavior was previously investigated through informal exploratory testing, but the complete documented test procedure has not yet been executed and verified.

## Preliminary Exploratory Findings

During an informal exploration, the tester observed that products appeared to be limited to one selected unit through the available interface controls.

No quantity-increase control was identified.

These findings are preliminary and are not counted as a formal PASS result.

## Risk Assessment

If the application is intended to support multiple units of the same product, the absence of quantity controls could prevent users from purchasing their desired quantities.

However, the intended quantity rules have not been confirmed through an authoritative requirement or specification.

## Notes

- This test documents an observed interface limitation.
- The observed behavior should not be classified as a defect without confirming the intended business requirements.
- The test does not validate backend restrictions or API behavior.
- Formal execution is pending.
- No screenshots or video evidence were attached.