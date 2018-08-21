const mongoose = require("mongoose")

const schema = new mongoose.Schema({
    title: { type: String, required: true },
    level: { type: Number, required: true, max: 10 },
    type: { type: String, default: "" },
    item: { type: String, default: "" }
}, {
    versionKey: false
})

module.exports = mongoose.model("achievement", schema)