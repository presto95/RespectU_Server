const passport = require("passport")
const User = require("./user")

function login(req, res) {
    passport.authenticate("local", {
       failureFlash: false,
       successFlash: false 
    }, (req, res) => {
        //인증 성공
        console.log("login!")
        res.sendStatus(200)
    })
}

function create(req, res) {
    //유저 있으면 이미 있다고 알려주기, 없으면 문서객체 생성
    const body = req.body
    const id = body.id
    const password = body.password
    const nickname = body.nickname
    User.find({ id }, (err, users) => {
        if(users.length === 0) {
            const user = new User({ id, password, nickname })
            user.save(err => {
                if(err) {
                    res.sendStatus(400)
                }
                res.sendStatus(201)
            })
        } else {
            res.sendStatus(409)
        }
    })
}

module.exports = { login, create }