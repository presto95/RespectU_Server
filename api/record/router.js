const express = require("express")
const router = express.Router()
const controller = require("./router.controller")

router.get("/:uid/:id", controller.readAll)
router.get("/:uid/:id/:title", controller.readByTitle)
router.post("/", controller.upload)

module.exports = router