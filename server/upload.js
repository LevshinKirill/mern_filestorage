const multer = require('multer')
const shortid = require('shortid')
const path = require('path')

const storage = multer.diskStorage({
  destination: async (req, file, callBack) => {
    callBack(null, 'uploads/')
  },
  filename: async (req, file, callBack) => {
    callBack(null, shortid.generate() + path.extname(file.originalname))
  }
})

const upload = multer({
  storage: storage,
  limits: { fileSize: 1024 * 1024 * 50 }
})

module.exports = upload