const express = require('express')
const todoListRouter = require('./todo')
const app = express()
const {v4:uuidv4} = require('uuid')

const PORT = 3000

app.use(express.json())

app.use('/todoList', todoListRouter)

app.listen(PORT, () => {
    console.log(`Connected to port ${PORT}`)
})

