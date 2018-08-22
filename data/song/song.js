const mongoose = require("mongoose")

const languageSchema = new mongoose.Schema({
    english: { type: String, required: true },
    korean: { type: String, required: true }
})

const buttonSchema = new mongoose.Schema({
    normal: { type: Number, default: 0, max: 15 },
    hard: { type: Number, default: 0, max: 15 },
    maximum: { type: Number, default: 0, max: 15 }
}, {
    versionKey: false
})

const schema = new mongoose.Schema({
    title: languageSchema,
    lowercase: { type: String, required: true },
    series: { type: String, required: true },
    composer: { type: String, required: true },
    bpm: { type: String, required: true },
    button4: buttonSchema,
    button5: buttonSchema,
    button6: buttonSchema,
    button8: buttonSchema
}, {
    versionKey: false
})

module.exports = mongoose.model("song", schema)