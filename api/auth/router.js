const express = require("express")
const router = express.Router()
const controller = require("./router.controller")

router.post("/signIn", controller.login)
router.post("/signUp", controller.create)

module.exports = router