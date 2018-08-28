const Song = require("./song")
const projection = { "_id": false, "button4._id": false, "button5._id": false, "button6._id": false, "button8._id": false, "title._id": false }

function read(req, res) {
    Song.find({}, projection, (err, songs) => {
        if(err) {
            return res.status(400).json({ error: "unknown error" })
        }
        if(songs) {
            return res.status(200).json({ song: songs })
        }
        return res.status(404).json({ error: "no data" })
    })
}

function readBySeries(req, res) {
    const series = req.params.series
    Song.find({ series }, projection, (err, songs) => {
        if(err) {
            return res.status(400).json({ error: "unknown error" })
        }
        if(songs) {
            return res.status(200).json({ song: songs })
        }
        return res.status(404).json({ error: "no data" })
    })
}

//function 

module.exports = { read, readBySeries }