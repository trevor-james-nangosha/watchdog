//handling the imports
// import express from 'express'
// import session from 'express-session'
// import cors from 'cors'
// import mongoose from 'mongoose'
// import connectDB from './config/dbConn'

//shift + tab is the opposite of tab

const express = require('express')
const session = require('express-session')
const cors = require('cors')
const mongoose = require('mongoose')
const connectDB = require('./config/dbConn')
const MongoStore = require('connect-mongo')

//defining the constants and variables
const app = express()
const PORT = process.env.PORT || 3000

//using the middleware
app.use(express.json())
app.use(express.urlencoded())
app.use(cors({
    origin: "http://127.0.0.1:5500"
}))
app.use(session({
    secret: "nangosha trevor james",
    store: MongoStore.create({
        mongoUrl: 'mongodb://localhost/sessionsDB',
        collection: 'sessions'
    }),
    saveUninitialized: true,
    resave: false,
    cookie: {
        maxAge: 24*60*60*1000 //equals one day
    }
}))

//connect to the mongoDB
connectDB();

//the routes
app.get('/', (req, res) => {
    res.send("home page.....")
})

app.get('/login', (req, res) => {
    res.send("you have logged in........")
})

app.get('/data', (req, res) => {
    res.json({name: "trevor", interests: "technology"})
})

mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB........')
    app.listen(PORT, () => {
        console.log(`server is now open on port ${PORT}......`)
    })    
})
