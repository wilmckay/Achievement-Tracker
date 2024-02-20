const mongoose = require('mongoose')

const achievementSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: String,
    game: { type: String, required: true },
    achievedDate: { type: Date, default: Date.now },
    gamerTag: { type: String, required: true }
})

module.exports = mongoose.model('Achievement', achievementSchema)
