const Mission = require("./mission")
const projection = { "_id": false, "reward._id": false, "stage1._id": false, "stage2._id": false, "stage3._id": false, "stage4._id": false, "stage5._id": false, "stage6._id": false, "stage1.title._id": false, "stage2.title._id": false, "stage3.title._id": false, "stage4.title._id": false, "stage5.title._id": false, "stage6.title._id": false }

function read(req, res) {
    Mission.find({}, projection, (err, missions) => {
        if(err) {
            return res.sendStatus(400)
        }
        if(missions) {
            return res.status(200).json({ missions })
        }
        return res.sendStatus(404)
    })
}

function readBySeries(req, res) {
    const series = req.params.series
    Mission.find({ series }, projection, (err, missions) => {
        if(err) {
            return res.status(400).json({ error: "unknown error" })
        }
        if(missions) {
            return res.status(200).json({ missions })
        }
        return res.status(404).json({ error: "no data" })
    }) 
}

module.exports = { read, readBySeries }