// Return - QA Testing

function validateStatusCode(expected, actual) {

    if (actual === expected) {
        return true;
    } else {
        return false;
    }

}

let testResult = validateStatusCode(200, 200);

console.log("Test result:", testResult);