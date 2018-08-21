const Tip = require("./tip")

function fetch(req, res) {
    Tip.find({}, (err, results) => {
        if(err) {
            return res.status(404).json({ error: "no data" })
        }
        if(results) {
            return res.json(results)
        }
    })
}

module.exports = { fetch }