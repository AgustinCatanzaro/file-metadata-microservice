const express = require('express')
const router = express.Router()

const { fileMetaData } = require('../controllers/file-metadata')

router.route('/fileanalyse').post(fileMetaData)

module.exports = router
