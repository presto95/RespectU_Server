const mongoose = require("mongoose")

const languageSchema = new mongoose.Schema({
    english: { type: String, required: true },
    korean: { type: String, required: true }
})

const schema = new mongoose.Schema({
    title: languageSchema
}, {
    versionKey: false
})

module.exports = mongoose.model("tip", schema)