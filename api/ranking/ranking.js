const mongoose = require("mongoose")

const schema = new mongoose.Schema({
    id: { type: String, required: true, unique: true },
    nickname: String,
    button4: Number,
    button5: Number,
    button6: Number,
    button8: Number,
}, {
    versionKey: false
})

module.exports = mongoose.model("ranking", schema)