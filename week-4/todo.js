const express = require('express')
const todoListRouter = express.Router()
const {v4:uuidv4} = require('uuid')

let todos = [
    {
        Name: "Do laundry",
        description: "Gotta do some laundry, got some dirty clothes",
        completed: true,
        _id: uuidv4()
        
    },
    {
        Name: "Dishes",
        description: "The dishes need some cleaning can't eat on a dirty plate",
        completed: false,
        _id: uuidv4()
    },
    {
        Name: "Homework",
        description: "Homework needs to be done. Otherwise I can't pass",
        completed: false,
        _id: uuidv4()
        
    },
    {
        Name: "Groceries",
        description: "Have to get some food in order to live",
        completed: false,
        _id: uuidv4()
        
    },
]

todoListRouter.post('/', (req,res) => {
    const newItem = req.body;
    newItem._id = uuidv4()
    todos.push(newItem)

    res.send('New item successfully added')
    console.log(todos)
})

todoListRouter.get('/', (req,res) => {
    res.send(todos)
})

todoListRouter.get('/:todoId', (req,res) => {
    const todoId = req.params.todoId;
    const singularItem = todos.find(todos => todos._id === todoId)

    res.send(singularItem)
})

todoListRouter.delete('/:todoId', (req,res) => {
    const todoId = req.params.todoId;
    const listIndex = todos.findIndex(todos => todos._id === todoId)
    todos.splice(listIndex, 1);

    res.send("Item successfully deleted")
})

todoListRouter.put('/:todoId',(req,res) => {
    const todoId = req.params.todoId;
    const listIndex = todos.findIndex(todos => todos._id === todoId) 
    Object.assign(todos[listIndex], req.body)

    res.send(`Item Updated`)
})


 module.exports = todoListRouter;