const crypto = require("crypto")
const User = require("./user")

function login(req, res) {
    const body = req.body
    const id = body.id
    const password = body.password
    const encrypted = crypto.createHash("sha256").update(password).digest("base64")
    User.findOne({ id, password: encrypted }, { _id: false }, (err, user) => {
        if(err) {
            return res.sendStatus(400)
        }
        if(user) {
            return res.sendStatus(200)
        }
        return res.sendStatus(404)
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
            //비밀번호 암호화
            const encrypted = crypto.createHash("sha256").update(password).digest("base64")
            const user = new User({ id, password: encrypted, nickname })
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

function readNickname(req, res) {
    const id = req.params.id
    User.findOne({ id }, (err, user) => {
        if(err) {
            return res.sendStatus(400)
        }
        if(user) {
            return res.status(200).json({ nickname: user.nickname })
        }
        return res.sendStatus(404)
    })
}

function updateNickname(req, res) {
    const nickname = req.body.nickname
    const id = req.body.id
    User.findOne({ id }, (err, user) => {
        if(err) {
            return res.sendStatus(400)
        }
        if(user) {
            User.updateOne({ id }, { $set: { nickname }}, (err, raw) => {
                if(err) {
                    return res.sendStatus(400)
                }
                return res.status(201).json({ nickname })
            })
        }
        return res.sendStatus(404)
    })
}

module.exports = { login, create, readNickname, updateNickname }