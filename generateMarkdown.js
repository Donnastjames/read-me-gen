// Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

const licenseArray = [
  { 
    name: 'Apache 2.0 License',
    badgeLink: 'https://img.shields.io/badge/License-Apache%202.0-blue.svg',
    licenseLink: 'https://opensource.org/licenses/Apache-2.0',
  },
  {
    name: 'Boost Software License 1.0',
    badgeLink: 'https://img.shields.io/badge/License-Boost%201.0-lightblue.svg',
    licenseLink: 'https://www.boost.org/LICENSE_1_0.txt',
  },
  {
    name: 'BSD 3-Clause License',
    badgeLink: 'https://img.shields.io/badge/License-BSD%203--Clause-blue.svg',
    licenseLink: 'https://opensource.org/licenses/BSD-3-Clause',
  },
  {
    name: 'BSD 2-Clause License',
    badgeLink: 'https://img.shields.io/badge/License-BSD%202--Clause-orange.svg',
    licenseLink: 'https://opensource.org/licenses/BSD-2-Clause',
  },
  {
    name: 'CC0',
    badgeLink: 'https://img.shields.io/badge/License-CC0%201.0-lightgrey.svg',
    licenseLink: 'https://creativecommons.org/publicdomain/zero/1.0/',
  },
  {
    name: 'Attribution 4.0 International',
    badgeLink: 'https://img.shields.io/badge/License-CC%20BY%204.0-lightgrey.svg',
    licenseLink: 'https://creativecommons.org/licenses/by/4.0/',
  },
  {
    name: 'Attribution-ShareAlike 4.0 International',
    badgeLink: 'https://img.shields.io/badge/License-CC%20BY--SA%204.0-lightgrey.svg',
    licenseLink: 'https://creativecommons.org/licenses/by-sa/4.0/',
  },
  {
    name: 'Attribution-NonCommercial 4.0 International',
    badgeLink: 'https://img.shields.io/badge/License-CC%20BY--NC%204.0-lightgrey.svg',
    licenseLink: 'https://creativecommons.org/licenses/by-nc/4.0/',
  },
  {
    name: 'Attribution-NoDerivates 4.0 International',
    badgeLink: 'https://img.shields.io/badge/License-CC%20BY--ND%204.0-lightgrey.svg',
    licenseLink: 'https://creativecommons.org/licenses/by-nd/4.0/',
  },
  {
    name: 'Attribution-NonCommmercial-ShareAlike 4.0 International',
    badgeLink: 'https://img.shields.io/badge/License-CC%20BY--NC--SA%204.0-lightgrey.svg',
    licenseLink: 'https://creativecommons.org/licenses/by-nc-sa/4.0/',
  },
  {
    name: 'Attribution-NonCommercial-NoDerivatives 4.0 International',
    badgeLink: 'https://img.shields.io/badge/License-CC%20BY--NC--ND%204.0-lightgrey.svg',
    licenseLink: 'https://creativecommons.org/licenses/by-nc-nd/4.0/',
  },
  {
    name: 'Eclipse Public License 1.0',
    badgeLink: 'https://img.shields.io/badge/License-EPL%201.0-red.svg',
    licenseLink: 'https://opensource.org/licenses/EPL-1.0',
  },
  {
    name: 'GNU GPL v3',
    badgeLink: 'https://img.shields.io/badge/License-GPLv3-blue.svg',
    licenseLink: 'https://www.gnu.org/licenses/gpl-3.0',
  },
  {
    name: 'GNU GPL v2',
    badgeLink: 'https://img.shields.io/badge/License-GPL%20v2-blue.svg',
    licenseLink: 'https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html',
  },
  {
    name: 'GNU AGPL v3',
    badgeLink: 'https://img.shields.io/badge/License-AGPL%20v3-blue.svg',
    licenseLink: 'https://www.gnu.org/licenses/agpl-3.0',
  },
  {
    name: 'GNU LGPL v3',
    badgeLink: 'https://img.shields.io/badge/License-LGPL%20v3-blue.svg',
    licenseLink: 'https://www.gnu.org/licenses/lgpl-3.0',
  },
  {
    name: 'GNU FDL v1.3',
    badgeLink: 'https://img.shields.io/badge/License-FDL%20v1.3-blue.svg',
    licenseLink: 'https://www.gnu.org/licenses/fdl-1.3',
  },
  {
    name: 'IBM Public License Version 1.0',
    badgeLink: 'https://img.shields.io/badge/License-IPL%201.0-blue.svg',
    licenseLink: 'https://opensource.org/licenses/IPL-1.0',
  },
  {
    name: 'ISC License (ISC)',
    badgeLink: 'https://img.shields.io/badge/License-ISC-blue.svg',
    licenseLink: 'https://opensource.org/licenses/ISC',
  },
  {
    name: 'The MIT License',
    badgeLink: 'https://img.shields.io/badge/License-MIT-yellow.svg',
    licenseLink: 'https://opensource.org/licenses/MIT',
  },
  {
    name: 'Mozilla Public License 2.0',
    badgeLink: 'https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg',
    licenseLink: 'https://opensource.org/licenses/MPL-2.0',
  },
  {
    name: 'Attribution License (BY)',
    badgeLink: 'https://img.shields.io/badge/License-ODC_BY-brightgreen.svg',
    licenseLink: 'https://opendatacommons.org/licenses/by/',
  },
  {
    name: 'Open Database License (ODbL)',
    badgeLink: 'https://img.shields.io/badge/License-ODbL-brightgreen.svg',
    licenseLink: 'https://opendatacommons.org/licenses/odbl/',
  },
  {
    name: 'Public Domain Dedication and License (PDDL)',
    badgeLink: 'https://img.shields.io/badge/License-PDDL-brightgreen.svg',
    licenseLink: 'https://opendatacommons.org/licenses/pddl/',
  },
  {
    name: 'The Perl License',
    badgeLink: 'https://img.shields.io/badge/License-Perl-0298c3.svg',
    licenseLink: 'https://opensource.org/licenses/Artistic-2.0',
  },
  {
    name: 'The Artistic License 2.0',
    badgeLink: 'https://img.shields.io/badge/License-Artistic%202.0-0298c3.svg',
    licenseLink: 'https://opensource.org/licenses/Artistic-2.0',
  },
  {
    name: 'SIL Open Font License 1.1',
    badgeLink: 'https://img.shields.io/badge/License-OFL%201.1-lightgreen.svg',
    licenseLink: 'https://opensource.org/licenses/OFL-1.1',
  },
  {
    name: 'The Unlicense',
    badgeLink: 'https://img.shields.io/badge/license-Unlicense-blue.svg',
    licenseLink: 'https://unlicense.org/',
  },
  {
    name: 'The Do What the F**k You Want to Public License',
    badgeLink: 'https://img.shields.io/badge/License-WTFPL-brightgreen.svg',
    licenseLink: 'http://www.wtfpl.net/about/',
  },
  {
    name: 'The zlib/libpng License',
    badgeLink: 'https://img.shields.io/badge/License-Zlib-lightgrey.svg',
    licenseLink: 'https://opensource.org/licenses/Zlib',
  },
];

// Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderLicenseBadge(license) {  
  const index = licenseArray.findIndex(item => item.name === license);

  if (index >= 0) {
    return `![Image](${licenseArray[index].badgeLink})`;
  }

  return '';
}

// Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  const index = licenseArray.findIndex(item => item.name === license);

  if (index >= 0) {
    return licenseArray[index].licenseLink;
  }

  return '';
}

// Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  const index = licenseArray.findIndex(item => item.name === license);

  if (index >= 0) {
    const licenseLink = renderLicenseLink(license);
    return `[${license}](${licenseLink})`;
  }

  return '';
}

// Create a function to generate markdown for README
function generateMarkdown(data) {
  let myMarkDown = `# ${data.title}\n\n `;

  // If I must render all badge images ...
  for (let i = 0; i < data.license.length; i++) {
    myMarkDown += `${renderLicenseBadge(data.license[i])}\n\n  `;
  }

  // for (let i = 0; i < data.license.length; i++) {
  //   myMarkDown += `${renderLicenseSection(data.license[i])}\n`;
  // }

  myMarkDown += `### Table of Contents

1.  [Description](#Description)
2.  [Installation](#Installation)
3.  [Usage](#Usage)
4.  [Contributing](#Contributing)
5.  [Tests](#Tests)
6.  [Questions](#Questions)
7.  [License](#License)


## Description
${data.description}

## Installation
${data.installation}

## Usage
${data.usageInformation}

## Contributing
${data.contributing}

## Tests
${data.test}

## Questions
GitHub profile: ${data.github}

For additional questions, you may contact me at ${data.email}.

## License

`;

  // Oddity: need \ followed by two spaces for newline to show
  // in the markdown ...
  for (let i = 0; i < data.license.length; i++) {
    myMarkDown += `${renderLicenseSection(data.license[i])}\  
`;
  }

  return myMarkDown;
}

module.exports = generateMarkdown;
