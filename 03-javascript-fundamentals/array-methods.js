let testUsers = [
    "standard_user",
    "locked_out_user",
    "problem_user"
];

console.log("Original users:", testUsers);

testUsers.push("performance_glitch_user");

console.log("Updated users:", testUsers);

//POP
testUsers.pop();

console.log("Users after removal:", testUsers);

//INCLUDES
let userExists = testUsers.includes("standard_user");

console.log("Does standard_user exist?", userExists);

// FOR EACH
let products = [
    "Sauce Labs Backpack",
    "Sauce Labs Bike Light",
    "Sauce Labs Bolt T-Shirt"
];

products.forEach(function(product) {
    console.log("Testing product:", product);
});
