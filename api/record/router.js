const express = require("express")
const router = express.Router()
const controller = require("./router.controller")

router.get("/:id", controller.readById)
router.post("/", controller.upload)

module.exports = router