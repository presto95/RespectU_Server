const mongoose = require("mongoose")

const languageSchema = new mongoose.Schema({
    english: { type: String, required: true },
    korean: String
})

const schema = new mongoose.Schema({
    series: { type: String, required: true },
    rating: { type: String, required: true },
    image: { type: String, required: true },
    title: languageSchema,
    content: languageSchema
}, {
    versionKey: false
})

module.exports = mongoose.model("trophy", schema)