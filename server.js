const express = require('express')

const app = express()

app.listen(3000, () => {
  })


// 1.  
app.get('/greetings/:usernameParam', (req, res) => {
    res.send(`Hello ${req.params.usernameParam}, I hope you are having a wonderful day!`)
})

// 2. 
app.get('/roll/:numParam', (req, res) => {
    const num = parseInt(req.params.numParam)

    if (isNaN(num)) {
        return res.send('You must specify a number.')
    }    
    const randomNum = Math.floor(Math.random() * num + 1)
    
    res.send(`You rolled a ${randomNum}.`)
})

//3. 
const collectibles = [
    { name: 'shiny ball', price: 5.95 },
    { name: 'autographed picture of a dog', price: 10 },
    { name: 'vintage 1970s yogurt SOLD AS-IS', price: 0.99 }
  ];

app.get('/collectibles/:indexParam', (req, res) => {
 
    const index = parseInt(req.params.indexParam)
    
    if (index >= collectibles.length || index < 0 || isNaN(index)) {
        return res.send('This item is not yet in stock. Check back soon!')
    }
    const item = collectibles[index]

    res.send(`So, you want the ${item.name}? For $${item.price}, it could be yours!`)
})

// 4.

const shoes = [
    { name: "Birkenstocks", price: 50, type: "sandal" },
    { name: "Air Jordans", price: 500, type: "sneaker" },
    { name: "Air Mahomeses", price: 501, type: "sneaker" },
    { name: "Utility Boots", price: 20, type: "boot" },
    { name: "Velcro Sandals", price: 15, type: "sandal" },
    { name: "Jet Boots", price: 1000, type: "boot" },
    { name: "Fifty-Inch Heels", price: 175, type: "heel" }
];

app.get('/shoes', (req, res) => {
    let filteredShoes = shoes
    const {minPrice, maxPrice, type} = req.query
    console.log(minPrice)

    if (minPrice) {
        filteredShoes = filteredShoes.filter((shoe) => {
            return shoe.price >= parseInt(minPrice)
        })
    }
    
    if (maxPrice) {
        filteredShoes = filteredShoes.filter((shoe) => {
            return shoe.price <= parseInt(maxPrice)
        })
    }

    if (type) {
        filteredShoes = filteredShoes.filter((shoe) => {
            return shoe.type === type
        })
    }
    res.send(filteredShoes)


})