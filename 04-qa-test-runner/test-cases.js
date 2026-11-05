// QA Test Runner - Test Cases

// Test execution counters

let passedTests = 0;
let failedTests = 0;

const testCases = [

    {
        id: "TC-001",
        description: "Validate HTTP 200 status code",
        expectedStatus: 200,
        actualStatus: 200
    },

    {
        id: "TC-002",
        description: "Validate HTTP 404 status code",
        expectedStatus: 404,
        actualStatus: 404
    },

    {
        id: "TC-003",
        description: "Validate HTTP 500 status code",
        expectedStatus: 500,
        actualStatus: 500
    }

];


// Function to validate test cases

function validateTest(testCase) {

    if (testCase.expectedStatus === testCase.actualStatus) {

        return "PASS";

    } else {

        return "FAIL";

    }

}

// Execute test validation

testCases.forEach((testCase) => {

    const result = validateTest(testCase);

    if (result === "PASS") {
        passedTests++;
    } else {
        failedTests++;
    }

    console.log(testCase.id, "-", testCase.description, "-", result);

});


// Generate execution report

const totalTests = testCases.length;

const successRate = (passedTests / totalTests) * 100;

console.log("\n===== QA TEST EXECUTION REPORT =====");

console.log("Total tests:", totalTests);
console.log("Passed:", passedTests);
console.log("Failed:", failedTests);
console.log("Success rate:", successRate.toFixed(2) + "%");

console.log("====================================");


