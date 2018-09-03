const passport = require("passport")
const LocalStrategy = require("passport-local").Strategy
const User = require("./user")

module.exports = () => {
    passport.serializeUser((user, done) => {
        //Strategy 성공 시 호출됨, user는 deserializeUser의 첫 번째 매개변수로 사용됨
        done(null, user)
    })
    passport.deserializeUser((user, done) => {
        //여기의 user가 req.user가 됨
        done(null, user)
    })
    passport.use(new LocalStrategy({
        usernameField: "id",
        passwordField: "password",
        session: true,
        passReqToCallback: false
    }, (id, password, done) => {
        User.findOne({ id, password }, (err, user) => {
            if(err) {
                return done(err)
            }
            if(user) {
                return done(null, user)
            }
            return done(null, false)
        })
    }))
}