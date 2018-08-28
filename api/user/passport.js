const passport = require("passport")
const LocalStrategy = require("passport-local").Strategy
const User = require("./user")

module.exports = () => {
    passport.serializeUser((user, done) => {
        done(null, user)
    })
    passport.deserializeUser((user, done) => {
        done(null, user)
    })
    passport.use(new LocalStrategy({
        usernameField: "id",
        passwordField: "password",
        session: true,
        passReqToCallback: false
    }, (id, password, done) => {
        User.findOne({ id }, (err, user) => {
            if(err) {
                return done(err)
            }
            if(!user) {
                return done(null, false, { error: "no data" })
            }
            return user.comparePassword(password, (err, isMatch) => {
                if(isMatch) {
                    return done(null, user)
                }
                return done(null, false, { error: "wrong password" })
            })
        })
    }))
}