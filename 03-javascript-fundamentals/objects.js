// Objects - QA Testing

let user = {
    username: "standard_user",
    password: "secret_sauce",
    role: "standard",
    active: true
};

console.log(user);
console.log("Username:", user.username);
console.log("Role:", user.role);
console.log("Account active:", user.active);

console.log("Original account status:", user.active);

user.active = false;

console.log("Updated account status:", user.active);

