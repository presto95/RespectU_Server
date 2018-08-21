const mongoose = require("mongoose")

const songSchema = new mongoose.Schema({
    title: String,
    difficulty: String,
    button: String
})

const schema = new mongoose.Schema({
    series: { type: String, required: true },
    section: { type: String, required: true },
    title: { type: String, required: true, unique: true },
    score: Number,
    fever: Number,
    combo: Number,
    rate: Number,
    break: Number,
    options: String,
    reward: String,
    song1: songSchema,
    song2: songSchema,
    song3: songSchema,
    song4: songSchema,
    song5: songSchema,
    song6: songSchema
})

module.exports = mongoose.model("mission", schema)