const express = require("express")
const router = express.Router()
const controller = require("./router.controller")

router.get("/", controller.read)
router.get("/:type", controller.readByType)
router.get("/music/:title", controller.readByItem)

module.exports = router