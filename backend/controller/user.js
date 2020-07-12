const db = require('../models')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const getUsers = async(req,res) => {
    const allUsers = await db.User.findAll()
    res.status(200).send(allUsers)
}
const registerUser = async(req,res) => {
    const {username,password,name,profile_url} = req.body
    const invalidUsername = await db.User.findOne({where:{username:username}})
    if(invalidUsername) {res.status(400).send({message:'Invalid username'})}
    else{
        const salt = bcrypt.genSaltSync(10)
        const hashedPassword = bcrypt.hashSync(password,salt)
        const newUser = await db.User.create({
            username:username,
            password:hashedPassword,
            name:name,
            profile_url:profile_url
        })
        res.status(201).send(newUser)

    }
}

const loginUser = async(req,res) => {
    const {username,password} = req.body
    const targetUser = await db.User.findOne({where:{username:username}})
    if(!targetUser) res.status(400).send({message:'Invalid username or password'})
    else{
        const correctPassword = bcrypt.compareSync(password,targetUser.password)
        if(correctPassword) {
            const payload = {
                name: targetUser.name,
                id: targetUser.id
            }
            const token = jwt.sign(payload, process.env.SECRET_OR_KEY, { expiresIn: 3600 })
            res.status(200).send({ token, message: 'Logged In' })
        }
        else  {res.status(400).send({message:'Invalid username or password'})}
    }
}

module.exports = {
    registerUser,loginUser,getUsers
}