const express = require("express")
const bodyParser = require("body-parser")
const app = express()
const database = require("./database")

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
//유저정보, 성과기록 / 랭킹 / 플레이리스트
app.use("/user", require("./api/user/router"))
app.use("/ranking", require("./api/ranking/router"))
app.use("/playlist", require("./api/user/playlist/router"))
//가져오기만 하는 데이터
app.use("/song", require("./data/achievement/router"))
app.use("/mission", require("./data/mission/router"))
app.use("/trophy", require("./data/trophy/router"))
app.use("/achievement", require("./data/achievement/router"))
app.use("/tip", require("./data/tip/router"))

app.listen(3000, () => {
    database()
    console.log("3000번 포트에서 서버 실행중...")
})

module.exports = app