const inquirer = require('inquirer');
const fs = require('fs');


let licenseBadge;
const contentsOfReadMe = ({Title, Motivation, Build, Solve, Learn, Description, Installation, Usage, License, Contributions, Testing, GitHub, Email }) =>
`# ${Title}

## Description

- What was your motivation? <br>
    ${Motivation}

- Why did you build this project? <br>
    ${Build}

- What problem does it solve? <br>
    ${Solve}

- What did you learn? <br>
    ${Learn}
    <br>
- Briefly describe your Project: <br>
    ${Description}
    <br>
## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation

What are the steps required to install your project?

    ${Installation}

## Usage

Provide instructions for use:

    ${Usage}

## ${License}

## Features

## Contributing
${Contributions}

## Tests
${Testing}

## Questions
Check out my work as well!
Find me on GitHub:<br>
![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white) (https://github.com/${GitHub}) <br>
Email me: 📧 ${Email}
`

inquirer 
    .prompt([
        
        {
            type: 'default',
            name: 'info',
            message: (`\n
                Useful Characters
                  (Copy/Paste)
            -------------------------
            1. @, @gmail.com, @hotmail.com
            2. Images   To insert Images from a folder --> ![Placeholder](./RouteofyourImage.PNG)
            3. Hit ENTER to continue...
            \n`),
        },
        {
            type: 'input',
            name: 'Title',
            message: 'Project Title: ',
        },
        {
            type: 'input',
            name: 'Motivation',
            message: 'What was your motivation? ',
        },
        {
            type: 'input',
            name: 'Build',
            message: 'Why did you build this project? ',
        },
        {
            type: 'input',
            name: 'Solve',
            message: 'What problem does it solve? ',
        },
        {
            type: 'input',
            name: 'Learn',
            message: 'What did you learn? ',
        },
        {
            type: 'input',
            name: 'Description',
            message: 'Describe your project: ',
        },
        {
            type:'input',
            name: 'Installation',
            message: 'What does the user need to run/install your project? (...dependencies):',
        },
        {
            type:'input',
            name: 'Usage',
            message: 'Briefly describe how to run your app: ',
        },
        {
            type:'list',
            name: 'License',
            message: 'Choose which license will be used: ',
            choices: [
                'Apache-2.0', 'BSD-3-Clause', 'Boost_1.0', 'EPL_1.0', 'GPLv3',
            ],
        },
        {
            type:'input',
            name: 'Contributions',
            message: 'Write down the people involved in this project: ',
        },
        {
            type:'input',
            name: 'Testing',
            message: 'How do you test your project? (commands used...) ',
        },
        {
            type:'input',
            name: 'GitHub',
            message: 'Enter your GitHub Username: ',
        },
        {
            type:'input',
            name: 'Email',
            message: 'Write your email where people can find you: ',
        },
    ])

    .then((response) => {
        console.info(response);

            switch(response.License){
                case 'Apache-2.0':
                    response.License = `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
                    break;
                
                case 'BSD-3-Clause':
                    response.License = `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`;
                    break;
                
                case 'Boost_1.0':
                    response.License = `[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`;
                    break;
    
                case 'EPL_1.0':
                    response.License = `[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)`;
                    break;
                
                case 'GPLv3':
                    response.License = `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
                    break;
                
                default:
                    console.log("Ocurrió un error, intenta de nuevo");
                    break;
            }
            console.info(response.License);

        const inputcontentsOfReadMe = contentsOfReadMe(response);
        
        fs.writeFile('README.md', inputcontentsOfReadMe, (err) => 
            err ? console.error(err) : console.log('Document created!')
        );

    });
    