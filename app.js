const express = require("express")
const bodyParser = require("body-parser")
const path = require("path")
const session = require("express-session")
const app = express()
const database = require("./database")

app.use(bodyParser.json({ limit: "1mb" }))
app.use(bodyParser.urlencoded({ limit: "1mb", extended: true }))
//정적 이미지 폴더
app.use(express.static(path.join(__dirname, "public")))
app.use("/version", require("./api/version/router"))
app.use("/users", require("./api/auth/router"))
app.use("/records", require("./api/record/router"))
app.use("/rankings", require("./api/ranking/router"))
app.use("/songs", require("./api/song/router"))
app.use("/missions", require("./api/mission/router"))
app.use("/trophies", require("./api/trophy/router"))
app.use("/achievements", require("./api/achievement/router"))
app.use("/tips", require("./api/tip/router"))

app.listen(3000, () => {
    database()
    console.log("3000번 포트에서 서버 실행중...")
})

module.exports = app