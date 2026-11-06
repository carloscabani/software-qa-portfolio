# Equivalence Partitioning and Boundary Value Analysis

## 1. Introduction

Equivalence Partitioning (EP) and Boundary Value Analysis (BVA) are black-box software testing techniques used to design effective test cases.

These techniques help testers reduce the number of test cases while maintaining good test coverage.

- **Equivalence Partitioning (EP):** Divides input data into groups (equivalence classes) expected to behave similarly.
- **Boundary Value Analysis (BVA):** Focuses on testing values at, immediately below, and immediately above the boundaries of valid and invalid input ranges.

## 2. Equivalence Partitioning (EP)

### 2.1 Definition

Equivalence Partitioning divides input data into different classes. Each class represents values that are expected to produce the same type of system behavior.

Instead of testing every possible value, the tester selects representative values from each class.

### 2.2 Example: Username Length Validation

**Requirement:**

The system must accept usernames containing between 5 and 12 characters, inclusive.

| Equivalence Class | Input Range | Expected Result |
|---|---|---|
| EC-01 | Fewer than 5 characters | Rejected |
| EC-02 | Between 5 and 12 characters | Accepted |
| EC-03 | More than 12 characters | Rejected |

### 2.3 Representative Test Values

| Test Case ID | Selected Input | Expected Result |
|---|---|---|
| TC-EP-001 | 3 characters | Rejected |
| TC-EP-002 | 8 characters | Accepted |
| TC-EP-003 | 15 characters | Rejected |

**Why these values?**

Each value represents one equivalence class. Testing one representative from each class helps verify the expected behavior without testing every possible username length.

## 3. Boundary Value Analysis (BVA)

### 3.1 Definition

Boundary Value Analysis focuses on testing the limits of input ranges.

Errors frequently occur at boundaries because of incorrect comparison operators, such as using `>` instead of `>=`.

For a valid range, testers commonly select:

- The value immediately below the minimum.
- The minimum value.
- The value immediately above the minimum.
- The value immediately below the maximum.
- The maximum value.
- The value immediately above the maximum.

### 3.2 Example: Username Length Validation

**Requirement:**

The system must accept usernames containing between 5 and 12 characters, inclusive.

The valid boundaries are:

- Minimum: 5 characters.
- Maximum: 12 characters.

### 3.3 Boundary Test Values

| Test Case ID | Input Length | Boundary Position | Expected Result |
|---|---:|---|---|
| TC-BVA-001 | 4 | Below minimum | Rejected |
| TC-BVA-002 | 5 | Minimum boundary | Accepted |
| TC-BVA-003 | 6 | Above minimum | Accepted |
| TC-BVA-004 | 11 | Below maximum | Accepted |
| TC-BVA-005 | 12 | Maximum boundary | Accepted |
| TC-BVA-006 | 13 | Above maximum | Rejected |

### 3.4 Why Are These Values Important?

Testing only values inside the valid range may not reveal errors in the validation logic.

For example, if the application incorrectly accepts usernames with 4 characters, testing the minimum boundary and the value immediately below it can help detect that defect.

BVA concentrates on these critical points to improve test coverage.

## 4. EP vs. BVA Comparison

| Aspect | Equivalence Partitioning | Boundary Value Analysis |
|---|---|---|
| Main purpose | Divide inputs into equivalence classes | Test values around boundaries |
| Focus | Representative values | Minimum and maximum limits |
| Test selection | One or more values per class | Values below, at, and above boundaries |
| Main benefit | Reduces redundant test cases | Detects boundary-related defects |

### 4.1 Combined Approach

EP and BVA can be used together to improve test coverage.

For the username requirement (5–12 characters):

- EP identifies three classes: invalid below minimum, valid range, and invalid above maximum.
- BVA selects values around the minimum and maximum boundaries.
- Combining both techniques provides broader coverage with a manageable number of test cases.

## 5. Test Design vs. Test Execution

Test design defines the inputs and expected results before testing.

Test execution involves running those cases against the application and recording the actual results.

| Test Case ID | Input Length | Expected Result | Actual Result | Status |
|---|---:|---|---|---|
| TC-EP-001 | 3 | Rejected | Not executed | Not Run |
| TC-EP-002 | 8 | Accepted | Not executed | Not Run |
| TC-EP-003 | 15 | Rejected | Not executed | Not Run |
| TC-BVA-001 | 4 | Rejected | Not executed | Not Run |
| TC-BVA-002 | 5 | Accepted | Not executed | Not Run |
| TC-BVA-003 | 6 | Accepted | Not executed | Not Run |
| TC-BVA-004 | 11 | Accepted | Not executed | Not Run |
| TC-BVA-005 | 12 | Accepted | Not executed | Not Run |
| TC-BVA-006 | 13 | Rejected | Not executed | Not Run |

**Execution status definitions:**

- PASS: Actual result matches expected result.
- FAIL: Actual result does not match expected result.
- BLOCKED: Test execution cannot continue because of an external issue.
- NOT RUN: Test has not been executed.

## 6. Conclusion

Equivalence Partitioning and Boundary Value Analysis are complementary black-box testing techniques.

EP helps reduce the number of test cases by grouping similar inputs, while BVA focuses on values near critical limits.

Using both techniques improves test coverage and helps identify validation defects efficiently.

These techniques are fundamental skills for designing effective manual and automated tests.