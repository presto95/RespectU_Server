const express = require("express")
const router = express.Router()
const controller = require("./router.controller")

router.get("/", controller.read)
router.get("/:series", controller.readBySeries)
//router.get("/:")

module.exports = router
