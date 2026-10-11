# TC-LOGIN-001 — Verify Login with Valid Credentials

## Test Case Information

| Field | Value |
|---|---|
| Test Case ID | TC-LOGIN-001 |
| Module | Login |
| Test Type | Functional / Positive |
| Priority | High |
| Status | NOT EXECUTED |
| Application | SauceDemo |
| Browser | Not recorded |
| Bug ID | N/A |
| Evidence | Not attached |

## Preconditions

- The SauceDemo application is accessible.
- The user is on the login page.
- No active user session exists.

## Test Data

| Field | Value |
|---|---|
| Username | `standard_user` |
| Password | `secret_sauce` |

## Test Steps

1. Navigate to https://www.saucedemo.com/.
2. Enter `standard_user` in the Username field.
3. Enter `secret_sauce` in the Password field.
4. Click the Login button.
5. Observe the page displayed after authentication.

## Expected Result

The user is successfully authenticated and redirected to the Products page. The product catalog is displayed, and the inventory and shopping cart functionalities are accessible.

## Actual Result

Not formally recorded. The expected post-login behavior is the display of the Products page with access to the product catalog and shopping cart.

## Test Execution Result

**Status:** NOT EXECUTED

**Notes:** This test case is documented for future smoke and regression testing. A formal execution result has not yet been recorded.