# TC-LOGIN-002 — Verify Login with Whitespace Inside the Username

## Test Case Information

| Field | Value |
|---|---|
| Test Case ID | TC-LOGIN-002 |
| Module | Login |
| Test Type | Functional / Negative |
| Priority | Medium |
| Status | PASS |
| Application | SauceDemo |
| Bug ID | N/A |
| Evidence | Not attached |

## Preconditions

- The SauceDemo application is accessible.
- The user is on the login page.

## Test Data

| Field | Value |
|---|---|
| Username | `standard user` |
| Password | `secret_sauce` |

## Test Steps

1. Navigate to https://www.saucedemo.com/.
2. Enter `standard user` in the Username field.
3. Enter `secret_sauce` in the Password field.
4. Click the Login button.
5. Observe the authentication result.

## Expected Result

The application rejects the invalid credentials and the user remains on the login page.

## Actual Result

The application rejected the login attempt and displayed the following error message:

`Epic sadface: Username and password do not match any user in this service`

## Test Execution Result

**Status:** PASS

**Reason:** The application rejected the invalid username as expected.

## Notes

The username containing internal whitespace was not accepted by the authentication system.

No defect was identified during this test execution.