const mongoose = require("mongoose")

const languageSchema = new mongoose.Schema({
    english: { type: String, required: true },
    korean: { type: String, required: true }
})

const songSchema = new mongoose.Schema({
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
    reward: { type: String, default: "" },
    song1: songSchema,
    song2: songSchema,
    song3: songSchema,
    song4: songSchema,
    song5: songSchema,
    song6: songSchema
}, {
    versionKey: false
})

module.exports = mongoose.model("mission", schema)