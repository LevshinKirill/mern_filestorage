const shortid = require('shortid')
const Link = require('../models/Link')
const File = require('../models/File')
const zip = require('express-zip')

class LinkController {
  createLink = async (req, res) => {
    try {
      const link = new Link({
        code: shortid.generate()
      })
      req.files.forEach(async (file) => {
        const fileRecord = new File({
          name: file.filename,
          originalName: file.originalname,
          link: link._id
        })
        await fileRecord.save()
        link.files.push(fileRecord)
        await link.save()
      })
      res.json({
        message: 'Link has been created',
        link: `${req.headers.host}\/link/${link.code}`
      })
    } catch (e) {
      console.log(e)
      res.status(500).json({ message: 'Server error' })
    }
  }

  getFilesByLink = async (req, res) => {
    try {
      const files = []
      const link = await Link.findOne({ code: req.params.code }).populate('files')
      link.files.forEach(file => {
        files.push({
          path: `uploads/${file.name}`,
          name: file.originalName
        })
      })
      res.zip(files)
    } catch (e) {
      console.log(e)
      res.status(500).json({ message: 'Server error' })
    }
  }
}

module.exports = new LinkController()