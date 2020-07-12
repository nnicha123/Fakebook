const db = require('../models')

const addPost = async(req,res) => {
    const {content,picture_url} = req.body
    const newPost = await db.Post.create({
        content:content,
        picture_url:picture_url,
        user_id:req.user.id
    })
    res.status(201).send(newPost)
}

module.exports = {
    addPost
}