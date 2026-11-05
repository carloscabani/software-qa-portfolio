// Global Scope

const projectName = "SauceDemo";

function showProject() {
    console.log("Testing project:", projectName);
}

showProject();

console.log("Project name:", projectName);

// QA Scope Exercise

const project = "SauceDemo";

function executeLoginTest() {

    let username = "standard_user";
    let testStatus = "PASS";

    console.log("Project:", project);
    console.log("Username:", username);
    console.log("Test status:", testStatus);

}

executeLoginTest();

console.log("Project name:", project);