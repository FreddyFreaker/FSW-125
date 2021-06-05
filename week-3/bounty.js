const express = require('express')
const bountyRouter = express.Router()
const {v4:uuidv4} = require('uuid')





let bounties = [
    {
        Name: "Darth Quan",
        lastName: "Grungo",
        Living: true,
        Worth: 5000,
        Type: "Sith",
        _id: uuidv4()
        
    },
    {
        Name: "Quigon",
        lastName: "Jin",
        Living: false,
        Worth: 10000,
        Type: "Jedi",
        _id: uuidv4()
    },
    {
        Name: "Han",
        lastName: "Solo",
        Living: false,
        Worth: 20000,
        Type: "Jedi",
        _id: uuidv4()
        
    },
    {
        Name: "Luke",
        lastName: "Skywalker",
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