const inquirer = require('inquirer');
const Manager = require('./src/employee/manager');
const generateHtml = require('./src/html/generate-html');
const fs = require('fs');
const Engineer = require('./src/employee/engineer');
const Intern = require('./src/employee/intern');

let employees = [];

// ask questions
function prompt(){
    
    return inquirer.prompt([
        // ask what team member to add
        // type manager, engineer, intern
        {
            type: "list",
            message: "Who do you want to add??",
            name: "role",
            choices: ["Manager", "Engineer", "Intern"],
        },
        // name
        {
            type: "input",
            message: "whats ya name??",
            name: "name",
        },
    
        // email
        {
            type: "input",
            name: "email",
            message: "whats ya email??",
        },
        // id
        {
            type: "input",
            name: "id",
            message: "whats ya id??",
        },
        // special qs
        {
            type: "input",
            name: "officeNumber",
            message: "whats ya office number??",
            when: (answers) => answers.role === "Manager",
        },
        {
            type: "input",
            name: "github",
            message: "whats ya github??",
            when: (answers) => answers.role === "Engineer",
        },
        {
            type: "input",
            name: "school",
            message: "whats ya school??",
            when: (answers) => answers.role === "Intern",
        },
        // do you want to add another member?
        {
            type: 'confirm',
            name: 'addAgain',
            message: "Ya want a new peep?",
        }
    ]).then((answers) => {
    
        // create new employee
    
        if(answers.role === 'Manager'){
            employees.push(new Manager(answers.name, answers.id, answers.email, answers.officeNumber));
        }
    
        if (answers.role === "Engineer") {
            employees.push(
                new Engineer(
                    answers.name,
                    answers.id,
                    answers.email,
                    answers.github
                )
            );
        }
       
    
        if (answers.role === "Intern") {
            employees.push(
                new Intern(
                    answers.name,
                    answers.id,
                    answers.email,
                    answers.intern
                )
            );
        }
    
        // if yes, repeat, 
        if(answers.addAgain){
            return prompt();
        }else{
            // if no \
            // generate html based on the members added
            const html = generateHtml(employees);

            fs.writeFileSync(__dirname + '/dist/output.html', html, 'utf-8');

            process.exit(0);
        }
    

    
    });    
}







prompt();