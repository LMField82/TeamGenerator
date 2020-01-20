const fs = require("fs");
const inquirer = require("inquirer");
const htmlRender = require("./library/htmlRender")




const Manager = () => {
    inquirer.prompt({
        message: "What is your office number?",
        type: "input",
        name: "officeNumber"
    }).then(({officeNumber}) => {
        const officeNum = this.officeNumber;
        
    });
}

const Engineer = () => {
    inquirer.prompt({
        message: "What is your GitHub user name?",
        type: "input",
        name: "githubUserName"
    }).then(({githubUserName}) => {
        const githubUser = this.githubUserName;
    });
}

const Intern = () => {
    inquirer.prompt({
        message: "What is the name of your school?",
        type: "input", 
        name: "school"
    }).then(({school}) => {
        const schoolName = this.school;
    });
}

const getEmployeeInfo = () => {
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
    },

]).then(({title}) => {
    switch(title) {
        case "Manager":
            Manager();
            break;
        case "Engineer":
            Engineer();
            break;
        case "Intern":
            Intern();
            break;
    }

   

});

}
getEmployeeInfo();

