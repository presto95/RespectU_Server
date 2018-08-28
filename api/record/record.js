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
    note: { type: String, default: "" },
    skillPoint: { type: Number, default: 0 }
}, {
    versionKey: false
})

const buttonSchema = new mongoose.Schema({
    normal: difficultySchema,
    hard: difficultySchema,
    maximum: difficultySchema,
    highestSkillPointDifficulty: { type: String, default: "" },
    highestSkillPointNote: { type: String, default: "" },
    highestSkillPointRate: { type: Number, default: 0, min: 0, max: 100 }
}, {
    versionKey: false
})

const recordSchema = new mongoose.Schema({
    title: languageSchema,
    button4: buttonSchema,
    button5: buttonSchema,
    button6: buttonSchema,
    button8: buttonSchema
}, {
    versionKey: false
})

const schema = new mongoose.Schema({
    uid: { type: String, required: true, unique: true },
    records: [recordSchema]
}, {
    versionKey: false
})

module.exports = mongoose.model("record", schema)