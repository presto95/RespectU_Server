const express = require("express")
const router = express.Router()
const controller = require("./router.controller")

router.get("/", controller.read)

module.exports = router