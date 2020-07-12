const express = require('express')
const router = express.Router()
const postController = require('../controller/post')
const passport = require('passport')

const authentication = passport.authenticate("jwt",{session:false})

router.post('/',authentication,postController.addPost)

module.exports = router