const express = require('express')
const mongoose = require('mongoose')
const Achievement = require('./models/Achievement')

const app = express()

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

mongoose.connect('mongodb://localhost/videoGameAchievements', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Could not connect to MongoDB', err))

const PORT = process.env.PORT || 3001
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
