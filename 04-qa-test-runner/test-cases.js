// QA Test Runner - Test Cases

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
        actualStatus: "500"
    }

];

module.exports = testCases;