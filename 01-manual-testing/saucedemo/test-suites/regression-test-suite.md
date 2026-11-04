# Regression Test Suite — Shopping Cart

**Suite ID:** REG-SUITE-001  
**Application:** SauceDemo  
**Module:** Shopping Cart  
**Test Type:** Regression Testing  
**Status:** Completed  
**Execution Result:** 5/5 PASS

## 1. Objective

Verify that existing shopping cart functionalities continue to work correctly after performing operations that may affect related application components.

## 2. Test Environment

- Application: https://www.saucedemo.com/
- User: `standard_user`
- Testing approach: Manual testing
- Environment details: Browser and OS not recorded.

## 3. Test Cases

| Test Case ID | Test Description | Expected Result |
|---|---|---|
| REG-001 | Add multiple products | Each product is added successfully and the cart badge updates correctly. |
| REG-002 | Remove one product | Only the selected product is removed; the remaining products stay in the cart. |
| REG-003 | Navigate between Products and Cart | Previously added products remain in the cart after navigation. |
| REG-004 | Refresh the Cart page | Products and cart information remain consistent after refreshing. |
| REG-005 | Remove all products | All products are removed and the cart becomes empty. |

## 4. Test Execution Summary

| Metric | Result |
|---|---:|
| Total Test Cases | 5 |
| Executed | 5 |
| Passed | 5 |
| Failed | 0 |
| Blocked | 0 |
| Not Executed | 0 |

## 5. Scope Limitations

- Testing was performed manually.
- No automated regression tests were executed.
- No screenshots or video evidence were collected.
- No new application build or code change was supplied for this exercise.
- Testing was limited to shopping cart functionality.

**Note:** This suite was executed as a regression testing practice exercise. It does not represent validation following a confirmed software release or code modification.