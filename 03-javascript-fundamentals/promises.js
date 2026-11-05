// QA Async/Await - API Testing Simulation

function checkAPIStatus() {

    return new Promise((resolve, reject) => {

        const statusCode = 200;

        if (statusCode === 200) {
            resolve("API Test: PASS");
        } else {
            reject("API Test: FAIL");
        }

    });

}

async function executeAPITest() {

    console.log("Starting API test...");

    try {

        const result = await checkAPIStatus();

        console.log(result);

    } catch (error) {

        console.log(error);

    }

    console.log("API test finished.");

}

executeAPITest();