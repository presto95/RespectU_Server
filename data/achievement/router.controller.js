const Achievement = require("./achivement")
const projection = { "_id": false, "section._id": false, "item._id": false }

function read(req, res) {
    Achievement.find({}, projection, (err, achievements) => {
        if(err) {
            return res.status(400).json({ error: "unknown error" })
        }
        if(achievements) {
            return res.status(200).json({ achievement: achievements })
        }
        return res.status(404).json({ error: "no data" })
    })
}

function readByType(req, res) {
    const type = req.params.type
    Achievement.find({ type }, projection, (err, achievements) => {
        if(err) {
            return res.status(400).json({ error: "unknown error" })
        }
        if(achievements) {
            return res.status(200).json({ achievement: achievements })
        }
        return res.status(404).json({ error: "no data" })
    })
}

function readByItem(req, res) {
    const title = req.params.title
    const query = {
        $or: [{
            "item.english": title
        }, {
            "item.korean": title
        }]
    }
    Achievement.find(query, projection, (err, achievements) => {
        if(err) {
            return res.status(400).json({ error: "unknown error "})
        }
        if(achievements) {
            return res.status(200).json({ achievement: achievements })
        }
        return res.status(404).json({ error: "no data" })
    })
}

module.exports = { read, readByType, readByItem }