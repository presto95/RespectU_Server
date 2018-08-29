const Record = require("./record")

function readAll(req, res) {
    const uid = req.params.uid
    const id = req.params.id
    Record.find({ $or: [{ uid }, { id }]}, (err, records) => {
        if(err) {
            return res.status(400).json({ error: "unknown error" })
        }
        if(records) {
            return res.status(200).json(records)
        }
        return res.status(404).json({ error: "no data" })
    })
}

function readByTitle(req, res) {
    const uid = req.params.uid
    const id = req.params.id
    const title = req.params.title
    Record.find({ $or: [{ uid }, { id }], title }, (err, records) => {
        if(err) {
            return res.status(400).json({ error: "unknown error" })
        }
        if(records) {
            return res.status(200).json(records)
        }
        return res.status(404).json({ error: "no data" })
    })
}

function upload(req, res) {
    const uid = req.body.uid
    const id = req.body.id
    Record.find({ $or: [{ uid }, { id }]}, (err, records) => {
        if(err) {
            return res.status(400).json({ error: "unknown error" })
        }
        if(records.length !== 0) {
            //업로드
            const title = req.body.title
            const button4 = req.body.button4
            const button5 = req.body.button5
            const button6 = req.body.button6
            const button8 = req.body.button8
            let button
            if(button4) button = button4
            if(button5) button = button5
            if(button6) button = button6
            if(button8) button = button8
            let difficulty
            if(button.normal) difficulty = button.normal
            if(button.hard) difficulty = button.hard
            if(button.maximum) difficulty = button.maximum
            const rank = difficulty.rank
            const rate = difficulty.rate
            const note = difficulty.note
            if(rank) {
                Record.update({ $or: [{ uid }, { id }], title }, { $set: { "records.button4.normal.rank": rank }}, err => {
                    if(err) {
                        return res.status(400).json({ error: "unknown error" })
                    }
                    return res.sendStatus(201)
                })
            }
            if(rate) {

            }
            if(note) {

            }

            return res.sendStatus(201)
        } else {
            //유저 레코드에 등록 후 업로드
            const record = new Record({
                uid, id
            })
            record.save(err => {
                if(err) {
                    return res.status(400).json({ error: "unknown error" })
                }
                return upload(req, res)
            })
        }
    })
}

module.exports = { readAll, readByTitle, upload }