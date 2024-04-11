const express = require('express')
const { profile, upload, getFiles, getFileByFilter, getFile } = require('../controllers/files-controller')
const router = express.Router()

router.route('/upload').post(upload.single('avatar'), profile)
router.route('/getFiles').get(getFiles)
router.route('/getFile').post(getFile)
router.route('/getFiles/filter').post(getFileByFilter)

module.exports = router