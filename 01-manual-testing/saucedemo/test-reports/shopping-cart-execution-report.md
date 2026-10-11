# Shopping Cart — Test Execution Report

## 1. Report Overview

| Field | Value |
|---|---|
| Application | SauceDemo |
| Module | Shopping Cart |
| Testing Approach | Manual Functional Testing |
| Environment | Public SauceDemo web application |
| Application URL | https://www.saucedemo.com/ |
| Browser | Not recorded |
| Execution Dates | Not recorded |
| Overall Status | PARTIALLY EXECUTED |

## 2. Executive Summary

Manual functional testing was performed on the SauceDemo Shopping Cart module.

Five test cases were designed to evaluate core cart functionality, including adding products, removing products, verifying item counts, maintaining cart contents during navigation, and clearing the cart.

Four test cases were formally executed and passed. One test case remains not executed.

No defects were reported during the completed executions.

These results apply only to the scenarios tested and do not establish that the entire Shopping Cart module is defect-free.

## 3. Execution Metrics

| Metric | Value |
|---|---|
| Total Test Cases | 5 |
| Executed Test Cases | 4 |
| Passed | 4 |
| Failed | 0 |
| Blocked | 0 |
| Not Executed | 1 |
| Execution Completion | 80% |
| Pass Rate (Executed Cases) | 100% |
| Reported Defects | 0 |

**Execution Completion Calculation:**

4 executed / 5 planned × 100 = 80%

**Pass Rate Calculation:**

4 passed / 4 executed × 100 = 100%

## 4. Detailed Test Results

| Test Case ID | Test Description | Status |
|---|---|---|
| TC-CART-001 | Add a single product | PASS |
| TC-CART-002 | Remove the first of four added products | PASS |
| TC-CART-003 | Attempt to add multiple units of the same product | NOT EXECUTED |
| TC-CART-004 | Preserve cart contents during navigation | PASS |
| TC-CART-005 | Empty the cart by removing all products | PASS |

## 5. Key Observations

### Product Addition

Adding Sauce Labs Backpack updated the product button and shopping cart badge. The selected product appeared in the cart.

### Product Removal

Removing Sauce Labs Backpack from a cart containing four different products decreased the badge count from four to three. The other three products remained in the cart.

### Navigation Persistence

Three selected products remained in the cart when navigating between the Products and Cart pages within the same authenticated session.

### Empty Cart

After removing two selected products, no product rows remained, the numeric cart badge disappeared, and the products returned to the Add to cart state.

The empty cart state was retained after navigating away and returning.

### Quantity Restrictions

Preliminary exploratory testing suggested that the interface does not provide controls for adding multiple units of the same product.

This observation was not counted as a formal test execution result.

## 6. Defect Summary

**Total Reported Defects:** 0

No defects were reported during the four completed test executions.

This does not guarantee the absence of defects in untested workflows.

## 7. Risks and Limitations

- Quantity-related business requirements remain unconfirmed.
- TC-CART-003 has not been formally executed.
- Checkout and payment workflows were not tested.
- Browser compatibility was not evaluated.
- Persistence across logout, browser refresh, or browser restart was not evaluated.
- No screenshots or video recordings were attached.
- Execution timestamps and browser versions were not recorded.
- The tested scenarios represent selected functional coverage rather than exhaustive validation.

## 8. Recommendations

1. Formally execute TC-CART-003 after confirming its expected behavior.
2. Expand coverage to the checkout workflow.
3. Introduce additional negative and boundary-focused tests where relevant.
4. Capture screenshots or other execution evidence for future tests.
5. Record browser versions and execution dates in subsequent test reports.
6. Consider automating stable regression scenarios in Cypress.

## 9. Conclusion

The four executed Shopping Cart test cases passed based on the reported manual observations.

The tested behaviors included product addition, selective removal, navigation persistence, and complete cart clearing.

The Shopping Cart Test Suite remains PARTIALLY EXECUTED, with one test case pending.

No overall production-release approval is implied by these results.

## 10. Related Documents

- [Test Plan](../test-plan.md)
- [Shopping Cart Test Scenarios](../test-scenarios/shopping-cart-scenarios.md)
- [Shopping Cart Test Suite](../test-suites/shopping-cart-test-suite.md)