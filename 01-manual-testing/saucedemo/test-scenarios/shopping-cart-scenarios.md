# Shopping Cart — Test Scenarios

## Overview

**Application:** SauceDemo  
**URL:** https://www.saucedemo.com/  
**Module:** Shopping Cart  
**Testing Approach:** Manual Functional Testing  
**Scenario Count:** 5

## Objective

Identify and document key shopping cart behaviors, including product addition, removal, quantity restrictions, state consistency, and persistence during navigation.

## Test Scenarios

| Scenario ID | Scenario Description | Related Test Case | Priority |
|---|---|---|---|
| TS-CART-001 | Verify that an authenticated user can add a single product to the shopping cart. | TC-CART-001 | High |
| TS-CART-002 | Verify that removing the first of four added products does not affect the remaining products. | TC-CART-002 | High |
| TS-CART-003 | Verify the interface behavior when attempting to add multiple units of the same product. | TC-CART-003 | Medium |
| TS-CART-004 | Verify that shopping cart contents persist during navigation between Products and Cart. | TC-CART-004 | High |
| TS-CART-005 | Verify that removing all products results in an empty shopping cart. | TC-CART-005 | High |

## Scope

### In Scope

- Adding products to the shopping cart.
- Removing individual products.
- Verifying shopping cart item counts.
- Verifying selected product information.
- Exploring single-product quantity restrictions.
- Verifying cart state during page navigation.
- Verifying the empty cart state.

### Out of Scope

- Checkout and payment processing.
- Backend and database validation.
- Performance and load testing.
- Security penetration testing.
- Persistence across browser restarts or user sessions.
- Automated test execution.

## Test Design Techniques

- Functional Testing
- Positive Testing
- State Transition Testing
- State Persistence Verification
- Exploratory Testing

## Assumptions and Limitations

- The application is tested using the publicly available SauceDemo interface.
- Expected results are based on observed application behavior and practice acceptance criteria.
- Official business requirements for purchasing multiple units of the same product have not been confirmed.
- Scenario TS-CART-003 requires formal execution and further requirements clarification.

## Traceability

Each test scenario maps to a corresponding test case stored in:

`../test-cases/`

Execution results are summarized in:

`../test-reports/shopping-cart-execution-report.md`