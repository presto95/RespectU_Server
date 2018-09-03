const express = require("express")
const bodyParser = require("body-parser")
const path = require("path")
const session = require("express-session")
const passport = require("passport")
const LocalStrategy = require("passport-local").Strategy
const app = express()
const database = require("./database")

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(session({
    secret: "respectu",
    resave: false,
    saveUninitialized: true
}))
app.use(passport.initialize())
app.use(passport.session())
require("./api/auth/passport")()
//정적 이미지 폴더
app.use(express.static(path.join(__dirname, "public")))
//유저 관련
app.use("/users", require("./api/auth/router"))
//성과 기록
app.use("/records", require("./api/record/router"))
//가져오기만 하는 데이터 다섯
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