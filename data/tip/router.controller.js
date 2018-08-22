const Tip = require("./tip")

function read(req, res) {
    Tip.find({}, (err, tips) => {
        if(err) {
            return res.status(400).json({ error: "unknown error" })
        }
        if(tips) {
            return res.status(200).json(tips)
        } else {
            return res.status(404).json({ error: "no data" })
        }
    })
}

module.exports = { read }