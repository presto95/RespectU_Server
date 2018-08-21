const Model = require("../data/tip/tip")

module.exports = () => {
    let title = "Each music's speed settings are saved separately."
        let model = new Model({ title })
        model.save((err, result) => {
            if(err) {
                console.log("save error")
                return
            }
            console.log(result)
        })
}