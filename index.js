// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

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

// TODO: Create a function to write README file
const writeToFile = util.promisify(fs.writeFile);

const promptUser = () => {
  return inquirer.prompt(questions);
};
  
const generateReadMeText = data =>
  `# ${data.title}

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
[MIT](https://choosealicense.com/licenses/mit/)
`;
  



// TODO: Create a function to initialize app
const init = () => {
  promptUser()
    .then(data => writeToFile('README2.md', generateReadMeText(data)))
    .then(() => console.log('Successfully wrote to README2.md'))
    .catch((err) => console.error(err));
};

// Function call to initialize app
init();
