# README.md Generator
A video demonstrating the project is [here](https://drive.google.com/file/d/1rAGa3RRcx19qNrRazTpMGMmzy2oncbfn/view).

## Description 
This application prompts the user for entering information they want in the README.md file. The application specifically asks for: Description, Installation, Usage, License, Contribution Guidelines, Testing instructions, and questions for further contact. The user types the information in the command line of their operating system and generates the readme file with those inputs.

## Tools
The aplication uses Node.js to complete the project.
The Node Packages used here are: inquirer.js and file system modules.


## Table of Contents
- **[Description](#description)**
- **[Installation Instruction](#installation)**
- **[Usage Information](#usage)**
- 
## Installation
In order to use the project, the user needs to install Node.js and download necessary node modules.
After the Node.js is installed, `npm install inquirer` needs to be run. File system is already installed in with the Node.js


## Usage
The application is initiated with the command line instruction `node Index.js`

- The user is prompted, one by one, to type in input.
- The prompts include: 
   - Description
   - Installation Guide
   - Usage Information
   - License (The user is given a choice for the available license)
   - Contribution Guidelines
   - Testing Information
   - Questions
The README.md page is created immediately after all the prompts are anwered.

## Function (psudocode)


