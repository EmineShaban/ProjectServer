const express = require('express')
const cors = require('./middlewares/cors')

const app = express()

// app.use(express.static('static'))
app.use(express.json())
app.use(cors())



app.listen(3000, () => console.log('REST service started!'))