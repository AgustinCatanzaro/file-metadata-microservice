const { StatusCodes } = require('http-status-codes')

const fileMetaData = (req, res) => {
	const { originalname, mimetype, size } = req.file
	res.status(StatusCodes.OK).json({
		name: originalname,
		type: mimetype,
		size: size,
	})
}

module.exports = { fileMetaData }
