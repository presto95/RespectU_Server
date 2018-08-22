const express = require("express")
const router = express.Router()
const controller = require("./router.controller")

router.get("/:uid", controller.read)
router.get("/:uid/playlist", controller.readPlaylist)
router.post("/:uid/playlist", controller.uploadPlaylist)
router.delete("/:uid/playlist", controller.deletePlaylist)
router.get("/:uid/record", controller.readRecord)
router.post("/:uid/record", controller.uploadRecord)
router.post("/:uid/nickname", controller.uploadNickname)

module.exports = router