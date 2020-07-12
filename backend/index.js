require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const db = require('./models')
const userRouter = require('./routes/user')
const beRouter = require('./routes/be')
const commentRouter = require('./routes/comment')
const postRouter = require('./routes/post')

// Middlewares
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use('/users',userRouter)
app.use('/be',beRouter)
app.use('/comments',commentRouter)
app.use('/posts',postRouter)

db.sequelize.sync().then(() => {
    app.listen(Number(process.env.PORT),() => {
        console.log(`Listening on port ${process.env.PORT}`)
    })
})