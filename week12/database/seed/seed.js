const { createDepartment, deleteAllDepartments } = require("../../src/department");
const {faker} = require('@faker-js/faker');
const connectDb = require("../connect");


async function seed() {
    

    // seed depart

    
    await deleteAllDepartments();
    for (let index = 0; index < 10; index++) {
        
        await createDepartment(faker.commerce.department());
        
    }

    // seed roles

    

    // // seed employees



}

seed();