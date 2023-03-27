var express = require('express')
var cors = require('cors')
const multer = require('multer')
require('dotenv').config()

var app = express()

const upload = multer()

const notFoundMiddleware = require('./middleware/not-found')
const errorHandlerMiddleware = require('./middleware/error-handler')

const fileMetaDataRouter = require('./routes/file-metadata')

app.use(upload.single('upfile'))
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/public', express.static(process.cwd() + '/public'))

app.get('/', function (req, res) {
	res.sendFile(process.cwd() + '/views/index.html')
})

app.use('/api', fileMetaDataRouter)

app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)

const port = process.env.PORT || 3000
app.listen(port, function () {
	console.log('Your app is listening on port ' + port)
})
