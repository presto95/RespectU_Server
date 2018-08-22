const Mission = require("./mission")

function read(req, res) {
    const series = req.params.series
    Mission.find({ series }, (err, missions) => {
        if(err) {
            return res.status(400).json({ error: "unknown error" })
        }
        if(missions) {
            return res.status(200).json(missions)
        }
        return res.status(404).json({ error: "no data" })
    }) 
}

module.exports = { read }