const express = require('express')
const cors = require('cors');
const { db } = require('./db/db'); 
const {readdirSync} = require('fs');
const { route } = require('./routes/transactions');
require('dotenv').config()

const app = express()
const PORT = process.env.PORT

// Middleware
app.use(express.json())
app.use(cors())

//Routes
readdirSync('./routes').map((route) => app.use('/api/v1', require('./routes/' + route)))


const served = () => {
    db()
    app.listen(PORT, () => {
        console.log('listening to port:', PORT)
    })
}

server()