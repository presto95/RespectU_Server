const mongoose = require("mongoose")

const schema = new mongoose.Schema({
    title: String,
    level: Number,
    type: String,
    item: String
})

module.exports = mongoose.model("achievement", schema)