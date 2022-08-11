const questions = [
    {
      type: "input",
      message: "What is the name of your project?",
      name: "title", 
         },
    {
       type: "input",
       message: "What is the motive of this project?",
       name: "description",
         },
    {
      type: "input",
      message: "Are users able to install this program?",
      name: "installation",
         },    
    {
       type: "input",
       message: "What are some uses for your project?",
       name: "usage",
         },    
    {
      type: "checkbox",
      message: "Choose a License.",
      choices: ["MIT", "GNU General Public License 2.0", "Apache License 2.0", "GNU General Public License 3.0", "None"],
      name: "license",
         }, 
    {
       type: "input",
       message: "List any contributers.",
       name: "contribution",
         },
    {
      type: "input",
      message: "Can this project be tested?",
      name: "test",
         },
    {
       type: "input",
       message: "github username",
       name: "github",
         },
    {
      type: "input",
      message: "your email",
      name: "email",
         },
 ];
 
 function init() {
    const inquirer = require("inquirer");
    const fs = require("fs");
    const generate = require("./utils/generateMarkdown.js");
     const path = require("path");

     function writeToFile(fileName, data) {
        fs.writeFileSync(path.join (process.cwd(), "Readme.md"), generate());
      }

    inquirer
        .prompt(questions)
        .then(function(answers) {
          const createMarkdown = generate(answers)
          fs.writeFile('readme.md', createMarkdown, (err) =>
          err ? console.log(err) : console.log('Successfully created readme!')
          );

           return writeToFile(answers);
        });
 }

init();