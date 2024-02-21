const mongoose = require('mongoose')
const Game = require('../models/Game')

mongoose.connect('mongodb://localhost/videoGameAchievements', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to MongoDB')

        const gamesData = [
            { title: 'The Legend of Zelda: Breath of the Wild' },
            { title: 'Red Dead Redemption 2' },
            { title: 'The Witcher 3: Wild Hunt (Complete Edition)' },
            { title: 'Overwatch 2' },
            { title: 'Stardew Valley' },
            { title: 'Elden Ring' },
        ]

        Game.insertMany(gamesData)
            .then(() => console.log('Games seeded successfully'))
            .catch(err => console.error('Error seeding games:', err))
            .finally(() => mongoose.disconnect())
    })
    .catch(err => console.error('Could not connect to MongoDB', err))