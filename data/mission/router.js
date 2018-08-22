const express = require("express")
const router = express.Router()
const controller = require("./router.controller")

router.get("/:series", controller.read)

module.exports = router