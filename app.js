const fs = require("fs");
const inquirer = require("inquirer");
const htmlRender = require("./library/htmlRender");
const Manager = require("./library/manager");
const Engineer = require("./library/engineer");
const Intern = require("./library/intern");
const path = require("path");

const outputPath = path.resolve(__dirname, "output", "team.html");

const IDArray = [];
const teamMembers = [];

buildTeamMenu = () => {

createTeam = () => {
    inquirer.prompt({
        message: "What type of team member would you like to add?",
        type: "list",
        choices: ["Engineer", "Intern", "No More Team Members"],
        name: "addTeamMembers"

    }).then(userChoice => {
        switch (userChoice.addTeamMembers) {
            case "Engineer":
                addEngineer();
                break;
            case "Intern":
                addIntern();
                break;
            default:
                buildTeam();
        }
    });
}


const addEngineer = () => {
    inquirer.prompt([
        {
            message: "What is your Engineer's name?",
            type: "input",
            name: "name"
        },
        {
            message: "What is your Engineer's GitHub user name?",
            type: "input",
            name: "githubUserName"
        },
        {
            message: "What is your Engineer's ID?",
            type: "input",
            name: "id"
        },
        {
            message: "What is your Engineer's email?",
            type: "input",
            name: "email"
        }
    ]).then(userChoice => {
        const engineer = new Engineer (userChoice.name, userChoice.githubUserName, userChoice.id, userChoice.email)
        teamMembers.push(engineer);
        IDArray.push(userChoice.id);
            if (userChoice.id == IDArray) {
                throw(err);
            }
        createTeam(); 
    });
}

const addIntern = () => {
    inquirer.prompt([
        {
            message: "What is your Intern's name?",
            type: "input",
            name: "name"
        },
        {
            message: "What is your Intern's school?",
            type: "input",
            name: "githubUserName"
        },
        {
            message: "What is your Intern's ID?",
            type: "input",
            name: "id"
        },
        {
            message: "What is your Intern's email?",
            type: "input",
            name: "email"
        }
    ]).then(userChoice => {
        const intern = new Intern (userChoice.name, userChoice.school, userChoice.id, userChoice.email)
        teamMembers.push(intern)
        IDArray.push(userChoice.id);
        createTeam(); 
    });
}

const createManager = () => {
inquirer.prompt([
    {
        message: "What is your manager's name?",
        type: "input",
        name: "name"
    },
    {
        message: "What is your manager's ID?",
        type: "input",
        name: "id"
    },
    {
        message: "What is your manager's email?",
        type: "input",
        name: "email"
    },
    {
        message: "What is your manager's office number?",
        type: "input",
        name: "office"
    },
]).then(userChoice => {
    const manager = new Manager (userChoice.name, userChoice.id, userChoice.email, userChoice.office)
    teamMembers.push(manager)
    IDArray.push(userChoice.id);
    createTeam(); 
});

    
    
    
};


buildTeam = () => {
    fs.writeFileSync(outputPath, htmlRender(teamMembers), "utf8")
}

createManager();

}

buildTeamMenu();


