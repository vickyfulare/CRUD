//console.log('Server running properly')
const express = require('express')
const mongoose = require('mongoose')
const path = require('path')
require('dotenv').config();
const { connectMongoDb } = require('./connection')
    //const bodyParser = require('body-parser')
const app = express()
const userRouter = require('./routes/users')
const viewsPath = path.join(__dirname, 'views');
app.set('view engine', 'ejs')
app.use(express.json())
    //app.use(bodyParser)
app.use(express.urlencoded({ extended: true }))
app.use('/', userRouter)
    //app.use('/data', userRouter)
PORT = process.env.PORT

// Connect with mongodb
connectMongoDb("mongodb://localhost:27017/e-comm").then(() =>
    console.log("Connected with mongodb")
)

app.listen(PORT, () => {
    console.log(`Server started at port ${PORT}`)
})