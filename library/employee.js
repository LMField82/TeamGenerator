const fs = require("fs");
const inquirer = require("inquirer");




class Employee {
    constructor(name, id, title, email) {
        if(!name) {
            throw new Error("You are missing the name.");
        }
        if(!id || isNaN) {
            throw new Error("You must enter a whole number id.");
        }
        if(!title) {
            throw new Error("You are missing the title.");
        }
        if(!email) {
            throw new Error("You must enter a valid email.")
        }
        this.name = name;
        this.id = id;
        this.title = title;
        this.email = email;
    }

    getName() {
        return console.log(`Employee Name: ${this.name}`);       
    }

    getId() {
        return console.log(`Employee ID: ${this.id}`);
    }

    getEmail() {
        return console.log(`Employee Email: ${this.email}`);
    }

    getRole() {
        if (this.title === "Manager") {
            return console.log("Employee Title: Manager");
        }
        if (this.title === "Engineer") {
           return console.log("Employee Title: Engineer");
        }
        if (this.title === "Intern") {
           return console.log("Employee Title: Intern");
        } else {
            return ("Employee Title: Employee");
        }
    }
}



module.exports = Employee;