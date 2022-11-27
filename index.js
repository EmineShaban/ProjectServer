const express = require('express')
const { default: mongoose } = require('mongoose')
const cors = require('./middlewares/cors')

const connectionString = 'mongoodb://localhost:27027/Project'

start()

async function start(){
mongoose.connect()
const app = express()

// app.use(express.static('static'))
app.use(express.json())
app.use(cors())

app.listen(3000, () => console.log('REST service started!'))
}