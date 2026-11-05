// Arrays - QA testing

let testCases = [
    "TC-LOGIN-001",
    "TC-LOGIN-002",
    "TC-LOGIN-003",
    "TC-CART-001",
    "TC-CART-002"
];

console.log("QA Test Cases:");
console.log(testCases); 
console.log(testCases[0]);
console.log(testCases[2]);
console.log(testCases[4]);

// Execute all test cases

for (let i = 0; i < testCases.length; i++) {
    console.log("Executing:", testCases[i]);
}

let testUsers = [
    "standard_user",
    "locked_out_user",
    "problem_user",
    "performance_glitch_user"
];

console.log("QA Test Users: ");
for (i =0; i< testUsers.length ; i++){
    console.log(testUsers[i]);
}

