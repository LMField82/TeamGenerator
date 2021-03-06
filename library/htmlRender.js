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
    html.push(employees.filter(employee => employee.getRole()=== "Designer")
    .map(designer => renderDesigner(designer))
    );
    html.push(employees.filter(employee => employee.getRole()=== "Intern")
    .map(intern => renderIntern(intern))
    );
    return rednerMain(html.join(""));
}

const renderManager = manager => {
    let template = fs.readFileSync(path.resolve(templatesDir, "manager.html"), "utf8");
    template = replacePlaceholders(template, "name", manager.getName());
    template = replacePlaceholders(template, "title", manager.getRole());
    template = replacePlaceholders(template, "email", manager.getEmail());
    template = replacePlaceholders(template, "id", manager.getId());
    template = replacePlaceholders(template, "office", manager.getOffice());
    return template;
}

const renderEngineer = engineer => {
    let template = fs.readFileSync(path.resolve(templatesDir, "engineer.html"), "utf8");
    template = replacePlaceholders(template, "name", engineer.getName());
    template = replacePlaceholders(template, "title", engineer.getRole());
    template = replacePlaceholders(template, "email", engineer.getEmail());
    template = replacePlaceholders(template, "id", engineer.getId());
    template = replacePlaceholders(template, "github", engineer.getGithub());
    return template;
}

const renderDesigner = designer => {
    let template = fs.readFileSync(path.resolve(templatesDir, "designer.html"), "utf8");
    template = replacePlaceholders(template, "name", designer.getName());
    template = replacePlaceholders(template, "title", designer.getRole());
    template = replacePlaceholders(template, "email", designer.getEmail());
    template = replacePlaceholders(template, "id", designer.getId());
    template = replacePlaceholders(template, "github", designer.getGithub());
    return template;
}

const renderIntern = intern => {
    let template = fs.readFileSync(path.resolve(templatesDir, "intern.html"), "utf8");
    template = replacePlaceholders(template, "name", intern.getName());
    template = replacePlaceholders(template, "title", intern.getRole());
    template = replacePlaceholders(template, "email", intern.getEmail());
    template = replacePlaceholders(template, "id", intern.getId());
    template = replacePlaceholders(template, "school", intern.getSchool());
    return template;
}

const rednerMain = html => {
    const template = fs.readFileSync(path.resolve(templatesDir, "main.html"), "utf8");
    return replacePlaceholders(template, "team", html);
}

const replacePlaceholders = (template, placeholder, value) => {
    const pattern = new RegExp("{{ " + placeholder + " }}", "gm");
    return template.replace(pattern, value);
  };

  module.exports = render;