const Playlist = require("./playlist")

//CREATE
function create(req, res) {
    const body = req.body
    const uid = body.uid
    const title = body.title
    Playlist.findOne({ uid, title }, (err, res) => {
        if(err) {
            return res.status(400).send()
        }
        if(!res) {
            const Song = require("../../../data/song/song")

            const model = new Playlist({
                uid, title, 
                series
            })
        }
    })
}

//READ
function read(req, res) {

}

//UPDATE
function update(req, res) {

}

//DELETE
function remove(req, res) {

}

module.exports = { create, read, update, remove }