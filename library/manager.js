const Employee = require("./employee");

class Manager extends Employee {
    constructor(name, email, id, officeNum) {
        super(name, email, id);
        this.officeNum = officeNum;

    }

    getRole() {
        return "Manager";
    }

    getOfficeNum() {
        return this.officeNum;
    }
}

module.exports = Manager;