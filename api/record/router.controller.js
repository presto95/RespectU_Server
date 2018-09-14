const Record = require("./record")

const projection = { "_id": false, "records._id": false, "records.title._id": false, "records.button4._id": false, "records.button5._id": false, "records.button6._id": false, "records.button8._id": false, "records.button4.normal._id": false, "records.button4.hard._id": false, "records.button4.maximum._id": false, "records.button5.normal._id": false, "records.button5.hard._id": false, "records.button5.maximum._id": false, "records.button6.normal._id": false, "records.button6.hard._id": false, "records.button6.maximum._id": false, "records.button8.normal._id": false, "records.button8.hard._id": false, "records.button8.maximum._id": false }

function readById(req, res) {
    const id = req.params.id
    Record.find({ id }, projection, (err, records) => {
        if(err) {
            return res.sendStatus(400)
        }
        if(records) {
            const record = records[0]
            return res.status(200).json(record)
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