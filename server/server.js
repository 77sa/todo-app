require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express()

// db
mongoose.connect(process.env.MONGO_URI)
const db = mongoose.connection
db.on('error', (err) => console.log(err))
db.once('open', () => console.log('Database connected'))

// middleware
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}))
app.use(express.json())
app.use(express.urlencoded({extended:false}))

// routes
app.use('/api/posts', require('./routes/api/posts'))

const PORT = process.env.PORT || 4000
app.listen(PORT, () => console.log('Server started'))