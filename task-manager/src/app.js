const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.use(function (req, res, next) {
    res.status(404).send({message:"Sorry can't find that!"})
})

app.use(function (err, req, res, next) {
    console.error(err.stack)
    res.status(500).send('Something broke!')
})

module.exports = app