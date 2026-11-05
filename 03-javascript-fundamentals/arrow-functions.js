// Arrow Functions - QA Testing

const validateLogin = (username, expectedUsername) => {

    if (username === expectedUsername) {
        console.log("PASS: Username is correct");
    } else {
        console.log("FAIL: Username is incorrect");
    }

};

validateLogin("standard_user", "standard_user");
validateLogin("locked_out_user", "standard_user");

// Callback example

function executeTest(callback) {
    console.log("Starting QA test...");

    callback();

    console.log("QA test completed.");
}

function loginTest() {
    console.log("Testing user login...");
}

executeTest(loginTest);

// QA test execution using callbacks

const testCases = [
    "TC-LOGIN-001",
    "TC-LOGIN-002",
    "TC-CART-001"
];

testCases.forEach((testCase) => {
    console.log("Executing test:", testCase);
});

function executeTestCase(testCase, callback) {
    console.log("Executing test case:", testCase);

    callback();
    console.log("Test case completed:", testCase);
}

