const Achievement = require("./achivement")

function read(req, res) {
    Achievement.find({}, { "_id": false, "section._id": false, "item._id": false }, (err, achievements) => {
        if(err) {
            return res.status(400).json({ error: "unknown error" })
        }
        if(achievements) {
            return res.status(200).json(achievements)
        }
        return res.status(404).json({ error: "no data" })
    })
}

function readByType(req, res) {
    const type = req.params.type
    Achievement.find({ type }, { "_id": false, "section._id": false, "item._id": false }, (err, achievements) => {
        if(err) {
            return res.status(400).json({ error: "unknown error" })
        }
        if(achievements) {
            return res.status(200).json(achievements)
        }
        return res.status(404).json({ error: "no data" })
    })
}



module.exports = { read, readByType }