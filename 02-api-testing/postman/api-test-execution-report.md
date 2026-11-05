# API Test Execution Report

## 1. Project Information

| Field | Details |
|---|---|
| Project | JSONPlaceholder API Testing |
| Testing Type | REST API Testing |
| Tool | Postman |
| API | JSONPlaceholder |
| Base URL | https://jsonplaceholder.typicode.com |
| Execution Date | November 5, 2026 |
| Test Execution Type | Automated |
| Environment | None |
| Iterations | 1 |

## 2. Test Objective

The objective of this testing activity was to validate the main REST API operations using Postman and automate response validations with JavaScript test scripts.

The tests covered HTTP status codes, response structures, required fields, data types, and expected response values.

## 3. Test Scope

The following HTTP methods and operations were tested:

- GET: Retrieve all posts.
- GET: Retrieve a single post.
- GET: Filter posts by user ID.
- POST: Create a new post.
- PUT: Update an existing post.
- GET: Verify the response after PUT.
- PATCH: Partially update an existing post.
- DELETE: Delete an existing post.
- GET: Verify the response after DELETE.

## 4. Test Execution Summary

| Metric | Result |
|---|---:|
| Total Requests Executed | 9 |
| Total Automated Assertions | 41 |
| Passed Assertions | 41 |
| Failed Assertions | 0 |
| Skipped Assertions | 0 |
| Errors | 0 |
| Execution Duration | 3.792 seconds |
| Average Response Time | 175 ms |
| Iterations | 1 |

**Overall Result: PASS**

All 41 automated assertions passed successfully.

## 5. Detailed Test Results

| Request | HTTP Method | Assertions | Result |
|---|---|---:|---|
| Get All Posts | GET | 5 | PASS |
| Get Single Post | GET | 5 | PASS |
| Get Posts By User ID | GET | 5 | PASS |
| Create New Post | POST | 5 | PASS |
| Update Existing Post | PUT | 5 | PASS |
| Verify Post After PUT | GET | 4 | PASS |
| Partially Update Post | PATCH | 5 | PASS |
| Delete Existing Post | DELETE | 3 | PASS |
| Verify Post After DELETE | GET | 4 | PASS |
| **Total** | | **41** | **PASS** |

## 6. Key Validations Performed

The automated test scripts validated:

- Expected HTTP status codes (200 and 201).
- Response structure and JSON data types.
- Required response properties.
- Correct post IDs and user IDs.
- Submitted data returned after POST.
- Updated fields returned after PUT and PATCH.
- Empty JSON response after DELETE.
- Original post data returned after the simulated DELETE operation.

## 7. Observations and Limitations

During testing, JSONPlaceholder demonstrated that write operations are simulated and are not permanently persisted.

The following behavior was observed:

- POST returned a simulated created resource with ID 101.
- PUT and PATCH returned updated response data, but subsequent GET requests returned the original resource.
- DELETE returned HTTP 200 with an empty JSON object.
- A subsequent GET request still returned the original post.

This behavior is an expected limitation of JSONPlaceholder and does not represent a confirmed application defect.

## 8. Conclusion

The API testing activity was completed successfully.

All 9 requests were executed through Postman's Collection Runner, and all 41 automated assertions passed with zero failures and zero execution errors.

This exercise provided practical experience with REST API testing, HTTP methods, JSON response validation, JavaScript test scripts, and automated test execution using Postman.

## 9. Test Artifacts

- `api-test-cases.md`
- `collections/JSONPlaceholder_API_Testing.json`
- `api-test-execution-report.md`

