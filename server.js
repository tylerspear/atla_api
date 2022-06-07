const { response } = require('express')
const { request } = require('express')
const express = require('express')
const app = express()
const PORT = 8000
const chars = [
    {
        'name': 'aang',
        'id': 1,
        'nation': 'Air Nomads',
        'bender': true,
        'bending-abilities': ['air', 'earth', 'fire', 'water']
    },
    {
        'name': 'katara',
        'id': 2,
        'nation': 'Southern Water Tribe',
        'bender': true,
        'bending-abilities': ['water', 'blood']
    },
    {
        'name': 'appa',
        'id': 3,
        'nation': 'Air Nomads',
        'bender': false,
        'bending-abilities': []
    },
    {
        'name': 'sokka',
        'id': 4,
        'nation': 'Southern Water Tribe',
        'bender': false,
        'bending-abilities': []
    }
]
app.get('/', (request,response)=>{
    response.sendFile(__dirname + '/index.html')
})

app.get('/api', (request, response)=> {
    response.json(chars)
})

app.get('/api/:name', (request, response)=> {
    let charName = request.params.name.toLowerCase()
    let found = chars.find(obj => obj.name === charName)
    response.json(found)
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`server running on port ${process.env.PORT || PORT}`)
})