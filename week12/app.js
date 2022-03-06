
const inquirer = require('inquirer');
const { getDepartments, createDepartment } = require('./src/department');


function askUser(){
    return inquirer.prompt([{
        message: "What do you want?",
        type: 'list',
        choices: [
            'View all Departments',
            'Add Department',
            "exit"
        ],
        name: 'option'
    }]).then((ans) => {

        if(ans.option === 'exit'){
            process.exit(0);
        }

        if(ans.option === 'View all Departments'){
            const results = getDepartments();
            console.table(results);
        }

        if(ans.option === 'Add Department'){
            await askDepartment();

            
            

        }


        askUser()

    })
    ;


}

askUser();



