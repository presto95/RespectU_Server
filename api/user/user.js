const mongoose = require("mongoose")

const schema = new mongoose.Schema({
    uid: { type: String, required: true, unique: true },
    nickname: String,
    identifier: { type: String, required: true, unique: true },
    password: { type: String, required: true }
}, {
    versionKey: false
})

schema.methods.comparePassword = function(password, callback) {
    if(password === this.password) {
        callback(null, true)
    } else {
        callback("error")
    }
}

module.exports = mongoose.model("user", schema)