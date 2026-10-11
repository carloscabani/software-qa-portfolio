# TC-LOGIN-003 — Verify Login with an Uppercase Password

## Test Case Information

| Field | Value |
|---|---|
| Test Case ID | TC-LOGIN-003 |
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
| Password | `SECRET_SAUCE` |

## Test Steps

1. Navigate to https://www.saucedemo.com/.
2. Enter `standard_user` in the Username field.
3. Enter `SECRET_SAUCE` in the Password field.
4. Click the Login button.
5. Observe the authentication result.

## Expected Result

The application rejects the invalid password and the user remains on the login page.

## Actual Result

The application rejected the login attempt and displayed the following error message:

`Epic sadface: Username and password do not match any user in this service`

## Test Execution Result

**Status:** PASS

**Reason:** The application rejected the invalid uppercase password as expected, user remains on the login page.

## Notes

The application did not authenticate the user when the password was entered in uppercase.

No defect was identified during this test execution.