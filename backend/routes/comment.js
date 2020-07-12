const express = require('express')
const router = express.Router()
const passport = require('passport')
const commentController = require('../controller/comment')

const authentication = passport.authenticate("jwt",{session:false})

router.post('/',authentication,commentController.addComment)

module.exports = router