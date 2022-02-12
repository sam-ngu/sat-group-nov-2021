const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateReadme = require('./src/markdown');
//
// write an app to generate readme
inquirer
    .prompt([
        {
            message: "WHat is your app name?",
            name: "name",
            type: "input",
        },
        {
            message: "Type in description?",
            name: "desc",
            type: "input",
        },
        {
            message: "WHat is your license?",
            name: "license",
            type: "list",
            choices: ["MIT", "GPL-v3", "Unlicense", 'hey-you-there'],
        },
        { message: "WHat is your github username?", name: "github", type: "input" },
    ])
    .then((response) => {
        console.log(response);


        // we need to generate a readme file based on the answers

        const outputPath = path.join(__dirname, 'output', 'README.md');

        const markdown = generateReadme(response);

        console.log(markdown);

        fs.writeFileSync(outputPath, markdown, 'utf-8');


    });

// app name

// installation section

// description

// License

// github
