const express = require("express")
const router = express.Router()
const controller = require("./router.controller")

router.get("/:uid", controller.read)
router.get("/:uid/favorite", controller.readFavorite)
router.post("/:uid/favorite", controller.uploadFavorite)
router.delete("/:uid/favorite", controller.deleteFavorite)
router.get("/:uid/record", controller.readRecord)
router.post("/:uid/record", controller.uploadRecord)
router.post("/:uid/nickname", controller.uploadNickname)

module.exports = router