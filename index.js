const users = [
    { username: "Ann_Roy", password: "123" },
    { username: "Kevin_John", password: "456" },
    { username: "Sam", password: "123"},
];

localStorage.setItem("users", JSON.stringify(users));

function login(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // When retrieving the data:
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];

    const userFound = storedUsers.some(user => user.username === username && user.password === password);
    if (userFound) {
        console.log("Login successful. Redirecting...");
        window.location.href = "dashboard.html";
    } else {
        console.log("Login failed.");
        alert("Login failed. Please check your credentials.");
    }
}