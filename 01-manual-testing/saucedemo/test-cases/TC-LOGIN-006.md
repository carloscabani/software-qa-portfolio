# TC-LOGIN-006 — Verify Login with an Empty Password

## Test Case Information

| Field | Value |
|---|---|
| Test Case ID | TC-LOGIN-006 |
| Module | Login |
| Test Type | Functional / Negative / Required Field Validation |
| Priority | High |
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
| Password | Empty |

## Test Steps

1. Navigate to https://www.saucedemo.com/.
2. Enter `standard_user` in the Username field.
3. Leave the Password field empty.
4. Click the Login button.
5. Observe the authentication result and any validation messages.

## Expected Result

The application rejects the login attempt, keeps the user on the login page, and displays an appropriate validation message indicating that the Password field is required.

## Actual Result

The application rejected the login attempt and kept the user on the login page.

The following validation message was displayed:

`Epic sadface: Password is required`

## Test Execution Result

**Status:** PASS

**Reason:** The application prevented authentication when the required Password field was empty and displayed the expected validation message.

## Notes

- The Username field contained a valid demo username.
- The Password field was intentionally left empty.
- The application displayed a field-specific validation message.
- No defect was identified during this test execution.