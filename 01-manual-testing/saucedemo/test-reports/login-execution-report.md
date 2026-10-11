# SauceDemo — Login Test Execution Report

## 1. General Information

**Project:** SauceDemo Manual Testing  
**Module:** Login / Access Control  
**Test Suite:** TS-LOGIN-001  
**Application:** https://www.saucedemo.com/  
**Testing Type:** Manual Functional Testing  
**Browser:** Google Chrome  
**Report Status:** Partial Execution — One Test Pending

## 2. Execution Summary

A total of eight test cases were included in the Login Test Suite.

Seven test cases were formally executed. All seven passed, and no defects were identified during these executions.

One test case, TC-LOGIN-001, remains not formally executed.

## 3. Test Execution Metrics

| Metric | Result |
|---|---|
| Total Test Cases | 8 |
| Executed Test Cases | 7 |
| Passed | 7 |
| Failed | 0 |
| Blocked | 0 |
| Not Executed | 1 |
| Execution Pass Rate | 100% |
| Execution Completion | 87.5% |

## 4. Detailed Results

| Test Case ID | Scenario | Actual Outcome | Status |
|---|---|---|---|
| TC-LOGIN-001 | Valid credentials | Not formally recorded | NOT EXECUTED |
| TC-LOGIN-002 | Whitespace in username | Authentication rejected | PASS |
| TC-LOGIN-003 | Uppercase password | Authentication rejected | PASS |
| TC-LOGIN-004 | Numeric and special characters in password | Authentication rejected | PASS |
| TC-LOGIN-005 | Empty username | Username required validation displayed | PASS |
| TC-LOGIN-006 | Empty password | Password required validation displayed | PASS |
| TC-LOGIN-007 | Locked-out user | Access denied with account-locked message | PASS |
| TC-LOGIN-008 | Direct inventory access without authentication | Access denied and user redirected to Login | PASS |

## 5. Defect Summary

| Severity | Defects Identified |
|---|---|
| Critical | 0 |
| High | 0 |
| Medium | 0 |
| Low | 0 |
| Total | 0 |

No defects were identified in the executed test cases.

This does not imply that the application is free of defects.

## 6. Key Findings

- Invalid credentials were rejected in the tested scenarios.
- Required Username and Password fields were validated.
- The locked-out demo account could not authenticate.
- Unauthenticated direct access to the inventory page was restricted.
- The successful login scenario remains pending formal execution.

## 7. Limitations

- Testing was limited to selected Login and Access Control scenarios.
- No automated testing was performed.
- No performance or penetration testing was performed.
- No cross-browser compatibility testing was performed.
- Screenshots and execution timestamps were not recorded.
- The successful login test case was not formally executed.

## 8. Conclusion

Seven of eight planned test cases were executed successfully, resulting in a 100% pass rate among executed tests.

The Login Test Suite remains partially executed. Formal execution of TC-LOGIN-001 is recommended before declaring the suite complete.