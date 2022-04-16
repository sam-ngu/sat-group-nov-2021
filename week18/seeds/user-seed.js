const User = require("../models/User");
const {faker} = require('@faker-js/faker');
const getRandomModel = require("./seed-helper");
async function seedUsers(numbers) {
    
    await User.deleteMany();

    const users = [];

    for (let index = 0; index < numbers; index++) {
        
        const [firstName, lastName] = [faker.name.firstName(), faker.name.lastName()];

        const randomUser = await getRandomModel(User);
        const friends = [];

        if(randomUser){
            friends.push(randomUser);
        }

        const created = await User.create({
            username: faker.internet.userName(firstName, lastName),
            email: faker.internet.email(firstName, lastName),
            friends,
        });

        users.push(created);

    }

    return users;


}


module.exports = seedUsers;