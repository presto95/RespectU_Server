const express = require("express")
const router = express.Router()
const controller = require("./router.controller")

router.get("/", controller.read)
router.post("/", controller.upload)

module.exports = router