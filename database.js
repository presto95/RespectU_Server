const mongoose = require("mongoose")
//서버 배포하면 url 변경
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