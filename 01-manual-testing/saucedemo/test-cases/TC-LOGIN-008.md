# TC-LOGIN-008 — Verify Direct Access to Inventory Without Authentication

## Test Case Information

| Field | Value |
|---|---|
| Test Case ID | TC-LOGIN-008 |
| Module | Login / Access Control |
| Test Type | Functional / Negative |
| Priority | High |
| Status | PASS |
| Application | SauceDemo |
| Browser | Google Chrome (Incognito) |
| Bug ID | N/A |
| Evidence | Not attached |

## Preconditions

- The SauceDemo application is accessible.
- The user has not logged in.
- A new incognito browser window is opened to avoid using an existing authenticated session.

## Test Data

| Field | Value |
|---|---|
| Target URL | `https://www.saucedemo.com/inventory.html` |
| Authentication State | Unauthenticated |

## Test Steps

1. Open Google Chrome.
2. Open a new incognito window using `Ctrl + Shift + N`.
3. Do not log in to SauceDemo.
4. Navigate directly to `https://www.saucedemo.com/inventory.html`.
5. Observe whether the inventory page is accessible.
6. Record the resulting page and any error message displayed.

## Expected Result

The application prevents unauthenticated users from accessing the inventory page and redirects them to the login page or displays an appropriate access-denied message.

## Actual Result

The application denied access to the inventory page and redirected the unauthenticated user to the login page.

The following error message was displayed:

`Epic sadface: You can only access '/inventory.html' when you are logged in.`

## Test Execution Result

**Status:** PASS

**Reason:** The application restricted direct access to the inventory page when the user was not authenticated.

## Notes

- The test was performed in a new Google Chrome incognito window.
- The user did not authenticate before accessing the inventory URL.
- The application redirected the user to the login page.
- The observed behavior matched the expected access restriction.
- No defect was identified during this test execution.