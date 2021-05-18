// TODO: Include packages needed for this application
const inquirer = require('inquirer');
// const fs = require('fs');

// const generateREADME = (answers) =>
// `# ${answers.title}

// {answers.description}

// ## Installation
// ${answers.installation} 

// ## Usage
// ${answers.usageInformation}

// ## Contributing
// ${answers.contributing}

// ## Tests
// ${answers.test}

// ## Questions
// GitHub profile: ${answers.github}
// For additional questions, you may contact me at ${answers.email}.

// ## License
// [MIT](https://choosealicense.com/licenses/mit/)
// `;

// Array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Please write a brief description about your project.',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Describe installation instructions for your project.',
  },
  {
    type: 'input',
    name: 'usageInformation',
    message: 'Please type usage information.',
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'Please type contributing information here.',
  },
  {
    type: 'input',
    name: 'test',
    message: 'Please type test instructions here.',
  },
  {
    type: 'input',
    name: 'github',
    message: 'What is your GitHub profile?',
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your email address?',
  },
];

inquirer
  .prompt(questions)

  .then ((response) =>
    console.log(response)
  );

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app
// init();
