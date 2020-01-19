const Employee = require("./employee");

class Engineer extends Employee {
    constructor(name, id, email, gitHubID) {
        super(name, id, email);
        this.github = gitHubID;

    }

    getRole() {
        return "Engineer";
    }

    getGitHub() {
        return this.github;
    }
}
module.exports = Engineer;