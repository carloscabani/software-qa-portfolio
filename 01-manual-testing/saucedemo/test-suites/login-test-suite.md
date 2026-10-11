# SauceDemo — Login Test Suite

## 1. Overview

**Application:** SauceDemo  
**URL:** https://www.saucedemo.com/  
**Module:** Login / Access Control  
**Test Suite ID:** TS-LOGIN-001  
**Testing Approach:** Manual Testing  
**Environment:** Web Application  
**Browser:** Google Chrome (for recorded executions)

## 2. Objective

Validate the login functionality by verifying successful authentication requirements, invalid credential handling, required field validation, locked-out account behavior, and access restrictions for unauthenticated users.

## 3. Test Cases

| Test Case ID | Test Case Title | Test Type | Status |
|---|---|---|---|
| TC-LOGIN-001 | Verify Login with Valid Credentials | Positive | NOT EXECUTED |
| TC-LOGIN-002 | Verify Login with Whitespace Inside the Username | Negative | PASS |
| TC-LOGIN-003 | Verify Login with an Uppercase Password | Negative | PASS |
| TC-LOGIN-004 | Verify Login with Numeric and Special Characters in the Password | Negative | PASS |
| TC-LOGIN-005 | Verify Login with an Empty Username | Required Field Validation | PASS |
| TC-LOGIN-006 | Verify Login with an Empty Password | Required Field Validation | PASS |
| TC-LOGIN-007 | Verify Login with a Locked-out User | Account State | PASS |
| TC-LOGIN-008 | Verify Direct Access to Inventory Without Authentication | Access Control | PASS |

## 4. Test Coverage

This suite covers:

- Invalid username handling.
- Invalid password handling.
- Required field validation.
- Locked-out account restrictions.
- Unauthenticated access to the inventory page.

Successful authentication is included as a planned test case but has not been formally executed.

## 5. Execution Summary

| Metric | Count |
|---|---|
| Total Test Cases | 8 |
| Executed | 7 |
| Passed | 7 |
| Failed | 0 |
| Blocked | 0 |
| Not Executed | 1 |

**Execution Pass Rate:** 100% (7 passed / 7 executed)

**Overall Execution Completion:** 87.5% (7 executed / 8 planned)

## 6. Observations

- All seven formally executed test cases passed.
- Required field validations displayed appropriate error messages.
- The locked-out demo account was denied authentication.
- Direct access to the inventory page was restricted for an unauthenticated user.
- No defects were identified in the executed scenarios.

## 7. Remaining Work

- Formally execute TC-LOGIN-001.
- Record additional execution environment details where applicable.
- Consider further session management and logout scenarios in future testing.

## 8. Conclusion

The executed login and access-control scenarios behaved as expected.

The test suite is not yet fully executed because TC-LOGIN-001 remains pending. The results do not establish complete coverage of the application's authentication or security behavior.