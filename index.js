// Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const generateMarkdown = require('./generateMarkdown');

// Array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project:',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Please write a brief description about your project:',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Describe installation instructions for your project:',
  },
  {
    type: 'input',
    name: 'usageInformation',
    message: 'Please type usage information:',
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'Please type contributing information here:',
  },
  {
    type: 'input',
    name: 'test',
    message: 'Please type test instructions here:',
  },
  {
    type: 'input',
    name: 'github',
    message: 'What is your GitHub profile:',
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your email address:',
  },
  {
    type: 'checkbox',
    name: 'license',
    message: 'Please select a license:',
    choices: ['Apache 2.0 License', 'Boost Software License 1.0', 'BSD 3-Clause License', 'BSD 2-Clause License', 'CC0', 'Attribution 4.0 International', 'Attribution-ShareAlike 4.0 International', 'Attribution-NonCommercial 4.0 International', 'Attribution-NoDerivates 4.0 International', 'Attribution-NonCommmercial-ShareAlike 4.0 International', 'Attribution-NonCommercial-NoDerivatives 4.0 International', 'Eclipse Public License 1.0', 'GNU GPL v3', 'GNU GPL v2', 'GNU AGPL v3', 'GNU LGPL v3', 'GNU FDL v1.3', 'IBM Public License Version 1.0', 'ISC License (ISC)', 'The MIT License', 'Mozilla Public License 2.0', 'Attribution License (BY)', 'Open Database License (ODbL)', 'Public Domain Dedication and License (PDDL)', 'The Perl License', 'The Artistic License 2.0', 'SIL Open Font License 1.1', 'The Unlicense', 'The Do What the F**k You Want to Public License', 'The zlib/libpng License'],
  },
  // Added question to prompt user for the output file ...
  {
    type: 'input',
    name: 'fileName',
    message: 'Please type the file name you would like to save to:',
    default: 'README.md'
  },
];

// Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, err =>
      err ? console.error(err) : console.log(`Successfully created "${fileName}"`)
    );
}

const promptUser = () => {
  return inquirer.prompt(questions);
};

// Create a function to initialize app
const init = () => {
  promptUser()
    .then(data => writeToFile(data.fileName, generateMarkdown(data)))
    .catch((err) => console.error(err));
};

// Function call to initialize app
init();
