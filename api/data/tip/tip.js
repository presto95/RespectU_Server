const mongoose = require("mongoose")

const schema = new mongoose.Schema({
    title: { type: String, required: true, unique: true }
})

module.exports = mongoose.model("tip", schema)