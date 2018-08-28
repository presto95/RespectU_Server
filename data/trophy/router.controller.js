const Trophy = require("./trophy")
const projection = { "_id": false, "title._id": false, "content._id": false }

function read(req, res) {
    const series = req.params.series
    Trophy.find({ series }, projection, (err, trophies) => {
        if(err) {
            return res.status(400).json({ error: "unknown error "})
        }
        if(trophies) {
            return res.status(200).json({ trophies: trophies })
        }
        return res.status(400).json({ error: "no data" })
    })
}

module.exports = { read }