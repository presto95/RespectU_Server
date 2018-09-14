const Tip = require("./tip")
const projection = { "_id": false, "title._id": false }

function read(req, res) {
    Tip.find({}, projection, (err, tips) => {
        if(err) {
            return res.status(400).json({ error: "unknown error" })
        }
        if(tips) {
            return res.status(200).json({ tips: tips })
        }
        return res.status(404).json({ error: "no data" })
    })
}

module.exports = { read }