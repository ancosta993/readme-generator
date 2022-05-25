module.exports = readmeData => {
   const {projectInfo, ...userInfo} = readmeData;
   return `
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

## License

## Contributing

## Tests

## Questions
- GitHub: [${userInfo.username}](${userInfo.link})
- Email: ${userInfo.email}
`;
};