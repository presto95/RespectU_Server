const mongoose = require("mongoose")

const difficultySchema = new mongoose.Schema({
    rank: String,
    rate: Number,
    note: String,
    level: Number
})

const buttonSchema = new mongoose.Schema({
    normal: difficultySchema,
    hard: difficultySchema,
    maximum: difficultySchema,
    skillPoint: Number,
    highestSkillPointLevel: Number,
    highestSkillPointRate: Number,
    highestSkillPointNote: String
})

const recordSchema = new mongoose.Schema({
    title: { type: String, required: true, unique: true },
    lowercase: { type: String, required: true },
    series: { type: String, required: true },
    button4: buttonSchema,
    button5: buttonSchema,
    button6: buttonSchema,
    button8: buttonSchema
})

const schema = new mongoose.Schema({
    uid: { type: String, required: true, unique: true },
    nickname: String,
    password: { type: String, required: true },
    record: [recordSchema]
})

module.exports = mongoose.model("user", schema)