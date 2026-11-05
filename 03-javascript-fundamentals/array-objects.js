// Arrays of objects - QA Testing

let testUsers = [
    {
        username: "standard_user",
        password: "secret_sauce",
        active: true
    },
    {
        username: "locked_out_user",
        password: "secret_sauce",
        active: false
    },
    {
        username: "problem_user",
        password: "secret_sauce",
        active: true
    }
];

console.log(testUsers);
console.log("First user:", testUsers[0].username);

console.log("Second user:", testUsers[1].username);

console.log("Second user active:", testUsers[1].active);

testUsers.forEach(function(user) {
    console.log("Username:", user.username);
    console.log("Account active:", user.active);
});