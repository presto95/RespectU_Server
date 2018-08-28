const express = require("express")
const bodyParser = require("body-parser")
const path = require("path")
const session = require("express-session")
const passport = require("passport")
const passportConfig = require("./api/user/passport")
const app = express()
const database = require("./database")

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(session({
    secret: "respectu",
    resave: true,
    saveUninitialized: false
}))
app.use(passport.initialize())
app.use(passport.session())
//정적 이미지 폴더
app.use(express.static(path.join(__dirname, "public")))
//사용자 정보, 성과 기록
app.use("/users", require("./api/user/router"))
app.use("/records", require("./api/record/router"))
//가져오기만 하는 데이터 다섯 개
app.use("/songs", require("./data/song/router"))
app.use("/missions", require("./data/mission/router"))
app.use("/trophies", require("./data/trophy/router"))
app.use("/achievements", require("./data/achievement/router"))
app.use("/tips", require("./data/tip/router"))

app.listen(3000, () => {
    database()
    passportConfig()
    console.log("3000번 포트에서 서버 실행중...")
})

module.exports = app