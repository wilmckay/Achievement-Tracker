const express = require('express')
const connectDB = require('./db')
const mongoose = require('mongoose')
const axios = require('axios')
const Achievement = require('./models/Achievement')

const app = express()

connectDB()

// middleware
app.use(express.json())

// routes
app.get('/', async (req, res) => {
    try {
        const achievements = await Achievement.find()
        res.json(achievements)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

app.get('/games', async (req, res) => {
    try {
        const games = await Game.find({}, 'title')
        res.json(games)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
