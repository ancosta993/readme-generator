// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generatePage = require('./page-template');

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
         choices: ['none', 'MIT',"Apache License 2.0","BSD 3 Clause License","Mozilla Public License 2.0"]
      },
   ]).then(projectAnswers => {
      readmeData.projectInfo.push(projectAnswers);
      return readmeData;
   });
};

const mockData = {
   username: 'ancosta993',
   link: 'https://github.com/ancosta993',
   email: 'adcosta993@students.pgcc.edu',
   projectInfo: [
     {
       title: 'README.md file generator',
       description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',      
       installation:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
       usage: 'q',
       contributionGuide: 'q',
       testInfo: 'q',
       license: 'MIT'
     }
   ]
 }

// userQuestions()
   // .then(projectQuestions)
   // .then(readmeData => {
      const pageText = generatePage(mockData);
      writeToFile('./README.md', pageText);
   // });



// TODO: Create a function to write README file
function writeToFile(fileName, data) {
   fs.writeFile(fileName, data, err => {
      if (err) throw err;

      console.log("Page Created!");
   });
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
