const Mission = require("./mission")

function read(req, res) {
    const series = req.params.series
    Mission.find({ series }, { "_id": false, "reward._id": false, "song1._id": false, "song2._id": false, "song3._id": false, "song4._id": false, "song5._id": false, "song6._id": false, "song1.title._id": false, "song2.title._id": false, "song3.title._id": false, "song4.title._id": false, "song5.title._id": false, "song6.title._id": false }, (err, missions) => {
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