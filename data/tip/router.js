const express = require("express")
const router = express.Router()
const controller = require("./router.controller")

router.route("/", controller.fetch)

module.exports = router