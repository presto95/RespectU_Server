const mongoose = require("mongoose")

const languageSchema = new mongoose.Schema({
    english: { type: String, default: "" },
    korean: String
})

const stageSchema = new mongoose.Schema({
    title: languageSchema,
    difficulty: { type: String, default: "" },
    button: { type: String, default: "" }
}, {
    versionKey: false
})

const schema = new mongoose.Schema({
    series: { type: String, required: true },
    section: { type: String, required: true },
    title: { type: String, required: true, unique: true },
    score: { type: Number, default: 0 },
    fever: { type: Number, default: 0 },
    combo: { type: Number, default: 0 },
    rate: { type: Number, default: 0 },
    break: { type: Number, default: 0 },
    effector: { type: String, default: "" },
    reward: languageSchema,
    song1: stageSchema,
    song2: stageSchema,
    song3: stageSchema,
    song4: stageSchema,
    song5: stageSchema,
    song6: stageSchema
}, {
    versionKey: false
})

module.exports = mongoose.model("mission", schema)