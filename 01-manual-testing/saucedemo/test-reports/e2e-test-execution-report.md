# End-to-End Test Execution Report — Purchase Workflow

**Report ID:** E2E-REPORT-001  
**Application:** SauceDemo  
**Test Suite:** E2E-SUITE-001  
**Execution Type:** Manual End-to-End Testing  
**Status:** Completed

## 1. Objective

Verify that a customer can successfully complete the entire purchase workflow, from login to order confirmation.

## 2. Execution Results

| Test Case ID | Actual Result | Status |
|---|---|---|
| E2E-001 | Login was successful. Sauce Labs Backpack and Sauce Labs Bike Light were added. Both buttons changed to Remove and the cart badge displayed 2. | PASS |
| E2E-002 | Both products appeared in the cart with quantity 1, correct prices, and an available Checkout button. | PASS |
| E2E-003 | Checkout: Your Information loaded with First Name, Last Name, and Postal Code fields. The Continue button was enabled. | PASS |
| E2E-004 | After submitting customer information, the application redirected successfully to Checkout: Overview. | PASS |
| E2E-005 | Both products and order details were displayed. Subtotal was $39.98, tax was $3.20, and total was $43.18. | PASS |
| E2E-006 | Clicking Finish redirected to Checkout: Complete! and displayed the order confirmation message. | PASS |

## 3. Financial Validation

The order calculations were verified:

- Sauce Labs Backpack: $29.99
- Sauce Labs Bike Light: $9.99
- Item Total: $39.98
- Tax: $3.20
- Final Total: $43.18

**Calculation:**

$29.99 + $9.99 = $39.98

$39.98 + $3.20 = $43.18

The displayed calculation was mathematically correct.

## 4. Final Confirmation

After clicking Finish, the application displayed:

- Checkout: Complete!
- "Thank you for your order!"
- Order dispatch notification.
- Back Home button.
- Download PDF Order button.

The two buttons were observed as visible and enabled, but were not independently tested.

## 5. Execution Summary

| Metric | Result |
|---|---:|
| Total Test Cases | 6 |
| Executed | 6 |
| Passed | 6 |
| Failed | 0 |
| Blocked | 0 |
| Not Executed | 0 |
| Execution Completion | 100% |
| Pass Rate | 100% |

## 6. Defect Summary

No unexpected behavior or confirmed defects were reported during this execution.

## 7. Conclusion

All six End-to-End test cases passed successfully. The complete purchase workflow was executed from authentication to order confirmation.

The application correctly handled product selection, shopping cart verification, customer information submission, order calculation, and purchase completion.

The results demonstrate that the tested purchase journey worked as expected during this manual execution.

## 8. Limitations

- Manual execution only.
- No automated testing.
- No screenshots or video evidence.
- Browser and operating system were not recorded.
- PDF order download and Back Home navigation were not independently validated.