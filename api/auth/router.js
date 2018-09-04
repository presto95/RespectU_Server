const express = require("express")
const router = express.Router()
const controller = require("./router.controller")

router.post("/signin", controller.login)
router.post("/signup", controller.create)
router.get("/nickname/:id", controller.readNickname)
router.post("/nickname", controller.updateNickname)

module.exports = router