# End-to-End Test Suite — Purchase Workflow

**Suite ID:** E2E-SUITE-001  
**Application:** SauceDemo  
**Module:** Complete Purchase Workflow  
**Test Type:** End-to-End Testing  
**Status:** Completed  
**Execution Result:** 6/6 PASS

## 1. Objective

Validate the complete customer purchase journey, from authentication and product selection to order completion and confirmation.

## 2. Test Environment

- Application: https://www.saucedemo.com/
- User: `standard_user`
- Testing approach: Manual testing
- Browser and OS: Not recorded.

## 3. Test Scenario

A customer logs into SauceDemo, selects two products, reviews the shopping cart, submits customer information, verifies the order summary, and completes the purchase.

## 4. Test Cases

| Test Case ID | Test Description | Expected Result |
|---|---|---|
| E2E-001 | Login and Product Selection | User logs in successfully and adds two products to the cart. |
| E2E-002 | Shopping Cart Verification | Both products appear with the correct quantities and prices. |
| E2E-003 | Checkout Information Page | Checkout information form loads with the required fields. |
| E2E-004 | Submit Customer Information | Customer information is accepted and the user proceeds to Checkout Overview. |
| E2E-005 | Order Overview Verification | Product information, payment, shipping, subtotal, tax, and total are displayed correctly. |
| E2E-006 | Complete Order | Purchase is completed and the order confirmation page is displayed. |

## 5. Test Data

| Product | Price |
|---|---:|
| Sauce Labs Backpack | $29.99 |
| Sauce Labs Bike Light | $9.99 |
| Item Total | $39.98 |
| Tax | $3.20 |
| Final Total | $43.18 |

## 6. Execution Summary

| Metric | Result |
|---|---:|
| Total Test Cases | 6 |
| Executed | 6 |
| Passed | 6 |
| Failed | 0 |
| Blocked | 0 |
| Not Executed | 0 |

## 7. Scope Limitations

- Manual testing only.
- No automated tests were executed.
- No screenshots or video evidence were collected.
- Browser and operating system details were not recorded.
- The Download PDF Order and Back Home buttons were observed but not independently tested.

**Note:** This was a manual End-to-End testing practice exercise using the existing SauceDemo application.