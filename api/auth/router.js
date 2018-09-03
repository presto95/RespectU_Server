const express = require("express")
const router = express.Router()
const controller = require("./router.controller")

router.post("/signin", controller.login)
router.post("/signup", controller.create)

module.exports = router