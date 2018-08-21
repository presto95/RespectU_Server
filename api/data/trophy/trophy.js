const mongoose = require("mongoose")

const trophySchema = new mongoose.Schema({
    title: { type: String, required: true },
    content: { type: String, required: true }
})

const schema = new mongoose.Schema({
    series: { type: String, required: true },
    rating: String,
    korean: trophySchema,
    english: trophySchema,
})

module.exports = mongoose.model("trophy", schema)