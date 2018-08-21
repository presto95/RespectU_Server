const mongoose = require("mongoose")
const schema = new mongoose.Schema({
    uid: { type: String, required: true, unique: true },
    userId: String,
    button4: Number,
    button5: Number,
    button6: Number,
    button8: Number,
    perfectPlay: Number,
    createdAt: { type: Number, index: { unique: false }, "default": Date.now },
    updatedAt: { type: Number, index: { unique: false }, "default": Date.now }
}, {
    versionKey: false
})

module.exports = mongoose.model("ranking", schema)