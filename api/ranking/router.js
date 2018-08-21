const express = require("express")
const router = express.Router()
const controller = require("./ranking.controller")

router.get("/fetch", controller.fetch)
router.post("/upload", controller.upload)

module.exports = router