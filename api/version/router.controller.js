const fs = require("fs")
const path = require("path")

function read(req, res) {
    const url = path.join(__dirname, "version.json")
    fs.readFile(url, "utf8", (err, data) => {
        if(err) {
            return res.sendStatus(400)
        }
        return res.json(JSON.parse(data))
    })
}

module.exports = { read }