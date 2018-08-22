const mongoose = require("mongoose")

const languageSchema = new mongoose.Schema({
    english: { type: String, required: true },
    korean: String
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
    lowercase: languageSchema,
    series: { type: String, required: true },
    composer: { type: String, required: true },
    bpm: { type: Number, required: true },
    subBpm: { type: Number, default: 0 },
    button4: { type: buttonSchema, required: true },
    button5: { type: buttonSchema, required: true },
    button6: { type: buttonSchema, required: true },
    button8: { type: buttonSchema, required: true }
}, {
    versionKey: false
})

module.exports = mongoose.model("song", schema)