const mongoose = require("mongoose")

const difficultySchema = new mongoose.Schema({
    rank: { type: String, default: "" },
    rate: { type: Number, default: 0, min: 0, max: 100 },
    note: { type: String, default: "" },
    level: { type: Number, default: 0, max: 15 }
}, {
    versionKey: false
})

const buttonSchema = new mongoose.Schema({
    normal: difficultySchema,
    hard: difficultySchema,
    maximum: difficultySchema,
    skillPoint: { type: Number, default: 0 },
    highestSkillPointLevel: { type: Number, default: 0 },
    highestSkillPointRate: { type: Number, default: 0 },
    highestSkillPointNote: { type: String, default: "" }
}, {
    versionKey: false
})

const recordSchema = new mongoose.Schema({
    title: { type: String, required: true, unique: true },
    lowercase: { type: String, required: true },
    series: { type: String, required: true },
    button4: buttonSchema,
    button5: buttonSchema,
    button6: buttonSchema,
    button8: buttonSchema
}, {
    versionKey: false
})

const schema = new mongoose.Schema({
    uid: { type: String, required: true, unique: true },
    nickname: { type: String, required: true },
    password: { type: String, required: true },
    record: [recordSchema]
}, {
    versionKey: false
})

module.exports = mongoose.model("user", schema)