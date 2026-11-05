// QA Test Runner - Main Execution

const testCases = require("./test-cases");

// Function to validate test cases

function validateTest(testCase) {

    if (
        typeof testCase.expectedStatus !== "number" ||
        typeof testCase.actualStatus !== "number"
    ) {
        return "INVALID";
    }

    if (testCase.expectedStatus === testCase.actualStatus) {
        return "PASS";
    } else {
        return "FAIL";
    }

}

// Test execution counters

let passedTests = 0;
let failedTests = 0;
let invalidTests = 0;

// Execute test cases

testCases.forEach((testCase) => {

    const result = validateTest(testCase);

    if (result === "PASS") {
        passedTests++;
    } else if (result === "FAIL") {
        failedTests++;
    } else {
        invalidTests++;
    }

    console.log(
        testCase.id,
        "-",
        testCase.description,
        "-",
        result
    );

});

// Generate execution report

const totalTests = testCases.length;

const successRate = totalTests > 0
    ? (passedTests / totalTests) * 100
    : 0;

console.log("\n===== QA TEST EXECUTION REPORT =====");

console.log("Total tests:", totalTests);
console.log("Passed:", passedTests);
console.log("Failed:", failedTests);
console.log("Success rate:", successRate.toFixed(2) + "%");
console.log("Invalid:", invalidTests);

console.log("====================================");