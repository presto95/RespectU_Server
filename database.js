const mongoose = require("mongoose")
const mongoDBUrl = "mongodb://localhost:27017/respectu"

module.exports = () => {
    function connect() {
        mongoose.connect(mongoDBUrl, { useNewUrlParser: true }, err => {
            if(err) throw err
            console.log("mongodb connected")
        })
    }
    connect()
    mongoose.connection.on("disconnected", connect)
}