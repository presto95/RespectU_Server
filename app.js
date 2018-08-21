const express = require("express")
const bodyParser = require("body-parser")
const app = express()
const database = require("./database")

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use("/user", require("./api/user/router"))
app.use("/ranking", require("./api/ranking/router"))

app.listen(3000, () => {
    database()
    console.log("3000번 포트에서 서버 실행중...")
})

module.exports = app