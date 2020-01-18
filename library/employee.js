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
        console.log(`Employee Name: ${this.name}`);       
    }

    getId() {
        console.log(`Employee ID: ${this.id}`);
    }

    getEmail() {
        console.log(`Employee Email: ${this.email}`);
    }

    getRole() {
        if (this.title === "Manager") {
            console.log("Employee Title: Manager");
        }
        if (this.title === "Engineer") {
            console.log("Employee Title: Engineer");
        }
        if (this.title === "Intern") {
            console.log("Employee Title: Intern");
        } else {
            return ("Employee Title: Employee");
        }
    }
}

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
])

module.exports = Employee;