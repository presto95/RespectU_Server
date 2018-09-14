const Ranking = require("./ranking")
const projection = { "_id": false }

function read(req, res) {
    Ranking.find({}, projection, (err, rankings) => {
        if(err) {
            return res.sendStatus(400)
        }
        if(rankings) {
            return res.status(200).json({ rankings })
        }
        return res.sendStatus(404)
    })
}

function upload(req, res) {
    const body = req.body
    const id = body.id
    const nickname = body.nickname
    const button4 = body.button4
    const button5 = body.button5
    const button6 = body.button6
    const button8 = body.button8
    let ranking = new Ranking({ 
        id, nickname, button4, button5, button6, button8
    })
    Ranking.find({ id }, (err, rankings) => {
        if(err) {
            return res.sendStatus(400)
        }
        if(rankings.length === 0) {
            ranking.save(err => {
                if(err) {
                    return res.sendStatus(400)
                }
                return res.sendStatus(201)
            })
        } else {
            Ranking.remove({ id }, err => {
                if(err) {
                    return res.sendStatus(400)
                }
                ranking.save(err => {
                    if(err) {
                        return res.sendStatus(400)
                    }
                    return res.sendStatus(201)
                })
            })
        }
    })
}

module.exports = { read, upload }