const User = require("./user")

//사용자가 생성되어 있는지 확인만 함
function read(req, res) {
    const uid = req.params.uid
    User.find({ uid }, (err, users) => {
        if(err) {
            res.status(400).json({ error: "unknown error" })
        }
        const length = users.length
        if(length === 0) {
            return res.status(404).json({ error: "no user" })
        } else if(length === 1) {
            return res.status(200)
        } else {
            return res.status(400).json({ error: "duplicated user" })
        }
    })
}

//사용자의 플레이리스트 가져옴
function readPlaylist(req, res) {
    const uid = req.params.uid

}

//사용자의 플레이리스트 업데이트
function uploadPlaylist(req, res) {
    User.find({ uid }, (err, results) => {

    })
}

//사용자의 플레이리스트 삭제
function deletePlaylist(req, res) {

}

//사용자의 성과 기록 가져옴
function readRecord(req, res) {

}

//사용자의 성과 기록 업데이트
function uploadRecord(req, res) {

}

//사용자의 닉네임(아이디) 업데이트
function uploadNickname(req, res) {

}

module.exports = { read, readPlaylist, uploadPlaylist, deletePlaylist, readRecord, uploadRecord, uploadNickname }