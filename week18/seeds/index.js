const seedUsers = require("./user-seed");
const db = require('./../config/connection');
const seedThoughts = require("./thought-seed");


const seedAll = async () => {
  
  await seedUsers(5)  ;
  console.log("user seeded");
  
  await seedThoughts(5);
  console.log("thoughts seeded");


  process.exit(0);
};

db.once('open', () => {
  seedAll();
})

