const { User, Blog, Comment } = require("../../models");
const sequelize = require("../connect");
const {faker} = require('@faker-js/faker');


function createUser(){

    const firstName = faker.name.firstName();
    const lastName = faker.name.lastName();
    
    return User.create({
        name: firstName + ' ' + lastName,
        email: faker.internet.email(firstName, lastName),
        password: 'password',
    })

}

function createBlog(user){


    return Blog.create({
        title: faker.lorem.sentence(),
        body: faker.lorem.paragraphs(),
        user_id: user.id
    })

}

function createComment(user, blog) {
    return Comment.create({
        body: faker.lorem.paragraphs(1),
        user_id: user.id,
        blog_id: blog.id,
    });
}

async function seed(){

    const createdUsers = [];
    const createdBlogs = [];
    const createdComments = [];

    // truncate
    await sequelize.sync({force: true});


    // seed users
    for (let index = 0; index < 5; index++) {
        const created = await createUser();

        createdUsers.push(created);
        
    }

    // seed blogs
    for (let index = 0; index < 5; index++) {

        const createdBlog = await createBlog( faker.random.arrayElement(createdUsers) );
        createdBlogs.push(createdBlog);
    }

    // seed comments

    for (let index = 0; index < 2; index++) {
        
        const createdComment = await createComment(
            faker.random.arrayElement(createdUsers),
            faker.random.arrayElement(createdBlogs),
        );
        createdComments.push(createdComment);


    }




}

seed();


