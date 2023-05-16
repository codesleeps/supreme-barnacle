const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");

// TODO: Write Code to gather information about the development team members, and render the HTML file.

const teamMembers = [];

function start() {
  inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is the team manager's name?",
    },
    {
      type: "input",
      name: "id",
      message: "What is the team manager's ID?",
    },
    {
        type: "input",
        name: "email",
        message: "What is the team manager's email?",
    },
    {
        type: "input",
        name: "officeNumber",
        message: "What is the team manager's office number?",
    },

    
  ])
  .then((questions) => {
    const manager = new Manager(questions.name, questions.id, questions.email, questions.officeNumber);
    console.log(manager);
    teamMembers.push(manager);
    teamMembers();
    console.log(teamMembers);


  })
}


