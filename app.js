const express = require("express")
const bodyParser = require("body-parser")
const path = require("path")
const app = express()
const database = require("./database")

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
//정적 이미지 폴더
app.use(express.static(path.join(__dirname, "public")))
//유저정보, 성과기록 / 랭킹
app.use("/users", require("./api/user/router"))
app.use("/rankings", require("./api/ranking/router"))
//가져오기만 하는 데이터
app.use("/songs", require("./data/song/router"))
app.use("/missions", require("./data/mission/router"))
app.use("/trophies", require("./data/trophy/router"))
app.use("/achievements", require("./data/achievement/router"))
app.use("/tips", require("./data/tip/router"))

app.listen(3000, () => {
    database()
    console.log("3000번 포트에서 서버 실행중...")
})

module.exports = app