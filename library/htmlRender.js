const fs = require("fs");
const path = require("path");

const templatesDir = path.resolve(__dirname, "../html");
const render = employees => {
    const html = [];
    html.push(employees.filter(employee => employee.getRole()=== "Manager")
    .map(manager => renderManager(manager))
    );
    html.push(employees.filter(employee => employee.getRole()=== "Engineer")
    .map(engineer => renderEngineer(engineer))
    );
    html.push(employees.filter(employee => employee.getRole()=== "Intern")
    .map(intern => renderIntern(intern))
    );
}

const renderManager = manager => {
    let template = fs.readFileSync(path.resolve(templatesDir, "manager.html"), "utf8");
    template = replacePlaceholders(template, "name", manager.getName());
    template = replacePlaceholders(template, "title", manager.getRole());
    template = replacePlaceholders(template, "email", manager.getEmail());
    template = replacePlaceholders(template, "id", manager.getId());
    template = replacePlaceholders(template, "officeNum", manager.getOfficeNum());
    return template;
}

const renderEngineer = engineer => {
    let template = fs.readFileSync(path.resolve(templatesDir, "engineer.html"), "utf8");
    template = replacePlaceholders(template, "name", engineer.getName());
    template = replacePlaceholders(template, "title", engineer.getRole());
    template = replacePlaceholders(template, "email", engineer.getEmail());
    template = replacePlaceholders(template, "id", engineer.getId());
    template = replacePlaceholders(template, "gitHub", engineer.getGitHub());
    return template;
}

const renderIntern = intern => {
    let template = fs.readFileSync(path.resolve(templatesDir, "intern.html"), "utf8");
    template = replacePlaceholders(template, "name", intern.getName());
    template = replacePlaceholders(template, "title", intern.getRole());
    template = replacePlaceholders(template, "email", intern.getEmail());
    template = replacePlaceholders(template, "id", intern.getId());
    template = replacePlaceholders(template, "officeNum", intern.getSchool());
    return template;
}

const replacePlaceholders = (template, placeholder, value) => {
    const pattern = new RegExp("{{ " + placeholder + " }}", "gm");
    return template.replace(pattern, value);
  };