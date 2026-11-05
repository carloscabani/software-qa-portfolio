// QA JSON Exercise
const { validateStatusCode } = require("./test-helpers");
const fs = require("fs");

const userData = fs.readFileSync(
    "03-javascript-fundamentals/test-user.json",
    "utf8"
);

const testUser = JSON.parse(userData);

console.log("Username:", testUser.username);
console.log("Role:", testUser.role);
console.log("Active:", testUser.active);
console.log("Test Status:", testUser.testStatus);

// Convert JavaScript object into JSON

const jsonOutput = JSON.stringify(testUser, null, 4);


console.log("JSON Output:");
console.log(jsonOutput);

// Validate API response

const apiResult = validateStatusCode(200, 200);

console.log("API Validation:", apiResult);