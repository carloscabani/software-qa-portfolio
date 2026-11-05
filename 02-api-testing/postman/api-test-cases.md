# API-GET-001 — Retrieve All Posts

**Objective:** Verify that the API successfully retrieves all available posts.

**Request Details**
- Method: GET
- Endpoint: `https://jsonplaceholder.typicode.com/posts`
- Authentication: No Auth

**Preconditions**
- Postman is installed and running.
- The API endpoint is accessible.

**Test Steps**
1. Open Postman.
2. Select the GET method.
3. Enter the endpoint URL.
4. Select No Auth.
5. Click Send.
6. Inspect the response status, body, record count, and response time.

**Expected Results**
- The API returns HTTP status code 200 OK.
- The response body contains valid JSON.
- The response contains an array of posts.
- Each post includes `userId`, `id`, `title`, and `body`.

**Actual Results**
- HTTP status: 200 OK.
- Response format: JSON.
- Records returned: 100.
- Response time: 419 ms.
- The inspected post contained all four expected fields.

**Status:** PASS


## API-GET-002 — Retrieve a Single Post

**Objective:** Verify that the API retrieves a specific post using its ID.

**Request Details**
- Method: GET
- Endpoint: `https://jsonplaceholder.typicode.com/posts/1`
- Authentication: No Auth

**Preconditions**
- Postman is installed and running.
- The API endpoint is accessible.

**Test Steps**
1. Open Postman.
2. Select the GET method.
3. Enter the endpoint URL.
4. Select No Auth.
5. Click Send.
6. Inspect the response status and body.

**Expected Results**
- The API returns HTTP status code 200 OK.
- The response contains a single JSON object.
- The `id` field equals 1.
- The response includes `userId`, `title`, and `body`.

**Actual Results**
- HTTP status: 200 OK.
- Response format: JSON.
- One JSON object was returned.
- The `id` field equals 1.
- All expected fields were present.

**Status:** PASS

## API-GET-003 — Filter Posts by User

**Objective:** Verify that the API correctly filters posts by user ID.

**Request Details**
- Method: GET
- Endpoint: `https://jsonplaceholder.typicode.com/posts?userId=1`
- Authentication: No Auth
- Query Parameter: `userId=1`

**Preconditions**
- Postman is installed and running.
- The API endpoint is accessible.

**Test Steps**
1. Open Postman.
2. Select the GET method.
3. Enter the endpoint URL with the query parameter.
4. Select No Auth.
5. Click Send.
6. Inspect the response status and returned records.
7. Verify that all returned posts have `userId` equal to 1.

**Expected Results**
- The API returns HTTP status code 200 OK.
- The response contains a JSON array.
- The API returns 10 posts.
- Every returned post has `userId` equal to 1.

**Actual Results**
- HTTP status: 200 OK.
- 10 records were returned.
- The inspected records had `userId` equal to 1.

**Status:** PASS

## API-GET-004 — Request an Invalid Endpoint

**Objective:** Verify that the API returns an appropriate HTTP error status when requesting a nonexistent endpoint.

**Request Details**
- Method: GET
- Endpoint: `https://jsonplaceholder.typicode.com/invalidEndpoint`
- Authentication: No Auth

**Preconditions**
- Postman is installed and running.
- The API server is accessible.

**Test Steps**
1. Open Postman.
2. Select the GET method.
3. Enter an invalid endpoint URL.
4. Select No Auth.
5. Click Send.
6. Inspect the response status code and body.

**Expected Results**
- The API returns HTTP status code 404 Not Found.
- The response body is an empty JSON object (`{}`).

**Actual Results**
- HTTP status: 404 Not Found.
- Response body: `{}`.
- The requested endpoint was not found.

**Status:** PASS

## API-GET-005 — Request a Nonexistent Post

**Objective:** Verify that the API returns an appropriate HTTP error status when requesting a post with a nonexistent ID.

**Request Details**
- Method: GET
- Endpoint: `https://jsonplaceholder.typicode.com/posts/9999`
- Authentication: No Auth

**Preconditions**
- Postman is installed and running.
- The API endpoint is accessible.

**Test Steps**
1. Open Postman.
2. Select the GET method.
3. Enter the endpoint URL with a nonexistent post ID.
4. Select No Auth.
5. Click Send.
6. Inspect the response status code and body.

**Expected Results**
- The API returns HTTP status code 404 Not Found.
- The response body is an empty JSON object (`{}`).

**Actual Results**
- HTTP status: 404 Not Found.
- Response body: `{}`.
- The requested post was not found.

**Status:** PASS

## API-GET-006 — Verify Post Data After PUT Request

**Objective:** Verify whether the updated post data persists after a PUT request.

**Request Details**
- Method: GET
- Endpoint: `https://jsonplaceholder.typicode.com/posts/1`
- Authentication: No Auth

**Test Steps**
1. Execute a PUT request to update post 1.
2. Send a GET request to retrieve post 1.
3. Inspect the returned title and body.
4. Compare the retrieved data with the submitted PUT request.

**Expected Results**
- In a persistent API, the updated properties should be returned when retrieving the resource again.

**Actual Results**
- HTTP status: 200 OK.
- The original title was returned.
- The original body was returned.
- The submitted changes were not persisted.

**Status:** EXPECTED SIMULATED BEHAVIOR — JSONPlaceholder does not permanently persist write operations.

