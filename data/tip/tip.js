const mongoose = require("mongoose")

const schema = new mongoose.Schema({
    title: { type: String, required: true, unique: true }
}, {
    versionKey: false
})

module.exports = mongoose.model("tip", schema)