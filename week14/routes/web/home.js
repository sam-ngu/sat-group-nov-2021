const { Blog, User } = require('../../models')

const router = require('express').Router();


router.get('/home', (req, res) => {


    Blog.findAll({
        include: [
            {
                model: User
            }
        ]
    })
        .then((blogs) => {

            const blogsJson = blogs.map((blog) => blog.toJSON());


            console.log(blogsJson)
            res.render('blogs', {
                blogs: blogsJson, 
            });
        })


})



module.exports = {
    router
}

