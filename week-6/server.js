const express = require('express')
const app = express()

const PORT= 3000

app.listen(PORT, () => {
    console.log(`Connected to port ${PORT}` )

})



app.get('/', (req,res) => {
    res.send(inventoryItems)
})

app.get('/inventory', (req,res) => {
    const {name, type, price} = req.query;
    let results = [...inventoryItems]

    if(name) {
        results = results.filter(r => r.name === name)
    }
    if (type) {
        results = results.filter(r => r.type === type)
    }
    if(price) {
        results = results.filter(r => +r.price === price)
    }
    res.json(results)
})




const inventoryItems= [
    {
        name: "banana" ,
        type: "food",
        price: 200,
    },
    {
        name: "pants",
        type: "clothing",
        price: 200,
    },
    {
        name: "basket ball",
        type: "toy",
        price: 1000,
    },
    {
        name: "rockem sockem robots" ,
        type:  "toy",
        price: 1500,
    },
    {
        name: "shirt",
        type: "toy",
        price:1500,
    },
    {
        name: "soup",
        type: "clothing",
        price:800,
    },{
        name: "flour",
        type: "food",
        price: 100,
    },
]

