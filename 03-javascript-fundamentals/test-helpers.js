// QA Test Helpers

function validateStatusCode(actualStatus, expectedStatus) {

    if (actualStatus === expectedStatus) {
        return "PASS";
    } else {
        return "FAIL";
    }

}

module.exports = {
    validateStatusCode
};