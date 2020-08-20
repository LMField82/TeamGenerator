const Employee = require("./employee");

class Designer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;

    }

    getRole() {
        return "Designer";
    }

    getGithub() {
        return this.github;
    }

}
module.exports = Designer;