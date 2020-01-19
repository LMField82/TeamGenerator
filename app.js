const fs = require("fs");
const inquirer = require("inquirer");
const 


inquirer.prompt([
    {
        message: "What is your name?",
        type: "input",
        name: "name"
    },
    {
        message: "What is your ID?",
        type: "input",
        name: "id"
    },
    {
        message: "What is your email?",
        type: "input",
        name: "email"
    },
    {
        message: "What is your title?",
        type: "list",
        name: "title",
        choices: ["Manager", "Engineer", "Intern"]
    }
]).then(({name, id, email, title}) => {
    console.log("-----------------------");
    console.log("name", name);
    console.log("id", id);
    console.log("email", email);
    console.log("title", title);
    console.log("-----------------------");  
    getName();
    getId();
    getEmail();
    getRole();


})
