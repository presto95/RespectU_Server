const Trophy = require("./trophy")

function read(req, res) {
    const series = req.params.series
    Trophy.find({ series }, (err, trophies) => {
        if(err) {
            return res.status(400).json({ error: "unknown error "})
        }
        if(trophies) {
            return res.status(200).json(trophies)
        }
        return res.status(400).json({ error: "no data" })
    })
}

module.exports = { read }