**Note:** This is a practice API limitation, not a confirmed application defect.


## API-POST-001 — Create a New Post

**Objective:** Verify that the API successfully creates a new post using a POST request.

**Request Details**
- Method: POST
- Endpoint: `https://jsonplaceholder.typicode.com/posts`
- Authentication: No Auth
- Body Type: JSON

**Request Body**
```json
{
    "title": "My First API Test",
    "body": "This is my first POST request using Postman.",
    "userId": 1
}
```

**Preconditions**
- Postman is installed and running.
- The API endpoint is accessible.
- The request body contains valid JSON data.

**Test Steps**
1. Open Postman.
2. Select the POST method.
3. Enter the endpoint URL.
4. Open the Body tab.
5. Select raw and JSON.
6. Enter the request body.
7. Click Send.
8. Inspect the response status and body.

**Expected Results**
- The API returns HTTP status code 201 Created.
- The response contains a JSON object.
- The response includes the submitted title, body, and userId.
- The API returns a generated ID.

**Actual Results**
- HTTP status: 201 Created.
- The response contained the submitted values.
- A new ID (101) was returned.

**Status:** PASS

**Note:** JSONPlaceholder simulates resource creation. The new post is not permanently persisted.

## API-POST-002 — Create a Post with Missing Body Field

**Objective:** Observe how the API handles a POST request with an omitted body field.

**Request Details**
- Method: POST
- Endpoint: `https://jsonplaceholder.typicode.com/posts`
- Authentication: No Auth
- Body Type: JSON

**Request Body**
```json
{
    "title": "Incomplete API Test",
    "userId": 1
}
```

**Preconditions**
- Postman is installed and running.
- The API endpoint is accessible.

**Test Steps**
1. Open Postman.
2. Select the POST method.
3. Enter the endpoint URL.
4. Select Body → raw → JSON.
5. Enter the request body without the `body` property.
6. Click Send.
7. Inspect the response status and body.

**Expected Results**
- Observe whether the API accepts or rejects the request with a missing field.
- Check whether the response contains the submitted properties.

**Actual Results**
- HTTP status: 201 Created.
- The response contained `title`, `userId`, and a generated `id`.
- The `body` property was absent.
- The API accepted the incomplete request.

**Status:** OBSERVATION — No defect confirmed.

**Note:** This test evaluates the API's observed behavior. A formal pass/fail verdict requires defined field validation requirements.

## API-PUT-001 — Update an Existing Post

**Objective:** Verify the API's response when updating an existing post using PUT.

**Request Details**
- Method: PUT
- Endpoint: `https://jsonplaceholder.typicode.com/posts/1`
- Authentication: No Auth
- Body Type: JSON

**Request Body**
```json
{
    "id": 1,
    "title": "Updated API Test",
    "body": "This post was updated using a PUT request.",
    "userId": 1
}
```

**Test Steps**
1. Open Postman.
2. Select the PUT method.
3. Enter the endpoint URL.
4. Select Body → raw → JSON.
5. Enter the updated post data.
6. Click Send.
7. Inspect the response status and body.

**Expected Results**
- The API returns HTTP status code 200 OK.
- The response acknowledges the requested resource update.

**Actual Results**
- HTTP status: 200 OK.
- The response contained only the `id` field with value 1.
- The updated properties were not included in the response.

**Status:** OBSERVATION — Response requires further analysis.

**Note:** JSONPlaceholder simulates update operations without permanently persisting changes.

## API-PATCH-001 — Partially Update an Existing Post

**Objective:** Observe the API response when updating only one property of an existing post using PATCH.

**Request Details**
- Method: PATCH
- Endpoint: `https://jsonplaceholder.typicode.com/posts/1`
- Authentication: No Auth
- Body Type: JSON

**Request Body**
```json
{
    "title": "Updated Title Using PATCH"
}
```

**Test Steps**
1. Open Postman.
2. Select the PATCH method.
3. Enter the endpoint URL.
4. Select Body → raw → JSON.
5. Enter only the title property.
6. Click Send.
7. Inspect the response status and body.

**Expected Results**
- The API returns HTTP status code 200 OK.
- The response reflects the requested title modification.
- Other properties remain unchanged.

**Actual Results**
- HTTP status: 200 OK.
- The response contained the original title.
- The original body and userId were also returned.
- The requested title was not reflected in the response.

**Status:** OBSERVATION — Expected modification not reflected.

**Note:** JSONPlaceholder simulates write operations and does not permanently persist changes. This result does not confirm a real application defect.

## API-DELETE-001 — Delete an Existing Post

**Objective:** Verify the API response when requesting the deletion of an existing post.

**Request Details**
- Method: DELETE
- Endpoint: `https://jsonplaceholder.typicode.com/posts/1`
- Authentication: No Auth

**Preconditions**
- Postman is installed and running.
- The API endpoint is accessible.

**Test Steps**
1. Open Postman.
2. Select the DELETE method.
3. Enter the endpoint URL with an existing post ID.
4. Select No Auth.
5. Click Send.
6. Inspect the response status and body.

**Expected Results**
- The API returns HTTP status code 200 OK.
- The response body is empty.

**Actual Results**
- HTTP status: 200 OK.
- Response body: Empty.
- The API accepted the deletion request.

**Status:** PASS — API response behavior verified.

**Note:** JSONPlaceholder simulates deletion operations. The resource is not permanently removed from the database.