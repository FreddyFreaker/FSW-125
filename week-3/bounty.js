const express = require('express')
const bountyRouter = express.Router()
const {v4:uuidv4} = require('uuid')





let bounties = [
    {
        FirstName: "Darth Quan",
        LastName: "Grungo",
        Living: true,
        Worth: 5000,
        Type: "Sith",
        _id: uuidv4()
        
    },
    {
        FirstName: "Quigon",
        LastName: "Jin",
        Living: false,
        Worth: 10000,
        Type: "Jedi",
        _id: uuidv4()
    },
    {
        FirstName: "Han",
        LastName: "Solo",
        Living: false,
        Worth: 20000,
        Type: "Jedi",
        _id: uuidv4()
        
    },
    {
        FirstName: "Luke",
        LastName: "Skywalker",
        Living: false,
        Worth: 500000,
        Type: "Jedi",
        _id: uuidv4()
        
    },
]



bountyRouter.post('/', (req,res) => {
    const newBounty = req.body;
    newBounty._id = uuidv4()
    bounties.push(newBounty)

    res.send('New bounty successfully added')
    console.log(bounties)
})

bountyRouter.get('/', (req,res) => {
    res.send(bounties)
})

bountyRouter.get('/:bountyId', (req,res) => {
    const bountyId = req.params.bountyId;
    const singularBounty = bounties.find(bounty => bounty._id === bountyId)

    res.send(singularBounty)
})

bountyRouter.delete('/:bountyId', (req,res) => {
    const bountyId = req.params.bountyId;
    const bountyIndex = bounties.findIndex(bounty => bounty._id === bountyId)
    bounties.splice(bountyIndex, 1);

    res.send("Bounty successfully deleted")
})

bountyRouter.put('/:bountyId',(req,res) => {
    const bountyId = req.params.bountyId;
    const bountyIndex = bounties.findIndex(bounty => bounty._id === bountyId) 
    Object.assign(bounties[bountyIndex], req.body)

    res.send(`Bounty Updated`)
})


 module.exports = bountyRouter;