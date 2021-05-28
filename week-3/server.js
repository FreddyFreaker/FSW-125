const express = require('express')
const bountyRouter = require('./bounty')
const app = express()
const {v4:uuidv4} = require('uuid')

const PORT = 3000



app.use('/bounties', bountyRouter)

app.listen(PORT, () => {
    console.log('tester')
})


