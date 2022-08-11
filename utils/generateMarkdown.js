function renderLicenseBadge(license) {}

function renderLicenseLink(license) {}

function renderLicenseSection(license) {}

const generateMarkdown = ({title, description, installation, usage, contribution, test, github, email }) =>
 `# ${title}
  ## Table of Contents:
  1. [Description](#description) 
  2. [Installation](#Installation)
  3. [Usage](#Usage)  
  4. [Contributing](#Contribution)
  5. [Tests](#Test)
  6. [License](#License)
  7. [GitHub](#GitHub)
  8. [E-mail](#E-mail)
## Description
${description} 
## Installation
${installation}
## Usage
${usage}
## Contribution
${contribution}
## Test
${test}
 ## License
## GitHub
${github}
## E-mail
${email}
`;

module.exports = generateMarkdown;