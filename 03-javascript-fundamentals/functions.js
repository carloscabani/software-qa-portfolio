// Functions with parameters - QA testing

function validateStatusCode(expectedStatus, actualStatus) {

    if (actualStatus === expectedStatus) {
        console.log("PASS: Expected status", expectedStatus);
    } else {
        console.log("FAIL: Expected", expectedStatus,
                    "but received", actualStatus);
    }

}

// Execute the function with different values

validateStatusCode(200, 200);
validateStatusCode(200, 404);
validateStatusCode(201, 201);
validateStatusCode(200, 500);