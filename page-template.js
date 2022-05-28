
const renderLicense = (licenseInfo) => {
   if (licenseInfo !== 'none') {
      licenseInfo = licenseInfo.replace(/ /g, '%20'); // replace empty spaces with %20 for image link
      return `![badge](https://img.shields.io/badge/License-${licenseInfo}-green)`;
   } else {
      return ``;
   }
};

const licenseLink = (licenseInfo) => {
   return (licenseInfo === 'MIT') ? `[${licenseInfo} License](https://opensource.org/licenses/MIT)`
      : (licenseInfo === 'Apache 2.0' ) ? `[${licenseInfo}](https://opensource.org/licenses/Apache-2.0)`
      : (licenseInfo === 'BSD 3 Clause' ) ? `[${licenseInfo}](https://opensource.org/licenses/BSD-3-Clause)`
      : (licenseInfo === 'Mozilla Public 2.0') ? `[${licenseInfo}](https://opensource.org/licenses/MPL-2.0)`
      : ``;
};

const licenseNavLink = (licenseInfo) => {
   let licenseNavText = `- **[License](#license)**`
   let licenseNav = (licenseInfo !== 'none')? licenseNavText: ``;
   return licenseNav;
};

const licenseSection = (licenseInfo) => {
   let licenseText = 
   `## License
   This project is licensed through 
   `;

   if (licenseInfo !== 'none') {
      return licenseText;
   } else {
      return ``;
   }
   
};


module.exports = readmeData => {
   const {username, link, email, title, description, installation, usage, contributionGuide,testInfo, license} = readmeData;
   return `
${renderLicense(license)}

# ${title}
## Description 
${description}

## Table of Contents
- **[Description](#description)**
- **[Installation Instruction](#installation)**
- **[Usage Information](#usage)**
${licenseNavLink(license)}
- **[Contribution Guidelines](#contributing)**
- **[Tests Instructions](#tests)**
- **[Questions](#questions)**

## Installation
${installation}
## Usage
${usage}
## Tests
${testInfo}
${licenseSection(license)} ${licenseLink(license)}
## Contributing
${contributionGuide}

## Questions
- GitHub: [${username}](${link})
- Email: ${email}
`;
};