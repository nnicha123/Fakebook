const db = require('../models')

const addComment = async (req,res) => {
    const {text} = req.body
    const newComment = await db.Comment.create({
        text:text,
        user_id:req.user.id,
        // post_id:req.post.id
    })
    res.status(201).send(newComment)
}

module.exports = {
    addComment
}