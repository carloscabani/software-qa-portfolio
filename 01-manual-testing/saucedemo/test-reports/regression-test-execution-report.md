# Regression Test Execution Report — Shopping Cart

**Report ID:** REG-REPORT-001  
**Application:** SauceDemo  
**Module:** Shopping Cart  
**Test Suite:** REG-SUITE-001  
**Execution Type:** Manual Regression Testing  
**Status:** Completed

## 1. Objective

Evaluate whether the shopping cart's existing functionalities continue to behave as expected after adding, removing, and navigating between products and cart pages.

## 2. Execution Results

| Test Case ID | Test Description | Actual Result | Status |
|---|---|---|---|
| REG-001 | Add multiple products | Three products were added successfully. The cart badge displayed 3, and all buttons changed to Remove. | PASS |
| REG-002 | Remove one product | The selected product was removed, the badge decreased from 3 to 2, and the other products remained selected. | PASS |
| REG-003 | Navigate between Products and Cart | Both products remained in the cart after navigating between pages. The badge remained at 2. | PASS |
| REG-004 | Refresh the Cart page | Both products remained displayed after refreshing. Names, quantities, prices, and badge value remained unchanged. | PASS |
| REG-005 | Remove all products | Both products were removed successfully. The badge disappeared and the cart became empty. | PASS |

## 3. Execution Summary

| Metric | Result |
|---|---:|
| Total Test Cases | 5 |
| Executed | 5 |
| Passed | 5 |
| Failed | 0 |
| Blocked | 0 |
| Not Executed | 0 |
| Execution Completion | 100% |
| Pass Rate | 100% |

## 4. Defect Summary

No unexpected behavior or confirmed defects were reported during this execution.

## 5. Conclusion

All five regression test cases passed successfully. The shopping cart maintained consistent behavior during product addition, product removal, page navigation, page refresh, and complete cart cleanup.

The tested shopping cart functionalities behaved as expected throughout the execution.

## 6. Limitations

This was a manual regression testing practice exercise using the existing SauceDemo application. No new build, deployment, or confirmed code modification was available for validation.

The results are limited to the scenarios included in this test suite and do not establish that the entire application is defect-free.