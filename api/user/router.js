const express = require("express")
const router = express.Router()
const controller = require("./router.controller")

router.post("/:uid/nickname", controller.updateNickname)
router.post("/login", controller.login)
router.post("/signup", controller.create)

module.exports = router