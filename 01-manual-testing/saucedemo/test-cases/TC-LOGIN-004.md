# TC-LOGIN-004 — Verify Login with Numeric and Special Characters in the Password

## Test Case Information

| Field | Value |
|---|---|
| Test Case ID | TC-LOGIN-004 |
| Module | Login |
| Test Type | Functional / Negative |
| Priority | Medium |
| Status | PASS |
| Application | SauceDemo |
| Browser | Google Chrome |
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
| Password | `Secret123!` |

## Test Steps

1. Navigate to https://www.saucedemo.com/.
2. Enter `standard_user` in the Username field.
3. Enter `Secret123!` in the Password field.
4. Click the Login button.
5. Observe the authentication result.

## Expected Result

The application rejects the invalid password and the user remains on the login page.

## Actual Result

The application rejected the login attempt. The user remained on the login page, and the following error message was displayed:

`Epic sadface: Username and password do not match any user in this service`

## Test Execution Result

**Status:** PASS

**Reason:** The application rejected the invalid password and kept the user on the login page, as expected.

## Notes

- The password contained numeric and special characters.
- Authentication was correctly rejected because the provided password did not match the valid credentials.
- No defect was identified during this test execution.