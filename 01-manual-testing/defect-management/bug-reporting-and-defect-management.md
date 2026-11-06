# Bug Reporting and Defect Management

## 1. Introduction

Bug reporting is the process of documenting unexpected software behavior so developers can understand, reproduce, investigate, and fix defects.

A good bug report must be clear, concise, reproducible, and supported by evidence.

## 2. Bug Report Structure

A professional bug report should include:

| Field | Description |
|---|---|
| Bug ID | Unique defect identifier |
| Title | Short description of the defect |
| Environment | Browser, OS, device, application version |
| Preconditions | Conditions required before testing |
| Steps to Reproduce | Exact steps to reproduce the defect |
| Expected Result | What should happen |
| Actual Result | What actually happens |
| Severity | Impact of the defect |
| Priority | Urgency of fixing the defect |
| Status | Current defect lifecycle stage |
| Evidence | Screenshots, videos, logs |

## 3. Severity vs. Priority

### 3.1 Severity

Severity measures the technical impact of a defect on the application.

- **Critical:** System crash, data loss, or major functionality unavailable.
- **High:** Important functionality is broken.
- **Medium:** Functionality is affected, but a workaround exists.
- **Low:** Minor visual or usability issue.

### 3.2 Priority

Priority indicates how urgently a defect should be fixed.

- **P0 - Immediate:** Must be fixed immediately.
- **P1 - High:** Should be fixed as soon as possible.
- **P2 - Medium:** Should be addressed in a planned release.
- **P3 - Low:** Can be addressed when resources are available.

Severity and priority are related, but they are not the same.

## 4. Defect Lifecycle

A typical defect lifecycle includes:

1. New: Defect reported.
2. Assigned: Defect assigned to a developer.
3. Open: Developer investigates the issue.
4. Fixed: Developer implements a correction.
5. Retest: QA verifies the correction.
6. Closed: QA confirms the defect is resolved.
7. Reopened: Defect still occurs after the fix.

Other statuses may exist depending on the team's workflow, such as Rejected, Duplicate, or Deferred.

## 5. Example Bug Report

**Important:** This is a hypothetical training example, not a confirmed defect in SauceDemo.

| Field | Value |
|---|---|
| Bug ID | BUG-001 |
| Title | Shopping cart badge displays an incorrect item count after removing a product |
| Environment | Chrome / Windows 11 |
| Preconditions | User is logged in and has multiple products in the cart |
| Steps to Reproduce | 1. Log in. 2. Add multiple products. 3. Open the cart. 4. Remove one product. |
| Expected Result | Cart badge decreases by one and matches the remaining products. |
| Actual Result | Cart badge displays an incorrect item count. |
| Severity | Medium |
| Priority | P2 - Medium |
| Status | New |
| Evidence | Screenshot or video should be attached if reproduced. |

## 6. Retesting and Regression Testing

**Retesting** verifies that a specific defect has been fixed.

**Regression Testing** verifies that the correction has not negatively affected existing functionality.

Example:

- Retesting: Verify that removing a product updates the cart badge correctly.
- Regression: Verify that adding products, removing products, cart persistence, and checkout still work.

## 7. Best Practices

- Use clear and descriptive titles.
- Include exact reproduction steps.
- Describe expected and actual results separately.
- Never confuse severity with priority.
- Attach evidence whenever possible.
- Avoid reporting assumptions as confirmed defects.
- Retest fixes and perform regression testing when appropriate.

## 8. Conclusion

Effective bug reporting improves communication between QA and development teams.

A structured defect lifecycle helps teams track issues from discovery to resolution while ensuring that fixes are properly verified.