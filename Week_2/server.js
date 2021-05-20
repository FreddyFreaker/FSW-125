const express = require("express")
const app = express()

const PORT = 3000

let movies = [
    {name: '300', genre: 'action'},
    {name: 'happy feet', genre: 'kids'},
    {name: 'cars 2' ,genre: 'kids'},
];

let games = [
    {name:"Doom Eternal"},
    {name: 'Animal Crossing: New Horizons'},
    {name: "Final Fantasy 14"}
]

let drinks = [
    {name:'Pepsi'},
    {name:'Dr.Pepper'},
    {name:"Sprite"},
]

app.listen(PORT, () => {
    console.log('tester')
})

app.get('/', (req, res)=>{
    res.send("Hello World")
})

app.get('/movies', (req, res)=>{
    res.send(movies)
})

app.get('/games', (req, res)=>{
    res.send(games)
})

app.get('/drinks', (req, res)=>{
    res.send(drinks)
})