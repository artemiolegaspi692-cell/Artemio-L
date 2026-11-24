
let employees = JSON.parse(localStorage.getItem("employees") || "[]");
let attendance = JSON.parse(localStorage.getItem("attendance") || "[]");
let scanner = null;

function save() {
 localStorage.setItem("employees", JSON.stringify(employees));
 localStorage.setItem("attendance", JSON.stringify(attendance));
}

function today() {
 return new Date().toLocaleDateString("en-CA");
}
