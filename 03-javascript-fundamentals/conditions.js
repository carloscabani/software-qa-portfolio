let expectedStatusCode = 200;
let actualStatusCode = 201;

if (actualStatusCode === expectedStatusCode) {
    console.log("PASS: Status code is correct");
} else {
    console.log("FAIL: Status code is incorrect");
}

// Multiple conditions

let responseStatus = 404;

if (responseStatus === 200) {
    console.log("PASS: Request successful");
} else if (responseStatus === 404) {
    console.log("FAIL: Resource not found");
} else if (responseStatus === 500) {
    console.log("FAIL: Internal server error");
} else {
    console.log("FAIL: Unexpected status code");
}