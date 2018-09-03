const passport = require("passport")

function login(req, res) {
    passport.authenticate("local", {
       failureFlash: false,
       successFlash: false 
    }, (req, res) => {
        //인증 성공
        console.log("login!")
        res.sendStatus(200)
    })
}

module.exports = { login }