# Shopping Cart — Test Suite

## Suite Information

| Field | Value |
|---|---|
| Test Suite ID | TSU-CART-001 |
| Application | SauceDemo |
| Module | Shopping Cart |
| Testing Type | Manual Functional Testing |
| Total Test Cases | 5 |
| Executed | 4 |
| Passed | 4 |
| Failed | 0 |
| Blocked | 0 |
| Not Executed | 1 |
| Suite Status | PARTIALLY EXECUTED |

## Objective

Validate the shopping cart's core functionality, including product addition, product removal, item count consistency, state persistence during navigation, and empty cart behavior.

## Test Cases

| Test Case ID | Description | Priority | Status |
|---|---|---|---|
| TC-CART-001 | Verify adding a single product to the cart | High | PASS |
| TC-CART-002 | Verify removing the first of four added products | High | PASS |
| TC-CART-003 | Verify single-unit product selection through the interface | Medium | NOT EXECUTED |
| TC-CART-004 | Verify cart contents persist during navigation | High | PASS |
| TC-CART-005 | Verify the cart becomes empty after removing all products | High | PASS |

## Test Case References

- [TC-CART-001 — Add Single Product](../test-cases/TC-CART-001.md)
- [TC-CART-002 — Remove First Product](../test-cases/TC-CART-002.md)
- [TC-CART-003 — Single-Unit Selection](../test-cases/TC-CART-003.md)
- [TC-CART-004 — Cart Persistence](../test-cases/TC-CART-004.md)
- [TC-CART-005 — Empty Cart](../test-cases/TC-CART-005.md)

## Execution Summary

**Execution Completion:** 80% (4 of 5 cases)

**Pass Rate:** 100% (4 of 4 executed cases)

**Reported Defects:** 0

The executed test cases met their expected results based on the tester's reported manual observations.

TC-CART-003 remains NOT EXECUTED because only preliminary exploratory observations were recorded.

## Known Limitations

- The suite does not provide comprehensive shopping cart coverage.
- No automated tests were executed.
- No screenshots or video evidence were attached.
- Browser and execution dates were not recorded.
- Official quantity-related business requirements have not been confirmed.
- Checkout behavior was not validated.

## Suite Conclusion

The four executed shopping cart test cases passed.

The suite remains PARTIALLY EXECUTED until TC-CART-003 is formally executed or its disposition is explicitly documented.

See the [Shopping Cart Execution Report](../test-reports/shopping-cart-execution-report.md) for detailed execution metrics and limitations.