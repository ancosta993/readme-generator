
const renderLicense = (projectInfo) => {
   if (projectInfo.license !== 'none') {
      return `![badge](https://img.shields.io/badge/License-${projectInfo.license}-green)`;
   } else {
      return ``;
   }
};

const licenseLink = (projectInfo) => {
   return (projectInfo.license === 'MIT') ? `[${projectInfo.license} License](https://opensource.org/licenses/MIT)`
      : (projectInfo.license === 'Apache License 2.0' ) ? `[${projectInfo.license}](https://opensource.org/licenses/Apache-2.0)`
      : (projectInfo.license === 'BSD 3 Clause License' ) ? `[${projectInfo.license}](https://opensource.org/licenses/BSD-3-Clause)`
      : (projectInfo.license === 'Mozilla Public License 2.0') ? `[${projectInfo.license}](https://opensource.org/licenses/MPL-2.0)`
      : ``;
};

const licenseSection = (projectInfo) => {
   let licenseText = 
   `## License
   This project is licensed through 
   `;

   if (projectInfo.license !== 'none') {
      return licenseText;
   } else {
      return ``;
   }
   
};




module.exports = readmeData => {
   const {projectInfo, ...userInfo} = readmeData;
   return `
${renderLicense(projectInfo[0])}

# ${projectInfo[0].title}
## Description 
${projectInfo[0].description}

## Table of Contents
- **[Description](#description)**
- **[Installation Instruction](#installation)**
- **[Usage Information](#usage)**
- **[License](#license)**
- **[Contribution Guidelines](#contributing)**
- **[Tests Instructions](#tests)**
- **[Questions](#questions)**

## Installation
${projectInfo[0].installation}
## Usage
${projectInfo[0].usage}
## Tests
${projectInfo[0].testInfo}
${licenseSection(projectInfo[0])} ${licenseLink(projectInfo[0])}
## Contributing
${projectInfo[0].contributionGuide}

## Questions
- GitHub: [${userInfo.username}](${userInfo.link})
- Email: ${userInfo.email}
`;
};