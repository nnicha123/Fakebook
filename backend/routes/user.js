const express = require('express')
const router = express.Router()
const userController = require('../controller/user')

router.post('/register',userController.registerUser)
router.post('/login',userController.loginUser)
router.get('/',userController.getUsers)

module.exports = router