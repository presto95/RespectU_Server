const mongoose = require("mongoose")

const schema = new mongoose.Schema({
    id: { type: String, required: true },
    password: { type: String, required: true },
    nickname: String
}, {
    versionKey: false
})

module.exports = mongoose.model("user", schema)
