const express = require("express")
const router = express.Router()
const controller = require("./router.controller")

router.get("/:uid", controller.read)
router.post("/", controller.create)
router.delete("/", controller.remove)

module.exports = router