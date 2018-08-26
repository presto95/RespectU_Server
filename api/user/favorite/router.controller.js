const Favorite = require("./favorite")

//CREATE
function create(req, res) {
    const body = req.body
    const uid = body.uid
    const title = body.title
    Favorite.findOne({ uid, title }, (err, playlist) => {
        if(err) {
            return res.status(400).json({ error: "unknown error" })
        }
        if(!playlist) {
            const Song = require("../../../data/song/song")
            Song.findOne({ title }, (err, song) => {
                if(err) {
                    return res.status(400).json(({ error: "unknown error" }))
                }
                if(song) {
                    const model = new Playlist({
                        uid, title, 
                        series: res.series,
                        composer: res.composer,
                        bpm: res.bpm,
                        button4: res.button4,
                        button5: res.button5,
                        button6: res.button6,
                        button8: res.button8
                    })
                    model.save((err, result) => {
                        if(err) {
                            return res.status(400).json({ error: "unknown error" })
                        }
                        return res.sendStatus9(200)
                    })
                } else {
                    return res.status(404).json({ error: "no data for title" })
                }
            })
        } else {
            return res.status(400).json({ error: "duplicated data" })
        }
    })
}

//READ
function read(req, res) {
    const uid = req.params.uid
    Favorite.find({ uid }, (err, results) => {
        if(err) {
            return res.status(400).json({ error: "unknown error" })
        }
        if(results) {
            return res.json(results)
        }
    })
}

//DELETE
function remove(req, res) {
    const body = req.body
    const uid = body.uid
    const title = body.title
    Favorite.remove({ uid, title }, err => {
        if(err) {
            return res.status(400).json({ error: "unknown error" })
        }
        return res.sendStatus(200)
    })
}

module.exports = { create, read, remove }