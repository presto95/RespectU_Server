const mongoose = require("mongoose")
const schema = new mongoose.Schema({
    uid: { type: String, required: true, unique: true },
    userId: { type: String, required: true },
    button4: { type: Number, default: 0 },
    button5: { type: Number, default: 0 },
    button6: { type: Number, default: 0 },
    button8: { type: Number, default: 0 },
    perfectPlay: { type: Number, default: 0},
    createdAt: { type: Number, index: { unique: false }, default: Date.now },
    updatedAt: { type: Number, index: { unique: false }, default: Date.now }
}, {
    versionKey: false
})

module.exports = mongoose.model("ranking", schema)