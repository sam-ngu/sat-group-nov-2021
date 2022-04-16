const { faker } = require("@faker-js/faker");
const Thought = require("../models/Thought");
const User = require("../models/User");
const getRandomModel = require("./seed-helper");
async function seedThoughts(numbers) {
    await Thought.deleteMany();

    const thoughts = [];

    for (let index = 0; index < numbers; index++) {

        
        const randomUser = await getRandomModel(User);
        
        const created = await Thought.create({
            thought_text: faker.lorem.sentence(10),
            // I need to randomly get a user id here
            
            reactions: [{
                body: faker.lorem.sentence(3),
                user_id: randomUser._id,
            }]
        });


        // randomUser.thoughts = [created._id];
        // await randomUser.save();

        await User.findOneAndUpdate({
            _id: randomUser._id
        }, {
            $push: {
                thoughts: created._id,
            }
        })

        thoughts.push(created);
    }

    return thoughts;
}

module.exports = seedThoughts;
