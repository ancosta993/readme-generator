// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input

const userQuestions = () => {

   return inquirer.prompt([

      {
         type:"input",
         name:'username',
         message:"Enter your GitHub username"
      },
      {
         type:'input',
         name:'link',
         message:"Link to your GitHhub Account"
      },
      {
         type:'input',
         name:'email',
         message:"Enter your email address"
      }
   ])
};

const projectQuestions = (readmeData) => {
   if (!readmeData.projectInfo){
      readmeData.projectInfo = [];
   }
   console.log(`
   =================
   Add a New Project
   =================
   `);

   return inquirer.prompt([
      {
         type:"input",
         name:'title',
         message:'Enter Project Title'
      },
      {
         type:"input",
         name:"description",
         message:"Enter project description"
      },
      {
         type:"input",
         name:"installation",
         message: "Enter project installation"
      },
      {
         type:"input",
         name:"usage",
         message: "Enter the Usage of the project"
      },
      {
         type:"input",
         name:"contributionGuide",
         message:"What are the contribution guidelines?"
      },
      {
         type:'input',
         name:'testInfo',
         message:'Enter the test instructions'
      },
      {
         type:"list",
         name:"license",
         message:"Choose project license",
         choices: ['None','MIT','Artistic license 2.0','Bosst Software License 1.0','BSD 2-clause','Creative Commons license family','Educational Community License v2.0','Eclipse Public License 2.0','GNU Publice License v2.0','ISC',"Microsoft Public License",'Open Software License', 'Mozilla Public License 2.0','The Unlicense']
      },
   ]).then(projectAnswers => {
      readmeData.projectInfo.push(projectAnswers);
      return readmeData;
   });
};

userQuestions()
   .then(projectQuestions)
   .then(readmeData => {
      fs.writeFile('./README.md', JSON.stringify(readmeData), err => {
         if(err) throw err;

         console.log("Page created!");
      });
   });



// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
