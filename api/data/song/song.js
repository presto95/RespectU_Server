const mongoose = require("mongoose")

const buttonSchema = new mongoose.Schema({
    normal: Number,
    hard: Number,
    maximum: Number
})

const schema = new mongoose.Schema({
    title: { type: String, required: true, unique: true },
    lowercase: { type: String, required: true },
    series: { type: String, required: true },
    composer: { type: String, required: true },
    bpm: { type: String, required: true },
    button4: buttonSchema,
    button5: buttonSchema,
    button6: buttonSchema,
    button8: buttonSchema
})

module.exports = mongoose.model("song", schema)