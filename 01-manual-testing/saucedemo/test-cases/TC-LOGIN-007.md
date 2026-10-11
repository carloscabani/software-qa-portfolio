# TC-LOGIN-007 — Verify Login with a Locked-out User

## Test Case Information

| Field | Value |
|---|---|
| Test Case ID | TC-LOGIN-007 |
| Module | Login |
| Test Type | Functional / Negative / Account State |
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
- The `locked_out_user` account is configured as locked.

## Test Data

| Field | Value |
|---|---|
| Username | `locked_out_user` |
| Password | `secret_sauce` |

## Test Steps

1. Navigate to https://www.saucedemo.com/.
2. Enter `locked_out_user` in the Username field.
3. Enter `secret_sauce` in the Password field.
4. Click the Login button.
5. Verify whether access to the Products page is granted.
6. Observe and record any error message displayed.

## Expected Result

The application denies access to the locked-out user, keeps the user on the login page, and displays an appropriate account-locked error message.

## Actual Result

The application denied the login attempt. The user remained on the login page, and the following error message was displayed:

`Epic sadface: Sorry, this user has been locked out.`

## Test Execution Result

**Status:** PASS

**Reason:** The application correctly denied access to the locked-out account and displayed the expected account-locked error message.

## Notes

- The test used the demo credentials associated with a locked-out account.
- Authentication was rejected despite using the configured demo password.
- The application displayed an error message specifically identifying the locked-out account state.
- No defect was identified during this test execution.