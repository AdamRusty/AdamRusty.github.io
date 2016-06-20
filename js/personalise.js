var header = document.getElementById("title");

if(sessionStorage.getItem("name") == "null" || '') {
    var person = prompt("Hello, What is your name?", "Insert your name here.");
    sessionStorage.setItem('name', person);
} 

header.innerHTML = "Welcome to my Portfolio-site " + sessionStorage.getItem('name');

console.log(sessionStorage.getItem('name'));
