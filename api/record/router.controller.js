const Record = require("./record")

function readById(req, res) {
    const id = req.params.id
    Record.find({ id }, (err, records) => {
        if(err) {
            return res.sendStatus(400)
        }
        if(records) {
            return res.status(200).json({ records: records })
        }
        return res.sendStatus(404)
    })
}

function upload(req, res) {
    const body = req.body
    const id = body.id
    const records = body.records
    let record = new Record({
        id, records
    })
    record.save(err => {
        if(err) {
            return res.sendStatus(400)
        }
        return res.sendStatus(201)
    })
}

module.exports = { readById, upload }