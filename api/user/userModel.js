const mongoose = require("mongoose")
const schema = new mongoose.Schema({
    id: String,
    password: String,
    uid: { type: String, required: true, unique: true },
    userId: String,
})