const mongoose = require("mongoose")

const trophySchema = new mongoose.Schema({
    title: { type: String, required: true },
    content: { type: String, required: true }
}, {
    versionKey: false
})

const schema = new mongoose.Schema({
    series: { type: String, required: true },
    rating: { type: String, required: true },
    korean: trophySchema,
    english: trophySchema,
}, {
    versionKey: false
})

module.exports = mongoose.model("trophy", schema)