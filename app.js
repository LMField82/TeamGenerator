const fs = require("fs");
const inquirer = require("inquirer");
const htmlRender = require("./library/htmlRender");
const Manager = require("./library/manager");
const Engineer = require("./library/engineer");
const Intern = require("./library/intern");
const Designer = require("./library/designer");
const path = require("path");

const outputPath = path.resolve(__dirname, "output", "team.html");

const IDArray = [];
const teamMembers = [];

buildTeamMenu = () => {

createTeam = () => {
    inquirer.prompt({
        message: "What type of team member would you like to add?",
        type: "list",
        choices: ["Engineer", "Designer", "Intern", "No More Team Members"],
        name: "addTeamMembers"

    }).then(userChoice => {
        switch (userChoice.addTeamMembers) {
            case "Engineer":
                addEngineer();
                break;
            case "Designer":
                addDesigner();
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
            name: "github"
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
        const engineer = new Engineer (userChoice.name, userChoice.id, userChoice.email, userChoice.github)
        teamMembers.push(engineer);
        IDArray.push(userChoice.id);
            if (userChoice.id == IDArray) {
                throw(err);
            }
        createTeam(); 
    });
}

const addDesigner = () => {
    inquirer.prompt([
        {
            message: "What is your Designer's name?",
            type: "input",
            name: "name"
        },
        {
            message: "What is your Designer's Github user name?",
            type: "input",
            name: "github"
        },
        {
            message: "What is your Designer's ID?",
            type: "input",
            name: "id"
        },
        {
            message: "What is your Designer's email?",
            type: "input",
            name: "email"
        }
    ]).then(userChoice => {
        const designer = new Designer (userChoice.name, userChoice.id, userChoice.email, userChoice.github)
        teamMembers.push(designer);
        IDArray.push(userChoice.id);
            if (userChoice.id === IDArray) {
                throw (err);
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
            name: "school"
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
        const intern = new Intern (userChoice.name, userChoice.id, userChoice.email, userChoice.school)
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


