const Mission = require("./mission")
const projection = { "_id": false, "reward._id": false, "song1._id": false, "song2._id": false, "song3._id": false, "song4._id": false, "song5._id": false, "song6._id": false, "song1.title._id": false, "song2.title._id": false, "song3.title._id": false, "song4.title._id": false, "song5.title._id": false, "song6.title._id": false }

function read(req, res) {
    const series = req.params.series
    Mission.find({ series }, projection, (err, missions) => {
        if(err) {
            return res.status(400).json({ error: "unknown error" })
        }
        if(missions) {
            return res.status(200).json({ missions: missions })
        }
        return res.status(404).json({ error: "no data" })
    }) 
}

function readByReward(req, res) {
    const title = req.params.title
    const query = {
        $or: [{
            "reward.english": `Music : ${title}`
        }, {
            "reward.korean": `Music : ${title}`
        }
        ]
    }
    Mission.find(query, projection, (err, missions) => {
        if(err) {
            return res.status(400).json({ error: "unknown error" })
        }
        if(missions) {
            return res.status(200).json({ missions: missions })
        }
        return res.status(404).json({ error: "no data" })
    })
}

module.exports = { read, readByReward }