const mongoose = require("mongoose")

const languageSchema = new mongoose.Schema({
    english: { type: String, required: true },
    korean: { type: String, required: true }
})

const schema = new mongoose.Schema({
    section: languageSchema,
    level: { type: Number, required: true, max: 10 },
    type: { type: String, default: "" },
    item: languageSchema
}, {
    versionKey: false
})

module.exports = mongoose.model("achievement", schema)