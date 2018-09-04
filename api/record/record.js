const mongoose = require("mongoose")

const languageSchema = new mongoose.Schema({
    english: { type: String, required: true },
    korean: String
}, {
    versionKey: false
})

const difficultySchema = new mongoose.Schema({
    rank: { type: String, default: "" },
    rate: { type: Number, default: 0, min: 0, max: 100 },
    note: { type: String, default: "" }
}, {
    versionKey: false
})

const buttonSchema = new mongoose.Schema({
    normal: difficultySchema,
    hard: difficultySchema,
    maximum: difficultySchema,
    skillPoint: { type: Number, default: 0 },
    skillPointDifficulty: { type: String, default: "" },
    skillPointNote: { type: String, default: "" },
    skillPointRate: { type: Number, default: 0, min: 0, max: 100 }
}, {
    versionKey: false
})

const recordSchema = new mongoose.Schema({
    title: languageSchema,
    series: String,
    button4: buttonSchema,
    button5: buttonSchema,
    button6: buttonSchema,
    button8: buttonSchema
}, {
    versionKey: false
})

const schema = new mongoose.Schema({
    id: { type: String, required: true, unique: true },
    records: [recordSchema],
    perfectPlays: { type: Number, default: 0 }
}, {
    versionKey: false
})

module.exports = mongoose.model("record", schema)