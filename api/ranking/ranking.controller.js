const Ranking = require("./rankingModel")

//CREATE
function upload(req, res) {
    const body = req.body
    const uid = body.uid
    const userId = body.userId
    const button4 = body.button4
    const button5 = body.button5
    const button6 = body.button6
    const button8 = body.button8
    const perfectPlay = body.perfectPlay
    Ranking.find({}, (err, results) => {
        if(err) {
            return res.status(400).json({ error: "unknown error" })
        }
        if(results) {
            let filtered = results.filter(item => {
                return item.uid === uid
            })
            let length = filtered.length
            console.log(`duplicated data: ${length}`)
            if(length === 0) {
                console.log("create")
                const model = new Ranking({
                    uid, userId, button4, button5, button6, button8, perfectPlay
                })
                model.save((err, result) => {
                    if(err) {
                        return res.status(400).json({ error: "unknown error" })
                    }
                    return res.sendStatus(200)
                })
            } else if(length === 1) {
                console.log("update")
                return update(req, res)
            } else {
                console.log("duplicated ranking data")
                return res.status(500).json({ error: "duplicated data" })
            }
        }
    })
}

//READ
function fetch(req, res) {
    Ranking.find({}, (err, results) => {
        if(err) {
            return res.status(404).json({ error: "no data" })
        }
        if(results) {
            return res.json(results)
        } 
    })
}

//UPDATE
function update(req, res) {
    const body = req.body
    const uid = body.uid
    const button4 = body.button4
    const button5 = body.button5
    const button6 = body.button6
    const button8 = body.button8
    const perfectPlay = body.perfectPlay
    const updateObject = {
        button4,
        button5,
        button6,
        button8,
        perfectPlay,
        updatedAt: Date.now
    }
    Ranking.findOneAndUpdate({ uid }, updateObject, { new: true }, err => {
        if(err) {
            return res.status(400).json({ error: "unknown error" })
        }
        return res.sendStatus(200)
    })
}

module.exports = { fetch, upload }